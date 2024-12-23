import React, { useContext, useImperativeHandle, useMemo } from "react";
import EsriSimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import Graphic from "@arcgis/core/Graphic";
import Renderer from "@arcgis/core/renderers/Renderer";
import { GraphicContext } from "../Graphic";
import { useEsriPropertyUpdates } from "../../utils";

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
  const parent = useContext(GraphicContext);

  /**
   * Create instance only on first mount
   */
  const instance = useMemo(() => {
    const symbol = new EsriSimpleFillSymbol(properties);

    if (!(parent instanceof Graphic) || !(parent instanceof Renderer)) {
      // Allow this because it only happens in development and is helpful for devs
      // eslint-disable-next-line
      console.error(
        "You are trying to render a SimpleFillSymbol component that is not a descendant of a Graphic or Renderer.",
        "Did you forget to wrap your SimpleFillSymbol in a Graphic or Renderer?",
      );

      return;
    }

    if (parent) {
      parent.symbol = symbol;
    }

    return symbol;
  }, []) as EsriSimpleFillSymbol;

  useImperativeHandle(ref, () => instance);
  useEsriPropertyUpdates(instance, properties);

  return null;
});
