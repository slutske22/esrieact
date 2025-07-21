"use strict";
exports.id = 2470;
exports.ids = [2470];
exports.modules = {

/***/ 90618:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ Q),
/* harmony export */   b: () => (/* binding */ K)
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28152);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40641);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26163);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55274);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1110);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66012);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24682);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81283);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53429);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26139);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(39739);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(82089);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(54009);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(23399);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_ComputeNormalTexture_glsl_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(76080);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3325);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(93929);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(696);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(46971);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(17666);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(39486);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(53402);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_TerrainDepthTest_glsl_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(23233);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_TextureTransformUV_glsl_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(25541);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(34328);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_DiscardOrAdjustAlpha_glsl_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(4139);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(60915);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(63592);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(60840);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(1411);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(35449);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(72196);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(79856);
/* harmony import */ var _views_3d_webgl_engine_effects_weather_SnowCover_glsl_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(77581);
/* harmony import */ var _views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(50645);
/* harmony import */ var _views_3d_webgl_engine_shaders_OutputColorHighlightOID_glsl_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(19274);
/* harmony import */ var _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(96028);
/* harmony import */ var _webscene_support_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(63199);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function K(K){const Q=new _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_36__/* .ShaderBuilder */ .N5,{attributes:X,vertex:Y,fragment:Z,varyings:ee}=Q,{output:re,normalType:oe,offsetBackfaces:ie,instancedColor:ae,spherical:le,receiveShadows:se,snowCover:ne,pbrMode:te,textureAlphaPremultiplied:de,instancedDoublePrecision:ce,hasVertexColors:me,hasVertexTangents:ge,hasColorTexture:ve,hasNormalTexture:be,hasNormalTextureTransform:ue,hasColorTextureTransform:we,hasBloom:pe}=K;if((0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_27__/* .addProjViewLocalOrigin */ .NB)(Y,K),X.add(_views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_34__/* .VertexAttribute */ .r.POSITION,"vec3"),ee.add("vpos","vec3",{invariant:!0}),Q.include(_views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_24__/* .VisualVariables */ .A,K),Q.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .InstancedDoublePrecision */ .B,K),Q.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_12__/* .VerticalOffset */ .G,K),Q.include(_views_3d_webgl_engine_core_shaderLibrary_shading_TextureTransformUV_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .colorTextureUV */ .q2,K),!(0,_views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_3__/* .isColorOrColorEmission */ .RN)(re))return Q.include(_views_3d_webgl_engine_core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .DefaultMaterialAuxiliaryPasses */ .E,K),Q;Q.include(_views_3d_webgl_engine_core_shaderLibrary_shading_TextureTransformUV_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .normalTextureUV */ .Sx,K),Q.include(_views_3d_webgl_engine_core_shaderLibrary_shading_TextureTransformUV_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .emissiveTextureUV */ .MU,K),Q.include(_views_3d_webgl_engine_core_shaderLibrary_shading_TextureTransformUV_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .occlusionTextureUV */ .O1,K),Q.include(_views_3d_webgl_engine_core_shaderLibrary_shading_TextureTransformUV_glsl_js__WEBPACK_IMPORTED_MODULE_23__/* .metallicRoughnessTextureUV */ .QM,K),(0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_27__/* .addCameraPosition */ .yu)(Y,K),Q.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__/* .NormalAttribute */ .Y,K),Q.include(_views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_5__/* .Transform */ .d,K);const he=oe===_views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__/* .NormalType */ .W.Attribute||oe===_views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__/* .NormalType */ .W.Compressed;return he&&ie&&Q.include(_views_3d_webgl_engine_core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .Offset */ .M),Q.include(_views_3d_webgl_engine_core_shaderLibrary_shading_ComputeNormalTexture_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .ComputeNormalTexture */ .W,K),Q.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .VertexNormal */ .Mh,K),ae&&Q.attributes.add(_views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_34__/* .VertexAttribute */ .r.INSTANCECOLOR,"vec4"),ee.add("vPositionLocal","vec3"),Q.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_9__/* .TextureCoordinateAttribute */ .U,K),Q.include(_views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .ForwardLinearDepth */ .oD,K),Q.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_8__/* .SymbolColor */ .K,K),Q.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_10__/* .VertexColor */ .c,K),Y.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_29__/* .Float4PassUniform */ .E("externalColor",(r=>"ignore"===r.colorMixMode?_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_0__/* .ONES */ .Un:r.externalColor))),ee.add("vcolorExt","vec4"),Q.include(_views_3d_webgl_engine_core_shaderLibrary_shading_TerrainDepthTest_glsl_js__WEBPACK_IMPORTED_MODULE_22__/* .terrainDepthTest */ .Z,K),Y.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`
    forwardNormalizedVertexColor();
    vcolorExt = externalColor;
    ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_31__.If)(ae,"vcolorExt *= instanceColor * 0.003921568627451;")}
    vcolorExt *= vvColor();
    vcolorExt *= getSymbolColor();
    forwardColorMixMode();

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_31__.If)(he,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_31__.If)(ge,"vTangent = dpTransformVertexTangent(tangent);")}
    gl_Position = transformPosition(proj, view, vpos);
    ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_31__.If)(he&&ie,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardLinearDepth();
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (vcolorExt.a < ${_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H.float(_webscene_support_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_37__/* .alphaCutoff */ .Q)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
  `),Q.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_16__/* .EvaluateSceneLighting */ .kA,K),Z.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_15__/* .EvaluateAmbientOcclusion */ .n,K),Q.include(_views_3d_webgl_engine_core_shaderLibrary_util_DiscardOrAdjustAlpha_glsl_js__WEBPACK_IMPORTED_MODULE_25__/* .DiscardOrAdjustAlphaPass */ .S,K),Q.include(ce?_views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_21__/* .ReadShadowMapPass */ .G:_views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_21__/* .ReadShadowMapDraw */ .Bz,K),Z.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .SliceDraw */ .HQ,K),Q.include(_views_3d_webgl_engine_shaders_OutputColorHighlightOID_glsl_js__WEBPACK_IMPORTED_MODULE_35__/* .outputColorHighlightOID */ .z,K),(0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_27__/* .addCameraPosition */ .yu)(Z,K),Z.uniforms.add(Y.uniforms.get("localOrigin"),new _views_3d_webgl_engine_core_shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_28__/* .Float3PassUniform */ .t("ambient",(e=>e.ambient)),new _views_3d_webgl_engine_core_shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_28__/* .Float3PassUniform */ .t("diffuse",(e=>e.diffuse)),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_30__/* .FloatPassUniform */ .m("opacity",(e=>e.opacity)),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_30__/* .FloatPassUniform */ .m("layerOpacity",(e=>e.layerOpacity))),ve&&Z.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_32__/* .Texture2DPassUniform */ .N("tex",(e=>e.texture))),Q.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_20__/* .PhysicallyBasedRenderingParameters */ ._Z,K),Z.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_19__/* .PhysicallyBasedRendering */ .c,K),Z.include(_views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_26__/* .MixExternalColor */ .N),Q.include(_views_3d_webgl_engine_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_18__/* .Normals */ .r,K),Z.include(_views_3d_webgl_engine_effects_weather_SnowCover_glsl_js__WEBPACK_IMPORTED_MODULE_33__/* .SnowCover */ .b,K),(0,_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_16__/* .addAmbientBoostFactor */ .a8)(Z),(0,_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_16__/* .addLightingGlobalFactor */ .eU)(Z),(0,_views_3d_webgl_engine_core_shaderLibrary_shading_MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_17__/* .addMainLightIntensity */ .O4)(Z),Z.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${ve?(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`
            vec4 texColor = texture(tex, ${we?"colorUV":"vuv0"});
            ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_31__.If)(de,"texColor.rgb /= texColor.a;")}
            discardOrAdjustAlpha(texColor);`:(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${oe===_views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__/* .NormalType */ .W.ScreenDerivative?(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`vec3 normal = screenDerivativeNormal(vPositionLocal);`:(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${se?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_31__.If)(le,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_31__.If)(me,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
    float opacity_ = layerOpacity * mixExternalOpacity(${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_31__.If)(me,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
    ${be?`mat3 tangentSpace = computeTangentSpace(${ge?"normal":"normal, vpos, vuv0"});\n            vec3 shadingNormal = computeTextureNormal(tangentSpace, ${ue?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
    vec3 normalGround = ${le?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

    ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_31__.If)(ne,(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`
          float snow = getSnow(normal, normalGround);
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${te===_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_20__/* .PBRMode */ .A9.Normal||te===_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_20__/* .PBRMode */ .A9.Schematic?(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            vec4 emission = ${pe?"vec4(0.0)":"getEmissions(albedo)"};
            ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_31__.If)(ne,"mrr = applySnowToMRR(mrr, snow);\n                 emission = snowCoverForEmissions(emission, snow);")}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_31__/* .glsl */ .H)`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOID(finalColor, vpos, albedo ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_31__.If)(ne,", snow")});
  `),Q}const Q=Object.freeze(Object.defineProperty({__proto__:null,build:K},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 3458:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ _),
/* harmony export */   b: () => (/* binding */ R)
/* harmony export */ });
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40641);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26163);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55274);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1110);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66012);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24682);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81283);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53429);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26139);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39739);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(54009);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23399);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3325);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(93929);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(696);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(17666);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(39486);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(53402);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_TerrainDepthTest_glsl_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(23233);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(34328);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_DiscardOrAdjustAlpha_glsl_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(4139);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(60915);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(63592);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(60840);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(1411);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(35449);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(72196);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(79856);
/* harmony import */ var _views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(50645);
/* harmony import */ var _views_3d_webgl_engine_shaders_OutputColorHighlightOID_glsl_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(19274);
/* harmony import */ var _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(96028);
/* harmony import */ var _webscene_support_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(63199);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function R(R){const _=new _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_30__/* .ShaderBuilder */ .N5,{attributes:z,vertex:k,fragment:G,varyings:U}=_,{output:W,offsetBackfaces:H,instancedColor:q,pbrMode:J,snowCover:K,spherical:Q,hasBloom:X}=R,Y=J===_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_16__/* .PBRMode */ .A9.Normal||J===_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_16__/* .PBRMode */ .A9.Schematic;if((0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_22__/* .addProjViewLocalOrigin */ .NB)(k,R),z.add(_views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_28__/* .VertexAttribute */ .r.POSITION,"vec3"),U.add("vpos","vec3",{invariant:!0}),_.include(_views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_19__/* .VisualVariables */ .A,R),_.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_5__/* .InstancedDoublePrecision */ .B,R),_.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_10__/* .VerticalOffset */ .G,R),_.include(_views_3d_webgl_engine_core_shaderLibrary_shading_TerrainDepthTest_glsl_js__WEBPACK_IMPORTED_MODULE_18__/* .terrainDepthTest */ .Z,R),(0,_views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_2__/* .isColorOrColorEmission */ .RN)(W)&&((0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_22__/* .addCameraPosition */ .yu)(_.vertex,R),_.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .NormalAttribute */ .Y,R),_.include(_views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .Transform */ .d,R),H&&_.include(_views_3d_webgl_engine_core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .Offset */ .M),q&&_.attributes.add(_views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_28__/* .VertexAttribute */ .r.INSTANCECOLOR,"vec4"),U.add("vNormalWorld","vec3"),U.add("localvpos","vec3",{invariant:!0}),_.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_8__/* .TextureCoordinateAttribute */ .U,R),_.include(_views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .ForwardLinearDepth */ .oD,R),_.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_7__/* .SymbolColor */ .K,R),_.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_9__/* .VertexColor */ .c,R),k.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_24__/* .Float4PassUniform */ .E("externalColor",(e=>e.externalColor))),U.add("vcolorExt","vec4"),k.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_26__/* .glsl */ .H)`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_26__.If)(q,"vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      bool alphaCut = vcolorExt.a < ${_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_26__/* .glsl */ .H.float(_webscene_support_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_31__/* .alphaCutoff */ .Q)};
      vpos = getVertexInLocalOriginSpace();
      localvpos = vpos - view[3].xyz;
      vpos = subtractOrigin(vpos);
      vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
      vpos = addVerticalOffset(vpos, localOrigin);
      vec4 basePosition = transformPosition(proj, view, vpos);

      forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
      forwardLinearDepth();
      forwardTextureCoordinates();

      gl_Position = alphaCut ? vec4(1e38, 1e38, 1e38, 1.0) :
      ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_26__.If)(H,"offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);","basePosition;")}
    `)),(0,_views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_2__/* .isColorOrColorEmission */ .RN)(W)){const{hasColorTexture:e,hasColorTextureTransform:o,receiveShadows:r}=R;_.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .EvaluateSceneLighting */ .kA,R),G.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_12__/* .EvaluateAmbientOcclusion */ .n,R),_.include(_views_3d_webgl_engine_core_shaderLibrary_util_DiscardOrAdjustAlpha_glsl_js__WEBPACK_IMPORTED_MODULE_20__/* .DiscardOrAdjustAlphaPass */ .S,R),_.include(R.instancedDoublePrecision?_views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_17__/* .ReadShadowMapPass */ .G:_views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_17__/* .ReadShadowMapDraw */ .Bz,R),G.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .SliceDraw */ .HQ,R),_.include(_views_3d_webgl_engine_shaders_OutputColorHighlightOID_glsl_js__WEBPACK_IMPORTED_MODULE_29__/* .outputColorHighlightOID */ .z,R),(0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_22__/* .addCameraPosition */ .yu)(G,R),(0,_views_3d_webgl_engine_core_shaderLibrary_shading_MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .addMainLightDirection */ .Gc)(G),(0,_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .addAmbientBoostFactor */ .a8)(G),(0,_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .addLightingGlobalFactor */ .eU)(G),G.uniforms.add(k.uniforms.get("localOrigin"),k.uniforms.get("view"),new _views_3d_webgl_engine_core_shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_23__/* .Float3PassUniform */ .t("ambient",(e=>e.ambient)),new _views_3d_webgl_engine_core_shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_23__/* .Float3PassUniform */ .t("diffuse",(e=>e.diffuse)),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_25__/* .FloatPassUniform */ .m("opacity",(e=>e.opacity)),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_25__/* .FloatPassUniform */ .m("layerOpacity",(e=>e.layerOpacity))),e&&G.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_27__/* .Texture2DPassUniform */ .N("tex",(e=>e.texture))),_.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_16__/* .PhysicallyBasedRenderingParameters */ ._Z,R),G.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_15__/* .PhysicallyBasedRendering */ .c,R),G.include(_views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_21__/* .MixExternalColor */ .N),(0,_views_3d_webgl_engine_core_shaderLibrary_shading_MainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .addMainLightIntensity */ .O4)(G),G.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_26__/* .glsl */ .H)`
      discardBySlice(vpos);
      discardByTerrainDepth();
      vec4 texColor = ${e?`texture(tex, ${o?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_26__.If)(e,`${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_26__.If)(R.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}\n        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${r?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":Q?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};
      vec3 matColor = max(ambient, diffuse);
      ${R.hasVertexColors?(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_26__/* .glsl */ .H)`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_26__/* .glsl */ .H)`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
      ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_26__.If)(K,"albedo = mix(albedo, vec3(1), 0.9);")}
      ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_26__/* .glsl */ .H)`vec3 shadingNormal = normalize(vNormalWorld);
             albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}
      ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_26__.If)(Y,`vec3 normalGround = ${Q?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${Y?(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_26__/* .glsl */ .H)`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_26__.If)(K,(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_26__/* .glsl */ .H)`mrr = applySnowToMRR(mrr, 1.0)`)}
            vec4 emission = ${K||X?"vec4(0.0)":"getEmissions(albedo)"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_26__/* .glsl */ .H)`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos, albedo ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_26__.If)(K,", 1.0")});`)}return _.include(_views_3d_webgl_engine_core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .DefaultMaterialAuxiliaryPasses */ .E,R),_}const _=Object.freeze(Object.defineProperty({__proto__:null,build:R},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 51522:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ g),
/* harmony export */   b: () => (/* binding */ m),
/* harmony export */   g: () => (/* binding */ v)
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60704);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59646);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ScreenSpacePass_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16961);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_output_ReadDepth_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65743);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_CameraSpace_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1062);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float2BindUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74767);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54473);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_FloatBindUniform_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17983);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(35449);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72196);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(79856);
/* harmony import */ var _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(96028);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const d=16;function m(){const r=new _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_11__/* .ShaderBuilder */ .N5,m=r.fragment;return r.include(_views_3d_webgl_engine_core_shaderLibrary_ScreenSpacePass_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .ScreenSpacePass */ .c),r.include(_views_3d_webgl_engine_core_shaderLibrary_util_CameraSpace_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .CameraSpace */ .Ir),m.include(_views_3d_webgl_engine_core_shaderLibrary_output_ReadDepth_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .ReadDepth */ .E),m.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_FloatBindUniform_js__WEBPACK_IMPORTED_MODULE_7__/* .FloatBindUniform */ .U("radius",(e=>v(e.camera)))).code.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_9__/* .glsl */ .H)`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),m.code.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_9__/* .glsl */ .H)`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),r.outputs.add("fragOcclusion","float"),m.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_10__/* .Texture2DPassUniform */ .N("normalMap",(e=>e.normalTexture)),new _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_10__/* .Texture2DPassUniform */ .N("depthMap",(e=>e.depthTexture)),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_8__/* .FloatPassUniform */ .m("projScale",(e=>e.projScale)),new _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_10__/* .Texture2DPassUniform */ .N("rnm",(e=>e.noiseTexture)),new _views_3d_webgl_engine_core_shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_6__/* .Float2PassUniform */ .G("rnmScale",((r,t)=>(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .hZ)(p,t.camera.fullWidth/r.noiseTexture.descriptor.width,t.camera.fullHeight/r.noiseTexture.descriptor.height))),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_8__/* .FloatPassUniform */ .m("intensity",(e=>e.intensity)),new _views_3d_webgl_engine_core_shaderModules_Float2BindUniform_js__WEBPACK_IMPORTED_MODULE_5__/* .Float2BindUniform */ .E("screenSize",(r=>(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .hZ)(p,r.camera.fullWidth,r.camera.fullHeight)))).main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_9__/* .glsl */ .H)`
    float depth = depthFromTexture(depthMap, uv);

    // Early out if depth is out of range, such as in the sky
    if (depth >= 1.0 || depth <= 0.0) {
      fragOcclusion = 1.0;
      return;
    }

    // get the normal of current fragment
    ivec2 iuv = ivec2(uv * vec2(textureSize(normalMap, 0)));
    vec4 norm4 = texelFetch(normalMap, iuv, 0);
    if(norm4.a != 1.0) {
      fragOcclusion = 1.0;
      return;
    }
    vec3 norm = normalize(norm4.xyz * 2.0 - 1.0);

    float currentPixelDepth = linearizeDepth(depth);
    vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

    float sum = 0.0;
    vec3 tapPixelPos;

    vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

    // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
    // bug or deviation from CE somewhere else?
    float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

    for(int i = 0; i < ${_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_9__/* .glsl */ .H.int(d)}; ++i) {
      vec2 unitOffset = reflect(sphere[i], fres).xy;
      vec2 offset = vec2(-unitOffset * radius * ps);

      // don't use current or very nearby samples
      if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
        continue;
      }

      vec2 tc = vec2(gl_FragCoord.xy + offset);
      if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
      vec2 tcTap = tc / screenSize;
      float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

      tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

      sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
    }

    // output the result
    float A = max(1.0 - sum * intensity / float(${_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_9__/* .glsl */ .H.int(d)}), 0.0);

    // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
    A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

    fragOcclusion = A;
  `),r}function v(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const p=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)(),g=Object.freeze(Object.defineProperty({__proto__:null,build:m,getRadius:v},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 45789:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ f),
/* harmony export */   b: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ScreenSpacePass_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16961);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_output_ReadDepth_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65743);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float2DrawUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96320);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35449);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72196);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52293);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79856);
/* harmony import */ var _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(96028);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const d=4;function i(){const i=new _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_7__/* .ShaderBuilder */ .N5,f=i.fragment;i.include(_views_3d_webgl_engine_core_shaderLibrary_ScreenSpacePass_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .ScreenSpacePass */ .c);const u=(d+1)/2,c=1/(2*u*u);return f.include(_views_3d_webgl_engine_core_shaderLibrary_output_ReadDepth_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .ReadDepth */ .E),f.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_6__/* .Texture2DPassUniform */ .N("depthMap",(e=>e.depthTexture)),new _views_3d_webgl_engine_core_shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_5__/* .Texture2DDrawUniform */ .o("tex",(e=>e.colorTexture)),new _views_3d_webgl_engine_core_shaderModules_Float2DrawUniform_js__WEBPACK_IMPORTED_MODULE_2__/* .Float2DrawUniform */ .t("blurSize",(e=>e.blurSize)),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_3__/* .FloatPassUniform */ .m("projScale",((e,r)=>{const t=r.camera.distance;return t>5e4?Math.max(0,e.projScale-(t-5e4)):e.projScale}))),f.code.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .glsl */ .H)`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .glsl */ .H.float(c)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),i.outputs.add("fragBlur","float"),f.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .glsl */ .H)`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .glsl */ .H.int(d)}; r <= ${_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .glsl */ .H.int(d)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),i}const f=Object.freeze(Object.defineProperty({__proto__:null,build:i},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 28769:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ Z),
/* harmony export */   b: () => (/* binding */ ks),
/* harmony export */   d: () => (/* binding */ W),
/* harmony export */   f: () => (/* binding */ J),
/* harmony export */   h: () => (/* binding */ ts),
/* harmony export */   j: () => (/* binding */ gs),
/* harmony export */   u: () => (/* binding */ K)
/* harmony export */ });
/* unused harmony exports A, B, C, D, E, c, e, g, i, k, l, m, n, o, p, q, r, s, t, v, w, x, y, z */
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(539);
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92504);
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(92114);
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21742);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86128);
/* harmony import */ var _vec32_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24121);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58359);
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80510);
/* harmony import */ var _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(58331);
/* harmony import */ var _geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22759);
/* harmony import */ var _geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38774);
/* harmony import */ var _geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(10151);
/* harmony import */ var _geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(16597);
/* harmony import */ var _geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(45573);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const z=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");class D{constructor(){this.plane=(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .create */ .vt)(),this.origin=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),this.basis1=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),this.basis2=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)()}}const G=D;function W(s=Ms){return{plane:(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .create */ .vt)(s.plane),origin:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__/* .clone */ .o8)(s.origin),basis1:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__/* .clone */ .o8)(s.basis1),basis2:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__/* .clone */ .o8)(s.basis2)}}function X(s,t,i){const n=As.get();return n.origin=s,n.basis1=t,n.basis2=i,n.plane=(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .wrap */ .LV)(0,0,0,0),K(n),n}function Z(s,t=W()){return J(s.origin,s.basis1,s.basis2,t)}function H(s,t){(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.c)(t.origin,s.origin),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.c)(t.basis1,s.basis1),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.c)(t.basis2,s.basis2),(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .copy */ .C)(t.plane,s.plane)}function J(s,t,i,n=W()){return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.c)(n.origin,s),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.c)(n.basis1,t),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.c)(n.basis2,i),K(n),ws(n,"fromValues()"),n}function K(s){(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .fromVectorsAndPoint */ .mR)(s.basis2,s.basis1,s.origin,s.plane)}function Q(s,t,i){s!==i&&Z(s,i);const n=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.g)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__/* .sv3d */ .rq.get(),ys(s),t);return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.f)(i.origin,i.origin,n),i.plane[3]-=t,i}function $(s,t,i){return ts(t,i),Q(i,ls(s,s.origin),i),i}function ss(s,t){const i=s.basis1[0],n=s.basis2[1],[r,o]=s.origin;return (0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_7__/* .fromValues */ .fA)(r-i,o-n,r+i,o+n,t)}function ts(s,t=W()){const i=(s[2]-s[0])/2,n=(s[3]-s[1])/2;return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.i)(t.origin,s[0]+i,s[1]+n,0),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.i)(t.basis1,i,0,0),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.i)(t.basis2,0,n,0),(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .fromValues */ .fA)(0,0,1,0,t.plane),t}function is(s,t,i){return!!(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .intersectRay */ .Ui)(s.plane,t,i)&&Ps(s,i)}function ns(s,t,i){if(is(s,t,i))return i;const n=rs(s,t,_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__/* .sv3d */ .rq.get());return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.f)(i,t.origin,(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.g)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__/* .sv3d */ .rq.get(),t.direction,(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.j)(t.origin,n)/(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.l)(t.direction))),i}function rs(s,i,n){const r=Ss.get();xs(s,i,r,Ss.get());let o=Number.POSITIVE_INFINITY;for(const e of Es){const c=Ns(s,e,Ts.get()),u=_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__/* .sv3d */ .rq.get();if((0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .intersectLineSegment */ .T7)(r,c,u)){const s=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.E)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__/* .sv3d */ .rq.get(),i.origin,u),r=Math.abs((0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .acosClamped */ .XM)((0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.e)(i.direction,s)));r<o&&(o=r,(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.c)(n,u))}}return o===Number.POSITIVE_INFINITY?es(s,i,n):n}function os(s,t){return(t-s)/t}function es(s,t,i){if(is(s,t,i))return i;const n=Ss.get(),r=Ss.get();xs(s,t,n,r);let o=Number.POSITIVE_INFINITY;for(const e of Es){const c=Ns(s,e,Ts.get()),u=_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__/* .sv3d */ .rq.get();if((0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .intersectLineSegmentClamp */ .gv)(n,c,u)){const s=(0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_11__/* .distance2 */ .kb)(t,u);if(!(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .isPointInside */ .Tj)(r,u))continue;s<o&&(o=s,(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.c)(i,u))}}return us(s,t.origin)<o&&as(s,t.origin,i),i}function as(s,t,i){const n=(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .projectPoint */ ._I)(s.plane,t,_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__/* .sv3d */ .rq.get()),r=(0,_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_9__/* .projectPointClamp */ .H6)(vs(s,s.basis1),n,-1,1,_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__/* .sv3d */ .rq.get()),o=(0,_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_9__/* .projectPointClamp */ .H6)(vs(s,s.basis2),n,-1,1,_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__/* .sv3d */ .rq.get());return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.d)(i,(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.f)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__/* .sv3d */ .rq.get(),r,o),s.origin),i}function cs(s,t,i){const{origin:n,basis1:r,basis2:o}=s,e=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.d)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__/* .sv3d */ .rq.get(),t,n),a=(0,_geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_12__/* .projectPointSignedLength */ .gr)(r,e),c=(0,_geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_12__/* .projectPointSignedLength */ .gr)(o,e),u=(0,_geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_12__/* .projectPointSignedLength */ .gr)(ys(s),e);return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.i)(i,a,c,u)}function us(s,t){const i=cs(s,t,_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__/* .sv3d */ .rq.get()),{basis1:n,basis2:r}=s,o=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.l)(n),e=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.l)(r),a=Math.max(Math.abs(i[0])-o,0),c=Math.max(Math.abs(i[1])-e,0),u=i[2];return a*a+c*c+u*u}function gs(s,t){return Math.sqrt(us(s,t))}function bs(s,t){let i=Number.NEGATIVE_INFINITY;for(const n of Es){const r=Ns(s,n,Ts.get()),o=(0,_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_9__/* .distance2 */ .kb)(r,t);o>i&&(i=o)}return Math.sqrt(i)}function fs(s,t){return (0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .isPointInside */ .Tj)(s.plane,t)&&Ps(s,t)}function ps(s,t,i,n){return Is(s,i,n)}function ls(s,t){const i=-s.plane[3];return (0,_geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_12__/* .projectPointSignedLength */ .gr)(ys(s),t)-i}function ms(s,t,i,n){const r=ls(s,t),o=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.g)(Vs,ys(s),i-r);return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.f)(n,t,o),n}function ds(s,t){return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.q)(s.basis1,t.basis1)&&(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.q)(s.basis2,t.basis2)&&(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.q)(s.origin,t.origin)}function hs(s,t,i){return s!==i&&Z(s,i),(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_3__/* .invert */ .B8)(_s,t),(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_3__/* .transpose */ .mg)(_s,_s),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.t)(i.basis1,s.basis1,_s),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.t)(i.basis2,s.basis2,_s),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.t)((0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .getNormal */ .Qj)(i.plane),(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .getNormal */ .Qj)(s.plane),_s),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.t)(i.origin,s.origin,t),(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .setOffsetFromPoint */ .mP)(i.plane,i.plane,i.origin),i}function js(s,t,i,n){return s!==n&&Z(s,n),(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_3__/* .fromRotation */ .$0)(Os,t,i),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.t)(n.basis1,s.basis1,Os),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.t)(n.basis2,s.basis2,Os),K(n),n}function ys(s){return (0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .getNormal */ .Qj)(s.plane)}function Is(s,t,i){switch(t){case _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_8__/* .Axis */ ._.X:(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.c)(i,s.basis1),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.n)(i,i);break;case _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_8__/* .Axis */ ._.Y:(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.c)(i,s.basis2),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.n)(i,i);break;case _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_8__/* .Axis */ ._.Z:(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.c)(i,ys(s))}return i}function Ps(s,t){const i=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.d)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__/* .sv3d */ .rq.get(),t,s.origin),n=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.k)(s.basis1),r=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.k)(s.basis2),o=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.e)(s.basis1,i),e=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.e)(s.basis2,i);return-o-n<0&&o-n<0&&-e-r<0&&e-r<0}function vs(s,t){const i=Ts.get();return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.c)(i.origin,s.origin),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.c)(i.vector,t),i}function Ns(s,t,i){const{basis1:n,basis2:r,origin:o}=s,e=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.g)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__/* .sv3d */ .rq.get(),n,t.origin[0]),a=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.g)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__/* .sv3d */ .rq.get(),r,t.origin[1]);(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.f)(i.origin,e,a),(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.f)(i.origin,i.origin,o);const g=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.g)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__/* .sv3d */ .rq.get(),n,t.direction[0]),b=(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.g)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_13__/* .sv3d */ .rq.get(),r,t.direction[1]);return (0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.g)(i.vector,(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.f)(g,g,b),2),i}function ws(s,t){Math.abs((0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.e)(s.basis1,s.basis2)/((0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.l)(s.basis1)*(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.l)(s.basis2)))>1e-6&&z().warn(t,"Provided basis vectors are not perpendicular"),Math.abs((0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.e)(s.basis1,ys(s)))>1e-6&&z().warn(t,"Basis vectors and plane normal are not perpendicular"),Math.abs(-(0,_vec32_js__WEBPACK_IMPORTED_MODULE_5__.e)(ys(s),s.origin)-s.plane[3])>1e-6&&z().warn(t,"Plane offset is not consistent with plane origin")}function xs(s,t,i,n){const r=ys(s);(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .fromVectorsAndPoint */ .mR)(r,t.direction,t.origin,i),(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .fromVectorsAndPoint */ .mR)((0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .getNormal */ .Qj)(i),r,t.origin,n)}const Ms={plane:(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .create */ .vt)(),origin:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__/* .fromValues */ .fA)(0,0,0),basis1:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__/* .fromValues */ .fA)(1,0,0),basis2:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__/* .fromValues */ .fA)(0,1,0)},Ss=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_14__/* .ObjectStack */ .I(_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_10__/* .create */ .vt),Ts=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_14__/* .ObjectStack */ .I(_geometry_support_lineSegment_js__WEBPACK_IMPORTED_MODULE_9__/* .create */ .vt),Vs=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),As=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_14__/* .ObjectStack */ .I((()=>W())),Es=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],_s=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),Os=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),ks=Object.freeze(Object.defineProperty({__proto__:null,BoundedPlaneClass:G,altitudeAt:ls,axisAt:ps,cameraFrustumCoverage:os,closestPoint:es,closestPointOnSilhouette:rs,copy:Z,copyWithoutVerify:H,create:W,distance:gs,distance2:us,distanceToSilhouette:bs,elevate:Q,equals:ds,extrusionContainsPoint:fs,fromAABoundingRect:ts,fromValues:J,getExtent:ss,intersectRay:is,intersectRayClosestSilhouette:ns,normal:ys,projectPoint:as,projectPointLocal:cs,rotate:js,setAltitudeAt:ms,setExtent:$,transform:hs,up:Ms,updateUnboundedPlane:K,wrap:X},Symbol.toStringTag,{value:"Module"}));


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

/***/ 50961:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AK: () => (/* binding */ e),
/* harmony export */   Wz: () => (/* binding */ a),
/* harmony export */   oe: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony export compactFloatArray */
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86942);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function n(n,t=!1){return n<=_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9?t?new Array(n).fill(0):new Array(n):new Float32Array(n)}function t(n){return Array.isArray(n)?n.length<r?n:new Float32Array(n):n.length<r?Array.from(n):n}function a(n){return(Array.isArray(n)?n.length:n.byteLength/8)<=_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9?Array.from(n):new Float32Array(n)}function e(r,n,t){return Array.isArray(r)?r.slice(n,n+t):r.subarray(n,n+t)}


/***/ }),

/***/ 42965:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dg: () => (/* binding */ e),
/* harmony export */   EH: () => (/* binding */ U),
/* harmony export */   JH: () => (/* binding */ a),
/* harmony export */   my: () => (/* binding */ f),
/* harmony export */   tM: () => (/* binding */ A),
/* harmony export */   uW: () => (/* binding */ t)
/* harmony export */ });
/* unused harmony export pruneIndexArrays */
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86942);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function t(r){return e(r,!0)}function e(t,e){if(Array.isArray(t)){if(t.length<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9)return t}else if(t.length<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9)return Array.from(t);let f=!0,a=!0;return t.some(((r,n)=>(f=f&&0===r,a=a&&r===n,!f&&!a))),f?U(t.length):a?A(t.length):(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedArray */ .iu)(t)&&t.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT?t:i(t,!e)}function i(r,t){for(const e of r){if(e>=65536)return (0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedArray */ .iu)(r)?r:new Uint32Array(r);e>=256&&(t=!1)}return t?new Uint8Array(r):new Uint16Array(r)}function f(n){return n<=_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9?new Array(n):n<=65536?new Uint16Array(n):new Uint32Array(n)}function a(n){return n<=_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9?new Array(n):new Uint32Array(n)}let u=l(131072);const o=[0],y=(()=>{const r=new Uint16Array(65536);for(let n=0;n<r.length;++n)r[n]=n;return r})();function A(n){return 1===n?o:n<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9?Array.from(new Uint16Array(y.buffer,0,n)):n<y.length?new Uint16Array(y.buffer,0,n):(n>u.length&&(u=l(Math.max(2*u.length,n))),new Uint32Array(u.buffer,0,n))}function l(r){const n=new Uint32Array(r);for(let t=0;t<n.length;t++)n[t]=t;return n}let w=new Uint8Array(65536);function U(n){if(1===n)return o;if(n<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9)return new Array(n).fill(0);if(n>w.length){const r=Math.max(2*w.length,n);w=new Uint8Array(r)}return new Uint8Array(w.buffer,0,n)}function c(){u=l(131072),w=new Uint8Array(65536)}


/***/ }),

/***/ 57813:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y$: () => (/* binding */ f),
  XW: () => (/* binding */ a),
  qB: () => (/* binding */ B),
  Qt: () => (/* binding */ H),
  My: () => (/* binding */ P),
  bf: () => (/* binding */ z),
  jZ: () => (/* binding */ d),
  j0: () => (/* binding */ x),
  Sx: () => (/* binding */ E),
  E$: () => (/* binding */ A),
  h: () => (/* binding */ w),
  P: () => (/* binding */ v),
  SL: () => (/* binding */ I),
  gH: () => (/* binding */ y),
  ZD: () => (/* binding */ p),
  si: () => (/* binding */ b),
  mJ: () => (/* binding */ J),
  UL: () => (/* binding */ Q),
  D6: () => (/* binding */ C),
  Yi: () => (/* binding */ L),
  An: () => (/* binding */ S),
  LC: () => (/* binding */ j),
  xs: () => (/* binding */ o),
  EC: () => (/* binding */ h),
  Xm: () => (/* binding */ U),
  Vp: () => (/* binding */ K),
  zD: () => (/* binding */ R),
  m8: () => (/* binding */ D),
  nS: () => (/* binding */ V),
  H$: () => (/* binding */ k),
  eI: () => (/* binding */ O),
  Eq: () => (/* binding */ T),
  jz: () => (/* binding */ m),
  Aj: () => (/* binding */ F),
  E7: () => (/* binding */ N),
  Y4: () => (/* binding */ W),
  TX: () => (/* binding */ G),
  Uz: () => (/* binding */ M),
  ml: () => (/* binding */ q),
  XP: () => (/* binding */ g)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/float16.js
var float16 = __webpack_require__(11449);
;// ../node_modules/@arcgis/core/geometry/support/buffer/internals/Mat3.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class t{static{this.ElementCount=9}constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.elementCount=9;const i=this.TypedArrayConstructor;void 0===f&&(f=9*i.BYTES_PER_ELEMENT);const d=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,d):new i(e,d,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getMat(t,e){let r=t*this.typedBufferStride;for(let f=0;f<9;f++)e[f]=this.typedBuffer[r++];return e}setMat(t,e){let r=t*this.typedBufferStride;for(let f=0;f<9;f++)this.typedBuffer[r++]=e[f]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,d=r*e.typedBufferStride;for(let u=0;u<9;++u)f[i++]=s[d++]}get buffer(){return this.typedBuffer.buffer}}

;// ../node_modules/@arcgis/core/geometry/support/buffer/internals/Mat4.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Mat4_t{static{this.ElementCount=16}constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.elementCount=16;const i=this.TypedArrayConstructor;void 0===f&&(f=16*i.BYTES_PER_ELEMENT);const d=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,d):new i(e,d,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getMat(t,e){let r=t*this.typedBufferStride;for(let f=0;f<16;f++)e[f]=this.typedBuffer[r++];return e}setMat(t,e){let r=t*this.typedBufferStride;for(let f=0;f<16;f++)this.typedBuffer[r++]=e[f]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}copyFrom(t,e,r){this.copyFromTypedBuffer(t,e.typedBuffer,r*e.typedBufferStride)}copyFromTypedBuffer(t,e,r){const f=this.typedBuffer;let s=t*this.typedBufferStride;for(let i=0;i<16;++i)f[s++]=e[r++]}get buffer(){return this.typedBuffer.buffer}}

