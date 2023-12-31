import React, { useRef, useState } from "react";
import EsriFeatureLayer from "@arcgis/core/layers/FeatureLayer";
import config from "@arcgis/core/config";
import {
  MapView,
  FeatureLayer,
  MapRef,
  FeatureLayerView,
  GroupLayer,
  Expand,
  BasemapGallery,
} from "../lib";
import "./App.css";

const App: React.FC = () => {
  // Some tests to make sure refs are what we think they are
  const mapRef = useRef<MapRef>(null);
  const flRef = useRef<EsriFeatureLayer>(null);
  const flViewRef = useRef<__esri.FeatureLayerView>(null);

  config.apiKey = import.meta.env.VITE_ARCGIS_API_KEY;

  const [maxStorage, setMaxStorage] = useState(10000);

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
        {/* <VectorTileLayer url="https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer" /> */}
        <GroupLayer>
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
          </FeatureLayer>
        </GroupLayer>
        {/* <FeatureLayer
          ref={flRef}
          url="https://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/US_County_COVID19_Trends/FeatureServer/0"
        />
        <FeatureLayer
          ref={flRef}
          url="https://services.arcgis.com/DO4gTjwJVIJ7O9Ca/arcgis/rest/services/Unacast_Latest_Available__Visitation_and_Distance_/FeatureServer/0"
          opacity={0.5}
        /> */}

        <Expand position="top-right" />
        <BasemapGallery position="top-right" />
      </MapView>
      <button
        onClick={() => {
          // setZoom((z) => z + 1);
          setMaxStorage((p) => p - 1000);
          // console.log(flViewRef.current);
        }}
      >
        Filter more
      </button>
    </div>
  );
};

export default App;
