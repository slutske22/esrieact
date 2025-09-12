import React from "react";
import EsriColorSliderWidget from "@arcgis/core/widgets/smartMapping/ColorSlider.js";
import { WidgetComponentProps, createWidgetComponent } from ".";

export type ColorSliderEventHandlerFnMap = Partial<{
  "max-change": __esri.SmartMappingSliderBaseMaxChangeEventHandler;
  "min-change": __esri.SmartMappingSliderBaseMinChangeEventHandler;
  "segment-drag": __esri.SmartMappingSliderBaseSegmentDragEventHandler;
  "thumb-change": __esri.SmartMappingSliderBaseThumbChangeEventHandler;
  "thumb-drag": __esri.SmartMappingSliderBaseThumbDragEventHandler;
}>;

const createWidget = (
  properties: WidgetComponentProps<
    __esri.ColorSliderProperties,
    ColorSliderEventHandlerFnMap,
    __esri.ColorSlider
  >,
): __esri.ColorSlider => {
  return new EsriColorSliderWidget(properties);
};

/**
 * A ColorSlider Widget component
 *
 * ArcGIS JS API Source Components:
 * - [ColorSlider](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-smartMapping-ColorSlider.html)
 */
export const ColorSlider = React.forwardRef<
  __esri.ColorSlider,
  WidgetComponentProps<__esri.ColorSliderProperties>
>((properties, ref) => {
  // @ts-expect-error internal mismatch of arcgis types?
  return createWidgetComponent(createWidget, ref, properties);
});
