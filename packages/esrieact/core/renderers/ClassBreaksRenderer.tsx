import React from "react";
import EsriClassBreaksRenderer from "@arcgis/core/renderers/ClassBreaksRenderer";
import { RendererProps, createRendererComponent } from "esrieact";

const createClassBreaksRenderer = (
  properties: RendererProps<__esri.ClassBreaksRendererProperties>,
) => new EsriClassBreaksRenderer(properties);

/**
 * A ClassBreaksRenderer component.  Use as a descendant of any esri component that can use a ClassBreaksRenderer
 * and the renderer will be applied
 *
 * ArcGIS JS API Source Components:
 * - [ClassBreaksRenderer](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-ClassBreaksRenderer.html)
 */
export const ClassBreaksRenderer = React.forwardRef<
  __esri.ClassBreaksRenderer,
  RendererProps<__esri.ClassBreaksRendererProperties>
>((properties, ref) =>
  createRendererComponent(createClassBreaksRenderer, ref, properties),
);
