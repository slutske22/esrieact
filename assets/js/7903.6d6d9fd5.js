"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7903],{57903:(e,a,r)=>{r.r(a),r.d(a,{fromUrl:()=>d});var t=r(98849),n=r(20909),l=r(16123),s=r(98154),i=r(83175),o=r(40454),u=r(12434),c=r(90176);const y={FeatureLayer:!0,SceneLayer:!0};async function d(e){const a=e.properties?.customParameters,u=await async function(e,a){let r=(0,l.qg)(e);if(null==r&&(r=await async function(e,a){const r=await(0,c.V)(e,{customParameters:a});let t=null,s=null;const i=r.type;if("Feature Layer"===i||"Table"===i?(t="FeatureServer",s=r.id??null):"indexedVector"===i?t="VectorTileServer":r.hasOwnProperty("mapName")?t="MapServer":r.hasOwnProperty("bandCount")&&r.hasOwnProperty("pixelSizeX")?t="ImageServer":r.hasOwnProperty("maxRecordCount")&&r.hasOwnProperty("allowGeometryUpdates")?t="FeatureServer":r.hasOwnProperty("streamUrls")?t="StreamServer":m(r)?(t="SceneServer",s=r.id):r.hasOwnProperty("layers")&&m(r.layers?.[0])&&(t="SceneServer"),!t)return null;const o=null!=s?(0,l.iz)(e):null;return{title:null!=o&&r.name||(0,n.e7)(e),serverType:t,sublayer:s,url:{path:null!=o?o.serviceUrl:(0,n.An)(e).path}}}(e,a)),null==r)throw new t.A("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:e});const{serverType:u,sublayer:d}=r;let f;const h={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"},p="FeatureServer"===u,b="SceneServer"===u,v={parsedUrl:r,Constructor:null,layerId:p||b?d??void 0:void 0,layers:[],tables:[]};switch(u){case"MapServer":f=null!=d?"FeatureLayer":await async function(e,a){return(await(0,c.V)(e,{customParameters:a})).tileInfo}(e,a)?"TileLayer":"MapImageLayer";break;case"ImageServer":{const r=await(0,c.V)(e,{customParameters:a}),{tileInfo:t,cacheType:n}=r;f=t?"LERC"!==t?.format?.toUpperCase()||n&&"elevation"!==n.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const e=await(0,c.V)(r.url.path,{customParameters:a});if(f="SceneLayer",e){const a=e?.layers;if("Voxel"===e?.layerType)f="VoxelLayer";else if(a?.length){const e=a[0]?.layerType;null!=e&&null!=o.XX[e]&&(f=o.XX[e])}}break}case"FeatureServer":if(f="FeatureLayer",null!=d){const r=await(0,c.V)(e,{customParameters:a});v.sourceJSON=r,"Oriented Imagery Layer"===r.type&&(f="OrientedImageryLayer")}break;default:f=h[u]}if(y[f]&&null==d){const r=await async function(e,a,r){let t,n,l=!1;switch(a){case"FeatureServer":{const a=await(0,i.Q)(e,{customParameters:r});l=!!a.layersJSON,t=a.layersJSON||a.serviceJSON;break}case"SceneServer":{const a=await async function(e,a){const r=await(0,c.V)(e,{customParameters:a}),t=r.layers?.[0];if(!t)return{serviceInfo:r};try{const{serverUrl:t}=await(0,s.L)(e),n=await(0,c.V)(t,{customParameters:a}).catch((()=>null));return n&&(r.tables=n.tables),{serviceInfo:r,tableServerUrl:t}}catch{return{serviceInfo:r}}}(e,r);t=a.serviceInfo,n=a.tableServerUrl;break}default:t=await(0,c.V)(e,{customParameters:r})}const o=t?.layers,u=t?.tables;return{layers:o?.map((e=>({id:e.id}))).reverse()||[],tables:u?.map((e=>({serverUrl:n,id:e.id}))).reverse()||[],layerInfos:l?o:[],tableInfos:l?u:[]}}(e,u,a);if(p&&(v.sublayerInfos=r.layerInfos,v.tableInfos=r.tableInfos),1!==r.layers.length+r.tables.length)v.layers=r.layers,v.tables=r.tables,p&&r.layerInfos?.length&&(v.sublayerConstructorProvider=await async function(e){const a=[],r=[];if(e.forEach((e=>{const{type:t}=e;"Oriented Imagery Layer"===t?(a.push(t),r.push(w("OrientedImageryLayer"))):(a.push(t),r.push(w("FeatureLayer")))})),!r.length)return;const t=await Promise.all(r),n=new Map;return a.forEach(((e,a)=>{n.set(e,t[a])})),e=>n.get(e.type)}(r.layerInfos));else if(p||b){const e=r.layerInfos?.[0]??r.tableInfos?.[0];v.layerId=r.layers[0]?.id??r.tables[0]?.id,v.sourceJSON=e,p&&"Oriented Imagery Layer"===e?.type&&(f="OrientedImageryLayer")}}return v.Constructor=await w(f),v}(e.url,a),d={...e.properties,url:e.url};if(u.layers.length+u.tables.length===0)return null!=u.layerId&&(d.layerId=u.layerId),null!=u.sourceJSON&&(d.sourceJSON=u.sourceJSON),new u.Constructor(d);const h=new(0,(await Promise.all([r.e(2076),r.e(2102)]).then(r.bind(r,62102))).default)({title:u.parsedUrl.title});return await async function(e,a,r){function t(e,a,t,n){const l={...r,layerId:a,sublayerTitleMode:"service-name"};return null!=e&&(l.url=e),null!=t&&(l.sourceJSON=t),n(l)}const n=a.sublayerConstructorProvider;for(const{id:l,serverUrl:s}of a.layers){const r=f(a.sublayerInfos,l),i=(r&&n?.(r))??a.Constructor,o=t(s,l,r,(e=>new i(e)));e.add(o)}if(a.tables.length){const r=await w("FeatureLayer");a.tables.forEach((({id:n,serverUrl:l})=>{const s=t(l,n,f(a.tableInfos,n),(e=>new r(e)));e.tables.add(s)}))}}(h,u,d),h}function f(e,a){return e?e.find((e=>e.id===a)):null}function m(e){return null!=e&&e.hasOwnProperty("store")&&e.hasOwnProperty("id")&&"number"==typeof e.id}async function w(e){return(0,u.S[e])()}},98154:(e,a,r)=>{r.d(a,{L:()=>c});var t=r(28830),n=r(86394),l=r(98849),s=r(40189),i=r(16123),o=r(10282),u=r(26099);async function c(e,a){const r=(0,i.qg)(e);if(!r)throw new l.A("invalid-url","Invalid scene service url");const c={...a,sceneServerUrl:r.url.path,layerId:r.sublayer??void 0};if(c.sceneLayerItem??=await async function(e){const a=(await y(e)).serviceItemId;if(!a)return null;const r=new u.default({id:a,apiKey:e.apiKey}),l=await async function(e){const a=t.id?.findServerInfo(e.sceneServerUrl);if(a?.owningSystemUrl)return a.owningSystemUrl;const r=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const a=(await(0,n.A)(r,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(a)return a}catch(f){(0,s.QP)(f)}return null}(e);null!=l&&(r.portal=new o.A({url:l}));try{return r.load({signal:e.signal})}catch(m){return(0,s.QP)(m),null}}(c),null==c.sceneLayerItem)return d(c.sceneServerUrl.replace("/SceneServer","/FeatureServer"),c);const f=await async function({sceneLayerItem:e,signal:a}){if(!e)return null;try{const r=(await e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:a})).find((e=>"Feature Service"===e.type))||null;if(!r)return null;const t=new u.default({portal:r.portal,id:r.id});return await t.load(),t}catch(r){return(0,s.QP)(r),null}}(c);if(!f?.url)throw new l.A("related-service-not-found","Could not find feature service through portal item relationship");const m=await d(f.url,c);return m.portalItem=f,m}async function y(e){if(e.rootDocument)return e.rootDocument;const a={query:{f:"json",token:e.apiKey},responseType:"json",signal:e.signal};try{const r=await(0,n.A)(e.sceneServerUrl,a);e.rootDocument=r.data}catch{e.rootDocument={}}return e.rootDocument}async function d(e,a){const r=(0,i.qg)(e);if(!r)throw new l.A("invalid-feature-service-url","Invalid feature service url");const t=r.url.path,s=a.layerId;if(null==s)return{serverUrl:t};const o=y(a),u=e=>{const r={query:{f:"json"},responseType:"json",authMode:e,signal:a.signal};return(0,n.A)(t,r)},c=u("anonymous").catch((()=>u("no-prompt"))),[d,f]=await Promise.all([c,o]),m=f?.layers,w=d.data&&d.data.layers;if(!Array.isArray(w))throw new Error("expected layers array");if(Array.isArray(m)){for(let n=0;n<Math.min(m.length,w.length);n++)if(m[n].id===s)return{serverUrl:t,layerId:w[n].id}}else if(null!=s&&s<w.length)return{serverUrl:t,layerId:w[s].id};throw new Error("could not find matching associated sublayer")}},83175:(e,a,r)=>{r.d(a,{Q:()=>n});var t=r(90176);async function n(e,a){const r=await(0,t.V)(e,a);c(r),i(r);const n={serviceJSON:r};if((r.currentVersion??0)<10.5)return n;const l=await(0,t.V)(e+"/layers",a);return c(l),i(l),n.layersJSON={layers:l.layers,tables:l.tables},n}function l(e){return"Feature Layer"===e.type||"Oriented Imagery Layer"===e.type}function s(e){return"Table"===e.type}function i(e){e.layers=e.layers?.filter(l),e.tables=e.tables?.filter(s)}function o(e){e.type||="Feature Layer"}function u(e){e.type||="Table"}function c(e){e.layers?.forEach(o),e.tables?.forEach(u)}},12434:(e,a,r)=>{r.d(a,{S:()=>t});const t={BingMapsLayer:async()=>(await Promise.all([r.e(2076),r.e(6132)]).then(r.bind(r,16132))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(2076),r.e(6500),r.e(3780),r.e(1414),r.e(1180),r.e(8764),r.e(1359)]).then(r.bind(r,59436))).default,CSVLayer:async()=>(await Promise.all([r.e(2076),r.e(6500),r.e(3780),r.e(9439)]).then(r.bind(r,97588))).default,DimensionLayer:async()=>(await Promise.all([r.e(2076),r.e(9994)]).then(r.bind(r,39994))).default,ElevationLayer:async()=>(await Promise.all([r.e(2076),r.e(3010)]).then(r.bind(r,73010))).default,FeatureLayer:async()=>(await Promise.all([r.e(2076),r.e(6500),r.e(3780),r.e(3432)]).then(r.bind(r,83780))).default,GeoJSONLayer:async()=>(await Promise.all([r.e(2076),r.e(8485)]).then(r.bind(r,8485))).default,GeoRSSLayer:async()=>(await Promise.all([r.e(2076),r.e(5730)]).then(r.bind(r,5730))).default,GroupLayer:async()=>(await Promise.all([r.e(2076),r.e(2102)]).then(r.bind(r,62102))).default,ImageryLayer:async()=>(await Promise.all([r.e(2076),r.e(8100),r.e(5114),r.e(2342),r.e(1874)]).then(r.bind(r,81874))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(2076),r.e(8100),r.e(5114),r.e(6938),r.e(2342),r.e(7663)]).then(r.bind(r,87663))).default,IntegratedMeshLayer:async()=>(await Promise.all([r.e(2076),r.e(1180),r.e(2491)]).then(r.bind(r,22491))).default,KMLLayer:async()=>(await Promise.all([r.e(2076),r.e(9062)]).then(r.bind(r,19062))).default,LineOfSightLayer:async()=>(await Promise.all([r.e(2076),r.e(9081)]).then(r.bind(r,49081))).default,LinkChartLayer:async()=>(await Promise.all([r.e(2076),r.e(1615),r.e(6568),r.e(8776),r.e(2459)]).then(r.bind(r,92459))).default,MapImageLayer:async()=>(await Promise.all([r.e(2076),r.e(4594),r.e(4634),r.e(1330)]).then(r.bind(r,11330))).default,MapNotesLayer:async()=>(await Promise.all([r.e(2076),r.e(6500),r.e(3780),r.e(9929)]).then(r.bind(r,60266))).default,MediaLayer:async()=>(await Promise.all([r.e(2076),r.e(4749)]).then(r.bind(r,74749))).default,OGCFeatureLayer:async()=>(await Promise.all([r.e(2076),r.e(8820)]).then(r.bind(r,28820))).default,OpenStreetMapLayer:async()=>(await Promise.all([r.e(2076),r.e(8628)]).then(r.bind(r,8628))).default,OrientedImageryLayer:async()=>(await Promise.all([r.e(2076),r.e(6500),r.e(3780),r.e(5151)]).then(r.bind(r,51092))).default,PointCloudLayer:async()=>(await Promise.all([r.e(2076),r.e(5840)]).then(r.bind(r,75840))).default,RouteLayer:async()=>(await Promise.all([r.e(2076),r.e(3058),r.e(4030)]).then(r.bind(r,44030))).default,SceneLayer:async()=>(await Promise.all([r.e(2076),r.e(1414),r.e(1180),r.e(8764),r.e(2534)]).then(r.bind(r,12534))).default,StreamLayer:async()=>(await Promise.all([r.e(2076),r.e(1058)]).then(r.bind(r,31058))).default,SubtypeGroupLayer:async()=>(await Promise.all([r.e(2076),r.e(6500),r.e(8002)]).then(r.bind(r,64810))).default,TileLayer:async()=>(await Promise.all([r.e(2076),r.e(4594),r.e(4634),r.e(107)]).then(r.bind(r,10107))).default,UnknownLayer:async()=>(await Promise.all([r.e(2076),r.e(5335)]).then(r.bind(r,75335))).default,UnsupportedLayer:async()=>(await Promise.all([r.e(2076),r.e(7400)]).then(r.bind(r,7400))).default,VectorTileLayer:async()=>(await Promise.all([r.e(2076),r.e(7744),r.e(8782)]).then(r.bind(r,38782))).default,VoxelLayer:async()=>(await Promise.all([r.e(2076),r.e(9901)]).then(r.bind(r,89901))).default,WFSLayer:async()=>(await Promise.all([r.e(2076),r.e(2783)]).then(r.bind(r,62783))).default,WMSLayer:async()=>(await Promise.all([r.e(2076),r.e(5719)]).then(r.bind(r,25719))).default,WMTSLayer:async()=>(await Promise.all([r.e(2076),r.e(9685)]).then(r.bind(r,89685))).default,WebTileLayer:async()=>(await Promise.all([r.e(2076),r.e(7187)]).then(r.bind(r,47187))).default}},90176:(e,a,r)=>{r.d(a,{V:()=>n});var t=r(86394);async function n(e,a){const{data:r}=await(0,t.A)(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}});return r}}}]);