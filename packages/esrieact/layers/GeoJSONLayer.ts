import React from "react";
import EsriGeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import {
  LayerComponentProps,
  createLayerComponent,
} from "./createLayerComponent";

/**
 * An event handler function map specific to a GeoJSONLayer
 */
export type GeoJSONLayerEventHandlerFnMap = Partial<{
  refresh: __esri.GeoJSONLayerRefreshEventHandler;
  edits: __esri.GeoJSONLayerEditsEventHandler;
  "layerview-create": __esri.GeoJSONLayerLayerviewCreateEventHandler;
  "layerview-create-error": __esri.GeoJSONLayerLayerviewCreateErrorEventHandler;
  "layerview-destroy": __esri.GeoJSONLayerLayerviewDestroyEventHandler;
}>;

/**
 * Function that takes in properties of a GeoJSONLayer, and returns the GeoJSONLayer instance
 */
const createLayer = (
  properties: LayerComponentProps<
    __esri.GeoJSONLayerProperties,
    GeoJSONLayerEventHandlerFnMap
  >,
): __esri.GeoJSONLayer => {
  return new EsriGeoJSONLayer(properties);
};

/**
 * The GeoJSONLayer React component
 */
export const GeoJSONLayer = React.forwardRef<
  __esri.GeoJSONLayer,
  LayerComponentProps<
    __esri.GeoJSONLayerProperties,
    GeoJSONLayerEventHandlerFnMap
  >
>((properties, ref) => createLayerComponent(createLayer, ref, properties));
