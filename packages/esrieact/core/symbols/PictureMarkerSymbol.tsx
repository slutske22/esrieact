import React from "react";
import EsriPictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol.js";
import { createSymbolComponent } from "./createSymbolComponent";

/**
 * A PictureMarkerSymbol component, must be rendered as a child of a Renderer component or Graphic component
 *
 * ArcGIS JS API Source Components:
 * - [PictureMarkerSymbol](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-PictureMarkerSymbol.html)
 */
export const PictureMarkerSymbol = React.forwardRef<
  __esri.PictureMarkerSymbol,
  __esri.PictureMarkerSymbolProperties
>((properties, ref) => {
  return createSymbolComponent(
    (props) =>
      new EsriPictureMarkerSymbol(
        props as __esri.PictureMarkerSymbolProperties,
      ),
    ref,
    properties,
    "PictureMarkerSymbol",
  );
});
