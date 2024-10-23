"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9062],{19062:(e,t,r)=>{r.r(t),r.d(t,{default:()=>G});var s,o=r(66866),i=(r(17639),r(48982)),l=r(14798),n=r(35775),a=r(40189),u=r(85251),y=r(20909),p=r(21564),f=r(73446),h=(r(85569),r(39831),r(75094)),d=r(63863),c=r(77542),b=r(78983),v=r(68833),m=r(15305),g=r(41506),_=r(34722),S=r(50508),w=r(25389),M=r(84356),k=r(17306),x=r(21877),O=r(45307),E=r(96274),Z=r(78521),L=r(84698);let P=s=class extends(k.A.EventedMixin((0,x.Te)(O.A))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.id=null,this.networkLink=null,this.parent=null,this.sublayers=null,this.title=null,this.sourceJSON=null,this.layer=null,this.addHandles([(0,u.on)((()=>this.sublayers),"after-add",(({item:e})=>{e.parent=this,e.layer=this.layer}),u.OH),(0,u.on)((()=>this.sublayers),"after-remove",(({item:e})=>{e.layer=e.parent=null}),u.OH),(0,u.wB)((()=>this.sublayers),((e,t)=>{if(t)for(const r of t)r.layer=r.parent=null;if(e)for(const r of e)r.parent=this,r.layer=this.layer}),u.OH),(0,u.wB)((()=>this.layer),(e=>{if(this.sublayers)for(const t of this.sublayers)t.layer=e}),u.OH)])}initialize(){(0,u.C_)((()=>this.networkLink)).then((()=>(0,u.C_)((()=>!0===this.visible)))).then((()=>this.load()))}load(e){if(!this.networkLink)return;if(this.networkLink.viewFormat)return;const t=null!=e?e.signal:null,r=this._fetchService(this._get("networkLink")?.href??"",t).then((e=>{const t=(0,Z.Qm)(e.sublayers);this.fullExtent=L.A.fromJSON(t),this.sourceJSON=e;const r=(0,f.dp)(i.A.ofType(s),(0,Z.Jy)(s,e));this.sublayers?this.sublayers.addMany(r):this.sublayers=r,this.layer?.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")}));return this.addResolvingPromise(r),Promise.resolve(this)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}_fetchService(e,t){return(0,Z.Ox)(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then((e=>(0,Z._4)(e.data)))}};(0,o._)([(0,p.MZ)()],P.prototype,"description",void 0),(0,o._)([(0,p.MZ)({type:L.A})],P.prototype,"fullExtent",void 0),(0,o._)([(0,p.MZ)()],P.prototype,"id",void 0),(0,o._)([(0,p.MZ)({readOnly:!0,value:null})],P.prototype,"networkLink",void 0),(0,o._)([(0,p.MZ)({json:{write:{allowNull:!0}}})],P.prototype,"parent",void 0),(0,o._)([(0,p.MZ)({type:i.A.ofType(P),json:{write:{allowNull:!0}}})],P.prototype,"sublayers",void 0),(0,o._)([(0,p.MZ)({value:null,json:{read:{source:"name",reader:e=>(0,E._e)(e)}}})],P.prototype,"title",void 0),(0,o._)([(0,p.MZ)({value:!0})],P.prototype,"visible",null),(0,o._)([(0,h.w)("visible",["visibility"])],P.prototype,"readVisible",null),(0,o._)([(0,p.MZ)()],P.prototype,"sourceJSON",void 0),(0,o._)([(0,p.MZ)()],P.prototype,"layer",void 0),P=s=(0,o._)([(0,d.$)("esri.layers.support.KMLSublayer")],P);const A=P,F=["kml","xml"];let I=class extends((0,m.d)((0,S.J)((0,w.j)((0,g.q)((0,_.A)((0,n.P)(v.A))))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new l.A({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=b.A.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.addHandles([(0,u.wB)((()=>this.sublayers),((e,t)=>{t&&t.forEach((e=>{e.parent=null,e.layer=null})),e&&e.forEach((e=>{e.parent=this,e.layer=this}))}),u.OH),this.on("sublayer-update",(()=>this.notifyChange("fullExtent")))])}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readSublayersFromItemOrWebMap(e,t){this._visibleFolders=t.visibleFolders}readSublayers(e,t,r){return(0,Z.Jy)(A,t,r,this._visibleFolders)}writeSublayers(e,t){const r=[],s=e.toArray();for(;s.length;){const e=s[0];e.networkLink||(e.visible&&r.push(e.id),e.sublayers&&s.push(...e.sublayers.toArray())),s.shift()}t.visibleFolders=r}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?(0,y.e7)(this.url,F)||"KML":e||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,t=[],r=e=>{e.visible&&(t.push(e),e.sublayers&&e.sublayers.forEach(r))};return e&&e.forEach(r),t}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},e).catch(a.QP).then((()=>this._fetchService(t)))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const t=await Promise.resolve().then((()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:(0,Z.Ox)(this.url??"",this.outSpatialReference,this.refreshInterval,e))),r=(0,Z._4)(t.data);r&&this.read(r,{origin:"service"})}_recomputeFullExtent(){let e=null;null!=this.extent&&(e=this.extent.clone());const t=r=>{if(r.sublayers)for(const s of r.sublayers.items)t(s),s.visible&&s.fullExtent&&(null!=e?e.union(s.fullExtent):e=s.fullExtent.clone())};return t(this),e}};(0,o._)([(0,p.MZ)({readOnly:!0})],I.prototype,"allSublayers",void 0),(0,o._)([(0,p.MZ)({type:b.A})],I.prototype,"outSpatialReference",void 0),(0,o._)([(0,p.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],I.prototype,"path",void 0),(0,o._)([(0,p.MZ)({readOnly:!0,json:{read:!1,write:!1}})],I.prototype,"legendEnabled",void 0),(0,o._)([(0,p.MZ)({type:["show","hide","hide-children"]})],I.prototype,"listMode",void 0),(0,o._)([(0,p.MZ)({type:["KML"]})],I.prototype,"operationalLayerType",void 0),(0,o._)([(0,p.MZ)({})],I.prototype,"resourceInfo",void 0),(0,o._)([(0,p.MZ)({type:i.A.ofType(A),json:{write:{ignoreOrigin:!0}}})],I.prototype,"sublayers",void 0),(0,o._)([(0,h.w)(["web-map","portal-item"],"sublayers",["visibleFolders"])],I.prototype,"readSublayersFromItemOrWebMap",null),(0,o._)([(0,h.w)("service","sublayers",["sublayers"])],I.prototype,"readSublayers",null),(0,o._)([(0,c.K)("sublayers")],I.prototype,"writeSublayers",null),(0,o._)([(0,p.MZ)({readOnly:!0,json:{read:!1}})],I.prototype,"type",void 0),(0,o._)([(0,p.MZ)({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],I.prototype,"title",null),(0,o._)([(0,p.MZ)(M.OZ)],I.prototype,"url",void 0),(0,o._)([(0,p.MZ)({readOnly:!0})],I.prototype,"visibleSublayers",null),(0,o._)([(0,p.MZ)({type:L.A})],I.prototype,"extent",void 0),(0,o._)([(0,p.MZ)()],I.prototype,"fullExtent",null),I=(0,o._)([(0,d.$)("esri.layers.KMLLayer")],I);const G=I},78521:(e,t,r)=>{r.d(t,{Jy:()=>v,Ox:()=>b,Qm:()=>_,Sp:()=>g,_4:()=>c});var s=r(21121),o=r(28830),i=r(56542),l=r(86394),n=r(19251),a=r(20909),u=r(78983),y=r(4675),p=r(36358),f=r(48887),h=r(57822);const d={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function c(e){const t=e.folders||[],r=t.slice(),s=new Map,o=new Map,i=new Map,l=new Map,a=new Map,u={esriGeometryPoint:o,esriGeometryPolyline:i,esriGeometryPolygon:l};(e.featureCollection?.layers||[]).forEach((e=>{const t=(0,n.o8)(e);t.featureSet.features=[];const r=e.featureSet.geometryType;s.set(r,t);const a=e.layerDefinition.objectIdField;"esriGeometryPoint"===r?m(o,a,e.featureSet.features):"esriGeometryPolyline"===r?m(i,a,e.featureSet.features):"esriGeometryPolygon"===r&&m(l,a,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((e=>{a.set(e.id,e)})),t.forEach((t=>{t.networkLinkIds.forEach((s=>{const o=function(e,t,r){const s=function(e,t){let r;return t.some((t=>t.id===e&&(r=t,!0))),r}(e,r);return s&&(s.parentFolderId=t,s.networkLink=s),s}(s,t.id,e.networkLinks);o&&r.push(o)}))})),r.forEach((e=>{if(e.featureInfos){e.points=(0,n.o8)(s.get("esriGeometryPoint")),e.polylines=(0,n.o8)(s.get("esriGeometryPolyline")),e.polygons=(0,n.o8)(s.get("esriGeometryPolygon")),e.mapImages=[];for(const t of e.featureInfos)switch(t.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const r=u[t.type].get(t.id);r&&e[d[t.type]]?.featureSet.features.push(r);break}case"GroundOverlay":{const r=a.get(t.id);r&&e.mapImages.push(r);break}}e.fullExtent=_([e])}}));const y=_(r);return{folders:t,sublayers:r,extent:y}}function b(e,t,r,i){const n=o.id?.findCredential(e);e=(0,a.a6)(e,{token:n?.token});const u=s.A.kmlServiceUrl;return(0,l.A)(u,{query:{url:e,model:"simple",folders:"",refresh:0!==r||void 0,outSR:JSON.stringify(t)},responseType:"json",signal:i})}function v(e,t,r=null,s=[]){const o=[],i={},l=t.sublayers,n=new Set(t.folders.map((e=>e.id)));return l.forEach((t=>{const l=new e;if(r?l.read(t,r):l.read(t),s.length&&n.has(l.id)&&(l.visible=s.includes(l.id)),i[t.id]=l,null!=t.parentFolderId&&-1!==t.parentFolderId){const e=i[t.parentFolderId];e.sublayers||(e.sublayers=[]),e.sublayers?.unshift(l)}else o.unshift(l)})),o}function m(e,t,r){r.forEach((r=>{e.set(r.attributes[t],r)}))}async function g(e){const t=h.A.fromJSON(e.featureSet).features,r=e.layerDefinition,s=(0,f.r)(r.drawingInfo.renderer),o=i.A.fromJSON(e.popupInfo),l=[];for(const i of t){const e=await s.getSymbolAsync(i);i.symbol=e,i.popupTemplate=o,i.visible=!0,l.push(i)}return l}function _(e){const t=(0,y.vt)(y.qv),r=(0,y.vt)(y.qv);for(const s of e){if(s.polygons?.featureSet?.features)for(const e of s.polygons.featureSet.features)(0,p.LJ)(t,e.geometry),(0,y.RF)(r,t);if(s.polylines?.featureSet?.features)for(const e of s.polylines.featureSet.features)(0,p.LJ)(t,e.geometry),(0,y.RF)(r,t);if(s.points?.featureSet?.features)for(const e of s.points.featureSet.features)(0,p.LJ)(t,e.geometry),(0,y.RF)(r,t);if(s.mapImages)for(const e of s.mapImages)(0,p.LJ)(t,e.extent),(0,y.RF)(r,t)}return(0,y.aI)(r,y.qv)?void 0:{xmin:r[0],ymin:r[1],zmin:r[2],xmax:r[3],ymax:r[4],zmax:r[5],spatialReference:u.A.WGS84}}}}]);