;// ../node_modules/@arcgis/core/geometry/support/buffer/internals/Scalar.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Scalar_t{static{this.ElementCount=1}constructor(t,e,r=0,s,i){this.TypedArrayConstructor=t,this.elementCount=1;const f=this.TypedArrayConstructor;void 0===s&&(s=f.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==i?new f(e,u):new f(e,u,(i-r)/f.BYTES_PER_ELEMENT),this.stride=s,this.typedBufferStride=s/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride)}sliceBuffer(t,e,r=this.count-e){const s=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,s,this.stride,s+r*this.stride)}get(t){return this.typedBuffer[t*this.typedBufferStride]}set(t,e){this.typedBuffer[t*this.typedBufferStride]=e}get buffer(){return this.typedBuffer.buffer}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/math/vec2.js
var vec2 = __webpack_require__(60704);
;// ../node_modules/@arcgis/core/geometry/support/buffer/internals/Vec2.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class e{static{this.ElementCount=2}constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.start=r,this.elementCount=2;const i=this.TypedArrayConstructor;void 0===f&&(f=2*i.BYTES_PER_ELEMENT);const d=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,d):new i(e,d,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getVec(e,r){return e*=this.typedBufferStride,(0,vec2/* set */.hZ)(r,this.typedBuffer[e],this.typedBuffer[e+1])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t]=e[1]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t]=r}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,d=r*e.typedBufferStride;f[i++]=s[d++],f[i]=s[d]}get buffer(){return this.typedBuffer.buffer}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(24121);
;// ../node_modules/@arcgis/core/geometry/support/buffer/internals/Vec3.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Vec3_e{static{this.ElementCount=3}constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.elementCount=3;const i=this.TypedArrayConstructor;void 0===f&&(f=3*i.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,u):new i(e,u,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getVec(e,r){return e*=this.typedBufferStride,(0,vec32.i)(r,this.typedBuffer[e],this.typedBuffer[e+1],this.typedBuffer[e+2])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t++]=e[1],this.typedBuffer[t]=e[2]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r,f){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t++]=r,this.typedBuffer[t]=f}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,u=r*e.typedBufferStride;f[i++]=s[u++],f[i++]=s[u++],f[i]=s[u]}get buffer(){return this.typedBuffer.buffer}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec42.js
var vec42 = __webpack_require__(2662);
;// ../node_modules/@arcgis/core/geometry/support/buffer/internals/Vec4.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Vec4_e{static{this.ElementCount=4}constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.start=r,this.elementCount=4;const i=this.TypedArrayConstructor;void 0===f&&(f=4*i.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,u):new i(e,u,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getVec(e,r){return e*=this.typedBufferStride,(0,vec42.s)(r,this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t++]=e[1],this.typedBuffer[t++]=e[2],this.typedBuffer[t]=e[3]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r,f,s){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t++]=r,this.typedBuffer[t++]=f,this.typedBuffer[t]=s}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,u=r*e.typedBufferStride;f[i++]=s[u++],f[i++]=s[u++],f[i++]=s[u++],f[i]=s[u]}get buffer(){return this.typedBuffer.buffer}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js
var Util = __webpack_require__(58947);
;// ../node_modules/@arcgis/core/geometry/support/buffer/BufferView.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class a extends Scalar_t{constructor(s,r=0,i,n){(0,Util/* assert */.vA)(float16/* hasNativeFloat16Array */.SX),super((0,float16/* getFloat16ArrayConstructor */.pX)(),s,r,i,n),this.elementType="f16"}static{this.ElementType="f16"}}class f extends Scalar_t{constructor(e,t=0,s,r){super(Float32Array,e,t,s,r),this.elementType="f32"}static{this.ElementType="f32"}}class p extends e{constructor(s,r=0,i,n){(0,Util/* assert */.vA)(float16/* hasNativeFloat16Array */.SX),super((0,float16/* getFloat16ArrayConstructor */.pX)(),s,r,i,n),this.elementType="f16"}slice(e,t){return this.sliceBuffer(p,e,t)}static{this.ElementType="f16"}}class y extends e{constructor(e,t=0,s,r){super(Float32Array,e,t,s,r),this.elementType="f32"}slice(e,t){return this.sliceBuffer(y,e,t)}static{this.ElementType="f32"}}class h extends Vec3_e{constructor(s,r=0,i,n){(0,Util/* assert */.vA)(float16/* hasNativeFloat16Array */.SX),super((0,float16/* getFloat16ArrayConstructor */.pX)(),s,r,i,n),this.elementType="f16"}slice(e,t){return this.sliceBuffer(h,e,t)}static{this.ElementType="f16"}}class o extends Vec3_e{constructor(e,t=0,s,r){super(Float32Array,e,t,s,r),this.elementType="f32"}slice(e,t){return this.sliceBuffer(o,e,t)}static fromTypedArray(e,t){return new o(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}static{this.ElementType="f32"}}class m extends Vec4_e{constructor(s,r=0,i,n){(0,Util/* assert */.vA)(float16/* hasNativeFloat16Array */.SX),super((0,float16/* getFloat16ArrayConstructor */.pX)(),s,r,i,n),this.elementType="f16"}slice(e,t){return this.sliceBuffer(m,e,t)}static{this.ElementType="f16"}}class T extends Vec4_e{constructor(e,t=0,s,r){super(Float32Array,e,t,s,r),this.elementType="f32"}slice(e,t){return this.sliceBuffer(T,e,t)}static{this.ElementType="f32"}}class d extends t{constructor(e,t=0,s,r){super(Float32Array,e,t,s,r),this.elementType="f32"}slice(e,t){return this.sliceBuffer(d,e,t)}static{this.ElementType="f32"}}class x extends t{constructor(e,t=0,s,r){super(Float64Array,e,t,s,r),this.elementType="f64"}slice(e,t){return this.sliceBuffer(x,e,t)}static{this.ElementType="f64"}}class E extends Mat4_t{constructor(e,t=0,s,r){super(Float32Array,e,t,s,r),this.elementType="f32"}slice(e,t){return this.sliceBuffer(E,e,t)}static{this.ElementType="f32"}}class A extends Mat4_t{constructor(e,t=0,s,r){super(Float64Array,e,t,s,r),this.elementType="f64"}slice(e,t){return this.sliceBuffer(A,e,t)}static{this.ElementType="f64"}}class B extends Scalar_t{constructor(e,t=0,s,r){super(Float64Array,e,t,s,r),this.elementType="f64"}slice(e,t){return this.sliceBuffer(B,e,t)}static{this.ElementType="f64"}}class b extends e{constructor(e,t=0,s,r){super(Float64Array,e,t,s,r),this.elementType="f64"}slice(e,t){return this.sliceBuffer(b,e,t)}static{this.ElementType="f64"}}class U extends Vec3_e{constructor(e,t=0,s,r){super(Float64Array,e,t,s,r),this.elementType="f64"}slice(e,t){return this.sliceBuffer(U,e,t)}static fromTypedArray(e,t){return new U(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}static{this.ElementType="f64"}}class F extends Vec4_e{constructor(e,t=0,s,r){super(Float64Array,e,t,s,r),this.elementType="f64"}slice(e,t){return this.sliceBuffer(F,e,t)}static{this.ElementType="f64"}}class I extends Scalar_t{constructor(e,t=0,s,r){super(Uint8Array,e,t,s,r),this.elementType="u8"}slice(e,t){return this.sliceBuffer(I,e,t)}static{this.ElementType="u8"}}class j extends e{constructor(e,t=0,s,r){super(Uint8Array,e,t,s,r),this.elementType="u8"}slice(e,t){return this.sliceBuffer(j,e,t)}static{this.ElementType="u8"}}class O extends Vec3_e{constructor(e,t=0,s,r){super(Uint8Array,e,t,s,r),this.elementType="u8"}slice(e,t){return this.sliceBuffer(O,e,t)}static fromTypedArray(e,t){return new O(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}static{this.ElementType="u8"}}class g extends Vec4_e{constructor(e,t=0,s,r){super(Uint8Array,e,t,s,r),this.elementType="u8"}slice(e,t){return this.sliceBuffer(g,e,t)}static{this.ElementType="u8"}}class w extends Scalar_t{constructor(e,t=0,s,r){super(Uint16Array,e,t,s,r),this.elementType="u16"}slice(e,t){return this.sliceBuffer(w,e,t)}static{this.ElementType="u16"}}class L extends e{constructor(e,t=0,s,r){super(Uint16Array,e,t,s,r),this.elementType="u16"}slice(e,t){return this.sliceBuffer(L,e,t)}static{this.ElementType="u16"}}class V extends Vec3_e{constructor(e,t=0,s,r){super(Uint16Array,e,t,s,r),this.elementType="u16"}slice(e,t){return this.sliceBuffer(V,e,t)}static{this.ElementType="u16"}}class M extends Vec4_e{constructor(e,t=0,s,r){super(Uint16Array,e,t,s,r),this.elementType="u16"}slice(e,t){return this.sliceBuffer(M,e,t)}static{this.ElementType="u16"}}class v extends Scalar_t{constructor(e,t=0,s,r){super(Uint32Array,e,t,s,r),this.elementType="u32"}slice(e,t){return this.sliceBuffer(v,e,t)}static{this.ElementType="u32"}}class S extends e{constructor(e,t=0,s,r){super(Uint32Array,e,t,s,r),this.elementType="u32"}slice(e,t){return this.sliceBuffer(S,e,t)}static{this.ElementType="u32"}}class k extends Vec3_e{constructor(e,t=0,s,r){super(Uint32Array,e,t,s,r),this.elementType="u32"}slice(e,t){return this.sliceBuffer(k,e,t)}static{this.ElementType="u32"}}class q extends Vec4_e{constructor(e,t=0,s,r){super(Uint32Array,e,t,s,r),this.elementType="u32"}slice(e,t){return this.sliceBuffer(q,e,t)}static{this.ElementType="u32"}}class z extends Scalar_t{constructor(e,t=0,s,r){super(Int8Array,e,t,s,r),this.elementType="i8"}slice(e,t){return this.sliceBuffer(z,e,t)}static{this.ElementType="i8"}}class C extends e{constructor(e,t=0,s,r){super(Int8Array,e,t,s,r),this.elementType="i8"}slice(e,t){return this.sliceBuffer(C,e,t)}static{this.ElementType="i8"}}class D extends Vec3_e{constructor(e,t=0,s,r){super(Int8Array,e,t,s,r),this.elementType="i8"}slice(e,t){return this.sliceBuffer(D,e,t)}static{this.ElementType="i8"}}class G extends Vec4_e{constructor(e,t=0,s,r){super(Int8Array,e,t,s,r),this.elementType="i8"}slice(e,t){return this.sliceBuffer(G,e,t)}static{this.ElementType="i8"}}class H extends Scalar_t{constructor(e,t=0,s,r){super(Int16Array,e,t,s,r),this.elementType="i16"}slice(e,t){return this.sliceBuffer(H,e,t)}static{this.ElementType="i16"}}class J extends e{constructor(e,t=0,s,r){super(Int16Array,e,t,s,r),this.elementType="i16"}slice(e,t){return this.sliceBuffer(J,e,t)}static{this.ElementType="i16"}}class K extends Vec3_e{constructor(e,t=0,s,r){super(Int16Array,e,t,s,r),this.elementType="i16"}slice(e,t){return this.sliceBuffer(K,e,t)}static{this.ElementType="i16"}}class N extends Vec4_e{constructor(e,t=0,s,r){super(Int16Array,e,t,s,r),this.elementType="i16"}slice(e,t){return this.sliceBuffer(N,e,t)}static{this.ElementType="i16"}}class P extends Scalar_t{constructor(e,t=0,s,r){super(Int32Array,e,t,s,r),this.elementType="i32"}slice(e,t){return this.sliceBuffer(P,e,t)}static{this.ElementType="i32"}}class Q extends e{constructor(e,t=0,s,r){super(Int32Array,e,t,s,r),this.elementType="i32"}slice(e,t){return this.sliceBuffer(Q,e,t)}static{this.ElementType="i32"}}class R extends Vec3_e{constructor(e,t=0,s,r){super(Int32Array,e,t,s,r),this.elementType="i32"}slice(e,t){return this.sliceBuffer(R,e,t)}static{this.ElementType="i32"}}class W extends Vec4_e{constructor(e,t=0,s,r){super(Int32Array,e,t,s,r),this.elementType="i32"}slice(e,t){return this.sliceBuffer(W,e,t)}static{this.ElementType="i32"}}


/***/ }),

/***/ 32846:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GJ: () => (/* binding */ e)
/* harmony export */ });
/* unused harmony exports isInteger, isSigned, maximumValue */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(e){switch(e){case"u8":case"i8":return 1;case"u16":case"i16":case"f16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8}}function c(e){switch(e){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f16":case"f32":case"f64":return!0}}function s(e){switch(e){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f16":case"f32":case"f64":return!1}}function a(e){switch(e){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f16":return 65504;case"f32":return 3402823e32;case"f64":return 179769e303}}


/***/ }),

/***/ 11449:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bg: () => (/* binding */ t),
/* harmony export */   SX: () => (/* binding */ r),
/* harmony export */   pX: () => (/* binding */ l)
/* harmony export */ });
/* unused harmony exports disableNativeF16Array, resetNativeF16Array */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let n=globalThis.Float16Array;function t(...t){return new(n??Float32Array)(...t)}function l(){return n}let r=!!n;function o(){n=null,r=!1}function a(){n=globalThis.Float16Array,r=!!n}


/***/ }),

/***/ 76036:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _core_events_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64874);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function r(r,t){return new Promise(((n,o)=>{r.readyState>=HTMLMediaElement.HAVE_CURRENT_DATA?n():(t((0,_core_events_js__WEBPACK_IMPORTED_MODULE_0__/* .once */ .Oo)(r,"canplay",n)),t((0,_core_events_js__WEBPACK_IMPORTED_MODULE_0__/* .once */ .Oo)(r,"error",o)))}))}


/***/ }),

/***/ 74408:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ _)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var _;!function(_){_[_.ETC1_RGB=0]="ETC1_RGB",_[_.ETC2_RGBA=1]="ETC2_RGBA",_[_.BC1_RGB=2]="BC1_RGB",_[_.BC3_RGBA=3]="BC3_RGBA",_[_.BC4_R=4]="BC4_R",_[_.BC5_RG=5]="BC5_RG",_[_.BC7_M6_RGB=6]="BC7_M6_RGB",_[_.BC7_M5_RGBA=7]="BC7_M5_RGBA",_[_.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",_[_.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",_[_.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",_[_.ATC_RGB=11]="ATC_RGB",_[_.ATC_RGBA=12]="ATC_RGBA",_[_.FXT1_RGB=17]="FXT1_RGB",_[_.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",_[_.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",_[_.ETC2_EAC_R11=20]="ETC2_EAC_R11",_[_.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",_[_.RGBA32=13]="RGBA32",_[_.RGB565=14]="RGB565",_[_.BGR565=15]="BGR565",_[_.RGBA4444=16]="RGBA4444"}(_||(_={}));


/***/ }),

/***/ 34528:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86394);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
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

/***/ 69463:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gd: () => (/* binding */ Z),
/* harmony export */   J_: () => (/* binding */ X),
/* harmony export */   VC: () => (/* binding */ oe),
/* harmony export */   b3: () => (/* binding */ te),
/* harmony export */   s_: () => (/* binding */ W),
/* harmony export */   ul: () => (/* binding */ ie),
/* harmony export */   wI: () => (/* binding */ J)
/* harmony export */ });
/* unused harmony exports FastColorInfo, FastOpacityInfo, FastRotationInfo, FastRotationType, FastSizeInfo, FastSizeType, FastSymbolUpdatesState, FastVisualVariables, convertVisualVariables, getMaterialParameters */
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92504);
/* harmony import */ var _core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25423);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78607);
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21742);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86128);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24121);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58359);
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2662);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(28152);
/* harmony import */ var _renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10301);
/* harmony import */ var _support_guards_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8701);
/* harmony import */ var _support_debugFlags_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19620);
/* harmony import */ var _webgl_engine_effects_geometry_olidUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36340);
/* harmony import */ var _webgl_NoParameters_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(22005);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var U,j;!function(e){e[e.Undefined=0]="Undefined",e[e.DefinedSize=1]="DefinedSize",e[e.DefinedScale=2]="DefinedScale"}(U||(U={})),function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}(j||(j={}));class V{constructor(e){this.field=e}}class M extends V{constructor(e){super(e),this.minSize=[0,0,0],this.maxSize=[0,0,0],this.offset=[0,0,0],this.factor=[0,0,0],this.type=[U.Undefined,U.Undefined,U.Undefined],this.fallback=[0,0,0]}}class I extends V{constructor(e){super(e),this.colors=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.values=[0,0,0,0,0,0,0,0],this.fallback=[0,0,0,0]}}class A extends V{constructor(e,t=0){super(e),this.fallback=t,this.values=[0,0,0,0,0,0,0,0],this.opacityValues=[0,0,0,0,0,0,0,0]}}class N extends V{constructor(e){super(e),this.offset=[0,0,0],this.factor=[1,1,1],this.type=[0,0,0]}}class P{}function T(e){return null!=e}function F(e,t){e&&e.push(t)}function R(e,t,o,i=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__/* .create */ .vt)()){const n=e||0,s=t||0,r=o||0;return 0!==n&&(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_4__/* .rotateZ */ .Qr)(i,i,-n/180*Math.PI),0!==s&&(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_4__/* .rotateX */ .eL)(i,i,s/180*Math.PI),0!==r&&(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_4__/* .rotateY */ .Z8)(i,i,r/180*Math.PI),i}function E(e,t,o,i,n){const s=e.minSize,r=e.maxSize;if(e.useSymbolValue){const e=i.symbolSize[o];return t.minSize[o]=e,t.maxSize[o]=e,t.offset[o]=t.minSize[o],t.factor[o]=0,t.type[o]=U.DefinedSize,!0}if(T(e.field))return T(e.stops)?2===e.stops.length&&(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_14__/* .isNumber */ .Et)(e.stops[0].size)&&(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_14__/* .isNumber */ .Et)(e.stops[1].size)?(_(e.stops[0].size,e.stops[1].size,e.stops[0].value,e.stops[1].value,t,o),t.type[o]=U.DefinedSize,!0):(F(n,"Could not convert size info: stops only supported with 2 elements"),!1):(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_14__/* .isNumber */ .Et)(s)&&(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_14__/* .isNumber */ .Et)(r)&&T(e.minDataValue)&&T(e.maxDataValue)?(_(s,r,e.minDataValue,e.maxDataValue,t,o),t.type[o]=U.DefinedSize,!0):"unknown"===e.valueUnit?(F(n,"Could not convert size info: proportional size not supported"),!1):null!=_renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .meterIn */ .j[e.valueUnit]?(t.minSize[o]=-1/0,t.maxSize[o]=1/0,t.offset[o]=0,t.factor[o]=1/_renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .meterIn */ .j[e.valueUnit],t.type[o]=U.DefinedSize,!0):(F(n,"Could not convert size info: scale-dependent size not supported"),!1);if(!T(e.field)){if(e.stops?.[0]&&(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_14__/* .isNumber */ .Et)(e.stops[0].size))return t.minSize[o]=e.stops[0].size,t.maxSize[o]=e.stops[0].size,t.offset[o]=t.minSize[o],t.factor[o]=0,t.type[o]=U.DefinedSize,!0;if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_14__/* .isNumber */ .Et)(s))return t.minSize[o]=s,t.maxSize[o]=s,t.offset[o]=s,t.factor[o]=0,t.type[o]=U.DefinedSize,!0}return F(n,"Could not convert size info: unsupported variant of sizeInfo"),!1}function _(e,t,o,i,n,s){const r=Math.abs(i-o)>0?(t-e)/(i-o):0;n.minSize[s]=r>0?e:t,n.maxSize[s]=r>0?t:e,n.offset[s]=e-o*r,n.factor[s]=r}function q(e,t,o,i){if(e.normalizationField||e.valueRepresentation)return F(i,"Could not convert size info: unsupported property"),null;if(!(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_14__/* .isStringOrNull */ .CO)(e.field))return F(i,"Could not convert size info: field is not a string"),null;if(t.size){if(e.field)if(t.size.field){if(e.field!==t.size.field)return F(i,"Could not convert size info: multiple fields in use"),null}else t.size.field=e.field}else t.size=new M(e.field),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_6__.c)(t.size.fallback,o.fallbackSize);let n;switch(e.axis){case"width":return n=E(e,t.size,0,o,i),n?t:null;case"height":return n=E(e,t.size,2,o,i),n?t:null;case"depth":return n=E(e,t.size,1,o,i),n?t:null;case"width-and-depth":return n=E(e,t.size,0,o,i),n&&E(e,t.size,1,o,i),n?t:null;case null:case void 0:case"all":return n=E(e,t.size,0,o,i),n=n&&E(e,t.size,1,o,i),n=n&&E(e,t.size,2,o,i),n?t:null;default:return F(i,`Could not convert size info: unknown axis "${e.axis}""`),null}}function $(e,t,o){for(let n=0;n<3;++n){let o=t.unitInMeters;e.type[n]===U.DefinedSize&&(o*=t.modelSize[n],e.type[n]=U.DefinedScale),e.minSize[n]=e.minSize[n]/o,e.maxSize[n]=e.maxSize[n]/o,e.offset[n]=e.offset[n]/o,e.factor[n]=e.factor[n]/o}let i;if(e.type[0]!==U.Undefined)i=0;else if(e.type[1]!==U.Undefined)i=1;else{if(e.type[2]===U.Undefined)return F(o,"No size axis contains a valid size or scale"),!1;i=2}for(let n=0;n<3;++n)e.type[n]===U.Undefined&&(e.minSize[n]=e.minSize[i],e.maxSize[n]=e.maxSize[i],e.offset[n]=e.offset[i],e.factor[n]=e.factor[i],e.type[n]=e.type[i]);return!0}function B(e,t,o){e[4*t]=o.r/255,e[4*t+1]=o.g/255,e[4*t+2]=o.b/255,e[4*t+3]=o.a}function L(e,t,o,i){if(e.normalizationField)return F(i,"Could not convert color info: unsupported property"),null;if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_14__/* .isString */ .Kg)(e.field)){if(!e.stops)return F(i,"Could not convert color info: missing stops or colors"),null;{if(e.stops.length>8)return F(i,"Could not convert color info: too many color stops"),null;t.color=new I(e.field);const n=e.stops;for(let e=0;e<8;++e){const o=n[Math.min(e,n.length-1)];t.color.values[e]=o.value,B(t.color.colors,e,o.color)}(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_8__.c)(t.color.fallback,o.fallbackColor)}}else{if(!(e.stops&&e.stops.length>=0))return F(i,"Could not convert color info: no field and no colors/stops"),null;{const i=e.stops&&e.stops.length>=0&&e.stops[0].color;t.color=new I(null);for(let e=0;e<8;e++)t.color.values[e]=1/0,B(t.color.colors,e,i);(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_8__.c)(t.color.fallback,o.fallbackColor)}}return t}function O(e,t,o,i){if(e.normalizationField)return F(i,"Could not convert opacity info: unsupported property"),null;if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_14__/* .isString */ .Kg)(e.field)){if(!e.stops)return F(i,"Could not convert opacity info: missing stops or opacities"),null;{if(e.stops.length>8)return F(i,"Could not convert opacity info: too many opacity stops"),null;t.opacity=new A(e.field,o.fallbackColor[3]);const n=e.stops;for(let e=0;e<8;++e){const o=n[Math.min(e,n.length-1)];t.opacity.values[e]=o.value,t.opacity.opacityValues[e]=o.opacity}}}else{if(!(e.stops&&e.stops.length>=0))return F(i,"Could not convert opacity info: no field and no opacities/stops"),null;{const i=e.stops&&e.stops.length>=0?e.stops[0].opacity:0;t.opacity={field:null,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0],fallback:o.fallbackColor[3]};for(let e=0;e<8;e++)t.opacity.values[e]=1/0,t.opacity.opacityValues[e]=i}}return t}function G(e,t,o){const i=2===o&&"arithmetic"===e.rotationType;t.offset[o]=i?90:0,t.factor[o]=i?-1:1,t.type[o]=1}function H(e,t,o){if(!(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_14__/* .isString */ .Kg)(e.field))return F(o,"Could not convert rotation info: field is not a string"),null;if(t.rotation){if(e.field)if(t.rotation.field){if(e.field!==t.rotation.field)return F(o,"Could not convert rotation info: multiple fields in use"),null}else t.rotation.field=e.field}else t.rotation={field:e.field,offset:[0,0,0],factor:[1,1,1],type:[0,0,0]};switch(e.axis){case"tilt":return G(e,t.rotation,0),t;case"roll":return G(e,t.rotation,1),t;case null:case void 0:case"heading":return G(e,t.rotation,2),t;default:return F(o,`Could not convert rotation info: unknown axis "${e.axis}""`),null}}class J{constructor({supports:e,modelSize:t,symbolSize:o,unitInMeters:i,anchor:n,scale:s,rotation:r,fallbackColor:l,fallbackSize:a}){this.supports=e,this.modelSize=t??(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__/* .ones */ .S)(),this.symbolSize=o??(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__/* .ones */ .S)(),this.unitInMeters=i??1,this.anchor=n??(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__/* .zeros */ .Ul)(),this.scale=s??(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__/* .ones */ .S)(),this.rotation=r??(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__/* .zeros */ .Ul)(),this.fallbackColor=l??(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_9__/* .ones */ .S)(),this.fallbackSize=a??(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__/* .ones */ .S)()}}function K(e,t,o){if(!e)return null;const i=e.reduce(((e,i)=>{if(!e)return e;if(i.valueExpression)return F(o,"Could not convert visual variables: arcade expressions not supported"),null;switch(i.type){case"size":return t.supports.size?q(i,e,t,o):e;case"color":return t.supports.color?L(i,e,t,o):e;case"opacity":return t.supports.opacity?O(i,e,t,o):null;case"rotation":return t.supports.rotation?H(i,e,o):e;default:return null}}),new P);return!(e.length>0&&i)||i.size||i.color||i.opacity||i.rotation?i?.size&&!$(i.size,t,o)?null:i:null}class Q{constructor(e,t,o){this.visualVariables=e,this.materialParameters=t,this.requiresShaderTransformation=o}}function W(e,t){if(!e)return null;if((0,_webgl_engine_effects_geometry_olidUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .olidEnabled */ .E)())return null;if(_support_debugFlags_js__WEBPACK_IMPORTED_MODULE_11__/* .debugFlags */ .b.TESTS_DISABLE_FAST_UPDATES)return null;const o=K(e.visualVariables,t);return o?new Q(o,ee(o,t),!!o.size):null}function X(e,t,o){if(!t||!e)return!1;const i=e.visualVariables,n=K(t.visualVariables,o);return!!n&&(!!(Y(i.size,n.size,"size")&&Y(i.color,n.color,"color")&&Y(i.rotation,n.rotation,"rotation")&&Y(i.opacity,n.opacity,"opacity"))&&(e.visualVariables=n,e.materialParameters=ee(n,o),e.requiresShaderTransformation=!!n.size,!0))}function Y(e,t,o){if(!!e!=!!t)return!1;if(e&&e.field!==t?.field)return!1;if(e&&"rotation"===o){const o=e,i=t;for(let e=0;e<3;e++)if(o.type[e]!==i.type[e]||o.offset[e]!==i.offset[e]||o.factor[e]!==i.factor[e])return!1}return!0}class Z extends _webgl_NoParameters_js__WEBPACK_IMPORTED_MODULE_13__/* .NoParameters */ .Y{constructor(e){super(),this.vvSize=e?.size??null,this.vvColor=e?.color??null,this.vvOpacity=e?.opacity??null}}function ee(e,n){const s=new Z(e);return s.vvSize&&(s.vvSymbolAnchor=n.anchor,(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_4__/* .identity */ .D_)(re),R(n.rotation[2],n.rotation[0],n.rotation[1],re),s.vvSymbolRotationMatrix=s.vvSymbolRotationMatrix||(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .vt)(),(0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_2__/* .fromMat4 */ .z0)(s.vvSymbolRotationMatrix,re)),s}function te(e,t,o){if(!e.vvSize)return o;(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_4__/* .copy */ .C)(ne,o);const i=e.vvSymbolRotationMatrix;return (0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_4__/* .set */ .hZ)(re,i[0],i[1],i[2],0,i[3],i[4],i[5],0,i[6],i[7],i[8],0,0,0,0,1),(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_4__/* .multiply */ .lw)(ne,ne,re),oe(se,e,t),(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_4__/* .scale */ .hs)(ne,ne,se),(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_4__/* .translate */ .Tl)(ne,ne,e.vvSymbolAnchor),ne}function oe(t,o,i){if(!o.vvSize)return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_6__.i)(t,1,1,1),t;if(Number.isNaN(i[0]))return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_6__.c)(t,o.vvSize.fallback);for(let n=0;n<3;++n){const s=o.vvSize.offset[n]+i[0]*o.vvSize.factor[n];t[n]=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .clamp */ .qE)(s,o.vvSize.minSize[n],o.vvSize.maxSize[n])}return t}function ie(e,t){const o=null==e?0:t.attributes[e];return"number"==typeof o&&isFinite(o)?o:NaN}const ne=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__/* .create */ .vt)(),se=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__/* .create */ .vt)(),re=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__/* .create */ .vt)();


/***/ }),

/***/ 11110:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BP: () => (/* binding */ O),
/* harmony export */   l5: () => (/* binding */ P),
/* harmony export */   q3: () => (/* binding */ N)
/* harmony export */ });
/* unused harmony export InterleavedBuffer */
/* harmony import */ var _geometry_support_float16_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11449);
/* harmony import */ var _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57813);
/* harmony import */ var _geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32846);
/* harmony import */ var _webgl_engine_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58947);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class K{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const i of e.fields.keys()){const t=e.fields.get(i);this[i]=new t.constructor(this.buffer,t.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const i=this[e];return i&&i.elementCount===t.ElementCount&&i.elementType===t.ElementType?i:null}slice(e,t){return new K(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t=0,i=0,s=e.count){const r=this.stride;if(r%4==0){const n=new Uint32Array(e.buffer,t*r,s*r/4);new Uint32Array(this.buffer,i*r,s*r/4).set(n)}else{const n=new Uint8Array(e.buffer,t*r,s*r);new Uint8Array(this.buffer,i*r,s*r).set(n)}return this}get cachedMemory(){return this.byteLength}dispose(){}}class N{constructor(e){this._stride=0,this._fields=new Map,e&&(this._stride=e.stride,e.fields.forEach((e=>this._fields.set(e[0],{...e[1],constructor:S(e[1].constructor)}))))}freeze(){return this}vec2f16(s,r){return this._appendField(s,_geometry_support_float16_js__WEBPACK_IMPORTED_MODULE_0__/* .hasNativeFloat16Array */ .SX?_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec2f16 */ .ZD:_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec2f */ .gH,r),this}vec2f(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec2f */ .gH,t),this}vec2f64(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec2f64 */ .si,t),this}vec3f16(t,i){return this._appendField(t,_geometry_support_float16_js__WEBPACK_IMPORTED_MODULE_0__/* .hasNativeFloat16Array */ .SX?_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec3f16 */ .EC:_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec3f */ .xs,i),this}vec3f(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec3f */ .xs,t),this}vec3f64(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec3f64 */ .Xm,t),this}vec4f16(t,i){return this._appendField(t,_geometry_support_float16_js__WEBPACK_IMPORTED_MODULE_0__/* .hasNativeFloat16Array */ .SX?_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec4f16 */ .jz:_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec4f */ .Eq,i),this}vec4f(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec4f */ .Eq,t),this}vec4f64(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec4f64 */ .Aj,t),this}mat3f(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewMat3f */ .jZ,t),this}mat3f64(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewMat3f64 */ .j0,t),this}mat4f(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewMat4f */ .Sx,t),this}mat4f64(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewMat4f64 */ .E$,t),this}vec4u8(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec4u8 */ .XP,t),this}f16(t,i){return this._appendField(t,_geometry_support_float16_js__WEBPACK_IMPORTED_MODULE_0__/* .hasNativeFloat16Array */ .SX?_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewFloat16 */ .XW:_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewFloat */ .Y$,i),this}f32(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewFloat */ .Y$,t),this}f64(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewFloat64 */ .qB,t),this}u8(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewUint8 */ .SL,t),this}u16(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewUint16 */ .h,t),this}i8(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewInt8 */ .bf,t),this}vec2i8(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec2i8 */ .D6,t),this}vec2i16(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec2i16 */ .mJ,t),this}vec2u8(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec2u8 */ .LC,t),this}vec2u16(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec2u16 */ .Yi,t),this}vec4u16(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec4u16 */ .Uz,t),this}u32(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewUint32 */ .P,t),this}_appendField(e,t,i){this._fields.has(e)&&(0,_webgl_engine_lib_Util_js__WEBPACK_IMPORTED_MODULE_2__/* .assert */ .vA)(!1,`${e} already added to vertex buffer layout`);const s=t.ElementCount*(0,_geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_3__/* .elementTypeSize */ .GJ)(t.ElementType),r=this._stride;this._fields.set(e,{constructor:t,size:s,offset:r,optional:i}),this._alignFields()}_alignFields(){let e=0,t=1;this._fields.forEach((i=>{const s=(0,_geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_3__/* .elementTypeSize */ .GJ)(i.constructor.ElementType);e=Math.floor((e+s-1)/s)*s,i.offset=e,e+=i.size,t=Math.max(t,s)})),e=Math.floor((e+t-1)/t)*t,this._stride=e}createBuffer(e){return new K(this,e)}createView(e){return new K(this,e)}clone(){const e=new N;return e._stride=this._stride,e._fields=new Map,this._fields.forEach(((t,i)=>e._fields.set(i,t))),e.BufferType=this.BufferType,e}get stride(){return this._stride}get fields(){return this._fields}}function O(){return new N}class P{constructor(e){this.fields=new Array,e.fields.forEach(((e,t)=>{const i={...e,constructor:R(e.constructor)};this.fields.push([t,i])})),this.stride=e.stride}}const Q=[_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewFloat */ .Y$,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec2f */ .gH,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec3f */ .xs,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec4f */ .Eq,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewMat3f */ .jZ,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewMat4f */ .Sx,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewFloat64 */ .qB,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec2f64 */ .si,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec3f64 */ .Xm,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec4f64 */ .Aj,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewMat3f64 */ .j0,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewMat4f64 */ .E$,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewUint8 */ .SL,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec2u8 */ .LC,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec3u8 */ .eI,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec4u8 */ .XP,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewUint16 */ .h,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec2u16 */ .Yi,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec3u16 */ .nS,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec4u16 */ .Uz,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewUint32 */ .P,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec2u32 */ .An,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec3u32 */ .H$,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec4u32 */ .ml,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewInt8 */ .bf,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec2i8 */ .D6,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec3i8 */ .m8,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec4i8 */ .TX,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewInt16 */ .Qt,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec2i16 */ .mJ,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec3i16 */ .Vp,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec4i16 */ .E7,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewInt32 */ .My,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec2i32 */ .UL,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec3i32 */ .zD,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferViewVec4i32 */ .Y4];function R(e){return`${e.ElementType}_${e.ElementCount}`}function S(e){return W.get(e)}const W=new Map;Q.forEach((e=>W.set(R(e),e)));


/***/ }),

/***/ 19620:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52495);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let T=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],T.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],T.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],T.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],T.prototype,"DECONFLICTOR_SHOW_GRID",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],T.prototype,"LABELS_SHOW_BORDER",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],T.prototype,"TEXT_SHOW_BASELINE",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],T.prototype,"TEXT_SHOW_BORDER",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],T.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],T.prototype,"OVERLAY_SHOW_CENTER",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],T.prototype,"SHOW_POI",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],T.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],T.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],T.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],T.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],T.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],T.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],T.prototype,"I3S_TREE_SHOW_TILES",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],T.prototype,"I3S_SHOW_MODIFICATIONS",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],T.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],T.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],T.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],T.prototype,"LINE_WIREFRAMES",void 0),T=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.views.3d.support.debugFlags")],T);const t=new T;


/***/ }),

/***/ 79320:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NV: () => (/* binding */ o),
/* harmony export */   zd: () => (/* binding */ _)
/* harmony export */ });
/* unused harmony exports ColorFormats, DepthTextureFormats, format2String, isDepthFormat */
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41746);
/* harmony import */ var _webgl_TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45758);
/* harmony import */ var _webgl_textureUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64434);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var o,_;!function(R){R[R.R8UNORM=0]="R8UNORM",R[R.R8UINT=1]="R8UINT",R[R.RG8UNORM=2]="RG8UNORM",R[R.RG8UINT=3]="RG8UINT",R[R.RGBA4UNORM=4]="RGBA4UNORM",R[R.RGBA8UNORM=5]="RGBA8UNORM",R[R.RGBA8UNORM_MIPMAP=6]="RGBA8UNORM_MIPMAP",R[R.R16FLOAT=7]="R16FLOAT",R[R.RGBA16FLOAT=8]="RGBA16FLOAT",R[R.R32FLOAT=9]="R32FLOAT",R[R.COUNT=10]="COUNT"}(o||(o={})),function(R){R[R.DEPTH16=10]="DEPTH16",R[R.DEPTH24_STENCIL8=11]="DEPTH24_STENCIL8"}(_||(_={}));const a={[o.R8UNORM]:"R8",[o.R8UINT]:"R8UI",[o.R16FLOAT]:"R16F",[o.R32FLOAT]:"R32F",[o.RG8UNORM]:"RG8",[o.RG8UINT]:"RG8UI",[o.RGBA8UNORM]:"RGBA8",[o.RGBA4UNORM]:"RGBA4",[o.RGBA8UNORM_MIPMAP]:"RGBA8_MM",[o.RGBA16FLOAT]:"RGBA16F",[_.DEPTH16]:"D16",[_.DEPTH24_STENCIL8]:"D24S8"};function G(R){return R>=o.COUNT}const r=new _webgl_TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_1__/* .TextureDescriptor */ .R;r.pixelFormat=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .PixelFormat */ .Ab.RED,r.internalFormat=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .SizedPixelFormat */ .H0.R8,r.wrapMode=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .TextureWrapMode */ .pF.CLAMP_TO_EDGE;const F=new _webgl_TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_1__/* .TextureDescriptor */ .R;F.pixelFormat=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .PixelFormat */ .Ab.RED_INTEGER,F.internalFormat=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .SizedPixelFormat */ .H0.R8UI,F.wrapMode=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .TextureWrapMode */ .pF.CLAMP_TO_EDGE,F.samplingMode=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .TextureSamplingMode */ .Cj.NEAREST;const U=new _webgl_TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_1__/* .TextureDescriptor */ .R;U.pixelFormat=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .PixelFormat */ .Ab.RG,U.internalFormat=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .SizedPixelFormat */ .H0.RG8,U.wrapMode=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .TextureWrapMode */ .pF.CLAMP_TO_EDGE;const P=new _webgl_TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_1__/* .TextureDescriptor */ .R;P.pixelFormat=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .PixelFormat */ .Ab.RG_INTEGER,P.internalFormat=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .SizedPixelFormat */ .H0.RG8UI,P.wrapMode=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .TextureWrapMode */ .pF.CLAMP_TO_EDGE,P.samplingMode=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .TextureSamplingMode */ .Cj.NEAREST;const D=new _webgl_TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_1__/* .TextureDescriptor */ .R;D.internalFormat=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .SizedPixelFormat */ .H0.RGBA4,D.dataType=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .PixelType */ .ld.UNSIGNED_SHORT_4_4_4_4,D.wrapMode=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .TextureWrapMode */ .pF.CLAMP_TO_EDGE;const I=new _webgl_TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_1__/* .TextureDescriptor */ .R;I.wrapMode=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .TextureWrapMode */ .pF.CLAMP_TO_EDGE;const L=new _webgl_TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_1__/* .TextureDescriptor */ .R;L.wrapMode=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .TextureWrapMode */ .pF.CLAMP_TO_EDGE,L.samplingMode=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .TextureSamplingMode */ .Cj.LINEAR_MIPMAP_LINEAR,L.hasMipmap=!0,L.maxAnisotropy=8;const p=new _webgl_TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_1__/* .TextureDescriptor */ .R;p.pixelFormat=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .PixelFormat */ .Ab.RED,p.dataType=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .PixelType */ .ld.HALF_FLOAT,p.internalFormat=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .SizedPixelFormat */ .H0.R16F,p.samplingMode=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .TextureSamplingMode */ .Cj.NEAREST;const i=new _webgl_TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_1__/* .TextureDescriptor */ .R;i.dataType=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .PixelType */ .ld.HALF_FLOAT,i.internalFormat=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .SizedPixelFormat */ .H0.RGBA16F,i.wrapMode=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .TextureWrapMode */ .pF.CLAMP_TO_EDGE;const m=new _webgl_TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_1__/* .TextureDescriptor */ .R;m.pixelFormat=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .PixelFormat */ .Ab.RED,m.dataType=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .PixelType */ .ld.FLOAT,m.internalFormat=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .SizedPixelFormat */ .H0.R32F,m.samplingMode=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .TextureSamplingMode */ .Cj.NEAREST;const l={[o.R8UNORM]:r,[o.R8UINT]:F,[o.RG8UNORM]:U,[o.RG8UINT]:P,[o.RGBA4UNORM]:D,[o.RGBA8UNORM]:I,[o.RGBA8UNORM_MIPMAP]:L,[o.R16FLOAT]:p,[o.RGBA16FLOAT]:i,[o.R32FLOAT]:m,[o.COUNT]:null},s={[_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .SizedDepthFormat */ .SB.DEPTH_COMPONENT16]:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .PixelType */ .ld.UNSIGNED_SHORT,[_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .SizedDepthFormat */ .SB.DEPTH_COMPONENT24]:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .PixelType */ .ld.UNSIGNED_INT,[_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .SizedDepthFormat */ .SB.DEPTH_COMPONENT32F]:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .PixelType */ .ld.FLOAT,[_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .SizedDepthStencilFormat */ .iE.DEPTH24_STENCIL8]:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .PixelType */ .ld.UNSIGNED_INT_24_8,[_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .SizedDepthStencilFormat */ .iE.DEPTH32F_STENCIL8]:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .PixelType */ .ld.FLOAT_32_UNSIGNED_INT_24_8_REV},C={[_.DEPTH24_STENCIL8]:w(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .SizedDepthStencilFormat */ .iE.DEPTH24_STENCIL8),[_.DEPTH16]:w(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .SizedDepthFormat */ .SB.DEPTH_COMPONENT16)};function w(R){const T=new _webgl_TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_1__/* .TextureDescriptor */ .R;return T.pixelFormat=(0,_webgl_textureUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isSizedDepthFormat */ .CR)(R)?_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .UnsizedDepthFormat */ .j7.DEPTH_COMPONENT:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .UnsizedDepthFormat */ .j7.DEPTH_STENCIL,T.dataType=s[R],T.samplingMode=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .TextureSamplingMode */ .Cj.NEAREST,T.wrapMode=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .TextureWrapMode */ .pF.CLAMP_TO_EDGE,T.internalFormat=R,T.hasMipmap=!1,T.isImmutable=!0,T}


