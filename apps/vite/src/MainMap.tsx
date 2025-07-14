import { useRef } from "react";
import EsriFeatureLayer from "@arcgis/core/layers/FeatureLayer";
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
  SimpleRenderer,
  PictureMarkerSymbol,
  ImageryLayer,
} from "esrieact";
import { useAtom } from "jotai";
import {
  clickedGraphicsAtom,
  clickedLocationAtom,
  maxStorageAtom,
  rendererImageAtom,
  visibleLayersAtom,
} from "./state";
import { HAWAII_LAYERS } from "./layers";

// Extent for the major Hawaiian islands in Web Mercator (wkid: 3857)
export const HAWAII_EXTENT = {
  xmin: -159.475,
  ymin: 19.675,
  xmax: -156.225,
  ymax: 21.425,
  spatialReference: {
    wkid: 4326,
  },
};
/**
 * The main map component of the example app
 */
export const MainMap = () => {
  const mapRef = useRef<MapRef>(null);
  const [, setClickedLocation] = useAtom(clickedLocationAtom);
  const [, setClickedGraphics] = useAtom(clickedGraphicsAtom);
  const [maxStorage] = useAtom(maxStorageAtom);
  const [rendererImage] = useAtom(rendererImageAtom);
  const [visibleLayers] = useAtom(visibleLayersAtom);

  const flRef = useRef<EsriFeatureLayer>(null);
  const flViewRef = useRef<__esri.FeatureLayerView>(null);

  return (
    <MapView
      ref={mapRef}
      style={{ border: "1px solid red", height: "70vh", flex: 1 }}
      ViewProperties={{
        extent: HAWAII_EXTENT,
        popup: { defaultPopupTemplateEnabled: true },
        events: {
          click: async (e) => {
            const view = mapRef.current!.view!;
            setClickedLocation(e.mapPoint);

            view.openPopup();
            const fetchFeatures = await view.popup.fetchFeatures(e);
            const graphics = await fetchFeatures.allGraphicsPromise;

            setClickedGraphics(graphics ?? []);
          },
        },
      }}
      MapProperties={{ basemap: "topo-vector" }}
    >
      {/* <VectorTileLayer url={LAYER_URLS.vector_tile_layer_url} />

      <GroupLayer title="Feature Layers are kewl">
        <FeatureLayer
          url={LAYER_URLS.featurelayer_covid}
          popupEnabled={false}
        />

        <FeatureLayer
          url={LAYER_URLS.featurelayer_distance_scores}
          opacity={0.5}
          popupEnabled={false}
        />

        <FeatureLayer ref={flRef} url={LAYER_URLS.featurelayer_trees}>
          <FeatureLayerView
            ref={flViewRef}
            filter={{ where: `C_Storage < ${maxStorage}` }}
          />

          {rendererImage && (
            <SimpleRenderer>
              <PictureMarkerSymbol height={24} width={24} url={rendererImage} />
            </SimpleRenderer>
          )}
        </FeatureLayer>
      </GroupLayer> */}

      {HAWAII_LAYERS.map((layer) => {
        if (!visibleLayers.includes(layer.id)) return null;

        switch (layer.layerType) {
          case "feature":
            return <FeatureLayer url={layer.url} />;
          case "imagery":
            return <ImageryLayer url={layer.url} />;
          case "vector-tile":
            return <VectorTileLayer url={layer.url} />;
        }
      })}

      <Expand position="top-right">
        <LayerList />
      </Expand>

      <Expand position="top-right">
        <BasemapGallery />
      </Expand>
    </MapView>
  );
};
