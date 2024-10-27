"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[107],{84858:(e,t,i)=>{var r;i.d(t,{u:()=>r}),function(e){e[e.KILOBYTES=1024]="KILOBYTES",e[e.MEGABYTES=1048576]="MEGABYTES",e[e.GIGABYTES=1073741824]="GIGABYTES"}(r||(r={}))},10107:(e,t,i)=>{i.r(t),i.d(t,{default:()=>k});var r,l=i(66866),a=i(86394),s=i(98849),n=i(6412),o=i(35775),h=i(40189),c=i(20909),p=i(21564),u=i(4130),d=(i(85569),i(39831),i(75094)),f=i(63863),v=i(77542),y=i(78983),m=i(68833),_=i(50193),g=i(9127),w=i(47217),b=i(45681),A=i(15305),S=i(16161),T=i(41506),O=i(34722),M=i(50508),D=i(25389),L=i(2178),I=i(16123),x=i(84356),C=i(52775),$=i(68619);const Z=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let P=r=class extends((0,A.d)((0,D.j)((0,L.I)((0,g.f)((0,w.V)((0,T.q)((0,O.A)((0,b.b)((0,o.P)((0,M.J)((0,_.p)((0,S.d)(m.A))))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(h.QP).then((()=>this._fetchService(t)))),Promise.resolve(this)}get attributionDataUrl(){const e=this.parsedUrl?.path.toLowerCase();return e?this._getDefaultAttribution(this._getMapName(e)):null}readSpatialReference(e,t){return(e=e||t.tileInfo?.spatialReference)&&y.A.fromJSON(e)}writeSublayers(e,t,i,r){if(!this.loaded||!e)return;const l=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray(),a=[],s={writeSublayerStructure:!1,...r};l.forEach((e=>{const t=e.write({},s);a.push(t)})),a.some((e=>Object.keys(e).length>1))&&(t.layers=a)}get tileServers(){return this._getDefaultTileServers(this.parsedUrl?.path)}castTileServers(e){return Array.isArray(e)?e.map((e=>(0,c.An)(e).path)):null}fetchTile(e,t,i,r={}){const{signal:l}=r,s=this.getTileUrl(e,t,i),n={responseType:"image",signal:l,query:{...this.refreshParameters}};return(0,a.A)(s,n).then((e=>e.data))}async fetchImageBitmapTile(e,t,i,l={}){const{signal:s}=l;if(this.fetchTile!==r.prototype.fetchTile){const r=await this.fetchTile(e,t,i,l);return(0,C.C)(r,e,t,i,s)}const n=this.getTileUrl(e,t,i),o={responseType:"blob",signal:s,query:{...this.refreshParameters}},{data:h}=await(0,a.A)(n,o);return(0,C.C)(h,e,t,i,s)}getTileUrl(e,t,i){const r=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,l=(0,c.x0)({...this.parsedUrl?.query,blankTile:!r&&null,...this.customParameters,token:this.apiKey}),a=this.tileServers;return`${a&&a.length?a[t%a.length]:this.parsedUrl?.path}/tile/${e}/${t}/${i}${l?"?"+l:""}`}loadAll(){return(0,n.g)(this,(e=>{e(this.allSublayers)}))}_fetchService(e){return new Promise(((t,i)=>{if(this.sourceJSON){if(null!=this.sourceJSON.bandCount&&null!=this.sourceJSON.pixelSizeX)throw new s.A("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void t({data:this.sourceJSON})}if(!this.parsedUrl)throw new s.A("tile-layer:undefined-url","layer's url is not defined");const r=(0,I.qg)(this.parsedUrl.path);if(null!=r&&"ImageServer"===r.serverType)throw new s.A("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");(0,a.A)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(t,i)})).then((t=>{let i=this.url;if(t.ssl&&(i=this.url=i.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl}),10.1===this.version&&!(0,I.Wo)(i))return this._fetchServerVersion(i,e).then((e=>{this.read({currentVersion:e})})).catch((()=>{}))}))}_fetchServerVersion(e,t){if(!(0,I.Fi)(e))return Promise.reject();const i=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return(0,a.A)(i,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t}).then((e=>{if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new s.A("tile-layer:version-not-available")}))}_getMapName(e){const t=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return t?t[2]:void 0}_getDefaultAttribution(e){if(null==e)return null;let t;e=e.toLowerCase();for(let i=0,r=Z.length;i<r;i++)if(t=Z[i],t.toLowerCase().includes(e))return(0,c.s2)("//static.arcgis.com/attribution/"+t);return null}_getDefaultTileServers(e){if(null==e)return[];const t=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),i=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return t||i?[e,e.replace(t?/server\.arcgisonline/i:/services\.arcgisonline/i,t?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile[U]}};(0,l._)([(0,p.MZ)({readOnly:!0})],P.prototype,"attributionDataUrl",null),(0,l._)([(0,p.MZ)({type:["show","hide","hide-children"]})],P.prototype,"listMode",void 0),(0,l._)([(0,p.MZ)({json:{read:!0,write:!0}})],P.prototype,"blendMode",void 0),(0,l._)([(0,p.MZ)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],P.prototype,"isReference",void 0),(0,l._)([(0,p.MZ)({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],P.prototype,"operationalLayerType",void 0),(0,l._)([(0,p.MZ)({type:Boolean})],P.prototype,"resampling",void 0),(0,l._)([(0,p.MZ)()],P.prototype,"sourceJSON",void 0),(0,l._)([(0,p.MZ)({type:y.A})],P.prototype,"spatialReference",void 0),(0,l._)([(0,d.w)("spatialReference",["spatialReference","tileInfo"])],P.prototype,"readSpatialReference",null),(0,l._)([(0,p.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],P.prototype,"path",void 0),(0,l._)([(0,p.MZ)({readOnly:!0})],P.prototype,"sublayers",void 0),(0,l._)([(0,v.K)("sublayers",{layers:{type:[$.A]}})],P.prototype,"writeSublayers",null),(0,l._)([(0,p.MZ)({json:{read:!1,write:!1}})],P.prototype,"popupEnabled",void 0),(0,l._)([(0,p.MZ)()],P.prototype,"tileServers",null),(0,l._)([(0,u.w)("tileServers")],P.prototype,"castTileServers",null),(0,l._)([(0,p.MZ)({readOnly:!0,json:{read:!1}})],P.prototype,"type",void 0),(0,l._)([(0,p.MZ)(x.OZ)],P.prototype,"url",void 0),P=r=(0,l._)([(0,f.$)("esri.layers.TileLayer")],P);const U=Symbol("default-fetch-tile");P.prototype.fetchTile[U]=!0;const k=P},9127:(e,t,i)=>{i.d(t,{f:()=>p});var r=i(66866),l=(i(17639),i(21564)),a=(i(73446),i(85569),i(39831),i(75094)),s=i(63863),n=i(65228),o=i(68820),h=i(35787),c=i(78983);const p=e=>{let t=class extends e{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}destroy(){this.tilemapCache?.destroy?.()}readMinScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}readMaxScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,t,i){const r=t.capabilities?.includes("Tilemap");let{minLOD:l,maxLOD:a,minScale:s,maxScale:c}=t;if(null==l&&null==a&&0!==s&&0!==c){const e=e=>Math.round(1e4*e)/1e4;s=e(s||t.tileInfo.lods[0].scale),c=e(c||t.tileInfo.lods[t.tileInfo.lods.length-1].scale);for(const i of t.tileInfo.lods){const t=e(i.scale);l=t>=s?i.level:l,a=t>=c?i.level:a}}if(r)return new h.d({layer:this,minLOD:l,maxLOD:a});if(t.tileInfo){const e=new n.A;return e.read(t.tileInfo,i),new o.A(e,l,a)}return null}};return(0,r._)([(0,l.MZ)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,r._)([(0,l.MZ)()],t.prototype,"minScale",void 0),(0,r._)([(0,a.w)("service","minScale")],t.prototype,"readMinScale",null),(0,r._)([(0,l.MZ)()],t.prototype,"maxScale",void 0),(0,r._)([(0,a.w)("service","maxScale")],t.prototype,"readMaxScale",null),(0,r._)([(0,l.MZ)({type:c.A})],t.prototype,"spatialReference",void 0),(0,r._)([(0,l.MZ)({readOnly:!0})],t.prototype,"supportsBlankTile",null),(0,r._)([(0,l.MZ)({type:n.A})],t.prototype,"tileInfo",void 0),(0,r._)([(0,l.MZ)()],t.prototype,"tilemapCache",void 0),(0,r._)([(0,a.w)("service","tilemapCache",["capabilities","tileInfo"])],t.prototype,"readTilemapCache",null),(0,r._)([(0,l.MZ)()],t.prototype,"version",void 0),t=(0,r._)([(0,s.$)("esri.layers.mixins.ArcGISCachedService")],t),t}},68820:(e,t,i)=>{i.d(t,{A:()=>a});var r=i(98849),l=i(40189);class a{constructor(e,t=0,i=e.lods[e.lods.length-1].level){this.tileInfo=e,this.minLOD=t,this.maxLOD=i,e.lodAt(t)||(this.minLOD=e.lods[0].level),e.lodAt(i)||(this.maxLOD=e.lods[e.lods.length-1].level)}get effectiveMinLOD(){return this.minLOD??this.tileInfo.lods[0].level}get effectiveMaxLOD(){return this.maxLOD??this.tileInfo.lods[this.tileInfo.lods.length-1].level}getAvailability(e,t,i){const r=this.tileInfo?.lodAt(e);return!r||e<this.minLOD||e>this.maxLOD?"unavailable":r.cols&&r.rows?i>=r.cols[0]&&i<=r.cols[1]&&t>=r.rows[0]&&t<=r.rows[1]?"unknown":"unavailable":"unknown"}async fetchAvailability(e,t,i,a){await(0,l.NO)(a);const s=this.getAvailability(e,t,i);if("unavailable"===s)throw new r.A("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i});return s}async fetchAvailabilityUpsample(e,t,i,r,a){await(0,l.NO)(a),r.level=e,r.row=t,r.col=i;const s=this.tileInfo;return s.updateTileInfo(r),this.fetchAvailability(e,t,i,a).catch((e=>{if((0,l.zf)(e))throw e;if(s.upsampleTile(r))return this.fetchAvailabilityUpsample(r.level,r.row,r.col,r,a);throw e}))}}},35787:(e,t,i)=>{i.d(t,{d:()=>T});var r,l=i(66866),a=i(86394),s=i(52495),n=i(84858),o=i(98849),h=i(20464),c=i(89926),p=i(63678),u=i(40189),d=i(85251),f=i(61449),v=i(20909),y=i(21564),m=(i(73446),i(85569)),_=(i(39831),i(63863)),g=i(88061),w=i(19251),b=i(86942);class A{constructor(e){this._validateJSON(e);const{location:t,data:i}=e;this.location=Object.freeze((0,w.o8)(t));const r=this.location.width,l=this.location.height;let a=!0,s=!0;const n=function(e,t=!1){return e<=b.y9?t?new Array(e).fill(0):new Array(e):new Uint32Array(e)}(Math.ceil(r*l/32));let o=0;for(let h=0;h<i.length;h++){const e=h%32;i[h]?(s=!1,n[o]|=1<<e):a=!1,31===e&&++o}s?(this._availability="unavailable",this.byteSize=40):a?(this._availability="available",this.byteSize=40):(this._availability=n,this.byteSize=40+(0,b.Ek)(n))}getAvailability(e,t){if("unavailable"===this._availability||"available"===this._availability)return this._availability;const i=(e-this.location.top)*this.location.width+(t-this.location.left),r=i%32,l=i>>5,a=this._availability;return l<0||l>a.length?"unknown":a[l]&1<<r?"available":"unavailable"}static fromDefinition(e,t){const i=e.service.request||a.A,{row:r,col:l,width:s,height:n}=e,h={query:{f:"json"}};return t=t?{...h,...t}:h,i(function(e){let t;if(e.service.tileServers?.length){const i=e.service.tileServers;t=`${i&&i.length?i[e.row%i.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}else t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;const i=e.service.query;return i&&(t=`${t}?${i}`),t}(e),t).then((e=>e.data)).catch((e=>{if(e&&e.details&&422===e.details.httpStatus)return{location:{top:r,left:l,width:s,height:n},valid:!0,data:(0,m.dY)(s*n,0)};throw e})).then((e=>{if(e.location&&(e.location.top!==r||e.location.left!==l||e.location.width!==s||e.location.height!==n))throw new o.A("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:r,left:l,width:s,height:n}});return A.fromJSON(e)}))}static fromJSON(e){return Object.freeze(new A(e))}_validateJSON(e){if(!e?.location)throw new o.A("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new o.A("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new o.A("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new o.A("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new o.A("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function S(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}let T=r=class extends s.A{constructor(e){super(e),this._pendingTilemapRequests={},this.request=a.A,this.size=32,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new c.q(2*n.u.MEGABYTES),this.addHandles([(0,d.wB)((()=>{const{layer:e}=this;return[e?.parsedUrl,e?.tileServers,e?.apiKey,e?.customParameters]}),(()=>this._initializeTilemapDefinition()),d.Vh)])}get effectiveMinLOD(){return this.minLOD??this.layer.tileInfo.lods[0].level}get effectiveMaxLOD(){return this.maxLOD??this.layer.tileInfo.lods[this.layer.tileInfo.lods.length-1].level}fetchTilemap(e,t,i,r){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return Promise.reject(new o.A("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const l=this._tmpTilemapDefinition,a=this._tilemapFromCache(e,t,i,l);if(a)return Promise.resolve(a);const s=r?.signal;return r={...r,signal:null},new Promise(((e,t)=>{(0,u.u7)(s,(()=>t((0,u.NK)())));const i=S(l);let a=this._pendingTilemapRequests[i];if(!a){a=A.fromDefinition(l,r).then((e=>(this._tilemapCache.put(i,e,e.byteSize),e)));const e=()=>{delete this._pendingTilemapRequests[i]};this._pendingTilemapRequests[i]=a,a.then(e,e)}a.then(e,t)}))}getAvailability(e,t,i){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return"unavailable";const r=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return r?r.getAvailability(t,i):"unknown"}fetchAvailability(e,t,i,r){return!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD?Promise.reject(new o.A("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):this.fetchTilemap(e,t,i,r).catch((e=>e)).then((r=>{if(r instanceof A){const l=r.getAvailability(t,i);if("unavailable"===l)throw new o.A("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i});return l}if((0,u.zf)(r))throw r;return"unknown"}))}fetchAvailabilityUpsample(e,t,i,r,l){r.level=e,r.row=t,r.col=i;const a=this.layer.tileInfo;a.updateTileInfo(r);const s=this.fetchAvailability(e,t,i,l).catch((e=>{if((0,u.zf)(e))throw e;if(a.upsampleTile(r))return this.fetchAvailabilityUpsample(r.level,r.row,r.col,r,l);throw e}));return this._fetchAvailabilityUpsamplePrefetch(r.id,e,t,i,l,s),s}async _fetchAvailabilityUpsamplePrefetch(e,t,i,l,a,s){if(!this._prefetchingEnabled||null==e)return;const n=`prefetch-${e}`;if(this.hasHandles(n))return;const o=new AbortController;s.then((()=>o.abort()),(()=>o.abort()));let c=!1;const p=(0,h.hA)((()=>{c||(c=!0,o.abort())}));if(this.addHandles(p,n),await(0,f.md)(10,o.signal).catch((()=>{})),c||(c=!0,this.removeHandles(n)),(0,u.G4)(o))return;const d=new g.U(e,t,i,l),v={...a,signal:o.signal},y=this.layer.tileInfo;for(let h=0;r._prefetches.length<r._maxPrefetch&&y.upsampleTile(d);++h){const e=this.fetchAvailability(d.level,d.row,d.col,v);r._prefetches.push(e);const t=()=>{r._prefetches.removeUnordered(e)};e.then(t,t)}}_initializeTilemapDefinition(){if(!this.layer.parsedUrl)return;const{parsedUrl:e,apiKey:t,customParameters:i}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:(0,v.x0)({...e.query,...i,token:t??e.query?.token}),tileServers:this.layer.tileServers,request:this.request},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,r){r.level=e,r.row=t-t%this.size,r.col=i-i%this.size;const l=S(r);return this._tilemapCache.get(l)}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,i,r)=>!!e._tilemapFromCache(t,i,r,e._tmpTilemapDefinition)}}};T._maxPrefetch=4,T._prefetches=new p.A({initialSize:r._maxPrefetch}),(0,l._)([(0,y.MZ)({constructOnly:!0})],T.prototype,"layer",void 0),(0,l._)([(0,y.MZ)({constructOnly:!0})],T.prototype,"minLOD",void 0),(0,l._)([(0,y.MZ)({constructOnly:!0})],T.prototype,"maxLOD",void 0),(0,l._)([(0,y.MZ)({constructOnly:!0})],T.prototype,"request",void 0),(0,l._)([(0,y.MZ)({constructOnly:!0})],T.prototype,"size",void 0),T=r=(0,l._)([(0,_.$)("esri.layers.support.TilemapCache")],T)}}]);