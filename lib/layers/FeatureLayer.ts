import React from "react";
import EsriFeatureLayer from "@arcgis/core/layers/FeatureLayer";
import {
  LayerComponentProps,
  createLayerComponent,
} from "./createLayerComponent";

type FeatureLayerEventHandlerFnMap = Partial<{
  refresh: __esri.FeatureLayerRefreshEventHandler;
  edits: __esri.FeatureLayerEditsEventHandler;
  "layerview-create": __esri.FeatureLayerLayerviewCreateEventHandler;
  "layerview-create-error": __esri.FeatureLayerLayerviewCreateErrorEventHandler;
  "layerview-destroy": __esri.FeatureLayerLayerviewDestroyEventHandler;
}>;

const createLayer = (
  properties: LayerComponentProps<
    __esri.FeatureLayerProperties,
    FeatureLayerEventHandlerFnMap
  >,
): __esri.FeatureLayer => {
  return new EsriFeatureLayer(properties);
};

/**
 * A FeatureLayer component
 *
 * ArcGIS JS API Source Components:
 * - [FeatureLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html)
 */
export const FeatureLayer = React.forwardRef<
  __esri.FeatureLayer,
  LayerComponentProps<
    __esri.FeatureLayerProperties,
    FeatureLayerEventHandlerFnMap
  >
>((properties, ref) => createLayerComponent(createLayer, ref, properties));
