import React from "react";
import EsriSketch from "@arcgis/core/widgets/Sketch";
import { WidgetComponentProps, createWidgetComponent } from ".";
// import "./SketchStyle.scss";

type SketchEventHandlerFnMap = Partial<{
  delete: __esri.SketchDeleteEventHandler;
  create: __esri.SketchCreateEventHandler;
  update: __esri.SketchUpdateEventHandler;
  redo: __esri.SketchRedoEventHandler;
  undo: __esri.SketchUndoEventHandler;
}>;

interface SketchProperties extends __esri.SketchProperties {
  layer: __esri.GraphicsLayer;
}

const createWidget = (
  properties: WidgetComponentProps<SketchProperties, SketchEventHandlerFnMap>,
): EsriSketch => {
  return new EsriSketch(properties);
};

/**
 * An Sketch Widget component
 *
 * ArcGIS JS API Source Components:
 * - [Sketch](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Sketch.html)
 */
export const Sketch = React.forwardRef<
  EsriSketch,
  WidgetComponentProps<SketchProperties, SketchEventHandlerFnMap>
  // @ts-expect-error Allow this error to make TS defs correct
>((properties, ref) => createWidgetComponent(createWidget, ref, properties));
