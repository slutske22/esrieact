import React from "react";
import EsriLegendWidget from "@arcgis/core/widgets/Legend";
import { WidgetComponentProps, createWidgetComponent } from ".";

const createWidget = (
  properties: WidgetComponentProps<__esri.LegendProperties>,
): __esri.Legend => {
  return new EsriLegendWidget(properties);
};

/**
 * A Legend Widget component
 *
 * ArcGIS JS API Source Components:
 * - [Legend](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Legend.html)
 */
export const Legend = React.forwardRef<
  __esri.Legend,
  WidgetComponentProps<__esri.LegendProperties>
>((properties, ref) => {
  return createWidgetComponent(createWidget, ref, properties);
});
