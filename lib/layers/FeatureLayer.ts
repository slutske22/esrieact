import EsriFeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { createLayerComponent } from "./createLayerComponent";

const createLayer = (
  properties: __esri.FeatureLayerProperties,
): __esri.FeatureLayer => {
  return new EsriFeatureLayer(properties);
};

export const FeatureLayer: React.FC<__esri.FeatureLayerProperties> = (
  properties,
) => createLayerComponent(createLayer, properties);
