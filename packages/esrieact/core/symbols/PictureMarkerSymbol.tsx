import React, { useContext, useImperativeHandle, useMemo } from "react";
import EsriPictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol.js";
import Graphic from "@arcgis/core/Graphic";
import Renderer from "@arcgis/core/renderers/Renderer";
import { GraphicContext } from "../Graphic";
import { useEsriPropertyUpdates } from "../../utils";
import { RendererContext } from "../renderers";

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
  const parentGraphic = useContext(GraphicContext);
  const parentRenderer = useContext(RendererContext);

  /**
   * Create instance only on first mount
   */
  const instance = useMemo(() => {
    const symbol = new EsriPictureMarkerSymbol(properties);

    if (
      !(parentGraphic instanceof Graphic) &&
      !(parentRenderer instanceof Renderer)
    ) {
      // Allow this because it only happens in development and is helpful for devs
      // eslint-disable-next-line
      console.error(
        "You are trying to render a PictureMarkerSymbol component that is not a descendant of a Graphic or Renderer.",
        "Did you forget to wrap your PictureMarkerSymbol in a Graphic or Renderer?",
      );

      return;
    }

    if (parentRenderer) {
      // @ts-expect-error allow this for renderers that do take a symbol
      parentRenderer.symbol = symbol;
      return symbol;
    }

    if (parentGraphic) {
      parentGraphic.symbol = symbol;
      return symbol;
    }

    return symbol;
  }, []) as EsriPictureMarkerSymbol;

  useImperativeHandle(ref, () => instance);
  useEsriPropertyUpdates(instance, properties);

  return null;
});
