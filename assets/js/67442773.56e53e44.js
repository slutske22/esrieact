(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4693],{31875:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=r(74848),i=r(28453),s=r(78478);const a={sidebar_position:1},o="MapView",c={id:"map-view",title:"MapView",description:"A MapView is a react component which combines both an ESRI Map and a MapView into a singular component. It will render a div, and once rendered, use it to render an ArcGIS JS API MapView. MapView accepts all HTMLAttributes properties, as well as optional MapProperties and ViewProperties, which allow you to set the inital Map and MapView options:",source:"@site/docs/map-view.mdx",sourceDirName:".",slug:"/map-view",permalink:"/map-view",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/"},next:{title:"Layer Components",permalink:"/category/layer-components"}},p={},d=[];function l(e){const t={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"mapview",children:"MapView"})}),"\n",(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.code,{children:"MapView"})," is a react component which combines both an ESRI ",(0,n.jsx)(t.a,{href:"https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html",children:(0,n.jsx)(t.code,{children:"Map"})})," and a ",(0,n.jsx)(t.a,{href:"https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html",children:(0,n.jsx)(t.code,{children:"MapView"})})," into a singular component. It will render a div, and once rendered, use it to render an ArcGIS JS API MapView. MapView accepts all ",(0,n.jsx)(t.code,{children:"HTMLAttributes<HTMLDivElement>"})," properties, as well as optional MapProperties and ViewProperties, which allow you to set the inital Map and MapView options:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'const Page: React.FC = () => {\n  return (\n    <MapView\n      id="standard-html-id-for-wrapper-div"\n      style={{ /* use this to ensure map is the size you need */ }}\n      MapProperties={{ basemap: "topo-vector" }}\n      ViewProperties={{ extent: SOME_EXTENT_OBJECT }}\n    />\n  )\n}\n'})}),"\n",(0,n.jsx)(s.A,{children:()=>{const e=r(6939).K4;return(0,n.jsx)(e,{style:{height:"400px",width:"100%"},MapProperties:{basemap:"topo"},ViewProperties:{extent:{xmin:-9177811,ymin:4247e3,xmax:-9176791,ymax:4247784,spatialReference:102100},popup:{defaultPopupTemplateEnabled:!0}}})}}),"\n",(0,n.jsx)(t.h1,{id:"mapviewcore",children:"MapViewCore"}),"\n",(0,n.jsx)(t.p,{children:"Something in here"})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},6939:(e,t,r)=>{"use strict";r.d(t,{K4:()=>w});var n=r(96540),i=r(62605),s=r(36728),a=r(17243),o=r(4223);function c(e){const t=(0,n.useRef)();return(0,n.useEffect)((()=>{t.current=e}),[e]),t.current}const p=(e,t)=>{const r=c(t);(0,o.w5)((()=>{if(r){const s=(n=t,i=r,Object.keys(n).reduce(((e,t)=>{if(i.hasOwnProperty(t)){if((0,a.isEqual)(n[t],i[t])){const r=e.indexOf(t);e.splice(r,1)}}else e.push(t);return e}),Object.keys(i)));s.length&&s.forEach((r=>{e[r]=t[r]}))}var n,i}),[JSON.stringify(t)])};var d=r(74848);const l=n.createContext({}),h=e=>{let{children:t}=e;const[r,i]=(0,n.useState)(void 0),[s,a]=(0,n.useState)(void 0);return(0,d.jsx)(l.Provider,{value:{map:r,setMap:i,view:s,setView:a},children:t})},u=n.forwardRef(((e,t)=>{const{MapProperties:r,ViewProperties:{events:a,...o}={},children:c,...h}=e,[u,w]=(0,n.useState)(),{map:m,setMap:f,view:v,setView:x}=(0,n.useContext)(l);return(0,n.useImperativeHandle)(t,(()=>({map:m,view:v,element:u}))),function(e,t){const r=(0,n.useRef)([]);(0,n.useEffect)((()=>(e&&t&&(r.current.forEach((e=>e.remove())),r.current=Object.keys(t).map((r=>{const n=t[r];if(n){if(n.modifiers){const{modifiers:t,handler:i}=n;return e.on(r,t,i)}return e.on(r,n)}}))),()=>{r.current.forEach((e=>e.remove())),r.current=[]})),[e,t])}(v,"function"==typeof a?a(v):a),(0,n.useEffect)((()=>{if(u){const e=new i.A(r),t=new s.A({map:e,container:u,...o});f(e),x(t)}}),[u]),p(m,r),p(v,o),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{ref:e=>{e&&w(e)},...h}),m&&v&&c]})})),w=n.forwardRef(((e,t)=>(0,d.jsx)(h,{children:(0,d.jsx)(u,{...e,ref:t})})))},90763:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=90763,e.exports=t}}]);