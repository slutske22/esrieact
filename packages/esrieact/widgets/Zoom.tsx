import React from "react";
import EsriZoomWidget from "@arcgis/core/widgets/Zoom";
import { WidgetComponentProps, createWidgetComponent } from ".";

const createWidget = (
  properties: WidgetComponentProps<__esri.ZoomProperties>,
): __esri.Zoom => {
  return new EsriZoomWidget(properties);
};

/**
 * A Zoom Widget component
 *
 * ArcGIS JS API Source Components:
 * - [Zoom](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Zoom.html)
 */
export const Zoom = React.forwardRef<
  __esri.Zoom,
  WidgetComponentProps<__esri.ZoomProperties>
>((properties, ref) => {
  // @ts-expect-error internal mismatch of arcgis types?
  return createWidgetComponent(createWidget, ref, properties);
});
