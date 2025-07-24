import SAMPLE_GEOJSON from "./sample-oahu-geojson.json";

export const HAWAII_EXTENT = {
  xmin: -161.1,
  ymin: 18.8,
  xmax: -154.7,
  ymax: 22.3,
  spatialReference: { wkid: 4326 },
};

export const OAHU_EXTENT = {
  xmax: -17550549,
  xmin: -17580397,
  ymax: 2461002,
  ymin: 2438185,
  spatialReference: {
    wkid: 102100,
  },
};

export const OAHU_EXTENT_2 = {
  xmin: -157.96,
  ymin: 21.21,
  xmax: -157.76,
  ymax: 21.44,
  spatialReference: {
    wkid: 4326,
  },
};

export const KILAUEA_TARGET = {
  center: [-155.292, 19.406],
  zoom: 12,
};

export const CALIFORNIA_EXTENT = {
  xmin: -13884991,
  ymin: 2870341,
  xmax: -12110320,
  ymax: 4545287,
  spatialReference: {
    wkid: 102100,
  },
};

export const BENTHIC_FEATURELAYER_URL =
  "https://geodata.hawaii.gov/arcgis/rest/services/CoastalMarine/MapServer/1";

export const LANDCOVER_IMAGELAYER_URL =
  "https://geodata.hawaii.gov/arcgis/rest/services/LandUseLandCover_Raster/MapServer";

export const CLIMATE_RATINGS_RASTERLAYER_URL =
  "https://geodata.hawaii.gov/arcgis/rest/services/Climate_Raster/MapServer";

export const OAHU_HPMS_ROADS_FL_URL =
  "https://geodata.hawaii.gov/arcgis/rest/services/Transportation/MapServer/12";

export const blendModes = [
  "average",
  "color-burn",
  "color-dodge",
  "color",
  "darken",
  "destination-atop",
  "destination-in",
  "destination-out",
  "destination-over",
  "difference",
  "exclusion",
  "hard-light",
  "hue",
  "invert",
  "lighten",
  "lighter",
  "luminosity",
  "minus",
  "multiply",
  "normal",
  "overlay",
  "plus",
  "reflect",
  "saturation",
  "screen",
  "soft-light",
  "source-atop",
  "source-in",
  "source-out",
  "vivid-light",
  "xor",
];

export const GRAPHICS_EXAMPLE_ARRAY = [
  {
    id: "1",
    name: "Simple Marker Point",
    geometry: {
      type: "point",
      x: -17565473,
      y: 2449593.5,
      spatialReference: { wkid: 102100 },
    },
    symbol: {
      type: "simple-marker",
      color: "red",
    },
  },
  {
    id: "2",
    name: "Simple Line Polyline",
    geometry: {
      type: "polyline",
      paths: [
        [-17565473, 2445493.5],
        [-17564473, 2448393.5],
        [-17563473, 2449293.5],
      ],
      spatialReference: { wkid: 102100 },
    },
    symbol: {
      type: "simple-line",
      color: "blue",
      width: 2,
    },
  },
];

export const SAMPLE_GEOJSON_URL = (() => {
  const blob = new Blob([JSON.stringify(SAMPLE_GEOJSON)], {
    type: "application/json",
  });

  return URL.createObjectURL(blob);
})();
