import React, { useContext, useImperativeHandle, useMemo } from "react";
import EsriSimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import Graphic from "@arcgis/core/Graphic";
import Renderer from "@arcgis/core/renderers/Renderer";
import { GraphicContext } from "../Graphic";
import { useEsriPropertyUpdates } from "../../utils";
import { RendererContext } from "../renderers";

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
  const parentGraphic = useContext(GraphicContext);
  const parentRenderer = useContext(RendererContext);

  /**
   * Create instance only on first mount
   */
  const instance = useMemo(() => {
    const symbol = new EsriSimpleFillSymbol(properties);

    if (
      !(parentGraphic instanceof Graphic) &&
      !(parentRenderer instanceof Renderer)
    ) {
      // Allow this because it only happens in development and is helpful for devs
      // eslint-disable-next-line
      console.error(
        "You are trying to render a SimpleFillSymbol component that is not a descendant of a Graphic or Renderer.",
        "Did you forget to wrap your SimpleFillSymbol in a Graphic or Renderer?",
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
  }, []) as EsriSimpleFillSymbol;

  useImperativeHandle(ref, () => instance);
  useEsriPropertyUpdates(instance, properties);

  return null;
});
