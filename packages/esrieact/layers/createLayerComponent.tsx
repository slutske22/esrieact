import React, {
  Ref,
  createContext,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
} from "react";
import { useMap } from "../map/MapView";
import { useEsriPropertyUpdates, useEvents } from "../utils";

/**
 * The react context object that any layer component creates when rendered
 * and makes available to its descendants
 */
export const LayerContext = createContext<__esri.Layer | __esri.GroupLayer>(
  {} as __esri.Layer,
);

/**
 * Event handlers for all Layer components, some layer components may extend from this
 */
export interface LayerEventHandlerFnMap {
  "layerview-create": __esri.FeatureLayerLayerviewCreateEventHandler;
  "layerview-create-error": __esri.FeatureLayerLayerviewCreateErrorEventHandler;
  "layerview-destroy": __esri.FeatureLayerLayerviewDestroyEventHandler;
}

/**
 * Properties that can be applied to any ESRIEACT Layer component.  Extends from
 * esri's LayerProperties to include child components (i.e. in the case of GroupLayers)
 */
export type LayerComponentProps<
  T extends __esri.LayerProperties = __esri.LayerProperties,
  E extends Partial<LayerEventHandlerFnMap> = {},
> = React.PropsWithChildren<T> & { events?: E; layerOrder?: number };

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
 * @param ref The react ref to be passed from the parent
 * @param properties The layer properties
 * @returns A context provider whose context is the instance to be passed to children, or if there are no children, returns null
 */
export const createLayerComponent = (
  createLayer: CreateLayerFunction<LayerComponentProps>,
  ref: Ref<__esri.Layer>,
  { children, events, layerOrder, ...properties }: LayerComponentProps,
) => {
  const parent = useContext(LayerContext) as __esri.GroupLayer;
  const { map } = useMap();

  /**
   * Create instance only on first mount
   */
  const instance = useMemo(() => {
    const layer = createLayer(properties);

    // If the parent in a GroupLayer (or any EsriInstance that has the .add(layer) method), add it to that,
    // otherwise, add directly to the map
    if (parent && parent.add) {
      parent.add(layer, layerOrder);
    } else {
      map.add(layer, layerOrder);
    }
    return layer;
  }, []);

  useImperativeHandle(ref, () => instance);
  useEsriPropertyUpdates(instance, properties);
  useEvents(instance, events);

  /**
   * Remove layer on unmount
   *
   * TODO: Potentially fade layer out when unmounted, guide here:
   * https://community.esri.com/t5/arcgis-javascript-maps-sdk-questions/fade-a-layer-on-off-smoothly/m-p/70174
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
