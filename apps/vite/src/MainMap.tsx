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
} from "esrieact";
import { useAtom } from "jotai";
import {
  clickedGraphicsAtom,
  clickedLocationAtom,
  maxStorageAtom,
  rendererImageAtom,
} from "./state";
import { LAYER_URLS } from "./App";

/**
 * The main map component of the example app
 */
export const MainMap = () => {
  const mapRef = useRef<MapRef>(null);
  const [, setClickedLocation] = useAtom(clickedLocationAtom);
  const [, setClickedGraphics] = useAtom(clickedGraphicsAtom);
  const [maxStorage] = useAtom(maxStorageAtom);
  const [rendererImage] = useAtom(rendererImageAtom);

  const flRef = useRef<EsriFeatureLayer>(null);
  const flViewRef = useRef<__esri.FeatureLayerView>(null);
  return (
    <MapView
      ref={mapRef}
      style={{ border: "1px solid red", height: "70vh", width: "70vw" }}
      ViewProperties={{
        extent: {
          xmin: -9177811,
          ymin: 4247000,
          xmax: -9176791,
          ymax: 4247784,
          // @ts-expect-error Number is also accepted here, TS defs wrong?
          spatialReference: 102100,
        },
        popup: {
          defaultPopupTemplateEnabled: true,
        },
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
    >
      <VectorTileLayer url={LAYER_URLS.vector_tile_layer_url} />

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
      </GroupLayer>

      <Expand position="top-right">
        <LayerList />
      </Expand>

      <BasemapGallery container="outsider" />
    </MapView>
  );
};
