import React from "react";
import EsriGraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import {
  LayerComponentProps,
  createLayerComponent,
} from "./createLayerComponent";

export type GraphicsLayerEventHandlerFnMap = Partial<{
  refresh: __esri.FeatureLayerRefreshEventHandler;
  edits: __esri.FeatureLayerEditsEventHandler;
  "layerview-create": __esri.FeatureLayerLayerviewCreateEventHandler;
  "layerview-create-error": __esri.FeatureLayerLayerviewCreateErrorEventHandler;
  "layerview-destroy": __esri.FeatureLayerLayerviewDestroyEventHandler;
}>;

const createLayer = (
  properties: LayerComponentProps<
    __esri.GraphicsLayerProperties,
    GraphicsLayerEventHandlerFnMap
  >,
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
  LayerComponentProps<
    __esri.GraphicsLayerProperties,
    GraphicsLayerEventHandlerFnMap
  >
>((properties, ref) => createLayerComponent(createLayer, ref, properties));
