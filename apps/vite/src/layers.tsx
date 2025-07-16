export interface LayerConfig {
  id: string;
  url?: string;
  description: string;
  layerType: "feature" | "imagery" | "vector-tile" | "group-layer";
  sublayers?: LayerConfig[];
}

export const HAWAII_LAYERS: LayerConfig[] = [
  // Vector Tile Layer
  {
    id: "esri-world-vt",
    url: "https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer",
    description: "Esri World Topo Vector Tile",
    layerType: "vector-tile",
  },

  // Imagery Layers
  {
    id: "carbon-habitat-status",
    url: "https://geodata.hawaii.gov/arcgis/rest/services/LandUseLandCover_Raster/MapServer/1",
    description: "Carbon Assessment of Hawaii - Habitat Status (Raster)",
    layerType: "imagery",
  },
  {
    id: "carbon-biome-unit",
    url: "https://geodata.hawaii.gov/arcgis/rest/services/LandUseLandCover_Raster/MapServer/2",
    description: "Carbon Assessment of Hawaii - Biome Unit (Raster)",
    layerType: "imagery",
  },

  // Feature Layers
  {
    id: "benthic-habitat",
    url: "https://geodata.hawaii.gov/arcgis/rest/services/CoastalMarine/MapServer/1",
    description: "Benthic Habitat",
    layerType: "feature",
  },
  {
    id: "humpback-whale-sanctuary",
    url: "https://geodata.hawaii.gov/arcgis/rest/services/CoastalMarine/MapServer/6",
    description: "Humpback Whale Sanctuary",
    layerType: "feature",
  },
  {
    id: "land-study-bureau-lsb",
    url: "https://geodata.hawaii.gov/arcgis/rest/services/LandUseLandCover/MapServer/3",
    description: "Land Study Bureau (LSB)",
    layerType: "feature",
  },
  {
    id: "oahu-major-roads",
    url: "https://geodata.hawaii.gov/arcgis/rest/services/Transportation/MapServer/7",
    description: "Oahu Major Roads",
    layerType: "feature",
  },

  // Group Layer
  {
    id: "municipal-boundaries",
    description: "Municipal Boundaries",
    layerType: "feature",
    sublayers: [
      {
        id: "us-congressional-districts-91",
        url: "https://geodata.hawaii.gov/arcgis/rest/services/AdminBnd/MapServer/1",
        description: "US Congressional Districts 91",
        layerType: "feature",
      },
      {
        id: "state-house-districts-91",
        url: "https://geodata.hawaii.gov/arcgis/rest/services/AdminBnd/MapServer/4",
        description: "State House Districts 91",
        layerType: "feature",
      },
      {
        id: "hawaii-county-council-districts",
        url: "https://geodata.hawaii.gov/arcgis/rest/services/AdminBnd/MapServer/10",
        description: "Hawaii County Council Districts",
        layerType: "feature",
      },
      {
        id: "2020-census-county-boundaries",
        url: "https://geodata.hawaii.gov/arcgis/rest/services/Census/MapServer/29",
        description: "2020 Census County Boundaries",
        layerType: "feature",
      },
    ],
  },
];
