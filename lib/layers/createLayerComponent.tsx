import {
  Ref,
  createContext,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
} from "react";
import { MapContext } from "../map/MapView";
import { useEsriPropertyUpdates, useEvents } from "../utils";

/**
 * The react context object that any layer component creates when rendered
 * and makes available to its descendants
 */
export const LayerContext = createContext<__esri.Layer | __esri.GroupLayer>(
  {} as __esri.Layer,
);

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
  const parent = useContext(LayerContext) as __esri.GroupLayer;
  const { map } = useContext(MapContext);

  /**
   * Create instance only on first mount
   */
  const instance = useMemo(() => {
    const layer = createLayer(properties);

    // If the parent in a GroupLayer (or any EsriInstance that has the .add(layer) method), add it to that,
    // otherwise, add directly to the map
    if (parent && parent.add) {
      parent.add(layer);
    } else {
      map.add(layer);
    }
    return layer;
  }, []);

  useImperativeHandle(ref, () => instance);
  useEsriPropertyUpdates(instance, properties);
  useEvents(instance, events);

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
