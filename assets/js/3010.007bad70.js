"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3010],{73010:(e,t,i)=>{i.r(t),i.d(t,{default:()=>I});var a=i(66866),l=i(86394),s=i(98849),r=i(6267),n=i(35775),o=i(40189),h=i(20909),c=i(21564),p=(i(73446),i(85569)),u=(i(39831),i(75094)),d=i(63863),m=i(34064),v=i(68833),f=i(9127),y=i(45681),_=i(41506),w=i(34722),g=i(84356);class b{constructor(e,t,i,a){this._hasNoDataValues=null,this._minValue=null,this._maxValue=null,"pixelData"in e?(this.values=e.pixelData,this.width=e.width,this.height=e.height,this.noDataValue=e.noDataValue):(this.values=e,this.width=t,this.height=i,this.noDataValue=a)}get hasNoDataValues(){if(null==this._hasNoDataValues){const e=this.noDataValue;this._hasNoDataValues=this.values.includes(e)}return this._hasNoDataValues}get minValue(){return this._ensureBounds(),this._minValue}get maxValue(){return this._ensureBounds(),this._maxValue}_ensureBounds(){if(null!=this._minValue)return;const{noDataValue:e,values:t}=this;let i=1/0,a=-1/0,l=!0;for(const s of t)s===e?this._hasNoDataValues=!0:(i=s<i?s:i,a=s>a?s:a,l=!1);l?(this._minValue=0,this._maxValue=0):(this._minValue=i,this._maxValue=a>-3e38?a:0)}}var A=i(20464),D=i(539),T=i(90752);class M{constructor(e,t,i,a,l={}){this._mainMethod=t,this._transferLists=i,this._listeners=[],this._promise=(0,T.ho)(e,{...l,schedule:a}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,l.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((t=>D.A.getLogger("esri.core.workers.WorkerHandle").error(`Failed to initialize ${e} worker: ${t}`)))}on(e,t){const i={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(i),this._connectListener(i),(0,A.hA)((()=>{i.removed=!0,(0,p.TF)(this._listeners,i),this._thread&&null!=i.threadHandle&&i.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null,this._listeners.length=0,this._transferLists={}}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,i){if(this._thread){const a=this._transferLists[e],l=a?a(t):[];return this._thread.invoke(e,t,{transferList:l,signal:i})}return this._promise?this._promise.then((()=>((0,o.Te)(i),this.invokeMethod(e,t,i)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}class O extends M{constructor(e=null){super("LercWorker","_decode",{_decode:e=>[e.buffer]},e,{strategy:"dedicated"}),this.schedule=e,this.ref=0}decode(e,t,i){return e&&0!==e.byteLength?this.invoke({buffer:e,options:t},i):Promise.resolve(null)}release(){--this.ref<=0&&(S.forEach(((e,t)=>{e===this&&S.delete(t)})),this.destroy())}}const S=new Map;let L=class extends((0,f.f)((0,y.b)((0,_.q)((0,w.A)((0,n.P)(v.A)))))){constructor(...e){super(...e),this.capabilities={operations:{supportsTileMap:!1}},this.copyright=null,this.heightModelInfo=null,this.path=null,this.minScale=void 0,this.maxScale=void 0,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=function(e=null){let t=S.get(e);return t||(null!=e?(t=new O((t=>e.immediate.schedule(t))),S.set(e,t)):(t=new O,S.set(null,t))),++t.ref,t}()}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this._lercDecoder=(0,r.Gz)(this._lercDecoder)}readCapabilities(e,t){const i=t.capabilities&&t.capabilities.split(",").map((e=>e.toLowerCase().trim()));return i?{operations:{supportsTileMap:i.includes("tilemap")}}:{operations:{supportsTileMap:!1}}}readVersion(e,t){let i=t.currentVersion;return i||(i=9.3),i}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:e=>{for(let t=0;t<e.typeKeywords.length;t++)if("elevation 3d layer"===e.typeKeywords[t].toLowerCase())return!0;throw new s.A("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(o.QP).then((()=>this._fetchImageService(t)))),Promise.resolve(this)}fetchTile(e,t,i,a){const s=null!=(a=a||{signal:null}).signal?a.signal:a.signal=(new AbortController).signal,r={responseType:"array-buffer",signal:s},n={noDataValue:a.noDataValue,returnFileInfo:!0};return this.load().then((()=>this._fetchTileAvailability(e,t,i,a))).then((()=>(0,l.A)(this.getTileUrl(e,t,i),r))).then((e=>this._lercDecoder.decode(e.data,n,s))).then((e=>new b(e)))}getTileUrl(e,t,i){const a=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,l=(0,h.x0)({...this.parsedUrl.query,blankTile:!a&&null});return`${this.parsedUrl.path}/tile/${e}/${t}/${i}${l?"?"+l:""}`}async queryElevation(e,t){const{ElevationQuery:a}=await i.e(5323).then(i.bind(i,75323));return(0,o.Te)(t),(new a).query(this,e,t)}async createElevationSampler(e,t){const{ElevationQuery:a}=await i.e(5323).then(i.bind(i,75323));return(0,o.Te)(t),(new a).createSampler(this,e,t)}_fetchTileAvailability(e,t,i,a){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,t,i,a):Promise.resolve("unknown")}async _fetchImageService(e){if(this.sourceJSON)return this.sourceJSON;const t={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},i=await(0,l.A)(this.parsedUrl.path,t);i.ssl&&(this.url=this.url?.replace(/^http:/i,"https:")),this.sourceJSON=i.data,this.read(i.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile[x]}};(0,a._)([(0,c.MZ)({readOnly:!0})],L.prototype,"capabilities",void 0),(0,a._)([(0,u.w)("service","capabilities",["capabilities"])],L.prototype,"readCapabilities",null),(0,a._)([(0,c.MZ)({json:{read:{source:"copyrightText"}}})],L.prototype,"copyright",void 0),(0,a._)([(0,c.MZ)({readOnly:!0,type:m.A})],L.prototype,"heightModelInfo",void 0),(0,a._)([(0,c.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],L.prototype,"path",void 0),(0,a._)([(0,c.MZ)({type:["show","hide"]})],L.prototype,"listMode",void 0),(0,a._)([(0,c.MZ)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],L.prototype,"minScale",void 0),(0,a._)([(0,c.MZ)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],L.prototype,"maxScale",void 0),(0,a._)([(0,c.MZ)({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],L.prototype,"opacity",void 0),(0,a._)([(0,c.MZ)({type:["ArcGISTiledElevationServiceLayer"]})],L.prototype,"operationalLayerType",void 0),(0,a._)([(0,c.MZ)()],L.prototype,"sourceJSON",void 0),(0,a._)([(0,c.MZ)({json:{read:!1},value:"elevation",readOnly:!0})],L.prototype,"type",void 0),(0,a._)([(0,c.MZ)(g.OZ)],L.prototype,"url",void 0),(0,a._)([(0,c.MZ)()],L.prototype,"version",void 0),(0,a._)([(0,u.w)("version",["currentVersion"])],L.prototype,"readVersion",null),L=(0,a._)([(0,d.$)("esri.layers.ElevationLayer")],L);const x=Symbol("default-fetch-tile");L.prototype.fetchTile[x]=!0;const I=L},9127:(e,t,i)=>{i.d(t,{f:()=>p});var a=i(66866),l=(i(17639),i(21564)),s=(i(73446),i(85569),i(39831),i(75094)),r=i(63863),n=i(65228),o=i(68820),h=i(35787),c=i(78983);const p=e=>{let t=class extends e{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}destroy(){this.tilemapCache?.destroy?.()}readMinScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}readMaxScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,t,i){const a=t.capabilities?.includes("Tilemap");let{minLOD:l,maxLOD:s,minScale:r,maxScale:c}=t;if(null==l&&null==s&&0!==r&&0!==c){const e=e=>Math.round(1e4*e)/1e4;r=e(r||t.tileInfo.lods[0].scale),c=e(c||t.tileInfo.lods[t.tileInfo.lods.length-1].scale);for(const i of t.tileInfo.lods){const t=e(i.scale);l=t>=r?i.level:l,s=t>=c?i.level:s}}if(a)return new h.d({layer:this,minLOD:l,maxLOD:s});if(t.tileInfo){const e=new n.A;return e.read(t.tileInfo,i),new o.A(e,l,s)}return null}};return(0,a._)([(0,l.MZ)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,a._)([(0,l.MZ)()],t.prototype,"minScale",void 0),(0,a._)([(0,s.w)("service","minScale")],t.prototype,"readMinScale",null),(0,a._)([(0,l.MZ)()],t.prototype,"maxScale",void 0),(0,a._)([(0,s.w)("service","maxScale")],t.prototype,"readMaxScale",null),(0,a._)([(0,l.MZ)({type:c.A})],t.prototype,"spatialReference",void 0),(0,a._)([(0,l.MZ)({readOnly:!0})],t.prototype,"supportsBlankTile",null),(0,a._)([(0,l.MZ)({type:n.A})],t.prototype,"tileInfo",void 0),(0,a._)([(0,l.MZ)()],t.prototype,"tilemapCache",void 0),(0,a._)([(0,s.w)("service","tilemapCache",["capabilities","tileInfo"])],t.prototype,"readTilemapCache",null),(0,a._)([(0,l.MZ)()],t.prototype,"version",void 0),t=(0,a._)([(0,r.$)("esri.layers.mixins.ArcGISCachedService")],t),t}},68820:(e,t,i)=>{i.d(t,{A:()=>s});var a=i(98849),l=i(40189);class s{constructor(e,t=0,i=e.lods[e.lods.length-1].level){this.tileInfo=e,this.minLOD=t,this.maxLOD=i,e.lodAt(t)||(this.minLOD=e.lods[0].level),e.lodAt(i)||(this.maxLOD=e.lods[e.lods.length-1].level)}get effectiveMinLOD(){return this.minLOD??this.tileInfo.lods[0].level}get effectiveMaxLOD(){return this.maxLOD??this.tileInfo.lods[this.tileInfo.lods.length-1].level}getAvailability(e,t,i){const a=this.tileInfo?.lodAt(e);return!a||e<this.minLOD||e>this.maxLOD?"unavailable":a.cols&&a.rows?i>=a.cols[0]&&i<=a.cols[1]&&t>=a.rows[0]&&t<=a.rows[1]?"unknown":"unavailable":"unknown"}async fetchAvailability(e,t,i,s){await(0,l.NO)(s);const r=this.getAvailability(e,t,i);if("unavailable"===r)throw new a.A("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i});return r}async fetchAvailabilityUpsample(e,t,i,a,s){await(0,l.NO)(s),a.level=e,a.row=t,a.col=i;const r=this.tileInfo;return r.updateTileInfo(a),this.fetchAvailability(e,t,i,s).catch((e=>{if((0,l.zf)(e))throw e;if(r.upsampleTile(a))return this.fetchAvailabilityUpsample(a.level,a.row,a.col,a,s);throw e}))}}},35787:(e,t,i)=>{i.d(t,{d:()=>T});var a,l=i(66866),s=i(86394),r=i(52495),n=i(84858),o=i(98849),h=i(20464),c=i(89926),p=i(63678),u=i(40189),d=i(85251),m=i(61449),v=i(20909),f=i(21564),y=(i(73446),i(85569)),_=(i(39831),i(63863)),w=i(88061),g=i(19251),b=i(86942);class A{constructor(e){this._validateJSON(e);const{location:t,data:i}=e;this.location=Object.freeze((0,g.o8)(t));const a=this.location.width,l=this.location.height;let s=!0,r=!0;const n=function(e,t=!1){return e<=b.y9?t?new Array(e).fill(0):new Array(e):new Uint32Array(e)}(Math.ceil(a*l/32));let o=0;for(let h=0;h<i.length;h++){const e=h%32;i[h]?(r=!1,n[o]|=1<<e):s=!1,31===e&&++o}r?(this._availability="unavailable",this.byteSize=40):s?(this._availability="available",this.byteSize=40):(this._availability=n,this.byteSize=40+(0,b.Ek)(n))}getAvailability(e,t){if("unavailable"===this._availability||"available"===this._availability)return this._availability;const i=(e-this.location.top)*this.location.width+(t-this.location.left),a=i%32,l=i>>5,s=this._availability;return l<0||l>s.length?"unknown":s[l]&1<<a?"available":"unavailable"}static fromDefinition(e,t){const i=e.service.request||s.A,{row:a,col:l,width:r,height:n}=e,h={query:{f:"json"}};return t=t?{...h,...t}:h,i(function(e){let t;if(e.service.tileServers?.length){const i=e.service.tileServers;t=`${i&&i.length?i[e.row%i.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}else t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;const i=e.service.query;return i&&(t=`${t}?${i}`),t}(e),t).then((e=>e.data)).catch((e=>{if(e&&e.details&&422===e.details.httpStatus)return{location:{top:a,left:l,width:r,height:n},valid:!0,data:(0,y.dY)(r*n,0)};throw e})).then((e=>{if(e.location&&(e.location.top!==a||e.location.left!==l||e.location.width!==r||e.location.height!==n))throw new o.A("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:a,left:l,width:r,height:n}});return A.fromJSON(e)}))}static fromJSON(e){return Object.freeze(new A(e))}_validateJSON(e){if(!e?.location)throw new o.A("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new o.A("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new o.A("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new o.A("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new o.A("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function D(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}let T=a=class extends r.A{constructor(e){super(e),this._pendingTilemapRequests={},this.request=s.A,this.size=32,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new c.q(2*n.u.MEGABYTES),this.addHandles([(0,d.wB)((()=>{const{layer:e}=this;return[e?.parsedUrl,e?.tileServers,e?.apiKey,e?.customParameters]}),(()=>this._initializeTilemapDefinition()),d.Vh)])}get effectiveMinLOD(){return this.minLOD??this.layer.tileInfo.lods[0].level}get effectiveMaxLOD(){return this.maxLOD??this.layer.tileInfo.lods[this.layer.tileInfo.lods.length-1].level}fetchTilemap(e,t,i,a){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return Promise.reject(new o.A("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const l=this._tmpTilemapDefinition,s=this._tilemapFromCache(e,t,i,l);if(s)return Promise.resolve(s);const r=a?.signal;return a={...a,signal:null},new Promise(((e,t)=>{(0,u.u7)(r,(()=>t((0,u.NK)())));const i=D(l);let s=this._pendingTilemapRequests[i];if(!s){s=A.fromDefinition(l,a).then((e=>(this._tilemapCache.put(i,e,e.byteSize),e)));const e=()=>{delete this._pendingTilemapRequests[i]};this._pendingTilemapRequests[i]=s,s.then(e,e)}s.then(e,t)}))}getAvailability(e,t,i){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return"unavailable";const a=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return a?a.getAvailability(t,i):"unknown"}fetchAvailability(e,t,i,a){return!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD?Promise.reject(new o.A("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):this.fetchTilemap(e,t,i,a).catch((e=>e)).then((a=>{if(a instanceof A){const l=a.getAvailability(t,i);if("unavailable"===l)throw new o.A("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i});return l}if((0,u.zf)(a))throw a;return"unknown"}))}fetchAvailabilityUpsample(e,t,i,a,l){a.level=e,a.row=t,a.col=i;const s=this.layer.tileInfo;s.updateTileInfo(a);const r=this.fetchAvailability(e,t,i,l).catch((e=>{if((0,u.zf)(e))throw e;if(s.upsampleTile(a))return this.fetchAvailabilityUpsample(a.level,a.row,a.col,a,l);throw e}));return this._fetchAvailabilityUpsamplePrefetch(a.id,e,t,i,l,r),r}async _fetchAvailabilityUpsamplePrefetch(e,t,i,l,s,r){if(!this._prefetchingEnabled||null==e)return;const n=`prefetch-${e}`;if(this.hasHandles(n))return;const o=new AbortController;r.then((()=>o.abort()),(()=>o.abort()));let c=!1;const p=(0,h.hA)((()=>{c||(c=!0,o.abort())}));if(this.addHandles(p,n),await(0,m.md)(10,o.signal).catch((()=>{})),c||(c=!0,this.removeHandles(n)),(0,u.G4)(o))return;const d=new w.U(e,t,i,l),v={...s,signal:o.signal},f=this.layer.tileInfo;for(let h=0;a._prefetches.length<a._maxPrefetch&&f.upsampleTile(d);++h){const e=this.fetchAvailability(d.level,d.row,d.col,v);a._prefetches.push(e);const t=()=>{a._prefetches.removeUnordered(e)};e.then(t,t)}}_initializeTilemapDefinition(){if(!this.layer.parsedUrl)return;const{parsedUrl:e,apiKey:t,customParameters:i}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:(0,v.x0)({...e.query,...i,token:t??e.query?.token}),tileServers:this.layer.tileServers,request:this.request},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,a){a.level=e,a.row=t-t%this.size,a.col=i-i%this.size;const l=D(a);return this._tilemapCache.get(l)}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,i,a)=>!!e._tilemapFromCache(t,i,a,e._tmpTilemapDefinition)}}};T._maxPrefetch=4,T._prefetches=new p.A({initialSize:a._maxPrefetch}),(0,l._)([(0,f.MZ)({constructOnly:!0})],T.prototype,"layer",void 0),(0,l._)([(0,f.MZ)({constructOnly:!0})],T.prototype,"minLOD",void 0),(0,l._)([(0,f.MZ)({constructOnly:!0})],T.prototype,"maxLOD",void 0),(0,l._)([(0,f.MZ)({constructOnly:!0})],T.prototype,"request",void 0),(0,l._)([(0,f.MZ)({constructOnly:!0})],T.prototype,"size",void 0),T=a=(0,l._)([(0,_.$)("esri.layers.support.TilemapCache")],T)}}]);