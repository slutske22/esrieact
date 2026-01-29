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
  I extends __esri.Widget = __esri.Widget,
> = React.PropsWithChildren<T> & {
  events?: E | ((widgetInstance: I) => E);
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
 * Track the active widget instance and reference count for each container
 * to prevent duplicates in React Strict Mode
 */
const containerInstances = new Map<
  string | HTMLElement,
  { instance: EsriWidget; refCount: number }
>();

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
  const addedToViewUiRef = useRef(false);
  const containerKey = properties.container;

  /**
   * Create instance only on first mount
   * For container widgets, reuse existing instance if one exists to prevent duplicates
   * in React Strict Mode (where component mounts twice)
   */
  const instance = useMemo(() => {
    if (containerKey) {
      const entry = containerInstances.get(containerKey);
      if (entry) {
        // Reuse existing instance and increment ref count
        entry.refCount++;
        return entry.instance;
      }
    }

    const newInstance = createWidget({ ...properties, view, position });

    // Track this instance for container widgets with initial ref count of 1
    if (containerKey) {
      containerInstances.set(containerKey, {
        instance: newInstance,
        refCount: 1,
      });
    }

    return newInstance;
  }, []);

  useEffect(() => {
    if (!instance || !view) return;

    if (parentWidgetContext instanceof Expand) {
      parentWidgetContext.content = instance;
    } else {
      if (!containerKey) {
        view.ui.add(instance, position);
        addedToViewUiRef.current = true;
      }
    }

    /**
     * Remove widget on unmount
     */
    return () => {
      if (parentWidgetContext instanceof Expand) {
        parentWidgetContext.content = "";
      }

      if (addedToViewUiRef.current && view) {
        view.ui.remove(instance);
        addedToViewUiRef.current = false;
      }

      // For container widgets, decrement ref count and only destroy when count reaches 0
      // This handles React Strict Mode where cleanup runs twice
      if (containerKey) {
        const entry = containerInstances.get(containerKey);
        if (entry && entry.instance === instance) {
          entry.refCount--;
          if (entry.refCount <= 0) {
            containerInstances.delete(containerKey);
            instance.destroy();
          }
        }
      }
    };
  }, [instance, view, parentWidgetContext, containerKey, position]);

  useImperativeHandle(ref, () => instance);
  useEsriPropertyUpdates(instance, properties);
  useEvents(instance, typeof events === "function" ? events(instance) : events);

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
