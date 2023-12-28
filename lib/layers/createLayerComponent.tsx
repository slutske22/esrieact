import {
  ReactNode,
  Ref,
  createContext,
  useContext,
  useImperativeHandle,
} from "react";
import { MapContext } from "../map/MapView";
import { useEsriPropertyUpdates } from "../utils";

/**
 * The react context object that any layer component creates when rendered
 * and makes available to its descendants
 */
export const LayerContext = createContext({} as __esri.Layer);

export type LayerComponentProps<
  T extends __esri.LayerProperties = __esri.LayerProperties,
> = T & {
  children?: ReactNode | ReactNode[];
};

/**
 * Function that takes in layer properties and returns an esri Layer instance
 */
export type CreateLayerFunction<T extends LayerComponentProps> = (
  properties: T,
) => __esri.Layer;

/**
 * Factory function to create an esrieact layer component
 * @param createLayer Function that takes in the layer properties and returns the layer instance
 * @param properties The layer properties
 * @returns null
 */
export const createLayerComponent = <
  P extends LayerComponentProps,
  R extends __esri.Layer,
>(
  createLayer: CreateLayerFunction<P>,
  ref: Ref<R>,
  { children, ...properties }: P,
) => {
  const { map } = useContext(MapContext);
  // @ts-expect-error Error here is legitimate, so this either needs to be more carefully typed
  const instance = createLayer(properties);

  map.add(instance);

  useEsriPropertyUpdates(instance, properties);
  /**
   * Error here is legitimate, so this either needs to be more carefully typed, or any use of createLayerComponent should coerce
   * the ref type to a very specific ref (which the layer components should already be doing!)
   * 'Layer' is assignable to the constraint of type 'R', but 'R' could be instantiated with a different subtype of constraint 'Layer'.
   */
  // @ts-expect-error Error here is legitimate, so this either needs to be more carefully typed
  useImperativeHandle(ref, () => instance);

  if (!children) return null;

  return (
    <LayerContext.Provider value={instance}>{children}</LayerContext.Provider>
  );
};
