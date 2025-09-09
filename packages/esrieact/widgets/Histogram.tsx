import React from "react";
import EsriHistogramWidget from "@arcgis/core/widgets/Histogram";
import { WidgetComponentProps, createWidgetComponent } from ".";

const createWidget = (
  properties: WidgetComponentProps<__esri.HistogramProperties>,
): __esri.Histogram => {
  return new EsriHistogramWidget(properties);
};

/**
 * A Histogram Widget component
 *
 * ArcGIS JS API Source Components:
 * - [Histogram](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Histogram.html)
 */
export const Histogram = React.forwardRef<
  __esri.Histogram,
  WidgetComponentProps<__esri.HistogramProperties>
>((properties, ref) => {
  // @ts-expect-error internal mismatch of arcgis types?
  return createWidgetComponent(createWidget, ref, properties);
});
