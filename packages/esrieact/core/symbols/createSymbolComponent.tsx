import React, {
  Ref,
  createContext,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
} from "react";
import Graphic from "@arcgis/core/Graphic";
import Renderer from "@arcgis/core/renderers/Renderer";
import { GraphicContext } from "../Graphic";
import { useEsriPropertyUpdates } from "../../utils";
import { RendererContext } from "../renderers";

/**
 * The react context object that any symbol component creates when rendered
 * and makes available to its descendants
 */
export const SymbolContext = createContext<__esri.Symbol>({} as __esri.Symbol);

export type SymbolProps<
  T extends __esri.SymbolProperties = __esri.SymbolProperties,
> = React.PropsWithChildren<T>;

/**
 * Function that takes in symbol properties and returns an esri Symbol instance. Properties must be
 * any esri properties that extend esri.SymbolProperties, and optional children
 */
export type CreateSymbolFunction<T extends SymbolProps> = (
  properties: T,
) => __esri.Symbol;

/**
 * Factory function to create an esrieact symbol component
 * @param createSymbol - Function that takes in symbol properties and returns an esri Symbol instance. Properties must be
 * any esri properties that extend esri.SymbolProperties, and optional children
 * @param ref - Ref to the symbol instance
 * @param properties - Symbol properties
 * @param componentName - Name of the component for error messages
 * @returns A context provider whose context is the symbol instance to be passed to children, or if there are no children, returns null
 */
export const createSymbolComponent = (
  createSymbol: CreateSymbolFunction<SymbolProps>,
  ref: Ref<__esri.Symbol>,
  properties: SymbolProps,
  componentName: string,
) => {
  const parentGraphic = useContext(GraphicContext);
  const parentRenderer = useContext(RendererContext);

  // Just create the symbol instance (pure calculation)
  const instance = useMemo(() => createSymbol(properties), []);

  useImperativeHandle(ref, () => instance);
  useEsriPropertyUpdates(instance, properties);

  /**
   * Assign the symbol on mount and clean up on unmount
   */
  useEffect(() => {
    if (
      !(parentGraphic instanceof Graphic) &&
      !(parentRenderer instanceof Renderer)
    ) {
      // Allow this because it only happens in development and is helpful for devs
      // eslint-disable-next-line
      console.error(
        `You are trying to render a ${componentName} component that is not a descendant of a Graphic or Renderer.`,
        `Did you forget to wrap your ${componentName} in a Graphic or Renderer?`,
      );

      return;
    }

    if (parentRenderer) {
      // @ts-expect-error allow this for renderers that do take a symbol
      parentRenderer.symbol = instance;
    }

    if (parentGraphic) {
      // @ts-expect-error Allow generic __esri.Symbol to be assigned to various specific parent graphic symbol types
      parentGraphic.symbol = instance;
    }
  }, [instance, parentGraphic, parentRenderer, componentName]);

  // If no children, there is no need to render a context provider
  if (!properties.children) return null;

  return (
    <SymbolContext.Provider value={instance}>
      {properties.children}
    </SymbolContext.Provider>
  );
};
