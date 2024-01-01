import React, {
  useState,
  useEffect,
  useContext,
  HTMLAttributes,
  ReactNode,
  Dispatch,
  SetStateAction,
  useImperativeHandle,
} from "react";
import EsriMap from "@arcgis/core/Map";
import EsriMapView from "@arcgis/core/views/MapView";
import "@arcgis/core/assets/esri/themes/dark/main.css";
import { useEsriPropertyUpdates } from "../utils";

/**
 * Properties that the MapContext provides to all consumers
 */
interface MapReference {
  /**
   * The esri [Map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html) instance
   */
  map: EsriMap;
  /**
   * The esri [MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html) instance
   */
  view: EsriMapView;
}

/**
 * The react ref object describing the MapView component's ref
 */
export interface MapRef extends MapReference {
  /**
   * The HTML element that the map is rendered in
   */
  element?: HTMLDivElement;
}

interface MapContextProps extends MapReference {
  /**
   * Callback to set map
   */
  setMap: Dispatch<SetStateAction<EsriMap>>;
  /**
   * Callback to set map
   */
  setView: Dispatch<SetStateAction<EsriMapView>>;
}

/**
 * The map context that holds references to the underlying Map and MapView objects
 */
export const MapContext = React.createContext<MapContextProps>(
  {} as MapContextProps,
);

interface MapContextProviderProps {
  children?: ReactNode | ReactNode[];
}

/**
 * Provider which provides the map context to all descedants
 */
export const MapContextProvider: React.FC<MapContextProviderProps> = ({
  children,
}) => {
  const [map, setMap] = useState<EsriMap>(undefined as unknown as EsriMap);
  const [view, setView] = useState<EsriMapView>(
    undefined as unknown as EsriMapView,
  );

  return (
    <MapContext.Provider
      value={{
        map,
        setMap,
        view,
        setView,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

interface Props extends HTMLAttributes<HTMLDivElement> {
  /**
   * Properties passed to the [Map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html)
   */
  MapProperties?: __esri.MapProperties;
  /**
   * Properties passed to the [MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html)
   */
  ViewProperties?: __esri.MapViewProperties;
  /**
   * Any layers or controls to be rendered as part of the map
   */
  children?: ReactNode | ReactNode[];
}

/**
 * MapView Component for 2D map. Accepts properties for both the Map and the MapView.  Renders the container
 * div, and once mounted, renders the map to it.
 *
 * ***Does not provide its own Map Context, and as such, will fail if you do not manuaaly provide one***
 *
 * @example
 * // App.tsx
 * import { MapViewCore, MapContextProvider } from 'lib/map/MapView';
 *
 * const App = () => {
 *    return (
 *      <MapContextProvider>
 *        <MapViewCore />
 *        <OtherUI />
 *      </MapContextProvider>
 *    )
 * }
 *
 * // OtherUI.tsx
 * import { useContext } from 'react';
 * import { MapContext } from 'lib/map/MapView';
 *
 * const OtherUI = () => {
 *    const { view } = useContext(MapContext);
 *
 *    return <button onClick={() => view.zoom = view.zoom + 1}>Zoom in!</button>
 * }
 *
 * ArcGIS JS API Source Components:
 * - [Map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html)
 * - [MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html)
 */
export const MapViewCore = React.forwardRef<
  MapReference & { element?: HTMLElement },
  Props
>((props, ref) => {
  //
  const { MapProperties, ViewProperties, children, ...rest } = props;

  const [containerRef, setContainerRef] = useState<HTMLDivElement>();

  const { map, setMap, view, setView } = useContext(MapContext);

  useImperativeHandle(ref, () => ({ map, view, element: containerRef }));

  /**
   * On mount, once the container reference is ready, create the map and the view
   */
  useEffect(() => {
    if (containerRef) {
      const map = new EsriMap(MapProperties);

      const view = new EsriMapView({
        map,
        container: containerRef,
        ...ViewProperties,
      });

      setMap(map);
      setView(view);
    }
  }, [containerRef]);

  /**
   * Imperatively set properties on esri view instance if properties change
   */
  useEsriPropertyUpdates(map, MapProperties);
  useEsriPropertyUpdates(view, ViewProperties);

  return (
    <>
      <div
        ref={(element) => {
          if (element) setContainerRef(element);
        }}
        {...rest}
      />
      {map && view && children}
    </>
  );
});

/**
 * MapView Component for 2D map. Accepts properties for both the Map and the MapView.  Renders the container
 * div, and once mounted, renders the map to it.
 *
 * ArcGIS JS API Source Components:
 * - [Map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html)
 * - [MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html)
 */
export const MapView = React.forwardRef<MapReference, Props>((props, ref) => {
  return (
    <MapContextProvider>
      <MapViewCore {...props} ref={ref} />
    </MapContextProvider>
  );
});

/**
 * Utility hook to get the undnerlying `map` and `view` instances of a MapView
 */
export const useMap = (): MapReference => {
  const { map, view } = useContext(MapContext);

  if (!map || !view) {
    throw new Error(
      "Cannot find esrieact map context, are you sure your component is a descendent of a MapContext?",
    );
  }

  return { map, view };
};