/***/ }),

/***/ 40641:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i$: () => (/* binding */ n),
/* harmony export */   oD: () => (/* binding */ d),
/* harmony export */   xJ: () => (/* binding */ t)
/* harmony export */ });
/* unused harmony export addLinearDepth */
/* harmony import */ var _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55274);
/* harmony import */ var _attributes_VertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16989);
/* harmony import */ var _shaderModules_Float2BindUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74767);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72196);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function i(e){e.varyings.add("linearDepth","float",{invariant:!0})}function t(e){e.vertex.uniforms.add(new _shaderModules_Float2BindUniform_js__WEBPACK_IMPORTED_MODULE_2__/* .Float2BindUniform */ .E("nearFar",(e=>e.camera.nearFar)))}function n(e){e.vertex.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function d(r,d){const{vertex:s}=r;switch(d.output){case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderOutput */ .V.Color:case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderOutput */ .V.ColorEmission:if(d.receiveShadows)return i(r),void s.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderOutput */ .V.Shadow:case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderOutput */ .V.ShadowHighlight:case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderOutput */ .V.ShadowExcludeHighlight:case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderOutput */ .V.ViewshedShadow:return r.include(_attributes_VertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .VertexPosition */ .em,d),i(r),t(r),n(r),void s.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}s.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`void forwardLinearDepth() {}`)}


/***/ }),

/***/ 46653:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72196);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function l(l){const{fragment:t}=l;t.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H)`uint readChannelBits(uint channel, int highlightLevel) {
int llc = (highlightLevel & 3) << 1;
return (channel >> llc) & 3u;
}
uint readChannel(uvec2 texel, int highlightLevel) {
int lic = (highlightLevel >> 2) & 1;
return texel[lic];
}
uint readLevelBits(uvec2 texel, int highlightLevel) {
return readChannelBits(readChannel(texel, highlightLevel), highlightLevel);
}`)}


/***/ }),

/***/ 26163:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72196);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function c(c){c.vertex.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H)`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
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
/* harmony export */   c: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72196);
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50645);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(e,o=!0){e.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__/* .VertexAttribute */ .r.POSITION,"vec2"),o&&e.varyings.add("uv","vec2"),e.vertex.main.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H)`
      gl_Position = vec4(position, 0.0, 1.0);
      ${o?(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H)`uv = position * 0.5 + vec2(0.5);`:""}
  `)}


/***/ }),

/***/ 1110:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HQ: () => (/* binding */ p),
/* harmony export */   rA: () => (/* binding */ m)
/* harmony export */ });
/* unused harmony exports SlicePass, SlicePlaneParameters */
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21742);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86128);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24121);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58359);
/* harmony import */ var _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13501);
/* harmony import */ var _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60840);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72196);
/* harmony import */ var _webgl_NoParameters_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22005);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class u extends _webgl_NoParameters_js__WEBPACK_IMPORTED_MODULE_7__/* .NoParameters */ .Y{constructor(e){super(),this.slicePlaneLocalOrigin=e}}function P(e,s){B(e,s,new t("slicePlaneOrigin",((e,i)=>g(s,e,i))),new t("slicePlaneBasis1",((e,i)=>y(s,e,i,i.slicePlane?.basis1))),new t("slicePlaneBasis2",((e,i)=>y(s,e,i,i.slicePlane?.basis2))))}function p(e,s){B(e,s,new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_4__/* .Float3DrawUniform */ .W("slicePlaneOrigin",((e,i)=>g(s,e,i))),new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_4__/* .Float3DrawUniform */ .W("slicePlaneBasis1",((e,i)=>y(s,e,i,i.slicePlane?.basis1))),new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_4__/* .Float3DrawUniform */ .W("slicePlaneBasis2",((e,i)=>y(s,e,i,i.slicePlane?.basis2))))}function m(e,s){v(e,s,new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_4__/* .Float3DrawUniform */ .W("slicePlaneOrigin",((e,i)=>g(s,e,i))),new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_4__/* .Float3DrawUniform */ .W("slicePlaneBasis1",((e,i)=>y(s,e,i,i.slicePlane?.basis1))),new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_4__/* .Float3DrawUniform */ .W("slicePlaneBasis2",((e,i)=>y(s,e,i,i.slicePlane?.basis2))))}const b=(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .glsl */ .H)`struct SliceFactors {
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
bool rejectBySlice(vec3 pos) {
return sliceByPlane(pos);
}`;function v(e,s,...i){s.hasSlicePlane?(e.uniforms.add(...i),e.code.add(b)):e.code.add("bool rejectBySlice(vec3 pos) { return false; }")}function B(e,s,...i){v(e,s,...i),s.hasSlicePlane?e.code.add("\n    void discardBySlice(vec3 pos) {\n      if (sliceByPlane(pos)) {\n        discard;\n      }\n    }\n\n    vec4 applySliceOutline(vec4 color, vec3 pos) {\n      SliceFactors factors = calculateSliceFactors(pos);\n\n      factors.front /= 2.0 * fwidth(factors.front);\n      factors.side0 /= 2.0 * fwidth(factors.side0);\n      factors.side1 /= 2.0 * fwidth(factors.side1);\n      factors.side2 /= 2.0 * fwidth(factors.side2);\n      factors.side3 /= 2.0 * fwidth(factors.side3);\n\n      // return after calling fwidth, to avoid aliasing caused by discontinuities in the input to fwidth\n      if (sliceByFactors(factors)) {\n        return color;\n      }\n\n      float outlineFactor = (1.0 - step(0.5, factors.front))\n        * (1.0 - step(0.5, factors.side0))\n        * (1.0 - step(0.5, factors.side1))\n        * (1.0 - step(0.5, factors.side2))\n        * (1.0 - step(0.5, factors.side3));\n\n      return mix(color, vec4(vec3(0.0), color.a), outlineFactor * 0.3);\n    }\n\n    vec4 applySlice(vec4 color, vec3 pos) {\n      return sliceEnabled() ? applySliceOutline(color, pos) : color;\n    }\n  "):e.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .glsl */ .H)`void discardBySlice(vec3 pos) { }
vec4 applySlice(vec4 color, vec3 pos) { return color; }`)}function w(e,s,i){return e.instancedDoublePrecision?(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.i)(F,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]):s.slicePlaneLocalOrigin}function S(e,s){return null!=e?(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.d)(x,s.origin,e):s.origin}function h(s,i,a){return s.hasSliceTranslatedView?null!=i?(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__/* .translate */ .Tl)(O,a.camera.viewMatrix,i):a.camera.viewMatrix:null}function g(e,s,i){if(null==i.slicePlane)return _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .ZEROS */ .uY;const l=w(e,s,i),c=S(l,i.slicePlane),o=h(e,l,i);return null!=o?(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.t)(x,c,o):c}function y(e,s,c,o){if(null==o||null==c.slicePlane)return _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .ZEROS */ .uY;const r=w(e,s,c),t=S(r,c.slicePlane),f=h(e,r,c);return null!=f?((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.f)(j,o,t),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.t)(x,t,f),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.t)(j,j,f),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.d)(j,j,x)):o}const F=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .vt)(),x=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .vt)(),j=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .vt)(),O=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)();


/***/ }),

/***/ 66012:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40641);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72196);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function o(o){(0,_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .addCalculateLinearDepth */ .i$)(o),o.vertex.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),o.vertex.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}


/***/ }),

/***/ 94372:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77941);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class s extends _shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderTechniqueConfiguration */ .K{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}}


/***/ }),

/***/ 24682:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ f)
/* harmony export */ });
/* unused harmony export InstancedDoublePassParameters */
/* harmony import */ var _core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25423);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78607);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86128);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24121);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58359);
/* harmony import */ var _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55274);
/* harmony import */ var _util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10470);
/* harmony import */ var _util_View_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63592);
/* harmony import */ var _shaderModules_Float3BindUniform_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81598);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72196);
/* harmony import */ var _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6561);
/* harmony import */ var _shaderModules_Matrix4PassUniform_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20778);
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(50645);
/* harmony import */ var _webgl_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(76698);
/* harmony import */ var _webgl_NoParameters_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(22005);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class x extends _webgl_NoParameters_js__WEBPACK_IMPORTED_MODULE_14__/* .NoParameters */ .Y{constructor(){super(...arguments),this.modelTransformation=null}}const M=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)();function f(r,i){const{hasModelTransformation:p,instancedDoublePrecision:x,instanced:f,output:O,hasVertexTangents:N}=i;p&&(r.vertex.uniforms.add(new _shaderModules_Matrix4PassUniform_js__WEBPACK_IMPORTED_MODULE_11__/* .Matrix4PassUniform */ .X("model",(e=>e.modelTransformation??_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__/* .IDENTITY */ .zK))),r.vertex.uniforms.add(new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_10__/* .Matrix3PassUniform */ .k("normalLocalOriginFromModel",(r=>((0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_0__/* .normalFromMat4 */ .Ge)(M,r.modelTransformation??_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__/* .IDENTITY */ .zK),M))))),f&&x&&(r.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_12__/* .VertexAttribute */ .r.INSTANCEMODELORIGINHI,"vec3"),r.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_12__/* .VertexAttribute */ .r.INSTANCEMODELORIGINLO,"vec3"),r.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_12__/* .VertexAttribute */ .r.INSTANCEMODEL,"mat3"),r.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_12__/* .VertexAttribute */ .r.INSTANCEMODELNORMAL,"mat3"));const _=r.vertex;x&&(_.include(_util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .DoublePrecision */ .u,i),_.uniforms.add(new _shaderModules_Float3BindUniform_js__WEBPACK_IMPORTED_MODULE_8__/* .Float3BindUniform */ .d("viewOriginHi",(e=>(0,_webgl_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_13__/* .encodeDoubleHi */ .Zo)((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.i)(w,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),w))),new _shaderModules_Float3BindUniform_js__WEBPACK_IMPORTED_MODULE_8__/* .Float3BindUniform */ .d("viewOriginLo",(e=>(0,_webgl_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_13__/* .encodeDoubleLo */ .jA)((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.i)(w,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),w))))),_.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_9__/* .glsl */ .H)`
    vec3 getVertexInLocalOriginSpace() {
      return ${p?x?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":x?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${x?(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_9__/* .glsl */ .H)`
          // Issue: (should be resolved now with invariant position) https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -instanceModelOriginHi, -instanceModelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),_.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_9__/* .glsl */ .H)`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${p?x?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":x?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),O===_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_5__/* .ShaderOutput */ .V.Normal&&((0,_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_7__/* .addViewNormal */ .S7)(_),_.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_9__/* .glsl */ .H)`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${p?x?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":x?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),N&&_.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_9__/* .glsl */ .H)`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${p?x?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":x?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const w=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)();


/***/ }),

/***/ 33045:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55274);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72196);
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50645);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(e,t){if(t.output!==_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderOutput */ .V.ObjectAndLayerIdColor)return e.vertex.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`void forwardObjectAndLayerIdColor() {}`),void e.fragment.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`void outputObjectAndLayerIdColor() {}`);const a=t.objectAndLayerIdColorInstanced;e.varyings.add("objectAndLayerIdColorVarying","vec4"),e.attributes.add(a?_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.INSTANCEOBJECTANDLAYERIDCOLOR:_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.OLIDCOLOR,"vec4"),e.vertex.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`
    void forwardObjectAndLayerIdColor() {
      objectAndLayerIdColorVarying = ${a?"instanceObjectAndLayerIdColor":"objectAndLayerIdColor"} * 0.003921568627451;
    }`),e.fragment.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`void outputObjectAndLayerIdColor() {
fragColor = objectAndLayerIdColorVarying;
}`)}


/***/ }),

/***/ 53429:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _collections_Component_Material_shader_DecodeSymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66976);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72196);
/* harmony import */ var _shaderModules_IntegerPassUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3445);
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50645);
/* harmony import */ var _materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29117);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function i(i,t){t.hasSymbolColors?(i.include(_collections_Component_Material_shader_DecodeSymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .DecodeSymbolColor */ .A),i.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_3__/* .VertexAttribute */ .r.SYMBOLCOLOR,"vec4"),i.varyings.add("colorMixMode","mediump float"),i.vertex.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(i.fragment.uniforms.add(new _shaderModules_IntegerPassUniform_js__WEBPACK_IMPORTED_MODULE_2__/* .IntegerPassUniform */ .c("colorMixMode",(o=>_materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_4__/* .colorMixModes */ .Um[o.colorMixMode]))),i.vertex.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}


/***/ }),

/***/ 26139:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ o),
/* harmony export */   U: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73345);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72196);
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50645);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var o;function d(d,a){switch(a.textureCoordinateType){case o.Default:return d.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.UV0,"vec2"),d.varyings.add("vuv0","vec2"),void d.vertex.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`void forwardTextureCoordinates() { vuv0 = uv0; }`);case o.Atlas:return d.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.UV0,"vec2"),d.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.UVREGION,"vec4"),d.varyings.add("vuv0","vec2"),d.varyings.add("vuvRegion","vec4"),void d.vertex.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:(0,_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .neverReached */ .Xb)(a.textureCoordinateType);case o.None:return void d.vertex.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`void forwardTextureCoordinates() {}`);case o.COUNT:return}}!function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.COUNT=3]="COUNT"}(o||(o={}));


/***/ }),

/***/ 39739:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72196);
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50645);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(e,d){d.hasVertexColors?(e.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_1__/* .VertexAttribute */ .r.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H)`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H)`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H)`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}


/***/ }),

/***/ 82089:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mh: () => (/* binding */ c),
/* harmony export */   Zo: () => (/* binding */ f),
/* harmony export */   gy: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73345);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78607);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28152);
/* harmony import */ var _NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81283);
/* harmony import */ var _VertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16989);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72196);
/* harmony import */ var _shaderModules_Matrix3DrawUniform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8376);
/* harmony import */ var _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6561);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function c(o,a){switch(a.normalType){case _NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .NormalType */ .W.Attribute:case _NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .NormalType */ .W.Compressed:o.include(_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .NormalAttribute */ .Y,a),o.varyings.add("vNormalWorld","vec3"),o.varyings.add("vNormalView","vec3"),o.vertex.uniforms.add(new _shaderModules_Matrix3DrawUniform_js__WEBPACK_IMPORTED_MODULE_6__/* .Matrix3DrawUniform */ .h("transformNormalGlobalFromModel",(r=>r.transformNormalGlobalFromModel)),new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_7__/* .Matrix3PassUniform */ .k("transformNormalViewFromGlobal",(r=>r.transformNormalViewFromGlobal))),o.vertex.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_5__/* .glsl */ .H)`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case _NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .NormalType */ .W.ScreenDerivative:o.vertex.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_5__/* .glsl */ .H)`void forwardNormal() {}`);break;default:(0,_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .neverReached */ .Xb)(a.normalType);case _NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .NormalType */ .W.COUNT:}}class f extends _VertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .VertexPositionPassParameters */ .dO{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)()}}class n extends _VertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .VertexPositionDrawParameters */ .EM{constructor(){super(...arguments),this.transformNormalGlobalFromModel=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)(),this.toMapSpace=(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)()}}


/***/ }),

/***/ 16989:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EM: () => (/* binding */ w),
/* harmony export */   dO: () => (/* binding */ F),
/* harmony export */   em: () => (/* binding */ v)
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78607);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86128);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58359);
/* harmony import */ var _util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10470);
/* harmony import */ var _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13501);
/* harmony import */ var _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60840);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72196);
/* harmony import */ var _shaderModules_Matrix3DrawUniform_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8376);
/* harmony import */ var _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6561);
/* harmony import */ var _shaderModules_Matrix4PassUniform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20778);
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(50645);
/* harmony import */ var _webgl_NoParameters_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(22005);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function v(r,o){const{attributes:e,vertex:f,varyings:v,fragment:F}=r;f.include(_util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .DoublePrecision */ .u,o),e.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_10__/* .VertexAttribute */ .r.POSITION,"vec3"),v.add("vPositionWorldCameraRelative","vec3"),v.add("vPosition_view","vec3",{invariant:!0}),f.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_5__/* .Float3PassUniform */ .t("transformWorldFromViewTH",(r=>r.transformWorldFromViewTH)),new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_5__/* .Float3PassUniform */ .t("transformWorldFromViewTL",(r=>r.transformWorldFromViewTL)),new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_8__/* .Matrix3PassUniform */ .k("transformViewFromCameraRelativeRS",(r=>r.transformViewFromCameraRelativeRS)),new _shaderModules_Matrix4PassUniform_js__WEBPACK_IMPORTED_MODULE_9__/* .Matrix4PassUniform */ .X("transformProjFromView",(r=>r.transformProjFromView)),new _shaderModules_Matrix3DrawUniform_js__WEBPACK_IMPORTED_MODULE_7__/* .Matrix3DrawUniform */ .h("transformWorldFromModelRS",(r=>r.transformWorldFromModelRS)),new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_4__/* .Float3DrawUniform */ .W("transformWorldFromModelTH",(r=>r.transformWorldFromModelTH)),new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_4__/* .Float3DrawUniform */ .W("transformWorldFromModelTL",(r=>r.transformWorldFromModelTL))),f.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .glsl */ .H)`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * position;
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),f.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .glsl */ .H)`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${o.spherical?(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .glsl */ .H)`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .glsl */ .H)`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),F.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_5__/* .Float3PassUniform */ .t("transformWorldFromViewTL",(r=>r.transformWorldFromViewTL))),f.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .glsl */ .H)`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),F.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .glsl */ .H)`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class F extends _webgl_NoParameters_js__WEBPACK_IMPORTED_MODULE_11__/* .NoParameters */ .Y{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)(),this.transformWorldFromViewTL=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)(),this.transformViewFromCameraRelativeRS=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__/* .create */ .vt)(),this.transformProjFromView=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)()}}class w extends _webgl_NoParameters_js__WEBPACK_IMPORTED_MODULE_11__/* .NoParameters */ .Y{constructor(){super(...arguments),this.transformWorldFromModelRS=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__/* .create */ .vt)(),this.transformWorldFromModelTH=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)(),this.transformWorldFromModelTL=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)()}}


/***/ }),

/***/ 81783:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  r: () => (/* binding */ u)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js
var TextureCoordinateAttribute_glsl = __webpack_require__(26139);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/glsl.js
var glsl = __webpack_require__(72196);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/TextureAtlasLookup.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(e){e.fragment.code.add((0,glsl/* glsl */.H)`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
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
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function u(u,l){const{textureCoordinateType:s}=l;if(s===TextureCoordinateAttribute_glsl/* TextureCoordinateType */.I.None||s===TextureCoordinateAttribute_glsl/* TextureCoordinateType */.I.COUNT)return;u.include(TextureCoordinateAttribute_glsl/* TextureCoordinateAttribute */.U,l);const n=s===TextureCoordinateAttribute_glsl/* TextureCoordinateType */.I.Atlas;n&&u.include(e),u.fragment.code.add((0,glsl/* glsl */.H)`
    vec4 textureLookup(sampler2D tex, vec2 uv) {
      return ${n?"textureAtlasLookup(tex, uv, vuvRegion)":"texture(tex, uv)"};
    }
  `)}


/***/ }),

/***/ 54009:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ s),
/* harmony export */   V: () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2662);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28152);
/* harmony import */ var _util_ScreenSizePerspective_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6916);
/* harmony import */ var _util_View_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63592);
/* harmony import */ var _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1411);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72196);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function s(e,r){const c=e.vertex;r.hasVerticalOffset?(f(c),r.hasScreenSizePerspective&&(e.include(_util_ScreenSizePerspective_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .ScreenSizePerspective */ .Y6),(0,_util_ScreenSizePerspective_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .addScreenSizePerspectiveAlignment */ .OH)(c),(0,_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .addCameraPosition */ .yu)(e.vertex,r)),c.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_5__/* .glsl */ .H)`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${r.spherical?(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_5__/* .glsl */ .H)`vec3 worldNormal = normalize(worldPos + localOrigin);`:(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_5__/* .glsl */ .H)`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${r.hasScreenSizePerspective?(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_5__/* .glsl */ .H)`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_5__/* .glsl */ .H)`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):c.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_5__/* .glsl */ .H)`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const a=(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)();function f(r){r.uniforms.add(new _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_4__/* .Float4PassUniform */ .E("verticalOffset",((r,l)=>{const{minWorldLength:t,maxWorldLength:o,screenLength:c}=r.verticalOffset,i=Math.tan(.5*l.camera.fovY)/(.5*l.camera.fullViewport[3]),s=l.camera.pixelRatio||1;return (0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_0__.s)(a,c*s,i,t,o)})))}


/***/ }),

/***/ 23399:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40641);
/* harmony import */ var _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55274);
/* harmony import */ var _Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1110);
/* harmony import */ var _Transform_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66012);
/* harmony import */ var _attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81283);
/* harmony import */ var _attributes_ObjectAndLayerIdColor_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33045);
/* harmony import */ var _attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26139);
/* harmony import */ var _attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82089);
/* harmony import */ var _output_OutputDepth_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56178);
/* harmony import */ var _output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1361);
/* harmony import */ var _shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(34328);
/* harmony import */ var _util_DiscardOrAdjustAlpha_glsl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4139);
/* harmony import */ var _util_View_glsl_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(63592);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(72196);
/* harmony import */ var _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(79856);
/* harmony import */ var _lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(91013);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function h(h,O){const{vertex:j,fragment:w,varyings:b}=h,{hasColorTexture:C,alphaDiscardMode:V}=O,A=C&&V!==_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_15__/* .AlphaDiscardMode */ .sf.Opaque,{output:S,normalType:y,hasColorTextureTransform:P}=O;switch(S){case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__/* .ShaderOutput */ .V.Depth:(0,_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_12__/* .addProjViewLocalOrigin */ .NB)(j,O),h.include(_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .Transform */ .d,O),w.include(_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .SliceDraw */ .HQ,O),h.include(_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .TextureCoordinateAttribute */ .U,O),A&&w.uniforms.add(new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_14__/* .Texture2DPassUniform */ .N("tex",(e=>e.texture))),j.main.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .glsl */ .H)`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),h.include(_util_DiscardOrAdjustAlpha_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .DiscardOrAdjustAlphaPass */ .S,O),w.main.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .glsl */ .H)`
        discardBySlice(vpos);
        ${(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__.If)(A,(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .glsl */ .H)`vec4 texColor = texture(tex, ${P?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}`);break;case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__/* .ShaderOutput */ .V.Shadow:case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__/* .ShaderOutput */ .V.ShadowHighlight:case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__/* .ShaderOutput */ .V.ShadowExcludeHighlight:case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__/* .ShaderOutput */ .V.ViewshedShadow:case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__/* .ShaderOutput */ .V.ObjectAndLayerIdColor:(0,_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_12__/* .addProjViewLocalOrigin */ .NB)(j,O),h.include(_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .Transform */ .d,O),h.include(_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .TextureCoordinateAttribute */ .U,O),h.include(_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_10__/* .VisualVariables */ .A,O),h.include(_output_OutputDepth_glsl_js__WEBPACK_IMPORTED_MODULE_8__/* .OutputDepth */ .L,O),w.include(_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .SliceDraw */ .HQ,O),h.include(_attributes_ObjectAndLayerIdColor_glsl_js__WEBPACK_IMPORTED_MODULE_5__/* .ObjectAndLayerIdColor */ .g,O),(0,_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .addNearFar */ .xJ)(h),b.add("depth","float",{invariant:!0}),A&&w.uniforms.add(new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_14__/* .Texture2DPassUniform */ .N("tex",(e=>e.texture))),j.main.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .glsl */ .H)`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),h.include(_util_DiscardOrAdjustAlpha_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .DiscardOrAdjustAlphaPass */ .S,O),w.main.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .glsl */ .H)`
        discardBySlice(vpos);
        ${(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__.If)(A,(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .glsl */ .H)`vec4 texColor = texture(tex, ${P?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        ${S===_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__/* .ShaderOutput */ .V.ObjectAndLayerIdColor?(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .glsl */ .H)`outputObjectAndLayerIdColor();`:(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .glsl */ .H)`outputDepth(depth);`}`);break;case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__/* .ShaderOutput */ .V.Normal:{(0,_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_12__/* .addProjViewLocalOrigin */ .NB)(j,O),h.include(_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .Transform */ .d,O),h.include(_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .NormalAttribute */ .Y,O),h.include(_attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_7__/* .VertexNormal */ .Mh,O),h.include(_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .TextureCoordinateAttribute */ .U,O),h.include(_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_10__/* .VisualVariables */ .A,O),A&&w.uniforms.add(new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_14__/* .Texture2DPassUniform */ .N("tex",(e=>e.texture))),y===_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .NormalType */ .W.ScreenDerivative&&b.add("vPositionView","vec3",{invariant:!0});const e=y===_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .NormalType */ .W.Attribute||y===_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .NormalType */ .W.Compressed;j.main.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .glsl */ .H)`
        vpos = getVertexInLocalOriginSpace();
        ${e?(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .glsl */ .H)`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .glsl */ .H)`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),w.include(_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .SliceDraw */ .HQ,O),h.include(_util_DiscardOrAdjustAlpha_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .DiscardOrAdjustAlphaPass */ .S,O),w.main.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .glsl */ .H)`
        discardBySlice(vpos);
        ${(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__.If)(A,(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .glsl */ .H)`vec4 texColor = texture(tex, ${P?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}

        ${y===_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .NormalType */ .W.ScreenDerivative?(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .glsl */ .H)`vec3 normal = screenDerivativeNormal(vPositionView);`:(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .glsl */ .H)`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__/* .ShaderOutput */ .V.Highlight:(0,_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_12__/* .addProjViewLocalOrigin */ .NB)(j,O),h.include(_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .Transform */ .d,O),h.include(_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .TextureCoordinateAttribute */ .U,O),h.include(_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_10__/* .VisualVariables */ .A,O),A&&w.uniforms.add(new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_14__/* .Texture2DPassUniform */ .N("tex",(e=>e.texture))),j.main.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .glsl */ .H)`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),w.include(_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .SliceDraw */ .HQ,O),h.include(_util_DiscardOrAdjustAlpha_glsl_js__WEBPACK_IMPORTED_MODULE_11__/* .DiscardOrAdjustAlphaPass */ .S,O),h.include(_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_9__/* .OutputHighlight */ .Q,O),w.main.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .glsl */ .H)`
        discardBySlice(vpos);
        ${(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__.If)(A,(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_13__/* .glsl */ .H)`vec4 texColor = texture(tex, ${P?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}


/***/ }),

/***/ 15420:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NL: () => (/* binding */ c),
/* harmony export */   ZX: () => (/* binding */ f)
/* harmony export */ });
/* unused harmony export EmissionsParameters */
/* harmony import */ var _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55274);
/* harmony import */ var _attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81783);
/* harmony import */ var _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13501);
/* harmony import */ var _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60840);
/* harmony import */ var _shaderModules_FloatDrawUniform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31824);
/* harmony import */ var _shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35449);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72196);
/* harmony import */ var _shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52293);
/* harmony import */ var _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(79856);
/* harmony import */ var _lib_GLTextureMaterial_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(89140);
/* harmony import */ var _webgl_BindType_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11809);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var f;!function(s){s[s.None=0]="None",s[s.SymbolColor=1]="SymbolColor",s[s.EmissiveColor=2]="EmissiveColor",s[s.Texture=3]="Texture",s[s.COUNT=4]="COUNT"}(f||(f={}));class v extends (/* unused pure expression or super */ null && (u)){}function c(u,v){if(!(0,_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__/* .isColorOrColorEmission */ .RN)(v.output))return;const{emissionSource:c,hasEmissiveTextureTransform:p,bindType:x}=v,C=c===f.Texture;C&&(u.include(_attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .VertexTextureCoordinates */ .r,v),u.fragment.uniforms.add(x===_webgl_BindType_js__WEBPACK_IMPORTED_MODULE_10__/* .BindType */ .c.Pass?new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_8__/* .Texture2DPassUniform */ .N("texEmission",(s=>s.textureEmissive)):new _shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_7__/* .Texture2DDrawUniform */ .o("texEmission",(s=>s.textureEmissive))));const g=c===f.EmissiveColor||C;g&&u.fragment.uniforms.add(x===_webgl_BindType_js__WEBPACK_IMPORTED_MODULE_10__/* .BindType */ .c.Pass?new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_3__/* .Float3PassUniform */ .t("emissiveBaseColor",(s=>s.emissiveBaseColor)):new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_2__/* .Float3DrawUniform */ .W("emissiveBaseColor",(s=>s.emissiveBaseColor)));const h=c!==f.None;h&&u.fragment.uniforms.add(x===_webgl_BindType_js__WEBPACK_IMPORTED_MODULE_10__/* .BindType */ .c.Pass?new _shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_5__/* .FloatPassUniform */ .m("emissiveStrength",(s=>s.emissiveStrength)):new _shaderModules_FloatDrawUniform_js__WEBPACK_IMPORTED_MODULE_4__/* .FloatDrawUniform */ .J("emissiveStrength",(s=>s.emissiveStrength)));const T=c===f.SymbolColor;u.fragment.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .glsl */ .H)`
    vec4 getEmissions(vec3 symbolColor) {
      vec4 emissions = ${g?"vec4(emissiveBaseColor, 1.0)":T?"vec4(symbolColor, 1.0)":"vec4(0.0)"};
      ${(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_6__.If)(C,`emissions *= textureLookup(texEmission, ${p?"emissiveUV":"vuv0"});\n         emissions.w = emissions.rgb == vec3(0.0) ? 0.0: emissions.w;`)}
      ${(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_6__.If)(h,"emissions.rgb *= emissiveStrength;")}
      return emissions;
    }
  `)}


/***/ }),

/***/ 56178:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55274);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72196);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(e,o){switch(o.output){case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderOutput */ .V.Shadow:case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderOutput */ .V.ShadowHighlight:case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderOutput */ .V.ShadowExcludeHighlight:case _ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderOutput */ .V.ViewshedShadow:e.fragment.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth){
float fragDepth = _calculateFragDepth(_linearDepth);
gl_FragDepth = fragDepth;
}`)}}


/***/ }),

/***/ 1361:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Q: () => (/* binding */ o)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/HighlightReadBitmap.glsl.js
var HighlightReadBitmap_glsl = __webpack_require__(46653);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js
var ShaderOutput = __webpack_require__(55274);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/glsl.js
var glsl = __webpack_require__(72196);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/BindType.js
var BindType = __webpack_require__(11809);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/Uniform.js
var Uniform = __webpack_require__(99120);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Integer2BindUniform.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Integer2BindUniform_o extends Uniform/* Uniform */.n{constructor(e,o){super(e,"ivec2",BindType/* BindType */.c.Bind,((r,i)=>r.setUniform2iv(e,o(i))))}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/IntegerBindUniform.js
var IntegerBindUniform = __webpack_require__(65083);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DBindUniform.js
var Texture2DBindUniform = __webpack_require__(96390);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DUintBindUniform.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Texture2DUintBindUniform_o extends Uniform/* Uniform */.n{constructor(e,o){super(e,"usampler2D",BindType/* BindType */.c.Bind,((r,s)=>r.bindTexture(e,o(s))))}}

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function o(o,u){const{fragment:r}=o,{output:c,draped:n,hasHighlightMixTexture:s}=u;c===ShaderOutput/* ShaderOutput */.V.Highlight?(r.uniforms.add(new IntegerBindUniform/* IntegerBindUniform */.W("highlightLevel",(i=>i.highlightLevel??0)),new Integer2BindUniform_o("highlightMixOrigin",(i=>i.highlightMixOrigin))),o.outputs.add("fragHighlight","uvec2",0),o.include(HighlightReadBitmap_glsl/* HighlightReadBitmap */.y),s?r.uniforms.add(new Texture2DUintBindUniform_o("highlightMixTexture",(i=>i.highlightMixTexture))).code.add((0,glsl/* glsl */.H)`uvec2 getAccumulatedHighlight() {
return texelFetch(highlightMixTexture, ivec2(gl_FragCoord.xy) - highlightMixOrigin, 0).rg;
}
void outputHighlight(bool occluded) {
if (highlightLevel == 0) {
uint bits = occluded ? 3u : 1u;
fragHighlight = uvec2(bits, 0);
} else {
int ll = (highlightLevel & 3) << 1;
int li = (highlightLevel >> 2) & 3;
uint bits;
if (occluded) {
bits = 3u << ll;
} else {
bits = 1u << ll;
}
uvec2 combinedHighlight = getAccumulatedHighlight();
combinedHighlight[li] |= bits;
fragHighlight = combinedHighlight;
}
}`):r.code.add((0,glsl/* glsl */.H)`void outputHighlight(bool occluded) {
uint bits = occluded ? 3u : 1u;
fragHighlight = uvec2(bits, 0);
}`),n?r.code.add((0,glsl/* glsl */.H)`bool isHighlightOccluded() {
return false;
}`):r.uniforms.add(new Texture2DBindUniform/* Texture2DBindUniform */.x("depthTexture",(i=>i.mainDepth))).code.add((0,glsl/* glsl */.H)`bool isHighlightOccluded() {
float sceneDepth = texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x;
return gl_FragCoord.z > sceneDepth + 5e-7;
}`),r.code.add((0,glsl/* glsl */.H)`void calculateOcclusionAndOutputHighlight() {
outputHighlight(isHighlightOccluded());
}`)):r.code.add((0,glsl/* glsl */.H)`void calculateOcclusionAndOutputHighlight() {}`)}


/***/ }),

/***/ 65743:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60704);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59646);
/* harmony import */ var _shaderModules_Float2BindUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74767);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72196);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function d(e){e.uniforms.add(new _shaderModules_Float2BindUniform_js__WEBPACK_IMPORTED_MODULE_2__/* .Float2BindUniform */ .E("zProjectionMap",(e=>a(e.camera)))),e.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`float linearizeDepth(float depth) {
float depthNdc = depth * 2.0 - 1.0;
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
return -(c1 / (depthNdc + c2 + 1e-7));
}`),e.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return depth;
}`),e.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`)}function a(t){const r=t.projectionMatrix;return (0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .hZ)(c,r[14],r[10])}const c=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)();


/***/ }),

/***/ 76080:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ T)
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78607);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59646);
/* harmony import */ var _attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26139);
/* harmony import */ var _attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81783);
/* harmony import */ var _Normals_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46971);
/* harmony import */ var _shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54473);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72196);
/* harmony import */ var _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6561);
/* harmony import */ var _shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52293);
/* harmony import */ var _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79856);
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(50645);
/* harmony import */ var _webgl_BindType_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(11809);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function T(T,u){const x=T.fragment,{hasVertexTangents:g,doubleSidedMode:f,hasNormalTexture:v,textureCoordinateType:p,bindType:b,hasNormalTextureTransform:y}=u;g?(T.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_10__/* .VertexAttribute */ .r.TANGENT,"vec4"),T.varyings.add("vTangent","vec4"),f===_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .NormalsDoubleSidedMode */ .W.WindingOrder?x.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .glsl */ .H)`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):x.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .glsl */ .H)`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):x.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .glsl */ .H)`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`),v&&p!==_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .TextureCoordinateType */ .I.None&&(T.include(_attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .VertexTextureCoordinates */ .r,u),x.uniforms.add(b===_webgl_BindType_js__WEBPACK_IMPORTED_MODULE_11__/* .BindType */ .c.Pass?new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_9__/* .Texture2DPassUniform */ .N("normalTexture",(e=>e.textureNormal)):new _shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_8__/* .Texture2DDrawUniform */ .o("normalTexture",(e=>e.textureNormal))),y&&(x.uniforms.add(new _shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_5__/* .Float2PassUniform */ .G("scale",(e=>e.scale??_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__/* .ONES */ .Un))),x.uniforms.add(new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_7__/* .Matrix3PassUniform */ .k("normalTextureTransformMatrix",(t=>t.normalTextureTransformMatrix??_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__/* .IDENTITY */ .zK)))),x.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .glsl */ .H)`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),y&&x.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .glsl */ .H)`mat3 normalRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),x.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .glsl */ .H)`return tangentSpace * rawNormal;
}`))}


