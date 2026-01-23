import React from "react";
import EsriAttributionWidget from "@arcgis/core/widgets/Attribution";
import { WidgetComponentProps, createWidgetComponent } from ".";

const createWidget = (
  properties: WidgetComponentProps<__esri.AttributionProperties>,
): __esri.Attribution => {
  return new EsriAttributionWidget(properties);
};

/**
 * An Attribution Widget component
 *
 * ArcGIS JS API Source Components:
 * - [Attribution](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Attribution.html)
 */
export const Attribution = React.forwardRef<
  __esri.Attribution,
  WidgetComponentProps<__esri.AttributionProperties>
>((properties, ref) => {
  // @ts-expect-error internal mismatch of arcgis types?
  return createWidgetComponent(createWidget, ref, properties);
});
