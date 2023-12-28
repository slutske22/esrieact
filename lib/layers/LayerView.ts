import { useContext, useEffect, useState } from "react";
import { LayerContext } from "./createLayerComponent";
import { MapContext } from "..";
import { useEsriPropertyUpdates } from "../utils";

export function LayerView<T extends __esri.LayerViewProperties>(props: T) {
  const { view } = useContext(MapContext);
  const layer = useContext(LayerContext);

  const [layerView, setLayerView] = useState<__esri.LayerView>();

  // @ts-expect-error dsalkjh
  window.layerView = layerView;

  useEffect(() => {
    view.whenLayerView(layer).then((layerView) => {
      setLayerView(layerView);
    });
  }, []);

  useEsriPropertyUpdates(layerView, props);

  return null;
}
