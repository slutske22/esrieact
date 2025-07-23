import React from "react";
import EsriGeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import * as constants from "./constants";
import "@arcgis/map-components/components/arcgis-directional-pad";
import * as Esrieact from "../../../../packages/esrieact/dist";

// Add react-live imports you need here
const ReactLiveScope: unknown = {
  React,
  ...React,

  // constants
  ...constants,
};

// Only import esrieact on the client side
if (typeof window !== "undefined") {
  import("../../../../packages/esrieact/dist").then((Esrireact) => {
    Object.assign(ReactLiveScope as any, { ...Esrireact, EsriGeoJSONLayer });
  });
}

export default ReactLiveScope;
