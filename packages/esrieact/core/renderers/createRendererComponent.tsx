import React, {
  Ref,
  createContext,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
} from "react";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import SceneLayer from "@arcgis/core/layers/SceneLayer";
import Sublayer from "@arcgis/core/layers/support/Sublayer";
import CSVLayer from "@arcgis/core/layers/CSVLayer";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import OGCFeatureLayer from "@arcgis/core/layers/OGCFeatureLayer";
import StreamLayer from "@arcgis/core/layers/StreamLayer";
import WFSLayer from "@arcgis/core/layers/WFSLayer";
import { LayerContext } from "../../layers";
import { useEsriPropertyUpdates } from "../../utils";

/**
 * The react context object that any layer component creates when rendered
 * and makes available to its descendants
 */
export const RendererContext = createContext<__esri.Renderer>(
  {} as __esri.Renderer,
);

export type RendererProps<
  T extends __esri.RendererProperties = __esri.RendererProperties,
> = React.PropsWithChildren<T>;

/**
 * Function that takes in renderer properties and returns an esri Renderer instance. Properties must be
 * any esri properties that extend esri.LayerProperties, and optional children
 */
export type CreateRendererFunction<T extends RendererProps> = (
  properties: T,
) => __esri.Renderer;

export const createRendererComponent = (
  createRenderer: CreateRendererFunction<RendererProps>,
  ref: Ref<__esri.Renderer>,
  { children, ...properties }: RendererProps,
) => {
  const parent = useContext(LayerContext) as __esri.Layer;
  const defaultRenderer = (parent as FeatureLayer).renderer;

  const instance = useMemo(() => {
    const renderer = createRenderer(properties);

    if (
      parent instanceof FeatureLayer ||
      parent instanceof SceneLayer ||
      parent instanceof Sublayer ||
      parent instanceof CSVLayer ||
      parent instanceof GeoJSONLayer ||
      parent instanceof OGCFeatureLayer ||
      parent instanceof StreamLayer ||
      parent instanceof WFSLayer
    ) {
      parent.renderer = renderer;
    } else {
      // Allow this because it only happens in development and is helpful for devs
      // eslint-disable-next-line
      console.error(
        "You are trying to use a <Renderer /> component as the descendant of a component that does not take an ESRI renderer.",
      );
    }

    return renderer;
  }, []);

  useImperativeHandle(ref, () => instance);
  useEsriPropertyUpdates(instance, properties);

  /**
   * Set the renderer of the parent layer back to its initial default on unmount
   */
  useEffect(() => {
    return () => {
      if (
        parent instanceof FeatureLayer ||
        parent instanceof SceneLayer ||
        parent instanceof Sublayer ||
        parent instanceof CSVLayer ||
        parent instanceof GeoJSONLayer ||
        parent instanceof OGCFeatureLayer ||
        parent instanceof StreamLayer ||
        parent instanceof WFSLayer
      ) {
        parent.renderer = defaultRenderer;
      }
    };
  }, []);

  // If no children, there is no need to render a context provider
  if (!children) return null;

  return (
    <RendererContext.Provider value={instance}>
      {children}
    </RendererContext.Provider>
  );
};
