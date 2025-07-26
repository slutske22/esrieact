---
sidebar_position: 2
title: A Note About Props
---

# Props

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

However, any propery then updated within the above `new Extent` would not register as a property change with react. The reason for this is that many ArcGIS class-based instance properties are [non-Enumerable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties), and as such, React will not know they have been changed, and will not update the property accordingly. For example, this will not work as expected:

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

Because the property being updated is deeply nested within class-based ESRI components, whose resultant properties are non-enumerable, react will not sense the change and will not update the component. However, most ESRI component properties accept simple objects as option parameters that get [auto-casted](https://developers.arcgis.com/javascript/latest/programming-patterns/#autocasting) to their corresponding class constructor:

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

Note that attempting to update any `readonly` properties via props or state, on any ArcGIS JS API instance, will fail.