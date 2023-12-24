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
  MapProperties?: __esri.MapProperties;
  /**
   * Properties passed to the [MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html)
   */
  ViewProperties?: __esri.MapViewProperties;
}

/**
 * MapView Component for 2D map. Accepts properties for both the Map and the MapView.  Renders the container
 * div, and once mounted, renders the map to it.
 *
 * ArcGIS JS API Source Components:
 * - [Map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html)
 * - [MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html)
 */
export const MapViewCore = React.forwardRef<MapReference, Props>(
  (
    {
      MapProperties = {
        basemap: "topo-vector",
      },
      ViewProperties,
      ...props
    },
    ref,
  ) => {
    const [containerRef, setContainerRef] = useState<HTMLDivElement>();

    const { map, setMap, view, setView } = useContext(MapContext);

    useImperativeHandle(ref, () => ({ map, view, element: containerRef }));

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

    return (
      <div
        ref={(element) => {
          console.log(element);
          if (element) setContainerRef(element);
        }}
        {...props}
      />
    );
  },
);

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
