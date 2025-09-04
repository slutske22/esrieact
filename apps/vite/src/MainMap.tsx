import { useRef } from "react";
import { FeatureLayer } from "esrieact/layers/FeatureLayer.js";
import {
  MapRef,
  MapView,
  VectorTileLayer,
  GroupLayer,
  FeatureLayerView,
  Expand,
  LayerList,
  BasemapGallery,
  ImageryLayer,
  Legend,
  MapImageLayer,
} from "esrieact";
import { useAtom } from "jotai";
import {
  clickedGraphicsAtom,
  clickedLocationAtom,
  visibleLayersAtom,
} from "./state";
import { HAWAII_LAYERS, infrastructureSubLayers, LayerConfig } from "./layers";
import { benthicZoneValueAtom } from "./custom-controls";

// Extent for the major Hawaiian islands in Web Mercator (wkid: 3857)
export const OAHU_EXTENT = {
  xmax: -17550549,
  xmin: -17580397,
  ymax: 2461002,
  ymin: 2438185,
  spatialReference: {
    wkid: 102100,
  },
};
/**
 * The main map component of the example app
 */
export const MainMap = () => {
  const mapRef = useRef<MapRef>(null);
  const [, setClickedLocation] = useAtom(clickedLocationAtom);
  const [, setClickedGraphics] = useAtom(clickedGraphicsAtom);
  const [benthicZoneFilter] = useAtom(benthicZoneValueAtom);
  const [visibleLayers] = useAtom(visibleLayersAtom);

  const flViewRef = useRef<__esri.FeatureLayerView>(null);

  const renderLayer = (layer: LayerConfig) => {
    if (layer.skipRender) return null;
    if (!visibleLayers.includes(layer.id)) return null;

    switch (layer.layerType) {
      case "feature":
        return <FeatureLayer url={layer.url} />;
      case "imagery":
        return <ImageryLayer url={layer.url} />;
      case "vector-tile":
        return <VectorTileLayer url={layer.url} />;
      case "mapimagelayer":
        return <MapImageLayer url={layer.url} />;
    }
  };

  // @ts-expect-error
  window.map = mapRef;

  return (
    <MapView
      ref={mapRef}
      style={{ border: "1px solid red", height: "70vh", flex: 1 }}
      ViewProperties={{
        extent: OAHU_EXTENT,
        popup: { defaultPopupTemplateEnabled: true },
        events: {
          click: async (e) => {
            const view = mapRef.current!.view!;
            setClickedLocation(e.mapPoint);

            view.openPopup();
            const fetchFeatures = await view.popup?.fetchFeatures(e);
            const graphics = await fetchFeatures?.allGraphicsPromise;

            setClickedGraphics(graphics ?? []);
          },
        },
      }}
      MapProperties={{ basemap: "topo-vector" }}
    >
      {/**
       * Layers rendered from a list controlled by state variables
       */}
      {HAWAII_LAYERS.filter((l) => !l.skipRender).map((layer) => {
        if (!layer.sublayers && !layer.url) return null;
        if (!visibleLayers.includes(layer.id)) return null;

        if (layer.sublayers) {
          return (
            <GroupLayer key={layer.id}>
              {layer.sublayers.map((sublayer) => renderLayer(sublayer))}
            </GroupLayer>
          );
        }

        return renderLayer(layer);
      })}

      {visibleLayers.includes("benthic-habitat") && (
        <FeatureLayer url="https://geodata.hawaii.gov/arcgis/rest/services/CoastalMarine/MapServer/1">
          <FeatureLayerView
            ref={flViewRef}
            filter={
              benthicZoneFilter
                ? { where: `zone = '${benthicZoneFilter}'` }
                : undefined
            }
          />
        </FeatureLayer>
      )}

      {visibleLayers.includes("infrastructure") && (
        <MapImageLayer
          url="https://geodata.hawaii.gov/arcgis/rest/services/Infrastructure/MapServer"
          sublayers={infrastructureSubLayers.map((l) => ({
            id: l.layerId,
            visible: true,
          }))}
        />
      )}

      <Expand position="top-right">
        <LayerList />
      </Expand>

      <Expand position="top-right">
        <BasemapGallery />
      </Expand>

      <Expand position="top-right">
        <Legend />
      </Expand>
    </MapView>
  );
};
