"use strict";
exports.id = 2038;
exports.ids = [2038];
exports.modules = {

/***/ 72038:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  toBinaryGLTF: () => (/* binding */ gltfexport_f)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(20909);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Point.js + 1 modules
var Point = __webpack_require__(78632);
;// ../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/glb.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var t;!function(t){t[t.JSON=1313821514]="JSON",t[t.BIN=5130562]="BIN"}(t||(t={}));class e{constructor(i,r){if(!i)throw new Error("GLB requires a JSON gltf chunk");this._length=e.HEADER_SIZE,this._length+=e.CHUNK_HEADER_SIZE;const n=this._textToArrayBuffer(i);if(this._length+=this._alignTo(n.byteLength,4),r&&(this._length+=e.CHUNK_HEADER_SIZE,this._length+=r.byteLength,r.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this._length),this._outView=new DataView(this.buffer),this._writeHeader();const h=this._writeChunk(n,12,t.JSON,32);r&&this._writeChunk(r,h,t.BIN)}_writeHeader(){this._outView.setUint32(0,e.MAGIC,!0),this._outView.setUint32(4,e.VERSION,!0),this._outView.setUint32(8,this._length,!0)}_writeChunk(t,e,i,r=0){const n=this._alignTo(t.byteLength,4);for(this._outView.setUint32(e,n,!0),this._outView.setUint32(e+=4,i,!0),this._writeArrayBuffer(this._outView.buffer,t,e+=4,0,t.byteLength),e+=t.byteLength;e%4;)r&&this._outView.setUint8(e,r),e++;return e}_writeArrayBuffer(t,e,i,r,n){new Uint8Array(t,i,n).set(new Uint8Array(e,r,n),0)}_textToArrayBuffer(t){return(new TextEncoder).encode(t).buffer}_alignTo(t,e){return e*Math.ceil(t/e)}}e.HEADER_SIZE=12,e.CHUNK_HEADER_SIZE=8,e.MAGIC=1179937895,e.VERSION=2;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var core_Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/MapUtils.js
var MapUtils = __webpack_require__(82256);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(92504);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/unitUtils.js
var unitUtils = __webpack_require__(92976);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat4.js
var mat4 = __webpack_require__(37046);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat4f64.js
var mat4f64 = __webpack_require__(56192);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/quat.js
var quat = __webpack_require__(76743);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/quatf64.js
var quatf64 = __webpack_require__(46991);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3.js
var vec3 = __webpack_require__(21839);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3f64.js
var vec3f64 = __webpack_require__(22279);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/MeshGeoreferencedRelativeVertexSpace.js
var MeshGeoreferencedRelativeVertexSpace = __webpack_require__(29317);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/MeshGeoreferencedVertexSpace.js
var MeshGeoreferencedVertexSpace = __webpack_require__(97557);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/MeshMaterialMetallicRoughness.js
var MeshMaterialMetallicRoughness = __webpack_require__(93413);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/meshUtils/georeference.js
var georeference = __webpack_require__(97519);
;// ../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/types.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var E,A,R,types_L,o,I,N;!function(E){E[E.External=0]="External",E[E.DataURI=1]="DataURI",E[E.GLB=2]="GLB"}(E||(E={})),function(E){E[E.External=0]="External",E[E.DataURI=1]="DataURI",E[E.GLB=2]="GLB"}(A||(A={})),function(E){E[E.ARRAY_BUFFER=34962]="ARRAY_BUFFER",E[E.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(R||(R={})),function(E){E.SCALAR="SCALAR",E.VEC2="VEC2",E.VEC3="VEC3",E.VEC4="VEC4",E.MAT2="MAT2",E.MAT3="MAT3",E.MAT4="MAT4"}(types_L||(types_L={})),function(E){E[E.POINTS=0]="POINTS",E[E.LINES=1]="LINES",E[E.LINE_LOOP=2]="LINE_LOOP",E[E.LINE_STRIP=3]="LINE_STRIP",E[E.TRIANGLES=4]="TRIANGLES",E[E.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",E[E.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(o||(o={})),function(E){E.OPAQUE="OPAQUE",E.MASK="MASK",E.BLEND="BLEND"}(I||(I={})),function(E){E[E.NoColor=0]="NoColor",E[E.FaceColor=1]="FaceColor",E[E.VertexColor=2]="VertexColor"}(N||(N={}));

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/enums.js
var enums = __webpack_require__(41746);
;// ../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/bufferview.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class bufferview_i{constructor(t,s,i,r,n){this._buffer=t,this._componentType=i,this._dataType=r,this._data=[],this._isFinalized=!1,this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,s.bufferViews||(s.bufferViews=[]),this.index=s.bufferViews.length,this._bufferView={buffer:t.index,byteLength:-1,target:n};const a=this._getElementSize();a>=4&&n!==R.ELEMENT_ARRAY_BUFFER&&(this._bufferView.byteStride=a),s.bufferViews.push(this._bufferView),this._numComponentsForDataType=this._calculateNumComponentsForDataType()}push(e){const t=this._data.length;if(this._data.push(e),this._accessorIndex>=0){const s=t%this._numComponentsForDataType,i=this._accessorMin[s];this._accessorMin[s]="number"!=typeof i?e:Math.min(i,e);const r=this._accessorMax[s];this._accessorMax[s]="number"!=typeof r?e:Math.max(r,e)}}get dataSize(){return this._data.length*this._sizeComponentType()}get byteSize(){function e(e,t){return t*Math.ceil(e/t)}return e(this.dataSize,4)}getByteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}get byteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}_createTypedArray(e,t){switch(this._componentType){case enums/* DataType */.pe.BYTE:return new Int8Array(e,t);case enums/* DataType */.pe.FLOAT:return new Float32Array(e,t);case enums/* DataType */.pe.SHORT:return new Int16Array(e,t);case enums/* DataType */.pe.UNSIGNED_BYTE:return new Uint8Array(e,t);case enums/* DataType */.pe.UNSIGNED_INT:return new Uint32Array(e,t);case enums/* DataType */.pe.UNSIGNED_SHORT:return new Uint16Array(e,t)}}writeOutToBuffer(e,t){this._createTypedArray(e,t).set(this._data)}writeAsync(e){if(this._asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this._asyncWritePromise=e.then((e=>{const t=new Uint8Array(e);for(let s=0;s<t.length;++s)this._data.push(t[s]);delete this._asyncWritePromise})),this._asyncWritePromise}startAccessor(e){if(this._accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this._accessorIndex=this._data.length,this._accessorAttribute=e;const t=this._numComponentsForDataType;this._accessorMin=new Array(t),this._accessorMax=new Array(t)}endAccessor(){if(this._accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const e=this._getElementSize(),t=this._numComponentsForDataType,i=(this._data.length-this._accessorIndex)/t;if(i%1)throw new Error("An accessor was ended with missing component values");for(let s=0;s<this._accessorMin.length;++s)"number"!=typeof this._accessorMin[s]&&(this._accessorMin[s]=0),"number"!=typeof this._accessorMax[s]&&(this._accessorMax[s]=0);const r={byteOffset:e*(this._accessorIndex/t),componentType:this._componentType,count:i,type:this._dataType,min:this._accessorMin,max:this._accessorMax,name:this._accessorAttribute};switch(this._accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this._componentType){case enums/* DataType */.pe.UNSIGNED_BYTE:case enums/* DataType */.pe.UNSIGNED_SHORT:r.normalized=!0}}return this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,r}get finalized(){return this._finalizedPromise?this._finalizedPromise:this._isFinalized?this._finalizedPromise=Promise.resolve():this._finalizedPromise=new Promise((e=>this._finalizedPromiseResolve=e))}async finalize(){const e=this._bufferView,t=this._buffer.getViewFinalizePromises(this);this._asyncWritePromise&&t.push(this._asyncWritePromise),await Promise.allSettled(t),this._isFinalized=!0,e.byteOffset=this.getByteOffset(),e.byteLength=this.dataSize,this._finalizedPromiseResolve&&this._finalizedPromiseResolve()}_getElementSize(){return this._sizeComponentType()*this._numComponentsForDataType}_sizeComponentType(){switch(this._componentType){case enums/* DataType */.pe.BYTE:case enums/* DataType */.pe.UNSIGNED_BYTE:return 1;case enums/* DataType */.pe.SHORT:case enums/* DataType */.pe.UNSIGNED_SHORT:return 2;case enums/* DataType */.pe.UNSIGNED_INT:case enums/* DataType */.pe.FLOAT:return 4}}_calculateNumComponentsForDataType(){switch(this._dataType){case types_L.SCALAR:return 1;case types_L.VEC2:return 2;case types_L.VEC3:return 3;case types_L.VEC4:case types_L.MAT2:return 4;case types_L.MAT3:return 9;case types_L.MAT4:return 16}}}

;// ../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/buffer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class i{constructor(e){this._gltf=e,this._bufferViews=[],this._isFinalized=!1,e.buffers||(e.buffers=[]),this.index=e.buffers.length;const i={byteLength:-1};e.buffers.push(i),this._buffer=i}addBufferView(i,t,r){if(this._finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const f=new bufferview_i(this,this._gltf,i,t,r);return this._bufferViews.push(f),f}getByteOffset(e){let i=0;for(const t of this._bufferViews){if(t===e)return i;i+=t.byteSize}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(e){const i=[];for(const t of this._bufferViews){if(e&&t===e)return i;i.push(t.finalized)}return i}getArrayBuffer(){if(!this._isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const e=this._getTotalSize(),i=new ArrayBuffer(e);let t=0;for(const r of this._bufferViews)r.writeOutToBuffer(i,t),t+=r.byteSize;return i}finalize(){if(this._finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this._finalizePromise=Promise.allSettled(this.getViewFinalizePromises()).then((()=>{this._isFinalized=!0;const e=this.getArrayBuffer();this._buffer.byteLength=e.byteLength,this._buffer.uri=e})),this._gltf.extras?.promises.push(this._finalizePromise),this._finalizePromise}_getTotalSize(){let e=0;for(const i of this._bufferViews)e+=i.byteSize;return e}}

;// ../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/geometry.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function geometry_r(n,t){if(n.components)for(const e of n.components)e.faces&&"smooth"===e.shading&&a(e,t)}function a(s,i){null==i.normal&&(i.normal=new Float32Array(i.position.length));const r=s.faces,{position:a,normal:c}=i,h=r.length/3;for(let o=0;o<h;++o){const s=3*r[3*o],i=3*r[3*o+1],p=3*r[3*o+2],h=(0,vec3.s)(f,a[s],a[s+1],a[s+2]),u=(0,vec3.s)(l,a[i],a[i+1],a[i+2]),g=(0,vec3.s)(m,a[p],a[p+1],a[p+2]),x=(0,vec3.f)(u,u,h),v=(0,vec3.f)(g,g,h),R=(0,vec3.b)(x,x,v);c[s]+=R[0],c[s+1]+=R[1],c[s+2]+=R[2],c[i]+=R[0],c[i+1]+=R[1],c[i+2]+=R[2],c[p]+=R[0],c[p+1]+=R[1],c[p+2]+=R[2]}for(let t=0;t<c.length;t+=3)(0,vec3.s)(p,c[t],c[t+1],c[t+2]),(0,vec3.n)(p,p),c[t]=p[0],c[t+1]=p[1],c[t+2]=p[2]}function geometry_c(n){const{vertexSpace:t}=n;if(t.isRelative)return t.getOriginPoint(n.spatialReference);const{extent:e}=n,o=e.xmax-e.width/2,s=e.ymax-e.height/2,r=e.zmin;return new Point/* default */.A({x:o,y:s,z:r,spatialReference:e.spatialReference})}const f=(0,vec3f64.c)(),l=(0,vec3f64.c)(),m=(0,vec3f64.c)(),p=(0,vec3f64.c)();

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/imageutils.js
var imageutils = __webpack_require__(10536);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/glTF/internal/resourceUtils.js
var resourceUtils = __webpack_require__(46629);
;// ../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/gltf.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const L=Logger/* default */.A.getLogger("gltf");class gltf_y{constructor(e,t,s){this.params={},this._materialMap=new Array,this._imageMap=new Map,this._textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:e.copyright,generator:e.generator},extras:{options:t,binChunkBuffer:null,promises:[]}},s&&(this.params=s),this._addScenes(e)}_addScenes(e){this.gltf.scene=e.defaultScene;const t=this.gltf.extras,s=t.options.bufferOutputType===E.GLB||t.options.imageOutputType===A.GLB;s&&(t.binChunkBuffer=new i(this.gltf)),e.forEachScene((e=>{this._addScene(e)})),s&&t.binChunkBuffer.finalize()}_addScene(e){this.gltf.scenes||(this.gltf.scenes=[]);const t={};e.name&&(t.name=e.name),e.forEachNode((e=>{t.nodes||(t.nodes=[]),t.nodes.push(...this._addNodes(e))})),this.gltf.scenes.push(t)}_addNodes(e){this.gltf.nodes||(this.gltf.nodes=[]);const t={};e.name&&(t.name=e.name);const s=e.translation;(0,vec3.h)(s,vec3f64.Z)||(t.translation=(0,vec3f64.g)(s));const r=e.rotation;(0,quat.j)(r,quatf64.I)||(t.rotation=(0,quatf64.b)(r));const i=e.scale;(0,vec3.h)(i,vec3f64.O)||(t.scale=(0,vec3f64.g)(i));const a=this.gltf.nodes.length;if(this.gltf.nodes.push(t),e.mesh&&e.mesh.vertexAttributes.position){const s=this._createMeshes(e.mesh),r=[a];if(1===s.length)this._addMesh(t,s[0]);else for(const e of s){const t={};this._addMesh(t,e),r.push(this.gltf.nodes.length),this.gltf.nodes.push(t)}return r}return e.forEachNode((e=>{t.children||(t.children=[]),t.children.push(...this._addNodes(e))})),[a]}_addMesh(e,t){this.gltf.meshes??=[];const s=this.gltf.meshes.length;this.gltf.meshes.push(t),e.mesh=s}_createMeshes(t){const s=this.gltf.extras,r=s.options.bufferOutputType===E.GLB;let n;n=r?s.binChunkBuffer:new i(this.gltf),this.params.origin||(this.params.origin=geometry_c(t));const{ignoreLocalTransform:l}=this.params,c=l?null:t.transform,{vertexSpace:h,spatialReference:u}=t,f=t.vertexAttributes;let p=null;if("local"===h.type){const e=(0,unitUtils/* getMetersPerCartesianUnitForSR */.KX)(u);(0,mat4.b)(F,c?.localMatrix??mat4f64.I,[e,e,e]),p=(0,georeference/* applyTransform */.NW)(f,F)}else{const e=l?h.isRelative?new MeshGeoreferencedRelativeVertexSpace/* default */.A({origin:(0,vec3f64.g)(h.origin)}):new MeshGeoreferencedVertexSpace/* default */.A:h;p=(0,georeference/* ungeoreferenceByTransform */.h7)(f,e,c,this.params.origin,{geographic:this.params.geographic,unit:"meters"})}if(null==p)throw new core_Error/* default */.A("Error during gltf export.");f.position&&p.position===f.position&&(p.position=f.position.slice()),f.normal&&p.normal===f.normal&&(p.normal=f.normal.slice()),f.tangent&&p.tangent===f.tangent&&(p.tangent=f.tangent.slice()),geometry_r(t,p),this._flipYZAxis(p);const _=n.addBufferView(enums/* DataType */.pe.FLOAT,types_L.VEC3,R.ARRAY_BUFFER);let b,I,N,B;p.normal&&(b=n.addBufferView(enums/* DataType */.pe.FLOAT,types_L.VEC3,R.ARRAY_BUFFER)),f.uv&&(I=n.addBufferView(enums/* DataType */.pe.FLOAT,types_L.VEC2,R.ARRAY_BUFFER)),p.tangent&&(N=n.addBufferView(enums/* DataType */.pe.FLOAT,types_L.VEC4,R.ARRAY_BUFFER)),f.color&&(B=n.addBufferView(enums/* DataType */.pe.UNSIGNED_BYTE,types_L.VEC4,R.ARRAY_BUFFER)),_.startAccessor("POSITION"),b&&b.startAccessor("NORMAL"),I&&I.startAccessor("TEXCOORD_0"),N&&N.startAccessor("TANGENT"),B&&B.startAccessor("COLOR_0");const C=p.position.length/3,{position:v,normal:L,tangent:y}=p,{color:j,uv:k}=f;for(let e=0;e<C;++e)_.push(v[3*e]),_.push(v[3*e+1]),_.push(v[3*e+2]),b&&null!=L&&(b.push(L[3*e]),b.push(L[3*e+1]),b.push(L[3*e+2])),I&&null!=k&&(I.push(k[2*e]),I.push(k[2*e+1])),N&&null!=y&&(N.push(y[4*e]),N.push(y[4*e+1]),N.push(y[4*e+2]),N.push(y[4*e+3])),B&&null!=j&&(B.push(j[4*e]),B.push(j[4*e+1]),B.push(j[4*e+2]),B.push(j[4*e+3]));const V=_.endAccessor(),D=this._addAccessor(_.index,V);let G,U,Y,P,z;if(b){const e=b.endAccessor();G=this._addAccessor(b.index,e)}if(I){const e=I.endAccessor();U=this._addAccessor(I.index,e)}if(N){const e=N.endAccessor();Y=this._addAccessor(N.index,e)}if(B){const e=B.endAccessor();P=this._addAccessor(B.index,e)}const Z=[];return t.components&&t.components.length>0&&t.components[0].faces?(z=n.addBufferView(enums/* DataType */.pe.UNSIGNED_INT,types_L.SCALAR,R.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(z,t.components,Z,D,G,U,Y,P)):this._addMeshVertexNonIndexed(t.components,Z,D,G,U,Y,P),_.finalize(),b&&b.finalize(),I&&I.finalize(),N&&N.finalize(),z&&z.finalize(),B&&B.finalize(),r||n.finalize(),Z}_flipYZAxis({position:e,normal:t,tangent:s}){this._flipYZBuffer(e,3),this._flipYZBuffer(t,3),this._flipYZBuffer(s,4)}_flipYZBuffer(e,t){if(null!=e)for(let s=1,r=2;s<e.length;s+=t,r+=t){const t=e[s],i=e[r];e[s]=i,e[r]=-t}}_addMaterial(e){if(null===e)return;const t=this._materialMap.indexOf(e);if(-1!==t)return t;this.gltf.materials||(this.gltf.materials=[]);const s={};switch(e.alphaMode){case"mask":s.alphaMode=I.MASK;break;case"auto":case"blend":s.alphaMode=I.BLEND}.5!==e.alphaCutoff&&(s.alphaCutoff=e.alphaCutoff),e.doubleSided&&(s.doubleSided=e.doubleSided),s.pbrMetallicRoughness={};const r=e=>e**2.1,i=e=>{const t=e.toRgba();return t[0]=r(t[0]/255),t[1]=r(t[1]/255),t[2]=r(t[2]/255),t};if(null!=e.color&&(s.pbrMetallicRoughness.baseColorFactor=i(e.color)),null!=e.colorTexture&&(s.pbrMetallicRoughness.baseColorTexture=this._createTextureInfo(e.colorTexture,e.colorTextureTransform)),null!=e.normalTexture&&(s.normalTexture=this._createTextureInfo(e.normalTexture,e.normalTextureTransform)),e instanceof MeshMaterialMetallicRoughness/* default */.A){if(null!=e.emissiveTexture&&(s.emissiveTexture=this._createTextureInfo(e.emissiveTexture,e.emissiveTextureTransform)),null!=e.emissiveColor){const t=i(e.emissiveColor);s.emissiveFactor=[t[0],t[1],t[2]]}null!=e.occlusionTexture&&(s.occlusionTexture=this._createTextureInfo(e.occlusionTexture,e.occlusionTextureTransform)),null!=e.metallicRoughnessTexture&&(s.pbrMetallicRoughness.metallicRoughnessTexture=this._createTextureInfo(e.metallicRoughnessTexture,e.metallicRoughnessTextureTransform)),s.pbrMetallicRoughness.metallicFactor=e.metallic,s.pbrMetallicRoughness.roughnessFactor=e.roughness}else s.pbrMetallicRoughness.metallicFactor=1,s.pbrMetallicRoughness.roughnessFactor=1,L.warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");const a=this.gltf.materials.length;return this.gltf.materials.push(s),this._materialMap.push(e),a}_createTextureInfo(e,t){const s={index:this._addTexture(e)};return t?(s.extensions||(s.extensions={}),s.extensions.KHR_texture_transform={scale:t.scale,offset:t.offset,rotation:(0,mathUtils/* deg2rad */.kU)(t.rotation)},s):s}_addTexture(e){const t=this.gltf.textures??[];return this.gltf.textures=t,(0,MapUtils/* getOrCreateMapValue */.tE)(this._textureMap,e,(()=>{const s={sampler:this._addSampler(e),source:this._addImage(e)},r=t.length;return t.push(s),r}))}_addImage(e){const t=this._imageMap.get(e);if(null!=t)return t;this.gltf.images||(this.gltf.images=[]);const s={};if(e.url)s.uri=e.url;else{const t=e.data;s.extras=t;for(let e=0;e<this.gltf.images.length;++e)if(t===this.gltf.images[e].extras)return e;const r=this.gltf.extras;switch(r.options.imageOutputType){case A.GLB:{const e=r.binChunkBuffer.addBufferView(enums/* DataType */.pe.UNSIGNED_BYTE,types_L.SCALAR);if((0,resourceUtils/* isEncodedMeshTexture */.x3)(t))null!=t.data&&e.writeOutToBuffer(t.data,0);else{const r=(0,imageutils/* imageToArrayBuffer */.ip)(t).then((({data:e,type:t})=>(s.mimeType=t,e)));e.writeAsync(r).then((()=>{e.finalize()}))}s.bufferView=e.index;break}case A.DataURI:if((0,resourceUtils/* isEncodedMeshTexture */.x3)(t)){L.warnOnce("Image export for basis compressed textures not available.");break}s.uri=(0,imageutils/* imageToDataURI */.NH)(t);break;default:if((0,resourceUtils/* isEncodedMeshTexture */.x3)(t)){L.warnOnce("Image export for basis compressed textures not available.");break}r.promises.push((0,imageutils/* imageToArrayBuffer */.ip)(t).then((({data:e,type:t})=>{s.uri=e,s.mimeType=t})))}}const r=this.gltf.images.length;return this.gltf.images.push(s),this._imageMap.set(e,r),r}_addSampler(e){this.gltf.samplers||(this.gltf.samplers=[]);let t=enums/* TextureWrapMode */.pF.REPEAT,s=enums/* TextureWrapMode */.pF.REPEAT;if("string"==typeof e.wrap)switch(e.wrap){case"clamp":t=enums/* TextureWrapMode */.pF.CLAMP_TO_EDGE,s=enums/* TextureWrapMode */.pF.CLAMP_TO_EDGE;break;case"mirror":t=enums/* TextureWrapMode */.pF.MIRRORED_REPEAT,s=enums/* TextureWrapMode */.pF.MIRRORED_REPEAT}else{switch(e.wrap.vertical){case"clamp":s=enums/* TextureWrapMode */.pF.CLAMP_TO_EDGE;break;case"mirror":s=enums/* TextureWrapMode */.pF.MIRRORED_REPEAT}switch(e.wrap.horizontal){case"clamp":t=enums/* TextureWrapMode */.pF.CLAMP_TO_EDGE;break;case"mirror":t=enums/* TextureWrapMode */.pF.MIRRORED_REPEAT}}const r={wrapS:t,wrapT:s};for(let a=0;a<this.gltf.samplers.length;++a)if(JSON.stringify(r)===JSON.stringify(this.gltf.samplers[a]))return a;const i=this.gltf.samplers.length;return this.gltf.samplers.push(r),i}_addAccessor(e,t){this.gltf.accessors||(this.gltf.accessors=[]);const s={bufferView:e,byteOffset:t.byteOffset,componentType:t.componentType,count:t.count,type:t.type,min:t.min,max:t.max,name:t.name};t.normalized&&(s.normalized=!0);const r=this.gltf.accessors.length;return this.gltf.accessors.push(s),r}_addMeshVertexIndexed(e,t,s,r,i,a,o,n){const l=new Map;for(const c of t){e.startAccessor("INDICES");for(let s=0;s<c.faces.length;++s)e.push(c.faces[s]);const t=e.endAccessor(),h={attributes:{POSITION:r},indices:this._addAccessor(e.index,t),material:this._addMaterial(c.material)};i&&"flat"!==c.shading&&(h.attributes.NORMAL=i),a&&(h.attributes.TEXCOORD_0=a),o&&"flat"!==c.shading&&(h.attributes.TANGENT=o),n&&(h.attributes.COLOR_0=n);const u=l.get(c.name);if(u)u.primitives.push(h);else{const e={name:c.name,primitives:[h]};l.set(c.name,e),s.push(e)}}}_addMeshVertexNonIndexed(e,t,s,r,i,a,o){const n={primitives:[]};t.push(n);const l={attributes:{POSITION:s}};r&&(l.attributes.NORMAL=r),i&&(l.attributes.TEXCOORD_0=i),a&&(l.attributes.TANGENT=a),o&&(l.attributes.COLOR_0=o),e&&(l.material=this._addMaterial(e[0].material)),n.primitives.push(l)}}const F=(0,mat4f64.a)();

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
;// ../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/asset.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class s{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(e){if(this._scenes.includes(e))throw new Error("Scene already added");this._scenes.push(e)}removeScene(s){(0,arrayUtils/* remove */.TF)(this._scenes,s)}forEachScene(e){this._scenes.forEach(e)}}

;// ../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/node.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class node_i{constructor(s){this.mesh=s,this.name="",this.translation=(0,vec3f64.c)(),this.rotation=(0,quatf64.a)(),this.scale=(0,vec3f64.g)(vec3f64.O),this._nodes=[]}addNode(s){if(this._nodes.includes(s))throw new Error("Node already added");this._nodes.push(s)}forEachNode(s){this._nodes.forEach(s)}set rotationAngles(t){(0,quat.k)(this.rotation,t[0],t[1],t[2])}}

;// ../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/index.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const gltf_a="model.gltf",gltf_f="model.glb";async function u(u,p,m){const c=new gltf_y(u,p=p||{},m);let l=c.params;l?l.origin||(l.origin=new Point/* default */.A({x:-1,y:-1,z:-1})):l={origin:new Point/* default */.A({x:-1,y:-1,z:-1})};const g=l.origin,y=c.gltf,d=y.extras?.promises??[];let j=1,x=1,b=null;await Promise.allSettled(d);const w={origin:g};delete y.extras;const B="number"==typeof p.jsonSpacing?p.jsonSpacing:4,h=JSON.stringify(y,((e,t)=>{if("extras"!==e){if(t instanceof ArrayBuffer){if((0,imageutils/* isArrayBufferPNG */.vG)(t))switch(p.imageOutputType){case A.DataURI:case A.GLB:break;case A.External:default:{const e=`img${x}.png`;return x++,w[e]=t,e}}switch(p.bufferOutputType){case E.DataURI:return (0,imageutils/* encodeBase64DataUri */.sU)(t);case E.GLB:if(b)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(b=t);case E.External:default:{const e=`data${j}.bin`;return j++,w[e]=t,e}}}return t}}),B);return p.bufferOutputType===E.GLB||p.imageOutputType===A.GLB?w[gltf_f]=new e(h,b).buffer:w[gltf_a]=h,w}function gltf_p(e,t){return u(e,{bufferOutputType:E.GLB,imageOutputType:A.GLB,jsonSpacing:0},t)}

;// ../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/scene.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class scene_d{constructor(){this.name="",this._nodes=[]}addNode(d){if(this._nodes.includes(d))throw new Error("Node already added");this._nodes.push(d)}forEachNode(d){this._nodes.forEach(d)}}

;// ../node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/gltfexport.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class gltfexport_s{constructor(e,o){this._file={type:"model/gltf-binary",data:e},this.origin=o}buffer(){return Promise.resolve(this._file)}download(o){(0,urlUtils/* downloadBlobAsFile */.IZ)(new Blob([this._file.data],{type:this._file.type}),o)}}function gltfexport_f(e,f){const d=new s,l=new scene_d;return d.addScene(l),l.addNode(new node_i(e)),gltf_p(d,f).then((e=>new gltfexport_s(e[gltf_f],e.origin)))}


/***/ }),

