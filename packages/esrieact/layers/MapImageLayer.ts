import React from "react";
import EsriMapImageLayer from "@arcgis/core/layers/MapImageLayer";
import {
  LayerComponentProps,
  createLayerComponent,
} from "./createLayerComponent";

const createLayer = (
  properties: LayerComponentProps<__esri.MapImageLayerProperties>,
): __esri.MapImageLayer => {
  return new EsriMapImageLayer(properties);
};

/**
 * A MapImageLayer component
 *
 * ArcGIS JS API Source Components:
 * - [MapImageLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-MapImageLayer.html)
 */
export const MapImageLayer = React.forwardRef<
  __esri.MapImageLayer,
  LayerComponentProps<__esri.MapImageLayerProperties>
>((properties, ref) => createLayerComponent(createLayer, ref, properties));
