import React from "react";
import EsriSearch from "@arcgis/core/widgets/Search";
import { WidgetComponentProps, createWidgetComponent } from ".";

type ExtendedSearchProperties = __esri.SearchProperties &
  __esri.WidgetProperties;

const createSearchWidget = (
  properties: WidgetComponentProps<ExtendedSearchProperties>,
): EsriSearch => {
  return new EsriSearch(properties);
};

/**
 * A Search Widget component
 *
 * ArcGIS JS API Source Components:
 * - [Search](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Search.html)
 */
export const SearchBar = React.forwardRef<
  EsriSearch,
  WidgetComponentProps<ExtendedSearchProperties>
>((properties, ref) =>
  createWidgetComponent(createSearchWidget, ref, properties),
);
