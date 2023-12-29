import React from "react";
import EsriVectorTileLayer from "@arcgis/core/layers/VectorTileLayer";
import {
  LayerComponentProps,
  createLayerComponent,
} from "./createLayerComponent";

const createLayer = (
  properties: LayerComponentProps<__esri.VectorTileLayerProperties>,
): __esri.VectorTileLayer => {
  return new EsriVectorTileLayer(properties);
};

/**
 * A VectorTileLayer component
 *
 * ArcGIS JS API Source Components:
 * - [VectorTileLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-VectorTileLayer.html)
 */
export const VectorTileLayer = React.forwardRef<
  __esri.VectorTileLayer,
  LayerComponentProps<__esri.VectorTileLayerProperties>
>((properties, ref) => createLayerComponent(createLayer, ref, properties));
