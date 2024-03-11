import React from "react";
import EsriGraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import {
  LayerComponentProps,
  createLayerComponent,
} from "./createLayerComponent";

const createLayer = (
  properties: LayerComponentProps<__esri.GraphicsLayerProperties>,
): __esri.GraphicsLayer => {
  return new EsriGraphicsLayer(properties);
};

/**
 * A GraphicsLayer component
 *
 * ArcGIS JS API Source Components:
 * - [GraphicsLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html)
 */
export const GraphicsLayer = React.forwardRef<
  __esri.GraphicsLayer,
  LayerComponentProps<__esri.GraphicsLayerProperties>
>((properties, ref) => createLayerComponent(createLayer, ref, properties));
