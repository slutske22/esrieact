import {
  Ref,
  createContext,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import { MapContext } from "../map/MapView";
import { useEsriPropertyUpdates } from "../utils";

/**
 * The react context object that any layer component creates when rendered
 * and makes available to its descendants
 */
export const LayerContext = createContext({} as __esri.Layer);

export type EventHandlerMap = { [key: string]: Function };

export interface LayerEventHandlerFnMap {
  "layerview-create": __esri.FeatureLayerLayerviewCreateEventHandler;
  "layerview-create-error": __esri.FeatureLayerLayerviewCreateErrorEventHandler;
  "layerview-destroy": __esri.FeatureLayerLayerviewDestroyEventHandler;
}

export type LayerComponentProps<
  T extends __esri.LayerProperties = __esri.LayerProperties,
  E extends Partial<LayerEventHandlerFnMap> = {},
> = T & React.PropsWithChildren & { events?: E };

/**
 * Function that takes in layer properties and returns an esri Layer instance. Properties must be
 * any esri properties that extend esri.LayerProperties, and optional children
 */
export type CreateLayerFunction<T extends LayerComponentProps> = (
  properties: T,
) => __esri.Layer;

/**
 * Factory function to create an esrieact layer component
 * @param createLayer Function that takes in the layer properties (which must extend from __esri.LayerProperties)
 *  and returns the layer instance
 * @param properties The layer properties
 * @returns null
 */
export const createLayerComponent = (
  createLayer: CreateLayerFunction<LayerComponentProps>,
  ref: Ref<__esri.Layer>,
  { children, events, ...properties }: LayerComponentProps<{}, EventHandlerMap>,
) => {
  const { map } = useContext(MapContext);
  const handlers = useRef<IHandle[]>([]);

  /**
   * Create instance only on first mount
   */
  const instance = useMemo(() => {
    const layer = createLayer(properties);
    map.add(layer);
    return layer;
  }, []);

  /**
   * Attach event listeners on mount, if there are any
   */
  useEffect(() => {
    if (instance && events) {
      handlers.current.forEach((handler) => handler.remove());
      handlers.current = Object.keys(events).map((eventName) => {
        // @ts-expect-error Need typescript mapped types here, but will work even if TS is picky
        return instance.on(eventName, events[eventName]);
      });
    }
    // Remove listeners and flush listener ref on unmount
    return () => {
      handlers.current.forEach((handler) => handler.remove());
      handlers.current = [];
    };
  }, [instance, events]);

  useImperativeHandle(ref, () => instance);
  useEsriPropertyUpdates(instance, properties);

  /**
   * Remove layer on unmount
   */
  useEffect(() => {
    return () => {
      map.remove(instance);
    };
  }, []);

  // If no children, there is no need to render a context provider
  if (!children) return null;

  return (
    <LayerContext.Provider value={instance}>{children}</LayerContext.Provider>
  );
};
