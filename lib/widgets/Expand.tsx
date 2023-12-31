import React from "react";
import EsriExpandWidget from "@arcgis/core/widgets/Expand";
import { WidgetComponentProps, createWidgetComponent } from ".";

const createWidget = (
  properties: WidgetComponentProps<__esri.ExpandProperties>,
): __esri.Expand => {
  return new EsriExpandWidget(properties);
};

/**
 * An Expand Widget component
 *
 * ArcGIS JS API Source Components:
 * - [Expand](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Expand.html)
 */
export const Expand = React.forwardRef<
  __esri.Expand,
  WidgetComponentProps<__esri.ExpandProperties>
>((properties, ref) => {
  return createWidgetComponent(createWidget, ref, properties);
});
