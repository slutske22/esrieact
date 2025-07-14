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
import { Menu } from "./Menu";

const App: React.FC = () => {
  config.apiKey = import.meta.env.VITE_ARCGIS_API_KEY;

  const [maxStorage, setMaxStorage] = useAtom(maxStorageAtom);
  const [, setRendererImage] = useAtom(rendererImageAtom);
  const [clickedLocation] = useAtom(clickedLocationAtom);
  const [clickedGraphics] = useAtom(clickedGraphicsAtom);

  return (
    <>
      <div style={{ display: "flex" }}>
        <Menu />
        <MainMap />

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
    </>
  );
};

export default App;
