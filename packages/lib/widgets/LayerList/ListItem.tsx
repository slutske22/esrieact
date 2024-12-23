import React from "react";
import EsriListItem from "@arcgis/core/widgets/LayerList/ListItem";
import { WidgetComponentProps, createWidgetComponent } from "..";

const createWidget = (
  properties: WidgetComponentProps<__esri.ListItemProperties>,
): EsriListItem => {
  return new EsriListItem(properties);
};

/**
 * An LayerList ListItem component
 *
 * ArcGIS JS API Source Components:
 * - [ListItem](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-LayerList-ListItem.html)
 */
export const LayerList = React.forwardRef<
  EsriListItem,
  WidgetComponentProps<__esri.ListItemProperties>
  // @ts-expect-error need to figure out why ts is complaining here
>((properties, ref) => createWidgetComponent(createWidget, ref, properties));
