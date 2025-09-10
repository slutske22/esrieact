import React from "react";
import EsriHistogramRangeSliderWidget from "@arcgis/core/widgets/HistogramRangeSlider";
import { WidgetComponentProps, createWidgetComponent } from ".";

export type HistogramRangeSliderEventHandlerFnMap = Partial<{
  "max-change": __esri.HistogramRangeSliderMaxChangeEventHandler;
  "min-change": __esri.HistogramRangeSliderMinChangeEventHandler;
  "segment-drag": __esri.HistogramRangeSliderSegmentDragEventHandler;
  "thumb-change": __esri.HistogramRangeSliderThumbChangeEventHandler;
  "thumb-drag": __esri.HistogramRangeSliderThumbDragEventHandler;
}>;

const createWidget = (
  properties: WidgetComponentProps<
    __esri.HistogramRangeSliderProperties,
    HistogramRangeSliderEventHandlerFnMap,
    __esri.HistogramRangeSlider
  >,
): __esri.HistogramRangeSlider => {
  return new EsriHistogramRangeSliderWidget(properties);
};

/**
 * A HistogramRangeSlider Widget component
 *
 * ArcGIS JS API Source Components:
 * - [HistogramRangeSlider](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-HistogramRangeSlider.html)
 */
export const HistogramRangeSlider = React.forwardRef<
  __esri.HistogramRangeSlider,
  WidgetComponentProps<__esri.HistogramRangeSliderProperties>
>((properties, ref) => {
  // @ts-expect-error internal mismatch of arcgis types?
  return createWidgetComponent(createWidget, ref, properties);
});
