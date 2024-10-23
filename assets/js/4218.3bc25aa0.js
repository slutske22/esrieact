"use strict";
exports.id = 4218;
exports.ids = [4218];
exports.modules = {

/***/ 90618:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ J),
/* harmony export */   b: () => (/* binding */ H)
/* harmony export */ });
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40641);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26163);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55274);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1110);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66012);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24682);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81283);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99915);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67691);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26139);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(39739);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(82089);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(80333);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(16045);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_ComputeNormalTexture_glsl_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(76080);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(26011);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(21549);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(696);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(80600);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(46971);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(17666);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(39486);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(64062);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_TextureTransformUV_glsl_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(25541);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(71389);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(33448);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(29724);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(66676);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(63592);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(60840);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(1411);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(35449);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(99152);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(4274);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(79856);
/* harmony import */ var _views_3d_webgl_engine_lib_TransparencyPassType_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(81868);
/* harmony import */ var _views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(50645);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function H(H){const J=new _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_32__/* .ShaderBuilder */ .N5,{vertex:K,fragment:Q,varyings:X}=J;if((0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_27__/* .addProjViewLocalOrigin */ .NB)(K,H),J.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__/* .PositionAttribute */ .I),X.add("vpos","vec3"),J.include(_views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_24__/* .VisualVariables */ .A,H),J.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_5__/* .InstancedDoublePrecision */ .BK,H),J.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_12__/* .VerticalOffset */ .G,H),H.hasColorTextureTransform&&J.include(_views_3d_webgl_engine_core_shaderLibrary_shading_TextureTransformUV_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .colorTextureUV */ .q2),H.output===_views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_2__/* .ShaderOutput */ .V.Color||H.output===_views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_2__/* .ShaderOutput */ .V.Alpha){H.hasNormalTextureTransform&&J.include(_views_3d_webgl_engine_core_shaderLibrary_shading_TextureTransformUV_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .normalTextureUV */ .Sx),H.hasEmissionTextureTransform&&J.include(_views_3d_webgl_engine_core_shaderLibrary_shading_TextureTransformUV_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .emissiveTextureUV */ .MU),H.hasOcclusionTextureTransform&&J.include(_views_3d_webgl_engine_core_shaderLibrary_shading_TextureTransformUV_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .occlusionTextureUV */ .O1),H.hasMetallicRoughnessTextureTransform&&J.include(_views_3d_webgl_engine_core_shaderLibrary_shading_TextureTransformUV_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .metallicRoughnessTextureUV */ .QM),(0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_27__/* .addCameraPosition */ .yu)(K,H),J.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .NormalAttribute */ .Y,H),J.include(_views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .Transform */ .d,H);const o=H.normalType===_views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .NormalType */ .W.Attribute||H.normalType===_views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .NormalType */ .W.Compressed;o&&H.offsetBackfaces&&J.include(_views_3d_webgl_engine_core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .Offset */ .M),J.include(_views_3d_webgl_engine_core_shaderLibrary_shading_ComputeNormalTexture_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .ComputeNormalTexture */ .W,H),J.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .VertexNormal */ .Mh,H),H.instancedColor&&J.attributes.add(_views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_35__/* .VertexAttribute */ .r.INSTANCECOLOR,"vec4"),X.add("vPositionLocal","vec3"),J.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_9__/* .TextureCoordinateAttribute */ .U,H),J.include(_views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .ForwardLinearDepth */ .oD,H),J.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_8__/* .SymbolColor */ .K,H),J.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_10__/* .VertexColor */ .c,H),K.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_29__/* .Float4PassUniform */ .E("externalColor",(e=>e.externalColor))),X.add("vcolorExt","vec4"),H.multipassEnabled&&X.add("depth","float"),K.code.add((0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${H.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H.float(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_36__/* .symbolAlphaCutoff */ .y)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${o?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${H.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${o&&H.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${H.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${H.hasColorTextureTransform?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`forwardColorUV();`:""}
        ${H.hasNormalTextureTransform?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`forwardNormalUV();`:""}
        ${H.hasEmissionTextureTransform?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`forwardEmissiveUV();`:""}
        ${H.hasOcclusionTextureTransform?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`forwardOcclusionUV();`:""}
        ${H.hasMetallicRoughnessTextureTransform?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`forwardMetallicRoughnessUV();`:""}
      }
    `)}switch(H.output){case _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_2__/* .ShaderOutput */ .V.Alpha:J.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .SliceDraw */ .HQ,H),J.include(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_25__/* .DiscardOrAdjustAlphaPass */ .S,H),J.include(_views_3d_webgl_engine_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_18__/* .multipassTerrainTest */ .Q,H),Q.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_30__/* .FloatPassUniform */ .m("opacity",(e=>e.opacity)),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_30__/* .FloatPassUniform */ .m("layerOpacity",(e=>e.layerOpacity))),H.hasColorTexture&&Q.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_33__/* .Texture2DPassUniform */ .N("tex",(e=>e.texture))),Q.include(_views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_26__/* .MixExternalColor */ .N),Q.code.add((0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`
      void main() {
        discardBySlice(vpos);
        ${H.multipassEnabled?"terrainDepthTest(depth);":""}
        ${H.hasColorTexture?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`
                vec4 texColor = texture(tex, ${H.hasColorTextureTransform?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`colorUV`:(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`vuv0`});
                ${H.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`vec4 texColor = vec4(1.0);`}
        ${H.hasVertexColors?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `);break;case _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_2__/* .ShaderOutput */ .V.Color:J.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .SliceDraw */ .HQ,H),J.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_16__/* .EvaluateSceneLighting */ .kA,H),J.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_15__/* .EvaluateAmbientOcclusion */ .n,H),J.include(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_25__/* .DiscardOrAdjustAlphaPass */ .S,H),J.include(H.instancedDoublePrecision?_views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_22__/* .ReadShadowMapPass */ .G:_views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_22__/* .ReadShadowMapDraw */ .Bz,H),J.include(_views_3d_webgl_engine_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_18__/* .multipassTerrainTest */ .Q,H),(0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_27__/* .addCameraPosition */ .yu)(Q,H),Q.uniforms.add(K.uniforms.get("localOrigin"),new _views_3d_webgl_engine_core_shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_28__/* .Float3PassUniform */ .t("ambient",(e=>e.ambient)),new _views_3d_webgl_engine_core_shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_28__/* .Float3PassUniform */ .t("diffuse",(e=>e.diffuse)),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_30__/* .FloatPassUniform */ .m("opacity",(e=>e.opacity)),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_30__/* .FloatPassUniform */ .m("layerOpacity",(e=>e.layerOpacity))),H.hasColorTexture&&Q.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_33__/* .Texture2DPassUniform */ .N("tex",(e=>e.texture))),J.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_21__/* .PhysicallyBasedRenderingParameters */ ._Z,H),J.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_20__/* .PhysicallyBasedRendering */ .c,H),Q.include(_views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_26__/* .MixExternalColor */ .N),J.include(_views_3d_webgl_engine_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_19__/* .Normals */ .r,H),(0,_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_16__/* .addAmbientBoostFactor */ .a8)(Q),(0,_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_16__/* .addLightingGlobalFactor */ .eU)(Q),(0,_views_3d_webgl_engine_core_shaderLibrary_shading_MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_17__/* .addMainLightIntensity */ .O4)(Q),Q.code.add((0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`
      void main() {
        discardBySlice(vpos);
        ${H.multipassEnabled?"terrainDepthTest(depth);":""}
        ${H.hasColorTexture?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`
                vec4 texColor = texture(tex, ${H.hasColorTextureTransform?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`colorUV`:(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`vuv0`});
                ${H.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${H.normalType===_views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .NormalType */ .W.ScreenDerivative?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${H.pbrMode===_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_21__/* .PBRMode */ .A9.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${H.receiveShadows?"readShadowMap(vpos, linearDepth)":H.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${H.hasVertexColors?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${H.hasNormalTexture?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`
                mat3 tangentSpace = ${H.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${H.hasNormalTextureTransform?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`normalUV`:"vuv0"});`:(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${H.spherical?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`normalize(posWorld);`:(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`vec3(0.0, 0.0, 1.0);`}

        ${H.snowCover?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${H.pbrMode===_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_21__/* .PBRMode */ .A9.Normal||H.pbrMode===_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_21__/* .PBRMode */ .A9.Schematic?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${H.snowCover?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${H.transparencyPassType===_views_3d_webgl_engine_lib_TransparencyPassType_js__WEBPACK_IMPORTED_MODULE_34__/* .TransparencyPassType */ .y.Color?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `)}return J.include(_views_3d_webgl_engine_core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .DefaultMaterialAuxiliaryPasses */ .E,H),J}const J=Object.freeze(Object.defineProperty({__proto__:null,build:H},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 3458:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ R),
/* harmony export */   b: () => (/* binding */ I)
/* harmony export */ });
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40641);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26163);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55274);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1110);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66012);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24682);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81283);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99915);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67691);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26139);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(39739);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80333);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(16045);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(26011);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(21549);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(696);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(80600);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(17666);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(39486);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(64062);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(71389);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(33448);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(29724);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(66676);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(63592);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(60840);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(1411);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(35449);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(99152);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(4274);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(79856);
/* harmony import */ var _views_3d_webgl_engine_lib_TransparencyPassType_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(81868);
/* harmony import */ var _views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(50645);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function I(I){const R=new _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_28__/* .ShaderBuilder */ .N5,{vertex:z,fragment:k,varyings:U}=R;return (0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .addProjViewLocalOrigin */ .NB)(z,I),R.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__/* .PositionAttribute */ .I),U.add("vpos","vec3"),R.include(_views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_20__/* .VisualVariables */ .A,I),R.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_5__/* .InstancedDoublePrecision */ .BK,I),R.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .VerticalOffset */ .G,I),I.output!==_views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_2__/* .ShaderOutput */ .V.Color&&I.output!==_views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_2__/* .ShaderOutput */ .V.Alpha||((0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .addCameraPosition */ .yu)(R.vertex,I),R.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .NormalAttribute */ .Y,I),R.include(_views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .Transform */ .d,I),I.offsetBackfaces&&R.include(_views_3d_webgl_engine_core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .Offset */ .M),I.instancedColor&&R.attributes.add(_views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_31__/* .VertexAttribute */ .r.INSTANCECOLOR,"vec4"),U.add("vNormalWorld","vec3"),U.add("localvpos","vec3"),I.multipassEnabled&&U.add("depth","float"),R.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_9__/* .TextureCoordinateAttribute */ .U,I),R.include(_views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .ForwardLinearDepth */ .oD,I),R.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_8__/* .SymbolColor */ .K,I),R.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_10__/* .VertexColor */ .c,I),z.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_25__/* .Float4PassUniform */ .E("externalColor",(e=>e.externalColor))),U.add("vcolorExt","vec4"),z.code.add((0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_27__/* .glsl */ .H)`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${I.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_27__/* .glsl */ .H.float(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_32__/* .symbolAlphaCutoff */ .y)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = getVertexInLocalOriginSpace();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${I.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${I.multipassEnabled?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_27__/* .glsl */ .H)`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),I.output===_views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_2__/* .ShaderOutput */ .V.Alpha&&(R.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .SliceDraw */ .HQ,I),R.include(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_21__/* .DiscardOrAdjustAlphaPass */ .S,I),R.include(_views_3d_webgl_engine_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_16__/* .multipassTerrainTest */ .Q,I),k.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_26__/* .FloatPassUniform */ .m("opacity",(e=>e.opacity)),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_26__/* .FloatPassUniform */ .m("layerOpacity",(e=>e.layerOpacity))),I.hasColorTexture&&k.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_29__/* .Texture2DPassUniform */ .N("tex",(e=>e.texture))),k.include(_views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_22__/* .MixExternalColor */ .N),k.code.add((0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_27__/* .glsl */ .H)`
      void main() {
        discardBySlice(vpos);
        ${I.multipassEnabled?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_27__/* .glsl */ .H)`terrainDepthTest(depth);`:""}
        ${I.hasColorTexture?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_27__/* .glsl */ .H)`
                vec4 texColor = texture(tex, ${I.hasColorTextureTransform?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_27__/* .glsl */ .H)`colorUV`:(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_27__/* .glsl */ .H)`vuv0`});
                ${I.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_27__/* .glsl */ .H)`vec4 texColor = vec4(1.0);`}
        ${I.hasVertexColors?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_27__/* .glsl */ .H)`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_27__/* .glsl */ .H)`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        fragColor = vec4(opacity_);
      }
    `)),I.output===_views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_2__/* .ShaderOutput */ .V.Color&&(R.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .SliceDraw */ .HQ,I),R.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .EvaluateSceneLighting */ .kA,I),R.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .EvaluateAmbientOcclusion */ .n,I),R.include(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_21__/* .DiscardOrAdjustAlphaPass */ .S,I),R.include(I.instancedDoublePrecision?_views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_19__/* .ReadShadowMapPass */ .G:_views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_19__/* .ReadShadowMapDraw */ .Bz,I),R.include(_views_3d_webgl_engine_core_shaderLibrary_shading_MultipassTerrainTest_glsl_js__WEBPACK_IMPORTED_MODULE_16__/* .multipassTerrainTest */ .Q,I),(0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .addCameraPosition */ .yu)(R.fragment,I),(0,_views_3d_webgl_engine_core_shaderLibrary_shading_MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_15__/* .addMainLightDirection */ .Gc)(k),(0,_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .addAmbientBoostFactor */ .a8)(k),(0,_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .addLightingGlobalFactor */ .eU)(k),k.uniforms.add(z.uniforms.get("localOrigin"),z.uniforms.get("view"),new _views_3d_webgl_engine_core_shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_24__/* .Float3PassUniform */ .t("ambient",(e=>e.ambient)),new _views_3d_webgl_engine_core_shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_24__/* .Float3PassUniform */ .t("diffuse",(e=>e.diffuse)),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_26__/* .FloatPassUniform */ .m("opacity",(e=>e.opacity)),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_26__/* .FloatPassUniform */ .m("layerOpacity",(e=>e.layerOpacity))),I.hasColorTexture&&k.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_29__/* .Texture2DPassUniform */ .N("tex",(e=>e.texture))),R.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_18__/* .PhysicallyBasedRenderingParameters */ ._Z,I),R.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_17__/* .PhysicallyBasedRendering */ .c,I),k.include(_views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_22__/* .MixExternalColor */ .N),(0,_views_3d_webgl_engine_core_shaderLibrary_shading_MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_15__/* .addMainLightIntensity */ .O4)(k),k.code.add((0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_27__/* .glsl */ .H)`
      void main() {
        discardBySlice(vpos);
        ${I.multipassEnabled?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_27__/* .glsl */ .H)`terrainDepthTest(depth);`:""}
        ${I.hasColorTexture?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_27__/* .glsl */ .H)`
                vec4 texColor = texture(tex, ${I.hasColorTextureTransform?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_27__/* .glsl */ .H)`colorUV`:(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_27__/* .glsl */ .H)`vuv0`});
                ${I.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_27__/* .glsl */ .H)`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${I.pbrMode===_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_18__/* .PBRMode */ .A9.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${I.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":I.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${I.hasVertexColors?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_27__/* .glsl */ .H)`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_27__/* .glsl */ .H)`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${I.snowCover?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_27__/* .glsl */ .H)`albedo = mix(albedo, vec3(1), 0.9);`:(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_27__/* .glsl */ .H)``}
        ${(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_27__/* .glsl */ .H)`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${I.pbrMode===_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_18__/* .PBRMode */ .A9.Normal||I.pbrMode===_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_18__/* .PBRMode */ .A9.Schematic?I.spherical?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_27__/* .glsl */ .H)`vec3 normalGround = normalize(vpos + localOrigin);`:(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_27__/* .glsl */ .H)`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_27__/* .glsl */ .H)``}
        ${I.pbrMode===_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_18__/* .PBRMode */ .A9.Normal||I.pbrMode===_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_18__/* .PBRMode */ .A9.Schematic?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_27__/* .glsl */ .H)`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${I.snowCover?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_27__/* .glsl */ .H)`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_27__/* .glsl */ .H)`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${I.transparencyPassType===_views_3d_webgl_engine_lib_TransparencyPassType_js__WEBPACK_IMPORTED_MODULE_30__/* .TransparencyPassType */ .y.Color?(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_27__/* .glsl */ .H)`fragColor = premultiplyAlpha(fragColor);`:(0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_27__/* .glsl */ .H)``}
      }
    `)),R.include(_views_3d_webgl_engine_core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_12__/* .DefaultMaterialAuxiliaryPasses */ .E,I),R}const R=Object.freeze(Object.defineProperty({__proto__:null,build:I},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 51522:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ p),
/* harmony export */   b: () => (/* binding */ f),
/* harmony export */   g: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _vec2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58680);
/* harmony import */ var _vec2f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78286);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ScreenSpacePass_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16961);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67726);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_CameraSpace_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1062);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54473);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35449);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99152);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4274);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79856);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const u=16;function f(){const r=new _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_8__/* .ShaderBuilder */ .N5,f=r.fragment;return r.include(_views_3d_webgl_engine_core_shaderLibrary_ScreenSpacePass_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .ScreenSpacePass */ .c),f.include(_views_3d_webgl_engine_core_shaderLibrary_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .ReadLinearDepth */ .D),r.include(_views_3d_webgl_engine_core_shaderLibrary_util_CameraSpace_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .CameraSpace */ .Ir),f.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_6__/* .FloatPassUniform */ .m("radius",((e,r)=>d(r.camera)))),f.code.add((0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__/* .glsl */ .H)`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),f.code.add((0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__/* .glsl */ .H)`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),f.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_5__/* .Float2PassUniform */ .G("nearFar",((e,r)=>r.camera.nearFar)),new _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_9__/* .Texture2DPassUniform */ .N("normalMap",(e=>e.normalTexture)),new _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_9__/* .Texture2DPassUniform */ .N("depthMap",(e=>e.depthTexture)),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_6__/* .FloatPassUniform */ .m("projScale",(e=>e.projScale)),new _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_9__/* .Texture2DPassUniform */ .N("rnm",(e=>e.noiseTexture)),new _views_3d_webgl_engine_core_shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_5__/* .Float2PassUniform */ .G("rnmScale",((r,t)=>(0,_vec2_js__WEBPACK_IMPORTED_MODULE_0__.s)(m,t.camera.fullWidth/r.noiseTexture.descriptor.width,t.camera.fullHeight/r.noiseTexture.descriptor.height))),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_6__/* .FloatPassUniform */ .m("intensity",(e=>e.intensity)),new _views_3d_webgl_engine_core_shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_5__/* .Float2PassUniform */ .G("screenSize",((r,t)=>(0,_vec2_js__WEBPACK_IMPORTED_MODULE_0__.s)(m,t.camera.fullWidth,t.camera.fullHeight)))),r.outputs.add("fragOcclusion","float"),f.code.add((0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__/* .glsl */ .H)`
    void main(void) {
      fillSphere();
      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth > nearFar.y || -currentPixelDepth < nearFar.x) {
        fragOcclusion = 0.0;
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w < 0.5;

      float sum = 0.0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__/* .glsl */ .H.int(u)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          if (texture(normalMap, tcTap).w < 0.5) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__/* .glsl */ .H.int(u)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

      fragOcclusion = A;
    }
  `),r}function d(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const m=(0,_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__.a)(),p=Object.freeze(Object.defineProperty({__proto__:null,build:f,getRadius:d},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 45789:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ c),
/* harmony export */   b: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21839);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ScreenSpacePass_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16961);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67726);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float2DrawUniform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96320);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54473);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35449);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99152);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4274);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52293);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79856);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const f=4;function u(){const u=new _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_7__/* .ShaderBuilder */ .N5,c=u.fragment;u.include(_views_3d_webgl_engine_core_shaderLibrary_ScreenSpacePass_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .ScreenSpacePass */ .c);const m=(f+1)/2,p=1/(2*m*m);return c.include(_views_3d_webgl_engine_core_shaderLibrary_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .ReadLinearDepth */ .D),c.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_9__/* .Texture2DPassUniform */ .N("depthMap",(e=>e.depthTexture)),new _views_3d_webgl_engine_core_shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_8__/* .Texture2DDrawUniform */ .o("tex",(e=>e.colorTexture)),new _views_3d_webgl_engine_core_shaderModules_Float2DrawUniform_js__WEBPACK_IMPORTED_MODULE_3__/* .Float2DrawUniform */ .t("blurSize",(e=>e.blurSize)),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_5__/* .FloatPassUniform */ .m("projScale",((r,o)=>{const t=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_0__.o)(o.camera.eye,o.camera.center);return t>5e4?Math.max(0,r.projScale-(t-5e4)):r.projScale})),new _views_3d_webgl_engine_core_shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_4__/* .Float2PassUniform */ .G("nearFar",((e,r)=>r.camera.nearFar))),c.code.add((0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__/* .glsl */ .H)`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__/* .glsl */ .H.float(p)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),u.outputs.add("fragBlur","float"),c.code.add((0,_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__/* .glsl */ .H)`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__/* .glsl */ .H.int(f)}; r <= ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__/* .glsl */ .H.int(f)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragBlur = b / w_total;
    }
  `),u}const c=Object.freeze(Object.defineProperty({__proto__:null,build:u},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 76287:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ e),
/* harmony export */   c: () => (/* binding */ n),
/* harmony export */   f: () => (/* binding */ t)
/* harmony export */ });
/* unused harmony exports b, m */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(){return[1,0,0,0,1,0,0,0,1]}function r(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]}function t(e,r,t,n,o,a,u,c,f){return[e,r,t,n,o,a,u,c,f]}function n(e,r){return new Float64Array(e,r,9)}const o=Object.freeze(Object.defineProperty({__proto__:null,clone:r,create:e,createView:n,fromValues:t},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 56192:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ o),
/* harmony export */   a: () => (/* binding */ e),
/* harmony export */   b: () => (/* binding */ r),
/* harmony export */   c: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony exports f, m */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function r(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function t(e,r,t,n,o,a,u,c,f,l,s,i,b,_,m,p){return[e,r,t,n,o,a,u,c,f,l,s,i,b,_,m,p]}function n(e,r){return new Float64Array(e,r,16)}const o=e(),a=Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:o,clone:r,create:e,createView:n,fromValues:t},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 76743:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ O),
/* harmony export */   c: () => (/* binding */ B),
/* harmony export */   g: () => (/* binding */ x),
/* harmony export */   j: () => (/* binding */ K),
/* harmony export */   k: () => (/* binding */ T),
/* harmony export */   m: () => (/* binding */ y),
/* harmony export */   s: () => (/* binding */ v)
/* harmony export */ });
/* unused harmony exports A, B, C, D, E, F, G, b, d, e, f, h, i, l, n, o, p, q, r, t, u, v, w, x, y, z */
/* harmony import */ var _mat3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76287);
/* harmony import */ var _quatf64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46991);
/* harmony import */ var _vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22279);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57137);
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21839);
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25102);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function P(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function v(t,s,a){a*=.5;const n=Math.sin(a);return t[0]=n*s[0],t[1]=n*s[1],t[2]=n*s[2],t[3]=Math.cos(a),t}function x(t,s){const a=2*Math.acos(s[3]),n=Math.sin(a/2);return n>(0,_common_js__WEBPACK_IMPORTED_MODULE_3__.g)()?(t[0]=s[0]/n,t[1]=s[1]/n,t[2]=s[2]/n):(t[0]=1,t[1]=0,t[2]=0),a}function y(t,s,a){const n=s[0],o=s[1],r=s[2],e=s[3],c=a[0],u=a[1],i=a[2],h=a[3];return t[0]=n*h+e*c+o*i-r*u,t[1]=o*h+e*u+r*c-n*i,t[2]=r*h+e*i+n*u-o*c,t[3]=e*h-n*c-o*u-r*i,t}function A(t,s,a){a*=.5;const n=s[0],o=s[1],r=s[2],e=s[3],c=Math.sin(a),u=Math.cos(a);return t[0]=n*u+e*c,t[1]=o*u+r*c,t[2]=r*u-o*c,t[3]=e*u-n*c,t}function I(t,s,a){a*=.5;const n=s[0],o=s[1],r=s[2],e=s[3],c=Math.sin(a),u=Math.cos(a);return t[0]=n*u-r*c,t[1]=o*u+e*c,t[2]=r*u+n*c,t[3]=e*u-o*c,t}function _(t,s,a){a*=.5;const n=s[0],o=s[1],r=s[2],e=s[3],c=Math.sin(a),u=Math.cos(a);return t[0]=n*u+o*c,t[1]=o*u-n*c,t[2]=r*u+e*c,t[3]=e*u-r*c,t}function z(t,s){const a=s[0],n=s[1],o=s[2];return t[0]=a,t[1]=n,t[2]=o,t[3]=Math.sqrt(Math.abs(1-a*a-n*n-o*o)),t}function E(t,s,a,n){const r=s[0],e=s[1],c=s[2],u=s[3];let i,h,M,f,l,m=a[0],p=a[1],q=a[2],g=a[3];return h=r*m+e*p+c*q+u*g,h<0&&(h=-h,m=-m,p=-p,q=-q,g=-g),1-h>(0,_common_js__WEBPACK_IMPORTED_MODULE_3__.g)()?(i=Math.acos(h),M=Math.sin(i),f=Math.sin((1-n)*i)/M,l=Math.sin(n*i)/M):(f=1-n,l=n),t[0]=f*r+l*m,t[1]=f*e+l*p,t[2]=f*c+l*q,t[3]=f*u+l*g,t}function k(t){const s=_common_js__WEBPACK_IMPORTED_MODULE_3__.R,a=s(),n=s(),o=s(),e=Math.sqrt(1-a),c=Math.sqrt(a);return t[0]=e*Math.sin(2*Math.PI*n),t[1]=e*Math.cos(2*Math.PI*n),t[2]=c*Math.sin(2*Math.PI*o),t[3]=c*Math.cos(2*Math.PI*o),t}function L(t,s){const a=s[0],n=s[1],o=s[2],r=s[3],e=a*a+n*n+o*o+r*r,c=e?1/e:0;return t[0]=-a*c,t[1]=-n*c,t[2]=-o*c,t[3]=r*c,t}function O(t,s){return t[0]=-s[0],t[1]=-s[1],t[2]=-s[2],t[3]=s[3],t}function S(t,s){const a=s[0]+s[4]+s[8];let n;if(a>0)n=Math.sqrt(a+1),t[3]=.5*n,n=.5/n,t[0]=(s[5]-s[7])*n,t[1]=(s[6]-s[2])*n,t[2]=(s[1]-s[3])*n;else{let a=0;s[4]>s[0]&&(a=1),s[8]>s[3*a+a]&&(a=2);const o=(a+1)%3,r=(a+2)%3;n=Math.sqrt(s[3*a+a]-s[3*o+o]-s[3*r+r]+1),t[a]=.5*n,n=.5/n,t[3]=(s[3*o+r]-s[3*r+o])*n,t[o]=(s[3*o+a]+s[3*a+o])*n,t[r]=(s[3*r+a]+s[3*a+r])*n}return t}function T(t,s,a,n){const o=.5*Math.PI/180;s*=o,a*=o,n*=o;const r=Math.sin(s),e=Math.cos(s),c=Math.sin(a),u=Math.cos(a),i=Math.sin(n),h=Math.cos(n);return t[0]=r*u*h-e*c*i,t[1]=e*c*h+r*u*i,t[2]=e*u*i-r*c*h,t[3]=e*u*h+r*c*i,t}function w(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}const B=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.c,C=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.s,D=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.a,F=y,G=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.b,R=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.d,W=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.l,X=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.f,Y=X,Z=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.g,H=Z,J=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.n,K=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.h,N=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.e;function Q(t,s,a){const n=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.j)(s,a);return n<-.999999?((0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.b)(U,V,s),(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.k)(U)<1e-6&&(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.b)(U,$,s),(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.n)(U,U),v(t,U,Math.PI),t):n>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):((0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.b)(U,s,a),t[0]=U[0],t[1]=U[1],t[2]=U[2],t[3]=1+n,J(t,t))}const U=(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),V=(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.f)(1,0,0),$=(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.f)(0,1,0);function tt(t,s,a,n,o,r){return E(st,s,o,r),E(at,a,n,r),E(t,st,at,2*r*(1-r)),t}const st=(0,_quatf64_js__WEBPACK_IMPORTED_MODULE_1__.a)(),at=(0,_quatf64_js__WEBPACK_IMPORTED_MODULE_1__.a)();function nt(t,s,a,n){const o=ot;return o[0]=a[0],o[3]=a[1],o[6]=a[2],o[1]=n[0],o[4]=n[1],o[7]=n[2],o[2]=-s[0],o[5]=-s[1],o[8]=-s[2],J(t,S(t,o))}const ot=(0,_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__.a)(),rt=Object.freeze(Object.defineProperty({__proto__:null,add:D,calculateW:z,conjugate:O,copy:B,dot:R,equals:N,exactEquals:K,fromEuler:T,fromMat3:S,getAxisAngle:x,identity:P,invert:L,len:Y,length:X,lerp:W,mul:F,multiply:y,normalize:J,random:k,rotateX:A,rotateY:I,rotateZ:_,rotationTo:Q,scale:G,set:C,setAxes:nt,setAxisAngle:v,slerp:E,sqlerp:tt,sqrLen:H,squaredLength:Z,str:w},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 46991:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ o),
/* harmony export */   a: () => (/* binding */ e),
/* harmony export */   b: () => (/* binding */ r),
/* harmony export */   c: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony exports f, q */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(){return[0,0,0,1]}function r(e){return[e[0],e[1],e[2],e[3]]}function t(e,r,t,n){return[e,r,t,n]}function n(e,r){return new Float64Array(e,r,4)}const o=e(),a=Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:o,clone:r,create:e,createView:n,fromValues:t},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 3192:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ e)
/* harmony export */ });
/* unused harmony export s */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(e,t){const o=e.count;t||(t=new e.TypedArrayConstructor(o));for(let r=0;r<o;r++)t[r]=e.get(r);return t}const t=Object.freeze(Object.defineProperty({__proto__:null,makeDense:e},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 96245:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ B),
/* harmony export */   c: () => (/* binding */ E),
/* harmony export */   f: () => (/* binding */ V),
/* harmony export */   g: () => (/* binding */ U),
/* harmony export */   h: () => (/* binding */ T),
/* harmony export */   j: () => (/* binding */ J),
/* harmony export */   n: () => (/* binding */ it)
/* harmony export */ });
/* unused harmony exports A, B, C, N, b, d, e, i, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z */
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(539);
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92504);
/* harmony import */ var _mat4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37046);
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21839);
/* harmony import */ var _vec3f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22279);
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25102);
/* harmony import */ var _vec4f64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52712);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57137);
/* harmony import */ var _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(58331);
/* harmony import */ var _geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(32532);
/* harmony import */ var _geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16597);
/* harmony import */ var _geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(45573);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const w=E();function E(){return (0,_vec4f64_js__WEBPACK_IMPORTED_MODULE_7__.c)()}const L=_vec4_js__WEBPACK_IMPORTED_MODULE_6__.e,O=_vec4_js__WEBPACK_IMPORTED_MODULE_6__.e;function T(t,n=E()){return (0,_vec4_js__WEBPACK_IMPORTED_MODULE_6__.c)(n,t)}function k(t,n){return (0,_vec4f64_js__WEBPACK_IMPORTED_MODULE_7__.f)(t[0],t[1],t[2],n)}function z(t){return t}function N(t){t[0]=t[1]=t[2]=t[3]=0}function Z(t,n){return t[0]=t[1]=t[2]=0,t[3]=n,t}function B(t){return t[3]}function U(t){return t}function V(t,n,r,o){return (0,_vec4f64_js__WEBPACK_IMPORTED_MODULE_7__.f)(t,n,r,o)}function X(t,n,r){return t!==r&&(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.c)(r,t),r[3]=t[3]+n,r}function Y(n,r,o){return _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),n===o?o:T(n,o)}function D(t,n,r){if(null==n)return!1;if(!H(t,n,G))return!1;let{t0:o,t1:e}=G;if((o<0||e<o&&e>0)&&(o=e),o<0)return!1;if(r){const{origin:t,direction:e}=n;r[0]=t[0]+e[0]*o,r[1]=t[1]+e[1]*o,r[2]=t[2]+e[2]*o}return!0}function F(t,n,r){const o=(0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_10__/* .fromPoints */ .Cr)(n,r);if(!H(t,o,G))return[];const{origin:e,direction:s}=o,{t0:i,t1:c}=G,a=n=>{const r=(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.c)();return (0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.q)(r,e,s,n),$(t,r,r)};return Math.abs(i-c)<(0,_common_js__WEBPACK_IMPORTED_MODULE_8__.g)()?[a(i)]:[a(i),a(c)]}const G={t0:0,t1:0};function H(t,n,r){const{origin:o,direction:e}=n,s=I;s[0]=o[0]-t[0],s[1]=o[1]-t[1],s[2]=o[2]-t[2];const i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2];if(0===i)return!1;const c=2*(e[0]*s[0]+e[1]*s[1]+e[2]*s[2]),a=c*c-4*i*(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]-t[3]*t[3]);if(a<0)return!1;const u=Math.sqrt(a);return r.t0=(-c-u)/(2*i),r.t1=(-c+u)/(2*i),!0}const I=(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.c)();function J(t,n){return D(t,n,null)}function K(t,n,r){if(D(t,n,r))return r;const o=Q(t,n,_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get());return (0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.g)(r,n.origin,(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.i)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get(),n.direction,(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.o)(n.origin,o)/(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.l)(n.direction))),r}function Q(t,n,r){const e=_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get(),s=_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sm4d */ .Rc.get();(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.b)(e,n.origin,n.direction);const c=B(t);(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.b)(r,e,n.origin),(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.i)(r,r,1/(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.l)(r)*c);const m=nt(t,n.origin),p=(0,_geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_11__/* .angle */ .g7)(n.origin,r);return (0,_mat4_js__WEBPACK_IMPORTED_MODULE_3__.c)(s,p+m,e),(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.e)(r,r,s),r}function W(t,n,r){return D(t,n,r)?r:((0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_10__/* .closestPoint */ .oC)(n,U(t),r),$(t,r,r))}function $(t,n,r){const o=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.f)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get(),n,U(t)),e=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.i)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get(),o,t[3]/(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.l)(o));return (0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.g)(r,e,U(t))}function tt(t,n){const r=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.f)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get(),n,U(t)),o=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.m)(r),e=t[3]*t[3];return Math.sqrt(Math.abs(o-e))}function nt(t,r){const o=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.f)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get(),r,U(t)),e=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.l)(o),s=B(t),i=s+Math.abs(s-e);return (0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .acosClamped */ .XM)(s/i)}const rt=(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.c)();function ot(t,n,o,e){const s=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.f)(rt,n,U(t));switch(o){case _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_9__/* .Axis */ ._.X:{const t=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .cartesianToSpherical */ .jU)(s,rt)[2];return (0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.s)(e,-Math.sin(t),Math.cos(t),0)}case _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_9__/* .Axis */ ._.Y:{const t=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .cartesianToSpherical */ .jU)(s,rt),n=t[1],o=t[2],i=Math.sin(n);return (0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.s)(e,-i*Math.cos(o),-i*Math.sin(o),Math.cos(n))}case _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_9__/* .Axis */ ._.Z:return (0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.n)(e,s);default:return}}function et(t,n){const r=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.f)(at,n,U(t));return (0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.l)(r)-t[3]}function st(t,n,r,o){const e=et(t,n),c=ot(t,n,_geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_9__/* .Axis */ ._.Z,at),a=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.i)(at,c,r-e);return (0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.g)(o,n,a)}function it(t,n){const r=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.a)(U(t),n),o=B(t);return r<=o*o}function ct(t,n,r=E()){const o=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.o)(t,n),e=t[3],s=n[3];return o+s<e?((0,_vec4_js__WEBPACK_IMPORTED_MODULE_6__.c)(r,t),r):o+e<s?((0,_vec4_js__WEBPACK_IMPORTED_MODULE_6__.c)(r,n),r):((0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.p)(r,t,n,(o+s-e)/(2*o)),r[3]=(o+e+s)/2,r)}const at=(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.c)(),ut=E(),ft=Object.freeze(Object.defineProperty({__proto__:null,NullSphere:w,altitudeAt:et,angleToSilhouette:nt,axisAt:ot,clear:N,closestPoint:W,closestPointOnSilhouette:Q,containsPoint:it,copy:T,create:E,distanceToSilhouette:tt,elevate:X,equals:O,exactEquals:L,fromCenterAndRadius:k,fromRadius:Z,fromValues:V,getCenter:U,getRadius:B,intersectLine:F,intersectRay:D,intersectRayClosestSilhouette:K,intersectsRay:J,projectPoint:$,setAltitudeAt:st,setExtent:Y,tmpSphere:ut,union:ct,wrap:z},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 56016:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ o),
/* harmony export */   f: () => (/* binding */ l),
/* harmony export */   n: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony export v */
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86942);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function o(e,t){n(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function n(o,n,l=2,u=l){const i=n.length/2;let a=0,d=0;if((0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .cy)(n)||(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .isFloat */ .dk)(n)){for(let e=0;e<i;++e)o[a]=n[d],o[a+1]=n[d+1],a+=l,d+=u;return}const c=(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .maximumValue */ .a3)(n);if((0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .isSigned */ .JI)(n))for(let e=0;e<i;++e)o[a]=Math.max(n[d]/c,-1),o[a+1]=Math.max(n[d+1]/c,-1),a+=l,d+=u;else for(let e=0;e<i;++e)o[a]=n[d]/c,o[a+1]=n[d+1]/c,a+=l,d+=u}function l(e,t,r,f){const o=e.typedBuffer,n=e.typedBufferStride,l=f?.count??e.count;let u=(f?.dstIndex??0)*n;for(let i=0;i<l;++i)o[u]=t,o[u+1]=r,u+=n}const u=Object.freeze(Object.defineProperty({__proto__:null,fill:l,normalizeIntegerBuffer:n,normalizeIntegerBufferView:o},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 24121:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ n),
/* harmony export */   b: () => (/* binding */ f),
/* harmony export */   c: () => (/* binding */ t),
/* harmony export */   d: () => (/* binding */ i),
/* harmony export */   e: () => (/* binding */ o),
/* harmony export */   n: () => (/* binding */ s),
/* harmony export */   s: () => (/* binding */ u),
/* harmony export */   t: () => (/* binding */ r)
/* harmony export */ });
/* unused harmony exports f, v */
/* harmony import */ var _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64521);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function t(e,t,f){r(e.typedBuffer,t.typedBuffer,f,e.typedBufferStride,t.typedBufferStride)}function r(t,r,f,n=3,o=n){if(t.length/n!==Math.ceil(r.length/o))return _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__/* .mathLogger */ .J.error("source and destination buffers need to have the same number of elements"),t;const u=t.length/n,i=f[0],s=f[1],a=f[2],d=f[4],c=f[5],l=f[6],p=f[8],y=f[9],h=f[10],m=f[12],B=f[13],g=f[14];let S=0,M=0;for(let e=0;e<u;e++){const e=r[S],f=r[S+1],u=r[S+2];t[M]=i*e+d*f+p*u+m,t[M+1]=s*e+c*f+y*u+B,t[M+2]=a*e+l*f+h*u+g,S+=o,M+=n}return t}function f(e,t,r){n(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function n(t,r,f,n=3,o=n){if(t.length/n!==Math.ceil(r.length/o))return void _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__/* .mathLogger */ .J.error("source and destination buffers need to have the same number of elements");const u=t.length/n,i=f[0],s=f[1],a=f[2],d=f[3],c=f[4],l=f[5],p=f[6],y=f[7],h=f[8];let m=0,B=0;for(let e=0;e<u;e++){const e=r[m],f=r[m+1],u=r[m+2];t[B]=i*e+d*f+p*u,t[B+1]=s*e+c*f+y*u,t[B+2]=a*e+l*f+h*u,m+=o,B+=n}}function o(e,t,r){u(e.typedBuffer,t,r,e.typedBufferStride)}function u(e,t,r,f=3){const n=Math.min(e.length/f,t.count),o=t.typedBuffer,u=t.typedBufferStride;let i=0,s=0;for(let a=0;a<n;a++)e[s]=r*o[i],e[s+1]=r*o[i+1],e[s+2]=r*o[i+2],i+=u,s+=f}function i(e,t){s(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function s(e,t,r=3,f=r){const n=Math.min(e.length/r,t.length/f);let o=0,u=0;for(let i=0;i<n;i++){const n=t[o],i=t[o+1],s=t[o+2],a=n*n+i*i+s*s;if(a>0){const t=1/Math.sqrt(a);e[u]=t*n,e[u+1]=t*i,e[u+2]=t*s}o+=f,u+=r}}function a(e,t,r){const f=Math.min(e.count,t.count),n=e.typedBuffer,o=e.typedBufferStride,u=t.typedBuffer,i=t.typedBufferStride;let s=0,a=0;for(let d=0;d<f;d++)n[a]=u[s]>>r,n[a+1]=u[s+1]>>r,n[a+2]=u[s+2]>>r,s+=i,a+=o}const d=Object.freeze(Object.defineProperty({__proto__:null,normalize:s,normalizeView:i,scale:u,scaleView:o,shiftRight:a,transformMat3:n,transformMat3View:f,transformMat4:r,transformMat4View:t},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 53866:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ e),
/* harmony export */   c: () => (/* binding */ t),
/* harmony export */   f: () => (/* binding */ f)
/* harmony export */ });
/* unused harmony export v */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(e,f){t(e.typedBuffer,f.typedBuffer,e.typedBufferStride,f.typedBufferStride)}function t(e,t,f=3,o=f){const r=t.length/o;let n=0,u=0;for(let c=0;c<r;++c)e[n]=t[u],e[n+1]=t[u+1],e[n+2]=t[u+2],n+=f,u+=o}function f(e,t,f,o,r){const n=e.typedBuffer,u=e.typedBufferStride,c=r?.count??e.count;let d=(r?.dstIndex??0)*u;for(let l=0;l<c;++l)n[d]=t,n[d+1]=f,n[d+2]=o,d+=u}const o=Object.freeze(Object.defineProperty({__proto__:null,copy:t,copyView:e,fill:f},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 2662:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ r),
/* harmony export */   b: () => (/* binding */ o),
/* harmony export */   n: () => (/* binding */ n),
/* harmony export */   s: () => (/* binding */ u),
/* harmony export */   t: () => (/* binding */ f)
/* harmony export */ });
/* unused harmony exports c, v */
/* harmony import */ var _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64521);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function t(t,r,f){if(t.count!==r.count)return void _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__/* .mathLogger */ .J.error("source and destination buffers need to have the same number of elements");const n=t.count,o=f[0],u=f[1],s=f[2],d=f[3],a=f[4],i=f[5],c=f[6],p=f[7],l=f[8],m=f[9],y=f[10],B=f[11],h=f[12],S=f[13],b=f[14],g=f[15],M=t.typedBuffer,v=t.typedBufferStride,_=r.typedBuffer,j=r.typedBufferStride;for(let e=0;e<n;e++){const t=e*v,r=e*j,f=_[r],n=_[r+1],w=_[r+2],z=_[r+3];M[t]=o*f+a*n+l*w+h*z,M[t+1]=u*f+i*n+m*w+S*z,M[t+2]=s*f+c*n+y*w+b*z,M[t+3]=d*f+p*n+B*w+g*z}}function r(e,t,r){f(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function f(t,r,f,n=4,o=n){if(t.length/n!=r.length/o)return void _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__/* .mathLogger */ .J.error("source and destination buffers need to have the same number of elements");const u=t.length/n,s=f[0],d=f[1],a=f[2],i=f[3],c=f[4],p=f[5],l=f[6],m=f[7],y=f[8];let B=0,h=0;for(let e=0;e<u;e++){const e=r[B],f=r[B+1],u=r[B+2],S=r[B+3];t[h]=s*e+i*f+l*u,t[h+1]=d*e+c*f+m*u,t[h+2]=a*e+p*f+y*u,t[h+3]=S,B+=o,h+=n}}function n(e,t){const r=Math.min(e.count,t.count),f=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,u=t.typedBufferStride;for(let s=0;s<r;s++){const e=s*n,t=s*u,r=o[t],d=o[t+1],a=o[t+2],i=r*r+d*d+a*a;if(i>0){const t=1/Math.sqrt(i);f[e]=t*r,f[e+1]=t*d,f[e+2]=t*a}}}function o(e,t,r){u(e.typedBuffer,t,r,e.typedBufferStride)}function u(e,t,r,f=4){const n=Math.min(e.length/f,t.count),o=t.typedBuffer,u=t.typedBufferStride;let s=0,d=0;for(let a=0;a<n;a++)e[d]=r*o[s],e[d+1]=r*o[s+1],e[d+2]=r*o[s+2],e[d+3]=r*o[s+3],s+=u,d+=f}const s=Object.freeze(Object.defineProperty({__proto__:null,normalize:n,scale:u,scaleView:o,transformMat3:f,transformMat3View:r,transformMat4:t},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 33381:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ e),
/* harmony export */   c: () => (/* binding */ t),
/* harmony export */   f: () => (/* binding */ f)
/* harmony export */ });
/* unused harmony export v */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(e,f){t(e.typedBuffer,f,e.typedBufferStride)}function t(e,t,f=4){const o=t.typedBuffer,r=t.typedBufferStride,n=t.count;let u=0,c=0;for(let d=0;d<n;++d)e[u]=o[c],e[u+1]=o[c+1],e[u+2]=o[c+2],e[u+3]=o[c+3],u+=f,c+=r}function f(e,t,f,o,r,n){const u=e.typedBuffer,c=e.typedBufferStride,d=n?.count??e.count;let l=(n?.dstIndex??0)*c;for(let p=0;p<d;++p)u[l]=t,u[l+1]=f,u[l+2]=o,u[l+3]=r,l+=c}const o=Object.freeze(Object.defineProperty({__proto__:null,copy:t,copyView:e,fill:f},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 84858:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ E)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var E;!function(E){E[E.KILOBYTES=1024]="KILOBYTES",E[E.MEGABYTES=1048576]="MEGABYTES",E[E.GIGABYTES=1073741824]="GIGABYTES"}(E||(E={}));


/***/ }),

/***/ 80912:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class t{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(t,e){return this._outer.get(t)?.get(e)}set(t,e,r){const s=this._outer.get(t);s?s.set(e,r):this._outer.set(t,new Map([[e,r]]))}delete(t,e){const r=this._outer.get(t);r&&(r.delete(e),0===r.size&&this._outer.delete(t))}forEach(t){this._outer.forEach(((e,r)=>t(e,r)))}}


/***/ }),

/***/ 92114:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _nextTick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37103);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class s{constructor(t){this._allocator=t,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,_nextTick_js__WEBPACK_IMPORTED_MODULE_0__/* .nextTick */ .d)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*i);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,i));t++)this._items.push(this._allocator())}}const i=1024;


/***/ }),

/***/ 50579:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let r=class{constructor(t,r,o=""){this.major=t,this.minor=r,this._context=o}lessThan(t,r){return this.major<t||t===this.major&&this.minor<r}since(t,r){return!this.lessThan(t,r)}validate(r){if(this.major!==r.major){const o=this._context&&this._context+":",s=this._context&&this._context+" ";throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(o+"unsupported-version",`Required major ${s}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:r})}}clone(){return new r(this.major,this.minor,this._context)}static parse(o,s=""){const[e,i]=o.split("."),n=/^\s*\d+\s*$/;if(!e?.match||!n.test(e)){throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A((s&&s+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:o})}if(!i?.match||!n.test(i)){throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A((s&&s+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:o})}const a=parseInt(e,10),h=parseInt(i,10);return new r(a,h,s)}};


/***/ }),

/***/ 19382:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EM: () => (/* binding */ a),
/* harmony export */   b5: () => (/* binding */ c)
/* harmony export */ });
/* unused harmony export devHostnames */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function c(c){return c=c||globalThis.location.hostname,l.some((a=>null!=c?.match(a)))}function a(c,a){return c&&(a=a||globalThis.location.hostname)?null!=a.match(t)||null!=a.match(s)?c.replace("static.arcgis.com","staticdev.arcgis.com"):null!=a.match(o)||null!=a.match(i)?c.replace("static.arcgis.com","staticqa.arcgis.com"):c:c}const t=/^devext.arcgis.com$/,o=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,i=/^[\w-]*\.mapsqa.arcgis.com$/,l=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,t,o,/^jsapps.esri.com$/,s,i];


/***/ }),

/***/ 42965:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dg: () => (/* binding */ t),
/* harmony export */   my: () => (/* binding */ i),
/* harmony export */   tM: () => (/* binding */ l)
/* harmony export */ });
/* unused harmony exports getZeroIndexArray, newIntArray */
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86942);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function t(t){if((0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .cy)(t)){if(t.length<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9)return t}else if(t.length<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9)return Array.from(t);let i=!0,f=!0;return t.some(((r,n)=>(i=i&&0===r,f=f&&r===n,!i&&!f))),i?A(t.length):f?l(t.length):(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .cy)(t)||t.BYTES_PER_ELEMENT!==Uint16Array.BYTES_PER_ELEMENT?e(t):t}function e(n){let t=!0;for(const e of n){if(e>=65536)return (0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .cy)(n)?new Uint32Array(n):n;e>=256&&(t=!1)}return t?new Uint8Array(n):new Uint16Array(n)}function i(r){return r<=_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9?new Array(r):r<=65536?new Uint16Array(r):new Uint32Array(r)}function f(r){return r<=n?new Array(r):new Uint32Array(r)}let a=(()=>{const r=new Uint32Array(131072);for(let n=0;n<r.length;++n)r[n]=n;return r})();const u=[0],o=(()=>{const r=new Uint16Array(65536);for(let n=0;n<r.length;++n)r[n]=n;return r})();function l(r){if(1===r)return u;if(r<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9)return Array.from(new Uint16Array(o.buffer,0,r));if(r<o.length)return new Uint16Array(o.buffer,0,r);if(r>a.length){const n=Math.max(2*a.length,r);a=new Uint32Array(n);for(let r=0;r<a.length;r++)a[r]=r}return new Uint32Array(a.buffer,0,r)}let y=new Uint8Array(65536);function A(r){if(1===r)return u;if(r<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9)return new Array(r).fill(0);if(r>y.length){const n=Math.max(2*y.length,r);y=new Uint8Array(n)}return new Uint8Array(y.buffer,0,r)}


/***/ }),

/***/ 57813:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y$: () => (/* binding */ y),
  qB: () => (/* binding */ o),
  Qt: () => (/* binding */ k),
  My: () => (/* binding */ C),
  bf: () => (/* binding */ j),
  jZ: () => (/* binding */ l),
  j0: () => (/* binding */ a),
  Sx: () => (/* binding */ p),
  E$: () => (/* binding */ b),
  h: () => (/* binding */ g),
  P: () => (/* binding */ B),
  SL: () => (/* binding */ d),
  gH: () => (/* binding */ u),
  si: () => (/* binding */ m),
  mJ: () => (/* binding */ q),
  UL: () => (/* binding */ D),
  D6: () => (/* binding */ V),
  Yi: () => (/* binding */ w),
  An: () => (/* binding */ F),
  LC: () => (/* binding */ A),
  xs: () => (/* binding */ i),
  Xm: () => (/* binding */ T),
  Vp: () => (/* binding */ v),
  zD: () => (/* binding */ G),
  m8: () => (/* binding */ M),
  nS: () => (/* binding */ E),
  H$: () => (/* binding */ I),
  eI: () => (/* binding */ O),
  Eq: () => (/* binding */ c),
  Aj: () => (/* binding */ h),
  E7: () => (/* binding */ z),
  Y4: () => (/* binding */ H),
  TX: () => (/* binding */ S),
  Uz: () => (/* binding */ L),
  ml: () => (/* binding */ U),
  XP: () => (/* binding */ x)
});

;// ../node_modules/@arcgis/core/geometry/support/buffer/internals/Mat3.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class t{constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.elementCount=9;const i=this.TypedArrayConstructor;void 0===f&&(f=9*i.BYTES_PER_ELEMENT);const d=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,d):new i(e,d,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getMat(t,e){let r=t*this.typedBufferStride;for(let f=0;f<9;f++)e[f]=this.typedBuffer[r++];return e}setMat(t,e){let r=t*this.typedBufferStride;for(let f=0;f<9;f++)this.typedBuffer[r++]=e[f]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,d=r*e.typedBufferStride;for(let u=0;u<9;++u)f[i++]=s[d++]}get buffer(){return this.typedBuffer.buffer}}t.ElementCount=9;

;// ../node_modules/@arcgis/core/geometry/support/buffer/internals/Mat4.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class Mat4_t{constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.elementCount=16;const i=this.TypedArrayConstructor;void 0===f&&(f=16*i.BYTES_PER_ELEMENT);const d=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,d):new i(e,d,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getMat(t,e){let r=t*this.typedBufferStride;for(let f=0;f<16;f++)e[f]=this.typedBuffer[r++];return e}setMat(t,e){let r=t*this.typedBufferStride;for(let f=0;f<16;f++)this.typedBuffer[r++]=e[f]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,d=r*e.typedBufferStride;for(let u=0;u<16;++u)f[i++]=s[d++]}get buffer(){return this.typedBuffer.buffer}}Mat4_t.ElementCount=16;

;// ../node_modules/@arcgis/core/geometry/support/buffer/internals/Scalar.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class Scalar_t{constructor(t,e,r=0,s,i){this.TypedArrayConstructor=t,this.elementCount=1;const f=this.TypedArrayConstructor;void 0===s&&(s=f.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==i?new f(e,u):new f(e,u,(i-r)/f.BYTES_PER_ELEMENT),this.stride=s,this.typedBufferStride=s/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride)}sliceBuffer(t,e,r=this.count-e){const s=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,s,this.stride,s+r*this.stride)}get(t){return this.typedBuffer[t*this.typedBufferStride]}set(t,e){this.typedBuffer[t*this.typedBufferStride]=e}get buffer(){return this.typedBuffer.buffer}}Scalar_t.ElementCount=1;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec2.js
var vec2 = __webpack_require__(58680);
;// ../node_modules/@arcgis/core/geometry/support/buffer/internals/Vec2.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class e{constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.elementCount=2;const i=this.TypedArrayConstructor;void 0===f&&(f=2*i.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,u):new i(e,u,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getVec(e,r){return e*=this.typedBufferStride,(0,vec2.s)(r,this.typedBuffer[e],this.typedBuffer[e+1])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t]=e[1]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t]=r}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,u=r*e.typedBufferStride;f[i++]=s[u++],f[i]=s[u]}get buffer(){return this.typedBuffer.buffer}}e.ElementCount=2;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3.js
var vec3 = __webpack_require__(21839);
;// ../node_modules/@arcgis/core/geometry/support/buffer/internals/Vec3.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class Vec3_e{constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.elementCount=3;const i=this.TypedArrayConstructor;void 0===f&&(f=3*i.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,u):new i(e,u,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getVec(e,r){return e*=this.typedBufferStride,(0,vec3.s)(r,this.typedBuffer[e],this.typedBuffer[e+1],this.typedBuffer[e+2])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t++]=e[1],this.typedBuffer[t]=e[2]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r,f){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t++]=r,this.typedBuffer[t]=f}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,u=r*e.typedBufferStride;f[i++]=s[u++],f[i++]=s[u++],f[i]=s[u]}get buffer(){return this.typedBuffer.buffer}}Vec3_e.ElementCount=3;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec4.js
var vec4 = __webpack_require__(25102);
;// ../node_modules/@arcgis/core/geometry/support/buffer/internals/Vec4.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class Vec4_e{constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.start=r,this.elementCount=4;const i=this.TypedArrayConstructor;void 0===f&&(f=4*i.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,u):new i(e,u,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getVec(e,r){return e*=this.typedBufferStride,(0,vec4.s)(r,this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t++]=e[1],this.typedBuffer[t++]=e[2],this.typedBuffer[t]=e[3]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r,f,s){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t++]=r,this.typedBuffer[t++]=f,this.typedBuffer[t]=s}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,u=r*e.typedBufferStride;f[i++]=s[u++],f[i++]=s[u++],f[i++]=s[u++],f[i]=s[u]}get buffer(){return this.typedBuffer.buffer}}Vec4_e.ElementCount=4;

;// ../node_modules/@arcgis/core/geometry/support/buffer/BufferView.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class y extends Scalar_t{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}static fromTypedArray(e,t){return new y(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}y.ElementType="f32";class u extends e{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(u,e,t)}static fromTypedArray(e,t){return new u(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}u.ElementType="f32";class i extends Vec3_e{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(i,e,t)}static fromTypedArray(e,t){return new i(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}i.ElementType="f32";class c extends Vec4_e{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(c,e,t)}static fromTypedArray(e,t){return new c(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}c.ElementType="f32";class l extends t{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(l,e,t)}static fromTypedArray(e,t){return new l(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}l.ElementType="f32";class a extends t{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(a,e,t)}static fromTypedArray(e,t){return new a(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}a.ElementType="f64";class p extends Mat4_t{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(p,e,t)}static fromTypedArray(e,t){return new p(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}p.ElementType="f32";class b extends Mat4_t{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(b,e,t)}static fromTypedArray(e,t){return new b(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}b.ElementType="f64";class o extends Scalar_t{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(o,e,t)}static fromTypedArray(e,t){return new o(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}o.ElementType="f64";class m extends e{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(m,e,t)}static fromTypedArray(e,t){return new m(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}m.ElementType="f64";class T extends Vec3_e{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(T,e,t)}static fromTypedArray(e,t){return new T(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}T.ElementType="f64";class h extends Vec4_e{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(h,e,t)}static fromTypedArray(e,t){return new h(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}h.ElementType="f64";class d extends Scalar_t{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(d,e,t)}static fromTypedArray(e,t){return new d(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}d.ElementType="u8";class A extends e{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(A,e,t)}static fromTypedArray(e,t){return new A(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}A.ElementType="u8";class O extends Vec3_e{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(O,e,t)}static fromTypedArray(e,t){return new O(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}O.ElementType="u8";class x extends Vec4_e{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(x,e,t)}static fromTypedArray(e,t){return new x(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}x.ElementType="u8";class g extends Scalar_t{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(g,e,t)}static fromTypedArray(e,t){return new g(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}g.ElementType="u16";class w extends e{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(w,e,t)}static fromTypedArray(e,t){return new w(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}w.ElementType="u16";class E extends Vec3_e{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(E,e,t)}static fromTypedArray(e,t){return new E(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}E.ElementType="u16";class L extends Vec4_e{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(L,e,t)}static fromTypedArray(e,t){return new L(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}L.ElementType="u16";class B extends Scalar_t{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(B,e,t)}static fromTypedArray(e,t){return new B(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}B.ElementType="u32";class F extends e{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(F,e,t)}static fromTypedArray(e,t){return new F(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}F.ElementType="u32";class I extends Vec3_e{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(I,e,t)}static fromTypedArray(e,t){return new I(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}I.ElementType="u32";class U extends Vec4_e{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(U,e,t)}static fromTypedArray(e,t){return new U(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}U.ElementType="u32";class j extends Scalar_t{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(j,e,t)}static fromTypedArray(e,t){return new j(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}j.ElementType="i8";class V extends e{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(V,e,t)}static fromTypedArray(e,t){return new V(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}V.ElementType="i8";class M extends Vec3_e{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(M,e,t)}static fromTypedArray(e,t){return new M(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}M.ElementType="i8";class S extends Vec4_e{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(S,e,t)}static fromTypedArray(e,t){return new S(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}S.ElementType="i8";class k extends Scalar_t{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(k,e,t)}static fromTypedArray(e,t){return new k(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}k.ElementType="i16";class q extends e{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(q,e,t)}static fromTypedArray(e,t){return new q(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}q.ElementType="i16";class v extends Vec3_e{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(v,e,t)}static fromTypedArray(e,t){return new v(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}v.ElementType="i16";class z extends Vec4_e{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(z,e,t)}static fromTypedArray(e,t){return new z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}z.ElementType="i16";class C extends Scalar_t{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(C,e,t)}static fromTypedArray(e,t){return new C(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}C.ElementType="i32";class D extends e{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(D,e,t)}static fromTypedArray(e,t){return new D(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}D.ElementType="i32";class G extends Vec3_e{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(G,e,t)}static fromTypedArray(e,t){return new G(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}G.ElementType="i32";class H extends Vec4_e{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(H,e,t)}static fromTypedArray(e,t){return new H(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}H.ElementType="i32";


/***/ }),

/***/ 64521:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(539);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const e=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getLogger("esri.views.3d.support.buffer.math");


/***/ }),

/***/ 32846:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GJ: () => (/* binding */ e)
/* harmony export */ });
/* unused harmony exports isInteger, isSigned, maximumValue */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(e){switch(e){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8}}function c(e){switch(e){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0}}function s(e){switch(e){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1}}function r(e){switch(e){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303}}


/***/ }),

/***/ 22759:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cr: () => (/* binding */ b),
/* harmony export */   _I: () => (/* binding */ l),
/* harmony export */   vt: () => (/* binding */ v)
/* harmony export */ });
/* unused harmony exports closestLineSegmentDistance2, closestLineSegmentPoint, closestRayDistance2, copy, distance, distance2, fromValues, pointAt, projectPointClamp, wrap */
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92504);
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92114);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21839);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22279);
/* harmony import */ var _vectorStacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45573);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function v(t){return t?{origin:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.g)(t.origin),vector:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.g)(t.vector)}:{origin:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),vector:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)()}}function m(t,r){const n=x.get();return n.origin=t,n.vector=r,n}function p(t,r=v()){return h(t.origin,t.vector,r)}function h(t,r,o=v()){return n(o.origin,t),n(o.vector,r),o}function b(t,r,i=v()){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.c)(i.origin,t),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.f)(i.vector,r,t),i}function M(r,n){const c=o(f.get(),n,r.origin),s=i(r.vector,c),u=i(r.vector,r.vector),a=t(s/u,0,1),g=o(f.get(),e(f.get(),r.vector,a),c);return i(g,g)}function j(t,r){return Math.sqrt(M(t,r))}function l(t,r,n){return d(t,r,0,1,n)}function A(t,r,n){return c(n,t.origin,e(n,t.vector,r))}function d(r,n,u,a,g){const{vector:v,origin:m}=r,p=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.f)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_3__/* .sv3d */ .rq.get(),n,m),h=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.j)(v,p)/(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.m)(v);return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.i)(g,v,(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .clamp */ .qE)(h,u,a)),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.g)(g,g,r.origin)}function B(t,r){if(q(t,m(r.origin,r.direction),!1,w)){const{tA:r,pB:n,distance2:o}=w;if(r>=0&&r<=1)return o;if(r<0)return u(t.origin,n);if(r>1)return u(c(f.get(),t.origin,t.vector),n)}return null}function k(t,r,o){return!!q(t,r,!0,w)&&(n(o,w.pA),!0)}function S(t,r){return q(t,r,!0,w)?w.distance2:null}function q(r,n,o,i){const e=1e-6,s=r.origin,a=c(f.get(),s,r.vector),g=n.origin,v=c(f.get(),g,n.vector),m=f.get(),p=f.get();if(m[0]=s[0]-g[0],m[1]=s[1]-g[1],m[2]=s[2]-g[2],p[0]=v[0]-g[0],p[1]=v[1]-g[1],p[2]=v[2]-g[2],Math.abs(p[0])<e&&Math.abs(p[1])<e&&Math.abs(p[2])<e)return!1;const h=f.get();if(h[0]=a[0]-s[0],h[1]=a[1]-s[1],h[2]=a[2]-s[2],Math.abs(h[0])<e&&Math.abs(h[1])<e&&Math.abs(h[2])<e)return!1;const b=m[0]*p[0]+m[1]*p[1]+m[2]*p[2],M=p[0]*h[0]+p[1]*h[1]+p[2]*h[2],j=m[0]*h[0]+m[1]*h[1]+m[2]*h[2],l=p[0]*p[0]+p[1]*p[1]+p[2]*p[2],A=(h[0]*h[0]+h[1]*h[1]+h[2]*h[2])*l-M*M;if(Math.abs(A)<e)return!1;let d=(b*M-j*l)/A,B=(b+M*d)/l;o&&(d=t(d,0,1),B=t(B,0,1));const k=f.get(),S=f.get();return k[0]=s[0]+d*h[0],k[1]=s[1]+d*h[1],k[2]=s[2]+d*h[2],S[0]=g[0]+B*p[0],S[1]=g[1]+B*p[1],S[2]=g[2]+B*p[2],i.tA=d,i.tB=B,i.pA=k,i.pB=S,i.distance2=u(k,S),!0}const w={tA:0,tB:0,pA:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),pB:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),distance2:0},x=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_4__/* .ObjectStack */ .I((()=>v()));


/***/ }),

/***/ 80530:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  vt: () => (/* binding */ plane_b),
  lU: () => (/* binding */ X),
  qb: () => (/* binding */ ot)
});

// UNUSED EXPORTS: clip, clipInfinite, copy, distance, equals, exactEquals, fromArray, fromNormalAndOffset, fromPoints, fromPositionAndNormal, fromValues, fromVectorsAndPoint, intersectLine, intersectLineSegment, intersectLineSegmentClamp, intersectPlanes, intersectRay, isPointInside, isPointOutside, isSphereFullyInside, isSphereFullyOutside, isVertical, negate, projectPoint, projectPointLocal, projectVector, setOffsetFromPoint, signedDistance, up, wrap

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(92504);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3.js
var vec3 = __webpack_require__(21839);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3f64.js
var vec3f64 = __webpack_require__(22279);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec4.js
var vec4 = __webpack_require__(25102);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/common.js
var common = __webpack_require__(57137);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/sphere.js
var sphere = __webpack_require__(96245);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/vector.js
var vector = __webpack_require__(16597);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/vectorStacks.js + 1 modules
var vectorStacks = __webpack_require__(45573);
;// ../node_modules/@arcgis/core/views/3d/support/mathUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function mathUtils_M(t,n){return t>n?Math.cos(n):Math.cos(t)}function mathUtils_e(t,n,s){return 2*Math.atan(s*Math.tan(.5*t)/n)}function mathUtils_m(t,n,s){return 2*Math.atan(n*Math.tan(.5*t)/s)}function mathUtils_p(t){const n=t[0]*t[0]+t[4]*t[4]+t[8]*t[8],s=t[1]*t[1]+t[5]*t[5]+t[9]*t[9],a=t[2]*t[2]+t[6]*t[6]+t[10]*t[10];return Math.sqrt(Math.max(n,s,a))}function mathUtils_j(t,s){const a=Math.sqrt(s[0]*s[0]+s[4]*s[4]+s[8]*s[8]),r=Math.sqrt(s[1]*s[1]+s[5]*s[5]+s[9]*s[9]),o=Math.sqrt(s[2]*s[2]+s[6]*s[6]+s[10]*s[10]);return n(t,a,r,o),t}function l(t,r,o){o=o||t;const c=s(t,r);n(o,t[0]-c*r[0],t[1]-c*r[1],t[2]-c*r[2]),a(o,o)}function q(t,s,o){Math.abs(t[0])>Math.abs(t[1])?n(s,0,1,0):n(s,1,0,0),r(o,t,s),a(s,s),r(s,o,t),a(o,o)}function b(t,n,s,a,r,o){const c=t+(n-t)*r;return c+(s+(a-s)*r-c)*o}function mathUtils_g(t,n,a,r=f()){const h=o(t),M=o(n),e=s(t,n)/(h*M);if(e<.9999999999999999){const s=Math.acos(e),o=((1-a)*h+a*M)/Math.sin(s),i=o/h*Math.sin((1-a)*s),f=o/M*Math.sin(a*s);return c(z,t,i),c(A,n,f),u(r,z,A)}return i(r,t,n,a)}function k(t,n,r,M=f(),e=f()){const m=o(t),p=o(n),j=s(t,n)/(m*p);if(j<.9999999999999999){const s=Math.acos(j),a=Math.sin(s),o=Math.sin(r*s),i=Math.sin((1-r)*s),h=(1-r)*m+r*p;{const s=h/a,r=s/p*o;c(z,t,s/m*i),c(A,n,r),u(M,z,A)}{const f=1/m*(-Math.cos((1-r)*s)*s*h+i*(-m+p));c(z,t,f);const M=1/p*(Math.cos(r*s)*s*h+o*(-m+p));c(A,n,M),u(e,z,A),c(e,e,1/a)}return e}return i(M,t,n,r),h(e,n,t),a(e,e),e}function v(n,o,c){n=a(z,n),o=a(A,o);const u=t(s(n,o));if(c){const t=r(y,n,o);if(s(t,c)<0)return-u}return u}function x(t){const n=t.length;return s=>{if(s<=t[0][0])return t[0][1];if(s>=t[n-1][0])return t[n-1][1];let a=1;for(;s>t[a][0];)a++;const r=t[a-1][0],o=t[a][0],c=(o-s)/(o-r);return c*t[a-1][1]+(1-c)*t[a][1]}}function U(t,n,o,c){h(d,n,t),h(w,o,t),r(c,d,w),a(c,c),c[3]=-s(t,c)}const d=(0,vec3f64.c)(),w=(0,vec3f64.c)(),y=(0,vec3f64.c)(),z=(0,vec3f64.c)(),A=(0,vec3f64.c)();

;// ../node_modules/@arcgis/core/geometry/support/plane.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function plane_b(t=ut){return[t[0],t[1],t[2],t[3]]}const plane_l=(/* unused pure expression or super */ null && (N)),plane_v=(/* unused pure expression or super */ null && (M));function plane_A(t=ut[0],n=ut[1],r=ut[2],o=ut[3]){return T(t,n,r,o,p.get())}function F(t,n){return T(n[0],n[1],n[2],n[3],t)}function T(t,n,r,o,c=plane_b()){return c[0]=t,c[1]=n,c[2]=r,c[3]=o,c}function _(t,r,o){return n(o,t),o[3]=r,o}function plane_k(t,n,r){const o=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],c=Math.abs(o-1)>1e-5&&o>1e-12?1/Math.sqrt(o):1;return r[0]=n[0]*c,r[1]=n[1]*c,r[2]=n[2]*c,r[3]=-(r[0]*t[0]+r[1]*t[1]+r[2]*t[2]),r}function plane_d(t,n,r,o=plane_b()){const c=r[0]-n[0],u=r[1]-n[1],e=r[2]-n[2],i=t[0]-n[0],s=t[1]-n[1],f=t[2]-n[2],a=u*f-e*s,I=e*i-c*f,N=c*s-u*i,M=a*a+I*I+N*N,h=Math.abs(M-1)>1e-5&&M>1e-12?1/Math.sqrt(M):1;return o[0]=a*h,o[1]=I*h,o[2]=N*h,o[3]=-(o[0]*t[0]+o[1]*t[1]+o[2]*t[2]),o}function X(t,n,e,i=0,s=Math.floor(e*(1/3)),f=Math.floor(e*(2/3))){if(e<3)return!1;n(L,i);let a=s,I=!1;for(;a<e-1&&!I;)n(P,a),a++,I=!(0,vec3.h)(L,P);if(!I)return!1;for(a=Math.max(a,f),I=!1;a<e&&!I;)n(O,a),a++,(0,vec3.f)(plane_q,L,P),(0,vec3.n)(plane_q,plane_q),(0,vec3.f)(plane_x,P,O),(0,vec3.n)(plane_x,plane_x),I=!(0,vec3.h)(L,O)&&!(0,vec3.h)(P,O)&&Math.abs((0,vec3.j)(plane_q,plane_x))<C;return I?(plane_d(L,P,O,t),!0):(0!==i||1!==s||2!==f)&&X(t,n,e,0,1,2)}function plane_y(t,n,r=!0){const o=n.length/3;return X(t,((t,r)=>e(t,n[3*r+0],n[3*r+1],n[3*r+2])),r?o-1:o)}const C=.99619469809,L=(0,vec3f64.c)(),P=(0,vec3f64.c)(),O=(0,vec3f64.c)(),plane_q=(0,vec3f64.c)(),plane_x=(0,vec3f64.c)();function plane_U(t,n,r){return n!==t&&F(t,n),t[3]=-u(ot(t),r),t}function plane_w(t,n){return n[0]=-t[0],n[1]=-t[1],n[2]=-t[2],n[3]=-t[3],n}function S(t,n,r,o){return i(O,n,t),plane_k(r,O,o)}function plane_z(t,n,r,c){return rt(t,n,o(E.get(),r,n),it,c)}function B(t,n,r){return null!=n&&rt(t,n.origin,n.direction,st,r)}function D(t,n,r){return rt(t,n.origin,n.vector,et.NONE,r)}function G(t,n,r){return rt(t,n.origin,n.vector,et.CLAMP,r)}const H=(()=>{const t=(0,vec3f64.c)();return(r,o,u)=>{const e=ot(r),f=ot(o);(0,vec3.b)(t,e,f);if((0,vec3.m)(t)<(0,common.g)())return!1;(0,vec3.n)(t,t);const[a,I,N]=t,M=u.origin,m=Math.abs(a),g=Math.abs(I),p=Math.abs(N),[E,j,b]=e,[l,v,A]=f,F=r[3],T=o[3];return m>g&&m>p?(M[1]=(T*b-F*A)/a,M[2]=(F*v-T*j)/a):g>p?(M[0]=(F*A-T*b)/I,M[2]=(T*E-F*l)/I):(M[0]=(T*j-F*v)/N,M[1]=(F*l-T*E)/N),(0,vec3.c)(u.direction,t),!0}})();function J(t,n){return nt(t,m(n))-n[3]>=0}function K(t,n){return nt(t,m(n))+n[3]<0}function Q(t,n){return nt(t,n)>=0}function R(t,n){return nt(t,n)<0}function V(t,n){const r=u(ot(t),n.ray.direction),o=-nt(t,n.ray.origin);if(o<0&&r>=0)return!1;if(r>-1e-6&&r<1e-6)return o>0;if((o<0||r<0)&&!(o<0&&r<0))return!0;const c=o/r;return r>0?c<n.c1&&(n.c1=c):c>n.c0&&(n.c0=c),n.c0<=n.c1}function W(t,n){const r=u(ot(t),n.ray.direction),o=-nt(t,n.ray.origin);if(r>-1e-6&&r<1e-6)return o>0;const c=o/r;return r>0?c<n.c1&&(n.c1=c):c>n.c0&&(n.c0=c),n.c0<=n.c1}function Y(t,n,r){const c=f(E.get(),ot(t),-t[3]),u=$(t,o(E.get(),n,c),E.get());return a(r,u,c),r}function Z(t,n,r,c){const u=ot(t),i=E.get(),s=E.get();j(u,i,s);const f=o(E.get(),r,n),a=g(i,f),I=g(s,f),N=g(u,f);return e(c,a,I,N)}function $(t,n,r){const c=f(E.get(),ot(t),u(ot(t),n));return o(r,n,c),r}function tt(t,n){return Math.abs(nt(t,n))}function nt(t,n){return u(ot(t),n)+t[3]}function rt(n,r,o,c,e){const i=u(ot(n),o);if(0===i)return!1;let s=-(u(ot(n),r)+n[3])/i;return c&et.CLAMP&&(s=t(s,0,1)),!(!(c&et.INFINITE_MIN)&&s<0||!(c&et.INFINITE_MAX)&&s>1)&&(a(e,r,f(e,o,s)),!0)}function ot(t){return t}function ct(t){return Math.abs(ot(t)[2])<h()}const ut=[0,0,1,0];var et;!function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX"}(et||(et={}));const it=et.INFINITE_MIN|et.INFINITE_MAX,st=et.INFINITE_MAX;


/***/ }),

/***/ 32532:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cr: () => (/* binding */ h),
/* harmony export */   LV: () => (/* binding */ p),
/* harmony export */   oC: () => (/* binding */ q),
/* harmony export */   vt: () => (/* binding */ d)
/* harmony export */ });
/* unused harmony exports copy, distance, distance2, equals, fromValues */
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85569);
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92114);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21839);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22279);
/* harmony import */ var _vectorStacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45573);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function d(i){return i?m((0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.g)(i.origin),(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.g)(i.direction)):m((0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)())}function m(i,n){return{origin:i,direction:n}}function j(n,r){return i(n.origin,r.origin)&&i(n.direction,r.direction)}function p(i,n){const r=S.get();return r.origin=i,r.direction=n,r}function k(i,n=d()){return v(i.origin,i.direction,n)}function h(i,n,o=d()){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.c)(o.origin,i),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.f)(o.direction,n,i),o}function v(i,n,t=d()){return r(t.origin,i),r(t.direction,n),t}function b(i,n){const r=o(a.get(),c(a.get(),i.direction),t(a.get(),n,i.origin));return e(r,r)}function l(i,n){return Math.sqrt(b(i,n))}function q(i,n,r){const o=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.j)(i.direction,(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.f)(r,n,i.origin));return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.g)(r,i.origin,(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.i)(r,i.direction,o)),r}const S=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_4__/* .ObjectStack */ .I((()=>d()));


/***/ }),

/***/ 16597:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g7: () => (/* binding */ e)
/* harmony export */ });
/* unused harmony exports angleAroundAxis, projectPoint, projectPointSignedLength */
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92504);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21839);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22279);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function i(n,r,s){const c=t(n,r)/t(n,n);return o(s,n,c)}function a(n,o){return t(n,o)/r(n)}function e(o,s){const c=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.j)(o,s)/((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.l)(o)*(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.l)(s));return-(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .acosClamped */ .XM)(c)}function f(o,r,u){s(m,o),s(h,r);const i=t(m,h),a=n(i),e=c(m,m,h);return t(e,u)<0?2*Math.PI-a:a}const m=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),h=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)();


/***/ }),

/***/ 45573:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Rc: () => (/* binding */ f),
  rq: () => (/* binding */ vectorStacks_c)
});

// UNUSED EXPORTS: sm3d, sq4d, sv2d, sv4d

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/ByteSizeUnit.js
var ByteSizeUnit = __webpack_require__(84858);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/nextTick.js
var nextTick = __webpack_require__(37103);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat3f64.js
var mat3f64 = __webpack_require__(76287);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat4f64.js
var mat4f64 = __webpack_require__(56192);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/quatf64.js
var quatf64 = __webpack_require__(46991);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec2f64.js
var vec2f64 = __webpack_require__(78286);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3f64.js
var vec3f64 = __webpack_require__(22279);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec4f64.js
var vec4f64 = __webpack_require__(52712);
;// ../node_modules/@arcgis/core/core/VectorStack.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class c{constructor(t,e,s){this._itemByteSize=t,this._itemCreate=e,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(s/this._itemByteSize)}get(){0===this._itemsPtr&&(0,nextTick/* nextTick */.d)((()=>this._reset()));const t=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=t;){const t=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize);for(let e=0;e<this._itemsPerBuffer;++e)this._items.push(this._itemCreate(t,e*this._itemByteSize));this._buffers.push(t)}return this._items[this._itemsPtr++]}_reset(){const t=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>t;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(t=a){return new c(16,vec2f64.c,t)}static createVec3f64(t=a){return new c(24,vec3f64.a,t)}static createVec4f64(t=a){return new c(32,vec4f64.a,t)}static createMat3f64(t=a){return new c(72,mat3f64.c,t)}static createMat4f64(t=a){return new c(128,mat4f64.c,t)}static createQuatf64(t=a){return new c(32,quatf64.c,t)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}}const a=4*ByteSizeUnit/* ByteSizeUnit */.u.KILOBYTES;

;// ../node_modules/@arcgis/core/geometry/support/vectorStacks.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const t=c.createVec2f64(),vectorStacks_c=c.createVec3f64(),r=c.createVec4f64(),vectorStacks_a=c.createMat3f64(),f=c.createMat4f64(),o=c.createQuatf64();


/***/ }),

/***/ 34528:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86394);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function t(t,r){const{data:a}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(t,{responseType:"image",...r});return a}


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
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class n{constructor(r){this._streamDataRequester=r}async loadJSON(r,e){return this._load("json",r,e)}async loadBinary(r,e){return (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isDataProtocol */ .DB)(r)?((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .throwIfAborted */ .Te)(e),(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .dataToArrayBuffer */ .lJ)(r)):this._load("binary",r,e)}async loadImage(r,e){return this._load("image",r,e)}async _load(a,o,i){if(null==this._streamDataRequester)return(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(o,{responseType:m[a]})).data;const n=await (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .result */ .Ke)(this._streamDataRequester.request(o,a,i));if(!0===n.ok)return n.value;throw (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .throwIfAbortError */ .QP)(n.error),new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A("",`Request for resource failed: ${n.error}`)}}const m={image:"image",binary:"array-buffer",json:"json","image+type":void 0};


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
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function o(r,t){switch(t){case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .PrimitiveType */ .WR.TRIANGLES:return f(r);case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .PrimitiveType */ .WR.TRIANGLE_STRIP:return u(r);case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .PrimitiveType */ .WR.TRIANGLE_FAN:return i(r)}}function f(e){return"number"==typeof e?(0,_geometry_support_Indices_js__WEBPACK_IMPORTED_MODULE_1__/* .getContinuousIndexArray */ .tM)(e):(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .isUint8Array */ .mg)(e)?new Uint16Array(e):e}function u(r){const t="number"==typeof r?r:r.length;if(t<3)return[];const n=t-2,o=(0,_geometry_support_Indices_js__WEBPACK_IMPORTED_MODULE_1__/* .newIndexArray */ .my)(3*n);if("number"==typeof r){let r=0;for(let t=0;t<n;t+=1)t%2==0?(o[r++]=t,o[r++]=t+1,o[r++]=t+2):(o[r++]=t+1,o[r++]=t,o[r++]=t+2)}else{let t=0;for(let e=0;e<n;e+=1)e%2==0?(o[t++]=r[e],o[t++]=r[e+1],o[t++]=r[e+2]):(o[t++]=r[e+1],o[t++]=r[e],o[t++]=r[e+2])}return o}function i(r){const t="number"==typeof r?r:r.length;if(t<3)return new Uint16Array(0);const e=t-2,n=e<=65536?new Uint16Array(3*e):new Uint32Array(3*e);if("number"==typeof r){let r=0;for(let t=0;t<e;++t)n[r++]=0,n[r++]=t+1,n[r++]=t+2;return n}const o=r[0];let f=r[1],u=0;for(let i=0;i<e;++i){const t=r[i+2];n[u++]=o,n[u++]=f,n[u++]=t,f=t}return n}


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


/***/ }),

/***/ 31068:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  y: () => (/* binding */ loader_l)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat4f64.js
var mat4f64 = __webpack_require__(56192);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/enums.js
var enums = __webpack_require__(41746);
;// ../node_modules/@arcgis/core/views/3d/glTF/LoaderResult.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function LoaderResult_r(e={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,colorTextureTransform:null,normalTextureTransform:null,occlusionTextureTransform:null,emissiveTextureTransform:null,metallicRoughnessTextureTransform:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}function l(r,l={}){return{data:r,parameters:{wrap:{s:enums/* TextureWrapMode */.pF.REPEAT,t:enums/* TextureWrapMode */.pF.REPEAT,...l.wrap},noUnpackFlip:!0,mipmap:!1,...l}}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/MapUtils.js
var MapUtils = __webpack_require__(82256);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(20909);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Version.js
var Version = __webpack_require__(50579);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat4.js
var mat4 = __webpack_require__(37046);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/quat.js
var quat = __webpack_require__(76743);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/quatf64.js
var quatf64 = __webpack_require__(46991);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/buffer/BufferView.js + 6 modules
var BufferView = __webpack_require__(57813);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/scalar.js
var scalar = __webpack_require__(3192);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
;// ../node_modules/@arcgis/core/views/3d/glTF/internal/BinaryStreamReader.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class BinaryStreamReader_t{constructor(t){this._data=t,this._offset4=0,this._dataUint32=new Uint32Array(this._data,0,Math.floor(this._data.byteLength/4))}readUint32(){const t=this._offset4;return this._offset4+=1,this._dataUint32[t]}readUint8Array(t){const s=4*this._offset4;return this._offset4+=t/4,new Uint8Array(this._data,s,t)}remainingBytes(){return this._data.byteLength-4*this._offset4}}

;// ../node_modules/@arcgis/core/views/3d/glTF/internal/enums.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var A,E;!function(A){A.SCALAR="SCALAR",A.VEC2="VEC2",A.VEC3="VEC3",A.VEC4="VEC4",A.MAT2="MAT2",A.MAT3="MAT3",A.MAT4="MAT4"}(A||(A={})),function(A){A[A.ARRAY_BUFFER=34962]="ARRAY_BUFFER",A[A.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(E||(E={}));

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/compilerUtils.js
var compilerUtils = __webpack_require__(73345);
;// ../node_modules/@arcgis/core/views/3d/glTF/internal/fillDefaults.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const t={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},a={pbrMetallicRoughness:t,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},fillDefaults_l={ESRI_externalColorMixMode:"tint"},fillDefaults_i=(e={})=>{const o={...t,...e.pbrMetallicRoughness},r=s({...fillDefaults_l,...e.extras});return{...a,...e,pbrMetallicRoughness:o,extras:r}};function s(o){switch(o.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:(0,compilerUtils/* neverReached */.Xb)(o.ESRI_externalColorMixMode),o.ESRI_externalColorMixMode="tint"}return o}const n={magFilter:enums/* TextureSamplingMode */.Cj.LINEAR,minFilter:enums/* TextureSamplingMode */.Cj.LINEAR_MIPMAP_LINEAR,wrapS:enums/* TextureWrapMode */.pF.REPEAT,wrapT:enums/* TextureWrapMode */.pF.REPEAT},c=e=>({...n,...e});

;// ../node_modules/@arcgis/core/views/3d/glTF/internal/pathUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function pathUtils_r(r){let e,t;return r.replace(/^(.*\/)?([^/]*)$/,((r,a,i)=>(e=a||"",t=i||"",""))),{dirPart:e,filePart:t}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/glTF/internal/resourceUtils.js
var resourceUtils = __webpack_require__(46629);
;// ../node_modules/@arcgis/core/views/3d/glTF/internal/Resource.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const K={MAGIC:1179937895,CHUNK_TYPE_JSON:1313821514,CHUNK_TYPE_BIN:5130562,MIN_HEADER_LENGTH:20};class Y{constructor(t,r,o,n){if(this._context=t,this.uri=r,this.json=o,this._glbBuffer=n,this._bufferLoaders=new Map,this._textureLoaders=new Map,this._textureCache=new Map,this._materialCache=new Map,this._nodeParentMap=new Map,this._nodeTransformCache=new Map,this._supportedExtensions=["KHR_texture_basisu"],this._baseUri=pathUtils_r(this.uri).dirPart,this._checkVersionSupported(),this._checkRequiredExtensionsSupported(),null==o.scenes)throw new Error/* default */.A("gltf-loader-unsupported-feature","Scenes must be defined.");if(null==o.meshes)throw new Error/* default */.A("gltf-loader-unsupported-feature","Meshes must be defined");if(null==o.nodes)throw new Error/* default */.A("gltf-loader-unsupported-feature","Nodes must be defined.");this._computeNodeParents()}static async load(t,r,o){if((0,urlUtils/* isDataProtocol */.DB)(r)){const e=(0,urlUtils/* dataComponents */.r$)(r);if(e&&"model/gltf-binary"!==e.mediaType)try{const o=JSON.parse(e.isBase64?atob(e.data):e.data);return new Y(t,r,o)}catch{}const o=(0,urlUtils/* dataToArrayBuffer */.lJ)(r);if(Y._isGLBData(o))return this._fromGLBData(t,r,o)}if(Q.test(r)||"gltf"===o?.expectedType){const e=await t.loadJSON(r,o);return new Y(t,r,e)}const i=await t.loadBinary(r,o);if(Y._isGLBData(i))return this._fromGLBData(t,r,i);if(Z.test(r)||"glb"===o?.expectedType)throw new Error/* default */.A("gltf-loader-invalid-glb","This is not a valid glb file.");const u=await t.loadJSON(r,o);return new Y(t,r,u)}static _isGLBData(e){if(null==e)return!1;const t=new BinaryStreamReader_t(e);return t.remainingBytes()>=4&&t.readUint32()===K.MAGIC}static async _fromGLBData(e,t,r){const o=await Y._parseGLBData(r);return new Y(e,t,o.json,o.binaryData)}static async _parseGLBData(r){const o=new BinaryStreamReader_t(r);if(o.remainingBytes()<12)throw new Error/* default */.A("gltf-loader-error","glb binary data is insufficiently large.");const n=o.readUint32(),s=o.readUint32(),a=o.readUint32();if(n!==K.MAGIC)throw new Error/* default */.A("gltf-loader-error","Magic first 4 bytes do not fit to expected glb value.");if(r.byteLength<a)throw new Error/* default */.A("gltf-loader-error","glb binary data is smaller than header specifies.");if(2!==s)throw new Error/* default */.A("gltf-loader-unsupported-feature","An unsupported glb container version was detected. Only version 2 is supported.");let i,u,f=0;for(;o.remainingBytes()>=8;){const r=o.readUint32(),n=o.readUint32();if(0===f){if(n!==K.CHUNK_TYPE_JSON)throw new Error/* default */.A("gltf-loader-error","First glb chunk must be JSON.");if(r<0)throw new Error/* default */.A("gltf-loader-error","No JSON data found.");i=await (0,resourceUtils/* jsonFromBinaryData */.KB)(o.readUint8Array(r))}else if(1===f){if(n!==K.CHUNK_TYPE_BIN)throw new Error/* default */.A("gltf-loader-unsupported-feature","Second glb chunk expected to be BIN.");u=o.readUint8Array(r)}else Logger/* default */.A.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] More than 2 glb chunks detected. Skipping.");f+=1}if(!i)throw new Error/* default */.A("gltf-loader-error","No glb JSON chunk detected.");return{json:i,binaryData:u}}async getBuffer(t,r){const o=this.json.buffers[t];if(null==o.uri){if(null==this._glbBuffer)throw new Error/* default */.A("gltf-loader-error","glb buffer not present");return this._glbBuffer}const n=await this._getBufferLoader(t,r);if(n.byteLength!==o.byteLength)throw new Error/* default */.A("gltf-loader-error","Buffer byte lengths should match.");return n}async _getBufferLoader(e,t){const r=this._bufferLoaders.get(e);if(r)return r;const o=this.json.buffers[e].uri,n=this._context.loadBinary(this._resolveUri(o),t).then((e=>new Uint8Array(e)));return this._bufferLoaders.set(e,n),n}async getAccessor(t,r){if(!this.json.accessors)throw new Error/* default */.A("gltf-loader-unsupported-feature","Accessors missing.");const o=this.json.accessors[t];if(null==o?.bufferView)throw new Error/* default */.A("gltf-loader-unsupported-feature","Some accessor does not specify a bufferView.");if(o.type in[A.MAT2,A.MAT3,A.MAT4])throw new Error/* default */.A("gltf-loader-unsupported-feature",`AttributeType ${o.type} is not supported`);const n=this.json.bufferViews[o.bufferView],s=await this.getBuffer(n.buffer,r),a=X[o.type],i=$[o.componentType],u=a*i,f=n.byteStride||u;return{raw:s.buffer,byteStride:f,byteOffset:s.byteOffset+(n.byteOffset||0)+(o.byteOffset||0),entryCount:o.count,isDenselyPacked:f===u,componentCount:a,componentByteSize:i,componentType:o.componentType,min:o.min,max:o.max,normalized:!!o.normalized}}async getIndexData(e,t){if(null==e.indices)return;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case enums/* DataType */.pe.UNSIGNED_BYTE:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case enums/* DataType */.pe.UNSIGNED_SHORT:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case enums/* DataType */.pe.UNSIGNED_INT:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case enums/* DataType */.pe.UNSIGNED_BYTE:return (0,scalar.m)(this._wrapAccessor(BufferView/* BufferViewUint8 */.SL,r));case enums/* DataType */.pe.UNSIGNED_SHORT:return (0,scalar.m)(this._wrapAccessor(BufferView/* BufferViewUint16 */.h,r));case enums/* DataType */.pe.UNSIGNED_INT:return (0,scalar.m)(this._wrapAccessor(BufferView/* BufferViewUint32 */.P,r))}}async getPositionData(t,r){if(null==t.attributes.POSITION)throw new Error/* default */.A("gltf-loader-unsupported-feature","No POSITION vertex data found.");const o=await this.getAccessor(t.attributes.POSITION,r);if(o.componentType!==enums/* DataType */.pe.FLOAT)throw new Error/* default */.A("gltf-loader-unsupported-feature","Expected type FLOAT for POSITION vertex attribute, but found "+enums/* DataType */.pe[o.componentType]);if(3!==o.componentCount)throw new Error/* default */.A("gltf-loader-unsupported-feature","POSITION vertex attribute must have 3 components, but found "+o.componentCount.toFixed());return this._wrapAccessor(BufferView/* BufferViewVec3f */.xs,o)}async getNormalData(t,r){if(null==t.attributes.NORMAL)throw new Error/* default */.A("gltf-loader-error","No NORMAL vertex data found.");const o=await this.getAccessor(t.attributes.NORMAL,r);if(o.componentType!==enums/* DataType */.pe.FLOAT)throw new Error/* default */.A("gltf-loader-unsupported-feature","Expected type FLOAT for NORMAL vertex attribute, but found "+enums/* DataType */.pe[o.componentType]);if(3!==o.componentCount)throw new Error/* default */.A("gltf-loader-unsupported-feature","NORMAL vertex attribute must have 3 components, but found "+o.componentCount.toFixed());return this._wrapAccessor(BufferView/* BufferViewVec3f */.xs,o)}async getTangentData(t,r){if(null==t.attributes.TANGENT)throw new Error/* default */.A("gltf-loader-error","No TANGENT vertex data found.");const o=await this.getAccessor(t.attributes.TANGENT,r);if(o.componentType!==enums/* DataType */.pe.FLOAT)throw new Error/* default */.A("gltf-loader-unsupported-feature","Expected type FLOAT for TANGENT vertex attribute, but found "+enums/* DataType */.pe[o.componentType]);if(4!==o.componentCount)throw new Error/* default */.A("gltf-loader-unsupported-feature","TANGENT vertex attribute must have 4 components, but found "+o.componentCount.toFixed());return new BufferView/* BufferViewVec4f */.Eq(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount)}async getTextureCoordinates(t,r){if(null==t.attributes.TEXCOORD_0)throw new Error/* default */.A("gltf-loader-error","No TEXCOORD_0 vertex data found.");const o=await this.getAccessor(t.attributes.TEXCOORD_0,r);if(2!==o.componentCount)throw new Error/* default */.A("gltf-loader-unsupported-feature","TEXCOORD_0 vertex attribute must have 2 components, but found "+o.componentCount.toFixed());if(o.componentType===enums/* DataType */.pe.FLOAT)return this._wrapAccessor(BufferView/* BufferViewVec2f */.gH,o);if(!o.normalized)throw new Error/* default */.A("gltf-loader-unsupported-feature","Integer component types are only supported for a normalized accessor for TEXCOORD_0.");return W(o)}async getVertexColors(t,r){if(null==t.attributes.COLOR_0)throw new Error/* default */.A("gltf-loader-error","No COLOR_0 vertex data found.");const o=await this.getAccessor(t.attributes.COLOR_0,r);if(4!==o.componentCount&&3!==o.componentCount)throw new Error/* default */.A("gltf-loader-unsupported-feature","COLOR_0 attribute must have 3 or 4 components, but found "+o.componentCount.toFixed());if(4===o.componentCount){if(o.componentType===enums/* DataType */.pe.FLOAT)return this._wrapAccessor(BufferView/* BufferViewVec4f */.Eq,o);if(o.componentType===enums/* DataType */.pe.UNSIGNED_BYTE)return this._wrapAccessor(BufferView/* BufferViewVec4u8 */.XP,o);if(o.componentType===enums/* DataType */.pe.UNSIGNED_SHORT)return this._wrapAccessor(BufferView/* BufferViewVec4u16 */.Uz,o)}else if(3===o.componentCount){if(o.componentType===enums/* DataType */.pe.FLOAT)return this._wrapAccessor(BufferView/* BufferViewVec3f */.xs,o);if(o.componentType===enums/* DataType */.pe.UNSIGNED_BYTE)return this._wrapAccessor(BufferView/* BufferViewVec3u8 */.eI,o);if(o.componentType===enums/* DataType */.pe.UNSIGNED_SHORT)return this._wrapAccessor(BufferView/* BufferViewVec3u16 */.nS,o)}throw new Error/* default */.A("gltf-loader-unsupported-feature","Unsupported component type for COLOR_0 attribute: "+enums/* DataType */.pe[o.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t,r){let o=e.material?this._materialCache.get(e.material):void 0;if(!o){const n=null!=e.material?fillDefaults_i(this.json.materials[e.material]):fillDefaults_i(),s=n.pbrMetallicRoughness,a=this.hasVertexColors(e),i=this.getTexture(s.baseColorTexture,t),u=this.getTexture(n.normalTexture,t),f=r?this.getTexture(n.occlusionTexture,t):void 0,c=r?this.getTexture(n.emissiveTexture,t):void 0,d=r?this.getTexture(s.metallicRoughnessTexture,t):void 0,l=null!=e.material?e.material:-1;o={alphaMode:n.alphaMode,alphaCutoff:n.alphaCutoff,color:s.baseColorFactor,doubleSided:!!n.doubleSided,colorTexture:await i,normalTexture:await u,name:n.name,id:l,occlusionTexture:await f,emissiveTexture:await c,emissiveFactor:n.emissiveFactor,metallicFactor:s.metallicFactor,roughnessFactor:s.roughnessFactor,metallicRoughnessTexture:await d,hasVertexColors:a,ESRI_externalColorMixMode:n.extras.ESRI_externalColorMixMode,colorTextureTransform:s?.baseColorTexture?.extensions?.KHR_texture_transform,normalTextureTransform:n.normalTexture?.extensions?.KHR_texture_transform,occlusionTextureTransform:n.occlusionTexture?.extensions?.KHR_texture_transform,emissiveTextureTransform:n.emissiveTexture?.extensions?.KHR_texture_transform,metallicRoughnessTextureTransform:s?.metallicRoughnessTexture?.extensions?.KHR_texture_transform}}return o}async getTexture(t,o){if(!t)return;if(0!==(t.texCoord||0))throw new Error/* default */.A("gltf-loader-unsupported-feature","Only TEXCOORD with index 0 is supported.");const n=t.index,s=this.json.textures[n],a=c(null!=s.sampler?this.json.samplers[s.sampler]:{}),i=this._getTextureSourceId(s),u=this.json.images[i],f=await this._loadTextureImageData(n,s,o);return (0,MapUtils/* getOrCreateMapValue */.tE)(this._textureCache,n,(()=>{const t=e=>33071===e||33648===e||10497===e,r=t=>{throw new Error/* default */.A("gltf-loader-error",`Unexpected TextureSampler WrapMode: ${t}`)};return{data:f,wrapS:t(a.wrapS)?a.wrapS:r(a.wrapS),wrapT:t(a.wrapT)?a.wrapT:r(a.wrapT),minFilter:a.minFilter,name:u.name,id:n}}))}getNodeTransform(e){if(void 0===e)return q;let t=this._nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this._getNodeParent(e)),o=this.json.nodes[e];o.matrix?t=(0,mat4.m)((0,mat4f64.a)(),r,o.matrix):o.translation||o.rotation||o.scale?(t=(0,mat4f64.b)(r),o.translation&&(0,mat4.w)(t,t,o.translation),o.rotation&&(z[3]=(0,quat.g)(z,o.rotation),(0,mat4.k)(t,t,z[3],z)),o.scale&&(0,mat4.b)(t,t,o.scale)):t=(0,mat4f64.b)(r),this._nodeTransformCache.set(e,t)}return t}_wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}_resolveUri(e){return (0,urlUtils/* makeAbsolute */.s2)(e,this._baseUri)}_getNodeParent(e){return this._nodeParentMap.get(e)}_checkVersionSupported(){const e=Version/* Version */.R.parse(this.json.asset.version,"glTF");J.validate(e)}_checkRequiredExtensionsSupported(){const t=this.json;if(t.extensionsRequired){if(!t.extensionsRequired.every((e=>this._supportedExtensions.includes(e))))throw new Error/* default */.A("gltf-loader-unsupported-feature","gltf loader was not able to load unsupported feature. Required extensions: "+t.extensionsRequired.join(", "))}}_computeNodeParents(){this.json.nodes.forEach(((e,t)=>{e.children&&e.children.forEach((e=>{this._nodeParentMap.set(e,t)}))}))}async _loadTextureImageData(e,t,r){const o=this._textureLoaders.get(e);if(o)return o;const n=this._createTextureLoader(t,r);return this._textureLoaders.set(e,n),n}_getTextureSourceId(t){if(void 0!==t.extensions&&null!==t.extensions.KHR_texture_basisu)return t.extensions.KHR_texture_basisu.source;if(null!==t.source)return t.source;throw new Error/* default */.A("gltf-loader-unsupported-feature","Source is expected to be defined for a texture. It can also be omitted in favour of an KHR_texture_basisu extension tag.")}async _createTextureLoader(t,r){const o=this._getTextureSourceId(t),n=this.json.images[o];if(n.uri){if(n.uri.endsWith(".ktx2")){const e=await this._context.loadBinary(this._resolveUri(n.uri),r);return new resourceUtils/* EncodedMeshTexture */.Xi(new Uint8Array(e))}return this._context.loadImage(this._resolveUri(n.uri),r)}if(null==n.bufferView)throw new Error/* default */.A("gltf-loader-unsupported-feature","Image bufferView must be defined.");if(null==n.mimeType)throw new Error/* default */.A("gltf-loader-unsupported-feature","Image mimeType must be defined.");const s=this.json.bufferViews[n.bufferView],a=await this.getBuffer(s.buffer,r);if(null!=s.byteStride)throw new Error/* default */.A("gltf-loader-unsupported-feature","byteStride not supported for image buffer");const i=a.byteOffset+(s.byteOffset||0);return (0,resourceUtils/* imageFromBinaryData */.pn)(new Uint8Array(a.buffer,i,s.byteLength),n.mimeType)}async getLoadedBuffersSize(){if(this._glbBuffer)return this._glbBuffer.byteLength;const e=await (0,promiseUtils/* allSettledValues */.nA)(Array.from(this._bufferLoaders.values())),t=await (0,promiseUtils/* allSettledValues */.nA)(Array.from(this._textureLoaders.values()));return e.reduce(((e,t)=>e+(t?.byteLength??0)),0)+t.reduce(((e,t)=>e+(t?(0,resourceUtils/* isEncodedMeshTexture */.x3)(t)?t.data.byteLength:t.width*t.height*4:0)),0)}}const q=(0,mat4.A)((0,mat4f64.a)(),Math.PI/2),J=new Version/* Version */.R(2,0,"glTF"),z=(0,quatf64.a)(),X={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},$={[enums/* DataType */.pe.BYTE]:1,[enums/* DataType */.pe.UNSIGNED_BYTE]:1,[enums/* DataType */.pe.SHORT]:2,[enums/* DataType */.pe.UNSIGNED_SHORT]:2,[enums/* DataType */.pe.FLOAT]:4,[enums/* DataType */.pe.INT]:4,[enums/* DataType */.pe.UNSIGNED_INT]:4};function W(e){switch(e.componentType){case enums/* DataType */.pe.BYTE:return new BufferView/* BufferViewVec2i8 */.D6(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case enums/* DataType */.pe.UNSIGNED_BYTE:return new BufferView/* BufferViewVec2u8 */.LC(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case enums/* DataType */.pe.SHORT:return new BufferView/* BufferViewVec2i16 */.mJ(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case enums/* DataType */.pe.UNSIGNED_SHORT:return new BufferView/* BufferViewVec2u16 */.Yi(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case enums/* DataType */.pe.UNSIGNED_INT:return new BufferView/* BufferViewVec2u32 */.An(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case enums/* DataType */.pe.FLOAT:return new BufferView/* BufferViewVec2f */.gH(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount)}}const Q=/\.gltf$/i,Z=/\.glb$/i;

;// ../node_modules/@arcgis/core/views/3d/glTF/loader.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let i=0;async function loader_l(t,r,a={},l=!0){const m=await Y.load(t,r,a),p="gltf_"+i++,T={lods:[],materials:new Map,textures:new Map,meta:u(m)},f=!(!m.json.asset.extras||"symbolResource"!==m.json.asset.extras.ESRI_type),x=new Map;await loader_c(m,(async(t,r,s,i)=>{const u=x.get(s)??0;x.set(s,u+1);const c=void 0!==t.mode?t.mode:enums/* PrimitiveType */.WR.TRIANGLES,f=c===enums/* PrimitiveType */.WR.TRIANGLES||c===enums/* PrimitiveType */.WR.TRIANGLE_STRIP||c===enums/* PrimitiveType */.WR.TRIANGLE_FAN?c:null;if(null==f)return void Logger/* default */.A.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Unsupported primitive mode ("+enums/* PrimitiveType */.WR[c]+"). Skipping primitive.");if(!m.hasPositions(t))return void Logger/* default */.A.getLogger("esri.views.3d.glTF").warn("Skipping primitive without POSITION vertex attribute.");const g=m.getPositionData(t,a),h=m.getMaterial(t,a,l),w=m.hasNormals(t)?m.getNormalData(t,a):null,v=m.hasTangents(t)?m.getTangentData(t,a):null,R=m.hasTextureCoordinates(t)?m.getTextureCoordinates(t,a):null,S=m.hasVertexColors(t)?m.getVertexColors(t,a):null,_=m.getIndexData(t,a),E={name:i,transform:(0,mat4f64.b)(r),attributes:{position:await g,normal:w?await w:null,texCoord0:R?await R:null,color:S?await S:null,tangent:v?await v:null},indices:await _,primitiveType:f,material:d(T,await h,p)};let I=null;null!=T.meta?.ESRI_lod&&"screenSpaceRadius"===T.meta.ESRI_lod.metric&&(I=T.meta.ESRI_lod.thresholds[s]),T.lods[s]=T.lods[s]||{parts:[],name:i,lodThreshold:I},T.lods[s].parts[u]=E}));for(const e of T.lods)e.parts=e.parts.filter((e=>!!e));const g=await m.getLoadedBuffersSize();return{model:T,meta:{isEsriSymbolResource:f,uri:m.uri},customMeta:{},size:g}}function u(e){const o=e.json;let t=null;return o.nodes.forEach((e=>{const o=e.extras;null!=o&&(o.ESRI_proxyEllipsoid||o.ESRI_lod)&&(t=o)})),t}async function loader_c(o,t){const r=o.json,s=r.scenes[r.scene||0].nodes,a=s.length>1,n=[];for(const e of s){const o=r.nodes[e];if(n.push(i(e,0)),m(o)&&!a){o.extensions.MSFT_lod.ids.forEach(((e,o)=>i(e,o+1)))}}async function i(s,a){const l=r.nodes[s],u=o.getNodeTransform(s);if(null!=l.weights&&Logger/* default */.A.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Morph targets are not supported."),null!=l.mesh){const e=r.meshes[l.mesh];for(const o of e.primitives)n.push(t(o,u,a,e.name))}for(const e of l.children||[])n.push(i(e,a))}await Promise.all(n)}function m(e){return e.extensions?.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function d(e,o,s){const a=o=>{const t=`${s}_tex_${o&&o.id}${o?.name?"_"+o.name:""}`;if(o&&!e.textures.has(t)){const s=l(o.data,{wrap:{s:o.wrapS,t:o.wrapT},mipmap:p.has(o.minFilter),noUnpackFlip:!0});e.textures.set(t,s)}return t},n=`${s}_mat_${o.id}_${o.name}`;if(!e.materials.has(n)){const r=LoaderResult_r({color:[o.color[0],o.color[1],o.color[2]],opacity:o.color[3],alphaMode:o.alphaMode,alphaCutoff:o.alphaCutoff,doubleSided:o.doubleSided,colorMixMode:o.ESRI_externalColorMixMode,textureColor:o.colorTexture?a(o.colorTexture):void 0,textureNormal:o.normalTexture?a(o.normalTexture):void 0,textureOcclusion:o.occlusionTexture?a(o.occlusionTexture):void 0,textureEmissive:o.emissiveTexture?a(o.emissiveTexture):void 0,textureMetallicRoughness:o.metallicRoughnessTexture?a(o.metallicRoughnessTexture):void 0,emissiveFactor:[o.emissiveFactor[0],o.emissiveFactor[1],o.emissiveFactor[2]],colorTextureTransform:o.colorTextureTransform,normalTextureTransform:o.normalTextureTransform,occlusionTextureTransform:o.occlusionTextureTransform,emissiveTextureTransform:o.emissiveTextureTransform,metallicRoughnessTextureTransform:o.metallicRoughnessTextureTransform,metallicFactor:o.metallicFactor,roughnessFactor:o.roughnessFactor});e.materials.set(n,r)}return n}const p=new Set([enums/* TextureSamplingMode */.Cj.LINEAR_MIPMAP_LINEAR,enums/* TextureSamplingMode */.Cj.LINEAR_MIPMAP_NEAREST]);


/***/ }),

/***/ 14218:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  fetch: () => (/* binding */ X)
});

// UNUSED EXPORTS: gltfToEngineResources, parseUrl

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/devEnvironmentUtils.js
var devEnvironmentUtils = __webpack_require__(19382);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat3.js
var mat3 = __webpack_require__(46615);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat3f64.js
var mat3f64 = __webpack_require__(76287);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat4.js
var mat4 = __webpack_require__(37046);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat4f64.js
var mat4f64 = __webpack_require__(56192);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3.js
var vec3 = __webpack_require__(21839);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3f64.js
var vec3f64 = __webpack_require__(22279);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/aaBoundingBox.js
var aaBoundingBox = __webpack_require__(4675);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/typedArrayUtil.js
var typedArrayUtil = __webpack_require__(86942);
;// ../node_modules/@arcgis/core/geometry/support/FloatArray.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function FloatArray_t(n,t=!1){return n<=typedArrayUtil/* nativeArrayMaxSize */.y9?t?new Array(n).fill(0):new Array(n):new Float32Array(n)}function FloatArray_e(t){return n(t)?t.length<r?t:new Float32Array(t):t.length<r?Array.from(t):t}function a(t){return(n(t)?t.length:t.byteLength/8)<=r?Array.from(t):new Float32Array(t)}function FloatArray_o(r,n,t){return Array.isArray(r)?r.slice(n,n+t):r.subarray(n,n+t)}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/buffer/BufferView.js + 6 modules
var BufferView = __webpack_require__(57813);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(24121);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec42.js
var vec42 = __webpack_require__(2662);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec22.js
var vec22 = __webpack_require__(56016);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec33.js
var vec33 = __webpack_require__(53866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec43.js
var vec43 = __webpack_require__(33381);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/glTF/DefaultLoadingContext.js
var DefaultLoadingContext = __webpack_require__(13298);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/glTF/loader.js + 6 modules
var loader = __webpack_require__(31068);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/glTF/internal/indexUtils.js
var indexUtils = __webpack_require__(8823);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/glTF/internal/resourceUtils.js
var resourceUtils = __webpack_require__(46629);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat3f32.js
var mat3f32 = __webpack_require__(21360);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec2f32.js
var vec2f32 = __webpack_require__(48325);
;// ../node_modules/@arcgis/core/views/3d/glTF/internal/TextureTransformUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function TextureTransformUtils_r(r){if(null==r)return null;const f=null!=r.offset?r.offset:vec2f32.Z,l=null!=r.rotation?r.rotation:0,c=null!=r.scale?r.scale:vec2f32.O,u=(0,mat3f32.f)(1,0,0,0,1,0,f[0],f[1],1),i=(0,mat3f32.f)(Math.cos(l),-Math.sin(l),0,Math.sin(l),Math.cos(l),0,0,0,1),m=(0,mat3f32.f)(c[0],0,0,0,c[1],0,0,0,1),e=(0,mat3f32.c)();return (0,mat3.m)(e,i,m),(0,mat3.m)(e,u,e),e}

;// ../node_modules/@arcgis/core/views/3d/layers/graphics/ProcessedObjectResource.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class ProcessedObjectResource_s{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class ProcessedObjectResource_t{constructor(t,e,r){this.name=t,this.lodThreshold=e,this.pivotOffset=r,this.stageResources=new ProcessedObjectResource_s,this.numberOfVertices=0}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/request.js
var request = __webpack_require__(86394);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/asyncUtils.js
var asyncUtils = __webpack_require__(12690);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/byteSizeEstimations.js
var byteSizeEstimations = __webpack_require__(13274);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var core_Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Geometry.js + 6 modules
var Geometry = __webpack_require__(9781);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Evented.js
var Evented = __webpack_require__(17306);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(6267);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(20909);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/requestUtils.js
var requestUtils = __webpack_require__(89125);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/assets.js
var assets = __webpack_require__(99050);
;// ../node_modules/@arcgis/core/libs/basisu/BasisU.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function BasisU_t(){if(null==BasisU_s){const t=t=>(0,assets/* getAssetUrl */.s)(`esri/libs/basisu/${t}`);BasisU_s=__webpack_require__.e(/* import() */ 3964).then(__webpack_require__.bind(__webpack_require__, 63964)).then((e=>e.b)).then((({default:e})=>e({locateFile:t}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return BasisU_s}let BasisU_s;

;// ../node_modules/@arcgis/core/libs/basisu/TextureFormat.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var TextureFormat_;!function(_){_[_.ETC1_RGB=0]="ETC1_RGB",_[_.ETC2_RGBA=1]="ETC2_RGBA",_[_.BC1_RGB=2]="BC1_RGB",_[_.BC3_RGBA=3]="BC3_RGBA",_[_.BC4_R=4]="BC4_R",_[_.BC5_RG=5]="BC5_RG",_[_.BC7_M6_RGB=6]="BC7_M6_RGB",_[_.BC7_M5_RGBA=7]="BC7_M5_RGBA",_[_.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",_[_.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",_[_.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",_[_.ATC_RGB=11]="ATC_RGB",_[_.ATC_RGBA=12]="ATC_RGBA",_[_.FXT1_RGB=17]="FXT1_RGB",_[_.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",_[_.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",_[_.ETC2_EAC_R11=20]="ETC2_EAC_R11",_[_.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",_[_.RGBA32=13]="RGBA32",_[_.RGB565=14]="RGB565",_[_.BGR565=15]="BGR565",_[_.RGBA4444=16]="RGBA4444"}(TextureFormat_||(TextureFormat_={}));

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/enums.js
var enums = __webpack_require__(41746);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/Texture.js + 1 modules
var Texture = __webpack_require__(6940);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/Util.js
var Util = __webpack_require__(19282);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/BasisUtil.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let l=null,BasisUtil_o=null;async function g(){return null==BasisUtil_o&&(BasisUtil_o=BasisU_t(),l=await BasisUtil_o),BasisUtil_o}function u(e,t){if(null==l)return e.byteLength;const n=new l.BasisFile(new Uint8Array(e)),s=BasisUtil_E(n)?m(n.getNumLevels(0),n.getHasAlpha(),n.getImageWidth(0,0),n.getImageHeight(0,0),t):0;return n.close(),n.delete(),s}function c(e,t){if(null==l)return e.byteLength;const n=new l.KTX2File(new Uint8Array(e)),s=T(n)?m(n.getLevels(),n.getHasAlpha(),n.getWidth(),n.getHeight(),t):0;return n.close(),n.delete(),s}function m(e,t,s,r,i){const l=(0,Util/* getBytesPerElementFormat */.IB)(t?enums/* CompressedTextureFormat */.CQ.COMPRESSED_RGBA8_ETC2_EAC:enums/* CompressedTextureFormat */.CQ.COMPRESSED_RGB8_ETC2),o=i&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(s*r*l*o)}function BasisUtil_E(e){return e.getNumImages()>=1&&!e.isUASTC()}function T(e){return e.getFaces()>=1&&e.isETC1S()}async function h(e,t,n){null==l&&(l=await g());const s=new l.BasisFile(new Uint8Array(n));if(!BasisUtil_E(s))return null;s.startTranscoding();const r=p(e,t,s.getNumLevels(0),s.getHasAlpha(),s.getImageWidth(0,0),s.getImageHeight(0,0),((e,t)=>s.getImageTranscodedSizeInBytes(0,e,t)),((e,t,n)=>s.transcodeImage(n,0,e,t,0,0)));return s.close(),s.delete(),r}async function _(e,t,n){null==l&&(l=await g());const s=new l.KTX2File(new Uint8Array(n));if(!T(s))return null;s.startTranscoding();const r=p(e,t,s.getLevels(),s.getHasAlpha(),s.getWidth(),s.getHeight(),((e,t)=>s.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,n)=>s.transcodeImage(n,e,0,0,t,0,-1,-1)));return s.close(),s.delete(),r}function p(e,a,l,o,g,u,c,m){const{compressedTextureETC:E,compressedTextureS3TC:T}=e.capabilities,[h,_]=E?o?[TextureFormat_.ETC2_RGBA,enums/* CompressedTextureFormat */.CQ.COMPRESSED_RGBA8_ETC2_EAC]:[TextureFormat_.ETC1_RGB,enums/* CompressedTextureFormat */.CQ.COMPRESSED_RGB8_ETC2]:T?o?[TextureFormat_.BC3_RGBA,enums/* CompressedTextureFormat */.CQ.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[TextureFormat_.BC1_RGB,enums/* CompressedTextureFormat */.CQ.COMPRESSED_RGB_S3TC_DXT1_EXT]:[TextureFormat_.RGBA32,enums/* PixelFormat */.Ab.RGBA],p=a.hasMipmap?l:Math.min(1,l),A=[];for(let t=0;t<p;t++)A.push(new Uint8Array(c(t,h))),m(t,h,A[t]);return a.internalFormat=_,a.hasMipmap=A.length>1,a.samplingMode=a.hasMipmap?enums/* TextureSamplingMode */.Cj.LINEAR_MIPMAP_LINEAR:enums/* TextureSamplingMode */.Cj.LINEAR,a.width=g,a.height=u,new Texture/* Texture */.g(e,a,{type:"compressed",levels:A})}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObject.js
var ContentObject = __webpack_require__(71077);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObjectType.js
var ContentObjectType = __webpack_require__(52997);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/DDSUtil.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const DDSUtil_o=Logger/* default */.A.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),DDSUtil_a=542327876,DDSUtil_i=131072,DDSUtil_l=4;function DDSUtil_s(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function DDSUtil_u(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const DDSUtil_c=DDSUtil_s("DXT1"),DDSUtil_h=DDSUtil_s("DXT3"),DDSUtil_m=DDSUtil_s("DXT5"),d=31,DDSUtil_p=0,DDSUtil_g=1,D=2,C=3,f=4,w=7,DDSUtil_T=20,DDSUtil_=21;function DDSUtil_E(e,r,o){const a=S(o,r.hasMipmap??!1);if(null==a)throw new Error("DDS texture data is null");const{textureData:i,internalFormat:l,width:s,height:u}=a;return r.samplingMode=i.levels.length>1?enums/* TextureSamplingMode */.Cj.LINEAR_MIPMAP_LINEAR:enums/* TextureSamplingMode */.Cj.LINEAR,r.hasMipmap=i.levels.length>1,r.internalFormat=l,r.width=s,r.height=u,new Texture/* Texture */.g(e,r,i)}function S(e,t){const n=new Int32Array(e,0,d);if(n[DDSUtil_p]!==DDSUtil_a)return DDSUtil_o.error("Invalid magic number in DDS header"),null;if(!(n[DDSUtil_T]&DDSUtil_l))return DDSUtil_o.error("Unsupported format, must contain a FourCC code"),null;const s=n[DDSUtil_];let E,S;switch(s){case DDSUtil_c:E=8,S=enums/* CompressedTextureFormat */.CQ.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case DDSUtil_h:E=16,S=enums/* CompressedTextureFormat */.CQ.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case DDSUtil_m:E=16,S=enums/* CompressedTextureFormat */.CQ.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return DDSUtil_o.error("Unsupported FourCC code:",DDSUtil_u(s)),null}let A=1,M=n[f],x=n[C];0==(3&M)&&0==(3&x)||(DDSUtil_o.warn("Rounding up compressed texture size to nearest multiple of 4."),M=M+3&-4,x=x+3&-4);const R=M,X=x;let b,I;n[D]&DDSUtil_i&&!1!==t&&(A=Math.max(1,n[w]));let v=n[DDSUtil_g]+4;const F=[];for(let r=0;r<A;++r)I=(M+3>>2)*(x+3>>2)*E,b=new Uint8Array(e,v,I),F.push(b),v+=I,M=Math.max(1,M>>1),x=Math.max(1,x>>1);return{textureData:{type:"compressed",levels:F},internalFormat:S,width:R,height:X}}

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/textureUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const textureUtils_e=16;function textureUtils_n(t){return Math.ceil(t/textureUtils_e)*textureUtils_e}function textureUtils_i(t,e){const n=1048576,i=4096,h=2;let o=t.width*t.height;if(o<i)return t instanceof ImageData?textureUtils_a(t):t;let c=t.width,u=t.height;do{c=Math.ceil(c/h),u=Math.ceil(u/h),o=c*u}while(o>n||null!=e&&(c>e||u>e));return textureUtils_r(t,c,u)}function textureUtils_h(t,e){const n=Math.max(t.width,t.height);if(n<=e)return t;const i=e/n;return textureUtils_r(t,Math.round(t.width*i),Math.round(t.height*i))}function textureUtils_r(t,e,n){if(t instanceof ImageData)return textureUtils_r(textureUtils_a(t),e,n);const i=document.createElement("canvas");i.width=e,i.height=n;return i.getContext("2d").drawImage(t,0,0,i.width,i.height),i}function textureUtils_a(e){const n=document.createElement("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");if(null==i)throw new core_Error/* default */.A("Failed to create 2d context from HTMLCanvasElement");return i.putImageData(e,0,0),n}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js
var lib_Util = __webpack_require__(58947);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/TextureDescriptor.js
var TextureDescriptor = __webpack_require__(45758);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Texture.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class N extends ContentObject/* ContentObject */.J{get parameters(){return this._parameters}constructor(e,r){super(),this._data=e,this.type=ContentObjectType/* ContentObjectType */.X.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new Evented/* default */.A,this._parameters={...M,...r},this._startPreload(e)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(e){null!=e&&(e instanceof HTMLVideoElement?(this.frameUpdate=t=>this._frameUpdate(e,t),this._startPreloadVideoElement(e)):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!((0,urlUtils/* isBlobProtocol */.w8)(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}}_startPreloadImageElement(e){(0,urlUtils/* isDataProtocol */.DB)(e.src)||(0,urlUtils/* isBlobProtocol */.w8)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}_createDescriptor(e){const t=new TextureDescriptor/* TextureDescriptor */.R;return t.wrapMode=this._parameters.wrap??enums/* TextureWrapMode */.pF.REPEAT,t.flipped=!this._parameters.noUnpackFlip,t.samplingMode=this._parameters.mipmap?enums/* TextureSamplingMode */.Cj.LINEAR_MIPMAP_LINEAR:enums/* TextureSamplingMode */.Cj.LINEAR,t.hasMipmap=!!this._parameters.mipmap,t.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,t.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?e.parameters.maxMaxAnisotropy:1),t}get glTexture(){return this._glTexture}get memoryEstimate(){return this._glTexture?.gpuMemoryUsage||Texture_C(this._data,this._parameters)}load(e){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const t=this._data;return null==t?(this._glTexture=new Texture/* Texture */.g(e,this._createDescriptor(e),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),"string"==typeof t?this._loadFromURL(e,t):t instanceof Image?this._loadFromImageElement(e,t):t instanceof HTMLVideoElement?this._loadFromVideoElement(e,t):t instanceof ImageData||t instanceof HTMLCanvasElement?this._loadFromImage(e,t):((0,typedArrayUtil/* isArrayBuffer */.mw)(t)||(0,typedArrayUtil/* isUint8Array */.mg)(t))&&this._parameters.encoding===basicInterfaces/* TextureEncodingMimeType */.JS.DDS_ENCODING?this._loadFromDDSData(e,t):((0,typedArrayUtil/* isArrayBuffer */.mw)(t)||(0,typedArrayUtil/* isUint8Array */.mg)(t))&&this._parameters.encoding===basicInterfaces/* TextureEncodingMimeType */.JS.KTX2_ENCODING?this._loadFromKTX2(e,t):((0,typedArrayUtil/* isArrayBuffer */.mw)(t)||(0,typedArrayUtil/* isUint8Array */.mg)(t))&&this._parameters.encoding===basicInterfaces/* TextureEncodingMimeType */.JS.BASIS_ENCODING?this._loadFromBasis(e,t):(0,typedArrayUtil/* isUint8Array */.mg)(t)?this._loadFromPixelData(e,t):(0,typedArrayUtil/* isArrayBuffer */.mw)(t)?this._loadFromPixelData(e,new Uint8Array(t)):null)}_frameUpdate(e,t){return null==this._glTexture||e.readyState<V.HAVE_CURRENT_DATA||t===e.currentTime?t:(this._glTexture.setData(e),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),e.currentTime)}_loadFromDDSData(e,t){return this._glTexture=DDSUtil_E(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>_(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>h(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){(0,lib_Util/* assert */.vA)(this._parameters.width>0&&this._parameters.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this._parameters.components?enums/* PixelFormat */.Ab.LUMINANCE:3===this._parameters.components?enums/* PixelFormat */.Ab.RGB:enums/* PixelFormat */.Ab.RGBA,r.width=this._parameters.width??0,r.height=this._parameters.height??0,this._glTexture=new Texture/* Texture */.g(e,r,t),this._glTexture}_loadFromURL(e,t){return this._loadAsync((async r=>{const s=await (0,requestImageUtils/* requestImage */.D)(t,{signal:r});return (0,promiseUtils/* throwIfAborted */.Te)(r),this._loadFromImage(e,s)}))}_loadFromImageElement(e,t){return t.complete?this._loadFromImage(e,t):this._loadAsync((async r=>{const s=await (0,requestUtils/* loadImageAsync */.Sx)(t,t.src,!1,r);return (0,promiseUtils/* throwIfAborted */.Te)(r),this._loadFromImage(e,s)}))}_loadFromVideoElement(e,t){return t.readyState>=V.HAVE_CURRENT_DATA?this._loadFromImage(e,t):this._loadFromVideoElementAsync(e,t)}_loadFromVideoElementAsync(t,r){return this._loadAsync((a=>new Promise(((n,l)=>{const m=()=>{r.removeEventListener("loadeddata",h),r.removeEventListener("error",_),(0,maybe/* removeMaybe */.xt)(p)},h=()=>{r.readyState>=V.HAVE_CURRENT_DATA&&(m(),n(this._loadFromImage(t,r)))},_=t=>{m(),l(t||new core_Error/* default */.A("Failed to load video"))};r.addEventListener("loadeddata",h),r.addEventListener("error",_);const p=(0,promiseUtils/* onAbort */.u7)(a,(()=>_((0,promiseUtils/* createAbortError */.NK)())))}))))}_loadFromImage(e,t){let r=t;if(!(r instanceof HTMLVideoElement)){const{maxTextureSize:t}=e.parameters;r=this._parameters.downsampleUncompressed?textureUtils_i(r,t):textureUtils_h(r,t)}const s=R(r);this._parameters.width=s.width,this._parameters.height=s.height;const a=this._createDescriptor(e);return a.pixelFormat=3===this._parameters.components?enums/* PixelFormat */.Ab.RGB:enums/* PixelFormat */.Ab.RGBA,a.width=s.width,a.height=s.height,this._glTexture=new Texture/* Texture */.g(e,a,r),this._glTexture}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const s=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(s,s),r}unload(){if(this._glTexture=(0,maybe/* disposeMaybe */.WD)(this._glTexture),null!=this._loadingController){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}function Texture_C(e,t){if(null==e)return 0;if((0,typedArrayUtil/* isArrayBuffer */.mw)(e)||(0,typedArrayUtil/* isUint8Array */.mg)(e))return t.encoding===basicInterfaces/* TextureEncodingMimeType */.JS.KTX2_ENCODING?c(e,!!t.mipmap):t.encoding===basicInterfaces/* TextureEncodingMimeType */.JS.BASIS_ENCODING?u(e,!!t.mipmap):e.byteLength;const{width:r,height:s}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?R(e):t;return(t.mipmap?4/3:1)*r*s*(t.components||4)||0}function R(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}var V;!function(e){e[e.HAVE_NOTHING=0]="HAVE_NOTHING",e[e.HAVE_METADATA=1]="HAVE_METADATA",e[e.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",e[e.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",e[e.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(V||(V={}));const M={wrap:{s:enums/* TextureWrapMode */.pF.REPEAT,t:enums/* TextureWrapMode */.pF.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js
var VertexAttribute = __webpack_require__(50645);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/ViewingMode.js
var ViewingMode = __webpack_require__(10714);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/support/buffer/InterleavedLayout.js
var InterleavedLayout = __webpack_require__(11110);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js
var ShaderOutput = __webpack_require__(55274);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js
var NormalAttribute_glsl = __webpack_require__(81283);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl.js
var Normals_glsl = __webpack_require__(46971);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js
var PhysicallyBasedRenderingParameters_glsl = __webpack_require__(39486);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLTextureMaterial.js + 1 modules
var GLTextureMaterial = __webpack_require__(98174);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Material.js + 1 modules
var Material = __webpack_require__(18429);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/OrderIndependentTransparency.js
var OrderIndependentTransparency = __webpack_require__(1931);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/RenderSlot.js
var RenderSlot = __webpack_require__(38323);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/sphere.js
var sphere = __webpack_require__(96245);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/support/orientedBoundingBox.js + 1 modules
var orientedBoundingBox = __webpack_require__(29709);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/verticalOffsetUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class y{constructor(){this._transform=n(),this._transformInverse=new x({value:this._transform},r,n),this._transformInverseTranspose=new x(this._transformInverse,e,n),this._transformTranspose=new x({value:this._transform},e,n),this._transformInverseRotation=new x({value:this._transform},t,s)}_invalidateLazyTransforms(){this._transformInverse.invalidate(),this._transformInverseTranspose.invalidate(),this._transformTranspose.invalidate(),this._transformInverseRotation.invalidate()}get transform(){return this._transform}get inverse(){return this._transformInverse.value}get inverseTranspose(){return this._transformInverseTranspose.value}get inverseRotation(){return this._transformInverseRotation.value}get transpose(){return this._transformTranspose.value}setTransformMatrix(t){o(this._transform,t)}multiplyTransform(t){i(this._transform,this._transform,t)}set(t){o(this._transform,t),this._invalidateLazyTransforms()}setAndInvalidateLazyTransforms(t,s){this.setTransformMatrix(t),this.multiplyTransform(s),this._invalidateLazyTransforms()}}class x{constructor(t,s,r){this._original=t,this._update=s,this._dirty=!0,this._transform=r()}invalidate(){this._dirty=!0}get value(){return this._dirty&&(this._update(this._transform,this._original.value),this._dirty=!1),this._transform}}class verticalOffsetUtils_d{constructor(t=0){this.offset=t,this.tmpVertex=(0,vec3f64.c)()}applyToVertex(t,s,r){const e=(0,vec3.s)(verticalOffsetUtils_R,t,s,r),o=(0,vec3.g)(q,e,this.localOrigin),i=this.offset/(0,vec3.l)(o);return (0,vec3.q)(this.tmpVertex,e,o,i),this.tmpVertex}applyToAabb(t){const s=B,r=verticalOffsetUtils_D,e=G;for(let a=0;a<3;++a)s[a]=t[0+a]+this.localOrigin[a],r[a]=t[3+a]+this.localOrigin[a],e[a]=s[a];const o=this.applyToVertex(s[0],s[1],s[2]);for(let a=0;a<3;++a)t[a]=o[a],t[a+3]=o[a];const i=s=>{const r=this.applyToVertex(s[0],s[1],s[2]);for(let e=0;e<3;++e)t[e]=Math.min(t[e],r[e]),t[e+3]=Math.max(t[e+3],r[e])};for(let a=1;a<8;++a){for(let t=0;t<3;++t)e[t]=0==(a&1<<t)?s[t]:r[t];i(e)}let n=0;for(let a=0;a<3;++a){s[a]*r[a]<0&&(n|=1<<a)}if(0!==n&&7!==n)for(let a=0;a<8;++a)if(0==(n&a)){for(let t=0;t<3;++t)e[t]=0!=(n&1<<t)?0:0!=(a&1<<t)?s[t]:r[t];i(e)}for(let a=0;a<3;++a)t[a]-=this.localOrigin[a],t[a+3]-=this.localOrigin[a];return t}}class verticalOffsetUtils_V{constructor(t=0){this.componentLocalOriginLength=0,this._tmpVertex=(0,vec3f64.c)(),this._mbs=(0,sphere.c)(),this._obb=(0,orientedBoundingBox/* create */.vt)(),this._totalOffset=0,this._offset=0,this._resetOffset(t)}_resetOffset(t){this._offset=t,this._totalOffset=t}set offset(t){this._resetOffset(t)}get offset(){return this._offset}set componentOffset(t){this._totalOffset=this._offset+t}set localOrigin(t){this.componentLocalOriginLength=(0,vec3.l)(t)}applyToVertex(t,s,r){const e=(0,vec3.s)(verticalOffsetUtils_R,t,s,r),o=(0,vec3.s)(q,t,s,r+this.componentLocalOriginLength),i=this._totalOffset/(0,vec3.l)(o);return (0,vec3.q)(this._tmpVertex,e,o,i),this._tmpVertex}applyToAabb(t){const s=(0,vec3.s)(verticalOffsetUtils_R,t[0],t[1],t[2]+this.componentLocalOriginLength),r=(0,vec3.s)(q,t[3],t[4],t[5]+this.componentLocalOriginLength),e=(0,vec3.z)(B,s),o=(0,vec3.z)(verticalOffsetUtils_D,r),i=(0,vec3.w)(G,s),n=(0,vec3.w)(verticalOffsetUtils_S,r),f=(0,vec3.x)(verticalOffsetUtils_C,i,n);f[0]=e[0]*o[0]<0?0:f[0],f[1]=e[1]*o[1]<0?0:f[1],f[2]=e[2]*o[2]<0?0:f[2];const l=(0,vec3.l)(f);if(l<this._totalOffset)return t[0]-=s[0]<0?this._totalOffset:0,t[1]-=s[1]<0?this._totalOffset:0,t[2]-=s[2]<0?this._totalOffset:0,t[3]+=r[0]>0?this._totalOffset:0,t[4]+=r[1]>0?this._totalOffset:0,t[5]+=r[2]>0?this._totalOffset:0,t;const u=(0,vec3.D)(verticalOffsetUtils_C,i,n),v=(0,vec3.l)(u),O=this._totalOffset/v,g=this._totalOffset/l;return t[0]+=s[0]*(s[0]>0?O:g),t[1]+=s[1]*(s[1]>0?O:g),t[2]+=s[2]*(s[2]>0?O:g),t[3]+=r[0]*(r[0]<0?O:g),t[4]+=r[1]*(r[1]<0?O:g),t[5]+=r[2]*(r[2]<0?O:g),t}applyToMbs(t){const s=(0,vec3.l)(t),r=this._totalOffset/s;return (0,vec3.q)(this._mbs,t,t,r),this._mbs[3]=t[3]+t[3]*this._totalOffset/s,this._mbs}applyToObb(t){return (0,orientedBoundingBox/* computeOffsetObb */.gm)(t,this._totalOffset,this._totalOffset,ViewingMode/* ViewingMode */.RT.Global,this._obb),this._obb}}class L{constructor(t=0){this.offset=t,this.sphere=(0,sphere.c)(),this.tmpVertex=(0,vec3f64.c)()}applyToVertex(t,s,r){const e=this.objectTransform.transform,o=(0,vec3.s)(verticalOffsetUtils_R,t,s,r),i=(0,vec3.e)(o,o,e),n=this.offset/(0,vec3.l)(i);(0,vec3.q)(i,i,i,n);const f=this.objectTransform.inverse;return (0,vec3.e)(this.tmpVertex,i,f),this.tmpVertex}applyToMinMax(t,s){const r=this.offset/(0,vec3.l)(t);(0,vec3.q)(t,t,t,r);const e=this.offset/(0,vec3.l)(s);(0,vec3.q)(s,s,s,e)}applyToAabb(t){const s=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*s,t[1]+=t[1]*s,t[2]+=t[2]*s;const r=this.offset/Math.sqrt(t[3]*t[3]+t[4]*t[4]+t[5]*t[5]);return t[3]+=t[3]*r,t[4]+=t[4]*r,t[5]+=t[5]*r,t}applyToBoundingSphere(t){const s=(0,vec3.l)(t),r=this.offset/s;return (0,vec3.q)(this.sphere,t,t,r),this.sphere[3]=t[3]+t[3]*this.offset/s,this.sphere}}const j=new L;function verticalOffsetUtils_I(t){return null!=t?(j.offset=t,j):null}const verticalOffsetUtils_M=new verticalOffsetUtils_V;function verticalOffsetUtils_w(t){return null!=t?(verticalOffsetUtils_M.offset=t,verticalOffsetUtils_M):null}const k=new verticalOffsetUtils_d;function z(t){return null!=t?(k.offset=t,k):null}const A="terrain",verticalOffsetUtils_R=(0,vec3f64.c)(),q=(0,vec3f64.c)(),B=(0,vec3f64.c)(),verticalOffsetUtils_D=(0,vec3f64.c)(),G=(0,vec3f64.c)(),verticalOffsetUtils_S=(0,vec3f64.c)(),verticalOffsetUtils_C=(0,vec3f64.c)();

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/bufferWriterUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function bufferWriterUtils_d(e,t,f,o=1){const{data:r,indices:i}=e,s=t.typedBuffer,n=t.typedBufferStride,c=i.length;if(f*=n,1===o)for(let l=0;l<c;++l)s[f]=r[i[l]],f+=n;else for(let l=0;l<c;++l){const e=r[i[l]];for(let t=0;t<o;t++)s[f]=e,f+=n}}function bufferWriterUtils_u(e,t,f){const{data:o,indices:r}=e,i=t.typedBuffer,s=t.typedBufferStride,n=r.length;f*=s;for(let c=0;c<n;++c){const e=2*r[c];i[f]=o[e],i[f+1]=o[e+1],f+=s}}function bufferWriterUtils_a(e,t,f,o){const{data:r,indices:i}=e,s=t.typedBuffer,n=t.typedBufferStride,c=i.length;if(f*=n,null==o||1===o)for(let l=0;l<c;++l){const e=3*i[l];s[f]=r[e],s[f+1]=r[e+1],s[f+2]=r[e+2],f+=n}else for(let l=0;l<c;++l){const e=3*i[l];for(let t=0;t<o;++t)s[f]=r[e],s[f+1]=r[e+1],s[f+2]=r[e+2],f+=n}}function bufferWriterUtils_p(e,t,f,o=1){const{data:r,indices:i}=e,s=t.typedBuffer,n=t.typedBufferStride,c=i.length;if(f*=n,1===o)for(let l=0;l<c;++l){const e=4*i[l];s[f]=r[e],s[f+1]=r[e+1],s[f+2]=r[e+2],s[f+3]=r[e+3],f+=n}else for(let l=0;l<c;++l){const e=4*i[l];for(let t=0;t<o;++t)s[f]=r[e],s[f+1]=r[e+1],s[f+2]=r[e+2],s[f+3]=r[e+3],f+=n}}function bufferWriterUtils_y(e,t,f){const o=e.typedBuffer,r=e.typedBufferStride;t*=r;for(let i=0;i<f;++i)o[t]=0,o[t+1]=0,o[t+2]=0,o[t+3]=0,t+=r}function bufferWriterUtils_B(e,t,f){const{data:o,indices:r}=e,i=t.typedBuffer,s=t.typedBufferStride,n=r.length;f*=s;for(let c=0;c<n;++c){const e=9*r[c];for(let t=0;t<9;++t)i[f+t]=o[e+t];f+=s}}function bufferWriterUtils_g(e,t,f){const{data:o,indices:r}=e,i=t.typedBuffer,s=t.typedBufferStride,n=r.length;f*=s;for(let c=0;c<n;++c){const e=16*r[c];for(let t=0;t<16;++t)i[f+t]=o[e+t];f+=s}}function b(t,f,o,r,i=1){if(!f)return void bufferWriterUtils_a(t,o,r,i);const{data:s,indices:n}=t,c=o.typedBuffer,l=o.typedBufferStride,d=n.length,u=f[0],p=f[1],y=f[2],B=f[4],g=f[5],b=f[6],O=f[8],h=f[9],S=f[10],N=f[12],R=f[13],E=f[14];r*=l;let A=0,L=0,z=0;const F=(0,mat4.y)(f)?e=>{A=s[e]+N,L=s[e+1]+R,z=s[e+2]+E}:e=>{const t=s[e],f=s[e+1],o=s[e+2];A=u*t+B*f+O*o+N,L=p*t+g*f+h*o+R,z=y*t+b*f+S*o+E};if(1===i)for(let e=0;e<d;++e)F(3*n[e]),c[r]=A,c[r+1]=L,c[r+2]=z,r+=l;else for(let e=0;e<d;++e){F(3*n[e]);for(let e=0;e<i;++e)c[r]=A,c[r+1]=L,c[r+2]=z,r+=l}}function O(f,o,r,i,s=1){if(!o)return void bufferWriterUtils_a(f,r,i,s);const{data:n,indices:c}=f,l=o,d=r.typedBuffer,u=r.typedBufferStride,p=c.length,y=l[0],B=l[1],g=l[2],b=l[4],O=l[5],h=l[6],S=l[8],N=l[9],R=l[10],E=!(0,mat4.z)(l),A=1e-6,L=1-A;i*=u;let z=0,F=0,I=0;const T=(0,mat4.y)(l)?e=>{z=n[e],F=n[e+1],I=n[e+2]}:e=>{const t=n[e],f=n[e+1],o=n[e+2];z=y*t+b*f+S*o,F=B*t+O*f+N*o,I=g*t+h*f+R*o};if(1===s)if(E)for(let e=0;e<p;++e){T(3*c[e]);const t=z*z+F*F+I*I;if(t<L&&t>A){const e=1/Math.sqrt(t);d[i]=z*e,d[i+1]=F*e,d[i+2]=I*e}else d[i]=z,d[i+1]=F,d[i+2]=I;i+=u}else for(let e=0;e<p;++e)T(3*c[e]),d[i]=z,d[i+1]=F,d[i+2]=I,i+=u;else for(let e=0;e<p;++e){if(T(3*c[e]),E){const e=z*z+F*F+I*I;if(e<L&&e>A){const t=1/Math.sqrt(e);z*=t,F*=t,I*=t}}for(let e=0;e<s;++e)d[i]=z,d[i+1]=F,d[i+2]=I,i+=u}}function bufferWriterUtils_h(e,f,o,r,i=1){if(!f)return void bufferWriterUtils_p(e,o,r,i);const{data:s,indices:n}=e,c=f,l=o.typedBuffer,d=o.typedBufferStride,u=n.length,a=c[0],y=c[1],B=c[2],g=c[4],b=c[5],O=c[6],h=c[8],S=c[9],N=c[10],R=!(0,mat4.z)(c),E=1e-6,A=1-E;if(r*=d,1===i)for(let t=0;t<u;++t){const e=4*n[t],f=s[e],o=s[e+1],i=s[e+2],c=s[e+3];let u=a*f+g*o+h*i,p=y*f+b*o+S*i,L=B*f+O*o+N*i;if(R){const e=u*u+p*p+L*L;if(e<A&&e>E){const t=1/Math.sqrt(e);u*=t,p*=t,L*=t}}l[r]=u,l[r+1]=p,l[r+2]=L,l[r+3]=c,r+=d}else for(let t=0;t<u;++t){const e=4*n[t],f=s[e],o=s[e+1],c=s[e+2],u=s[e+3];let p=a*f+g*o+h*c,L=y*f+b*o+S*c,z=B*f+O*o+N*c;if(R){const e=p*p+L*L+z*z;if(e<A&&e>E){const t=1/Math.sqrt(e);p*=t,L*=t,z*=t}}for(let t=0;t<i;++t)l[r]=p,l[r+1]=L,l[r+2]=z,l[r+3]=u,r+=d}}function bufferWriterUtils_S(e,t,f,o,r=1){const{data:i,indices:s}=e,n=f.typedBuffer,c=f.typedBufferStride,l=s.length;if(o*=c,t!==i.length||4!==t)if(1!==r)if(4!==t)for(let d=0;d<l;++d){const e=3*s[d];for(let t=0;t<r;++t)n[o]=i[e],n[o+1]=i[e+1],n[o+2]=i[e+2],n[o+3]=255,o+=c}else for(let d=0;d<l;++d){const e=4*s[d];for(let t=0;t<r;++t)n[o]=i[e],n[o+1]=i[e+1],n[o+2]=i[e+2],n[o+3]=i[e+3],o+=c}else{if(4===t){for(let e=0;e<l;++e){const t=4*s[e];n[o]=i[t],n[o+1]=i[t+1],n[o+2]=i[t+2],n[o+3]=i[t+3],o+=c}return}for(let e=0;e<l;++e){const t=3*s[e];n[o]=i[t],n[o+1]=i[t+1],n[o+2]=i[t+2],n[o+3]=255,o+=c}}else{n[o]=i[0],n[o+1]=i[1],n[o+2]=i[2],n[o+3]=i[3];const e=new Uint32Array(f.typedBuffer.buffer,f.start),t=c/4,s=e[o/=4];o+=t;const d=l*r;for(let f=1;f<d;++f)e[o]=s,o+=t}}function bufferWriterUtils_N(e,t,f){const{data:o,indices:r}=e,i=t.typedBuffer,s=t.typedBufferStride,n=r.length,c=o[0];f*=s;for(let l=0;l<n;++l)i[f]=c,f+=s}function bufferWriterUtils_R(e,t,f,o,r=1){const i=t.typedBuffer,s=t.typedBufferStride;if(o*=s,1===r)for(let n=0;n<f;++n)i[o]=e[0],i[o+1]=e[1],i[o+2]=e[2],i[o+3]=e[3],o+=s;else for(let n=0;n<f;++n)for(let t=0;t<r;++t)i[o]=e[0],i[o+1]=e[1],i[o+2]=e[2],i[o+3]=e[3],o+=s}function bufferWriterUtils_E(e,t,o,r,i,s){for(const n of t.fields.keys()){const t=e.attributes.get(n),c=t?.indices;if(t&&c)bufferWriterUtils_A(n,t,o,r,i,s);else if(n===VertexAttribute/* VertexAttribute */.r.OBJECTANDLAYERIDCOLOR&&null!=e.objectAndLayerIdColor){const t=e.attributes.get(VertexAttribute/* VertexAttribute */.r.POSITION)?.indices;if(t){const o=t.length,r=i.getField(n,BufferView/* BufferViewVec4u8 */.XP);bufferWriterUtils_R(e.objectAndLayerIdColor,r,o,s)}}}}function bufferWriterUtils_A(e,t,d,a,y,B){switch(e){case VertexAttribute/* VertexAttribute */.r.POSITION:{(0,lib_Util/* assert */.vA)(3===t.size);const f=y.getField(e,BufferView/* BufferViewVec3f */.xs);(0,lib_Util/* assert */.vA)(!!f,`No buffer view for ${e}`),f&&b(t,d,f,B);break}case VertexAttribute/* VertexAttribute */.r.NORMAL:{(0,lib_Util/* assert */.vA)(3===t.size);const f=y.getField(e,BufferView/* BufferViewVec3f */.xs);(0,lib_Util/* assert */.vA)(!!f,`No buffer view for ${e}`),f&&O(t,a,f,B);break}case VertexAttribute/* VertexAttribute */.r.NORMALCOMPRESSED:{(0,lib_Util/* assert */.vA)(2===t.size);const f=y.getField(e,BufferView/* BufferViewVec2i16 */.mJ);(0,lib_Util/* assert */.vA)(!!f,`No buffer view for ${e}`),f&&bufferWriterUtils_u(t,f,B);break}case VertexAttribute/* VertexAttribute */.r.UV0:{(0,lib_Util/* assert */.vA)(2===t.size);const f=y.getField(e,BufferView/* BufferViewVec2f */.gH);(0,lib_Util/* assert */.vA)(!!f,`No buffer view for ${e}`),f&&bufferWriterUtils_u(t,f,B);break}case VertexAttribute/* VertexAttribute */.r.COLOR:case VertexAttribute/* VertexAttribute */.r.SYMBOLCOLOR:{const o=y.getField(e,BufferView/* BufferViewVec4u8 */.XP);(0,lib_Util/* assert */.vA)(!!o,`No buffer view for ${e}`),(0,lib_Util/* assert */.vA)(3===t.size||4===t.size),!o||3!==t.size&&4!==t.size||bufferWriterUtils_S(t,t.size,o,B);break}case VertexAttribute/* VertexAttribute */.r.COLORFEATUREATTRIBUTE:{const f=y.getField(e,BufferView/* BufferViewFloat */.Y$);(0,lib_Util/* assert */.vA)(!!f,`No buffer view for ${e}`),(0,lib_Util/* assert */.vA)(1===t.size),f&&1===t.size&&bufferWriterUtils_N(t,f,B);break}case VertexAttribute/* VertexAttribute */.r.TANGENT:{(0,lib_Util/* assert */.vA)(4===t.size);const f=y.getField(e,BufferView/* BufferViewVec4f */.Eq);(0,lib_Util/* assert */.vA)(!!f,`No buffer view for ${e}`),f&&bufferWriterUtils_h(t,a,f,B);break}case VertexAttribute/* VertexAttribute */.r.PROFILERIGHT:case VertexAttribute/* VertexAttribute */.r.PROFILEUP:case VertexAttribute/* VertexAttribute */.r.PROFILEVERTEXANDNORMAL:case VertexAttribute/* VertexAttribute */.r.FEATUREVALUE:{(0,lib_Util/* assert */.vA)(4===t.size);const f=y.getField(e,BufferView/* BufferViewVec4f */.Eq);(0,lib_Util/* assert */.vA)(!!f,`No buffer view for ${e}`),f&&bufferWriterUtils_p(t,f,B)}}}

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultBufferWriter.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class DefaultBufferWriter_r{constructor(t){this.vertexBufferLayout=t}elementCount(e){return e.attributes.get(VertexAttribute/* VertexAttribute */.r.POSITION).indices.length}write(t,r,i,o,s){bufferWriterUtils_E(i,this.vertexBufferLayout,t,r,o,s)}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/MaterialUtil.js + 1 modules
var MaterialUtil = __webpack_require__(19647);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec4f64.js
var vec4f64 = __webpack_require__(52712);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js
var TextureCoordinateAttribute_glsl = __webpack_require__(26139);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl.js
var VertexNormal_glsl = __webpack_require__(82089);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff.js
var AlphaCutoff = __webpack_require__(33448);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ReloadableShaderModule.js
var ReloadableShaderModule = __webpack_require__(47705);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechnique.js
var ShaderTechnique = __webpack_require__(33444);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/DefaultVertexAttributeLocations.js
var DefaultVertexAttributeLocations = __webpack_require__(13148);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Program.js
var Program = __webpack_require__(58123);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/StencilUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const StencilUtils_i={func:enums/* CompareFunction */.MT.LESS},StencilUtils_s={func:enums/* CompareFunction */.MT.ALWAYS},StencilUtils_e={mask:255},StencilUtils_l={mask:0},StencilUtils_t=a=>({function:{func:E.NOTEQUAL,ref:a,mask:a},operation:{fail:n.KEEP,zFail:n.KEEP,zPass:n.KEEP}}),StencilUtils_u=a=>({function:{func:E.ALWAYS,ref:a,mask:a},operation:{fail:n.KEEP,zFail:n.KEEP,zPass:n.REPLACE}}),StencilUtils_f={function:{func:enums/* CompareFunction */.MT.ALWAYS,ref:basicInterfaces/* StencilBits */.dd.OutlineVisualElementMask,mask:basicInterfaces/* StencilBits */.dd.OutlineVisualElementMask},operation:{fail:enums/* StencilOperation */.eA.KEEP,zFail:enums/* StencilOperation */.eA.KEEP,zPass:enums/* StencilOperation */.eA.ZERO}},StencilUtils_o={function:{func:enums/* CompareFunction */.MT.ALWAYS,ref:basicInterfaces/* StencilBits */.dd.OutlineVisualElementMask,mask:basicInterfaces/* StencilBits */.dd.OutlineVisualElementMask},operation:{fail:enums/* StencilOperation */.eA.KEEP,zFail:enums/* StencilOperation */.eA.KEEP,zPass:enums/* StencilOperation */.eA.REPLACE}},P={function:{func:enums/* CompareFunction */.MT.EQUAL,ref:basicInterfaces/* StencilBits */.dd.OutlineVisualElementMask,mask:basicInterfaces/* StencilBits */.dd.OutlineVisualElementMask},operation:{fail:enums/* StencilOperation */.eA.KEEP,zFail:enums/* StencilOperation */.eA.KEEP,zPass:enums/* StencilOperation */.eA.KEEP}},StencilUtils_m={function:{func:enums/* CompareFunction */.MT.NOTEQUAL,ref:basicInterfaces/* StencilBits */.dd.OutlineVisualElementMask,mask:basicInterfaces/* StencilBits */.dd.OutlineVisualElementMask},operation:{fail:enums/* StencilOperation */.eA.KEEP,zFail:enums/* StencilOperation */.eA.KEEP,zPass:enums/* StencilOperation */.eA.KEEP}};

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/TransparencyPassType.js
var TransparencyPassType = __webpack_require__(81868);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/pbrUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function pbrUtils_u({normalTexture:u,metallicRoughnessTexture:n,metallicFactor:r,roughnessFactor:s,emissiveTexture:o,emissiveFactor:t,occlusionTexture:c}){return null==u&&null==n&&null==o&&(null==t||(0,vec3.h)(t,vec3f64.Z))&&null==c&&(null==s||1===s)&&(null==r||1===r||0===r)}const pbrUtils_n=[1,1,.5],pbrUtils_r=[0,.6,.2],pbrUtils_s=[0,1,.2];

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/DefaultMaterial.glsl.js
var DefaultMaterial_glsl = __webpack_require__(90618);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/renderState.js
var renderState = __webpack_require__(2449);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/DefaultMaterialTechnique.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class DefaultMaterialTechnique_k extends VertexNormal_glsl/* VertexNormalPassParameters */.Zo{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=(0,vec3f64.e)(pbrUtils_n),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=basicInterfaces/* CullFaceOptions */.s2.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=(0,vec3f64.f)(0,0,0),this.instancedDoublePrecision=!1,this.normalType=NormalAttribute_glsl/* NormalType */.W.Attribute,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,vec3f64.f)(.2,.2,.2),this.diffuse=(0,vec3f64.f)(.8,.8,.8),this.externalColor=(0,vec4f64.f)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,vec3f64.c)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=basicInterfaces/* DepthTestFunction */.it.Less,this.textureAlphaMode=basicInterfaces/* AlphaDiscardMode */.sf.Blend,this.textureAlphaCutoff=AlphaCutoff/* defaultMaskAlphaCutoff */.H,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=Material/* RenderOccludedFlag */.m$.Occlude,this.isDecoration=!1}}class DefaultMaterialTechnique_N extends VertexNormal_glsl/* VertexNormalDrawParameters */.gy{constructor(){super(...arguments),this.origin=(0,vec3f64.c)(),this.slicePlaneLocalOrigin=this.origin}}class DefaultMaterialTechnique_q extends ShaderTechnique/* ShaderTechnique */.w{initializeConfiguration(e,t){t.spherical=e.viewingMode===ViewingMode/* ViewingMode */.RT.Global,t.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?TextureCoordinateAttribute_glsl/* TextureCoordinateAttributeType */.q.Default:TextureCoordinateAttribute_glsl/* TextureCoordinateAttributeType */.q.None,t.objectAndLayerIdColorInstanced=t.instanced}initializeProgram(e){return this._initializeProgram(e,DefaultMaterialTechnique_q.shader)}_initializeProgram(e,t){return new Program/* Program */.B(e.rctx,t.get().build(this.configuration),DefaultVertexAttributeLocations/* Default3D */.D)}_convertDepthTestFunction(e){return e===basicInterfaces/* DepthTestFunction */.it.Lequal?enums/* CompareFunction */.MT.LEQUAL:enums/* CompareFunction */.MT.LESS}_makePipeline(e,t){const i=this.configuration,r=e===TransparencyPassType/* TransparencyPassType */.y.NONE,s=e===TransparencyPassType/* TransparencyPassType */.y.FrontFace;return (0,renderState/* makePipelineState */.Ey)({blending:i.output!==ShaderOutput/* ShaderOutput */.V.Color&&i.output!==ShaderOutput/* ShaderOutput */.V.Alpha||!i.transparent?null:r?OrderIndependentTransparency/* blendingDefault */.V0:(0,OrderIndependentTransparency/* oitBlending */.ez)(e),culling:DefaultMaterialTechnique_z(i)?(0,renderState/* cullingParams */.Xt)(i.cullFace):null,depthTest:{func:(0,OrderIndependentTransparency/* oitDepthTest */.K_)(e,this._convertDepthTestFunction(i.customDepthTest))},depthWrite:(r||s)&&i.writeDepth?renderState/* defaultDepthWriteParams */.kn:null,colorWrite:renderState/* defaultColorWriteParams */.wE,stencilWrite:i.hasOccludees?StencilUtils_e:null,stencilTest:i.hasOccludees?t?StencilUtils_o:StencilUtils_f:null,polygonOffset:r||s?null:(0,OrderIndependentTransparency/* getOITPolygonOffset */.aB)(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}function DefaultMaterialTechnique_z(e){return e.cullFace!==basicInterfaces/* CullFaceOptions */.s2.None||!e.hasSlicePlane&&(!e.transparent&&!e.doubleSidedMode)}DefaultMaterialTechnique_q.shader=new ReloadableShaderModule/* ReloadableShaderModule */.$(DefaultMaterial_glsl.D,(()=>__webpack_require__.e(/* import() */ 1318).then(__webpack_require__.bind(__webpack_require__, 71318))));

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration.js
var ShaderTechniqueConfiguration = __webpack_require__(69948);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js
var InstancedDoublePrecision_glsl = __webpack_require__(24682);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js
var BindType = __webpack_require__(57198);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultTechniqueConfiguration.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class DefaultTechniqueConfiguration_t extends InstancedDoublePrecision_glsl/* InstancedDoubleConfiguration */.nW{}(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)({constValue:!0})],DefaultTechniqueConfiguration_t.prototype,"hasSliceHighlight",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)({constValue:!1})],DefaultTechniqueConfiguration_t.prototype,"hasSliceInVertexProgram",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)({constValue:BindType/* BindType */.c.Pass})],DefaultTechniqueConfiguration_t.prototype,"pbrTextureBindType",void 0);

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/DefaultMaterialTechniqueConfiguration.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class DefaultMaterialTechniqueConfiguration_c extends DefaultTechniqueConfiguration_t{constructor(){super(...arguments),this.output=ShaderOutput/* ShaderOutput */.V.Color,this.alphaDiscardMode=basicInterfaces/* AlphaDiscardMode */.sf.Opaque,this.doubleSidedMode=Normals_glsl/* NormalsDoubleSidedMode */.W.None,this.pbrMode=PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Disabled,this.cullFace=basicInterfaces/* CullFaceOptions */.s2.None,this.transparencyPassType=TransparencyPassType/* TransparencyPassType */.y.NONE,this.normalType=NormalAttribute_glsl/* NormalType */.W.Attribute,this.textureCoordinateType=TextureCoordinateAttribute_glsl/* TextureCoordinateAttributeType */.q.None,this.customDepthTest=basicInterfaces/* DepthTestFunction */.it.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)({count:ShaderOutput/* ShaderOutput */.V.COUNT})],DefaultMaterialTechniqueConfiguration_c.prototype,"output",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)({count:basicInterfaces/* AlphaDiscardMode */.sf.COUNT})],DefaultMaterialTechniqueConfiguration_c.prototype,"alphaDiscardMode",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)({count:Normals_glsl/* NormalsDoubleSidedMode */.W.COUNT})],DefaultMaterialTechniqueConfiguration_c.prototype,"doubleSidedMode",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)({count:PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.COUNT})],DefaultMaterialTechniqueConfiguration_c.prototype,"pbrMode",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)({count:basicInterfaces/* CullFaceOptions */.s2.COUNT})],DefaultMaterialTechniqueConfiguration_c.prototype,"cullFace",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)({count:TransparencyPassType/* TransparencyPassType */.y.COUNT})],DefaultMaterialTechniqueConfiguration_c.prototype,"transparencyPassType",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)({count:NormalAttribute_glsl/* NormalType */.W.COUNT})],DefaultMaterialTechniqueConfiguration_c.prototype,"normalType",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)({count:TextureCoordinateAttribute_glsl/* TextureCoordinateAttributeType */.q.COUNT})],DefaultMaterialTechniqueConfiguration_c.prototype,"textureCoordinateType",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)({count:basicInterfaces/* DepthTestFunction */.it.COUNT})],DefaultMaterialTechniqueConfiguration_c.prototype,"customDepthTest",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"spherical",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"hasVertexColors",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"hasSymbolColors",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"hasVerticalOffset",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"hasSlicePlane",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"hasSliceHighlight",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"hasColorTexture",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"hasMetallicRoughnessTexture",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"hasEmissionTexture",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"hasOcclusionTexture",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"hasNormalTexture",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"hasScreenSizePerspective",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"hasVertexTangents",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"hasOccludees",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"multipassEnabled",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"hasModelTransformation",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"offsetBackfaces",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"vvSize",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"vvColor",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"receiveShadows",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"receiveAmbientOcclusion",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"textureAlphaPremultiplied",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"instanced",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"instancedColor",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"objectAndLayerIdColorInstanced",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"instancedDoublePrecision",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"writeDepth",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"transparent",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"enableOffset",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"cullAboveGround",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"snowCover",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"hasColorTextureTransform",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"hasEmissionTextureTransform",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"hasNormalTextureTransform",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"hasOcclusionTextureTransform",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],DefaultMaterialTechniqueConfiguration_c.prototype,"hasMetallicRoughnessTextureTransform",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)({constValue:!1})],DefaultMaterialTechniqueConfiguration_c.prototype,"occlusionPass",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)({constValue:!0})],DefaultMaterialTechniqueConfiguration_c.prototype,"hasVvInstancing",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)({constValue:!1})],DefaultMaterialTechniqueConfiguration_c.prototype,"useCustomDTRExponentForWater",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)({constValue:!1})],DefaultMaterialTechniqueConfiguration_c.prototype,"supportsTextureAtlas",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)({constValue:!0})],DefaultMaterialTechniqueConfiguration_c.prototype,"useFillLights",void 0);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/RealisticTree.glsl.js
var RealisticTree_glsl = __webpack_require__(3458);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/RealisticTreeTechnique.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class RealisticTreeTechnique_t extends DefaultMaterialTechnique_q{initializeConfiguration(i,a){super.initializeConfiguration(i,a),a.hasMetallicRoughnessTexture=!1,a.hasEmissionTexture=!1,a.hasOcclusionTexture=!1,a.hasNormalTexture=!1,a.hasModelTransformation=!1,a.normalType=NormalAttribute_glsl/* NormalType */.W.Attribute,a.doubleSidedMode=Normals_glsl/* NormalsDoubleSidedMode */.W.WindingOrder,a.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,RealisticTreeTechnique_t.shader)}}RealisticTreeTechnique_t.shader=new ReloadableShaderModule/* ReloadableShaderModule */.$(RealisticTree_glsl.R,(()=>__webpack_require__.e(/* import() */ 1198).then(__webpack_require__.bind(__webpack_require__, 91198))));

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultMaterial.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class DefaultMaterial_I extends Material/* Material */.im{constructor(e){super(e,DefaultMaterial_j),this.supportsEdges=!0,this._configuration=new DefaultMaterialTechniqueConfiguration_c,this._vertexBufferLayout=DefaultMaterial_L(this.parameters)}isVisibleForOutput(e){return e!==ShaderOutput/* ShaderOutput */.V.Shadow&&e!==ShaderOutput/* ShaderOutput */.V.ShadowExcludeHighlight&&e!==ShaderOutput/* ShaderOutput */.V.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const{hasInstancedColor:t,hasVertexColors:r,hasSymbolColors:s,vvColor:a}=e,i="replace"===e.colorMixMode,o=e.opacity>0,n=e.externalColor&&e.externalColor[3]>0,h=t||a||s;return r&&h?i||o:r?i?n:o:h?i||o:i?n:o}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=null!=this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=null!=this.parameters.screenSizePerspective,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,null!=this.parameters.customDepthTest&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?basicInterfaces/* CullFaceOptions */.s2.None:this.parameters.cullFace,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=null!=this.parameters.modelTransformation,e!==ShaderOutput/* ShaderOutput */.V.Color&&e!==ShaderOutput/* ShaderOutput */.V.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=Normals_glsl/* NormalsDoubleSidedMode */.W.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?Normals_glsl/* NormalsDoubleSidedMode */.W.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?Normals_glsl/* NormalsDoubleSidedMode */.W.WindingOrder:Normals_glsl/* NormalsDoubleSidedMode */.W.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=null!=t.ssao,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Schematic:PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Normal:PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<OrderIndependentTransparency/* OITPolygonOffsetLimit */.xt,this._configuration.snowCover=this.hasSnowCover(t),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(h,l,u,m,p,d){if(null!=this.parameters.verticalOffset){const h=u.camera;(0,vec3.s)(DefaultMaterial_z,l[12],l[13],l[14]);let d=null;switch(u.viewingMode){case ViewingMode/* ViewingMode */.RT.Global:d=(0,vec3.n)(DefaultMaterial_B,DefaultMaterial_z);break;case ViewingMode/* ViewingMode */.RT.Local:d=(0,vec3.c)(DefaultMaterial_B,DefaultMaterial_V)}let f=0;const g=(0,vec3.f)(DefaultMaterial_G,DefaultMaterial_z,h.eye),T=(0,vec3.l)(g),_=(0,vec3.i)(g,g,1/T);let x=null;this.parameters.screenSizePerspective&&(x=(0,vec3.j)(d,_)),f+=(0,MaterialUtil/* verticalOffsetAtDistance */.kE)(h,T,this.parameters.verticalOffset,x??0,this.parameters.screenSizePerspective),(0,vec3.i)(d,d,f),(0,vec3.t)(H,d,u.transform.inverseRotation),m=(0,vec3.f)(DefaultMaterial_D,m,H),p=(0,vec3.f)(DefaultMaterial_N,p,H)}(0,MaterialUtil/* intersectTriangleGeometry */.Uy)(h,u,m,p,verticalOffsetUtils_I(u.verticalOffset),d)}produces(e,t){if(t===ShaderOutput/* ShaderOutput */.V.Color||t===ShaderOutput/* ShaderOutput */.V.Alpha||t===ShaderOutput/* ShaderOutput */.V.Depth||t===ShaderOutput/* ShaderOutput */.V.Normal||t===ShaderOutput/* ShaderOutput */.V.Shadow||t===ShaderOutput/* ShaderOutput */.V.ShadowHighlight||t===ShaderOutput/* ShaderOutput */.V.ShadowExcludeHighlight||t===ShaderOutput/* ShaderOutput */.V.Highlight||t===ShaderOutput/* ShaderOutput */.V.ObjectAndLayerIdColor){return e===(this.parameters.transparent?this.parameters.writeDepth?RenderSlot/* RenderSlot */.N.TRANSPARENT_MATERIAL:RenderSlot/* RenderSlot */.N.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:RenderSlot/* RenderSlot */.N.OPAQUE_MATERIAL)||e===RenderSlot/* RenderSlot */.N.DRAPED_MATERIAL}return!1}createGLMaterial(e){return new DefaultMaterial_E(e)}createBufferWriter(){return new DefaultBufferWriter_r(this._vertexBufferLayout)}}class DefaultMaterial_E extends GLTextureMaterial/* GLTextureMaterial */.m{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(t){this._output!==ShaderOutput/* ShaderOutput */.V.Color&&this._output!==ShaderOutput/* ShaderOutput */.V.Alpha||(this._updateShadowState(t),this._updateOccludeeState(t));const r=this._material.parameters;this.updateTexture(r.textureId);const s=t.camera.viewInverseTransposeMatrix;return (0,vec3.s)(r.origin,s[3],s[7],s[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(r.treeRendering?RealisticTreeTechnique_t:DefaultMaterialTechnique_q,t)}}class DefaultMaterial_P extends DefaultMaterialTechnique_k{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}const DefaultMaterial_j=new DefaultMaterial_P;function DefaultMaterial_L(e){const t=(0,InterleavedLayout/* newLayout */.BP)().vec3f(VertexAttribute/* VertexAttribute */.r.POSITION);e.normalType===NormalAttribute_glsl/* NormalType */.W.Compressed?t.vec2i16(VertexAttribute/* VertexAttribute */.r.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(VertexAttribute/* VertexAttribute */.r.NORMAL),e.hasVertexTangents&&t.vec4f(VertexAttribute/* VertexAttribute */.r.TANGENT);return(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(VertexAttribute/* VertexAttribute */.r.UV0),e.hasVertexColors&&t.vec4u8(VertexAttribute/* VertexAttribute */.r.COLOR),e.hasSymbolColors&&t.vec4u8(VertexAttribute/* VertexAttribute */.r.SYMBOLCOLOR),(0,has/* default */.A)("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(VertexAttribute/* VertexAttribute */.r.OBJECTANDLAYERIDCOLOR),t}const DefaultMaterial_D=(0,vec3f64.c)(),DefaultMaterial_N=(0,vec3f64.c)(),DefaultMaterial_V=(0,vec3f64.f)(0,0,1),DefaultMaterial_B=(0,vec3f64.c)(),H=(0,vec3f64.c)(),DefaultMaterial_z=(0,vec3f64.c)(),DefaultMaterial_G=(0,vec3f64.c)();

;// ../node_modules/@arcgis/core/views/3d/layers/graphics/wosrLoader.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const v=Logger/* default */.A.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function wosrLoader_A(e,t){const n=await wosrLoader_j(e,t),s=await wosrLoader_E(n.textureDefinitions??{},t);let a=0;for(const r in s)if(s.hasOwnProperty(r)){const e=s[r];a+=e?.image?e.image.width*e.image.height*4:0}return{resource:n,textures:s,size:a+(0,byteSizeEstimations/* estimateNestedObjectSize */.iL)(n)}}async function wosrLoader_j(r,n){const s=n?.streamDataRequester;if(s)return I(r,s,n);const a=await (0,asyncUtils/* result */.Ke)((0,request/* default */.A)(r,n));if(!0===a.ok)return a.value.data;(0,promiseUtils/* throwIfAbortError */.QP)(a.error),wosrLoader_P(a.error)}async function I(e,r,n){const s=await (0,asyncUtils/* result */.Ke)(r.request(e,"json",n));if(!0===s.ok)return s.value;(0,promiseUtils/* throwIfAbortError */.QP)(s.error),wosrLoader_P(s.error.details.url)}function wosrLoader_P(e){throw new core_Error/* default */.A("",`Request for object resource failed: ${e}`)}function wosrLoader_M(e){const t=e.params,r=t.topology;let n=!0;switch(t.vertexAttributes||(v.warn("Geometry must specify vertex attributes"),n=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t?.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(v.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),n=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(v.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),n=!1)):(v.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),n=!1)}}else v.warn("Indexed geometries must specify faces"),n=!1;break}default:v.warn(`Unsupported topology '${r}'`),n=!1}e.params.material||(v.warn("Geometry requires material"),n=!1);const s=e.params.vertexAttributes;for(const a in s){s[a].values||(v.warn("Geometries with externally defined attributes are not yet supported"),n=!1)}return n}function wosrLoader_T(e,t){const r=new Array,n=new Array,s=new Array,o=new NestedMap/* NestedMap */.O,u=e.resource,c=Version/* Version */.R.parse(u.version||"1.0","wosr");wosrLoader_q.validate(c);const m=u.model.name,g=u.model.geometries,h=u.materialDefinitions??{},v=e.textures;let A=0;const j=new Map;for(let a=0;a<g.length;a++){const e=g[a];if(!wosrLoader_M(e))continue;const i=wosrLoader_k(e),u=e.params.vertexAttributes,c=[],m=t=>{if("PerAttributeArray"===e.params.topology)return null;const r=e.params.faces;for(const e in r)if(e===t)return r[e].values;return null},I=u[VertexAttribute/* VertexAttribute */.r.POSITION],P=I.values.length/I.valuesPerElement;for(const t in u){const e=u[t],r=e.values,n=m(t)??(0,Indices/* getContinuousIndexArray */.tM)(P);c.push([t,new Attribute/* Attribute */.n(r,n,e.valuesPerElement,!0)])}const T=i.texture,U=v&&v[T];if(U&&!j.has(T)){const{image:e,parameters:t}=U,r=new N(e,t);n.push(r),j.set(T,r)}const E=j.get(T),q=E?E.id:void 0,R=i.material;let B=o.get(R,T);if(null==B){const e=h[R.substring(R.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=U&&U.alphaChannelUsage,n=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,s=U?wosrLoader_O(U.alphaChannelUsage):void 0,a={ambient:(0,vec3f64.e)(e.diffuse),diffuse:(0,vec3f64.e)(e.diffuse),opacity:1-(e.transparency||0),transparent:n,textureAlphaMode:s,textureAlphaCutoff:.33,textureId:q,initTextureTransparent:!0,doubleSided:!0,cullFace:basicInterfaces/* CullFaceOptions */.s2.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:U?.parameters.preMultiplyAlpha??!1};t?.materialParameters&&Object.assign(a,t.materialParameters),B=new DefaultMaterial_I(a),o.set(R,T,B)}s.push(B);const C=new Geometry/* Geometry */.V(B,c);A+=c.find((e=>e[0]===VertexAttribute/* VertexAttribute */.r.POSITION))?.[1]?.indices.length??0,r.push(C)}return{engineResources:[{name:m,stageResources:{textures:n,materials:s,geometries:r},pivotOffset:u.model.pivotOffset,numberOfVertices:A,lodThreshold:null}],referenceBoundingBox:U(r)}}function U(e){const t=(0,aaBoundingBox/* empty */.Ie)();return e.forEach((e=>{const r=e.boundingInfo;null!=r&&((0,aaBoundingBox/* expandWithVec3 */.iT)(t,r.bbMin),(0,aaBoundingBox/* expandWithVec3 */.iT)(t,r.bbMax))})),t}async function wosrLoader_E(e,t){const r=new Array;for(const a in e){const n=e[a],s=n.images[0].data;if(!s){v.warn("Externally referenced texture data is not yet supported");continue}const o=n.encoding+";base64,"+s,i="/textureDefinitions/"+a,l="rgba"===n.channels?n.alphaChannelUsage||"transparency":"none",u={noUnpackFlip:!0,wrap:{s:enums/* TextureWrapMode */.pF.REPEAT,t:enums/* TextureWrapMode */.pF.REPEAT},preMultiplyAlpha:wosrLoader_O(l)!==basicInterfaces/* AlphaDiscardMode */.sf.Opaque},c=null!=t&&t.disableTextures?Promise.resolve(null):(0,requestImageUtils/* requestImage */.D)(o,t);r.push(c.then((e=>({refId:i,image:e,parameters:u,alphaChannelUsage:l}))))}const n=await Promise.all(r),s={};for(const a of n)s[a.refId]=a;return s}function wosrLoader_O(e){switch(e){case"mask":return basicInterfaces/* AlphaDiscardMode */.sf.Mask;case"maskAndTransparency":return basicInterfaces/* AlphaDiscardMode */.sf.MaskBlend;case"none":return basicInterfaces/* AlphaDiscardMode */.sf.Opaque;default:return basicInterfaces/* AlphaDiscardMode */.sf.Blend}}function wosrLoader_k(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const wosrLoader_q=new Version/* Version */.R(1,2,"wosr");

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultMaterial_COLOR_GAMMA.js
var DefaultMaterial_COLOR_GAMMA = __webpack_require__(42440);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/objectResourceUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function X(t,r){const o=Y((0,devEnvironmentUtils/* adjustStaticAGOUrl */.EM)(t));if("wosr"===o.fileType){const e=await(r.cache?r.cache.loadWOSR(o.url,r):wosrLoader_A(o.url,r)),{engineResources:t,referenceBoundingBox:s}=wosrLoader_T(e,r);return{lods:t,referenceBoundingBox:s,isEsriSymbolResource:!1,isWosr:!0}}const s=await(r.cache?r.cache.loadGLTF(o.url,r,!!r.usePBR):(0,loader/* loadGLTF */.y)(new DefaultLoadingContext/* DefaultLoadingContext */.R(r.streamDataRequester),o.url,r,r.usePBR)),i=s.model.meta?.ESRI_proxyEllipsoid,n=s.meta.isEsriSymbolResource&&null!=i&&s.meta.uri.includes("/RealisticTrees/");n&&!s.customMeta.esriTreeRendering&&(s.customMeta.esriTreeRendering=!0,se(s,i));const l=!!r.usePBR,a=s.meta.isEsriSymbolResource?{usePBR:l,isSchematic:!1,treeRendering:n,mrrFactors:[...pbrUtils_s]}:{usePBR:l,isSchematic:!1,treeRendering:!1,mrrFactors:[...pbrUtils_n]},u={...r.materialParameters,treeRendering:n},{engineResources:c,referenceBoundingBox:m}=Z(s,a,u,r.skipHighLods&&null==o.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:o.specifiedLodIndex});return{lods:c,referenceBoundingBox:m,isEsriSymbolResource:s.meta.isEsriSymbolResource,isWosr:!1}}function Y(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);if(t)return{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null};return e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function Z(e,t,r,o){const s=e.model,i=new Array,n=new Map,l=new Map,a=s.lods.length,u=(0,aaBoundingBox/* empty */.Ie)();return s.lods.forEach(((e,c)=>{const m=!0===o.skipHighLods&&(a>1&&0===c||a>3&&1===c)||!1===o.skipHighLods&&null!=o.singleLodIndex&&c!==o.singleLodIndex;if(m&&0!==c)return;const f=new ProcessedObjectResource_t(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const o=m?new DefaultMaterial_I({}):ee(s,e,f,t,r,n,l),{geometry:i,vertexCount:a}=te(e,null!=o?o:new DefaultMaterial_I({})),p=i.boundingInfo;null!=p&&0===c&&((0,aaBoundingBox/* expandWithVec3 */.iT)(u,p.bbMin),(0,aaBoundingBox/* expandWithVec3 */.iT)(u,p.bbMax)),null!=o&&(f.stageResources.geometries.push(i),f.numberOfVertices+=a)})),m||i.push(f)})),{engineResources:i,referenceBoundingBox:u}}function ee(e,t,r,o,s,i,n){const l=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),a=e.materials.get(t.material),u=null!=t.attributes.texCoord0,c=null!=t.attributes.normal;if(null==a)return null;const m=oe(a.alphaMode);if(!i.has(l)){if(u){const t=(t,r=!1)=>{if(null!=t&&!n.has(t)){const o=e.textures.get(t);if(null!=o){const e=o.data;n.set(t,new N((0,resourceUtils/* isEncodedMeshTexture */.x3)(e)?e.data:e,{...o.parameters,preMultiplyAlpha:!(0,resourceUtils/* isEncodedMeshTexture */.x3)(e)&&r,encoding:(0,resourceUtils/* isEncodedMeshTexture */.x3)(e)&&null!=e.encoding?e.encoding:void 0}))}}};t(a.textureColor,m!==basicInterfaces/* AlphaDiscardMode */.sf.Opaque),t(a.textureNormal),t(a.textureOcclusion),t(a.textureEmissive),t(a.textureMetallicRoughness)}const r=a.color[0]**(1/DefaultMaterial_COLOR_GAMMA/* colorGamma */.T),f=a.color[1]**(1/DefaultMaterial_COLOR_GAMMA/* colorGamma */.T),d=a.color[2]**(1/DefaultMaterial_COLOR_GAMMA/* colorGamma */.T),p=a.emissiveFactor[0]**(1/DefaultMaterial_COLOR_GAMMA/* colorGamma */.T),g=a.emissiveFactor[1]**(1/DefaultMaterial_COLOR_GAMMA/* colorGamma */.T),x=a.emissiveFactor[2]**(1/DefaultMaterial_COLOR_GAMMA/* colorGamma */.T),b=null!=a.textureColor&&u?n.get(a.textureColor):null,h=pbrUtils_u({normalTexture:a.textureNormal,metallicRoughnessTexture:a.textureMetallicRoughness,metallicFactor:a.metallicFactor,roughnessFactor:a.roughnessFactor,emissiveTexture:a.textureEmissive,emissiveFactor:a.emissiveFactor,occlusionTexture:a.textureOcclusion});i.set(l,new DefaultMaterial_I({...o,transparent:m===basicInterfaces/* AlphaDiscardMode */.sf.Blend,customDepthTest:basicInterfaces/* DepthTestFunction */.it.Lequal,textureAlphaMode:m,textureAlphaCutoff:a.alphaCutoff,diffuse:[r,f,d],ambient:[r,f,d],opacity:a.opacity,doubleSided:a.doubleSided,doubleSidedType:"winding-order",cullFace:a.doubleSided?basicInterfaces/* CullFaceOptions */.s2.None:basicInterfaces/* CullFaceOptions */.s2.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:c?NormalAttribute_glsl/* NormalType */.W.Attribute:NormalAttribute_glsl/* NormalType */.W.ScreenDerivative,castShadows:!0,textureId:null!=b?b.id:void 0,colorMixMode:a.colorMixMode,normalTextureId:null!=a.textureNormal&&u?n.get(a.textureNormal).id:void 0,textureAlphaPremultiplied:null!=b&&!!b.parameters.preMultiplyAlpha,occlusionTextureId:null!=a.textureOcclusion&&u?n.get(a.textureOcclusion).id:void 0,emissiveTextureId:null!=a.textureEmissive&&u?n.get(a.textureEmissive).id:void 0,metallicRoughnessTextureId:null!=a.textureMetallicRoughness&&u?n.get(a.textureMetallicRoughness).id:void 0,emissiveFactor:[p,g,x],mrrFactors:h?[...pbrUtils_r]:[a.metallicFactor,a.roughnessFactor,o.mrrFactors[2]],isSchematic:h,colorTextureTransformMatrix:TextureTransformUtils_r(a.colorTextureTransform),normalTextureTransformMatrix:TextureTransformUtils_r(a.normalTextureTransform),occlusionTextureTransformMatrix:TextureTransformUtils_r(a.occlusionTextureTransform),emissiveTextureTransformMatrix:TextureTransformUtils_r(a.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:TextureTransformUtils_r(a.metallicRoughnessTextureTransform),...s}))}const f=i.get(l);if(r.stageResources.materials.push(f),u){const e=e=>{null!=e&&r.stageResources.textures.push(n.get(e))};e(a.textureColor),e(a.textureNormal),e(a.textureOcclusion),e(a.textureEmissive),e(a.textureMetallicRoughness)}return f}function te(e,r){const o=e.attributes.position.count,s=(0,indexUtils/* convertPrimitiveToTriangles */.x)(e.indices||o,e.primitiveType),i=FloatArray_t(3*o),{typedBuffer:n,typedBufferStride:l}=e.attributes.position;(0,vec32.t)(i,n,e.transform,3,l);const a=[[VertexAttribute/* VertexAttribute */.r.POSITION,new Attribute/* Attribute */.n(i,s,3,!0)]];if(null!=e.attributes.normal){const r=FloatArray_t(3*o),{typedBuffer:i,typedBufferStride:n}=e.attributes.normal;(0,mat3.n)(re,e.transform),(0,vec32.a)(r,i,re,3,n),a.push([VertexAttribute/* VertexAttribute */.r.NORMAL,new Attribute/* Attribute */.n(r,s,3,!0)])}if(null!=e.attributes.tangent){const r=FloatArray_t(4*o),{typedBuffer:i,typedBufferStride:n}=e.attributes.tangent;(0,mat3.n)(re,e.transform),(0,vec42.t)(r,i,re,4,n),a.push([VertexAttribute/* VertexAttribute */.r.TANGENT,new Attribute/* Attribute */.n(r,s,4,!0)])}if(null!=e.attributes.texCoord0){const t=FloatArray_t(2*o),{typedBuffer:r,typedBufferStride:i}=e.attributes.texCoord0;(0,vec22.n)(t,r,2,i),a.push([VertexAttribute/* VertexAttribute */.r.UV0,new Attribute/* Attribute */.n(t,s,2,!0)])}if(null!=e.attributes.color){const t=new Uint8Array(4*o);4===e.attributes.color.elementCount?e.attributes.color instanceof BufferView/* BufferViewVec4f */.Eq?(0,vec42.s)(t,e.attributes.color,255):e.attributes.color instanceof BufferView/* BufferViewVec4u8 */.XP?(0,vec43.c)(t,e.attributes.color):e.attributes.color instanceof BufferView/* BufferViewVec4u16 */.Uz&&(0,vec42.s)(t,e.attributes.color,1/256):(t.fill(255),e.attributes.color instanceof BufferView/* BufferViewVec3f */.xs?(0,vec32.s)(t,e.attributes.color,255,4):e.attributes.color instanceof BufferView/* BufferViewVec3u8 */.eI?(0,vec33.c)(t,e.attributes.color.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof BufferView/* BufferViewVec3u16 */.nS&&(0,vec32.s)(t,e.attributes.color,1/256,4)),a.push([VertexAttribute/* VertexAttribute */.r.COLOR,new Attribute/* Attribute */.n(t,s,4,!0)])}return{geometry:new Geometry/* Geometry */.V(r,a),vertexCount:o}}const re=(0,mat3f64.a)();function oe(e){switch(e){case"BLEND":return basicInterfaces/* AlphaDiscardMode */.sf.Blend;case"MASK":return basicInterfaces/* AlphaDiscardMode */.sf.Mask;case"OPAQUE":case null:case void 0:return basicInterfaces/* AlphaDiscardMode */.sf.Opaque}}function se(e,t){for(let r=0;r<e.model.lods.length;++r){const f=e.model.lods[r];for(const d of f.parts){const f=d.attributes.normal;if(null==f)return;const p=d.attributes.position,g=p.count,b=(0,vec3f64.c)(),T=(0,vec3f64.c)(),y=(0,vec3f64.c)(),w=new Uint8Array(4*g),R=new Float64Array(3*g),v=(0,mat4.i)((0,mat4f64.a)(),d.transform);let j=0,B=0;for(let o=0;o<g;o++){p.getVec(o,T),f.getVec(o,b),(0,vec3.e)(T,T,d.transform),(0,vec3.f)(y,T,t.center),(0,vec3.B)(y,y,t.radius);const s=y[2],m=(0,vec3.l)(y),g=Math.min(.45+.55*m*m,1);(0,vec3.B)(y,y,t.radius),null!==v&&(0,vec3.e)(y,y,v),(0,vec3.n)(y,y),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,vec3.p)(y,y,b,s>-1?.2:Math.min(-4*s-3.8,1)),R[j]=y[0],R[j+1]=y[1],R[j+2]=y[2],j+=3,w[B]=255*g,w[B+1]=255*g,w[B+2]=255*g,w[B+3]=255,B+=4}d.attributes.normal=new BufferView/* BufferViewVec3f */.xs(R),d.attributes.color=new BufferView/* BufferViewVec4u8 */.XP(w)}}}


/***/ }),

/***/ 55623:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k5: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony exports encodeSymbolColor, parseColorMixMode */
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92504);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var n;function e(t){switch(t){case"multiply":default:return n.Multiply;case"ignore":return n.Ignore;case"replace":return n.Replace;case"tint":return n.Tint}}function r(e,r,a){if(null==e||r===n.Ignore)return a[0]=255,a[1]=255,a[2]=255,void(a[3]=255);const c=t(Math.round(e[3]*i),0,i),p=0===c||r===n.Tint?0:r===n.Replace?u:l;a[0]=t(Math.round(e[0]*o),0,o),a[1]=t(Math.round(e[1]*o),0,o),a[2]=t(Math.round(e[2]*o),0,o),a[3]=c+p}!function(t){t[t.Multiply=1]="Multiply",t[t.Ignore=2]="Ignore",t[t.Replace=3]="Replace",t[t.Tint=4]="Tint"}(n||(n={}));const o=255,i=85,u=(/* unused pure expression or super */ null && (i)),l=2*i;


/***/ }),

/***/ 11110:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BP: () => (/* binding */ H),
/* harmony export */   l5: () => (/* binding */ I)
/* harmony export */ });
/* unused harmony exports InterleavedBuffer, InterleavedLayout */
/* harmony import */ var _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57813);
/* harmony import */ var _geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32846);
/* harmony import */ var _webgl_engine_lib_Util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58947);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class D{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const s of e.fields.keys()){const t=e.fields.get(s);this[s]=new t.constructor(this.buffer,t.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const s=this[e];return s&&s.elementCount===t.ElementCount&&s.elementType===t.ElementType?s:null}slice(e,t){return new D(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t=0,s=0,i=e.count){const r=this.stride;if(r%4==0){const n=new Uint32Array(e.buffer,t*r,i*r/4);new Uint32Array(this.buffer,s*r,i*r/4).set(n)}else{const n=new Uint8Array(e.buffer,t*r,i*r);new Uint8Array(this.buffer,s*r,i*r).set(n)}return this}get usedMemory(){return this.byteLength}dispose(){}}class G{constructor(e=null){this._stride=0,this._lastAligned=0,this._fields=new Map,e&&(this._stride=e.stride,e.fields.forEach((e=>this._fields.set(e[0],{...e[1],constructor:N(e[1].constructor)}))))}vec2f(t,s){return this._appendField(t,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec2f */ .gH,s),this}vec2f64(e,s){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec2f64 */ .si,s),this}vec3f(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec3f */ .xs,t),this}vec3f64(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec3f64 */ .Xm,t),this}vec4f(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec4f */ .Eq,t),this}vec4f64(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec4f64 */ .Aj,t),this}mat3f(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewMat3f */ .jZ,t),this}mat3f64(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewMat3f64 */ .j0,t),this}mat4f(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewMat4f */ .Sx,t),this}mat4f64(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewMat4f64 */ .E$,t),this}vec4u8(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec4u8 */ .XP,t),this}f32(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewFloat */ .Y$,t),this}f64(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewFloat64 */ .qB,t),this}u8(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewUint8 */ .SL,t),this}u16(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewUint16 */ .h,t),this}i8(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewInt8 */ .bf,t),this}vec2i8(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec2i8 */ .D6,t),this}vec2i16(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec2i16 */ .mJ,t),this}vec2u8(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec2u8 */ .LC,t),this}vec4u16(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec4u16 */ .Uz,t),this}u32(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewUint32 */ .P,t),this}_appendField(e,t,s){if(this._fields.has(e))return void (0,_webgl_engine_lib_Util_js__WEBPACK_IMPORTED_MODULE_1__/* .assert */ .vA)(!1,`${e} already added to vertex buffer layout`);const i=t.ElementCount*(0,_geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_2__/* .elementTypeSize */ .GJ)(t.ElementType),r=this._stride;this._stride+=i,this._fields.set(e,{size:i,constructor:t,offset:r,optional:s})}createBuffer(e){return new D(this,e)}createView(e){return new D(this,e)}clone(){const e=new G;return e._stride=this._stride,e._fields=new Map,this._fields.forEach(((t,s)=>e._fields.set(s,t))),e.BufferType=this.BufferType,e}get stride(){if(this._lastAligned!==this._fields.size){let e=1;this._fields.forEach((t=>e=Math.max(e,(0,_geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_2__/* .elementTypeSize */ .GJ)(t.constructor.ElementType)))),this._stride=Math.floor((this._stride+e-1)/e)*e,this._lastAligned=this._fields.size}return this._stride}get fields(){return this._fields}}function H(){return new G}class I{constructor(e){this.fields=new Array,e.fields.forEach(((e,t)=>{const s={...e,constructor:K(e.constructor)};this.fields.push([t,s])})),this.stride=e.stride}}const J=[_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewFloat */ .Y$,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec2f */ .gH,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec3f */ .xs,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec4f */ .Eq,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewMat3f */ .jZ,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewMat4f */ .Sx,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewFloat64 */ .qB,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec2f64 */ .si,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec3f64 */ .Xm,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec4f64 */ .Aj,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewMat3f64 */ .j0,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewMat4f64 */ .E$,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewUint8 */ .SL,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec2u8 */ .LC,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec3u8 */ .eI,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec4u8 */ .XP,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewUint16 */ .h,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec2u16 */ .Yi,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec3u16 */ .nS,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec4u16 */ .Uz,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewUint32 */ .P,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec2u32 */ .An,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec3u32 */ .H$,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec4u32 */ .ml,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewInt8 */ .bf,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec2i8 */ .D6,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec3i8 */ .m8,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec4i8 */ .TX,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewInt16 */ .Qt,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec2i16 */ .mJ,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec3i16 */ .Vp,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec4i16 */ .E7,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewInt32 */ .My,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec2i32 */ .UL,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec3i32 */ .zD,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec4i32 */ .Y4];function K(e){return`${e.ElementType}_${e.ElementCount}`}function N(e){return O.get(e)}const O=new Map;J.forEach((e=>O.set(K(e),e)));


/***/ }),

/***/ 29709:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  gm: () => (/* binding */ ee),
  vt: () => (/* binding */ orientedBoundingBox_H)
});

// UNUSED EXPORTS: clone, compute, corners, intersectLine, intersectPlane, intersectSphere, isVisible, maximumDistancePlane, minimumDistancePlane, projectedArea, projectedRadius, radius, set, toAaBoundingBox

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat3.js
var mat3 = __webpack_require__(46615);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat3f64.js
var mat3f64 = __webpack_require__(76287);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/quat.js
var quat = __webpack_require__(76743);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/quatf64.js
var quatf64 = __webpack_require__(46991);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3.js
var vec3 = __webpack_require__(21839);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3f64.js
var vec3f64 = __webpack_require__(22279);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec4.js
var vec4 = __webpack_require__(25102);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec4f64.js
var vec4f64 = __webpack_require__(52712);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/aaBoundingBox.js
var aaBoundingBox = __webpack_require__(4675);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/plane.js + 1 modules
var plane = __webpack_require__(80530);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/ViewingMode.js
var ViewingMode = __webpack_require__(10714);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Attribute.js
var Attribute = __webpack_require__(70807);
;// ../node_modules/@arcgis/core/views/3d/support/dito.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const n=1e-6,dito_r=(/* unused pure expression or super */ null && ([0,0,0])),i=(/* unused pure expression or super */ null && ([0,0,0]));function o(n,o){const{data:s,size:a}=n,c=s.length/a;if(c<=0)return;const h=new J(n);Q(dito_r,h.minProj,h.maxProj),U(dito_r,dito_r,.5),R(i,h.maxProj,h.minProj);const u=L(i),m=new K;m.quality=u,c<14&&(n=new t(new Float64Array(h.buffer,112,42),3));const f=[0,0,0],l=[0,0,0],j=[0,0,0],b=[0,0,0],x=[0,0,0],I=[0,0,0],N=[0,0,0];switch(dito_e(h,n,N,f,l,j,b,x,I,m)){case 1:return void g(dito_r,i,o);case 2:return void p(n,b,o)}P(n,N,f,l,j,b,x,I,m),O(n,m.b0,m.b1,m.b2,_,dito_S);const V=[0,0,0];R(V,dito_S,_),m.quality=L(V),m.quality<u?D(m.b0,m.b1,m.b2,_,dito_S,V,o):g(dito_r,i,o)}function dito_e(t,r,i,o,e,s,a,c,h,u){if(j(t,o,e),tt(o,e)<n)return 1;R(a,o,e),Z(a,a);return x(r,o,a,s)<n?2:(R(c,e,s),Z(c,c),R(h,s,o),Z(h,h),X(i,c,a),Z(i,i),dito_M(r,i,a,c,h,u),0)}const dito_s=(/* unused pure expression or super */ null && ([0,0,0])),dito_a=(/* unused pure expression or super */ null && ([0,0,0])),dito_c=(/* unused pure expression or super */ null && ([0,0,0])),dito_h=(/* unused pure expression or super */ null && ([0,0,0])),dito_u=(/* unused pure expression or super */ null && ([0,0,0])),dito_m=(/* unused pure expression or super */ null && ([0,0,0])),dito_f=(/* unused pure expression or super */ null && ([0,0,0])),dito_l=(/* unused pure expression or super */ null && ([0,0,0]));function P(t,n,r,i,o,e,P,j,b){N(t,n,r,dito_s,dito_a),void 0!==dito_s[0]&&(R(dito_c,dito_s,r),Z(dito_c,dito_c),R(dito_h,dito_s,i),Z(dito_h,dito_h),R(dito_u,dito_s,o),Z(dito_u,dito_u),X(dito_m,dito_h,e),Z(dito_m,dito_m),X(dito_f,dito_u,P),Z(dito_f,dito_f),X(dito_l,dito_c,j),Z(dito_l,dito_l),dito_M(t,dito_m,e,dito_h,dito_c,b),dito_M(t,dito_f,P,dito_u,dito_h,b),dito_M(t,dito_l,j,dito_c,dito_u,b)),void 0!==dito_a[0]&&(R(dito_c,dito_a,r),Z(dito_c,dito_c),R(dito_h,dito_a,i),Z(dito_h,dito_h),R(dito_u,dito_a,o),Z(dito_u,dito_u),X(dito_m,dito_h,e),Z(dito_m,dito_m),X(dito_f,dito_u,P),Z(dito_f,dito_f),X(dito_l,dito_c,j),Z(dito_l,dito_l),dito_M(t,dito_m,e,dito_h,dito_c,b),dito_M(t,dito_f,P,dito_u,dito_h,b),dito_M(t,dito_l,j,dito_c,dito_u,b))}function j(t,n,r){let i=tt(t.maxVert[0],t.minVert[0]),o=0;for(let e=1;e<7;++e){const n=tt(t.maxVert[e],t.minVert[e]);n>i&&(i=n,o=e)}W(n,t.minVert[o]),W(r,t.maxVert[o])}const dito_b=(/* unused pure expression or super */ null && ([0,0,0]));function x(t,n,r,i){const{data:o,size:e}=t;let s=Number.NEGATIVE_INFINITY,a=0;for(let c=0;c<o.length;c+=e){dito_b[0]=o[c]-n[0],dito_b[1]=o[c+1]-n[1],dito_b[2]=o[c+2]-n[2];const t=r[0]*dito_b[0]+r[1]*dito_b[1]+r[2]*dito_b[2],i=r[0]*r[0]+r[1]*r[1]+r[2]*r[2],e=dito_b[0]*dito_b[0]+dito_b[1]*dito_b[1]+dito_b[2]*dito_b[2]-t*t/i;e>s&&(s=e,a=c)}return W(i,o,a),s}const dito_I=(/* unused pure expression or super */ null && ([0,0]));function N(t,r,i,o,e){E(t,r,dito_I,e,o);const s=nt(i,r);dito_I[1]-n<=s&&(o[0]=void 0),dito_I[0]+n>=s&&(e[0]=void 0)}const V=(/* unused pure expression or super */ null && ([0,0,0])),dito_y=(/* unused pure expression or super */ null && ([0,0,0])),dito_w=(/* unused pure expression or super */ null && ([0,0,0])),q=(/* unused pure expression or super */ null && ([0,0,0])),dito_A=(/* unused pure expression or super */ null && ([0,0,0])),d=(/* unused pure expression or super */ null && ([0,0,0]));function dito_M(t,r,i,o,e,s){if($(r)<n)return;X(V,i,r),X(dito_y,o,r),X(dito_w,e,r),T(t,r,dito_I),dito_A[1]=dito_I[0],q[1]=dito_I[1],d[1]=q[1]-dito_A[1];const a=[i,o,e],c=[V,dito_y,dito_w];for(let n=0;n<3;++n){T(t,a[n],dito_I),dito_A[0]=dito_I[0],q[0]=dito_I[1],T(t,c[n],dito_I),dito_A[2]=dito_I[0],q[2]=dito_I[1],d[0]=q[0]-dito_A[0],d[2]=q[2]-dito_A[2];const i=L(d);i<s.quality&&(W(s.b0,a[n]),W(s.b1,r),W(s.b2,c[n]),s.quality=i)}}const F=(/* unused pure expression or super */ null && ([0,0,0]));function T(t,n,r){const{data:i,size:o}=t;r[0]=Number.POSITIVE_INFINITY,r[1]=Number.NEGATIVE_INFINITY;for(let e=0;e<i.length;e+=o){const t=i[e]*n[0]+i[e+1]*n[1]+i[e+2]*n[2];r[0]=Math.min(r[0],t),r[1]=Math.max(r[1],t)}}function E(t,n,r,i,o){const{data:e,size:s}=t;W(i,e),W(o,i),r[0]=nt(F,n),r[1]=r[0];for(let a=s;a<e.length;a+=s){const t=e[a]*n[0]+e[a+1]*n[1]+e[a+2]*n[2];t<r[0]&&(r[0]=t,W(i,e,a)),t>r[1]&&(r[1]=t,W(o,e,a))}}function g(t,n,r){W(r.center,t),U(r.halfSize,n,.5),r.quaternion[0]=0,r.quaternion[1]=0,r.quaternion[2]=0,r.quaternion[3]=1}const dito_z=(/* unused pure expression or super */ null && ([0,0,0])),v=(/* unused pure expression or super */ null && ([0,0,0])),Y=(/* unused pure expression or super */ null && ([0,0,0])),_=(/* unused pure expression or super */ null && ([0,0,0])),dito_S=(/* unused pure expression or super */ null && ([0,0,0])),G=(/* unused pure expression or super */ null && ([0,0,0]));function p(t,r,i){W(dito_z,r),Math.abs(r[0])>Math.abs(r[1])&&Math.abs(r[0])>Math.abs(r[2])?dito_z[0]=0:Math.abs(r[1])>Math.abs(r[2])?dito_z[1]=0:dito_z[2]=0,$(dito_z)<n&&(dito_z[0]=dito_z[1]=dito_z[2]=1),X(v,r,dito_z),Z(v,v),X(Y,r,v),Z(Y,Y),O(t,r,v,Y,_,dito_S),R(G,dito_S,_),D(r,v,Y,_,dito_S,G,i)}function O(t,n,r,i,o,e){T(t,n,dito_I),o[0]=dito_I[0],e[0]=dito_I[1],T(t,r,dito_I),o[1]=dito_I[0],e[1]=dito_I[1],T(t,i,dito_I),o[2]=dito_I[0],e[2]=dito_I[1]}const dito_B=(/* unused pure expression or super */ null && ([0,0,0])),k=(/* unused pure expression or super */ null && ([1,0,0,0,1,0,0,0,1])),C=(/* unused pure expression or super */ null && ([0,0,0]));function D(t,n,r,i,o,e,s){k[0]=t[0],k[1]=t[1],k[2]=t[2],k[3]=n[0],k[4]=n[1],k[5]=n[2],k[6]=r[0],k[7]=r[1],k[8]=r[2],rt(s.quaternion,k),Q(C,i,o),U(C,C,.5),U(s.center,t,C[0]),U(dito_B,n,C[1]),Q(s.center,s.center,dito_B),U(dito_B,r,C[2]),Q(s.center,s.center,dito_B),U(s.halfSize,e,.5)}const H=7;class J{constructor(t){this.minVert=new Array(H),this.maxVert=new Array(H);const n=64*H;this.buffer=new ArrayBuffer(n);let r=0;this.minProj=new Float64Array(this.buffer,r,H),r+=8*H,this.maxProj=new Float64Array(this.buffer,r,H),r+=8*H;for(let a=0;a<H;++a)this.minVert[a]=new Float64Array(this.buffer,r,3),r+=24;for(let a=0;a<H;++a)this.maxVert[a]=new Float64Array(this.buffer,r,3),r+=24;for(let a=0;a<H;++a)this.minProj[a]=Number.POSITIVE_INFINITY,this.maxProj[a]=Number.NEGATIVE_INFINITY;const i=new Array(H),o=new Array(H),{data:e,size:s}=t;for(let a=0;a<e.length;a+=s){let t=e[a];t<this.minProj[0]&&(this.minProj[0]=t,i[0]=a),t>this.maxProj[0]&&(this.maxProj[0]=t,o[0]=a),t=e[a+1],t<this.minProj[1]&&(this.minProj[1]=t,i[1]=a),t>this.maxProj[1]&&(this.maxProj[1]=t,o[1]=a),t=e[a+2],t<this.minProj[2]&&(this.minProj[2]=t,i[2]=a),t>this.maxProj[2]&&(this.maxProj[2]=t,o[2]=a),t=e[a]+e[a+1]+e[a+2],t<this.minProj[3]&&(this.minProj[3]=t,i[3]=a),t>this.maxProj[3]&&(this.maxProj[3]=t,o[3]=a),t=e[a]+e[a+1]-e[a+2],t<this.minProj[4]&&(this.minProj[4]=t,i[4]=a),t>this.maxProj[4]&&(this.maxProj[4]=t,o[4]=a),t=e[a]-e[a+1]+e[a+2],t<this.minProj[5]&&(this.minProj[5]=t,i[5]=a),t>this.maxProj[5]&&(this.maxProj[5]=t,o[5]=a),t=e[a]-e[a+1]-e[a+2],t<this.minProj[6]&&(this.minProj[6]=t,i[6]=a),t>this.maxProj[6]&&(this.maxProj[6]=t,o[6]=a)}for(let a=0;a<H;++a){let t=i[a];W(this.minVert[a],e,t),t=o[a],W(this.maxVert[a],e,t)}}}class K{constructor(){this.b0=[1,0,0],this.b1=[0,1,0],this.b2=[0,0,1],this.quality=0}}function L(t){return t[0]*t[1]+t[0]*t[2]+t[1]*t[2]}function Q(t,n,r){t[0]=n[0]+r[0],t[1]=n[1]+r[1],t[2]=n[2]+r[2]}function R(t,n,r){t[0]=n[0]-r[0],t[1]=n[1]-r[1],t[2]=n[2]-r[2]}function U(t,n,r){t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r}function W(t,n,r=0){t[0]=n[r],t[1]=n[r+1],t[2]=n[r+2]}function X(t,n,r){const i=n[0],o=n[1],e=n[2],s=r[0],a=r[1],c=r[2];t[0]=o*c-e*a,t[1]=e*s-i*c,t[2]=i*a-o*s}function Z(t,n){const r=n[0]*n[0]+n[1]*n[1]+n[2]*n[2];if(r>0){const i=1/Math.sqrt(r);t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i}}function $(t){return t[0]*t[0]+t[1]*t[1]+t[2]*t[2]}function tt(t,n){const r=n[0]-t[0],i=n[1]-t[1],o=n[2]-t[2];return r*r+i*i+o*o}function nt(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function rt(t,n){const r=n[0]+n[4]+n[8];if(r>0){let i=Math.sqrt(r+1);t[3]=.5*i,i=.5/i,t[0]=(n[5]-n[7])*i,t[1]=(n[6]-n[2])*i,t[2]=(n[1]-n[3])*i}else{let r=0;n[4]>n[0]&&(r=1),n[8]>n[3*r+r]&&(r=2);const i=(r+1)%3,o=(r+2)%3;let e=Math.sqrt(n[3*r+r]-n[3*i+i]-n[3*o+o]+1);t[r]=.5*e,e=.5/e,t[3]=(n[3*i+o]-n[3*o+i])*e,t[i]=(n[3*i+r]+n[3*r+i])*e,t[o]=(n[3*o+r]+n[3*r+o])*e}}

;// ../node_modules/@arcgis/core/views/3d/support/orientedBoundingBox.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const orientedBoundingBox_V=(0,quatf64.a)(),orientedBoundingBox_C=(0,vec3f64.c)(),orientedBoundingBox_D=(0,vec3f64.c)(),orientedBoundingBox_E=(0,vec4f64.c)(),orientedBoundingBox_F=(0,mat3f64.a)();function orientedBoundingBox_H(e=[0,0,0],t=[-1,-1,-1],n=(0,quatf64.a)()){return{center:(0,vec3f64.g)(e),halfSize:(0,vec3f64.g)(t),quaternion:(0,quatf64.b)(n)}}function orientedBoundingBox_J(e){return orientedBoundingBox_H(e.center,e.halfSize,e.quaternion)}function orientedBoundingBox_K(e,t){s(t.center,e.center),s(t.halfSize,e.halfSize),a(t.quaternion,e.quaternion)}function orientedBoundingBox_L(e,t){return t=t||orientedBoundingBox_H(),I(e,t),t}function orientedBoundingBox_N(e,t){const n=A(t,e.center),a=orientedBoundingBox_Z(e,B(t));return n>a?1:n<-a?-1:0}function orientedBoundingBox_O(e,t){return orientedBoundingBox_C[0]=e.center[0]-t[0],orientedBoundingBox_C[1]=e.center[1]-t[1],orientedBoundingBox_C[2]=e.center[2]-t[2],r(orientedBoundingBox_V,e.quaternion),f(orientedBoundingBox_C,orientedBoundingBox_C,orientedBoundingBox_V),c(orientedBoundingBox_C,orientedBoundingBox_C),h(orientedBoundingBox_D,orientedBoundingBox_C,e.halfSize),u(orientedBoundingBox_D,orientedBoundingBox_C)<t[3]*t[3]}function orientedBoundingBox_P(t,n){n||(n=w());const a=e(orientedBoundingBox_F,t.quaternion),r=t.halfSize[0]*Math.abs(a[0])+t.halfSize[1]*Math.abs(a[3])+t.halfSize[2]*Math.abs(a[6]),i=t.halfSize[0]*Math.abs(a[1])+t.halfSize[1]*Math.abs(a[4])+t.halfSize[2]*Math.abs(a[7]),o=t.halfSize[0]*Math.abs(a[2])+t.halfSize[1]*Math.abs(a[5])+t.halfSize[2]*Math.abs(a[8]);return n[0]=t.center[0]-r,n[1]=t.center[1]-i,n[2]=t.center[2]-o,n[3]=t.center[0]+r,n[4]=t.center[1]+i,n[5]=t.center[2]+o,n}function orientedBoundingBox_Q(e,t){return A(t,e.center)-orientedBoundingBox_Z(e,B(t))}function orientedBoundingBox_R(e,t){return A(t,e.center)+orientedBoundingBox_Z(e,B(t))}function orientedBoundingBox_T(e,t){return orientedBoundingBox_N(e,t[0])<=0&&orientedBoundingBox_N(e,t[1])<=0&&orientedBoundingBox_N(e,t[2])<=0&&orientedBoundingBox_N(e,t[3])<=0&&orientedBoundingBox_N(e,t[4])<=0&&orientedBoundingBox_N(e,t[5])<=0}function orientedBoundingBox_U(e,t,n,a=0){r(orientedBoundingBox_V,e.quaternion),l(orientedBoundingBox_C,t,e.center);const i=f(orientedBoundingBox_C,orientedBoundingBox_C,orientedBoundingBox_V),o=f(orientedBoundingBox_D,n,orientedBoundingBox_V);let s=-1/0,c=1/0;for(let r=0;r<3;r++)if(Math.abs(o[r])>1e-6){const t=(a+e.halfSize[r]-i[r])/o[r],n=(-a-e.halfSize[r]-i[r])/o[r];s=Math.max(s,Math.min(t,n)),c=Math.min(c,Math.max(t,n))}else if(i[r]>e.halfSize[r]+a||i[r]<-e.halfSize[r]-a)return!1;return s<=c}function orientedBoundingBox_W(n,a,i,o,s){r(orientedBoundingBox_V,n.quaternion),z(orientedBoundingBox_C,a,n.center),f(orientedBoundingBox_C,orientedBoundingBox_C,orientedBoundingBox_V);const c=orientedBoundingBox_C[0]<-n.halfSize[0]?-1:orientedBoundingBox_C[0]>n.halfSize[0]?1:0,h=orientedBoundingBox_C[1]<-n.halfSize[1]?-1:orientedBoundingBox_C[1]>n.halfSize[1]?1:0,u=orientedBoundingBox_C[2]<-n.halfSize[2]?-1:orientedBoundingBox_C[2]>n.halfSize[2]?1:0,l=Math.abs(c)+Math.abs(h)+Math.abs(u);if(0===l)return 1/0;const b=1===l?4:6,q=6*(c+3*h+9*u+13);e(orientedBoundingBox_F,n.quaternion),t(orientedBoundingBox_F,orientedBoundingBox_F,n.halfSize);for(let e=0;e<b;e++){const t=orientedBoundingBox_Y[q+e];S(orientedBoundingBox_C,((1&t)<<1)-1,(2&t)-1,((4&t)>>1)-1),m(orientedBoundingBox_C,orientedBoundingBox_C,orientedBoundingBox_F),M(orientedBoundingBox_E,n.center,orientedBoundingBox_C),orientedBoundingBox_E[3]=1,y(orientedBoundingBox_E,orientedBoundingBox_E,i);const a=1/Math.max(1e-6,orientedBoundingBox_E[3]);orientedBoundingBox_X[2*e]=orientedBoundingBox_E[0]*a,orientedBoundingBox_X[2*e+1]=orientedBoundingBox_E[1]*a}const p=2*b-2;let j=orientedBoundingBox_X[0]*(orientedBoundingBox_X[3]-orientedBoundingBox_X[p+1])+orientedBoundingBox_X[p]*(orientedBoundingBox_X[1]-orientedBoundingBox_X[p-1]);for(let e=2;e<p;e+=2)j+=orientedBoundingBox_X[e]*(orientedBoundingBox_X[e+3]-orientedBoundingBox_X[e-1]);return Math.abs(j)*o*s*.125}const orientedBoundingBox_X=(/* unused pure expression or super */ null && ([.1,.2,.3,.4,.5,.6,.7,.8,.9,1,1.1,1.2])),orientedBoundingBox_Y=(()=>{const e=new Int8Array(162);let t=0;const n=n=>{for(let a=0;a<n.length;a++)e[t+a]=n[a];t+=6};return n([6,2,3,1,5,4]),n([0,2,3,1,5,4]),n([0,2,3,7,5,4]),n([0,1,3,2,6,4]),n([0,1,3,2,0,0]),n([0,1,5,7,3,2]),n([0,1,3,7,6,4]),n([0,1,3,7,6,2]),n([0,1,5,7,6,2]),n([0,1,5,4,6,2]),n([0,1,5,4,0,0]),n([0,1,3,7,5,4]),n([0,2,6,4,0,0]),n([0,0,0,0,0,0]),n([1,3,7,5,0,0]),n([2,3,7,6,4,0]),n([2,3,7,6,0,0]),n([2,3,1,5,7,6]),n([0,1,5,7,6,2]),n([0,1,5,7,6,4]),n([0,1,3,7,6,4]),n([4,5,7,6,2,0]),n([4,5,7,6,0,0]),n([4,5,1,3,7,6]),n([0,2,3,7,5,4]),n([6,2,3,7,5,4]),n([6,2,3,1,5,4]),e})();function orientedBoundingBox_Z(e,t){r(orientedBoundingBox_V,e.quaternion),f(orientedBoundingBox_C,t,orientedBoundingBox_V);const n=e.halfSize;return Math.abs(orientedBoundingBox_C[0]*n[0])+Math.abs(orientedBoundingBox_C[1]*n[1])+Math.abs(orientedBoundingBox_C[2]*n[2])}function orientedBoundingBox_$(e,t){for(let n=0;n<8;++n){const a=t[n];a[0]=1&n?-e.halfSize[0]:e.halfSize[0],a[1]=2&n?-e.halfSize[1]:e.halfSize[1],a[2]=4&n?-e.halfSize[2]:e.halfSize[2],f(a,a,e.quaternion),M(a,a,e.center)}}function orientedBoundingBox_(e){return b(e.halfSize)}function ee(e,t,n,i,o){if((0,quat.c)(o.quaternion,e.quaternion),i===ViewingMode/* ViewingMode */.RT.Global){(0,quat.a)(re,e.quaternion),(0,vec3.v)(te,e.center,re),(0,vec3.w)(ne,te),(0,vec3.x)(ae,ne,e.halfSize),(0,vec3.u)(ae,ne,ae);const a=(0,vec3.l)(ae);(0,vec3.g)(ae,ne,e.halfSize);const i=(0,vec3.l)(ae);if(a<n)(0,vec3.c)(o.center,e.center),(0,vec3.s)(te,n,n,n),(0,vec3.g)(o.halfSize,e.halfSize,te);else{const r=i>0?1+t/i:1,s=a>0?1+n/a:1,c=(s+r)/2,h=(s-r)/2;(0,vec3.i)(o.halfSize,ne,h),(0,vec3.q)(o.halfSize,o.halfSize,e.halfSize,c),(0,vec3.i)(o.center,ne,c),(0,vec3.q)(o.center,o.center,e.halfSize,h),(0,vec3.z)(te,te),(0,vec3.A)(o.center,o.center,te),(0,vec3.v)(o.center,o.center,o.quaternion)}}else{const a=(0,vec3.s)(te,0,0,1);(0,vec3.q)(o.center,e.center,a,(n+t)/2),(0,quat.a)(re,e.quaternion),(0,vec3.v)(a,a,re),(0,vec3.w)(a,a),(0,vec3.q)(o.halfSize,e.halfSize,a,(n-t)/2)}return o}const te=(0,vec3f64.c)(),ne=(0,vec3f64.c)(),ae=(0,vec3f64.c)(),re=(0,quatf64.a)();


/***/ }),

/***/ 40641:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i$: () => (/* binding */ n),
/* harmony export */   oD: () => (/* binding */ d),
/* harmony export */   xJ: () => (/* binding */ i)
/* harmony export */ });
/* unused harmony export addLinearDepth */
/* harmony import */ var _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55274);
/* harmony import */ var _attributes_VertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16989);
/* harmony import */ var _shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54473);
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99152);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function t(e){e.varyings.add("linearDepth","float")}function i(e){e.vertex.uniforms.add(new _shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_2__/* .Float2PassUniform */ .G("nearFar",((e,r)=>r.camera.nearFar)))}function n(e){e.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function d(a,d){const{vertex:s}=a;switch(d.output){case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderOutput */ .V.Color:if(d.receiveShadows)return t(a),void s.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderOutput */ .V.Depth:case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderOutput */ .V.Shadow:case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderOutput */ .V.ShadowHighlight:case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderOutput */ .V.ShadowExcludeHighlight:return a.include(_attributes_VertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .VertexPosition */ .em,d),t(a),i(a),n(a),void s.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}s.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`void forwardLinearDepth() {}`)}


/***/ }),

/***/ 26163:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99152);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(e){e.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H)`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}


/***/ }),

/***/ 16961:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99152);
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50645);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function o(o,t=!0){o.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__/* .VertexAttribute */ .r.POSITION,"vec2"),t&&o.varyings.add("uv","vec2"),o.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H)`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H)`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}


/***/ }),

/***/ 55274:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ o)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var o;!function(o){o[o.Color=0]="Color",o[o.Depth=1]="Depth",o[o.Normal=2]="Normal",o[o.Shadow=3]="Shadow",o[o.ShadowHighlight=4]="ShadowHighlight",o[o.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",o[o.Highlight=6]="Highlight",o[o.Alpha=7]="Alpha",o[o.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",o[o.CompositeColor=9]="CompositeColor",o[o.COUNT=10]="COUNT"}(o||(o={}));


/***/ }),

/***/ 1110:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HQ: () => (/* binding */ P)
/* harmony export */ });
/* unused harmony exports SlicePass, SlicePlaneParameters */
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37046);
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56192);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21839);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22279);
/* harmony import */ var _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13501);
/* harmony import */ var _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60840);
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99152);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class u extends _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__/* .NoParameters */ .Y{constructor(e){super(),this.slicePlaneLocalOrigin=e}}function _(e,s){h(e,s,new n("slicePlaneOrigin",((e,i)=>g(s,e,i))),new n("slicePlaneBasis1",((e,i)=>I(s,e,i,i.slicePlane?.basis1))),new n("slicePlaneBasis2",((e,i)=>I(s,e,i,i.slicePlane?.basis2))))}function P(e,s){h(e,s,new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_4__/* .Float3DrawUniform */ .W("slicePlaneOrigin",((e,i)=>g(s,e,i))),new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_4__/* .Float3DrawUniform */ .W("slicePlaneBasis1",((e,i)=>I(s,e,i,i.slicePlane?.basis1))),new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_4__/* .Float3DrawUniform */ .W("slicePlaneBasis2",((e,i)=>I(s,e,i,i.slicePlane?.basis2))))}function h(e,s,...i){if(!s.hasSlicePlane){const i=(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__/* .glsl */ .H)`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return s.hasSliceInVertexProgram&&e.vertex.code.add(i),void e.fragment.code.add(i)}s.hasSliceInVertexProgram&&e.vertex.uniforms.add(...i),e.fragment.uniforms.add(...i);const a=(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__/* .glsl */ .H)`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,l=(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__/* .glsl */ .H)`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,c=s.hasSliceHighlight?(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__/* .glsl */ .H)`
        ${l}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__/* .glsl */ .H)`#define highlightSlice(_color_, _pos_) (_color_)`;s.hasSliceInVertexProgram&&e.vertex.code.add(a),e.fragment.code.add(a),e.fragment.code.add(c)}function p(e,s,i){return e.instancedDoublePrecision?(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.s)(b,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]):s.slicePlaneLocalOrigin}function m(e,s){return null!=e?(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.f)(v,s.origin,e):s.origin}function H(s,i,a){return s.hasSliceTranslatedView?null!=i?(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__.w)(S,a.camera.viewMatrix,i):a.camera.viewMatrix:null}function g(e,s,a){if(null==a.slicePlane)return _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.Z;const l=p(e,s,a),c=m(l,a.slicePlane),r=H(e,l,a);return null!=r?(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.e)(v,c,r):c}function I(e,s,c,r){if(null==r||null==c.slicePlane)return _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.Z;const t=p(e,s,c),n=m(t,c.slicePlane),f=H(e,t,c);return null!=f?((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.g)(B,r,n),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.e)(v,n,f),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.e)(B,B,f),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.f)(B,B,v)):r}const b=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),v=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),B=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),S=(0,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__.a)();


/***/ }),

/***/ 66012:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40641);
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99152);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function o(o){(0,_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .addCalculateLinearDepth */ .i$)(o),o.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),o.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}


/***/ }),

/***/ 24682:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BK: () => (/* binding */ N),
/* harmony export */   nW: () => (/* binding */ h)
/* harmony export */ });
/* unused harmony export InstancedDoublePassParameters */
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46615);
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76287);
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56192);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21839);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22279);
/* harmony import */ var _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55274);
/* harmony import */ var _util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10470);
/* harmony import */ var _util_View_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63592);
/* harmony import */ var _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13501);
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(99152);
/* harmony import */ var _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6561);
/* harmony import */ var _shaderModules_Matrix4PassUniform_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20778);
/* harmony import */ var _shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(69948);
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(50645);
/* harmony import */ var _webgl_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(76698);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class h extends _shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_13__/* .ShaderTechniqueConfiguration */ .K{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}}(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_13__/* .parameter */ .W)()],h.prototype,"instancedDoublePrecision",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_13__/* .parameter */ .W)()],h.prototype,"hasModelTransformation",void 0);class O extends _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_10__/* .NoParameters */ .Y{constructor(){super(...arguments),this.modelTransformation=null}}const w=(0,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__.a)();function N(e,r){const i=r.hasModelTransformation,c=r.instancedDoublePrecision;i&&(e.vertex.uniforms.add(new _shaderModules_Matrix4PassUniform_js__WEBPACK_IMPORTED_MODULE_12__/* .Matrix4PassUniform */ .X("model",(e=>e.modelTransformation??_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__.I))),e.vertex.uniforms.add(new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_11__/* .Matrix3PassUniform */ .k("normalLocalOriginFromModel",(e=>((0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__.n)(w,e.modelTransformation??_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__.I),w))))),r.instanced&&c&&(e.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_14__/* .VertexAttribute */ .r.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_14__/* .VertexAttribute */ .r.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_14__/* .VertexAttribute */ .r.INSTANCEMODEL,"mat3"),e.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_14__/* .VertexAttribute */ .r.INSTANCEMODELNORMAL,"mat3"));const v=e.vertex;c&&(v.include(_util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_7__/* .DoublePrecision */ .u,r),v.uniforms.add(new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_9__/* .Float3DrawUniform */ .W("viewOriginHi",((e,o)=>(0,_webgl_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_15__/* .encodeDoubleHi */ .Zo)((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__.s)(T,o.camera.viewInverseTransposeMatrix[3],o.camera.viewInverseTransposeMatrix[7],o.camera.viewInverseTransposeMatrix[11]),T))),new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_9__/* .Float3DrawUniform */ .W("viewOriginLo",((e,o)=>(0,_webgl_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_15__/* .encodeDoubleLo */ .jA)((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__.s)(T,o.camera.viewInverseTransposeMatrix[3],o.camera.viewInverseTransposeMatrix[7],o.camera.viewInverseTransposeMatrix[11]),T))))),v.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_10__/* .glsl */ .H)`
    vec3 getVertexInLocalOriginSpace() {
      return ${i?c?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":c?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${c?(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_10__/* .glsl */ .H)`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),v.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_10__/* .glsl */ .H)`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${i?c?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":c?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),r.output===_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_6__/* .ShaderOutput */ .V.Normal&&((0,_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_8__/* .addViewNormal */ .S7)(v),v.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_10__/* .glsl */ .H)`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${i?c?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":c?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),r.hasVertexTangents&&v.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_10__/* .glsl */ .H)`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${i?c?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":c?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const T=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.c)();


/***/ }),

/***/ 81283:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ a),
/* harmony export */   Y: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73345);
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99152);
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50645);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function t(t,s){switch(s.normalType){case a.Compressed:t.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.NORMALCOMPRESSED,"vec2"),t.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`vec3 normalModel() {
float z = 1.0 - abs(normalCompressed.x) - abs(normalCompressed.y);
return vec3(normalCompressed + sign(normalCompressed) * min(z, 0.0), z);
}`);break;case a.Attribute:t.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.NORMAL,"vec3"),t.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`vec3 normalModel() {
return normal;
}`);break;case a.ScreenDerivative:t.fragment.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .neverReached */ .Xb)(s.normalType);case a.COUNT:case a.Ground:}}var a;!function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"}(a||(a={}));


/***/ }),

/***/ 99915:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99152);
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50645);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function o(o){o.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__/* .VertexAttribute */ .r.POSITION,"vec3"),o.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H)`vec3 positionModel() { return position; }`)}


/***/ }),

/***/ 67691:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  K: () => (/* binding */ i)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/support/symbolColorUtils.js
var symbolColorUtils = __webpack_require__(55623);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js
var interfaces = __webpack_require__(99152);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/collections/Component/Material/shader/DecodeSymbolColor.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(e){e.vertex.code.add((0,interfaces/* glsl */.H)`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${interfaces/* glsl */.H.int(symbolColorUtils/* ColorMixModeEnum */.k5.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${interfaces/* glsl */.H.int(symbolColorUtils/* ColorMixModeEnum */.k5.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${interfaces/* glsl */.H.int(symbolColorUtils/* ColorMixModeEnum */.k5.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${interfaces/* glsl */.H.int(symbolColorUtils/* ColorMixModeEnum */.k5.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/IntegerPassUniform.js
var IntegerPassUniform = __webpack_require__(3445);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js
var VertexAttribute = __webpack_require__(50645);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/MaterialUtil.js + 1 modules
var MaterialUtil = __webpack_require__(19647);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function i(i,t){t.hasSymbolColors?(i.include(e),i.attributes.add(VertexAttribute/* VertexAttribute */.r.SYMBOLCOLOR,"vec4"),i.varyings.add("colorMixMode","mediump float"),i.vertex.code.add((0,interfaces/* glsl */.H)`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(i.fragment.uniforms.add(new IntegerPassUniform/* IntegerPassUniform */.c("colorMixMode",(o=>MaterialUtil/* colorMixModes */.Um[o.colorMixMode]))),i.vertex.code.add((0,interfaces/* glsl */.H)`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}


/***/ }),

/***/ 26139:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ o),
/* harmony export */   q: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73345);
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99152);
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50645);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var d;function o(o,v){switch(v.textureCoordinateType){case d.Default:return o.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.UV0,"vec2"),o.varyings.add("vuv0","vec2"),void o.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case d.Compressed:return o.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.UV0,"vec2"),o.varyings.add("vuv0","vec2"),void o.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case d.Atlas:return o.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.UV0,"vec2"),o.varyings.add("vuv0","vec2"),o.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.UVREGION,"vec4"),o.varyings.add("vuvRegion","vec4"),void o.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:(0,_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .neverReached */ .Xb)(v.textureCoordinateType);case d.None:return void o.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`void forwardTextureCoordinates() {}`);case d.COUNT:return}}!function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT"}(d||(d={}));


/***/ }),

/***/ 39739:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99152);
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50645);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(e,d){d.hasVertexColors?(e.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__/* .VertexAttribute */ .r.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H)`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H)`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H)`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}


/***/ }),

/***/ 82089:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mh: () => (/* binding */ c),
/* harmony export */   Zo: () => (/* binding */ f),
/* harmony export */   gy: () => (/* binding */ v)
/* harmony export */ });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73345);
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76287);
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52712);
/* harmony import */ var _NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81283);
/* harmony import */ var _VertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16989);
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99152);
/* harmony import */ var _shaderModules_Matrix3DrawUniform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8376);
/* harmony import */ var _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6561);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function c(o,a){switch(a.normalType){case _NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .NormalType */ .W.Attribute:case _NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .NormalType */ .W.Compressed:o.include(_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .NormalAttribute */ .Y,a),o.varyings.add("vNormalWorld","vec3"),o.varyings.add("vNormalView","vec3"),o.vertex.uniforms.add(new _shaderModules_Matrix3DrawUniform_js__WEBPACK_IMPORTED_MODULE_6__/* .Matrix3DrawUniform */ .h("transformNormalGlobalFromModel",(r=>r.transformNormalGlobalFromModel)),new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_7__/* .Matrix3PassUniform */ .k("transformNormalViewFromGlobal",(r=>r.transformNormalViewFromGlobal))),o.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__/* .glsl */ .H)`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case _NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .NormalType */ .W.Ground:o.include(_VertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .VertexPosition */ .em,a),o.varyings.add("vNormalWorld","vec3"),o.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__/* .glsl */ .H)`
        void forwardNormal() {
          vNormalWorld = ${a.spherical?(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__/* .glsl */ .H)`normalize(vPositionWorldCameraRelative);`:(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__/* .glsl */ .H)`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case _NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .NormalType */ .W.ScreenDerivative:o.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_5__/* .glsl */ .H)`void forwardNormal() {}`);break;default:(0,_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .neverReached */ .Xb)(a.normalType);case _NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .NormalType */ .W.COUNT:}}class f extends _VertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .VertexPositionPassParameters */ .dO{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__.a)()}}class v extends _VertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .VertexPositionDrawParameters */ .EM{constructor(){super(...arguments),this.transformNormalGlobalFromModel=(0,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__.a)(),this.toMapSpace=(0,_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__.c)()}}


/***/ }),

/***/ 16989:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EM: () => (/* binding */ W),
/* harmony export */   dO: () => (/* binding */ F),
/* harmony export */   em: () => (/* binding */ v)
/* harmony export */ });
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76287);
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56192);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22279);
/* harmony import */ var _PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99915);
/* harmony import */ var _util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10470);
/* harmony import */ var _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13501);
/* harmony import */ var _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60840);
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99152);
/* harmony import */ var _shaderModules_Matrix3DrawUniform_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8376);
/* harmony import */ var _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6561);
/* harmony import */ var _shaderModules_Matrix4PassUniform_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20778);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function v(r,o){r.include(_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .PositionAttribute */ .I);const e=r.vertex;e.include(_util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .DoublePrecision */ .u,o),r.varyings.add("vPositionWorldCameraRelative","vec3"),r.varyings.add("vPosition_view","vec3"),e.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_6__/* .Float3PassUniform */ .t("transformWorldFromViewTH",(r=>r.transformWorldFromViewTH)),new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_6__/* .Float3PassUniform */ .t("transformWorldFromViewTL",(r=>r.transformWorldFromViewTL)),new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_9__/* .Matrix3PassUniform */ .k("transformViewFromCameraRelativeRS",(r=>r.transformViewFromCameraRelativeRS)),new _shaderModules_Matrix4PassUniform_js__WEBPACK_IMPORTED_MODULE_10__/* .Matrix4PassUniform */ .X("transformProjFromView",(r=>r.transformProjFromView)),new _shaderModules_Matrix3DrawUniform_js__WEBPACK_IMPORTED_MODULE_8__/* .Matrix3DrawUniform */ .h("transformWorldFromModelRS",(r=>r.transformWorldFromModelRS)),new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_5__/* .Float3DrawUniform */ .W("transformWorldFromModelTH",(r=>r.transformWorldFromModelTH)),new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_5__/* .Float3DrawUniform */ .W("transformWorldFromModelTL",(r=>r.transformWorldFromModelTL))),e.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__/* .glsl */ .H)`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),e.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__/* .glsl */ .H)`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${o.spherical?(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__/* .glsl */ .H)`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__/* .glsl */ .H)`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),r.fragment.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_6__/* .Float3PassUniform */ .t("transformWorldFromViewTL",(r=>r.transformWorldFromViewTL))),e.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__/* .glsl */ .H)`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),r.fragment.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__/* .glsl */ .H)`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class F extends _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__/* .NoParameters */ .Y{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),this.transformWorldFromViewTL=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),this.transformViewFromCameraRelativeRS=(0,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__.a)(),this.transformProjFromView=(0,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__.a)()}}class W extends _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_7__/* .NoParameters */ .Y{constructor(){super(...arguments),this.transformWorldFromModelRS=(0,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__.a)(),this.transformWorldFromModelTH=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),this.transformWorldFromModelTL=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)()}}


/***/ }),

/***/ 81783:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  r: () => (/* binding */ s)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/compilerUtils.js
var compilerUtils = __webpack_require__(73345);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js
var TextureCoordinateAttribute_glsl = __webpack_require__(26139);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js
var interfaces = __webpack_require__(99152);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/TextureAtlasLookup.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(e){e.fragment.code.add((0,interfaces/* glsl */.H)`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexTextureCoordinates.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function s(s,a){switch(s.include(TextureCoordinateAttribute_glsl/* TextureCoordinateAttribute */.U,a),a.textureCoordinateType){case TextureCoordinateAttribute_glsl/* TextureCoordinateAttributeType */.q.Default:case TextureCoordinateAttribute_glsl/* TextureCoordinateAttributeType */.q.Compressed:return void s.fragment.code.add((0,interfaces/* glsl */.H)`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case TextureCoordinateAttribute_glsl/* TextureCoordinateAttributeType */.q.Atlas:return s.include(e),void s.fragment.code.add((0,interfaces/* glsl */.H)`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:(0,compilerUtils/* neverReached */.Xb)(a.textureCoordinateType);case TextureCoordinateAttribute_glsl/* TextureCoordinateAttributeType */.q.None:case TextureCoordinateAttribute_glsl/* TextureCoordinateAttributeType */.q.COUNT:return}}


/***/ }),

/***/ 80333:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  G: () => (/* binding */ a)
});

// UNUSED EXPORTS: addVerticalOffset

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec4.js
var vec4 = __webpack_require__(25102);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec4f64.js
var vec4f64 = __webpack_require__(52712);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3.js
var vec3 = __webpack_require__(21839);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3f64.js
var vec3f64 = __webpack_require__(22279);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js
var Float3PassUniform = __webpack_require__(60840);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js
var interfaces = __webpack_require__(99152);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/ScreenSizePerspective.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function s(e){e.vertex.code.add((0,interfaces/* glsl */.H)`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add((0,interfaces/* glsl */.H)`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add((0,interfaces/* glsl */.H)`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add((0,interfaces/* glsl */.H)`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add((0,interfaces/* glsl */.H)`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add((0,interfaces/* glsl */.H)`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function t(e){e.uniforms.add(new r("screenSizePerspective",(e=>i(e.screenSizePerspective))))}function o(e){e.uniforms.add(new Float3PassUniform/* Float3PassUniform */.t("screenSizePerspectiveAlignment",(e=>i(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}function i(a){return (0,vec3.s)(n,a.parameters.divisor,a.parameters.offset,a.minScaleFactor)}const n=(0,vec3f64.c)();

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js + 1 modules
var View_glsl = __webpack_require__(63592);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js
var Float4PassUniform = __webpack_require__(1411);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function a(e,r){const c=e.vertex;r.hasVerticalOffset?(f(c),r.hasScreenSizePerspective&&(e.include(s),o(c),(0,View_glsl/* addCameraPosition */.yu)(e.vertex,r)),c.code.add((0,interfaces/* glsl */.H)`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${r.spherical?(0,interfaces/* glsl */.H)`vec3 worldNormal = normalize(worldPos + localOrigin);`:(0,interfaces/* glsl */.H)`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${r.hasScreenSizePerspective?(0,interfaces/* glsl */.H)`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:(0,interfaces/* glsl */.H)`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):c.code.add((0,interfaces/* glsl */.H)`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const VerticalOffset_glsl_i=(0,vec4f64.c)();function f(r){r.uniforms.add(new Float4PassUniform/* Float4PassUniform */.E("verticalOffset",((r,t)=>{const{minWorldLength:l,maxWorldLength:o,screenLength:c}=r.verticalOffset,s=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),a=t.camera.pixelRatio||1;return (0,vec4.s)(VerticalOffset_glsl_i,c*a,s,l,o)})))}


/***/ }),

/***/ 16045:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* binding */ h)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js
var ForwardLinearDepth_glsl = __webpack_require__(40641);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js
var ShaderOutput = __webpack_require__(55274);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js
var Slice_glsl = __webpack_require__(1110);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js
var Transform_glsl = __webpack_require__(66012);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js
var NormalAttribute_glsl = __webpack_require__(81283);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js
var interfaces = __webpack_require__(99152);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js
var VertexAttribute = __webpack_require__(50645);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/ObjectAndLayerIdColor.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function d(d,t){const a=t.output===ShaderOutput/* ShaderOutput */.V.ObjectAndLayerIdColor,n=t.objectAndLayerIdColorInstanced;a&&(d.varyings.add("objectAndLayerIdColorVarying","vec4"),n?d.attributes.add(VertexAttribute/* VertexAttribute */.r.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):d.attributes.add(VertexAttribute/* VertexAttribute */.r.OBJECTANDLAYERIDCOLOR,"vec4")),d.vertex.code.add((0,interfaces/* glsl */.H)`
     void forwardObjectAndLayerIdColor() {
      ${a?n?(0,interfaces/* glsl */.H)`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:(0,interfaces/* glsl */.H)`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:(0,interfaces/* glsl */.H)``} }`),d.fragment.code.add((0,interfaces/* glsl */.H)`
      void outputObjectAndLayerIdColor() {
        ${a?(0,interfaces/* glsl */.H)`fragColor = objectAndLayerIdColorVarying;`:(0,interfaces/* glsl */.H)``} }`)}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js
var TextureCoordinateAttribute_glsl = __webpack_require__(26139);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl.js
var VertexNormal_glsl = __webpack_require__(82089);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloat16Encoding.glsl.js
var RgbaFloat16Encoding_glsl = __webpack_require__(4969);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl.js
var RgbaFloatEncoding_glsl = __webpack_require__(70224);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function l(l,r){switch(r.output){case ShaderOutput/* ShaderOutput */.V.Shadow:case ShaderOutput/* ShaderOutput */.V.ShadowHighlight:case ShaderOutput/* ShaderOutput */.V.ShadowExcludeHighlight:l.fragment.include(RgbaFloat16Encoding_glsl/* Rgba4FloatEncoding */.U),l.fragment.code.add((0,interfaces/* glsl */.H)`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`);break;case ShaderOutput/* ShaderOutput */.V.Depth:l.fragment.include(RgbaFloatEncoding_glsl/* RgbaFloatEncoding */.W),l.fragment.code.add((0,interfaces/* glsl */.H)`void outputDepth(float _linearDepth) {
fragColor = float2rgba(_linearDepth);
}`)}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec4f64.js
var vec4f64 = __webpack_require__(52712);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js
var Texture2DPassUniform = __webpack_require__(79856);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const OutputHighlight_glsl_d=(0,vec4f64.f)(1,1,0,1),r=(0,vec4f64.f)(1,0,1,1);function a(e){e.fragment.uniforms.add(new Texture2DPassUniform/* Texture2DPassUniform */.N("depthTexture",((e,o)=>o.mainDepth))),e.fragment.constants.add("occludedHighlightFlag","vec4",OutputHighlight_glsl_d).add("unoccludedHighlightFlag","vec4",r),e.fragment.code.add((0,interfaces/* glsl */.H)`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js + 5 modules
var VisualVariables_glsl = __webpack_require__(71389);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl.js + 2 modules
var AlphaDiscard_glsl = __webpack_require__(29724);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js + 1 modules
var View_glsl = __webpack_require__(63592);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js
var basicInterfaces = __webpack_require__(91013);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function h(h,x){const{vertex:j,fragment:O}=h,w=x.hasColorTexture&&x.alphaDiscardMode!==basicInterfaces/* AlphaDiscardMode */.sf.Opaque;switch(x.output){case ShaderOutput/* ShaderOutput */.V.Depth:case ShaderOutput/* ShaderOutput */.V.Shadow:case ShaderOutput/* ShaderOutput */.V.ShadowHighlight:case ShaderOutput/* ShaderOutput */.V.ShadowExcludeHighlight:case ShaderOutput/* ShaderOutput */.V.ObjectAndLayerIdColor:(0,View_glsl/* addProjViewLocalOrigin */.NB)(j,x),h.include(Transform_glsl/* Transform */.d,x),h.include(TextureCoordinateAttribute_glsl/* TextureCoordinateAttribute */.U,x),h.include(VisualVariables_glsl/* VisualVariables */.A,x),h.include(l,x),h.include(Slice_glsl/* SliceDraw */.HQ,x),h.include(d,x),(0,ForwardLinearDepth_glsl/* addNearFar */.xJ)(h),h.varyings.add("depth","float"),w&&O.uniforms.add(new Texture2DPassUniform/* Texture2DPassUniform */.N("tex",(o=>o.texture))),j.code.add((0,interfaces/* glsl */.H)`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`),h.include(AlphaDiscard_glsl/* DiscardOrAdjustAlphaPass */.S,x),O.code.add((0,interfaces/* glsl */.H)`
          void main(void) {
            discardBySlice(vpos);
            ${w?(0,interfaces/* glsl */.H)`
                    vec4 texColor = texture(tex, ${x.hasColorTextureTransform?(0,interfaces/* glsl */.H)`colorUV`:(0,interfaces/* glsl */.H)`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${x.output===ShaderOutput/* ShaderOutput */.V.ObjectAndLayerIdColor?(0,interfaces/* glsl */.H)`outputObjectAndLayerIdColor();`:(0,interfaces/* glsl */.H)`outputDepth(depth);`}
          }
        `);break;case ShaderOutput/* ShaderOutput */.V.Normal:{(0,View_glsl/* addProjViewLocalOrigin */.NB)(j,x),h.include(Transform_glsl/* Transform */.d,x),h.include(NormalAttribute_glsl/* NormalAttribute */.Y,x),h.include(VertexNormal_glsl/* VertexNormal */.Mh,x),h.include(TextureCoordinateAttribute_glsl/* TextureCoordinateAttribute */.U,x),h.include(VisualVariables_glsl/* VisualVariables */.A,x),w&&O.uniforms.add(new Texture2DPassUniform/* Texture2DPassUniform */.N("tex",(o=>o.texture))),x.normalType===NormalAttribute_glsl/* NormalType */.W.ScreenDerivative&&h.varyings.add("vPositionView","vec3");const o=x.normalType===NormalAttribute_glsl/* NormalType */.W.Attribute||x.normalType===NormalAttribute_glsl/* NormalType */.W.Compressed;j.code.add((0,interfaces/* glsl */.H)`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${o?(0,interfaces/* glsl */.H)`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:(0,interfaces/* glsl */.H)`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),h.include(Slice_glsl/* SliceDraw */.HQ,x),h.include(AlphaDiscard_glsl/* DiscardOrAdjustAlphaPass */.S,x),O.code.add((0,interfaces/* glsl */.H)`
          void main() {
            discardBySlice(vpos);
            ${w?(0,interfaces/* glsl */.H)`
                    vec4 texColor = texture(tex, ${x.hasColorTextureTransform?(0,interfaces/* glsl */.H)`colorUV`:(0,interfaces/* glsl */.H)`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${x.normalType===NormalAttribute_glsl/* NormalType */.W.ScreenDerivative?(0,interfaces/* glsl */.H)`vec3 normal = screenDerivativeNormal(vPositionView);`:(0,interfaces/* glsl */.H)`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case ShaderOutput/* ShaderOutput */.V.Highlight:(0,View_glsl/* addProjViewLocalOrigin */.NB)(j,x),h.include(Transform_glsl/* Transform */.d,x),h.include(TextureCoordinateAttribute_glsl/* TextureCoordinateAttribute */.U,x),h.include(VisualVariables_glsl/* VisualVariables */.A,x),w&&O.uniforms.add(new Texture2DPassUniform/* Texture2DPassUniform */.N("tex",(o=>o.texture))),j.code.add((0,interfaces/* glsl */.H)`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),h.include(Slice_glsl/* SliceDraw */.HQ,x),h.include(AlphaDiscard_glsl/* DiscardOrAdjustAlphaPass */.S,x),h.include(a,x),O.code.add((0,interfaces/* glsl */.H)`
          void main() {
            discardBySlice(vpos);
            ${w?(0,interfaces/* glsl */.H)`
                    vec4 texColor = texture(tex, ${x.hasColorTextureTransform?(0,interfaces/* glsl */.H)`colorUV`:(0,interfaces/* glsl */.H)`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}


/***/ }),

/***/ 67726:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70224);
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99152);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function a(a){a.include(_util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .RgbaFloatEncoding */ .W),a.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromRGBA(vec4 depth, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(depth), nearFar);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTex, 0)));
return linearDepthFromRGBA(texelFetch(depthTex, iuv, 0), nearFar);
}`)}


/***/ }),

/***/ 76080:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26139);
/* harmony import */ var _attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81783);
/* harmony import */ var _Normals_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46971);
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99152);
/* harmony import */ var _shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52293);
/* harmony import */ var _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79856);
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57198);
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50645);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function m(m,c){const i=m.fragment;c.hasVertexTangents?(m.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_7__/* .VertexAttribute */ .r.TANGENT,"vec4"),m.varyings.add("vTangent","vec4"),c.doubleSidedMode===_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .NormalsDoubleSidedMode */ .W.WindingOrder?i.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):i.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):i.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),c.textureCoordinateType!==_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .TextureCoordinateAttributeType */ .q.None&&(m.include(_attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .VertexTextureCoordinates */ .r,c),i.uniforms.add(c.pbrTextureBindType===_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_6__/* .BindType */ .c.Pass?new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_5__/* .Texture2DPassUniform */ .N("normalTexture",(e=>e.textureNormal)):new _shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_4__/* .Texture2DDrawUniform */ .o("normalTexture",(e=>e.textureNormal))),i.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;
return tangentSpace * rawNormal;
}`))}


/***/ }),

/***/ 26011:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  n: () => (/* binding */ EvaluateAmbientOcclusion_glsl_t)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js
var interfaces = __webpack_require__(99152);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js
var Texture2DPassUniform = __webpack_require__(79856);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(6267);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(85251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/time.js
var time = __webpack_require__(60882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var core_has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec2.js
var vec2 = __webpack_require__(58680);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/MemCache.js
var MemCache = __webpack_require__(40210);
;// ../node_modules/@arcgis/core/core/MemCachePool.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class MemCachePool_c{constructor(e,t){this._cache=e(t,((e,t)=>this._remove(e,t)))}hitrate(){return this._cache.hitRate}destroy(){this._cache.destroy()}clear(){this._cache.clear()}pop(e){const t=this._cache.peek(e);if(!t)return;const c=t.pop();if(t.length>0){const c=t.reduce(((e,t)=>e+t.usedMemory),0);this._cache.updateSize(e,t,c)}else this._cache.pop(e);return c}put(t,c,s=e){const r=this._cache.peek(t);if(!r)return void this._cache.put(t,[c],c.usedMemory,s);r.push(c);const h=r.reduce(((e,t)=>e+t.usedMemory),0);this._cache.updateSize(t,r,h)}_remove(e,c){switch(c){case t.ALL:return e.forEach((e=>e.dispose())),0;case t.SOME:return e.shift()?.dispose(),e.reduce(((e,t)=>e+t.usedMemory),0)}}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/PooledArray.js + 1 modules
var PooledArray = __webpack_require__(63678);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/FBOPool.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class FBOPool_i{constructor(i,e){this._last=new s,this._incarnation=0,this._cache=new t(i,e)}destroy(){this._last?.forAll((t=>t.dispose())),this._last=null,this._cache.destroy()}set interactive(t){t&&!this._last?this._last=new s:t||(this._last?.forAll((t=>t.dispose())),this._last=null)}clean(){this._last?.filterInPlace((t=>!(t.incarnation<this._incarnation)||(this._cache.put(t.key,t),!1)))}frame(){++this._incarnation}pop(t){if(this._last){const s=this._last.find((s=>s.key===t));if(s)return this._last.removeUnordered(s),s}return this._cache.pop(t)}put(t){t.incarnation=this._incarnation,this._last?this._last.push(t):this._cache.put(t.key,t)}get usedMemory(){return this._last?.reduce(((t,s)=>t+s.usedMemory),0)??0}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/enums.js
var enums = __webpack_require__(41746);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/FramebufferObject.js
var FramebufferObject = __webpack_require__(84852);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/Renderbuffer.js
var Renderbuffer = __webpack_require__(74416);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/RenderbufferDescriptor.js
var RenderbufferDescriptor = __webpack_require__(94669);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/Texture.js + 1 modules
var Texture = __webpack_require__(6940);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/TextureDescriptor.js
var TextureDescriptor = __webpack_require__(45758);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/FBOCache.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class u{constructor(e){this.rctx=e,this._acquired=new Set,this._cache=new t(e.newCache,"FBOCache"),this._depthCache=new t(e.newCache,"DepthAttachmentCache"),this._colorCache=new t(e.newCache,"ColorAttachmentCache")}destroy(){this._cache.destroy(),this._depthCache.destroy(),this._colorCache.destroy()}clean(){this._cache.clean(),this._colorCache.clean(),this._depthCache.clean()}frame(){this._cache.frame(),this._colorCache.frame(),this._depthCache.frame()}get usedMemory(){return Array.from(this._acquired.values()).reduce(((e,t)=>e+("colorTexture"in t?t.colorTexture?.gpuMemoryUsage??0:t.usedMemory)),this._cache.usedMemory+this._colorCache.usedMemory+this._depthCache.usedMemory)}set interactive(e){this._cache.interactive=this._colorCache.interactive=this._depthCache.interactive=e}acquire(e,t,r){const h=D(e,t,r),s=this._cache.pop(h)||new E(h,new n(this.rctx,{...b[e],width:t,height:r}),(e=>(s.releaseDepth(),s.depth=this._acquireDepth(e,s.fbo.width,s.fbo.height),s.fbo.attachDepthStencil(s.depth.attachment),s)),((e,h)=>{const o=this._acquireColor(e,t,r);return s.colors??=new Map,s.colors.set(h,o),s.fbo.attachColorTexture(o.attachment,h),s}));return s.release=()=>{this._acquired.delete(s),s.releaseDepth(),this._cache.put(s),s.release=()=>console.log(`Double FBO release in ${(new Error).stack}`)},this.rctx.unbindTexture(s.fbo.colorTexture),this._trackHandle(s)}acquireDepth(e,t,r){return this._acquireDepth(e,t,r)}_acquireDepth(e,t,r){const h=D(e,t,r),s=this._depthCache.pop(h);if(s)return this._trackHandle(s);const o=e===g.DEPTH_STENCIL_TEXTURE?new m(h,new p(this.rctx,{...G[e],width:t,height:r}),(()=>{this._acquired.delete(o),this._depthCache.put(o)})):new m(h,new _(this.rctx,{...G[e],width:t,height:r}),(()=>{this._acquired.delete(o),this._depthCache.put(o)}));return this._trackHandle(o)}_acquireColor(e,t,r){const h=D(e,t,r),s=this._colorCache.pop(h);if(s)return this._trackHandle(s);const o=new C(h,new p(this.rctx,{...b[e],width:t,height:r}),(()=>{this._acquired.delete(o),this._colorCache.put(o)}));return this._trackHandle(o)}_trackHandle(e){return this._acquired.add(e),e}}class E{constructor(e,t,r,h){this.key=e,this.fbo=t,this.acquireDepth=r,this.acquireColor=h,this.release=()=>{},this.incarnation=0}dispose(){this.fbo.dispose()}releaseDepth(){this.fbo.detachDepthStencilTexture(),this.fbo.detachDepthStencilBuffer(),this.depth=e(this.depth)}detachDepth(){const e=this.depth;return this.depth=void 0,this.fbo.detachDepthStencilTexture(),this.fbo.detachDepthStencilBuffer(),e}attachDepth(e){return this.releaseDepth(),e&&(this.fbo.attachDepthStencil(e.attachment),this.depth=e),this}releaseColor(t){this.fbo.detachColorTexture(t);const r=this.colors?.get(t);this.colors?.delete(t),e(r)}get colorTexture(){return this.fbo?.colorTexture}getColorTexture(e=c.COLOR_ATTACHMENT0){return this.fbo?.getColorTexture(e)}get usedMemory(){return this.fbo.gpuMemoryUsage}}class T{constructor(e,t,r){this.key=e,this.attachment=t,this.release=r,this.incarnation=0}dispose(){this.attachment.dispose()}get usedMemory(){return this.attachment.gpuMemoryUsage}}class m extends (/* unused pure expression or super */ null && (T)){}class C extends T{constructor(e,t,r){super(e,t,r),this.attachment=t,this.release=r}}function D(e,t,r){return`${e}x${t}x${r}`}var R;!function(e){e[e.RED=0]="RED",e[e.RG=1]="RG",e[e.RGBA4=2]="RGBA4",e[e.RGBA=3]="RGBA",e[e.RGBA_MIPMAP=4]="RGBA_MIPMAP",e[e.R16F=5]="R16F",e[e.RGBA16F=6]="RGBA16F"}(R||(R={}));const w=new TextureDescriptor/* TextureDescriptor */.R;w.pixelFormat=enums/* PixelFormat */.Ab.RED,w.internalFormat=enums/* SizedPixelFormat */.H0.R8,w.wrapMode=enums/* TextureWrapMode */.pF.CLAMP_TO_EDGE;const f=new TextureDescriptor/* TextureDescriptor */.R;f.pixelFormat=enums/* PixelFormat */.Ab.RG,f.internalFormat=enums/* SizedPixelFormat */.H0.RG8,f.wrapMode=enums/* TextureWrapMode */.pF.CLAMP_TO_EDGE;const F=new TextureDescriptor/* TextureDescriptor */.R;F.internalFormat=enums/* SizedPixelFormat */.H0.RGBA4,F.dataType=enums/* PixelType */.ld.UNSIGNED_SHORT_4_4_4_4,F.wrapMode=enums/* TextureWrapMode */.pF.CLAMP_TO_EDGE;const A=new TextureDescriptor/* TextureDescriptor */.R;A.wrapMode=enums/* TextureWrapMode */.pF.CLAMP_TO_EDGE;const M=new TextureDescriptor/* TextureDescriptor */.R;M.wrapMode=enums/* TextureWrapMode */.pF.CLAMP_TO_EDGE,M.samplingMode=enums/* TextureSamplingMode */.Cj.LINEAR_MIPMAP_LINEAR,M.hasMipmap=!0,M.maxAnisotropy=8;const P=new TextureDescriptor/* TextureDescriptor */.R;P.pixelFormat=enums/* PixelFormat */.Ab.RED,P.dataType=enums/* PixelType */.ld.HALF_FLOAT,P.internalFormat=enums/* SizedPixelFormat */.H0.R16F,P.samplingMode=enums/* TextureSamplingMode */.Cj.NEAREST;const x=new TextureDescriptor/* TextureDescriptor */.R;x.dataType=enums/* PixelType */.ld.HALF_FLOAT,x.internalFormat=enums/* SizedPixelFormat */.H0.RGBA16F,x.samplingMode=enums/* TextureSamplingMode */.Cj.NEAREST;const b={[R.RED]:w,[R.RG]:f,[R.RGBA4]:F,[R.RGBA]:A,[R.RGBA_MIPMAP]:M,[R.R16F]:P,[R.RGBA16F]:x};var g;!function(e){e[e.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",e[e.DEPTH_STENCIL_BUFFER=1]="DEPTH_STENCIL_BUFFER",e[e.DEPTH24_BUFFER=2]="DEPTH24_BUFFER",e[e.DEPTH16_BUFFER=3]="DEPTH16_BUFFER"}(g||(g={}));const B=new TextureDescriptor/* TextureDescriptor */.R;B.pixelFormat=enums/* PixelFormat */.Ab.DEPTH_STENCIL,B.dataType=enums/* PixelType */.ld.UNSIGNED_INT_24_8,B.samplingMode=enums/* TextureSamplingMode */.Cj.NEAREST,B.wrapMode=enums/* TextureWrapMode */.pF.CLAMP_TO_EDGE;const G={[g.DEPTH_STENCIL_TEXTURE]:B,[g.DEPTH_STENCIL_BUFFER]:new RenderbufferDescriptor/* RenderbufferDescriptor */.q(enums/* RenderbufferFormat */.yQ.DEPTH24_STENCIL8,4),[g.DEPTH24_BUFFER]:new RenderbufferDescriptor/* RenderbufferDescriptor */.q(enums/* RenderbufferFormat */.yQ.DEPTH_COMPONENT24,4),[g.DEPTH16_BUFFER]:new RenderbufferDescriptor/* RenderbufferDescriptor */.q(enums/* RenderbufferFormat */.yQ.DEPTH_COMPONENT16,4)};

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(52495);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js
var ShaderOutput = __webpack_require__(55274);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/effects/RenderPlugin.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const RenderPlugin_s={required:[]},RenderPlugin_t={required:[ShaderOutput/* ShaderOutput */.V.Depth]},o={required:[ShaderOutput/* ShaderOutput */.V.CompositeColor]},RenderPlugin_n={required:[ShaderOutput/* ShaderOutput */.V.Highlight]},d={required:[ShaderOutput/* ShaderOutput */.V.Depth,ShaderOutput/* ShaderOutput */.V.Normal]};class RenderPlugin_i extends Accessor/* default */.A{consumes(){return RenderPlugin_s}get usedMemory(){return 0}get isDecoration(){return!1}get running(){return!1}}class RenderPlugin_u extends RenderPlugin_i{}class RenderPlugin_c extends (/* unused pure expression or super */ null && (RenderPlugin_i)){}class a extends (/* unused pure expression or super */ null && (RenderPlugin_i)){}class l extends (/* unused pure expression or super */ null && (RenderPlugin_i)){}class RenderPlugin_m extends (/* unused pure expression or super */ null && (RenderPlugin_i)){}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ReloadableShaderModule.js
var ReloadableShaderModule = __webpack_require__(47705);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechnique.js
var ShaderTechnique = __webpack_require__(33444);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/DefaultVertexAttributeLocations.js
var DefaultVertexAttributeLocations = __webpack_require__(13148);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Program.js
var Program = __webpack_require__(58123);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/SSAOBlur.glsl.js
var SSAOBlur_glsl = __webpack_require__(45789);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/renderState.js
var renderState = __webpack_require__(2449);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/effects/ssao/SSAOBlurTechnique.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class SSAOBlurTechnique_a extends ShaderTechnique/* ShaderTechnique */.w{initializeProgram(r){return new Program/* Program */.B(r.rctx,SSAOBlurTechnique_a.shader.get().build(),DefaultVertexAttributeLocations/* Default3D */.D)}initializePipeline(){return (0,renderState/* makePipelineState */.Ey)({colorWrite:renderState/* defaultColorWriteParams */.wE})}}SSAOBlurTechnique_a.shader=new ReloadableShaderModule/* ReloadableShaderModule */.$(SSAOBlur_glsl.S,(()=>__webpack_require__.e(/* import() */ 3513).then(__webpack_require__.bind(__webpack_require__, 13513))));

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/effects/ssao/SSAONoiseData.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const SSAONoiseData_e="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec2f64.js
var vec2f64 = __webpack_require__(78286);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/effects/ssao/SSAOParameters.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class r extends interfaces/* NoParameters */.Y{constructor(){super(...arguments),this.projScale=1}}class SSAOParameters_t extends r{constructor(){super(...arguments),this.intensity=1}}class SSAOParameters_c extends interfaces/* NoParameters */.Y{}class SSAOParameters_o extends SSAOParameters_c{constructor(){super(...arguments),this.blurSize=(0,vec2f64.a)()}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/SSAO.glsl.js
var SSAO_glsl = __webpack_require__(51522);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/effects/ssao/SSAOTechnique.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class SSAOTechnique_l extends ShaderTechnique/* ShaderTechnique */.w{initializeProgram(e){return new Program/* Program */.B(e.rctx,SSAOTechnique_l.shader.get().build(),DefaultVertexAttributeLocations/* Default3D */.D)}initializePipeline(){return (0,renderState/* makePipelineState */.Ey)({colorWrite:renderState/* defaultColorWriteParams */.wE})}}SSAOTechnique_l.shader=new ReloadableShaderModule/* ReloadableShaderModule */.$(SSAO_glsl.S,(()=>__webpack_require__.e(/* import() */ 350).then(__webpack_require__.bind(__webpack_require__, 30350))));

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/support/RenderState.js
var RenderState = __webpack_require__(40695);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/RenderFeature.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var RenderFeature_o;function RenderFeature_t(t=!has("disable-feature:high-quality-idle"),s=null){const n=new e;return t?(n.set(i.IDLE,RenderFeature_o.Antialiasing,"low"!==s),n.set(i.IDLE,RenderFeature_o.HighResolutionAtmosphere,"low"!==s),n.set(i.IDLE,RenderFeature_o.HighQualityTransparency,!0),n.set(i.IDLE,RenderFeature_o.SSAO,!0),n.set(i.IDLE,RenderFeature_o.WaterReflection,!0),n.set(i.IDLE,RenderFeature_o.PhysicalPixelRendering,!0)):(n.set(i.ANIMATING,RenderFeature_o.HighResolutionShadows,!0),n.set(i.INTERACTING,RenderFeature_o.HighResolutionShadows,!0)),n.set(i.IDLE,RenderFeature_o.HighResolutionShadows,!0),n.set(i.IDLE,RenderFeature_o.HighResolutionVoxel,!0),n}!function(e){e[e.Antialiasing=0]="Antialiasing",e[e.HighQualityTransparency=1]="HighQualityTransparency",e[e.HighResolutionVoxel=2]="HighResolutionVoxel",e[e.HighResolutionAtmosphere=3]="HighResolutionAtmosphere",e[e.SSAO=4]="SSAO",e[e.WaterReflection=5]="WaterReflection",e[e.HighResolutionShadows=6]="HighResolutionShadows",e[e.PhysicalPixelRendering=7]="PhysicalPixelRendering"}(RenderFeature_o||(RenderFeature_o={}));

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/RenderSlot.js
var RenderSlot = __webpack_require__(38323);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/effects/ssao/SSAO.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const SSAO_R=2;let y=class extends RenderPlugin_u{constructor(e){super(e),this._context=null,this._passParameters=new SSAOParameters_t,this._drawParameters=new SSAOParameters_o,this.produces=new Map([[RenderSlot/* RenderSlot */.N.SSAO,()=>this._produces()]])}_produces(){return null!=this._enableTime&&null!=this._context}consumes(){return this._produces()?d:RenderPlugin_s}initializeRenderContext(e){this._context=e,this.addHandles([(0,reactiveUtils/* watch */.wB)((()=>this.view.qualitySettings.ambientOcclusion||this._context?.isFeatureEnabled(RenderFeature_o.SSAO)),(e=>e?this._enable():this._disable()),reactiveUtils/* syncAndInitial */.pc)])}uninitializeRenderContext(){this._disable(),this._context=null}_disable(){this._passParameters.noiseTexture=(0,maybe/* disposeMaybe */.WD)(this._passParameters.noiseTexture),this._enableTime=null}destroy(){this._disable()}_enable(){if(null!=this._enableTime||!this._context)return;const e=Uint8Array.from(atob(SSAONoiseData_e),(e=>e.charCodeAt(0))),t=new TextureDescriptor/* TextureDescriptor */.R;t.wrapMode=enums/* TextureWrapMode */.pF.CLAMP_TO_EDGE,t.pixelFormat=enums/* PixelFormat */.Ab.RGB,t.wrapMode=enums/* TextureWrapMode */.pF.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new Texture/* Texture */.g(this._context.renderContext.rctx,t,e),null==this._ssaoTechnique&&(this._ssaoTechnique=this._context.techniqueRepository.acquire(SSAOTechnique_l)),null==this._blurTechnique&&(this._blurTechnique=this._context.techniqueRepository.acquire(SSAOBlurTechnique_a)),this._enableTime=(0,time/* Milliseconds */.l5)(0),this._context?.requestRender()}renderNode(e,t,r){const s=e.bindParameters,i=s.linearDepth?.colorTexture,o=r?.normal?.colorTexture;if(null==this._enableTime||null==this._context||null==i||!o)return;if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=e.time,void this._context.requestRender();0===this._enableTime&&(this._enableTime=e.time);const a=e.rctx,m=s.camera,u=this.view.qualitySettings.fadeDuration,l=u>0?Math.min(u,e.time-this._enableTime)/u:1;this._passParameters.normalTexture=o,this._passParameters.depthTexture=i,this._passParameters.projScale=1/m.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*O/(0,SSAO_glsl.g)(m)**6*l;const h=m.fullViewport[2],p=m.fullViewport[3],_=Math.round(h/SSAO_R),d=Math.round(p/SSAO_R),b=this._context.fbos,f=b.acquire(R.RED,h,p);a.bindFramebuffer(f.fbo),a.setViewport(0,0,h,p);a.bindTechnique(this._ssaoTechnique,this._passParameters,s).bindDraw(this._drawParameters,s,this._passParameters),a.screen.draw();const w=a.bindTechnique(this._blurTechnique,this._passParameters,s);a.setViewport(0,0,_,d);const x=b.acquire(R.RED,_,d);a.bindFramebuffer(x.fbo),this._drawParameters.colorTexture=f.colorTexture,(0,vec2.s)(this._drawParameters.blurSize,0,SSAO_R/p),w.bindDraw(this._drawParameters,s,this._passParameters),a.setViewport(0,0,_,d),a.screen.draw(),f.release();const P=b.acquire(R.RED,_,d);return a.bindFramebuffer(P.fbo),a.setViewport(0,0,h,p),a.setClearColor(1,1,1,0),a.clear(enums/* ClearBufferBit */.hn.COLOR_BUFFER_BIT),a.setViewport(0,0,_,d),this._drawParameters.colorTexture=x.colorTexture,(0,vec2.s)(this._drawParameters.blurSize,SSAO_R/h,0),w.bindDraw(this._drawParameters,s,this._passParameters),a.screen.draw(),a.setViewport4fv(m.fullViewport),x.release(),l<1&&this._context.requestRender(),P}};(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],y.prototype,"view",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],y.prototype,"_context",void 0),y=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.3d.webgl-engine.effects.ssao.SSAO")],y);const O=.5;

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function EvaluateAmbientOcclusion_glsl_t(t,o){const a=t.fragment;o.receiveAmbientOcclusion?(a.uniforms.add(new Texture2DPassUniform/* Texture2DPassUniform */.N("ssaoTex",((e,s)=>s.ssao?.colorTexture))),a.constants.add("blurSizePixelsInverse","float",1/SSAO_R),a.code.add((0,interfaces/* glsl */.H)`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):a.code.add((0,interfaces/* glsl */.H)`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}


/***/ }),

/***/ 21549:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  kA: () => (/* binding */ EvaluateSceneLighting_glsl_p),
  a8: () => (/* binding */ EvaluateSceneLighting_glsl_u),
  eU: () => (/* binding */ EvaluateSceneLighting_glsl_h)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/compilerUtils.js
var compilerUtils = __webpack_require__(73345);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3.js
var vec3 = __webpack_require__(21839);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3f64.js
var vec3f64 = __webpack_require__(22279);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec4.js
var vec4 = __webpack_require__(25102);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec4f64.js
var vec4f64 = __webpack_require__(52712);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js
var PhysicallyBasedRenderingParameters_glsl = __webpack_require__(39486);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js
var Float3PassUniform = __webpack_require__(60840);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js
var Float4PassUniform = __webpack_require__(1411);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js
var interfaces = __webpack_require__(99152);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientLighting.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function m(n,g){const m=n.fragment,o=void 0!==g.lightingSphericalHarmonicsOrder?g.lightingSphericalHarmonicsOrder:2;0===o?(m.uniforms.add(new Float3PassUniform/* Float3PassUniform */.t("lightingAmbientSH0",((n,t)=>(0,vec3.s)(EvaluateAmbientLighting_glsl_a,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),m.code.add((0,interfaces/* glsl */.H)`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===o?(m.uniforms.add(new Float4PassUniform/* Float4PassUniform */.E("lightingAmbientSH_R",((i,n)=>(0,vec4.s)(EvaluateAmbientLighting_glsl_r,n.lighting.sh.r[0],n.lighting.sh.r[1],n.lighting.sh.r[2],n.lighting.sh.r[3]))),new Float4PassUniform/* Float4PassUniform */.E("lightingAmbientSH_G",((i,n)=>(0,vec4.s)(EvaluateAmbientLighting_glsl_r,n.lighting.sh.g[0],n.lighting.sh.g[1],n.lighting.sh.g[2],n.lighting.sh.g[3]))),new Float4PassUniform/* Float4PassUniform */.E("lightingAmbientSH_B",((i,n)=>(0,vec4.s)(EvaluateAmbientLighting_glsl_r,n.lighting.sh.b[0],n.lighting.sh.b[1],n.lighting.sh.b[2],n.lighting.sh.b[3])))),m.code.add((0,interfaces/* glsl */.H)`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===o&&(m.uniforms.add(new Float3PassUniform/* Float3PassUniform */.t("lightingAmbientSH0",((n,t)=>(0,vec3.s)(EvaluateAmbientLighting_glsl_a,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new Float4PassUniform/* Float4PassUniform */.E("lightingAmbientSH_R1",((i,n)=>(0,vec4.s)(EvaluateAmbientLighting_glsl_r,n.lighting.sh.r[1],n.lighting.sh.r[2],n.lighting.sh.r[3],n.lighting.sh.r[4]))),new Float4PassUniform/* Float4PassUniform */.E("lightingAmbientSH_G1",((i,n)=>(0,vec4.s)(EvaluateAmbientLighting_glsl_r,n.lighting.sh.g[1],n.lighting.sh.g[2],n.lighting.sh.g[3],n.lighting.sh.g[4]))),new Float4PassUniform/* Float4PassUniform */.E("lightingAmbientSH_B1",((i,n)=>(0,vec4.s)(EvaluateAmbientLighting_glsl_r,n.lighting.sh.b[1],n.lighting.sh.b[2],n.lighting.sh.b[3],n.lighting.sh.b[4]))),new Float4PassUniform/* Float4PassUniform */.E("lightingAmbientSH_R2",((i,n)=>(0,vec4.s)(EvaluateAmbientLighting_glsl_r,n.lighting.sh.r[5],n.lighting.sh.r[6],n.lighting.sh.r[7],n.lighting.sh.r[8]))),new Float4PassUniform/* Float4PassUniform */.E("lightingAmbientSH_G2",((i,n)=>(0,vec4.s)(EvaluateAmbientLighting_glsl_r,n.lighting.sh.g[5],n.lighting.sh.g[6],n.lighting.sh.g[7],n.lighting.sh.g[8]))),new Float4PassUniform/* Float4PassUniform */.E("lightingAmbientSH_B2",((i,n)=>(0,vec4.s)(EvaluateAmbientLighting_glsl_r,n.lighting.sh.b[5],n.lighting.sh.b[6],n.lighting.sh.b[7],n.lighting.sh.b[8])))),m.code.add((0,interfaces/* glsl */.H)`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),g.pbrMode!==PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Normal&&g.pbrMode!==PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Schematic||m.code.add((0,interfaces/* glsl */.H)`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const EvaluateAmbientLighting_glsl_a=(0,vec3f64.c)(),EvaluateAmbientLighting_glsl_r=(0,vec4f64.c)();

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js + 10 modules
var EvaluateAmbientOcclusion_glsl = __webpack_require__(26011);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl.js
var MainLighting_glsl = __webpack_require__(696);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js + 1 modules
var PhysicallyBasedRendering_glsl = __webpack_require__(17666);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PiUtils.glsl.js
var PiUtils_glsl = __webpack_require__(66579);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js
var Uniform = __webpack_require__(99198);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js
var BindType = __webpack_require__(57198);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/BooleanPassUniform.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class BooleanPassUniform_s extends Uniform/* Uniform */.n{constructor(o,s){super(o,"bool",BindType/* BindType */.c.Pass,((r,e,t)=>r.setUniform1b(o,s(e,t))))}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js
var FloatPassUniform = __webpack_require__(35449);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(92504);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lighting/Lightsources.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class Lightsources_i{constructor(s=t()){this.intensity=s}}class Lightsources_c{constructor(i=t(),c=s(.57735,.57735,.57735)){this.intensity=i,this.direction=c}}class Lightsources_n{constructor(i=t(),c=s(.57735,.57735,.57735),n=!0,r=1,h=1){this.intensity=i,this.direction=c,this.castShadows=n,this.specularStrength=r,this.environmentStrength=h}}class Lightsources_r{constructor(){this.r=[0],this.g=[0],this.b=[0]}}

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lighting/SphericalHarmonics.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function u(t){return(t+1)*(t+1)}function l(n){return t(Math.floor(Math.sqrt(n)-1),0,2)}function SphericalHarmonics_m(t,n,o){const r=t[0],e=t[1],s=t[2],i=o||[];return i.length=u(n),n>=0&&(i[0]=.28209479177),n>=1&&(i[1]=.4886025119*r,i[2]=.4886025119*s,i[3]=.4886025119*e),n>=2&&(i[4]=1.09254843059*r*e,i[5]=1.09254843059*e*s,i[6]=.31539156525*(3*s*s-1),i[7]=1.09254843059*r*s,i[8]=.54627421529*(r*r-e*e)),i}function p(t,n){const o=u(t),r=n||{r:[],g:[],b:[]};r.r.length=r.g.length=r.b.length=o;for(let e=0;e<o;e++)r.r[e]=r.g[e]=r.b[e]=0;return r}function y(t,o){const r=l(o.r.length);for(const e of t)n(P,e.direction),SphericalHarmonics_m(P,r,v),s(v,k),i(v,e.intensity[0],I),c(o.r,I),i(v,e.intensity[1],I),c(o.g,I),i(v,e.intensity[2],I),c(o.b,I);return o}function b(t,n){SphericalHarmonics_m(P,0,v);for(const o of t)n.r[0]+=v[0]*k[0]*o.intensity[0]*4*Math.PI,n.g[0]+=v[0]*k[0]*o.intensity[1]*4*Math.PI,n.b[0]+=v[0]*k[0]*o.intensity[2]*4*Math.PI;return n}function M(t,n,e,s){p(n,s),o(e.intensity,0,0,0);let i=!1;const u=S,l=d,m=j;u.length=0,l.length=0,m.length=0;for(const o of t)o instanceof f&&!i?(r(e.direction,o.direction),r(e.intensity,o.intensity),e.specularStrength=o.specularStrength,e.environmentStrength=o.environmentStrength,e.castShadows=o.castShadows,i=!0):o instanceof f||o instanceof h?u.push(o):o instanceof a?l.push(o):o instanceof g&&m.push(o);y(u,s),b(l,s);for(const o of m)c(s.r,o.r),c(s.g,o.g),c(s.b,o.b)}const S=(/* unused pure expression or super */ null && ([])),d=(/* unused pure expression or super */ null && ([])),j=(/* unused pure expression or super */ null && ([])),v=(/* unused pure expression or super */ null && ([0])),I=(/* unused pure expression or super */ null && ([0])),P=(0,vec3f64.c)(),k=(/* unused pure expression or super */ null && ([3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398]));

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lighting/SceneLighting.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class SceneLighting_g{constructor(){this.color=n(),this.intensity=1}}class SceneLighting_m{constructor(){this.direction=n(),this.ambient=new SceneLighting_g,this.diffuse=new SceneLighting_g}}const SceneLighting_l=.4;class _{constructor(){this._shOrder=2,this._legacy=new SceneLighting_m,this.globalFactor=.5,this.noonFactor=.5,this._sphericalHarmonics=new o,this._mainLight=new e(n(),a(1,0,0),!1)}get legacy(){return this._legacy}get sh(){return this._sphericalHarmonics}get mainLight(){return this._mainLight}set(i){c(i,this._shOrder,this._mainLight,this._sphericalHarmonics),t(this._legacy.direction,this._mainLight.direction);const r=1/Math.PI;this._legacy.ambient.color[0]=.282095*this._sphericalHarmonics.r[0]*r,this._legacy.ambient.color[1]=.282095*this._sphericalHarmonics.g[0]*r,this._legacy.ambient.color[2]=.282095*this._sphericalHarmonics.b[0]*r,s(this._legacy.diffuse.color,this._mainLight.intensity,r),t(SceneLighting_p,this._legacy.diffuse.color),s(SceneLighting_p,SceneLighting_p,SceneLighting_l*this.globalFactor),h(this._legacy.ambient.color,this._legacy.ambient.color,SceneLighting_p)}copyFrom(i){this._sphericalHarmonics.r=Array.from(i.sh.r),this._sphericalHarmonics.g=Array.from(i.sh.g),this._sphericalHarmonics.b=Array.from(i.sh.b),t(this._mainLight.direction,i.mainLight.direction),t(this._mainLight.intensity,i.mainLight.intensity),this._mainLight.castShadows=i.mainLight.castShadows,this._mainLight.specularStrength=i.mainLight.specularStrength,this._mainLight.environmentStrength=i.mainLight.environmentStrength,this.globalFactor=i.globalFactor,this.noonFactor=i.noonFactor}lerpLighting(s,h,n){if(r(this._mainLight.intensity,s.mainLight.intensity,h.mainLight.intensity,n),this._mainLight.environmentStrength=i(s.mainLight.environmentStrength,h.mainLight.environmentStrength,n),this._mainLight.specularStrength=i(s.mainLight.specularStrength,h.mainLight.specularStrength,n),t(this._mainLight.direction,h.mainLight.direction),this._mainLight.castShadows=h.mainLight.castShadows,this.globalFactor=i(s.globalFactor,h.globalFactor,n),this.noonFactor=i(s.noonFactor,h.noonFactor,n),s.sh.r.length===h.sh.r.length)for(let t=0;t<h.sh.r.length;t++)this._sphericalHarmonics.r[t]=i(s.sh.r[t],h.sh.r[t],n),this._sphericalHarmonics.g[t]=i(s.sh.g[t],h.sh.g[t],n),this._sphericalHarmonics.b[t]=i(s.sh.b[t],h.sh.b[t],n);else for(let i=0;i<h.sh.r.length;i++)this._sphericalHarmonics.r[i]=h.sh.r[i],this._sphericalHarmonics.g[i]=h.sh.g[i],this._sphericalHarmonics.b[i]=h.sh.b[i]}}const SceneLighting_p=(0,vec3f64.c)();

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function EvaluateSceneLighting_glsl_u(i){i.constants.add("ambientBoostFactor","float",SceneLighting_l)}function EvaluateSceneLighting_glsl_h(i){i.uniforms.add(new FloatPassUniform/* FloatPassUniform */.m("lightingGlobalFactor",((i,n)=>n.lighting.globalFactor)))}function EvaluateSceneLighting_glsl_p(g,p){const v=g.fragment;switch(g.include(EvaluateAmbientOcclusion_glsl/* EvaluateAmbientOcclusion */.n,p),p.pbrMode!==PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Disabled&&g.include(PhysicallyBasedRendering_glsl/* PhysicallyBasedRendering */.c,p),g.include(m,p),g.include(PiUtils_glsl/* PiUtils */.p),v.code.add((0,interfaces/* glsl */.H)`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${p.pbrMode===PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),EvaluateSceneLighting_glsl_u(v),EvaluateSceneLighting_glsl_h(v),(0,MainLighting_glsl/* addMainLightDirection */.Gc)(v),v.code.add((0,interfaces/* glsl */.H)`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${p.spherical?(0,interfaces/* glsl */.H)`normalize(vPosWorld)`:(0,interfaces/* glsl */.H)`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,MainLighting_glsl/* addMainLightIntensity */.O4)(v),v.code.add((0,interfaces/* glsl */.H)`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),p.pbrMode){case PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Disabled:case PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.WaterOnIntegratedMesh:case PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Water:g.include(MainLighting_glsl/* MainLighting */.qU),v.code.add((0,interfaces/* glsl */.H)`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Normal:case PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Schematic:v.code.add((0,interfaces/* glsl */.H)`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),v.code.add((0,interfaces/* glsl */.H)`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),p.useFillLights?v.uniforms.add(new BooleanPassUniform_s("hasFillLights",((i,n)=>n.enableFillLights))):v.constants.add("hasFillLights","bool",!1),v.code.add((0,interfaces/* glsl */.H)`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),v.uniforms.add(new FloatPassUniform/* FloatPassUniform */.m("lightingSpecularStrength",((i,n)=>n.lighting.mainLight.specularStrength)),new FloatPassUniform/* FloatPassUniform */.m("lightingEnvironmentStrength",((i,n)=>n.lighting.mainLight.environmentStrength))),v.code.add((0,interfaces/* glsl */.H)`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),v.code.add((0,interfaces/* glsl */.H)`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission == vec3(0.0) ? _emission : pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${p.pbrMode!==PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Schematic||p.hasColorTexture?(0,interfaces/* glsl */.H)`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:(0,interfaces/* glsl */.H)`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Terrain:case PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.TerrainWithWater:g.include(MainLighting_glsl/* MainLighting */.qU),v.code.add((0,interfaces/* glsl */.H)`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluateTerrainLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:(0,compilerUtils/* neverReached */.Xb)(p.pbrMode);case PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.COUNT:}}


/***/ }),

/***/ 696:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gc: () => (/* binding */ t),
/* harmony export */   O4: () => (/* binding */ a),
/* harmony export */   qU: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60840);
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99152);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function t(n){n.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_0__/* .Float3PassUniform */ .t("mainLightDirection",((i,n)=>n.lighting.mainLight.direction)))}function a(n){n.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_0__/* .Float3PassUniform */ .t("mainLightIntensity",((i,n)=>n.lighting.mainLight.intensity)))}function o(i){t(i.fragment),a(i.fragment),i.fragment.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}


/***/ }),

/***/ 80600:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ o)
/* harmony export */ });
/* unused harmony export MultipassTerrainUniforms */
/* harmony import */ var _output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67726);
/* harmony import */ var _shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54473);
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99152);
/* harmony import */ var _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79856);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function o(o,n){if(!n.multipassEnabled)return;o.fragment.include(_output_ReadLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .ReadLinearDepth */ .D),o.fragment.uniforms.add(new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_3__/* .Texture2DPassUniform */ .N("terrainDepthTexture",((e,r)=>r.multipassTerrain.linearDepth?.colorTexture))),o.fragment.uniforms.add(new _shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_1__/* .Float2PassUniform */ .G("nearFar",((e,r)=>r.camera.nearFar)));const s=n.occlusionPass;o.fragment.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H)`
   ${s?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      vec4 data = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0);
      float linearDepth = linearDepthFromRGBA(data, nearFar);
      ${s?(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H)`return fragmentDepth < linearDepth && data != vec4(0.0, 0.0, 0.0, 1.0);`:(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H)`
          if(fragmentDepth ${n.cullAboveGround?">":"<="} linearDepth){
            discard;
          }`}
    }`)}class n{constructor(){this.cullAboveGround=!1}}


/***/ }),

/***/ 46971:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ i),
/* harmony export */   r: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73345);
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99152);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(e,o){const n=e.fragment;switch(n.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),o.doubleSidedMode){case i.None:n.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case i.View:n.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case i.WindingOrder:n.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .neverReached */ .Xb)(o.doubleSidedMode);case i.COUNT:}}var i;!function(a){a[a.None=0]="None",a[a.View=1]="View",a[a.WindingOrder=2]="WindingOrder",a[a.COUNT=3]="COUNT"}(i||(i={}));


/***/ }),

/***/ 17666:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ n)
});

// UNUSED EXPORTS: PhysicallyBasedRenderingWater

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js
var interfaces = __webpack_require__(99152);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/AnalyticalSkyModel.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function AnalyticalSkyModel_glsl_t(t){const a=t.fragment.code;a.add((0,interfaces/* glsl */.H)`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),a.add((0,interfaces/* glsl */.H)`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),a.add((0,interfaces/* glsl */.H)`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js
var PhysicallyBasedRenderingParameters_glsl = __webpack_require__(39486);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PiUtils.glsl.js
var PiUtils_glsl = __webpack_require__(66579);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function n(n,r){const l=n.fragment.code;n.include(PiUtils_glsl/* PiUtils */.p),r.pbrMode!==PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Normal&&r.pbrMode!==PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Schematic&&r.pbrMode!==PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Terrain&&r.pbrMode!==PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.TerrainWithWater||(l.add((0,interfaces/* glsl */.H)`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),l.add((0,interfaces/* glsl */.H)`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),r.pbrMode!==PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Normal&&r.pbrMode!==PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Schematic||(n.include(AnalyticalSkyModel_glsl_t),l.add((0,interfaces/* glsl */.H)`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),l.add((0,interfaces/* glsl */.H)`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),l.add((0,interfaces/* glsl */.H)`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),l.add((0,interfaces/* glsl */.H)`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function r(e,o){const n=e.fragment.code;e.include(t),n.add(a`
  struct PBRShadingWater
  {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
  };

  float dtrExponent = ${o.useCustomDTRExponentForWater?"2.2":"2.0"};
  `),n.add(a`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),n.add(a`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),n.add(a`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),n.add(a`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)}


/***/ }),

/***/ 39486:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A9: () => (/* binding */ c),
/* harmony export */   _Z: () => (/* binding */ l)
/* harmony export */ });
/* unused harmony export PBRBindParameters */
/* harmony import */ var _attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81783);
/* harmony import */ var _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13501);
/* harmony import */ var _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60840);
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99152);
/* harmony import */ var _shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52293);
/* harmony import */ var _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79856);
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57198);
/* harmony import */ var _lib_GLTextureMaterial_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98174);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var c;!function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Terrain=5]="Terrain",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT"}(c||(c={}));class u extends (/* unused pure expression or super */ null && (n)){}function l(n,u){const l=n.fragment,m=u.hasMetallicRoughnessTexture||u.hasEmissionTexture||u.hasOcclusionTexture;if(u.pbrMode===c.Normal&&m&&n.include(_attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexTextureCoordinates */ .r,u),u.pbrMode!==c.Schematic)if(u.pbrMode!==c.Disabled){if(u.pbrMode===c.Normal){l.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`vec3 mrr;
vec3 emission;
float occlusion;`);const e=u.pbrTextureBindType;u.hasMetallicRoughnessTexture&&(l.uniforms.add(e===_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_6__/* .BindType */ .c.Pass?new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_5__/* .Texture2DPassUniform */ .N("texMetallicRoughness",(e=>e.textureMetallicRoughness)):new _shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_4__/* .Texture2DDrawUniform */ .o("texMetallicRoughness",(e=>e.textureMetallicRoughness))),l.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),u.hasEmissionTexture&&(l.uniforms.add(e===_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_6__/* .BindType */ .c.Pass?new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_5__/* .Texture2DPassUniform */ .N("texEmission",(e=>e.textureEmissive)):new _shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_4__/* .Texture2DDrawUniform */ .o("texEmission",(e=>e.textureEmissive))),l.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),u.hasOcclusionTexture?(l.uniforms.add(e===_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_6__/* .BindType */ .c.Pass?new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_5__/* .Texture2DPassUniform */ .N("texOcclusion",(e=>e.textureOcclusion)):new _shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_4__/* .Texture2DDrawUniform */ .o("texOcclusion",(e=>e.textureOcclusion))),l.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):l.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`float getBakedOcclusion() { return 1.0; }`),e===_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_6__/* .BindType */ .c.Pass?l.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_2__/* .Float3PassUniform */ .t("emissionFactor",(e=>e.emissiveFactor)),new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_2__/* .Float3PassUniform */ .t("mrrFactors",(e=>e.mrrFactors))):l.uniforms.add(new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_1__/* .Float3DrawUniform */ .W("emissionFactor",(e=>e.emissiveFactor)),new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_1__/* .Float3DrawUniform */ .W("mrrFactors",(e=>e.mrrFactors))),l.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${u.hasMetallicRoughnessTexture?(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`applyMetallnessAndRoughness(${u.hasMetallicRoughnessTextureTransform?(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`metallicRoughnessUV`:"vuv0"});`:""}

      ${u.hasEmissionTexture?(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`applyEmission(${u.hasEmissiveTextureTransform?(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`emissiveUV`:"vuv0"});`:""}

      ${u.hasOcclusionTexture?(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`applyOcclusion(${u.hasOcclusionTextureTransform?(0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else l.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`float getBakedOcclusion() { return 1.0; }`);else l.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}


/***/ }),

/***/ 66579:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99152);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function t(t){t.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H)`const float PI = 3.141592653589793;`),t.fragment.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H)`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}


/***/ }),

/***/ 64062:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Bz: () => (/* binding */ m),
  G: () => (/* binding */ x)
});

// UNUSED EXPORTS: ReadShadowMapDrawParameters, ReadShadowMapParameters, ReadShadowMapPassParameters

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat4f64.js
var mat4f64 = __webpack_require__(56192);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3f64.js
var vec3f64 = __webpack_require__(22279);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloat16Encoding.glsl.js
var RgbaFloat16Encoding_glsl = __webpack_require__(4969);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js
var Float4PassUniform = __webpack_require__(1411);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/IntegerPassUniform.js
var IntegerPassUniform = __webpack_require__(3445);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js
var interfaces = __webpack_require__(99152);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js
var Uniform = __webpack_require__(99198);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js
var BindType = __webpack_require__(57198);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4sDrawUniform.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class o extends Uniform/* Uniform */.n{constructor(r,o,s){super(r,"mat4",BindType/* BindType */.c.Draw,((e,s,t,i)=>e.setUniformMatrix4fv(r,o(s,t,i))),s)}}

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4sPassUniform.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class Matrix4sPassUniform_e extends Uniform/* Uniform */.n{constructor(r,e,o){super(r,"mat4",BindType/* BindType */.c.Pass,((s,o,t)=>s.setUniformMatrix4fv(r,e(o,t))),o)}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js
var Texture2DPassUniform = __webpack_require__(79856);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class n extends interfaces/* NoParameters */.Y{constructor(){super(...arguments),this.origin=(0,vec3f64.c)()}}class v extends (/* unused pure expression or super */ null && (n)){}class l extends interfaces/* NoParameters */.Y{constructor(){super(...arguments),this.modelTransformation=mat4f64.I}}class h extends l{constructor(){super(...arguments),this.origin=(0,vec3f64.c)()}}function x(e,s){s.receiveShadows&&(e.fragment.uniforms.add(new Matrix4sPassUniform_e("shadowMapMatrix",((e,s)=>s.shadowMap.getShadowMapMatrices(e.origin)),4)),u(e))}function m(e,s){s.receiveShadows&&(e.fragment.uniforms.add(new o("shadowMapMatrix",((e,s)=>s.shadowMap.getShadowMapMatrices(e.origin)),4)),u(e))}function u(e){const s=e.fragment;s.include(RgbaFloat16Encoding_glsl/* Rgba4FloatEncoding */.U),s.uniforms.add(new Texture2DPassUniform/* Texture2DPassUniform */.N("shadowMapTex",((e,s)=>s.shadowMap.depthTexture)),new IntegerPassUniform/* IntegerPassUniform */.c("numCascades",((e,s)=>s.shadowMap.numCascades)),new Float4PassUniform/* Float4PassUniform */.E("cascadeDistances",((e,s)=>s.shadowMap.cascadeDistances))),s.code.add((0,interfaces/* glsl */.H)`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMapTex, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMapTex);
}`)}


/***/ }),

/***/ 25541:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MU: () => (/* binding */ i),
/* harmony export */   O1: () => (/* binding */ n),
/* harmony export */   QM: () => (/* binding */ t),
/* harmony export */   Sx: () => (/* binding */ s),
/* harmony export */   q2: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21360);
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99152);
/* harmony import */ var _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6561);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function a(a){a.vertex.uniforms.add(new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_2__/* .Matrix3PassUniform */ .k("colorTextureTransformMatrix",(e=>null!=e.colorTextureTransformMatrix?e.colorTextureTransformMatrix:(0,_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__.c)()))),a.varyings.add("colorUV","vec2"),a.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function s(a){a.vertex.uniforms.add(new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_2__/* .Matrix3PassUniform */ .k("normalTextureTransformMatrix",(e=>null!=e.normalTextureTransformMatrix?e.normalTextureTransformMatrix:(0,_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__.c)()))),a.varyings.add("normalUV","vec2"),a.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function i(a){a.vertex.uniforms.add(new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_2__/* .Matrix3PassUniform */ .k("emissiveTextureTransformMatrix",(e=>null!=e.emissiveTextureTransformMatrix?e.emissiveTextureTransformMatrix:(0,_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__.c)()))),a.varyings.add("emissiveUV","vec2"),a.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function n(a){a.vertex.uniforms.add(new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_2__/* .Matrix3PassUniform */ .k("occlusionTextureTransformMatrix",(e=>null!=e.occlusionTextureTransformMatrix?e.occlusionTextureTransformMatrix:(0,_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__.c)()))),a.varyings.add("occlusionUV","vec2"),a.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function t(a){a.vertex.uniforms.add(new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_2__/* .Matrix3PassUniform */ .k("metallicRoughnessTextureTransformMatrix",(e=>null!=e.metallicRoughnessTextureTransformMatrix?e.metallicRoughnessTextureTransformMatrix:(0,_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__.c)()))),a.varyings.add("metallicRoughnessUV","vec2"),a.vertex.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}


/***/ }),

/***/ 71389:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ VisualVariables_glsl_l)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js
var Float3PassUniform = __webpack_require__(60840);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js
var Uniform = __webpack_require__(99198);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js
var BindType = __webpack_require__(57198);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4sPassUniform.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class Float4sPassUniform_e extends Uniform/* Uniform */.n{constructor(r,e,o){super(r,"vec4",BindType/* BindType */.c.Pass,((s,o,t)=>s.setUniform4fv(r,e(o,t))),o)}}

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatsPassUniform.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class FloatsPassUniform_o extends Uniform/* Uniform */.n{constructor(r,o,e){super(r,"float",BindType/* BindType */.c.Pass,((s,e,t)=>s.setUniform1fv(r,o(e,t))),e)}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js
var interfaces = __webpack_require__(99152);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix3PassUniform.js
var Matrix3PassUniform = __webpack_require__(6561);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js
var VertexAttribute = __webpack_require__(50645);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(92504);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat3.js
var mat3 = __webpack_require__(46615);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat3f64.js
var mat3f64 = __webpack_require__(76287);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat4.js
var mat4 = __webpack_require__(37046);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat4f64.js
var mat4f64 = __webpack_require__(56192);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3.js
var vec3 = __webpack_require__(21839);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3f64.js
var vec3f64 = __webpack_require__(22279);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/lengthUtils.js
var lengthUtils = __webpack_require__(10301);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(52495);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
;// ../node_modules/@arcgis/core/views/3d/support/debugFlags.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let T=class extends Accessor/* default */.A{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};(0,tslib_es6._)([(0,property/* property */.MZ)()],T.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],T.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],T.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],T.prototype,"DECONFLICTOR_SHOW_GRID",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],T.prototype,"LABELS_SHOW_BORDER",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],T.prototype,"TEXT_SHOW_BASELINE",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],T.prototype,"TEXT_SHOW_BORDER",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],T.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],T.prototype,"OVERLAY_SHOW_CENTER",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],T.prototype,"SHOW_POI",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],T.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],T.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],T.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],T.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],T.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],T.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],T.prototype,"I3S_TREE_SHOW_TILES",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],T.prototype,"I3S_SHOW_MODIFICATIONS",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],T.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],T.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],T.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],T.prototype,"LINE_WIREFRAMES",void 0),T=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.3d.support.DebugFlags")],T);const debugFlags_t=new T;

;// ../node_modules/@arcgis/core/views/3d/layers/support/FastSymbolUpdates.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var S,y;!function(e){e[e.Undefined=0]="Undefined",e[e.DefinedSize=1]="DefinedSize",e[e.DefinedScale=2]="DefinedScale"}(S||(S={})),function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}(y||(y={}));class x{constructor(e){this.field=e}}class g extends x{constructor(e){super(e),this.minSize=[0,0,0],this.maxSize=[0,0,0],this.offset=[0,0,0],this.factor=[0,0,0],this.type=[S.Undefined,S.Undefined,S.Undefined]}}class b extends x{constructor(e){super(e),this.colors=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.values=[0,0,0,0,0,0,0,0]}}class C extends x{constructor(e){super(e),this.values=[0,0,0,0,0,0,0,0],this.opacityValues=[0,0,0,0,0,0,0,0]}}class D extends x{constructor(e){super(e),this.offset=[0,0,0],this.factor=[1,1,1],this.type=[0,0,0]}}class w{}function U(e){return null!=e}function V(e){return"number"==typeof e}function M(e){return"string"==typeof e}function j(e){return null==e||M(e)}function k(e,t){e&&e.push(t)}function A(e,t,o,i=p()){const n=e||0,s=t||0,r=o||0;return 0!==n&&u(i,i,-n/180*Math.PI),0!==s&&f(i,i,s/180*Math.PI),0!==r&&c(i,i,r/180*Math.PI),i}function I(e,t,o,i,n){const s=e.minSize,r=e.maxSize;if(e.expression)return k(n,"Could not convert size info: expression not supported"),!1;if(e.useSymbolValue){const e=i.symbolSize[o];return t.minSize[o]=e,t.maxSize[o]=e,t.offset[o]=t.minSize[o],t.factor[o]=0,t.type[o]=S.DefinedSize,!0}if(U(e.field))return U(e.stops)?2===e.stops.length&&V(e.stops[0].size)&&V(e.stops[1].size)?(FastSymbolUpdates_T(e.stops[0].size,e.stops[1].size,e.stops[0].value,e.stops[1].value,t,o),t.type[o]=S.DefinedSize,!0):(k(n,"Could not convert size info: stops only supported with 2 elements"),!1):V(s)&&V(r)&&U(e.minDataValue)&&U(e.maxDataValue)?(FastSymbolUpdates_T(s,r,e.minDataValue,e.maxDataValue,t,o),t.type[o]=S.DefinedSize,!0):"unknown"===e.valueUnit?(k(n,"Could not convert size info: proportional size not supported"),!1):null!=v[e.valueUnit]?(t.minSize[o]=-1/0,t.maxSize[o]=1/0,t.offset[o]=0,t.factor[o]=1/v[e.valueUnit],t.type[o]=S.DefinedSize,!0):(k(n,"Could not convert size info: scale-dependent size not supported"),!1);if(!U(e.field)){if(e.stops?.[0]&&V(e.stops[0].size))return t.minSize[o]=e.stops[0].size,t.maxSize[o]=e.stops[0].size,t.offset[o]=t.minSize[o],t.factor[o]=0,t.type[o]=S.DefinedSize,!0;if(V(s))return t.minSize[o]=s,t.maxSize[o]=s,t.offset[o]=s,t.factor[o]=0,t.type[o]=S.DefinedSize,!0}return k(n,"Could not convert size info: unsupported variant of sizeInfo"),!1}function FastSymbolUpdates_T(e,t,o,i,n,s){const r=Math.abs(i-o)>0?(t-e)/(i-o):0;n.minSize[s]=r>0?e:t,n.maxSize[s]=r>0?t:e,n.offset[s]=e-o*r,n.factor[s]=r}function F(e,t,o,i){if(e.normalizationField||e.valueRepresentation)return k(i,"Could not convert size info: unsupported property"),null;if(!j(e.field))return k(i,"Could not convert size info: field is not a string"),null;if(t.size){if(e.field)if(t.size.field){if(e.field!==t.size.field)return k(i,"Could not convert size info: multiple fields in use"),null}else t.size.field=e.field}else t.size=new g(e.field);let n;switch(e.axis){case"width":return n=I(e,t.size,0,o,i),n?t:null;case"height":return n=I(e,t.size,2,o,i),n?t:null;case"depth":return n=I(e,t.size,1,o,i),n?t:null;case"width-and-depth":return n=I(e,t.size,0,o,i),n&&I(e,t.size,1,o,i),n?t:null;case null:case void 0:case"all":return n=I(e,t.size,0,o,i),n=n&&I(e,t.size,1,o,i),n=n&&I(e,t.size,2,o,i),n?t:null;default:return k(i,`Could not convert size info: unknown axis "${e.axis}""`),null}}function P(e,t,o){for(let n=0;n<3;++n){let o=t.unitInMeters;e.type[n]===S.DefinedSize&&(o*=t.modelSize[n],e.type[n]=S.DefinedScale),e.minSize[n]=e.minSize[n]/o,e.maxSize[n]=e.maxSize[n]/o,e.offset[n]=e.offset[n]/o,e.factor[n]=e.factor[n]/o}let i;if(e.type[0]!==S.Undefined)i=0;else if(e.type[1]!==S.Undefined)i=1;else{if(e.type[2]===S.Undefined)return k(o,"No size axis contains a valid size or scale"),!1;i=2}for(let n=0;n<3;++n)e.type[n]===S.Undefined&&(e.minSize[n]=e.minSize[i],e.maxSize[n]=e.maxSize[i],e.offset[n]=e.offset[i],e.factor[n]=e.factor[i],e.type[n]=e.type[i]);return!0}function R(e,t,o){e[4*t]=o.r/255,e[4*t+1]=o.g/255,e[4*t+2]=o.b/255,e[4*t+3]=o.a}function E(e,t,o){if(e.normalizationField)return k(o,"Could not convert color info: unsupported property"),null;if(M(e.field)){if(!e.stops)return k(o,"Could not convert color info: missing stops or colors"),null;{if(e.stops.length>8)return k(o,"Could not convert color info: too many color stops"),null;t.color=new b(e.field);const i=e.stops;for(let e=0;e<8;++e){const o=i[Math.min(e,i.length-1)];t.color.values[e]=o.value,R(t.color.colors,e,o.color)}}}else{if(!(e.stops&&e.stops.length>=0))return k(o,"Could not convert color info: no field and no colors/stops"),null;{const o=e.stops&&e.stops.length>=0&&e.stops[0].color;t.color={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};for(let e=0;e<8;e++)t.color.values[e]=1/0,R(t.color.colors,e,o)}}return t}function _(e,t,o){if(e.normalizationField)return k(o,"Could not convert opacity info: unsupported property"),null;if(M(e.field)){if(!e.stops)return k(o,"Could not convert opacity info: missing stops or opacities"),null;{if(e.stops.length>8)return k(o,"Could not convert opacity info: too many opacity stops"),null;t.opacity=new C(e.field);const i=e.stops;for(let e=0;e<8;++e){const o=i[Math.min(e,i.length-1)];t.opacity.values[e]=o.value,t.opacity.opacityValues[e]=o.opacity}}}else{if(!(e.stops&&e.stops.length>=0))return k(o,"Could not convert opacity info: no field and no opacities/stops"),null;{const o=e.stops&&e.stops.length>=0?e.stops[0].opacity:0;t.opacity={field:null,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0]};for(let e=0;e<8;e++)t.opacity.values[e]=1/0,t.opacity.opacityValues[e]=o}}return t}function q(e,t,o){const i=2===o&&"arithmetic"===e.rotationType;t.offset[o]=i?90:0,t.factor[o]=i?-1:1,t.type[o]=1}function $(e,t,o){if(!M(e.field))return k(o,"Could not convert rotation info: field is not a string"),null;if(t.rotation){if(e.field)if(t.rotation.field){if(e.field!==t.rotation.field)return k(o,"Could not convert rotation info: multiple fields in use"),null}else t.rotation.field=e.field}else t.rotation={field:e.field,offset:[0,0,0],factor:[1,1,1],type:[0,0,0]};switch(e.axis){case"tilt":return q(e,t.rotation,0),t;case"roll":return q(e,t.rotation,1),t;case null:case void 0:case"heading":return q(e,t.rotation,2),t;default:return k(o,`Could not convert rotation info: unknown axis "${e.axis}""`),null}}class B{constructor(e,t=[1,1,1],o=[1,1,1],i=1,n=[0,0,0],s=[1,1,1],r=[0,0,0]){this.supports=e,this.modelSize=t,this.symbolSize=o,this.unitInMeters=i,this.anchor=n,this.scale=s,this.rotation=r}}function L(e,t,o){if(!e)return null;const i=e.reduce(((e,i)=>{if(!e)return e;if(i.valueExpression)return k(o,"Could not convert visual variables: arcade expressions not supported"),null;switch(i.type){case"size":return t.supports.size?F(i,e,t,o):e;case"color":return t.supports.color?E(i,e,o):e;case"opacity":return t.supports.opacity?_(i,e,o):null;case"rotation":return t.supports.rotation?$(i,e,o):e;default:return null}}),new w);return!(e.length>0&&i)||i.size||i.color||i.opacity||i.rotation?i?.size&&!P(i.size,t,o)?null:i:null}class N{constructor(e,t,o){this.visualVariables=e,this.materialParameters=t,this.requiresShaderTransformation=o}}function O(e,t){if(!e)return null;if(m.TESTS_DISABLE_FAST_UPDATES)return null;const o=L(e.visualVariables,t);return o?new N(o,K(o,t),!!o.size):null}function G(e,t,o){if(!t||!e)return!1;const i=e.visualVariables,n=L(t.visualVariables,o);return!!n&&(!!(H(i.size,n.size,"size")&&H(i.color,n.color,"color")&&H(i.rotation,n.rotation,"rotation")&&H(i.opacity,n.opacity,"opacity"))&&(e.visualVariables=n,e.materialParameters=K(n,o),e.requiresShaderTransformation=!!n.size,!0))}function H(e,t,o){if(!!e!=!!t)return!1;if(e&&e.field!==t?.field)return!1;if(e&&"rotation"===o){const o=e,i=t;for(let e=0;e<3;e++)if(o.type[e]!==i.type[e]||o.offset[e]!==i.offset[e]||o.factor[e]!==i.factor[e])return!1}return!0}class J extends interfaces/* NoParameters */.Y{constructor(e){super(),this.vvSize=e?.size??null,this.vvColor=e?.color??null,this.vvOpacity=e?.opacity??null}}function K(e,n){const s=new J(e);return s.vvSize&&(s.vvSymbolAnchor=n.anchor,i(ee),A(n.rotation[2],n.rotation[0],n.rotation[1],ee),s.vvSymbolRotationMatrix=s.vvSymbolRotationMatrix||o(),t(s.vvSymbolRotationMatrix,ee)),s}function Q(t,o,i){if(!t.vvSize)return i;n(Y,i);const u=t.vvSymbolRotationMatrix;s(ee,u[0],u[1],u[2],0,u[3],u[4],u[5],0,u[6],u[7],u[8],0,0,0,0,1),r(Y,Y,ee);for(let n=0;n<3;++n){const i=t.vvSize.offset[n]+o[0]*t.vvSize.factor[n];Z[n]=e(i,t.vvSize.minSize[n],t.vvSize.maxSize[n])}return l(Y,Y,Z),a(Y,Y,t.vvSymbolAnchor),Y}function W(t,o,i){if(!o.vvSize)return d(t,1,1,1),t;for(let n=0;n<3;++n){const s=o.vvSize.offset[n]+i[0]*o.vvSize.factor[n];t[n]=e(s,o.vvSize.minSize[n],o.vvSize.maxSize[n])}return t}function X(e,t){const o=null==e?0:t.attributes[e];return"number"==typeof o&&isFinite(o)?o:0}const Y=(0,mat4f64.a)(),Z=(0,vec3f64.c)(),ee=(0,mat4f64.a)();

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Material.js + 1 modules
var Material = __webpack_require__(18429);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/VisualVariablePassParameters.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class VisualVariablePassParameters_t extends J{constructor(){super(...arguments),this.renderOccluded=Material/* RenderOccludedFlag */.m$.Occlude,this.isDecoration=!1}}const VisualVariablePassParameters_e=8;

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function VisualVariables_glsl_l(l,n){const{vertex:s,attributes:u}=l;n.hasVvInstancing&&(n.vvSize||n.vvColor)&&u.add(VertexAttribute/* VertexAttribute */.r.INSTANCEFEATUREATTRIBUTE,"vec4"),n.vvSize?(s.uniforms.add(new Float3PassUniform/* Float3PassUniform */.t("vvSizeMinSize",(e=>e.vvSize.minSize))),s.uniforms.add(new Float3PassUniform/* Float3PassUniform */.t("vvSizeMaxSize",(e=>e.vvSize.maxSize))),s.uniforms.add(new Float3PassUniform/* Float3PassUniform */.t("vvSizeOffset",(e=>e.vvSize.offset))),s.uniforms.add(new Float3PassUniform/* Float3PassUniform */.t("vvSizeFactor",(e=>e.vvSize.factor))),s.uniforms.add(new Matrix3PassUniform/* Matrix3PassUniform */.k("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),s.uniforms.add(new Float3PassUniform/* Float3PassUniform */.t("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),s.code.add((0,interfaces/* glsl */.H)`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),s.code.add((0,interfaces/* glsl */.H)`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${n.hasVvInstancing?(0,interfaces/* glsl */.H)`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):s.code.add((0,interfaces/* glsl */.H)`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),n.vvColor?(s.constants.add("vvColorNumber","int",VisualVariablePassParameters_e),s.uniforms.add(new FloatsPassUniform_o("vvColorValues",(e=>e.vvColor.values),VisualVariablePassParameters_e),new Float4sPassUniform_e("vvColorColors",(e=>e.vvColor.colors),VisualVariablePassParameters_e)),s.code.add((0,interfaces/* glsl */.H)`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${n.hasVvInstancing?(0,interfaces/* glsl */.H)`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):s.code.add((0,interfaces/* glsl */.H)`vec4 vvColor() { return vec4(1.0); }`)}


/***/ }),

/***/ 33448:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ o),
/* harmony export */   y: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const o=.1,t=.001;


/***/ }),

/***/ 29724:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ s)
});

// UNUSED EXPORTS: DiscardOrAdjustAlphaDraw

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/AlphaCutoff.js
var AlphaCutoff = __webpack_require__(33448);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js
var interfaces = __webpack_require__(99152);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/DiscardOrAdjustAlphaBlend.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function d(d){d.fragment.code.add((0,interfaces/* glsl */.H)`
    #define discardOrAdjustAlpha(color) { if (color.a < ${interfaces/* glsl */.H.float(AlphaCutoff/* symbolAlphaCutoff */.y)}) { discard; } }
  `)}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js
var Uniform = __webpack_require__(99198);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js
var BindType = __webpack_require__(57198);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatDrawUniform.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class FloatDrawUniform_e extends Uniform/* Uniform */.n{constructor(r,e){super(r,"float",BindType/* BindType */.c.Draw,((o,s,t)=>o.setUniform1f(r,e(s,t))))}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js
var FloatPassUniform = __webpack_require__(35449);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js
var basicInterfaces = __webpack_require__(91013);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function s(a,e){l(a,e,new FloatPassUniform/* FloatPassUniform */.m("textureAlphaCutoff",(a=>a.textureAlphaCutoff)))}function t(a,r){l(a,r,new e("textureAlphaCutoff",(a=>a.textureAlphaCutoff)))}function l(e,r,s){const t=e.fragment;switch(r.alphaDiscardMode!==basicInterfaces/* AlphaDiscardMode */.sf.Mask&&r.alphaDiscardMode!==basicInterfaces/* AlphaDiscardMode */.sf.MaskBlend||t.uniforms.add(s),r.alphaDiscardMode){case basicInterfaces/* AlphaDiscardMode */.sf.Blend:return e.include(d);case basicInterfaces/* AlphaDiscardMode */.sf.Opaque:t.code.add((0,interfaces/* glsl */.H)`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case basicInterfaces/* AlphaDiscardMode */.sf.Mask:t.code.add((0,interfaces/* glsl */.H)`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case basicInterfaces/* AlphaDiscardMode */.sf.MaskBlend:e.fragment.code.add((0,interfaces/* glsl */.H)`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}


/***/ }),

/***/ 1062:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ir: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony exports getProjectionInfo, getZScale */
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58680);
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78286);
/* harmony import */ var _chunks_vec4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25102);
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52712);
/* harmony import */ var _shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54473);
/* harmony import */ var _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1411);
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99152);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function n(r){r.fragment.uniforms.add(new _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_5__/* .Float4PassUniform */ .E("projInfo",((r,o)=>f(o)))),r.fragment.uniforms.add(new _shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_4__/* .Float2PassUniform */ .G("zScale",((r,o)=>i(o)))),r.fragment.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_6__/* .glsl */ .H)`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function f(r){const o=r.camera.projectionMatrix;return 0===o[11]?(0,_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_2__.s)(m,2/(r.camera.fullWidth*o[0]),2/(r.camera.fullHeight*o[5]),(1+o[12])/o[0],(1+o[13])/o[5]):(0,_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_2__.s)(m,-2/(r.camera.fullWidth*o[0]),-2/(r.camera.fullHeight*o[5]),(1-o[8])/o[0],(1-o[9])/o[5])}const m=(0,_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_3__.c)();function i(o){return 0===o.camera.projectionMatrix[11]?(0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__.s)(d,0,1):(0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__.s)(d,1,0)}const d=(0,_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__.a)();


/***/ }),

/***/ 10470:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99152);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function c({code:c},i){i.doublePrecisionRequiresObfuscation?c.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H)`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):c.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H)`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}


/***/ }),

/***/ 66676:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* binding */ i)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/support/symbolColorUtils.js
var symbolColorUtils = __webpack_require__(55623);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js
var interfaces = __webpack_require__(99152);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(e){e.code.add((0,interfaces/* glsl */.H)`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function i(i){i.include(e),i.code.add((0,interfaces/* glsl */.H)`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${interfaces/* glsl */.H.int(symbolColorUtils/* ColorMixModeEnum */.k5.Multiply)}) {
        return allMixed;
      }
      if (mode == ${interfaces/* glsl */.H.int(symbolColorUtils/* ColorMixModeEnum */.k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${interfaces/* glsl */.H.int(symbolColorUtils/* ColorMixModeEnum */.k5.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${interfaces/* glsl */.H.int(symbolColorUtils/* ColorMixModeEnum */.k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${interfaces/* glsl */.H.int(symbolColorUtils/* ColorMixModeEnum */.k5.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}


/***/ }),

/***/ 4969:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99152);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function a(a){a.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H)`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}


/***/ }),

/***/ 70224:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99152);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function a(a){a.code.add((0,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H)`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}


/***/ }),

/***/ 63592:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  yu: () => (/* binding */ f),
  NB: () => (/* binding */ d),
  S7: () => (/* binding */ p)
});

// UNUSED EXPORTS: addPixelRatio

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat4.js
var mat4 = __webpack_require__(37046);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat4f64.js
var mat4f64 = __webpack_require__(56192);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3.js
var vec3 = __webpack_require__(21839);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3f64.js
var vec3f64 = __webpack_require__(22279);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3DrawUniform.js
var Float3DrawUniform = __webpack_require__(13501);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js
var Float3PassUniform = __webpack_require__(60840);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js
var FloatPassUniform = __webpack_require__(35449);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Uniform.js
var Uniform = __webpack_require__(99198);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/BindType.js
var BindType = __webpack_require__(57198);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4DrawUniform.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class Matrix4DrawUniform_o extends Uniform/* Uniform */.n{constructor(r,o){super(r,"mat4",BindType/* BindType */.c.Draw,((e,s,t)=>e.setUniformMatrix4fv(r,o(s,t))))}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform.js
var Matrix4PassUniform = __webpack_require__(20778);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function f(r,a){a.instancedDoublePrecision?r.constants.add("cameraPosition","vec3",vec3f64.Z):r.uniforms.add(new Float3DrawUniform/* Float3DrawUniform */.W("cameraPosition",((r,a)=>(0,vec3.s)(w,a.camera.viewInverseTransposeMatrix[3]-r.origin[0],a.camera.viewInverseTransposeMatrix[7]-r.origin[1],a.camera.viewInverseTransposeMatrix[11]-r.origin[2]))))}function d(a,i){if(!i.instancedDoublePrecision)return void a.uniforms.add(new Matrix4PassUniform/* Matrix4PassUniform */.X("proj",((r,a)=>a.camera.projectionMatrix)),new Matrix4DrawUniform_o("view",((a,e)=>(0,mat4.w)(v,e.camera.viewMatrix,a.origin))),new Float3DrawUniform/* Float3DrawUniform */.W("localOrigin",(r=>r.origin)));const o=r=>(0,vec3.s)(w,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]);a.uniforms.add(new Matrix4PassUniform/* Matrix4PassUniform */.X("proj",((r,a)=>a.camera.projectionMatrix)),new Matrix4PassUniform/* Matrix4PassUniform */.X("view",((a,e)=>(0,mat4.w)(v,e.camera.viewMatrix,o(e)))),new Float3PassUniform/* Float3PassUniform */.t("localOrigin",((r,a)=>o(a))))}const v=(0,mat4f64.a)(),w=(0,vec3f64.c)();function p(r){r.uniforms.add(new Matrix4PassUniform/* Matrix4PassUniform */.X("viewNormal",((r,a)=>a.camera.viewInverseTransposeMatrix)))}function u(r){r.uniforms.add(new t("pixelRatio",((r,a)=>a.camera.pixelRatio/a.overlayStretch)))}


/***/ }),

/***/ 96320:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99198);
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57198);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class o extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__/* .Uniform */ .n{constructor(r,o){super(r,"vec2",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__/* .BindType */ .c.Draw,((e,s,t,i)=>e.setUniform2fv(r,o(s,t,i))))}}


/***/ }),

/***/ 54473:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99198);
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57198);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class e extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__/* .Uniform */ .n{constructor(r,e){super(r,"vec2",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__/* .BindType */ .c.Pass,((s,o,t)=>s.setUniform2fv(r,e(o,t))))}}


/***/ }),

/***/ 13501:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99198);
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57198);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class o extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__/* .Uniform */ .n{constructor(r,o){super(r,"vec3",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__/* .BindType */ .c.Draw,((e,s,t,i)=>e.setUniform3fv(r,o(s,t,i))))}}


/***/ }),

/***/ 60840:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99198);
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57198);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class e extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__/* .Uniform */ .n{constructor(r,e){super(r,"vec3",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__/* .BindType */ .c.Pass,((s,o,t)=>s.setUniform3fv(r,e(o,t))))}}


/***/ }),

/***/ 1411:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99198);
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57198);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class e extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__/* .Uniform */ .n{constructor(r,e){super(r,"vec4",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__/* .BindType */ .c.Pass,((s,o,t)=>s.setUniform4fv(r,e(o,t))))}}


/***/ }),

/***/ 35449:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99198);
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57198);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class o extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__/* .Uniform */ .n{constructor(r,o){super(r,"float",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__/* .BindType */ .c.Pass,((s,e,t)=>s.setUniform1f(r,o(e,t))))}}


/***/ }),

/***/ 3445:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99198);
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57198);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class e extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__/* .Uniform */ .n{constructor(r,e){super(r,"int",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__/* .BindType */ .c.Pass,((s,o,i)=>s.setUniform1i(r,e(o,i))))}}


/***/ }),

/***/ 8376:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99198);
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57198);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class o extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__/* .Uniform */ .n{constructor(r,o){super(r,"mat3",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__/* .BindType */ .c.Draw,((e,s,t)=>e.setUniformMatrix3fv(r,o(s,t))))}}


/***/ }),

/***/ 6561:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99198);
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57198);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class e extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__/* .Uniform */ .n{constructor(r,e){super(r,"mat3",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__/* .BindType */ .c.Pass,((s,o,t)=>s.setUniformMatrix3fv(r,e(o,t))))}}


/***/ }),

/***/ 20778:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99198);
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57198);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class e extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__/* .Uniform */ .n{constructor(r,e){super(r,"mat4",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__/* .BindType */ .c.Pass,((s,o,t)=>s.setUniformMatrix4fv(r,e(o,t))))}}


/***/ }),

/***/ 4274:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N5: () => (/* binding */ o)
/* harmony export */ });
/* unused harmony exports Code, Includes, Stage, Uniforms */
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(539);
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57198);
/* harmony import */ var _lib_Util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58947);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const s=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class i{constructor(){this._includedModules=new Map}include(e,t){if(this._includedModules.has(e)){const r=this._includedModules.get(e);if(r!==t){s.error("Trying to include shader module multiple times with different sets of options.");const t=new Set;for(const n of Object.keys(r))r[n]!==e[n]&&t.add(n);for(const n of Object.keys(e))r[n]!==e[n]&&t.add(n);t.forEach((t=>console.error(`  ${t}: current ${r[t]} new ${e[t]}`)))}}else this._includedModules.set(e,t),e(this.builder,t)}}class o extends i{constructor(){super(...arguments),this.vertex=new u,this.fragment=new u,this.attributes=new h,this.varyings=new m,this.extensions=new l,this.constants=new _,this.outputs=new d}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),n=this.varyings.generateSource(e),s="vertex"===e?this.vertex:this.fragment,i=s.uniforms.generateSource(),o=s.code.generateSource(),a="vertex"===e?g:f,c=this.constants.generateSource().concat(s.constants.generateSource()),u=this.outputs.generateSource(e);return`#version 300 es\n${t.join("\n")}\n\n${a}\n\n${c.join("\n")}\n\n${i.join("\n")}\n\n${r.join("\n")}\n\n${n.join("\n")}\n\n${u.join("\n")}\n\n${o.join("\n")}`}generateBindPass(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const n=e.bind[_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_2__/* .BindType */ .c.Pass];n&&t.set(e.name,n)})),this.fragment.uniforms.entries.forEach((e=>{const n=e.bind[_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_2__/* .BindType */ .c.Pass];n&&t.set(e.name,n)}));const n=Array.from(t.values()),s=n.length;return(t,r)=>{for(let i=0;i<s;++i)n[i](e,t,r)}}generateBindDraw(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const n=e.bind[_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_2__/* .BindType */ .c.Draw];n&&t.set(e.name,n)})),this.fragment.uniforms.entries.forEach((e=>{const n=e.bind[_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_2__/* .BindType */ .c.Draw];n&&t.set(e.name,n)}));const n=Array.from(t.values()),s=n.length;return(t,r,i)=>{for(let o=0;o<s;++o)n[o](e,t,r,i)}}}class a{constructor(){this._entries=new Map}add(...e){for(const t of e)this._add(t)}get(e){return this._entries.get(e)}_add(t){if(null!=t){if(this._entries.has(t.name)&&!this._entries.get(t.name).equals(t))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(`Duplicate uniform name ${t.name} for different uniform type`);this._entries.set(t.name,t)}else s.error(`Trying to add null Uniform from ${(new Error).stack}.`)}generateSource(){return Array.from(this._entries.values()).map((e=>null!=e.arraySize?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}}class c{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class u extends i{constructor(){super(...arguments),this.uniforms=new a,this.code=new c,this.constants=new _}get builder(){return this}}class h{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`in ${e[1]} ${e[0]};`))}}class m{constructor(){this._entries=new Map}add(e,t){this._entries.has(e)&&(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_3__/* .assert */ .vA)(this._entries.get(e)===t),this._entries.set(e,t)}generateSource(e){const t=new Array;return this._entries.forEach(((r,n)=>t.push("vertex"===e?`out ${r} ${n};`:`in ${r} ${n};`))),t}}class l{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?l.ALLOWLIST_VERTEX:l.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}l.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],l.ALLOWLIST_VERTEX=[];class d{constructor(){this._entries=new Map}add(e,t,r=0){const s=this._entries.get(r);s?(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_3__/* .assert */ .vA)(s.name===e&&s.type===t,`Fragment shader output location ${r} occupied`):this._entries.set(r,{name:e,type:t})}generateSource(e){if("vertex"===e)return[];0===this._entries.size&&this._entries.set(0,{name:d.DEFAULT_NAME,type:d.DEFAULT_TYPE});const t=new Array;return this._entries.forEach(((e,r)=>t.push(`layout(location = ${r}) out ${e.type} ${e.name};`))),t}}d.DEFAULT_TYPE="vec4",d.DEFAULT_NAME="fragColor";class _{constructor(){this._entries=new Set}add(e,t,r){let n="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":n=_._numberToFloatStr(r);break;case"int":n=_._numberToIntStr(r);break;case"bool":n=r.toString();break;case"vec2":n=`vec2(${_._numberToFloatStr(r[0])},                            ${_._numberToFloatStr(r[1])})`;break;case"vec3":n=`vec3(${_._numberToFloatStr(r[0])},                            ${_._numberToFloatStr(r[1])},                            ${_._numberToFloatStr(r[2])})`;break;case"vec4":n=`vec4(${_._numberToFloatStr(r[0])},                            ${_._numberToFloatStr(r[1])},                            ${_._numberToFloatStr(r[2])},                            ${_._numberToFloatStr(r[3])})`;break;case"ivec2":n=`ivec2(${_._numberToIntStr(r[0])},                             ${_._numberToIntStr(r[1])})`;break;case"ivec3":n=`ivec3(${_._numberToIntStr(r[0])},                             ${_._numberToIntStr(r[1])},                             ${_._numberToIntStr(r[2])})`;break;case"ivec4":n=`ivec4(${_._numberToIntStr(r[0])},                             ${_._numberToIntStr(r[1])},                             ${_._numberToIntStr(r[2])},                             ${_._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":n=`${t}(${Array.prototype.map.call(r,(e=>_._numberToFloatStr(e))).join(", ")})`}return this._entries.add(`const ${t} ${e} = ${n};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const f="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",g="precision highp float;\nprecision highp sampler2D;";


/***/ }),

/***/ 52293:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99198);
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57198);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class s extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__/* .Uniform */ .n{constructor(r,s){super(r,"sampler2D",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__/* .BindType */ .c.Draw,((e,o,t)=>e.bindTexture(r,s(o,t))))}}


/***/ }),

/***/ 79856:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _Uniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99198);
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57198);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class s extends _Uniform_js__WEBPACK_IMPORTED_MODULE_0__/* .Uniform */ .n{constructor(r,s){super(r,"sampler2D",_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_1__/* .BindType */ .c.Pass,((e,o,t)=>e.bindTexture(r,s(o,t))))}}


/***/ }),

/***/ 99198:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57198);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class a{constructor(a,i,e,r,t=null){if(this.name=a,this.type=i,this.arraySize=t,this.bind={[_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_0__/* .BindType */ .c.Pass]:null,[_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_0__/* .BindType */ .c.Draw]:null},r)switch(e){case _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_0__/* .BindType */ .c.Pass:this.bind[_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_0__/* .BindType */ .c.Pass]=r;break;case _shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_0__/* .BindType */ .c.Draw:this.bind[_shaderTechnique_BindType_js__WEBPACK_IMPORTED_MODULE_0__/* .BindType */ .c.Draw]=r}}equals(s){return this.type===s.type&&this.name===s.name&&this.arraySize===s.arraySize}}


/***/ }),

/***/ 99152:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ o),
/* harmony export */   Y: () => (/* binding */ n)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class t{}const n=t;function o(t,...n){let o="";for(let r=0;r<n.length;r++)o+=t[r]+n[r];return o+=t[t.length-1],o}!function(t){function n(t){return Math.round(t).toString()}function o(t){return t.toPrecision(8)}t.int=n,t.float=o}(o||(o={}));


/***/ }),

/***/ 57198:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ a)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var a;!function(a){a[a.Pass=0]="Pass",a[a.Draw=1]="Draw"}(a||(a={}));


/***/ }),

/***/ 47705:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class t{constructor(t,o){this._module=t,this._loadModule=o}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}


/***/ }),

/***/ 33444:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6267);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41746);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class r{constructor(i,t,r){this.release=r,this.initializeConfiguration(i,t),this._configuration=t.snapshot(),this._program=this.initializeProgram(i),this._pipeline=this.initializePipeline(i.rctx.capabilities)}destroy(){this._program=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__/* .disposeMaybe */ .WD)(this._program),this._pipeline=this._configuration=null}reload(t){(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__/* .disposeMaybe */ .WD)(this._program),this._program=this.initializeProgram(t),this._pipeline=this.initializePipeline(t.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}ensureAttributeLocations(i){this.program.assertCompatibleVertexAttributeLocations(i)}get primitiveType(){return _webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .PrimitiveType */ .WR.TRIANGLES}getPipeline(i,t,r){return this._pipeline}initializeConfiguration(i,t){}}


/***/ }),

/***/ 69948:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ t),
/* harmony export */   W: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99152);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class t extends _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .NoParameters */ .Y{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}function r(e={}){return(t,r)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(r),null!=e.constValue)Object.defineProperty(t,r,{get:()=>e.constValue});else{const s=t._parameterNames.length-1,a=e.count||2,i=Math.ceil(Math.log2(a)),o=t._parameterBits??[0];let h=0;for(;o[h]+i>16;)h++,h>=o.length&&o.push(0);t._parameterBits=o;const n=o[h],m=(1<<i)-1<<n;o[h]+=i,Object.defineProperty(t,r,{get(){return this[s]},set(e){if(this[s]!==e&&(this[s]=e,this._keyDirty=!0,this._parameterBits[h]=this._parameterBits[h]&~m|+e<<n&m,"number"!=typeof e&&"boolean"!=typeof e))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof e)}})}}}


/***/ }),

/***/ 70807:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ s),
/* harmony export */   n: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class s{constructor(s,t,i=t){this.data=s,this.size=t,this.stride=i}}class t extends s{constructor(s,t,i,e=!1,c=i){super(s,i,c),this.indices=t,this.exclusive=e}}


/***/ }),

/***/ 71077:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _core_uid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65061);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class r{constructor(){this.id=(0,_core_uid_js__WEBPACK_IMPORTED_MODULE_0__/* .generateUID */ .L)()}}


/***/ }),

/***/ 52997:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var e;!function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Mesh=2]="Mesh",e[e.Line=3]="Line",e[e.Point=4]="Point",e[e.Material=5]="Material",e[e.Texture=6]="Texture",e[e.COUNT=7]="COUNT"}(e||(e={}));


/***/ }),

/***/ 13148:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ E)
/* harmony export */ });
/* harmony import */ var _VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50645);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const E=new Map([[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.POSITION,0],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.NORMAL,1],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.NORMALCOMPRESSED,1],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.UV0,2],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.COLOR,3],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.COLORFEATUREATTRIBUTE,3],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.SIZE,4],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.TANGENT,4],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.AUXPOS1,5],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.SYMBOLCOLOR,5],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.AUXPOS2,6],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.FEATUREATTRIBUTE,6],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.INSTANCEFEATUREATTRIBUTE,6],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.INSTANCECOLOR,7],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.OBJECTANDLAYERIDCOLOR,7],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.INSTANCEOBJECTANDLAYERIDCOLOR,7],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.INSTANCEMODEL,8],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.INSTANCEMODELNORMAL,12],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.INSTANCEMODELORIGINHI,11],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.INSTANCEMODELORIGINLO,15]]);


/***/ }),

/***/ 98174:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  m: () => (/* binding */ r)
});

// UNUSED EXPORTS: GLTextureMaterialBindParameters

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(6267);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js
var interfaces = __webpack_require__(99152);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js
var basicInterfaces = __webpack_require__(91013);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLMaterial.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class t{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}get _markerTextureRepository(){return this._techniqueRepository.constructionContext.markerTextureRepository}ensureTechnique(e,t){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(this._output,t),this._technique),this._technique}ensureResources(t){return basicInterfaces/* ResourceState */.Am.LOADED}}

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLTextureMaterial.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class r extends t{constructor(t){super(t),this._numLoading=0,this._disposed=!1,this._textureRepository=t.textureRepository,this._textureId=t.textureId,this._acquire(t.textureId,(t=>this._texture=t)),this._acquire(t.normalTextureId,(t=>this._textureNormal=t)),this._acquire(t.emissiveTextureId,(t=>this._textureEmissive=t)),this._acquire(t.occlusionTextureId,(t=>this._textureOcclusion=t)),this._acquire(t.metallicRoughnessTextureId,(t=>this._textureMetallicRoughness=t))}dispose(){this._texture=(0,maybe/* releaseMaybe */.Gz)(this._texture),this._textureNormal=(0,maybe/* releaseMaybe */.Gz)(this._textureNormal),this._textureEmissive=(0,maybe/* releaseMaybe */.Gz)(this._textureEmissive),this._textureOcclusion=(0,maybe/* releaseMaybe */.Gz)(this._textureOcclusion),this._textureMetallicRoughness=(0,maybe/* releaseMaybe */.Gz)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(t){return 0===this._numLoading?basicInterfaces/* ResourceState */.Am.LOADED:basicInterfaces/* ResourceState */.Am.LOADING}get textureBindParameters(){return new l(null!=this._texture?this._texture.glTexture:null,null!=this._textureNormal?this._textureNormal.glTexture:null,null!=this._textureEmissive?this._textureEmissive.glTexture:null,null!=this._textureOcclusion?this._textureOcclusion.glTexture:null,null!=this._textureMetallicRoughness?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){null!=this._texture&&e===this._texture.id||(this._texture=(0,maybe/* releaseMaybe */.Gz)(this._texture),this._textureId=e,this._acquire(this._textureId,(t=>this._texture=t)))}_acquire(s,i){if(null==s)return void i(null);const u=this._textureRepository.acquire(s);if((0,promiseUtils/* isPromiseLike */.$X)(u))return++this._numLoading,void u.then((e=>{if(this._disposed)return (0,maybe/* releaseMaybe */.Gz)(e),void i(null);i(e)})).finally((()=>--this._numLoading));i(u)}}class l extends interfaces/* NoParameters */.Y{constructor(t=null,e=null,s=null,i=null,u=null){super(),this.texture=t,this.textureNormal=e,this.textureEmissive=s,this.textureOcclusion=i,this.textureMetallicRoughness=u}}


/***/ }),

/***/ 9781:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  V: () => (/* binding */ I)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat4f64.js
var mat4f64 = __webpack_require__(56192);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3.js
var vec3 = __webpack_require__(21839);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/Indices.js
var Indices = __webpack_require__(42965);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/typedArrayUtil.js
var typedArrayUtil = __webpack_require__(86942);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/AttributeArray.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function AttributeArray_o(o){if(o.length<typedArrayUtil/* nativeArrayMaxSize */.y9)return Array.from(o);if((0,typedArrayUtil/* isArray */.cy)(o))return Float64Array.from(o);if(!("BYTES_PER_ELEMENT"in o))return Array.from(o);switch(o.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(o);case 2:return (0,typedArrayUtil/* isUint16Array */.jq)(o)?Uint16Array.from(o):Int16Array.from(o);case 4:return Float32Array.from(o);default:return Float64Array.from(o)}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js
var basicInterfaces = __webpack_require__(91013);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/PooledArray.js + 1 modules
var PooledArray = __webpack_require__(63678);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3f64.js
var vec3f64 = __webpack_require__(22279);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js
var Util = __webpack_require__(58947);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/BoundingInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class BoundingInfo_o{constructor(i,e,o){this.primitiveIndices=i,this._numIndexPerPrimitive=e,this.position=o,this._children=void 0,(0,Util/* assert */.vA)(i.length>=1),(0,Util/* assert */.vA)(3===o.size||4===o.size);const{data:c,size:l,indices:m}=o;(0,Util/* assert */.vA)(m.length%this._numIndexPerPrimitive==0),(0,Util/* assert */.vA)(m.length>=i.length*this._numIndexPerPrimitive);const d=i.length;let u=l*m[this._numIndexPerPrimitive*i[0]];BoundingInfo_a.clear(),BoundingInfo_a.push(u);const f=(0,vec3f64.f)(c[u],c[u+1],c[u+2]),x=(0,vec3f64.g)(f);for(let t=0;t<d;++t){const e=this._numIndexPerPrimitive*i[t];for(let i=0;i<this._numIndexPerPrimitive;++i){u=l*m[e+i],BoundingInfo_a.push(u);let t=c[u];f[0]=Math.min(t,f[0]),x[0]=Math.max(t,x[0]),t=c[u+1],f[1]=Math.min(t,f[1]),x[1]=Math.max(t,x[1]),t=c[u+2],f[2]=Math.min(t,f[2]),x[2]=Math.max(t,x[2])}}this.bbMin=f,this.bbMax=x;const P=(0,vec3.p)((0,vec3f64.c)(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(x[0]-f[0],x[1]-f[1]),x[2]-f[2]);let p=this.radius*this.radius;for(let t=0;t<BoundingInfo_a.length;++t){u=BoundingInfo_a.at(t);const i=c[u]-P[0],e=c[u+1]-P[1],s=c[u+2]-P[2],r=i*i+e*e+s*s;if(r<=p)continue;const n=Math.sqrt(r),h=.5*(n-this.radius);this.radius=this.radius+h,p=this.radius*this.radius;const o=h/n;P[0]+=i*o,P[1]+=e*o,P[2]+=s*o}this.center=P,BoundingInfo_a.clear()}getChildren(){if(this._children||(0,vec3.a)(this.bbMin,this.bbMax)<=1)return this._children;const i=(0,vec3.p)((0,vec3f64.c)(),this.bbMin,this.bbMax,.5),s=this.primitiveIndices.length,r=new Uint8Array(s),h=new Array(8);for(let t=0;t<8;++t)h[t]=0;const{data:a,size:c,indices:l}=this.position;for(let t=0;t<s;++t){let e=0;const s=this._numIndexPerPrimitive*this.primitiveIndices[t];let n=c*l[s],o=a[n],m=a[n+1],d=a[n+2];for(let i=1;i<this._numIndexPerPrimitive;++i){n=c*l[s+i];const t=a[n],e=a[n+1],r=a[n+2];t<o&&(o=t),e<m&&(m=e),r<d&&(d=r)}o<i[0]&&(e|=1),m<i[1]&&(e|=2),d<i[2]&&(e|=4),r[t]=e,++h[e]}let m=0;for(let t=0;t<8;++t)h[t]>0&&++m;if(m<2)return;const d=new Array(8);for(let t=0;t<8;++t)d[t]=h[t]>0?new Uint32Array(h[t]):void 0;for(let t=0;t<8;++t)h[t]=0;for(let t=0;t<s;++t){const i=r[t];d[i][h[i]++]=this.primitiveIndices[t]}this._children=new Array;for(let t=0;t<8;++t)void 0!==d[t]&&this._children.push(new BoundingInfo_o(d[t],this._numIndexPerPrimitive,this.position));return this._children}static prune(){BoundingInfo_a.prune()}}const BoundingInfo_a=new PooledArray/* default */.A({deallocator:null});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObject.js
var ContentObject = __webpack_require__(71077);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObjectType.js
var ContentObjectType = __webpack_require__(52997);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/ObjectStack.js
var ObjectStack = __webpack_require__(92114);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/lineSegment.js
var lineSegment = __webpack_require__(22759);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/vectorStacks.js + 1 modules
var vectorStacks = __webpack_require__(45573);
;// ../node_modules/@arcgis/core/geometry/support/triangle.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function j(t){return t?{p0:(0,vec3f64.g)(t.p0),p1:(0,vec3f64.g)(t.p1),p2:(0,vec3f64.g)(t.p2)}:{p0:(0,vec3f64.c)(),p1:(0,vec3f64.c)(),p2:(0,vec3f64.c)()}}function h(t,n,e){const r=x.get();return r.p0=t,r.p1=n,r.p2=e,r}function k(t,n=j()){return b(t.p0,t.p1,t.p2,n)}function b(t,e,r,o=j()){return n(o.p0,t),n(o.p1,e),n(o.p2,r),o}function l(t,n){const p=t.p0,c=t.p1,s=t.p2,i=e(m.get(),c,p),u=e(m.get(),s,c),f=e(m.get(),p,s),j=e(m.get(),n,p),h=e(m.get(),n,c),k=e(m.get(),n,s),b=r(i,i,f),l=o(r(m.get(),i,b),j),v=o(r(m.get(),u,b),h),S=o(r(m.get(),f,b),k);if(l>0&&v>0&&S>0){const t=o(b,j);return t*t/o(b,b)}const d=a(g(p,i,M.get()),n),w=a(g(c,u,M.get()),n),x=a(g(s,f,M.get()),n);return Math.min(d,w,x)}function v(t,n,e){const r=1e-5,{direction:o,origin:s}=n,{p0:i,p1:u,p2:f}=t,a=u[0]-i[0],g=u[1]-i[1],m=u[2]-i[2],j=f[0]-i[0],h=f[1]-i[1],k=f[2]-i[2],b=o[1]*k-h*o[2],l=o[2]*j-k*o[0],v=o[0]*h-j*o[1],S=a*b+g*l+m*v;if(S>-r&&S<r)return!1;const d=1/S,w=s[0]-i[0],M=s[1]-i[1],x=s[2]-i[2],O=d*(w*b+M*l+x*v);if(O<0||O>1)return!1;const V=M*m-g*x,q=x*a-m*w,y=w*g-a*M,z=d*(o[0]*V+o[1]*q+o[2]*y);if(z<0||O+z>1)return!1;if(e){p(e,o,d*(j*V+h*q+k*y)),c(e,s,e)}return!0}function S(t,n,e){const r=n[0]-t[0],o=n[1]-t[1],p=e[0]-t[0],c=e[1]-t[1];return.5*Math.abs(r*c-o*p)}function d(t){return S(t.p0,t.p1,t.p2)}function w(t,n,o){return (0,vec3.f)(O,n,t),(0,vec3.f)(V,o,t),(0,vec3.l)((0,vec3.b)(O,O,V))/2}const M=new ObjectStack/* ObjectStack */.I(lineSegment/* create */.vt),x=new ObjectStack/* ObjectStack */.I((()=>j())),O=(0,vec3f64.c)(),V=(0,vec3f64.c)();

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/geometryDataUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function geometryDataUtils_c(s,r){if(!s)return!1;const{size:c,data:i,indices:f}=s;(0,vec3.s)(r,0,0,0),(0,vec3.s)(geometryDataUtils_m,0,0,0);let d=0,g=0;for(let p=0;p<f.length-2;p+=3){const s=f[p]*c,h=f[p+1]*c,j=f[p+2]*c;(0,vec3.s)(geometryDataUtils_a,i[s],i[s+1],i[s+2]),(0,vec3.s)(u,i[h],i[h+1],i[h+2]),(0,vec3.s)(geometryDataUtils_l,i[j],i[j+1],i[j+2]);const z=w(geometryDataUtils_a,u,geometryDataUtils_l);z?((0,vec3.g)(geometryDataUtils_a,geometryDataUtils_a,u),(0,vec3.g)(geometryDataUtils_a,geometryDataUtils_a,geometryDataUtils_l),(0,vec3.i)(geometryDataUtils_a,geometryDataUtils_a,1/3*z),(0,vec3.g)(r,r,geometryDataUtils_a),d+=z):((0,vec3.g)(geometryDataUtils_m,geometryDataUtils_m,geometryDataUtils_a),(0,vec3.g)(geometryDataUtils_m,geometryDataUtils_m,u),(0,vec3.g)(geometryDataUtils_m,geometryDataUtils_m,geometryDataUtils_l),g+=3)}return(0!==g||0!==d)&&(0!==d?((0,vec3.i)(r,r,1/d),!0):0!==g&&((0,vec3.i)(r,geometryDataUtils_m,1/g),!0))}function geometryDataUtils_i(n,s){if(!n)return!1;const{size:r,data:o,indices:c}=n;(0,vec3.s)(s,0,0,0);let i=-1,f=0;for(let t=0;t<c.length;t++){const n=c[t]*r;i!==n&&(s[0]+=o[n],s[1]+=o[n+1],s[2]+=o[n+2],f++),i=n}return f>1&&(0,vec3.i)(s,s,1/f),f>0}function f(r,o,c){if(!r)return!1;(0,vec3.s)(c,0,0,0),(0,vec3.s)(geometryDataUtils_m,0,0,0);let i=0,f=0;const{size:l,data:d,indices:g}=r,p=g.length-1,h=p+(o?2:0);for(let t=0;t<h;t+=2){const r=t<p?t+1:0,o=g[t<p?t:p]*l,h=g[r]*l;geometryDataUtils_a[0]=d[o],geometryDataUtils_a[1]=d[o+1],geometryDataUtils_a[2]=d[o+2],u[0]=d[h],u[1]=d[h+1],u[2]=d[h+2],(0,vec3.i)(geometryDataUtils_a,(0,vec3.g)(geometryDataUtils_a,geometryDataUtils_a,u),.5);const j=(0,vec3.r)(geometryDataUtils_a,u);j>0?((0,vec3.g)(c,c,(0,vec3.i)(geometryDataUtils_a,geometryDataUtils_a,j)),i+=j):0===i&&((0,vec3.g)(geometryDataUtils_m,geometryDataUtils_m,geometryDataUtils_a),f++)}return 0!==i?((0,vec3.i)(c,c,1/i),!0):0!==f&&((0,vec3.i)(c,geometryDataUtils_m,1/f),!0)}const geometryDataUtils_a=(0,vec3f64.c)(),u=(0,vec3f64.c)(),geometryDataUtils_l=(0,vec3f64.c)(),geometryDataUtils_m=(0,vec3f64.c)();

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/uid.js
var uid = __webpack_require__(65061);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Object3DStateID.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class Object3DStateID_r{constructor(r){this.channel=r,this.id=(0,uid/* generateUID */.L)()}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js
var VertexAttribute = __webpack_require__(50645);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/doublePrecisionUtils.js
var doublePrecisionUtils = __webpack_require__(76698);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/renderers/utils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function utils_n(t,e){return null==t&&(t=[]),t.push(e),t}function utils_r(t,e){if(null==t)return null;const n=t.filter((t=>t!==e));return 0===n.length?null:n}function s(t,n,r,s,u){utils_l[0]=t.get(n,0),utils_l[1]=t.get(n,1),utils_l[2]=t.get(n,2),e(utils_l,utils_o,3),r.set(u,0,utils_o[0]),s.set(u,0,utils_o[1]),r.set(u,1,utils_o[2]),s.set(u,1,utils_o[3]),r.set(u,2,utils_o[4]),s.set(u,2,utils_o[5])}const utils_l=(0,vec3f64.c)(),utils_o=new Float32Array(6);

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Geometry.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class I extends ContentObject/* ContentObject */.J{constructor(t,i,e=null,s=ContentObjectType/* ContentObjectType */.X.Mesh,r=null,o=-1){super(),this.material=t,this.mapPositions=e,this.type=s,this.objectAndLayerIdColor=r,this.edgeIndicesLength=o,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[h,a]of i)this._attributes.set(h,{...a,indices:(0,Indices/* compactIndices */.Dg)(a.indices)}),h===VertexAttribute/* VertexAttribute */.r.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(h).indices.length:this.edgeIndicesLength)}instantiate(t={}){const i=new I(t.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach(((t,e)=>{t.exclusive=!1,i._attributes.set(e,t)})),i._boundingInfo=this._boundingInfo,i.transformation=t.transformation||this.transformation,i}get attributes(){return this._attributes}getMutableAttribute(t){let i=this._attributes.get(t);return i&&!i.exclusive&&(i={...i,exclusive:!0,data:AttributeArray_o(i.data)},this._attributes.set(t,i)),i}setAttributeData(t,i){const e=this._attributes.get(t);e&&this._attributes.set(t,{...e,exclusive:!0,data:i})}get indexCount(){const t=this._attributes.values().next().value.indices;return t?.length??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return null==this._boundingInfo&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(t){return!!(this.type===ContentObjectType/* ContentObjectType */.X.Mesh?this._computeAttachmentOriginTriangles(t):this.type===ContentObjectType/* ContentObjectType */.X.Line?this._computeAttachmentOriginLines(t):this._computeAttachmentOriginPoints(t))&&(null!=this._transformation&&(0,vec3.e)(t,t,this._transformation),!0)}_computeAttachmentOriginTriangles(t){const i=this.attributes.get(VertexAttribute/* VertexAttribute */.r.POSITION);return geometryDataUtils_c(i,t)}_computeAttachmentOriginLines(t){const i=this.attributes.get(VertexAttribute/* VertexAttribute */.r.POSITION);return f(i,_(this.material.parameters,i),t)}_computeAttachmentOriginPoints(t){const i=this.attributes.get(VertexAttribute/* VertexAttribute */.r.POSITION);return geometryDataUtils_i(i,t)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const t=this.attributes.get(VertexAttribute/* VertexAttribute */.r.POSITION);if(!t||0===t.indices.length)return null;const i=this.type===ContentObjectType/* ContentObjectType */.X.Mesh?3:1;(0,Util/* assert */.vA)(t.indices.length%i==0,"Indexing error: "+t.indices.length+" not divisible by "+i);const e=(0,Indices/* getContinuousIndexArray */.tM)(t.indices.length/i);return new BoundingInfo_o(e,i,t)}get transformation(){return this._transformation??mat4f64.I}set transformation(e){this._transformation=e&&e!==mat4f64.I?(0,mat4f64.b)(e):null}addHighlight(){const t=new Object3DStateID_r(basicInterfaces/* Object3DState */.Mg.Highlight);return this.highlights=utils_n(this.highlights,t),t}removeHighlight(t){this.highlights=utils_r(this.highlights,t)}}function _(t,i){return!(!("isClosed"in t)||!t.isClosed)&&i.indices.length>2}


/***/ }),

/***/ 18429:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  im: () => (/* binding */ c),
  m$: () => (/* binding */ d)
});

// UNUSED EXPORTS: MaterialParameters, UpdateParameters

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3f64.js
var vec3f64 = __webpack_require__(22279);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js
var interfaces = __webpack_require__(99152);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/AnimationTimer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class e{constructor(){this.enabled=!0,this._time=t(0)}get time(){return this._time}advance({deltaTime:e,fixedTime:i}){return null!=i?this._time!==i&&(this._time=i,!0):(this._time=t(this._time+e),0!==e)}}class i{constructor(t,e){this.deltaTime=t,this.fixedTime=e}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js
var basicInterfaces = __webpack_require__(91013);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObject.js
var ContentObject = __webpack_require__(71077);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObjectType.js
var ContentObjectType = __webpack_require__(52997);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/DefaultVertexAttributeLocations.js
var DefaultVertexAttributeLocations = __webpack_require__(13148);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/MaterialUtil.js + 1 modules
var MaterialUtil = __webpack_require__(19647);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Material.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class c extends ContentObject/* ContentObject */.J{constructor(t,r){super(),this.type=ContentObjectType/* ContentObjectType */.X.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._vertexAttributeLocations=DefaultVertexAttributeLocations/* Default3D */.D,this._pp0=(0,vec3f64.f)(0,0,1),this._pp1=(0,vec3f64.f)(0,0,0),this._parameters=(0,MaterialUtil/* copyParameters */.qu)(t,r),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(e){return!1}setParameters(e,t=!0){(0,MaterialUtil/* updateParameters */.MB)(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&(!this.parameters.isDecoration||e.bindParameters.decorations===basicInterfaces/* Decorations */.ID.ON)&&0!=(this.parameters.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){this.repository?.materialChanged(this)}intersectDraped(e,t,r,s,i,a){return this._pp0[0]=this._pp1[0]=s[0],this._pp0[1]=this._pp1[1]=s[1],this.intersect(e,t,r,this._pp0,this._pp1,i)}}class h extends i{constructor(e,t,r){super(t,r),this.camera=e}}var d;!function(e){e[e.None=0]="None",e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"}(d||(d={}));class u extends interfaces/* NoParameters */.Y{constructor(){super(...arguments),this.renderOccluded=d.Occlude,this.isDecoration=!1}}


/***/ }),

/***/ 1931:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AJ: () => (/* binding */ s),
/* harmony export */   K_: () => (/* binding */ l),
/* harmony export */   V0: () => (/* binding */ c),
/* harmony export */   aB: () => (/* binding */ a),
/* harmony export */   ez: () => (/* binding */ A),
/* harmony export */   xt: () => (/* binding */ S)
/* harmony export */ });
/* unused harmony exports OITPolygonOffset, blendingColor, oitDepthWrite */
/* harmony import */ var _TransparencyPassType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81868);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41746);
/* harmony import */ var _webgl_renderState_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2449);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const c=(0,_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_2__/* .separateBlendingParams */ .p3)(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .BlendFactor */ .dn.SRC_ALPHA,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .BlendFactor */ .dn.ONE,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .BlendFactor */ .dn.ONE_MINUS_SRC_ALPHA,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .BlendFactor */ .dn.ONE_MINUS_SRC_ALPHA),N=(0,_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_2__/* .simpleBlendingParams */ .ox)(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .BlendFactor */ .dn.ONE,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .BlendFactor */ .dn.ONE),s=(0,_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_2__/* .simpleBlendingParams */ .ox)(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .BlendFactor */ .dn.ZERO,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .BlendFactor */ .dn.ONE_MINUS_SRC_ALPHA);function A(r){return r===_TransparencyPassType_js__WEBPACK_IMPORTED_MODULE_0__/* .TransparencyPassType */ .y.FrontFace?null:r===_TransparencyPassType_js__WEBPACK_IMPORTED_MODULE_0__/* .TransparencyPassType */ .y.Alpha?s:N}function E(r){return r===n.FrontFace?u:null}const S=5e5,_={factor:-1,units:-2};function a(n){return n?_:null}function l(r,e=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CompareFunction */ .MT.LESS){return r===_TransparencyPassType_js__WEBPACK_IMPORTED_MODULE_0__/* .TransparencyPassType */ .y.NONE||r===_TransparencyPassType_js__WEBPACK_IMPORTED_MODULE_0__/* .TransparencyPassType */ .y.FrontFace?e:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CompareFunction */ .MT.LEQUAL}


/***/ }),

/***/ 58123:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63678);
/* harmony import */ var _webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16541);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class r{constructor(r,i,s){this._context=r,this._locations=s,this._textures=new Map,this._freeTextureUnits=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({deallocator:null}),this._glProgram=r.programCache.acquire(i.generate("vertex"),i.generate("fragment"),s),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=i.generateBindPass(this),this.bindDraw=i.generateBindDraw(this),this._fragmentUniforms=(0,_webgl_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_1__/* .webglDebugEnabled */ .en)()?i.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get compiled(){return this._glProgram.compiled}setUniform1b(t,e){this._glProgram.setUniform1i(t,e?1:0)}setUniform1i(t,e){this._glProgram.setUniform1i(t,e)}setUniform1f(t,e){this._glProgram.setUniform1f(t,e)}setUniform2fv(t,e){this._glProgram.setUniform2fv(t,e)}setUniform3fv(t,e){this._glProgram.setUniform3fv(t,e)}setUniform4fv(t,e){this._glProgram.setUniform4fv(t,e)}setUniformMatrix3fv(t,e){this._glProgram.setUniformMatrix3fv(t,e)}setUniformMatrix4fv(t,e){this._glProgram.setUniformMatrix4fv(t,e)}setUniform1fv(t,e){this._glProgram.setUniform1fv(t,e)}setUniform1iv(t,e){this._glProgram.setUniform1iv(t,e)}setUniform2iv(t,e){this._glProgram.setUniform3iv(t,e)}setUniform3iv(t,e){this._glProgram.setUniform3iv(t,e)}setUniform4iv(t,e){this._glProgram.setUniform4iv(t,e)}assertCompatibleVertexAttributeLocations(t){t.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(t,e){if(null==e?.glName){const e=this._textures.get(t);return e&&(this._context.bindTexture(null,e.unit),this._freeTextureUnit(e),this._textures.delete(t)),null}let r=this._textures.get(t);return null==r?(r=this._allocTextureUnit(e),this._textures.set(t,r)):r.texture=e,this._context.useProgram(this),this.setUniform1i(t,r.unit),this._context.bindTexture(e,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((t,e)=>{this._context.bindTexture(t.texture,t.unit),this.setUniform1i(e,t.unit)})),null!=this._fragmentUniforms&&this._fragmentUniforms.forEach((t=>{"sampler2D"!==t.type&&"samplerCube"!==t.type||this._textures.has(t.name)||console.error(`Texture sampler ${t.name} has no bound texture`)}))}_allocTextureUnit(t){return{texture:t,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(t){this._freeTextureUnits.push(t.unit)}}


/***/ }),

/***/ 38323:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ A)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var A;!function(A){A[A.INTEGRATED_MESH=0]="INTEGRATED_MESH",A[A.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",A[A.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",A[A.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",A[A.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",A[A.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",A[A.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",A[A.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",A[A.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",A[A.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",A[A.ANTIALIASING=10]="ANTIALIASING",A[A.COMPOSITE=11]="COMPOSITE",A[A.BLIT=12]="BLIT",A[A.SSAO=13]="SSAO",A[A.HIGHLIGHT=14]="HIGHLIGHT",A[A.SHADOW_HIGHLIGHT=15]="SHADOW_HIGHLIGHT",A[A.ENVIRONMENT_OPAQUE=16]="ENVIRONMENT_OPAQUE",A[A.ENVIRONMENT_TRANSPARENT=17]="ENVIRONMENT_TRANSPARENT",A[A.LASERLINES=18]="LASERLINES",A[A.LASERLINES_CONTRAST_CONTROL=19]="LASERLINES_CONTRAST_CONTROL",A[A.HUD_MATERIAL=20]="HUD_MATERIAL",A[A.LABEL_MATERIAL=21]="LABEL_MATERIAL",A[A.LINE_CALLOUTS=22]="LINE_CALLOUTS",A[A.LINE_CALLOUTS_HUD_DEPTH=23]="LINE_CALLOUTS_HUD_DEPTH",A[A.DRAPED_MATERIAL=24]="DRAPED_MATERIAL",A[A.DRAPED_WATER=25]="DRAPED_WATER",A[A.VOXEL=26]="VOXEL",A[A.MAX_SLOTS=27]="MAX_SLOTS"}(A||(A={}));


/***/ }),

/***/ 81868:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ o)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var o;!function(o){o[o.Color=0]="Color",o[o.Alpha=1]="Alpha",o[o.FrontFace=2]="FrontFace",o[o.NONE=3]="NONE",o[o.COUNT=4]="COUNT"}(o||(o={}));


/***/ }),

/***/ 58947:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O_: () => (/* binding */ i),
/* harmony export */   vA: () => (/* binding */ s)
/* harmony export */ });
/* unused harmony exports isTranslationMatrix, logWithBase, project, rayRay2D, setMatrixTranslation3, verify */
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78286);
/* harmony import */ var _chunks_vec4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25102);
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52712);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const o=(0,_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__.c)();class e{constructor(t){this.message=t}toString(){return`AssertException: ${this.message}`}}function s(t,n){if(!t){n=n||"Assertion";const t=new Error(n).stack;throw new e(`${n} at ${t}`)}}function c(t,n){t||(n=n||"",console.warn("Verify failed: "+n+"\n"+new Error("verify").stack))}function i(t,n,r,o){let e,s=(r[0]-t[0])/n[0],c=(o[0]-t[0])/n[0];s>c&&(e=s,s=c,c=e);let i=(r[1]-t[1])/n[1],f=(o[1]-t[1])/n[1];if(i>f&&(e=i,i=f,f=e),s>f||i>c)return!1;i>s&&(s=i),f<c&&(c=f);let u=(r[2]-t[2])/n[2],a=(o[2]-t[2])/n[2];return u>a&&(e=u,u=a,a=e),!(s>a||u>c)&&(a<c&&(c=a),!(c<0))}function f(n,r,o,e,s,c=t()){const i=(e[s]-o[s])*(r[0]-n[0])-(e[0]-o[0])*(r[s]-n[s]),f=(e[0]-o[0])*(n[s]-o[s])-(e[s]-o[s])*(n[0]-o[0]);if(0===i)return!1;const u=f/i;return c[0]=n[0]+u*(r[0]-n[0]),c[1]=n[s]+u*(r[s]-n[s]),!0}function u(t,r,e,c,i){o[0]=t[0],o[1]=t[1],o[2]=t[2],o[3]=1,n(o,o,r),i.length>2&&(i[2]=-o[2]),n(o,o,e),s(0!==o[3]),i[0]=o[0]/o[3],i[1]=o[1]/o[3],i[2]=o[2]/o[3],i[0]=(.5*i[0]+.5)*c[2]+c[0],i[1]=(.5*i[1]+.5)*c[3]+c[1]}function a(t,n){return Math.log(t)/Math.log(n)}function h(t,n,r,o){t[12]=n,t[13]=r,t[14]=o}function l(t){return 1===t[0]&&0===t[1]&&0===t[2]&&0===t[3]&&0===t[4]&&1===t[5]&&0===t[6]&&0===t[7]&&0===t[8]&&0===t[9]&&1===t[10]&&0===t[11]&&1===t[15]}


/***/ }),

/***/ 50645:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ e)
/* harmony export */ });
/* unused harmony export affectsGeometry */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var e;function E(E){return E===e.POSITION}!function(e){e.POSITION="position",e.NORMAL="normal",e.NORMALCOMPRESSED="normalCompressed",e.UV0="uv0",e.AUXPOS1="auxpos1",e.AUXPOS2="auxpos2",e.COLOR="color",e.SYMBOLCOLOR="symbolColor",e.SIZE="size",e.TANGENT="tangent",e.OFFSET="offset",e.PERSPECTIVEDIVIDE="perspectiveDivide",e.SUBDIVISIONFACTOR="subdivisionFactor",e.COLORFEATUREATTRIBUTE="colorFeatureAttribute",e.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",e.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",e.DISTANCETOSTART="distanceToStart",e.UVMAPSPACE="uvMapSpace",e.BOUNDINGRECT="boundingRect",e.UVREGION="uvRegion",e.PROFILERIGHT="profileRight",e.PROFILEUP="profileUp",e.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",e.FEATUREVALUE="featureValue",e.INSTANCEMODELORIGINHI="instanceModelOriginHi",e.INSTANCEMODELORIGINLO="instanceModelOriginLo",e.INSTANCEMODEL="instanceModel",e.INSTANCEMODELNORMAL="instanceModelNormal",e.INSTANCECOLOR="instanceColor",e.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",e.LOCALTRANSFORM="localTransform",e.GLOBALTRANSFORM="globalTransform",e.BOUNDINGSPHERE="boundingSphere",e.MODELORIGIN="modelOrigin",e.MODELSCALEFACTORS="modelScaleFactors",e.FEATUREATTRIBUTE="featureAttribute",e.STATE="state",e.LODLEVEL="lodLevel",e.POSITION0="position0",e.POSITION1="position1",e.NORMALA="normalA",e.NORMALB="normalB",e.COMPONENTINDEX="componentIndex",e.VARIANTOFFSET="variantOffset",e.VARIANTSTROKE="variantStroke",e.VARIANTEXTENSION="variantExtension",e.SIDENESS="sideness",e.START="start",e.END="end",e.UP="up",e.EXTRUDE="extrude",e.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",e.INSTANCEOBJECTANDLAYERIDCOLOR="instanceObjectAndLayerIdColor"}(e||(e={}));


/***/ }),

/***/ 91013:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Am: () => (/* binding */ a),
/* harmony export */   ID: () => (/* binding */ i),
/* harmony export */   JS: () => (/* binding */ u),
/* harmony export */   Mg: () => (/* binding */ t),
/* harmony export */   dd: () => (/* binding */ N),
/* harmony export */   it: () => (/* binding */ n),
/* harmony export */   s2: () => (/* binding */ e),
/* harmony export */   sf: () => (/* binding */ s)
/* harmony export */ });
/* unused harmony export RenderRequestType */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var e,n,O,a,N,t,s,i,u;!function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(e||(e={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(n||(n={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(O||(O={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(a||(a={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(N||(N={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee",e[e.COUNT=2]="COUNT"}(t||(t={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(s||(s={})),function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON"}(i||(i={})),function(e){e.DDS_ENCODING="image/vnd-ms.dds",e.KTX2_ENCODING="image/ktx2",e.BASIS_ENCODING="image/x.basis"}(u||(u={}));


/***/ }),

/***/ 42440:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ o)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const o=2.1;


/***/ }),

/***/ 19647:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Um: () => (/* binding */ E),
  qu: () => (/* binding */ N),
  Uy: () => (/* binding */ MaterialUtil_h),
  MB: () => (/* binding */ O),
  kE: () => (/* binding */ L)
});

// UNUSED EXPORTS: computeInvDir, computeNormal, intersectAabbInvDir, intersectAabbInvDirBefore, intersectTriangles

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(92504);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3.js
var vec3 = __webpack_require__(21839);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3f64.js
var vec3f64 = __webpack_require__(22279);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/aaBoundingBox.js
var aaBoundingBox = __webpack_require__(4675);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObjectType.js
var ContentObjectType = __webpack_require__(52997);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/ViewingMode.js
var ViewingMode = __webpack_require__(10714);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/screenSizePerspectiveUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function n(e,t){return new h(e,v,t)}function i(e,t){const{curvatureDependent:a,scaleStart:r,scaleFallOffRange:n}=v;return new h(e,{curvatureDependent:{min:{curvature:a.min.curvature,tiltAngle:a.min.tiltAngle,scaleFallOffFactor:d.curvatureDependent.min.scaleFallOffFactor},max:{curvature:a.max.curvature,tiltAngle:a.max.tiltAngle,scaleFallOffFactor:d.curvatureDependent.max.scaleFallOffFactor}},scaleStart:r,scaleFallOffRange:n,minPixelSize:d.minPixelSize},t)}function c(e){return Math.abs(e*e*e)}function l(e,t,a){const r=a.parameters;return F.scale=Math.min(r.divisor/(t-r.offset),1),F.factor=c(e),F}function s(t,a){return (0,mathUtils/* lerp */.Cc)(t*Math.max(a.scale,a.minScaleFactor),t,a.factor)}function o(e,t,a){const r=l(e,t,a);return r.minScaleFactor=0,s(1,r)}function u(e,t,a,r){r.scale=o(e,t,a),r.factor=0,r.minScaleFactor=a.minScaleFactor}function f(e,t,a=[0,0]){const r=Math.min(Math.max(t.scale,t.minScaleFactor),1);return a[0]=e[0]*r,a[1]=e[1]*r,a}function m(e,t,a,r){return s(e,l(t,a,r))}class h{get minScaleFactor(){return null!=this._fontHeight?Math.min(this._description.minPixelSize/this._fontHeight,1):0}constructor(e,t,a,n=p(),i){this._viewingMode=e,this._description=t,this._ellipsoidRadius=a,this.parameters=n,this._fontHeight=i,this._viewingMode===r.Local?(this._coverageCompensation=this._surfaceCoverageCompensationLocal,this._calculateCurvatureDependentParameters=this._calculateCurvatureDependentParametersLocal):(this._coverageCompensation=this._surfaceCoverageCompensationGlobal,this._calculateCurvatureDependentParameters=this._calculateCurvatureDependentParametersGlobal)}update(e){return(!this.parameters||this.parameters.camera.fovY!==e.fovY||this.parameters.camera.distance!==e.distance)&&(this._calculateParameters(e,this._ellipsoidRadius,this.parameters),!0)}overrideFontHeight(e){return e!==this._fontHeight?new h(this._viewingMode,this._description,this._ellipsoidRadius,this.parameters,e):this}_calculateParameters(e,t,a){const{scaleStart:r,scaleFallOffRange:n}=this._description,{fovY:i,distance:c}=e,l=this._calculateCurvatureDependentParameters(e,t),s=this._coverageCompensation(e,t,l),{tiltAngle:o,scaleFallOffFactor:u}=l,f=Math.sin(o)*c,m=.5*Math.PI-o-i*(.5-r*s),h=f/Math.cos(m),v=m+i*n*s,d=(h-u*(f/Math.cos(v)))/(1-u);return a.camera.fovY=e.fovY,a.camera.distance=e.distance,a.offset=d,a.divisor=h-d,a}_calculateCurvatureDependentParametersLocal(e,t,a=g){return a.tiltAngle=this._description.curvatureDependent.min.tiltAngle,a.scaleFallOffFactor=this._description.curvatureDependent.min.scaleFallOffFactor,a}_calculateCurvatureDependentParametersGlobal(t,r,n=g){const i=this._description.curvatureDependent,c=1+t.distance/r,l=Math.sqrt(c*c-1),[s,o]=[i.min.curvature,i.max.curvature],u=a((l-s)/(o-s),0,1),[f,m]=[i.min,i.max];return n.tiltAngle=e(f.tiltAngle,m.tiltAngle,u),n.scaleFallOffFactor=e(f.scaleFallOffFactor,m.scaleFallOffFactor,u),n}_surfaceCoverageCompensationLocal(e,t,a){return(e.fovY-a.tiltAngle)/e.fovY}_surfaceCoverageCompensationGlobal(e,t,a){const r=t*t,n=a.tiltAngle+.5*Math.PI,{fovY:i,distance:c}=e,l=c*c+r-2*Math.cos(n)*c*t,s=Math.sqrt(l),o=Math.sqrt(l-r);return(Math.acos(o/s)-Math.asin(t/(s/Math.sin(n)))+.5*i)/i}}const v={curvatureDependent:{min:{curvature:(0,mathUtils/* deg2rad */.kU)(10),tiltAngle:(0,mathUtils/* deg2rad */.kU)(12),scaleFallOffFactor:.5},max:{curvature:(0,mathUtils/* deg2rad */.kU)(70),tiltAngle:(0,mathUtils/* deg2rad */.kU)(40),scaleFallOffFactor:.8}},scaleStart:.3,scaleFallOffRange:.65,minPixelSize:0},d={curvatureDependent:{min:{scaleFallOffFactor:.7},max:{scaleFallOffFactor:.95}},minPixelSize:14};function p(){return{camera:{distance:0,fovY:0},divisor:0,offset:0}}const F={scale:0,factor:0,minScaleFactor:0},g={tiltAngle:0,scaleFallOffFactor:0};

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js
var Util = __webpack_require__(58947);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js
var VertexAttribute = __webpack_require__(50645);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/MaterialUtil.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const MaterialUtil_p=(0,aaBoundingBox/* create */.vt)();function MaterialUtil_h(t,n,e,o,i,r){if(t.visible)if(t.boundingInfo){(0,Util/* assert */.vA)(t.type===ContentObjectType/* ContentObjectType */.X.Mesh);const s=n.tolerance;MaterialUtil_d(t.boundingInfo,e,o,s,i,r)}else{const n=t.attributes.get(VertexAttribute/* VertexAttribute */.r.POSITION),s=n.indices;M(e,o,0,s.length/3,s,n,void 0,i,r)}}const b=(0,vec3f64.c)();function MaterialUtil_d(t,n,e,o,i,r){if(null==t)return;const s=T(n,e,b);if((0,aaBoundingBox/* setMin */.Ne)(MaterialUtil_p,t.bbMin),(0,aaBoundingBox/* setMax */.vI)(MaterialUtil_p,t.bbMax),null!=i&&i.applyToAabb(MaterialUtil_p),I(MaterialUtil_p,n,s,o)){const{primitiveIndices:s,position:c}=t,l=s?s.length:c.indices.length/3;if(l>P){const s=t.getChildren();if(void 0!==s){for(const t of s)MaterialUtil_d(t,n,e,o,i,r);return}}M(n,e,0,l,c.indices,c,s,i,r)}}const x=(0,vec3f64.c)();function M(t,n,e,o,i,r,s,c,l){if(s)return MaterialUtil_g(t,n,e,o,i,r,s,c,l);const{data:f,stride:u}=r,a=t[0],m=t[1],p=t[2],h=n[0]-a,b=n[1]-m,d=n[2]-p;for(let M=e,g=3*e;M<o;++M){let t=u*i[g++],n=f[t++],e=f[t++],o=f[t];t=u*i[g++];let r=f[t++],s=f[t++],y=f[t];t=u*i[g++];let j=f[t++],T=f[t++],I=f[t];null!=c&&([n,e,o]=c.applyToVertex(n,e,o,M),[r,s,y]=c.applyToVertex(r,s,y,M),[j,T,I]=c.applyToVertex(j,T,I,M));const V=r-n,L=s-e,N=y-o,O=j-n,A=T-e,E=I-o,P=b*E-A*d,S=d*O-E*h,U=h*A-O*b,W=V*P+L*S+N*U;if(Math.abs(W)<=Number.EPSILON)continue;const k=a-n,B=m-e,C=p-o,z=k*P+B*S+C*U;if(W>0){if(z<0||z>W)continue}else if(z>0||z<W)continue;const H=B*N-L*C,R=C*V-N*k,Y=k*L-V*B,q=h*H+b*R+d*Y;if(W>0){if(q<0||z+q>W)continue}else if(q>0||z+q<W)continue;const w=(O*H+A*R+E*Y)/W;if(w>=0){l(w,MaterialUtil_v(V,L,N,O,A,E,x),M,!1)}}}function MaterialUtil_g(t,n,e,o,i,r,s,c,l){const{data:f,stride:u}=r,a=t[0],m=t[1],p=t[2],h=n[0]-a,b=n[1]-m,d=n[2]-p;for(let M=e;M<o;++M){const t=s[M];let n=3*t,e=u*i[n++],o=f[e++],r=f[e++],g=f[e];e=u*i[n++];let y=f[e++],j=f[e++],T=f[e];e=u*i[n];let I=f[e++],V=f[e++],L=f[e];null!=c&&([o,r,g]=c.applyToVertex(o,r,g,M),[y,j,T]=c.applyToVertex(y,j,T,M),[I,V,L]=c.applyToVertex(I,V,L,M));const N=y-o,O=j-r,A=T-g,E=I-o,P=V-r,S=L-g,U=b*S-P*d,W=d*E-S*h,k=h*P-E*b,B=N*U+O*W+A*k;if(Math.abs(B)<=Number.EPSILON)continue;const C=a-o,z=m-r,H=p-g,R=C*U+z*W+H*k;if(B>0){if(R<0||R>B)continue}else if(R>0||R<B)continue;const Y=z*A-O*H,q=H*N-A*C,w=C*O-N*z,D=h*Y+b*q+d*w;if(B>0){if(D<0||R+D>B)continue}else if(D>0||R+D<B)continue;const F=(E*Y+P*q+S*w)/B;if(F>=0){l(F,MaterialUtil_v(N,O,A,E,P,S,x),t,!1)}}}const y=(0,vec3f64.c)(),j=(0,vec3f64.c)();function MaterialUtil_v(t,n,r,s,c,l,f){return (0,vec3.s)(y,t,n,r),(0,vec3.s)(j,s,c,l),(0,vec3.b)(f,y,j),(0,vec3.n)(f,f),f}function T(t,n,o){return (0,vec3.s)(o,1/(n[0]-t[0]),1/(n[1]-t[1]),1/(n[2]-t[2]))}function I(t,n,e,o){return V(t,n,e,o,1/0)}function V(t,n,e,o,i){const r=(t[0]-o-n[0])*e[0],s=(t[3]+o-n[0])*e[0];let c=Math.min(r,s),l=Math.max(r,s);const f=(t[1]-o-n[1])*e[1],u=(t[4]+o-n[1])*e[1];if(l=Math.min(l,Math.max(f,u)),l<0)return!1;if(c=Math.max(c,Math.min(f,u)),c>l)return!1;const a=(t[2]-o-n[2])*e[2],m=(t[5]+o-n[2])*e[2];return l=Math.min(l,Math.max(a,m)),!(l<0)&&(c=Math.max(c,Math.min(a,m)),!(c>l)&&c<i)}function L(t,e,o,i,r){let s=(o.screenLength||0)*t.pixelRatio;null!=r&&(s=m(s,i,e,r));const c=s*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return (0,mathUtils/* clamp */.qE)(c*e,o.minWorldLength||0,null!=o.maxWorldLength?o.maxWorldLength:1/0)}function N(t,n){const e=n?N(n):{};for(const o in t){let n=t[o];n?.forEach&&(n=A(n)),null==n&&o in e||(e[o]=n)}return e}function O(n,e){let o=!1;for(const i in e){const r=e[i];void 0!==r&&(Array.isArray(r)?null===n[i]?(n[i]=r.slice(),o=!0):(0,arrayUtils/* update */.yo)(n[i],r)&&(o=!0):n[i]!==r&&(o=!0,n[i]=r))}return o}function A(t){const n=[];return t.forEach((t=>n.push(t))),n}const E={multiply:1,ignore:2,replace:3,tint:4},P=1e3;


/***/ }),

/***/ 40695:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ I)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var I;!function(I){I[I.ANIMATING=0]="ANIMATING",I[I.INTERACTING=1]="INTERACTING",I[I.IDLE=2]="IDLE"}(I||(I={}));


/***/ }),

/***/ 89423:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85569);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(539);
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86942);
/* harmony import */ var _checkWebGLError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16541);
/* harmony import */ var _contextUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21946);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41746);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const _=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getLogger("esri.views.webgl.BufferObject");class h{static createIndex(e,t,r){return new h(e,_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .BufferType */ .NZ.ELEMENT_ARRAY_BUFFER,t,r)}static createVertex(e,t,r){return new h(e,_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .BufferType */ .NZ.ARRAY_BUFFER,t,r)}static createUniform(e,t,r){if(e.type!==_contextUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .ContextType */ .EL.WEBGL2)throw new Error("Uniform buffers are supported in WebGL2 only!");return new h(e,_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .BufferType */ .NZ.UNIFORM_BUFFER,t,r)}static createPixelPack(e,t=_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .Usage */ ._U.STREAM_READ,r){if(e.type!==_contextUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .ContextType */ .EL.WEBGL2)throw new Error("Pixel pack buffers are supported in WebGL2 only!");const i=new h(e,_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .BufferType */ .NZ.PIXEL_PACK_BUFFER,t);return r&&i.setSize(r),i}static createPixelUnpack(e,t=_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .Usage */ ._U.STREAM_DRAW,r){if(e.type!==_contextUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .ContextType */ .EL.WEBGL2)throw new Error("Pixel unpack buffers are supported in WebGL2 only!");return new h(e,_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .BufferType */ .NZ.PIXEL_UNPACK_BUFFER,t,r)}constructor(e,t,r,i){this._context=e,this.bufferType=t,this.usage=r,this._glName=null,this._size=-1,this._indexType=void 0,e.instanceCounter.increment(_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .ResourceType */ .vt.BufferObject,this),this._glName=this._context.gl.createBuffer(),(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_3__/* .checkWebGLError */ .Y2)(this._context.gl),i&&this.setData(i)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get byteLength(){return this.bufferType===_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .BufferType */ .NZ.ELEMENT_ARRAY_BUFFER?this._indexType===_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .DataType */ .pe.UNSIGNED_INT?4*this._size:2*this._size:this._size}get _isVAOAware(){return this.bufferType===_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .BufferType */ .NZ.ELEMENT_ARRAY_BUFFER||this.bufferType===_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .BufferType */ .NZ.ARRAY_BUFFER}dispose(){if(this._context?.gl){if(this._glName){this._context.gl.deleteBuffer(this._glName),this._glName=null}this._context.instanceCounter.decrement(_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .ResourceType */ .vt.BufferObject,this),this._context=null}else this._glName&&_.warn("Leaked WebGL buffer object")}setSize(e,t=null){if(e<=0&&_.error("Buffer size needs to be positive!"),this.bufferType===_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .BufferType */ .NZ.ELEMENT_ARRAY_BUFFER&&null!=t)switch(this._indexType=t,t){case _enums_js__WEBPACK_IMPORTED_MODULE_5__/* .DataType */ .pe.UNSIGNED_SHORT:e*=2;break;case _enums_js__WEBPACK_IMPORTED_MODULE_5__/* .DataType */ .pe.UNSIGNED_INT:e*=4}this._setBufferData(e)}setData(e){if(!e)return;let t=e.byteLength;this.bufferType===_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .BufferType */ .NZ.ELEMENT_ARRAY_BUFFER&&((0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_2__/* .isUint16Array */ .jq)(e)&&(t/=2,this._indexType=_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .DataType */ .pe.UNSIGNED_SHORT),(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_2__/* .isUint32Array */ .XJ)(e)&&(t/=4,this._indexType=_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .DataType */ .pe.UNSIGNED_INT)),this._setBufferData(t,e)}_setBufferData(e,t=null){this._size=e;const r=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const i=this._context.gl;null!=t?i.bufferData(this.bufferType,t,this.usage):i.bufferData(this.bufferType,e,this.usage),(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_3__/* .checkWebGLError */ .Y2)(i),this._isVAOAware&&this._context.bindVAO(r)}setSubData(e,t,r,i){if(!e)return;(t<0||t*e.BYTES_PER_ELEMENT>=this.byteLength)&&_.error("offset is out of range!"),r>=i&&_.error("end must be bigger than start!"),(t+(i-r))*e.BYTES_PER_ELEMENT>this.byteLength&&_.error("An attempt to write beyond the end of the buffer!");const o=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const a=this._context.gl;if(this._context.type===_contextUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .ContextType */ .EL.WEBGL2)a.bufferSubData(this.bufferType,t*e.BYTES_PER_ELEMENT,e,r,i-r);else{const s=0===r&&i===e.length?e:e.subarray(r,i);a.bufferSubData(this.bufferType,t*e.BYTES_PER_ELEMENT,s)}(0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_3__/* .checkWebGLError */ .Y2)(a),this._isVAOAware&&this._context.bindVAO(o)}getSubData(e,t=0,r,i){if(this._context.type!==_contextUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .ContextType */ .EL.WEBGL2)return void _.error("Get buffer subdata is supported in WebGL2 only!");if(r<0||i<0)return void _.error("Problem getting subdata: offset and length were less than zero!");const s=E(e)?e.BYTES_PER_ELEMENT:1;if(s*((r??0)+(i??0))>e.byteLength)return void _.error("Problem getting subdata: offset and length exceeded destination size!");t+s*(i??0)>this.byteLength&&_.warn("Potential problem getting subdata: requested data exceeds buffer size!");const a=this._context.gl;this._context.bindBuffer(this,_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .BufferType */ .NZ.COPY_READ_BUFFER),a.getBufferSubData(_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .BufferType */ .NZ.COPY_READ_BUFFER,t,e,r,i),this._context.unbindBuffer(_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .BufferType */ .NZ.COPY_READ_BUFFER)}async getSubDataAsync(e,t=0,r,i){this._context.type===_contextUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .ContextType */ .EL.WEBGL2?(await this._context.clientWaitAsync(),this.getSubData(e,t,r,i)):_.error("Get buffer subdata is supported in WebGL2 only!")}}function E(t){return (0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isArrayLike */ .Xj)(t)}


/***/ }),

/***/ 84852:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ E)
/* harmony export */ });
/* unused harmony export ensureAttachmentMaxSize */
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(539);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6267);
/* harmony import */ var _BufferObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89423);
/* harmony import */ var _checkWebGLError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16541);
/* harmony import */ var _contextUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21946);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41746);
/* harmony import */ var _GLObjectType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12966);
/* harmony import */ var _Renderbuffer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74416);
/* harmony import */ var _Texture_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6940);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const x=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getLogger("esri.views.webgl.FramebufferObject");class E{constructor(t,e,i=null){this._context=t,this._glName=null,this._colorAttachments=new Map,this._depthStencilBuffer=null,this._depthStencilTexture=null,this._initialized=!1,t.instanceCounter.increment(_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .ResourceType */ .vt.FramebufferObject,this);const r=g(e)?e:new _Texture_js__WEBPACK_IMPORTED_MODULE_8__/* .Texture */ .g(this._context,e);if(this._colorAttachments.set(_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .ColorAttachment */ .Nm.COLOR_ATTACHMENT0,r),this._validateTextureDescriptor(r.descriptor),this._validateColorAttachmentPoint(_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .ColorAttachment */ .Nm.COLOR_ATTACHMENT0),null!=i)if(b(i))this._context.capabilities.depthTexture||console.error("Setting the depth/stencil texture as an attachment requires WEBGL_depth_texture or WebGL2"),this._depthStencilTexture=g(i)?i:new _Texture_js__WEBPACK_IMPORTED_MODULE_8__/* .Texture */ .g(this._context,i),this._validateTextureDescriptor(this._depthStencilTexture.descriptor);else{const t=A(i)?i:new _Renderbuffer_js__WEBPACK_IMPORTED_MODULE_7__/* .Renderbuffer */ .l(this._context,i);this._depthStencilBuffer=t,this._validateRenderBufferDescriptor(t.descriptor)}}dispose(){if(0===this._colorAttachments.size&&!this._glName)return;const t=this._context.getBoundFramebufferObject();if(this._colorAttachments.forEach(((t,e)=>this.detachColorTexture(e)?.dispose())),this.detachDepthStencilBuffer()?.dispose(),this.detachDepthStencilTexture()?.dispose(),this._glName){this._context.gl.deleteFramebuffer(this._glName),this._glName=null}this._context.bindFramebuffer(t),this._context.instanceCounter.decrement(_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .ResourceType */ .vt.FramebufferObject,this)}get glName(){return this._glName}get colorTexture(){return this._colorAttachments.get(_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .ColorAttachment */ .Nm.COLOR_ATTACHMENT0)}get depthStencil(){return this._depthStencilTexture||this._depthStencilBuffer}get depthStencilTexture(){return this._depthStencilTexture}get width(){const t=this._colorAttachments.get(_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .ColorAttachment */ .Nm.COLOR_ATTACHMENT0);return t?.descriptor?.width??0}get height(){const t=this._colorAttachments.get(_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .ColorAttachment */ .Nm.COLOR_ATTACHMENT0);return t?.descriptor?.height??0}get gpuMemoryUsage(){return[...this._colorAttachments].reduce(((t,[e,i])=>t+i.gpuMemoryUsage),this.depthStencil?.gpuMemoryUsage??0)}getColorTexture(t){const e=this._colorAttachments.get(t);return e&&g(e)?e:null}get colorAttachments(){return[...this._colorAttachments.keys()]}attachColorTexture(t,e=_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .ColorAttachment */ .Nm.COLOR_ATTACHMENT0){if(!t)return;this._validateColorAttachmentPoint(e);const i=t.descriptor;this._validateTextureDescriptor(i),this.detachColorTexture(e)?.dispose(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,e)),this._colorAttachments.set(e,t)}detachColorTexture(t=_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .ColorAttachment */ .Nm.COLOR_ATTACHMENT0){const e=this._colorAttachments.get(t);if(e){if(this._initialized){const e=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t),this._context.bindFramebuffer(e)}return this._colorAttachments.delete(t),e}}setColorTextureTarget(t,e=_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .ColorAttachment */ .Nm.COLOR_ATTACHMENT0){const i=this._colorAttachments.get(e);i&&this._framebufferTexture2D(i.glName,e,t)}attachDepthStencil(t){if(t)switch(t.type){case _GLObjectType_js__WEBPACK_IMPORTED_MODULE_6__/* .GLObjectType */ .p.Texture:return this._attachDepthStencilTexture(t);case _GLObjectType_js__WEBPACK_IMPORTED_MODULE_6__/* .GLObjectType */ .p.RenderBuffer:return this._attachDepthStencilBuffer(t)}}_attachDepthStencilTexture(t){if(null==t)return;const e=t.descriptor;e.pixelFormat!==_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .PixelFormat */ .Ab.DEPTH_STENCIL&&e.pixelFormat!==_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .PixelFormat */ .Ab.DEPTH24_STENCIL8&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),e.dataType!==_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .PixelType */ .ld.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),this._validateTextureDescriptor(e),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .DepthStencilAttachment */ .nI)),this._depthStencilTexture?.dispose(),this._depthStencilTexture=t}detachDepthStencilTexture(){const t=this._depthStencilTexture;return t&&this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .DepthStencilAttachment */ .nI)),this._depthStencilTexture=null,t}_attachDepthStencilBuffer(t){if(null==t)return;const e=t.descriptor;if(this._validateRenderBufferDescriptor(e),this._disposeDepthStencilAttachments(),this._initialized){this._context.bindFramebuffer(this);const i=this._context.gl,r=this._getGLAttachmentPoint(e);i.framebufferRenderbuffer(_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .FramebufferTarget */ .R.FRAMEBUFFER,r,i.RENDERBUFFER,t.glName)}this._depthStencilBuffer=t}detachDepthStencilBuffer(){const t=this._depthStencilBuffer;if(t&&this._initialized){this._context.bindFramebuffer(this);const e=this._context.gl,i=this._getGLAttachmentPoint(t.descriptor);e.framebufferRenderbuffer(_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .FramebufferTarget */ .R.FRAMEBUFFER,i,e.RENDERBUFFER,null)}return this._depthStencilBuffer=null,t}copyToTexture(t,e,i,r,s,h,n){(t<0||e<0||s<0||h<0)&&console.error("Offsets cannot be negative!"),(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!");const o=n.descriptor;n.descriptor.target!==_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .TextureType */ .Ap.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),(null==o?.width||null==o?.height||t+i>this.width||e+r>this.height||s+i>o.width||h+r>o.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const c=this._context,a=c.bindTexture(n,_Texture_js__WEBPACK_IMPORTED_MODULE_8__/* .Texture */ .g.TEXTURE_UNIT_FOR_UPDATES);c.setActiveTexture(_Texture_js__WEBPACK_IMPORTED_MODULE_8__/* .Texture */ .g.TEXTURE_UNIT_FOR_UPDATES),c.bindFramebuffer(this),c.gl.copyTexSubImage2D(_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .TextureType */ .Ap.TEXTURE_2D,0,s,h,t,e,i,r),c.bindTexture(a,_Texture_js__WEBPACK_IMPORTED_MODULE_8__/* .Texture */ .g.TEXTURE_UNIT_FOR_UPDATES)}readPixels(t,e,i,r,s,h,n){(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!"),n||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(t,e,i,r,s,h,n)}async readPixelsAsync(t,e,h,n,o,c,a){if(this._context.type!==_contextUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .ContextType */ .EL.WEBGL2)return (0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_3__/* .webglDebugEnabled */ .en)()&&console.warn("Attempting to read pixels using pixel buffer object without WebGL2"),void this.readPixels(t,e,h,n,o,c,a);const u=this._context.gl,_=_BufferObject_js__WEBPACK_IMPORTED_MODULE_2__/* .BufferObject */ .g.createPixelPack(this._context,_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .Usage */ ._U.STREAM_READ,a.byteLength);this._context.bindBuffer(_),this._context.bindFramebuffer(this),u.readPixels(t,e,h,n,o,c,0),this._context.unbindBuffer(_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .BufferType */ .NZ.PIXEL_PACK_BUFFER),await _.getSubDataAsync(a),_.dispose()}resize(t,e){if(this.width===t&&this.height===e)return;const i={width:t,height:e};S(i,this._context.parameters.maxTextureSize),this._colorAttachments.forEach((t=>t.resize(i.width,i.height))),this._depthStencilTexture?.resize(i.width,i.height),this._initialized&&(S(i,this._context.parameters.maxRenderbufferSize),this._depthStencilBuffer?.resize(i.width,i.height),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1)}initializeAndBind(t=_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .FramebufferTarget */ .R.FRAMEBUFFER){const e=this._context.gl;if(this._initialized)return void e.bindFramebuffer(t,this.glName);this._glName&&e.deleteFramebuffer(this._glName);const i=e.createFramebuffer();if(e.bindFramebuffer(t,i),this._colorAttachments.forEach(((e,i)=>this._framebufferTexture2D(e.glName,i,R(e),t))),this._depthStencilBuffer){const i=this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);e.framebufferRenderbuffer(t,i,e.RENDERBUFFER,this._depthStencilBuffer.glName)}else this._depthStencilTexture&&this._framebufferTexture2D(this._depthStencilTexture.glName,e.DEPTH_STENCIL_ATTACHMENT,R(this._depthStencilTexture),t);if((0,_checkWebGLError_js__WEBPACK_IMPORTED_MODULE_3__/* .webglDebugEnabled */ .en)()){e.checkFramebufferStatus(t)!==e.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!")}this._glName=i,this._initialized=!0}_framebufferTexture2D(t,e=_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .ColorAttachment */ .Nm.COLOR_ATTACHMENT0,i=_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .TextureType */ .Ap.TEXTURE_2D,r=_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .FramebufferTarget */ .R.FRAMEBUFFER,s=0){this._context.gl.framebufferTexture2D(r,e,i,t,s)}_disposeDepthStencilAttachments(){const t=this._context.gl;if(this._depthStencilBuffer){if(this._initialized){this._context.bindFramebuffer(this);const e=this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);t.framebufferRenderbuffer(_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .FramebufferTarget */ .R.FRAMEBUFFER,e,t.RENDERBUFFER,null)}this._depthStencilBuffer=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_9__/* .disposeMaybe */ .WD)(this._depthStencilBuffer)}this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_9__/* .disposeMaybe */ .WD)(this._depthStencilTexture))}_validateTextureDescriptor(t){t.target!==_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .TextureType */ .Ap.TEXTURE_2D&&t.target!==_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .TextureType */ .Ap.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),S(t,this._context.parameters.maxTextureSize),this._validateBufferDimensions(t)}_validateRenderBufferDescriptor(t){S(t,this._context.parameters.maxRenderbufferSize),this._validateBufferDimensions(t)}_validateBufferDimensions(t){t.width<=0&&(t.width=this.width),t.height<=0&&(t.height=this.height),this.width>0&&this.height>0&&(this.width===t.width&&this.height===t.height||console.error("Attachment size must match framebuffer size!"))}_getGLAttachmentPoint(t){switch(t.internalFormat){case _enums_js__WEBPACK_IMPORTED_MODULE_5__/* .RenderbufferFormat */ .yQ.DEPTH_COMPONENT16:case _enums_js__WEBPACK_IMPORTED_MODULE_5__/* .RenderbufferFormat */ .yQ.DEPTH_COMPONENT24:case _enums_js__WEBPACK_IMPORTED_MODULE_5__/* .RenderbufferFormat */ .yQ.DEPTH_COMPONENT32F:return this._context.gl.DEPTH_ATTACHMENT;case _enums_js__WEBPACK_IMPORTED_MODULE_5__/* .RenderbufferFormat */ .yQ.DEPTH24_STENCIL8:case _enums_js__WEBPACK_IMPORTED_MODULE_5__/* .RenderbufferFormat */ .yQ.DEPTH32F_STENCIL8:case _enums_js__WEBPACK_IMPORTED_MODULE_5__/* .RenderbufferFormat */ .yQ.DEPTH_STENCIL:return this._context.gl.DEPTH_STENCIL_ATTACHMENT;case _enums_js__WEBPACK_IMPORTED_MODULE_5__/* .RenderbufferFormat */ .yQ.STENCIL_INDEX8:return this._context.gl.STENCIL_ATTACHMENT}}_validateColorAttachmentPoint(e){if(-1===E._MAX_COLOR_ATTACHMENTS){const t=this._context.capabilities.drawBuffers;if(t){const e=this._context.gl;E._MAX_COLOR_ATTACHMENTS=e.getParameter(t.MAX_COLOR_ATTACHMENTS)}else E._MAX_COLOR_ATTACHMENTS=1}const i=e-_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .ColorAttachment */ .Nm.COLOR_ATTACHMENT0;i+1>E._MAX_COLOR_ATTACHMENTS&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${i+1}. Implementation supports up to ${E._MAX_COLOR_ATTACHMENTS} color attachments`)}}function g(t){return null!=t&&"type"in t&&t.type===_GLObjectType_js__WEBPACK_IMPORTED_MODULE_6__/* .GLObjectType */ .p.Texture}function A(t){return null!=t&&"type"in t&&t.type===_GLObjectType_js__WEBPACK_IMPORTED_MODULE_6__/* .GLObjectType */ .p.RenderBuffer}function b(t){return g(t)||null!=t&&"pixelFormat"in t}function S(t,e){const i=Math.max(t.width,t.height);if(i>e){x.warn(`Resizing FBO attachment size ${t.width}x${t.height} to device limit ${e}`);const r=e/i;return t.width=Math.round(t.width*r),t.height=Math.round(t.height*r),!1}return!0}function R(t){return t.descriptor.target===_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .TextureType */ .Ap.TEXTURE_CUBE_MAP?_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .TextureType */ .Ap.TEXTURE_CUBE_MAP_POSITIVE_X:_enums_js__WEBPACK_IMPORTED_MODULE_5__/* .TextureType */ .Ap.TEXTURE_2D}E._MAX_COLOR_ATTACHMENTS=-1;


/***/ }),

/***/ 12966:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var e;!function(e){e[e.Texture=0]="Texture",e[e.RenderBuffer=1]="RenderBuffer"}(e||(e={}));


/***/ }),

/***/ 74416:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _contextUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21946);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41746);
/* harmony import */ var _GLObjectType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12966);
/* harmony import */ var _RenderbufferDescriptor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94669);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class i{constructor(s,i){this._context=s,this._descriptor=i,this.type=_GLObjectType_js__WEBPACK_IMPORTED_MODULE_2__/* .GLObjectType */ .p.RenderBuffer,this._context.instanceCounter.increment(_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .ResourceType */ .vt.Renderbuffer,this);const n=this._context.gl;this.glName=n.createRenderbuffer(),this._context.bindRenderbuffer(this);const{width:o,height:h,internalFormat:c,multisampled:f}=i;if(f){if(this._context.type!==_contextUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .ContextType */ .EL.WEBGL2)throw new Error("Multisampled renderbuffers are not supported in WebGL1!");n.renderbufferStorageMultisample(n.RENDERBUFFER,this.samples,c,o,h)}else n.renderbufferStorage(n.RENDERBUFFER,c,o,h)}get descriptor(){return this._descriptor}get samples(){const e=this._descriptor.samples,t=this._context.parameters.maxSamples;return e?Math.min(e,t):t}get gpuMemoryUsage(){return (0,_RenderbufferDescriptor_js__WEBPACK_IMPORTED_MODULE_3__/* .estimateMemory */ .e)(this._descriptor)}resize(e,t){const r=this._descriptor;if(r.width===e&&r.height===t)return;r.width=e,r.height=t;const s=this._context.gl;if(this._context.bindRenderbuffer(this),r.multisampled){s.renderbufferStorageMultisample(s.RENDERBUFFER,this.samples,r.internalFormat,r.width,r.height)}else s.renderbufferStorage(s.RENDERBUFFER,r.internalFormat,r.width,r.height)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .ResourceType */ .vt.Renderbuffer,this),this._context=null)}}


/***/ }),

/***/ 94669:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ h),
/* harmony export */   q: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19282);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class i{constructor(t,i,h=i){this.internalFormat=t,this.width=i,this.height=h,this.multisampled=!1,this.samples=1}}function h(i){return i.width<=0||i.height<=0||null==i.internalFormat?0:i.width*i.height*(0,_Util_js__WEBPACK_IMPORTED_MODULE_0__/* .getBytesPerElementFormat */ .IB)(i.internalFormat)}


/***/ }),

/***/ 6940:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: () => (/* binding */ T)
});

// UNUSED EXPORTS: clearUnestimatedTextures

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(92504);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/checkWebGLError.js
var checkWebGLError = __webpack_require__(16541);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/contextUtils.js
var contextUtils = __webpack_require__(21946);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/enums.js
var enums = __webpack_require__(41746);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/GLObjectType.js
var GLObjectType = __webpack_require__(12966);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/TextureDescriptor.js
var TextureDescriptor = __webpack_require__(45758);
;// ../node_modules/@arcgis/core/views/webgl/ValidatedTextureDescriptor.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class a extends TextureDescriptor/* TextureDescriptor */.R{constructor(t,a){switch(super(),this.context=t,Object.assign(this,a),this.internalFormat){case enums/* SizedPixelFormat */.H0.R16F:case enums/* SizedPixelFormat */.H0.R16I:case enums/* SizedPixelFormat */.H0.R16UI:case enums/* SizedPixelFormat */.H0.R32F:case enums/* SizedPixelFormat */.H0.R32I:case enums/* SizedPixelFormat */.H0.R32UI:case enums/* SizedPixelFormat */.H0.R8_SNORM:case enums/* SizedPixelFormat */.H0.R8:case enums/* SizedPixelFormat */.H0.R8I:case enums/* SizedPixelFormat */.H0.R8UI:this.pixelFormat=enums/* PixelFormat */.Ab.RED}}static validate(s,e){return new a(s,e)}}

;// ../node_modules/@arcgis/core/views/webgl/Texture.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const u=4;let T=class{constructor(e,i=null,o=null){if(this.type=GLObjectType/* GLObjectType */.p.Texture,this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,"context"in e)this._descriptor=e,o=i;else{const r=a.validate(e,i);if(!r)throw new Error/* default */.A("Texture descriptor invalid");this._descriptor=r}if(this._descriptor.context.type!==contextUtils/* ContextType */.EL.WEBGL2&&(this._descriptor.isImmutable&&(this._descriptor.isImmutable=!1),R(this._descriptor.target)))throw new Error/* default */.A("3D and array textures are not supported in WebGL1");this._descriptor.target===enums/* TextureType */.Ap.TEXTURE_CUBE_MAP?this._setDataCubeMap(o):this.setData(o)}get glName(){return this._glName}get descriptor(){return this._descriptor}get gpuMemoryUsage(){return P.delete(this),(0,TextureDescriptor/* estimateMemory */.e)(this._descriptor)}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._glName&&this._descriptor.context.instanceCounter.decrement(enums/* ResourceType */.vt.Texture,this),this._descriptor.context.gl&&this._glName&&(this._descriptor.context.unbindTexture(this),this._descriptor.context.gl.deleteTexture(this._glName),this._glName=null)}release(){this.dispose()}resize(e,i){const r=this._descriptor;if(r.width!==e||r.height!==i){if(this._wasImmutablyAllocated)throw new Error/* default */.A("Immutable textures can't be resized!");r.width=e,r.height=i,this._descriptor.target===enums/* TextureType */.Ap.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(t=null){for(let e=enums/* TextureType */.Ap.TEXTURE_CUBE_MAP_POSITIVE_X;e<=enums/* TextureType */.Ap.TEXTURE_CUBE_MAP_NEGATIVE_Z;e++)this._setData(t,e)}setData(t){this._setData(t)}_setData(e,r){if(!this._descriptor.context?.gl)return;const s=this._descriptor.context.gl;(0,checkWebGLError/* checkWebGLError */.Y2)(s),this._glName||(this._glName=s.createTexture(),this._glName&&this._descriptor.context.instanceCounter.increment(enums/* ResourceType */.vt.Texture,this)),void 0===e&&(e=null);const a=this._descriptor,n=r??a.target,h=R(n);null===e&&(a.width=a.width||u,a.height=a.height||u,h&&(a.depth=a.depth??1));const p=this._descriptor.context.bindTexture(this,T.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(T.TEXTURE_UNIT_FOR_UPDATES),g(this._descriptor.context,a),this._configurePixelStorage(),(0,checkWebGLError/* checkWebGLError */.Y2)(s);const l=this._deriveInternalFormat();if(D(e)){let t="width"in e?e.width:e.codedWidth,r="height"in e?e.height:e.codedHeight;const o=1;e instanceof HTMLVideoElement&&(t=e.videoWidth,r=e.videoHeight),a.width&&a.height,h&&a.depth,a.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(n,l,a.hasMipmap,t,r,o),this._texImage(n,0,l,t,r,o,e),(0,checkWebGLError/* checkWebGLError */.Y2)(s),a.hasMipmap&&this.generateMipmap(),a.width||(a.width=t),a.height||(a.height=r),h&&!a.depth&&(a.depth=o)}else{const{width:r,height:o,depth:p}=a;if(null==r||null==o)throw new Error/* default */.A("Width and height must be specified!");if(h&&null==p)throw new Error/* default */.A("Depth must be specified!");if(a.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(n,l,a.hasMipmap,r,o,p),A(e)){const i=e.levels,h=b(n,r,o,p),d=Math.min(h-1,i.length-1);null!=this._descriptor.context.gl2?s.texParameteri(a.target,this._descriptor.context.gl2.TEXTURE_MAX_LEVEL,d):a.hasMipmap=a.hasMipmap&&h===i.length;const c=l;if(!w(c))throw new Error/* default */.A("Attempting to use compressed data with an uncompressed format!");this._forEachMipmapLevel(((t,e,r,s)=>{const o=i[Math.min(t,i.length-1)];this._compressedTexImage(n,t,c,e,r,s,o)}),d)}else this._texImage(n,0,l,r,o,p,e),(0,checkWebGLError/* checkWebGLError */.Y2)(s),a.hasMipmap&&this.generateMipmap()}x(s,this._descriptor),E(s,this._descriptor),f(this._descriptor.context,this._descriptor),(0,checkWebGLError/* checkWebGLError */.Y2)(s),this._descriptor.context.bindTexture(p,T.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,i,r,s,o,a,n=0){a||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const h=this._descriptor.context.gl,p=this._descriptor.context.gl2,l=this._descriptor,d=this._deriveInternalFormat(),{pixelFormat:c,dataType:_,target:m,isImmutable:u}=l;if(u&&!this._wasImmutablyAllocated)throw new Error/* default */.A("Cannot update immutable texture before allocation!");const g=this._descriptor.context.bindTexture(this,T.TEXTURE_UNIT_FOR_UPDATES,!0);if((i<0||r<0||s>l.width||o>l.height||i+s>l.width||r+o>l.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),n){if(!p)return void console.error("Webgl2 must be enabled to use dataRowOffset!");h.pixelStorei(p.UNPACK_SKIP_ROWS,n)}if(D(a)?p?p.texSubImage2D(m,e,i,r,s,o,c,_,a):h.texSubImage2D(m,e,i,r,c,_,a):A(a)?h.compressedTexSubImage2D(m,e,i,r,s,o,d,a.levels[e]):h.texSubImage2D(m,e,i,r,s,o,c,_,a),n){if(!p)return void console.error("Webgl2 must be enabled to use dataRowOffset!");h.pixelStorei(p.UNPACK_SKIP_ROWS,0)}this._descriptor.context.bindTexture(g,T.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(e,i,r,s,o,a,n,h){h||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const p=this._descriptor.context.gl2;if(null==p)throw new Error/* default */.A("3D textures are not supported in WebGL1");const l=this._descriptor,d=this._deriveInternalFormat(),{pixelFormat:c,dataType:_,isImmutable:m,target:u}=l;if(m&&!this._wasImmutablyAllocated)throw new Error/* default */.A("Cannot update immutable texture before allocation!");R(u)||console.warn("Attempting to set 3D texture data on a non-3D texture");const g=this._descriptor.context.bindTexture(this,T.TEXTURE_UNIT_FOR_UPDATES);if(this._descriptor.context.setActiveTexture(T.TEXTURE_UNIT_FOR_UPDATES),(i<0||r<0||s<0||o>l.width||a>l.height||n>l.depth||i+o>l.width||r+a>l.height||s+n>l.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),A(h))h=h.levels[e],p.compressedTexSubImage3D(u,e,i,r,s,o,a,n,d,h);else{const t=h;p.texSubImage3D(u,e,i,r,s,o,a,n,c,_,t)}this._descriptor.context.bindTexture(g,T.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;if(!e.hasMipmap){if(this._wasImmutablyAllocated)throw new Error/* default */.A("Cannot add mipmaps to immutable texture after allocation");e.hasMipmap=!0,this._samplingModeDirty=!0,g(this._descriptor.context,e)}e.samplingMode===enums/* TextureSamplingMode */.Cj.LINEAR?(this._samplingModeDirty=!0,e.samplingMode=enums/* TextureSamplingMode */.Cj.LINEAR_MIPMAP_NEAREST):e.samplingMode===enums/* TextureSamplingMode */.Cj.NEAREST&&(this._samplingModeDirty=!0,e.samplingMode=enums/* TextureSamplingMode */.Cj.NEAREST_MIPMAP_NEAREST);const i=this._descriptor.context.bindTexture(this,T.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(T.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.gl.generateMipmap(e.target),this._descriptor.context.bindTexture(i,T.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(t){t!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=t,this._samplingModeDirty=!0)}setWrapMode(t){t!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=t,g(this._descriptor.context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const t=this._descriptor.context.gl,e=this._descriptor;this._samplingModeDirty&&(x(t,e),this._samplingModeDirty=!1),this._wrapModeDirty&&(E(t,e),this._wrapModeDirty=!1)}_deriveInternalFormat(){if(this._descriptor.context.type===contextUtils/* ContextType */.EL.WEBGL1)return this._descriptor.internalFormat=this._descriptor.pixelFormat;if(null!=this._descriptor.internalFormat)return this._descriptor.internalFormat===enums/* PixelFormat */.Ab.DEPTH_STENCIL&&(this._descriptor.internalFormat=enums/* PixelFormat */.Ab.DEPTH24_STENCIL8),this._descriptor.internalFormat;switch(this._descriptor.dataType){case enums/* PixelType */.ld.FLOAT:switch(this._descriptor.pixelFormat){case enums/* PixelFormat */.Ab.RGBA:return this._descriptor.internalFormat=enums/* SizedPixelFormat */.H0.RGBA32F;case enums/* PixelFormat */.Ab.RGB:return this._descriptor.internalFormat=enums/* SizedPixelFormat */.H0.RGB32F;default:throw new Error/* default */.A("Unable to derive format")}case enums/* PixelType */.ld.UNSIGNED_BYTE:switch(this._descriptor.pixelFormat){case enums/* PixelFormat */.Ab.RGBA:return this._descriptor.internalFormat=enums/* SizedPixelFormat */.H0.RGBA8;case enums/* PixelFormat */.Ab.RGB:return this._descriptor.internalFormat=enums/* SizedPixelFormat */.H0.RGB8}}return this._descriptor.internalFormat=this._descriptor.pixelFormat===enums/* PixelFormat */.Ab.DEPTH_STENCIL?enums/* PixelFormat */.Ab.DEPTH24_STENCIL8:this._descriptor.pixelFormat}_configurePixelStorage(){const t=this._descriptor.context.gl,{unpackAlignment:e,flipped:i,preMultiplyAlpha:r}=this._descriptor;t.pixelStorei(t.UNPACK_ALIGNMENT,e),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,i?1:0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r?1:0)}_texStorage(e,i,r,s,o,a){const n=this._descriptor.context.gl2;if(null==n)throw new Error/* default */.A("Immutable textures are not supported in WebGL1");if(!M(i))throw new Error/* default */.A("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const h=r?b(e,s,o,a):1;if(R(e)){if(null==a)throw new Error/* default */.A("Missing depth dimension for 3D texture upload");n.texStorage3D(e,h,i,s,o,a)}else n.texStorage2D(e,h,i,s,o);this._wasImmutablyAllocated=!0}_texImage(e,i,s,o,a,n,h){const p=this._descriptor.context.gl,l=R(e),{isImmutable:d,pixelFormat:c,dataType:_}=this._descriptor,m=this._descriptor.context.type===contextUtils/* ContextType */.EL.WEBGL2,u=m?p:null;if(m||!D(h))if(d){if(null!=h){const r=h;if(l){if(null==n)throw new Error/* default */.A("Missing depth dimension for 3D texture upload");u.texSubImage3D(e,i,0,0,0,o,a,n,c,_,r)}else p.texSubImage2D(e,i,0,0,o,a,c,_,r)}}else{const r=h;if(l){if(null==n)throw new Error/* default */.A("Missing depth dimension for 3D texture upload");u.texImage3D(e,i,s,o,a,n,0,c,_,r)}else p.texImage2D(e,i,s,o,a,0,c,_,r)}else p.texImage2D(e,0,s,c,_,h)}_compressedTexImage(e,i,s,o,a,n,h){const p=this._descriptor.context.gl;let l=null;const d=R(e),c=this._descriptor.isImmutable;if(d){if(this._descriptor.context.type!==contextUtils/* ContextType */.EL.WEBGL2)throw new Error/* default */.A("3D textures are not supported in WebGL1");l=p}if(c){if(null!=h)if(d){if(null==n)throw new Error/* default */.A("Missing depth dimension for 3D texture upload");l.compressedTexSubImage3D(e,i,0,0,0,o,a,n,s,h)}else p.compressedTexSubImage2D(e,i,0,0,o,a,s,h)}else if(d){if(null==n)throw new Error/* default */.A("Missing depth dimension for 3D texture upload");l.compressedTexImage3D(e,i,s,o,a,n,0,h)}else p.compressedTexImage2D(e,i,s,o,a,0,h)}_forEachMipmapLevel(e,i=1/0){let{width:r,height:o,depth:a,hasMipmap:n,target:h}=this._descriptor;const p=h===enums/* TextureType */.Ap.TEXTURE_3D;if(null==r||null==o||p&&null==a)throw new Error/* default */.A("Missing texture dimensions for mipmap calculation");for(let t=0;e(t,r,o,a),n&&(1!==r||1!==o||p&&1!==a)&&!(t>=i);++t)r=Math.max(1,r>>1),o=Math.max(1,o>>1),p&&(a=Math.max(1,a>>1))}};function g(t,i){(null!=i.width&&i.width<0||null!=i.height&&i.height<0||null!=i.depth&&i.depth<0)&&console.error("Negative dimension parameters are not allowed!");const s=t.type===contextUtils/* ContextType */.EL.WEBGL2;if(s||!i.isImmutable&&!R(i.target)||console.error("Immutable and 3D-like textures are not supported in WebGL1!"),s)return;null!=i.width&&(0,mathUtils/* isPowerOfTwo */.r6)(i.width)&&null!=i.height&&(0,mathUtils/* isPowerOfTwo */.r6)(i.height)||("number"==typeof i.wrapMode?i.wrapMode!==enums/* TextureWrapMode */.pF.CLAMP_TO_EDGE&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):i.wrapMode.s===enums/* TextureWrapMode */.pF.CLAMP_TO_EDGE&&i.wrapMode.t===enums/* TextureWrapMode */.pF.CLAMP_TO_EDGE||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),i.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}function x(t,e){let i=e.samplingMode,r=e.samplingMode;i===enums/* TextureSamplingMode */.Cj.LINEAR_MIPMAP_NEAREST||i===enums/* TextureSamplingMode */.Cj.LINEAR_MIPMAP_LINEAR?(i=enums/* TextureSamplingMode */.Cj.LINEAR,e.hasMipmap||(r=enums/* TextureSamplingMode */.Cj.LINEAR)):i!==enums/* TextureSamplingMode */.Cj.NEAREST_MIPMAP_NEAREST&&i!==enums/* TextureSamplingMode */.Cj.NEAREST_MIPMAP_LINEAR||(i=enums/* TextureSamplingMode */.Cj.NEAREST,e.hasMipmap||(r=enums/* TextureSamplingMode */.Cj.NEAREST)),t.texParameteri(e.target,t.TEXTURE_MAG_FILTER,i),t.texParameteri(e.target,t.TEXTURE_MIN_FILTER,r)}function E(t,e){"number"==typeof e.wrapMode?(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode)):(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode.s),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode.t))}function f(t,e){const i=t.capabilities.textureFilterAnisotropic;if(!i)return;t.gl.texParameterf(e.target,i.TEXTURE_MAX_ANISOTROPY,e.maxAnisotropy??1)}function M(t){return t in enums/* SizedPixelFormat */.H0}function w(t){return t in enums/* CompressedTextureFormat */.CQ}function A(t){return null!=t&&"type"in t&&"compressed"===t.type}function I(t){return null!=t&&"byteLength"in t}function D(t){return null!=t&&!A(t)&&!I(t)}function R(t){return t===enums/* TextureType */.Ap.TEXTURE_3D||t===enums/* TextureType */.Ap.TEXTURE_2D_ARRAY}function b(t,e,i,r=1){let o=Math.max(e,i);return t===enums/* TextureType */.Ap.TEXTURE_3D&&(o=Math.max(o,r)),Math.round(Math.log(o)/Math.LN2)+1}function U(){if(0===P.size)return;const t=new Array;return P.forEach(((e,i)=>t.push([i.gpuMemoryUsage,e]))),P.clear(),t.sort(((t,e)=>e[0]-t[0])),t.reduce(((t,e)=>`${t}\n\n${Math.round(e[0]/1024)}KB: ${e[1]}`),`Total unestimated texture memory: ${Math.round(t.reduce(((t,e)=>t+e[0]),0)/1024)}KB`)}T.TEXTURE_UNIT_FOR_UPDATES=0;const P=new Map;


/***/ }),

/***/ 45758:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ e),
/* harmony export */   e: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41746);
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19282);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class e{constructor(p=0,e=p){this.width=p,this.height=e,this.target=_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .TextureType */ .Ap.TEXTURE_2D,this.pixelFormat=_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .PixelFormat */ .Ab.RGBA,this.dataType=_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .PixelType */ .ld.UNSIGNED_BYTE,this.samplingMode=_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .TextureSamplingMode */ .Cj.LINEAR,this.wrapMode=_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .TextureWrapMode */ .pF.REPEAT,this.maxAnisotropy=1,this.flipped=!1,this.hasMipmap=!1,this.isOpaque=!1,this.unpackAlignment=4,this.preMultiplyAlpha=!1,this.depth=1,this.isImmutable=!1}}function r(t){return t.width<=0||t.height<=0?0:t.width*t.height*(t.hasMipmap?4/3:1)*(null==t.internalFormat?4:(0,_Util_js__WEBPACK_IMPORTED_MODULE_1__/* .getBytesPerElementFormat */ .IB)(t.internalFormat))}


/***/ }),

/***/ 19282:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hi: () => (/* binding */ o),
/* harmony export */   IB: () => (/* binding */ E),
/* harmony export */   WH: () => (/* binding */ a),
/* harmony export */   yu: () => (/* binding */ i)
/* harmony export */ });
/* unused harmony exports getStride, vertexCount */
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41746);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function a(e){const r=e.gl;switch(r.getError()){case r.NO_ERROR:return null;case r.INVALID_ENUM:return"An unacceptable value has been specified for an enumerated argument";case r.INVALID_VALUE:return"An unacceptable value has been specified for an argument";case r.INVALID_OPERATION:return"The specified command is not allowed for the current state";case r.INVALID_FRAMEBUFFER_OPERATION:return"The currently bound framebuffer is not framebuffer complete";case r.OUT_OF_MEMORY:return"Not enough memory is left to execute the command";case r.CONTEXT_LOST_WEBGL:return"WebGL context is lost"}return"Unknown error"}function n(e,r){return e.vertexBuffers[r].byteLength/R(e.layout[r])}function R(e){return e[0].stride}function i(e,r,t,s,c=0){const a=e.gl;e.bindBuffer(t);for(const n of s){const t=r.get(n.name);void 0===t&&console.error(`There is no location for vertex attribute '${n.name}' defined.`);const s=c*n.stride;if(n.count<=4)a.vertexAttribPointer(t,n.count,n.type,n.normalized,n.stride,n.offset+s),a.enableVertexAttribArray(t),n.divisor>0&&e.gl2?.vertexAttribDivisor(t,n.divisor);else if(9===n.count)for(let r=0;r<3;r++)a.vertexAttribPointer(t+r,3,n.type,n.normalized,n.stride,n.offset+12*r+s),a.enableVertexAttribArray(t+r),n.divisor>0&&e.gl2?.vertexAttribDivisor(t+r,n.divisor);else if(16===n.count)for(let r=0;r<4;r++)a.vertexAttribPointer(t+r,4,n.type,n.normalized,n.stride,n.offset+16*r+s),a.enableVertexAttribArray(t+r),n.divisor>0&&e.gl2?.vertexAttribDivisor(t+r,n.divisor);else console.error("Unsupported vertex attribute element count: "+n.count)}}function o(r,t,s,c){const a=r.gl;r.bindBuffer(s);for(const e of c){const s=t.get(e.name);if(e.count<=4)a.disableVertexAttribArray(s),e.divisor&&e.divisor>0&&r.gl2?.vertexAttribDivisor(s,0);else if(9===e.count)for(let t=0;t<3;t++)a.disableVertexAttribArray(s+t),e.divisor&&e.divisor>0&&r.gl2?.vertexAttribDivisor(s+t,0);else if(16===e.count)for(let t=0;t<4;t++)a.disableVertexAttribArray(s+t),e.divisor&&e.divisor>0&&r.gl2?.vertexAttribDivisor(s+t,0);else console.error("Unsupported vertex attribute element count: "+e.count)}r.unbindBuffer(_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferType */ .NZ.ARRAY_BUFFER)}function E(e){switch(e){case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .PixelFormat */ .Ab.ALPHA:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .PixelFormat */ .Ab.LUMINANCE:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .PixelFormat */ .Ab.RED:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .PixelFormat */ .Ab.RED_INTEGER:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.R8:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.R8I:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.R8UI:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.R8_SNORM:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .RenderbufferFormat */ .yQ.STENCIL_INDEX8:return 1;case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .PixelFormat */ .Ab.LUMINANCE_ALPHA:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .PixelFormat */ .Ab.RG:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .PixelFormat */ .Ab.RG_INTEGER:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGBA4:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.R16F:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.R16I:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.R16UI:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RG8:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RG8I:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RG8UI:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RG8_SNORM:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGB565:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGB5_A1:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .RenderbufferFormat */ .yQ.DEPTH_COMPONENT16:return 2;case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .PixelFormat */ .Ab.DEPTH_COMPONENT:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .PixelFormat */ .Ab.RGB:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .PixelFormat */ .Ab.RGB_INTEGER:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGB8:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGB8I:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGB8UI:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGB8_SNORM:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.SRGB8:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .RenderbufferFormat */ .yQ.DEPTH_COMPONENT24:return 3;case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .PixelFormat */ .Ab.DEPTH_STENCIL:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .PixelFormat */ .Ab.DEPTH24_STENCIL8:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .PixelFormat */ .Ab.RGBA:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .PixelFormat */ .Ab.RGBA_INTEGER:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGBA8:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.R32F:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.R11F_G11F_B10F:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RG16F:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.R32I:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.R32UI:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RG16I:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RG16UI:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGBA8I:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGBA8UI:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGBA8_SNORM:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.SRGB8_ALPHA8:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGB9_E5:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGB10_A2UI:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGB10_A2:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .RenderbufferFormat */ .yQ.DEPTH_STENCIL:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .RenderbufferFormat */ .yQ.DEPTH_COMPONENT32F:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .RenderbufferFormat */ .yQ.DEPTH24_STENCIL8:return 4;case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .RenderbufferFormat */ .yQ.DEPTH32F_STENCIL8:return 5;case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGB16F:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGB16I:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGB16UI:return 6;case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RG32F:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RG32I:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RG32UI:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGBA16F:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGBA16I:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGBA16UI:return 8;case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGB32F:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGB32I:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGB32UI:return 12;case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGBA32F:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGBA32I:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGBA32UI:return 16;case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CompressedTextureFormat */ .CQ.COMPRESSED_RGB_S3TC_DXT1_EXT:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CompressedTextureFormat */ .CQ.COMPRESSED_RGBA_S3TC_DXT1_EXT:return.5;case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CompressedTextureFormat */ .CQ.COMPRESSED_RGBA_S3TC_DXT3_EXT:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CompressedTextureFormat */ .CQ.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CompressedTextureFormat */ .CQ.COMPRESSED_R11_EAC:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CompressedTextureFormat */ .CQ.COMPRESSED_SIGNED_R11_EAC:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CompressedTextureFormat */ .CQ.COMPRESSED_RGB8_ETC2:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CompressedTextureFormat */ .CQ.COMPRESSED_SRGB8_ETC2:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CompressedTextureFormat */ .CQ.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CompressedTextureFormat */ .CQ.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return.5;case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CompressedTextureFormat */ .CQ.COMPRESSED_RG11_EAC:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CompressedTextureFormat */ .CQ.COMPRESSED_SIGNED_RG11_EAC:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CompressedTextureFormat */ .CQ.COMPRESSED_RGBA8_ETC2_EAC:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CompressedTextureFormat */ .CQ.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}


/***/ }),

/***/ 16541:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Xc: () => (/* binding */ c),
/* harmony export */   Y2: () => (/* binding */ u),
/* harmony export */   en: () => (/* binding */ a)
/* harmony export */ });
/* unused harmony export hasFeatureFlagWebGLDebug */
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(539);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const o=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.getLogger("esri.views.webgl.checkWebGLError");function t(e,r){switch(r){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}const n=!!(0,_core_has_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)("enable-feature:webgl-debug");function a(){return n}function c(){return n}function u(r){if(a()){const n=r.getError();if(n){const a=t(r,n),c=(new Error).stack;o.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("webgl-error","WebGL error occurred",{message:a,stack:c}))}}}


/***/ }),

/***/ 76698:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Zo: () => (/* binding */ o),
/* harmony export */   jA: () => (/* binding */ r),
/* harmony export */   jS: () => (/* binding */ t)
/* harmony export */ });
/* unused harmony export decodeDoubleArray */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function t(t,n,o){for(let r=0;r<o;++r)n[2*r]=t[r],n[2*r+1]=t[r]-n[2*r]}function n(t,n,o){for(let r=0;r<o;++r)n[r]=t[2*r]+t[2*r+1]}function o(t,n){const o=t.length;for(let r=0;r<o;++r)e[0]=t[r],n[r]=e[0];return n}function r(t,n){const o=t.length;for(let r=0;r<o;++r)e[0]=t[r],e[1]=t[r]-e[0],n[r]=e[1];return n}const e=new Float32Array(2);


/***/ }),

/***/ 41746:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ab: () => (/* binding */ G),
/* harmony export */   Ac: () => (/* binding */ S),
/* harmony export */   Ap: () => (/* binding */ M),
/* harmony export */   CQ: () => (/* binding */ c),
/* harmony export */   Cj: () => (/* binding */ L),
/* harmony export */   Co: () => (/* binding */ H),
/* harmony export */   H0: () => (/* binding */ P),
/* harmony export */   Hr: () => (/* binding */ f),
/* harmony export */   MT: () => (/* binding */ O),
/* harmony export */   NZ: () => (/* binding */ A),
/* harmony export */   Nm: () => (/* binding */ X),
/* harmony export */   R: () => (/* binding */ n),
/* harmony export */   Tb: () => (/* binding */ T),
/* harmony export */   WR: () => (/* binding */ E),
/* harmony export */   Y7: () => (/* binding */ N),
/* harmony export */   _U: () => (/* binding */ F),
/* harmony export */   dn: () => (/* binding */ R),
/* harmony export */   eA: () => (/* binding */ I),
/* harmony export */   hn: () => (/* binding */ _),
/* harmony export */   ld: () => (/* binding */ U),
/* harmony export */   nI: () => (/* binding */ t),
/* harmony export */   pF: () => (/* binding */ D),
/* harmony export */   pe: () => (/* binding */ C),
/* harmony export */   sS: () => (/* binding */ e),
/* harmony export */   tx: () => (/* binding */ r),
/* harmony export */   vt: () => (/* binding */ V),
/* harmony export */   xM: () => (/* binding */ Y),
/* harmony export */   xV: () => (/* binding */ o),
/* harmony export */   yQ: () => (/* binding */ B)
/* harmony export */ });
/* unused harmony exports SyncFlag, SyncParameter, SyncStatus */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var _,E,R,T,A,N,S,C,O,I,L,D,M,G,P,U,B,F,H,n;!function(_){_[_.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",_[_.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",_[_.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"}(_||(_={})),function(_){_[_.POINTS=0]="POINTS",_[_.LINES=1]="LINES",_[_.LINE_LOOP=2]="LINE_LOOP",_[_.LINE_STRIP=3]="LINE_STRIP",_[_.TRIANGLES=4]="TRIANGLES",_[_.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",_[_.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(E||(E={})),function(_){_[_.ZERO=0]="ZERO",_[_.ONE=1]="ONE",_[_.SRC_COLOR=768]="SRC_COLOR",_[_.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",_[_.SRC_ALPHA=770]="SRC_ALPHA",_[_.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",_[_.DST_ALPHA=772]="DST_ALPHA",_[_.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",_[_.DST_COLOR=774]="DST_COLOR",_[_.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",_[_.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",_[_.CONSTANT_COLOR=32769]="CONSTANT_COLOR",_[_.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",_[_.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",_[_.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(R||(R={})),function(_){_[_.ADD=32774]="ADD",_[_.MIN=32775]="MIN",_[_.MAX=32776]="MAX",_[_.SUBTRACT=32778]="SUBTRACT",_[_.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(T||(T={})),function(_){_[_.ARRAY_BUFFER=34962]="ARRAY_BUFFER",_[_.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",_[_.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",_[_.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",_[_.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",_[_.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",_[_.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER"}(A||(A={})),function(_){_[_.FRONT=1028]="FRONT",_[_.BACK=1029]="BACK",_[_.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(N||(N={})),function(_){_[_.CW=2304]="CW",_[_.CCW=2305]="CCW"}(S||(S={})),function(_){_[_.BYTE=5120]="BYTE",_[_.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",_[_.SHORT=5122]="SHORT",_[_.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",_[_.INT=5124]="INT",_[_.UNSIGNED_INT=5125]="UNSIGNED_INT",_[_.FLOAT=5126]="FLOAT"}(C||(C={})),function(_){_[_.NEVER=512]="NEVER",_[_.LESS=513]="LESS",_[_.EQUAL=514]="EQUAL",_[_.LEQUAL=515]="LEQUAL",_[_.GREATER=516]="GREATER",_[_.NOTEQUAL=517]="NOTEQUAL",_[_.GEQUAL=518]="GEQUAL",_[_.ALWAYS=519]="ALWAYS"}(O||(O={})),function(_){_[_.ZERO=0]="ZERO",_[_.KEEP=7680]="KEEP",_[_.REPLACE=7681]="REPLACE",_[_.INCR=7682]="INCR",_[_.DECR=7683]="DECR",_[_.INVERT=5386]="INVERT",_[_.INCR_WRAP=34055]="INCR_WRAP",_[_.DECR_WRAP=34056]="DECR_WRAP"}(I||(I={})),function(_){_[_.NEAREST=9728]="NEAREST",_[_.LINEAR=9729]="LINEAR",_[_.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",_[_.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",_[_.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",_[_.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(L||(L={})),function(_){_[_.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",_[_.REPEAT=10497]="REPEAT",_[_.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(D||(D={})),function(_){_[_.TEXTURE_2D=3553]="TEXTURE_2D",_[_.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",_[_.TEXTURE_3D=32879]="TEXTURE_3D",_[_.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",_[_.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",_[_.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",_[_.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",_[_.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",_[_.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",_[_.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(M||(M={})),function(_){_[_.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",_[_.DEPTH_STENCIL=34041]="DEPTH_STENCIL",_[_.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",_[_.ALPHA=6406]="ALPHA",_[_.RGB=6407]="RGB",_[_.RGBA=6408]="RGBA",_[_.LUMINANCE=6409]="LUMINANCE",_[_.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",_[_.RED=6403]="RED",_[_.RG=33319]="RG",_[_.RED_INTEGER=36244]="RED_INTEGER",_[_.RG_INTEGER=33320]="RG_INTEGER",_[_.RGB_INTEGER=36248]="RGB_INTEGER",_[_.RGBA_INTEGER=36249]="RGBA_INTEGER"}(G||(G={})),function(_){_[_.RGBA4=32854]="RGBA4",_[_.R16F=33325]="R16F",_[_.RG16F=33327]="RG16F",_[_.RGB32F=34837]="RGB32F",_[_.RGBA16F=34842]="RGBA16F",_[_.R32F=33326]="R32F",_[_.RG32F=33328]="RG32F",_[_.RGBA32F=34836]="RGBA32F",_[_.R11F_G11F_B10F=35898]="R11F_G11F_B10F",_[_.RGB8=32849]="RGB8",_[_.RGBA8=32856]="RGBA8",_[_.RGB5_A1=32855]="RGB5_A1",_[_.R8=33321]="R8",_[_.RG8=33323]="RG8",_[_.R8I=33329]="R8I",_[_.R8UI=33330]="R8UI",_[_.R16I=33331]="R16I",_[_.R16UI=33332]="R16UI",_[_.R32I=33333]="R32I",_[_.R32UI=33334]="R32UI",_[_.RG8I=33335]="RG8I",_[_.RG8UI=33336]="RG8UI",_[_.RG16I=33337]="RG16I",_[_.RG16UI=33338]="RG16UI",_[_.RG32I=33339]="RG32I",_[_.RG32UI=33340]="RG32UI",_[_.RGB16F=34843]="RGB16F",_[_.RGB9_E5=35901]="RGB9_E5",_[_.SRGB8=35905]="SRGB8",_[_.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",_[_.RGB565=36194]="RGB565",_[_.RGBA32UI=36208]="RGBA32UI",_[_.RGB32UI=36209]="RGB32UI",_[_.RGBA16UI=36214]="RGBA16UI",_[_.RGB16UI=36215]="RGB16UI",_[_.RGBA8UI=36220]="RGBA8UI",_[_.RGB8UI=36221]="RGB8UI",_[_.RGBA32I=36226]="RGBA32I",_[_.RGB32I=36227]="RGB32I",_[_.RGBA16I=36232]="RGBA16I",_[_.RGB16I=36233]="RGB16I",_[_.RGBA8I=36238]="RGBA8I",_[_.RGB8I=36239]="RGB8I",_[_.R8_SNORM=36756]="R8_SNORM",_[_.RG8_SNORM=36757]="RG8_SNORM",_[_.RGB8_SNORM=36758]="RGB8_SNORM",_[_.RGBA8_SNORM=36759]="RGBA8_SNORM",_[_.RGB10_A2=32857]="RGB10_A2",_[_.RGB10_A2UI=36975]="RGB10_A2UI"}(P||(P={})),function(_){_[_.FLOAT=5126]="FLOAT",_[_.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",_[_.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",_[_.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",_[_.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",_[_.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",_[_.BYTE=5120]="BYTE",_[_.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",_[_.SHORT=5122]="SHORT",_[_.UNSIGNED_INT=5125]="UNSIGNED_INT",_[_.INT=5124]="INT",_[_.HALF_FLOAT=5131]="HALF_FLOAT",_[_.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",_[_.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",_[_.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",_[_.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(U||(U={})),function(_){_[_.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",_[_.STENCIL_INDEX8=36168]="STENCIL_INDEX8",_[_.DEPTH_STENCIL=34041]="DEPTH_STENCIL",_[_.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",_[_.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",_[_.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",_[_.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(B||(B={})),function(_){_[_.STATIC_DRAW=35044]="STATIC_DRAW",_[_.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",_[_.STREAM_DRAW=35040]="STREAM_DRAW",_[_.STATIC_READ=35045]="STATIC_READ",_[_.DYNAMIC_READ=35049]="DYNAMIC_READ",_[_.STREAM_READ=35041]="STREAM_READ",_[_.STATIC_COPY=35046]="STATIC_COPY",_[_.DYNAMIC_COPY=35050]="DYNAMIC_COPY",_[_.STREAM_COPY=35042]="STREAM_COPY"}(F||(F={})),function(_){_[_.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",_[_.VERTEX_SHADER=35633]="VERTEX_SHADER"}(H||(H={})),function(_){_[_.FRAMEBUFFER=36160]="FRAMEBUFFER",_[_.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",_[_.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(n||(n={}));const Y=33984;var V,X,f;!function(_){_[_.Texture=0]="Texture",_[_.BufferObject=1]="BufferObject",_[_.VertexArrayObject=2]="VertexArrayObject",_[_.Shader=3]="Shader",_[_.Program=4]="Program",_[_.FramebufferObject=5]="FramebufferObject",_[_.Renderbuffer=6]="Renderbuffer",_[_.Sync=7]="Sync",_[_.UNCOUNTED=8]="UNCOUNTED",_[_.LinesOfCode=8]="LinesOfCode",_[_.Uniform=9]="Uniform",_[_.COUNT=10]="COUNT"}(V||(V={})),function(_){_[_.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",_[_.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",_[_.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",_[_.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",_[_.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",_[_.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",_[_.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",_[_.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",_[_.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",_[_.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",_[_.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",_[_.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",_[_.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",_[_.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",_[_.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",_[_.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(X||(X={})),function(_){_[_.NONE=0]="NONE",_[_.BACK=1029]="BACK"}(f||(f={}));const t=33306;var c,o,u,i,e,r,W;!function(_){_[_.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",_[_.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",_[_.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",_[_.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",_[_.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",_[_.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",_[_.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",_[_.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",_[_.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",_[_.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",_[_.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",_[_.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",_[_.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",_[_.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(c||(c={})),function(_){_[_.FLOAT=5126]="FLOAT",_[_.FLOAT_VEC2=35664]="FLOAT_VEC2",_[_.FLOAT_VEC3=35665]="FLOAT_VEC3",_[_.FLOAT_VEC4=35666]="FLOAT_VEC4",_[_.INT=5124]="INT",_[_.INT_VEC2=35667]="INT_VEC2",_[_.INT_VEC3=35668]="INT_VEC3",_[_.INT_VEC4=35669]="INT_VEC4",_[_.BOOL=35670]="BOOL",_[_.BOOL_VEC2=35671]="BOOL_VEC2",_[_.BOOL_VEC3=35672]="BOOL_VEC3",_[_.BOOL_VEC4=35673]="BOOL_VEC4",_[_.FLOAT_MAT2=35674]="FLOAT_MAT2",_[_.FLOAT_MAT3=35675]="FLOAT_MAT3",_[_.FLOAT_MAT4=35676]="FLOAT_MAT4",_[_.SAMPLER_2D=35678]="SAMPLER_2D",_[_.SAMPLER_CUBE=35680]="SAMPLER_CUBE",_[_.UNSIGNED_INT=5125]="UNSIGNED_INT",_[_.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",_[_.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",_[_.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",_[_.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",_[_.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",_[_.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",_[_.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",_[_.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",_[_.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",_[_.SAMPLER_3D=35679]="SAMPLER_3D",_[_.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",_[_.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",_[_.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",_[_.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",_[_.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",_[_.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",_[_.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",_[_.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",_[_.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",_[_.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",_[_.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",_[_.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(o||(o={})),function(_){_[_.OBJECT_TYPE=37138]="OBJECT_TYPE",_[_.SYNC_CONDITION=37139]="SYNC_CONDITION",_[_.SYNC_STATUS=37140]="SYNC_STATUS",_[_.SYNC_FLAGS=37141]="SYNC_FLAGS"}(u||(u={})),function(_){_[_.UNSIGNALED=37144]="UNSIGNALED",_[_.SIGNALED=37145]="SIGNALED"}(i||(i={})),function(_){_[_.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",_[_.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",_[_.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",_[_.WAIT_FAILED=37149]="WAIT_FAILED"}(e||(e={})),function(_){_[_.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(r||(r={})),function(_){_[_.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(W||(W={}));


/***/ }),

/***/ 2449:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ey: () => (/* binding */ S),
/* harmony export */   Ms: () => (/* binding */ G),
/* harmony export */   Xt: () => (/* binding */ h),
/* harmony export */   kn: () => (/* binding */ o),
/* harmony export */   ox: () => (/* binding */ s),
/* harmony export */   p3: () => (/* binding */ l),
/* harmony export */   wE: () => (/* binding */ _)
/* harmony export */ });
/* unused harmony exports backFaceCullingParams, frontFaceCullingParams, makeBlending, makeColorWrite, makeCulling, makeDepthTest, makeDepthWrite, makeDrawBuffers, makePolygonOffset, makeStencilTest, makeStencilWrite */
/* harmony import */ var _3d_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91013);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41746);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function s(t,e,i=_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .BlendOperation */ .Tb.ADD,s=[0,0,0,0]){return{srcRgb:t,srcAlpha:t,dstRgb:e,dstAlpha:e,opRgb:i,opAlpha:i,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}function l(t,e,i,s,l=_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .BlendOperation */ .Tb.ADD,r=_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .BlendOperation */ .Tb.ADD,a=[0,0,0,0]){return{srcRgb:t,srcAlpha:e,dstRgb:i,dstAlpha:s,opRgb:l,opAlpha:r,color:{r:a[0],g:a[1],b:a[2],a:a[3]}}}const r={face:_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .Face */ .Y7.BACK,mode:_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CullMode */ .Ac.CCW},a={face:_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .Face */ .Y7.FRONT,mode:_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CullMode */ .Ac.CCW},h=e=>e===_3d_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .CullFaceOptions */ .s2.Back?r:e===_3d_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .CullFaceOptions */ .s2.Front?a:null,o={zNear:0,zFar:1},_={r:!0,g:!0,b:!0,a:!0};function c(t){return w.intern(t)}function d(t){return D.intern(t)}function u(t){return O.intern(t)}function f(t){return m.intern(t)}function p(t){return R.intern(t)}function g(t){return P.intern(t)}function v(t){return F.intern(t)}function I(t){return K.intern(t)}function W(t){return x.intern(t)}function S(t){return q.intern(t)}class b{constructor(t,e){this._makeKey=t,this._makeRef=e,this._interns=new Map}intern(t){if(!t)return null;const e=this._makeKey(t),i=this._interns;return i.has(e)||i.set(e,this._makeRef(t)),i.get(e)??null}}function T(t){return"["+t.join(",")+"]"}const w=new b(B,(t=>({__tag:"Blending",...t})));function B(t){return t?T([t.srcRgb,t.srcAlpha,t.dstRgb,t.dstAlpha,t.opRgb,t.opAlpha,t.color.r,t.color.g,t.color.b,t.color.a]):null}const D=new b(y,(t=>({__tag:"Culling",...t})));function y(t){return t?T([t.face,t.mode]):null}const O=new b(C,(t=>({__tag:"PolygonOffset",...t})));function C(t){return t?T([t.factor,t.units]):null}const m=new b(A,(t=>({__tag:"DepthTest",...t})));function A(t){return t?T([t.func]):null}const R=new b(k,(t=>({__tag:"StencilTest",...t})));function k(t){return t?T([t.function.func,t.function.ref,t.function.mask,t.operation.fail,t.operation.zFail,t.operation.zPass]):null}const P=new b(z,(t=>({__tag:"DepthWrite",...t})));function z(t){return t?T([t.zNear,t.zFar]):null}const F=new b(j,(t=>({__tag:"ColorWrite",...t})));function j(t){return t?T([t.r,t.g,t.b,t.a]):null}const K=new b(N,(t=>({__tag:"StencilWrite",...t})));function N(t){return t?T([t.mask]):null}const x=new b(M,(t=>({__tag:"DrawBuffers",...t})));function M(t){return t?T(t.buffers):null}const q=new b(E,(t=>({blending:c(t.blending),culling:d(t.culling),polygonOffset:u(t.polygonOffset),depthTest:f(t.depthTest),stencilTest:p(t.stencilTest),depthWrite:g(t.depthWrite),colorWrite:v(t.colorWrite),stencilWrite:I(t.stencilWrite),drawBuffers:W(t.drawBuffers)})));function E(t){return t?T([B(t.blending),y(t.culling),C(t.polygonOffset),A(t.depthTest),k(t.stencilTest),z(t.depthWrite),j(t.colorWrite),N(t.stencilWrite),M(t.drawBuffers)]):null}class G{constructor(t){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._drawBuffersInvalid=!0,this._stateSetters=t}setPipeline(t){(this._pipelineInvalid||t!==this._pipeline)&&(this._setBlending(t.blending),this._setCulling(t.culling),this._setPolygonOffset(t.polygonOffset),this._setDepthTest(t.depthTest),this._setStencilTest(t.stencilTest),this._setDepthWrite(t.depthWrite),this._setColorWrite(t.colorWrite),this._setStencilWrite(t.stencilWrite),this._setDrawBuffers(t.drawBuffers),this._pipeline=t),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDrawBuffers(){this._drawBuffersInvalid=!0,this._pipelineInvalid=!0}_setBlending(t){this._blending=this._setSubState(t,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(t){this._culling=this._setSubState(t,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(t){this._polygonOffset=this._setSubState(t,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(t){this._depthTest=this._setSubState(t,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(t){this._stencilTest=this._setSubState(t,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(t){this._depthWrite=this._setSubState(t,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(t){this._colorWrite=this._setSubState(t,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(t){this._stencilWrite=this._setSubState(t,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setDrawBuffers(t){this._drawBuffers=this._setSubState(t,this._drawBuffers,this._drawBuffersInvalid,this._stateSetters.setDrawBuffers),this._drawBuffersInvalid=!1}_setSubState(t,e,i,n){return(i||t!==e)&&(n(t),this._pipelineInvalid=!0),t}}


/***/ })

};
;