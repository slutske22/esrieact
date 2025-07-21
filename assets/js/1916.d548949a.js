"use strict";
exports.id = 1916;
exports.ids = [1916];
exports.modules = {

/***/ 17504:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ m),
/* harmony export */   b: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1110);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66012);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_ObjectAndLayerIdColor_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33045);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39739);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_TerrainDepthTest_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23233);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34328);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89002);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63592);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1411);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72196);
/* harmony import */ var _views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(50645);
/* harmony import */ var _views_3d_webgl_engine_shaders_OutputColorHighlightOID_glsl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19274);
/* harmony import */ var _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(96028);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function c(c){const m=new _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_12__/* .ShaderBuilder */ .N5,{vertex:u,fragment:w,attributes:p,varyings:f}=m,{vvColor:C,hasVertexColors:h}=c;return (0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_7__/* .addProjViewLocalOrigin */ .NB)(u,c),m.include(_views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .Transform */ .d,c),m.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .VertexColor */ .c,c),m.include(_views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_5__/* .VisualVariables */ .A,c),m.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_ObjectAndLayerIdColor_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .ObjectAndLayerIdColor */ .g,c),w.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .SliceDraw */ .HQ,c),m.include(_views_3d_webgl_engine_shaders_OutputColorHighlightOID_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .outputColorHighlightOID */ .z,c),m.include(_views_3d_webgl_engine_core_shaderLibrary_shading_TerrainDepthTest_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .terrainDepthTest */ .Z,c),p.add(_views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_10__/* .VertexAttribute */ .r.POSITION,"vec3"),C&&p.add(_views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_10__/* .VertexAttribute */ .r.COLORFEATUREATTRIBUTE,"float"),h||f.add("vColor","vec4"),f.add("vpos","vec3",{invariant:!0}),u.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_8__/* .Float4PassUniform */ .E("uColor",(e=>e.color))),u.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_9__/* .glsl */ .H)`
      vpos = position;
      forwardNormalizedVertexColor();
      forwardObjectAndLayerIdColor();

      ${h?"vColor *= uColor;":C?"vColor = uColor * interpolateVVColor(colorFeatureAttribute);":"vColor = uColor;"}
      forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
      gl_Position = transformPosition(proj, view, vpos);`),w.include(_views_3d_webgl_engine_core_shaderLibrary_util_ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .ColorConversion */ .a),w.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_9__/* .glsl */ .H)`discardBySlice(vpos);
discardByTerrainDepth();
outputColorHighlightOID(vColor, vpos, vColor.rgb);`),m}const m=Object.freeze(Object.defineProperty({__proto__:null,build:c},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 69726:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ _),
/* harmony export */   b: () => (/* binding */ B),
/* harmony export */   c: () => (/* binding */ M),
/* harmony export */   f: () => (/* binding */ V)
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60704);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59646);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28152);
/* harmony import */ var _geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99817);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55274);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1110);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_ObjectAndLayerIdColor_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33045);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_hud_AlignPixel_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16917);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_hud_HUD_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97085);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_hud_HUDOcclusionPass_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36985);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_hud_HUDVisibility_glsl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3097);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1361);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(34328);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(89002);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(70224);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_ScreenSizePerspective_glsl_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6916);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(63592);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(54473);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float4BindUniform_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(45393);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float4DrawUniform_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(84674);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1411);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_FloatBindUniform_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(17983);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(35449);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(72196);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Texture2DBindUniform_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(96390);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(79856);
/* harmony import */ var _views_3d_webgl_engine_lib_OITPass_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(69338);
/* harmony import */ var _views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(50645);
/* harmony import */ var _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(96028);
/* harmony import */ var _webscene_support_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(63199);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function B(e){const i=new _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_28__/* .ShaderBuilder */ .N5,{signedDistanceFieldEnabled:B,occlusionTestEnabled:H,horizonCullingEnabled:V,pixelSnappingEnabled:_,hasScreenSizePerspective:q,debugDrawLabelBorder:k,vvSize:G,vvColor:N,hasRotation:Z,occludedFragmentFade:J,sampleSignedDistanceFieldTexelCenter:K}=e;i.include(_views_3d_webgl_engine_core_shaderLibrary_hud_HUD_glsl_js__WEBPACK_IMPORTED_MODULE_8__/* .HUD */ .Q,e),i.vertex.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_5__/* .RejectBySlice */ .rA,e);const{occlusionPass:Q,output:W,oitPass:X}=e;if(Q)return i.include(_views_3d_webgl_engine_core_shaderLibrary_hud_HUDOcclusionPass_glsl_js__WEBPACK_IMPORTED_MODULE_9__/* .HUDOcclusionPass */ .I,e),i;const{vertex:Y,fragment:ee}=i;i.include(_views_3d_webgl_engine_core_shaderLibrary_util_ScreenSizePerspective_glsl_js__WEBPACK_IMPORTED_MODULE_15__/* .ScreenSizePerspective */ .Y6),i.include(_views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_12__/* .VisualVariables */ .A,e),i.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_ObjectAndLayerIdColor_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .ObjectAndLayerIdColor */ .g,e),H&&i.include(_views_3d_webgl_engine_core_shaderLibrary_hud_HUDVisibility_glsl_js__WEBPACK_IMPORTED_MODULE_10__/* .HUDVisibility */ .y),ee.include(_views_3d_webgl_engine_core_shaderLibrary_util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .RgbaFloatEncoding */ .W),ee.include(_views_3d_webgl_engine_core_shaderLibrary_util_ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .ColorConversion */ .a),i.varyings.add("vcolor","vec4"),i.varyings.add("vtc","vec2"),i.varyings.add("vsize","vec2");const oe=W===_views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_4__/* .ShaderOutput */ .V.Highlight,ie=oe&&H;ie&&i.varyings.add("voccluded","float"),Y.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Float4BindUniform_js__WEBPACK_IMPORTED_MODULE_18__/* .Float4BindUniform */ .I("viewport",(e=>e.camera.fullViewport)),new _views_3d_webgl_engine_core_shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_17__/* .Float2PassUniform */ .G("screenOffset",((e,i)=>(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .hZ)(R,2*e.screenOffset[0]*i.camera.pixelRatio,2*e.screenOffset[1]*i.camera.pixelRatio))),new _views_3d_webgl_engine_core_shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_17__/* .Float2PassUniform */ .G("anchorPosition",(e=>M(e))),new _views_3d_webgl_engine_core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_20__/* .Float4PassUniform */ .E("materialColor",(e=>e.color)),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_22__/* .FloatPassUniform */ .m("materialRotation",(e=>e.rotation)),new _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_25__/* .Texture2DPassUniform */ .N("tex",(e=>e.texture))),(0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_16__/* .addPixelRatio */ .Nz)(Y),B&&(Y.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_20__/* .Float4PassUniform */ .E("outlineColor",(e=>e.outlineColor))),ee.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_20__/* .Float4PassUniform */ .E("outlineColor",(e=>U(e)?e.outlineColor:_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__/* .ZEROS */ .uY)),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_22__/* .FloatPassUniform */ .m("outlineSize",(e=>U(e)?e.outlineSize:0)))),V&&Y.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Float4DrawUniform_js__WEBPACK_IMPORTED_MODULE_19__/* .Float4DrawUniform */ .V("pointDistanceSphere",((e,o)=>{const i=o.camera.eye,r=e.origin;return (0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__/* .fromValues */ .fA)(r[0]-i[0],r[1]-i[1],r[2]-i[2],_geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_3__/* .earth */ .$O.radius)}))),_&&Y.include(_views_3d_webgl_engine_core_shaderLibrary_hud_AlignPixel_glsl_js__WEBPACK_IMPORTED_MODULE_7__/* .AlignPixel */ .K),q&&((0,_views_3d_webgl_engine_core_shaderLibrary_util_ScreenSizePerspective_glsl_js__WEBPACK_IMPORTED_MODULE_15__/* .addScreenSizePerspective */ .pM)(Y),(0,_views_3d_webgl_engine_core_shaderLibrary_util_ScreenSizePerspective_glsl_js__WEBPACK_IMPORTED_MODULE_15__/* .addScreenSizePerspectiveAlignment */ .OH)(Y)),k&&i.varyings.add("debugBorderCoords","vec4"),i.attributes.add(_views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_27__/* .VertexAttribute */ .r.UVI,"vec2"),i.attributes.add(_views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_27__/* .VertexAttribute */ .r.COLOR,"vec4"),i.attributes.add(_views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_27__/* .VertexAttribute */ .r.SIZE,"vec2"),i.attributes.add(_views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_27__/* .VertexAttribute */ .r.ROTATION,"float"),(G||N)&&i.attributes.add(_views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_27__/* .VertexAttribute */ .r.FEATUREATTRIBUTE,"vec4"),Y.code.add(V?(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H)`bool behindHorizon(vec3 posModel) {
vec3 camToEarthCenter = pointDistanceSphere.xyz - localOrigin;
vec3 camToPos = pointDistanceSphere.xyz + posModel;
float earthRadius = pointDistanceSphere.w;
float a = dot(camToPos, camToPos);
float b = dot(camToPos, camToEarthCenter);
float c = dot(camToEarthCenter, camToEarthCenter) - earthRadius * earthRadius;
return b > 0.0 && b < a && b * b  > a * c;
}`:(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H)`bool behindHorizon(vec3 posModel) { return false; }`),Y.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H)`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      // Project outside of clip plane
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
      return;
    }

    if (behindHorizon(projectAux.posModel)) {
      // Project outside of clip plane
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
      return;
    }

    vec2 inputSize;
    ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__.If)(q,(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H)`
        inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H)`
        inputSize = size;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__.If)(G,(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H)`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);

    ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__.If)(H,(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H)`
    bool visible = testHUDVisibility(posProj);
    if (!visible) {
      vtc = vec2(0.0);
      ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__.If)(k,"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);")}
      return;
    }`)}
    ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__.If)(ie,(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H)`voccluded = visible ? 0.0 : 1.0;`)}
  `);const re=(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H)`
      vec2 uvi1 = vec2(uvi.x < 0.0 ? 1.0 : 0.0, uvi.y < 0.0 ? 1.0 : 0.0);
      vec2 uv = abs(uvi + uvi1);
      vec2 texSize = vec2(textureSize(tex, 0));
      uv.x = uv.x >= ${I} ? 1.0 : uv.x / texSize.x;
      uv.y = uv.y >= ${I} ? 1.0 : uv.y / texSize.y;
      quadOffset.xy = (uvi1 - anchorPosition) * 2.0 * combinedSize;

      ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__.If)(Z,(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H)`
          float angle = radians(materialRotation + rotation);
          float cosAngle = cos(angle);
          float sinAngle = sin(angle);
          mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

          quadOffset.xy = rotate * quadOffset.xy;
        `)}

      quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,te=_?B?(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H)`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H)`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H)`posProj += quadOffset;`;Y.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H)`
    ${re}
    ${N?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__.If)(W===_views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_4__/* .ShaderOutput */ .V.ObjectAndLayerIdColor,(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H)`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < ${_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H.float(_webscene_support_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_29__/* .alphaCutoff */ .Q)};
    ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__.If)(B,`alphaDiscard = alphaDiscard && outlineColor.a < ${_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H.float(_webscene_support_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_29__/* .alphaCutoff */ .Q)};`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${te}
      gl_Position = posProj;
    }

    vtc = uv;

    ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__.If)(k,(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H)`debugBorderCoords = vec4(uv01, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `),ee.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_25__/* .Texture2DPassUniform */ .N("tex",(e=>e.texture))),J&&!oe&&ee.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Texture2DBindUniform_js__WEBPACK_IMPORTED_MODULE_24__/* .Texture2DBindUniform */ .x("depthMap",(e=>e.mainDepth)),new _views_3d_webgl_engine_core_shaderModules_FloatBindUniform_js__WEBPACK_IMPORTED_MODULE_21__/* .FloatBindUniform */ .U("occludedOpacity",(e=>e.hudOccludedFragmentOpacity)));const le=k?(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H)`(isBorder > 0.0 ? 0.0 : ${_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H.float(_webscene_support_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_29__/* .alphaCutoff */ .Q)})`:_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H.float(_webscene_support_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_29__/* .alphaCutoff */ .Q),ae=(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H)`
    ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__.If)(k,(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H)`float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`)}

    vec2 samplePos = vtc;

    ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__.If)(K,(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H)`
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`)}

    ${B?(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H)`
      vec4 fillPixelColor = vcolor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgbaTofloat(texture(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${le} ||
          fillPixelColor.a + outlinePixelColor.a < ${_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H.float(_webscene_support_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_29__/* .alphaCutoff */ .Q)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__.If)(!oe,(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H)`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < ${le}) {
          discard;
        }

        ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__.If)(!oe,(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H)`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H)`
          vec4 texColor = texture(tex, samplePos, -0.5);
          if (texColor.a < ${le}) {
            discard;
          }
          ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__.If)(!oe,(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H)`fragColor = texColor * premultiplyAlpha(vcolor);`)}
          `}

    ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__.If)(J&&!oe,(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H)`
        float zSample = texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x;
        if (zSample < gl_FragCoord.z) {
          fragColor *= occludedOpacity;
        }
        `)}

    ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__.If)(!oe&&k,(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H)`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`)}
  `;switch(W){case _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_4__/* .ShaderOutput */ .V.Color:case _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_4__/* .ShaderOutput */ .V.ColorEmission:i.outputs.add("fragColor","vec4",0),W===_views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_4__/* .ShaderOutput */ .V.ColorEmission&&i.outputs.add("fragEmission","vec4",1),X===_views_3d_webgl_engine_lib_OITPass_js__WEBPACK_IMPORTED_MODULE_26__/* .OITPass */ .Y.ColorAlpha&&i.outputs.add("fragAlpha","float",W===_views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_4__/* .ShaderOutput */ .V.ColorEmission?2:1),ee.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H)`
        ${ae}
        ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__.If)(X===_views_3d_webgl_engine_lib_OITPass_js__WEBPACK_IMPORTED_MODULE_26__/* .OITPass */ .Y.FrontFace,(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H)`fragColor.rgb /= fragColor.a;`)}
        ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__.If)(W===_views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_4__/* .ShaderOutput */ .V.ColorEmission,(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H)`fragEmission = vec4(0.0);`)}
        ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__.If)(X===_views_3d_webgl_engine_lib_OITPass_js__WEBPACK_IMPORTED_MODULE_26__/* .OITPass */ .Y.ColorAlpha,(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H)`fragAlpha = fragColor.a;`)}`);break;case _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_4__/* .ShaderOutput */ .V.ObjectAndLayerIdColor:ee.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H)`
        ${ae}
        outputObjectAndLayerIdColor();`);break;case _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_4__/* .ShaderOutput */ .V.Highlight:i.include(_views_3d_webgl_engine_core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .OutputHighlight */ .Q,e),ee.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H)`
        ${ae}
        outputHighlight(${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__.If)(ie,(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H)`voccluded == 1.0`,(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H)`false`)});`)}return i}function U(e){return e.outlineColor[3]>0&&e.outlineSize>0}function M(o){return o.textureIsSignedDistanceField?H(o.anchorPosition,o.distanceFieldBoundingBox,R):(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__/* .copy */ .C)(R,o.anchorPosition),R}function H(e,i,r){(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .hZ)(r,e[0]*(i[2]-i[0])+i[0],e[1]*(i[3]-i[1])+i[1])}const R=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)(),V=32e3,I=_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .glsl */ .H.float(V),_=Object.freeze(Object.defineProperty({__proto__:null,build:B,calculateAnchorPosition:M,fullUV:V},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 20072:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ a),
/* harmony export */   b: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_HighlightCellGridScreenSpacePass_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4388);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_HighlightReadBitmap_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46653);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float2DrawUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96320);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35449);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72196);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_IntegerPassUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3445);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79856);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Texture2DUintPassUniform_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7568);
/* harmony import */ var _HighlightDownsample_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(61068);
/* harmony import */ var _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(96028);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function c(){const c=new _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_9__/* .ShaderBuilder */ .N5;c.include(_views_3d_webgl_engine_core_shaderLibrary_HighlightCellGridScreenSpacePass_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .HighlightCellGridScreenSpacePass */ .Q);const{fragment:a}=c;return a.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_6__/* .Texture2DPassUniform */ .N("blurInput",(e=>e.highlightBlurTexture)),new _views_3d_webgl_engine_core_shaderModules_Float2DrawUniform_js__WEBPACK_IMPORTED_MODULE_2__/* .Float2DrawUniform */ .t("blurSize",(e=>e.blurSize)),new _views_3d_webgl_engine_core_shaderModules_Texture2DUintPassUniform_js__WEBPACK_IMPORTED_MODULE_7__/* .Texture2DUintPassUniform */ .R("highlightTexture",(e=>e.highlightTexture)),new _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_6__/* .Texture2DPassUniform */ .N("highlightOptionsTexture",(e=>e.highlightOptionsTexture)),new _views_3d_webgl_engine_core_shaderModules_IntegerPassUniform_js__WEBPACK_IMPORTED_MODULE_5__/* .IntegerPassUniform */ .c("highlightLevel",(e=>e.highlightLevel)),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_3__/* .FloatPassUniform */ .m("occludedIntensityFactor",(e=>e.occludedFactor))),a.constants.add("inner","float",1-(_HighlightDownsample_glsl_js__WEBPACK_IMPORTED_MODULE_8__.o-_HighlightDownsample_glsl_js__WEBPACK_IMPORTED_MODULE_8__.b)/_HighlightDownsample_glsl_js__WEBPACK_IMPORTED_MODULE_8__.o),c.include(_views_3d_webgl_engine_core_shaderLibrary_HighlightReadBitmap_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .HighlightReadBitmap */ .y),a.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .glsl */ .H)`vec2 highlightTextureSize = vec2(textureSize(highlightTexture,0));
vec2 uv = sUV;
vec2 center = texture(blurInput, uv).rg;
vec2 blurredHighlightValue = (vOutlinePossible == 0.0)
? center
: center * 0.204164
+ texture(blurInput, uv + blurSize * 1.407333).rg * 0.304005
+ texture(blurInput, uv - blurSize * 1.407333).rg * 0.304005
+ texture(blurInput, uv + blurSize * 3.294215).rg * 0.093913
+ texture(blurInput, uv - blurSize * 3.294215).rg * 0.093913;
float highlightIntensity = blurredHighlightValue.r;
float occlusionWeight = blurredHighlightValue.g;
if (highlightIntensity <= 0.01) {
discard;
}
vec4 fillColor    = texelFetch(highlightOptionsTexture, ivec2(highlightLevel, 0), 0);
vec4 outlineColor = texelFetch(highlightOptionsTexture, ivec2(highlightLevel, 1), 0);
uvec2 centerTexel = texelFetch(highlightTexture, ivec2(uv * highlightTextureSize), 0).rg;
uint centerBits = readLevelBits(centerTexel, highlightLevel);
bool centerFilled = (centerBits & 1u) == 1u;
bool centerOccluded = (centerBits & 3u) == 3u;
bool occluded = centerOccluded || (0.5 * highlightIntensity < occlusionWeight);
float occlusionFactor = occluded ? occludedIntensityFactor : 1.0;
float outlineFactor = centerFilled ? 1.0 : smoothstep(0.0, inner, highlightIntensity);
float fillFactor = centerFilled ? 1.0 : 0.0;
vec4 baseColor = mix(outlineColor, fillColor, fillFactor);
float intensity = baseColor.a * occlusionFactor * outlineFactor;
fragColor = vec4(baseColor.rgb, intensity);`),c}const a=Object.freeze(Object.defineProperty({__proto__:null,build:c},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 63601:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ o),
/* harmony export */   a: () => (/* binding */ g),
/* harmony export */   b: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59646);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_HighlightCellGridScreenSpacePass_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4388);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float2DrawUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96320);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72196);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52293);
/* harmony import */ var _views_webgl_NoParameters_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22005);
/* harmony import */ var _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96028);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class o extends _views_webgl_NoParameters_js__WEBPACK_IMPORTED_MODULE_5__/* .NoParameters */ .Y{constructor(){super(...arguments),this.blurSize=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_0__/* .create */ .vt)()}}function n(){const e=new _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_6__/* .ShaderBuilder */ .N5;return e.include(_views_3d_webgl_engine_core_shaderLibrary_HighlightCellGridScreenSpacePass_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .HighlightCellGridScreenSpacePass */ .Q),e.outputs.add("fragHighlight","vec2",0),e.fragment.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Float2DrawUniform_js__WEBPACK_IMPORTED_MODULE_2__/* .Float2DrawUniform */ .t("blurSize",(e=>e.blurSize)),new _views_3d_webgl_engine_core_shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_4__/* .Texture2DDrawUniform */ .o("blurInput",(e=>e.blurInput))).main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`vec2 highlightTextureSize = vec2(textureSize(blurInput,0));
vec2 center = texture(blurInput, sUV).rg;
if (vOutlinePossible == 0.0) {
fragHighlight = center;
} else {
vec2 sum = center * 0.204164;
sum += texture(blurInput, sUV + blurSize * 1.407333).rg * 0.304005;
sum += texture(blurInput, sUV - blurSize * 1.407333).rg * 0.304005;
sum += texture(blurInput, sUV + blurSize * 3.294215).rg * 0.093913;
sum += texture(blurInput, sUV - blurSize * 3.294215).rg * 0.093913;
fragHighlight = sum;
}`),e}const g=Object.freeze(Object.defineProperty({__proto__:null,HighlightBlurDrawParameters:o,build:n},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 61068:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ o),
/* harmony export */   a: () => (/* binding */ a),
/* harmony export */   b: () => (/* binding */ s),
/* harmony export */   c: () => (/* binding */ c),
/* harmony export */   g: () => (/* binding */ u),
/* harmony export */   o: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ScreenSpacePass_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16961);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72196);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Texture2DUintPassUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7568);
/* harmony import */ var _views_webgl_NoParameters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22005);
/* harmony import */ var _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96028);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class o extends _views_webgl_NoParameters_js__WEBPACK_IMPORTED_MODULE_3__/* .NoParameters */ .Y{}function c(){const l=new _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_4__/* .ShaderBuilder */ .N5,{outputs:o,fragment:c}=l;return l.include(_views_3d_webgl_engine_core_shaderLibrary_ScreenSpacePass_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .ScreenSpacePass */ .c),c.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Texture2DUintPassUniform_js__WEBPACK_IMPORTED_MODULE_2__/* .Texture2DUintPassUniform */ .R("highlightTexture",(e=>e.highlightTexture))),c.constants.add("outlineWidth","int",Math.ceil(n)),c.constants.add("cellSize","int",u),o.add("fragGrid","uvec2"),c.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`ivec2 inputTextureSize = textureSize(highlightTexture, 0);
ivec2 cellBottomLeftCornerInput = ivec2(ivec2(floor(gl_FragCoord.xy) * vec2(cellSize)));
ivec2 coordMid =  cellBottomLeftCornerInput + ivec2(cellSize >> 1);
uvec2 centreTexel = texelFetch(highlightTexture, coordMid, 0).rg & uvec2(0x55u);
float marginSquare = float(outlineWidth*outlineWidth);
uvec2 outputValue = centreTexel & uvec2(0x55u);
for(int y = -outlineWidth; y <= cellSize + outlineWidth; y+=2) {
int dy = y < 0 ? -y : y > cellSize ? y-cellSize : 0;
int xMargin = dy > 0 ? int(ceil(sqrt(marginSquare - float(dy*dy)))) : outlineWidth;
for(int x = -xMargin; x <= cellSize + xMargin; x+=2) {
ivec2 coord = cellBottomLeftCornerInput + ivec2(x, y);
uvec2[4] texels = uvec2[4] (
texelFetch(highlightTexture,coord+ivec2(0,0),0).rg & uvec2(0x55u),
texelFetch(highlightTexture,coord+ivec2(1,0),0).rg & uvec2(0x55u),
texelFetch(highlightTexture,coord+ivec2(0,1),0).rg & uvec2(0x55u),
texelFetch(highlightTexture,coord+ivec2(1,1),0).rg & uvec2(0x55u)
);
if (texels[0] == texels[1] && texels[1] == texels[2] && texels[2] == texels[3] && texels[3] ==  centreTexel) {
continue;
}
for (int i=0; i<4; ++i){
outputValue |= ((texels[i] ^ centreTexel) << 1);
outputValue |= texels[i];
}
}
}
fragGrid = outputValue;`),l}const u=32,n=9,s=.4,a=Object.freeze(Object.defineProperty({__proto__:null,HighlightDownsampleDrawParameters:o,blurSize:s,build:c,gridCellPixelSize:u,outlineSize:n},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 24633:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ h),
/* harmony export */   b: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_HighlightCellGridScreenSpacePass_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4388);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_HighlightReadBitmap_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46653);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72196);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_IntegerPassUniform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3445);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Texture2DUintPassUniform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7568);
/* harmony import */ var _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96028);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function s(){const s=new _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_5__/* .ShaderBuilder */ .N5;s.include(_views_3d_webgl_engine_core_shaderLibrary_HighlightCellGridScreenSpacePass_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .HighlightCellGridScreenSpacePass */ .Q),s.include(_views_3d_webgl_engine_core_shaderLibrary_HighlightReadBitmap_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .HighlightReadBitmap */ .y);const{fragment:h}=s;return s.outputs.add("fragSingleHighlight","vec2",0),h.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Texture2DUintPassUniform_js__WEBPACK_IMPORTED_MODULE_4__/* .Texture2DUintPassUniform */ .R("highlightTexture",(e=>e.highlightTexture)),new _views_3d_webgl_engine_core_shaderModules_IntegerPassUniform_js__WEBPACK_IMPORTED_MODULE_3__/* .IntegerPassUniform */ .c("highlightLevel",(e=>e.highlightLevel))),h.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H)`ivec2 iuv = ivec2(gl_FragCoord.xy);
uvec2 inputTexel = texelFetch(highlightTexture, iuv, 0).rg;
uint bits = readLevelBits(inputTexel, highlightLevel);
bool hasHighlight = (bits & 1u) == 1u;
bool hasOccluded  = (bits & 2u) == 2u;
fragSingleHighlight = vec2(hasHighlight ? 1.0 : 0.0, hasOccluded ? 1.0 : 0.0);`),s}const h=Object.freeze(Object.defineProperty({__proto__:null,build:s},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 7700:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ k),
/* harmony export */   b: () => (/* binding */ L)
/* harmony export */ });
/* harmony import */ var _views_3d_support_engineContent_marker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50980);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1110);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_RibbonVertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56289);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1361);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_MarkerSizing_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2119);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_TerrainDepthTest_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23233);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89002);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70224);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63592);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float2BindUniform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74767);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float4BindUniform_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45393);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1411);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_FloatBindUniform_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(17983);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(72196);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Matrix4BindUniform_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(82088);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(79856);
/* harmony import */ var _views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(50645);
/* harmony import */ var _views_3d_webgl_engine_shaders_LineMarkerTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(58376);
/* harmony import */ var _views_3d_webgl_engine_shaders_OutputColorHighlightOID_glsl_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(19274);
/* harmony import */ var _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(96028);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function L(L){const k=new _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_19__/* .ShaderBuilder */ .N5,{space:M,anchor:D,hasTip:C}=L,$=M===_views_3d_webgl_engine_shaders_LineMarkerTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_17__/* .LineMarkerSpace */ .lM.World;k.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_RibbonVertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .RibbonVertexPosition */ .s,L),k.include(_views_3d_webgl_engine_core_shaderLibrary_shading_MarkerSizing_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .MarkerSizing */ .r,L),k.include(_views_3d_webgl_engine_core_shaderLibrary_shading_TerrainDepthTest_glsl_js__WEBPACK_IMPORTED_MODULE_5__/* .terrainDepthTest */ .Z,L);const{vertex:O,fragment:T,varyings:W}=k;T.include(_views_3d_webgl_engine_core_shaderLibrary_util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_7__/* .RgbaFloatEncoding */ .W),(0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_8__/* .addProjViewLocalOrigin */ .NB)(O,L),k.attributes.add(_views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_16__/* .VertexAttribute */ .r.POSITION,"vec3"),k.attributes.add(_views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_16__/* .VertexAttribute */ .r.PREVIOUSDELTA,"vec4"),k.attributes.add(_views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_16__/* .VertexAttribute */ .r.UV0,"vec2"),W.add("vColor","vec4"),W.add("vpos","vec3",{invariant:!0}),W.add("vUV","vec2"),W.add("vSize","float"),C&&W.add("vLineWidth","float"),O.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Float2BindUniform_js__WEBPACK_IMPORTED_MODULE_9__/* .Float2BindUniform */ .E("nearFar",(({camera:e})=>e.nearFar)),new _views_3d_webgl_engine_core_shaderModules_Float4BindUniform_js__WEBPACK_IMPORTED_MODULE_10__/* .Float4BindUniform */ .I("viewport",(({camera:e})=>e.fullViewport))).code.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .glsl */ .H)`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),O.code.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .glsl */ .H)`void clip(vec4 pos, inout vec4 prev) {
float vnp = nearFar[0] * 0.99;
if (prev.z > -nearFar[0]) {
float interpolation = (-vnp - pos.z) / (prev.z - pos.z);
prev = mix(pos, prev, interpolation);
}
}`),$?(k.attributes.add(_views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_16__/* .VertexAttribute */ .r.NORMAL,"vec3"),(0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_8__/* .addViewNormal */ .S7)(O),O.constants.add("tiltThreshold","float",.7),O.code.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .glsl */ .H)`vec3 perpendicular(vec3 v) {
vec3 n = (viewNormal * vec4(normal.xyz, 1.0)).xyz;
vec3 n2 = cross(v, n);
vec3 forward = vec3(0.0, 0.0, 1.0);
float tiltDot = dot(forward, n);
return abs(tiltDot) < tiltThreshold ? n : n2;
}`)):O.code.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .glsl */ .H)`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}`);const U=$?"vec3":"vec2";return O.code.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .glsl */ .H)`
      ${U} normalizedSegment(${U} pos, ${U} prev) {
        ${U} segment = pos - prev;
        float segmentLen = length(segment);

        // normalize or zero if too short
        return (segmentLen > 0.001) ? segment / segmentLen : ${$?"vec3(0.0, 0.0, 0.0)":"vec2(0.0, 0.0)"};
      }

      ${U} displace(${U} pos, ${U} prev, float displacementLen) {
        ${U} segment = normalizedSegment(pos, prev);

        ${U} displacementDirU = perpendicular(segment);
        ${U} displacementDirV = segment;

        ${D===_views_3d_webgl_engine_shaders_LineMarkerTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_17__/* .LineMarkerAnchor */ .kJ.Tip?"pos -= 0.5 * displacementLen * displacementDirV;":""}

        return pos + displacementLen * (uv0.x * displacementDirU + uv0.y * displacementDirV);
      }
    `),M===_views_3d_webgl_engine_shaders_LineMarkerTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_17__/* .LineMarkerSpace */ .lM.Screen&&(O.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Matrix4BindUniform_js__WEBPACK_IMPORTED_MODULE_14__/* .Matrix4BindUniform */ .F("inverseProjectionMatrix",(({camera:e})=>e.inverseProjectionMatrix))),O.code.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .glsl */ .H)`vec3 inverseProject(vec4 posScreen) {
posScreen.xy = (posScreen.xy / viewport.zw) * posScreen.w;
return (inverseProjectionMatrix * posScreen).xyz;
}`),O.code.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .glsl */ .H)`bool rayIntersectPlane(vec3 rayDir, vec3 planeOrigin, vec3 planeNormal, out vec3 intersection) {
float cos = dot(rayDir, planeNormal);
float t = dot(planeOrigin, planeNormal) / cos;
intersection = t * rayDir;
return abs(cos) > 0.001 && t > 0.0;
}`),O.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_FloatBindUniform_js__WEBPACK_IMPORTED_MODULE_12__/* .FloatBindUniform */ .U("perScreenPixelRatio",(({camera:e})=>e.perScreenPixelRatio))),O.code.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .glsl */ .H)`
      vec4 toFront(vec4 displacedPosScreen, vec3 posLeft, vec3 posRight, vec3 prev, float lineWidth) {
        // Project displaced position back to camera space
        vec3 displacedPos = inverseProject(displacedPosScreen);

        // Calculate the plane that we want the marker to lie in. Note that this will always be an approximation since ribbon lines are generally
        // not planar and we do not know the actual position of the displaced prev vertices (they are offset in screen space, too).
        vec3 planeNormal = normalize(cross(posLeft - posRight, posLeft - prev));
        vec3 planeOrigin = posLeft;

        ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__.If)(L.hasCap,"if(prev.z > posLeft.z) {\n                vec2 diff = posLeft.xy - posRight.xy;\n                planeOrigin.xy += perpendicular(diff) / 2.0;\n             }")};

        // Move the plane towards the camera by a margin dependent on the line width (approximated in world space). This tolerance corrects for the
        // non-planarity in most cases, but sharp joins can place the prev vertices at arbitrary positions so markers can still clip.
        float offset = lineWidth * perScreenPixelRatio;
        planeOrigin *= (1.0 - offset);

        // Intersect camera ray with the plane and make sure it is within clip space
        vec3 rayDir = normalize(displacedPos);
        vec3 intersection;
        if (rayIntersectPlane(rayDir, planeOrigin, planeNormal, intersection) && intersection.z < -nearFar[0] && intersection.z > -nearFar[1]) {
          return vec4(intersection.xyz, 1.0);
        }

        // Fallback: use depth of pos or prev, whichever is closer to the camera
        float minDepth = planeOrigin.z > prev.z ? length(planeOrigin) : length(prev);
        displacedPos *= minDepth / length(displacedPos);
        return vec4(displacedPos.xyz, 1.0);
      }
  `)),(0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_8__/* .addPixelRatio */ .Nz)(O),O.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .glsl */ .H)`
    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      float lineWidth = getLineWidth();
      float screenMarkerSize = getScreenMarkerSize();

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(position + previousDelta.xyz * previousDelta.w, 1.0);
      clip(pos, prev);

      ${$?(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .glsl */ .H)`${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__.If)(L.hideOnShortSegments,(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .glsl */ .H)`
                if (areWorldMarkersHidden(pos, prev)) {
                  // Project out of clip space
                  gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
                  return;
                }`)}
            pos.xyz = displace(pos.xyz, prev.xyz, getWorldMarkerSize(pos));
            vec4 displacedPosScreen = projectAndScale(pos);`:(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .glsl */ .H)`
            vec4 posScreen = projectAndScale(pos);
            vec4 prevScreen = projectAndScale(prev);
            vec4 displacedPosScreen = posScreen;

            displacedPosScreen.xy = displace(posScreen.xy, prevScreen.xy, screenMarkerSize);
            ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__.If)(M===_views_3d_webgl_engine_shaders_LineMarkerTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_17__/* .LineMarkerSpace */ .lM.Screen,(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .glsl */ .H)`
                vec2 displacementDirU = perpendicular(normalizedSegment(posScreen.xy, prevScreen.xy));

                // We need three points of the ribbon line in camera space to calculate the plane it lies in
                // Note that we approximate the third point, since we have no information about the join around prev
                vec3 lineRight = inverseProject(posScreen + lineWidth * vec4(displacementDirU.xy, 0.0, 0.0));
                vec3 lineLeft = pos.xyz + (pos.xyz - lineRight);

                pos = toFront(displacedPosScreen, lineLeft, lineRight, prev.xyz, lineWidth);
                displacedPosScreen = projectAndScale(pos);`)}`}
      forwardViewPosDepth(pos.xyz);
      // Convert back into NDC
      displacedPosScreen.xy = (displacedPosScreen.xy / viewport.zw) * displacedPosScreen.w;

      // Convert texture coordinate into [0,1]
      vUV = (uv0 + 1.0) / 2.0;
      ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__.If)(!$,"vUV *= displacedPosScreen.w;")}
      ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__.If)(C,"vLineWidth = lineWidth;")}

      vSize = screenMarkerSize;
      vColor = getColor();

      // Use camera space for slicing
      vpos = pos.xyz;

      gl_Position = displacedPosScreen;
    }`),T.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .SliceDraw */ .HQ,L),k.include(_views_3d_webgl_engine_shaders_OutputColorHighlightOID_glsl_js__WEBPACK_IMPORTED_MODULE_18__/* .outputColorHighlightOID */ .z,L),T.include(_views_3d_webgl_engine_core_shaderLibrary_util_ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .ColorConversion */ .a),T.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_11__/* .Float4PassUniform */ .E("intrinsicColor",(({color:e})=>e)),new _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_15__/* .Texture2DPassUniform */ .N("tex",(({markerTexture:e})=>e))).constants.add("texelSize","float",1/_views_3d_support_engineContent_marker_js__WEBPACK_IMPORTED_MODULE_0__/* .markerTextureSize */ .vO).code.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .glsl */ .H)`float markerAlpha(vec2 samplePos) {
samplePos += vec2(0.5, -0.5) * texelSize;
float sdf = rgbaTofloat(texture(tex, samplePos)) - 0.5;
float distance = sdf * vSize;
distance -= 0.5;
return clamp(0.5 - distance, 0.0, 1.0);
}`),C&&T.constants.add("relativeMarkerSize","float",_views_3d_support_engineContent_marker_js__WEBPACK_IMPORTED_MODULE_0__/* .markerSymbolSize */ .Cz/_views_3d_support_engineContent_marker_js__WEBPACK_IMPORTED_MODULE_0__/* .markerTextureSize */ .vO).constants.add("relativeTipLineWidth","float",_views_3d_support_engineContent_marker_js__WEBPACK_IMPORTED_MODULE_0__/* .markerTipThicknessFactor */ .DZ).code.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .glsl */ .H)`
    float tipAlpha(vec2 samplePos) {
      // Convert coordinates s.t. they are in pixels and relative to the tip of an arrow marker
      samplePos -= vec2(0.5, 0.5 + 0.5 * relativeMarkerSize);
      samplePos *= vSize;

      float halfMarkerSize = 0.5 * relativeMarkerSize * vSize;
      float halfTipLineWidth = 0.5 * max(1.0, relativeTipLineWidth * vLineWidth);

      ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__.If)($,"halfTipLineWidth *= fwidth(samplePos.y);")}

      float distance = max(abs(samplePos.x) - halfMarkerSize, abs(samplePos.y) - halfTipLineWidth);
      return clamp(0.5 - distance, 0.0, 1.0);
    }
  `),k.include(_views_3d_webgl_engine_core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .OutputHighlight */ .Q,L),T.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .glsl */ .H)`
    discardBySlice(vpos);
    discardByTerrainDepth();

    vec4 finalColor = intrinsicColor * vColor;

    // Cancel out perspective correct interpolation if in screen space or draped
    vec2 samplePos = vUV ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__.If)(!$,"* gl_FragCoord.w")};
    finalColor.a *= ${C?"max(markerAlpha(samplePos), tipAlpha(samplePos))":"markerAlpha(samplePos)"};
    outputColorHighlightOID(finalColor, vpos, finalColor.rgb);`),k}const k=Object.freeze(Object.defineProperty({__proto__:null,build:L},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 36987:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ p),
/* harmony export */   b: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55274);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1110);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66012);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39739);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1361);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63592);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1411);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35449);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72196);
/* harmony import */ var _views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(50645);
/* harmony import */ var _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(96028);
/* harmony import */ var _webscene_support_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(63199);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function u(u){const p=new _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_10__/* .ShaderBuilder */ .N5,{vertex:w,fragment:f,varyings:b}=p;return p.include(_views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .Transform */ .d,u),p.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .VertexColor */ .c,u),(0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_5__/* .addProjViewLocalOrigin */ .NB)(w,u),p.attributes.add(_views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_9__/* .VertexAttribute */ .r.POSITION,"vec3"),b.add("vpos","vec3",{invariant:!0}),w.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_8__/* .glsl */ .H)`vpos = position;
forwardNormalizedVertexColor();
gl_Position = transformPosition(proj, view, vpos);`),p.include(_views_3d_webgl_engine_core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .OutputHighlight */ .Q,u),p.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .SliceDraw */ .HQ,u),f.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_7__/* .FloatPassUniform */ .m("alphaCoverage",((e,r)=>Math.min(1,e.width*r.camera.pixelRatio)))),u.hasVertexColors||f.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_6__/* .Float4PassUniform */ .E("constantColor",(e=>e.color))),f.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_8__/* .glsl */ .H)`
    discardBySlice(vpos);

    vec4 color = ${u.hasVertexColors?"vColor":"constantColor"};

    ${u.output===_views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderOutput */ .V.ObjectAndLayerIdColor?"color.a = 1.0;":""}

    if (color.a < ${_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_8__/* .glsl */ .H.float(_webscene_support_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_11__/* .alphaCutoff */ .Q)}) {
      discard;
    }

    ${(0,_views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__/* .isColorOrColorEmission */ .RN)(u.output)?(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_8__/* .glsl */ .H)`fragColor = applySlice(color, vpos);`:""}
    calculateOcclusionAndOutputHighlight();
  `),p}const p=Object.freeze(Object.defineProperty({__proto__:null,build:u},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 36004:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ d),
/* harmony export */   a: () => (/* binding */ m),
/* harmony export */   b: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _views_3d_terrain_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36572);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ScreenSpacePass_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16961);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35449);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72196);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_IntegerPassUniform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3445);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79856);
/* harmony import */ var _views_webgl_NoParameters_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22005);
/* harmony import */ var _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(96028);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class d extends _views_webgl_NoParameters_js__WEBPACK_IMPORTED_MODULE_6__/* .NoParameters */ .Y{constructor(){super(...arguments),this.overlayIndex=_views_3d_terrain_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .OverlayIndex */ .vr.INNER,this.opacity=1}}function l(){const e=new _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_7__/* .ShaderBuilder */ .N5;return e.include(_views_3d_webgl_engine_core_shaderLibrary_ScreenSpacePass_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .ScreenSpacePass */ .c),e.fragment.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_5__/* .Texture2DPassUniform */ .N("tex",(e=>e.texture))),e.fragment.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_IntegerPassUniform_js__WEBPACK_IMPORTED_MODULE_4__/* .IntegerPassUniform */ .c("overlayIdx",(e=>e.overlayIndex))),e.fragment.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_2__/* .FloatPassUniform */ .m("opacity",(e=>e.opacity))),e.fragment.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`vec2 overlayUV = overlayIdx == 0 ? vec2(uv.x * 0.5, uv.y) : vec2(uv.x * 0.5 + 0.5, uv.y);
fragColor = texture(tex, overlayUV) * opacity;`),e}const m=Object.freeze(Object.defineProperty({__proto__:null,OverlayCompositingPassParameters:d,build:l},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 51305:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ V),
/* harmony export */   b: () => (/* binding */ x)
/* harmony export */ });
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40641);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55274);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1110);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66012);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_ObjectAndLayerIdColor_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33045);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_PathVertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10204);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_output_OutputDepth_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56178);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1361);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3325);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93929);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(696);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(46971);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_NormalUtils_glsl_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(22455);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(39486);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(53402);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_TerrainDepthTest_glsl_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(23233);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(89002);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(63592);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(60840);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(35449);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(72196);
/* harmony import */ var _views_3d_webgl_engine_effects_weather_SnowCover_glsl_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(77581);
/* harmony import */ var _views_3d_webgl_engine_shaders_OutputColorHighlightOID_glsl_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(19274);
/* harmony import */ var _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(96028);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function x(x){const V=new _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_23__/* .ShaderBuilder */ .N5,{vertex:_,fragment:M,varyings:$}=V;(0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_17__/* .addProjViewLocalOrigin */ .NB)(_,x),$.add("vpos","vec3",{invariant:!0}),V.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_PathVertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_5__/* .PathVertexPosition */ .H,x);const{output:z,spherical:H,pbrMode:N,receiveShadows:E,hasBloom:G,snowCover:T}=x,k=(0,_views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__/* .isColorOrColorEmission */ .RN)(z);switch((k||z===_views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__/* .ShaderOutput */ .V.ObjectAndLayerIdColor)&&(V.include(_views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .Transform */ .d,x),V.include(_views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .ReadShadowMapDraw */ .Bz,x),V.include(_views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .ForwardLinearDepth */ .oD,x),V.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_ObjectAndLayerIdColor_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .ObjectAndLayerIdColor */ .g,x),V.include(_views_3d_webgl_engine_core_shaderLibrary_shading_TerrainDepthTest_glsl_js__WEBPACK_IMPORTED_MODULE_15__/* .terrainDepthTest */ .Z,x),$.add("vnormal","vec3"),$.add("vcolor","vec4"),_.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_20__/* .glsl */ .H)`
      vpos = calculateVPos();
      vnormal = normalize(localNormal());
      forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);

      gl_Position = transformPosition(proj, view, vpos);

      ${k?"forwardLinearDepth();":""}
      forwardObjectAndLayerIdColor();

      vcolor = getColor();`)),z){case _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__/* .ShaderOutput */ .V.ColorEmission:case _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__/* .ShaderOutput */ .V.Color:V.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .PhysicallyBasedRenderingParameters */ ._Z,x),V.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_9__/* .EvaluateSceneLighting */ .kA,x),M.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_8__/* .EvaluateAmbientOcclusion */ .n,x),V.include(_views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .ReadShadowMapDraw */ .Bz,x),V.include(_views_3d_webgl_engine_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .Normals */ .r,x),M.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .SliceDraw */ .HQ,x),V.include(_views_3d_webgl_engine_shaders_OutputColorHighlightOID_glsl_js__WEBPACK_IMPORTED_MODULE_22__/* .outputColorHighlightOID */ .z,x),(0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_17__/* .addCameraPosition */ .yu)(M,x),(0,_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_9__/* .addAmbientBoostFactor */ .a8)(M),(0,_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_9__/* .addLightingGlobalFactor */ .eU)(M),M.uniforms.add(_.uniforms.get("localOrigin"),new _views_3d_webgl_engine_core_shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_18__/* .Float3PassUniform */ .t("ambient",(e=>e.ambient)),new _views_3d_webgl_engine_core_shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_18__/* .Float3PassUniform */ .t("diffuse",(e=>e.diffuse)),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_19__/* .FloatPassUniform */ .m("opacity",(e=>e.opacity))),M.include(_views_3d_webgl_engine_core_shaderLibrary_util_ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_16__/* .ColorConversion */ .a),M.include(_views_3d_webgl_engine_effects_weather_SnowCover_glsl_js__WEBPACK_IMPORTED_MODULE_21__/* .SnowCover */ .b,x),(0,_views_3d_webgl_engine_core_shaderLibrary_shading_MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_10__/* .addMainLightIntensity */ .O4)(M),M.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_20__/* .glsl */ .H)`
        discardBySlice(vpos);
        discardByTerrainDepth();

        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        shadingParams.normalView = vnormal;
        vec3 normal = shadingNormal(shadingParams);
        float ssao = evaluateAmbientOcclusionInverse();

        vec3 posWorld = vpos + localOrigin;
        vec3 normalGround = ${H?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

        vec3 albedo = vcolor.rgb * max(ambient, diffuse); // combine the old material parameters into a single one
        float combinedOpacity = vcolor.a * opacity;

        ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_20__.If)(T,(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_20__/* .glsl */ .H)`float snow = getSnow(normal, normalGround);
                 albedo = mix(albedo, vec3(1), snow);
                 ssao = mix(ssao, 1.0, snow);`)}

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        float shadow = ${E?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth));":H?"lightingGlobalFactor * (1.0 - additionalAmbientScale);":"0.0;"}

        ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_20__.If)(N===_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .PBRMode */ .A9.Schematic,`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];\n           vec4 emission = ${G?"vec4(0.0)":"getEmissions(albedo)"};\n           ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_20__.If)(T,"mrr = applySnowToMRR(mrr, snow);\n              emission = snowCoverForEmissions(emission, snow);")}`)}

        vec3 shadedColor = ${N===_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .PBRMode */ .A9.Schematic?"evaluateSceneLightingPBR(normal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);":"evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight);"}
        vec4 finalColor = vec4(shadedColor, combinedOpacity);
        outputColorHighlightOID(finalColor, vpos, albedo ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_20__.If)(T,", snow")});`);break;case _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__/* .ShaderOutput */ .V.Depth:V.include(_views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .Transform */ .d,x),_.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_20__/* .glsl */ .H)`vpos = calculateVPos();
gl_Position = transformPosition(proj, view, vpos);`),V.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .SliceDraw */ .HQ,x),M.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_20__/* .glsl */ .H)`discardBySlice(vpos);`);break;case _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__/* .ShaderOutput */ .V.Shadow:case _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__/* .ShaderOutput */ .V.ShadowHighlight:case _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__/* .ShaderOutput */ .V.ShadowExcludeHighlight:case _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__/* .ShaderOutput */ .V.ViewshedShadow:V.include(_views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .Transform */ .d,x),(0,_views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .addNearFar */ .xJ)(V),$.add("depth","float"),_.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_20__/* .glsl */ .H)`vpos = calculateVPos();
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);`),V.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .SliceDraw */ .HQ,x),V.include(_views_3d_webgl_engine_core_shaderLibrary_output_OutputDepth_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .OutputDepth */ .L,x),M.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_20__/* .glsl */ .H)`discardBySlice(vpos);
outputDepth(depth);`);break;case _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__/* .ShaderOutput */ .V.ObjectAndLayerIdColor:V.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .SliceDraw */ .HQ,x),M.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_20__/* .glsl */ .H)`discardBySlice(vpos);
outputObjectAndLayerIdColor();`);break;case _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__/* .ShaderOutput */ .V.Normal:V.include(_views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .Transform */ .d,x),V.include(_views_3d_webgl_engine_core_shaderLibrary_shading_NormalUtils_glsl_js__WEBPACK_IMPORTED_MODULE_12__/* .NormalUtils */ .n,x),(0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_17__/* .addViewNormal */ .S7)(_),$.add("vnormal","vec3"),_.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_20__/* .glsl */ .H)`vpos = calculateVPos();
vnormal = normalize((viewNormal * vec4(localNormal(), 1.0)).xyz);
gl_Position = transformPosition(proj, view, vpos);`),V.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .SliceDraw */ .HQ,x),M.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_20__/* .glsl */ .H)`discardBySlice(vpos);
vec3 normal = normalize(vnormal);
if (gl_FrontFacing == false) normal = -normal;
fragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);`);break;case _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__/* .ShaderOutput */ .V.Highlight:V.include(_views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .Transform */ .d,x),V.include(_views_3d_webgl_engine_core_shaderLibrary_shading_NormalUtils_glsl_js__WEBPACK_IMPORTED_MODULE_12__/* .NormalUtils */ .n,x),$.add("vnormal","vec3"),_.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_20__/* .glsl */ .H)`vpos = calculateVPos();
gl_Position = transformPosition(proj, view, vpos);`),V.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .SliceDraw */ .HQ,x),V.include(_views_3d_webgl_engine_core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_7__/* .OutputHighlight */ .Q,x),M.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_20__/* .glsl */ .H)`discardBySlice(vpos);
calculateOcclusionAndOutputHighlight();`)}return V}const V=Object.freeze(Object.defineProperty({__proto__:null,build:x},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 10068:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ T),
/* harmony export */   b: () => (/* binding */ x)
/* harmony export */ });
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55274);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1110);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66012);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_ObjectAndLayerIdColor_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33045);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39739);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_TerrainDepthTest_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23233);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34328);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89002);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63592);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1411);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_FloatBindUniform_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17983);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(72196);
/* harmony import */ var _views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(50645);
/* harmony import */ var _views_3d_webgl_engine_materials_PatternStyle_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1563);
/* harmony import */ var _views_3d_webgl_engine_shaders_OutputColorHighlightOID_glsl_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19274);
/* harmony import */ var _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(96028);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const b=.70710678118,h=b,y=.08715574274,S=10,j=1;function x(x){const T=new _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_15__/* .ShaderBuilder */ .N5,{vertex:P,fragment:R,attributes:V,varyings:D}=T,O=x.output===_views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderOutput */ .V.Highlight;(0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_8__/* .addProjViewLocalOrigin */ .NB)(P,x),T.include(_views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .Transform */ .d,x),T.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .VertexColor */ .c,x),T.include(_views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .VisualVariables */ .A,x),T.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_ObjectAndLayerIdColor_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .ObjectAndLayerIdColor */ .g,x),T.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .SliceDraw */ .HQ,x),T.include(_views_3d_webgl_engine_shaders_OutputColorHighlightOID_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .outputColorHighlightOID */ .z,x),T.include(_views_3d_webgl_engine_core_shaderLibrary_shading_TerrainDepthTest_glsl_js__WEBPACK_IMPORTED_MODULE_5__/* .terrainDepthTest */ .Z,x),x.draped?P.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_FloatBindUniform_js__WEBPACK_IMPORTED_MODULE_10__/* .FloatBindUniform */ .U("worldToScreenRatio",(e=>1/e.screenToPCSRatio))):V.add(_views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_12__/* .VertexAttribute */ .r.BOUNDINGRECT,"mat3"),V.add(_views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_12__/* .VertexAttribute */ .r.POSITION,"vec3"),V.add(_views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_12__/* .VertexAttribute */ .r.UVMAPSPACE,"vec4"),x.vvColor&&V.add(_views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_12__/* .VertexAttribute */ .r.COLORFEATUREATTRIBUTE,"float"),x.hasVertexColors||D.add("vColor","vec4"),D.add("vpos","vec3",{invariant:!0}),D.add("vuv","vec2"),P.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_9__/* .Float4PassUniform */ .E("uColor",(e=>e.color)));const A=x.style===_views_3d_webgl_engine_materials_PatternStyle_js__WEBPACK_IMPORTED_MODULE_13__/* .Style */ .O.ForwardDiagonal||x.style===_views_3d_webgl_engine_materials_PatternStyle_js__WEBPACK_IMPORTED_MODULE_13__/* .Style */ .O.BackwardDiagonal||x.style===_views_3d_webgl_engine_materials_PatternStyle_js__WEBPACK_IMPORTED_MODULE_13__/* .Style */ .O.DiagonalCross;return A&&P.code.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .glsl */ .H)`
      const mat2 rotate45 = mat2(${_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .glsl */ .H.float(b)}, ${_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .glsl */ .H.float(-.70710678118)},
                                 ${_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .glsl */ .H.float(h)}, ${_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .glsl */ .H.float(b)});
    `),x.draped||((0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_8__/* .addCameraPosition */ .yu)(P,x),P.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_FloatBindUniform_js__WEBPACK_IMPORTED_MODULE_10__/* .FloatBindUniform */ .U("worldToScreenPerDistanceRatio",(e=>1/e.camera.perScreenPixelRatio))),P.code.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .glsl */ .H)`vec3 projectPointToLineSegment(vec3 center, vec3 halfVector, vec3 point) {
float projectedLength = dot(halfVector, point - center) / dot(halfVector, halfVector);
return center + halfVector * clamp(projectedLength, -1.0, 1.0);
}`),P.code.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .glsl */ .H)`vec3 intersectRayPlane(vec3 rayDir, vec3 rayOrigin, vec3 planeNormal, vec3 planePoint) {
float d = dot(planeNormal, planePoint);
float t = (d - dot(planeNormal, rayOrigin)) / dot(planeNormal, rayDir);
return rayOrigin + t * rayDir;
}`),P.code.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .glsl */ .H)`
      float boundingRectDistanceToCamera() {
        vec3 center = vec3(boundingRect[0][0], boundingRect[0][1], boundingRect[0][2]);
        vec3 halfU = vec3(boundingRect[1][0], boundingRect[1][1], boundingRect[1][2]);
        vec3 halfV = vec3(boundingRect[2][0], boundingRect[2][1], boundingRect[2][2]);
        vec3 n = normalize(cross(halfU, halfV));

        vec3 viewDir = - vec3(view[0][2], view[1][2], view[2][2]);

        float viewAngle = dot(viewDir, n);
        float minViewAngle = ${_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .glsl */ .H.float(y)};

        if (abs(viewAngle) < minViewAngle) {
          // view direction is (almost) parallel to plane -> clamp it to min angle
          float normalComponent = sign(viewAngle) * minViewAngle - viewAngle;
          viewDir = normalize(viewDir + normalComponent * n);
        }

        // intersect view direction with infinite plane that contains bounding rect
        vec3 planeProjected = intersectRayPlane(viewDir, cameraPosition, n, center);

        // clip to bounds by projecting to u and v line segments individually
        vec3 uProjected = projectPointToLineSegment(center, halfU, planeProjected);
        vec3 vProjected = projectPointToLineSegment(center, halfV, planeProjected);

        // use to calculate the closest point to camera on bounding rect
        vec3 closestPoint = uProjected + vProjected - center;

        return length(closestPoint - cameraPosition);
      }
    `)),P.code.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .glsl */ .H)`
    vec2 scaledUV() {
      vec2 uv = uvMapSpace.xy ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_11__.If)(A," * rotate45")};
      vec2 uvCellOrigin = uvMapSpace.zw ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_11__.If)(A," * rotate45")};

      ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_11__.If)(!x.draped,(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .glsl */ .H)`float distanceToCamera = boundingRectDistanceToCamera();
               float worldToScreenRatio = worldToScreenPerDistanceRatio / distanceToCamera;`)}

      // Logarithmically discretize ratio to avoid jittering
      float step = 0.1;
      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);

      vec2 uvOffset = mod(uvCellOrigin * discreteWorldToScreenRatio, ${_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .glsl */ .H.float(S)});
      return uvOffset + (uv * discreteWorldToScreenRatio);
    }
  `),P.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .glsl */ .H)`
    vuv = scaledUV();
    vpos = position;
    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardNormalizedVertexColor();
    forwardObjectAndLayerIdColor();
    ${x.hasVertexColors?"vColor *= uColor;":x.vvColor?"vColor = uColor * interpolateVVColor(colorFeatureAttribute);":"vColor = uColor;"}
    gl_Position = transformPosition(proj, view, vpos);
  `),R.include(_views_3d_webgl_engine_core_shaderLibrary_util_ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_7__/* .ColorConversion */ .a),x.draped&&R.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_FloatBindUniform_js__WEBPACK_IMPORTED_MODULE_10__/* .FloatBindUniform */ .U("texelSize",(e=>1/e.camera.pixelRatio))),O||(R.code.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .glsl */ .H)`
      const float lineWidth = ${_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .glsl */ .H.float(j)};
      const float spacing = ${_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .glsl */ .H.float(S)};
      const float spacingINV = ${_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .glsl */ .H.float(1/S)};

      float coverage(float p, float txlSize) {
        p = mod(p, spacing);

        float halfTxlSize = txlSize / 2.0;

        float start = p - halfTxlSize;
        float end = p + halfTxlSize;

        float coverage = (ceil(end * spacingINV) - floor(start * spacingINV)) * lineWidth;
        coverage -= min(lineWidth, mod(start, spacing));
        coverage -= max(lineWidth - mod(end, spacing), 0.0);

        return coverage / txlSize;
      }
    `),x.draped||R.code.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .glsl */ .H)`const int maxSamples = 5;
float sampleAA(float p) {
vec2 dxdy = abs(vec2(dFdx(p), dFdy(p)));
float fwidth = dxdy.x + dxdy.y;
ivec2 samples = 1 + ivec2(clamp(dxdy, 0.0, float(maxSamples - 1)));
vec2 invSamples = 1.0 / vec2(samples);
float accumulator = 0.0;
for (int j = 0; j < maxSamples; j++) {
if(j >= samples.y) {
break;
}
for (int i = 0; i < maxSamples; i++) {
if(i >= samples.x) {
break;
}
vec2 step = vec2(i,j) * invSamples - 0.5;
accumulator += coverage(p + step.x * dxdy.x + step.y * dxdy.y, fwidth);
}
}
accumulator /= float(samples.x * samples.y);
return accumulator;
}`)),R.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .glsl */ .H)`
    discardBySlice(vpos);
    discardByTerrainDepth();
    vec4 color = vColor;
    ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_11__.If)(!O,(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .glsl */ .H)`color.a *= ${C(x)};`)}
    outputColorHighlightOID(color, vpos, color.rgb);
  `),T}function C(e){function o(o){return e.draped?(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .glsl */ .H)`coverage(vuv.${o}, texelSize)`:(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .glsl */ .H)`sampleAA(vuv.${o})`}switch(e.style){case _views_3d_webgl_engine_materials_PatternStyle_js__WEBPACK_IMPORTED_MODULE_13__/* .Style */ .O.ForwardDiagonal:case _views_3d_webgl_engine_materials_PatternStyle_js__WEBPACK_IMPORTED_MODULE_13__/* .Style */ .O.Horizontal:return o("y");case _views_3d_webgl_engine_materials_PatternStyle_js__WEBPACK_IMPORTED_MODULE_13__/* .Style */ .O.BackwardDiagonal:case _views_3d_webgl_engine_materials_PatternStyle_js__WEBPACK_IMPORTED_MODULE_13__/* .Style */ .O.Vertical:return o("x");case _views_3d_webgl_engine_materials_PatternStyle_js__WEBPACK_IMPORTED_MODULE_13__/* .Style */ .O.DiagonalCross:case _views_3d_webgl_engine_materials_PatternStyle_js__WEBPACK_IMPORTED_MODULE_13__/* .Style */ .O.Cross:return (0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .glsl */ .H)`1.0 - (1.0 - ${o("x")}) * (1.0 - ${o("y")})`;default:return"0.0"}}const T=Object.freeze(Object.defineProperty({__proto__:null,build:x},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 52377:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ a),
/* harmony export */   a: () => (/* binding */ m),
/* harmony export */   b: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58359);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ScreenSpacePass_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16961);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60840);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72196);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79856);
/* harmony import */ var _views_webgl_NoParameters_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22005);
/* harmony import */ var _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96028);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class a extends _views_webgl_NoParameters_js__WEBPACK_IMPORTED_MODULE_5__/* .NoParameters */ .Y{constructor(){super(...arguments),this.color=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__/* .fromValues */ .fA)(1,1,1)}}function n(){const e=new _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_6__/* .ShaderBuilder */ .N5;return e.include(_views_3d_webgl_engine_core_shaderLibrary_ScreenSpacePass_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .ScreenSpacePass */ .c),e.fragment.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_4__/* .Texture2DPassUniform */ .N("tex",(e=>e.texture)),new _views_3d_webgl_engine_core_shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_2__/* .Float3PassUniform */ .t("uColor",(e=>e.color))),e.fragment.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`vec4 texColor = texture(tex, uv);
fragColor = texColor * vec4(uColor, 1.0);`),e}const m=Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:a,build:n},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 33006:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ S),
/* harmony export */   b: () => (/* binding */ O)
/* harmony export */ });
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40641);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55274);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1110);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66012);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_ObjectAndLayerIdColor_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33045);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1361);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientLighting_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52636);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(696);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_NormalUtils_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22455);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39486);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(53402);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_TerrainDepthTest_glsl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23233);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_Water_glsl_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(548);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_WaterDistortion_glsl_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(41679);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(89002);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(63592);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1411);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(35449);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(72196);
/* harmony import */ var _views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(50645);
/* harmony import */ var _views_3d_webgl_engine_shaders_OutputColorHighlightOID_glsl_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(19274);
/* harmony import */ var _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(96028);
/* harmony import */ var _webscene_support_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(63199);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function O(O){const S=new _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_21__/* .ShaderBuilder */ .N5,{vertex:D,fragment:N,varyings:_}=S,{output:F,draped:M,receiveShadows:z}=O;(0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_15__/* .addProjViewLocalOrigin */ .NB)(D,O),S.include(_views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .Transform */ .d,O),S.attributes.add(_views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_19__/* .VertexAttribute */ .r.POSITION,"vec3"),S.attributes.add(_views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_19__/* .VertexAttribute */ .r.UV0,"vec2");const A=new _views_3d_webgl_engine_core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_16__/* .Float4PassUniform */ .E("waterColor",(e=>e.color));if(_.add("vpos","vec3",{invariant:!0}),D.uniforms.add(A),(0,_views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__/* .isColorOrColorEmission */ .RN)(F)){if(M)return D.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_18__/* .glsl */ .H)`
      if (waterColor.a < ${_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_18__/* .glsl */ .H.float(_webscene_support_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_22__/* .alphaCutoff */ .Q)}) {
        // Discard this vertex
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }

      vpos = position;
      gl_Position = transformPosition(proj, view, vpos);`),N.uniforms.add(A),N.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_18__/* .glsl */ .H)`fragColor = waterColor;`),S;S.include(_views_3d_webgl_engine_core_shaderLibrary_shading_NormalUtils_glsl_js__WEBPACK_IMPORTED_MODULE_8__/* .NormalUtils */ .n,O),S.include(_views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .ForwardLinearDepth */ .oD,O),_.add("vuv","vec2"),_.add("vnormal","vec3"),_.add("vtbnMatrix","mat3"),D.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_18__/* .glsl */ .H)`
      if (waterColor.a < ${_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_18__/* .glsl */ .H.float(_webscene_support_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_22__/* .alphaCutoff */ .Q)}) {
        // Discard this vertex
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        return;
      }

      vuv = uv0;
      vpos = position;

      vnormal = getLocalUp(vpos, localOrigin);
      vtbnMatrix = getTBNMatrix(vnormal);
      forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);

      gl_Position = transformPosition(proj, view, vpos);
      forwardLinearDepth();`)}switch(S.include(_views_3d_webgl_engine_core_shaderLibrary_shading_TerrainDepthTest_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .terrainDepthTest */ .Z,O),F){case _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__/* .ShaderOutput */ .V.Color:case _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__/* .ShaderOutput */ .V.ColorEmission:S.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientLighting_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .EvaluateAmbientLighting */ .W,{pbrMode:_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_9__/* .PBRMode */ .A9.Disabled,lightingSphericalHarmonicsOrder:2}),S.include(_views_3d_webgl_engine_core_shaderLibrary_shading_WaterDistortion_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .WaterDistortion */ .V),S.include(_views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_10__/* .ReadShadowMapDraw */ .Bz,O),S.include(_views_3d_webgl_engine_core_shaderLibrary_shading_Water_glsl_js__WEBPACK_IMPORTED_MODULE_12__/* .Water */ .E,O),N.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .SliceDraw */ .HQ,O),S.include(_views_3d_webgl_engine_shaders_OutputColorHighlightOID_glsl_js__WEBPACK_IMPORTED_MODULE_20__/* .outputColorHighlightOID */ .z,O),N.include(_views_3d_webgl_engine_core_shaderLibrary_util_ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .ColorConversion */ .a),(0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_15__/* .addCameraPosition */ .yu)(N,O),(0,_views_3d_webgl_engine_core_shaderLibrary_shading_MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_7__/* .addMainLightDirection */ .Gc)(N),(0,_views_3d_webgl_engine_core_shaderLibrary_shading_MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_7__/* .addMainLightIntensity */ .O4)(N),N.uniforms.add(A,new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_17__/* .FloatPassUniform */ .m("timeElapsed",(({timeElapsed:e})=>e)),D.uniforms.get("view"),D.uniforms.get("localOrigin")).main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_18__/* .glsl */ .H)`
        discardBySlice(vpos);
        discardByTerrainDepth();
        vec3 localUp = vnormal;
        // the created normal is in tangent space
        vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);

        // we rotate the normal according to the tangent-bitangent-normal-Matrix
        vec3 n = normalize(vtbnMatrix * tangentNormalFoam.xyz);
        vec3 v = -normalize(vpos - cameraPosition);
        float shadow = ${z?(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_18__/* .glsl */ .H)`1.0 - readShadowMap(vpos, linearDepth)`:"1.0"};
        vec4 vPosView = view * vec4(vpos, 1.0);
        vec4 final = vec4(getSeaColor(n, v, mainLightDirection, waterColor.rgb, mainLightIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz, vpos + localOrigin), waterColor.w);

        // gamma correction
        fragColor = delinearizeGamma(final);
        outputColorHighlightOID(fragColor, vpos, final.rgb);`);break;case _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__/* .ShaderOutput */ .V.Normal:S.include(_views_3d_webgl_engine_core_shaderLibrary_shading_NormalUtils_glsl_js__WEBPACK_IMPORTED_MODULE_8__/* .NormalUtils */ .n,O),S.include(_views_3d_webgl_engine_core_shaderLibrary_shading_WaterDistortion_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .WaterDistortion */ .V,O),N.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .SliceDraw */ .HQ,O),_.add("vuv","vec2"),D.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_18__/* .glsl */ .H)`
        if (waterColor.a < ${_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_18__/* .glsl */ .H.float(_webscene_support_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_22__/* .alphaCutoff */ .Q)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vuv = uv0;
        vpos = position;

        gl_Position = transformPosition(proj, view, vpos);`),N.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_17__/* .FloatPassUniform */ .m("timeElapsed",(({timeElapsed:e})=>e))).main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_18__/* .glsl */ .H)`discardBySlice(vpos);
vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);
tangentNormalFoam.xyz = normalize(tangentNormalFoam.xyz);
fragColor = vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);`);break;case _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__/* .ShaderOutput */ .V.Highlight:S.include(_views_3d_webgl_engine_core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_5__/* .OutputHighlight */ .Q,O),D.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_18__/* .glsl */ .H)`
        if (waterColor.a < ${_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_18__/* .glsl */ .H.float(_webscene_support_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_22__/* .alphaCutoff */ .Q)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);`),N.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .SliceDraw */ .HQ,O),N.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_18__/* .glsl */ .H)`discardBySlice(vpos);
calculateOcclusionAndOutputHighlight();`);break;case _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__/* .ShaderOutput */ .V.ObjectAndLayerIdColor:S.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_ObjectAndLayerIdColor_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .ObjectAndLayerIdColor */ .g,O),D.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_18__/* .glsl */ .H)`
        if (waterColor.a < ${_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_18__/* .glsl */ .H.float(_webscene_support_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_22__/* .alphaCutoff */ .Q)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
        forwardObjectAndLayerIdColor();`),N.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .SliceDraw */ .HQ,O),N.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_18__/* .glsl */ .H)`discardBySlice(vpos);
outputObjectAndLayerIdColor();`)}return S}const S=Object.freeze(Object.defineProperty({__proto__:null,build:O},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 58680:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ n),
/* harmony export */   f: () => (/* binding */ l),
/* harmony export */   n: () => (/* binding */ o)
/* harmony export */ });
/* unused harmony export v */
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86942);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function o(e,t){n(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function n(o,n,l=2,u=l){const i=n.length/2;let a=0,d=0;if(!(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedArray */ .iu)(n)||(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .isFloat */ .dk)(n)){for(let e=0;e<i;++e)o[a]=n[d],o[a+1]=n[d+1],a+=l,d+=u;return}const c=(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .maximumValue */ .a3)(n);if((0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .isSigned */ .JI)(n))for(let e=0;e<i;++e)o[a]=Math.max(n[d]/c,-1),o[a+1]=Math.max(n[d+1]/c,-1),a+=l,d+=u;else for(let e=0;e<i;++e)o[a]=n[d]/c,o[a+1]=n[d+1]/c,a+=l,d+=u}function l(e,t,r,f){const o=e.typedBuffer,n=e.typedBufferStride,l=f?.count??e.count;let u=(f?.dstIndex??0)*n;for(let i=0;i<l;++i)o[u]=t,o[u+1]=r,u+=n}const u=Object.freeze(Object.defineProperty({__proto__:null,fill:l,normalizeIntegerBuffer:n,normalizeIntegerBufferView:o},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 21839:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ a),
/* harmony export */   b: () => (/* binding */ n),
/* harmony export */   c: () => (/* binding */ f),
/* harmony export */   d: () => (/* binding */ e),
/* harmony export */   e: () => (/* binding */ s),
/* harmony export */   f: () => (/* binding */ l),
/* harmony export */   l: () => (/* binding */ u),
/* harmony export */   n: () => (/* binding */ d),
/* harmony export */   t: () => (/* binding */ r)
/* harmony export */ });
/* unused harmony exports g, h, s, v */
/* harmony import */ var _colorUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31415);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(539);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(t,e,f){r(t.typedBuffer,e.typedBuffer,f,t.typedBufferStride,e.typedBufferStride)}function r(t,e,r,f=3,n=f){if(t.length/f!==Math.ceil(e.length/n))return t;const o=t.length/f,i=r[0],u=r[1],l=r[2],a=r[4],s=r[5],d=r[6],c=r[8],p=r[9],h=r[10],y=r[12],B=r[13],g=r[14];let S=0,m=0;for(let M=0;M<o;M++){const r=e[S],o=e[S+1],M=e[S+2];t[m]=i*r+a*o+c*M+y,t[m+1]=u*r+s*o+p*M+B,t[m+2]=l*r+d*o+h*M+g,S+=n,m+=f}return t}function f(t,e,r){n(t.typedBuffer,e.typedBuffer,r,t.typedBufferStride,e.typedBufferStride)}function n(t,e,r,f=3,n=f){if(t.length/f!==Math.ceil(e.length/n))return;const o=t.length/f,i=r[0],u=r[1],l=r[2],a=r[3],s=r[4],d=r[5],c=r[6],p=r[7],h=r[8];let y=0,B=0;for(let g=0;g<o;g++){const r=e[y],o=e[y+1],g=e[y+2];t[B]=i*r+a*o+c*g,t[B+1]=u*r+s*o+p*g,t[B+2]=l*r+d*o+h*g,y+=n,B+=f}}function o(t,e,r){i(t.typedBuffer,e.typedBuffer,r,t.typedBufferStride,e.typedBufferStride)}function i(t,e,r,f=3,n=f){const o=Math.min(t.length/f,e.length/n);let i=0,u=0;for(let l=0;l<o;l++)t[u]=r*e[i],t[u+1]=r*e[i+1],t[u+2]=r*e[i+2],i+=n,u+=f;return t}function u(t,e,r,f){l(t.typedBuffer,e.typedBuffer,r,f,t.typedBufferStride,e.typedBufferStride)}function l(e,r,f,n,o=3,i=o){const u=Math.min(e.length/o,r.length/i);let l=0,a=0;const s=1/_colorUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .colorGamma */ .Tf;for(let t=0;t<u;t++)e[a]=n*(f*r[l])**s,e[a+1]=n*(f*r[l+1])**s,e[a+2]=n*(f*r[l+2])**s,l+=i,a+=o}function a(t,e,r,f=3,n=f){const o=t.length/f;if(o!==Math.ceil(e.length/n))return t;let i=0,u=0;for(let l=0;l<o;l++)t[u]=e[i]+r[0],t[u+1]=e[i+1]+r[1],t[u+2]=e[i+2]+r[2],i+=n,u+=f;return t}function s(t,e){d(t.typedBuffer,e.typedBuffer,t.typedBufferStride,e.typedBufferStride)}function d(t,e,r=3,f=r){const n=Math.min(t.length/r,e.length/f);let o=0,i=0;for(let u=0;u<n;u++){const n=e[o],u=e[o+1],l=e[o+2],a=n*n+u*u+l*l;if(a>0){const e=1/Math.sqrt(a);t[i]=e*n,t[i+1]=e*u,t[i+2]=e*l}o+=f,i+=r}}function c(t,e,r){const f=Math.min(t.count,e.count),n=t.typedBuffer,o=t.typedBufferStride,i=e.typedBuffer,u=e.typedBufferStride;let l=0,a=0;for(let s=0;s<f;s++)n[a]=i[l]>>r,n[a+1]=i[l+1]>>r,n[a+2]=i[l+2]>>r,l+=u,a+=o}const p=Object.freeze(Object.defineProperty({__proto__:null,linearToSRGB:l,linearToSRGBView:u,normalize:d,normalizeView:s,scale:i,scaleView:o,shiftRight:c,transformMat3:n,transformMat3View:f,transformMat4:r,transformMat4View:e,translate:a},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 12364:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* binding */ n),
  b: () => (/* binding */ d),
  l: () => (/* binding */ c),
  n: () => (/* binding */ u),
  t: () => (/* binding */ o)
});

// UNUSED EXPORTS: c, d, e, s, v

// EXTERNAL MODULE: ../node_modules/@arcgis/core/colorUtils.js
var colorUtils = __webpack_require__(31415);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
;// ../node_modules/@arcgis/core/geometry/support/buffer/math/common.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const e=()=>Logger/* default */.A.getLogger("esri.views.3d.support.buffer.math");

;// ../node_modules/@arcgis/core/chunks/vec4.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function r(t,e,r){if(t.count!==e.count)return;const f=t.count,n=r[0],o=r[1],u=r[2],i=r[3],s=r[4],c=r[5],d=r[6],a=r[7],l=r[8],p=r[9],y=r[10],B=r[11],m=r[12],h=r[13],S=r[14],g=r[15],M=t.typedBuffer,b=t.typedBufferStride,j=e.typedBuffer,v=e.typedBufferStride;for(let w=0;w<f;w++){const t=w*b,e=w*v,r=j[e],f=j[e+1],V=j[e+2],_=j[e+3];M[t]=n*r+s*f+l*V+m*_,M[t+1]=o*r+c*f+p*V+h*_,M[t+2]=u*r+d*f+y*V+S*_,M[t+3]=i*r+a*f+B*V+g*_}}function f(t,r,f,n=4,o=n){if(t.length/n!==r.length/o)return void e().error("source and destination buffers need to have the same number of elements");const u=t.length/n,i=f[0],s=f[1],c=f[2],d=f[3],a=f[4],l=f[5],p=f[6],y=f[7],B=f[8],m=f[9],h=f[10],S=f[11],g=f[12],M=f[13],b=f[14],j=f[15];let v=0,w=0;for(let e=0;e<u;e++){const e=r[v],f=r[v+1],u=r[v+2],V=r[v+3];t[w]=i*e+a*f+B*u+g*V,t[w+1]=s*e+l*f+m*u+M*V,t[w+2]=c*e+p*f+h*u+b*V,t[w+3]=d*e+y*f+S*u+j*V,v+=o,w+=n}}function n(t,e,r){o(t.typedBuffer,e.typedBuffer,r,t.typedBufferStride,e.typedBufferStride)}function o(t,e,r,f=4,n=f){if(t.length/f!==e.length/n)return;const o=t.length/f,u=r[0],i=r[1],s=r[2],c=r[3],d=r[4],a=r[5],l=r[6],p=r[7],y=r[8];let B=0,m=0;for(let h=0;h<o;h++){const r=e[B],o=e[B+1],h=e[B+2],S=e[B+3];t[m]=u*r+c*o+l*h,t[m+1]=i*r+d*o+p*h,t[m+2]=s*r+a*o+y*h,t[m+3]=S,B+=n,m+=f}}function u(t,e){const r=Math.min(t.count,e.count),f=t.typedBuffer,n=t.typedBufferStride,o=e.typedBuffer,u=e.typedBufferStride;for(let i=0;i<r;i++){const t=i*n,e=i*u,r=o[e],s=o[e+1],c=o[e+2],d=r*r+s*s+c*c;if(d>0){const e=1/Math.sqrt(d);f[t]=e*r,f[t+1]=e*s,f[t+2]=e*c}}}function i(t,e,r){s(t.typedBuffer,e,r,t.typedBufferStride)}function s(t,e,r,f=4){const n=Math.min(t.length/f,e.count),o=e.typedBuffer,u=e.typedBufferStride;let i=0,s=0;for(let c=0;c<n;c++)t[s]=r*o[i],t[s+1]=r*o[i+1],t[s+2]=r*o[i+2],t[s+3]=r*o[i+3],i+=u,s+=f}function c(t,e,r,f){d(t.typedBuffer,e,r,f,t.typedBufferStride)}function d(e,r,f,n,o=4){const u=Math.min(e.length/o,r.count),i=r.typedBuffer,s=r.typedBufferStride;let c=0,d=0;const a=1/colorUtils/* colorGamma */.Tf;for(let t=0;t<u;t++)e[d]=n*(f*i[c])**a,e[d+1]=n*(f*i[c+1])**a,e[d+2]=n*(f*i[c+2])**a,e[d+3]=n*f*i[c+3],c+=s,d+=o}const a=Object.freeze(Object.defineProperty({__proto__:null,linearToSRGB:d,linearToSRGBView:c,normalize:u,scale:s,scaleView:i,transformMat3:o,transformMat3View:n,transformMat4:f,transformMat4View:r},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 80912:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class t{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get outerSize(){return this._outer.size}get(t,e){return this._outer.get(t)?.get(e)}getInner(t){return this._outer.get(t)}set(t,e,r){const o=this._outer.get(t);o?o.set(e,r):this._outer.set(t,new Map([[e,r]]))}delete(t,e){const r=this._outer.get(t);r&&(r.delete(e),0===r.size&&this._outer.delete(t))}forEach(t){this._outer.forEach(((e,r)=>t(e,r)))}forAll(t){this._outer.forEach(((e,r)=>e.forEach(((e,o)=>t(e,r,o)))))}}


/***/ }),

/***/ 70397:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ o)
/* harmony export */ });
/* unused harmony export projectVectorToPointAsync */
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58359);
/* harmony import */ var _projectionUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68490);
/* harmony import */ var _projectVectorToVector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42120);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function o(r,t,o){return!!(0,_projectVectorToVector_js__WEBPACK_IMPORTED_MODULE_2__/* .projectVectorToVector */ .F)(r,t,i,o.spatialReference)&&(o.x=i[0],o.y=i[1],o.z=i[2],!0)}async function c(r,e,c,i){return await t(e,c.spatialReference,null,i),o(r,e,c)}const i=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__/* .create */ .vt)();


/***/ }),

/***/ 21104:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19251);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(539);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4130);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73446);
/* harmony import */ var _MeshMaterial_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78118);
/* harmony import */ var _MeshMaterialMetallicRoughness_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93413);
/* harmony import */ var _meshProperties_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(67082);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var u;let h=u=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{static from(t){return (0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__/* .ensureClass */ .PZ)(u,t)}constructor(t){super(t),this.faces=null,this.material=null,this.name=void 0,this.shading="source",this.trustSourceNormals=!1}castFaces(t){return (0,_meshProperties_js__WEBPACK_IMPORTED_MODULE_10__/* .castArray */ .b)(t,Uint32Array,[Uint16Array],{loggerTag:".faces=",stride:3},_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.getLogger(this))}castMaterial(t){return (0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__/* .ensureClass */ .PZ)(t&&"object"==typeof t&&("metallic"in t||"roughness"in t||"metallicRoughnessTexture"in t)?_MeshMaterialMetallicRoughness_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A:_MeshMaterial_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,t)}clone(){return new u({faces:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.faces),shading:this.shading,material:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.material),trustSourceNormals:this.trustSourceNormals,name:this.name})}cloneWithDeduplication(t,r){const s={faces:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(t,r):null,trustSourceNormals:this.trustSourceNormals,name:this.name};return new u(s)}get memoryUsage(){let t=0;return null!=this.faces&&(t+=this.faces.byteLength),null!=this.material&&(t+=this.material.memoryUsage),t}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:_meshProperties_js__WEBPACK_IMPORTED_MODULE_10__/* .writeTypedArray */ .B}})],h.prototype,"faces",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__/* .cast */ .w)("faces")],h.prototype,"castFaces",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:_MeshMaterial_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,json:{write:!0}})],h.prototype,"material",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__/* .cast */ .w)("material")],h.prototype,"castMaterial",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:!0}})],h.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:!0}})],h.prototype,"shading",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Boolean})],h.prototype,"trustSourceNormals",void 0),h=u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.geometry.support.MeshComponent")],h);


/***/ }),

/***/ 78118:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96220);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63863);
/* harmony import */ var _MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34804);
/* harmony import */ var _MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(94578);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var n;let u=n=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A{constructor(o){super(o),this.color=null,this.colorTexture=null,this.colorTextureTransform=null,this.normalTexture=void 0,this.normalTextureTransform=void 0,this.alphaMode="auto",this.alphaCutoff=.5,this.doubleSided=!0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(o,r){const e=null!=o?o.get(this):null;if(e)return e;const t=new n(this.clonePropertiesWithDeduplication(r));return null!=o&&o.set(this,t),t}clonePropertiesWithDeduplication(o){return{color:null!=this.color?this.color.clone():null,colorTexture:this.colorTexture?.cloneWithDeduplication(o),normalTexture:this.normalTexture?.cloneWithDeduplication(o),alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided,colorTextureTransform:this.colorTextureTransform?.clone(),normalTextureTransform:this.normalTextureTransform?.clone()}}get memoryUsage(){return this.getMemoryUsage()}getMemoryUsage(){let o=0;return o+=null!=this.color?16:0,null!=this.colorTexture&&(o+=this.colorTexture.memoryUsage),o+=null!=this.colorTextureTransform?20:0,null!=this.normalTexture&&(o+=this.normalTexture.memoryUsage),o+=null!=this.normalTextureTransform?20:0,o}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"color",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"colorTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"colorTextureTransform",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"normalTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"normalTextureTransform",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({nonNullable:!0,json:{write:!0}})],u.prototype,"alphaMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({nonNullable:!0,json:{write:!0}})],u.prototype,"alphaCutoff",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({nonNullable:!0,json:{write:!0}})],u.prototype,"doubleSided",void 0),u=n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.geometry.support.MeshMaterial")],u);


/***/ }),

/***/ 93413:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96220);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _MeshMaterial_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78118);
/* harmony import */ var _MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34804);
/* harmony import */ var _MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(94578);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var n;let u=n=class extends _MeshMaterial_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A{constructor(e){super(e),this.emissiveColor=null,this.emissiveTexture=null,this.emissiveTextureTransform=void 0,this.occlusionTexture=null,this.occlusionTextureTransform=void 0,this.metallic=1,this.roughness=1,this.metallicRoughnessTexture=null,this.metallicRoughnessTextureTransform=void 0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,s){const o=null!=e?e.get(this):null;if(o)return o;const t=new n(this.clonePropertiesWithDeduplication(s));return null!=e&&e.set(this,t),t}getMemoryUsage(){let e=super.getMemoryUsage();return e+=null!=this.emissiveColor?16:0,null!=this.emissiveTexture&&(e+=this.emissiveTexture.memoryUsage),e+=null!=this.emissiveTextureTransform?20:0,null!=this.occlusionTexture&&(e+=this.occlusionTexture.memoryUsage),e+=null!=this.occlusionTextureTransform?20:0,null!=this.metallicRoughnessTexture&&(e+=this.metallicRoughnessTexture.memoryUsage),e+=null!=this.metallicRoughnessTextureTransform?20:0,e}clonePropertiesWithDeduplication(e){return{...super.clonePropertiesWithDeduplication(e),emissiveColor:this.emissiveColor?.clone(),emissiveTexture:this.emissiveTexture?.cloneWithDeduplication(e),emissiveTextureTransform:this.emissiveTextureTransform?.clone(),occlusionTexture:this.occlusionTexture?.cloneWithDeduplication(e),occlusionTextureTransform:this.occlusionTextureTransform?.clone(),metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:this.metallicRoughnessTexture?.cloneWithDeduplication(e),metallicRoughnessTextureTransform:this.metallicRoughnessTextureTransform?.clone()}}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"emissiveColor",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"emissiveTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"emissiveTextureTransform",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"occlusionTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"occlusionTextureTransform",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],u.prototype,"metallic",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],u.prototype,"roughness",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"metallicRoughnessTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"metallicRoughnessTextureTransform",void 0),u=n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.geometry.support.MeshMaterialMetallicRoughness")],u);


/***/ }),

/***/ 34804:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39831);
/* harmony import */ var _core_imageUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25801);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73446);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75094);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(77542);
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(63680);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var p;const h=new WeakMap;let d=0,u=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A{static{p=this}constructor(t){super(t),this.wrap="repeat"}get url(){return this._get("url")||null}set url(t){this._set("url",t),t&&this._set("data",null)}get data(){return this._get("data")||null}set data(t){this._set("data",t),t&&this._set("url",null)}writeData(t,e,a,r){if(t instanceof HTMLImageElement){const s={type:"image-element",src:(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_10__.t)(t.src,r),crossOrigin:t.crossOrigin};e[a]=s}else if(t instanceof HTMLCanvasElement){const r={type:"canvas-element",imageData:m(t.getContext("2d").getImageData(0,0,t.width,t.height))};e[a]=r}else if(t instanceof HTMLVideoElement){const s={type:"video-element",src:(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_10__.t)(t.src,r),autoplay:t.autoplay,loop:t.loop,muted:t.muted,crossOrigin:t.crossOrigin,preload:t.preload};e[a]=s}else if(t instanceof ImageData){const r={type:"image-data",imageData:m(t)};e[a]=r}}readData(t){switch(t.type){case"image-element":{const e=new Image;return e.src=t.src,e.crossOrigin=t.crossOrigin,e}case"canvas-element":{const e=g(t.imageData),a=document.createElement("canvas");return a.width=e.width,a.height=e.height,a.getContext("2d").putImageData(e,0,0),a}case"image-data":return g(t.imageData);case"video-element":{const e=document.createElement("video");return e.src=t.src,e.crossOrigin=t.crossOrigin,e.autoplay=t.autoplay,e.loop=t.loop,e.muted=t.muted,e.preload=t.preload,e}default:return}}get transparent(){const{data:t,url:e}=this,a=t=>t?.toLowerCase().endsWith(".png")||t?.toLocaleLowerCase().startsWith("data:image/png;");return t instanceof HTMLCanvasElement?f(t.getContext("2d").getImageData(0,0,t.width,t.height)):t instanceof ImageData?f(t):!(!e||!a(e))||!!(t instanceof HTMLImageElement&&a(t.src))}set transparent(t){this._overrideIfSome("transparent",t)}get contentHash(){const t="string"==typeof this.wrap?this.wrap:"object"==typeof this.wrap?`${this.wrap.horizontal}/${this.wrap.vertical}`:"",e=(e="")=>`d:${e},t:${this.transparent},w:${t}`;return null!=this.url?e(this.url):null!=this.data?this.data instanceof HTMLImageElement||this.data instanceof HTMLVideoElement?e(this.data.src):(h.has(this.data)||h.set(this.data,++d),e(h.get(this.data))):e()}get memoryUsage(){let t=0;if(t+=null!=this.url?this.url.length:0,null!=this.data){const e=this.data;"data"in e?t+=e.data.byteLength:e instanceof HTMLImageElement?t+=e.naturalWidth*e.naturalHeight*3:e instanceof HTMLCanvasElement&&(t+=e.width*e.height*3)}return t}clone(){const t={url:this.url,data:this.data,transparent:this.transparent,wrap:this._cloneWrap()};return new p(t)}cloneWithDeduplication(t){const e=t.get(this);if(e)return e;const a=this.clone();return t.set(this,a),a}_cloneWrap(){return"string"==typeof this.wrap?this.wrap:{horizontal:this.wrap.horizontal,vertical:this.wrap.vertical}}static from(t){return"string"==typeof t?new p({url:t}):t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof ImageData||t instanceof HTMLVideoElement?new p({data:t}):(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__/* .ensureClass */ .PZ)(p,t)}};function m(t){let e="";for(let a=0;a<t.data.length;a++)e+=String.fromCharCode(t.data[a]);return{data:btoa(e),width:t.width,height:t.height}}function g(t){const a=atob(t.data),r=new Uint8ClampedArray(a.length);for(let e=0;e<a.length;e++)r[e]=a.charCodeAt(e);return (0,_core_imageUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .wrapImageData */ .eV)(r,t.width,t.height)}function f(t){for(let e=3;e<t.data.length;e+=4)if(255!==t.data[e])return!0;return!1}(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_10__.w}})],u.prototype,"url",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:{overridePolicy(){return{enabled:!this.url}}}}}),(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)()],u.prototype,"data",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__/* .writer */ .K)("data")],u.prototype,"writeData",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__/* .reader */ .w)("data")],u.prototype,"readData",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Boolean,json:{write:{overridePolicy(){return{enabled:this._isOverridden("transparent")}}}}})],u.prototype,"transparent",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:!0}})],u.prototype,"wrap",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({readOnly:!0})],u.prototype,"contentHash",null),u=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.geometry.support.MeshTexture")],u);


/***/ }),

/***/ 94578:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24793);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let p=class extends(_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.ClonableMixin(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)){constructor(o){super(o),this.offset=[0,0],this.rotation=0,this.scale=[1,1]}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"offset",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"rotation",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"scale",void 0),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.geometry.support.MeshTextureTransform")],p);


/***/ }),

/***/ 27841:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ t)
/* harmony export */ });
/* unused harmony export compactShortArray */
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86942);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function n(n){return Array.isArray(n)?n.length<r?n:new Int16Array(n):n.length<r?Array.from(n):n}function t(n){return n<=_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9?new Array(n):new Int16Array(n)}


/***/ }),

/***/ 67082:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ r),
/* harmony export */   b: () => (/* binding */ n)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(e,n,r,t){const{loggerTag:o,stride:f}=n;return e.length%f!==0?(t.error(o,`Invalid array length, expected a multiple of ${f}`),new r([])):e}function n(n,r,t,o,f){if(!n)return n;if(n instanceof r)return e(n,o,r,f);for(const i of t)if(n instanceof i)return e(new r(n),o,r,f);if(Array.isArray(n))return e(new r(n),o,r,f);{const e=t.map((e=>`'${e.name}'`));return f.error(`Failed to set property, expected one of ${e}, but got ${n.constructor.name}`),new r([])}}function r(e,n,r){n[r]=t(e)}function t(e){const n=new Array(e.length);for(let r=0;r<e.length;r++)n[r]=e[r];return n}


/***/ }),

/***/ 52209:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92504);
/* harmony import */ var _Indices_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42965);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(e,s,u){const c=Array.isArray(e),a=c?e.length/s:e.byteLength/(4*s),h=c?e:new Uint32Array(e,0,a*s),y=u?.minReduction??0,A=u?.originalIndices||null,g=A?A.length:0,m=u?.componentOffsets||null;let w=0;if(m)for(let t=0;t<m.length-1;t++){const n=m[t+1]-m[t];n>w&&(w=n)}else w=a;const U=Math.floor(1.1*w)+1;(null==i||i.length<2*U)&&(i=new Uint32Array((0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .nextHighestPowerOfTwo */ .cU)(2*U)));for(let t=0;t<2*U;t++)i[t]=0;let b=0;const d=!!m&&!!A,p=d?g:a;let M=(0,_Indices_js__WEBPACK_IMPORTED_MODULE_1__/* .newIndexArray */ .my)(a);const j=new Uint32Array(g),q=1.96;let I=0!==y?Math.ceil(4*q*q/(y*y)*y*(1-y)):p,k=1,x=m?m[1]:p;for(let t=0;t<p;t++){if(t===I){const n=1-b/t;if(n+q*Math.sqrt(n*(1-n)/t)<y)return null;I*=2}if(t===x){for(let t=0;t<2*U;t++)i[t]=0;if(A)for(let t=m[k-1];t<m[k];t++)j[t]=M[A[t]];x=m[++k]}const n=d?A[t]:t,r=n*s,e=f(h,r,s);let o=e%U,u=b;for(;0!==i[2*o+1];){if(i[2*o]===e){const t=i[2*o+1]-1;if(l(h,r,t*s,s)){u=M[t];break}}o++,o>=U&&(o-=U)}u===b&&(i[2*o]=e,i[2*o+1]=n+1,b++),M[n]=u}if(0!==y&&1-b/a<y)return null;if(d){for(let t=m[k-1];t<j.length;t++)j[t]=M[A[t]];M=(0,_Indices_js__WEBPACK_IMPORTED_MODULE_1__/* .compactMeshIndices */ .uW)(j)}const C=c?new Array(b):new Uint32Array(b*s);b=0;for(let t=0;t<p;t++)if(M[t]===b){o(h,(d?A[t]:t)*s,C,b*s,s),b++}if(A&&!d){const t=new Uint32Array(g);for(let n=0;n<t.length;n++)t[n]=M[A[n]];M=(0,_Indices_js__WEBPACK_IMPORTED_MODULE_1__/* .compactMeshIndices */ .uW)(t)}return{buffer:Array.isArray(C)?C:C.buffer,indices:M,uniqueCount:b}}function l(t,n,r,e){for(let l=0;l<e;l++)if(t[n+l]!==t[r+l])return!1;return!0}function o(t,n,r,e,l){for(let o=0;o<l;o++)r[e+o]=t[n+o]}function f(t,n,r){let e=0;for(let l=0;l<r;l++)e=t[n+l]+e|0,e=e+(e<<11)+(e>>>2)|0;return e>>>0}let i=null;


/***/ }),

/***/ 28507:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectMeshVertexPositions: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84119);
/* harmony import */ var _MeshGeoreferencedVertexSpace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97557);
/* harmony import */ var _spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87926);
/* harmony import */ var _vertexSpaceConversion_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5025);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function n(n,i){const p=(0,_vertexSpaceConversion_js__WEBPACK_IMPORTED_MODULE_3__/* .convertVertexSpace */ .UR)(n,_MeshGeoreferencedVertexSpace_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.absolute);if(!p)return null;let s=p.position;return (0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .equals */ .aI)(n.spatialReference,i)||(s=new Float64Array(p.position.length),(0,_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_0__.projectBuffer)(p.position,n.spatialReference,0,s,i,0))?s:null}


/***/ }),

/***/ 72188:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $5: () => (/* binding */ h),
/* harmony export */   CN: () => (/* binding */ F),
/* harmony export */   GN: () => (/* binding */ L),
/* harmony export */   JP: () => (/* binding */ O),
/* harmony export */   KM: () => (/* binding */ C),
/* harmony export */   Mv: () => (/* binding */ G),
/* harmony export */   OD: () => (/* binding */ V),
/* harmony export */   X4: () => (/* binding */ E),
/* harmony export */   gZ: () => (/* binding */ b),
/* harmony export */   gr: () => (/* binding */ g),
/* harmony export */   qs: () => (/* binding */ _),
/* harmony export */   si: () => (/* binding */ R),
/* harmony export */   xA: () => (/* binding */ w)
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92504);
/* harmony import */ var _core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25423);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78607);
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21742);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86128);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24121);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58359);
/* harmony import */ var _projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59538);
/* harmony import */ var _projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84119);
/* harmony import */ var _Ellipsoid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(99817);
/* harmony import */ var _spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87926);
/* harmony import */ var _webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(96082);
/* harmony import */ var _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(57813);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(21839);
/* harmony import */ var _chunks_vec4_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(12364);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const O="Projection may be possible after calling projection.load().";function F(r,t,o,e){r.error(`Failed to project from (wkid:${t.wkid}) to (wkid:${o.wkid}).${e?" ":""}${e}`)}function E(r,t,o,e,n,i){return B(x.TO_PCPF,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f */ .xs.fromTypedArray(r),V.NORMAL,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(t),o,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(e),n,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f */ .xs.fromTypedArray(i))?i:null}function R(r,t,o,e,n,i){return B(x.FROM_PCPF,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f */ .xs.fromTypedArray(r),V.NORMAL,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(t),o,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(e),n,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f */ .xs.fromTypedArray(i))?i:null}function g(r,t,o,e){return (0,_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_8__.projectBuffer)(r,t,0,o,e,0)?o:null}function h(r,t,o,e){return (0,_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_8__.projectBuffer)(r,t,0,o,e,0)?o:null}function _(t,e,n){return (0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_1__/* .normalFromMat4 */ .Ge)(q,n),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_13__.b)(e,t,q),(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .hasScaling */ .or)(q)&&(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_13__.n)(e,e),e}function C(t,o,n){return (0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_1__/* .fromMat4 */ .z0)(q,n),(0,_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_14__.t)(o,t,q),(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .hasScaling */ .or)(q)&&(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_13__.n)(o,o,4),o}function b(r,o,e,n){const i=o===V.NORMAL;return k(r,o,e,((r,o)=>{const e=Math.cos((0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .deg2rad */ .kU)(r));o[0]=i?e:1/e,o[1]=1}),n)}function L(r,t,o,e){const n=t===V.NORMAL;return k(r,t,o,((r,t)=>{const o=Math.cosh(-r/_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_9__/* .earth */ .$O.radius);t[0]=1,t[1]=n?o:1/o}),e)}function k(r,t,o,e,n){const i=t===V.NORMAL?3:4,f=[0,0];for(let c=0,a=1;c<r.length;c+=i,a+=3){e(o[a],f);const t=r[c]*f[0],s=r[c+1]*f[1],m=r[c+2],u=1/Math.sqrt(t*t+s*s+m*m);n[c]=t*u,n[c+1]=s*u,n[c+2]=m*u,4===i&&(n[c+3]=r[c+3])}return n}function w(r,t,o,e,n,i){if(!B(x.TO_PCPF,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f */ .xs.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),V.TANGENT,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(t),o,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(e),n,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f */ .xs.fromTypedArray(i,4*Float32Array.BYTES_PER_ELEMENT)))return null;for(let f=3;f<r.length;f+=4)i[f]=r[f];return i}function G(r,t,o,e,n,i){if(!B(x.FROM_PCPF,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f */ .xs.fromTypedArray(r,16),V.TANGENT,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(t),o,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(e),n,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f */ .xs.fromTypedArray(i,16)))return null;for(let f=3;f<r.length;f+=4)i[f]=r[f];return i}var V,x;function v(r,t,n,f,c){switch((0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_7__/* .computeTranslationToOriginAndRotation */ .l)(f,n,Y,f),r===x.FROM_PCPF&&(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_3__/* .invert */ .B8)(Y,Y),t){case V.NORMAL:return (0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_1__/* .normalFromMat4 */ .Ge)(c,Y);case V.TANGENT:return (0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_1__/* .fromMat4 */ .z0)(c,Y)}}function B(r,t,o,e,n,i,f,s){if(!t)return;const m=e.count;if($(n))for(let a=0;a<m;a++)i.getVec(a,S),t.getVec(a,U),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.o)(U,U,v(r,o,S,f,q)),s.setVec(a,U);else for(let u=0;u<m;u++){i.getVec(u,S),t.getVec(u,U);const n=(0,_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_11__/* .y2lat */ .jg)(e.get(u,1));let m=Math.cos(n);o===V.TANGENT!=(r===x.TO_PCPF)&&(m=1/m),v(r,o,S,f,q),r===x.TO_PCPF?(q[0]*=m,q[1]*=m,q[2]*=m,q[3]*=m,q[4]*=m,q[5]*=m):(q[0]*=m,q[3]*=m,q[6]*=m,q[1]*=m,q[4]*=m,q[7]*=m),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.o)(U,U,q),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.n)(U,U),s.setVec(u,U)}return s}function $(r){return r.isWGS84||(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .isCGCS2000 */ .x1)(r)||(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .isMars */ .q8)(r)||(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .isMoon */ .KQ)(r)}!function(r){r[r.NORMAL=0]="NORMAL",r[r.TANGENT=1]="TANGENT"}(V||(V={})),function(r){r[r.TO_PCPF=0]="TO_PCPF",r[r.FROM_PCPF=1]="FROM_PCPF"}(x||(x={}));const S=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),U=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),Y=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),q=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)();


/***/ }),

/***/ 5025:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UR: () => (/* binding */ B),
/* harmony export */   p5: () => (/* binding */ k),
/* harmony export */   xK: () => (/* binding */ nt)
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(539);
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92504);
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92976);
/* harmony import */ var _core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25423);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78607);
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21742);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86128);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24121);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(58359);
/* harmony import */ var _spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32937);
/* harmony import */ var _projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59538);
/* harmony import */ var _projection_projectPointToVector_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(42609);
/* harmony import */ var _meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1114);
/* harmony import */ var _spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(87926);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(21839);
/* harmony import */ var _projection_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(72188);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const M=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");function k(t,n,{vertexSpace:r,spatialReference:e}){if("georeferenced"===r.type){const o=t;if(!(0,_projection_projectPointToVector_js__WEBPACK_IMPORTED_MODULE_11__/* .projectPointToVector */ .g)(n,o,e))return!1;const{origin:i}=r;return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__.d)(t,o,i),!0}const o=(0,_spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .getSphericalPCPF */ .lO)(e),i=t;if(!(0,_projection_projectPointToVector_js__WEBPACK_IMPORTED_MODULE_11__/* .projectPointToVector */ .g)(n,i,o))return!1;const{origin:l}=r,a=lt;if(!(0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_10__/* .computeTranslationToOriginAndRotation */ .l)(e,l,a,o))return!1;const c=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .invert */ .B8)(lt,a);return null!=c&&((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__.t)(t,i,c),!0)}function B(t,n,r){const{vertexSpace:e,transform:o,vertexAttributes:i}=t,a=(0,_meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .isRelativeVertexSpace */ .Hq)(e)?o:null,s=X(t.spatialReference,r,at.SOURCE_AND_TARGET);if((0,_meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .vertexSpaceEquals */ .yJ)(e,n)&&(!a||(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .exactEquals */ .t2)(a.localMatrix,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__/* .IDENTITY */ .zK))&&Y(s)){const{position:t,normal:n,tangent:e}=i,o=r?.allowBufferReuse;return{position:o?t:t.slice(),normal:o?n:n?.slice(),tangent:o?e:e?.slice()}}switch(t.vertexSpace.type){case"local":return"local"===n.type?H(t,t.vertexSpace,n.origin,r):P(t,t.vertexSpace,n.origin,r);case"georeferenced":return"local"===n.type?q(t,t.vertexSpace,n.origin,r):L(t,t.vertexSpace,n.origin,r)}}function L({vertexAttributes:t,transform:n,spatialReference:r},{origin:e},o,i){const l=X(r,i,at.SOURCE_AND_TARGET),a=e||!Y(l)?(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .copy */ .C)(rt,n?.localMatrix??_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__/* .IDENTITY */ .zK):null;a&&W(a,r,i,at.SOURCE_AND_TARGET);const{position:s,normal:u,tangent:f}=a?I(t,a):t,g=i?.allowBufferReuse,A=g?s:new Float64Array(s.length);let R=s;if(e&&(R=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.a)(A,R,e)),o){const t=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__.u)(it,o);R=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.a)(A,R,t)}return{position:R!==t.position||g?R:R.slice(),normal:u!==t.normal||g?u:u?.slice(),tangent:f!==t.tangent||g?f:f?.slice()}}function V(t,n){return n?.useEllipsoid&&(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_13__/* .isEarth */ .B3)(t)?_spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .WGS84ECEFSpatialReference */ .Y0:(0,_spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .getSphericalPCPF */ .lO)(t)}function P({spatialReference:t,vertexAttributes:n,transform:r},{origin:e},o,i){const l=V(t,i);if(!(0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_10__/* .computeTranslationToOriginAndRotation */ .l)(t,e,rt,l))return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),t,l),null;r&&(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .multiply */ .lw)(rt,rt,r.localMatrix),W(rt,t,i,at.SOURCE);const a=new Float64Array(n.position.length),s=J(n.position,rt,t,a,l);if(!s)return null;const c=K(s,t,a,l,n.normal,rt);if(n.normal&&!c)return null;const f=Q(s,t,a,l,n.tangent,rt);if(n.tangent&&!f)return null;if(o){const t=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__.u)(it,o);(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.a)(s,s,t)}return{position:s,normal:c,tangent:f}}function q({vertexAttributes:t,spatialReference:n,transform:r},{origin:e},i,l){const c=V(n,l);if(!(0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_10__/* .computeTranslationToOriginAndRotation */ .l)(n,i,rt,c))return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),n,c),null;const u=1/X(n,l,at.TARGET);(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .scale */ .hs)(rt,rt,[u,u,u]);const f=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .invert */ .B8)(et,rt),{position:m,normal:p,tangent:g}=z(t,e,r),A=new Float64Array(m.length),R=Z(m,n,f,A,c);if(!R)return null;const x=(0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_3__/* .normalFromMat4 */ .Ge)(ot,f),E=$(p,m,n,A,c,x,p!==t.normal?p:void 0);if(!E&&p)return null;const v=tt(g,m,n,A,c,x,g!==t.tangent?g:void 0);return!v&&g?null:{position:R,normal:E,tangent:v}}function z(t,n,r){if(!n)return t;if(!r){const{position:r,normal:e,tangent:o}=t;return{position:(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.a)(new Float64Array(r.length),r,n),tangent:o,normal:e}}const e=I(t,r.localMatrix);return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.a)(e.position,e.position,n),e}function H({vertexAttributes:t,spatialReference:n,transform:r},{origin:e},o,i){const l=V(n,i);if(!(0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_10__/* .computeTranslationToOriginAndRotation */ .l)(n,e,rt,l))return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),n,l),null;if(r&&(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .multiply */ .lw)(rt,rt,r.localMatrix),!(0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_10__/* .computeTranslationToOriginAndRotation */ .l)(n,o,et,l))return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),l,n),null;(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .invert */ .B8)(et,et);const a=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .multiply */ .lw)(rt,et,rt);return W(a,n,i,at.SOURCE_AND_TARGET),I(t,a)}function I(t,n){const r=new Float64Array(t.position.length);(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.t)(r,t.position,n);const e=t.normal?new Float32Array(t.normal.length):null,o=t.tangent?new Float32Array(t.tangent.length):null;return e&&t.normal&&(0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .transformNormal */ .qs)(t.normal,e,n),o&&t.tangent&&(0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .transformTangent */ .KM)(t.tangent,o,n),{position:r,normal:e,tangent:o}}function J(t,n,r,e,o){(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.t)(e,t,n);const i=new Float64Array(t.length);return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .projectFromPCPF */ .$5)(e,o,i,r)?i:((0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),o,r),null)}function K(t,n,r,e,o,i){if(null==o)return null;const l=new Float32Array(o.length);return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .transformNormal */ .qs)(o,l,i),(0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .projectNormalFromPCPF */ .si)(l,t,n,r,e,l)?l:((0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),e,n),null)}function Q(t,n,r,e,o,i){if(null==o)return null;const l=new Float32Array(o.length);return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .transformTangent */ .KM)(o,l,i),(0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .projectTangentFromPCPF */ .Mv)(l,t,n,r,e,l)?l:((0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),e,n),null)}function W(t,n,r,e){const o=X(n,r,e);Y(o)||(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .scale */ .hs)(t,t,[o,o,o])}function X(t,n,r){const e=!!(r&at.SOURCE),o=!!(r&at.TARGET),i=n?.sourceUnit,l=n?.targetUnit;if(!i&&!l)return 1;let a=nt(i,t);e||!i||Y(a)||(M().warn("source unit conversion not supported"),a=1);let s=1/nt(l,t);return o||!l||Y(s)||(M().warn("target unit conversion not supported"),s=1),a*s}function Y(t){return (0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .floatEqualUlp */ .Io)(t,1)}function Z(t,n,r,e,o){const i=(0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .projectToPCPF */ .gr)(t,n,e,o);if(!i)return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),n,o),null;const l=new Float64Array(i.length);return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.t)(l,i,r),l}function $(t,n,r,e,o,i,l){if(null==t)return null;const a=l??new Float32Array(t.length);return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .projectNormalToPCPF */ .X4)(t,n,r,e,o,a)?((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.b)(a,a,i),a):((0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),r,o),null)}function tt(t,n,r,e,o,i,l){if(null==t)return null;const a=l??new Float32Array(t.length);return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .projectTangentToPCPF */ .xA)(t,n,r,e,o,a)?((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.b)(a,a,i,4),a):((0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),r,o),null)}function nt(t,n){if(null==t)return 1;const o=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getMetersPerCartesianUnitForSR */ .KX)(n);return 1/(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .convertUnit */ .oU)(o,"meters",t)}const rt=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),et=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),ot=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),it=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__/* .create */ .vt)(),lt=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)();var at;!function(t){t[t.NONE=0]="NONE",t[t.SOURCE=1]="SOURCE",t[t.TARGET=2]="TARGET",t[t.SOURCE_AND_TARGET=3]="SOURCE_AND_TARGET"}(at||(at={}));


/***/ }),

/***/ 57829:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ c)
/* harmony export */ });
/* unused harmony export fitPlane */
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92504);
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92976);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24121);
/* harmony import */ var _Axis_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58331);
/* harmony import */ var _plane_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38774);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function c(t,o,s){const n=e(f,t,o,s)?(0,_plane_js__WEBPACK_IMPORTED_MODULE_4__/* .getNormal */ .Qj)(f):[0,0,1];return Math.abs(n[2])>Math.cos((0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .deg2rad */ .kU)(80))?_Axis_js__WEBPACK_IMPORTED_MODULE_3__/* .Axis */ ._.Z:Math.abs(n[1])>Math.abs(n[0])?_Axis_js__WEBPACK_IMPORTED_MODULE_3__/* .Axis */ ._.Y:_Axis_js__WEBPACK_IMPORTED_MODULE_3__/* .Axis */ ._.X}function e(r,i,a,n){const c=(r=>!Array.isArray(r[0]))(i)?(r,t)=>i[3*r+t]:(r,t)=>i[r][t],e=n?(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .getMetersPerUnitForSR */ .GA)(n)/(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .getMetersPerVerticalUnitForSR */ .G9)(n):1;return (0,_plane_js__WEBPACK_IMPORTED_MODULE_4__/* .fromManyPoints */ .lU)(r,((r,t)=>(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.i)(r,c(t,0)*e,c(t,1)*e,c(t,2))),a)}const f=(0,_plane_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)();


/***/ }),

/***/ 17566:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Wq: () => (/* binding */ p),
/* harmony export */   lO: () => (/* binding */ f),
/* harmony export */   oR: () => (/* binding */ a)
/* harmony export */ });
/* unused harmony export isCounterClockwise */
/* harmony import */ var _chunks_earcut_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16528);
/* harmony import */ var _Axis_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58331);
/* harmony import */ var _coordsUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65319);
/* harmony import */ var _DoubleArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90166);
/* harmony import */ var _Indices_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42965);
/* harmony import */ var _polygonUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57829);
/* harmony import */ var _meshUtils_deduplicate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52209);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function f(t){const e=a(t.rings,t.hasZ,p.CCW_IS_HOLE,t.spatialReference),s=new Array;let l=0,f=0;for(const r of e.polygons){const t=r.count,c=r.index,h=(0,_DoubleArray_js__WEBPACK_IMPORTED_MODULE_3__/* .doubleSubArray */ .l5)(e.position,3*c,3*t),a=r.holeIndices.map((n=>n-c)),g=(0,_Indices_js__WEBPACK_IMPORTED_MODULE_4__/* .compactMeshIndices */ .uW)((0,_chunks_earcut_js__WEBPACK_IMPORTED_MODULE_0__.e)(h,a,3));s.push({position:h,faces:g}),l+=h.length,f+=g.length}const g=h(s,l,f),u=Array.isArray(g.position)?(0,_meshUtils_deduplicate_js__WEBPACK_IMPORTED_MODULE_6__/* .deduplicate */ .b)(g.position,3,{originalIndices:g.faces}):(0,_meshUtils_deduplicate_js__WEBPACK_IMPORTED_MODULE_6__/* .deduplicate */ .b)(g.position.buffer,6,{originalIndices:g.faces});return g.position=(0,_DoubleArray_js__WEBPACK_IMPORTED_MODULE_3__/* .doubleArrayFrom */ .xm)(new Float64Array(u.buffer)),g.faces=u.indices,g}function h(n,t,e){if(1===n.length)return n[0];const o=(0,_DoubleArray_js__WEBPACK_IMPORTED_MODULE_3__/* .newDoubleArray */ .jh)(t),r=new Array(e);let l=0,c=0,f=0;for(const s of n){for(let n=0;n<s.position.length;n++)o[l++]=s.position[n];for(const n of s.faces)r[c++]=n+f;f=l/3}return{position:o,faces:(0,_Indices_js__WEBPACK_IMPORTED_MODULE_4__/* .compactMeshIndices */ .uW)(r)}}function a(n,t,e,o){const r=n.length,i=new Array(r),l=new Array(r),c=new Array(r);let f=0;for(let s=0;s<r;++s)f+=n[s].length;let h=0,a=0,m=0;const d=(0,_DoubleArray_js__WEBPACK_IMPORTED_MODULE_3__/* .newDoubleArray */ .jh)(3*f);let y=0;for(let s=r-1;s>=0;s--){const f=n[s],A=e===p.CCW_IS_HOLE&&u(f,t,o);if(A&&1!==r)i[h++]=f;else{let n=f.length;for(let t=0;t<h;++t)n+=i[t].length;const e={index:y,pathLengths:new Array(h+1),count:n,holeIndices:new Array(h)};e.pathLengths[0]=f.length,f.length>0&&(c[m++]={index:y,count:f.length}),y=A?g(f,f.length-1,-1,d,y,f.length,t):g(f,0,1,d,y,f.length,t);for(let o=0;o<h;++o){const n=i[o];e.holeIndices[o]=y,e.pathLengths[o+1]=n.length,n.length>0&&(c[m++]={index:y,count:n.length}),y=g(n,0,1,d,y,n.length,t)}h=0,e.count>0&&(l[a++]=e)}}for(let s=0;s<h;++s){const n=i[s];n.length>0&&(c[m++]={index:y,count:n.length}),y=g(n,0,1,d,y,n.length,t)}return l.length=a,c.length=m,{position:d,polygons:l,outlines:c}}function g(n,t,e,o,r,s,i){r*=3;for(let l=0;l<s;++l){const s=n[t];o[r++]=s[0],o[r++]=s[1],o[r++]=i&&s[2]?s[2]:0,t+=e}return r/3}function u(n,o,r){if(!o)return!(0,_coordsUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isClockwise */ .$3)(n);const s=n.length-1;switch((0,_polygonUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .leastSignificantAxis */ .S)(n,s,r)){case _Axis_js__WEBPACK_IMPORTED_MODULE_1__/* .Axis */ ._.X:return!(0,_coordsUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isClockwise */ .$3)(n,_Axis_js__WEBPACK_IMPORTED_MODULE_1__/* .Axis */ ._.Y,_Axis_js__WEBPACK_IMPORTED_MODULE_1__/* .Axis */ ._.Z);case _Axis_js__WEBPACK_IMPORTED_MODULE_1__/* .Axis */ ._.Y:return!(0,_coordsUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isClockwise */ .$3)(n,_Axis_js__WEBPACK_IMPORTED_MODULE_1__/* .Axis */ ._.X,_Axis_js__WEBPACK_IMPORTED_MODULE_1__/* .Axis */ ._.Z);case _Axis_js__WEBPACK_IMPORTED_MODULE_1__/* .Axis */ ._.Z:return!(0,_coordsUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isClockwise */ .$3)(n,_Axis_js__WEBPACK_IMPORTED_MODULE_1__/* .Axis */ ._.X,_Axis_js__WEBPACK_IMPORTED_MODULE_1__/* .Axis */ ._.Y)}}var p;!function(n){n[n.NONE=0]="NONE",n[n.CCW_IS_HOLE=1]="CCW_IS_HOLE"}(p||(p={}));


/***/ }),

/***/ 27258:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ e),
/* harmony export */   k: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function t(t,e,r){return{objectId:t,target:e,distance:r,type:"vertex"}}function e(t,e,r,n,d,a=!1){return{objectId:t,target:e,distance:r,type:"edge",start:n,end:d,draped:a}}


/***/ }),

/***/ 12155:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ a)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var a;!function(a){a[a.EnableFastUpdates=0]="EnableFastUpdates",a[a.DisableFastUpdates=1]="DisableFastUpdates",a[a.UpdateFastLocalOrigin=2]="UpdateFastLocalOrigin"}(a||(a={}));


/***/ }),

/***/ 5842:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ e),
/* harmony export */   pi: () => (/* binding */ d),
/* harmony export */   tf: () => (/* binding */ n)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var n,e;function d(n){return null!=n&&!n.running}!function(n){n[n.Idle=0]="Idle",n[n.Rendering=1]="Rendering",n[n.Ready=2]="Ready",n[n.Fading=3]="Fading"}(n||(n={})),function(n){n[n.RG=0]="RG",n[n.BA=1]="BA",n[n.COUNT=2]="COUNT"}(e||(e={}));


/***/ }),

/***/ 58718:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ A),
/* harmony export */   n: () => (/* binding */ x)
/* harmony export */ });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73345);
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92504);
/* harmony import */ var _core_signal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40315);
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21742);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86128);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24121);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58359);
/* harmony import */ var _geometry_support_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69175);
/* harmony import */ var _geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(99817);
/* harmony import */ var _Clouds_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5842);
/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(84323);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class x{constructor(){this.startTime=0,this._data=(0,_core_signal_js__WEBPACK_IMPORTED_MODULE_2__/* .signal */ .v)(null),this.coverage=0,this.absorption=0,this._readChannels=_Clouds_js__WEBPACK_IMPORTED_MODULE_9__/* .CloudsTextureChannels */ .c.RG,this.parallax=new O,this.parallaxNew=new O,this._anchorPoint=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),this._fadeState=(0,_core_signal_js__WEBPACK_IMPORTED_MODULE_2__/* .signal */ .v)(A.HIDE),this._fadeFactor=(0,_core_signal_js__WEBPACK_IMPORTED_MODULE_2__/* .signal */ .v)(1)}get data(){return this._data.value}set data(a){this._data.value=a}get readChannels(){return this._readChannels}get fadeState(){return this._fadeState.value}get fadeFactor(){return this._fadeFactor.value}get opacity(){switch(this.fadeState){case A.HIDE:return 0;case A.FADE_OUT:return 1-this.fadeFactor;case A.FADE_IN:return this.fadeFactor;case A.SHOW:case A.CROSS_FADE:return 1}}fade(a,e,s){this.isFading&&this.fadeFactor<1&&(this._fadeFactor.value=s?(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .clamp */ .qE)((e-this.startTime)/(H*s),0,1):1,1===this.fadeFactor&&this._endFade()),this._evaluateState(a,e),this._updateParallax(a)}_evaluateState(a,t){const e=a.relativeElevation,s=this._updateAnchorPoint(a);(e>1.7*_weather_js__WEBPACK_IMPORTED_MODULE_10__/* .heightLimit */ .zF||e<-1e4||s>I)&&this.opacity>0?this._startFade(A.HIDE,t):this.isFading||(e>_weather_js__WEBPACK_IMPORTED_MODULE_10__/* .heightLimit */ .zF||e<-.35*_weather_js__WEBPACK_IMPORTED_MODULE_10__/* .heightLimit */ .zF||s>w*I?this.opacity>0&&this._startFade(A.FADE_OUT,t):(0,_Clouds_js__WEBPACK_IMPORTED_MODULE_9__/* .ensureClouds */ .pi)(this.data)&&(0===this.opacity?this._startFade(A.FADE_IN,t):this.data.state===_Clouds_js__WEBPACK_IMPORTED_MODULE_9__/* .CubeMapState */ .tf.Ready&&(this.fadeState===A.SHOW?this._startFade(A.CROSS_FADE,t):this._startFade(A.SHOW,t))))}_updateParallax(a){const t=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.k)(a.eye);this.parallax.radiusCurvatureCorrection=.84*Math.sqrt(Math.max(t-_geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_8__/* .earth */ .$O.radius*_geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_8__/* .earth */ .$O.radius,0))/Math.sqrt(t),(0,_geometry_support_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_7__/* .fromPoints */ .Cr)(v,this.parallax.anchorPoint,C),(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_3__/* .rotate */ .e$)(this.parallax.transform,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__/* .IDENTITY */ .zK,C[3],(0,_geometry_support_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_7__/* .axis */ .yo)(C)),(0,_geometry_support_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_7__/* .fromPoints */ .Cr)(v,this.parallaxNew.anchorPoint,C),(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_3__/* .rotate */ .e$)(this.parallaxNew.transform,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__/* .IDENTITY */ .zK,C[3],(0,_geometry_support_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_7__/* .axis */ .yo)(C))}_updateAnchorPoint(a){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.n)(this._anchorPoint,a.eye),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.g)(this._anchorPoint,this._anchorPoint,_geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_8__/* .earth */ .$O.radius),this.fadeState===A.HIDE&&this.data?.state===_Clouds_js__WEBPACK_IMPORTED_MODULE_9__/* .CubeMapState */ .tf.Ready?((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.c)(this.parallax.anchorPoint,this._anchorPoint),0):(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.l)((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.d)(g,this.parallax.anchorPoint,this._anchorPoint))}requestFade(){this._fadeFactor.value=0}_startFade(a,t){switch(this._fadeState.value=a,this.startTime=t,a){case A.CROSS_FADE:this.requestFade(),this._switchReadChannels(),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.c)(this.parallaxNew.anchorPoint,this._anchorPoint);break;case A.FADE_IN:this.requestFade(),this._switchReadChannels(),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.c)(this.parallax.anchorPoint,this._anchorPoint),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.c)(this.parallaxNew.anchorPoint,this._anchorPoint);break;case A.FADE_OUT:this.requestFade();break;case A.SHOW:this._switchReadChannels(),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.c)(this.parallax.anchorPoint,this._anchorPoint),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.c)(this.parallaxNew.anchorPoint,this._anchorPoint),this._endFade();break;case A.HIDE:this._endFade()}}_endFade(){switch(this._fadeFactor.value=1,this.data&&this.data.state!==_Clouds_js__WEBPACK_IMPORTED_MODULE_9__/* .CubeMapState */ .tf.Ready&&(this.data.state=_Clouds_js__WEBPACK_IMPORTED_MODULE_9__/* .CubeMapState */ .tf.Idle),this.fadeState){case A.CROSS_FADE:(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.c)(this.parallax.anchorPoint,this.parallaxNew.anchorPoint),this._fadeState.value=A.SHOW;break;case A.FADE_IN:this._fadeState.value=A.SHOW;break;case A.FADE_OUT:this._fadeState.value=A.HIDE;break;case A.SHOW:case A.HIDE:break;default:(0,_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .neverReached */ .Xb)(this.fadeState)}}_switchReadChannels(){this.data?.state===_Clouds_js__WEBPACK_IMPORTED_MODULE_9__/* .CubeMapState */ .tf.Ready&&(this._readChannels=1-this._readChannels,this.data.state=_Clouds_js__WEBPACK_IMPORTED_MODULE_9__/* .CubeMapState */ .tf.Fading)}get isFading(){return this.fadeState===A.FADE_OUT||this.fadeState===A.FADE_IN||this.fadeState===A.CROSS_FADE}}var A;!function(a){a[a.HIDE=0]="HIDE",a[a.FADE_IN=1]="FADE_IN",a[a.SHOW=2]="SHOW",a[a.CROSS_FADE=3]="CROSS_FADE",a[a.FADE_OUT=4]="FADE_OUT"}(A||(A={}));class O{constructor(){this.anchorPoint=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),this.radiusCurvatureCorrection=0,this.transform=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)()}}const v=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__/* .fromValues */ .fA)(0,0,1),C=(0,_geometry_support_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_7__/* .create */ .vt)(),g=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),H=1.25,w=.5,I=2e5;


/***/ }),

/***/ 84323:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  k9: () => (/* binding */ weather_i),
  zF: () => (/* binding */ weather_p)
});

// UNUSED EXPORTS: validateWeatherType, weatherTypes, weatherTypesArray

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(9272);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(28902);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
;// ../node_modules/@arcgis/core/views/3d/environment/CloudyWeather.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var c;let p=c=class extends JSONSupport/* default */.A{constructor(o){super(o),this.type="cloudy",this.cloudCover=.5}clone(){return new c({cloudCover:this.cloudCover})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({cloudy:"cloudy"}),(0,property/* property */.MZ)({json:{write:{isRequired:!0}}})],p.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],p.prototype,"cloudCover",void 0),p=c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.3d.environment.CloudyWeather")],p);const i=p;

;// ../node_modules/@arcgis/core/views/3d/environment/FoggyWeather.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var FoggyWeather_p;let FoggyWeather_c=FoggyWeather_p=class extends JSONSupport/* default */.A{constructor(o){super(o),this.type="foggy",this.fogStrength=.5}clone(){return new FoggyWeather_p({fogStrength:this.fogStrength})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({foggy:"foggy"}),(0,property/* property */.MZ)({json:{write:{isRequired:!0}}})],FoggyWeather_c.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],FoggyWeather_c.prototype,"fogStrength",void 0),FoggyWeather_c=FoggyWeather_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.3d.environment.FoggyWeather")],FoggyWeather_c);const FoggyWeather_i=FoggyWeather_c;

;// ../node_modules/@arcgis/core/views/3d/environment/RainyWeather.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var s;let RainyWeather_p=s=class extends JSONSupport/* default */.A{constructor(o){super(o),this.type="rainy",this.cloudCover=.5,this.precipitation=.5}clone(){return new s({cloudCover:this.cloudCover,precipitation:this.precipitation})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({rainy:"rainy"}),(0,property/* property */.MZ)({json:{write:{isRequired:!0}}})],RainyWeather_p.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],RainyWeather_p.prototype,"cloudCover",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],RainyWeather_p.prototype,"precipitation",void 0),RainyWeather_p=s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.3d.environment.RainyWeather")],RainyWeather_p);const n=RainyWeather_p;

;// ../node_modules/@arcgis/core/views/3d/environment/SnowyWeather.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var SnowyWeather_i;let SnowyWeather_p=SnowyWeather_i=class extends JSONSupport/* default */.A{constructor(o){super(o),this.type="snowy",this.cloudCover=.5,this.precipitation=.5,this.snowCover="disabled"}clone(){return new SnowyWeather_i({cloudCover:this.cloudCover,precipitation:this.precipitation,snowCover:this.snowCover})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({snowy:"snowy"}),(0,property/* property */.MZ)({json:{write:{isRequired:!0}}})],SnowyWeather_p.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],SnowyWeather_p.prototype,"cloudCover",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],SnowyWeather_p.prototype,"precipitation",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["enabled","disabled"],nonNullable:!0,json:{write:!0}})],SnowyWeather_p.prototype,"snowCover",void 0),SnowyWeather_p=SnowyWeather_i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.3d.environment.SnowyWeather")],SnowyWeather_p);const SnowyWeather_n=SnowyWeather_p;

;// ../node_modules/@arcgis/core/views/3d/environment/SunnyWeather.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var SunnyWeather_c;let SunnyWeather_n=SunnyWeather_c=class extends JSONSupport/* default */.A{constructor(o){super(o),this.type="sunny",this.cloudCover=.5}clone(){return new SunnyWeather_c({cloudCover:this.cloudCover})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({sunny:"sunny"}),(0,property/* property */.MZ)({json:{write:{isRequired:!0}}})],SunnyWeather_n.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],SunnyWeather_n.prototype,"cloudCover",void 0),SunnyWeather_n=SunnyWeather_c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.3d.environment.SunnyWeather")],SunnyWeather_n);const SunnyWeather_p=SunnyWeather_n;

;// ../node_modules/@arcgis/core/views/3d/environment/weather.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const weather_n={key:"type",base:SunnyWeather_p,typeMap:{sunny:SunnyWeather_p,cloudy:i,rainy:n,snowy:SnowyWeather_n,foggy:FoggyWeather_i}},a=Object.keys(weather_n.typeMap);function weather_s(e,r){return!!a.includes(e)||(r.error(`"${e}" is not a valid weather type`),!1)}const weather_p=1e4,weather_i=1e5;


/***/ }),

/***/ 13298:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86394);
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12690);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98849);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40189);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20909);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class n{constructor(r){this._streamDataRequester=r}async loadJSON(r,e){return this._load("json",r,e)}async loadBinary(r,e){return (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isDataProtocol */ .DB)(r)?((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .throwIfAborted */ .Te)(e),(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .dataToArrayBuffer */ .lJ)(r)):this._load("binary",r,e)}async loadImage(r,e){return this._load("image",r,e)}async _load(a,s,i){if(null==this._streamDataRequester)return(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(s,{responseType:m[a]})).data;const n=await (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .result */ .Ke)(this._streamDataRequester.request(s,a,i));if(!0===n.ok)return n.value;throw (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .throwIfAbortError */ .QP)(n.error),new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A("glt-loader-request-error",`Request for resource failed: ${n.error}`)}}const m={image:"image",binary:"array-buffer",json:"json","image+type":void 0};


/***/ }),

/***/ 80954:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78607);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec2f32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17845);
/* harmony import */ var _core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25423);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function s(s){if(null==s)return null;const a=null!=s.offset?s.offset:_core_libs_gl_matrix_2_factories_vec2f32_js__WEBPACK_IMPORTED_MODULE_1__/* .ZEROS */ .uY,n=null!=s.rotation?s.rotation:0,e=null!=s.scale?s.scale:_core_libs_gl_matrix_2_factories_vec2f32_js__WEBPACK_IMPORTED_MODULE_1__/* .ONES */ .Un,f=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__/* .fromValues */ .fA)(1,0,0,0,1,0,a[0],a[1],1),c=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__/* .fromValues */ .fA)(Math.cos(n),-Math.sin(n),0,Math.sin(n),Math.cos(n),0,0,0,1),m=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__/* .fromValues */ .fA)(e[0],0,0,0,e[1],0,0,0,1),u=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__/* .create */ .vt)();return (0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_2__/* .multiply */ .lw)(u,c,m),(0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_2__/* .multiply */ .lw)(u,f,u),u}


/***/ }),

/***/ 8823:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86942);
/* harmony import */ var _geometry_support_Indices_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42965);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41746);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function o(r,t){switch(t){case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .PrimitiveType */ .WR.TRIANGLES:return f(r);case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .PrimitiveType */ .WR.TRIANGLE_STRIP:return u(r);case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .PrimitiveType */ .WR.TRIANGLE_FAN:return i(r)}}function f(t){return"number"==typeof t?(0,_geometry_support_Indices_js__WEBPACK_IMPORTED_MODULE_1__/* .getContinuousIndexArray */ .tM)(t):(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .isUint8Array */ .mg)(t)?new Uint16Array(t):t}function u(r){const e="number"==typeof r?r:r.length;if(e<3)return[];const n=e-2,o=(0,_geometry_support_Indices_js__WEBPACK_IMPORTED_MODULE_1__/* .newIndexArray */ .my)(3*n);if("number"==typeof r){let r=0;for(let t=0;t<n;t+=1)t%2==0?(o[r++]=t,o[r++]=t+1,o[r++]=t+2):(o[r++]=t+1,o[r++]=t,o[r++]=t+2)}else{let t=0;for(let e=0;e<n;e+=1)e%2==0?(o[t++]=r[e],o[t++]=r[e+1],o[t++]=r[e+2]):(o[t++]=r[e+1],o[t++]=r[e],o[t++]=r[e+2])}return o}function i(r){const t="number"==typeof r?r:r.length;if(t<3)return new Uint16Array(0);const e=t-2,n=e<=65536?new Uint16Array(3*e):new Uint32Array(3*e);if("number"==typeof r){let r=0;for(let t=0;t<e;++t)n[r++]=0,n[r++]=t+1,n[r++]=t+2;return n}const o=r[0];let f=r[1],u=0;for(let i=0;i<e;++i){const t=r[i+2];n[u++]=o,n[u++]=f,n[u++]=t,f=t}return n}


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

/***/ 31916:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  make: () => (/* binding */ Graphics3DSymbolLayerFactory_c)
});

// UNUSED EXPORTS: setSymbolClass

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(96220);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var core_Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/unitUtils.js
var unitUtils = __webpack_require__(92976);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/earcut.js
var earcut = __webpack_require__(16528);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat3.js
var mat3 = __webpack_require__(25423);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f64.js
var mat3f64 = __webpack_require__(78607);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js
var mat4 = __webpack_require__(21742);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js
var mat4f64 = __webpack_require__(86128);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(24121);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(58359);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f64.js
var vec4f64 = __webpack_require__(28152);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projection/computeTranslationToOriginAndRotation.js
var computeTranslationToOriginAndRotation = __webpack_require__(59538);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/aaBoundingBox.js
var aaBoundingBox = __webpack_require__(4675);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/DoubleArray.js
var DoubleArray = __webpack_require__(90166);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/Indices.js
var Indices = __webpack_require__(42965);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3.js
var vec3 = __webpack_require__(21839);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/data/SnappingCandidate.js
var SnappingCandidate = __webpack_require__(27258);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/renderingInfoUtils.js
var renderingInfoUtils = __webpack_require__(18451);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/materialUtils.js
var materialUtils = __webpack_require__(59427);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/ViewingMode.js
var ViewingMode = __webpack_require__(10714);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/graphics/elevationAlignmentUtils.js
var elevationAlignmentUtils = __webpack_require__(27716);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DObject3DGraphicLayer.js
var Graphics3DObject3DGraphicLayer = __webpack_require__(45418);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DSymbolLayer.js
var Graphics3DSymbolLayer = __webpack_require__(43138);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/graphics/graphicUtils.js
var graphicUtils = __webpack_require__(54096);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/graphics/interfaces.js
var interfaces = __webpack_require__(62545);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(84698);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Polygon.js
var Polygon = __webpack_require__(62802);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/Axis.js
var Axis = __webpack_require__(58331);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/polygonUtils.js
var polygonUtils = __webpack_require__(57829);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Attribute.js
var Attribute = __webpack_require__(70807);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Geometry.js + 1 modules
var Geometry = __webpack_require__(59816);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js
var VertexAttribute = __webpack_require__(50645);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectableGeometry.js
var IntersectableGeometry = __webpack_require__(27514);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/polygonUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function polygonUtils_l(e,r,o){const a=(r.length>0?r[0]:e.length/3)-1,s=(0,polygonUtils/* leastSignificantAxis */.S)(e,a,o);if(s!==Axis/* Axis */._.Z){e=e.slice();for(let t=0;t<e.length;t+=3)e[t+s]=e[t+2]}return (0,earcut.e)(e,r,3)}function polygonUtils_m(t){const e=[[VertexAttribute/* VertexAttribute */.r.POSITION,new Attribute/* Attribute */.n(t.attributeData.position,t.indices,3,!0)]],r=(0,Indices/* getZeroIndexArray */.EH)(t.indices.length);return null!=t.attributeData.colorFeature?e.push([VertexAttribute/* VertexAttribute */.r.COLORFEATUREATTRIBUTE,new Attribute/* Attribute */.n([t.attributeData.colorFeature],r,1,!0)]):t.attributeData.color&&e.push([VertexAttribute/* VertexAttribute */.r.COLOR,new Attribute/* Attribute */.n(t.attributeData.color,r,4,!0)]),t.attributeData.uvMapSpace&&e.push([VertexAttribute/* VertexAttribute */.r.UVMAPSPACE,new Attribute/* Attribute */.n(t.attributeData.uvMapSpace,t.indices,4,!0)]),t.attributeData.boundingRect&&e.push([VertexAttribute/* VertexAttribute */.r.BOUNDINGRECT,new Attribute/* Attribute */.n(t.attributeData.boundingRect,t.indices,9,!0)]),new Geometry/* Geometry */.V(t.material,e,t.mapPositions,IntersectableGeometry/* GeometryType */.d.Mesh,t.attributeData.objectAndLayerIdColor)}function polygonUtils_p(t,e=null){const r=[[VertexAttribute/* VertexAttribute */.r.POSITION,new Attribute/* Attribute */.n(t.attributeData.position,t.indices,3,!0)],[VertexAttribute/* VertexAttribute */.r.UV0,new Attribute/* Attribute */.n(t.attributeData.uv0,t.indices,2,!0)]];return new Geometry/* Geometry */.V(t.material,r,t.mapPositions,IntersectableGeometry/* GeometryType */.d.Mesh,e)}function b(t){switch(t.type){case"extent":if(t instanceof Extent/* default */.A)return Polygon/* default */.A.fromExtent(t);break;case"polygon":return t}return null}class g{constructor(t,e,r){this.renderData=t,this.layerViewUid=e,this.graphicUid=r,this.outGeometries=new Array}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/support/edgeUtils.js + 4 modules
var edgeUtils = __webpack_require__(41419);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/support/debugFlags.js
var debugFlags = __webpack_require__(19620);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/support/ElevationProvider.js
var ElevationProvider = __webpack_require__(27054);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projection/projectBuffer.js
var projectBuffer = __webpack_require__(84119);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/triangulationUtils.js
var triangulationUtils = __webpack_require__(17566);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/terrain/OverlayRenderer.js + 23 modules
var OverlayRenderer = __webpack_require__(42490);
;// ../node_modules/@arcgis/core/views/3d/support/renderInfoUtils/polygon.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function polygon_p(o,n,r,p){const c=(0,triangulationUtils/* ringsToTriangulationInfo */.oR)(o.rings,!!o.hasZ&&"on-the-ground"!==p.mode,triangulationUtils/* CounterClockwiseMode */.Wq.CCW_IS_HOLE,o.spatialReference),a=(0,DoubleArray/* newDoubleArray */.jh)(c.position.length),h=(0,elevationAlignmentUtils/* applyPerVertexElevationAlignment */.au)(c.position,o.spatialReference,0,a,0,c.position,0,c.position.length/3,n,r,p),m=null!=h;return new polygon_g(c.position,a,u(c.polygons,c.position,a),l(c.outlines,c.position,a),m,h)}function c(t,n){const e=(0,triangulationUtils/* ringsToTriangulationInfo */.oR)(t.rings,!1,triangulationUtils/* CounterClockwiseMode */.Wq.CCW_IS_HOLE),p=(0,projectBuffer.projectBuffer)(e.position,t.spatialReference,0,e.position,n,0);for(let o=2;o<e.position.length;o+=3)e.position[o]=OverlayRenderer/* drapedZ */.bi;return{position:e.position,polygons:u(e.polygons,e.position),outlines:l(e.outlines,e.position),projectionSuccess:p}}function l(o,t,s=null){return o.filter((({count:o})=>o>1)).map((({index:o,count:i})=>{const e=3*o,r=3*i;return null!=s?new h(o,i,(0,DoubleArray/* doubleSubArray */.l5)(t,e,r),(0,DoubleArray/* doubleSubArray */.l5)(s,e,r)):new a(o,i,(0,DoubleArray/* doubleSubArray */.l5)(t,e,r))}))}function u(o,t,s=null){const i=new Array;for(const{index:e,count:r,holeIndices:p,pathLengths:c}of o){if(r<=1)continue;const o=3*e,l=3*r,u=p.map((o=>o-e)),a=null!=s?new m(e,r,(0,DoubleArray/* doubleSubArray */.l5)(t,3*e,3*r),(0,DoubleArray/* doubleSubArray */.l5)(s,o,l),u,c):new f(e,r,(0,DoubleArray/* doubleSubArray */.l5)(t,3*e,3*r),u,c);i.push(a)}return i}class a{constructor(o,t,n){this.index=o,this.count=t,this.position=n}}class h extends a{constructor(o,t,n,s){super(o,t,n),this.mapPositions=s}}class m extends h{constructor(o,t,n,s,i,e){super(o,t,n,s),this.holeIndices=i,this.pathLengths=e}}class f extends a{constructor(o,t,n,s,i){super(o,t,n),this.holeIndices=s,this.pathLengths=i}}class polygon_g{constructor(o,t,n,s,i,e){this.position=o,this.mapPositions=t,this.polygons=n,this.outlines=s,this.projectionSuccess=i,this.sampledElevation=e}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js
var NormalAttribute_glsl = __webpack_require__(81283);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js
var basicInterfaces = __webpack_require__(91013);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/GeometryWithMapPositions.js
var GeometryWithMapPositions = __webpack_require__(94137);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Normals.js
var Normals = __webpack_require__(45455);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Object3D.js
var Object3D = __webpack_require__(55103);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultMaterial.js + 2 modules
var DefaultMaterial = __webpack_require__(54482);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DExtrudeSymbolLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const ot=["polygon","extent"];class st extends Graphics3DSymbolLayer/* Graphics3DSymbolLayer */.U{constructor(t,e,r,o){super(t,e,r,o,xt(e)),this.ensureDrapedStatus(!1)}async doLoad(){if(!this._drivenProperties.size){const t=(0,graphicUtils/* validateSymbolLayerSize */.Hj)(this._getSymbolSize());if(t)throw new core_Error/* default */.A("graphics3dextrudesymbollayer:invalid-size",t)}const t=this.symbolLayer,r=t?.material,o=r?.color,s=this._getCombinedOpacityAndColor(o),i=(0,vec3f64/* fromArray */.ci)(s),n=s[3],a=this.needsDrivenTransparentPass,l=r?.emissive,c={usePBR:this._context.physicalBasedRenderingEnabled,isSchematic:!0,diffuse:i,ambient:i,opacity:n,drivenOpacity:a,hasVertexColors:!0,hasSlicePlane:this._context.slicePlaneEnabled,castShadows:t.castShadows,emissiveStrength:l?.strength??0,emissiveSource:materialUtils/* EmissiveSourceMode */.YJ.Color,offsetTransparentBackfaces:!0,normalType:NormalAttribute_glsl/* NormalType */.W.Compressed},m=new DefaultMaterial/* DefaultMaterial */.$U(c,this._context);m.setParameters({cullFace:m.transparent?basicInterfaces/* CullFaceOptions */.s2.None:basicInterfaces/* CullFaceOptions */.s2.Back});const p=new DefaultMaterial/* DefaultMaterial */.$U({...c,cullFace:basicInterfaces/* CullFaceOptions */.s2.Back},this._context);this._materials[Mt.Main]=m,this._materials[Mt.Bottom]=p}destroy(){super.destroy(),this._materials.length=0}createGraphics3DGraphic(t){const e=t.graphic;if(!this._validateGeometry(e.geometry,ot,this.symbolLayer.type))return null;const r=this._getVertexOpacityAndColor(t.renderingInfo,this._getFallbackOpacityAndColor(),255),o=this.setGraphicElevationContext(e);return this._createAs3DShape(e,t.renderingInfo,r,o,e.uid)}layerOpacityChanged(t,e){const r=this.symbolLayer?.material?.color,o=this._getCombinedOpacity(r);this._materials[Mt.Main]?.setParameters({opacity:o}),this._materials[Mt.Bottom]?.setParameters({opacity:o});const s=this._getLayerOpacity();t?.forEach((t=>e(t)?.layerOpacityChanged(s,this._context.isAsync)))}layerElevationInfoChanged(t,e){return this.updateGraphics3DGraphicElevationInfo(t,e,elevationAlignmentUtils/* needsElevationUpdates3D */.Kf)}slicePlaneEnabledChanged(t,e){return this._materials[Mt.Main]?.setParameters({hasSlicePlane:this._context.slicePlaneEnabled}),this._materials[Mt.Bottom]?.setParameters({hasSlicePlane:this._context.slicePlaneEnabled}),t?.forEach((t=>{const r=e(t);null!=r&&r.slicePlaneEnabledChanged(this._context.slicePlaneEnabled,this._context.isAsync)})),!0}physicalBasedRenderingChanged(){const t={usePBR:this._context.physicalBasedRenderingEnabled,isSchematic:!0};return this._materials[Mt.Main]?.setParameters(t),this._materials[Mt.Bottom]?.setParameters(t),!0}_getExtrusionSize(t){let e;return e=t.size&&this._drivenProperties.size?(0,renderingInfoUtils/* getDriverAxisSizeValue */.kg)(t.size,2)??0:this._getSymbolSize(),e/=this._context.renderCoordsHelper.unitInMeters,e}applyRendererDiff(t,e){return this._drivenPropertiesChanged(e)?interfaces/* ApplyRendererDiffResult */.w.RecreateSymbol:interfaces/* ApplyRendererDiffResult */.w.RecreateGraphics}async queryForSnapping(t,e,s,i){const n=this._getExtrusionSize(s)*this._context.renderCoordsHelper.unitInMeters/(0,unitUtils/* getMetersPerVerticalUnitForSR */.G9)(e),{objectId:a,target:l}=t,c=(0,lang/* clone */.o8)(l);switch(c.z=(c.z??0)+n,t.type){case"edge":{const{start:e,end:o}=t,s=(0,lang/* clone */.o8)(e),i=(0,lang/* clone */.o8)(o);return s.z=(s.z??0)+n,i.z=(i.z??0)+n,[(0,SnappingCandidate/* makeEdgeCandidate */.P)(a,c,1/0,s,i)]}case"vertex":return[(0,SnappingCandidate/* makeVertexCandidate */.k)(a,c,1/0),(0,SnappingCandidate/* makeEdgeCandidate */.P)(a,l,1/0,l,c)];default:return[]}}_getSymbolSize(){return this.symbolLayer.size??1}_createAs3DShape(t,e,r,o,l){const m=b(t.geometry);if(null==m)return null;if(0===m.rings.length||!m.rings.some((t=>t.length>0)))return this._logGeometryValidationWarnings(m.rings,"rings","ExtrudeSymbol3DLayer"),null;const p=polygon_p(m,this._context.elevationProvider,this._context.renderCoordsHelper,o);this._logGeometryCreationWarnings(p,m.rings,"rings","ExtrudeSymbol3DLayer");const h=(0,graphicUtils/* computeCentroid */.W$)(m);if(null==h)return null;const g=new Array,d=new Array,u=(0,aaBoundingBox/* create */.vt)(),f=(0,mat4f64/* create */.vt)(),y=(0,vec3f64/* create */.vt)(),_=this._context.renderCoordsHelper.viewingMode===ViewingMode/* ViewingMode */.RT.Global;_||this._context.renderCoordsHelper.worldUpAtPosition(null,y),(0,computeTranslationToOriginAndRotation/* computeTranslationToOriginAndRotation */.l)(m.spatialReference,[h.x,h.y,0],f,this._context.renderCoordsHelper.spatialReference);const C=(0,mat4f64/* create */.vt)();(0,mat4/* invert */.B8)(C,f);const v=(0,mat3f64/* create */.vt)();(0,mat3/* normalFromMat4 */.Ge)(v,C);const{polygons:I,mapPositions:A,position:M}=p,z=new Map,D=this._materials[Mt.Main];for(const i of I){const t=i.count;if(this._context.clippingExtent&&((0,aaBoundingBox/* fromBuffer */.vY)(i.mapPositions,u),!(0,aaBoundingBox/* intersectsClippingArea */.KG)(u,this._context.clippingExtent)))continue;const o=(0,earcut.e)(i.mapPositions,i.holeIndices,3);if(0===o.length)continue;const n=o.length,a=6*t,c=(0,Indices/* newIndexArray */.my)(a+n),m=(0,Indices/* newIndexArray */.my)(n),p=(0,DoubleArray/* newDoubleArray */.jh)(3*a),h=(0,DoubleArray/* newDoubleArray */.jh)(3*a),b=(0,DoubleArray/* newDoubleArray */.jh)(3*a),x=(0,DoubleArray/* newDoubleArray */.jh)(a);nt(M,A,o,i,p,b,h,x,c,m,this._getExtrusionSize(e),y,_),(0,vec3.t)(p,p,C);const S=this._context.stage.renderView.getObjectAndLayerIdColor({graphicUid:l,layerViewUid:this._context.layerViewUid}),v=new Lt(p,b,(0,Normals/* compressNormals */.fA)(h),x),I=it(D,c,c.length-m.length,v,r,S),L=t,B=t,R=2*i.count,U=new Bt(L,B,R,n/3);_t(I,U,f),z.set(I,U),g.push(I,it(this._materials[Mt.Bottom],m,0,v,r,S)),d.push(v.heights)}if(0===g.length)return null;const G=new Object3D/* Object3D */.B({geometries:g,layerViewUid:this._context.layerViewUid,graphicUid:l,isElevationSource:!0});G.transformation=f;const T=(0,edgeUtils/* createMaterial */.Cc)(this.symbolLayer,{opacity:this._getLayerOpacity()}),k=T?new Graphics3DObject3DGraphicLayer/* Object3DEdgeState */.H(this._materials[Mt.Main],T,this._context.slicePlaneEnabled):null,H=new Graphics3DObject3DGraphicLayer/* Graphics3DObject3DGraphicLayer */.Y(this,G,null,((t,e,r,o,s)=>bt(t,e,r,o,s,d,z)),o,k);return H.alignedSampledElevation=p.sampledElevation,H.needsElevationUpdates=(0,elevationAlignmentUtils/* needsElevationUpdates3D */.Kf)(o.mode),H}_getFallbackOpacityAndColor(){const e=this.symbolLayer?.material?.color;return Color/* default */.A.toUnitRGBA(e)??vec4f64/* ZEROS */.uY}}function it(t,e,r,o,s,i){const n=(0,Indices/* getZeroIndexArray */.EH)(e.length),a=[[VertexAttribute/* VertexAttribute */.r.POSITION,new Attribute/* Attribute */.n(o.positions,e,3,!0)],[VertexAttribute/* VertexAttribute */.r.NORMALCOMPRESSED,new Attribute/* Attribute */.n(o.normals,e,2,!0)],[VertexAttribute/* VertexAttribute */.r.COLOR,new Attribute/* Attribute */.n(s,n,4,!0)]];return new Geometry/* Geometry */.V(t,a,o.elevation,IntersectableGeometry/* GeometryType */.d.Mesh,i,r)}function nt(t,e,r,o,s,i,n,a,l,c,m,p,h){const g=r.length/3;let d=2*o.count;at(t,e,o.index,o.count,r,0,g,s,i,n,a,l,c,d,m,p,h);let u=0,f=2*o.count;d=0;const y=o.pathLengths[0];mt(s,i,a,n,u,y,o.count,f,l,d,m),f+=4*y,d+=2*y,u+=y;for(let b=1;b<o.pathLengths.length;++b){const t=o.pathLengths[b];mt(s,i,a,n,u,t,o.count,f,l,d,m),f+=4*t,d+=2*t,u+=t}}function at(t,e,r,o,s,i,n,a,l,c,m,p,h,g,f,y,b){(0,vec32.c)(jt,y),l??=[],c??=[],m??=[];const _=f>0?1:-1;let x=3*r,S=0,j=3*S,P=o,w=3*P;for(let u=0;u<o;++u){const r=t[x],o=t[x+1],s=t[x+2];b&&(jt[0]=r,jt[1]=o,jt[2]=s,(0,vec32.n)(jt,jt)),a[j+0]=r,a[j+1]=o,a[j+2]=s;const i=e[x+0],n=e[x+1],p=e[x+2];l[j+0]=i,l[j+1]=n,l[j+2]=p,c[j+0]=-_*jt[0],c[j+1]=-_*jt[1],c[j+2]=-_*jt[2],m[S]=0,a[w+0]=r+f*jt[0],a[w+1]=o+f*jt[1],a[w+2]=s+f*jt[2],l[w+0]=i,l[w+1]=n,l[w+2]=p,m[P]=f,j+=3,w+=3,x+=3,S+=1,P+=1}x=3*i,j=0,w=3*g;const O=f<0?Ot:wt,C=f<0?wt:Ot;for(let d=0;d<n;++d)h[j]=s[x+O[0]],h[j+1]=s[x+O[1]],h[j+2]=s[x+O[2]],p[w]=s[x+C[0]]+o,p[w+1]=s[x+C[1]]+o,p[w+2]=s[x+C[2]]+o,j+=3,w+=3,x+=3}function lt(t,e,r,o,s,i,n){o[i]=o[n],n*=3,t[i*=3]=t[n],t[i+1]=t[n+1],t[i+2]=t[n+2],e[i]=e[n],e[i+1]=e[n+1],e[i+2]=e[n+2],r[i]=s[0],r[i+1]=s[1],r[i+2]=s[2]}const ct=(0,vec3f64/* create */.vt)();function mt(t,e,r,o,s,i,n,a,l,c,m){e??=[],r??=[],o??=[];let p=s,h=s+1,g=s+n,d=s+n+1,u=a,f=a+1,y=a+2*i,b=a+2*i+1;m<0&&(p=s+n+1,d=s);let _=3*c;for(let x=0;x<i;++x)x===i-1&&(h=s,m>0?d=s+n:p=s+n),ft(t,p,h,g,ct),lt(t,e,o,r,ct,u,p),lt(t,e,o,r,ct,f,h),lt(t,e,o,r,ct,y,g),lt(t,e,o,r,ct,b,d),l[_]=u,l[_+1]=y,l[_+2]=b,l[_+3]=u,l[_+4]=b,l[_+5]=f,_+=6,p++,h++,g++,d++,u+=2,f+=2,y+=2,b+=2}const pt=(0,vec3f64/* create */.vt)(),ht=(0,vec3f64/* create */.vt)(),gt=(0,vec3f64/* create */.vt)(),dt=(0,vec3f64/* create */.vt)(),ut=(0,vec3f64/* create */.vt)();function ft(t,e,r,o,s){e*=3,r*=3,o*=3,(0,vec32.i)(pt,t[e++],t[e++],t[e++]),(0,vec32.i)(ht,t[r++],t[r++],t[r++]),(0,vec32.i)(gt,t[o++],t[o++],t[o++]),(0,vec32.d)(dt,ht,pt),(0,vec32.d)(ut,gt,pt),(0,vec32.h)(s,ut,dt),(0,vec32.n)(s,s)}const yt=(0,vec3f64/* create */.vt)();function bt(t,e,r,o,s,i,n){const a=t.stageObject,h=a.geometries,g=h.length,d="absolute-height"!==e.mode;let u=0;const f=a.transformation,y=(0,mat4/* invertOrIdentity */.Qw)((0,mat4f64/* create */.vt)(),f);for(let l=0;l<g;l+=2){const t=h[l];if(!(0,GeometryWithMapPositions/* isGeometryWithMapPositions */.p)(t))continue;const e=t.getMutableAttribute(VertexAttribute/* VertexAttribute */.r.POSITION).data,c=i[l/2],g=new ElevationProvider/* SamplePosition */.aY(t.mapPositions),b=e.length/3;let _=!1,x=0;{let t=0;for(let i=0;i<b;i++){yt[0]=e[t],yt[1]=e[t+1],yt[2]=e[t+2],o(g,Pt),d&&(x+=Pt.sampledElevation),debugFlags/* debugFlags */.b.TESTS_DISABLE_OPTIMIZATIONS?((0,vec32.i)(St,g.array[g.offset],g.array[g.offset+1],Pt.z+c[t/3]),null!=r&&s.toRenderCoords(St,r,St),(0,vec32.t)(St,St,y)):((0,vec32.i)(St,e[t],e[t+1],e[t+2]),(0,vec32.t)(St,St,f),s.setAltitude(St,Pt.z+c[t/3]),(0,vec32.t)(St,St,y)),e[t]=St[0],e[t+1]=St[1],e[t+2]=St[2];const i=Ct/s.unitInMeters;(Math.abs(yt[0]-e[t])>=i||Math.abs(yt[1]-e[t+1])>=i||Math.abs(yt[2]-e[t+2])>=i)&&(_=!0),g.offset+=3,t+=3}}if(_){const e=n.get(t);e&&_t(t,e,f),a.geometryVertexAttributeUpdated(h[l],VertexAttribute/* VertexAttribute */.r.NORMALCOMPRESSED),t.invalidateBoundingInfo(),a.geometryVertexAttributeUpdated(h[l],VertexAttribute/* VertexAttribute */.r.POSITION),h[l+1].invalidateBoundingInfo(),a.geometryVertexAttributeUpdated(h[l+1],VertexAttribute/* VertexAttribute */.r.POSITION)}u+=x/b}return u/g}function _t(t,e,r){const o=t.getMutableAttribute(VertexAttribute/* VertexAttribute */.r.POSITION),s=t.getMutableAttribute(VertexAttribute/* VertexAttribute */.r.NORMALCOMPRESSED).data,{topVertexStart:i,topVertexCount:n,topFaceStart:a,topFaceCount:l}=e,c=o.data,u=n,f=t.attributes.get(VertexAttribute/* VertexAttribute */.r.POSITION).indices,y=a+l,b=i+n,_=(0,DoubleArray/* newDoubleArray */.jh)(3*u);for(let m=0;m<u;++m){const t=3*m;_[t+0]=0,_[t+1]=0,_[t+2]=0}const x=Et,S=vt,j=It,P=At,O=jt;for(let w=a;w<y;++w){const t=3*w;for(let e=0;e<3;++e){const o=f[t+e];P[e]=o;const s=3*o;(0,vec32.i)(St,c[s+0],c[s+1],c[s+2]),(0,vec32.t)(x[e],St,r)}(0,vec32.a)(S,x[1],x[0]),(0,vec32.a)(j,x[2],x[0]),(0,vec32.h)(O,S,j),(0,vec32.n)(O,O);for(let e=0;e<3;++e){const t=3*(P[e]-i);_[t+0]+=O[0],_[t+1]+=O[1],_[t+2]+=O[2]}}for(let m=i;m<b;++m){const t=3*(m-i),e=_[t+0],r=_[t+1],o=_[t+2],n=Math.sqrt(e*e+r*r+o*o);(0,Normals/* compressNormal */.aT)(s,m,e/n,r/n,o/n)}}function xt(t){return 1===(t.material?.color?.a??1)}const St=(0,vec3f64/* create */.vt)(),jt=(0,vec3f64/* create */.vt)(),Pt=new elevationAlignmentUtils/* SampleElevationInfo */.Uk,wt=[0,2,1],Ot=[0,1,2],Ct=.01,Et=[(0,vec3f64/* create */.vt)(),(0,vec3f64/* create */.vt)(),(0,vec3f64/* create */.vt)()],vt=(0,vec3f64/* create */.vt)(),It=(0,vec3f64/* create */.vt)(),At=[0,0,0];var Mt;!function(t){t[t.Main=0]="Main",t[t.Bottom=1]="Bottom"}(Mt||(Mt={}));class Lt{constructor(t,e,r,o){this.positions=t,this.elevation=e,this.normals=r,this.heights=o}}class Bt{constructor(t,e,r,o){this.topVertexStart=t,this.topVertexCount=e,this.topFaceStart=r,this.topFaceCount=o}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/asyncUtils.js
var asyncUtils = __webpack_require__(12690);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(6267);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/screenUtils.js
var screenUtils = __webpack_require__(89882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/string.js
var string = __webpack_require__(96274);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(20909);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec2f64.js
var vec2f64 = __webpack_require__(59646);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projection/projectPointToVector.js
var projectPointToVector = __webpack_require__(42609);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/FieldsIndex.js
var FieldsIndex = __webpack_require__(79005);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/ArcadeExpression.js
var ArcadeExpression = __webpack_require__(46709);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/cim/CIMSymbolHelper.js
var CIMSymbolHelper = __webpack_require__(48002);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/cim/utils.js
var utils = __webpack_require__(50072);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/cimSymbolUtils.js
var cimSymbolUtils = __webpack_require__(77573);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/IconSymbol3DLayerResource.js
var IconSymbol3DLayerResource = __webpack_require__(5666);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/Symbol3DAnchorPosition2D.js
var Symbol3DAnchorPosition2D = __webpack_require__(15790);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/utils.js
var support_utils = __webpack_require__(55056);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/graphics/constants.js
var constants = __webpack_require__(84680);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/graphics/ElevationAligners.js
var ElevationAligners = __webpack_require__(88237);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/focusAreaStyle.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const focusAreaStyle_t=.42,focusAreaStyle_r=.32;function focusAreaStyle_c(c,n){if(c)switch(n){case"bright":{const t=(c[0]+c[1]+c[2])/3;return[t*focusAreaStyle_r+(1-focusAreaStyle_r),t*focusAreaStyle_r+(1-focusAreaStyle_r),t*focusAreaStyle_r+(1-focusAreaStyle_r),c[3]*focusAreaStyle_r]}case"dark":return[c[0]*focusAreaStyle_t,c[1]*focusAreaStyle_t,c[2]*focusAreaStyle_t,c[3]*focusAreaStyle_t]}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/aaBoundingRect.js
var aaBoundingRect = __webpack_require__(80510);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/ModelDirtyTypes.js
var ModelDirtyTypes = __webpack_require__(23183);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DDrapedGraphicLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Graphics3DDrapedGraphicLayer_l{constructor(e,t,r,i){this.graphics3DSymbolLayer=e,this.renderGeometries=t,this.boundingBox=r,this._drapeSourceRenderer=i,this.type="draped",this._visible=!1,this._addedToStage=!1,this.isElevationSource=!1}initialize(e){this.stage=e.stage}get usedMemory(){return this.graphics3DSymbolLayer.usedMemory}setVisibility(e){if(null!=this.stage&&this._visible!==e){if(this._visible=e,e&&!this._addedToStage)return this._addedToStage=!0,void this._drapeSourceRenderer.addGeometries(this.renderGeometries,ModelDirtyTypes/* DirtyOperation */.q.ADD);if(e||this._addedToStage){for(const e of this.renderGeometries)e.visible=this._visible;this._drapeSourceRenderer.modifyGeometries(this.renderGeometries,ModelDirtyTypes/* DirtyState */.k.VISIBILITY)}}}destroy(){this.stage&&this._addedToStage&&this._drapeSourceRenderer.removeGeometries(this.renderGeometries,ModelDirtyTypes/* DirtyOperation */.q.REMOVE),this._addedToStage=!1,this._visible=!1,this.stage=null}getCenterObjectSpace(r=(0,vec3f64/* create */.vt)()){return (0,vec32.i)(r,0,0,0)}getBoundingBoxObjectSpace(e=(0,aaBoundingBox/* create */.vt)()){return (0,aaBoundingBox/* empty */.Ie)(e)}addObjectState(e){e.stateType===basicInterfaces/* Object3DState */.Mg.Highlight&&(this.renderGeometries.forEach((t=>{const r=t.geometry.allocateIdAndHighlight(e.highlightName);e.addRenderGeometry(t,r,this)})),this._addedToStage&&this._drapeSourceRenderer.modifyGeometries(this.renderGeometries,ModelDirtyTypes/* DirtyState */.k.HIGHLIGHT))}removeObjectState(e){this.renderGeometries.forEach((t=>e.removeByObject(t)))}updateHighlights(e){}removeRenderGeometryObjectState(e,t){t.channel===basicInterfaces/* Object3DState */.Mg.Highlight&&(e.geometry.removeHighlight(t),this._addedToStage&&this._drapeSourceRenderer.modifyGeometries([e],ModelDirtyTypes/* DirtyState */.k.HIGHLIGHT))}computeAttachmentOrigin(e){for(const t of this.renderGeometries)t.geometry.computeAttachmentOrigin(y)&&(e.draped.origin[0]+=y[0],e.draped.origin[1]+=y[1],e.draped.num++)}async getProjectedBoundingBox(e,t,r,d,n){(0,aaBoundingBox/* empty */.Ie)(n);for(let i=0;i<this.renderGeometries.length;i++){const t=this.renderGeometries[i];this._getRenderGeometryProjectedBoundingRect(t,e,Graphics3DDrapedGraphicLayer_u,r),(0,aaBoundingBox/* expandWithRect */.DC)(n,Graphics3DDrapedGraphicLayer_u)}if(t){let e;(0,aaBoundingBox/* center */.gX)(n,y);const r=(0,graphicUtils/* demResolutionForBoundingBox */.vY)(n,t.service.spatialReference,t);try{e=await t.service.queryElevation(y[0],y[1],d,r,"ground")}catch(a){}null!=e&&(n[2]=Math.min(n[2],e),n[5]=Math.max(n[5],e))}return n}_getRenderGeometryProjectedBoundingRect(e,t,r,i){if(this.boundingBox)(0,aaBoundingBox/* set */.hZ)(p,this.boundingBox);else{const t=e.boundingSphere,r=t[3];p[0]=t[0]-r,p[1]=t[1]-r,p[2]=t[2]-r,p[3]=t[0]+r,p[4]=t[1]+r,p[5]=t[2]+r}return t(p,0,2),this.calculateRelativeScreenBounds&&i.push({location:(0,aaBoundingBox/* center */.gX)(p),screenSpaceBoundingRect:this.calculateRelativeScreenBounds()}),(0,aaBoundingBox/* toRect */.ES)(p,r)}}const Graphics3DDrapedGraphicLayer_u=(0,aaBoundingRect/* create */.vt)(),p=(0,aaBoundingBox/* create */.vt)(),y=(0,vec3f64/* create */.vt)();

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/graphics/placementUtils.js
var placementUtils = __webpack_require__(57089);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/graphics/pointUtils.js
var pointUtils = __webpack_require__(72458);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/support/FastSymbolUpdates.js
var FastSymbolUpdates = __webpack_require__(69463);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/support/engineContent/sdfPrimitives.js
var sdfPrimitives = __webpack_require__(97213);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/GeometryUtil.js + 1 modules
var GeometryUtil = __webpack_require__(94643);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/RenderGeometry.js
var RenderGeometry = __webpack_require__(2007);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Texture.js + 3 modules
var Texture = __webpack_require__(17342);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/HUDMaterial.js + 4 modules
var HUDMaterial = __webpack_require__(62331);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DIconSymbolLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const ne=(0,vec3f64/* fromValues */.fA)(0,0,1),le=16,ce=1.5,he=[sdfPrimitives/* defaultTexSize */.Q_*sdfPrimitives/* defaultSymbolSizeRatio */.CN,sdfPrimitives/* defaultTexSize */.Q_*sdfPrimitives/* defaultSymbolSizeRatio */.CN];class ue extends Graphics3DSymbolLayer/* Graphics3DSymbolLayer */.U{static{this.PRIMITIVE_SIZE=he}getCachedSize(){return{size:this._getIconSize()}}static{this.elevationModeChangeTypes={definedChanged:elevationAlignmentUtils/* SymbolUpdateType */.uw.UPDATE,staysOnTheGround:elevationAlignmentUtils/* SymbolUpdateType */.uw.NONE,onTheGroundChanged:elevationAlignmentUtils/* SymbolUpdateType */.uw.RECREATE}}constructor(e,t,r,i){super(e,t,r,i,ge(t)),this._cimData=null,this._overrideHelperClass=null,this._arcadeInfo=null,this._cimSymbolMaterials=new Map,this._cimSymbolTextures=new Map,this._cimMaterialParametersInfo=null,this._cimScaleFactorOrFunction=null,this._size=null,this._symbolTextureRatio=1,this._outlineSize=0,this._textureHandle=null,this._patchTask=null,this._elevationOptions={supportsOffsetAdjustment:!0,supportsOnTheGround:!0}}async doLoad(e){this._validateOrThrow();const t=this._prepareMaterialParameters(),r=this._getPrimitive();if(null!=r)this._prepareResourcesPrimitive(t,r);else{const r=(0,support_utils/* getIconHref */.N7)(this.symbolLayer),i=pe(r);null!=i?await this._prepareResourcesCIM(t,JSON.parse(i),e):await this._prepareResourcesHref(t,r,e)}}_validateOrThrow(){if(this._drivenProperties.size)return;const e=(0,graphicUtils/* validateSymbolLayerSize */.Hj)(this._getIconSize());if(e)throw new core_Error/* default */.A("graphics3diconsymbollayer:invalid-size",e)}_getIconSize(){const e=this.symbolLayer,t=Math.round(null!=e.size?(0,screenUtils/* pt2px */.Lz)(e.size):le);return this._drivenProperties.size?Math.max(t,64):t}_generateTextureCIM(e,t){const r=this._overrideHelperClass;let i=this._cimData;if(r&&i&&i.symbol||this.logger.error("Can't create texture, CIM data is undefined"),i.primitiveOverrides){i=(0,lang/* clone */.o8)(i);const o=i.primitiveOverrides;r.evaluateOverrides(o,e,this._arcadeInfo.geometryType,null,null,t.layer.fieldsIndex),r.applyOverrides(i.symbol,o)}const o=(0,string/* numericHash */.Wm)(JSON.stringify(i));let a=this._cimSymbolTextures.get(o);if(a)return a;const n=this._context.sharedResources.cimSymbolRasterizer,l=this._context.renderer&&"dictionary"===this._context.renderer.type?this._context.renderer.fieldMap:null;l&&r.applyDictionaryTextOverrides(i.symbol,e,l,null);const c=null!=this._cimScaleFactorOrFunction?(0,utils/* evaluateValueOrFunction */.s4)(this._cimScaleFactorOrFunction,e):1;1!==c&&i.symbol&&(0,cimSymbolUtils/* scaleCIMSymbol */.Km)(i.symbol,c,!0);const h=CIMSymbolHelper/* CIMSymbolHelper */.wp.getEnvelope(i,null,n.resourceManager);if(h?.width&&h.height){const e=h.x+h.width/2,t=h.y+h.height/2,r=n.rasterize({type:"cim",data:i},h.width,h.height,e,t,1,"esriGeometryPoint",0,null,this._context.graphicsCoreOwner.view.state.rasterPixelRatio),s=new Symbol3DAnchorPosition2D/* Symbol3DAnchorPosition2D */.Q({x:-h.x/h.width-.5,y:(h.height+h.y)/h.height-.5});this._cimMaterialParametersInfo.anchorPosition=_e("relative",s),a=new Texture/* Texture */.g(r,{width:r?.width??1,height:r?.height??1,reloadable:!0})}else a=new Texture/* Texture */.g(new ImageData(1,1),{width:1,height:1,reloadable:!0});return this._cimSymbolTextures.set(o,a),this._context.stage.addTexture(a),a}_prepareMaterialParameters(){const e={anchorPosition:_e(this.symbolLayer.anchor,this.symbolLayer.anchorPosition),rotation:this.symbolLayer.angle},t=this.symbol;if(me(t)){const{screenLength:r,minWorldLength:i,maxWorldLength:s}=t.verticalOffset;e.verticalOffset={screenLength:(0,screenUtils/* pt2px */.Lz)(r),minWorldLength:i||0,maxWorldLength:null!=s?s:1/0}}this._context.screenSizePerspectiveEnabled&&(e.screenSizePerspective=this._context.sharedResources.screenSizePerspectiveSettings),(0!==e.rotation||this._drivenProperties.rotation)&&(e.hasRotation=!0);const r=!!(0,has/* default */.A)("enable-feature:non-occluded-hud");return e.occlusionTest=!r,e.occludedFragmentFade=r,e.horizonCullingEnabled=r&&this._context.spherical,e.hasSlicePlane=this._context.slicePlaneEnabled,e}_prepareResourcesPrimitive(e,t){const r=this._getOutlineSize();if(de(t)&&0===r)throw new Error("Nothing to render");if(this._outlineSize=r,e.color=this._getFillColor(),e.outlineColor=this._getOutlineColor(),e.outlineSize=this._outlineSize,null!=this._context.sharedResources.textures){const r=this._context.sharedResources.textures.fromData(`${t}-icon`,(()=>(0,sdfPrimitives/* createTexture */.sZ)(t)));this._textureHandle=r,e.textureId=r.texture.id}e.textureIsSignedDistanceField=!0,e.sampleSignedDistanceFieldTexelCenter=(0,sdfPrimitives/* requiresHalfTexelOffset */.ny)(t),e.distanceFieldBoundingBox=sdfPrimitives/* defaultBoundingBox */.PY;const i=this._getIconSize();this._size=[i,i],this._symbolTextureRatio=1/sdfPrimitives/* defaultSymbolSizeRatio */.CN,this._createMaterial(e)}async _prepareResourcesHref(e,r,s){this._outlineSize=this._getOutlineSize(),e.color=this._getFillColor(),e.outlineColor=this._getOutlineColor(),e.outlineSize=this._outlineSize,e.textureIsSignedDistanceField=!1;const o=this._getIconSize(),a=o*this._context.graphicsCoreOwner.view.state.rasterPixelRatio;if(null!=this._context.sharedResources.textures){const l=await (0,asyncUtils/* result */.Ke)(this._context.sharedResources.textures.fromUrl(r,a,{signal:s}));if(!1===l.ok){(0,promiseUtils/* throwIfAbortError */.QP)(l.error);throw new core_Error/* default */.A("graphics3diconsymbollayer:request-failed",`Failed to load (Request for icon resource failed: ${r})`)}this._textureHandle=l.value;const c=l.value.texture;this._size=fe(c,o),e.textureId=c.id}this._createMaterial(e)}async _prepareResourcesCIM(e,t,r){const{OverrideHelper:i}=await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 17125));if(this._overrideHelperClass=i,this._cimData=t,!this._context.sharedResources.cimSymbolRasterizer){const e=(await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 79851))).CIMSymbolRasterizer;(0,promiseUtils/* throwIfAborted */.Te)(r),this._context.sharedResources.cimSymbolRasterizer||(this._context.sharedResources.cimSymbolRasterizer=new e(this._context.renderCoordsHelper.spatialReference))}const s=this._context.sharedResources.cimSymbolRasterizer,o=[],a=t,n=a?.symbol;CIMSymbolHelper/* CIMSymbolHelper */.wp.fetchResources(n,s.resourceManager,o,r),CIMSymbolHelper/* CIMSymbolHelper */.wp.fetchFonts(n,s.resourceManager,o);const c=this._context.layer.fields?this._context.layer.fields.map((e=>e.toJSON())):[],h=this._context.renderCoordsHelper.spatialReference;if(this._arcadeInfo={spatialReference:h,fields:c,geometryType:"esriGeometryPoint"},a?.primitiveOverrides&&o.push(i.createRenderExpressions(a.primitiveOverrides,this._arcadeInfo)),o.length>0&&(await Promise.all(o),(0,promiseUtils/* throwIfAborted */.Te)(r)),this._context.renderer&&"dictionary"===this._context.renderer.type&&this._context.renderer.scaleExpression){const e=this._context.renderer;if(e.scaleExpression){const t=e.scaleExpression,r=await (0,ArcadeExpression/* createRendererExpression */.Ad)(t,this._context.layer.spatialReference),{default:i}=await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 29986)),s=new FieldsIndex/* default */.A(c);this._cimScaleFactorOrFunction=(e,t,o)=>{const a=i(r,e,{$view:o},"esriGeometryPoint",s,t);return null!==a?a:1}}}(0,promiseUtils/* throwIfAborted */.Te)(r),this._cimMaterialParametersInfo=e,this._cimMaterialParametersInfo.color=this._getFillColor(),this._cimMaterialParametersInfo.outlineColor=[0,0,0,0],this._cimMaterialParametersInfo.outlineSize=0,this._cimMaterialParametersInfo.textureIsSignedDistanceField=!1}_getPrimitive(){return ye(this.symbolLayer)}_getOutlineSize(){let e=0;const t=this.symbolLayer;if(null!=t.outline?.size)return Math.max((0,screenUtils/* pt2px */.Lz)(t.outline.size),0);return e=de(this._getPrimitive())?ce:0,Math.max(e,0)}_getOutlineColor(){const t=this._getLayerOpacity(),r=this.symbolLayer,i=r?.outline?.color;if(null!=i){const r=Color/* default */.A.toUnitRGB(i),s=i.a*t;return[r[0],r[1],r[2],s]}return[0,0,0,0]}_getFillColor(){if(de(this._getPrimitive()))return constants/* transparentUnit */.r4;const e=null==this._getPrimitive(),t=this.symbolLayer?.material?.color;return this._getCombinedOpacityAndColor(t,{hasIntrinsicColor:e})}_getFallbackOpacityAndColor(){const t=this.symbolLayer?.material?.color;if(null==t){return null==this._getPrimitive()?vec4f64/* ONES */.Un:vec4f64/* ZEROS */.uY}return Color/* default */.A.toUnitRGBA(t)}_getFallbackSize(){const e=this._getIconSize(),{symbolLayer:{size:t}}=this;return(null!=t?Math.round((0,screenUtils/* pt2px */.Lz)(t)):le)/e}_createMaterial(e){const t=this._context.spherical;if(this._cimData){this._fastUpdates=null;let r=e.textureId?this._cimSymbolMaterials.get(e.textureId):null;return r||(r=new HUDMaterial/* HUDMaterial */.R(e,t),this._cimSymbolMaterials.set(e.textureId??0,r)),r}this._fastUpdates=(0,FastSymbolUpdates/* initFastSymbolUpdatesState */.s_)(this._context.renderer,this._fastVisualVariableConvertOptions()),this._fastUpdates&&(e={...e,...this._fastUpdates.materialParameters}),this._materials[0]=new HUDMaterial/* HUDMaterial */.R(e,t),e.isFocused=!1;const r=this.view.map?.focusAreas.style;return e.color=focusAreaStyle_c(e.color,r),e.outlineColor=focusAreaStyle_c(e.outlineColor,r),this._materials[1]=new HUDMaterial/* HUDMaterial */.R(e,t),this._materials[0]}_setDrapingDependentMaterialParameters(){this.draped&&(this._forEachMaterial((e=>{e.setParameters({verticalOffset:null,screenSizePerspective:null,occlusionTest:!1,hasSlicePlane:!1,shaderPolygonOffset:0,draped:this.draped})})),this.layerOpacityChanged())}destroy(){super.destroy(),this._patchTask=(0,maybe/* abortMaybe */.DC)(this._patchTask),this._materials.length=0,this._cimSymbolMaterials.clear(),this._cimSymbolTextures.forEach((e=>this._context.stage.removeTexture(e))),this._cimSymbolTextures.clear(),this._textureHandle=(0,maybe/* releaseMaybe */.Gz)(this._textureHandle)}_getScaleFactor({size:e},t){if(!this._drivenProperties.size)return 1;if(null==e)return this._getFallbackSize();const[r,i,s]=e;return"symbol-value"===r?1:"number"==typeof r&&isFinite(r)?(0,screenUtils/* pt2px */.Lz)(r)/t:"number"==typeof s&&isFinite(s)?(0,screenUtils/* pt2px */.Lz)(s)/t:1}_getDrivenRotation(e){return this._drivenProperties.rotation?e.heading??0:0}createGraphics3DGraphic(e){const t=e.graphic;if(!this._validateGeometry(t.geometry))return null;const r=(0,pointUtils/* placePointOnGeometry */.ZX)(t.geometry);if(null==r)return this.logger.warn(`unsupported geometry type for text symbol: ${t.geometry.type}`),null;let i,s=[0,0];const o=this.view.focusAreasView?.containsGeometry(r)??!0;if(this._cimData){if(!this._cimData.symbol)return null;const r=this._generateTextureCIM(t,e),a={textureId:r.id,isFocused:o,...this._cimMaterialParametersInfo};i=this._createMaterial(a);const n=this._context.graphicsCoreOwner.view.state.rasterPixelRatio;s=[r.parameters.width/n,r.parameters.height/n]}else s=this._size,i=o?this._materials[0]:this._materials[1];if(null==r)return this.logger.warn(`unsupported geometry type for icon symbol: ${t.geometry.type}`),null;const a=e.renderingInfo,n=this._getVertexOpacityAndColor(a,this._getFallbackOpacityAndColor()),l=this._getDrivenRotation(a);let c=1;if(!this._fastUpdates?.visualVariables.size){const e=s[0]>s[1]?s[0]:s[1];c=this._getScaleFactor(a,e)}c*=this._symbolTextureRatio;const h=(0,vec2f64/* fromValues */.fA)(s[0]*c,s[1]*c),u=this.setGraphicElevationContext(t);return this.ensureDrapedStatus("on-the-ground"===u.mode)&&this._setDrapingDependentMaterialParameters(),this.draped?this._createAsOverlay(t,r,i,n,l,h):this._createAs3DShape(t,r,i,n,l,h,u,t.uid)}layerOpacityChanged(){const e=this._getFillColor(),t=this._getOutlineColor();this._forEachMaterial((r=>{r.setParameters({color:e}),r.setParameters({outlineColor:t})}))}updateGeometry(e,t){if(this.draped||!this._validateGeometry(t))return!1;const{elevationContext:r,stageObject:i}=e;if(r.mode!==this.getGeometryElevationMode(t))return!1;const s=(0,pointUtils/* placePointOnGeometry */.ZX)(t);if(!s)return!1;const o=(0,pointUtils/* updateStageObjectGeometry */.hS)(i,this._context,s,r);if(null==o)return!1;const a=(0,pointUtils/* getLocalOriginForPoint */.R$)(this._context,s);return i.geometries[0].localOrigin===a&&(e.alignedSampledElevation=o,(0,pointUtils/* extendPointGraphicElevationContext */.d2)(e,s,this._context.elevationProvider),!0)}layerElevationInfoChanged(e,t,r){const i=this._elevationContext.mode,s=(0,elevationAlignmentUtils/* elevationModeChangeUpdateType */.I2)(ue.elevationModeChangeTypes,r,i);if(s!==elevationAlignmentUtils/* SymbolUpdateType */.uw.UPDATE)return s;const o=(0,elevationAlignmentUtils/* needsElevationUpdates2D */.nu)(i)||"absolute-height"===i;return this.updateGraphics3DGraphicElevationInfo(e,t,(()=>o))}slicePlaneEnabledChanged(){return this.draped||this._forEachMaterial((e=>{e.setParameters({hasSlicePlane:this._context.slicePlaneEnabled})})),!0}physicalBasedRenderingChanged(){return!0}get pixelRatioChanged(){return null!=this._getPrimitive()}applyRendererDiff(e,t){for(const r in e.diff){if("visualVariables"!==r)return interfaces/* ApplyRendererDiffResult */.w.RecreateSymbol;if(!(0,FastSymbolUpdates/* updateFastSymbolUpdatesState */.J_)(this._fastUpdates,t,this._fastVisualVariableConvertOptions()))return interfaces/* ApplyRendererDiffResult */.w.RecreateSymbol;this._materials[0]?.setParameters(this._fastUpdates.materialParameters)}return interfaces/* ApplyRendererDiffResult */.w.FastUpdate}updateFocus(e,t){t.forEach((t=>{const r=(0,pointUtils/* placePointOnGeometry */.ZX)(t.graphic.geometry);if(null==r)return void this.logger.warn(`unsupported geometry type for text symbol: ${t.graphic.geometry.type}`);const i=this.view.focusAreasView?.containsGeometry(r)??!0;t.layers.forEach((r=>{if(r?.graphics3DSymbolLayer===this&&r.stageObject){r.stageObject.geometries.some((e=>e.material.parameters.isFocused!==i))&&e(t)}}))}))}prepareSymbolLayerPatch(e){if(this._patchTask?.abort(),"partial"!==e.diff.type)return;const t=e.diff.diff;this._preparePatchResource(e,t),this._preparePatchRotation(e,t)}_preparePatchResource(e,s){if(!s.resource||"partial"!==s.resource.type)return;const c=s.resource.diff;if("complete"!==c?.href?.type)return;const h=c.href.newValue,{textures:u}=this._context.sharedResources;if(null==h||null==u||null!=pe(h))return;const m=this._getIconSize(),d=m*this._context.graphicsCoreOwner.view.state.pixelRatio;e.symbolLayerStatePatches.push((()=>{this._patchTask=(0,maybe/* abortMaybe */.DC)(this._patchTask),this._patchTask=(0,asyncUtils/* createTask */.UT)((e=>this._context.schedule((async(e,r)=>{const s=await (0,asyncUtils/* result */.Ke)(u.fromUrl(h,d,{signal:r}));(0,promiseUtils/* throwIfAborted */.Te)(r);const o=!s.ok;if(o&&(0,promiseUtils/* throwIfAbortError */.QP)(s.error),this._textureHandle=(0,maybe/* releaseMaybe */.Gz)(this._textureHandle),this._patchTask=null,o){this._forEachMaterial((e=>{e.visible=!1,e.setParameters({textureId:null})}));const e=`Failed to load (Request for icon resource failed: ${h})`;return void this.logger.error(new core_Error/* default */.A("graphics3diconsymbollayer:request-failed",e))}this._textureHandle=s.value;const c=s.value.texture;this._size=fe(c,m),this._forEachMaterial((e=>{e.setParameters({textureId:c.id}),e.visible=!0}))}),e)))})),delete c.href}_preparePatchRotation(e,t){if(!t.angle||"complete"!==t.angle.type)return;const r=t.angle.newValue??0,i=0!==r||this._drivenProperties.rotation;e.symbolLayerStatePatches.push((()=>{this._forEachMaterial((e=>e.setParameters({rotation:r,hasRotation:i})))})),delete t.angle}_defaultElevationInfoNoZ(){return xe}_createAs3DShape(e,t,r,i,s,o,a,n){const l=this.getFastUpdateAttrValues(e),c=this._context.layerViewUid,h=this._context.stage.renderView.getObjectAndLayerIdColor({graphicUid:n,layerViewUid:c}),u=(0,GeometryUtil/* createPointGeometry */.DJ)(r,{normal:ne,color:i,rotation:s,size:o,centerOffsetAndDistance:be,featureAttribute:l,objectAndLayerIdColor:h}),m=(0,pointUtils/* createStageObject */.SZ)(this._context,t,u,a,n);if(null==m)return null;const d=new Graphics3DObject3DGraphicLayer/* Graphics3DObject3DGraphicLayer */.Y(this,m.object,null,ElevationAligners/* perObjectElevationAligner */.G8,a);return d.alignedSampledElevation=m.sampledElevation,d.needsElevationUpdates=(0,elevationAlignmentUtils/* needsElevationUpdates2D */.nu)(a.mode)||"absolute-height"===a.mode,d.getScreenSize=this._createScreenSizeGetter(o,l),d.calculateRelativeScreenBounds=e=>r.calculateRelativeScreenBounds(d.getScreenSize(),1,e),(0,pointUtils/* extendPointGraphicElevationContext */.d2)(d,t,this._context.elevationProvider),d}_createAsOverlay(e,t,r,i,s,o){r.renderPriority=this._renderPriority;const a=(0,vec3f64/* create */.vt)();(0,projectPointToVector/* projectPointToVector */.g)(t,a,this._context.overlaySR),a[2]=OverlayRenderer/* drapedZ */.bi;const n=this._context.clippingExtent;if(null!=n&&!(0,aaBoundingBox/* containsPoint */.Uc)(n,a))return null;const l=this.getFastUpdateAttrValues(e),c=e.uid,h=this._context.layerViewUid,u=this._context.stage.renderView.getObjectAndLayerIdColor({graphicUid:c,layerViewUid:h}),m=(0,GeometryUtil/* createPointGeometry */.DJ)(r,{normal:ne,position:a,color:i,rotation:s,size:o,featureAttribute:l,objectAndLayerIdColor:u}),d=new RenderGeometry/* RenderGeometry */.$(m,{layerViewUid:h,graphicUid:c}),p=new Graphics3DDrapedGraphicLayer_l(this,[d],null,this._context.drapeSourceRenderer);return p.getScreenSize=this._createScreenSizeGetter(o,l),p.calculateRelativeScreenBounds=e=>r.calculateRelativeScreenBounds(p.getScreenSize(),1,e),p}_createScreenSizeGetter(e,t){const r=this._outlineSize+2;if(this._fastUpdates&&t){const i=e[0]/this._symbolTextureRatio,s=e[1]/this._symbolTextureRatio;return(e=(0,vec2f64/* create */.vt)())=>{const[o,a]=(0,FastSymbolUpdates/* evaluateModelTransformScale */.VC)(ve,this._fastUpdates.materialParameters,t);return e[0]=o*i+r,e[1]=a*s+r,e}}const i=e[0]/this._symbolTextureRatio+r,s=e[1]/this._symbolTextureRatio+r;return(e=(0,vec2f64/* create */.vt)())=>(e[0]=i,e[1]=s,e)}_fastVisualVariableConvertOptions(){const e=Math.max(this._size[0],this._size[1]),t=(0,vec3f64/* fromValues */.fA)(e,e,e),r=(0,screenUtils/* px2pt */.PN)(1),i=e*r,s=(0,vec3f64/* fromValues */.fA)(i,i,i),o=this._getFallbackSize();return new FastSymbolUpdates/* ConvertOptions */.wI({supports:{size:!0,color:!0,rotation:!0,opacity:!1},modelSize:t,symbolSize:s,unitInMeters:r,fallbackColor:this._getFallbackOpacityAndColor(),fallbackSize:(0,vec3f64/* fromValues */.fA)(o,o,o)})}_forEachMaterial(e){this._materials.forEach(e),this._cimSymbolMaterials.forEach(e)}test(){return{...super.test(),material:this._materials[0]}}}function me(e){return e&&"point-3d"===e.type&&e.hasVisibleVerticalOffset()}function de(e){return null!=e&&("cross"===e||"x"===e)}function pe(e){const t=(0,urlUtils/* dataComponents */.r$)(e);return"application/json"===t?.mediaType?t.data:void 0}function _e(e,t){return"relative"===e?(0,vec2f64/* fromValues */.fA)((t.x||0)+.5,.5-(t.y||0)):e in placementUtils/* namedAnchorToHUDMaterialAnchorPos */.Zd?placementUtils/* namedAnchorToHUDMaterialAnchorPos */.Zd[e]:placementUtils/* namedAnchorToHUDMaterialAnchorPos */.Zd.center}function fe({parameters:e},t){const r=(e.width??1)/(e.height??1);return r>1?[t,Math.round(t/r)]:[Math.round(t*r),t]}function ye(e){return e.resource?.href?null:e.resource?.primitive??IconSymbol3DLayerResource/* defaultPrimitive */.r}function ge(e){return 1===(e.material?.color?.a??1)&&null!=ye(e)}const xe={mode:"relative-to-ground",offset:0},be=(0,vec4f64/* fromValues */.fA)(0,0,0,1),ve=(0,vec3f64/* create */.vt)();

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec42.js
var vec42 = __webpack_require__(2662);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/RibbonLineTechniqueConfiguration.js
var RibbonLineTechniqueConfiguration = __webpack_require__(16906);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/lineUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function n(n){switch(n){case"butt":return RibbonLineTechniqueConfiguration/* CapType */.x.BUTT;case"square":return RibbonLineTechniqueConfiguration/* CapType */.x.SQUARE;case"round":return RibbonLineTechniqueConfiguration/* CapType */.x.ROUND;default:return null}}function lineUtils_r(e){return"diamond"===e?"kite":e}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/support/engineContent/line.js
var line = __webpack_require__(46684);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/support/renderInfoUtils/line.js
var renderInfoUtils_line = __webpack_require__(4062);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/float16.js
var float16 = __webpack_require__(11449);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/support/buffer/InterleavedLayout.js
var InterleavedLayout = __webpack_require__(11110);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js
var ShaderOutput = __webpack_require__(55274);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLMaterial.js
var GLMaterial = __webpack_require__(67341);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Material.js
var Material = __webpack_require__(45722);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/RenderSlot.js
var RenderSlot = __webpack_require__(38323);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/VisualVariablePassParameters.js
var VisualVariablePassParameters = __webpack_require__(17745);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/bufferWriterUtils.js
var bufferWriterUtils = __webpack_require__(81500);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ReloadableShaderModule.js
var ReloadableShaderModule = __webpack_require__(47705);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechnique.js + 1 modules
var ShaderTechnique = __webpack_require__(28347);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/OrderIndependentTransparency.js
var OrderIndependentTransparency = __webpack_require__(1931);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/StencilUtils.js
var StencilUtils = __webpack_require__(98546);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/LineMarker.glsl.js
var LineMarker_glsl = __webpack_require__(7700);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/LineMarkerTechniqueConfiguration.js
var LineMarkerTechniqueConfiguration = __webpack_require__(58376);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/renderState.js
var renderState = __webpack_require__(2449);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/LineMarkerTechnique.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class S extends ShaderTechnique/* ShaderTechnique */.w{constructor(e,t){super(e,t,new ReloadableShaderModule/* ReloadableShaderModule */.$(LineMarker_glsl.L,(()=>__webpack_require__.e(/* import() */ 6240).then(__webpack_require__.bind(__webpack_require__, 46240)))),W)}_makePipelineState(i,t){const{output:p,oitPass:d,space:T,hasOccludees:h}=i;return (0,renderState/* makePipelineState */.Ey)({blending:(0,ShaderOutput/* isColorOrColorEmission */.RN)(p)?(0,OrderIndependentTransparency/* blending */.Yf)(d):null,depthTest:T===LineMarkerTechniqueConfiguration/* LineMarkerSpace */.lM.Draped?null:{func:(0,OrderIndependentTransparency/* oitDepthTest */.K_)(d)},depthWrite:(0,OrderIndependentTransparency/* depthWrite */.z5)(i),drawBuffers:(0,ShaderTechnique/* depthOnlyOutputBuffersOr */.L)(p,(0,OrderIndependentTransparency/* getDrawBuffers */.m6)(d,p)),colorWrite:renderState/* defaultColorWrite */.kn,stencilWrite:h?StencilUtils/* stencilWriteMaskOn */.v0:null,stencilTest:h?t?StencilUtils/* stencilToolMaskBaseParams */.a9:StencilUtils/* stencilBaseAllZerosParams */.qh:null,polygonOffset:{factor:0,units:-10}})}initializePipeline(e){return e.occluder?(this._occluderPipelineTransparent=(0,renderState/* makePipelineState */.Ey)({blending:renderState/* unpremultipliedAlphaToPremultipliedAlpha */.T8,depthTest:StencilUtils/* depthCompareAlways */.sf,depthWrite:null,colorWrite:renderState/* defaultColorWrite */.kn,stencilWrite:null,stencilTest:StencilUtils/* stencilToolTransparentOccluderParams */.mK}),this._occluderPipelineOpaque=(0,renderState/* makePipelineState */.Ey)({blending:renderState/* unpremultipliedAlphaToPremultipliedAlpha */.T8,depthTest:StencilUtils/* depthCompareAlways */.sf,depthWrite:null,colorWrite:renderState/* defaultColorWrite */.kn,stencilWrite:StencilUtils/* stencilWriteMaskOff */.r8,stencilTest:StencilUtils/* stencilToolMaskOccluderParams */.I$}),this._occluderPipelineMaskWrite=(0,renderState/* makePipelineState */.Ey)({blending:null,depthTest:StencilUtils/* depthCompareLess */.m,depthWrite:null,colorWrite:null,stencilWrite:StencilUtils/* stencilWriteMaskOn */.v0,stencilTest:StencilUtils/* stencilToolMaskBaseParams */.a9})):this._occluderPipelineTransparent=this._occluderPipelineOpaque=this._occluderPipelineMaskWrite=null,this._occludeePipelineState=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,i){return e?this._occludeePipelineState:i===RenderSlot/* RenderSlot */.N.TRANSPARENT_OCCLUDER_MATERIAL?this._occluderPipelineTransparent??super.getPipeline():i===RenderSlot/* RenderSlot */.N.OCCLUDER_MATERIAL?this._occluderPipelineOpaque??super.getPipeline():this._occluderPipelineMaskWrite??super.getPipeline()}}const W=new Map([[VertexAttribute/* VertexAttribute */.r.POSITION,0],[VertexAttribute/* VertexAttribute */.r.PREVIOUSDELTA,1],[VertexAttribute/* VertexAttribute */.r.UV0,2],[VertexAttribute/* VertexAttribute */.r.COLOR,3],[VertexAttribute/* VertexAttribute */.r.COLORFEATUREATTRIBUTE,3],[VertexAttribute/* VertexAttribute */.r.OPACITYFEATUREATTRIBUTE,4],[VertexAttribute/* VertexAttribute */.r.SIZE,5],[VertexAttribute/* VertexAttribute */.r.SIZEFEATUREATTRIBUTE,5],[VertexAttribute/* VertexAttribute */.r.NORMAL,6]]);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/webscene/support/AlphaCutoff.js
var AlphaCutoff = __webpack_require__(63199);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/LineMarkerMaterial.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class I extends Material/* Material */.im{constructor(e){super(e,C),this._configuration=new LineMarkerTechniqueConfiguration/* LineMarkerTechniqueConfiguration */.Dt,this.vertexAttributeLocations=W,this.produces=new Map([[RenderSlot/* RenderSlot */.N.OPAQUE_MATERIAL,e=>e===ShaderOutput/* ShaderOutput */.V.Highlight||(0,ShaderOutput/* isColor */._o)(e)&&this.parameters.renderOccluded===Material/* RenderOccludedFlag */.m$.OccludeAndTransparentStencil],[RenderSlot/* RenderSlot */.N.OPAQUE_MATERIAL_WITHOUT_NORMALS,e=>(0,ShaderOutput/* isDepth */.eh)(e)],[RenderSlot/* RenderSlot */.N.OCCLUDER_MATERIAL,e=>(0,ShaderOutput/* isColorHighlightOrDepth */.aD)(e)&&this.parameters.renderOccluded===Material/* RenderOccludedFlag */.m$.OccludeAndTransparentStencil],[RenderSlot/* RenderSlot */.N.TRANSPARENT_OCCLUDER_MATERIAL,e=>(0,ShaderOutput/* isColorHighlightOrDepth */.aD)(e)&&this.parameters.renderOccluded===Material/* RenderOccludedFlag */.m$.OccludeAndTransparentStencil],[RenderSlot/* RenderSlot */.N.TRANSPARENT_MATERIAL,e=>(0,ShaderOutput/* isColor */._o)(e)&&this.parameters.writeDepth],[RenderSlot/* RenderSlot */.N.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,e=>(0,ShaderOutput/* isColor */._o)(e)&&!this.parameters.writeDepth],[RenderSlot/* RenderSlot */.N.DRAPED_MATERIAL,e=>(0,ShaderOutput/* isColorOrColorEmission */.RN)(e)||e===ShaderOutput/* ShaderOutput */.V.Highlight]]),this.intersectDraped=void 0,this._layout=this.createLayout()}getConfiguration(e,t){return super.getConfiguration(e,t,this._configuration),this._configuration.space=t.slot===RenderSlot/* RenderSlot */.N.DRAPED_MATERIAL?LineMarkerTechniqueConfiguration/* LineMarkerSpace */.lM.Draped:this.parameters.worldSpace?LineMarkerTechniqueConfiguration/* LineMarkerSpace */.lM.World:LineMarkerTechniqueConfiguration/* LineMarkerSpace */.lM.Screen,this._configuration.hideOnShortSegments=this.parameters.hideOnShortSegments,this._configuration.hasCap=this.parameters.cap!==RibbonLineTechniqueConfiguration/* CapType */.x.BUTT,this._configuration.anchor=this.parameters.anchor,this._configuration.hasTip=this.parameters.hasTip,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasOccludees=t.hasOccludees,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.occluder=this.parameters.renderOccluded===Material/* RenderOccludedFlag */.m$.OccludeAndTransparentStencil,this._configuration.oitPass=t.oitPass,this._configuration.terrainDepthTest=t.terrainDepthTest&&(0,ShaderOutput/* isColorOrColorEmission */.RN)(e),this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration}get visible(){return this.parameters.color[3]>=AlphaCutoff/* alphaCutoff */.Q}intersect(){}createLayout(){const e=(0,InterleavedLayout/* newLayout */.BP)().vec3f(VertexAttribute/* VertexAttribute */.r.POSITION).vec4f16(VertexAttribute/* VertexAttribute */.r.PREVIOUSDELTA).vec2f16(VertexAttribute/* VertexAttribute */.r.UV0);return this.parameters.vvColor?e.f32(VertexAttribute/* VertexAttribute */.r.COLORFEATUREATTRIBUTE):e.vec4u8(VertexAttribute/* VertexAttribute */.r.COLOR,{glNormalized:!0}),this.parameters.vvOpacity&&e.f32(VertexAttribute/* VertexAttribute */.r.OPACITYFEATUREATTRIBUTE),this.parameters.vvSize?e.f32(VertexAttribute/* VertexAttribute */.r.SIZEFEATUREATTRIBUTE):e.f16(VertexAttribute/* VertexAttribute */.r.SIZE),this.parameters.worldSpace&&e.vec3f16(VertexAttribute/* VertexAttribute */.r.NORMAL),e}createBufferWriter(){return new P(this._layout,this.parameters)}createGLMaterial(e){return new L(e)}}class L extends GLMaterial/* default */.A{dispose(){super.dispose(),this._markerTextures.release(this._markerPrimitive),this._markerPrimitive=null}beginSlot(e){const t=this._material.parameters.markerPrimitive;return t!==this._markerPrimitive&&(this._material.setParameters({markerTexture:this._markerTextures.swap(t,this._markerPrimitive)}),this._markerPrimitive=t),this.getTechnique(S,e)}}class C extends VisualVariablePassParameters/* VisualVariablePassParameters */.S{constructor(){super(...arguments),this.width=0,this.color=[1,1,1,1],this.markerPrimitive="arrow",this.placement="end",this.cap=RibbonLineTechniqueConfiguration/* CapType */.x.BUTT,this.anchor=LineMarkerTechniqueConfiguration/* LineMarkerAnchor */.kJ.Center,this.hasTip=!1,this.worldSpace=!1,this.hideOnShortSegments=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.markerTexture=null}}class P{constructor(e,t){this.vertexBufferLayout=e,this._parameters=t}elementCount(){return"begin-end"===this._parameters.placement?12:6}write(i,s,n,o,h,c){const p=n.get(VertexAttribute/* VertexAttribute */.r.POSITION).data,l=p.length/3;let m=[1,0,0];const u=n.get(VertexAttribute/* VertexAttribute */.r.NORMAL);this._parameters.worldSpace&&null!=u&&(m=u.data);let T=1,d=0;this._parameters.vvSize?d=n.get(VertexAttribute/* VertexAttribute */.r.SIZEFEATUREATTRIBUTE).data[0]:n.has(VertexAttribute/* VertexAttribute */.r.SIZE)&&(T=n.get(VertexAttribute/* VertexAttribute */.r.SIZE).data[0]);let A=[1,1,1,1],_=0;this._parameters.vvColor?_=n.get(VertexAttribute/* VertexAttribute */.r.COLORFEATUREATTRIBUTE).data[0]:n.has(VertexAttribute/* VertexAttribute */.r.COLOR)&&(A=n.get(VertexAttribute/* VertexAttribute */.r.COLOR).data);let v=0;this._parameters.vvOpacity&&(v=n.get(VertexAttribute/* VertexAttribute */.r.OPACITYFEATUREATTRIBUTE).data[0]);const g=new Float32Array(h.buffer),S=(0,float16/* makeFloat16Array */.Bg)(h.buffer),O=new Uint8Array(h.buffer);let R=c*(this.vertexBufferLayout.stride/4);const I=g.BYTES_PER_ELEMENT/S.BYTES_PER_ELEMENT,L=4/I,C=(e,t,r,i)=>{g[R++]=e[0],g[R++]=e[1],g[R++]=e[2],(0,bufferWriterUtils/* writeDeltaF16Vector */.Wu)(t,e,S,R*I),R+=L;let a=R*I;if(S[a++]=r[0],S[a++]=r[1],R=Math.ceil(a/I),this._parameters.vvColor)g[R++]=_;else{const e=Math.min(4*i,A.length-4),t=4*R++;O[t]=255*A[e],O[t+1]=255*A[e+1],O[t+2]=255*A[e+2],O[t+3]=255*A[e+3]}this._parameters.vvOpacity&&(g[R++]=v),a=R*I,this._parameters.vvSize?(g[R++]=d,a+=2):S[a++]=T,this._parameters.worldSpace&&(S[a++]=m[0],S[a++]=m[1],S[a++]=m[2]),R=Math.ceil(a/I)};let P;!function(e){e[e.ASCENDING=1]="ASCENDING",e[e.DESCENDING=-1]="DESCENDING"}(P||(P={}));const b=(a,s)=>{const n=(0,vec32.i)(D,p[3*a],p[3*a+1],p[3*a+2]),o=N;let h=a+s;do{(0,vec32.i)(o,p[3*h],p[3*h+1],p[3*h+2]),h+=s}while((0,vec32.G)(n,o)&&h>=0&&h<l);i&&((0,vec32.t)(n,n,i),(0,vec32.t)(o,o,i)),C(n,o,[-1,-1],a),C(n,o,[1,-1],a),C(n,o,[1,1],a),C(n,o,[-1,-1],a),C(n,o,[1,1],a),C(n,o,[-1,1],a)},U=this._parameters.placement;return"begin"!==U&&"begin-end"!==U||b(0,P.ASCENDING),"end"!==U&&"begin-end"!==U||b(l-1,P.DESCENDING),null}}const D=(0,vec3f64/* create */.vt)(),N=(0,vec3f64/* create */.vt)();

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/lineStippleUtils.js
var lineStippleUtils = __webpack_require__(86868);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/RibbonLineMaterial.js + 1 modules
var RibbonLineMaterial = __webpack_require__(96824);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DLineSymbolLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const H=["polyline","polygon","extent"];class B extends Graphics3DSymbolLayer/* Graphics3DSymbolLayer */.U{static{this.elevationModeChangeTypes={definedChanged:elevationAlignmentUtils/* SymbolUpdateType */.uw.RECREATE,staysOnTheGround:elevationAlignmentUtils/* SymbolUpdateType */.uw.NONE,onTheGroundChanged:elevationAlignmentUtils/* SymbolUpdateType */.uw.RECREATE}}constructor(e,t,r,i){super(e,t,r,i,J(t))}async doLoad(){this._fastUpdates=(0,FastSymbolUpdates/* initFastSymbolUpdatesState */.s_)(this._context.renderer,this._fastVisualVariableConvertOptions());const e=!0;if(this._fastMarkerUpdates=(0,FastSymbolUpdates/* initFastSymbolUpdatesState */.s_)(this._context.renderer,this._fastVisualVariableConvertOptions(e)),!this._drivenProperties.size){if((null!=this.symbolLayer.size?this.symbolLayer.size:(0,screenUtils/* px2pt */.PN)(1))<0)throw new core_Error/* default */.A("graphics3dlinesymbollayer:invalid-size","Symbol sizes may not be negative values")}}_getMaterialParameters(e,t=!1){const r=this._getCombinedOpacityAndColor(t&&this._markerColor||this._materialColor);this._patternHidesLine&&!t&&(r[3]=0);const i={width:this._computeMaterialWidth(this.symbolLayer?.size),color:r,hasPolygonOffset:!0,join:this.symbolLayer.join||"miter",cap:n(this.symbolLayer.cap||"butt"),hasSlicePlane:this._context.slicePlaneEnabled,isClosed:e,stipplePattern:(0,lineStippleUtils/* getStipplePatternForLinePattern */.Xq)(this.symbolLayer.pattern)};return t&&this._fastMarkerUpdates?.visualVariables?{...i,...this._fastMarkerUpdates.materialParameters}:this._fastUpdates?.visualVariables?{...i,...this._fastUpdates.materialParameters}:i}get _materialColor(){return this.symbolLayer.material?.color}get _markerColor(){return this.symbolLayer.marker?.color}get _lineMaterial(){return null==this._materials[Q.Line]&&(this._materials[Q.Line]=new RibbonLineMaterial/* RibbonLineMaterial */.W(this._getMaterialParameters(!1))),this._materials[Q.Line]}get _ringMaterial(){return null==this._materials[Q.Ring]&&(this._materials[Q.Ring]=new RibbonLineMaterial/* RibbonLineMaterial */.W(this._getMaterialParameters(!0))),this._materials[Q.Ring]}get _wireframeLineMaterial(){return null==this._materials[Q.LineWireframe]&&(this._materials[Q.LineWireframe]=new RibbonLineMaterial/* RibbonLineMaterial */.W({...this._getMaterialParameters(!1),wireframe:!0})),this._materials[Q.LineWireframe]}get _wireframeRingMaterial(){return null==this._materials[Q.RingWireframe]&&(this._materials[Q.RingWireframe]=new RibbonLineMaterial/* RibbonLineMaterial */.W({...this._getMaterialParameters(!0),wireframe:!0})),this._materials[Q.RingWireframe]}get _markerMaterial(){return null==this._materials[Q.Marker]&&null!=this.symbolLayer.marker&&(this._materials[Q.Marker]=new I({...this._getMaterialParameters(!1,!0),placement:this.symbolLayer.marker.placement,markerPrimitive:lineUtils_r(this.symbolLayer.marker.style)})),this._materials[Q.Marker]}_getDrivenSize(e){if(this._drivenProperties.size){const t=e.size;return null!=t?(0,screenUtils/* pt2px */.Lz)((0,renderingInfoUtils/* getDriverAxisSizeValueAny */.or)(t)):this._getFallbackSize()}return 1}_getDrivenColor({color:e,opacity:t}){const r=(0,vec4f64/* fromValues */.fA)(1,1,1,1);return this._drivenProperties.color&&(0,vec42.c)(r,e??this._getFallbackOpacityAndColor()),this._drivenProperties.opacity&&(r[3]=t??this._getFallbackOpacity()),r}_getDrivenMarkerColor({color:e,opacity:t}){const r=(0,vec4f64/* ones */.S)();return this._drivenProperties.color&&(0,vec42.c)(r,e??this._getFallbackMarkerOpacityAndColor()),this._drivenProperties.opacity&&(r[3]=t??this._getFallbackMarkerOpacity()),r}createGraphics3DGraphic(e){const t=e.graphic;if(!this._validateGeometry(t.geometry,H,this.symbolLayer.type))return null;const r=this.setGraphicElevationContext(t);return this.ensureDrapedStatus("on-the-ground"===r.mode),this.draped?this._createAsOverlay(e):this._createAs3DShape(e,r,t.uid)}applyRendererDiff(e,t){for(const r in e.diff){if("visualVariables"!==r)return interfaces/* ApplyRendererDiffResult */.w.RecreateSymbol;{const e=this._fastUpdates;if(!(0,FastSymbolUpdates/* updateFastSymbolUpdatesState */.J_)(e,t,this._fastVisualVariableConvertOptions()))return interfaces/* ApplyRendererDiffResult */.w.RecreateSymbol;for(const t of this._materials)t instanceof RibbonLineMaterial/* RibbonLineMaterial */.W&&t.setParameters(e.materialParameters);const r=this._fastMarkerUpdates,i=!0;if(!(0,FastSymbolUpdates/* updateFastSymbolUpdatesState */.J_)(r,t,this._fastVisualVariableConvertOptions(i)))return interfaces/* ApplyRendererDiffResult */.w.RecreateSymbol;for(const t of this._materials)t instanceof I&&t.setParameters(r.materialParameters)}}return interfaces/* ApplyRendererDiffResult */.w.FastUpdate}prepareSymbolLayerPatch(e){if("partial"!==e.diff.type)return;const t=e.diff.diff,r={};"complete"===t.size?.type&&(r.width=this._computeMaterialWidth(t.size.newValue),delete t.size),"complete"===t.cap?.type&&(r.cap=n(t.cap.newValue??"butt"),delete t.cap);const i=this._prepareMarkerPatch(e,t);this._prepareMaterialPatch(e,t,i),e.symbolLayerStatePatches.push((()=>{for(const e of this._materials)e?.setParameters(r)}))}layerOpacityChanged(){for(const e of this._materials)this._updateMaterialLayerOpacity(e,e instanceof I)}_updateMaterialLayerOpacity(e,t=!1){if(null==e)return;const r=e.parameters.color,i=this.symbolLayer?.material?.color,a=this._patternHidesLine&&!t?0:this._getCombinedOpacity(i),s=(0,vec4f64/* fromValues */.fA)(r[0],r[1],r[2],a);e.setParameters({color:s})}layerElevationInfoChanged(e,t,r){const i=this._elevationContext.mode,a=(0,elevationAlignmentUtils/* elevationModeChangeUpdateType */.I2)(B.elevationModeChangeTypes,r,i);if(a!==elevationAlignmentUtils/* SymbolUpdateType */.uw.UPDATE)return a;const s=(0,elevationAlignmentUtils/* needsElevationUpdates2D */.nu)(i);return this.updateGraphics3DGraphicElevationInfo(e,t,(()=>s))}slicePlaneEnabledChanged(){const e={hasSlicePlane:this._context.slicePlaneEnabled};for(const t of this._materials)t?.setParameters(e);return!0}physicalBasedRenderingChanged(){return!0}_createAs3DShape(e,t,r){const i=Graphics3DLineSymbolLayer_N(e.graphic.geometry),a="polygon"===i.type?i.rings:i.paths,s=new Array,o=(0,aaBoundingBox/* create */.vt)(),n=(0,renderInfoUtils_line/* geometryToRenderInfo */.C)(i,this._context.elevationProvider,this._context.renderCoordsHelper,t),l="polygon"===i.type?"rings":"paths";this._logGeometryCreationWarnings(n,a,l,"LineSymbol3DLayer");for(let h=0;h<n.lines.length;h++){const t=n.lines[h],a=t.position,l=t.mapPositions;if(null!=this._context.clippingExtent&&((0,aaBoundingBox/* fromBuffer */.vY)(l,o),!(0,aaBoundingBox/* intersectsClippingArea */.KG)(o,this._context.clippingExtent)))continue;const c=this._createGeometry("polygon"===i.type?this._ringMaterial:this._lineMaterial,e,a,l,i.type,K.ELEVATED,r);if(s.push(c),debugFlags/* debugFlags */.b.LINE_WIREFRAMES&&s.push(c.instantiate({material:"polygon"===i.type?this._wireframeRingMaterial:this._wireframeLineMaterial})),null!=this._markerMaterial){const t=c.instantiate({material:this._markerMaterial});t.setAttributeData(VertexAttribute/* VertexAttribute */.r.COLOR,this._getDrivenMarkerColor(e.renderingInfo)),s.push(t)}}if(0===s.length)return null;const c=this._context.layerViewUid,p=new Object3D/* Object3D */.B({geometries:s,castShadow:!1,layerViewUid:c,graphicUid:r}),m=new Graphics3DObject3DGraphicLayer/* Graphics3DObject3DGraphicLayer */.Y(this,p,null,ElevationAligners/* sharedGeometryElevationAligner */.Zd,t);return m.alignedSampledElevation=n.sampledElevation,m.needsElevationUpdates=(0,elevationAlignmentUtils/* needsElevationUpdates2D */.nu)(t.mode),m}_createGeometry(e,t,r,i,a,s,o){const n=s===K.DRAPED?{spatialReference:this._context.overlaySR,renderCoordsHelper:this._context.renderCoordsHelper}:null,l="polygon"===a,c=this._fastUpdates?.visualVariables.color,p=this._fastUpdates?.visualVariables.size,m=this._fastUpdates?.visualVariables.opacity,h=this._context.layerViewUid,y=this._context.stage.renderView.getObjectAndLayerIdColor({graphicUid:o,layerViewUid:h}),u={position:r,size:p?null:this._getDrivenSize(t.renderingInfo),color:c?null:this._getDrivenColor(t.renderingInfo),sizeFeature:p?(0,FastSymbolUpdates/* getAttributeValue */.ul)(p.field,t.graphic):null,colorFeature:c?(0,FastSymbolUpdates/* getAttributeValue */.ul)(c.field,t.graphic):null,opacityFeature:m?(0,FastSymbolUpdates/* getAttributeValue */.ul)(m.field,t.graphic):null};return (0,line/* createGeometry */.t)(e,{overlayInfo:n,removeDuplicateStartEnd:l,mapPositions:i,attributeData:u},y)}_createAsOverlay(e){const t=e.graphic,r=Graphics3DLineSymbolLayer_N(t.geometry),i="polygon"===r.type?r.rings:r.paths,a="polygon"===r.type?this._ringMaterial:this._lineMaterial;a.renderPriority=this._renderPriority;const s=debugFlags/* debugFlags */.b.LINE_WIREFRAMES?"polygon"===r.type?this._wireframeRingMaterial:this._wireframeLineMaterial:null,o=this._markerMaterial;null!=s&&(s.renderPriority=this._renderPriority-.001),null!=o&&(o.renderPriority=this._renderPriority-.002);const n=new Array,l=(0,aaBoundingBox/* create */.vt)(),c=(0,aaBoundingBox/* empty */.Ie)(),p=(0,renderInfoUtils_line/* geometryToRenderInfoDraped */.A)(r,this._context.overlaySR),m="polygon"===r.type?"rings":"paths";this._logGeometryCreationWarnings(p,i,m,"LineSymbol3DLayer");for(const h of p.lines){if((0,aaBoundingBox/* fromBuffer */.vY)(h.position,l),!(0,aaBoundingBox/* intersectsClippingArea */.KG)(l,this._context.clippingExtent))continue;(0,aaBoundingBox/* expandWithAABB */.RF)(c,l);const i=i=>{const a=this._createGeometry(i,e,h.position,void 0,r.type,K.DRAPED,t.uid),s=this._context.layerViewUid,o=new RenderGeometry/* RenderGeometry */.$(a,{layerViewUid:s,graphicUid:t.uid});n.push(o)};if(null!=o){i(o);const e=this.symbolLayer.marker.placement;"begin"!==e&&"begin-end"!==e||(0,aaBoundingBox/* expandWithBuffer */.Hq)(l,h.position,0,1),"end"!==e&&"begin-end"!==e||(0,aaBoundingBox/* expandWithBuffer */.Hq)(l,h.position,h.position.length-3,1)}i(a),debugFlags/* debugFlags */.b.LINE_WIREFRAMES&&i(s)}return new Graphics3DDrapedGraphicLayer_l(this,n,c,this._context.drapeSourceRenderer)}get _patternHidesLine(){const e=this.symbolLayer.pattern;return null!=e&&"style"===e.type&&"none"===e.style}_computeMaterialWidth(e){return e=e??(0,screenUtils/* px2pt */.PN)(1),this._drivenProperties.size?this._fastUpdates?.visualVariables.size?(0,screenUtils/* pt2px */.Lz)(1):1:(0,screenUtils/* pt2px */.Lz)(e)}_prepareMaterialPatch(e,t,r){const i=t.material;if(null==i)return void(r.changed&&r.useMaterialColor&&q(this._getCombinedOpacityAndColor(this._materialColor),this._materials[Q.Marker],e));if("collection"===i.type)return;const a="complete"===i.type?i.newValue?.color:"complete"===i.diff.color?.type?i.diff.color.newValue:null,s=this._getCombinedOpacityAndColor(a);r.useMaterialColor&&q((0,vec4f64/* clone */.o8)(s),this._materials[Q.Marker],e),this._patternHidesLine&&(s[3]=0),q(s,this._materials[Q.Line],e),delete t.material}_prepareMarkerPatch(e,t){const r=t.marker,i=this._markerMaterial;if(null==r||"partial"!==r.type||null==r.diff||null!=r.diff.placement||null!=r.diff.style&&"complete"!==r.diff.style.type||null!=r.diff.color&&"complete"!==r.diff.color.type||null==i)return{changed:!1,useMaterialColor:null==this._markerColor};const a=r.diff.color,s=null!=a,o=s?a.newValue:null,n=null==o&&null==this._markerColor;o&&q(this._getCombinedOpacityAndColor(o),i,e);const l=r.diff.style?.newValue;return l&&e.symbolLayerStatePatches.push((()=>i.setParameters({markerPrimitive:lineUtils_r(l)}))),delete t.marker,{changed:s,useMaterialColor:n}}_fastVisualVariableConvertOptions(e=!1){const t=this._getFallbackSize();return new FastSymbolUpdates/* ConvertOptions */.wI({supports:{size:!0,color:!0,rotation:!1,opacity:!0},fallbackColor:e?this._getFallbackMarkerOpacityAndColor():this._getFallbackOpacityAndColor(),fallbackSize:(0,vec3f64/* fromValues */.fA)(t,t,t)})}_getFallbackOpacityAndColor(){const t=this.symbolLayer?.material?.color;return Color/* default */.A.toUnitRGBA(t)??vec4f64/* ZEROS */.uY}_getFallbackOpacity(){return this.symbolLayer?.material?.color?.a??0}_getFallbackMarkerOpacityAndColor(){const t=this.symbolLayer?.marker?.color;return Color/* default */.A.toUnitRGBA(t)??vec4f64/* ZEROS */.uY}_getFallbackMarkerOpacity(){return this.symbolLayer?.marker?.color?.a??0}_getFallbackSize(){const e=this.symbolLayer?.size;return null!=e?(0,screenUtils/* pt2px */.Lz)(e):1}}function Graphics3DLineSymbolLayer_N(e){switch(e.type){case"extent":if(e instanceof Extent/* default */.A)return Polygon/* default */.A.fromExtent(e);break;case"polygon":case"polyline":return e}return null}function q(e,t,r){null!=t&&r.symbolLayerStatePatches.push((()=>t.setParameters({color:e})))}function J(e){return 1===(e.material?.color?.a??1)&&1===(e.marker?.color?.a??1)}var K,Q;!function(e){e[e.DRAPED=0]="DRAPED",e[e.ELEVATED=1]="ELEVATED"}(K||(K={})),function(e){e[e.Line=0]="Line",e[e.Ring=1]="Ring",e[e.LineWireframe=2]="LineWireframe",e[e.RingWireframe=3]="RingWireframe",e[e.Marker=4]="Marker"}(Q||(Q={}));

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(92504);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projectionUtils.js + 2 modules
var projectionUtils = __webpack_require__(68490);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projection/projectVectorToPoint.js
var projectVectorToPoint = __webpack_require__(70397);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/FloatArray.js
var FloatArray = __webpack_require__(50961);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/MeshComponent.js
var MeshComponent = __webpack_require__(21104);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/MeshMaterialMetallicRoughness.js
var MeshMaterialMetallicRoughness = __webpack_require__(93413);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/MeshTextureTransform.js
var MeshTextureTransform = __webpack_require__(94578);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/meshVertexSpaceUtils.js
var meshVertexSpaceUtils = __webpack_require__(1114);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var spatialReferenceUtils = __webpack_require__(87926);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/meshUtils/projection.js
var projection = __webpack_require__(72188);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/meshUtils/projectMeshVertexPositions.js
var projectMeshVertexPositions = __webpack_require__(28507);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/dehydratedPoint.js
var dehydratedPoint = __webpack_require__(29394);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/sources/interfaces.js
var sources_interfaces = __webpack_require__(12155);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/glTF/internal/resourceUtils.js
var resourceUtils = __webpack_require__(46629);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/glTF/internal/TextureTransformUtils.js
var TextureTransformUtils = __webpack_require__(80954);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/graphics/defaultSymbolComplexity.js
var defaultSymbolComplexity = __webpack_require__(1088);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/graphics/featureExpressionInfoUtils.js
var featureExpressionInfoUtils = __webpack_require__(9104);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/meshAutoFastUpdateConstants.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const meshAutoFastUpdateConstants_e={disableDelayMs:2e3};

;// ../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DMeshObject3DGraphicLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Graphics3DMeshObject3DGraphicLayer_p extends Graphics3DObject3DGraphicLayer/* Graphics3DObject3DGraphicLayer */.Y{constructor(){super(...arguments),this.fastTransformUpdatesAllowed=!1,this._originalGeometries=[],this._fastTransformUpdatesEnabled=!1,this._autoDisableFastUpdatesTimeoutId=0}get fastTransformUpdatesEnabled(){return this._fastTransformUpdatesEnabled}destroy(){super.destroy(),this._cancelAutoDisableFastUpdates()}enableFastTransformUpdates(e,a){if(!this.fastTransformUpdatesAllowed||this._fastTransformUpdatesEnabled)return;this._cancelAutoDisableFastUpdates(),this._fastTransformUpdatesEnabled=!0;const{stageObject:s}=this,r=s.geometries.slice();s.removeAllGeometries();const i=(0,mat4/* getTranslation */.sC)(Graphics3DMeshObject3DGraphicLayer_g,s.transformation),o=a.getOrigin(i);for(const t of r){const a=e(t.material),r=t.instantiate({material:a});r.localOrigin=o,s.addGeometry(r)}this._originalGeometries=r}autoDisableFastTransformUpdates(t){this._cancelAutoDisableFastUpdates(),this._autoDisableFastUpdatesTimeoutId=setTimeout((()=>{this._autoDisableFastUpdatesTimeoutId=0,t()}),meshAutoFastUpdateConstants_e.disableDelayMs)}updateAutoDisableFastTransformUpdates(t){this._autoDisableFastUpdatesTimeoutId&&this.autoDisableFastTransformUpdates(t)}_cancelAutoDisableFastUpdates(){clearTimeout(this._autoDisableFastUpdatesTimeoutId),this._autoDisableFastUpdatesTimeoutId=0}disableFastTransformUpdates(t){if(!this._fastTransformUpdatesEnabled)return;this._cancelAutoDisableFastUpdates(),this._fastTransformUpdatesEnabled=!1;const{stageObject:e}=this,a=e.geometries.map((e=>t(e.material)));e.removeAllGeometries();for(let s=0;s<this._originalGeometries.length;s++){const t=this._originalGeometries[s],r=a[s];r.setParameters({modelTransformation:null}),r===t.material?e.addGeometry(t):e.addGeometry(t.instantiate({material:r}))}this._originalGeometries.length=0}updateFastLocalOrigin(e,a,s){if(!this._fastTransformUpdatesEnabled)return;const{stageObject:r}=this;if(0===r.geometries.length)return;const o=r.geometries[0].localOrigin,n=(0,mat4/* getTranslation */.sC)(Graphics3DMeshObject3DGraphicLayer_g,e),m=s.getOrigin(n);if(m===o)return;const l=a?.localMatrix??mat4f64/* IDENTITY */.zK;r.shaderTransformation=null,r.transformation=e,r.geometries.forEach((t=>{t.transformation=l,t.localOrigin=m}))}updateTransform(t,s,r){const{stageObject:o}=this,n=s?.localMatrix??mat4f64/* IDENTITY */.zK;if(!this._fastTransformUpdatesEnabled)return o.shaderTransformation=null,o.transformation=t,o.geometries.forEach((t=>t.transformation=n)),void this._updateEdgeTransform(r);const m=o.transformation,l=o.geometries[0].transformation,f=t,d=n,c=(0,mat4/* multiply */.lw)(Graphics3DMeshObject3DGraphicLayer_u,m,l),h=(0,mat4/* multiply */.lw)(T,f,d),p=(0,mat4/* multiply */.lw)(_,h,(0,mat4/* invert */.B8)(_,l));o.shaderTransformation=p,this._setFastMaterialTransformation({matA:c,matB:h}),this._updateEdgeTransform(r)}alignWithElevation(t,a,r,i){if(!this._fastTransformUpdatesEnabled)return void super.alignWithElevation(t,a,r,i);null!=r&&(0,featureExpressionInfoUtils/* setContextFeature */.gf)(this.elevationContext.featureExpressionInfoContext,r);const o=(e,s)=>(0,elevationAlignmentUtils/* evaluateElevationInfoAtPoint */.sE)(e,t,this.elevationContext,a,s),{stageObject:n}=this;if(!n.geometries[0].material.parameters.modelTransformation)return;const m=n.transformation,c=n.geometries[0].transformation,h=(0,mat4/* multiply */.lw)(Graphics3DMeshObject3DGraphicLayer_u,m,c),p=n.effectiveTransformation,g=(0,mat4/* copy */.C)(Graphics3DMeshObject3DGraphicLayer_b,p);this.alignedSampledElevation=(0,ElevationAligners/* perObjectElevationAligner */.G8)(this,this.elevationContext,t.spatialReference,o,a,g),n.shaderTransformation=g;const _=n.geometries[0].transformation,U=(0,mat4/* multiply */.lw)(T,g,_);this._setFastMaterialTransformation({matA:h,matB:U}),this._updateEdgeTransform(i)}_setFastMaterialTransformation({matA:t,matB:s}){const{stageObject:i}=this;if(0===i.geometries.length)return;const o=i.geometries[0].localOrigin,m=(0,mat4/* fromTranslation */.kN)(F,(0,vec32.g)(Graphics3DMeshObject3DGraphicLayer_g,o.vec3,-1)),l=(0,mat4/* multiply */.lw)(U,m,t),f=(0,mat4/* multiply */.lw)(E,m,s),d=(0,mat4/* invert */.B8)(U,l),c=(0,mat4/* multiply */.lw)(E,f,d);for(const e of i.geometries)e.material.setParameters({modelTransformation:c})}_updateEdgeTransform(t){const{stageObject:e,_stageLayer:a}=this;a.stage.renderer.withEdgeView((a=>{a.fastUpdateObject3DEdgesTransform(e)||this.resetEdgeObject(t)}))}}const Graphics3DMeshObject3DGraphicLayer_g=(0,vec3f64/* create */.vt)(),Graphics3DMeshObject3DGraphicLayer_u=(0,mat4f64/* create */.vt)(),T=(0,mat4f64/* create */.vt)(),Graphics3DMeshObject3DGraphicLayer_b=(0,mat4f64/* create */.vt)(),_=(0,mat4f64/* create */.vt)(),U=(0,mat4f64/* create */.vt)(),E=(0,mat4f64/* create */.vt)(),F=(0,mat4f64/* create */.vt)();

;// ../node_modules/@arcgis/core/views/3d/layers/graphics/MeshFastUpdateProcessor.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class MeshFastUpdateProcessor_t{constructor(){this._fastTransformOriginalMaterials=new Map,this._fastTransformClonedMaterials=new Map,this._graphicReferenceCount=0}enable(t,e,r){t.enableFastTransformUpdates((t=>{if(this._graphicReferenceCount<=1){if(this._fastTransformOriginalMaterials.has(t))return t;const a=e.byMaterial(t);return this._fastTransformOriginalMaterials.set(t,a),e.delete(t),t}const s=new DefaultMaterial/* DefaultMaterial */.$U(t.parameters,r);return this._fastTransformClonedMaterials.set(s,t),s}),r.localOriginFactory)}disable(a,t){const e=new Set,r=new Set;a.disableFastTransformUpdates((a=>{if(!this._fastTransformClonedMaterials.has(a)){const s=a,i=this._fastTransformOriginalMaterials.get(s);return t.has(i.uid)?(e.add(s),t.byUid(i.uid).material):(r.add(s),i.material)}const s=a,i=this._fastTransformClonedMaterials.get(s);return this._fastTransformClonedMaterials.delete(s),i}));for(const s of e)this._fastTransformOriginalMaterials.delete(s);for(const s of r){const a=this._fastTransformOriginalMaterials.get(s);this._fastTransformOriginalMaterials.delete(s),t.set(a.uid,a)}}onAddGraphic(){this._graphicReferenceCount++}onRemoveGraphic(a,t){this._graphicReferenceCount--,this.disable(a,t)}forEachMaterialInfo(a){this._fastTransformOriginalMaterials.forEach(a)}forEachClonedMaterial(a){this._fastTransformClonedMaterials.forEach(a)}destroy(){this._fastTransformClonedMaterials.clear(),this._fastTransformOriginalMaterials.clear()}}class MeshFastUpdateProcessor_e{constructor(){this._byUid=new Map,this._byMaterial=new Map}get materials(){return Array.from(this._byUid.values(),(a=>a.material))}byUid(a){return this._byUid.get(a)}byMaterial(a){return this._byMaterial.get(a)}set(a,t){this._byUid.set(a,t),this._byMaterial.set(t.material,t)}delete(a){const t=this._byMaterial.get(a)?.uid;t&&(this._byUid.delete(t),this._byMaterial.delete(a))}has(a){return this._byUid.has(a)}forEachMaterialInfo(a){this._byUid.forEach(a)}clear(){this._byUid.clear(),this._byMaterial.clear()}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/graphics/SymbolComplexity.js
var SymbolComplexity = __webpack_require__(79789);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/support/symbolColorUtils.js
var symbolColorUtils = __webpack_require__(55623);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/math/vec2.js
var vec2 = __webpack_require__(60704);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/frustum.js
var frustum = __webpack_require__(94982);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/lineSegment.js
var lineSegment = __webpack_require__(22759);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/plane.js
var plane = __webpack_require__(38774);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js
var Util = __webpack_require__(58947);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultBufferWriter.js
var DefaultBufferWriter = __webpack_require__(25146);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultLayouts.js
var DefaultLayouts = __webpack_require__(27776);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/NativeLine.glsl.js
var NativeLine_glsl = __webpack_require__(36987);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/enums.js
var enums = __webpack_require__(41746);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/NativeLineTechnique.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class d extends ShaderTechnique/* ShaderTechnique */.w{constructor(e,r){super(e,r,new ReloadableShaderModule/* ReloadableShaderModule */.$(NativeLine_glsl.N,(()=>__webpack_require__.e(/* import() */ 6423).then(__webpack_require__.bind(__webpack_require__, 76423))))),this.primitiveType=enums/* PrimitiveType */.WR.LINES}initializePipeline(i){const{hasOccludees:r,output:o,transparent:u}=i,d=(e,i=null,o=null)=>(0,renderState/* makePipelineState */.Ey)({blending:i,depthTest:StencilUtils/* depthCompareLess */.m,depthWrite:o,colorWrite:renderState/* defaultColorWrite */.kn,stencilWrite:r?StencilUtils/* stencilWriteMaskOn */.v0:null,stencilTest:r?e?StencilUtils/* stencilToolMaskBaseParams */.a9:StencilUtils/* stencilBaseAllZerosParams */.qh:null});return (0,ShaderOutput/* isColorOrColorEmission */.RN)(o)?(this._occludeePipeline=d(!0,u?renderState/* unpremultipliedAlphaToPremultipliedAlpha */.T8:null,renderState/* defaultDepthWrite */.Uy),d(!1,u?renderState/* unpremultipliedAlphaToPremultipliedAlpha */.T8:null,renderState/* defaultDepthWrite */.Uy)):d(!1)}getPipeline(e){return e?this._occludeePipeline:super.getPipeline()}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration.js + 1 modules
var ShaderTechniqueConfiguration = __webpack_require__(77941);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultTechniqueConfiguration.js
var DefaultTechniqueConfiguration = __webpack_require__(9319);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/NativeLineTechniqueConfiguration.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class NativeLineTechniqueConfiguration_t extends DefaultTechniqueConfiguration/* DefaultTechniqueConfiguration */.E{constructor(){super(...arguments),this.hasVertexColors=!1,this.transparent=!1,this.hasOccludees=!1,this.draped=!1}}(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],NativeLineTechniqueConfiguration_t.prototype,"hasVertexColors",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],NativeLineTechniqueConfiguration_t.prototype,"transparent",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],NativeLineTechniqueConfiguration_t.prototype,"hasOccludees",void 0);

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/NativeLineMaterial.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class NativeLineMaterial_U extends Material/* Material */.im{constructor(e){super(e,NativeLineMaterial_q),this._configuration=new NativeLineTechniqueConfiguration_t,this.produces=new Map([[RenderSlot/* RenderSlot */.N.OPAQUE_MATERIAL,e=>(0,ShaderOutput/* isColorHighlightOrOID */.dX)(e)]])}getConfiguration(e,r){return super.getConfiguration(e,r,this._configuration),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.transparent=this.parameters.color[3]<1||this.parameters.width<1,this._configuration.hasOccludees=r.hasOccludees,this._configuration}get visible(){return this.parameters.color[3]>=AlphaCutoff/* alphaCutoff */.Q}intersect(r,t,u,p,j,S){const y=u.camera;if(!u.options.selectionMode||!r.visible||!y)return;if(!(0,Util/* isTranslationMatrix */.zH)(t))return void Logger/* default */.A.getLogger("esri.views.3d.webgl-engine.materials.NativeLineMaterial").error("intersection assumes a translation-only matrix");const N=r.attributes.get(VertexAttribute/* VertexAttribute */.r.POSITION).data,R=NativeLineMaterial_H;(0,vec2/* copy */.C)(R,u.point);const v=2;(0,vec32.i)(NativeLineMaterial_J[0],R[0]-v,R[1]+v,0),(0,vec32.i)(NativeLineMaterial_J[1],R[0]+v,R[1]+v,0),(0,vec32.i)(NativeLineMaterial_J[2],R[0]+v,R[1]-v,0),(0,vec32.i)(NativeLineMaterial_J[3],R[0]-v,R[1]-v,0);for(let e=0;e<4;e++)if(!y.unprojectFromRenderScreen(NativeLineMaterial_J[e],NativeLineMaterial_K[e]))return;(0,plane/* fromPoints */.Cr)(y.eye,NativeLineMaterial_K[0],NativeLineMaterial_K[1],Y),(0,plane/* fromPoints */.Cr)(y.eye,NativeLineMaterial_K[1],NativeLineMaterial_K[2],$),(0,plane/* fromPoints */.Cr)(y.eye,NativeLineMaterial_K[2],NativeLineMaterial_K[3],ee),(0,plane/* fromPoints */.Cr)(y.eye,NativeLineMaterial_K[3],NativeLineMaterial_K[0],re);let E=Number.MAX_VALUE,_=0;for(let e=0;e<N.length-5;e+=3){if(NativeLineMaterial_B[0]=N[e]+t[12],NativeLineMaterial_B[1]=N[e+1]+t[13],NativeLineMaterial_B[2]=N[e+2]+t[14],NativeLineMaterial_D[0]=N[e+3]+t[12],NativeLineMaterial_D[1]=N[e+4]+t[13],NativeLineMaterial_D[2]=N[e+5]+t[14],(0,plane/* signedDistance */.mN)(Y,NativeLineMaterial_B)<0&&(0,plane/* signedDistance */.mN)(Y,NativeLineMaterial_D)<0||(0,plane/* signedDistance */.mN)($,NativeLineMaterial_B)<0&&(0,plane/* signedDistance */.mN)($,NativeLineMaterial_D)<0||(0,plane/* signedDistance */.mN)(ee,NativeLineMaterial_B)<0&&(0,plane/* signedDistance */.mN)(ee,NativeLineMaterial_D)<0||(0,plane/* signedDistance */.mN)(re,NativeLineMaterial_B)<0&&(0,plane/* signedDistance */.mN)(re,NativeLineMaterial_D)<0)continue;if(y.projectToRenderScreen(NativeLineMaterial_B,G),y.projectToRenderScreen(NativeLineMaterial_D,k),G[2]<0&&k[2]>0){(0,vec32.d)(NativeLineMaterial_W,NativeLineMaterial_B,NativeLineMaterial_D);const e=y.frustum,r=-(0,plane/* signedDistance */.mN)(e[frustum/* PlaneIndex */.FB.NEAR],NativeLineMaterial_B)/(0,vec32.e)(NativeLineMaterial_W,(0,plane/* getNormal */.Qj)(e[frustum/* PlaneIndex */.FB.NEAR]));(0,vec32.g)(NativeLineMaterial_W,NativeLineMaterial_W,r),(0,vec32.f)(NativeLineMaterial_B,NativeLineMaterial_B,NativeLineMaterial_W),y.projectToRenderScreen(NativeLineMaterial_B,G)}else if(G[2]>0&&k[2]<0){(0,vec32.d)(NativeLineMaterial_W,NativeLineMaterial_D,NativeLineMaterial_B);const e=y.frustum,r=-(0,plane/* signedDistance */.mN)(e[frustum/* PlaneIndex */.FB.NEAR],NativeLineMaterial_D)/(0,vec32.e)(NativeLineMaterial_W,(0,plane/* getNormal */.Qj)(e[frustum/* PlaneIndex */.FB.NEAR]));(0,vec32.g)(NativeLineMaterial_W,NativeLineMaterial_W,r),(0,vec32.f)(NativeLineMaterial_D,NativeLineMaterial_D,NativeLineMaterial_W),y.projectToRenderScreen(NativeLineMaterial_D,k)}else if(G[2]<0&&k[2]<0)continue;G[2]=0,k[2]=0;const r=(0,lineSegment/* distance2 */.kb)((0,lineSegment/* fromPoints */.Cr)(G,k,Z),R);r<E&&(E=r,(0,vec32.c)(NativeLineMaterial_F,NativeLineMaterial_B),(0,vec32.c)(NativeLineMaterial_Q,NativeLineMaterial_D),_=e/3)}const w=u.rayBegin,C=u.rayEnd;if(E<v*v){let e=Number.MAX_VALUE;if((0,lineSegment/* closestLineSegmentPoint */.ld)((0,lineSegment/* fromPoints */.Cr)(NativeLineMaterial_F,NativeLineMaterial_Q,Z),(0,lineSegment/* fromPoints */.Cr)(w,C,z),X)){(0,vec32.d)(X,X,w);const r=(0,vec32.l)(X);(0,vec32.g)(X,X,1/r),e=r/(0,vec32.j)(w,C)}S(e,X,_)}}intersectDraped(e,t,o,s,i){if(!t.options.selectionMode)return;const a=e.attributes.get(VertexAttribute/* VertexAttribute */.r.POSITION).data,n=e.attributes.get(VertexAttribute/* VertexAttribute */.r.SIZE),c=n?n.data[0]:0,m=o[0],l=o[1],f=((c+1)/2+4)*e.screenToWorldRatio;let u=Number.MAX_VALUE,p=0;for(let h=0;h<a.length-5;h+=3){const e=a[h],t=a[h+1],o=m-e,s=l-t,i=a[h+3]-e,n=a[h+4]-t,c=(0,mathUtils/* clamp */.qE)((i*o+n*s)/(i*i+n*n),0,1),f=i*c-o,g=n*c-s,d=f*f+g*g;d<u&&(u=d,p=h/3)}u<f*f&&s(i.distance,i.normal,p)}createGLMaterial(e){return new NativeLineMaterial_I(e)}createBufferWriter(){const e=this.parameters.hasVertexColors?DefaultLayouts/* PositionColorLayout */.dB:DefaultLayouts/* PositionLayout */.Ci;return new DefaultBufferWriter/* DefaultBufferWriter */.Z(e)}}class NativeLineMaterial_I extends GLMaterial/* default */.A{beginSlot(e){return this.getTechnique(d,e)}}class NativeLineMaterial_q extends Material/* MaterialParameters */.qA{constructor(){super(...arguments),this.color=vec4f64/* ONES */.Un,this.hasVertexColors=!1,this.hasSlicePlane=!1,this.width=1}}const NativeLineMaterial_B=(0,vec3f64/* create */.vt)(),NativeLineMaterial_D=(0,vec3f64/* create */.vt)(),NativeLineMaterial_W=(0,vec3f64/* create */.vt)(),X=(0,vec3f64/* create */.vt)(),G=(0,screenUtils/* createRenderScreenPointArray3 */.r_)(),k=(0,screenUtils/* createRenderScreenPointArray3 */.r_)(),NativeLineMaterial_F=(0,vec3f64/* create */.vt)(),NativeLineMaterial_Q=(0,vec3f64/* create */.vt)(),Z=(0,lineSegment/* create */.vt)(),z=(0,lineSegment/* create */.vt)(),NativeLineMaterial_H=(0,vec3f64/* create */.vt)(),NativeLineMaterial_J=[(0,screenUtils/* createRenderScreenPointArray3 */.r_)(),(0,screenUtils/* createRenderScreenPointArray3 */.r_)(),(0,screenUtils/* createRenderScreenPointArray3 */.r_)(),(0,screenUtils/* createRenderScreenPointArray3 */.r_)()],NativeLineMaterial_K=[(0,vec3f64/* create */.vt)(),(0,vec3f64/* create */.vt)(),(0,vec3f64/* create */.vt)(),(0,vec3f64/* create */.vt)()],Y=(0,plane/* create */.vt)(),$=(0,plane/* create */.vt)(),ee=(0,plane/* create */.vt)(),re=(0,plane/* create */.vt)();

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/pbrUtils.js
var pbrUtils = __webpack_require__(12221);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DMeshFillSymbolLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const Fe=["mesh"];class Ve extends Graphics3DSymbolLayer/* Graphics3DSymbolLayer */.U{constructor(e,t,r,o){super(e,t,r,o,rt(t)),this._materialInfoCache=new MeshFastUpdateProcessor_e,this._fastUpdateProcessor=new MeshFastUpdateProcessor_t,this._textures=new Map,this.ensureDrapedStatus(!1)}async doLoad(){debugFlags/* debugFlags */.b.DRAW_MESH_GEOMETRY_NORMALS&&(this._debugVertexNormalMaterial=new NativeLineMaterial_U({color:[1,0,1,1]}),this._debugTangentNormalMaterial=new NativeLineMaterial_U({color:[1,.5,0,1]}),this._debugFaceNormalMaterial=new NativeLineMaterial_U({color:[0,1,1,1]})),this.updateComplexity()}destroy(){super.destroy(),this._textures.forEach((e=>e.unload())),this._context.stage.removeTextures(Array.from(this._textures.values())),this._materialInfoCache.clear(),this._textures.clear(),this._fastUpdateProcessor.destroy()}get materials(){return this._materialInfoCache.materials}createGraphics3DGraphic(e){const t=e.graphic;if(!this._validateGeometry(t.geometry,Fe,"fill on mesh-3d"))return null;const r=this.setGraphicElevationContext(t),o=e.renderingInfo;return this._createAs3DShape(t,o,r,t.uid)}onRemoveGraphic(e){this._fastUpdateProcessor.onRemoveGraphic(e,this._materialInfoCache)}layerOpacityChanged(e,t){const r=this._getLayerOpacity();this._updateMaterialParameters((e=>{e.material.setParameters({layerOpacity:r});const t=e.material.parameters;this._setMaterialTextureAlphaMode(t,e)})),e?.forEach((e=>t(e)?.layerOpacityChanged(r,this._context.isAsync)))}layerElevationInfoChanged(e,t){return this.updateGraphics3DGraphicElevationInfo(e,t,elevationAlignmentUtils/* needsElevationUpdates3D */.Kf)}slicePlaneEnabledChanged(e,t){return this._updateMaterialParameters((({material:e})=>{e.setParameters({hasSlicePlane:this._context.slicePlaneEnabled})})),e?.forEach((e=>t(e)?.slicePlaneEnabledChanged(this._context.slicePlaneEnabled,this._context.isAsync))),!0}physicalBasedRenderingChanged(){const e=this._usePBR();return this._updateMaterialParameters((({material:t})=>t.setParameters({usePBR:e}))),!0}updateTransform(e,t,r,o){if(!e.fastTransformUpdatesAllowed)return!1;const a=e.fastTransformUpdatesEnabled;switch(o){case sources_interfaces/* MeshTransformUpdateAction */.$.EnableFastUpdates:if(a)return!0;break;case sources_interfaces/* MeshTransformUpdateAction */.$.DisableFastUpdates:if(!a)return!0;break;default:if(!a)return!!this.updateTransform(e,t,r,sources_interfaces/* MeshTransformUpdateAction */.$.EnableFastUpdates)&&(e.autoDisableFastTransformUpdates((()=>this.updateTransform(e,t,r,sources_interfaces/* MeshTransformUpdateAction */.$.DisableFastUpdates))),!0)}const s=this._context.renderCoordsHelper.spatialReference,n=Graphics3DMeshFillSymbolLayer_ut,{origin:i,transform:l}=r;if(!(0,computeTranslationToOriginAndRotation/* computeTranslationToOriginAndRotation */.l)(t,(0,vec32.i)(Graphics3DMeshFillSymbolLayer_st,i.x,i.y,i.z??0),n,s))return!1;switch(o){case sources_interfaces/* MeshTransformUpdateAction */.$.EnableFastUpdates:this._fastUpdateProcessor.enable(e,this._materialInfoCache,this._context);break;case sources_interfaces/* MeshTransformUpdateAction */.$.DisableFastUpdates:this._fastUpdateProcessor.disable(e,this._materialInfoCache);break;case sources_interfaces/* MeshTransformUpdateAction */.$.UpdateFastLocalOrigin:e.updateFastLocalOrigin(n,l,this._context.localOriginFactory)}const{elevationContext:c}=e;c.centerPointInElevationSR=this._getCenterPointInElevationSR(n);const{elevationProvider:u,renderCoordsHelper:m}=this._context,f=(e,t)=>(0,elevationAlignmentUtils/* evaluateElevationInfoAtPoint */.sE)(e,u,c,m,t);return e.alignedSampledElevation=(0,ElevationAligners/* perObjectElevationAligner */.G8)(e,c,u.spatialReference,f,m,n),e.updateTransform(n,l,this._context.isAsync),e.updateAutoDisableFastTransformUpdates((()=>this.updateTransform(e,t,r,sources_interfaces/* MeshTransformUpdateAction */.$.DisableFastUpdates))),!0}computeComplexity(){if(!this._textures||0===this._textures.size)return super.computeComplexity();let e=0;for(const o of this._textures.values())e+=o.usedMemory;const t={...(0,defaultSymbolComplexity/* defaultSymbolLayerMemoryComplexity */.GI)(this.symbol,this.symbolLayer),resourceBytes:e},r=(0,edgeUtils/* hasEdges */.RF)(this.symbolLayer)?2:0;return new SymbolComplexity/* SymbolComplexity */.rz({drawCallsPerFeature:r,memory:t})}_requiresSymbolVertexColors(){return this._drivenProperties.color||this._drivenProperties.opacity}_materialPropertiesDefault(e,t){const r=this._requiresSymbolVertexColors(),o=!!e.vertexAttributes.color,a=!!e.vertexAttributes.tangent;return{hasSymbolVertexColors:r,hasVertexColors:o,hasVertexTangents:a,uid:`vc:${o},vt:${a},vct${t},svc:${r}`}}_materialProperties(e,t,r){const o=this._materialPropertiesDefault(e,r);if(!t.material)return o;const{color:a,colorTexture:s,colorTextureTransform:n,normalTexture:i,normalTextureTransform:l,doubleSided:c,alphaCutoff:u,alphaMode:m}=t.material,f=Xe(a),p=Xe(s),h=et(n),d=Xe(i),g=et(l);if(o.color=a,o.colorTexture=s,o.normalTexture=i,o.uid=`${o.uid},cmuid:${f},ctmuid:${p},cttuid:${h},ntmuid:${d},nttuid:${g},ds:${c},ac:${u},am:${m}`,t.material instanceof MeshMaterialMetallicRoughness/* default */.A){const{metallic:e,roughness:r,metallicRoughnessTexture:a,metallicRoughnessTextureTransform:s,emissiveColor:i,emissiveTexture:c,emissiveTextureTransform:u,occlusionTexture:m,occlusionTextureTransform:f}=t.material,p=Xe(a),h=et(s),d=Xe(i),g=Xe(c),x=et(u),_=Xe(m),y=et(f);o.metallic=e,o.roughness=r,o.metallicRoughnessTexture=a,o.emissiveColor=i,o.emissiveTexture=c,o.occlusionTexture=m,o.colorTextureTransform=We(n),o.normalTextureTransform=We(l),o.emissiveTextureTransform=We(u),o.occlusionTextureTransform=We(f),o.metallicRoughnessTextureTransform=We(s),o.uid=`${o.uid},mrm:${e},mrr:${r},mrt:${p},mrtt:${h},emuid:${d},etmuid:${g},ett:${x},otmuid:${_},ott:${y}`}return o}_getInternalTexture(e,t=!1,a=basicInterfaces/* AlphaDiscardMode */.sf.Opaque){const s=Qe(e);if(!s)return null;const n=`${e.contentHash}/${a}`;let i=this._textures.get(n);if(i){const e=this._context.stage.renderView.textures;let t=null;const a=e.acquire(i.id);return null==a||(0,promiseUtils/* isPromiseLike */.$X)(a)||(i.events.on("unloaded",(()=>t=(0,maybe/* releaseMaybe */.Gz)(t))),t=a),i}let l=null;const c=this._context.stage.renderView.renderingContext.parameters.maxMaxAnisotropy,u={wrap:Ye(e.wrap),noUnpackFlip:!0,maxAnisotropy:c,mipmap:c>1};return (0,resourceUtils/* isEncodedMeshTexture */.x3)(s)?(l=s.data,u.preMultiplyAlpha=!1,u.encoding=s.encoding):(l=s,u.preMultiplyAlpha=a!==basicInterfaces/* AlphaDiscardMode */.sf.Opaque,u.compressionOptions=t?{compressionTracker:this._context.compressionTracker,compressionCallback:()=>this.updateComplexity()}:void 0),i=new Texture/* Texture */.g(l,u),this._textures.set(n,i),i.events.on("loaded",(()=>this.updateComplexity())),i.load(this._context.stage.renderView.renderingContext),this._context.stage.addTexture(i),i.events.on("unloaded",(()=>{this._textures.delete(n)})),i}_setInternalMaterialTextureParameters(t,r){if(null!=t.colorTexture){const e=r.textureAlphaMode!==basicInterfaces/* AlphaDiscardMode */.sf.Opaque,o=this._getInternalTexture(t.colorTexture,e,r.textureAlphaMode);o?(r.textureId=o.id,r.textureAlphaPremultiplied=!!o.parameters.preMultiplyAlpha):r.textureId=void 0}t.normalTexture&&(r.normalTextureId=this._getInternalTexture(t.normalTexture)?.id),t.emissiveColor&&(r.emissiveBaseColor=Color/* default */.A.toUnitRGB(t.emissiveColor)),t.emissiveTexture&&(r.emissiveTextureId=this._getInternalTexture(t.emissiveTexture)?.id),t.occlusionTexture&&(r.occlusionTextureId=this._getInternalTexture(t.occlusionTexture,!0)?.id),t.metallicRoughnessTexture&&(r.metallicRoughnessTextureId=this._getInternalTexture(t.metallicRoughnessTexture,!0)?.id)}_setInternalMaterialParameters(e,t,r){null!=e.color&&Ke(e.color,t,r),this._setInternalMaterialTextureParameters(e,t),t.colorTextureTransformMatrix=(0,TextureTransformUtils/* getTransformMatrix */.G)(e.colorTextureTransform),t.normalTextureTransformMatrix=(0,TextureTransformUtils/* getTransformMatrix */.G)(e.normalTextureTransform);const o=null!=e.normalTextureTransform?.scale?e.normalTextureTransform?.scale:vec2f64/* ONES */.Un;t.scale=[o[0],o[1]],t.occlusionTextureTransformMatrix=(0,TextureTransformUtils/* getTransformMatrix */.G)(e.occlusionTextureTransform),t.emissiveTextureTransformMatrix=(0,TextureTransformUtils/* getTransformMatrix */.G)(e.emissiveTextureTransform),t.metallicRoughnessTextureTransformMatrix=(0,TextureTransformUtils/* getTransformMatrix */.G)(e.metallicRoughnessTextureTransform)}_setExternalMaterialParameters(t,r=this.symbolLayer?.material?.color){const o=this._drivenProperties.color,a=this._drivenProperties.opacity;let s=this.symbolLayer.material?.colorMixMode??null;if(o)t.externalColor=vec4f64/* ONES */.Un;else{const o=r??null;if(o){const r=Color/* default */.A.toUnitRGBA(o);a&&(r[3]=1),t.externalColor=r}else s=null,t.externalColor=vec4f64/* ONES */.Un}s&&(t.colorMixMode=s),t.castShadows=!!this.symbolLayer.castShadows,t.emissiveStrength=this.symbolLayer?.material?.emissive?.strength??1,t.emissiveSource=(0,materialUtils/* getEmissiveMode */.rs)(this.symbolLayer?.material?.emissive?.source??"emissive")}_getOrCreateMaterial(t,r){const o=r.material?.color,a=r.material?.colorTexture,s=r.material?.alphaMode,n="blend"===s,i=!("opaque"===s)&&(Je(t)||null!=o&&o.a<1||a?.transparent||n),l=this._materialProperties(t,r,i),c=this._materialInfoCache.byUid(l.uid);if(c)return this._setInternalMaterialTextureParameters(l,c.material.parameters),c.material;const u={uid:l.uid,material:null,isComponentTransparent:i,alphaMode:r.material?r.material.alphaMode:"opaque"},m=(0,pbrUtils/* useSchematicPBR */.Jr)({normalTexture:l.normalTexture,metallicRoughnessTexture:l.metallicRoughnessTexture,metallicFactor:l.metallic,roughnessFactor:l.roughness,emissiveTexture:l.emissiveTexture,emissiveFactor:Color/* default */.A.toUnitRGB(l.emissiveColor),occlusionTexture:l.occlusionTexture}),f={usePBR:this._usePBR(),isSchematic:m,hasVertexColors:l.hasVertexColors,hasSymbolColors:l.hasSymbolVertexColors,hasVertexTangents:l.hasVertexTangents,ambient:vec3f64/* ZEROS */.uY,diffuse:vec3f64/* ONES */.Un,opacity:1,doubleSided:!0,doubleSidedType:"winding-order",cullFace:basicInterfaces/* CullFaceOptions */.s2.None,layerOpacity:this._getLayerOpacity(),hasSlicePlane:this._context.slicePlaneEnabled,drivenOpacity:this.needsDrivenTransparentPass||u.isComponentTransparent};f.mrrFactors=m?pbrUtils/* schematicMRRFactors */.Bt:[l.metallic,l.roughness,pbrUtils/* advancedMRRFactors */.mb[2]],r.material&&(f.doubleSided=r.material.doubleSided,f.cullFace=r.material.doubleSided?basicInterfaces/* CullFaceOptions */.s2.None:basicInterfaces/* CullFaceOptions */.s2.Back,f.textureAlphaCutoff=r.material.alphaCutoff),this._setExternalMaterialParameters(f),this._setMaterialTextureAlphaMode(f,u),this._setInternalMaterialParameters(l,f,u);const p=new DefaultMaterial/* DefaultMaterial */.$U(f,this._context);return u.material=p,this._materialInfoCache.set(l.uid,u),p}prepareSymbolLayerPatch(e){if("partial"!==e.diff.type)return;const t=e.diff.diff;this._preparePatchColor(e,t)}_preparePatchColor(e,t){if(!t.material||"partial"!==t.material.type)return;const r=t.material.diff;if(!r.color||"complete"!==r.color.type||null==r.color.newValue||null==r.color.oldValue)return;const o=r.color.newValue;delete r.color,e.symbolLayerStatePatches.push((()=>{this._updateMaterialParameters((e=>{const t=e.material.parameters;this._setExternalMaterialParameters(t,o),this._setMaterialTextureAlphaMode(t,e),e.material.setParameters({externalColor:t.externalColor})}))}))}_usePBR(){return this._context.physicalBasedRenderingEnabled}_setMaterialTextureAlphaMode(e,t){if("auto"===t.alphaMode){const r=this.needsDrivenTransparentPass||t.isComponentTransparent||(e.layerOpacity??1)<1||(e.opacity??1)<1||(e.externalColor?.[3]??1)<1;e.textureAlphaMode=r?basicInterfaces/* AlphaDiscardMode */.sf.MaskBlend:basicInterfaces/* AlphaDiscardMode */.sf.Opaque}else e.textureAlphaMode="opaque"===t.alphaMode?basicInterfaces/* AlphaDiscardMode */.sf.Opaque:"mask"===t.alphaMode?basicInterfaces/* AlphaDiscardMode */.sf.Mask:basicInterfaces/* AlphaDiscardMode */.sf.Blend}_createFaceDebugNormals(e,t){const r=t.length,o=e.spatialReference.isGeographic?20015077/180:1,s=.1*Math.max(e.extent.width*o,e.extent.height*o,e.extent.zmax-e.extent.zmin),i=[],l=[],c=t[0].transformation,u=(0,mat3/* normalFromMat4 */.Ge)((0,mat3f64/* create */.vt)(),c);for(let a=0;a<r;a++){const e=t[a].attributes.get(VertexAttribute/* VertexAttribute */.r.POSITION);if(!e)continue;const r=e.data,o=e.indices;for(let t=0;t<o.length;t+=3)ze(r,o,t,Graphics3DMeshFillSymbolLayer_lt),qe(r,o,t,Graphics3DMeshFillSymbolLayer_st,Graphics3DMeshFillSymbolLayer_nt,Graphics3DMeshFillSymbolLayer_it),(0,vec32.f)(Graphics3DMeshFillSymbolLayer_st,Graphics3DMeshFillSymbolLayer_st,Graphics3DMeshFillSymbolLayer_nt),(0,vec32.f)(Graphics3DMeshFillSymbolLayer_st,Graphics3DMeshFillSymbolLayer_st,Graphics3DMeshFillSymbolLayer_it),(0,vec32.g)(Graphics3DMeshFillSymbolLayer_st,Graphics3DMeshFillSymbolLayer_st,1/3),(0,vec32.t)(Graphics3DMeshFillSymbolLayer_st,Graphics3DMeshFillSymbolLayer_st,c),i.push(...Graphics3DMeshFillSymbolLayer_st),(0,vec32.o)(Graphics3DMeshFillSymbolLayer_lt,Graphics3DMeshFillSymbolLayer_lt,u),(0,vec32.n)(Graphics3DMeshFillSymbolLayer_lt,Graphics3DMeshFillSymbolLayer_lt),(0,vec32.b)(Graphics3DMeshFillSymbolLayer_st,Graphics3DMeshFillSymbolLayer_st,Graphics3DMeshFillSymbolLayer_lt,s),i.push(...Graphics3DMeshFillSymbolLayer_st),l.push(l.length),l.push(l.length)}return i.length?new Geometry/* Geometry */.V(this._debugFaceNormalMaterial,[[VertexAttribute/* VertexAttribute */.r.POSITION,new Attribute/* Attribute */.n(i,l,3,!0)]],null,IntersectableGeometry/* GeometryType */.d.Line):null}_createPerVertexDebugVectors(e,t,r,o,i){const l=t.length,c=e.spatialReference.isGeographic?20015077/180:1,u=.1*i*Math.max(e.extent.width*c,e.extent.height*c,e.extent.zmax-e.extent.zmin),m=[],f=[],p=t[0].transformation,h=(0,mat3/* normalFromMat4 */.Ge)((0,mat3f64/* create */.vt)(),p);r===VertexAttribute/* VertexAttribute */.r.TANGENT&&(0,mat3/* fromMat4 */.z0)(h,p);for(let a=0;a<l;a++){const e=t[a],o=e.attributes.get(VertexAttribute/* VertexAttribute */.r.POSITION),s=e.attributes.get(r);if(!o||!s)continue;const n=o.data,i=o.indices,l=s.data,c=s.indices;for(let t=0;t<i.length;t++){const e=3*i[t],r=c[t]*s.stride;(0,vec32.i)(Graphics3DMeshFillSymbolLayer_st,n[e+0],n[e+1],n[e+2]),(0,vec32.t)(Graphics3DMeshFillSymbolLayer_st,Graphics3DMeshFillSymbolLayer_st,p),m.push(...Graphics3DMeshFillSymbolLayer_st),(0,vec32.i)(Graphics3DMeshFillSymbolLayer_nt,l[r+0],l[r+1],l[r+2]),(0,vec32.o)(Graphics3DMeshFillSymbolLayer_nt,Graphics3DMeshFillSymbolLayer_nt,h),(0,vec32.n)(Graphics3DMeshFillSymbolLayer_nt,Graphics3DMeshFillSymbolLayer_nt),(0,vec32.b)(Graphics3DMeshFillSymbolLayer_st,Graphics3DMeshFillSymbolLayer_st,Graphics3DMeshFillSymbolLayer_nt,u),m.push(...Graphics3DMeshFillSymbolLayer_st),f.push(f.length),f.push(f.length)}}return m.length?new Geometry/* Geometry */.V(o,[[VertexAttribute/* VertexAttribute */.r.POSITION,new Attribute/* Attribute */.n(m,f,3,!0)]],null,IntersectableGeometry/* GeometryType */.d.Line):null}_createAs3DShape(e,t,r,o){const a=e.geometry;if("mesh"!==a.type)return null;const s=this._createGeometryInfo(a,t,o);if(null==s)return null;const{geometries:n,objectTransformation:i}=s;if(debugFlags/* debugFlags */.b.DRAW_MESH_GEOMETRY_NORMALS){const e=this._createPerVertexDebugVectors(a,n,VertexAttribute/* VertexAttribute */.r.NORMAL,this._debugVertexNormalMaterial,1),t=this._createPerVertexDebugVectors(a,n,VertexAttribute/* VertexAttribute */.r.TANGENT,this._debugTangentNormalMaterial,.5),r=this._createFaceDebugNormals(a,n);e&&n.push(e),t&&n.push(t),r&&n.push(r)}const l=this._context.layerViewUid,c=new Object3D/* Object3D */.B({geometries:n,layerViewUid:l,graphicUid:o,isElevationSource:!0});c.transformation=i;const u=(0,edgeUtils/* createMaterial */.Cc)(this.symbolLayer,{opacity:this._getLayerOpacity()}),m=u?new Graphics3DObject3DGraphicLayer/* Object3DEdgeState */.H(n[0].material,u,this._context.slicePlaneEnabled):null,f=new Graphics3DMeshObject3DGraphicLayer_p(this,c,null,ElevationAligners/* perObjectElevationAligner */.G8,r,m);this._fastUpdateProcessor.onAddGraphic(),f.needsElevationUpdates=(0,elevationAlignmentUtils/* needsElevationUpdates3D */.Kf)(r.mode),f.useObjectOriginAsAttachmentOrigin=!0,f.fastTransformUpdatesAllowed=this._fastTransformUpdatesAllowed(a),r.centerPointInElevationSR=this._getCenterPointInElevationSR(c.transformation);const{elevationProvider:p,renderCoordsHelper:h}=this._context,d=(e,t)=>(0,elevationAlignmentUtils/* evaluateElevationInfoAtPoint */.sE)(e,p,r,h,t);return f.alignedSampledElevation=(0,ElevationAligners/* perObjectElevationAligner */.G8)(f,r,p.spatialReference,d,h),f}_fastTransformUpdatesAllowed(e){const{vertexSpace:t,spatialReference:r}=e;if(!(0,meshVertexSpaceUtils/* isRelativeVertexSpace */.Hq)(t))return!1;const{type:o}=t,{view:a}=this._context.graphicsCoreOwner,{viewingMode:s}=a.state,n=a.spatialReference;return s===ViewingMode/* ViewingMode */.RT.Global&&"local"===o||s===ViewingMode/* ViewingMode */.RT.Local&&(0,spatialReferenceUtils/* equals */.aI)(n,r)&&"georeferenced"===o&&!r.isGeographic}_getCenterPointInElevationSR(e){const t=(0,dehydratedPoint/* makeDehydratedPoint */.T)(0,0,0,this._context.elevationProvider.spatialReference??null);return (0,projectVectorToPoint/* projectVectorToPoint */.E)([e[12],e[13],e[14]],this._context.renderCoordsHelper.spatialReference,t),t}_passthroughReprojectionInfo(e){return e.reprojection===Graphics3DMeshFillSymbolLayer_pt.NONE&&!!e.objectTransformation}_createPositionBuffer(e,t){const r=e.vertexAttributes.position;let o,a=r;if(t.reprojection===Graphics3DMeshFillSymbolLayer_pt.NONE)return{position:a,georeferencedPositionBuffer:o};const s=t.reprojection===Graphics3DMeshFillSymbolLayer_pt.RENDER?t.transformBeforeProject:null;s&&(a=(0,vec3.t)(new Float64Array(a.length),a,s));const{normal:n,tangent:i}=e.vertexAttributes;this._passthroughReprojectionInfo(t)||!n&&!i||(o=a);const l=a===r||a===o?new Float64Array(a.length):a;return (0,projectBuffer.projectBuffer)(a,e.spatialReference,0,l,this._context.renderCoordsHelper.spatialReference,0),{position:l,georeferencedPositionBuffer:o}}_createNormalBuffer(e,t,r,o){const a=e.vertexAttributes.normal;if(null==a)return null;let s=a;const n=o.reprojection===Graphics3DMeshFillSymbolLayer_pt.RENDER?o.transformBeforeProject:null;n&&(s=(0,projection/* transformNormal */.qs)(s,new Float32Array(s.length),n));const i=this._context.graphicsCoreOwner.view.viewingMode;if(o.reprojection===Graphics3DMeshFillSymbolLayer_pt.NONE)return s;if("local"===i){if(!(0,spatialReferenceUtils/* isPlateCarree */.r1)(this._context.renderCoordsHelper.spatialReference))return s;if(null==r)return null;if(e.spatialReference.isGeographic){const e=s===a?new Float32Array(s.length):s;return (0,projection/* transformVectorENUPlateCarree */.gZ)(s,projection/* VectorType */.OD.NORMAL,r,e)}if(e.spatialReference.isWebMercator){const e=s===a?new Float32Array(s.length):s;return (0,projection/* transformVectorWMPlateCarree */.GN)(s,projection/* VectorType */.OD.NORMAL,r,e)}return s}if(null==r)return null;const l=s===a?new Float32Array(s.length):s,c=this._context.renderCoordsHelper.spatialReference;return (0,projection/* projectNormalToPCPF */.X4)(s,r,e.spatialReference,t,c,l)}_createTangentBuffer(e,t,r,o){const a=e.vertexAttributes.tangent;if(null==a)return null;let s=a;const n=o.reprojection===Graphics3DMeshFillSymbolLayer_pt.RENDER?o.transformBeforeProject:null;n&&(s=(0,projection/* transformTangent */.KM)(s,new Float32Array(s.length),n));const i=this._context.graphicsCoreOwner.view.viewingMode;if(o.reprojection===Graphics3DMeshFillSymbolLayer_pt.NONE)return s;if("local"===i){if(!(0,spatialReferenceUtils/* isPlateCarree */.r1)(this._context.renderCoordsHelper.spatialReference))return s;if(null==r)return null;if(e.spatialReference.isGeographic){const e=s===a?new Float32Array(s.length):s;return (0,projection/* transformVectorENUPlateCarree */.gZ)(s,projection/* VectorType */.OD.TANGENT,r,e)}if(e.spatialReference.isWebMercator){const e=s===a?new Float32Array(s.length):s;return (0,projection/* transformVectorWMPlateCarree */.GN)(s,projection/* VectorType */.OD.TANGENT,r,e)}return s}if(null==r)return null;const l=s===a?new Float32Array(s.length):s,c=this._context.renderCoordsHelper.spatialReference;return (0,projection/* projectTangentToPCPF */.xA)(s,r,e.spatialReference,t,c,l)}_createSymbolColorBuffer(e){if(this._requiresSymbolVertexColors()){const t=this._getVertexOpacityAndColor(e,this._getFallbackOpacityAndColor()),r=(0,symbolColorUtils/* parseColorMixMode */.Eb)(this.symbolLayer?.material?.colorMixMode),o=new Uint8Array(4);return (0,symbolColorUtils/* encodeSymbolColor */._j)(t,r,o),o}return null}_createBuffers(e,t){const r=e.vertexAttributes&&e.vertexAttributes.position;if(!r)return this.logger.warn("Mesh geometry must contain position vertex attributes"),null;const o=e.vertexAttributes.normal,a=e.vertexAttributes.uv,s=e.vertexAttributes.tangent;if(o&&o.length!==r.length)return this.logger.warn("Mesh normal vertex buffer must contain the same number of elements as the position buffer"),null;if(s&&s.length/4!=r.length/3)return this.logger.warn("Mesh tangent vertex buffer must contain the same number of elements as the position buffer"),null;if(a&&a.length/2!=r.length/3)return this.logger.warn("Mesh uv vertex buffer must contain the same number of elements as the position buffer"),null;const n=this._computeReprojectionInfo(e),{position:i,georeferencedPositionBuffer:l}=this._createPositionBuffer(e,n),c=tt(e),u=this._createSymbolColorBuffer(t),f=this._createNormalBuffer(e,i,l,n),p=this._createTangentBuffer(e,i,l,n),h=a,{transformation:d,position:g,normal:x,tangent:_}=this._passthroughReprojectionInfo(n)?{transformation:n.objectTransformation,position:i,normal:f,tangent:p}:this._transformOriginLocal(e,i,f,p);return{positionBuffer:g,normalBuffer:x,tangentBuffer:_,uvBuffer:h,colorBuffer:c,symbolColorBuffer:u,objectTransformation:d,geometryTransformation:n.reprojection===Graphics3DMeshFillSymbolLayer_pt.NONE&&n.geometryTransformation?n.geometryTransformation:(0,mat4f64/* create */.vt)()}}_computeReprojectionInfo(e){const{vertexSpace:t}=e,r="georeferenced"===t.type?(0,spatialReferenceUtils/* equals */.aI)(this._context.renderCoordsHelper.spatialReference,e.spatialReference)?Graphics3DMeshFillSymbolLayer_pt.NONE:Graphics3DMeshFillSymbolLayer_pt.RENDER:Graphics3DMeshFillSymbolLayer_pt.NONE;if((0,meshVertexSpaceUtils/* isAbsoluteVertexSpace */.E9)(t))return{reprojection:r};const o=t.origin,a=(0,mat4f64/* create */.vt)(),s=e.transform?.localMatrix??mat4f64/* IDENTITY */.zK;if(r===Graphics3DMeshFillSymbolLayer_pt.NONE){(0,computeTranslationToOriginAndRotation/* computeTranslationToOriginAndRotation */.l)(e.spatialReference,o,a,this._context.renderCoordsHelper.spatialReference);return{reprojection:r,objectTransformation:a,geometryTransformation:(0,mat4f64/* clone */.o8)(s)}}const n=(0,mat4/* fromTranslation */.kN)((0,mat4f64/* create */.vt)(),o);return (0,mat4/* multiply */.lw)(n,n,s),{reprojection:r,transformBeforeProject:n}}_transformOriginLocal(e,t,r,o){const a=this._context.renderCoordsHelper.spatialReference,s=e.origin;Graphics3DMeshFillSymbolLayer_at[0]=s.x,Graphics3DMeshFillSymbolLayer_at[1]=s.y,Graphics3DMeshFillSymbolLayer_at[2]=s.z??0;const n=(0,mat4f64/* create */.vt)();(0,computeTranslationToOriginAndRotation/* computeTranslationToOriginAndRotation */.l)(e.spatialReference,Graphics3DMeshFillSymbolLayer_at,n,a),(0,mat4/* invert */.B8)(Graphics3DMeshFillSymbolLayer_ct,n);const{position:i,normal:l,tangent:u}=e.vertexAttributes,f=t===i?new Float64Array(t.length):t;(0,vec3.t)(f,t,Graphics3DMeshFillSymbolLayer_ct);const p=r?r===l?new Float32Array(r.length):r:null,h=o?o===u?new Float32Array(o.length):o:null;return r&&p&&(0,projection/* transformNormal */.qs)(r,p,Graphics3DMeshFillSymbolLayer_ct),o&&h&&(0,projection/* transformTangent */.KM)(o,h,Graphics3DMeshFillSymbolLayer_ct),{transformation:n,position:f,normal:p,tangent:h}}_validateFaces(e,t){const r=e.vertexAttributes.position.length/3,o=t.faces;if(o){let e=-1;for(let t=0;t<o.length;t++){const r=o[t];r>e&&(e=r)}if(r<=e)return this.logger.warn(`Vertex index ${e} is out of bounds of the mesh position buffer`),!1}else if(r%3!=0)return this.logger.warn("Mesh position buffer length must be a multiple of 9 if no component faces are defined (3 values per vertex * 3 vertices per triangle)"),!1;return!0}_isOutsideClippingArea(e){if(!this._context.clippingExtent)return!1;const t=e.vertexAttributes?.position;if(!t)return!1;const r=this._context.elevationProvider.spatialReference,o=(0,projectMeshVertexPositions.projectMeshVertexPositions)(e,r??e.spatialReference);return!!o&&((0,aaBoundingBox/* fromBuffer */.vY)(o,Graphics3DMeshFillSymbolLayer_mt),!(0,aaBoundingBox/* intersectsClippingArea */.KG)(Graphics3DMeshFillSymbolLayer_mt,this._context.clippingExtent))}_createGeometryInfo(e,t,r){if(!(0,projectionUtils.canProjectWithoutEngine)(e.spatialReference,this._context.renderCoordsHelper.spatialReference))return this.logger.warn("Geometry spatial reference is not compatible with the view"),null;if(!this._validateVertexSpace(e))return null;if(this._isOutsideClippingArea(e))return null;const o=this._createBuffers(e,t);if(null==o)return null;const{positionBuffer:a,uvBuffer:s,colorBuffer:n,symbolColorBuffer:i,normalBuffer:l,tangentBuffer:c,objectTransformation:m,geometryTransformation:f}=o,p=e.components??Graphics3DMeshFillSymbolLayer_ft,h=new Array;let d=!1;const g=(0,mat4/* getTranslation */.sC)(Graphics3DMeshFillSymbolLayer_st,m),x=this._context.localOriginFactory.getOrigin(g);for(const u of p){if(!this._validateFaces(e,u))return null;const t=De(e,u);if(0===t.length)continue;const o=Ge(a,l,u,t);o.didFlipNormals&&(d=!0);const m=[[VertexAttribute/* VertexAttribute */.r.POSITION,new Attribute/* Attribute */.n(a,t,3,!0)],[VertexAttribute/* VertexAttribute */.r.NORMAL,new Attribute/* Attribute */.n(o.normals,o.indices,3,!0)]];n&&m.push([VertexAttribute/* VertexAttribute */.r.COLOR,new Attribute/* Attribute */.n(n,t,4,!0)]),i&&m.push([VertexAttribute/* VertexAttribute */.r.SYMBOLCOLOR,new Attribute/* Attribute */.n(i,(0,Indices/* getZeroIndexArray */.EH)(t.length),4,!0)]),s&&m.push([VertexAttribute/* VertexAttribute */.r.UV0,new Attribute/* Attribute */.n(s,t,2,!0)]),c&&m.push([VertexAttribute/* VertexAttribute */.r.TANGENT,new Attribute/* Attribute */.n(c,t,4,!0)]);const p=this._context.stage.renderView.getObjectAndLayerIdColor({graphicUid:r,layerViewUid:this._context.layerViewUid}),g=this._getOrCreateMaterial(e,u),_=new Geometry/* Geometry */.V(g,m,null,IntersectableGeometry/* GeometryType */.d.Mesh,p);_.transformation=f,_.localOrigin=x,h.push(_)}return d&&this.logger.warn("Normals have been automatically flipped to be consistent with the counter clock wise face winding order. It is better to generate mesh geometries that have consistent normals."),{geometries:h,objectTransformation:m}}_updateMaterialParameters(e){this._materialInfoCache.forEachMaterialInfo(e),this._fastUpdateProcessor.forEachMaterialInfo(e),this._fastUpdateProcessor.forEachClonedMaterial(((e,t)=>{t.setParameters(e.parameters)}))}_validateVertexSpace(e){const{_context:{graphicsCoreOwner:{view:{state:{viewingMode:t}}}}}=this,{vertexSpace:r}=e;return t!==ViewingMode/* ViewingMode */.RT.Local||"local"!==r.type||(this.logger.warn("Displaying a mesh with a local vertex space in a view in local viewing mode is not supported."),!1)}test(){return{...super.test(),materials:this._materialInfoCache.materials}}_getFallbackOpacityAndColor(){const t=this.symbolLayer?.material?.color;return Color/* default */.A.toUnitRGBA(t)??vec4f64/* ZEROS */.uY}}class Le{constructor(e,t,r){this.normals=e,this.indices=t,this.didFlipNormals=r}}function De(e,t){return t.faces??(0,Indices/* getContinuousIndexArray */.tM)(e.vertexAttributes.position.length/3)}function Ge(e,t,r,o){switch(r.shading||"flat"){default:case"source":return He(e,t,r,o);case"flat":return $e(e,o);case"smooth":return ke(e,o)}}function $e(e,t){const r=(0,FloatArray/* newFloatArray */.oe)(t.length),o=new Array(3*t.length);for(let a=0;a<t.length;a+=3){const s=ze(e,t,a,Graphics3DMeshFillSymbolLayer_lt);for(let e=0;e<3;e++)r[a+e]=s[e],o[a+e]=a/3}return new Le(r,o,!1)}function He(e,t,r,o){if(null==t)return $e(e,o);let a=!1;if(!r.trustSourceNormals)for(let s=0;s<o.length;s+=3){ze(e,o,s,Graphics3DMeshFillSymbolLayer_lt);for(let e=0;e<3;e++){const r=3*o[s+e];Graphics3DMeshFillSymbolLayer_st[0]=t[r],Graphics3DMeshFillSymbolLayer_st[1]=t[r+1],Graphics3DMeshFillSymbolLayer_st[2]=t[r+2],(0,vec32.e)(Graphics3DMeshFillSymbolLayer_lt,Graphics3DMeshFillSymbolLayer_st)<0&&(t[r]=-t[r],t[r+1]=-t[r+1],t[r+2]=-t[r+2],a=!0)}}return new Le(t,o,a)}function ke(e,t){const r={};for(let s=0;s<t.length;s+=3){const o=ze(e,t,s,Graphics3DMeshFillSymbolLayer_lt);for(let e=0;e<3;e++){const a=t[s+e];let n=r[a];n||(n={normal:(0,vec3f64/* create */.vt)(),count:0},r[a]=n),(0,vec32.f)(n.normal,n.normal,o),n.count++}}const o=(0,FloatArray/* newFloatArray */.oe)(3*t.length),a=new Array(3*t.length);for(let s=0;s<t.length;s++){const e=r[t[s]];1!==e.count&&((0,vec32.n)(e.normal,e.normal),e.count=1);for(let t=0;t<3;t++)o[3*s+t]=e.normal[t];a[s]=s}return new Le(o,a,!1)}function qe(e,t,r,o,a,s){const n=3*t[r],i=3*t[r+1],l=3*t[r+2];o[0]=e[n],o[1]=e[n+1],o[2]=e[n+2],a[0]=e[i],a[1]=e[i+1],a[2]=e[i+2],s[0]=e[l],s[1]=e[l+1],s[2]=e[l+2]}function ze(e,t,r,o){return qe(e,t,r,Graphics3DMeshFillSymbolLayer_st,Graphics3DMeshFillSymbolLayer_nt,Graphics3DMeshFillSymbolLayer_it),(0,vec32.d)(Graphics3DMeshFillSymbolLayer_nt,Graphics3DMeshFillSymbolLayer_nt,Graphics3DMeshFillSymbolLayer_st),(0,vec32.d)(Graphics3DMeshFillSymbolLayer_it,Graphics3DMeshFillSymbolLayer_it,Graphics3DMeshFillSymbolLayer_st),(0,vec32.h)(Graphics3DMeshFillSymbolLayer_st,Graphics3DMeshFillSymbolLayer_nt,Graphics3DMeshFillSymbolLayer_it),(0,vec32.n)(o,Graphics3DMeshFillSymbolLayer_st),o}function We(e){if(!e)return null;const{scale:r,offset:o,rotation:a}=e;return{scale:r,offset:o,rotation:(0,mathUtils/* deg2rad */.kU)(a)}}function Ye(e="repeat"){if("string"==typeof e){const t=Ze(e);return{s:t,t}}return{s:Ze(e.horizontal),t:Ze(e.vertical)}}function Ze(e){switch(e){case"clamp":return enums/* TextureWrapMode */.pF.CLAMP_TO_EDGE;case"mirror":return enums/* TextureWrapMode */.pF.MIRRORED_REPEAT;default:return enums/* TextureWrapMode */.pF.REPEAT}}function Je(e){const t=e.vertexAttributes.color;if(null==t)return!1;for(let r=3;r<t.length;r+=4)if(255!==t[r])return!0;return!1}function Ke(t,r,o){r.diffuse=Color/* default */.A.toUnitRGB(t),r.opacity="opaque"===o.alphaMode?1:t.a}function Qe(e){return e.data??e.url}function Xe(t){return null==t?"-":t instanceof Color/* default */.A?t.toHex():t.contentHash}function et(e){const{offset:t,scale:r,rotation:o}=e??Graphics3DMeshFillSymbolLayer_ot;return`${t[0]},${t[1]},${o},${r[0]},${r[1]}`}function tt(e){return e.vertexAttributes.color}function rt(e){return 1===(e.material?.color?.a??1)}const Graphics3DMeshFillSymbolLayer_ot=new MeshTextureTransform/* default */.A,Graphics3DMeshFillSymbolLayer_at=(0,vec3f64/* create */.vt)(),Graphics3DMeshFillSymbolLayer_st=(0,vec3f64/* create */.vt)(),Graphics3DMeshFillSymbolLayer_nt=(0,vec3f64/* create */.vt)(),Graphics3DMeshFillSymbolLayer_it=(0,vec3f64/* create */.vt)(),Graphics3DMeshFillSymbolLayer_lt=(0,vec3f64/* create */.vt)(),Graphics3DMeshFillSymbolLayer_ct=(0,mat4f64/* create */.vt)(),Graphics3DMeshFillSymbolLayer_ut=(0,mat4f64/* create */.vt)(),Graphics3DMeshFillSymbolLayer_mt=(0,aaBoundingBox/* create */.vt)(),Graphics3DMeshFillSymbolLayer_ft=[new MeshComponent/* default */.A];var Graphics3DMeshFillSymbolLayer_pt;!function(e){e[e.NONE=0]="NONE",e[e.RENDER=1]="RENDER"}(Graphics3DMeshFillSymbolLayer_pt||(Graphics3DMeshFillSymbolLayer_pt={}));

// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/ObjectSymbol3DLayerResource.js
var ObjectSymbol3DLayerResource = __webpack_require__(50124);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/symbolLayerUtils3D.js
var symbolLayerUtils3D = __webpack_require__(97728);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Object3DStateID.js
var Object3DStateID = __webpack_require__(22775);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DLodInstanceGraphicLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Graphics3DLodInstanceGraphicLayer_u{constructor(t,e,i,n,s){this.graphics3DSymbolLayer=t,this.instanceIndex=e,this.elevationAligner=i,this.elevationContext=n,this._highlightOrderMap=s,this.type="lod-instance",this._highlights=new Set,this.alignedSampledElevation=0,this.isElevationSource=!1,this.needsElevationUpdates=!1,this._highlightName=null}initialize(){}setVisibility(t){const{instanceData:e}=this;t!==e.getVisible(this.instanceIndex)&&e.setVisible(this.instanceIndex,t)}destroy(){null!=this.instanceIndex&&(this.instanceData.removeInstance(this.instanceIndex),this.graphics3DSymbolLayer.notifyDestroyGraphicLayer(this))}get usedMemory(){return this.graphics3DSymbolLayer.usedMemory}alignWithElevation(t,e,i){if(this.elevationAligner){(0,featureExpressionInfoUtils/* setContextFeature */.gf)(this.elevationContext.featureExpressionInfoContext,i);const n=(i,n)=>(0,elevationAlignmentUtils/* evaluateElevationInfoAtPoint */.sE)(i,t,this.elevationContext,e,n),s=this.elevationAligner(this,this.elevationContext,t.spatialReference,n,e);null!=s&&(this.alignedSampledElevation=s)}}getCenterObjectSpace(t=(0,vec3f64/* create */.vt)()){return this.instanceData.getCombinedLocalTransform(this.instanceIndex,Graphics3DLodInstanceGraphicLayer_),(0,vec32.t)(t,this._lodRenderer.baseBoundingSphere.center,Graphics3DLodInstanceGraphicLayer_)}getBoundingBoxObjectSpace(t=(0,aaBoundingBox/* create */.vt)()){this.instanceData.getCombinedLocalTransform(this.instanceIndex,Graphics3DLodInstanceGraphicLayer_);const n=this._lodRenderer.baseBoundingBox;(0,aaBoundingBox/* empty */.Ie)(t);for(let s=0;s<8;++s)(0,vec32.i)(Graphics3DLodInstanceGraphicLayer_b,1&s?n[3]:n[0],2&s?n[4]:n[1],4&s?n[5]:n[2]),(0,vec32.t)(Graphics3DLodInstanceGraphicLayer_b,Graphics3DLodInstanceGraphicLayer_b,Graphics3DLodInstanceGraphicLayer_),(0,aaBoundingBox/* expandWithVec3 */.iT)(t,Graphics3DLodInstanceGraphicLayer_b);return t}computeAttachmentOrigin(t){this.instanceData.getGlobalTransform(this.instanceIndex,Graphics3DLodInstanceGraphicLayer_),t.render.origin[0]+=Graphics3DLodInstanceGraphicLayer_[12],t.render.origin[1]+=Graphics3DLodInstanceGraphicLayer_[13],t.render.origin[2]+=Graphics3DLodInstanceGraphicLayer_[14],t.render.num++}async getProjectedBoundingBox(t,i,n,s,h){const g=this.getBoundingBoxObjectSpace(h),c=x,m=(0,aaBoundingBox/* isPoint */.fT)(g)?1:c.length;this.instanceData.getGlobalTransform(this.instanceIndex,Graphics3DLodInstanceGraphicLayer_);for(let a=0;a<m;a++){const t=c[a];Graphics3DLodInstanceGraphicLayer_b[0]=g[t[0]],Graphics3DLodInstanceGraphicLayer_b[1]=g[t[1]],Graphics3DLodInstanceGraphicLayer_b[2]=g[t[2]],(0,vec32.t)(Graphics3DLodInstanceGraphicLayer_b,Graphics3DLodInstanceGraphicLayer_b,Graphics3DLodInstanceGraphicLayer_),Graphics3DLodInstanceGraphicLayer_f[3*a]=Graphics3DLodInstanceGraphicLayer_b[0],Graphics3DLodInstanceGraphicLayer_f[3*a+1]=Graphics3DLodInstanceGraphicLayer_b[1],Graphics3DLodInstanceGraphicLayer_f[3*a+2]=Graphics3DLodInstanceGraphicLayer_b[2]}if(!t(Graphics3DLodInstanceGraphicLayer_f,0,m))return null;(0,aaBoundingBox/* empty */.Ie)(g);let p=null;this.calculateRelativeScreenBounds&&(p=this.calculateRelativeScreenBounds());for(let e=0;e<3*m;e+=3){for(let t=0;t<3;t++)g[t]=Math.min(g[t],Graphics3DLodInstanceGraphicLayer_f[e+t]),g[t+3]=Math.max(g[t+3],Graphics3DLodInstanceGraphicLayer_f[e+t]);p&&n.push({location:Graphics3DLodInstanceGraphicLayer_f.slice(e,e+3),screenSpaceBoundingRect:p})}if(i&&((0,aaBoundingBox/* center */.gX)(g,v),"absolute-height"!==this.elevationContext.mode)){let t;const e=(0,graphicUtils/* demResolutionForBoundingBox */.vY)(g,i.service.spatialReference,i);try{t=await i.service.queryElevation(v[0],v[1],s,e,"ground")}catch(u){}null!=t&&(0,aaBoundingBox/* offset */.cY)(g,0,0,-this.alignedSampledElevation+t)}return g}addObjectState(t){t.stateType===basicInterfaces/* Object3DState */.Mg.Highlight&&this.addObjectHighlightState(t)}addObjectHighlightState(t){const e=new Object3DStateID/* Object3DHighlightStateID */.h(t.highlightName);this._addHighlightId(e),t.addExternal((t=>{this._removeHighlightId(t)}),e)}removeObjectState(t){this._highlights.forEach((e=>t.remove(e)))}updateHighlights(t){this._highlightOrderMap=t,this._updateHighlightOptions()}_calculateHighlightOptions(){let t=-1,e=null;return this._highlights.forEach((({highlightName:i})=>{const n=this._highlightOrderMap.get(i);void 0!==n&&n>t&&(t=n,e=i)})),e}_addHighlightId(t){this._highlights.add(t),this._updateHighlightOptions()}_removeHighlightId(t){this._highlights.delete(t),this._updateHighlightOptions()}_updateHighlightOptions(){const t=this._calculateHighlightOptions();t!==this._highlightName&&(this._highlightName=t,this.instanceData.setHighlight(this.instanceIndex,t))}get _lodRenderer(){return this.graphics3DSymbolLayer.lodRenderer}get instanceData(){return this._lodRenderer.instanceData}}const Graphics3DLodInstanceGraphicLayer_f=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],Graphics3DLodInstanceGraphicLayer_b=(0,vec3f64/* create */.vt)(),v=(0,vec3f64/* create */.vt)(),x=[[0,1,2],[3,1,2],[0,4,2],[3,4,2],[0,1,5],[3,1,5],[0,4,5],[3,4,5]],Graphics3DLodInstanceGraphicLayer_=(0,mat4f64/* create */.vt)();

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/graphics/Loadable.js
var Loadable = __webpack_require__(20561);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/lodRendering/LodResources.js
var LodResources = __webpack_require__(19221);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/lodResourceUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function lodResourceUtils_t(e,t){const s=e.stageResources.geometries.map((r=>new LodResources/* LodComponentResources */.iC(new LodResources/* LodComponentEngineGeometry */.dI(r),e.stageResources.textures))),l=null==e.lodThreshold||0===e.lodThreshold&&t>0?lodResourceUtils_u(s):e.lodThreshold;return new LodResources/* LodLevelResources */.hr(s,l,e.pivotOffset)}function s(n){return new LodResources/* LodResources */.Fe(n.map(((e,n)=>lodResourceUtils_t(e,n))))}function lodResourceUtils_u(e){const n=e.reduce(((e,n)=>e+n.numTriangles),0);return Math.sqrt(n*lodResourceUtils_l/Math.PI)}const lodResourceUtils_l=20;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/graphics/objectResourceUtils.js + 2 modules
var objectResourceUtils = __webpack_require__(2470);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/graphics/primitiveObjectSymbolUtils.js
var primitiveObjectSymbolUtils = __webpack_require__(41262);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/styleUtils.js + 1 modules
var styleUtils = __webpack_require__(59890);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/webStyleSymbolUtils.js
var webStyleSymbolUtils = __webpack_require__(19989);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/webStyleUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function webStyleUtils_r(r){if(null==r||null==r.styleName&&null==r.styleUrl)return null;const o=r.name;if(null==o)throw new core_Error/* default */.A("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference");const u={portal:r.portal},i=await (0,styleUtils/* fetchStyle */.cF)(r,u).catch((()=>null));if(null===i)return null;const m=(0,webStyleSymbolUtils/* getStyleItemFromStyle */.p)(o,i.data);if(m&&!m.formatInfos?.some((l=>"gltf_basisu"===l.type)))return null;const a=await (0,webStyleSymbolUtils/* fetchSymbolFromStyle */.I)(i,o,u,styleUtils/* symbolUrlFromStyleItem */.o5,{acceptedFormats:["web-gltf-basisu","web-gltf","web"]}).catch((()=>null));if(null===a||"point-3d"!==a.type)return null;const y=a.symbolLayers.items[0];return"object"===y.type?y.resource:null}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/effects/geometry/olidUtils.js
var olidUtils = __webpack_require__(36340);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/MapUtils.js
var MapUtils = __webpack_require__(82256);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/support/buffer/glUtil.js
var glUtil = __webpack_require__(15788);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl/RenderCamera.js + 3 modules
var RenderCamera = __webpack_require__(21750);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/effects/RenderPlugin.js
var RenderPlugin = __webpack_require__(38931);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/DefaultVertexAttributeLocations.js
var DefaultVertexAttributeLocations = __webpack_require__(13148);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/DepthRange.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class DepthRange_t{constructor(t=1/0,r=-1/0){this.near=t,this.far=r}set(t,r){this.near=t,this.far=r}union(t){null!=t&&(this.near=Math.min(this.near,t.near),this.far=Math.max(this.far,t.far))}within(t){return this.near<=t&&t<=this.far}equals(t){return this.near===t.near&&this.far===t.far}static{this.zero=new DepthRange_t(0,0)}static{this.infinite=new DepthRange_t}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectorType.js
var IntersectorType = __webpack_require__(68427);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Octree.js
var Octree = __webpack_require__(91337);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(52495);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Evented.js
var Evented = __webpack_require__(17306);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/buffer/BufferView.js + 6 modules
var BufferView = __webpack_require__(57813);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/support/mathUtils.js
var support_mathUtils = __webpack_require__(72699);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/BufferObject.js
var BufferObject = __webpack_require__(89423);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/lodRendering/BackedBufferObject.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class BackedBufferObject_r{constructor(r,i,s){this._elementSize=i,this._buffer=BufferObject/* BufferObject */.g.createVertex(r,enums/* Usage */._U.STATIC_DRAW),this.resize(s)}destroy(){this._buffer.dispose()}get elementSize(){return this._elementSize}get capacity(){return this._capacity}get array(){return this._array}get buffer(){return this._buffer}get usedMemory(){return this._array.byteLength+this._buffer.usedMemory}copyRange(e,t,r,i=0){const s=new Uint8Array(this.array,e*this.elementSize,(t-e)*this.elementSize);new Uint8Array(r.array,i*this.elementSize).set(s)}transferAll(){this._buffer.setData(this._array)}transferRange(e,t){const r=e*this._elementSize,i=t*this._elementSize;this._buffer.setSubData(new Uint8Array(this._array),r,r,i)}resize(e){const t=e*this._elementSize,r=new ArrayBuffer(t);this._array&&(e>=this._capacity?new Uint8Array(r).set(new Uint8Array(this._array)):new Uint8Array(r).set(new Uint8Array(this._array).subarray(0,e*this._elementSize))),this._array=r,this._buffer.setSize(t),this._capacity=e}}

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/lodRendering/RenderInstanceData.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class RenderInstanceData_c{constructor(t){this.modelOriginHi=t.getField(VertexAttribute/* VertexAttribute */.r.INSTANCEMODELORIGINHI,BufferView/* BufferViewVec3f */.xs),this.modelOriginLo=t.getField(VertexAttribute/* VertexAttribute */.r.INSTANCEMODELORIGINLO,BufferView/* BufferViewVec3f */.xs),this.model=t.getField(VertexAttribute/* VertexAttribute */.r.INSTANCEMODEL,BufferView/* BufferViewMat3f */.jZ),this.modelNormal=t.getField(VertexAttribute/* VertexAttribute */.r.INSTANCEMODELNORMAL,BufferView/* BufferViewMat3f */.jZ),this.featureAttribute=t.getField(VertexAttribute/* VertexAttribute */.r.INSTANCEFEATUREATTRIBUTE,BufferView/* BufferViewVec4f */.Eq),this.color=t.getField(VertexAttribute/* VertexAttribute */.r.INSTANCECOLOR,BufferView/* BufferViewVec4u8 */.XP),this.objectAndLayerIdColor=t.getField(VertexAttribute/* VertexAttribute */.r.INSTANCEOBJECTANDLAYERIDCOLOR,BufferView/* BufferViewVec4u8 */.XP)}}class RenderInstanceData_f{constructor(t,i){this._rctx=t,this._instanceBufferLayout=i,this._headIndex=0,this._tailIndex=0,this._firstIndex=null,this._captureFirstIndex=!0,this._updating=!1,this._prevHeadIndex=0,this._resized=!1,this._capacity=1}destroy(){this._buffer&&this._buffer.destroy()}get buffer(){return this._buffer.buffer}get view(){return this._view}get capacity(){return this._capacity}get size(){const t=this._headIndex,i=this._tailIndex;return t>=i?t-i:t+this._capacity-i}get isEmpty(){return this._headIndex===this._tailIndex}get isFull(){return this._tailIndex===(this._headIndex+1)%this._capacity}get headIndex(){return this._headIndex}get tailIndex(){return this._tailIndex}get firstIndex(){return this._firstIndex}get usedMemory(){return this._buffer?.usedMemory??0}reset(){this._headIndex=0,this._tailIndex=0,this._firstIndex=null}startUpdateCycle(){this._captureFirstIndex=!0}beginUpdate(){(0,Util/* assert */.vA)(!this._updating,"already updating"),this._updating=!0,this._prevHeadIndex=this._headIndex}endUpdate(){(0,Util/* assert */.vA)(this._updating,"not updating"),this.size<arrayUtils/* reallocShrinkThreshold */.$U*this.capacity&&this._shrink(),this._resized?(this._buffer.transferAll(),this._resized=!1):this._transferRange(this._prevHeadIndex,this._headIndex),this._updating=!1}allocateHead(){(0,Util/* assert */.vA)(this._updating,"not updating"),this.isFull&&this._grow();const t=this.headIndex;return this._captureFirstIndex&&(this._firstIndex=t,this._captureFirstIndex=!1),this._incrementHead(),(0,Util/* assert */.vA)(this._headIndex!==this._tailIndex,"invalid pointers"),t}freeTail(){(0,Util/* assert */.vA)(this._updating,"not updating"),(0,Util/* assert */.vA)(this.size>0,"invalid size");const t=this._tailIndex===this._firstIndex;this._incrementTail(),t&&(this._firstIndex=this._tailIndex)}_grow(){const t=Math.max(RenderInstanceData_u,Math.floor(this._capacity*arrayUtils/* reallocGrowthFactor */.Ji));this._resize(t)}_shrink(){const t=Math.max(RenderInstanceData_u,Math.floor(this._capacity*arrayUtils/* reallocShrinkFactor */.He));this._resize(t)}_resize(t){if((0,Util/* assert */.vA)(this._updating,"not updating"),t===this._capacity)return;const i=new BackedBufferObject_r(this._rctx,this._instanceBufferLayout.stride,t);if(this._buffer){this._firstIndex&&(this._firstIndex=(this._firstIndex+this._capacity-this._tailIndex)%this._capacity);const t=this.size,e=this._compactInstances(i);(0,Util/* assert */.vA)(e===t,"invalid compaction"),this._buffer.destroy(),this._tailIndex=0,this._headIndex=e,this._prevHeadIndex=0}this._resized=!0,this._capacity=t,this._buffer=i,this._view=new RenderInstanceData_c(this._instanceBufferLayout.createView(this._buffer.array))}_compactInstances(t){const i=this._headIndex,e=this._tailIndex;return e<i?(this._buffer.copyRange(e,i,t),i-e):e>i?(this._buffer.copyRange(e,this._capacity,t),i>0&&this._buffer.copyRange(0,i,t,this._capacity-e),i+(this._capacity-e)):0}_incrementHead(t=1){this._headIndex=(this._headIndex+t)%this._capacity}_incrementTail(t=1){this._tailIndex=(this._tailIndex+t)%this._capacity}_transferRange(t,i){t<i?this._buffer.transferRange(t,i):t>i&&(i>0&&this._buffer.transferRange(0,i),this._buffer.transferRange(t,this._capacity))}}const RenderInstanceData_u=64;

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/lodRendering/InstanceData.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var InstanceData_S;function InstanceData_b(t){let e=(0,InterleavedLayout/* newLayout */.BP)().mat4f64(VertexAttribute/* VertexAttribute */.r.LOCALTRANSFORM).mat4f64(VertexAttribute/* VertexAttribute */.r.GLOBALTRANSFORM).vec4f64(VertexAttribute/* VertexAttribute */.r.BOUNDINGSPHERE).vec3f64(VertexAttribute/* VertexAttribute */.r.MODELORIGIN).mat3f(VertexAttribute/* VertexAttribute */.r.INSTANCEMODEL).mat3f(VertexAttribute/* VertexAttribute */.r.INSTANCEMODELNORMAL).vec2f(VertexAttribute/* VertexAttribute */.r.MODELSCALEFACTORS);return t.includes(VertexAttribute/* VertexAttribute */.r.FEATUREATTRIBUTE)&&(e=e.vec4f(VertexAttribute/* VertexAttribute */.r.FEATUREATTRIBUTE)),t.includes(VertexAttribute/* VertexAttribute */.r.COLOR)&&(e=e.vec4u8(VertexAttribute/* VertexAttribute */.r.COLOR)),t.includes(VertexAttribute/* VertexAttribute */.r.OLIDCOLOR)&&(e=e.vec4u8(VertexAttribute/* VertexAttribute */.r.OLIDCOLOR)),e=e.u8(VertexAttribute/* VertexAttribute */.r.STATE).u8(VertexAttribute/* VertexAttribute */.r.LODLEVEL),e}!function(t){t[t.ALLOCATED=1]="ALLOCATED",t[t.DEFAULT_ACTIVE=2]="DEFAULT_ACTIVE",t[t.VISIBLE=4]="VISIBLE",t[t.HIGHLIGHT=8]="HIGHLIGHT",t[t.HIGHLIGHT_ACTIVE=16]="HIGHLIGHT_ACTIVE",t[t.REMOVE=32]="REMOVE",t[t.TRANSFORM_CHANGED=64]="TRANSFORM_CHANGED",t[t.ACTIVE=18]="ACTIVE"}(InstanceData_S||(InstanceData_S={}));class InstanceData_C{constructor(t){this.localTransform=t.getField(VertexAttribute/* VertexAttribute */.r.LOCALTRANSFORM,BufferView/* BufferViewMat4f64 */.E$),this.globalTransform=t.getField(VertexAttribute/* VertexAttribute */.r.GLOBALTRANSFORM,BufferView/* BufferViewMat4f64 */.E$),this.modelOrigin=t.getField(VertexAttribute/* VertexAttribute */.r.MODELORIGIN,BufferView/* BufferViewVec3f64 */.Xm),this.model=t.getField(VertexAttribute/* VertexAttribute */.r.INSTANCEMODEL,BufferView/* BufferViewMat3f */.jZ),this.modelNormal=t.getField(VertexAttribute/* VertexAttribute */.r.INSTANCEMODELNORMAL,BufferView/* BufferViewMat3f */.jZ),this.modelScaleFactors=t.getField(VertexAttribute/* VertexAttribute */.r.MODELSCALEFACTORS,BufferView/* BufferViewVec2f */.gH),this.boundingSphere=t.getField(VertexAttribute/* VertexAttribute */.r.BOUNDINGSPHERE,BufferView/* BufferViewVec4f64 */.Aj),this.featureAttribute=t.getField(VertexAttribute/* VertexAttribute */.r.FEATUREATTRIBUTE,BufferView/* BufferViewVec4f */.Eq),this.color=t.getField(VertexAttribute/* VertexAttribute */.r.COLOR,BufferView/* BufferViewVec4u8 */.XP),this.objectAndLayerIdColor=t.getField(VertexAttribute/* VertexAttribute */.r.OLIDCOLOR,BufferView/* BufferViewVec4u8 */.XP),this.state=t.getField(VertexAttribute/* VertexAttribute */.r.STATE,BufferView/* BufferViewUint8 */.SL),this.lodLevel=t.getField(VertexAttribute/* VertexAttribute */.r.LODLEVEL,BufferView/* BufferViewUint8 */.SL)}}let R=class extends Accessor/* default */.A{constructor(t,e){super(t),this.events=new Evented/* default */.A,this._capacity=0,this._size=0,this._next=0,this._highlightOptionsMap=new Map,this._highlightOptionsMapPrev=new Map,this._layout=InstanceData_b(e),this._capacity=RenderInstanceData_u,this._buffer=this._layout.createBuffer(this._capacity),this._view=new InstanceData_C(this._buffer)}get capacity(){return this._capacity}get size(){return this._size}get view(){return this._view}addInstance(){this._size+1>this._capacity&&this._grow();const t=this._findSlot();return this._view.state.set(t,InstanceData_S.ALLOCATED),this._size++,this.events.emit("instances-changed"),t}removeInstance(t){const e=this._view.state;(0,Util/* assert */.vA)(t>=0&&t<this._capacity&&0!==(e.get(t)&InstanceData_S.ALLOCATED),"invalid instance handle"),this._getStateFlag(t,InstanceData_S.ACTIVE)?this._setStateFlags(t,InstanceData_S.REMOVE):this.freeInstance(t),this.events.emit("instances-changed")}freeInstance(t){const e=this._view.state;(0,Util/* assert */.vA)(t>=0&&t<this._capacity&&0!==(e.get(t)&InstanceData_S.ALLOCATED),"invalid instance handle"),e.set(t,0),this._size--}setLocalTransform(t,e,s=!0){this._view.localTransform.setMat(t,e),s&&this.updateModelTransform(t)}getLocalTransform(t,e){this._view.localTransform.getMat(t,e)}setGlobalTransform(t,e,s=!0){this._view.globalTransform.setMat(t,e),s&&this.updateModelTransform(t)}getGlobalTransform(t,e){this._view.globalTransform.getMat(t,e)}updateModelTransform(t){const e=this._view,s=InstanceData_y,i=InstanceData_H;e.localTransform.getMat(t,InstanceData_N),e.globalTransform.getMat(t,InstanceData_D);const a=(0,mat4/* multiply */.lw)(InstanceData_D,InstanceData_D,InstanceData_N);(0,vec32.i)(s,a[12],a[13],a[14]),e.modelOrigin.setVec(t,s),(0,mat3/* fromMat4 */.z0)(i,a),e.model.setMat(t,i);const r=(0,support_mathUtils/* scaleFromMatrix */.wp)(InstanceData_y,a);r.sort(),e.modelScaleFactors.set(t,0,r[1]),e.modelScaleFactors.set(t,1,r[2]),(0,mat3/* invert */.B8)(i,i),(0,mat3/* transpose */.mg)(i,i),e.modelNormal.setMat(t,i),this._setStateFlags(t,InstanceData_S.TRANSFORM_CHANGED),this.events.emit("instance-transform-changed",{index:t})}getModelTransform(t,e){const s=this._view;s.model.getMat(t,InstanceData_H),s.modelOrigin.getVec(t,InstanceData_y),e[0]=InstanceData_H[0],e[1]=InstanceData_H[1],e[2]=InstanceData_H[2],e[3]=0,e[4]=InstanceData_H[3],e[5]=InstanceData_H[4],e[6]=InstanceData_H[5],e[7]=0,e[8]=InstanceData_H[6],e[9]=InstanceData_H[7],e[10]=InstanceData_H[8],e[11]=0,e[12]=InstanceData_y[0],e[13]=InstanceData_y[1],e[14]=InstanceData_y[2],e[15]=1}applyShaderTransformation(t,e){null!=this.shaderTransformation&&this.shaderTransformation.applyTransform(this,t,e)}getCombinedModelTransform(t,e){return this.getModelTransform(t,e),null!=this.shaderTransformation&&this.shaderTransformation.applyTransform(this,t,e),e}getCombinedLocalTransform(t,e){this._view.localTransform.getMat(t,e),null!=this.shaderTransformation&&this.shaderTransformation.applyTransform(this,t,e)}getCombinedMaxScaleFactor(t){let e=this._view.modelScaleFactors.get(t,1);return null!=this.shaderTransformation&&(this.shaderTransformation.scaleFactor(InstanceData_y,this,t),e*=Math.max(InstanceData_y[0],InstanceData_y[1],InstanceData_y[2])),e}getCombinedMedianScaleFactor(t){let e=this._view.modelScaleFactors.get(t,0);return null!=this.shaderTransformation&&(this.shaderTransformation.scaleFactor(InstanceData_y,this,t),e*=w(InstanceData_y[0],InstanceData_y[1],InstanceData_y[2])),e}getModel(t,e){this._view.model.getMat(t,e)}setFeatureAttribute(t,e){this._view.featureAttribute.setVec(t,e)}getFeatureAttribute(t,e){this._view.featureAttribute.getVec(t,e)}setColor(t,e){this._view.color.setVec(t,e)}setObjectAndLayerIdColor(t,e){this._view.objectAndLayerIdColor.setVec(t,e)}setVisible(t,e){e!==this.getVisible(t)&&(this._setStateFlag(t,InstanceData_S.VISIBLE,e),this.events.emit("instance-visibility-changed",{index:t}))}getVisible(t){return this._getStateFlag(t,InstanceData_S.VISIBLE)}setHighlight(t,e){const{_highlightOptionsMap:s}=this,i=s.get(t);e?e!==i&&(s.set(t,e),this._setStateFlag(t,InstanceData_S.HIGHLIGHT,!0),this.events.emit("instance-highlight-changed")):i&&(s.delete(t),this._setStateFlag(t,InstanceData_S.HIGHLIGHT,!1),this.events.emit("instance-highlight-changed"))}get highlightOptionsMap(){return this._highlightOptionsMap}getHighlightStateFlag(t){return this._getStateFlag(t,InstanceData_S.HIGHLIGHT)}geHighlightOptionsPrev(t){const e=this._highlightOptionsMapPrev.get(t)??null;return this._highlightOptionsMapPrev.delete(t),e}getHighlightName(t){const e=this.highlightOptionsMap.get(t)??null;return e?this._highlightOptionsMapPrev.set(t,e):this._highlightOptionsMapPrev.delete(t),e}getState(t){return this._view.state.get(t)}getLodLevel(t){return this._view.lodLevel.get(t)}countFlags(t){let e=0;for(let s=0;s<this._capacity;++s){this.getState(s)&t&&++e}return e}_setStateFlags(t,e){const s=this._view.state;e=s.get(t)|e,s.set(t,e)}_clearStateFlags(t,e){const s=this._view.state;e=s.get(t)&~e,s.set(t,e)}_setStateFlag(t,e,s){s?this._setStateFlags(t,e):this._clearStateFlags(t,e)}_getStateFlag(t,e){return!!(this._view.state.get(t)&e)}_grow(){this._capacity=Math.max(RenderInstanceData_u,Math.floor(this._capacity*arrayUtils/* reallocGrowthFactor */.Ji)),this._buffer=this._layout.createBuffer(this._capacity).copyFrom(this._buffer),this._view=new InstanceData_C(this._buffer)}_findSlot(){const t=this._view.state;let e=this._next;for(;t.get(e)&InstanceData_S.ALLOCATED;)e=e+1===this._capacity?0:e+1;return this._next=e+1===this._capacity?0:e+1,e}};function w(t,e,s){return Math.max(Math.min(t,e),Math.min(Math.max(t,e),s))}(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],R.prototype,"shaderTransformation",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],R.prototype,"_size",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],R.prototype,"size",null),R=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.3d.webgl-engine.lib.lodRendering.InstanceData")],R);const InstanceData_y=(0,vec3f64/* create */.vt)(),InstanceData_H=(0,mat3f64/* create */.vt)(),InstanceData_N=(0,mat4f64/* create */.vt)(),InstanceData_D=(0,mat4f64/* create */.vt)();

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/sphere.js + 1 modules
var sphere = __webpack_require__(31803);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/lodRendering/InstanceOctree.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class InstanceOctree_n extends Octree/* default */.A{constructor(e,r){super((t=>(0,sphere.w)(this._instanceData.view.boundingSphere.getVec(t,this._tmpSphere))),{maximumDepth:25}),this._instanceData=e,this._boundingSphere=r,this._tmpSphere=(0,sphere.c)(),this._tmpMat4=(0,mat4f64/* create */.vt)()}addInstance(t){const s=this._instanceData.view.boundingSphere,i=this._instanceData.getCombinedModelTransform(t,this._tmpMat4);(0,vec32.t)((0,sphere.a)(this._tmpSphere),this._boundingSphere.center,i),this._tmpSphere[3]=this._boundingSphere.radius*(0,support_mathUtils/* maxScale */.hG)(i),s.setVec(t,this._tmpSphere),this.add([t])}removeInstance(t){this.remove([t])}}

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/lodRendering/LevelSelector.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class LevelSelector_e{constructor(e,i){this._worldSpaceRadius=e,this._minScreenSpaceRadii=i}selectLevel(e,i,t){const c=t.computeScreenPixelSizeAt(e),r=this._worldSpaceRadius*i/c;let s=0;for(let a=1;a<this._minScreenSpaceRadii.length;++a)r>=this._minScreenSpaceRadii[a]&&(s=a);return s}}

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLMaterials.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class GLMaterials_t{constructor(s,t){this._material=s,this._repository=t,this._map=new Map}dispose(){this._map.forEach(((s,t)=>{null!=s&&this._repository.release(this._material,t)}))}load(t,e,r){const i=this._material.produces.get(e);if(!i?.(r))return null;this._map.has(r)||this._map.set(r,this._repository.acquire(this._material,e,r));const a=this._map.get(r);if(a){if(a.ensureResources(t)===basicInterfaces/* ResourceState */.Am.LOADED)return a;this._repository.requestRender()}return null}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexArrayObject.js
var VertexArrayObject = __webpack_require__(11459);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/lodRendering/LodComponentData.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class LodComponentData_a{constructor(a,n){const m=a.renderContext.rctx,u=n.geometry,f=n.geometry.getRenderGeometry(),g=f.material;this._materials=a.materials,g.setParameters({instancedDoublePrecision:!0}),this.geometry=u,this.material=g,this.glMaterials=new GLMaterials_t(g,this._materials),this.vertexBufferLayout=f.vertexBufferLayout,this.vbo=BufferObject/* BufferObject */.g.createVertex(m,enums/* Usage */._U.STATIC_DRAW,f.buffer),this.vao=new VertexArrayObject/* VertexArrayObject */.Z(m,DefaultVertexAttributeLocations/* Default3D */.D,new Map([["geometry",(0,glUtil/* glLayout */.U)(f.vertexBufferLayout)]]),new Map([["geometry",this.vbo]])),this.vertexCount=f.elementCount}destroy(){this.glMaterials.dispose(),this.vbo.dispose(),this.vao.dispose()}get boundingInfo(){return this.geometry.boundingInfo}get triangleCount(){return this.vertexCount/3}get usedMemory(){return 128+this.vbo.usedMemory+this.vao.usedMemory}intersect(e,t,r,o,s,i,a,n){return this.geometry.intersect(e,t,r,o,s,i,a,n)}}

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/lodRendering/LodLevel.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class LodLevel_a{static async create(e,r,i){const s=await Promise.allSettled(r.components.map((o=>e.controller.schedule((()=>new LodComponentData_a(e,o)),i)))),c=s.map((o=>"fulfilled"===o.status?o.value:null)).filter(arrayUtils/* isSome */.Ru);if((0,promiseUtils/* isAborted */.G4)(i)||c.length!==s.length){c.forEach((o=>o.destroy())),(0,promiseUtils/* throwIfAborted */.Te)(i);for(const o of s)if("rejected"===o.status)throw o.reason}return new LodLevel_a(r.minScreenSpaceRadius,c)}constructor(o,n){this.minScreenSpaceRadius=o,this.components=n}destroy(){this.components.forEach((o=>o.destroy()))}intersect(o,n,t,e,r,i,s){this.components.forEach((c=>c.intersect(o,n,t,e,r,i,this.boundingSphere,s)))}get boundingBox(){if(null==this._boundingBox){const o=(0,aaBoundingBox/* empty */.Ie)();this.components.forEach((n=>{null!=n.boundingInfo&&((0,aaBoundingBox/* expandWithVec3 */.iT)(o,n.boundingInfo.bbMin),(0,aaBoundingBox/* expandWithVec3 */.iT)(o,n.boundingInfo.bbMax))})),this._boundingBox=o}return this._boundingBox}get boundingSphere(){if(null==this._boundingSphere){const o=this.boundingBox,n=(0,vec3f64/* create */.vt)();(0,aaBoundingBox/* center */.gX)(o,n),this._boundingSphere={center:n,radius:.5*(0,aaBoundingBox/* diameter */._F)(o)}}return this._boundingSphere}get triangleCount(){return this.components.reduce(((o,n)=>o+n.triangleCount),0)}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/MaterialUtil.js
var MaterialUtil = __webpack_require__(29117);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/renderers/utils.js
var renderers_utils = __webpack_require__(29688);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/DefaultMaterialTechnique.js
var DefaultMaterialTechnique = __webpack_require__(73418);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/support/HighlightDefaults.js
var HighlightDefaults = __webpack_require__(29736);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/support/Scheduler.js
var Scheduler = __webpack_require__(22167);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/Util.js
var webgl_Util = __webpack_require__(19282);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/lodRendering/LodRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const LodRenderer_z=e=>{const t=e.baseBoundingSphere.radius,r=e.levels.map((e=>e.minScreenSpaceRadius));return new LevelSelector_e(t,r)};let LodRenderer_k=class extends RenderPlugin/* AsyncRenderPlugin */.Cc{constructor(e,t){super(e),this.type=IntersectorType/* IntersectorType */.d.LOD,this.isGround=!1,this._levels=[],this._defaultRenderInstanceData=new Array,this._highlightRenderInstanceDataMap=new Map,this._instanceIndex=0,this._cycleStartIndex=0,this._slicePlane=!1,this._camera=new RenderCamera/* default */.A,this._updateCyclesWithStaticCamera=-1,this._needFullCycle=!1,this.produces=new Map([[RenderSlot/* RenderSlot */.N.OPAQUE_MATERIAL,e=>this._produces(e)],[RenderSlot/* RenderSlot */.N.TRANSPARENT_MATERIAL,e=>!!this._hasTransparentLevels()&&this._produces(e)]]),this._instanceData=new R({shaderTransformation:e.shaderTransformation},e.optionalFields),this.addHandles(t.registerTask(Scheduler/* TaskPriority */.W6.LOD_RENDERER,this))}initialize(){this._instanceBufferLayout=LodRenderer_Y(this.optionalFields),this._glInstanceBufferLayout=(0,glUtil/* glLayout */.U)(this._instanceBufferLayout,1),this.addHandles([this._instanceData.events.on("instances-changed",(()=>this._requestUpdateCycle())),this._instanceData.events.on("instance-transform-changed",(({index:e})=>{this._requestUpdateCycle(),this.metadata.notifyGraphicGeometryChanged(e)})),this._instanceData.events.on("instance-visibility-changed",(({index:e})=>{this._requestUpdateCycle(!0),this.metadata.notifyGraphicVisibilityChanged(e)})),this._instanceData.events.on("instance-highlight-changed",(()=>this._requestUpdateCycle(!0)))])}get _allRenderInstanceData(){return[this._defaultRenderInstanceData,...this._highlightRenderInstanceDataMap.values()]}get _allRenderInstanceDataExceptHighlightShadow(){const e=[this._defaultRenderInstanceData];for(const t of this._highlightRenderInstanceDataMap)t[0]!==HighlightDefaults/* defaultHighlightName */.Tv&&e.push(t[1]);return e}hasHighlight(e){return this._highlightRenderInstanceDataMap.has(e)}get _enableLevelSelection(){return this.symbol.levels.length>1}get levels(){return this._levels}get baseBoundingBox(){return this._levels[this._levels.length-1].boundingBox}get baseBoundingSphere(){return this._levels[this._levels.length-1].boundingSphere}get baseMaterial(){return this._levels[this._levels.length-1].components[0].material}get slicePlaneEnabled(){return this._slicePlane}set slicePlaneEnabled(e){this._slicePlane=e}get layerViewUid(){return this.metadata.layerViewUid}get instanceData(){return this._instanceData}get hasEmissions(){return this._levels.some((e=>e.components.some((e=>e.material.hasEmissions))))}get usedMemory(){return this._allRenderInstanceData.reduce(((e,t)=>t.reduce(((e,t)=>e+t.usedMemory),e)),this._levels.reduce(((e,t)=>e+t.components.reduce(((e,t)=>e+t.usedMemory),0)),0))}get renderStats(){const e=this._instanceData.size,t=[];return this._levels.forEach(((e,r)=>{const n=this._allRenderInstanceData[0][r].size+this._allRenderInstanceData[1][r].size,s=e.triangleCount;t.push({renderedInstances:n,renderedTriangles:n*s,trianglesPerInstance:s})})),{totalInstances:e,renderedInstances:t.reduce(((e,t)=>e+t.renderedInstances),0),renderedTriangles:t.reduce(((e,t)=>e+t.renderedTriangles),0),levels:t}}_createRenderInstanceDataArray(e=[]){const{rctx:t}=this._context.renderContext;return this.symbol.levels.map((r=>{e.push(new RenderInstanceData_f(t,this._instanceBufferLayout))})),e}async initializeRenderContext(e,r){this._context=e,this._createRenderInstanceDataArray(this._defaultRenderInstanceData);const n=await Promise.allSettled(this.symbol.levels.map((t=>LodLevel_a.create(e,t,r)))),s=n.map((e=>"fulfilled"===e.status?e.value:null)).filter(arrayUtils/* isSome */.Ru);if((0,promiseUtils/* isAborted */.G4)(r)||s.length!==n.length){s.forEach((e=>e.destroy())),(0,promiseUtils/* throwIfAborted */.Te)(r);for(const e of n)if("rejected"===e.status)throw e.reason}this._levels=s,this._levelSelector=LodRenderer_z(this)}uninitializeRenderContext(){this._invalidateOctree(),this._levels.forEach((e=>e.destroy())),this._defaultRenderInstanceData.forEach((e=>e.destroy())),this._highlightRenderInstanceDataMap.forEach((e=>e.forEach((e=>e.destroy()))))}_hasTransparentLevels(){return this._levels.some((e=>e.components.some((e=>{const t=e.material.produces.get(RenderSlot/* RenderSlot */.N.TRANSPARENT_MATERIAL);return t?.(ShaderOutput/* ShaderOutput */.V.Color)}))))}hasHighlights(){return (0,MapUtils/* someMap */.Bs)(this._highlightRenderInstanceDataMap,(e=>e.some((e=>e.size>0))))}_produces(e){return(e!==ShaderOutput/* ShaderOutput */.V.Highlight||this.hasHighlights())&&(e!==ShaderOutput/* ShaderOutput */.V.ShadowHighlight||this.hasHighlight(HighlightDefaults/* defaultHighlightName */.Tv))}prepareRender(e){if(!debugFlags/* debugFlags */.b.LOD_INSTANCE_RENDERER_DISABLE_UPDATES){if(this._enableLevelSelection){const t=e.bind.contentCamera.equals(this._camera);this._camera.copyFrom(e.bind.contentCamera),t||this._requestUpdateCycle()}this._needFullCycle&&(this.runTask(Scheduler/* noBudget */.Bb),this._needFullCycle=!1)}}acquireTechniques(e){if(!this.baseMaterial.visible||!this.baseMaterial.isVisibleForOutput(e.output))return null;const t=this._getInstanceDatas(e);if(!t)return null;const r=new Array,n=this.levels;return t.forEach((t=>n.forEach((({components:n},s)=>n.forEach((n=>r.push(this._beginComponent(e,t[s],n)))))))),r}render(e,t){const r=this._getInstanceDatas(e);if(!r||null==t)return;let n=0;e.rctx.bindVAO();const s=this.levels;r.forEach((r=>s.forEach((({components:s},a)=>s.forEach((s=>this._renderComponent(e,t[n++],r[a],s,a)))))))}_getInstanceDatas(e){const{output:t,bind:r}=e,n=t===ShaderOutput/* ShaderOutput */.V.Highlight,s=t===ShaderOutput/* ShaderOutput */.V.ShadowHighlight,a=!n&&!s,i=t!==ShaderOutput/* ShaderOutput */.V.ShadowExcludeHighlight;if(a)return i?this._allRenderInstanceData:this._allRenderInstanceDataExceptHighlightShadow;const{_highlightRenderInstanceDataMap:o}=this;if(i){if(n){const e=r.highlight?.name;if(!e)return null;const t=o.get(e);return t?[t]:null}const e=o.get(HighlightDefaults/* defaultHighlightName */.Tv);return s?e?[e]:null:Array.from(o.values())}return null}intersect(e,t,r,n){if(!this.baseMaterial.visible||null==this._octree)return;const s=(0,vec3f64/* create */.vt)();(0,vec32.d)(s,n,r);const a=s=>{this._instanceData.getCombinedModelTransform(s,LodRenderer_Z),e.transform.set(LodRenderer_Z),(0,vec32.t)(LodRenderer_$,r,e.transform.inverse),(0,vec32.t)(LodRenderer_X,n,e.transform.inverse);const a=this._instanceData.getState(s),i=this._instanceData.getLodLevel(s),o=this._levels.length;(0,Util/* assert */.vA)(0!==(a&InstanceData_S.ACTIVE),"invalid instance state"),(0,Util/* assert */.vA)(i>=0&&i<o,"invaid lod level"),this._levels[i].intersect(e,t,LodRenderer_$,LodRenderer_X,s,this.metadata,o)};this.baseMaterial.parameters.verticalOffset?this._octree.forEach(a):this._octree.forEachAlongRay(r,s,a)}notifyShaderTransformationChanged(){this._invalidateOctree(),this._requestUpdateCycle()}get _octree(){if(null==this._octreeCached){const e=this._instanceData,t=e.view?.state;if(!t)return null;this._octreeCached=new InstanceOctree_n(e,this.baseBoundingSphere);for(let r=0;r<e.capacity;++r)t.get(r)&InstanceData_S.ACTIVE&&this._octreeCached.addInstance(r)}return this._octreeCached}_invalidateOctree(){this._octreeCached=(0,maybe/* destroyMaybe */.pR)(this._octreeCached)}queryDepthRange(e){if(null==this._octree)return new DepthRange_t;const t=e.viewForward,r=this._octree.findClosest(t,Octree/* default */.A.DepthOrder.FRONT_TO_BACK,e.frustum),n=this._octree.findClosest(t,Octree/* default */.A.DepthOrder.BACK_TO_FRONT,e.frustum);if(null==r||null==n)return new DepthRange_t;const s=e.eye,a=this._instanceData.view;a.boundingSphere.getVec(r,LodRenderer_Q),(0,vec32.d)(LodRenderer_Q,LodRenderer_Q,s);const i=(0,vec32.e)(LodRenderer_Q,t)-LodRenderer_Q[3];a.boundingSphere.getVec(n,LodRenderer_Q),(0,vec32.d)(LodRenderer_Q,LodRenderer_Q,s);const o=(0,vec32.e)(LodRenderer_Q,t)+LodRenderer_Q[3];return new DepthRange_t(i,o)}_requestUpdateCycle(e=!1){this._updateCyclesWithStaticCamera=-1,this._cycleStartIndex=this._instanceIndex,e&&(this._needFullCycle=!0,this._context.requestRender())}_startUpdateCycle(){this._updateCyclesWithStaticCamera++,this._allRenderInstanceData.forEach((e=>e.forEach((e=>e.startUpdateCycle()))))}get running(){return this._instanceData.size>0&&this._updateCyclesWithStaticCamera<1}runTask(e){const{_enableLevelSelection:t,_camera:n,_levelSelector:a}=this;this._allRenderInstanceData.forEach((e=>e.forEach((e=>e.beginUpdate()))));const i=this._instanceData,o=i.view;let l=i.size;const c=i.capacity;let h=this._instanceIndex;const d=Math.ceil(c/500),{_highlightRenderInstanceDataMap:u}=this;for(let m=0;m<l&&!e.done;++m){h===this._cycleStartIndex&&this._startUpdateCycle();const m=o.state.get(h);let p=0;if(!(m&InstanceData_S.ALLOCATED)){h=h+1===c?0:h+1,l++;continue}const f=o.lodLevel.get(h);if(m&InstanceData_S.DEFAULT_ACTIVE&&this._defaultRenderInstanceData[f].freeTail(),m&InstanceData_S.HIGHLIGHT_ACTIVE){const e=i.geHighlightOptionsPrev(h);if(e){const t=u.get(e);if(!t)throw new core_Error/* default */.A("internal:lod-renderer","Internal error in lodRenderer");t[f].freeTail(),t.every((e=>e.isEmpty))&&(t.forEach((e=>e.destroy())),u.delete(e))}}if(m&InstanceData_S.REMOVE)i.freeInstance(h);else if(m&InstanceData_S.VISIBLE){let e=0;if(t&&(o.modelOrigin.getVec(h,LodRenderer_J),e=a.selectLevel(LodRenderer_J,i.getCombinedMedianScaleFactor(h),n)),p=m&~(InstanceData_S.ACTIVE|InstanceData_S.TRANSFORM_CHANGED),e>=0)if(m&InstanceData_S.HIGHLIGHT){const t=i.getHighlightName(h);if(t){const n=()=>{const e=this._createRenderInstanceDataArray();return e.forEach((e=>e.beginUpdate())),e},a=(0,MapUtils/* getOrCreateMapValue */.tE)(u,t,n);if(e>=a.length)throw new core_Error/* default */.A("internal:lod-renderer",`LodRenderer internal error - missing lodLevel ${e}`);LodRenderer_W(a[e],o,h)}p|=InstanceData_S.HIGHLIGHT_ACTIVE}else LodRenderer_W(this._defaultRenderInstanceData[e],o,h),p|=InstanceData_S.DEFAULT_ACTIVE;o.state.set(h,p),o.lodLevel.set(h,e)}else p=m&~(InstanceData_S.ACTIVE|InstanceData_S.TRANSFORM_CHANGED),o.state.set(h,p);if(null!=this._octreeCached){const e=!!(m&InstanceData_S.ACTIVE),t=!!(p&InstanceData_S.ACTIVE);!e&&t?this._octreeCached.addInstance(h):e&&!t?this._octreeCached.removeInstance(h):e&&t&&m&InstanceData_S.TRANSFORM_CHANGED&&(this._octreeCached.removeInstance(h),this._octreeCached.addInstance(h))}h=h+1===c?0:h+1,h%d===0&&e.madeProgress()}this._instanceIndex=h,this._allRenderInstanceData.forEach((e=>e.forEach((e=>e.endUpdate())))),this._context.requestRender()}_beginComponent(e,t,r){if(0===t.size)return null;const n=r.glMaterials.load(e.rctx,e.bind.slot,e.output);return n?.beginSlot(e.bind)}_renderComponent(e,t,r,n,s){if(!t)return;const{bind:a,rctx:i}=e;i.runAppleAmdDriverHelper();const o=i.bindTechnique(t,a,n.material.parameters,te);i.bindVAO(n.vao),t.ensureAttributeLocations(n.vao),debugFlags/* debugFlags */.b.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL&&e.output===ShaderOutput/* ShaderOutput */.V.Color&&(o.setUniform4fv("externalColor",LodRenderer_ee[Math.min(s,LodRenderer_ee.length-1)]),o.setUniform1i("colorMixMode",MaterialUtil/* colorMixModes */.Um.replace));const l=r.capacity,c=r.headIndex,h=r.tailIndex,d=r.firstIndex,u=this._glInstanceBufferLayout,m=(e,s)=>{(0,webgl_Util/* bindVertexBufferLayout */.yu)(i,DefaultVertexAttributeLocations/* Default3D */.D,r.buffer,u,e),i.drawArraysInstanced(t.primitiveType,0,n.vertexCount,s-e),(0,webgl_Util/* unbindVertexBufferLayout */.Hi)(i,DefaultVertexAttributeLocations/* Default3D */.D,r.buffer,u)};n.material.transparent&&null!=d?c>h?((0,Util/* assert */.vA)(d>=h&&d<=c,"invalid firstIndex"),m(d,c),m(h,d)):c<h&&(d<=c?((0,Util/* assert */.vA)(d>=0&&d<=c,"invalid firstIndex"),m(d,c),m(h,l),m(0,d)):((0,Util/* assert */.vA)(d>=h&&d<=l,"invalid firstIndex"),m(d,l),m(0,c),m(h,d))):c>h?m(h,c):c<h&&(m(0,c),m(h,l)),i.bindVAO(null)}};function LodRenderer_W(e,t,r){const n=e.allocateHead();LodRenderer_K(t,r,e.view,n)}function LodRenderer_K(e,t,r,n){(0,renderers_utils/* encodeDoubleVec3 */.Vk)(e.modelOrigin,t,r.modelOriginHi,r.modelOriginLo,n),r.model.copyFrom(n,e.model,t),r.modelNormal.copyFrom(n,e.modelNormal,t),e.color&&r.color&&r.color.copyFrom(n,e.color,t),e.objectAndLayerIdColor&&r.objectAndLayerIdColor&&r.objectAndLayerIdColor.copyFrom(n,e.objectAndLayerIdColor,t),e.featureAttribute&&r.featureAttribute&&r.featureAttribute.copyFrom(n,e.featureAttribute,t)}function LodRenderer_Y(e){let t=(0,InterleavedLayout/* newLayout */.BP)().vec3f(VertexAttribute/* VertexAttribute */.r.INSTANCEMODELORIGINHI).vec3f(VertexAttribute/* VertexAttribute */.r.INSTANCEMODELORIGINLO).mat3f(VertexAttribute/* VertexAttribute */.r.INSTANCEMODEL).mat3f(VertexAttribute/* VertexAttribute */.r.INSTANCEMODELNORMAL);return null!=e&&e.includes("featureAttribute")&&(t=t.vec4f(VertexAttribute/* VertexAttribute */.r.INSTANCEFEATUREATTRIBUTE)),null!=e&&e.includes("color")&&(t=t.vec4u8(VertexAttribute/* VertexAttribute */.r.INSTANCECOLOR)),null!=e&&e.includes("objectAndLayerIdColor")&&(t=t.vec4u8(VertexAttribute/* VertexAttribute */.r.INSTANCEOBJECTANDLAYERIDCOLOR)),t}(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],LodRenderer_k.prototype,"symbol",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],LodRenderer_k.prototype,"optionalFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],LodRenderer_k.prototype,"metadata",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],LodRenderer_k.prototype,"shaderTransformation",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],LodRenderer_k.prototype,"_instanceData",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],LodRenderer_k.prototype,"_cycleStartIndex",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],LodRenderer_k.prototype,"_enableLevelSelection",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],LodRenderer_k.prototype,"_updateCyclesWithStaticCamera",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],LodRenderer_k.prototype,"running",null),LodRenderer_k=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.3d.webgl-engine.lib.lodRendering.LodRenderer")],LodRenderer_k);const LodRenderer_J=(0,vec3f64/* create */.vt)(),LodRenderer_Q=(0,vec4f64/* create */.vt)(),LodRenderer_Z=(0,mat4f64/* create */.vt)(),LodRenderer_$=(0,vec3f64/* create */.vt)(),LodRenderer_X=(0,vec3f64/* create */.vt)(),LodRenderer_ee=[(0,vec4f64/* fromValues */.fA)(1,0,1,1),(0,vec4f64/* fromValues */.fA)(0,0,1,1),(0,vec4f64/* fromValues */.fA)(0,1,0,1),(0,vec4f64/* fromValues */.fA)(1,1,0,1),(0,vec4f64/* fromValues */.fA)(1,0,0,1)],te=new DefaultMaterialTechnique/* DefaultMaterialDrawParameters */.V;

;// ../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DObjectSymbolLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Graphics3DObjectSymbolLayer_me{constructor(e,t,s,r,i,o,a,n,l,c,h=null){this.lodResources=e,this.lodRenderer=t,this.stageResources=s,this.resourceSize=r,this.isEsriSymbolResource=i,this.isWosr=o,this.resourceBoundingBox=a,this.symbolSize=n,this.extentPadding=l,this.physicalBasedRenderingEnabled=c,this.pivotOffset=h}}class Graphics3DObjectSymbolLayer_pe extends Graphics3DSymbolLayer/* Graphics3DSymbolLayer */.U{getCachedSize(){const[e,t,s]=null!=this._resources?this._resources.symbolSize:[1,1,1];return{width:e,depth:t,height:s}}constructor(e,t,s,r){super(e,t,s,r,Graphics3DObjectSymbolLayer_ye(t)),this._resources=null,this._optionalFields=new Array,this._instanceIndexToGraphicUid=new Map,this._hasLoadedPBRTextures=!1,this._disposeResourceHandles=new Array,this.skipHighSymbolLodsChanged=!1,this.ensureDrapedStatus(!1),this._hasLoadedPBRTextures=s.physicalBasedRenderingEnabled}async doLoad(e){if(!this._drivenProperties.size){const e=(0,graphicUtils/* validateSymbolLayerSize */.Hj)(this.symbolLayer);if(e)throw new Error(e)}if(this._isPrimitive){const t=this.symbolLayer.resource,s=t&&(0,primitiveObjectSymbolUtils/* isValidPrimitive */.k)(t?.primitive)?t.primitive:ObjectSymbol3DLayerResource/* defaultPrimitive */.r;this._resources=await this._createResourcesForPrimitive(s,e)}else{const t=await webStyleUtils_r(this.symbol.styleOrigin),s=t?.href??this.symbolLayer.resource?.href;this._resources=await this._createResourcesForUrl(s,e)}this.layerOpacityChanged(),this.slicePlaneEnabledChanged(),this.physicalBasedRenderingChanged(),this.updateComplexity()}get extentPadding(){return null!=this._resources?this._resources.extentPadding:0}get _isPrimitive(){return null!=this._primitive}get lodRenderer(){return this._resources?.lodRenderer}get materials(){return this._resources?.stageResources.materials??[]}async _createResourcesForPrimitive(t,r){const i=this.symbolLayer,o=(0,aaBoundingBox/* create */.vt)((0,symbolLayerUtils3D/* objectSymbolLayerPrimitiveBoundingBox */.Fq)(t)),a=(0,vec3f64/* fromArray */.ci)((0,aaBoundingBox/* size */.Ej)(o)),n=(0,vec3f64/* fromArray */.ci)((0,symbolLayerUtils3D/* objectSymbolLayerSizeWithResourceSize */.Bb)(a,i)),c=(0,vec32.l)(n),h=!1,d=!1,m=i?.material,p={usePBR:this._context.physicalBasedRenderingEnabled,isSchematic:!0,mrrFactors:pbrUtils/* schematicMRRFactors */.Bt,ambient:vec3f64/* ONES */.Un,diffuse:vec3f64/* ONES */.Un,opacity:1,hasSlicePlane:this._context.slicePlaneEnabled,castShadows:i.castShadows,emissiveStrength:m?.emissive?.strength??0,emissiveSource:materialUtils/* EmissiveSourceMode */.YJ.Color,offsetTransparentBackfaces:!1,drivenOpacity:this.needsDrivenTransparentPass},y=!!p.usePBR,_=m?.color,g=this.symbol;if("point-3d"===g.type&&g.verticalOffset){const{screenLength:e,minWorldLength:t,maxWorldLength:r}=g.verticalOffset;p.verticalOffset={screenLength:(0,screenUtils/* pt2px */.Lz)(e),minWorldLength:t||0,maxWorldLength:null!=r?r:1/0},p.castShadows=!1}if(this._context.screenSizePerspectiveEnabled&&(p.screenSizePerspective=this._context.sharedResources.screenSizePerspectiveSettings),this._drivenProperties.color)p.externalColor=vec4f64/* ONES */.Un;else{const t=null!=_?this._drivenProperties.opacity?(0,vec4f64/* fromArray */.ci)([...Color/* default */.A.toUnitRGB(_),1]):Color/* default */.A.toUnitRGBA(_):this._drivenProperties.opacity?vec4f64/* ONES */.Un:vec4f64/* ZEROS */.uY;p.externalColor=t}this._fastUpdates=(0,FastSymbolUpdates/* initFastSymbolUpdatesState */.s_)(this._context.renderer,this._fastVisualVariableConvertOptions(o,n,a,null)),p.isInstanced=!0,this._fastUpdates?(Object.assign(p,this._fastUpdates.materialParameters),this._optionalFields.push(VertexAttribute/* VertexAttribute */.r.FEATUREATTRIBUTE)):this._hasPerInstanceColor()&&(p.hasInstancedColor=!0,this._optionalFields.push(VertexAttribute/* VertexAttribute */.r.COLOR)),(0,olidUtils/* olidEnabled */.E)()&&this._optionalFields.push(VertexAttribute/* VertexAttribute */.r.OLIDCOLOR);const R=new DefaultMaterial/* DefaultMaterial */.$U(p,this._context);R.setParameters({cullFace:Graphics3DObjectSymbolLayer_e(R.transparent)});const v=(0,primitiveObjectSymbolUtils/* primitiveLodResources */._)(t,R);if(!v)throw new Error(`Unknown object symbol primitive: ${t}`);const L=await this._createStageResources(v,y,r),w=await this._createLodRenderer(v,r);return new Graphics3DObjectSymbolLayer_me(v,w,L,a,h,d,o,n,c,y)}async _createResourcesForUrl(e,t){const r={isInstanced:!0,hasSlicePlane:this._context.slicePlaneEnabled,castShadows:this.symbolLayer.castShadows},i={spherical:this._context.spherical,materialParameters:r,streamDataRequester:this._context.streamDataRequester,cache:this._context.sharedResources.objectResourceCache,compressionOptions:{compressionTracker:this._context.compressionTracker,compressionCallback:()=>this.updateComplexity()}};this._fastUpdates=(0,FastSymbolUpdates/* initFastSymbolUpdatesState */.s_)(this._context.renderer,this._fastVisualVariableConvertOptions(null,null,null,null)),this._fastUpdates?(Object.assign(i.materialParameters,this._fastUpdates.materialParameters),this._optionalFields.push(VertexAttribute/* VertexAttribute */.r.FEATUREATTRIBUTE)):this._hasPerInstanceColor()&&(i.materialParameters.hasInstancedColor=!0,this._optionalFields.push(VertexAttribute/* VertexAttribute */.r.COLOR)),(0,olidUtils/* olidEnabled */.E)()&&this._optionalFields.push(VertexAttribute/* VertexAttribute */.r.OLIDCOLOR);const o=this.symbol;if("point-3d"===o.type&&o.verticalOffset){const{screenLength:e,minWorldLength:t,maxWorldLength:r}=o.verticalOffset;i.materialParameters.verticalOffset={screenLength:(0,screenUtils/* pt2px */.Lz)(e),minWorldLength:t||0,maxWorldLength:null!=r?r:1/0},i.materialParameters.castShadows=!1}const a=this._context.physicalBasedRenderingEnabled;i.signal=t,i.usePBR=a,i.skipHighLods=this._context.skipHighSymbolLods;const n=await (0,objectResourceUtils.fetch)(e,i),c=n.isEsriSymbolResource,h=n.isWosr,d=s(n.lods),m=this._context,p=this.symbolLayer.material,f=this._getExternalColorParameters(p),y=this.needsDrivenTransparentPass,_=d.getMaterials();_.forEach((e=>{e.setParameters({...f,drivenOpacity:y}),m.screenSizePerspectiveEnabled&&e.setParameters({screenSizePerspective:m.sharedResources.screenSizePerspectiveSettings})}));const g=n.referenceBoundingBox,b=(0,vec3f64/* fromArray */.ci)((0,aaBoundingBox/* size */.Ej)(g)),x=(0,vec3f64/* fromArray */.ci)(d.levels[0].pivotOffset),P=(0,vec3f64/* fromArray */.ci)((0,symbolLayerUtils3D/* objectSymbolLayerSizeWithResourceSize */.Bb)(b,this.symbolLayer)),R=(0,vec32.l)(P),v=this._fastUpdates;(0,FastSymbolUpdates/* updateFastSymbolUpdatesState */.J_)(v,this._context.renderer,this._fastVisualVariableConvertOptions(g,P,b,x))&&_.forEach((e=>e.setParameters(v.materialParameters)));const L=await this._createStageResources(d,a,t),S=await this._createLodRenderer(d,t);return new Graphics3DObjectSymbolLayer_me(d,S,L,b,c,h,g,P,R,a,x)}_addDisposeResource(e){this._disposeResourceHandles.push(e)}async _createStageResources(e,s,r){const i=this._context.stage,o=e.getMaterials();s!==this._context.physicalBasedRenderingEnabled&&this.physicalBasedRenderingChanged();const a=e.getTextures();i.addTextures(a),this._addDisposeResource((()=>{a.forEach((e=>e.unload())),i.removeTextures(a)})),await Promise.all(a.map((e=>this._context.stage.schedule((()=>e.load(i.renderView.renderingContext)),r)))),(0,promiseUtils/* throwIfAborted */.Te)(r);const n=e.getEngineGeometries();return{materials:o,textures:a,geometries:n}}async _createLodRenderer(e,t){const s=this._context.stage,r={layerViewUid:this._context.layerViewUid,graphicUid:e=>this._instanceIndexToGraphicUid.get(e),notifyGraphicGeometryChanged:e=>this._context.notifyGraphicGeometryChanged(this._instanceIndexToGraphicUid.get(e)),notifyGraphicVisibilityChanged:e=>this._context.notifyGraphicVisibilityChanged(this._instanceIndexToGraphicUid.get(e))},i=this._fastUpdates,o=i?{applyTransform:(e,t,s)=>{e.getFeatureAttribute(t,Pe),(0,mat4/* copy */.C)(s,(0,FastSymbolUpdates/* evaluateModelTransform */.b3)(i.materialParameters,Pe,s))},scaleFactor:(e,t,s)=>{t.getFeatureAttribute(s,Pe),(0,FastSymbolUpdates/* evaluateModelTransformScale */.VC)(e,i.materialParameters,Pe)}}:null,n=new LodRenderer_k({symbol:e,optionalFields:this._optionalFields,metadata:r,shaderTransformation:o},this._context.scheduler);return n.slicePlaneEnabled=this._context.slicePlaneEnabled,this._addDisposeResource((()=>{s.removeRenderPlugin(n),n.destroy()})),await s.addRenderPlugin(n,t),n}_getExternalColorParameters(t){const s={};if(this._drivenProperties.color)s.externalColor=vec4f64/* ONES */.Un;else if(null!=t?.color){const r=Color/* default */.A.toUnitRGBA(t.color);this._drivenProperties.opacity&&(r[3]=1),s.externalColor=r}else s.externalColor=vec4f64/* ONES */.Un,s.colorMixMode="ignore";return s.emissiveStrength=t?.emissive?.strength??1,s.emissiveSource=(0,materialUtils/* getEmissiveMode */.rs)(t?.emissive?.source??"emissive"),s}destroy(){super.destroy(),this._cleanupResources()}_cleanupResources(){this._disposeResourceHandles.forEach((e=>e())),this._disposeResourceHandles.length=0,this._resources=null}createGraphics3DGraphic(e){const t=e.graphic;if(!this._validateGeometry(t.geometry))return null;const s=(0,pointUtils/* placePointOnGeometry */.ZX)(t.geometry);if(null==s)return this.logger.warn(`unsupported geometry type for object symbol: ${t.geometry.type}`),null;const r=this.setGraphicElevationContext(t),i=e.renderingInfo;return this._createAs3DShape(t,s,i,r,t.uid)}notifyDestroyGraphicLayer(e){this._instanceIndexToGraphicUid.delete(e.instanceIndex)}graphicLayerToGraphicId(){return 0}layerOpacityChanged(){if(null==this._resources)return;const e=this._getLayerOpacity(),t=this._resources.stageResources.materials;for(let s=0;s<t.length;s++){const r=t[s];r.setParameters({layerOpacity:e}),this._isPrimitive&&r.setParameters({cullFace:Graphics3DObjectSymbolLayer_e(r.transparent)})}}layerElevationInfoChanged(e,t){return this.updateGraphics3DGraphicElevationInfo(e,t,elevationAlignmentUtils/* needsElevationUpdates3D */.Kf)}slicePlaneEnabledChanged(){if(null==this._resources)return!0;this._resources.lodRenderer.slicePlaneEnabled=this._context.slicePlaneEnabled;for(const e of this._resources.stageResources.materials)e.setParameters({hasSlicePlane:this._context.slicePlaneEnabled});return!0}physicalBasedRenderingChanged(){if(null==this._resources)return!0;const{stageResources:e,isWosr:t}=this._resources;for(const s of e.materials)this._isPrimitive?s.setParameters({usePBR:this._context.physicalBasedRenderingEnabled,isSchematic:!0}):t||s.setParameters({usePBR:this._context.physicalBasedRenderingEnabled,isSchematic:!1});return!1!==this._hasLoadedPBRTextures||!0!==this._context.physicalBasedRenderingEnabled||(this._hasLoadedPBRTextures=!0,!1)}applyRendererDiff(e,t){if(null==this._resources)return interfaces/* ApplyRendererDiffResult */.w.RecreateSymbol;const{stageResources:{materials:s},lodRenderer:r,resourceBoundingBox:i,symbolSize:o,resourceSize:a,pivotOffset:n}=this._resources;for(const l in e.diff){if("visualVariables"!==l)return interfaces/* ApplyRendererDiffResult */.w.RecreateSymbol;if(!(0,FastSymbolUpdates/* updateFastSymbolUpdatesState */.J_)(this._fastUpdates,t,this._fastVisualVariableConvertOptions(i,o,a,n)))return interfaces/* ApplyRendererDiffResult */.w.RecreateSymbol;for(const e of s)e.setParameters(this._fastUpdates.materialParameters);r.notifyShaderTransformationChanged()}return interfaces/* ApplyRendererDiffResult */.w.FastUpdate}computeComplexity(){if(null==this._resources)return super.computeComplexity();const e=this._resources.lodResources,t=(0,defaultSymbolComplexity/* estimateNumVerticesForLods */.pg)(e.levels),s=e.computeUsedMemory(),r={...(0,defaultSymbolComplexity/* defaultSymbolLayerMemoryComplexity */.GI)(this.symbol,this.symbolLayer),resourceBytes:s};return new SymbolComplexity/* SymbolComplexity */.rz({verticesPerFeature:t,memory:r})}_hasLodRenderer(){return null!=this._resources}_createAs3DShape(e,t,s,r,i){if(!this._hasLodRenderer()||null==this._resources)return null;const o=this.getFastUpdateAttrValues(e),a=this._context.clippingExtent;if((0,projectPointToVector/* projectPointToVector */.g)(t,Graphics3DObjectSymbolLayer_ge,this._context.elevationProvider.spatialReference),null!=a&&!(0,aaBoundingBox/* containsPoint */.Uc)(a,Graphics3DObjectSymbolLayer_ge))return null;const n=Graphics3DObjectSymbolLayer_fe(r),l=this._computeGlobalTransform(t,r,Graphics3DObjectSymbolLayer_xe,Re),c=this._computeLocalTransform(this._resources,this.symbolLayer,s,Graphics3DObjectSymbolLayer_be),h=this._resources.lodRenderer.instanceData,d=h.addInstance();if(this._instanceIndexToGraphicUid.set(d,i),h.setLocalTransform(d,c,!1),h.setGlobalTransform(d,l),o&&h.setFeatureAttribute(d,o),null==this._fastUpdates&&this._hasPerInstanceColor()){const e=this._getVertexOpacityAndColor(s,this._getFallbackOpacityAndColor(),255);h.setColor(d,e)}const m=this._context.stage.renderView.olidRenderHelper;if(m){const e=m.getObjectAndLayerIdColor({graphicUid:i,layerViewUid:this._context.layerViewUid});h.setObjectAndLayerIdColor(d,e)}const p=new Graphics3DLodInstanceGraphicLayer_u(this,d,ElevationAligners/* perLodInstanceElevationAligner */.Jf,r,this._context.stage.view.state.highlightOrderMap);return n&&(p.alignedSampledElevation=Re.sampledElevation),p.needsElevationUpdates=(0,elevationAlignmentUtils/* needsElevationUpdates3D */.Kf)(r.mode),(0,pointUtils/* extendPointGraphicElevationContext */.d2)(p,t,this._context.elevationProvider),p}_computeGlobalTransform(e,t,s,r){return (0,elevationAlignmentUtils/* evaluateElevationInfoAtPoint */.sE)(e,this._context.elevationProvider,t,this._context.renderCoordsHelper,r),Graphics3DObjectSymbolLayer_ge[0]=e.x,Graphics3DObjectSymbolLayer_ge[1]=e.y,Graphics3DObjectSymbolLayer_ge[2]=r.z,(0,computeTranslationToOriginAndRotation/* computeTranslationToOriginAndRotation */.l)(e.spatialReference,Graphics3DObjectSymbolLayer_ge,s,this._context.renderCoordsHelper.spatialReference),s}_computeLocalTransform(e,t,s,i){return (0,mat4/* identity */.D_)(i),this._applyObjectRotation(s,!1,i),this._applyObjectRotation(t,!0,i),this._applyObjectScale(e,s,i),this._applyAnchor(e,t,i),i}_applyObjectScale(e,t,s){if(this._fastUpdates?.requiresShaderTransformation)return;const r=this._drivenProperties.size&&t.size?t.size:e.symbolSize,o=(0,graphicUtils/* computeObjectScale */.pW)(r,e.symbolSize,e.resourceSize,this._context.renderCoordsHelper.unitInMeters);1===o[0]&&1===o[1]&&1===o[2]||(0,mat4/* scale */.hs)(s,s,o)}prepareSymbolLayerPatch(e){if("partial"!==e.diff.type)return;const t=e.diff.diff;this._preparePatchTransform(e,t),this._preparePatchColor(e,t)}updateGeometry(e,t){if(null==this._resources)return!0;const s=t&&(0,pointUtils/* placePointOnGeometry */.ZX)(t);if(null==s)return!1;const r=this.getGeometryElevationMode(t);return e.elevationContext.mode===r&&(this._computeGlobalTransform(s,e.elevationContext,Graphics3DObjectSymbolLayer_xe,Re),Graphics3DObjectSymbolLayer_fe(e.elevationContext)&&(e.alignedSampledElevation=Re.sampledElevation),this._resources.lodRenderer.instanceData.setGlobalTransform(e.instanceIndex,Graphics3DObjectSymbolLayer_xe,!0),(0,pointUtils/* extendPointGraphicElevationContext */.d2)(e,s,this._context.elevationProvider),!0)}_preparePatchTransform(e,t){if(!(t.heading||t.tilt||t.roll||t.width||t.height||t.depth||t.anchor||t.anchorPosition))return;if(null==this._resources)return;const s=(e,t,s)=>(null!=e&&"complete"===e.type?e.newValue:t)??s,r=s(t.heading,this.symbolLayer.heading,0),i=s(t.tilt,this.symbolLayer.tilt,0),o=s(t.roll,this.symbolLayer.roll,0),a=s(t.width,this.symbolLayer.width,void 0),n=s(t.height,this.symbolLayer.height,void 0),l=s(t.depth,this.symbolLayer.depth,void 0),c=s(t.anchor,this.symbolLayer.anchor,void 0),h=s(t.anchorPosition,this.symbolLayer.anchorPosition,void 0);delete t.heading,delete t.tilt,delete t.roll,delete t.width,delete t.height,delete t.depth,delete t.anchor,delete t.anchorPosition;const d={heading:r,tilt:i,roll:o,anchor:c,anchorPosition:h},m=this._resources;this.loadStatus===Loadable/* LoadStatus */.P.LOADED&&e.symbolLayerStatePatches.push((()=>{m.symbolSize=(0,vec3f64/* fromArray */.ci)((0,symbolLayerUtils3D/* objectSymbolLayerSizeWithResourceSize */.Bb)(m.resourceSize,{width:a,height:n,depth:l,isPrimitive:this._isPrimitive}))})),e.graphics3DGraphicPatches.push((({instanceIndex:e},t)=>{const s=this._computeLocalTransform(m,d,t,Graphics3DObjectSymbolLayer_be);m.lodRenderer.instanceData.setLocalTransform(e,s,!0)}))}_preparePatchColor(t,s){if(!s.material||"partial"!==s.material.type)return;const r=s.material.diff;if(!r.color||"complete"!==r.color.type||null==r.color.newValue||null==r.color.oldValue)return;const i=r.color.newValue,o=null!=i?Color/* default */.A.toUnitRGBA(i):vec4f64/* ONES */.Un;delete r.color;const a=this._resources;if(null==a)return;const n=this._isPrimitive;t.graphics3DGraphicPatches.push((({instanceIndex:e})=>{if(this._hasPerInstanceColor())a.lodRenderer.instanceData.setColor(e,o);else{const e={externalColor:o};for(const t of a.stageResources.materials)t.setParameters(e),n&&t.setParameters({cullFace:Graphics3DObjectSymbolLayer_e(t.transparent)})}}))}_applyObjectRotation(e,t,s){if(!this._fastUpdates?.requiresShaderTransformation||!t)return (0,graphicUtils/* computeObjectRotation */.$2)(e.heading,e.tilt,e.roll,s)}_applyAnchor(e,t,s){if(this._fastUpdates?.requiresShaderTransformation)return;const r=Graphics3DObjectSymbolLayer_ue(e.resourceBoundingBox,e.pivotOffset,t);r&&(0,mat4/* translate */.Tl)(s,s,r)}_hasPerInstanceColor(){return this._drivenProperties.color||this._drivenProperties.opacity}_fastVisualVariableConvertOptions(e,t,s,r){const i=null!=e?(0,vec3f64/* fromArray */.ci)((0,aaBoundingBox/* size */.Ej)(e)):vec3f64/* ONES */.Un,o=null!=e?Graphics3DObjectSymbolLayer_ue(e,r,this.symbolLayer):vec3f64/* ZEROS */.uY,a=this._context.renderCoordsHelper.unitInMeters,n=(0,graphicUtils/* computeObjectScale */.pW)(null!=t?t:void 0,t,s,a),l=(0,vec3f64/* fromValues */.fA)(this.symbolLayer.tilt||0,this.symbolLayer.roll||0,this.symbolLayer.heading||0);return new FastSymbolUpdates/* ConvertOptions */.wI({supports:{size:!0,color:!0,rotation:!0,opacity:!1},modelSize:i,symbolSize:t??vec3f64/* ONES */.Un,unitInMeters:a,anchor:o,scale:n,rotation:l,fallbackColor:this._getFallbackOpacityAndColor(),fallbackSize:n})}get _primitive(){const{resource:e}=this.symbolLayer;return null!=e?.href?null:e?.primitive??ObjectSymbol3DLayerResource/* defaultPrimitive */.r}_getFallbackOpacityAndColor(){const t=this.symbolLayer.material?.color;if(null==t){return null==this._primitive?vec4f64/* ONES */.Un:vec4f64/* ZEROS */.uY}return Color/* default */.A.toUnitRGBA(t)}}function Graphics3DObjectSymbolLayer_ue(e,t,s){const r=(0,vec3f64/* create */.vt)();switch(s.anchor){case"center":(0,vec32.c)(r,(0,aaBoundingBox/* center */.gX)(e)),(0,vec32.u)(r,r);break;case"top":{const t=(0,aaBoundingBox/* center */.gX)(e);(0,vec32.i)(r,-t[0],-t[1],-e[5]);break}case"bottom":{const t=(0,aaBoundingBox/* center */.gX)(e);(0,vec32.i)(r,-t[0],-t[1],-e[2]);break}case"relative":{const t=(0,aaBoundingBox/* center */.gX)(e),i=(0,aaBoundingBox/* size */.Ej)(e),o=s.anchorPosition,a=o?(0,vec3f64/* fromValues */.fA)(o.x,o.y,o.z):vec3f64/* ZEROS */.uY;(0,vec32.C)(r,i,a),(0,vec32.f)(r,r,t),(0,vec32.u)(r,r);break}default:null!=t?(0,vec32.u)(r,t):(0,vec32.c)(r,vec3f64/* ZEROS */.uY)}return r}function Graphics3DObjectSymbolLayer_fe(e){return"absolute-height"!==e.mode}function Graphics3DObjectSymbolLayer_ye(e){return 1===(e.material?.color?.a??1)&&null==e.resource?.href}function Graphics3DObjectSymbolLayer_e(e){return e?basicInterfaces/* CullFaceOptions */.s2.None:basicInterfaces/* CullFaceOptions */.s2.Back}const Graphics3DObjectSymbolLayer_ge=(0,vec3f64/* create */.vt)(),Graphics3DObjectSymbolLayer_be=(0,mat4f64/* create */.vt)(),Graphics3DObjectSymbolLayer_xe=(0,mat4f64/* create */.vt)(),Pe=(0,vec4f64/* create */.vt)(),Re=new elevationAlignmentUtils/* SampleElevationInfo */.Uk;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DPathSymbolLayerConstants.js
var Graphics3DPathSymbolLayerConstants = __webpack_require__(59574);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/memoryEstimations.js
var memoryEstimations = __webpack_require__(4754);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/typedArrayUtil.js
var typedArrayUtil = __webpack_require__(86942);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Path.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Path_f{constructor(t,i,e,s,o){this.vertices=t,this.positionsES=i,this.offset=s,this.positions=o;const h=t.length,r=Math.floor(h/2),f=this.offset+3*r,g=e[f],v=e[f+1],c=e[f+2];this.origin=(0,vec3f64/* fromValues */.fA)(g,v,c);const l=this.offset+3*h;for(let n=this.offset;n<l;n+=3)o[n]=e[n]-g,o[n+1]=e[n+1]-v,o[n+2]=e[n+2]-c;this.updatePathVertexInformation()}get usedMemory(){return this._getSharedBufferSliceMemory(this.positions)}_getSharedBufferSliceMemory(o){return (0,typedArrayUtil/* isTypedArray */.iu)(o)?(0===this.offset?memoryEstimations/* baseTypedArrayMemory */.i5:0)+3*this.vertices.length*o.BYTES_PER_ELEMENT:(0===this.offset?memoryEstimations/* baseArrayMemory */.ez:0)+3*this.vertices.length*memoryEstimations/* estimateNumberMemory */.RS}updatePathVertexInformation(){const t=this.vertices.length,i=this.vertices[0];let e=this.offset;const s=this.positions;i.vRight[0]=s[e+3]-s[e],i.vRight[1]=s[e+4]-s[e+1],i.vRight[2]=s[e+5]-s[e+2],e+=3;let n=(0,vec32.l)(i.vRight);i.vMinSiblingLength=n,(0,vec32.n)(i.vRight,i.vRight);let f=i;for(let g=1;g<t;++g){const i=this.vertices[g];if(i.vLeft=f.vRight,g<t-1){i.vRight[0]=s[e+3]-s[e],i.vRight[1]=s[e+4]-s[e+1],i.vRight[2]=s[e+5]-s[e+2];const t=(0,vec32.l)(i.vRight);i.vMinSiblingLength=Math.min(n,t),n=t,(0,vec32.n)(i.vRight,i.vRight)}else (0,vec32.c)(i.vRight,i.vLeft),i.vMinSiblingLength=n;f=i,e+=3}}}

;// ../node_modules/@arcgis/core/geometry/support/HalfFloatArray.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function HalfFloatArray_n(n,a=!1){return n<=typedArrayUtil/* nativeArrayMaxSize */.y9?a?new Array(n).fill(0):new Array(n):(0,float16/* makeFloat16Array */.Bg)(n)}function HalfFloatArray_a(n){return Array.isArray(n)?n.length<r?n:t(n):n.length<r?Array.from(n):n}function HalfFloatArray_e(r,t,n){return Array.isArray(r)?r.slice(t,t+n):r.subarray(t,t+n)}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/ShortArray.js
var ShortArray = __webpack_require__(27841);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/PathBuilder.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class PathBuilder_h{constructor(s,o,h,n,a,p={}){this.path=s,this.profile=o,this.extruder=h,this.startCap=n,this.endCap=a,this.options=p,this._extrusionVertexCount=0;const l=this.path.vertices.length-2;this.numExtrusionProfiles=h.numProfilesPerJoin()*l+2,this.numVerticesTotal=o.vertices.length*this.numExtrusionProfiles,this.startCap.vertexBufferStart=this.numVerticesTotal;const u=this.startCap.numVertices;this.numVerticesTotal+=u,this.endCap.vertexBufferStart=this.numVerticesTotal;const x=this.endCap.numVertices;this.numVerticesTotal+=x,this.pathVertexData=(0,Indices/* newIntArray */.JH)(1*this.numVerticesTotal),this.profileRightAxes=(0,ShortArray/* newShortArray */.O)(2*this.numVerticesTotal),this.profileUpAxes=(0,ShortArray/* newShortArray */.O)(2*this.numVerticesTotal),this.profileVertexAndNormals=HalfFloatArray_n(4*this.numVerticesTotal),this.profileAuxData=HalfFloatArray_n(3*this.numVerticesTotal),this.positions=(0,FloatArray/* floatSubArray */.AK)(s.positions,s.offset,3*s.vertices.length),this._rebuildGeometry(),this._buildTopology()}emitVertex(t,e,i,s,r){let h=4*this._extrusionVertexCount;if(this.profileVertexAndNormals[h]=i[0],this.profileVertexAndNormals[h+1]=i[1],this.profileVertexAndNormals[h+2]=s[0],this.profileVertexAndNormals[h+3]=s[1],this.pathVertexData[this._extrusionVertexCount]=t,h=3*this._extrusionVertexCount,r){const e=this.path.vertices[t],i=e.maxStretchDistance;this.profileAuxData[h]=e.rotationRight[0]*i,this.profileAuxData[h+1]=e.rotationRight[1]*i}else this.profileAuxData[h]=this.profileAuxData[h+1]=0;this.profileAuxData[h+2]=0,(0,Normals/* compressNormal */.aT)(this.profileRightAxes,this._extrusionVertexCount,e.right[0],e.right[1],e.right[2]),(0,Normals/* compressNormal */.aT)(this.profileUpAxes,this._extrusionVertexCount,e.up[0],e.up[1],e.up[2]),++this._extrusionVertexCount}emitCapVertex(t,e,i,s,r,h){let n=4*this._extrusionVertexCount;this.profileVertexAndNormals[n]=i[0],this.profileVertexAndNormals[n+1]=i[1],this.profileVertexAndNormals[n+2]=s[0],this.profileVertexAndNormals[n+3]=s[1],n=3*this._extrusionVertexCount,this.profileAuxData[n]=r,this.profileAuxData[n+1]=h,this.profileAuxData[n+2]=1,(0,Normals/* compressNormal */.aT)(this.profileRightAxes,this._extrusionVertexCount,e.right[0],e.right[1],e.right[2]),(0,Normals/* compressNormal */.aT)(this.profileUpAxes,this._extrusionVertexCount,e.up[0],e.up[1],e.up[2]),this.pathVertexData[this._extrusionVertexCount]=t,++this._extrusionVertexCount}_rebuildGeometry(){this._extrusionVertexCount=0;const{positions:e,offset:i,vertices:s}=this.path;this.positions=(0,FloatArray/* floatSubArray */.AK)(e,i,3*s.length);let r=0;const o=(t,e,i,s,o)=>this.emitCapVertex(r,t,e,i,s,o),h=(t,e,i,s)=>this.emitVertex(r,t,e,i,s);for(this.startCap.rebuildConnectingProfileGeometry(s[r],this.profile,o),r=1;r<s.length-1;++r)this.extruder.extrude(s[r],this.profile,h);this.endCap.rebuildConnectingProfileGeometry(s[r],this.profile,o),r=0,this.startCap.rebuildCapGeometry(s[r],o),r=s.length-1,this.endCap.rebuildCapGeometry(s[r],o)}_buildTopology(){const t=this.profile.vertices.length,e=this.profile.numSegments,i=this.numExtrusionProfiles-1;let r=3*(2*(e*i));this.startCap.indexBufferStart=r,this.startCap.firstProfileVertexIndex=0,r+=this.startCap.numIndices,this.endCap.indexBufferStart=r,this.endCap.firstProfileVertexIndex=t*(this.numExtrusionProfiles-1);const o=new Array,h=new Array,n=(t,e,i)=>{o.push(t),o.push(e),o.push(i),h.push(this.pathVertexData[t]),h.push(this.pathVertexData[e]),h.push(this.pathVertexData[i])};for(let s=0;s<e;++s){const e=this.profile.indices[2*s],r=this.profile.indices[2*s+1];for(let s=0;s<i;++s){const i=s*t+e,o=(s+1)*t+r,h=s*t+r;n(i,(s+1)*t+e,o),n(i,o,h)}}this.startCap.buildTopology(this.path.vertices[0],n),this.endCap.buildTopology(this.path.vertices[this.path.vertices.length-1],n),this.vertexIndices=(0,Indices/* compactIndices */.Dg)(o),this.pathVertexIndices=(0,Indices/* compactIndices */.Dg)(h)}onPathChanged(){this._rebuildGeometry()}}

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/PathCapBuilder.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class o{rebuildConnectingProfileGeometry(e,t,s){for(let i=0;i<t.vertices.length;++i)s(e.frame,t.vertices[i],t.normals[i],0,0)}}class PathCapBuilder_l extends o{constructor(){super(),this.numVertices=0,this.numIndices=0}rebuildCapGeometry(){}buildTopology(){}}class PathCapBuilder_f extends o{constructor(e,t=0,s=!1){super(),this.profile=e,this.profilePlaneOffset=t,this.flip=s}get numVertices(){return this.profile.vertices.length}get numIndices(){return 3*this.profile.numSegments}rebuildConnectingProfileGeometry(e,t,s){const i=this.profilePlaneOffset;for(let r=0;r<t.vertices.length;++r)s(e.frame,t.vertices[r],t.normals[r],i,0)}rebuildCapGeometry(t,s){const i=this.profile,r=this.flip?1:-1,n=this.profilePlaneOffset,o=PathCapBuilder_m;(0,vec2/* set */.hZ)(o,0,0);for(let e=0;e<i.vertices.length;++e)s(t.frame,i.vertices[e],o,n,r)}buildTopology(e,t){const s=this.profile,i=this.vertexBufferStart+s.indices[0];for(let r=1;r<s.numSegments;++r){const e=s.indices[2*r],n=s.indices[2*r+1],o=this.vertexBufferStart+e,l=this.vertexBufferStart+n;this.flip?t(l,o,i):t(i,o,l)}}}class PathCapBuilder_h extends o{constructor(e){super(),this.flip=!1,this.sign=0,this.breakNormals=!1,this.numSegments=3,this.profile=e.profile,this.flip=e.flip,this.sign=this.flip?1:-1,this.breakNormals=e.breakNormals,this.numSegments=e.subdivisions}get numVertices(){let e=this.profile.vertices.length*(this.numSegments-1)+this.profile.poles.length;return this.breakNormals&&(e+=this.profile.vertices.length),e}get numIndices(){let e=0;const t=this.profile;e+=2*t.numSegments*(this.numSegments-1);for(let s=0;s<t.numSegments;++s){const i=t.indices[2*s],r=t.indices[2*s+1];t.poleIndices[i]===t.poleIndices[r]?e+=1:e+=2}return 3*e}rebuildCapGeometry(n,o){const l=this.profile,f=n.frame,h=.5*this.sign,p=PathCapBuilder_c,a=PathCapBuilder_m;(0,vec2/* set */.hZ)(a,0,0);for(const e of l.poles)e.normal?o(f,e.position,e.normal,h,0):o(f,e.position,a,h,this.sign);if(this.breakNormals)for(let e=0;e<l.vertices.length;++e)o(f,l.vertices[e],l.normals[e],0,0);for(let e=0;e<this.numSegments-1;++e){const n=(1-(e+1)/this.numSegments)*Math.PI*.5,c=Math.sin(n),m=Math.cos(n);for(let e=0;e<l.vertices.length;++e){const n=l.poles[l.poleIndices[e]];(0,vec2/* subtract */.Re)(p,l.vertices[e],n.position),(0,vec2/* scale */.hs)(p,p,c),n.normal?((0,vec2/* add */.WQ)(p,p,n.position),o(f,p,n.normal,h*m,0)):((0,vec2/* normalize */.S8)(a,p),(0,vec2/* scale */.hs)(a,a,c),(0,vec2/* add */.WQ)(p,p,n.position),o(f,p,a,h*m,this.sign*m))}}}buildTopology(e,t){const s=this.profile,i=this.breakNormals?this.vertexBufferStart+s.poles.length:this.firstProfileVertexIndex,r=this.breakNormals?this.vertexBufferStart+s.poles.length+s.vertices.length:this.vertexBufferStart+s.poles.length;for(let n=0;n<s.numSegments;++n){const e=s.indices[2*n],o=s.indices[2*n+1],l=this.vertexBufferStart+s.poleIndices[e],f=this.vertexBufferStart+s.poleIndices[o];let h=i+e,c=i+o;for(let i=0;i<this.numSegments-1;++i){const n=r+i*s.vertices.length+e,l=r+i*s.vertices.length+o;this.flip?(t(n,c,h),t(c,n,l)):(t(h,c,n),t(l,n,c)),h=n,c=l}this.flip?(t(l,c,h),l!==f&&t(l,f,c)):(t(h,c,l),l!==f&&t(c,f,l))}}}const PathCapBuilder_c=(0,vec2f64/* create */.vt)(),PathCapBuilder_m=(0,vec2f64/* create */.vt)();

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/PathExtruder.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class PathExtruder_n{}class PathExtruder_c{numProfilesPerJoin(){return 1}extrude(t,e,r){for(let s=0;s<e.vertices.length;++s)r(t.frame,e.vertices[s],e.normals[s],!1)}}class PathExtruder_a{constructor(t,e){this.cutoffAngle=t,this.numBendSubdivisions=e}numProfilesPerJoin(){return this.numBendSubdivisions+1}extrude(e,s,i){const o=PathExtruder_h,{rotationAngle:n,rotationRight:c,frame:a}=e;if(Math.abs(n)>=this.cutoffAngle){const l=e.rotationFrameUp;for(let h=0;h<this.numBendSubdivisions+1;++h){(0,mat4/* fromRotation */.$0)(PathExtruder_u,.5*-n+h*n/this.numBendSubdivisions,l),PathExtruder_m(o,a,PathExtruder_u);for(let t=0;t<s.vertices.length;++t){if((0,vec2/* dot */.Om)(s.vertices[t],c)*n>=0)i(o,s.vertices[t],s.normals[t],!1);else{i(a,e.applyMiterStretch(PathExtruder_f,s.vertices[t]),s.normals[t],!0)}}}}else for(let t=0;t<this.numBendSubdivisions+1;++t)for(let o=0;o<s.vertices.length;++o){const t=(0,vec2/* dot */.Om)(s.vertices[o],c)*n>=0;i(a,e.applyMiterStretch(PathExtruder_f,s.vertices[o]),s.normals[o],!t)}}}class PathExtruder_l{constructor(){this.up=(0,vec3f64/* create */.vt)(),this.right=(0,vec3f64/* create */.vt)()}}function PathExtruder_m(t,e,r){(0,vec32.t)(t.up,e.up,r),(0,vec32.t)(t.right,e.right,r)}const PathExtruder_f=(0,vec2f64/* create */.vt)(),PathExtruder_u=(0,mat4f64/* create */.vt)(),PathExtruder_h=new PathExtruder_l;

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/PathGeometry.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class PathGeometry_e extends Geometry/* Geometry */.V{constructor(t,e,o,s,n,i){super(t,e,null,IntersectableGeometry/* GeometryType */.d.Mesh,i),this.path=o,this.geometrySR=s,this.stencilWidth=n}}var PathGeometry_o;function PathGeometry_s(t){return"path"in t}!function(t){t[t.World=0]="World",t[t.Path=1]="Path"}(PathGeometry_o||(PathGeometry_o={}));

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/RayIntersections.js
var RayIntersections = __webpack_require__(6833);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/PathGeometryData.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class PathGeometryData_x{constructor(t){this.builder=t}onPathChanged(t){this.builder.onPathChanged()}}class PathGeometryData_T extends PathGeometryData_x{constructor(t){super(t),this.color=(0,vec4f64/* fromValues */.fA)(255,255,255,255),this._size=(0,vec2f64/* create */.vt)(),this.positions=(0,FloatArray/* newFloatArray */.oe)(3*this.builder.numVerticesTotal),this.normals=new Int16Array(2*this.builder.numVerticesTotal)}bakeVertexColors(t){this.color[0]=255*t[0],this.color[1]=255*t[1],this.color[2]=255*t[2],this.color[3]=255*(t.length>3?t[3]:1)}bake(a){(0,vec2/* copy */.C)(this._size,a);const{numVerticesTotal:c,pathVertexData:p,positions:m,profileRightAxes:u,profileUpAxes:f,profileVertexAndNormals:d,profileAuxData:A}=this.builder;for(let t=0;t<c;++t){let c=p[t];c*=3;const v=PathGeometryData_w;let I=0,x=0;const T=(0,Normals/* decompressNormal */.Tz)(PathGeometryData_C,u,t),O=(0,Normals/* decompressNormal */.Tz)(V,f,t),j=4*t,y=(0,vec2/* set */.hZ)(PathGeometryData_R,d[j]*a[0],d[j+1]*a[1]),U=3*t;if(1===A[U+2])(0,vec32.h)(v,O,T),I=A[U]*a[0],x=A[U+1];else{const t=PathGeometryData_E,a=PathGeometryData_P;(0,vec2/* set */.hZ)(t,A[U],A[U+1]);const l=(0,vec2/* length */.Bw)(t);(0,vec2/* normalize */.S8)(t,t);const c=(0,vec2/* dot */.Om)(y,t);if(Math.abs(c)>l){(0,vec2/* set */.hZ)(a,-t[1],t[0]);const s=(0,vec2/* dot */.Om)(y,a);(0,vec2/* scale */.hs)(t,t,l*Math.sign(c)),(0,vec2/* scale */.hs)(a,a,s),(0,vec2/* add */.WQ)(y,t,a)}(0,vec32.i)(v,0,0,0)}const F=T[0]*y[0]+O[0]*y[1],N=T[1]*y[0]+O[1]*y[1],_=T[2]*y[0]+O[2]*y[1];this.positions[U]=m[c]+F+v[0]*I,this.positions[U+1]=m[c+1]+N+v[1]*I,this.positions[U+2]=m[c+2]+_+v[2]*I;const z=d[j+2],D=d[j+3];(0,Normals/* compressNormal */.aT)(this.normals,t,T[0]*z+O[0]*D+v[0]*x,T[1]*z+O[1]*D+v[1]*x,T[2]*z+O[2]*D+v[2]*x)}}createGeometryData(){const t=this.builder.vertexIndices;return[[VertexAttribute/* VertexAttribute */.r.POSITION,new Attribute/* Attribute */.n(this.positions,t,3,!0)],[VertexAttribute/* VertexAttribute */.r.NORMALCOMPRESSED,new Attribute/* Attribute */.n(this.normals,t,2,!0)],[VertexAttribute/* VertexAttribute */.r.COLOR,new Attribute/* Attribute */.n(this.color,(0,Indices/* getZeroIndexArray */.EH)(t.length),4,!0)]]}onPathChanged(t){super.onPathChanged(t),this.bake(this.size)}intersect(t,e,s,i){const r=this.builder.vertexIndices,o=new Attribute/* Vertices */.K(this.positions,3),n=r.length/3;(0,RayIntersections/* intersectTriangles */.Z$)(t,e,0,n,r,o,void 0,s,((t,e,s)=>i(t,s,e)))}get size(){return this._size}}class O extends PathGeometryData_x{constructor(t,e,s,i){super(t),this.sizeAttributeValue=e,this.colorAttributeValue=s,this.opacityAttributeValue=i,this.baked=new PathGeometryData_T(t),this._vvSize=(0,FloatArray/* newFloatArray */.oe)(this.builder.path.vertices.length).fill(e),this._vvColor=HalfFloatArray_n(this.builder.path.vertices.length).fill(s),this._vvOpacity=HalfFloatArray_n(this.builder.path.vertices.length).fill(i)}createGeometryData(){const t=this.builder,{pathVertexIndices:e,vertexIndices:s}=t;return[[VertexAttribute/* VertexAttribute */.r.POSITION,new Attribute/* Attribute */.n(t.positions,e,3,!0)],[VertexAttribute/* VertexAttribute */.r.PROFILEVERTEXANDNORMAL,new Attribute/* Attribute */.n(t.profileVertexAndNormals,s,4,!0)],[VertexAttribute/* VertexAttribute */.r.PROFILEAUXDATA,new Attribute/* Attribute */.n(t.profileAuxData,s,3,!0)],[VertexAttribute/* VertexAttribute */.r.PROFILERIGHT,new Attribute/* Attribute */.n(t.profileRightAxes,s,2,!0)],[VertexAttribute/* VertexAttribute */.r.PROFILEUP,new Attribute/* Attribute */.n(t.profileUpAxes,s,2,!0)],[VertexAttribute/* VertexAttribute */.r.SIZEFEATUREATTRIBUTE,new Attribute/* Attribute */.n(this._vvSize,e,1,!0)],[VertexAttribute/* VertexAttribute */.r.COLORFEATUREATTRIBUTE,new Attribute/* Attribute */.n(this._vvColor,e,1,!0)],[VertexAttribute/* VertexAttribute */.r.OPACITYFEATUREATTRIBUTE,new Attribute/* Attribute */.n(this._vvOpacity,e,1,!0)]]}onPathChanged(t){super.onPathChanged(t);const e=t.getMutableAttribute(VertexAttribute/* VertexAttribute */.r.POSITION);e&&(e.data=this.builder.positions)}}const PathGeometryData_R=(0,vec2f64/* create */.vt)(),PathGeometryData_E=(0,vec2f64/* create */.vt)(),PathGeometryData_P=(0,vec2f64/* create */.vt)(),PathGeometryData_w=(0,vec3f64/* create */.vt)(),PathGeometryData_C=(0,vec3f64/* create */.vt)(),V=(0,vec3f64/* create */.vt)();

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/ray.js
var ray = __webpack_require__(10151);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/pathGeometryUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function pathGeometryUtils_g(g,n){let v=null;const u=g.vertices.length,j=.99619469809,R=(0,vec3f64/* create */.vt)(),y=(0,vec3f64/* create */.vt)(),x=(0,vec3f64/* create */.vt)(),L=(0,vec3f64/* create */.vt)(),b=(0,vec3f64/* create */.vt)(),k=(0,vec3f64/* create */.vt)(),q=(0,plane/* create */.vt)();let G=g.vertices[0];(0,vec32.c)(y,n),(0,vec32.i)(R,0,1,0),(0,GeometryUtil/* makeOrthoBasisDirUpFallback */.Xl)(G.vRight,y,R,R,x,y,j),(0,vec32.c)(G.frame.up,y),(0,vec32.c)(G.frame.right,x);const M=g.positions;let U=g.offset;v=G;for(let f=1;f<u;++f){G=g.vertices[f],(0,vec32.f)(b,G.vLeft,G.vRight);let m=(0,vec32.l)(b);m>0?(m=1/Math.sqrt(m),b[0]=b[0]*m,b[1]=b[1]*m,b[2]=b[2]*m):(b[0]=G.vRight[0],b[1]=G.vRight[1],b[2]=G.vRight[2]),k[0]=M[U]+v.frame.up[0],k[1]=M[U+1]+v.frame.up[1],k[2]=M[U+2]+v.frame.up[2],U+=3;const n=(0,vec32.i)(pathGeometryUtils_h,M[U],M[U+1],M[U+2]);(0,plane/* fromPositionAndNormal */.O_)(n,b,q);(0,plane/* intersectRay */.Ui)(q,(0,ray/* wrap */.LV)(k,G.vLeft),L)?(L[0]-=M[U],L[1]-=M[U+1],L[2]-=M[U+2],(0,vec32.n)(y,L),(0,vec32.h)(x,b,y),(0,vec32.n)(x,x)):(0,GeometryUtil/* makeOrthoBasisDirUpFallback */.Xl)(b,v.frame.up,v.frame.right,R,x,y,j),(0,vec32.c)(G.frame.up,y),(0,vec32.c)(G.frame.right,x),v=G}}const pathGeometryUtils_h=(0,vec3f64/* create */.vt)();

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/PathProfile.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class PathProfile_r{constructor(){this.vertices=new Array,this.normals=new Array,this.indices=new Array,this.poles=new Array,this.poleIndices=new Array}addVertex(t,e){return this.vertices.push((0,vec2f64/* clone */.o8)(t)),this.normals.push((0,vec2f64/* clone */.o8)(e)),this.vertices.length-1}addPole(t,e=null){return this.poles.push({position:(0,vec2f64/* clone */.o8)(t),normal:e?(0,vec2f64/* clone */.o8)(e):null}),this.poles.length-1}addSegment(t,e=null){this.indices.push(t.v0),this.indices.push(t.v1),e&&(this.poleIndices.push(e.v0),this.poleIndices.push(e.v1))}get numSegments(){return this.indices.length/2}translate(t,e){for(const s of this.vertices)s[0]+=t,s[1]+=e;for(const s of this.poles)s.position[0]+=t,s.position[1]+=e}get usedMemory(){return this.vertices.length*(0,memoryEstimations/* estimateNumberArrayMemory */.Qf)(this.vertices[0])*2+(0,memoryEstimations/* estimateNumberArrayMemory */.Qf)(this.indices)}}const PathProfile_n={top:[0,-.5],bottom:[0,.5]};function i(t){const s=.5,i=Graphics3DPathSymbolLayerConstants/* pathNumCircleProfileSubdivisions */.ZC,d=new PathProfile_r,a={v0:0,v1:0};d.addPole((0,vec2f64/* fromValues */.fA)(0,0));for(let o=0;o<i;++o){const t=2*o*Math.PI/i,r=Math.cos(t),n=Math.sin(t),a=(0,vec2f64/* fromValues */.fA)(r*s,n*s),c=(0,vec2f64/* fromValues */.fA)(r,n);d.addVertex(a,c)}for(let e=0;e<i-1;++e){const t={v0:e,v1:e+1};d.addSegment(t,a)}const c={v0:i-1,v1:0};if(d.addSegment(c,a),"center"!==t){const e=PathProfile_n[t];d.translate(e[0],e[1])}return d}const PathProfile_d={center:i("center"),top:i("top"),bottom:i("bottom")},PathProfile_a={center:PathProfile_c("center"),top:PathProfile_c("top"),bottom:PathProfile_c("bottom")};function PathProfile_c(t){const s=1,o=1,i=new PathProfile_r,d=(0,vec2f64/* fromValues */.fA)(-.5,-.5),a=(0,vec2f64/* fromValues */.fA)(.5*s,-.5),c=(0,vec2f64/* fromValues */.fA)(.5*s,.5*o),h=(0,vec2f64/* fromValues */.fA)(-.5,.5*o),l=(0,vec2f64/* fromValues */.fA)(0,-1),v=(0,vec2f64/* fromValues */.fA)(1,0),m=(0,vec2f64/* fromValues */.fA)(0,1),p=(0,vec2f64/* fromValues */.fA)(-1,0);if(i.addPole((0,vec2f64/* fromValues */.fA)(0,.5*o),m),i.addPole((0,vec2f64/* fromValues */.fA)(0,.5*o)),i.addPole((0,vec2f64/* fromValues */.fA)(0,-.5)),i.addPole((0,vec2f64/* fromValues */.fA)(0,-.5),l),i.addVertex(d,l),i.addVertex(a,l),i.addSegment({v0:0,v1:1},{v0:3,v1:3}),i.addVertex(a,v),i.addVertex(c,v),i.addSegment({v0:2,v1:3},{v0:2,v1:1}),i.addVertex(c,m),i.addVertex(h,m),i.addSegment({v0:4,v1:5},{v0:0,v1:0}),i.addVertex(h,p),i.addVertex(d,p),i.addSegment({v0:6,v1:7},{v0:1,v1:2}),"center"!==t){const e=PathProfile_n[t];i.translate(e[0],e[1])}return i}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/math/common.js
var common = __webpack_require__(65257);
;// ../node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat2.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function mat2_n(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function mat2_r(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t}function mat2_a(t,n,r,a,u){return t[0]=n,t[1]=r,t[2]=a,t[3]=u,t}function mat2_u(t,n){if(t===n){const r=n[1];t[1]=n[2],t[2]=r}else t[0]=n[0],t[1]=n[2],t[2]=n[1],t[3]=n[3];return t}function mat2_o(t,n){const r=n[0],a=n[1],u=n[2],o=n[3];let e=r*o-u*a;return e?(e=1/e,t[0]=o*e,t[1]=-a*e,t[2]=-u*e,t[3]=r*e,t):null}function mat2_e(t,n){const r=n[0];return t[0]=n[3],t[1]=-n[1],t[2]=-n[2],t[3]=r,t}function mat2_c(t){return t[0]*t[3]-t[2]*t[1]}function mat2_s(t,n,r){const a=n[0],u=n[1],o=n[2],e=n[3],c=r[0],s=r[1],i=r[2],f=r[3];return t[0]=a*c+o*s,t[1]=u*c+e*s,t[2]=a*i+o*f,t[3]=u*i+e*f,t}function mat2_i(t,n,r){const a=n[0],u=n[1],o=n[2],e=n[3],c=Math.sin(r),s=Math.cos(r);return t[0]=a*s+o*c,t[1]=u*s+e*c,t[2]=a*-c+o*s,t[3]=u*-c+e*s,t}function mat2_f(t,n,r){const a=n[0],u=n[1],o=n[2],e=n[3],c=r[0],s=r[1];return t[0]=a*c,t[1]=u*c,t[2]=o*s,t[3]=e*s,t}function mat2_l(t,n){const r=Math.sin(n),a=Math.cos(n);return t[0]=a,t[1]=r,t[2]=-r,t[3]=a,t}function M(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=n[1],t}function mat2_h(t){return"mat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}function mat2_b(t){return Math.sqrt(t[0]**2+t[1]**2+t[2]**2+t[3]**2)}function mat2_m(t,n,r,a){return t[2]=a[2]/a[0],r[0]=a[0],r[1]=a[1],r[3]=a[3]-t[2]*r[1],[t,n,r]}function mat2_d(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2],t[3]=n[3]+r[3],t}function mat2_p(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2],t[3]=n[3]-r[3],t}function mat2_y(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function mat2_x(n,r){const a=n[0],u=n[1],o=n[2],e=n[3],c=r[0],s=r[1],i=r[2],f=r[3],l=(0,common/* getEpsilon */.FD)();return Math.abs(a-c)<=l*Math.max(1,Math.abs(a),Math.abs(c))&&Math.abs(u-s)<=l*Math.max(1,Math.abs(u),Math.abs(s))&&Math.abs(o-i)<=l*Math.max(1,Math.abs(o),Math.abs(i))&&Math.abs(e-f)<=l*Math.max(1,Math.abs(e),Math.abs(f))}function mat2_S(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t}function j(t,n,r,a){return t[0]=n[0]+r[0]*a,t[1]=n[1]+r[1]*a,t[2]=n[2]+r[2]*a,t[3]=n[3]+r[3]*a,t}const mat2_=mat2_s,mat2_g=mat2_p,mat2_q=Object.freeze(Object.defineProperty({__proto__:null,LDU:mat2_m,add:mat2_d,adjoint:mat2_e,copy:mat2_n,determinant:mat2_c,equals:mat2_x,exactEquals:mat2_y,frob:mat2_b,fromRotation:mat2_l,fromScaling:M,identity:mat2_r,invert:mat2_o,mul:mat2_,multiply:mat2_s,multiplyScalar:mat2_S,multiplyScalarAndAdd:j,rotate:mat2_i,scale:mat2_f,set:mat2_a,str:mat2_h,sub:mat2_g,subtract:mat2_p,transpose:mat2_u},Symbol.toStringTag,{value:"Module"}));

;// ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat2f64.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function mat2f64_e(){return[1,0,0,1]}function mat2f64_t(e){return[e[0],e[1],e[2],e[3]]}function mat2f64_n(e,t,n,r){return[e,t,n,r]}const mat2f64_r=Object.freeze(Object.defineProperty({__proto__:null,clone:mat2f64_t,create:mat2f64_e,fromValues:mat2f64_n},Symbol.toStringTag,{value:"Module"}));

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/PathVertex.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class PathVertex_R{constructor(){this.vLeft=(0,vec3f64/* create */.vt)(),this.vRight=(0,vec3f64/* create */.vt)(),this.vMinSiblingLength=0,this.frame=new PathExtruder_l}setFrameFromUpVector(t){(0,vec32.c)(this.frame.up,t),(0,vec32.f)(PathVertex_D,this.vLeft,this.vRight),(0,vec32.n)(PathVertex_D,PathVertex_D),(0,vec32.g)(PathVertex_I,this.frame.up,(0,vec32.e)(PathVertex_D,this.frame.up)),(0,vec32.d)(PathVertex_k,PathVertex_D,PathVertex_I),(0,vec32.n)(PathVertex_k,PathVertex_k),(0,vec32.h)(this.frame.right,PathVertex_k,this.frame.up)}get foldingAngle(){return Math.PI-this.rotationAngle}}class PathVertex_x extends PathVertex_R{get rotationFrameUp(){return this.frame.up}get rotationRight(){return vec2f64/* UNIT_X */.Cw}get rotationAngle(){(0,vec32.g)(PathVertex_w,this.frame.up,(0,vec32.e)(this.frame.up,this.vLeft)),(0,vec32.d)(PathVertex_w,this.vLeft,PathVertex_w),(0,vec32.u)(PathVertex_w,PathVertex_w),(0,vec32.n)(PathVertex_w,PathVertex_w),(0,vec32.g)(PathVertex_y,this.frame.up,(0,vec32.e)(this.frame.up,this.vRight)),(0,vec32.d)(PathVertex_y,this.vRight,PathVertex_y),(0,vec32.n)(PathVertex_y,PathVertex_y),(0,vec32.h)(PathVertex_U,this.rotationFrameUp,this.vLeft);return Math.sign((0,vec32.e)(PathVertex_U,this.vRight))*(Math.PI-(0,mathUtils/* acosClamped */.XM)((0,vec32.e)(PathVertex_w,PathVertex_y)))}get maxStretchDistance(){return Math.abs(this.vMinSiblingLength/Math.cos(.5*this.foldingAngle))}applyMiterStretch(t,r){const s=this.rotationAngle;if(Math.abs(s)<=0)return r;const e=(0,mathUtils/* reciprocalClamped */.J_)(Math.cos(.5*s));return (0,vec2/* set */.hZ)(t,(e-1+1)*r[0],r[1])}}class PathVertex_L extends PathVertex_R{get rotationFrameUp(){const t=Math.sign((0,vec32.e)(this.frame.right,this.vRight));return (0,vec32.h)(A,this.vRight,this.vLeft),(0,vec32.g)(A,A,t),(0,vec32.n)(A,A)}get rotationRight(){const t=this.rotationFrameUp,i=(0,vec32.e)(t,this.frame.up),r=(0,vec32.e)(t,this.frame.right);return (0,vec32.g)(PathVertex_F,this.frame.up,-r),(0,vec32.g)(PathVertex_P,this.frame.right,i),(0,vec32.f)(PathVertex_F,PathVertex_F,PathVertex_P),(0,vec32.n)(PathVertex_F,PathVertex_F),PathVertex_j(PathVertex_S,this.frame,PathVertex_F),PathVertex_S}get rotationAngle(){const i=Math.sign((0,vec32.e)(this.frame.right,this.vRight));return (0,vec32.u)(PathVertex_U,this.vLeft),-i*(Math.PI-(0,mathUtils/* acosClamped */.XM)((0,vec32.e)(PathVertex_U,this.vRight)))}get maxStretchDistance(){return Math.abs(this.vMinSiblingLength*(0,mathUtils/* reciprocalClamped */.J_)(Math.cos(.5*this.foldingAngle)))}applyMiterStretch(t,s){const a=this.rotationAngle;if(0===Math.abs(a))return s;const h=(0,mathUtils/* reciprocalClamped */.J_)(Math.cos(.5*a)),o=this.rotationRight,n=mat2_a(PathVertex_E,1+(h-1)*o[0]*o[0],(h-1)*o[0]*o[1],(h-1)*o[0]*o[1],1+(h-1)*o[1]*o[1]);return (0,vec2/* transformMat2 */.ZF)(t,s,n)}}function PathVertex_j(t,i,r){(0,vec2/* set */.hZ)(t,(0,vec32.e)(r,i.right),(0,vec32.e)(r,i.up))}function PathVertex_d(t){switch(t){case PathGeometry_o.World:return new PathVertex_x;case PathGeometry_o.Path:return new PathVertex_L}}const A=(0,vec3f64/* create */.vt)(),PathVertex_S=(0,vec2f64/* create */.vt)(),PathVertex_F=(0,vec3f64/* create */.vt)(),PathVertex_P=(0,vec3f64/* create */.vt)(),PathVertex_U=(0,vec3f64/* create */.vt)(),PathVertex_w=(0,vec3f64/* create */.vt)(),PathVertex_y=(0,vec3f64/* create */.vt)(),PathVertex_I=(0,vec3f64/* create */.vt)(),PathVertex_D=(0,vec3f64/* create */.vt)(),PathVertex_k=(0,vec3f64/* create */.vt)(),PathVertex_E=mat2f64_e();

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/Emissions.glsl.js
var Emissions_glsl = __webpack_require__(15420);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl.js
var Normals_glsl = __webpack_require__(46971);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js
var PhysicallyBasedRenderingParameters_glsl = __webpack_require__(39486);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/PathVertexPosition.glsl.js
var PathVertexPosition_glsl = __webpack_require__(10204);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/OITPass.js
var OITPass = __webpack_require__(69338);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/Path.glsl.js
var Path_glsl = __webpack_require__(51305);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/PathTechnique.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class PathTechnique_A extends PathVertexPosition_glsl/* PathVertexPositionPassParameters */.W{constructor(){super(...arguments),this.ambient=(0,vec3f64/* freeze */.CN)(.2,.2,.2),this.diffuse=(0,vec3f64/* freeze */.CN)(.8,.8,.8),this.opacity=1,this.origin=(0,vec3f64/* create */.vt)(),this.modelTransformation=null,this.mrrFactors=pbrUtils/* advancedMRRFactors */.mb,this.emissiveStrength=0,this.emissiveSource=materialUtils/* EmissiveSourceMode */.YJ.Color,this.emissiveBaseColor=vec3f64/* ZEROS */.uY}}class PathTechnique_g extends ShaderTechnique/* ShaderTechnique */.w{constructor(r,e){super(r,e,new ReloadableShaderModule/* ReloadableShaderModule */.$(Path_glsl.P,(()=>__webpack_require__.e(/* import() */ 8645).then(__webpack_require__.bind(__webpack_require__, 88645)))),PathTechnique_L)}initializePipeline(r){const{output:e,transparent:s,hasSlicePlane:t,doubleSidedMode:o,hasOccludees:n,oitPass:a}=r,O=a===OITPass/* OITPass */.Y.NONE,b=a===OITPass/* OITPass */.Y.FrontFace;return (0,renderState/* makePipelineState */.Ey)({blending:(0,ShaderOutput/* isColorOrColorEmission */.RN)(e)&&s?(0,OrderIndependentTransparency/* blending */.Yf)(a):null,culling:t&&!s&&o!==Normals_glsl/* NormalsDoubleSidedMode */.W.None?renderState/* frontFaceCullingParams */.hG:null,depthTest:{func:(0,OrderIndependentTransparency/* oitDepthTest */.K_)(a)},depthWrite:O||b?renderState/* defaultDepthWrite */.Uy:null,drawBuffers:(0,ShaderTechnique/* depthOnlyOutputBuffersOr */.L)(e,(0,OrderIndependentTransparency/* getDrawBuffers */.m6)(a,e)),colorWrite:renderState/* defaultColorWrite */.kn,stencilWrite:n?StencilUtils/* stencilWriteMaskOn */.v0:null,stencilTest:n?StencilUtils/* stencilBaseAllZerosParams */.qh:null,polygonOffset:O||b?null:OrderIndependentTransparency/* OITPolygonOffset */.SE})}}const PathTechnique_L=new Map([[VertexAttribute/* VertexAttribute */.r.POSITION,0],[VertexAttribute/* VertexAttribute */.r.PROFILEVERTEXANDNORMAL,1],[VertexAttribute/* VertexAttribute */.r.PROFILERIGHT,2],[VertexAttribute/* VertexAttribute */.r.PROFILEUP,3],[VertexAttribute/* VertexAttribute */.r.SIZEFEATUREATTRIBUTE,4],[VertexAttribute/* VertexAttribute */.r.COLORFEATUREATTRIBUTE,5],[VertexAttribute/* VertexAttribute */.r.OPACITYFEATUREATTRIBUTE,6],[VertexAttribute/* VertexAttribute */.r.OLIDCOLOR,7],[VertexAttribute/* VertexAttribute */.r.PROFILEAUXDATA,8]]);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js
var TextureCoordinateAttribute_glsl = __webpack_require__(26139);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/PathTechniqueConfiguration.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class PathTechniqueConfiguration_h extends DefaultTechniqueConfiguration/* DefaultTechniqueConfiguration */.E{constructor(e){super(),this.spherical=e,this.pbrMode=PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Disabled,this.doubleSidedMode=Normals_glsl/* NormalsDoubleSidedMode */.W.None,this.emissionSource=Emissions_glsl/* EmissionSource */.ZX.None,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.transparent=!1,this.hasOccludees=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.hasBloom=!1,this.snowCover=!1,this.textureCoordinateType=TextureCoordinateAttribute_glsl/* TextureCoordinateType */.I.None,this.occlusionPass=!1,this.hasVvInstancing=!0,this.useCustomDTRExponentForWater=!1,this.useFillLights=!1,this.hasColorTexture=!1,this.objectAndLayerIdColorInstanced=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.draped=!1,this.overlayEnabled=!1}get discardInvisibleFragments(){return this.transparent}}(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)({count:PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.COUNT})],PathTechniqueConfiguration_h.prototype,"pbrMode",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)({count:Normals_glsl/* NormalsDoubleSidedMode */.W.COUNT})],PathTechniqueConfiguration_h.prototype,"doubleSidedMode",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)({count:Emissions_glsl/* EmissionSource */.ZX.COUNT})],PathTechniqueConfiguration_h.prototype,"emissionSource",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],PathTechniqueConfiguration_h.prototype,"receiveShadows",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],PathTechniqueConfiguration_h.prototype,"receiveAmbientOcclusion",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],PathTechniqueConfiguration_h.prototype,"vvSize",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],PathTechniqueConfiguration_h.prototype,"vvColor",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],PathTechniqueConfiguration_h.prototype,"vvOpacity",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],PathTechniqueConfiguration_h.prototype,"transparent",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],PathTechniqueConfiguration_h.prototype,"hasOccludees",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],PathTechniqueConfiguration_h.prototype,"terrainDepthTest",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],PathTechniqueConfiguration_h.prototype,"cullAboveTerrain",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],PathTechniqueConfiguration_h.prototype,"hasBloom",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],PathTechniqueConfiguration_h.prototype,"snowCover",void 0);

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/PathMaterial.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class PathMaterial_P extends Material/* Material */.im{constructor(t,e){super(t,PathMaterial_I),this.vertexAttributeLocations=PathTechnique_L,this.supportsEdges=!0,this._pp0=(0,vec3f64/* fromValues */.fA)(0,0,1),this._pp1=(0,vec3f64/* fromValues */.fA)(0,0,0),this.produces=new Map([[RenderSlot/* RenderSlot */.N.OPAQUE_MATERIAL,t=>(this.parameters.castShadows&&(0,ShaderOutput/* isShadowRelatedOutput */.PJ)(t)||(0,ShaderOutput/* is3DGeometryOutputMRT */.iq)(t))&&!this.transparent],[RenderSlot/* RenderSlot */.N.TRANSPARENT_MATERIAL,t=>(this.parameters.castShadows&&(0,ShaderOutput/* isShadowRelatedOutput */.PJ)(t)||(0,ShaderOutput/* is3DGeometryOutputMRT */.iq)(t))&&this.transparent]]),this._configuration=new PathTechniqueConfiguration_h(e.spherical)}get hasEmissions(){return this.parameters.emissiveStrength>0}getConfiguration(t,e){return super.getConfiguration(t,e,this._configuration),this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.transparent,this._configuration.hasOccludees=e.hasOccludees,(0,ShaderOutput/* isColorOrColorEmission */.RN)(t)?(this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?Normals_glsl/* NormalsDoubleSidedMode */.W.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?Normals_glsl/* NormalsDoubleSidedMode */.W.WindingOrder:Normals_glsl/* NormalsDoubleSidedMode */.W.None,this._configuration.receiveShadows=e.shadowMap.enabled,this._configuration.receiveAmbientOcclusion=null!=e.ssao):this._configuration.receiveShadows=this._configuration.receiveAmbientOcclusion=!1,this._configuration.pbrMode=this.parameters.usePBR?PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Schematic:PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Disabled,this._configuration.emissionSource=this.parameters.usePBR?Emissions_glsl/* EmissionSource */.ZX.SymbolColor:Emissions_glsl/* EmissionSource */.ZX.None,this._configuration.hasBloom=(0,ShaderOutput/* isColorEmission */.LG)(t),this._configuration.oitPass=e.oitPass,this._configuration.terrainDepthTest=e.terrainDepthTest,this._configuration.cullAboveTerrain=e.cullAboveTerrain,this._configuration.snowCover=e.snowCover,this._configuration}isVisibleForOutput(t){return t!==ShaderOutput/* ShaderOutput */.V.Shadow&&t!==ShaderOutput/* ShaderOutput */.V.ShadowExcludeHighlight&&t!==ShaderOutput/* ShaderOutput */.V.ShadowHighlight||this.parameters.castShadows}get visible(){return this.parameters.opacity>=AlphaCutoff/* alphaCutoff */.Q}intersect(t,e,i,r,s,o){this._intersect(t,i,r,s,o)}intersectDraped(t,e,i,r){return this._pp0[0]=this._pp1[0]=i[0],this._pp0[1]=this._pp1[1]=i[1],this._intersect(t,e,this._pp0,this._pp1,r)}_intersect(i,s,o,a,n){const h=i;if(!PathGeometry_s(h))return;const c=h.path,p=(0,vec2f64/* clone */.o8)(this.parameters.size);if(this.parameters.vvSize){const{offset:e,factor:i,minSize:r,maxSize:s,fallback:o}=this.parameters.vvSize,a=c.sizeAttributeValue;Number.isNaN(a)?(p[0]*=o[0],p[1]*=o[2]):(p[0]*=(0,mathUtils/* clamp */.qE)(e[0]+a*i[0],r[0],s[0]),p[1]*=(0,mathUtils/* clamp */.qE)(e[2]+a*i[2],r[2],s[2]))}const u=new RayIntersections/* MeshIntersectionOptions */.JG(!1,s.options.normalRequired),m=Math.max(p[0],p[1]),l=i.boundingInfo;if(null==l)return void PathMaterial_w(c,p,o,a,u,n);const f=(0,aaBoundingBox/* fromValues */.fA)(l.bbMin[0]-m,l.bbMin[1]-m,l.bbMin[2]-m,l.bbMax[0]+m,l.bbMax[1]+m,l.bbMax[2]+m),d=[a[0]-o[0],a[1]-o[1],a[2]-o[2]],S=Math.sqrt(d[0]*d[0]+d[1]*d[1]+d[2]*d[2]),_=[S/d[0],S/d[1],S/d[2]];(0,RayIntersections/* intersectAabbInvDir */.Wb)(f,o,_,s.tolerance)&&PathMaterial_w(c,p,o,a,u,n)}createBufferWriter(){return new DefaultBufferWriter/* DefaultBufferWriter */.Z(this._layout)}get _layout(){const t=(0,InterleavedLayout/* newLayout */.BP)().vec3f(VertexAttribute/* VertexAttribute */.r.POSITION).vec4f16(VertexAttribute/* VertexAttribute */.r.PROFILEVERTEXANDNORMAL).vec2i16(VertexAttribute/* VertexAttribute */.r.PROFILERIGHT,{glNormalized:!0}).vec2i16(VertexAttribute/* VertexAttribute */.r.PROFILEUP,{glNormalized:!0});return this.parameters.vvSize&&t.f32(VertexAttribute/* VertexAttribute */.r.SIZEFEATUREATTRIBUTE),this.parameters.vvColor&&t.f32(VertexAttribute/* VertexAttribute */.r.COLORFEATUREATTRIBUTE),this.parameters.vvOpacity&&t.f32(VertexAttribute/* VertexAttribute */.r.OPACITYFEATUREATTRIBUTE),(0,olidUtils/* olidEnabled */.E)()&&t.vec4u8(VertexAttribute/* VertexAttribute */.r.OLIDCOLOR),t.vec3f16(VertexAttribute/* VertexAttribute */.r.PROFILEAUXDATA),t}createGLMaterial(t){return new PathMaterial_j(t)}get transparent(){const{parameters:t}=this;return t.drivenOpacity||t.opacity<1}}class PathMaterial_j extends GLMaterial/* default */.A{beginSlot(t){return this.getTechnique(PathTechnique_g,t)}}function PathMaterial_w(t,e,i,r,s,o){t.baked.size&&t.baked.size[0]===e[0]&&t.baked.size[1]===e[1]||t.baked.bake(e),t.baked.intersect(i,r,s,o)}class PathMaterial_I extends PathTechnique_A{constructor(){super(...arguments),this.doubleSided=!1,this.doubleSidedType="normal",this.castShadows=!0,this.hasSlicePlane=!1,this.drivenOpacity=!1,this.usePBR=!1}}

;// ../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DPathSymbolLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const se=["polyline"];class ae extends Graphics3DSymbolLayer/* Graphics3DSymbolLayer */.U{constructor(e,t,r,i){super(e,t,r,i,Graphics3DPathSymbolLayer_he(t)),this._intrinsicSize=(0,vec2f64/* fromValues */.fA)(1,1),this._upVectorAlignment=PathGeometry_o.Path,this._stencilWidth=.1,this.ensureDrapedStatus(!1)}async doLoad(){const e=this.symbolLayer,r=null!=e.width?e.width:e.height,i=null!=e.height?e.height:r;this._vvConvertOptions=new FastSymbolUpdates/* ConvertOptions */.wI({supports:{size:!0,color:!0,rotation:!1,opacity:!0},modelSize:[1,1,1],symbolSize:[r,1,i],unitInMeters:this._context.renderCoordsHelper.unitInMeters,fallbackColor:this._getFallbackOpacityAndColor(),fallbackSize:[r,1,i]});const s=this._context.renderer?.visualVariables;this._fastUpdates=s?.length?(0,FastSymbolUpdates/* initFastSymbolUpdatesState */.s_)(this._context.renderer,this._vvConvertOptions):null;const n=e.anchor||"center";this._upVectorAlignment="heading"===e.profileRotation?PathGeometry_o.World:PathGeometry_o.Path;const c=e.profile||"circle";switch(c){default:case"circle":this._profile=PathProfile_d[n];break;case"quad":this._profile=PathProfile_a[n]}switch(e.join){case"round":this._extruder=new PathExtruder_a(0,Graphics3DPathSymbolLayerConstants/* pathNumRoundJoinSubdivisions */.kf);break;case"bevel":this._extruder=new PathExtruder_a(0,1);break;case"miter":this._extruder=new PathExtruder_a(.8*Math.PI,1);break;default:this._extruder=new PathExtruder_c}const h=e.cap||"butt";switch(h){case"none":this._startCap=new PathCapBuilder_l,this._endCap=new PathCapBuilder_l;break;case"butt":default:this._startCap=new PathCapBuilder_f(this._profile,0),this._endCap=new PathCapBuilder_f(this._profile,0,!0);break;case"square":this._startCap=new PathCapBuilder_f(this._profile,-.5),this._endCap=new PathCapBuilder_f(this._profile,.5,!0);break;case"round":{const e="quad"===c;this._startCap=new PathCapBuilder_h({profile:this._profile,flip:!1,breakNormals:e,subdivisions:Graphics3DPathSymbolLayerConstants/* pathNumRoundCapExtrusionSubdivisions */.RL}),this._endCap=new PathCapBuilder_h({profile:this._profile,flip:!0,breakNormals:e,subdivisions:Graphics3DPathSymbolLayerConstants/* pathNumRoundCapExtrusionSubdivisions */.RL});break}}const m=this.symbolLayer?.material?.color,f=this._getCombinedOpacityAndColor(m),d=(0,vec3f64/* fromArray */.ci)(f),u=f[3],g=this.needsDrivenTransparentPass,b=e.material?.emissive,y={diffuse:d,ambient:d,emissiveStrength:b?.strength??0,emissiveSource:materialUtils/* EmissiveSourceMode */.YJ.Color,opacity:u,drivenOpacity:g,hasVertexColors:!1,hasSlicePlane:this._context.slicePlaneEnabled,castShadows:this.symbolLayer.castShadows,offsetTransparentBackfaces:!0};if(!this._drivenProperties.size&&((0,vec2/* set */.hZ)(this._intrinsicSize,r,i),!(0,graphicUtils/* isValidSize */.Mh)(this._intrinsicSize[0])||!(0,graphicUtils/* isValidSize */.Mh)(this._intrinsicSize[1])))throw new core_Error/* default */.A("graphics3dpathsymbollayer:invalid-size","Symbol sizes may not be negative values");let _;this._fastUpdates?.visualVariables.size||(0,vec2/* scale */.hs)(this._intrinsicSize,this._intrinsicSize,1/this._context.renderCoordsHelper.unitInMeters),this._fastUpdates?_=new PathMaterial_P({...y,...this._fastUpdates.materialParameters,size:(0,vec2f64/* fromArray */.ci)(this._intrinsicSize)},this._context):(y.hasVertexColors=this._drivenProperties.color||this._drivenProperties.opacity,y.normalType=NormalAttribute_glsl/* NormalType */.W.Compressed,_=new DefaultMaterial/* DefaultMaterial */.$U(y,this._context)),_.setParameters({usePBR:this._context.physicalBasedRenderingEnabled,isSchematic:!0,cullFace:_.transparent||"none"===h?basicInterfaces/* CullFaceOptions */.s2.None:basicInterfaces/* CullFaceOptions */.s2.Back}),this._materials[0]=_}createGraphics3DGraphic(e){const t=e.graphic;if(!this._validateGeometry(t.geometry,se,this.symbolLayer.type))return null;const r=this.setGraphicElevationContext(t);return this._createAs3DShape(e,r)}layerOpacityChanged(){const e=this.symbolLayer?.material?.color,t=this._getCombinedOpacity(e);this._materials[0]?.setParameters({opacity:t})}layerElevationInfoChanged(e,t){return this.updateGraphics3DGraphicElevationInfo(e,t,elevationAlignmentUtils/* needsElevationUpdates3D */.Kf)}slicePlaneEnabledChanged(){return this._materials[0]?.setParameters({hasSlicePlane:this._context.slicePlaneEnabled}),!0}physicalBasedRenderingChanged(){return this._materials[0]?.setParameters({usePBR:this._context.physicalBasedRenderingEnabled,isSchematic:!0}),!0}applyRendererDiff(e,t){for(const r in e.diff){if("visualVariables"!==r)return interfaces/* ApplyRendererDiffResult */.w.RecreateSymbol;if(!(0,FastSymbolUpdates/* updateFastSymbolUpdatesState */.J_)(this._fastUpdates,t,this._vvConvertOptions))return interfaces/* ApplyRendererDiffResult */.w.RecreateSymbol;this._materials[0]?.setParameters(this._fastUpdates.materialParameters)}return interfaces/* ApplyRendererDiffResult */.w.FastUpdate}_getVertexData(e){let t=0;const r=e.paths,i=[],s=e.spatialReference,a=this._context.elevationProvider.spatialReference,o=this._context.renderCoordsHelper.spatialReference;for(const h of r)t+=h.length;const n=(0,DoubleArray/* newDoubleArray */.jh)(3*t);let l,c=0;for(const h of r){i.push({offset:c,numVertices:h.length});for(const t of h)n[c++]=t[0],n[c++]=t[1],n[c++]=e.hasZ?t[2]:0}return null==a||s.equals(a)||(0,projectBuffer.projectBuffer)(n,s,0,n,a,0,t)?(null==a||a.equals(o)?l=(0,DoubleArray/* doubleArrayFrom */.xm)(n):(l=(0,DoubleArray/* newDoubleArray */.jh)(3*t),(0,projectBuffer.projectBuffer)(n,a,0,l,o,0,t)),{pathVertexDataInfos:i,vertexDataES:n,vertexDataRS:l}):null}_createAs3DShape(e,t){const{graphic:a,renderingInfo:o}=e,n=a.geometry,l=this._getVertexData(n);if(null==l)return this.logger.warn("PathSymbol3DLayer geometry failed to be created (failed to project geometry to view spatial reference)"),null;if(0===l.pathVertexDataInfos.length)return 0!==n.paths.length&&n.paths.some((e=>e.length>0))||this.logger.warn("PathSymbol3DLayer geometry failed to be created (no paths were defined)"),null;const p=new Array,m=n.spatialReference,f=(0,aaBoundingBox/* create */.vt)(),d=this._context.renderCoordsHelper,y=new ElevationProvider/* SamplePosition */.aY(l.vertexDataES),_=a.uid,w=(0,FloatArray/* newFloatArray */.oe)(l.vertexDataRS.length);for(const u of l.pathVertexDataInfos){const e=u.numVertices;if(e<2)continue;const n=u.offset;if(null!=this._context.clippingExtent&&((0,aaBoundingBox/* fromSubBuffer */.Rz)(l.vertexDataES,n,e,f),!(0,aaBoundingBox/* intersectsClippingArea */.KG)(f,this._context.clippingExtent)))continue;const v=new Array,x=n+3*e;for(let r=n;r<x;r+=3){y.offset=r;const e=(0,elevationAlignmentUtils/* evaluateElevationAlignmentAtPoint */.nG)(y,this._context.elevationProvider,t,d);(0,vec32.i)(Graphics3DPathSymbolLayer_pe,l.vertexDataRS[r],l.vertexDataRS[r+1],l.vertexDataRS[r+2]),d.setAltitude(Graphics3DPathSymbolLayer_pe,e),l.vertexDataRS[r]=Graphics3DPathSymbolLayer_pe[0],l.vertexDataRS[r+1]=Graphics3DPathSymbolLayer_pe[1],l.vertexDataRS[r+2]=Graphics3DPathSymbolLayer_pe[2],v.push(PathVertex_d(this._upVectorAlignment))}const P=new Path_f(v,l.vertexDataES,l.vertexDataRS,n,w);oe(P,this._upVectorAlignment,this._context.renderCoordsHelper);const S=new PathBuilder_h(P,this._profile,this._extruder,this._startCap,this._endCap);let C=null;if(this._fastUpdates){const e=this._fastUpdates.visualVariables,t=(0,FastSymbolUpdates/* getAttributeValue */.ul)(e.size?.field,a)??0,r=(0,FastSymbolUpdates/* getAttributeValue */.ul)(e.color?.field,a)??0,i=(0,FastSymbolUpdates/* getAttributeValue */.ul)(e.opacity?.field,a)??0;C=new O(S,t,r,i)}else{const e=(0,vec2f64/* clone */.o8)(this._intrinsicSize);if(this._drivenProperties.size){const t=o.size??["symbol-value","symbol-value","symbol-value"];e[0]*=Graphics3DPathSymbolLayer_ne(t[0],"symbol-value"===t[2]?this.symbolLayer.height||0:t[2],this.symbolLayer.width||0),e[1]*=Graphics3DPathSymbolLayer_ne(t[2],"symbol-value"===t[0]?this.symbolLayer.width||0:t[0],this.symbolLayer.height||0)}let t;if(this._drivenProperties.color&&(t=o.color??this._getFallbackOpacityAndColor()),this._drivenProperties.opacity){const e=o.opacity??this._getFallbackOpacityAndColor()[3];t=t?[t[0],t[1],t[2],e]:[1,1,1,e]}const r=new PathGeometryData_T(S);r.bake(e),t&&r.bakeVertexColors(t),C=r}const D=C.createGeometryData(),V=this._context.stage.renderView.getObjectAndLayerIdColor({graphicUid:_,layerViewUid:this._context.layerViewUid}),A=new PathGeometry_e(this._materials[0],D,C,m,this._stencilWidth,V);A.transformation=(0,mat4/* translate */.Tl)((0,mat4f64/* create */.vt)(),mat4f64/* IDENTITY */.zK,S.path.origin),p.push(A)}if(0===p.length)return null;const P=new Object3D/* Object3D */.B({geometries:p,layerViewUid:this._context.layerViewUid,graphicUid:_}),C=new Graphics3DObject3DGraphicLayer/* Graphics3DObject3DGraphicLayer */.Y(this,P,null,((e,t,r,i,s)=>Graphics3DPathSymbolLayer_ce(e,t,i,s,this._upVectorAlignment)),t,null);return C.alignedSampledElevation=0,C.needsElevationUpdates=(0,elevationAlignmentUtils/* needsElevationUpdates3D */.Kf)(t.mode),C}_getFallbackOpacityAndColor(){const t=this.symbolLayer?.material?.color;return Color/* default */.A.toUnitRGBA(t)??vec4f64/* ZEROS */.uY}}function oe(e,t,r){const{origin:i,positions:s}=e;let a=e.offset;switch(t){default:case PathGeometry_o.World:for(const t of e.vertices)Graphics3DPathSymbolLayer_pe[0]=s[a++]+i[0],Graphics3DPathSymbolLayer_pe[1]=s[a++]+i[1],Graphics3DPathSymbolLayer_pe[2]=s[a++]+i[2],r.worldUpAtPosition(Graphics3DPathSymbolLayer_pe,Graphics3DPathSymbolLayer_pe),t.setFrameFromUpVector(Graphics3DPathSymbolLayer_pe);break;case PathGeometry_o.Path:Graphics3DPathSymbolLayer_pe[0]=s[a]+i[0],Graphics3DPathSymbolLayer_pe[1]=s[a+1]+i[1],Graphics3DPathSymbolLayer_pe[2]=s[a+2]+i[2],r.worldUpAtPosition(Graphics3DPathSymbolLayer_pe,Graphics3DPathSymbolLayer_pe),pathGeometryUtils_g(e,Graphics3DPathSymbolLayer_pe)}}function Graphics3DPathSymbolLayer_ne(e,t,r){switch(e){case"symbol-value":return r;case"proportional":return t;default:return e}}function Graphics3DPathSymbolLayer_le(e,t,r,i){let s=0;const{origin:a,vertices:o,positions:n,positionsES:l}=e,c=e.offset+3*o.length;for(let p=e.offset;p<c;p+=3)(0,vec32.i)(Graphics3DPathSymbolLayer_pe,l[p],l[p+1],l[p+2]),r(Graphics3DPathSymbolLayer_pe,Graphics3DPathSymbolLayer_me),s+=Graphics3DPathSymbolLayer_me.sampledElevation,Graphics3DPathSymbolLayer_pe[0]=n[p]+a[0],Graphics3DPathSymbolLayer_pe[1]=n[p+1]+a[1],Graphics3DPathSymbolLayer_pe[2]=n[p+2]+a[2],i.setAltitude(Graphics3DPathSymbolLayer_pe,Graphics3DPathSymbolLayer_me.z),n[p]=Graphics3DPathSymbolLayer_pe[0]-a[0],n[p+1]=Graphics3DPathSymbolLayer_pe[1]-a[1],n[p+2]=Graphics3DPathSymbolLayer_pe[2]-a[2];return e.updatePathVertexInformation(),s/o.length}function Graphics3DPathSymbolLayer_ce(e,t,r,i,s){const a=e.stageObject,o=a.geometries;let n=0;for(const l of o){if(!PathGeometry_s(l))continue;const e=l.path,o=e.builder.path;n+=Graphics3DPathSymbolLayer_le(o,t,r,i),s!==PathGeometry_o.World&&oe(o,s,i),e.onPathChanged(l),l.invalidateBoundingInfo(),a.geometryVertexAttributeUpdated(l,VertexAttribute/* VertexAttribute */.r.POSITION)}return n/o.length}function Graphics3DPathSymbolLayer_he(e){return 1===(e.material?.color?.a??1)}const Graphics3DPathSymbolLayer_pe=(0,vec3f64/* create */.vt)(),Graphics3DPathSymbolLayer_me=new elevationAlignmentUtils/* SampleElevationInfo */.Uk;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/ellipsoidUtils.js
var ellipsoidUtils = __webpack_require__(47936);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projection/projectors.js
var projectors = __webpack_require__(12943);
;// ../node_modules/@arcgis/core/views/3d/layers/support/uvUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function uvUtils_T(t,r,e,s,i=1){if(e.isGeographic&&s===ViewingMode/* ViewingMode */.RT.Global){const t=(0,DoubleArray/* newDoubleArray */.jh)(r.length),o=r.length,s=(0,ellipsoidUtils/* getReferenceEllipsoid */.tO)(e);for(let e=0;e<o;e+=3)(0,projectors/* lonLatToWebMercatorComparable */.RC)(r,e,t,e,s);r=t}(0,vec2/* set */.hZ)(uvUtils_y,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY);for(let o=0;o<r.length;o+=3)uvUtils_y[0]=Math.min(uvUtils_y[0],r[o]),uvUtils_y[1]=Math.min(uvUtils_y[1],r[o+1]);const a=uvUtils_y[0]%i,m=uvUtils_y[1]%i,n=uvUtils_y[0]-a,c=uvUtils_y[1]-m;for(let o=0;o<r.length;o+=3){const e=o/3*4;t[e]=(r[o]-n)/i,t[e+1]=(r[o+1]-c)/i,t[e+2]=n/i,t[e+3]=c/i}}function uvUtils_M(t,r,n,c,l=1){(0,vec32.i)(uvUtils_F,1,0,0),(0,vec32.i)(uvUtils_Y,0,1,0),(0,vec32.i)(uvUtils_,0,0,1),uvUtils_D(uvUtils_x,n),(0,plane/* fromArray */.ci)(uvUtils_V,n)&&uvUtils_O(uvUtils_V,uvUtils_F,uvUtils_Y,uvUtils_,c,uvUtils_x),(0,vec2/* set */.hZ)(uvUtils_y,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),(0,vec2/* set */.hZ)(uvUtils_P,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY);for(let o=0;o<n.length;o+=3){(0,vec32.i)(uvUtils_E,n[o],n[o+1],n[o+2]);const t=(0,vec32.e)(uvUtils_F,uvUtils_E),r=(0,vec32.e)(uvUtils_Y,uvUtils_E);uvUtils_y[0]=Math.min(uvUtils_y[0],t),uvUtils_y[1]=Math.min(uvUtils_y[1],r),uvUtils_P[0]=Math.max(uvUtils_P[0],t),uvUtils_P[1]=Math.max(uvUtils_P[1],r)}const f=(0,vec32.e)(uvUtils_,uvUtils_x);uvUtils_q(uvUtils_v,uvUtils_y[0],uvUtils_y[1],f,uvUtils_F,uvUtils_Y,uvUtils_),uvUtils_q(uvUtils_A,uvUtils_P[0],uvUtils_y[1],f,uvUtils_F,uvUtils_Y,uvUtils_),uvUtils_q(uvUtils_G,uvUtils_y[0],uvUtils_P[1],f,uvUtils_F,uvUtils_Y,uvUtils_),(0,vec32.d)(uvUtils_A,uvUtils_A,uvUtils_v),(0,vec32.g)(uvUtils_A,uvUtils_A,.5),(0,vec32.d)(uvUtils_G,uvUtils_G,uvUtils_v),(0,vec32.g)(uvUtils_G,uvUtils_G,.5),(0,vec32.f)(uvUtils_v,uvUtils_v,uvUtils_A),(0,vec32.f)(uvUtils_v,uvUtils_v,uvUtils_G);const I=uvUtils_y[0]%l,h=uvUtils_y[1]%l,p=uvUtils_y[0]-I,N=uvUtils_y[1]-h;for(let o=0;o<n.length;o+=3){(0,vec32.i)(uvUtils_E,n[o],n[o+1],n[o+2]);const i=o/3,a=4*i;t[a]=((0,vec32.e)(uvUtils_F,uvUtils_E)-p)/l,t[a+1]=((0,vec32.e)(uvUtils_Y,uvUtils_E)-N)/l,t[a+2]=p/l,t[a+3]=N/l;const m=9*i;for(let t=0;t<3;t++)r[m+t]=uvUtils_v[t],r[m+t+3]=uvUtils_A[t],r[m+t+6]=uvUtils_G[t]}}const uvUtils_x=(0,vec3f64/* create */.vt)(),uvUtils_E=(0,vec3f64/* create */.vt)(),uvUtils_V=(0,plane/* create */.vt)(),uvUtils_F=(0,vec3f64/* create */.vt)(),uvUtils_Y=(0,vec3f64/* create */.vt)(),uvUtils_=(0,vec3f64/* create */.vt)(),uvUtils_y=(0,vec2f64/* create */.vt)(),uvUtils_P=(0,vec2f64/* create */.vt)(),uvUtils_v=(0,vec3f64/* create */.vt)(),uvUtils_A=(0,vec3f64/* create */.vt)(),uvUtils_G=(0,vec3f64/* create */.vt)();function uvUtils_O(t,o,r,i,m,I){null!=m?(m.basisMatrixAtPosition(I,uvUtils_S),(0,vec32.i)(uvUtils_d,uvUtils_S[0],uvUtils_S[1],uvUtils_S[2]),(0,vec32.i)(uvUtils_k,uvUtils_S[4],uvUtils_S[5],uvUtils_S[6]),(0,vec32.i)(uvUtils_w,uvUtils_S[8],uvUtils_S[9],uvUtils_S[10])):((0,vec32.i)(uvUtils_d,1,0,0),(0,vec32.i)(uvUtils_k,0,1,0),(0,vec32.i)(uvUtils_w,0,0,1));const h=(0,plane/* getNormal */.Qj)(t);(0,vec32.e)(h,uvUtils_w)<0&&(0,vec32.g)(h,h,-1),(0,vec32.c)(i,h);const p=(0,vec32.e)(h,uvUtils_k),N=(0,vec32.e)(h,uvUtils_d);Math.abs(p)>Math.abs(N)?((0,vec32.b)(o,uvUtils_d,h,-N),(0,vec32.n)(o,o),(0,vec32.h)(r,o,h),(0,vec32.n)(r,r),(0,vec32.g)(r,r,-1)):((0,vec32.b)(r,uvUtils_k,h,-p),(0,vec32.n)(r,r),(0,vec32.h)(o,r,h),(0,vec32.n)(o,o))}const uvUtils_S=(0,mat4f64/* create */.vt)(),uvUtils_d=(0,vec3f64/* create */.vt)(),uvUtils_k=(0,vec3f64/* create */.vt)(),uvUtils_w=(0,vec3f64/* create */.vt)();function uvUtils_D(t,o){(0,vec32.i)(uvUtils_U,0,0,0);for(let r=0;r<o.length-3;r+=3)uvUtils_U[0]+=o[r],uvUtils_U[1]+=o[r+1],uvUtils_U[2]+=o[r+2];(0,vec32.g)(t,uvUtils_U,1/(o.length/3-1))}const uvUtils_U=(0,vec3f64/* create */.vt)();function uvUtils_q(t,o,r,s,i,a,m){(0,vec32.i)(t,o*i[0]+r*a[0]+s*m[0],o*i[1]+r*a[1]+s*m[1],o*i[2]+r*a[2]+s*m[2])}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/ColorMaterial.js + 2 modules
var ColorMaterial = __webpack_require__(32504);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/PatternStyle.js
var PatternStyle = __webpack_require__(1563);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/TriangleMaterial.js
var TriangleMaterial = __webpack_require__(52873);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/Pattern.glsl.js
var Pattern_glsl = __webpack_require__(10068);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/PatternTechnique.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class PatternTechnique_S extends ShaderTechnique/* ShaderTechnique */.w{constructor(e,r){super(e,r,new ReloadableShaderModule/* ReloadableShaderModule */.$(Pattern_glsl.P,(()=>__webpack_require__.e(/* import() */ 4848).then(__webpack_require__.bind(__webpack_require__, 54848)))),(0,olidUtils/* olidEnabled */.E)()?PatternTechnique_E:PatternTechnique_j)}_setPipelineState(t,r){const{oitPass:s,output:m,cullFace:f,draped:S,hasOccludees:j,polygonOffset:E}=t,I=s===OITPass/* OITPass */.Y.NONE;return (0,renderState/* makePipelineState */.Ey)({blending:(0,ShaderOutput/* isColorOrColorEmission */.RN)(m)?(0,OrderIndependentTransparency/* blending */.Yf)(s):null,culling:(0,renderState/* cullingParams */.Xt)(f),depthTest:S?null:{func:(0,OrderIndependentTransparency/* oitDepthTest */.K_)(s)},depthWrite:(0,OrderIndependentTransparency/* depthWrite */.z5)(t),drawBuffers:(0,ShaderTechnique/* depthOnlyOutputBuffersOr */.L)(m,(0,OrderIndependentTransparency/* getDrawBuffers */.m6)(s,m)),colorWrite:renderState/* defaultColorWrite */.kn,stencilWrite:j?StencilUtils/* stencilWriteMaskOn */.v0:null,stencilTest:j?r?StencilUtils/* stencilToolMaskBaseParams */.a9:StencilUtils/* stencilBaseAllZerosParams */.qh:null,polygonOffset:I?E?PatternTechnique_R:null:(0,OrderIndependentTransparency/* oitPolygonOffset */.mE)(t)})}initializePipeline(e){return this._occludeePipelineState=this._setPipelineState(e,!0),this._setPipelineState(e,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}const PatternTechnique_R={factor:1,units:1},PatternTechnique_j=new Map([[VertexAttribute/* VertexAttribute */.r.POSITION,0],[VertexAttribute/* VertexAttribute */.r.COLOR,3],[VertexAttribute/* VertexAttribute */.r.UVMAPSPACE,4],[VertexAttribute/* VertexAttribute */.r.COLORFEATUREATTRIBUTE,5],[VertexAttribute/* VertexAttribute */.r.BOUNDINGRECT,6]]),PatternTechnique_E=new Map([[VertexAttribute/* VertexAttribute */.r.POSITION,0],[VertexAttribute/* VertexAttribute */.r.COLOR,3],[VertexAttribute/* VertexAttribute */.r.UVMAPSPACE,4],[VertexAttribute/* VertexAttribute */.r.COLORFEATUREATTRIBUTE,5],[VertexAttribute/* VertexAttribute */.r.BOUNDINGRECT,6],[VertexAttribute/* VertexAttribute */.r.OLIDCOLOR,9]]);

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/PatternTechniqueConfiguration.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class PatternTechniqueConfiguration_n extends DefaultTechniqueConfiguration/* DefaultTechniqueConfiguration */.E{constructor(){super(...arguments),this.cullFace=basicInterfaces/* CullFaceOptions */.s2.None,this.style=PatternStyle/* Style */.O.Horizontal,this.hasVertexColors=!1,this.polygonOffset=!1,this.hasOccludees=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.vvColor=!1,this.draped=!1,this.textureCoordinateType=TextureCoordinateAttribute_glsl/* TextureCoordinateType */.I.None,this.emissionSource=Emissions_glsl/* EmissionSource */.ZX.None,this.discardInvisibleFragments=!0,this.writeDepth=!0,this.occlusionPass=!1,this.hasVvInstancing=!1,this.vvSize=!1,this.vvOpacity=!1,this.objectAndLayerIdColorInstanced=!1,this.overlayEnabled=!1,this.snowCover=!1}}(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)({count:basicInterfaces/* CullFaceOptions */.s2.COUNT})],PatternTechniqueConfiguration_n.prototype,"cullFace",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)({count:PatternStyle/* Style */.O.COUNT})],PatternTechniqueConfiguration_n.prototype,"style",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],PatternTechniqueConfiguration_n.prototype,"hasVertexColors",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],PatternTechniqueConfiguration_n.prototype,"polygonOffset",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],PatternTechniqueConfiguration_n.prototype,"hasOccludees",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],PatternTechniqueConfiguration_n.prototype,"enableOffset",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],PatternTechniqueConfiguration_n.prototype,"terrainDepthTest",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],PatternTechniqueConfiguration_n.prototype,"cullAboveTerrain",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],PatternTechniqueConfiguration_n.prototype,"vvColor",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],PatternTechniqueConfiguration_n.prototype,"draped",void 0);

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/PatternMaterial.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class PatternMaterial_R extends TriangleMaterial/* TriangleMaterial */.W{constructor(e){super(e,PatternMaterial_I),this._configuration=new PatternTechniqueConfiguration_n,this.vertexAttributeLocations=(0,olidUtils/* olidEnabled */.E)()?PatternTechnique_E:PatternTechnique_j,this.supportsEdges=!0,this.produces=new Map([[RenderSlot/* RenderSlot */.N.OPAQUE_MATERIAL,e=>(0,ShaderOutput/* isHighlightOrOID */.CL)(e)],[RenderSlot/* RenderSlot */.N.TRANSPARENT_MATERIAL,e=>(0,ShaderOutput/* isColorOrColorEmission */.RN)(e)],[RenderSlot/* RenderSlot */.N.TRANSPARENT_MATERIAL_WITHOUT_NORMALS,e=>(0,ShaderOutput/* isDepth */.eh)(e)],[RenderSlot/* RenderSlot */.N.DRAPED_MATERIAL,e=>this.parameters.draped&&(0,ShaderOutput/* isColorEmissionHighlightOrOID */.Mb)(e)]])}getConfiguration(e,t){return super.getConfiguration(e,t,this._configuration),this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasVertexColors=this.parameters.hasVertexColors&&!this.parameters.vvColor,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.polygonOffset=this.parameters.polygonOffset,this._configuration.style=this.parameters.style,this._configuration.draped=this.parameters.draped,this._configuration.oitPass=t.oitPass,this._configuration.enableOffset=t.camera.relativeElevation<OrderIndependentTransparency/* OITPolygonOffsetLimit */.xt,this._configuration.terrainDepthTest=t.terrainDepthTest&&(0,ShaderOutput/* isColorOrColorEmission */.RN)(e),this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration}get visible(){return this.parameters.color[3]>=AlphaCutoff/* alphaCutoff */.Q}createGLMaterial(e){return new PatternMaterial_y(e)}createBufferWriter(){const e=(0,InterleavedLayout/* newLayout */.BP)().vec3f(VertexAttribute/* VertexAttribute */.r.POSITION).vec4f(VertexAttribute/* VertexAttribute */.r.UVMAPSPACE);return this.parameters.draped||e.mat3f(VertexAttribute/* VertexAttribute */.r.BOUNDINGRECT),this.parameters.vvColor?e.f32(VertexAttribute/* VertexAttribute */.r.COLORFEATUREATTRIBUTE):e.vec4u8(VertexAttribute/* VertexAttribute */.r.COLOR),(0,olidUtils/* olidEnabled */.E)()&&e.vec4u8(VertexAttribute/* VertexAttribute */.r.OLIDCOLOR),new PatternMaterial_E(e)}}class PatternMaterial_y extends GLMaterial/* default */.A{beginSlot(e){return this.getTechnique(PatternTechnique_S,e)}}class PatternMaterial_E extends DefaultBufferWriter/* DefaultBufferWriter */.Z{write(e,s,i,o,a,n){const f=(0,bufferWriterUtils/* writeDefaultAttributes */.SA)(i,o,this.vertexBufferLayout,e,s,a,n);for(const c of this.vertexBufferLayout.fields.keys()){const s=i.get(c),o=s?.indices;if(s&&o)switch(c){case VertexAttribute/* VertexAttribute */.r.UVMAPSPACE:{(0,Util/* assert */.vA)(4===s.size);const e=a.getField(c,BufferView/* BufferViewVec4f */.Eq);e&&(0,bufferWriterUtils/* writeBufferVec4 */.Ut)(s,e,n);break}case VertexAttribute/* VertexAttribute */.r.BOUNDINGRECT:{(0,Util/* assert */.vA)(9===s.size);const r=a.getField(c,BufferView/* BufferViewMat3f */.jZ);r&&PatternMaterial_L(s,e,r,n);break}}}return f}}function PatternMaterial_L(e,t,r,s){const{data:i,indices:o}=e,a=t,n=r.typedBuffer,f=r.typedBufferStride,c=o.length;s*=f;for(let l=0;l<c;++l){const e=9*o[l],t=i[e],r=i[e+1],c=i[e+2];n[s]=a[0]*t+a[4]*r+a[8]*c+a[12],n[s+1]=a[1]*t+a[5]*r+a[9]*c+a[13],n[s+2]=a[2]*t+a[6]*r+a[10]*c+a[14];for(let o=3;o<9;++o)n[s+o]=i[e+o];s+=f}}class PatternMaterial_I extends VisualVariablePassParameters/* VisualVariablePassParameters */.S{constructor(){super(...arguments),this.color=(0,vec4f64/* fromValues */.fA)(1,1,1,1),this.hasVertexColors=!1,this.polygonOffset=!1,this.hasSlicePlane=!1,this.cullFace=basicInterfaces/* CullFaceOptions */.s2.None,this.hasOccludees=!1,this.style=PatternStyle/* Style */.O.Cross,this.draped=!0}}

;// ../node_modules/@arcgis/core/views/3d/layers/support/patternUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function patternUtils_s(e,r){const a=e?.pattern;return null==a?new ColorMaterial/* ColorMaterial */.v(r):"none"===a.style||"solid"===a.style?("none"===a.style&&(r.color=(0,vec4f64/* fromValues */.fA)(0,0,0,0),r.forceTransparentMode=!0),new ColorMaterial/* ColorMaterial */.v(r)):(r.style=patternUtils_l(a.style),new PatternMaterial_R(r))}function patternUtils_l(t){switch(t){case"horizontal":return PatternStyle/* Style */.O.Horizontal;case"vertical":return PatternStyle/* Style */.O.Vertical;case"cross":return PatternStyle/* Style */.O.Cross;case"forward-diagonal":return PatternStyle/* Style */.O.ForwardDiagonal;case"backward-diagonal":return PatternStyle/* Style */.O.BackwardDiagonal;case"diagonal-cross":return PatternStyle/* Style */.O.DiagonalCross;default:return}}function patternUtils_c(t){return t.material instanceof PatternMaterial_R&&!t.material.parameters.draped}function patternUtils_u(t,e){if(patternUtils_c(t)){const o=t.attributes.get(VertexAttribute/* VertexAttribute */.r.POSITION).data,n=t.getMutableAttribute(VertexAttribute/* VertexAttribute */.r.UVMAPSPACE).data,i=t.getMutableAttribute(VertexAttribute/* VertexAttribute */.r.BOUNDINGRECT).data;uvUtils_M(n,i,o,e)}}function patternUtils_m(t,r,a,o,n){const i=(0,ElevationAligners/* perVertexElevationAligner */.B6)(t,r,a,o,n),s=t.stageObject.geometries;for(const e of s)patternUtils_u(e,n);return i}

;// ../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DPolygonFillSymbolLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const Graphics3DPolygonFillSymbolLayer_z=["polyline","polygon","extent"];class Graphics3DPolygonFillSymbolLayer_H extends Graphics3DSymbolLayer/* Graphics3DSymbolLayer */.U{static{this.elevationModeChangeTypes={definedChanged:elevationAlignmentUtils/* SymbolUpdateType */.uw.RECREATE,staysOnTheGround:elevationAlignmentUtils/* SymbolUpdateType */.uw.NONE,onTheGroundChanged:elevationAlignmentUtils/* SymbolUpdateType */.uw.RECREATE}}constructor(e,t,i,r){super(e,t,i,r,Graphics3DPolygonFillSymbolLayer_Q(t)),this._needsUV=!1,this._materials=[]}async doLoad(){this._fastUpdates=(0,FastSymbolUpdates/* initFastSymbolUpdatesState */.s_)(this._context.renderer,this._vvConvertOptions)}_createMaterials(){if(this._materials.length>0)return;const e=this.symbolLayer?.material?.color,i=this._getCombinedOpacityAndColor(e);this._materials[Graphics3DPolygonFillSymbolLayer_J.Fill]=patternUtils_s(this.symbolLayer,{color:i,forceTransparentMode:this.needsDrivenTransparentPass,discardInvisibleFragments:!0,polygonOffset:!1,hasVertexColors:!0,draped:this.draped,hasSlicePlane:this._context.slicePlaneEnabled,...this._fastUpdates?.materialParameters}),this._needsUV=this._materials[Graphics3DPolygonFillSymbolLayer_J.Fill]instanceof PatternMaterial_R;const r=this.symbolLayer.outline;if(Graphics3DPolygonFillSymbolLayer_K(r)){const e=(0,lineStippleUtils/* getStipplePatternForLinePattern */.Xq)(r.pattern);this._materials[Graphics3DPolygonFillSymbolLayer_J.Outline]=new RibbonLineMaterial/* RibbonLineMaterial */.W({width:(0,screenUtils/* pt2px */.Lz)(r.size),color:this._getOutlineColor(),hasPolygonOffset:!0,hasSlicePlane:this._context.slicePlaneEnabled,isClosed:!0,stipplePattern:e,cap:n(r.patternCap||"butt")})}}createGraphics3DGraphic(e){const t=e.graphic;if(!this._validateGeometry(t.geometry,Graphics3DPolygonFillSymbolLayer_z,this.symbolLayer.type))return null;const i=this._getVertexOpacityAndColor(e.renderingInfo,this._getFallbackOpacityAndColor(),255),r=this.setGraphicElevationContext(t);return this.ensureDrapedStatus("on-the-ground"===r.mode),this._createMaterials(),this.draped?this._createAsOverlay(t,i):this._createAs3DShape(t,i,r)}applyRendererDiff(e,t){for(const i in e.diff){if("visualVariables"!==i)return interfaces/* ApplyRendererDiffResult */.w.RecreateSymbol;if(!(0,FastSymbolUpdates/* updateFastSymbolUpdatesState */.J_)(this._fastUpdates,t,this._vvConvertOptions))return interfaces/* ApplyRendererDiffResult */.w.RecreateSymbol;this._materials[Graphics3DPolygonFillSymbolLayer_J.Fill]?.setParameters(this._fastUpdates.materialParameters)}return interfaces/* ApplyRendererDiffResult */.w.FastUpdate}layerOpacityChanged(){if(null!=this._materials[Graphics3DPolygonFillSymbolLayer_J.Fill]){const e=this._materials[Graphics3DPolygonFillSymbolLayer_J.Fill].parameters.color,t=this.symbolLayer?.material?.color,i=this._getCombinedOpacity(t);this._materials[Graphics3DPolygonFillSymbolLayer_J.Fill].setParameters({color:[e[0],e[1],e[2],i],forceTransparentMode:this.needsDrivenTransparentPass})}if(null!=this._materials[Graphics3DPolygonFillSymbolLayer_J.Outline]){const e=this._materials[Graphics3DPolygonFillSymbolLayer_J.Outline].parameters.color;this._materials[Graphics3DPolygonFillSymbolLayer_J.Outline].setParameters({color:[e[0],e[1],e[2],this._getOutlineOpacity()]})}}layerElevationInfoChanged(e,t,i){const r=this._elevationContext.mode,o=(0,elevationAlignmentUtils/* elevationModeChangeUpdateType */.I2)(Graphics3DPolygonFillSymbolLayer_H.elevationModeChangeTypes,i,r);if(o!==elevationAlignmentUtils/* SymbolUpdateType */.uw.UPDATE)return o;const n=(0,elevationAlignmentUtils/* needsElevationUpdates2D */.nu)(r);return this.updateGraphics3DGraphicElevationInfo(e,t,(()=>n))}slicePlaneEnabledChanged(){if(this._materials[Graphics3DPolygonFillSymbolLayer_J.Fill]?.setParameters({hasSlicePlane:this._context.slicePlaneEnabled}),this._materials[Graphics3DPolygonFillSymbolLayer_J.Outline]){const e={hasSlicePlane:this._context.slicePlaneEnabled};this._materials[Graphics3DPolygonFillSymbolLayer_J.Outline].setParameters(e)}return!0}physicalBasedRenderingChanged(){return!0}_createAs3DShape(e,t,i){const r=b(e.geometry);if(!r)return null;const o=polygon_p(r,this._context.elevationProvider,this._context.renderCoordsHelper,i),n=new Graphics3DPolygonFillSymbolLayer_W(o,t,this._context.layerViewUid,e.uid),s=n.renderData.position.length/3;if(this._needsUV&&(n.uvMapSpace=(0,FloatArray/* newFloatArray */.oe)(4*s,!0),n.boundingRect=(0,DoubleArray/* newDoubleArray */.jh)(9*s,!0),uvUtils_M(n.uvMapSpace,n.boundingRect,n.renderData.position,this._context.renderCoordsHelper)),n.objectAndLayerIdColor=this._context.stage.renderView?.getObjectAndLayerIdColor(n),this._createAs3DShapeFill(e,n),this._materials[Graphics3DPolygonFillSymbolLayer_J.Outline]&&this._createAs3DShapeOutline(n),this._logGeometryCreationWarnings(n.renderData,r.rings,"rings","FillSymbol3DLayer"),0===n.outGeometries.length)return null;const a=new Object3D/* Object3D */.B({geometries:n.outGeometries,castShadow:!1,layerViewUid:this._context.layerViewUid,graphicUid:e.uid}),l=new Graphics3DObject3DGraphicLayer/* Graphics3DObject3DGraphicLayer */.Y(this,a,null,patternUtils_m,i);return l.alignedSampledElevation=n.renderData.sampledElevation,l.needsElevationUpdates=(0,elevationAlignmentUtils/* needsElevationUpdates2D */.nu)(i.mode),l}_createAs3DShapeFill(e,t){const i=t.renderData.polygons;for(const{position:r,mapPositions:n,holeIndices:a,index:l,count:c}of i){if(null!=this._context.clippingExtent&&((0,aaBoundingBox/* fromBuffer */.vY)(n,Graphics3DPolygonFillSymbolLayer_N),!(0,aaBoundingBox/* intersectsClippingArea */.KG)(Graphics3DPolygonFillSymbolLayer_N,this._context.clippingExtent)))continue;const i=polygonUtils_l(n,a,this._context.elevationProvider.spatialReference);if(0===i.length)continue;const h=this._fastUpdates?.visualVariables.color,d=polygonUtils_m({material:this._materials[Graphics3DPolygonFillSymbolLayer_J.Fill],indices:i,mapPositions:n,attributeData:{position:r,color:h?null:t.color,colorFeature:h?(0,FastSymbolUpdates/* getAttributeValue */.ul)(h.field,e):null,uvMapSpace:this._needsUV?(0,FloatArray/* floatSubArray */.AK)(t.uvMapSpace,4*l,4*c):null,boundingRect:this._needsUV?(0,DoubleArray/* doubleSubArray */.l5)(t.boundingRect,9*l,9*c):null,objectAndLayerIdColor:t.objectAndLayerIdColor}});t.outGeometries.push(d)}}_createAs3DShapeOutline(e){if(null==this._materials[Graphics3DPolygonFillSymbolLayer_J.Outline])return;const t=e.renderData.outlines;for(const{mapPositions:i,position:r}of t){if(null!=this._context.clippingExtent&&((0,aaBoundingBox/* fromBuffer */.vY)(i,Graphics3DPolygonFillSymbolLayer_N),!(0,aaBoundingBox/* intersectsClippingArea */.KG)(Graphics3DPolygonFillSymbolLayer_N,this._context.clippingExtent)))continue;const t=(0,line/* createGeometry */.t)(this._materials[Graphics3DPolygonFillSymbolLayer_J.Outline],{overlayInfo:null,removeDuplicateStartEnd:!0,mapPositions:i,attributeData:{position:r}},e.objectAndLayerIdColor);e.outGeometries.push(t)}}_createAsOverlay(e,t){const i=b(e.geometry);if(null==i)return null;this._materials[Graphics3DPolygonFillSymbolLayer_J.Fill].renderPriority=this._renderPriority+this._renderPriorityStep/2,null!=this._materials[Graphics3DPolygonFillSymbolLayer_J.Outline]&&(this._materials[Graphics3DPolygonFillSymbolLayer_J.Outline].renderPriority=this._renderPriority);const r=c(i,this._context.overlaySR),o=new Graphics3DPolygonFillSymbolLayer_q(r,t,this._context.layerViewUid,e.uid),n=o.renderData.position.length/3;return this._needsUV&&(o.uvMapSpace=(0,FloatArray/* newFloatArray */.oe)(4*n,!0),uvUtils_T(o.uvMapSpace,o.renderData.position,this._context.overlaySR,this._context.graphicsCoreOwner.view.state.viewingMode)),o.outBoundingBox=(0,aaBoundingBox/* empty */.Ie)(),o.objectAndLayerIdColor=this._context.stage.renderView?.getObjectAndLayerIdColor(o),this._createAsOverlayFill(e,o),this._materials[Graphics3DPolygonFillSymbolLayer_J.Outline]&&this._createAsOverlayOutline(o),this._logGeometryCreationWarnings(o.renderData,i.rings,"rings","FillSymbol3DLayer"),0===o.outGeometries.length?null:new Graphics3DDrapedGraphicLayer_l(this,o.outGeometries,o.outBoundingBox,this._context.drapeSourceRenderer)}_createAsOverlayFill(e,t){const r=t.renderData.polygons;for(const{position:n,holeIndices:a,index:c,count:p}of r){const r=(0,aaBoundingBox/* fromBuffer */.vY)(n,Graphics3DPolygonFillSymbolLayer_N);if(!(0,aaBoundingBox/* intersectsClippingArea */.KG)(r,this._context.clippingExtent))continue;const h=(0,earcut.e)(n,a,3);if(0===h.length)continue;(0,aaBoundingBox/* expandWithAABB */.RF)(t.outBoundingBox,r);const d=this._fastUpdates?.visualVariables.color,m=polygonUtils_m({material:this._materials[Graphics3DPolygonFillSymbolLayer_J.Fill],indices:h,attributeData:{position:n,color:d?null:t.color,colorFeature:d?(0,FastSymbolUpdates/* getAttributeValue */.ul)(d.field,e):null,uvMapSpace:this._needsUV?(0,FloatArray/* floatSubArray */.AK)(t.uvMapSpace,4*c,4*p):null,objectAndLayerIdColor:t.objectAndLayerIdColor}});t.outGeometries.push(new RenderGeometry/* RenderGeometry */.$(m,t))}}_createAsOverlayOutline(e){if(null==this._materials[Graphics3DPolygonFillSymbolLayer_J.Outline])return;const t=e.renderData.outlines;for(let i=0;i<t.length;++i){const{position:r}=t[i];if((0,aaBoundingBox/* fromBuffer */.vY)(r,Graphics3DPolygonFillSymbolLayer_N),!(0,aaBoundingBox/* intersectsClippingArea */.KG)(Graphics3DPolygonFillSymbolLayer_N,this._context.clippingExtent))continue;(0,aaBoundingBox/* expandWithAABB */.RF)(e.outBoundingBox,Graphics3DPolygonFillSymbolLayer_N);const n=(0,line/* createGeometry */.t)(this._materials[Graphics3DPolygonFillSymbolLayer_J.Outline],{overlayInfo:{spatialReference:this._context.overlaySR,renderCoordsHelper:this._context.renderCoordsHelper},removeDuplicateStartEnd:!0,attributeData:{position:r}},e.objectAndLayerIdColor);e.outGeometries.push(new RenderGeometry/* RenderGeometry */.$(n,e))}}_getOutlineOpacity(){const e=this.symbolLayer?.outline?.color;return(this.draped?1:this._getLayerOpacity())*(null!=e?e.a:0)}_getOutlineColor(){const t=this.symbolLayer?.outline?.color,i=this._getOutlineOpacity();return (0,graphicUtils/* mixinColorAndOpacity */.$C)(null!=t?Color/* default */.A.toUnitRGB(t):null,i)}test(){return{...super.test(),createAsOverlay:(e,t)=>this._createAsOverlay(e,t),createAs3DShape:(e,t,i)=>this._createAs3DShape(e,t,i)}}_getFallbackOpacityAndColor(){const t=this.symbolLayer?.material?.color;return Color/* default */.A.toUnitRGBA(t)??vec4f64/* ZEROS */.uY}get _vvConvertOptions(){return new FastSymbolUpdates/* ConvertOptions */.wI({supports:{size:!1,color:!0,rotation:!1,opacity:!1},fallbackColor:this._getFallbackOpacityAndColor()})}}const Graphics3DPolygonFillSymbolLayer_N=(0,aaBoundingBox/* create */.vt)();class Graphics3DPolygonFillSymbolLayer_W extends g{constructor(e,t,i,r){super(e,i,r),this.color=t}}class Graphics3DPolygonFillSymbolLayer_q extends g{constructor(e,t,i,r){super(e,i,r),this.color=t}}var Graphics3DPolygonFillSymbolLayer_J;function Graphics3DPolygonFillSymbolLayer_K(e){return null!=e?.size&&e.size>0&&null!=e.color&&(null==e.pattern||"style"!==e.pattern.type||"none"!==e.pattern.style)}function Graphics3DPolygonFillSymbolLayer_Q(e){return 1===(e.material?.color?.a??1)}!function(e){e[e.Fill=0]="Fill",e[e.Outline=1]="Outline"}(Graphics3DPolygonFillSymbolLayer_J||(Graphics3DPolygonFillSymbolLayer_J={}));

// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/callouts/calloutUtils.js
var calloutUtils = __webpack_require__(65834);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/graphics/ElevationContext.js
var ElevationContext = __webpack_require__(58343);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DObjectMetadata.js
var Graphics3DObjectMetadata = __webpack_require__(90997);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/LabelParameters.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class LabelParameters_i{constructor(i,r="center",c=!1,a=(0,vec2f64/* create */.vt)(),o=(0,vec4f64/* fromValues */.fA)(0,0,0,-1),l="world",f=(0,vec3f64/* create */.vt)(),n=0){this.verticalOffset=i,this.anchor=r,this.hasLabelVerticalOffset=c,this.screenOffset=a,this.centerOffset=o,this.centerOffsetUnits=l,this.translation=f,this.elevationOffset=n}}class LabelParameters_r{constructor(e,s="center",i="center",r=null,c=(0,vec2f64/* create */.vt)(),a=!0){this.placement=e,this.horizontalPlacement=s,this.verticalPlacement=i,this.text=r,this.displaySize=c,this.isFocused=a}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/FontMetrics.js
var FontMetrics = __webpack_require__(57649);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/fontUtils.js
var fontUtils = __webpack_require__(72777);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/TextRenderParameters.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class TextRenderParameters_s{constructor(o){this.definition=o,this.key=JSON.stringify(o),this.haloSize=Math.round(o.halo.size),this.textStyle=TextRenderParameters_a(o.color),this.haloStyle=TextRenderParameters_l(o.halo.color),this.backgroundStyle=0!==o.background.color[3]?TextRenderParameters_a(o.background.color):null}fontString(o){const t=this.definition.font,e="sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji";return`${t.style} ${t.weight} ${o}px ${t.family}, ${e}`}setFontProperties(o,t){o.font=this.fontString(t),o.textAlign="left",o.textBaseline="alphabetic"}static async fromSymbol(l,a){const f=l?.material?.color,m=Color/* default */.A.toUnitRGBA(f)??vec4f64/* ZEROS */.uY,g=null!=l.size?(0,screenUtils/* pt2px */.Lz)(l.size):12,u=l.lineHeight,d=null!=l.background?Color/* default */.A.toUnitRGBA(l.background.color):vec4f64/* ZEROS */.uY,h={family:l.font?.family??"sans-serif",decoration:l.font?.decoration??"none",weight:l.font?.weight??"normal",style:l.font?.style??"normal"},y=l.halo,b=null!=y?.color&&y.size>0?{size:(0,screenUtils/* pt2px */.Lz)(y.size),color:Color/* default */.A.toUnitRGBA(y.color)}:{size:0,color:vec4f64/* ZEROS */.uY},p=new TextRenderParameters_s({color:m,size:g,background:{color:d,padding:null!=l.background?[.65*g,.5*g]:[0,0],borderRadius:null!=l.background?g*(6/16):0},lineSpacingFactor:u,font:h,halo:b,pixelRatio:a});if(l.font){let o=!1;const r=p.fontString(g);try{o=(await document.fonts.load(r)).some((o=>!(0,fontUtils/* isCachedFontFace */.NZ)(o)))}catch(S){Logger/* default */.A.getLogger("esri.views.3d.webgl-engine.lib.TextRenderParameters").warnOnce(`Failed to preload font '${r}'. Some text symbology may be rendered using the default browser font.`)}if(!o&&!TextRenderParameters_c.has(l.font.family))try{await (0,fontUtils/* loadFont */.Al)(l.font)}catch(S){}}return p}}function TextRenderParameters_l(o){return`rgb(${o.slice(0,3).map((o=>Math.floor(255*o))).toString()})`}function TextRenderParameters_a(o){return`rgba(${o.slice(0,3).map((o=>Math.floor(255*o))).toString()},${o[3]})`}const TextRenderParameters_c=new Set(["Arial","Times New Roman","Courier New","serif","sans-serif","monospace","cursive","fantasy","system-ui","ui-serif","ui-sans-serif","ui-monospace","ui-rounded","math","emoji","fangsong"]);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/TextHelperCanvas.js
var TextHelperCanvas = __webpack_require__(99428);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/TextRenderer.js
var TextRenderer = __webpack_require__(27999);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/uid.js
var uid = __webpack_require__(65061);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(9272);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/testUtils.js
var testUtils = __webpack_require__(53834);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/textureUtils.js
var textureUtils = __webpack_require__(84147);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/support/Yield.js
var Yield = __webpack_require__(75199);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/Texture.js
var webgl_Texture = __webpack_require__(8595);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/TextureDescriptor.js
var TextureDescriptor = __webpack_require__(45758);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/TextTextureAtlas.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const TextTextureAtlas_w=4096;let TextTextureAtlas_T=class extends Accessor/* default */.A{constructor(e){super(e),this.id=(0,uid/* generateUID */.c)(),this.events=new Evented/* default */.A,this._glTexture=null,this._atlas=new TextTextureAtlas_b(256,256),this._needsRepack=!1,this._canRepack=!0,this._elementsToRender=new Map,this._elements=new Map,this._uvCallbacks=new Map,this.updating=!1}initialize(){this._canvas=document.createElement("canvas"),this._canvas.setAttribute("id","textAtlasCanvas"),this._canvas.setAttribute("style","display:none"),this._ctx=this._canvas.getContext("2d"),this._stage=this.view.stage,this._stage.addTexture(this),this._updateCanvasElementSize(this._atlas),this._reset()}unload(){this._glTexture=(0,maybe/* disposeMaybe */.WD)(this._glTexture),this._frameWorker=(0,maybe/* removeMaybe */.xt)(this._frameWorker),this.updating=!1,this.events.emit("unloaded")}get loaded(){return null!=this._glTexture}get glTexture(){return this._glTexture}static get maxSize(){return TextTextureAtlas_C=testUtils/* textTextureAtlas */.G.stableRendering?TextTextureAtlas_k:0,[TextTextureAtlas_w-TextTextureAtlas_k-TextTextureAtlas_C,TextTextureAtlas_w-TextTextureAtlas_k-TextTextureAtlas_C-TextTextureAtlas_R]}load(e){if(this._glTexture)return this._glTexture;const t=new TextureDescriptor/* TextureDescriptor */.R;return t.wrapMode=enums/* TextureWrapMode */.pF.CLAMP_TO_EDGE,t.samplingMode=enums/* TextureSamplingMode */.Cj.LINEAR_MIPMAP_LINEAR,t.hasMipmap=!0,t.preMultiplyAlpha=!0,t.maxAnisotropy=e.parameters.maxMaxAnisotropy,this._glTexture=new webgl_Texture/* Texture */.g(e,t,this._canvas),this._frameWorker=this.view.resourceController.scheduler.registerTask(Scheduler/* TaskPriority */.W6.TEXT_TEXTURE_ATLAS,this),this.setDirty(),this._glTexture}dispose(){this._elements.clear(),this._elementsToRender.clear(),this._frameWorker=(0,maybe/* removeMaybe */.xt)(this._frameWorker),this._glTexture&&(this._stage.removeTexture(this),this._glTexture=(0,maybe/* disposeMaybe */.WD)(this._glTexture)),this._canvas.width=0,this._canvas.height=0,this._canvas=null,this._ctx=null}_updateCanvasElementSize(e){this._canvas.width=e.width,this._canvas.height=e.height}_resizeAtlas(e,t){const{width:s,height:i}=this._atlas;s===e&&i===t||(this._atlas.width=e,this._atlas.height=t,this._glTexture?.resize(e,t),this._glTexture?.updateData(0,0,0,s,i,this._canvas),this._updateCanvasElementSize(this._atlas),this._elements.forEach((e=>this._uvCallbacks.get(e.textRenderer.key)?.forEach((t=>t(e.uv))))),this._reset())}_reset(){this._elementsToRender.clear(),this._atlas.reset(),this._needsRepack=!0,this.setDirty()}_addAtlasElement(e,t,s,i){const r=this._atlas;if(r.width<s||r.height<i)return!1;let n=r.cursors.get(i);if(!n){if(r.height<r.nextY+i)return!1;n=[new TextTextureAtlas_A(r.nextY)],r.cursors.set(i,n),r.nextY+=i}let h=n.find((e=>r.width>=e.x+s));if(null==h){if(r.height<r.nextY+i)return!1;h=new TextTextureAtlas_A(r.nextY),r.nextY+=i,n.push(h)}return e.setNewPosition(h),this._elements.set(t,e),this._elementsToRender.set(t,e),h.x+=s,!0}_ensureCallbacks(e){const t=this._uvCallbacks.get(e);if(t)return t;const s=new Set;return this._uvCallbacks.set(e,s),s}_addCallback(e,t){this._ensureCallbacks(e).add(t)}_removeCallback(e,t){const s=this._uvCallbacks.get(e);return!(!s?.delete(t)||0!==s.size)&&(this._uvCallbacks.delete(e),!0)}_processAddition(e){const t=e.textRenderer.key;if(this._needsRepack)return void this._elements.set(t,e);const s=this._atlas,i=e.textRenderer.renderedWidth,r=e.textRenderer.renderedHeight,n=i+TextTextureAtlas_k,h=r+TextTextureAtlas_k+TextTextureAtlas_R;if(!this._addAtlasElement(e,t,n,h)){if(this._canRepack)this._reset();else if(s.width<n){const e=(0,textureUtils/* applyTextureResizeModuloCeil */.FC)(Math.max(n,1.5*s.width),TextTextureAtlas_w);this._resizeAtlas(e,s.height)}else{const e=s.nextY+h,t=(0,textureUtils/* applyTextureResizeModuloCeil */.FC)(Math.max(e,1.5*s.height),TextTextureAtlas_w);if(t>s.height)this._resizeAtlas(s.width,t);else if(s.width<TextTextureAtlas_w){const e=(0,textureUtils/* applyTextureResizeModuloCeil */.FC)(1.5*s.width,TextTextureAtlas_w);this._resizeAtlas(e,s.height)}}this._elements.set(t,e)}}_renderElement(e){const t=e.commitNewPosition(),s=e.textRenderer;this._ctx.clearRect(t[0]-TextTextureAtlas_k,t[1]-TextTextureAtlas_k,s.renderedWidth+2*TextTextureAtlas_k,s.renderedHeight+2*TextTextureAtlas_k),s.render(this._ctx,t[0],t[1]),this._uvCallbacks.get(s.key)?.forEach((t=>t(e.uv)))}get running(){return this.updating}runTask(e){if(null==this._glTexture)return Yield/* Yield */.G;for(;this._needsRepack&&(this._canRepack||this._atlas.height<TextTextureAtlas_w&&this._atlas.height<TextTextureAtlas_w);){this._canRepack=this._needsRepack=!1;const t=this._elements;this._elements=new Map,t.forEach((e=>this._processAddition(e))),e.madeProgress()}if(this._elementsToRender.size>0){for(const[t,s]of this._elementsToRender){if(e.done)break;this._renderElement(s),this._elementsToRender.delete(t),e.madeProgress()}this._glTexture.setData(this._canvas)}this.updating=this._elementsToRender.size>0}addText(e,t){const s=e.key;this._addCallback(s,t);let i=this._elements.get(s);return i?(0,vec42.a)(i.uv,vec4f64/* ZEROS */.uY)||t(i.uv):(i=new TextTextureAtlas_y(e),this._processAddition(i),this.setDirty()),{remove:()=>this._removeText(e,t)}}_removeText(e,t){const s=e.key;this._elements.get(s)&&this._removeCallback(s,t)&&(this._elements.delete(s),this._elementsToRender.delete(s),this._canRepack=!0)}setDirty(){this._glTexture&&(this.updating=!0)}get test(){}};(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],TextTextureAtlas_T.prototype,"view",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean})],TextTextureAtlas_T.prototype,"updating",void 0),TextTextureAtlas_T=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.3d.webgl-engine.lib.TextTextureAtlas")],TextTextureAtlas_T);const TextTextureAtlas_k=2,TextTextureAtlas_R=2;class TextTextureAtlas_y{constructor(e){this.textRenderer=e,this._uv=(0,vec4f64/* create */.vt)(),this._newPosition=[0,0]}get uv(){if(null==this._xOffset||null==this._yOffset)return vec4f64/* ZEROS */.uY;const{renderedWidth:e,renderedHeight:t}=this.textRenderer;return (0,vec42.s)(this._uv,this._xOffset,this._yOffset+t,this._xOffset+e,this._yOffset)}setNewPosition(e){this._newPosition[0]=e.x,this._newPosition[1]=e.y}commitNewPosition(){return this._xOffset=this._newPosition[0],this._yOffset=this._newPosition[1],this._newPosition}get xOffset(){return this._xOffset}get yOffset(){return this._yOffset}}class TextTextureAtlas_b{constructor(e,t){this.width=e,this.height=t,this.cursors=new Map,this.nextY=0}reset(){this.cursors.clear(),this.nextY=TextTextureAtlas_C}}class TextTextureAtlas_A{constructor(e){this.y=e,this.x=TextTextureAtlas_C}}let TextTextureAtlas_C=0;

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/TextTextureFactory.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class TextTextureFactory_i{constructor(e,n,s){this._renderer=new TextRenderer/* TextRenderer */.Js(e,n,s,TextTextureAtlas_T.maxSize)}get key(){return this._renderer.key}get baselineAnchorY(){return 1-this._renderer.firstRenderedBaselinePosition/this._renderer.renderedHeight}get displayWidth(){return this._renderer.displayWidth}get displayHeight(){return this._renderer.displayHeight}create(){const r=(0,TextHelperCanvas/* getTextHelperCanvas */.y)(TextTextureFactory_d,this._renderer.renderedWidth,this._renderer.renderedHeight),t=r.getContext("2d");return t.save(),this._renderer.render(t,0,0),t.restore(),new Texture/* Texture */.g(r,{wrap:{s:enums/* TextureWrapMode */.pF.CLAMP_TO_EDGE,t:enums/* TextureWrapMode */.pF.CLAMP_TO_EDGE},noUnpackFlip:!1,mipmap:!0,preMultiplyAlpha:!0})}}const TextTextureFactory_d={canvas:null};

;// ../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DTextSymbolLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const Graphics3DTextSymbolLayer_V=(0,vec3f64/* freeze */.CN)(0,0,1);class Graphics3DTextSymbolLayer_H extends Graphics3DSymbolLayer/* Graphics3DSymbolLayer */.U{constructor(e,t,s,r){super(e,t,s,r),this._elevationOptions={supportsOffsetAdjustment:!0,supportsOnTheGround:!1},this.ensureDrapedStatus(!1)}async doLoad(){if(!this._drivenProperties.size){const t=(0,graphicUtils/* validateSymbolLayerSize */.Hj)(this.symbolLayer.size);if(t)throw new core_Error/* default */.A("graphics3dtextsymbollayer:invalid-size",t)}await this._createTextRenderParameters()}async _createTextRenderParameters(){const e=this._context.graphicsCoreOwner.view.state.rasterPixelRatio;this._textRenderParameters=await TextRenderParameters_s.fromSymbol(this.symbolLayer,e)}destroy(){super.destroy()}createGraphics3DGraphic(e){const t=e.graphic,s=(0,pointUtils/* placePointOnGeometry */.ZX)(t.geometry);if(null==s)return this.logger.warn(`unsupported geometry type for text symbol: ${t.geometry.type}`),null;const r=this.view.focusAreasView?.containsGeometry(s)??!0,o=this.symbolLayer.text;if(null==o||""===o)return null;const n=(0,calloutUtils/* hasCalloutSupport */.YX)(this.symbol)&&this.symbol.hasVisibleVerticalOffset()?this.symbol.verticalOffset:null;if(null!=n&&!(0,calloutUtils/* textSymbolLayerSupportsVerticalOffset */.Ie)(this.symbolLayer))return this.logger.errorOncePerTick(`Callouts and vertical offset on text symbols are currently only supported with 'center' horizontal alignment (not with '${this.symbolLayer.horizontalAlignment}' alignment)`),null;const{verticalAlignment:i}=this.symbolLayer,a=new LabelParameters_i(n);(0,placementUtils/* verticalScreenOffsetFromAlignment */.xU)(i,a.screenOffset);const l=new LabelParameters_r(a,this.symbolLayer.horizontalAlignment,(0,placementUtils/* verticalPlacementFromAlignment */.RH)(i));return l.isFocused=r??l.isFocused,this._createAs3DShape(t,s,o,l)}updateFocus(e,t){t.forEach((t=>{const s=(0,pointUtils/* placePointOnGeometry */.ZX)(t.graphic.geometry);if(null==s)return void this.logger.warn(`unsupported geometry type for text symbol: ${t.graphic.geometry.type}`);const r=this.view.focusAreasView?.containsGeometry(s)??!0;t.layers.forEach((s=>{if(s?.graphics3DSymbolLayer===this&&s.stageObject){s.stageObject.geometries.some((e=>e.material.parameters.isFocused!==r))&&e(t)}}))}))}createLabel(e,t,s,r,o){const n=e.graphic,i=(0,pointUtils/* placePointOnGeometry */.ZX)(n.geometry);if(null==i)return this.logger.warn(`unsupported geometry type for label: ${n.geometry.type}`),null;const a=this.view.focusAreasView?.containsGeometry(i)??!0,l=t.text;return!l||/^\s+$/.test(l)?null:(t.isFocused=a??t.isFocused,this._createAs3DShape(n,i,l,t,s,r,o))}setGraphicElevationContext(e,t=new ElevationContext/* ElevationContext */.F,s=0){return super.setGraphicElevationContext(e,t),t.addOffsetRenderUnits(s),t}layerOpacityChanged(){return this.logger.warn("layer opacity change not yet implemented in Graphics3DTextSymbolLayer"),!1}layerElevationInfoChanged(e,t){return Graphics3DTextSymbolLayer_W(e,t,((e,t)=>{this.updateGraphicElevationContext(t,e)})),elevationAlignmentUtils/* SymbolUpdateType */.uw.UPDATE}slicePlaneEnabledChanged(e,t){return Graphics3DTextSymbolLayer_W(e,t,(e=>{for(const t of e.stageObject.geometries)t.material.setParameters({hasSlicePlane:this._context.slicePlaneEnabled})})),!0}physicalBasedRenderingChanged(){return!0}get pixelRatioChanged(){return!1}updateGraphicElevationContext(e,t){const{elevationContext:s,metadata:r}=t;this.setGraphicElevationContext(e,s,r?.elevationOffset??0),t.needsElevationUpdates=(0,elevationAlignmentUtils/* needsElevationUpdates2D */.nu)(s.mode)||"absolute-height"===s.mode}updateGeometry(e,t){if(this.draped||!this._validateGeometry(t))return!1;const{elevationContext:s,stageObject:r}=e;if(s.mode!==this.getGeometryElevationMode(t))return!1;const o=(0,pointUtils/* placePointOnGeometry */.ZX)(t);if(!o)return!1;const n=(0,pointUtils/* updateStageObjectGeometry */.hS)(r,this._context,o,s);if(null==n)return!1;const i=(0,pointUtils/* getLocalOriginForPoint */.R$)(this._context,o);return r.geometries[0].localOrigin===i&&(e.alignedSampledElevation=n,(0,pointUtils/* extendPointGraphicElevationContext */.d2)(e,o,this._context.elevationProvider),!0)}_defaultElevationInfoNoZ(){return Graphics3DTextSymbolLayer_I}_createAs3DShape(e,a,c,m,h,v=null,x=()=>m.placement.elevationOffset){const b=this.setGraphicElevationContext(e,new ElevationContext/* ElevationContext */.F,m.placement.elevationOffset),O="polyline"===e.geometry?.type,w=e.uid;let P=null,E=null;if(null==v){const e=(0,placementUtils/* textRenderAlignmentFromHorizontalPlacement */.QE)(m.horizontalPlacement);P=new TextTextureFactory_i(c,e,this._textRenderParameters);let r=null;if(null!=this._context.sharedResources.textures){E=this._context.sharedResources.textures.fromData(P.key,(()=>P.create())),E.texture.events.on("unloaded",(()=>r=(0,maybe/* releaseMaybe */.Gz)(r)));const e=this._context.stage.renderView.textures.acquire(E.texture.id);if(null==e||(0,promiseUtils/* isPromiseLike */.$X)(e))return E.release(),null;r=e}}const _=!!(0,has/* default */.A)("enable-feature:non-occluded-hud"),S=Graphics3DTextSymbolLayer_$(P,m),L={occlusionTest:!_,occludedFragmentFade:_,horizonCullingEnabled:_&&this._context.spherical,screenOffset:m.placement.screenOffset,anchorPosition:S,polygonOffset:!0,color:[1,1,1,1],centerOffsetUnits:m.placement.centerOffsetUnits,depthEnabled:!1,drawAsLabel:!0,isLabel:!0,isFocused:m.isFocused};if(O&&(L.shaderPolygonOffset=1e-4),v?L.textureId=v.id:E&&(L.textureId=E.texture.id),null!=m.placement.verticalOffset){const{screenLength:e,minWorldLength:t,maxWorldLength:s}=m.placement.verticalOffset;L.verticalOffset={screenLength:(0,screenUtils/* pt2px */.Lz)(e),minWorldLength:t||0,maxWorldLength:null!=s?s:1/0}}const G=this._context.graphicsCoreOwner.view.focusAreasView?.polygons.length,A={screenOffset:L.screenOffset,anchorPosition:S,centerOffsetUnits:L.centerOffsetUnits,verticalOffset:L.verticalOffset,shaderPolygonOffset:L.shaderPolygonOffset,occlusionTest:L.occlusionTest,isFocused:m.isFocused,focusStyle:this.view.map?.focusAreas.style??"none"};if(this._context.screenSizePerspectiveEnabled){const{screenSizePerspectiveSettings:e,screenSizePerspectiveSettingsLabels:t}=this._context.sharedResources,s=(0,FontMetrics/* getFontMetrics */.z)(this._textRenderParameters);L.screenSizePerspective=t.overrideFontHeight(s.maxHeight),L.screenSizePerspectiveAlignment=e,A.fontHeight=s.maxHeight}L.hasSlicePlane=this._context.slicePlaneEnabled;const D=this._context.spherical,H=h?JSON.stringify(A):"";let W=h?.get(H);if(null==W){if(!m.isFocused&&G){const e=this.view.map?.focusAreas.style;L.color=focusAreaStyle_c(L.color,e),L.outlineColor=focusAreaStyle_c(L.outlineColor,e)}W=new HUDMaterial/* HUDMaterial */.R(L,D),h?.set(H,W)}const I=m.placement.translation,M=P?(0,vec2f64/* fromValues */.fA)(P.displayWidth,P.displayHeight):vec2f64/* ZEROS */.uY,k=m.placement.centerOffset,N=Graphics3DTextSymbolLayer_V,q=v?(0,vec4f64/* fromValues */.fA)(0,0,0,0):null,B=(0,GeometryUtil/* createPointGeometry */.DJ)(W,{normal:N,position:I,size:M,centerOffsetAndDistance:k,uvi:q}),J=(0,pointUtils/* createStageObject */.SZ)(this._context,a,B,b,w);if(null==J)return null;const Y=(t,s,r,o,n,i)=>{const a=x()||m.placement.elevationOffset,l=this.setGraphicElevationContext(e,s,a);return (0,ElevationAligners/* perObjectElevationAligner */.G8)(t,l,r,o,n,i)},Z=new Graphics3DObject3DGraphicLayer/* Graphics3DObject3DGraphicLayer */.Y(this,J.object,E,Y,b);Z.alignedSampledElevation=J.sampledElevation,Z.needsElevationUpdates=(0,elevationAlignmentUtils/* needsElevationUpdates2D */.nu)(b.mode)||"absolute-height"===b.mode,Z.getScreenSize=(e=(0,vec2f64/* create */.vt)())=>(e[0]=P?P.displayWidth:m.displaySize[0],e[1]=P?P.displayHeight:m.displaySize[1],e);const K=new Graphics3DObjectMetadata/* Graphics3DObjectMetadata */.Z(m.placement.elevationOffset,c);return Z.metadata=K,(0,pointUtils/* extendPointGraphicElevationContext */.d2)(Z,a,this._context.elevationProvider),Z}}function Graphics3DTextSymbolLayer_W(e,t,s){e?.forEach((e=>{const r=t(e);null!=r&&s(r,e.graphic)}))}function Graphics3DTextSymbolLayer_$(e,t){if("baseline"===t.verticalPlacement){const s=placementUtils/* horizontalPlacementToAnchorX */.cN[t.horizontalPlacement],r=null!=e?e.baselineAnchorY:0;return (0,vec2f64/* fromValues */.fA)(s,r)}const s=(0,placementUtils/* anchorFromPlacements */.Ir)(t.horizontalPlacement,t.verticalPlacement);return placementUtils/* namedAnchorToHUDMaterialAnchorPos */.Zd[s]}const Graphics3DTextSymbolLayer_I={mode:"relative-to-ground",offset:0};

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/time.js
var time = __webpack_require__(60882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/WaterDistortion.glsl.js
var WaterDistortion_glsl = __webpack_require__(41679);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/WaterSurface.glsl.js
var WaterSurface_glsl = __webpack_require__(33006);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/WaterTechnique.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class WaterTechnique_u extends (/* unused pure expression or super */ null && (e)){}class WaterTechnique_h extends ShaderTechnique/* ShaderTechnique */.w{constructor(r,e){super(r,e,new ReloadableShaderModule/* ReloadableShaderModule */.$(WaterSurface_glsl.W,(()=>__webpack_require__.e(/* import() */ 114).then(__webpack_require__.bind(__webpack_require__, 40114)))))}initializePipeline(e){const{oitPass:t,output:s,transparent:l,draped:u}=e;return (0,renderState/* makePipelineState */.Ey)({blending:s!==ShaderOutput/* ShaderOutput */.V.Normal&&s!==ShaderOutput/* ShaderOutput */.V.Highlight&&s!==ShaderOutput/* ShaderOutput */.V.ObjectAndLayerIdColor&&l?(0,OrderIndependentTransparency/* blending */.Yf)(t):null,depthTest:u?null:{func:(0,OrderIndependentTransparency/* oitDepthTest */.K_)(t)},depthWrite:(0,OrderIndependentTransparency/* depthWrite */.z5)(e),drawBuffers:(0,OrderIndependentTransparency/* getDrawBuffers */.m6)(t,s),colorWrite:renderState/* defaultColorWrite */.kn,polygonOffset:(0,OrderIndependentTransparency/* oitPolygonOffset */.mE)(e)})}}

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/WaterGLMaterial.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class WaterGLMaterial_r extends GLMaterial/* default */.A{ensureResources(e){return this._techniques.context.waterTextures.ensureResources(e)}beginSlot(e){const r=this._techniques.context.waterTextures.passParameters;return this._material.setParameters({wavePerturbation:r.wavePerturbation,waveNormal:r.waveNormal}),this.getTechnique(WaterTechnique_h,e)}}

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/WaterTechniqueConfiguration.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class WaterTechniqueConfiguration_n extends DefaultTechniqueConfiguration/* DefaultTechniqueConfiguration */.E{constructor(e){super(),this.spherical=e,this.receiveShadows=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!1,this.screenSpaceReflections=!1,this.cloudReflections=!1,this.objectAndLayerIdColorInstanced=!1,this.draped=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.textureCoordinateType=TextureCoordinateAttribute_glsl/* TextureCoordinateType */.I.None,this.emissionSource=Emissions_glsl/* EmissionSource */.ZX.None,this.pbrMode=PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Water,this.occlusionPass=!1,this.useCustomDTRExponentForWater=!0,this.highStepCount=!0,this.useFillLights=!1,this.overlayEnabled=!1,this.snowCover=!1}get discardInvisibleFragments(){return this.transparent&&this.writeDepth}}(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],WaterTechniqueConfiguration_n.prototype,"receiveShadows",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],WaterTechniqueConfiguration_n.prototype,"transparent",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],WaterTechniqueConfiguration_n.prototype,"enableOffset",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],WaterTechniqueConfiguration_n.prototype,"writeDepth",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],WaterTechniqueConfiguration_n.prototype,"screenSpaceReflections",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],WaterTechniqueConfiguration_n.prototype,"cloudReflections",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],WaterTechniqueConfiguration_n.prototype,"objectAndLayerIdColorInstanced",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],WaterTechniqueConfiguration_n.prototype,"draped",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],WaterTechniqueConfiguration_n.prototype,"terrainDepthTest",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],WaterTechniqueConfiguration_n.prototype,"cullAboveTerrain",void 0);

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/WaterMaterial.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class WaterMaterial_ extends TriangleMaterial/* TriangleMaterial */.W{constructor(t,e){super(t,WaterMaterial_v),this.produces=new Map([[RenderSlot/* RenderSlot */.N.OPAQUE_MATERIAL,t=>(0,ShaderOutput/* isColorOrColorEmission */.RN)(t)&&!this.parameters.transparent||(0,ShaderOutput/* isHighlightOrOID */.CL)(t)],[RenderSlot/* RenderSlot */.N.TRANSPARENT_MATERIAL,t=>(0,ShaderOutput/* isColorOrColorEmission */.RN)(t)&&this.parameters.transparent||(0,ShaderOutput/* isHighlightOrOID */.CL)(t)],[RenderSlot/* RenderSlot */.N.DRAPED_MATERIAL,t=>this.parameters.draped&&(0,ShaderOutput/* isColorOrColorEmission */.RN)(t)||t===ShaderOutput/* ShaderOutput */.V.Normal||(0,ShaderOutput/* isHighlightOrOID */.CL)(t)],[RenderSlot/* RenderSlot */.N.DRAPED_WATER,t=>t===ShaderOutput/* ShaderOutput */.V.Normal]]),this._configuration=new WaterTechniqueConfiguration_n(e.spherical)}getConfiguration(t,e){return super.getConfiguration(t,e,this._configuration),this._configuration.writeDepth=!0,this._configuration.receiveShadows=e.shadowMap.enabled,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.screenSpaceReflections=null!=e.ssr.lastFrameColor,this._configuration.cloudReflections=null!=e.clouds.data,this._configuration.draped=this.parameters.draped,this._configuration.oitPass=e.oitPass,this._configuration.enableOffset=e.camera.relativeElevation<OrderIndependentTransparency/* OITPolygonOffsetLimit */.xt,this._configuration.terrainDepthTest=e.terrainDepthTest&&(0,ShaderOutput/* isColorOrColorEmission */.RN)(t),this._configuration.cullAboveTerrain=e.cullAboveTerrain,this._configuration}get visible(){return!0}update(e){return this.setParameters({timeElapsed:(0,time/* secondsFromMilliseconds */.y)(e.time)*this.parameters.animationSpeed},!1),this._animationEnabled(e.camera)&&e.dt>0}_animationEnabled(t){const e=Math.min(t.relativeElevation,t.distance);return Math.sqrt(this.parameters.waveTextureRepeat/this.parameters.waveStrength)*e<WaterMaterial_T}createGLMaterial(t){return new WaterGLMaterial_r(t)}createBufferWriter(){return new DefaultBufferWriter/* DefaultBufferWriter */.Z((0,olidUtils/* olidEnabled */.E)()?DefaultLayouts/* PositionUvf32OlidLayout */.wB:DefaultLayouts/* PositionUvf32Layout */.KL)}get test(){}}class WaterMaterial_v extends Material/* MaterialParameters */.qA{constructor(){super(...arguments),this.waveStrength=.06,this.waveTextureRepeat=32,this.waveDirection=(0,vec2f64/* fromValues */.fA)(1,0),this.waveVelocity=.05,this.flowStrength=.015,this.flowOffset=-.5,this.animationSpeed=.35,this.timeElapsed=0,this.color=(0,vec4f64/* fromValues */.fA)(0,0,0,0),this.transparent=!0,this.hasSlicePlane=!1,this.draped=!1,this.origin=(0,vec3f64/* create */.vt)(),this.modelTransformation=null}}const WaterMaterial_T=35e3;

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/waterMaterialUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const waterMaterialUtils_e={"calm-small":{waveStrength:.005,perturbationStrength:.02,textureRepeat:12,waveVelocity:.01},"rippled-small":{waveStrength:.02,perturbationStrength:.09,textureRepeat:32,waveVelocity:.07},"slight-small":{waveStrength:.05,perturbationStrength:.07,textureRepeat:28,waveVelocity:.1},"moderate-small":{waveStrength:.075,perturbationStrength:.07,textureRepeat:24,waveVelocity:.1},"calm-medium":{waveStrength:.003125,perturbationStrength:.01,textureRepeat:8,waveVelocity:.02},"rippled-medium":{waveStrength:.035,perturbationStrength:.015,textureRepeat:12,waveVelocity:.07},"slight-medium":{waveStrength:.06,perturbationStrength:.015,textureRepeat:8,waveVelocity:.12},"moderate-medium":{waveStrength:.09,perturbationStrength:.03,textureRepeat:4,waveVelocity:.12},"calm-large":{waveStrength:.01,perturbationStrength:0,textureRepeat:4,waveVelocity:.05},"rippled-large":{waveStrength:.025,perturbationStrength:.01,textureRepeat:8,waveVelocity:.11},"slight-large":{waveStrength:.06,perturbationStrength:.02,textureRepeat:3,waveVelocity:.13},"moderate-large":{waveStrength:.14,perturbationStrength:.03,textureRepeat:2,waveVelocity:.15}};

;// ../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DWaterSymbolLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const Graphics3DWaterSymbolLayer_U=["polyline","polygon","extent"];class Graphics3DWaterSymbolLayer_I extends Graphics3DSymbolLayer/* Graphics3DSymbolLayer */.U{static{this.unitSizeOfTexture=100}static{this.elevationModeChangeTypes={definedChanged:elevationAlignmentUtils/* SymbolUpdateType */.uw.RECREATE,staysOnTheGround:elevationAlignmentUtils/* SymbolUpdateType */.uw.NONE,onTheGroundChanged:elevationAlignmentUtils/* SymbolUpdateType */.uw.RECREATE}}constructor(e,t,r,o){super(e,t,r,o)}async doLoad(){}createGraphics3DGraphic(e){const t=e.graphic;if(!this._validateGeometry(t.geometry,Graphics3DWaterSymbolLayer_U,this.symbolLayer.type))return null;const r=this.setGraphicElevationContext(t);return this.ensureDrapedStatus("on-the-ground"===r.mode),this.ensureMaterial(),this.draped?this._createAsOverlay(t):this._createAs3DShape(t,r,t.uid)}ensureMaterial(){if(this._materials[0])return;const t=new WaterMaterial_v,r=this.symbolLayer.color;null!=r&&(t.color=Color/* default */.A.toUnitRGBA(r));const o=this._getCombinedOpacity(r,{hasIntrinsicColor:!0});t.color=[t.color[0],t.color[1],t.color[2],o],t.transparent=o<1||this.needsDrivenTransparentPass,t.waveDirection=null!=this.symbolLayer.waveDirection?Graphics3DWaterSymbolLayer_B(this.symbolLayer.waveDirection):(0,vec2f64/* fromValues */.fA)(0,0);const n=this.symbolLayer.waveStrength+"-"+this.symbolLayer.waterbodySize,s=waterMaterialUtils_e[n];t.waveStrength=s.waveStrength,t.waveTextureRepeat=s.textureRepeat,t.waveVelocity=s.waveVelocity,t.flowStrength=s.perturbationStrength,t.hasSlicePlane=this._context.slicePlaneEnabled,t.draped=this.draped,this._materials[0]=new WaterMaterial_(t,this._context)}layerOpacityChanged(){if(null==this._materials[0])return;const e=this._materials[0].parameters.color,t=this._getCombinedOpacity(this.symbolLayer.color,{hasIntrinsicColor:!0}),r=t<1||this.needsDrivenTransparentPass;this._materials[0].setParameters({color:[e[0],e[1],e[2],t],transparent:r})}layerElevationInfoChanged(e,t,r){const o=this._elevationContext.mode,i=(0,elevationAlignmentUtils/* elevationModeChangeUpdateType */.I2)(Graphics3DWaterSymbolLayer_I.elevationModeChangeTypes,r,o);if(i!==elevationAlignmentUtils/* SymbolUpdateType */.uw.UPDATE)return i;const n=(0,elevationAlignmentUtils/* needsElevationUpdates2D */.nu)(o);return this.updateGraphics3DGraphicElevationInfo(e,t,(()=>n))}slicePlaneEnabledChanged(){return this._materials[0]?.setParameters({hasSlicePlane:this._context.slicePlaneEnabled}),!0}physicalBasedRenderingChanged(){return!0}_createAs3DShape(e,t,r){const o=b(e.geometry);if(null==o)return null;const i=polygon_p(o,this._context.elevationProvider,this._context.renderCoordsHelper,t),n=i.position.length/3,s=(0,FloatArray/* newFloatArray */.oe)(2*n);Graphics3DWaterSymbolLayer_M(s,i.mapPositions,n,this._context.elevationProvider.spatialReference);const a=new Graphics3DWaterSymbolLayer_N(i,s,this._context.layerViewUid,e.uid);if(a.objectAndLayerIdColor=this._context.stage.renderView?.getObjectAndLayerIdColor(a),this._create3DShapeGeometries(a),this._logGeometryCreationWarnings(a.renderData,o.rings,"rings","WaterSymbol3DLayer"),0===a.outGeometries.length)return null;const l=new Object3D/* Object3D */.B({geometries:a.outGeometries,castShadow:!1,layerViewUid:this._context.layerViewUid,graphicUid:r}),c=new Graphics3DObject3DGraphicLayer/* Graphics3DObject3DGraphicLayer */.Y(this,l,null,ElevationAligners/* perVertexElevationAligner */.B6,t);return c.alignedSampledElevation=a.renderData.sampledElevation,c.needsElevationUpdates=(0,elevationAlignmentUtils/* needsElevationUpdates2D */.nu)(t.mode),c}_create3DShapeGeometries(e){const t=e.renderData.polygons,o=e.uvCoords;for(const{count:i,index:n,position:s,mapPositions:a,holeIndices:c}of t){if(null!=this._context.clippingExtent&&((0,aaBoundingBox/* fromBuffer */.vY)(a,Graphics3DWaterSymbolLayer_k),!(0,aaBoundingBox/* intersectsClippingArea */.KG)(Graphics3DWaterSymbolLayer_k,this._context.clippingExtent)))continue;const t=(0,earcut.e)(a,c,3);if(0===t.length)continue;const m=(0,FloatArray/* floatSubArray */.AK)(o,2*n,2*i),p=polygonUtils_p({material:this._materials[0],indices:t,mapPositions:a,attributeData:{position:s,uv0:m}},e.objectAndLayerIdColor);e.outGeometries.push(p)}}_createAsOverlay(e){const t=b(e.geometry);if(null==t)return null;this._materials[0].renderPriority=this._renderPriority;const r=c(t,this._context.overlaySR),o=r.position.length/3,i=(0,FloatArray/* newFloatArray */.oe)(2*o);Graphics3DWaterSymbolLayer_M(i,r.position,o,this._context.overlaySR);const n=new Graphics3DWaterSymbolLayer_F(r,i,this._context.layerViewUid,e.uid);return n.objectAndLayerIdColor=this._context.stage.renderView?.getObjectAndLayerIdColor(n),n.outBoundingBox=(0,aaBoundingBox/* empty */.Ie)(),this._createAsOverlayWater(n),this._logGeometryCreationWarnings(n.renderData,t.rings,"rings","WaterSymbol3DLayer"),0===n.outGeometries.length?null:new Graphics3DDrapedGraphicLayer_l(this,n.outGeometries,n.outBoundingBox,this._context.drapeSourceRenderer)}_createAsOverlayWater(e){const t=e.uvCoords,o=e.renderData.polygons;for(const{position:i,holeIndices:n,index:s,count:a}of o){if((0,aaBoundingBox/* fromBuffer */.vY)(i,Graphics3DWaterSymbolLayer_k),!(0,aaBoundingBox/* intersectsClippingArea */.KG)(Graphics3DWaterSymbolLayer_k,this._context.clippingExtent))continue;(0,aaBoundingBox/* expandWithAABB */.RF)(e.outBoundingBox,Graphics3DWaterSymbolLayer_k);const o=(0,earcut.e)(i,n,3);if(0===o.length)continue;const c=(0,FloatArray/* floatSubArray */.AK)(t,2*s,2*a),m=polygonUtils_p({material:this._materials[0],indices:o,attributeData:{position:i,uv0:c}},e.objectAndLayerIdColor);e.outGeometries.push(new RenderGeometry/* RenderGeometry */.$(m,e))}}test(){return{...super.test(),create3DShape:e=>this._createAs3DShape(e.graphic,e.elevationContext,e.graphicUid),ensureMaterial:()=>this.ensureMaterial()}}}function Graphics3DWaterSymbolLayer_B(e){const t=(0,vec2f64/* create */.vt)(),r=(0,common/* toRadian */.DF)(e);return t[0]=Math.sin(r),t[1]=Math.cos(r),t}function Graphics3DWaterSymbolLayer_M(e,r,i,n){const a=(0,unitUtils/* getMetersPerUnitForSR */.GA)(n);(0,aaBoundingRect/* empty */.Ie)(Graphics3DWaterSymbolLayer_W);for(let t=0;t<i;t++)(0,vec2/* set */.hZ)(Graphics3DWaterSymbolLayer_z,r[3*t],r[3*t+1]),(0,aaBoundingRect/* expandPointInPlace */.tK)(Graphics3DWaterSymbolLayer_W,Graphics3DWaterSymbolLayer_z);(0,vec42.d)(Graphics3DWaterSymbolLayer_W,Graphics3DWaterSymbolLayer_W,a);const l=Graphics3DWaterSymbolLayer_W[0]%Graphics3DWaterSymbolLayer_I.unitSizeOfTexture,c=Graphics3DWaterSymbolLayer_W[1]%Graphics3DWaterSymbolLayer_I.unitSizeOfTexture;Graphics3DWaterSymbolLayer_V[0]=Graphics3DWaterSymbolLayer_W[0]-l,Graphics3DWaterSymbolLayer_V[1]=Graphics3DWaterSymbolLayer_W[1]-c;for(let t=0;t<i;t++)e[2*t]=(r[3*t]*a-Graphics3DWaterSymbolLayer_V[0])/Graphics3DWaterSymbolLayer_I.unitSizeOfTexture,e[2*t+1]=(r[3*t+1]*a-Graphics3DWaterSymbolLayer_V[1])/Graphics3DWaterSymbolLayer_I.unitSizeOfTexture}const Graphics3DWaterSymbolLayer_V=(0,vec2f64/* create */.vt)(),Graphics3DWaterSymbolLayer_W=(0,aaBoundingRect/* create */.vt)(),Graphics3DWaterSymbolLayer_z=(0,vec2f64/* create */.vt)(),Graphics3DWaterSymbolLayer_k=(0,aaBoundingBox/* create */.vt)();class Graphics3DWaterSymbolLayer_N extends g{constructor(e,t,r,o){super(e,r,o),this.uvCoords=t}}class Graphics3DWaterSymbolLayer_F extends g{constructor(e,t,r,o){super(e,r,o),this.uvCoords=t}}

;// ../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DSymbolLayerFactory.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function Graphics3DSymbolLayerFactory_c(o,e,t,i){const m=Graphics3DSymbolLayerFactory_h[o.type]?.[e.type]||Graphics3DSymbolLayerFactory_l[e.type];return m?new m(o,e,t,i):(Logger/* default */.A.getLogger("esri.views.3d.layers.graphics.Graphics3DSymbolLayerFactory").error("GraphicsLayerFactory#make",`unknown symbol type ${e.type}`),null)}const Graphics3DSymbolLayerFactory_l={icon:ue,object:Graphics3DObjectSymbolLayer_pe,line:B,path:ae,fill:Graphics3DPolygonFillSymbolLayer_H,extrude:st,text:Graphics3DTextSymbolLayer_H,water:Graphics3DWaterSymbolLayer_I};function Graphics3DSymbolLayerFactory_n(r,o){Graphics3DSymbolLayerFactory_l[r]=o}const Graphics3DSymbolLayerFactory_h={"mesh-3d":{fill:Ve}};


/***/ }),

/***/ 2470:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  fetch: () => (/* binding */ Y)
});

// UNUSED EXPORTS: parseUrl

// EXTERNAL MODULE: ../node_modules/@arcgis/core/colorUtils.js
var colorUtils = __webpack_require__(31415);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/devEnvironmentUtils.js
var devEnvironmentUtils = __webpack_require__(19382);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(92504);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat3.js
var mat3 = __webpack_require__(25423);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f64.js
var mat3f64 = __webpack_require__(78607);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js
var mat4 = __webpack_require__(21742);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js
var mat4f64 = __webpack_require__(86128);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec2f64.js
var vec2f64 = __webpack_require__(59646);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(24121);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(58359);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/aaBoundingBox.js
var aaBoundingBox = __webpack_require__(4675);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/FloatArray.js
var FloatArray = __webpack_require__(50961);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/buffer/BufferView.js + 6 modules
var BufferView = __webpack_require__(57813);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3.js
var vec3 = __webpack_require__(21839);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec4.js + 1 modules
var vec4 = __webpack_require__(12364);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec2.js
var vec2 = __webpack_require__(58680);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/glTF/DefaultLoadingContext.js
var DefaultLoadingContext = __webpack_require__(13298);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/glTF/internal/indexUtils.js
var indexUtils = __webpack_require__(8823);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/glTF/internal/resourceUtils.js
var resourceUtils = __webpack_require__(46629);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/glTF/internal/TextureTransformUtils.js
var TextureTransformUtils = __webpack_require__(80954);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/ProcessedObjectResource.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class s{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class ProcessedObjectResource_t{constructor(t,e,r){this.name=t,this.lodThreshold=e,this.pivotOffset=r,this.stageResources=new s,this.numberOfVertices=0}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/request.js
var request = __webpack_require__(86394);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/asyncUtils.js
var asyncUtils = __webpack_require__(12690);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/memoryEstimations.js
var memoryEstimations = __webpack_require__(4754);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/NestedMap.js
var NestedMap = __webpack_require__(80912);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Version.js
var Version = __webpack_require__(50579);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/Indices.js
var Indices = __webpack_require__(42965);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/requestImageUtils.js
var requestImageUtils = __webpack_require__(34528);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Attribute.js
var Attribute = __webpack_require__(70807);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js
var basicInterfaces = __webpack_require__(91013);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Geometry.js + 1 modules
var Geometry = __webpack_require__(59816);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Texture.js + 3 modules
var Texture = __webpack_require__(17342);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js
var VertexAttribute = __webpack_require__(50645);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultMaterial.js + 2 modules
var DefaultMaterial = __webpack_require__(54482);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/enums.js
var enums = __webpack_require__(41746);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/wosrLoader.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const v=()=>Logger/* default */.A.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");class j{constructor(e,t,r){this.resource=e,this.textures=t,this.cachedMemory=r}}async function A(e,t){const r=await I(e,t),n=await T(r.textureDefinitions??{},t);let o=0;for(const s in n)if(n.hasOwnProperty(s)){const e=n[s];o+=e?.image?e.image.width*e.image.height*4:0}return new j(r,n,o+(0,memoryEstimations/* estimateNestedObjectMemory */.Qh)(r))}async function I(r,n){const s=n?.streamDataRequester;if(s)return P(r,s,n);const o=await (0,asyncUtils/* result */.Ke)((0,request/* default */.A)(r,n));if(!0===o.ok)return o.value.data;(0,promiseUtils/* throwIfAbortError */.QP)(o.error),M(o.error)}async function P(e,r,n){const s=await (0,asyncUtils/* result */.Ke)(r.request(e,"json",n));if(!0===s.ok)return s.value;(0,promiseUtils/* throwIfAbortError */.QP)(s.error),M(s.error.details.url)}function M(e){throw new Error/* default */.A("",`Request for object resource failed: ${e}`)}function E(e){const t=e.params,r=t.topology;let n=!0;switch(t.vertexAttributes||(v().warn("Geometry must specify vertex attributes"),n=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t?.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(v().warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),n=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(v().warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),n=!1)):(v().warn(`Indexed geometry does not specify face indices for '${r}' attribute`),n=!1)}}else v().warn("Indexed geometries must specify faces"),n=!1;break}default:v().warn(`Unsupported topology '${r}'`),n=!1}e.params.material||(v().warn("Geometry requires material"),n=!1);const s=e.params.vertexAttributes;for(const o in s){s[o].values||(v().warn("Geometries with externally defined attributes are not yet supported"),n=!1)}return n}function U(e,t){const r=new Array,n=new Array,s=new Array,a=new NestedMap/* NestedMap */.O,u=e.resource,c=Version/* Version */.R.parse(u.version||"1.0","wosr");R.validate(c);const p=u.model.name,g=u.model.geometries,h=u.materialDefinitions??{},v=e.textures;let j=0;const A=new Map;for(let o=0;o<g.length;o++){const e=g[o];if(!E(e))continue;const i=q(e),u=e.params.vertexAttributes,c=[],p=t=>{if("PerAttributeArray"===e.params.topology)return null;const r=e.params.faces;for(const e in r)if(e===t)return r[e].values;return null},I=u[VertexAttribute/* VertexAttribute */.r.POSITION],P=I.values.length/I.valuesPerElement;for(const t in u){const e=u[t],r=e.values,n=p(t)??(0,Indices/* getContinuousIndexArray */.tM)(P);c.push([t,new Attribute/* Attribute */.n(r,n,e.valuesPerElement,!0)])}const M=i.texture,U=v&&v[M];if(U&&!A.has(M)){const{image:e,parameters:t}=U,r=new Texture/* Texture */.g(e,t);n.push(r),A.set(M,r)}const O=A.get(M),T=O?O.id:void 0,R=i.material;let B=a.get(R,M);if(null==B){const e=h[R.slice(R.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=U?k(U.alphaChannelUsage):void 0,n={ambient:(0,vec3f64/* fromArray */.ci)(e.diffuse),diffuse:(0,vec3f64/* fromArray */.ci)(e.diffuse),opacity:1-(e.transparency||0),textureAlphaMode:r,textureAlphaCutoff:.33,textureId:T,doubleSided:!0,cullFace:basicInterfaces/* CullFaceOptions */.s2.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:U?.parameters.preMultiplyAlpha??!1};t?.materialParameters&&Object.assign(n,t.materialParameters),B=new DefaultMaterial/* DefaultMaterial */.$U(n,t),a.set(R,M,B)}s.push(B);const C=new Geometry/* Geometry */.V(B,c);j+=c.find((e=>e[0]===VertexAttribute/* VertexAttribute */.r.POSITION))?.[1]?.indices.length??0,r.push(C)}return{engineResources:[{name:p,stageResources:{textures:n,materials:s,geometries:r},pivotOffset:u.model.pivotOffset,numberOfVertices:j,lodThreshold:null}],referenceBoundingBox:O(r)}}function O(e){const t=(0,aaBoundingBox/* empty */.Ie)();return e.forEach((e=>{const r=e.boundingInfo;null!=r&&((0,aaBoundingBox/* expandWithVec3 */.iT)(t,r.bbMin),(0,aaBoundingBox/* expandWithVec3 */.iT)(t,r.bbMax))})),t}async function T(e,t){const r=new Array;for(const o in e){const n=e[o],s=n.images[0].data;if(!s){v().warn("Externally referenced texture data is not yet supported");continue}const a=n.encoding+";base64,"+s,i="/textureDefinitions/"+o,l="rgba"===n.channels?n.alphaChannelUsage||"transparency":"none",u={noUnpackFlip:!0,wrap:{s:enums/* TextureWrapMode */.pF.REPEAT,t:enums/* TextureWrapMode */.pF.REPEAT},preMultiplyAlpha:k(l)!==basicInterfaces/* AlphaDiscardMode */.sf.Opaque},c=t?.disableTextures?Promise.resolve(null):(0,requestImageUtils/* requestImage */.D)(a,t);r.push(c.then((e=>({refId:i,image:e,parameters:u,alphaChannelUsage:l}))))}const n=await Promise.all(r),s={};for(const o of n)s[o.refId]=o;return s}function k(e){switch(e){case"mask":return basicInterfaces/* AlphaDiscardMode */.sf.Mask;case"maskAndTransparency":return basicInterfaces/* AlphaDiscardMode */.sf.MaskBlend;case"none":return basicInterfaces/* AlphaDiscardMode */.sf.Opaque;default:return basicInterfaces/* AlphaDiscardMode */.sf.Blend}}function q(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const R=new Version/* Version */.R(1,2,"wosr");

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js
var NormalAttribute_glsl = __webpack_require__(81283);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/pbrUtils.js
var pbrUtils = __webpack_require__(12221);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/objectResourceUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function Y(e,t){const o=Z((0,devEnvironmentUtils/* adjustStaticAGOUrl */.EM)(e));if("wosr"===o.fileType){const e=await(t.cache?t.cache.loadWOSR(o.url,t):A(o.url,t)),{engineResources:r,referenceBoundingBox:s}=U(e,t);return{lods:r,referenceBoundingBox:s,isEsriSymbolResource:!1,isWosr:!0}}let s;if(t.cache)s=await t.cache.loadGLTF(o.url,t,!!t.usePBR);else{const{loadGLTF:e}=await __webpack_require__.e(/* import() */ 1068).then(__webpack_require__.bind(__webpack_require__, 31068));s=await e(new DefaultLoadingContext/* DefaultLoadingContext */.R(t.streamDataRequester),o.url,t,t.usePBR)}const i=s.model.meta?.ESRI_proxyEllipsoid,n=s.meta.isEsriSymbolResource&&null!=i&&"EsriRealisticTreesStyle"===s.meta.ESRI_webstyle;n&&!s.customMeta.esriTreeRendering&&(s.customMeta.esriTreeRendering=!0,ie(s,i));const l=!!t.usePBR,a=s.meta.isEsriSymbolResource?{usePBR:l,isSchematic:!1,treeRendering:n,mrrFactors:pbrUtils/* esriSymbologyMRRFactors */.SY}:{usePBR:l,isSchematic:!1,treeRendering:!1,mrrFactors:pbrUtils/* advancedMRRFactors */.mb},u={...t.materialParameters,treeRendering:n},{engineResources:c,referenceBoundingBox:m}=ee(s,a,u,t,o.specifiedLodIndex,n);return{lods:c,referenceBoundingBox:m,isEsriSymbolResource:s.meta.isEsriSymbolResource,isWosr:!1}}function Z(e){const r=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);if(r)return{fileType:"gltf",url:r[1],specifiedLodIndex:null!=r[4]?Number(r[4]):null};return e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function ee(e,r,t,o,s,i){const n=e.model,l=new Array,a=new Map,u=new Map,c=n.lods.length,m=(0,aaBoundingBox/* empty */.Ie)();return n.lods.forEach(((e,f)=>{const d=!0===o.skipHighLods&&(c>1&&0===f||c>3&&1===f)||!1===o.skipHighLods&&null!=s&&f!==s;if(d&&0!==f)return;const p=new ProcessedObjectResource_t(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const s=d?new DefaultMaterial/* DefaultMaterial */.$U({},o):re(n,e,p,r,t,a,u,o,i),{geometry:l,vertexCount:c}=te(e,s??new DefaultMaterial/* DefaultMaterial */.$U({},o)),g=l.boundingInfo;null!=g&&0===f&&((0,aaBoundingBox/* expandWithVec3 */.iT)(m,g.bbMin),(0,aaBoundingBox/* expandWithVec3 */.iT)(m,g.bbMax)),null!=s&&(p.stageResources.geometries.push(l),p.numberOfVertices+=c)})),d||l.push(p)})),{engineResources:l,referenceBoundingBox:m}}function re(r,t,o,s,i,n,l,u,c){const m=r.materials.get(t.material);if(null==m)return null;const{normal:f,color:d,texCoord0:p,tangent:g}=t.attributes,x=t.material+(f?"_normal":"")+(d?"_color":"")+(p?"_texCoord0":"")+(g?"_tangent":""),T=null!=t.attributes.texCoord0,b=null!=t.attributes.normal,h=se(m.alphaMode);if(!n.has(x)){if(T){const e=(e,t=!1,o=!1)=>{if(null!=e&&!l.has(e)){const s=r.textures.get(e);if(s){const r=s.data,i=t&&!(0,resourceUtils/* isEncodedMeshTexture */.x3)(r)?u.compressionOptions:void 0;l.set(e,new Texture/* Texture */.g((0,resourceUtils/* isEncodedMeshTexture */.x3)(r)?r.data:r,{...s.parameters,preMultiplyAlpha:!(0,resourceUtils/* isEncodedMeshTexture */.x3)(r)&&o,encoding:(0,resourceUtils/* isEncodedMeshTexture */.x3)(r)?r.encoding:void 0,compressionOptions:i}))}}},t=h!==basicInterfaces/* AlphaDiscardMode */.sf.Opaque&&!c;e(m.colorTexture,t,h!==basicInterfaces/* AlphaDiscardMode */.sf.Opaque),e(m.normalTexture),e(m.occlusionTexture,!0),e(m.emissiveTexture),e(m.metallicRoughnessTexture,!0)}const o=1/colorUtils/* colorGamma */.Tf,f=m.color[0]**o,d=m.color[1]**o,p=m.color[2]**o,g=m.emissiveFactor[0]**o,y=m.emissiveFactor[1]**o,w=m.emissiveFactor[2]**o,v=null!=m.colorTexture&&T?l.get(m.colorTexture):null,R=(0,pbrUtils/* useSchematicPBR */.Jr)(m),j=null!=m.normalTextureTransform?.scale?m.normalTextureTransform?.scale:vec2f64/* ONES */.Un;n.set(x,new DefaultMaterial/* DefaultMaterial */.$U({...s,customDepthTest:basicInterfaces/* DepthTestFunction */.it.Lequal,textureAlphaMode:h,textureAlphaCutoff:m.alphaCutoff,diffuse:[f,d,p],ambient:[f,d,p],opacity:"OPAQUE"===m.alphaMode?1:m.opacity,doubleSided:m.doubleSided,doubleSidedType:"winding-order",cullFace:m.doubleSided?basicInterfaces/* CullFaceOptions */.s2.None:basicInterfaces/* CullFaceOptions */.s2.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:b?NormalAttribute_glsl/* NormalType */.W.Attribute:NormalAttribute_glsl/* NormalType */.W.ScreenDerivative,castShadows:!0,receiveShadows:m.receiveShadows,receiveAmbientOcclusion:m.receiveAmbientOcclusion,textureId:null!=v?v.id:void 0,colorMixMode:m.colorMixMode,normalTextureId:null!=m.normalTexture&&T?l.get(m.normalTexture).id:void 0,textureAlphaPremultiplied:null!=v&&!!v.parameters.preMultiplyAlpha,occlusionTextureId:null!=m.occlusionTexture&&T?l.get(m.occlusionTexture).id:void 0,emissiveTextureId:null!=m.emissiveTexture&&T?l.get(m.emissiveTexture).id:void 0,metallicRoughnessTextureId:null!=m.metallicRoughnessTexture&&T?l.get(m.metallicRoughnessTexture).id:void 0,emissiveBaseColor:[g,y,w],mrrFactors:R?pbrUtils/* schematicMRRFactors */.Bt:[m.metallicFactor,m.roughnessFactor,s.mrrFactors[2]],isSchematic:R,colorTextureTransformMatrix:(0,TextureTransformUtils/* getTransformMatrix */.G)(m.colorTextureTransform),normalTextureTransformMatrix:(0,TextureTransformUtils/* getTransformMatrix */.G)(m.normalTextureTransform),scale:[j[0],j[1]],occlusionTextureTransformMatrix:(0,TextureTransformUtils/* getTransformMatrix */.G)(m.occlusionTextureTransform),emissiveTextureTransformMatrix:(0,TextureTransformUtils/* getTransformMatrix */.G)(m.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:(0,TextureTransformUtils/* getTransformMatrix */.G)(m.metallicRoughnessTextureTransform),...i},u))}const y=n.get(x);if(o.stageResources.materials.push(y),T){const e=e=>{null!=e&&o.stageResources.textures.push(l.get(e))};e(m.colorTexture),e(m.normalTexture),e(m.occlusionTexture),e(m.emissiveTexture),e(m.metallicRoughnessTexture)}return y}function te(e,r){const i=e.attributes.position.count,n=(0,indexUtils/* convertPrimitiveToTriangles */.x)(e.indices||i,e.primitiveType),l=(0,FloatArray/* newFloatArray */.oe)(3*i),{typedBuffer:a,typedBufferStride:u}=e.attributes.position;(0,vec3.t)(l,a,e.transform,3,u);const c=[[VertexAttribute/* VertexAttribute */.r.POSITION,new Attribute/* Attribute */.n(l,n,3,!0)]];if(null!=e.attributes.normal){const r=(0,FloatArray/* newFloatArray */.oe)(3*i),{typedBuffer:s,typedBufferStride:l}=e.attributes.normal;(0,mat3/* normalFromMat4 */.Ge)(oe,e.transform),(0,vec3.b)(r,s,oe,3,l),(0,mathUtils/* hasScaling */.or)(oe)&&(0,vec3.n)(r,r),c.push([VertexAttribute/* VertexAttribute */.r.NORMAL,new Attribute/* Attribute */.n(r,n,3,!0)])}if(null!=e.attributes.tangent){const r=(0,FloatArray/* newFloatArray */.oe)(4*i),{typedBuffer:o,typedBufferStride:l}=e.attributes.tangent;(0,mat3/* fromMat4 */.z0)(oe,e.transform),(0,vec4.t)(r,o,oe,4,l),(0,mathUtils/* hasScaling */.or)(oe)&&(0,vec3.n)(r,r,4),c.push([VertexAttribute/* VertexAttribute */.r.TANGENT,new Attribute/* Attribute */.n(r,n,4,!0)])}if(null!=e.attributes.texCoord0){const r=(0,FloatArray/* newFloatArray */.oe)(2*i),{typedBuffer:t,typedBufferStride:o}=e.attributes.texCoord0;(0,vec2.a)(r,t,2,o),c.push([VertexAttribute/* VertexAttribute */.r.UV0,new Attribute/* Attribute */.n(r,n,2,!0)])}const m=e.attributes.color;if(null!=m){const r=new Uint8Array(4*i);4===m.elementCount?m instanceof BufferView/* BufferViewVec4f */.Eq?(0,vec4.b)(r,m,1,255):(m instanceof BufferView/* BufferViewVec4u8 */.XP||m instanceof BufferView/* BufferViewVec4u16 */.Uz)&&(0,vec4.b)(r,m,1/255,255):(r.fill(255),m instanceof BufferView/* BufferViewVec3f */.xs?(0,vec3.f)(r,m.typedBuffer,1,255,4,m.typedBufferStride):(e.attributes.color instanceof BufferView/* BufferViewVec3u8 */.eI||e.attributes.color instanceof BufferView/* BufferViewVec3u16 */.nS)&&(0,vec3.f)(r,m.typedBuffer,1/255,255,4,e.attributes.color.typedBufferStride)),c.push([VertexAttribute/* VertexAttribute */.r.COLOR,new Attribute/* Attribute */.n(r,n,4,!0)])}return{geometry:new Geometry/* Geometry */.V(r,c),vertexCount:i}}const oe=(0,mat3f64/* create */.vt)();function se(e){switch(e){case"BLEND":return basicInterfaces/* AlphaDiscardMode */.sf.Blend;case"MASK":return basicInterfaces/* AlphaDiscardMode */.sf.Mask;case"OPAQUE":case null:case void 0:return basicInterfaces/* AlphaDiscardMode */.sf.Opaque}}function ie(r,t){for(let o=0;o<r.model.lods.length;++o){const s=r.model.lods[o];for(const i of s.parts){const s=i.attributes.normal;if(null==s)return;const a=i.attributes.position,x=a.count,T=(0,vec3f64/* create */.vt)(),b=(0,vec3f64/* create */.vt)(),w=(0,vec3f64/* create */.vt)(),v=new Float32Array(4*x),R=new Float32Array(3*x),j=(0,mat4/* invert */.B8)((0,mat4f64/* create */.vt)(),i.transform);let B=0,S=0;for(let n=0;n<x;n++){a.getVec(n,b),s.getVec(n,T),(0,vec32.t)(b,b,i.transform),(0,vec32.d)(w,b,t.center),(0,vec32.D)(w,w,t.radius);const l=w[2],g=(0,vec32.l)(w),x=Math.min(.45+.55*g*g,1)**colorUtils/* colorGamma */.Tf;(0,vec32.D)(w,w,t.radius),null!==j&&(0,vec32.t)(w,w,j),(0,vec32.n)(w,w),o+1!==r.model.lods.length&&r.model.lods.length>1&&(0,vec32.m)(w,w,T,l>-1?.2:Math.min(-4*l-3.8,1)),R[B]=w[0],R[B+1]=w[1],R[B+2]=w[2],B+=3,v[S]=x,v[S+1]=x,v[S+2]=x,v[S+3]=1,S+=4}i.attributes.normal=new BufferView/* BufferViewVec3f */.xs(R),i.attributes.color=new BufferView/* BufferViewVec4f */.Eq(v)}}}


/***/ }),

/***/ 57089:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ir: () => (/* binding */ m),
/* harmony export */   QE: () => (/* binding */ f),
/* harmony export */   RH: () => (/* binding */ u),
/* harmony export */   Zd: () => (/* binding */ s),
/* harmony export */   cN: () => (/* binding */ i),
/* harmony export */   xU: () => (/* binding */ h)
/* harmony export */ });
/* unused harmony exports horizontalPlacementFromAnchor, verticalPlacementFromAnchor */
/* harmony import */ var _core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60704);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59646);
/* harmony import */ var _webgl_engine_lib_TextRenderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27999);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const i=Object.freeze({left:0,center:.5,right:1}),s=Object.freeze({"bottom-left":(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__/* .fromValues */ .fA)(0,0),bottom:(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__/* .fromValues */ .fA)(.5,0),"bottom-right":(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__/* .fromValues */ .fA)(1,0),left:(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__/* .fromValues */ .fA)(0,.5),center:(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__/* .fromValues */ .fA)(.5,.5),right:(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__/* .fromValues */ .fA)(1,.5),"top-left":(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__/* .fromValues */ .fA)(0,1),top:(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__/* .fromValues */ .fA)(.5,1),"top-right":(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__/* .fromValues */ .fA)(1,1)});function f(t){switch(t){case"left":return _webgl_engine_lib_TextRenderer_js__WEBPACK_IMPORTED_MODULE_2__/* .TextRenderAlignment */ .lV.Left;case"right":return _webgl_engine_lib_TextRenderer_js__WEBPACK_IMPORTED_MODULE_2__/* .TextRenderAlignment */ .lV.Right;default:return _webgl_engine_lib_TextRenderer_js__WEBPACK_IMPORTED_MODULE_2__/* .TextRenderAlignment */ .lV.Center}}function a(t){switch(t){case"bottom-left":case"left":case"top-left":return"left";case"bottom":case"center":case"top":return"center";case"bottom-right":case"right":case"top-right":return"right"}}function l(t){switch(t){case"bottom-left":case"bottom":case"bottom-right":return"bottom";case"left":case"center":case"right":return"center";case"top-left":case"top":case"top-right":return"top"}}function m(t,e){switch(e){case"bottom":return"left"===t?"bottom-left":"right"===t?"bottom-right":"bottom";case"center":return t;case"top":return"left"===t?"top-left":"right"===t?"top-right":"top"}}function u(t){return"middle"===t?"center":t}function h(r,c){switch(r){case"top":return (0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .hZ)(c,0,_webgl_engine_lib_TextRenderer_js__WEBPACK_IMPORTED_MODULE_2__/* .textVerticalPaddingPx */ .Xd);case"bottom":return (0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .hZ)(c,0,-1);default:return (0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__/* .copy */ .C)(c,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__/* .ZEROS */ .uY)}}


/***/ }),

/***/ 15788:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41746);
/* harmony import */ var _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69955);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function t(e,t=0){const n=e.stride;return Array.from(e.fields.keys()).map((s=>{const i=e.fields.get(s),f=i.constructor.ElementCount,u=o(i.constructor.ElementType),c=i.offset,m=i.optional?.glNormalized??!1;return new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_1__/* .VertexElementDescriptor */ ._(s,f,u,c,n,m,t)}))}function o(e){const r=n[e];if(r)return r;throw new Error("BufferType not supported in WebGL")}const n={u8:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .DataType */ .pe.UNSIGNED_BYTE,u16:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .DataType */ .pe.UNSIGNED_SHORT,u32:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .DataType */ .pe.UNSIGNED_INT,i8:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .DataType */ .pe.BYTE,i16:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .DataType */ .pe.SHORT,i32:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .DataType */ .pe.INT,f16:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .DataType */ .pe.HALF_FLOAT,f32:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .DataType */ .pe.FLOAT};


/***/ }),

/***/ 46684:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ b),
/* harmony export */   z: () => (/* binding */ R)
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60704);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59646);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28152);
/* harmony import */ var _geometry_ellipsoidUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47936);
/* harmony import */ var _geometry_projection_projectors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12943);
/* harmony import */ var _geometry_support_DoubleArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(90166);
/* harmony import */ var _geometry_support_FloatArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50961);
/* harmony import */ var _geometry_support_Indices_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42965);
/* harmony import */ var _ViewingMode_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10714);
/* harmony import */ var _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(70807);
/* harmony import */ var _webgl_engine_lib_Geometry_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59816);
/* harmony import */ var _webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(50645);
/* harmony import */ var _webgl_engine_lib_IntersectableGeometry_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(27514);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function b(t,e,r=null){const o=[],n=e.mapPositions;g(e,o);const i=o[0][1].data,a=o[0][1].indices.length,l=(0,_geometry_support_Indices_js__WEBPACK_IMPORTED_MODULE_7__/* .getZeroIndexArray */ .EH)(a);return h(e,o,l),w(e,o,l),D(e,o,l),T(e,o,l),y(e,o,l),E(e,o,l),j(e,o,i),new _webgl_engine_lib_Geometry_js__WEBPACK_IMPORTED_MODULE_10__/* .Geometry */ .V(t,o,n,_webgl_engine_lib_IntersectableGeometry_js__WEBPACK_IMPORTED_MODULE_12__/* .GeometryType */ .d.Line,r)}function g(t,e){const{attributeData:{position:r},removeDuplicateStartEnd:o}=t,n=A(r)&&o,i=r.length/3-(n?1:0),a=new Array(2*(i-1)),l=n?r.slice(0,-3):r;let u=0;for(let s=0;s<i-1;s++)a[u++]=s,a[u++]=s+1;e.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_11__/* .VertexAttribute */ .r.POSITION,new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_9__/* .Attribute */ .n(l,a,3,n)])}function h(t,e,r){if(null!=t.attributeData.colorFeature)return;const n=t.attributeData.color;e.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_11__/* .VertexAttribute */ .r.COLOR,new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_9__/* .Attribute */ .n(n??_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__/* .ONES */ .Un,r,4)])}function D(t,e,r){t.attributeData.normal&&e.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_11__/* .VertexAttribute */ .r.NORMAL,new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_9__/* .Attribute */ .n(t.attributeData.normal,r,3)])}function T(t,e,r){null!=t.attributeData.colorFeature&&e.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_11__/* .VertexAttribute */ .r.COLORFEATUREATTRIBUTE,new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_9__/* .Attribute */ .n([t.attributeData.colorFeature],r,1,!0)])}function w(t,e,r){null==t.attributeData.sizeFeature&&e.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_11__/* .VertexAttribute */ .r.SIZE,new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_9__/* .Attribute */ .n([t.attributeData.size??1],r,1,!0)])}function y(t,e,r){null!=t.attributeData.sizeFeature&&e.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_11__/* .VertexAttribute */ .r.SIZEFEATUREATTRIBUTE,new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_9__/* .Attribute */ .n([t.attributeData.sizeFeature],r,1,!0)])}function E(t,e,r){null!=t.attributeData.opacityFeature&&e.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_11__/* .VertexAttribute */ .r.OPACITYFEATUREATTRIBUTE,new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_9__/* .Attribute */ .n([t.attributeData.opacityFeature],r,1,!0)])}function j(r,o,u){if(null==r.overlayInfo||r.overlayInfo.renderCoordsHelper.viewingMode!==_ViewingMode_js__WEBPACK_IMPORTED_MODULE_8__/* .ViewingMode */ .RT.Global||!r.overlayInfo.spatialReference.isGeographic)return;const m=(0,_geometry_support_DoubleArray_js__WEBPACK_IMPORTED_MODULE_5__/* .newDoubleArray */ .jh)(u.length),f=(0,_geometry_ellipsoidUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .getReferenceEllipsoid */ .tO)(r.overlayInfo.spatialReference);for(let t=0;t<m.length;t+=3)(0,_geometry_projection_projectors_js__WEBPACK_IMPORTED_MODULE_4__/* .lonLatToWebMercatorComparable */ .RC)(u,t,m,t,f);const b=u.length/3,g=(0,_geometry_support_FloatArray_js__WEBPACK_IMPORTED_MODULE_6__/* .newFloatArray */ .oe)(b+1);let h=I,D=F,T=0,w=0;(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .hZ)(h,m[w++],m[w++]),w++,g[0]=0;for(let n=1;n<b+1;++n)n===b&&(w=0),(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .hZ)(D,m[w++],m[w++]),w++,T+=(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__/* .dist */ .xg)(h,D),g[n]=T,[h,D]=[D,h];o.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_11__/* .VertexAttribute */ .r.DISTANCETOSTART,new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_9__/* .Attribute */ .n(g,o[0][1].indices,1,!0)])}function A(t){const e=t.length;return t[0]===t[e-3]&&t[1]===t[e-2]&&t[2]===t[e-1]}const I=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)(),F=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)();function R(t,e){if(null==t||0===t.length)return[];const r=[];return t.forEach((t=>{const o=t.length,n=(0,_geometry_support_DoubleArray_js__WEBPACK_IMPORTED_MODULE_5__/* .newDoubleArray */ .jh)(3*o);t.forEach(((t,e)=>{n[3*e]=t[0],n[3*e+1]=t[1],n[3*e+2]=t[2]}));const i={attributeData:{position:n,normal:e},removeDuplicateStartEnd:!1};r.push(i)})),r}


/***/ }),

/***/ 4062:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ l),
/* harmony export */   C: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _geometry_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84119);
/* harmony import */ var _geometry_support_DoubleArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90166);
/* harmony import */ var _geometry_support_triangulationUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17566);
/* harmony import */ var _layers_graphics_elevationAlignmentUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27716);
/* harmony import */ var _terrain_OverlayRenderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42490);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function p(o,t,s,p){const l="polygon"===o.type?_geometry_support_triangulationUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .CounterClockwiseMode */ .Wq.CCW_IS_HOLE:_geometry_support_triangulationUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .CounterClockwiseMode */ .Wq.NONE,a="polygon"===o.type?o.rings:o.paths,{position:u,outlines:f}=(0,_geometry_support_triangulationUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .ringsToTriangulationInfo */ .oR)(a,!!o.hasZ,l,o.spatialReference),m=(0,_geometry_support_DoubleArray_js__WEBPACK_IMPORTED_MODULE_1__/* .newDoubleArray */ .jh)(u.length),g=(0,_layers_graphics_elevationAlignmentUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .applyPerVertexElevationAlignment */ .au)(u,o.spatialReference,0,m,0,u,0,u.length/3,t,s,p),y=null!=g;return{lines:y?c(f,u,m):[],projectionSuccess:y,sampledElevation:g}}function l(e,t){const i="polygon"===e.type?_geometry_support_triangulationUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .CounterClockwiseMode */ .Wq.CCW_IS_HOLE:_geometry_support_triangulationUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .CounterClockwiseMode */ .Wq.NONE,p="polygon"===e.type?e.rings:e.paths,{position:l,outlines:a}=(0,_geometry_support_triangulationUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .ringsToTriangulationInfo */ .oR)(p,!1,i),u=(0,_geometry_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_0__.projectBuffer)(l,e.spatialReference,0,l,t,0);for(let o=2;o<l.length;o+=3)l[o]=_terrain_OverlayRenderer_js__WEBPACK_IMPORTED_MODULE_4__/* .drapedZ */ .bi;return{lines:u?c(a,l):[],projectionSuccess:u}}function c(o,e,n=null){const r=new Array;for(const{index:i,count:s}of o){if(s<=1)continue;const o=3*i,p=3*s;r.push({position:(0,_geometry_support_DoubleArray_js__WEBPACK_IMPORTED_MODULE_1__/* .doubleSubArray */ .l5)(e,3*i,3*s),mapPositions:null!=n?(0,_geometry_support_DoubleArray_js__WEBPACK_IMPORTED_MODULE_1__/* .doubleSubArray */ .l5)(n,o,p):void 0})}return r}


/***/ }),

/***/ 42490:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  bi: () => (/* binding */ te)
});

// UNUSED EXPORTS: OverlayRenderer, overlayRenderOccludedFlag

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Evented.js
var Evented = __webpack_require__(17306);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/MapUtils.js
var MapUtils = __webpack_require__(82256);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(6267);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/PooledArray.js + 1 modules
var PooledArray = __webpack_require__(63678);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(85251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/SetUtils.js
var SetUtils = __webpack_require__(76286);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(9272);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js
var mat4 = __webpack_require__(21742);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(24121);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(58359);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/interfaces.js
var interfaces = __webpack_require__(56867);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/support/debugFlags.js
var debugFlags = __webpack_require__(19620);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/terrain/interfaces.js
var terrain_interfaces = __webpack_require__(36572);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/aaBoundingRect.js
var aaBoundingRect = __webpack_require__(80510);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/LocalOriginFactory.js
var LocalOriginFactory = __webpack_require__(32926);
;// ../node_modules/@arcgis/core/views/3d/terrain/Overlay.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Overlay_n{constructor(){this._extent=(0,aaBoundingRect/* create */.vt)(),this.resolution=0,this.renderLocalOrigin=(0,LocalOriginFactory/* fromValues */.f)(0,0,0,"O"),this.pixelRatio=1,this.mapUnitsPerPixel=1,this.canvasGeometries=new Overlay_r}get extent(){return this._extent}setupGeometryViews(e){if(this._setupGeometryView(),!e)return;const s=.001*e.range;if(this._extent[0]-s<=e.min){const s=this.canvasGeometries.extents[this.canvasGeometries.numViews++];(0,aaBoundingRect/* offset */.cY)(this._extent,e.range,0,s)}if(this._extent[2]+s>=e.max){const s=this.canvasGeometries.extents[this.canvasGeometries.numViews++];(0,aaBoundingRect/* offset */.cY)(this._extent,-e.range,0,s)}}_setupGeometryView(){this.canvasGeometries.numViews=1,(0,aaBoundingRect/* copy */.C)(this.canvasGeometries.extents[0],this._extent)}hasSomeSizedView(){for(let e=0;e<this.canvasGeometries.numViews;e++){const t=this.canvasGeometries.extents[e];if(t[0]!==t[2]&&t[1]!==t[3])return!0}return!1}}class Overlay_r{constructor(){this.extents=[(0,aaBoundingRect/* create */.vt)(),(0,aaBoundingRect/* create */.vt)(),(0,aaBoundingRect/* create */.vt)()],this.numViews=0}}

;// ../node_modules/@arcgis/core/views/3d/terrain/OverlayContent.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var OverlayContent_o;!function(o){o[o.Color=0]="Color",o[o.ColorNoRasterImage=1]="ColorNoRasterImage",o[o.Highlight=2]="Highlight",o[o.WaterNormal=3]="WaterNormal",o[o.Occluded=4]="Occluded",o[o.ObjectAndLayerIdColor=5]="ObjectAndLayerIdColor"}(OverlayContent_o||(OverlayContent_o={}));

;// ../node_modules/@arcgis/core/views/3d/terrain/OverlayFramebufferObject.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class OverlayFramebufferObject_t{constructor(e,t,h){this._fbos=e,this._format=t,this._name=h}get valid(){return null!=this._handle?.getTexture()}dispose(){this._handle=(0,maybe/* releaseMaybe */.Gz)(this._handle)}get texture(){return this._handle?.getTexture()}bind(e,t,h){this._handle&&this._handle.fbo?.width===t&&this._handle.fbo?.height===h||(this._handle?.release(),this._handle=this._fbos.acquire(t,h,this._name,this._format)),e.bindFramebuffer(this._handle?.fbo)}generateMipMap(){this._handle?.getTexture()?.descriptor?.hasMipmap&&this._handle?.getTexture()?.generateMipmap()}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/FBOCacheFormats.js
var FBOCacheFormats = __webpack_require__(79320);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js
var ShaderOutput = __webpack_require__(55274);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/effects/geometry/olidUtils.js
var olidUtils = __webpack_require__(36340);
;// ../node_modules/@arcgis/core/views/3d/terrain/OverlayRenderTargets.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class OverlayRenderTargets_s{constructor(e,t,l,s,i=FBOCacheFormats/* ColorFormat */.NV.RGBA8UNORM_MIPMAP){this.output=l,this.content=s,this.fbo=new OverlayFramebufferObject_t(e,i,t)}get valid(){return this.fbo.valid}}class OverlayRenderTargets_i{constructor(r){this.targets=[new OverlayRenderTargets_s(r,"overlay color",ShaderOutput/* ShaderOutput */.V.Color,OverlayContent_o.Color),new OverlayRenderTargets_s(r,"overlay IM color",ShaderOutput/* ShaderOutput */.V.Color,OverlayContent_o.ColorNoRasterImage),new OverlayRenderTargets_s(r,"overlay highlight",ShaderOutput/* ShaderOutput */.V.Highlight,OverlayContent_o.Highlight,FBOCacheFormats/* ColorFormat */.NV.RG8UINT),new OverlayRenderTargets_s(r,"overlay water",ShaderOutput/* ShaderOutput */.V.Normal,OverlayContent_o.WaterNormal),new OverlayRenderTargets_s(r,"overlay occluded",ShaderOutput/* ShaderOutput */.V.Color,OverlayContent_o.Occluded)],(0,olidUtils/* olidEnabled */.E)()&&this.targets.push(new OverlayRenderTargets_s(r,"overlay olid",ShaderOutput/* ShaderOutput */.V.ObjectAndLayerIdColor,OverlayContent_o.ObjectAndLayerIdColor,FBOCacheFormats/* ColorFormat */.NV.RGBA8UNORM))}getTexture(e){return this.targets[e]?.fbo.texture}dispose(){for(const e of this.targets)e.fbo.dispose()}computeValidity(){return this.targets.reduce(((e,r,o)=>r.valid?e|=1<<o:e),0)}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl/RenderCamera.js + 3 modules
var RenderCamera = __webpack_require__(21750);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f64.js
var vec4f64 = __webpack_require__(28152);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/renderPasses/RenderPassIdentifier.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var RenderPassIdentifier_a;!function(a){a[a.Material=0]="Material",a[a.ShadowMap=1]="ShadowMap",a[a.Highlight=2]="Highlight",a[a.ViewshedShadowMap=3]="ViewshedShadowMap"}(RenderPassIdentifier_a||(RenderPassIdentifier_a={}));

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl.js
var MainLighting_glsl = __webpack_require__(696);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js
var PhysicallyBasedRenderingParameters_glsl = __webpack_require__(39486);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/Water.glsl.js + 5 modules
var Water_glsl = __webpack_require__(548);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4DrawUniform.js
var Float4DrawUniform = __webpack_require__(84674);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js
var FloatPassUniform = __webpack_require__(35449);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/glsl.js
var glsl = __webpack_require__(72196);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js
var Texture2DPassUniform = __webpack_require__(79856);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DUintPassUniform.js
var Texture2DUintPassUniform = __webpack_require__(7568);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/Uniform.js
var Uniform = __webpack_require__(99120);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/terrain/Overlay.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var h;function C(e,o){const{vertex:r,fragment:t}=e;r.uniforms.add(new x("overlayTexOffset",((e,o)=>V(e,o))),new x("overlayTexScale",((e,o)=>I(e,o)))),t.constants.add("overlayOpacity","float",1),t.uniforms.add(new p("ovColorTex",((e,o)=>b(e,o)))),T(e,o)}function O(e,o){const{vertex:r,fragment:t}=e,{output:a}=o;r.uniforms.add(new M("overlayTexOffset"),new M("overlayTexScale")),t.uniforms.add(new y("overlayOpacity",(e=>e.overlayOpacity))),a!==n.Highlight&&t.uniforms.add(new p("ovColorTex",((e,o)=>o.overlay?.getTexture(e.overlayContent)))),T(e,o)}function T(e,o){const r=o.pbrMode===c.Water||o.pbrMode===c.WaterOnIntegratedMesh||o.pbrMode===c.TerrainWithWater;r&&e.include(u,o);const{vertex:t,fragment:a,varyings:i}=e;i.add("vtcOverlay","vec4");const{output:d}=o,x=d===n.Highlight;t.code.add(m`void setOverlayVTC(in vec2 uv) {
vtcOverlay = vec4(uv, uv) * overlayTexScale + overlayTexOffset;
}`),a.code.add(m`bool isValid(vec2 uv, vec2 dxdy) {
return (uv.x >= 0.0 + dxdy.x) && (uv.x <= 1.0 - dxdy.x) && (uv.y >= 0.0 + dxdy.y) && (uv.y <= 1.0 - dxdy.y);
}
vec4 getOverlayColor(sampler2D ov0Tex, vec4 texCoords) {
vec4 color0 = texture(ov0Tex, vec2(texCoords.x * 0.5, texCoords.y));
vec4 color1 = texture(ov0Tex, vec2(texCoords.z * 0.5 + 0.5, texCoords.w));
bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));
return mix(color1 * float(isValid1), color0, float(isValid0));
}`),x?a.uniforms.add(new f("overlayHighlightTexture",((e,o)=>o.overlay?.getTexture(l.Highlight)))).code.add(m`uvec2 getAllOverlayHighlightValuesEncoded() {
vec4 texCoords = vtcOverlay;
vec2 uvInner = texCoords.xy;
vec2 uvOuter = texCoords.zw;
bool isValidInner = isValid(uvInner, fwidth(uvInner));
bool isValidOuter = isValid(uvOuter, vec2(0.0, 0.0));
vec2 texelCoordInner = uvInner * vec2(0.5, 1.0);
vec2 texelCoordOuter = uvOuter * vec2(0.5, 1.0) + vec2(0.5,0.0);
vec2 texDim =  vec2(textureSize(overlayHighlightTexture, 0));
uvec2 texelValueInner = texelFetch(overlayHighlightTexture, ivec2(texelCoordInner * texDim), 0).rg;
uvec2 texelValueOuter = texelFetch(overlayHighlightTexture, ivec2(texelCoordOuter * texDim), 0).rg;
return
isValidInner ? texelValueInner :
isValidOuter ? texelValueOuter :
uvec2(0);
}`):(a.code.add(m`vec4 getCombinedOverlayColor() {
return overlayOpacity * getOverlayColor(ovColorTex, vtcOverlay);
}`),a.code.add(m`vec4 getOverlayColorTexel() {
vec4 texCoords = vtcOverlay;
vec2 texDim =  vec2(textureSize(ovColorTex, 0));
vec4 color0 = texelFetch(ovColorTex, ivec2(vec2(texCoords.x * 0.5, texCoords.y) * texDim), 0);
vec4 color1 = texelFetch(ovColorTex, ivec2(vec2(texCoords.z * 0.5 + 0.5, texCoords.w) * texDim), 0);
bool isValid0 = isValid(texCoords.xy, fwidth(texCoords.xy));
bool isValid1 = isValid(texCoords.zw, vec2(0.0, 0.0));
return mix(color1 * float(isValid1), color0, float(isValid0));
}`)),r&&(s(a),v(a),a.code.add(m`vec4 getOverlayWaterColor(vec4 maskInput, vec4 colorInput, vec3 vposEyeDir,
float shadow, vec3 localUp, mat3 tbn, vec3 position, vec3 positionWorld) {
vec3 n = normalize(tbn *  (2.0 * maskInput.rgb - vec3(1.0)));
vec3 v = vposEyeDir;
vec3 final = getSeaColor(n, v, mainLightDirection, colorInput.rgb, mainLightIntensity, localUp, 1.0 - shadow, maskInput.w, position, positionWorld);
return vec4(final, colorInput.w);
}`))}function b(e,o){return e.identifier===i.Material&&d(e.output)?e.occludedGround?o.overlay?.getTexture(l.Occluded):o.overlay?.getTexture(l.ColorNoRasterImage):e.identifier===i.Material&&e.output===n.ObjectAndLayerIdColor?o.overlay?.getTexture(l.ObjectAndLayerIdColor):e.identifier===i.Highlight?o.overlay?.getTexture(l.Highlight):null}function V(e,l){const i=l.overlay?.overlays[a.INNER]?.extent;o(i)&&(w[0]=e.toMapSpace[0]/r(i)-i[0]/r(i),w[1]=e.toMapSpace[1]/t(i)-i[1]/t(i));const n=l.overlay?.overlays[a.OUTER]?.extent;return o(n)&&(w[2]=e.toMapSpace[0]/r(n)-n[0]/r(n),w[3]=e.toMapSpace[1]/t(n)-n[1]/t(n)),w}function I(e,l){const i=l.overlay?.overlays[a.INNER]?.extent;o(i)&&(w[0]=e.toMapSpace[2]/r(i),w[1]=e.toMapSpace[3]/t(i));const n=l.overlay?.overlays[a.OUTER]?.extent;return o(n)&&(w[2]=e.toMapSpace[2]/r(n),w[3]=e.toMapSpace[3]/t(n)),w}!function(e){e[e.Disabled=0]="Disabled",e[e.Enabled=1]="Enabled",e[e.EnabledWithWater=2]="EnabledWithWater",e[e.COUNT=3]="COUNT"}(h||(h={}));const w=(0,vec4f64/* create */.vt)();class M extends Uniform/* Uniform */.n{constructor(e){super(e,"vec4")}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/TextureOnly.glsl.js
var TextureOnly_glsl = __webpack_require__(52377);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/effects/RenderPlugin.js
var RenderPlugin = __webpack_require__(38931);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/math/vec2.js
var vec2 = __webpack_require__(60704);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl.js
var webgl = __webpack_require__(11041);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl/RenderNode.js
var RenderNode = __webpack_require__(43196);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ReloadableShaderModule.js
var ReloadableShaderModule = __webpack_require__(47705);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechnique.js + 1 modules
var ShaderTechnique = __webpack_require__(28347);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/HighlightApply.glsl.js
var HighlightApply_glsl = __webpack_require__(20072);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/renderState.js
var renderState = __webpack_require__(2449);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/effects/highlight/HighlightApplyTechnique.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class HighlightApplyTechnique_t extends ShaderTechnique/* ShaderTechnique */.w{constructor(r,o){super(r,o,new ReloadableShaderModule/* ReloadableShaderModule */.$(HighlightApply_glsl.H,(()=>__webpack_require__.e(/* import() */ 5636).then(__webpack_require__.bind(__webpack_require__, 25636)))))}initializePipeline(){return (0,renderState/* makePipelineState */.Ey)({blending:renderState/* unpremultipliedAlphaToPremultipliedAlpha */.T8,colorWrite:renderState/* defaultColorWrite */.kn})}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/HighlightBlur.glsl.js
var HighlightBlur_glsl = __webpack_require__(63601);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/effects/highlight/HighlightBlurTechnique.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class HighlightBlurTechnique_l extends ShaderTechnique/* ShaderTechnique */.w{constructor(r,o){super(r,o,new ReloadableShaderModule/* ReloadableShaderModule */.$(HighlightBlur_glsl.a,(()=>__webpack_require__.e(/* import() */ 8765).then(__webpack_require__.bind(__webpack_require__, 28765)))))}initializePipeline(){return (0,renderState/* makePipelineState */.Ey)({colorWrite:renderState/* defaultColorWrite */.kn})}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/HighlightDownsample.glsl.js
var HighlightDownsample_glsl = __webpack_require__(61068);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/effects/highlight/HighlightDownsampleTechnique.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class HighlightDownsampleTechnique_l extends ShaderTechnique/* ShaderTechnique */.w{constructor(r,s){super(r,s,new ReloadableShaderModule/* ReloadableShaderModule */.$(HighlightDownsample_glsl.a,(()=>__webpack_require__.e(/* import() */ 4688).then(__webpack_require__.bind(__webpack_require__, 74688)))))}initializePipeline(){return (0,renderState/* makePipelineState */.Ey)({colorWrite:renderState/* defaultColorWrite */.kn})}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/support/HighlightDefaults.js
var HighlightDefaults = __webpack_require__(29736);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/NoParameters.js
var NoParameters = __webpack_require__(22005);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/effects/highlight/HighlightPassParameters.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class e extends NoParameters/* NoParameters */.Y{constructor(){super(...arguments),this.occludedFactor=HighlightDefaults/* defaultOccludedFactor */.cD,this.verticalCellCount=0,this.horizontalCellCount=0,this.highlightLevel=0,this.pixelRatio=1}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/HighlightToSingle.glsl.js
var HighlightToSingle_glsl = __webpack_require__(24633);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/effects/highlight/HighlightToSingleTechnique.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class HighlightToSingleTechnique_l extends ShaderTechnique/* ShaderTechnique */.w{constructor(r,o){super(r,o,new ReloadableShaderModule/* ReloadableShaderModule */.$(HighlightToSingle_glsl.H,(()=>__webpack_require__.e(/* import() */ 4037).then(__webpack_require__.bind(__webpack_require__, 4037)))))}initializePipeline(){return (0,renderState/* makePipelineState */.Ey)({colorWrite:renderState/* defaultColorWrite */.kn})}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js
var basicInterfaces = __webpack_require__(91013);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/DefaultVertexAttributeLocations.js
var DefaultVertexAttributeLocations = __webpack_require__(13148);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js
var VertexAttribute = __webpack_require__(50645);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/enums.js
var enums = __webpack_require__(41746);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/VertexElementDescriptor.js
var VertexElementDescriptor = __webpack_require__(69955);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/DefaultVertexBufferLayouts.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const DefaultVertexBufferLayouts_t=[],DefaultVertexBufferLayouts_T=[new VertexElementDescriptor/* VertexElementDescriptor */._(VertexAttribute/* VertexAttribute */.r.POSITION,3,enums/* DataType */.pe.FLOAT,0,12)],DefaultVertexBufferLayouts_n=[new VertexElementDescriptor/* VertexElementDescriptor */._(VertexAttribute/* VertexAttribute */.r.POSITION,2,enums/* DataType */.pe.FLOAT,0,8)],DefaultVertexBufferLayouts_o=[new VertexElementDescriptor/* VertexElementDescriptor */._(VertexAttribute/* VertexAttribute */.r.POSITION,2,enums/* DataType */.pe.FLOAT,0,12),new VertexElementDescriptor/* VertexElementDescriptor */._(VertexAttribute/* VertexAttribute */.r.UV0,2,enums/* DataType */.pe.HALF_FLOAT,8,12)],DefaultVertexBufferLayouts_m=[new VertexElementDescriptor/* VertexElementDescriptor */._(VertexAttribute/* VertexAttribute */.r.POSITION,2,enums/* DataType */.pe.FLOAT,0,16),new VertexElementDescriptor/* VertexElementDescriptor */._(VertexAttribute/* VertexAttribute */.r.UV0,2,enums/* DataType */.pe.FLOAT,8,16)];

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexArrayObject.js
var VertexArrayObject = __webpack_require__(11459);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/BufferObject.js
var BufferObject = __webpack_require__(89423);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/Texture.js
var Texture = __webpack_require__(8595);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/TextureDescriptor.js
var TextureDescriptor = __webpack_require__(45758);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/effects/highlight/Highlight.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let Highlight_y=class extends RenderNode/* default */.A{constructor(){super(...arguments),this.produces=webgl/* InternalRenderCategory */.OG.HIGHLIGHTS,this.consumes={required:[webgl/* InternalRenderCategory */.OG.HIGHLIGHTS,"highlights"]},this._downsampleDrawParameters=new HighlightDownsample_glsl.H,this._passParameters=new e,this._highlightBlurDrawParameters=new HighlightBlur_glsl.H,this._grid=new A}initialize(){this.addHandles([(0,reactiveUtils/* watch */.wB)((()=>this._updateOptionsTexture()),(()=>{}),reactiveUtils/* initial */.Vh)])}destroy(){this._grid.coverage=(0,maybe/* releaseMaybe */.Gz)(this._grid.coverage),this._grid.vao=(0,maybe/* disposeMaybe */.WD)(this._grid.vao),this._passParameters.highlightOptionsTexture=(0,maybe/* releaseMaybe */.Gz)(this._passParameters.highlightOptionsTexture)}_updateOptionsTexture(){if(null==this._passParameters.highlightOptionsTexture){const e=new TextureDescriptor/* TextureDescriptor */.R(16,2);e.internalFormat=enums/* PixelFormat */.Ab.RGBA,e.samplingMode=enums/* TextureSamplingMode */.Cj.NEAREST,this._passParameters.highlightOptionsTexture=new Texture/* Texture */.g(this.renderingContext,e,null)}this._passParameters.highlightOptionsTexture.setData(E(this.view.state.highlights)),this.requestRender(basicInterfaces/* RenderRequestType */.C7.UPDATE)}precompile(){this.techniques.precompile(HighlightDownsampleTechnique_l),this.techniques.precompile(HighlightToSingleTechnique_l),this.techniques.precompile(HighlightBlurTechnique_l),this.techniques.precompile(HighlightApplyTechnique_t)}render(e){const t=e.find((({name:e})=>e===webgl/* InternalRenderCategory */.OG.HIGHLIGHTS)),{techniques:r,bindParameters:i,_passParameters:s,renderingContext:o}=this;if(!i.decorations)return t;const h=r.get(HighlightDownsampleTechnique_l);if(!h.compiled)return this.requestRender(basicInterfaces/* RenderRequestType */.C7.UPDATE),t;const n=e.find((({name:e})=>"highlights"===e)).getTexture();s.highlightTexture=n;const a=()=>{this._gridUpdateResources(n);const e=this._gridComputeCoverage(h,n,i),{horizontalCellCount:t,verticalCellCount:r}=e;return s.horizontalCellCount=t,s.verticalCellCount=r,s.coverageTexture=e.coverage?.getTexture(),e},g=e=>{const t=e.verticalCellCount*e.horizontalCellCount;o.bindVAO(e.vao),o.drawElementsInstanced(enums/* PrimitiveType */.WR.TRIANGLES,6,enums/* DataType */.pe.UNSIGNED_BYTE,0,t)},{camera:c}=i,u=()=>{o.bindFramebuffer(t.fbo),o.setViewport4fv(c.fullViewport)};return this._renderHighlightPostprocess(n,a,g,u),s.highlightTexture=null,s.coverageTexture=null,t}_renderHighlightPostprocess(e,t,r,i){const{fboCache:s,techniques:o,bindParameters:h,_passParameters:l,renderingContext:a}=this,m=o.get(HighlightToSingleTechnique_l),p=o.get(HighlightBlurTechnique_l),T=o.get(HighlightApplyTechnique_t);if(!T.compiled||!p.compiled||!m.compiled)return void this.requestRender(basicInterfaces/* RenderRequestType */.C7.UPDATE);l.highlightTexture=e;const b=t(),{width:w,height:x}=e.descriptor;l.highlightTexture=e;const{camera:C}=h,{fullWidth:v,fullHeight:_,pixelRatio:j}=C,O=Math.ceil(v/j),H=Math.ceil(_/j),{_highlightBlurDrawParameters:P}=this,q=this.view.stage.renderView.renderer,{highlights:D}=h;for(let c=0;c<D.length;++c){const{name:e}=D[c];if(!q.hasHighlight(e))continue;l.highlightLevel=c,a.setClearColor(0,0,0,0);const t=s.acquire(w,x,"single highlight",FBOCacheFormats/* ColorFormat */.NV.RG8UNORM);a.bindFramebuffer(t.fbo),a.setViewport(0,0,w,x),a.clear(enums/* FramebufferBit */.NV.COLOR),a.bindTechnique(m,h,l),r(b),P.blurInput=t.getTexture(),(0,vec2/* set */.hZ)(P.blurSize,1/O,0);const o=s.acquire(O,H,"single highlight blur h",FBOCacheFormats/* ColorFormat */.NV.RG8UNORM);a.unbindTexture(o.fbo?.colorTexture),a.bindFramebuffer(o.fbo),a.setViewport(0,0,O,H),a.clear(enums/* FramebufferBit */.NV.COLOR),a.bindTechnique(p,h,l,P),r(b),t.release(),(0,vec2/* set */.hZ)(P.blurSize,0,1/H),l.highlightBlurTexture=o.getTexture(),i(),a.bindTechnique(T,h,l,P),r(b),o.release()}}_gridUpdateResources(e){const t=this._grid,{width:r,height:i}=e.descriptor;if(t.horizontalCellCount=Math.ceil(r/HighlightDownsample_glsl.g),t.verticalCellCount=Math.ceil(i/HighlightDownsample_glsl.g),t.vao)return;const s=this.renderingContext,o=BufferObject/* BufferObject */.g.createIndex(s,enums/* Usage */._U.STATIC_DRAW,L);t.vao=new VertexArrayObject/* VertexArrayObject */.Z(s,DefaultVertexAttributeLocations/* Default3D */.D,new Map([["geometry",DefaultVertexBufferLayouts_t]]),new Map([["geometry",BufferObject/* BufferObject */.g.createVertex(s,enums/* Usage */._U.STATIC_DRAW)]]),o)}_gridComputeCoverage(e,t,r){const i=this.renderingContext,s=this._grid,o=t.descriptor,h=Math.ceil(o.width/HighlightDownsample_glsl.g),n=Math.ceil(o.height/HighlightDownsample_glsl.g);this._downsampleDrawParameters.input=t;const{highlights:l}=r;s.coverage?.release();const a=this.fboCache.acquire(h,n,"highlight coverage",l.length>B?FBOCacheFormats/* ColorFormat */.NV.RG8UINT:FBOCacheFormats/* ColorFormat */.NV.R8UINT);return s.coverage=a,i.bindFramebuffer(a.fbo),i.bindTechnique(e,r,this._passParameters,this._downsampleDrawParameters),i.setViewport(0,0,h,n),i.screen.draw(),s}get test(){}};(0,tslib_es6._)([(0,property/* property */.MZ)()],Highlight_y.prototype,"produces",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],Highlight_y.prototype,"consumes",void 0),Highlight_y=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.3d.webgl-engine.effects.highlight.Highlight")],Highlight_y);class A{constructor(){this.coverage=null,this.vao=null,this.verticalCellCount=0,this.horizontalCellCount=0,this.viewportWidth=0,this.viewportHeight=0}}function E(e){const t=new Uint8Array(128);let r=0;for(const i of e){const e=4*r,s=4*r+64;++r;const{color:o}=i,h=i.haloColor??o;t[e+0]=o.r,t[e+1]=o.g,t[e+2]=o.b,t[e+3]=i.fillOpacity*o.a*255,t[s+0]=h.r,t[s+1]=h.g,t[s+2]=h.b,t[s+3]=i.haloOpacity*h.a*255}return t}let S=0;function G(e){let t=0;for(const i of e){const{name:e}=i;t+=e.length;const{color:r,fillOpacity:s,haloColor:o,haloOpacity:h}=i;t+=r.r+r.g+r.b+r.a+s,t+=o?o.r+o.g+o.b+o.a+h:0}const r=e.at(0);if(r){const{shadowOpacity:e,shadowDifference:i,shadowColor:s}=r;t+=e+i+s.r+s.g+s.b+s.a}return S+++(t>=0?0:1)}const L=new Uint8Array([0,1,2,2,1,3]);function Highlight_M(e,t,r,i,s,o=0){const{highlights:h}=i,l=h.length>1?t.acquire(r.width,r.height,"highlight mix",h.length>B?FBOCacheFormats/* ColorFormat */.NV.RG8UINT:FBOCacheFormats/* ColorFormat */.NV.R8UINT):null,{gl:a}=e;if(l){const t=e.getBoundFramebufferObject();e.bindFramebuffer(l.fbo),a.clearBufferuiv(a.COLOR,0,[0,0,0,0]),e.bindFramebuffer(t)}const c=l?.getTexture();i.highlightMixTexture=c,(0,vec2/* set */.hZ)(i.highlightMixOrigin,o,0),h.forEach(((t,h)=>{if(h>0){const t=Texture/* Texture */.g.TEXTURE_UNIT_FOR_UPDATES;e.bindTexture(c,t),e.setActiveTexture(t),a.copyTexSubImage2D(enums/* TextureType */.Ap.TEXTURE_2D,0,0,0,o,0,r.width,r.height),e.bindTexture(null,t)}e.clear(enums/* FramebufferBit */.NV.DEPTH),i.highlightLevel=h,s()})),i.highlightLevel=null,i.highlightMixTexture=null,l?.release()}const B=4;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/NestedMap.js
var NestedMap = __webpack_require__(80912);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLMaterialParameters.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class GLMaterialParameters_t{constructor(t,s,e,i){this.material=t,this.output=s,this.techniques=e,this.textures=i}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js
var Util = __webpack_require__(58947);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLMaterialRepository.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class GLMaterialRepository_a{constructor(e,t,i,s){this._textures=e,this._techniques=t,this.materialChanged=i,this.requestRender=s,this._id2glMaterialRef=new NestedMap/* NestedMap */.O}dispose(){this._textures.destroy()}acquire(e,t,r){this._ownMaterial(e);const s=e.produces.get(t);if(!s?.(r))return null;let a=this._id2glMaterialRef.get(r,e.id);if(null==a){const t=e.createGLMaterial(new GLMaterialParameters_t(e,r,this._techniques,this._textures));a=new GLMaterialRepository_o(t),this._id2glMaterialRef.set(r,e.id,a)}return a.ref(),a.glMaterial}release(e,r){const i=this._id2glMaterialRef.get(r,e.id);null!=i&&(i.unref(),i.referenced||((0,maybe/* disposeMaybe */.WD)(i.glMaterial),this._id2glMaterialRef.delete(r,e.id)))}_ownMaterial(t){t.repository&&t.repository!==this&&Logger/* default */.A.getLogger("esri.views.3d.webgl-engine.lib.GLMaterialRepository").error("Material is already owned by a different material repository"),t.repository=this}}class GLMaterialRepository_o{constructor(e){this.glMaterial=e,this._refCnt=0}ref(){++this._refCnt}unref(){--this._refCnt,(0,Util/* assert */.vA)(this._refCnt>=0)}get referenced(){return this._refCnt>0}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/GridLocalOriginFactory.js
var GridLocalOriginFactory = __webpack_require__(24734);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Material.js
var Material = __webpack_require__(45722);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/OITPass.js
var OITPass = __webpack_require__(69338);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/time.js
var time = __webpack_require__(60882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js
var mat4f64 = __webpack_require__(86128);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec2f64.js
var vec2f64 = __webpack_require__(59646);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/environment/CloudsParameters.js
var CloudsParameters = __webpack_require__(58718);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/hud/HUDRenderStyle.js
var HUDRenderStyle = __webpack_require__(15354);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/RenderSlot.js
var RenderSlot = __webpack_require__(38323);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Update.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var Update_e;!function(e){e[e.Immediate=0]="Immediate",e[e.FadeWithWeather=1]="FadeWithWeather"}(Update_e||(Update_e={}));

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lighting/SceneLighting.js + 2 modules
var SceneLighting = __webpack_require__(9409);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/BindParameters.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class BindParameters_o{constructor(i,t){this.width=i,this.height=t}}class BindParameters_a{constructor(i){this.shadowMap=i,this.slot=RenderSlot/* RenderSlot */.N.OPAQUE_MATERIAL,this.slicePlane=null,this.hasOccludees=!1,this.enableFillLights=!0,this.oitPass=OITPass/* OITPass */.Y.NONE,this.alignPixelEnabled=!1,this.decorations=!0,this.overlayStretch=1,this.viewshedEnabled=!1,this._camera=new RenderCamera/* default */.A,this._inverseViewport=(0,vec2f64/* create */.vt)(),this._oldLighting=new SceneLighting/* SceneLighting */.TA,this._newLighting=new SceneLighting/* SceneLighting */.TA,this._fadedLighting=new SceneLighting/* SceneLighting */.TA,this._lighting=this._newLighting,this.ssr=new BindParameters_c,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.highlights=new Array,this.highlightOrderMap=new Map,this.highlightMixOrigin=(0,vec2f64/* create */.vt)(),this.highlightMixTexture=null,this.hudRenderStyle=HUDRenderStyle/* HUDRenderStyle */.D.Occluded,this.hudOccludedFragmentOpacity=1,this.snowCover=!1,this.clouds=new CloudsParameters/* CloudsParameters */.n,this.shadowHighlightsVisible=!1}get camera(){return this._camera}set camera(i){this._camera=i,this._inverseViewport[0]=1/i.fullViewport[2],this._inverseViewport[1]=1/i.fullViewport[3]}get inverseViewport(){return this._inverseViewport}get lighting(){return this._lighting}fadeLighting(){switch(this.clouds.fadeFactor){case 0:this._lighting=this._oldLighting;break;default:this._fadedLighting.lerpLighting(this._oldLighting,this._newLighting,this.clouds.fadeFactor),this._lighting=this._fadedLighting;break;case 1:this._lighting=this._newLighting,this._oldLighting.copyFrom(this._newLighting)}}updateLighting(i,t,h,e){this._oldLighting.copyFrom(this.lighting),this._newLighting.noonFactor=t,this._newLighting.globalFactor=h,this._newLighting.set(i),e===Update_e.FadeWithWeather&&this.clouds.requestFade(),this.fadeLighting()}get highlight(){return null==this.highlightLevel?null:this.highlights[this.highlightLevel]}}class BindParameters_c{constructor(){this.fadeFactor=1,this.reprojectionMatrix=(0,mat4f64/* create */.vt)()}}

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/RenderContext.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class RenderContext_a{constructor(s,a,o){this.rctx=s,this.techniques=o,this.lastFrameCamera=new RenderCamera/* default */.A,this.output=ShaderOutput/* ShaderOutput */.V.Color,this.renderOccludedMask=RenderContext_n,this.time=(0,time/* Milliseconds */.l5)(0),this.bind=new BindParameters_a(a),this.bind.alignPixelEnabled=!0}}const RenderContext_n=Material/* RenderOccludedFlag */.m$.Occlude|Material/* RenderOccludedFlag */.m$.OccludeAndTransparent|Material/* RenderOccludedFlag */.m$.OccludeAndTransparentStencil;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(92504);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f64.js
var mat3f64 = __webpack_require__(78607);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec42.js
var vec42 = __webpack_require__(2662);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/ViewingMode.js
var ViewingMode = __webpack_require__(10714);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/CascadeCamera.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let CascadeCamera_i=class extends RenderCamera/* default */.A{constructor(){super(...arguments),this._projectionMatrix=(0,mat4f64/* create */.vt)()}get projectionMatrix(){return this._projectionMatrix}};(0,tslib_es6._)([(0,property/* property */.MZ)()],CascadeCamera_i.prototype,"_projectionMatrix",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],CascadeCamera_i.prototype,"projectionMatrix",null),CascadeCamera_i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.3d.webgl-engine.lib.CascadeCamera")],CascadeCamera_i);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/textureUtils.js
var textureUtils = __webpack_require__(84147);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/ShadowMap.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var ShadowMap_E;!function(t){t[t.Highlight=0]="Highlight",t[t.ExcludeHighlight=1]="ExcludeHighlight"}(ShadowMap_E||(ShadowMap_E={}));class P{constructor(){this.camera=new CascadeCamera_i,this.lightMat=(0,mat4f64/* create */.vt)()}}class ShadowMap_A{constructor(){this.maxNumCascadesHighQuality=4,this.maxNumCascadesLowQuality=4,this.textureSizeModHighQuality=1.3,this.textureSizeModLowQuality=.9,this.splitSchemeLambda=0}}class ShadowMap_I{constructor(t,s){this._fbos=t,this._viewingMode=s,this._snapshots=new Array,this._textureHeight=0,this._numCascades=1,this.settings=new ShadowMap_A,this._projectionView=(0,mat4f64/* create */.vt)(),this._projectionViewInverse=(0,mat4f64/* create */.vt)(),this._modelViewLight=(0,mat4f64/* create */.vt)(),this._cascadeDistances=[0,0,0,0,0],this._usedCascadeDistances=(0,vec4f64/* create */.vt)(),this._cascades=[new P,new P,new P,new P],this._lastOrigin=null,this._enabled=!1,this._maxTextureWidth=Math.min((0,has/* default */.A)("esri-mobile")?4096:16384,t.rctx.parameters.maxTextureSize)}dispose(){this.enabled=!1,this.disposeOffscreenBuffers()}get depthTexture(){return this._handle?.getTexture(enums/* DepthStencilAttachment */.nI)}get _textureWidth(){return this._textureHeight*this._numCascades}get numCascades(){return this._numCascades}get cascadeDistances(){return (0,vec42.s)(this._usedCascadeDistances,this._cascadeDistances[0],this._numCascades>1?this._cascadeDistances[1]:1/0,this._numCascades>2?this._cascadeDistances[2]:1/0,this._numCascades>3?this._cascadeDistances[3]:1/0)}disposeMainBuffer(){this._handle=(0,maybe/* releaseMaybe */.Gz)(this._handle)}disposeOffscreenBuffers(){this.disposeMainBuffer(),this._discardSnapshots()}set maxCascades(s){this.settings.maxNumCascadesHighQuality=(0,mathUtils/* clamp */.qE)(Math.floor(s),1,4)}get maxCascades(){return this.settings.maxNumCascadesHighQuality}set enabled(t){this._enabled=t,t||this.disposeOffscreenBuffers()}get enabled(){return this._enabled}get ready(){return this._enabled&&null!=this.depthTexture}get cascades(){for(let t=0;t<this._numCascades;++t)tt[t]=this._cascades[t];return tt.length=this._numCascades,tt}start(t,s,e,i,a){(0,Util/* assert */.vA)(this.enabled);const{near:r,far:h}=Mt(e);this._computeCascadeDistances(r,h,i),this._textureHeight=this._computeTextureHeight(t,a,i),this._setupMatrices(t,s);const{viewMatrix:o,projectionMatrix:n}=t;for(let c=0;c<this._numCascades;++c)this._constructCascade(c,n,o,s);this._lastOrigin=null,this.clear()}finish(){(0,Util/* assert */.vA)(this.enabled)}getShadowMapMatrices(t){if(!this._lastOrigin||!(0,vec32.q)(t,this._lastOrigin)){this._lastOrigin=this._lastOrigin||(0,vec3f64/* create */.vt)(),(0,vec32.c)(this._lastOrigin,t);for(let s=0;s<this._numCascades;++s){(0,mat4/* translate */.Tl)(st,this._cascades[s].lightMat,t);for(let t=0;t<16;++t)et[16*s+t]=st[t]}}return et}moveSnapshot(t){(0,Util/* assert */.vA)(this.enabled),this._snapshots[t]?.release(),this._snapshots[t]=this._handle,this._handle?.setName(t===ShadowMap_E.Highlight?"shadow map highlight":"shadow map excluding highlight"),this._handle=null}copySnapshot(t){if(!this.enabled)return;const s=this._handle?.getTexture(enums/* DepthStencilAttachment */.nI)?.descriptor;if(!s)return;this._snapshots[t]?.release();const e=t===ShadowMap_E.Highlight?"shadow map highlight":"shadow map excluding highlight",i=this._acquireFBO(e);this._snapshots[t]=i;const a=this._handle?.fbo;if(!a||!i?.fbo)return void console.error("No FBO");const{rctx:r}=this._fbos;r.blitFramebuffer(a,i.fbo,enums/* FramebufferBit */.NV.DEPTH)}getSnapshot(t){return this.enabled?this._snapshots[t]?.getTexture(enums/* DepthStencilAttachment */.nI):null}clear(){this._ensureFbo(),this.bindFbo(),this._fbos.rctx.clear(enums/* FramebufferBit */.NV.DEPTH)}_computeTextureHeight({pixelRatio:t,fullWidth:s,fullHeight:e},i,a){const r=Math.min(window.devicePixelRatio,i)/t,h=a?this.settings.textureSizeModHighQuality:this.settings.textureSizeModLowQuality;return (0,textureUtils/* applyTextureResizeModulo */.Mv)(Math.max(s,e)*r*h,this._maxTextureWidth/this._numCascades)}_ensureFbo(){this._handle?.fbo?.width===this._textureWidth&&this._handle?.fbo.height===this._textureHeight||(this._handle?.release(),this._handle=this._acquireFBO("shadow map"))}_acquireFBO(t){const s=this._fbos.acquire(this._textureWidth,this._textureHeight,t,FBOCacheFormats/* DepthFormat */.zd.DEPTH16);return s.getTexture(enums/* DepthStencilAttachment */.nI)?.setShadowFiltering(!0),s}_discardSnapshot(t){this._snapshots[t]=(0,maybe/* releaseMaybe */.Gz)(this._snapshots[t])}_discardSnapshots(){for(let t=0;t<this._snapshots.length;++t)this._discardSnapshot(t);this._snapshots.length=0}bindFbo(){this._fbos.rctx.bindFramebuffer(this._handle?.fbo)}_constructCascade(t,s,e,i){const a=this._cascades[t],o=-this._cascadeDistances[t],n=-this._cascadeDistances[t+1],c=(s[10]*o+s[14])/Math.abs(s[11]*o+s[15]),l=(s[10]*n+s[14])/Math.abs(s[11]*n+s[15]);(0,Util/* assert */.vA)(c<l);for(let r=0;r<8;++r){(0,vec42.s)(k,r%4==0||r%4==3?-1:1,r%4==0||r%4==1?-1:1,r<4?c:l,1);const t=ShadowMap_G[r];(0,vec42.t)(t,k,this._projectionViewInverse),t[0]/=t[3],t[1]/=t[3],t[2]/=t[3]}(0,vec32.u)($,ShadowMap_G[0]),a.camera.viewMatrix=(0,mat4/* translate */.Tl)(U,this._modelViewLight,$);for(let r=0;r<8;++r)(0,vec32.t)(ShadowMap_G[r],ShadowMap_G[r],a.camera.viewMatrix);let d=ShadowMap_G[0][2],u=ShadowMap_G[0][2];for(let r=1;r<8;++r)d=Math.min(d,ShadowMap_G[r][2]),u=Math.max(u,ShadowMap_G[r][2]);d-=200,u+=200,a.camera.near=-u,a.camera.far=-d,wt(e,i,d,u,a.camera),(0,mat4/* multiply */.lw)(a.lightMat,a.camera.projectionMatrix,a.camera.viewMatrix);const m=this._textureHeight;a.camera.viewport=[t*m,0,m,m]}_setupMatrices(t,s){(0,mat4/* multiply */.lw)(this._projectionView,t.projectionMatrix,t.viewMatrix),(0,mat4/* invert */.B8)(this._projectionViewInverse,this._projectionView);const e=this._viewingMode===ViewingMode/* ViewingMode */.RT.Global?t.eye:(0,vec32.i)($,0,0,1);(0,mat4/* lookAt */.t5)(this._modelViewLight,[0,0,0],[-s[0],-s[1],-s[2]],e)}_computeCascadeDistances(t,e,i){const a=i?this.settings.maxNumCascadesHighQuality:this.settings.maxNumCascadesLowQuality;this._numCascades=Math.min(1+Math.floor((0,Util/* logWithBase */.kL)(e/t,4)),a);const r=(e-t)/this._numCascades,h=(e/t)**(1/this._numCascades);let o=t,n=t;for(let c=0;c<this._numCascades+1;++c)this._cascadeDistances[c]=(0,mathUtils/* lerp */.Cc)(o,n,this.settings.splitSchemeLambda),o*=h,n+=r}get test(){}}const U=(0,mat4f64/* create */.vt)(),k=(0,vec4f64/* create */.vt)(),ShadowMap_G=[];for(let Ct=0;Ct<8;++Ct)ShadowMap_G.push((0,vec4f64/* create */.vt)());const J=(0,vec2f64/* create */.vt)(),K=(0,vec2f64/* create */.vt)(),X=(0,vec2f64/* create */.vt)(),Y=(0,vec2f64/* create */.vt)(),Z=(0,vec2f64/* create */.vt)(),$=(0,vec3f64/* create */.vt)(),tt=[],st=(0,mat4f64/* create */.vt)(),et=mat4f64/* IDENTITY */.zK.concat(mat4f64/* IDENTITY */.zK,mat4f64/* IDENTITY */.zK,mat4f64/* IDENTITY */.zK,mat4f64/* IDENTITY */.zK),it=(0,vec2f64/* create */.vt)(),at=(0,vec2f64/* create */.vt)(),rt=[(0,vec2f64/* create */.vt)(),(0,vec2f64/* create */.vt)(),(0,vec2f64/* create */.vt)(),(0,vec2f64/* create */.vt)()],ht=(0,vec2f64/* create */.vt)(),ot=(0,vec2f64/* create */.vt)(),nt=(0,vec2f64/* create */.vt)(),ct=(0,vec2f64/* create */.vt)(),lt=(0,vec2f64/* create */.vt)(),dt=(0,vec2f64/* create */.vt)(),ut=(0,vec2f64/* create */.vt)();function mt(t,s,e,i,a,r,h,o){(0,vec2/* set */.hZ)(it,0,0);for(let d=0;d<4;++d)(0,vec2/* add */.WQ)(it,it,t[d]);(0,vec2/* scale */.hs)(it,it,.25),(0,vec2/* set */.hZ)(at,0,0);for(let d=4;d<8;++d)(0,vec2/* add */.WQ)(at,at,t[d]);(0,vec2/* scale */.hs)(at,at,.25),(0,vec2/* lerp */.Cc)(rt[0],t[4],t[5],.5),(0,vec2/* lerp */.Cc)(rt[1],t[5],t[6],.5),(0,vec2/* lerp */.Cc)(rt[2],t[6],t[7],.5),(0,vec2/* lerp */.Cc)(rt[3],t[7],t[4],.5);let n=0,c=(0,vec2/* squaredDistance */.hG)(rt[0],it);for(let d=1;d<4;++d){const t=(0,vec2/* squaredDistance */.hG)(rt[d],it);t<c&&(c=t,n=d)}(0,vec2/* subtract */.Re)(ht,rt[n],t[n+4]);const l=ht[0];let M,C;ht[0]=-ht[1],ht[1]=l,(0,vec2/* subtract */.Re)(ot,at,it),(0,vec2/* dot */.Om)(ot,ht)<0&&(0,vec2/* negate */.ze)(ht,ht),(0,vec2/* lerp */.Cc)(ht,ht,ot,e),(0,vec2/* normalize */.S8)(ht,ht),M=C=(0,vec2/* dot */.Om)((0,vec2/* subtract */.Re)(nt,t[0],it),ht);for(let d=1;d<8;++d){const s=(0,vec2/* dot */.Om)((0,vec2/* subtract */.Re)(nt,t[d],it),ht);s<M?M=s:s>C&&(C=s)}(0,vec2/* copy */.C)(i,it),(0,vec2/* scale */.hs)(nt,ht,M-s),(0,vec2/* add */.WQ)(i,i,nt);let j=-1,y=1,H=0,v=0;for(let d=0;d<8;++d){(0,vec2/* subtract */.Re)(ct,t[d],i),(0,vec2/* normalize */.S8)(ct,ct);const s=ht[0]*ct[1]-ht[1]*ct[0];s>0?s>j&&(j=s,H=d):s<y&&(y=s,v=d)}(0,Util/* verify */.MX)(j>0,"leftArea"),(0,Util/* verify */.MX)(y<0,"rightArea"),(0,vec2/* scale */.hs)(lt,ht,M),(0,vec2/* add */.WQ)(lt,lt,it),(0,vec2/* scale */.hs)(dt,ht,C),(0,vec2/* add */.WQ)(dt,dt,it),ut[0]=-ht[1],ut[1]=ht[0];const D=(0,Util/* rayRay2D */.L)(i,t[v],dt,(0,vec2/* add */.WQ)(nt,dt,ut),1,a),S=(0,Util/* rayRay2D */.L)(i,t[H],dt,nt,1,r),O=(0,Util/* rayRay2D */.L)(i,t[H],lt,(0,vec2/* add */.WQ)(nt,lt,ut),1,h),T=(0,Util/* rayRay2D */.L)(i,t[v],lt,nt,1,o);(0,Util/* verify */.MX)(D,"rayRay"),(0,Util/* verify */.MX)(S,"rayRay"),(0,Util/* verify */.MX)(O,"rayRay"),(0,Util/* verify */.MX)(T,"rayRay")}function _t(t,s){return 3*s+t}const ft=(0,vec2f64/* create */.vt)();function gt(t,s){return (0,vec2/* set */.hZ)(ft,t[s],t[s+3]),ft}const pt=(0,vec2f64/* create */.vt)(),xt=(0,mat3f64/* create */.vt)();function bt(t,s,e,i,a){(0,vec2/* subtract */.Re)(pt,e,i),(0,vec2/* scale */.hs)(pt,pt,.5),xt[0]=pt[0],xt[1]=pt[1],xt[2]=0,xt[3]=pt[1],xt[4]=-pt[0],xt[5]=0,xt[6]=pt[0]*pt[0]+pt[1]*pt[1],xt[7]=pt[0]*pt[1]-pt[1]*pt[0],xt[8]=1,xt[_t(0,2)]=-(0,vec2/* dot */.Om)(gt(xt,0),t),xt[_t(1,2)]=-(0,vec2/* dot */.Om)(gt(xt,1),t);let r=(0,vec2/* dot */.Om)(gt(xt,0),e)+xt[_t(0,2)],h=(0,vec2/* dot */.Om)(gt(xt,1),e)+xt[_t(1,2)],o=(0,vec2/* dot */.Om)(gt(xt,0),i)+xt[_t(0,2)],n=(0,vec2/* dot */.Om)(gt(xt,1),i)+xt[_t(1,2)];r=-(r+o)/(h+n),xt[_t(0,0)]+=xt[_t(1,0)]*r,xt[_t(0,1)]+=xt[_t(1,1)]*r,xt[_t(0,2)]+=xt[_t(1,2)]*r,r=1/((0,vec2/* dot */.Om)(gt(xt,0),e)+xt[_t(0,2)]),h=1/((0,vec2/* dot */.Om)(gt(xt,1),e)+xt[_t(1,2)]),xt[_t(0,0)]*=r,xt[_t(0,1)]*=r,xt[_t(0,2)]*=r,xt[_t(1,0)]*=h,xt[_t(1,1)]*=h,xt[_t(1,2)]*=h,xt[_t(2,0)]=xt[_t(1,0)],xt[_t(2,1)]=xt[_t(1,1)],xt[_t(2,2)]=xt[_t(1,2)],xt[_t(1,2)]+=1,r=(0,vec2/* dot */.Om)(gt(xt,1),s)+xt[_t(1,2)],h=(0,vec2/* dot */.Om)(gt(xt,2),s)+xt[_t(2,2)],o=(0,vec2/* dot */.Om)(gt(xt,1),e)+xt[_t(1,2)],n=(0,vec2/* dot */.Om)(gt(xt,2),e)+xt[_t(2,2)],r=-.5*(r/h+o/n),xt[_t(1,0)]+=xt[_t(2,0)]*r,xt[_t(1,1)]+=xt[_t(2,1)]*r,xt[_t(1,2)]+=xt[_t(2,2)]*r,r=(0,vec2/* dot */.Om)(gt(xt,1),s)+xt[_t(1,2)],h=(0,vec2/* dot */.Om)(gt(xt,2),s)+xt[_t(2,2)],o=-h/r,xt[_t(1,0)]*=o,xt[_t(1,1)]*=o,xt[_t(1,2)]*=o,a[0]=xt[0],a[1]=xt[1],a[2]=0,a[3]=xt[2],a[4]=xt[3],a[5]=xt[4],a[6]=0,a[7]=xt[5],a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=xt[6],a[13]=xt[7],a[14]=0,a[15]=xt[8]}function wt(t,s,i,a,r){const h=1/ShadowMap_G[0][3],o=1/ShadowMap_G[4][3];(0,Util/* assert */.vA)(h<o);let n=h+Math.sqrt(h*o);const c=Math.sin((0,mathUtils/* acosClamped */.XM)(t[2]*s[0]+t[6]*s[1]+t[10]*s[2]));n/=c,mt(ShadowMap_G,n,c,J,K,X,Y,Z),bt(J,K,Y,Z,r.projectionMatrix),r.projectionMatrix[10]=2/(i-a),r.projectionMatrix[14]=-(i+a)/(i-a)}function Mt(t){let{near:s,far:e}=t;return s<2&&(s=2),e<2&&(e=2),s>=e&&(s=2,e=4),{near:s,far:e}}

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/TextureTechnique.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class TextureTechnique_t extends ShaderTechnique/* ShaderTechnique */.w{constructor(o,i){super(o,i,new ReloadableShaderModule/* ReloadableShaderModule */.$(TextureOnly_glsl.a,(()=>__webpack_require__.e(/* import() */ 4411).then(__webpack_require__.bind(__webpack_require__, 76792)))))}initializePipeline(e){return e.hasAlpha?(0,renderState/* makePipelineState */.Ey)({blending:renderState/* unpremultipliedAlphaToPremultipliedAlpha */.T8,colorWrite:renderState/* defaultColorWrite */.kn}):(0,renderState/* makePipelineState */.Ey)({colorWrite:renderState/* defaultColorWrite */.kn})}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration.js + 1 modules
var ShaderTechniqueConfiguration = __webpack_require__(77941);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/TextureTechniqueConfiguration.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class TextureTechniqueConfiguration_r extends ShaderTechniqueConfiguration/* ShaderTechniqueConfiguration */.K{constructor(){super(...arguments),this.hasAlpha=!1}}(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],TextureTechniqueConfiguration_r.prototype,"hasAlpha",void 0);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/UpdatePolicy.js
var UpdatePolicy = __webpack_require__(68699);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lighting/Lightsources.js
var Lightsources = __webpack_require__(75268);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/OverlayCompositing.glsl.js
var OverlayCompositing_glsl = __webpack_require__(36004);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/OverlayCompositingTechnique.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class OverlayCompositingTechnique_s extends ShaderTechnique/* ShaderTechnique */.w{constructor(r,s){super(r,s,new ReloadableShaderModule/* ReloadableShaderModule */.$(OverlayCompositing_glsl.a,(()=>__webpack_require__.e(/* import() */ 6008).then(__webpack_require__.bind(__webpack_require__, 26008)))))}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/support/Scheduler.js
var Scheduler = __webpack_require__(22167);
;// ../node_modules/@arcgis/core/views/3d/terrain/OverlayRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let OverlayRenderer_$=class extends RenderPlugin/* SyncRenderPlugin */.RW{constructor(e){super(e),this._overlays=null,this._renderTargets=null,this._overlayParameters=new OverlayCompositing_glsl.O,this.hasHighlights=!1,this._hasWater=!1,this._renderers=new Map,this._sortedDrapeSourceRenderersDirty=!1,this._sortedRenderers=new PooledArray/* default */.A,this._passParameters=new TextureOnly_glsl.T,this._screenToWorldRatio=1,this._localOriginFactory=null,this.unloadedMemory=0,this.ignoresMemoryFactor=!1,this._camera=new RenderCamera/* default */.A,this.events=new Evented/* default */.A,this.longitudeCyclical=null,this.produces=new Map([[RenderSlot/* RenderSlot */.N.DRAPED_MATERIAL,e=>e!==ShaderOutput/* ShaderOutput */.V.Highlight||this.hasHighlights],[RenderSlot/* RenderSlot */.N.DRAPED_WATER,()=>this._hasWater]]),this._hasTargetWithoutRasterImage=!1,this._hasDrapedFeatureSource=!1,this._hasDrapedRasterSource=!1}initialize(){const e=this._view,r=e.stage,t=r.renderer.fboCache,{waterTextures:s,techniques:i}=r.renderView;this._renderContext=new RenderContext_a(this._rctx,new ShadowMap_I(t,e.state.viewingMode),i),this.addHandles([(0,reactiveUtils/* watch */.wB)((()=>s.updating),(()=>this.events.emit("content-changed")),reactiveUtils/* syncAndInitial */.pc),(0,reactiveUtils/* watch */.wB)((()=>this.spatialReference),(e=>this._localOriginFactory=new GridLocalOriginFactory/* GridLocalOriginFactory */.g(e)),reactiveUtils/* syncAndInitial */.pc),(0,reactiveUtils.on)((()=>e.allLayerViews),"after-changes",(()=>this._sortedDrapeSourceRenderersDirty=!0)),(0,reactiveUtils/* watch */.wB)((()=>G(e.state.highlights)),(()=>this._sortedDrapeSourceRenderersDirty=!0),reactiveUtils/* initial */.Vh),(0,reactiveUtils/* watch */.wB)((()=>e.state.highlights),(r=>{this._bindParameters.highlights=r,this._bindParameters.highlightOrderMap=e.state.highlightOrderMap}),reactiveUtils/* initial */.Vh),e.resourceController.scheduler.registerTask(Scheduler/* TaskPriority */.W6.OVERLAY_RENDERER,this)]);const{_bindParameters:l,_camera:d}=this;d.near=1,d.far=1e4,d.relativeElevation=null,l.slot=RenderSlot/* RenderSlot */.N.DRAPED_MATERIAL,l.mainDepth=null,l.camera=d,l.oitPass=OITPass/* OITPass */.Y.NONE,l.updateLighting([new Lightsources/* AmbientLight */.$p((0,vec3f64/* ones */.S)())],0,0,Update_e.Immediate)}destroy(){this._renderers.forEach((e=>e.destroy())),this._renderers.clear(),this._passParameters.texture=(0,maybe/* disposeMaybe */.WD)(this._passParameters.texture),this.disposeOverlays()}get _bindParameters(){return this._renderContext.bind}get _rctx(){return this._stage.renderView.renderingContext}get _view(){return this.parent.view}get _stage(){return this.parent.view.stage}get spatialReference(){return this.parent.spatialReference}get _techniques(){return this._stage.renderView.techniques}get rctx(){return this._rctx}get materials(){return this._pluginContext.materials}get screenToWorldRatio(){return this._screenToWorldRatio}get localOriginFactory(){return this._localOriginFactory}get pluginContext(){return this._pluginContext}initializeRenderContext(e){const r=new GLMaterialRepository_a(this._view.stage.renderView.textures,this._techniques,(()=>{this.notifyChange("rendersOccludedDraped"),this.events.emit("content-changed"),this.notifyChange("updating"),this.notifyChange("isEmpty")}),(()=>this.events.emit("content-changed")));this._pluginContext={...e,materials:r},this._techniques.precompile(OverlayCompositingTechnique_s)}uninitializeRenderContext(){}acquireTechniques(){return[]}render(){}get updating(){return this._sortedDrapeSourceRenderersDirty||(0,MapUtils/* someMap */.Bs)(this._renderers,(e=>e.updating||e.canCompact))}get hasOverlays(){return null!=this._overlays&&null!=this._renderTargets}getMaterialRenderer(e){for(const r of this._renderers.values()){const t=r.getMaterialRenderer(e);if(t)return t}return null}get layers(){return this._sortedDrapeSourceRenderersDirty&&this._updateSortedDrapeSourceRenderers(),this._sortedRenderers.map((e=>e.drapeSource.layer)).filter((e=>!!e))}registerDrapeSource(e,r){const t=this._renderers.get(e);null!=t&&t.destroy(),this._renderers.set(e,r),this._sortedDrapeSourceRenderersDirty=!0,"fullOpacity"in e&&this.addHandles((0,reactiveUtils/* watch */.wB)((()=>e.fullOpacity),(()=>this.events.emit("content-changed"))),e)}removeDrapeSourceRenderer(e){if(null==e)return;const r=this._renderers.get(e);null!=r&&(this._sortedDrapeSourceRenderersDirty=!0,this._renderers.delete(e),this.removeHandles(e),r.destroy())}computeValidity(){return this._renderTargets?.computeValidity()??0}releaseRenderTargets(){this._renderTargets?.dispose()}get overlays(){return this._overlays??[]}ensureDrapeTargets(e){this._hasTargetWithoutRasterImage=!!this._overlays&&(0,SetUtils/* someSet */.bw)(e,(e=>e.drapeTargetType===interfaces/* DrapeTargetType */.sv.WithoutRasterImage))}ensureDrapeSources(e){this._overlays?(this._hasDrapedFeatureSource=(0,SetUtils/* someSet */.bw)(e,(e=>e.drapeSourceType===interfaces/* DrapeSourceType */.Om.Features)),this._hasDrapedRasterSource=(0,SetUtils/* someSet */.bw)(e,(e=>e.drapeSourceType===interfaces/* DrapeSourceType */.Om.RasterImage))):this._hasDrapedFeatureSource=this._hasDrapedRasterSource=!1}get _needsColorWithoutRasterImage(){return this._hasDrapedRasterSource&&this._hasDrapedFeatureSource&&this._hasTargetWithoutRasterImage}ensureOverlays(e,r,t=this._bindParameters.overlayStretch){null==this._overlays&&(this._renderTargets=new OverlayRenderTargets_i(this._stage.renderer.fboCache),this._overlays=[new Overlay_n,new Overlay_n]),this.ensureDrapeTargets(e),this.ensureDrapeSources(r),this._bindParameters.overlayStretch=t}disposeOverlays(){this._overlays=null,this._renderTargets=(0,maybe/* disposeMaybe */.WD)(this._renderTargets),this.events.emit("textures-disposed")}getTexture(e){return e===OverlayContent_o.ColorNoRasterImage&&!this._needsColorWithoutRasterImage&&this._hasDrapedFeatureSource?this._renderTargets?.getTexture(OverlayContent_o.Color):this._renderTargets?.getTexture(e)}get running(){return this.updating}runTask(e){this._processDrapeSources(e,(()=>!0))}_processDrapeSources(e,r){let s=!1;for(const[t,i]of this._renderers){if(e.done)break;(t.destroyed||r(t))&&(i.commitChanges()&&(s=!0,e.madeProgress()))}this._sortedDrapeSourceRenderersDirty&&(this._sortedDrapeSourceRenderersDirty=!1,s=!0,this._updateSortedDrapeSourceRenderers(),e.madeProgress()),this.compact(e),s&&(null!=this._overlays&&0===this._renderers.size&&this.disposeOverlays(),this.notifyChange("updating"),this.notifyChange("isEmpty"),this.events.emit("content-changed"),this.hasHighlights=(0,MapUtils/* someMap */.Bs)(this._renderers,(e=>e.hasHighlights)),this.notifyChange("rendersOccludedDraped"))}compact(e){let r=!1;for(const t of this._renderers.values()){if(e.done)break;r=t.compact(e)||r}return r&&this.notifyChange("updating"),r}hasHighlight(e){return (0,MapUtils/* someMap */.Bs)(this._renderers,(r=>r.hasHighlight(e)))}processSyncDrapeSources(){this._processDrapeSources(Scheduler/* noBudget */.Bb,(e=>e.updatePolicy===UpdatePolicy/* UpdatePolicy */.q.SYNC))}get isEmpty(){return!debugFlags/* debugFlags */.b.OVERLAY_DRAW_DEBUG_TEXTURE&&!(0,MapUtils/* someMap */.Bs)(this._renderers,(e=>!e.isEmpty))}get hasWater(){const e=(0,MapUtils/* someMap */.Bs)(this._renderers,(({hasWater:e})=>e));return e!==this._hasWater&&(this._hasWater=e,this.events.emit("has-water")),this._hasWater}get rendersOccludedDraped(){const e=this._renderContext.renderOccludedMask;this._renderContext.renderOccludedMask=se,++this._techniques.precompiling;const r=this._sortedRenderers.some((({renderer:e})=>e.precompile(this._renderContext)));return--this._techniques.precompiling,this._renderContext.renderOccludedMask=e,r}renders(e){if(debugFlags/* debugFlags */.b.OVERLAY_DRAW_DEBUG_TEXTURE&&e!==OverlayContent_o.Occluded&&e!==OverlayContent_o.Highlight)return!0;if(!this._overlays)return!1;const r=this._overlays[terrain_interfaces/* OverlayIndex */.vr.INNER];for(const i of this._overlays)i.setupGeometryViews(this.longitudeCyclical);if(!r.hasSomeSizedView())return!1;const t=this._renderContext.output;this._renderContext.output=this._renderTargets?.targets.find((r=>r.content===e))?.output??ShaderOutput/* ShaderOutput */.V.Color,++this._techniques.precompiling;const s=this._sortedRenderers.some((({renderer:e})=>e.precompile(this._renderContext)));return--this._techniques.precompiling,this._renderContext.output=t,s}get mode(){return this.isEmpty?h.Disabled:this.hasWater&&this.renders(OverlayContent_o.WaterNormal)?h.EnabledWithWater:this._renderTargets?.getTexture(OverlayContent_o.Color)?h.Enabled:h.Disabled}updateAnimation(e){let r=!1;return this._renderers.forEach((t=>r=t.updateAnimation(e)||r)),r&&this.parent.requestRender(basicInterfaces/* RenderRequestType */.C7.BACKGROUND),r}updateDrapeSourceOrder(){this._sortedDrapeSourceRenderersDirty=!0}precompileShaders(e){if(!this._overlays||!this._renderTargets)return;const r=this._bindParameters;r.alignPixelEnabled=e.alignPixelEnabled,++this._techniques.precompiling;for(const t of this._renderTargets.targets){if(t.content===OverlayContent_o.ColorNoRasterImage&&!this._needsColorWithoutRasterImage)continue;const e=t.output;this._renderContext.output=e,r.slot=e===ShaderOutput/* ShaderOutput */.V.Normal?RenderSlot/* RenderSlot */.N.DRAPED_WATER:RenderSlot/* RenderSlot */.N.DRAPED_MATERIAL,e===ShaderOutput/* ShaderOutput */.V.Highlight&&(r.highlightMixTexture=r.highlights.length>1?this._rctx.emptyTexture:null),t.content===OverlayContent_o.Occluded&&(this._renderContext.renderOccludedMask=se),this._sortedRenderers.forAll((({drapeSource:e,renderer:r})=>{t.content===OverlayContent_o.ColorNoRasterImage&&e.drapeSourceType===interfaces/* DrapeSourceType */.Om.RasterImage||r.precompile(this._renderContext)})),this._renderContext.renderOccludedMask=RenderContext_n,r.highlightMixTexture=null}--this._techniques.precompiling}drawOverlays(e){if(this._overlays&&this._renderTargets){for(const e of this._overlays)e.setupGeometryViews(this.longitudeCyclical);this._bindParameters.alignPixelEnabled=e.alignPixelEnabled;for(const e of this._renderTargets.targets){if(e.content===OverlayContent_o.ColorNoRasterImage&&!this._needsColorWithoutRasterImage)continue;const r=this._drawTarget(terrain_interfaces/* OverlayIndex */.vr.INNER,e),t=this._drawTarget(terrain_interfaces/* OverlayIndex */.vr.OUTER,e);(r||t)&&e.fbo.generateMipMap()}}}_drawTarget(e,r){const t=this._overlays[e],s=t.canvasGeometries;if(0===s.numViews)return!1;const i=this._view.state.contentPixelRatio;this._screenToWorldRatio=i*t.mapUnitsPerPixel/this._bindParameters.overlayStretch;const{output:n}=r;if(this.isEmpty||n===ShaderOutput/* ShaderOutput */.V.Normal&&!this.hasWater||!t.hasSomeSizedView())return!1;const{_rctx:o,_camera:a,_renderContext:h,_bindParameters:l}=this;if(a.pixelRatio=t.pixelRatio*i,h.output=n,l.screenToWorldRatio=this._screenToWorldRatio,l.screenToPCSRatio=this._screenToWorldRatio*this.parent.worldToPCSRatio,l.slot=n===ShaderOutput/* ShaderOutput */.V.Normal?RenderSlot/* RenderSlot */.N.DRAPED_WATER:RenderSlot/* RenderSlot */.N.DRAPED_MATERIAL,r.content===OverlayContent_o.Occluded&&(h.renderOccludedMask=se),!this.renders(r.content))return h.renderOccludedMask=RenderContext_n,!1;const{resolution:d}=t,c=e===terrain_interfaces/* OverlayIndex */.vr.INNER,u=c?0:d;if(o.setViewport(u,0,d,d),this._bindTargetFBO(r),c)if(r.output!==ShaderOutput/* ShaderOutput */.V.Highlight)o.setClearColor(0,0,0,0),o.clear(enums/* FramebufferBit */.NV.COLOR);else{const{gl:e}=o;e.clearBufferuiv(e.COLOR,0,[0,0,0,0])}if(debugFlags/* debugFlags */.b.OVERLAY_DRAW_DEBUG_TEXTURE&&r.content!==OverlayContent_o.Occluded&&r.content!==OverlayContent_o.Highlight){this._techniques.precompile(TextureTechnique_t,ie);const r=this._techniques.get(TextureTechnique_t,ie);for(let i=0;i<s.numViews;i++)this._setViewParameters(s.extents[i],t),this._ensureDebugPatternResources(t.resolution,re[e]),o.bindTechnique(r,l,this._passParameters),o.screen.draw()}if(r.output===ShaderOutput/* ShaderOutput */.V.Highlight){const{fboCache:t}=this._stage.renderer,s=this._resolution;this._bindTargetFBO(r),Highlight_M(o,t,{width:s,height:s},l,(()=>this._renderAllGeometry(e,r)),u)}else this._renderAllGeometry(e,r);return o.bindFramebuffer(null),h.renderOccludedMask=RenderContext_n,!0}_renderAllGeometry(e,r){const t=this._overlays[e],s=t.canvasGeometries;this._sortedRenderers.forAll((({drapeSource:i,renderer:n})=>{if(r.content===OverlayContent_o.ColorNoRasterImage&&i.drapeSourceType===interfaces/* DrapeSourceType */.Om.RasterImage)return;const{fullOpacity:o}=i,a=null!=o&&o<1&&r.output===ShaderOutput/* ShaderOutput */.V.Color&&this._bindTemporaryFBO();for(let e=0;e<s.numViews;e++)this._setViewParameters(s.extents[e],t),n.render(this._renderContext);if(a){this._bindTargetFBO(r),this._overlayParameters.texture=a.getTexture(),this._overlayParameters.opacity=o,this._overlayParameters.overlayIndex=e;const t=this._techniques.get(OverlayCompositingTechnique_s);this._rctx.bindTechnique(t,this._bindParameters,this._overlayParameters),this._rctx.screen.draw(),a.release()}}))}_bindTargetFBO(e){const r=this._resolution,t=2*r;e.fbo.bind(this._rctx,t,r)}_bindTemporaryFBO(){const e=this._resolution,r=2*e,t=this._stage.renderer.fboCache,s=t.acquire(r,e,"overlay tmp");return t.rctx.bindFramebuffer(s.fbo),t.rctx.clear(enums/* FramebufferBit */.NV.COLOR),s}get _resolution(){return this._overlays?.[terrain_interfaces/* OverlayIndex */.vr.INNER].resolution??0}notifyContentChanged(){this.events.emit("content-changed")}intersect(e,r,t,s){this._sortedDrapeSourceRenderersDirty&&this._updateSortedDrapeSourceRenderers();let i=0;for(const{renderer:n}of this._sortedRenderers)i=n.intersect?.(e,r,t,s,i)??i}_updateSortedDrapeSourceRenderers(){if(this._sortedRenderers.clear(),0===this._renderers.size)return;const e=this._view.map.allLayers,r=e.length;this._renderers.forEach(((t,s)=>{const i=e.indexOf(s.layer),n=i>=0,o=s.renderGroup??(n?interfaces/* DrapedRenderGroup */.O7.MapLayer:interfaces/* DrapedRenderGroup */.O7.ViewLayer),a=s.drapeSourcePriorityOffset??0,h=r*o+(n?i:0)+a;this._sortedRenderers.push(new ee(s,t,h))})),this._sortedRenderers.sort(((e,r)=>e.index-r.index))}_setViewParameters(e,r){const t=this._camera;t.viewport=[0,0,r.resolution,r.resolution],(0,mat4/* ortho */.v3)(t.projectionMatrix,0,e[2]-e[0],0,e[3]-e[1],t.near,t.far),(0,mat4/* fromTranslation */.kN)(t.viewMatrix,[-e[0],-e[1],0])}_ensureDebugPatternResources(e,r){if((0,vec32.i)(this._passParameters.color,r[0],r[1],r[2]),this._passParameters.texture)return;const t=new Uint8Array(e*e*4);let s=0;for(let n=0;n<e;n++)for(let r=0;r<e;r++){const i=Math.floor(r/10),o=Math.floor(n/10);i<2||o<2||10*i>e-20||10*o>e-20?(t[s++]=255,t[s++]=255,t[s++]=255,t[s++]=255):(t[s++]=255,t[s++]=255,t[s++]=255,t[s++]=1&i&&1&o?1&r^1&n?0:255:1&i^1&o?0:128)}const i=new TextureDescriptor/* TextureDescriptor */.R(e);i.samplingMode=enums/* TextureSamplingMode */.Cj.NEAREST,this._passParameters.texture=new Texture/* Texture */.g(this._rctx,i,t)}get test(){}};(0,tslib_es6._)([(0,property/* property */.MZ)()],OverlayRenderer_$.prototype,"hasHighlights",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],OverlayRenderer_$.prototype,"_sortedDrapeSourceRenderersDirty",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],OverlayRenderer_$.prototype,"parent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],OverlayRenderer_$.prototype,"_techniques",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,readOnly:!0})],OverlayRenderer_$.prototype,"updating",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],OverlayRenderer_$.prototype,"isEmpty",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],OverlayRenderer_$.prototype,"rendersOccludedDraped",null),OverlayRenderer_$=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.3d.terrain.OverlayRenderer")],OverlayRenderer_$);class ee{constructor(e,r,t){this.drapeSource=e,this.renderer=r,this.index=t}}const re=[[1,.5,.5],[.5,.5,1]],te=-2,se=Material/* RenderOccludedFlag */.m$.OccludeAndTransparent,ie=new TextureTechniqueConfiguration_r;ie.hasAlpha=!0;


/***/ }),

/***/ 36572:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   vr: () => (/* binding */ E)
/* harmony export */ });
/* unused harmony exports PatchType, TextureUpdate */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var E,A,O;!function(E){E[E.INNER=0]="INNER",E[E.OUTER=1]="OUTER"}(E||(E={})),function(E){E[E.REGULAR=0]="REGULAR",E[E.HAS_NORTH_POLE=1]="HAS_NORTH_POLE",E[E.HAS_SOUTH_POLE=2]="HAS_SOUTH_POLE",E[E.HAS_BOTH_POLES=3]="HAS_BOTH_POLES"}(A||(A={})),function(E){E[E.FADING=0]="FADING",E[E.IMMEDIATE=1]="IMMEDIATE",E[E.UNFADED=2]="UNFADED"}(O||(O={}));


/***/ }),

/***/ 4388:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Q: () => (/* binding */ s)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/math/vec2.js
var vec2 = __webpack_require__(60704);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec2f64.js
var vec2f64 = __webpack_require__(59646);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/glsl.js
var glsl = __webpack_require__(72196);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/BindType.js
var BindType = __webpack_require__(11809);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/Uniform.js
var Uniform = __webpack_require__(99120);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Integer2PassUniform.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class e extends Uniform/* Uniform */.n{constructor(s,e){super(s,"ivec2",BindType/* BindType */.c.Pass,((r,o,i)=>r.setUniform2iv(s,e(o,i))))}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/IntegerPassUniform.js
var IntegerPassUniform = __webpack_require__(3445);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DUintPassUniform.js
var Texture2DUintPassUniform = __webpack_require__(7568);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/HighlightDownsample.glsl.js
var HighlightDownsample_glsl = __webpack_require__(61068);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/HighlightCellGridScreenSpacePass.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function s(l){const{vertex:s}=l;s.uniforms.add(new Texture2DUintPassUniform/* Texture2DUintPassUniform */.R("coverageTexture",(e=>e.coverageTexture)),new e("highlightRenderCellCount",(l=>(0,vec2/* set */.hZ)(r,l.horizontalCellCount,l.verticalCellCount))),new e("highlightTextureResolution",(({highlightTexture:l})=>(0,vec2/* set */.hZ)(r,l.descriptor.width,l.descriptor.height))),new IntegerPassUniform/* IntegerPassUniform */.c("highlightLevel",(e=>e.highlightLevel))).constants.add("cellSize","int",HighlightDownsample_glsl.g),l.varyings.add("sUV","vec2"),l.varyings.add("vOutlinePossible","float"),s.code.add((0,glsl/* glsl */.H)`const ivec2 cellVertices[4] = ivec2[4](ivec2(0,0), ivec2(1,0), ivec2(0,1), ivec2(1,1));`),s.main.add((0,glsl/* glsl */.H)`int cellIndex = gl_InstanceID;
int cellX = cellIndex % highlightRenderCellCount[0];
int cellY = (cellIndex - cellX) / highlightRenderCellCount[0];
ivec2 cellPos = ivec2(cellX, cellY);
uvec2 covTexel = texelFetch(coverageTexture, cellPos, 0).rg;
int channelIndex = (highlightLevel >> 2) & 3;
uint channelValue = covTexel[channelIndex];
int highlightIndex = (highlightLevel & 3) << 1;
bool covered = ((channelValue >> highlightIndex) & 1u) == 1u;
if (!covered) {
gl_Position = vec4(0.0);
return;
}
vOutlinePossible = (((channelValue >> highlightIndex) & 2u) == 2u) ? 1.0 : 0.0;
ivec2 iPosInCell = cellVertices[gl_VertexID];
vec2 sPos = vec2(cellPos * cellSize + iPosInCell * (cellSize));
vec2 vPos = sPos / vec2(highlightTextureResolution);
sUV = vPos;
gl_Position = vec4(2.0 * vPos - vec2(1.0), 0.0, 1.0);`)}const r=(0,vec2f64/* create */.vt)();


/***/ }),

/***/ 10204:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ f),
/* harmony export */   W: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59646);
/* harmony import */ var _shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54473);
/* harmony import */ var _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60840);
/* harmony import */ var _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1411);
/* harmony import */ var _shaderModules_Float4sPassUniform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54706);
/* harmony import */ var _shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35449);
/* harmony import */ var _shaderModules_FloatsPassUniform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45160);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72196);
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50645);
/* harmony import */ var _materials_VisualVariablePassParameters_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17745);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const n=8;function f(e,c){const{attributes:f,vertex:d}=e;f.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_8__/* .VertexAttribute */ .r.POSITION,"vec3"),f.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_8__/* .VertexAttribute */ .r.PROFILEVERTEXANDNORMAL,"vec4"),f.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_8__/* .VertexAttribute */ .r.PROFILEAUXDATA,"vec3"),f.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_8__/* .VertexAttribute */ .r.PROFILERIGHT,"vec2"),f.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_8__/* .VertexAttribute */ .r.PROFILEUP,"vec2"),d.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_7__/* .glsl */ .H)`bool isCapVertex() {
return profileAuxData.z == 1.0;
}`),d.uniforms.add(new _shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_1__/* .Float2PassUniform */ .G("size",(e=>e.size)));const{vvSize:u,vvColor:m,vvOpacity:x}=c;u?(f.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_8__/* .VertexAttribute */ .r.SIZEFEATUREATTRIBUTE,"float"),d.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_2__/* .Float3PassUniform */ .t("vvSizeMinSize",(e=>e.vvSize.minSize)),new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_2__/* .Float3PassUniform */ .t("vvSizeMaxSize",(e=>e.vvSize.maxSize)),new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_2__/* .Float3PassUniform */ .t("vvSizeOffset",(e=>e.vvSize.offset)),new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_2__/* .Float3PassUniform */ .t("vvSizeFactor",(e=>e.vvSize.factor)),new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_2__/* .Float3PassUniform */ .t("vvSizeFallback",(e=>e.vvSize.fallback))),d.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_7__/* .glsl */ .H)`vec2 getSize() {
float value = sizeFeatureAttribute;
if (isnan(value)) {
return vvSizeFallback.xz;
}
return size * clamp(vvSizeOffset + value * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).xz;
}`)):d.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_7__/* .glsl */ .H)`vec2 getSize(){
return size;
}`),x?(f.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_8__/* .VertexAttribute */ .r.OPACITYFEATUREATTRIBUTE,"float"),d.constants.add("vvOpacityNumber","int",n),d.uniforms.add(new _shaderModules_FloatsPassUniform_js__WEBPACK_IMPORTED_MODULE_6__/* .FloatsPassUniform */ .x("vvOpacityValues",(e=>e.vvOpacity.values),n),new _shaderModules_FloatsPassUniform_js__WEBPACK_IMPORTED_MODULE_6__/* .FloatsPassUniform */ .x("vvOpacityOpacities",(e=>e.vvOpacity.opacityValues),n),new _shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_5__/* .FloatPassUniform */ .m("vvOpacityFallback",(e=>e.vvOpacity.fallback))),d.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_7__/* .glsl */ .H)`vec4 applyOpacity(vec4 color) {
float value = opacityFeatureAttribute;
if (isnan(value)) {
return vec4(color.rgb, vvOpacityFallback);
}
if (value <= vvOpacityValues[0]) {
return vec4( color.xyz, vvOpacityOpacities[0]);
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return vec4( color.xyz, mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f));
}
}
return vec4( color.xyz, vvOpacityOpacities[vvOpacityNumber - 1]);
}`)):d.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_7__/* .glsl */ .H)`vec4 applyOpacity(vec4 color){
return color;
}`),m?(f.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_8__/* .VertexAttribute */ .r.COLORFEATUREATTRIBUTE,"float"),d.constants.add("vvColorNumber","int",_materials_VisualVariablePassParameters_js__WEBPACK_IMPORTED_MODULE_9__/* .vvColorNumber */ .p),d.uniforms.add(new _shaderModules_FloatsPassUniform_js__WEBPACK_IMPORTED_MODULE_6__/* .FloatsPassUniform */ .x("vvColorValues",(e=>e.vvColor.values),_materials_VisualVariablePassParameters_js__WEBPACK_IMPORTED_MODULE_9__/* .vvColorNumber */ .p),new _shaderModules_Float4sPassUniform_js__WEBPACK_IMPORTED_MODULE_4__/* .Float4sPassUniform */ .F("vvColorColors",(e=>e.vvColor.colors),_materials_VisualVariablePassParameters_js__WEBPACK_IMPORTED_MODULE_9__/* .vvColorNumber */ .p),new _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_3__/* .Float4PassUniform */ .E("vvColorFallback",(e=>e.vvColor.fallback))),d.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_7__/* .glsl */ .H)`vec4 getColor() {
float value = colorFeatureAttribute;
if (isnan(value)) {
return applyOpacity(vvColorFallback);
}
if (value <= vvColorValues[0]) {
return applyOpacity(vvColorColors[0]);
}
for (int i = 1; i < vvColorNumber; ++i) {
if (vvColorValues[i] >= value) {
float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
return applyOpacity(mix(vvColorColors[i-1], vvColorColors[i], f));
}
}
return applyOpacity(vvColorColors[vvColorNumber - 1]);
}`)):d.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_7__/* .glsl */ .H)`vec4 getColor(){
return applyOpacity(vec4(1, 1, 1, 1));
}`),d.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_7__/* .glsl */ .H)`vec3 decompressAxis(vec2 axis) {
float z = 1.0 - abs(axis.x) - abs(axis.y);
return normalize(vec3(axis + sign(axis) * min(z, 0.0), z));
}
vec3 calculateVPos() {
vec2 size = getSize();
vec3 origin = position;
vec3 right = decompressAxis(profileRight);
vec3 up = decompressAxis(profileUp);
vec2 profileVertex = profileVertexAndNormal.xy * size;`),d.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_7__/* .glsl */ .H)`if(isCapVertex()) {
float positionOffsetAlongProfilePlaneNormal = profileAuxData.x * size[0];
vec3 forward = cross(up, right);
vec3 offset = right * profileVertex.x + up * profileVertex.y + forward * positionOffsetAlongProfilePlaneNormal;
return origin + offset;
}
vec2 rotationRight = vec2(profileAuxData.x, profileAuxData.y);
float maxDistance = length(rotationRight);`),d.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_7__/* .glsl */ .H)`rotationRight = maxDistance > 0.0 ? normalize(rotationRight) : vec2(0, 0);
float rx = dot(profileVertex, rotationRight);
if (abs(rx) > maxDistance) {
vec2 rotationUp = vec2(-rotationRight.y, rotationRight.x);
float ry = dot(profileVertex, rotationUp);
profileVertex = rotationRight * maxDistance * sign(rx) + rotationUp * ry;
}
vec3 offset = right * profileVertex.x + up * profileVertex.y;
return origin + offset;
}`),d.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_7__/* .glsl */ .H)`vec3 localNormal() {
vec3 right = decompressAxis(profileRight);
vec3 up = decompressAxis(profileUp);
vec3 normal = right * profileVertexAndNormal.z + up * profileVertexAndNormal.w;
if(isCapVertex()) {
vec3 forward = cross(up, right);
normal += forward * profileAuxData.y;
}
return normal;
}`)}class d extends _materials_VisualVariablePassParameters_js__WEBPACK_IMPORTED_MODULE_9__/* .VisualVariablePassParameters */ .S{constructor(){super(...arguments),this.size=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_0__/* .fromValues */ .fA)(1,1)}}


/***/ }),

/***/ 36985:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _AlignPixel_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16917);
/* harmony import */ var _shading_TerrainDepthTest_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23233);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72196);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function i(i,t){const{vertex:s,fragment:p}=i;i.include(_shading_TerrainDepthTest_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .terrainDepthTest */ .Z,t),s.include(_AlignPixel_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .AlignPixel */ .K),s.main.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H)`vec4 posProjCenter;
if (dot(position, position) > 0.0) {
ProjectHUDAux projectAux;
vec4 posProj = projectPositionHUD(projectAux);
posProjCenter = alignToPixelCenter(posProj, viewport.zw);
forwardViewPosDepth(projectAux.posView);
vec3 vpos = projectAux.posModel;
if (rejectBySlice(vpos)) {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
} else {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
gl_Position = posProjCenter;
gl_PointSize = 1.0;`),p.main.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H)`fragColor = vec4(1);
if(discardByTerrainDepth()) {
fragColor.g = 0.5;
}`)}


/***/ }),

/***/ 79870:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ n),
/* harmony export */   z: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72196);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function t(t){t.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H)`float normals2FoamIntensity(vec3 n, float waveStrength){
float normalizationFactor =  max(0.015, waveStrength);
return max((n.x + n.y)*0.3303545/normalizationFactor + 0.3303545, 0.0);
}`)}function n(t){t.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H)`vec3 foamIntensity2FoamColor(float foamIntensityExternal, float foamPixelIntensity, vec3 skyZenitColor, float dayMod){
return foamIntensityExternal * (0.075 * skyZenitColor * pow(foamPixelIntensity, 4.) +  50.* pow(foamPixelIntensity, 23.0)) * dayMod;
}`)}


/***/ }),

/***/ 22455:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72196);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function r(r,c){c.spherical?r.vertex.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H)`vec3 getLocalUp(in vec3 pos, in vec3 origin) {
return normalize(pos + origin);
}`):r.vertex.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H)`vec3 getLocalUp(in vec3 pos, in vec3 origin) {
return vec3(0.0, 0.0, 1.0);
}`),c.spherical?r.vertex.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H)`mat3 getTBNMatrix(in vec3 n) {
vec3 t = normalize(cross(vec3(0.0, 0.0, 1.0), n));
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`):r.vertex.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H)`mat3 getTBNMatrix(in vec3 n) {
vec3 t = vec3(1.0, 0.0, 0.0);
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`)}


/***/ }),

/***/ 548:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* binding */ m)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/FoamRendering.glsl.js
var FoamRendering_glsl = __webpack_require__(79870);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/colorUtils.js
var colorUtils = __webpack_require__(31415);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/glsl.js
var glsl = __webpack_require__(72196);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/Gamma.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(e){e.code.add((0,glsl/* glsl */.H)`
    const float GAMMA = ${glsl/* glsl */.H.float(colorUtils/* colorGamma */.Tf)};
    const float INV_GAMMA = ${glsl/* glsl */.H.float(1/colorUtils/* colorGamma */.Tf)};

    vec4 delinearizeGamma(vec4 color) {
      return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.a);
    }

    vec3 linearizeGamma(vec3 color) {
      return pow(color, vec3(GAMMA));
    }
  `)}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js + 1 modules
var PhysicallyBasedRendering_glsl = __webpack_require__(17666);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ScreenSpaceConstants.js
var ScreenSpaceConstants = __webpack_require__(23606);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/ReadDepth.glsl.js
var ReadDepth_glsl = __webpack_require__(65743);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float2BindUniform.js
var Float2BindUniform = __webpack_require__(74767);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatBindUniform.js
var FloatBindUniform = __webpack_require__(17983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4BindUniform.js
var Matrix4BindUniform = __webpack_require__(82088);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DBindUniform.js
var Texture2DBindUniform = __webpack_require__(96390);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ScreenSpaceReflections.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function d(d,n){if(!n.screenSpaceReflections)return;const c=d.fragment;c.include(ReadDepth_glsl/* ReadDepth */.E),c.uniforms.add(new Float2BindUniform/* Float2BindUniform */.E("nearFar",(e=>e.camera.nearFar)),new Texture2DBindUniform/* Texture2DBindUniform */.x("depthMap",(e=>e.depth?.attachment)),new Matrix4BindUniform/* Matrix4BindUniform */.F("proj",(e=>e.camera.projectionMatrix)),new FloatBindUniform/* FloatBindUniform */.U("invResolutionHeight",(e=>1/e.camera.height)),new Matrix4BindUniform/* Matrix4BindUniform */.F("reprojectionMatrix",(e=>e.ssr.reprojectionMatrix))).code.add((0,glsl/* glsl */.H)`
  vec2 reprojectionCoordinate(vec3 projectionCoordinate)
  {
    vec4 zw = proj * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
    vec4 reprojectedCoord = reprojectionMatrix * vec4(zw.w * (projectionCoordinate.xy * 2.0 - 1.0), zw.z, zw.w);
    reprojectedCoord.xy /= reprojectedCoord.w;
    return reprojectedCoord.xy * 0.5 + 0.5;
  }

  const int maxSteps = ${n.highStepCount?"150":"75"};

  vec4 applyProjectionMat(mat4 projectionMat, vec3 x)
  {
    vec4 projectedCoord =  projectionMat * vec4(x, 1.0);
    projectedCoord.xy /= projectedCoord.w;
    projectedCoord.xy = projectedCoord.xy*0.5 + 0.5;
    return projectedCoord;
  }

  vec3 screenSpaceIntersection(vec3 dir, vec3 startPosition, vec3 viewDir, vec3 normal)
  {
    vec3 viewPos = startPosition;
    vec3 viewPosEnd = startPosition;

    // Project the start position to the screen
    vec4 projectedCoordStart = applyProjectionMat(proj, viewPos);
    vec3  Q0 = viewPos / projectedCoordStart.w; // homogeneous camera space
    float k0 = 1.0/ projectedCoordStart.w;

    // advance the position in the direction of the reflection
    viewPos += dir;

    vec4 projectedCoordVanishingPoint = applyProjectionMat(proj, dir);

    // Project the advanced position to the screen
    vec4 projectedCoordEnd = applyProjectionMat(proj, viewPos);
    vec3  Q1 = viewPos / projectedCoordEnd.w; // homogeneous camera space
    float k1 = 1.0/ projectedCoordEnd.w;

    // calculate the reflection direction in the screen space
    vec2 projectedCoordDir = (projectedCoordEnd.xy - projectedCoordStart.xy);
    vec2 projectedCoordDistVanishingPoint = (projectedCoordVanishingPoint.xy - projectedCoordStart.xy);

    float yMod = min(abs(projectedCoordDistVanishingPoint.y), 1.0);

    float projectedCoordDirLength = length(projectedCoordDir);
    float maxSt = float(maxSteps);

    // normalize the projection direction depending on maximum steps
    // this determines how blocky the reflection looks
    vec2 dP = yMod * (projectedCoordDir)/(maxSt * projectedCoordDirLength);

    // Normalize the homogeneous camera space coordinates
    vec3  dQ = yMod * (Q1 - Q0)/(maxSt * projectedCoordDirLength);
    float dk = yMod * (k1 - k0)/(maxSt * projectedCoordDirLength);

    // initialize the variables for ray marching
    vec2 P = projectedCoordStart.xy;
    vec3 Q = Q0;
    float k = k0;
    float rayStartZ = -startPosition.z; // estimated ray start depth value
    float rayEndZ = -startPosition.z;   // estimated ray end depth value
    float prevEstimateZ = -startPosition.z;
    float rayDiffZ = 0.0;
    float dDepth;
    float depth;
    float rayDiffZOld = 0.0;

    // early outs
    if (dot(normal, dir) < 0.0 || dot(-viewDir, normal) < 0.0)
      return vec3(P, 0.0);
    float dDepthBefore = 0.0;

    for(int i = 0; i < maxSteps-1; i++)
    {
      depth = -linearDepthFromTexture(depthMap, P); // get linear depth from the depth buffer

      // estimate depth of the marching ray
      rayStartZ = prevEstimateZ;
      dDepth = -rayStartZ - depth;
      rayEndZ = (dQ.z * 0.5 + Q.z)/ ((dk * 0.5 + k));
      rayDiffZ = rayEndZ- rayStartZ;
      prevEstimateZ = rayEndZ;

      if(-rayEndZ > nearFar[1] || -rayEndZ < nearFar[0] || P.y < 0.0  || P.y > 1.0 )
      {
        return vec3(P, 0.);
      }

      // If we detect a hit - return the intersection point, two conditions:
      //  - dDepth > 0.0 - sampled point depth is in front of estimated depth
      //  - if difference between dDepth and rayDiffZOld is not too large
      //  - if difference between dDepth and 0.025/abs(k) is not too large
      //  - if the sampled depth is not behind far plane or in front of near plane

      if((dDepth) < 0.025/abs(k) + abs(rayDiffZ) && dDepth > 0.0 && depth > nearFar[0] && depth < nearFar[1] && abs(P.y - projectedCoordStart.y) > invResolutionHeight)
      {
        float weight = dDepth / (dDepth - dDepthBefore);
        vec2 Pf = mix(P - dP, P, 1.0 - weight);
        if (abs(Pf.y - projectedCoordStart.y) > invResolutionHeight) {
          return vec3(Pf, depth);
        }
        else {
          return vec3(P, depth);
        }
      }

      // continue with ray marching
      P = clamp(P + dP, vec2(0.0), vec2(0.999));
      Q.z += dQ.z;
      k += dk;
      rayDiffZOld = rayDiffZ;
      dDepthBefore = dDepth;
    }
    return vec3(P, 0.0);
  }
  `)}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(58359);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/Ellipsoid.js
var Ellipsoid = __webpack_require__(99817);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/environment/Clouds.js
var Clouds = __webpack_require__(5842);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/environment/CloudsParameters.js
var CloudsParameters = __webpack_require__(58718);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/environment/weather.js + 5 modules
var weather = __webpack_require__(84323);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl.js
var MainLighting_glsl = __webpack_require__(696);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/LookupCloudsFromTextureArray.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function LookupCloudsFromTextureArray_glsl_e(e){e.fragment.uniforms.add(new FloatBindUniform/* FloatBindUniform */.U("cloudAbsorption",(r=>r.clouds.absorption)),new FloatBindUniform/* FloatBindUniform */.U("cloudCoverage",(r=>r.clouds.coverage))).code.add((0,glsl/* glsl */.H)`vec4 lookupCloudsFromTextureArray(sampler2DArray cubeMap, vec3 rayDir) {
int faceIndex;
vec2 uv;
if(rayDir.z <= 0.0) {
float hazeFactor = smoothstep(-0.01, mix(0.0, 0.075, cloudCoverage), abs(dot(rayDir, vec3(0, 0, 1))));
float shading = clamp(1.0 - cloudAbsorption, 0.6, 1.0) * (1.0 - hazeFactor);
float totalTransmittance = hazeFactor;
return vec4(shading, totalTransmittance, shading, totalTransmittance);
}
if (abs(rayDir.x) >= abs(rayDir.y) && abs(rayDir.x) >= abs(rayDir.z)) {
if(rayDir.x > 0.0) {
faceIndex = 0;
uv = rayDir.yz / rayDir.x;
uv = vec2(-uv.x, uv.y);
} else {
faceIndex = 1;
uv = rayDir.yz / rayDir.x;
uv = vec2(-uv.x, -uv.y);
}
} else if (abs(rayDir.y) >= abs(rayDir.x) && abs(rayDir.y) >= abs(rayDir.z)) {
if(rayDir.y > 0.0) {
faceIndex = 2;
uv = rayDir.xz / rayDir.y;
} else {
faceIndex = 3;
uv = rayDir.xz / rayDir.y;
uv = vec2(uv.x, -uv.y);
}
} else {
if(rayDir.y < 0.0) {
faceIndex = 4;
uv = rayDir.xy / rayDir.z;
uv = vec2(uv.x, -uv.y);
} else {
faceIndex = 5;
uv = rayDir.xy / rayDir.z;
uv = vec2(uv.x, -uv.y);
}
}
uv = 0.5 * (uv + 1.0);
if(faceIndex != 5) {
uv.y = uv.y - 0.5;
}
uv.y = uv.y * 2.0;
vec4 s = texture(cubeMap, vec3(uv, float(faceIndex)));
return s;
}`)}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/BooleanBindUniform.js
var BooleanBindUniform = __webpack_require__(10561);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3BindUniform.js
var Float3BindUniform = __webpack_require__(81598);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/BindType.js
var BindType = __webpack_require__(11809);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/Uniform.js
var Uniform = __webpack_require__(99120);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DArrayBindUniform.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class o extends Uniform/* Uniform */.n{constructor(e,o){super(e,"sampler2DArray",BindType/* BindType */.c.Bind,((r,s)=>r.bindTexture(e,o(s))))}}

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/CloudsParallaxShading.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function C(t){const a=t.fragment;a.constants.add("radiusCloudsSquared","float",v).code.add((0,glsl/* glsl */.H)`vec3 intersectWithCloudLayer(vec3 dir, vec3 cameraPosition, vec3 spherePos) {
float B = 2.0 * dot(cameraPosition, dir);
float C = dot(cameraPosition, cameraPosition) - radiusCloudsSquared;
float det = B * B - 4.0 * C;
float pointIntDist = max(0.0, 0.5 *(-B + sqrt(det)));
return (cameraPosition + dir * pointIntDist) - spherePos;
}`),a.uniforms.add(new FloatBindUniform/* FloatBindUniform */.U("radiusCurvatureCorrection",(({clouds:o})=>o.parallax.radiusCurvatureCorrection))).code.add((0,glsl/* glsl */.H)`vec3 correctForPlanetCurvature(vec3 dir) {
dir.z = dir.z * (1.0 - radiusCurvatureCorrection) + radiusCurvatureCorrection;
return dir;
}`),a.code.add((0,glsl/* glsl */.H)`vec3 rotateDirectionToAnchorPoint(mat4 rotMat, vec3 inVec) {
return (rotMat * vec4(inVec, 0.0)).xyz;
}`),(0,MainLighting_glsl/* addMainLightDirection */.Gc)(a),(0,MainLighting_glsl/* addMainLightIntensity */.O4)(a);const C=(0,vec3f64/* fromValues */.fA)(.28,.175,.035);a.constants.add("RIM_COLOR","vec3",C);const f=.3,p=140,g=.2,w=10,P=.3;a.code.add((0,glsl/* glsl */.H)`
    vec3 calculateCloudColor(vec3 cameraPosition, vec3 worldSpaceRay, vec4 clouds) {
      float upDotLight = dot(cameraPosition, mainLightDirection);
      float dirDotLight = max(dot(worldSpaceRay, mainLightDirection), 0.0);
      float sunsetTransition = clamp(pow(max(upDotLight, 0.0), ${glsl/* glsl */.H.float(f)}), 0.0, 1.0);

      // Base color of the clouds that depends on lighting of the sun and sky
      vec3 ambientLight = calculateAmbientIrradiance(cameraPosition,  0.0);
      vec3 combinedLight = clamp((mainLightIntensity + ambientLight )/PI, vec3(0.0), vec3(1.0));
      vec3 baseCloudColor = pow(combinedLight * pow(clouds.xyz, vec3(GAMMA)), vec3(INV_GAMMA));

      // Rim light around the edge of the clouds simulating scattering of the direct lun light
      float scatteringMod = max(clouds.a < 0.5 ? clouds.a / 0.5 : - clouds.a / 0.5 + 2.0, 0.0);
      float rimLightIntensity = 0.5 + 0.5 * pow(max(upDotLight, 0.0), 0.35);
      vec3 directSunScattering = RIM_COLOR * rimLightIntensity * (pow(dirDotLight, ${glsl/* glsl */.H.float(p)})) * scatteringMod;

      // Brighten the clouds around the sun at the sunsets
      float additionalLight = ${glsl/* glsl */.H.float(g)} * pow(dirDotLight, ${glsl/* glsl */.H.float(w)}) * (1. - pow(sunsetTransition, ${glsl/* glsl */.H.float(P)})) ;

      return vec3(baseCloudColor * (1.0 + additionalLight) + directSunScattering);
    }
  `),t.include(LookupCloudsFromTextureArray_glsl_e),a.uniforms.add(new BooleanBindUniform/* BooleanBindUniform */.o("readChannelsRG",(o=>o.clouds.readChannels===Clouds/* CloudsTextureChannels */.c.RG)),new o("cubeMap",(o=>o.clouds.data?.cubeMap?.colorTexture))).code.add((0,glsl/* glsl */.H)`vec4 sampleCloud(vec3 rayDir, bool readOtherChannel) {
vec4 s = lookupCloudsFromTextureArray(cubeMap, rayDir);
bool readRG = readChannelsRG ^^ readOtherChannel;
s = readRG ? vec4(vec3(s.r), s.g) : vec4(vec3(s.b), s.a);
return length(s) == 0.0 ? vec4(s.rgb, 1.0) : s;
}`),a.uniforms.add(new Float3BindUniform/* Float3BindUniform */.d("anchorPoint",(o=>o.clouds.parallax.anchorPoint)),new Float3BindUniform/* Float3BindUniform */.d("anchorPointNew",(o=>o.clouds.parallaxNew.anchorPoint)),new Matrix4BindUniform/* Matrix4BindUniform */.F("rotationClouds",(o=>o.clouds.parallax.transform)),new Matrix4BindUniform/* Matrix4BindUniform */.F("rotationCloudsNew",(o=>o.clouds.parallaxNew.transform)),new FloatBindUniform/* FloatBindUniform */.U("cloudsOpacity",(o=>o.clouds.opacity)),new FloatBindUniform/* FloatBindUniform */.U("fadeFactor",(o=>o.clouds.fadeFactor)),new BooleanBindUniform/* BooleanBindUniform */.o("crossFade",(o=>o.clouds.fadeState===CloudsParameters/* FadeState */.c.CROSS_FADE))).code.add((0,glsl/* glsl */.H)`vec4 renderClouds(vec3 worldRay, vec3 cameraPosition) {
vec3 intersectionPoint = intersectWithCloudLayer(worldRay, cameraPosition, anchorPoint);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = sampleCloud(worldRayRotatedCorrected, crossFade);
vec3 cameraPositionN = normalize(cameraPosition);
vec4 cloudColor = vec4(calculateCloudColor(cameraPositionN, worldRay, cloudData), cloudData.a);
if(crossFade) {
intersectionPoint = intersectWithCloudLayer(worldRay, cameraPosition, anchorPointNew);
worldRayRotated = rotateDirectionToAnchorPoint(rotationCloudsNew, normalize(intersectionPoint));
worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
cloudData = sampleCloud(worldRayRotatedCorrected, false);
vec4 cloudColorNew = vec4(calculateCloudColor(cameraPositionN, worldRay, cloudData), cloudData.a);
cloudColor = mix(cloudColor, cloudColorNew, fadeFactor);
}
float totalTransmittance = length(cloudColor.rgb) == 0.0 ?
1.0 :
clamp(cloudColor.a * cloudsOpacity + (1.0 - cloudsOpacity), 0.0 , 1.0);
return vec4(cloudColor.rgb, totalTransmittance);
}`)}const v=(Ellipsoid/* earth */.$O.radius+weather/* cloudsHeight */.k9)**2;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/ToneMapping.glsl.js
var ToneMapping_glsl = __webpack_require__(85856);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/Water.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function m(m,v){const u=m.fragment;u.include(PhysicallyBasedRendering_glsl/* PhysicallyBasedRenderingWater */.f,v),u.include(e),u.include(FoamRendering_glsl/* FoamColor */.v),v.cloudReflections&&m.include(C),m.include(d,v),u.include(ToneMapping_glsl/* ToneMapping */.b,v),u.constants.add("fresnelSky","vec3",[.02,1,15]),u.constants.add("fresnelMaterial","vec2",[.02,.1]),u.constants.add("roughness","float",.015),u.constants.add("foamIntensityExternal","float",1.7),u.constants.add("ssrIntensity","float",.65),u.constants.add("ssrHeightFadeStart","float",ScreenSpaceConstants/* distanceFadeStart */.O),u.constants.add("ssrHeightFadeEnd","float",ScreenSpaceConstants/* distanceFadeEnd */.b),u.constants.add("waterDiffusion","float",.92),u.constants.add("waterSeaColorMod","float",.8),u.constants.add("correctionViewingPowerFactor","float",.4),u.constants.add("skyZenitColor","vec3",[.52,.68,.9]),u.constants.add("skyColor","vec3",[.67,.79,.9]),u.constants.add("cloudFresnelModifier","vec2",[1.2,.01]),u.code.add((0,glsl/* glsl */.H)`PBRShadingWater shadingInfo;
vec3 getSkyGradientColor(in float cosTheta, in vec3 horizon, in vec3 zenit) {
float exponent = pow((1.0 - cosTheta), fresnelSky[2]);
return mix(zenit, horizon, exponent);
}`),u.uniforms.add(new FloatBindUniform/* FloatBindUniform */.U("lightingSpecularStrength",(e=>e.lighting.mainLight.specularStrength)),new FloatBindUniform/* FloatBindUniform */.U("lightingEnvironmentStrength",(e=>e.lighting.mainLight.environmentStrength))),u.code.add((0,glsl/* glsl */.H)`vec3 getSeaColor(in vec3 n, in vec3 v, in vec3 l, vec3 color, in vec3 lightIntensity, in vec3 localUp, in float shadow, float foamIntensity, vec3 viewPosition, vec3 position) {
float reflectionHit = 0.0;
float reflectionHitDiffused = 0.0;
vec3 seaWaterColor = linearizeGamma(color);
vec3 h = normalize(l + v);
shadingInfo.NdotV = clamp(dot(n, v), 0.001, 1.0);
shadingInfo.VdotN = clamp(dot(v, n), 0.001, 1.0);
shadingInfo.NdotH = clamp(dot(n, h), 0.0, 1.0);
shadingInfo.VdotH = clamp(dot(v, h), 0.0, 1.0);
shadingInfo.LdotH = clamp(dot(l, h), 0.0, 1.0);
float upDotV = max(dot(localUp,v), 0.0);
vec3 skyHorizon = linearizeGamma(skyColor);
vec3 skyZenit = linearizeGamma(skyZenitColor);
vec3 skyColor = getSkyGradientColor(upDotV, skyHorizon, skyZenit );
float upDotL = max(dot(localUp,l),0.0);
float daytimeMod = 0.1 + upDotL * 0.9;
skyColor *= daytimeMod;
float shadowModifier = clamp(shadow, 0.8, 1.0);
vec3 fresnelModifier = fresnelReflection(shadingInfo.VdotN, vec3(fresnelSky[0]), fresnelSky[1]);
vec3 reflSky = lightingEnvironmentStrength * fresnelModifier * skyColor * shadowModifier;
vec3 reflSea = seaWaterColor * mix(skyColor, upDotL * lightIntensity * LIGHT_NORMALIZATION, 2.0 / 3.0) * shadowModifier;
vec3 specular = vec3(0.0);
if(upDotV > 0.0 && upDotL > 0.0) {
vec3 specularSun = brdfSpecularWater(shadingInfo, roughness, vec3(fresnelMaterial[0]), fresnelMaterial[1]);
vec3 incidentLight = lightIntensity * LIGHT_NORMALIZATION * shadow;
float NdotL = clamp(dot(n, l), 0.0, 1.0);
specular = lightingSpecularStrength * NdotL * incidentLight * specularSun;
}
vec3 foam = vec3(0.0);
if(upDotV > 0.0) {
foam = foamIntensity2FoamColor(foamIntensityExternal, foamIntensity, skyZenitColor, daytimeMod);
}
float correctionViewingFactor = pow(max(dot(v, localUp), 0.0), correctionViewingPowerFactor);
vec3 normalCorrectedClouds = mix(localUp, n, correctionViewingFactor);
vec3 reflectedWorld = normalize(reflect(-v, normalCorrectedClouds));`),v.cloudReflections&&u.uniforms.add(new FloatBindUniform/* FloatBindUniform */.U("cloudsOpacity",(e=>e.clouds.opacity))).code.add((0,glsl/* glsl */.H)`vec4 cloudsColor = renderClouds(reflectedWorld, position);
cloudsColor.a = 1.0 - cloudsColor.a;
cloudsColor = pow(cloudsColor, vec4(GAMMA));
cloudsColor *= clamp(fresnelModifier.y * cloudFresnelModifier[0] - cloudFresnelModifier[1], 0.0, 1.0) * cloudsOpacity;`),v.screenSpaceReflections?u.uniforms.add(new Matrix4BindUniform/* Matrix4BindUniform */.F("view",(e=>e.camera.viewMatrix)),new Texture2DBindUniform/* Texture2DBindUniform */.x("lastFrameColorTexture",(e=>e.ssr.lastFrameColor?.getTexture())),new FloatBindUniform/* FloatBindUniform */.U("fadeFactorSSR",(e=>e.ssr.fadeFactor))).code.add((0,glsl/* glsl */.H)`vec3 viewDir = normalize(viewPosition);
vec4 viewNormalVectorCoordinate = view * vec4(n, 0.0);
vec3 viewNormal = normalize(viewNormalVectorCoordinate.xyz);
vec4 viewUp = view * vec4(localUp, 0.0);
vec3 viewNormalCorrectedSSR = mix(viewUp.xyz, viewNormal, correctionViewingFactor);
vec3 reflected = normalize(reflect(viewDir, viewNormalCorrectedSSR));
vec3 hitCoordinate = screenSpaceIntersection(reflected, viewPosition, viewDir, viewUp.xyz);
vec3 reflectedColor = vec3(0.0);
if (hitCoordinate.z > 0.0)
{
vec2 reprojectedCoordinate = reprojectionCoordinate(hitCoordinate);
vec2 dCoords = smoothstep(0.3, 0.6, abs(vec2(0.5, 0.5) - hitCoordinate.xy));
float heightMod = smoothstep(ssrHeightFadeEnd, ssrHeightFadeStart, -viewPosition.z);
reflectionHit = clamp(1.0 - (1.3 * dCoords.y), 0.0, 1.0) * heightMod * fadeFactorSSR;
reflectionHitDiffused = waterDiffusion * reflectionHit;
reflectedColor = linearizeGamma(texture(lastFrameColorTexture, reprojectedCoordinate).xyz) *
reflectionHitDiffused * fresnelModifier.y * ssrIntensity;
}
float seaColorMod =  mix(waterSeaColorMod, waterSeaColorMod * 0.5, reflectionHitDiffused);
vec3 waterRenderedColor = tonemapACES((1.0 - reflectionHitDiffused) * reflSky + reflectedColor +
reflSea * seaColorMod + specular + foam);`):u.code.add((0,glsl/* glsl */.H)`vec3 waterRenderedColor = tonemapACES(reflSky + reflSea * waterSeaColorMod + specular + foam);`),v.cloudReflections?v.screenSpaceReflections?u.code.add((0,glsl/* glsl */.H)`return waterRenderedColor * (1.0 - (1.0 - reflectionHit) * cloudsColor.a) + (1.0 - reflectionHit) * cloudsColor.xyz;
}`):u.code.add((0,glsl/* glsl */.H)`return waterRenderedColor * (1.0 - cloudsColor.a) + cloudsColor.xyz;
}`):u.code.add((0,glsl/* glsl */.H)`return waterRenderedColor;
}`)}


/***/ }),

/***/ 41679:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ u)
/* harmony export */ });
/* unused harmony export WaterDistortionPassParameters */
/* harmony import */ var _core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60704);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59646);
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2662);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28152);
/* harmony import */ var _FoamRendering_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79870);
/* harmony import */ var _ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53402);
/* harmony import */ var _shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54473);
/* harmony import */ var _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1411);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72196);
/* harmony import */ var _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79856);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function u(t){t.fragment.uniforms.add(new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_9__/* .Texture2DPassUniform */ .N("texWaveNormal",(e=>e.waveNormal)),new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_9__/* .Texture2DPassUniform */ .N("texWavePerturbation",(e=>e.wavePerturbation)),new _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_7__/* .Float4PassUniform */ .E("waveParams",(e=>(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_2__.s)(c,e.waveStrength,e.waveTextureRepeat,e.flowStrength,e.flowOffset))),new _shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_6__/* .Float2PassUniform */ .G("waveDirection",(t=>(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .hZ)(n,t.waveDirection[0]*t.waveVelocity,t.waveDirection[1]*t.waveVelocity)))),t.fragment.include(_FoamRendering_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .FoamIntensity */ .z),t.fragment.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_8__/* .glsl */ .H)`const vec2  FLOW_JUMP = vec2(6.0/25.0, 5.0/24.0);
vec2 textureDenormalized2D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture(_tex, _uv).rg - 1.0;
}
float sampleNoiseTexture(vec2 _uv) {
return texture(texWavePerturbation, _uv).b;
}
vec3 textureDenormalized3D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture(_tex, _uv).rgb - 1.0;
}
float computeProgress(vec2 uv, float time) {
return fract(time);
}
float computeWeight(vec2 uv, float time) {
float progress = computeProgress(uv, time);
return 1.0 - abs(1.0 - 2.0 * progress);
}
vec3 computeUVPerturbedWeigth(sampler2D texFlow, vec2 uv, float time, float phaseOffset) {
float flowStrength = waveParams[2];
float flowOffset = waveParams[3];
vec2 flowVector = textureDenormalized2D(texFlow, uv) * flowStrength;
float progress = computeProgress(uv, time + phaseOffset);
float weight = computeWeight(uv, time + phaseOffset);
vec2 result = uv;
result -= flowVector * (progress + flowOffset);
result += phaseOffset;
result += (time - progress) * FLOW_JUMP;
return vec3(result, weight);
}
const float TIME_NOISE_TEXTURE_REPEAT = 0.3737;
const float TIME_NOISE_STRENGTH = 7.77;
vec3 getWaveLayer(sampler2D _texNormal, sampler2D _dudv, vec2 _uv, vec2 _waveDir, float time) {
float waveStrength = waveParams[0];
vec2 waveMovement = time * -_waveDir;
float timeNoise = sampleNoiseTexture(_uv * TIME_NOISE_TEXTURE_REPEAT) * TIME_NOISE_STRENGTH;
vec3 uv_A = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.0);
vec3 uv_B = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.5);
vec3 normal_A = textureDenormalized3D(_texNormal, uv_A.xy) * uv_A.z;
vec3 normal_B = textureDenormalized3D(_texNormal, uv_B.xy) * uv_B.z;
vec3 mixNormal = normalize(normal_A + normal_B);
mixNormal.xy *= waveStrength;
mixNormal.z = sqrt(1.0 - dot(mixNormal.xy, mixNormal.xy));
return mixNormal;
}
vec4 getSurfaceNormalAndFoam(vec2 _uv, float _time) {
float waveTextureRepeat = waveParams[1];
vec3 normal = getWaveLayer(texWaveNormal, texWavePerturbation, _uv * waveTextureRepeat, waveDirection, _time);
float foam  = normals2FoamIntensity(normal, waveParams[0]);
return vec4(normal, foam);
}`)}class f extends (/* unused pure expression or super */ null && (m)){}const c=(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .vt)(),n=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)();


/***/ }),

/***/ 7568:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11809);
/* harmony import */ var _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99120);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class s extends _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__/* .Uniform */ .n{constructor(e,s){super(e,"usampler2D",_webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__/* .BindType */ .c.Pass,((r,o,t)=>r.bindTexture(e,s(o,t))))}}


/***/ }),

/***/ 38931:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cc: () => (/* binding */ c),
/* harmony export */   RW: () => (/* binding */ o)
/* harmony export */ });
/* unused harmony exports ConsumesDepth, ConsumesNone */
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52495);
/* harmony import */ var _core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55274);
/* harmony import */ var _lib_Material_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45722);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const s={required:[]},n={required:[_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__/* .ShaderOutput */ .V.Depth]};class u extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A{precompile(e){return!!this.acquireTechniques(e)}consumes(){return s}get usedMemory(){return 0}get renderOccludedFlags(){return _lib_Material_js__WEBPACK_IMPORTED_MODULE_2__/* .RenderOccludedFlag */ .m$.Occlude}get isDecoration(){return!1}get running(){return!1}modify(e,r){}get numGeometries(){return 0}get hasOccludees(){return!1}get hasEmissions(){return!1}forEachGeometry(e){}}class o extends u{}class c extends u{}


/***/ }),

/***/ 57649:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _TextHelperCanvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99428);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(e){const{size:c}=e.definition,a=e.fontString(c);let i=n.get(a);if(!i){const u=(0,_TextHelperCanvas_js__WEBPACK_IMPORTED_MODULE_0__/* .getTextHelperCanvas */ .y)(o,0,0).getContext("2d");e.setFontProperties(u,c);const x=u.measureText(r);i=new s(x.actualBoundingBoxAscent,x.actualBoundingBoxDescent),n.set(a,i)}return i}const n=new Map;class s{get maxHeight(){return this.maxAscent+this.maxDescent}constructor(t,e){this.maxAscent=t,this.maxDescent=e}}const o={canvas:null},r=(()=>{let t="";for(let e=32;e<127;e++)t+=String.fromCharCode(e);return t})();


/***/ }),

/***/ 23183:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ I),
/* harmony export */   q: () => (/* binding */ E)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var E,I;!function(E){E[E.ADD=0]="ADD",E[E.UPDATE=1]="UPDATE",E[E.REMOVE=2]="REMOVE"}(E||(E={})),function(E){E[E.NONE=0]="NONE",E[E.VISIBILITY=1]="VISIBILITY",E[E.GEOMETRY=2]="GEOMETRY",E[E.TRANSFORMATION=4]="TRANSFORMATION",E[E.HIGHLIGHT=8]="HIGHLIGHT",E[E.OCCLUDEE=16]="OCCLUDEE"}(I||(I={}));


/***/ }),

/***/ 45455:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tz: () => (/* binding */ u),
/* harmony export */   aT: () => (/* binding */ e),
/* harmony export */   fA: () => (/* binding */ c)
/* harmony export */ });
/* unused harmony exports compressAndTransformNormals, decodeInt16, decompressNormals, encodeInt16 */
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92504);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24121);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58359);
/* harmony import */ var _geometry_support_FloatArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50961);
/* harmony import */ var _geometry_support_ShortArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27841);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(t,r,o,n,a,s=2){const e=1/(Math.abs(o)+Math.abs(n)+Math.abs(a)),c=o*e,f=n*e,u=a<=0?(c>=0?1:-1)*(1-Math.abs(f)):c,h=a<=0?(f>=0?1:-1)*(1-Math.abs(c)):f,m=r*s;t[m]=i(u),t[m+1]=i(h)}function c(t){const r=t.length/3,o=(0,_geometry_support_ShortArray_js__WEBPACK_IMPORTED_MODULE_4__/* .newShortArray */ .O)(2*r);let n=0;for(let a=0;a<r;++a)e(o,a,t[n++],t[n++],t[n++]);return o}function f(t,r){const a=t.length/3,s=new Int16Array(2*a);let c=0;const f=n();for(let n=0;n<a;++n)f[0]=t[c++],f[1]=t[c++],f[2]=t[c++],o(f,f,r),e(s,n,f[0],f[1],f[2]);return s}function u(t,o,n,a=2){const s=n*a,e=m(o[s]),c=m(o[s+1]),f=1-Math.abs(e)-Math.abs(c);return t[2]=f,f<0?(t[0]=(e>=0?1:-1)*(1-Math.abs(c)),t[1]=(c>=0?1:-1)*(1-Math.abs(e))):(t[0]=e,t[1]=c),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.n)(t,t)}function h(t,r=2){const o=t.length/r,s=a(3*o),e=n();let c=0;for(let n=0;n<o;++n)u(e,t,n,r),s[c++]=e[0],s[c++]=e[1],s[c++]=e[2];return s}function i(r){return (0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .clamp */ .qE)(Math.round(32767*r),-32767,32767)}function m(r){return (0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .clamp */ .qE)(r/32767,-1,1)}


/***/ }),

/***/ 2007:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ g)
/* harmony export */ });
/* unused harmony export ValidatedRenderGeometry */
/* harmony import */ var _core_uid_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65061);
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21742);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86128);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24121);
/* harmony import */ var _chunks_sphere_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31803);
/* harmony import */ var _support_mathUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72699);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class g{constructor(r,i={}){this.geometry=r,this.screenToWorldRatio=1,this._transformation=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)(),this._shaderTransformation=null,this._boundingSphere=null,this.id=(0,_core_uid_js__WEBPACK_IMPORTED_MODULE_5__/* .generateUID */ .c)(),this.layerViewUid=i.layerViewUid,this.graphicUid=i.graphicUid,this.castShadow=i.castShadow??!1,i.objectShaderTransformation&&this.objectShaderTransformationChanged(i.objectShaderTransformation)}get transformation(){return this._transformation}set transformation(t){(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__/* .copy */ .C)(this._transformation,t),this._boundingSphere=null}get boundingInfo(){return this.geometry.boundingInfo}objectShaderTransformationChanged(t){null==t?this._shaderTransformation=null:(this._shaderTransformation??=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)(),(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__/* .multiply */ .lw)(this._shaderTransformation,t,this.geometry.transformation)),this._boundingSphere=null}get boundingSphere(){return this.boundingInfo?(null==this._boundingSphere&&(this._boundingSphere??=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_3__.c)(),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.t)((0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_3__.a)(this._boundingSphere),this.boundingInfo.center,this.shaderTransformation),this._boundingSphere[3]=this.boundingInfo.radius*(0,_support_mathUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .maxScale */ .hG)(this.shaderTransformation)),this._boundingSphere):_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_3__.N}get material(){return this.geometry.material}get type(){return this.geometry.type}get shaderTransformation(){return this._shaderTransformation??this.transformation}get attributes(){return this.geometry.attributes}get highlight(){return this.geometry.highlights}foreachHighlightOptions(t){this.geometry.foreachHighlightOptions(t)}get hasHighlights(){return this.geometry.hasHighlights}get occludees(){return this.geometry.occludees}get visible(){return this.geometry.visible}set visible(t){this.geometry.visible=t}}class m extends (/* unused pure expression or super */ null && (g)){}


/***/ }),

/***/ 99428:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ a)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function a(a,n,c){return a.canvas||(a.canvas=document.createElement("canvas")),a.canvas.width=n,a.canvas.height=c,a.canvas}


/***/ }),

/***/ 27999:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Js: () => (/* binding */ r),
/* harmony export */   Xd: () => (/* binding */ s),
/* harmony export */   lV: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92504);
/* harmony import */ var _support_debugFlags_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19620);
/* harmony import */ var _FontMetrics_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57649);
/* harmony import */ var _TextHelperCanvas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99428);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const s=1;class r{constructor(t,e,i,n){this.text=t,this._alignment=e,this._parameters=i,this._maxSize=n,this._textWidths=[],this._lineWidths=[],this._renderPixelRatio=null,this._metricsCached=null,this.key=`${t}--${this._parameters.key}-${this._alignment}`,this._lines=t.replaceAll(" "," ").split(/\r?\n/)}get displayWidth(){return Math.ceil(this._displayWidth+2*this._horizontalPadding)}get displayHeight(){let t=this._metrics.firstLineAscent;for(let e=0;e<this._lines.length-1;e++)t+=this._lineSpacing;return t+=this._metrics.lastLineDescent,Math.ceil(t+2*this._haloSize+2*this._verticalPadding)}get renderedWidth(){return this._toRoundedRenderUnit(this.displayWidth)}get renderedHeight(){return this._toRoundedRenderUnit(this.displayHeight)}get firstRenderedBaselinePosition(){return this._toRenderUnit(this._firstLineYOffset+this._metrics.firstLineAscent)}get _firstLineYOffset(){return this._verticalPadding+this._haloSize}get _metrics(){if(null==this._metricsCached){const t=(0,_TextHelperCanvas_js__WEBPACK_IMPORTED_MODULE_3__/* .getTextHelperCanvas */ .y)(a,l,l).getContext("2d"),e=this._parameters.definition.pixelRatio,s=this._fontSize*e;this._parameters.setFontProperties(t,s);let r=2*this._haloSize;const h=this._parameters.definition.font;"italic"!==h.style&&"oblique"!==h.style&&"bold"!==h.weight&&"bolder"!==h.weight||(r+=.3*t.measureText("A").width),this._textWidths.length=0,this._lineWidths.length=0;let o=0,d=0,_=0,g=0,m=0;this._lines.forEach(((i,n)=>{const s=t.measureText(i),h=s.width/e,a=h+r;this._textWidths.push(h),this._lineWidths.push(a),o=Math.max(o,a),g=Math.max(g,s.actualBoundingBoxAscent/e),m=Math.max(m,s.actualBoundingBoxDescent/e),0===n&&(d=s.actualBoundingBoxAscent/e),n===this._lines.length-1&&(_=s.actualBoundingBoxDescent/e)}));const f=(0,_FontMetrics_js__WEBPACK_IMPORTED_MODULE_2__/* .getFontMetrics */ .z)(this._parameters),u=Math.max(g,f.maxAscent),p=Math.max(m,f.maxDescent),x=d,R="underline"===this._parameters.definition.font.decoration?p:_,S=o;this._metricsCached=new c(x,R,u,p,S)}return this._metricsCached}get _lineSpacing(){return(this._midLineHeight+this._linePadding)*this._parameters.definition.lineSpacingFactor}get _midLineHeight(){return this._metrics.midLineHeight}get _linePadding(){return this._midLineHeight*d}get _midLineAscent(){return this._metrics.maxLineAscent}get _renderedFontSize(){return this._toRenderUnit(this._fontSize)}get _fontSize(){return this._parameters.definition.size}get _renderedHaloSize(){return this._toRenderUnit(this._haloSize)}get _haloSize(){return this._parameters.haloSize}get _horizontalPadding(){return this._hasBackground?this._parameters.definition.background.padding[0]:0}get _verticalPadding(){return Math.max(this._hasBackground?this._parameters.definition.background.padding[1]:0,s)}get _hasBackground(){return!!this._parameters.backgroundStyle}get renderPixelRatio(){if(null==this._renderPixelRatio){const t=this._parameters.definition.pixelRatio;this._renderPixelRatio=Math.min(t,Math.min(this._maxSize[0]/this.displayWidth,this._maxSize[1]/this.displayHeight))}return this._renderPixelRatio}_getLineXOffset(t){switch(this._alignment){case o.Left:return this._horizontalPadding;case o.Center:return(this.displayWidth-this._lineWidths[t])/2;case o.Right:return this.displayWidth-this._horizontalPadding-this._lineWidths[t]}}render(t,i,n){t.save();const s=i/=this.renderPixelRatio,r=n/=this.renderPixelRatio,h=this._haloSize,o=this._firstLineYOffset+this._metrics.firstLineAscent;i+=h,n+=o;const a=this._haloSize>0;a&&this._renderHalo(t,s,r,h,o),this._parameters.setFontProperties(t,this._renderedFontSize);for(let e=0;e<this._lines.length;++e){const s=this._lines[e],r=this._getLineXOffset(e);a&&(t.globalCompositeOperation="destination-out",t.fillStyle="rgb(0, 0, 0)",this._fillText(t,s,i+r,n),this._renderLineDecoration(t,i+r,n,this._textWidths[e])),t.globalCompositeOperation="source-over",t.fillStyle=this._parameters.textStyle,this._fillText(t,s,i+this._getLineXOffset(e),n),this._renderLineDecoration(t,i+r,n,this._textWidths[e]),n+=this._lineSpacing}if(_support_debugFlags_js__WEBPACK_IMPORTED_MODULE_1__/* .debugFlags */ .b.TEXT_SHOW_BASELINE){t.strokeStyle=_,t.setLineDash([2,2]),t.lineWidth=1;let e=r+o;for(let i=0;i<this._lines.length;++i)this._drawLine(t,[s,e],[s+this.displayWidth,e]),e+=this._lineSpacing}if(_support_debugFlags_js__WEBPACK_IMPORTED_MODULE_1__/* .debugFlags */ .b.TEXT_SHOW_BORDER&&(t.strokeStyle=_,t.setLineDash([]),t.lineWidth=1,this._drawBox(t,[s,r],[this.displayWidth,this.displayHeight])),this._hasBackground){const e=this._parameters.definition.background.borderRadius*this.renderPixelRatio;this._roundedRect(t,s,r,e),t.globalCompositeOperation="destination-over",t.fillStyle=this._parameters.backgroundStyle,t.fill()}t.restore()}_renderLineDecoration(t,e,i,n,s=!1){if("none"===this._parameters.definition.font.decoration||0===n)return;const r=1,h=Math.max(this._parameters.definition.size/16,r);switch(this._parameters.definition.font.decoration){case"underline":i+=2*h;break;case"line-through":i-=.33*this._midLineAscent}const o=s?this._haloSize:0;t.strokeStyle=s?this._parameters.haloStyle:this._parameters.textStyle,t.lineWidth=this._toRenderUnit(h+2*o),t.beginPath(),t.moveTo(this._toRenderUnit(e-o),this._toRenderUnit(i)),t.lineTo(this._toRenderUnit(e+n+o),this._toRenderUnit(i)),t.stroke()}_roundedRect(e,i,n,s){i=this._toRenderUnit(i),n=this._toRenderUnit(n);const r=this.renderedWidth,h=this.renderedHeight;0!==s?(s=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .clamp */ .qE)(s,0,Math.floor(h/2)),e.beginPath(),e.moveTo(i,n+s),e.arcTo(i,n,i+s,n,s),e.lineTo(i+r-s,n),e.arcTo(i+r,n,i+r,n+s,s),e.lineTo(i+r,n+h-s),e.arcTo(i+r,n+h,i+r-s,n+h,s),e.lineTo(i+s,n+h),e.arcTo(i,n+h,i,n+h-s,s),e.closePath()):e.rect(i,n,r,h)}_renderHalo(t,e,i,s,r){const h=this.renderedWidth,o=this.renderedHeight,d=(0,_TextHelperCanvas_js__WEBPACK_IMPORTED_MODULE_3__/* .getTextHelperCanvas */ .y)(a,Math.max(h,l),Math.max(o,l)),_=d.getContext("2d");_.clearRect(0,0,h,o),this._parameters.setFontProperties(_,this._renderedFontSize),_.fillStyle=this._parameters.haloStyle,_.strokeStyle=this._parameters.haloStyle;const c=this._renderedHaloSize<3;_.lineJoin=c?"miter":"round",c?this._renderHaloEmulated(_,s,r):this._renderHaloNative(_,s,r);let g=r;for(let n=0;n<this._lines.length;++n){const t=this._getLineXOffset(n);this._renderLineDecoration(_,s+t,g,this._textWidths[n],!0),g+=this._lineSpacing}t.globalAlpha=this._parameters.definition.halo.color[3],t.drawImage(d,0,0,h,o,this._toRenderUnit(e),this._toRenderUnit(i),h,o),t.globalAlpha=1}_renderHaloEmulated(t,e,i){for(let n=0;n<this._lines.length;++n){const s=this._lines[n],r=this._getLineXOffset(n);for(const[n,o]of h)this._fillText(t,s,e+r+this._haloSize*n,i+this._haloSize*o);i+=this._lineSpacing}}_renderHaloNative(t,e,i){const n=2*this._haloSize;for(let s=0;s<this._lines.length;++s){const r=this._lines[s],h=this._getLineXOffset(s),o=5,a=.1;for(let s=0;s<o;s++){const d=1-(o-1)*a+s*a;t.lineWidth=this._toRenderUnit(d*n),this._strokeText(t,r,e+h,i)}i+=this._lineSpacing}}get _displayWidth(){return this._metrics.displayWidth}_toRenderUnit(t){return t*this.renderPixelRatio}_toRoundedRenderUnit(t){return Math.round(t*this.renderPixelRatio)}_fillText(t,e,i,n){t.fillText(e,this._toRenderUnit(i),this._toRenderUnit(n))}_strokeText(t,e,i,n){t.strokeText(e,this._toRenderUnit(i),this._toRenderUnit(n))}_drawLine(t,e,i){t.beginPath(),t.moveTo(this._toRoundedRenderUnit(e[0])+.5,this._toRoundedRenderUnit(e[1])+.5),t.lineTo(this._toRoundedRenderUnit(i[0])+.5,this._toRoundedRenderUnit(i[1])+.5),t.stroke()}_drawBox(t,e,i){const n=this._toRenderUnit(e[0]),s=this._toRenderUnit(e[1]),r=this._toRenderUnit(i[0]),h=this._toRenderUnit(i[1]),o=Math.floor(n)+.5,a=Math.ceil(n+r)-.5,d=Math.floor(s)+.5,l=Math.ceil(s+h)-.5;t.beginPath(),t.moveTo(o,d),t.lineTo(a,d),t.lineTo(a,l),t.lineTo(o,l),t.lineTo(o,d),t.stroke()}}const h=[];{const t=16;for(let e=0;e<360;e+=360/t)h.push([Math.cos(Math.PI*e/180),Math.sin(Math.PI*e/180)])}var o;!function(t){t[t.Left=0]="Left",t[t.Center=1]="Center",t[t.Right=2]="Right"}(o||(o={}));const a={canvas:null},d=.2,l=512,_="rgb(255, 0, 255, 0.5)";class c{get firstLineHeight(){return this.firstLineAscent+this.maxLineDescent}get midLineHeight(){return this.maxLineAscent+this.maxLineDescent}get lastLineHeight(){return this.maxLineAscent+this.lastLineDescent}constructor(t,e,i,n,s){this.firstLineAscent=t,this.lastLineDescent=e,this.maxLineAscent=i,this.maxLineDescent=n,this.displayWidth=s}}


/***/ }),

/***/ 11459:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80976);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class r extends _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexArrayObject */ .Z{}


/***/ }),

/***/ 32504:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  v: () => (/* binding */ A)
});

// UNUSED EXPORTS: Parameters

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f64.js
var vec4f64 = __webpack_require__(28152);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/support/buffer/InterleavedLayout.js
var InterleavedLayout = __webpack_require__(11110);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js
var ShaderOutput = __webpack_require__(55274);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/effects/geometry/olidUtils.js
var olidUtils = __webpack_require__(36340);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js
var basicInterfaces = __webpack_require__(91013);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLMaterial.js
var GLMaterial = __webpack_require__(67341);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/OrderIndependentTransparency.js
var OrderIndependentTransparency = __webpack_require__(1931);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/RenderSlot.js
var RenderSlot = __webpack_require__(38323);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js
var VertexAttribute = __webpack_require__(50645);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultBufferWriter.js
var DefaultBufferWriter = __webpack_require__(25146);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/TriangleMaterial.js
var TriangleMaterial = __webpack_require__(52873);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/VisualVariablePassParameters.js
var VisualVariablePassParameters = __webpack_require__(17745);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ReloadableShaderModule.js
var ReloadableShaderModule = __webpack_require__(47705);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechnique.js + 1 modules
var ShaderTechnique = __webpack_require__(28347);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/OITPass.js
var OITPass = __webpack_require__(69338);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/StencilUtils.js
var StencilUtils = __webpack_require__(98546);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/ColorMaterial.glsl.js
var ColorMaterial_glsl = __webpack_require__(17504);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/renderState.js
var renderState = __webpack_require__(2449);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/ColorMaterialTechnique.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class b extends VisualVariablePassParameters/* VisualVariablePassParameters */.S{constructor(){super(...arguments),this.color=vec4f64/* ZEROS */.uY}}class O extends ShaderTechnique/* ShaderTechnique */.w{constructor(e,r){super(e,r,new ReloadableShaderModule/* ReloadableShaderModule */.$(ColorMaterial_glsl.C,(()=>__webpack_require__.e(/* import() */ 4788).then(__webpack_require__.bind(__webpack_require__, 34788)))))}_createPipeline(e,t){const{oitPass:i,output:f,transparent:h,cullFace:b,draped:O,hasOccludees:T,polygonOffset:_}=e,x=i===OITPass/* OITPass */.Y.NONE;return (0,renderState/* makePipelineState */.Ey)({blending:(0,ShaderOutput/* isColorOrColorEmission */.RN)(f)&&h?(0,OrderIndependentTransparency/* blending */.Yf)(i):null,culling:(0,renderState/* cullingParams */.Xt)(b),depthTest:O?null:{func:(0,OrderIndependentTransparency/* oitDepthTest */.K_)(i)},depthWrite:(0,OrderIndependentTransparency/* depthWrite */.z5)(e),drawBuffers:(0,ShaderTechnique/* depthOnlyOutputBuffersOr */.L)(f,(0,OrderIndependentTransparency/* getDrawBuffers */.m6)(i,f)),colorWrite:renderState/* defaultColorWrite */.kn,stencilWrite:T?StencilUtils/* stencilWriteMaskOn */.v0:null,stencilTest:T?t?StencilUtils/* stencilToolMaskBaseParams */.a9:StencilUtils/* stencilBaseAllZerosParams */.qh:null,polygonOffset:x?_?S:null:(0,OrderIndependentTransparency/* oitPolygonOffset */.mE)(e)})}initializePipeline(e){return this._occludeePipelineState=this._createPipeline(e,!0),this._createPipeline(e,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}const S={factor:1,units:1};

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js
var TextureCoordinateAttribute_glsl = __webpack_require__(26139);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/Emissions.glsl.js
var Emissions_glsl = __webpack_require__(15420);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration.js + 1 modules
var ShaderTechniqueConfiguration = __webpack_require__(77941);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultTechniqueConfiguration.js
var DefaultTechniqueConfiguration = __webpack_require__(9319);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/ColorMaterialTechniqueConfiguration.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class a extends DefaultTechniqueConfiguration/* DefaultTechniqueConfiguration */.E{constructor(){super(...arguments),this.cullFace=basicInterfaces/* CullFaceOptions */.s2.None,this.hasVertexColors=!1,this.transparent=!1,this.discardInvisibleFragments=!1,this.polygonOffset=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.objectAndLayerIdColorInstanced=!1,this.vvColor=!1,this.draped=!1,this.textureCoordinateType=TextureCoordinateAttribute_glsl/* TextureCoordinateType */.I.None,this.emissionSource=Emissions_glsl/* EmissionSource */.ZX.None,this.occlusionPass=!1,this.hasVvInstancing=!0,this.vvSize=!1,this.vvOpacity=!1,this.snowCover=!1}}(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)({count:basicInterfaces/* CullFaceOptions */.s2.COUNT})],a.prototype,"cullFace",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],a.prototype,"hasVertexColors",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],a.prototype,"transparent",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],a.prototype,"discardInvisibleFragments",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],a.prototype,"polygonOffset",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],a.prototype,"enableOffset",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],a.prototype,"writeDepth",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],a.prototype,"hasOccludees",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],a.prototype,"terrainDepthTest",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],a.prototype,"cullAboveTerrain",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],a.prototype,"objectAndLayerIdColorInstanced",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],a.prototype,"vvColor",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],a.prototype,"draped",void 0);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/webscene/support/AlphaCutoff.js
var AlphaCutoff = __webpack_require__(63199);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/ColorMaterial.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class A extends TriangleMaterial/* TriangleMaterial */.W{constructor(t){super(t,P),this._configuration=new a,this.supportsEdges=!0,this.produces=new Map([[RenderSlot/* RenderSlot */.N.OPAQUE_MATERIAL,t=>this._isOpaqueMaterialPass(t)],[RenderSlot/* RenderSlot */.N.OPAQUE_MATERIAL_WITHOUT_NORMALS,t=>this._isOpaqueNoSSAODepthPass(t)],[RenderSlot/* RenderSlot */.N.TRANSPARENT_MATERIAL,t=>(0,ShaderOutput/* isColorOrColorEmissionOrOID */.QG)(t)&&this._transparent&&this.parameters.writeDepth],[RenderSlot/* RenderSlot */.N.TRANSPARENT_MATERIAL_WITHOUT_NORMALS,t=>(0,ShaderOutput/* isDepth */.eh)(t)&&this._transparent&&this.parameters.writeDepth],[RenderSlot/* RenderSlot */.N.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,t=>(0,ShaderOutput/* isColorOrColorEmissionOrOID */.QG)(t)&&this._transparent&&!this.parameters.writeDepth],[RenderSlot/* RenderSlot */.N.DRAPED_MATERIAL,t=>(0,ShaderOutput/* is2DGeometryOutput */.i3)(t)]])}getConfiguration(t,r){return super.getConfiguration(t,r,this._configuration),this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasVertexColors=this.parameters.hasVertexColors&&!this.parameters.vvColor,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this._transparent,this._configuration.discardInvisibleFragments=this._transparent&&!this._isOpaquePass(t)&&this.parameters.discardInvisibleFragments,this._configuration.polygonOffset=this.parameters.polygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=r.hasOccludees,this._configuration.oitPass=r.oitPass,this._configuration.enableOffset=r.camera.relativeElevation<OrderIndependentTransparency/* OITPolygonOffsetLimit */.xt,this._configuration.terrainDepthTest=r.terrainDepthTest&&(0,ShaderOutput/* isColorOrColorEmission */.RN)(t),this._configuration.cullAboveTerrain=r.cullAboveTerrain,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.draped=this.parameters.draped,this._configuration}get visible(){return this.parameters.color[3]>=AlphaCutoff/* alphaCutoff */.Q}get _transparent(){return this.parameters.color[3]<1||this.parameters.forceTransparentMode}_isOpaquePass(t){return this._isOpaqueMaterialPass(t)||this._isOpaqueNoSSAODepthPass(t)}_isOpaqueMaterialPass(t){return t===ShaderOutput/* ShaderOutput */.V.Highlight||(0,ShaderOutput/* isColorOrColorEmissionOrOID */.QG)(t)&&!this._transparent}_isOpaqueNoSSAODepthPass(t){return (0,ShaderOutput/* isDepth */.eh)(t)&&this.parameters.writeDepth&&!this._transparent}createGLMaterial(t){return new d(t)}createBufferWriter(){const t=(0,InterleavedLayout/* newLayout */.BP)().vec3f(VertexAttribute/* VertexAttribute */.r.POSITION);return (0,olidUtils/* olidEnabled */.E)()&&t.vec4u8(VertexAttribute/* VertexAttribute */.r.OLIDCOLOR),this.parameters.vvColor?t.f32(VertexAttribute/* VertexAttribute */.r.COLORFEATUREATTRIBUTE):t.vec4u8(VertexAttribute/* VertexAttribute */.r.COLOR),new DefaultBufferWriter/* DefaultBufferWriter */.Z(t)}}class d extends GLMaterial/* default */.A{beginSlot(t){return this.getTechnique(O,t)}}class P extends VisualVariablePassParameters/* VisualVariablePassParameters */.S{constructor(){super(...arguments),this.color=vec4f64/* ZEROS */.uY,this.forceTransparentMode=!1,this.writeDepth=!0,this.hasVertexColors=!1,this.polygonOffset=!1,this.hasSlicePlane=!1,this.cullFace=basicInterfaces/* CullFaceOptions */.s2.None,this.draped=!1,this.discardInvisibleFragments=!1}}


/***/ }),

/***/ 27776:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ci: () => (/* binding */ I),
/* harmony export */   KL: () => (/* binding */ t),
/* harmony export */   dB: () => (/* binding */ f),
/* harmony export */   l5: () => (/* binding */ c),
/* harmony export */   wB: () => (/* binding */ r)
/* harmony export */ });
/* unused harmony export PositionUvOlidLayout */
/* harmony import */ var _support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11110);
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50645);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const I=(0,_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_0__/* .newLayout */ .BP)().vec3f(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__/* .VertexAttribute */ .r.POSITION),c=(0,_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_0__/* .newLayout */ .BP)().vec3f(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__/* .VertexAttribute */ .r.POSITION).vec2f16(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__/* .VertexAttribute */ .r.UV0),f=(0,_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_0__/* .newLayout */ .BP)().vec3f(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__/* .VertexAttribute */ .r.POSITION).vec4u8(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__/* .VertexAttribute */ .r.COLOR),v=(0,_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_0__/* .newLayout */ .BP)().vec3f(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__/* .VertexAttribute */ .r.POSITION).vec2f16(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__/* .VertexAttribute */ .r.UV0).vec4u8(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__/* .VertexAttribute */ .r.OLIDCOLOR),t=(0,_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_0__/* .newLayout */ .BP)().vec3f(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__/* .VertexAttribute */ .r.POSITION).vec2f(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__/* .VertexAttribute */ .r.UV0),r=(0,_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_0__/* .newLayout */ .BP)().vec3f(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__/* .VertexAttribute */ .r.POSITION).vec2f(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__/* .VertexAttribute */ .r.UV0).vec4u8(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__/* .VertexAttribute */ .r.OLIDCOLOR);


/***/ }),

/***/ 62331:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  R: () => (/* binding */ ue)
});

// UNUSED EXPORTS: Parameters

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(92504);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat3.js
var mat3 = __webpack_require__(25423);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f64.js
var mat3f64 = __webpack_require__(78607);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js
var mat4 = __webpack_require__(21742);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js
var mat4f64 = __webpack_require__(86128);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/math/vec2.js
var vec2 = __webpack_require__(60704);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec2f64.js
var vec2f64 = __webpack_require__(59646);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(24121);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(58359);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f64.js
var vec4f64 = __webpack_require__(28152);
;// ../node_modules/@arcgis/core/core/libs/gl-matrix-2/types/mat4.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function n(n){return n instanceof Float32Array&&n.length>=16}function r(n){return Array.isArray(n)&&n.length>=16}function mat4_t(t){return n(t)||r(t)}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/aaBoundingRect.js
var aaBoundingRect = __webpack_require__(80510);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/buffer/BufferView.js + 6 modules
var BufferView = __webpack_require__(57813);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/support/FastSymbolUpdates.js
var FastSymbolUpdates = __webpack_require__(69463);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/support/debugFlags.js
var debugFlags = __webpack_require__(19620);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/support/buffer/InterleavedLayout.js
var InterleavedLayout = __webpack_require__(11110);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js
var ShaderOutput = __webpack_require__(55274);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/hud/HUD.glsl.js
var HUD_glsl = __webpack_require__(97085);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/effects/geometry/olidUtils.js
var olidUtils = __webpack_require__(36340);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLTextureMaterial.js
var GLTextureMaterial = __webpack_require__(89140);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Material.js
var Material = __webpack_require__(45722);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/RenderSlot.js
var RenderSlot = __webpack_require__(38323);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/screenSizePerspectiveUtils.js
var screenSizePerspectiveUtils = __webpack_require__(28953);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js
var Util = __webpack_require__(58947);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js
var VertexAttribute = __webpack_require__(50645);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/ScaleInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class t{constructor(){this.factor=new c,this.factorAlignment=new c}}class c{constructor(){this.scale=0,this.factor=0,this.minScaleFactor=0}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/bufferWriterUtils.js
var bufferWriterUtils = __webpack_require__(81500);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/MaterialUtil.js
var MaterialUtil = __webpack_require__(29117);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/HUDMaterial.glsl.js
var HUDMaterial_glsl = __webpack_require__(69726);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ReloadableShaderModule.js
var ReloadableShaderModule = __webpack_require__(47705);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechnique.js + 1 modules
var ShaderTechnique = __webpack_require__(28347);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/OITPass.js
var OITPass = __webpack_require__(69338);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/OrderIndependentTransparency.js
var OrderIndependentTransparency = __webpack_require__(1931);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/enums.js
var enums = __webpack_require__(41746);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/renderState.js
var renderState = __webpack_require__(2449);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/HUDMaterialTechnique.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class h extends ShaderTechnique/* ShaderTechnique */.w{constructor(e,r){super(e,r,new ReloadableShaderModule/* ReloadableShaderModule */.$(HUDMaterial_glsl.H,(()=>__webpack_require__.e(/* import() */ 5466).then(__webpack_require__.bind(__webpack_require__, 35466))))),this.primitiveType=r.occlusionPass?enums/* PrimitiveType */.WR.POINTS:enums/* PrimitiveType */.WR.TRIANGLES}initializePipeline(s){const{oitPass:o,hasPolygonOffset:n,draped:a,output:h,depthTestEnabled:T,occlusionPass:g}=s,j=o===OITPass/* OITPass */.Y.NONE,b=o===OITPass/* OITPass */.Y.ColorAlpha,O=h===ShaderOutput/* ShaderOutput */.V.Highlight,P=T&&!a&&!b&&!g&&!O;return (0,renderState/* makePipelineState */.Ey)({blending:(0,ShaderOutput/* isColorOrColorEmission */.RN)(h)?j?renderState/* premultipliedAlpha */.RC:(0,OrderIndependentTransparency/* oitBlending */.ez)(o):null,depthTest:T&&!a?{func:enums/* CompareFunction */.MT.LEQUAL}:null,depthWrite:P?renderState/* defaultDepthWrite */.Uy:null,drawBuffers:(0,OrderIndependentTransparency/* getDrawBuffers */.m6)(o,h),colorWrite:renderState/* defaultColorWrite */.kn,polygonOffset:n?f:null})}}const f={factor:0,units:-4};

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js
var TextureCoordinateAttribute_glsl = __webpack_require__(26139);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/Emissions.glsl.js
var Emissions_glsl = __webpack_require__(15420);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration.js + 1 modules
var ShaderTechniqueConfiguration = __webpack_require__(77941);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultTechniqueConfiguration.js
var DefaultTechniqueConfiguration = __webpack_require__(9319);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/HUDMaterialTechniqueConfiguration.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class HUDMaterialTechniqueConfiguration_r extends DefaultTechniqueConfiguration/* DefaultTechniqueConfiguration */.E{constructor(e){super(),this.spherical=e,this.screenCenterOffsetUnitsEnabled=!1,this.occlusionTestEnabled=!0,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.vvSize=!1,this.vvColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.hasPolygonOffset=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.occlusionPass=!1,this.occludedFragmentFade=!1,this.objectAndLayerIdColorInstanced=!1,this.horizonCullingEnabled=!0,this.isFocused=!0,this.textureCoordinateType=TextureCoordinateAttribute_glsl/* TextureCoordinateType */.I.None,this.emissionSource=Emissions_glsl/* EmissionSource */.ZX.None,this.discardInvisibleFragments=!0,this.hasVvInstancing=!1,this.snowCover=!1}}(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],HUDMaterialTechniqueConfiguration_r.prototype,"screenCenterOffsetUnitsEnabled",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],HUDMaterialTechniqueConfiguration_r.prototype,"occlusionTestEnabled",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],HUDMaterialTechniqueConfiguration_r.prototype,"signedDistanceFieldEnabled",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],HUDMaterialTechniqueConfiguration_r.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],HUDMaterialTechniqueConfiguration_r.prototype,"vvSize",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],HUDMaterialTechniqueConfiguration_r.prototype,"vvColor",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],HUDMaterialTechniqueConfiguration_r.prototype,"hasVerticalOffset",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],HUDMaterialTechniqueConfiguration_r.prototype,"hasScreenSizePerspective",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],HUDMaterialTechniqueConfiguration_r.prototype,"hasRotation",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],HUDMaterialTechniqueConfiguration_r.prototype,"debugDrawLabelBorder",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],HUDMaterialTechniqueConfiguration_r.prototype,"hasPolygonOffset",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],HUDMaterialTechniqueConfiguration_r.prototype,"depthTestEnabled",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],HUDMaterialTechniqueConfiguration_r.prototype,"pixelSnappingEnabled",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],HUDMaterialTechniqueConfiguration_r.prototype,"draped",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],HUDMaterialTechniqueConfiguration_r.prototype,"terrainDepthTest",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],HUDMaterialTechniqueConfiguration_r.prototype,"cullAboveTerrain",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],HUDMaterialTechniqueConfiguration_r.prototype,"occlusionPass",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],HUDMaterialTechniqueConfiguration_r.prototype,"occludedFragmentFade",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],HUDMaterialTechniqueConfiguration_r.prototype,"objectAndLayerIdColorInstanced",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],HUDMaterialTechniqueConfiguration_r.prototype,"horizonCullingEnabled",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],HUDMaterialTechniqueConfiguration_r.prototype,"isFocused",void 0);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/webscene/support/AlphaCutoff.js
var AlphaCutoff = __webpack_require__(63199);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/HUDMaterial.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class ue extends Material/* Material */.im{constructor(e,t){super(e,Me),this.produces=new Map([[RenderSlot/* RenderSlot */.N.HUD_MATERIAL,e=>(0,ShaderOutput/* isColorEmissionHighlightOrOID */.Mb)(e)&&!this.parameters.drawAsLabel],[RenderSlot/* RenderSlot */.N.LABEL_MATERIAL,e=>(0,ShaderOutput/* isColorEmissionHighlightOrOID */.Mb)(e)&&this.parameters.drawAsLabel],[RenderSlot/* RenderSlot */.N.OCCLUSION_PIXELS,()=>this.parameters.occlusionTest],[RenderSlot/* RenderSlot */.N.DRAPED_MATERIAL,e=>this.parameters.draped&&(0,ShaderOutput/* isColorEmissionHighlightOrOID */.Mb)(e)]]),this._visible=!0,this._configuration=new HUDMaterialTechniqueConfiguration_r(t)}getConfiguration(e,t){const i=this.parameters.draped;return super.getConfiguration(e,t,this._configuration),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled="screen"===this.parameters.centerOffsetUnits,this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=i,this._configuration.occlusionTestEnabled=this.parameters.occlusionTest,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,this._configuration.hasRotation=this.parameters.hasRotation,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.occlusionPass=t.slot===RenderSlot/* RenderSlot */.N.OCCLUSION_PIXELS,this._configuration.occludedFragmentFade=!i&&this.parameters.occludedFragmentFade,this._configuration.horizonCullingEnabled=this.parameters.horizonCullingEnabled,this._configuration.isFocused=this.parameters.isFocused,this._configuration.depthTestEnabled=this.parameters.depthEnabled||t.slot===RenderSlot/* RenderSlot */.N.OCCLUSION_PIXELS,(0,ShaderOutput/* isColorOrColorEmission */.RN)(e)&&(this._configuration.debugDrawLabelBorder=!!debugFlags/* debugFlags */.b.LABELS_SHOW_BORDER),this._configuration.oitPass=t.oitPass,this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration}intersect(e,t,s,a,n,o){const{options:{selectionMode:l,hud:c,excludeLabels:S},point:T,camera:b}=s,{parameters:v}=this;if(!l||!c||S&&v.isLabel||!e.visible||!T||!b)return;const E=e.attributes.get(VertexAttribute/* VertexAttribute */.r.FEATUREATTRIBUTE),I=null==E?null:(0,vec4f64/* fromArray */.ci)(E.data,ye),{scaleX:x,scaleY:F}=Xe(I,v,b.pixelRatio);(0,mat3/* fromMat4 */.z0)(Ie,t),e.attributes.has(VertexAttribute/* VertexAttribute */.r.FEATUREATTRIBUTE)&&de(Ie);const P=e.attributes.get(VertexAttribute/* VertexAttribute */.r.POSITION),_=e.attributes.get(VertexAttribute/* VertexAttribute */.r.SIZE),C=e.attributes.get(VertexAttribute/* VertexAttribute */.r.NORMAL),y=e.attributes.get(VertexAttribute/* VertexAttribute */.r.ROTATION),D=e.attributes.get(VertexAttribute/* VertexAttribute */.r.CENTEROFFSETANDDISTANCE);(0,Util/* assert */.vA)(P.size>=3);const L=(0,HUDMaterial_glsl.c)(v),N="screen"===this.parameters.centerOffsetUnits;for(let i=0;i<P.data.length/P.size;i++){const e=i*P.size;(0,vec32.i)(Se,P.data[e],P.data[e+1],P.data[e+2]),(0,vec32.t)(Se,Se,t),(0,vec32.t)(Se,Se,b.viewMatrix);const a=i*D.size;if((0,vec32.i)(_e,D.data[a],D.data[a+1],D.data[a+2]),!N&&(Se[0]+=_e[0],Se[1]+=_e[1],0!==_e[2])){const e=_e[2];(0,vec32.n)(_e,Se),(0,vec32.d)(Se,Se,(0,vec32.g)(_e,_e,e))}const n=i*C.size;if((0,vec32.i)(Te,C.data[n],C.data[n+1],C.data[n+2]),me(Te,Ie,b,De),qe(this.parameters,Se,De,b,Oe),b.applyProjection(Se,be),be[0]>-1){N&&(_e[0]||_e[1])&&(be[0]+=_e[0]*b.pixelRatio,0!==_e[1]&&(be[1]+=(0,screenSizePerspectiveUtils/* applyScaleFactor */.m0)(_e[1],Oe.factorAlignment)*b.pixelRatio),b.unapplyProjection(be,Se)),be[0]+=this.parameters.screenOffset[0]*b.pixelRatio,be[1]+=this.parameters.screenOffset[1]*b.pixelRatio,be[0]=Math.floor(be[0]),be[1]=Math.floor(be[1]);const e=i*_.size;je[0]=_.data[e],je[1]=_.data[e+1],(0,screenSizePerspectiveUtils/* applyPrecomputedScaleFactor */.MD)(je,Oe.factor,je);const t=Le*b.pixelRatio;let a=0;if(v.textureIsSignedDistanceField){a=Math.min(v.outlineSize,.5*je[0])*b.pixelRatio/2}je[0]*=x,je[1]*=F;const n=i*y.size,l=v.rotation+y.data[n];if(ge(T,be[0],be[1],je,t,a,l,v,L)){const e=s.ray;if((0,vec32.t)(Ae,Se,(0,mat4/* invert */.B8)(Fe,b.viewMatrix)),be[0]=T[0],be[1]=T[1],b.unprojectFromRenderScreen(be,Se)){const t=(0,vec3f64/* create */.vt)();(0,vec32.c)(t,e.direction);const i=1/(0,vec32.l)(t);(0,vec32.g)(t,t,i);o((0,vec32.j)(e.origin,Se)*i,t,-1,Ae)}}}}}intersectDraped(e,t,i,s,r){const a=e.attributes.get(VertexAttribute/* VertexAttribute */.r.POSITION),n=e.attributes.get(VertexAttribute/* VertexAttribute */.r.SIZE),o=e.attributes.get(VertexAttribute/* VertexAttribute */.r.ROTATION),l=this.parameters,c=(0,HUDMaterial_glsl.c)(l),f=e.attributes.get(VertexAttribute/* VertexAttribute */.r.FEATUREATTRIBUTE),u=null==f?null:(0,vec4f64/* fromArray */.ci)(f.data,ye),{scaleX:p,scaleY:h}=Xe(u,l,e.screenToWorldRatio),m=Ne*e.screenToWorldRatio;for(let d=0;d<a.data.length/a.size;d++){const t=d*a.size,f=a.data[t],u=a.data[t+1],g=d*n.size;je[0]=n.data[g],je[1]=n.data[g+1];let O=0;if(l.textureIsSignedDistanceField){O=Math.min(l.outlineSize,.5*je[0])*e.screenToWorldRatio/2}je[0]*=p,je[1]*=h;const S=d*o.size,T=l.rotation+o.data[S];ge(i,f,u,je,m,O,T,l,c)&&s(r.distance,r.normal,-1)}}createBufferWriter(){return new Ve}applyShaderOffsetsView(e,t,i,s,r,a,n){const o=me(t,i,r,De);return this._applyVerticalGroundOffsetView(e,o,r,n),qe(this.parameters,n,o,r,a),this._applyPolygonOffsetView(n,o,s[3],r,n),this._applyCenterOffsetView(n,s,n),n}applyShaderOffsetsNDC(e,t,i,s,r){return this._applyCenterOffsetNDC(e,t,i,s),null!=r&&(0,vec32.c)(r,s),this._applyPolygonOffsetNDC(s,t,i,s),s}_applyPolygonOffsetView(t,i,s,r,a){const n=r.aboveGround?1:-1;let o=Math.sign(s);0===o&&(o=n);const l=n*o;if(this.parameters.shaderPolygonOffset<=0)return (0,vec32.c)(a,t);const c=(0,mathUtils/* clamp */.qE)(Math.abs(i.cosAngle),.01,1),f=1-Math.sqrt(1-c*c)/c/r.viewport[2];return (0,vec32.g)(a,t,l>0?f:1/f),a}_applyVerticalGroundOffsetView(e,t,i,s){const r=(0,vec32.l)(e),a=i.aboveGround?1:-1,n=i.computeRenderPixelSizeAtDist(r)*HUD_glsl/* HUDVerticalPixelOffset */.R,o=(0,vec32.g)(Se,t.normal,a*n);return (0,vec32.f)(s,e,o),s}_applyCenterOffsetView(e,t,i){const s="screen"!==this.parameters.centerOffsetUnits;return i!==e&&(0,vec32.c)(i,e),s&&(i[0]+=t[0],i[1]+=t[1],t[2]&&((0,vec32.n)(Te,i),(0,vec32.a)(i,i,(0,vec32.g)(Te,Te,t[2])))),i}_applyCenterOffsetNDC(e,t,i,s){const r="screen"!==this.parameters.centerOffsetUnits;return s!==e&&(0,vec32.c)(s,e),r||(s[0]+=t[0]/i.fullWidth*2,s[1]+=t[1]/i.fullHeight*2),s}_applyPolygonOffsetNDC(e,t,i,s){const r=this.parameters.shaderPolygonOffset;if(e!==s&&(0,vec32.c)(s,e),r){const e=i.aboveGround?1:-1,a=e*Math.sign(t[3]);s[2]-=(a||e)*r}return s}set visible(e){this._visible=e}get visible(){const{color:e,outlineSize:t,outlineColor:i}=this.parameters,s=e[3]>=AlphaCutoff/* alphaCutoff */.Q||t>=AlphaCutoff/* alphaCutoff */.Q&&i[3]>=AlphaCutoff/* alphaCutoff */.Q;return this._visible&&s}createGLMaterial(e){return new pe(e)}calculateRelativeScreenBounds(e,t,i=(0,aaBoundingRect/* create */.vt)()){return he(this.parameters,e,t,i),i[2]=i[0]+e[0],i[3]=i[1]+e[1],i}}class pe extends GLTextureMaterial/* GLTextureMaterial */.m8{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.getTechnique(h,e)}}function he(e,t,i,s){s[0]=e.anchorPosition[0]*-t[0]+e.screenOffset[0]*i,s[1]=e.anchorPosition[1]*-t[1]+e.screenOffset[1]*i}function me(e,t,s,r){return mat4_t(t)&&(t=(0,mat3/* fromMat4 */.z0)(xe,t)),(0,vec32.o)(r.normal,e,t),(0,vec32.t)(r.normal,r.normal,s.viewInverseTransposeMatrix),r.cosAngle=(0,vec32.e)(ve,ze),r}function de(e){const t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],n=e[5],o=e[6],l=e[7],c=e[8],f=1/Math.sqrt(t*t+i*i+s*s),u=1/Math.sqrt(r*r+a*a+n*n),p=1/Math.sqrt(o*o+l*l+c*c);return e[0]=t*f,e[1]=i*f,e[2]=s*f,e[3]=r*u,e[4]=a*u,e[5]=n*u,e[6]=o*p,e[7]=l*p,e[8]=c*p,e}function ge(e,i,s,r,a,l,c,f,u){let p=i-a-r[0]*u[0],h=p+r[0]+2*a,m=s-a-r[1]*u[1],d=m+r[1]+2*a;const g=f.distanceFieldBoundingBox;return f.textureIsSignedDistanceField&&null!=g&&(p+=r[0]*g[0],m+=r[1]*g[1],h-=r[0]*(1-g[2]),d-=r[1]*(1-g[3]),p-=l,h+=l,m-=l,d+=l),(0,vec2/* set */.hZ)(Re,i,s),(0,vec2/* rotate */.e$)(Ee,e,Re,(0,mathUtils/* deg2rad */.kU)(c)),Ee[0]>p&&Ee[0]<h&&Ee[1]>m&&Ee[1]<d}const Oe=new t,Se=(0,vec3f64/* create */.vt)(),Te=(0,vec3f64/* create */.vt)(),be=(0,vec4f64/* create */.vt)(),ve=(0,vec3f64/* create */.vt)(),Ae=(0,vec3f64/* create */.vt)(),Ee=(0,vec2f64/* create */.vt)(),Re=(0,vec2f64/* create */.vt)(),Ie=(0,mat3f64/* create */.vt)(),xe=(0,mat3f64/* create */.vt)(),Fe=(0,mat4f64/* create */.vt)(),Pe=(0,vec4f64/* create */.vt)(),_e=(0,vec3f64/* create */.vt)(),Ce=(0,vec3f64/* create */.vt)(),ye=(0,vec4f64/* create */.vt)(),De={normal:ve,cosAngle:0},Le=1,Ne=2,je=(0,vec2f64/* fromValues */.fA)(0,0),Ue=6,ze=(0,vec3f64/* fromValues */.fA)(0,0,1);class Me extends GLTextureMaterial/* GLTextureMaterialBindParameters */.NV{constructor(){super(...arguments),this.renderOccluded=Material/* RenderOccludedFlag */.m$.Occlude,this.isDecoration=!1,this.color=(0,vec4f64/* freeze */.CN)(1,1,1,1),this.polygonOffset=!1,this.anchorPosition=(0,vec2f64/* fromValues */.fA)(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=(0,vec4f64/* freeze */.CN)(1,1,1,1),this.outlineSize=0,this.distanceFieldBoundingBox=(0,vec4f64/* create */.vt)(),this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.occlusionTest=!0,this.occludedFragmentFade=!1,this.horizonCullingEnabled=!1,this.centerOffsetUnits="world",this.drawAsLabel=!1,this.depthEnabled=!0,this.isFocused=!0,this.focusStyle="bright",this.draped=!1,this.isLabel=!1}}const we=(0,InterleavedLayout/* newLayout */.BP)().vec3f(VertexAttribute/* VertexAttribute */.r.POSITION).vec3f(VertexAttribute/* VertexAttribute */.r.NORMAL).vec2i16(VertexAttribute/* VertexAttribute */.r.UVI).vec4u8(VertexAttribute/* VertexAttribute */.r.COLOR).vec2f(VertexAttribute/* VertexAttribute */.r.SIZE).f32(VertexAttribute/* VertexAttribute */.r.ROTATION).vec4f(VertexAttribute/* VertexAttribute */.r.CENTEROFFSETANDDISTANCE).vec4f(VertexAttribute/* VertexAttribute */.r.FEATUREATTRIBUTE),Be=we.clone().vec4u8(VertexAttribute/* VertexAttribute */.r.OLIDCOLOR);class Ve{constructor(){this.vertexBufferLayout=(0,olidUtils/* olidEnabled */.E)()?Be:we}elementCount(e){return e.get(VertexAttribute/* VertexAttribute */.r.POSITION).indices.length*Ue}write(e,t,i,s,r,a){const{position:n,normal:o,uvi:l,color:c,size:f,rotation:u,centerOffsetAndDistance:p,featureAttribute:h}=r;(0,bufferWriterUtils/* writePosition */.Hk)(i.get(VertexAttribute/* VertexAttribute */.r.POSITION),e,n,a,Ue),(0,bufferWriterUtils/* writeNormal */.p1)(i.get(VertexAttribute/* VertexAttribute */.r.NORMAL),t,o,a,Ue);const m=i.get(VertexAttribute/* VertexAttribute */.r.UVI)?.data;let d=0,g=0,O=-1-HUDMaterial_glsl.f,S=-1-HUDMaterial_glsl.f;m&&m.length>=4&&(d=m[0],g=m[1],O=-1-m[2],S=-1-m[3]);let T=i.get(VertexAttribute/* VertexAttribute */.r.POSITION).indices.length,b=a;for(let E=0;E<T;++E)l.set(b,0,d),l.set(b,1,g),b++,l.set(b,0,O),l.set(b,1,g),b++,l.set(b,0,O),l.set(b,1,S),b++,l.set(b,0,O),l.set(b,1,S),b++,l.set(b,0,d),l.set(b,1,S),b++,l.set(b,0,d),l.set(b,1,g),b++;(0,bufferWriterUtils/* writeColor */.tb)(i.get(VertexAttribute/* VertexAttribute */.r.COLOR),4,c,a,Ue);const{data:v,indices:A}=i.get(VertexAttribute/* VertexAttribute */.r.SIZE);T=A.length,b=a;for(let E=0;E<T;++E){const e=v[2*A[E]],t=v[2*A[E]+1];for(let i=0;i<Ue;++i)f.set(b,0,e),f.set(b,1,t),b++}if((0,bufferWriterUtils/* writeBufferFloat */.uO)(i.get(VertexAttribute/* VertexAttribute */.r.ROTATION),u,a,Ue),i.get(VertexAttribute/* VertexAttribute */.r.CENTEROFFSETANDDISTANCE)?(0,bufferWriterUtils/* writeBufferVec4 */.Ut)(i.get(VertexAttribute/* VertexAttribute */.r.CENTEROFFSETANDDISTANCE),p,a,Ue):(0,bufferWriterUtils/* writeBufferVec4Zeros */.Pq)(p,a,T*Ue),i.get(VertexAttribute/* VertexAttribute */.r.FEATUREATTRIBUTE)?(0,bufferWriterUtils/* writeBufferVec4 */.Ut)(i.get(VertexAttribute/* VertexAttribute */.r.FEATUREATTRIBUTE),h,a,Ue):(0,bufferWriterUtils/* writeBufferVec4Zeros */.Pq)(h,a,T*Ue),null!=s){const e=i.get(VertexAttribute/* VertexAttribute */.r.POSITION)?.indices;if(e){const t=e.length,i=r.getField(VertexAttribute/* VertexAttribute */.r.OLIDCOLOR,BufferView/* BufferViewVec4u8 */.XP);(0,bufferWriterUtils/* writeOlidColor */.vx)(s,i,t,a,Ue)}}return{numVerticesPerItem:Ue,numItems:T}}intersect(e,t,i,s,a,n,o){const{options:{selectionMode:l,hud:c,excludeLabels:T},point:b,camera:v}=s;if(!l||!c||T&&t.isLabel||!b)return;const E=this.vertexBufferLayout.createView(e),R=E.getField(VertexAttribute/* VertexAttribute */.r.POSITION,BufferView/* BufferViewVec3f */.xs),I=E.getField(VertexAttribute/* VertexAttribute */.r.NORMAL,BufferView/* BufferViewVec3f */.xs),x=E.getField(VertexAttribute/* VertexAttribute */.r.ROTATION,BufferView/* BufferViewFloat */.Y$),F=E.getField(VertexAttribute/* VertexAttribute */.r.SIZE,BufferView/* BufferViewVec2f */.gH),P=E.getField(VertexAttribute/* VertexAttribute */.r.FEATUREATTRIBUTE,BufferView/* BufferViewVec4f */.Eq),_=E.getField(VertexAttribute/* VertexAttribute */.r.CENTEROFFSETANDDISTANCE,BufferView/* BufferViewVec4f */.Eq),N="screen"===t.centerOffsetUnits,j=(0,HUDMaterial_glsl.c)(t);if(null==R||null==I||null==x||null==F||null==_||null==v)return;const U=null==P?null:P.getVec(0,ye),{scaleX:z,scaleY:M}=Xe(U,t,v.pixelRatio),w=R.count/Ue;for(let C=0;C<w;C++){const e=C*Ue;if(R.getVec(e,Se),null!=i&&(0,vec32.f)(Se,Se,i),(0,vec32.t)(Se,Se,v.viewMatrix),_.getVec(e,Pe),(0,vec32.i)(_e,Pe[0],Pe[1],Pe[2]),!N&&(Se[0]+=_e[0],Se[1]+=_e[1],0!==_e[2])){const e=_e[2];(0,vec32.n)(_e,Se),(0,vec32.d)(Se,Se,(0,vec32.g)(_e,_e,e))}if(I.getVec(e,Te),me(Te,Ie,v,De),qe(t,Se,De,v,Oe),v.applyProjection(Se,be),be[0]>-1){N&&(_e[0]||_e[1])&&(be[0]+=_e[0]*v.pixelRatio,0!==_e[1]&&(be[1]+=(0,screenSizePerspectiveUtils/* applyScaleFactor */.m0)(_e[1],Oe.factorAlignment)*v.pixelRatio),v.unapplyProjection(be,Se)),be[0]+=t.screenOffset[0]*v.pixelRatio,be[1]+=t.screenOffset[1]*v.pixelRatio,be[0]=Math.floor(be[0]),be[1]=Math.floor(be[1]),F.getVec(e,je),(0,screenSizePerspectiveUtils/* applyPrecomputedScaleFactor */.MD)(je,Oe.factor,je);const i=Le*v.pixelRatio;let a=0;if(t.textureIsSignedDistanceField){a=Math.min(t.outlineSize,.5*je[0])*v.pixelRatio/2}je[0]*=z,je[1]*=M;const n=x.get(e),l=t.rotation+n;if(ge(b,be[0],be[1],je,i,a,l,t,j)){const e=s.ray;if((0,vec32.t)(Ae,Se,(0,mat4/* invert */.B8)(Fe,v.viewMatrix)),be[0]=b[0],be[1]=b[1],v.unprojectFromRenderScreen(be,Se)){const t=(0,vec3f64/* create */.vt)();(0,vec32.c)(t,e.direction);const i=1/(0,vec32.l)(t);(0,vec32.g)(t,t,i);o((0,vec32.j)(e.origin,Se)*i,t,C,Ae)}}}}}}function Xe(e,t,i){return null==e||null==t.vvSize?{scaleX:i,scaleY:i}:((0,FastSymbolUpdates/* evaluateModelTransformScale */.VC)(Ce,t,e),{scaleX:Ce[0]*i,scaleY:Ce[1]*i})}function qe(e,t,i,s,r){if(!e.verticalOffset?.screenLength){if(e.screenSizePerspective||e.screenSizePerspectiveAlignment){Ge(e,r,(0,vec32.l)(t),i.cosAngle)}else r.factor.scale=1,r.factorAlignment.scale=1;return t}const a=(0,vec32.l)(t),n=e.screenSizePerspectiveAlignment??e.screenSizePerspective,o=(0,MaterialUtil/* verticalOffsetAtDistance */.kE)(s,a,e.verticalOffset,i.cosAngle,n);return Ge(e,r,a,i.cosAngle),(0,vec32.g)(i.normal,i.normal,o),(0,vec32.f)(t,t,i.normal)}function Ge(e,t,i,s){null!=e.screenSizePerspective?(0,screenSizePerspectiveUtils/* precomputeScaleFactor */.cJ)(s,i,e.screenSizePerspective,t.factor):(t.factor.scale=1,t.factor.factor=0,t.factor.minScaleFactor=0),null!=e.screenSizePerspectiveAlignment?(0,screenSizePerspectiveUtils/* precomputeScaleFactor */.cJ)(s,i,e.screenSizePerspectiveAlignment,t.factorAlignment):(t.factorAlignment.factor=t.factor.factor,t.factorAlignment.scale=t.factor.scale,t.factorAlignment.minScaleFactor=t.factor.minScaleFactor)}


/***/ }),

/***/ 1563:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ a)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var a;!function(a){a[a.Horizontal=0]="Horizontal",a[a.Vertical=1]="Vertical",a[a.Cross=2]="Cross",a[a.ForwardDiagonal=3]="ForwardDiagonal",a[a.BackwardDiagonal=4]="BackwardDiagonal",a[a.DiagonalCross=5]="DiagonalCross",a[a.COUNT=6]="COUNT"}(a||(a={}));


/***/ }),

/***/ 52873:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58359);
/* harmony import */ var _lib_Material_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45722);
/* harmony import */ var _lib_RayIntersections_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6833);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class r extends _lib_Material_js__WEBPACK_IMPORTED_MODULE_1__/* .Material */ .im{constructor(){super(...arguments),this._pp0=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__/* .fromValues */ .fA)(0,0,1),this._pp1=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__/* .fromValues */ .fA)(0,0,0)}intersect(t,i,r,s,e,o){return (0,_lib_RayIntersections_js__WEBPACK_IMPORTED_MODULE_2__/* .intersectTriangleGeometry */ .Uy)(t,r,s,e,void 0,o)}intersectDraped(t,i,r,s){return this._pp0[0]=this._pp1[0]=r[0],this._pp0[1]=this._pp1[1]=r[1],(0,_lib_RayIntersections_js__WEBPACK_IMPORTED_MODULE_2__/* .intersectTriangleGeometry */ .Uy)(t,i,this._pp0,this._pp1,void 0,s)}}


/***/ }),

/***/ 86868:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Xq: () => (/* binding */ n),
/* harmony export */   wk: () => (/* binding */ h)
/* harmony export */ });
/* unused harmony export getStipplePatternForPatternStyle */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const t={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},o={dash:t.dash,"dash-dot":[...t.dash,...t.dot],dot:t.dot,"long-dash":t["long-dash"],"long-dash-dot":[...t["long-dash"],...t.dot],"long-dash-dot-dot":[...t["long-dash"],...t.dot,...t.dot],none:null,"short-dash":t["short-dash"],"short-dash-dot":[...t["short-dash"],...t["short-dot"]],"short-dash-dot-dot":[...t["short-dash"],...t["short-dot"],...t["short-dot"]],"short-dot":t["short-dot"],solid:null},d=8;function s(t,o){return null==t?t:{pattern:t.slice(),pixelRatio:o}}function h(t){return{pattern:[t,t],pixelRatio:2}}function n(t){return"style"===t?.type?l(t.style):null}function l(t){return null!=t?s(o[t],d):null}


/***/ }),

/***/ 89423:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ E)
/* harmony export */ });
/* unused harmony export tracer */
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(539);
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86942);
/* harmony import */ var _checkWebGLError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16541);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41746);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const h=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.getLogger("esri.views.webgl.BufferObject"),c=null;class E{static createIndex(t,e,i){return new E(t,_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .BufferType */ .NZ.ELEMENT_ARRAY_BUFFER,e,i)}static createVertex(t,e,i){return new E(t,_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .BufferType */ .NZ.ARRAY_BUFFER,e,i)}static createUniform(t,e,i){return new E(t,_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .BufferType */ .NZ.UNIFORM_BUFFER,e,i)}static createPixelPack(t,e=_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .Usage */ ._U.STREAM_READ,i){const s=new E(t,_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .BufferType */ .NZ.PIXEL_PACK_BUFFER,e);return i&&s.setSize(i),s}static createPixelUnpack(t,e=_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .Usage */ ._U.STREAM_DRAW,i){return new E(t,_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .BufferType */ .NZ.PIXEL_UNPACK_BUFFER,e,i)}static createTransformFeedback(t,e=_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .Usage */ ._U.STATIC_DRAW,i){const s=new E(t,_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .BufferType */ .NZ.TRANSFORM_FEEDBACK_BUFFER,e);return s.setSize(i),s}constructor(t,e,i,s){this._context=t,this.bufferType=e,this.usage=i,this._glName=null,this._size=-1,this._indexType=void 0,t.instanceCounter.increment(_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .ResourceType */ .vt.BufferObject,this),this._glName=this._context.gl.createBuffer(),(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_4__/* .checkWebGLError */ .Y2)(this._context.gl),s&&this.setData(s)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get usedMemory(){if(this.bufferType===_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .BufferType */ .NZ.ELEMENT_ARRAY_BUFFER){if(this._indexType===_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .DataType */ .pe.UNSIGNED_INT)return 4*this._size;if(this._indexType===_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .DataType */ .pe.UNSIGNED_SHORT)return 2*this._size}return this._size}get _isVAOAware(){return this.bufferType===_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .BufferType */ .NZ.ELEMENT_ARRAY_BUFFER||this.bufferType===_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .BufferType */ .NZ.ARRAY_BUFFER}dispose(){if(this._context?.gl){if(this._glName){this._context.gl.deleteBuffer(this._glName),this._glName=null}this._context.instanceCounter.decrement(_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .ResourceType */ .vt.BufferObject,this),this._context=null}else this._glName&&h().warn("Leaked WebGL buffer object")}setSize(t,e=null){if(this.bufferType===_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .BufferType */ .NZ.ELEMENT_ARRAY_BUFFER&&null!=e)switch(this._indexType=e,e){case _enums_js__WEBPACK_IMPORTED_MODULE_5__/* .DataType */ .pe.UNSIGNED_SHORT:t*=2;break;case _enums_js__WEBPACK_IMPORTED_MODULE_5__/* .DataType */ .pe.UNSIGNED_INT:t*=4}this._setBufferData(t)}setData(t){if(!t)return;let e=t.byteLength;this.bufferType===_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .BufferType */ .NZ.ELEMENT_ARRAY_BUFFER&&((0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_3__/* .isUint8Array */ .mg)(t)?this._indexType=_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .DataType */ .pe.UNSIGNED_BYTE:(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_3__/* .isUint16Array */ .jq)(t)?(e/=2,this._indexType=_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .DataType */ .pe.UNSIGNED_SHORT):(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_3__/* .isUint32Array */ .XJ)(t)&&(e/=4,this._indexType=_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .DataType */ .pe.UNSIGNED_INT)),this._setBufferData(e,t)}_setBufferData(t,e=null){this._size=t;const i=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const s=this._context.gl;null!=e?s.bufferData(this.bufferType,e,this.usage):s.bufferData(this.bufferType,t,this.usage),(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_4__/* .checkWebGLError */ .Y2)(s),this._isVAOAware&&this._context.bindVAO(i)}setSubData(t,e,i,s){if(!t)return;const r=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const{gl:_}=this._context;_.bufferSubData(this.bufferType,e*t.BYTES_PER_ELEMENT,t,i,s-i),(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_4__/* .checkWebGLError */ .Y2)(_),this._isVAOAware&&this._context.bindVAO(r)}getSubData(t,e=0,i,s){if(i<0||s<0)return;const r=o(t)?t.BYTES_PER_ELEMENT:1;if(r*((i??0)+(s??0))>t.byteLength)return;e+r*(s??0)>this.usedMemory&&h().warn("Potential problem getting subdata: requested data exceeds buffer size!");const n=this._context.gl;this.bufferType===_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .BufferType */ .NZ.TRANSFORM_FEEDBACK_BUFFER?(this._context.bindBuffer(this,_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .BufferType */ .NZ.TRANSFORM_FEEDBACK_BUFFER),n.getBufferSubData(_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .BufferType */ .NZ.TRANSFORM_FEEDBACK_BUFFER,e,t,i,s),this._context.unbindBuffer(_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .BufferType */ .NZ.TRANSFORM_FEEDBACK_BUFFER)):(this._context.bindBuffer(this,_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .BufferType */ .NZ.COPY_READ_BUFFER),n.getBufferSubData(_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .BufferType */ .NZ.COPY_READ_BUFFER,e,t,i,s),this._context.unbindBuffer(_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .BufferType */ .NZ.COPY_READ_BUFFER))}async getSubDataAsync(t,e=0,i,s){await this._context.clientWaitAsync(),this.getSubData(t,e,i,s)}}function o(e){return (0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArrayLike */ .Xj)(e)}


/***/ }),

/***/ 80976:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(539);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6267);
/* harmony import */ var _core_memoryEstimations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4754);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41746);
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19282);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const n=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getLogger("esri.views.webgl.VertexArrayObject");let o=class{constructor(e,t,i,r,s=null){this._context=e,this._locations=t,this._layout=i,this._buffers=r,this._indexBuffer=s,this._glName=null,this._initialized=!1}get glName(){return this._glName}get context(){return this._context}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}getByteLength(e){return this._buffers.get(e)?.usedMemory??0}get layout(){return this._layout}get locations(){return this._locations}get usedMemory(){return Array.from(this._buffers.values()).reduce(((e,t)=>e+t.usedMemory),this._indexBuffer?.usedMemory??0+(this._buffers.size+(this._indexBuffer?1:0))*_core_memoryEstimations_js__WEBPACK_IMPORTED_MODULE_1__/* .baseTypedArrayMemory */ .i5)}get cachedMemory(){return this.usedMemory}dispose(){this._context?(this._context.getBoundVAO()===this&&this._context.bindVAO(null),this._buffers.forEach((e=>e.dispose())),this._buffers.clear(),this._indexBuffer=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__/* .disposeMaybe */ .WD)(this._indexBuffer),this.disposeVAOOnly()):(this._glName||this._buffers.size>0)&&n().warn("Leaked WebGL VAO")}disposeVAOOnly(){this._glName&&(this._context.gl.deleteVertexArray(this._glName),this._glName=null,this._context.instanceCounter.decrement(_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .ResourceType */ .vt.VertexArrayObject,this)),this._context=null}initialize(){if(this._initialized)return;const{gl:e}=this._context,t=e.createVertexArray();e.bindVertexArray(t),this._bindLayout(),e.bindVertexArray(null),this._glName=t,this._context.instanceCounter.increment(_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .ResourceType */ .vt.VertexArrayObject,this),this._initialized=!0}bind(){this.initialize(),this._context.gl.bindVertexArray(this.glName)}_bindLayout(){const{_buffers:e,_layout:t,_indexBuffer:i}=this;e||n().error("Vertex buffer dictionary is empty!");const r=this._context.gl;this._buffers.forEach(((e,i)=>{const r=t.get(i);r?(0,_Util_js__WEBPACK_IMPORTED_MODULE_3__/* .bindVertexBufferLayout */ .yu)(this._context,this._locations,e,r):n().error("Vertex element descriptor is empty!")})),null!=i&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,i.glName)}unbind(){this.initialize(),this._context.gl.bindVertexArray(null)}};


/***/ })

};
;