import React from "react";
import EsriUniqueValueRenderer from "@arcgis/core/renderers/UniqueValueRenderer";
import {
  RendererProps,
  createRendererComponent,
} from "./createRendererComponent";

const createUniqueValueRenderer = (
  properties: RendererProps<__esri.UniqueValueRendererProperties>,
) => new EsriUniqueValueRenderer(properties);

/**
 * A UniqueValueRenderer component.  Use as a descendant of any esri component that can use a UniqueValueRenderer
 * and the renderer will be applied
 *
 * ArcGIS JS API Source Components:
 * - [UniqueValueRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html)
 */
export const UniqueValueRenderer = React.forwardRef<
  __esri.UniqueValueRenderer,
  RendererProps<__esri.UniqueValueRendererProperties>
>((properties, ref) =>
  createRendererComponent(createUniqueValueRenderer, ref, properties),
);
