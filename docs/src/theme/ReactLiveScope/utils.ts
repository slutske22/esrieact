// needed for type definition availability
// eslint-disable-next-line
import { createContinuousRenderer } from "@arcgis/core/smartMapping/renderers/color.js";

/**
 * Converts a renderer response to a format that is compatible with Docusaurus and React 18
 */
export const docusaurusCompatibleStops = (
  rendererResponse: __esri.ContinuousRendererResult,
) => {
  return rendererResponse.visualVariable.stops.map((stop) => {
    // Create a new object with only the required properties
    let colorString;
    if (typeof stop.color === "string") {
      colorString = stop.color;
    } else if (stop.color && typeof stop.color === "object") {
      // Try different methods to get a string representation
      colorString = stop.color.toHex
        ? stop.color.toHex()
        : stop.color.toString
          ? stop.color.toString()
          : `#${stop.color.r?.toString(16).padStart(2, "0") || "00"}${
              stop.color.g?.toString(16).padStart(2, "0") || "00"
            }${stop.color.b?.toString(16).padStart(2, "0") || "00"}`;
    } else {
      colorString = String(stop.color);
    }

    const newStop = {
      value: stop.value,
      color: colorString,
      label: stop.label,
    };

    return newStop;
  });
};
