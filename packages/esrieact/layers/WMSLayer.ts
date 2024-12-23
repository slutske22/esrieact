import React from "react";
import EsriWMSLayer from "@arcgis/core/layers/WMSLayer";
import {
  LayerComponentProps,
  createLayerComponent,
} from "./createLayerComponent";

const createLayer = (
  properties: LayerComponentProps<__esri.WMSLayerProperties>,
): __esri.WMSLayer => {
  return new EsriWMSLayer(properties);
};

/**
 * A WMS Layer component
 *
 * ArcGIS JS API Source Components:
 * - [WMSLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-WMSLayer.html)
 */
export const WMSLayer = React.forwardRef<
  __esri.WMSLayer,
  LayerComponentProps<__esri.WMSLayerProperties>
>((properties, ref) => createLayerComponent(createLayer, ref, properties));
