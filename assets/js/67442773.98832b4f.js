(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4693],{31875:(e,r,i)=>{"use strict";i.r(r),i.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>w,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=i(74848),t=i(28453),s=i(78478),o=i(96540);const a={sidebar_position:3,title:"MapView"},d="",c={id:"map-view",title:"MapView",description:"MapView",source:"@site/docs/map-view.mdx",sourceDirName:".",slug:"/map-view",permalink:"/esrieact/map-view",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"MapView"},sidebar:"tutorialSidebar",previous:{title:"A Note About Props",permalink:"/esrieact/props"},next:{title:"Layers",permalink:"/esrieact/category/layers"}},l={},p=[{value:"MapView",id:"mapview",level:2},{value:"MapContextProvider",id:"mapcontextprovider",level:2},{value:"Props",id:"props",level:2},{value:"<code>children</code>",id:"children",level:3},{value:"<code>MapProperties</code>",id:"mapproperties",level:3},{value:"<code>ViewProperties</code>",id:"viewproperties",level:3},{value:"<code>ViewProperties.events</code>",id:"viewpropertiesevents",level:4}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:""})}),"\n",(0,n.jsx)(r.h2,{id:"mapview",children:"MapView"}),"\n",(0,n.jsxs)(r.p,{children:["A ",(0,n.jsx)(r.code,{children:"MapView"})," is a react component which combines both an ESRI ",(0,n.jsx)(r.a,{href:"https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html",children:(0,n.jsx)(r.code,{children:"Map"})})," and a ",(0,n.jsx)(r.a,{href:"https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html",children:(0,n.jsx)(r.code,{children:"MapView"})})," into a singular component. It will render a div, and once rendered, use it to render an ArcGIS JS API MapView. MapView accepts all ",(0,n.jsx)(r.code,{children:"HTMLAttributes<HTMLDivElement>"})," properties, as well as optional MapProperties and ViewProperties, which allow you to set the inital Map and MapView options:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'const Page: React.FC = () => {\n  return (\n    <MapView\n      id="standard-html-id-for-wrapper-div"\n      style={{ /* use this to ensure map is the size you need */ }}\n      MapProperties={{ basemap: "topo-vector" }}\n      ViewProperties={{ extent: SOME_EXTENT_OBJECT }}\n    />\n  )\n}\n'})}),"\n",(0,n.jsx)(s.A,{children:()=>{const e=i(6939).K4;return(0,n.jsx)(e,{style:{height:"400px",width:"100%"},MapProperties:{basemap:"topo"},ViewProperties:{extent:{xmin:-9177811,ymin:4247e3,xmax:-9176791,ymax:4247784,spatialReference:102100},popup:{defaultPopupTemplateEnabled:!0}}})}}),"\n",(0,n.jsx)(r.h2,{id:"mapcontextprovider",children:"MapContextProvider"}),"\n",(0,n.jsxs)(r.p,{children:["In order for ",(0,n.jsx)(r.code,{children:"<MapView />"})," child components to be properly associated with the underlying ",(0,n.jsx)(r.code,{children:"map"})," and ",(0,n.jsx)(r.code,{children:"view"})," instances, a ",(0,n.jsx)(r.code,{children:"<MapView />"})," provides its own ",(0,n.jsx)(r.code,{children:"MapContextProvider"})," wrapper out of the box. However, if you find that you need to access the ",(0,n.jsx)(r.code,{children:"map"})," and ",(0,n.jsx)(r.code,{children:"view"})," from outside the ",(0,n.jsx)(r.code,{children:"<MapView />"})," component, you can instead use the ",(0,n.jsx)(r.code,{children:"MapViewCore"})," wrapped in the ",(0,n.jsx)(r.code,{children:"MapContextProvider"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"// App.tsx\nimport { MapViewCore, MapContextProvider } from 'lib/map/MapView';\n\nconst App = () => {\n  // Wrap MapViewCore and other components that need access to the map context\n  return (\n    <MapContextProvider>\n      <MapViewCore />\n      <OtherUI />\n    </MapContextProvider>\n  )\n};\n\n// OtherUI.tsx\nimport { useContext } from 'react';\nimport { MapContext } from 'lib/map/MapView';\n\nconst OtherUI = () => {\n  const { view } = useContext(MapContext);\n  return <button onClick={() => view.zoom = view.zoom + 1}>Zoom in!</button>\n}\n"})}),"\n",(0,n.jsx)(s.A,{children:()=>{const e=i(6939).xF,r=i(6939).lo;return(0,n.jsx)(r,{children:(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)(e,{style:{height:"400px",minWidth:"80%"},MapProperties:{basemap:"topo"},ViewProperties:{extent:{xmin:-9177811,ymin:4247e3,xmax:-9176791,ymax:4247784,spatialReference:102100},popup:{defaultPopupTemplateEnabled:!0}}}),(0,n.jsx)((()=>{const e=i(6939).wZ,{view:r}=(0,o.useContext)(e);return(0,n.jsxs)("div",{style:{marginLeft:"10px"},children:[(0,n.jsx)("h5",{children:"Map and View references available outside the MapView component tree:"}),(0,n.jsx)("button",{onClick:()=>{r.zoom=r.zoom+1},children:"Zoom In!"}),(0,n.jsx)("button",{onClick:()=>{r.zoom=r.zoom-1},children:"Zoom Out!"})]})}),{})]})})}}),"\n",(0,n.jsx)(r.h2,{id:"props",children:"Props"}),"\n",(0,n.jsxs)(r.p,{children:["Extends ",(0,n.jsx)(r.code,{children:"HTMLAttributes<HTMLDivElement>"}),".  Additional props are:"]}),"\n",(0,n.jsx)(r.h3,{id:"children",children:(0,n.jsx)(r.code,{children:"children"})}),"\n",(0,n.jsxs)(r.p,{children:["Other ESRIEACT map components, like ",(0,n.jsx)(r.a,{href:"category/layer-components",children:"layers"}),", or ",(0,n.jsx)(r.a,{href:"category/widgets",children:"widgets"}),", etc."]}),"\n",(0,n.jsx)(r.h3,{id:"mapproperties",children:(0,n.jsx)(r.code,{children:"MapProperties"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"MapProperties"}),": ",(0,n.jsx)(r.a,{href:"https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#properties-summary",children:(0,n.jsx)(r.code,{children:"Map Properties"})})]}),"\n",(0,n.jsx)(r.h3,{id:"viewproperties",children:(0,n.jsx)(r.code,{children:"ViewProperties"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"ViewProperties"})," extends ",(0,n.jsx)(r.a,{href:"https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#properties-summary",children:(0,n.jsx)(r.code,{children:"MapView properties"})}),".  Accepts the additional field, ",(0,n.jsx)(r.code,{children:"events"}),":"]}),"\n",(0,n.jsx)(r.h4,{id:"viewpropertiesevents",children:(0,n.jsx)(r.code,{children:"ViewProperties.events"})}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"ViewProperties"})," prop can take an ",(0,n.jsx)(r.code,{children:"events"})," property, which is an ",(0,n.jsx)(r.code,{children:"ViewEventHandlerFnMap"}),", or a function that takes the ",(0,n.jsx)(r.code,{children:"MapView"})," instance as a parameter, and returns a ",(0,n.jsx)(r.code,{children:"ViewEventHandlerFnMap"}),".  A ",(0,n.jsx)(r.code,{children:"ViewEventHandlerFnMap"})," is an object whose keys are possible events on a ",(0,n.jsx)(r.code,{children:"MapView"}),", and whose values are the event handlers to be called on those events:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'  resize: __esri.ViewResizeEventHandler;\n  "layerview-create": __esri.ViewLayerviewCreateEventHandler;\n  "layerview-create-error": __esri.ViewLayerviewCreateErrorEventHandler;\n  "layerview-destroy": __esri.ViewLayerviewDestroyEventHandler;\n  click: HandlerWithOptionalModifiers<__esri.ViewClickEventHandler>;\n  "double-click": HandlerWithOptionalModifiers<__esri.ViewDoubleClickEventHandler>;\n  "immediate-double-click": HandlerWithOptionalModifiers<__esri.ViewImmediateDoubleClickEventHandler>;\n  "immediate-click": HandlerWithOptionalModifiers<__esri.ViewImmediateClickEventHandler>;\n  hold: HandlerWithOptionalModifiers<__esri.ViewHoldEventHandler>;\n  drag: HandlerWithOptionalModifiers<__esri.ViewDragEventHandler>;\n  "mouse-wheel": HandlerWithOptionalModifiers<__esri.ViewMouseWheelEventHandler>;\n  "key-down": HandlerWithOptionalModifiers<__esri.ViewKeyDownEventHandler>;\n  "key-up": HandlerWithOptionalModifiers<__esri.ViewKeyUpEventHandler>;\n  "pointer-down": HandlerWithOptionalModifiers<__esri.ViewPointerDownEventHandler>;\n  "pointer-move": HandlerWithOptionalModifiers<__esri.ViewPointerMoveEventHandler>;\n  "pointer-up": HandlerWithOptionalModifiers<__esri.ViewPointerUpEventHandler>;\n  "pointer-enter": HandlerWithOptionalModifiers<__esri.ViewPointerEnterEventHandler>;\n  "pointer-leave": HandlerWithOptionalModifiers<__esri.ViewPointerLeaveEventHandler>;\n  focus: __esri.ViewFocusEventHandler;\n  blur: __esri.ViewBlurEventHandler;\n'})}),"\n",(0,n.jsxs)(r.p,{children:["For more information on MapView events, see ",(0,n.jsx)(r.a,{href:"https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#on",children:"the ArcGIS JS API documentation"}),".  See ESRIACT examples here TODO"]})]})}function w(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},6939:(e,r,i)=>{"use strict";i.d(r,{wZ:()=>p,lo:()=>h,K4:()=>v,xF:()=>w});var n=i(96540),t=i(62605),s=i(36728),o=i(17243),a=i(4223);function d(e){const r=(0,n.useRef)();return(0,n.useEffect)((()=>{r.current=e}),[e]),r.current}const c=(e,r)=>{const i=d(r);(0,a.w5)((()=>{if(i){const s=(n=r,t=i,Object.keys(n).reduce(((e,r)=>{if(t.hasOwnProperty(r)){if((0,o.isEqual)(n[r],t[r])){const i=e.indexOf(r);e.splice(i,1)}}else e.push(r);return e}),Object.keys(t)));s.length&&s.forEach((i=>{e[i]=r[i]}))}var n,t}),[JSON.stringify(r)])};var l=i(74848);const p=n.createContext({}),h=e=>{let{children:r}=e;const[i,t]=(0,n.useState)(void 0),[s,o]=(0,n.useState)(void 0);return(0,l.jsx)(p.Provider,{value:{map:i,setMap:t,view:s,setView:o},children:r})},w=n.forwardRef(((e,r)=>{const{MapProperties:i,ViewProperties:{events:o,...a}={},children:d,...h}=e,[w,v]=(0,n.useState)(),{map:x,setMap:m,view:u,setView:j}=(0,n.useContext)(p);return(0,n.useImperativeHandle)(r,(()=>({map:x,view:u,element:w}))),function(e,r){const i=(0,n.useRef)([]);(0,n.useEffect)((()=>(e&&r&&(i.current.forEach((e=>e.remove())),i.current=Object.keys(r).map((i=>{const n=r[i];if(n){if(n.modifiers){const{modifiers:r,handler:t}=n;return e.on(i,r,t)}return e.on(i,n)}}))),()=>{i.current.forEach((e=>e.remove())),i.current=[]})),[e,r])}(u,"function"==typeof o?o(u):o),(0,n.useEffect)((()=>{if(w){const e=new t.A(i),r=new s.A({map:e,container:w,...a});m(e),j(r)}}),[w]),c(x,i),c(u,a),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{ref:e=>{e&&v(e)},...h}),x&&u&&d]})})),v=n.forwardRef(((e,r)=>(0,l.jsx)(h,{children:(0,l.jsx)(w,{...e,ref:r})})))},90763:e=>{function r(e){return Promise.resolve().then((()=>{var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}))}r.keys=()=>[],r.resolve=r,r.id=90763,e.exports=r}}]);