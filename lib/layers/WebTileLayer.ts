import React from "react";
import EsriWebTileLayer from "@arcgis/core/layers/WebTileLayer";
import {
  LayerComponentProps,
  createLayerComponent,
} from "./createLayerComponent";

const createLayer = (
  properties: LayerComponentProps<__esri.WebTileLayerProperties>,
): __esri.WebTileLayer => {
  return new EsriWebTileLayer(properties);
};

/**
 * An WebTileLayer component
 *
 * ArcGIS JS API Source Components:
 * - [WebTileLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WebTileLayer.html)
 */
export const WebTileLayer = React.forwardRef<
  __esri.WebTileLayer,
  LayerComponentProps<__esri.WebTileLayerProperties>
>((properties, ref) => createLayerComponent(createLayer, ref, properties));