/***/ }),

/***/ 52636:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24121);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58359);
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2662);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28152);
/* harmony import */ var _PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39486);
/* harmony import */ var _shaderModules_Float3BindUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81598);
/* harmony import */ var _shaderModules_Float4BindUniform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45393);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72196);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function m(n,e){const m=n.fragment,o=void 0!==e.lightingSphericalHarmonicsOrder?e.lightingSphericalHarmonicsOrder:2;0===o?(m.uniforms.add(new _shaderModules_Float3BindUniform_js__WEBPACK_IMPORTED_MODULE_5__/* .Float3BindUniform */ .d("lightingAmbientSH0",(({lighting:n})=>(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.i)(l,n.sh.r[0],n.sh.g[0],n.sh.b[0])))),m.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_7__/* .glsl */ .H)`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===o?(m.uniforms.add(new _shaderModules_Float4BindUniform_js__WEBPACK_IMPORTED_MODULE_6__/* .Float4BindUniform */ .I("lightingAmbientSH_R",(({lighting:i})=>(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_2__.s)(a,i.sh.r[0],i.sh.r[1],i.sh.r[2],i.sh.r[3]))),new _shaderModules_Float4BindUniform_js__WEBPACK_IMPORTED_MODULE_6__/* .Float4BindUniform */ .I("lightingAmbientSH_G",(({lighting:i})=>(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_2__.s)(a,i.sh.g[0],i.sh.g[1],i.sh.g[2],i.sh.g[3]))),new _shaderModules_Float4BindUniform_js__WEBPACK_IMPORTED_MODULE_6__/* .Float4BindUniform */ .I("lightingAmbientSH_B",(({lighting:i})=>(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_2__.s)(a,i.sh.b[0],i.sh.b[1],i.sh.b[2],i.sh.b[3])))),m.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_7__/* .glsl */ .H)`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):2===o&&(m.uniforms.add(new _shaderModules_Float3BindUniform_js__WEBPACK_IMPORTED_MODULE_5__/* .Float3BindUniform */ .d("lightingAmbientSH0",(({lighting:n})=>(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.i)(l,n.sh.r[0],n.sh.g[0],n.sh.b[0]))),new _shaderModules_Float4BindUniform_js__WEBPACK_IMPORTED_MODULE_6__/* .Float4BindUniform */ .I("lightingAmbientSH_R1",(({lighting:i})=>(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_2__.s)(a,i.sh.r[1],i.sh.r[2],i.sh.r[3],i.sh.r[4]))),new _shaderModules_Float4BindUniform_js__WEBPACK_IMPORTED_MODULE_6__/* .Float4BindUniform */ .I("lightingAmbientSH_G1",(({lighting:i})=>(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_2__.s)(a,i.sh.g[1],i.sh.g[2],i.sh.g[3],i.sh.g[4]))),new _shaderModules_Float4BindUniform_js__WEBPACK_IMPORTED_MODULE_6__/* .Float4BindUniform */ .I("lightingAmbientSH_B1",(({lighting:i})=>(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_2__.s)(a,i.sh.b[1],i.sh.b[2],i.sh.b[3],i.sh.b[4]))),new _shaderModules_Float4BindUniform_js__WEBPACK_IMPORTED_MODULE_6__/* .Float4BindUniform */ .I("lightingAmbientSH_R2",(({lighting:i})=>(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_2__.s)(a,i.sh.r[5],i.sh.r[6],i.sh.r[7],i.sh.r[8]))),new _shaderModules_Float4BindUniform_js__WEBPACK_IMPORTED_MODULE_6__/* .Float4BindUniform */ .I("lightingAmbientSH_G2",(({lighting:i})=>(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_2__.s)(a,i.sh.g[5],i.sh.g[6],i.sh.g[7],i.sh.g[8]))),new _shaderModules_Float4BindUniform_js__WEBPACK_IMPORTED_MODULE_6__/* .Float4BindUniform */ .I("lightingAmbientSH_B2",(({lighting:i})=>(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_2__.s)(a,i.sh.b[5],i.sh.b[6],i.sh.b[7],i.sh.b[8])))),m.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_7__/* .glsl */ .H)`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),e.pbrMode!==_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .PBRMode */ .A9.Normal&&e.pbrMode!==_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .PBRMode */ .A9.Schematic||m.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_7__/* .glsl */ .H)`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const l=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)(),a=(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .vt)();


/***/ }),

/***/ 3325:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  n: () => (/* binding */ EvaluateAmbientOcclusion_glsl_t)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/glsl.js
var glsl = __webpack_require__(72196);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DBindUniform.js
var Texture2DBindUniform = __webpack_require__(96390);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(92504);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(6267);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(85251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/time.js
var time = __webpack_require__(60882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(9272);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/math/vec2.js
var vec2 = __webpack_require__(60704);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl.js
var webgl = __webpack_require__(11041);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl/RenderNode.js
var RenderNode = __webpack_require__(43196);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/FBOCacheFormats.js
var FBOCacheFormats = __webpack_require__(79320);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ScreenSpaceConstants.js
var ScreenSpaceConstants = __webpack_require__(23606);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ReloadableShaderModule.js
var ReloadableShaderModule = __webpack_require__(47705);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechnique.js + 1 modules
var ShaderTechnique = __webpack_require__(28347);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/SSAOBlur.glsl.js
var SSAOBlur_glsl = __webpack_require__(45789);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/renderState.js
var renderState = __webpack_require__(2449);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/effects/ssao/SSAOBlurTechnique.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class l extends ShaderTechnique/* ShaderTechnique */.w{constructor(r,s){super(r,s,new ReloadableShaderModule/* ReloadableShaderModule */.$(SSAOBlur_glsl.S,(()=>__webpack_require__.e(/* import() */ 3513).then(__webpack_require__.bind(__webpack_require__, 13513)))))}initializePipeline(){return (0,renderState/* makePipelineState */.Ey)({colorWrite:renderState/* defaultColorWrite */.kn})}}

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/effects/ssao/SSAONoiseData.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const SSAONoiseData_e="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec2f64.js
var vec2f64 = __webpack_require__(59646);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/NoParameters.js
var NoParameters = __webpack_require__(22005);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/effects/ssao/SSAOParameters.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class r extends NoParameters/* NoParameters */.Y{constructor(){super(...arguments),this.projScale=1}}class t extends r{constructor(){super(...arguments),this.intensity=1}}class o extends NoParameters/* NoParameters */.Y{}class c extends o{constructor(){super(...arguments),this.blurSize=(0,vec2f64/* create */.vt)()}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/SSAO.glsl.js
var SSAO_glsl = __webpack_require__(51522);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/effects/ssao/SSAOTechnique.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class SSAOTechnique_t extends ShaderTechnique/* ShaderTechnique */.w{constructor(r,s){super(r,s,new ReloadableShaderModule/* ReloadableShaderModule */.$(SSAO_glsl.S,(()=>__webpack_require__.e(/* import() */ 350).then(__webpack_require__.bind(__webpack_require__, 30350)))))}initializePipeline(){return (0,renderState/* makePipelineState */.Ey)({colorWrite:renderState/* defaultColorWrite */.kn})}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js
var basicInterfaces = __webpack_require__(91013);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/enums.js
var enums = __webpack_require__(41746);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/Texture.js
var Texture = __webpack_require__(8595);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/TextureDescriptor.js
var TextureDescriptor = __webpack_require__(45758);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/effects/ssao/SSAO.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const O=2;let A=class extends RenderNode/* default */.A{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=webgl/* InternalRenderCategory */.OG.SSAO,this.isEnabled=()=>!1,this._enableTime=(0,time/* Milliseconds */.l5)(0),this._passParameters=new t,this._drawParameters=new c}initialize(){const e=Uint8Array.from(atob(SSAONoiseData_e),(e=>e.charCodeAt(0))),r=new TextureDescriptor/* TextureDescriptor */.R;r.wrapMode=enums/* TextureWrapMode */.pF.CLAMP_TO_EDGE,r.pixelFormat=enums/* PixelFormat */.Ab.RGB,r.wrapMode=enums/* TextureWrapMode */.pF.REPEAT,r.hasMipmap=!0,r.width=32,r.height=32,this._passParameters.noiseTexture=new Texture/* Texture */.g(this.renderingContext,r,e),this.techniques.precompile(SSAOTechnique_t),this.techniques.precompile(l),this.addHandles((0,reactiveUtils/* watch */.wB)((()=>this.isEnabled()),(()=>this._enableTime=(0,time/* Milliseconds */.l5)(0))))}destroy(){this._passParameters.noiseTexture=(0,maybe/* disposeMaybe */.WD)(this._passParameters.noiseTexture)}render(e){const s=e.find((({name:e})=>"normals"===e)),t=s?.getTexture(),o=s?.getTexture(enums/* DepthStencilAttachment */.nI);if(!t||!o)return;const a=this.techniques.get(SSAOTechnique_t),c=this.techniques.get(l);if(!a.compiled||!c.compiled)return this._enableTime=(0,time/* Milliseconds */.l5)(performance.now()),void this.requestRender(basicInterfaces/* RenderRequestType */.C7.UPDATE);0===this._enableTime&&(this._enableTime=(0,time/* Milliseconds */.l5)(performance.now()));const d=this.renderingContext,f=this.view.qualitySettings.fadeDuration,b=this.bindParameters,P=b.camera,S=P.relativeElevation,x=(0,mathUtils/* clamp */.qE)((ScreenSpaceConstants/* distanceFadeEnd */.b-S)/(ScreenSpaceConstants/* distanceFadeEnd */.b-ScreenSpaceConstants/* distanceFadeStart */.O),0,1),q=f>0?Math.min(f,performance.now()-this._enableTime)/f:1,A=q*x;this._passParameters.normalTexture=t,this._passParameters.depthTexture=o,this._passParameters.projScale=1/P.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*C/(0,SSAO_glsl.g)(P)**6*A;const R=P.fullViewport[2],v=P.fullViewport[3],y=this.fboCache.acquire(R,v,"ssao input",FBOCacheFormats/* ColorFormat */.NV.RG8UNORM);d.bindFramebuffer(y.fbo),d.setViewport(0,0,R,v),d.bindTechnique(a,b,this._passParameters,this._drawParameters),d.screen.draw();const E=Math.round(R/O),M=Math.round(v/O),U=this.fboCache.acquire(E,M,"ssao blur",FBOCacheFormats/* ColorFormat */.NV.R8UNORM);d.bindFramebuffer(U.fbo),this._drawParameters.colorTexture=y.getTexture(),(0,vec2/* set */.hZ)(this._drawParameters.blurSize,0,O/v),d.bindTechnique(c,b,this._passParameters,this._drawParameters),d.setViewport(0,0,E,M),d.screen.draw(),y.release();const V=this.fboCache.acquire(E,M,webgl/* InternalRenderCategory */.OG.SSAO,FBOCacheFormats/* ColorFormat */.NV.R8UNORM);return d.bindFramebuffer(V.fbo),d.setViewport(0,0,R,v),d.setClearColor(1,1,1,0),d.clear(enums/* FramebufferBit */.NV.COLOR),this._drawParameters.colorTexture=U.getTexture(),(0,vec2/* set */.hZ)(this._drawParameters.blurSize,O/R,0),d.bindTechnique(c,b,this._passParameters,this._drawParameters),d.setViewport(0,0,E,M),d.screen.draw(),d.setViewport4fv(P.fullViewport),U.release(),q<1&&this.requestRender(basicInterfaces/* RenderRequestType */.C7.UPDATE),V}};(0,tslib_es6._)([(0,property/* property */.MZ)()],A.prototype,"consumes",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],A.prototype,"produces",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],A.prototype,"isEnabled",void 0),A=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.3d.webgl-engine.effects.ssao.SSAO")],A);const C=.5;

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function EvaluateAmbientOcclusion_glsl_t(t,o){o.receiveAmbientOcclusion?(t.uniforms.add(new Texture2DBindUniform/* Texture2DBindUniform */.x("ssaoTex",(e=>e.ssao?.getTexture()))),t.constants.add("blurSizePixelsInverse","float",1/O),t.code.add((0,glsl/* glsl */.H)`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):t.code.add((0,glsl/* glsl */.H)`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}


/***/ }),

/***/ 93929:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  kA: () => (/* binding */ L),
  a8: () => (/* binding */ v),
  eU: () => (/* binding */ f)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/colorUtils.js
var colorUtils = __webpack_require__(31415);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientLighting.glsl.js
var EvaluateAmbientLighting_glsl = __webpack_require__(52636);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js + 5 modules
var EvaluateAmbientOcclusion_glsl = __webpack_require__(3325);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/MainLighting.glsl.js
var MainLighting_glsl = __webpack_require__(696);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js + 1 modules
var PhysicallyBasedRendering_glsl = __webpack_require__(17666);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js
var PhysicallyBasedRenderingParameters_glsl = __webpack_require__(39486);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PiUtils.glsl.js
var PiUtils_glsl = __webpack_require__(66579);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/BooleanBindUniform.js
var BooleanBindUniform = __webpack_require__(10561);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatBindUniform.js
var FloatBindUniform = __webpack_require__(17983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/glsl.js
var glsl = __webpack_require__(72196);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lighting/SceneLighting.js + 2 modules
var SceneLighting = __webpack_require__(9409);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/BlackLevelLightSoftCompression.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function a(a){a.code.add((0,glsl/* glsl */.H)`float mapChannel(float x, vec2 p) {
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),a.code.add((0,glsl/* glsl */.H)`vec3 blackLevelSoftCompression(vec3 color, float averageAmbientRadiance) {
vec2 p = vec2(0.02, 0.0075) * averageAmbientRadiance;
return vec3(mapChannel(color.x, p), mapChannel(color.y, p), mapChannel(color.z, p));
}`)}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/ToneMapping.glsl.js
var ToneMapping_glsl = __webpack_require__(85856);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function v(i){i.constants.add("ambientBoostFactor","float",SceneLighting/* ambientBoost */.uH)}function f(i){i.uniforms.add(new FloatBindUniform/* FloatBindUniform */.U("lightingGlobalFactor",(i=>i.lighting.globalFactor)))}function L(h,L){const b=h.fragment,{pbrMode:C,spherical:N,hasColorTexture:R}=L;b.include(EvaluateAmbientOcclusion_glsl/* EvaluateAmbientOcclusion */.n,L),C!==PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Disabled&&b.include(PhysicallyBasedRendering_glsl/* PhysicallyBasedRendering */.c,L),h.include(EvaluateAmbientLighting_glsl/* EvaluateAmbientLighting */.W,L),b.include(PiUtils_glsl/* PiUtils */.p),b.include(ToneMapping_glsl/* ToneMapping */.b,L);const D=!(C===PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Schematic&&!R);switch(D&&b.include(a),b.code.add((0,glsl/* glsl */.H)`
    const float GAMMA_SRGB = ${glsl/* glsl */.H.float(colorUtils/* colorGamma */.Tf)};
    const float INV_GAMMA_SRGB = 0.4761904;
    ${(0,glsl.If)(C!==PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Disabled,"const float GROUND_REFLECTANCE = 0.2;")}
  `),v(b),f(b),(0,MainLighting_glsl/* addMainLightDirection */.Gc)(b),b.code.add((0,glsl/* glsl */.H)`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${N?(0,glsl/* glsl */.H)`normalize(vPosWorld)`:(0,glsl/* glsl */.H)`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,MainLighting_glsl/* addMainLightIntensity */.O4)(b),b.code.add((0,glsl/* glsl */.H)`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),C){case PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Disabled:case PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.WaterOnIntegratedMesh:case PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Water:h.include(MainLighting_glsl/* applyShading */.Vt),b.code.add((0,glsl/* glsl */.H)`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Normal:case PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Schematic:b.code.add((0,glsl/* glsl */.H)`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight,
vec3 viewDir, vec3 groundNormal, vec3 mrr, vec4 _emission,
float additionalAmbientIrradiance) {
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotNG = clamp(dot(normal, groundNormal), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, groundNormal), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),b.code.add((0,glsl/* glsl */.H)`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),L.useFillLights?b.uniforms.add(new BooleanBindUniform/* BooleanBindUniform */.o("hasFillLights",(i=>i.enableFillLights))):b.constants.add("hasFillLights","bool",!1),b.code.add((0,glsl/* glsl */.H)`vec3 ambientDir = vec3(5.0 * groundNormal[1] - groundNormal[0] * groundNormal[2], - 5.0 * groundNormal[0] - groundNormal[2] * groundNormal[1], groundNormal[1] * groundNormal[1] + groundNormal[0] * groundNormal[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),b.uniforms.add(new FloatBindUniform/* FloatBindUniform */.U("lightingSpecularStrength",(i=>i.lighting.mainLight.specularStrength)),new FloatBindUniform/* FloatBindUniform */.U("lightingEnvironmentStrength",(i=>i.lighting.mainLight.environmentStrength))).code.add((0,glsl/* glsl */.H)`vec3 horizonRingDir = inputs.RdotNG * groundNormal - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE);`),b.code.add((0,glsl/* glsl */.H)`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission.rgb == vec3(0.0) ? _emission.rgb : tonemapACES(pow(_emission.rgb, vec3(GAMMA_SRGB)));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${D?(0,glsl/* glsl */.H)`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:(0,glsl/* glsl */.H)`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Simplified:case PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.TerrainWithWater:(0,MainLighting_glsl/* addMainLightDirection */.Gc)(b),(0,MainLighting_glsl/* addMainLightIntensity */.O4)(b),b.code.add((0,glsl/* glsl */.H)`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
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
}`);default:case PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.COUNT:}}


/***/ }),

/***/ 696:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gc: () => (/* binding */ t),
/* harmony export */   O4: () => (/* binding */ a),
/* harmony export */   Vt: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _shaderModules_Float3BindUniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81598);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72196);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function t(n){n.uniforms.add(new _shaderModules_Float3BindUniform_js__WEBPACK_IMPORTED_MODULE_0__/* .Float3BindUniform */ .d("mainLightDirection",(i=>i.lighting.mainLight.direction)))}function a(n){n.uniforms.add(new _shaderModules_Float3BindUniform_js__WEBPACK_IMPORTED_MODULE_0__/* .Float3BindUniform */ .d("mainLightIntensity",(i=>i.lighting.mainLight.intensity)))}function o(i){t(i.fragment),a(i.fragment),i.fragment.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`vec3 applyShading(vec3 shadingNormal, float shadow) {
float dotVal = clamp(dot(shadingNormal, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}


/***/ }),

/***/ 46971:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ i),
/* harmony export */   r: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73345);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72196);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(e,o){const n=e.fragment;switch(n.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),o.doubleSidedMode){case i.None:n.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case i.View:n.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case i.WindingOrder:n.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .neverReached */ .Xb)(o.doubleSidedMode);case i.COUNT:}}var i;!function(a){a[a.None=0]="None",a[a.View=1]="View",a[a.WindingOrder=2]="WindingOrder",a[a.COUNT=3]="COUNT"}(i||(i={}));


/***/ }),

/***/ 17666:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ n),
  f: () => (/* binding */ r)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/glsl.js
var glsl = __webpack_require__(72196);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/AnalyticalSkyModel.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function t(t){t.code.add((0,glsl/* glsl */.H)`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG) {
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.code.add((0,glsl/* glsl */.H)`float integratedRadiance(float cosTheta2, float roughness) {
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.code.add((0,glsl/* glsl */.H)`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness) {
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
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function n(n,r){n.include(PiUtils_glsl/* PiUtils */.p),r.pbrMode!==PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Normal&&r.pbrMode!==PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Schematic&&r.pbrMode!==PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Simplified&&r.pbrMode!==PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.TerrainWithWater||(n.code.add((0,glsl/* glsl */.H)`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),n.code.add((0,glsl/* glsl */.H)`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),r.pbrMode!==PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Normal&&r.pbrMode!==PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Schematic||(n.include(t),n.code.add((0,glsl/* glsl */.H)`struct PBRShadingInfo
{
float NdotV;
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
};`),n.code.add((0,glsl/* glsl */.H)`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`))}function r(e,o){e.include(PiUtils_glsl/* PiUtils */.p),e.code.add((0,glsl/* glsl */.H)`
  struct PBRShadingWater {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
  };

  float dtrExponent = ${o.useCustomDTRExponentForWater?"2.2":"2.0"};
  `),e.code.add((0,glsl/* glsl */.H)`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),e.code.add((0,glsl/* glsl */.H)`float normalDistributionWater(float NdotH, float roughness) {
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),e.code.add((0,glsl/* glsl */.H)`float geometricOcclusionKelemen(float LoH) {
return 0.25 / (LoH * LoH);
}`),e.code.add((0,glsl/* glsl */.H)`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max) {
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze) * strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}`)}


/***/ }),

/***/ 39486:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A9: () => (/* binding */ n),
/* harmony export */   _Z: () => (/* binding */ m)
/* harmony export */ });
/* unused harmony export PBRRenderingParameters */
/* harmony import */ var _attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81783);
/* harmony import */ var _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13501);
/* harmony import */ var _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60840);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72196);
/* harmony import */ var _shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52293);
/* harmony import */ var _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79856);
/* harmony import */ var _materials_pbrUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12221);
/* harmony import */ var _webgl_BindType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11809);
/* harmony import */ var _webgl_NoParameters_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22005);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var n;!function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Simplified=5]="Simplified",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT"}(n||(n={}));class d extends _webgl_NoParameters_js__WEBPACK_IMPORTED_MODULE_8__/* .NoParameters */ .Y{constructor(e,r){super(),this.textureOcclusion=e,this.textureMetallicRoughness=r,this.mrrFactors=_materials_pbrUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .schematicMRRFactors */ .Bt}}function m(c,u){const d=u.pbrMode,m=c.fragment;if(d!==n.Schematic&&d!==n.Disabled&&d!==n.Normal)return void m.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`void applyPBRFactors() {}`);if(d===n.Disabled)return void m.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(d===n.Schematic)return void m.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);const{hasMetallicRoughnessTexture:p,hasMetallicRoughnessTextureTransform:h,hasOcclusionTexture:f,hasOcclusionTextureTransform:g,bindType:v}=u;(p||f)&&c.include(_attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexTextureCoordinates */ .r,u),m.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`vec3 mrr;
float occlusion;`),p&&m.uniforms.add(v===_webgl_BindType_js__WEBPACK_IMPORTED_MODULE_7__/* .BindType */ .c.Pass?new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_5__/* .Texture2DPassUniform */ .N("texMetallicRoughness",(e=>e.textureMetallicRoughness)):new _shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_4__/* .Texture2DDrawUniform */ .o("texMetallicRoughness",(e=>e.textureMetallicRoughness))),f&&m.uniforms.add(v===_webgl_BindType_js__WEBPACK_IMPORTED_MODULE_7__/* .BindType */ .c.Pass?new _shaderModules_Texture2DPassUniform_js__WEBPACK_IMPORTED_MODULE_5__/* .Texture2DPassUniform */ .N("texOcclusion",(e=>e.textureOcclusion)):new _shaderModules_Texture2DDrawUniform_js__WEBPACK_IMPORTED_MODULE_4__/* .Texture2DDrawUniform */ .o("texOcclusion",(e=>e.textureOcclusion))),m.uniforms.add(v===_webgl_BindType_js__WEBPACK_IMPORTED_MODULE_7__/* .BindType */ .c.Pass?new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_2__/* .Float3PassUniform */ .t("mrrFactors",(e=>e.mrrFactors)):new _shaderModules_Float3DrawUniform_js__WEBPACK_IMPORTED_MODULE_1__/* .Float3DrawUniform */ .W("mrrFactors",(e=>e.mrrFactors))),m.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`
    ${(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_3__.If)(p,(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_3__.If)(f,"void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }")}

    float getBakedOcclusion() {
      return ${f?"occlusion":"1.0"};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_3__.If)(p,`applyMetallicRoughness(${h?"metallicRoughnessUV":"vuv0"});`)}
      ${(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_3__.If)(f,`applyOcclusion(${g?"occlusionUV":"vuv0"});`)}
    }
  `)}


/***/ }),

/***/ 66579:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function t(t){const a=3.141592653589793,n=.3183098861837907;t.constants.add("PI","float",a),t.constants.add("LIGHT_NORMALIZATION","float",n),t.constants.add("INV_PI","float",n),t.constants.add("HALF_PI","float",1.570796326794897),t.constants.add("TWO_PI","float",6.28318530717958)}


/***/ }),

/***/ 53402:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Bz: () => (/* binding */ h),
  G: () => (/* binding */ ReadShadowMap_glsl_c)
});

// UNUSED EXPORTS: ReadShadowMapDrawParameters, ReadShadowMapPassParameters

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(58359);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4BindUniform.js
var Float4BindUniform = __webpack_require__(45393);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/glsl.js
var glsl = __webpack_require__(72196);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/IntegerBindUniform.js
var IntegerBindUniform = __webpack_require__(65083);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/BindType.js
var BindType = __webpack_require__(11809);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/Uniform.js
var Uniform = __webpack_require__(99120);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4sDrawUniform.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class t extends Uniform/* Uniform */.n{constructor(o,t,e){super(o,"mat4",BindType/* BindType */.c.Draw,((r,e,s,m)=>r.setUniformMatrix4fv(o,t(e,s,m))),e)}}

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4sPassUniform.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class o extends Uniform/* Uniform */.n{constructor(s,o,t){super(s,"mat4",BindType/* BindType */.c.Pass,((r,t,e)=>r.setUniformMatrix4fv(s,o(t,e))),t)}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/NoParameters.js
var NoParameters = __webpack_require__(22005);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/calculateUVZShadow.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class d extends NoParameters/* NoParameters */.Y{constructor(){super(...arguments),this.origin=(0,vec3f64/* create */.vt)()}}function c(a){a.fragment.uniforms.add(new o("shadowMapMatrix",((a,e)=>e.shadowMap.getShadowMapMatrices(a.origin)),4)),l(a)}function n(a){a.fragment.uniforms.add(new t("shadowMapMatrix",((a,e)=>e.shadowMap.getShadowMapMatrices(a.origin)),4)),l(a)}function l(a){const{fragment:i}=a;i.uniforms.add(new Float4BindUniform/* Float4BindUniform */.I("cascadeDistances",(a=>a.shadowMap.cascadeDistances)),new IntegerBindUniform/* IntegerBindUniform */.W("numCascades",(a=>a.shadowMap.numCascades))),i.code.add((0,glsl/* glsl */.H)`const vec3 invalidShadowmapUVZ = vec3(0.0, 0.0, -1.0);
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
vec3 calculateUVZShadow(in vec3 _worldPos, in float _linearDepth, in ivec2 shadowMapSize) {
int i = _linearDepth < cascadeDistances[1] ? 0 : _linearDepth < cascadeDistances[2] ? 1 : _linearDepth < cascadeDistances[3] ? 2 : 3;
if (i >= numCascades) {
return invalidShadowmapUVZ;
}
mat4 shadowMatrix = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
vec3 lvpos = lightSpacePosition(_worldPos, shadowMatrix);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
return invalidShadowmapUVZ;
}
vec2 uvShadow = cascadeCoordinates(i, shadowMapSize, lvpos);
return vec3(uvShadow, lvpos.z);
}`)}

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ShadowmapFiltering.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class ShadowmapFiltering_glsl_d extends (/* unused pure expression or super */ null && (a)){}function ShadowmapFiltering_glsl_e(a){a.fragment.code.add((0,glsl/* glsl */.H)`float readShadowMapUVZ(vec3 uvzShadow, sampler2DShadow _shadowMap) {
return texture(_shadowMap, uvzShadow);
}`)}

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DShadowBindUniform.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Texture2DShadowBindUniform_o extends Uniform/* Uniform */.n{constructor(e,o){super(e,"sampler2DShadow",BindType/* BindType */.c.Bind,((r,s)=>r.bindTexture(e,o(s))))}}

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class ReadShadowMap_glsl_l extends (/* unused pure expression or super */ null && (r)){}class ReadShadowMap_glsl_n extends NoParameters/* NoParameters */.Y{constructor(){super(...arguments),this.origin=(0,vec3f64/* create */.vt)()}}function ReadShadowMap_glsl_c(o,a){a.receiveShadows&&(o.include(c),u(o))}function h(o,e){e.receiveShadows&&(o.include(n),u(o))}function u(o){o.include(ShadowmapFiltering_glsl_e);const{fragment:e}=o;e.uniforms.add(new Texture2DShadowBindUniform_o("shadowMap",(o=>o.shadowMap.depthTexture))),e.code.add((0,glsl/* glsl */.H)`float readShadowMap(const in vec3 _worldPos, float _linearDepth) {
vec3 uvzShadow = calculateUVZShadow(_worldPos, _linearDepth, textureSize(shadowMap,0));
if (uvzShadow.z < 0.0) {
return 0.0;
}
return readShadowMapUVZ(uvzShadow, shadowMap);
}`)}


/***/ }),

/***/ 23606:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ e),
/* harmony export */   b: () => (/* binding */ o)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const e=3e5,o=5e5;


/***/ }),

/***/ 23233:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _output_ReadDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65743);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72196);
/* harmony import */ var _shaderModules_Texture2DBindUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96390);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function i(i,{occlusionPass:d,terrainDepthTest:a,cullAboveTerrain:n}){const{vertex:s,fragment:p,varyings:h}=i;if(!a)return s.code.add("void forwardViewPosDepth(vec3 pos) {}"),void p.code.add(`${d?"bool":"void"} discardByTerrainDepth() { ${(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__.If)(d,"return false;")}}`);h.add("viewPosDepth","float",{invariant:!0}),s.code.add("void forwardViewPosDepth(vec3 pos) {\n    viewPosDepth = pos.z;\n  }"),p.include(_output_ReadDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .ReadDepth */ .E),p.uniforms.add(new _shaderModules_Texture2DBindUniform_js__WEBPACK_IMPORTED_MODULE_2__/* .Texture2DBindUniform */ .x("terrainDepthTexture",(e=>e.terrainDepth?.attachment))).code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`
    ${d?"bool":"void"} discardByTerrainDepth() {
      float depth = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
      float linearDepth = linearizeDepth(depth);
      ${d?"return viewPosDepth < linearDepth && depth < 1.0;":`if(viewPosDepth ${n?">":"<="} linearDepth) discard;`}
    }`)}


/***/ }),

/***/ 25541:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MU: () => (/* binding */ t),
/* harmony export */   O1: () => (/* binding */ d),
/* harmony export */   QM: () => (/* binding */ n),
/* harmony export */   Sx: () => (/* binding */ i),
/* harmony export */   q2: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78607);
/* harmony import */ var _attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26139);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72196);
/* harmony import */ var _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6561);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function s(e,s){s.hasColorTextureTransform?(e.varyings.add("colorUV","vec2"),e.vertex.uniforms.add(new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_3__/* .Matrix3PassUniform */ .k("colorTextureTransformMatrix",(e=>e.colorTextureTransformMatrix??_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__/* .IDENTITY */ .zK))).code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H)`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H)`void forwardColorUV(){}`)}function i(s,i){i.hasNormalTextureTransform&&i.textureCoordinateType!==_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .TextureCoordinateType */ .I.None?(s.varyings.add("normalUV","vec2"),s.vertex.uniforms.add(new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_3__/* .Matrix3PassUniform */ .k("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__/* .IDENTITY */ .zK))).code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H)`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):s.vertex.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H)`void forwardNormalUV(){}`)}function t(s,i){i.hasEmissionTextureTransform&&i.textureCoordinateType!==_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .TextureCoordinateType */ .I.None?(s.varyings.add("emissiveUV","vec2"),s.vertex.uniforms.add(new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_3__/* .Matrix3PassUniform */ .k("emissiveTextureTransformMatrix",(e=>e.emissiveTextureTransformMatrix??_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__/* .IDENTITY */ .zK))).code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H)`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):s.vertex.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H)`void forwardEmissiveUV(){}`)}function d(s,i){i.hasOcclusionTextureTransform&&i.textureCoordinateType!==_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .TextureCoordinateType */ .I.None?(s.varyings.add("occlusionUV","vec2"),s.vertex.uniforms.add(new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_3__/* .Matrix3PassUniform */ .k("occlusionTextureTransformMatrix",(e=>e.occlusionTextureTransformMatrix??_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__/* .IDENTITY */ .zK))).code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H)`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):s.vertex.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H)`void forwardOcclusionUV(){}`)}function n(s,i){i.hasMetallicRoughnessTextureTransform&&i.textureCoordinateType!==_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .TextureCoordinateType */ .I.None?(s.varyings.add("metallicRoughnessUV","vec2"),s.vertex.uniforms.add(new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_3__/* .Matrix3PassUniform */ .k("metallicRoughnessTextureTransformMatrix",(e=>e.metallicRoughnessTextureTransformMatrix??_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__/* .IDENTITY */ .zK))).code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H)`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):s.vertex.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H)`void forwardMetallicRoughnessUV(){}`)}


/***/ }),

/***/ 34328:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60840);
/* harmony import */ var _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1411);
/* harmony import */ var _shaderModules_Float4sPassUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54706);
/* harmony import */ var _shaderModules_FloatsPassUniform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45160);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72196);
/* harmony import */ var _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6561);
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50645);
/* harmony import */ var _materials_VisualVariablePassParameters_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17745);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function n(n,s){const{vertex:u,attributes:c}=n;s.hasVvInstancing&&(s.vvSize||s.vvColor)&&c.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_6__/* .VertexAttribute */ .r.INSTANCEFEATUREATTRIBUTE,"vec4"),s.vvSize?(u.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_0__/* .Float3PassUniform */ .t("vvSizeMinSize",(o=>o.vvSize.minSize))),u.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_0__/* .Float3PassUniform */ .t("vvSizeMaxSize",(o=>o.vvSize.maxSize))),u.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_0__/* .Float3PassUniform */ .t("vvSizeOffset",(o=>o.vvSize.offset))),u.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_0__/* .Float3PassUniform */ .t("vvSizeFactor",(o=>o.vvSize.factor))),u.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_0__/* .Float3PassUniform */ .t("vvSizeFallback",(o=>o.vvSize.fallback))),u.uniforms.add(new _shaderModules_Matrix3PassUniform_js__WEBPACK_IMPORTED_MODULE_5__/* .Matrix3PassUniform */ .k("vvSymbolRotationMatrix",(o=>o.vvSymbolRotationMatrix))),u.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_0__/* .Float3PassUniform */ .t("vvSymbolAnchor",(o=>o.vvSymbolAnchor))),u.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .glsl */ .H)`vec3 vvScale(vec4 _featureAttribute) {
if (isnan(_featureAttribute.x)) {
return vvSizeFallback;
}
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),u.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .glsl */ .H)`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 scale = max(vvScale(_featureAttribute), eps);
        return vec4(vvSymbolRotationMatrix * _normal / scale, 1.0);
      }

      ${s.hasVvInstancing?(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .glsl */ .H)`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):u.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .glsl */ .H)`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),s.vvColor?(u.constants.add("vvColorNumber","int",_materials_VisualVariablePassParameters_js__WEBPACK_IMPORTED_MODULE_7__/* .vvColorNumber */ .p),u.uniforms.add(new _shaderModules_FloatsPassUniform_js__WEBPACK_IMPORTED_MODULE_3__/* .FloatsPassUniform */ .x("vvColorValues",(o=>o.vvColor.values),_materials_VisualVariablePassParameters_js__WEBPACK_IMPORTED_MODULE_7__/* .vvColorNumber */ .p),new _shaderModules_Float4sPassUniform_js__WEBPACK_IMPORTED_MODULE_2__/* .Float4sPassUniform */ .F("vvColorColors",(o=>o.vvColor.colors),_materials_VisualVariablePassParameters_js__WEBPACK_IMPORTED_MODULE_7__/* .vvColorNumber */ .p),new _shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_1__/* .Float4PassUniform */ .E("vvColorFallback",(o=>o.vvColor.fallback))),u.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .glsl */ .H)`
      vec4 interpolateVVColor(float value) {
        if (isnan(value)) {
          return vvColorFallback;
        }

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

      ${s.hasVvInstancing?(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .glsl */ .H)`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):u.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .glsl */ .H)`vec4 vvColor() { return vec4(1.0); }`)}


/***/ }),

/***/ 1062:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ir: () => (/* binding */ f)
/* harmony export */ });
/* unused harmony exports getProjectionInfo, getZScale */
/* harmony import */ var _core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60704);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59646);
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2662);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28152);
/* harmony import */ var _shaderModules_Float2BindUniform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74767);
/* harmony import */ var _shaderModules_Float4BindUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45393);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72196);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function f(r){r.fragment.uniforms.add(new _shaderModules_Float4BindUniform_js__WEBPACK_IMPORTED_MODULE_5__/* .Float4BindUniform */ .I("projInfo",(r=>n(r.camera)))),r.fragment.uniforms.add(new _shaderModules_Float2BindUniform_js__WEBPACK_IMPORTED_MODULE_4__/* .Float2BindUniform */ .E("zScale",(r=>m(r.camera)))),r.fragment.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .glsl */ .H)`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function n(r){const o=r.projectionMatrix;return 0===o[11]?(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_2__.s)(c,2/(r.fullWidth*o[0]),2/(r.fullHeight*o[5]),(1+o[12])/o[0],(1+o[13])/o[5]):(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_2__.s)(c,-2/(r.fullWidth*o[0]),-2/(r.fullHeight*o[5]),(1-o[8])/o[0],(1-o[9])/o[5])}const c=(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .vt)();function m(o){return 0===o.projectionMatrix[11]?(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .hZ)(l,0,1):(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .hZ)(l,1,0)}const l=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)();


/***/ }),

/***/ 89002:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72196);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(e){e.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H)`vec4 premultiplyAlpha(vec4 v) {
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


/***/ }),

/***/ 4139:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ f)
/* harmony export */ });
/* unused harmony export DiscardOrAdjustAlphaDraw */
/* harmony import */ var _shaderModules_FloatDrawUniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31824);
/* harmony import */ var _shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35449);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72196);
/* harmony import */ var _lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91013);
/* harmony import */ var _webscene_support_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63199);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function f(o,t){u(o,t,new _shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_1__/* .FloatPassUniform */ .m("textureAlphaCutoff",(o=>o.textureAlphaCutoff)))}function l(r,t){u(r,t,new o("textureAlphaCutoff",(o=>o.textureAlphaCutoff)))}function u(o,r,f){const l=o.fragment,u=r.alphaDiscardMode,d=u===_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_3__/* .AlphaDiscardMode */ .sf.Blend;u!==_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_3__/* .AlphaDiscardMode */ .sf.Mask&&u!==_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_3__/* .AlphaDiscardMode */ .sf.MaskBlend||l.uniforms.add(f),l.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H)`
    void discardOrAdjustAlpha(inout vec4 color) {
      ${u===_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_3__/* .AlphaDiscardMode */ .sf.Opaque?"color.a = 1.0;":`if (color.a < ${d?_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H.float(_webscene_support_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_4__/* .alphaCutoff */ .Q):"textureAlphaCutoff"}) {\n              discard;\n             } ${(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_2__.If)(u===_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_3__/* .AlphaDiscardMode */ .sf.Mask,"else { color.a = 1.0; }")}`}
    }
  `)}


