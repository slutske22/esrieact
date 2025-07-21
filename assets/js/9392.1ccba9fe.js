"use strict";
exports.id = 9392;
exports.ids = [9392,6986,6826];
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

/***/ 67766:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ m),
/* harmony export */   s: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _DateOnly_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45132);
/* harmony import */ var _errorSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43023);
/* harmony import */ var _SqlTimestampOffset_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64473);
/* harmony import */ var _TimeOnly_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40845);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34495);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function u(n,e){const a=o[n.toLowerCase()];if(null==a)throw new _errorSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlError */ .L8(_errorSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlErrorCodes */ .Z7.FunctionNotRecognized);if(e.length<a.minParams||e.length>a.maxParams)throw new _errorSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlError */ .L8(_errorSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlErrorCodes */ .Z7.InvalidParameterCount,{name:n.toUpperCase()});return a.evaluate(e)}function m(n,l){const t=o[n.toLowerCase()];return null!=t&&l>=t.minParams&&l<=t.maxParams}const o={min:{minParams:1,maxParams:1,evaluate:n=>f(n[0],"min")},max:{minParams:1,maxParams:1,evaluate:n=>f(n[0],"max")},avg:{minParams:1,maxParams:1,evaluate:n=>i(n[0])},sum:{minParams:1,maxParams:1,evaluate:n=>c(n[0])},stddev:{minParams:1,maxParams:1,evaluate:n=>g(n[0])},count:{minParams:1,maxParams:1,evaluate:n=>null==n[0]?null:n[0].length},var:{minParams:1,maxParams:1,evaluate:n=>P(n[0])}};function i(n){if(null===n)return null;let e=0,a=0;for(let r=0;r<n.length;r++){const u=n[r];if(null!==u){if(!s(u))throw new _errorSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlError */ .L8(_errorSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlErrorCodes */ .Z7.InvalidValueForAggregateFunction);a++,e+=u}}return 0===a?null:e/n.length}function s(n){return"number"==typeof n}function f(l,t){if(null===l)return null;let u=null,m=null;for(const o of l){let l=o;l=_DateOnly_js__WEBPACK_IMPORTED_MODULE_0__/* .DateOnly */ .n.isDateOnly(o)||_TimeOnly_js__WEBPACK_IMPORTED_MODULE_3__/* .TimeOnly */ .k.isTimeOnly(o)?o.toNumber():luxon__WEBPACK_IMPORTED_MODULE_4__/* .DateTime */ .c9.isDateTime(o)?o.toMillis():_SqlTimestampOffset_js__WEBPACK_IMPORTED_MODULE_2__/* .SqlTimeStampOffset */ .g.isTimestampOffset(o)?o.toMilliseconds():o,(null===u||"max"===t&&null!==m&&null!==l&&m<=l||"min"===t&&null!==m&&null!==l&&m>=l)&&(u=o,m=l)}return u}function c(n){if(null===n)return null;let e=0;for(let a=0;a<n.length;a++){const r=n[a];if(null!==r){if(!s(r))throw new _errorSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlError */ .L8(_errorSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlErrorCodes */ .Z7.InvalidValueForAggregateFunction);e+=r}}return e}function g(n){if(null===n)return null;const l=P(n);return null===l?null:Math.sqrt(l)}function P(n){if(null===n)return null;if(0===(n=n.filter((n=>null!==n))).length)return null;const e=i(n);if(null===e)return null;let a=0;for(const r of n){if(!s(r))throw new _errorSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlError */ .L8(_errorSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .SqlErrorCodes */ .Z7.InvalidValueForAggregateFunction);a+=(e-r)**2}return a/(n.length-1)}


/***/ }),

/***/ 64473:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34495);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(t){return Number.isNaN(t)||0===t?t:Math.trunc(t)}const r="esri.core.sql.SqlTimeStampOffset";class i{constructor(t){this._timeStampOffset=t,this.declaredRootClass=r,this._date=null}static isTimestampOffset(t){return"object"==typeof t&&null!=t&&"declaredRootClass"in t&&t.declaredRootClass===r}toDateTime(){return this._date??=luxon__WEBPACK_IMPORTED_MODULE_0__/* .DateTime */ .c9.fromISO(this._timeStampOffset,{setZone:!0}),this._date}get isValid(){return this.toDateTime().isValid}get timezoneOffsetHour(){return e(this.toDateTime().offset/60)}get timezoneOffsetMinutes(){return e(this.toDateTime().offset%60)}toMilliseconds(){return this.toDateTime().toMillis()}get hour(){return this.toDateTime().hour}get minute(){return this.toDateTime().minute}get second(){return this.toDateTime().second}get day(){return this.toDateTime().day}get month(){return this.toDateTime().month}get year(){return this.toDateTime().year}startOfDay(){return i.fromDateTime(this.toDateTime().startOf("day"))}static fromJSDate(e){return new i(luxon__WEBPACK_IMPORTED_MODULE_0__/* .DateTime */ .c9.fromJSDate(e).toISO({includeOffset:!0}))}static fromDateTime(t){return new i(t.toISO({includeOffset:!0}))}static fromParts(t,e,r=0,o=0,a=0,s=0,n=0,m=!1,u=0,f=0){const S=`${t.toString().padStart(4,"0")}-${e.toString().padStart(2,"0")}-${r.toString().padStart(2,"0")}`;let d="";s<10&&(d="0");let l=`${o.toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}:${d+s.toString()}`;0!==n&&(l+="."+n.toString().padStart(3,"0"));const c=`${m?"-":"+"}${u.toString().padStart(2,"0")}:${f.toString().padStart(2,"0")}`;return new i(S+"T"+l+c)}toStorageFormat(){return this._timeStampOffset}toString(){return this._timeStampOffset}toSQLValue(){let t=this.toDateTime().toSQL({includeOffset:!0,includeOffsetSpace:!0});return t&&(t=t.replace(".000","")),t}toSQLWithKeyword(){return`timestamp '${this.toSQLValue()}'`}addMilliseconds(t){const e=this.toDateTime().plus(t);return i.fromDateTime(e)}}


/***/ }),

/***/ 46826:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ WhereClause_R)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/sql/AggregateFunctions.js
var AggregateFunctions = __webpack_require__(67766);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/sql/DateOnly.js
var DateOnly = __webpack_require__(45132);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/sql/errorSupport.js
var errorSupport = __webpack_require__(43023);
;// ../node_modules/@arcgis/core/core/sql/SqlInterval.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function r(r){if(null!==r.precision||null!==r.secondary)throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.PrimarySecondaryQualifiers)}function s(e,t){if(t.includes(".")){const r=t.split(".");e.second=parseFloat(r[0]),e.millis=parseInt(r[1],10)}else e.second=parseFloat(t)}const l="esri.core.sql.SqlInterval";class SqlInterval_a{constructor(){this.declaredRootClass=l,this.op="+",this.day=0,this.second=0,this.hour=0,this.month=0,this.year=0,this.minute=0,this.millis=0}static isInterval(e){return"object"==typeof e&&null!=e&&"declaredRootClass"in e&&e.declaredRootClass===l}static createFromMilliseconds(e){const t=new SqlInterval_a;return t.second=e/1e3,t}static createFromValueAndQualifier(l,o,n){let i=null;const p=new SqlInterval_a;if(p.op="-"===n?"-":"+","interval-period"===o.type){r(o);const a=new RegExp("^[0-9]{1,}$");if("year"===o.period||"month"===o.period)throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.YearMonthIntervals);if("second"===o.period){if(!/^[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$/.test(l))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.IllegalInterval);s(p,l)}else{if(!a.test(l))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.IllegalInterval);p[o.period]=parseFloat(l)}}else{if(r(o.start),r(o.end),"year"===o.start.period||"month"===o.start.period||"year"===o.end.period||"month"===o.end.period)throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.YearMonthIntervals);switch(o.start.period){case"day":switch(o.end.period){case"hour":if(i=new RegExp("^[0-9]{1,} [0-9]{1,}$"),!i.test(l))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.IllegalInterval);p[o.start.period]=parseFloat(l.split(" ")[0]),p[o.end.period]=parseFloat(l.split(" ")[1]);break;case"minute":if(i=new RegExp("^[0-9]{1,} [0-9]{1,2}:[0-9]{1,}$"),!i.test(l))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.IllegalInterval);{p[o.start.period]=parseFloat(l.split(" ")[0]);const e=l.split(" ")[1].split(":");p.hour=parseFloat(e[0]),p.minute=parseFloat(e[1])}break;case"second":if(i=new RegExp("^[0-9]{1,} [0-9]{1,2}:[0-9]{1,2}:[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$"),!i.test(l))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.IllegalInterval);{p[o.start.period]=parseFloat(l.split(" ")[0]);const e=l.split(" ")[1].split(":");p.hour=parseFloat(e[0]),p.minute=parseFloat(e[1]),s(p,e[2])}break;default:throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.IllegalInterval)}break;case"hour":switch(o.end.period){case"minute":if(i=new RegExp("^[0-9]{1,}:[0-9]{1,}$"),!i.test(l))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.IllegalInterval);p.hour=parseFloat(l.split(":")[0]),p.minute=parseFloat(l.split(":")[1]);break;case"second":if(i=new RegExp("^[0-9]{1,}:[0-9]{1,2}:[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$"),!i.test(l))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.IllegalInterval);{const e=l.split(":");p.hour=parseFloat(e[0]),p.minute=parseFloat(e[1]),s(p,e[2])}break;default:throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.IllegalInterval)}break;case"minute":if("second"!==o.end.period)throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.IllegalInterval);if(i=new RegExp("^[0-9]{1,}:[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$"),!i.test(l))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.IllegalInterval);{const e=l.split(":");p.minute=parseFloat(e[0]),s(p,e[1])}break;default:throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.IllegalInterval)}}return p}valueInMilliseconds(){return("-"===this.op?-1:1)*(this.millis+1e3*this.second+60*this.minute*1e3+60*this.hour*60*1e3+24*this.day*60*60*1e3+this.month*(365/12)*24*60*60*1e3+365*this.year*24*60*60*1e3)}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/sql/SqlTimestampOffset.js
var SqlTimestampOffset = __webpack_require__(64473);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/sql/TimeOnly.js
var TimeOnly = __webpack_require__(40845);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/sql/UnknownTimeZone.js
var UnknownTimeZone = __webpack_require__(90709);
// EXTERNAL MODULE: ../node_modules/luxon/src/luxon.js + 23 modules
var luxon = __webpack_require__(34495);
;// ../node_modules/@arcgis/core/core/sql/sqlDateParsingUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const d=/^(\d{1,2}):(\d{1,2}):(\d{1,2})$/,m=/^(\d{1,2}):(\d{1,2})$/,I=/^(\d{1,2}):(\d{1,2}):(\d{1,2}).([0-9]+)$/,f=/^(\d{4})-(\d{1,2})-(\d{1,2})$/,u=/^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?$/,c=/^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?[ ]{0,1}(\+|-)(\d{1,2}):(\d{1,2})$/,w=/^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})?[ ]{0,1}(\+|-)(\d{1,2}):(\d{1,2})$/,h=/^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})$/;function T(n,e){if(e instanceof luxon/* Zone */.bo)return e===UnknownTimeZone/* UnknownTimeZone */.GB.instance?luxon/* DateTime */.c9.fromMillis(n.getTime(),{zone:UnknownTimeZone/* UnknownTimeZone */.GB.instance}):luxon/* DateTime */.c9.fromJSDate(n,{zone:e});switch(e){case"system":case"local":case null:return luxon/* DateTime */.c9.fromJSDate(n);default:return"unknown"===e?.toLowerCase()?luxon/* DateTime */.c9.fromMillis(n.getTime(),{zone:UnknownTimeZone/* UnknownTimeZone */.GB.instance}):luxon/* DateTime */.c9.fromJSDate(n,{zone:e})}}function v(n){return SqlInterval_a.isInterval(n)}function y(n){return luxon/* DateTime */.c9.isDateTime(n)}function S(e){return DateOnly/* DateOnly */.n.isDateOnly(e)}function x(n){return TimeOnly/* TimeOnly */.k.isTimeOnly(n)}function j(n){return SqlTimestampOffset/* SqlTimeStampOffset */.g.isTimestampOffset(n)}function O(n){let r=d.exec(n);if(null!==r){const[,n,a,i]=r,o=TimeOnly/* TimeOnly */.k.fromParts(parseInt(n,10),parseInt(a,10),parseInt(i,10),0);if(null!==o)return o;throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidTime)}if(r=m.exec(n),null!==r){const[,n,a]=r,i=TimeOnly/* TimeOnly */.k.fromParts(parseInt(n,10),parseInt(a,10),0,0);if(null!==i)return i;throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidTime)}if(r=I.exec(n),null!==r){const[,n,a,i,o]=r,l=TimeOnly/* TimeOnly */.k.fromParts(parseInt(n,10),parseInt(a,10),parseInt(i,10),parseInt(o,10));if(null!==l)return l;throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidTime)}throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidTime)}function D(n,r,s=!1){let o=u.exec(n);if(null!==o){const[,n,a,s,p,d,m,I]=o,f=luxon/* DateTime */.c9.fromObject({year:parseInt(n,10),month:parseInt(a,10),day:parseInt(s,10),hour:parseInt(p,10),minute:parseInt(d,10),second:parseInt(m,10),millisecond:I?parseInt(I.replace(".",""),10):0},{zone:(0,UnknownTimeZone/* substituteUnknownTimezone */.Qo)(r)});if(!1===f.isValid)throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidTimeStamp);return f}if(o=c.exec(n),null!==o){const[,n,r,s,i,l,p,d,m,I,f]=o,u=SqlTimestampOffset/* SqlTimeStampOffset */.g.fromParts(parseInt(n,10),parseInt(r,10),parseInt(s,10),parseInt(i,10),parseInt(l,10),parseInt(p,10),d?parseInt(d.replace(".",""),10):0,"-"===m,parseInt(I,10),parseInt(f,10));if(!1===u.isValid)throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidTimeStamp);return u}if(o=w.exec(n),null!==o){const[,n,r,s,i,l,p,d,m]=o,I=SqlTimestampOffset/* SqlTimeStampOffset */.g.fromParts(parseInt(n,10),parseInt(r,10),parseInt(s,10),parseInt(i,10),parseInt(l,10),0,0,"-"===p,parseInt(d,10),parseInt(m,10));if(!1===I.isValid)throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidTimeStamp);return I}if(o=h.exec(n),null!==o){const[,n,a,s,p,d]=o,m=luxon/* DateTime */.c9.fromObject({year:parseInt(n,10),month:parseInt(a,10),day:parseInt(s,10),hour:parseInt(p,10),minute:parseInt(d,10),second:0},{zone:(0,UnknownTimeZone/* substituteUnknownTimezone */.Qo)(r)});if(!1===m.isValid)throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidTimeStamp);return m}if(o=f.exec(n),null!==o){const[,n,a,s]=o,p=luxon/* DateTime */.c9.fromObject({year:parseInt(n,10),month:parseInt(a,10),day:parseInt(s,10),hour:0,minute:0,second:0},{zone:(0,UnknownTimeZone/* substituteUnknownTimezone */.Qo)(r)});if(!1===p.isValid)throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidTimeStamp);return p}throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidTimeStamp)}function $(r,a){const s=f.exec(r);if(null===s)try{return D(r,a)}catch{throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidDate)}const[,i,o,l]=s,p=DateOnly/* DateOnly */.n.fromParts(parseInt(i,10),parseInt(o,10),parseInt(l,10));if(null===p)throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidDate);return p}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(92504);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/string.js
var string = __webpack_require__(96274);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/guards.js
var guards = __webpack_require__(8701);
;// ../node_modules/@arcgis/core/core/sql/sqlCompareUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const sqlCompareUtils_l=321408e5,sqlCompareUtils_w=26784e5,sqlCompareUtils_m=864e5,p=36e5,sqlCompareUtils_d=6e4;function sqlCompareUtils_h(r){return!!y(r)||!!j(r)}function sqlCompareUtils_O(r){return!!y(r)||(!!S(r)||(!!j(r)||!!x(r)))}function sqlCompareUtils_v(i){if(y(i))return i.toMillis();if(S(i))return i.toNumber();if(j(i))return i.toMilliseconds();throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidDataType)}function sqlCompareUtils_I(l,w,m){if(null==l||null==w)return null;if((0,guards/* isNumber */.Et)(l)){if((0,guards/* isNumber */.Et)(w))return sqlCompareUtils_T(l,w,m);if((0,guards/* isString */.Kg)(w))return sqlCompareUtils_D(l,w,m);if(sqlCompareUtils_O(w))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator);if(S(w))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}else if((0,guards/* isString */.Kg)(l)){if((0,guards/* isNumber */.Et)(w))return M(l,w,m);if((0,guards/* isString */.Kg)(w))return z(l,w,m);if(y(w))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator);if(S(w))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator);if(x(w))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator);if(j(w))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}else if(y(l)){if(sqlCompareUtils_h(w)){if((0,UnknownTimeZone/* isUnknownTimeZone */.Y4)(l.zone)){if(luxon/* DateTime */.c9.isDateTime(w)&&!(0,UnknownTimeZone/* isUnknownTimeZone */.Y4)(w.zone))return sqlCompareUtils_j(l,w,m);if(SqlTimestampOffset/* SqlTimeStampOffset */.g.isTimestampOffset(w))return sqlCompareUtils_j(l,w,m)}else if(luxon/* DateTime */.c9.isDateTime(w)&&(0,UnknownTimeZone/* isUnknownTimeZone */.Y4)(w.zone)){if(!(0,UnknownTimeZone/* isUnknownTimeZone */.Y4)(l.zone))return sqlCompareUtils_j(l,w,m);if(SqlTimestampOffset/* SqlTimeStampOffset */.g.isTimestampOffset(l))return sqlCompareUtils_j(l,w,m)}return sqlCompareUtils_T(sqlCompareUtils_v(l),sqlCompareUtils_v(w),m)}if((0,guards/* isString */.Kg)(w))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator);if(S(w))return N(l,w,m);if(x(w))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator);if((0,guards/* isNumber */.Et)(w))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}else if(S(l)){if(j(w))return b(l,w,m);if(y(w))return sqlCompareUtils_x(l,w,m);if((0,guards/* isString */.Kg)(w))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator);if(S(w))return sqlCompareUtils_T(l.toNumber(),w.toNumber(),m);if(x(w))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator);if((0,guards/* isNumber */.Et)(w))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}else if(x(l)){if(x(w))return sqlCompareUtils_T(l.toNumber(),w.toNumber(),m);if((0,guards/* isString */.Kg)(w))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator);if((0,guards/* isNumber */.Et)(w))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator);if(S(w))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator);if(sqlCompareUtils_h(w))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}else if(j(l)){if(sqlCompareUtils_h(w))return luxon/* DateTime */.c9.isDateTime(w)&&(0,UnknownTimeZone/* isUnknownTimeZone */.Y4)(w.zone)?sqlCompareUtils_j(l,w,m):sqlCompareUtils_T(sqlCompareUtils_v(l),sqlCompareUtils_v(w),m);if((0,guards/* isString */.Kg)(w))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator);if(S(w))return sqlCompareUtils_y(l,w,m);if(x(w))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator);if((0,guards/* isNumber */.Et)(w))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}switch(m){case"<>":return l!==w;case"=":return l===w;case">":return l>w;case"<":return l<w;case">=":return l>=w;case"<=":return l<=w}}function sqlCompareUtils_T(r,e,t){switch(t){case"<>":return r!==e;case"=":return r===e;case">":return r>e;case"<":return r<e;case">=":return r>=e;case"<=":return r<=e}}function sqlCompareUtils_D(r,e,t){const n=parseFloat(e);if(!isNaN(n))return sqlCompareUtils_T(r,n,t);const i=r.toString();switch(t){case"<>":return i!==e;case"=":return i===e;case">":return i>e;case"<":return i<e;case">=":return i>=e;case"<=":return i<=e}}function M(r,e,t){const n=parseFloat(r);if(!isNaN(n))return sqlCompareUtils_T(n,e,t);const i=e.toString();switch(t){case"<>":return r!==i;case"=":return r===i;case">":return r>i;case"<":return r<i;case">=":return r>=i;case"<=":return r<=i}}function z(r,e,t){switch(t){case"<>":return r!==e;case"=":return r===e;case">":return r>e;case"<":return r<e;case">=":return r>=e;case"<=":return r<=e}}function N(r,e,t){const n=e.toDateTimeLuxon(r.zone);return sqlCompareUtils_T((r=r.startOf("day")).toMillis(),n.toMillis(),t)}function sqlCompareUtils_y(r,e,t){const n=e.toDateTimeLuxon(r.toDateTime().zone);return sqlCompareUtils_T((r=r.startOfDay()).toMilliseconds(),n.toMillis(),t)}function sqlCompareUtils_x(r,e,t){const n=r.toDateTimeLuxon(e.zone);return e=e.startOf("day"),sqlCompareUtils_T(n.toMillis(),e.toMillis(),t)}function b(r,e,t){const n=r.toDateTimeLuxon(e.toDateTime().zone);return e=e.startOfDay(),sqlCompareUtils_T(n.toMillis(),e.toMilliseconds(),t)}function sqlCompareUtils_j(r,e,t){SqlTimestampOffset/* SqlTimeStampOffset */.g.isTimestampOffset(r)&&(r=r.toDateTime()),SqlTimestampOffset/* SqlTimeStampOffset */.g.isTimestampOffset(e)&&(e=e.toDateTime());const n=g(r),i=g(e);switch(t){case"<>":return n!==i;case"=":return n===i;case">":return n>i;case"<":return n<i;case">=":return n>=i;case"<=":return n<=i}}function g(r){return r.year*sqlCompareUtils_l+r.month*sqlCompareUtils_w+r.day*sqlCompareUtils_m+r.hour*p+r.minute*sqlCompareUtils_d+1e3*r.second+r.millisecond}

;// ../node_modules/@arcgis/core/core/sql/StandardizedFunctions.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function StandardizedFunctions_E(a,e,n){const l=StandardizedFunctions_v[a.toLowerCase()];if(null==l)throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.FunctionNotRecognized);if(e.length<l.minParams||e.length>l.maxParams)throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidParameterCount,{name:a.toUpperCase()});return l.evaluate(e,n)}function StandardizedFunctions_p(a,e){const n=StandardizedFunctions_v[a.toLowerCase()];return null!=n&&e>=n.minParams&&e<=n.maxParams}function StandardizedFunctions_g(a){return!(0,guards/* isDate */.$P)(a)&&(!S(a)&&(!y(a)&&(!x(a)&&!j(a))))}function StandardizedFunctions_M(a){return S(a)||x(a)?a.toString():j(a)?a.toSQLValue():y(a)?0===a.millisecond?a.toFormat("yyyy-LL-dd HH:mm:ss"):a.toSQL({includeOffset:!1}):(0,guards/* isDate */.$P)(a)?StandardizedFunctions_M(luxon/* DateTime */.c9.fromJSDate(a)):a.toString()}function StandardizedFunctions_O(a){if((0,guards/* isDate */.$P)(a))return DateOnly/* DateOnly */.n.fromDateJS(a);if(y(a))return DateOnly/* DateOnly */.n.fromParts(a.year,a.month,a.day);if(S(a))return a;if(x(a))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.CannotCastValue);if(j(a)){if(null===DateOnly/* DateOnly */.n.fromParts(a.year,a.month,a.day))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.CannotCastValue)}if((0,guards/* isString */.Kg)(a)){const e=DateOnly/* DateOnly */.n.fromReader(a);if(null!==e&&e.isValid)return e}throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.CannotCastValue)}function StandardizedFunctions_x(a,e,n){if((0,guards/* isDate */.$P)(a))return T(a,e);if(y(a))return a;if(S(a))return a.toDateTimeLuxon("unknown");if(x(a))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.CannotCastValue);if(j(a))return a;if((0,guards/* isString */.Kg)(a))return D(a,"unknown",n);throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.CannotCastValue)}function StandardizedFunctions_T(a){if((0,guards/* isDate */.$P)(a))return TimeOnly/* TimeOnly */.k.fromDateJS(a);if(y(a))return TimeOnly/* TimeOnly */.k.fromDateTime(a);if(S(a))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.CannotCastValue);if(x(a))return a;if(j(a))return TimeOnly/* TimeOnly */.k.fromSqlTimeStampOffset(a);if((0,guards/* isString */.Kg)(a))return O(a);throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.CannotCastValue)}const StandardizedFunctions_v={extract:{minParams:2,maxParams:2,evaluate:([a,e])=>{if(null==e)return null;if((0,guards/* isDate */.$P)(e))switch(a.toUpperCase()){case"SECOND":return e.getSeconds();case"MINUTE":return e.getMinutes();case"HOUR":return e.getHours();case"DAY":return e.getDate();case"MONTH":return e.getMonth()+1;case"YEAR":return e.getFullYear();case"TIMEZONE_HOUR":case"TIMEZONE_MINUTE":return 0;case"DOW":return luxon/* DateTime */.c9.fromJSDate(e,{zone:"system"}).weekday;case"DOY":return luxon/* DateTime */.c9.fromJSDate(e,{zone:"system"}).ordinal;case"WEEK":return luxon/* DateTime */.c9.fromJSDate(e,{zone:"system"}).weekNumber}else if(y(e))switch(a.toUpperCase()){case"SECOND":return e.second;case"MINUTE":return e.minute;case"HOUR":return e.hour;case"DAY":return e.day;case"MONTH":return e.month;case"YEAR":return e.year;case"TIMEZONE_HOUR":case"TIMEZONE_MINUTE":throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidFunctionParameters,{function:"EXTRACT"});case"DOW":return e.weekday;case"DOY":return e.ordinal;case"WEEK":return e.weekNumber}else if(S(e))switch(a.toUpperCase()){case"DAY":return e.day;case"MONTH":return e.month;case"YEAR":return e.year;case"TIMEZONE_HOUR":case"TIMEZONE_MINUTE":throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidFunctionParameters,{function:"EXTRACT"});case"DOW":return e.toDateTime("unknown").weekday;case"DOY":return e.toDateTime("unknown").ordinal;case"WEEK":return e.toDateTime("unknown").weekNumber}else if(x(e))switch(a.toUpperCase()){case"SECOND":return e.second;case"MINUTE":return e.minute;case"HOUR":return e.hour}else if(j(e))switch(a.toUpperCase()){case"SECOND":return e.second;case"MINUTE":return e.minute;case"HOUR":return e.hour;case"DAY":return e.day;case"MONTH":return e.month;case"YEAR":return e.year;case"TIMEZONE_HOUR":return e.timezoneOffsetHour;case"TIMEZONE_MINUTE":return e.timezoneOffsetMinutes;case"DOW":return e.toDateTime().weekday;case"DOY":return e.toDateTime().ordinal;case"WEEK":return e.toDateTime().weekNumber}throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidFunctionParameters,{function:"EXTRACT"})}},substring:{minParams:2,maxParams:3,evaluate:a=>{if(2===a.length){const[e,n]=a;return null==e||null==n?null:e.toString().substring(n-1)}if(3===a.length){const[e,n,t]=a;return null==e||null==n||null==t?null:t<=0?"":e.toString().substring(n-1,n+t-1)}}},position:{minParams:2,maxParams:2,evaluate:([a,e])=>null==a||null==e?null:e.indexOf(a)+1},trim:{minParams:2,maxParams:3,evaluate:a=>{const n=3===a.length,l=n?a[1]:" ",u=n?a[2]:a[1];if(null==l||null==u)return null;const s=`(${(0,string/* escapeRegExpString */.Cj)(l)})`;switch(a[0]){case"BOTH":return u.replaceAll(new RegExp(`^${s}*|${s}*$`,"g"),"");case"LEADING":return u.replaceAll(new RegExp(`^${s}*`,"g"),"");case"TRAILING":return u.replaceAll(new RegExp(`${s}*$`,"g"),"")}throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidFunctionParameters,{function:"TRIM"})}},abs:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.abs(a[0])},ceiling:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.ceil(a[0])},floor:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.floor(a[0])},log:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.log(a[0])},log10:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.log(a[0])*Math.LOG10E},sin:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.sin(a[0])},cos:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.cos(a[0])},tan:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.tan(a[0])},asin:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.asin(a[0])},acos:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.acos(a[0])},atan:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.atan(a[0])},sign:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:a[0]>0?1:a[0]<0?-1:0},power:{minParams:2,maxParams:2,evaluate:a=>null==a[0]||null==a[1]?null:a[0]**a[1]},mod:{minParams:2,maxParams:2,evaluate:a=>null==a[0]||null==a[1]?null:a[0]%a[1]},round:{minParams:1,maxParams:2,evaluate:a=>{const e=a[0],n=2===a.length?10**a[1]:1;return null==e?null:Math.round(e*n)/n}},truncate:{minParams:1,maxParams:2,evaluate:e=>null==e[0]?null:1===e.length||0===e[1]?Math.trunc(e[0]):(0,mathUtils/* decimalAdjust */.pF)("trunc",e[0],-Number(e[1]))},char_length:{minParams:1,maxParams:1,evaluate:a=>(0,guards/* isString */.Kg)(a[0])?a[0].length:0},concat:{minParams:1,maxParams:1/0,evaluate:a=>{let e="";for(let n=0;n<a.length;n++){if(null==a[n])return null;e+=a[n].toString()}return e}},lower:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:a[0].toString().toLowerCase()},upper:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:a[0].toString().toUpperCase()},coalesce:{minParams:1,maxParams:1/0,evaluate:a=>{for(const e of a)if(null!==e)return e;return null}},cosh:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.cosh(a[0])},sinh:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.sinh(a[0])},tanh:{minParams:1,maxParams:1,evaluate:a=>null==a[0]?null:Math.tanh(a[0])},nullif:{minParams:2,maxParams:2,evaluate:a=>sqlCompareUtils_I(a[0],a[1],"=")?null:a[0]},cast:{minParams:2,maxParams:2,evaluate:(a,e)=>{const n=a[0],l=a[1];if(null===n)return null;switch(l.type){case"integer":{if(!StandardizedFunctions_g(n))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.CannotCastValue);const a=parseInt(n,10);if(isNaN(a))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.CannotCastValue);return a}case"smallint":{if(!StandardizedFunctions_g(n))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.CannotCastValue);const a=parseInt(n,10);if(isNaN(a))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.CannotCastValue);if(a>32767||a<-32767)throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.CannotCastValue);return a}case"float":case"real":{if(!StandardizedFunctions_g(n))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.CannotCastValue);const a=parseFloat(n);if(isNaN(a))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.CannotCastValue);return a}case"time":return StandardizedFunctions_T(n);case"date":return StandardizedFunctions_O(n);case"timestamp":return StandardizedFunctions_x(n,e,!0===l.withtimezone);case"varchar":{const a=StandardizedFunctions_M(n);if(a.length>l.size)throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.CannotCastValue);return a}default:throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidDataType)}}}};

;// ../node_modules/@arcgis/core/core/sql/sqlArithmeticUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function sqlArithmeticUtils_d(l,d,sn,un){if("||"===l)return StandardizedFunctions_E("concat",[d,sn],un);if(null===d||null===sn)return null;if((0,guards/* isNumber */.Et)(d)){if((0,guards/* isNumber */.Et)(sn))return sqlArithmeticUtils_f(d,sn,l);if(v(sn))return sqlArithmeticUtils_M(d,sn,l);if(x(sn))return sqlArithmeticUtils_S();if(S(sn))return U();if(j(sn))return sqlArithmeticUtils_N();if(y(sn))return sqlArithmeticUtils_j();if((0,guards/* isString */.Kg)(sn))return sqlArithmeticUtils_g(d,sn,l);throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}if(S(d)){if((0,guards/* isNumber */.Et)(sn))return sqlArithmeticUtils_x(d,sn,l);if(v(sn))return sqlArithmeticUtils_T(d,sn,l);if(x(sn))return E();if(S(sn))return B(d,sn,l);if(j(sn))return A(d,sn,l);if(y(sn))return k(d,sn,l);if((0,guards/* isString */.Kg)(sn))return _();throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}if(x(d)){if((0,guards/* isNumber */.Et)(sn))return L(d,sn,l);if(v(sn))return sqlArithmeticUtils_p(d,sn,l);if(x(sn))return W();if(S(sn))return R();if(j(sn))return V();if(y(sn))return Q();if((0,guards/* isString */.Kg)(sn))return nn();throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}if(v(d)){if((0,guards/* isNumber */.Et)(sn))return sqlArithmeticUtils_m(d,sn,l);if(v(sn))return sqlArithmeticUtils_O(d,sn,l);if(x(sn))return sqlArithmeticUtils_v(d,sn,l);if(S(sn))return sqlArithmeticUtils_I(d,sn,l);if(j(sn))return sqlArithmeticUtils_h(d,sn,l);if(y(sn))return sqlArithmeticUtils_w(d,sn,l);if((0,guards/* isString */.Kg)(sn))return P();throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}if(y(d)){if((0,guards/* isNumber */.Et)(sn))return sqlArithmeticUtils_y(d,sn,l);if(v(sn))return sqlArithmeticUtils_D(d,sn,l);if(x(sn))return sqlArithmeticUtils_$();if(S(sn))return Y(d,sn,l);if(j(sn))return Z(d,sn,l);if(y(sn))return X(d,sn,l);if((0,guards/* isString */.Kg)(sn))return rn();throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}if(j(d)){if((0,guards/* isNumber */.Et)(sn))return sqlArithmeticUtils_z(d,sn,l);if(v(sn))return F(d,sn,l);if(x(sn))return G();if(S(sn))return H(d,sn,l);if(j(sn))return K(d,sn,l);if(y(sn))return J(d,sn,l);if((0,guards/* isString */.Kg)(sn))return en();throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}if((0,guards/* isString */.Kg)(d)){if((0,guards/* isNumber */.Et)(sn))return q(d,sn,l);if(v(sn))return sqlArithmeticUtils_b();if(x(sn))return tn();if(S(sn))return on();if(j(sn))return ln();if(y(sn))return an();if((0,guards/* isString */.Kg)(sn))return C(d,sn,l);throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_f(e,i,t){switch(t){case"+":return e+i;case"-":return e-i;case"*":return e*i;case"/":return e/i}throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_w(e,i,t){switch(t){case"+":return i.plus({milliseconds:e.valueInMilliseconds()});case"-":return e.valueInMilliseconds()-i.toMillis()}throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_v(e,i,t){if("+"===t)return i.plus("milliseconds",e.valueInMilliseconds());throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_I(e,i,t){if("+"===t)return i.plus("milliseconds",e.valueInMilliseconds());throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_p(e,i,t){switch(t){case"+":return e.plus("milliseconds",i.valueInMilliseconds());case"-":return e.plus("milliseconds",-1*i.valueInMilliseconds())}throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_h(e,i,t){if("+"===t)return i.addMilliseconds(e.valueInMilliseconds());throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_O(e,i,t){switch(t){case"+":return SqlInterval_a.createFromMilliseconds(e.valueInMilliseconds()+i.valueInMilliseconds());case"-":return SqlInterval_a.createFromMilliseconds(e.valueInMilliseconds()-i.valueInMilliseconds());case"*":return SqlInterval_a.createFromMilliseconds(e.valueInMilliseconds()*i.valueInMilliseconds());case"/":return SqlInterval_a.createFromMilliseconds(e.valueInMilliseconds()/i.valueInMilliseconds())}throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_m(e,i,t){switch(t){case"+":return SqlInterval_a.createFromMilliseconds(e.valueInMilliseconds()+i);case"-":return SqlInterval_a.createFromMilliseconds(e.valueInMilliseconds()-i);case"*":return SqlInterval_a.createFromMilliseconds(e.valueInMilliseconds()*i);case"/":return SqlInterval_a.createFromMilliseconds(e.valueInMilliseconds()/i)}throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_M(e,i,t){switch(t){case"+":return SqlInterval_a.createFromMilliseconds(e+i.valueInMilliseconds());case"-":return SqlInterval_a.createFromMilliseconds(e-i.valueInMilliseconds());case"*":return SqlInterval_a.createFromMilliseconds(e*i.valueInMilliseconds());case"/":return SqlInterval_a.createFromMilliseconds(e/i.valueInMilliseconds())}throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_T(e,i,t){switch(t){case"+":return e.plus("milliseconds",i.valueInMilliseconds());case"-":return e.plus("milliseconds",-1*i.valueInMilliseconds())}throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_D(e,i,t){switch(t){case"+":return e.plus({milliseconds:i.valueInMilliseconds()});case"-":return e.minus({milliseconds:i.valueInMilliseconds()})}throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function F(e,i,t){switch(t){case"+":return e.addMilliseconds(i.valueInMilliseconds());case"-":return e.addMilliseconds(-1*i.valueInMilliseconds())}throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_y(e,i,t){const o=1e3*i*24*60*60;switch(t){case"+":return e.plus({milliseconds:o});case"-":return e.minus({milliseconds:o})}throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_x(e,i,t){const o=1e3*i*24*60*60;switch(t){case"+":return e.plus("milliseconds",o);case"-":return e.plus("milliseconds",-1*o)}throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function L(e,i,t){const o=1e3*i*24*60*60;switch(t){case"+":return e.plus("milliseconds",o);case"-":return e.plus("milliseconds",-1*o)}throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_j(e,i,t){throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_z(e,i,t){const o=1e3*i*24*60*60;switch(t){case"+":return e.addMilliseconds(o);case"-":return e.addMilliseconds(-1*o)}throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_N(e,i,t){throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_S(e,i,t){throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function U(e,i,t){throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_g(e,i,t){const o=parseFloat(i);if(isNaN(o))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator);return sqlArithmeticUtils_f(e,o,t)}function q(e,i,t){const o=parseFloat(e);if(isNaN(o))throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator);return sqlArithmeticUtils_f(o,i,t)}function C(e,i,t){if("+"===t)return e+i;throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function P(e,i,t){throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_b(e,i,t){throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function k(e,i,t){if("-"===t)return e.toDateTimeLuxon(i.zone).diff(i).as("days");throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function A(e,i,t){if("-"===t)return e.toDateTimeLuxon(i.toDateTime().zone).diff(i.toDateTime()).as("days");throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function B(e,i,t){if("-"===t)return e.toDateTimeLuxon("UTC").diff(i.toDateTimeLuxon("UTC")).as("days");throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function E(e,i,t){throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function G(e,i,t){throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function H(e,i,t){if("-"===t)return e.toDateTime().diff(i.toDateTimeLuxon(e.toDateTime().zone)).as("days");throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function J(e,i,t){if("-"===t)return e.toDateTime().diff(i).as("days");throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function K(e,i,t){if("-"===t)return e.toDateTime().diff(i.toDateTime()).as("days");throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function Q(e,i,t){throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function R(e,i,t){throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function V(e,i,t){throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function W(e,i,t){throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function X(e,i,t){if("-"===t)return e.diff(i).as("days");throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function Y(e,i,t){if("-"===t)return e.diff(i.toDateTimeLuxon(e.zone)).as("days");throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function Z(e,i,t){if("-"===t)return e.diff(i.toDateTime()).as("days");throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function sqlArithmeticUtils_$(e,i,t){throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function _(e,i,t){throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function nn(e,i,t){throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function rn(e,i,t){throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function en(e,i,t){throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function tn(e,i,t){throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function on(e,i,t){throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function an(e,i,t){throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}function ln(e,i,t){throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.InvalidOperator)}

;// ../node_modules/@arcgis/core/core/sql/WhereGrammar.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class t extends SyntaxError{constructor(t,n,e,r){super(t),this.expected=n,this.found=e,this.location=r,this.name="SyntaxError"}format(t){let n="Error: "+this.message;if(this.location){let e=null;const r=t.find((t=>t.source===this.location.source));r&&(e=r.text.split(/\r\n|\n|\r/g));const o=this.location.start,u=this.location.source&&"function"==typeof this.location.source.offset?this.location.source.offset(o):o,i=this.location.source+":"+u.line+":"+u.column;if(e){const t=this.location.end,r="".padEnd(u.line.toString().length," "),c=e[o.line-1],l=(o.line===t.line?t.column:c.length+1)-o.column||1;n+="\n --\x3e "+i+"\n"+r+" |\n"+u.line+" | "+c+"\n"+r+" | "+"".padEnd(o.column-1," ")+"".padEnd(l,"^")}else n+="\n at "+i}return n}static buildMessage(t,n){function e(t){return t.codePointAt(0).toString(16).toUpperCase()}const r=Object.prototype.hasOwnProperty.call(RegExp.prototype,"unicode")?new RegExp("[\\p{C}\\p{Mn}\\p{Mc}]","gu"):null;function o(t){return r?t.replace(r,(t=>"\\u{"+e(t)+"}")):t}function u(t){return o(t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(t=>"\\x0"+e(t))).replace(/[\x10-\x1F\x7F-\x9F]/g,(t=>"\\x"+e(t))))}function i(t){return o(t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(t=>"\\x0"+e(t))).replace(/[\x10-\x1F\x7F-\x9F]/g,(t=>"\\x"+e(t))))}const c={literal:t=>'"'+u(t.text)+'"',class(t){const n=t.parts.map((t=>Array.isArray(t)?i(t[0])+"-"+i(t[1]):i(t)));return"["+(t.inverted?"^":"")+n.join("")+"]"+(t.unicode?"u":"")},any:()=>"any character",end:()=>"end of input",other:t=>t.description};function l(t){return c[t.type](t)}function s(t){const n=t.map(l);if(n.sort(),n.length>0){let t=1;for(let e=1;e<n.length;e++)n[e-1]!==n[e]&&(n[t]=n[e],t++);n.length=t}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}function a(t){return t?'"'+u(t)+'"':"end of input"}return"Expected "+s(t)+" but "+a(n)+" found."}}function n(n,e){const r={},o=(e=void 0!==e?e:{}).grammarSource,u={start:yu};let i=yu;const c="!",l="=",s=">=",a=">",f="<=",p="<>",d="!=",v="||",y="@",h="'",g="N'",E="''",C=".",m="null",A="true",b="false",L="in",w="is",T="like",x="escape",N="not",R="and",I="or",O="between",F="from",S="for",M="substring",$="extract",D="trim",U="position",_="timestamp",H="date",P="time",Z="leading",j="trailing",k="both",z="cast",G="as",W="integer",B="int",Y="smallint",q="float",K="real",V="varchar",X="to",J="interval",Q="year",tt="timezone_hour",nt="timezone_minute",et="month",rt="day",ot="hour",ut="minute",it="second",ct="dow",lt="doy",st="week",at="case",ft="end",pt="when",dt="then",vt="else",yt=",",ht="(",gt=")",Et="`",Ct=/^[<-=]/,mt=/^[+\-]/,At=/^[*\/]/,bt=/^[A-Za-z_\x80-\uFFFF]/,Lt=/^[A-Za-z0-9_]/,wt=/^[A-Za-z0-9_.\x80-\uFFFF]/,Tt=/^["]/,xt=/^[^']/,Nt=/^[0-9]/,Rt=/^[eE]/,It=/^[ \t\n\r]/,Ot=/^[^`]/,Ft=cu("!",!1),St=cu("=",!1),Mt=cu(">=",!1),$t=cu(">",!1),Dt=cu("<=",!1),Ut=cu("<>",!1),_t=lu([["<","="]],!1,!1,!1),Ht=cu("!=",!1),Pt=lu(["+","-"],!1,!1,!1),Zt=cu("||",!1),jt=lu(["*","/"],!1,!1,!1),kt=lu([["A","Z"],["a","z"],"_",["","￿"]],!1,!1,!1),zt=lu([["A","Z"],["a","z"],["0","9"],"_"],!1,!1,!1),Gt=lu([["A","Z"],["a","z"],["0","9"],"_",".",["","￿"]],!1,!1,!1),Wt=lu(['"'],!1,!1,!1),Bt=cu("@",!1),Yt=cu("'",!1),qt=cu("N'",!1),Kt=cu("''",!1),Vt=lu(["'"],!0,!1,!1),Xt=cu(".",!1),Jt=lu([["0","9"]],!1,!1,!1),Qt=lu(["e","E"],!1,!1,!1),tn=cu("NULL",!0),nn=cu("TRUE",!0),en=cu("FALSE",!0),rn=cu("IN",!0),on=cu("IS",!0),un=cu("LIKE",!0),cn=cu("ESCAPE",!0),ln=cu("NOT",!0),sn=cu("AND",!0),an=cu("OR",!0),fn=cu("BETWEEN",!0),pn=cu("FROM",!0),dn=cu("FOR",!0),vn=cu("SUBSTRING",!0),yn=cu("EXTRACT",!0),hn=cu("TRIM",!0),gn=cu("POSITION",!0),En=cu("TIMESTAMP",!0),Cn=cu("DATE",!0),mn=cu("TIME",!0),An=cu("LEADING",!0),bn=cu("TRAILING",!0),Ln=cu("BOTH",!0),wn=cu("CAST",!0),Tn=cu("AS",!0),xn=cu("INTEGER",!0),Nn=cu("INT",!0),Rn=cu("SMALLINT",!0),In=cu("FLOAT",!0),On=cu("REAL",!0),Fn=cu("VARCHAR",!0),Sn=cu("TO",!0),Mn=cu("INTERVAL",!0),$n=cu("YEAR",!0),Dn=cu("TIMEZONE_HOUR",!0),Un=cu("TIMEZONE_MINUTE",!0),_n=cu("MONTH",!0),Hn=cu("DAY",!0),Pn=cu("HOUR",!0),Zn=cu("MINUTE",!0),jn=cu("SECOND",!0),kn=cu("DOW",!0),zn=cu("DOY",!0),Gn=cu("WEEK",!0),Wn=cu("CASE",!0),Bn=cu("END",!0),Yn=cu("WHEN",!0),qn=cu("THEN",!0),Kn=cu("ELSE",!0),Vn=cu(",",!1),Xn=cu("(",!1),Jn=cu(")",!1),Qn=lu([" ","\t","\n","\r"],!1,!1,!1),te=cu("`",!1),ne=lu(["`"],!0,!1,!1);function ee(t){return t}function re(t){return{type:"expression-list",location:ou(),value:t}}function oe(t,n,e){return{op:n,expr:e,location:ou()}}function ue(t,n){return Hc(t,n)}function ie(t,n,e){return{op:n,expr:e,location:ou()}}function ce(t,n){return Hc(t,n)}function le(t){return Dc("NOT",t,ou())}function se(t,n){if(""==n||null==n||null==n)return t;return"arithmetic"==n.type?Hc(t,n.tail):Uc(n.op,t,n.right,n.escape,ou())}function ae(t,n){return{op:t,expr:n,location:ou()}}function fe(t){return{type:"arithmetic",tail:t}}function pe(t,n){return{op:t+"NOT",right:n}}function de(t,n){return{op:t,right:n}}function ve(t,n,e){return _c(ou(),n,e)}function ye(t,n){return{op:"NOT"+t,right:n}}function he(t,n,e){return _c(ou(),n,e)}function ge(t,n){return{op:t,right:n}}function Ee(t){return t[0]+" "+t[2]}function Ce(t){return t[0]+" "+t[2]}function me(t,n,e){return{op:t,right:n,escape:e.value}}function Ae(t,n){return{op:t,right:n,escape:""}}function be(t,n){return{op:t,right:n}}function Le(t,n){return{op:t,right:n}}function we(t,n,e){return{op:n,expr:e,location:ou()}}function Te(t,n){return Hc(t,n)}function xe(t,n,e){return{op:n,expr:e,location:ou()}}function Ne(t,n){return Hc(t,n)}function Re(t){return t.paren=!0,t}function Ie(t){return/^CURRENT_DATE$/i.test(t)?{type:"current-time",location:ou(),mode:"date"}:/^CURRENT_TIMESTAMP$/i.test(t)?{type:"current-time",location:ou(),mode:"timestamp"}:/^CURRENT_TIME$/i.test(t)?{type:"current-time",location:ou(),mode:"time"}:/^CURRENT_USER$/i.test(t)?{type:"current-user",location:ou()}:{type:"column-reference",location:ou(),table:"",column:t}}function Oe(t){return{type:"column-reference",location:ou(),table:"",column:t,delimited:!0}}function Fe(t){return t}function Se(t,n){return t+n.join("")}function Me(t,n){return t+n.join("")}function $e(t){return t}function De(t){return t.join("")}function Ue(){return'"'}function _e(t){return{type:"parameter",location:ou(),value:t[1]}}function He(t,n){return _c(ou(),t,n)}function Pe(t,n){return _c(ou(),t,n)}function Ze(t){return{type:"function",location:ou(),name:"extract",args:t}}function je(t,n,e){return _c(ou(),t,n,...e?[e]:[])}function ke(t,n,e){return _c(ou(),t,n,e)}function ze(t){return{type:"function",location:ou(),name:"substring",args:t}}function Ge(t,n){return _c(ou(),t,n)}function We(t,n){return _c(ou(),t,n)}function Be(t){return{type:"function",location:ou(),name:"cast",args:t}}function Ye(){return{type:"data-type",location:ou(),value:{type:"integer"}}}function qe(){return{type:"data-type",location:ou(),value:{type:"smallint"}}}function Ke(){return{type:"data-type",location:ou(),value:{type:"float"}}}function Ve(){return{type:"data-type",location:ou(),value:{type:"real"}}}function Xe(){return{type:"data-type",location:ou(),value:{type:"date"}}}function Je(){return{type:"data-type",location:ou(),value:{type:"timestamp"}}}function Qe(){return{type:"data-type",location:ou(),value:{type:"time"}}}function tr(t){return{type:"data-type",location:ou(),value:{type:"varchar",size:parseInt(t)}}}function nr(t,n,e){return _c(ou(),t,n,e)}function er(t,n){return _c(ou(),t,n)}function rr(t){return{type:"function",location:ou(),name:"trim",args:t}}function or(t){return{type:"string",location:ou(),value:t??"BOTH"}}function ur(t,n){return _c(ou(),t,n)}function ir(t,n){return _c(ou(),t,n)}function cr(t){return{type:"function",location:ou(),name:"position",args:t}}function lr(t,n){return{type:"function",location:ou(),name:t,args:n}}function sr(t){return{type:"string",location:ou(),value:t}}function ar(t){return"string"===t.type&&Pc(t.value),{type:"timestamp",location:ou(),value:t.value}}function fr(t){return"string"===t.type&&Zc(t.value),{type:"time",location:ou(),value:t.value}}function pr(t,n,e){return{type:"interval",location:ou(),value:n,qualifier:e,op:t}}function dr(t,n){return{type:"interval",location:ou(),value:t,qualifier:n,op:""}}function vr(t,n){return{type:"interval-qualifier",location:ou(),start:t,end:n}}function yr(t,n){return{type:"interval-period",location:ou(),period:t.value,precision:n,secondary:null}}function hr(t){return{type:"interval-period",location:ou(),period:t.value,precision:null,secondary:null}}function gr(t){return{type:"interval-period",location:ou(),period:t.value,precision:null,secondary:null}}function Er(t,n){return{type:"interval-period",location:ou(),period:"second",precision:t,secondary:n}}function Cr(t){return{type:"interval-period",location:ou(),period:"second",precision:t,secondary:null}}function mr(){return{type:"interval-period",location:ou(),period:"second",precision:null,secondary:null}}function Ar(t,n){return{type:"interval-period",location:ou(),period:t.value,precision:n,secondary:null}}function br(t){return{type:"interval-period",location:ou(),period:t.value,precision:null,secondary:null}}function Lr(t,n){return{type:"interval-period",location:ou(),period:"second",precision:t,secondary:n}}function wr(t){return{type:"interval-period",location:ou(),period:"second",precision:t,secondary:null}}function Tr(){return{type:"interval-period",location:ou(),period:"second",precision:null,secondary:null}}function xr(){return{type:"string",location:ou(),value:"day"}}function Nr(){return{type:"string",location:ou(),value:"hour"}}function Rr(){return{type:"string",location:ou(),value:"minute"}}function Ir(){return{type:"string",location:ou(),value:"month"}}function Or(){return{type:"string",location:ou(),value:"year"}}function Fr(t){return parseFloat(t)}function Sr(t){return parseFloat(t)}function Mr(t){return"string"===t.type&&jc(t.value),{type:"date",location:ou(),value:t.value}}function $r(){return{type:"null",location:ou(),value:null}}function Dr(){return{type:"boolean",location:ou(),value:!0}}function Ur(){return{type:"boolean",location:ou(),value:!1}}function _r(){return"'"}function Hr(t){return{type:"string",location:ou(),value:t.join("")}}function Pr(t,n){return{type:"case-expression",location:ou(),format:"simple",operand:t,clauses:n,else:null,elseLocation:null}}function Zr(t,n,e){return{type:"case-expression",location:ou(),format:"simple",operand:t,clauses:n,else:e.value,elseLocation:e.location}}function jr(t){return{type:"case-expression",location:ou(),format:"searched",clauses:t,else:null,elseLocation:null}}function kr(t,n){return{type:"case-expression",location:ou(),format:"searched",clauses:t,else:n.value,elseLocation:n.location}}function zr(t,n){return{type:"when-clause",location:ou(),operand:t,value:n}}function Gr(t,n){return{type:"when-clause",location:ou(),operand:t,value:n}}function Wr(t){return{type:"else-clause",location:ou(),value:t}}function Br(t){return{type:"number",location:ou(),value:t}}function Yr(t,n,e){return parseFloat(t+n+e)}function qr(t,n){return parseFloat(t+n)}function Kr(t,n){return parseFloat(t+n)}function Vr(t){return parseFloat(t)}function Xr(t,n){return t[0]+n}function Jr(t){return"."+(null!=t?t:"")}function Qr(t,n){return t+n}function to(t){return t.join("")}function no(t,n){return"e"+(null===n?"":n)}function eo(){return"IN"}function ro(){return"IS"}function oo(){return"LIKE"}function uo(){return"ESCAPE"}function io(){return"NOT"}function co(){return"AND"}function lo(){return"OR"}function so(){return"BETWEEN"}function ao(){return"FROM"}function fo(){return"FOR"}function po(){return"SUBSTRING"}function vo(){return"EXTRACT"}function yo(){return"TRIM"}function ho(){return"POSITION"}function go(){return"TIMESTAMP"}function Eo(){return"DATE"}function Co(){return"TIME"}function mo(){return"LEADING"}function Ao(){return"TRAILING"}function bo(){return"BOTH"}function Lo(){return"CAST"}function wo(){return"AS"}function To(){return"INTEGER"}function xo(){return"INT"}function No(){return"SMALLINT"}function Ro(){return"FLOAT"}function Io(){return"REAL"}function Oo(){return"VARCHAR"}function Fo(){return"TO"}function So(){return"INTERVAL"}function Mo(){return"YEAR"}function $o(){return"TIMEZONE_HOUR"}function Do(){return"TIMEZONE_MINUTE"}function Uo(){return"MONTH"}function _o(){return"DAY"}function Ho(){return"HOUR"}function Po(){return"MINUTE"}function Zo(){return"SECOND"}function jo(){return"DOW"}function ko(){return"DOY"}function zo(){return"WEEK"}function Go(){return"CASE"}function Wo(){return"END"}function Bo(){return"WHEN"}function Yo(){return"THEN"}function qo(){return"ELSE"}function Ko(t){return t}function Vo(t){return t.join("")}let Xo=0|e.peg$currPos,Jo=Xo;const Qo=[{line:1,column:1}];let tu,nu=Xo,eu=e.peg$maxFailExpected||[],ru=0|e.peg$silentFails;if(e.startRule){if(!(e.startRule in u))throw new Error("Can't start parsing from rule \""+e.startRule+'".');i=u[e.startRule]}function ou(){return fu(Jo,Xo)}function uu(t,n){throw du(t,n=void 0!==n?n:fu(Jo,Xo))}function iu(t=Xo){const e=n.codePointAt(t);return void 0===e?"":String.fromCodePoint(e)}function cu(t,n){return{type:"literal",text:t,ignoreCase:n}}function lu(t,n,e,r){return{type:"class",parts:t,inverted:n,ignoreCase:e,unicode:r}}function su(){return{type:"end"}}function au(t){let e,r=Qo[t];if(r)return r;if(t>=Qo.length)e=Qo.length-1;else for(e=t;!Qo[--e];);for(r=Qo[e],r={line:r.line,column:r.column};e<t;)10===n.charCodeAt(e)?(r.line++,r.column=1):r.column++,e++;return Qo[t]=r,r}function fu(t,n,e){const r=au(t),u=au(n);return{source:o,start:{offset:t,line:r.line,column:r.column},end:{offset:n,line:u.line,column:u.column}}}function pu(t){Xo<nu||(Xo>nu&&(nu=Xo,eu=[]),eu.push(t))}function du(n,e){return new t(n,null,null,e)}function vu(n,e,r){return new t(t.buildMessage(n,e),n,e,r)}function yu(){let t,n;return t=Xo,Sc(),n=gu(),n!==r?(Sc(),Jo=t,t=ee(n)):(Xo=t,t=r),t}function hu(){let t,n,e,o,u,i,c,l;if(t=Xo,n=Oc(),n!==r){for(Sc(),e=[],o=gu();o!==r;)e.push(o),o=Xo,u=Xo,i=Sc(),c=Ic(),c!==r?(l=Sc(),i=[i,c,l],u=i):(Xo=u,u=r),u!==r?(u=gu(),u===r?(Xo=o,o=r):o=u):o=u;o=Sc(),u=Fc(),u!==r?(Jo=t,t=re(e)):(Xo=t,t=r)}else Xo=t,t=r;return t}function gu(){let t,n,e,o,u,i;if(t=Xo,n=Eu(),n!==r){for(e=[],o=Xo,Sc(),u=zi(),u!==r?(Sc(),i=Eu(),i!==r?(Jo=o,o=oe(n,u,i)):(Xo=o,o=r)):(Xo=o,o=r);o!==r;)e.push(o),o=Xo,Sc(),u=zi(),u!==r?(Sc(),i=Eu(),i!==r?(Jo=o,o=oe(n,u,i)):(Xo=o,o=r)):(Xo=o,o=r);Jo=t,t=ue(n,e)}else Xo=t,t=r;return t}function Eu(){let t,n,e,o,u,i;if(t=Xo,n=Cu(),n!==r){for(e=[],o=Xo,Sc(),u=ki(),u!==r?(Sc(),i=Cu(),i!==r?(Jo=o,o=ie(n,u,i)):(Xo=o,o=r)):(Xo=o,o=r);o!==r;)e.push(o),o=Xo,Sc(),u=ki(),u!==r?(Sc(),i=Cu(),i!==r?(Jo=o,o=ie(n,u,i)):(Xo=o,o=r)):(Xo=o,o=r);Jo=t,t=ce(n,e)}else Xo=t,t=r;return t}function Cu(){let t,e,o,u,i;return t=Xo,e=ji(),e===r&&(e=Xo,33===n.charCodeAt(Xo)?(o=c,Xo++):(o=r,0===ru&&pu(Ft)),o!==r?(u=Xo,ru++,61===n.charCodeAt(Xo)?(i=l,Xo++):(i=r,0===ru&&pu(St)),ru--,i===r?u=void 0:(Xo=u,u=r),u!==r?(o=[o,u],e=o):(Xo=e,e=r)):(Xo=e,e=r)),e!==r?(o=Sc(),u=Cu(),u!==r?(Jo=t,t=le(u)):(Xo=t,t=r)):(Xo=t,t=r),t===r&&(t=mu()),t}function mu(){let t,n,e,o;return t=Xo,n=Ou(),n!==r?(e=Xo,Sc(),o=Au(),o!==r?e=o:(Xo=e,e=r),e===r&&(e=null),Jo=t,t=se(n,e)):(Xo=t,t=r),t}function Au(){let t;return t=bu(),t===r&&(t=Iu(),t===r&&(t=Tu(),t===r&&(t=wu(),t===r&&(t=Ru())))),t}function bu(){let t,n,e,o,u;if(t=Xo,n=[],e=Xo,Sc(),o=Lu(),o!==r?(Sc(),u=Ou(),u!==r?(Jo=e,e=ae(o,u)):(Xo=e,e=r)):(Xo=e,e=r),e!==r)for(;e!==r;)n.push(e),e=Xo,Sc(),o=Lu(),o!==r?(Sc(),u=Ou(),u!==r?(Jo=e,e=ae(o,u)):(Xo=e,e=r)):(Xo=e,e=r);else n=r;return n!==r&&(Jo=t,n=fe(n)),t=n,t}function Lu(){let t;return n.substr(Xo,2)===s?(t=s,Xo+=2):(t=r,0===ru&&pu(Mt)),t===r&&(62===n.charCodeAt(Xo)?(t=a,Xo++):(t=r,0===ru&&pu($t)),t===r&&(n.substr(Xo,2)===f?(t=f,Xo+=2):(t=r,0===ru&&pu(Dt)),t===r&&(n.substr(Xo,2)===p?(t=p,Xo+=2):(t=r,0===ru&&pu(Ut)),t===r&&(t=n.charAt(Xo),Ct.test(t)?Xo++:(t=r,0===ru&&pu(_t)),t===r&&(n.substr(Xo,2)===d?(t=d,Xo+=2):(t=r,0===ru&&pu(Ht))))))),t}function wu(){let t,n,e,o;return t=Xo,n=Hi(),n!==r?(Sc(),e=ji(),e!==r?(Sc(),o=Ou(),o!==r?(Jo=t,t=pe(n,o)):(Xo=t,t=r)):(Xo=t,t=r)):(Xo=t,t=r),t===r&&(t=Xo,n=Hi(),n!==r?(Sc(),e=Ou(),e!==r?(Jo=t,t=de(n,e)):(Xo=t,t=r)):(Xo=t,t=r)),t}function Tu(){let t,n,e,o,u,i,c,l;return t=Xo,n=ji(),n!==r?(Sc(),e=Gi(),e!==r?(o=Sc(),u=Xo,i=Ou(),i!==r?(Sc(),c=ki(),c!==r?(Sc(),l=Ou(),l!==r?(Jo=u,u=ve(e,i,l)):(Xo=u,u=r)):(Xo=u,u=r)):(Xo=u,u=r),u!==r?(Jo=t,t=ye(e,u)):(Xo=t,t=r)):(Xo=t,t=r)):(Xo=t,t=r),t===r&&(t=Xo,n=Gi(),n!==r?(Sc(),e=Xo,o=Ou(),o!==r?(u=Sc(),i=ki(),i!==r?(Sc(),c=Ou(),c!==r?(Jo=e,e=he(n,o,c)):(Xo=e,e=r)):(Xo=e,e=r)):(Xo=e,e=r),e!==r?(Jo=t,t=ge(n,e)):(Xo=t,t=r)):(Xo=t,t=r)),t}function xu(){let t,n,e,o,u;return t=Xo,n=Xo,e=ji(),e!==r?(o=Sc(),u=Pi(),u!==r?(e=[e,o,u],n=e):(Xo=n,n=r)):(Xo=n,n=r),n!==r&&(Jo=t,n=Ee(n)),t=n,t===r&&(t=Pi()),t}function Nu(){let t,n,e,o,u;return t=Xo,n=Xo,e=ji(),e!==r?(o=Sc(),u=_i(),u!==r?(e=[e,o,u],n=e):(Xo=n,n=r)):(Xo=n,n=r),n!==r&&(Jo=t,n=Ce(n)),t=n,t===r&&(t=_i()),t}function Ru(){let t,n,e,o,u;return t=Xo,n=xu(),n!==r?(Sc(),e=Ei(),e!==r?(Sc(),o=Zi(),o!==r?(Sc(),u=Ci(),u!==r?(Jo=t,t=me(n,e,u)):(Xo=t,t=r)):(Xo=t,t=r)):(Xo=t,t=r)):(Xo=t,t=r),t===r&&(t=Xo,n=xu(),n!==r?(Sc(),e=Ei(),e!==r?(Jo=t,t=Ae(n,e)):(Xo=t,t=r)):(Xo=t,t=r)),t}function Iu(){let t,n,e;return t=Xo,n=Nu(),n!==r?(Sc(),e=hu(),e!==r?(Jo=t,t=be(n,e)):(Xo=t,t=r)):(Xo=t,t=r),t===r&&(t=Xo,n=Nu(),n!==r?(Sc(),e=qu(),e!==r?(Jo=t,t=Le(n,e)):(Xo=t,t=r)):(Xo=t,t=r)),t}function Ou(){let t,n,e,o,u,i;if(t=Xo,n=Su(),n!==r){for(e=[],o=Xo,Sc(),u=Fu(),u!==r?(Sc(),i=Su(),i!==r?(Jo=o,o=we(n,u,i)):(Xo=o,o=r)):(Xo=o,o=r);o!==r;)e.push(o),o=Xo,Sc(),u=Fu(),u!==r?(Sc(),i=Su(),i!==r?(Jo=o,o=we(n,u,i)):(Xo=o,o=r)):(Xo=o,o=r);Jo=t,t=Te(n,e)}else Xo=t,t=r;return t}function Fu(){let t;return t=n.charAt(Xo),mt.test(t)?Xo++:(t=r,0===ru&&pu(Pt)),t===r&&(n.substr(Xo,2)===v?(t=v,Xo+=2):(t=r,0===ru&&pu(Zt))),t}function Su(){let t,n,e,o,u,i;if(t=Xo,n=$u(),n!==r){for(e=[],o=Xo,Sc(),u=Mu(),u!==r?(Sc(),i=$u(),i!==r?(Jo=o,o=xe(n,u,i)):(Xo=o,o=r)):(Xo=o,o=r);o!==r;)e.push(o),o=Xo,Sc(),u=Mu(),u!==r?(Sc(),i=$u(),i!==r?(Jo=o,o=xe(n,u,i)):(Xo=o,o=r)):(Xo=o,o=r);Jo=t,t=Ne(n,e)}else Xo=t,t=r;return t}function Mu(){let t;return t=n.charAt(Xo),At.test(t)?Xo++:(t=r,0===ru&&pu(jt)),t}function $u(){let t,n,e,o;return t=oi(),t===r&&(t=Ku(),t===r&&(t=Vu(),t===r&&(t=Qu(),t===r&&(t=ni(),t===r&&(t=Xu(),t===r&&(t=ei(),t===r&&(t=mi(),t===r&&(t=Du(),t===r&&(t=qu(),t===r&&(t=Xo,n=Oc(),n!==r?(Sc(),e=gu(),e!==r?(Sc(),o=Fc(),o!==r?(Jo=t,t=Re(e)):(Xo=t,t=r)):(Xo=t,t=r)):(Xo=t,t=r))))))))))),t}function Du(){let t,n;return t=Xo,n=Uu(),n!==r&&(Jo=t,n=Ie(n)),t=n,t===r&&(t=Xo,n=ku(),n!==r&&(Jo=t,n=Oe(n)),t=n),t}function Uu(){let t,n;return t=Xo,n=_u(),n!==r&&(Jo=t,n=Fe(n)),t=n,t}function _u(){let t,n,e,o;if(t=Xo,n=Pu(),n!==r){for(e=[],o=ju();o!==r;)e.push(o),o=ju();Jo=t,t=Se(n,e)}else Xo=t,t=r;return t}function Hu(){let t,n,e,o;if(t=Xo,n=Pu(),n!==r){for(e=[],o=Zu();o!==r;)e.push(o),o=Zu();Jo=t,t=Me(n,e)}else Xo=t,t=r;return t}function Pu(){let t;return t=n.charAt(Xo),bt.test(t)?Xo++:(t=r,0===ru&&pu(kt)),t}function Zu(){let t;return t=n.charAt(Xo),Lt.test(t)?Xo++:(t=r,0===ru&&pu(zt)),t}function ju(){let t;return t=n.charAt(Xo),wt.test(t)?Xo++:(t=r,0===ru&&pu(Gt)),t}function ku(){let t,n,e,o;return t=Xo,n=Yu(),n!==r?(e=zu(),o=Yu(),o!==r?(Jo=t,t=$e(e)):(Xo=t,t=r)):(Xo=t,t=r),t}function zu(){let t,n,e;for(t=Xo,n=[],e=Gu();e!==r;)n.push(e),e=Gu();return Jo=t,n=De(n),t=n,t}function Gu(){let t;return t=Bu(),t===r&&(t=Wu()),t}function Wu(){let t,n,e;return t=Xo,n=Yu(),n!==r?(e=Yu(),e!==r?(Jo=t,t=Ue()):(Xo=t,t=r)):(Xo=t,t=r),t}function Bu(){let t;return t=n.charAt(Xo),wt.test(t)?Xo++:(t=r,0===ru&&pu(Gt)),t}function Yu(){let t;return t=n.charAt(Xo),Tt.test(t)?Xo++:(t=r,0===ru&&pu(Wt)),t}function qu(){let t,e,o,u;return t=Xo,e=Xo,64===n.charCodeAt(Xo)?(o=y,Xo++):(o=r,0===ru&&pu(Bt)),o!==r?(u=Hu(),u!==r?(o=[o,u],e=o):(Xo=e,e=r)):(Xo=e,e=r),e!==r&&(Jo=t,e=_e(e)),t=e,t}function Ku(){let t,n,e,o,u,i,c,l;return t=Xo,n=qi(),n!==r?(Sc(),e=Xo,o=Oc(),o!==r?(Sc(),u=ri(),u!==r?(Sc(),i=Wi(),i!==r?(Sc(),c=gu(),c!==r?(Sc(),l=Fc(),l!==r?(Jo=e,e=He(u,c)):(Xo=e,e=r)):(Xo=e,e=r)):(Xo=e,e=r)):(Xo=e,e=r)):(Xo=e,e=r),e===r&&(e=Xo,o=Oc(),o!==r?(Sc(),u=ri(),u!==r?(Sc(),i=Ic(),i!==r?(Sc(),c=gu(),c!==r?(Sc(),l=Fc(),l!==r?(Jo=e,e=Pe(u,c)):(Xo=e,e=r)):(Xo=e,e=r)):(Xo=e,e=r)):(Xo=e,e=r)):(Xo=e,e=r)),e!==r?(Jo=t,t=Ze(e)):(Xo=t,t=r)):(Xo=t,t=r),t}function Vu(){let t,n,e,o,u,i,c,l,s,a,f;return t=Xo,n=Yi(),n!==r?(Sc(),e=Xo,o=Oc(),o!==r?(Sc(),u=gu(),u!==r?(Sc(),i=Wi(),i!==r?(Sc(),c=gu(),c!==r?(Sc(),l=Xo,s=Bi(),s!==r?(a=Sc(),f=gu(),f!==r?(Sc(),l=f):(Xo=l,l=r)):(Xo=l,l=r),l===r&&(l=null),s=Fc(),s!==r?(Jo=e,e=je(u,c,l)):(Xo=e,e=r)):(Xo=e,e=r)):(Xo=e,e=r)):(Xo=e,e=r)):(Xo=e,e=r),e===r&&(e=Xo,o=Oc(),o!==r?(Sc(),u=gu(),u!==r?(Sc(),i=Ic(),i!==r?(Sc(),c=gu(),c!==r?(Sc(),l=Ic(),l!==r?(s=Sc(),a=gu(),a!==r?(f=Fc(),f!==r?(Jo=e,e=ke(u,c,a)):(Xo=e,e=r)):(Xo=e,e=r)):(Xo=e,e=r)):(Xo=e,e=r)):(Xo=e,e=r)):(Xo=e,e=r)):(Xo=e,e=r)),e!==r?(Jo=t,t=ze(e)):(Xo=t,t=r)):(Xo=t,t=r),t}function Xu(){let t,n,e,o,u,i,c,l;return t=Xo,n=rc(),n!==r?(Sc(),e=Xo,o=Oc(),o!==r?(Sc(),u=gu(),u!==r?(Sc(),i=oc(),i!==r?(Sc(),c=Ju(),c!==r?(Sc(),l=Fc(),l!==r?(Jo=e,e=Ge(u,c)):(Xo=e,e=r)):(Xo=e,e=r)):(Xo=e,e=r)):(Xo=e,e=r)):(Xo=e,e=r),e===r&&(e=Xo,o=Oc(),o!==r?(Sc(),u=gu(),u!==r?(Sc(),i=Ic(),i!==r?(Sc(),c=Ju(),c!==r?(Sc(),l=Fc(),l!==r?(Jo=e,e=We(u,c)):(Xo=e,e=r)):(Xo=e,e=r)):(Xo=e,e=r)):(Xo=e,e=r)):(Xo=e,e=r)),e!==r?(Jo=t,t=Be(e)):(Xo=t,t=r)):(Xo=t,t=r),t}function Ju(){let t,n,e,o,u;return t=Xo,n=uc(),n===r&&(n=ic()),n!==r&&(Jo=t,n=Ye()),t=n,t===r&&(t=Xo,n=cc(),n!==r&&(Jo=t,n=qe()),t=n,t===r&&(t=Xo,n=lc(),n!==r&&(Jo=t,n=Ke()),t=n,t===r&&(t=Xo,n=sc(),n!==r&&(Jo=t,n=Ve()),t=n,t===r&&(t=Xo,n=Ji(),n!==r&&(Jo=t,n=Xe()),t=n,t===r&&(t=Xo,n=Xi(),n!==r&&(Jo=t,n=Je()),t=n,t===r&&(t=Xo,n=Qi(),n!==r&&(Jo=t,n=Qe()),t=n,t===r&&(t=Xo,n=ac(),n!==r?(Sc(),e=Oc(),e!==r?(Sc(),o=Fi(),o!==r?(Sc(),u=Fc(),u!==r?(Jo=t,t=tr(o)):(Xo=t,t=r)):(Xo=t,t=r)):(Xo=t,t=r)):(Xo=t,t=r)))))))),t}function Qu(){let t,n,e,o,u,i,c,l,s;return t=Xo,n=Ki(),n!==r?(Sc(),e=Xo,o=Oc(),o!==r?(Sc(),u=ti(),Sc(),i=gu(),i!==r?(Sc(),c=Wi(),c!==r?(Sc(),l=gu(),l!==r?(Sc(),s=Fc(),s!==r?(Jo=e,e=nr(u,i,l)):(Xo=e,e=r)):(Xo=e,e=r)):(Xo=e,e=r)):(Xo=e,e=r)):(Xo=e,e=r),e===r&&(e=Xo,o=Oc(),o!==r?(Sc(),u=ti(),Sc(),i=gu(),i!==r?(Sc(),c=Fc(),c!==r?(Jo=e,e=er(u,i)):(Xo=e,e=r)):(Xo=e,e=r)):(Xo=e,e=r)),e!==r?(Jo=t,t=rr(e)):(Xo=t,t=r)):(Xo=t,t=r),t}function ti(){let t,n;return t=Xo,n=tc(),n===r&&(n=nc(),n===r&&(n=ec())),n===r&&(n=null),Jo=t,n=or(n),t=n,t}function ni(){let t,n,e,o,u,i,c,l;return t=Xo,n=Vi(),n!==r?(Sc(),e=Xo,o=Oc(),o!==r?(Sc(),u=gu(),u!==r?(Sc(),i=_i(),i!==r?(Sc(),c=gu(),c!==r?(Sc(),l=Fc(),l!==r?(Jo=e,e=ur(u,c)):(Xo=e,e=r)):(Xo=e,e=r)):(Xo=e,e=r)):(Xo=e,e=r)):(Xo=e,e=r),e===r&&(e=Xo,o=Oc(),o!==r?(Sc(),u=gu(),u!==r?(Sc(),i=Ic(),i!==r?(Sc(),c=gu(),c!==r?(Sc(),l=Fc(),l!==r?(Jo=e,e=ir(u,c)):(Xo=e,e=r)):(Xo=e,e=r)):(Xo=e,e=r)):(Xo=e,e=r)):(Xo=e,e=r)),e!==r?(Jo=t,t=cr(e)):(Xo=t,t=r)):(Xo=t,t=r),t}function ei(){let t,n,e,o;return t=Xo,n=Xo,ru++,e=qi(),ru--,e===r?n=void 0:(Xo=n,n=r),n!==r?(e=$c(),e!==r?(Sc(),o=hu(),o!==r?(Jo=t,t=lr(e,o)):(Xo=t,t=r)):(Xo=t,t=r)):(Xo=t,t=r),t}function ri(){let t,n;return t=Xo,n=dc(),n===r&&(n=hc(),n===r&&(n=gc(),n===r&&(n=Ec(),n===r&&(n=Cc(),n===r&&(n=mc(),n===r&&(n=vc(),n===r&&(n=yc(),n===r&&(n=Ac(),n===r&&(n=bc(),n===r&&(n=Lc())))))))))),n!==r&&(Jo=t,n=sr(n)),t=n,t}function oi(){let t;return t=Ci(),t===r&&(t=xi(),t===r&&(t=gi(),t===r&&(t=hi(),t===r&&(t=yi(),t===r&&(t=ui(),t===r&&(t=ci(),t===r&&(t=ii()))))))),t}function ui(){let t,n,e;return t=Xo,n=Xi(),n!==r?(Sc(),e=Ei(),e!==r?(Jo=t,t=ar(e)):(Xo=t,t=r)):(Xo=t,t=r),t}function ii(){let t,n,e;return t=Xo,n=Qi(),n!==r?(Sc(),e=Ei(),e!==r?(Jo=t,t=fr(e)):(Xo=t,t=r)):(Xo=t,t=r),t}function ci(){let t,e,o,u,i;return t=Xo,e=pc(),e!==r?(Sc(),o=n.charAt(Xo),mt.test(o)?Xo++:(o=r,0===ru&&pu(Pt)),o!==r?(Sc(),u=Ei(),u!==r?(Sc(),i=li(),i!==r?(Jo=t,t=pr(o,u,i)):(Xo=t,t=r)):(Xo=t,t=r)):(Xo=t,t=r)):(Xo=t,t=r),t===r&&(t=Xo,e=pc(),e!==r?(Sc(),o=Ei(),o!==r?(Sc(),u=li(),u!==r?(Jo=t,t=dr(o,u)):(Xo=t,t=r)):(Xo=t,t=r)):(Xo=t,t=r)),t}function li(){let t,n,e,o;return t=Xo,n=si(),n!==r?(Sc(),e=fc(),e!==r?(Sc(),o=ai(),o!==r?(Jo=t,t=vr(n,o)):(Xo=t,t=r)):(Xo=t,t=r)):(Xo=t,t=r),t===r&&(t=fi()),t}function si(){let t,n,e,o,u;return t=Xo,n=pi(),n!==r?(Sc(),e=Oc(),e!==r?(Sc(),o=vi(),o!==r?(Sc(),u=Fc(),u!==r?(Jo=t,t=yr(n,o)):(Xo=t,t=r)):(Xo=t,t=r)):(Xo=t,t=r)):(Xo=t,t=r),t===r&&(t=Xo,n=pi(),n!==r&&(Jo=t,n=hr(n)),t=n),t}function ai(){let t,n,e,o,u,i,c;return t=Xo,n=pi(),n!==r&&(Jo=t,n=gr(n)),t=n,t===r&&(t=Xo,n=mc(),n!==r?(Sc(),e=Oc(),e!==r?(Sc(),o=vi(),o!==r?(Sc(),u=Ic(),u!==r?(Sc(),i=di(),i!==r?(Sc(),c=Fc(),c!==r?(Jo=t,t=Er(o,i)):(Xo=t,t=r)):(Xo=t,t=r)):(Xo=t,t=r)):(Xo=t,t=r)):(Xo=t,t=r)):(Xo=t,t=r),t===r&&(t=Xo,n=mc(),n!==r?(Sc(),e=Oc(),e!==r?(Sc(),o=vi(),o!==r?(Sc(),u=Fc(),u!==r?(Jo=t,t=Cr(o)):(Xo=t,t=r)):(Xo=t,t=r)):(Xo=t,t=r)):(Xo=t,t=r),t===r&&(t=Xo,n=mc(),n!==r&&(Jo=t,n=mr()),t=n))),t}function fi(){let t,n,e,o,u,i,c;return t=Xo,n=pi(),n!==r?(Sc(),e=Oc(),e!==r?(Sc(),o=di(),o!==r?(Sc(),u=Fc(),u!==r?(Jo=t,t=Ar(n,o)):(Xo=t,t=r)):(Xo=t,t=r)):(Xo=t,t=r)):(Xo=t,t=r),t===r&&(t=Xo,n=pi(),n!==r&&(Jo=t,n=br(n)),t=n,t===r&&(t=Xo,n=mc(),n!==r?(Sc(),e=Oc(),e!==r?(Sc(),o=vi(),o!==r?(Sc(),u=Ic(),u!==r?(Sc(),i=di(),i!==r?(Sc(),c=Fc(),c!==r?(Jo=t,t=Lr(o,i)):(Xo=t,t=r)):(Xo=t,t=r)):(Xo=t,t=r)):(Xo=t,t=r)):(Xo=t,t=r)):(Xo=t,t=r),t===r&&(t=Xo,n=mc(),n!==r?(Sc(),e=Oc(),e!==r?(Sc(),o=di(),o!==r?(Sc(),u=Fc(),u!==r?(Jo=t,t=wr(o)):(Xo=t,t=r)):(Xo=t,t=r)):(Xo=t,t=r)):(Xo=t,t=r),t===r&&(t=Xo,n=mc(),n!==r&&(Jo=t,n=Tr()),t=n)))),t}function pi(){let t,n;return t=Xo,n=gc(),n!==r&&(Jo=t,n=xr()),t=n,t===r&&(t=Xo,n=Ec(),n!==r&&(Jo=t,n=Nr()),t=n,t===r&&(t=Xo,n=Cc(),n!==r&&(Jo=t,n=Rr()),t=n,t===r&&(t=Xo,n=hc(),n!==r&&(Jo=t,n=Ir()),t=n,t===r&&(t=Xo,n=dc(),n!==r&&(Jo=t,n=Or()),t=n)))),t}function di(){let t,n;return t=Xo,n=Fi(),n!==r&&(Jo=t,n=Fr(n)),t=n,t}function vi(){let t,n;return t=Xo,n=Fi(),n!==r&&(Jo=t,n=Sr(n)),t=n,t}function yi(){let t,n,e;return t=Xo,n=Ji(),n!==r?(Sc(),e=Ei(),e!==r?(Jo=t,t=Mr(e)):(Xo=t,t=r)):(Xo=t,t=r),t}function hi(){let t,n;return t=Xo,n=$i(),n!==r&&(Jo=t,n=$r()),t=n,t}function gi(){let t,n;return t=Xo,n=Di(),n!==r&&(Jo=t,n=Dr()),t=n,t===r&&(t=Xo,n=Ui(),n!==r&&(Jo=t,n=Ur()),t=n),t}function Ei(){let t;return t=Ci(),t===r&&(t=qu()),t}function Ci(){let t,e,o,u,i;if(t=Xo,39===n.charCodeAt(Xo)?(e=h,Xo++):(e=r,0===ru&&pu(Yt)),e===r&&(n.substr(Xo,2)===g?(e=g,Xo+=2):(e=r,0===ru&&pu(qt))),e!==r){for(o=[],u=Xo,n.substr(Xo,2)===E?(i=E,Xo+=2):(i=r,0===ru&&pu(Kt)),i!==r&&(Jo=u,i=_r()),u=i,u===r&&(u=n.charAt(Xo),xt.test(u)?Xo++:(u=r,0===ru&&pu(Vt)));u!==r;)o.push(u),u=Xo,n.substr(Xo,2)===E?(i=E,Xo+=2):(i=r,0===ru&&pu(Kt)),i!==r&&(Jo=u,i=_r()),u=i,u===r&&(u=n.charAt(Xo),xt.test(u)?Xo++:(u=r,0===ru&&pu(Vt)));39===n.charCodeAt(Xo)?(u=h,Xo++):(u=r,0===ru&&pu(Yt)),u!==r?(Jo=t,t=Hr(o)):(Xo=t,t=r)}else Xo=t,t=r;return t}function mi(){let t;return t=Ai(),t===r&&(t=bi()),t}function Ai(){let t,n,e,o,u,i,c;if(t=Xo,n=wc(),n!==r)if(Sc(),e=gu(),e!==r){for(Sc(),o=[],u=Xo,i=wi(),i!==r?(c=Sc(),u=i):(Xo=u,u=r);u!==r;)o.push(u),u=Xo,i=wi(),i!==r?(c=Sc(),u=i):(Xo=u,u=r);u=Tc(),u!==r?(Jo=t,t=Pr(e,o)):(Xo=t,t=r)}else Xo=t,t=r;else Xo=t,t=r;if(t===r)if(t=Xo,n=wc(),n!==r)if(Sc(),e=gu(),e!==r){for(Sc(),o=[],u=Xo,i=wi(),i!==r?(c=Sc(),u=i):(Xo=u,u=r);u!==r;)o.push(u),u=Xo,i=wi(),i!==r?(c=Sc(),u=i):(Xo=u,u=r);u=Ti(),u!==r?(i=Sc(),c=Tc(),c!==r?(Jo=t,t=Zr(e,o,u)):(Xo=t,t=r)):(Xo=t,t=r)}else Xo=t,t=r;else Xo=t,t=r;return t}function bi(){let t,n,e,o,u,i;if(t=Xo,n=wc(),n!==r){for(Sc(),e=[],o=Xo,u=Li(),u!==r?(i=Sc(),o=u):(Xo=o,o=r);o!==r;)e.push(o),o=Xo,u=Li(),u!==r?(i=Sc(),o=u):(Xo=o,o=r);o=Tc(),o!==r?(Jo=t,t=jr(e)):(Xo=t,t=r)}else Xo=t,t=r;if(t===r)if(t=Xo,n=wc(),n!==r){for(Sc(),e=[],o=Xo,u=Li(),u!==r?(i=Sc(),o=u):(Xo=o,o=r);o!==r;)e.push(o),o=Xo,u=Li(),u!==r?(i=Sc(),o=u):(Xo=o,o=r);o=Ti(),o!==r?(u=Sc(),i=Tc(),i!==r?(Jo=t,t=kr(e,o)):(Xo=t,t=r)):(Xo=t,t=r)}else Xo=t,t=r;return t}function Li(){let t,n,e,o,u;return t=Xo,n=xc(),n!==r?(Sc(),e=gu(),e!==r?(Sc(),o=Nc(),o!==r?(Sc(),u=gu(),u!==r?(Jo=t,t=zr(e,u)):(Xo=t,t=r)):(Xo=t,t=r)):(Xo=t,t=r)):(Xo=t,t=r),t}function wi(){let t,n,e,o,u;return t=Xo,n=xc(),n!==r?(Sc(),e=gu(),e!==r?(Sc(),o=Nc(),o!==r?(Sc(),u=gu(),u!==r?(Jo=t,t=Gr(e,u)):(Xo=t,t=r)):(Xo=t,t=r)):(Xo=t,t=r)):(Xo=t,t=r),t}function Ti(){let t,n,e;return t=Xo,n=Rc(),n!==r?(Sc(),e=gu(),e!==r?(Jo=t,t=Wr(e)):(Xo=t,t=r)):(Xo=t,t=r),t}function xi(){let t,n,e,o;return t=Xo,n=Ni(),n!==r?(e=Xo,ru++,o=Pu(),ru--,o===r?e=void 0:(Xo=e,e=r),e!==r?(Jo=t,t=Br(n)):(Xo=t,t=r)):(Xo=t,t=r),t}function Ni(){let t,n,e,o;return t=Xo,n=Ri(),n!==r?(e=Ii(),e!==r?(o=Oi(),o!==r?(Jo=t,t=Yr(n,e,o)):(Xo=t,t=r)):(Xo=t,t=r)):(Xo=t,t=r),t===r&&(t=Xo,n=Ri(),n!==r?(e=Ii(),e!==r?(Jo=t,t=qr(n,e)):(Xo=t,t=r)):(Xo=t,t=r),t===r&&(t=Xo,n=Ri(),n!==r?(e=Oi(),e!==r?(Jo=t,t=Kr(n,e)):(Xo=t,t=r)):(Xo=t,t=r),t===r&&(t=Xo,n=Ri(),n!==r&&(Jo=t,n=Vr(n)),t=n))),t}function Ri(){let t,e,o;return t=Fi(),t===r&&(t=Xo,e=n.charAt(Xo),mt.test(e)?Xo++:(e=r,0===ru&&pu(Pt)),e!==r?(o=Fi(),o!==r?(Jo=t,t=Xr(e,o)):(Xo=t,t=r)):(Xo=t,t=r)),t}function Ii(){let t,e,o;return t=Xo,46===n.charCodeAt(Xo)?(e=C,Xo++):(e=r,0===ru&&pu(Xt)),e!==r?(o=Fi(),o===r&&(o=null),Jo=t,t=Jr(o)):(Xo=t,t=r),t}function Oi(){let t,n,e;return t=Xo,n=Mi(),n!==r?(e=Fi(),e!==r?(Jo=t,t=Qr(n,e)):(Xo=t,t=r)):(Xo=t,t=r),t}function Fi(){let t,n,e;if(t=Xo,n=[],e=Si(),e!==r)for(;e!==r;)n.push(e),e=Si();else n=r;return n!==r&&(Jo=t,n=to(n)),t=n,t}function Si(){let t;return t=n.charAt(Xo),Nt.test(t)?Xo++:(t=r,0===ru&&pu(Jt)),t}function Mi(){let t,e,o;return t=Xo,e=n.charAt(Xo),Rt.test(e)?Xo++:(e=r,0===ru&&pu(Qt)),e!==r?(o=n.charAt(Xo),mt.test(o)?Xo++:(o=r,0===ru&&pu(Pt)),o===r&&(o=null),Jo=t,t=no(e,o)):(Xo=t,t=r),t}function $i(){let t,e,o,u;return t=Xo,e=n.substr(Xo,4),e.toLowerCase()===m?Xo+=4:(e=r,0===ru&&pu(tn)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(e=[e,o],t=e):(Xo=t,t=r)):(Xo=t,t=r),t}function Di(){let t,e,o,u;return t=Xo,e=n.substr(Xo,4),e.toLowerCase()===A?Xo+=4:(e=r,0===ru&&pu(nn)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(e=[e,o],t=e):(Xo=t,t=r)):(Xo=t,t=r),t}function Ui(){let t,e,o,u;return t=Xo,e=n.substr(Xo,5),e.toLowerCase()===b?Xo+=5:(e=r,0===ru&&pu(en)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(e=[e,o],t=e):(Xo=t,t=r)):(Xo=t,t=r),t}function _i(){let t,e,o,u;return t=Xo,e=n.substr(Xo,2),e.toLowerCase()===L?Xo+=2:(e=r,0===ru&&pu(rn)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=eo()):(Xo=t,t=r)):(Xo=t,t=r),t}function Hi(){let t,e,o,u;return t=Xo,e=n.substr(Xo,2),e.toLowerCase()===w?Xo+=2:(e=r,0===ru&&pu(on)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=ro()):(Xo=t,t=r)):(Xo=t,t=r),t}function Pi(){let t,e,o,u;return t=Xo,e=n.substr(Xo,4),e.toLowerCase()===T?Xo+=4:(e=r,0===ru&&pu(un)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=oo()):(Xo=t,t=r)):(Xo=t,t=r),t}function Zi(){let t,e,o,u;return t=Xo,e=n.substr(Xo,6),e.toLowerCase()===x?Xo+=6:(e=r,0===ru&&pu(cn)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=uo()):(Xo=t,t=r)):(Xo=t,t=r),t}function ji(){let t,e,o,u;return t=Xo,e=n.substr(Xo,3),e.toLowerCase()===N?Xo+=3:(e=r,0===ru&&pu(ln)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=io()):(Xo=t,t=r)):(Xo=t,t=r),t}function ki(){let t,e,o,u;return t=Xo,e=n.substr(Xo,3),e.toLowerCase()===R?Xo+=3:(e=r,0===ru&&pu(sn)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=co()):(Xo=t,t=r)):(Xo=t,t=r),t}function zi(){let t,e,o,u;return t=Xo,e=n.substr(Xo,2),e.toLowerCase()===I?Xo+=2:(e=r,0===ru&&pu(an)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=lo()):(Xo=t,t=r)):(Xo=t,t=r),t}function Gi(){let t,e,o,u;return t=Xo,e=n.substr(Xo,7),e.toLowerCase()===O?Xo+=7:(e=r,0===ru&&pu(fn)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=so()):(Xo=t,t=r)):(Xo=t,t=r),t}function Wi(){let t,e,o,u;return t=Xo,e=n.substr(Xo,4),e.toLowerCase()===F?Xo+=4:(e=r,0===ru&&pu(pn)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=ao()):(Xo=t,t=r)):(Xo=t,t=r),t}function Bi(){let t,e,o,u;return t=Xo,e=n.substr(Xo,3),e.toLowerCase()===S?Xo+=3:(e=r,0===ru&&pu(dn)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=fo()):(Xo=t,t=r)):(Xo=t,t=r),t}function Yi(){let t,e,o,u;return t=Xo,e=n.substr(Xo,9),e.toLowerCase()===M?Xo+=9:(e=r,0===ru&&pu(vn)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=po()):(Xo=t,t=r)):(Xo=t,t=r),t}function qi(){let t,e,o,u;return t=Xo,e=n.substr(Xo,7),e.toLowerCase()===$?Xo+=7:(e=r,0===ru&&pu(yn)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=vo()):(Xo=t,t=r)):(Xo=t,t=r),t}function Ki(){let t,e,o,u;return t=Xo,e=n.substr(Xo,4),e.toLowerCase()===D?Xo+=4:(e=r,0===ru&&pu(hn)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=yo()):(Xo=t,t=r)):(Xo=t,t=r),t}function Vi(){let t,e,o,u;return t=Xo,e=n.substr(Xo,8),e.toLowerCase()===U?Xo+=8:(e=r,0===ru&&pu(gn)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=ho()):(Xo=t,t=r)):(Xo=t,t=r),t}function Xi(){let t,e,o,u;return t=Xo,e=n.substr(Xo,9),e.toLowerCase()===_?Xo+=9:(e=r,0===ru&&pu(En)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=go()):(Xo=t,t=r)):(Xo=t,t=r),t}function Ji(){let t,e,o,u;return t=Xo,e=n.substr(Xo,4),e.toLowerCase()===H?Xo+=4:(e=r,0===ru&&pu(Cn)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=Eo()):(Xo=t,t=r)):(Xo=t,t=r),t}function Qi(){let t,e,o,u;return t=Xo,e=n.substr(Xo,4),e.toLowerCase()===P?Xo+=4:(e=r,0===ru&&pu(mn)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=Co()):(Xo=t,t=r)):(Xo=t,t=r),t}function tc(){let t,e,o,u;return t=Xo,e=n.substr(Xo,7),e.toLowerCase()===Z?Xo+=7:(e=r,0===ru&&pu(An)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=mo()):(Xo=t,t=r)):(Xo=t,t=r),t}function nc(){let t,e,o,u;return t=Xo,e=n.substr(Xo,8),e.toLowerCase()===j?Xo+=8:(e=r,0===ru&&pu(bn)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=Ao()):(Xo=t,t=r)):(Xo=t,t=r),t}function ec(){let t,e,o,u;return t=Xo,e=n.substr(Xo,4),e.toLowerCase()===k?Xo+=4:(e=r,0===ru&&pu(Ln)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=bo()):(Xo=t,t=r)):(Xo=t,t=r),t}function rc(){let t,e,o,u;return t=Xo,e=n.substr(Xo,4),e.toLowerCase()===z?Xo+=4:(e=r,0===ru&&pu(wn)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=Lo()):(Xo=t,t=r)):(Xo=t,t=r),t}function oc(){let t,e,o,u;return t=Xo,e=n.substr(Xo,2),e.toLowerCase()===G?Xo+=2:(e=r,0===ru&&pu(Tn)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=wo()):(Xo=t,t=r)):(Xo=t,t=r),t}function uc(){let t,e,o,u;return t=Xo,e=n.substr(Xo,7),e.toLowerCase()===W?Xo+=7:(e=r,0===ru&&pu(xn)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=To()):(Xo=t,t=r)):(Xo=t,t=r),t}function ic(){let t,e,o,u;return t=Xo,e=n.substr(Xo,3),e.toLowerCase()===B?Xo+=3:(e=r,0===ru&&pu(Nn)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=xo()):(Xo=t,t=r)):(Xo=t,t=r),t}function cc(){let t,e,o,u;return t=Xo,e=n.substr(Xo,8),e.toLowerCase()===Y?Xo+=8:(e=r,0===ru&&pu(Rn)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=No()):(Xo=t,t=r)):(Xo=t,t=r),t}function lc(){let t,e,o,u;return t=Xo,e=n.substr(Xo,5),e.toLowerCase()===q?Xo+=5:(e=r,0===ru&&pu(In)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=Ro()):(Xo=t,t=r)):(Xo=t,t=r),t}function sc(){let t,e,o,u;return t=Xo,e=n.substr(Xo,4),e.toLowerCase()===K?Xo+=4:(e=r,0===ru&&pu(On)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=Io()):(Xo=t,t=r)):(Xo=t,t=r),t}function ac(){let t,e,o,u;return t=Xo,e=n.substr(Xo,7),e.toLowerCase()===V?Xo+=7:(e=r,0===ru&&pu(Fn)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=Oo()):(Xo=t,t=r)):(Xo=t,t=r),t}function fc(){let t,e,o,u;return t=Xo,e=n.substr(Xo,2),e.toLowerCase()===X?Xo+=2:(e=r,0===ru&&pu(Sn)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=Fo()):(Xo=t,t=r)):(Xo=t,t=r),t}function pc(){let t,e,o,u;return t=Xo,e=n.substr(Xo,8),e.toLowerCase()===J?Xo+=8:(e=r,0===ru&&pu(Mn)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=So()):(Xo=t,t=r)):(Xo=t,t=r),t}function dc(){let t,e,o,u;return t=Xo,e=n.substr(Xo,4),e.toLowerCase()===Q?Xo+=4:(e=r,0===ru&&pu($n)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=Mo()):(Xo=t,t=r)):(Xo=t,t=r),t}function vc(){let t,e,o,u;return t=Xo,e=n.substr(Xo,13),e.toLowerCase()===tt?Xo+=13:(e=r,0===ru&&pu(Dn)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=$o()):(Xo=t,t=r)):(Xo=t,t=r),t}function yc(){let t,e,o,u;return t=Xo,e=n.substr(Xo,15),e.toLowerCase()===nt?Xo+=15:(e=r,0===ru&&pu(Un)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=Do()):(Xo=t,t=r)):(Xo=t,t=r),t}function hc(){let t,e,o,u;return t=Xo,e=n.substr(Xo,5),e.toLowerCase()===et?Xo+=5:(e=r,0===ru&&pu(_n)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=Uo()):(Xo=t,t=r)):(Xo=t,t=r),t}function gc(){let t,e,o,u;return t=Xo,e=n.substr(Xo,3),e.toLowerCase()===rt?Xo+=3:(e=r,0===ru&&pu(Hn)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=_o()):(Xo=t,t=r)):(Xo=t,t=r),t}function Ec(){let t,e,o,u;return t=Xo,e=n.substr(Xo,4),e.toLowerCase()===ot?Xo+=4:(e=r,0===ru&&pu(Pn)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=Ho()):(Xo=t,t=r)):(Xo=t,t=r),t}function Cc(){let t,e,o,u;return t=Xo,e=n.substr(Xo,6),e.toLowerCase()===ut?Xo+=6:(e=r,0===ru&&pu(Zn)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=Po()):(Xo=t,t=r)):(Xo=t,t=r),t}function mc(){let t,e,o,u;return t=Xo,e=n.substr(Xo,6),e.toLowerCase()===it?Xo+=6:(e=r,0===ru&&pu(jn)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=Zo()):(Xo=t,t=r)):(Xo=t,t=r),t}function Ac(){let t,e,o,u;return t=Xo,e=n.substr(Xo,3),e.toLowerCase()===ct?Xo+=3:(e=r,0===ru&&pu(kn)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=jo()):(Xo=t,t=r)):(Xo=t,t=r),t}function bc(){let t,e,o,u;return t=Xo,e=n.substr(Xo,3),e.toLowerCase()===lt?Xo+=3:(e=r,0===ru&&pu(zn)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=ko()):(Xo=t,t=r)):(Xo=t,t=r),t}function Lc(){let t,e,o,u;return t=Xo,e=n.substr(Xo,4),e.toLowerCase()===st?Xo+=4:(e=r,0===ru&&pu(Gn)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=zo()):(Xo=t,t=r)):(Xo=t,t=r),t}function wc(){let t,e,o,u;return t=Xo,e=n.substr(Xo,4),e.toLowerCase()===at?Xo+=4:(e=r,0===ru&&pu(Wn)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=Go()):(Xo=t,t=r)):(Xo=t,t=r),t}function Tc(){let t,e,o,u;return t=Xo,e=n.substr(Xo,3),e.toLowerCase()===ft?Xo+=3:(e=r,0===ru&&pu(Bn)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=Wo()):(Xo=t,t=r)):(Xo=t,t=r),t}function xc(){let t,e,o,u;return t=Xo,e=n.substr(Xo,4),e.toLowerCase()===pt?Xo+=4:(e=r,0===ru&&pu(Yn)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=Bo()):(Xo=t,t=r)):(Xo=t,t=r),t}function Nc(){let t,e,o,u;return t=Xo,e=n.substr(Xo,4),e.toLowerCase()===dt?Xo+=4:(e=r,0===ru&&pu(qn)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=Yo()):(Xo=t,t=r)):(Xo=t,t=r),t}function Rc(){let t,e,o,u;return t=Xo,e=n.substr(Xo,4),e.toLowerCase()===vt?Xo+=4:(e=r,0===ru&&pu(Kn)),e!==r?(o=Xo,ru++,u=Zu(),ru--,u===r?o=void 0:(Xo=o,o=r),o!==r?(Jo=t,t=qo()):(Xo=t,t=r)):(Xo=t,t=r),t}function Ic(){let t;return 44===n.charCodeAt(Xo)?(t=yt,Xo++):(t=r,0===ru&&pu(Vn)),t}function Oc(){let t;return 40===n.charCodeAt(Xo)?(t=ht,Xo++):(t=r,0===ru&&pu(Xn)),t}function Fc(){let t;return 41===n.charCodeAt(Xo)?(t=gt,Xo++):(t=r,0===ru&&pu(Jn)),t}function Sc(){let t,n;for(t=[],n=Mc();n!==r;)t.push(n),n=Mc();return t}function Mc(){let t;return t=n.charAt(Xo),It.test(t)?Xo++:(t=r,0===ru&&pu(Qn)),t}function $c(){let t,e,o,u;if(t=Xo,e=Hu(),e!==r&&(Jo=t,e=Ko(e)),t=e,t===r)if(t=Xo,96===n.charCodeAt(Xo)?(e=Et,Xo++):(e=r,0===ru&&pu(te)),e!==r){if(o=[],u=n.charAt(Xo),Ot.test(u)?Xo++:(u=r,0===ru&&pu(ne)),u!==r)for(;u!==r;)o.push(u),u=n.charAt(Xo),Ot.test(u)?Xo++:(u=r,0===ru&&pu(ne));else o=r;o!==r?(96===n.charCodeAt(Xo)?(u=Et,Xo++):(u=r,0===ru&&pu(te)),u!==r?(Jo=t,t=Vo(o)):(Xo=t,t=r)):(Xo=t,t=r)}else Xo=t,t=r;return t}function Dc(t,n,e){return{type:"unary-expression",location:e,operator:t,expr:n}}function Uc(t,n,e,r,o){const u={type:"binary-expression",location:o,operator:t,left:n,right:e};return void 0!==r&&(u.escape=r),u}function _c(t,...n){return{type:"expression-list",location:t,value:n}}function Hc(t,n){let e=t;for(const{op:r,expr:o,location:{end:u}}of n)e=Uc(r,e,o,void 0,{...e.location,end:u});return e}function Pc(t){!0!==/^(\d{4})-(\d{1,2})-(\d{1,2})$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?[ ]{0,1}(\+|\-)(\d{1,2}):(\d{1,2})$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})?[ ]{0,1}(\+|\-)(\d{1,2}):(\d{1,2})$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})$/.test(t)&&uu("Timestamp literal is invalid")}function Zc(t){!0!==/^(\d{1,2}):(\d{1,2}):(\d{1,2})$|^(\d{1,2}):(\d{1,2})$|^(\d{1,2}):(\d{1,2}):(\d{1,2}).([0-9]+)$/.test(t)&&uu("Time literal is invalid")}function jc(t){!0!==/^(\d{4})-(\d{1,2})-(\d{1,2})$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?[ ]{0,1}(\+|\-)(\d{1,2}):(\d{1,2})$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})?[ ]{0,1}(\+|\-)(\d{1,2}):(\d{1,2})$|^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})$/.test(t)&&uu("Date literal is invalid")}tu=i();const kc=tu!==r&&Xo===n.length;function zc(){throw tu!==r&&Xo<n.length&&pu(su()),vu(eu,nu<n.length?iu(nu):null,nu<n.length?fu(nu,nu+1):fu(nu,nu))}return e.peg$library?{peg$result:tu,peg$currPos:Xo,peg$FAILED:r,peg$maxFailExpected:eu,peg$maxFailPos:nu,peg$success:kc,peg$throw:kc?void 0:zc}:kc?tu:void zc()}class WhereGrammar_e{static parse(t){return n(t)}}function WhereGrammar_r(t,n){if(null!=t)switch(n(t),t.type){case"when-clause":WhereGrammar_r(t.operand,n),WhereGrammar_r(t.value,n);break;case"case-expression":for(const e of t.clauses)WhereGrammar_r(e,n);"simple"===t.format&&WhereGrammar_r(t.operand,n),null!==t.else&&WhereGrammar_r(t.else,n);break;case"expression-list":for(const e of t.value)WhereGrammar_r(e,n);break;case"unary-expression":WhereGrammar_r(t.expr,n);break;case"binary-expression":WhereGrammar_r(t.left,n),WhereGrammar_r(t.right,n);break;case"function":WhereGrammar_r(t.args,n);break;case"interval":WhereGrammar_r(t.value,n),WhereGrammar_r(t.qualifier,n);break;case"interval-qualifier":WhereGrammar_r(t.start,n),WhereGrammar_r(t.end,n)}}

;// ../node_modules/@arcgis/core/core/sql/WhereClause.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const WhereClause_x=new Set(["current_timestamp","current_date","current_time"]);class WhereClause_E{constructor(e){this.staticData=e}makeBool(e){return WhereClause_Z(e)}featureValue(e,t,r,a){return te(e,t,r,a)}equalsNull(e){return null===e}applyLike(e,t,r){return WhereClause_Y(e,t,r)}ensureArray(e){return WhereClause_z(e)}applyIn(e,t){return WhereClause_W(e,t)}currentTimestamp(e){return WhereClause_G(e)}currentDate(e){return WhereClause_K(e)}currentTime(e){return WhereClause_Q(e)}makeSqlInterval(e,t,r){return SqlInterval_a.createFromValueAndQualifier(e,t,r)}convertInterval(e){return SqlInterval_a.isInterval(e)?e.valueInMilliseconds():e}compare(e,t,r){return sqlCompareUtils_I(t,r,e)}calculate(e,t,r,a){return sqlArithmeticUtils_d(e,t,r,a)}evaluateTime(e){return O(e)}evaluateTimestamp(e,t,r){return D(e,t,r)}evaluateDate(e,t){return $(e,t)}evaluateFunction(e,t,r){return StandardizedFunctions_E(e,t,r)}lookup(e,t){const r=t[e];return void 0===r?null:r}between(e,t){return null==e||null==t[0]||null==t[1]?null:sqlCompareUtils_I(e,t[0],">=")&&sqlCompareUtils_I(e,t[1],"<=")}notbetween(e,t){return null==e||null==t[0]||null==t[1]?null:sqlCompareUtils_I(e,t[0],"<")||sqlCompareUtils_I(e,t[1],">")}ternaryNot(e){return WhereClause_J(e)}ternaryAnd(e,t){return WhereClause_B(e,t)}ternaryOr(e,t){return WhereClause_M(e,t)}}function WhereClause_$(e,...t){return`this.${e}(${t.join(", ")})`}function WhereClause_F(e){return void 0===e?"void 0":JSON.stringify(e)}function WhereClause_b({type:e,start:t,end:r}){return`{type: ${WhereClause_F(e)}, start: ${WhereClause_A(t)}, end: ${WhereClause_A(r)}}`}function WhereClause_A({type:e,period:t,precision:r,secondary:a}){return JSON.stringify({type:e,period:t,precision:r,secondary:a})}function WhereClause_O({type:e,size:t,withtimezone:r}){return JSON.stringify({type:e,size:t,withtimezone:r})}const WhereClause_k="feature",WhereClause_U="lookups",WhereClause_V="attributeAdapter",WhereClause_j="fieldsIndex",WhereClause_q="timeZone",WhereClause_C="currentUser";class WhereClause_L{constructor(e){this._parseTree=e,this._staticData=Object.create(null),this._nextStaticDataId=0,this._tempVars=new Set,this._nextTempVarId=0}compile(){const e=this._compileNode(this._parseTree),t=`\n      ${this._tempVars.size>0?`var ${Array.from(this._tempVars).join(", ")};`:""}\n      return this.convertInterval(${e});\n    `;return new Function(WhereClause_k,WhereClause_U,WhereClause_V,WhereClause_j,WhereClause_q,WhereClause_C,t).bind(new WhereClause_E(this._staticData))}_storeStaticData(e){const t="static$"+this._nextStaticDataId++;return this._staticData[t]=e,t}_compileRefStaticData(e){return`this.staticData[${WhereClause_F(e)}]`}_generateTempVar(){const e="temp$"+this._nextTempVarId++;return this._tempVars.add(e),e}_compileSimpleCase(e){const t=this._compileNode(e.operand),r=this._generateTempVar(),a=[];for(const s of e.clauses){const e=WhereClause_$("compare",WhereClause_F("="),r,this._compileNode(s.operand)),t=this._compileNode(s.value);a.push(`${e} ? (${t}) :`)}return null!=e.else?a.push(this._compileNode(e.else)):a.push(WhereClause_F(null)),`(${r} = ${t}, ${a.join(" ")})`}_compileSearchedCase(e){const t=[];for(const r of e.clauses){const e=WhereClause_$("makeBool",this._compileNode(r.operand)),a=this._compileNode(r.value);t.push(`${e} ? (${a}) :`)}return null!=e.else?t.push(this._compileNode(e.else)):t.push(WhereClause_F(null)),t.join(" ")}_compileInExpr(e,t){const r=new Set,a=[];for(const i of t.value)"number"===i.type||"string"===i.type?r.add(i.value):a.push(i);const s=this._compileNode(e),n=WhereClause_$("ensureArray",this._compileNode({type:"expression-list",location:t.location,value:a}));if(r.size>0){const e=this._compileRefStaticData(this._storeStaticData(r)),t=this._generateTempVar();return a.length>0?`(${t} = ${s}, ${e}.has(${t}) || ${WhereClause_$("applyIn",t,n)})`:`(${t} = ${s}, ${t} == null ? null : ${e}.has(${t}))`}return WhereClause_$("applyIn",s,n)}_compileNode(e){switch(e.type){case"interval":return WhereClause_$("makeSqlInterval",this._compileNode(e.value),"interval-qualifier"===e.qualifier.type?WhereClause_b(e.qualifier):WhereClause_A(e.qualifier),WhereClause_F(e.op));case"case-expression":return"simple"===e.format?this._compileSimpleCase(e):this._compileSearchedCase(e);case"parameter":return WhereClause_$("lookup",WhereClause_F(e.value.toLowerCase()),WhereClause_U);case"expression-list":return`[${e.value.map((e=>this._compileNode(e))).join(", ")}]`;case"unary-expression":return WhereClause_$("ternaryNot",this._compileNode(e.expr));case"binary-expression":switch(e.operator){case"AND":return WhereClause_$("ternaryAnd",this._compileNode(e.left),this._compileNode(e.right));case"OR":return WhereClause_$("ternaryOr",this._compileNode(e.left),this._compileNode(e.right));case"IS":if("null"!==e.right.type)throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.UnsupportedIsRhs);return WhereClause_$("equalsNull",this._compileNode(e.left));case"ISNOT":if("null"!==e.right.type)throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.UnsupportedIsRhs);return`!${WhereClause_$("equalsNull",this._compileNode(e.left))}`;case"IN":return this._compileInExpr(e.left,e.right);case"NOT IN":return WhereClause_$("ternaryNot",this._compileInExpr(e.left,e.right));case"BETWEEN":return WhereClause_$("between",this._compileNode(e.left),this._compileNode(e.right));case"NOTBETWEEN":return WhereClause_$("notbetween",this._compileNode(e.left),this._compileNode(e.right));case"LIKE":return WhereClause_$("applyLike",this._compileNode(e.left),this._compileNode(e.right),WhereClause_F(e.escape));case"NOT LIKE":return WhereClause_$("ternaryNot",WhereClause_$("applyLike",this._compileNode(e.left),this._compileNode(e.right),WhereClause_F(e.escape)));case"<>":case"<":case">":case">=":case"<=":case"=":return WhereClause_$("compare",WhereClause_F(e.operator),this._compileNode(e.left),this._compileNode(e.right));case"*":case"-":case"+":case"/":case"||":return WhereClause_$("calculate",WhereClause_F(e.operator),this._compileNode(e.left),this._compileNode(e.right),WhereClause_q);default:throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.UnsupportedOperator,{operator:e.operator})}case"null":case"boolean":case"string":case"number":return WhereClause_F(e.value);case"time":try{return this._compileRefStaticData(this._storeStaticData(O(e.value)))}catch{return WhereClause_$("evaluateTime",WhereClause_F(e.value))}case"date":try{return this._compileRefStaticData(this._storeStaticData($(e.value,"unknown")))}catch{return WhereClause_$("evaluateDate",WhereClause_F(e.value),WhereClause_F("unknown"))}case"timestamp":try{return this._compileRefStaticData(this._storeStaticData(D(e.value,"unknown")))}catch{return WhereClause_$("evaluateTimestamp",WhereClause_F(e.value),WhereClause_F("unknown"))}case"current-time":return"date"===e.mode?WhereClause_$("currentDate",WhereClause_q):"time"===e.mode?WhereClause_$("currentTime",WhereClause_q):WhereClause_$("currentTimestamp",WhereClause_q);case"current-user":return WhereClause_C;case"column-reference":return WhereClause_$("featureValue",WhereClause_k,WhereClause_F(e.column),WhereClause_j,WhereClause_V);case"data-type":return WhereClause_O(e.value);case"function":return WhereClause_$("evaluateFunction",WhereClause_F(e.name),this._compileNode(e.args),WhereClause_q)}throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.UnsupportedSyntax,{node:e.type})}}class WhereClause_R{static create(e,t={}){return new WhereClause_R(e,t.fieldsIndex,t.timeZone??void 0,t.currentUser)}constructor(e,t,r="UTC",a=null){this.fieldsIndex=t,this.timeZone=r,this.currentUser=a,this.parameters={},this._compiledExecutor=null,this._hasDateFunctions=void 0,this.parseTree=WhereGrammar_e.parse(e);const{isStandardized:s,isAggregate:n,currentUserRequired:i,referencedFieldNames:o}=this._extractExpressionInfo(t);this._referencedFieldNames=o,this.isStandardized=s,this.isAggregate=n,this.currentUserRequired=i}static convertValueToStorageFormat(e,t=null){if(null===t)return (0,guards/* isDate */.$P)(e)?e.getTime():y(e)?e.toMillis():j(e)?e.toStorageFormat():x(e)?e.toStorageString():S(e)?e.toStorageFormat():e;switch(t){case"date":return (0,guards/* isDate */.$P)(e)?e.getTime():y(e)?e.toMillis():j(e)?e.toMilliseconds():S(e)?e.toNumber():e;case"date-only":return (0,guards/* isDate */.$P)(e)?DateOnly/* DateOnly */.n.fromDateJS(e).toString():j(e)?DateOnly/* DateOnly */.n.fromSqlTimeStampOffset(e).toString():y(e)?DateOnly/* DateOnly */.n.fromDateTime(e).toString():e;case"time-only":return (0,guards/* isDate */.$P)(e)?TimeOnly/* TimeOnly */.k.fromDateJS(e).toStorageString():y(e)?TimeOnly/* TimeOnly */.k.fromDateTime(e).toStorageString():j(e)?TimeOnly/* TimeOnly */.k.fromSqlTimeStampOffset(e).toStorageString():x(e)?e.toStorageString():e;case"timestamp-offset":if((0,guards/* isDate */.$P)(e))return SqlTimestampOffset/* SqlTimeStampOffset */.g.fromJSDate(e).toStorageFormat();if(y(e))return SqlTimestampOffset/* SqlTimeStampOffset */.g.fromDateTime(e).toStorageFormat();if(j(e))return e.toStorageFormat()}return e}get fieldNames(){return this._referencedFieldNames}testSet(e,t=re,r=this.currentUser){return!!this._evaluateNode(this.parseTree,null,t,e,r)}calculateValue(e,t=re,r=this.currentUser){const a=this._evaluateNode(this.parseTree,e,t,null,r);return SqlInterval_a.isInterval(a)?a.valueInMilliseconds()/864e5:a}tryGetCompiledExecutor(){if(null!=this._compiledExecutor)return this._compiledExecutor;if((0,has/* default */.A)("esri-csp-restrictions"))return null;const e=new WhereClause_L(this.parseTree);return this._compiledExecutor=e.compile(),this._compiledExecutor}calculateValueCompiled(e,t=re,r=this.currentUser){const a=this.tryGetCompiledExecutor();return null==a?this.calculateValue(e,t):a(e,this.parameters,t,this.fieldsIndex,this.timeZone,r??null)}testFeature(e,t=re,r=this.currentUser){return!!this._evaluateNode(this.parseTree,e,t,null,r)}testFeatureCompiled(e,t=re,r=this.currentUser){const a=this.tryGetCompiledExecutor();return null==a?this.testFeature(e,t):!!a(e,this.parameters,t,this.fieldsIndex,this.timeZone,r??null)}get hasDateFunctions(){return null!=this._hasDateFunctions||(this._hasDateFunctions=!1,WhereGrammar_r(this.parseTree,(e=>{"current-time"===e.type?this._hasDateFunctions=!0:"function"===e.type&&(this._hasDateFunctions=this._hasDateFunctions||WhereClause_x.has(e.name.toLowerCase()))}))),this._hasDateFunctions}getFunctions(){const e=new Set;return WhereGrammar_r(this.parseTree,(t=>{"function"===t.type&&e.add(t.name.toLowerCase())})),Array.from(e)}getExpressions(){const e=new Map;return WhereGrammar_r(this.parseTree,(t=>{if("function"===t.type){const r=t.name.toLowerCase(),a=t.args.value[0];if("column-reference"===a.type){const t=a.column,s=`${r}-${t}`;e.has(s)||e.set(s,{aggregateType:r,field:t})}}})),[...e.values()]}getVariables(){const e=new Set;return WhereGrammar_r(this.parseTree,(t=>{"parameter"===t.type&&e.add(t.value.toLowerCase())})),Array.from(e)}_extractExpressionInfo(t){const r=[],a=new Set;let s=!0,n=!1,i=!1;return WhereGrammar_r(this.parseTree,(o=>{switch(o.type){case"column-reference":{const e=t?.get(o.column);let s,n;e?s=n=e.name??"":(n=o.column,s=n.toLowerCase()),a.has(s)||(a.add(s),r.push(n)),o.column=n;break}case"current-user":i=!0;break;case"function":{const{name:t,args:r}=o,a=r.value.length;s&&(s=StandardizedFunctions_p(t,a)),!1===n&&(n=(0,AggregateFunctions/* isAggregate */.M)(t,a));break}}})),{referencedFieldNames:Array.from(r),isStandardized:s,isAggregate:n,currentUserRequired:i}}_evaluateNode(r,o,u,l,c){let p;switch(r.type){case"interval":{const e=this._evaluateNode(r.value,o,u,l,c);return SqlInterval_a.createFromValueAndQualifier(e,r.qualifier,r.op)}case"case-expression":if("simple"===r.format){const e=this._evaluateNode(r.operand,o,u,l,c);for(let t=0;t<r.clauses.length;t++)if(sqlCompareUtils_I(e,this._evaluateNode(r.clauses[t].operand,o,u,l,c),"="))return this._evaluateNode(r.clauses[t].value,o,u,l,c);if(null!==r.else)return this._evaluateNode(r.else,o,u,l,c)}else{for(let e=0;e<r.clauses.length;e++)if(WhereClause_Z(this._evaluateNode(r.clauses[e].operand,o,u,l,c)))return this._evaluateNode(r.clauses[e].value,o,u,l,c);if(null!==r.else)return this._evaluateNode(r.else,o,u,l,c)}return null;case"parameter":return p=this.parameters[r.value.toLowerCase()],(0,guards/* isDate */.$P)(p)?luxon/* DateTime */.c9.fromJSDate(p):null!=p&&"object"==typeof p&&"toDateTime"in p?p.toDateTime():p;case"expression-list":{const e=[];for(const t of r.value)e.push(this._evaluateNode(t,o,u,l,c));return e}case"unary-expression":return WhereClause_J(this._evaluateNode(r.expr,o,u,l,c));case"binary-expression":switch(r.operator){case"AND":return WhereClause_B(this._evaluateNode(r.left,o,u,l,c),this._evaluateNode(r.right,o,u,l,c));case"OR":return WhereClause_M(this._evaluateNode(r.left,o,u,l,c),this._evaluateNode(r.right,o,u,l,c));case"IS":if("null"!==r.right.type)throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.UnsupportedIsRhs);return null===this._evaluateNode(r.left,o,u,l,c);case"ISNOT":if("null"!==r.right.type)throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.UnsupportedIsRhs);return null!==this._evaluateNode(r.left,o,u,l,c);case"IN":{const e=WhereClause_z(this._evaluateNode(r.right,o,u,l,c));return WhereClause_W(this._evaluateNode(r.left,o,u,l,c),e)}case"NOT IN":{const e=WhereClause_z(this._evaluateNode(r.right,o,u,l,c));return WhereClause_J(WhereClause_W(this._evaluateNode(r.left,o,u,l,c),e))}case"BETWEEN":{const e=this._evaluateNode(r.left,o,u,l,c),t=this._evaluateNode(r.right,o,u,l,c);return null==e||null==t[0]||null==t[1]?null:sqlCompareUtils_I(e,t[0],">=")&&sqlCompareUtils_I(e,t[1],"<=")}case"NOTBETWEEN":{const e=this._evaluateNode(r.left,o,u,l,c),t=this._evaluateNode(r.right,o,u,l,c);return null==e||null==t[0]||null==t[1]?null:sqlCompareUtils_I(e,t[0],"<")||sqlCompareUtils_I(e,t[1],">")}case"LIKE":return WhereClause_Y(this._evaluateNode(r.left,o,u,l,c),this._evaluateNode(r.right,o,u,l,c),r.escape);case"NOT LIKE":return WhereClause_J(WhereClause_Y(this._evaluateNode(r.left,o,u,l,c),this._evaluateNode(r.right,o,u,l,c),r.escape));case"<>":case"<":case">":case">=":case"<=":case"=":return sqlCompareUtils_I(this._evaluateNode(r.left,o,u,l,c),this._evaluateNode(r.right,o,u,l,c),r.operator);case"-":case"+":case"*":case"/":case"||":return sqlArithmeticUtils_d(r.operator,this._evaluateNode(r.left,o,u,l,c),this._evaluateNode(r.right,o,u,l,c),this.timeZone)}case"null":case"boolean":case"string":case"number":return r.value;case"date":return r.parsedValue??=$(r.value,"unknown"),r.parsedValue;case"timestamp":return r.parsedValue??=D(r.value,"unknown"),r.parsedValue;case"time":return O(r.value);case"current-time":return"date"===r.mode?WhereClause_K(this.timeZone):"time"===r.mode?WhereClause_Q(this.timeZone):WhereClause_G(this.timeZone);case"current-user":return c??null;case"column-reference":return te(o,r.column,this.fieldsIndex,u);case"data-type":return r.value;case"function":{if(this.isAggregate&&(0,AggregateFunctions/* isAggregate */.M)(r.name,r.args.value.length)){const e=[];for(const t of r.args?.value||[]){const r=[];for(const e of l||[])r.push(this._evaluateNode(t,e,u,null,c));e.push(r)}return (0,AggregateFunctions/* aggregateFunction */.s)(r.name,e)}const a=this._evaluateNode(r.args,o,u,l,c);return StandardizedFunctions_E(r.name,a,this.timeZone)}}throw new errorSupport/* SqlError */.L8(errorSupport/* SqlErrorCodes */.Z7.UnsupportedSyntax,{node:r.type})}}function WhereClause_Z(e){return!0===e}function WhereClause_z(e){return Array.isArray(e)?e:[e]}function WhereClause_J(e){return null!==e?!0!==e:null}function WhereClause_B(e,t){return null!=e&&null!=t?!0===e&&!0===t:!1!==e&&!1!==t&&null}function WhereClause_M(e,t){return null!=e&&null!=t?!0===e||!0===t:!0===e||!0===t||null}function WhereClause_W(e,t){if(null==e)return null;let r=!1;for(const a of t)if(null==a)r=null;else{if(e===a){r=!0;break}if(sqlCompareUtils_O(e)&&sqlCompareUtils_O(a)&&(r=sqlCompareUtils_I(e,a,"="),r))break}return r}function WhereClause_G(e){return T(new Date,e)}function WhereClause_K(e){return DateOnly/* DateOnly */.n.fromNow(e)}function WhereClause_Q(e){const t=T(new Date,e);return TimeOnly/* TimeOnly */.k.fromDateTime(t)}const WhereClause_P="-[]/{}()*+?.\\^$|";var WhereClause_H;function WhereClause_X(e,t){const r=t;let a="",s=WhereClause_H.Normal;for(let n=0;n<e.length;n++){const t=e.charAt(n);switch(s){case WhereClause_H.Normal:t===r?s=WhereClause_H.Escaped:WhereClause_P.includes(t)?a+="\\"+t:a+="%"===t?".*":"_"===t?".":t;break;case WhereClause_H.Escaped:WhereClause_P.includes(t)?a+="\\"+t:a+=t,s=WhereClause_H.Normal}}return new RegExp("^"+a+"$","m")}function WhereClause_Y(e,t,r){if(null==e)return null;return WhereClause_X(t,r).test(e)}function ee(e){return e&&"object"==typeof e.attributes}function te(e,t,a,s){if("getAttributeSQL"in s)return s.getAttributeSQL(e,t);const n=s.getAttribute(e,t);if(null==n)return n;const i=a?.get(t);switch(i?.type){case"esriFieldTypeDate":case"date":return T(new Date(n),a?.getLuxonTimeZone(i.name)??luxon/* FixedOffsetZone */.mQ.utcInstance);case"esriFieldTypeDateOnly":case"date-only":return DateOnly/* DateOnly */.n.fromReader(n);case"esriFieldTypeTimeOnly":case"time-only":return TimeOnly/* TimeOnly */.k.fromReader(n);case"esriFieldTypeTimestampOffset":case"timestamp-offset":return new SqlTimestampOffset/* SqlTimeStampOffset */.g(n)}return n}!function(e){e[e.Normal=0]="Normal",e[e.Escaped=1]="Escaped"}(WhereClause_H||(WhereClause_H={}));const re={getAttribute:(e,t)=>(ee(e)?e.attributes:e)[t]};


/***/ }),

/***/ 6986:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WhereClauseCache: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _LRUCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89926);
/* harmony import */ var _WhereClause_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46826);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class r{constructor(e,r){this._cache=new _LRUCache_js__WEBPACK_IMPORTED_MODULE_0__/* .LRUCache */ .q(e),this._invalidCache=new _LRUCache_js__WEBPACK_IMPORTED_MODULE_0__/* .LRUCache */ .q(r)}get(t,r){const i=`${r?.uid}:${t}`,c=this._cache.get(i);if(c)return c;if(null!=this._invalidCache.get(i))return null;try{const c=_WhereClause_js__WEBPACK_IMPORTED_MODULE_1__["default"].create(t,{fieldsIndex:r});return this._cache.put(i,c),c}catch(n){return this._invalidCache.put(i,n),null}}getError(t,e){const r=`${e?.uid}:${t}`;return this._invalidCache.get(r)??null}}


/***/ }),

/***/ 43023:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L8: () => (/* binding */ n),
/* harmony export */   Z7: () => (/* binding */ a)
/* harmony export */ });
/* unused harmony export sqlErrorMessages */
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96274);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var a;!function(e){e.InvalidFunctionParameters="InvalidFunctionParameters",e.InvalidValueForAggregateFunction="InvalidValueForAggregateFunction",e.UnsupportedSqlFunction="UnsupportedSqlFunction",e.UnsupportedOperator="UnsupportedOperator",e.UnsupportedSyntax="UnsupportedSyntax",e.UnsupportedIsRhs="UnsupportedIsRhs",e.UnsupportedIsLhs="UnsupportedIsLhs",e.InvalidDataType="InvalidDataType",e.CannotCastValue="CannotCastValue",e.FunctionNotRecognized="FunctionNotRecognized",e.InvalidTime="InvalidTime",e.InvalidParameterCount="InvalidParameterCount",e.InvalidTimeStamp="InvalidTimeStamp",e.InvalidDate="InvalidDate",e.InvalidOperator="InvalidOperator",e.IllegalInterval="IllegalInterval",e.YearMonthIntervals="YearMonthIntervals",e.PrimarySecondaryQualifiers="PrimarySecondaryQualifiers",e.MissingStatisticParameters="MissingStatisticParameters"}(a||(a={}));const t={[a.InvalidValueForAggregateFunction]:"Invalid value used in aggregate function",[a.MissingStatisticParameters]:"Statistic does not have 1 or 0 Parameters",[a.InvalidFunctionParameters]:"Invalid parameters for call to {function}",[a.UnsupportedIsLhs]:"Unsupported left hand expression in is statement",[a.UnsupportedIsRhs]:"Unsupported right hand expression in is statement",[a.UnsupportedOperator]:"Unsupported operator - {operator}",[a.UnsupportedSyntax]:"Unsupported syntax - {node}",[a.UnsupportedSqlFunction]:"Sql function not found = {function}",[a.InvalidDataType]:"Invalid sql data type",[a.InvalidDate]:"Invalid date encountered",[a.InvalidOperator]:"Invalid operator encountered",[a.InvalidTime]:"Invalid time encountered",[a.IllegalInterval]:"Illegal interval",[a.FunctionNotRecognized]:"Function not recognized",[a.InvalidTimeStamp]:"Invalid timestamp encountered",[a.InvalidParameterCount]:"Invalid parameter count for call to {name}",[a.PrimarySecondaryQualifiers]:"Primary and Secondary SqlInterval qualifiers not supported",[a.YearMonthIntervals]:"Year-Month Intervals not supported",[a.CannotCastValue]:"Cannot cast value to the required data type"};class n extends Error{constructor(a,r){super((0,_string_js__WEBPACK_IMPORTED_MODULE_0__/* .replace */ .HC)(t[a],r)),this.declaredRootClass="esri.arcade.featureset.support.sqlerror",Error.captureStackTrace&&Error.captureStackTrace(this,n)}}


/***/ }),

/***/ 27243:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const t={convertToGEGeometry:s,exportPoint:n,exportPolygon:o,exportPolyline:a,exportMultipoint:c,exportExtent:m};function s(t,s){return null==s?null:t.convertJSONToGeometry(s)}class i{constructor(t,s,i){this.x=t,this.y=s,this.spatialReference=i,this.z=void 0,this.m=void 0}}function n(t,s,n){const e=new i(t.getPointX(s),t.getPointY(s),n),o=t.hasZ(s),h=t.hasM(s);return o&&(e.z=t.getPointZ(s)),h&&(e.m=t.getPointM(s)),e}class e{constructor(t,s,i,n){this.rings=t,this.spatialReference=s,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)}}function o(t,s,i){return new e(t.exportPaths(s),i,t.hasZ(s),t.hasM(s))}class h{constructor(t,s,i,n){this.paths=t,this.spatialReference=s,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)}}function a(t,s,i){return new h(t.exportPaths(s),i,t.hasZ(s),t.hasM(s))}class r{constructor(t,s,i,n){this.points=t,this.spatialReference=s,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)}}function c(t,s,i){return new r(t.exportPoints(s),i,t.hasZ(s),t.hasM(s))}class x{constructor(t,s,i,n,e){this.xmin=t,this.ymin=s,this.xmax=i,this.ymax=n,this.spatialReference=e,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}function m(t,s,i){const n=t.hasZ(s),e=t.hasM(s),o=new x(t.getXMin(s),t.getYMin(s),t.getXMax(s),t.getYMax(s),i);if(n){const i=t.getZExtent(s);o.zmin=i.vmin,o.zmax=i.vmax}if(e){const i=t.getMExtent(s);o.mmin=i.vmin,o.mmax=i.vmax}return o}


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

/***/ 20458:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "do": () => (/* binding */ L),
  ux: () => (/* binding */ V)
});

// UNUSED EXPORTS: Feature

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/compilerUtils.js
var compilerUtils = __webpack_require__(73345);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(6267);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/unitUtils.js
var unitUtils = __webpack_require__(92976);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/support/jsonUtils.js
var jsonUtils = __webpack_require__(59372);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projectionUtils.js + 2 modules
var projectionUtils = __webpack_require__(68490);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/aaBoundingBox.js
var aaBoundingBox = __webpack_require__(4675);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/aaBoundingRect.js
var aaBoundingRect = __webpack_require__(80510);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/boundsUtils.js
var boundsUtils = __webpack_require__(36358);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/jsonUtils.js
var support_jsonUtils = __webpack_require__(1171);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var spatialReferenceUtils = __webpack_require__(87926);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/featureConversionUtils.js
var featureConversionUtils = __webpack_require__(21355);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/data/attributeSupport.js
var attributeSupport = __webpack_require__(25684);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/data/geometryUtils.js
var geometryUtils = __webpack_require__(95694);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/data/projectionSupport.js
var projectionSupport = __webpack_require__(23783);
;// ../node_modules/@arcgis/core/layers/graphics/data/QueryEngineCache.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const t=5;class QueryEngineCache_e{constructor(){this._storage=new Map,this._purgeInterval=t,this._sweep=()=>{if(this._timer=void 0,!this._storage)return;const t=1e3*this._purgeInterval,e=performance.now()-t;for(const[s,r]of this._storage){if(!(r.time<e))return void(this._storage.size>0&&(this._timer=setTimeout(this._sweep,t)));this._storage.delete(s)}}}destroy(){this._storage?.clear(),this._storage=null,clearTimeout(this._timer)}put(t,e){this._storage?.set(t,new r(e)),this._scheduleSweep()}get(t){const e=this._storage?.get(t);if(e)return this._storage?.delete(t),e.time=performance.now(),this._storage?.set(t,e),e.items}clear(){this._storage?.clear()}_scheduleSweep(){this._storage&&(this._timer??=setTimeout(this._sweep,1e3*this._purgeInterval))}get test(){}}let s=0;class r{constructor(t){this.items=t,this.time=performance.now(),this.id=s++}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/data/QueryEngineCapabilities.js
var QueryEngineCapabilities = __webpack_require__(22567);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/data/QueryEngineResult.js + 1 modules
var QueryEngineResult = __webpack_require__(41250);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/data/queryUtils.js
var queryUtils = __webpack_require__(35746);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/data/queryValidationUtils.js
var queryValidationUtils = __webpack_require__(41607);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/data/spatialQuerySupport.js + 2 modules
var spatialQuerySupport = __webpack_require__(70759);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/data/timeSupport.js
var timeSupport = __webpack_require__(71339);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/FieldsIndex.js
var FieldsIndex = __webpack_require__(79005);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/support/Scheduler.js
var Scheduler = __webpack_require__(22167);
;// ../node_modules/@arcgis/core/layers/graphics/data/QueryEngine.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const N="unsupported-query";class J{constructor(e,t=null,s,i,r){this.attributes=e,this.geometry=s,this.centroid=i,this.filterFlags=r,this.groupId=-1,this.displayId=t}}class L{constructor(e){this._changeHandle=null,this.capabilities={query:QueryEngineCapabilities/* queryCapabilities */.F},this.geometryType=e.geometryType,this.hasM=!!e.hasM,this.hasZ=!!e.hasZ,this.spatialReference=e.spatialReference,this.definitionExpression=e.definitionExpression,this.featureStore=e.featureStore,this.aggregateAdapter=e.aggregateAdapter,this._cache=e.cache??new QueryEngineCache_e,this.timeInfo=e.timeInfo,this.featureIdInfo=e.featureIdInfo,"object-id"===e.featureIdInfo.type&&(this.objectIdField=e.featureIdInfo.fieldName),this._changeHandle=this.featureStore.events.on("changed",(()=>this._clearCache())),this.fieldsIndex=(0,jsonUtils/* isSerializable */.W)(e.fieldsIndex)?e.fieldsIndex:FieldsIndex/* default */.A.fromJSON(e.fieldsIndex),!e.availableFields||1===e.availableFields.length&&"*"===e.availableFields[0]?this.availableFields=new Set(this.fieldsIndex.fields.map((e=>e.name))):this.availableFields=new Set(e.availableFields.map((e=>this.fieldsIndex.get(e)?.name)).filter((e=>null!=e))),e.scheduler&&e.priority&&(this._frameTask=e.scheduler.registerTask(e.priority))}destroy(){this._changeHandle=(0,maybe/* removeMaybe */.xt)(this._changeHandle),this._frameTask=(0,maybe/* removeMaybe */.xt)(this._frameTask),this._clearCache(),(0,maybe/* destroyMaybe */.pR)(this._cache)}get featureAdapter(){return this.featureStore.featureAdapter}_clearCache(){this._cache.clear(),this._allFeaturesPromise=null,this._timeExtentPromise=null,this._fullExtentPromise=null}async executeQuery(e,t){const s=(0,promiseUtils/* signalFromSignalOrOptions */.Mq)(t);try{const t=await this._executeQuery(e,{},s);return await t.createQueryResponse()}catch(i){if(i!==queryUtils/* queryEngineEmptyResult */.v8)throw i;return new QueryEngineResult/* QueryEngineResult */.G([],e,this).createQueryResponse()}}async executeQueryForCount(e={},t){const s=(0,promiseUtils/* signalFromSignalOrOptions */.Mq)(t);try{return(await this._executeQuery(e,{returnGeometry:!1,returnCentroid:!1,outSR:null},s)).createQueryResponseForCount()}catch(i){if(i!==queryUtils/* queryEngineEmptyResult */.v8)throw i;return 0}}async executeQueryForExtent(e,t){const s=(0,promiseUtils/* signalFromSignalOrOptions */.Mq)(t),i=e.outSR;try{const t=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},s),r=t.size;if(!r)return{count:0,extent:null};return{count:r,extent:await this._getBounds(t.items,t.spatialReference,i||this.spatialReference)}}catch(r){if(r===queryUtils/* queryEngineEmptyResult */.v8)return{count:0,extent:null};throw r}}async executeQueryForIds(e,t){return this.executeQueryForIdSet(e,t).then((e=>Array.from(e)))}async executeQueryForIdSet(e,t){const s=(0,promiseUtils/* signalFromSignalOrOptions */.Mq)(t);try{const t=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},s),i=t.items,r=new Set;return await this.reschedule((()=>{for(const e of i)r.add(t.featureAdapter.getObjectId(e))}),s),r}catch(i){if(i===queryUtils/* queryEngineEmptyResult */.v8)return new Set;throw i}}async executeQueryForLatestObservations(e,t){const s=(0,promiseUtils/* signalFromSignalOrOptions */.Mq)(t);if(!this.timeInfo?.trackIdField)throw new Error/* default */.A(N,"Missing timeInfo or timeInfo.trackIdField",{query:e,timeInfo:this.timeInfo});try{const t=await this._executeQuery(e,{},s);return await this.reschedule((()=>this._filterLatest(t)),s),await t.createQueryResponse()}catch(r){if(r!==queryUtils/* queryEngineEmptyResult */.v8)throw r;return new QueryEngineResult/* QueryEngineResult */.G([],e,this).createQueryResponse()}}async executeAttributeBinsQuery(e,t){const s=(0,promiseUtils/* signalFromSignalOrOptions */.Mq)(t);let i;e=(0,lang/* clone */.o8)(e);try{e=await this.schedule((()=>(0,queryUtils/* normalizeAttributeBinsQuery */.iJ)(e,this.definitionExpression,this.spatialReference)),s),e=await this.reschedule((()=>(0,queryValidationUtils/* validateAttributeBinsQuery */.FQ)(e,{availableFields:this.availableFields,fieldsIndex:this.fieldsIndex,geometryType:this.geometryType,spatialReference:this.spatialReference})),s);const t=await this.reschedule((()=>this._executeSceneFilterQuery(e,s)),s);i=await this.reschedule((()=>this._executeGeometryQuery(e,t,s)),s),await this.reschedule((()=>this._executeAggregateIdsQuery(i)),s),await this.reschedule((()=>this.executeObjectIdsQuery(i)),s),await this.reschedule((()=>this.executeTimeQuery(i)),s),await this.reschedule((()=>this.executeAttributesQuery(i)),s)}catch(a){if(a!==queryUtils/* queryEngineEmptyResult */.v8)throw a;i=new QueryEngineResult/* QueryEngineResult */.G([],e,this)}return i.createQueryBinsResponse(e)}async executeQueryForSummaryStatistics(e={},t,s){const i=(0,promiseUtils/* signalFromSignalOrOptions */.Mq)(s),{field:r,normalizationField:a,valueExpression:n}=t;return(await this._executeQueryForStatistics(e,{field:r,normalizationField:a,valueExpression:n},i)).createSummaryStatisticsResponse(t)}async executeQueryForUniqueValues(e={},t,s){const i=(0,promiseUtils/* signalFromSignalOrOptions */.Mq)(s),{field:r,field2:a,field3:n,valueExpression:l}=t;return(await this._executeQueryForStatistics(e,{field:r,field2:a,field3:n,valueExpression:l},i)).createUniqueValuesResponse(t)}async executeQueryForClassBreaks(e={},t,s){const i=(0,promiseUtils/* signalFromSignalOrOptions */.Mq)(s),{field:r,normalizationField:a,valueExpression:n}=t;return(await this._executeQueryForStatistics(e,{field:r,normalizationField:a,valueExpression:n},i)).createClassBreaksResponse(t)}async executeQueryForHistogram(e={},t,s){const i=(0,promiseUtils/* signalFromSignalOrOptions */.Mq)(s),{field:r,normalizationField:a,valueExpression:n}=t;return(await this._executeQueryForStatistics(e,{field:r,normalizationField:a,valueExpression:n},i)).createHistogramResponse(t)}async fetchRecomputedExtents(e){const t=(0,promiseUtils/* signalFromSignalOrOptions */.Mq)(e);this._timeExtentPromise||=(0,timeSupport/* getTimeExtent */.W)(this.timeInfo,this.featureStore);const[s,i]=await Promise.all([this._getFullExtent(),this._timeExtentPromise]);return (0,promiseUtils/* throwIfAborted */.Te)(t),{fullExtent:s,timeExtent:i}}async _getBounds(e,t,s){const i=(0,aaBoundingBox/* set */.hZ)((0,aaBoundingBox/* create */.vt)(),aaBoundingBox/* negativeInfinity */.qv);await this.featureStore.forEachBounds(e,(e=>(0,aaBoundingBox/* expandWithAABB */.RF)(i,e)));const r={xmin:i[0],ymin:i[1],xmax:i[3],ymax:i[4],spatialReference:(0,geometryUtils/* cleanFromGeometryEngine */.ag)(this.spatialReference)};this.hasZ&&isFinite(i[2])&&isFinite(i[5])&&(r.zmin=i[2],r.zmax=i[5],r.hasZ=!0);const a=(0,projectionSupport/* project */.Cv)(r,t,s);if(a.spatialReference=(0,geometryUtils/* cleanFromGeometryEngine */.ag)(s),a.xmax-a.xmin===0){const e=(0,unitUtils/* getMetersPerUnitForSR */.GA)(a.spatialReference);a.xmin-=e,a.xmax+=e}if(a.ymax-a.ymin===0){const e=(0,unitUtils/* getMetersPerUnitForSR */.GA)(a.spatialReference);a.ymin-=e,a.ymax+=e}if(this.hasZ&&null!=a.zmin&&null!=a.zmax&&a.zmax-a.zmin===0){const e=(0,unitUtils/* getMetersPerUnitForSR */.GA)(a.spatialReference);a.zmin-=e,a.zmax+=e}return a}_getFullExtent(){return this._fullExtentPromise||="getFullExtent"in this.featureStore&&this.featureStore.getFullExtent?Promise.resolve(this.featureStore.getFullExtent(this.spatialReference)):this._getAllFeatures().then((e=>this._getBounds(e,this.spatialReference,this.spatialReference))),this._fullExtentPromise}async schedule(e,t){return this._frameTask?.schedule(e,t)??e(Scheduler/* noBudget */.Bb)}async reschedule(e,t){return this._frameTask?.reschedule(e,t)??e(Scheduler/* noBudget */.Bb)}async _getAllFeaturesQueryEngineResult(e){return new QueryEngineResult/* QueryEngineResult */.G(await this._getAllFeatures(),e,this)}async _getAllFeatures(){if(null==this._allFeaturesPromise){const e=[];this._allFeaturesPromise=(async()=>await this.featureStore.forEach((t=>e.push(t))))().then((()=>(0,compilerUtils/* toConst */.zI)(e)))}const e=this._allFeaturesPromise,t=await e;return e===this._allFeaturesPromise?t.slice():this._getAllFeatures()}async _executeQuery(e,t,s){e=(0,lang/* clone */.o8)(e),e=await this.schedule((()=>(0,queryUtils/* normalizeQuery */.GC)(e,this.definitionExpression,this.spatialReference)),s),e=await this.reschedule((()=>(0,queryValidationUtils/* validateQuery */.B4)(e,{availableFields:this.availableFields,fieldsIndex:this.fieldsIndex,geometryType:this.geometryType,spatialReference:this.spatialReference})),s),e={...e,...t};const i=await this.reschedule((()=>this._executeSceneFilterQuery(e,s)),s),a=await this.reschedule((()=>this._executeGeometryQuery(e,i,s)),s);return await this.reschedule((()=>this._executeAggregateIdsQuery(a)),s),await this.reschedule((()=>this.executeObjectIdsQuery(a)),s),await this.reschedule((()=>this.executeTimeQuery(a)),s),await this.reschedule((()=>this.executeAttributesQuery(a)),s),a}async _executeSceneFilterQuery(e,t){if(null==e.sceneFilter)return null;const{outSR:s,returnGeometry:i,returnCentroid:r}=e,a=this.featureStore.featureSpatialReference,n=e.sceneFilter.geometry,u=null==a||(0,spatialReferenceUtils/* equals */.aI)(a,n.spatialReference)?n:(0,projectionSupport/* project */.Cv)(n,a);if(!u)return null;const l=i||r,o=(0,spatialReferenceUtils/* isValid */.fn)(s)&&!(0,spatialReferenceUtils/* equals */.aI)(this.spatialReference,s)&&l?async e=>this._project(e,s):e=>e,h=this.featureAdapter,c=await this.reschedule((()=>this.searchFeatures(V(u))),t);if("disjoint"===e.sceneFilter.spatialRelationship){if(!c.length)return null;const s=new Set;for(const e of c)s.add(h.getObjectId(e));const i=await this.reschedule((()=>this._getAllFeatures()),t),r=await this.reschedule((async()=>{const r=await (0,spatialQuerySupport/* getSpatialQueryOperator */.xt)("esriSpatialRelDisjoint",u,this.geometryType,this.hasZ,this.hasM),a=e=>!s.has(h.getObjectId(e))||r(h.getGeometry(e)),n=await this.runSpatialFilter(i,a,t);return new QueryEngineResult/* QueryEngineResult */.G(n,e,this)}),t);return o(r)}if(!c.length)return new QueryEngineResult/* QueryEngineResult */.G([],e,this);if(this._canExecuteSinglePass(u,e))return o(new QueryEngineResult/* QueryEngineResult */.G(c,e,this));const m=await (0,spatialQuerySupport/* getSpatialQueryOperator */.xt)("esriSpatialRelContains",u,this.geometryType,this.hasZ,this.hasM),f=await this.runSpatialFilter(c,(e=>m(h.getGeometry(e))),t);return o(new QueryEngineResult/* QueryEngineResult */.G(f,e,this))}async _executeGeometryQuery(s,i,r){if(null!=i&&0===i.items.length)return i;const{geometry:a,outSR:n,returnGeometry:u,returnCentroid:l}=s,o=i?null:this._getCacheKey(s),h=o?this._cache.get(o):null;if(h)return new QueryEngineResult/* QueryEngineResult */.G(h,s,this);const c=(0,spatialReferenceUtils/* isValid */.fn)(n)&&!(0,spatialReferenceUtils/* equals */.aI)(this.spatialReference,n),m=u||l,f=async e=>(c&&m&&await this._project(e,n),o&&this._cache.put(o,e.items),e),d=this.featureStore.featureSpatialReference,y=!a||null==d||(0,spatialReferenceUtils/* equals */.aI)(d,a.spatialReference)?a:(0,projectionSupport/* project */.Cv)(a,d);if(!y)return f(null!=i?i:await this._getAllFeaturesQueryEngineResult(s));const p=this.featureAdapter;let g=await this.reschedule((()=>this.searchFeatures(V(a))),r);const x=s.spatialRel??"esriSpatialRelIntersects";if("esriSpatialRelDisjoint"===x){if(!g.length)return f(null!=i?i:await this._getAllFeaturesQueryEngineResult(s));const e=new Set;for(const s of g)e.add(p.getObjectId(s));const t=null!=i?i.items:await this.reschedule((()=>this._getAllFeatures()),r),a=await this.reschedule((async()=>{const i=await (0,spatialQuerySupport/* getSpatialQueryOperator */.xt)(x,y,this.geometryType,this.hasZ,this.hasM),a=t=>!e.has(p.getObjectId(t))||i(p.getGeometry(t)),n=await this.runSpatialFilter(t,a,r);return new QueryEngineResult/* QueryEngineResult */.G(n,s,this)}),r);return f(a)}if(null!=i){const s=new arrayUtils/* PositionHint */.vW;g=g.filter((t=>(0,arrayUtils/* indexOf */.qh)(i.items,t,i.items.length,s)>=0))}if(!g.length){const e=new QueryEngineResult/* QueryEngineResult */.G([],s,this);return o&&this._cache.put(o,e.items),e}if(this._canExecuteSinglePass(y,s))return f(new QueryEngineResult/* QueryEngineResult */.G(g,s,this));const w=await (0,spatialQuerySupport/* getSpatialQueryOperator */.xt)(x,y,this.geometryType,this.hasZ,this.hasM),F=await this.runSpatialFilter(g,(e=>w(p.getGeometry(e))),r);return f(new QueryEngineResult/* QueryEngineResult */.G(F,s,this))}_executeAggregateIdsQuery(e){if(0===e.items.length||!e.query.aggregateIds?.length||null==this.aggregateAdapter)return;const t=new Set;for(const i of e.query.aggregateIds){this.aggregateAdapter.getFeatureObjectIds(i).forEach((e=>t.add(e)))}const s=this.featureAdapter.getObjectId;e.items=e.items.filter((e=>t.has(s(e))))}executeObjectIdsQuery(e){if(0===e.items.length||!e.query.objectIds?.length)return;const t=new Set(e.query.objectIds),s=this.featureAdapter.getObjectId;e.items=e.items.filter((e=>t.has(s(e))))}executeTimeQuery(e){if(0===e.items.length)return;const t=(0,timeSupport/* getTimeOperator */.I)(this.timeInfo,e.query.timeExtent,this.featureAdapter);null!=t&&(e.items=e.items.filter(t))}executeAttributesQuery(e){if(0===e.items.length)return;const t=(0,attributeSupport/* getWhereClause */.j4)(e.query.where,this.fieldsIndex);if(t){if(!t.isStandardized)throw new TypeError("Where clause is not standardized");e.items=e.items.filter((e=>t.testFeature(e,this.featureAdapter)))}}async runSpatialFilter(e,t,s){if(!t)return e;if(null==this._frameTask)return e.filter((e=>t(e)));let i=0;const r=new Array,a=async n=>{for(;i<e.length;){const u=e[i++];t(u)&&(r.push(u),n.madeProgress()),n.done&&await this.reschedule((e=>a(e)),s)}};return this.reschedule((e=>a(e)),s).then((()=>r))}_filterLatest(e){const{trackIdField:t,startTimeField:s,endTimeField:i}=this.timeInfo,r=i||s,a=new Map,n=this.featureAdapter.getAttribute;for(const u of e.items){const e=n(u,t),s=n(u,r),i=a.get(e);(!i||s>n(i,r))&&a.set(e,u)}e.items=Array.from(a.values())}_getCacheKey(e){const{geometry:t,spatialRel:s,returnGeometry:i,returnCentroid:r,outSR:a,resultType:n,cacheHint:u}=e;if("tile"!==n&&!u)return null;const l=i||r;return (0,spatialReferenceUtils/* isValid */.fn)(a)&&!(0,spatialReferenceUtils/* equals */.aI)(this.spatialReference,a)&&l?JSON.stringify([t,s,a]):JSON.stringify([t,s])}_canExecuteSinglePass(e,t){const{spatialRel:s}=t;return (0,spatialQuerySupport/* canQueryWithRBush */.tC)(e)&&("esriSpatialRelEnvelopeIntersects"===s||"esriGeometryPoint"===this.geometryType&&("esriSpatialRelIntersects"===s||"esriSpatialRelContains"===s))}async _project(e,t){if(!t||(0,spatialReferenceUtils/* equals */.aI)(this.spatialReference,t))return e;const i=this.featureAdapter;let r;try{const e=await this._getFullExtent();r=(0,projectionUtils.getTransformation)(this.spatialReference,t,e)}catch{}const a=await (0,projectionSupport/* projectMany */.lK)(e.items.map((e=>(0,geometryUtils/* getGeometry */.pL)(this.geometryType,this.hasZ,this.hasM,i.getGeometry(e)))),this.spatialReference,t,r);return e.items=(0,compilerUtils/* toConst */.zI)(a.map(((t,s)=>i.cloneWithGeometry(e.items[s],(0,featureConversionUtils/* convertFromGeometry */.Ux)(t,this.hasZ,this.hasM))))),e}async searchFeatures(e){const t=new Set;await Promise.all(e.map((e=>this.featureStore.forEachInBounds(e,(e=>t.add(e))))));const s=Array.from(t.values());return t.clear(),s}async _executeQueryForStatistics(e,t,s){e=(0,lang/* clone */.o8)(e);try{e=await this.schedule((()=>(0,queryUtils/* normalizeQuery */.GC)(e,this.definitionExpression,this.spatialReference)),s),e=await this.reschedule((()=>(0,queryValidationUtils/* validateStatisticsQuery */.mO)(e,t,{availableFields:this.availableFields,fieldsIndex:this.fieldsIndex,geometryType:this.geometryType,spatialReference:this.spatialReference})),s);const i=await this.reschedule((()=>this._executeSceneFilterQuery(e,s)),s),r=await this.reschedule((()=>this._executeGeometryQuery(e,i,s)),s);return await this.reschedule((()=>this._executeAggregateIdsQuery(r)),s),await this.reschedule((()=>this.executeObjectIdsQuery(r)),s),await this.reschedule((()=>this.executeTimeQuery(r)),s),await this.reschedule((()=>this.executeAttributesQuery(r)),s),r}catch(i){if(i!==queryUtils/* queryEngineEmptyResult */.v8)throw i;return new QueryEngineResult/* QueryEngineResult */.G([],e,this)}}get test(){}}function V(e){if((0,spatialQuerySupport/* canQueryWithRBush */.tC)(e)){if((0,support_jsonUtils/* isExtent */.ZC)(e))return[(0,aaBoundingRect/* fromValues */.fA)(Math.min(e.xmin,e.xmax),Math.min(e.ymin,e.ymax),Math.max(e.xmin,e.xmax),Math.max(e.ymin,e.ymax))];if((0,support_jsonUtils/* isPolygon */.Bi)(e))return e.rings.map((e=>(0,aaBoundingRect/* fromValues */.fA)(Math.min(e[0][0],e[2][0]),Math.min(e[0][1],e[2][1]),Math.max(e[0][0],e[2][0]),Math.max(e[0][1],e[2][1]))))}return[(0,boundsUtils/* getBoundsXY */.Rg)((0,aaBoundingRect/* create */.vt)(),e)]}


/***/ }),

/***/ 41250:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  G: () => (/* binding */ O)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/centroid.js
var centroid = __webpack_require__(23806);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/extentUtils.js
var extentUtils = __webpack_require__(90557);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/quantizationUtils.js
var quantizationUtils = __webpack_require__(20698);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var spatialReferenceUtils = __webpack_require__(87926);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/data/attributeSupport.js
var attributeSupport = __webpack_require__(25684);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/data/geometryUtils.js
var geometryUtils = __webpack_require__(95694);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/fieldUtils.js
var fieldUtils = __webpack_require__(42453);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/smartMapping/statistics/support/utils.js
var utils = __webpack_require__(96568);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/statistics/utils.js
var statistics_utils = __webpack_require__(27218);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/loadArcade.js
var loadArcade = __webpack_require__(35387);
;// ../node_modules/@arcgis/core/layers/graphics/data/AttributesBuilder.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class AttributesBuilder_c{constructor(s,a,l){this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=s.returnDistinctValues??!1,this.fieldsIndex=l,this.featureAdapter=a;const r=s.outFields;if(r&&!r.includes("*")){this.outFields=r;let s=0;for(const a of r){const r=(0,attributeSupport/* getExpressionFromFieldName */.Wq)(a),n=this.fieldsIndex.get(r),u=n?null:(0,attributeSupport/* getWhereClause */.j4)(r,l),o=n?n.name:(0,attributeSupport/* getAliasFromFieldName */.SY)(a)||"FIELD_EXP_"+s++;this._fieldDataCache.set(a,{alias:o,clause:u})}}}countDistinctValues(t){return this.returnDistinctValues?(t.forEach((t=>this.getAttributes(t))),this._returnDistinctMap.size):t.length}getAttributes(t){const e=this._processAttributesForOutFields(t);return this._processAttributesForDistinctValues(e)}getFieldValue(t,i,s){const a=s?s.name:i;let l=null;return this._fieldDataCache.has(a)?l=this._fieldDataCache.get(a)?.clause:s||(l=(0,attributeSupport/* getWhereClause */.j4)(i,this.fieldsIndex),this._fieldDataCache.set(a,{alias:a,clause:l})),s?this.featureAdapter.getAttribute(t,a):l?.calculateValue(t,this.featureAdapter)}getDataValues(t,e,i=!0){const s=e.normalizationType,d=e.normalizationTotal,c=this.fieldsIndex.get(e.field),h=(0,fieldUtils/* isDateOnlyField */.zD)(c)||(0,fieldUtils/* isTimestampOffsetField */.Ah)(c),f=(0,fieldUtils/* isTimeOnlyField */.OH)(c);return t.map((t=>{let a=e.field&&this.getFieldValue(t,e.field,this.fieldsIndex.get(e.field));if(e.field2?(a=`${(0,statistics_utils/* processNullValue */.gJ)(a)}${e.fieldDelimiter}${(0,statistics_utils/* processNullValue */.gJ)(this.getFieldValue(t,e.field2,this.fieldsIndex.get(e.field2)))}`,e.field3&&(a=`${a}${e.fieldDelimiter}${(0,statistics_utils/* processNullValue */.gJ)(this.getFieldValue(t,e.field3,this.fieldsIndex.get(e.field3)))}`)):"string"==typeof a&&i&&(h?a=a?new Date(a).getTime():null:f&&(a=a?(0,utils/* timeOnlyToMilliseconds */.rb)(a):null)),s&&Number.isFinite(a)){const i="field"===s&&e.normalizationField?this.getFieldValue(t,e.normalizationField,this.fieldsIndex.get(e.normalizationField)):null;a=(0,statistics_utils/* getNormalizedValue */.zS)(a,s,i,d)}return a}))}async getExpressionValues(t,e,i,a,l){const{arcadeUtils:r}=await (0,loadArcade/* loadArcade */.l)(),n=r.hasGeometryOperations(e);n&&await r.enableGeometryOperations();const u=r.createFunction(e),o=r.getViewInfo(i),c={fields:this.fieldsIndex.fields};return t.map((t=>{const e={attributes:this.featureAdapter.getAttributes(t),layer:c,geometry:n?{...(0,geometryUtils/* getGeometry */.pL)(a.geometryType,a.hasZ,a.hasM,this.featureAdapter.getGeometry(t)),spatialReference:i?.spatialReference}:null},d=r.createExecContext(e,o,l);return r.executeFunction(u,d)}))}validateItem(t,i){return this._fieldDataCache.has(i)||this._fieldDataCache.set(i,{alias:i,clause:(0,attributeSupport/* getWhereClause */.j4)(i,this.fieldsIndex)}),this._fieldDataCache.get(i)?.clause?.testFeature(t,this.featureAdapter)??!1}validateItems(t,i){return this._fieldDataCache.has(i)||this._fieldDataCache.set(i,{alias:i,clause:(0,attributeSupport/* getWhereClause */.j4)(i,this.fieldsIndex)}),this._fieldDataCache.get(i)?.clause?.testSet(t,this.featureAdapter)??!1}_processAttributesForOutFields(t){const e=this.outFields;if(!e?.length)return this.featureAdapter.getAttributes(t);const i={};for(const s of e){const{alias:e,clause:a}=this._fieldDataCache.get(s);i[e]=a?a.calculateValue(t,this.featureAdapter):this.featureAdapter.getAttribute(t,e)}return i}_processAttributesForDistinctValues(t){if(null==t||!this.returnDistinctValues)return t;const e=this.outFields,i=[];if(e)for(const l of e){const{alias:e}=this._fieldDataCache.get(l);i.push(t[e])}else for(const l in t)i.push(t[l]);const s=`${(e||["*"]).join(",")}=${i.join(",")}`;let a=this._returnDistinctMap.get(s)||0;return this._returnDistinctMap.set(s,++a),a>1?null:t}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/data/projectionSupport.js
var projectionSupport = __webpack_require__(23783);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/data/queryUtils.js
var queryUtils = __webpack_require__(35746);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/data/SnappingCandidate.js
var SnappingCandidate = __webpack_require__(27258);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/AutoIntervalBinParameters.js
var AutoIntervalBinParameters = __webpack_require__(30245);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/DateBinParameters.js + 1 modules
var DateBinParameters = __webpack_require__(24465);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/DateBinUtils.js
var DateBinUtils = __webpack_require__(77018);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/FixedBoundariesBinParameters.js
var FixedBoundariesBinParameters = __webpack_require__(35985);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/FixedIntervalBinParameters.js
var FixedIntervalBinParameters = __webpack_require__(34344);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/time/constants.js
var constants = __webpack_require__(54088);
// EXTERNAL MODULE: ../node_modules/luxon/src/luxon.js + 23 modules
var luxon = __webpack_require__(34495);
;// ../node_modules/@arcgis/core/layers/graphics/data/QueryEngineResult.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const E="bin";class O{constructor(e,t,i){this.items=e,this.query=t,this.geometryType=i.geometryType,this.hasM=i.hasM,this.hasZ=i.hasZ,this.fieldsIndex=i.fieldsIndex,this.objectIdField=i.objectIdField,this.spatialReference=i.spatialReference,this.featureAdapter=i.featureAdapter}get size(){return this.items.length}createQueryResponseForCount(){const e=new AttributesBuilder_c(this.query,this.featureAdapter,this.fieldsIndex);if(!this.query.outStatistics)return e.countDistinctValues(this.items);const{groupByFieldsForStatistics:t,having:i,outStatistics:s}=this.query,a=t?.length;if(!!!a)return 1;const r=new Map,n=new Map,o=new Set;for(const l of s){const{statisticType:s}=l,a="exceedslimit"!==s?l.onStatisticField:void 0;if(!n.has(a)){const i=[];for(const s of t){const t=this._getAttributeValues(e,s,this.items,r);i.push(t)}n.set(a,this._calculateUniqueValues(i,this.items,e.returnDistinctValues))}const u=n.get(a);for(const t in u){const{data:s,items:a}=u[t],r=s.join(",");i&&!e.validateItems(a,i)||o.add(r)}}return o.size}async createQueryResponse(){let e;if(this.query.outStatistics){e=this.query.outStatistics.some((e=>"exceedslimit"===e.statisticType))?this._createExceedsLimitQueryResponse():await this._createStatisticsQueryResponse(this.query,this.items)}else e=this._createFeatureQueryResponse(this.query);if(this.query.returnQueryGeometry){const t=this.query.geometry;(0,spatialReferenceUtils/* isValid */.fn)(this.query.outSR)&&!(0,spatialReferenceUtils/* equals */.aI)(t.spatialReference,this.query.outSR)?e.queryGeometry=(0,geometryUtils/* cleanFromGeometryEngine */.ag)({spatialReference:this.query.outSR,...(0,projectionSupport/* project */.Cv)(t,t.spatialReference,this.query.outSR)}):e.queryGeometry=(0,geometryUtils/* cleanFromGeometryEngine */.ag)({spatialReference:this.query.outSR,...t})}return e}createSnappingResponse(e,t,i){const s=this.featureAdapter,a=Q(this.hasZ,this.hasM),{point:r,mode:n}=e,o="number"==typeof e.distance?e.distance:e.distance.x,l="number"==typeof e.distance?e.distance:e.distance.y,u={candidates:[]},c="esriGeometryPolygon"===this.geometryType,m="esriGeometryPolyline"===this.geometryType||"esriGeometryPoint"===this.geometryType,d=this._getPointCreator(n,t,this.spatialReference,i),f=new U(null,0),y=new U(null,0),g={x:0,y:0,z:0};for(const x of this.items){const t=s.getGeometry(x);if(null==t)continue;const{coords:i}=t,n=t.isPoint?k:t.lengths;if(f.coords=i,y.coords=i,e.returnEdge){let e=0;for(let t=0;t<n.length;t++){const i=n[t],m=e;for(let t=0;t<i;t++,e+=a){if(!c&&t===i-1)continue;const n=f;n.coordsIndex=e;const p=y;p.coordsIndex=t===i-1?m:e+a;const T=g;if(!H(g,r,n,p))continue;const I=(r.x-T.x)/o,F=(r.y-T.y)/l,_=I*I+F*F;_<=1&&u.candidates.push((0,SnappingCandidate/* makeEdgeCandidate */.P)(s.getObjectId(x),d(T),Math.sqrt(_),d(n),d(p)))}}}if("all"===e.vertexMode){let e=0;for(let t=0;t<n.length;t++){const i=n[t],m=e,h=y;h.coordsIndex=m;for(let t=0;t<i;t++,e+=a){const a=f;if(a.coordsIndex=e,c&&t===i-1&&a.x===h.x&&a.y===h.y)continue;const n=(r.x-a.x)/o,m=(r.y-a.y)/l,y=n*n+m*m;y<=1&&u.candidates.push((0,SnappingCandidate/* makeVertexCandidate */.k)(s.getObjectId(x),d(a),Math.sqrt(y)))}}}else if(m&&"ends"===e.vertexMode){let e=0;const t=[];for(let i=0;i<n.length;i++){t.push(e);const s=n[i];e+=s*a,!c&&s>1&&t.push(e-a)}for(const i of t){const e=f;e.coordsIndex=i;const t=(r.x-e.x)/o,a=(r.y-e.y)/l,n=t*t+a*a;n<=1&&u.candidates.push((0,SnappingCandidate/* makeVertexCandidate */.k)(s.getObjectId(x),d(e),Math.sqrt(n)))}}}return u.candidates.sort(((e,t)=>e.distance-t.distance)),u}_getPointCreator(e,t,i,s){const a=null==s||(0,spatialReferenceUtils/* equals */.aI)(i,s)?e=>e:e=>(0,projectionSupport/* project */.Cv)(e,i,s),{hasZ:r}=this,n=0;return"3d"===e?r&&t?({x:e,y:t,z:i})=>a({x:e,y:t,z:i}):({x:e,y:t})=>a({x:e,y:t,z:n}):({x:e,y:t})=>a({x:e,y:t})}async createSummaryStatisticsResponse(e){const{field:t,valueExpression:i,normalizationField:s,normalizationType:a,normalizationTotal:r,minValue:n,maxValue:o,scale:l,timeZone:u,outStatisticTypes:c}=e,m=this.fieldsIndex.get(t),d=(0,fieldUtils/* isDateField */.vE)(m)||(0,fieldUtils/* isDateOnlyField */.zD)(m)||(0,fieldUtils/* isTimestampOffsetField */.Ah)(m),f=await this._getDataValues({field:t,valueExpression:i,normalizationField:s,normalizationType:a,normalizationTotal:r,scale:l,timeZone:u},this.items),h=(0,statistics_utils/* isNullCountSupported */.Vb)({normalizationType:a,normalizationField:s,minValue:n,maxValue:o}),p={value:.5,fieldType:m?.type},I=(0,fieldUtils/* isStringField */.yM)(m)?(0,statistics_utils/* calculateStringStatistics */.z9)({values:f,supportsNullCount:h,percentileParams:p,outStatisticTypes:c}):(0,statistics_utils/* calculateStatistics */.G_)({values:f,minValue:n,maxValue:o,useSampleStdDev:!a,supportsNullCount:h,percentileParams:p,outStatisticTypes:c});return (0,statistics_utils/* processSummaryStatisticsResult */.oZ)(I,c,d)}async createUniqueValuesResponse(e){const{field:t,valueExpression:i,domains:s,returnAllCodedValues:a,scale:r,timeZone:n}=e,o=await this._getDataValues({field:t,field2:e.field2,field3:e.field3,fieldDelimiter:e.fieldDelimiter,valueExpression:i,scale:r,timeZone:n},this.items,!1),l=(0,statistics_utils/* calculateUniqueValuesCount */.b3)(o);return (0,statistics_utils/* createUVResult */.lv)(l,s,a,e.fieldDelimiter)}async createClassBreaksResponse(e){const{field:t,valueExpression:i,normalizationField:s,normalizationType:a,normalizationTotal:r,classificationMethod:n,standardDeviationInterval:o,minValue:l,maxValue:u,numClasses:c,scale:m,timeZone:d}=e,f=await this._getDataValues({field:t,valueExpression:i,normalizationField:s,normalizationType:a,normalizationTotal:r,scale:m,timeZone:d},this.items),h=(0,statistics_utils/* calculateClassBreaks */.Rw)(f,{field:t,normalizationField:s,normalizationType:a,normalizationTotal:r,classificationMethod:n,standardDeviationInterval:o,minValue:l,maxValue:u,numClasses:c});return (0,statistics_utils/* resolveCBResult */.jM)(h,n)}async createHistogramResponse(e){const{field:t,valueExpression:i,normalizationField:s,normalizationType:a,normalizationTotal:r,classificationMethod:n,standardDeviationInterval:o,minValue:l,maxValue:u,numBins:c,scale:m,timeZone:d}=e,f=await this._getDataValues({field:t,valueExpression:i,normalizationField:s,normalizationType:a,normalizationTotal:r,scale:m,timeZone:d},this.items);return (0,statistics_utils/* calculateHistogram */.$y)(f,{field:t,normalizationField:s,normalizationType:a,normalizationTotal:r,classificationMethod:n,standardDeviationInterval:o,minValue:l,maxValue:u,numBins:c})}_sortFeatures(e,t,i){if(e.length>1&&t?.length)for(const s of t.slice().reverse()){const t=s.split(" "),a=t[0],r=this.fieldsIndex.get(a),n=!!t[1]&&"desc"===t[1].toLowerCase(),o=(0,statistics_utils/* getAttributeComparator */.FM)(r?.type,n);e.sort(((e,t)=>{const s=i(e,a,r),n=i(t,a,r);return o(s,n)}))}}_createFeatureQueryResponse(e){const{items:t,geometryType:i,hasM:s,hasZ:a,objectIdField:n,spatialReference:o}=this,{outFields:l,outSR:c,quantizationParameters:m,resultRecordCount:d,resultOffset:f,returnZ:h,returnM:p}=e,y=null!=d&&t.length>(f||0)+d,g=l&&(l.includes("*")?[...this.fieldsIndex.fields]:l.map((e=>this.fieldsIndex.get(e))));return{exceededTransferLimit:y,features:this._createFeatures(e,t),fields:g,geometryType:i,hasM:s&&p,hasZ:a&&h,objectIdFieldName:n,spatialReference:(0,geometryUtils/* cleanFromGeometryEngine */.ag)(c||o),transform:m&&(0,quantizationUtils/* toQuantizationTransform */.VV)(m)||null}}_createFeatures(e,t){const i=new AttributesBuilder_c(e,this.featureAdapter,this.fieldsIndex),{hasM:s,hasZ:a}=this,{orderByFields:n,quantizationParameters:o,returnGeometry:u,returnCentroid:d,maxAllowableOffset:f,resultOffset:h,resultRecordCount:p,returnZ:y=!1,returnM:g=!1}=e,x=a&&y,T=s&&g;let I=[],F=0;const _=[...t];if(this._sortFeatures(_,n,((e,t,s)=>i.getFieldValue(e,t,s))),this.geometryType&&(u||d)){const e=(0,quantizationUtils/* toQuantizationTransform */.VV)(o)??void 0,t="esriGeometryPolygon"===this.geometryType||"esriGeometryPolyline"===this.geometryType;if(u&&!d)for(const s of _){const a=this.featureAdapter.getGeometry(s),r={attributes:i.getAttributes(s),geometry:(0,geometryUtils/* getGeometry */.pL)(this.geometryType,this.hasZ,this.hasM,a,f,e,x,T),metadata:this.featureAdapter.getMetadata?.(s)};t&&a&&!r.geometry&&(r.centroid=(0,geometryUtils/* transformCentroid */.LQ)(this,this.featureAdapter.getCentroid(s,this),e)),I[F++]=r}else if(!u&&d)for(const s of _)I[F++]={attributes:i.getAttributes(s),centroid:(0,geometryUtils/* transformCentroid */.LQ)(this,this.featureAdapter.getCentroid(s,this),e)};else for(const s of _)I[F++]={attributes:i.getAttributes(s),centroid:(0,geometryUtils/* transformCentroid */.LQ)(this,this.featureAdapter.getCentroid(s,this),e),geometry:(0,geometryUtils/* getGeometry */.pL)(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(s),f,e,x,T),metadata:this.featureAdapter.getMetadata?.(s)}}else for(const r of _){const e=i.getAttributes(r);e&&(I[F++]={attributes:e})}const V=h||0;if(null!=p){const e=V+p;I=I.slice(V,Math.min(I.length,e))}return I}_createExceedsLimitQueryResponse(){let e=!1,t=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY,s=Number.POSITIVE_INFINITY;for(const a of this.query.outStatistics??[])if("exceedslimit"===a.statisticType){t=null!=a.maxPointCount?a.maxPointCount:Number.POSITIVE_INFINITY,i=null!=a.maxRecordCount?a.maxRecordCount:Number.POSITIVE_INFINITY,s=null!=a.maxVertexCount?a.maxVertexCount:Number.POSITIVE_INFINITY;break}if("esriGeometryPoint"===this.geometryType)e=this.items.length>t;else if(this.items.length>i)e=!0;else{const t=Q(this.hasZ,this.hasM),i=this.featureAdapter;e=this.items.reduce(((e,t)=>{const s=i.getGeometry(t);return e+(null!=s&&s.coords.length||0)}),0)/t>s}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(e)}}]}}async _createStatisticsQueryResponse(e,t,i={attributes:{}}){const s=[],a=new Map,r=new Map,n=new Map,o=new Map,u=new AttributesBuilder_c(e,this.featureAdapter,this.fieldsIndex),c=e.outStatistics,{groupByFieldsForStatistics:m,having:d,orderByFields:f,resultRecordCount:h}=e,p=m?.length,y=!!p,g=y?m[0]:null,x=y&&!this.fieldsIndex.get(g);for(const l of c??[]){const{outStatisticFieldName:e,statisticType:c}=l,f=l,h="exceedslimit"!==c?l.onStatisticField:void 0,I="percentile_disc"===c||"percentile_cont"===c,F="EnvelopeAggregate"===c||"CentroidAggregate"===c||"ConvexHullAggregate"===c,_=y&&1===p&&(h===g||x)&&"count"===c;if(y){if(!n.has(h)){const e=[];for(const i of m){const s=this._getAttributeValues(u,i,t,a);e.push(s)}n.set(h,this._calculateUniqueValues(e,t,!F&&u.returnDistinctValues))}const i=n.get(h);if(!i)continue;const s=Object.keys(i);for(const r of s){const{count:s,data:n,items:l,itemPositions:c}=i[r],p=n.join(",");if(!d||u.validateItems(l,d)){const i=o.get(p)||{attributes:{}};if(F){i.aggregateGeometries||(i.aggregateGeometries={});const{aggregateGeometries:e,outStatisticFieldName:t}=await this._getAggregateGeometry(f,l);i.aggregateGeometries[t]=e}else{let r=null;if(_)r=s;else{const e=this._getAttributeValues(u,h,t,a),i=c.map((t=>e[t]));r=I&&"statisticParameters"in f?this._getPercentileValue(f,i):this._getStatisticValue(f,i,null,u.returnDistinctValues)}i.attributes[e]=r}let r=0;m.forEach(((e,t)=>i.attributes[this.fieldsIndex.get(e)?e:"EXPR_"+ ++r]=n[t])),o.set(p,i)}}}else if(F){i.aggregateGeometries||(i.aggregateGeometries={});const{aggregateGeometries:e,outStatisticFieldName:s}=await this._getAggregateGeometry(f,t);i.aggregateGeometries[s]=e}else{const s=this._getAttributeValues(u,h,t,a);i.attributes[e]=I&&"statisticParameters"in f?this._getPercentileValue(f,s):this._getStatisticValue(f,s,r,u.returnDistinctValues)}const V="min"!==c&&"max"!==c||!(0,fieldUtils/* isStringField */.yM)(this.fieldsIndex.get(h))&&!this._isAnyDateField(h)?null:this.fieldsIndex.get(h)?.type;s.push({name:e,alias:e,type:V||"esriFieldTypeDouble"})}const I=y?Array.from(o.values()):[i];return this._sortFeatures(I,f,((e,t)=>e.attributes[t])),h&&(I.length=Math.min(h,I.length)),{fields:s,features:I}}_isAnyDateField(e){const t=this.fieldsIndex.get(e);return (0,fieldUtils/* isDateField */.vE)(t)||(0,fieldUtils/* isDateOnlyField */.zD)(t)||(0,fieldUtils/* isTimestampOffsetField */.Ah)(t)||(0,fieldUtils/* isTimeOnlyField */.OH)(t)}async _getAggregateGeometry(e,r){const{convexHull:n,union:o}=await __webpack_require__.e(/* import() */ 985).then(__webpack_require__.bind(__webpack_require__, 53366)),{statisticType:l,outStatisticFieldName:u}=e,{featureAdapter:m,spatialReference:d,geometryType:f,hasZ:h,hasM:p}=this,y=r.map((e=>(0,geometryUtils/* getGeometry */.pL)(f,h,p,m.getGeometry(e)))),g=n(d,y,!0)[0],x={aggregateGeometries:null,outStatisticFieldName:null};if("EnvelopeAggregate"===l){const e=g?(0,extentUtils/* getPolygonExtent */.v)(g):(0,extentUtils/* getGeometryExtent */.HA)(o(d,y));x.aggregateGeometries={...e,spatialReference:d},x.outStatisticFieldName=u||"extent"}else if("CentroidAggregate"===l){const e=g?(0,centroid/* polygonCentroid */.l8)(g):(0,centroid/* extentCentroid */.Z4)((0,extentUtils/* getGeometryExtent */.HA)(o(d,y)));x.aggregateGeometries={x:e[0],y:e[1],spatialReference:d},x.outStatisticFieldName=u||"centroid"}else"ConvexHullAggregate"===l&&(x.aggregateGeometries=g,x.outStatisticFieldName=u||"convexHull");return x}_getStatisticValue(e,t,i,s){const{onStatisticField:a,statisticType:r}=e;let n=null;n=i?.has(a)?i.get(a):(0,fieldUtils/* isStringField */.yM)(this.fieldsIndex.get(a))||this._isAnyDateField(a)?(0,statistics_utils/* calculateStringStatistics */.z9)({values:t,returnDistinct:s}):(0,statistics_utils/* calculateStatistics */.G_)({values:s?[...new Set(t)]:t,minValue:null,maxValue:null,useSampleStdDev:!0}),i&&i.set(a,n);return n["var"===r?"variance":r]}_getPercentileValue(e,t){const{onStatisticField:i,statisticParameters:s,statisticType:a}=e,{value:r,orderBy:n}=s,o=this.fieldsIndex.get(i);return (0,statistics_utils/* calculatePercentile */.qg)(t,{value:r,orderBy:n,fieldType:o?.type,isDiscrete:"percentile_disc"===a})}_getAttributeValues(e,t,i,s){if(s.has(t))return s.get(t);const a=this.fieldsIndex.get(t),r=i.map((i=>e.getFieldValue(i,t,a)));return s.set(t,r),r}_calculateUniqueValues(e,t,i){const s={},a=t.length;for(let r=0;r<a;r++){const a=t[r],n=[];for(const t of e)n.push(t[r]);const o=n.join(",");null==s[o]?s[o]={count:1,data:n,items:[a],itemPositions:[r]}:(i||s[o].count++,s[o].items.push(a),s[o].itemPositions.push(r))}return s}async _getDataValues(t,i,s=!0){const a=new AttributesBuilder_c(this.query,this.featureAdapter,this.fieldsIndex),{valueExpression:r,scale:n,timeZone:o}=t;return r?a.getExpressionValues(i,r,{viewingMode:"map",scale:n,spatialReference:this.query.outSR||this.spatialReference},{geometryType:this.geometryType,hasZ:this.hasZ,hasM:this.hasM},o):a.getDataValues(i,(0,lang/* clone */.o8)(t),s)}async _calculateHistogramBins(e,t,i){if(null==t.min&&null==t.max)return[];const s=t.intervals,a=t.min??0,r=t.max??0,n=s.map((([e,t])=>({minValue:e,maxValue:t,count:0,items:[]})));for(let o=0;o<e.length;o++){const t=e[o],l=i[o];if(null!=t&&t>=a&&t<=r){const e=(0,statistics_utils/* binIndex */.Ak)(s,t);e>-1&&(n[e].count++,n[e].items.push(l))}}return n}async createQueryBinsResponse(e){const t=e.bin?.splitBy;if(!t)return this._createBinsResponse(e);const{value:i,outAlias:s,valueType:a}=t,r=[],n=[{name:s??i,alias:s??i,type:a??"esriFieldTypeString"},{name:E,alias:E,type:"esriFieldTypeInteger"}],o=new AttributesBuilder_c(e,this.featureAdapter,this.fieldsIndex),u=new Map,c=[...this.items];this._sortFeatures(c,[i],((e,t,i)=>o.getFieldValue(e,t,i)));const m=this._getAttributeValues(o,i,c,u),d=this._calculateUniqueValues([m],c,o.returnDistinctValues);for(const l in d){const{items:t}=d[l],a=await this._createBinsResponse(e,t);if(r.push(...a.features.map((e=>({...e,attributes:{...e.attributes,[s??i]:l}})))),a.fields)for(const e of a.fields)n.some((t=>t.name===e.name))||n.push(e)}return{fields:n,features:r}}async _createBinsResponse(e,t){const i=e.bin;switch(t=t??this.items,i.type){case"autoIntervalBin":return this._createAutoIntervalBinsResponse(AutoIntervalBinParameters/* default */.A.fromJSON(i),e,t);case"dateBin":return this._createDateBinsResponse(DateBinParameters/* default */.A.fromJSON(i),e,t);case"fixedBoundariesBin":return this._createFixedBoundariesBinsResponse(FixedBoundariesBinParameters/* default */.A.fromJSON(i),e,t);case"fixedIntervalBin":return this._createFixedIntervalBinsResponse(FixedIntervalBinParameters/* default */.A.fromJSON(i),e,t)}}async _createAutoIntervalBinsResponse(e,t,i){const{field:s,normalizationField:a,numBins:r,normalizationType:n,normalizationTotal:o,start:l,end:u}=e,c=await this._getDataValues({field:e.field,normalizationField:e.normalizationField,normalizationType:e.normalizationType,normalizationTotal:e.normalizationTotal,timeZone:t.outTimeReference?.ianaTimeZone},i),m=(0,statistics_utils/* getBinParams */.sU)(c,{field:s,normalizationField:a,normalizationType:n,normalizationTotal:o,numBins:r,minValue:(0,queryUtils/* getDateInNumber */.dO)(l,!1),maxValue:(0,queryUtils/* getDateInNumber */.dO)(u,!1)}),d=await this._calculateHistogramBins(c,m,i);return this._createFeaturesFromHistogramBins(d,t)}async _createDateBinsResponse(e,t,i){const{field:s,interval:a,start:r,end:n,snapToData:o,returnFullIntervalBin:l}=e,u=a.unit,c=await this._getDataValues({field:e.field,timeZone:t.outTimeReference?.ianaTimeZone},i),m=(0,fieldUtils/* isTimeOnlyField */.OH)(this.fieldsIndex.get(s)),d=DateBinUtils/* unitsDict */.g.toJSON(u),h=c.filter(Boolean).sort(((e,t)=>e-t)),p=null!=r?(0,queryUtils/* getDateInNumber */.dO)(r,m):h[0],y=null!=n?(0,queryUtils/* getDateInNumber */.dO)(n,m):h[h.length-1],g={zone:t.outTimeReference?.ianaTimeZone??constants/* utc */.n$},x=luxon/* DateTime */.c9.fromMillis(p,g),T=luxon/* DateTime */.c9.fromMillis(y,g),F=[];if("last"===o){let e=T;for(;e>x;){const t=e.minus({[d]:a.value});if(t<x){F.unshift([l?t.toMillis():x.toMillis(),e.toMillis()]);break}F.unshift([t.toMillis(),e.toMillis()]),e=t}}else{let e="first"===o?x:x.startOf(d);for(;e<=T;){const t=e.plus({[d]:a.value});if(t>T){F.push([e.toMillis(),l?t.toMillis():T.toMillis()]);break}F.push([e.toMillis(),t.toMillis()]),e=t}}const _=await this._calculateHistogramBins(c,{intervals:F,min:p,max:y},i);return this._createFeaturesFromHistogramBins(_,t)}async _createFixedBoundariesBinsResponse(e,t,i){const{field:s}=e,a=await this._getDataValues({field:s,timeZone:t.outTimeReference?.ianaTimeZone},i),r=(0,fieldUtils/* isTimeOnlyField */.OH)(this.fieldsIndex.get(s)),n=e.boundaries.map((e=>(0,queryUtils/* getDateInNumber */.dO)(e,r))).sort(((e,t)=>e-t)),o=[];for(let c=0;c<n.length-1;c++)o.push([n[c],n[c+1]]);const l={intervals:o,min:n.at(0),max:n.at(-1)},u=await this._calculateHistogramBins(a,l,i);return this._createFeaturesFromHistogramBins(u,t)}async _createFixedIntervalBinsResponse(e,t,i){const{field:s,interval:a,start:r,end:n}=e,o=await this._getDataValues({field:e.field,normalizationField:e.normalizationField,normalizationType:e.normalizationType,normalizationTotal:e.normalizationTotal,timeZone:t.outTimeReference?.ianaTimeZone},i),l=(0,fieldUtils/* isTimeOnlyField */.OH)(this.fieldsIndex.get(s)),u=(0,statistics_utils/* getBinParams */.sU)(o,{field:s,classificationMethod:"defined-interval",definedInterval:a,minValue:(0,queryUtils/* getDateInNumber */.dO)(r,l),maxValue:(0,queryUtils/* getDateInNumber */.dO)(n,l)},!0),c=await this._calculateHistogramBins(o,u,i);return this._createFeaturesFromHistogramBins(c,t)}async _createFeaturesFromHistogramBins(e,t){const{upperBoundaryAlias:i,lowerBoundaryAlias:s}=t,a=s||"lowerBoundary",r=i||"upperBoundary",n=[],o=[{name:a,alias:a,type:"esriFieldTypeDouble"},{name:r,alias:r,type:"esriFieldTypeDouble"}],l=t.bin?.stackBy?.value,u=t.bin?.stackBy?.outAlias;l&&o.push({name:E,alias:E,type:"esriFieldTypeInteger"},{name:u??l,alias:u??l,type:"esriFieldTypeString"});let c=0;const m="dateBin"===t.bin.type,d=t.outTimeReference?.ianaTimeZone;for(const f of e){const{minValue:e,maxValue:i,items:s}=f,h={attributes:{}};let p;if(h.attributes[a]=m&&d&&null!=e?luxon/* DateTime */.c9.fromMillis(e,{zone:d}).toISO():e,h.attributes[r]=m&&d&&null!=i?luxon/* DateTime */.c9.fromMillis(i,{zone:d}).toISO():i,l?(p=await this._createStatisticsQueryResponse({...t,groupByFieldsForStatistics:[l],orderByFields:[l]},s),h.attributes[E]=++c,"flat"===t.bin.jsonStyle?n.push(...p.features.map((({attributes:{EXPR_1:e,...t},...i})=>({...i,attributes:u??e?{...t,[u??e]:e,...h.attributes}:{...t,...h.attributes}})))):(h.stackedAttributes=p.features.map((({attributes:{EXPR_1:e,...t}})=>u??e?{...t,[u??e]:e}:t)),n.push(h))):(t.bin?.splitBy&&(h.attributes[E]=++c),p=await this._createStatisticsQueryResponse(t,s,h),n.push(h)),p.fields)for(const t of p.fields)o.some((e=>e.name===t.name))||o.push(t)}return"desc"===t.binOrder&&n.reverse(),{fields:o,features:n}}}function H(e,t,i,s){const a=s.x-i.x,r=s.y-i.y,n=t.x-i.x,o=t.y-i.y,l=a*a+r*r;if(0===l)return!1;const u=n*a+o*r,c=Math.min(1,Math.max(0,u/l));return e.x=i.x+a*c,e.y=i.y+r*c,!0}function Q(e,t){return e?t?4:3:t?3:2}class U{constructor(e,t){this.coords=e,this.coordsIndex=t}get x(){return this.coords[this.coordsIndex]}get y(){return this.coords[this.coordsIndex+1]}get z(){return this.coords[this.coordsIndex+2]}}const k=[1];


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

/***/ 25684:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MG: () => (/* binding */ g),
/* harmony export */   SN: () => (/* binding */ p),
/* harmony export */   SY: () => (/* binding */ y),
/* harmony export */   VW: () => (/* binding */ a),
/* harmony export */   Wq: () => (/* binding */ u),
/* harmony export */   eD: () => (/* binding */ f),
/* harmony export */   j4: () => (/* binding */ c),
/* harmony export */   vl: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/* harmony import */ var _core_sql_WhereClauseCache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6986);
/* harmony import */ var _support_fieldType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17930);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const s=new _core_sql_WhereClauseCache_js__WEBPACK_IMPORTED_MODULE_1__.WhereClauseCache(50,500),t="unsupported-query",n=" as ",o=new Set(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeBigInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong"]),a=new Set(["esriFieldTypeDate","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"]),l=new Set(["esriFieldTypeString","esriFieldTypeGUID","esriFieldTypeGlobalID",...o,...a]);function d(i,r,n={}){const o=c(r,i);if(!o){const n=s.getError(r,i);throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(t,"invalid SQL expression",{expression:r,error:n})}const a=n.expressionName||"expression";if(n.validateStandardized&&!o.isStandardized)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(t,`${a} is not standard`,{expression:r});if(n.validateAggregate&&!o.isAggregate)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(t,`${a} does not contain a valid aggregate function`,{expression:r});return o.fieldNames}function p(e,i,r,s){if(!r)return!0;const t="where clause";return g(e,i,d(e,r,{validateStandardized:!0,expressionName:t}),{expressionName:t,query:s}),!0}function f(i,r,s,n,o){if(!s)return!0;const a="having clause",l=d(i,s,{validateAggregate:!0,expressionName:a});g(i,r,l,{expressionName:a,query:o});const p=c(s,i),f=p?.getExpressions().every((e=>{const{aggregateType:r,field:s}=e,t=i.get(s)?.name;return n.some((e=>{const{onStatisticField:s,statisticType:n}=e,o=i.get(s)?.name;return o===t&&n.toLowerCase().trim()===r}))}));if(!f)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(t,"expressions in having clause should also exist in outStatistics",{having:s});return!0}function c(e,i){return e?s.get(e,i):null}function u(e){return/\((.*?)\)/.test(e)?e:e.split(n)[0]}function y(e){return e.split(n)[1]}function g(i,r,s,n={}){const o=new Map;if(m(o,i,r,n.allowedFieldTypes??l,s),o.size){const i=n.expressionName??"expression";throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(t,`${i} contains invalid or missing fields`,{errors:Array.from(o.values()),query:n.query})}}function m(e,i,r,s,t){const n=t.includes("*")?[...r,...t.filter((e=>"*"!==e))]:t;for(const a of n){if(i.get(a))T(e,i,r,s,a);else try{const t=d(i,u(a),{validateStandardized:!0});for(const n of t)T(e,i,r,s,n)}catch(o){e.set(a,{type:"expression-error",expression:a,error:o})}}}function T(e,i,s,t,n){const o=i.get(n);o?s.has(o.name)?"all"!==t&&!1===t?.has(o.type)&&e.set(n,{type:"invalid-type",fieldName:o.name,fieldType:_support_fieldType_js__WEBPACK_IMPORTED_MODULE_2__/* .kebabDict */ .m.fromJSON(o.type),allowedFieldTypes:Array.from(t,(e=>_support_fieldType_js__WEBPACK_IMPORTED_MODULE_2__/* .kebabDict */ .m.fromJSON(e)))}):e.set(n,{type:"missing-field",fieldName:o.name}):e.set(n,{type:"invalid-field",fieldName:n})}


/***/ }),

/***/ 95694:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LQ: () => (/* binding */ y),
/* harmony export */   ag: () => (/* binding */ h),
/* harmony export */   pL: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21355);
/* harmony import */ var _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88443);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const u=new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,f=new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,m=new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,c={esriGeometryPoint:_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertToPoint */ .DF,esriGeometryPolyline:_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertToPolyline */ .BW,esriGeometryPolygon:_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertToPolygon */ .z5,esriGeometryMultipoint:_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertToMultipoint */ .qK};function y(n,r,t,o=n.hasZ,s=n.hasM){if(null==r)return null;const l=n.hasZ&&o,u=n.hasM&&s;if(t){const f=(0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .quantizeOptimizedGeometry */ .Nl)(m,r,n.hasZ,n.hasM,"esriGeometryPoint",t,o,s);return (0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertToPoint */ .DF)(f,l,u)}return (0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertToPoint */ .DF)(r,l,u)}function a(r,t,o,i,l,y,a=t,h=o){const p=t&&a,G=o&&h,g=null!=i?"coords"in i?i:i.geometry:null;if(null==g)return null;if(l){let i=(0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .generalizeOptimizedGeometry */ .kz)(f,g,t,o,r,l,a,h);return y&&(i=(0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .quantizeOptimizedGeometry */ .Nl)(m,i,p,G,r,y)),c[r]?.(i,p,G)??null}if(y){const n=(0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .quantizeOptimizedGeometry */ .Nl)(m,g,t,o,r,y,a,h);return c[r]?.(n,p,G)??null}return (0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .removeZMValues */ .Q4)(u,g,t,o,a,h),c[r]?.(u,p,G)??null}function h(n){return n&&p in n?JSON.parse(JSON.stringify(n,G)):n}const p="_geVersion",G=(n,e)=>n===p?void 0:e;


/***/ }),

/***/ 23783:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cv: () => (/* binding */ j),
/* harmony export */   Nk: () => (/* binding */ x),
/* harmony export */   lK: () => (/* binding */ b)
/* harmony export */ });
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85569);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40189);
/* harmony import */ var _geometry_projectionUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68490);
/* harmony import */ var _geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27243);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87926);
/* harmony import */ var _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96082);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const p=[0,0];function c(s,t){if(!t)return null;if("x"in t){const e={x:0,y:0};return[e.x,e.y]=s(t.x,t.y,p),null!=t.z&&(e.z=t.z),null!=t.m&&(e.m=t.m),e}if("xmin"in t){const e={xmin:0,ymin:0,xmax:0,ymax:0};return[e.xmin,e.ymin]=s(t.xmin,t.ymin,p),[e.xmax,e.ymax]=s(t.xmax,t.ymax,p),t.hasZ&&(e.zmin=t.zmin,e.zmax=t.zmax,e.hasZ=!0),t.hasM&&(e.mmin=t.mmin,e.mmax=t.mmax,e.hasM=!0),e}return"rings"in t?{rings:h(t.rings,s),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:h(t.paths,s),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:f(t.points,s),hasM:t.hasM,hasZ:t.hasZ}:null}function h(s,t){const e=[];for(const n of s)e.push(f(n,t));return e}function f(s,t){const e=[];for(const n of s){const s=t(n[0],n[1],[0,0]);e.push(s),n.length>2&&s.push(n[2]),n.length>3&&s.push(n[3])}return e}async function x(t,n){if(!t||!n)return;const r=Array.isArray(t)?t.map((s=>null!=s.geometry?s.geometry.spatialReference:null)).filter(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isSome */ .Ru):[t];await (0,_geometry_projectionUtils_js__WEBPACK_IMPORTED_MODULE_2__.initializeProjection)(r.map((s=>({source:s,dest:n}))))}const y=c.bind(null,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .lngLatToXY */ .je),g=c.bind(null,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .xyToLngLat */ .tD);function j(s,t,e,u){if(!s)return null;if(e||(e=t,t=s.spatialReference),!(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isValid */ .fn)(t)||!(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isValid */ .fn)(e)||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .equals */ .aI)(t,e))return s;if((0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .canProject */ .y7)(t,e)){const t=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isWebMercator */ .K8)(e)?y(s):g(s);return t.spatialReference=e,t}return (0,_geometry_projectionUtils_js__WEBPACK_IMPORTED_MODULE_2__.projectMany)(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_3__/* .jsonAdapter */ .g,[s],t,e,null,u)[0]}class _{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(s,e,n,r){if(!s?.length||!e||!n||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .equals */ .aI)(e,n))return s;const i={geometries:s,inSpatialReference:e,outSpatialReference:n,geographicTransformation:r,resolve:(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .createResolver */ .Tw)()};return this._jobs.push(i),this._timer??=setTimeout(this._process,10),i.resolve.promise}_process(){this._timer=null;const s=this._jobs.shift();if(!s)return;const{geometries:t,inSpatialReference:e,outSpatialReference:i,resolve:o,geographicTransformation:u}=s;(0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .canProject */ .y7)(e,i)?(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isWebMercator */ .K8)(i)?o(t.map(y)):o(t.map(g)):o((0,_geometry_projectionUtils_js__WEBPACK_IMPORTED_MODULE_2__.projectMany)(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_3__/* .jsonAdapter */ .g,t,e,i,u,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}const M=new _;function b(s,t,e,n){return M.push(s,t,e,n)}


/***/ }),

/***/ 35746:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GC: () => (/* binding */ x),
/* harmony export */   T2: () => (/* binding */ B),
/* harmony export */   VY: () => (/* binding */ g),
/* harmony export */   dO: () => (/* binding */ h),
/* harmony export */   iJ: () => (/* binding */ w),
/* harmony export */   v8: () => (/* binding */ S)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59851);
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92976);
/* harmony import */ var _geometry_projectionUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68490);
/* harmony import */ var _geometry_support_extentUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90557);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1171);
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65231);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87926);
/* harmony import */ var _projectionSupport_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23783);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const g=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONMap */ .J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),S=Object.freeze({}),R="frequency";async function w(t,e,i){const r=t.bin;return r.onField&&(r.onField=r.onField.trim()),r.onExpression?.value&&(r.onExpression.value=r.onExpression.value.trim()),r.splitBy&&(r.splitBy.value&&(r.splitBy.value=r.splitBy.value.trim()),r.splitBy.outAlias&&(r.splitBy.outAlias=r.splitBy.outAlias.trim())),r.stackBy&&(r.stackBy.value&&(r.stackBy.value=r.stackBy.value.trim()),r.stackBy.outAlias&&(r.stackBy.outAlias=r.stackBy.outAlias.trim())),"normalizationField"in r.parameters&&r.parameters.normalizationField&&(r.parameters.normalizationField=r.parameters.normalizationField.trim()),t.outStatistics?.length||(t.outStatistics=[{statisticType:"count",onStatisticField:"1",outStatisticFieldName:R}]),x(t,e,i)}async function x(t,e,i){const{outFields:r,orderByFields:n,groupByFieldsForStatistics:a,outStatistics:o}=t;if(r)for(let s=0;s<r.length;s++)r[s]=r[s].trim();if(n)for(let s=0;s<n.length;s++)n[s]=n[s].trim();if(a)for(let s=0;s<a.length;s++)a[s]=a[s].trim();if(o)for(let s=0;s<o.length;s++)o[s].onStatisticField&&(o[s].onStatisticField=o[s].onStatisticField.trim());return t.geometry&&!t.outSR&&(t.outSR=t.geometry.spatialReference),B(t,e,i)}async function B(t,e,i){if(!t)return null;let{where:r}=t;if(t.where=r=r?.trim(),(!r||/^1 *= *1$/.test(r)||e&&e===r)&&(t.where=null),!t.geometry)return t;let o=await v(t);if(t.distance=0,t.units=null,"esriSpatialRelEnvelopeIntersects"===t.spatialRel){const{spatialReference:e}=t.geometry;o=(0,_geometry_support_extentUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .getGeometryExtent */ .HA)(o),o.spatialReference=e}if(o){await (0,_projectionSupport_js__WEBPACK_IMPORTED_MODULE_8__/* .checkProjectionSupport */ .Nk)(o.spatialReference,i),o=j(o,i);const e=(await (0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .normalizeCentralMeridian */ .el)((0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .fromJSON */ .rS)(o)))[0];if(null==e)throw S;const r="quantizationParameters"in t&&t.quantizationParameters?.tolerance||"maxAllowableOffset"in t&&t.maxAllowableOffset||0,n=r&&F(o,i)?{densificationStep:8*r}:void 0,s=e.toJSON(),l=(0,_projectionSupport_js__WEBPACK_IMPORTED_MODULE_8__/* .project */ .Cv)(s,s.spatialReference,i,n);if(!l)throw S;l.spatialReference=i,t.geometry=l}return t}function F(t,e){if(!t)return!1;const i=t.spatialReference;return((0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isExtent */ .ZC)(t)||(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isPolygon */ .Bi)(t)||(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isPolyline */ .Rg)(t))&&!(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .equals */ .aI)(i,e)&&!(0,_geometry_projectionUtils_js__WEBPACK_IMPORTED_MODULE_3__.canProjectWithoutEngine)(i,e)}function j(t,e){const i=t.spatialReference;return F(t,e)&&(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isExtent */ .ZC)(t)?{spatialReference:i,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]}:t}async function v(e){const{distance:r,units:n}=e,a=e.geometry;if(null==r||"vertexAttributes"in a)return a;const s=a.spatialReference,l=n?g.fromJSON(n):(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getUnitString */ .Ij)(s),m=s&&((0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .isGeographic */ .EA)(s)||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .isWebMercator */ .K8)(s))?a:await (0,_projectionSupport_js__WEBPACK_IMPORTED_MODULE_8__/* .checkProjectionSupport */ .Nk)(s,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .wgs84 */ .KK).then((()=>(0,_projectionSupport_js__WEBPACK_IMPORTED_MODULE_8__/* .project */ .Cv)(a,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .wgs84 */ .KK))),f=await __webpack_require__.e(/* import() */ 9219).then(__webpack_require__.bind(__webpack_require__, 31600));await f.load();const S=f.execute(m,r||1,{unit:l})??void 0;if(!S||!(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isPolygon */ .Bi)(S)||0===S.rings.length)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("unsupported-query:invalid-parameters","Invalid parameters for query by distance");return S}function h(t,e){return null==t?null:"string"==typeof t?e?new Date(`1970-01-01T${t}Z`).getTime():new Date(t).getTime():t instanceof Date?t.getTime():t}


/***/ }),

/***/ 41607:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B4: () => (/* binding */ d),
/* harmony export */   FQ: () => (/* binding */ p),
/* harmony export */   mO: () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/* harmony import */ var _attributeSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25684);
/* harmony import */ var _projectionSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23783);
/* harmony import */ var _spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70759);
/* harmony import */ var _support_loadArcade_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35387);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const u="unsupported-query";async function p(t,i){const s=t.bin;if(!s.onField&&!s.onExpression?.value||"autoIntervalBin"===s.type&&null==s.parameters.numberOfBins||"dateBin"===s.type&&(null==s.parameters.number||null==s.parameters.unit)||"fixedBoundariesBin"===s.type&&null==s.parameters.boundaries||"fixedIntervalBin"===s.type&&null==s.parameters.interval)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(u,"Unsupported query options",{query:t});return d(t,i)}async function d(t,{fieldsIndex:i,geometryType:s,spatialReference:r,availableFields:o}){if(null!=t.geometryPrecision||t.multipatchOption&&"xyFootprint"!==t.multipatchOption||t.pixelSize||t.relationParam||t.text)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(u,"Unsupported query options",{query:t});return c(i,o,t),m(i,o,t),Promise.all([(0,_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_3__/* .checkSpatialQuerySupport */ .c0)(t,s,r),(0,_projectionSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .checkProjectionSupport */ .Nk)(r,t.outSR)]).then((()=>t))}function c(s,r,o){const{returnDistinctValues:n,outStatistics:a}=o,l=a?a.map((e=>e.outStatisticFieldName&&e.outStatisticFieldName.toLowerCase())).filter(Boolean):[];if("orderByFields"in o&&o.orderByFields&&o.orderByFields.length>0){const e=" asc",i=" desc",n=o.orderByFields.map((t=>{const s=t.toLowerCase();return s.includes(e)?s.split(e)[0]:s.includes(i)?s.split(i)[0]:t})).filter((e=>!l.includes(e)));(0,_attributeSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .validateFields */ .MG)(s,r,n,{expressionName:"orderByFields",query:o})}if("outFields"in o)if(o.outFields?.length)(0,_attributeSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .validateFields */ .MG)(s,r,o.outFields,{expressionName:"outFields",query:o,allowedFieldTypes:"all"});else if(n)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(u,"outFields should be specified for returnDistinctValues",{query:o});(0,_attributeSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .validateWhere */ .SN)(s,r,o.where,o)}const f=new Set([..._attributeSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .numericFieldTypes */ .vl,..._attributeSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .allDateAndTimeFieldTypes */ .VW]);function m(i,r,o){const{outStatistics:n,groupByFieldsForStatistics:a,having:l}=o,p=a?.length,d=n?.length;if(l){if(!p||!d)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(u,"outStatistics and groupByFieldsForStatistics should be specified with having",{query:o});(0,_attributeSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .validateHaving */ .eD)(i,r,l,n,o)}if(d){if(!h(n))return;const s=n.map((e=>e.onStatisticField)).filter(Boolean);(0,_attributeSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .validateFields */ .MG)(i,r,s,{expressionName:"onStatisticFields",query:o}),p&&(0,_attributeSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .validateFields */ .MG)(i,r,a,{expressionName:"groupByFieldsForStatistics",query:o});for(const a of n){const{onStatisticField:s,statisticType:n}=a;if(("percentile_disc"===n||"percentile_cont"===n)&&"statisticParameters"in a){const{statisticParameters:t}=a;if(!t)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(u,"statisticParameters should be set for percentile type",{definition:a,query:o})}else i.get(s)&&"count"!==n&&"min"!==n&&"max"!==n&&(0,_attributeSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .validateFields */ .MG)(i,r,[s],{expressionName:`outStatistics with '${n}' statistic type`,allowedFieldTypes:f,query:o})}}}async function y(t,i,{fieldsIndex:s,geometryType:r,spatialReference:o,availableFields:l}){if(null!=t.geometryPrecision||t.multipatchOption||t.pixelSize||t.relationParam||t.text||t.outStatistics||t.groupByFieldsForStatistics||t.having||t.orderByFields)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(u,"Unsupported query options",{query:t});return c(s,l,t),Promise.all([F(s,l,i,t),(0,_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_3__/* .checkSpatialQuerySupport */ .c0)(t,r,o),(0,_projectionSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .checkProjectionSupport */ .Nk)(o,t.outSR)]).then((()=>t))}async function F(i,s,r,o){let n=[];if(r.valueExpression){const{arcadeUtils:e}=await (0,_support_loadArcade_js__WEBPACK_IMPORTED_MODULE_4__/* .loadArcade */ .l)();n=e.extractFieldNames(r.valueExpression)}if(r.field&&n.push(r.field),r.field2&&n.push(r.field2),r.field3&&n.push(r.field3),r.normalizationField&&n.push(r.normalizationField),!n.length&&!r.valueExpression)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(u,"field or valueExpression is required",{params:r});(0,_attributeSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .validateFields */ .MG)(i,s,n,{expressionName:"statistics",query:o})}function h(e){return null!=e&&e.every((e=>"exceedslimit"!==e.statisticType))}


/***/ }),

/***/ 70759:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  tC: () => (/* binding */ d),
  c0: () => (/* binding */ w),
  xt: () => (/* binding */ I)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var core_Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/contains.js
var contains = __webpack_require__(1364);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/intersectsBase.js
var intersectsBase = __webpack_require__(43525);
;// ../node_modules/@arcgis/core/geometry/support/intersects.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function s(s){return"mesh"===s?intersectsBase/* extentIntersectsExtent */.xB:(0,intersectsBase/* getFeatureExtentIntersector */.xK)(s)}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/jsonUtils.js
var jsonUtils = __webpack_require__(1171);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var spatialReferenceUtils = __webpack_require__(87926);
;// ../node_modules/@arcgis/core/layers/graphics/contains.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function n(n,t){return n?t?4:3:t?3:2}function t(n,t,r,e){return o(n,t,r,e.coords[0],e.coords[1])}function contains_r(t,r,e,c,u,f){const s=n(u,f),{coords:i,lengths:l}=c;if(!l)return!1;for(let n=0,d=0;n<l.length;n++,d+=s)if(!o(t,r,e,i[d],i[d+1]))return!1;return!0}function o(t,r,o,c,u){if(!t)return!1;const f=n(r,o),{coords:s,lengths:i}=t;let l=!1,d=0;for(const n of i)l=e(l,s,f,d,n,c,u),d+=n*f;return l}function e(n,t,r,o,e,c,u){let f=n,s=o;for(let i=o,l=o+e*r;i<l;i+=r){s=i+r,s===l&&(s=o);const n=t[i],e=t[i+1],d=t[s],g=t[s+1];(e<u&&g>=u||g<u&&e>=u)&&n+(u-e)/(g-e)*(d-n)<c&&(f=!f)}return f}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/featureConversionUtils.js
var featureConversionUtils = __webpack_require__(21355);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/OptimizedGeometry.js
var OptimizedGeometry = __webpack_require__(88443);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/data/geometryUtils.js
var geometryUtils = __webpack_require__(95694);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/data/projectionSupport.js
var projectionSupport = __webpack_require__(23783);
;// ../node_modules/@arcgis/core/layers/graphics/data/spatialQuerySupport.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const f="unsupported-query",R={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultiPatch:!1,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultiPatch:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function S(e){return null!=e&&!0===R.spatialRelationship[e]}function j(e){return null!=e&&!0===R.queryGeometry[(0,jsonUtils/* getJsonType */.$B)(e)]}function G(e){return null!=e&&!0===R.layerGeometry[e]}const g={esriSpatialRelIntersects:()=>__webpack_require__.e(/* import() */ 4619).then(__webpack_require__.bind(__webpack_require__, 4619)),esriSpatialRelContains:()=>__webpack_require__.e(/* import() */ 720).then(__webpack_require__.bind(__webpack_require__, 80720)),esriSpatialRelCrosses:()=>__webpack_require__.e(/* import() */ 2569).then(__webpack_require__.bind(__webpack_require__, 22569)),esriSpatialRelDisjoint:()=>__webpack_require__.e(/* import() */ 8537).then(__webpack_require__.bind(__webpack_require__, 8537)),esriSpatialRelEnvelopeIntersects:null,esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:()=>__webpack_require__.e(/* import() */ 561).then(__webpack_require__.bind(__webpack_require__, 50561)),esriSpatialRelTouches:()=>__webpack_require__.e(/* import() */ 3294).then(__webpack_require__.bind(__webpack_require__, 23294)),esriSpatialRelWithin:()=>__webpack_require__.e(/* import() */ 102).then(__webpack_require__.bind(__webpack_require__, 80102)),esriSpatialRelRelation:null};function h(e){const r=g[e];if(null==r)throw new Error(`Cannot load unsupported spatial operator: ${e}`);return r()}async function I(e,n,a,c,f){if((0,jsonUtils/* isPolygon */.Bi)(n)){if("esriGeometryPoint"===a&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){const e=(0,featureConversionUtils/* convertFromPolygon */.Ye)(new OptimizedGeometry/* default */.A,n,!1,!1);return r=>t(e,!1,!1,r)}if("esriGeometryMultipoint"===a){const r=(0,featureConversionUtils/* convertFromPolygon */.Ye)(new OptimizedGeometry/* default */.A,n,!1,!1);if("esriSpatialRelContains"===e)return e=>contains_r(r,!1,!1,e,c,f)}}if((0,jsonUtils/* isExtent */.ZC)(n)){if("esriGeometryPoint"===a&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return e=>(0,contains/* extentContainsPoint */.qz)(n,(0,geometryUtils/* getGeometry */.pL)(a,c,f,e));if("esriGeometryMultipoint"===a&&"esriSpatialRelContains"===e)return e=>(0,contains/* extentContainsMultipoint */.rL)(n,(0,geometryUtils/* getGeometry */.pL)(a,c,f,e));if("esriSpatialRelIntersects"===e){const e=s(a);return r=>e(n,(0,geometryUtils/* getGeometry */.pL)(a,c,f,r))}}"esriSpatialRelEnvelopeIntersects"===e&&(e="esriSpatialRelIntersects");const R=await h(e);return e=>R.execute(n,(0,geometryUtils/* getGeometry */.pL)(a,c,f,e))}async function w(r,t,i){const{spatialRel:o,geometry:s}=r;if(s){if(!S(o))throw new core_Error/* default */.A(f,"Unsupported query spatial relationship",{query:r});if((0,spatialReferenceUtils/* isValid */.fn)(s.spatialReference)&&(0,spatialReferenceUtils/* isValid */.fn)(i)){if(!j(s))throw new core_Error/* default */.A(f,"Unsupported query geometry type",{query:r});if(!G(t))throw new core_Error/* default */.A(f,"Unsupported layer geometry type",{query:r});if(r.outSR)return (0,projectionSupport/* checkProjectionSupport */.Nk)(r.geometry?.spatialReference,r.outSR)}}}function d(e){if((0,jsonUtils/* isExtent */.ZC)(e))return!0;if((0,jsonUtils/* isPolygon */.Bi)(e)){for(const r of e.rings){if(5!==r.length)return!1;if(r[0][0]!==r[1][0]||r[0][0]!==r[4][0]||r[2][0]!==r[3][0]||r[0][1]!==r[3][1]||r[0][1]!==r[4][1]||r[1][1]!==r[2][1])return!1}return!0}return!1}


/***/ }),

/***/ 71339:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ l),
/* harmony export */   W: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73345);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function n(n,l){if(!n)return null;const u=l.featureAdapter,{startTimeField:r,endTimeField:e}=n;let i=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY;if(r&&e)await l.forEach((n=>{const l=u.getAttribute((0,_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .toConst */ .zI)(n),r),s=u.getAttribute((0,_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .toConst */ .zI)(n),e);null==l||isNaN(l)||(i=Math.min(i,l)),null==s||isNaN(s)||(o=Math.max(o,s))}));else{const n=r||e;await l.forEach((l=>{const r=u.getAttribute((0,_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .toConst */ .zI)(l),n);null==r||isNaN(r)||(i=Math.min(i,r),o=Math.max(o,r))}))}return{start:i,end:o}}function l(t,n,l){if(!n||!t)return null;const{startTimeField:i,endTimeField:o}=t;if(!i&&!o)return null;const{start:s,end:a}=n;if(null===s&&null===a)return null;if(void 0===s&&void 0===a)return e();const c=l.getAttributeAsTimestamp?.bind(l)??l.getAttribute.bind(l);return i&&o?u(c,i,o,s,a):r(c,i||o,s,a)}function u(t,n,l,u,r){return null!=u&&null!=r?e=>{const i=t(e,n),o=t(e,l);return(null==i||i<=r)&&(null==o||o>=u)}:null!=u?n=>{const r=t(n,l);return null==r||r>=u}:null!=r?l=>{const u=t(l,n);return null==u||u<=r}:void 0}function r(t,n,l,u){return null!=l&&null!=u&&l===u?u=>t(u,n)===l:null!=l&&null!=u?r=>{const e=t(r,n);return null!=e&&e>=l&&e<=u}:null!=l?u=>{const r=t(u,n);return null!=r&&r>=l}:null!=u?l=>{const r=t(l,n);return null!=r&&r<=u}:void 0}function e(){return()=>!1}


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

/***/ 30245:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76724);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63863);
/* harmony import */ var _BinParametersBase_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18370);
/* harmony import */ var _NormalizationBinParametersMixin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(67281);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function p(r,e,o){(0,_core_object_js__WEBPACK_IMPORTED_MODULE_1__/* .setDeepValue */ .sM)(o,r instanceof Date?r.getTime():r,e)}let m=class extends((0,_NormalizationBinParametersMixin_js__WEBPACK_IMPORTED_MODULE_9__/* .NormalizationBinParametersMixin */ .K)(_BinParametersBase_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)){constructor(r){super(r),this.numBins=null,this.end=null,this.start=null,this.type="auto-interval"}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number,json:{name:"parameters.numberOfBins",write:!0}})],m.prototype,"numBins",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({json:{name:"parameters.end",write:{writer:p}}})],m.prototype,"end",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({json:{name:"parameters.start",write:{writer:p}}})],m.prototype,"start",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__/* .enumeration */ .e)({autoIntervalBin:"auto-interval"},{readOnly:!0})],m.prototype,"type",void 0),m=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.rest.support.AutoIntervalBinParameters")],m),m.from=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__/* .ensureType */ .dp)(m);


/***/ }),

/***/ 18370:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ y)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(24793);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
;// ../node_modules/@arcgis/core/rest/support/AttributeBinsGrouping.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const a=new jsonMap/* JSONMap */.J({esriFieldTypeInteger:"integer",esriFieldTypeString:"string"});let l=class extends(Clonable/* default */.A.ClonableMixin(JSONSupport/* default */.A)){constructor(o){super(o),this.alias=null,this.responseType=null,this.type=null,this.value=null,this.valueType=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{name:"outAlias",write:!0}})],l.prototype,"alias",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],l.prototype,"responseType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],l.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],l.prototype,"value",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)(a)],l.prototype,"valueType",void 0),l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.rest.support.AttributeBinsGrouping")],l);const c=l;l.from=(0,ensureType/* ensureType */.dp)(l);

;// ../node_modules/@arcgis/core/rest/support/BinParametersBase.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const BinParametersBase_l=new jsonMap/* JSONMap */.J({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeDate:"date",esriFieldTypeDateOnly:"date-only",esriFieldTypeTimeOnly:"time-only",esriFieldTypeTimestampOffset:"timestamp-offset"}),BinParametersBase_a=new jsonMap/* JSONMap */.J({naturalLog:"natural-log",squareRoot:"square-root"});let y=class extends(Clonable/* default */.A.ClonableMixin(JSONSupport/* default */.A)){constructor(e){super(e),this.expression=null,this.expressionValueType=null,this.field=null,this.firstDayOfWeek=null,this.hideUpperBound=null,this.splitBy=null,this.stackBy=null,this.transformation=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{name:"onExpression.value",write:!0}})],y.prototype,"expression",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)(BinParametersBase_l,{name:"onExpression.valueType"})],y.prototype,"expressionValueType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{name:"onField",write:!0}})],y.prototype,"field",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],y.prototype,"firstDayOfWeek",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],y.prototype,"hideUpperBound",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:c,json:{write:{overridePolicy(){return{enabled:null!=this.splitBy?.value||null!=this.splitBy?.type}}}}})],y.prototype,"splitBy",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:c,json:{write:{target:{stackBy:{type:c},jsonStyle:{type:String}},writer:(e,t)=>{e&&(t.stackBy=e.toJSON(),null!=e.responseType&&(t.jsonStyle=e.responseType))},overridePolicy(){return{enabled:null!=this.stackBy?.value||null!=this.stackBy?.type}}},read:{source:["stackBy","jsonStyle"],reader:(e,t)=>c.fromJSON({...t.stackBy,responseType:t.jsonStyle})}}})],y.prototype,"stackBy",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)(BinParametersBase_a)],y.prototype,"transformation",void 0),y=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.rest.support.BinParametersBase")],y);


/***/ }),

/***/ 24465:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ DateBinParameters_m)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/object.js
var object = __webpack_require__(76724);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(9272);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(28902);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/BinParametersBase.js + 1 modules
var BinParametersBase = __webpack_require__(18370);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(24793);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/DateBinUtils.js
var DateBinUtils = __webpack_require__(77018);
;// ../node_modules/@arcgis/core/rest/support/DateBinTimeInterval.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let m=class extends(Clonable/* default */.A.ClonableMixin(JSONSupport/* default */.A)){constructor(o){super(o),this.value=null,this.unit=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{name:"number",write:!0}})],m.prototype,"value",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)(DateBinUtils/* unitsDict */.g)],m.prototype,"unit",void 0),m=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.rest.support.DateBinTimeInterval")],m);const a=m;m.from=(0,ensureType/* ensureType */.dp)(m);

;// ../node_modules/@arcgis/core/rest/support/DateBinParameters.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function i(t,r,o){(0,object/* setDeepValue */.sM)(o,"string"==typeof t?t:t?.getTime(),r)}function l(t,e){const r=t.parameters[e];return r?"string"==typeof r?r:new Date(r):null}let DateBinParameters_m=class extends BinParametersBase/* default */.A{constructor(t){super(t),this.end=null,this.interval=null,this.offset=null,this.returnFullIntervalBin=!1,this.start=null,this.snapToData=null,this.type="date"}};(0,tslib_es6._)([(0,property/* property */.MZ)({cast:t=>null!=t?"string"==typeof t?t:new Date(t):null,json:{name:"parameters.end",read:{reader:(t,e)=>l(e,"end")},write:{writer:i}}})],DateBinParameters_m.prototype,"end",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:a,json:{name:"parameters",write:!0}})],DateBinParameters_m.prototype,"interval",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:a,json:{name:"parameters.offset",write:!0}})],DateBinParameters_m.prototype,"offset",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{name:"parameters.returnFullIntervalBin",write:!0}})],DateBinParameters_m.prototype,"returnFullIntervalBin",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({cast:t=>null!=t?"string"==typeof t?t:new Date(t):null,json:{name:"parameters.start",read:{reader:(t,e)=>l(e,"start")},write:{writer:i}}})],DateBinParameters_m.prototype,"start",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{name:"parameters.snapToData",write:!0}})],DateBinParameters_m.prototype,"snapToData",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({dateBin:"date"},{readOnly:!0})],DateBinParameters_m.prototype,"type",void 0),DateBinParameters_m=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.rest.support.DateBinParameters")],DateBinParameters_m),DateBinParameters_m.from=(0,ensureType/* ensureType */.dp)(DateBinParameters_m);


/***/ }),

/***/ 77018:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59851);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const s=(0,_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__/* .strict */ .O)()({year:"years",quarter:"quarters",month:"months",week:"weeks",day:"days",hour:"hours",minute:"minutes",second:"seconds"});


/***/ }),

/***/ 35985:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76724);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63863);
/* harmony import */ var _BinParametersBase_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18370);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function p(r){return r[0]instanceof Date}function c(r,e,s){(0,_core_object_js__WEBPACK_IMPORTED_MODULE_1__/* .setDeepValue */ .sM)(s,r&&p(r)?r.map((r=>r.getTime())):r,e)}let n=class extends _BinParametersBase_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A{constructor(r){super(r),this.boundaries=[],this.type="fixed-boundaries"}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({json:{name:"parameters.boundaries",write:{writer:c}}})],n.prototype,"boundaries",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__/* .enumeration */ .e)({fixedBoundariesBin:"fixed-boundaries"},{readOnly:!0})],n.prototype,"type",void 0),n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.rest.support.FixedBoundariesBinParameters")],n),n.from=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__/* .ensureType */ .dp)(n);


/***/ }),

/***/ 34344:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76724);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63863);
/* harmony import */ var _BinParametersBase_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18370);
/* harmony import */ var _NormalizationBinParametersMixin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(67281);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function n(r,t,o){(0,_core_object_js__WEBPACK_IMPORTED_MODULE_1__/* .setDeepValue */ .sM)(o,r instanceof Date?r.getTime():r,t)}let m=class extends((0,_NormalizationBinParametersMixin_js__WEBPACK_IMPORTED_MODULE_9__/* .NormalizationBinParametersMixin */ .K)(_BinParametersBase_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)){constructor(r){super(r),this.end=null,this.interval=null,this.start=null,this.type="fixed-interval"}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({json:{name:"parameters.end",write:{writer:n}}})],m.prototype,"end",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number,json:{name:"parameters.interval",write:!0}})],m.prototype,"interval",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({json:{name:"parameters.start",write:{writer:n}}})],m.prototype,"start",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__/* .enumeration */ .e)({fixedIntervalBin:"fixed-interval"},{readOnly:!0})],m.prototype,"type",void 0),m=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.rest.support.FixedIntervalBinParameters")],m),m.from=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__/* .ensureType */ .dp)(m);


/***/ }),

/***/ 96568:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $r: () => (/* binding */ x),
/* harmony export */   Jc: () => (/* binding */ b),
/* harmony export */   Lc: () => (/* binding */ F),
/* harmony export */   MH: () => (/* binding */ T),
/* harmony export */   Wk: () => (/* binding */ M),
/* harmony export */   gV: () => (/* binding */ w),
/* harmony export */   lX: () => (/* binding */ N),
/* harmony export */   rb: () => (/* binding */ I),
/* harmony export */   sf: () => (/* binding */ U)
/* harmony export */ });
/* unused harmony exports getSumOfAttributesExpr, verifyFieldType, verifyNumericField */
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(89882);
/* harmony import */ var _core_timeUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46437);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97066);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78983);
/* harmony import */ var _geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20698);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87926);
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42453);
/* harmony import */ var _renderers_support_heatmapUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27927);
/* harmony import */ var _support_utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(99340);
/* harmony import */ var _statistics_utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(27218);
/* harmony import */ var _support_loadArcade_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(35387);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let $=null;const g=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function j(e,t,n){return e.x<0?e.x+=t:e.x>n&&(e.x-=t),e}function x(e,t,n,o){const a=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isWrappable */ .d9)(n)?(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .getInfo */ .Vp)(n):null,u=a?Math.round((a.valid[1]-a.valid[0])/t.scale[0]):null;return e.map((e=>{const n=new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(e.geometry);return (0,_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .quantizePoint */ .Gy)(t,n,n),e.geometry=a?j(n,u??0,o[0]):n,e}))}function w(e,n=18,r,o,i){const s=new Float64Array(o*i);n=Math.round((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .pt2px */ .Lz)(n));let l=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;const u=(0,_renderers_support_heatmapUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .createValueFunction */ .YW)(r);for(const{geometry:t,attributes:f}of e){const{x:e,y:r}=t,c=Math.max(0,e-n),p=Math.max(0,r-n),d=Math.min(i,r+n),h=Math.min(o,e+n),y=+u(f);for(let t=p;t<d;t++)for(let i=c;i<h;i++){const u=t*o+i,f=(0,_renderers_support_heatmapUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .evaluateDensityKernel */ .hv)(i-e,t-r,n)*y,c=s[u]+=f;l=Math.min(l,c),a=Math.max(a,c)}}return{min:l,max:a}}function I(e){const t=g.exec(e);if(!t)return null;const{hh:r,mm:o,ss:i,ms:s}=t.groups;return Number(r)*_core_timeUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .millisecondsPerTimeUnit */ .vf.hours+Number(o)*_core_timeUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .millisecondsPerTimeUnit */ .vf.minutes+Number(i)*_core_timeUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .millisecondsPerTimeUnit */ .vf.seconds+Number(s||0)}async function b(e,t,n=!0){if(!t)return[];const{field:r,field2:i,field3:s,fieldDelimiter:l,fieldInfos:u,timeZone:f}=e,c=r&&u?.find((e=>e.name.toLowerCase()===r.toLowerCase())),m=!!c&&(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .isTimeOnlyField */ .OH)(c),g=!!c&&(0,_support_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .isAnyDateField */ .fs)(c),j=e.valueExpression,x=e.normalizationType,w=e.normalizationField,b=e.normalizationTotal,F=[],N=e.viewInfoParams;let E=null,v=null;if(j){if(!$){const{arcadeUtils:e}=await (0,_support_loadArcade_js__WEBPACK_IMPORTED_MODULE_11__/* .loadArcade */ .l)();$=e}$.hasGeometryOperations(j)&&await $.enableGeometryOperations(),E=$.createFunction(j),v=N?$.getViewInfo({viewingMode:N.viewingMode,scale:N.scale,spatialReference:new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A(N.spatialReference)}):null}const U=e.fieldInfos,M=!(t[0]&&"declaredClass"in t[0]&&"esri.Graphic"===t[0].declaredClass)&&U?{fields:U}:null;return t.forEach((e=>{const t=e.attributes;let o;if(j){const t=M?{...e,layer:M}:e,n=$.createExecContext(t,v,f);o=$.executeFunction(E,n)}else t&&(o=t[r],i?(o=`${(0,_statistics_utils_js__WEBPACK_IMPORTED_MODULE_9__/* .processNullValue */ .gJ)(o)}${l}${(0,_statistics_utils_js__WEBPACK_IMPORTED_MODULE_9__/* .processNullValue */ .gJ)(t[i])}`,s&&(o=`${o}${l}${(0,_statistics_utils_js__WEBPACK_IMPORTED_MODULE_9__/* .processNullValue */ .gJ)(t[s])}`)):"string"==typeof o&&n&&(g?o=o?new Date(o).getTime():null:m&&(o=o?I(o):null)));if(x&&"number"==typeof o&&isFinite(o)){const e=t&&parseFloat(t[w]);o=(0,_statistics_utils_js__WEBPACK_IMPORTED_MODULE_9__/* .getNormalizedValue */ .zS)(o,x,e,b)}F.push(o)})),F}function F(e){const t=e.field,n=e.normalizationType,r=e.normalizationField;let o;return"field"===n?o="(NOT "+r+" = 0)":"log"!==n&&"natural-log"!==n&&"square-root"!==n||(o=`(${t} > 0)`),o}function N(e,t,n){const r=null!=t?e+" >= "+t:"",o=null!=n?e+" <= "+n:"";let i="";return i=r&&o?U(r,o):r||o,i?"("+i+")":""}function E(t,n,r,o){let i;return n?n.name!==t.objectIdField&&o.includes(n.type)||(i=new e(r,"'field' should be one of these types: "+o.join(","))):i=new e(r,"'field' is not defined in the layer schema"),i}function v(t,n,r){let o;return n?n.name!==t.objectIdField&&u(n)||(o=new e(r,"'field' should be one of these numeric types: "+f.join(","))):o=new e(r,"'field' is not defined in the layer schema"),o}function U(e,t){let n=null!=e?e:"";return null!=t&&t&&(n=n?"("+n+") AND ("+t+")":t),n}function M(t,n){if(t&&"intersects"!==t.spatialRelationship)return new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(n,"Only 'intersects' spatialRelationship is supported for featureFilter")}function T(t,n,r){const o=z({layer:t,fields:n});if(o.length)return new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(r,"Unknown fields: "+o.join(", ")+". You can only use fields defined in the layer schema");const i=R({layer:t,fields:n});return i.length?new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(r,"Unsupported fields: "+i.join(", ")+". You can only use fields that can be fetched i.e. AdapterFieldUsageInfo.supportsStatistics must be true"):void 0}function z(e){const t=e.layer;return e.fields.filter((e=>!t.getField(e)))}function R(e){const t=e.layer;return e.fields.filter((e=>{const n=t.getFieldUsageInfo(e);return!n||!n.supportsStatistics}))}function A(e,t,n){const r=[],o=[],i=[],s=[],l=[];e.forEach(((e,t)=>{const a=e.field?"field":"expression",u=e.field||e.valueExpression;e.field?(l.push(u),o.push(`var ${a}${t} = Number($feature["${u}"]);`)):(r.push(`function getValueForExpr${t}() {\n  ${u} \n}`),o.push(`var ${a}${t} = Number(getValueForExpr${t}());`)),n||i.push(`${a}${t} = IIf(${a}${t} < 0, 0, ${a}${t});`),s.push(`${a}${t}`)}));const a=r.length?null:l.reduce(((e,t)=>`${e} + ${t}`));let u=null;t||n?t?n||a&&(u=`(( ${a} ) >= 0)`):a&&(u=`(( ${a} ) <> 0)`):a&&(u=`(( ${a} ) > 0)`);return{valueExpression:[r.length?r.join("\n"):"",o.join("\n"),i.join("\n"),`var total = ${s.join(" + ")};`,"return total;"].filter(Boolean).join("\n\n"),sqlExpression:a,sqlWhere:u}}


/***/ }),

/***/ 27218:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $y: () => (/* binding */ U),
/* harmony export */   Ak: () => (/* binding */ L),
/* harmony export */   FM: () => (/* binding */ g),
/* harmony export */   G_: () => (/* binding */ p),
/* harmony export */   OR: () => (/* binding */ j),
/* harmony export */   Rw: () => (/* binding */ E),
/* harmony export */   Vb: () => (/* binding */ d),
/* harmony export */   al: () => (/* binding */ q),
/* harmony export */   b3: () => (/* binding */ k),
/* harmony export */   gJ: () => (/* binding */ m),
/* harmony export */   jM: () => (/* binding */ P),
/* harmony export */   lv: () => (/* binding */ $),
/* harmony export */   oZ: () => (/* binding */ C),
/* harmony export */   qg: () => (/* binding */ v),
/* harmony export */   sU: () => (/* binding */ G),
/* harmony export */   wy: () => (/* binding */ c),
/* harmony export */   z9: () => (/* binding */ f),
/* harmony export */   zS: () => (/* binding */ B)
/* harmony export */ });
/* harmony import */ var _rest_support_ClassBreaksDefinition_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83763);
/* harmony import */ var _rest_support_generateRendererUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47003);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const t="<Null>",l="equal-interval",i=1,a=5,o=10,u=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,r=new Set(["esriFieldTypeDate","esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeOID","esriFieldTypeBigInteger"]),s=new Set(["esriFieldTypeTimeOnly","esriFieldTypeDateOnly"]),c=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function m(e){return null==e||"string"==typeof e&&!e?t:e}function d(e){const n=null!=e.normalizationField||null!=e.normalizationType,t=null!=e.minValue||null!=e.maxValue,l=!!e.sqlExpression&&e.supportsSQLExpression;return!n&&!t&&!l}function f(e){const{outStatisticTypes:n}=e,t=e.returnDistinct?[...new Set(e.values)]:e.values,l=t.filter((e=>null!=e)).sort(),i=l.length,a={count:i,min:l[0],max:l[i-1]};return e.supportsNullCount&&(a.nullcount=t.length-i),!e.percentileParams||n?.include?.length&&!n.include.includes("median")||n?.exclude?.length&&n.exclude.includes("median")||(a.median=v(t,e.percentileParams)),a}function p(e){const{values:n,useSampleStdDev:t,supportsNullCount:l,outStatisticTypes:i}=e;let a=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY,u=null,r=null,s=null,c=null,m=0;const d=null==e.minValue?-1/0:e.minValue,f=null==e.maxValue?1/0:e.maxValue;for(const v of n)Number.isFinite(v)?v>=d&&v<=f&&(u=null===u?v:u+v,a=Math.min(a,v),o=Math.max(o,v),m++):"string"==typeof v&&m++;if(m&&null!=u){r=u/m;let e=0;for(const t of n)Number.isFinite(t)&&t>=d&&t<=f&&(e+=(t-r)**2);c=t?m>1?e/(m-1):0:m>0?e/m:0,s=Math.sqrt(c)}else a=null,o=null;const p={avg:r,count:m,max:o,min:a,stddev:s,sum:u,variance:c};return l&&(p.nullcount=n.length-m),!e.percentileParams||i?.include?.length&&!i.include.includes("median")||i?.exclude?.length&&i.exclude.includes("median")||(p.median=v(n,e.percentileParams)),p}function v(e,n){const{fieldType:t,value:l,orderBy:i,isDiscrete:a}=n,o=g(t,"desc"===i);if(0===(e=[...e].filter((e=>null!=e)).sort(((e,n)=>o(e,n)))).length)return null;if(l<=0)return e[0];if(l>=1)return e[e.length-1];const u=(e.length-1)*l,r=Math.floor(u),s=r+1,c=u%1,m=e[r],d=e[s];return s>=e.length||a||"string"==typeof m||"string"==typeof d?m:m*(1-c)+d*c}function g(e,n){if(e){if(r.has(e))return N(n);if(s.has(e))return D(n,!1);if("esriFieldTypeTimestampOffset"===e)return F(n);const t=D(n,!0);if("esriFieldTypeString"===e)return t;if("esriFieldTypeGUID"===e||"esriFieldTypeGlobalID"===e)return(e,n)=>t(M(e),M(n))}const t=n?1:-1,l=N(n),i=D(n,!0),a=x(n);return(e,n)=>"number"==typeof e&&"number"==typeof n?l(e,n):"string"==typeof e&&"string"==typeof n?i(e,n):a(e,n)??t}const h=(e,n)=>null==e?null==n?0:1:null==n?-1:null,T=(e,n)=>null==e?null==n?0:-1:null==n?1:null;function x(e){return e?h:T}const y=(e,n)=>T(e,n)??(e===n?0:new Date(e).getTime()-new Date(n).getTime()),V=(e,n)=>h(e,n)??(e===n?0:new Date(n).getTime()-new Date(e).getTime());function F(e){return e?V:y}const I=(e,n)=>T(e,n)??(e===n?0:e<n?-1:1),b=(e,n)=>h(e,n)??(e===n?0:e<n?1:-1);function D(e,n){if(!n)return e?b:I;const t=x(e);return e?(e,n)=>{const l=t(e,n);return null!=l?l:(e=e.toUpperCase())>(n=n.toUpperCase())?-1:e<n?1:0}:(e,n)=>{const l=t(e,n);return null!=l?l:(e=e.toUpperCase())<(n=n.toUpperCase())?-1:e>n?1:0}}const z=(e,n)=>h(e,n)??n-e,S=(e,n)=>T(e,n)??e-n;function N(e){return e?z:S}function M(e){return e.slice(24,36)+e.slice(19,23)+e.slice(16,18)+e.slice(14,16)+e.slice(11,13)+e.slice(9,11)+e.slice(6,8)+e.slice(4,6)+e.slice(2,4)+e.slice(0,2)}function C(e,n,t){let l;for(l in e)n?.include?.length&&!n.include.includes(l)||n?.exclude?.length&&n.exclude.includes(l)?delete e[l]:c.includes(l)&&(Number.isFinite(e[l])||(e[l]=null));return t?(["avg","stddev","variance"].forEach((n=>{null!=e[n]&&(e[n]=Math.ceil(e[n]??0))})),e):e}function k(e){const n={};for(let t of e)(null==t||"string"==typeof t&&""===t.trim())&&(t=null),null==n[t]?n[t]={count:1,data:t}:n[t].count++;return{count:n}}function w(e){return"coded-value"!==e?.type?[]:e.codedValues.map((e=>e.code))}function $(e,n,t,l){const i=e.count,a=[];if(t&&n){const e=[],t=w(n[0]);for(const i of t)if(n[1]){const t=w(n[1]);for(const a of t)if(n[2]){const t=w(n[2]);for(const n of t)e.push(`${m(i)}${l}${m(a)}${l}${m(n)}`)}else e.push(`${m(i)}${l}${m(a)}`)}else e.push(i);for(const n of e)i.hasOwnProperty(n)||(i[n]={data:n,count:0})}for(const o in i){const e=i[o];a.push({value:e.data,count:e.count,label:e.label})}return{uniqueValueInfos:a}}function B(e,n,t,l){let i=null;switch(n){case"log":0!==e&&(i=Math.log(e)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(l)&&0!==l&&(i=e/l*100);break;case"field":Number.isFinite(t)&&0!==t&&(i=e/t);break;case"natural-log":e>0&&(i=Math.log(e));break;case"square-root":e>0&&(i=e**.5)}return i}function E(e,t,l){const i=q({field:t.field,normalizationType:t.normalizationType,normalizationField:t.normalizationField,classificationMethod:t.classificationMethod,standardDeviationInterval:t.standardDeviationInterval,definedInterval:t.definedInterval,breakCount:t.numClasses||a});return e=O(e,t.minValue,t.maxValue),(0,_rest_support_generateRendererUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .createGenerateRendererClassBreaks */ .t)({definition:i,values:e,normalizationTotal:t.normalizationTotal},l)}function O(e,n,t){const l=n??-1/0,i=t??1/0;return e.filter((e=>Number.isFinite(e)&&e>=l&&e<=i))}function q(n){const{breakCount:t,field:a,normalizationField:o,normalizationType:u}=n,r=n.classificationMethod||l,s="standard-deviation"===r?n.standardDeviationInterval||i:void 0,c="defined-interval"===r?n.definedInterval:void 0;return new _rest_support_ClassBreaksDefinition_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({breakCount:t,classificationField:a,classificationMethod:r,normalizationField:"field"===u?o:void 0,normalizationType:u,standardDeviationInterval:s,definedInterval:c})}function P(e,n){let t=e.classBreaks;const l=t.length,i=t[0]?.minValue,a=t[l-1]?.maxValue,o="standard-deviation"===n,r=u;return t=t.map((e=>{const n=e.label,t={minValue:e.minValue,maxValue:e.maxValue,label:n};if(o&&n){const e=n.match(r),l=e?.map((e=>+e.trim()))??[];2===l.length?(t.minStdDev=l[0],t.maxStdDev=l[1],l[0]<0&&l[1]>0&&(t.hasAvg=!0)):1===l.length&&(n.includes("<")?(t.minStdDev=null,t.maxStdDev=l[0]):n.includes(">")&&(t.minStdDev=l[0],t.maxStdDev=null))}return t})),{minValue:i,maxValue:a,classBreakInfos:t,normalizationTotal:e.normalizationTotal}}function U(e,n){const t=G(e,n);if(null==t.min&&null==t.max)return{bins:[],minValue:t.min,maxValue:t.max,normalizationTotal:n.normalizationTotal};const l=t.intervals,i=t.min??0,a=t.max??0,o=l.map(((e,n)=>({minValue:l[n][0],maxValue:l[n][1],count:0})));for(const u of e)if(null!=u&&u>=i&&u<=a){const e=L(l,u);e>-1&&o[e].count++}return{bins:o,minValue:i,maxValue:a,normalizationTotal:n.normalizationTotal}}function G(e,n,t=!1){const{field:l,classificationMethod:i,standardDeviationInterval:a,definedInterval:u,normalizationType:r,normalizationField:s,normalizationTotal:c,minValue:m,maxValue:f}=n,v=n.numBins||o;let g=null,h=null,T=null;if((!i||"equal-interval"===i)&&!r){if(null!=m&&null!=f)g=m,h=f;else{const n=p({values:e,minValue:m,maxValue:f,useSampleStdDev:!r,supportsNullCount:d({normalizationType:r,normalizationField:s,minValue:m,maxValue:f})});g=n.min??null,h=n.max??null}T=j(g??0,h??0,v)}else{const{classBreaks:n}=E(e,{field:l,normalizationType:r,normalizationField:s,normalizationTotal:c,classificationMethod:i,standardDeviationInterval:a,definedInterval:u,minValue:m,maxValue:f,numClasses:v},null!=m&&null!=f?[m,f]:void 0);g=n[0]?.minValue,h=n[n.length-1]?.maxValue,T=n.map((e=>[e.minValue,e.maxValue]))}if(t&&T.length){const e=T.at(-1)[1];T.push([e,e])}return{min:g,max:h,intervals:T}}function L(e,n){let t=-1;for(let l=e.length-1;l>=0;l--){if(n>=e[l][0]){t=l;break}}return t}function j(e,n,t){const l=(n-e)/t,i=[];let a,o=e;for(let u=1;u<=t;u++)a=o+l,a=Number(a.toFixed(16)),i.push([o,u===t?n:a]),o=a;return i}


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

/***/ 9392:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ S)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Evented.js
var Evented = __webpack_require__(17306);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(84698);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projectionUtils.js + 2 modules
var projectionUtils = __webpack_require__(68490);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/data/QueryEngine.js + 1 modules
var QueryEngine = __webpack_require__(20458);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/Query.js
var Query = __webpack_require__(14474);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/jsonUtils.js
var jsonUtils = __webpack_require__(48887);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/pipeline/PipelineCommand.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class PipelineCommand_e{constructor(e,n,t){this.renderCommandContext=e,this.renderCommandBuffer=n,this.pipelineStateCommands=t}append(e){this.appendRenderCommands(e.renderCommandBuffer),this.appendPipelineStateCommands(e.pipelineStateCommands)}appendRenderCommands(e){this.renderCommandBuffer.commands.push(...e.commands),this.renderCommandBuffer.transferList.push(...e.transferList)}appendPipelineStateCommand(e){this.pipelineStateCommands.push(e)}appendPipelineStateCommands(e){for(const n of e)this.appendPipelineStateCommand(n)}async execute(){for(const e of this.pipelineStateCommands)e();await this.renderCommandContext.dispatchRenderCommands(this.renderCommandBuffer)}static create(n,t=[]){return new PipelineCommand_e(n,n.createRenderCommandBuffer(),t)}}function PipelineCommand_n(e){if(0===e.length)return null;return e.reduce(((e,n)=>(e.append(n),e)))}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(96220);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/IconSymbol3DLayer.js + 1 modules
var IconSymbol3DLayer = __webpack_require__(53300);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/ObjectSymbol3DLayer.js + 1 modules
var ObjectSymbol3DLayer = __webpack_require__(83680);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/Symbol3DMaterial.js + 1 modules
var Symbol3DMaterial = __webpack_require__(5159);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/pipeline/symbolization/factoryUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function factoryUtils_t(){return new IconSymbol3DLayer/* default */.A({material:new Symbol3DMaterial/* Symbol3DMaterial */.N({color:new Color/* default */.A("red")})})}function n(){return new ObjectSymbol3DLayer/* default */.A}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js
var mat4f64 = __webpack_require__(86128);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(58359);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f64.js
var vec4f64 = __webpack_require__(28152);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/IconSymbol3DLayerResource.js
var IconSymbol3DLayerResource = __webpack_require__(5666);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/graphics/graphicUtils.js
var graphicUtils = __webpack_require__(54096);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/graphics/placementUtils.js
var placementUtils = __webpack_require__(57089);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projection/projectBuffer.js
var projectBuffer = __webpack_require__(84119);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projection/projectVectorToVector.js
var projectVectorToVector = __webpack_require__(42120);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/aaBoundingRect.js
var aaBoundingRect = __webpack_require__(80510);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/pipeline/featureData/processingUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function processingUtils_n(r){const{featureCount:e}=r;if(0===e)return new Uint32Array;const t=new Uint32Array(e);return r.getObjectIdsArray(t),t}function processingUtils_a(r){const{featureCount:e}=r;if(0===e)return new Float64Array;const t=new Float64Array(3*e);return r.getCoordinatesArray(t),t}function i(r,e){const{featureCount:t}=r;if(0===t)return new Float64Array;return c(processingUtils_a(r),e)}function c(r,t){const o=r.length/3,n=t.viewSpatialReference,a=t.renderSpatialReference,i=new Float64Array(3*o);if(!(0,projectBuffer.projectBuffer)(r,n,0,i,a,0,o))throw new Error("Failed to project coordinates");return i}function processingUtils_f(e,n){const a=n.viewSpatialReference,i=n.renderSpatialReference,{extent:c}=e,f=(0,aaBoundingRect/* center */.gX)(c),u=(0,vec3f64/* create */.vt)();return (0,projectVectorToVector/* projectVectorToVector */.F)([f[0],f[1],0],a,u,i),u}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/Indices.js
var Indices = __webpack_require__(42965);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/pipeline/symbolization/symbolizationUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function symbolizationUtils_e(e){const n=new Map;for(const[t,r]of e)n.set(t,{...r,indices:(0,Indices/* compactIndices */.Dg)(r.indices)});return n}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/support/engineContent/sdfPrimitives.js
var sdfPrimitives = __webpack_require__(97213);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Attribute.js
var Attribute = __webpack_require__(70807);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js
var VertexAttribute = __webpack_require__(50645);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/pipeline/symbolization/IconSymbolLayerRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class f{constructor(e,t){this._context=null,this._symbolLayer=null,this._draped=!1,this._loaded=!1,this._loadingPromise=null,this._iconTextureID=null,this._materialId=null,this._context=t,this._symbolLayer=e}get loaded(){return this._loaded}load(){return null==this._loadingPromise&&(this._loadingPromise=this._load()),this._loadingPromise}_destroy(){this._iconTextureID=null}async _load(){const e=this._context.renderCommandContext,t=await e.createTexture((()=>(0,sdfPrimitives/* createTextureInfo */.I9)("circle")));this._iconTextureID=t;const r={anchorPosition:placementUtils/* namedAnchorToHUDMaterialAnchorPos */.Zd.center,occlusionTest:!0,hasSlicePlane:!1,color:this._getFillColor(),outlineColor:this._getOutlineColor(),outlineSize:1,distanceFieldBoundingBox:sdfPrimitives/* defaultBoundingBox */.PY,textureId:t,textureIsSignedDistanceField:!0,sampleSignedDistanceFieldTexelCenter:(0,sdfPrimitives/* requiresHalfTexelOffset */.ny)("circle")};this._materialId=await e.createMaterial({type:"hud",parameters:r}),await e.createDirectRenderer(this._materialId),this._loaded=!0}async createAddCommand(e){const{_materialId:t,_context:r}=this,{renderCommandContext:i}=r;if(null==t)throw new Error("expected material not to be null");const n=await this._createGeometry(e);if(null==n)return r.createPipelineCommand();const o=processingUtils_f(e,r);return r.createPipelineCommand(i.addDirectRendererGeometry(e.id,n,o))}async _createGeometry(e){const{_materialId:r,_context:i}=this,{mainThreadDelegate:n}=i,{featureCount:o}=e;if(0===o||null==r)return null;const a=processingUtils_n(e),l=processingUtils_a(e),s=await n.applyElevationAlignmentTo(l),y=c(s,i),p=new Float64Array([0,0,1]),_=new Float64Array([255,255,255,255]),f=new Float64Array([24,24]),g=new Float64Array([0,0,0,1]),x=new Float64Array([0,0]),b=new Float64Array([0]),w=new Uint32Array(o);for(let t=0;t<o;++t)w[t]=t;const I=new Uint32Array(o);for(let t=0;t<o;++t)I[t]=0;const P=new Attribute/* Attribute */.n(y,w,3,!0),A=new Attribute/* Attribute */.n(p,I,3,!0),O=new Attribute/* Attribute */.n(x,I,2,!0),D=new Attribute/* Attribute */.n(_,I,4,!0),T=new Attribute/* Attribute */.n(b,I,1,!0),j=new Attribute/* Attribute */.n(f,I,2,!0),F=new Attribute/* Attribute */.n(g,I,4,!0),U=[[VertexAttribute/* VertexAttribute */.r.POSITION,P],[VertexAttribute/* VertexAttribute */.r.NORMAL,A],[VertexAttribute/* VertexAttribute */.r.UV0,O],[VertexAttribute/* VertexAttribute */.r.COLOR,D],[VertexAttribute/* VertexAttribute */.r.ROTATION,T],[VertexAttribute/* VertexAttribute */.r.SIZE,j],[VertexAttribute/* VertexAttribute */.r.CENTEROFFSETANDDISTANCE,F]],v=new Uint8Array(o);e.getVisibilityArray(v);return{attributes:symbolizationUtils_e(U),objectAndLayerIdColor:void 0,transformation:(0,mat4f64/* create */.vt)(),materialId:r,objectIds:a,visibilities:v}}async createRemoveCommand(e){const{_materialId:t,_context:r}=this,i=r.renderCommandContext;return null==t?r.createPipelineCommand():r.createPipelineCommand(i.removeDirectRendererGeometryBuffer(t,e))}async createUpdateVisibilityCommand(e){const{_materialId:t,_context:r}=this,i=r.renderCommandContext;if(null==t)return r.createPipelineCommand();const n=new Uint8Array(e.featureCount);return e.getVisibilityArray(n),r.createPipelineCommand(i.updateVisibility(t,e.id,n))}async createUpdateLayerViewOpacityCommand(e){const{_context:t,_materialId:r}=this,i=t.renderCommandContext;return null==r?t.createPipelineCommand():t.createPipelineCommand(i.updateMaterial({type:"hud",materialId:r,parameters:{color:this._getFillColor(),outlineColor:this._getOutlineColor()}}))}async createUpdateElevationCommand(e){const{_materialId:t,_context:r}=this,{renderCommandContext:i}=r,{featureCount:n,id:o}=e;if(null==t||0===n)return r.createPipelineCommand();const a=await this._createGeometry(e);if(null==a)return r.createPipelineCommand();const l=processingUtils_f(e,r);return r.createPipelineCommand(i.updateDirectRendererGeometry(o,a,l))}async createDestroyCommand(){const{_iconTextureID:e,_context:t}=this,r=t.renderCommandContext;let i;return i=null!=e?await r.releaseTexture(e):PipelineCommand_e.create(r),i.appendPipelineStateCommand((()=>this._destroy())),i}_getOutlineColor(){const t=this._getLayerOpacity(),r=this._symbolLayer,i=r?.outline?.color;if(null!=i){const r=Color/* default */.A.toUnitRGB(i),n=i.a*t;return[r[0],r[1],r[2],n]}return[0,0,0,0]}_getFillColor(){if(g(this._getPrimitive()))return w;const e=null==this._getPrimitive(),t=this._symbolLayer?.material?.color;return this._getCombinedOpacityAndColor(t,{hasIntrinsicColor:e})}_getLayerOpacity(){return this._context.layerViewInfo.fullOpacity}_getCombinedOpacity(e,t=b){const r=this._draped?1:this._getLayerOpacity();return e?r*e.a:t.hasIntrinsicColor?r:0}_getCombinedOpacityAndColor(t,i=b){const n=this._getCombinedOpacity(t,i),a=null!=t?Color/* default */.A.toUnitRGB(t):vec3f64/* ONES */.Un;return (0,graphicUtils/* mixinColorAndOpacity */.$C)(a,n)}_getPrimitive(){return x(this._symbolLayer)}}function g(e){return null!=e&&("cross"===e||"x"===e)}function x(e){return e.resource?.href?null:e.resource?.primitive??IconSymbol3DLayerResource/* defaultPrimitive */.r}const b={hasIntrinsicColor:!1},w=vec4f64/* ZEROS */.uY;

;// ../node_modules/@arcgis/core/views/3d/layers/graphics/pipeline/symbolization/Point3DSymbolRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Point3DSymbolRenderer_e{constructor(e,o){this._loaded=!1,this._loadingPromise=null,this._context=null,this._symbol=null,this._symbolLayerRenderers=[],this._context=o,this._symbol=e}_destroy(){}get loaded(){return this._loaded}load(){return null==this._loadingPromise&&(this._loadingPromise=this._load()),this._loadingPromise}async _load(){const{_context:e,_symbol:o,_symbolLayerRenderers:t}=this,s=[];for(const a of o.symbolLayers){const o=e.symbolRendererFactory.createSymbolRendererFromSymbolLayer(a);null!=o&&(s.push(o.load()),t.push(o))}await Promise.all(s),this._loaded=!0}async createDestroyCommand(){const{_context:e,_symbolLayerRenderers:o}=this,t=[];for(const a of o)t.push(a.createDestroyCommand());const s=e.joinPipelineCommands(await Promise.all(t));return s.appendPipelineStateCommand((()=>this._destroy())),s}async createAddCommand(e){const{_context:o,_symbolLayerRenderers:t}=this,s=[];for(const a of t)s.push(a.createAddCommand(e));return o.joinPipelineCommands(await Promise.all(s))}async createRemoveCommand(e){const{_context:o,_symbolLayerRenderers:t}=this,s=[];for(const a of t)s.push(a.createRemoveCommand(e));return o.joinPipelineCommands(await Promise.all(s))}async createUpdateVisibilityCommand(e){const{_context:o,_symbolLayerRenderers:t}=this,s=[];for(const a of t)s.push(a.createUpdateVisibilityCommand(e));return o.joinPipelineCommands(await Promise.all(s))}async createUpdateLayerViewOpacityCommand(e){const{_context:o,_symbolLayerRenderers:t}=this,s=[];for(const a of t)s.push(a.createUpdateLayerViewOpacityCommand(e));return o.joinPipelineCommands(await Promise.all(s))}async createUpdateElevationCommand(e){const{_context:o,_symbolLayerRenderers:t}=this,s=[];for(const a of t)s.push(a.createUpdateElevationCommand(e));return o.joinPipelineCommands(await Promise.all(s))}}

;// ../node_modules/@arcgis/core/views/3d/layers/graphics/pipeline/symbolization/SimpleFeatureRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class e{constructor(e,t){this._symbol=null,this._featureData=new Map,this._loaded=!1,this._loadingPromise=null,this._renderer=null,this._context=t,this._renderer=e}async load(){return null==this._loadingPromise&&(this._loadingPromise=this._load()),this._loadingPromise}async _load(){const{_renderer:e,_context:t}=this;this._symbol=t.symbolRendererFactory.createSymbolRendererFromSymbol(e.symbol),this._loaded=!0}get loaded(){return this._loaded}async createAddCommand(e){const t=this._context,a=await this._provisionSymbol(),n=null==a?t.createPipelineCommand():await a.createAddCommand(e);return n.appendPipelineStateCommand((()=>this._featureData.set(e.id,e))),n}async createRemoveCommand(e){const t=this._context,a=await this._provisionSymbol(),n=null==a?t.createPipelineCommand():await a.createRemoveCommand(e);return n.appendPipelineStateCommand((()=>this._featureData.delete(e))),n}async createUpdateVisibilityCommand(e){const t=this._context,a=await this._provisionSymbol();return null==a?t.createPipelineCommand():await a.createUpdateVisibilityCommand(e)}async createUpdateLayerViewOpacityCommand(e){const t=this._context,a=await this._provisionSymbol();return null==a?t.createPipelineCommand():await a.createUpdateLayerViewOpacityCommand(e)}async createUpdateElevationCommand(){const{_featureData:e,_context:t}=this,a=await this._provisionSymbol();if(null==a)return t.createPipelineCommand();const n=[];for(const i of e.values())n.push(a.createUpdateElevationCommand(i));const o=await Promise.all(n);return t.joinPipelineCommands(o)}async createDestroyCommand(){const{_symbol:e,_context:t,_featureData:a}=this;if(!e)return t.createPipelineCommand();const n=[];for(const i of a.keys())n.push(this.createRemoveCommand(i));n.push(e.createDestroyCommand());const o=await Promise.all(n);return t.joinPipelineCommands(o)}async _provisionSymbol(){const e=this._symbol;return e?(e.loaded||await e.load(),e):null}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js
var mat4 = __webpack_require__(21742);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projection/computeTranslationToOriginAndRotation.js
var computeTranslationToOriginAndRotation = __webpack_require__(59538);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/aaBoundingBox.js
var aaBoundingBox = __webpack_require__(4675);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/ObjectSymbol3DLayerResource.js
var ObjectSymbol3DLayerResource = __webpack_require__(50124);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/symbolLayerUtils3D.js
var symbolLayerUtils3D = __webpack_require__(97728);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/graphics/primitiveObjectSymbolUtils.js
var primitiveObjectSymbolUtils = __webpack_require__(41262);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/AttributeArray.js
var AttributeArray = __webpack_require__(32734);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/GeometryUtil.js + 1 modules
var GeometryUtil = __webpack_require__(94643);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/pipeline/symbolization/primitiveObjectUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function primitiveObjectUtils_s(t,a){const s=(t,n,i=!1)=>({levels:t.map((t=>{const s=symbolizationUtils_e(n(t.tesselation));i&&r(s);return{components:[{attributes:s,objectAndLayerIdColor:void 0,transformation:null,materialId:a,visibilities:new Uint8Array([1]),objectIds:new Uint32Array([-1])}],minScreenSpaceRadius:t.minScreenSpaceRadius}}))});switch(t){case"cone":return s(primitiveObjectUtils_c,(e=>(0,GeometryUtil/* createConeGeometryData */.YG)(1,.5,e,!1)),!0);case"sphere":return s([{tesselation:0,minScreenSpaceRadius:0},{tesselation:1,minScreenSpaceRadius:8},{tesselation:2,minScreenSpaceRadius:16},{tesselation:3,minScreenSpaceRadius:50},{tesselation:4,minScreenSpaceRadius:250}],(e=>(0,GeometryUtil/* createPolySphereData */.Y6)(.5,e,!0)));case"cube":case"inverted-cone":case"cylinder":case"tetrahedron":case"diamond":throw new Error("not implemented");default:return}}function r(e){const t=e,n=t.get(VertexAttribute/* VertexAttribute */.r.POSITION).data,i=t.get(VertexAttribute/* VertexAttribute */.r.NORMAL).data;if(i){const t=primitiveObjectUtils_o(e,VertexAttribute/* VertexAttribute */.r.NORMAL).data;for(let e=0;e<i.length;e+=3){const n=i[e+1];t[e+1]=-i[e+2],t[e+2]=n}}if(n){const t=primitiveObjectUtils_o(e,VertexAttribute/* VertexAttribute */.r.POSITION).data;for(let e=0;e<n.length;e+=3){const i=n[e+1];t[e+1]=-n[e+2],t[e+2]=i}}}function primitiveObjectUtils_o(e,n){let i=e.get(n);return i&&!i.exclusive&&(i={...i,exclusive:!0,data:(0,AttributeArray/* cloneAttributeData */.S)(i.data)},e.set(n,i)),i}const primitiveObjectUtils_c=[{tesselation:6,minScreenSpaceRadius:0},{tesselation:18,minScreenSpaceRadius:7},{tesselation:64,minScreenSpaceRadius:65}];

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js
var basicInterfaces = __webpack_require__(91013);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultMaterial.js + 2 modules
var DefaultMaterial = __webpack_require__(54482);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/pbrUtils.js
var pbrUtils = __webpack_require__(12221);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/pipeline/symbolization/ObjectSymbolLayerRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class ObjectSymbolLayerRenderer_w{constructor(e,t){this._loaded=!1,this._loadingPromise=null,this._primitiveMaterialId=null,this._lodRendererId=null,this._context=null,this._symbolLayer=null,this._primitive=null,this._context=t,this._symbolLayer=e}_destroy(){this._lodRendererId=null,this._primitiveMaterialId=null}get loaded(){return this._loaded}get _isPrimitive(){return null!=this._primitive}load(){return null==this._loadingPromise&&(this._loadingPromise=this._load()),this._loadingPromise}async _load(){const e=this._context.renderCommandContext,t={physicalBasedRenderingEnabled:!0,slicePlaneEnabled:!1,castShadows:!0},r=this._getLayerOpacity();let a={usePBR:t.physicalBasedRenderingEnabled,isSchematic:!0,mrrFactors:pbrUtils/* schematicMRRFactors */.Bt,ambient:vec3f64/* ONES */.Un,diffuse:vec3f64/* ONES */.Un,hasSlicePlane:t.slicePlaneEnabled,castShadows:t.castShadows,layerOpacity:r,offsetTransparentBackfaces:!1,screenSizePerspective:{}};if(a.externalColor=vec4f64/* ONES */.Un,a.isInstanced=!0,this._isPrimitive){const e=new DefaultMaterial/* DefaultMaterialParameters */.fs;e.layerOpacity=r,a={...a,cullFace:P((0,DefaultMaterial/* isTransparent */.ty)(e))}}const n=await e.createMaterial({type:"default",parameters:a}),s=this._symbolLayer.resource;this._primitive=s&&(0,primitiveObjectSymbolUtils/* isValidPrimitive */.k)(s?.primitive)?s.primitive:ObjectSymbol3DLayerResource/* defaultPrimitive */.r;const l=primitiveObjectUtils_s(this._primitive,n);this._lodRendererId=await e.createLodRenderer(l),this._primitiveMaterialId=n,this._loaded=!0}async createDestroyCommand(){const{_lodRendererId:e,_primitiveMaterialId:t,_context:r}=this,i=r.renderCommandContext,a=[];return null!=e&&a.push(i.destroyLodRenderer(e)),null!=t&&a.push(i.destroyMaterial(t)),new PipelineCommand_e(i,i.mergeRenderCommandBuffers(a),[()=>this._destroy()])}async createAddCommand(e){const t=this._context,{renderCommandContext:r,mainThreadDelegate:i}=t;if(null==this._lodRendererId)throw new Error("expected lod renderer id to not be null");const{featureCount:n}=e;if(0===n)return t.createPipelineCommand();const o=this._isPrimitive,s=this._primitive||ObjectSymbol3DLayerResource/* defaultPrimitive */.r,u=(0,aaBoundingBox/* create */.vt)((0,symbolLayerUtils3D/* objectSymbolLayerPrimitiveBoundingBox */.Fq)(s)),h=(0,vec3f64/* fromArray */.ci)((0,aaBoundingBox/* size */.Ej)(u)),y=(0,vec3f64/* fromArray */.ci)((0,symbolLayerUtils3D/* objectSymbolLayerSizeWithResourceSize */.Bb)(h,{isPrimitive:o,width:100,depth:null,height:null})),b=new Float64Array(16*n),C=new Float64Array(16*n),g=processingUtils_a(e),x=await i.applyElevationAlignmentTo(g);for(let a=0;a<n;++a){const e=a,t=x[3*a+0],r=x[3*a+1],i=x[3*a+2],n=this._computeGlobalTransform(t,r,i,this._context.viewSpatialReference,T),o=this._computeLocalTransform(y,h,j);this._writeMatrixToTypedBuffer(b,e,o),this._writeMatrixToTypedBuffer(C,e,n)}const v=processingUtils_n(e),w=new Uint8Array(n);e.getVisibilityArray(w);const P={featureIds:new Uint32Array(v),visibility:w,localTransforms:b,globalTransforms:C};return t.createPipelineCommand(r.addLodInstances(this._lodRendererId,e.id,P))}async createRemoveCommand(e){const{_context:t,_lodRendererId:r}=this,i=t.renderCommandContext;return null==r?t.createPipelineCommand():t.createPipelineCommand(i.removeLodInstances(r,e))}async createUpdateVisibilityCommand(e){const{_lodRendererId:t,_context:r}=this,i=r.renderCommandContext;if(null==t)return r.createPipelineCommand();const a=new Uint8Array(e.featureCount);return e.getVisibilityArray(a),r.createPipelineCommand(i.updateVisibility(t,e.id,a))}async createUpdateLayerViewOpacityCommand(e){const{_context:t}=this,r=t.renderCommandContext,i=this._primitiveMaterialId;if(null==i)return t.createPipelineCommand();const a=this._getLayerOpacity();let n={layerOpacity:a};if(this._isPrimitive){const e=new DefaultMaterial/* DefaultMaterialParameters */.fs;e.layerOpacity=a,n={...n,cullFace:P((0,DefaultMaterial/* isTransparent */.ty)(e))}}return t.createPipelineCommand(r.updateMaterial({type:"default",materialId:i,parameters:n}))}async createUpdateElevationCommand(e){const{_context:t,_lodRendererId:r}=this,{renderCommandContext:i,mainThreadDelegate:a}=t,{featureCount:n,id:o}=e;if(null==r||0===n)return t.createPipelineCommand();const s=new Float64Array(16*n),l=processingUtils_a(e),m=await a.applyElevationAlignmentTo(l);for(let d=0;d<n;++d){const e=d,t=m[3*d+0],r=m[3*d+1],i=m[3*d+2],a=this._computeGlobalTransform(t,r,i,this._context.viewSpatialReference,T);this._writeMatrixToTypedBuffer(s,e,a)}return t.createPipelineCommand(i.updateLodInstancesData(r,o,s))}_writeMatrixToTypedBuffer(e,t,r){let i=16*t;for(let a=0;a<16;a++)e[i++]=r[a]}_computeGlobalTransform(e,t,r,i,a){return I[0]=e,I[1]=t,I[2]=r,(0,computeTranslationToOriginAndRotation/* computeTranslationToOriginAndRotation */.l)(i,I,a,this._context.renderSpatialReference),a}_computeLocalTransform(t,r,i){return (0,mat4/* identity */.D_)(i),this._applyObjectScale(t,r,i),i}_applyObjectScale(e,r,i){const a=(0,graphicUtils/* computeObjectScale */.pW)(e,e,r,this._context.renderCoordsHelper.unitInMeters);1===a[0]&&1===a[1]&&1===a[2]||(0,mat4/* scale */.hs)(i,i,a)}_getLayerOpacity(){return this._context.layerViewInfo.fullOpacity}}function P(e){return e?basicInterfaces/* CullFaceOptions */.s2.None:basicInterfaces/* CullFaceOptions */.s2.Back}const I=(0,vec3f64/* create */.vt)(),j=(0,mat4f64/* create */.vt)(),T=(0,mat4f64/* create */.vt)();

;// ../node_modules/@arcgis/core/views/3d/layers/graphics/pipeline/symbolization/UniqueValueFeatureRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class s{constructor(t,e){this._symbols=new Array,this._featureDataPartitioning=new Map,this._loaded=!1,this._loadingPromise=null,this._renderer=null,this._context=e,this._renderer=t}async load(){return null==this._loadingPromise&&(this._loadingPromise=this._load()),this._loadingPromise}async _load(){this._symbols[0]=new f(factoryUtils_t(),this._context),this._symbols[1]=new ObjectSymbolLayerRenderer_w(n(),this._context),this._loaded=!0}get loaded(){return this._loaded}async createAddCommand(t){const e=this._context,n=this._partition(t),a=await Promise.all(n.map((async({index:t,features:e})=>{const n=await this._provisionSymbol(t);return await(n?.createAddCommand(e))}))),o=e.joinPipelineCommands(a);return o.appendPipelineStateCommand((()=>this._featureDataPartitioning.set(t.id,n))),o}async createRemoveCommand(e){const{_featureDataPartitioning:n,_context:a}=this,o=a.renderCommandContext,i=n.get(e);if(null==i)return new PipelineCommand_e(o,o.createRenderCommandBuffer(),[]);const s=await Promise.all(i.map((async({index:t,features:e})=>{const n=this._getLoadedSymbol(t);return await(n?.createRemoveCommand(e.id))}))),r=a.joinPipelineCommands(s);return r.appendPipelineStateCommand((()=>n.delete(e))),r}async createUpdateVisibilityCommand(e){const{_featureDataPartitioning:n,_context:a}=this,o=a.renderCommandContext,i=n.get(e.id);if(null==i)return new PipelineCommand_e(o,o.createRenderCommandBuffer(),[]);const s=await Promise.all(i.map((async({index:t,features:e})=>{const n=this._getLoadedSymbol(t);return await(n?.createUpdateVisibilityCommand(e))})));return a.joinPipelineCommands(s)}async createUpdateLayerViewOpacityCommand(t){const e=this._context,n=[];for(let o=0;o<this._symbols.length;++o){const e=this._symbols[o];null!=e&&e.loaded&&n.push(e.createUpdateLayerViewOpacityCommand(t))}const a=await Promise.all(n);return e.joinPipelineCommands(a)}async createUpdateElevationCommand(){const{_featureDataPartitioning:t,_context:e}=this,n=[];for(const o of t.values()){const t=o.map((async({index:t,features:e})=>{const n=this._getLoadedSymbol(t);return await(n?.createUpdateElevationCommand(e))}));n.push(...t)}const a=await Promise.all(n);return e.joinPipelineCommands(a)}async createDestroyCommand(){const{_featureDataPartitioning:t,_context:e}=this,n=[];for(const o of t.keys())n.push(this.createRemoveCommand(o));for(const o of this._symbols)n.push(o.createDestroyCommand());const a=await Promise.all(n);return e.joinPipelineCommands(a)}async _provisionSymbol(t){if(null==t)return null;const e=this._symbols[t];return e?(e.loaded||await e.load(),e):null}_getLoadedSymbol(t){if(null==t)return null;const e=this._symbols[t];return null!=e&&e.loaded?e:null}_partition(t){const n=processingUtils_n(t);if(null==n)throw new Error("unable to fetch objectIds");const{featureCount:a}=t,o=[[],[]];for(let e=0;e<a;++e){o[n[e]%2].push(e)}return o.map(((e,n)=>new UniqueValueFeatureRenderer_r(n,t.subset(new Uint32Array(e))))).filter((t=>t.features.featureCount>0))}}class UniqueValueFeatureRenderer_r{constructor(t,e){this.index=t,this.features=e}}

;// ../node_modules/@arcgis/core/views/3d/layers/graphics/pipeline/FeatureProcessingContext.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class FeatureProcessingContext_a{constructor(e,r,t,o,n,i,s){this.viewSpatialReference=e,this.renderSpatialReference=r,this.mainThreadDelegate=t,this.renderCoordsHelper=o,this.renderCommandContext=n,this.layerInfo=i,this.layerViewInfo=s,this.symbolRendererFactory=new m(this)}createPipelineCommand(e=this.renderCommandContext.createRenderCommandBuffer(),t=[]){return new PipelineCommand_e(this.renderCommandContext,e,t)}joinPipelineCommands(e){if(0===e.length)return this.createPipelineCommand();return e.filter((e=>null!=e)).reduce(((e,r)=>(e.append(r),e)))}}class m{constructor(e){this.context=e}createSymbolRendererFromJSON(r){const t=(0,jsonUtils/* read */.L)(r??l)??void 0;if(!t)throw new Error("Failed to create renderer");const o=t.type;switch(o){case"simple":return new e(t,this.context);case"unique-value":return new s(t,this.context);default:return console.warn(`Unable to create symbolrenderer for renderer of ${o}`),this.createSymbolRendererFromJSON(l)}}createSymbolRendererFromSymbol(e){const r=e?.type;switch(r){case"point-3d":return new Point3DSymbolRenderer_e(e,this.context);case"picture-marker":case"simple-marker":return new f(factoryUtils_t(),this.context);default:return console.warn(`Unable to create symbolrenderer for symbol of ${r}`),null}}createSymbolRendererFromSymbolLayer(e){const r=e.type;return"icon"===r?new f(e,this.context):(console.warn(`Unable to create symbolrenderer for symbolLayer of ${r}`),null)}}const l={type:"simple"};

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(52495);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/asyncUtils.js
var asyncUtils = __webpack_require__(12690);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/ReactiveMap.js
var ReactiveMap = __webpack_require__(71416);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/scheduling.js
var scheduling = __webpack_require__(61449);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/memoryEstimations.js
var memoryEstimations = __webpack_require__(4754);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/uid.js
var uid = __webpack_require__(65061);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projection/projectors.js
var projectors = __webpack_require__(12943);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/pipeline/utils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function utils_r(t=""){return`${t}${(0,uid/* generateUID */.c)()}`}function utils_n(e,r,n,s,a){const l=s.spatialReference,i=t(r,l);if(null==i)return e;let f=t=>[e[t],e[t+1],e[t+2]];i!==o&&(f=t=>(i(e,t,utils_c,0),[utils_c[0],utils_c[1],utils_c[2]]));const u=e.length/3,d=n.mode;switch(n.mode){case"on-the-ground":for(let t=0;t<u;++t){const o=3*t,[r,n]=f(o);e[o+2]=s.getElevation(r,n,0,s.spatialReference,"ground")??0}break;case"relative-to-ground":case"relative-to-scene":{const t="relative-to-ground"===d?"ground":"scene";for(let o=0;o<u;++o){const r=3*o,[c,l,i]=f(r),u=n.calculateOffsetRenderUnits(a),d=s.getElevation(c,l,0,s.spatialReference,t)??0;e[r+2]=i+u+d}}break;case"absolute-height":for(let t=0;t<u;++t){const o=3*t,r=e[o+2],c=n.calculateOffsetRenderUnits(a);e[o+2]=r+c}}return e}const utils_c=new Float64Array(3);

;// ../node_modules/@arcgis/core/views/3d/layers/graphics/pipeline/featureData/FeatureDataSubset.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class FeatureDataSubset_s{constructor(t,s){this._parent=t,this._subsetIndices=s,this.id=utils_r(`featureDataSubset-${t.id}-`)}get tileId(){return this._parent.tileId}get extent(){return this._parent.extent}get featureCount(){return this._subsetIndices.length}get usedMemory(){return this._parent.usedMemory+memoryEstimations/* baseObjectMemory */.qK+this._subsetIndices.byteLength}get isFullyEnabled(){for(const t of this._subsetIndices)if(!this._parent.getEnabled(t))return!1;return!0}getObjectId(t){return this._parent.getObjectId(this._subsetIndices[t])}getAttribute(t,e){return this._parent.getAttribute(this._subsetIndices[t],e)}getAttributeAsTimestamp(t,e){return this._parent.getAttribute(this._subsetIndices[t],e)}getAttributes(t){return this._parent.getAttributes(this._subsetIndices[t])}getCoordinates(t,e,s){return this._parent.getCoordinates(this._subsetIndices[t],e,s)}getOptimizedGeometry(t){return this._parent.getOptimizedGeometry(this._subsetIndices[t])}getCentroid(t,e){return this._parent.getCentroid(this._subsetIndices[t],e)}getBounds(t){return this._parent.getBounds(this._subsetIndices[t])}getBoundingBox(t){return this._parent.getBoundingBox(this._subsetIndices[t])}getObjectIdsArray(t,e,s){return this._parent.getObjectIdsArray(t,this._translatedIndices(e),s)}getCoordinatesArray(t,e,s){return this._parent.getCoordinatesArray(t,this._translatedIndices(e),s)}objectIds(t){return this._parent.objectIds(this._translatedIndices(t))}subset(t){const{_subsetIndices:e}=this,r=new Uint32Array(t.length);for(let s=0;s<r.length;++s)r[s]=e[t[s]];return new FeatureDataSubset_s(this._parent,r)}disableObjectIds(t){if(0===t.size)return;const{featureCount:e}=this,s=new Array;for(let r=0;r<e;++r)this.getEnabled(r)&&t.has(this.getObjectId(r))&&s.push(r);if(0!==s.length)for(const r of s)this.setEnabled(r,!1)}setEnabled(t,e){this._parent.setEnabled(this._subsetIndices[t],e)}getEnabled(t){return this._parent.getEnabled(this._subsetIndices[t])}enableAll(){const{_subsetIndices:t,_parent:e}=this;for(const s of t)e.setEnabled(s,!0)}getVisibilityArray(t,e,s){return this._parent.getVisibilityArray(t,this._translatedIndices(e),s)}enabledObjectIds(t){return this._parent.enabledObjectIds(this._translatedIndices(t))}*_translatedIndices(t){const{_subsetIndices:e}=this;if(null!=t)for(const s of t)yield e[s];else yield*e}}

;// ../node_modules/@arcgis/core/views/3d/layers/graphics/pipeline/featureData/FeatureData.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class FeatureData_s{constructor(t){this._tile=t,this.id=utils_r(`featureData-${t.id}-`),this._enabled=new Array(t.featureCount).fill(!0)}get tileId(){return this._tile.id}get featureCount(){return this._tile.featureCount}get usedMemory(){return memoryEstimations/* baseObjectMemory */.qK+(0,memoryEstimations/* estimateStringMemory */.$B)(this.id)}get extent(){return this._tile.descriptor.extent}get isFullyEnabled(){return this._enabled.every((t=>t))}getObjectId(t){return this._tile.getObjectId(t)}getAttribute(t,e){return this._tile.getAttribute(t,e)}getAttributeAsTimestamp(t,e){return this._tile.getAttribute(t,e)}getAttributes(t){return this._tile.getAttributes(t)}getCoordinates(t,e,r){return this._tile.getCoordinates(t,e,r)}getOptimizedGeometry(t){return this._tile.getOptimizedGeometry(t)}getCentroid(t,e){return this._tile.getCentroid(t,e)}getBounds(t){return this._tile.getBounds(t)}getBoundingBox(t){return this._tile.getBoundingBox(t)}getObjectIdsArray(t,e,r){return this._tile.getObjectIdsArray(t,e,r)}getCoordinatesArray(t,e,r){return this._tile.getCoordinatesArray(t,e,r)}objectIds(t){return this._tile.objectIds(t)}subset(t){return new FeatureDataSubset_s(this,t)}disableObjectIds(t){if(0===t.size)return;const{_enabled:e}=this,r=new Array;for(const i of this._allFeatureIndices())e[i]&&t.has(this.getObjectId(i))&&r.push(i);if(0!==r.length)for(const i of r)e[i]=!1}setEnabled(t,e){this._enabled[t]=e}getEnabled(t){return this._enabled[t]}enableAll(){this._enabled.fill(!0)}getVisibilityArray(t,e=this._allFeatureIndices(),r=0){const{_enabled:i}=this;for(const s of e)t[r++]=Number(i[s]);return r}*enabledObjectIds(t=this._allFeatureIndices()){const{_enabled:e}=this;for(const r of t)e[r]&&(yield this.getObjectId(r))}*_allFeatureIndices(){const{featureCount:t}=this;for(let e=0;e<t;++e)yield e}}

;// ../node_modules/@arcgis/core/views/3d/layers/graphics/pipeline/Tile3DManager.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let _=class extends Accessor/* default */.A{constructor(t){super(t),this.extent=null,this._tileHandles=new ReactiveMap/* default */.A,this._wanted=new ReactiveMap/* default */.A,this._updateRequested=!1,this._synchronizationTask=null,this._requestedTiles=new Array}destroy(){this._tileHandles.clear(),this._wanted.clear()}get updating(){return this._updateRequested||!(this._synchronizationTask?.finished??1)}get _boundingRect(){const{extent:t}=this;return null==t?null:(0,aaBoundingRect/* fromExtent */.VY)(t)}get _missingTiles(){const t=new Array,e=this._wanted,s=this._tileHandles;for(const o of e.values())null==s.get(o.id)?.featureData&&t.push(o);return t}onTileTreeChange({tiles:t}){this._requestedTiles=t,this._scheduleTilesSync()}_scheduleTilesSync(){if(this._updateRequested)return;this._updateRequested=!0;const t=this._synchronizationTask,e=(0,asyncUtils/* createTask */.UT)((async()=>{try{await (0,reactiveUtils/* whenOnce */.C_)((()=>t?.finished??!0)),await (0,scheduling/* waitTick */.NO)(),this._updateRequested=!1,await this._synchronizeTiles()}finally{this._synchronizationTask===e&&(this._synchronizationTask=null)}}));this._synchronizationTask=e}async _synchronizeTiles(){const t=this._requestedTiles,e=this._tileHandles,s=new Array;for(const u of t)e.has(u.id)||s.push(u);const o=new Array;for(const u of e.values()){const{id:e}=u;t.every((t=>t.id!==e))&&o.push(u.descriptor)}const a=this._tileHandles,{_boundingRect:i}=this,r=null!=i?s.filter((t=>(0,aaBoundingRect/* intersects */.HY)(i,t.extent))):s,n=this._wanted,l=new Array;for(const{id:u}of o)n.delete(u);for(const u of r)n.set(u.id,u);const c=this._missingTiles;for(const u of o){const{id:t}=u;if(c.some((t=>Tile3DManager_w(t,u)||Tile3DManager_w(u,t))))continue;const e=a.get(t);null!=e&&l.push(this._removeTile(e))}for(const u of r)l.push(this._addTile(u));const d=await Promise.allSettled(l);for(const u of d)"rejected"===u.status&&console.error(u.reason)}forEachTile(t){for(const e of this._tileHandles.values()){const s=e.featureData;null!=s&&t(s)}}*loadedTiles(){for(const t of this._tileHandles.values()){const e=t.featureData;null!=e&&(yield e)}}async _removeTile(s){s.loadTask.abort(),this._tileHandles.delete(s.id),this._validate();const{featureData:o}=s;if(null!=o){const s={stack:[],error:void 0,hasError:!1};try{(0,tslib_es6.b)(s,await this.tileLocks.lock([o.tileId]),!1);const e=await this.createRemoveCommand(o.id);await(e?.execute())}catch(a){s.error=a,s.hasError=!0}finally{(0,tslib_es6.c)(s)}}}async _addTile(t){const{_tileHandles:e}=this,s=e.get(t.id);if(null!=s){if(!Tile3DManager_T(s)||s.featureData.isFullyEnabled)return;return s.featureData.enableAll(),void await this._onTileLoad(s)}const o=new v(t,(0,asyncUtils/* createTask */.UT)((async e=>{const s=await this.loadTile(t,e);return (0,promiseUtils/* throwIfAborted */.Te)(e),new FeatureData_s(s)})));this._tileHandles.set(o.id,o);try{await o.loadTask.promise}catch(a){return void (0,promiseUtils/* throwIfNotAbortError */.jH)(a)}Tile3DManager_g(o),await this._onTileLoad(o)}async _onTileLoad(s){const o={stack:[],error:void 0,hasError:!1};try{const{_wanted:e,_tileHandles:i,_missingTiles:r}=this,n=s.descriptor,l=new Array,c=new Array,d=new Array,u=new Set;for(const t of i.values()){if(t===s)continue;const{descriptor:o,id:a}=t;if(e.has(a)||r.some((t=>Tile3DManager_w(t,o)||Tile3DManager_w(o,t)))){if(Tile3DManager_T(t)){if(Tile3DManager_w(n,o)){const e=t.featureData;for(const t of e.objectIds())u.add(t)}if(Tile3DManager_w(o,n)){const{featureData:e}=t;c.push(e)}}}else{i.delete(a),t.loadTask.abort();const{featureData:e}=t;null!=e&&l.push(e)}}u.size>0&&(s.featureData.disableObjectIds(u),this._validateRemoval(s.featureData,u)),this._validate(),d.push(s.featureData);const h=[...d,...l,...c].map((t=>t.tileId));(0,tslib_es6.b)(o,await this.tileLocks.lock(h),!1);if(0!==c.length){const t=s.featureData,e=new Set(t.objectIds());for(const s of c)s.disableObjectIds(e),this._validateRemoval(s,e)}const f=l.map((t=>this.createRemoveCommand(t.id))),p=d.map((t=>this.createAddCommand(t))),y=c.map((t=>this.createUpdateCommand(t))),_=await Promise.all([...f,...p,...y]),v=PipelineCommand_n(_.filter(arrayUtils/* isSome */.Ru));await(v?.execute())}catch(i){o.error=i,o.hasError=!0}finally{(0,tslib_es6.c)(o)}}_validate(){if(!(0,has/* default */.A)("feature-pipeline-3d-test-validation"))return;const t=new Array;for(const e of this._tileHandles.values()){if(!Tile3DManager_T(e))continue;const{featureData:s}=e;t.push({featureData:s,objectIds:new Set(s.enabledObjectIds())})}for(let e=0;e<t.length;++e){const{featureData:s,objectIds:o}=t[e];for(let a=e+1;a<t.length;++a){const{featureData:e,objectIds:i}=t[a];for(const t of i)if(o.has(t))throw new Error(`${s.id} and ${e.id} both contain ${t}.`)}}}_validateRemoval(t,e){if((0,has/* default */.A)("feature-pipeline-3d-test-validation"))for(const s of t.enabledObjectIds())if(e.has(s))throw new Error(`Failed to remove ${s} from ${t.id}!`)}};function Tile3DManager_w({lij:[t,e,s]},{lij:[o,a,i]}){const r=o-t;return r>=0&&e===a>>r&&s===i>>r}(0,tslib_es6._)([(0,property/* property */.MZ)()],_.prototype,"updating",null),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],_.prototype,"loadTile",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],_.prototype,"createAddCommand",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],_.prototype,"createRemoveCommand",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],_.prototype,"createUpdateCommand",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],_.prototype,"tileLocks",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],_.prototype,"extent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],_.prototype,"_boundingRect",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],_.prototype,"_missingTiles",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],_.prototype,"_updateRequested",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],_.prototype,"_synchronizationTask",void 0),_=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.3d.layers.graphics.pipeline.Tile3DManager")],_);class v{constructor(t,e){this.descriptor=t,this.loadTask=e}get id(){return this.descriptor.id}get featureData(){return this.loadTask.value}}function Tile3DManager_T(t){return null!=t.featureData}function Tile3DManager_g(t){if(!Tile3DManager_T(t))throw new Error}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/handleUtils.js
var handleUtils = __webpack_require__(20464);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/pipeline/TileLocks.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class TileLocks_e{constructor(){this._previousActions=new Map}async lock(e){const{_previousActions:i}=this,l=e.map((o=>i.get(o))).filter(arrayUtils/* isSome */.Ru),c=Promise.allSettled(l),a=(0,promiseUtils/* createResolver */.Tw)(),n=(0,handleUtils/* makeHandle */.hA)((()=>a.resolve())),m=a.promise.finally((()=>{for(const o of e)i.get(o)===m&&i.delete(o)}));for(const o of e)i.set(o,m);return await c,(0,handleUtils/* disposable */.Bf)(n)}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/rbush/PooledRBush.js
var PooledRBush = __webpack_require__(4486);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/centroid.js
var centroid = __webpack_require__(8964);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/OptimizedGeometry.js
var OptimizedGeometry = __webpack_require__(88443);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/pipeline/featureSet/TiledFeatureStore.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class u{constructor(t,e){this._index=t,this._view=e}get usedMemory(){return memoryEstimations/* baseObjectMemory */.qK+memoryEstimations/* estimateNumberMemory */.RS}getObjectId(){return this._view.getObjectId(this._index)}getAttribute(t){return this._view.getAttribute(this._index,t)}getAttributeAsTimestamp(t){return this._view.getAttributeAsTimestamp(this._index,t)}getAttributes(){return this._view.getAttributes(this._index)}getOptimizedGeometry(){return this._view.getOptimizedGeometry(this._index)}getCentroid(t){return this._view.getCentroid(this._index,t)}getBounds(){return this._view.getBounds(this._index)}getBoundingBox(){return this._view.getBoundingBox(this._index)}cloneWithGeometry(t){return new d(this._index,this._view,t)}}class d extends u{constructor(t,e,i){super(t,e),this._geometryOverride=i}getOptimizedGeometry(){return this._geometryOverride}getCentroid(t){return (0,centroid/* getCentroidOptimizedGeometry */.Q)(new OptimizedGeometry/* default */.A,this._geometryOverride,t.hasZ,t.hasM)}}class a{constructor(t,e){this.featureData=t,this.bounds=e}}class h{constructor(){this._tileBounds=new Map,this.events=new Evented/* default */.A,this.featureAdapter=TiledFeatureStore_m.shared}get usedMemory(){return memoryEstimations/* baseObjectMemory */.qK+memoryEstimations/* baseObjectMemory */.qK*this._tileBounds.size}addTile(t){const{featureCount:e}=t;if(0===e)return;const i=new PooledRBush/* PooledRBush */.w(9,(e=>t.getBounds(e))),s=new Array;for(let r=0;r<e;++r)s[r]=r;i.load(s),this._tileBounds.set(t.id,new a(t,i)),this.events.emit("changed")}removeTile(t){this._tileBounds.delete(t),this.events.emit("changed")}clear(){this._tileBounds.clear(),this.events.emit("changed")}forEach(t){for(const{featureData:e,bounds:i}of this._tileBounds.values())i.all((i=>{e.getEnabled(i)&&t(new u(i,e))}))}forEachInBounds(t,e){TiledFeatureStore_g.minX=t[0],TiledFeatureStore_g.minY=t[1],TiledFeatureStore_g.maxX=t[2],TiledFeatureStore_g.maxY=t[3];for(const{featureData:i,bounds:r}of this._tileBounds.values())r.search(TiledFeatureStore_g,(t=>{i.getEnabled(t)&&e(new u(t,i))}))}forEachBounds(t,e){for(const i of t)e(i.getBoundingBox())}getFullExtent(t){let e=1/0,i=1/0,r=-1/0,s=-1/0;for(const{bounds:n}of this._tileBounds.values()){const{minX:t,minY:o,maxX:u,maxY:d}=n.toJSON();e=Math.min(e,t),i=Math.min(i,o),r=Math.min(r,u),s=Math.min(s,d)}return{xmin:e,ymin:i,xmax:r,ymax:s,spatialReference:t}}}class TiledFeatureStore_m{static{this.shared=new TiledFeatureStore_m}getObjectId(t){return t.getObjectId()}getAttribute(t,e){return t.getAttribute(e)}getAttributeAsTimestamp(t,e){return t.getAttributeAsTimestamp(e)}getAttributes(t){return t.getAttributes()}getGeometry(t){return t.getOptimizedGeometry()}getCentroid(t,e){return t.getCentroid(e)}cloneWithGeometry(t,e){return t.cloneWithGeometry(e)}}const TiledFeatureStore_g=new PooledRBush/* BBox */.E;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/query/operations/query.js
var query = __webpack_require__(8132);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/pipeline/Tile.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Tile_n{constructor(n,a,r){this.descriptor=n,this._pages=a,this._pageSize=r;const i=memoryEstimations/* baseArrayMemory */.ez+a.reduce(((e,{usedMemory:t})=>e+t),0),d=3*memoryEstimations/* estimateNumberMemory */.RS;this.usedMemory=memoryEstimations/* baseObjectMemory */.qK+i+d,this.featureCount=a.reduce(((e,t)=>e+t.featureCount),0)}get id(){return this.descriptor.id}getObjectId(e){const{pageIndex:t,featurePageIndex:s}=this._translateIndex(e);return this._pages[t].getObjectId(s)}getAttribute(e,t){const{pageIndex:s,featurePageIndex:n}=this._translateIndex(e);return this._pages[s].getAttribute(n,t)}getAttributeAsTimestamp(e,t){const{pageIndex:s,featurePageIndex:n}=this._translateIndex(e);return this._pages[s].getAttributeAsTimestamp(n,t)}getAttributes(e){const{pageIndex:t,featurePageIndex:s}=this._translateIndex(e);return this._pages[t].getAttributes(s)}getCoordinates(e,t,s){const{pageIndex:n,featurePageIndex:a}=this._translateIndex(e);this._pages[n].getCoordinates(a,t,s)}getOptimizedGeometry(e){const{pageIndex:t,featurePageIndex:s}=this._translateIndex(e);return this._pages[t].getOptimizedGeometry(s)}getCentroid(e,t){const{pageIndex:s,featurePageIndex:n}=this._translateIndex(e);return this._pages[s].getCentroid(n,t)}getBounds(e){const{pageIndex:t,featurePageIndex:s}=this._translateIndex(e);return this._pages[t].getBounds(s)}getBoundingBox(e){const{pageIndex:t,featurePageIndex:s}=this._translateIndex(e);return this._pages[t].getBoundingBox(s)}getObjectIdsArray(e,t=this._allFeatureIndices(),s=0){let n=s;for(const{page:a,indices:r}of this._batchPageIndices(t))n=a.getObjectIdsArray(e,r,n);return n}getCoordinatesArray(e,t=this._allFeatureIndices(),s=0){let n=s;for(const{page:a,indices:r}of this._batchPageIndices(t))n=a.getCoordinatesArray(e,r,n);return n}*objectIds(e=this._allFeatureIndices()){for(const{page:t,indices:s}of this._batchPageIndices(e))for(const e of t.objectIds(s))yield e}*_allFeatureIndices(){const{featureCount:e}=this;for(let t=0;t<e;++t)yield t}_translateIndex(e){const{_pageSize:t}=this;return{pageIndex:Math.floor(e/t),featurePageIndex:e%t}}*_batchPageIndices(e){const t=new Array;{let s=0,n=new Array;for(const a of e){const{pageIndex:e,featurePageIndex:r}=this._translateIndex(a);s!==e&&(0!==n.length&&t.push({pageIndex:s,indices:n}),s=e,n=[]),n.push(r)}0!==n.length&&t.push({pageIndex:s,indices:n})}const{_pages:s}=this;for(const{pageIndex:n,indices:a}of t)yield{page:s[n],indices:a}}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var core_Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/pbf.js
var pbf = __webpack_require__(66471);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/quantizationUtils.js
var quantizationUtils = __webpack_require__(20698);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/FieldsIndex.js
var FieldsIndex = __webpack_require__(79005);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/query/operations/pbfFeatureServiceParser.js
var pbfFeatureServiceParser = __webpack_require__(37610);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/pipeline/featureSet/PBFPointFeatureSetView.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class PBFPointFeatureSetView_u{constructor(e){this._reader=new pbf/* default */.A(new Uint8Array(e),new DataView(e)),this._index=PBFPointFeatureSetView_g(this._reader)}get featureCount(){return this._index.featureIndices.length}get exceededTransferLimit(){return this._index.exceededTransferLimit}get usedMemory(){return this._reader.usedMemory}getObjectId(e){return this.getAttribute(e,this._index.objectIdFieldName)}getAttribute(e,t){const{_index:{fieldsIndex:r,attributeIndices:s}}=this,n=r.get(t)?.index;if(null==n)return;const o=s[e*r.fields.length+n],i=this._reader;return i.move(o),PBFPointFeatureSetView_m(i)}getAttributeAsTimestamp(e,t){const r=this.getAttribute(e,t);return"string"==typeof r?new Date(r).getTime():"number"==typeof r||null==r?r:null}getAttributes(e){const{_index:{fieldsIndex:t,attributeIndices:r}}=this,s=e*t.fields.length,n=this._reader,o={};for(const i of t.fields){const e=r[s+i.index];n.move(e),o[i.name]=PBFPointFeatureSetView_m(n)}return o}getCoordinates(e,t,r=0){const s=this._reader,{transform:n,featureIndices:o}=this._index,{scale:i,translate:a}=n;s.move(o[e]),this._readCoordinates(i,a,t,r)}getOptimizedGeometry(e){const t=(0,vec3f64/* create */.vt)();return this.getCoordinates(e,t),new OptimizedGeometry/* default */.A([],t)}getCentroid(e,{hasZ:t,hasM:r}){this.getCoordinates(e,p);const[s,n,o]=p,a=[s,n];return t&&(a[3]=o),r&&(a[t?4:3]=0),new OptimizedGeometry/* default */.A([],a)}getBounds(e){this.getCoordinates(e,p);const[t,r]=p,n=new PooledRBush/* BBox */.E;return n.minX=t,n.minY=r,n.maxX=t,n.maxY=r,n}getBoundingBox(e){this.getCoordinates(e,p);const[t,r,s]=p;return (0,aaBoundingBox/* fromValues */.fA)(t,r,s,t,r,s)}getObjectIdsArray(e,t=this._allFeatureIndices(),r=0){const s=this._reader,{objectIdFieldName:n,attributeIndices:o,fieldsIndex:i}=this._index,a=i.get(n).index,d=i.fields.length;for(const c of t){const t=o[c*d+a];s.move(t),e[r++]=PBFPointFeatureSetView_m(s)}return r}getCoordinatesArray(e,t=this._allFeatureIndices(),r=0){const s=this._reader,{transform:n,featureIndices:o}=this._index,{scale:i,translate:a}=n;for(const d of t){const t=o[d];s.move(t),r=this._readCoordinates(i,a,e,r)}return r}*objectIds(e=this._allFeatureIndices()){const t=this._reader,{objectIdFieldName:r,attributeIndices:s,fieldsIndex:n}=this._index,o=n.get(r).index,i=n.fields.length;for(const a of e){const e=s[a*i+o];t.move(e),yield PBFPointFeatureSetView_m(t)}}*_allFeatureIndices(){const{featureCount:e}=this;for(let t=0;t<e;++t)yield t}_readCoordinates([e,t,r],[s,n,o],i,a){const d=2,c=3,u=this._reader,g=u.getLength(),l=u.pos()+g;for(;u.pos()<l&&u.next();)switch(u.tag()){case d:{const d=u.getLength(),g=u.pos()+d;for(;u.pos()<g&&u.next();)if(u.tag()===c)u.getUInt32(),i[a++]=s+e*u.getSInt64(),i[a++]=n+t*u.getSInt64(),i[a++]=o+r*u.getSInt64();else u.skip();break}default:u.skip()}return a}}function PBFPointFeatureSetView_g(e){const t=2;for(;e.next();){if(e.tag()===t)return PBFPointFeatureSetView_l(e.getMessage());e.skip()}PBFPointFeatureSetView_h()}function PBFPointFeatureSetView_l(e){const t=1;for(;e.next();){if(e.tag()===t)return PBFPointFeatureSetView_f(e.getMessage());e.skip()}PBFPointFeatureSetView_h()}function PBFPointFeatureSetView_f(e){const t=9,r=12,s=13,n=15,i=7,u=0,g=10,l=1,f=1;let m,p,x=!1,I=!1,b=0;const _=new Array,w=new Array,y=new Array;for(;e.next();)switch(e.tag()){case f:p=e.getString();break;case i:e.getEnum()!==u&&PBFPointFeatureSetView_h();break;case t:x=e.getBool()??!1;break;case r:m=(0,quantizationUtils/* normalizeTransform */.Q1)(e.processMessage(pbfFeatureServiceParser/* parseTransform */.ae));break;case s:{const t=e.processMessage(pbfFeatureServiceParser/* parseField */.cn);t.index=b++,_.push(t);break}case n:{w.push(e.pos());const t=e.getUInt32(),r=e.pos()+t;for(;e.pos()<r&&e.next();)if(e.tag()===l)y.push(e.pos()),e.skip();else e.skip();break}case g:I=e.getBool()??!1;break;default:e.skip()}const j=new FieldsIndex/* default */.A(_);return null!=m&&I&&null!=p&&j.has(p)||PBFPointFeatureSetView_h(),{transform:m,exceededTransferLimit:x,fieldsIndex:j,objectIdFieldName:p,featureIndices:w,attributeIndices:y}}function PBFPointFeatureSetView_h(){const t=new core_Error/* default */.A("pbf-parsing-failed","Error while parsing PBF",new Error);throw console.error(t),t}function PBFPointFeatureSetView_m(e){const t=1,r=2,s=3,n=4,o=5,i=6,a=7,d=8,c=9,u=e.getLength(),g=e.pos()+u;for(;e.pos()<g&&e.next();)switch(e.tag()){case t:return e.getString();case r:return e.getFloat();case s:return e.getDouble();case n:return e.getSInt32();case o:return e.getUInt32();case i:return e.getInt64();case a:return e.getUInt64();case d:return e.getSInt64();case c:return e.getBool();default:return e.skip(),null}return null}const p=(0,vec3f64/* create */.vt)();

;// ../node_modules/@arcgis/core/views/3d/layers/graphics/pipeline/fetching/Tile3DFetcher.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const Tile3DFetcher_i=8e3,Tile3DFetcher_a=4,Tile3DFetcher_n=4;class Tile3DFetcher_c{constructor(e,t,r,o,s){this.spatialReference=e,this.url=r,this.objectIdField=o,this.capabilities=s;const{supportsMaxRecordCountFactor:n,maxRecordCount:c}=this.capabilities.query,u=n?Tile3DFetcher_a:1,p=(c??Tile3DFetcher_i)*u;this._pageSize=Math.min(Tile3DFetcher_i,p);const l=t.clone();l.cacheHint=!0,l.resultType="tile",l.outSpatialReference=e,l.returnGeometry=!0,l.returnZ=!0,l.maxRecordCountFactor=u,l.num=this._pageSize,l.outFields=[o],this._baseQuery=l}async fetch(r,s){const{spatialReference:i,_pageSize:a}=this,c=(0,aaBoundingRect/* toExtent */.w1)(r.extent,i),u=this._baseQuery.clone();u.geometry=c;const p=new Array;let l=0,h=!1,m=1;for(;!h;){const t=[];for(let e=0;e<m;++e)t.push(this._fetchPage(u,l++,s));const r=await Promise.all(t);(0,promiseUtils/* throwIfAborted */.Te)(s);for(const e of r){const t=0!==e.featureCount;h||=!e.exceededTransferLimit||!t,t&&p.push(e)}m=Math.min(m+1,Tile3DFetcher_n)}return new Tile_n(r,p,a)}async _fetchPage(t,o,i){const a=t.clone();a.start=o*this._pageSize;const n=(await (0,query/* executeQueryPBFBuffer */.kS)(this.url,a,{signal:i})).data;return (0,promiseUtils/* throwIfAborted */.Te)(i),new PBFPointFeatureSetView_u(n)}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/ViewingMode.js
var ViewingMode = __webpack_require__(10714);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/BoundingInfo.js
var BoundingInfo = __webpack_require__(82736);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/HUDMaterial.js + 4 modules
var HUDMaterial = __webpack_require__(62331);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/pipeline/rendering/RenderCommandContext.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class RenderCommandContext_l{constructor(e,r){this._mainThreadDelegate=r,this._bufferWriters=new Map,this.globalViewingMode=e===ViewingMode/* ViewingMode */.RT.Global}createRenderCommandBuffer(e=[],r=[]){return{commands:e,transferList:r}}mergeRenderCommandBuffers(e){const r=this.createRenderCommandBuffer();for(const t of e)null!=t&&(r.commands.push(...t.commands),r.transferList.push(...t.transferList));return r}async createTexture(e){const{data:r,parameters:t}=e();return await this._mainThreadDelegate.createTexture(r,t)}async releaseTexture(e){const r=this._destroyTexture(e);return new PipelineCommand_e(this,r,[])}_destroyTexture(e){return{commands:[{id:"destroy-texture",textureId:e}],transferList:[]}}async createMaterial(e){const{type:r,parameters:t}=e,n=utils_r("material");let a,i;switch(r){case"default":a=new DefaultMaterial/* DefaultMaterial */.$U(e.parameters,{spherical:this.globalViewingMode}),i={type:r,materialId:n,parameters:e.parameters};break;case"hud":a=new HUDMaterial/* HUDMaterial */.R(t,this.globalViewingMode),i={type:r,materialId:n,parameters:e.parameters}}return this._bufferWriters.set(n,a.createBufferWriter()),await this._mainThreadDelegate.createMaterial(i),n}destroyMaterial(e){return{commands:[{id:"destroy-material",materialId:e}],transferList:[]}}updateMaterial(e){return{commands:[{...e,id:"update-material"}],transferList:[]}}async createDirectRenderer(e){return await this._mainThreadDelegate.createDirectRenderer(e),e}async destroyDirectRenderer(e){await this._mainThreadDelegate.destroyDirectRenderer(e)}addDirectRendererGeometry(e,r,t){const{materialId:n}=r;if(null==this._bufferWriters.get(n))throw new Error(`no bufferwriter found for material ${n}`);const{renderGeometryBuffer:a,renderGeometryBufferItems:i}=this.createRenderGeometryBuffer(r,t);return this.addDirectRendererGeometryBuffer(n,e,a,i,t)}updateDirectRendererGeometry(e,r,t){const{materialId:n}=r;if(null==this._bufferWriters.get(n))throw new Error(`no bufferwriter found for material ${n}`);const{renderGeometryBuffer:a,renderGeometryBufferItems:i}=this.createRenderGeometryBuffer(r,t);return this.updateDirectRendererGeometryBuffer(n,e,a,i,t)}addDirectRendererGeometryBuffer(e,r,t,n,a){const{objectIds:i,visibilities:s}=n;return{commands:[{id:"add-direct-renderer-geometry-buffer",rendererId:e,groupId:r,renderGeometryBuffer:t,renderGeometryBufferItems:n,localOrigin:a}],transferList:[t.data,i.buffer,s.buffer]}}updateDirectRendererGeometryBuffer(e,r,t,n,a){const{objectIds:i,visibilities:s}=n;return{commands:[{id:"update-direct-renderer-geometry-buffer",rendererId:e,groupId:r,renderGeometryBuffer:t,renderGeometryBufferItems:n,localOrigin:a}],transferList:[t.data,i.buffer,s.buffer]}}removeDirectRendererGeometryBuffer(e,r){return{commands:[{id:"remove-direct-renderer-geometry-buffer",rendererId:e,groupId:r}],transferList:[]}}async createLodRenderer(e){const r=utils_r("lod-renderer"),t=new Set,n={levels:e.levels.map((e=>({components:e.components.map((e=>{const r=e.attributes.get(VertexAttribute/* VertexAttribute */.r.POSITION);if(!r||0===r.indices.length)throw new Error("positions attribute expected");const n=3,i=(0,Indices/* getContinuousIndexArray */.tM)(r.indices.length/n),s=new BoundingInfo/* BoundingInfo */.j(i,n,r);if(null==this._bufferWriters.get(e.materialId))throw new Error("writer not found");const{renderGeometryBuffer:o}=this.createRenderGeometryBuffer(e,null);t.add(o.data);return{materialId:e.materialId,renderGeometryBuffer:o,boundingInfo:{bbMax:s.bbMax,bbMin:s.bbMin}}})),minScreenSpaceRadius:e.minScreenSpaceRadius})))};return await this._mainThreadDelegate.createLodRenderer(r,n,Array.from(t)),r}destroyLodRenderer(e){return{commands:[{id:"destroy-lod-renderer",rendererId:e}],transferList:[]}}addLodInstances(e,r,t){return{commands:[{id:"add-lod-instances",rendererId:e,groupId:r,data:t}],transferList:[t.featureIds.buffer,t.globalTransforms.buffer,t.localTransforms.buffer,t.visibility.buffer]}}removeLodInstances(e,r){return{commands:[{id:"remove-lod-instances",rendererId:e,groupId:r}],transferList:[]}}updateLodInstancesData(e,r,t){return{commands:[{id:"update-lod-instance-data",rendererId:e,groupId:r,globalTransforms:t}],transferList:[t.buffer]}}updateVisibility(e,r,t){return{commands:[{id:"update-visibility",rendererId:e,groupId:r,visibility:t}],transferList:[t.buffer]}}async dispatchRenderCommands(e){0!==e.commands.length&&await this._mainThreadDelegate.executeRenderCommands(e)}createRenderGeometryBuffer(n,a){const{materialId:i,visibilities:s,objectIds:o}=n,d=this._bufferWriters.get(i);if(null==d)throw new Error("no registered bufferWriter for material found");let m=null;if(n.transformation&&a)(0,mat4/* copy */.C)(RenderCommandContext_c,n.transformation),RenderCommandContext_c[12]-=a[0],RenderCommandContext_c[13]-=a[1],RenderCommandContext_c[14]-=a[2],m=RenderCommandContext_c;else{if(a)throw new Error("not implemented");n.transformation&&(m=n.transformation)}let f=null;m&&((0,mat4/* invert */.B8)(RenderCommandContext_b,RenderCommandContext_c),(0,mat4/* transpose */.mg)(RenderCommandContext_b,RenderCommandContext_b),f=RenderCommandContext_b);const u=n.attributes,l=d.elementCount(u),y=d.vertexBufferLayout.stride/4;l>Math.floor(RenderCommandContext_p/y)&&console.warn("geometry with very large number of elements encountered");const g=d.vertexBufferLayout.createBuffer(l),h=0,I=d.write(m,f,u,n.objectAndLayerIdColor,g,h);if(null==I)throw new Error("Bufferwriter.write does not provide item information.");if(s.length!==I.numItems||o.length!==I.numItems)throw new Error("Unexpected mismatch between number of RenderGeometryBufferItems and provided objectIds/visibility flags.");return{renderGeometryBuffer:{data:g.buffer,elementCount:l},renderGeometryBufferItems:{objectIds:o,visibilities:s,ranges:{numVertices:I.numVerticesPerItem,numItems:I.numItems}}}}}const RenderCommandContext_c=(0,mat4f64/* create */.vt)(),RenderCommandContext_b=(0,mat4f64/* create */.vt)(),RenderCommandContext_p=16777216/4;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/support/RenderCoordsHelper.js + 1 modules
var RenderCoordsHelper = __webpack_require__(98191);
;// ../node_modules/@arcgis/core/views/3d/layers/graphics/pipeline/Feature3DPipelineWorker.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let R=class extends Evented/* default */.A.EventedAccessor{constructor(){super(...arguments),this.remoteClient=null,this._featureStore=new h,this._tileLocks=new TileLocks_e,this._tileManager=null,this._renderer=null,this._fetcher=null,this._queryEngine=null,this._defaultQueryJSON=null,this._mainThreadDelegate=null,this._viewSpatialReference=null,this._renderCommandContext=null,this._context=null}get updating(){return this._tileManager.updating}destroy(){this._featureStore.clear(),this._tileManager?.destroy()}async setup({viewSpatialReference:e,renderSpatialReference:t,viewingMode:r,layerInfo:a,layerViewInfo:n}){const s=SpatialReference/* default */.A.fromJSON(e);this._viewSpatialReference=s;const l=SpatialReference/* default */.A.fromJSON(t);this._fetcher=new Tile3DFetcher_c(this._viewSpatialReference,Query/* default */.A.fromJSON(a.baseQuery),a.url,a.objectIdField,a.capabilities),this._queryEngine=new QueryEngine/* QueryEngine */["do"]({hasZ:!0,hasM:!1,geometryType:"esriGeometryPoint",featureIdInfo:{type:"object-id",fieldName:a.objectIdField},fieldsIndex:a.fieldIndex,availableFields:[a.objectIdField],spatialReference:e,featureStore:this._featureStore,timeInfo:a.timeInfo}),this._mainThreadDelegate={createTexture:async(e,t)=>{const r={data:e,parameters:t};return await this.remoteClient.invoke("createTexture",r,{transferList:[e.buffer]})},releaseTexture:async e=>{const t={uid:e};await this.remoteClient.invoke("releaseTexture",t)},createMaterial:async e=>{const t={materialJSON:e};await this.remoteClient.invoke("createMaterial",t)},destroyMaterial:async e=>{const t={materialId:e};await this.remoteClient.invoke("destroyMaterial",t)},createDirectRenderer:async e=>{const t={materialId:e};await this.remoteClient.invoke("createDirectRenderer",t)},destroyDirectRenderer:async e=>{const t={materialId:e};await this.remoteClient.invoke("destroyDirectRenderer",t)},createLodRenderer:async(e,t,r)=>{const a={rendererId:e,lodRenderGeometry:t};await this.remoteClient.invoke("createLoDRenderer",a,{transferList:r})},destroyLodRenderer:async e=>{const t={rendererId:e};await this.remoteClient.invoke("destroyLoDRenderer",t)},executeRenderCommands:async e=>{const t={commands:e.commands};await this.remoteClient.invoke("dispatchRenderCommands",t,{transferList:e.transferList})},applyElevationAlignmentTo:async e=>{const t={mapPoints:e};return await this.remoteClient.invoke("applyElevationAlignment",t,{transferList:[e.buffer]})}};const f=RenderCoordsHelper/* RenderCoordsHelper */.d.create(r,l),C=new RenderCommandContext_l(r,this._mainThreadDelegate);this._renderCommandContext=C;const w=new FeatureProcessingContext_a(s,l,this._mainThreadDelegate,f,C,a,n);this._context=w,this._renderer=w.symbolRendererFactory.createSymbolRendererFromJSON(a.renderer),this._defaultQueryJSON=new Query/* default */.A({outSpatialReference:s}).toJSON();let R=null;if(null!=a.fullExtent){const e=Extent/* default */.A.fromJSON(a.fullExtent);await (0,projectionUtils.initializeProjection)(e.spatialReference,s),R=(0,projectionUtils.project)(e,s)}return this._tileManager=new _({loadTile:(e,t)=>this._fetcher.fetch(e,t),createAddCommand:(e,t)=>this._createAddFeatureDataCommand(e,t),createRemoveCommand:e=>this._createRemoveFeatureDataCommand(e),createUpdateCommand:(e,t)=>this._createUpdateFeatureDataVisibilityCommand(e,t),tileLocks:this._tileLocks,extent:R}),this.addHandles((0,reactiveUtils/* watch */.wB)((()=>this.updating),(e=>{this.emit("notify-updating",{updating:e})})),reactiveUtils/* initial */.Vh),null!=this._renderer&&await this._renderer.load(),Feature3DPipelineWorker_j}async executeQuery(e,t){return{result:await this._queryEngine.executeQuery(this._ensureQuery(e),t)}}async executeQueryForIds(e,t){const r=await this._queryEngine.executeQueryForIdSet(this._ensureQuery(e),t);return{result:Array.from(r)}}async executeQueryForCount(e,t){return{result:await this._queryEngine.executeQueryForCount(this._ensureQuery(e),t)}}async executeQueryForExtent(e,t){return{result:await this._queryEngine.executeQueryForExtent(this._ensureQuery(e),t)}}async executeQueryForLatestObservations(e,t){return{result:await this._queryEngine.executeQueryForLatestObservations(this._ensureQuery(e),t)}}onTileTreeChange(e){return this._tileManager.onTileTreeChange(e),Promise.resolve(Feature3DPipelineWorker_j)}async onElevationChange(e){return Feature3DPipelineWorker_j}async onLayerViewOpacityChange(e){const{_context:t,_renderer:r}=this;if(t.layerViewInfo.fullOpacity=e,null==r)return Feature3DPipelineWorker_j;const a=await r.createUpdateLayerViewOpacityCommand(e);return await a.execute(),Feature3DPipelineWorker_j}async onRendererChange(r){const{_context:a}=this,n=a.symbolRendererFactory.createSymbolRendererFromJSON(r);await n.load();const i=this._renderer;this._renderer=n;const o=[...this._tileManager.loadedTiles()],s=o.map((e=>e.tileId));{const r={stack:[],error:void 0,hasError:!1};try{(0,tslib_es6.b)(r,await this._tileLocks.lock(s),!1);const t=o.flatMap((e=>[i.createRemoveCommand(e.id),n.createAddCommand(e)])),l=await Promise.all(t),c=a.joinPipelineCommands(l);await c.execute()}catch(c){r.error=c,r.hasError=!0}finally{(0,tslib_es6.c)(r)}}const l=await i.createDestroyCommand();return await l.execute(),Feature3DPipelineWorker_j}async _createAddFeatureDataCommand(e,t){const r=this._featureStore,a=this._renderer;let i;return i=null!=a?await a.createAddCommand(e):PipelineCommand_e.create(this._renderCommandContext),(0,promiseUtils/* throwIfAborted */.Te)(t),i.appendPipelineStateCommand((()=>{r.addTile(e)})),i}async _createRemoveFeatureDataCommand(e){const t=this._featureStore,r=this._renderer;let a;return a=null!=r?await r.createRemoveCommand(e):PipelineCommand_e.create(this._renderCommandContext),a.appendPipelineStateCommand((()=>{t.removeTile(e)})),a}async _createUpdateFeatureDataVisibilityCommand(e,t){const r=this._renderer;let a;return a=null!=r?await r.createUpdateVisibilityCommand(e):PipelineCommand_e.create(this._renderCommandContext),(0,promiseUtils/* throwIfAborted */.Te)(t),a}_ensureQuery(e){return e??this._defaultQueryJSON}};(0,tslib_es6._)([(0,property/* property */.MZ)()],R.prototype,"updating",null),R=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.3d.layers.graphics.pipeline.Feature3DPipelineWorker")],R);const S=R,Feature3DPipelineWorker_j={result:void 0};


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

/***/ 98191:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  d: () => (/* binding */ RenderCoordsHelper_B)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(92504);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/unitUtils.js
var unitUtils = __webpack_require__(92976);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js
var mat4 = __webpack_require__(21742);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(24121);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/ellipsoidUtils.js
var ellipsoidUtils = __webpack_require__(47936);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/spatialReferenceEllipsoidUtils.js
var spatialReferenceEllipsoidUtils = __webpack_require__(32937);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projection/projectPointToVector.js
var projectPointToVector = __webpack_require__(42609);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projection/projectVectorToPoint.js
var projectVectorToPoint = __webpack_require__(70397);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projection/projectVectorToVector.js
var projectVectorToVector = __webpack_require__(42120);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/aaBoundingRect.js
var aaBoundingRect = __webpack_require__(80510);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/Axis.js
var Axis = __webpack_require__(58331);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(58359);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/boundedPlane.js
var boundedPlane = __webpack_require__(28769);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/sphere.js + 1 modules
var sphere = __webpack_require__(31803);
;// ../node_modules/@arcgis/core/geometry/support/coordinateSystem.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function h(t){const{value:e,operations:n}=t;return{operations:n,value:n.create(e)}}function j(t,e,n){return t.operations.setExtent(t.value,e,n.value),n}function d(t,e){return t.operations.getExtent(t.value,e),e}function x(t){return{operations:t,value:t.create()}}function A(t,e,n=x(t)){return n.operations=t,t.copy(e,n.value),n}function b(t){return A(sphere.s,(0,sphere.f)(0,0,0,(0,ellipsoidUtils/* getReferenceEllipsoid */.tO)(t).radius))}const g=2**50;function P(){return A(boundedPlane.b,(0,boundedPlane.f)([0,0,0],[g,0,0],[0,g,0]))}function R(t,e,n){return t.operations.axisAt(t.value,e,Axis/* Axis */._.Z,n)}function S(t,e,n,o){return t.operations.axisAt(t.value,e,n,o)}function k(t,e,n){return t.operations.intersectRay(t.value,e,n)}function y(t,e,n){return t.operations.closestPoint(t.value,e,n)}function E(t,e,n){return t.operations.intersectRayClosestSilhouette(t.value,e,n)}function C(t,e,n){return t.operations.closestPointOnSilhouette(t.value,e,n)}function U(t,e){return t.operations.distanceToSilhouette(t.value,e)}function G(t,e){return t.operations.altitudeAt(t.value,e)}function O(t,e,n,o){return t.operations.setAltitudeAt(t.value,e,n,o)}function T(n,o,r,i){return o!==i&&(0,mat4/* copy */.C)(i,o),(0,vec32.i)(q,i[12],i[13],i[14]),O(n,q,r,q),i[12]=q[0],i[13]=q[1],i[14]=q[2],i}function Z(t,e,n){return t.operations.elevate(t.value,e,n.value)}const q=(0,vec3f64/* create */.vt)();function w(t,e,n,o,r){return r[0]=i(t,e),r[1]=i(t,n),r[2]=i(t,o),r}function z(t,e,i,u,a){n(i,t),n(D,e),o(D,D),r(u,D,i),r(a,u,i)}function B(t,e){return t?c(e):e.isGeographic?s.PlateCarree:e}const D=(0,vec3f64/* create */.vt)();

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/plane.js
var plane = __webpack_require__(38774);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/vector.js
var vector = __webpack_require__(16597);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/vectorStacks.js + 1 modules
var vectorStacks = __webpack_require__(45573);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/dehydratedFeatureUtils.js
var dehydratedFeatureUtils = __webpack_require__(80009);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/ViewingMode.js
var ViewingMode = __webpack_require__(10714);
;// ../node_modules/@arcgis/core/views/3d/support/RenderCoordsHelper.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class RenderCoordsHelper_B{constructor(t,e,o,r){this.viewingMode=t,this.spatialReference=e,this.unitInMeters=o,this._coordinateSystem=r,this._tmpCoordinateSystem=h(r),this.referenceEllipsoid=(0,ellipsoidUtils/* getReferenceEllipsoid */.tO)(e),this.sphericalPCPF=(0,spatialReferenceEllipsoidUtils/* getSphericalPCPF */.lO)(e)}set extent(t){t&&j(this._coordinateSystem,t,this._coordinateSystem)}get extent(){return d(this._coordinateSystem,(0,aaBoundingRect/* create */.vt)())}getAltitude(t){return G(this._coordinateSystem,t)}setAltitude(t,e,o=t){return O(this._coordinateSystem,o,e,t)}setAltitudeOfTransformation(t,e){T(this._coordinateSystem,e,t,e)}worldUpAtPosition(t,e){return R(this._coordinateSystem,t,e)}worldBasisAtPosition(t,e,o){return S(this._coordinateSystem,t,e,o)}basisMatrixAtPosition(t,e){const o=this.worldBasisAtPosition(t,Axis/* Axis */._.X,vectorStacks/* sv3d */.rq.get()),i=this.worldBasisAtPosition(t,Axis/* Axis */._.Y,vectorStacks/* sv3d */.rq.get()),s=this.worldBasisAtPosition(t,Axis/* Axis */._.Z,vectorStacks/* sv3d */.rq.get());return (0,mat4/* set */.hZ)(e,o[0],o[1],o[2],0,i[0],i[1],i[2],0,s[0],s[1],s[2],0,0,0,0,1),e}headingAtPosition(e,o){const r=this.worldUpAtPosition(e,vectorStacks/* sv3d */.rq.get()),i=this.worldBasisAtPosition(e,Axis/* Axis */._.Y,vectorStacks/* sv3d */.rq.get()),s=(0,vector/* angleAroundAxis */.EJ)(o,i,r);return (0,mathUtils/* rad2deg */.KJ)(s)}intersectManifoldClosestSilhouette(t,e,o){return Z(this._coordinateSystem,e,this._tmpCoordinateSystem),E(this._tmpCoordinateSystem,t,o),o}intersectManifold(t,e,o){Z(this._coordinateSystem,e,this._tmpCoordinateSystem);const r=vectorStacks/* sv3d */.rq.get();return k(this._tmpCoordinateSystem,t,r)?(0,vec32.c)(o,r):null}intersectInfiniteManifold(t,e,o){if(this.viewingMode===ViewingMode/* ViewingMode */.RT.Global)return this.intersectManifold(t,e,o);Z(this._coordinateSystem,e,this._tmpCoordinateSystem);const r=this._tmpCoordinateSystem.value,s=vectorStacks/* sv3d */.rq.get();return (0,plane/* intersectRay */.Ui)(r.plane,t,s)?(0,vec32.c)(o,s):null}toRenderCoords(t,e,o){return (0,dehydratedFeatureUtils/* isDehydratedPoint */.v)(t)?(0,projectPointToVector/* projectPointToVector */.g)(t,e,this.spatialReference):(0,projectVectorToVector/* projectVectorToVector */.F)(t,e,o,this.spatialReference)}fromRenderCoords(t,e,o=null){return (0,dehydratedFeatureUtils/* isDehydratedPoint */.v)(e)?(null!=o&&(e.spatialReference=o),(0,projectVectorToPoint/* projectVectorToPoint */.E)(t,this.spatialReference,e)?e:null):(0,projectVectorToVector/* projectVectorToVector */.F)(t,this.spatialReference,e,o)?e:null}static create(t,o){switch(t){case ViewingMode/* ViewingMode */.RT.Local:return new RenderCoordsHelper_B(ViewingMode/* ViewingMode */.RT.Local,o,(0,unitUtils/* getMetersPerUnitForSR */.GA)(o),P());case ViewingMode/* ViewingMode */.RT.Global:return new RenderCoordsHelper_B(ViewingMode/* ViewingMode */.RT.Global,o,1,b(o))}}static renderUnitScaleFactor(t,e){return (0,unitUtils/* getMetersPerCartesianUnitForSR */.KX)(t)/(0,unitUtils/* getMetersPerCartesianUnitForSR */.KX)(e)}}


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