"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3921],{58921:(e,t,r)=>{function i(e){const t=e.layer;return"floorInfo"in t&&t.floorInfo?.floorField&&"floors"in e.view?n(e.view.floors,t.floorInfo.floorField):null}function s(e,t){return"floorInfo"in t&&t.floorInfo?.floorField?n(e,t.floorInfo.floorField):null}function n(e,t){if(!e?.length)return null;const r=e.filter((e=>""!==e)).map((e=>`'${e}'`));return r.push("''"),`${t} IN (${r.join(",")}) OR ${t} IS NULL`}r.d(t,{E:()=>i,f:()=>s})},29306:(e,t,r)=>{r.d(t,{Sk:()=>n,Zx:()=>s,_X:()=>a});var i=r(94255);function s(e,t,r){const i=t.flatten((({sublayers:e})=>e)).length;return i!==e.length||(!!e.some((e=>e.originIdOf("minScale")>r||e.originIdOf("maxScale")>r||e.originIdOf("renderer")>r||e.originIdOf("labelingInfo")>r||e.originIdOf("opacity")>r||e.originIdOf("labelsVisible")>r||e.originIdOf("source")>r))||!o(e,t))}function n(e,t,r){return!!e.some((e=>{const t=e.source;return!(!t||"map-layer"===t.type&&t.mapLayerId===e.id&&(null==t.gdbVersion||t.gdbVersion===r))||e.originIdOf("renderer")>i.Gr.SERVICE||e.originIdOf("labelingInfo")>i.Gr.SERVICE||e.originIdOf("opacity")>i.Gr.SERVICE||e.originIdOf("labelsVisible")>i.Gr.SERVICE}))||!o(e,t)}function o(e,t){if(!e?.length||null==t)return!0;const r=t.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).map((e=>e.id)).toArray();if(e.length>r.length)return!1;let i=0;const s=r.length;for(const{id:n}of e){for(;i<s&&r[i]!==n;)i++;if(i>=s)return!1}return!0}function a(e){return!!e&&e.some((e=>null!=e.minScale||null!=e.layerDefinition?.minScale))}},1965:(e,t,r)=>{r.d(t,{LG:()=>p,mb:()=>y,yr:()=>f});var i=r(40189),s=r(46615),n=r(21360),o=r(48325),a=r(37353),l=r(53674),u=r(21946),h=r(41746),c=r(6940),d=r(45758);function p(e){return e&&"render"in e}function f(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}class y extends a.q{constructor(e=null,t=!1){super(),this.blendFunction="standard",this._sourceWidth=0,this._sourceHeight=0,this._textureInvalidated=!1,this._texture=null,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.immutable=t,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null),null!=this._uploadStatus&&(this._uploadStatus.controller.abort(),this._uploadStatus=null)}get isSourceScaled(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}get height(){return void 0!==this._height?this._height:this._sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){null==e&&null==this._source||(this._source=e,this.invalidateTexture(),this.requestRender())}get width(){return void 0!==this._width?this._width:this._sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e)}async setSourceAsync(e,t){null!=this._uploadStatus&&this._uploadStatus.controller.abort();const r=new AbortController,s=(0,i.Tw)();return(0,i.NY)(t,(()=>r.abort())),(0,i.NY)(r,(e=>s.reject(e))),this._uploadStatus={controller:r,resolver:s},this.source=e,s.promise}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):this._source&&(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width))}updateTransitionProperties(e,t){e>=64&&(this.fadeTransitionEnabled=!1,this.inFadeTransition=!1),super.updateTransitionProperties(e,t)}setTransform(e){const t=(0,s.g)(this.transforms.dvs),[r,i]=e.toScreenNoRotation([0,0],[this.x,this.y]),n=this.resolution/this.pixelRatio/e.resolution,a=n*this.width,l=n*this.height,u=Math.PI*this.rotation/180;(0,s.h)(t,t,(0,o.f)(r,i)),(0,s.h)(t,t,(0,o.f)(a/2,l/2)),(0,s.r)(t,t,-u),(0,s.h)(t,t,(0,o.f)(-a/2,-l/2)),(0,s.l)(t,t,(0,o.f)(a,l)),(0,s.m)(this.transforms.dvs,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind(e,t){this._texture&&e.bindTexture(this._texture,t)}async updateTexture({context:e,painter:t}){if(!this._textureInvalidated)return;if(this._textureInvalidated=!1,this._texture||(this._texture=this._createTexture(e)),!this.source)return void this._texture.setData(null);this._texture.resize(this._sourceWidth,this._sourceHeight);const r=function(e){return p(e)?e instanceof l.A?e.getRenderedRasterPixels()?.renderedRasterPixels:f(e):e}(this.source);try{if(null!=this._uploadStatus){const{controller:e,resolver:i}=this._uploadStatus,s={signal:e.signal},{width:n,height:o}=this,a=this._texture,l=t.textureUploadManager;await l.enqueueTextureUpdate({data:r,texture:a,width:n,height:o},s),i.resolve(),this._uploadStatus=null}else this._texture.setData(r);this.ready()}catch(s){(0,i.jH)(s)}}onDetach(){this.destroy()}_createTransforms(){return{dvs:(0,n.c)()}}_createTexture(e){const t=this.immutable&&e.type===u.EL.WEBGL2,r=new d.R;return r.internalFormat=t?h.H0.RGBA8:h.Ab.RGBA,r.wrapMode=h.pF.CLAMP_TO_EDGE,r.isImmutable=t,r.width=this._sourceWidth,r.height=this._sourceHeight,new c.g(e,r)}}},53674:(e,t,r)=>{r.d(t,{A:()=>i});class i{constructor(e,t,r){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=r}get width(){return null!=this.pixelBlock?this.pixelBlock.width:0}get height(){return null!=this.pixelBlock?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if(null==t)return;const r=this.filter({extent:this.extent,pixelBlock:this.originalPixelBlock??t});if(null==r.pixelBlock)return;r.pixelBlock.maskIsAlpha&&(r.pixelBlock.premultiplyAlpha=!0);const i=r.pixelBlock.getAsRGBA(),s=e.createImageData(r.pixelBlock.width,r.pixelBlock.height);s.data.set(i),e.putImageData(s,0,0)}getRenderedRasterPixels(){const e=this.filter({extent:this.extent,pixelBlock:this.pixelBlock});return null==e.pixelBlock?null:(e.pixelBlock.maskIsAlpha&&(e.pixelBlock.premultiplyAlpha=!0),{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)})}}},95387:(e,t,r)=>{r.d(t,{A:()=>_});var i=r(6267),s=r(42766),n=r(46615),o=r(21360),a=r(48325),l=r(80952),u=r(65231),h=r(37353),c=r(38403),d=r(89423),p=r(41746),f=r(80976);const y=Math.PI/180;class g extends h.q{constructor(e){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=(0,o.c)(),this._localOrigin={x:0,y:0},this._getBounds=e}destroy(){this._vao&&(this._vao.dispose(),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=(0,i.WD)(this._program)}doRender(e){const{context:t}=e,r=this._getBounds();if(r.length<1)return;this._createShaderProgram(t),this._updateMatricesAndLocalOrigin(e),this._updateBufferData(t,r),t.setBlendingEnabled(!0),t.setDepthTestEnabled(!1),t.setStencilWriteMask(0),t.setStencilTestEnabled(!1),t.setBlendFunction(p.dn.ONE,p.dn.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0);const i=this._program;t.bindVAO(this._vao),t.useProgram(i),i.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),t.gl.lineWidth(1),t.drawElements(p.WR.LINES,8*r.length,p.pe.UNSIGNED_INT,0),t.bindVAO()}_createTransforms(){return{dvs:(0,o.c)()}}_createShaderProgram(e){if(this._program)return;this._program=e.programCache.acquire("precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }","precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }",m().attributes)}_updateMatricesAndLocalOrigin(e){const{state:t}=e,{displayMat3:r,size:i,resolution:s,pixelRatio:o,rotation:h,viewpoint:c}=t,d=y*h,{x:p,y:f}=c.targetGeometry,g=(0,u.mT)(p,t.spatialReference);this._localOrigin.x=g,this._localOrigin.y=f;const m=o*i[0],_=o*i[1],x=s*m,b=s*_,w=(0,n.g)(this._dvsMat3);(0,n.m)(w,w,r),(0,n.h)(w,w,(0,a.f)(m/2,_/2)),(0,n.c)(w,w,(0,l.f)(i[0]/x,-_/b,1)),(0,n.r)(w,w,-d)}_updateBufferData(e,t){const{x:r,y:i}=this._localOrigin,s=8*t.length,n=new Float32Array(s),o=new Uint32Array(8*t.length);let a=0,l=0;for(const u of t)u&&(n[2*a]=u[0]-r,n[2*a+1]=u[1]-i,n[2*a+2]=u[0]-r,n[2*a+3]=u[3]-i,n[2*a+4]=u[2]-r,n[2*a+5]=u[3]-i,n[2*a+6]=u[2]-r,n[2*a+7]=u[1]-i,o[l]=a+0,o[l+1]=a+3,o[l+2]=a+3,o[l+3]=a+2,o[l+4]=a+2,o[l+5]=a+1,o[l+6]=a+1,o[l+7]=a+0,a+=4,l+=8);if(this._vertexBuffer?this._vertexBuffer.setData(n.buffer):this._vertexBuffer=d.g.createVertex(e,p._U.DYNAMIC_DRAW,n.buffer),this._indexBuffer?this._indexBuffer.setData(o):this._indexBuffer=d.g.createIndex(e,p._U.DYNAMIC_DRAW,o),!this._vao){const t=m();this._vao=new f.Z(e,t.attributes,t.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}const m=()=>(0,c.ES)("bounds",{geometry:[{location:0,name:"a_position",count:2,type:p.pe.FLOAT}]});let _=class extends s.i{constructor(e){super(e),this.checkHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=(0,i.pR)(this._boundsRenderer)}enableRenderingBounds(e){this._boundsRenderer=new g(e),this.requestRender()}get hasHighlight(){return this.checkHighlight()}onTileData(e,t){e.patch(t),this.contains(e)||this.addChild(e),this.requestRender()}onTileError(e){e.clear(),this.contains(e)||this.addChild(e)}_renderChildren(e,t){for(const r of this.children)r.isReady&&r.hasData&&(r.commit(e),e.context.setStencilFunction(p.MT.EQUAL,r.stencilRef,255),r.getDisplayList().replay(e,r,t))}}},88295:(e,t,r)=>{r.d(t,{A:()=>u});var i=r(66866),s=(r(539),r(73446),r(85569),r(39831),r(98849),r(63863)),n=r(79432),o=r(95387),a=r(41746);let l=class extends o.A{get hasHighlight(){return this.children.some((e=>e.hasData))}renderChildren(e){if(e.drawPhase!==n.S5.HIGHLIGHT)return;if(this.attributeView.update(),!this.children.some((e=>e.hasData)))return;this.attributeView.bindTextures(e.context),super.renderChildren(e);const{painter:t}=e,r=t.effects.highlight;r.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(a.hn.COLOR_BUFFER_BIT),this._renderChildren(e,r.defines.concat(["highlightAll"])),r.draw(e),r.unbind()}};l=(0,i._)([(0,s.$)("esri.views.2d.layers.support.HighlightGraphicContainer")],l);const u=l},51660:(e,t,r)=>{r.d(t,{A:()=>u});var i=r(66866),s=r(539),n=r(40189),o=r(85251),a=r(21564),l=(r(73446),r(85569),r(39831),r(63863));const u=e=>{let t=class extends e{initialize(){this.addHandles((0,o.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,n.zf)(e)||s.A.getLogger(this).error(e)}))})),"RefreshableLayerView")}};return(0,i._)([(0,a.MZ)()],t.prototype,"layer",void 0),t=(0,i._)([(0,l.$)("esri.layers.mixins.RefreshableLayerView")],t),t}},59556:(e,t,r)=>{r.d(t,{Uh:()=>K,ox:()=>X});var i=r(66866),s=r(25707),n=r(52495),o=r(85569),a=r(48982),l=r(98849),u=r(20464),h=r(39831),c=r(82256),d=r(40189),p=r(85251),f=r(92976),y=r(21564),g=r(73446),m=r(63863),_=r(84698),x=r(61781),b=r(42453),w=r(58921);function v(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function I(e,t){return"number"==typeof e?e:e?.stops?.length?function(e){let t=0,r=0;for(let i=0;i<e.length;i++){const s=e[i].size;"number"==typeof s&&(t+=s,r++)}return t/r}(e.stops):t}function R(e,t){if(!t)return e;const r=t.filter((e=>"size"===e.type)).map((t=>{const{maxSize:r,minSize:i}=t;return(I(r,e)+I(i,e))/2}));let i=0;const s=r.length;if(0===s)return e;for(let o=0;o<s;o++)i+=r[o];const n=Math.floor(i/s);return Math.max(n,e)}function A(e){const t=e?.renderer,r=e?.event?.pointerType,i="touch"===r?9:6;if(!t)return i;const s="visualVariables"in t?R(i,t.visualVariables):i;if("simple"===t.type)return v(s,t.symbol);if("unique-value"===t.type){let e=s;return t.uniqueValueInfos?.forEach((t=>{e=v(e,t.symbol)})),e}if("class-breaks"===t.type){let e=s;return t.classBreakInfos.forEach((t=>{e=v(e,t.symbol)})),e}return"dot-density"===t.type||t.type,s}var M=r(86394),S=r(65231),E=r(11499),B=r(76859),O=r(1171),F=r(87926),T=r(29306);function P(e){const{mapExtent:t,floors:r,width:i,sublayers:s,layerIds:n,layerOption:o,gdbVersion:a}=e,l=s?.find((e=>null!=e.layer))?.layer?.serviceSublayers,u="popup"===o,h={},c=(0,x.X_)({extent:t,width:i,spatialReference:t?.spatialReference}),d=[],p=e=>{const t=0===c,r=0===e.minScale||c<=e.minScale,i=0===e.maxScale||c>=e.maxScale;if(e.visible&&(t||r&&i))if(e.sublayers)e.sublayers.forEach(p);else{if(!1===n?.includes(e.id)||u&&(!e.popupTemplate||!e.popupEnabled))return;d.unshift(e)}};if(s?.forEach(p),s&&!d.length)h.layerIds=[];else{const e=(0,T.Sk)(d,l,a),t=d.map((e=>{const t=(0,w.f)(r,e);return e.toExportImageJSON(t)}));if(e)h.dynamicLayers=JSON.stringify(t);else{if(s){let e=d.map((({id:e})=>e));n&&(e=e.filter((e=>n.includes(e)))),h.layerIds=e}else n?.length&&(h.layerIds=n);const e=function(e,t){const r=!!e?.length,i=t.filter((e=>null!=e.definitionExpression||r&&null!=e.floorInfo));return i.length?i.map((t=>{const r=(0,w.f)(e,t),i=(0,B.m)(r,t.definitionExpression);return{id:t.id,definitionExpression:i??void 0}})):null}(r,d);if(null!=e&&e.length){const t={};for(const r of e)r.definitionExpression&&(t[r.id]=r.definitionExpression);Object.keys(t).length&&(h.layerDefs=JSON.stringify(t))}}}return h}var G,k=r(17639),V=r(19790),N=r(21877),L=r(78983);let Z=G=class extends N.oY{static from(e){return(0,g.PZ)(G,e)}constructor(e){super(e),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}};(0,i._)([(0,y.MZ)({type:Number,json:{write:!0}})],Z.prototype,"dpi",void 0),(0,i._)([(0,y.MZ)()],Z.prototype,"floors",void 0),(0,i._)([(0,y.MZ)({type:String,json:{write:!0}})],Z.prototype,"gdbVersion",void 0),(0,i._)([(0,y.MZ)({types:k.yR,json:{read:O.rS,write:!0}})],Z.prototype,"geometry",void 0),(0,i._)([(0,y.MZ)({type:Number,json:{write:!0}})],Z.prototype,"geometryPrecision",void 0),(0,i._)([(0,y.MZ)({type:Number,json:{write:!0}})],Z.prototype,"height",void 0),(0,i._)([(0,y.MZ)({type:[Number],json:{write:!0}})],Z.prototype,"layerIds",void 0),(0,i._)([(0,y.MZ)({type:["top","visible","all","popup"],json:{write:!0}})],Z.prototype,"layerOption",void 0),(0,i._)([(0,y.MZ)({type:_.A,json:{write:!0}})],Z.prototype,"mapExtent",void 0),(0,i._)([(0,y.MZ)({type:Number,json:{write:!0}})],Z.prototype,"maxAllowableOffset",void 0),(0,i._)([(0,y.MZ)({type:Boolean,json:{write:!0}})],Z.prototype,"returnFieldName",void 0),(0,i._)([(0,y.MZ)({type:Boolean,json:{write:!0}})],Z.prototype,"returnGeometry",void 0),(0,i._)([(0,y.MZ)({type:Boolean,json:{write:!0}})],Z.prototype,"returnM",void 0),(0,i._)([(0,y.MZ)({type:Boolean,json:{write:!0}})],Z.prototype,"returnUnformattedValues",void 0),(0,i._)([(0,y.MZ)({type:Boolean,json:{write:!0}})],Z.prototype,"returnZ",void 0),(0,i._)([(0,y.MZ)({type:L.A,json:{write:!0}})],Z.prototype,"spatialReference",void 0),(0,i._)([(0,y.MZ)()],Z.prototype,"sublayers",void 0),(0,i._)([(0,y.MZ)({type:V.A,json:{write:!0}})],Z.prototype,"timeExtent",void 0),(0,i._)([(0,y.MZ)({type:Number,json:{write:!0}})],Z.prototype,"tolerance",void 0),(0,i._)([(0,y.MZ)({type:Number,json:{write:!0}})],Z.prototype,"width",void 0),Z=G=(0,i._)([(0,m.$)("esri.rest.support.IdentifyParameters")],Z);const j=Z;var D=r(75094),H=r(77542),U=r(12433);let C=class extends N.oY{constructor(e){super(e),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(e,t){return s.A.fromJSON({attributes:{...t.attributes},geometry:{...t.geometry}})}writeFeature(e,t){if(!e)return;const{attributes:r,geometry:i}=e;r&&(t.attributes={...r}),null!=i&&(t.geometry=i.toJSON(),t.geometryType=U.Y.toJSON(i.type))}};(0,i._)([(0,y.MZ)({type:String,json:{write:!0}})],C.prototype,"displayFieldName",void 0),(0,i._)([(0,y.MZ)({type:s.A})],C.prototype,"feature",void 0),(0,i._)([(0,D.w)("feature",["attributes","geometry"])],C.prototype,"readFeature",null),(0,i._)([(0,H.K)("feature")],C.prototype,"writeFeature",null),(0,i._)([(0,y.MZ)({type:Number,json:{write:!0}})],C.prototype,"layerId",void 0),(0,i._)([(0,y.MZ)({type:String,json:{write:!0}})],C.prototype,"layerName",void 0),C=(0,i._)([(0,m.$)("esri.rest.support.IdentifyResult")],C);const $=C;async function q(e,t,r){const i=(t=function(e){return j.from(e)}(t)).geometry?[t.geometry]:[],s=(0,E.Dl)(e);return s.path+="/identify",(0,S.el)(i).then((e=>{const i=function(e,t){const{dpi:r,gdbVersion:i,geometry:s,geometryPrecision:n,height:o,layerOption:a,mapExtent:l,maxAllowableOffset:u,returnFieldName:h,returnGeometry:c,returnUnformattedValues:d,returnZ:p,spatialReference:f,timeExtent:y,tolerance:g,width:m}=e.toJSON(),{dynamicLayers:_,layerDefs:x,layerIds:b}=P(e),w=null!=t?.geometry?t.geometry:null,v={geometryPrecision:n,maxAllowableOffset:u,returnFieldName:h,returnGeometry:c,returnUnformattedValues:d,returnZ:p,tolerance:g},I=w&&w.toJSON()||s;v.imageDisplay=`${m},${o},${r}`,i&&(v.gdbVersion=i),I&&(delete I.spatialReference,v.geometry=JSON.stringify(I),v.geometryType=(0,O.$B)(I));const R=f??I?.spatialReference??l?.spatialReference;if(R&&(v.sr=(0,F.YX)(R)),v.time=y?[y.start,y.end].join(","):null,l){const{xmin:e,ymin:t,xmax:r,ymax:i}=l;v.mapExtent=`${e},${t},${r},${i}`}return x&&(v.layerDefs=x),_&&!x&&(v.dynamicLayers=_),v.layers="popup"===a?"visible":a,b&&!_&&(v.layers+=`:${b.join(",")}`),v}(t,{geometry:e?.[0]}),n=(0,E.lF)({...s.query,f:"json",...i}),o=(0,E.jV)(n,r);return(0,M.A)(s.path,o).then(W).then((e=>function(e,t){if(!t?.length)return e;const r=new Map;function i(e){r.set(e.id,e),e.sublayers&&e.sublayers.forEach(i)}t.forEach(i);for(const s of e.results)s.feature.sourceLayer=r.get(s.layerId);return e}(e,t.sublayers)))}))}function W(e){const t=e.data;return t.results=t.results||[],t.exceededTransferLimit=Boolean(t.exceededTransferLimit),t.results=t.results.map((e=>$.fromJSON(e))),t}var z=r(28965),Q=r(23369),J=r(18846);let Y=null;function X(e,t){return"tile"===t.type||"map-image"===t.type}let K=class extends n.A{constructor(e){super(e),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=(0,d.sg)((async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch((()=>{})))}))}initialize(){const e=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch((()=>{}))),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([(0,p.on)((()=>this.highlightGraphics),"change",(t=>e(t.added)),{onListenerAdd:t=>e(t)})])}async fetchPopupFeatures(e,t){const{layerView:{layer:r,view:{scale:i}}}=this;if(!e)throw new l.A("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:r});const s=function(e,t,r){const i=[];if(!e)return i;const s=e=>{const n=0===e.minScale||t<=e.minScale,o=0===e.maxScale||t>=e.maxScale;if(e.visible&&n&&o)if(e.sublayers)e.sublayers.forEach(s);else if(e.popupEnabled){const t=(0,J.D8)(e,{...r,defaultPopupTemplateEnabled:!1});null!=t&&i.unshift({sublayer:e,popupTemplate:t})}};return e.map(s),i}(r.sublayers,i,t);if(!s.length)return[];const n=await async function(e,t){if(e.capabilities?.operations?.supportsQuery)return!0;try{return await Promise.any(t.map((({sublayer:e})=>e.load().then((()=>e.capabilities.operations.supportsQuery)))))}catch{return!1}}(r,s);if(!((r.capabilities?.operations?.supportsIdentify??1)&&r.version>=10.5||n))throw new l.A("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:r});return n?this._fetchPopupFeaturesUsingQueries(e,s,t):this._fetchPopupFeaturesUsingIdentify(e,s,t)}clearHighlights(){this.highlightGraphics?.removeAll()}highlight(e){const t=this.highlightGraphics;if(!t)return(0,u.hA)();let r=null;if(e instanceof s.A?r=[e]:a.A.isCollection(e)&&e.length>0?r=e.toArray():Array.isArray(e)&&e.length>0&&(r=e),r=r?.filter(o.Ru),!r?.length)return(0,u.hA)();for(const i of r){const e=i.sourceLayer;null!=e&&"geometryType"in e&&"point"===e.geometryType&&(i.visible=!1)}return t.addMany(r),(0,u.hA)((()=>t.removeMany(r??[])))}async _updateHighlightedFeaturesSymbols(e){const{layerView:{view:t},highlightGraphics:i,highlightGraphicUpdated:s}=this;if(i&&s)for(const n of e){const e=n.sourceLayer&&"renderer"in n.sourceLayer&&n.sourceLayer.renderer;n.sourceLayer&&"geometryType"in n.sourceLayer&&"point"===n.sourceLayer.geometryType&&e&&"getSymbolAsync"in e&&e.getSymbolAsync(n).then((async o=>{o||=new Q.A;let a=null;const l="visualVariables"in e?e.visualVariables?.find((e=>"size"===e.type)):void 0;l&&(Y||(Y=(await Promise.resolve().then(r.bind(r,28479))).getSize),a=Y(l,n,{view:t.type,scale:t.scale,shape:"simple-marker"===o.type?o.style:null})),a||="width"in o&&"height"in o&&null!=o.width&&null!=o.height?Math.max(o.width,o.height):"size"in o?o.size:16,i.includes(n)&&(n.symbol=new Q.A({style:"square",size:a,xoffset:"xoffset"in o?o.xoffset:0,yoffset:"yoffset"in o?o.yoffset:0}),s(n,"symbol"),n.visible=!0)}))}}async _updateHighlightedFeaturesGeometries(e){const{layerView:{layer:t,view:r},highlightGraphics:i,highlightGraphicUpdated:s}=this;if(this._highlightGeometriesResolution=e,!s||!i?.length||!t.capabilities.operations.supportsQuery)return;const n=this._getTargetResolution(e),o=new Map;for(const u of i)if(!this._featuresResolutions.has(u)||this._featuresResolutions.get(u)>n){const e=u.sourceLayer;(0,c.tE)(o,e,(()=>new Map)).set(u.getObjectId(),u)}const a=Array.from(o,(([e,t])=>{const i=e.createQuery();return i.objectIds=[...t.keys()],i.outFields=[e.objectIdField],i.returnGeometry=!0,i.maxAllowableOffset=n,i.outSpatialReference=r.spatialReference,e.queryFeatures(i)})),l=await Promise.all(a);if(!this.destroyed)for(const{features:u}of l)for(const e of u){const t=e.sourceLayer,r=o.get(t).get(e.getObjectId());r&&i.includes(r)&&(r.geometry=e.geometry,s(r,"geometry"),this._featuresResolutions.set(r,n))}}_getTargetResolution(e){const t=e*(0,f.GA)(this.layerView.view.spatialReference),r=t/16;return r<=10?0:e/t*r}async _fetchPopupFeaturesUsingIdentify(e,t,r){const i=await this._createIdentifyParameters(e,t,r);if(null==i)return[];const{results:s}=await q(this.layerView.layer.parsedUrl,i);return s.map((e=>e.feature))}async _createIdentifyParameters(e,t,r){const{floors:i,layer:s,timeExtent:n,view:{spatialReference:o,scale:a}}=this.layerView,l=null!=r?r.event:null;if(!t.length)return null;await Promise.all(t.map((({sublayer:e})=>e.load().catch((()=>{})))));const u=Math.min((0,h.A)("mapservice-popup-identify-max-tolerance"),s.allSublayers.reduce(((e,t)=>t.renderer?A({renderer:t.renderer,event:l}):e),2)),c=this.createFetchPopupFeaturesQueryGeometry(e,u),d=(0,x.i1)(a,o),p=Math.round(c.width/d),f=new _.A({xmin:c.center.x-d*p,ymin:c.center.y-d*p,xmax:c.center.x+d*p,ymax:c.center.y+d*p,spatialReference:c.spatialReference});return new j({floors:i,gdbVersion:"gdbVersion"in s?s.gdbVersion:void 0,geometry:e,height:p,layerOption:"popup",mapExtent:f,returnGeometry:!0,spatialReference:o,sublayers:s.sublayers,timeExtent:n,tolerance:u,width:p})}async _fetchPopupFeaturesUsingQueries(e,t,r){const{layerView:{floors:i,timeExtent:s}}=this,n=null!=r?r.event:null,a=t.map((async({sublayer:t,popupTemplate:r})=>{if(await t.load().catch((()=>{})),t.capabilities&&!t.capabilities.operations.supportsQuery)return[];const o=t.createQuery(),a=A({renderer:t.renderer,event:n}),l=this.createFetchPopupFeaturesQueryGeometry(e,a),u=new Set,[h]=await Promise.all([(0,J.TO)(t,r),t.renderer?.collectRequiredFields(u,t.fieldsIndex)]);(0,b._w)(u,t.fieldsIndex,h);const c=Array.from(u).sort();if(o.geometry=l,o.outFields=c,o.timeExtent=s,i){const e=i.clone(),r=(0,w.f)(e,t);null!=r&&(o.where=o.where?`(${o.where}) AND (${r})`:r)}const d=this._getTargetResolution(l.width/a),p=await function(e){return e.expressionInfos?.length||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type))?(0,z.lw)():Promise.resolve()}(r),f="point"===t.geometryType||p&&p.arcadeUtils.hasGeometryOperations(r);f||(o.maxAllowableOffset=d);let{features:y}=await t.queryFeatures(o);const g=f?0:d;y=await async function(e,t){const r=e.renderer;return r&&"defaultSymbol"in r&&!r.defaultSymbol&&(t=r.valueExpression?await Promise.all(t.map((e=>r.getSymbolAsync(e).then((t=>t?e:null))))).then((e=>e.filter((e=>null!=e)))):t.filter((e=>null!=r.getSymbol(e)))),t}(t,y);for(const e of y)this._featuresResolutions.set(e,g);return y}));return(await Promise.allSettled(a)).reduce(((e,t)=>"fulfilled"===t.status?[...e,...t.value]:e),[]).filter(o.Ru)}};(0,i._)([(0,y.MZ)({constructOnly:!0})],K.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),(0,i._)([(0,y.MZ)({constructOnly:!0})],K.prototype,"layerView",void 0),(0,i._)([(0,y.MZ)({constructOnly:!0})],K.prototype,"highlightGraphics",void 0),(0,i._)([(0,y.MZ)({constructOnly:!0})],K.prototype,"highlightGraphicUpdated",void 0),(0,i._)([(0,y.MZ)({constructOnly:!0})],K.prototype,"updatingHandles",void 0),K=(0,i._)([(0,m.$)("esri.views.layers.support.MapService")],K)},18846:(e,t,r)=>{r.d(t,{D8:()=>n,TO:()=>s});var i=r(42453);async function s(e,t=e.popupTemplate){if(null==t)return[];const r=await t.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:s}=t,{objectIdField:n,typeIdField:o,globalIdField:a,relationships:l}=e;if(r.includes("*"))return["*"];const u=s?(0,i.eX)(e):[],h=(0,i.DB)(e.fieldsIndex,[...r,...u]);return o&&h.push(o),h&&n&&e.fieldsIndex?.has(n)&&!h.includes(n)&&h.push(n),h&&a&&e.fieldsIndex?.has(a)&&!h.includes(a)&&h.push(a),l&&l.forEach((t=>{const{keyField:r}=t;h&&r&&e.fieldsIndex?.has(r)&&!h.includes(r)&&h.push(r)})),h}function n(e,t){return e.popupTemplate?e.popupTemplate:null!=t&&t.defaultPopupTemplateEnabled&&null!=e.defaultPopupTemplate?e.defaultPopupTemplate:null}},49313:(e,t,r)=>{r.d(t,{V:()=>n});r(17639);var i=r(92976),s=r(84698);function n(e,t,r,n=new s.A){let o=0;if("2d"===r.type)o=t*(r.resolution??0);else if("3d"===r.type){const s=r.overlayPixelSizeInMapUnits(e),n=r.basemapSpatialReference;o=null==n||n.equals(r.spatialReference)?t*s:(0,i.GA)(n)/(0,i.GA)(r.spatialReference)}const a=e.x-o,l=e.y-o,u=e.x+o,h=e.y+o,{spatialReference:c}=r;return n.xmin=Math.min(a,u),n.ymin=Math.min(l,h),n.xmax=Math.max(a,u),n.ymax=Math.max(l,h),n.spatialReference=c,n}new s.A}}]);