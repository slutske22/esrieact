---
sidebar_position: 4
---

# Layer Views

## Intro

There are various react [LayerView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-LayerView.html) components available.  Traditionally, accessing and manipulating the [LayerView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-LayerView.html) of a layer required [imperative, asynchronous code](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html#whenLayerView):

```js
let layer = new FeatureLayer(url);

map.add(layer);

view.whenLayerView(layer)
    .then(function(layerView){ ... })
    .catch(function(error){ ... });
```

With ESRIEACT, LayerView components are available that abstract away asynchronous paradigm, and react to prop/state updates.  For example, a `CSVLayer` can take a `CSVLayerView` as a child:

```ts
const MyCsvMap = () => {
  const [selectedObjectIds, setSelectedObjectIds] = useState<string[]>([])

  return (
    <MapView {...props}>
      <CSVLayer url="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.csv">
        <CSVLayerView featureEffect={{
          filter: {
            objectIds: selectedObjectIds
          },
          excludedEffect: "blur(5px) grayscale(90%) opacity(40%)"
        }} />
      </CSVLayer>
    </MapView>
  )
}
```

Or you may want to use the ref of a `KMLLayerView` to get its underlying map images:

```ts
const MyKmlMap = () => {
  const [kmlRef, setKmlRef] = useState<string[]>([])

  useEffect(() => {
    if (kmlRef) {
      console.log('Visible map images are:', kmlRef.allVisibleMapImages)
    }
  }, [kmlRef])

  return (
    <MapView {...props}>
      <KMLLayer url="http://quickmap.dot.ca.gov/data/lcs.kml">
        <KMLLayerView ref={r => setKmlRef(r)} />
      </KMLLayer>
    </MapView>
  )
}
```

## Write your own Layerview components

Currently, not every type of `Layer` has a correctly typed `LayerView` component in esrieact.  See the docs on [createLayerViewComponent](/core-apis/createLayerViewComponent) to see how to quickly create typesafe `<LayerView />` components for any layer type.

## FeatureLayerView

Must be a child of a `<FeatureLayer />`.

Props are equivalent to [FeatureLayerView Props](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-FeatureLayerView.html#properties-summary)

`ref` is the instance of the underlying `FeatureLayerView` instance

