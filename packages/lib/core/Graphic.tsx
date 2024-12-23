import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
} from "react";
import EsriGraphic from "@arcgis/core/Graphic.js";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Collection from "@arcgis/core/core/Collection.js";
import { LayerContext } from "../layers";
import { useEsriPropertyUpdates } from "../utils";

export interface GraphicProps
  extends __esri.GraphicProperties,
    PropsWithChildren {}

/**
 * The react context object that any Grpahic component creates when rendered
 * and makes available to its descendants
 */
export const GraphicContext = createContext<__esri.Graphic>(
  {} as __esri.Graphic,
);

/**
 * A Graphic component, must be rendered as a child of a GraphicsLayer
 *
 * ArcGIS JS API Source Components:
 * - [Graphic](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html)
 */
export const Graphic = React.forwardRef<__esri.Graphic, GraphicProps>(
  ({ children, ...properties }, ref) => {
    const parent = useContext(LayerContext) as
      | __esri.GraphicsLayer
      | __esri.FeatureLayer;

    /**
     * Create instance only on first mount
     */
    const instance = useMemo(() => {
      const graphic = new EsriGraphic(properties);

      if (
        !(parent instanceof GraphicsLayer) &&
        !(parent instanceof FeatureLayer)
      ) {
        // Allow this because it only happens in development and is helpful for devs
        // eslint-disable-next-line
        console.error(
          "You are trying to render a Graphic component that is not a descendant of a GraphicsLayer or FeatureLayer.",
          "Did you forget to wrap your Graphic in a GraphicsLayer or FeatureLayer?",
        );
      }

      if (parent instanceof GraphicsLayer) {
        parent.add(graphic);
      }

      /**
       * If using the Graphic to craft a client-side featurelayer, we push to the FeatureLayer.source property
       * See https://developers.arcgis.com/javascript/latest/sample-code/layers-featurelayer-collection/
       */
      if (parent instanceof FeatureLayer) {
        if (!parent.source) {
          parent.source = new Collection();
        }
        parent.source.add(graphic);
      }

      return graphic;
    }, []);

    /**
     * Remove the graphic from the GraphicsLayer or FeatureLayer on unmount
     */
    useEffect(() => {
      return () => {
        if (parent instanceof GraphicsLayer) {
          parent.remove(instance);
        }
        if (parent instanceof FeatureLayer) {
          parent.source.remove(instance);
        }
      };
    }, []);

    useImperativeHandle(ref, () => instance);
    useEsriPropertyUpdates(instance, properties);

    // If no children, there is no need to render a context provider
    if (!children) return null;

    return (
      <GraphicContext.Provider value={instance}>
        {children}
      </GraphicContext.Provider>
    );
  },
);
