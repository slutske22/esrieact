import React from "react";
import EsriBasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import { WidgetComponentProps, createWidgetComponent } from ".";

const createWidget = (
  properties: WidgetComponentProps<__esri.BasemapGalleryProperties>,
): EsriBasemapGallery => {
  return new EsriBasemapGallery(properties);
};

/**
 * An BasemapGallery Widget component
 *
 * ArcGIS JS API Source Components:
 * - [BasemapGallery](https://developers.arcgis.com/javascript/latest/sample-code/widgets-basemapgallery/)
 */
export const BasemapGallery = React.forwardRef<
  EsriBasemapGallery,
  WidgetComponentProps<__esri.BasemapGalleryProperties>
>((properties, ref) => createWidgetComponent(createWidget, ref, properties));
