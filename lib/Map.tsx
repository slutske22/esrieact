import React, { useState, useEffect } from "react";
import AGMap from "@arcgis/core/Map";
import AgMapView from "@arcgis/core/views/MapView";

interface Props {
  MapProperties: __esri.MapProperties;
  ViewProperties: __esri.MapViewProperties;
  id?: string;
}

export const MapView: React.FC<Props> = ({
  MapProperties,
  ViewProperties,
  id,
}) => {
  const [ref, setRef] = useState<HTMLDivElement>();

  useEffect(() => {
    if (ref) {
      const map = new AGMap(MapProperties);

      const view = new AgMapView({
        map,
        container: ref,
        ...ViewProperties,
      });
    }
  }, [ref]);

  return (
    <div
      id={id}
      ref={(r) => {
        if (r) setRef(r);
      }}
    />
  );
};
