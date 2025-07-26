import React from "react";
import EsriMapImageLayer from "@arcgis/core/layers/MapImageLayer";
import {
  LayerComponentProps,
  createLayerComponent,
} from "./createLayerComponent";

export type MapImageLayerEventHandlerFnMap = Partial<{
  refresh: __esri.MapImageLayerRefreshEventHandler;
  "layerview-create": __esri.MapImageLayerLayerviewCreateEventHandler;
  "layerview-create-error": __esri.MapImageLayerLayerviewCreateErrorEventHandler;
  "layerview-destroy": __esri.MapImageLayerLayerviewDestroyEventHandler;
}>;

const createLayer = (
  properties: LayerComponentProps<
    __esri.MapImageLayerProperties,
    MapImageLayerEventHandlerFnMap
  >,
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
  LayerComponentProps<
    __esri.MapImageLayerProperties,
    MapImageLayerEventHandlerFnMap
  >
>((properties, ref) => createLayerComponent(createLayer, ref, properties));
