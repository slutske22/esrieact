import React, { useEffect, useMemo, useRef, useState } from "react";
import * as symbolUtils from "@arcgis/core/symbols/support/symbolUtils.js";

interface Props {
  /**
   * The symbol to render in HTML
   */
  symbol: __esri.Symbol;
  /**
   * HTML rendering options to be passed to `renderPreviewHTML`
   */
  options?: __esri.symbolUtilsRenderPreviewHTMLOptions;
}

/**
 * Component which renders HTML markup for a symbol based on its renderer.symbol JSON
 */
export const SymbolPreview: React.FC<Props> = ({ symbol, options }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [result, setResult] = useState<HTMLElement>(null);

  useEffect(() => {
    if (result && !ref.current.innerHTML) {
      ref.current.appendChild(result);
    }
  }, [result, JSON.stringify(symbol.toJSON())]);

  useMemo(async () => {
    const localOptions =
      symbol.type === "simple-fill" ? { size: 12 } : undefined;

    const symbolNode = await symbolUtils.renderPreviewHTML(
      symbol,
      options ?? localOptions,
    );
    setResult(symbolNode);
  }, [JSON.stringify(symbol.toJSON())]);

  return <div ref={ref} />;
};
