// /**
//  * The react context object that any layer component creates when rendered
//  * and makes available to its descendants
//  */
// export const GroupLayerContext = createContext({} as EsriGroupLayer);

// type GroupLayerProps = __esri.GroupLayerProperties & React.PropsWithChildren;

// export const GroupLayer = React.forwardRef<EsriGroupLayer, GroupLayerProps>(
//   ({ children, ...properties }, ref) => {
//     // If no children, there is no need to render a context provider
//     if (!children) return null;

//     return (
//       <GroupLayerContext.Provider value={instance}>
//         {children}
//       </GroupLayerContext.Provider>
//     );
//   },
// );

import React from "react";
import EsriGroupLayer from "@arcgis/core/layers/GroupLayer";
import {
  LayerComponentProps,
  createLayerComponent,
} from "./createLayerComponent";

const createLayer = (
  properties: LayerComponentProps<__esri.GroupLayerProperties>,
): EsriGroupLayer => {
  return new EsriGroupLayer(properties);
};

/**
 * A GroupLayer component
 *
 * ArcGIS JS API Source Components:
 * - [GroupLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GroupLayer.html)
 */
export const GroupLayer = React.forwardRef<
  EsriGroupLayer,
  LayerComponentProps<__esri.GroupLayerProperties>
>((properties, ref) => createLayerComponent(createLayer, ref, properties));
