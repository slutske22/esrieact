"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2491],{77841:(e,t,r)=>{r.d(t,{P:()=>y});var o=r(98849),i=r(69075),s=r(55750),n=r(20909),a=r(33880),p=r(10245),c=r(94255),l=r(21564),d=r(12071),u=r(63680);function y(e){const t=e?.origins??[void 0];return(r,o)=>{const i=function(e,t,r){if("resource"===e?.type)return function(e,t,r){const o=(0,p.z4)(t,r);return{type:String,read:(e,t,r)=>{const i=(0,u.r)(e,t,r);return o.type===String?i:"function"==typeof o.type?new o.type({url:i}):void 0},write:{writer(t,i,a,p){if(!p?.resources)return"string"==typeof t?void(i[a]=(0,u.t)(t,p)):void(i[a]=t.write({},p));const l=function(e){return null==e?null:"string"==typeof e?e:e.url}(t),y=(0,u.t)(l,{...p,verifyItemRelativeUrls:p?.verifyItemRelativeUrls?{writtenUrls:p.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},u.M.NO),g=o.type!==String&&(!(0,s.H)(this)||p?.origin&&this.originIdOf(r)>(0,c.aB)(p.origin)),v={object:this,propertyName:r,value:t,targetUrl:y,dest:i,targetPropertyName:a,context:p,params:e};p?.portalItem&&y&&!(0,n.oP)(y)?g&&e?.contentAddressed?f(v):g?function(e){const{context:t,targetUrl:r,params:o,value:i,dest:s,targetPropertyName:a}=e;if(!t.portalItem)return;const p=t.portalItem.resourceFromPath(r),c=h(i,r,t),l=(0,d.n)(c),u=(0,n.Zo)(p.path),y=o?.compress??!1;l===u?(t.resources&&m({...e,resource:p,content:c,compress:y,updates:t.resources.toUpdate}),s[a]=r):f(e)}(v):function({context:e,targetUrl:t,dest:r,targetPropertyName:o}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(t),compress:!1}),r[o]=t)}(v):p?.portalItem&&(null==y||null!=(0,u.i)(y)||(0,n.w8)(y)||g)?f(v):i[a]=y}}}}(e,t,r);switch(e?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=u.a;return{read:e,write:t}}}}(e,r,o);for(const e of t){const t=(0,l.rM)(r,e,o);for(const e in i)t[e]=i[e]}}}function f(e){const{targetUrl:t,params:r,value:s,context:p,dest:c,targetPropertyName:l}=e;if(!p.portalItem)return;const y=(0,u.p)(t),f=h(s,t,p);if(r?.contentAddressed&&"json"!==f.type)return void p.messages?.push(new o.A("persistable:contentAddressingUnsupported",`Property "${l}" is trying to serializing a resource with content of type ${f.type} with content addressing. Content addressing is only supported for json resources.`,{content:f}));const g=r?.contentAddressed&&"json"===f.type?(0,i.d)(f.jsonString):y?.filename??(0,a.lk)(),v=(0,n.fj)(r?.prefix??y?.prefix,g),w=`${v}.${(0,d.n)(f)}`;if(r?.contentAddressed&&p.resources&&"json"===f.type){const e=p.resources.toKeep.find((e=>e.resource.path===w))??p.resources.toAdd.find((e=>e.resource.path===w));if(e)return void(c[l]=e.resource.itemRelativeUrl)}const S=p.portalItem.resourceFromPath(w);(0,n.w8)(t)&&p.resources&&p.resources.pendingOperations.push((0,n.tk)(t).then((e=>{S.path=`${v}.${(0,d.n)({type:"blob",blob:e})}`,c[l]=S.itemRelativeUrl})).catch((()=>{})));const _=r?.compress??!1;p.resources&&m({...e,resource:S,content:f,compress:_,updates:p.resources.toAdd}),c[l]=S.itemRelativeUrl}function m({object:e,propertyName:t,updates:r,resource:o,content:i,compress:s}){r.push({resource:o,content:i,compress:s,finish:r=>{!function(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}(e,t,r)}})}function h(e,t,r){return"string"==typeof e?{type:"url",url:t}:{type:"json",jsonString:JSON.stringify(e.toJSON(r))}}},22491:(e,t,r)=>{r.r(t),r.d(t,{default:()=>k});var o,i=r(66866),s=r(98849),n=r(539),a=r(35775),p=r(40189),c=r(85251),l=r(21564),d=(r(73446),r(85569),r(39831),r(75094)),u=r(63863),y=r(77841),f=r(68833),m=r(50193),h=r(45681),g=r(41506),v=r(34722),w=r(25389),S=r(68821),_=r(84356),b=r(84546),A=r(86394),I=r(48982),M=r(21877),j=r(20909),x=(r(17639),r(19251)),O=r(68659),P=r(77542),N=r(13484),T=r(62802);let U=o=class extends M.oY{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,r,o){if(o.layer?.spatialReference&&!o.layer.spatialReference.equals(this.geometry.spatialReference)){if(!(0,N.canProjectWithoutEngine)(e.spatialReference,o.layer.spatialReference))return void(o?.messages&&o.messages.push(new O.A("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:o.layer.spatialReference,context:o})));const i=new T.A;(0,N.projectPolygon)(e,i,o.layer.spatialReference),t[r]=i.toJSON(o)}else t[r]=e.toJSON(o);delete t[r].spatialReference}clone(){return new o({geometry:(0,x.o8)(this.geometry),type:this.type})}};(0,i._)([(0,l.MZ)({type:T.A}),(0,y.P)()],U.prototype,"geometry",void 0),(0,i._)([(0,P.K)(["web-scene","portal-item"],"geometry")],U.prototype,"writeGeometry",null),(0,i._)([(0,l.MZ)({type:["clip","mask","replace"],nonNullable:!0}),(0,y.P)()],U.prototype,"type",void 0),U=o=(0,i._)([(0,u.$)("esri.layers.support.SceneModification")],U);const R=U;var Z;let L=Z=class extends((0,M.Te)(I.A.ofType(R))){constructor(e){super(e),this.url=null}clone(){return new Z({url:this.url,items:this.items.map((e=>e.clone()))})}toJSON(e){return this.toArray().map((t=>t.toJSON(e))).filter((e=>!!e.geometry))}static fromJSON(e,t){const r=new Z;for(const o of e)r.add(R.fromJSON(o,t));return r}static async fromUrl(e,t,r){const o={url:(0,j.An)(e),origin:"service"},i=await(0,A.A)(e,{responseType:"json",signal:r?.signal}),s=t.toJSON(),n=[];for(const a of i.data)n.push(R.fromJSON({...a,geometry:{...a.geometry,spatialReference:s}},o));return new Z({url:e,items:n})}};(0,i._)([(0,l.MZ)({type:String})],L.prototype,"url",void 0),L=Z=(0,i._)([(0,u.$)("esri.layers.support.SceneModifications")],L);const J=L;var z=r(27451),$=r(63680);let K=class extends((0,S.w6)((0,h.b)((0,g.q)((0,v.A)((0,w.j)((0,a.P)((0,m.p)(f.A)))))))){constructor(...e){super(...e),this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.path=null}initialize(){this.addHandles((0,c.on)((()=>this.modifications),"after-changes",(()=>this.modifications=this.modifications),c.OH))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readModifications(e,t,r){this._modificationsSource={url:(0,$.f)(e,r),context:r}}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=e?.signal;try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(r){(0,p.QP)(r)}if(await this._fetchService(t),null!=this._modificationsSource){const t=await J.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(null!=this._modificationsSource)return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(S.Xh.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(S.Xh.SAVE,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new s.A("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s.A("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new s.A("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}_validateElevationInfo(){const e=this.elevationInfo,t="Integrated mesh layers";(0,z.XF)(n.A.getLogger(this),(0,z.B)(t,"absolute-height",e)),(0,z.XF)(n.A.getLogger(this),(0,z.tW)(t,e))}};(0,i._)([(0,l.MZ)({type:String,readOnly:!0})],K.prototype,"geometryType",void 0),(0,i._)([(0,l.MZ)({type:["show","hide"]})],K.prototype,"listMode",void 0),(0,i._)([(0,l.MZ)({type:["IntegratedMeshLayer"]})],K.prototype,"operationalLayerType",void 0),(0,i._)([(0,l.MZ)({json:{read:!1},readOnly:!0})],K.prototype,"type",void 0),(0,i._)([(0,l.MZ)({type:b.W4,readOnly:!0})],K.prototype,"nodePages",void 0),(0,i._)([(0,l.MZ)({type:[b.uV],readOnly:!0})],K.prototype,"materialDefinitions",void 0),(0,i._)([(0,l.MZ)({type:[b.Ot],readOnly:!0})],K.prototype,"textureSetDefinitions",void 0),(0,i._)([(0,l.MZ)({type:[b.L0],readOnly:!0})],K.prototype,"geometryDefinitions",void 0),(0,i._)([(0,l.MZ)({readOnly:!0})],K.prototype,"serviceUpdateTimeStamp",void 0),(0,i._)([(0,l.MZ)({type:J}),(0,y.P)({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],K.prototype,"modifications",void 0),(0,i._)([(0,d.w)(["web-scene","portal-item"],"modifications")],K.prototype,"readModifications",null),(0,i._)([(0,l.MZ)(_.Yj)],K.prototype,"elevationInfo",null),(0,i._)([(0,l.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],K.prototype,"path",void 0),K=(0,i._)([(0,u.$)("esri.layers.IntegratedMeshLayer")],K);const k=K},12071:(e,t,r)=>{r.d(t,{n:()=>i});var o=r(20909);function i(e){return s[function(e){return"json"===e.type?"application/json":"blob"===e.type?e.blob.type:function(e){const t=(0,o.Zo)(e);return p[t]||n}(e.url)}(e)]||a}const s={},n="text/plain",a=s[n],p={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const c in p)s[p[c]]=c}}]);