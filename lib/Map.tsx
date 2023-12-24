import React, {
  useState,
  useEffect,
  useImperativeHandle,
  useContext,
  HTMLAttributes,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import EsriMap from "@arcgis/core/Map";
import EsriMapView from "@arcgis/core/views/MapView";

interface MapContextProps {
  /**
   * The esri [Map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html) instance
   */
  map: EsriMap;
  /**
   * The esri [MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html) instance
   */
  view: EsriMapView;
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
const MapContext = React.createContext<MapContextProps>({} as MapContextProps);

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
  MapProperties: __esri.MapProperties;
  /**
   * Properties passed to the [MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html)
   */
  ViewProperties: __esri.MapViewProperties;
}

/**
 * MapView Component for 2D map. Accepts properties for both the Map and the MapView.  Renders the container
 * div, and once mounted, renders the map to it.
 *
 * ArcGIS JS API Source Components:
 * - [Map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html)
 * - [MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html)
 */
export const MapView = React.forwardRef<{}, Props>(
  ({ MapProperties, ViewProperties, ...props }, ref) => {
    const [containerRef, setContainerRef] = useState<HTMLDivElement>();

    useEffect(() => {
      if (containerRef) {
        const map = new EsriMap(MapProperties);

        const view = new EsriMapView({
          map,
          container: containerRef,
          ...ViewProperties,
        });
      }
    }, [ref]);

    return (
      <div
        ref={(element) => {
          if (element) setContainerRef(element);
        }}
        {...props}
      />
    );
  },
);
