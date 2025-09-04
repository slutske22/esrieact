import React from "react";
import EsriSimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import { createSymbolComponent } from "./createSymbolComponent";

/**
 * A SimpleFillSymbol component, must be rendered as a child of a Renderer component or Graphic component
 *
 * ArcGIS JS API Source Components:
 * - [SimpleFillSymbol](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-SimpleFillSymbol.html)
 */
export const SimpleFillSymbol = React.forwardRef<
  __esri.SimpleFillSymbol,
  __esri.SimpleFillSymbolProperties
>((properties, ref) => {
  return createSymbolComponent(
    (props) =>
      new EsriSimpleFillSymbol(props as __esri.SimpleFillSymbolProperties),
    ref,
    properties,
    "SimpleFillSymbol",
  );
});
