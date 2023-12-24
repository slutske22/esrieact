import React from "react";
import { MapView } from "../lib/Map";
import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      <MapView
        style={{ border: "1px solid red", height: "70vh", width: "70vw" }}
        ViewProperties={{
          zoom: 4,
        }}
      />
    </div>
  );
};

export default App;
