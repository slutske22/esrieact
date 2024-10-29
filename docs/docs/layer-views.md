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



## FeatureLayerView

### Props

Extends [FeatureLayerView Props](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-FeatureLayerView.html#properties-summary)