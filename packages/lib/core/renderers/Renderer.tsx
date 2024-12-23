import React from "react";
import EsriRenderer from "@arcgis/core/renderers/Renderer";
import {
  RendererProps,
  createRendererComponent,
} from "./createRendererComponent";

const createRenderer = (properties: RendererProps) =>
  new EsriRenderer(properties);

/**
 * A generic Renderer component
 *
 * ArcGIS JS API Source Components:
 * - [Renderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-Renderer.html)
 */
export const Renderer = React.forwardRef<__esri.Renderer, RendererProps>(
  (properties, ref) => createRendererComponent(createRenderer, ref, properties),
);
