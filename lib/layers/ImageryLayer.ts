import React from "react";
import EsriImageryLayer from "@arcgis/core/layers/ImageryLayer";
import {
  LayerComponentProps,
  createLayerComponent,
} from "./createLayerComponent";

const createLayer = (
  properties: LayerComponentProps<__esri.ImageryLayerProperties>,
): __esri.ImageryLayer => {
  return new EsriImageryLayer(properties);
};

/**
 * An ImageryLayer component
 *
 * ArcGIS JS API Source Components:
 * - [ImageryLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-ImageryLayer.html)
 */
export const ImageryLayer = React.forwardRef<
  __esri.ImageryLayer,
  LayerComponentProps<__esri.ImageryLayerProperties>
>((properties, ref) => createLayerComponent(createLayer, ref, properties));
