import { useContext } from "react";
import { MapContext } from "../map/MapView";

export type CreateLayerFunction<T extends __esri.LayerProperties> = (
  properties: T,
) => __esri.Layer;

export const createLayerComponent = <T extends __esri.LayerProperties>(
  createLayer: CreateLayerFunction<T>,
  properties: T,
) => {
  const { map } = useContext(MapContext);
  const instance = createLayer(properties);

  map.add(instance);

  return null;
};