/***/ 10536:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NH: () => (/* binding */ a),
/* harmony export */   ip: () => (/* binding */ r),
/* harmony export */   pR: () => (/* binding */ o),
/* harmony export */   sU: () => (/* binding */ c),
/* harmony export */   vG: () => (/* binding */ g)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98849);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20909);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function a(e){const t=o(e);return null!=t?t.toDataURL():""}async function r(t){const n=o(t);if(null==n)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("imageToArrayBuffer","Unsupported image type");const a=await i(t),r=await new Promise((e=>n.toBlob(e,a)));if(!r)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("imageToArrayBuffer","Failed to encode image");return{data:await r.arrayBuffer(),type:a}}async function i(e){if(!(e instanceof HTMLImageElement))return"image/png";const a=e.src;if((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isDataProtocol */ .DB)(a)){const e=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .dataComponents */ .r$)(a);return"image/jpeg"===e?.mediaType?e.mediaType:"image/png"}return/\.png$/i.test(a)?"image/png":/\.(jpg|jpeg)$/i.test(a)?"image/jpeg":"image/png"}function o(e){if(e instanceof HTMLCanvasElement)return e;if(e instanceof HTMLVideoElement)return null;const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");return e instanceof HTMLImageElement?n.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&n.putImageData(e,0,0),t}function c(e){const t=[],n=new Uint8Array(e);for(let a=0;a<n.length;a++)t.push(String.fromCharCode(n[a]));return"data:application/octet-stream;base64,"+btoa(t.join(""))}function g(e){if(e.byteLength<8)return!1;const t=new Uint8Array(e);return 137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]&&13===t[4]&&10===t[5]&&26===t[6]&&10===t[7]}


/***/ }),

/***/ 46629:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KB: () => (/* binding */ n),
/* harmony export */   Xi: () => (/* binding */ t),
/* harmony export */   pn: () => (/* binding */ o),
/* harmony export */   x3: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91013);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class t{constructor(t){this.data=t,this.type="encoded-mesh-texture",this.encoding=_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .TextureEncodingMimeType */ .JS.KTX2_ENCODING}}function r(e){return"encoded-mesh-texture"===e?.type}async function n(e){const t=new Blob([e]),r=await t.text();return JSON.parse(r)}async function o(r,n){if(n===_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .TextureEncodingMimeType */ .JS.KTX2_ENCODING)return new t(r);const o=new Blob([r],{type:n}),c=URL.createObjectURL(o),s=new Image;if((0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("esri-iPhone"))return new Promise(((e,t)=>{const r=()=>{o(),e(s)},n=e=>{o(),t(e)},o=()=>{URL.revokeObjectURL(c),s.removeEventListener("load",r),s.removeEventListener("error",n)};s.addEventListener("load",r),s.addEventListener("error",n),s.src=c}));try{s.src=c,await s.decode()}catch(i){console.warn("Failed decoding HTMLImageElement")}return URL.revokeObjectURL(c),s}


/***/ })

};
;