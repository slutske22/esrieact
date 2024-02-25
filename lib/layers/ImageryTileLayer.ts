import React from "react";
import EsriImageryTileLayer from "@arcgis/core/layers/ImageryTileLayer";
import {
  LayerComponentProps,
  createLayerComponent,
} from "./createLayerComponent";

const createLayer = (
  properties: LayerComponentProps<__esri.ImageryTileLayerProperties>,
): __esri.ImageryTileLayer => {
  return new EsriImageryTileLayer(properties);
};

/**
 * An ImageryTileLayer component
 *
 * ArcGIS JS API Source Components:
 * - [ImageryTileLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-ImageryTileLayer.html)
 */
export const ImageryTileLayer = React.forwardRef<
  __esri.ImageryTileLayer,
  LayerComponentProps<__esri.ImageryTileLayerProperties>
>((properties, ref) => createLayerComponent(createLayer, ref, properties));