/***/ }),

/***/ 60915:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55623);
/* harmony import */ var _ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89002);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72196);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function i(i){i.include(_ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .ColorConversion */ .a),i.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H)`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H.int(_layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .ColorMixModeEnum */ .k5.Multiply)}) {
        return allMixed;
      }
      if (mode == ${_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H.int(_layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .ColorMixModeEnum */ .k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H.int(_layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .ColorMixModeEnum */ .k5.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H.int(_layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .ColorMixModeEnum */ .k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .glsl */ .H.int(_layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .ColorMixModeEnum */ .k5.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}


/***/ }),

/***/ 6916:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OH: () => (/* binding */ o),
/* harmony export */   Y6: () => (/* binding */ s),
/* harmony export */   pM: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24121);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58359);
/* harmony import */ var _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60840);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72196);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function s(e){e.vertex.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function t(e){e.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_2__/* .Float3PassUniform */ .t("screenSizePerspective",(e=>i(e.screenSizePerspective))))}function o(e){e.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_2__/* .Float3PassUniform */ .t("screenSizePerspectiveAlignment",(e=>i(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}function i(a){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.i)(n,a.parameters.divisor,a.parameters.offset,a.minScaleFactor)}const n=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)();


/***/ }),

/***/ 63592:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  yu: () => (/* binding */ d),
  Nz: () => (/* binding */ w),
  NB: () => (/* binding */ f),
  S7: () => (/* binding */ p)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js
var mat4 = __webpack_require__(21742);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js
var mat4f64 = __webpack_require__(86128);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(24121);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(58359);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3BindUniform.js
var Float3BindUniform = __webpack_require__(81598);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3DrawUniform.js
var Float3DrawUniform = __webpack_require__(13501);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatBindUniform.js
var FloatBindUniform = __webpack_require__(17983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4BindUniform.js
var Matrix4BindUniform = __webpack_require__(82088);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/BindType.js
var BindType = __webpack_require__(11809);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/Uniform.js
var Uniform = __webpack_require__(99120);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4DrawUniform.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class t extends Uniform/* Uniform */.n{constructor(o,t){super(o,"mat4",BindType/* BindType */.c.Draw,((r,e,s)=>r.setUniformMatrix4fv(o,t(e,s))))}}

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function d(r,i){i.instancedDoublePrecision?r.constants.add("cameraPosition","vec3",vec3f64/* ZEROS */.uY):r.uniforms.add(new Float3DrawUniform/* Float3DrawUniform */.W("cameraPosition",((r,i)=>(0,vec32.i)(v,i.camera.viewInverseTransposeMatrix[3]-r.origin[0],i.camera.viewInverseTransposeMatrix[7]-r.origin[1],i.camera.viewInverseTransposeMatrix[11]-r.origin[2]))))}function f(i,o){if(!o.instancedDoublePrecision)return void i.uniforms.add(new Matrix4BindUniform/* Matrix4BindUniform */.F("proj",(r=>r.camera.projectionMatrix)),new t("view",((i,e)=>(0,mat4/* translate */.Tl)(l,e.camera.viewMatrix,i.origin))),new Float3DrawUniform/* Float3DrawUniform */.W("localOrigin",(r=>r.origin)));const a=({camera:r})=>(0,vec32.i)(v,r.viewInverseTransposeMatrix[3],r.viewInverseTransposeMatrix[7],r.viewInverseTransposeMatrix[11]);i.uniforms.add(new Matrix4BindUniform/* Matrix4BindUniform */.F("proj",(r=>r.camera.projectionMatrix)),new Matrix4BindUniform/* Matrix4BindUniform */.F("view",(i=>(0,mat4/* translate */.Tl)(l,i.camera.viewMatrix,a(i)))),new Float3BindUniform/* Float3BindUniform */.d("localOrigin",(r=>a(r))))}const l=(0,mat4f64/* create */.vt)(),v=(0,vec3f64/* create */.vt)();function p(r){r.uniforms.add(new Matrix4BindUniform/* Matrix4BindUniform */.F("viewNormal",(r=>r.camera.viewInverseTransposeMatrix)))}function w(r){r.uniforms.add(new FloatBindUniform/* FloatBindUniform */.U("pixelRatio",(r=>r.camera.pixelRatio/r.overlayStretch)))}


/***/ }),

/***/ 10561:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11809);
/* harmony import */ var _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99120);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class e extends _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__/* .Uniform */ .n{constructor(r,e){super(r,"bool",_webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__/* .BindType */ .c.Bind,((o,s)=>o.setUniform1b(r,e(s))))}}


/***/ }),

/***/ 74767:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11809);
/* harmony import */ var _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99120);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class o extends _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__/* .Uniform */ .n{constructor(e,o){super(e,"vec2",_webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__/* .BindType */ .c.Bind,((r,s)=>r.setUniform2fv(e,o(s))))}}


/***/ }),

/***/ 96320:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11809);
/* harmony import */ var _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99120);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class o extends _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__/* .Uniform */ .n{constructor(e,o){super(e,"vec2",_webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__/* .BindType */ .c.Draw,((r,s,t,m)=>r.setUniform2fv(e,o(s,t,m))))}}


/***/ }),

/***/ 54473:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11809);
/* harmony import */ var _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99120);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class e extends _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__/* .Uniform */ .n{constructor(s,e){super(s,"vec2",_webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__/* .BindType */ .c.Pass,((r,o,t)=>r.setUniform2fv(s,e(o,t))))}}


/***/ }),

/***/ 81598:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11809);
/* harmony import */ var _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99120);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class o extends _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__/* .Uniform */ .n{constructor(e,o){super(e,"vec3",_webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__/* .BindType */ .c.Bind,((r,s)=>r.setUniform3fv(e,o(s))))}}


/***/ }),

/***/ 45393:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11809);
/* harmony import */ var _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99120);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class o extends _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__/* .Uniform */ .n{constructor(e,o){super(e,"vec4",_webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__/* .BindType */ .c.Bind,((r,s)=>r.setUniform4fv(e,o(s))))}}


/***/ }),

/***/ 1411:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11809);
/* harmony import */ var _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99120);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class e extends _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__/* .Uniform */ .n{constructor(s,e){super(s,"vec4",_webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__/* .BindType */ .c.Pass,((r,o,t)=>r.setUniform4fv(s,e(o,t))))}}


/***/ }),

/***/ 54706:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11809);
/* harmony import */ var _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99120);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class e extends _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__/* .Uniform */ .n{constructor(s,e,o){super(s,"vec4",_webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__/* .BindType */ .c.Pass,((r,o,t)=>r.setUniform4fv(s,e(o,t))),o)}}


/***/ }),

/***/ 31824:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11809);
/* harmony import */ var _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99120);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class e extends _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__/* .Uniform */ .n{constructor(o,e){super(o,"float",_webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__/* .BindType */ .c.Draw,((r,s,t)=>r.setUniform1f(o,e(s,t))))}}


/***/ }),

/***/ 35449:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11809);
/* harmony import */ var _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99120);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class s extends _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__/* .Uniform */ .n{constructor(r,s){super(r,"float",_webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__/* .BindType */ .c.Pass,((o,e,t)=>o.setUniform1f(r,s(e,t))))}}


/***/ }),

/***/ 45160:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11809);
/* harmony import */ var _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99120);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class s extends _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__/* .Uniform */ .n{constructor(r,s,e){super(r,"float",_webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__/* .BindType */ .c.Pass,((o,e,t)=>o.setUniform1fv(r,s(e,t))),e)}}


/***/ }),

/***/ 65083:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11809);
/* harmony import */ var _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99120);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class e extends _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__/* .Uniform */ .n{constructor(o,e){super(o,"int",_webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__/* .BindType */ .c.Bind,((r,i)=>r.setUniform1i(o,e(i))))}}


/***/ }),

/***/ 3445:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11809);
/* harmony import */ var _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99120);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class o extends _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__/* .Uniform */ .n{constructor(s,o){super(s,"int",_webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__/* .BindType */ .c.Pass,((r,e,t)=>r.setUniform1i(s,o(e,t))))}}


/***/ }),

/***/ 20778:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11809);
/* harmony import */ var _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99120);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class o extends _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__/* .Uniform */ .n{constructor(s,o){super(s,"mat4",_webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__/* .BindType */ .c.Pass,((r,t,e)=>r.setUniformMatrix4fv(s,o(t,e))))}}


/***/ }),

/***/ 96390:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11809);
/* harmony import */ var _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99120);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class o extends _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__/* .Uniform */ .n{constructor(e,o){super(e,"sampler2D",_webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__/* .BindType */ .c.Bind,((r,s)=>r.bindTexture(e,o(s))))}}


/***/ }),

/***/ 79856:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11809);
/* harmony import */ var _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99120);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class s extends _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__/* .Uniform */ .n{constructor(e,s){super(e,"sampler2D",_webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__/* .BindType */ .c.Pass,((r,o,t)=>r.bindTexture(e,s(o,t))))}}


/***/ }),

/***/ 47705:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class t{constructor(t,o){this._module=t,this._load=o}get(){return this._module}async reload(){return this._module=await this._load(),this._module}}


/***/ }),

/***/ 28347:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  w: () => (/* binding */ g),
  L: () => (/* binding */ h)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(6267);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js
var ShaderOutput = __webpack_require__(55274);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/DefaultVertexAttributeLocations.js
var DefaultVertexAttributeLocations = __webpack_require__(13148);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/checkWebGLError.js
var checkWebGLError = __webpack_require__(16541);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Program.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Program_r{constructor(t,r,e){this._context=t,this._locations=e,this._textures=new Map,this._glProgram=t.programCache.acquire(r.generate("vertex",!0),r.generate("fragment",!0),e),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bind=r.generateBind(this),this.bindPass=r.generateBindPass(this),this.bindDraw=r.generateBindDraw(this)}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(t,r){this._glProgram.setUniform1i(t,r?1:0)}setUniform1i(t,r){this._glProgram.setUniform1i(t,r)}setUniform1f(t,r){this._glProgram.setUniform1f(t,r)}setUniform2fv(t,r){this._glProgram.setUniform2fv(t,r)}setUniform3fv(t,r){this._glProgram.setUniform3fv(t,r)}setUniform4fv(t,r){this._glProgram.setUniform4fv(t,r)}setUniformMatrix3fv(t,r){this._glProgram.setUniformMatrix3fv(t,r)}setUniformMatrix4fv(t,r){this._glProgram.setUniformMatrix4fv(t,r)}setUniform1fv(t,r){this._glProgram.setUniform1fv(t,r)}setUniform1iv(t,r){this._glProgram.setUniform1iv(t,r)}setUniform2iv(t,r){this._glProgram.setUniform2iv(t,r)}setUniform3iv(t,r){this._glProgram.setUniform3iv(t,r)}setUniform4iv(t,r){this._glProgram.setUniform4iv(t,r)}assertCompatibleVertexAttributeLocations(t){t.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear()}bindTexture(r,e){e?.glName||((0,checkWebGLError/* webglDebugEnabled */.en)()&&console.error(`Texture sampler ${r} has no given Texture in ${(new Error).stack} `),e=this._context.emptyTexture);const i=this._ensureTextureUnit(r,e);this._context.useProgram(this),this.setUniform1i(r,i.unit),this._context.bindTexture(e,i.unit)}_ensureTextureUnit(t,r){let e=this._textures.get(t);return null==e?(e={texture:r,unit:this._textures.size},this._textures.set(t,e)):e.texture=r,e}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/enums.js
var enums = __webpack_require__(41746);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/renderState.js
var renderState = __webpack_require__(2449);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechnique.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const m=()=>Logger/* default */.A.getLogger("esri.views.3d.webgl.ShaderTechnique");class g{constructor(e,r,n,a=DefaultVertexAttributeLocations/* Default3D */.D){this.locations=a,this.primitiveType=enums/* PrimitiveType */.WR.TRIANGLES,this.key=r.key,this._program=new Program_r(e.rctx,n.get().build(r),a),this._pipeline=this.initializePipeline(r),this.reload=async t=>{t&&await n.reload(),this.key.equals(r.key)||m().warn("Configuration was changed after construction, cannot reload shader.",n),(0,maybe/* disposeMaybe */.WD)(this._program),this._program=new Program_r(e.rctx,n.get().build(r),a),this._pipeline=this.initializePipeline(r)}}destroy(){this._program=(0,maybe/* disposeMaybe */.WD)(this._program),this._pipeline=null}get program(){return this._program}get compiled(){return this.program.compiled}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}getPipeline(e,i){return this._pipeline}initializePipeline(e){return (0,renderState/* makePipelineState */.Ey)({blending:renderState/* premultipliedAlpha */.RC,colorWrite:renderState/* defaultColorWrite */.kn})}}function h(e,i){return (0,ShaderOutput/* isDepthOnlyOutput */.Vg)(e)?{buffers:[enums/* SpecialDrawBuffers */.Hr.NONE]}:i??null}


/***/ }),

/***/ 77941:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  K: () => (/* binding */ a),
  W: () => (/* binding */ i)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechniqueConfigurationKey.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class s{constructor(t){this._bits=[...t]}equals(s){return (0,arrayUtils/* equals */.aI)(this._bits,s.bits)}get code(){return this._code??=String.fromCharCode(...this._bits),this._code}get bits(){return this._bits}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/NoParameters.js
var NoParameters = __webpack_require__(22005);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class a extends NoParameters/* NoParameters */.Y{constructor(){super(),this._parameterBits=this._parameterBits?.map((()=>0))??[],this._parameterNames??=[]}get key(){return this._key??=new s(this._parameterBits),this._key}decode(e=this.key){const t=this._parameterBits;this._parameterBits=[...e.bits];const r=this._parameterNames.map((e=>`    ${e}: ${this[e]}`)).join("\n");return this._parameterBits=t,r}}function i(t={}){return(r,a)=>{r.hasOwnProperty("_parameterNames")||Object.defineProperty(r,"_parameterNames",{value:r._parameterNames?.slice()??[],configurable:!0,writable:!0}),r.hasOwnProperty("_parameterBits")||Object.defineProperty(r,"_parameterBits",{value:r._parameterBits?.slice()??[0],configurable:!0,writable:!0}),r._parameterNames.push(a);const i=t.count||2,s=Math.ceil(Math.log2(i)),o=r._parameterBits;let n=0;for(;o[n]+s>16;)n++,n>=o.length&&o.push(0);const p=o[n],m=(1<<s)-1<<p;o[n]+=s,t.count?Object.defineProperty(r,a,{get(){return(this._parameterBits[n]&m)>>p},set(r){if(this[a]!==r){if(this._key=null,this._parameterBits[n]=this._parameterBits[n]&~m|+r<<p&m,"number"!=typeof r)throw new Error/* default */.A("internal:invalid-shader-configuration",`Configuration value for ${a} must be a number, got ${typeof r}`);if(null==t.count)throw new Error/* default */.A("internal:invalid-shader-configuration",`Configuration value for ${a} must provide a count option`)}}}):Object.defineProperty(r,a,{get(){return!!((this._parameterBits[n]&m)>>p)},set(t){if(this[a]!==t&&(this._key=null,this._parameterBits[n]=this._parameterBits[n]&~m|+t<<p&m,"boolean"!=typeof t))throw new Error/* default */.A("internal:invalid-shader-configuration",`Configuration value for ${a} must be boolean, got ${typeof t}`)}})}}


/***/ }),

/***/ 77581:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72196);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function r(r,e){e.snowCover&&(r.code.add((0,_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H)`float getSnow(vec3 normal, vec3 normalGround) {
return smoothstep(0.5, 0.55, dot(normal, normalGround));
}`),r.code.add((0,_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H)`vec3 applySnowToMRR(vec3 mrr, float snow) {
return mix(mrr, vec3(0.0, 1.0, 0.04), snow);
}
vec4 snowCoverForEmissions(vec4 emission, float snow) {
return mix(emission, vec4(0.0), snow);
}`))}


/***/ }),

/***/ 32734:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86942);
/* harmony import */ var _geometry_support_float16_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11449);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(e){if(e.length<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9)return Array.from(e);if(Array.isArray(e))return Float64Array.from(e);if(!("BYTES_PER_ELEMENT"in e))return Array.from(e);switch(e.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(e);case 2:return (0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .isFloat16Array */ .LW)(e)?(0,_geometry_support_float16_js__WEBPACK_IMPORTED_MODULE_1__/* .getFloat16ArrayConstructor */ .pX)().from(e):(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .isUint16Array */ .jq)(e)?Uint16Array.from(e):Int16Array.from(e);case 4:return Float32Array.from(e);default:return Float64Array.from(e)}}


/***/ }),

/***/ 82736:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63678);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24121);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58359);
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58947);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class o{constructor(i,e,o){this.primitiveIndices=i,this._numIndexPerPrimitive=e,this.position=o,this._children=void 0,(0,_Util_js__WEBPACK_IMPORTED_MODULE_3__/* .assert */ .vA)(i.length>=1),(0,_Util_js__WEBPACK_IMPORTED_MODULE_3__/* .assert */ .vA)(3===o.size||4===o.size);const{data:c,size:l,indices:m}=o;(0,_Util_js__WEBPACK_IMPORTED_MODULE_3__/* .assert */ .vA)(m.length%this._numIndexPerPrimitive===0),(0,_Util_js__WEBPACK_IMPORTED_MODULE_3__/* .assert */ .vA)(m.length>=i.length*this._numIndexPerPrimitive);const d=i.length;let u=l*m[this._numIndexPerPrimitive*i[0]];a.clear(),a.push(u);const f=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__/* .fromValues */ .fA)(c[u],c[u+1],c[u+2]),x=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(f);for(let t=0;t<d;++t){const e=this._numIndexPerPrimitive*i[t];for(let i=0;i<this._numIndexPerPrimitive;++i){u=l*m[e+i],a.push(u);let t=c[u];f[0]=Math.min(t,f[0]),x[0]=Math.max(t,x[0]),t=c[u+1],f[1]=Math.min(t,f[1]),x[1]=Math.max(t,x[1]),t=c[u+2],f[2]=Math.min(t,f[2]),x[2]=Math.max(t,x[2])}}this.bbMin=f,this.bbMax=x;const P=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.m)((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(x[0]-f[0],x[1]-f[1]),x[2]-f[2]);let v=this.radius*this.radius;for(let t=0;t<a.length;++t){u=a.at(t);const i=c[u]-P[0],e=c[u+1]-P[1],s=c[u+2]-P[2],r=i*i+e*e+s*s;if(r<=v)continue;const n=Math.sqrt(r),h=.5*(n-this.radius);this.radius=this.radius+h,v=this.radius*this.radius;const o=h/n;P[0]+=i*o,P[1]+=e*o,P[2]+=s*o}this.center=P,a.clear()}getChildren(){if(this._children||(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.s)(this.bbMin,this.bbMax)<=1)return this._children;const i=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.m)((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)(),this.bbMin,this.bbMax,.5),s=this.primitiveIndices.length,r=new Uint8Array(s),h=new Array(8);for(let t=0;t<8;++t)h[t]=0;const{data:a,size:c,indices:l}=this.position;for(let t=0;t<s;++t){let e=0;const s=this._numIndexPerPrimitive*this.primitiveIndices[t];let n=c*l[s],o=a[n],m=a[n+1],d=a[n+2];for(let i=1;i<this._numIndexPerPrimitive;++i){n=c*l[s+i];const t=a[n],e=a[n+1],r=a[n+2];t<o&&(o=t),e<m&&(m=e),r<d&&(d=r)}o<i[0]&&(e|=1),m<i[1]&&(e|=2),d<i[2]&&(e|=4),r[t]=e,++h[e]}let m=0;for(let t=0;t<8;++t)h[t]>0&&++m;if(m<2)return;const d=new Array(8);for(let t=0;t<8;++t)d[t]=h[t]>0?new Uint32Array(h[t]):void 0;for(let t=0;t<8;++t)h[t]=0;for(let t=0;t<s;++t){const i=r[t];d[i][h[i]++]=this.primitiveIndices[t]}this._children=new Array;for(let t=0;t<8;++t)void 0!==d[t]&&this._children.push(new o(d[t],this._numIndexPerPrimitive,this.position));return this._children}static prune(){a.prune()}}const a=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({deallocator:null});


/***/ }),

/***/ 13148:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ E)
/* harmony export */ });
/* harmony import */ var _VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50645);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const E=new Map([[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.POSITION,0],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.NORMAL,1],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.NORMALCOMPRESSED,1],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.UV0,2],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.UVI,2],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.COLOR,3],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.COLORFEATUREATTRIBUTE,3],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.SIZE,4],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.TANGENT,4],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.CENTEROFFSETANDDISTANCE,5],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.SYMBOLCOLOR,5],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.FEATUREATTRIBUTE,6],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.INSTANCEFEATUREATTRIBUTE,6],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.OLIDCOLOR,6],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.INSTANCEOBJECTANDLAYERIDCOLOR,6],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.INSTANCECOLOR,7],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.ROTATION,8],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.INSTANCEMODEL,8],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.INSTANCEMODELNORMAL,12],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.INSTANCEMODELORIGINHI,11],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexAttribute */ .r.INSTANCEMODELORIGINLO,15]]);


/***/ }),

/***/ 67341:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91013);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class e{constructor(t){this._material=t.material,this._techniques=t.techniques,this._output=t.output}dispose(){}get _stippleTextures(){return this._techniques.context.stippleTextures}get _markerTextures(){return this._techniques.context.markerTextures}getTechnique(t,e){return this._techniques.get(t,this._material.getConfiguration(this._output,e))}ensureResources(e){return _basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .ResourceState */ .Am.LOADED}}


/***/ }),

/***/ 89140:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NV: () => (/* binding */ o),
/* harmony export */   m8: () => (/* binding */ u)
/* harmony export */ });
/* unused harmony export GLEmissiveTexturePassParameters */
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6267);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40189);
/* harmony import */ var _basicInterfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91013);
/* harmony import */ var _GLMaterial_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67341);
/* harmony import */ var _webgl_NoParameters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22005);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class u extends _GLMaterial_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A{constructor(t){super(t),this._numLoading=0,this._disposed=!1,this._textures=t.textures,this.updateTexture(t.textureId),this._acquire(t.normalTextureId,(t=>this._textureNormal=t)),this._acquire(t.emissiveTextureId,(t=>this._textureEmissive=t)),this._acquire(t.occlusionTextureId,(t=>this._textureOcclusion=t)),this._acquire(t.metallicRoughnessTextureId,(t=>this._textureMetallicRoughness=t))}dispose(){super.dispose(),this._texture=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__/* .releaseMaybe */ .Gz)(this._texture),this._textureNormal=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__/* .releaseMaybe */ .Gz)(this._textureNormal),this._textureEmissive=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__/* .releaseMaybe */ .Gz)(this._textureEmissive),this._textureOcclusion=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__/* .releaseMaybe */ .Gz)(this._textureOcclusion),this._textureMetallicRoughness=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__/* .releaseMaybe */ .Gz)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(t){return 0===this._numLoading?_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .ResourceState */ .Am.LOADED:_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .ResourceState */ .Am.LOADING}get textureBindParameters(){return new o(this._texture?.glTexture??null,this._textureNormal?.glTexture??null,this._textureEmissive?.glTexture??null,this._textureOcclusion?.glTexture??null,this._textureMetallicRoughness?.glTexture??null)}updateTexture(e){null!=this._texture&&e===this._texture.id||(this._texture=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__/* .releaseMaybe */ .Gz)(this._texture),this._acquire(e,(t=>this._texture=t)))}_acquire(s,i){if(null==s)return void i(null);const r=this._textures.acquire(s);if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isPromiseLike */ .$X)(r))return++this._numLoading,void r.then((e=>{if(this._disposed)return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_4__/* .releaseMaybe */ .Gz)(e),void i(null);i(e)})).finally((()=>--this._numLoading));i(r)}}class l extends _webgl_NoParameters_js__WEBPACK_IMPORTED_MODULE_3__/* .NoParameters */ .Y{constructor(t=null){super(),this.textureEmissive=t}}class o extends l{constructor(t,e,s,i,r,u,l){super(s),this.texture=t,this.textureNormal=e,this.textureOcclusion=i,this.textureMetallicRoughness=r,this.scale=u,this.normalTextureTransformMatrix=l}}


/***/ }),

/***/ 59816:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  V: () => (/* binding */ p)
});

// UNUSED EXPORTS: GeometryType

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/uid.js
var uid = __webpack_require__(65061);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js
var mat4f64 = __webpack_require__(86128);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(24121);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/Indices.js
var Indices = __webpack_require__(42965);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/AttributeArray.js
var AttributeArray = __webpack_require__(32734);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/BoundingInfo.js
var BoundingInfo = __webpack_require__(82736);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(58359);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/triangle.js
var triangle = __webpack_require__(50958);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/geometryDataUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function geometryDataUtils_i(r,o){if(!r)return!1;const{size:i,data:c,indices:f}=r;(0,vec32.i)(o,0,0,0),(0,vec32.i)(m,0,0,0);let g=0,d=0;for(let p=0;p<f.length-2;p+=3){const r=f[p]*i,h=f[p+1]*i,j=f[p+2]*i;(0,vec32.i)(a,c[r],c[r+1],c[r+2]),(0,vec32.i)(l,c[h],c[h+1],c[h+2]),(0,vec32.i)(u,c[j],c[j+1],c[j+2]);const z=(0,triangle/* areaPoints3d */.Q7)(a,l,u);z?((0,vec32.f)(a,a,l),(0,vec32.f)(a,a,u),(0,vec32.g)(a,a,1/3*z),(0,vec32.f)(o,o,a),g+=z):((0,vec32.f)(m,m,a),(0,vec32.f)(m,m,l),(0,vec32.f)(m,m,u),d+=3)}return(0!==d||0!==g)&&(0!==g?((0,vec32.g)(o,o,1/g),!0):0!==d&&((0,vec32.g)(o,m,1/d),!0))}function c(e,r){if(!e)return!1;const{size:o,data:s,indices:i}=e;(0,vec32.i)(r,0,0,0);let c=-1,f=0;for(let t=0;t<i.length;t++){const e=i[t]*o;c!==e&&(r[0]+=s[e],r[1]+=s[e+1],r[2]+=s[e+2],f++),c=e}return f>1&&(0,vec32.g)(r,r,1/f),f>0}function f(o,s,i){if(!o)return!1;(0,vec32.i)(i,0,0,0),(0,vec32.i)(m,0,0,0);let c=0,f=0;const{size:u,data:g,indices:d}=o,p=d.length-1,h=p+(s?2:0);for(let t=0;t<h;t+=2){const o=t<p?t+1:0,s=d[t<p?t:p]*u,h=d[o]*u;a[0]=g[s],a[1]=g[s+1],a[2]=g[s+2],l[0]=g[h],l[1]=g[h+1],l[2]=g[h+2],(0,vec32.g)(a,(0,vec32.f)(a,a,l),.5);const j=(0,vec32.F)(a,l);j>0?((0,vec32.f)(i,i,(0,vec32.g)(a,a,j)),c+=j):0===c&&((0,vec32.f)(m,m,a),f++)}return 0!==c?((0,vec32.g)(i,i,1/c),!0):0!==f&&((0,vec32.g)(i,m,1/f),!0)}const a=(0,vec3f64/* create */.vt)(),l=(0,vec3f64/* create */.vt)(),u=(0,vec3f64/* create */.vt)(),m=(0,vec3f64/* create */.vt)();

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectableGeometry.js
var IntersectableGeometry = __webpack_require__(27514);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Object3DStateID.js
var Object3DStateID = __webpack_require__(22775);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js
var Util = __webpack_require__(58947);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js
var VertexAttribute = __webpack_require__(50645);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/checkWebGLError.js
var checkWebGLError = __webpack_require__(16541);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Geometry.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class p{constructor(i,e,s=null,h=IntersectableGeometry/* GeometryType */.d.Mesh,r=null,o=-1){this.material=i,this.mapPositions=s,this.type=h,this.objectAndLayerIdColor=r,this.edgeIndicesLength=o,this.highlights=new Set,this._highlightOptionsCounts=new Map,this.id=(0,uid/* generateUID */.c)(),this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[t,a]of e)this._attributes.set(t,{...a,indices:(0,Indices/* compactIndices */.Dg)(a.indices)}),t===VertexAttribute/* VertexAttribute */.r.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(t).indices.length:this.edgeIndicesLength)}instantiate(t={}){const i=new p(t.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach(((t,e)=>{t.exclusive=!1,i._attributes.set(e,t)})),i._boundingInfo=this._boundingInfo,i.transformation=t.transformation||this.transformation,i}get attributes(){return this._attributes}getMutableAttribute(t){let i=this._attributes.get(t);return i&&!i.exclusive&&(i={...i,exclusive:!0,data:(0,AttributeArray/* cloneAttributeData */.S)(i.data)},this._attributes.set(t,i)),i}setAttributeData(t,i){const e=this._attributes.get(t);e?this._attributes.set(t,{...e,exclusive:!0,data:i}):(0,checkWebGLError/* webglDebugEnabled */.en)()&&console.warn(`Setting undefined attribute ${t} data`)}get indexCount(){const t=this._attributes.values().next().value?.indices;return t?.length??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return this._boundingInfo??=this._calculateBoundingInfo(),this._boundingInfo}computeAttachmentOrigin(t){return!!(this.type===IntersectableGeometry/* GeometryType */.d.Mesh?this._computeAttachmentOriginTriangles(t):this.type===IntersectableGeometry/* GeometryType */.d.Line?this._computeAttachmentOriginLines(t):this._computeAttachmentOriginPoints(t))&&(null!=this._transformation&&(0,vec32.t)(t,t,this._transformation),!0)}_computeAttachmentOriginTriangles(t){const i=this.attributes.get(VertexAttribute/* VertexAttribute */.r.POSITION);return geometryDataUtils_i(i,t)}_computeAttachmentOriginLines(t){const i=this.attributes.get(VertexAttribute/* VertexAttribute */.r.POSITION);return f(i,b(this.material.parameters,i),t)}_computeAttachmentOriginPoints(t){const i=this.attributes.get(VertexAttribute/* VertexAttribute */.r.POSITION);return c(i,t)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const t=this.attributes.get(VertexAttribute/* VertexAttribute */.r.POSITION);if(!t||0===t.indices.length)return null;const i=this.type===IntersectableGeometry/* GeometryType */.d.Mesh?3:1;(0,Util/* assert */.vA)(t.indices.length%i===0,"Indexing error: "+t.indices.length+" not divisible by "+i);const e=(0,Indices/* getContinuousIndexArray */.tM)(t.indices.length/i);return new BoundingInfo/* BoundingInfo */.j(e,i,t)}get transformation(){return this._transformation??mat4f64/* IDENTITY */.zK}set transformation(t){this._transformation=t&&t!==mat4f64/* IDENTITY */.zK?(0,mat4f64/* clone */.o8)(t):null}get highlightNames(){return this._highlightOptionsCounts}get hasHighlights(){return this._highlightOptionsCounts.size>0}foreachHighlightOptions(t){this._highlightOptionsCounts.forEach(((i,e)=>t(e)))}allocateIdAndHighlight(t){const i=new Object3DStateID/* Object3DHighlightStateID */.h(t);return this.addHighlight(i)}addHighlight(t){this.highlights.add(t);const{highlightName:i}=t,e=(this._highlightOptionsCounts.get(i)??0)+1;return this._highlightOptionsCounts.set(i,e),t}removeHighlight(t){if(this.highlights.delete(t)){const{highlightName:i}=t,e=this._highlightOptionsCounts.get(i)??0;e<=1?this._highlightOptionsCounts.delete(i):this._highlightOptionsCounts.set(i,e-1)}}}function b(t,i){return!(!("isClosed"in t)||!t.isClosed)&&i.indices.length>2}


/***/ }),

/***/ 27514:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ n)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var n;!function(n){n[n.Mesh=0]="Mesh",n[n.Point=1]="Point",n[n.Line=2]="Line"}(n||(n={}));


/***/ }),

/***/ 45722:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   im: () => (/* binding */ n),
/* harmony export */   m$: () => (/* binding */ o),
/* harmony export */   qA: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _core_uid_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65061);
/* harmony import */ var _core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55274);
/* harmony import */ var _DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13148);
/* harmony import */ var _materials_DefaultTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9319);
/* harmony import */ var _materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29117);
/* harmony import */ var _webgl_NoParameters_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22005);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class n{constructor(r,i){this.id=(0,_core_uid_js__WEBPACK_IMPORTED_MODULE_5__/* .generateUID */ .c)(),this.supportsEdges=!1,this.vertexAttributeLocations=_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_1__/* .Default3D */ .D,this._renderPriority=0,this._parameters=new i,(0,_materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_3__/* .updateParameters */ .MB)(this._parameters,r),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(e){return!1}setParameters(e,r=!0){(0,_materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_3__/* .updateParameters */ .MB)(this._parameters,e)&&(this.validateParameters(this._parameters),r&&this._parametersChanged())}validateParameters(e){}shouldRender(e){return this.visible&&this.isVisibleForOutput(e.output)&&(!this.parameters.isDecoration||e.bind.decorations)&&0!==(this.parameters.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this._parametersChanged())}_parametersChanged(){this.repository?.materialChanged(this)}get renderOccludedFlags(){return this.visible?this.parameters.renderOccluded:o.None}get hasEmissions(){return!1}getConfiguration(e,t,s=new _materials_DefaultTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_2__/* .DefaultTechniqueConfiguration */ .E){return s.output=e,s.hasHighlightMixTexture=e===_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderOutput */ .V.Highlight&&null!=t.highlightMixTexture,s}}var o;!function(e){e[e.None=0]="None",e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"}(o||(o={}));class d extends _webgl_NoParameters_js__WEBPACK_IMPORTED_MODULE_4__/* .NoParameters */ .Y{constructor(){super(...arguments),this.renderOccluded=o.Occlude,this.isDecoration=!1}}


/***/ }),

/***/ 69338:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ o)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var o;!function(o){o[o.NONE=0]="NONE",o[o.ColorAlpha=1]="ColorAlpha",o[o.FrontFace=2]="FrontFace",o[o.COUNT=3]="COUNT"}(o||(o={}));


/***/ }),

/***/ 22775:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ e),
/* harmony export */   p: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _core_uid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65061);
/* harmony import */ var _basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91013);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class c{constructor(){this.uid=(0,_core_uid_js__WEBPACK_IMPORTED_MODULE_1__/* .generateUID */ .c)()}}class e extends c{constructor(s){super(),this.highlightName=s,this.channel=_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .Object3DState */ .Mg.Highlight}}class r extends c{constructor(){super(...arguments),this.channel=_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .Object3DState */ .Mg.MaskOccludee}}


/***/ }),

/***/ 1931:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K_: () => (/* binding */ E),
/* harmony export */   SE: () => (/* binding */ h),
/* harmony export */   Yf: () => (/* binding */ p),
/* harmony export */   ez: () => (/* binding */ i),
/* harmony export */   m6: () => (/* binding */ F),
/* harmony export */   mE: () => (/* binding */ m),
/* harmony export */   xt: () => (/* binding */ O),
/* harmony export */   z5: () => (/* binding */ N)
/* harmony export */ });
/* unused harmony export blendingColorAlpha */
/* harmony import */ var _core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55274);
/* harmony import */ var _OITPass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69338);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41746);
/* harmony import */ var _webgl_renderState_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2449);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const f=(0,_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_3__/* .separateBlendingParams */ .p3)(_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .BlendFactor */ .dn.ONE,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .BlendFactor */ .dn.ZERO,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .BlendFactor */ .dn.ONE,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .BlendFactor */ .dn.ONE_MINUS_SRC_ALPHA);function i(r){return r===_OITPass_js__WEBPACK_IMPORTED_MODULE_1__/* .OITPass */ .Y.FrontFace?null:f}function p(r){switch(r){case _OITPass_js__WEBPACK_IMPORTED_MODULE_1__/* .OITPass */ .Y.NONE:return _webgl_renderState_js__WEBPACK_IMPORTED_MODULE_3__/* .unpremultipliedAlphaToPremultipliedAlpha */ .T8;case _OITPass_js__WEBPACK_IMPORTED_MODULE_1__/* .OITPass */ .Y.ColorAlpha:return f;case _OITPass_js__WEBPACK_IMPORTED_MODULE_1__/* .OITPass */ .Y.FrontFace:case _OITPass_js__WEBPACK_IMPORTED_MODULE_1__/* .OITPass */ .Y.COUNT:return null}}function N(r){if(r.draped)return null;switch(r.oitPass){case _OITPass_js__WEBPACK_IMPORTED_MODULE_1__/* .OITPass */ .Y.NONE:case _OITPass_js__WEBPACK_IMPORTED_MODULE_1__/* .OITPass */ .Y.FrontFace:return r.writeDepth?_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_3__/* .defaultDepthWrite */ .Uy:null;case _OITPass_js__WEBPACK_IMPORTED_MODULE_1__/* .OITPass */ .Y.ColorAlpha:case _OITPass_js__WEBPACK_IMPORTED_MODULE_1__/* .OITPass */ .Y.COUNT:return null}}const O=5e5,h={factor:-1,units:-2};function m({oitPass:r,enableOffset:t}){return t&&r===_OITPass_js__WEBPACK_IMPORTED_MODULE_1__/* .OITPass */ .Y.ColorAlpha?h:null}function E(r,n=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .CompareFunction */ .MT.LESS){return r===_OITPass_js__WEBPACK_IMPORTED_MODULE_1__/* .OITPass */ .Y.NONE||r===_OITPass_js__WEBPACK_IMPORTED_MODULE_1__/* .OITPass */ .Y.FrontFace?n:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .CompareFunction */ .MT.LEQUAL}function F(t,u){const a=(0,_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__/* .isColorEmission */ .LG)(u);return t===_OITPass_js__WEBPACK_IMPORTED_MODULE_1__/* .OITPass */ .Y.ColorAlpha?a?{buffers:[_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .ColorAttachment0 */ .r6,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .ColorAttachment1 */ .yI,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .ColorAttachment2 */ .Fq]}:{buffers:[_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .ColorAttachment0 */ .r6,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .ColorAttachment1 */ .yI]}:a?{buffers:[_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .ColorAttachment0 */ .r6,_webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .ColorAttachment1 */ .yI]}:null}


/***/ }),

/***/ 6833:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JG: () => (/* binding */ h),
/* harmony export */   Uy: () => (/* binding */ p),
/* harmony export */   Wb: () => (/* binding */ C),
/* harmony export */   Z$: () => (/* binding */ x),
/* harmony export */   b_: () => (/* binding */ y)
/* harmony export */ });
/* unused harmony exports computeInvDir, computeInvDirFromDirection, computeNormalFromBarycentric, intersectAabbInvDirBefore, intersectRayTriangles, intersectRayTrianglesWithDisplacementWatertight, intersectRayTrianglesWithVerticalOffsetENUGlobal, triangleRayParallelTolerance */
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24121);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58359);
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4675);
/* harmony import */ var _IntersectableGeometry_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27514);
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58947);
/* harmony import */ var _VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50645);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class h{constructor(t=!1,n=!0){this.isVerticalRay=t,this.normalRequired=n}}const m=(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)();function p(n,o,i,e,s,c){if(!n.visible)return;const r=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.a)(S,e,i),f=(t,n,o)=>{c(t,o,n)},m=new h(!1,o.options.normalRequired);if(n.boundingInfo){(0,_Util_js__WEBPACK_IMPORTED_MODULE_4__/* .assert */ .vA)(n.type===_IntersectableGeometry_js__WEBPACK_IMPORTED_MODULE_3__/* .GeometryType */ .d.Mesh);const t=o.tolerance;b(n.boundingInfo,i,r,t,s,m,f)}else{const t=n.attributes.get(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__/* .VertexAttribute */ .r.POSITION),o=t.indices;q(i,r,0,o.length/3,o,t.data,t.stride,s,m,f)}}const M=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)();function b(t,n,o,i,e,s,r){if(null==t)return;const a=w(o,M);if((0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__/* .setMin */ .Ne)(m,t.bbMin),(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__/* .setMax */ .vI)(m,t.bbMax),null!=e&&e.applyToAabb(m),C(m,n,a,i)){const{primitiveIndices:c,position:f}=t,a=c?c.length:f.indices.length/3;if(a>N){const c=t.getChildren();if(void 0!==c){for(const t of c)b(t,n,o,i,e,s,r);return}}V(n,o,0,a,f.indices,f.data,f.stride,c,e,s,r)}}const d=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)();function x(n,o,i,e,s,c,r,f,a){const{data:u,stride:l}=c;q(n,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.a)(S,o,n),i,e,s,u,l,r,f,a)}function g(t,n,o,i,e,s,c,r,f,a=null,u=0){const l=t[0],h=t[1],m=t[2],p=n[0],M=n[1],b=n[2];for(let x=o;x<i;++x){const t=u+(a?a[x]:x),n=3*t,o=c*e[n],i=s[o],g=s[o+1],y=s[o+2],T=c*e[n+1],V=s[T],q=s[T+1],j=s[T+2],I=c*e[n+2],v=V-i,A=q-g,B=j-y,O=s[I]-i,k=s[I+1]-g,w=s[I+2]-y,C=M*w-k*b,G=b*O-w*p,N=p*k-O*M,S=v*C+A*G+B*N;if(Math.abs(S)<=P)continue;const U=l-i,z=h-g,D=m-y,E=U*C+z*G+D*N;if(S>0){if(E<0||E>S)continue}else if(E>0||E<S)continue;const F=z*B-A*D,H=D*v-B*U,J=U*A-v*z,K=p*F+M*H+b*J;if(S>0){if(K<0||E+K>S)continue}else if(K>0||E+K<S)continue;const L=(O*F+k*H+w*J)/S;if(L>=0){f(L,t,r?R(v,A,B,O,k,w,d):null)}}}function y(t,n,o,i,e,s,c,r){const f=t[0],a=t[1],u=t[2],l=n[0],h=n[1],m=n[2];for(let p=o;p<i;++p){const t=3*p,n=t+1,o=t+2,i=s*t,M=e[i],b=e[i+1],x=e[i+2],g=s*n,y=s*o,T=e[g]-M,V=e[g+1]-b,q=e[g+2]-x,j=e[y]-M,I=e[y+1]-b,v=e[y+2]-x,A=h*v-I*m,B=m*j-v*l,O=l*I-j*h,k=T*A+V*B+q*O;if(Math.abs(k)<=P)continue;const w=f-M,C=a-b,G=u-x,N=w*A+C*B+G*O;if(k>0){if(N<0||N>k)continue}else if(N>0||N<k)continue;const S=C*q-V*G,U=G*T-q*w,z=w*V-T*C,D=l*S+h*U+m*z;if(k>0){if(D<0||N+D>k)continue}else if(D>0||N+D<k)continue;const E=(j*S+I*U+v*z)/k;if(E>=0){r(E,p,c?R(T,V,q,j,I,v,d):null)}}}function T(t,n,o,i,e,s,c,r,f,a,u,l=null,h=0){const m=t[0],p=t[1],M=t[2],b=n[0],x=n[1],g=n[2];for(let y=o;y<i;++y){const t=h+(l?l[y]:y),n=3*t,o=c*e[n],i=s[o],T=s[o+1],V=s[o+2],q=c*e[n+1],j=s[q],I=s[q+1],v=s[q+2],A=c*e[n+2],B=s[A],O=s[A+1],k=s[A+2],w=V-f,C=r/Math.sqrt(i*i+T*T+w*w),G=i+i*C,N=T+T*C,S=V+w*C,U=v-f,z=r/Math.sqrt(j*j+I*I+U*U),D=j+j*z,E=I+I*z,F=v+U*z,H=k-f,J=r/Math.sqrt(B*B+O*O+H*H),K=D-G,L=E-N,Q=F-S,W=B+B*J-G,X=O+O*J-N,Y=k+H*J-S,Z=x*Y-X*g,$=g*W-Y*b,_=b*X-W*x,tt=K*Z+L*$+Q*_;if(Math.abs(tt)<=P)continue;const nt=m-G,ot=p-N,it=M-S,et=nt*Z+ot*$+it*_;if(tt>0){if(et<0||et>tt)continue}else if(et>0||et<tt)continue;const st=ot*Q-L*it,ct=it*K-Q*nt,rt=nt*L-K*ot,ft=b*st+x*ct+g*rt;if(tt>0){if(ft<0||et+ft>tt)continue}else if(ft>0||et+ft<tt)continue;const at=(W*st+X*ct+Y*rt)/tt;if(at>=0){u(at,t,a?R(K,L,Q,W,X,Y,d):null)}}}function V(t,n,o,i,e,s,c,r,f,a,u){const l=t[0],h=t[1],m=t[2],p=n[0],M=n[1],b=n[2],{normalRequired:x}=a;for(let g=o;g<i;++g){const t=r[g],n=3*t,o=c*e[n];let i=s[o],a=s[o+1],y=s[o+2];const T=c*e[n+1];let V=s[T],q=s[T+1],j=s[T+2];const I=c*e[n+2];let v=s[I],A=s[I+1],B=s[I+2];null!=f&&([i,a,y]=f.applyToVertex(i,a,y,g),[V,q,j]=f.applyToVertex(V,q,j,g),[v,A,B]=f.applyToVertex(v,A,B,g));const O=V-i,k=q-a,w=j-y,C=v-i,G=A-a,N=B-y,S=M*N-G*b,U=b*C-N*p,z=p*G-C*M,D=O*S+k*U+w*z;if(Math.abs(D)<=P)continue;const E=l-i,F=h-a,H=m-y,J=E*S+F*U+H*z;if(D>0){if(J<0||J>D)continue}else if(J>0||J<D)continue;const K=F*w-k*H,L=H*O-w*E,Q=E*k-O*F,W=p*K+M*L+b*Q;if(D>0){if(W<0||J+W>D)continue}else if(W>0||J+W<D)continue;const X=(C*K+G*L+N*Q)/D;if(X>=0){u(X,t,x?R(O,k,w,C,G,N,d):null)}}}function q(i,e,s,c,r,f,a,u,l,h){const m=e,p=U,M=Math.abs(m[0]),b=Math.abs(m[1]),d=Math.abs(m[2]),x=M>=b?M>=d?0:2:b>=d?1:2,g=x,y=m[g]<0?2:1,T=(x+y)%3,V=(x+(3-y))%3,q=m[T]/m[g],R=m[V]/m[g],B=1/m[g],O=j,k=I,w=v,{normalRequired:C}=l;for(let j=s;j<c;++j){const e=3*j,s=a*r[e];(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.i)(p[0],f[s+0],f[s+1],f[s+2]);const c=a*r[e+1];(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.i)(p[1],f[c+0],f[c+1],f[c+2]);const l=a*r[e+2];(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.i)(p[2],f[l+0],f[l+1],f[l+2]),u&&((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.c)(p[0],u.applyToVertex(p[0][0],p[0][1],p[0][2],j)),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.c)(p[1],u.applyToVertex(p[1][0],p[1][1],p[1][2],j)),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.c)(p[2],u.applyToVertex(p[2][0],p[2][1],p[2][2],j))),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.a)(O,p[0],i),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.a)(k,p[1],i),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.a)(w,p[2],i);const m=O[T]-q*O[g],M=O[V]-R*O[g],b=k[T]-q*k[g],d=k[V]-R*k[g],x=w[T]-q*w[g],y=w[V]-R*w[g],I=x*d-y*b,v=m*y-M*x,G=b*M-d*m;if((I<0||v<0||G<0)&&(I>0||v>0||G>0))continue;const N=I+v+G;if(0===N)continue;const P=I*(B*O[g])+v*(B*k[g])+G*(B*w[g]);if(P*Math.sign(N)<0)continue;const S=P/N;if(S>=0){h(S,j,C?A(p):null)}}}const j=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)(),I=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)(),v=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)();function R(t,o,s,c,r,f,a){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.i)(B,t,o,s),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.i)(O,c,r,f),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.h)(a,B,O),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.n)(a,a),a}function A(n){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.a)(B,n[1],n[0]),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.a)(O,n[2],n[0]),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.h)(d,B,O),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.n)(d,d),d}const B=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)(),O=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)();function k(t,o,i){return n(i,1/(o[0]-t[0]),1/(o[1]-t[1]),1/(o[2]-t[2]))}function w(t,o){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.i)(o,1/t[0],1/t[1],1/t[2])}function C(t,n,o,i){return G(t,n,o,i,1/0)}function G(t,n,o,i,e){const s=(t[0]-i-n[0])*o[0],c=(t[3]+i-n[0])*o[0];let r=Math.min(s,c),f=Math.max(s,c);const a=(t[1]-i-n[1])*o[1],u=(t[4]+i-n[1])*o[1];if(f=Math.min(f,Math.max(a,u)),f<0)return!1;if(r=Math.max(r,Math.min(a,u)),r>f)return!1;const l=(t[2]-i-n[2])*o[2],h=(t[5]+i-n[2])*o[2];return f=Math.min(f,Math.max(l,h)),!(f<0)&&(r=Math.max(r,Math.min(l,h)),!(r>f)&&r<e)}const N=1e3,P=1e-7,S=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)(),U=[(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)(),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)(),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)()];


/***/ }),

/***/ 38323:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ A)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var A;!function(A){A[A.INTEGRATED_MESH=0]="INTEGRATED_MESH",A[A.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",A[A.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",A[A.OPAQUE_MATERIAL_WITHOUT_NORMALS=3]="OPAQUE_MATERIAL_WITHOUT_NORMALS",A[A.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",A[A.TRANSPARENT_MATERIAL_WITHOUT_NORMALS=5]="TRANSPARENT_MATERIAL_WITHOUT_NORMALS",A[A.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",A[A.TRANSPARENT_MATERIAL_WITHOUT_DEPTH=7]="TRANSPARENT_MATERIAL_WITHOUT_DEPTH",A[A.OCCLUDED_GROUND=8]="OCCLUDED_GROUND",A[A.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",A[A.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",A[A.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",A[A.HUD_MATERIAL=12]="HUD_MATERIAL",A[A.LABEL_MATERIAL=13]="LABEL_MATERIAL",A[A.LINE_CALLOUTS=14]="LINE_CALLOUTS",A[A.LINE_CALLOUTS_HUD_DEPTH=15]="LINE_CALLOUTS_HUD_DEPTH",A[A.OVERLAY=16]="OVERLAY",A[A.DRAPED_MATERIAL=17]="DRAPED_MATERIAL",A[A.DRAPED_WATER=18]="DRAPED_WATER",A[A.VOXEL=19]="VOXEL",A[A.MAX_SLOTS=20]="MAX_SLOTS"}(A||(A={}));


/***/ }),

/***/ 98546:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I$: () => (/* binding */ P),
/* harmony export */   a9: () => (/* binding */ o),
/* harmony export */   m: () => (/* binding */ i),
/* harmony export */   mK: () => (/* binding */ m),
/* harmony export */   qh: () => (/* binding */ f),
/* harmony export */   r8: () => (/* binding */ l),
/* harmony export */   sf: () => (/* binding */ s),
/* harmony export */   v0: () => (/* binding */ e)
/* harmony export */ });
/* unused harmony exports renderWhenBitIsNotSet, replaceBitWhenDepthTestPasses */
/* harmony import */ var _basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91013);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41746);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const i={func:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CompareFunction */ .MT.LESS},s={func:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CompareFunction */ .MT.ALWAYS},e={mask:255},l={mask:0},t=a=>({function:{func:n.NOTEQUAL,ref:a,mask:a},operation:{fail:E.KEEP,zFail:E.KEEP,zPass:E.KEEP}}),u=a=>({function:{func:n.ALWAYS,ref:a,mask:a},operation:{fail:E.KEEP,zFail:E.KEEP,zPass:E.REPLACE}}),f={function:{func:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CompareFunction */ .MT.ALWAYS,ref:_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .StencilBits */ .dd.OutlineVisualElementMask,mask:_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .StencilBits */ .dd.OutlineVisualElementMask},operation:{fail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .StencilOperation */ .eA.KEEP,zFail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .StencilOperation */ .eA.KEEP,zPass:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .StencilOperation */ .eA.ZERO}},o={function:{func:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CompareFunction */ .MT.ALWAYS,ref:_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .StencilBits */ .dd.OutlineVisualElementMask,mask:_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .StencilBits */ .dd.OutlineVisualElementMask},operation:{fail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .StencilOperation */ .eA.KEEP,zFail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .StencilOperation */ .eA.KEEP,zPass:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .StencilOperation */ .eA.REPLACE}},P={function:{func:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CompareFunction */ .MT.EQUAL,ref:_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .StencilBits */ .dd.OutlineVisualElementMask,mask:_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .StencilBits */ .dd.OutlineVisualElementMask},operation:{fail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .StencilOperation */ .eA.KEEP,zFail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .StencilOperation */ .eA.KEEP,zPass:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .StencilOperation */ .eA.KEEP}},m={function:{func:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CompareFunction */ .MT.NOTEQUAL,ref:_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .StencilBits */ .dd.OutlineVisualElementMask,mask:_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .StencilBits */ .dd.OutlineVisualElementMask},operation:{fail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .StencilOperation */ .eA.KEEP,zFail:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .StencilOperation */ .eA.KEEP,zPass:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .StencilOperation */ .eA.KEEP}};


/***/ }),

/***/ 17342:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: () => (/* binding */ L)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var core_Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Evented.js
var Evented = __webpack_require__(17306);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(6267);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/typedArrayUtil.js
var typedArrayUtil = __webpack_require__(86942);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/uid.js
var uid = __webpack_require__(65061);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(20909);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/videoUtils.js
var videoUtils = __webpack_require__(76036);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/requestImageUtils.js
var requestImageUtils = __webpack_require__(34528);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/requestUtils.js
var requestUtils = __webpack_require__(89125);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js
var basicInterfaces = __webpack_require__(91013);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/assets.js
var assets = __webpack_require__(99050);
;// ../node_modules/@arcgis/core/libs/basisu/BasisUTranscoder.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function i(){return t??=(async()=>{const i=await __webpack_require__.e(/* import() */ 3964).then(__webpack_require__.bind(__webpack_require__, 63964)),t=await i.default({locateFile:i=>(0,assets/* getAssetUrl */.s)(`esri/libs/basisu/${i}`)});return t.initializeBasis(),t})(),t}let t;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/libs/basisu/TextureFormat.js
var TextureFormat = __webpack_require__(74408);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/enums.js
var enums = __webpack_require__(41746);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/Texture.js
var Texture = __webpack_require__(8595);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/Util.js
var Util = __webpack_require__(19282);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/BasisUtil.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let l=null,o=null;async function g(){return null==o&&(o=i(),l=await o),o}function u(e,t){if(null==l)return e.byteLength;const n=new l.BasisFile(new Uint8Array(e)),s=T(n)?m(n.getNumLevels(0),n.getHasAlpha(),n.getImageWidth(0,0),n.getImageHeight(0,0),t):0;return n.close(),n.delete(),s}function c(e,t){if(null==l)return e.byteLength;const n=new l.KTX2File(new Uint8Array(e)),s=E(n)?m(n.getLevels(),n.getHasAlpha(),n.getWidth(),n.getHeight(),t):0;return n.close(),n.delete(),s}function m(e,t,s,r,i){const l=(0,Util/* getBytesPerElementFormat */.IB)(t?enums/* CompressedTextureFormat */.CQ.COMPRESSED_RGBA8_ETC2_EAC:enums/* CompressedTextureFormat */.CQ.COMPRESSED_RGB8_ETC2),o=i&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(s*r*l*o)}function T(e){return e.getNumImages()>=1&&!e.isUASTC()}function E(e){return e.getFaces()>=1&&e.isETC1S()}async function h(e,t,n){null==l&&(l=await g());const s=new l.BasisFile(new Uint8Array(n));if(!T(s))return null;s.startTranscoding();const r=p(e,t,s.getNumLevels(0),s.getHasAlpha(),s.getImageWidth(0,0),s.getImageHeight(0,0),((e,t)=>s.getImageTranscodedSizeInBytes(0,e,t)),((e,t,n)=>s.transcodeImage(n,0,e,t,0,0)));return s.close(),s.delete(),r}async function _(e,t,n){null==l&&(l=await g());const s=new l.KTX2File(new Uint8Array(n));if(!E(s))return null;s.startTranscoding();const r=p(e,t,s.getLevels(),s.getHasAlpha(),s.getWidth(),s.getHeight(),((e,t)=>s.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,n)=>s.transcodeImage(n,e,0,0,t,0,-1,-1)));return s.close(),s.delete(),r}function p(e,a,l,o,g,u,c,m){const{compressedTextureETC:T,compressedTextureS3TC:E}=e.capabilities,[h,_]=T?o?[TextureFormat/* TextureFormat */.n.ETC2_RGBA,enums/* CompressedTextureFormat */.CQ.COMPRESSED_RGBA8_ETC2_EAC]:[TextureFormat/* TextureFormat */.n.ETC1_RGB,enums/* CompressedTextureFormat */.CQ.COMPRESSED_RGB8_ETC2]:E?o?[TextureFormat/* TextureFormat */.n.BC3_RGBA,enums/* CompressedTextureFormat */.CQ.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[TextureFormat/* TextureFormat */.n.BC1_RGB,enums/* CompressedTextureFormat */.CQ.COMPRESSED_RGB_S3TC_DXT1_EXT]:[TextureFormat/* TextureFormat */.n.RGBA32,enums/* PixelFormat */.Ab.RGBA],p=a.hasMipmap?l:Math.min(1,l),A=[];for(let t=0;t<p;t++)A.push(new Uint8Array(c(t,h))),m(t,h,A[t]);return a.internalFormat=_,a.hasMipmap=A.length>1,a.samplingMode=a.hasMipmap?enums/* TextureSamplingMode */.Cj.LINEAR_MIPMAP_LINEAR:enums/* TextureSamplingMode */.Cj.LINEAR,a.width=g,a.height=u,new Texture/* Texture */.g(e,a,{type:"compressed",levels:A})}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/DDSUtil.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const DDSUtil_o=()=>Logger/* default */.A.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),a=542327876,DDSUtil_i=131072,s=4;function DDSUtil_l(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function DDSUtil_u(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const DDSUtil_c=DDSUtil_l("DXT1"),DDSUtil_h=DDSUtil_l("DXT3"),DDSUtil_m=DDSUtil_l("DXT5"),f=31,d=0,DDSUtil_p=1,DDSUtil_g=2,D=3,C=4,w=7,DDSUtil_T=20,DDSUtil_=21;function DDSUtil_E(e,r,o){const a=S(o,r.hasMipmap??!1);if(null==a)throw new Error("DDS texture data is null");const{textureData:i,internalFormat:s,width:l,height:u}=a;return r.samplingMode=i.levels.length>1?enums/* TextureSamplingMode */.Cj.LINEAR_MIPMAP_LINEAR:enums/* TextureSamplingMode */.Cj.LINEAR,r.hasMipmap=i.levels.length>1,r.internalFormat=s,r.width=l,r.height=u,new Texture/* Texture */.g(e,r,i)}function S(e,t){const n=new Int32Array(e.buffer,e.byteOffset,f);if(n[d]!==a)return DDSUtil_o().error("Invalid magic number in DDS header"),null;if(!(n[DDSUtil_T]&s))return DDSUtil_o().error("Unsupported format, must contain a FourCC code"),null;const l=n[DDSUtil_];let E,S;switch(l){case DDSUtil_c:E=8,S=enums/* CompressedTextureFormat */.CQ.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case DDSUtil_h:E=16,S=enums/* CompressedTextureFormat */.CQ.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case DDSUtil_m:E=16,S=enums/* CompressedTextureFormat */.CQ.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return DDSUtil_o().error("Unsupported FourCC code:",DDSUtil_u(l)),null}let b=1,A=n[C],M=n[D];(3&A||3&M)&&(DDSUtil_o().warn("Rounding up compressed texture size to nearest multiple of 4."),A=A+3&-4,M=M+3&-4);const x=A,R=M;let X,I;n[DDSUtil_g]&DDSUtil_i&&!1!==t&&(b=Math.max(1,n[w]));let v=e.byteOffset+n[DDSUtil_p]+4;const y=[];for(let r=0;r<b;++r)I=(A+3>>2)*(M+3>>2)*E,X=new Uint8Array(e.buffer,v,I),y.push(X),v+=I,A=Math.max(1,A>>1),M=Math.max(1,M>>1);return{textureData:{type:"compressed",levels:y},internalFormat:S,width:x,height:R}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/textureUtils.js
var textureUtils = __webpack_require__(84147);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js
var lib_Util = __webpack_require__(58947);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/TextureDescriptor.js
var TextureDescriptor = __webpack_require__(45758);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Texture.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class L{constructor(e,r){this._data=e,this.id=(0,uid/* generateUID */.c)(),this.events=new Evented/* default */.A,this._parameters={...N,...r},this._startPreload(e)}dispose(){this.unload(),this._data=this.update=void 0}_startPreload(e){e instanceof HTMLVideoElement?(this.update=t=>this._update(e,t),this._startPreloadVideoElement(e)):e instanceof HTMLImageElement&&this._startPreloadImageElement(e)}_startPreloadVideoElement(e){if(!((0,urlUtils/* isBlobProtocol */.w8)(e.src)||"auto"===e.preload&&e.crossOrigin)&&(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src,e.paused&&e.autoplay)){const t=[];(0,videoUtils/* whenVideoPlayable */.i)(e,(e=>t.push(e))).then((()=>{e.play()})).finally((()=>t.forEach((e=>e.remove()))))}}_startPreloadImageElement(e){(0,urlUtils/* isDataProtocol */.DB)(e.src)||(0,urlUtils/* isBlobProtocol */.w8)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}_createDescriptor(e){const t=new TextureDescriptor/* TextureDescriptor */.R;return t.wrapMode=this._parameters.wrap??enums/* TextureWrapMode */.pF.REPEAT,t.flipped=!this._parameters.noUnpackFlip,t.samplingMode=this._parameters.mipmap?enums/* TextureSamplingMode */.Cj.LINEAR_MIPMAP_LINEAR:enums/* TextureSamplingMode */.Cj.LINEAR,t.hasMipmap=!!this._parameters.mipmap,t.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,t.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?e.parameters.maxMaxAnisotropy:1),t}get glTexture(){return this._glTexture??this._emptyTexture}get loaded(){return null!=this._glTexture}get usedMemory(){return this._glTexture?.usedMemory||Texture_C(this._data,this._parameters)}load(e){if(this._loadingPromise)return this._loadingPromise;if(this._glTexture)return this._glTexture;const t=this._data;return null==t?(this._glTexture=new Texture/* Texture */.g(e,this._createDescriptor(e),null),this._glTexture):(this._emptyTexture=e.emptyTexture,this._parameters.reloadable||(this._data=void 0),"string"==typeof t?this._loadFromURL(e,t):t instanceof Image?this._loadFromImageElement(e,t):t instanceof HTMLVideoElement?this._loadFromVideoElement(e,t):t instanceof ImageData||t instanceof HTMLCanvasElement?this._loadFromImage(e,t):(0,typedArrayUtil/* isUint8Array */.mg)(t)&&this._parameters.encoding===basicInterfaces/* TextureEncodingMimeType */.JS.DDS_ENCODING?this._loadFromDDSData(e,t):(0,typedArrayUtil/* isArrayBuffer */.mw)(t)&&this._parameters.encoding===basicInterfaces/* TextureEncodingMimeType */.JS.DDS_ENCODING?this._loadFromDDSData(e,new Uint8Array(t)):((0,typedArrayUtil/* isArrayBuffer */.mw)(t)||(0,typedArrayUtil/* isUint8Array */.mg)(t))&&this._parameters.encoding===basicInterfaces/* TextureEncodingMimeType */.JS.KTX2_ENCODING?this._loadFromKTX2(e,t):((0,typedArrayUtil/* isArrayBuffer */.mw)(t)||(0,typedArrayUtil/* isUint8Array */.mg)(t))&&this._parameters.encoding===basicInterfaces/* TextureEncodingMimeType */.JS.BASIS_ENCODING?this._loadFromBasis(e,t):(0,typedArrayUtil/* isUint8Array */.mg)(t)?this._loadFromPixelData(e,t):(0,typedArrayUtil/* isArrayBuffer */.mw)(t)?this._loadFromPixelData(e,new Uint8Array(t)):null)}_update(e,t){return null==this._glTexture||e.readyState<HTMLMediaElement.HAVE_CURRENT_DATA||t===e.currentTime?t:(this._glTexture.setData(e),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),e.currentTime)}_loadFromDDSData(e,t){return this._glTexture=DDSUtil_E(e,this._createDescriptor(e),t),this._emptyTexture=null,this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>_(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>h(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){(0,lib_Util/* assert */.vA)(this._parameters.width>0&&this._parameters.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this._parameters.components?enums/* PixelFormat */.Ab.LUMINANCE:3===this._parameters.components?enums/* PixelFormat */.Ab.RGB:enums/* PixelFormat */.Ab.RGBA,r.pixelFormat!==enums/* PixelFormat */.Ab.RGB&&r.pixelFormat!==enums/* PixelFormat */.Ab.RGBA||(r.compress=this._parameters.compressionOptions),r.width=this._parameters.width??0,r.height=this._parameters.height??0,this._glTexture=new Texture/* Texture */.g(e,r,t),this._glTexture}_loadFromURL(e,t){return this._loadAsync((async r=>{const s=await (0,requestImageUtils/* requestImage */.D)(t,{signal:r});return (0,promiseUtils/* throwIfAborted */.Te)(r),this._loadFromImage(e,s)}))}_loadFromImageElement(e,t){return t.complete?this._loadFromImage(e,t):this._loadAsync((async r=>{const s=await (0,requestUtils/* loadImageAsync */.Sx)(t,t.src,!1,r);return (0,promiseUtils/* throwIfAborted */.Te)(r),this._loadFromImage(e,s)}))}_loadFromVideoElement(e,t){return t.readyState>=HTMLMediaElement.HAVE_CURRENT_DATA?this._loadFromImage(e,t):this._loadFromVideoElementAsync(e,t)}_loadFromVideoElementAsync(t,r){return this._loadAsync((i=>new Promise(((n,l)=>{const m=()=>{r.removeEventListener("loadeddata",h),r.removeEventListener("error",p),(0,maybe/* removeMaybe */.xt)(d)},h=()=>{r.readyState>=HTMLMediaElement.HAVE_CURRENT_DATA&&(m(),n(this._loadFromImage(t,r)))},p=t=>{m(),l(t||new core_Error/* default */.A("texture:load-error","Failed to load video"))};r.addEventListener("loadeddata",h),r.addEventListener("error",p);const d=(0,promiseUtils/* onAbort */.u7)(i,(()=>p((0,promiseUtils/* createAbortError */.NK)())))}))))}_loadFromImage(e,t){let r=t;r instanceof HTMLVideoElement||(r=(0,textureUtils/* ensureImageMaxSize */.vM)(r,e.parameters));const s=P(r);this._parameters.width=s.width,this._parameters.height=s.height;const i=this._createDescriptor(e);return i.pixelFormat=3===this._parameters.components?enums/* PixelFormat */.Ab.RGB:enums/* PixelFormat */.Ab.RGBA,i.width=s.width,i.height=s.height,i.compress=this._parameters.compressionOptions,this._glTexture=new Texture/* Texture */.g(e,i,r),this._emptyTexture=null,this.events.emit("loaded"),this._glTexture}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const s=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null),this._emptyTexture=null};return r.then(s,s),r}unload(){if(this._glTexture=(0,maybe/* disposeMaybe */.WD)(this._glTexture),this._emptyTexture=null,null!=this._loadingController){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}get parameters(){return this._parameters}}function Texture_C(e,t){if(null==e)return 0;if((0,typedArrayUtil/* isArrayBuffer */.mw)(e)||(0,typedArrayUtil/* isUint8Array */.mg)(e))return t.encoding===basicInterfaces/* TextureEncodingMimeType */.JS.KTX2_ENCODING?c(e,!!t.mipmap):t.encoding===basicInterfaces/* TextureEncodingMimeType */.JS.BASIS_ENCODING?u(e,!!t.mipmap):e.byteLength;const{width:r,height:s}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?P(e):t;return(t.mipmap?4/3:1)*r*s*(t.components||4)||0}function P(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}const N={wrap:{s:enums/* TextureWrapMode */.pF.REPEAT,t:enums/* TextureWrapMode */.pF.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1};


/***/ }),

/***/ 58947:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ f),
/* harmony export */   MX: () => (/* binding */ c),
/* harmony export */   O_: () => (/* binding */ i),
/* harmony export */   kL: () => (/* binding */ u),
/* harmony export */   vA: () => (/* binding */ s),
/* harmony export */   zH: () => (/* binding */ m)
/* harmony export */ });
/* unused harmony exports project, setMatrixTranslation3 */
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59646);
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2662);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28152);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const e=(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)();class o{constructor(t){this.message=t}toString(){return`AssertException: ${this.message}`}}function s(t,r="Assertion"){if(!t){const t=new Error(r).stack;throw new o(`${r} at ${t}`)}}function c(t,r){t||(r=r||"",console.warn("Verify failed: "+r+"\n"+new Error("verify").stack))}function i(t,r,n,e){let o,s=(n[0]-t[0])/r[0],c=(e[0]-t[0])/r[0];s>c&&(o=s,s=c,c=o);let i=(n[1]-t[1])/r[1],f=(e[1]-t[1])/r[1];if(i>f&&(o=i,i=f,f=o),s>f||i>c)return!1;i>s&&(s=i),f<c&&(c=f);let a=(n[2]-t[2])/r[2],u=(e[2]-t[2])/r[2];return a>u&&(o=a,a=u,u=o),!(s>u||a>c)&&(u<c&&(c=u),!(c<0))}function f(r,n,e,o,s,c=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_0__/* .create */ .vt)()){const i=(o[s]-e[s])*(n[0]-r[0])-(o[0]-e[0])*(n[s]-r[s]),f=(o[0]-e[0])*(r[s]-e[s])-(o[s]-e[s])*(r[0]-e[0]);if(0===i)return!1;const a=f/i;return c[0]=r[0]+a*(n[0]-r[0]),c[1]=r[s]+a*(n[s]-r[s]),!0}function a(t,n,o,c,i){e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=1,r(e,e,n),i.length>2&&(i[2]=-e[2]),r(e,e,o),s(0!==e[3]),i[0]=e[0]/e[3],i[1]=e[1]/e[3],i[2]=e[2]/e[3],i[0]=(.5*i[0]+.5)*c[2]+c[0],i[1]=(.5*i[1]+.5)*c[3]+c[1]}function u(t,r){return Math.log(t)/Math.log(r)}function l(t,r,n,e){t[12]=r,t[13]=n,t[14]=e}function m(t){return 1===t[0]&&0===t[1]&&0===t[2]&&0===t[3]&&0===t[4]&&1===t[5]&&0===t[6]&&0===t[7]&&0===t[8]&&0===t[9]&&1===t[10]&&0===t[11]&&1===t[15]}


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


/***/ }),

/***/ 28953:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MD: () => (/* binding */ p),
/* harmony export */   cJ: () => (/* binding */ d),
/* harmony export */   hs: () => (/* binding */ v),
/* harmony export */   m0: () => (/* binding */ m)
/* harmony export */ });
/* unused harmony exports getLabelSettings, getSettings */
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92504);
/* harmony import */ var _chunks_boundedPlane_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28769);
/* harmony import */ var _chunks_sphere_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31803);
/* harmony import */ var _ViewingMode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10714);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function s(e,t){return new F(e,g,t)}function o(e,t){const{curvatureDependent:a,scaleStart:r,scaleFallOffRange:n}=g;return new F(e,{curvatureDependent:{min:{curvature:a.min.curvature,tiltAngle:a.min.tiltAngle,scaleFallOffFactor:_.curvatureDependent.min.scaleFallOffFactor},max:{curvature:a.max.curvature,tiltAngle:a.max.tiltAngle,scaleFallOffFactor:_.curvatureDependent.max.scaleFallOffFactor}},scaleStart:r,scaleFallOffRange:n,minPixelSize:_.minPixelSize},t)}function u(e){return Math.abs(e*e*e)}function f(e,t,a){const r=a.parameters;return C.scale=Math.min(r.divisor/(t-r.offset),1),C.factor=u(e),C}function m(t,a){return (0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .lerp */ .Cc)(t*Math.max(a.scale,a.minScaleFactor),t,a.factor)}function h(e,t,a){const r=f(e,t,a);return r.minScaleFactor=0,m(1,r)}function d(e,t,a,r){r.scale=h(e,t,a),r.factor=0,r.minScaleFactor=a.minScaleFactor}function p(e,t,a=[0,0]){const r=Math.min(Math.max(t.scale,t.minScaleFactor),1);return a[0]=e[0]*r,a[1]=e[1]*r,a}function v(e,t,a,r){return m(e,f(t,a,r))}class F{get minScaleFactor(){return null!=this._fontHeight?Math.min(this._description.minPixelSize/this._fontHeight,1):0}constructor(e,t,a,r=O(),n){this._viewingMode=e,this._description=t,this._ellipsoidRadius=a,this.parameters=r,this._fontHeight=n,this._viewingMode===l.Local?(this._coverageCompensation=this._surfaceCoverageCompensationLocal,this._calculateCurvatureDependentParameters=this._calculateCurvatureDependentParametersLocal):(this._coverageCompensation=this._surfaceCoverageCompensationGlobal,this._calculateCurvatureDependentParameters=this._calculateCurvatureDependentParametersGlobal)}update(e){return(!this.parameters||this.parameters.camera.fovY!==e.fovY||this.parameters.camera.distance!==e.distance)&&(this._calculateParameters(e,this._ellipsoidRadius,this.parameters),!0)}overrideFontHeight(e){return e!==this._fontHeight?new F(this._viewingMode,this._description,this._ellipsoidRadius,this.parameters,e):this}_calculateParameters(e,t,a){const{scaleStart:r,scaleFallOffRange:n}=this._description,{fovY:i,distance:c}=e,l=this._calculateCurvatureDependentParameters(e,t),s=this._coverageCompensation(e,t,l),{tiltAngle:o,scaleFallOffFactor:u}=l,f=Math.sin(o)*c,m=.5*Math.PI-o-i*(.5-r*s),h=f/Math.cos(m),d=m+i*n*s,p=(h-u*(f/Math.cos(d)))/(1-u);return a.camera.fovY=e.fovY,a.camera.distance=e.distance,a.offset=p,a.divisor=h-p,a}_calculateCurvatureDependentParametersLocal(e,t,a=x){return a.tiltAngle=this._description.curvatureDependent.min.tiltAngle,a.scaleFallOffFactor=this._description.curvatureDependent.min.scaleFallOffFactor,a}_calculateCurvatureDependentParametersGlobal(t,r,n=x){const i=this._description.curvatureDependent,c=1+t.distance/r,l=Math.sqrt(c*c-1),[s,o]=[i.min.curvature,i.max.curvature],u=a((l-s)/(o-s),0,1),[f,m]=[i.min,i.max];return n.tiltAngle=e(f.tiltAngle,m.tiltAngle,u),n.scaleFallOffFactor=e(f.scaleFallOffFactor,m.scaleFallOffFactor,u),n}_surfaceCoverageCompensationLocal(e,t,a){return r(a.tiltAngle,e.fovY)}_surfaceCoverageCompensationGlobal(e,t,a){return n(D,t),c(D,a.tiltAngle,e.distance,e.fovY)}}const g={curvatureDependent:{min:{curvature:(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .deg2rad */ .kU)(10),tiltAngle:(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .deg2rad */ .kU)(12),scaleFallOffFactor:.5},max:{curvature:(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .deg2rad */ .kU)(70),tiltAngle:(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .deg2rad */ .kU)(40),scaleFallOffFactor:.8}},scaleStart:.3,scaleFallOffRange:.65,minPixelSize:0},_={curvatureDependent:{min:{scaleFallOffFactor:.7},max:{scaleFallOffFactor:.95}},minPixelSize:14};function O(){return{camera:{distance:0,fovY:0},divisor:0,offset:0}}const C={scale:0,factor:0,minScaleFactor:0},x={tiltAngle:0,scaleFallOffFactor:0},D=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_2__.c)();


/***/ }),

/***/ 84147:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FC: () => (/* binding */ r),
/* harmony export */   Mv: () => (/* binding */ n),
/* harmony export */   vM: () => (/* binding */ o)
/* harmony export */ });
/* unused harmony export ensureTextureSize */
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const e=16;function n(t,n){return n=Math.floor(n/e)*e,Math.min(Math.round(t/e)*e,n)}function r(t,n){return n=Math.floor(n/e)*e,Math.min(Math.ceil(t/e)*e,n)}function o(t,e){const[n,r]=a(t,e);return t.width===n&&t.height===r?t:i(t,n,r)}function a({width:t,height:e},{maxPreferredTexturePixels:r,maxTextureSize:o}){const a=Math.max(t,e),i=t*e;if(a<=o&&i<=r)return[t,e];const h=Math.min(Math.sqrt(r/i),o/a);return[n(Math.round(t*h),o),n(Math.round(e*h),o)]}function i(t,e,n){if(t instanceof ImageData)return i(h(t),e,n);const r=document.createElement("canvas");r.width=e,r.height=n;return r.getContext("2d").drawImage(t,0,0,r.width,r.height),r}function h(e){const n=document.createElement("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");if(null==r)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("texture:context-failed","Failed to create 2d context from HTMLCanvasElement");return r.putImageData(e,0,0),n}


/***/ }),

/***/ 689:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dg: () => (/* binding */ b),
/* harmony export */   ou: () => (/* binding */ d)
/* harmony export */ });
/* unused harmony exports I3SVerticalOffsetGlobalViewingMode, Object3DVerticalOffsetGlobalViewingMode, TerrainVerticalOffsetGlobalViewingMode, getVerticalOffsetI3S, getVerticalOffsetTerrain, terrainId */
/* harmony import */ var _core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25423);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78607);
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21742);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86128);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24121);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58359);
/* harmony import */ var _chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31803);
/* harmony import */ var _ViewingMode_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10714);
/* harmony import */ var _support_orientedBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29709);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class b{constructor(){this._transform=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .vt)(),this._transformInverse=new v({value:this._transform},_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_2__/* .invert */ .B8,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .vt),this._transformInverseTranspose=new v(this._transformInverse,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_2__/* .transpose */ .mg,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .vt),this._transformTranspose=new v({value:this._transform},_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_2__/* .transpose */ .mg,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .vt),this._transformInverseRotation=new v({value:this._transform},_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_0__/* .normalFromMat4Legacy */ .dR,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)}_invalidateLazyTransforms(){this._transformInverse.invalidate(),this._transformInverseTranspose.invalidate(),this._transformTranspose.invalidate(),this._transformInverseRotation.invalidate()}get transform(){return this._transform}get inverse(){return this._transformInverse.value}get inverseTranspose(){return this._transformInverseTranspose.value}get inverseRotation(){return this._transformInverseRotation.value}get transpose(){return this._transformTranspose.value}setTransformMatrix(t){(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_2__/* .copy */ .C)(this._transform,t)}multiplyTransform(t){(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_2__/* .multiply */ .lw)(this._transform,this._transform,t)}set(t){(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_2__/* .copy */ .C)(this._transform,t),this._invalidateLazyTransforms()}setAndInvalidateLazyTransforms(t,s){this.setTransformMatrix(t),this.multiplyTransform(s),this._invalidateLazyTransforms()}}class v{constructor(t,s,r){this._original=t,this._update=s,this._dirty=!0,this._transform=r()}invalidate(){this._dirty=!0}get value(){return this._dirty&&(this._update(this._transform,this._original.value),this._dirty=!1),this._transform}}class T{constructor(t=0){this.offset=t,this.tmpVertex=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__/* .create */ .vt)()}applyToVertex(t,s,r){const e=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.i)(q,t,s,r),i=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.f)(z,e,this.localOrigin),a=this.offset/(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.l)(i);return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.b)(this.tmpVertex,e,i,a),this.tmpVertex}applyToAabb(t){const s=A,r=R,e=B;for(let n=0;n<3;++n)s[n]=t[0+n]+this.localOrigin[n],r[n]=t[3+n]+this.localOrigin[n],e[n]=s[n];const i=this.applyToVertex(s[0],s[1],s[2]);for(let n=0;n<3;++n)t[n]=i[n],t[n+3]=i[n];const a=s=>{const r=this.applyToVertex(s[0],s[1],s[2]);for(let e=0;e<3;++e)t[e]=Math.min(t[e],r[e]),t[e+3]=Math.max(t[e+3],r[e])};for(let n=1;n<8;++n){for(let t=0;t<3;++t)e[t]=n&1<<t?r[t]:s[t];a(e)}let o=0;for(let n=0;n<3;++n){s[n]*r[n]<0&&(o|=1<<n)}if(0!==o&&7!==o)for(let n=0;n<8;++n)if(0===(o&n)){for(let t=0;t<3;++t)e[t]=o&1<<t?0:n&1<<t?s[t]:r[t];a(e)}for(let n=0;n<3;++n)t[n]-=this.localOrigin[n],t[n+3]-=this.localOrigin[n];return t}}class x{constructor(t=0){this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__/* .create */ .vt)(),this._tmpMbs=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.c)(),this._tmpObb=new _support_orientedBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__/* .Obb */ .ab,this._resetOffset(t)}_resetOffset(t){this._offset=t,this._totalOffset=t}set offset(t){this._resetOffset(t)}get offset(){return this._offset}set componentOffset(t){this._totalOffset=this._offset+t}set localOrigin(t){this.componentLocalOriginLength=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.l)(t)}applyToVertex(t,s,r){const e=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.i)(q,t,s,r),i=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.i)(z,t,s,r+this.componentLocalOriginLength),a=this._totalOffset/(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.l)(i);return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.b)(this._tmpVertex,e,i,a),this._tmpVertex}applyToAabb(t){const s=this.componentLocalOriginLength,r=t[0],e=t[1],i=t[2]+s,a=t[3],o=t[4],n=t[5]+s,h=Math.abs(r),f=Math.abs(e),l=Math.abs(i),m=Math.abs(a),p=Math.abs(o),c=Math.abs(n),_=.5*(1+Math.sign(r*a))*Math.min(h,m),u=.5*(1+Math.sign(e*o))*Math.min(f,p),g=.5*(1+Math.sign(i*n))*Math.min(l,c),M=Math.max(h,m),b=Math.max(f,p),v=Math.max(l,c),T=Math.sqrt(_*_+u*u+g*g),x=Math.sign(h+r),O=Math.sign(f+e),y=Math.sign(l+i),d=Math.sign(m+a),V=Math.sign(p+o),L=Math.sign(c+n),j=this._totalOffset;if(T<j)return t[0]-=(1-x)*j,t[1]-=(1-O)*j,t[2]-=(1-y)*j,t[3]+=d*j,t[4]+=V*j,t[5]+=L*j,t;const I=j/Math.sqrt(M*M+b*b+v*v),w=j/T,q=w-I,z=-q;return t[0]+=r*(x*z+w),t[1]+=e*(O*z+w),t[2]+=i*(y*z+w),t[3]+=a*(d*q+I),t[4]+=o*(V*q+I),t[5]+=n*(L*q+I),t}applyToMbs(t){const s=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.l)((0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(t)),r=this._totalOffset/s;return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.b)((0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(this._tmpMbs),(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(t),(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(t),r),this._tmpMbs[3]=t[3]+t[3]*this._totalOffset/s,this._tmpMbs}applyToObb(t){return (0,_support_orientedBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__/* .computeOffsetObb */ .gm)(t,this._totalOffset,this._totalOffset,_ViewingMode_js__WEBPACK_IMPORTED_MODULE_7__/* .ViewingMode */ .RT.Global,this._tmpObb),this._tmpObb}}class O{constructor(t=0){this.offset=t,this.sphere=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.c)(),this.tmpVertex=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__/* .create */ .vt)()}applyToVertex(t,s,r){const e=this.objectTransform.transform,i=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.i)(q,t,s,r),a=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.t)(i,i,e),o=this.offset/(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.l)(a);(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.b)(a,a,a,o);const m=this.objectTransform.inverse;return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.t)(this.tmpVertex,a,m),this.tmpVertex}applyToMinMax(t,s){const r=this.offset/(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.l)(t);(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.b)(t,t,t,r);const e=this.offset/(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.l)(s);(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.b)(s,s,s,e)}applyToAabb(t){const s=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*s,t[1]+=t[1]*s,t[2]+=t[2]*s;const r=this.offset/Math.sqrt(t[3]*t[3]+t[4]*t[4]+t[5]*t[5]);return t[3]+=t[3]*r,t[4]+=t[4]*r,t[5]+=t[5]*r,t}applyToBoundingSphere(t){const s=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.l)((0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(t)),r=this.offset/s;return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.b)((0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(this.sphere),(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(t),(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(t),r),this.sphere[3]=t[3]+t[3]*this.offset/s,this.sphere}}const y=new O;function d(t){return null!=t?(y.offset=t,y):null}const V=new x;function L(t){return null!=t?(V.offset=t,V):null}const j=new T;function I(t){return null!=t?(j.offset=t,j):null}const w="terrain",q=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__/* .create */ .vt)(),z=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__/* .create */ .vt)(),A=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__/* .create */ .vt)(),R=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__/* .create */ .vt)(),B=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__/* .create */ .vt)();


/***/ }),

/***/ 75268:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $p: () => (/* binding */ i),
/* harmony export */   Qx: () => (/* binding */ c),
/* harmony export */   _y: () => (/* binding */ r),
/* harmony export */   e_: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58359);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class i{constructor(s=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__/* .zeros */ .Ul)()){this.intensity=s}}class r{constructor(i=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__/* .zeros */ .Ul)(),r=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__/* .fromValues */ .fA)(.57735,.57735,.57735)){this.intensity=i,this.direction=r}}class c{constructor(i=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__/* .zeros */ .Ul)(),r=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__/* .fromValues */ .fA)(.57735,.57735,.57735),c=!0,n=1,o=1){this.intensity=i,this.direction=r,this.castShadows=c,this.specularStrength=n,this.environmentStrength=o}}class n{constructor(){this.r=[0],this.g=[0],this.b=[0]}}


/***/ }),

/***/ 9409:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  TA: () => (/* binding */ _),
  uH: () => (/* binding */ SceneLighting_l)
});

// UNUSED EXPORTS: SunLight

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(92504);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(24121);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(58359);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lighting/Lightsources.js
var Lightsources = __webpack_require__(75268);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/LongVectorMath.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function t(t,n){let e=0;for(let l=0;l<t.length;l++)e+=t[l]*n[l];return e}function LongVectorMath_n(t,n,e){(e=e||t).length=t.length;for(let l=0;l<t.length;l++)e[l]=t[l]*n[l];return e}function LongVectorMath_e(t,n,e){(e=e||t).length=t.length;for(let l=0;l<t.length;l++)e[l]=t[l]*n;return e}function LongVectorMath_l(t,n,e){(e=e||t).length=t.length;for(let l=0;l<t.length;l++)e[l]=t[l]+n[l];return e}

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lighting/SphericalHarmonics.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function u(t){return(t+1)*(t+1)}function l(n){return (0,mathUtils/* clamp */.qE)(Math.floor(Math.sqrt(n)-1),0,2)}function m(t,n,o){const r=t[0],e=t[1],i=t[2],s=o||[];return s.length=u(n),n>=0&&(s[0]=.28209479177),n>=1&&(s[1]=.4886025119*r,s[2]=.4886025119*i,s[3]=.4886025119*e),n>=2&&(s[4]=1.09254843059*r*e,s[5]=1.09254843059*e*i,s[6]=.31539156525*(3*i*i-1),s[7]=1.09254843059*r*i,s[8]=.54627421529*(r*r-e*e)),s}function p(t,n){const o=u(t),r=n||{r:[],g:[],b:[]};r.r.length=r.g.length=r.b.length=o;for(let e=0;e<o;e++)r.r[e]=r.g[e]=r.b[e]=0;return r}function b(t,n){const o=l(n.r.length);for(const e of t)(0,vec32.u)(P,e.direction),m(P,o,v),LongVectorMath_n(v,w),LongVectorMath_e(v,e.intensity[0],I),LongVectorMath_l(n.r,I),LongVectorMath_e(v,e.intensity[1],I),LongVectorMath_l(n.g,I),LongVectorMath_e(v,e.intensity[2],I),LongVectorMath_l(n.b,I);return n}function y(t,n){m(P,0,v);for(const o of t)n.r[0]+=v[0]*w[0]*o.intensity[0]*4*Math.PI,n.g[0]+=v[0]*w[0]*o.intensity[1]*4*Math.PI,n.b[0]+=v[0]*w[0]*o.intensity[2]*4*Math.PI;return n}function M(t,r,e,s){p(r,s),(0,vec32.i)(e.intensity,0,0,0);let c=!1;const u=S,l=d,m=j;u.length=0,l.length=0,m.length=0;for(const n of t)n instanceof Lightsources/* MainLight */.Qx&&!c?((0,vec32.c)(e.direction,n.direction),(0,vec32.c)(e.intensity,n.intensity),e.specularStrength=n.specularStrength,e.environmentStrength=n.environmentStrength,e.castShadows=n.castShadows,c=!0):n instanceof Lightsources/* MainLight */.Qx||n instanceof Lightsources/* FillLight */._y?u.push(n):n instanceof Lightsources/* AmbientLight */.$p?l.push(n):n instanceof Lightsources/* SphericalHarmonicsAmbientLight */.e_&&m.push(n);b(u,s),y(l,s);for(const n of m)LongVectorMath_l(s.r,n.r),LongVectorMath_l(s.g,n.g),LongVectorMath_l(s.b,n.b)}const S=[],d=[],j=[],v=[0],I=[0],P=(0,vec3f64/* create */.vt)(),w=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398];

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lighting/SceneLighting.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class g{constructor(){this.color=(0,vec3f64/* create */.vt)(),this.intensity=1}}class SceneLighting_m{constructor(){this.direction=(0,vec3f64/* create */.vt)(),this.ambient=new g,this.diffuse=new g}}const SceneLighting_l=.4;class _{constructor(){this._shOrder=2,this._legacy=new SceneLighting_m,this.globalFactor=.5,this.noonFactor=.5,this._sphericalHarmonics=new Lightsources/* SphericalHarmonicsAmbientLight */.e_,this._mainLight=new Lightsources/* MainLight */.Qx((0,vec3f64/* create */.vt)(),(0,vec3f64/* fromValues */.fA)(1,0,0),!1)}get legacy(){return this._legacy}get sh(){return this._sphericalHarmonics}get mainLight(){return this._mainLight}set(i){M(i,this._shOrder,this._mainLight,this._sphericalHarmonics),(0,vec32.c)(this._legacy.direction,this._mainLight.direction);const r=1/Math.PI;this._legacy.ambient.color[0]=.282095*this._sphericalHarmonics.r[0]*r,this._legacy.ambient.color[1]=.282095*this._sphericalHarmonics.g[0]*r,this._legacy.ambient.color[2]=.282095*this._sphericalHarmonics.b[0]*r,(0,vec32.g)(this._legacy.diffuse.color,this._mainLight.intensity,r),(0,vec32.c)(L,this._legacy.diffuse.color),(0,vec32.g)(L,L,SceneLighting_l*this.globalFactor),(0,vec32.f)(this._legacy.ambient.color,this._legacy.ambient.color,L)}copyFrom(i){this._sphericalHarmonics.r=Array.from(i.sh.r),this._sphericalHarmonics.g=Array.from(i.sh.g),this._sphericalHarmonics.b=Array.from(i.sh.b),(0,vec32.c)(this._mainLight.direction,i.mainLight.direction),(0,vec32.c)(this._mainLight.intensity,i.mainLight.intensity),this._mainLight.castShadows=i.mainLight.castShadows,this._mainLight.specularStrength=i.mainLight.specularStrength,this._mainLight.environmentStrength=i.mainLight.environmentStrength,this.globalFactor=i.globalFactor,this.noonFactor=i.noonFactor}lerpLighting(s,h,n){if((0,vec32.m)(this._mainLight.intensity,s.mainLight.intensity,h.mainLight.intensity,n),this._mainLight.environmentStrength=(0,mathUtils/* lerp */.Cc)(s.mainLight.environmentStrength,h.mainLight.environmentStrength,n),this._mainLight.specularStrength=(0,mathUtils/* lerp */.Cc)(s.mainLight.specularStrength,h.mainLight.specularStrength,n),(0,vec32.c)(this._mainLight.direction,h.mainLight.direction),this._mainLight.castShadows=h.mainLight.castShadows,this.globalFactor=(0,mathUtils/* lerp */.Cc)(s.globalFactor,h.globalFactor,n),this.noonFactor=(0,mathUtils/* lerp */.Cc)(s.noonFactor,h.noonFactor,n),s.sh.r.length===h.sh.r.length)for(let t=0;t<h.sh.r.length;t++)this._sphericalHarmonics.r[t]=(0,mathUtils/* lerp */.Cc)(s.sh.r[t],h.sh.r[t],n),this._sphericalHarmonics.g[t]=(0,mathUtils/* lerp */.Cc)(s.sh.g[t],h.sh.g[t],n),this._sphericalHarmonics.b[t]=(0,mathUtils/* lerp */.Cc)(s.sh.b[t],h.sh.b[t],n);else for(let i=0;i<h.sh.r.length;i++)this._sphericalHarmonics.r[i]=h.sh.r[i],this._sphericalHarmonics.g[i]=h.sh.g[i],this._sphericalHarmonics.b[i]=h.sh.b[i]}}const L=(0,vec3f64/* create */.vt)();


/***/ }),

/***/ 25146:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24121);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58359);
/* harmony import */ var _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57813);
/* harmony import */ var _lib_RayIntersections_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6833);
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50645);
/* harmony import */ var _internal_bufferWriterUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81500);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class f{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.get(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_4__/* .VertexAttribute */ .r.POSITION).indices.length}write(e,t,r,o,i,f){return (0,_internal_bufferWriterUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .writeDefaultAttributes */ .SA)(r,o,this.vertexBufferLayout,e,t,i,f)}intersect(t,s,f,n,c,m,l){const a=this.vertexBufferLayout.createView(t).getField(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_4__/* .VertexAttribute */ .r.POSITION,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_2__/* .BufferViewVec3f */ .xs);if(null==a)return;const p=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.a)(u,m,c),y=0,b=a.count/3,d=n.options.normalRequired,j=(e,t,r)=>{l(e,r,t)};(0,_lib_RayIntersections_js__WEBPACK_IMPORTED_MODULE_3__/* .intersectRenderGeometryTriangles */ .b_)(c,p,y,b,a.typedBuffer,a.typedBufferStride,d,j)}}const u=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)();


/***/ }),

/***/ 54482:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $U: () => (/* binding */ W),
  fs: () => (/* binding */ H),
  ty: () => (/* binding */ Q)
});

// UNUSED EXPORTS: DefaultGLMaterial

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(24121);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(58359);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/materialUtils.js
var materialUtils = __webpack_require__(59427);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/ViewingMode.js
var ViewingMode = __webpack_require__(10714);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/support/buffer/InterleavedLayout.js
var InterleavedLayout = __webpack_require__(11110);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js
var ShaderOutput = __webpack_require__(55274);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js
var NormalAttribute_glsl = __webpack_require__(81283);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/Emissions.glsl.js
var Emissions_glsl = __webpack_require__(15420);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl.js
var Normals_glsl = __webpack_require__(46971);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js
var PhysicallyBasedRenderingParameters_glsl = __webpack_require__(39486);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/effects/geometry/olidUtils.js
var olidUtils = __webpack_require__(36340);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js
var basicInterfaces = __webpack_require__(91013);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLTextureMaterial.js
var GLTextureMaterial = __webpack_require__(89140);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Material.js
var Material = __webpack_require__(45722);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/OrderIndependentTransparency.js
var OrderIndependentTransparency = __webpack_require__(1931);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/RayIntersections.js
var RayIntersections = __webpack_require__(6833);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/RenderSlot.js
var RenderSlot = __webpack_require__(38323);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js
var VertexAttribute = __webpack_require__(50645);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/verticalOffsetUtils.js
var verticalOffsetUtils = __webpack_require__(689);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultBufferWriter.js
var DefaultBufferWriter = __webpack_require__(25146);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/MaterialUtil.js
var MaterialUtil = __webpack_require__(29117);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/DefaultMaterialTechnique.js
var DefaultMaterialTechnique = __webpack_require__(73418);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js
var TextureCoordinateAttribute_glsl = __webpack_require__(26139);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration.js + 1 modules
var ShaderTechniqueConfiguration = __webpack_require__(77941);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultTechniqueConfiguration.js
var DefaultTechniqueConfiguration = __webpack_require__(9319);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/DefaultMaterialTechniqueConfiguration.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class d extends DefaultTechniqueConfiguration/* DefaultTechniqueConfiguration */.E{constructor(e){super(),this.spherical=e,this.alphaDiscardMode=basicInterfaces/* AlphaDiscardMode */.sf.Opaque,this.doubleSidedMode=Normals_glsl/* NormalsDoubleSidedMode */.W.None,this.pbrMode=PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Disabled,this.cullFace=basicInterfaces/* CullFaceOptions */.s2.None,this.normalType=NormalAttribute_glsl/* NormalType */.W.Attribute,this.customDepthTest=basicInterfaces/* DepthTestFunction */.it.Less,this.emissionSource=Emissions_glsl/* EmissionSource */.ZX.None,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.instancedDoublePrecision=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasBloom=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.hasVvInstancing=!0,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0,this.draped=!1}get textureCoordinateType(){return this.hasColorTexture||this.hasMetallicRoughnessTexture||this.emissionSource===Emissions_glsl/* EmissionSource */.ZX.Texture||this.hasOcclusionTexture||this.hasNormalTexture?TextureCoordinateAttribute_glsl/* TextureCoordinateType */.I.Default:TextureCoordinateAttribute_glsl/* TextureCoordinateType */.I.None}get objectAndLayerIdColorInstanced(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)({count:basicInterfaces/* AlphaDiscardMode */.sf.COUNT})],d.prototype,"alphaDiscardMode",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)({count:Normals_glsl/* NormalsDoubleSidedMode */.W.COUNT})],d.prototype,"doubleSidedMode",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)({count:PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.COUNT})],d.prototype,"pbrMode",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)({count:basicInterfaces/* CullFaceOptions */.s2.COUNT})],d.prototype,"cullFace",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)({count:NormalAttribute_glsl/* NormalType */.W.COUNT})],d.prototype,"normalType",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)({count:basicInterfaces/* DepthTestFunction */.it.COUNT})],d.prototype,"customDepthTest",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)({count:Emissions_glsl/* EmissionSource */.ZX.COUNT})],d.prototype,"emissionSource",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],d.prototype,"hasVertexColors",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],d.prototype,"hasSymbolColors",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],d.prototype,"hasVerticalOffset",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],d.prototype,"hasColorTexture",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],d.prototype,"hasMetallicRoughnessTexture",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],d.prototype,"hasOcclusionTexture",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],d.prototype,"hasNormalTexture",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],d.prototype,"hasScreenSizePerspective",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],d.prototype,"hasVertexTangents",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],d.prototype,"hasOccludees",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],d.prototype,"instancedDoublePrecision",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],d.prototype,"hasModelTransformation",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],d.prototype,"offsetBackfaces",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],d.prototype,"vvSize",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],d.prototype,"vvColor",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],d.prototype,"receiveShadows",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],d.prototype,"receiveAmbientOcclusion",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],d.prototype,"textureAlphaPremultiplied",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],d.prototype,"instanced",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],d.prototype,"instancedColor",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],d.prototype,"writeDepth",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],d.prototype,"transparent",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],d.prototype,"enableOffset",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],d.prototype,"terrainDepthTest",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],d.prototype,"cullAboveTerrain",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],d.prototype,"snowCover",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],d.prototype,"hasBloom",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],d.prototype,"hasColorTextureTransform",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],d.prototype,"hasEmissionTextureTransform",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],d.prototype,"hasNormalTextureTransform",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],d.prototype,"hasOcclusionTextureTransform",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],d.prototype,"hasMetallicRoughnessTextureTransform",void 0);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ReloadableShaderModule.js
var ReloadableShaderModule = __webpack_require__(47705);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/RealisticTree.glsl.js
var RealisticTree_glsl = __webpack_require__(3458);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/RealisticTreeTechnique.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class i extends DefaultMaterialTechnique/* DefaultMaterialTechnique */.R5{constructor(r,i){super(r,i,new ReloadableShaderModule/* ReloadableShaderModule */.$(RealisticTree_glsl.R,(()=>__webpack_require__.e(/* import() */ 1198).then(__webpack_require__.bind(__webpack_require__, 91198))))),this.type="RealisticTreeTechnique"}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/webscene/support/AlphaCutoff.js
var AlphaCutoff = __webpack_require__(63199);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultMaterial.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class W extends Material/* Material */.im{constructor(e,r){super(e,H),this.materialType="default",this.supportsEdges=!0,this.intersectDraped=void 0,this.produces=new Map([[RenderSlot/* RenderSlot */.N.OPAQUE_MATERIAL,e=>((0,ShaderOutput/* is3DGeometryOutputMRT */.iq)(e)||(0,ShaderOutput/* isShadowRelatedOutput */.PJ)(e))&&!this.transparent],[RenderSlot/* RenderSlot */.N.TRANSPARENT_MATERIAL,e=>((0,ShaderOutput/* is3DGeometryOutputMRT */.iq)(e)||(0,ShaderOutput/* isShadowRelatedOutput */.PJ)(e))&&this.transparent&&this.parameters.writeDepth],[RenderSlot/* RenderSlot */.N.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,e=>((0,ShaderOutput/* is3DGeometryOutput */.XY)(e)||(0,ShaderOutput/* isShadowRelatedOutput */.PJ)(e))&&this.transparent&&!this.parameters.writeDepth]]),this._vertexBufferLayout=F(this.parameters),this._configuration=new d(r.spherical)}isVisibleForOutput(e){return e!==ShaderOutput/* ShaderOutput */.V.Shadow&&e!==ShaderOutput/* ShaderOutput */.V.ShadowExcludeHighlight&&e!==ShaderOutput/* ShaderOutput */.V.ShadowHighlight||this.parameters.castShadows}get visible(){const{layerOpacity:e,colorMixMode:r,opacity:t,externalColor:s}=this.parameters;return e*("replace"===r?1:t)*("ignore"===r?1:s[3])>=AlphaCutoff/* alphaCutoff */.Q}get _hasEmissiveBase(){return!!this.parameters.emissiveTextureId||!(0,vec32.q)(this.parameters.emissiveBaseColor,vec3f64/* ZEROS */.uY)}get hasEmissions(){return this.parameters.emissiveStrength>0&&(this.parameters.emissiveSource===materialUtils/* EmissiveSourceMode */.YJ.Emissive&&this._hasEmissiveBase||this.parameters.emissiveSource===materialUtils/* EmissiveSourceMode */.YJ.Color)}getConfiguration(e,r){const{parameters:t,_configuration:s}=this,{treeRendering:a,doubleSided:i,doubleSidedType:o}=t;return super.getConfiguration(e,r,this._configuration),s.hasNormalTexture=!a&&!!t.normalTextureId,s.hasColorTexture=!!t.textureId,s.hasVertexTangents=!a&&t.hasVertexTangents,s.instanced=t.isInstanced,s.instancedDoublePrecision=t.instancedDoublePrecision,s.vvSize=!!t.vvSize,s.hasVerticalOffset=null!=t.verticalOffset,s.hasScreenSizePerspective=null!=t.screenSizePerspective,s.hasSlicePlane=t.hasSlicePlane,s.alphaDiscardMode=t.textureAlphaMode,s.normalType=a?NormalAttribute_glsl/* NormalType */.W.Attribute:t.normalType,s.transparent=this.transparent,s.writeDepth=t.writeDepth,s.customDepthTest=t.customDepthTest??basicInterfaces/* DepthTestFunction */.it.Less,s.hasOccludees=r.hasOccludees,s.cullFace=t.hasSlicePlane?basicInterfaces/* CullFaceOptions */.s2.None:t.cullFace,s.cullAboveTerrain=r.cullAboveTerrain,s.hasModelTransformation=!a&&null!=t.modelTransformation,s.hasVertexColors=t.hasVertexColors,s.hasSymbolColors=t.hasSymbolColors,s.doubleSidedMode=a?Normals_glsl/* NormalsDoubleSidedMode */.W.WindingOrder:i&&"normal"===o?Normals_glsl/* NormalsDoubleSidedMode */.W.View:i&&"winding-order"===o?Normals_glsl/* NormalsDoubleSidedMode */.W.WindingOrder:Normals_glsl/* NormalsDoubleSidedMode */.W.None,s.instancedColor=t.hasInstancedColor,(0,ShaderOutput/* isColorOrColorEmission */.RN)(e)?(s.terrainDepthTest=r.terrainDepthTest,s.receiveShadows=t.receiveShadows,s.receiveAmbientOcclusion=t.receiveAmbientOcclusion&&null!=r.ssao):(s.terrainDepthTest=!1,s.receiveShadows=s.receiveAmbientOcclusion=!1),s.vvColor=!!t.vvColor,s.textureAlphaPremultiplied=!!t.textureAlphaPremultiplied,s.pbrMode=t.usePBR?t.isSchematic?PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Schematic:PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Normal:PhysicallyBasedRenderingParameters_glsl/* PBRMode */.A9.Disabled,s.hasMetallicRoughnessTexture=!a&&!!t.metallicRoughnessTextureId,s.emissionSource=a?Emissions_glsl/* EmissionSource */.ZX.None:null!=t.emissiveTextureId&&t.emissiveSource===materialUtils/* EmissiveSourceMode */.YJ.Emissive?Emissions_glsl/* EmissionSource */.ZX.Texture:t.usePBR?t.emissiveSource===materialUtils/* EmissiveSourceMode */.YJ.Emissive?Emissions_glsl/* EmissionSource */.ZX.EmissiveColor:Emissions_glsl/* EmissionSource */.ZX.SymbolColor:Emissions_glsl/* EmissionSource */.ZX.None,s.hasOcclusionTexture=!a&&!!t.occlusionTextureId,s.offsetBackfaces=!(!this.transparent||!t.offsetTransparentBackfaces),s.oitPass=r.oitPass,s.enableOffset=r.camera.relativeElevation<OrderIndependentTransparency/* OITPolygonOffsetLimit */.xt,s.snowCover=r.snowCover,s.hasBloom=(0,ShaderOutput/* isColorEmission */.LG)(e),s.hasColorTextureTransform=!!t.colorTextureTransformMatrix,s.hasNormalTextureTransform=!!t.normalTextureTransformMatrix,s.hasEmissionTextureTransform=!!t.emissiveTextureTransformMatrix,s.hasOcclusionTextureTransform=!!t.occlusionTextureTransformMatrix,s.hasMetallicRoughnessTextureTransform=!!t.metallicRoughnessTextureTransformMatrix,s}intersect(e,c,m,u,h,d){if(null!=this.parameters.verticalOffset){const e=m.camera;(0,vec32.i)($,c[12],c[13],c[14]);let d=null;switch(m.viewingMode){case ViewingMode/* ViewingMode */.RT.Global:d=(0,vec32.n)(X,$);break;case ViewingMode/* ViewingMode */.RT.Local:d=(0,vec32.c)(X,K)}let f=0;const T=(0,vec32.d)(ee,$,e.eye),v=(0,vec32.l)(T),x=(0,vec32.g)(T,T,1/v);let g=null;this.parameters.screenSizePerspective&&(g=(0,vec32.e)(d,x)),f+=(0,MaterialUtil/* verticalOffsetAtDistance */.kE)(e,v,this.parameters.verticalOffset,g??0,this.parameters.screenSizePerspective),(0,vec32.g)(d,d,f),(0,vec32.o)(Z,d,m.transform.inverseRotation),u=(0,vec32.d)(Y,u,Z),h=(0,vec32.d)(J,h,Z)}(0,RayIntersections/* intersectTriangleGeometry */.Uy)(e,m,u,h,(0,verticalOffsetUtils/* getVerticalOffsetObject3D */.ou)(m.verticalOffset),d)}createGLMaterial(e){return new G(e)}createBufferWriter(){return new DefaultBufferWriter/* DefaultBufferWriter */.Z(this._vertexBufferLayout)}get transparent(){return Q(this.parameters)}}class G extends GLTextureMaterial/* GLTextureMaterial */.m8{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){this._material.setParameters({receiveShadows:e.shadowMap.enabled});const t=this._material.parameters;this.updateTexture(t.textureId);const s=e.camera.viewInverseTransposeMatrix;return (0,vec32.i)(t.origin,s[3],s[7],s[11]),this._material.setParameters(this.textureBindParameters),this.getTechnique(t.treeRendering?i:DefaultMaterialTechnique/* DefaultMaterialTechnique */.R5,e)}}class H extends DefaultMaterialTechnique/* DefaultMaterialPassParameters */.uD{constructor(){super(...arguments),this.treeRendering=!1,this.hasVertexTangents=!1}}function F(e){const r=(0,InterleavedLayout/* newLayout */.BP)().vec3f(VertexAttribute/* VertexAttribute */.r.POSITION);e.normalType===NormalAttribute_glsl/* NormalType */.W.Compressed?r.vec2i16(VertexAttribute/* VertexAttribute */.r.NORMALCOMPRESSED,{glNormalized:!0}):r.vec3f(VertexAttribute/* VertexAttribute */.r.NORMAL),e.hasVertexTangents&&r.vec4f(VertexAttribute/* VertexAttribute */.r.TANGENT);return(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&r.vec2f16(VertexAttribute/* VertexAttribute */.r.UV0),e.hasVertexColors&&r.vec4u8(VertexAttribute/* VertexAttribute */.r.COLOR),e.hasSymbolColors&&r.vec4u8(VertexAttribute/* VertexAttribute */.r.SYMBOLCOLOR),(0,olidUtils/* olidEnabled */.E)()&&r.vec4u8(VertexAttribute/* VertexAttribute */.r.OLIDCOLOR),r}function Q(e){const{drivenOpacity:r,opacity:t,externalColor:[s,a,i,o],layerOpacity:n,texture:l,textureId:c,textureAlphaMode:m,colorMixMode:u}=e;return r||t<1&&"replace"!==u||o<1&&"ignore"!==u||n<1||(null!=l||null!=c)&&m!==basicInterfaces/* AlphaDiscardMode */.sf.Opaque&&m!==basicInterfaces/* AlphaDiscardMode */.sf.Mask&&"replace"!==u}const Y=(0,vec3f64/* create */.vt)(),J=(0,vec3f64/* create */.vt)(),K=(0,vec3f64/* fromValues */.fA)(0,0,1),X=(0,vec3f64/* create */.vt)(),Z=(0,vec3f64/* create */.vt)(),$=(0,vec3f64/* create */.vt)(),ee=(0,vec3f64/* create */.vt)();


/***/ }),

/***/ 9319:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55274);
/* harmony import */ var _core_shaderLibrary_attributes_InstancedDoubleConfiguration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94372);
/* harmony import */ var _core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77941);
/* harmony import */ var _lib_OITPass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69338);
/* harmony import */ var _webgl_BindType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11809);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class a extends _core_shaderLibrary_attributes_InstancedDoubleConfiguration_js__WEBPACK_IMPORTED_MODULE_2__/* .InstancedDoubleConfiguration */ .n{constructor(){super(...arguments),this.output=_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__/* .ShaderOutput */ .V.Color,this.oitPass=_lib_OITPass_js__WEBPACK_IMPORTED_MODULE_4__/* .OITPass */ .Y.NONE,this.hasSlicePlane=!1,this.hasHighlightMixTexture=!1,this.bindType=_webgl_BindType_js__WEBPACK_IMPORTED_MODULE_5__/* .BindType */ .c.Pass,this.writeDepth=!0}}(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)({count:_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_1__/* .ShaderOutput */ .V.COUNT})],a.prototype,"output",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)({count:_lib_OITPass_js__WEBPACK_IMPORTED_MODULE_4__/* .OITPass */ .Y.COUNT})],a.prototype,"oitPass",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)()],a.prototype,"hasSlicePlane",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)()],a.prototype,"hasHighlightMixTexture",void 0);


/***/ }),

/***/ 17745:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ t),
/* harmony export */   p: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _layers_support_FastSymbolUpdates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69463);
/* harmony import */ var _lib_Material_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45722);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class t extends _layers_support_FastSymbolUpdates_js__WEBPACK_IMPORTED_MODULE_0__/* .VisualVariablesParameters */ .Gd{constructor(){super(...arguments),this.renderOccluded=_lib_Material_js__WEBPACK_IMPORTED_MODULE_1__/* .RenderOccludedFlag */ .m$.Occlude,this.isDecoration=!1}}const e=8;


/***/ }),

/***/ 29117:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MB: () => (/* binding */ n),
/* harmony export */   Um: () => (/* binding */ o),
/* harmony export */   kE: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85569);
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92504);
/* harmony import */ var _lib_screenSizePerspectiveUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28953);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function i(r,i,n,o,l){let s=(n.screenLength||0)*r.pixelRatio;null!=l&&(s=(0,_lib_screenSizePerspectiveUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .scale */ .hs)(s,o,i,l));const a=s*Math.tan(.5*r.fovY)/(.5*r.fullHeight);return (0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .clamp */ .qE)(a*i,n.minWorldLength||0,null!=n.maxWorldLength?n.maxWorldLength:1/0)}function n(t,e){let i=!1;for(const n in e){const o=e[n];void 0!==o&&(Array.isArray(o)?Array.isArray(t[n])&&(0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .equals */ .aI)(o,t[n])||(t[n]=o.slice(),i=!0):t[n]!==o&&(i=!0,t[n]=o))}return i}const o={multiply:1,ignore:2,replace:3,tint:4};


/***/ }),

/***/ 81500:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hk: () => (/* binding */ R),
/* harmony export */   Pq: () => (/* binding */ F),
/* harmony export */   SA: () => (/* binding */ k),
/* harmony export */   Ut: () => (/* binding */ h),
/* harmony export */   Wu: () => (/* binding */ v),
/* harmony export */   p1: () => (/* binding */ S),
/* harmony export */   tb: () => (/* binding */ N),
/* harmony export */   uO: () => (/* binding */ b),
/* harmony export */   vx: () => (/* binding */ L),
/* harmony export */   zC: () => (/* binding */ z)
/* harmony export */ });
/* unused harmony exports writeBufferMat3f, writeBufferMat4f, writeBufferVec2, writeBufferVec3, writeTangent, writeVVFeatureAttribute */
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24121);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58359);
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21742);
/* harmony import */ var _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57813);
/* harmony import */ var _lib_Util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58947);
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50645);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function b(e,t,f,r=1){const{data:o,indices:i}=e,s=t.typedBuffer,n=t.typedBufferStride,c=i.length;if(f*=n,1===r)for(let l=0;l<c;++l)s[f]=o[i[l]],f+=n;else for(let l=0;l<c;++l){const e=o[i[l]];for(let t=0;t<r;t++)s[f]=e,f+=n}}function m(e,t,f){const{data:r,indices:o}=e,i=t.typedBuffer,s=t.typedBufferStride,n=o.length;f*=s;for(let c=0;c<n;++c){const e=2*o[c];i[f]=r[e],i[f+1]=r[e+1],f+=s}}function O(e,t,f,r=1){const{data:o,indices:i}=e,s=t.typedBuffer,n=t.typedBufferStride,c=i.length;if(f*=n,1===r)for(let l=0;l<c;++l){const e=3*i[l];s[f]=o[e],s[f+1]=o[e+1],s[f+2]=o[e+2],f+=n}else for(let l=0;l<c;++l){const e=3*i[l];for(let t=0;t<r;++t)s[f]=o[e],s[f+1]=o[e+1],s[f+2]=o[e+2],f+=n}}function h(e,t,f,r=1){const{data:o,indices:i}=e,s=t.typedBuffer,n=t.typedBufferStride,c=i.length;if(f*=n,1===r)for(let l=0;l<c;++l){const e=4*i[l];s[f]=o[e],s[f+1]=o[e+1],s[f+2]=o[e+2],s[f+3]=o[e+3],f+=n}else for(let l=0;l<c;++l){const e=4*i[l];for(let t=0;t<r;++t)s[f]=o[e],s[f+1]=o[e+1],s[f+2]=o[e+2],s[f+3]=o[e+3],f+=n}}function F(e,t,f){const r=e.typedBuffer,o=e.typedBufferStride;t*=o;for(let i=0;i<f;++i)r[t]=0,r[t+1]=0,r[t+2]=0,r[t+3]=0,t+=o}function I(e,t,f){const{data:r,indices:o}=e,i=t.typedBuffer,s=t.typedBufferStride,n=o.length;f*=s;for(let c=0;c<n;++c){const e=9*o[c];for(let t=0;t<9;++t)i[f+t]=r[e+t];f+=s}}function T(e,t,f){const{data:r,indices:o}=e,i=t.typedBuffer,s=t.typedBufferStride,n=o.length;f*=s;for(let c=0;c<n;++c){const e=16*o[c];for(let t=0;t<16;++t)i[f+t]=r[e+t];f+=s}}function R(e,t,f,r,i=1){if(!t)return void O(e,f,r,i);const{data:s,indices:n}=e,c=f.typedBuffer,l=f.typedBufferStride,d=n.length,u=t[0],a=t[1],p=t[2],g=t[4],B=t[5],y=t[6],b=t[8],m=t[9],h=t[10],F=t[12],I=t[13],T=t[14];r*=l;let R=0,S=0,E=0;const N=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_2__/* .hasIdentityRotation */ .tZ)(t)?e=>{R=s[e]+F,S=s[e+1]+I,E=s[e+2]+T}:e=>{const t=s[e],f=s[e+1],r=s[e+2];R=u*t+g*f+b*r+F,S=a*t+B*f+m*r+I,E=p*t+y*f+h*r+T};if(1===i)for(let o=0;o<d;++o)N(3*n[o]),c[r]=R,c[r+1]=S,c[r+2]=E,r+=l;else for(let o=0;o<d;++o){N(3*n[o]);for(let e=0;e<i;++e)c[r]=R,c[r+1]=S,c[r+2]=E,r+=l}}function S(e,t,f,r,s=1){if(!t)return void O(e,f,r,s);const{data:n,indices:c}=e,l=t,d=f.typedBuffer,u=f.typedBufferStride,a=c.length,p=l[0],g=l[1],B=l[2],y=l[4],b=l[5],m=l[6],h=l[8],F=l[9],I=l[10],T=!(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_2__/* .isOrthoNormal */ .ut)(l),R=1e-6,S=1-R;r*=u;let E=0,N=0,A=0;const v=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_2__/* .hasIdentityRotation */ .tZ)(l)?e=>{E=n[e],N=n[e+1],A=n[e+2]}:e=>{const t=n[e],f=n[e+1],r=n[e+2];E=p*t+y*f+h*r,N=g*t+b*f+F*r,A=B*t+m*f+I*r};if(1===s)if(T)for(let o=0;o<a;++o){v(3*c[o]);const e=E*E+N*N+A*A;if(e<S&&e>R){const t=1/Math.sqrt(e);d[r]=E*t,d[r+1]=N*t,d[r+2]=A*t}else d[r]=E,d[r+1]=N,d[r+2]=A;r+=u}else for(let o=0;o<a;++o)v(3*c[o]),d[r]=E,d[r+1]=N,d[r+2]=A,r+=u;else for(let o=0;o<a;++o){if(v(3*c[o]),T){const e=E*E+N*N+A*A;if(e<S&&e>R){const t=1/Math.sqrt(e);E*=t,N*=t,A*=t}}for(let e=0;e<s;++e)d[r]=E,d[r+1]=N,d[r+2]=A,r+=u}}function E(e,t,f,r,o=1){if(!t)return void h(e,f,r,o);const{data:s,indices:n}=e,c=t,l=f.typedBuffer,d=f.typedBufferStride,u=n.length,a=c[0],p=c[1],g=c[2],B=c[4],y=c[5],b=c[6],m=c[8],O=c[9],F=c[10],I=!(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_2__/* .isOrthoNormal */ .ut)(c),T=1e-6,R=1-T;if(r*=d,1===o)for(let i=0;i<u;++i){const e=4*n[i],t=s[e],f=s[e+1],o=s[e+2],c=s[e+3];let u=a*t+B*f+m*o,h=p*t+y*f+O*o,S=g*t+b*f+F*o;if(I){const e=u*u+h*h+S*S;if(e<R&&e>T){const t=1/Math.sqrt(e);u*=t,h*=t,S*=t}}l[r]=u,l[r+1]=h,l[r+2]=S,l[r+3]=c,r+=d}else for(let i=0;i<u;++i){const e=4*n[i],t=s[e],f=s[e+1],c=s[e+2],u=s[e+3];let h=a*t+B*f+m*c,S=p*t+y*f+O*c,E=g*t+b*f+F*c;if(I){const e=h*h+S*S+E*E;if(e<R&&e>T){const t=1/Math.sqrt(e);h*=t,S*=t,E*=t}}for(let i=0;i<o;++i)l[r]=h,l[r+1]=S,l[r+2]=E,l[r+3]=u,r+=d}}function N(e,t,f,r,o=1){const{data:i,indices:s}=e,n=f.typedBuffer,c=f.typedBufferStride,l=s.length;if(r*=c,t!==i.length||4!==t)if(1!==o)if(4!==t)for(let d=0;d<l;++d){const e=3*s[d];for(let t=0;t<o;++t)n[r]=i[e],n[r+1]=i[e+1],n[r+2]=i[e+2],n[r+3]=255,r+=c}else for(let d=0;d<l;++d){const e=4*s[d];for(let t=0;t<o;++t)n[r]=i[e],n[r+1]=i[e+1],n[r+2]=i[e+2],n[r+3]=i[e+3],r+=c}else{if(4===t){for(let e=0;e<l;++e){const t=4*s[e];n[r]=i[t],n[r+1]=i[t+1],n[r+2]=i[t+2],n[r+3]=i[t+3],r+=c}return}for(let e=0;e<l;++e){const t=3*s[e];n[r]=i[t],n[r+1]=i[t+1],n[r+2]=i[t+2],n[r+3]=255,r+=c}}else{n[r]=i[0],n[r+1]=i[1],n[r+2]=i[2],n[r+3]=i[3];const e=new Uint32Array(f.typedBuffer.buffer,f.start),t=c/4,s=e[r/=4];r+=t;const d=l*o;for(let f=1;f<d;++f)e[r]=s,r+=t}}function A(e,t,f){const{data:r,indices:o}=e,i=t.typedBuffer,s=t.typedBufferStride,n=o.length,c=r[0];f*=s;for(let l=0;l<n;++l)i[f]=c,f+=s}function v(r,o,i,s){(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.d)(w,r,o);const n=Math.max(Math.sqrt((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.l)(w)),1e-4);(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.g)(w,w,1/n),i[s++]=w[0],i[s++]=w[1],i[s++]=w[2],i[s++]=n}const w=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)();function L(e,t,f,r,o=1){const i=t.typedBuffer,s=t.typedBufferStride;if(r*=s,1===o)for(let n=0;n<f;++n)i[r]=e[0],i[r+1]=e[1],i[r+2]=e[2],i[r+3]=e[3],r+=s;else for(let n=0;n<f;++n)for(let t=0;t<o;++t)i[r]=e[0],i[r+1]=e[1],i[r+2]=e[2],i[r+3]=e[3],r+=s}function k(e,t,f,r,o,i,n){let c={numItems:0,numVerticesPerItem:0};for(const l of f.fields.keys()){const f=e.get(l),d=f?.indices;if(f&&d)l===_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__/* .VertexAttribute */ .r.POSITION&&(c={numItems:1,numVerticesPerItem:d.length}),z(l,f,r,o,i,n);else if(l===_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__/* .VertexAttribute */ .r.OLIDCOLOR&&null!=t){const f=e.get(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__/* .VertexAttribute */ .r.POSITION)?.indices;if(f){const e=f.length;L(t,i.getField(l,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_3__/* .BufferViewVec4u8 */ .XP),e,n)}}}return c}function z(e,t,f,r,o,i){switch(e){case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__/* .VertexAttribute */ .r.POSITION:{(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_4__/* .assert */ .vA)(3===t.size);const r=o.getField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_3__/* .BufferViewVec3f */ .xs);(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_4__/* .assert */ .vA)(!!r,`No buffer view for ${e}`),R(t,f,r,i);break}case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__/* .VertexAttribute */ .r.NORMAL:{(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_4__/* .assert */ .vA)(3===t.size);const f=o.getField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_3__/* .BufferViewVec3f */ .xs);(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_4__/* .assert */ .vA)(!!f,`No buffer view for ${e}`),S(t,r,f,i);break}case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__/* .VertexAttribute */ .r.NORMALCOMPRESSED:case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__/* .VertexAttribute */ .r.PROFILERIGHT:case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__/* .VertexAttribute */ .r.PROFILEUP:{(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_4__/* .assert */ .vA)(2===t.size);const f=o.getField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_3__/* .BufferViewVec2i16 */ .mJ);(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_4__/* .assert */ .vA)(!!f,`No buffer view for ${e}`),m(t,f,i);break}case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__/* .VertexAttribute */ .r.UV0:{(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_4__/* .assert */ .vA)(2===t.size);const f=o.getField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_3__/* .BufferViewVec2f16 */ .ZD)??o.getField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_3__/* .BufferViewVec2f */ .gH);(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_4__/* .assert */ .vA)(!!f,`No buffer view for ${e}`),m(t,f,i);break}case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__/* .VertexAttribute */ .r.UVI:{(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_4__/* .assert */ .vA)(2===t.size);const f=o.getField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_3__/* .BufferViewVec2i16 */ .mJ);(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_4__/* .assert */ .vA)(!!f,`No buffer view for ${e}`),m(t,f,i);break}case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__/* .VertexAttribute */ .r.COLOR:case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__/* .VertexAttribute */ .r.SYMBOLCOLOR:{const f=o.getField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_3__/* .BufferViewVec4u8 */ .XP);(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_4__/* .assert */ .vA)(!!f,`No buffer view for ${e}`),(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_4__/* .assert */ .vA)(3===t.size||4===t.size),N(t,t.size,f,i);break}case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__/* .VertexAttribute */ .r.COLORFEATUREATTRIBUTE:case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__/* .VertexAttribute */ .r.OPACITYFEATUREATTRIBUTE:case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__/* .VertexAttribute */ .r.SIZEFEATUREATTRIBUTE:{const f=o.getField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_3__/* .BufferViewFloat */ .Y$)??o.getField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_3__/* .BufferViewFloat */ .Y$);(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_4__/* .assert */ .vA)(!!f,`No buffer view for ${e}`),(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_4__/* .assert */ .vA)(1===t.size),A(t,f,i);break}case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__/* .VertexAttribute */ .r.TANGENT:{(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_4__/* .assert */ .vA)(4===t.size);const r=o.getField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_3__/* .BufferViewVec4f */ .Eq);(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_4__/* .assert */ .vA)(!!r,`No buffer view for ${e}`),E(t,f,r,i);break}case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__/* .VertexAttribute */ .r.PROFILEVERTEXANDNORMAL:{(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_4__/* .assert */ .vA)(4===t.size);const f=o.getField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_3__/* .BufferViewVec4f16 */ .jz)??o.getField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_3__/* .BufferViewVec4f */ .Eq);(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_4__/* .assert */ .vA)(!!f,`No buffer view for ${e}`),h(t,f,i);break}case _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__/* .VertexAttribute */ .r.PROFILEAUXDATA:{(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_4__/* .assert */ .vA)(3===t.size);const f=o.getField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_3__/* .BufferViewVec3f16 */ .EC)??o.getField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_3__/* .BufferViewVec3f */ .xs);(0,_lib_Util_js__WEBPACK_IMPORTED_MODULE_4__/* .assert */ .vA)(!!f,`No buffer view for ${e}`),O(t,f,i);break}}}


/***/ }),

/***/ 12221:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bt: () => (/* binding */ o),
/* harmony export */   Jr: () => (/* binding */ n),
/* harmony export */   SY: () => (/* binding */ s),
/* harmony export */   mb: () => (/* binding */ t)
/* harmony export */ });
/* unused harmony export useSchematicPBRI3S */
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24121);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58359);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function n({normalTexture:e,metallicRoughnessTexture:n,metallicFactor:r,roughnessFactor:t,emissiveTexture:o,emissiveFactor:s,occlusionTexture:c}){return null==e&&null==n&&null==o&&(null==s||(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.q)(s,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__/* .ZEROS */ .uY))&&null==c&&(null==t||1===t)&&(null==r||1===r)}function r({normalTexture:e,metallicRoughnessTexture:n,metallicFactor:r,roughnessFactor:t,emissiveTexture:o,emissiveFactor:s,occlusionTexture:c}){return null==e&&null==n&&null==o&&(null==s||l(s,u))&&null==c&&(null==t||1===t)&&(null==r||1===r||0===r)}const t=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__/* .freeze */ .CN)(1,1,.5),o=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__/* .freeze */ .CN)(0,.6,.2),s=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__/* .freeze */ .CN)(0,1,.2);


/***/ }),

/***/ 73418:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R5: () => (/* binding */ B),
/* harmony export */   V: () => (/* binding */ k),
/* harmony export */   uD: () => (/* binding */ w)
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58359);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28152);
/* harmony import */ var _symbols_support_materialUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59427);
/* harmony import */ var _core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55274);
/* harmony import */ var _core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81283);
/* harmony import */ var _core_shaderLibrary_attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82089);
/* harmony import */ var _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(47705);
/* harmony import */ var _core_shaderTechnique_ShaderTechnique_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28347);
/* harmony import */ var _lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(91013);
/* harmony import */ var _lib_Material_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45722);
/* harmony import */ var _lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1931);
/* harmony import */ var _lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(98546);
/* harmony import */ var _materials_pbrUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12221);
/* harmony import */ var _chunks_DefaultMaterial_glsl_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(90618);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(41746);
/* harmony import */ var _webgl_renderState_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2449);
/* harmony import */ var _webscene_support_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(63199);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class w extends _core_shaderLibrary_attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_5__/* .VertexNormalPassParameters */ .Zo{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=_materials_pbrUtils_js__WEBPACK_IMPORTED_MODULE_11__/* .advancedMRRFactors */ .mb,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_7__/* .CullFaceOptions */ .s2.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveStrength=0,this.emissiveSource=_symbols_support_materialUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .EmissiveSourceMode */ .YJ.Color,this.emissiveBaseColor=_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__/* .ZEROS */ .uY,this.instancedDoublePrecision=!1,this.normalType=_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .NormalType */ .W.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__/* .freeze */ .CN)(.2,.2,.2),this.diffuse=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__/* .freeze */ .CN)(.8,.8,.8),this.externalColor=(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_1__/* .fromValues */ .fA)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__/* .create */ .vt)(),this.hasSlicePlane=!1,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.drivenOpacity=!1,this.writeDepth=!0,this.customDepthTest=_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_7__/* .DepthTestFunction */ .it.Less,this.textureAlphaMode=_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_7__/* .AlphaDiscardMode */ .sf.Blend,this.textureAlphaCutoff=_webscene_support_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_15__/* .alphaCutoff */ .Q,this.textureAlphaPremultiplied=!1,this.renderOccluded=_lib_Material_js__WEBPACK_IMPORTED_MODULE_8__/* .RenderOccludedFlag */ .m$.Occlude,this.isDecoration=!1}}class k extends _core_shaderLibrary_attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_5__/* .VertexNormalDrawParameters */ .gy{constructor(){super(...arguments),this.origin=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__/* .create */ .vt)(),this.slicePlaneLocalOrigin=this.origin}}class B extends _core_shaderTechnique_ShaderTechnique_js__WEBPACK_IMPORTED_MODULE_6__/* .ShaderTechnique */ .w{constructor(e,t,i=new _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_16__/* .ReloadableShaderModule */ .$(_chunks_DefaultMaterial_glsl_js__WEBPACK_IMPORTED_MODULE_12__.D,(()=>__webpack_require__.e(/* import() */ 1318).then(__webpack_require__.bind(__webpack_require__, 71318))))){super(e,t,i),this.type="DefaultMaterialTechnique"}_makePipeline(e,t){const{oitPass:i,output:s,transparent:r,cullFace:o,customDepthTest:a,hasOccludees:n}=e;return (0,_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_14__/* .makePipelineState */ .Ey)({blending:(0,_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_3__/* .isColorOrColorEmission */ .RN)(s)&&r?(0,_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_9__/* .blending */ .Yf)(i):null,culling:_(e)?(0,_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_14__/* .cullingParams */ .Xt)(o):null,depthTest:{func:(0,_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_9__/* .oitDepthTest */ .K_)(i,q(a))},depthWrite:(0,_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_9__/* .depthWrite */ .z5)(e),drawBuffers:(0,_core_shaderTechnique_ShaderTechnique_js__WEBPACK_IMPORTED_MODULE_6__/* .depthOnlyOutputBuffersOr */ .L)(s,(0,_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_9__/* .getDrawBuffers */ .m6)(i,s)),colorWrite:_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_14__/* .defaultColorWrite */ .kn,stencilWrite:n?_lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .stencilWriteMaskOn */ .v0:null,stencilTest:n?t?_lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .stencilToolMaskBaseParams */ .a9:_lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .stencilBaseAllZerosParams */ .qh:null,polygonOffset:(0,_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_9__/* .oitPolygonOffset */ .mE)(e)})}initializePipeline(e){return this._occludeePipelineState=this._makePipeline(e,!0),this._makePipeline(e,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}function q(e){return e===_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_7__/* .DepthTestFunction */ .it.Lequal?_webgl_enums_js__WEBPACK_IMPORTED_MODULE_13__/* .CompareFunction */ .MT.LEQUAL:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_13__/* .CompareFunction */ .MT.LESS}function _(e){return e.cullFace!==_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_7__/* .CullFaceOptions */ .s2.None||!e.hasSlicePlane&&(!e.transparent&&!e.doubleSidedMode)}


/***/ }),

/***/ 19274:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55274);
/* harmony import */ var _core_shaderLibrary_output_Emissions_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15420);
/* harmony import */ var _core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1361);
/* harmony import */ var _core_shaderLibrary_util_ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89002);
/* harmony import */ var _core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72196);
/* harmony import */ var _lib_OITPass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69338);
/* harmony import */ var _webscene_support_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63199);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function u(u,d){u.include(_core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .OutputHighlight */ .Q,d),u.include(_core_shaderLibrary_output_Emissions_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .Emissions */ .NL,d),u.fragment.include(_core_shaderLibrary_util_ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .ColorConversion */ .a);const{output:p,oitPass:c,discardInvisibleFragments:m,snowCover:C}=d,g=p===_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderOutput */ .V.ObjectAndLayerIdColor,h=(0,_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__/* .isColorEmission */ .LG)(p),v=(0,_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__/* .isColorOrColorEmission */ .RN)(p)&&c===_lib_OITPass_js__WEBPACK_IMPORTED_MODULE_5__/* .OITPass */ .Y.ColorAlpha,b=(0,_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__/* .isColorOrColorEmission */ .RN)(p)&&c!==_lib_OITPass_js__WEBPACK_IMPORTED_MODULE_5__/* .OITPass */ .Y.ColorAlpha;let j=0;(b||h||v)&&u.outputs.add("fragColor","vec4",j++),h&&u.outputs.add("fragEmission","vec4",j++),v&&u.outputs.add("fragAlpha","float",j++),u.fragment.code.add((0,_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .glsl */ .H)`
    void outputColorHighlightOID(vec4 finalColor, const in vec3 vWorldPosition, vec3 emissiveBaseColor ${(0,_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__.If)(C,", float snow")}) {
      ${(0,_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__.If)(g,"finalColor.a = 1.0;")}

      ${(0,_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__.If)(m,`if (finalColor.a < ${_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .glsl */ .H.float(_webscene_support_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_6__/* .alphaCutoff */ .Q)}) { discard; }`)}

      finalColor = applySlice(finalColor, vWorldPosition);
      ${(0,_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__.If)(v,(0,_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .glsl */ .H)`fragColor = premultiplyAlpha(finalColor);
             fragAlpha = finalColor.a;`)}
      ${(0,_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__.If)(b,"fragColor = finalColor;")}
      ${(0,_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__.If)(h,`fragEmission = ${(0,_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__.If)(C,"mix(finalColor.a * getEmissions(emissiveBaseColor), vec4(0.0), snow);","finalColor.a * getEmissions(emissiveBaseColor);")}`)}
      calculateOcclusionAndOutputHighlight();
      ${(0,_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__.If)(g,"outputObjectAndLayerIdColor();")}
    }
  `)}


/***/ }),

/***/ 85856:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72196);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function o(o){o.code.add((0,_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H)`vec3 tonemapACES(vec3 x) {
return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}`)}


/***/ }),

/***/ 11041:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OG: () => (/* binding */ t),
/* harmony export */   hM: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony exports fromRenderCoordinates, renderCoordinateTransformAt, toRenderCoordinates */
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86128);
/* harmony import */ var _geometry_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59538);
/* harmony import */ var _geometry_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84119);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var n,t;function a(o,e,n,t,a,l,c){return t=t||o.spatialReference,r(e,t,n,a,o.renderCoordsHelper.spatialReference,l,c)?a:null}function l(o,e,n,t,a,l,c){return l=l||o.spatialReference,r(e,o.renderCoordsHelper.spatialReference,n,t,l,a,c)?t:null}function c(r,n,t,a){return a||(a=o()),t=t||r.spatialReference,e(t,n,a,r.renderCoordsHelper.spatialReference)?a:null}!function(o){o.OPAQUE="opaque-color",o.TRANSPARENT="transparent-color",o.COMPOSITE="composite-color",o.FINAL="final-color"}(n||(n={})),function(o){o.SSAO="ssao",o.LASERLINES="laserline-color",o.ANTIALIASING="aa-color",o.HIGHLIGHTS="highlight-color",o.MAGNIFIER="magnifier-color",o.OCCLUDED="occluded-color",o.VIEWSHED="viewshed-color",o.OPAQUE_TERRAIN="opaque-terrain-color",o.OPAQUE_ENVIRONMENT="opaque-environment-color",o.TRANSPARENT_ENVIRONMENT="transparent-environment-color",o.FOCUSAREA="focusarea",o.FOCUSAREA_COLOR="focusarea-color"}(t||(t={}));


/***/ }),

/***/ 43196:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52495);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98849);
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85251);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/* harmony import */ var _webgl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11041);
/* harmony import */ var _webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(91013);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let u=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(e){super(e),this.view=null,this.consumes={required:[]},this.produces=_webgl_js__WEBPACK_IMPORTED_MODULE_6__/* .RenderCategory */ .hM.COMPOSITE,this.requireGeometryDepth=!1,this._dirty=!0}initialize(){this.addHandles([(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .watch */ .wB)((()=>this.view.ready),(e=>{e&&this.view.stage?.renderer.addRenderNode(this)}),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .initial */ .Vh)])}destroy(){this.view.stage?.renderer?.removeRenderNode(this)}precompile(){}render(){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A("RenderNode:render-function-not-implemented","render() is not implemented.")}get camera(){return this.view.state.camera.clone()}get sunLight(){return this.bindParameters.lighting.legacy}get gl(){return this.view.stage.renderView.renderingContext.gl}get techniques(){return this.view.stage.renderView.techniques}acquireOutputFramebuffer(){const e=this._frameBuffer?.getTexture()?.descriptor,r=this.view.stage.renderer.fboCache.acquire(e?.width??640,e?.height??480,this.produces);return r.fbo?.initializeAndBind(),r}bindRenderTarget(){return this._frameBuffer?.fbo?.initializeAndBind(),this._frameBuffer}requestRender(e){e===_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_7__/* .RenderRequestType */ .C7.UPDATE&&this.view.stage?.renderView.requestRender(e),this._dirty=!0}resetWebGLState(){this.renderingContext.resetState(),this.renderingContext.bindFramebuffer(this._frameBuffer?.fbo)}get fboCache(){return this.view.stage.renderer.fboCache}get bindParameters(){return this.renderContext.bind}get renderingContext(){return this.view.stage.renderView.renderingContext}get renderContext(){return this.view.stage?.renderer.renderContext}updateAnimation(e){return!!this._dirty&&(this._dirty=!1,!0)}doRender(e){this._frameBuffer=e.find((({name:e})=>e===this.produces));try{return this.render(e)}finally{this._frameBuffer=null}}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({constructOnly:!0})],u.prototype,"view",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({constructOnly:!0})],u.prototype,"consumes",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)()],u.prototype,"produces",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({readOnly:!0})],u.prototype,"techniques",null),u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.views.3d.webgl.RenderNode")],u);


/***/ }),

/***/ 22005:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ c)
/* harmony export */ });
/* unused harmony export noParameters */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class s{}const c=s,e=new c;


/***/ }),

/***/ 96028:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N5: () => (/* binding */ i)
/* harmony export */ });
/* unused harmony exports Code, Includes, Main, Stage, Uniforms */
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(539);
/* harmony import */ var _BindType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11809);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const n=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class s{constructor(){this._includedModules=new Map}include(e,t){this._includedModules.has(e)?this._includedModules.get(e):(this._includedModules.set(e,t),e(this.builder,t))}}class i extends s{constructor(){super(...arguments),this.vertex=new c,this.fragment=new c,this.attributes=new h,this.varyings=new m,this.extensions=new _,this.outputs=new d}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e,t=!1){const r=this.extensions.generateSource(e),n=this.attributes.generateSource(e),s=this.varyings.generateSource(e),i="vertex"===e?this.vertex:this.fragment,o=i.uniforms.generateSource(),a=i.code.generateSource(),u=i.main.generateSource(t),c="vertex"===e?g:p,h=i.constants.generateSource(),m=this.outputs.generateSource(e);return`#version 300 es\n${r.join("\n")}\n${c}\n${h.join("\n")}\n${o.join("\n")}\n${n.join("\n")}\n${s.join("\n")}\n${m.join("\n")}\n${a.join("\n")}\n${u.join("\n")}`}generateBind(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const n=e.bind[_BindType_js__WEBPACK_IMPORTED_MODULE_3__/* .BindType */ .c.Bind];n&&t.set(e.name,n)})),this.fragment.uniforms.entries.forEach((e=>{const n=e.bind[_BindType_js__WEBPACK_IMPORTED_MODULE_3__/* .BindType */ .c.Bind];n&&t.set(e.name,n)}));const n=Array.from(t.values()),s=n.length;return t=>{for(let r=0;r<s;++r)n[r](e,t)}}generateBindPass(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const n=e.bind[_BindType_js__WEBPACK_IMPORTED_MODULE_3__/* .BindType */ .c.Pass];n&&t.set(e.name,n)})),this.fragment.uniforms.entries.forEach((e=>{const n=e.bind[_BindType_js__WEBPACK_IMPORTED_MODULE_3__/* .BindType */ .c.Pass];n&&t.set(e.name,n)}));const n=Array.from(t.values()),s=n.length;return(t,r)=>{for(let i=0;i<s;++i)n[i](e,t,r)}}generateBindDraw(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const n=e.bind[_BindType_js__WEBPACK_IMPORTED_MODULE_3__/* .BindType */ .c.Draw];n&&t.set(e.name,n)})),this.fragment.uniforms.entries.forEach((e=>{const n=e.bind[_BindType_js__WEBPACK_IMPORTED_MODULE_3__/* .BindType */ .c.Draw];n&&t.set(e.name,n)}));const n=Array.from(t.values()),s=n.length;return(t,r,i)=>{for(let o=0;o<s;++o)n[o](e,i,t,r)}}}class o{constructor(e){this._stage=e,this._entries=new Map}add(...e){for(const t of e)this._add(t);return this._stage}get(e){return this._entries.get(e)}_add(t){if(null!=t){if(this._entries.has(t.name)&&!this._entries.get(t.name).equals(t))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("shaderbuilder:duplicate-uniform",`Duplicate uniform name ${t.name} for different uniform type`);this._entries.set(t.name,t)}else n().error(`Trying to add null Uniform from ${(new Error).stack}.`)}generateSource(){return Array.from(this._entries.values()).map((({name:e,arraySize:t,type:r})=>null!=t?`uniform ${r} ${e}[${t}];`:`uniform ${r} ${e};`))}get entries(){return Array.from(this._entries.values())}}class a{constructor(e){this._stage=e,this._bodies=new Array}add(e){return this._bodies.push(e),this._stage}generateSource(t){if(this._bodies.length>0)return[`void main() {\n ${this._bodies.join("\n")||""} \n}`];if(t)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("shaderbuilder:missing-main","Shader does not contain main function body.");return[]}}class u{constructor(e){this._stage=e,this._entries=new Array}add(e){return this._entries.push(e),this._stage}generateSource(){return this._entries}}class c extends s{constructor(){super(...arguments),this.uniforms=new o(this),this.main=new a(this),this.code=new u(this),this.constants=new l(this)}get builder(){return this}}class h{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`in ${e[1]} ${e[0]};`))}}class m{constructor(){this._entries=new Map}add(e,t,r){this._entries.has(e)?n().warn(`Ignoring duplicate varying ${t} ${e}`):this._entries.set(e,{type:t,invariant:r?.invariant??!1})}generateSource(e){const t=new Array;return this._entries.forEach(((r,n)=>t.push((r.invariant&&"vertex"===e?"invariant ":"")+("vertex"===e?"out":"in")+` ${r.type} ${n};`))),t}}class _{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?_.ALLOWLIST_VERTEX:_.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}static{this.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"]}static{this.ALLOWLIST_VERTEX=[]}}class d{constructor(){this._entries=new Map}add(e,t,r=0){const s=this._entries.get(r);s?.name!==e||s?.type!==t?this._entries.set(r,{name:e,type:t}):n().warn(`Fragment shader output location ${r} occupied`)}static{this.DEFAULT_TYPE="vec4"}static{this.DEFAULT_NAME="fragColor"}generateSource(e){if("vertex"===e)return[];0===this._entries.size&&this._entries.set(0,{name:d.DEFAULT_NAME,type:d.DEFAULT_TYPE});const t=new Array;return this._entries.forEach(((e,r)=>t.push(`layout(location = ${r}) out ${e.type} ${e.name};`))),t}}class l{constructor(e){this._stage=e,this._entries=new Set}add(e,t,r){let n="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":n=l._numberToFloatStr(r);break;case"int":n=l._numberToIntStr(r);break;case"bool":n=r.toString();break;case"vec2":n=`vec2(${l._numberToFloatStr(r[0])},                            ${l._numberToFloatStr(r[1])})`;break;case"vec3":n=`vec3(${l._numberToFloatStr(r[0])},                            ${l._numberToFloatStr(r[1])},                            ${l._numberToFloatStr(r[2])})`;break;case"vec4":n=`vec4(${l._numberToFloatStr(r[0])},                            ${l._numberToFloatStr(r[1])},                            ${l._numberToFloatStr(r[2])},                            ${l._numberToFloatStr(r[3])})`;break;case"ivec2":n=`ivec2(${l._numberToIntStr(r[0])},                             ${l._numberToIntStr(r[1])})`;break;case"ivec3":n=`ivec3(${l._numberToIntStr(r[0])},                             ${l._numberToIntStr(r[1])},                             ${l._numberToIntStr(r[2])})`;break;case"ivec4":n=`ivec4(${l._numberToIntStr(r[0])},                             ${l._numberToIntStr(r[1])},                             ${l._numberToIntStr(r[2])},                             ${l._numberToIntStr(r[3])})`;break;case"uvec2":n=`uvec2(${l._numberToIntStr(r[0])},                             ${l._numberToIntStr(r[1])})`;break;case"uvec3":n=`uvec3(${l._numberToIntStr(r[0])},                             ${l._numberToIntStr(r[1])},                             ${l._numberToIntStr(r[2])})`;break;case"uvec4":n=`uvec4(${l._numberToIntStr(r[0])},                             ${l._numberToIntStr(r[1])},                             ${l._numberToIntStr(r[2])},                             ${l._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":n=`${t}(${Array.prototype.map.call(r,(e=>l._numberToFloatStr(e))).join(", ")})`}return this._entries.add(`const ${t} ${e} = ${n};`),this._stage}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const p="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp int;\n  precision highp sampler2D;\n  precision highp usampler2D;\n  precision highp sampler2DArray;\n  precision highp sampler2DShadow;\n#else\n  precision mediump float;\n  precision mediump int;\n  precision mediump sampler2D;\n  precision mediump usampler2D;\n  precision mediump sampler2DArray;\n  precision mediump sampler2DShadow;\n#endif",g="precision highp float;\n precision highp sampler2D;\n precision highp usampler2D;\n precision highp sampler2DArray;\n precision highp sampler2DShadow;\n\n\n invariant gl_Position;\n ";


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
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function t(t,n,o){for(let r=0;r<o;++r)n[2*r]=t[r],n[2*r+1]=t[r]-n[2*r]}function n(t,n,o){for(let r=0;r<o;++r)n[r]=t[2*r]+t[2*r+1]}function o(t,n){const o=t.length;for(let r=0;r<o;++r)e[0]=t[r],n[r]=e[0];return n}function r(t,n){const o=t.length;for(let r=0;r<o;++r)e[0]=t[r],e[1]=t[r]-e[0],n[r]=e[1];return n}const e=new Float32Array(2);


