import React, { useState } from "react";
import { MapView, FeatureLayer } from "../lib";
import "./App.css";

const App: React.FC = () => {
  const [zoom, setZoom] = useState(2);

  return (
    <div>
      <MapView
        style={{ border: "1px solid red", height: "70vh", width: "70vw" }}
        ViewProperties={{
          zoom: zoom,
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
        <FeatureLayer url="https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0" />
      </MapView>
      <button onClick={() => setZoom((z) => z + 1)}>Set zoom</button>
    </div>
  );
};

export default App;
