<p align="center">
  <h1 align="center">ESRIEACT</h1>
</p>
<p align="center">
  A react component library for the ArcGIS Javascript API.
</p>

## 📘 [Read the Docs (Work in Progress!)](https://slutske22.github.io/esrieact/)

## File Organization

- `/lib` contains actual map component files that are the source code and main feature of this repository
- `/src` is simply an example application to showcase the code written in `/lib`

## Why?

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
import { FeatureLayer, MapView } from "esrieact";

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
import { FeatureLayer, MapView } from "esrieact";

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
import { FeatureLayer, MapView } from "esrieact";
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
import { FeatureLayer, MapView } from "esrieact";

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

## Context

Many components provide, and rely on, parent contexts. For example, a `Mapview` provides a context that can be consumed by all children of the map, so that those children have access to the underlying esri Map instance. Similarly, even sub-components like layers or widgets provide a context object, whose value is simply the instance of the esri class instance being wrapped.

## Utility factory functions

Factory functions help to quickly create layer and widget components. They are inspired largely by [react-leaflet's core architecture](https://react-leaflet.js.org/docs/core-introduction/).

Layer components should be created by using the `createLayerComponent` function. Widget components should be created using the `createWidgetComponent` function. Use of these factory functions may need to be tweaked, especially for complex widgets with different sub-components. Use these as a starting point for wrapping esri components in react lifecycle methdos.

## Major Components

### `MapView`

A `MapView` is a react component which combines both an ESRI [Map](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html) and a [MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html) into a singular component. It will render a div, and once rendered, use it to render an ArcGIS JS API MapView. `MapView` accepts all `HTMLAttributes<HTMLDivElement>` properties, as well as optional `MapProperties` and `ViewProperties`, which allow you to set the inital `Map` and `MapView` options:

```ts
const Page: React.FC = () => {
  return (
    <MapView
      id="standard-html-id-for-wrapper-div"
      style={{ /* use this to ensure map is the size you need */ }}
      MapProperties={{ basemap: "topo-vector" }}
      ViewProperties={{ extent: SOME_EXTENT_OBJECT }}
    />
  )
}
```

### `MapContextProvider`

In order for `<MapView />` child components to be properly associated with the underlying `map` and `view` instances, a `<MapView />` provides its own `MapContextProvider` wrapper out of the box. However, if you find that you need to access the `map` and `view` from outside the `<MapView />` component, you can instead use the `MapViewCore` wrapped in the `MapContextProvider`:

```ts
// App.tsx
import { MapViewCore, MapContextProvider } from 'esrieact';

const App = () => {
  // Wrap MapViewCore and other components that need access to the map context
  return (
    <MapContextProvider>
      <MapViewCore />
      <OtherUI />
    </MapContextProvider>
  )
};

// OtherUI.tsx
import { useContext } from 'react';
import { MapContext } from 'esrieact';

const OtherUI = () => {
  const { view } = useContext(MapContext);
  return <button onClick={() => view.zoom = view.zoom + 1}>Zoom in!</button>
}
```

### `FeatureLayer`

One of the most used layer types is the `FeatureLayer`. A `FeatureLayer` can be declared alone, or can accept a `FeatureLayerView` as a child to help taylor the layer:

```ts
import React from "react";
import { FeatureLayer, FeautureLayerView, MapView } from "esrieact";

export const ReactMap: React.FC = () => {
  const flRef = useRef<__esri.FeatureLayer>();
  const flViewRef = useRef<__esri.FeatureLayerView>();

  return (
    <MapView>
      {/* A simple featurelayer: */}
      <FeatureLayer url="some service url" />

      {/* A featurelayer that uses a FeatureLayerView to do some front-end filtering: */}
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
    </MapView>
  );
};
```

As you can see, all ESRIEACT components can take a ref, whose value is the underlying ESRI instance.

# React + TypeScript + Vite Readme

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
