import React from "react";
import EsriKMLLayer from "@arcgis/core/layers/KMLLayer";
import {
  LayerComponentProps,
  createLayerComponent,
} from "./createLayerComponent";

const createLayer = (
  properties: LayerComponentProps<__esri.KMLLayerProperties>,
): __esri.KMLLayer => {
  return new EsriKMLLayer(properties);
};

/**
 * A KMLLayer component
 *
 * ArcGIS JS API Source Components:
 * - [KMLLayer](https://developers.arcgis.com/javascript/latest/sample-code/layers-kml/)
 */
export const KMLLayer = React.forwardRef<
  __esri.KMLLayer,
  LayerComponentProps<__esri.KMLLayerProperties>
>((properties, ref) => createLayerComponent(createLayer, ref, properties));
