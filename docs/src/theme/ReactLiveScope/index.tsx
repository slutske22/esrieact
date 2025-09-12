import React from "react";
import EsriGeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import histogram from "@arcgis/core/smartMapping/statistics/histogram.js";
import summaryStatistics from "@arcgis/core/smartMapping/statistics/summaryStatistics.js";
import { createContinuousRenderer } from "@arcgis/core/smartMapping/renderers/color.js";
import * as constants from "./constants";
import "@arcgis/map-components/components/arcgis-directional-pad";
// Needs to be in scope for react-live even if not used
// eslint-disable-next-line
import * as Esrieact from "../../../../packages/esrieact/dist";

// Add react-live imports you need here
const ReactLiveScope: unknown = {
  React,
  ...React,

  // constants
  ...constants,

  // Direct ESRI components
  EsriGeoJSONLayer,

  // Smart Mapping
  histogram,
  summaryStatistics,
  createContinuousRenderer,
};

// Only import esrieact on the client side
if (typeof window !== "undefined") {
  import("../../../../packages/esrieact/dist").then((Esrireact) => {
    Object.assign(ReactLiveScope as any, Esrireact);
  });
}

export default ReactLiveScope;
