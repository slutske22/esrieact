import React from "react";
import EsriFeatureLayer from "@arcgis/core/layers/FeatureLayer";
import {
  LayerComponentProps,
  createLayerComponent,
} from "./createLayerComponent";
import { PropsChangedCallback } from "../utils";

export type FeatureLayerEventHandlerFnMap = Partial<{
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
 * Source-binding props that ESRI's FeatureLayer doesn't fully react to via the
 * Accessor framework: setting `instance.url` or `instance.layerId` updates the
 * property bag but the layer keeps querying its originally-loaded source until
 * `.refresh()` is called.
 */
const REFRESH_ON_CHANGE_PROPS = ["url", "layerId"];

const onPropsChanged: PropsChangedCallback<__esri.Layer> = (
  changedProps,
  instance,
) => {
  if (changedProps.some((p) => REFRESH_ON_CHANGE_PROPS.includes(p))) {
    (instance as __esri.FeatureLayer).refresh();
  }
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
>((properties, ref) =>
  createLayerComponent(createLayer, ref, properties, onPropsChanged),
);
