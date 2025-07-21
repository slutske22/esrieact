"use strict";
exports.id = 9260;
exports.ids = [9260];
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

/***/ 81808:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ b),
/* harmony export */   b: () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60704);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59646);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28152);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1110);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_hud_AlignPixel_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16917);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_hud_HUD_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97085);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_hud_HUDVisibility_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3097);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_MultipassGeometryTest_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46823);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_ScreenSizePerspective_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6916);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float2BindUniform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74767);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(54473);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float4BindUniform_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(45393);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1411);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(35449);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(72196);
/* harmony import */ var _views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(50645);
/* harmony import */ var _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(96028);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function h(i){const h=new _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_16__/* .ShaderBuilder */ .N5,{vertex:b,fragment:z}=h,{terrainDepthTest:x}=i;return b.include(_views_3d_webgl_engine_core_shaderLibrary_hud_AlignPixel_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .AlignPixel */ .K),h.include(_views_3d_webgl_engine_core_shaderLibrary_hud_HUD_glsl_js__WEBPACK_IMPORTED_MODULE_5__/* .HUD */ .Q,i),h.vertex.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .RejectBySlice */ .rA,i),h.attributes.add(_views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_15__/* .VertexAttribute */ .r.UV0,"vec2"),b.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Float4BindUniform_js__WEBPACK_IMPORTED_MODULE_11__/* .Float4BindUniform */ .I("viewport",(e=>e.camera.fullViewport)),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_13__/* .FloatPassUniform */ .m("lineSize",((e,i)=>e.size>0?Math.max(1,e.size)*i.camera.pixelRatio:0)),new _views_3d_webgl_engine_core_shaderModules_Float2BindUniform_js__WEBPACK_IMPORTED_MODULE_9__/* .Float2BindUniform */ .E("pixelToNDC",(i=>(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .hZ)(u,2/i.camera.fullViewport[2],2/i.camera.fullViewport[3]))),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_13__/* .FloatPassUniform */ .m("borderSize",((e,i)=>e.borderColor?i.camera.pixelRatio:0)),new _views_3d_webgl_engine_core_shaderModules_Float2PassUniform_js__WEBPACK_IMPORTED_MODULE_10__/* .Float2PassUniform */ .G("screenOffset",((i,r)=>(0,_core_libs_gl_matrix_2_math_vec2_js__WEBPACK_IMPORTED_MODULE_0__/* .set */ .hZ)(u,i.horizontalScreenOffset*r.camera.pixelRatio,0)))),h.varyings.add("coverageSampling","vec4"),h.varyings.add("lineSizes","vec2"),x&&h.varyings.add("depth","float"),i.occlusionTestEnabled&&h.include(_views_3d_webgl_engine_core_shaderLibrary_hud_HUDVisibility_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .HUDVisibility */ .y),i.hasScreenSizePerspective&&(0,_views_3d_webgl_engine_core_shaderLibrary_util_ScreenSizePerspective_glsl_js__WEBPACK_IMPORTED_MODULE_8__/* .addScreenSizePerspectiveAlignment */ .OH)(b),b.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`
    ProjectHUDAux projectAux;
    vec4 endPoint = projectPositionHUD(projectAux);

    vec3 vpos = projectAux.posModel;
    if (rejectBySlice(vpos)) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    }
    ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__.If)(i.occlusionTestEnabled,(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`if (!testHUDVisibility(endPoint)) {
             gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
             return;
           }`)}

    ${i.hasScreenSizePerspective?(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
               vec2 screenOffsetScaled = applyScreenSizePerspectiveScaleFactorVec2(screenOffset, perspectiveFactor);`:"vec2 screenOffsetScaled = screenOffset;"}
    // Add view dependent polygon offset to get exact same original starting point. This is mostly used to get the
    // correct depth value
    vec3 posView = (view * vec4(position, 1.0)).xyz;
    ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__.If)(x,"depth = posView.z;")}

    applyHUDViewDependentPolygonOffset(centerOffsetAndDistance.w, projectAux.absCosAngle, posView);
    vec4 startPoint = proj * vec4(posView, 1.0);

    // Apply screen offset to both start and end point
    vec2 screenOffsetNorm = screenOffsetScaled * 2.0 / viewport.zw;
    startPoint.xy += screenOffsetNorm * startPoint.w;
    endPoint.xy += screenOffsetNorm * endPoint.w;

    // Align start and end to pixel origin
    vec4 startAligned = alignToPixelOrigin(startPoint, viewport.zw);
    vec4 endAligned = alignToPixelOrigin(endPoint, viewport.zw);
    ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__.If)(i.hudDepth,i.hudDepthAlignStart?"endAligned = vec4(endAligned.xy / endAligned.w * startAligned.w, startAligned.zw);":"startAligned = vec4(startAligned.xy / startAligned.w * endAligned.w, endAligned.zw);")}
    vec4 projectedPosition = mix(startAligned, endAligned, uv0.y);

    // The direction of the line in screen space
    vec2 screenSpaceDirection = normalize(endAligned.xy / endAligned.w - startAligned.xy / startAligned.w);
    vec2 perpendicularScreenSpaceDirection = vec2(screenSpaceDirection.y, -screenSpaceDirection.x);
    ${i.hasScreenSizePerspective?(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`float lineSizeScaled = applyScreenSizePerspectiveScaleFactorFloat(lineSize, perspectiveFactor);
               float borderSizeScaled = applyScreenSizePerspectiveScaleFactorFloat(borderSize, perspectiveFactor);`:(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`float lineSizeScaled = lineSize;
               float borderSizeScaled = borderSize;`}
    float halfPixelSize = lineSizeScaled * 0.5;

    // Compute full ndc offset, adding 1px padding for doing anti-aliasing and the border size
    float padding = 1.0 + borderSizeScaled;
    vec2 ndcOffset = (-halfPixelSize - padding + uv0.x * (lineSizeScaled + padding + padding)) * pixelToNDC;

    // Offset x/y from the center of the line in screen space
    projectedPosition.xy += perpendicularScreenSpaceDirection * ndcOffset * projectedPosition.w;

    // Compute a coverage varying which we can use in the fragment shader to determine
    // how much a pixel is actually covered by the line (i.e. to anti alias the line).
    // This works by computing two coordinates that can be linearly interpolated and then
    // subtracted to find out how far away from the line edge we are.
    float edgeDirection = (uv0.x * 2.0 - 1.0);

    float halfBorderSize = 0.5 * borderSizeScaled;
    float halfPixelSizeAndBorder = halfPixelSize + halfBorderSize;
    float outerEdgeCoverageSampler = edgeDirection * (halfPixelSizeAndBorder + halfBorderSize + 1.0);

    float isOneSided = float(lineSizeScaled < 2.0 && borderSize < 2.0);

    coverageSampling = vec4(
      // Edge coordinate
      outerEdgeCoverageSampler,

      // Border edge coordinate
      outerEdgeCoverageSampler - halfPixelSizeAndBorder * isOneSided,

      // Line offset
      halfPixelSize - 0.5,

      // Border offset
      halfBorderSize - 0.5 + halfPixelSizeAndBorder * (1.0 - isOneSided)
    );

    lineSizes = vec2(lineSizeScaled, borderSizeScaled);
    gl_Position = projectedPosition;`),z.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_12__/* .Float4PassUniform */ .E("uColor",(e=>e.color??_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__/* .ZEROS */ .uY)),new _views_3d_webgl_engine_core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_12__/* .Float4PassUniform */ .E("borderColor",(e=>e.borderColor??_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__/* .ZEROS */ .uY))),x&&(z.include(_views_3d_webgl_engine_core_shaderLibrary_shading_MultipassGeometryTest_glsl_js__WEBPACK_IMPORTED_MODULE_7__/* .multipassGeometryTest */ .H,i),z.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Float2BindUniform_js__WEBPACK_IMPORTED_MODULE_9__/* .Float2BindUniform */ .E("inverseViewport",(e=>e.inverseViewport)))),z.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`
    ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__.If)(x,"if( geometryDepthTest(gl_FragCoord.xy * inverseViewport, depth) ){ discard; }")}

    vec2 coverage = min(1.0 - clamp(abs(coverageSampling.xy) - coverageSampling.zw, 0.0, 1.0), lineSizes);

    float borderAlpha = uColor.a * borderColor.a * coverage.y;
    float colorAlpha = uColor.a * coverage.x;

    float finalAlpha = mix(borderAlpha, 1.0, colorAlpha);
    ${(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__.If)(!i.hudDepth,(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`vec3 finalRgb = mix(borderColor.rgb * borderAlpha, uColor.rgb, colorAlpha);
           fragColor = vec4(finalRgb, finalAlpha);`)}`),h}const u=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)(),b=Object.freeze(Object.defineProperty({__proto__:null,build:h},Symbol.toStringTag,{value:"Module"}));


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

/***/ 50126:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ C),
/* harmony export */   b: () => (/* binding */ P),
/* harmony export */   r: () => (/* binding */ j)
/* harmony export */ });
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55274);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1110);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_ObjectAndLayerIdColor_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33045);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_RibbonVertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56289);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_LineStipple_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6821);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_MarkerSizing_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2119);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_PiUtils_glsl_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(66579);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_TerrainDepthTest_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23233);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89002);
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63592);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float2BindUniform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74767);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float4BindUniform_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45393);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1411);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_FloatBindUniform_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(17983);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(35449);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(72196);
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_Matrix4BindUniform_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(82088);
/* harmony import */ var _views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(50645);
/* harmony import */ var _views_3d_webgl_engine_shaders_LineMarkerTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(58376);
/* harmony import */ var _views_3d_webgl_engine_shaders_OutputColorHighlightOID_glsl_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(19274);
/* harmony import */ var _views_3d_webgl_engine_shaders_RibbonLineTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(16906);
/* harmony import */ var _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(96028);
/* harmony import */ var _webscene_support_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(63199);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const j=1;function P(P){const C=new _views_webgl_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_20__/* .ShaderBuilder */ .N5,{attributes:F,varyings:A,vertex:R,fragment:z}=C,{applyMarkerOffset:T,draped:V,output:W,capType:E,stippleEnabled:O,falloffEnabled:M,roundJoins:N,wireframe:_,innerColorEnabled:I}=P;z.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PiUtils_glsl_js__WEBPACK_IMPORTED_MODULE_21__/* .PiUtils */ .p),C.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_RibbonVertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .RibbonVertexPosition */ .s,P),C.include(_views_3d_webgl_engine_core_shaderLibrary_shading_LineStipple_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .LineStipple */ .q,P),C.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_ObjectAndLayerIdColor_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .ObjectAndLayerIdColor */ .g,P),C.include(_views_3d_webgl_engine_core_shaderLibrary_shading_TerrainDepthTest_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .terrainDepthTest */ .Z,P);const k=T&&!V;k&&(R.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_13__/* .FloatPassUniform */ .m("markerScale",(e=>e.markerScale))),C.include(_views_3d_webgl_engine_core_shaderLibrary_shading_MarkerSizing_glsl_js__WEBPACK_IMPORTED_MODULE_5__/* .MarkerSizing */ .r,{space:_views_3d_webgl_engine_shaders_LineMarkerTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_17__/* .LineMarkerSpace */ .lM.World})),(0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_8__/* .addProjViewLocalOrigin */ .NB)(R,P),R.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Matrix4BindUniform_js__WEBPACK_IMPORTED_MODULE_15__/* .Matrix4BindUniform */ .F("inverseProjectionMatrix",(e=>e.camera.inverseProjectionMatrix)),new _views_3d_webgl_engine_core_shaderModules_Float2BindUniform_js__WEBPACK_IMPORTED_MODULE_9__/* .Float2BindUniform */ .E("nearFar",(e=>e.camera.nearFar)),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_13__/* .FloatPassUniform */ .m("miterLimit",(e=>"miter"!==e.join?0:e.miterLimit)),new _views_3d_webgl_engine_core_shaderModules_Float4BindUniform_js__WEBPACK_IMPORTED_MODULE_10__/* .Float4BindUniform */ .I("viewport",(e=>e.camera.fullViewport))),R.constants.add("LARGE_HALF_FLOAT","float",65500),F.add(_views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_16__/* .VertexAttribute */ .r.POSITION,"vec3"),F.add(_views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_16__/* .VertexAttribute */ .r.PREVIOUSDELTA,"vec4"),F.add(_views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_16__/* .VertexAttribute */ .r.NEXTDELTA,"vec4"),F.add(_views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_16__/* .VertexAttribute */ .r.LINEPARAMETERS,"vec2"),F.add(_views_3d_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_16__/* .VertexAttribute */ .r.U0,"float"),A.add("vColor","vec4"),A.add("vpos","vec3",{invariant:!0}),A.add("vLineDistance","float"),A.add("vLineWidth","float");const U=O;U&&A.add("vLineSizeInv","float");const B=E===_views_3d_webgl_engine_shaders_RibbonLineTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_19__/* .CapType */ .x.ROUND,$=O&&B,H=M||$;H&&A.add("vLineDistanceNorm","float"),B&&(A.add("vSegmentSDF","float"),A.add("vReverseSegmentSDF","float")),R.code.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),R.code.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),R.code.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
float vnp = nearFar[0] * 0.99;
if(pos.z > -nearFar[0]) {
if (!isStartVertex) {
if(prev.z < -nearFar[0]) {
pos = mix(prev, pos, interp(vnp, prev, pos));
next = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
} else {
if(next.z < -nearFar[0]) {
pos = mix(pos, next, interp(vnp, pos, next));
prev = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
}
} else {
if (prev.z > -nearFar[0]) {
prev = mix(pos, prev, interp(vnp, pos, prev));
}
if (next.z > -nearFar[0]) {
next = mix(next, pos, interp(vnp, next, pos));
}
}
forwardViewPosDepth(pos.xyz);
pos = projectAndScale(pos);
next = projectAndScale(next);
prev = projectAndScale(prev);
}`),(0,_views_3d_webgl_engine_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_8__/* .addPixelRatio */ .Nz)(R),R.constants.add("aaWidth","float",O?0:1).main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`
    // unpack values from vertex type
    bool isStartVertex = abs(abs(lineParameters.y)-3.0) == 1.0;
    vec3 prevPosition = position + previousDelta.xyz * previousDelta.w;
    vec3 nextPosition = position + nextDelta.xyz * nextDelta.w;

    float coverage = 1.0;

    // Check for special value of lineParameters.y which is used by the Renderer when graphics are removed before the
    // VBO is recompacted. If this is the case, then we just project outside of clip space.
    if (lineParameters.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(lineParameters.y) < 3.0;
      float lineSize = getSize();

      if (lineSize < 1.0) {
        coverage = lineSize; // convert sub-pixel coverage to alpha
        lineSize = 1.0;
      }
      lineSize += aaWidth;

      float lineWidth = lineSize * pixelRatio;
      vLineWidth = lineWidth;
      ${U?(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`vLineSizeInv = 1.0 / lineSize;`:""}

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);
  `),k&&R.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos, other);
if(!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos) * 0.5;
}`),R.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`);(O||B)&&R.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${B?(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),R.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * lineParameters.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = perpendicular(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
float subdivisionFactor = lineParameters.x;
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),N?R.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = perpendicular(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = perpendicular(endDir);

        float factor = ${O?(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`min(1.0, subdivisionFactor * ${_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H.float((j+2)/(j+1))})`:(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(lineParameters.y) * factor * rotationAngle);
      `):R.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = perpendicular(joinDisplacementDir);`);const J=E!==_views_3d_webgl_engine_shaders_RibbonLineTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_19__/* .CapType */ .x.BUTT;return R.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = perpendicular(joinDisplacementDir);

      ${J?(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),R.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(lineParameters.y) * displacementLen + capDisplacementDir * displacementLen;
    float lineDistNorm = sign(lineParameters.y) * pos.w;

    vLineDistance =  lineWidth * lineDistNorm;
    ${H?(0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),B&&R.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),O&&(V?R.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_FloatBindUniform_js__WEBPACK_IMPORTED_MODULE_12__/* .FloatBindUniform */ .U("worldToScreenRatio",(e=>1/e.screenToPCSRatio))):R.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),R.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),V?R.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = u0 * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):R.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`float startPseudoScreen = mix(u0, u0 - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),R.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_13__/* .FloatPassUniform */ .m("stipplePatternPixelSize",(e=>(0,_views_3d_webgl_engine_core_shaderLibrary_shading_LineStipple_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .computePixelSize */ .h)(e)))),R.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`float patternLength = lineSize * stipplePatternPixelSize;
vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);
if (segmentLengthScreenDouble >= 0.001) {
vec2 stippleDisplacement = pos.xy - segmentOrigin;
float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);
vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
}
vStippleDistanceLimits *= pos.w;
vStippleDistance *= pos.w;
vStippleDistanceLimits = isJoin ?
vStippleDistanceLimits :
isStartVertex ?
vec2(-1e34, vStippleDistanceLimits.y) :
vec2(vStippleDistanceLimits.x, 1e34);`)),R.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${_&&!V?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),C.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .SliceDraw */ .HQ,P),C.include(_views_3d_webgl_engine_shaders_OutputColorHighlightOID_glsl_js__WEBPACK_IMPORTED_MODULE_18__/* .outputColorHighlightOID */ .z,P),z.include(_views_3d_webgl_engine_core_shaderLibrary_util_ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_7__/* .ColorConversion */ .a),z.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`discardBySlice(vpos);
discardByTerrainDepth();`),_?z.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(B&&z.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`
        float sdf = min(vSegmentSDF, vReverseSegmentSDF);
        vec2 fragmentPosition = vec2(
          min(sdf, 0.0),
          vLineDistance
        ) * gl_FragCoord.w;

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < ${_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H.float(_webscene_support_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_22__/* .alphaCutoff */ .Q)}) {
          discard;
        }
      `),$?z.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H.float(_webscene_support_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_22__/* .alphaCutoff */ .Q)}, stippleCoverage);
      `):z.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`float stippleAlpha = getStippleAlpha();`),W!==_views_3d_webgl_engine_core_shaderLibrary_ShaderOutput_js__WEBPACK_IMPORTED_MODULE_0__/* .ShaderOutput */ .V.ObjectAndLayerIdColor&&z.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`discardByStippleAlpha(stippleAlpha, ${_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H.float(_webscene_support_AlphaCutoff_js__WEBPACK_IMPORTED_MODULE_22__/* .alphaCutoff */ .Q)});`),z.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_11__/* .Float4PassUniform */ .E("intrinsicColor",(e=>e.color))),z.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`vec4 color = intrinsicColor * vColor;`),I&&(z.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_Float4PassUniform_js__WEBPACK_IMPORTED_MODULE_11__/* .Float4PassUniform */ .E("innerColor",(e=>e.innerColor??e.color)),new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_13__/* .FloatPassUniform */ .m("innerWidth",((e,i)=>e.innerWidth*i.camera.pixelRatio))),z.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),z.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`vec4 finalColor = blendStipple(color, stippleAlpha);`),M&&(z.uniforms.add(new _views_3d_webgl_engine_core_shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_13__/* .FloatPassUniform */ .m("falloff",(e=>e.falloff))),z.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`)),O||z.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`float featherStartDistance = max(vLineWidth - 2.0, 0.0);
float value = abs(vLineDistance) * gl_FragCoord.w;
float feather = (value - featherStartDistance) / (vLineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`)),z.main.add((0,_views_3d_webgl_engine_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_14__/* .glsl */ .H)`outputColorHighlightOID(finalColor, vpos, finalColor.rgb);`),C}const C=Object.freeze(Object.defineProperty({__proto__:null,build:P,ribbonlineNumRoundJoinSubdivisions:j},Symbol.toStringTag,{value:"Module"}));


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

/***/ 3912:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fA: () => (/* binding */ r),
/* harmony export */   o8: () => (/* binding */ t),
/* harmony export */   vt: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony exports ONES, UNIT_X, UNIT_Y, UNIT_Z, ZEROS, ones, unitX, unitY, unitZ, v, zeros */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function n(){return new Float32Array(3)}function t(n){const t=new Float32Array(3);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function r(n,t,r){const e=new Float32Array(3);return e[0]=n,e[1]=t,e[2]=r,e}function e(){return n()}function o(){return r(1,1,1)}function u(){return r(1,0,0)}function c(){return r(0,1,0)}function i(){return r(0,0,1)}const a=e(),f=o(),l=u(),s=c(),_=i(),y=Object.freeze(Object.defineProperty({__proto__:null,ONES:f,UNIT_X:l,UNIT_Y:s,UNIT_Z:_,ZEROS:a,clone:t,create:n,fromValues:r,ones:o,unitX:u,unitY:c,unitZ:i,zeros:e},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 4486:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ E),
/* harmony export */   w: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85569);
/* harmony import */ var _compilerUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73345);
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39831);
/* harmony import */ var _PooledArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63678);
/* harmony import */ var _chunks_quickselect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45973);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class s{constructor(t=9,i){this._compareMinX=u,this._compareMinY=d,this._toBBox=t=>t,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),i&&("function"==typeof i?this._toBBox=i:this._initFormat(i)),this.clear()}destroy(){this.clear(),Y.prune(),B.prune(),w.prune(),j.prune()}all(t){r(this._data,t)}search(t,i){let n=this._data;const e=this._toBBox;if(M(t,n))for(Y.clear();n;){for(let h=0,s=n.children.length;h<s;h++){const s=n.children[h],a=n.leaf?e(s):s;M(t,a)&&(n.leaf?i(s):g(t,a)?r(s,i):Y.push(s))}n=Y.pop()}}collides(t){let i=this._data;const n=this._toBBox;if(!M(t,i))return!1;for(Y.clear();i;){for(let e=0,h=i.children.length;e<h;e++){const h=i.children[e],s=i.leaf?n(h):h;if(M(t,s)){if(i.leaf||g(t,s))return!0;Y.push(h)}}i=Y.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let i=0,n=t.length;i<n;i++)this.insert(t[i]);return this}let i=this._build(t.slice(),0,t.length-1,0);if(this._data.children.length)if(this._data.height===i.height)this._splitRoot(this._data,i);else{if(this._data.height<i.height){const t=this._data;this._data=i,i=t}this._insert(i,this._data.height-i.height-1,!0)}else this._data=i;return this}insert(t){return t&&this._insert(t,this._data.height-1),this}clear(){return this._data=new S([]),this}remove(i){if(!i)return this;let e,h=this._data,s=null,a=0,r=!1;const o=this._toBBox(i);for(w.clear(),j.clear();h||w.length>0;){if(h||(h=w.pop(),s=w.data[w.length-1],a=j.pop()??0,r=!0),h.leaf&&(e=(0,_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .indexOf */ .qh)(h.children,(0,_compilerUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .toConst */ .zI)(i),h.children.length,h.indexHint),-1!==e))return h.children.splice(e,1),w.push(h),this._condense(w),this;r||h.leaf||!g(h,o)?s?(a++,h=s.children[a],r=!1):h=null:(w.push(h),j.push(a),a=0,s=h,h=h.children[0])}return this}toJSON(){return this._data}fromJSON(t){return this._data=t,this}_build(t,i,n,e){const h=n-i+1;let s=this._maxEntries;if(h<=s){const e=new S(t.slice(i,n+1));return l(e,this._toBBox),e}e||(e=Math.ceil(Math.log(h)/Math.log(s)),s=Math.ceil(h/s**(e-1)));const a=new y([]);a.height=e;const r=Math.ceil(h/s),o=r*Math.ceil(Math.sqrt(s));X(t,i,n,o,this._compareMinX);for(let l=i;l<=n;l+=o){const i=Math.min(l+o-1,n);X(t,l,i,r,this._compareMinY);for(let n=l;n<=i;n+=r){const h=Math.min(n+r-1,i);a.children.push(this._build(t,n,h,e-1))}}return l(a,this._toBBox),a}_insert(t,i,n){const e=this._toBBox,h=n?t:e(t);w.clear();const s=a(h,this._data,i,w);for(s.children.push(t),m(s,h);i>=0&&w.data[i].children.length>this._maxEntries;)this._split(w,i),i--;o(h,w,i)}_split(t,i){const n=t.data[i],e=n.children.length,h=this._minEntries;this._chooseSplitAxis(n,h,e);const s=this._chooseSplitIndex(n,h,e);if(!s)return;const a=n.children.splice(s,n.children.length-s),r=n.leaf?new S(a):new y(a);r.height=n.height,l(n,this._toBBox),l(r,this._toBBox),i?t.data[i-1].children.push(r):this._splitRoot(n,r)}_splitRoot(t,i){this._data=new y([t,i]),this._data.height=t.height+1,l(this._data,this._toBBox)}_chooseSplitIndex(t,i,n){let e,h,s;e=h=1/0;for(let a=i;a<=n-i;a++){const i=c(t,0,a,this._toBBox),r=c(t,a,n,this._toBBox),o=p(i,r),l=f(i)+f(r);o<e?(e=o,s=a,h=l<h?l:h):o===e&&l<h&&(h=l,s=a)}return s}_chooseSplitAxis(t,i,n){const e=t.leaf?this._compareMinX:u,h=t.leaf?this._compareMinY:d;this._allDistMargin(t,i,n,e)<this._allDistMargin(t,i,n,h)&&t.children.sort(e)}_allDistMargin(t,i,n,e){t.children.sort(e);const h=this._toBBox,s=c(t,0,i,h),a=c(t,n-i,n,h);let r=x(s)+x(a);for(let o=i;o<n-i;o++){const i=t.children[o];m(s,t.leaf?h(i):i),r+=x(s)}for(let o=n-i-1;o>=i;o--){const i=t.children[o];m(a,t.leaf?h(i):i),r+=x(a)}return r}_condense(i){for(let n=i.length-1;n>=0;n--){const e=i.data[n];if(0===e.children.length)if(n>0){const h=i.data[n-1],s=h.children;s.splice((0,_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .indexOf */ .qh)(s,e,s.length,h.indexHint),1)}else this.clear();else l(e,this._toBBox)}}_initFormat(t){const i=["return a"," - b",";"];this._compareMinX=new Function("a","b",i.join(t[0])),this._compareMinY=new Function("a","b",i.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function a(t,i,n,e){for(;e.push(i),!0!==i.leaf&&e.length-1!==n;){let n,e=1/0,h=1/0;for(let s=0,a=i.children.length;s<a;s++){const a=i.children[s],r=f(a),o=_(t,a)-r;o<h?(h=o,e=r<e?r:e,n=a):o===h&&r<e&&(e=r,n=a)}i=n||i.children[0]}return i}function r(t,i){let e=t;for(B.clear();e;){if(!0===e.leaf)for(const t of e.children)i((0,_compilerUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .toConst */ .zI)(t));else B.pushArray(e.children);e=B.pop()??null}}function o(t,i,n){for(let e=n;e>=0;e--)m(i.data[e],t)}function l(t,i){c(t,0,t.children.length,i,t)}function c(t,i,n,e,h){h||(h=new S([])),h.minX=1/0,h.minY=1/0,h.maxX=-1/0,h.maxY=-1/0;for(let s,a=i;a<n;a++)s=t.children[a],m(h,t.leaf?e(s):s);return h}function m(t,i){t.minX=Math.min(t.minX,i.minX),t.minY=Math.min(t.minY,i.minY),t.maxX=Math.max(t.maxX,i.maxX),t.maxY=Math.max(t.maxY,i.maxY)}function u(t,i){return t.minX-i.minX}function d(t,i){return t.minY-i.minY}function f(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function x(t){return t.maxX-t.minX+(t.maxY-t.minY)}function _(t,i){return(Math.max(i.maxX,t.maxX)-Math.min(i.minX,t.minX))*(Math.max(i.maxY,t.maxY)-Math.min(i.minY,t.minY))}function p(t,i){const n=Math.max(t.minX,i.minX),e=Math.max(t.minY,i.minY),h=Math.min(t.maxX,i.maxX),s=Math.min(t.maxY,i.maxY);return Math.max(0,h-n)*Math.max(0,s-e)}function g(t,i){return t.minX<=i.minX&&t.minY<=i.minY&&i.maxX<=t.maxX&&i.maxY<=t.maxY}function M(t,i){return i.minX<=t.maxX&&i.minY<=t.maxY&&i.maxX>=t.minX&&i.maxY>=t.minY}function X(t,i,n,e,s){const a=[i,n];for(;a.length;){const i=a.pop(),n=a.pop();if(i-n<=e)continue;const r=n+Math.ceil((i-n)/e/2)*e;(0,_chunks_quickselect_js__WEBPACK_IMPORTED_MODULE_4__.q)(t,r,n,i,s),a.push(n,r,r,i)}}const Y=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,B=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,w=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,j=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A({deallocator:void 0});class E{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class b extends E{constructor(){super(...arguments),this.height=1,this.indexHint=new _arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .PositionHint */ .vW}}class S extends b{constructor(t){super(),this.children=t,this.leaf=!0}}class y extends b{constructor(t){super(),this.children=t,this.leaf=!1}}


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

/***/ 97557:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24793);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var c;let i=class extends(_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.ClonableMixin(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)){static{c=this}constructor(e){super(e),this.type="georeferenced",this.origin=null}static{this.absolute=new c}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__/* .enumeration */ .e)({georeferenced:"georeferenced"},{readOnly:!0})],i.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[Number],nonNullable:!1,json:{write:!0}})],i.prototype,"origin",void 0),i=c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.geometry.support.MeshGeoreferencedVertexSpace")],i);


/***/ }),

/***/ 99218:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24793);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63863);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(58359);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let i=class extends(_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.ClonableMixin(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)){constructor(o){super(o),this.type="local",this.origin=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__/* .create */ .vt)()}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__/* .enumeration */ .e)({local:"local"},{readOnly:!0})],i.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],i.prototype,"origin",void 0),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.geometry.support.MeshLocalVertexSpace")],i);


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

/***/ 6214:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $e: () => (/* binding */ y),
/* harmony export */   j1: () => (/* binding */ p),
/* harmony export */   mO: () => (/* binding */ g),
/* harmony export */   vt: () => (/* binding */ a)
/* harmony export */ });
/* unused harmony exports copy, fromLineSegmentAndDirection, fromValues, getAt, wrap */
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92114);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24121);
/* harmony import */ var _ray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10151);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function a(r){return r?{ray:(0,_ray_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)(r.ray),c0:r.c0,c1:r.c1}:{ray:(0,_ray_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)(),c0:0,c1:Number.MAX_VALUE}}function i(r,c,n){const t=A.get();return t.ray=r,t.c0=c,t.c1=n,t}function f(r,c=a()){return s(r.ray,r.c0,r.c1,c)}function s(r,c,n,t=a()){return o(r,t.ray),t.c0=c,t.c1=n,t}function y(r,c=a()){return (0,_ray_js__WEBPACK_IMPORTED_MODULE_1__/* .copy */ .C)(r,c.ray),c.c0=0,c.c1=Number.MAX_VALUE,c}function m(r,n,t=a()){const o=c(r.vector);return u(r.origin,n,t.ray),t.c0=0,t.c1=o,t}function p(r,c){return j(r,r.c0,c)}function g(r,c){return j(r,r.c1,c)}function j(r,c,o){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.f)(o,r.ray.origin,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.g)(o,r.ray.direction,c))}const A=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_2__/* .ObjectStack */ .I((()=>a()));


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

/***/ 94982:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ N),
/* harmony export */   FB: () => (/* binding */ j),
/* harmony export */   ig: () => (/* binding */ m),
/* harmony export */   m7: () => (/* binding */ s),
/* harmony export */   ui: () => (/* binding */ L),
/* harmony export */   vt: () => (/* binding */ H)
/* harmony export */ });
/* unused harmony exports PointIndex, computePlanes, createPoints, intersectsLineSegment, intersectsPoint, intersectsRay, numPlanes, numPoints, planePointIndices */
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92114);
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21742);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24121);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58359);
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2662);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28152);
/* harmony import */ var _clipRay_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6214);
/* harmony import */ var _plane_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38774);
/* harmony import */ var _vectorStacks_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45573);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function H(T){return T?[(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(T[0]),(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(T[1]),(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(T[2]),(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(T[3]),(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(T[4]),(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(T[5])]:[(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)()]}function I(){return[(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)(),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)(),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)(),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)(),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)(),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)(),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)(),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)()]}function N(T,_){for(let O=0;O<b;O++)(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .copy */ .C)(T[O],_[O]);return T}function L(T,t,A,E=y){const F=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__/* .multiply */ .lw)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_7__/* .sm4d */ .Rc.get(),t,T);(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__/* .invert */ .B8)(F,F);for(let _=0;_<h;++_){const T=(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_3__.t)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_7__/* .sv4d */ .Km.get(),k[_],F);(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.i)(E[_],T[0]/T[3],T[1]/T[3],T[2]/T[3])}P(A,E)}function P(T,_){(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .fromPoints */ .Cr)(_[g.FAR_BOTTOM_LEFT],_[g.NEAR_BOTTOM_LEFT],_[g.NEAR_TOP_LEFT],T[j.LEFT]),(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .fromPoints */ .Cr)(_[g.NEAR_BOTTOM_RIGHT],_[g.FAR_BOTTOM_RIGHT],_[g.FAR_TOP_RIGHT],T[j.RIGHT]),(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .fromPoints */ .Cr)(_[g.FAR_BOTTOM_LEFT],_[g.FAR_BOTTOM_RIGHT],_[g.NEAR_BOTTOM_RIGHT],T[j.BOTTOM]),(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .fromPoints */ .Cr)(_[g.NEAR_TOP_LEFT],_[g.NEAR_TOP_RIGHT],_[g.FAR_TOP_RIGHT],T[j.TOP]),(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .fromPoints */ .Cr)(_[g.NEAR_BOTTOM_LEFT],_[g.NEAR_BOTTOM_RIGHT],_[g.NEAR_TOP_RIGHT],T[j.NEAR]),(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .fromPoints */ .Cr)(_[g.FAR_BOTTOM_RIGHT],_[g.FAR_BOTTOM_LEFT],_[g.FAR_TOP_LEFT],T[j.FAR])}function s(T,_){for(let O=0;O<b;O++){const R=T[O];if(R[0]*_[0]+R[1]*_[1]+R[2]*_[2]+R[3]>=_[3])return!1}return!0}function u(T,_){return p(T,E(_,x.get()))}function m(T,_){for(let O=0;O<b;O++){const R=T[O];if(!(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .clipInfinite */ .b6)(R,_))return!1}return!0}function a(T,_,O){return p(T,F(_,O,x.get()))}function l(T,_){for(let O=0;O<b;O++){if(c(T[O],_)>0)return!1}return!0}function p(T,_){for(let O=0;O<b;O++)if(!f(T[O],_))return!1;return!0}var j,g;!function(T){T[T.LEFT=0]="LEFT",T[T.RIGHT=1]="RIGHT",T[T.BOTTOM=2]="BOTTOM",T[T.TOP=3]="TOP",T[T.NEAR=4]="NEAR",T[T.FAR=5]="FAR"}(j||(j={})),function(T){T[T.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",T[T.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",T[T.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",T[T.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",T[T.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",T[T.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",T[T.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",T[T.FAR_TOP_LEFT=7]="FAR_TOP_LEFT"}(g||(g={}));const v={bottom:[g.FAR_BOTTOM_RIGHT,g.NEAR_BOTTOM_RIGHT,g.NEAR_BOTTOM_LEFT,g.FAR_BOTTOM_LEFT],near:[g.NEAR_BOTTOM_LEFT,g.NEAR_BOTTOM_RIGHT,g.NEAR_TOP_RIGHT,g.NEAR_TOP_LEFT],far:[g.FAR_BOTTOM_RIGHT,g.FAR_BOTTOM_LEFT,g.FAR_TOP_LEFT,g.FAR_TOP_RIGHT],right:[g.NEAR_BOTTOM_RIGHT,g.FAR_BOTTOM_RIGHT,g.FAR_TOP_RIGHT,g.NEAR_TOP_RIGHT],left:[g.FAR_BOTTOM_LEFT,g.NEAR_BOTTOM_LEFT,g.NEAR_TOP_LEFT,g.FAR_TOP_LEFT],top:[g.FAR_TOP_LEFT,g.NEAR_TOP_LEFT,g.NEAR_TOP_RIGHT,g.FAR_TOP_RIGHT]},b=6,h=8,k=[(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__/* .fromValues */ .fA)(-1,-1,-1,1),(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__/* .fromValues */ .fA)(1,-1,-1,1),(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__/* .fromValues */ .fA)(1,1,-1,1),(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__/* .fromValues */ .fA)(-1,1,-1,1),(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__/* .fromValues */ .fA)(-1,-1,1,1),(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__/* .fromValues */ .fA)(1,-1,1,1),(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__/* .fromValues */ .fA)(1,1,1,1),(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__/* .fromValues */ .fA)(-1,1,1,1)],x=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_8__/* .ObjectStack */ .I(_clipRay_js__WEBPACK_IMPORTED_MODULE_5__/* .create */ .vt),y=I();


/***/ }),

/***/ 1114:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CK: () => (/* binding */ c),
/* harmony export */   E9: () => (/* binding */ o),
/* harmony export */   Hq: () => (/* binding */ t),
/* harmony export */   MW: () => (/* binding */ u),
/* harmony export */   TE: () => (/* binding */ l),
/* harmony export */   yJ: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24121);
/* harmony import */ var _Point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97066);
/* harmony import */ var _MeshGeoreferencedVertexSpace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97557);
/* harmony import */ var _MeshLocalVertexSpace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99218);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function o(e){return null==e.origin}function t(e){return null!=e.origin}function c(e){return t(e.vertexSpace)}function u(e,r){if(!t(e))return null;const[i,o,c]=e.origin;return new _Point_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A({x:i,y:o,z:c,spatialReference:r})}function l(e,n){const{x:o,y:t,z:c,spatialReference:u}=e,l=[o,t,c??0];return"local"===(n?.vertexSpace??f(u))?new _MeshLocalVertexSpace_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A({origin:l}):new _MeshGeoreferencedVertexSpace_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A({origin:l})}function f(e){return e.isGeographic||e.isWebMercator?"local":"georeferenced"}function a(n,r){return n.type===r.type&&(n.origin===r.origin||null!=n.origin&&null!=r.origin&&(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.q)(n.origin,r.origin))}


/***/ }),

/***/ 41215:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32597);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const e={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(e,r)=>new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_0__/* .OptimizedFeature */ .Om(r,e.attributes,null,e.objectId),getGeometry:t=>t.geometry,getCentroid:(t,e)=>t.ensureCentroid(e)};


/***/ }),

/***/ 9723:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CI: () => (/* binding */ a),
/* harmony export */   fk: () => (/* binding */ i)
/* harmony export */ });
/* unused harmony export equals */
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92504);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87926);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function t(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++){const r=e[t],a=n[t];if(r.length!==a.length)return!1;for(let e=0;e<r.length;e++)if(r[e]!==a[e])return!1}return!0}function r(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(!t(e[r],n[r]))return!1;return!0}function a(e,t){return e===t||null!=e&&null!=t&&(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .equals */ .aI)(e.spatialReference,t.spatialReference)&&e.x===t.x&&e.y===t.y&&e.z===t.z&&e.m===t.m}function i(t,r,a){return t===r||null!=t&&null!=r&&(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .equals */ .aI)(t.spatialReference,r.spatialReference)&&(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .floatEqualAbsolute */ .Sp)(t.x,r.x,a)&&(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .floatEqualAbsolute */ .Sp)(t.y,r.y,a)&&(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .floatEqualAbsolute */ .Sp)(t.z??0,r.z??0,a)&&(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .floatEqualAbsolute */ .Sp)(t.m??0,r.m??0,a)}function u(e,t){return e.hasZ===t.hasZ&&e.hasM===t.hasM&&(!!n(e.spatialReference,t.spatialReference)&&r(e.paths,t.paths))}function l(e,t){return e.hasZ===t.hasZ&&e.hasM===t.hasM&&(!!n(e.spatialReference,t.spatialReference)&&r(e.rings,t.rings))}function s(e,r){return e.hasZ===r.hasZ&&e.hasM===r.hasM&&(!!n(e.spatialReference,r.spatialReference)&&t(e.points,r.points))}function f(e,t){return e.hasZ===t.hasZ&&e.hasM===t.hasM&&(!!n(e.spatialReference,t.spatialReference)&&(e.xmin===t.xmin&&e.ymin===t.ymin&&e.zmin===t.zmin&&e.xmax===t.xmax&&e.ymax===t.ymax&&e.zmax===t.zmax))}function c(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(e.type!==n.type)return!1;switch(e.type){case"point":return a(e,n);case"extent":return f(e,n);case"polyline":return u(e,n);case"polygon":return l(e,n);case"multipoint":return s(e,n);case"mesh":return!1;default:return}}function o(e,n){if(e===n)return!0;if(!e||!n)return!1;const t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(const a of t)if(e[a]!==n[a])return!1;return!0}function h(e,n){return e===n||null!=e&&null!=n&&e.objectId===n.objectId&&(!!c(e.geometry,n.geometry)&&!!o(e.attributes,n.attributes))}


/***/ }),

/***/ 80009:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function t(t){return"point"===t.type}


/***/ }),

/***/ 28413:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HP: () => (/* binding */ d),
/* harmony export */   N3: () => (/* binding */ b),
/* harmony export */   RW: () => (/* binding */ R),
/* harmony export */   Uz: () => (/* binding */ w),
/* harmony export */   gR: () => (/* binding */ F),
/* harmony export */   iQ: () => (/* binding */ z),
/* harmony export */   jy: () => (/* binding */ x),
/* harmony export */   w9: () => (/* binding */ v)
/* harmony export */ });
/* unused harmony exports estimateSize, fromFeatureSetJSON, fromJSONGeometry, hasVertices, numVertices */
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _core_memoryEstimations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4754);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78983);
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4675);
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80510);
/* harmony import */ var _geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20698);
/* harmony import */ var _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12433);
/* harmony import */ var _support_Field_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24738);
/* harmony import */ var _views_2d_layers_graphics_densificationConstants_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(31328);
/* harmony import */ var _dehydratedFeatureComparison_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9723);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class d{constructor(e,t,s){this.uid=e,this.geometry=t,this.attributes=s,this.visible=!0,this.objectId=null,this.centroid=null}}function b(e){return null!=e.geometry}class x{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}}function j(e,t){const s=f.fromJSON(e.geometryType),n=i.fromJSON(e.spatialReference),r=e.transform,o=e.objectIdFieldName,a=t?.maxStringAttributeLength,l=t?.maxStringAttributeFields;let u;const g=e.features.map((t=>{const i=N(t,s,n,e.objectIdFieldName),f=i.geometry;if(w(i.attributes,l,a,(e=>{u??=[];const t=R(i,o);null!=t&&u.push({objectId:t,attribute:e})})),null!=f&&r)switch(f.type){case"point":i.geometry=h(r,f,f);break;case"multipoint":i.geometry=m(r,f,f);break;case"polygon":i.geometry=p(r,f,f);break;case"polyline":i.geometry=c(r,f,f);break;case"extent":case"mesh":i.geometry=f}return i}));return{geometryType:s,features:g,spatialReference:n,fields:e.fields?.map((e=>y.fromJSON(e)))??[],objectIdFieldName:e.objectIdFieldName,globalIdFieldName:e.globalIdFieldName,geohashFieldName:e.geohashFieldName,geometryProperties:e.geometryProperties,hasZ:e.hasZ,hasM:e.hasM,exceededTransferLimit:e.exceededTransferLimit,transform:null,missingAttributes:u}}function N(e,t,s,n){return{uid:r(),objectId:n&&e.attributes?e.attributes[n]:null,attributes:e.attributes,geometry:Z(e.geometry,t,s),visible:!0}}function Z(e,t,s){if(null==e)return null;switch(t){case"point":{const t=e;return{x:t.x,y:t.y,z:t.z,m:t.m,hasZ:null!=t.z,hasM:null!=t.m,type:"point",spatialReference:s}}case"polyline":{const t=e;return{paths:t.paths,hasZ:!!t.hasZ,hasM:!!t.hasM,type:"polyline",spatialReference:s}}case"polygon":{const t=e;return{rings:t.rings,hasZ:!!t.hasZ,hasM:!!t.hasM,type:"polygon",spatialReference:s}}case"multipoint":{const t=e;return{points:t.points,hasZ:!!t.hasZ,hasM:!!t.hasM,type:"multipoint",spatialReference:s}}}}function F(n){if(null==n)return 0;switch(n.type){case"point":return _core_memoryEstimations_js__WEBPACK_IMPORTED_MODULE_1__/* .baseObjectMemory */ .qK+10+8+24;case"polyline":case"polygon":{let t=0;const r=2+(n.hasZ?1:0)+(n.hasM?1:0),i="polyline"===n.type?n.paths:n.rings,o="polyline"===n.type?n.curvePaths:n.curveRings;if(o?.length){const e=3*(0,_views_2d_layers_graphics_densificationConstants_js__WEBPACK_IMPORTED_MODULE_8__/* .getApproximateMaxDensificationSegments */ .B1)()*128;t=8*e*r+128*e+32*(i.length+1)}else t=(0,_core_memoryEstimations_js__WEBPACK_IMPORTED_MODULE_1__/* .estimateNestedObjectMemory */ .Qh)(i);return _core_memoryEstimations_js__WEBPACK_IMPORTED_MODULE_1__/* .baseObjectMemory */ .qK+64+t+34}case"multipoint":{const t=(0,_core_memoryEstimations_js__WEBPACK_IMPORTED_MODULE_1__/* .estimateNestedObjectMemory */ .Qh)(n.points);return _core_memoryEstimations_js__WEBPACK_IMPORTED_MODULE_1__/* .baseObjectMemory */ .qK+t+64+34+32}case"extent":return _core_memoryEstimations_js__WEBPACK_IMPORTED_MODULE_1__/* .baseObjectMemory */ .qK+10+64+34;case"mesh":{const s=n.vertexAttributes;return _core_memoryEstimations_js__WEBPACK_IMPORTED_MODULE_1__/* .baseObjectMemory */ .qK+(0,_core_memoryEstimations_js__WEBPACK_IMPORTED_MODULE_1__/* .estimateNumberArrayMemory */ .Qf)(s.position,s.normal,s.uv,s.tangent)}default:return _core_memoryEstimations_js__WEBPACK_IMPORTED_MODULE_1__/* .baseObjectMemory */ .qK}}function I(e){let t=32;return t+=n(e.attributes),t+=3,t+=8+F(e.geometry),t}function k(e){if(null==e)return 0;switch(e.type){case"point":return 1;case"polyline":{let t=0;for(const s of e.paths)t+=s.length;return t}case"polygon":{let t=0;for(const s of e.rings)t+=s.length;return t}case"multipoint":return e.points.length;case"extent":return 2;case"mesh":{const t=e.vertexAttributes&&e.vertexAttributes.position;return t?t.length/3:0}default:return}}function M(e){if(null==e)return!1;switch(e.type){case"extent":case"point":return!0;case"polyline":for(const t of e.paths)if(t.length>0)return!0;return!1;case"polygon":for(const t of e.rings)if(t.length>0)return!0;return!1;case"multipoint":return e.points.length>0;case"mesh":return!e.loaded||e.vertexAttributes.position.length>0}}function v(e,t){switch((0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_3__/* .empty */ .Ie)(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[3]=e.x,t[1]=t[4]=e.y,e.hasZ&&(t[2]=t[5]=e.z);break;case"polyline":for(let s=0;s<e.paths.length;s++)(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_3__/* .expandWithNestedArray */ .Jf)(t,e.paths[s],!!e.hasZ);break;case"polygon":for(let s=0;s<e.rings.length;s++)(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_3__/* .expandWithNestedArray */ .Jf)(t,e.rings[s],!!e.hasZ);break;case"multipoint":(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_3__/* .expandWithNestedArray */ .Jf)(t,e.points,!!e.hasZ);break;case"extent":t[0]=e.xmin,t[1]=e.ymin,t[3]=e.xmax,t[4]=e.ymax,null!=e.zmin&&(t[2]=e.zmin),null!=e.zmax&&(t[5]=e.zmax)}return t}function z(e,t){switch((0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__/* .empty */ .Ie)(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[2]=e.x,t[1]=t[3]=e.y;break;case"polyline":for(let s=0;s<e.paths.length;s++)(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__/* .expandWithNestedArray */ .Jf)(t,e.paths[s]);break;case"polygon":for(let s=0;s<e.rings.length;s++)(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__/* .expandWithNestedArray */ .Jf)(t,e.rings[s]);break;case"multipoint":(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__/* .expandWithNestedArray */ .Jf)(t,e.points);break;case"extent":t[0]=e.xmin,t[1]=e.ymin,t[2]=e.xmax,t[3]=e.ymax}}function R(e,t){return null!=e.objectId?e.objectId:e.attributes&&t?e.attributes[t]:null}function w(e,t,s,n){if(t?.size&&null!=s&&e)for(const r in e){if(!t.has(r))continue;const i=e[r];"string"==typeof i&&i.length>s&&(n(r),e[r]="")}}


/***/ }),

/***/ 85174:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EL: () => (/* binding */ x),
/* harmony export */   RS: () => (/* binding */ k),
/* harmony export */   gr: () => (/* binding */ o),
/* harmony export */   wP: () => (/* binding */ c),
/* harmony export */   wZ: () => (/* binding */ u)
/* harmony export */ });
/* unused harmony exports isHydratedGraphic, isHydratedPoint */
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25707);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39831);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19251);
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86942);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78983);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1171);
/* harmony import */ var _dehydratedPoint_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29394);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function o(e){return"declaredClass"in e}function m(e){return"declaredClass"in e}function l(e){return"declaredClass"in e}function c(n,r){return n?l(n)?n:new _Graphic_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({layer:r,sourceLayer:r,visible:n.visible,symbol:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(n.symbol),attributes:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(n.attributes),geometry:u(n.geometry)}):null}function u(e){return null==e?null:o(e)?e:(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .fromJSON */ .rS)(f(e))}function f(e){const{wkid:t,wkt:n,wkt2:r,latestWkid:a}=e.spatialReference,s={wkid:t,wkt:n,wkt2:r,latestWkid:a};switch(e.type){case"point":{const{x:t,y:n,z:r,m:a}=e;return{x:t,y:n,z:r,m:a,spatialReference:s}}case"polygon":{const{rings:t,hasZ:n,hasM:r}=e;return{rings:p(t),hasZ:n,hasM:r,spatialReference:s}}case"polyline":{const{paths:t,hasZ:n,hasM:r}=e;return{paths:p(t),hasZ:n,hasM:r,spatialReference:s}}case"extent":{const{xmin:t,xmax:n,ymin:r,ymax:a,zmin:i,zmax:o,mmin:m,mmax:l,hasZ:c,hasM:u}=e;return{xmin:t,xmax:n,ymin:r,ymax:a,zmin:i,zmax:o,mmin:m,mmax:l,hasZ:c,hasM:u,spatialReference:s}}case"multipoint":{const{points:t,hasZ:n,hasM:r}=e;return{points:d(t)?h(t):t,hasZ:n,hasM:r,spatialReference:s}}default:return}}function p(e){return y(e)?e.map((e=>h(e))):e}function h(e){return e.map((e=>Array.from(e)))}function y(e){for(const t of e)if(0!==t.length)return d(t);return!1}function d(e){return e.length>0&&((0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_3__/* .isFloat32Array */ .vZ)(e[0])||(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_3__/* .isFloat64Array */ .aI)(e[0]))}function x(e,t){if(!e)return null;let n;if(m(e)){if(null==t)return e.clone();if(m(t))return t.copy(e)}return null!=t?(n=t,n.x=e.x,n.y=e.y,n.spatialReference=e.spatialReference,e.hasZ?(n.z=e.z,n.hasZ=e.hasZ):(n.z=void 0,n.hasZ=!1),e.hasM?(n.m=e.m,n.hasM=!0):(n.m=void 0,n.hasM=!1)):(n=(0,_dehydratedPoint_js__WEBPACK_IMPORTED_MODULE_6__/* .makeDehydratedPoint */ .T)(e.x,e.y,e.z,e.spatialReference),e.hasM&&(n.m=e.m,n.hasM=!0)),n}function k(e){const{wkid:t,wkt:n,wkt2:r,latestWkid:s}=e,i={wkid:t,wkt:n,wkt2:r,latestWkid:s};return _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.fromJSON(i)}


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

/***/ 8680:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ l)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class l{constructor(l,t){this.renderer=l,this.symbol=t,this.color=null,this.size=null,this.opacity=null,this.outlineSize=null,this.heading=null,this.tilt=null,this.roll=null}}


/***/ }),

/***/ 18451:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LO: () => (/* binding */ n),
/* harmony export */   kg: () => (/* binding */ a),
/* harmony export */   or: () => (/* binding */ s),
/* harmony export */   vl: () => (/* binding */ r)
/* harmony export */ });
/* unused harmony export getSymbolAsync */
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96220);
/* harmony import */ var _RenderingInfo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8680);
/* harmony import */ var _visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28479);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function i(e,t){if(null!=e.symbol)return e.symbol;const o=t?.renderer;return null!=o&&"dot-density"!==o.type?o.getSymbol(e,t):null}function r(e,r){const l=i(e,r);if(null==l)return null;const n=r?.renderer,a=new _RenderingInfo_js__WEBPACK_IMPORTED_MODULE_2__/* .RenderingInfo */ .$(n,l);if(null==n||!("visualVariables"in n)||!n.visualVariables)return a;const s=(0,_visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_1__.getVisualVariableValues)(n,e,r)??[],u=["proportional","proportional","proportional"];for(const{variable:t,value:o}of s)if(null!=o||"size"===t.type&&t.useSymbolValue)switch(t.type){case"color":a.color=o?.toRgba();break;case"size":if("outline"===t.target)a.outlineSize=o;else{const e=t.axis,i=t.useSymbolValue?"symbol-value":o??"proportional";switch(e){case"width":u[0]=i;break;case"depth":u[1]=i;break;case"height":u[2]=i;break;case"width-and-depth":u[0]=u[1]=i;break;default:u[0]=u[1]=u[2]=i}}break;case"opacity":a.opacity=o;break;case"rotation":switch(t.axis){case"tilt":a.tilt=o;break;case"roll":a.roll=o;break;default:a.heading=o}}return"proportional"===u[0]&&"proportional"===u[1]&&"proportional"===u[2]||(a.size=u),a}async function l(e,t){return null!=e.symbol?e.symbol:t?.renderer?.getSymbolAsync(e,t)??null}async function n(i,r){const n=await l(i,r);if(!n)return null;const a=r?.renderer,s=new _RenderingInfo_js__WEBPACK_IMPORTED_MODULE_2__/* .RenderingInfo */ .$(a,n);if(!a||!("visualVariables"in a)||!a.visualVariables)return s;const u=(0,_visualVariables_support_visualVariableUtils_js__WEBPACK_IMPORTED_MODULE_1__.getVisualVariableValues)(a,i,r)??[],p=["proportional","proportional","proportional"];for(const{variable:t,value:o}of u)if("color"===t.type)s.color=_Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.toUnitRGBA(o);else if("size"===t.type)if("outline"===t.target)s.outlineSize=o;else{const e=t.axis,i=t.useSymbolValue?"symbol-value":o;"width"===e?p[0]=i:"depth"===e?p[1]=i:"height"===e?p[2]=i:p[0]=p[1]="width-and-depth"===e?i:p[2]=i}else"opacity"===t.type?s.opacity=o:"rotation"===t.type&&"tilt"===t.axis?s.tilt=o:"rotation"===t.type&&"roll"===t.axis?s.roll=o:"rotation"===t.type&&(s.heading=o);return(isFinite(p[0])||isFinite(p[1])||isFinite(p[2]))&&(s.size=p),s}function a(e,t=0){const o=e[t];return"number"==typeof o&&isFinite(o)?o:null}function s(e){for(let t=0;t<3;t++){const o=e[t];if("number"==typeof o)return isFinite(o)?o:0}return 0}


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

/***/ 31328:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B1: () => (/* binding */ e),
/* harmony export */   VS: () => (/* binding */ i),
/* harmony export */   an: () => (/* binding */ n),
/* harmony export */   iW: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function n(){return (0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("curve-densification-coarse-segments")}function e(){return (0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("curve-densification-max-segments")}function i(){return (0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("curve-densification-min-segments")}function t(){return (0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("curve-densification-pixel-deviation")}


/***/ }),

/***/ 79260:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ GraphicsLayerView3D_b)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var core_Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(6267);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(85251);
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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/handleUtils.js
var handleUtils = __webpack_require__(20464);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/heightModelInfoUtils.js
var heightModelInfoUtils = __webpack_require__(1995);
;// ../node_modules/@arcgis/core/views/3d/layers/LayerView3D.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const l=l=>{let n=class extends l{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(){super.postscript(),(0,heightModelInfoUtils/* supportsHeightModelInfo */.jI)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const o=new AbortController,r=o.signal;this.addHandles((0,handleUtils/* makeHandle */.hA)((()=>o.abort()))),await (0,reactiveUtils/* whenOnce */.C_)((()=>this.view.defaultsFromMap?.heightModelInfoReady),r),(0,promiseUtils/* throwIfAborted */.Te)(r);const i=(0,heightModelInfoUtils/* rejectLayerError */.Hu)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}};return (0,tslib_es6._)([(0,property/* property */.MZ)()],n.prototype,"view",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],n.prototype,"slicePlaneEnabled",void 0),n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.3d.layers.LayerView3D")],n),n};

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(58359);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projection/projectPointToVector.js
var projectPointToVector = __webpack_require__(42609);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/dehydratedPoint.js
var dehydratedPoint = __webpack_require__(29394);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/elevationInfoUtils.js
var elevationInfoUtils = __webpack_require__(27451);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/graphics/elevationAlignmentUtils.js
var elevationAlignmentUtils = __webpack_require__(27716);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/graphics/ElevationContext.js
var ElevationContext = __webpack_require__(58343);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/graphics/featureExpressionInfoUtils.js
var featureExpressionInfoUtils = __webpack_require__(9104);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/elevationAlignPointsInFeatures.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function elevationAlignPointsInFeatures_l(l,m,d,j,u){const{elevationProvider:v,renderCoordsHelper:g}=l,{elevationInfo:I}=m,{pointsInFeatures:x,spatialReference:y}=j,h=SpatialReference/* default */.A.fromJSON(y),w=(0,featureExpressionInfoUtils/* extractExpressionInfo */.MF)(I,!0),R=await (0,featureExpressionInfoUtils/* createContext */.q6)(w,h,u);(0,promiseUtils/* throwIfAborted */.Te)(u);const S=[],b=new Set,z=new Set,E=new ElevationContext/* ElevationContext */.F,P=(0,dehydratedPoint/* makeDehydratedPoint */.T)(0,0,0,SpatialReference/* default */.A.WGS84),U=new elevationAlignmentUtils/* SampleElevationInfo */.Uk,C=(0,vec3f64/* create */.vt)();P.spatialReference=h;const F=l.elevationProvider.spatialReference??l.spatialReference;for(const{objectId:e,points:o}of x){const t=d(e);if(null==t){for(const e of o)S.push(e.z??0);b.add(e);continue}t.isDraped&&z.add(e);const i=t.graphic.geometry;E.setFromElevationInfo((0,elevationInfoUtils/* getGeometryEffectiveElevationInfo */.ze)(i,I)),E.updateFeatureExpressionInfoContext(R,t.graphic,m);for(const{x:e,y:n,z:a}of o)P.x=e,P.y=n,P.z=a??0,await (0,projectPointToVector/* projectPointToVectorAsync */.W)(P,C,F,0,{signal:u}),(0,elevationAlignmentUtils/* evaluateElevationInfoAtPoint */.sE)(C,v,E,g,U),S.push(U.z)}return{elevations:S,drapedObjectIds:z,failedObjectIds:b}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/Graphic.js
var Graphic = __webpack_require__(25707);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(52495);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/diffUtils.js
var diffUtils = __webpack_require__(64442);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/support/UpdatingHandles.js
var UpdatingHandles = __webpack_require__(4238);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/Layer.js + 1 modules
var Layer = __webpack_require__(68833);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/hydratedFeatures.js
var hydratedFeatures = __webpack_require__(85174);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/renderingInfoUtils.js
var renderingInfoUtils = __webpack_require__(18451);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/Query.js
var Query = __webpack_require__(14474);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/interfaces.js
var interfaces = __webpack_require__(56867);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/graphics/constants.js
var constants = __webpack_require__(84680);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/MapUtils.js
var MapUtils = __webpack_require__(82256);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/MemCache.js
var MemCache = __webpack_require__(40210);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/PooledArray.js + 1 modules
var PooledArray = __webpack_require__(63678);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/scheduling.js
var scheduling = __webpack_require__(61449);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(24121);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(84698);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Point.js
var Point = __webpack_require__(97066);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projectionUtils.js + 2 modules
var projectionUtils = __webpack_require__(68490);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projection/projectBuffer.js
var projectBuffer = __webpack_require__(84119);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projection/projectVectorToVector.js
var projectVectorToVector = __webpack_require__(42120);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projection/projectXYZToVector.js
var projectXYZToVector = __webpack_require__(47092);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/aaBoundingBox.js
var aaBoundingBox = __webpack_require__(4675);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/aaBoundingRect.js
var aaBoundingRect = __webpack_require__(80510);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var spatialReferenceUtils = __webpack_require__(87926);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/dehydratedFeatures.js
var dehydratedFeatures = __webpack_require__(28413);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/PromiseQueue.js
var PromiseQueue = __webpack_require__(80352);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/UniqueValueRenderer.js + 3 modules
var UniqueValueRenderer = __webpack_require__(2692);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/rendererConversion.js
var rendererConversion = __webpack_require__(72973);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/RenderingInfo.js
var RenderingInfo = __webpack_require__(8680);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/basemapUtils.js
var basemapUtils = __webpack_require__(30405);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/loadArcade.js
var loadArcade = __webpack_require__(35387);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/LabelSymbol3D.js
var LabelSymbol3D = __webpack_require__(27372);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/TextSymbol.js
var TextSymbol = __webpack_require__(42602);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/WebStyleSymbol.js
var WebStyleSymbol = __webpack_require__(75162);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/defaults3D.js
var defaults3D = __webpack_require__(1676);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/symbolConversion.js
var symbolConversion = __webpack_require__(79689);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/graphics/defaultSymbolComplexity.js
var defaultSymbolComplexity = __webpack_require__(1088);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/DisplayFeatureLimit.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class DisplayFeatureLimit_e{constructor(e,m,t){this.maximumTotalNumberOfVertices=e,this.maximumNumberOfFeatures=m,this.averageSymbolComplexity=t}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Multipoint.js
var Multipoint = __webpack_require__(90067);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/support/Scheduler.js
var Scheduler = __webpack_require__(22167);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/ElevationQuery.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class ElevationQuery_l{constructor(e,t){this.spatialReference=e,this._view=t}getElevation(e,t,r){return this._view.elevationProvider.getElevation(e,t,0,this.spatialReference,r)}async queryElevation(e,t,r,s,i){return this._view.elevationProvider.queryElevation(e,t,0,this.spatialReference,i,r,s)}}class a{constructor(e,t,r,s){this.spatialReference=t,this._getElevationQueryProvider=r,this._queries=new Array,this._queryOptions={...s,ignoreInvisibleLayers:!0},this._frameTask=e.registerTask(o.ELEVATION_QUERY,this)}destroy({completeTasks:e}={completeTasks:!1}){if(this._frameTask.remove(),this.running)if(e)this.runTask(n);else for(const r of this._queries)r.result.reject(t())}queryElevation(i,o,n,l=0){const a=r(),u={x:i,y:o,minDemResolution:l,result:a,signal:n};return this._queries.push(u),s(n,(()=>{e(this._queries,u),a.reject(t())})),a.promise}get running(){return this._queries.length>0}runTask(e){const r=this._queries;this._queries=[];const o=this._getElevationQueryProvider();if(!o)return r.forEach((e=>e.result.reject())),void e.madeProgress();const n=r.map((e=>[e.x,e.y])),l=r.reduce(((e,t)=>Math.min(e,t.minDemResolution)),1/0),a=new i({points:n,spatialReference:this.spatialReference}),u=r.length>1&&r.some((e=>!!e.signal))?new AbortController:null,c=null!=u?u.signal:r[0].signal;if(null!=u){let e=0;r.forEach((i=>s(i.signal,(()=>{e++,i.result.reject(t()),e===r.length&&u.abort()}))))}const h={...this._queryOptions,minDemResolution:l,signal:c};o.queryElevation(a,h).then((e=>{r.forEach(((r,s)=>{null!=r.signal&&r.signal.aborted?r.result.reject(t()):r.result.resolve(e.geometry.points[s][2])}))})).catch((e=>{r.forEach((t=>t.result.reject(e)))})),e.madeProgress()}get test(){}}

;// ../node_modules/@arcgis/core/views/3d/layers/graphics/enums.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var L,enums_A;!function(L){L[L.USER=1]="USER",L[L.SCALE_RANGE=2]="SCALE_RANGE",L[L.FILTER=4]="FILTER",L[L.DECONFLICTION=8]="DECONFLICTION",L[L.ALL_GRAPHIC=15]="ALL_GRAPHIC",L[L.ALL_LABEL=255]="ALL_LABEL"}(L||(L={})),function(L){L[L.GRAPHIC=1]="GRAPHIC",L[L.LABEL=16]="LABEL"}(enums_A||(enums_A={}));

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Evented.js
var Evented = __webpack_require__(17306);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/OptimizedFeature.js
var OptimizedFeature = __webpack_require__(32597);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/OptimizedGeometry.js
var OptimizedGeometry = __webpack_require__(88443);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/data/optimizedFeatureQueryEngineAdapter.js
var optimizedFeatureQueryEngineAdapter = __webpack_require__(41215);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DFeatureStore.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const d=(0,aaBoundingBox/* create */.vt)();let Graphics3DFeatureStore_l=class extends Accessor/* default */.A{constructor(t){super(t),this.events=new Evented/* default */.A,this.hasZ=null,this.hasM=null,this.objectIdField=null,this.featureAdapter={getAttribute:(t,e)=>"graphic"in t?t.graphic.attributes[e]:optimizedFeatureQueryEngineAdapter/* optimizedFeatureQueryEngineAdapter */.T.getAttribute(t,e),getAttributes:t=>"graphic"in t?t.graphic.attributes:optimizedFeatureQueryEngineAdapter/* optimizedFeatureQueryEngineAdapter */.T.getAttributes(t),getObjectId:t=>"graphic"in t?(0,dehydratedFeatures/* getObjectId */.RW)(t.graphic,this.objectIdField)??void 0:optimizedFeatureQueryEngineAdapter/* optimizedFeatureQueryEngineAdapter */.T.getObjectId(t),getGeometry:t=>"graphic"in t?t.getAsOptimizedGeometry(this.hasZ,this.hasM):optimizedFeatureQueryEngineAdapter/* optimizedFeatureQueryEngineAdapter */.T.getGeometry(t),getCentroid:(t,e)=>{if("graphic"in t){let r=null;null!=t.centroid?r=t.centroid:"point"===t.graphic.geometry.type&&(0,projectionUtils.projectPoint)(t.graphic.geometry,u,this.viewSpatialReference)&&(r=u);const o=new Array(2+(e.hasZ?1:0)+(e.hasM?1:0));return null==r?(o[0]=0,o[1]=0,o[2]=0,o[3]=0):(o[0]=r.x,o[1]=r.y,e.hasZ&&(o[2]=r.hasZ?r.z:0),e.hasM&&(o[e.hasZ?3:2]=r.hasM?r.m:0)),new OptimizedGeometry/* default */.A([],o)}return optimizedFeatureQueryEngineAdapter/* optimizedFeatureQueryEngineAdapter */.T.getCentroid(t,e)},cloneWithGeometry:(t,e)=>"graphic"in t?new OptimizedFeature/* OptimizedFeature */.Om(e,this.featureAdapter.getAttributes(t),null,this.featureAdapter.getObjectId(t)):optimizedFeatureQueryEngineAdapter/* optimizedFeatureQueryEngineAdapter */.T.cloneWithGeometry(t,e)}}forEachInBounds(t,e){this.getSpatialIndex().forEachInBounds(t,e)}forEachBounds(t,e){const r=this.getSpatialIndex();for(const o of t){const t=this.featureAdapter.getObjectId(o);null!=r.getBounds(t,d)&&e(d)}}};(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],Graphics3DFeatureStore_l.prototype,"getSpatialIndex",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],Graphics3DFeatureStore_l.prototype,"forEach",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],Graphics3DFeatureStore_l.prototype,"hasZ",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],Graphics3DFeatureStore_l.prototype,"hasM",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],Graphics3DFeatureStore_l.prototype,"objectIdField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],Graphics3DFeatureStore_l.prototype,"viewSpatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],Graphics3DFeatureStore_l.prototype,"featureSpatialReference",void 0),Graphics3DFeatureStore_l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.3d.layers.graphics.Graphics3DFeatureStore")],Graphics3DFeatureStore_l);const u={type:"point",x:0,y:0,hasZ:!1,hasM:!1,spatialReference:null};

;// ../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DGraphicCreationContext.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Graphics3DGraphicCreationContext_r{constructor(r,s,t){this.graphic=r,this.renderingInfo=s,this.layer=t}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/ViewingMode.js
var ViewingMode = __webpack_require__(10714);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DSymbolCreationContext.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Graphics3DSymbolCreationContext_s{constructor(e,s,i,r){this.scheduler=e,this.schedule=s,this.layerViewUid=i,this.compressionTracker=r,this.sharedResources=null,this.streamDataRequester=null,this.elevationProvider=null,this.renderer=null,this.stage=null,this.clippingExtent=null,this.renderCoordsHelper=null,this.overlaySR=null,this.layer=null,this.drapeSourceRenderer=null,this.graphicsCoreOwner=null,this.localOriginFactory=null,this.featureExpressionInfoContext=null,this.screenSizePerspectiveEnabled=!0,this.slicePlaneEnabled=!1,this.physicalBasedRenderingEnabled=!1,this.skipHighSymbolLods=!1,this.isAsync=!1}get spherical(){return this.stage.view.state.viewingMode===ViewingMode/* ViewingMode */.RT.Global}}class Graphics3DSymbolCreationContext_i{constructor(){this.renderPriority=0,this.renderPriorityStep=1,this.ignoreDrivers=!1}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/asyncUtils.js
var asyncUtils = __webpack_require__(12690);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/callouts/calloutUtils.js
var calloutUtils = __webpack_require__(65834);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(96220);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/screenUtils.js
var screenUtils = __webpack_require__(89882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f64.js
var vec4f64 = __webpack_require__(28152);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/graphics/ElevationAligners.js
var ElevationAligners = __webpack_require__(88237);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DObject3DGraphicLayer.js
var Graphics3DObject3DGraphicLayer = __webpack_require__(45418);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DObjectMetadata.js
var Graphics3DObjectMetadata = __webpack_require__(90997);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DSymbolLayer.js
var Graphics3DSymbolLayer = __webpack_require__(43138);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/graphics/graphicUtils.js
var graphicUtils = __webpack_require__(54096);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/graphics/pointUtils.js
var pointUtils = __webpack_require__(72458);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/graphics/SymbolComplexity.js
var SymbolComplexity = __webpack_require__(79789);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Attribute.js
var Attribute = __webpack_require__(70807);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Geometry.js + 1 modules
var Geometry = __webpack_require__(59816);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js
var VertexAttribute = __webpack_require__(50645);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/string.js
var string = __webpack_require__(96274);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec2f32.js
var vec2f32 = __webpack_require__(17845);
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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/bufferWriterUtils.js
var bufferWriterUtils = __webpack_require__(81500);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ReloadableShaderModule.js
var ReloadableShaderModule = __webpack_require__(47705);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechnique.js + 1 modules
var ShaderTechnique = __webpack_require__(28347);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/LineCallout.glsl.js
var LineCallout_glsl = __webpack_require__(81808);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/enums.js
var enums = __webpack_require__(41746);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/renderState.js
var renderState = __webpack_require__(2449);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/LineCalloutTechnique.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class LineCalloutTechnique_p extends ShaderTechnique/* ShaderTechnique */.w{constructor(r,o){super(r,o,new ReloadableShaderModule/* ReloadableShaderModule */.$(LineCallout_glsl.L,(()=>__webpack_require__.e(/* import() */ 6492).then(__webpack_require__.bind(__webpack_require__, 76492)))))}initializePipeline(e){const{hudDepth:r,terrainDepthTest:t}=e,p={func:t?enums/* CompareFunction */.MT.ALWAYS:enums/* CompareFunction */.MT.LESS};return (0,renderState/* makePipelineState */.Ey)(r?{depthTest:p,depthWrite:renderState/* defaultDepthWrite */.Uy}:{blending:(0,renderState/* separateBlendingParams */.p3)(enums/* BlendFactor */.dn.ONE,enums/* BlendFactor */.dn.SRC_ALPHA,enums/* BlendFactor */.dn.ONE_MINUS_SRC_ALPHA,enums/* BlendFactor */.dn.ONE_MINUS_SRC_ALPHA),depthTest:p,colorWrite:renderState/* defaultColorWrite */.kn})}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration.js + 1 modules
var ShaderTechniqueConfiguration = __webpack_require__(77941);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultTechniqueConfiguration.js
var DefaultTechniqueConfiguration = __webpack_require__(9319);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/LineCalloutTechniqueConfiguration.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class LineCalloutTechniqueConfiguration_i extends DefaultTechniqueConfiguration/* DefaultTechniqueConfiguration */.E{constructor(e){super(),this.spherical=e,this.screenCenterOffsetUnitsEnabled=!1,this.occlusionTestEnabled=!0,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hudDepth=!1,this.hudDepthAlignStart=!1,this.terrainDepthTest=!1,this.draped=!1}}(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],LineCalloutTechniqueConfiguration_i.prototype,"screenCenterOffsetUnitsEnabled",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],LineCalloutTechniqueConfiguration_i.prototype,"occlusionTestEnabled",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],LineCalloutTechniqueConfiguration_i.prototype,"hasVerticalOffset",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],LineCalloutTechniqueConfiguration_i.prototype,"hasScreenSizePerspective",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],LineCalloutTechniqueConfiguration_i.prototype,"hudDepth",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],LineCalloutTechniqueConfiguration_i.prototype,"hudDepthAlignStart",void 0),(0,tslib_es6._)([(0,ShaderTechniqueConfiguration/* parameter */.W)()],LineCalloutTechniqueConfiguration_i.prototype,"terrainDepthTest",void 0);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/webscene/support/AlphaCutoff.js
var AlphaCutoff = __webpack_require__(63199);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/LineCalloutMaterial.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class LineCalloutMaterial_d extends Material/* Material */.im{constructor(e,t){super(e,T),this.intersectDraped=void 0,this.produces=new Map([[RenderSlot/* RenderSlot */.N.LINE_CALLOUTS,e=>(0,ShaderOutput/* isColorOrColorEmission */.RN)(e)],[RenderSlot/* RenderSlot */.N.LINE_CALLOUTS_HUD_DEPTH,e=>(0,ShaderOutput/* isColorOrColorEmission */.RN)(e)]]),this._configuration=new LineCalloutTechniqueConfiguration_i(t),this._uniqueMaterialIdentifier=O(this.parameters)}passParameters(){return this.parameters}getConfiguration(e,t){return super.getConfiguration(e,t,this._configuration),this._configuration.occlusionTestEnabled=this.parameters.occlusionTest,this._configuration.hasVerticalOffset=null!=this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=null!=this.parameters.screenSizePerspective,this._configuration.hudDepth=t.slot===RenderSlot/* RenderSlot */.N.LINE_CALLOUTS_HUD_DEPTH,this._configuration.hudDepthAlignStart=!!this.parameters.hudDepthAlignStart,this._configuration.screenCenterOffsetUnitsEnabled="screen"===this.parameters.centerOffsetUnits,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration}get visible(){return this.parameters.color[3]>=AlphaCutoff/* alphaCutoff */.Q||(this.parameters.borderColor?.[3]??0)>=AlphaCutoff/* alphaCutoff */.Q}intersect(){}createGLMaterial(e){return new S(e)}createBufferWriter(){return new D}validateParameters(e){this._uniqueMaterialIdentifier=O(e)}get uniqueMaterialIdentifier(){return this._uniqueMaterialIdentifier}}function O({renderOccluded:t,isDecoration:r,horizontalScreenOffset:i,color:s,size:n,occlusionTest:o,shaderPolygonOffset:a,hudDepthAlignStart:c,centerOffsetUnits:l,hasSlicePlane:f,screenSizePerspective:u,verticalOffset:h,borderColor:p}){return (0,string/* safeToString */.ML)`${t}:${r}:${i}:[${s}]:${n}:${o}:${a}:${c}:${l}:${f}:${null!=u}:{${h.screenLength}:${h.minWorldLength}:${h.maxWorldLength}}:[${p}]`}class S extends GLMaterial/* default */.A{beginSlot(e){return this.getTechnique(LineCalloutTechnique_p,e)}}class T extends Material/* MaterialParameters */.qA{constructor(){super(...arguments),this.horizontalScreenOffset=0,this.color=(0,vec4f64/* fromValues */.fA)(0,0,0,1),this.size=1,this.occlusionTest=!1,this.shaderPolygonOffset=1e-5,this.hudDepthAlignStart=!1,this.centerOffsetUnits="world",this.hasSlicePlane=!1}}const LineCalloutMaterial_L=(0,InterleavedLayout/* newLayout */.BP)().vec3f(VertexAttribute/* VertexAttribute */.r.POSITION).vec3f(VertexAttribute/* VertexAttribute */.r.NORMAL).vec2f16(VertexAttribute/* VertexAttribute */.r.UV0).vec4f(VertexAttribute/* VertexAttribute */.r.CENTEROFFSETANDDISTANCE),_=[(0,vec2f32/* fromValues */.fA)(0,0),(0,vec2f32/* fromValues */.fA)(1,0),(0,vec2f32/* fromValues */.fA)(0,1),(0,vec2f32/* fromValues */.fA)(1,0),(0,vec2f32/* fromValues */.fA)(1,1),(0,vec2f32/* fromValues */.fA)(0,1)];class D{constructor(){this.vertexBufferLayout=LineCalloutMaterial_L}elementCount(e){return 6*e.get(VertexAttribute/* VertexAttribute */.r.POSITION).indices.length}write(e,t,r,i,s,n){(0,bufferWriterUtils/* writePosition */.Hk)(r.get(VertexAttribute/* VertexAttribute */.r.POSITION),e,s.position,n,6),(0,bufferWriterUtils/* writeNormal */.p1)(r.get(VertexAttribute/* VertexAttribute */.r.NORMAL),t,s.normal,n,6),(0,bufferWriterUtils/* writeBufferVec4 */.Ut)(r.get(VertexAttribute/* VertexAttribute */.r.CENTEROFFSETANDDISTANCE),s.centerOffsetAndDistance,n,6);for(let o=0;o<_.length;++o)s.uv0.setVec(n+o,_[o]);return null}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectableGeometry.js
var IntersectableGeometry = __webpack_require__(27514);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DLineCalloutSymbolLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class w extends Graphics3DSymbolLayer/* Graphics3DSymbolLayer */.U{static{this.elevationModeChangeTypes={definedChanged:elevationAlignmentUtils/* SymbolUpdateType */.uw.UPDATE,staysOnTheGround:elevationAlignmentUtils/* SymbolUpdateType */.uw.UPDATE,onTheGroundChanged:elevationAlignmentUtils/* SymbolUpdateType */.uw.RECREATE}}constructor(e,t){super(e,null,t,A),this._elevationOptions={supportsOffsetAdjustment:!0,supportsOnTheGround:!1},this.ensureDrapedStatus(!1)}async doLoad(){this._materials[0]=new LineCalloutMaterial_d(this._materialParameters,this._context.spherical)}_perInstanceMaterialParameters(e){const t=this._materialParameters;return t.horizontalScreenOffset=e.horizontalScreenOffset??0,t.centerOffsetUnits=e.centerOffsetUnits||"world",t}get _materialParameters(){const r=new T,i=this.symbol,s=i.callout;if(s.color){const t=Color/* default */.A.toUnitRGBA(s.color);t[3]*=this._getLayerOpacity(),r.color=t}else r.color=vec4f64/* ZEROS */.uY;if(r.size=(0,screenUtils/* pt2px */.Lz)(s.size||0),i.verticalOffset){const{screenLength:e,minWorldLength:n,maxWorldLength:s}=i.verticalOffset;r.verticalOffset={screenLength:(0,screenUtils/* pt2px */.Lz)(e),minWorldLength:n||0,maxWorldLength:null!=s?s:1/0}}r.borderColor=null!=s.border?.color?Color/* default */.A.toUnitRGBA(s.border.color):null;const o="object"===i.symbolLayers.at(0).type,a="label-3d"===i.type;return r.occlusionTest=!o&&!(0,has/* default */.A)("enable-feature:non-occluded-hud"),o&&(r.shaderPolygonOffset=0),r.hudDepthAlignStart=a,r.hasSlicePlane=this._context.slicePlaneEnabled,r.screenSizePerspective=this._context.screenSizePerspectiveEnabled?this._context.sharedResources.screenSizePerspectiveSettings:null,r}_defaultElevationInfoNoZ(){return U}createGraphics3DGraphic(e,t){const r=e.renderingInfo,n=e.graphic,i=this.setGraphicElevationContext(n,new ElevationContext/* ElevationContext */.F,r.elevationOffset||0),s=r.symbol,a="on-the-ground"===this._elevationContext.mode&&("cim"===s.type||!s.symbolLayers.some((e=>"object"===e.type||"text"===e.type)));if("label-3d"!==s.type&&a)return null;if("point-3d"===s.type&&s.symbolLayers.every((e=>"text"===e.type&&!(0,calloutUtils/* textSymbolLayerSupportsVerticalOffset */.Ie)(e))))return null;const l=(0,graphicUtils/* computeCentroid */.W$)(n.geometry);return null==l?null:this._createAs3DShape(l,i,r,n.uid,t)}layerOpacityChanged(){this._materials[0]?.setParameters(this._materialParameters)}layerElevationInfoChanged(e,t,r){const n=this._elevationContext.mode,i=(0,elevationAlignmentUtils/* elevationModeChangeUpdateType */.I2)(w.elevationModeChangeTypes,r,n);return i!==elevationAlignmentUtils/* SymbolUpdateType */.uw.UPDATE||e?.forEach((e=>{const r=t(e);null!=r&&this.updateGraphicElevationContext(e.graphic,r)})),i}slicePlaneEnabledChanged(){return this._materials[0]?.setParameters({hasSlicePlane:this._context.slicePlaneEnabled}),!0}physicalBasedRenderingChanged(){return!0}setGraphicElevationContext(e,t,r=0){return super.setGraphicElevationContext(e,t),t.addOffsetRenderUnits(r),t}updateGraphicElevationContext(e,t){const{elevationContext:r,metadata:n}=t;this.setGraphicElevationContext(e,r,n?.elevationOffset??0),t.needsElevationUpdates=(0,elevationAlignmentUtils/* needsElevationUpdates2D */.nu)(r.mode)}computeComplexity(){return new SymbolComplexity/* SymbolComplexity */.rz({verticesPerFeature:6})}_getOrCreateMaterial(e,t){const r=this._perInstanceMaterialParameters(e),n=O(r);if(n===this._materials[0]?.uniqueMaterialIdentifier)return this._materials[0];if(t){let e=t.get(n);return null==e&&(e=new LineCalloutMaterial_d(r,this._context.spherical),t.set(n,e)),e}return new LineCalloutMaterial_d(r,this._context.spherical)}_createAs3DShape(e,t,r,n,i){const s=this._context.layerViewUid,o=this._context.stage.renderView.getObjectAndLayerIdColor({graphicUid:n,layerViewUid:s}),l=this._getOrCreateMaterial(r,i),c=new Geometry/* Geometry */.V(l,G(r),null,IntersectableGeometry/* GeometryType */.d.Point,o),h=(0,pointUtils/* createStageObject */.SZ)(this._context,e,c,t,n);if(null==h)return null;const p=new Graphics3DObject3DGraphicLayer/* Graphics3DObject3DGraphicLayer */.Y(this,h.object,null,ElevationAligners/* perObjectElevationAligner */.G8,t);return p.metadata=new Graphics3DObjectMetadata/* Graphics3DObjectMetadata */.Z(r.elevationOffset),p.alignedSampledElevation=h.sampledElevation,p.needsElevationUpdates=(0,elevationAlignmentUtils/* needsElevationUpdates2D */.nu)(t.mode),(0,pointUtils/* extendPointGraphicElevationContext */.d2)(p,e,this._context.elevationProvider),p}}function G(e){const{translation:t,centerOffset:r}=e,n=new Attribute/* Attribute */.n(t?[t[0],t[1],t[2]]:[0,0,0],Graphics3DLineCalloutSymbolLayer_S,3,!0),i=new Attribute/* Attribute */.n(r?[r[0],r[1],r[2],r[3]]:[0,0,0,1],Graphics3DLineCalloutSymbolLayer_S,4,!0);return[[VertexAttribute/* VertexAttribute */.r.POSITION,n],[VertexAttribute/* VertexAttribute */.r.NORMAL,new Attribute/* Attribute */.n([0,0,1],Graphics3DLineCalloutSymbolLayer_S,3,!0)],[VertexAttribute/* VertexAttribute */.r.CENTEROFFSETANDDISTANCE,i]]}const Graphics3DLineCalloutSymbolLayer_S=[0],U={mode:"relative-to-ground",offset:0},A={ignoreDrivers:!0,renderPriority:0,renderPriorityStep:1};class Graphics3DLineCalloutSymbolLayer_D extends RenderingInfo/* RenderingInfo */.${constructor(e,t,n=(0,vec3f64/* create */.vt)(),s=(0,vec4f64/* create */.vt)(),o=0,a="world",l=0){super(e,t),this.translation=n,this.centerOffset=s,this.horizontalScreenOffset=o,this.centerOffsetUnits=a,this.elevationOffset=l}}class Graphics3DLineCalloutSymbolLayer_L extends (/* unused pure expression or super */ null && (p)){}

;// ../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DCalloutSymbolLayerFactory.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const Graphics3DCalloutSymbolLayerFactory_t=()=>Logger/* default */.A.getLogger("esri.views.3d.layers.graphics.Graphics3DCalloutSymbolLayerFactory");function Graphics3DCalloutSymbolLayerFactory_e(o,l){if(!(0,calloutUtils/* hasCalloutSupport */.YX)(o))return Graphics3DCalloutSymbolLayerFactory_t().error("Graphics3DCalloutSymbolLayerFactory#make",`symbol of type '${o.type}' does not support callouts`),null;if(!o.callout)return null;const e=Graphics3DCalloutSymbolLayerFactory_a[o.callout.type];return e?new e(o,l):(Graphics3DCalloutSymbolLayerFactory_t().error("Graphics3DCalloutSymbolLayerFactory#make",`unknown or unsupported callout type ${o.callout.type}`),null)}const Graphics3DCalloutSymbolLayerFactory_a={line:w};

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/memoryEstimations.js
var memoryEstimations = __webpack_require__(4754);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/ObjectPool.js
var ObjectPool = __webpack_require__(90086);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/math/vec2.js
var vec2 = __webpack_require__(60704);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec2f64.js
var vec2f64 = __webpack_require__(59646);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Polygon.js
var Polygon = __webpack_require__(62802);
;// ../node_modules/@arcgis/core/geometry/projection/projectBoundingRect.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function projectBoundingRect_i(r,i,s,f){return null!=r&&((0,spatialReferenceUtils/* equals */.aI)(i,f)?((0,aaBoundingRect/* copy */.C)(s,r),!0):(projectBoundingRect_p[0]=r[0],projectBoundingRect_p[1]=r[1],projectBoundingRect_p[2]=0,!!(0,projectBuffer.projectBuffer)(projectBoundingRect_p,i,0,projectBoundingRect_p,f,0)&&(s[0]=projectBoundingRect_p[0],s[1]=projectBoundingRect_p[1],projectBoundingRect_p[0]=r[2],projectBoundingRect_p[1]=r[3],projectBoundingRect_p[2]=0,!!(0,projectBuffer.projectBuffer)(projectBoundingRect_p,i,0,projectBoundingRect_p,f,0)&&(s[2]=projectBoundingRect_p[0],s[3]=projectBoundingRect_p[1],!0))))}const projectBoundingRect_p=(0,vec3f64/* create */.vt)();

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/featureConversionUtils.js
var featureConversionUtils = __webpack_require__(21355);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DGraphic.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const x=new ObjectPool/* default */.A(Array,(e=>(0,aaBoundingBox/* set */.hZ)(e,aaBoundingBox/* zero */.v_)),null,10,5),v=(0,aaBoundingRect/* create */.vt)();class Graphics3DGraphic_A{get labelLayers(){return this._labelLayers||arrayUtils/* emptyArray */.tR}get extent(){return this._extent}get isElevationSource(){return this.layers.some((e=>e?.isElevationSource))}constructor(e,t,i,r,s){this.graphic=e,this.graphics3DSymbol=t,this.layers=i,this._visibleFlags=L.ALL_LABEL,++t.referenced,this._featureExpressionFeature=s?(0,featureExpressionInfoUtils/* createFeature */.VG)(s,e,r):null}initialize(e){this._layer=e,this._forEachSymbolLayerGraphic((t=>{t.initialize(e),t.setVisibility(this.isVisible())}))}destroy(){this._forEachSymbolLayerGraphic((e=>e.destroy())),this._calloutLayer=null,--this.graphics3DSymbol.referenced,this.graphics3DSymbol=null}get destroyed(){return null==this.layers}clearLabelGraphics(){this._forEachLabelGraphic((e=>e.destroy())),this._labelLayers=null}addLabelGraphic(e,t){this._labelLayers||(this._labelLayers=new Array),this._labelLayers.push(e),e.initialize(t),e.setVisibility(this.isVisible(enums_A.LABEL))}setCalloutGraphic(e){this._calloutLayer=e,this._layer&&(e.initialize(this._layer),e.setVisibility(this.isVisible()))}get calloutLayer(){return this._calloutLayer}get isDraped(){let e=!1;return this._forEachSymbolLayerGraphic((t=>{"draped"===t.type&&(e=!0)})),e}isVisible(e=enums_A.GRAPHIC,t){const i=t?this._visibleFlags|t|enums_A.LABEL*t:this._visibleFlags;return e===enums_A.GRAPHIC?(i&L.ALL_GRAPHIC)===L.ALL_GRAPHIC:(i&L.ALL_LABEL)===L.ALL_LABEL}setVisibilityFlag(e,t,i){const r=this.isVisible(e);i?this._visibleFlags|=e*t:this._visibleFlags&=~(e*t);const s=this.isVisible(e);if(r===s)return!1;if(e===enums_A.LABEL)this._forEachLabelGraphic((e=>e.setVisibility(s)));else{this._forEachSymbolLayerGraphic((e=>e.setVisibility(s)));const e=this.isVisible(enums_A.LABEL);this._forEachLabelGraphic((t=>t.setVisibility(e)))}return!0}getVisibilityFlag(e,t){return 0!==(this._visibleFlags&e*t)}computeExtent(e){if(!this._extent){const t=this.graphic.geometry;if(null==t)return!1;this._extent=(0,aaBoundingRect/* create */.vt)(),(0,dehydratedFeatures/* computeAABR */.iQ)(t,this._extent);const i=t.spatialReference;if(!(0,spatialReferenceUtils/* equals */.aI)(i,e)&&!projectBoundingRect_i(this._extent,i,this._extent,e))return this._extent=null,!1}return!0}getAsOptimizedGeometry(e,t){return this._optimizedGeometry||(this._optimizedGeometry=this._convertGraphicToOptimizedGeometry(this.graphic,e,t)),this._optimizedGeometry}_convertGraphicToOptimizedGeometry(e,t,i){let r=e.geometry;return"mesh"!==r.type&&"extent"!==r.type||(r=Polygon/* default */.A.fromExtent("mesh"===r.type?r.extent:r)),(0,featureConversionUtils/* convertFromGeometry */.Ux)(r,t,i)}get usedMemory(){let e=(0,memoryEstimations/* estimateAttributesMemory */.lM)(this.graphic.attributes);return this._forEachSymbolLayerGraphic((t=>e+=t.usedMemory)),e}computeAttachmentOrigin(){const e={render:{origin:(0,vec3f64/* create */.vt)(),num:0},draped:{origin:(0,vec2f64/* create */.vt)(),num:0}};for(const t of this.layers)null!=t&&t.computeAttachmentOrigin(e);return e.render.num>1&&(0,vec32.g)(e.render.origin,e.render.origin,1/e.render.num),e.draped.num>1&&(0,vec2/* scale */.hs)(e.draped.origin,e.draped.origin,1/e.draped.num),e}async getProjectedBoundingBox(e,i,r,s,a){return a||(a={boundingBox:null,requiresDrapedElevation:!1,screenSpaceObjects:[]}),a.boundingBox?(0,aaBoundingBox/* empty */.Ie)(a.boundingBox):a.boundingBox=(0,aaBoundingBox/* empty */.Ie)(),a.requiresDrapedElevation=!1,await (0,asyncUtils/* forEach */.jJ)(this.layers,(async t=>{if(null==t)return;const o="draped"===t.type?i:e,l=x.acquire(),n=await t.getProjectedBoundingBox(o,r,a.screenSpaceObjects,s,l);isFinite(n[2])&&isFinite(n[5])||(a.requiresDrapedElevation=!0),n&&(0,aaBoundingBox/* expandWithAABB */.RF)(a.boundingBox,l),x.release(l)})),(0,aaBoundingBox/* allFinite */.vQ)(a.boundingBox)||(0,aaBoundingRect/* allFinite */.vQ)((0,aaBoundingBox/* toRect */.ES)(a.boundingBox,v))?a:null}needsElevationUpdates(){for(const e of this.layers)if(null!=e&&("object3d"===e.type||"lod-instance"===e.type)&&e.needsElevationUpdates)return!0;return this._labelLayers?.some((e=>e?.needsElevationUpdates??!1))??!1}alignWithElevation(e,t,i){this._forEachRenderedGraphic((r=>{"object3d"!==r.type&&"lod-instance"!==r.type||r.alignWithElevation(e,t,this._featureExpressionFeature,i)}))}alignWithAbsoluteElevation(e,t,i){this._forEachRenderedGraphic((r=>{"object3d"===r.type&&r.alignWithAbsoluteElevation(e,t,i)}))}addObjectStateSet(e){this._forEachSymbolLayerGraphic((t=>t.addObjectState(e)))}removeObjectState(e){this._forEachSymbolLayerGraphic((t=>t.removeObjectState(e)))}updateHighlights(e){this._forEachSymbolLayerGraphic((t=>t.updateHighlights(e)))}_forEachGraphicList(e,t){e?.forEach((e=>e&&t(e)))}_forEachSymbolLayerGraphic(e){this._forEachGraphicList(this.layers,e),this._calloutLayer&&e(this._calloutLayer)}_forEachLabelGraphic(e){this._forEachGraphicList(this.labelLayers,e)}_forEachRenderedGraphic(e){this._forEachSymbolLayerGraphic(e),this._forEachLabelGraphic(e)}get test(){}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/graphics/interfaces.js
var graphics_interfaces = __webpack_require__(62545);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/graphics/Loadable.js
var Loadable = __webpack_require__(20561);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/symbolMemory.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const symbolMemory_e=2216,symbolMemory_o=4096;function symbolMemory_r(r){return symbolMemory_e+symbolMemory_o*r.symbolLayers.length+r.complexity.memory.resourceBytes}

;// ../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DSymbol.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Graphics3DSymbol_p extends Loadable/* Loadable */.x{set symbol(e){this._symbol=e,e.symbolLayers.forEach(((t,r)=>{const s=this.symbolLayers[r];null!=s&&(s.symbol=e,s.symbolLayer=t)}))}get symbol(){return this._symbol}constructor(e,t,r){super(t.schedule),this._symbol=e,this._context=t,this._backgroundLayers=r,this._destroyed=!1,this.symbolLayers=new Array,this.referenced=0,this._extentPadding=0}async doLoad(e){let o=this._symbol.symbolLayers;this._extentPadding=0,this._backgroundLayers&&(o=this._backgroundLayers.concat(o));const a=o.length;for(;this.symbolLayers.length<o.length;)this.symbolLayers.push(null);this.symbolLayers.length=o.length;const i=[];if(!Graphics3DSymbol_u){const{make:e}=await __webpack_require__.e(/* import() */ 1916).then(__webpack_require__.bind(__webpack_require__, 31916));Graphics3DSymbol_u=e}for(let t=0;t<a;t++){const s=o.at(t);if(!1===s.enabled)continue;Graphics3DSymbol_d.renderPriority=1-(1+t)/a,Graphics3DSymbol_d.renderPriorityStep=1/a,Graphics3DSymbol_d.ignoreDrivers=s.ignoreDrivers;const n=Graphics3DSymbol_u(this.symbol,s,this._context,Graphics3DSymbol_d),l=(0,promiseUtils/* onAbortOrThrow */.NY)(e,(()=>{this.symbolLayers[t]=null,n.destroy()}));l&&i.push(l),this.symbolLayers[t]=n}if(await (0,asyncUtils/* forEach */.jJ)(this.symbolLayers,(async(e,t)=>{if(null!=e)try{await e.load(),this._extentPadding+=Math.max(this._extentPadding,e.extentPadding)}catch{this.symbolLayers[t]=null}})),i.forEach((e=>e.remove())),(0,promiseUtils/* throwIfAborted */.Te)(e),this.symbolLayers.length&&!this.symbolLayers.some((e=>!!e)))throw new Error}getSymbolLayerSize(e){const t=this.symbolLayers[e];return null!=t?t.getCachedSize():null}get extentPadding(){return this._extentPadding}get symbologySnappingSupported(){return this.symbolLayers.some((e=>e?.queryForSnapping))}updateFocus(e,t){this.symbolLayers.forEach((r=>r?.updateFocus(e,t)))}createGraphics3DGraphic(e,t){const r=e.graphic,s=this.symbolLayers.map((t=>t?.createGraphics3DGraphic(e)??null)),o=this._context.arcade||this._context.featureExpressionInfoContext?.arcade?.modules||null;return new Graphics3DGraphic_A(r,t||this,s,e.layer,o)}get complexity(){return (0,defaultSymbolComplexity/* totalSymbolComplexities */.Tf)(this.symbolLayers.map((e=>null!=e?e.complexity:null)))}globalPropertyChanged(e,t){const r=this.symbolLayers.length;for(let s=0;s<r;s++){const r=this.symbolLayers[s],o=e=>{const t=e.layers[s];return t instanceof Graphics3DObject3DGraphicLayer/* Graphics3DObject3DGraphicLayer */.Y?t:null};if(null!=r&&!r.globalPropertyChanged(e,t,o))return!1}return!0}applyRendererDiff(e,t){return this.loadStatus!==Loadable/* LoadStatus */.P.LOADED?graphics_interfaces/* ApplyRendererDiffResult */.w.RecreateSymbol:this.symbolLayers.reduce(((r,s)=>r!==graphics_interfaces/* ApplyRendererDiffResult */.w.RecreateSymbol&&null!=s?Math.min(r,s.applyRendererDiff(e,t)):r),graphics_interfaces/* ApplyRendererDiffResult */.w.FastUpdate)}prepareSymbolPatch(e){if(this.loadStatus===Loadable/* LoadStatus */.P.FAILED)return;if("partial"!==e.diff.type)return;const t=e.diff.diff;if(!t.symbolLayers||"partial"!==t.symbolLayers.type)return;const r=t.symbolLayers.diff;this.symbolLayers.forEach(((t,s)=>{if(null==t)return;const o=r[s];if(o){const r={diff:o,graphics3DGraphicPatches:[],symbolLayerStatePatches:[]};t.prepareSymbolLayerPatch(r),e.symbolStatePatches.push(...r.symbolLayerStatePatches),r.graphics3DGraphicPatches.length&&e.graphics3DGraphicPatches.push(((e,t)=>{const o=e.layers[s];null!=o&&r.graphics3DGraphicPatches.forEach((e=>e(o,t)))}))}}))}updateGeometry(e,t){return this._updateGeometryOrTransform(e,((e,r)=>e.updateGeometry(r,t)))}updateTransform(e,t,r,s){return this._updateGeometryOrTransform(e,((e,o)=>e.updateTransform(o,t,r,s)))}_updateGeometryOrTransform(e,t){for(let r=0;r<this.symbolLayers.length;r++){const s=this.symbolLayers[r];if(null==s)continue;const o=e.layers[r];if(!o||!t(s,o))return!1}return!0}onRemoveGraphic(e){for(let t=0;t<this.symbolLayers.length;t++){const r=this.symbolLayers[t];if(null==r)continue;const s=e.layers[t];null!=s&&r.onRemoveGraphic(s)}}getFastUpdateStatus(){let e=!1,t=!1;for(const r of this.symbolLayers)if(null!=r){if(r.loadStatus===Loadable/* LoadStatus */.P.LOADING)return graphics_interfaces/* FastUpdateStatus */.G.Loading;r.isFastUpdatesEnabled()?t=!0:e=!0}return t?e?graphics_interfaces/* FastUpdateStatus */.G.Mixed:graphics_interfaces/* FastUpdateStatus */.G.Fast:e?graphics_interfaces/* FastUpdateStatus */.G.Slow:graphics_interfaces/* FastUpdateStatus */.G.Undefined}async queryForSnapping(t,r,o,a){const i=this.symbolLayers.filter(arrayUtils/* isSome */.Ru).filter((e=>null!=e.queryForSnapping)).map((e=>e.queryForSnapping(t,r,o,a))),n=await Promise.all(i);return (0,promiseUtils/* throwIfAborted */.Te)(a),n.flat()}destroy(){if(!this.destroyed){super.destroy();for(const e of this.symbolLayers)null!=e&&e.destroy();this.symbolLayers.length=0,this._destroyed=!0}}get destroyed(){return this._destroyed}get cachedMemory(){return symbolMemory_r(this)}}let Graphics3DSymbol_u=null;const Graphics3DSymbol_d=new Graphics3DSymbolCreationContext_i;

;// ../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DPointSymbol.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Graphics3DPointSymbol_s extends Graphics3DSymbol_p{constructor(r,o,t){super(r,o,t),this._calloutSymbolLayer=null,this.symbol.hasVisibleCallout()&&(this._calloutSymbolLayer=Graphics3DCalloutSymbolLayerFactory_e(this.symbol,o))}async doLoad(o){const a=this._calloutSymbolLayer?(0,asyncUtils/* result */.Ke)(this._calloutSymbolLayer.load()):null;try{await super.doLoad(o),(0,promiseUtils/* throwIfAborted */.Te)(o)}catch(l){throw this._calloutSymbolLayer?.abortLoad(),l}a&&await a}destroy(){super.destroy(),this._calloutSymbolLayer=(0,maybe/* destroyMaybe */.pR)(this._calloutSymbolLayer)}createGraphics3DGraphic(r,o){const t=super.createGraphics3DGraphic(r,o);if(null!=this._calloutSymbolLayer&&null!=t){const o=this._createCalloutGraphic(r);o&&t.setCalloutGraphic(o)}return t}globalPropertyChanged(r,o){return!!super.globalPropertyChanged(r,o)&&(!this._calloutSymbolLayer||this._calloutSymbolLayer.globalPropertyChanged(r,o,(r=>r.calloutLayer)))}updateGeometry(r,o){const t=super.updateGeometry(r,o);if(t&&this._calloutSymbolLayer){const t=r.calloutLayer;if(t)return this._calloutSymbolLayer.updateGeometry(t,o)}return t}_createCalloutGraphic(r){const o=r.renderingInfo;return r.renderingInfo=new Graphics3DLineCalloutSymbolLayer_D(o.renderer,o.symbol),this._calloutSymbolLayer.createGraphics3DGraphic(r)}}

;// ../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DSymbolFactory.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function Graphics3DSymbolFactory_t(t,i,n){return"point-3d"===t.type?new Graphics3DPointSymbol_s(t,i,n):new Graphics3DSymbol_p(t,i,n)}

;// ../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DWebStyleSymbol.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Graphics3DWebStyleSymbol_o extends Loadable/* Loadable */.x{constructor(t,r,s){super(r),this.symbol=t,this._convert=s,this.symbologySnappingSupported=!1,this.graphics3DSymbol=null,this.referenced=0}getSymbolLayerSize(t){return null!=this.graphics3DSymbol?this.graphics3DSymbol.getSymbolLayerSize(t):null}get symbolLayers(){return null!=this.graphics3DSymbol?this.graphics3DSymbol.symbolLayers:[]}get extentPadding(){return null!=this.graphics3DSymbol?this.graphics3DSymbol.extentPadding:0}async doLoad(t){const r=await this.symbol.fetchSymbol({signal:t});r.id=this.symbol.id,this.graphics3DSymbol=this._convert(r),null!=this.graphics3DSymbol&&await this.graphics3DSymbol.load()}createGraphics3DGraphic(t){return null!=this.graphics3DSymbol?this.graphics3DSymbol.createGraphics3DGraphic(t,this):null}get complexity(){return null!=this.graphics3DSymbol?this.graphics3DSymbol.complexity:defaultSymbolComplexity/* emptySymbolComplexity */.uD}globalPropertyChanged(t,r){return null!=this.graphics3DSymbol&&this.graphics3DSymbol.globalPropertyChanged(t,r)}applyRendererDiff(t,s){return null!=this.graphics3DSymbol?this.graphics3DSymbol.applyRendererDiff(t,s):graphics_interfaces/* ApplyRendererDiffResult */.w.RecreateSymbol}prepareSymbolPatch(t){null!=this.graphics3DSymbol&&this.graphics3DSymbol.prepareSymbolPatch(t)}updateGeometry(t,r){return null!=this.graphics3DSymbol&&this.graphics3DSymbol.updateGeometry(t,r)}updateTransform(t,r,s,e){return this.graphics3DSymbol?.updateTransform(t,r,s,e)??!1}onRemoveGraphic(){}updateFocus(){}getFastUpdateStatus(){return this.graphics3DSymbol?.getFastUpdateStatus()??graphics_interfaces/* FastUpdateStatus */.G.Loading}destroy(){null!=this.graphics3DSymbol&&this.graphics3DSymbol.destroy(),this.graphics3DSymbol=void 0,super.destroy()}get destroyed(){return void 0===this.graphics3DSymbol}get cachedMemory(){return symbolMemory_r(this)}}

;// ../node_modules/@arcgis/core/views/3d/layers/graphics/GraphicsCorePerformanceInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class GraphicsCorePerformanceInfo_s{constructor(s,i,t,h){this.total=s,this.visible=i,this.missing=t,this.pending=h}}

;// ../node_modules/@arcgis/core/views/3d/layers/graphics/GraphicStateTracking.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class GraphicStateTracking_s{constructor(t){this._graphicsCore=t,this._idToState=new Map,this._states=new Set;const i=t.owner.layer?.objectIdField;i?(this._getGraphicId=t=>(0,dehydratedFeatures/* getObjectId */.RW)(t,i),this._getGraphics3DGraphicById=t=>this._graphicsCore.getGraphics3DGraphicByObjectId(t)):(this._getGraphicId=t=>t.uid,this._getGraphics3DGraphicById=t=>this._graphicsCore.getGraphics3DGraphicById(t))}destroy(){this._idToState.clear(),this._states.forEach(((t,i)=>this.remove(i)))}add(t){const e=(0,handleUtils/* makeHandle */.hA)((()=>this.remove(t)));if(this._states.has(t))return e;const s=this._getGraphicId(t.graphic),a=this._getGraphics3DGraphicById(s);this._states.has(t)||this._states.add(t);return this._ensureStateList(s).push(t),t.displaying=null!=a&&a.isVisible(),t.isDraped=null!=a&&a.isDraped,t.tracking=!0,null!=a&&t.emit("changed"),e}remove(i){if(this._states.has(i)){if(this._idToState.size){const e=this._getGraphicId(i.graphic),s=this._idToState.get(e);s&&((0,arrayUtils/* remove */.TF)(s,i),0===s.length&&this._idToState.delete(e))}this._states.delete(i),i.tracking=!1,i.displaying=!1}}addGraphic(t){this._forEachState(t.graphic,(i=>{i.displaying=t.isVisible(),i.isDraped=t.isDraped,i.emit("changed")}))}removeGraphic(t){this._forEachState(t.graphic,(t=>{t.displaying=!1,t.isDraped=!1}))}updateGraphicGeometry(t){this._forEachState(t.graphic,(t=>t.emit("changed")))}updateGraphicVisibility(t){this._forEachState(t.graphic,(i=>i.displaying=t.isVisible()))}updateGraphicError(t,i){this._forEachState(t,(t=>t.error=i))}allGraphicsDeleted(){this._states.forEach((t=>t.displaying=!1))}_ensureStateList(t){const i=this._idToState.get(t);if(i)return i;const e=new Array;return this._idToState.set(t,e),e}_forEachState(t,i){if(0===this._states.size||0===this._idToState.size)return;const e=this._getGraphicId(t),s=this._idToState.get(e);null!=s&&s.forEach(i)}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/rbush/PooledRBush.js
var PooledRBush = __webpack_require__(4486);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/SpatialIndex2D.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let SpatialIndex2D_d=class extends Accessor/* default */.A{constructor(t){super(t),this._index=new PooledRBush/* PooledRBush */.w(9,(0,has/* default */.A)("esri-csp-restrictions")?t=>({minX:t.extent[0],minY:t.extent[1],maxX:t.extent[2],maxY:t.extent[3]}):[".extent[0]",".extent[1]",".extent[2]",".extent[3]"]),this._missing=new Set,this._boundsByFeature=new Map,this.spatialReference=null,this.hasZ=null,this.hasM=null,this.objectIdField=null,this.updating=!1}setup(t){this._addMany(t)}destroy(){this._missing.clear(),this._index=(0,maybe/* destroyMaybe */.pR)(this._index),this._boundsByFeature.clear(),this._boundsByFeature=null}update(){this._missing.size>0&&(this._addMany(Array.from(this._missing.values())),this.updating=!1,this._missing.clear())}get updatingRemaining(){return this._missing.size}queryGraphicUIDsInExtent(t,e,s){null!=e&&e.equals(this.spatialReference)&&(SpatialIndex2D_u.minX=t[0],SpatialIndex2D_u.minY=t[1],SpatialIndex2D_u.maxX=t[2],SpatialIndex2D_u.maxY=t[3],this.update(),this._index.search(SpatialIndex2D_u,(t=>s(t.graphic.uid))))}add(t){this._missing.add(t),this.updating=!0}remove(t){if(this._missing.delete(t))return void(this.updating=this._missing.size>0);if(!t.extent)return;this._index.remove(t);const e=(0,dehydratedFeatures/* getObjectId */.RW)(t.graphic,this._get("objectIdField"));null!=e&&this._boundsByFeature.delete(e)}_addMany(t){if(0===t.length)return;const e=this._get("objectIdField");for(const s of t){s.computeExtent(this.spatialReference);const t=(0,dehydratedFeatures/* getObjectId */.RW)(s.graphic,e);null!=t&&this._boundsByFeature.set(t,s.extent)}this._index.load(t)}clear(){this._index.clear(),this._missing.clear(),this._boundsByFeature.clear(),this.updating=!1}forEachInBounds(t,e){SpatialIndex2D_u.minX=t[0],SpatialIndex2D_u.minY=t[1],SpatialIndex2D_u.maxX=t[2],SpatialIndex2D_u.maxY=t[3],this.update(),this._index.search(SpatialIndex2D_u,(t=>{e(t)}))}getBounds(t,e){this.update();const s=this._boundsByFeature.get(t);return s?(0,aaBoundingBox/* fromRect */.Jt)(e,s):null}};(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],SpatialIndex2D_d.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],SpatialIndex2D_d.prototype,"hasZ",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],SpatialIndex2D_d.prototype,"hasM",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],SpatialIndex2D_d.prototype,"objectIdField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],SpatialIndex2D_d.prototype,"updating",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],SpatialIndex2D_d.prototype,"updatingRemaining",null),SpatialIndex2D_d=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.3d.layers.graphics.SpatialIndex2D")],SpatialIndex2D_d);const SpatialIndex2D_u={minX:0,minY:0,maxX:0,maxY:0};

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/unitUtils.js
var unitUtils = __webpack_require__(92976);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/unitConversionUtils.js
var unitConversionUtils = __webpack_require__(97046);
;// ../node_modules/@arcgis/core/views/3d/support/ElevationUpdateEvent.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class ElevationUpdateEvent_e{constructor(e="scene"){this.context=e,this.extent=(0,aaBoundingRect/* empty */.Ie)()}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Intersector.js
var Intersector = __webpack_require__(74515);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectorInterfaces.js
var IntersectorInterfaces = __webpack_require__(22531);
;// ../node_modules/@arcgis/core/views/3d/layers/support/StageLayerElevationProvider.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const StageLayerElevationProvider_=1,StageLayerElevationProvider_v=Symbol("layerHandles");let y=class extends(Evented/* default */.A.EventedMixin(Accessor/* default */.A)){get spatialReference(){return this.view?.spatialReference}constructor(e){super(e),this._elevationOffset=0}initialize(){this._renderCoordsHelper=this.view.renderCoordsHelper,this._intersectLayers=[this.stageLayer],this._intersector=new Intersector/* Intersector */.n(this.view.state.viewingMode),this._intersector.options.store=IntersectorInterfaces/* StoreResults */.o.MIN;const e=this._computeLayerExtent(this.spatialReference,this.stageLayer);this._zmin=e[2],this._zmax=e[5];const t=this.stageLayer.events;this.addHandles([t.on(["layerObjectAdded","layerObjectRemoved","transformationChanged","shaderTransformationChanged"],(e=>this._objectChanged(e))),t.on(["geometryAdded","geometryRemoved"],(({object:e})=>this._objectChanged(e))),t.on("attributesChanged",(({attribute:e,object:t})=>(0,VertexAttribute/* affectsGeometry */.b)(e)&&this._objectChanged(t)))],StageLayerElevationProvider_v)}dispose(){this.removeHandles(StageLayerElevationProvider_v)}elevationInfoChanged(){const e=null!=this.layer?this.layer.elevationInfo:null;if(null!=e&&"on-the-ground"!==e.mode){const t=(0,unitUtils/* getMetersPerVerticalUnitForSR */.G9)(this.layer.spatialReference),r=(0,unitConversionUtils/* getMetersPerUnit */.Ao)(e.unit??"meters");this._elevationOffset=(e.offset??0)*r/t}else this._elevationOffset=0}getElevation(e,t,r,s){if(StageLayerElevationProvider_x[0]=e,StageLayerElevationProvider_x[1]=t,StageLayerElevationProvider_x[2]=r,!this._renderCoordsHelper.toRenderCoords(StageLayerElevationProvider_x,s,StageLayerElevationProvider_x))return Logger/* default */.A.getLogger(this).error("could not project point for elevation alignment"),null;const i=this._elevationOffset,n=this._zmin+i,a=this._zmax+i;this._renderCoordsHelper.setAltitude(C,a,StageLayerElevationProvider_x),this._renderCoordsHelper.setAltitude(E,n,StageLayerElevationProvider_x);const l=e=>!!e.lastValidElevationBB;return this._intersector.reset(C,E,null),this._intersector.intersect(this._intersectLayers,null,StageLayerElevationProvider_,null,l),this._intersector.results.min.getIntersectionPoint(StageLayerElevationProvider_x)?this._renderCoordsHelper.getAltitude(StageLayerElevationProvider_x):null}_objectChanged(e){const t=this.spatialReference;if(!e.lastValidElevationBB||!t)return;(0,aaBoundingBox/* empty */.Ie)(j);const r=e.lastValidElevationBB;r.isEmpty()||this._expandExtent(t,r.min,r.max,j);const{min:o,max:s}=e.boundingVolumeWorldSpace;this._expandExtent(t,o,s,j),(0,aaBoundingBox/* toRect */.ES)(j,b.extent),this._zmin=Math.min(this._zmin,j[2]),this._zmax=Math.max(this._zmax,j[5]),b.spatialReference=t,this.emit("elevation-change",b),(0,vec32.c)(r.min,o),(0,vec32.c)(r.max,s)}_computeLayerExtent(e,t){return (0,aaBoundingBox/* empty */.Ie)(j),null!=e&&t.objects.forEach((t=>this._expandExtent(e,t.boundingVolumeWorldSpace.min,t.boundingVolumeWorldSpace.max,j))),j}_expandExtent(e,t,r,o){for(let s=0;s<8;++s)StageLayerElevationProvider_x[0]=1&s?t[0]:r[0],StageLayerElevationProvider_x[1]=2&s?t[1]:r[1],StageLayerElevationProvider_x[2]=4&s?t[2]:r[2],this._renderCoordsHelper.fromRenderCoords(StageLayerElevationProvider_x,StageLayerElevationProvider_x,e),(0,aaBoundingBox/* expandWithVec3 */.iT)(o,StageLayerElevationProvider_x);return o}};(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],y.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],y.prototype,"stageLayer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],y.prototype,"view",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],y.prototype,"spatialReference",null),y=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.3d.layers.support.StageLayerElevationProvider")],y);const j=(0,aaBoundingBox/* empty */.Ie)(),b=new ElevationUpdateEvent_e,StageLayerElevationProvider_x=(0,vec3f64/* create */.vt)(),C=(0,vec3f64/* create */.vt)(),E=(0,vec3f64/* create */.vt)();

;// ../node_modules/@arcgis/core/views/3d/support/extentUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function m(l,m,u){if(null==l||null==u)return!1;let i=!0;return extentUtils_e[0]=null!=l.xmin?l.xmin:0,extentUtils_e[1]=null!=l.ymin?l.ymin:0,extentUtils_e[2]=null!=l.zmin?l.zmin:0,i=i&&n(extentUtils_e,l.spatialReference,0,m,u,0),extentUtils_e[0]=null!=l.xmax?l.xmax:0,extentUtils_e[1]=null!=l.ymax?l.ymax:0,extentUtils_e[2]=null!=l.zmax?l.zmax:0,i=i&&n(extentUtils_e,l.spatialReference,0,m,u,3),null==l.xmin&&(m[0]=-1/0),null==l.ymin&&(m[1]=-1/0),null==l.zmin&&(m[2]=-1/0),null==l.xmax&&(m[3]=1/0),null==l.ymax&&(m[4]=1/0),null==l.zmax&&(m[5]=1/0),i}function extentUtils_u(l,m,u){if(null==l||null==u)return!1;let i=!0;return extentUtils_e[0]=null!=l.xmin?l.xmin:0,extentUtils_e[1]=null!=l.ymin?l.ymin:0,extentUtils_e[2]=null!=l.zmin?l.zmin:0,i=i&&(0,projectBuffer.projectBuffer)(extentUtils_e,l.spatialReference,0,extentUtils_e,u,0),m[0]=extentUtils_e[0],m[1]=extentUtils_e[1],extentUtils_e[0]=null!=l.xmax?l.xmax:0,extentUtils_e[1]=null!=l.ymax?l.ymax:0,extentUtils_e[2]=null!=l.zmax?l.zmax:0,i=i&&(0,projectBuffer.projectBuffer)(extentUtils_e,l.spatialReference,0,extentUtils_e,u,0),m[2]=extentUtils_e[0],m[3]=extentUtils_e[1],null==l.xmin&&(m[0]=-1/0),null==l.ymin&&(m[1]=-1/0),null==l.xmax&&(m[2]=1/0),null==l.ymax&&(m[3]=1/0),i}const extentUtils_e=(0,vec3f64/* create */.vt)();

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/GridLocalOriginFactory.js
var GridLocalOriginFactory = __webpack_require__(24734);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/UpdatePolicy.js
var UpdatePolicy = __webpack_require__(68699);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/WebGLLayer.js + 1 modules
var WebGLLayer = __webpack_require__(54671);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/layers/support/popupUtils.js
var popupUtils = __webpack_require__(18846);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/support/PropertiesPool.js
var PropertiesPool = __webpack_require__(42063);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/signal.js
var signal = __webpack_require__(40315);
;// ../node_modules/@arcgis/core/views/support/TextureCompressionTracker.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class TextureCompressionTracker_e{constructor(){this._pendingCompressionTasks=(0,signal/* signal */.v)(0)}get compressing(){return!!this._pendingCompressionTasks.value}increment(){this._pendingCompressionTasks.value++}decrement(){this._pendingCompressionTasks.value--}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/support/Yield.js
var Yield = __webpack_require__(75199);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DCore.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var ke;const ze=(0,vec3f64/* create */.vt)(),We=(0,aaBoundingBox/* create */.vt)();let He=class extends Accessor/* default */.A{static{ke=this}static{this.tmpVec=(0,vec3f64/* create */.vt)()}get _viewSpatialReference(){return this.owner.view.spatialReference}get spatialIndex(){return this._spatialIndex||(this._spatialIndex=new SpatialIndex2D_d({objectIdField:this.owner.layer?.objectIdField,spatialReference:this._viewSpatialReference,hasZ:!!this.hasZ,hasM:!!this.hasM}),this._spatialIndex.setup(Array.from(this.graphics3DGraphics.values()))),this._spatialIndex.update(),this._spatialIndex}get deconflictor(){return this._deconflictor}get labeler(){return this._labeler}get numberOfGraphics(){return this._numberOfGraphics}get effectiveUpdatePolicy(){return null!=this.currentRenderer&&"dictionary"===this.currentRenderer.type?UpdatePolicy/* UpdatePolicy */.q.ASYNC:this._forcedUpdatePolicy??this.preferredUpdatePolicy}get featureStore(){return this._featureStore}get initializePromise(){return this._initializePromise}get scaleVisibility(){return this._scaleVisibility}get elevationAlignment(){return this._elevationAlignment}get objectStates(){return this._objectStates}get filterVisibility(){return this._filterVisibility}get updating(){return!!(this.dataUpdating||this._elevationAlignment?.updating||this._scaleVisibility?.updating||this._filterVisibility?.updating||this._rendererChangeAbortController||this._elevationInfoChangeAbortController||this._frameTaskHandle.updating||this._updateQueue.updating||this.running)}get dataUpdating(){return!!(this._graphicsWaitingForSymbol.size>0||this._pendingUpdates.size>0||this._spatialIndex?.updating||this._updatingPendingLoadedGraphicsChange||this._dataUpdateQueue.updating||this._loadingSymbols>0||this.compressionTracker.compressing)}get running(){return this._pendingUpdates.size>0||!!this._spatialIndex?.updating||this._dataUpdateQueue.running||this._updateQueue.running}get suspendedOrOutsideOfView(){return this.owner.suspended||!!this.owner.suspendInfo?.outsideOfView}get updatingRemaining(){return this.updating?this._pendingUpdates.size+.1*(this._spatialIndex?.updatingRemaining||0)+.1*(this._elevationAlignment?.updatingRemaining||0):0}get displayFeatureLimit(){const e=this.owner&&this.owner.view&&this.owner.view.qualitySettings,t=e?.graphics3D.minTotalNumberOfFeatures??0,i=e?.graphics3D.maxTotalNumberOfFeatures??0,r=e?.graphics3D.maxNumberOfDrawCalls??0,s=e?.graphics3D.maxTotalNumberOfVertices??0,a=this.averageSymbolComplexity,n=Math.max(1,a?.verticesPerFeature??1),o=a&&a.drawCallsPerFeature>0&&r>0?r/a.drawCallsPerFeature:i,l=Math.ceil(s/n),h=Math.max(t,Math.min(i,l,o)),d=this._get("displayFeatureLimit");return d&&d.maximumTotalNumberOfVertices===s&&d.averageSymbolComplexity===a&&d.maximumNumberOfFeatures===h?d:new DisplayFeatureLimit_e(s,h,a)}get averageSymbolComplexity(){const e=(0,defaultSymbolComplexity/* averageSymbolComplexities */.k9)(this._symbolComplexities),t=this._get("averageSymbolComplexity");return 0===e.numComplexities||null!=t&&(e.estimated&&(t.verticesPerFeature>=e.verticesPerFeature||t.verticesPerCoordinate>=e.verticesPerCoordinate||t.drawCallsPerFeature>=e.drawCallsPerFeature)||t.verticesPerFeature===e.verticesPerFeature&&t.verticesPerCoordinate===e.verticesPerCoordinate&&t.drawCallsPerFeature===e.drawCallsPerFeature)?t:e}get usedMemory(){const e=this.labelsEnabled?(this.averageSymbolComplexity?.memory.bytesPerFeatureLabel??0)*this._numberOfGraphics:0,t=this._getSymbolComplexitiesUsed().reduce(((e,t)=>e+t.memory.resourceBytes),0);if(null==this._symbolMaterials){this._symbolMaterials=[];for(const e of this._symbols.values())if(null!=e)for(const t of e.symbolLayers)if(t)for(const e of t.materials)e&&this._symbolMaterials.push(e)}const i=this.owner.view.stage.renderer,r=this.owner.view.basemapTerrain.overlayManager.renderer,s=this._symbolMaterials.reduce(((e,t)=>e+((i.getMaterialRenderer(t)||r.getMaterialRenderer(t))?.usedMemory??0)),0);return this._usedMemory+e+t+s}get usedMemoryPerGraphic(){if(this._usedMemory&&this._numberOfGraphics){const e=this._numberOfGraphics/(this._numberOfGraphics+Math.max(this._pendingAdds,this._pendingRemoves));return this._usedMemory/this._numberOfGraphics*e}if(null!=this.averageSymbolComplexity){const e=this.labelsEnabled?this.averageSymbolComplexity.memory.bytesPerFeatureLabel:0;return this.averageSymbolComplexity.memory.bytesPerFeature+e}return 0}get unprocessedMemoryEstimate(){return(this._pendingAdds-this._pendingRemoves)*this.usedMemoryPerGraphic}get _symbolComplexities(){return this.currentRenderer?this._getSymbolComplexitiesUsedOrRenderer(this.currentRenderer):this._getSymbolComplexitiesUsed()}get visible(){return this._visible}_getConvertedSymbol(e){const t=e;if("web-style"===t.type)return t.clone();const i=this._symbolConversionCache.get(t.id);if(null!=i)return i;const r=(0,symbolConversion/* to3D */.t)(t,{geometryType:this.layer?.geometryType??void 0,retainId:!0,hasLabelingContext:this._hasLabelingContext(t),cimFallbackEnabled:!0}),s=r.symbol||null;return null==s&&r.error&&Logger/* default */.A.getLogger(this).error(r.error.message),this._symbolConversionCache.set(t.id,s),s}_getSymbolComplexitiesUsedOrRenderer(e){if(null==e)return[];const t=e.symbols,i="backgroundFillSymbol"in e?e.backgroundFillSymbol:null;if(!i&&!t.length)return[];const r=[],s=this._getSymbolComplexityUsedOrRenderer(i);null!=s&&r.push(s);for(const a of t){const e=this._getSymbolComplexityUsedOrRenderer(a);null!=e&&r.push(e)}return r}_getSymbolComplexityUsedOrRenderer(e){if(null==e)return null;const t=this._symbols.get(e.id);if(null!=t)return t.complexity;const i=this._getConvertedSymbol(e);return null!=i?(0,defaultSymbolComplexity/* defaultSymbolComplexity */.Eg)(i):null}_getSymbolComplexitiesUsed(){const e=[];return this._symbols.forEach((t=>{null!=t&&e.push(t.complexity)})),e}get _objectIdField(){return this.layer.objectIdField}constructor(e){super(e),this._propertiesPool=new PropertiesPool/* PropertiesPool */.M({computedExtent:Extent/* default */.A},this),this.computedExtent=null,this.currentRenderer=null,this.rendererHasGeometryOperations=!1,this._graphicStateTracking=null,this.graphics3DGraphics=new Map,this.stageLayer=null,this.stage=null,this._graphicsDrapedUids=new Set,this._graphicsBySymbol=new Map,this._symbolConversionCache=new Map,this._symbols=new Map,this._graphicsWithoutSymbol=new Map,this._graphicsWaitingForSymbol=new Map,this._graphicsUpdateId=0,this._frameTaskHandle=Scheduler/* ImmediateTask */.nu,this._dataUpdateQueue=new PromiseQueue/* PromiseQueue */.T,this._updateQueue=new PromiseQueue/* PromiseQueue */.T,this._suspendSymbolCleanup=!1,this._arcadeOnDemand=null,this._rendererChangeAbortController=null,this._elevationInfoChangeAbortController=null,this._initializeAbortController=null,this._elevationAlignment=null,this._scaleVisibility=null,this._filterVisibility=null,this._spatialIndex=null,this.extentPadding=0,this._updatingPendingLoadedGraphicsChange=null,this._featureStore=null,this._deconflictor=null,this._labeler=null,this._objectStates=null,this._viewElevationProvider=null,this._stageLayerElevationProvider=null,this._sharedSymbolResourcesOwnerHandle=null,this._whenGraphics3DGraphicRequests={},this._pendingUpdates=new Map,this._numberOfGraphics=0,this._numberOfGraphicsProvidingElevation=0,this._pendingAdds=0,this._pendingRemoves=0,this._applyPendingRemovesFirst=!1,this._loadingSymbols=0,this._pendingUpdatesPool=new PooledArray/* default */.A({allocator:e=>e||new Be,deallocator:e=>(e.clear(),e)}),this.compressionTracker=new TextureCompressionTracker_e,this._symbolWarningLogged=!1,this._geometryWarningLogged=!1,this._objectIdInvisibleSet=new Set,this._whenSymbolRemoved=new PooledArray/* default */.A,this.preferredUpdatePolicy=UpdatePolicy/* UpdatePolicy */.q.SYNC,this._forcedUpdatePolicy=null,this.elevationFeatureExpressionEnabled=!0,this.owner=null,this.layer=null,this.graphicSymbolSupported=!0,this.getRenderingInfoWithoutRenderer=!1,this.setUidToIdOnAdd=!0,this.hasZ=null,this.hasM=null,this._usedMemory=0,this._visible=!1,this._startCreateGraphics=!1,this._unusedSymbolsCache=e.owner.view.resourceController.memoryController.newCache("graphics-3d-unused-symbols",(e=>e.destroy())),this.symbolCreationContext=new Graphics3DSymbolCreationContext_s(e.owner.view.resourceController.scheduler,((e,t)=>this._updateQueue.push(e,t)),e.owner.layerViewUid,this.compressionTracker)}initialize(){this._featureStore=new Graphics3DFeatureStore_l({objectIdField:this.owner.layer?.objectIdField,hasZ:!!this.hasZ,hasM:!!this.hasM,viewSpatialReference:this._viewSpatialReference,featureSpatialReference:this.owner.featureSpatialReference,getSpatialIndex:()=>this.spatialIndex,forEach:e=>this.graphics3DGraphics.forEach(e)});const e=(e,t,i)=>this.spatialIndex.queryGraphicUIDsInExtent(e,t,i),{componentFactories:t}=this;this._elevationAlignment=t.elevationAlignment?.(this,e),this._scaleVisibility=t.scaleVisibility?.(this,e),this._filterVisibility=t.filterVisibility?.({featureStore:this._featureStore,getFeatureCount:()=>this.graphics3DGraphics.size,updateFeatureVisibilities:e=>this.modifyGraphics3DGraphicVisibilities((t=>t.setVisibilityFlag(enums_A.GRAPHIC,L.FILTER,e((0,dehydratedFeatures/* getObjectId */.RW)(t.graphic,this._objectIdField))))),setAllFeaturesVisibility:e=>this.modifyGraphics3DGraphicVisibilities((t=>t.setVisibilityFlag(enums_A.GRAPHIC,L.FILTER,e))),clearFeaturesVisibility:()=>this.modifyGraphics3DGraphicVisibilities((e=>e.setVisibilityFlag(enums_A.GRAPHIC,L.FILTER,!0)))}),this._deconflictor=t.deconflictor?.(this),this._labeler=t.labeler?.(this,this._scaleVisibility),this._objectStates=t.objectStates?.(this),this._initializeAbortController=new AbortController,this.addHandles((0,reactiveUtils/* when */.z7)((()=>this.owner.view.state.highlights),(()=>{const{highlightOrderMap:e}=this.owner.view.state;this.graphics3DGraphics.forEach((t=>t.updateHighlights(e)))}))),this._initializePromise=this._initializeAsync()}async _initializeAsync(){const e=this._initializeAbortController?.signal,t=this.owner.view;this._viewElevationProvider=new ElevationQuery_l(this._viewSpatialReference,t),this._initializeStage(t,this.owner.layerViewUid);const i=t.sharedSymbolResources;this.symbolCreationContext.sharedResources=i,this._sharedSymbolResourcesOwnerHandle=i.addGraphicsOwner(this.owner),null!=this.currentRenderer&&(this.symbolCreationContext.renderer=this.currentRenderer),this.symbolCreationContext.stage=this.stage,this.symbolCreationContext.streamDataRequester=i.streamDataRequester,this.symbolCreationContext.renderCoordsHelper=t.renderCoordsHelper,this.symbolCreationContext.layer=this.layer,this.symbolCreationContext.graphicsCoreOwner=this.owner,this.symbolCreationContext.localOriginFactory=new GridLocalOriginFactory/* GridLocalOriginFactory */.g(t.renderSpatialReference),this.symbolCreationContext.elevationProvider=t.elevationProvider,this.symbolCreationContext.notifyGraphicGeometryChanged=e=>this.notifyGraphicGeometryChanged(e),this.symbolCreationContext.notifyGraphicVisibilityChanged=e=>this.notifyGraphicVisibilityChanged(e);const r=(0,featureExpressionInfoUtils/* extractExpressionInfo */.MF)(this.layer.elevationInfo,this.elevationFeatureExpressionEnabled);if(this.symbolCreationContext.featureExpressionInfoContext=await (0,featureExpressionInfoUtils/* createContext */.q6)(r,this._viewSpatialReference,e,Logger/* default */.A.getLogger(this)),(0,promiseUtils/* throwIfAborted */.Te)(e),this.symbolCreationContext.screenSizePerspectiveEnabled=t.screenSizePerspectiveEnabled&&!!this.layer.screenSizePerspectiveEnabled,this.symbolCreationContext.slicePlaneEnabled=!!this.owner.slicePlaneEnabled,this.symbolCreationContext.physicalBasedRenderingEnabled=!!this.owner.view.qualitySettings?.physicallyBasedRenderingEnabled,this.symbolCreationContext.skipHighSymbolLods=!!this.owner.view.qualitySettings?.graphics3D?.skipHighSymbolLods,"drapeSourceType"in this.owner){const{owner:e}=this;this.symbolCreationContext.drapeSourceRenderer=t.basemapTerrain.overlayManager.registerGeometryDrapeSource(e),this.addHandles((0,handleUtils/* makeHandle */.hA)((()=>t.basemapTerrain.overlayManager.unregisterDrapeSource(e))))}this.addHandles([(0,reactiveUtils/* watch */.wB)((()=>this.suspendedOrOutsideOfView),(()=>this._updateQueue.unshift((()=>this._updateLayerVisibility()),null).catch(promiseUtils/* ignoreAbortErrors */.QZ))),(0,reactiveUtils/* watch */.wB)((()=>[this.layer?.screenSizePerspectiveEnabled,this.owner.view?.screenSizePerspectiveEnabled]),(()=>{const e=t.screenSizePerspectiveEnabled&&!!this.layer.screenSizePerspectiveEnabled;e!==this.symbolCreationContext.screenSizePerspectiveEnabled&&(this.symbolCreationContext.screenSizePerspectiveEnabled=e,this._labeler?.reset(),this.recreateAllGraphicsAndSymbols())})),(0,reactiveUtils/* watch */.wB)((()=>this.owner.slicePlaneEnabled),(e=>this._slicePlaneEnabledChange(!!e))),(0,reactiveUtils/* watch */.wB)((()=>this.owner.view.state?.rasterPixelRatio),(()=>this._pixelRatioChange())),(0,reactiveUtils/* watch */.wB)((()=>!!this.owner.view.qualitySettings?.physicallyBasedRenderingEnabled),(e=>this._physicalBasedRenderingChange(e))),(0,reactiveUtils/* watch */.wB)((()=>!!this.owner.view.qualitySettings?.graphics3D?.skipHighSymbolLods),(e=>this._skipHighSymbolLoDsChange(e))),(0,reactiveUtils/* watch */.wB)((()=>this.owner.view.focusAreasView?.polygons),(()=>this._updateFocusedLabels())),(0,reactiveUtils/* watch */.wB)((()=>this.owner.view.map?.focusAreas.style),(()=>this.recreateAllGraphicsAndSymbols())),(0,reactiveUtils/* when */.z7)((()=>t.basemapTerrain?.tilingScheme),(e=>{if(e.spatialReference.equals(this.symbolCreationContext.overlaySR)||null==t.basemapTerrain.spatialReference||(this.symbolCreationContext.overlaySR=t.basemapTerrain.spatialReference),this.hasHandles("loaded-graphics"))this.recreateAllGraphics();else{const e=()=>this.owner?.loadedGraphics;this.addHandles([(0,reactiveUtils.on)(e,"change",(e=>{this._graphicsCollectionChanged(e),this._signalUpdatingDuringAsyncLoadedGraphicsChange()}),{onListenerAdd:()=>{this.recreateAllGraphics(),this._signalUpdatingDuringAsyncLoadedGraphicsChange()}})],"loaded-graphics")}}),{initial:!0}),(0,reactiveUtils/* watch */.wB)((()=>this.effectiveUpdatePolicy),(e=>{null!=this.stageLayer&&(this.stageLayer.updatePolicy=e),this.symbolCreationContext.isAsync=this.effectiveUpdatePolicy===UpdatePolicy/* UpdatePolicy */.q.ASYNC,e===UpdatePolicy/* UpdatePolicy */.q.SYNC&&this.runTask(Scheduler/* noBudget */.Bb)}),reactiveUtils/* syncAndInitial */.pc)]),this._frameTaskHandle=t.resourceController.scheduler.registerTask(Scheduler/* TaskPriority */.W6.GRAPHICS_CORE,this),this.layer&&"featureReduction"in this.layer&&this.addHandles((0,reactiveUtils/* watch */.wB)((()=>this.layer.featureReduction),(()=>this._deconflictor?.featureReductionChange()))),this.notifyChange("averageSymbolComplexity"),this.rendererChange(this.owner.renderer).catch((()=>{})),this._initializeAbortController=null}_abortInitialize(){this._initializeAbortController=(0,maybe/* abortMaybe */.DC)(this._initializeAbortController)}_updateFocusedLabels(){this.forEachGraphics3DSymbol(((e,t)=>{t&&e.updateFocus((({graphic:e})=>this.recreateGraphics([e])),t)}))}destroy(){this._unusedSymbolsCache.destroy(),this._abortInitialize(),this._rendererChangeAbortController=(0,maybe/* abortMaybe */.DC)(this._rendererChangeAbortController),this._abortElevationInfoChange(),this._frameTaskHandle.remove(),this._frameTaskHandle=Scheduler/* ImmediateTask */.nu,this._dataUpdateQueue.cancelAll(),this._updateQueue.cancelAll(),this._deconflictor=(0,maybe/* removeMaybe */.xt)(this._deconflictor),this._labeler=(0,maybe/* removeMaybe */.xt)(this._labeler),this._elevationAlignment=(0,maybe/* destroyMaybe */.pR)(this._elevationAlignment),this._scaleVisibility=(0,maybe/* destroyMaybe */.pR)(this._scaleVisibility),this._filterVisibility=(0,maybe/* destroyMaybe */.pR)(this._filterVisibility),this._objectStates=(0,maybe/* destroyMaybe */.pR)(this._objectStates),this.clear(),this._featureStore=(0,maybe/* destroyMaybe */.pR)(this._featureStore),this._updatingPendingLoadedGraphicsChange=(0,maybe/* removeMaybe */.xt)(this._updatingPendingLoadedGraphicsChange),this._graphicStateTracking=(0,maybe/* destroyMaybe */.pR)(this._graphicStateTracking),this.stage&&(this.stageLayer=(0,maybe/* destroyMaybe */.pR)(this.stageLayer),this.stage=null),this._set("owner",null);for(const e in this._whenGraphics3DGraphicRequests)this._whenGraphics3DGraphicRequests[e].reject(new core_Error/* default */.A("graphic:layer-destroyed","Layer has been destroyed"));this._whenGraphics3DGraphicRequests=null,this._sharedSymbolResourcesOwnerHandle=(0,maybe/* removeMaybe */.xt)(this._sharedSymbolResourcesOwnerHandle),this._propertiesPool=(0,maybe/* destroyMaybe */.pR)(this._propertiesPool),this._pendingUpdatesPool=null,this._symbolConversionCache.clear(),this._objectIdInvisibleSet.clear(),this._spatialIndex=(0,maybe/* destroyMaybe */.pR)(this._spatialIndex)}clear(){this._objectStates?.allGraphicsDeleted(),null!=this._graphicStateTracking&&this._graphicStateTracking.allGraphicsDeleted(),this.graphics3DGraphics.forEach((e=>e.destroy())),this._spatialIndex?.clear(),this.graphics3DGraphics.clear(),this._numberOfGraphics=0,this._usedMemory=0,this._updateLayerVisibility(),this._symbols.forEach(maybe/* destroyMaybe */.pR),this._symbols.clear(),this._symbolMaterials=null,this._graphicsBySymbol.clear(),this._graphicsWithoutSymbol.clear(),this._graphicsWaitingForSymbol.clear(),this._pendingUpdates.clear(),this._pendingUpdatesPool.clear(),this._pendingAdds=0,this._pendingRemoves=0,this._applyPendingRemovesFirst=!1,this.notifyChange("dataUpdating"),this.notifyChange("running"),this.notifyChange("updatingRemaining"),this._featureStore.events.emit("changed"),this.owner.notifyContentGeometryUpdate?.()}_initializeStage(e,t){this.stage=e.stage,this.stageLayer=new WebGLLayer/* WebGLLayer */.x(this.stage,{visible:!this.suspendedOrOutsideOfView,updatePolicy:this.effectiveUpdatePolicy},t);const i=this.stageLayer.events;i.on("transformationChanged",(e=>this.notifyGraphicGeometryChanged(e.graphicUid))),i.on("shaderTransformationChanged",(e=>this.notifyGraphicGeometryChanged(e.graphicUid))),i.on("visibilityChanged",(e=>this.notifyGraphicVisibilityChanged(e.graphicUid))),i.on("geometryAdded",(e=>this.notifyGraphicGeometryChanged(e.object.graphicUid))),i.on("geometryRemoved",(e=>this.notifyGraphicGeometryChanged(e.object.graphicUid))),i.on("attributesChanged",(e=>(0,VertexAttribute/* affectsGeometry */.b)(e.attribute)&&this.notifyGraphicGeometryChanged(e.object.graphicUid)))}notifyGraphicGeometryChanged(e){if(null==this._graphicStateTracking||null==e)return;const t=this.graphics3DGraphics.get(e);t&&this._graphicStateTracking.updateGraphicGeometry(t)}notifyGraphicVisibilityChanged(e){if(null==this._graphicStateTracking||null==e)return;const t=this.graphics3DGraphics.get(e);t&&this._graphicStateTracking.updateGraphicVisibility(t)}_updateLayerVisibility(){const e=this.displayFeatureLimit.maximumNumberOfFeatures,t=this._numberOfGraphics>e*qe,i=!this.suspendedOrOutsideOfView&&!t;i!==this._visible&&(this._visible=i,this._updateStageLayerVisibility())}_updateStageLayerVisibility(){const e=this._visible&&(null==this.layer.opacity||this.layer.opacity>=AlphaCutoff/* alphaCutoff */.Q);this.stageLayer.visible!==e&&(this.stageLayer.visible=e,e?this.updateGraphicsVisibilities():this._hideAllGraphics(),this.owner.notifyContentGeometryUpdate?.())}getGraphics3DGraphicById(e){return null!=e?this.graphics3DGraphics.get(e):void 0}getGraphics3DGraphicByObjectId(e){return this.owner.layer?.objectIdField?this._findGraphics3DGraphicByObjectId(e):null}_getGraphicObjectID(e,t=this.owner.layer?.objectIdField){return (0,dehydratedFeatures/* getObjectId */.RW)(e,t)}get graphics3DGraphicsByObjectID(){const e=this.owner.layer?.objectIdField;if(!e)return;const t=new Map;return this.graphics3DGraphics.forEach((i=>{if(!i)return;const r=i.graphic,s=this._getGraphicObjectID(r,e);null!=s&&t.set(s,i)})),t}get labelsEnabled(){return!!this._labeler?.layerLabelsEnabled()}async updateLabelingInfo(e){const t=this._deconflictor?.labelingInfoChange(e),i=this._labeler?.labelingInfoChange(e);await Promise.allSettled([t,i])}updateVisibilityInfo(){this._deconflictor?.labelingInfoChange(),this._labeler?.visibilityInfoChange()}get symbolUpdateType(){if(this._pendingUpdates.size>0)return"unknown";let e=!1,t=!1;for(const[i,r]of this._symbols)if(null!=r){switch(r.getFastUpdateStatus()){case graphics_interfaces/* FastUpdateStatus */.G.Loading:return"unknown";case graphics_interfaces/* FastUpdateStatus */.G.Fast:this._graphicsBySymbol.has(i)&&(t=!0);break;case graphics_interfaces/* FastUpdateStatus */.G.Slow:this._graphicsBySymbol.has(i)&&(e=!0);break;case graphics_interfaces/* FastUpdateStatus */.G.Mixed:this._graphicsBySymbol.has(i)&&(t=e=!0);case graphics_interfaces/* FastUpdateStatus */.G.Undefined:}}return t?e?"mixed":"fast":e?"slow":"mixed"}runTask(e){if(this._dataUpdateQueue.runTask(e),this._updateQueue.runTask(e),this._applyPendingUpdates(e),this.notifyChange("running"),this.running||this.notifyChange("dataUpdating"),this.notifyChange("updatingRemaining"),!e.hasProgressed)return Yield/* Yield */.G}setObjectIdVisibility(e,t){t?this._objectIdInvisibleSet.delete(e):this._objectIdInvisibleSet.add(e);const i=this._findGraphics3DGraphicByObjectId(e);null!=i&&this._updateUserVisibility(i)}_findGraphics3DGraphicByObjectId(e){return (0,MapUtils/* findInMap */.$n)(this.graphics3DGraphics,(t=>this._getGraphicObjectID(t.graphic)===e))}_updateUserVisibility(e){if(null==e)return!1;const t=e.graphic,i=this._getGraphicObjectID(t),r=t.visible&&!this.owner.suspended&&this.stageLayer.visible&&(null==i||!this._objectIdInvisibleSet.has(i));return e.setVisibilityFlag(enums_A.GRAPHIC,L.USER,r)}_whenGraphics3DGraphic(e){const t=this.graphics3DGraphics.get(e.uid);if(t)return Promise.resolve(t);const i=this._whenGraphics3DGraphicRequests[e.uid];if(i)return i.promise;const r=(0,promiseUtils/* createResolver */.Tw)();return this._whenGraphics3DGraphicRequests[e.uid]=r,r.promise}async _boundsForGraphics3DGraphic(e,t){const i=this._viewSpatialReference,r=this.owner.view.renderSpatialReference,s=this.owner.view.basemapTerrain.spatialReference,a=(e,t,s)=>(0,projectBuffer.projectBuffer)(e,r,t,e,i,t,s),n=(e,t,r)=>(0,projectBuffer.projectBuffer)(e,s,t,e,i,t,r),o=this._viewElevationProvider?{service:this._viewElevationProvider,useViewElevation:null!=t&&!!t.useViewElevation,minDemResolution:null!=t?t.minDemResolution:null,minDemResolutionForPoints:this.owner.view.resolution}:null,l=await e.getProjectedBoundingBox(a,n,o,t?.signal);if(!l)return null;const h=l.boundingBox;if(l.requiresDrapedElevation){const e=this.symbolCreationContext.elevationProvider;if(e){(0,aaBoundingBox/* center */.gX)(h,ze);const t=e.getElevation(ze[0],ze[1],0,i,"ground")??0;h[2]=Math.min(h[2],t),h[5]=Math.max(h[5],t)}}return{boundingBox:h,screenSpaceObjects:l.screenSpaceObjects}}async whenGraphicBounds(e,t){await (0,reactiveUtils/* whenOnce */.C_)((()=>this.owner?.loadedGraphics));const i=this.owner.layer?.objectIdField,s=this.owner.loadedGraphics.find((t=>t===e||null!=i&&null!=t.attributes&&e.attributes&&t.attributes[i]===e.attributes[i]));if(!s)throw new core_Error/* default */.A("internal:graphic-not-part-of-view","Graphic is not part of this view");const a=await this._whenGraphics3DGraphic(s);return this._boundsForGraphics3DGraphic(a,t)}computeAttachmentOrigin(e,t){const i=this.graphics3DGraphics.get(e.uid);if(!i)return null;const r=i.computeAttachmentOrigin();if(0===r.render.num&&0===r.draped.num)return null;(0,vec32.i)(Ye,0,0,0);let s=0;if(r.render.num>0){if(!(0,projectVectorToVector/* projectVectorToVector */.F)(r.render.origin,this.symbolCreationContext.renderCoordsHelper.spatialReference,Qe,t))return null;(0,vec32.f)(Ye,Ye,Qe),s++}if(r.draped.num>0){const[e,i]=r.draped.origin,a=this._viewElevationProvider.getElevation(e,i,"ground")??0;if((0,vec32.i)(Qe,e,i,a),!(0,projectVectorToVector/* projectVectorToVector */.F)(Qe,this._viewElevationProvider.spatialReference,Qe,t))return null;(0,vec32.f)(Ye,Ye,Qe),s++}return s>1&&(0,vec32.g)(Ye,Ye,1/s),new Point/* default */.A({x:Ye[0],y:Ye[1],z:Ye[2],spatialReference:t})}getSymbolLayerSize(e,t){const i=this._symbols.get(e.id);if(null==i)throw new core_Error/* default */.A("internal:symbol-not-part-of-view","Symbol is not part of this view");const s=e.symbolLayers.indexOf(t);if(-1===s)throw new core_Error/* default */.A("internal:missing-symbol-layer","Symbol layer is not in symbol");const a=i.getSymbolLayerSize(s);if(null==a)throw new core_Error/* default */.A("internal:missing-size","Symbol layer has no valid size");return a}_graphicsCollectionChanged(e){this._startCreateGraphics&&(this.add(e.added),this.remove(e.removed))}graphicUpdateHandler(e){const t=e.graphic.uid,i=this.graphics3DGraphics.get(t);if(null!=i||null!=this._graphicsWithoutSymbol.get(t)){switch(e.property){case"visible":this._graphicUpdateVisibleHandler(i);break;case"geometry":this._graphicUpdateGeometryHandler(i,e);break;case"symbol":this._graphicUpdateSymbolHandler(i,e);break;case"attributes":case"popupTemplate":break;case"origin-transform":this._graphicUpdateTransformHandler(i,e)}this.owner.notifyContentGeometryUpdate?.()}}_graphicUpdateGeometryHandler(e,t){this._graphicUpdateGeometryOrTransformHandler(e,t,(()=>!(null==t.newValue||null==e||!e.graphics3DSymbol.updateGeometry(e,t.newValue)||!(this._labeler?.updateGraphicGeometry(e)??1))&&(this._labeler?.setDirty(),!0)));const i=t.graphic.geometry;null!=i&&this._expandComputedExtent(i)}_graphicUpdateTransformHandler(e,t){const i=t.graphic.geometry;this._graphicUpdateGeometryOrTransformHandler(e,t,(()=>null!=t.newValue&&null!=e&&null!=i&&e.graphics3DSymbol.updateTransform(e,i.spatialReference,t.newValue,t.action)))}_graphicUpdateGeometryOrTransformHandler(e,t,i){if(null!=t.graphic.geometry)if(null!=e)i()||this._recreateGraphic(e.graphic);else{const e=t.graphic.symbol?.id;if(e){const t=this._symbols.get(e);if(null!=t&&t.loadStatus===Loadable/* LoadStatus */.P.LOADING)return}this._recreateGraphic(t.graphic)}else this._recreateGraphic(t.graphic)}_graphicUpdateSymbolHandler(e,t){const i=t.graphic,r=null!=e?e.graphics3DSymbol:null!=t.oldValue?this._symbols.get(t.oldValue.id):null;if(null==r||null==t.newValue)return void this._recreateGraphic(i);const s=r.symbol,a=this._getConvertedSymbol(t.newValue);if(null!=a&&(a.type!==s.type||"web-style"===a.type)||"web-style"===s.type)return void this._recreateGraphic(i);const n=this._graphicsBySymbol.get(s.id);if(n&&1!==n.size)return void this._recreateGraphic(i);const o=(0,diffUtils/* diff */.Ui)(s,a);if(null==o)return void this._updateSymbolMapping(s.id,a);const l={diff:o,graphics3DGraphicPatches:[],symbolStatePatches:[]};if(r.prepareSymbolPatch(l),!(0,diffUtils/* isEmpty */.Im)(l.diff))return void this._recreateGraphic(i);const h=this._getRenderingInfo(i,!1);if(null==h)return void this._recreateGraphic(i);const d=r.extentPadding;for(const p of l.symbolStatePatches)p();if(d!==r.extentPadding&&this._recomputeExtentPadding(),null!=e)for(const p of l.graphics3DGraphicPatches)p(e,h);this._updateSymbolMapping(s.id,a)}_graphicUpdateVisibleHandler(e){this._updateUserVisibility(e)&&(this._labeler?.setDirty(),this._deconflictor?.setDirty())}recreateGraphics(e){this._suspendSymbolCleanup=!0,this.remove(e),this.add(e),this._suspendSymbolCleanup=!1,this.effectiveUpdatePolicy===UpdatePolicy/* UpdatePolicy */.q.SYNC&&this._cleanupSymbols()}_recreateGraphic(e){this.recreateGraphics([e])}_beginGraphicUpdate(e){const t=this._graphicsUpdateId;return this._graphicsUpdateId++,this._graphicsWaitingForSymbol.set(e.uid,t),1===this._graphicsWaitingForSymbol.size&&this.notifyChange("dataUpdating"),t}_endGraphicUpdate(e,t){e&&(t&&this._graphicStateTracking?.updateGraphicError(e,t),this._graphicsWaitingForSymbol.delete(e.uid),0===this._graphicsWaitingForSymbol.size&&(this._cleanupSymbols(),this.notifyChange("dataUpdating")))}_recomputeExtentPadding(){let e=0;this._symbols.forEach((t=>{null!=t&&(e=Math.max(e,t.extentPadding))})),this._set("extentPadding",e)}_expandComputedExtent(e){const t=We,i=e.spatialReference;(0,dehydratedFeatures/* computeAABB */.w9)(e,t);const r=this._viewSpatialReference,s=ke.tmpVec;if((0,spatialReferenceUtils/* equals */.aI)(i,r)||(0,projectXYZToVector/* projectXYZToVector */.L)(t[0],t[1],0,i,s,r)&&(t[0]=s[0],t[1]=s[1],(0,projectXYZToVector/* projectXYZToVector */.L)(t[3],t[4],0,i,s,r),t[3]=s[0],t[4]=s[1]),!(isFinite(t[0])&&isFinite(t[3])&&isFinite(t[1])&&isFinite(t[4])))return;const a=this.computedExtent;let n=null;const o=isFinite(t[2])&&isFinite(t[5]),l=o&&(null==a?.zmin||t[2]<a.zmin),h=o&&(null==a?.zmax||t[5]>a.zmax);if(a){(t[0]<a.xmin||t[1]<a.ymin||t[3]>a.xmax||t[4]>a.ymax||l||h)&&(n=this._propertiesPool.get("computedExtent"),n.xmin=Math.min(t[0],a.xmin),n.ymin=Math.min(t[1],a.ymin),n.xmax=Math.max(t[3],a.xmax),n.ymax=Math.max(t[4],a.ymax),n.spatialReference=r)}else n=this._propertiesPool.get("computedExtent"),n.xmin=t[0],n.ymin=t[1],n.xmax=t[3],n.ymax=t[4],n.spatialReference=r;n&&(l&&(n.zmin=t[2]),h&&(n.zmax=t[5]),this._set("computedExtent",n))}_abortElevationInfoChange(){this._elevationInfoChangeAbortController&&(this._elevationInfoChangeAbortController.abort(),this._elevationInfoChangeAbortController=null)}async elevationInfoChange(){this._abortElevationInfoChange();const e=new AbortController;this._elevationInfoChangeAbortController=e;const t=(0,featureExpressionInfoUtils/* extractExpressionInfo */.MF)(this.layer.elevationInfo,this.elevationFeatureExpressionEnabled);this.symbolCreationContext.featureExpressionInfoContext=await (0,featureExpressionInfoUtils/* createContext */.q6)(t,this._viewSpatialReference,e.signal,Logger/* default */.A.getLogger(this)),(0,promiseUtils/* throwIfAborted */.Te)(e.signal),this._elevationInfoChangeAbortController=null,this._labeler?.elevationInfoChange(),this.forEachGraphics3DSymbol(((e,t,i)=>{e.globalPropertyChanged("elevationInfo",t)?t?.forEach((e=>{const t=e.graphic,i=e.labelLayers;for(const r of i){r.graphics3DSymbolLayer.updateGraphicElevationContext(t,r)}})):this._recreateSymbol(i)})),this.updateStageLayerElevationProvider(),this._elevationAlignment?.elevationInfoChange()}updateStageLayerElevationProvider(){this._stageLayerElevationProvider?(this.layer.elevationInfo&&"relative-to-scene"===this.layer.elevationInfo.mode||0===this._numberOfGraphicsProvidingElevation)&&(this.owner.view.elevationProvider.unregister(this._stageLayerElevationProvider),this._stageLayerElevationProvider=(0,maybe/* disposeMaybe */.WD)(this._stageLayerElevationProvider)):(!this.layer.elevationInfo||this.layer.elevationInfo&&"relative-to-scene"!==this.layer.elevationInfo.mode)&&this._numberOfGraphicsProvidingElevation>0&&(this._stageLayerElevationProvider=new y({layer:this.layer,stageLayer:this.stageLayer,view:this.owner.view}),this.owner.view.elevationProvider.register("scene",this._stageLayerElevationProvider))}_clearSymbolsAndGraphics(){this.clear(),null!=this._filterVisibility&&this._filterVisibility.clear(),this._labeler?.reset(),this._deconflictor?.clear(),this._elevationAlignment?.clear(),this.stageLayer?.invalidateSpatialQueryAccelerator(),this._stageLayerElevationProvider&&(this.owner.view.elevationProvider.unregister(this._stageLayerElevationProvider),this._stageLayerElevationProvider=(0,maybe/* disposeMaybe */.WD)(this._stageLayerElevationProvider))}startCreateGraphics(){this._startCreateGraphics=!0,this.recreateAllGraphics()}recreateAllGraphics(){this._recreateAllGraphics(!1)}recreateAllGraphicsAndSymbols(){this._recreateAllGraphics(!0)}_recreateAllGraphics(e=!1){if(!this._startCreateGraphics)return;const{loadedGraphics:t,view:i}=this.owner,r=i.basemapTerrain?.tilingScheme&&t?.length?t.toArray():null;!e&&r||this._clearSymbolsAndGraphics(),this.symbolCreationContext.screenSizePerspectiveEnabled=this.owner.view.screenSizePerspectiveEnabled&&!!this.layer.screenSizePerspectiveEnabled,this.symbolCreationContext.slicePlaneEnabled=!!this.owner.slicePlaneEnabled,this._set("computedExtent",null),r&&(e?this.add(r):this.recreateGraphics(r))}_recreateSymbol(e){const t=this._graphicsBySymbol.get(e),i=[];t&&(t.forEach(((e,t)=>{const r=e.usedMemory;this._conditionalRemove(e,t),this._spatialIndex?.remove(e),i.push(e.graphic),e.destroy(),this._removeGraphics3DGraphic(t,r),this._updateLayerVisibility(),this._featureStore.events.emit("changed"),this.owner.notifyContentGeometryUpdate?.()})),this._graphicsBySymbol.set(e,new Map));const r=this._symbols.get(e);(0,maybe/* destroyMaybe */.pR)(r),this._symbols.delete(e),this._symbolMaterials=null,(0,maybe/* destroyMaybe */.pR)(this._unusedSymbolsCache.pop(e)),this.add(i)}_recreateGraphicsForSymbol(e){const t=this._graphicsBySymbol.get(e);if(t){const e=[];t.forEach((t=>e.push(t.graphic))),this.recreateGraphics(e)}}_conditionalRemove(e,t){this._graphicsDrapedUids.delete(t),this._objectStates?.removeGraphic(e),this._labeler?.removeGraphic(e),this._deconflictor?.removeGraphic(e),null!=this._graphicStateTracking&&this._graphicStateTracking.removeGraphic(e)}add(e){e&&0!==e.length&&(this.owner.view.basemapTerrain?.tilingScheme?(this._updatePolicyForGraphics(e)===UpdatePolicy/* UpdatePolicy */.q.ASYNC?this._addDelayed(e):this._addImmediate(e),this.notifyChange("dataUpdating")):Logger/* default */.A.getLogger(this).error("#add()","Cannot add graphics before terrain surface has been initialized"))}_updatePolicyForGraphics(e){if(this.effectiveUpdatePolicy===UpdatePolicy/* UpdatePolicy */.q.SYNC&&("mesh"===this.layer.geometryType||null==this.layer.geometryType))for(const t of e)if(null!=t.geometry&&"mesh"===t.geometry.type&&!t.geometry.loaded)return UpdatePolicy/* UpdatePolicy */.q.ASYNC;return this.effectiveUpdatePolicy}_addImmediate(e){this._geometryWarningLogged=!1,this._symbolWarningLogged=!1;for(const t of e)this._addGraphic(t,this._getRenderingInfo(t),UpdatePolicy/* UpdatePolicy */.q.SYNC);this._cleanupSymbols(),this._labeler?.setDirty(),this._deconflictor?.setDirty()}_addDelayed(e){for(const t of e){const e=t.uid;let i=this._pendingUpdates.get(e);i?i.add?i.state!==Ne.NEW&&i.abortController?.abort():this._pendingAdds++:(i=this._pendingUpdatesPool.pushNew(),this._pendingAdds++,this._pendingUpdates.set(e,i)),i.add=t}this.notifyChange("running"),this.notifyChange("updatingRemaining"),this.notifyChange("dataUpdating")}remove(e){this.effectiveUpdatePolicy===UpdatePolicy/* UpdatePolicy */.q.ASYNC?this._removeDelayed(e):this._removeImmediate(e),this.notifyChange("dataUpdating")}_removeImmediate(e){for(const t of e)this._removeGraphic(t);this._cleanupSymbols(),this._labeler?.setDirty(),this._deconflictor?.setDirty()}_removeDelayed(e){for(const t of e){const e=t.uid,i=this._pendingUpdates.get(e);if(i)i.add&&(i.remove?i.add=null:this._pendingUpdates.delete(e),i.state===Ne.LOADING&&i.abortController?.abort(),this._pendingAdds--);else{const i=this._pendingUpdatesPool.pushNew();i.remove=t,this._pendingUpdates.set(e,i),this._pendingRemoves++,this._applyPendingRemovesFirst=!0}}0===this._pendingUpdates.size&&this._finishPendingUpdates(),this.notifyChange("running"),this.notifyChange("updatingRemaining"),this.notifyChange("dataUpdating")}_finishPendingUpdates(){this._pendingUpdatesPool.clear(),this._cleanupSymbols(),(this._pendingAdds||this._pendingRemoves)&&Logger/* default */.A.getLogger(this).warn("pendingAdds/Removes in inconsistent state!"),this._pendingAdds=0,this._pendingRemoves=0,this._applyPendingRemovesFirst=!1}_applyPendingUpdates(e){if(this._geometryWarningLogged=!1,this._symbolWarningLogged=!1,0===this._pendingUpdates.size&&this._spatialIndex?.updating)return this._spatialIndex.update(),void e.madeProgress();if(this._applyPendingRemovesFirst){this._applyPendingRemovesFirst=!1;for(const[t,i]of this._pendingUpdates){if(e.done){this._applyPendingRemovesFirst=!0;break}if(i.remove&&!i.add&&(this._pendingRemoves--,e.madeProgress(),this._removeGraphic(i.remove),i.remove=null,this._pendingUpdates.delete(t),0===this._pendingRemoves))break}}for(const[t,i]of this._pendingUpdates){if(e.done)break;i.add&&i.state===Ne.NEW&&this._processPendingUpdateNew(i);let r=this.effectiveUpdatePolicy;if(!i.remove||i.add&&i.state!==Ne.READY||(this._pendingRemoves--,e.madeProgress(),this._removeGraphic(i.remove),i.remove=null,r=UpdatePolicy/* UpdatePolicy */.q.SYNC),i.add)switch(i.state){case Ne.READY:this._addGraphic(i.add,i.renderingInfo,r),i.add=null,this._pendingAdds--,e.madeProgress();break;case Ne.REJECTED:i.add=null,this._pendingAdds--;case Ne.LOADING:}null==i.remove&&null==i.add&&this._pendingUpdates.delete(t)}0===this._pendingUpdates.size&&(this._finishPendingUpdates(),this.notifyChange("running"),this.notifyChange("dataUpdating"))}_processPendingUpdateNew(e){if(!e.add)return void(e.state=Ne.READY);const t=e.add.geometry;null==t||"mesh"!==t.type||t.loaded?this._processPendingUpdateNewRenderingInfo(e):this._processPendingUpdateNewMesh(e,t)}async _processPendingUpdateNewMesh(e,t){e.state=Ne.LOADING,e.abortController=new AbortController;const i=e.abortController.signal;try{await t.load({signal:i})}catch(r){return this._processPendingUpdateNewError(e,r)}e.abortController=null,this._processPendingUpdateNewRenderingInfo(e)}_processPendingUpdateNewError(e,t){e.abortController=null,(0,promiseUtils/* isAbortError */.zf)(t)?e.state=Ne.NEW:e.state=Ne.REJECTED}async _processPendingUpdateNewRenderingInfo(e){if(null==this.layer.renderer||"dictionary"!==this.layer.renderer.type)return e.renderingInfo=this._getRenderingInfo(e.add),void(e.state=Ne.READY);e.state=Ne.LOADING,e.abortController=new AbortController;let t=null;try{t=await this._getRenderingInfoAsync(e.add,{signal:e.abortController.signal})}catch(i){return e.abortController=null,void((0,promiseUtils/* isAbortError */.zf)(i)?e.state=Ne.NEW:e.state=Ne.REJECTED)}null==t?.symbol?(this._symbolWarningLogged||(this._symbolWarningLogged=!0,Logger/* default */.A.getLogger(this).warn(`Graphic in layer ${this.layer.id} has no symbol and will not render`)),e.renderingInfo=null):e.renderingInfo=t,e.state=Ne.READY}_addGraphic(e,t,i){if(this._graphicsWithoutSymbol.set(e.uid,e),null==t?.symbol||!(0,dehydratedFeatures/* hasGeometry */.N3)(e))return;const r=this.stage.renderView.olidRenderHelper;if(r&&this.setUidToIdOnAdd){const t=(0,basemapUtils/* isBasemapLayerView */.sG)(this.owner.view,this.owner.layerViewUid);r.setUidToObjectAndLayerId(e.objectId,e.uid,this.layer.id,this.owner.layerViewUid,!!this.layer.popupEnabled&&!t&&(0,popupUtils/* hasPopupTemplate */.d0)(this.layer,this.owner.view.popup?.defaultPopupTemplateEnabled))}const s=t.symbol,a=this.getOrCreateGraphics3DSymbol(s,t.renderer);if(null==a)return;this._expandComputedExtent(e.geometry);const n=this._beginGraphicUpdate(e),o=new Graphics3DGraphicCreationContext_r(e,t,this.layer);let l=!1;const h=e=>{e===a.symbol.id&&(l=!0)};this._whenSymbolRemoved.push(h);const d=()=>{if(--this._loadingSymbols,this.destroyed)return;this._whenSymbolRemoved.removeUnordered(h);if(this._graphicsWaitingForSymbol.get(e.uid)!==n||l||a.destroyed||this.graphicSymbolSupported&&e.symbol&&e.symbol.id!==a.symbol.id)--a.referenced,this._cleanupSymbols();else{const t=this._createGraphics3DGraphic(a,o);this._spatialIndex&&null!=t&&this._spatialIndex.add(t),--a.referenced,this._endGraphicUpdate(e)}this._featureStore.events.emit("changed"),this.owner.notifyContentGeometryUpdate?.(),this._labeler?.setDirty()},p=t=>{--this._loadingSymbols,this.destroyed||(this._whenSymbolRemoved.removeUnordered(h),l||((0,promiseUtils/* isAbortError */.zf)(t)?this.add([e]):a.destroyed||this._endGraphicUpdate(e,t)))};++this._loadingSymbols,i===UpdatePolicy/* UpdatePolicy */.q.ASYNC?a.load((()=>this._dataUpdateQueue.push(d,null).catch(promiseUtils/* ignoreAbortErrors */.QZ)),(e=>this._dataUpdateQueue.push((()=>p(e)),null).catch(promiseUtils/* ignoreAbortErrors */.QZ))):a.load(d,p)}_removeGraphic(e){const t=e.uid,i=this.graphics3DGraphics.get(t);if(i){i.graphics3DSymbol.onRemoveGraphic(i);const e=i.usedMemory,r=i.isElevationSource;this._conditionalRemove(i,t),this._spatialIndex?.remove(i);const s=i.graphics3DSymbol.symbol.id;this._graphicsBySymbol.get(s)?.delete(t),this._graphicsWithoutSymbol.delete(t),this._removeGraphics3DGraphic(t,e,r),i.destroy(),this._featureStore.events.emit("changed"),this.owner.notifyContentGeometryUpdate?.()}else this._graphicsWithoutSymbol.delete(t),this._graphicsWaitingForSymbol.delete(t),0===this._graphicsWaitingForSymbol.size&&(this._cleanupSymbols(),this.notifyChange("dataUpdating"))}_hasLabelingContext(e){if(e instanceof LabelSymbol3D/* default */.A||e instanceof TextSymbol/* default */.A){const t=this.symbolCreationContext.layer;return!!t.labelingInfo&&t.labelingInfo.some((t=>t.symbol===e))}return!1}_hasValidSymbolCreationContext(e){return!(e instanceof LabelSymbol3D/* default */.A&&!this._hasLabelingContext(e))||(Logger/* default */.A.getLogger(this).error("LabelSymbol3D is only valid as part of a LabelClass. Using LabelSymbol3D as a renderer symbol is not supported."),!1)}_getRenderingInfo(e,t=!0){const i=e.geometry;if(null==i)return t&&!this._geometryWarningLogged&&(this._geometryWarningLogged=!0,Logger/* default */.A.getLogger(this).warn(`Graphic in layer ${this.layer.id} has no geometry and will not render`)),null;if(!(0,projectionUtils.canProjectWithoutEngine)(i.spatialReference,this._viewSpatialReference))return t&&!this._geometryWarningLogged&&(this._geometryWarningLogged=!0,Logger/* default */.A.getLogger(this).warn(`Graphic in layer ${this.layer.id} has incompatible spatial reference and will not render`)),null;if(!this.graphicSymbolSupported&&null!=e.symbol)return t&&!this._symbolWarningLogged&&(this._symbolWarningLogged=!0,Logger/* default */.A.getLogger(this).warn(`Graphic in layer ${this.layer.id} is not allowed to have a symbol, use a renderer instead`)),null;const r=this.rendererHasGeometryOperations?(0,hydratedFeatures/* hydrateGraphic */.wP)(e,this.layer):e;let s;if(this.owner.getRenderingInfo&&(this.getRenderingInfoWithoutRenderer||null!=this.currentRenderer))s=this.owner.getRenderingInfo(r,this.currentRenderer,this._arcadeOnDemand);else{const e=r.symbol||(0,defaults3D/* getDefaultSymbol3D */.dX)(r.geometry);s=new RenderingInfo/* RenderingInfo */.$(null,e)}return null==s?.symbol?(t&&!this._symbolWarningLogged&&(this._symbolWarningLogged=!0,Logger/* default */.A.getLogger(this).warn(`Graphic in layer ${this.layer.id} has no symbol and will not render`)),null):s}_getRenderingInfoAsync(e,t){if(null==e.geometry)return this._geometryWarningLogged||(this._geometryWarningLogged=!0,Logger/* default */.A.getLogger(this).warn(`Graphic in layer ${this.layer.id} has no geometry and will not render`)),null;if(!this.graphicSymbolSupported&&null!=e.symbol)return this._symbolWarningLogged||(this._symbolWarningLogged=!0,Logger/* default */.A.getLogger(this).warn(`Graphic in layer ${this.layer.id} is not allowed to have a symbol, use a renderer instead`)),null;const i=this.rendererHasGeometryOperations?(0,hydratedFeatures/* hydrateGraphic */.wP)(e,this.layer):e;return this.owner.getRenderingInfoAsync(i,this.currentRenderer,this._arcadeOnDemand,t)}_createGraphics3DSymbol(e,t){if(!this._hasValidSymbolCreationContext(e))return null;const i=this._getConvertedSymbol(e);if(!i)return null;let r;if(null!=t&&"backgroundFillSymbol"in t&&t.backgroundFillSymbol){const e=(0,symbolConversion/* to3D */.t)(t.backgroundFillSymbol,{ignoreDrivers:!0});null!=e.symbol&&(r=e.symbol.symbolLayers)}const s=Graphics3DSymbolFactory_t(i,this.symbolCreationContext,r);return s.load((()=>{const e=s.extentPadding;e>this.extentPadding&&this._set("extentPadding",e),this.notifyChange("averageSymbolComplexity")}),(()=>{})),s}getOrCreateGraphics3DSymbol(e,t){let i=this._symbols.get(e.id);if(void 0===i){const r=this._unusedSymbolsCache.pop(e.id);i=null!=r?r:e instanceof WebStyleSymbol/* default */.A?new Graphics3DWebStyleSymbol_o(e,(e=>this._dataUpdateQueue.push(e,null)),(e=>this._createGraphics3DSymbol(e,t))):this._createGraphics3DSymbol(e,t),this._symbols.set(e.id,i),this._symbolMaterials=null}return null!=i&&++i.referenced,i}trackGraphicState(e){return null==this._graphicStateTracking&&(this._graphicStateTracking=new GraphicStateTracking_s(this)),this._graphicStateTracking.add(e)}_addGraphics3DGraphic(e){this._usedMemory+=e.usedMemory,this.graphics3DGraphics.set(e.graphic.uid,e),this._numberOfGraphics++,e.isElevationSource&&(this._numberOfGraphicsProvidingElevation++,this.updateStageLayerElevationProvider()),this._updateLayerVisibility()}_removeGraphics3DGraphic(e,t,i=!1){this._usedMemory-=t,this.graphics3DGraphics.delete(e),this._numberOfGraphics--,i&&(this._numberOfGraphicsProvidingElevation--,this.updateStageLayerElevationProvider()),this._updateLayerVisibility()}_createGraphics3DGraphic(e,t){const i=t.graphic;if(this._graphicsWithoutSymbol.delete(i.uid),!this._symbols.has(e.symbol.id))return this.add([i]),null;if(this.graphics3DGraphics.has(i.uid))return null;const r=e.createGraphics3DGraphic(t);if(null==r)return null;this._addGraphics3DGraphic(r);const s=e.symbol.id;this._graphicsBySymbol.has(s)||this._graphicsBySymbol.set(s,new Map),this._graphicsBySymbol.get(s).set(i.uid,r);if(r.isDraped&&this._graphicsDrapedUids.add(i.uid),r.centroid=null,null!=i.geometry&&"point"!==i.geometry.type&&(r.centroid=(0,graphicUtils/* computeCentroid */.W$)(i.geometry,this._viewSpatialReference)),this._updateUserVisibility(r),null!=this._scaleVisibility&&this._scaleVisibility.updateVisibility(r),null!=this._filterVisibility){const{defaultVisibility:e}=this._filterVisibility;r.setVisibilityFlag(enums_A.GRAPHIC,L.FILTER,e),e||this._filterVisibility.reapply()}this._deconflictor?.addGraphic(r),this._labeler?.addGraphic(r),this._objectStates?.addGraphic(r),r.initialize(this.stageLayer),null!=this._graphicStateTracking&&this._graphicStateTracking.addGraphic(r);const a=this._whenGraphics3DGraphicRequests[i.uid];return a&&(delete this._whenGraphics3DGraphicRequests[i.uid],a.resolve(r)),this._symbolMaterials=null,r}async rendererChange(e){if(this._rendererChangeAbortController=(0,maybe/* abortMaybe */.DC)(this._rendererChangeAbortController),e!==this.currentRenderer)if(this._validateRenderer(e),null==e&&this._currentRendererChange(null,!1),(0,rendererConversion/* isSupportedRenderer3D */.l)(e))if(e?.arcadeRequired){const t=new AbortController;this._rendererChangeAbortController=t;const{arcadeUtils:i}=await this._ensureArcade();(0,promiseUtils/* throwIfAborted */.Te)(t);const r=i.hasGeometryOperations(e);r&&(await i.enableGeometryOperations(),(0,promiseUtils/* throwIfAborted */.Te)(t)),this.effectiveUpdatePolicy===UpdatePolicy/* UpdatePolicy */.q.ASYNC?await this._updateQueue.push((()=>this._currentRendererChange(e,r)),t.signal):this._currentRendererChange(e,r),this._rendererChangeAbortController=null}else if(this.effectiveUpdatePolicy===UpdatePolicy/* UpdatePolicy */.q.ASYNC){const t=new AbortController;this._rendererChangeAbortController=t,await this._updateQueue.push((()=>this._currentRendererChange(e,!1)),t.signal),this._rendererChangeAbortController=null}else this._currentRendererChange(e,!1);else this._currentRendererChange(e,!1)}async _ensureArcade(){return null==this._arcadeOnDemand?(this._arcadeOnDemand=await (0,loadArcade/* loadArcade */.l)(),this._arcadeOnDemand):this._arcadeOnDemand}_currentRendererChange(e,t){this.currentRenderer=e,this.rendererHasGeometryOperations=t,this.symbolCreationContext.arcade=this._arcadeOnDemand;const i=this.symbolCreationContext.renderer;if(e===i)return;if(this._symbolConversionCache.clear(),this._unusedSymbolsCache.clear(),null==e)return this.symbolCreationContext.renderer=null,void this.recreateAllGraphicsAndSymbols();const r=(0,diffUtils/* diff */.Ui)(i,e);this._updateUnchangedSymbolMappings(r,e,i),this.symbolCreationContext.renderer=e,null!=r&&("complete"===r.type?this.recreateAllGraphicsAndSymbols():"partial"===r.type&&(this._applyRendererDiff(r,e,i)?this._labeler?.reset():this.recreateAllGraphicsAndSymbols()),this.notifyChange("averageSymbolComplexity"))}_diffHasSymbolChange(e){for(const t in e.diff)switch(t){case"visualVariables":case"defaultSymbol":case"uniqueValueInfos":break;case"uniqueValueGroups":case"authoringInfo":case"fieldDelimiter":delete e.diff[t];break;default:return!0}return!1}_applySymbolSetDiff(e,t,i){e=e||[],t=t||[];const r=[];for(const s of t){const t=this._graphicsBySymbol.get(s.id);t&&t.forEach(((a,n)=>{const o=a.graphic,l=this.layer instanceof Layer/* default */.A?this.layer:null,h=this._arcadeOnDemand;if(s===i.defaultSymbol&&i.getSymbol((0,hydratedFeatures/* hydrateGraphic */.wP)(o,l),{arcade:h})===i.defaultSymbol)return;const d=a.usedMemory;e.length||i.defaultSymbol?r.push(o):this._graphicsWithoutSymbol.set(n,o);const p=this.graphics3DGraphics.get(n);this._conditionalRemove(p,n),a.destroy(),t.delete(n),this._removeGraphics3DGraphic(n,d),this._updateLayerVisibility()})),this._whenSymbolRemoved.forAll((e=>e(s.id)))}(e.length||r.length)&&(this._graphicsWithoutSymbol.forEach((e=>r.push(e))),this._graphicsWithoutSymbol.clear(),this.add(r)),this._cleanupSymbols(),this._labeler?.setDirty(),this._deconflictor?.setDirty()}_applyUniqueValueRendererDiff(e,t,r){const s=e.diff.defaultSymbol,a=e.diff.uniqueValueInfos;if(s||a){const n=a?.changed,o=a?.unchanged;if(n&&o&&n.some((e=>o.some((t=>t.oldValue.symbol?.id===e.oldValue.symbol?.id)))))return!1;const l=a?a.added.map((e=>e.symbol)).filter(arrayUtils/* isSome */.Ru):[],h=a?a.removed.map((e=>e.symbol)).filter(arrayUtils/* isSome */.Ru):[];if(n)for(let e=0;e<n.length;e++)l.push(n[e].newValue.symbol),h.push(n[e].oldValue.symbol);return s?(r.defaultSymbol&&h.push(r.defaultSymbol),t.defaultSymbol&&l.push(t.defaultSymbol)):r.defaultSymbol&&l.length&&h.push(t.defaultSymbol),this._applySymbolSetDiff(l,h,t),delete e.diff.defaultSymbol,delete e.diff.uniqueValueInfos,!0}return!1}_calculateUnchangedSymbolMapping(e,t,i){if("unique-value"!==t?.type||"unique-value"!==i?.type||null!=e&&"partial"!==e.type)return[];const r=e=>null!=e?e.id:null,s=e&&e.diff,a=s?.defaultSymbol,n=s&&s.uniqueValueInfos;let o;if(n)o=n.unchanged.map((e=>({oldId:r(e.oldValue.symbol),newId:r(e.newValue.symbol)})));else{o=[];for(const e of i.uniqueValueInfos??[]){const i=r(e.symbol),s=t.uniqueValueInfos?.find((t=>t.value===e.value));s&&i!==r(s.symbol)&&o.push({oldId:i,newId:r(s.symbol)})}}return!a&&i.defaultSymbol&&o.push({oldId:r(i.defaultSymbol),newId:r(t.defaultSymbol)}),o}_updateSymbolMapping(e,t){const i=null!=t&&t?"string"==typeof t?t:t.id:null;if(null==e||e===i)return;const r=this._graphicsBySymbol.get(e);this._graphicsBySymbol.delete(e),void 0!==r&&this._graphicsBySymbol.set(i,r);const s=this._symbols.get(e);if(void 0!==s&&(this._symbols.delete(e),this._symbols.set(i,s),this._symbolMaterials=null,null!=s)){const e="string"==typeof t?null:t;null!=e?s.symbol=e:s.symbol.id=i}}_updateUnchangedSymbolMappings(e,t,i){const r=this._calculateUnchangedSymbolMapping(e,t,i);for(const{oldId:s,newId:a}of r)this._updateSymbolMapping(s,a)}_applyRendererDiff(e,t,i){if(this._diffHasSymbolChange(e))return!1;if(t instanceof UniqueValueRenderer/* default */.A&&i instanceof UniqueValueRenderer/* default */.A&&this._applyUniqueValueRendererDiff(e,t,i)&&0===Object.keys(e.diff).length)return!0;for(const r of this._graphicsBySymbol.keys()){const i=this._symbols.get(r);if(null!=i)switch(i.applyRendererDiff(e,t)){case graphics_interfaces/* ApplyRendererDiffResult */.w.RecreateSymbol:this._recreateSymbol(r);break;case graphics_interfaces/* ApplyRendererDiffResult */.w.RecreateGraphics:this._recreateGraphicsForSymbol(r);case graphics_interfaces/* ApplyRendererDiffResult */.w.FastUpdate:}}return!0}opacityChange(){this._updateStageLayerVisibility(),this.forEachGraphics3DSymbol(((e,t)=>e.globalPropertyChanged("opacity",t)))}_slicePlaneEnabledChange(e){e!==this.symbolCreationContext.slicePlaneEnabled&&(this.symbolCreationContext.slicePlaneEnabled=e,this.stageLayer.sliceable=e,this.forEachGraphics3DSymbol(((e,t)=>e.globalPropertyChanged("slicePlaneEnabled",t))),this._deconflictor?.slicePlaneEnabledChange(),this._labeler?.slicePlaneEnabledChange())}_physicalBasedRenderingChange(e){this.symbolCreationContext.physicalBasedRenderingEnabled=e,this.forEachGraphics3DSymbol(((e,t,i)=>{e.globalPropertyChanged("physicalBasedRenderingEnabled",t)||this._recreateSymbol(i)}))}_skipHighSymbolLoDsChange(e){this.symbolCreationContext.skipHighSymbolLods=e,this.forEachGraphics3DSymbol(((e,t,i)=>{e.globalPropertyChanged("skipHighSymbolLods",t)||this._recreateSymbol(i)}))}_pixelRatioChange(){this.forEachGraphics3DSymbol(((e,t,i)=>{e.globalPropertyChanged("pixelRatio",t)||this._recreateSymbol(i)}))}_signalUpdatingDuringAsyncLoadedGraphicsChange(){this._updatingPendingLoadedGraphicsChange&&this._updatingPendingLoadedGraphicsChange.remove(),this._updatingPendingLoadedGraphicsChange=(0,scheduling/* schedule */._)((()=>{this._updatingPendingLoadedGraphicsChange=null}))}setClippingExtent(e,t){const i=this.symbolCreationContext.clippingExtent,r=(0,aaBoundingRect/* create */.vt)();return extentUtils_u(e,r,t)?this.symbolCreationContext.clippingExtent=(0,aaBoundingBox/* fromRect */.Jt)((0,aaBoundingBox/* create */.vt)(),r):this.symbolCreationContext.clippingExtent=null,!(0,aaBoundingBox/* equals */.aI)(this.symbolCreationContext.clippingExtent,i)}modifyGraphics3DGraphicVisibilities(e){if(this.destroyed)return;let t=!1;this.graphics3DGraphics.forEach((i=>{e(i)&&(t=!0)})),t&&(this._labeler?.setDirty(),this._deconflictor?.setDirty())}forEachGraphics3DSymbol(e,t){for(const[i,r]of this._symbols){if(null==r)return;e(r,this._graphicsBySymbol.get(i)||$e,i)}if(!t?.excludeUnused)for(const i of this._unusedSymbolsCache)e(i,void 0,i.symbol.id)}updateGraphicsVisibilities(){null!=this._filterVisibility&&this._filterVisibility.reapply(),this.modifyGraphics3DGraphicVisibilities((e=>{const t=this._updateUserVisibility(e),i=!!this._scaleVisibility?.updateVisibility(e);return t||i}))}_hideAllGraphics(){this.modifyGraphics3DGraphicVisibilities((e=>e.setVisibilityFlag(enums_A.GRAPHIC,L.USER,!1)))}_validateRenderer(e){const t=()=>`'${this.layer.title?`${this.layer.title}, `:""}id:${this.layer.id}'`,i=(0,rendererConversion/* validateTo3D */.b)(e,{geometryType:this.layer?.geometryType,logWarning:(e,i)=>Logger/* default */.A.getLogger(this).warn(e,`Symbology conversion for layer ${t()}: ${i}`)});if(i){const e=`Renderer for layer ${t} is not supported in a SceneView`;Logger/* default */.A.getLogger(this).warn(e,i.message)}}_cleanupSymbols(){if(this._graphicsWaitingForSymbol.size>0||this._suspendSymbolCleanup)return;let e=!1;this._symbols.forEach(((t,i)=>{if(null==t||t.referenced>0)return;const r=this._graphicsBySymbol.get(i);r&&0!==r.size||(this._graphicsBySymbol.delete(i),this._symbols.delete(i),this._symbolMaterials=null,this._unusedSymbolsCache.put(i,t,MemCache/* MinPriority */.Ti),e=!0)})),e&&(this._recomputeExtentPadding(),this.notifyChange("averageSymbolComplexity"))}get test(){}get performanceInfo(){return new GraphicsCorePerformanceInfo_s(this.graphics3DGraphics.size,Array.from(this.graphics3DGraphics.values()).reduce(((e,t)=>e+(t.isVisible()?1:0)),0),this._graphicsWithoutSymbol.size,this._pendingUpdates.size)}};var Ne;(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],He.prototype,"computedExtent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],He.prototype,"currentRenderer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],He.prototype,"rendererHasGeometryOperations",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],He.prototype,"_frameTaskHandle",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],He.prototype,"_dataUpdateQueue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],He.prototype,"_updateQueue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],He.prototype,"_viewSpatialReference",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],He.prototype,"_rendererChangeAbortController",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],He.prototype,"_elevationInfoChangeAbortController",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],He.prototype,"_initializeAbortController",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],He.prototype,"_elevationAlignment",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],He.prototype,"_scaleVisibility",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],He.prototype,"_filterVisibility",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],He.prototype,"_initializePromise",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],He.prototype,"_spatialIndex",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],He.prototype,"extentPadding",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],He.prototype,"_updatingPendingLoadedGraphicsChange",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],He.prototype,"_featureStore",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],He.prototype,"_objectStates",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],He.prototype,"_loadingSymbols",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],He.prototype,"compressionTracker",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],He.prototype,"preferredUpdatePolicy",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],He.prototype,"_forcedUpdatePolicy",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],He.prototype,"effectiveUpdatePolicy",null),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],He.prototype,"elevationFeatureExpressionEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],He.prototype,"owner",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],He.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],He.prototype,"graphicSymbolSupported",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],He.prototype,"getRenderingInfoWithoutRenderer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],He.prototype,"componentFactories",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],He.prototype,"setUidToIdOnAdd",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],He.prototype,"featureStore",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],He.prototype,"initializePromise",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],He.prototype,"scaleVisibility",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],He.prototype,"elevationAlignment",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],He.prototype,"objectStates",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],He.prototype,"filterVisibility",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],He.prototype,"updating",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],He.prototype,"dataUpdating",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],He.prototype,"running",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],He.prototype,"suspendedOrOutsideOfView",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,dependsOn:[]})],He.prototype,"updatingRemaining",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],He.prototype,"displayFeatureLimit",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,dependsOn:[]})],He.prototype,"averageSymbolComplexity",null),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],He.prototype,"hasZ",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],He.prototype,"hasM",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],He.prototype,"_objectIdField",null),He=ke=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.3d.layers.graphics.Graphics3DCore")],He),function(e){e[e.NEW=0]="NEW",e[e.LOADING=1]="LOADING",e[e.READY=2]="READY",e[e.REJECTED=3]="REJECTED"}(Ne||(Ne={}));class Be{constructor(){this.add=null,this.renderingInfo=null,this.state=Ne.NEW,this.abortController=null,this.remove=null}clear(){this.add=null,this.renderingInfo=null,this.state=Ne.NEW,this.abortController=null,this.remove=null}}const qe=10,Ye=(0,vec3f64/* create */.vt)(),Qe=(0,vec3f64/* create */.vt)(),$e=new Map;

;// ../node_modules/@arcgis/core/views/3d/layers/graphics/ExtentSet.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const h=.05;class ExtentSet_a{constructor(){this._extents=new PooledArray/* default */.A({allocator:t=>t||(0,aaBoundingRect/* create */.vt)()}),this._tmpExtent=(0,aaBoundingRect/* create */.vt)(),this._dirty=!1}get empty(){return 0===this._extents.length}get size(){return this._extents.length}clear(){this._extents.clear()}add(t){this._contains(t)||(this._removeContained(t),(0,aaBoundingRect/* copy */.C)(this._extents.pushNew(),t),this._dirty=!0)}pop(){return this._dirty&&this._mergeTight(),this._extents.pop()}merge(t){return this._mergeTight(t),t.hasProgressed}_mergeTight(t=Scheduler/* noBudget */.Bb){const e=this._extents,o=new Set;let a=0;for(;a!==e.length;){e.sort(((t,e)=>t[0]-e[0])),a=e.length,o.clear();for(let i=0;i<e.length;++i){if(t.done)return;const a=e.at(i);if(a){for(let t=i+1;t<e.length;++t){const r=e.at(t);if(null==r||r[0]>=a[2])break;o.add(r)}o.forEach((i=>{if(a===i)return;if(i[2]<=a[0])return void o.delete(i);const l=(0,aaBoundingRect/* area */.Wc)(a),_=(0,aaBoundingRect/* area */.Wc)(i),c=this._tmpExtent;(0,aaBoundingRect/* expand */.fT)(a,i,c);const d=l+_;((0,aaBoundingRect/* area */.Wc)(c)-d)/d<h&&((0,aaBoundingRect/* copy */.C)(a,c),o.delete(i),e.remove(i),t.madeProgress())})),o.add(a)}}}this._dirty=!1}_contains(t){return this._extents.some((e=>(0,aaBoundingRect/* contains */.gR)(e,t)))}_removeContained(t){this._extents.filterInPlace((e=>!(0,aaBoundingRect/* contains */.gR)(t,e)))}get test(){}}

;// ../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DElevationAlignment.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let Graphics3DElevationAlignment_p=class extends Accessor/* default */.A{constructor(t){super(t),this._dirtyExtents=new ExtentSet_a,this._globalDirty=!1,this._averageExtentUpdateSize=0,this._dirtyGraphicsSet=new Set,this._updateElevation=!1,this.graphicsCoreOwner=null,this.graphicsCore=null,this.events=new Evented/* default */.A}initialize(){const t=this.elevationProvider,e=this.graphicsCoreOwner.view.resourceController.scheduler;this._task=e.registerTask(Graphics3DElevationAlignment_d(this.graphicsCore.layer.elevationInfo?.mode),this),this.addHandles([t.on("elevation-change",(t=>this._elevationChanged(t))),(0,reactiveUtils/* watch */.wB)((()=>this.graphicsCoreOwner.suspended),(()=>this._suspendedChange())),this._task,(0,reactiveUtils/* watch */.wB)((()=>Graphics3DElevationAlignment_d(this.graphicsCore.layer.elevationInfo?.mode)),(t=>this._task.priority=t))])}destroy(){this._dirtyGraphicsSet.clear(),this.graphicsCoreOwner=null,this.graphicsCore=null,this.queryGraphicUIDsInExtent=null,this.elevationProvider=null}clear(){this._dirtyGraphicsSet.clear(),this.notifyChange("updating")}_suspendedChange(){!0===this.graphicsCoreOwner.suspended?this._updateElevation=!1:!1===this.graphicsCoreOwner.suspended&&this._updateElevation&&(this._globalDirty=!0,this.notifyChange("updating"))}elevationInfoChange(){this._globalDirty=!0,this.notifyChange("updating")}get updating(){return this.running}get running(){return this._dirtyGraphicsSet.size>0||this._dirtyExtents&&!this._dirtyExtents.empty||this._globalDirty}get updatingRemaining(){return this._dirtyGraphicsSet.size+this._dirtyExtents.size*this._averageExtentUpdateSize}runTask(t){for(this._globalDirty&&(this._markAllGraphicsElevationDirty(),this._globalDirty=!1,t.madeProgress()),t.run((()=>this._dirtyExtents.merge(t)));this.running&&!t.done;)this._updateDirtyGraphics(t),this._updateDirtyExtents(t);this.notifyChange("updating")}_updateDirtyGraphics(t){const e=this.graphicsCoreOwner.view.renderCoordsHelper,i=this.graphicsCore.effectiveUpdatePolicy===UpdatePolicy/* UpdatePolicy */.q.ASYNC;for(const r of this._dirtyGraphicsSet.keys()){const s=this.graphicsCore.getGraphics3DGraphicById(r);if(this._dirtyGraphicsSet.delete(r),null!=s&&(s.alignWithElevation(this.elevationProvider,e,i),this.graphicsCore.deconflictor?.setDirty(),t.madeProgress()),t.done)return}}_updateDirtyExtents(t){for(;!this._dirtyExtents.empty&&!t.done;){const e=this._dirtyExtents.pop(),i=this.elevationProvider.spatialReference;this.events.emit("invalidate-elevation",{extent:e,spatialReference:i});const r=this._dirtyGraphicsSet.size;this.queryGraphicUIDsInExtent(e,i,(t=>{const e=this.graphicsCore.getGraphics3DGraphicById(t);null!=e&&e.needsElevationUpdates()&&this._dirtyGraphicsSet.add(t)})),this._averageExtentUpdateSize=.1*(this._dirtyGraphicsSet.size-r)+.9*this._averageExtentUpdateSize,t.madeProgress()}}_markAllGraphicsElevationDirty(){this._dirtyExtents.clear(),this._dirtyGraphicsSet.clear(),this.graphicsCore.graphics3DGraphics.forEach(((t,e)=>this._dirtyGraphicsSet.add(e)))}_elevationChanged(t){if("scene"===t.context&&(!this.graphicsCore.layer.elevationInfo||"relative-to-scene"!==this.graphicsCore.layer.elevationInfo.mode))return;const e=t.extent;if(this.graphicsCoreOwner.suspended){if(!this._updateElevation){const t=this.graphicsCore.computedExtent;t&&e[2]>t.xmin&&e[0]<t.xmax&&e[3]>t.ymin&&e[1]<t.ymax&&(this._updateElevation=!0)}this.events.emit("invalidate-elevation",t)}else e[0]===-1/0?this._globalDirty=!0:this._dirtyExtents.add(e),this.notifyChange("updating")}};function Graphics3DElevationAlignment_d(t){return null==t?Scheduler/* TaskPriority */.W6.ELEVATION_ALIGNMENT:"relative-to-scene"===t?Scheduler/* TaskPriority */.W6.ELEVATION_ALIGNMENT_SCENE:Scheduler/* TaskPriority */.W6.ELEVATION_ALIGNMENT}(0,tslib_es6._)([(0,property/* property */.MZ)()],Graphics3DElevationAlignment_p.prototype,"graphicsCoreOwner",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],Graphics3DElevationAlignment_p.prototype,"graphicsCore",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],Graphics3DElevationAlignment_p.prototype,"queryGraphicUIDsInExtent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],Graphics3DElevationAlignment_p.prototype,"elevationProvider",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],Graphics3DElevationAlignment_p.prototype,"updating",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],Graphics3DElevationAlignment_p.prototype,"updatingRemaining",null),Graphics3DElevationAlignment_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.3d.layers.graphics.Graphics3DElevationAlignment")],Graphics3DElevationAlignment_p);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/ellipsoidUtils.js
var ellipsoidUtils = __webpack_require__(47936);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/compilerUtils.js
var compilerUtils = __webpack_require__(73345);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(92504);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js
var mat4 = __webpack_require__(21742);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js
var mat4f64 = __webpack_require__(86128);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projection/computeTranslationToOriginAndRotation.js
var computeTranslationToOriginAndRotation = __webpack_require__(59538);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/frustum.js
var frustum = __webpack_require__(94982);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/lineSegment.js
var lineSegment = __webpack_require__(22759);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/plane.js
var plane = __webpack_require__(38774);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/ray.js
var ray = __webpack_require__(10151);
;// ../node_modules/@arcgis/core/views/3d/support/intersectionUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function intersectionUtils_p(r,n,t){return r[0]*n[0]+r[1]*n[1]+r[2]*n[2]+r[3]<t}function intersectionUtils_a(r,n,t){const i=n[0],e=n[1],c=n[2];return!(r[0][0]*i+r[0][1]*e+r[0][2]*c+r[0][3]>t)&&(!(r[1][0]*i+r[1][1]*e+r[1][2]*c+r[1][3]>t)&&(!(r[2][0]*i+r[2][1]*e+r[2][2]*c+r[2][3]>t)&&(!(r[3][0]*i+r[3][1]*e+r[3][2]*c+r[3][3]>t)&&(!(r[4][0]*i+r[4][1]*e+r[4][2]*c+r[4][3]>t)&&!(r[5][0]*i+r[5][1]*e+r[5][2]*c+r[5][3]>t)))))}function intersectionUtils_m(r,n,t,i){return intersectionUtils_h(r,n,null,intersectionUtils_v(i,n,t,!1))}function intersectionUtils_d(r,n){for(let t=0;t<6;t++){if(s(r[t],n)>0)return!1}return!0}function g(r,n,t,i){return intersectionUtils_h(r,n,t,intersectionUtils_v(i,n,t,!0))}function intersectionUtils_j(r,c,o,u){const f=n(o,t(r,u,c));return i(r,c,e(r,o,f))}const intersectionUtils_b={dir:(0,vec3f64/* create */.vt)(),len:0,clip:(0,vec2f64/* create */.vt)()};function intersectionUtils_v(r,n,i,f){const l=intersectionUtils_b;return r?(i&&f&&(l.len=(0,vec32.j)(n,i)),(0,vec32.c)(l.dir,r)):f?(l.len=(0,vec32.j)(n,i),(0,vec32.d)(l.dir,i,n),(0,vec32.g)(l.dir,l.dir,1/l.len)):((0,vec32.d)(l.dir,i,n),(0,vec32.n)(l.dir,l.dir)),l}function intersectionUtils_x(r,t,i){const e=(0,vec32.e)((0,plane/* getNormal */.Qj)(r),i.dir),c=-(0,plane/* signedDistance */.mN)(r,t);if(c<0&&e>=0)return!1;if(e>-1e-6&&e<1e-6)return c>0;if((c<0||e<0)&&!(c<0&&e<0))return!0;const o=c/e;return e>0?o<i.clip[1]&&(i.clip[1]=o):o>i.clip[0]&&(i.clip[0]=o),i.clip[0]<=i.clip[1]}function intersectionUtils_h(r,n,t,i){i.clip[0]=0,i.clip[1]=t?i.len:Number.MAX_VALUE;for(let e=0;e<r.length;e++)if(!intersectionUtils_x(r[e],n,i))return!1;return!0}

;// ../node_modules/@arcgis/core/views/3d/support/FrustumExtentIntersection.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const M=.5*Math.PI,F=M/Math.PI*180;class N{constructor(t){this._extent=new Array(4),this._planes=new Array(6),this._maxSpan=0,this._center={origin:(0,vec3f64/* create */.vt)(),direction:(0,vec3f64/* create */.vt)()},this._renderCoordsHelper=t.renderCoordsHelper;for(let e=0;e<4;e++)this._extent[e]={origin:(0,vec3f64/* create */.vt)(),direction:(0,vec3f64/* create */.vt)(),cap:{next:null,direction:(0,vec3f64/* create */.vt)()}},this._planes[e]=(0,plane/* create */.vt)();this._planes[frustum/* PlaneIndex */.FB.NEAR]=(0,plane/* create */.vt)(),this._planes[frustum/* PlaneIndex */.FB.FAR]=(0,plane/* create */.vt)(),this._planesWithoutFar=this._planes.slice(0,5)}update(t,e,i,r=!0){const a=this._extent;this._toRenderBoundingExtent(t,e,i),(0,vec32.f)(this._center.origin,a[0].origin,a[2].origin),(0,vec32.g)(this._center.origin,this._center.origin,.5),this._renderCoordsHelper.worldUpAtPosition(this._center.origin,this._center.direction),r||(0,vec32.g)(this._center.direction,this._center.direction,-1);for(let n=0;n<4;n++){const t=a[n];this._renderCoordsHelper.worldUpAtPosition(t.origin,t.direction);const e=a[3===n?0:n+1];t.cap.next=e.origin,(0,vec32.E)(t.cap.direction,t.origin,e.origin),(0,plane/* fromVectorsAndPoint */.mR)(t.direction,t.cap.direction,t.origin,this._planes[n]),r||(0,vec32.g)(t.direction,t.direction,-1)}(0,plane/* fromVectorsAndPoint */.mR)(a[0].cap.direction,a[1].cap.direction,a[0].origin,this._planes[frustum/* PlaneIndex */.FB.NEAR]),r?(0,plane/* negate */.ze)(this._planes[frustum/* PlaneIndex */.FB.NEAR],this._planes[frustum/* PlaneIndex */.FB.FAR]):((0,plane/* copy */.C)(this._planes[frustum/* PlaneIndex */.FB.FAR],this._planes[frustum/* PlaneIndex */.FB.NEAR]),(0,plane/* negate */.ze)(this._planes[frustum/* PlaneIndex */.FB.NEAR],this._planes[frustum/* PlaneIndex */.FB.NEAR])),this._maxSpan=Math.max(Math.abs(t[0]-t[2]),Math.abs(t[1]-t[3])),this._maxSpanSpatialReference=e,this._minGlobalAltitude=.9*(0,ellipsoidUtils/* getReferenceEllipsoid */.tO)(this._maxSpanSpatialReference).radius}isVisibleInFrustum(t,e,i=!1){if(null==t)return!1;if(this._renderCoordsHelper.viewingMode===ViewingMode/* ViewingMode */.RT.Global){const i=this._maxSpanSpatialReference.isGeographic?F:M*e;if(this._maxSpan>i)return!0;if(null!=t.altitude&&t.altitude>=this._minGlobalAltitude)return this._isVisibleInFrustumGlobal(t)}if(0===this._maxSpan){const e=this._extent[0];return!(i||!t.intersectsRay((0,ray/* wrap */.LV)(e.origin,e.direction)))}for(let n=0;n<this._extent.length;n++){const e=this._extent[n];if(!i&&t.intersectsRay((0,ray/* wrap */.LV)(e.origin,e.direction)))return!0;if(t.intersectsLineSegment((0,lineSegment/* fromPoints */.Cr)(e.origin,e.cap.next,k),e.cap.direction))return!0}const r=i?this._planes:this._planesWithoutFar;for(let n=0;n<t.lines.length;n++){const e=t.lines[n];if(g(r,e.origin,e.endpoint,e.direction))return!0}return!1}_toRenderBoundingExtentGlobal(t,r,n){const o=5;(0,aaBoundingRect/* center */.gX)(t,V),V[2]=n,(0,computeTranslationToOriginAndRotation/* computeTranslationToOriginAndRotation */.l)(r,V,FrustumExtentIntersection_v,this._renderCoordsHelper.spatialReference),(0,mat4/* invert */.B8)(I,FrustumExtentIntersection_v),(0,aaBoundingBox/* empty */.Ie)(FrustumExtentIntersection_L);for(const{x0:i,x1:s,y0:c,y1:l}of FrustumExtentIntersection_U)for(let p=0;p<o;p++){const h=p/(o-1);V[0]=(0,mathUtils/* lerp */.Cc)(t[i],t[s],h),V[1]=(0,mathUtils/* lerp */.Cc)(t[c],t[l],h),V[2]=n,(0,projectVectorToVector/* projectVectorToVector */.F)(V,r,V,this._renderCoordsHelper.spatialReference),(0,vec32.t)(V,V,I),(0,aaBoundingBox/* expandWithVec3 */.iT)(FrustumExtentIntersection_L,V)}(0,vec32.i)(this._extent[0].origin,FrustumExtentIntersection_L[0],FrustumExtentIntersection_L[1],FrustumExtentIntersection_L[2]),(0,vec32.i)(this._extent[1].origin,FrustumExtentIntersection_L[3],FrustumExtentIntersection_L[1],FrustumExtentIntersection_L[2]),(0,vec32.i)(this._extent[2].origin,FrustumExtentIntersection_L[3],FrustumExtentIntersection_L[4],FrustumExtentIntersection_L[2]),(0,vec32.i)(this._extent[3].origin,FrustumExtentIntersection_L[0],FrustumExtentIntersection_L[4],FrustumExtentIntersection_L[2]);for(let e=0;e<4;++e)(0,vec32.t)(this._extent[e].origin,this._extent[e].origin,FrustumExtentIntersection_v)}_toRenderBoundingExtentLocal(t,e,i){projectBoundingRect_i(t,e,P,this._renderCoordsHelper.spatialReference),(0,vec32.i)(this._extent[0].origin,P[0],P[1],i),(0,vec32.i)(this._extent[1].origin,P[2],P[1],i),(0,vec32.i)(this._extent[2].origin,P[2],P[3],i),(0,vec32.i)(this._extent[3].origin,P[0],P[3],i)}_toRenderBoundingExtent(e,i,r){switch(this._renderCoordsHelper.viewingMode){case ViewingMode/* ViewingMode */.RT.Global:this._toRenderBoundingExtentGlobal(e,i,r);break;case ViewingMode/* ViewingMode */.RT.Local:this._toRenderBoundingExtentLocal(e,i,r);break;default:(0,compilerUtils/* neverReached */.Xb)(this._renderCoordsHelper.viewingMode)}}_isVisibleInFrustumGlobal(t){if((0,plane/* signedDistance */.mN)(t.planes[frustum/* PlaneIndex */.FB.NEAR],this._center.origin)<0&&(0,vec32.e)(this._center.direction,t.direction)<0)return!0;for(let e=0;e<4;e++){const i=this._extent[e];if((0,plane/* signedDistance */.mN)(t.planes[frustum/* PlaneIndex */.FB.NEAR],i.origin)<0&&(0,vec32.e)(i.direction,t.direction)<0)return!0}return!1}}const FrustumExtentIntersection_U=[{x0:0,y0:1,x1:2,y1:1},{x0:0,y0:3,x1:2,y1:3},{x0:0,y0:1,x1:0,y1:3},{x0:2,y0:1,x1:2,y1:3}],V=(0,vec3f64/* create */.vt)(),FrustumExtentIntersection_v=(0,mat4f64/* create */.vt)(),I=(0,mat4f64/* create */.vt)(),FrustumExtentIntersection_L=(0,aaBoundingBox/* create */.vt)(),P=(0,aaBoundingRect/* create */.vt)(),k=(0,lineSegment/* create */.vt)();

;// ../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DFrustumVisibility.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const Graphics3DFrustumVisibility_h=1.2;let Graphics3DFrustumVisibility_u=class extends Accessor/* default */.A{constructor(e){super(e),this.suspended=!1,this._extent=null,this._extentIntersectionDirty=!0,this._isVisibleBelowSurfaceInternal=!1,this.graphicsCoreOwner=null,this.updating=!0}initialize(){const{graphicsCoreOwner:e}=this;this._extentIntersection=new N({renderCoordsHelper:e.view.renderCoordsHelper});const t=e.view,n=t.basemapTerrain,o=t.resourceController.scheduler;this.addHandles([t.on("resize",(()=>this._viewChange())),(0,reactiveUtils/* watch */.wB)((()=>t.state.camera),(()=>this._viewChange()),reactiveUtils/* sync */.OH),o.registerTask(Scheduler/* TaskPriority */.W6.FRUSTUM_VISIBILITY,this),(0,reactiveUtils/* watch */.wB)((()=>n.visibleElevationBounds),(()=>this._elevationBoundsChange()))]),"local"===t.viewingMode?this._isVisibleBelowSurface=!0:this.addHandles([(0,reactiveUtils/* watch */.wB)((()=>[n.baseOpacity,n.wireframe,t.map?.ground?.navigationConstraint?.type]),(()=>this._updateIsVisibleBelowSurface()),reactiveUtils/* initial */.Vh)])}destroy(){this._set("graphicsCoreOwner",null),this._extent=null,this._extentIntersection=null}_setDirty(){this.updating||this._set("updating",!0)}setExtent(e){this._extent=e,this._extentIntersectionDirty=!0,this._setDirty()}_viewChange(){this._setDirty()}_elevationBoundsChange(){this._setDirty(),this._extentIntersectionDirty=!0}set _isVisibleBelowSurface(e){this._isVisibleBelowSurfaceInternal=e,this._setDirty(),this._extentIntersectionDirty=!0}_updateIsVisibleBelowSurface(){const e=this.graphicsCoreOwner.view,t=e.basemapTerrain,s="local"===e.viewingMode,i="none"===e.map.ground?.navigationConstraint?.type;this._isVisibleBelowSurface=s||!t.opaque||i}_updateExtentIntersection(){if(!this._extentIntersectionDirty)return;this._extentIntersectionDirty=!1;const e=this.graphicsCoreOwner.view;let t;if(this._isVisibleBelowSurfaceInternal)t=-.3*(0,ellipsoidUtils/* getReferenceEllipsoid */.tO)(e.spatialReference).radius;else{const{min:s,max:i}=e.basemapTerrain.visibleElevationBounds;t=s-Math.max(1,(i-s)*(Graphics3DFrustumVisibility_h-1))}this._extentIntersection.update(this._extent,e.spatialReference,t)}get running(){return this.updating}runTask(e){if(this._set("updating",!1),!this._extent)return this._set("suspended",!1),Yield/* Yield */.G;this._updateExtentIntersection();const t=this.graphicsCoreOwner.view.frustum,s=(0,ellipsoidUtils/* getReferenceEllipsoid */.tO)(this.graphicsCoreOwner.view.spatialReference).radius;this._set("suspended",!this._extentIntersection.isVisibleInFrustum(t,s)),e.madeProgress()}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],Graphics3DFrustumVisibility_u.prototype,"suspended",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],Graphics3DFrustumVisibility_u.prototype,"graphicsCoreOwner",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],Graphics3DFrustumVisibility_u.prototype,"updating",void 0),Graphics3DFrustumVisibility_u=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.3d.layers.graphics.Graphics3DFrustumVisibility")],Graphics3DFrustumVisibility_u);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js
var basicInterfaces = __webpack_require__(91013);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Object3DStateSet.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Object3DStateSet_t{}class Object3DStateSet_s extends Object3DStateSet_t{constructor(e,t){super(),this.objectStateId=e,this.object=t}remove(){this.object.removeStateID(this.objectStateId)}}class Object3DStateSet_o extends Object3DStateSet_t{constructor(e,t,s){super(),this.objectStateId=e,this.object=t,this.owner=s}remove(){this.owner.removeRenderGeometryObjectState(this.object,this.objectStateId)}}class c extends Object3DStateSet_t{constructor(e,t){super(),this.objectStateId=e,this._removeCallback=t,this.object=null}remove(){this._removeCallback(this.objectStateId)}}class Object3DStateSet_r{constructor(){this._items=[]}addObject(e,t){this._items.push(new Object3DStateSet_s(t,e))}addRenderGeometry(e,t,s){this._items.push(new Object3DStateSet_o(t,e,s))}addExternal(e,t){this._items.push(new c(t,e))}remove(e){this._remove((t=>t.objectStateId===e))}removeByObject(e){this._remove((t=>t.object===e))}removeAll(){this._items.forEach((e=>e.remove())),this._items=[]}_remove(e){const{_items:t}=this;for(let s=t.length-1;s>=0;--s){const o=t[s];e(o)&&(o.remove(),t.splice(s,1))}}}class Object3DStateSet_i extends Object3DStateSet_r{constructor(){super(...arguments),this.stateType=basicInterfaces/* Object3DState */.Mg.MaskOccludee}}class Object3DStateSet_h extends Object3DStateSet_r{constructor(t){super(),this.highlightName=t,this.stateType=basicInterfaces/* Object3DState */.Mg.Highlight}}

;// ../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DObjectStateSet.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Graphics3DObjectStateSet_i{constructor(t){this.objectIdField=t,this.ids=new Set,this.paused=!1}hasGraphic(t){const e=this.objectIdField?t.graphic.attributes[this.objectIdField]:t.graphic.uid;return this.ids.has(e)}}class Graphics3DObjectStateSet_c extends Graphics3DObjectStateSet_i{constructor(s){super(s),this.stateType=basicInterfaces/* Object3DState */.Mg.MaskOccludee,this.objectStateSet=new Object3DStateSet_i}}class Graphics3DObjectStateSet_h extends Graphics3DObjectStateSet_i{constructor(e,i){super(i),this.highlightName=e,this.stateType=basicInterfaces/* Object3DState */.Mg.Highlight,this.objectStateSet=new Object3DStateSet_h(e)}}

;// ../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DObjectStates.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Graphics3DObjectStates_a{constructor(t){this._graphicsCore=t,this._stateSets=new Array}destroy(){this.reset(),this._stateSets=null}reset(){this._stateSets&&(this._stateSets.forEach((t=>t.objectStateSet.removeAll())),this._stateSets.length=0)}acquireOccludeeSet(s){const a=new Graphics3DObjectStateSet_c(s);this._stateSets.push(a);const i=(0,handleUtils/* makeHandle */.hA)((()=>this.releaseSet(a)));return{set:a,handle:i}}acquireHighlightSet(e,a){const i=new Graphics3DObjectStateSet_h(e,a);this._stateSets.push(i);const c=(0,handleUtils/* makeHandle */.hA)((()=>this.releaseSet(i)));return{set:i,handle:c}}releaseSet(t){t.objectStateSet.removeAll();const e=this._stateSets?this._stateSets.indexOf(t):-1;-1!==e&&this._stateSets.splice(e,1)}setUid(t,e){t.ids.add(e);const s=this._graphicsCore.graphics3DGraphics.get(e);s&&s.addObjectStateSet(t.objectStateSet)}setUids(t,e){e.forEach((e=>this.setUid(t,e)))}setObjectIds(t,e){e.forEach((e=>t.ids.add(e))),this._initializeSet(t)}addGraphic(t){this._stateSets.forEach((e=>{!e.paused&&e.hasGraphic(t)&&t.addObjectStateSet(e.objectStateSet)}))}removeGraphic(t){this._stateSets.forEach((e=>{e.hasGraphic(t)&&t.removeObjectState(e.objectStateSet)}))}allGraphicsDeleted(){this._stateSets&&this._stateSets.forEach((t=>t.objectStateSet.removeAll()))}_initializeSet(t){const e=this._graphicsCore.graphics3DGraphics;t.objectIdField?e.forEach((e=>{e&&t.hasGraphic(e)&&e.addObjectStateSet(t.objectStateSet)})):t.ids.forEach((s=>{const a=e.get(s);a&&a.addObjectStateSet(t.objectStateSet)}))}get test(){}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/support/layerViewUtils.js
var layerViewUtils = __webpack_require__(38201);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DScaleVisibility.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let Graphics3DScaleVisibility_u=class extends Accessor/* default */.A{constructor(e){super(e),this._scaleRangeActive=!1,this._layerScaleRangeVisibilityQuery=!1,this._extent=null,this._updatingHandles=new UpdatingHandles/* UpdatingHandles */.U,this.graphicsCoreOwner=null,this.layer=null,this.queryGraphicUIDsInExtent=null,this.graphicsCore=null,this.basemapTerrain=null,this.layerScaleEnabled=!0,this.suspended=!1,this._dirty=!0}initialize(){this.updateScaleRangeActive();const e=this.graphicsCoreOwner.view.resourceController.scheduler;this.addHandles(e.registerTask(Scheduler/* TaskPriority */.W6.SCALE_VISIBILITY,this)),this._updatingHandles.add((()=>this.layer.effectiveScaleRange),(()=>this.layerMinMaxScaleChangeHandler()))}destroy(){this._updatingHandles.destroy(),this.removeHandles(),this._dirty=!1,this._extent=null,this.graphicsCoreOwner=null,this.layer=null,this.queryGraphicUIDsInExtent=null,this.graphicsCore=null,this.basemapTerrain=null}get updating(){return this._dirty||this._updatingHandles.updating}_setDirty(){this._dirty=!0}setExtent(e){const i=this.graphicsCoreOwner.view.spatialReference,t=this.graphicsCoreOwner.view.basemapTerrain.spatialReference;if(i===t)this._extent=e??null;else{const r=(0,aaBoundingRect/* create */.vt)();projectBoundingRect_i(e,i,r,t)?this._extent=r:this._extent=null}this._setDirty()}scaleRangeActive(){return this._scaleRangeActive}updateScaleRangeActive(){const e=this.layer,i=e.effectiveScaleRange;let t=this.layerScaleEnabled&&null!=i&&Graphics3DScaleVisibility_g(i.minScale,i.maxScale);e.labelingInfo&&!t&&(t=e.labelingInfo.some((e=>e&&Graphics3DScaleVisibility_g(e.minScale??0,e.maxScale??0))));const r=this._scaleRangeActive!==t;return this._scaleRangeActive=t,t&&!this.hasHandles(Graphics3DScaleVisibility_y)&&this.basemapTerrain?(this.addHandles(this.basemapTerrain.on("scale-change",(e=>this._scaleUpdateHandler(e))),Graphics3DScaleVisibility_y),this.layerScaleEnabled&&this.addHandles(this.basemapTerrain.on("tiles-visibility-changed",(()=>this._setDirty())),Graphics3DScaleVisibility_y)):!t&&this.hasHandles(Graphics3DScaleVisibility_y)&&this.removeHandles(Graphics3DScaleVisibility_y),r}get running(){return!(!this.graphicsCoreOwner.view.basemapTerrain||!this.updating)}runTask(e){const i=this.graphicsCoreOwner.view.basemapTerrain;if(this._extent&&i&&i.ready&&this._scaleRangeActive&&this.layerScaleEnabled){if(this._layerScaleRangeVisibilityQuery)return Yield/* Yield */.G;{this._layerScaleRangeVisibilityQuery=!0;const{minScale:e,maxScale:t}=this.layer.effectiveScaleRange;i.queryVisibleScaleRange(this._extent,e,t,(e=>this._finishUpdate(e)))}}else this._finishUpdate(!0);e.madeProgress()}_finishUpdate(e){this._layerScaleRangeVisibilityQuery=!1,this._set("suspended",!e),this._dirty=!1}_visibleAtLayerScale(e){const i=this.layer.effectiveScaleRange;return!this.layerScaleEnabled||(0,layerViewUtils/* scaleBoundsPredicate */.JU)(e,i.minScale||0,i.maxScale||0)}_visibleAtLabelScale(e,i){return (0,layerViewUtils/* scaleBoundsPredicate */.JU)(e,i.minScale||0,i.maxScale||0)}_graphicScale(e){let i;if(null!=e.centroid?i=e.centroid:null!=e.graphic.geometry&&"point"===e.graphic.geometry.type&&(i=e.graphic.geometry),i){return this.graphicsCoreOwner.view.basemapTerrain?this.graphicsCoreOwner.view.basemapTerrain.getScale(i):1}return null}_graphicVisible(e){if(!this.layerScaleEnabled)return!0;const i=this._graphicScale(e);return this._visibleAtLayerScale(i)}updateVisibility(e){if(!this._scaleRangeActive)return!1;const i=this._graphicVisible(e);return e.setVisibilityFlag(enums_A.GRAPHIC,L.SCALE_RANGE,i)}updateGraphicLabelScaleVisibility(e){if(!this._scaleRangeActive)return!1;if(!e.labelLayers.length)return!1;const i=this._graphicScale(e),t=this._updateLabelScaleVisibility(e,i);return t&&(this.graphicsCore.deconflictor?.setDirty(),this.graphicsCore.labeler?.setDirty()),t}_updateLabelScaleVisibility(e,i){if(!e.labelLayers.length)return!1;const t=e.labelLayers[0].labelClass;if(null!=t?.minScale&&null!=t.maxScale){const r=this._visibleAtLabelScale(i,t);if(e.setVisibilityFlag(enums_A.LABEL,L.SCALE_RANGE,r))return!0}return!1}_scaleUpdateHandler(e){if(this._setDirty(),!this.graphicsCore.visible)return;const i=e.extent,r=e.scale,s=this._visibleAtLayerScale(r);let a=!1;const n=this.graphicsCoreOwner.view.spatialReference,h=e.spatialReference;if(null==h)return void Logger/* default */.A.getLogger(this).error("scaleUpdate: Internal error, no SpatialReference given for tiles");const p=!h.equals(n);if(p){if(!projectBoundingRect_i(i,h,Graphics3DScaleVisibility_m,n))return void Logger/* default */.A.getLogger(this).error("scaleUpdate: Internal error, cannot project AABR from "+h+" to wkid "+n)}const d=p?Graphics3DScaleVisibility_m:i;this.queryGraphicUIDsInExtent(d,n,(e=>{const t=this.graphicsCore.getGraphics3DGraphicById(e);if(null==t)return;const l=t.centroid;null!=l&&(i[0]>l.x||i[1]>l.y||i[2]<l.x||i[3]<l.y)||(t.setVisibilityFlag(enums_A.GRAPHIC,L.SCALE_RANGE,s)&&(a=!0),this._updateLabelScaleVisibility(t,r)&&(a=!0))})),a&&(this.graphicsCore.deconflictor?.setDirty(),this.graphicsCore.labeler?.setDirty())}layerMinMaxScaleChangeHandler(){this.updateScaleRangeActive()&&!this._scaleRangeActive?this.graphicsCore.modifyGraphics3DGraphicVisibilities((e=>e.setVisibilityFlag(enums_A.GRAPHIC,L.SCALE_RANGE,!0))):this._scaleRangeActive&&this.graphicsCore.updateGraphicsVisibilities(),this._setDirty()}};function Graphics3DScaleVisibility_g(e,i){return e>0||i>0}(0,tslib_es6._)([(0,property/* property */.MZ)()],Graphics3DScaleVisibility_u.prototype,"graphicsCoreOwner",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],Graphics3DScaleVisibility_u.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],Graphics3DScaleVisibility_u.prototype,"queryGraphicUIDsInExtent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],Graphics3DScaleVisibility_u.prototype,"graphicsCore",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],Graphics3DScaleVisibility_u.prototype,"basemapTerrain",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],Graphics3DScaleVisibility_u.prototype,"layerScaleEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],Graphics3DScaleVisibility_u.prototype,"suspended",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],Graphics3DScaleVisibility_u.prototype,"updating",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],Graphics3DScaleVisibility_u.prototype,"_dirty",void 0),Graphics3DScaleVisibility_u=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.3d.layers.graphics.Graphics3DScaleVisibility")],Graphics3DScaleVisibility_u);const Graphics3DScaleVisibility_y="terrain-events",Graphics3DScaleVisibility_m=(0,aaBoundingRect/* create */.vt)();

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(48982);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/guards.js
var guards = __webpack_require__(8701);
;// ../node_modules/@arcgis/core/views/3d/layers/support/highlightUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function highlightUtils_e(o){return Collection/* default */.A.isCollection(o)?o.toArray():Array.isArray(o)?o:highlightUtils_i(o)||(0,guards/* isGraphic */.DU)(o)||highlightUtils_c(o)?[o]:highlightUtils_n}function highlightUtils_i(r){return"number"==typeof r||"string"==typeof r}const highlightUtils_n=[],highlightUtils_s=(0,handleUtils/* makeHandle */.hA)();function highlightUtils_c(r){return"esri.views.3d.layers.i3s.PointCloudGraphic"===r.declaredClass}

;// ../node_modules/@arcgis/core/views/3d/layers/graphics/GraphicsProcessor.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let GraphicsProcessor_x=class extends Accessor/* default */.A{constructor(i){super(i),this.drapeSourcePriorityOffset=0,this.type="graphics-3d",this.graphicsCore=null,this.drapeSourceType=interfaces/* DrapeSourceType */.Om.Features,this.scaleVisibilityEnabled=!1,this.frustumVisibilityEnabled=!1,this._suspendResumeExtent=null,this._updatingHandles=new UpdatingHandles/* UpdatingHandles */.U}initialize(){const{layer:i}=this,t="effectiveScaleRange"in i?i:null,e=!(0,layerViewUtils/* hasLayerBasedScaleVisibility */.j)()&&this.scaleVisibilityEnabled&&null!=t,r=new He({owner:this,layer:this.owner.layer,preferredUpdatePolicy:UpdatePolicy/* UpdatePolicy */.q.SYNC,graphicSymbolSupported:!0,componentFactories:{elevationAlignment:(i,t)=>new Graphics3DElevationAlignment_p({graphicsCoreOwner:this,graphicsCore:i,queryGraphicUIDsInExtent:t,elevationProvider:this.view.elevationProvider}),scaleVisibility:e?(i,e)=>new Graphics3DScaleVisibility_u({graphicsCoreOwner:this,layer:t,queryGraphicUIDsInExtent:e,graphicsCore:i,basemapTerrain:this.owner.view.basemapTerrain}):null,objectStates:i=>new Graphics3DObjectStates_a(i)}});if(this._set("graphicsCore",r),this.frustumVisibilityEnabled&&this._set("frustumVisibility",new Graphics3DFrustumVisibility_u({graphicsCoreOwner:this})),"fullOpacity"in this.owner){const i=this.owner;this._updatingHandles.add((()=>i.fullOpacity),(()=>this.graphicsCore.opacityChange()))}if("elevationInfo"in i){const t=i;this._updatingHandles.add((()=>t.elevationInfo),((i,t)=>{(0,diffUtils/* diff */.Ui)(i,t)&&this._updatingHandles.addPromise(this.graphicsCore.elevationInfoChange())}))}this._set("initializePromise",this._initializeAsync()),this._updatingHandles.addPromise(this.initializePromise)}async _initializeAsync(){try{await this.graphicsCore.initializePromise}catch(i){if((0,promiseUtils/* isAbortError */.zf)(i))return;throw i}this.destroyed||(this.addHandles((0,reactiveUtils/* watch */.wB)((()=>this.view.clippingArea),(()=>this._updateClippingExtent()),reactiveUtils/* sync */.OH)),this._updateClippingExtent(),this._setupSuspendResumeExtent(),this.graphicsCore.startCreateGraphics())}destroy(){this._updatingHandles.destroy(),this._set("frustumVisibility",(0,maybe/* destroyMaybe */.pR)(this.frustumVisibility)),this._set("graphicsCore",(0,maybe/* destroyMaybe */.pR)(this.graphicsCore))}get layer(){return this.owner.layer}get layerViewUid(){return this.owner.uid}get view(){return this.owner.view}get scaleVisibility(){return this.graphicsCore?.scaleVisibility}get elevationAlignment(){return this.graphicsCore?.elevationAlignment}get scaleVisibilitySuspended(){return!(null==this.scaleVisibility||!this.scaleVisibility.suspended)}get frustumVisibilitySuspended(){return null!=this.frustumVisibility&&this.frustumVisibility.suspended}get suspended(){return this.owner.suspended??!1}get updating(){return!!(this.graphicsCore?.updating||null!=this.scaleVisibility&&this.scaleVisibility.updating||null!=this.frustumVisibility&&this.frustumVisibility.updating||this._updatingHandles.updating)}get graphics3DGraphics(){return this.graphicsCore?.graphics3DGraphics}get graphics3DGraphicsByObjectID(){return this.graphicsCore?.graphics3DGraphicsByObjectID}get loadedGraphics(){return this.owner.loadedGraphics}get fullOpacity(){return this.owner.fullOpacity??1}get slicePlaneEnabled(){return this.owner.slicePlaneEnabled}get updatePolicy(){return this.owner.updatePolicy}notifyGraphicGeometryChanged(i){this.graphicsCore.notifyGraphicGeometryChanged(i)}notifyGraphicVisibilityChanged(i){this.graphicsCore.notifyGraphicVisibilityChanged(i)}notifyContentGeometryUpdate(){this.owner.notifyContentGeometryUpdate?.()}getRenderingInfo(i,t,e){const r=(0,renderingInfoUtils/* getRenderingInfo */.vl)(i,{renderer:t,arcade:e});if(r?.color){const i=r.color;i[0]=i[0]/255,i[1]=i[1]/255,i[2]=i[2]/255}return r}getRenderingInfoAsync(i,t,e,r){return (0,renderingInfoUtils/* getRenderingInfoAsync */.LO)(i,{renderer:t,arcade:e,...r})}getHit(i){if(this.owner.loadedGraphics){const t=this.owner.loadedGraphics.find((t=>t.uid===i));if(t){const i=this.layer instanceof Layer/* default */.A?this.layer:null,e=(0,hydratedFeatures/* hydrateGraphic */.wP)(t,i);return{type:"graphic",graphic:e,layer:e.layer}}}return null}whenGraphicBounds(i,t){return this.graphicsCore?this.graphicsCore.whenGraphicBounds(i,t):Promise.reject()}computeAttachmentOrigin(i,t){return this.graphicsCore?this.graphicsCore.computeAttachmentOrigin(i,t):null}getSymbolLayerSize(i,t){return this.graphicsCore?this.graphicsCore.getSymbolLayerSize(i,t):null}maskOccludee(i){const t=this.graphicsCore?.objectStates;if(!t)return (0,handleUtils/* makeHandle */.hA)();const{set:e,handle:s}=t.acquireOccludeeSet(null);return t.setUid(e,i.uid),s}highlight(i,e){const r=this.graphicsCore?.objectStates;if(!r)return GraphicsProcessor_P;if(i instanceof Query/* default */.A)return GraphicsProcessor_P;const s=highlightUtils_e(i);if(0===s.length)return GraphicsProcessor_P;if(s[0]instanceof Graphic/* default */.A){const i=s.map((i=>i.uid)),{set:t,handle:n}=r.acquireHighlightSet(e,null);return r.setUids(t,i),n}if("number"==typeof s[0]){const i=s,{set:t,handle:n}=r.acquireHighlightSet(e,null);return r.setObjectIds(t,i),n}return GraphicsProcessor_P}_setupSuspendResumeExtent(){const{scaleVisibility:i,frustumVisibility:t}=this;if(null==i&&null==t)return;const e=({computedExtent:e,extentPadding:r})=>{this._suspendResumeExtent=(0,graphicUtils/* enlargeExtent */.t8)(e,this._suspendResumeExtent,constants/* suspendResumeExtentOptimism */.qD,r),null!=i&&i.setExtent(this._suspendResumeExtent),null!=t&&t.setExtent(this._suspendResumeExtent)};this.addHandles((0,reactiveUtils/* watch */.wB)((()=>({computedExtent:this.graphicsCore?.computedExtent,extentPadding:this.graphicsCore?.extentPadding})),(i=>e(i)),reactiveUtils/* syncAndInitial */.pc))}_updateClippingExtent(){const i=this.view.clippingArea;this.graphicsCore.setClippingExtent(i,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()}};(0,tslib_es6._)([(0,property/* property */.MZ)()],GraphicsProcessor_x.prototype,"drapeSourcePriorityOffset",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],GraphicsProcessor_x.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],GraphicsProcessor_x.prototype,"owner",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],GraphicsProcessor_x.prototype,"layer",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],GraphicsProcessor_x.prototype,"layerViewUid",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],GraphicsProcessor_x.prototype,"view",null),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],GraphicsProcessor_x.prototype,"graphicsCore",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],GraphicsProcessor_x.prototype,"scaleVisibility",null),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],GraphicsProcessor_x.prototype,"frustumVisibility",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],GraphicsProcessor_x.prototype,"elevationAlignment",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],GraphicsProcessor_x.prototype,"scaleVisibilitySuspended",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],GraphicsProcessor_x.prototype,"frustumVisibilitySuspended",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],GraphicsProcessor_x.prototype,"suspended",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],GraphicsProcessor_x.prototype,"updating",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],GraphicsProcessor_x.prototype,"loadedGraphics",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],GraphicsProcessor_x.prototype,"fullOpacity",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],GraphicsProcessor_x.prototype,"slicePlaneEnabled",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],GraphicsProcessor_x.prototype,"drapeSourceType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],GraphicsProcessor_x.prototype,"updatePolicy",null),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],GraphicsProcessor_x.prototype,"scaleVisibilityEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],GraphicsProcessor_x.prototype,"frustumVisibilityEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],GraphicsProcessor_x.prototype,"initializePromise",void 0),GraphicsProcessor_x=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.3d.layers.graphics.GraphicsProcessor")],GraphicsProcessor_x);const GraphicsProcessor_P=(0,handleUtils/* makeHandle */.hA)();

;// ../node_modules/@arcgis/core/views/3d/layers/graphics/queryForSymbologySnapping.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function queryForSymbologySnapping_r(r,a,s){if(null==r||0===a.candidates.length)return queryForSymbologySnapping_t;const i=r.graphics3DGraphicsByObjectID??r.graphics3DGraphics,o=[],c=[],{renderer:d}=r,l=null!=d&&"arcadeRequired"in d&&d.arcadeRequired?(0,loadArcade/* loadArcade */.l)():null,p=async(e,{graphic:n,graphics3DSymbol:t})=>{const a=await l,i=await r.getRenderingInfoAsync(n,d,a,{signal:s});return null==i?[]:t.queryForSnapping(e,g,i,s)},{candidates:u,spatialReference:g}=a;for(let e=0;e<u.length;++e){const n=u[e],{objectId:r}=n,t="number"==typeof r?i?.get(r):void 0;if(null==t)continue;const{graphics3DSymbol:a}=t;a.symbologySnappingSupported&&(o.push(p(n,t)),c.push(e))}if(0===o.length)return queryForSymbologySnapping_t;const h=await Promise.all(o);(0,promiseUtils/* throwIfAborted */.Te)(s);const f=[],m=[];for(let e=0;e<h.length;++e){const n=h[e],r=c[e];for(const e of n)f.push(e),m.push(r)}return{candidates:f,sourceCandidateIndices:m}}const queryForSymbologySnapping_t={candidates:[],sourceCandidateIndices:[]};

;// ../node_modules/@arcgis/core/views/3d/layers/support/LayerViewPerformanceInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class LayerViewPerformanceInfo_t{constructor(t,e=0,s=0,r=0,i=0,o=null){this.usedMemory=t,this.displayedFeatures=e,this.totalFeatures=s,this.maximumFeatures=r,this.nodes=i,this.core=o}}function LayerViewPerformanceInfo_e(t){return"performanceInfo"in t}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/layers/LayerView.js
var LayerView = __webpack_require__(9049);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/support/HighlightDefaults.js
var HighlightDefaults = __webpack_require__(29736);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/support/projectionUtils.js
var support_projectionUtils = __webpack_require__(62352);
;// ../node_modules/@arcgis/core/views/3d/layers/GraphicsLayerView3D.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let f=class extends(l(LayerView/* default */.A)){constructor(){super(...arguments),this.type="graphics-3d",this.symbologySnappingSupported=!0,this._slicePlaneEnabled=!1,this.fullExtentInLocalViewSpatialReference=null,this.ignoresMemoryFactor=!0}get highlightOptions(){return null}initialize(){this._set("processor",new GraphicsProcessor_x({owner:this,scaleVisibilityEnabled:!0,frustumVisibilityEnabled:!0})),this.addResolvingPromise(this.processor.initializePromise),this.addHandles(this.layer.on("graphic-update",(e=>this.processor.graphicsCore.graphicUpdateHandler(e)))),this.layer.internal?this.notifyChange("updating"):("local"===this.view.viewingMode&&this.addResolvingPromise((async()=>this.fullExtentInLocalViewSpatialReference=await (0,support_projectionUtils/* projectWithZConversionSilent */.n)(this.layer.fullExtent,this.view.spatialReference))()),this.addHandles((0,reactiveUtils/* when */.z7)((()=>this.view?.basemapTerrain?.ready),(()=>()=>this.notifyChange("updating")),{once:!0})))}destroy(){this._updatingHandles.removeAll(),this._set("processor",(0,maybe/* destroyMaybe */.pR)(this.processor))}get loadedGraphics(){return this.layer.graphics}get legendEnabled(){return this.canResume()&&!this.processor?.frustumVisibilitySuspended}get visibleAtCurrentScale(){return (0,layerViewUtils/* hasLayerBasedScaleVisibility */.j)()?(0,layerViewUtils/* isInEffectiveScaleRange */.E5)(this.layer.effectiveScaleRange,this.view.scale):!this.processor?.scaleVisibilitySuspended}get slicePlaneEnabled(){const e=this.layer.internal;return this._slicePlaneEnabled&&!e}set slicePlaneEnabled(e){this._slicePlaneEnabled=e}getSuspendInfo(){const e=super.getSuspendInfo();return e.outsideOfView=this.processor?.frustumVisibilitySuspended??!1,e}getHit(e){return this.processor.getHit(e)}whenGraphicBounds(e,r){return this.processor.whenGraphicBounds(e,r)}computeAttachmentOrigin(e,r){return this.processor?.computeAttachmentOrigin(e,r)}getSymbolLayerSize(e,r){return this.processor.getSymbolLayerSize(e,r)}queryGraphics(){return Promise.resolve(this.loadedGraphics)}maskOccludee(e){return this.processor.maskOccludee(e)}highlight(e,r){return this.processor.highlight(e,r?.name??HighlightDefaults/* defaultHighlightName */.Tv)}notifyContentGeometryUpdate(){this.emit("visible-geometry-changed")}async elevationAlignPointsInFeatures(e,s){const{processor:i}=this;if(null==i?.graphics3DGraphics)throw new core_Error/* default */.A("graphicslayerview3d:missing-processor","A Graphics3D processor is needed to resolve graphics elevation.");const{graphics3DGraphics:t}=i,o=e=>"number"==typeof e?t.get(e):void 0;return elevationAlignPointsInFeatures_l(this.view,this.layer,o,e,s)}async queryForSymbologySnapping(e,r){return queryForSymbologySnapping_r(this.processor,e,r)}get updatePolicy(){return this.processor?.graphicsCore.effectiveUpdatePolicy||UpdatePolicy/* UpdatePolicy */.q.SYNC}isUpdating(){return this.view&&this.layer&&!(!this.processor?.updating&&(this.layer.internal||this.view.basemapTerrain?.ready))}get performanceInfo(){return new LayerViewPerformanceInfo_t(this.usedMemory,this.loadedGraphics.length,-1,-1)}get usedMemory(){return this.processor?.graphicsCore?.usedMemory??0}get unloadedMemory(){return this.processor?.graphicsCore?.unprocessedMemoryEstimate}get test(){return{graphics3DProcessor:this.processor,loadedGraphics:this.loadedGraphics}}};(0,tslib_es6._)([(0,property/* property */.MZ)()],f.prototype,"highlightOptions",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],f.prototype,"loadedGraphics",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],f.prototype,"legendEnabled",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],f.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],f.prototype,"processor",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],f.prototype,"visibleAtCurrentScale",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],f.prototype,"_slicePlaneEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean})],f.prototype,"slicePlaneEnabled",null),f=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.3d.layers.GraphicsLayerView3D")],f);const GraphicsLayerView3D_b=f;


/***/ }),

/***/ 88237:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B6: () => (/* binding */ u),
/* harmony export */   G8: () => (/* binding */ p),
/* harmony export */   Jf: () => (/* binding */ b),
/* harmony export */   Zd: () => (/* binding */ I)
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21742);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86128);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24121);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58359);
/* harmony import */ var _geometry_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59538);
/* harmony import */ var _geometry_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84119);
/* harmony import */ var _elevationAlignmentUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27716);
/* harmony import */ var _support_debugFlags_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19620);
/* harmony import */ var _support_ElevationProvider_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(27054);
/* harmony import */ var _webgl_engine_lib_GeometryWithMapPositions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(94137);
/* harmony import */ var _webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(50645);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function u(t,e,o,n,r){const a=t.stageObject,s=a.geometries;let i=0;for(const l of s){if(!(0,_webgl_engine_lib_GeometryWithMapPositions_js__WEBPACK_IMPORTED_MODULE_8__/* .isGeometryWithMapPositions */ .p)(l))continue;const{update:t,averageGeometrySampledElevation:s}=M(l,e,o,n,r);i+=s,t&&a.geometryVertexAttributeUpdated(l,_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_9__/* .VertexAttribute */ .r.POSITION)}return i/s.length}function p(e,n,a,s,m,f){const c=e.stageObject,u=n.centerPointInElevationSR;let p=0;if(c.usesVerticalDistanceToGround)s(u,E),(0,_elevationAlignmentUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .updateVertexPointGroundDistance */ .ai)(c,E.verticalDistanceToGround),p=E.sampledElevation;else{s(u,E);"absolute-height"!==n.mode&&(p=E.sampledElevation)}const b=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__/* .copy */ .C)(g,f??c.transformation),I=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.i)(v,b[12],b[13],b[14]);_support_debugFlags_js__WEBPACK_IMPORTED_MODULE_7__/* .debugFlags */ .b.TESTS_DISABLE_OPTIMIZATIONS?(T[0]=u.x,T[1]=u.y,T[2]=E.z,(0,_geometry_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_4__/* .computeTranslationToOriginAndRotation */ .l)(u.spatialReference,T,b,m.spatialReference)&&(f?(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__/* .copy */ .C)(f,b):c.transformation=b)):m.setAltitudeOfTransformation(E.z,b);const S=d/m.unitInMeters;return(Math.abs(b[12]-I[0])>=S||Math.abs(b[13]-I[1])>=S||Math.abs(b[14]-I[2])>=S)&&(f?(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__/* .copy */ .C)(f,b):c.transformation=b),p}const g=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)();function b(t,e,n,a,s){const i=t.graphics3DSymbolLayer.lodRenderer;if(null==i)return 0;const m=e.centerPointInElevationSR;a(m,E);const f="absolute-height"!==e.mode?E.sampledElevation:0,c=i.instanceData,u=t.instanceIndex,p=h;c.getGlobalTransform(u,p);const g=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.i)(v,p[12],p[13],p[14]);_support_debugFlags_js__WEBPACK_IMPORTED_MODULE_7__/* .debugFlags */ .b.TESTS_DISABLE_OPTIMIZATIONS?(T[0]=m.x,T[1]=m.y,T[2]=E.z,(0,_geometry_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_4__/* .computeTranslationToOriginAndRotation */ .l)(m.spatialReference,T,p,s.spatialReference)&&c.setGlobalTransform(u,p)):s.setAltitudeOfTransformation(E.z,p);const b=d/s.unitInMeters;return(_support_debugFlags_js__WEBPACK_IMPORTED_MODULE_7__/* .debugFlags */ .b.TESTS_DISABLE_OPTIMIZATIONS||Math.abs(p[12]-g[0])>=b||Math.abs(p[13]-g[1])>=b||Math.abs(p[14]-g[2])>=b)&&c.setGlobalTransform(u,p),f}function I(t,e,o,n,r){const a=t.stageObject,s=a.geometries;if(0===s.length)return 0;let i=0,l=null,m=0,u=!1;for(const p of s){if(!(0,_webgl_engine_lib_GeometryWithMapPositions_js__WEBPACK_IMPORTED_MODULE_8__/* .isGeometryWithMapPositions */ .p)(p))continue;const t=p.attributes.get(_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_9__/* .VertexAttribute */ .r.POSITION);if(t!==l){const{update:a,averageGeometrySampledElevation:s}=M(p,e,o,n,r);m=s,l=t,u=a}u&&a.geometryVertexAttributeUpdated(p,_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_9__/* .VertexAttribute */ .r.POSITION),i+=m}return i/s.length}const d=.01,T=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .vt)(),S=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .vt)(),O=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .vt)(),h=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)(),v=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .vt)(),E=new _elevationAlignmentUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .SampleElevationInfo */ .Uk;function M(t,e,o,n,r){let s=!1;const i=t.transformation,f=e.requiresSampledElevationInfo;S[0]=i[12],S[1]=i[13],S[2]=i[14],t.invalidateBoundingInfo();const u=t.getMutableAttribute(_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_9__/* .VertexAttribute */ .r.POSITION),p=u.data,g=u.size,b=p.length/g,I=new _support_ElevationProvider_js__WEBPACK_IMPORTED_MODULE_10__/* .SamplePosition */ .aY(t.mapPositions,o);let h=0,v=0;for(let m=0;m<b;m++){if(O[0]=p[h],O[1]=p[h+1],O[2]=p[h+2],n(I,E),f&&(v+=E.sampledElevation),_support_debugFlags_js__WEBPACK_IMPORTED_MODULE_7__/* .debugFlags */ .b.TESTS_DISABLE_OPTIMIZATIONS)p[h]=I.array[I.offset],p[h+1]=I.array[I.offset+1],p[h+2]=E.z,(0,_geometry_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_5__.projectBuffer)(p,o,h,p,r.spatialReference,h,1),p[h]-=S[0],p[h+1]-=S[1],p[h+2]-=S[2],s=!0;else{T[0]=p[h]+S[0],T[1]=p[h+1]+S[1],T[2]=p[h+2]+S[2],r.setAltitude(T,E.z),p[h]=T[0]-S[0],p[h+1]=T[1]-S[1],p[h+2]=T[2]-S[2];const t=d/r.unitInMeters;(Math.abs(O[0]-p[h])>=t||Math.abs(O[1]-p[h+1])>=t||Math.abs(O[2]-p[h+2])>=t)&&(s=!0)}h+=g,I.offset+=3}return v/=b,{update:s,averageGeometrySampledElevation:v}}


/***/ }),

/***/ 58343:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _symbols_support_unitConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97046);
/* harmony import */ var _featureExpressionInfoUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9104);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class o{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.centerPointInElevationSR=null,this.mode=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=(0,_symbols_support_unitConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getMetersPerUnit */ .Ao)(e)}get requiresSampledElevationInfo(){return"absolute-height"!==this.mode}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(t){this._meterUnitOffset=t,this._renderUnitOffset=0}set offsetElevationInfoUnits(t){this._meterUnitOffset=t*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(t){this._renderUnitOffset+=t}geometryZWithOffset(t,e){const n=this.calculateOffsetRenderUnits(e);return null!=this.featureExpressionInfoContext?n:t+n}calculateOffsetRenderUnits(t){let e=this._meterUnitOffset;const s=this.featureExpressionInfoContext;return null!=s&&(e+=(0,_featureExpressionInfoUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .execute */ .g7)(s)*this._metersPerElevationInfoUnit),e/t.unitInMeters+this._renderUnitOffset}setFromElevationInfo(t){this.mode=t.mode,this.unit=(0,_symbols_support_unitConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .supportsUnit */ .Tg)(t.unit)?t.unit:"meters",this.offsetElevationInfoUnits=t.offset??0}updateFeatureExpressionInfoContext(t,e,n){if(null==t)return void(this._featureExpressionInfoContext=null);const o=t?.arcade;o&&null!=e&&null!=n?(this._featureExpressionInfoContext=(0,_featureExpressionInfoUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(t),(0,_featureExpressionInfoUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .setContextFeature */ .gf)(this._featureExpressionInfoContext,(0,_featureExpressionInfoUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .createFeature */ .VG)(o.modules,e,n))):this._featureExpressionInfoContext=t}static fromElevationInfo(t){const e=new o;return null!=t&&e.setFromElevationInfo(t),e}}


/***/ }),

/***/ 45418:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ m),
/* harmony export */   Y: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24121);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58359);
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4675);
/* harmony import */ var _chunks_sphere_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31803);
/* harmony import */ var _elevationAlignmentUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27716);
/* harmony import */ var _featureExpressionInfoUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9104);
/* harmony import */ var _graphicUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54096);
/* harmony import */ var _webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(91013);
/* harmony import */ var _webgl_engine_lib_edgeRendering_interfaces_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34443);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class m{constructor(e,t,i){this.baseMaterial=e,this.edgeMaterial=t,this.hasSlicePlane=i}}class p{get isElevationSource(){return!!this.stageObject.lastValidElevationBB}constructor(e,t,i,s,a,n=null){this.graphics3DSymbolLayer=e,this.stageObject=t,this._sharedResource=i,this.elevationAligner=s,this.elevationContext=a,this._edgeState=n,this.type="object3d",this._stageLayer=null,this._visible=!1,this._addedToStage=!1,this.alignedSampledElevation=0,this.needsElevationUpdates=!1,this.useObjectOriginAsAttachmentOrigin=!1}initialize(e){this._stageLayer=e}destroy(){if(!this._stageLayer)return;const e=this._stageLayer.stage;this._addedToStage&&(this._stageLayer.remove(this.stageObject),this._addedToStage=!1),e.renderer.edgeView?.removeObject(this.stageObject),this.stageObject.dispose(),this._sharedResource?.release(),this._visible=!1,this._stageLayer=null}get usedMemory(){return this.graphics3DSymbolLayer.usedMemory}layerOpacityChanged(e,t){const{stageObject:i,_edgeState:s,_stageLayer:a}=this;if(null==s)return;const n=v(s.baseMaterial);s.edgeMaterial.objectTransparency!==n&&(s.edgeMaterial.objectTransparency=n,this.resetEdgeObject(t)),a.stage.renderer.withEdgeView((t=>t.updateAllComponentOpacities(i,[e])))}updateHighlights(e){}slicePlaneEnabledChanged(e,t){const{stageObject:i,_edgeState:s,_stageLayer:a}=this;null!=s&&a.stage.renderer.withEdgeView((a=>{a.updateAllComponentMaterials(i,s.edgeMaterial,e,!t),s.hasSlicePlane=e}))}setVisibility(e){const{_edgeState:t,stageObject:i,_stageLayer:s}=this;null!=s&&this.visible!==e&&(this._visible=e,i.visible=e,e&&!this._addedToStage&&(s.add(i),this._addedToStage=!0),null!=t&&s.stage.renderer.withEdgeView((s=>{s.hasObject(i)?s.updateObjectVisibility(i,e):e&&this._addOrUpdateEdgeObject(t,s,!1)})))}get visible(){return this._visible}alignWithElevation(e,t,i,s){if(null==this.elevationAligner)return;null!=i&&(0,_featureExpressionInfoUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .setContextFeature */ .gf)(this.elevationContext.featureExpressionInfoContext,i);const a=(i,s)=>(0,_elevationAlignmentUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .evaluateElevationInfoAtPoint */ .sE)(i,e,this.elevationContext,t,s);this.alignedSampledElevation=this.elevationAligner(this,this.elevationContext,e.spatialReference,a,t),this.resetEdgeObject(s)}alignWithAbsoluteElevation(e,t,i){const s=(t,i)=>{i.sampledElevation=e,i.verticalDistanceToGround=0,i.z=e};this.alignedSampledElevation=this.elevationAligner(this,this.elevationContext,null,s,t),this.resetEdgeObject(i)}getCenterObjectSpace(t=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)()){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.c)(t,(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_3__.a)(this.stageObject.boundingVolumeObjectSpace.bounds))}getBoundingBoxObjectSpace(e=(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)()){const t=this.stageObject.boundingVolumeObjectSpace;return (0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__/* .setMin */ .Ne)(e,t.min),(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__/* .setMax */ .vI)(e,t.max),e}computeAttachmentOrigin(e){const s=this.stageObject.effectiveTransformation;if(this.useObjectOriginAsAttachmentOrigin)e.render.origin[0]+=s[12],e.render.origin[1]+=s[13],e.render.origin[2]+=s[14],e.render.num++;else for(const a of this.stageObject.geometries)a.computeAttachmentOrigin(S)&&((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.t)(S,S,s),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.f)(e.render.origin,e.render.origin,S),e.render.num++)}async getProjectedBoundingBox(e,i,s,a,n){const r=this.getBoundingBoxObjectSpace(n),h=_,d=(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__/* .isPoint */ .fT)(r)?1:h.length;for(let o=0;o<d;o++){const e=h[o];y[0]=r[e[0]],y[1]=r[e[1]],y[2]=r[e[2]],(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.t)(y,y,this.stageObject.transformation),f[3*o]=y[0],f[3*o+1]=y[1],f[3*o+2]=y[2]}if(!e(f,0,d))return null;(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__/* .empty */ .Ie)(r);let b=null;this.calculateRelativeScreenBounds&&(b=this.calculateRelativeScreenBounds());for(let t=0;t<3*d;t+=3){for(let e=0;e<3;e++)r[e]=Math.min(r[e],f[t+e]),r[e+3]=Math.max(r[e+3],f[t+e]);b&&s.push({location:f.slice(t,t+3),screenSpaceBoundingRect:b})}if(i?.service&&"absolute-height"!==this.elevationContext.mode){(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__/* .center */ .gX)(r,S);const e="relative-to-scene"===this.elevationContext.mode?"scene":"ground";let t=0;if(i.useViewElevation)t=i.service.getElevation(S[0],S[1],e)??0;else try{const s=(0,_graphicUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .demResolutionForBoundingBox */ .vY)(r,i.service.spatialReference,i);t=await i.service.queryElevation(S[0],S[1],a,s,e)??0}catch(O){}(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__/* .offset */ .cY)(r,0,0,-this.alignedSampledElevation+t)}return r}addObjectState(e){e.stateType===_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_7__/* .Object3DState */ .Mg.Highlight&&e.addObject(this.stageObject,this.stageObject.highlight(e.highlightName)),e.stateType===_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_7__/* .Object3DState */ .Mg.MaskOccludee&&e.addObject(this.stageObject,this.stageObject.maskOccludee())}removeObjectState(e){e.removeByObject(this.stageObject)}resetEdgeObject(e){const{_edgeState:t,stageObject:i,_stageLayer:s,_visible:a}=this;null!=t&&s.stage.renderer.withEdgeView((s=>{a?this._addOrUpdateEdgeObject(t,s,e):s.removeObject(i)}))}_addOrUpdateEdgeObject(e,t,i){const s=v(e.baseMaterial);e.edgeMaterial.objectTransparency=s,t.addOrUpdateObject3D(this.stageObject,e.edgeMaterial,e.hasSlicePlane,!i).then((()=>this._stageLayer?.sync()))}}function v(e){return e.transparent?_webgl_engine_lib_edgeRendering_interfaces_js__WEBPACK_IMPORTED_MODULE_8__/* .Transparency */ .x.TRANSPARENT:_webgl_engine_lib_edgeRendering_interfaces_js__WEBPACK_IMPORTED_MODULE_8__/* .Transparency */ .x.OPAQUE}const f=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],y=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)(),S=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)(),_=[[0,1,2],[3,1,2],[0,4,2],[3,4,2],[0,1,5],[3,1,5],[0,4,5],[3,4,5]];


/***/ }),

/***/ 90997:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class t{constructor(t,e=null){this.labelText=e,this.elevationOffset=t??0}}


/***/ }),

/***/ 59574:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RL: () => (/* binding */ t),
/* harmony export */   ZC: () => (/* binding */ c),
/* harmony export */   kf: () => (/* binding */ o)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const o=3,t=3,c=10;


/***/ }),

/***/ 43138:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ y)
/* harmony export */ });
/* unused harmony export getDrivenProperties */
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96220);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(539);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58359);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28152);
/* harmony import */ var _geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65319);
/* harmony import */ var _defaultSymbolComplexity_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1088);
/* harmony import */ var _elevationAlignmentUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27716);
/* harmony import */ var _ElevationContext_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(58343);
/* harmony import */ var _featureExpressionInfoUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9104);
/* harmony import */ var _graphicUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(54096);
/* harmony import */ var _interfaces_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(62545);
/* harmony import */ var _Loadable_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20561);
/* harmony import */ var _support_FastSymbolUpdates_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(69463);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const h=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.getLogger("esri.views.3d.layers.graphics.Graphics3DSymbolLayer");class y extends _Loadable_js__WEBPACK_IMPORTED_MODULE_12__/* .Loadable */ .x{constructor(e,t,i,r,o=!0){super(i.schedule),this.symbol=e,this.symbolLayer=t,this._context=i,this._drivenOpacityFallbackAlwaysOpaque=o,this.ignoreDrivers=!1,this._drivenProperties={color:!1,opacity:!1,opacityAlwaysOpaque:!0,size:!1,rotation:!1},this._materials=[],this.logger=h(),this._elevationOptions={supportsOffsetAdjustment:!1,supportsOnTheGround:!0},this.skipHighSymbolLodsChanged=!0,this._renderPriority=r.renderPriority,this._renderPriorityStep=r.renderPriorityStep,this._elevationContext=new _ElevationContext_js__WEBPACK_IMPORTED_MODULE_8__/* .ElevationContext */ .F,this.updateComplexity(),this.ignoreDrivers=r.ignoreDrivers,this.ignoreDrivers||(this._drivenProperties=f(this._context.renderer,o)),this._updateElevationContext()}get view(){return this._context.stage.view}getCachedSize(){return null}get extentPadding(){return 0}get materials(){return this._materials}get usedMemory(){const e=this.complexity;if(null==e)return 0;return(this.draped?e.memory.draped:e.memory).bytesPerFeature}_drivenPropertiesChanged(e){if(this.ignoreDrivers)return!1;const t=this._drivenProperties,i=f(e,this._drivenOpacityFallbackAlwaysOpaque);return i.color!==t.color||i.opacity!==t.opacity||i.opacityAlwaysOpaque!==t.opacityAlwaysOpaque||i.size!==t.size||i.rotation!==t.rotation}get needsDrivenTransparentPass(){return(this._drivenProperties.color||this._drivenProperties.opacity)&&!this._drivenProperties.opacityAlwaysOpaque}_logGeometryCreationWarnings(e,t,i,r){const o=e.projectionSuccess,n="polygons"in e?e.polygons:null,s=`${r} geometry failed to be created`;o?!this._logGeometryValidationWarnings(t,i,r)&&n&&0===n.length&&"rings"===i&&t.length>0&&t[0].length>2&&h().warnOncePerTick(`${s} (filled rings should use clockwise winding - try reversing the order of vertices)`):h().warnOncePerTick(`${s} (failed to project geometry to view spatial reference)`)}updateFocus(e,t){}_logGeometryValidationWarnings(e,t,i){const r=`${i} geometry failed to be created`;return!e.length||1===e.length&&!e[0].length?(h().warnOncePerTick(`${r} (no ${t} were defined)`),!0):(!Array.isArray(e)||!Array.isArray(e[0]))&&(h().warnOncePerTick(`${r} (${t} should be defined as a 2D array)`),!0)}_validateGeometry(e,t=null,i=null){if(null!=t&&!t.includes(e.type))return this.logger.warn("unsupported geometry type for "+i+` symbol: ${e.type}`),!1;switch(e.type){case"point":{const t=e;if(!isFinite(t.x)||!isFinite(t.y))return h().warn("point coordinate is not a valid number, graphic skipped"),!1;break}case"polygon":(0,_geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .closeRings */ .m3)(e)}return!0}_defaultElevationInfoNoZ(){return m}_defaultElevationInfoZ(){return g}_updateElevationContext(){null!=this._elevationInfoOverride?(this._elevationContext.setFromElevationInfo(this._elevationInfoOverride),this._elevationContext.updateFeatureExpressionInfoContext(null)):this._context.layer.elevationInfo?(this._elevationContext.setFromElevationInfo(this._context.layer.elevationInfo),this._elevationContext.updateFeatureExpressionInfoContext(this._context.featureExpressionInfoContext)):this._elevationContext.reset()}getDefaultElevationInfo(e){return e.hasZ?this._defaultElevationInfoZ():this._defaultElevationInfoNoZ()}getGeometryElevationMode(e,t=this.getDefaultElevationInfo(e)){return this._elevationContext.mode||t.mode}setElevationInfoOverride(e){this._elevationInfoOverride=e,this._updateElevationContext()}setGraphicElevationContext(e,t=new _ElevationContext_js__WEBPACK_IMPORTED_MODULE_8__/* .ElevationContext */ .F){const i=e.geometry,r=this.getDefaultElevationInfo(i);t.unit=null!=this._elevationContext.unit?this._elevationContext.unit:r.unit,t.mode=this.getGeometryElevationMode(i,r),t.offsetMeters=this._elevationContext.meterUnitOffset??r.offset??0;const o=!this._elevationOptions.supportsOnTheGround&&"on-the-ground"===t.mode;o&&(t.mode="relative-to-ground",t.offsetMeters=0);const n=o?_featureExpressionInfoUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .zeroContext */ .KF:this._elevationContext.featureExpressionInfoContext;return t.updateFeatureExpressionInfoContext(n,e,this._context.layer),t}prepareSymbolLayerPatch(e){}updateGeometry(e,t){return!1}updateTransform(e,t,i,r){return!1}onRemoveGraphic(e){}_getLayerOpacity(){if(this._context.graphicsCoreOwner&&"fullOpacity"in this._context.graphicsCoreOwner)return this._context.graphicsCoreOwner.fullOpacity??0;const e=this._context.layer.opacity;return e??1}_getCombinedOpacity(e,t=v){const i=this.draped?1:this._getLayerOpacity();return this._drivenProperties.opacity||this._drivenProperties.color?i:e?i*e.a:t.hasIntrinsicColor?i:0}_getCombinedOpacityAndColor(t,r=v){const o=this._getCombinedOpacity(t,r);if(this._drivenProperties.color)return (0,_graphicUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .mixinColorAndOpacity */ .$C)(null,o);const n=null!=t?_Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.toUnitRGB(t):_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .ONES */ .Un;return (0,_graphicUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .mixinColorAndOpacity */ .$C)(n,o)}_getVertexOpacityAndColor(e,t,i=null){const r=this._drivenProperties.color?e.color??t:null,o=this._drivenProperties.opacity?e.opacity??t[3]:null,n=(0,_graphicUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .mixinColorAndOpacity */ .$C)(r,o);return i&&(n[0]*=i,n[1]*=i,n[2]*=i,n[3]*=i),n}isFastUpdatesEnabled(){return null!=this._fastUpdates}updateComplexity(){this.complexity=this.computeComplexity()}computeComplexity(){return (0,_defaultSymbolComplexity_js__WEBPACK_IMPORTED_MODULE_6__/* .defaultSymbolLayerComplexity */ .JV)(this.symbol,this.symbolLayer)}globalPropertyChanged(e,t,i){switch(e){case"opacity":return this.layerOpacityChanged(t,i),!0;case"elevationInfo":{const e=this._elevationContext.mode;this._updateElevationContext();return this.layerElevationInfoChanged(t,i,e)!==_elevationAlignmentUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .SymbolUpdateType */ .uw.RECREATE}case"slicePlaneEnabled":return this.slicePlaneEnabledChanged(t,i);case"physicalBasedRenderingEnabled":return this.physicalBasedRenderingChanged();case"pixelRatio":return this.pixelRatioChanged;case"skipHighSymbolLods":return this.skipHighSymbolLodsChanged;default:return!1}}get pixelRatioChanged(){return!0}updateGraphics3DGraphicElevationInfo(e,t,i){let r=_elevationAlignmentUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .SymbolUpdateType */ .uw.UPDATE;return e?.forEach((e=>{const o=t(e);if(null!=o){const t=e.graphic;this.setGraphicElevationContext(t,o.elevationContext),o.needsElevationUpdates=i(o.elevationContext.mode)}else r=_elevationAlignmentUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .SymbolUpdateType */ .uw.RECREATE})),r}applyRendererDiff(e,t){return _interfaces_js__WEBPACK_IMPORTED_MODULE_11__/* .ApplyRendererDiffResult */ .w.RecreateSymbol}getFastUpdateAttrValues(e){if(!this._fastUpdates)return null;const t=this._fastUpdates.visualVariables,i=t.size?(0,_support_FastSymbolUpdates_js__WEBPACK_IMPORTED_MODULE_13__/* .getAttributeValue */ .ul)(t.size.field,e):0,o=t.color?(0,_support_FastSymbolUpdates_js__WEBPACK_IMPORTED_MODULE_13__/* .getAttributeValue */ .ul)(t.color.field,e):0,n=t.opacity?(0,_support_FastSymbolUpdates_js__WEBPACK_IMPORTED_MODULE_13__/* .getAttributeValue */ .ul)(t.opacity.field,e):0;return (0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__/* .fromValues */ .fA)(i,o,n,0)}get draped(){return this._draped}ensureDrapedStatus(e){return null==this._draped?(this._draped=e,!0):(e!==this.draped&&h().warnOnce("A symbol can only produce either draped or non-draped visualizations. Use two separate symbol instances for draped and non-draped graphics if necessary."),!1)}test(){const e=()=>({size:this._fastUpdates?.visualVariables.size?.field??null,color:this._fastUpdates?.visualVariables.color?.field??null,opacity:this._fastUpdates?.visualVariables.opacity?.field??null,rotation:this._fastUpdates?.visualVariables.rotation?.field??null});return{drivenProperties:this._drivenProperties,getVisVarFields:e}}}function f(e,t){const i={color:!1,opacity:!1,opacityAlwaysOpaque:t,size:!1,rotation:!1};return e&&"visualVariables"in e&&e.visualVariables&&e.visualVariables.forEach((e=>{switch(e.type){case"color":if(i.color=!0,e.stops)for(let t=0;t<e.stops.length;t++){const r=e.stops[t].color;r&&r.a<1&&(i.opacityAlwaysOpaque=!1)}break;case"opacity":i.opacity=!0,i.opacityAlwaysOpaque=!1;break;case"size":i.size=!0;break;case"rotation":i.rotation=!0}})),i}const m={mode:"on-the-ground",offset:0,unit:"meters"},g={mode:"absolute-height",offset:0,unit:"meters"},v={hasIntrinsicColor:!1};


/***/ }),

/***/ 20561:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ l),
/* harmony export */   x: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6267);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40189);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class r{constructor(t){this.schedule=t,this._abortController=null,this._loadStatus=l.LOADING,this._loadError=null,this._loader=null,this.logger=null}destroy(){this.abortLoad()}get loadStatus(){return this._loadStatus}load(t,r){return this._loadStatus===l.LOADED?(t&&t(),this._loader??Promise.resolve()):this._loadStatus===l.FAILED?(r&&r(this._loadError),this._loader??Promise.resolve()):(null==this._loader&&(this._abortController=new AbortController,this._loader=this.doLoad(this._abortController.signal).then((()=>{this._abortController=null,this._loadStatus=l.LOADED}),(t=>{throw this._loadError=t,this._abortController=null,this._loadStatus=l.FAILED,!(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isAbortError */ .zf)(t)&&this.logger&&t.message&&this.logger.warn(t.message),t}))),this._loader.then(t,r).catch((()=>{})),this._loader)}abortLoad(){null!=this._abortController?this._abortController=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__/* .abortMaybe */ .DC)(this._abortController):this._loadStatus===l.LOADING&&(this._loadStatus=l.FAILED),this._loader=null}}var l;!function(t){t[t.LOADING=0]="LOADING",t[t.LOADED=1]="LOADED",t[t.FAILED=2]="FAILED"}(l||(l={}));


/***/ }),

/***/ 79789:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MT: () => (/* binding */ s),
/* harmony export */   a8: () => (/* binding */ r),
/* harmony export */   hk: () => (/* binding */ t),
/* harmony export */   i3: () => (/* binding */ a),
/* harmony export */   rz: () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class e{constructor(e){this.estimated=!1,this.verticesPerFeature=e.verticesPerFeature??0,this.verticesPerCoordinate=e.verticesPerCoordinate??0,this.drawCallsPerFeature=e.drawCallsPerFeature??0,this.memory=e.memory??new a}}class t extends e{constructor(e){super(e),this.estimated=!0}}class s extends e{constructor(e,t){super(t),this.numComplexities=e}}class r extends t{constructor(e,t){super(t),this.numComplexities=e}}class a{constructor(){this.bytesPerFeature=0,this.bytesPerFeatureLabel=0,this.resourceBytes=0,this.draped={bytesPerFeature:0,bytesPerFeatureLabel:0}}}


/***/ }),

/***/ 84680:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   qD: () => (/* binding */ r),
/* harmony export */   r4: () => (/* binding */ t)
/* harmony export */ });
/* unused harmony export labelMarginPx */
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28152);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const r=1.2,t=_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_0__/* .ZEROS */ .uY,c=4;


/***/ }),

/***/ 1088:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Eg: () => (/* binding */ m),
/* harmony export */   GI: () => (/* binding */ C),
/* harmony export */   JV: () => (/* binding */ L),
/* harmony export */   Tf: () => (/* binding */ F),
/* harmony export */   k9: () => (/* binding */ d),
/* harmony export */   pg: () => (/* binding */ w),
/* harmony export */   uD: () => (/* binding */ P)
/* harmony export */ });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73345);
/* harmony import */ var _symbols_support_ObjectSymbol3DLayerResource_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50124);
/* harmony import */ var _Graphics3DPathSymbolLayerConstants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59574);
/* harmony import */ var _primitiveObjectSymbolUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41262);
/* harmony import */ var _SymbolComplexity_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79789);
/* harmony import */ var _support_edgeUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41419);
/* harmony import */ var _webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54482);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const P=new _SymbolComplexity_js__WEBPACK_IMPORTED_MODULE_3__/* .EstimatedSymbolComplexity */ .hk({});function m(e){if("web-style"===e.type)return P;return F(e.symbolLayers.toArray().map((r=>L(e,r))))}function F(e){let r=0,t=0,a=0,s=!1,u=0;const o=new _SymbolComplexity_js__WEBPACK_IMPORTED_MODULE_3__/* .SymbolComplexityMemory */ .i3;for(const b of e)null!=b&&(r+=b.verticesPerFeature,t+=b.verticesPerCoordinate,a+=b.drawCallsPerFeature,o.bytesPerFeature+=b.memory.bytesPerFeature,o.bytesPerFeatureLabel+=b.memory.bytesPerFeatureLabel,o.resourceBytes+=b.memory.resourceBytes,o.draped.bytesPerFeature+=b.memory.bytesPerFeature,o.draped.bytesPerFeatureLabel+=b.memory.bytesPerFeatureLabel,s=s||b.estimated,++u);return s?new _SymbolComplexity_js__WEBPACK_IMPORTED_MODULE_3__/* .EstimatedAggregateSymbolComplexity */ .a8(u,{verticesPerFeature:r,verticesPerCoordinate:t,drawCallsPerFeature:a,memory:o}):new _SymbolComplexity_js__WEBPACK_IMPORTED_MODULE_3__/* .AggregateSymbolComplexity */ .MT(u,{verticesPerFeature:r,verticesPerCoordinate:t,drawCallsPerFeature:a,memory:o})}function d(e){const r=F(e);return r.numComplexities>0&&(r.verticesPerFeature/=r.numComplexities,r.verticesPerCoordinate/=r.numComplexities,r.drawCallsPerFeature/=r.numComplexities,r.memory.bytesPerFeature/=r.numComplexities,r.memory.bytesPerFeatureLabel/=r.numComplexities,r.memory.resourceBytes/=r.numComplexities,r.memory.draped.bytesPerFeature/=r.numComplexities,r.memory.draped.bytesPerFeatureLabel/=r.numComplexities),r}const p={};function L(u,y){const i=C(u,y),c=(0,_support_edgeUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .hasEdges */ .RF)(y)?2:0;switch(y.type){case"extrude":return new _SymbolComplexity_js__WEBPACK_IMPORTED_MODULE_3__/* .SymbolComplexity */ .rz({verticesPerFeature:-12,verticesPerCoordinate:12,drawCallsPerFeature:c,memory:i});case"fill":if("mesh-3d"===u.type)return new _SymbolComplexity_js__WEBPACK_IMPORTED_MODULE_3__/* .SymbolComplexity */ .rz({drawCallsPerFeature:c,memory:i});if(null!=y.outline&&y.outline.size>0)return new _SymbolComplexity_js__WEBPACK_IMPORTED_MODULE_3__/* .SymbolComplexity */ .rz({verticesPerFeature:-12,verticesPerCoordinate:9,memory:i});case"water":return new _SymbolComplexity_js__WEBPACK_IMPORTED_MODULE_3__/* .SymbolComplexity */ .rz({verticesPerFeature:-6,verticesPerCoordinate:3,memory:i});case"line":return new _SymbolComplexity_js__WEBPACK_IMPORTED_MODULE_3__/* .SymbolComplexity */ .rz({verticesPerFeature:-6,verticesPerCoordinate:6,memory:i});case"object":return y.resource?.href?new _SymbolComplexity_js__WEBPACK_IMPORTED_MODULE_3__/* .EstimatedSymbolComplexity */ .hk({verticesPerFeature:100,memory:i}):{...f(y.resource?.primitive??_symbols_support_ObjectSymbol3DLayerResource_js__WEBPACK_IMPORTED_MODULE_1__/* .defaultPrimitive */ .r),memory:i};case"path":{let r=0,u=0;switch(y.profile){case"circle":r=_Graphics3DPathSymbolLayerConstants_js__WEBPACK_IMPORTED_MODULE_6__/* .pathNumCircleProfileSubdivisions */ .ZC;break;case"quad":r=4;break;default:return void (0,_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .neverReached */ .Xb)(y.profile)}switch(y.join){case"round":u=_Graphics3DPathSymbolLayerConstants_js__WEBPACK_IMPORTED_MODULE_6__/* .pathNumRoundJoinSubdivisions */ .kf;break;case"miter":case"bevel":u=1;break;default:return}const o=2*r,c=r*u*2,n=c+o;let l=-2*c-o;switch(y.cap){case"none":break;case"butt":case"square":l+=2*(r-1);break;case"round":l+=2*(r*(_Graphics3DPathSymbolLayerConstants_js__WEBPACK_IMPORTED_MODULE_6__/* .pathNumRoundCapExtrusionSubdivisions */ .RL-1)*2+r);break;default:return}return new _SymbolComplexity_js__WEBPACK_IMPORTED_MODULE_3__/* .SymbolComplexity */ .rz({verticesPerFeature:l,verticesPerCoordinate:n,memory:i})}case"text":{const e="label-3d"===u.type?0:2;return new _SymbolComplexity_js__WEBPACK_IMPORTED_MODULE_3__/* .SymbolComplexity */ .rz({verticesPerFeature:6,memory:i,drawCallsPerFeature:e})}case"icon":return new _SymbolComplexity_js__WEBPACK_IMPORTED_MODULE_3__/* .SymbolComplexity */ .rz({verticesPerFeature:6,memory:i});default:return}}function C(r,t){const a="point-3d"===r.type;switch(t.type){case"extrude":return t.edges&&t.edges.size>0?E.EXTRUDE_EDGES:E.EXTRUDE;case"fill":return null!=t.outline&&t.outline.size>0?E.FILL_OUTLINE:E.FILL;case"water":return E.FILL;case"line":return"round"===t.join?E.LINE_ROUND:E.LINE_MITER;case"path":switch(t.join){case"round":switch(t.profile){case"circle":return E.PATH_ROUND_CIRCLE;case"quad":return E.PATH_ROUND_QUAD;default:return void (0,_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .neverReached */ .Xb)(t.profile)}case"miter":case"bevel":switch(t.profile){case"circle":return E.PATH_MITER_CIRCLE;case"quad":return E.PATH_MITER_QUAD;default:return void (0,_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .neverReached */ .Xb)(t.profile)}default:return}case"object":return a?E.OBJECT_POINT:E.OBJECT_POLYGON;case"icon":case"text":return a?E.ICON_POINT:E.ICON_POLYGON;default:return}}function f(e){const r=p[e];if(r)return r;const t=w((0,_primitiveObjectSymbolUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .primitiveLodResources */ ._)(e,new _webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_5__/* .DefaultMaterial */ .$U({},{spherical:!0})).levels);return p[e]=new _SymbolComplexity_js__WEBPACK_IMPORTED_MODULE_3__/* .SymbolComplexity */ .rz({verticesPerFeature:t}),p[e]}function w(e){return e.reduce(((e,r,t)=>e+r.numVertices*(1/10**t)),0)/e.reduce(((e,r,t)=>e+1/10**t),0)}const E={ICON_POINT:{bytesPerFeature:3062.2534325974652,bytesPerFeatureLabel:3605.891255,resourceBytes:0,draped:{bytesPerFeature:2029.6324697040875,bytesPerFeatureLabel:3844.951315}},ICON_POLYGON:{bytesPerFeature:3379.2552364427283,bytesPerFeatureLabel:3144.1341316666667,resourceBytes:0,draped:{bytesPerFeature:2594.5439970589305,bytesPerFeatureLabel:3391.0192816666668}},OBJECT_POINT:{bytesPerFeature:755.5754513856272,bytesPerFeatureLabel:3229.7766,resourceBytes:0,draped:{bytesPerFeature:755.5754513856272,bytesPerFeatureLabel:3229.7766}},OBJECT_POLYGON:{bytesPerFeature:1235.9612556276838,bytesPerFeatureLabel:2710.5796950000004,resourceBytes:0,draped:{bytesPerFeature:1235.9612556276838,bytesPerFeatureLabel:2710.5796950000004}},LINE_MITER:{bytesPerFeature:2343.0098144295366,bytesPerFeatureLabel:2863.2415183333333,resourceBytes:0,draped:{bytesPerFeature:2118.062960542706,bytesPerFeatureLabel:2993.8707950000003}},LINE_ROUND:{bytesPerFeature:3180.281669156425,bytesPerFeatureLabel:2884.062711666667,resourceBytes:0,draped:{bytesPerFeature:2687.1048133674676,bytesPerFeatureLabel:2965.844025}},PATH_MITER_CIRCLE:{bytesPerFeature:26642.015762630304,bytesPerFeatureLabel:3147.8341749999995,resourceBytes:0,draped:{bytesPerFeature:26642.015762630304,bytesPerFeatureLabel:3147.8341749999995}},PATH_ROUND_CIRCLE:{bytesPerFeature:21137.659435445064,bytesPerFeatureLabel:2827.1294000000003,resourceBytes:0,draped:{bytesPerFeature:21137.659435445064,bytesPerFeatureLabel:2827.1294000000003}},PATH_MITER_QUAD:{bytesPerFeature:25592.283303929427,bytesPerFeatureLabel:3354.641775,resourceBytes:0,draped:{bytesPerFeature:25592.283303929427,bytesPerFeatureLabel:3354.641775}},PATH_ROUND_QUAD:{bytesPerFeature:23212.92773696872,bytesPerFeatureLabel:3173.6644499999998,resourceBytes:0,draped:{bytesPerFeature:23212.92773696872,bytesPerFeatureLabel:3173.6644499999998}},FILL:{bytesPerFeature:3069.6014181747005,bytesPerFeatureLabel:3050.617135,resourceBytes:0,draped:{bytesPerFeature:2547.9765396831167,bytesPerFeatureLabel:3166.2821483333337}},FILL_OUTLINE:{bytesPerFeature:3653.779598313774,bytesPerFeatureLabel:2787.5897050000003,resourceBytes:0,draped:{bytesPerFeature:2884.528596112384,bytesPerFeatureLabel:2907.420548333333}},EXTRUDE:{bytesPerFeature:5785.658350054202,bytesPerFeatureLabel:2787.498365,resourceBytes:0,draped:{bytesPerFeature:5785.658350054202,bytesPerFeatureLabel:2787.498365}},EXTRUDE_EDGES:{bytesPerFeature:3380.451670091342,bytesPerFeatureLabel:2245.881308333333,resourceBytes:0,draped:{bytesPerFeature:3380.451670091342,bytesPerFeatureLabel:2245.881308333333}}};


/***/ }),

/***/ 27716:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I2: () => (/* binding */ m),
/* harmony export */   Kf: () => (/* binding */ g),
/* harmony export */   Uk: () => (/* binding */ R),
/* harmony export */   ai: () => (/* binding */ E),
/* harmony export */   au: () => (/* binding */ u),
/* harmony export */   fe: () => (/* binding */ p),
/* harmony export */   nG: () => (/* binding */ f),
/* harmony export */   nu: () => (/* binding */ d),
/* harmony export */   sE: () => (/* binding */ c),
/* harmony export */   uw: () => (/* binding */ b)
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21742);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86128);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58359);
/* harmony import */ var _geometry_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59538);
/* harmony import */ var _geometry_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84119);
/* harmony import */ var _layers_graphics_dehydratedFeatureUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80009);
/* harmony import */ var _support_ElevationProvider_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27054);
/* harmony import */ var _webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50645);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function u(e,t,n,o,i,a,s,l,u,c,f){const m=x[f.mode];let d,g,p=0;if((0,_geometry_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_4__.projectBuffer)(e,t,n,o,u.spatialReference,i,l))return m?.requiresAlignment(f)?(p=m.applyElevationAlignmentBuffer(o,i,a,s,l,u,c,f),d=a,g=s):(d=o,g=i),(0,_geometry_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_4__.projectBuffer)(d,u.spatialReference,g,a,c.spatialReference,s,l)?p:void 0}function c(e,t,n,o,r){const l=((0,_layers_graphics_dehydratedFeatureUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .isDehydratedPoint */ .v)(e)?e.z:(0,_support_ElevationProvider_js__WEBPACK_IMPORTED_MODULE_7__/* .isSamplePosition */ .cN)(e)?e.array[e.offset+2]:e[2])||0;switch(n.mode){case"on-the-ground":{const n=(0,_support_ElevationProvider_js__WEBPACK_IMPORTED_MODULE_7__/* .getElevationAtPoint */ .R1)(t,e,"ground")??0;return r.verticalDistanceToGround=0,r.sampledElevation=n,void(r.z=n)}case"relative-to-ground":{const i=(0,_support_ElevationProvider_js__WEBPACK_IMPORTED_MODULE_7__/* .getElevationAtPoint */ .R1)(t,e,"ground")??0,a=n.geometryZWithOffset(l,o);return r.verticalDistanceToGround=a,r.sampledElevation=i,void(r.z=a+i)}case"relative-to-scene":{const i=(0,_support_ElevationProvider_js__WEBPACK_IMPORTED_MODULE_7__/* .getElevationAtPoint */ .R1)(t,e,"scene")??0,a=n.geometryZWithOffset(l,o);return r.verticalDistanceToGround=a,r.sampledElevation=i,void(r.z=a+i)}case"absolute-height":{const i=n.geometryZWithOffset(l,o),a=(0,_support_ElevationProvider_js__WEBPACK_IMPORTED_MODULE_7__/* .getElevationAtPoint */ .R1)(t,e,"ground")??0;return r.verticalDistanceToGround=i-a,r.sampledElevation=a,void(r.z=i)}default:return void(r.z=0)}}function f(e,t,n,o){return c(e,t,n,o,D),D.z}function m(e,t,n){return"on-the-ground"===t&&"on-the-ground"===n?e.staysOnTheGround:t===n||"on-the-ground"!==t&&"on-the-ground"!==n?null==t||null==n?e.definedChanged:b.UPDATE:e.onTheGroundChanged}function d(e){return"relative-to-ground"===e||"relative-to-scene"===e}function g(e){return"absolute-height"!==e}function p(t,n,r,i,a){c(n,r,a,i,D),E(t,D.verticalDistanceToGround);const s=D.sampledElevation,l=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__/* .copy */ .C)(C,t.transformation);O[0]=n.x,O[1]=n.y,O[2]=D.z;return (0,_geometry_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_3__/* .computeTranslationToOriginAndRotation */ .l)(n.spatialReference,O,l,i.spatialReference)?t.transformation=l:console.warn("Could not locate symbol object properly, it might be misplaced"),s}function E(e,t){for(let n=0;n<e.geometries.length;++n){const o=e.geometries[n].getMutableAttribute(_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__/* .VertexAttribute */ .r.CENTEROFFSETANDDISTANCE);o&&o.data[3]!==t&&(o.data[3]=t,e.geometryVertexAttributeUpdated(e.geometries[n],_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__/* .VertexAttribute */ .r.CENTEROFFSETANDDISTANCE))}}function v(e,t,n,o,r,i){let a=0;const s=i.spatialReference;t*=3,o*=3;for(let l=0;l<r;++l){const r=e[t],l=e[t+1],u=e[t+2],c=i.getElevation(r,l,u,s,"ground")??0;a+=c,n[o]=r,n[o+1]=l,n[o+2]=c,t+=3,o+=3}return a/r}function h(e,t,n,o,r,i,a,s){let l=0;const u=s.calculateOffsetRenderUnits(a),c=s.featureExpressionInfoContext,f=i.spatialReference;t*=3,o*=3;for(let m=0;m<r;++m){const r=e[t],a=e[t+1],s=e[t+2],m=i.getElevation(r,a,s,f,"ground")??0;l+=m,n[o]=r,n[o+1]=a,n[o+2]=null==c?s+m+u:m+u,t+=3,o+=3}return l/r}function A(e,t,n,o,r,i,a,s){let l=0;const u=s.calculateOffsetRenderUnits(a),c=s.featureExpressionInfoContext,f=i.spatialReference;t*=3,o*=3;for(let m=0;m<r;++m){const r=e[t],a=e[t+1],s=e[t+2],m=i.getElevation(r,a,s,f,"scene")??0;l+=m,n[o]=r,n[o+1]=a,n[o+2]=null==c?s+m+u:m+u,t+=3,o+=3}return l/r}function T(e){const t=e.meterUnitOffset,n=e.featureExpressionInfoContext;return 0!==t||null!=n}function y(e,t,n,o,r,i,a,s){const l=s.calculateOffsetRenderUnits(a),u=s.featureExpressionInfoContext;t*=3,o*=3;for(let c=0;c<r;++c){const r=e[t],i=e[t+1],a=e[t+2];n[o]=r,n[o+1]=i,n[o+2]=null==u?a+l:l,t+=3,o+=3}return 0}class R{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}}var b;!function(e){e[e.NONE=0]="NONE",e[e.UPDATE=1]="UPDATE",e[e.RECREATE=2]="RECREATE"}(b||(b={}));const x={"absolute-height":{applyElevationAlignmentBuffer:y,requiresAlignment:T},"on-the-ground":{applyElevationAlignmentBuffer:v,requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:h,requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:A,requiresAlignment:()=>!0}},C=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)(),D=new R,O=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)();


/***/ }),

/***/ 9104:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KF: () => (/* binding */ f),
/* harmony export */   MF: () => (/* binding */ d),
/* harmony export */   VG: () => (/* binding */ s),
/* harmony export */   g7: () => (/* binding */ i),
/* harmony export */   gf: () => (/* binding */ l),
/* harmony export */   o8: () => (/* binding */ o),
/* harmony export */   q6: () => (/* binding */ a)
/* harmony export */ });
/* unused harmony export createContextWithoutExpressionSupport */
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(539);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40189);
/* harmony import */ var _layers_graphics_hydratedFeatures_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85174);
/* harmony import */ var _support_loadArcade_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35387);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const c=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function o(e){return{cachedResult:e.cachedResult,arcade:e.arcade?{func:e.arcade.func,context:e.arcade.modules.arcadeUtils.createExecContext(null,{sr:e.arcade.context.spatialReference}),modules:e.arcade.modules}:null}}function u(e){const t=e?.expression;if("string"==typeof t){const e=m(t);if(null!=e)return{cachedResult:e}}return null}async function a(e,r,c,o){const u=e?.expression;if("string"!=typeof u)return null;const a=m(u);if(null!=a)return{cachedResult:a};const s=await (0,_support_loadArcade_js__WEBPACK_IMPORTED_MODULE_3__/* .loadArcade */ .l)();(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .throwIfAborted */ .Te)(c);const l=s.arcadeUtils,i=l.createSyntaxTree(u);return l.dependsOnView(i)?(null!=o&&o.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0}):{arcade:{func:l.createFunction(i),context:l.createExecContext(null,{sr:r}),modules:s}}}function s(e,t,r){return e.arcadeUtils.createFeature(t.attributes,t.geometry,r)}function l(e,t){if(null!=e&&!p(e)){if(!t||!e.arcade)return void c().errorOncePerTick("Arcade support required but not provided");const n=t;n._geometry&&(n._geometry=(0,_layers_graphics_hydratedFeatures_js__WEBPACK_IMPORTED_MODULE_2__/* .hydrateGeometry */ .wZ)(n._geometry)),e.arcade.modules.arcadeUtils.updateExecContext(e.arcade.context,t)}}function i(e){if(null!=e){if(p(e))return e.cachedResult;const t=e.arcade;let r=t?.modules.arcadeUtils.executeFunction(t.func,t.context);return"number"!=typeof r&&(e.cachedResult=0,r=0),r}return 0}function d(e,t=!1){let r=e?.featureExpressionInfo;const n=r?.expression;return t||"0"===n||(r=null),r??null}const f={cachedResult:0};function p(e){return null!=e.cachedResult}function m(e){return"0"===e?0:null}


/***/ }),

/***/ 54096:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $2: () => (/* binding */ k),
/* harmony export */   $C: () => (/* binding */ U),
/* harmony export */   Hj: () => (/* binding */ I),
/* harmony export */   Mh: () => (/* binding */ Z),
/* harmony export */   W$: () => (/* binding */ b),
/* harmony export */   pW: () => (/* binding */ B),
/* harmony export */   t8: () => (/* binding */ S),
/* harmony export */   vY: () => (/* binding */ E)
/* harmony export */ });
/* unused harmony exports computeMaxZ, overrideColor */
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92976);
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21742);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86128);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58359);
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2662);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28152);
/* harmony import */ var _geometry_projectionUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68490);
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4675);
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80510);
/* harmony import */ var _geometry_support_centroid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23806);
/* harmony import */ var _geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65319);
/* harmony import */ var _geometry_support_meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1114);
/* harmony import */ var _layers_graphics_dehydratedPoint_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(29394);
/* harmony import */ var _layers_graphics_hydratedFeatures_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85174);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function b(t,e){if("point"===t.type)return P(t,e,!1);if((0,_layers_graphics_hydratedFeatures_js__WEBPACK_IMPORTED_MODULE_12__/* .isHydratedGeometry */ .gr)(t))switch(t.type){case"extent":return P(t.center,e,!1);case"polygon":return P(t.centroid,e,!1);case"polyline":return P(w(t),e,!0);case"mesh":return P((0,_geometry_support_meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_11__/* .vertexSpaceOriginToPoint */ .MW)(t.vertexSpace,t.spatialReference)??t.extent.center,e,!1);case"multipoint":return}else switch(t.type){case"extent":return P(M(t),e,!0);case"polygon":return P(R(t),e,!0);case"polyline":return P(w(t),e,!0);case"multipoint":return}}function w(t){const e=t.paths[0];if(!e||0===e.length)return null;const r=(0,_geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .getPointOnPath */ .$H)(e,(0,_geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .getPathLength */ .Yl)(e)/2);return (0,_layers_graphics_dehydratedPoint_js__WEBPACK_IMPORTED_MODULE_13__/* .makeDehydratedPoint */ .T)(r[0],r[1],r[2],t.spatialReference)}function M(t){return (0,_layers_graphics_dehydratedPoint_js__WEBPACK_IMPORTED_MODULE_13__/* .makeDehydratedPoint */ .T)(.5*(t.xmax+t.xmin),.5*(t.ymax+t.ymin),null!=t.zmin&&null!=t.zmax&&isFinite(t.zmin)&&isFinite(t.zmax)?.5*(t.zmax+t.zmin):void 0,t.spatialReference)}function R(t){const e=t.rings[0];if(!e||0===e.length)return null;const r=(0,_geometry_support_centroid_js__WEBPACK_IMPORTED_MODULE_9__/* .ringsCentroid */ .S8)(t.rings,!!t.hasZ);return (0,_layers_graphics_dehydratedPoint_js__WEBPACK_IMPORTED_MODULE_13__/* .makeDehydratedPoint */ .T)(r[0],r[1],r[2],t.spatialReference)}function P(t,e,r){const n=r?t:(0,_layers_graphics_hydratedFeatures_js__WEBPACK_IMPORTED_MODULE_12__/* .clonePoint */ .EL)(t);return e&&t?(0,_geometry_projectionUtils_js__WEBPACK_IMPORTED_MODULE_6__.projectPoint)(t,n,e)?n:null:n}function F(t){if(!t)return 0;switch(t.type){case"point":return t.z;case"extent":return t.zmax;case"polygon":return t.hasZ?t.rings.reduce(((t,e)=>e.reduce(((t,e)=>Math.max(t,e[2])),t)),-1/0):void 0;case"polyline":return t.hasZ?t.paths.reduce(((t,e)=>e.reduce(((t,e)=>Math.max(t,e[2])),t)),-1/0):void 0;case"mesh":return t.extent.zmax;case"multipoint":return}}function S(t,e,r,n=0){if(t){e||(e=(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_8__/* .create */ .vt)());const i=t;let o=.5*i.width*(r-1),s=.5*i.height*(r-1);return i.width<1e-7*i.height?o+=s/20:i.height<1e-7*i.width&&(s+=o/20),(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_4__.s)(e,i.xmin-o-n,i.ymin-s-n,i.xmax+o+n,i.ymax+s+n),e}return null}function U(t,e,r=null){const n=(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__/* .clone */ .o8)(_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__/* .ONES */ .Un);return null!=t&&(n[0]=t[0],n[1]=t[1],n[2]=t[2]),null!=e?n[3]=e:null!=t&&t.length>3&&(n[3]=t[3]),r&&(n[0]*=r,n[1]*=r,n[2]*=r,n[3]*=r),n}function A(t,e,r,n,i,o){for(let s=0;s<3;++s)o[s]=null!=t?.[s]?t[s]:null!=r?.[s]?r[s]:i[s];return o[3]=null!=e?e:null!=n?n:i[3],o}function B(t=_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .ONES */ .Un,e,r,n=1){const i=new Array(3);if(null==e||null==r)i[0]=1,i[1]=1,i[2]=1;else{let n,o=0;for(let s=2;s>=0;s--){const l=t[s],u=null!=l,a=0===s&&!n&&!u,c=r[s];let m;"symbol-value"===l||a?m=0!==c?e[s]/c:1:u&&"proportional"!==l&&isFinite(l)&&(m=0!==c?l/c:1),null!=m&&(i[s]=m,n=m,o=Math.max(o,Math.abs(m)))}for(let t=2;t>=0;t--)null==i[t]?i[t]=n:0===i[t]&&(i[t]=.001*o)}for(let o=2;o>=0;o--)i[o]/=n;return (0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .fromArray */ .ci)(i)}function D(t){return null!=t.isPrimitive}function I(t){return Z(D(t)?[t.width,t.depth,t.height]:t)?null:"Symbol sizes may not be negative values"}function Z(t){const e=t=>null==t||t>=0;return Array.isArray(t)?t.every(e):e(t)}function k(t,o,s,l=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)()){return t&&(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_1__/* .rotateZ */ .Qr)(l,l,-t/180*Math.PI),o&&(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_1__/* .rotateX */ .eL)(l,l,o/180*Math.PI),s&&(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_1__/* .rotateY */ .Z8)(l,l,s/180*Math.PI),l}function E(e,r,n){if(null!=n.minDemResolution)return n.minDemResolution;const i=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getMetersPerUnitForSR */ .GA)(r),o=(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__/* .width */ .VL)(e)*i,s=(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__/* .depth */ .yr)(e)*i,l=(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_7__/* .height */ .uJ)(e)*(r.isGeographic?1:i);return 0===o&&0===s&&0===l?n.minDemResolutionForPoints:.01*Math.max(o,s,l)}


/***/ }),

/***/ 62545:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ a),
/* harmony export */   w: () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var e,a;!function(e){e[e.RecreateSymbol=0]="RecreateSymbol",e[e.RecreateGraphics=1]="RecreateGraphics",e[e.FastUpdate=2]="FastUpdate"}(e||(e={})),function(e){e[e.Slow=0]="Slow",e[e.Fast=1]="Fast",e[e.Mixed=2]="Mixed",e[e.Loading=3]="Loading",e[e.Undefined=4]="Undefined"}(a||(a={}));


/***/ }),

/***/ 72458:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R$: () => (/* binding */ d),
/* harmony export */   SZ: () => (/* binding */ a),
/* harmony export */   ZX: () => (/* binding */ f),
/* harmony export */   d2: () => (/* binding */ m),
/* harmony export */   hS: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58359);
/* harmony import */ var _geometry_projection_projectPointToVector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42609);
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4675);
/* harmony import */ var _geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65319);
/* harmony import */ var _layers_graphics_dehydratedPoint_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29394);
/* harmony import */ var _elevationAlignmentUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27716);
/* harmony import */ var _graphicUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54096);
/* harmony import */ var _webgl_engine_lib_Object3D_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55103);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function a(e,r,t,n,o){if(u(e,r))return null;t.localOrigin=d(e,r);const i=new _webgl_engine_lib_Object3D_js__WEBPACK_IMPORTED_MODULE_6__/* .Object3D */ .B({geometries:[t],castShadow:!1,layerViewUid:e.layerViewUid,graphicUid:o,usesVerticalDistanceToGround:!0});return{object:i,sampledElevation:(0,_elevationAlignmentUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .applyElevationAlignmentForHUD */ .fe)(i,r,e.elevationProvider,e.renderCoordsHelper,n)}}function p(e,r,t,n){if(u(r,t))return null;return (0,_elevationAlignmentUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .applyElevationAlignmentForHUD */ .fe)(e,t,r.elevationProvider,r.renderCoordsHelper,n)}function u(e,n){const o=e.clippingExtent;return!!o&&((0,_geometry_projection_projectPointToVector_js__WEBPACK_IMPORTED_MODULE_1__/* .projectPointToVector */ .g)(n,g,e.elevationProvider.spatialReference),!(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__/* .containsPoint */ .Uc)(o,g))}function m(e,t,n){const o=e.elevationContext,l=n.spatialReference;(0,_geometry_projection_projectPointToVector_js__WEBPACK_IMPORTED_MODULE_1__/* .projectPointToVector */ .g)(t,g,l),o.centerPointInElevationSR=(0,_layers_graphics_dehydratedPoint_js__WEBPACK_IMPORTED_MODULE_7__/* .makeDehydratedPoint */ .T)(g[0],g[1],t.hasZ?g[2]:0,null!=l?l:null)}function f(e){switch(e.type){case"point":return e;case"polygon":case"extent":return (0,_graphicUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .computeCentroid */ .W$)(e);case"polyline":{const r=e.paths[0];if(!r||0===r.length)return null;const t=(0,_geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .getPointOnPath */ .$H)(r,(0,_geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .getPathLength */ .Yl)(r)/2);return (0,_layers_graphics_dehydratedPoint_js__WEBPACK_IMPORTED_MODULE_7__/* .makeDehydratedPoint */ .T)(t[0],t[1],t[2],e.spatialReference)}case"mesh":return e.extent.center}return null}function d(e,t){return (0,_geometry_projection_projectPointToVector_js__WEBPACK_IMPORTED_MODULE_1__/* .projectPointToVector */ .g)(t,g,e.renderCoordsHelper.spatialReference),e.localOriginFactory.getOrigin(g)}const g=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__/* .create */ .vt)();


/***/ }),

/***/ 41262:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ l),
/* harmony export */   k: () => (/* binding */ S)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _webgl_engine_lib_GeometryUtil_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94643);
/* harmony import */ var _webgl_engine_lib_lodRendering_LodResources_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19221);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function S(e){switch(e){case"sphere":case"cube":case"diamond":case"cylinder":case"cone":case"inverted-cone":case"tetrahedron":return!0}return!1}function l(S,l){const p=(n,s,a=!1)=>new _webgl_engine_lib_lodRendering_LodResources_js__WEBPACK_IMPORTED_MODULE_2__/* .LodResources */ .Fe(n.map((n=>{const c=s(n.tesselation);return a&&(0,_webgl_engine_lib_GeometryUtil_js__WEBPACK_IMPORTED_MODULE_1__/* .cgToGIS */ .zC)(c),new _webgl_engine_lib_lodRendering_LodResources_js__WEBPACK_IMPORTED_MODULE_2__/* .LodLevelResources */ .hr([new _webgl_engine_lib_lodRendering_LodResources_js__WEBPACK_IMPORTED_MODULE_2__/* .LodComponentResources */ .iC(new _webgl_engine_lib_lodRendering_LodResources_js__WEBPACK_IMPORTED_MODULE_2__/* .LodComponentEngineGeometry */ .dI(c))],n.minScreenSpaceRadius)})));switch(S){case"sphere":return p([{tesselation:0,minScreenSpaceRadius:0},{tesselation:1,minScreenSpaceRadius:8},{tesselation:2,minScreenSpaceRadius:16},{tesselation:3,minScreenSpaceRadius:50},{tesselation:4,minScreenSpaceRadius:250}],(e=>(0,_webgl_engine_lib_GeometryUtil_js__WEBPACK_IMPORTED_MODULE_1__/* .createPolySphereGeometry */ .uX)(l,.5,e,!0)));case"cube":return p([{tesselation:0,minScreenSpaceRadius:0}],(()=>(0,_webgl_engine_lib_GeometryUtil_js__WEBPACK_IMPORTED_MODULE_1__/* .createBoxGeometry */ .C1)(l,1)));case"cone":return p(m,(e=>(0,_webgl_engine_lib_GeometryUtil_js__WEBPACK_IMPORTED_MODULE_1__/* .createConeGeometry */ .EE)(l,1,.5,e,!1)),!0);case"inverted-cone":return p(m,(e=>(0,_webgl_engine_lib_GeometryUtil_js__WEBPACK_IMPORTED_MODULE_1__/* .createConeGeometry */ .EE)(l,1,.5,e,!0)),!0);case"cylinder":return p(m,(e=>(0,_webgl_engine_lib_GeometryUtil_js__WEBPACK_IMPORTED_MODULE_1__/* .createCylinderGeometry */ .nW)(l,1,.5,e,[0,0,1],[0,0,.5])));case"tetrahedron":return p([{tesselation:0,minScreenSpaceRadius:0}],(()=>(0,_webgl_engine_lib_GeometryUtil_js__WEBPACK_IMPORTED_MODULE_1__/* .createTetrahedronGeometry */ .Ho)(l,1)),!0);case"diamond":return p([{tesselation:0,minScreenSpaceRadius:0}],(()=>(0,_webgl_engine_lib_GeometryUtil_js__WEBPACK_IMPORTED_MODULE_1__/* .createDiamondGeometry */ .td)(l,1)),!0);default:return}}const m=[{tesselation:6,minScreenSpaceRadius:0},{tesselation:18,minScreenSpaceRadius:7},{tesselation:64,minScreenSpaceRadius:65}];


/***/ }),

/***/ 56867:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O7: () => (/* binding */ a),
/* harmony export */   Om: () => (/* binding */ e),
/* harmony export */   sv: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var e,a,t;!function(e){e[e.RasterImage=0]="RasterImage",e[e.Features=1]="Features"}(e||(e={})),function(e){e[e.MapLayer=0]="MapLayer",e[e.ViewLayer=1]="ViewLayer",e[e.Outline=2]="Outline",e[e.SnappingHint=3]="SnappingHint"}(a||(a={})),function(e){e[e.WithRasterImage=0]="WithRasterImage",e[e.WithoutRasterImage=1]="WithoutRasterImage"}(t||(t={}));


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

/***/ 27054:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R1: () => (/* binding */ a),
/* harmony export */   aY: () => (/* binding */ r),
/* harmony export */   cN: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _layers_graphics_dehydratedFeatureUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80009);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class r{constructor(e,r=null,t=0){this.array=e,this.spatialReference=r,this.offset=t}}function t(e){return"array"in e}function a(r,a,n="ground"){if((0,_layers_graphics_dehydratedFeatureUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isDehydratedPoint */ .v)(a))return r.getElevation(a.x,a.y,a.z||0,a.spatialReference,n);if(t(a)){let e=a.offset;return r.getElevation(a.array[e++],a.array[e++],a.array[e]||0,a.spatialReference??r.spatialReference,n)}return r.getElevation(a[0],a[1],a[2]||0,r.spatialReference,n)}


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

/***/ 50980:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cz: () => (/* binding */ s),
/* harmony export */   DZ: () => (/* binding */ w),
/* harmony export */   PV: () => (/* binding */ p),
/* harmony export */   vO: () => (/* binding */ m)
/* harmony export */ });
/* unused harmony exports createMarkerTexture, markerThickness */
/* harmony import */ var _sdfPrimitives_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97213);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41746);
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8595);
/* harmony import */ var _webgl_TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45758);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const m=64,s=m/2,n=s/5,p=m/n,w=.25;function f(p,w){const f=r(p,m,s,n),u=new i;return u.internalFormat=e.RGBA,u.width=m,u.height=m,u.wrapMode=t.CLAMP_TO_EDGE,new o(w,u,f)}


/***/ }),

/***/ 97213:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CN: () => (/* binding */ o),
/* harmony export */   I9: () => (/* binding */ i),
/* harmony export */   PY: () => (/* binding */ s),
/* harmony export */   Q_: () => (/* binding */ a),
/* harmony export */   ny: () => (/* binding */ c),
/* harmony export */   sZ: () => (/* binding */ u)
/* harmony export */ });
/* unused harmony exports createArrow, createCircle, createCross, createKite, createPrimitive, createSquare, createTriangle, createX */
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _core_floatRGBA_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51859);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28152);
/* harmony import */ var _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17342);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41746);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const a=128,o=.5,s=(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__/* .freeze */ .CN)(o/2,o/2,1-o/2,1-o/2);function c(t){return"cross"===t||"x"===t}function u(t,r=a,e=r*o,s=0){const{data:c,parameters:u}=i(t,r,e,s);return new _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_3__/* .Texture */ .g(c,u)}function i(t,r=a,n=r*o,s=0){return{data:f(t,r,n,s),parameters:{mipmap:!1,wrap:{s:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__/* .TextureWrapMode */ .pF.CLAMP_TO_EDGE,t:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_4__/* .TextureWrapMode */ .pF.CLAMP_TO_EDGE},width:r,height:r,components:4,noUnpackFlip:!0,reloadable:!0}}}function f(t,r=a,n=r*o,e=0){switch(t){case"circle":default:return h(r,n);case"square":return M(r,n);case"cross":return l(r,n,e);case"x":return p(r,n,e);case"kite":return m(r,n);case"triangle":return b(r,n);case"arrow":return T(r,n)}}function h(t,r){const n=t/2-.5;return q(t,R(n,n,r/2))}function M(t,r){return w(t,r,!1)}function m(t,r){return w(t,r,!0)}function l(t,r,n=0){return x(t,r,!1,n)}function p(t,r,n=0){return x(t,r,!0,n)}function b(t,r){return q(t,g(t/2,r,r/2))}function T(t,r){const n=r,e=r/2,a=t/2,o=.8*n,s=R(a,(t-r)/2-o,Math.sqrt(o*o+e*e)),c=g(a,n,e);return q(t,((t,r)=>Math.max(c(t,r),-s(t,r))))}function w(t,r,n){return n&&(r/=Math.SQRT2),q(t,((e,a)=>{let o=e-.5*t+.25,s=.5*t-a-.75;if(n){const t=(o+s)/Math.SQRT2;s=(s-o)/Math.SQRT2,o=t}return Math.max(Math.abs(o),Math.abs(s))-.5*r}))}function x(t,r,n,e=0){r-=e,n&&(r*=Math.SQRT2);const a=.5*r;return q(t,((r,o)=>{let s,c=r-.5*t,u=.5*t-o-1;if(n){const t=(c+u)/Math.SQRT2;u=(u-c)/Math.SQRT2,c=t}return c=Math.abs(c),u=Math.abs(u),s=c>u?c>a?Math.sqrt((c-a)*(c-a)+u*u):u:u>a?Math.sqrt(c*c+(u-a)*(u-a)):c,s-=e/2,s}))}function R(t,r,n){return(e,a)=>{const o=e-t,s=a-r;return Math.sqrt(o*o+s*s)-n}}function g(t,r,n){const e=Math.sqrt(r*r+n*n);return(a,o)=>{const s=Math.abs(a-t)-n,c=o-t+r/2+.75,u=(r*s+n*c)/e,i=-c;return Math.max(u,i)}}function q(r,n){const e=new Uint8Array(4*r*r);for(let a=0;a<r;a++)for(let o=0;o<r;o++){const s=o+r*a;let c=n(o,a);c=c/r+.5,(0,_core_floatRGBA_js__WEBPACK_IMPORTED_MODULE_1__/* .packFloatRGBA */ .U)(c,e,4*s)}return e}


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

/***/ 56289:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34328);
/* harmony import */ var _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60840);
/* harmony import */ var _shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35449);
/* harmony import */ var _shaderModules_FloatsPassUniform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45160);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72196);
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50645);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const o=8;function c(c,l){const{vertex:s,attributes:n}=c;s.uniforms.add(new _shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_2__/* .FloatPassUniform */ .m("intrinsicWidth",(i=>i.width))),l.vvSize?(n.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__/* .VertexAttribute */ .r.SIZEFEATUREATTRIBUTE,"float"),s.uniforms.add(new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_1__/* .Float3PassUniform */ .t("vvSizeMinSize",(i=>i.vvSize.minSize)),new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_1__/* .Float3PassUniform */ .t("vvSizeMaxSize",(i=>i.vvSize.maxSize)),new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_1__/* .Float3PassUniform */ .t("vvSizeOffset",(i=>i.vvSize.offset)),new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_1__/* .Float3PassUniform */ .t("vvSizeFactor",(i=>i.vvSize.factor)),new _shaderModules_Float3PassUniform_js__WEBPACK_IMPORTED_MODULE_1__/* .Float3PassUniform */ .t("vvSizeFallback",(i=>i.vvSize.fallback))),s.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .glsl */ .H)`float getSize() {
if (isnan(sizeFeatureAttribute)) {
return vvSizeFallback.x;
}
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(n.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__/* .VertexAttribute */ .r.SIZE,"float"),s.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .glsl */ .H)`float getSize(){
return intrinsicWidth * size;
}`)),l.vvOpacity?(n.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__/* .VertexAttribute */ .r.OPACITYFEATUREATTRIBUTE,"float"),s.constants.add("vvOpacityNumber","int",8),s.uniforms.add(new _shaderModules_FloatsPassUniform_js__WEBPACK_IMPORTED_MODULE_3__/* .FloatsPassUniform */ .x("vvOpacityValues",(i=>i.vvOpacity.values),o),new _shaderModules_FloatsPassUniform_js__WEBPACK_IMPORTED_MODULE_3__/* .FloatsPassUniform */ .x("vvOpacityOpacities",(i=>i.vvOpacity.opacityValues),o),new _shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_2__/* .FloatPassUniform */ .m("vvOpacityFallback",(i=>i.vvOpacity.fallback))),s.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .glsl */ .H)`float interpolateOpacity(float value){
if (isnan(value)) {
return vvOpacityFallback;
}
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):s.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .glsl */ .H)`vec4 applyOpacity( vec4 color ){
return color;
}`),l.vvColor?(c.include(_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .VisualVariables */ .A,l),n.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__/* .VertexAttribute */ .r.COLORFEATUREATTRIBUTE,"float"),s.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .glsl */ .H)`vec4 getColor(){
return applyOpacity(interpolateVVColor(colorFeatureAttribute));
}`)):(n.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__/* .VertexAttribute */ .r.COLOR,"vec4"),s.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .glsl */ .H)`vec4 getColor(){
return applyOpacity(color);
}`))}


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

/***/ 16917:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _shaderModules_BooleanBindUniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10561);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72196);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function l(l){l.uniforms.add(new _shaderModules_BooleanBindUniform_js__WEBPACK_IMPORTED_MODULE_0__/* .BooleanBindUniform */ .o("alignPixelEnabled",(e=>e.alignPixelEnabled))),l.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),l.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}


/***/ }),

/***/ 97085:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ u),
/* harmony export */   R: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54009);
/* harmony import */ var _util_ScreenSizePerspective_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6916);
/* harmony import */ var _util_View_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63592);
/* harmony import */ var _shaderModules_Float4BindUniform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45393);
/* harmony import */ var _shaderModules_FloatBindUniform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17983);
/* harmony import */ var _shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35449);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72196);
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50645);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const d=.5;function u(u,v){u.include(_util_ScreenSizePerspective_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .ScreenSizePerspective */ .Y6),u.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_7__/* .VertexAttribute */ .r.POSITION,"vec3"),u.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_7__/* .VertexAttribute */ .r.NORMAL,"vec3"),u.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_7__/* .VertexAttribute */ .r.CENTEROFFSETANDDISTANCE,"vec4");const m=u.vertex;(0,_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .addProjViewLocalOrigin */ .NB)(m,v),(0,_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .addCameraPosition */ .yu)(m,v),m.uniforms.add(new _shaderModules_Float4BindUniform_js__WEBPACK_IMPORTED_MODULE_3__/* .Float4BindUniform */ .I("viewport",(e=>e.camera.fullViewport)),new _shaderModules_FloatPassUniform_js__WEBPACK_IMPORTED_MODULE_5__/* .FloatPassUniform */ .m("polygonOffset",(e=>e.shaderPolygonOffset)),new _shaderModules_FloatBindUniform_js__WEBPACK_IMPORTED_MODULE_4__/* .FloatBindUniform */ .U("cameraGroundRelative",(e=>e.camera.aboveGround?1:-1))),v.hasVerticalOffset&&(0,_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .addVerticalOffset */ .V)(m),m.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .glsl */ .H)`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),m.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .glsl */ .H)`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${v.terrainDepthTest?_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .glsl */ .H.float(0):(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .glsl */ .H)`sign(pointGroundDistance)`};
      if (pointGroundSign == 0.0) {
        pointGroundSign = cameraGroundRelative;
      }

      // cameraGroundRelative is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = cameraGroundRelative * pointGroundSign;

      // view angle dependent part of polygon offset emulation: we take the absolute value because the sign that is
      // dropped is instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),v.draped&&!v.hasVerticalOffset||(0,_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .addViewNormal */ .S7)(m),v.draped||(m.uniforms.add(new _shaderModules_FloatBindUniform_js__WEBPACK_IMPORTED_MODULE_4__/* .FloatBindUniform */ .U("perDistancePixelRatio",(e=>Math.tan(e.camera.fovY/2)/(e.camera.fullViewport[2]/2)))),m.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .glsl */ .H)`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .glsl */ .H.float(d)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),v.screenCenterOffsetUnitsEnabled&&(0,_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .addPixelRatio */ .Nz)(m),v.hasScreenSizePerspective&&(0,_util_ScreenSizePerspective_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .addScreenSizePerspectiveAlignment */ .OH)(m),m.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .glsl */ .H)`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${v.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${v.hasScreenSizePerspective&&(v.hasVerticalOffset||v.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${v.hasVerticalOffset?v.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${v.hasVerticalOffset?(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .glsl */ .H)`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${v.screenCenterOffsetUnitsEnabled?"":(0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_6__/* .glsl */ .H)`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${v.screenCenterOffsetUnitsEnabled?v.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${v.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}


/***/ }),

/***/ 15354:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ c)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var c;!function(c){c[c.Occluded=0]="Occluded",c[c.NotOccluded=1]="NotOccluded",c[c.Both=2]="Both",c[c.COUNT=3]="COUNT"}(c||(c={}));


/***/ }),

/***/ 3097:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _AlignPixel_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16917);
/* harmony import */ var _HUDRenderStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15354);
/* harmony import */ var _shaderModules_Float4BindUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45393);
/* harmony import */ var _shaderModules_FloatBindUniform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17983);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72196);
/* harmony import */ var _shaderModules_Texture2DBindUniform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96390);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function n(n){n.vertex.uniforms.add(new _shaderModules_FloatBindUniform_js__WEBPACK_IMPORTED_MODULE_3__/* .FloatBindUniform */ .U("renderTransparentlyOccludedHUD",(e=>e.hudRenderStyle===_HUDRenderStyle_js__WEBPACK_IMPORTED_MODULE_1__/* .HUDRenderStyle */ .D.Occluded?1:e.hudRenderStyle===_HUDRenderStyle_js__WEBPACK_IMPORTED_MODULE_1__/* .HUDRenderStyle */ .D.NotOccluded?0:.75)),new _shaderModules_Float4BindUniform_js__WEBPACK_IMPORTED_MODULE_2__/* .Float4BindUniform */ .I("viewport",(e=>e.camera.fullViewport)),new _shaderModules_Texture2DBindUniform_js__WEBPACK_IMPORTED_MODULE_5__/* .Texture2DBindUniform */ .x("hudVisibilityTexture",(e=>e.hudVisibility?.getTexture()))),n.vertex.include(_AlignPixel_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .AlignPixel */ .K),n.vertex.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_4__/* .glsl */ .H)`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}


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

/***/ 6821:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: () => (/* binding */ LineStipple_glsl_f),
  h: () => (/* binding */ S)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl.js
var RgbaFloatEncoding_glsl = __webpack_require__(70224);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js + 1 modules
var View_glsl = __webpack_require__(63592);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js
var Float4PassUniform = __webpack_require__(1411);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatBindUniform.js
var FloatBindUniform = __webpack_require__(17983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js
var FloatPassUniform = __webpack_require__(35449);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/glsl.js
var glsl = __webpack_require__(72196);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js
var Texture2DPassUniform = __webpack_require__(79856);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/floatRGBA.js
var floatRGBA = __webpack_require__(51859);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/enums.js
var enums = __webpack_require__(41746);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/Texture.js
var Texture = __webpack_require__(8595);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/TextureDescriptor.js
var TextureDescriptor = __webpack_require__(45758);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/stippleTextureRepository.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function u(t,u){return new e((e=>{const{encodedData:u,textureSize:c}=a(e),f=new i;return f.internalFormat=r.RGBA,f.width=c,f.height=1,f.wrapMode=o.REPEAT,new n(t,f,u)}),(t=>`${t.pattern.join(",")}-r${t.pixelRatio}`),u)}function a(e){const r=c(e),o=1/e.pixelRatio,n=f(e),i=s(e),u=(Math.floor(.5*(i-1))+.5)*o,a=[];let l=1;for(const t of r){for(let e=0;e<t;e++){const r=l*(Math.min(e,t-1-e)+.5)*o/u*.5+.5;a.push(r)}l=-l}const p=Math.round(r[0]/2),m=[...a.slice(p),...a.slice(0,p)],d=new Uint8Array(4*n);let x=0;for(const c of m)t(c,d,x),x+=4;return{encodedData:d,textureSize:n}}function c(t){return t.pattern.map((e=>Math.round(e*t.pixelRatio)))}function f(t){if(null==t)return 1;const e=c(t);return Math.floor(e.reduce(((t,e)=>t+e)))}function s(t){return c(t).reduce(((t,e)=>Math.max(t,e)))}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec42.js
var vec42 = __webpack_require__(2662);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f64.js
var vec4f64 = __webpack_require__(28152);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/ensureColor4.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function ensureColor4_s(t){return null==t?vec4f64/* ZEROS */.uY:4===t.length?t:(0,vec42.s)(ensureColor4_c,t[0],t[1],t[2],1)}const ensureColor4_c=(0,vec4f64/* create */.vt)();

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/LineStipple.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function LineStipple_glsl_f(n,d){if(!d.stippleEnabled)return void n.fragment.code.add((0,glsl/* glsl */.H)`float getStippleAlpha() { return 1.0; }
void discardByStippleAlpha(float stippleAlpha, float threshold) {}
vec4 blendStipple(vec4 color, float stippleAlpha) { return color; }`);const f=!(d.draped&&d.stipplePreferContinuous),{vertex:g,fragment:h}=n;h.include(RgbaFloatEncoding_glsl/* RgbaFloatEncoding */.W),d.draped||((0,View_glsl/* addCameraPosition */.yu)(g,d),g.uniforms.add(new FloatBindUniform/* FloatBindUniform */.U("worldToScreenPerDistanceRatio",(({camera:e})=>1/e.perScreenPixelRatio))).code.add((0,glsl/* glsl */.H)`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),n.varyings.add("vStippleDistance","float"),n.varyings.add("vStippleDistanceLimits","vec2"),n.varyings.add("vStipplePatternStretch","float"),g.code.add((0,glsl/* glsl */.H)`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${glsl/* glsl */.H.float(LineStipple_glsl_u)};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),g.code.add((0,glsl/* glsl */.H)`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),g.code.add((0,glsl/* glsl */.H)`
    if (segmentLengthPseudoScreen >= ${f?"patternLength":"1e4"}) {
  `),(0,View_glsl/* addPixelRatio */.Nz)(g),g.code.add((0,glsl/* glsl */.H)`float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
float segmentLengthScreenRounded = flooredRepetitions * patternLength;
float stretch = repetitions / flooredRepetitions;
vStipplePatternStretch = max(0.75, stretch);
return vec2(0.0, segmentLengthScreenRounded);
}
return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
}`),h.uniforms.add(new Texture2DPassUniform/* Texture2DPassUniform */.N("stipplePatternTexture",(e=>e.stippleTexture)),new FloatPassUniform/* FloatPassUniform */.m("stipplePatternSDFNormalizer",(e=>m(e.stipplePattern))),new FloatPassUniform/* FloatPassUniform */.m("stipplePatternPixelSizeInv",(e=>1/S(e)))),d.stippleOffColorEnabled&&h.uniforms.add(new Float4PassUniform/* Float4PassUniform */.E("stippleOffColor",(e=>ensureColor4_s(e.stippleOffColor)))),h.code.add((0,glsl/* glsl */.H)`float getStippleSDF(out bool isClamped) {
float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv * vLineSizeInv;
u = fract(u);
float encodedSDF = rgbaTofloat(texture(stipplePatternTexture, vec2(u, 0.5)));
float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;
return (sdf - 0.5) * vStipplePatternStretch + 0.5;
}
float getStippleSDF() {
bool ignored;
return getStippleSDF(ignored);
}
float getStippleAlpha() {
bool isClamped;
float stippleSDF = getStippleSDF(isClamped);
float antiAliasedResult = clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);
return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
}`),h.code.add((0,glsl/* glsl */.H)`
    void discardByStippleAlpha(float stippleAlpha, float threshold) {
     ${(0,glsl.If)(!d.stippleOffColorEnabled,"if (stippleAlpha < threshold) { discard; }")}
    }

    vec4 blendStipple(vec4 color, float stippleAlpha) {
      return ${d.stippleOffColorEnabled?"mix(color, stippleOffColor, stippleAlpha)":"vec4(color.rgb, color.a * stippleAlpha)"};
    }
  `)}function m(e){return e?(Math.floor(.5*(s(e)-1))+.5)/e.pixelRatio:1}function S(e){const t=e.stipplePattern;return t?f(e.stipplePattern)/t.pixelRatio:1}const LineStipple_glsl_u=.4;


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

/***/ 2119:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _support_engineContent_marker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50980);
/* harmony import */ var _util_View_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63592);
/* harmony import */ var _shaderModules_FloatBindUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17983);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72196);
/* harmony import */ var _shaders_LineMarkerTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58376);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function n(n,i){const d=n.vertex;(0,_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .addPixelRatio */ .Nz)(d),null==d.uniforms.get("markerScale")&&d.constants.add("markerScale","float",1),d.constants.add("markerSizePerLineWidth","float",_support_engineContent_marker_js__WEBPACK_IMPORTED_MODULE_0__/* .markerSizePerLineWidth */ .PV).code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`),i.space===_shaders_LineMarkerTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__/* .LineMarkerSpace */ .lM.World&&(d.constants.add("maxSegmentLengthFraction","float",.45),d.uniforms.add(new _shaderModules_FloatBindUniform_js__WEBPACK_IMPORTED_MODULE_2__/* .FloatBindUniform */ .U("perRenderPixelRatio",(e=>e.camera.perRenderPixelRatio))),d.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_3__/* .glsl */ .H)`bool areWorldMarkersHidden(vec4 pos, vec4 other) {
vec3 midPoint = mix(pos.xyz, other.xyz, 0.5);
float distanceToCamera = length(midPoint);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
float worldMarkerSize = getScreenMarkerSize() * screenToWorldRatio;
float segmentLen = length(pos.xyz - other.xyz);
return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
}
float getWorldMarkerSize(vec4 pos) {
float distanceToCamera = length(pos.xyz);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
return getScreenMarkerSize() * screenToWorldRatio;
}`))}


/***/ }),

/***/ 46823:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _output_ReadDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65743);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72196);
/* harmony import */ var _shaderModules_Texture2DBindUniform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96390);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function r(r){r.include(_output_ReadDepth_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .ReadDepth */ .E),r.uniforms.add(new _shaderModules_Texture2DBindUniform_js__WEBPACK_IMPORTED_MODULE_2__/* .Texture2DBindUniform */ .x("geometryDepthTexture",(e=>e.geometryDepth?.attachment))),r.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`bool geometryDepthTest(vec2 pos, float elementDepth) {
float geometryDepth = linearDepthFromTexture(geometryDepthTexture, pos);
return (elementDepth < (geometryDepth - 1.0));
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

/***/ 94643:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  zC: () => (/* binding */ mt),
  C1: () => (/* binding */ C),
  EE: () => (/* binding */ at),
  YG: () => (/* binding */ ct),
  nW: () => (/* binding */ ft),
  td: () => (/* binding */ B),
  _B: () => (/* binding */ gt),
  Nq: () => (/* binding */ it),
  DJ: () => (/* binding */ lt),
  Y6: () => (/* binding */ rt),
  uX: () => (/* binding */ st),
  Z8: () => (/* binding */ wt),
  CM: () => (/* binding */ ot),
  Gj: () => (/* binding */ ut),
  Ho: () => (/* binding */ et),
  Nb: () => (/* binding */ pt),
  Xl: () => (/* binding */ Mt),
  xh: () => (/* binding */ Ot)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(24121);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f32.js
var vec3f32 = __webpack_require__(3912);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(58359);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/DoubleArray.js
var DoubleArray = __webpack_require__(90166);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/FloatArray.js
var FloatArray = __webpack_require__(50961);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/Indices.js
var Indices = __webpack_require__(42965);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/plane.js
var plane = __webpack_require__(38774);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/ray.js
var ray = __webpack_require__(10151);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Attribute.js
var Attribute = __webpack_require__(70807);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/BufferVectorMath.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var n;!function(n){function t(n,t){const c=n[t],o=n[t+1],r=n[t+2];return Math.sqrt(c*c+o*o+r*r)}function c(n,t){const c=n[t],o=n[t+1],r=n[t+2],u=1/Math.sqrt(c*c+o*o+r*r);n[t]*=u,n[t+1]*=u,n[t+2]*=u}function o(n,t,c){n[t]*=c,n[t+1]*=c,n[t+2]*=c}function r(n,t,c,o,r,u=t){(r=r||n)[u]=n[t]+c[o],r[u+1]=n[t+1]+c[o+1],r[u+2]=n[t+2]+c[o+2]}function u(n,t,c,o,r,u=t){(r=r||n)[u]=n[t]-c[o],r[u+1]=n[t+1]-c[o+1],r[u+2]=n[t+2]-c[o+2]}n.length=t,n.normalize=c,n.scale=o,n.add=r,n.subtract=u}(n||(n={}));

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Geometry.js + 1 modules
var Geometry = __webpack_require__(59816);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js
var Util = __webpack_require__(58947);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js
var VertexAttribute = __webpack_require__(50645);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectableGeometry.js
var IntersectableGeometry = __webpack_require__(27514);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/GeometryUtil.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const j=n,E=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],U=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],V=[0,0,1,0,1,1,0,1],v=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],x=new Array(36);for(let Nt=0;Nt<6;Nt++)for(let t=0;t<6;t++)x[6*Nt+t]=Nt;const F=new Array(36);for(let Nt=0;Nt<6;Nt++)F[6*Nt]=0,F[6*Nt+1]=1,F[6*Nt+2]=2,F[6*Nt+3]=2,F[6*Nt+4]=3,F[6*Nt+5]=0;function C(t,n){Array.isArray(n)||(n=[n,n,n]);const e=new Array(24);for(let o=0;o<8;o++)e[3*o]=E[o][0]*n[0],e[3*o+1]=E[o][1]*n[1],e[3*o+2]=E[o][2]*n[2];return new Geometry/* Geometry */.V(t,[[VertexAttribute/* VertexAttribute */.r.POSITION,new Attribute/* Attribute */.n(e,v,3,!0)],[VertexAttribute/* VertexAttribute */.r.NORMAL,new Attribute/* Attribute */.n(U,x,3)],[VertexAttribute/* VertexAttribute */.r.UV0,new Attribute/* Attribute */.n(V,F,2)]])}const G=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],D=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],q=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],z=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function B(t,n){Array.isArray(n)||(n=[n,n,n]);const e=new Array(18);for(let o=0;o<6;o++)e[3*o]=G[o][0]*n[0],e[3*o+1]=G[o][1]*n[1],e[3*o+2]=G[o][2]*n[2];return new Geometry/* Geometry */.V(t,[[VertexAttribute/* VertexAttribute */.r.POSITION,new Attribute/* Attribute */.n(e,q,3,!0)],[VertexAttribute/* VertexAttribute */.r.NORMAL,new Attribute/* Attribute */.n(D,z,3)]])}const k=(0,vec3f32/* fromValues */.fA)(-.5,0,-.5),Z=(0,vec3f32/* fromValues */.fA)(.5,0,-.5),H=(0,vec3f32/* fromValues */.fA)(0,0,.5),J=(0,vec3f32/* fromValues */.fA)(0,.5,0),K=(0,vec3f32/* create */.vt)(),Q=(0,vec3f32/* create */.vt)(),W=(0,vec3f32/* create */.vt)(),X=(0,vec3f32/* create */.vt)(),Y=(0,vec3f32/* create */.vt)();(0,vec32.d)(K,k,J),(0,vec32.d)(Q,k,Z),(0,vec32.h)(W,K,Q),(0,vec32.n)(W,W),(0,vec32.d)(K,Z,J),(0,vec32.d)(Q,Z,H),(0,vec32.h)(X,K,Q),(0,vec32.n)(X,X),(0,vec32.d)(K,H,J),(0,vec32.d)(Q,H,k),(0,vec32.h)(Y,K,Q),(0,vec32.n)(Y,Y);const $=[k,Z,H,J],_=[0,-1,0,W[0],W[1],W[2],X[0],X[1],X[2],Y[0],Y[1],Y[2]],tt=[0,1,2,3,1,0,3,2,1,3,0,2],nt=[0,0,0,1,1,1,2,2,2,3,3,3];function et(t,n){Array.isArray(n)||(n=[n,n,n]);const e=new Array(12);for(let o=0;o<4;o++)e[3*o]=$[o][0]*n[0],e[3*o+1]=$[o][1]*n[1],e[3*o+2]=$[o][2]*n[2];return new Geometry/* Geometry */.V(t,[[VertexAttribute/* VertexAttribute */.r.POSITION,new Attribute/* Attribute */.n(e,tt,3,!0)],[VertexAttribute/* VertexAttribute */.r.NORMAL,new Attribute/* Attribute */.n(_,nt,3)]])}function ot(t,n,e,o,s={uv:!0}){const r=-Math.PI,l=2*Math.PI,h=-Math.PI/2,u=Math.PI,c=Math.max(3,Math.floor(e)),a=Math.max(2,Math.floor(o)),f=(c+1)*(a+1),p=(0,FloatArray/* newFloatArray */.oe)(3*f),i=(0,FloatArray/* newFloatArray */.oe)(3*f),w=(0,FloatArray/* newFloatArray */.oe)(2*f),g=[];let m=0;for(let O=0;O<=a;O++){const t=[],e=O/a,o=h+e*u,s=Math.cos(o);for(let h=0;h<=c;h++){const u=h/c,a=r+u*l,f=Math.cos(a)*s,g=Math.sin(o),O=-Math.sin(a)*s;p[3*m]=f*n,p[3*m+1]=g*n,p[3*m+2]=O*n,i[3*m]=f,i[3*m+1]=g,i[3*m+2]=O,w[2*m]=u,w[2*m+1]=e,t.push(m),++m}g.push(t)}const A=new Array;for(let O=0;O<a;O++)for(let t=0;t<c;t++){const n=g[O][t],e=g[O][t+1],o=g[O+1][t+1],s=g[O+1][t];0===O?(A.push(n),A.push(o),A.push(s)):O===a-1?(A.push(n),A.push(e),A.push(o)):(A.push(n),A.push(e),A.push(o),A.push(o),A.push(s),A.push(n))}const I=[[VertexAttribute/* VertexAttribute */.r.POSITION,new Attribute/* Attribute */.n(p,A,3,!0)],[VertexAttribute/* VertexAttribute */.r.NORMAL,new Attribute/* Attribute */.n(i,A,3,!0)]];return s.uv&&I.push([VertexAttribute/* VertexAttribute */.r.UV0,new Attribute/* Attribute */.n(w,A,2,!0)]),s.offset&&(I[0][0]=VertexAttribute/* VertexAttribute */.r.OFFSET,I.push([VertexAttribute/* VertexAttribute */.r.POSITION,new Attribute/* Attribute */.n(Float64Array.from(s.offset),(0,Indices/* getZeroIndexArray */.EH)(A.length),3,!0)])),new Geometry/* Geometry */.V(t,I)}function st(t,n,e,o){const s=rt(n,e,o);return new Geometry/* Geometry */.V(t,s)}function rt(t,n,e){const o=t;let s,r;if(e)s=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],r=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];else{const t=o*(1+Math.sqrt(5))/2;s=[-o,t,0,o,t,0,-o,-t,0,o,-t,0,0,-o,t,0,o,t,0,-o,-t,0,o,-t,t,0,-o,t,0,o,-t,0,-o,-t,0,o],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1]}for(let c=0;c<s.length;c+=3)j.scale(s,c,t/j.length(s,c));let l={};function h(n,e){n>e&&([n,e]=[e,n]);const o=n.toString()+"."+e.toString();if(l[o])return l[o];let r=s.length;return s.length+=3,j.add(s,3*n,s,3*e,s,r),j.scale(s,r,t/j.length(s,r)),r/=3,l[o]=r,r}for(let c=0;c<n;c++){const t=r.length,n=new Array(4*t);for(let e=0;e<t;e+=3){const t=r[e],o=r[e+1],s=r[e+2],l=h(t,o),u=h(o,s),c=h(s,t),a=4*e;n[a]=t,n[a+1]=l,n[a+2]=c,n[a+3]=o,n[a+4]=u,n[a+5]=l,n[a+6]=s,n[a+7]=c,n[a+8]=u,n[a+9]=l,n[a+10]=u,n[a+11]=c}r=n,l={}}const u=(0,FloatArray/* floatArrayFrom */.Wz)(s);for(let c=0;c<u.length;c+=3)j.normalize(u,c);return[[VertexAttribute/* VertexAttribute */.r.POSITION,new Attribute/* Attribute */.n((0,FloatArray/* floatArrayFrom */.Wz)(s),r,3,!0)],[VertexAttribute/* VertexAttribute */.r.NORMAL,new Attribute/* Attribute */.n(u,r,3,!0)]]}function lt(t,{normal:n,position:e,color:o,rotation:s,size:r,centerOffsetAndDistance:l,uvi:h,featureAttribute:u,objectAndLayerIdColor:c=null}={}){const a=e?(0,vec3f64/* clone */.o8)(e):(0,vec3f64/* create */.vt)(),f=n?(0,vec3f64/* clone */.o8)(n):(0,vec3f64/* fromValues */.fA)(0,0,1),g=o?[255*o[0],255*o[1],255*o[2],o.length>3?255*o[3]:255]:[255,255,255,255],O=null!=r&&2===r.length?r:[1,1],m=null!=s?[s]:[0],A=(0,Indices/* getZeroIndexArray */.EH)(1),I=[[VertexAttribute/* VertexAttribute */.r.POSITION,new Attribute/* Attribute */.n(a,A,3,!0)],[VertexAttribute/* VertexAttribute */.r.NORMAL,new Attribute/* Attribute */.n(f,A,3,!0)],[VertexAttribute/* VertexAttribute */.r.COLOR,new Attribute/* Attribute */.n(g,A,4,!0)],[VertexAttribute/* VertexAttribute */.r.SIZE,new Attribute/* Attribute */.n(O,A,2)],[VertexAttribute/* VertexAttribute */.r.ROTATION,new Attribute/* Attribute */.n(m,A,1,!0)]];if(h&&I.push([VertexAttribute/* VertexAttribute */.r.UVI,new Attribute/* Attribute */.n(h,A,h.length)]),null!=l){const t=[l[0],l[1],l[2],l[3]];I.push([VertexAttribute/* VertexAttribute */.r.CENTEROFFSETANDDISTANCE,new Attribute/* Attribute */.n(t,A,4)])}if(u){const t=[u[0],u[1],u[2],u[3]];I.push([VertexAttribute/* VertexAttribute */.r.FEATUREATTRIBUTE,new Attribute/* Attribute */.n(t,A,4)])}return new Geometry/* Geometry */.V(t,I,null,IntersectableGeometry/* GeometryType */.d.Point,c)}const ht=[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0]];function ut(t,n=ht){const e=new Array(12);for(let c=0;c<4;c++)for(let t=0;t<3;t++)e[3*c+t]=n[c][t];const o=[0,1,2,2,3,0],s=[0,0,1],r=[0,0,0,0,0,0],l=[0,0,1,0,1,1,0,1],h=[255,255,255,255],u=[[VertexAttribute/* VertexAttribute */.r.POSITION,new Attribute/* Attribute */.n(e,o,3,!0)],[VertexAttribute/* VertexAttribute */.r.NORMAL,new Attribute/* Attribute */.n(s,r,3,!0)],[VertexAttribute/* VertexAttribute */.r.UV0,new Attribute/* Attribute */.n(l,o,2,!0)],[VertexAttribute/* VertexAttribute */.r.COLOR,new Attribute/* Attribute */.n(h,r,4,!0)]];return new Geometry/* Geometry */.V(t,u)}function ct(t,n,e,o,s=!0,r=!0){let l=0;const h=n,u=t;let a=(0,vec3f32/* fromValues */.fA)(0,l,0),f=(0,vec3f32/* fromValues */.fA)(0,l+u,0),p=(0,vec3f32/* fromValues */.fA)(0,-1,0),i=(0,vec3f32/* fromValues */.fA)(0,1,0);o&&(l=u,f=(0,vec3f32/* fromValues */.fA)(0,0,0),a=(0,vec3f32/* fromValues */.fA)(0,l,0),p=(0,vec3f32/* fromValues */.fA)(0,1,0),i=(0,vec3f32/* fromValues */.fA)(0,-1,0));const w=[f,a],g=[p,i],m=e+2,A=Math.sqrt(u*u+h*h);if(o)for(let O=e-1;O>=0;O--){const t=O*(2*Math.PI/e),n=(0,vec3f32/* fromValues */.fA)(Math.cos(t)*h,l,Math.sin(t)*h);w.push(n);const o=(0,vec3f32/* fromValues */.fA)(u*Math.cos(t)/A,-h/A,u*Math.sin(t)/A);g.push(o)}else for(let O=0;O<e;O++){const t=O*(2*Math.PI/e),n=(0,vec3f32/* fromValues */.fA)(Math.cos(t)*h,l,Math.sin(t)*h);w.push(n);const o=(0,vec3f32/* fromValues */.fA)(u*Math.cos(t)/A,h/A,u*Math.sin(t)/A);g.push(o)}const M=new Array,I=new Array;if(s){for(let t=3;t<w.length;t++)M.push(1),M.push(t-1),M.push(t),I.push(0),I.push(0),I.push(0);M.push(w.length-1),M.push(2),M.push(1),I.push(0),I.push(0),I.push(0)}if(r){for(let t=3;t<w.length;t++)M.push(t),M.push(t-1),M.push(0),I.push(t),I.push(t-1),I.push(1);M.push(0),M.push(2),M.push(w.length-1),I.push(1),I.push(2),I.push(g.length-1)}const y=(0,FloatArray/* newFloatArray */.oe)(3*m);for(let c=0;c<m;c++)y[3*c]=w[c][0],y[3*c+1]=w[c][1],y[3*c+2]=w[c][2];const N=(0,FloatArray/* newFloatArray */.oe)(3*m);for(let c=0;c<m;c++)N[3*c]=g[c][0],N[3*c+1]=g[c][1],N[3*c+2]=g[c][2];return[[VertexAttribute/* VertexAttribute */.r.POSITION,new Attribute/* Attribute */.n(y,M,3,!0)],[VertexAttribute/* VertexAttribute */.r.NORMAL,new Attribute/* Attribute */.n(N,I,3,!0)]]}function at(t,n,e,o,s,r=!0,l=!0){return new Geometry/* Geometry */.V(t,ct(n,e,o,s,r,l))}function ft(n,o,h,p,i,w,g){const m=i?(0,vec3f32/* clone */.o8)(i):(0,vec3f32/* fromValues */.fA)(1,0,0),A=w?(0,vec3f32/* clone */.o8)(w):(0,vec3f32/* fromValues */.fA)(0,0,0);g??=!0;const M=(0,vec3f32/* create */.vt)();(0,vec32.n)(M,m);const I=(0,vec3f32/* create */.vt)();(0,vec32.g)(I,M,Math.abs(o));const y=(0,vec3f32/* create */.vt)();(0,vec32.g)(y,I,-.5),(0,vec32.f)(y,y,A);const N=(0,vec3f32/* fromValues */.fA)(0,1,0);Math.abs(1-(0,vec32.e)(M,N))<.2&&(0,vec32.i)(N,0,0,1);const P=(0,vec3f32/* create */.vt)();(0,vec32.h)(P,M,N),(0,vec32.n)(P,P),(0,vec32.h)(N,P,M);const S=2*p+(g?2:0),b=p+(g?2:0),d=(0,FloatArray/* newFloatArray */.oe)(3*S),j=(0,FloatArray/* newFloatArray */.oe)(3*b),E=(0,FloatArray/* newFloatArray */.oe)(2*S),U=new Array(3*p*(g?4:2)),V=new Array(3*p*(g?4:2));g&&(d[3*(S-2)]=y[0],d[3*(S-2)+1]=y[1],d[3*(S-2)+2]=y[2],E[2*(S-2)]=0,E[2*(S-2)+1]=0,d[3*(S-1)]=d[3*(S-2)]+I[0],d[3*(S-1)+1]=d[3*(S-2)+1]+I[1],d[3*(S-1)+2]=d[3*(S-2)+2]+I[2],E[2*(S-1)]=1,E[2*(S-1)+1]=1,j[3*(b-2)]=-M[0],j[3*(b-2)+1]=-M[1],j[3*(b-2)+2]=-M[2],j[3*(b-1)]=M[0],j[3*(b-1)+1]=M[1],j[3*(b-1)+2]=M[2]);const v=(t,n,e)=>{U[t]=n,V[t]=e};let x=0;const F=(0,vec3f32/* create */.vt)(),C=(0,vec3f32/* create */.vt)();for(let t=0;t<p;t++){const n=t*(2*Math.PI/p);(0,vec32.g)(F,N,Math.sin(n)),(0,vec32.g)(C,P,Math.cos(n)),(0,vec32.f)(F,F,C),j[3*t]=F[0],j[3*t+1]=F[1],j[3*t+2]=F[2],(0,vec32.g)(F,F,h),(0,vec32.f)(F,F,y),d[3*t]=F[0],d[3*t+1]=F[1],d[3*t+2]=F[2],E[2*t]=t/p,E[2*t+1]=0,d[3*(t+p)]=d[3*t]+I[0],d[3*(t+p)+1]=d[3*t+1]+I[1],d[3*(t+p)+2]=d[3*t+2]+I[2],E[2*(t+p)]=t/p,E[2*t+1]=1;const e=(t+1)%p;v(x++,t,t),v(x++,t+p,t),v(x++,e,e),v(x++,e,e),v(x++,t+p,t),v(x++,e+p,e)}if(g){for(let t=0;t<p;t++){const n=(t+1)%p;v(x++,S-2,b-2),v(x++,t,b-2),v(x++,n,b-2)}for(let t=0;t<p;t++){const n=(t+1)%p;v(x++,t+p,b-1),v(x++,S-1,b-1),v(x++,n+p,b-1)}}const G=[[VertexAttribute/* VertexAttribute */.r.POSITION,new Attribute/* Attribute */.n(d,U,3,!0)],[VertexAttribute/* VertexAttribute */.r.NORMAL,new Attribute/* Attribute */.n(j,V,3,!0)],[VertexAttribute/* VertexAttribute */.r.UV0,new Attribute/* Attribute */.n(E,U,2,!0)]];return new Geometry/* Geometry */.V(n,G)}function pt(t,n,e,o,s,r){o=o||10,s=null==s||s,(0,Util/* assert */.vA)(n.length>1);const l=[[0,0,0]],h=[],u=[];for(let c=0;c<o;c++){h.push([0,-c-1,-(c+1)%o-1]);const t=c/o*2*Math.PI;u.push([Math.cos(t)*e,Math.sin(t)*e])}return it(t,u,n,l,h,s,r)}function it(h,u,a,f,i,w,g=(0,vec3f32/* fromValues */.fA)(0,0,0)){const m=u.length,A=(0,FloatArray/* newFloatArray */.oe)(a.length*m*3+(6*f.length||0)),M=(0,FloatArray/* newFloatArray */.oe)(a.length*m*3+(f?6:0)),S=new Array,b=new Array;let d=0,j=0;const E=(0,vec3f64/* create */.vt)(),U=(0,vec3f64/* create */.vt)(),V=(0,vec3f64/* create */.vt)(),v=(0,vec3f64/* create */.vt)(),x=(0,vec3f64/* create */.vt)(),F=(0,vec3f64/* create */.vt)(),C=(0,vec3f64/* create */.vt)(),G=(0,vec3f64/* create */.vt)(),D=(0,vec3f64/* create */.vt)(),q=(0,vec3f64/* create */.vt)(),z=(0,vec3f64/* create */.vt)(),B=(0,vec3f64/* create */.vt)(),k=(0,vec3f64/* create */.vt)(),Z=(0,plane/* create */.vt)();(0,vec32.i)(D,0,1,0),(0,vec32.d)(U,a[1],a[0]),(0,vec32.n)(U,U),w?((0,vec32.f)(G,a[0],g),(0,vec32.n)(V,G)):(0,vec32.i)(V,0,0,1),Mt(U,V,D,D,x,V,It),(0,vec32.c)(v,V),(0,vec32.c)(B,x);for(let t=0;t<f.length;t++)(0,vec32.g)(F,x,f[t][0]),(0,vec32.g)(G,V,f[t][2]),(0,vec32.f)(F,F,G),(0,vec32.f)(F,F,a[0]),A[d++]=F[0],A[d++]=F[1],A[d++]=F[2];M[j++]=-U[0],M[j++]=-U[1],M[j++]=-U[2];for(let t=0;t<i.length;t++)S.push(i[t][0]>0?i[t][0]:-i[t][0]-1+f.length),S.push(i[t][1]>0?i[t][1]:-i[t][1]-1+f.length),S.push(i[t][2]>0?i[t][2]:-i[t][2]-1+f.length),b.push(0),b.push(0),b.push(0);let H=f.length;const J=f.length-1;for(let t=0;t<a.length;t++){let h=!1;if(t>0){(0,vec32.c)(E,U),t<a.length-1?((0,vec32.d)(U,a[t+1],a[t]),(0,vec32.n)(U,U)):h=!0,(0,vec32.f)(q,E,U),(0,vec32.n)(q,q),(0,vec32.f)(z,a[t-1],v),(0,plane/* fromPositionAndNormal */.O_)(a[t],q,Z);(0,plane/* intersectRay */.Ui)(Z,(0,ray/* wrap */.LV)(z,E),G)?((0,vec32.d)(G,G,a[t]),(0,vec32.n)(V,G),(0,vec32.h)(x,q,V),(0,vec32.n)(x,x)):Mt(q,v,B,D,x,V,It),(0,vec32.c)(v,V),(0,vec32.c)(B,x)}w&&((0,vec32.f)(G,a[t],g),(0,vec32.n)(k,G));for(let n=0;n<m;n++)if((0,vec32.g)(F,x,u[n][0]),(0,vec32.g)(G,V,u[n][1]),(0,vec32.f)(F,F,G),(0,vec32.n)(C,F),M[j++]=C[0],M[j++]=C[1],M[j++]=C[2],(0,vec32.f)(F,F,a[t]),A[d++]=F[0],A[d++]=F[1],A[d++]=F[2],!h){const t=(n+1)%m;S.push(H+n),S.push(H+m+n),S.push(H+t),S.push(H+t),S.push(H+m+n),S.push(H+m+t);for(let n=0;n<6;n++){const t=S.length-6;b.push(S[t+n]-J)}}H+=m}const K=a[a.length-1];for(let t=0;t<f.length;t++)(0,vec32.g)(F,x,f[t][0]),(0,vec32.g)(G,V,f[t][1]),(0,vec32.f)(F,F,G),(0,vec32.f)(F,F,K),A[d++]=F[0],A[d++]=F[1],A[d++]=F[2];const Q=j/3;M[j++]=U[0],M[j++]=U[1],M[j++]=U[2];const W=H-m;for(let t=0;t<i.length;t++)S.push(i[t][0]>=0?H+i[t][0]:-i[t][0]-1+W),S.push(i[t][2]>=0?H+i[t][2]:-i[t][2]-1+W),S.push(i[t][1]>=0?H+i[t][1]:-i[t][1]-1+W),b.push(Q),b.push(Q),b.push(Q);const X=[[VertexAttribute/* VertexAttribute */.r.POSITION,new Attribute/* Attribute */.n(A,S,3,!0)],[VertexAttribute/* VertexAttribute */.r.NORMAL,new Attribute/* Attribute */.n(M,b,3,!0)]];return new Geometry/* Geometry */.V(h,X)}function wt(t,n,e,o){(0,Util/* assert */.vA)(n.length>1,"createPolylineGeometry(): polyline needs at least 2 points"),(0,Util/* assert */.vA)(3===n[0].length,"createPolylineGeometry(): malformed vertex"),(0,Util/* assert */.vA)(null==e||e.length===n.length,"createPolylineGeometry: need same number of points and normals"),(0,Util/* assert */.vA)(null==e||3===e[0].length,"createPolylineGeometry(): malformed normal");const s=(0,DoubleArray/* newDoubleArray */.jh)(3*n.length),r=new Array(2*(n.length-1));let l=0,h=0;for(let c=0;c<n.length;c++){for(let t=0;t<3;t++)s[l++]=n[c][t];c>0&&(r[h++]=c-1,r[h++]=c)}const u=[[VertexAttribute/* VertexAttribute */.r.POSITION,new Attribute/* Attribute */.n(s,r,3,!0)]];if(e){const t=(0,FloatArray/* newFloatArray */.oe)(3*e.length);let o=0;for(let s=0;s<n.length;s++)for(let n=0;n<3;n++)t[o++]=e[s][n];u.push([VertexAttribute/* VertexAttribute */.r.NORMAL,new Attribute/* Attribute */.n(t,r,3,!0)])}return o&&u.push([VertexAttribute/* VertexAttribute */.r.COLOR,new Attribute/* Attribute */.n(o,(0,Indices/* getContinuousIndexArray */.tM)(o.length/4),4)]),new Geometry/* Geometry */.V(t,u,null,IntersectableGeometry/* GeometryType */.d.Line)}function gt(t,n,e,o,s,r=0){const l=new Array(18),h=[[-e,r,s/2],[o,r,s/2],[0,n+r,s/2],[-e,r,-s/2],[o,r,-s/2],[0,n+r,-s/2]],u=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let c=0;c<6;c++)l[3*c]=h[c][0],l[3*c+1]=h[c][1],l[3*c+2]=h[c][2];return new Geometry/* Geometry */.V(t,[[VertexAttribute/* VertexAttribute */.r.POSITION,new Attribute/* Attribute */.n(l,u,3,!0)]])}function Ot(n,e){const o=n.getMutableAttribute(VertexAttribute/* VertexAttribute */.r.POSITION).data;for(let s=0;s<o.length;s+=3){const n=o[s],r=o[s+1],l=o[s+2];(0,vec32.i)(yt,n,r,l),(0,vec32.t)(yt,yt,e),o[s]=yt[0],o[s+1]=yt[1],o[s+2]=yt[2]}}function mt(t,n=t){const e=t.attributes,o=e.get(VertexAttribute/* VertexAttribute */.r.POSITION).data,s=e.get(VertexAttribute/* VertexAttribute */.r.NORMAL).data;if(s){const t=n.getMutableAttribute(VertexAttribute/* VertexAttribute */.r.NORMAL).data;for(let n=0;n<s.length;n+=3){const e=s[n+1];t[n+1]=-s[n+2],t[n+2]=e}}if(o){const t=n.getMutableAttribute(VertexAttribute/* VertexAttribute */.r.POSITION).data;for(let n=0;n<o.length;n+=3){const e=o[n+1];t[n+1]=-o[n+2],t[n+2]=e}}}function At(t,n,o,s,r){return!(Math.abs((0,vec32.e)(n,t))>r)&&((0,vec32.h)(o,t,n),(0,vec32.n)(o,o),(0,vec32.h)(s,o,t),(0,vec32.n)(s,s),!0)}function Mt(t,n,e,o,s,r,l){return At(t,n,s,r,l)||At(t,e,s,r,l)||At(t,o,s,r,l)}const It=.99619469809,yt=(0,vec3f64/* create */.vt)();


/***/ }),

/***/ 94137:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ e)
/* harmony export */ });
/* unused harmony export GeometryWithMapPositions */
/* harmony import */ var _Geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59816);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class t extends (/* unused pure expression or super */ null && (o)){}function e(o){return null!=o.mapPositions}


/***/ }),

/***/ 24734:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _core_uid_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(65061);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24121);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58359);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28152);
/* harmony import */ var _geometry_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84119);
/* harmony import */ var _Attribute_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70807);
/* harmony import */ var _Geometry_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59816);
/* harmony import */ var _LocalOriginFactory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32926);
/* harmony import */ var _Object3D_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55103);
/* harmony import */ var _testUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53834);
/* harmony import */ var _VertexAttribute_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(50645);
/* harmony import */ var _WebGLLayer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(54671);
/* harmony import */ var _materials_RibbonLineMaterial_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(96824);
/* harmony import */ var _IntersectableGeometry_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(27514);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class l{constructor(r){this._originSR=r,this._rootOriginId="root/"+(0,_core_uid_js__WEBPACK_IMPORTED_MODULE_14__/* .generateUID */ .c)(),this._origins=new Map,this._objects=new Map,this._gridSize=5e5}getOrigin(t){const i=this._origins.get(this._rootOriginId);if(null==i){const r=_testUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .gridLocalOriginFactory */ .Q.rootOrigin;if(null!=r)return this._origins.set(this._rootOriginId,(0,_LocalOriginFactory_js__WEBPACK_IMPORTED_MODULE_7__/* .fromValues */ .f)(r[0],r[1],r[2],this._rootOriginId)),this.getOrigin(t);const i=(0,_LocalOriginFactory_js__WEBPACK_IMPORTED_MODULE_7__/* .fromValues */ .f)(t[0]+Math.random()-.5,t[1]+Math.random()-.5,t[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,i),i}const o=this._gridSize,s=Math.round(t[0]/o),e=Math.round(t[1]/o),n=Math.round(t[2]/o),h=`${s}/${e}/${n}`;let c=this._origins.get(h);const g=.5*o;if((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.d)(_,t,i.vec3),_[0]=Math.abs(_[0]),_[1]=Math.abs(_[1]),_[2]=Math.abs(_[2]),_[0]<g&&_[1]<g&&_[2]<g){if(c){const i=Math.max(..._);(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.d)(_,t,c.vec3),_[0]=Math.abs(_[0]),_[1]=Math.abs(_[1]),_[2]=Math.abs(_[2]);if(Math.max(..._)<i)return c}return i}return c||(c=(0,_LocalOriginFactory_js__WEBPACK_IMPORTED_MODULE_7__/* .fromValues */ .f)(s*o,e*o,n*o,h),this._origins.set(h,c)),c}_drawOriginBox(t,r=(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_3__/* .fromValues */ .fA)(1,1,0,1)){const i=window.view,a=i.stage,m=r.toString();if(!this._objects.has(m)){this._material=new _materials_RibbonLineMaterial_js__WEBPACK_IMPORTED_MODULE_12__/* .RibbonLineMaterial */ .W({width:2,color:r});const t=new _WebGLLayer_js__WEBPACK_IMPORTED_MODULE_11__/* .WebGLLayer */ .x(a,{pickable:!1}),i=new _Object3D_js__WEBPACK_IMPORTED_MODULE_8__/* .Object3D */ .B({castShadow:!1});t.add(i),this._objects.set(m,i)}const l=this._objects.get(m),_=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],p=_.length,j=new Array(3*p),b=new Array,u=.5*this._gridSize;for(let o=0;o<p;o++)j[3*o]=t[0]+(1&_[o]?u:-u),j[3*o+1]=t[1]+(2&_[o]?u:-u),j[3*o+2]=t[2]+(4&_[o]?u:-u),o>0&&b.push(o-1,o);(0,_geometry_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_4__.projectBuffer)(j,this._originSR,0,j,i.renderSpatialReference,0,p);const M=new _Geometry_js__WEBPACK_IMPORTED_MODULE_6__/* .Geometry */ .V(this._material,[[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_10__/* .VertexAttribute */ .r.POSITION,new _Attribute_js__WEBPACK_IMPORTED_MODULE_5__/* .Attribute */ .n(j,b,3,!0)]],null,_IntersectableGeometry_js__WEBPACK_IMPORTED_MODULE_13__/* .GeometryType */ .d.Line);l.addGeometry(M)}get test(){}}const _=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)();


/***/ }),

/***/ 94456:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  rQ: () => (/* binding */ c),
  lx: () => (/* binding */ i)
});

// UNUSED EXPORTS: isHUDIntersectorResult

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(58359);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectorResult.js
var IntersectorResult = __webpack_require__(69798);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectorType.js
var IntersectorType = __webpack_require__(68427);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/ObjectTarget.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class t{constructor(t,e,i){this.object=t,this.geometryId=e,this.primitiveIndex=i}}

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/HUDIntersectorResult.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class c extends IntersectorResult/* IntersectorResult */.i{constructor(){super(...arguments),this.intersector=IntersectorType/* IntersectorType */.d.HUD}}class i extends t{constructor(r,e){super(r.object,r.geometryId,r.primitiveIndex),this.center=(0,vec3f64/* clone */.o8)(e)}}function n(t){return e(t)&&t.intersector===s.HUD&&!!t.target&&"center"in t.target}


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

/***/ 74515:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ g)
/* harmony export */ });
/* unused harmony export defaultTolerance */
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24121);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58359);
/* harmony import */ var _geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10151);
/* harmony import */ var _ViewingMode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10714);
/* harmony import */ var _webgl_RenderCamera_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21750);
/* harmony import */ var _HUDIntersectorResult_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94456);
/* harmony import */ var _IntersectorInterfaces_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22531);
/* harmony import */ var _IntersectorResult_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69798);
/* harmony import */ var _IntersectorType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68427);
/* harmony import */ var _verticalOffsetUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(689);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const _=1e-5;class g{constructor(t){this.options=new _IntersectorInterfaces_js__WEBPACK_IMPORTED_MODULE_6__/* .IntersectorOptions */ .H,this._results=new O,this.transform=new _verticalOffsetUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .IntersectorTransform */ .dg,this.camera=new _webgl_RenderCamera_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,this.tolerance=_,this.verticalOffset=null,this._ray=(0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)(),this._rayEnd=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)(),this._rayBeginTransformed=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)(),this._rayEndTransformed=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)(),this.viewingMode=t??_ViewingMode_js__WEBPACK_IMPORTED_MODULE_3__/* .ViewingMode */ .RT.Global}get results(){return this._results}get ray(){return this._ray}get rayBegin(){return this._ray.origin}get rayEnd(){return this._rayEnd}reset(t,r,s){this.resetWithRay((0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_2__/* .fromPoints */ .Cr)(t,r,this._ray),s)}resetWithRay(r,s){this.camera=s,r!==this._ray&&(0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_2__/* .copy */ .C)(r,this._ray),0!==this.options.verticalOffset?this.viewingMode===_ViewingMode_js__WEBPACK_IMPORTED_MODULE_3__/* .ViewingMode */ .RT.Local?this._ray.origin[2]-=this.options.verticalOffset:this.verticalOffset=this.options.verticalOffset:this.verticalOffset=null,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.f)(this._rayEnd,this._ray.origin,this._ray.direction),this._results.init(this._ray)}intersect(t=null,r,s,i,e){this.point=r,this.filterPredicate=i,this.tolerance=s??_;const n=(0,_verticalOffsetUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .getVerticalOffsetObject3D */ .ou)(this.verticalOffset);if(t&&t.length>0){const r=e?t=>{e(t)&&this.intersectObject(t)}:t=>{this.intersectObject(t)};for(const s of t){const t=s.getSpatialQueryAccelerator?.();null!=t?(null!=n?t.forEachAlongRayWithVerticalOffset(this._ray.origin,this._ray.direction,r,n):t.forEachAlongRay(this._ray.origin,this._ray.direction,r),this.options.selectionMode&&this.options.hud&&t.forEachDegenerateObject(r)):s.objects.forEach((t=>r(t)))}}this.sortResults()}intersectObject(t){const s=t.geometries;if(!s)return;const i=t.effectiveTransformation,e=(0,_verticalOffsetUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .getVerticalOffsetObject3D */ .ou)(this.verticalOffset);for(const n of s){if(!n.visible)continue;const{material:s,id:a}=n;if(!s.visible)continue;this.transform.setAndInvalidateLazyTransforms(i,n.transformation),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.t)(this._rayBeginTransformed,this.rayBegin,this.transform.inverse),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.t)(this._rayEndTransformed,this.rayEnd,this.transform.inverse);const o=this.transform.transform;null!=e&&(e.objectTransform=this.transform),s.intersect(n,this.transform.transform,this,this._rayBeginTransformed,this._rayEndTransformed,((r,s,i,e)=>this.handleObjectIntersection({object:t,geometryId:a,primitiveIndex:i},r,s,o,e)))}}handleObjectIntersection(t,r,s,i,e){if(r<0||null!=this.filterPredicate&&!this.filterPredicate(this._ray.origin,this._rayEnd,r))return;const n=e?this._results.hud:this._results;t=e?new _HUDIntersectorResult_js__WEBPACK_IMPORTED_MODULE_5__/* .HUDTarget */ .lx(t,e):t;const a=e?i=>i.set(_IntersectorType_js__WEBPACK_IMPORTED_MODULE_8__/* .IntersectorType */ .d.HUD,t,r,s):e=>e.set(_IntersectorType_js__WEBPACK_IMPORTED_MODULE_8__/* .IntersectorType */ .d.OBJECT,t,r,s,i);if((null==n.min.distance||r<n.min.distance)&&a(n.min),this.options.store!==_IntersectorInterfaces_js__WEBPACK_IMPORTED_MODULE_6__/* .StoreResults */ .o.MIN&&(null==n.max.distance||r>n.max.distance)&&a(n.max),this.options.store===_IntersectorInterfaces_js__WEBPACK_IMPORTED_MODULE_6__/* .StoreResults */ .o.ALL)if(e){const t=new _HUDIntersectorResult_js__WEBPACK_IMPORTED_MODULE_5__/* .HUDIntersectorResult */ .rQ(this._ray);a(t),this._results.hud.all.push(t)}else{const t=new _IntersectorResult_js__WEBPACK_IMPORTED_MODULE_7__/* .IntersectorResult */ .i(this._ray);a(t),this._results.all.push(t)}}sortResults(t=this._results.all){t.sort(((t,r)=>t.distance!==r.distance?(t.distance??0)-(r.distance??0):t.drapedLayerOrder!==r.drapedLayerOrder?p(t.drapedLayerOrder,r.drapedLayerOrder):p(t.renderPriority,r.renderPriority)))}}function p(t,r){return(r??-Number.MAX_VALUE)-(t??-Number.MAX_VALUE)}class O{constructor(){this.min=new _IntersectorResult_js__WEBPACK_IMPORTED_MODULE_7__/* .IntersectorResult */ .i((0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)()),this.max=new _IntersectorResult_js__WEBPACK_IMPORTED_MODULE_7__/* .IntersectorResult */ .i((0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)()),this.hud={min:new _HUDIntersectorResult_js__WEBPACK_IMPORTED_MODULE_5__/* .HUDIntersectorResult */ .rQ((0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)()),max:new _HUDIntersectorResult_js__WEBPACK_IMPORTED_MODULE_5__/* .HUDIntersectorResult */ .rQ((0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)()),all:new Array},this.ground=new _IntersectorResult_js__WEBPACK_IMPORTED_MODULE_7__/* .IntersectorResult */ .i((0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)()),this.all=[]}init(t){this.min.init(t),this.max.init(t),this.ground.init(t),this.all.length=0,this.hud.min.init(t),this.hud.max.init(t),this.hud.all.length=0}}


/***/ }),

/***/ 22531:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ e),
/* harmony export */   o: () => (/* binding */ i)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class e{constructor(){this.verticalOffset=0,this.selectionMode=!1,this.hud=!0,this.selectOpaqueTerrainOnly=!0,this.invisibleTerrain=!1,this.backfacesTerrain=!0,this.isFiltered=!1,this.filteredLayerViewUids=[],this.store=i.ALL,this.normalRequired=!0,this.excludeLabels=!1}}var i;!function(e){e[e.MIN=0]="MIN",e[e.MINMAX=1]="MINMAX",e[e.ALL=2]="ALL"}(i||(i={}));


/***/ }),

/***/ 69798:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ p)
/* harmony export */ });
/* unused harmony export isValidIntersectorResult */
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21742);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86128);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24121);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58359);
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2662);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28152);
/* harmony import */ var _geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10151);
/* harmony import */ var _IntersectorType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68427);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class p{get ray(){return this._ray}get distanceInRenderSpace(){return null==this.distance?null:((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.g)(u,this.ray.direction,this.distance),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.l)(u))}withinDistance(t){return!!g(this)&&this.distanceInRenderSpace<=t}getIntersectionPoint(t){return!!g(this)&&((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.g)(u,this.ray.direction,this.distance),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.f)(t,this.ray.origin,u),!0)}getTransformedNormal(t){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.c)(j,this.normal),j[3]=0,(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_4__.t)(j,j,this.transformation),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.c)(t,j),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.n)(t,t)}constructor(t){this.intersector=_IntersectorType_js__WEBPACK_IMPORTED_MODULE_7__/* .IntersectorType */ .d.OBJECT,this.normal=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .vt)(),this.transformation=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)(),this._ray=(0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),this.init(t)}init(t){this.distance=this.target=this.drapedLayerOrder=this.renderPriority=null,this.intersector=_IntersectorType_js__WEBPACK_IMPORTED_MODULE_7__/* .IntersectorType */ .d.OBJECT,(0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_6__/* .copy */ .C)(t,this._ray)}set(r,s,e,a,o,c,m){this.intersector=r,this.distance=e,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.c)(this.normal,a??_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .UNIT_Z */ .Cb),(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__/* .copy */ .C)(this.transformation,o??_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_1__/* .IDENTITY */ .zK),this.target=s,this.drapedLayerOrder=c,this.renderPriority=m}copy(r){(0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_6__/* .copy */ .C)(r.ray,this._ray),this.intersector=r.intersector,this.distance=r.distance,this.target=r.target,this.drapedLayerOrder=r.drapedLayerOrder,this.renderPriority=r.renderPriority,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.c)(this.normal,r.normal),(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_0__/* .copy */ .C)(this.transformation,r.transformation)}}function g(t){return null!=t?.distance}const u=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .vt)(),j=(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__/* .create */ .vt)();


/***/ }),

/***/ 9286:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ s),
/* harmony export */   R: () => (/* binding */ r)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class s{constructor(s){this.layerViewUid=s}}class r extends s{constructor(s,r){super(s),this.graphicUid=r}}


/***/ }),

/***/ 68427:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ E)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var E;!function(E){E[E.OBJECT=0]="OBJECT",E[E.HUD=1]="HUD",E[E.TERRAIN=2]="TERRAIN",E[E.OVERLAY=3]="OVERLAY",E[E.I3S=4]="I3S",E[E.PCL=5]="PCL",E[E.LOD=6]="LOD",E[E.VOXEL=7]="VOXEL",E[E.TILES3D=8]="TILES3D"}(E||(E={}));


/***/ }),

/***/ 32926:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ t)
/* harmony export */ });
/* unused harmony export LocalOrigin */
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58359);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class s{constructor(r,s){this.vec3=r,this.id=s}}function t(t,o,c,e){return new s((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__/* .fromValues */ .fA)(t,o,c),e)}


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

/***/ 55103:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ A)
/* harmony export */ });
/* unused harmony export BoundingVolume */
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _core_uid_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(65061);
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21742);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86128);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24121);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58359);
/* harmony import */ var _chunks_sphere_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31803);
/* harmony import */ var _support_mathUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72699);
/* harmony import */ var _basicInterfaces_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(91013);
/* harmony import */ var _Object3DStateID_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22775);
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(58947);
/* harmony import */ var _VertexAttribute_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(50645);
/* harmony import */ var _materials_renderers_utils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(29688);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class A{constructor(i={}){this.id=(0,_core_uid_js__WEBPACK_IMPORTED_MODULE_12__/* .generateUID */ .c)(),this._highlightIds=new Set,this._shaderTransformation=null,this._visible=!0,this.castShadow=i.castShadow??!0,this.usesVerticalDistanceToGround=i.usesVerticalDistanceToGround??!1,this.graphicUid=i.graphicUid,this.layerViewUid=i.layerViewUid,i.isElevationSource&&(this.lastValidElevationBB=new M),this._geometries=i.geometries?Array.from(i.geometries):new Array}dispose(){this._geometries.length=0}get layer(){return this._layer}set layer(t){(0,_Util_js__WEBPACK_IMPORTED_MODULE_9__/* .assert */ .vA)(null==this._layer||null==t,"Object3D can only be added to a single Layer"),this._layer=t}addGeometry(t){t.visible=this._visible,this._geometries.push(t);for(const i of this._highlightIds)t.addHighlight(i);this._emit("geometryAdded",{object:this,geometry:t}),this._highlightIds.size&&this._emit("highlightChanged",this),this._invalidateBoundingVolume()}removeGeometry(t){const i=this._geometries.splice(t,1)[0];if(i){for(const t of this._highlightIds)i.removeHighlight(t);this._emit("geometryRemoved",{object:this,geometry:i}),this._highlightIds.size&&this._emit("highlightChanged",this),this._invalidateBoundingVolume()}}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}geometryVertexAttributeUpdated(t,i,e=!1){this._emit("attributesChanged",{object:this,geometry:t,attribute:i,sync:e}),(0,_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_10__/* .affectsGeometry */ .b)(i)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(t){if(this._visible!==t){this._visible=t;for(const t of this._geometries)t.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){const t=new _Object3DStateID_js__WEBPACK_IMPORTED_MODULE_8__/* .Object3DOccludeeStateID */ .p;for(const i of this._geometries)i.occludees=(0,_materials_renderers_utils_js__WEBPACK_IMPORTED_MODULE_11__/* .addObject3DStateID */ .Ci)(i.occludees,t);return this._emit("occlusionChanged",this),t}removeOcclude(t){for(const i of this._geometries)i.occludees=(0,_materials_renderers_utils_js__WEBPACK_IMPORTED_MODULE_11__/* .removeObject3DStateID */ .PC)(i.occludees,t);this._emit("occlusionChanged",this)}highlight(t){const i=new _Object3DStateID_js__WEBPACK_IMPORTED_MODULE_8__/* .Object3DHighlightStateID */ .h(t);for(const e of this._geometries)e.addHighlight(i);return this._emit("highlightChanged",this),this._highlightIds.add(i),i}removeHighlight(t){this._highlightIds.delete(t);for(const i of this._geometries)i.removeHighlight(t);this._emit("highlightChanged",this)}removeStateID(t){t.channel===_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_7__/* .Object3DState */ .Mg.Highlight?this.removeHighlight(t):this.removeOcclude(t)}getCombinedStaticTransformation(t,e){return (0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_1__/* .multiply */ .lw)(e,this.transformation,t.transformation)}getCombinedShaderTransformation(t,e=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)()){return (0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_1__/* .multiply */ .lw)(e,this.effectiveTransformation,t.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=this._bvWorldSpace||new O,this._validateBoundingVolume(this._bvWorldSpace,w.WorldSpace)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=this._bvObjectSpace||new O,this._validateBoundingVolume(this._bvObjectSpace,w.ObjectSpace)),this._bvObjectSpace}_validateBoundingVolume(t,i){const e=i===w.ObjectSpace;for(const s of this._geometries){const i=s.boundingInfo;i&&T(i,t,e?s.transformation:this.getCombinedShaderTransformation(s))}(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.m)((0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_5__.a)(t.bounds),t.min,t.max,.5);for(const s of this._geometries){const i=s.boundingInfo;if(null==i)continue;const o=e?s.transformation:this.getCombinedShaderTransformation(s),r=(0,_support_mathUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .maxScale */ .hG)(o);(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.t)(I,i.center,o);const a=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.j)(I,(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_5__.a)(t.bounds)),m=i.radius*r;t.bounds[3]=Math.max(t.bounds[3],a+m)}}_invalidateBoundingVolume(){const t=this._bvWorldSpace?.bounds;this._bvObjectSpace=this._bvWorldSpace=void 0,this.layer&&t&&this.layer.notifyObjectBBChanged(this,t)}_emit(t,i){this.layer?.events.emit(t,i)}get geometries(){return this._geometries}get transformation(){return this._transformation??_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__/* .IDENTITY */ .zK}set transformation(t){this._transformation=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_1__/* .copy */ .C)(this._transformation??(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)(),t),this._invalidateBoundingVolume(),this._emit("transformationChanged",this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(t){this._shaderTransformation=t?(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_1__/* .copy */ .C)(this._shaderTransformation??(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)(),t):null,this._invalidateBoundingVolume(),this._emit("shaderTransformationChanged",this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}get test(){}}class M{constructor(){this.min=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .fromValues */ .fA)(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this.max=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .fromValues */ .fA)(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)}isEmpty(){return this.max[0]<this.min[0]&&this.max[1]<this.min[1]&&this.max[2]<this.min[2]}}class O extends M{constructor(){super(...arguments),this.bounds=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_5__.c)()}}function T(t,i,e){const o=t.bbMin,r=t.bbMax;if((0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_1__/* .hasIdentityRotation */ .tZ)(e)){const t=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.i)(C,e[12],e[13],e[14]);(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.f)(B,o,t),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.f)(U,r,t);for(let e=0;e<3;++e)i.min[e]=Math.min(i.min[e],B[e]),i.max[e]=Math.max(i.max[e],U[e])}else if((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.t)(B,o,e),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.q)(o,r))for(let s=0;s<3;++s)i.min[s]=Math.min(i.min[s],B[s]),i.max[s]=Math.max(i.max[s],B[s]);else{(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.t)(U,r,e);for(let t=0;t<3;++t)i.min[t]=Math.min(i.min[t],B[t],U[t]),i.max[t]=Math.max(i.max[t],B[t],U[t]);for(let t=0;t<3;++t){(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.c)(B,o),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.c)(U,r),B[t]=r[t],U[t]=o[t],(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.t)(B,B,e),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.t)(U,U,e);for(let t=0;t<3;++t)i.min[t]=Math.min(i.min[t],B[t],U[t]),i.max[t]=Math.max(i.max[t],B[t],U[t])}}}const C=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),B=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),U=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),I=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)();var w;!function(t){t[t.WorldSpace=0]="WorldSpace",t[t.ObjectSpace=1]="ObjectSpace"}(w||(w={}));


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

/***/ 91337:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ b)
/* harmony export */ });
/* harmony import */ var _core_ObjectPool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90086);
/* harmony import */ var _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63678);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24121);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58359);
/* harmony import */ var _geometry_support_frustum_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94982);
/* harmony import */ var _geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10151);
/* harmony import */ var _chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31803);
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58947);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class b{get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}constructor(t,e){this.objectToBoundingSphere=t,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new g,this._objectCount=0,e&&(void 0!==e.maximumObjectsPerNode&&(this._maximumObjectsPerNode=e.maximumObjectsPerNode),void 0!==e.maximumDepth&&(this._maximumDepth=e.maximumDepth))}destroy(){this._degenerateObjects.clear(),g.clearPool(),y[0]=null,K.prune(),Q.prune()}add(t){const e=Array.from(t);this._grow(e);const n=g.acquire();for(const o of e)++this._objectCount,this._isDegenerate(o)?this._degenerateObjects.add(o):(n.init(this._root),this._add(o,n));g.release(n)}remove(t,e=null){this._objectCount-=t.length;const n=g.acquire();for(const o of t){const t=e??(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.e)(this.objectToBoundingSphere(o),J);C(t[3])?(n.init(this._root),O(o,t,n)):this._degenerateObjects.delete(o)}g.release(n),this._shrink()}update(t,e){if(!C(e[3])&&this._isDegenerate(t))return;const n=k(t);this.remove(n,e),this.add(n)}forEachAlongRay(t,e,n){const o=(0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_5__/* .wrap */ .LV)(t,e);S(this._root,(t=>{if(!T(o,t))return!1;const e=t.node;return e.terminals.forAll((t=>{this._intersectsObject(o,t)&&n(t)})),null!==e.residents&&e.residents.forAll((t=>{this._intersectsObject(o,t)&&n(t)})),!0}))}forEachAlongRayWithVerticalOffset(t,e,n,o){const i=(0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_5__/* .wrap */ .LV)(t,e);S(this._root,(t=>{if(!z(i,t,o))return!1;const e=t.node;return e.terminals.forAll((t=>{this._intersectsObjectWithOffset(i,t,o)&&n(t)})),null!==e.residents&&e.residents.forAll((t=>{this._intersectsObjectWithOffset(i,t,o)&&n(t)})),!0}))}forEach(t){S(this._root,(e=>{const n=e.node;return n.terminals.forAll(t),null!==n.residents&&n.residents.forAll(t),!0})),this._degenerateObjects.forEach(t)}forEachDegenerateObject(t){this._degenerateObjects.forEach(t)}findClosest(t,e,n,o=()=>!0,i=1/0){let h=1/0,a=1/0,d=null;const u=F(t,e),c=r=>{if(--i,!o(r))return;const s=this.objectToBoundingSphere(r);if(!(0,_geometry_support_frustum_js__WEBPACK_IMPORTED_MODULE_4__/* .intersectsSphere */ .m7)(n,s))return;const u=v(t,e,(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(s)),c=u-s[3],f=u+s[3];c<h&&(h=c,a=f,d=r)};return j(this._root,(o=>{if(i<=0||!(0,_geometry_support_frustum_js__WEBPACK_IMPORTED_MODULE_4__/* .intersectsSphere */ .m7)(n,o.bounds))return!1;(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.g)(I,u,o.halfSize),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.f)(I,I,(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(o.bounds));if(v(t,e,I)>a)return!1;const h=o.node;return h.terminals.forAll((t=>c(t))),null!==h.residents&&h.residents.forAll((t=>c(t))),!0}),t,e),d}forEachInDepthRange(t,e,n,o,i,h,a){let d=-1/0,u=1/0;const c={setRange:t=>{n===b.DepthOrder.FRONT_TO_BACK?(d=Math.max(d,t.near),u=Math.min(u,t.far)):(d=Math.max(d,-t.far),u=Math.min(u,-t.near))}};c.setRange(o);const f=v(e,n,t),m=F(e,n),p=F(e,-n),g=t=>{if(!a(t))return;const o=this.objectToBoundingSphere(t),r=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(o),s=v(e,n,r)-f,m=s-o[3],p=s+o[3];m>u||p<d||!(0,_geometry_support_frustum_js__WEBPACK_IMPORTED_MODULE_4__/* .intersectsSphere */ .m7)(h,o)||i(t,c)};j(this._root,(t=>{if(!(0,_geometry_support_frustum_js__WEBPACK_IMPORTED_MODULE_4__/* .intersectsSphere */ .m7)(h,t.bounds))return!1;(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.g)(I,m,t.halfSize),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.f)(I,I,(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(t.bounds));if(v(e,n,I)-f>u)return!1;(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.g)(I,p,t.halfSize),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.f)(I,I,(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(t.bounds));if(v(e,n,I)-f<d)return!1;const o=t.node;return o.terminals.forAll((t=>g(t))),null!==o.residents&&o.residents.forAll((t=>g(t))),!0}),e,n)}forEachNode(t){S(this._root,(e=>t(e.node,e.bounds,e.halfSize,e.depth)))}forEachNeighbor(t,e){const n=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.g)(e),o=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(e),r=e=>{const r=this.objectToBoundingSphere(e),s=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.g)(r),h=n+s;return!((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.s)((0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(r),o)-h*h<=0)||t(e)};let s=!0;const h=t=>{s&&(s=r(t))};S(this._root,(t=>{const e=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.g)(t.bounds),r=n+e;if((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.s)((0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(t.bounds),o)-r*r>0)return!1;const a=t.node;return a.terminals.forAll(h),s&&null!==a.residents&&a.residents.forAll(h),s})),s&&this.forEachDegenerateObject(h)}_intersectsObject(t,e){const n=this.objectToBoundingSphere(e);return!(n[3]>0)||(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.k)(n,t)}_intersectsObjectWithOffset(t,e,n){const o=this.objectToBoundingSphere(e);return!(o[3]>0)||(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.k)(n.applyToBoundingSphere(o),t)}_add(t,e){e.advanceTo(this.objectToBoundingSphere(t))?e.node.terminals.push(t):(e.node.residents.push(t),e.node.residents.length>this._maximumObjectsPerNode&&e.depth<this._maximumDepth&&this._split(e))}_split(t){const e=t.node.residents;t.node.residents=null;for(let n=0;n<e.length;n++){const o=g.acquire().init(t);this._add(e.at(n),o),g.release(o)}}_grow(t){if(D(t,(t=>this.objectToBoundingSphere(t)),W),C(W[3])&&!this._fitsInsideTree(W))if(N(this._root.node))(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.e)(W,this._root.bounds),this._root.halfSize=1.25*this._root.bounds[3],this._root.updateBoundsRadiusFromHalfSize();else{const t=this._rootBoundsForRootAsSubNode(W);this._placingRootViolatesMaxDepth(t)?this._rebuildTree(W,t):this._growRootAsSubNode(t),g.release(t)}}_rebuildTree(t,e){(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.c)((0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(V),(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(e.bounds)),V[3]=e.halfSize,D([t,V],(t=>t),G);const o=g.acquire().init(this._root);this._root.initFrom(null,G,G[3]),this._root.increaseHalfSize(1.25),S(o,(t=>(this.add(t.node.terminals.data),null!==t.node.residents&&this.add(t.node.residents.data),!0))),g.release(o)}_placingRootViolatesMaxDepth(t){const e=Math.log(t.halfSize/this._root.halfSize)*Math.LOG2E;let n=0;return S(this._root,(t=>(n=Math.max(n,t.depth),n+e<=this._maximumDepth))),n+e>this._maximumDepth}_rootBoundsForRootAsSubNode(t){const e=t[3],n=t;let o=-1/0;const i=this._root.bounds,r=this._root.halfSize;for(let h=0;h<3;h++){const t=i[h]-r-(n[h]-e),s=n[h]+e-(i[h]+r),a=Math.max(0,Math.ceil(t/(2*r))),l=Math.max(0,Math.ceil(s/(2*r)))+1,d=2**Math.ceil(Math.log(a+l)*Math.LOG2E);o=Math.max(o,d),U[h].min=a,U[h].max=l}for(let h=0;h<3;h++){let t=U[h].min,e=U[h].max;const n=(o-(t+e))/2;t+=Math.ceil(n),e+=Math.floor(n);const s=i[h]-r-t*r*2;q[h]=s+(e+t)*r}const s=o*r;return q[3]=s*w,g.acquire().initFrom(null,q,s,0)}_growRootAsSubNode(t){const e=this._root.node;(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.c)((0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(W),(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(this._root.bounds)),W[3]=this._root.halfSize,this._root.init(t),t.advanceTo(W,null,!0),t.node.children=e.children,t.node.residents=e.residents,t.node.terminals=e.terminals}_shrink(){for(;;){const t=this._findShrinkIndex();if(-1===t)break;this._root.advance(t),this._root.depth=0}}_findShrinkIndex(){if(0!==this._root.node.terminals.length||this._root.isLeaf())return-1;let t=null;const e=this._root.node.children;let n=0,o=0;for(;o<e.length&&null==t;)n=o++,t=e[n];for(;o<e.length;)if(e[o++])return-1;return n}_isDegenerate(t){return!C(this.objectToBoundingSphere(t)[3])}_fitsInsideTree(t){const e=this._root.bounds,n=this._root.halfSize;return t[3]<=n&&t[0]>=e[0]-n&&t[0]<=e[0]+n&&t[1]>=e[1]-n&&t[1]<=e[1]+n&&t[2]>=e[2]-n&&t[2]<=e[2]+n}toJSON(){const{maximumDepth:t,maximumObjectsPerNode:e,_objectCount:n}=this,o=this._nodeToJSON(this._root.node);return{maximumDepth:t,maximumObjectsPerNode:e,objectCount:n,root:{bounds:this._root.bounds,halfSize:this._root.halfSize,depth:this._root.depth,node:o}}}_nodeToJSON(t){const e=t.children.map((t=>t?this._nodeToJSON(t):null)),n=t.residents?.map((t=>this.objectToBoundingSphere(t))),o=t.terminals?.map((t=>this.objectToBoundingSphere(t)));return{children:e,residents:n,terminals:o}}static fromJSON(t){const e=new b((t=>t),{maximumDepth:t.maximumDepth,maximumObjectsPerNode:t.maximumObjectsPerNode});return e._objectCount=t.objectCount,e._root.initFrom(t.root.node,t.root.bounds,t.root.halfSize,t.root.depth),e}}class g{constructor(){this.bounds=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.c)(),this.halfSize=0,this.initFrom(null,null,0,0)}init(t){return this.initFrom(t.node,t.bounds,t.halfSize,t.depth)}initFrom(t,e,n,o=this.depth){return this.node=null!=t?t:g.createEmptyNode(),e&&(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.e)(e,this.bounds),this.halfSize=n,this.depth=o,this}increaseHalfSize(t){this.halfSize*=t,this.updateBoundsRadiusFromHalfSize()}updateBoundsRadiusFromHalfSize(){this.bounds[3]=this.halfSize*w}advance(t){let e=this.node.children[t];e||(e=g.createEmptyNode(),this.node.children[t]=e),this.node=e,this.halfSize/=2,this.depth++;const n=E[t];return this.bounds[0]+=n[0]*this.halfSize,this.bounds[1]+=n[1]*this.halfSize,this.bounds[2]+=n[2]*this.halfSize,this.updateBoundsRadiusFromHalfSize(),this}advanceTo(t,e,n=!1){for(;;){if(this.isTerminalFor(t))return e&&e(this,-1),!0;if(this.isLeaf()){if(!n)return e&&e(this,-1),!1;this.node.residents=null}const o=this._childIndex(t);e&&e(this,o),this.advance(o)}}isLeaf(){return null!=this.node.residents}isTerminalFor(t){return t[3]>this.halfSize/2}_childIndex(t){const e=this.bounds;return(e[0]<t[0]?1:0)+(e[1]<t[1]?2:0)+(e[2]<t[2]?4:0)}static createEmptyNode(){return{children:[null,null,null,null,null,null,null,null],terminals:new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A({shrink:!0}),residents:new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A({shrink:!0})}}static{this._pool=new _core_ObjectPool_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(g)}static acquire(){return g._pool.acquire()}static release(t){g._pool.release(t)}static clearPool(){g._pool.prune()}}function S(t,e){let n=g.acquire().init(t);const o=[n];for(;0!==o.length;){if(n=o.pop(),e(n)&&!n.isLeaf())for(let t=0;t<n.node.children.length;t++){n.node.children[t]&&o.push(g.acquire().init(n).advance(t))}g.release(n)}}function j(t,e,n,o=b.DepthOrder.FRONT_TO_BACK){let i=g.acquire().init(t);const r=[i];for(R(n,o,X);0!==r.length;){if(i=r.pop(),e(i)&&!i.isLeaf())for(let t=7;t>=0;--t){const e=X[t];i.node.children[e]&&r.push(g.acquire().init(i).advance(e))}g.release(i)}}function O(t,e,n){K.clear();const o=n.advanceTo(e,((t,e)=>{K.push(t.node),K.push(e)}))?n.node.terminals:n.node.residents;if(o.removeUnordered(t),0===o.length)for(let i=K.length-2;i>=0;i-=2){if(!x(K.data[i],K.data[i+1]))break}}function x(t,n){return n>=0&&(t.children[n]=null),!!N(t)&&(null===t.residents&&(t.residents=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A({shrink:!0})),!0)}function T(t,e){return B((0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(e.bounds),2*-e.halfSize,L),B((0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(e.bounds),2*e.halfSize,H),(0,_Util_js__WEBPACK_IMPORTED_MODULE_7__/* .rayBoxTest */ .O_)(t.origin,t.direction,L,H)}function z(t,e,n){return B((0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(e.bounds),2*-e.halfSize,L),B((0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(e.bounds),2*e.halfSize,H),n.applyToMinMax(L,H),(0,_Util_js__WEBPACK_IMPORTED_MODULE_7__/* .rayBoxTest */ .O_)(t.origin,t.direction,L,H)}function N(t){if(0!==t.terminals.length)return!1;if(null!==t.residents)return 0===t.residents.length;for(let e=0;e<t.children.length;e++)if(t.children[e])return!1;return!0}function M(t,e){t[0]=Math.min(t[0],e[0]-e[3]),t[1]=Math.min(t[1],e[1]-e[3]),t[2]=Math.min(t[2],e[2]-e[3])}function A(t,e){t[0]=Math.max(t[0],e[0]+e[3]),t[1]=Math.max(t[1],e[1]+e[3]),t[2]=Math.max(t[2],e[2]+e[3])}function B(t,e,n){n[0]=t[0]+e,n[1]=t[1]+e,n[2]=t[2]+e}function D(t,e,n){L[0]=1/0,L[1]=1/0,L[2]=1/0,H[0]=-1/0,H[1]=-1/0,H[2]=-1/0;for(const o of t){const t=e(o);C(t[3])&&(M(L,t),A(H,t))}(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_2__.m)((0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(n),L,H,.5),n[3]=Math.max(H[0]-L[0],H[1]-L[1],H[2]-L[2])/2}function R(t,e,n){if(!Q.length)for(let o=0;o<8;++o)Q.push({index:0,distance:0});for(let o=0;o<8;++o){const n=E[o];Q.data[o].index=o,Q.data[o].distance=v(t,e,n)}Q.sort(((t,e)=>t.distance-e.distance));for(let o=0;o<8;++o)n[o]=Q.data[o].index}function F(t,e){let n,o=1/0;for(let i=0;i<8;++i){const r=v(t,e,P[i]);r<o&&(o=r,n=P[i])}return n}function v(t,e,n){return e*(t[0]*n[0]+t[1]*n[1]+t[2]*n[2])}function C(t){return!isNaN(t)&&t!==-1/0&&t!==1/0&&t>0}!function(t){var e;(e=t.DepthOrder||(t.DepthOrder={}))[e.FRONT_TO_BACK=1]="FRONT_TO_BACK",e[e.BACK_TO_FRONT=-1]="BACK_TO_FRONT"}(b||(b={}));const E=[(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .fromValues */ .fA)(-1,-1,-1),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .fromValues */ .fA)(1,-1,-1),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .fromValues */ .fA)(-1,1,-1),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .fromValues */ .fA)(1,1,-1),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .fromValues */ .fA)(-1,-1,1),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .fromValues */ .fA)(1,-1,1),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .fromValues */ .fA)(-1,1,1),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .fromValues */ .fA)(1,1,1)],P=[(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .fromValues */ .fA)(-1,-1,-1),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .fromValues */ .fA)(-1,-1,1),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .fromValues */ .fA)(-1,1,-1),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .fromValues */ .fA)(-1,1,1),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .fromValues */ .fA)(1,-1,-1),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .fromValues */ .fA)(1,-1,1),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .fromValues */ .fA)(1,1,-1),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .fromValues */ .fA)(1,1,1)],w=Math.sqrt(3),y=[null];function k(t){return y[0]=t,y}const q=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.c)(),I=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .vt)(),L=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .vt)(),H=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .vt)(),K=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,J=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.c)(),W=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.c)(),V=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.c)(),G=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.c)(),U=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],Q=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,X=[0,0,0,0,0,0,0,0];


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

/***/ 68699:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ C)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var C;!function(C){C[C.ASYNC=0]="ASYNC",C[C.SYNC=1]="SYNC"}(C||(C={}));


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

/***/ 54671:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  x: () => (/* binding */ l)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/compilerUtils.js
var compilerUtils = __webpack_require__(73345);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Evented.js
var Evented = __webpack_require__(17306);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Handles.js
var Handles = __webpack_require__(1436);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(6267);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/uid.js
var uid = __webpack_require__(65061);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/DirtyEvents.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const DirtyEvents_e=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","transformationChanged","shaderTransformationChanged","visibilityChanged","occlusionChanged","highlightChanged","geometryAdded","geometryRemoved","attributesChanged"];

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Octree.js
var Octree = __webpack_require__(91337);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/UpdatePolicy.js
var UpdatePolicy = __webpack_require__(68699);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/WebGLLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class l{constructor(e,t,o=""){this.stage=e,this.apiLayerViewUid=o,this.id=(0,uid/* generateUID */.c)(),this.events=new Evented/* default */.A,this.visible=!0,this.sliceable=!1,this._objectsAdded=new Array,this._handles=new Handles/* default */.A,this._objects=new Map,this._pickable=!0,this.visible=t?.visible??!0,this._pickable=t?.pickable??!0,this.updatePolicy=t?.updatePolicy??UpdatePolicy/* UpdatePolicy */.q.ASYNC,e.addLayer(this);for(const s of DirtyEvents_e)this._handles.add(this.events.on(s,(t=>e.handleEvent(s,t))))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.removeLayer(this),this.invalidateSpatialQueryAccelerator())}get objects(){return this._objects}getObject(e){return (0,compilerUtils/* toConst */.zI)(this._objects.get(e))}set pickable(e){this._pickable=e}get pickable(){return this._pickable&&this.visible}add(e){this._objects.set(e.id,e),e.layer=this,this.events.emit("layerObjectAdded",e),null!=this._octree&&this._objectsAdded.push(e)}remove(t){this._objects.delete(t.id)&&(this.events.emit("layerObjectRemoved",t),t.layer=null,null!=this._octree&&((0,arrayUtils/* removeUnordered */.Xy)(this._objectsAdded,t)||this._octree.remove([t])))}addMany(e){for(const t of e)this._objects.set(t.id,t),t.layer=this;this.events.emit("layerObjectsAdded",e),null!=this._octree&&this._objectsAdded.push(...e)}removeMany(t){const s=new Array;for(const e of t)this._objects.delete(e.id)&&s.push(e);if(0!==s.length&&(this.events.emit("layerObjectsRemoved",s),s.forEach((e=>e.layer=null)),null!=this._octree)){for(let t=0;t<s.length;)(0,arrayUtils/* removeUnordered */.Xy)(this._objectsAdded,s[t])?(s[t]=s[s.length-1],s.length-=1):++t;this._octree.remove(s)}}sync(){this.updatePolicy!==UpdatePolicy/* UpdatePolicy */.q.SYNC&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(e,t){null==this._octree||this._objectsAdded.includes(e)||this._octree.update(e,t)}getSpatialQueryAccelerator(){return null==this._octree&&this._objects.size>50?(this._octree=new Octree/* default */.A((e=>e.boundingVolumeWorldSpace.bounds)),this._octree.add(this._objects.values())):null!=this._octree&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded),this._objectsAdded.length=0),this._octree}invalidateSpatialQueryAccelerator(){this._octree=(0,maybe/* destroyMaybe */.pR)(this._octree),this._objectsAdded.length=0}get test(){}}


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

/***/ 24721:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ s)
/* harmony export */ });
/* unused harmony export isLodIntersectorResult */
/* harmony import */ var _IntersectorResult_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69798);
/* harmony import */ var _IntersectorTarget_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9286);
/* harmony import */ var _IntersectorType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68427);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class s extends _IntersectorTarget_js__WEBPACK_IMPORTED_MODULE_1__/* .Graphic3DTarget */ .R{constructor(r,t,e,s,i){super(r,t),this.layerViewUid=r,this.graphicUid=t,this.triangleNr=e,this.baseBoundingSphere=s,this.numLodLevels=i}}function i(t){return r(t)&&t.intersector===e.LOD&&!!t.target}


/***/ }),

/***/ 19221:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fe: () => (/* binding */ h),
/* harmony export */   dI: () => (/* binding */ a),
/* harmony export */   hr: () => (/* binding */ f),
/* harmony export */   iC: () => (/* binding */ l)
/* harmony export */ });
/* unused harmony export LodComponentRenderGeometry */
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85569);
/* harmony import */ var _core_memoryEstimations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4754);
/* harmony import */ var _IntersectorInterfaces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22531);
/* harmony import */ var _IntersectorResult_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69798);
/* harmony import */ var _IntersectorType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68427);
/* harmony import */ var _VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50645);
/* harmony import */ var _Intersector_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24721);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class m{constructor(e,t,r,s){this.material=e,this.bufferWriter=e.createBufferWriter(),this.vertexBufferLayout=this.bufferWriter.vertexBufferLayout,this.buffer=t,this.elementCount=r,this.boundingInfo=s}get numTriangles(){return this.elementCount/3}get numVertices(){return this.elementCount}computeUsedMemory(){return this.buffer.byteLength+_core_memoryEstimations_js__WEBPACK_IMPORTED_MODULE_1__/* .baseTypedArrayMemory */ .i5}getRenderGeometry(){return this}intersect(e,t,r,s,n,i,o,u){const m=this.bufferWriter,a=this.buffer;m.intersect(a,this.material.parameters,null,e,r,s,((r,s,m)=>c(r,s,m,e,t,i,o,n,u)))}}class a{constructor(e){this.engineGeometry=e}get material(){return this.engineGeometry.material}get numVertices(){return this.engineGeometry.attributes.get(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_5__/* .VertexAttribute */ .r.POSITION).indices.length}get numTriangles(){return this.engineGeometry.indexCount/3}get boundingInfo(){return this.engineGeometry.boundingInfo}computeUsedMemory(){return Array.from(this.engineGeometry.attributes.values()).reduce(((e,r)=>e+(0,_core_memoryEstimations_js__WEBPACK_IMPORTED_MODULE_1__/* .estimateNumberArrayMemory */ .Qf)(r.data,r.indices)),0)}getRenderGeometry(){const e=this.material,t=this.engineGeometry,r=t.attributes,s=t.boundingInfo,n=e.createBufferWriter(),i=n.vertexBufferLayout,o=n.elementCount(r),u=i.createBuffer(o);return n.write(null,null,r,null,u,0),new m(e,u.buffer,o,s)}intersect(e,t,r,s,n,i,o,u){const m=this.engineGeometry;this.material.intersect(m,e.transform.transform,e,r,s,((r,s,m)=>c(r,s,m,e,t,i,o,n,u)))}}function c(e,t,r,o,m,a,c,l,f){if(e<0)return;if(m&&!m(o.rayBegin,o.rayEnd,e))return;const h=new _Intersector_js__WEBPACK_IMPORTED_MODULE_6__/* .LodTarget */ .h(a.layerViewUid,a.graphicUid(l),r,c,f);if((null==o.results.min.distance||e<o.results.min.distance)&&o.results.min.set(_IntersectorType_js__WEBPACK_IMPORTED_MODULE_4__/* .IntersectorType */ .d.LOD,h,e,t,o.transform.transform),(null==o.results.max.distance||e>o.results.max.distance)&&o.results.max.set(_IntersectorType_js__WEBPACK_IMPORTED_MODULE_4__/* .IntersectorType */ .d.LOD,h,e,t,o.transform.transform),o.options.store===_IntersectorInterfaces_js__WEBPACK_IMPORTED_MODULE_2__/* .StoreResults */ .o.ALL){const r=new _IntersectorResult_js__WEBPACK_IMPORTED_MODULE_3__/* .IntersectorResult */ .i(o.results.min.ray);r.set(_IntersectorType_js__WEBPACK_IMPORTED_MODULE_4__/* .IntersectorType */ .d.LOD,h,e,t,o.transform.transform),o.results.all.push(r)}}class l{constructor(e,t=null){this.geometry=e,this.textures=t}get material(){return this.geometry.material}get numTriangles(){return this.geometry.numTriangles}}class f{constructor(t,r,s){this.components=t,this.minScreenSpaceRadius=r,this.pivotOffset=s;const n=(0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .unique */ .Am)(this.components.map((e=>e.geometry)));this.numVertices=n.reduce(((e,t)=>e+t.numVertices),0)}}class h{constructor(e){this.levels=e,this.levels.sort(((e,t)=>e.minScreenSpaceRadius===t.minScreenSpaceRadius?e.numVertices-t.numVertices:e.minScreenSpaceRadius-t.minScreenSpaceRadius))}getMaterials(){const t=[];return this.levels.forEach((e=>e.components.forEach((e=>t.push(e.geometry.material))))),(0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .unique */ .Am)(t)}getTextures(){const t=new Array;return this.levels.forEach((e=>e.components.forEach((e=>{null!=e.textures&&t.push(...e.textures)})))),(0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .unique */ .Am)(t)}getGeometries(){const t=new Array;return this.levels.forEach((e=>e.components.forEach((e=>{t.push(e.geometry)})))),(0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .unique */ .Am)(t)}getEngineGeometries(){return this.getGeometries().map((e=>e.engineGeometry)).filter((e=>null!=e))}computeUsedMemory(){const e=this.getGeometries(),t=this.getTextures(),r=e.reduce(((e,t)=>e+t.computeUsedMemory()),0);return t.reduce(((e,t)=>e+t.usedMemory),0)+r}}


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

/***/ 53834:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ n),
/* harmony export */   Q: () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const n={stableRendering:!1},e={rootOrigin:null};


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

/***/ 96824:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W: () => (/* binding */ q)
});

// UNUSED EXPORTS: Parameters

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(92504);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/screenUtils.js
var screenUtils = __webpack_require__(89882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/math/vec2.js
var vec2 = __webpack_require__(60704);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(24121);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(58359);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f64.js
var vec4f64 = __webpack_require__(28152);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/float16.js
var float16 = __webpack_require__(11449);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/frustum.js
var frustum = __webpack_require__(94982);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/lineSegment.js
var lineSegment = __webpack_require__(22759);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/plane.js
var plane = __webpack_require__(38774);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/support/buffer/InterleavedLayout.js
var InterleavedLayout = __webpack_require__(11110);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js
var ShaderOutput = __webpack_require__(55274);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/effects/geometry/olidUtils.js
var olidUtils = __webpack_require__(36340);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLMaterial.js
var GLMaterial = __webpack_require__(67341);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Material.js
var Material = __webpack_require__(45722);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/RenderSlot.js
var RenderSlot = __webpack_require__(38323);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js
var Util = __webpack_require__(58947);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js
var VertexAttribute = __webpack_require__(50645);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/VisualVariablePassParameters.js
var VisualVariablePassParameters = __webpack_require__(17745);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/bufferWriterUtils.js
var bufferWriterUtils = __webpack_require__(81500);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/LineMarkerTechniqueConfiguration.js
var LineMarkerTechniqueConfiguration = __webpack_require__(58376);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/RibbonLine.glsl.js
var RibbonLine_glsl = __webpack_require__(50126);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ReloadableShaderModule.js
var ReloadableShaderModule = __webpack_require__(47705);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechnique.js + 1 modules
var ShaderTechnique = __webpack_require__(28347);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/OITPass.js
var OITPass = __webpack_require__(69338);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/OrderIndependentTransparency.js
var OrderIndependentTransparency = __webpack_require__(1931);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/StencilUtils.js
var StencilUtils = __webpack_require__(98546);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/enums.js
var enums = __webpack_require__(41746);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/renderState.js
var renderState = __webpack_require__(2449);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/RibbonLineTechnique.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class S extends ShaderTechnique/* ShaderTechnique */.w{constructor(e,i){super(e,i,new ReloadableShaderModule/* ReloadableShaderModule */.$(RibbonLine_glsl.R,(()=>__webpack_require__.e(/* import() */ 7274).then(__webpack_require__.bind(__webpack_require__, 97274)))),_),this.primitiveType=i.wireframe?enums/* PrimitiveType */.WR.LINES:enums/* PrimitiveType */.WR.TRIANGLE_STRIP}_makePipelineState(t,i){const{oitPass:c,output:f,hasOccludees:h,hasPolygonOffset:m}=t,O=c===OITPass/* OITPass */.Y.NONE,E=c===OITPass/* OITPass */.Y.FrontFace;return (0,renderState/* makePipelineState */.Ey)({blending:(0,ShaderOutput/* isColorOrColorEmission */.RN)(f)?(0,OrderIndependentTransparency/* blending */.Yf)(c):null,depthTest:{func:(0,OrderIndependentTransparency/* oitDepthTest */.K_)(c)},depthWrite:(0,OrderIndependentTransparency/* depthWrite */.z5)(t),drawBuffers:(0,ShaderTechnique/* depthOnlyOutputBuffersOr */.L)(f,(0,OrderIndependentTransparency/* getDrawBuffers */.m6)(c,f)),colorWrite:renderState/* defaultColorWrite */.kn,stencilWrite:h?StencilUtils/* stencilWriteMaskOn */.v0:null,stencilTest:h?i?StencilUtils/* stencilToolMaskBaseParams */.a9:StencilUtils/* stencilBaseAllZerosParams */.qh:null,polygonOffset:O||E?m?L:null:OrderIndependentTransparency/* OITPolygonOffset */.SE})}initializePipeline(e){if(e.occluder){const t=e.hasPolygonOffset?L:null,{output:i,hasOccludees:l}=e;this._occluderPipelineTransparent=(0,renderState/* makePipelineState */.Ey)({blending:renderState/* unpremultipliedAlphaToPremultipliedAlpha */.T8,polygonOffset:t,depthTest:StencilUtils/* depthCompareAlways */.sf,depthWrite:null,colorWrite:renderState/* defaultColorWrite */.kn,stencilWrite:null,stencilTest:l?StencilUtils/* stencilToolTransparentOccluderParams */.mK:null,drawBuffers:(0,ShaderTechnique/* depthOnlyOutputBuffersOr */.L)(i)}),this._occluderPipelineOpaque=(0,renderState/* makePipelineState */.Ey)({blending:renderState/* unpremultipliedAlphaToPremultipliedAlpha */.T8,polygonOffset:t,depthTest:l?StencilUtils/* depthCompareAlways */.sf:StencilUtils/* depthCompareLess */.m,depthWrite:null,colorWrite:renderState/* defaultColorWrite */.kn,stencilWrite:l?StencilUtils/* stencilWriteMaskOff */.r8:null,stencilTest:l?StencilUtils/* stencilToolMaskOccluderParams */.I$:null,drawBuffers:(0,ShaderTechnique/* depthOnlyOutputBuffersOr */.L)(i)}),this._occluderPipelineMaskWrite=(0,renderState/* makePipelineState */.Ey)({blending:null,polygonOffset:t,depthTest:StencilUtils/* depthCompareLess */.m,depthWrite:null,colorWrite:null,stencilWrite:l?StencilUtils/* stencilWriteMaskOn */.v0:null,stencilTest:l?StencilUtils/* stencilToolMaskBaseParams */.a9:null,drawBuffers:(0,ShaderTechnique/* depthOnlyOutputBuffersOr */.L)(i)})}return this._occludeePipeline=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,t){if(e)return this._occludeePipeline;switch(t){case RenderSlot/* RenderSlot */.N.TRANSPARENT_OCCLUDER_MATERIAL:return this._occluderPipelineTransparent??super.getPipeline();case RenderSlot/* RenderSlot */.N.OCCLUDER_MATERIAL:return this._occluderPipelineOpaque??super.getPipeline();default:return this._occluderPipelineMaskWrite??super.getPipeline()}}}const L={factor:0,units:-4},_=new Map([[VertexAttribute/* VertexAttribute */.r.POSITION,0],[VertexAttribute/* VertexAttribute */.r.PREVIOUSDELTA,1],[VertexAttribute/* VertexAttribute */.r.NEXTDELTA,2],[VertexAttribute/* VertexAttribute */.r.U0,3],[VertexAttribute/* VertexAttribute */.r.LINEPARAMETERS,4],[VertexAttribute/* VertexAttribute */.r.COLOR,5],[VertexAttribute/* VertexAttribute */.r.COLORFEATUREATTRIBUTE,5],[VertexAttribute/* VertexAttribute */.r.SIZE,6],[VertexAttribute/* VertexAttribute */.r.SIZEFEATUREATTRIBUTE,6],[VertexAttribute/* VertexAttribute */.r.OPACITYFEATUREATTRIBUTE,7],[VertexAttribute/* VertexAttribute */.r.OLIDCOLOR,8]]);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/shaders/RibbonLineTechniqueConfiguration.js
var RibbonLineTechniqueConfiguration = __webpack_require__(16906);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/webscene/support/AlphaCutoff.js
var AlphaCutoff = __webpack_require__(63199);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/RibbonLineMaterial.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var Y;!function(e){e[e.LEFT_JOIN_START=-2]="LEFT_JOIN_START",e[e.LEFT_JOIN_END=-1]="LEFT_JOIN_END",e[e.LEFT_CAP_START=-4]="LEFT_CAP_START",e[e.LEFT_CAP_END=-5]="LEFT_CAP_END",e[e.RIGHT_JOIN_START=2]="RIGHT_JOIN_START",e[e.RIGHT_JOIN_END=1]="RIGHT_JOIN_END",e[e.RIGHT_CAP_START=4]="RIGHT_CAP_START",e[e.RIGHT_CAP_END=5]="RIGHT_CAP_END"}(Y||(Y={}));class q extends Material/* Material */.im{constructor(e){super(e,Q),this._configuration=new RibbonLineTechniqueConfiguration/* RibbonLineTechniqueConfiguration */.Q,this.vertexAttributeLocations=_,this.produces=new Map([[RenderSlot/* RenderSlot */.N.OPAQUE_MATERIAL,e=>(0,ShaderOutput/* isHighlightOrOID */.CL)(e)||(0,ShaderOutput/* isColorOrColorEmission */.RN)(e)&&this.parameters.renderOccluded===Material/* RenderOccludedFlag */.m$.OccludeAndTransparentStencil],[RenderSlot/* RenderSlot */.N.OPAQUE_MATERIAL_WITHOUT_NORMALS,e=>(0,ShaderOutput/* isDepth */.eh)(e)],[RenderSlot/* RenderSlot */.N.OCCLUDER_MATERIAL,e=>(0,ShaderOutput/* isColorEmissionHighlightOIDOrDepth */.T2)(e)&&this.parameters.renderOccluded===Material/* RenderOccludedFlag */.m$.OccludeAndTransparentStencil],[RenderSlot/* RenderSlot */.N.TRANSPARENT_OCCLUDER_MATERIAL,e=>(0,ShaderOutput/* isColorEmissionHighlightOIDOrDepth */.T2)(e)&&this.parameters.renderOccluded===Material/* RenderOccludedFlag */.m$.OccludeAndTransparentStencil],[RenderSlot/* RenderSlot */.N.TRANSPARENT_MATERIAL,e=>(0,ShaderOutput/* isColorOrColorEmission */.RN)(e)&&this.parameters.writeDepth&&this.parameters.renderOccluded!==Material/* RenderOccludedFlag */.m$.OccludeAndTransparentStencil],[RenderSlot/* RenderSlot */.N.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,e=>(0,ShaderOutput/* isColorOrColorEmission */.RN)(e)&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==Material/* RenderOccludedFlag */.m$.OccludeAndTransparentStencil],[RenderSlot/* RenderSlot */.N.DRAPED_MATERIAL,e=>(0,ShaderOutput/* is2DGeometryOutput */.i3)(e)]])}getConfiguration(e,t){super.getConfiguration(e,t,this._configuration),this._configuration.oitPass=t.oitPass,this._configuration.draped=t.slot===RenderSlot/* RenderSlot */.N.DRAPED_MATERIAL;const r=null!=this.parameters.stipplePattern&&e!==ShaderOutput/* ShaderOutput */.V.Highlight;return this._configuration.stippleEnabled=r,this._configuration.stippleOffColorEnabled=r&&null!=this.parameters.stippleOffColor,this._configuration.stipplePreferContinuous=r&&this.parameters.stipplePreferContinuous,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins="round"===this.parameters.join,this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=null!=this.parameters.markerParameters&&te(this.parameters.markerParameters),this._configuration.hasPolygonOffset=this.parameters.hasPolygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&null!=this.parameters.innerColor,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.hasOccludees=t.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===Material/* RenderOccludedFlag */.m$.OccludeAndTransparentStencil,this._configuration.terrainDepthTest=t.terrainDepthTest&&(0,ShaderOutput/* isColorOrColorEmission */.RN)(e),this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.wireframe=this.parameters.wireframe,this._configuration}get visible(){return this.parameters.color[3]>=AlphaCutoff/* alphaCutoff */.Q||null!=this.parameters.stipplePattern&&(this.parameters.stippleOffColor?.[3]??0)>AlphaCutoff/* alphaCutoff */.Q}intersectDraped({attributes:e,screenToWorldRatio:r},i,s,a,n){if(!i.options.selectionMode)return;const o=e.get(VertexAttribute/* VertexAttribute */.r.SIZE);let l=this.parameters.width;if(this.parameters.vvSize){const r=e.get(VertexAttribute/* VertexAttribute */.r.SIZEFEATUREATTRIBUTE).data[0];Number.isNaN(r)?l*=this.parameters.vvSize.fallback[0]:l*=(0,mathUtils/* clamp */.qE)(this.parameters.vvSize.offset[0]+r*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else o&&(l*=o.data[0]);const c=s[0],p=s[1],h=(l/2+4)*r;let f=Number.MAX_VALUE,m=0;const u=e.get(VertexAttribute/* VertexAttribute */.r.POSITION).data,T=ee(this.parameters,e)?u.length-2:u.length-5;for(let d=0;d<T;d+=3){const e=u[d],r=u[d+1],i=(d+3)%u.length,s=c-e,a=p-r,n=u[i]-e,o=u[i+1]-r,l=(0,mathUtils/* clamp */.qE)((n*s+o*a)/(n*n+o*o),0,1),h=n*l-s,T=o*l-a,E=h*h+T*T;E<f&&(f=E,m=d/3)}f<h*h&&a(n.distance,n.normal,m)}intersect(r,f,m,u,T,A){const{options:S,camera:v,rayBegin:P,rayEnd:N}=m;if(!S.selectionMode||!r.visible||!v)return;if(!(0,Util/* isTranslationMatrix */.zH)(f))return void Logger/* default */.A.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");const L=r.attributes,b=L.get(VertexAttribute/* VertexAttribute */.r.POSITION).data;let C=this.parameters.width;if(this.parameters.vvSize){const e=L.get(VertexAttribute/* VertexAttribute */.r.SIZEFEATUREATTRIBUTE).data[0];Number.isNaN(e)||(C*=(0,mathUtils/* clamp */.qE)(this.parameters.vvSize.offset[0]+e*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0]))}else L.has(VertexAttribute/* VertexAttribute */.r.SIZE)&&(C*=L.get(VertexAttribute/* VertexAttribute */.r.SIZE).data[0]);const U=ne;(0,vec2/* copy */.C)(U,m.point);const y=C*v.pixelRatio/2+4*v.pixelRatio;(0,vec32.i)(de[0],U[0]-y,U[1]+y,0),(0,vec32.i)(de[1],U[0]+y,U[1]+y,0),(0,vec32.i)(de[2],U[0]+y,U[1]-y,0),(0,vec32.i)(de[3],U[0]-y,U[1]-y,0);for(let e=0;e<4;e++)if(!v.unprojectFromRenderScreen(de[e],Ee[e]))return;(0,plane/* fromPoints */.Cr)(v.eye,Ee[0],Ee[1],_e),(0,plane/* fromPoints */.Cr)(v.eye,Ee[1],Ee[2],Ae),(0,plane/* fromPoints */.Cr)(v.eye,Ee[2],Ee[3],Re),(0,plane/* fromPoints */.Cr)(v.eye,Ee[3],Ee[0],ge);let j=Number.MAX_VALUE,D=0;const F=ee(this.parameters,L)?b.length-2:b.length-5;for(let e=0;e<F;e+=3){re[0]=b[e]+f[12],re[1]=b[e+1]+f[13],re[2]=b[e+2]+f[14];const t=(e+3)%b.length;if(ie[0]=b[t]+f[12],ie[1]=b[t+1]+f[13],ie[2]=b[t+2]+f[14],(0,plane/* signedDistance */.mN)(_e,re)<0&&(0,plane/* signedDistance */.mN)(_e,ie)<0||(0,plane/* signedDistance */.mN)(Ae,re)<0&&(0,plane/* signedDistance */.mN)(Ae,ie)<0||(0,plane/* signedDistance */.mN)(Re,re)<0&&(0,plane/* signedDistance */.mN)(Re,ie)<0||(0,plane/* signedDistance */.mN)(ge,re)<0&&(0,plane/* signedDistance */.mN)(ge,ie)<0)continue;if(v.projectToRenderScreen(re,oe),v.projectToRenderScreen(ie,le),oe[2]<0&&le[2]>0){(0,vec32.d)(se,re,ie);const e=v.frustum,t=-(0,plane/* signedDistance */.mN)(e[frustum/* PlaneIndex */.FB.NEAR],re)/(0,vec32.e)(se,(0,plane/* getNormal */.Qj)(e[frustum/* PlaneIndex */.FB.NEAR]));(0,vec32.g)(se,se,t),(0,vec32.f)(re,re,se),v.projectToRenderScreen(re,oe)}else if(oe[2]>0&&le[2]<0){(0,vec32.d)(se,ie,re);const e=v.frustum,t=-(0,plane/* signedDistance */.mN)(e[frustum/* PlaneIndex */.FB.NEAR],ie)/(0,vec32.e)(se,(0,plane/* getNormal */.Qj)(e[frustum/* PlaneIndex */.FB.NEAR]));(0,vec32.g)(se,se,t),(0,vec32.f)(ie,ie,se),v.projectToRenderScreen(ie,le)}else if(oe[2]<0&&le[2]<0)continue;oe[2]=0,le[2]=0;const r=(0,lineSegment/* distance2 */.kb)((0,lineSegment/* fromPoints */.Cr)(oe,le,he),U);r<j&&(j=r,(0,vec32.c)(ce,re),(0,vec32.c)(pe,ie),D=e/3)}if(j<y*y){let e=Number.MAX_VALUE;if((0,lineSegment/* closestLineSegmentPoint */.ld)((0,lineSegment/* fromPoints */.Cr)(ce,pe,he),(0,lineSegment/* fromPoints */.Cr)(P,N,fe),ae)){(0,vec32.d)(ae,ae,P);const t=(0,vec32.l)(ae);(0,vec32.g)(ae,ae,1/t),e=t/(0,vec32.j)(P,N)}A(e,ae,D)}}get _layout(){const e=(0,InterleavedLayout/* newLayout */.BP)().vec3f(VertexAttribute/* VertexAttribute */.r.POSITION).vec4f16(VertexAttribute/* VertexAttribute */.r.PREVIOUSDELTA).vec4f16(VertexAttribute/* VertexAttribute */.r.NEXTDELTA).f32(VertexAttribute/* VertexAttribute */.r.U0).vec2f16(VertexAttribute/* VertexAttribute */.r.LINEPARAMETERS);return this.parameters.vvColor?e.f32(VertexAttribute/* VertexAttribute */.r.COLORFEATUREATTRIBUTE):e.vec4u8(VertexAttribute/* VertexAttribute */.r.COLOR,{glNormalized:!0}),this.parameters.vvSize?e.f32(VertexAttribute/* VertexAttribute */.r.SIZEFEATUREATTRIBUTE):e.f32(VertexAttribute/* VertexAttribute */.r.SIZE),this.parameters.vvOpacity&&e.f32(VertexAttribute/* VertexAttribute */.r.OPACITYFEATUREATTRIBUTE),(0,olidUtils/* olidEnabled */.E)()&&e.vec4u8(VertexAttribute/* VertexAttribute */.r.OLIDCOLOR),e}createBufferWriter(){return new K(this._layout,this.parameters)}createGLMaterial(e){return new X(e)}validateParameters(e){"miter"!==e.join&&(e.miterLimit=0),null!=e.markerParameters&&(e.markerScale=e.markerParameters.width/e.width)}}class X extends GLMaterial/* default */.A{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextures.release(this._stipplePattern),this._stipplePattern=null}beginSlot(e){const t=this._material.parameters.stipplePattern;return this._stipplePattern!==t&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(t,this._stipplePattern)}),this._stipplePattern=t),this.getTechnique(S,e)}}class Q extends VisualVariablePassParameters/* VisualVariablePassParameters */.S{constructor(){super(...arguments),this.width=0,this.color=vec4f64/* ONES */.Un,this.join="miter",this.cap=RibbonLineTechniqueConfiguration/* CapType */.x.BUTT,this.miterLimit=5,this.writeDepth=!0,this.hasPolygonOffset=!1,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1}get transparent(){return this.color[3]<1||null!=this.stipplePattern&&(this.stippleOffColor?.[3]??0)<1}}class K{constructor(e,t){this.vertexBufferLayout=e,this._parameters=t;const r=t.stipplePattern?1:0;switch(this._parameters.join){case"miter":case"bevel":this.numJoinSubdivisions=r;break;case"round":this.numJoinSubdivisions=RibbonLine_glsl.r+r}}_isClosed(e){return ee(this._parameters,e)}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){const t=2,r=e.get(VertexAttribute/* VertexAttribute */.r.POSITION).indices.length/2+1,i=this._isClosed(e);let s=i?2:2*t;return s+=((i?r:r-1)-(i?0:1))*(2*this.numJoinSubdivisions+4),s+=2,this._parameters.wireframe&&(s=2+4*(s-2)),s}write(e,t,r,i,a,n){const o=r.get(VertexAttribute/* VertexAttribute */.r.POSITION),l=o.indices,p=o.data.length/3,m=r.get(VertexAttribute/* VertexAttribute */.r.DISTANCETOSTART)?.data;l&&l.length!==2*(p-1)&&console.warn("RibbonLineMaterial does not support indices");const u=(this.vertexBufferLayout.fields.has(VertexAttribute/* VertexAttribute */.r.SIZEFEATUREATTRIBUTE)?r.get(VertexAttribute/* VertexAttribute */.r.SIZEFEATUREATTRIBUTE)?.data[0]:r.get(VertexAttribute/* VertexAttribute */.r.SIZE)?.data[0])??1;let d=[1,1,1,1],E=0;const _=this.vertexBufferLayout.fields.has(VertexAttribute/* VertexAttribute */.r.COLORFEATUREATTRIBUTE);_?E=r.get(VertexAttribute/* VertexAttribute */.r.COLORFEATUREATTRIBUTE).data[0]:r.has(VertexAttribute/* VertexAttribute */.r.COLOR)&&(d=r.get(VertexAttribute/* VertexAttribute */.r.COLOR).data);const A=this.vertexBufferLayout.fields.has(VertexAttribute/* VertexAttribute */.r.OPACITYFEATUREATTRIBUTE),R=A?r.get(VertexAttribute/* VertexAttribute */.r.OPACITYFEATUREATTRIBUTE).data[0]:0,g=new Float32Array(a.buffer),S=(0,float16/* makeFloat16Array */.Bg)(a.buffer),O=new Uint8Array(a.buffer),I=this.vertexBufferLayout.stride/4;let v=n*I;const P=v;let N=0;const L=m?(e,t,r)=>N=m[r]:(e,t,r)=>N+=(0,vec32.j)(e,t),b=g.BYTES_PER_ELEMENT/S.BYTES_PER_ELEMENT,C=4/b,U=(e,t,r,s,a,n,o)=>{g[v++]=t[0],g[v++]=t[1],g[v++]=t[2],(0,bufferWriterUtils/* writeDeltaF16Vector */.Wu)(e,t,S,v*b),v+=C,(0,bufferWriterUtils/* writeDeltaF16Vector */.Wu)(r,t,S,v*b),v+=C,g[v++]=o;let l=v*b;if(S[l++]=s,S[l++]=a,v=Math.ceil(l/b),_)g[v]=E;else{const e=Math.min(4*n,d.length-4),t=4*v;O[t]=255*d[e],O[t+1]=255*d[e+1],O[t+2]=255*d[e+2],O[t+3]=255*d[e+3]}if(v++,g[v++]=u,A&&(g[v++]=R),(0,olidUtils/* olidEnabled */.E)()){let e=4*v;i?(O[e++]=i[0],O[e++]=i[1],O[e++]=i[2],O[e++]=i[3]):(O[e++]=0,O[e++]=0,O[e++]=0,O[e++]=0),v=Math.ceil(.25*e)}};v+=I,(0,vec32.i)(ue,o.data[0],o.data[1],o.data[2]),e&&(0,vec32.t)(ue,ue,e);const j=this._isClosed(r);if(j){const t=o.data.length-3;(0,vec32.i)(me,o.data[t],o.data[t+1],o.data[t+2]),e&&(0,vec32.t)(me,me,e)}else (0,vec32.i)(Te,o.data[3],o.data[4],o.data[5]),e&&(0,vec32.t)(Te,Te,e),U(ue,ue,Te,1,Y.LEFT_CAP_START,0,0),U(ue,ue,Te,1,Y.RIGHT_CAP_START,0,0),(0,vec32.c)(me,ue),(0,vec32.c)(ue,Te);const D=j?0:1,F=j?p:p-1;for(let h=D;h<F;h++){const t=(h+1)%p*3;(0,vec32.i)(Te,o.data[t],o.data[t+1],o.data[t+2]),e&&(0,vec32.t)(Te,Te,e),L(me,ue,h),U(me,ue,Te,0,Y.LEFT_JOIN_END,h,N),U(me,ue,Te,0,Y.RIGHT_JOIN_END,h,N);const r=this.numJoinSubdivisions;for(let e=0;e<r;++e){const t=(e+1)/(r+1);U(me,ue,Te,t,Y.LEFT_JOIN_END,h,N),U(me,ue,Te,t,Y.RIGHT_JOIN_END,h,N)}U(me,ue,Te,1,Y.LEFT_JOIN_START,h,N),U(me,ue,Te,1,Y.RIGHT_JOIN_START,h,N),(0,vec32.c)(me,ue),(0,vec32.c)(ue,Te)}j?((0,vec32.i)(Te,o.data[3],o.data[4],o.data[5]),e&&(0,vec32.t)(Te,Te,e),N=L(me,ue,F),U(me,ue,Te,0,Y.LEFT_JOIN_END,D,N),U(me,ue,Te,0,Y.RIGHT_JOIN_END,D,N)):(N=L(me,ue,F),U(me,ue,ue,0,Y.LEFT_CAP_END,F,N),U(me,ue,ue,0,Y.RIGHT_CAP_END,F,N)),$(g,P+I,g,P,I);return v=$(g,v-I,g,v,I),this._parameters.wireframe&&this._addWireframeVertices(a,P,v,I),null}_addWireframeVertices(e,t,r,i){const s=new Float32Array(e.buffer,r*Float32Array.BYTES_PER_ELEMENT),a=new Float32Array(e.buffer,t*Float32Array.BYTES_PER_ELEMENT,r-t);let n=0;const o=e=>n=$(a,e,s,n,i);for(let l=0;l<a.length-1;l+=2*i)o(l),o(l+2*i),o(l+1*i),o(l+2*i),o(l+1*i),o(l+3*i)}}function $(e,t,r,i,s){for(let a=0;a<s;a++)r[i++]=e[t++];return i}function ee(e,t){if(!e.isClosed)return!1;return t.get(VertexAttribute/* VertexAttribute */.r.POSITION).indices.length>2}function te(e){return e.anchor===LineMarkerTechniqueConfiguration/* LineMarkerAnchor */.kJ.Tip&&e.hideOnShortSegments&&"begin-end"===e.placement&&e.worldSpace}const re=(0,vec3f64/* create */.vt)(),ie=(0,vec3f64/* create */.vt)(),se=(0,vec3f64/* create */.vt)(),ae=(0,vec3f64/* create */.vt)(),ne=(0,vec3f64/* create */.vt)(),oe=(0,screenUtils/* createRenderScreenPointArray3 */.r_)(),le=(0,screenUtils/* createRenderScreenPointArray3 */.r_)(),ce=(0,vec3f64/* create */.vt)(),pe=(0,vec3f64/* create */.vt)(),he=(0,lineSegment/* create */.vt)(),fe=(0,lineSegment/* create */.vt)(),me=(0,vec3f64/* create */.vt)(),ue=(0,vec3f64/* create */.vt)(),Te=(0,vec3f64/* create */.vt)(),de=[(0,screenUtils/* createRenderScreenPointArray3 */.r_)(),(0,screenUtils/* createRenderScreenPointArray3 */.r_)(),(0,screenUtils/* createRenderScreenPointArray3 */.r_)(),(0,screenUtils/* createRenderScreenPointArray3 */.r_)()],Ee=[(0,vec3f64/* create */.vt)(),(0,vec3f64/* create */.vt)(),(0,vec3f64/* create */.vt)(),(0,vec3f64/* create */.vt)()],_e=(0,plane/* create */.vt)(),Ae=(0,plane/* create */.vt)(),Re=(0,plane/* create */.vt)(),ge=(0,plane/* create */.vt)();


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

/***/ 29688:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ci: () => (/* binding */ n),
/* harmony export */   PC: () => (/* binding */ r),
/* harmony export */   Vk: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58359);
/* harmony import */ var _webgl_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76698);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function n(t,e){return null==t&&(t=[]),t.push(e),t}function r(t,e){if(null==t)return null;const n=t.filter((t=>t!==e));return 0===n.length?null:n}function l(t,n,r,l,i){o[0]=t.get(n,0),o[1]=t.get(n,1),o[2]=t.get(n,2),(0,_webgl_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .encodeDoubleArray */ .jS)(o,s,3),r.set(i,0,s[0]),l.set(i,0,s[1]),r.set(i,1,s[2]),l.set(i,1,s[3]),r.set(i,2,s[4]),l.set(i,2,s[5])}const o=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__/* .create */ .vt)(),s=new Float32Array(6);


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

/***/ 58376:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dt: () => (/* binding */ a),
/* harmony export */   kJ: () => (/* binding */ p),
/* harmony export */   lM: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26139);
/* harmony import */ var _core_shaderLibrary_output_Emissions_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15420);
/* harmony import */ var _core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77941);
/* harmony import */ var _materials_DefaultTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9319);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var s,p;!function(e){e[e.Draped=0]="Draped",e[e.Screen=1]="Screen",e[e.World=2]="World",e[e.COUNT=3]="COUNT"}(s||(s={})),function(e){e[e.Center=0]="Center",e[e.Tip=1]="Tip",e[e.COUNT=2]="COUNT"}(p||(p={}));class a extends _materials_DefaultTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__/* .DefaultTechniqueConfiguration */ .E{constructor(){super(...arguments),this.space=s.Screen,this.anchor=p.Center,this.occluder=!1,this.writeDepth=!1,this.hideOnShortSegments=!1,this.hasCap=!1,this.hasTip=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.hasOccludees=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.textureCoordinateType=_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .TextureCoordinateType */ .I.None,this.emissionSource=_core_shaderLibrary_output_Emissions_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .EmissionSource */ .ZX.None,this.discardInvisibleFragments=!0,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0,this.objectAndLayerIdColorInstanced=!1,this.overlayEnabled=!1,this.snowCover=!1}get draped(){return this.space===s.Draped}}(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)({count:s.COUNT})],a.prototype,"space",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)({count:p.COUNT})],a.prototype,"anchor",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)()],a.prototype,"occluder",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)()],a.prototype,"writeDepth",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)()],a.prototype,"hideOnShortSegments",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)()],a.prototype,"hasCap",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)()],a.prototype,"hasTip",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)()],a.prototype,"vvSize",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)()],a.prototype,"vvColor",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)()],a.prototype,"vvOpacity",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)()],a.prototype,"hasOccludees",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)()],a.prototype,"terrainDepthTest",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)()],a.prototype,"cullAboveTerrain",void 0);


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

/***/ 16906:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ p),
/* harmony export */   x: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26139);
/* harmony import */ var _core_shaderLibrary_output_Emissions_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15420);
/* harmony import */ var _core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77941);
/* harmony import */ var _materials_DefaultTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9319);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var s;!function(o){o[o.BUTT=0]="BUTT",o[o.SQUARE=1]="SQUARE",o[o.ROUND=2]="ROUND",o[o.COUNT=3]="COUNT"}(s||(s={}));class p extends _materials_DefaultTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__/* .DefaultTechniqueConfiguration */ .E{constructor(){super(...arguments),this.capType=s.BUTT,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.occluder=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.wireframe=!1,this.discardInvisibleFragments=!1,this.objectAndLayerIdColorInstanced=!1,this.textureCoordinateType=_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .TextureCoordinateType */ .I.None,this.emissionSource=_core_shaderLibrary_output_Emissions_glsl_js__WEBPACK_IMPORTED_MODULE_2__/* .EmissionSource */ .ZX.None,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0,this.overlayEnabled=!1,this.snowCover=!1}}(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)({count:s.COUNT})],p.prototype,"capType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)()],p.prototype,"hasPolygonOffset",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)()],p.prototype,"writeDepth",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)()],p.prototype,"draped",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)()],p.prototype,"stippleEnabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)()],p.prototype,"stippleOffColorEnabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)()],p.prototype,"stipplePreferContinuous",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)()],p.prototype,"roundJoins",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)()],p.prototype,"applyMarkerOffset",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)()],p.prototype,"vvSize",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)()],p.prototype,"vvColor",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)()],p.prototype,"vvOpacity",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)()],p.prototype,"falloffEnabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)()],p.prototype,"innerColorEnabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)()],p.prototype,"hasOccludees",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)()],p.prototype,"occluder",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)()],p.prototype,"terrainDepthTest",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)()],p.prototype,"cullAboveTerrain",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)()],p.prototype,"wireframe",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)()],p.prototype,"discardInvisibleFragments",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_3__/* .parameter */ .W)()],p.prototype,"objectAndLayerIdColorInstanced",void 0);


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

/***/ 21750:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ it)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(52495);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(92504);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/screenUtils.js
var screenUtils = __webpack_require__(89882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(9272);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec42.js
var vec42 = __webpack_require__(2662);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f64.js
var vec4f64 = __webpack_require__(28152);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/frustum.js
var frustum = __webpack_require__(94982);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/ray.js
var ray = __webpack_require__(10151);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/vector.js
var vector = __webpack_require__(16597);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/ViewingMode.js
var ViewingMode = __webpack_require__(10714);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/fov.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function fov_t(t,a,n){return 2*Math.atan(Math.sqrt(a*a+n*n)*Math.tan(.5*t)/a)}function a(t,a,n){return 2*Math.atan(Math.sqrt(a*a+n*n)*Math.tan(.5*t)/n)}function n(t,a,n){return 2*Math.atan(a*Math.tan(.5*t)/Math.sqrt(a*a+n*n))}function r(t,a,n){return 2*Math.atan(n*Math.tan(.5*t)/Math.sqrt(a*a+n*n))}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/PooledArray.js + 1 modules
var PooledArray = __webpack_require__(63678);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/ChangeSet.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class s{constructor(){this.adds=new e,this.removes=new e,this.updates=new e({allocator:e=>e||new ChangeSet_r,deallocator:e=>(e.renderGeometry=null,e)})}clear(){this.adds.clear(),this.removes.clear(),this.updates.clear()}prune(){this.adds.prune(),this.removes.prune(),this.updates.prune()}get empty(){return 0===this.adds.length&&0===this.removes.length&&0===this.updates.length}}class ChangeSet_r{}class t{constructor(e){this.pending=e,this.adds=new Array,this.removes=new Array,this.updates=new Array}clearAddsAndRemoves(){this.adds.forEach((e=>this.pending.adds.removeUnordered(e))),this.removes.forEach((e=>this.pending.removes.removeUnordered(e))),this.adds.length=0,this.removes.length=0}clearUpdates(){this.updates.forEach((e=>this.pending.updates.removeUnordered(e))),this.updates.length=0}clear(){this.clearUpdates(),this.clearAddsAndRemoves()}}

;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/rendererUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var rendererUtils_r,rendererUtils_t;function rendererUtils_n(r){const t=new Map,n=n=>{let o=t.get(n);return o||(o=new e(r),t.set(n,o)),o};return r.removes.forAll((e=>{o(e)&&n(e.material).removes.push(e)})),r.adds.forAll((e=>{o(e)&&n(e.material).adds.push(e)})),r.updates.forAll((e=>{o(e.renderGeometry)&&n(e.renderGeometry.material).updates.push(e)})),t}function o(e){return e.geometry.indexCount>=1}!function(e){e[e.Default=0]="Default",e[e.Screenshot=1]="Screenshot",e[e.ObjectAndLayerID=2]="ObjectAndLayerID"}(rendererUtils_r||(rendererUtils_r={})),function(e){e[e.TOP=0]="TOP",e[e.RIGHT=1]="RIGHT",e[e.BOTTOM=2]="BOTTOM",e[e.LEFT=3]="LEFT"}(rendererUtils_t||(rendererUtils_t={}));

;// ../node_modules/@arcgis/core/views/3d/webgl/RenderCamera.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var $;let tt=$=class extends Accessor/* default */.A{constructor(t){super(t),this._ray=(0,ray/* create */.vt)(),this._viewport=(0,vec4f64/* fromValues */.fA)(0,0,1,1),this._padding=(0,vec4f64/* fromValues */.fA)(0,0,0,0),this._fov=55/180*Math.PI,this._nearFar=(0,vec2f64/* fromValues */.fA)(1,1e3),this._viewDirty=!0,this._viewMatrix=(0,mat4f64/* create */.vt)(),this._viewProjectionDirty=!0,this._viewProjectionMatrix=(0,mat4f64/* create */.vt)(),this._viewInverseTransposeMatrixDirty=!0,this._viewInverseTransposeMatrix=(0,mat4f64/* create */.vt)(),this._frustumDirty=!0,this._frustum=(0,frustum/* create */.vt)(),this._fullViewport=(0,vec4f64/* create */.vt)(),this._pixelRatio=1,this.row=0,this.column=0,this._rows=1,this._columns=1,this._center=(0,vec3f64/* create */.vt)(),this._up=(0,vec3f64/* create */.vt)(),this.relativeElevation=0}get pixelRatio(){return this._pixelRatio}set pixelRatio(t){this._pixelRatio=t>0?t:1}get rows(){return this._rows}set rows(t){this._rows=Math.max(1,t)}get columns(){return this._columns}set columns(t){this._columns=Math.max(1,t)}get eye(){return this._ray.origin}set eye(t){this._compareAndSetView(t,this._ray.origin)}get center(){return this._center}set center(t){this._compareAndSetView(t,this._center,"_center")}get ray(){return (0,vec32.d)(this._ray.direction,this.center,this.eye),this._ray}get up(){return this._up}set up(t){this._compareAndSetView(t,this._up,"_up")}get viewMatrix(){return this._ensureViewClean(),this._viewMatrix}set viewMatrix(t){(0,mat4/* copy */.C)(this._viewMatrix,t),this.notifyChange("_viewMatrix"),this._viewDirty=!1,this._viewInverseTransposeMatrixDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0}get viewForward(){return this._ensureViewClean(),(0,vec32.i)((0,vec3f64/* create */.vt)(),-this._viewMatrix[2],-this._viewMatrix[6],-this._viewMatrix[10])}get viewUp(){return this._ensureViewClean(),(0,vec32.i)((0,vec3f64/* create */.vt)(),this._viewMatrix[1],this._viewMatrix[5],this._viewMatrix[9])}get viewRight(){return this._ensureViewClean(),(0,vec32.i)((0,vec3f64/* create */.vt)(),this._viewMatrix[0],this._viewMatrix[4],this._viewMatrix[8])}get nearFar(){return this._nearFar}get near(){return this._nearFar[0]}set near(t){this._nearFar[0]!==t&&(this._nearFar[0]=t,this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_nearFar"))}get far(){return this._nearFar[1]}set far(t){this._nearFar[1]!==t&&(this._nearFar[1]=t,this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_nearFar"))}get viewport(){return this._viewport}set viewport(t){this.x=t[0],this.y=t[1],this.width=t[2],this.height=t[3]}get screenViewport(){if(1===this.pixelRatio)return this._viewport;const t=(0,vec42.d)((0,vec4f64/* create */.vt)(),this._viewport,1/this.pixelRatio),i=this._get("screenViewport");return i&&(0,vec42.e)(t,i)?i:t}get screenPadding(){if(1===this.pixelRatio)return this._padding;const t=(0,vec42.d)((0,vec4f64/* create */.vt)(),this._padding,1/this.pixelRatio),i=this._get("screenPadding");return i&&(0,vec42.e)(t,i)?i:t}get x(){return this._viewport[0]}set x(t){t+=this._padding[rendererUtils_t.LEFT],this._viewport[0]!==t&&(this._viewport[0]=t,this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_viewport"))}get y(){return this._viewport[1]}set y(t){t+=this._padding[rendererUtils_t.BOTTOM],this._viewport[1]!==t&&(this._viewport[1]=t,this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_viewport"))}get width(){return this._viewport[2]}set width(t){this._viewport[2]!==t&&(this._viewport[2]=t,this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_viewport"))}get height(){return this._viewport[3]}set height(t){this._viewport[3]!==t&&(this._viewport[3]=t,this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_viewport"))}get fullWidth(){return this._viewport[2]+this._padding[rendererUtils_t.RIGHT]+this._padding[rendererUtils_t.LEFT]}set fullWidth(t){this.width=t-(this._padding[rendererUtils_t.RIGHT]+this._padding[rendererUtils_t.LEFT])}get fullHeight(){return this._viewport[3]+this._padding[rendererUtils_t.TOP]+this._padding[rendererUtils_t.BOTTOM]}set fullHeight(t){this.height=t-(this._padding[rendererUtils_t.TOP]+this._padding[rendererUtils_t.BOTTOM])}get fullViewport(){return this._fullViewport[0]=this._viewport[0]-this._padding[rendererUtils_t.LEFT],this._fullViewport[1]=this._viewport[1]-this._padding[rendererUtils_t.BOTTOM],this._fullViewport[2]=this.fullWidth,this._fullViewport[3]=this.fullHeight,this._fullViewport}get _aspect(){return this.width/this.height}get padding(){return this._padding}set padding(t){(0,vec42.a)(this._padding,t)||(this._viewport[0]+=t[rendererUtils_t.LEFT]-this._padding[rendererUtils_t.LEFT],this._viewport[1]+=t[rendererUtils_t.BOTTOM]-this._padding[rendererUtils_t.BOTTOM],this._viewport[2]-=t[rendererUtils_t.RIGHT]+t[rendererUtils_t.LEFT]-(this._padding[rendererUtils_t.RIGHT]+this._padding[rendererUtils_t.LEFT]),this._viewport[3]-=t[rendererUtils_t.TOP]+t[rendererUtils_t.BOTTOM]-(this._padding[rendererUtils_t.TOP]+this._padding[rendererUtils_t.BOTTOM]),(0,vec42.c)(this._padding,t),this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_padding"),this.notifyChange("_viewport"))}get viewProjectionMatrix(){return this._viewProjectionDirty&&((0,mat4/* multiply */.lw)(this._viewProjectionMatrix,this.projectionMatrix,this.viewMatrix),this._viewProjectionDirty=!1),this._viewProjectionMatrix}get projectionMatrix(){return this._projectionMatrixInternal}get inverseProjectionMatrix(){return (0,mat4/* invert */.B8)((0,mat4f64/* create */.vt)(),this.projectionMatrix)||this._get("inverseProjectionMatrix")||(0,mat4f64/* create */.vt)()}get fov(){return this._fov}set fov(t){this._fov=t,this._viewProjectionDirty=!0,this._frustumDirty=!0}get fovX(){return n(this._fov,this.width,this.height)}set fovX(t){this._fov=fov_t(t,this.width,this.height),this._viewProjectionDirty=!0,this._frustumDirty=!0}get fovY(){return r(this._fov,this.width,this.height)}set fovY(t){this._fov=a(t,this.width,this.height),this._viewProjectionDirty=!0,this._frustumDirty=!0}get distance(){return (0,vec32.j)(this.center,this.eye)}get frustum(){return this._recomputeFrustum(),this._frustum}get viewInverseTransposeMatrix(){return(this._viewInverseTransposeMatrixDirty||this._viewDirty)&&((0,mat4/* invert */.B8)(this._viewInverseTransposeMatrix,this.viewMatrix),(0,mat4/* transpose */.mg)(this._viewInverseTransposeMatrix,this._viewInverseTransposeMatrix),this._viewInverseTransposeMatrixDirty=!1),this._viewInverseTransposeMatrix}depthNDCToWorld(t){const{near:i,far:e}=this;return 2*i*e/(e+i-t*(e-i))}get perRenderPixelRatio(){return Math.tan(this.fovX/2)/(this.width/2)}get perScreenPixelRatio(){return this.perRenderPixelRatio*this.pixelRatio}get aboveGround(){return null!=this.relativeElevation&&this.relativeElevation>=0}get _projectionMatrixInternal(){const t=this.width,i=this.height,e=this.near*Math.tan(this.fovY/2)*2,r=e*this._aspect,s=e/this.rows,o=r/this.columns,n=-r/2+this.column*o,h=n+o,a=-e/2+this.row*s,p=a+s,u=(0,mat4/* frustum */.$h)((0,mat4f64/* create */.vt)(),n*(1+2*this._padding[rendererUtils_t.LEFT]/t),h*(1+2*this._padding[rendererUtils_t.RIGHT]/t),a*(1+2*this._padding[rendererUtils_t.BOTTOM]/i),p*(1+2*this._padding[rendererUtils_t.TOP]/i),this.near,this.far),l=this._get("projectionMatrix");return l&&(0,mat4/* equals */.aI)(l,u)?l:u}copyFrom(t){(0,vec32.c)(this._ray.origin,t.eye),this.center=t.center,this.up=t.up,(0,vec42.c)(this._viewport,t.viewport),this.notifyChange("_viewport"),(0,vec42.c)(this._padding,t.padding),this.notifyChange("_padding"),(0,vec2/* copy */.C)(this._nearFar,t.nearFar),this.notifyChange("_nearFar"),this._fov=t.fov,this.row=t.row,this.column=t.column,this.rows=t.rows,this.columns=t.columns,this.relativeElevation=t.relativeElevation;const i=t;return this._viewDirty=i._viewDirty,this._viewDirty||((0,mat4/* copy */.C)(this._viewMatrix,t.viewMatrix),this.notifyChange("_viewMatrix")),this._viewProjectionDirty=!0,this._frustumDirty=i._frustumDirty,this._frustumDirty||((0,frustum/* copy */.C)(this._frustum,t.frustum),this._frustumDirty=!1),i._viewInverseTransposeMatrixDirty?this._viewInverseTransposeMatrixDirty=!0:((0,mat4/* copy */.C)(this._viewInverseTransposeMatrix,t.viewInverseTransposeMatrix),this._viewInverseTransposeMatrixDirty=!1),(0,vec42.c)(this._fullViewport,t.fullViewport),this.pixelRatio=t.pixelRatio,this}copyViewFrom(t){this.eye=t.eye,this.center=t.center,this.up=t.up,this.fov=t.fov}clone(){return(new $).copyFrom(this)}equals(t){return (0,vec32.q)(this.eye,t.eye)&&(0,vec32.q)(this.center,t.center)&&(0,vec32.q)(this.up,t.up)&&(0,vec42.a)(this._viewport,t.viewport)&&(0,vec42.a)(this._padding,t.padding)&&(0,vec2/* exactEquals */.t2)(this.nearFar,t.nearFar)&&this._fov===t.fov&&this.pixelRatio===t.pixelRatio&&this.relativeElevation===t.relativeElevation&&this.row===t.row&&this.column===t.column&&this.rows===t.rows&&this.columns===t.columns}almostEquals(t){const i=Math.max(1,1/this.pixelRatio,1/t.pixelRatio);if(Math.abs(t.fov-this._fov)>=.001||(0,vec42.f)(t.screenPadding,this.screenPadding)>=i||(0,vec42.f)(this.screenViewport,t.screenViewport)>=i||this.row!==t.row||this.column!==t.column||this.rows!==t.rows||this.columns!==t.columns)return!1;(0,vec32.a)(st,t.eye,t.center),(0,vec32.a)(ot,this.eye,this.center);const e=(0,vec32.e)(st,ot),r=(0,vec32.y)(st),s=(0,vec32.y)(ot),o=5e-4;return e*e>=(1-1e-10)*r*s&&(0,vec32.x)(t.eye,this.eye)<Math.max(r,s)*o*o}computeRenderPixelSizeAt(t){return this.computeRenderPixelSizeAtDist(this._viewDirectionDistance(t))}computeRenderPixelSizeAtDist(t){return t*this.perRenderPixelRatio}computeScreenPixelSizeAt(t){return this.computeScreenPixelSizeAtDist(this._viewDirectionDistance(t))}_viewDirectionDistance(t){return Math.abs((0,vector/* projectPointSignedLength */.gr)(this.viewForward,(0,vec32.d)(st,t,this.eye)))}computeScreenPixelSizeAtDist(t){return t*this.perScreenPixelRatio}computeDistanceFromRadius(t,i){return t/Math.tan(Math.min(this.fovX,this.fovY)/(2*(i||1)))}getScreenCenter(t=(0,screenUtils/* createScreenPointArray */.gs)()){return t[0]=(this.padding[rendererUtils_t.LEFT]+this.width/2)/this.pixelRatio,t[1]=(this.padding[rendererUtils_t.TOP]+this.height/2)/this.pixelRatio,t}getRenderCenter(t,i=.5,e=.5){return t[0]=this.padding[rendererUtils_t.LEFT]+this.width*i,t[1]=this.padding[rendererUtils_t.BOTTOM]+this.height*e,t[2]=.5,t}setGLViewport(t){const i=this.viewport,e=this.padding;t.setViewport(i[0]-e[3],i[1]-e[2],i[2]+e[1]+e[3],i[3]+e[0]+e[2])}applyProjection(t,i){t!==et&&(0,vec32.c)(et,t),et[3]=1,(0,vec42.t)(et,et,this.projectionMatrix);const e=Math.abs(et[3]);(0,vec32.g)(et,et,1/e);const s=this.fullViewport;i[0]=(0,mathUtils/* lerp */.Cc)(0,s[0]+s[2],.5+.5*et[0]),i[1]=(0,mathUtils/* lerp */.Cc)(0,s[1]+s[3],.5+.5*et[1]),i[2]=.5*(et[2]+1),i[3]=e}unapplyProjection(t,i){const e=this.fullViewport;et[0]=(t[0]/(e[0]+e[2])*2-1)*t[3],et[1]=(t[1]/(e[1]+e[3])*2-1)*t[3],et[2]=(2*t[2]-1)*t[3],et[3]=t[3],null!=this.inverseProjectionMatrix&&((0,vec42.t)(et,et,this.inverseProjectionMatrix),i[0]=et[0],i[1]=et[1],i[2]=et[2])}projectToScreen(t,i){return this.projectToRenderScreen(t,nt),this.renderToScreen(nt,i),i}projectToRenderScreen(t,i){if(et[0]=t[0],et[1]=t[1],et[2]=t[2],et[3]=1,(0,vec42.t)(et,et,this.viewProjectionMatrix),0===et[3])return null;const e=et;(0,vec32.g)(e,e,1/Math.abs(et[3]));const s=this.fullViewport,o=(0,mathUtils/* lerp */.Cc)(0,s[0]+s[2],.5+.5*e[0]),n=(0,mathUtils/* lerp */.Cc)(0,s[1]+s[3],.5+.5*e[1]);return"x"in i?(i.x=o,i.y=n):(i[0]=o,i[1]=n,i.length>2&&(i[2]=.5*(e[2]+1))),i}unprojectFromScreen(t,i){return this.unprojectFromRenderScreen(this.screenToRender(t,nt),i)}unprojectFromRenderScreen(t,i){if((0,mat4/* multiply */.lw)(rt,this.projectionMatrix,this.viewMatrix),!(0,mat4/* invert */.B8)(rt,rt))return null;const e=this.fullViewport;return et[0]=2*(t[0]-e[0])/e[2]-1,et[1]=2*(t[1]-e[1])/e[3]-1,et[2]=2*t[2]-1,et[3]=1,(0,vec42.t)(et,et,rt),0===et[3]?null:(i[0]=et[0]/et[3],i[1]=et[1]/et[3],i[2]=et[2]/et[3],i)}constrainWindowSize(t,i,e,r){const s=t*this.pixelRatio,o=i*this.pixelRatio,n=Math.max(s-e/2,0),h=Math.max(this.fullHeight-o-r/2,0),a=-Math.min(s-e/2,0),p=-Math.min(this.fullHeight-o-r/2,0),u=e-a- -Math.min(this.fullWidth-s-e/2,0),l=r-p- -Math.min(o-r/2,0);return[Math.round(n),Math.round(h),Math.round(u),Math.round(l)]}computeUp(t){t===ViewingMode/* ViewingMode */.RT.Global?this._computeUpGlobal():this._computeUpLocal()}screenToRender(t,i){const e=t[0]*this.pixelRatio,r=this.fullHeight-t[1]*this.pixelRatio;return i[0]=e,i[1]=r,i}renderToScreen(t,i){const e=t[0]/this.pixelRatio,r=(this.fullHeight-t[1])/this.pixelRatio;i[0]=e,i[1]=r}_computeUpGlobal(){(0,vec32.d)(st,this.center,this.eye);const t=(0,vec32.l)(this.center);t<1?((0,vec32.i)(this._up,0,0,1),this._markViewDirty(),this.notifyChange("_up")):Math.abs((0,vec32.e)(st,this.center))>.9999*(0,vec32.l)(st)*t||((0,vec32.h)(this._up,st,this.center),(0,vec32.h)(this._up,this._up,st),(0,vec32.n)(this._up,this._up),this.notifyChange("_up"),this._markViewDirty())}_computeUpLocal(){(0,vec32.E)(st,this.eye,this.center),Math.abs(st[2])<=.9999&&((0,vec32.g)(st,st,st[2]),(0,vec32.i)(this._up,-st[0],-st[1],1-st[2]),(0,vec32.n)(this._up,this._up),this.notifyChange("_up"),this._markViewDirty())}_compareAndSetView(t,i,r=""){"number"==typeof t[0]&&isFinite(t[0])&&"number"==typeof t[1]&&isFinite(t[1])&&"number"==typeof t[2]&&isFinite(t[2])?(0,vec32.q)(t,i)||((0,vec32.c)(i,t),this._markViewDirty(),r.length&&this.notifyChange(r)):Logger/* default */.A.getLogger("esri.views.3d.webgl-engine.lib.RenderCamera").warn("RenderCamera vector contains invalid number, ignoring value")}_markViewDirty(){this._viewDirty=!0,this._frustumDirty=!0,this._viewProjectionDirty=!0}_recomputeFrustum(){this._frustumDirty&&((0,frustum/* fromMatrix */.ui)(this.viewMatrix,this.projectionMatrix,this._frustum),this._frustumDirty=!1)}_ensureViewClean(){this._viewDirty&&((0,mat4/* lookAt */.t5)(this._viewMatrix,this.eye,this.center,this.up),this.notifyChange("_viewMatrix"),this._viewDirty=!1,this._viewInverseTransposeMatrixDirty=!0)}};(0,tslib_es6._)([(0,property/* property */.MZ)()],tt.prototype,"_viewport",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],tt.prototype,"_padding",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],tt.prototype,"_fov",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],tt.prototype,"_nearFar",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],tt.prototype,"_viewDirty",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],tt.prototype,"_viewMatrix",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],tt.prototype,"_pixelRatio",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],tt.prototype,"pixelRatio",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],tt.prototype,"row",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],tt.prototype,"column",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],tt.prototype,"_rows",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],tt.prototype,"rows",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],tt.prototype,"_columns",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],tt.prototype,"columns",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],tt.prototype,"eye",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],tt.prototype,"center",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],tt.prototype,"_center",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],tt.prototype,"up",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],tt.prototype,"_up",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],tt.prototype,"viewMatrix",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],tt.prototype,"viewForward",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],tt.prototype,"viewUp",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],tt.prototype,"viewRight",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],tt.prototype,"nearFar",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],tt.prototype,"near",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],tt.prototype,"far",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],tt.prototype,"viewport",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],tt.prototype,"screenViewport",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],tt.prototype,"screenPadding",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],tt.prototype,"x",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],tt.prototype,"y",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],tt.prototype,"width",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],tt.prototype,"height",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],tt.prototype,"fullWidth",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],tt.prototype,"fullHeight",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],tt.prototype,"_aspect",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],tt.prototype,"padding",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],tt.prototype,"projectionMatrix",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],tt.prototype,"inverseProjectionMatrix",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],tt.prototype,"fov",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],tt.prototype,"fovX",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],tt.prototype,"fovY",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],tt.prototype,"viewInverseTransposeMatrix",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],tt.prototype,"_projectionMatrixInternal",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],tt.prototype,"relativeElevation",void 0),tt=$=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.3d.webgl.RenderCamera")],tt);const it=tt,et=(0,vec4f64/* create */.vt)(),rt=(0,mat4f64/* create */.vt)(),st=(0,vec3f64/* create */.vt)(),ot=(0,vec3f64/* create */.vt)(),nt=(0,screenUtils/* createRenderScreenPointArray3 */.r_)();


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

/***/ 9049:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52495);
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17306);
/* harmony import */ var _core_Identifiable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65667);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(539);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6267);
/* harmony import */ var _core_Promise_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84410);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39831);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63863);
/* harmony import */ var _core_support_UpdatingHandles_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4238);
/* harmony import */ var _support_layerViewUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(38201);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let u=class extends(_core_Identifiable_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.IdentifiableMixin(_core_Promise_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.EsriPromiseMixin(_core_Evented_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.EventedMixin(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)))){get spatialReferenceSupported(){return!0}constructor(e){super(e),this._updatingHandles=new _core_support_UpdatingHandles_js__WEBPACK_IMPORTED_MODULE_10__/* .UpdatingHandles */ .U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",r=this.layer?.title||"no title";_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${r}', id: '${t}')`,e)}}))}destroy(){this._updatingHandles=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__/* .destroyMaybe */ .pR)(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){return!0===this.layer?.visible}set visible(e){this._overrideIfSome("visible",e)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){const e=this.view.timeExtent,t=this.layer?.visibilityTimeExtent;return!e||!t||!e.intersection(t).isEmpty}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&this.layer?.loaded&&this.parent&&!this.parent.suspended&&this.view?.ready&&(0,_support_layerViewUtils_js__WEBPACK_IMPORTED_MODULE_11__/* .validateScaleRange */ .g7)(e)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){const e=this.parent?.suspended?this.parent.suspendInfo:{},t=this;t.view?.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0);const r=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return (0,_support_layerViewUtils_js__WEBPACK_IMPORTED_MODULE_11__/* .validateScaleRange */ .g7)(r)&&this.visibleAtCurrentScale||(e.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(e.outsideVisibilityTimeExtent=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({readOnly:!0})],u.prototype,"spatialReferenceSupported",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)()],u.prototype,"view",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)()],u.prototype,"fullOpacity",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)()],u.prototype,"layer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)()],u.prototype,"parent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({readOnly:!0})],u.prototype,"suspended",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({readOnly:!0})],u.prototype,"suspendInfo",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({readOnly:!0})],u.prototype,"legendEnabled",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:Boolean,readOnly:!0})],u.prototype,"updating",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({readOnly:!0})],u.prototype,"updatingProgress",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)()],u.prototype,"updateSuspended",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)()],u.prototype,"visible",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({readOnly:!0})],u.prototype,"visibleAtCurrentScale",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({readOnly:!0})],u.prototype,"visibleAtCurrentTimeExtent",null),u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__/* .subclass */ .$)("esri.views.layers.LayerView")],u);


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