/***/ }),

/***/ 2449:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ey: () => (/* binding */ B),
/* harmony export */   Ms: () => (/* binding */ Q),
/* harmony export */   RC: () => (/* binding */ o),
/* harmony export */   T8: () => (/* binding */ c),
/* harmony export */   Uy: () => (/* binding */ p),
/* harmony export */   Xt: () => (/* binding */ f),
/* harmony export */   hG: () => (/* binding */ u),
/* harmony export */   iD: () => (/* binding */ a),
/* harmony export */   kn: () => (/* binding */ g),
/* harmony export */   p3: () => (/* binding */ r)
/* harmony export */ });
/* unused harmony exports add, backFaceCullingParams, copySource, makeBlending, makeColorWrite, makeCulling, makeDepthTest, makeDepthWrite, makeDrawBuffers, makePolygonOffset, makeStencilTest, makeStencilWrite, simpleBlendingParams */
/* harmony import */ var _3d_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91013);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41746);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function l(t,e,i=_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .BlendOperation */ .Tb.ADD,s=[0,0,0,0]){return{srcRgb:t,srcAlpha:t,dstRgb:e,dstAlpha:e,opRgb:i,opAlpha:i,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}function r(t,e,i,s,l=_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .BlendOperation */ .Tb.ADD,r=_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .BlendOperation */ .Tb.ADD,a=[0,0,0,0]){return{srcRgb:t,srcAlpha:e,dstRgb:i,dstAlpha:s,opRgb:l,opAlpha:r,color:{r:a[0],g:a[1],b:a[2],a:a[3]}}}const a=l(_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .BlendFactor */ .dn.ZERO,_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .BlendFactor */ .dn.ONE_MINUS_SRC_ALPHA),_=l(_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .BlendFactor */ .dn.ONE,_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .BlendFactor */ .dn.ZERO),h=l(_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .BlendFactor */ .dn.ONE,_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .BlendFactor */ .dn.ONE),o=l(_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .BlendFactor */ .dn.ONE,_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .BlendFactor */ .dn.ONE_MINUS_SRC_ALPHA),c=r(_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .BlendFactor */ .dn.SRC_ALPHA,_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .BlendFactor */ .dn.ONE,_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .BlendFactor */ .dn.ONE_MINUS_SRC_ALPHA,_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .BlendFactor */ .dn.ONE_MINUS_SRC_ALPHA),d={face:_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .Face */ .Y7.BACK,mode:_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CullMode */ .Ac.CCW},u={face:_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .Face */ .Y7.FRONT,mode:_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CullMode */ .Ac.CCW},f=e=>e===_3d_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .CullFaceOptions */ .s2.Back?d:e===_3d_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_0__/* .CullFaceOptions */ .s2.Front?u:null,p={zNear:0,zFar:1},g={r:!0,g:!0,b:!0,a:!0};function v(t){return R.intern(t)}function I(t){return N.intern(t)}function S(t){return P.intern(t)}function W(t){return k.intern(t)}function b(t){return F.intern(t)}function T(t){return L.intern(t)}function w(t){return U.intern(t)}function O(t){return K.intern(t)}function A(t){return x.intern(t)}function B(t){return G.intern(t)}class D{constructor(t,e){this._makeKey=t,this._makeRef=e,this._interns=new Map}intern(t){if(!t)return null;const e=this._makeKey(t),i=this._interns;return i.has(e)||i.set(e,this._makeRef(t)),i.get(e)??null}}function C(t){return"["+t.join(",")+"]"}const R=new D(y,(t=>({__tag:"Blending",...t})));function y(t){return t?C([t.srcRgb,t.srcAlpha,t.dstRgb,t.dstAlpha,t.opRgb,t.opAlpha,t.color.r,t.color.g,t.color.b,t.color.a]):null}const N=new D(m,(t=>({__tag:"Culling",...t})));function m(t){return t?C([t.face,t.mode]):null}const P=new D(E,(t=>({__tag:"PolygonOffset",...t})));function E(t){return t?C([t.factor,t.units]):null}const k=new D(z,(t=>({__tag:"DepthTest",...t})));function z(t){return t?C([t.func]):null}const F=new D(H,(t=>({__tag:"StencilTest",...t})));function H(t){return t?C([t.function.func,t.function.ref,t.function.mask,t.operation.fail,t.operation.zFail,t.operation.zPass]):null}const L=new D(M,(t=>({__tag:"DepthWrite",...t})));function M(t){return t?C([t.zNear,t.zFar]):null}const U=new D(j,(t=>({__tag:"ColorWrite",...t})));function j(t){return t?C([t.r,t.g,t.b,t.a]):null}const K=new D(Z,(t=>({__tag:"StencilWrite",...t})));function Z(t){return t?C([t.mask]):null}const x=new D(q,(t=>({__tag:"DrawBuffers",...t})));function q(t){return t?C(t.buffers):null}const G=new D(J,(t=>({blending:v(t.blending),culling:I(t.culling),polygonOffset:S(t.polygonOffset),depthTest:W(t.depthTest),stencilTest:b(t.stencilTest),depthWrite:T(t.depthWrite),colorWrite:w(t.colorWrite),stencilWrite:O(t.stencilWrite),drawBuffers:A(t.drawBuffers)})));function J(t){return t?C([y(t.blending),m(t.culling),E(t.polygonOffset),z(t.depthTest),H(t.stencilTest),M(t.depthWrite),j(t.colorWrite),Z(t.stencilWrite),q(t.drawBuffers)]):null}class Q{constructor(t){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._drawBuffersInvalid=!0,this._stateSetters=t}setPipeline(t){(this._pipelineInvalid||t!==this._pipeline)&&(this._setBlending(t.blending),this._setCulling(t.culling),this._setPolygonOffset(t.polygonOffset),this._setDepthTest(t.depthTest),this._setStencilTest(t.stencilTest),this._setDepthWrite(t.depthWrite),this._setColorWrite(t.colorWrite),this._setStencilWrite(t.stencilWrite),this._setDrawBuffers(t.drawBuffers),this._pipeline=t),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDrawBuffers(){this._drawBuffersInvalid=!0,this._pipelineInvalid=!0}_setBlending(t){this._blending=this._setSubState(t,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(t){this._culling=this._setSubState(t,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(t){this._polygonOffset=this._setSubState(t,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(t){this._depthTest=this._setSubState(t,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(t){this._stencilTest=this._setSubState(t,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(t){this._depthWrite=this._setSubState(t,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(t){this._colorWrite=this._setSubState(t,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(t){this._stencilWrite=this._setSubState(t,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setDrawBuffers(t){this._drawBuffers=this._setSubState(t,this._drawBuffers,this._drawBuffersInvalid,this._stateSetters.setDrawBuffers),this._drawBuffersInvalid=!1}_setSubState(t,e,i,n){return(i||t!==e)&&(n(t),this._pipelineInvalid=!0),t}}


/***/ }),

/***/ 63199:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ o)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const o=1/255.5;


/***/ })

};
;