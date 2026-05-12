import React, {
  Ref,
  createContext,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import Layer from "@arcgis/core/layers/Layer";
import EsriPopupTemplate from "@arcgis/core/PopupTemplate";
import { LayerContext } from "../layers";
import { useMap } from "../map";
import { PropsChangedCallback, useEsriPropertyUpdates } from "../utils";

/**
 * The react context object that any PopupTemplate component creates when rendered
 * and makes available to its descendants.
 */
export const PopupTemplateContext = createContext<__esri.PopupTemplate>(
  {} as __esri.PopupTemplate,
);

export type PopupTemplateProps<
  T extends __esri.PopupTemplateProperties = __esri.PopupTemplateProperties,
> = React.PropsWithChildren<T>;

type PopupTemplateParent = __esri.Layer & {
  popupTemplate?: __esri.PopupTemplate | null;
};

/**
 * Function that takes in popup template properties and returns an esri PopupTemplate instance.
 */
export type CreatePopupTemplateFunction<T extends PopupTemplateProps> = (
  properties: T,
) => __esri.PopupTemplate;

/**
 * Force an open popup to re-read popup template state after imperative updates.
 * ArcGIS does not always repaint the currently selected popup just because
 * a PopupTemplate instance's properties were mutated.
 */
function refreshOpenPopupForLayer(
  view: __esri.MapView | undefined,
  parent: PopupTemplateParent,
  instance: __esri.PopupTemplate,
) {
  if (!view) return;

  const popup = view.popup as any;
  const selectedFeature = popup?.selectedFeature as __esri.Graphic | undefined;

  if (!popup?.visible || selectedFeature?.layer !== parent) return;

  parent.popupTemplate = instance;

  const refreshedFeatures = popup.features?.toArray?.();
  if (refreshedFeatures?.length) {
    popup.features = refreshedFeatures;
    return;
  }

  if (selectedFeature && popup.location && popup.open) {
    popup.open({
      features: [selectedFeature],
      location: popup.location,
    });
  }
}

/**
 * Factory function to create an esrieact popup template component.
 * PopupTemplate components must be rendered as a child of a layer component.
 */
export const createPopupTemplateComponent = (
  createPopupTemplate: CreatePopupTemplateFunction<PopupTemplateProps>,
  ref: Ref<__esri.PopupTemplate>,
  { children, ...properties }: PopupTemplateProps,
) => {
  const parent = useContext(LayerContext);
  const { view } = useMap();
  const defaultPopupTemplate = useRef<__esri.PopupTemplate | null>(null);

  if (!defaultPopupTemplate.current && parent instanceof Layer) {
    defaultPopupTemplate.current = (
      parent as PopupTemplateParent
    ).popupTemplate?.clone?.()
      ? (parent as PopupTemplateParent).popupTemplate!.clone()
      : (parent as PopupTemplateParent).popupTemplate ?? null;
  }

  const instance = useMemo(() => createPopupTemplate(properties), []);

  const onPropsChanged: PropsChangedCallback<__esri.PopupTemplate> = () => {
    if (!(parent instanceof Layer)) return;

    (parent as PopupTemplateParent).popupTemplate = instance;
    refreshOpenPopupForLayer(view, parent as PopupTemplateParent, instance);
  };

  useImperativeHandle(ref, () => instance);
  useEsriPropertyUpdates(instance, properties, onPropsChanged);

  useEffect(() => {
    if (!(parent instanceof Layer)) {
      // eslint-disable-next-line no-console
      console.error(
        "You are trying to render a PopupTemplate component that is not a descendant of a Layer.",
        "Did you forget to wrap your PopupTemplate in a Layer component?",
      );
      return;
    }

    (parent as PopupTemplateParent).popupTemplate = instance;
    refreshOpenPopupForLayer(view, parent as PopupTemplateParent, instance);

    return () => {
      (parent as PopupTemplateParent).popupTemplate =
        defaultPopupTemplate.current;
    };
  }, [parent, instance, view]);

  if (!children) return null;

  return (
    <PopupTemplateContext.Provider value={instance}>
      {children}
    </PopupTemplateContext.Provider>
  );
};

const createPopupTemplate = (
  properties: PopupTemplateProps,
): __esri.PopupTemplate => {
  return new EsriPopupTemplate(properties);
};

/**
 * A PopupTemplate component, intended to be rendered as a child of a layer
 * component such as FeatureLayer.
 *
 * ArcGIS JS API Source Components:
 * - [PopupTemplate](https://developers.arcgis.com/javascript/latest/api-reference/esri-PopupTemplate.html)
 */
export const PopupTemplate = React.forwardRef<
  __esri.PopupTemplate,
  PopupTemplateProps
>((properties, ref) =>
  createPopupTemplateComponent(createPopupTemplate, ref, properties),
);
