---
sidebar_position: 1
slug: /
title: Introduction
---

# ESRIEACT

A react component library for the ArcGIS Javascript API.

## Getting Started

This project is very much a work in progress.  The end goal would be to publish an npm package with these react components.  In the meantime, simply copy the contents of the [/lib](https://github.com/slutske22/esrieact/tree/main/lib) folder into your codebase, and use the components directly.

## Why ESRIEACT?

The goal of wrapping ArcGIS JS API components in react wrappers is to maintain a react-style flow of data, i.e. state and prop changes cause components to react and auto-update. For example, rendering a map, or map components, normally requires many `useEffect` calls:

```ts
import React, { useEffect } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

export const EffectBasedMap: React.FC = () => {
  useEffect(() => {
    const map = new Map({
      basemap: "topo-vector",
    });

    new MapView({
      container: "map-div",
      map,
    });
  }, []);

  return <div id="map-div" />;
};
```

While the above is not terribly complex or ugly, mangaging map state with React is more complex as we add more ESRI components. For example, keeping the map up to date with a list of layers requires some confusing `useEffect`s:

```ts
export const EffectBasedMap: React.FC = ({ layerList }) => {
  const [map, setMap] = useState<__esri.Map>();

  useEffect(() => {
    const map = new Map({
      basemap: "topo-vector",
    });

    new MapView({
      container: "map-div",
      map,
    });

    setMap(map);
  }, []);

  useEffect(() => {
    if (map) {
      layerList.forEach((layer) => {
        if (!map.layers.map((l) => l.id).includes(layer.id)) {
          map.add(layer);
        }
        // We would also need some ugly logic here to test if the map has
        // layers that are not part of the new layer list prop
      });
    }
  }, [map, layerList]);

  return <div id="map-div" />;
};
```

Instead, wrapper components are available to make map presentation clear and declarative:

```ts
import React from "react";
import { FeatureLayer, MapView } from "./esri";

export const ReactMap: React.FC = ({ layerList }) => {
  return (
    <MapView>
      {layerList.map((layer) => (
        <FeatureLayer url={layer.url} />
      ))}
    </MapView>
  );
};
```

The wrappers for ESRIEACT components often do not render anything, but rather simply use react lifecycle methods to manage the interaction of an ESRI component to the map. If children of a component are needed, ESRIEACT components render a context object that provides the ESRI instance to any children.

### What about ESRI's react library?

ESRI recently released [@arcgis/map-components-react](https://www.npmjs.com/package/@arcgis/map-components-react), which offers some support for ArcGIS components in react.  Their [documentation](https://developers.arcgis.com/javascript/latest/get-started-react/) shows a basic example, but in the current early stage of this library, react components for map layers, renderers, graphics, etc, do not exist, and must still be added to a map using the classic imperative programming style.

## Props

Vanilla ESRI component properties are class-based, and often circular. For example:

```ts
// Using vanilla ArcGIS JS API

const view = new MapView({
  extent: new Extent({
    xmin: 10,
    xmax: 100,
    ymin: -20,
    ymax: 120,
    spatialReference: new SpatialReference({
      wkid: 102100,
    }),
  }),
});
```

Beacuse react-wrapped ESRI component props extend directly from ESRI class options, this would technically work:

```ts
import React from "react";
import { FeatureLayer, MapView } from "./esri";

export const ReactMap: React.FC = ({ layerList }) => {
  return (
    <MapView
      extent={new Extent({
        xmin: 10,
        xmax: 100,
        ymin: -20,
        ymax: 120,
        spatialReference: new SpatialReference({
          wkid: 102100
        })
      })}
    />
  );
};
```

However, any propery then updated within the above `new Extent` would not register as a property change with react. The reason for this is that many ArcGIS class-based instance properties and [non-Enumerable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties), and as such, React will not know they have been changed, and will not update the property accordingly. For example, this will not work as expected:

```ts
import React from "react";
import { FeatureLayer, MapView } from "./esri";
import FeatureEffect from '@arcgis/core/layers/FeatureEffect'
import FeatureFilter from '@arcgis/core/layers/FeatureFilter'

export const ReactMap: React.FC = ({ layerList }) => {
  const [clause, setClause] = useState("SOME SQL CLAUSE");

  return (
    <MapView>
      <FeatureLayer featureEffect={new FeatureEffect({
        filter: new FeatureFilter({
          where: clause
        })
      })} />
    </MapView>
  );
};
```

Because the property being updated is deeply nested within class-based ESRI components, whose resultant properties are non-enumerable, react will not sense the change and will not update the component. However, most ESRI component properties accept simple objects as option parameters in place of class constructors:

```ts
import React from "react";
import { FeatureLayer, MapView } from "./esri";

export const ReactMap: React.FC = ({ layerList }) => {
  const [clause, setClause] = useState("SOME SQL CLAUSE");

  return (
    <MapView>
      <FeatureLayer featureEffect={{
        filter: {
          where: clause
        }
      }} />
    </MapView>
  );
};
```

It is prefereable to use this second syntax in this codebase. (Though in the case of trying to filter a FeatureLayer, it is preferable to use a [definitionExpression](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#definitionExpression) for server-side filtering, or a `<FeatureLayerView />` component with a `filter` applied for front-end filtering).