import { BenthicLayerFilter } from "./custom-controls";

export interface LayerConfig {
  id: string;
  url?: string;
  description: string;
  layerType: "feature" | "imagery" | "vector-tile" | "mapimagelayer";
  /**
   * Sublayers, if any.  Will render group as a GroupLayer.  Not the same as sunlayers on a MapImageLayer,
   * but rather a simple construct to show how a GroupLayer may or may not manage the visibility of its
   * children
   */
  sublayers?: LayerConfig[];
  /**
   * Custom controls to render under the menu item in the menu
   */
  CustomControls?: React.FC;
  /**
   * Skip rendering the layer in the list, so that it can be demonstrated in another way
   */
  skipRender?: boolean;
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
  {
    id: "infrastructure",
    url: "https://geodata.hawaii.gov/arcgis/rest/services/Infrastructure/MapServer",
    description: "Municipal infrastructure layers",
    /** This layer rendered separately in MainMap.tsc to demonstrate how to manage sublayers */
    skipRender: true,
    layerType: "mapimagelayer",
  },

  // Feature Layers
  {
    id: "benthic-habitat",
    url: "https://geodata.hawaii.gov/arcgis/rest/services/CoastalMarine/MapServer/1",
    description: "Benthic Habitat",
    layerType: "feature",
    CustomControls: BenthicLayerFilter,
    /** This layer rendered separately in MainMap.tsx to demonstrate sing
     * the FeatureLayerView as a child of a FeatureLayer to do client-side filtering
     */
    skipRender: true,
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

/**
 * The available `zone` values for the id: 'benthic-habitat' FeatureLayer
 */
export const benthicZones = [
  "Back Reef",
  "Unknown",
  "Fore Reef",
  "Unclassified",
  "Reef Hole",
  "Lagoon",
  "Land",
  "Reef Crest",
  "Dredged",
  "Bank/Shelf",
  "Channel",
  "Reef Flat",
  "Bank/Shelf Escarpment",
  "Shoreline Intertidal",
];

/**
 * The sublayers available withing the id: 'infrastructure' GroupLayer / MapImageLayer
 */
export const infrastructureSubLayers = [
  { name: "Onsite Sewage Disposal Systems - Kauai", layerId: 25 },
  { name: "Onsite Sewage Disposal Systems - Oahu", layerId: 22 },
  { name: "Onsite Sewage Disposal Systems - Molokai", layerId: 23 },
  { name: "Onsite Sewage Disposal Systems - Maui", layerId: 24 },
  { name: "Onsite Sewage Disposal Systems - Hawaii", layerId: 26 },
  { name: "Commercial Harbors", layerId: 1 },
  { name: "Small Boat Harbors", layerId: 2 },
  { name: "BoatingFacilities", layerId: 4 },
  { name: "Affordable Rental Housing Inventory - HHFDC", layerId: 11 },
  { name: "DOH Buildings", layerId: 3 },
  { name: "Hospitals", layerId: 5 },
  { name: "State Libraries", layerId: 28 },
  { name: "Preschools and Early Childcare", layerId: 6 },
  { name: "Public Schools", layerId: 7 },
  { name: "Private Schools", layerId: 8 },
  { name: "Postsecondary Institutions", layerId: 27 },
  { name: "National Bridge Inventory", layerId: 9 },
  { name: "Dams", layerId: 10 },
  { name: "Screened Hydro Projects", layerId: 18 },
  { name: "Studied Hydro Projects", layerId: 19 },
  { name: "Ditches", layerId: 21 },
  { name: "Wastewater Treatment Plants", layerId: 29 },
  { name: "Sewerlines (Marine)", layerId: 12 },
  { name: "Airports", layerId: 13 },
  { name: "Geothermal Wells", layerId: 20 },
  { name: "Golf Courses", layerId: 14 },
  { name: "County Parks (Hawaii County)", layerId: 17 },
  { name: "County Parks (Oahu)", layerId: 15 },
  { name: "County Parks (Statewide)", layerId: 30 },
  { name: "Campsites - Hawaii State Parks", layerId: 31 },
  { name: "State Parks", layerId: 16 },
];
