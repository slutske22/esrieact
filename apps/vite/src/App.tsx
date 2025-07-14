import React from "react";
import config from "@arcgis/core/config";
import "./App.css";
import { useAtom } from "jotai";
import BikeLogo from "./assets/bike.svg";
import ZebraLogo from "./assets/zebra.png";
import {
  clickedGraphicsAtom,
  clickedLocationAtom,
  maxStorageAtom,
  rendererImageAtom,
} from "./state";
import { MainMap } from "./MainMap";

export const LAYER_URLS = {
  vector_tile_layer_url:
    "https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer",
  featurelayer_covid:
    "https://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/US_County_COVID19_Trends/FeatureServer/0",
  featurelayer_distance_scores:
    "https://services.arcgis.com/DO4gTjwJVIJ7O9Ca/arcgis/rest/services/Unacast_Latest_Available__Visitation_and_Distance_/FeatureServer/0",
  featurelayer_trees:
    "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0",
};

const App: React.FC = () => {
  config.apiKey = import.meta.env.VITE_ARCGIS_API_KEY;

  const [maxStorage, setMaxStorage] = useAtom(maxStorageAtom);
  const [, setRendererImage] = useAtom(rendererImageAtom);
  const [clickedLocation] = useAtom(clickedLocationAtom);
  const [clickedGraphics] = useAtom(clickedGraphicsAtom);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <MainMap />

        <div
          id="outsider"
          style={{
            width: "250px",
            maxHeight: "70vh",
            border: "1px solid blue",
          }}
        />

        <div
          style={{
            minWidth: "300px",
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
