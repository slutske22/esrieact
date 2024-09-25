import React, { useRef, useState } from "react";
import EsriFeatureLayer from "@arcgis/core/layers/FeatureLayer";
import config from "@arcgis/core/config";
import {
  MapView,
  FeatureLayer,
  MapRef,
  FeatureLayerView,
  GroupLayer,
  BasemapGallery,
  LayerList,
  VectorTileLayer,
  Expand,
  PictureMarkerSymbol,
  SimpleRenderer,
} from "../lib";
import "./App.css";
import BikeLogo from "./assets/bike.svg";
import ZebraLogo from "./assets/zebra.png";

const App: React.FC = () => {
  // Some tests to make sure refs are what we think they are
  const mapRef = useRef<MapRef>(null);
  const flRef = useRef<EsriFeatureLayer>(null);
  const flViewRef = useRef<__esri.FeatureLayerView>(null);

  config.apiKey = import.meta.env.VITE_ARCGIS_API_KEY;

  const [maxStorage, setMaxStorage] = useState(10000);
  const [rendererImage, setRendererImage] = useState<string>();
  const [clickedLocation, setClickedLocation] = useState<object>({});
  const [clickedGraphics, setClickedGraphics] = useState<__esri.Graphic[]>([]);

  return (
    <div>
      <div style={{ display: "flex" }}>
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
          <VectorTileLayer url="https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer" />

          <GroupLayer title="Feature Layers are kewl">
            <FeatureLayer
              url="https://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/US_County_COVID19_Trends/FeatureServer/0"
              popupEnabled={false}
            />
            <FeatureLayer
              url="https://services.arcgis.com/DO4gTjwJVIJ7O9Ca/arcgis/rest/services/Unacast_Latest_Available__Visitation_and_Distance_/FeatureServer/0"
              opacity={0.5}
              popupEnabled={false}
            />

            <FeatureLayer
              ref={flRef}
              url="https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0"
            >
              <FeatureLayerView
                ref={flViewRef}
                filter={{
                  where: `C_Storage < ${maxStorage}`,
                }}
              />

              {rendererImage && (
                <SimpleRenderer>
                  <PictureMarkerSymbol
                    height={24}
                    width={24}
                    url={rendererImage}
                  />
                </SimpleRenderer>
              )}
            </FeatureLayer>
          </GroupLayer>

          <Expand position="top-right">
            <LayerList />
          </Expand>

          <BasemapGallery container="outsider" />
        </MapView>

        <div
          id="outsider"
          style={{
            width: "200px",
            maxHeight: "70vh",
            border: "1px solid blue",
          }}
        />

        <div
          style={{
            minWidth: "200px",
            textAlign: "left",
            maxHeight: "70vh",
            overflow: "auto",
          }}
        >
          <h5>Clicked Point:</h5>
          <pre>{JSON.stringify(clickedLocation, null, 2)}</pre>

          <h5>Clicked Graphics:</h5>
          <pre>{JSON.stringify(clickedGraphics, null, 2)}</pre>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
        <label>Max Storage:</label>
        <input
          type="number"
          value={maxStorage}
          onChange={(e) => {
            setMaxStorage(Number(e.target.value));
          }}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <label>Symbol:</label>
        <button onClick={() => setRendererImage(undefined)}>
          Default Renderer
        </button>
        {[BikeLogo, ZebraLogo].map((logo) => (
          <img
            key={logo}
            height={32}
            src={logo}
            onClick={() => setRendererImage(logo)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
