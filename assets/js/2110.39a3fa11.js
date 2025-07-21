"use strict";
exports.id = 2110;
exports.ids = [2110];
exports.modules = {

/***/ 2110:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  toBinaryGLTF: () => (/* binding */ gltfexport_i)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
;// ../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/glb.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var t;!function(t){t[t.JSON=1313821514]="JSON",t[t.BIN=5130562]="BIN"}(t||(t={}));class e{static{this.HEADER_SIZE=12}static{this.CHUNK_HEADER_SIZE=8}static{this.MAGIC=1179937895}static{this.VERSION=2}constructor(i,s){if(!i)throw new Error("GLB requires a JSON gltf chunk");this._length=e.HEADER_SIZE,this._length+=e.CHUNK_HEADER_SIZE;const r=n(i);if(this._length+=h(r.byteLength,4),s&&(this._length+=e.CHUNK_HEADER_SIZE,this._length+=s.byteLength,s.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this._length),this._outView=new DataView(this.buffer),this._writeHeader();const _=this._writeChunk(r,12,t.JSON,32);s&&this._writeChunk(s,_,t.BIN)}_writeHeader(){this._outView.setUint32(0,e.MAGIC,!0),this._outView.setUint32(4,e.VERSION,!0),this._outView.setUint32(8,this._length,!0)}_writeChunk(t,e,n,s=0){const r=h(t.byteLength,4);for(this._outView.setUint32(e,r,!0),this._outView.setUint32(e+=4,n,!0),i(this._outView.buffer,t,e+=4,0,t.byteLength),e+=t.byteLength;e%4;)s&&this._outView.setUint8(e,s),e++;return e}}function i(t,e,i,n,h){new Uint8Array(t,i,h).set(new Uint8Array(e,n,h),0)}function n(t){return(new TextEncoder).encode(t).buffer}function h(t,e){return e*Math.ceil(t/e)}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/colorUtils.js
var colorUtils = __webpack_require__(31415);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/MapUtils.js
var MapUtils = __webpack_require__(82256);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(92504);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/math/quat.js
var quat = __webpack_require__(42927);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/quatf64.js
var quatf64 = __webpack_require__(38911);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(24121);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(58359);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/MeshMaterialMetallicRoughness.js
var MeshMaterialMetallicRoughness = __webpack_require__(93413);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/meshUtils/vertexSpaceConversion.js
var vertexSpaceConversion = __webpack_require__(5025);
;// ../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/types.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var types_E,A,types_R,types_L,o,I,N;!function(E){E[E.External=0]="External",E[E.DataURI=1]="DataURI",E[E.GLB=2]="GLB"}(types_E||(types_E={})),function(E){E[E.External=0]="External",E[E.DataURI=1]="DataURI",E[E.GLB=2]="GLB"}(A||(A={})),function(E){E[E.ARRAY_BUFFER=34962]="ARRAY_BUFFER",E[E.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(types_R||(types_R={})),function(E){E.SCALAR="SCALAR",E.VEC2="VEC2",E.VEC3="VEC3",E.VEC4="VEC4",E.MAT2="MAT2",E.MAT3="MAT3",E.MAT4="MAT4"}(types_L||(types_L={})),function(E){E[E.POINTS=0]="POINTS",E[E.LINES=1]="LINES",E[E.LINE_LOOP=2]="LINE_LOOP",E[E.LINE_STRIP=3]="LINE_STRIP",E[E.TRIANGLES=4]="TRIANGLES",E[E.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",E[E.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(o||(o={})),function(E){E.OPAQUE="OPAQUE",E.MASK="MASK",E.BLEND="BLEND"}(I||(I={})),function(E){E[E.NoColor=0]="NoColor",E[E.FaceColor=1]="FaceColor",E[E.VertexColor=2]="VertexColor"}(N||(N={}));

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/enums.js
var enums = __webpack_require__(41746);
;// ../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/bufferview.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class bufferview_i{constructor(t,s,i,r,n){this._buffer=t,this._componentType=i,this._dataType=r,this._data=[],this._isFinalized=!1,this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,s.bufferViews||(s.bufferViews=[]),this.index=s.bufferViews.length,this._bufferView={buffer:t.index,byteLength:-1,target:n};const a=this._getElementSize();a>=4&&n!==types_R.ELEMENT_ARRAY_BUFFER&&(this._bufferView.byteStride=a),s.bufferViews.push(this._bufferView),this._numComponentsForDataType=this._calculateNumComponentsForDataType()}push(e){const t=this._data.length;if(this._data.push(e),this._accessorIndex>=0){const s=t%this._numComponentsForDataType,i=this._accessorMin[s];this._accessorMin[s]="number"!=typeof i?e:Math.min(i,e);const r=this._accessorMax[s];this._accessorMax[s]="number"!=typeof r?e:Math.max(r,e)}}get dataSize(){return this._data.length*this._sizeComponentType()}get byteSize(){function e(e,t){return t*Math.ceil(e/t)}return e(this.dataSize,4)}getByteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}get byteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}_createTypedArray(e,t){switch(this._componentType){case enums/* DataType */.pe.BYTE:return new Int8Array(e,t);case enums/* DataType */.pe.FLOAT:return new Float32Array(e,t);case enums/* DataType */.pe.SHORT:return new Int16Array(e,t);case enums/* DataType */.pe.UNSIGNED_BYTE:return new Uint8Array(e,t);case enums/* DataType */.pe.UNSIGNED_INT:return new Uint32Array(e,t);case enums/* DataType */.pe.UNSIGNED_SHORT:return new Uint16Array(e,t)}}writeOutToBuffer(e,t){this._createTypedArray(e,t).set(this._data)}writeAsync(e){if(this._asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this._asyncWritePromise=e.then((e=>{const t=new Uint8Array(e);for(let s=0;s<t.length;++s)this._data.push(t[s]);delete this._asyncWritePromise})),this._asyncWritePromise}startAccessor(e){if(this._accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this._accessorIndex=this._data.length,this._accessorAttribute=e;const t=this._numComponentsForDataType;this._accessorMin=new Array(t),this._accessorMax=new Array(t)}endAccessor(){if(this._accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const e=this._getElementSize(),t=this._numComponentsForDataType,i=(this._data.length-this._accessorIndex)/t;if(i%1)throw new Error("An accessor was ended with missing component values");for(let s=0;s<this._accessorMin.length;++s)"number"!=typeof this._accessorMin[s]&&(this._accessorMin[s]=0),"number"!=typeof this._accessorMax[s]&&(this._accessorMax[s]=0);const r={byteOffset:e*(this._accessorIndex/t),componentType:this._componentType,count:i,type:this._dataType,min:this._accessorMin,max:this._accessorMax,name:this._accessorAttribute};switch(this._accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this._componentType){case enums/* DataType */.pe.UNSIGNED_BYTE:case enums/* DataType */.pe.UNSIGNED_SHORT:r.normalized=!0}}return this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,r}get finalized(){return this._finalizedPromise?this._finalizedPromise:this._isFinalized?this._finalizedPromise=Promise.resolve():this._finalizedPromise=new Promise((e=>this._finalizedPromiseResolve=e))}async finalize(){const e=this._bufferView,t=this._buffer.getViewFinalizePromises(this);this._asyncWritePromise&&t.push(this._asyncWritePromise),await Promise.allSettled(t),this._isFinalized=!0,e.byteOffset=this.getByteOffset(),e.byteLength=this.dataSize,this._finalizedPromiseResolve&&this._finalizedPromiseResolve()}_getElementSize(){return this._sizeComponentType()*this._numComponentsForDataType}_sizeComponentType(){switch(this._componentType){case enums/* DataType */.pe.BYTE:case enums/* DataType */.pe.UNSIGNED_BYTE:return 1;case enums/* DataType */.pe.SHORT:case enums/* DataType */.pe.UNSIGNED_SHORT:return 2;case enums/* DataType */.pe.UNSIGNED_INT:case enums/* DataType */.pe.FLOAT:return 4}}_calculateNumComponentsForDataType(){switch(this._dataType){case types_L.SCALAR:return 1;case types_L.VEC2:return 2;case types_L.VEC3:return 3;case types_L.VEC4:case types_L.MAT2:return 4;case types_L.MAT3:return 9;case types_L.MAT4:return 16}}}

;// ../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/buffer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class buffer_i{constructor(e){this._gltf=e,this._bufferViews=[],this._isFinalized=!1,e.buffers||(e.buffers=[]),this.index=e.buffers.length;const i={byteLength:-1};e.buffers.push(i),this._buffer=i}addBufferView(i,t,r){if(this._finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const f=new bufferview_i(this,this._gltf,i,t,r);return this._bufferViews.push(f),f}getByteOffset(e){let i=0;for(const t of this._bufferViews){if(t===e)return i;i+=t.byteSize}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(e){const i=[];for(const t of this._bufferViews){if(e&&t===e)return i;i.push(t.finalized)}return i}getArrayBuffer(){if(!this._isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const e=this._getTotalSize(),i=new ArrayBuffer(e);let t=0;for(const r of this._bufferViews)r.writeOutToBuffer(i,t),t+=r.byteSize;return i}finalize(){if(this._finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this._finalizePromise=Promise.allSettled(this.getViewFinalizePromises()).then((()=>{this._isFinalized=!0;const e=this.getArrayBuffer();this._buffer.byteLength=e.byteLength,this._buffer.uri=e})),this._gltf.extras.promises.push(this._finalizePromise),this._finalizePromise}_getTotalSize(){let e=0;for(const i of this._bufferViews)e+=i.byteSize;return e}}

;// ../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/geometry.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function geometry_c(o,n){if(o.components)for(const t of o.components)t.faces&&"smooth"===t.shading&&geometry_e(t.faces,n)}function geometry_e(r,c){null==c.normal&&(c.normal=new Float32Array(c.position.length));const{position:e,normal:m}=c,h=r.length/3;for(let s=0;s<h;++s){const c=3*r[3*s],l=3*r[3*s+1],h=3*r[3*s+2],p=(0,vec32.i)(a,e[c],e[c+1],e[c+2]),g=(0,vec32.i)(geometry_i,e[l],e[l+1],e[l+2]),u=(0,vec32.i)(f,e[h],e[h+1],e[h+2]),d=(0,vec32.d)(g,g,p),j=(0,vec32.d)(u,u,p),v=(0,vec32.h)(d,d,j);m[c]+=v[0],m[c+1]+=v[1],m[c+2]+=v[2],m[l]+=v[0],m[l+1]+=v[1],m[l+2]+=v[2],m[h]+=v[0],m[h+1]+=v[1],m[h+2]+=v[2]}for(let n=0;n<m.length;n+=3)(0,vec32.i)(l,m[n],m[n+1],m[n+2]),(0,vec32.n)(l,l),m[n]=l[0],m[n+1]=l[1],m[n+2]=l[2]}const a=(0,vec3f64/* create */.vt)(),geometry_i=(0,vec3f64/* create */.vt)(),f=(0,vec3f64/* create */.vt)(),l=(0,vec3f64/* create */.vt)();

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var core_Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(20909);
;// ../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/imageutils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function imageutils_a(e){const t=m(e);return null!=t?t.toDataURL():""}async function imageutils_i(n,r){const a=m(n);if(null==a)throw new core_Error/* default */.A("imageToArrayBuffer","Unsupported image type");const i=imageutils_o(n),s=await new Promise((e=>a.toBlob(e,i)));if((0,promiseUtils/* throwIfAborted */.Te)(r),!s)throw new core_Error/* default */.A("imageToArrayBuffer","Failed to encode image");const c=await s.arrayBuffer();return (0,promiseUtils/* throwIfAborted */.Te)(r),{data:c,type:i}}function imageutils_o(e){if(!(e instanceof HTMLImageElement))return"image/png";const t=e.src;if((0,urlUtils/* isDataProtocol */.DB)(t)){const e=(0,urlUtils/* dataComponents */.r$)(t);return"image/jpeg"===e?.mediaType?e.mediaType:"image/png"}return/\.png$/i.test(t)?"image/png":/\.(jpg|jpeg)$/i.test(t)?"image/jpeg":"image/png"}function m(e){if(e instanceof HTMLCanvasElement)return e;if(e instanceof HTMLVideoElement)return null;const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");return e instanceof HTMLImageElement?n.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&n.putImageData(e,0,0),t}function s(e){const t=[],n=new Uint8Array(e);for(let r=0;r<n.length;r++)t.push(String.fromCharCode(n[r]));return"data:application/octet-stream;base64,"+btoa(t.join(""))}function imageutils_c(e){if(e.byteLength<8)return!1;const t=new Uint8Array(e);return 137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]&&13===t[4]&&10===t[5]&&26===t[6]&&10===t[7]}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/glTF/internal/resourceUtils.js
var resourceUtils = __webpack_require__(46629);
;// ../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/gltf.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const O=()=>Logger/* default */.A.getLogger("esri.geometry.support.meshUtils.exporters.gltf.gltf");class gltf_w{constructor(e,t){this.options=t,this._materialMap=new Array,this._imageMap=new Map,this._textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:e.copyright,generator:e.generator},extras:{output:t.output,binChunkBuffer:null,promises:[]}},this._addScenes(e)}_addScenes(e){this.gltf.scene=e.defaultScene;const t=this.gltf.extras,s=t.output.buffer===types_E.GLB||t.output.image===A.GLB;s&&(t.binChunkBuffer=new buffer_i(this.gltf)),e.forEachScene((e=>{this._addScene(e)})),s&&t.binChunkBuffer.finalize()}_addScene(e){this.gltf.scenes||(this.gltf.scenes=[]);const t={};e.name&&(t.name=e.name),e.forEachNode((e=>{t.nodes||(t.nodes=[]),t.nodes.push(...this._addNodes(e))})),this.gltf.scenes.push(t)}_addNodes(e){this.gltf.nodes||(this.gltf.nodes=[]);const t={};e.name&&(t.name=e.name);const s=e.translation;(0,vec32.q)(s,vec3f64/* ZEROS */.uY)||(t.translation=(0,vec3f64/* clone */.o8)(s));const r=e.rotation;(0,quat/* exactEquals */.t2)(r,quatf64/* IDENTITY */.zK)||(t.rotation=(0,quatf64/* clone */.o8)(r));const h=e.scale;(0,vec32.q)(h,vec3f64/* ONES */.Un)||(t.scale=(0,vec3f64/* clone */.o8)(h));const f=this.gltf.nodes.length;if(this.gltf.nodes.push(t),e.mesh&&e.mesh.vertexAttributes.position){const s=this._createMeshes(e.mesh),r=[f];if(1===s.length)this._addMesh(t,s[0]);else for(const e of s){const t={};this._addMesh(t,e),r.push(this.gltf.nodes.length),this.gltf.nodes.push(t)}return r}return e.forEachNode((e=>{t.children||(t.children=[]),t.children.push(...this._addNodes(e))})),[f]}_addMesh(e,t){this.gltf.meshes??=[];const s=this.gltf.meshes.length;this.gltf.meshes.push(t),e.mesh=s}_createMeshes(e){const t=this.gltf.extras,s=t.output.buffer===types_E.GLB;let r;r=s?t.binChunkBuffer:new buffer_i(this.gltf);const i=this.options.origin,o=e.vertexSpace.clone();o.origin=[i.x,i.y,i.z??0];const a=(0,vertexSpaceConversion/* convertVertexSpace */.UR)({vertexAttributes:e.vertexAttributes,vertexSpace:e.vertexSpace,transform:this.options?.ignoreLocalTransform?null:e.transform,spatialReference:e.spatialReference},o,{targetUnit:this.options.unitConversionDisabled?void 0:"meters"});if(!a)return[];geometry_c(e,a),v(a);const{position:n,normal:l,tangent:c}=a,{uv:u,color:h}=e.vertexAttributes,g=r.addBufferView(enums/* DataType */.pe.FLOAT,types_L.VEC3,types_R.ARRAY_BUFFER);let T,R,A,b;l&&(T=r.addBufferView(enums/* DataType */.pe.FLOAT,types_L.VEC3,types_R.ARRAY_BUFFER)),u&&(R=r.addBufferView(enums/* DataType */.pe.FLOAT,types_L.VEC2,types_R.ARRAY_BUFFER)),c&&(A=r.addBufferView(enums/* DataType */.pe.FLOAT,types_L.VEC4,types_R.ARRAY_BUFFER)),h&&(b=r.addBufferView(enums/* DataType */.pe.FLOAT,types_L.VEC4,types_R.ARRAY_BUFFER)),g.startAccessor("POSITION"),T&&T.startAccessor("NORMAL"),R&&R.startAccessor("TEXCOORD_0"),A&&A.startAccessor("TANGENT"),b&&b.startAccessor("COLOR_0");const E=a.position.length/3;for(let f=0;f<E;++f)g.push(n[3*f]),g.push(n[3*f+1]),g.push(n[3*f+2]),T&&null!=l&&(T.push(l[3*f]),T.push(l[3*f+1]),T.push(l[3*f+2])),R&&null!=u&&(R.push(u[2*f]),R.push(u[2*f+1])),A&&null!=c&&(A.push(c[4*f]),A.push(c[4*f+1]),A.push(c[4*f+2]),A.push(c[4*f+3])),b&&null!=h&&(b.push(gltf_I(h[4*f]/255)),b.push(gltf_I(h[4*f+1]/255)),b.push(gltf_I(h[4*f+2]/255)),b.push(h[4*f+3]/255));const O=g.endAccessor(),w=this._addAccessor(g.index,O);let C,N,L,S,B;if(T){const e=T.endAccessor();C=this._addAccessor(T.index,e)}if(R){const e=R.endAccessor();N=this._addAccessor(R.index,e)}if(A){const e=A.endAccessor();L=this._addAccessor(A.index,e)}if(b){const e=b.endAccessor();S=this._addAccessor(b.index,e)}const F=[];return e.components&&e.components.length>0&&e.components[0].faces?(B=r.addBufferView(enums/* DataType */.pe.UNSIGNED_INT,types_L.SCALAR,types_R.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(B,e.components,F,w,C,N,L,S)):this._addMeshVertexNonIndexed(e.components,F,w,C,N,L,S),g.finalize(),T&&T.finalize(),R&&R.finalize(),A&&A.finalize(),B&&B.finalize(),b&&b.finalize(),s||r.finalize(),F}_addMaterial(e){if(null==e)return;const t=this._materialMap.indexOf(e);if(-1!==t)return t;this.gltf.materials||(this.gltf.materials=[]);const s={};switch(e.alphaMode){case"mask":s.alphaMode=I.MASK;break;case"auto":case"blend":s.alphaMode=I.BLEND}s.alphaCutoff=e.alphaCutoff,e.doubleSided&&(s.doubleSided=e.doubleSided),s.pbrMetallicRoughness={};const r=e=>{const t=e.toRgba();return t[0]=gltf_I(t[0]/255),t[1]=gltf_I(t[1]/255),t[2]=gltf_I(t[2]/255),t};if(null!=e.color&&(s.pbrMetallicRoughness.baseColorFactor=r(e.color)),null!=e.colorTexture&&(s.pbrMetallicRoughness.baseColorTexture=this._createTextureInfo(e.colorTexture,e.colorTextureTransform)),null!=e.normalTexture&&(s.normalTexture=this._createTextureInfo(e.normalTexture,e.normalTextureTransform)),e instanceof MeshMaterialMetallicRoughness/* default */.A){if(null!=e.emissiveTexture&&(s.emissiveTexture=this._createTextureInfo(e.emissiveTexture,e.emissiveTextureTransform)),null!=e.emissiveColor){const t=r(e.emissiveColor);s.emissiveFactor=[t[0],t[1],t[2]]}null!=e.occlusionTexture&&(s.occlusionTexture=this._createTextureInfo(e.occlusionTexture,e.occlusionTextureTransform)),null!=e.metallicRoughnessTexture&&(s.pbrMetallicRoughness.metallicRoughnessTexture=this._createTextureInfo(e.metallicRoughnessTexture,e.metallicRoughnessTextureTransform)),s.pbrMetallicRoughness.metallicFactor=e.metallic,s.pbrMetallicRoughness.roughnessFactor=e.roughness}else s.pbrMetallicRoughness.metallicFactor=1,s.pbrMetallicRoughness.roughnessFactor=1,O().warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");const i=this.gltf.materials.length;return this.gltf.materials.push(s),this._materialMap.push(e),i}_createTextureInfo(e,t){const s={index:this._addTexture(e)};return t?(s.extensions||(s.extensions={}),s.extensions.KHR_texture_transform={scale:t.scale,offset:t.offset,rotation:(0,mathUtils/* deg2rad */.kU)(t.rotation)},s):s}_addTexture(e){const t=this.gltf.textures??[];return this.gltf.textures=t,(0,MapUtils/* getOrCreateMapValue */.tE)(this._textureMap,e,(()=>{const s={sampler:this._addSampler(e),source:this._addImage(e)},r=t.length;return t.push(s),r}))}_addImage(e){const t=this._imageMap.get(e);if(null!=t)return t;this.gltf.images||(this.gltf.images=[]);const s={};if(e.url)s.uri=e.url;else{const t=e.data;s.extras=t;for(let e=0;e<this.gltf.images.length;++e)if(t===this.gltf.images[e].extras)return e;const r=this.gltf.extras;switch(r.output.image){case A.GLB:{const e=r.binChunkBuffer.addBufferView(enums/* DataType */.pe.UNSIGNED_BYTE,types_L.SCALAR);if((0,resourceUtils/* isEncodedMeshTexture */.x3)(t))null!=t.data&&e.writeOutToBuffer(t.data,0);else{const i=imageutils_i(t,this.options.signal).then((({data:e,type:t})=>(s.mimeType=t,e)));r.promises.push(e.writeAsync(i).then((()=>{e.finalize()})))}s.bufferView=e.index;break}case A.DataURI:if((0,resourceUtils/* isEncodedMeshTexture */.x3)(t)){O().warnOnce("Image export for basis compressed textures not available.");break}s.uri=imageutils_a(t);break;default:if((0,resourceUtils/* isEncodedMeshTexture */.x3)(t)){O().warnOnce("Image export for basis compressed textures not available.");break}r.promises.push(imageutils_i(t,this.options.signal).then((({data:e,type:t})=>{s.uri=e,s.mimeType=t})))}}const r=this.gltf.images.length;return this.gltf.images.push(s),this._imageMap.set(e,r),r}_addSampler(e){this.gltf.samplers||(this.gltf.samplers=[]);let t=enums/* TextureWrapMode */.pF.REPEAT,s=enums/* TextureWrapMode */.pF.REPEAT;if("string"==typeof e.wrap)switch(e.wrap){case"clamp":t=enums/* TextureWrapMode */.pF.CLAMP_TO_EDGE,s=enums/* TextureWrapMode */.pF.CLAMP_TO_EDGE;break;case"mirror":t=enums/* TextureWrapMode */.pF.MIRRORED_REPEAT,s=enums/* TextureWrapMode */.pF.MIRRORED_REPEAT}else{switch(e.wrap.vertical){case"clamp":s=enums/* TextureWrapMode */.pF.CLAMP_TO_EDGE;break;case"mirror":s=enums/* TextureWrapMode */.pF.MIRRORED_REPEAT}switch(e.wrap.horizontal){case"clamp":t=enums/* TextureWrapMode */.pF.CLAMP_TO_EDGE;break;case"mirror":t=enums/* TextureWrapMode */.pF.MIRRORED_REPEAT}}const r={wrapS:t,wrapT:s};for(let o=0;o<this.gltf.samplers.length;++o)if(JSON.stringify(r)===JSON.stringify(this.gltf.samplers[o]))return o;const i=this.gltf.samplers.length;return this.gltf.samplers.push(r),i}_addAccessor(e,t){this.gltf.accessors||(this.gltf.accessors=[]);const s={bufferView:e,byteOffset:t.byteOffset,componentType:t.componentType,count:t.count,type:t.type,min:t.min,max:t.max,name:t.name};t.normalized&&(s.normalized=!0);const r=this.gltf.accessors.length;return this.gltf.accessors.push(s),r}_addMeshVertexIndexed(e,t,s,r,i,o,a,n){const l=new Map;for(const c of t){if(e.startAccessor("INDICES"),c.faces)for(let s=0;s<c.faces.length;++s)e.push(c.faces[s]);const t=e.endAccessor(),u={attributes:{POSITION:r},indices:this._addAccessor(e.index,t),material:this._addMaterial(c.material)};i&&"flat"!==c.shading&&(u.attributes.NORMAL=i),o&&(u.attributes.TEXCOORD_0=o),a&&"flat"!==c.shading&&(u.attributes.TANGENT=a),n&&(u.attributes.COLOR_0=n);const h=l.get(c.name);if(h)h.primitives.push(u);else{const e={name:c.name,primitives:[u]};l.set(c.name,e),s.push(e)}}}_addMeshVertexNonIndexed(e,t,s,r,i,o,a){const n={primitives:[]};t.push(n);const l={attributes:{POSITION:s}};r&&(l.attributes.NORMAL=r),i&&(l.attributes.TEXCOORD_0=i),o&&(l.attributes.TANGENT=o),a&&(l.attributes.COLOR_0=a),e&&(l.material=this._addMaterial(e[0].material)),n.primitives.push(l)}}function v({position:e,normal:t,tangent:s}){C(e,3),C(t,3),C(s,4)}function C(e,t){if(null!=e)for(let s=1,r=2;s<e.length;s+=t,r+=t){const t=e[s],i=e[r];e[s]=i,e[r]=-t}}function gltf_I(t){return t**colorUtils/* colorGamma */.Tf}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
;// ../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/asset.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class asset_s{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(e){if(this._scenes.includes(e))throw new Error("Scene already added");this._scenes.push(e)}removeScene(s){(0,arrayUtils/* remove */.TF)(this._scenes,s)}forEachScene(e){this._scenes.forEach(e)}}

;// ../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/node.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class node_e{constructor(t){this.mesh=t,this.name="",this.translation=(0,vec3f64/* create */.vt)(),this.rotation=(0,quatf64/* create */.vt)(),this.scale=(0,vec3f64/* clone */.o8)(vec3f64/* ONES */.Un),this._nodes=[]}addNode(t){if(this._nodes.includes(t))throw new Error("Node already added");this._nodes.push(t)}forEachNode(t){this._nodes.forEach(t)}set rotationAngles(s){(0,quat/* fromEuler */.A6)(this.rotation,s[0],s[1],s[2])}}

;// ../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/index.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const gltf_f="model.gltf",gltf_i="model.glb";async function u(u,l){const c=new gltf_w(u,l).gltf,p=c.extras.promises;let m=1,g=1,d=null;await Promise.allSettled(p),(0,promiseUtils/* throwIfAborted */.Te)(l.signal);const b=l.jsonSpacing??4,j=new Map,w=JSON.stringify(c,((e,t)=>{if("extras"!==e){if(t instanceof ArrayBuffer){if(imageutils_c(t))switch(l.output?.image){case A.DataURI:case A.GLB:break;case A.External:default:{const e=`img${g}.png`;return g++,j.set(e,t),e}}switch(l.output?.buffer){case types_E.DataURI:return s(t);case types_E.GLB:if(d)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(d=t);case types_E.External:default:{const e=`data${m}.bin`;return m++,j.set(e,t),e}}}return t}}),b);return l.output?.buffer===types_E.GLB||l.output?.image===A.GLB?j.set(gltf_i,new e(w,d).buffer):j.set(gltf_f,w),j}async function gltf_l(e,t){const r=(await u(e,{output:{buffer:types_E.GLB,image:A.GLB},jsonSpacing:0,...t})).get(gltf_i);if(!(r&&r instanceof ArrayBuffer))throw new Error("failed to export to glb");return r}

;// ../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/scene.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class d{constructor(){this.name="",this._nodes=[]}addNode(d){if(this._nodes.includes(d))throw new Error("Node already added");this._nodes.push(d)}forEachNode(d){this._nodes.forEach(d)}}

;// ../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/gltfexport.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function gltfexport_i(i,t){const s=new asset_s,m=new d;return s.addScene(m),m.addNode(new node_e(i)),await gltf_l(s,{origin:i.origin,...t})}


/***/ }),

