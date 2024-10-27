"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3976],{20619:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=a(74848),r=a(28453);const s={sidebar_position:1,slug:"/",title:"Introduction"},i="ESRIEACT",o={id:"intro",title:"Introduction",description:"A react component library for the ArcGIS Javascript API.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/esrieact/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/",title:"Introduction"},sidebar:"tutorialSidebar",next:{title:"A Note About Props",permalink:"/esrieact/props"}},c={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Install / Get the Components",id:"install--get-the-components",level:3},{value:"Create a Map",id:"create-a-map",level:3},{value:"Use State",id:"use-state",level:3},{value:"Why ESRIEACT?",id:"why-esrieact",level:2},{value:"Pains of the Past",id:"pains-of-the-past",level:3},{value:"React + ArcGIS JS API = ESRIEACT",id:"react--arcgis-js-api--esrieact",level:3},{value:"What about ESRI&#39;s react library?",id:"what-about-esris-react-library",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"esrieact",children:"ESRIEACT"})}),"\n",(0,n.jsx)(t.p,{children:"A react component library for the ArcGIS Javascript API."}),"\n",(0,n.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,n.jsx)(t.h3,{id:"install--get-the-components",children:"Install / Get the Components"}),"\n",(0,n.jsxs)(t.p,{children:["This project is very much a work in progress.  The end goal would be to publish an npm package with these react components.  In the meantime, simply copy the contents of the ",(0,n.jsx)(t.a,{href:"https://github.com/slutske22/esrieact/tree/main/lib",children:"/lib"})," folder into your codebase, and use the components directly."]}),"\n",(0,n.jsx)(t.h3,{id:"create-a-map",children:"Create a Map"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { MapView, FeatureLayer, LayerList } from '../lib';\n\nconst MyApp = () => {\n  return (\n    <MapView\n      style={{ width: '640px', height: '400px' }}\n      ViewProperties={{\n        extent: EXTENT_OBJECT,\n        events: {\n          click: e => console.log(e.mapPoint);\n        }\n      }}\n    >\n      <FeatureLayer url={FEATURELAYER_URL} />\n      <LayerList />\n    </MapView>\n  )\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"use-state",children:"Use State"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { MapView, FeatureLayer, LayerList } from '../lib';\n\nconst MyApp = () => {\n  const [maxStorage, setMaxStorage] = useState(10000);\n\n  return (\n    <MapView>\n      <FeatureLayer url={FEATURELAYER_URL}>\n        <FeatureLayerView filter={{ where: `C_Storage < ${maxStorage}` }} />\n      </FeatureLayer>\n    </MapView>\n  )\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"why-esrieact",children:"Why ESRIEACT?"}),"\n",(0,n.jsx)(t.h3,{id:"pains-of-the-past",children:"Pains of the Past"}),"\n",(0,n.jsxs)(t.p,{children:["The goal of wrapping ArcGIS JS API components in react wrappers is to maintain a react-style flow of data, i.e. state and prop changes cause components to react and auto-update. For example, rendering a map, or map components, normally requires many ",(0,n.jsx)(t.code,{children:"useEffect"})," calls:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:'import React, { useEffect } from "react";\nimport Map from "@arcgis/core/Map";\nimport MapView from "@arcgis/core/views/MapView";\n\nexport const EffectBasedMap: React.FC = () => {\n  useEffect(() => {\n    const map = new Map({\n      basemap: "topo-vector",\n    });\n\n    new MapView({\n      container: "map-div",\n      map,\n    });\n  }, []);\n\n  return <div id="map-div" />;\n};\n'})}),"\n",(0,n.jsxs)(t.p,{children:["While the above is not terribly complex or ugly, mangaging map state with React is more complex as we add more ESRI components. For example, keeping the map up to date with a list of layers requires some confusing ",(0,n.jsx)(t.code,{children:"useEffect"}),"s:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:'export const EffectBasedMap: React.FC = ({ layerList }) => {\n  const [map, setMap] = useState<__esri.Map>();\n\n  useEffect(() => {\n    const map = new Map({\n      basemap: "topo-vector",\n    });\n\n    new MapView({\n      container: "map-div",\n      map,\n    });\n\n    setMap(map);\n  }, []);\n\n  useEffect(() => {\n    if (map) {\n      layerList.forEach((layer) => {\n        if (!map.layers.map((l) => l.id).includes(layer.id)) {\n          map.add(layer);\n        }\n        // We would also need some ugly logic here to test if the map has\n        // layers that are not part of the new layer list prop\n      });\n    }\n  }, [map, layerList]);\n\n  return <div id="map-div" />;\n};\n'})}),"\n",(0,n.jsx)(t.h3,{id:"react--arcgis-js-api--esrieact",children:"React + ArcGIS JS API = ESRIEACT"}),"\n",(0,n.jsx)(t.p,{children:"Instead, wrapper components are available to make map presentation clear and declarative:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:'import React from "react";\nimport { FeatureLayer, MapView } from "./esri";\n\nexport const ReactMap: React.FC = ({ layerList }) => {\n  return (\n    <MapView>\n      {layerList.map((layer) => (\n        <FeatureLayer url={layer.url} />\n      ))}\n    </MapView>\n  );\n};\n'})}),"\n",(0,n.jsx)(t.p,{children:"The wrappers for ESRIEACT components often do not render anything, but rather simply use react lifecycle methods to manage the interaction of an ESRI component to the map. If children of a component are needed, ESRIEACT components render a context object that provides the ESRI instance to any children."}),"\n",(0,n.jsx)(t.h3,{id:"what-about-esris-react-library",children:"What about ESRI's react library?"}),"\n",(0,n.jsxs)(t.p,{children:["ESRI recently released ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@arcgis/map-components-react",children:"@arcgis/map-components-react"}),", which offers some support for ArcGIS components in react.  Their ",(0,n.jsx)(t.a,{href:"https://developers.arcgis.com/javascript/latest/get-started-react/",children:"documentation"})," shows a basic example, but in the current early stage of this library, react components for map layers, renderers, graphics, etc, do not exist, and must still be added to a map using the classic imperative programming style."]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}}}]);