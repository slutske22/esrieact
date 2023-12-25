import React, { useState } from "react";
import { MapView } from "../lib";
import "./App.css";

const App: React.FC = () => {
  const [zoom, setZoom] = useState(2);

  return (
    <div>
      <MapView
        style={{ border: "1px solid red", height: "70vh", width: "70vw" }}
        ViewProperties={{
          zoom: zoom,
        }}
      />
      <button onClick={() => setZoom((z) => z + 1)}>Set zoom</button>
    </div>
  );
};

export default App;
