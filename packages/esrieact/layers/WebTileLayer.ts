import React from "react";
import EsriWebTileLayer from "@arcgis/core/layers/WebTileLayer";
import {
  LayerComponentProps,
  createLayerComponent,
} from "./createLayerComponent";

export type WebTileLayerEventHandlerFnMap = Partial<{
  refresh: __esri.WebTileLayerRefreshEventHandler;
  "layerview-create": __esri.WebTileLayerLayerviewCreateEventHandler;
  "layerview-create-error": __esri.WebTileLayerLayerviewCreateErrorEventHandler;
  "layerview-destroy": __esri.WebTileLayerLayerviewDestroyEventHandler;
}>;

const createLayer = (
  properties: LayerComponentProps<
    __esri.WebTileLayerProperties,
    WebTileLayerEventHandlerFnMap
  >,
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
  LayerComponentProps<
    __esri.WebTileLayerProperties,
    WebTileLayerEventHandlerFnMap
  >
>((properties, ref) => createLayerComponent(createLayer, ref, properties));
