"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9625],{54421:(e,t,s)=>{s.d(t,{A:()=>o});var r=s(66866),a=s(52495),i=s(21564),n=(s(73446),s(85569),s(39831),s(63863));let l=class extends a.A{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const e=this.tileStore.tileScheme.spatialReference;return e&&e.toJSON()||null}};(0,r._)([(0,i.MZ)({readOnly:!0})],l.prototype,"supportsTileUpdates",null),(0,r._)([(0,i.MZ)({constructOnly:!0})],l.prototype,"remoteClient",void 0),(0,r._)([(0,i.MZ)({constructOnly:!0})],l.prototype,"service",void 0),(0,r._)([(0,i.MZ)()],l.prototype,"spatialReference",null),(0,r._)([(0,i.MZ)({constructOnly:!0})],l.prototype,"tileInfo",void 0),(0,r._)([(0,i.MZ)({constructOnly:!0})],l.prototype,"tileStore",void 0),l=(0,r._)([(0,n.$)("esri.views.2d.layers.features.processors.BaseProcessor")],l);const o=l},32437:(e,t,s)=>{s.r(t),s.d(t,{default:()=>M});var r=s(66866),a=s(21870),i=(s(98849),s(39831),s(539),s(6267)),n=s(40189),l=(s(73446),s(85569),s(63863)),o=s(64442),c=s(78983),u=s(65065),h=s(79432),d=s(82547),f=s(23951),m=s(32964),y=s(9725),p=s(65126),g=s(54421);class _{constructor(e){this._remoteClient=e,this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}destroy(){}async fetchResource(e,t){const s=this._resourceMap,r=s.get(e);if(r)return r;let a=this._inFlightResourceMap.get(e);if(a)return a;try{a=this._remoteClient.invoke("tileRenderer.fetchResource",{url:e},{...t}),this._inFlightResourceMap.set(e,a),a.then((t=>(this._inFlightResourceMap.delete(e),s.set(e,t),t)))}catch(i){return(0,n.zf)(i)?null:{width:0,height:0}}return a}getResource(e){return this._resourceMap.get(e)??null}loadFont(e){return Promise.resolve(null)}}function b(e,t){const s=t-t/4,r=t+t/2;return(!e.minScale||e.minScale>=s)&&(!e.maxScale||e.maxScale<=r)}function S(e){const t=e.message,s={message:{data:{},tileKey:t.tileKey,tileKeyOrigin:t.tileKeyOrigin,version:t.version},transferList:new Array};for(const r in t.data){const e=r,a=t.data[e];if(s.message.data[e]=null,null!=a){const t=a.stride,r=a.indices.slice(0),i=a.vertices.slice(0),n=a.records.slice(0),l=a.metrics?.slice(0),o={stride:t,indices:r,vertices:i,records:n,metrics:l};s.transferList.push(r,i,n),s.message.data[e]=o}}return s}let v=class extends g.A{constructor(){super(...arguments),this.type="symbol",this._matchers={feature:null,aggregate:null},this._bufferData=new Map,this._bufferIds=new Map}initialize(){this.addHandles([this.tileStore.on("update",this.onTileUpdate.bind(this))]),this._resourceManagerProxy=new _(this.remoteClient)}destroy(){this._resourceManagerProxy.destroy()}get supportsTileUpdates(){return!0}forEachBufferId(e){this._bufferIds.forEach((t=>{t.forEach(e)}))}async update(e,t){const s=t.schema.processors[0];if("symbol"!==s.type)return;const r=(0,o.Ui)(this._schema,s);((0,o.EB)(r,"mesh")||(0,o.EB)(r,"target"))&&(e.mesh=!0,e.why?.mesh.push("Symbology changed"),this._schema=s,this._factory=this._createFactory(s),this._factory.update(s,this.tileStore.tileScheme.tileInfo))}onTileMessage(e,t,s,r){return(0,n.Te)(r),this._onTileData(e,t,s,r)}onTileClear(e,t){const s={clear:!0,end:t};return this._bufferData.delete(e.key.id),this._bufferIds.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:s})}onTileError(e,t,s){const r=s.signal,a={tileKey:e.id,error:t};return this.remoteClient.invoke("tileRenderer.onTileError",a,{signal:r})}onTileUpdate(e){for(const t of e.removed)this._bufferData.has(t.key.id)&&this._bufferData.delete(t.key.id),this._bufferIds.has(t.key.id)&&this._bufferIds.delete(t.key.id);for(const t of e.added)this._bufferData.forEach((e=>{for(const s of e)s.message.tileKey===t.id&&this._updateTileMesh("append",t,S(s),[],!1,!1,null)}))}_addBufferData(e,t){this._bufferData.has(e)||this._bufferData.set(e,[]),this._bufferData.get(e)?.push(S(t))}_createFactory(e){const{geometryType:t,objectIdField:s,fields:r}=this.service,a={geometryType:t,fields:r,spatialReference:c.A.fromJSON(this.spatialReference)},i=new m._y(((e,t)=>this.remoteClient.invoke("tileRenderer.getMaterialItems",e,t)),this.tileStore.tileScheme.tileInfo),{matcher:n,aggregateMatcher:l}=e.mesh;return this._store=i,this._matchers.feature=(0,y.P7)(n,i,a,this._resourceManagerProxy),this._matchers.aggregate=l?(0,y.P7)(l,i,a,this._resourceManagerProxy):null,new f.K(t,s,i)}async _onTileData(e,t,s,r){(0,n.Te)(r);const{type:a,addOrUpdate:i,remove:l,clear:o,end:c}=t,u=!!this._schema.mesh.sortKey;if(!i){const t={type:a,addOrUpdate:null,remove:l,clear:o,end:c,sort:u};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},r)}const h=this._processFeatures(e,i,s,r,t.status?.version);try{const s=await h;if(null==s){const t={type:a,addOrUpdate:null,remove:l,clear:o,end:c,sort:u};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},r)}const i=[];for(const t of s){let s=!1;const r=t.message.bufferIds,a=e.key.id,n=t.message.tileKey;if(a!==n&&null!=r){if(!this.tileStore.get(n)){this._addBufferData(a,t),i.push(t);continue}let e=this._bufferIds.get(n);e||(e=new Set,this._bufferIds.set(n,e));const l=Array.from(r);for(const t of l){if(e.has(t)){s=!0;break}e.add(t)}}s||(this._addBufferData(a,t),i.push(t))}await Promise.all(i.map((s=>{const i=e.key.id===s.message.tileKey,n=i?t.remove:[],l=i&&t.end;return this._updateTileMesh(a,e,s,n,l,!!t.clear,r.signal)})))}catch(d){this._handleError(e,d,r)}}async _updateTileMesh(e,t,s,r,a,i,l){const o=e,c=s.message.tileKey,u=!!this._schema.mesh.sortKey;c!==t.key.id&&(a=!1);const h=s?.message,d={type:o,addOrUpdate:h,remove:r,clear:i,end:a,sort:u},f={transferList:s?.transferList??[],signal:l};return(0,n.Te)(f),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:c,data:d},f)}async _processFeatures(e,t,s,r,a){if(null==t||!t.hasFeatures)return null;const i={transform:e.transform,hasZ:!1,hasM:!1},l=this._factory,o={viewingMode:"",scale:e.scale},c=await this._matchers.feature,u=await this._matchers.aggregate;(0,n.Te)(r);const h=this._getLabelInfos(e,t);return await l.analyze(t.getCursor(),this._resourceManagerProxy,c,u,i,o),(0,n.Te)(r),this._writeFeatureSet(e,t,i,h,l,s,a)}_writeFeatureSet(e,t,s,r,a,i,n){const l=t.getSize(),o=this._schema.mesh.matcher.symbologyType,c=new d.U(e.key.id,{features:l,records:l,metrics:0},o,i,o!==h.w4.HEATMAP,n),u={viewingMode:"",scale:e.scale},f=t.getCursor();for(;f.next();)try{const t=f.getDisplayId(),i=null!=r?r.get(t):null;a.writeCursor(c,f,s,u,e.level,i,this._resourceManagerProxy)}catch(y){}const m=e.tileInfoView.tileInfo.isWrappable;return c.serialize(m)}_handleError(e,t,s){if(!(0,n.zf)(t)){const r={tileKey:e.id,error:t.message};return this.remoteClient.invoke("tileRenderer.onTileError",r,{signal:s.signal})}return Promise.resolve()}_getLabelingSchemaForScale(e){const t=this._schema.mesh.labels;if(null==t)return null;if("subtype"===t.type){const s={type:"subtype",classes:{}};let r=!1;for(const a in t.classes){const i=t.classes[a].filter((t=>b(t,e.scale)));r=r||!!i.length,s.classes[a]=i}return r?s:null}const s=t.classes.filter((t=>b(t,e.scale)));return s.length?{type:"simple",classes:s}:null}_getLabels(e,t){if("subtype"===t.type){const s=this.service.subtypeField;(0,i.Lw)(s,"Expected to find subtype Field");const r=e.readAttribute(s);return null==r?[]:t.classes[r]??[]}return t.classes}_getLabelInfos(e,t){const s=this._getLabelingSchemaForScale(e);if(null==s)return null;const r=new Map,i=t.getCursor();for(;i.next();){const e=i.getDisplayId(),t=[],n=(0,u.h8)(e),l=n&&1!==i.readAttribute("cluster_count")?"aggregate":"feature",o=this._getLabels(i,s);for(const s of o){if(s.target!==l)continue;const r=i.getStorage(),o=n&&"feature"===l?r.getComputedStringAtIndex(i.readAttribute("referenceId"),s.fieldIndex):r.getComputedStringAtIndex(e,s.fieldIndex);if(!o)continue;const c=(0,a.y)(o.toString()),u=c[0],h=c[1];this._store.getMosaicItem(s.symbol,(0,p.N)(u)).then((e=>{t[s.index]={glyphs:e.glyphMosaicItems??[],rtl:h,index:s.index}}))}r.set(e,t)}return r}};v=(0,r._)([(0,l.$)("esri.views.2d.layers.features.processors.SymbolProcessor")],v);const M=v},7965:(e,t,s)=>{s.d(t,{L:()=>u,Z:()=>c});var r=s(80047),a=s(79432),i=s(59601);const n={marker:a.ZG.MARKER,fill:a.ZG.FILL,line:a.ZG.LINE,text:a.ZG.TEXT};class l{constructor(e,t,s,r){const l={minScale:t?.minScale,maxScale:t?.maxScale},o=function(e){return e.minScale||e.maxScale?e.minScale+"-"+e.maxScale:""}(l);this.layers=e,this.data=t,this.hash=this._createHash()+o,this.rendererKey=s;const c={isOutline:!1,placement:null,symbologyType:a.w4.DEFAULT,vvFlags:s};for(const a of e){const e=n[a.type];c.isOutline="line"===a.type&&a.isOutline,a.materialKey=(0,i.Zl)(e,c),a.maxVVSize=r,a.scaleInfo=l,a.templateHash+=o}}get type(){return"expanded-cim"}_createHash(){let e="";for(const t of this.layers)e+=t.templateHash;return e}}const o=async(e,t,s)=>{const a=new r.U(s,t);return new l(await a.analyzeSymbolReference(e.data,!1),e.data,e.rendererKey,e.maxVVSize)};async function c(e,t,r,a){if(!e)return null;if("cim"===e.type)return o(e,t,r);if("web-style"===e.type){const{fetchCIMSymbolReference:i}=await Promise.all([s.e(2076),s.e(5204)]).then(s.bind(s,15204)),n={type:"cim",data:await i(e,null,a)??void 0,rendererKey:e.rendererKey,maxVVSize:e.maxVVSize};return o(n,t,r)}return e}function u(e){if(!e)return null;const{avoidSDFRasterization:t,type:s,cim:r,url:a,materialHash:i,maxVVSize:n}=e,l={cim:r,type:s,mosaicHash:i,url:a,size:null,dashTemplate:null,path:null,text:null,fontName:null,animatedSymbolProperties:null,avoidSDFRasterization:t};switch(s){case"marker":n&&"size"in r&&(r.size=Math.max(n,r.size)),l.size=e.size,l.path=e.path,l.animatedSymbolProperties=e.animatedSymbolProperties;break;case"line":l.dashTemplate=e.dashTemplate;break;case"text":l.text=e.text,l.fontName=e.fontName}return l}}}]);