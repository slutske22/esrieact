import React, {
  Ref,
  createContext,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
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

/**
 * Factory function to create an esrieact renderer component
 * @param createRenderer - Function that takes in renderer properties and returns an esri Renderer instance. Properties must be
 * any esri properties that extend esri.RendererProperties, and optional children
 * @param ref - Ref to the renderer instance
 * @param properties - Renderer properties
 * @returns A context provider whose context is the renderer instance to be passed to children, or if there are no children, returns null
 */
export const createRendererComponent = (
  createRenderer: CreateRendererFunction<RendererProps>,
  ref: Ref<__esri.Renderer>,
  { children, ...properties }: RendererProps,
) => {
  const parent = useContext(LayerContext) as __esri.Layer;
  const defaultRenderer = useRef((parent as FeatureLayer).renderer?.clone());

  // Just create the renderer instance (pure calculation)
  const instance = useMemo(() => createRenderer(properties), []);

  useImperativeHandle(ref, () => instance);
  useEsriPropertyUpdates(instance, properties);

  /**
   * Assign the renderer on mount and clean up on unmount
   */
  useEffect(() => {
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
      parent.renderer = instance;
    } else {
      // eslint-disable-next-line no-console
      console.error(
        "You are trying to use a <Renderer /> component as the descendant of a component that does not take an ESRI renderer.",
      );
    }

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
        parent.renderer = defaultRenderer.current;
      }
    };
  }, [parent, instance, defaultRenderer]);

  // If no children, there is no need to render a context provider
  if (!children) return null;

  return (
    <RendererContext.Provider value={instance}>
      {children}
    </RendererContext.Provider>
  );
};
