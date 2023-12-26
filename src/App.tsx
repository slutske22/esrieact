import React, { useRef } from "react";
import EsriFeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { MapView, FeatureLayer, MapRef } from "../lib";
import "./App.css";

const App: React.FC = () => {
  // Some tests to make sure refs are what we think they are
  const mapRef = useRef<MapRef>(null);
  const flRef = useRef<EsriFeatureLayer>(null);

  return (
    <div>
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
        }}
      >
        <FeatureLayer
          ref={flRef}
          url="https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0"
        />
      </MapView>
      <button
        onClick={() => {
          // setZoom((z) => z + 1);
          console.log("mapRef", mapRef.current);
          console.log("flRef", flRef.current);
        }}
      >
        Set zoom
      </button>
    </div>
  );
};

export default App;
