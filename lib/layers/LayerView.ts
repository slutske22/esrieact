import React, { useContext, useEffect, useState } from "react";
import { LayerContext } from "./createLayerComponent";
import { MapContext } from "..";
import { useEsriPropertyUpdates } from "../utils";

export const LayerView: React.FC<__esri.LayerViewProperties> = (props) => {
  const { view } = useContext(MapContext);
  const layer = useContext(LayerContext);

  const [layerView, setLayerView] = useState<__esri.LayerView>();

  useEffect(() => {
    console.log((layer as __esri.FeatureLayer).url);
    view.whenLayerView(layer).then((layerView) => setLayerView(layerView));
  }, []);

  useEsriPropertyUpdates(layerView, props);

  return null;
};
