import React from "react";
import EsriLayerList from "@arcgis/core/widgets/LayerList";
import { WidgetComponentProps, createWidgetComponent } from "..";

const createWidget = (
  properties: WidgetComponentProps<__esri.LayerListProperties>,
): EsriLayerList => {
  return new EsriLayerList(properties);
};

/**
 * An LayerList Widget component
 *
 * ArcGIS JS API Source Components:
 * - [LayerList](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-LayerList.html)
 */
export const LayerList = React.forwardRef<
  EsriLayerList,
  WidgetComponentProps<__esri.LayerListProperties>
>((properties, ref) => createWidgetComponent(createWidget, ref, properties));
