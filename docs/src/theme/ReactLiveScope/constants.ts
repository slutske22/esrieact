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

export const OAHU_HPMS_ROADS_FL_URL =
  "https://geodata.hawaii.gov/arcgis/rest/services/Transportation/MapServer/12";
