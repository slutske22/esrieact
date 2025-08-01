import React, {
  Ref,
  createContext,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import EsriWidget from "@arcgis/core/widgets/Widget";
import Expand from "@arcgis/core/widgets/Expand";
import { useMap } from "..";
import { useEsriPropertyUpdates, useEvents } from "../utils";

/**
 * Properties that can be applied to any ESRIEACT Widget component.  Extends from
 * esri's WidgetProperties to include child components and the widget position
 */
export type WidgetComponentProps<
  T extends __esri.WidgetProperties = __esri.WidgetProperties & {
    view?: __esri.MapView;
  },
  E extends Record<string, Function> = {},
> = React.PropsWithChildren<T> & {
  events?: E;
  position?: string | __esri.UIAddPosition;
};

/**
 * Function that takes in layer properties and returns an esri Layer instance. Properties must be
 * any esri properties that extend esri.LayerProperties, and optional children
 */
export type CreateWidgetFunction<
  T extends WidgetComponentProps = WidgetComponentProps,
> = (properties: T) => __esri.Widget;

/**
 * The react context object that any widget component creates when rendered
 * and makes available to its descendants
 */
export const WidgetContext = createContext<EsriWidget>({} as EsriWidget);

/**
 * Factory function to create an esrieact widget component
 * @param createWidget Function that takes in the widget properties (which must extend from __esri.WidgetProperties)
 *  and returns the widget instance
 * @param ref The react ref to be passed from the parent
 * @param properties The widget properties
 * @returns A context provider whose context is the instance to be passed to children, or if there are no children, returns null
 */
export function createWidgetComponent<P extends WidgetComponentProps>(
  createWidget: CreateWidgetFunction,
  ref: Ref<EsriWidget>,
  { children, events, position, view: viewFromProps, ...properties }: P,
) {
  const { view } = useMap();

  const parentWidgetContext = useContext(WidgetContext);
  const childrenRef = useRef<HTMLElement>(null);

  const instance = useMemo(() => {
    const instance = createWidget({ ...properties, view });
    if (parentWidgetContext instanceof Expand) {
      parentWidgetContext.content = instance;
      return instance;
    }

    if (!properties.container) {
      view.ui.add(instance, position);
    }

    return instance;
  }, [view]);

  useImperativeHandle(ref, () => instance);
  useEsriPropertyUpdates(instance, properties);
  useEvents(instance, events);

  /**
   * Check if children is a singular HTML element and assign its ref to instance.content,
   * enables dev to make arbitrary UI elements children of an Expand widget
   */
  useEffect(() => {
    if (children && childrenRef.current && instance) {
      if (React.isValidElement(children)) {
        if (instance instanceof Expand) {
          instance.content = childrenRef.current;
        }
      }
    }
  }, [children, instance]);

  /**
   * Remove widget on unmount
   */
  useEffect(() => {
    return () => {
      view.ui.remove(instance);
    };
  }, []);

  if (!children) return null;

  // Pass ref to the child element - works for both HTML elements and forwardRef components
  return (
    <WidgetContext.Provider value={instance}>
      {React.cloneElement(children as React.ReactElement<any>, {
        ref: childrenRef,
      })}
    </WidgetContext.Provider>
  );
}
