import React from "react";
import EsriGeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import histogram from "@arcgis/core/smartMapping/statistics/histogram.js";
import summaryStatistics from "@arcgis/core/smartMapping/statistics/summaryStatistics.js";
import { createContinuousRenderer } from "@arcgis/core/smartMapping/renderers/color.js";
import * as constants from "./constants";
import * as utils from "./utils";

let Esrieact: Record<string, unknown> = {};

// Keep esrieact available synchronously in browser for react-live,
// while avoiding SSR evaluation of browser-only code during builds.
if (typeof window !== "undefined") {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const esrieactModule = require("../../../../packages/esrieact/dist");
  Esrieact = (esrieactModule?.default ?? esrieactModule) as Record<
    string,
    unknown
  >;
}

// Add react-live imports you need here
const ReactLiveScope: unknown = {
  React,
  ...React,

  // constants
  ...constants,

  // Utils
  ...utils,

  // Direct ESRI components
  EsriGeoJSONLayer,
  Esrieact,
  ...Esrieact,

  // Smart Mapping
  histogram,
  summaryStatistics,
  createContinuousRenderer,
};

// Only import browser-dependent web components on the client side.
if (typeof window !== "undefined") {
  import("@arcgis/map-components/components/arcgis-directional-pad");
}

export default ReactLiveScope;