/***/ 46629:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KB: () => (/* binding */ r),
/* harmony export */   Xi: () => (/* binding */ t),
/* harmony export */   pn: () => (/* binding */ o),
/* harmony export */   x3: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91013);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class t{constructor(t){this.data=t,this.type="encoded-mesh-texture",this.encoding=_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .TextureEncodingMimeType */ .JS.KTX2_ENCODING}}function n(e){return"encoded-mesh-texture"===e?.type}async function r(e){const t=new Blob([e]),n=await t.text();return JSON.parse(n)}async function o(n,r){if(r===_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .TextureEncodingMimeType */ .JS.KTX2_ENCODING)return new t(n);const o=new Blob([n],{type:r});let c=URL.createObjectURL(o);switch(r){case"image/jpeg":c+="#.jpg";break;case"image/png":c+="#.png"}const s=new Image;if((0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("esri-iPhone"))return new Promise(((e,t)=>{const n=()=>{o(),e(s)},r=e=>{o(),t(e)},o=()=>{URL.revokeObjectURL(c),s.removeEventListener("load",n),s.removeEventListener("error",r)};s.addEventListener("load",n),s.addEventListener("error",r),s.src=c}));try{s.src=c,await s.decode()}catch(a){console.warn("Failed decoding HTMLImageElement")}return URL.revokeObjectURL(c),s}


/***/ }),

/***/ 91013:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Am: () => (/* binding */ O),
/* harmony export */   C7: () => (/* binding */ a),
/* harmony export */   JS: () => (/* binding */ u),
/* harmony export */   Mg: () => (/* binding */ t),
/* harmony export */   dd: () => (/* binding */ s),
/* harmony export */   it: () => (/* binding */ n),
/* harmony export */   s2: () => (/* binding */ e),
/* harmony export */   sf: () => (/* binding */ i)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var e,n,a,O,s,t,i,u;!function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(e||(e={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(n||(n={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(a||(a={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(O||(O={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(s||(s={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee"}(t||(t={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(i||(i={})),function(e){e.DDS_ENCODING="image/vnd-ms.dds",e.KTX2_ENCODING="image/ktx2",e.BASIS_ENCODING="image/x.basis"}(u||(u={}));


/***/ })

};
;