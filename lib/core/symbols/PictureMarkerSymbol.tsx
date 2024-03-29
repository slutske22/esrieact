import React, { useContext, useImperativeHandle, useMemo } from "react";
import EsriPictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol.js";
import Graphic from "@arcgis/core/Graphic";
import { GraphicContext } from "../Graphic";
import { useEsriPropertyUpdates } from "../../utils";

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
  const parent = useContext(GraphicContext);

  /**
   * Create instance only on first mount
   */
  const instance = useMemo(() => {
    const symbol = new EsriPictureMarkerSymbol(properties);

    if (!(parent instanceof Graphic)) {
      // Allow this because it only happens in development and is helpful for devs
      // eslint-disable-next-line
      console.error(
        "You are trying to render a PictureMarkerSymbol component that is not a descendant of a Graphic or Renderer.",
        "Did you forget to wrap your PictureMarkerSymbol in a Graphic or Renderer?",
      );

      return;
    }

    if (parent) {
      parent.symbol = symbol;
    }

    return symbol;
  }, []) as EsriPictureMarkerSymbol;

  useImperativeHandle(ref, () => instance);
  useEsriPropertyUpdates(instance, properties);

  return null;
});
