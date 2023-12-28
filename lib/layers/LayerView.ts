import React, {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { LayerContext } from "./createLayerComponent";
import { MapContext } from "..";
import { useEsriPropertyUpdates } from "../utils";

/**
 * Generic function to create a layer view component.  Can create a react-wrapped LayerView.  Any component
 * created from this function must be used as a child of a Layer that has a layer view, i.e. `view.whenLayerView(layer)` can
 * be called on that layer.  Can be casted to specify what kind of LayerView and LayerViewProps are being referred to by
 * the parent layer component
 *
 * @example
 * // defaults to basic esri LayerView, not very useful
 * const LayerView = createLayerViewComponent();
 *
 * const SomeComponent = () => {
 *    return (
 *      <Layer>
 *        <LayerView />
 *      </Layer>
 *    )
 * }
 *
 * @example
 * // More specific casting for a specific type of Layer, i.e. a FeatureLayer
 * const FeatureLayerView = createLayerViewComponent<FeatureLayerViewProperties, FeatureLayerView>();
 *
 * const SomeComponent = () => {
 *    return (
 *      <FeatureLayer>
 *        <FeatureLayerView
 *          // Filter property of FeatureLayerView recognized
 *          filter={{ where: 'SOME SQL CLAUSE' }}
 *        />
 *      </FeatureLayer>
 *    )
 * }
 */
export function createLayerViewComponent<
  P extends __esri.LayerViewProperties,
  R extends __esri.LayerView,
>() {
  return forwardRef<R, P>(function LayerViewCore<R, P>(
    props: P,
    ref: React.ForwardedRef<R>,
  ) {
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
    // @ts-expect-error Typescript error is legitimate, but its better to constrain the ref to LayerView and risk the issue
    useImperativeHandle(ref, () => layerView as __esri.LayerView);

    return null;
  });
}

/**
 * Generic LayerView component for the layerView of any generic Layer, can be child of
 * any Layer that has a layerView
 */
export const LayerView = createLayerViewComponent();

/**
 * FeatureLayerView component, must be child of FeatureLayer component
 */
export const FeatureLayerView = createLayerViewComponent<
  __esri.FeatureLayerViewProperties,
  __esri.FeatureLayerView
>();
