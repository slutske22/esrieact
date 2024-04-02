import React from "react";
import EsriSimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import {
  RendererProps,
  createRendererComponent,
} from "./createRendererComponent";

const createSimpleRenderer = (
  properties: RendererProps<__esri.SimpleRendererProperties>,
) => new EsriSimpleRenderer(properties);

/**
 * A SimpleRenderer component.  Use as a descendant of any esri component that can use a SimpleRenderer
 * and the renderer will be applied
 *
 * ArcGIS JS API Source Components:
 * - [SimpleRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-SimpleRenderer.html)
 */
export const SimpleRenderer = React.forwardRef<
  __esri.UniqueValueRenderer,
  RendererProps<__esri.SimpleRendererProperties>
>((properties, ref) =>
  createRendererComponent(createSimpleRenderer, ref, properties),
);
