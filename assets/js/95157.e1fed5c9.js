"use strict";
exports.id = 95157;
exports.ids = [95157,96446,13847,2921,78568,24293,93297,32524];
exports.modules = {

/***/ 73339:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  aK: () => (/* binding */ makeGenericController),
  yr: () => (/* binding */ makeT9nController),
  oW: () => (/* binding */ useWatchAttributes)
});

// UNUSED EXPORTS: Controller, GenericController, bypassReadOnly, bypassSetter, controllerSymbol, getControllersCount, isController, keyTrackResolve, load, makeController, proxyExports, retrieveComponent, toFunction, trackKey, trackPropKey, trackPropertyKey, useDirection, useMedia, usePropertyChange

// EXTERNAL MODULE: ../node_modules/@arcgis/lumina/dist/Controller-BQOv8BAL.js
var Controller_BQOv8BAL = __webpack_require__(74833);
;// ../node_modules/@arcgis/lumina/dist/proxyExports-Cdzj7WL_.js

const proxyExports = (Class) => (...args) => {
  const ambientControllers = (0,Controller_BQOv8BAL.e)();
  const instance = new Class(...args);
  const initialExports = instance.exports;
  (0,Controller_BQOv8BAL.d)(ambientControllers.at(-1));
  const manager = instance.component.manager;
  manager.W(instance, initialExports);
  instance.watchExports(manager.W.bind(manager, instance));
  (0,Controller_BQOv8BAL.o)(instance);
  const hostCandidates = [instance.component, ...ambientControllers].reverse();
  return (0,Controller_BQOv8BAL.t)(
    hostCandidates,
    (resolution) => resolution === void 0 ? void 0 : setProxy(instance, resolution, initialExports),
    initialExports
  );
};
const setProxy = (controller, { host, key, isReactive: assignedToProp }, initialExports) => {
  const genericHost = host;
  const controllerValueChanged = genericHost[key] !== controller.exports;
  const hostValueChanged = genericHost[key] !== initialExports;
  const controllerUpdatedExports = initialExports !== controller.exports;
  if (controllerValueChanged && !hostValueChanged && controllerUpdatedExports) {
    genericHost[key] = controller.exports;
  }
  const isProxyExportsOnComponent = host === controller.component;
  if (isProxyExportsOnComponent) {
    if (assignedToProp) {
      const manager = controller.component.manager;
      if (hostValueChanged) {
        manager.W(controller, genericHost[key]);
      }
      controller.onUpdate((changes) => {
        if (changes.has(key)) {
          const value = genericHost[key];
          if (value !== controller.exports) {
            manager.W(controller, value);
          }
        }
      });
    }
    controller.O = assignedToProp ? void 0 : key;
  }
  const isReadOnly = controller.component.constructor.elementProperties.get(key)?.readOnly;
  controller.watchExports(() => {
    if (genericHost[key] === controller.exports) {
      return;
    }
    if (isReadOnly) {
      (0,Controller_BQOv8BAL.h)(() => {
        genericHost[key] = controller.exports;
      });
    } else {
      genericHost[key] = controller.exports;
    }
  });
};


// EXTERNAL MODULE: ../node_modules/lit/index.js + 2 modules
var lit = __webpack_require__(52689);
// EXTERNAL MODULE: ../node_modules/@arcgis/components-utils/dist/index.js
var dist = __webpack_require__(37685);
;// ../node_modules/@arcgis/lumina/dist/controllers/index.js





const makeController = (constructor) => proxy(void 0, constructor);
const makeGenericController = (constructor) => (component) => proxy(
  component,
  /**
   * GenericController is identical to Controller, in all except for typing.
   * So dying a type-cast here so as not to needlessly add one more object
   * to the prototype chain
   */
  constructor
);
class FunctionalController extends Controller_BQOv8BAL.C {
  constructor(component, constructor) {
    super(component);
    const originalExports = this.exports;
    try {
      (0,Controller_BQOv8BAL.s)(this.component);
      const value = constructor(this.component, this);
      const constructorChangedExports = this.exports !== originalExports;
      if ((0,Controller_BQOv8BAL.i)(value)) {
        if (!constructorChangedExports) {
          this.setProvisionalExports(value);
        }
        const resolved = value.then((result) => {
          this.exports = result;
          super.catchUpLifecycle();
        }).catch((error) => {
          this.P.reject(error);
          console.error(error);
        });
        this.onLoad(async () => await resolved);
      } else {
        if (!constructorChangedExports || value !== void 0) {
          this.exports = value;
        }
        queueMicrotask(() => super.catchUpLifecycle());
      }
    } catch (error) {
      this.P.reject(error);
      console.error(error);
    }
  }
  /** Noop - will be called in the constructor instead */
  catchUpLifecycle() {
    return;
  }
}
const proxy = proxyExports(FunctionalController);
const useWatchAttributes = (attributes, callback) => new AttributeWatchController(attributes, callback);
class AttributeWatchController extends Controller_BQOv8BAL.C {
  #observer;
  #attributes;
  #callback;
  constructor(attributes, callback) {
    super();
    if (lit/* isServer */.S$) {
      return;
    }
    this.#attributes = attributes;
    this.#callback = callback;
    this.#observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (attributes.includes(mutation.attributeName)) {
          callback.call(
            this.component,
            this.component.el.getAttribute(mutation.attributeName),
            mutation.oldValue,
            mutation.attributeName
          );
        }
      });
    });
  }
  hostConnected() {
    this.#attributes.forEach((attribute) => {
      if (this.component.el.hasAttribute(attribute)) {
        this.#callback.call(this.component, null, this.component.el.getAttribute(attribute), attribute);
      }
    });
    this.#observer.observe(this.component.el, {
      attributes: true,
      attributeOldValue: true,
      attributeFilter: this.#attributes
    });
  }
  hostDisconnected() {
    this.#observer.disconnect();
  }
}
const load = (/* unused pure expression or super */ null && (makeController));
const toFunction = (Class) => (...args) => {
  const ambientControllers = retrieveParentControllers();
  const instance = new Class(...args);
  setParentController(ambientControllers.at(-1));
  return instance;
};
const useMedia = (query) => makeController((_component, controller) => {
  const media = globalThis.matchMedia(query);
  const changed = () => {
    controller.exports = media.matches;
  };
  changed();
  controller.onLifecycle(() => {
    media.addEventListener("change", changed);
    return () => media.removeEventListener("change", changed);
  });
  return void 0;
});
const defaultDirection = "ltr";
const useDirection = () => makeController((component, controller) => {
  controller.exports = defaultDirection;
  controller.onLifecycle(() => {
    const callback = () => {
      const dir = getElementAttribute(component.el, "dir", defaultDirection);
      controller.exports = dir === "rtl" ? "rtl" : "ltr";
    };
    callback();
    return observeAncestorsMutation(component.el, ["dir"], callback);
  });
  if (false) {}
  return void 0;
});
const makeT9nController = (getAssetPath) => (options = {}) => (
  // eslint-disable-next-line @typescript-eslint/promise-function-async
  makeController((component, controller) => {
    const locale = (0,dist/* getElementLocales */.kn)(component.el);
    const pending = { ["_lang"]: locale.lang, ["_t9nLocale"]: locale.t9nLocale, ["_loading"]: true };
    const componentWithOverrides = component;
    controller.onLifecycle(
      () => (0,dist/* startLocaleObserver */.hd)(
        component.el,
        () => getAssetPath("./assets"),
        ({ t9nLocale, t9nStrings, lang }) => {
          const withoutOverrides = {
            ...t9nStrings,
            ["_lang"]: lang,
            ["_t9nLocale"]: t9nLocale,
            ["_loading"]: false
          };
          controller.exports = withoutOverrides;
          const label = t9nStrings.componentLabel;
          if (typeof label === "string" && "label" in component && component.label == null) {
            component.label ??= label;
          }
          applyOverrides(componentWithOverrides.messageOverrides);
        },
        options.name
      )
    );
    const applyOverrides = (messageOverrides) => {
      const currentValue = controller.exports;
      const rawMessages = currentValue["_original"] ?? currentValue;
      const updated = deepMerge(rawMessages, messageOverrides);
      if (messageOverrides) {
        updated["_original"] = rawMessages;
      }
      controller.exports = updated;
    };
    if ("messageOverrides" in componentWithOverrides) {
      controller.onUpdate((changes) => {
        if (changes.has("messageOverrides")) {
          applyOverrides(componentWithOverrides.messageOverrides);
        }
      });
    }
    if (options.blocking) {
      controller.setProvisionalExports(pending, false);
      return controller.ready;
    } else {
      return pending;
    }
  })
);
const deepMerge = (original, overwrites) => {
  if (!overwrites) {
    return original;
  }
  const merged = { ...original };
  Object.entries(overwrites).forEach(([key, value]) => {
    if (typeof value === "object") {
      merged[key] = deepMerge(original[key], value);
    } else {
      merged[key] = value ?? original[key];
    }
  });
  return merged;
};
const usePropertyChange = (_component) => propertyChangeController;
const eventName = "arcgisPropertyChange";
const propertyChangeController = (...toWatch) => {
  const component = retrieveComponent();
  const eventEmitter = createEventFactory(eventName, void 0, component);
  if (false) {}
  let isFirst = true;
  component.manager.onUpdated((changes) => {
    if (isFirst || !component.el.isConnected) {
      isFirst = false;
      return;
    }
    for (const name of toWatch) {
      if (changes.has(name)) {
        eventEmitter.emit({ name });
      }
    }
  });
  if (false) {}
  return eventEmitter;
};



/***/ }),

/***/ 70605:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ FloatingArrow)
/* harmony export */ });
/* harmony import */ var lit_html_directives_ref_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59276);
/* harmony import */ var lit_html_directives_keyed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51425);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31263);
/* harmony import */ var _arcgis_lumina__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48747);
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */




const CSS = {
  arrow: "calcite-floating-ui-arrow",
  arrowStroke: "calcite-floating-ui-arrow__stroke"
};
const DEFAULTS = {
  width: 12,
  height: 6,
  strokeWidth: 1
};
const FloatingArrow = ({ floatingLayout, key, ref: ref$1 }) => {
  const { width, height, strokeWidth } = DEFAULTS;
  const svgX = width / 2;
  const isVertical = floatingLayout === "vertical";
  const dValue = `M0,0 H${width} L${width - svgX},${height} Q${svgX},${height} ${svgX},${height} Z`;
  return (0,lit_html_directives_keyed_js__WEBPACK_IMPORTED_MODULE_1__/* .keyed */ .D)(key, (0,lit_html__WEBPACK_IMPORTED_MODULE_2__/* .html */ .qy)`<svg aria-hidden=true class=${(0,_arcgis_lumina__WEBPACK_IMPORTED_MODULE_3__/* .safeClassMap */ .CP)(CSS.arrow)} height=${width} viewBox=${`0 0 ${width} ${width + (!isVertical ? strokeWidth : 0)}`} width=${width + (isVertical ? strokeWidth : 0)} ${(0,lit_html_directives_ref_js__WEBPACK_IMPORTED_MODULE_0__/* .ref */ .K)(ref$1)}>${(0,lit_html__WEBPACK_IMPORTED_MODULE_2__/* .svg */ .JW)`${(0,lit_html__WEBPACK_IMPORTED_MODULE_2__/* .svg */ .JW)`<path class=${(0,_arcgis_lumina__WEBPACK_IMPORTED_MODULE_3__/* .safeClassMap */ .CP)(CSS.arrowStroke)} d=${dValue ?? lit_html__WEBPACK_IMPORTED_MODULE_2__/* .nothing */ .s6} fill=none stroke-width=${strokeWidth + 1} />` || ""}<path d=${dValue ?? lit_html__WEBPACK_IMPORTED_MODULE_2__/* .nothing */ .s6} stroke=none />`}</svg>`);
};



/***/ }),

/***/ 64708:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ Heading)
/* harmony export */ });
/* unused harmony export c */
/* harmony import */ var lit_html_directives_keyed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51425);
/* harmony import */ var lit_html_static_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27092);
/* harmony import */ var _arcgis_lumina__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48747);
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */



function constrainHeadingLevel(level) {
  return Math.min(Math.max(Math.ceil(level), 1), 6);
}
const Heading = ({ children, ...props }) => {
  const DynamicHtmlTag = props.level ? (0,lit_html_static_js__WEBPACK_IMPORTED_MODULE_1__/* .unsafeStatic */ .Bk)(`h${props.level}`) : (0,lit_html_static_js__WEBPACK_IMPORTED_MODULE_1__/* .literal */ .eu)`div`;
  return (0,lit_html_directives_keyed_js__WEBPACK_IMPORTED_MODULE_0__/* .keyed */ .D)(props.key, (0,lit_html_static_js__WEBPACK_IMPORTED_MODULE_1__/* .html */ .qy)`<${DynamicHtmlTag} class=${(0,_arcgis_lumina__WEBPACK_IMPORTED_MODULE_2__/* .safeClassMap */ .CP)(props.class)}>${children}</${DynamicHtmlTag}>`);
};



/***/ }),

/***/ 695:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ getRoundRobinIndex)
/* harmony export */ });
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */
function getRoundRobinIndex(index, total) {
  return (index + total) % total;
}



/***/ }),

/***/ 66865:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ componentFocusable),
/* harmony export */   g: () => (/* binding */ getIconScale)
/* harmony export */ });
/* unused harmony exports i, w */
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23424);
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */

function getIconScale(componentScale) {
  return componentScale === "l" ? "m" : "s";
}
function warnIfMissingRequiredProp(component, newProp, deprecatedProp) {
  if (!component[newProp] && !component[deprecatedProp]) {
    logger.warn(`[${component.el.localName}] "${newProp.toString()}" or "${deprecatedProp.toString()}" is required.`);
  }
}
function isHidden(el) {
  return el.hidden || el.itemHidden;
}
async function componentFocusable(component) {
  await component.componentOnReady();
  await component.updateComplete;
}



/***/ }),

/***/ 25450:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ getModeName),
/* harmony export */   D: () => (/* binding */ hasVisibleContent),
/* harmony export */   a: () => (/* binding */ slotChangeHasAssignedElement),
/* harmony export */   b: () => (/* binding */ focusElement),
/* harmony export */   c: () => (/* binding */ getShadowRootNode),
/* harmony export */   d: () => (/* binding */ focusElementInGroup),
/* harmony export */   e: () => (/* binding */ getSlotAssignedElements),
/* harmony export */   f: () => (/* binding */ filterDirectChildren),
/* harmony export */   g: () => (/* binding */ getElementDir),
/* harmony export */   h: () => (/* binding */ focusFirstTabbable),
/* harmony export */   i: () => (/* binding */ isPrimaryPointerButton),
/* harmony export */   k: () => (/* binding */ getStylePixelValue),
/* harmony export */   l: () => (/* binding */ closestElementCrossShadowBoundary),
/* harmony export */   m: () => (/* binding */ isBefore),
/* harmony export */   n: () => (/* binding */ nodeListToArray),
/* harmony export */   o: () => (/* binding */ ensureId),
/* harmony export */   p: () => (/* binding */ tabbableOptions),
/* harmony export */   q: () => (/* binding */ queryElementRoots),
/* harmony export */   r: () => (/* binding */ slotChangeHasContent),
/* harmony export */   s: () => (/* binding */ slotChangeGetAssignedElements),
/* harmony export */   t: () => (/* binding */ toAriaBoolean),
/* harmony export */   u: () => (/* binding */ isKeyboardTriggeredClick),
/* harmony export */   v: () => (/* binding */ setRequestedIcon),
/* harmony export */   w: () => (/* binding */ whenTransitionDone),
/* harmony export */   x: () => (/* binding */ getFirstTabbable),
/* harmony export */   y: () => (/* binding */ getRootNode),
/* harmony export */   z: () => (/* binding */ whenAnimationDone)
/* harmony export */ });
/* unused harmony exports A, B, j */
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7025);
/* harmony import */ var _runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14558);
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */


/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var candidateSelectors = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"];
var candidateSelector = /* @__PURE__ */ candidateSelectors.join(",");
var NoElement = typeof Element === "undefined";
var matches = NoElement ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode$1 = !NoElement && Element.prototype.getRootNode ? function(element) {
  var _element$getRootNode;
  return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function(element) {
  return element === null || element === void 0 ? void 0 : element.ownerDocument;
};
var isInert = function isInert2(node, lookUp) {
  var _node$getAttribute;
  if (lookUp === void 0) {
    lookUp = true;
  }
  var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, "inert");
  var inert = inertAtt === "" || inertAtt === "true";
  var result = inert || lookUp && node && isInert2(node.parentNode);
  return result;
};
var isContentEditable = function isContentEditable2(node) {
  var _node$getAttribute2;
  var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, "contenteditable");
  return attValue === "" || attValue === "true";
};
var getCandidates = function getCandidates2(el, includeContainer, filter) {
  if (isInert(el)) {
    return [];
  }
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }
  candidates = candidates.filter(filter);
  return candidates;
};
var getCandidatesIteratively = function getCandidatesIteratively2(elements, includeContainer, options) {
  var candidates = [];
  var elementsToCheck = Array.from(elements);
  while (elementsToCheck.length) {
    var element = elementsToCheck.shift();
    if (isInert(element, false)) {
      continue;
    }
    if (element.tagName === "SLOT") {
      var assigned = element.assignedElements();
      var content = assigned.length ? assigned : element.children;
      var nestedCandidates = getCandidatesIteratively2(content, true, options);
      if (options.flatten) {
        candidates.push.apply(candidates, nestedCandidates);
      } else {
        candidates.push({
          scopeParent: element,
          candidates: nestedCandidates
        });
      }
    } else {
      var validCandidate = matches.call(element, candidateSelector);
      if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
        candidates.push(element);
      }
      var shadowRoot = element.shadowRoot || // check for an undisclosed shadow
      typeof options.getShadowRoot === "function" && options.getShadowRoot(element);
      var validShadowRoot = !isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
      if (shadowRoot && validShadowRoot) {
        var _nestedCandidates = getCandidatesIteratively2(shadowRoot === true ? element.children : shadowRoot.children, true, options);
        if (options.flatten) {
          candidates.push.apply(candidates, _nestedCandidates);
        } else {
          candidates.push({
            scopeParent: element,
            candidates: _nestedCandidates
          });
        }
      } else {
        elementsToCheck.unshift.apply(elementsToCheck, element.children);
      }
    }
  }
  return candidates;
};
var hasTabIndex = function hasTabIndex2(node) {
  return !isNaN(parseInt(node.getAttribute("tabindex"), 10));
};
var getTabIndex = function getTabIndex2(node) {
  if (!node) {
    throw new Error("No node provided");
  }
  if (node.tabIndex < 0) {
    if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
      return 0;
    }
  }
  return node.tabIndex;
};
var getSortOrderTabIndex = function getSortOrderTabIndex2(node, isScope) {
  var tabIndex = getTabIndex(node);
  if (tabIndex < 0 && isScope && !hasTabIndex(node)) {
    return 0;
  }
  return tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables2(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};
var isInput = function isInput2(node) {
  return node.tagName === "INPUT";
};
var isHiddenInput = function isHiddenInput2(node) {
  return isInput(node) && node.type === "hidden";
};
var isDetailsWithSummary = function isDetailsWithSummary2(node) {
  var r = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
    return child.tagName === "SUMMARY";
  });
  return r;
};
var getCheckedRadio = function getCheckedRadio2(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};
var isTabbableRadio = function isTabbableRadio2(node) {
  if (!node.name) {
    return true;
  }
  var radioScope = node.form || getRootNode$1(node);
  var queryRadios = function queryRadios2(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };
  var radioSet;
  if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
      return false;
    }
  }
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};
var isRadio = function isRadio2(node) {
  return isInput(node) && node.type === "radio";
};
var isNonTabbableRadio = function isNonTabbableRadio2(node) {
  return isRadio(node) && !isTabbableRadio(node);
};
var isNodeAttached = function isNodeAttached2(node) {
  var _nodeRoot;
  var nodeRoot = node && getRootNode$1(node);
  var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;
  var attached = false;
  if (nodeRoot && nodeRoot !== node) {
    var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
    attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
    while (!attached && nodeRootHost) {
      var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
      nodeRoot = getRootNode$1(nodeRootHost);
      nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
      attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
    }
  }
  return attached;
};
var isZeroArea = function isZeroArea2(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
  return width === 0 && height === 0;
};
var isHidden = function isHidden2(node, _ref) {
  var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
  if (getComputedStyle(node).visibility === "hidden") {
    return true;
  }
  var isDirectSummary = matches.call(node, "details>summary:first-of-type");
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
  if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
    return true;
  }
  if (!displayCheck || displayCheck === "full" || displayCheck === "legacy-full") {
    if (typeof getShadowRoot === "function") {
      var originalNode = node;
      while (node) {
        var parentElement = node.parentElement;
        var rootNode = getRootNode$1(node);
        if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) {
          return isZeroArea(node);
        } else if (node.assignedSlot) {
          node = node.assignedSlot;
        } else if (!parentElement && rootNode !== node.ownerDocument) {
          node = rootNode.host;
        } else {
          node = parentElement;
        }
      }
      node = originalNode;
    }
    if (isNodeAttached(node)) {
      return !node.getClientRects().length;
    }
    if (displayCheck !== "legacy-full") {
      return true;
    }
  } else if (displayCheck === "non-zero-area") {
    return isZeroArea(node);
  }
  return false;
};
var isDisabledFromFieldset = function isDisabledFromFieldset2(node) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
    var parentNode = node.parentElement;
    while (parentNode) {
      if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
        for (var i = 0; i < parentNode.children.length; i++) {
          var child = parentNode.children.item(i);
          if (child.tagName === "LEGEND") {
            return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node);
          }
        }
        return true;
      }
      parentNode = parentNode.parentElement;
    }
  }
  return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable2(options, node) {
  if (node.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  isInert(node) || isHiddenInput(node) || isHidden(node, options) || // For a details element with a summary, the summary element gets the focus
  isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }
  return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable2(options, node) {
  if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
    return false;
  }
  return true;
};
var isValidShadowRootTabbable = function isValidShadowRootTabbable2(shadowHostNode) {
  var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
  if (isNaN(tabIndex) || tabIndex >= 0) {
    return true;
  }
  return false;
};
var sortByOrder = function sortByOrder2(candidates) {
  var regularTabbables = [];
  var orderedTabbables = [];
  candidates.forEach(function(item, i) {
    var isScope = !!item.scopeParent;
    var element = isScope ? item.scopeParent : item;
    var candidateTabindex = getSortOrderTabIndex(element, isScope);
    var elements = isScope ? sortByOrder2(item.candidates) : element;
    if (candidateTabindex === 0) {
      isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        item,
        isScope,
        content: elements
      });
    }
  });
  return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
    sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
    return acc;
  }, []).concat(regularTabbables);
};
var tabbable = function tabbable2(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorTabbable.bind(null, options),
      flatten: false,
      getShadowRoot: options.getShadowRoot,
      shadowRootFilter: isValidShadowRootTabbable
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  }
  return sortByOrder(candidates);
};
const tabbableOptions = {
  getShadowRoot: true
};
function ensureId(el) {
  if (!el) {
    return "";
  }
  return el.id = el.id || `${el.tagName.toLowerCase()}-${(0,_guid_js__WEBPACK_IMPORTED_MODULE_1__.g)()}`;
}
function nodeListToArray(nodeList) {
  return Array.isArray(nodeList) ? nodeList : Array.from(nodeList);
}
function getModeName(el) {
  const closestElWithMode = closestElementCrossShadowBoundary(
    el,
    `.${_runtime_js__WEBPACK_IMPORTED_MODULE_0__.C.darkMode}, .${_runtime_js__WEBPACK_IMPORTED_MODULE_0__.C.lightMode}, .${_runtime_js__WEBPACK_IMPORTED_MODULE_0__.C.autoMode}`
  );
  return closestElWithMode?.classList.contains("calcite-mode-dark") || closestElWithMode?.classList.contains("calcite-mode-auto") && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function getElementDir(el) {
  const prop = "dir";
  const selector = `[${prop}]`;
  const closest = closestElementCrossShadowBoundary(el, selector);
  return closest ? closest.getAttribute(prop) : "ltr";
}
function getElementWidth(el) {
  if (!el) {
    return 0;
  }
  return parseFloat(getComputedStyle(el).inlineSize);
}
function getRootNode(el) {
  return el.getRootNode();
}
function getShadowRootNode(el) {
  const rootNode = getRootNode(el);
  return "host" in rootNode ? rootNode : null;
}
function getTextWidth(text, font) {
  if (!text) {
    return 0;
  }
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = font;
  return context.measureText(text).width;
}
function getHost(root) {
  return root.host || null;
}
function queryElementRoots(el, {
  selector,
  id
}) {
  if (!el) {
    return null;
  }
  if (el.assignedSlot) {
    el = el.assignedSlot;
  }
  const rootNode = getRootNode(el);
  const found = id ? "getElementById" in rootNode ? (
    /*
      Check to make sure 'getElementById' exists in cases where element is no longer connected to the DOM and getRootNode() returns the element.
      https://github.com/Esri/calcite-design-system/pull/4280
       */
    rootNode.getElementById(id)
  ) : null : selector ? rootNode.querySelector(selector) : null;
  return found || queryElementRoots(getHost(rootNode), { selector, id });
}
function closestElementCrossShadowBoundary(element, selector) {
  return element ? element.closest(selector) || closestElementCrossShadowBoundary(getHost(getRootNode(element)), selector) : null;
}
function isCalciteFocusable(el) {
  return typeof el?.setFocus === "function";
}
async function focusElement(el) {
  if (!el) {
    return;
  }
  return isCalciteFocusable(el) ? el.setFocus() : el.focus();
}
function getFirstTabbable(element) {
  if (!element) {
    return;
  }
  return tabbable(element, tabbableOptions)[0] ?? element;
}
function focusFirstTabbable(element) {
  getFirstTabbable(element)?.focus();
}
function filterDirectChildren(el, selector) {
  return Array.from(el.children).filter((child) => child.matches(selector));
}
function filterElementsBySelector(elements, selector) {
  return elements.filter((element) => element.matches(selector));
}
function setRequestedIcon(iconObject, iconValue, matchedValue) {
  if (typeof iconValue === "string" && iconValue !== "") {
    return iconValue;
  } else if (iconValue === "" || iconValue === true) {
    return iconObject[matchedValue];
  }
}
function intersects(rect1, rect2) {
  return !(rect2.left > rect1.right || rect2.right < rect1.left || rect2.top > rect1.bottom || rect2.bottom < rect1.top);
}
function toAriaBoolean(value) {
  return Boolean(value).toString();
}
function slotChangeHasContent(event) {
  return slotChangeHasAssignedElement(event) || slotChangeHasTextContent(event);
}
function slotChangeGetTextContent(event) {
  return slotChangeGetAssignedNodes(event).filter((node) => node.nodeType === Node.TEXT_NODE).map((node) => node.textContent).join("").trim();
}
function hasVisibleContent(element) {
  for (const node of element.childNodes) {
    if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim() !== "" || node.nodeType === Node.ELEMENT_NODE) {
      return true;
    }
  }
  return false;
}
function slotChangeHasTextContent(event) {
  return !!slotChangeGetTextContent(event);
}
function slotChangeGetAssignedNodes(event) {
  return event.currentTarget.assignedNodes({
    flatten: true
  });
}
function slotChangeHasAssignedElement(event) {
  return !!slotChangeGetAssignedElements(event).length;
}
function slotChangeGetAssignedElements(event, selector) {
  return getSlotAssignedElements(event.target, selector);
}
function getSlotAssignedElements(slot, selector) {
  const assignedElements = slot.assignedElements({
    flatten: true
  });
  return selector ? filterElementsBySelector(assignedElements, selector) : assignedElements;
}
function isPrimaryPointerButton(event) {
  return !!(event.isPrimary && event.button === 0);
}
function isKeyboardTriggeredClick(event) {
  return event.detail === 0;
}
const focusElementInGroup = (elements, currentElement, destination, cycle = true) => {
  const currentIndex = elements.indexOf(currentElement);
  const isFirstItem = currentIndex === 0;
  const isLastItem = currentIndex === elements.length - 1;
  if (cycle) {
    destination = destination === "previous" && isFirstItem ? "last" : destination === "next" && isLastItem ? "first" : destination;
  }
  let focusTarget;
  if (destination === "previous") {
    focusTarget = elements[currentIndex - 1] || elements[cycle ? elements.length - 1 : currentIndex];
  } else if (destination === "next") {
    focusTarget = elements[currentIndex + 1] || elements[cycle ? 0 : currentIndex];
  } else if (destination === "last") {
    focusTarget = elements[elements.length - 1];
  } else {
    focusTarget = elements[0];
  }
  focusElement(focusTarget);
  return focusTarget;
};
function isBefore(a, b) {
  if (a.parentNode !== b.parentNode) {
    return false;
  }
  const children = Array.from(a.parentNode.children);
  return children.indexOf(a) < children.indexOf(b);
}
async function whenAnimationDone(targetEl, animationName, onStart, onEnd) {
  return whenTransitionOrAnimationDone(targetEl, animationName, "animation", onStart, onEnd);
}
async function whenTransitionDone(targetEl, transitionProp, onStart, onEnd) {
  return whenTransitionOrAnimationDone(targetEl, transitionProp, "transition", onStart, onEnd);
}
async function triggerFallbackStartEnd(start, end) {
  await nextFrame();
  start?.();
  await nextFrame();
  end?.();
}
function findAnimation(targetEl, type, transitionPropOrAnimationName) {
  const targetProp = type === "transition" ? "transitionProperty" : "animationName";
  return targetEl.getAnimations().find((anim) => anim[targetProp] === transitionPropOrAnimationName);
}
async function whenTransitionOrAnimationDone(targetEl, transitionPropOrAnimationName, type, onStart, onEnd) {
  let anim = findAnimation(targetEl, type, transitionPropOrAnimationName);
  if (!anim) {
    await nextFrame();
    anim = findAnimation(targetEl, type, transitionPropOrAnimationName);
  }
  if (!anim) {
    return triggerFallbackStartEnd(onStart, onEnd);
  }
  onStart?.();
  try {
    await anim.finished;
  } catch {
  } finally {
    onEnd?.();
  }
}
function nextFrame() {
  return new Promise((resolve) => requestAnimationFrame(() => resolve()));
}
function getStylePixelValue(value) {
  switch (true) {
    case value.endsWith("px"):
      return parseFloat(value);
    case value.endsWith("vw"):
      return window.innerWidth / 100 * parseFloat(value);
    case value.endsWith("vh"):
      return window.innerHeight / 100 * parseFloat(value);
    default:
      return 0;
  }
}



/***/ }),

/***/ 82411:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ getDimensionClass)
/* harmony export */ });
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */
function getDimensionClass(type, size, scale) {
  return size ? `${type}-${size}` : scale ? `${type}-${scale}` : `${type}-m`;
}



/***/ }),

/***/ 96148:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F: () => (/* binding */ FloatingCSS),
  a: () => (/* binding */ disconnectFloatingUI),
  b: () => (/* binding */ defaultMenuPlacement),
  c: () => (/* binding */ connectFloatingUI),
  d: () => (/* binding */ defaultOffsetDistance),
  e: () => (/* binding */ defaultEndMenuPlacement),
  f: () => (/* binding */ filterValidFlipPlacements),
  h: () => (/* binding */ hideFloatingUI),
  r: () => (/* binding */ reposition)
});

// EXTERNAL MODULE: ../node_modules/lit/index.js + 2 modules
var lit = __webpack_require__(52689);
;// ../node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */

const sides = ['top', 'right', 'bottom', 'left'];
const alignments = ['start', 'end'];
const placements = /*#__PURE__*/sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
const floating_ui_utils_min = Math.min;
const floating_ui_utils_max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = v => ({
  x: v,
  y: v
});
const oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
const oppositeAlignmentMap = {
  start: 'end',
  end: 'start'
};
function clamp(start, value, end) {
  return floating_ui_utils_max(start, floating_ui_utils_min(value, end));
}
function floating_ui_utils_evaluate(value, param) {
  return typeof value === 'function' ? value(param) : value;
}
function floating_ui_utils_getSide(placement) {
  return placement.split('-')[0];
}
function floating_ui_utils_getAlignment(placement) {
  return placement.split('-')[1];
}
function floating_ui_utils_getOppositeAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
  return axis === 'y' ? 'height' : 'width';
}
const yAxisSides = /*#__PURE__*/new Set(['top', 'bottom']);
function floating_ui_utils_getSideAxis(placement) {
  return yAxisSides.has(floating_ui_utils_getSide(placement)) ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
  return floating_ui_utils_getOppositeAxis(floating_ui_utils_getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = floating_ui_utils_getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
}
const lrPlacement = ['left', 'right'];
const rlPlacement = ['right', 'left'];
const tbPlacement = ['top', 'bottom'];
const btPlacement = ['bottom', 'top'];
function getSideList(side, isStart, rtl) {
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case 'left':
    case 'right':
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = floating_ui_utils_getAlignment(placement);
  let list = getSideList(floating_ui_utils_getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(side => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function floating_ui_utils_getPaddingObject(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function floating_ui_utils_rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}



;// ../node_modules/@floating-ui/core/dist/floating-ui.core.mjs



function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = floating_ui_utils_getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = floating_ui_utils_getSide(placement);
  const isVertical = sideAxis === 'y';
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (floating_ui_utils_getAlignment(placement)) {
    case 'start':
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
const computePosition = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = floating_ui_utils_evaluate(options, state);
  const paddingObject = floating_ui_utils_getPaddingObject(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = floating_ui_utils_rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === 'floating' ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
  const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = floating_ui_utils_rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = options => ({
  name: 'arrow',
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform,
      elements,
      middlewareData
    } = state;
    // Since `element` is required, we don't Partial<> the type.
    const {
      element,
      padding = 0
    } = floating_ui_utils_evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = floating_ui_utils_getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const isYAxis = axis === 'y';
    const minProp = isYAxis ? 'top' : 'left';
    const maxProp = isYAxis ? 'bottom' : 'right';
    const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

    // DOM platform can return `window` as the `offsetParent`.
    if (!clientSize || !(await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent)))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;

    // If the padding is large enough that it causes the arrow to no longer be
    // centered, modify the padding so that it is centered.
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = floating_ui_utils_min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = floating_ui_utils_min(paddingObject[maxProp], largestPossiblePadding);

    // Make sure the arrow doesn't overflow the floating element if the center
    // point is outside the floating element's bounds.
    const min$1 = minPadding;
    const max = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = clamp(min$1, center, max);

    // If the reference is small enough that the arrow's padding causes it to
    // to point to nothing for an aligned placement, adjust the offset of the
    // floating element itself. To ensure `shift()` continues to take action,
    // a single reset is performed when this is true.
    const shouldAddOffset = !middlewareData.arrow && floating_ui_utils_getAlignment(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset - alignmentOffset,
        ...(shouldAddOffset && {
          alignmentOffset
        })
      },
      reset: shouldAddOffset
    };
  }
});

function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter(placement => floating_ui_utils_getAlignment(placement) === alignment), ...allowedPlacements.filter(placement => floating_ui_utils_getAlignment(placement) !== alignment)] : allowedPlacements.filter(placement => floating_ui_utils_getSide(placement) === placement);
  return allowedPlacementsSortedByAlignment.filter(placement => {
    if (alignment) {
      return floating_ui_utils_getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
    }
    return true;
  });
}
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
const autoPlacement = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'autoPlacement',
    options,
    async fn(state) {
      var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
      const {
        rects,
        middlewareData,
        placement,
        platform,
        elements
      } = state;
      const {
        crossAxis = false,
        alignment,
        allowedPlacements = placements,
        autoAlignment = true,
        ...detectOverflowOptions
      } = floating_ui_utils_evaluate(options, state);
      const placements$1 = alignment !== undefined || allowedPlacements === placements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
      const currentPlacement = placements$1[currentIndex];
      if (currentPlacement == null) {
        return {};
      }
      const alignmentSides = getAlignmentSides(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));

      // Make `computeCoords` start from the right place.
      if (placement !== currentPlacement) {
        return {
          reset: {
            placement: placements$1[0]
          }
        };
      }
      const currentOverflows = [overflow[floating_ui_utils_getSide(currentPlacement)], overflow[alignmentSides[0]], overflow[alignmentSides[1]]];
      const allOverflows = [...(((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || []), {
        placement: currentPlacement,
        overflows: currentOverflows
      }];
      const nextPlacement = placements$1[currentIndex + 1];

      // There are more placements to check.
      if (nextPlacement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: nextPlacement
          }
        };
      }
      const placementsSortedByMostSpace = allOverflows.map(d => {
        const alignment = floating_ui_utils_getAlignment(d.placement);
        return [d.placement, alignment && crossAxis ?
        // Check along the mainAxis and main crossAxis side.
        d.overflows.slice(0, 2).reduce((acc, v) => acc + v, 0) :
        // Check only the mainAxis.
        d.overflows[0], d.overflows];
      }).sort((a, b) => a[1] - b[1]);
      const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter(d => d[2].slice(0,
      // Aligned placements should not check their opposite crossAxis
      // side.
      floating_ui_utils_getAlignment(d[0]) ? 2 : 3).every(v => v <= 0));
      const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
      if (resetPlacement !== placement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: resetPlacement
          }
        };
      }
      return {};
    }
  };
};

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'flip',
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        fallbackAxisSideDirection = 'none',
        flipAlignment = true,
        ...detectOverflowOptions
      } = floating_ui_utils_evaluate(options, state);

      // If a reset by the arrow was caused due to an alignment offset being
      // added, we should skip any logic now since `flip()` has already done its
      // work.
      // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = floating_ui_utils_getSide(placement);
      const initialSideAxis = floating_ui_utils_getSideAxis(initialPlacement);
      const isBasePlacement = floating_ui_utils_getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== 'none';
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides[0]], overflow[sides[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];

      // One or more sides is overflowing.
      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow = checkCrossAxis === 'alignment' ? initialSideAxis !== floating_ui_utils_getSideAxis(nextPlacement) : false;
          if (!ignoreCrossAxisOverflow ||
          // We leave the current main axis only if every placement on that axis
          // overflows the main axis.
          overflowsData.every(d => d.overflows[0] > 0 && floating_ui_utils_getSideAxis(d.placement) === initialSideAxis)) {
            // Try next placement and re-run the lifecycle.
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
        }

        // First, find the candidates that fit on the mainAxis side of overflow,
        // then find the placement that fits the best on the main crossAxis side.
        let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

        // Otherwise fallback.
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case 'bestFit':
              {
                var _overflowsData$filter2;
                const placement = (_overflowsData$filter2 = overflowsData.filter(d => {
                  if (hasFallbackAxisSideDirection) {
                    const currentSideAxis = floating_ui_utils_getSideAxis(d.placement);
                    return currentSideAxis === initialSideAxis ||
                    // Create a bias to the `y` side axis due to horizontal
                    // reading directions favoring greater width.
                    currentSideAxis === 'y';
                  }
                  return true;
                }).map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                if (placement) {
                  resetPlacement = placement;
                }
                break;
              }
            case 'initialPlacement':
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};

function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some(side => overflow[side] >= 0);
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'hide',
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = 'referenceHidden',
        ...detectOverflowOptions
      } = floating_ui_utils_evaluate(options, state);
      switch (strategy) {
        case 'referenceHidden':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              elementContext: 'reference'
            });
            const offsets = getSideOffsets(overflow, rects.reference);
            return {
              data: {
                referenceHiddenOffsets: offsets,
                referenceHidden: isAnySideFullyClipped(offsets)
              }
            };
          }
        case 'escaped':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              altBoundary: true
            });
            const offsets = getSideOffsets(overflow, rects.floating);
            return {
              data: {
                escapedOffsets: offsets,
                escaped: isAnySideFullyClipped(offsets)
              }
            };
          }
        default:
          {
            return {};
          }
      }
    }
  };
};

function getBoundingRect(rects) {
  const minX = min(...rects.map(rect => rect.left));
  const minY = min(...rects.map(rect => rect.top));
  const maxX = max(...rects.map(rect => rect.right));
  const maxY = max(...rects.map(rect => rect.bottom));
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function getRectsByLine(rects) {
  const sortedRects = rects.slice().sort((a, b) => a.y - b.y);
  const groups = [];
  let prevRect = null;
  for (let i = 0; i < sortedRects.length; i++) {
    const rect = sortedRects[i];
    if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
      groups.push([rect]);
    } else {
      groups[groups.length - 1].push(rect);
    }
    prevRect = rect;
  }
  return groups.map(rect => rectToClientRect(getBoundingRect(rect)));
}
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */
const inline = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'inline',
    options,
    async fn(state) {
      const {
        placement,
        elements,
        rects,
        platform,
        strategy
      } = state;
      // A MouseEvent's client{X,Y} coords can be up to 2 pixels off a
      // ClientRect's bounds, despite the event listener being triggered. A
      // padding of 2 seems to handle this issue.
      const {
        padding = 2,
        x,
        y
      } = evaluate(options, state);
      const nativeClientRects = Array.from((await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference))) || []);
      const clientRects = getRectsByLine(nativeClientRects);
      const fallback = rectToClientRect(getBoundingRect(nativeClientRects));
      const paddingObject = getPaddingObject(padding);
      function getBoundingClientRect() {
        // There are two rects and they are disjoined.
        if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
          // Find the first rect in which the point is fully inside.
          return clientRects.find(rect => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
        }

        // There are 2 or more connected rects.
        if (clientRects.length >= 2) {
          if (getSideAxis(placement) === 'y') {
            const firstRect = clientRects[0];
            const lastRect = clientRects[clientRects.length - 1];
            const isTop = getSide(placement) === 'top';
            const top = firstRect.top;
            const bottom = lastRect.bottom;
            const left = isTop ? firstRect.left : lastRect.left;
            const right = isTop ? firstRect.right : lastRect.right;
            const width = right - left;
            const height = bottom - top;
            return {
              top,
              bottom,
              left,
              right,
              width,
              height,
              x: left,
              y: top
            };
          }
          const isLeftSide = getSide(placement) === 'left';
          const maxRight = max(...clientRects.map(rect => rect.right));
          const minLeft = min(...clientRects.map(rect => rect.left));
          const measureRects = clientRects.filter(rect => isLeftSide ? rect.left === minLeft : rect.right === maxRight);
          const top = measureRects[0].top;
          const bottom = measureRects[measureRects.length - 1].bottom;
          const left = minLeft;
          const right = maxRight;
          const width = right - left;
          const height = bottom - top;
          return {
            top,
            bottom,
            left,
            right,
            width,
            height,
            x: left,
            y: top
          };
        }
        return fallback;
      }
      const resetRects = await platform.getElementRects({
        reference: {
          getBoundingClientRect
        },
        floating: elements.floating,
        strategy
      });
      if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
        return {
          reset: {
            rects: resetRects
          }
        };
      }
      return {};
    }
  };
};

const originSides = /*#__PURE__*/new Set(['left', 'top']);

// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.

async function convertValueToCoords(state, options) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = floating_ui_utils_getSide(placement);
  const alignment = floating_ui_utils_getAlignment(placement);
  const isVertical = floating_ui_utils_getSideAxis(placement) === 'y';
  const mainAxisMulti = originSides.has(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = floating_ui_utils_evaluate(options, state);

  // eslint-disable-next-line prefer-const
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset = function (options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: 'offset',
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);

      // If the placement is the same and the arrow caused an alignment offset
      // then we don't need to change the positioning coordinates.
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'shift',
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x,
              y
            } = _ref;
            return {
              x,
              y
            };
          }
        },
        ...detectOverflowOptions
      } = floating_ui_utils_evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = floating_ui_utils_getSideAxis(floating_ui_utils_getSide(placement));
      const mainAxis = floating_ui_utils_getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === 'y' ? 'top' : 'left';
        const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
        const min = mainAxisCoord + overflow[minSide];
        const max = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min, mainAxisCoord, max);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === 'y' ? 'top' : 'left';
        const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
        const min = crossAxisCoord + overflow[minSide];
        const max = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min, crossAxisCoord, max);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
const limitShift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset, state);
      const computedOffset = typeof rawOffset === 'number' ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === 'y' ? 'height' : 'width';
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === 'y' ? 'width' : 'height';
        const isOriginSide = originSides.has(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'size',
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform,
        elements
      } = state;
      const {
        apply = () => {},
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === 'y';
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === 'top' || side === 'bottom') {
        heightSide = side;
        widthSide = alignment === ((await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))) ? 'start' : 'end') ? 'left' : 'right';
      } else {
        widthSide = side;
        heightSide = alignment === 'end' ? 'top' : 'bottom';
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};



;// ../node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
  return typeof window !== 'undefined';
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || '').toLowerCase();
  }
  // Mocked nodes in testing environments may not be instances of Node. By
  // returning `#document` an infinite loop won't occur.
  // https://github.com/floating-ui/floating-ui/issues/2317
  return '#document';
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === 'undefined') {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
const invalidOverflowDisplayValues = /*#__PURE__*/new Set(['inline', 'contents']);
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = floating_ui_utils_dom_getComputedStyle(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
}
const tableElements = /*#__PURE__*/new Set(['table', 'td', 'th']);
function isTableElement(element) {
  return tableElements.has(getNodeName(element));
}
const topLayerSelectors = [':popover-open', ':modal'];
function isTopLayer(element) {
  return topLayerSelectors.some(selector => {
    try {
      return element.matches(selector);
    } catch (_e) {
      return false;
    }
  });
}
const transformProperties = ['transform', 'translate', 'scale', 'rotate', 'perspective'];
const willChangeValues = ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'];
const containValues = ['paint', 'layout', 'strict', 'content'];
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? floating_ui_utils_dom_getComputedStyle(elementOrCss) : elementOrCss;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  // https://drafts.csswg.org/css-transforms-2/#individual-transforms
  return transformProperties.some(value => css[value] ? css[value] !== 'none' : false) || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || willChangeValues.some(value => (css.willChange || '').includes(value)) || containValues.some(value => (css.contain || '').includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === 'undefined' || !CSS.supports) return false;
  return CSS.supports('-webkit-backdrop-filter', 'none');
}
const lastTraversableNodeNames = /*#__PURE__*/new Set(['html', 'body', '#document']);
function isLastTraversableNode(node) {
  return lastTraversableNodeNames.has(getNodeName(node));
}
function floating_ui_utils_dom_getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  const result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}



;// ../node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs





function getCssDimensions(element) {
  const css = floating_ui_utils_dom_getComputedStyle(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}

function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}

function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}

const noOffsets = /*#__PURE__*/createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}

function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = floating_ui_utils_dom_getComputedStyle(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return floating_ui_utils_rectToClientRect({
    width,
    height,
    x,
    y
  });
}

// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}

function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
  if (ignoreScrollbarX === void 0) {
    ignoreScrollbarX = false;
  }
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 :
  // RTL <body> scrollbar.
  getWindowScrollBarX(documentElement, htmlRect));
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === 'fixed';
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, true) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}

function getClientRects(element) {
  return Array.from(element.getClientRects());
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = floating_ui_utils_max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = floating_ui_utils_max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (floating_ui_utils_dom_getComputedStyle(body).direction === 'rtl') {
    x += floating_ui_utils_max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}

const absoluteOrFixed = /*#__PURE__*/new Set(['absolute', 'fixed']);
// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return floating_ui_utils_rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return floating_ui_utils_dom_getComputedStyle(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter(el => isElement(el) && getNodeName(el) !== 'body');
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = floating_ui_utils_dom_getComputedStyle(element).position === 'fixed';
  let currentNode = elementIsFixed ? getParentNode(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = floating_ui_utils_dom_getComputedStyle(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === 'clippingAncestors' ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = floating_ui_utils_max(rect.top, accRect.top);
    accRect.right = floating_ui_utils_min(rect.right, accRect.right);
    accRect.bottom = floating_ui_utils_min(rect.bottom, accRect.bottom);
    accRect.left = floating_ui_utils_max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === 'fixed';
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);

  // If the <body> scrollbar appears on the left (e.g. RTL systems). Use
  // Firefox with layout.scrollbar.side = 3 in about:config to test this.
  function setLeftRTLScrollbarOffset() {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      setLeftRTLScrollbarOffset();
    }
  }
  if (isFixed && !isOffsetParentAnElement && documentElement) {
    setLeftRTLScrollbarOffset();
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}

function isStaticPositioned(element) {
  return floating_ui_utils_dom_getComputedStyle(element).position === 'static';
}

function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || floating_ui_utils_dom_getComputedStyle(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;

  // Firefox returns the <html> element as the offsetParent if it's non-static,
  // while Chrome and Safari return the <body> element. The <body> element must
  // be used to perform the correct calculations even if the <html> element is
  // non-static.
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}

const getElementRects = async function (data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};

function isRTL(element) {
  return floating_ui_utils_dom_getComputedStyle(element).direction === 'rtl';
}

const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement: getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement: isElement,
  isRTL
};

function rectsAreEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}

// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: floating_ui_utils_max(0, floating_ui_utils_min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          // If the reference is clipped, the ratio is 0. Throttle the refresh
          // to prevent an infinite loop of updates.
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1000);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        // It's possible that even though the ratio is reported as 1, the
        // element is not actually fully within the IntersectionObserver's root
        // area anymore. This can happen under performance constraints. This may
        // be a bug in the browser's IntersectionObserver implementation. To
        // work around this, we compare the element's bounding rect now with
        // what it was at the time we created the IntersectionObserver. If they
        // are not equal then the element moved, so we refresh.
        refresh();
      }
      isFirstUpdate = false;
    }

    // Older browsers don't support a `document` as the root and will throw an
    // error.
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (_e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}

/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === 'function',
    layoutShift = typeof IntersectionObserver === 'function',
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? getOverflowAncestors(referenceEl) : []), ...getOverflowAncestors(floating)] : [];
  ancestors.forEach(ancestor => {
    ancestorScroll && ancestor.addEventListener('scroll', update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver(_ref => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        // Prevent update loops when using the `size` middleware.
        // https://github.com/floating-ui/floating-ui/issues/1740
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
const floating_ui_dom_detectOverflow = (/* unused pure expression or super */ null && (detectOverflow$1));

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const floating_ui_dom_offset = offset;

/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
const floating_ui_dom_autoPlacement = autoPlacement;

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const floating_ui_dom_shift = shift;

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const floating_ui_dom_flip = flip;

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const floating_ui_dom_size = (/* unused pure expression or super */ null && (size$1));

/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const floating_ui_dom_hide = hide;

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const floating_ui_dom_arrow = arrow;

/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */
const floating_ui_dom_inline = (/* unused pure expression or super */ null && (inline$1));

/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
const floating_ui_dom_limitShift = (/* unused pure expression or super */ null && (limitShift$1));

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 */
const floating_ui_dom_computePosition = (reference, floating, options) => {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  const cache = new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};



// EXTERNAL MODULE: ../node_modules/lodash-es/debounce.js + 4 modules
var debounce = __webpack_require__(54559);
;// ../node_modules/composed-offset-position/dist/composed-offset-position.mjs


function offsetParent(element) {
    return offsetParentPolyfill(element);
}
function offsetTop(element) {
    return offsetTopLeftPolyfill(element, 'offsetTop');
}
function offsetLeft(element) {
    return offsetTopLeftPolyfill(element, 'offsetLeft');
}
function flatTreeParent(element) {
    if (element.assignedSlot) {
        return element.assignedSlot;
    }
    if (element.parentNode instanceof ShadowRoot) {
        return element.parentNode.host;
    }
    return element.parentNode;
}
function ancestorTreeScopes(element) {
    const scopes = new Set();
    let currentScope = element.getRootNode();
    while (currentScope) {
        scopes.add(currentScope);
        currentScope = currentScope.parentNode
            ? currentScope.parentNode.getRootNode()
            : null;
    }
    return scopes;
}
function offsetParentPolyfill(element) {
    // Do an initial walk to check for display:none ancestors.
    for (let ancestor = element; ancestor; ancestor = flatTreeParent(ancestor)) {
        if (!(ancestor instanceof Element)) {
            continue;
        }
        if (getComputedStyle(ancestor).display === 'none') {
            return null;
        }
    }
    for (let ancestor = flatTreeParent(element); ancestor; ancestor = flatTreeParent(ancestor)) {
        if (!(ancestor instanceof Element)) {
            continue;
        }
        const style = getComputedStyle(ancestor);
        // Display:contents nodes aren't in the layout tree, so they should be skipped.
        if (style.display === 'contents') {
            continue;
        }
        if (style.position !== 'static' || isContainingBlock(style)) {
            return ancestor;
        }
        if (ancestor.tagName === 'BODY') {
            return ancestor;
        }
    }
    return null;
}
function offsetTopLeftPolyfill(element, offsetTopOrLeft) {
    let value = element[offsetTopOrLeft];
    let nextOffsetParent = offsetParentPolyfill(element);
    const scopes = ancestorTreeScopes(element);
    while (nextOffsetParent && !scopes.has(nextOffsetParent.getRootNode())) {
        value -= nextOffsetParent[offsetTopOrLeft];
        nextOffsetParent = offsetParentPolyfill(nextOffsetParent);
    }
    return value;
}



// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/runtime.js
var runtime = __webpack_require__(14558);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/dom.js
var dom = __webpack_require__(25450);
;// ../node_modules/@esri/calcite-components/dist/chunks/floating-ui.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */






(function setUpFloatingUiForShadowDomPositioning() {
  if (!lit/* isServer */.S$) {
    const originalGetOffsetParent = platform.getOffsetParent;
    platform.getOffsetParent = (element) => originalGetOffsetParent(element, offsetParent);
  }
})();
function roundByDPR(value) {
  const dpr = window.devicePixelRatio || 1;
  return Math.round(value * dpr) / dpr;
}
const positionFloatingUI = (
  /* we export arrow function to allow us to spy on it during testing */
  async (component, {
    referenceEl,
    floatingEl,
    overlayPositioning = "absolute",
    placement,
    flipDisabled,
    flipPlacements: flipPlacements2,
    offsetDistance,
    offsetSkidding,
    arrowEl,
    type
  }) => {
    if (!referenceEl || !floatingEl) {
      return;
    }
    const isRTL = (0,dom.g)(floatingEl) === "rtl";
    const {
      x,
      y,
      placement: effectivePlacement,
      strategy: position,
      middlewareData
    } = await floating_ui_dom_computePosition(referenceEl, floatingEl, {
      strategy: overlayPositioning,
      placement: placement === "auto" || placement === "auto-start" || placement === "auto-end" ? void 0 : getEffectivePlacement(placement, isRTL),
      middleware: getMiddleware({
        placement,
        flipDisabled,
        flipPlacements: flipPlacements2?.map((placement2) => getEffectivePlacement(placement2, isRTL)),
        offsetDistance,
        offsetSkidding,
        arrowEl,
        type
      })
    });
    if (arrowEl && middlewareData.arrow) {
      const { x: x2, y: y2 } = middlewareData.arrow;
      const side = effectivePlacement.split("-")[0];
      const alignment = x2 != null ? "left" : "top";
      const transform = ARROW_CSS_TRANSFORM[side];
      const reset = { left: "", top: "", bottom: "", right: "" };
      if ("floatingLayout" in component) {
        component.floatingLayout = side === "left" || side === "right" ? "horizontal" : "vertical";
      }
      Object.assign(arrowEl.style, {
        ...reset,
        [alignment]: `${alignment == "left" ? x2 : y2}px`,
        [side]: "100%",
        transform
      });
    }
    const referenceHidden = middlewareData.hide?.referenceHidden;
    const visibility = referenceHidden ? "hidden" : null;
    const pointerEvents = visibility ? "none" : null;
    floatingEl.setAttribute(placementDataAttribute, effectivePlacement);
    Object.assign(floatingEl.style, {
      pointerEvents,
      position,
      transform: `translate(${roundByDPR(x)}px,${roundByDPR(y)}px)`,
      visibility
    });
  }
);
const placementDataAttribute = "data-placement";
const flipPlacements = [
  "top",
  "bottom",
  "right",
  "left",
  "top-start",
  "top-end",
  "bottom-start",
  "bottom-end",
  "right-start",
  "right-end",
  "left-start",
  "left-end",
  "leading",
  "trailing",
  "leading-start",
  "leading-end",
  "trailing-start",
  "trailing-end"
];
const defaultMenuPlacement = "bottom-start";
const defaultEndMenuPlacement = "bottom-end";
const FloatingCSS = {
  animation: "calcite-floating-ui-anim",
  animationActive: "calcite-floating-ui-anim--active"
};
function getMiddleware({
  placement,
  flipDisabled,
  flipPlacements: flipPlacements2,
  offsetDistance,
  offsetSkidding,
  arrowEl,
  type
}) {
  const middleware = [floating_ui_dom_shift(), floating_ui_dom_hide()];
  if (type === "menu") {
    middleware.push(
      floating_ui_dom_flip({
        fallbackPlacements: flipPlacements2 || ["top-start", "top", "top-end", "bottom-start", "bottom", "bottom-end"]
      })
    );
  }
  middleware.push(
    floating_ui_dom_offset({
      mainAxis: typeof offsetDistance === "number" ? offsetDistance : 0,
      crossAxis: typeof offsetSkidding === "number" ? offsetSkidding : 0
    })
  );
  if (placement === "auto" || placement === "auto-start" || placement === "auto-end") {
    middleware.push(
      floating_ui_dom_autoPlacement({ alignment: placement === "auto-start" ? "start" : placement === "auto-end" ? "end" : null })
    );
  } else if (!flipDisabled) {
    middleware.push(floating_ui_dom_flip(flipPlacements2 ? { fallbackPlacements: flipPlacements2 } : {}));
  }
  if (arrowEl) {
    middleware.push(
      floating_ui_dom_arrow({
        element: arrowEl
      })
    );
  }
  return middleware;
}
function filterValidFlipPlacements(placements2, el) {
  const filteredPlacements = placements2.filter(
    (placement) => flipPlacements.includes(placement)
  );
  if (filteredPlacements.length !== placements2.length) {
    console.warn(
      `${el.tagName}: Invalid value found in: flipPlacements. Try any of these: ${flipPlacements.map((placement) => `"${placement}"`).join(", ").trim()}`,
      { el }
    );
  }
  return filteredPlacements;
}
function getEffectivePlacement(placement, isRTL = false) {
  const placements2 = ["left", "right"];
  if (isRTL) {
    placements2.reverse();
  }
  return placement.replace(/leading/gi, placements2[0]).replace(/trailing/gi, placements2[1]);
}
async function reposition(component, options, delayed = false) {
  if (!component.open || !options.floatingEl || !options.referenceEl) {
    return;
  }
  Object.assign(options.floatingEl.style, {
    display: "block",
    // initial positioning based on https://floating-ui.com/docs/computePosition#initial-layout
    position: options.overlayPositioning ?? "absolute"
  });
  const trackedState = autoUpdatingComponentMap.get(component);
  if (!trackedState) {
    return runAutoUpdate(component);
  }
  const positionFunction = delayed ? getDebouncedReposition(component) : positionFloatingUI;
  await positionFunction(component, options);
}
function getDebouncedReposition(component) {
  let debounced = componentToDebouncedRepositionMap.get(component);
  if (debounced) {
    return debounced;
  }
  debounced = (0,debounce/* default */.A)(positionFloatingUI, runtime.D.reposition, {
    leading: true,
    maxWait: runtime.D.reposition
  });
  componentToDebouncedRepositionMap.set(component, debounced);
  return debounced;
}
const ARROW_CSS_TRANSFORM = {
  top: "",
  left: "rotate(-90deg)",
  bottom: "rotate(180deg)",
  right: "rotate(90deg)"
};
const autoUpdatingComponentMap = /* @__PURE__ */ new WeakMap();
const componentToDebouncedRepositionMap = /* @__PURE__ */ new WeakMap();
async function runAutoUpdate(component) {
  const { referenceEl, floatingEl } = component;
  if (!floatingEl.isConnected) {
    return;
  }
  const effectiveAutoUpdate = !lit/* isServer */.S$ ? autoUpdate : (_refEl, _floatingEl, updateCallback) => {
    updateCallback();
    return () => {
    };
  };
  autoUpdatingComponentMap.set(component, { state: "pending" });
  let repositionPromise;
  const cleanUp = effectiveAutoUpdate(
    referenceEl,
    floatingEl,
    // callback is invoked immediately
    () => {
      const promise = component.reposition();
      if (!repositionPromise) {
        repositionPromise = promise;
      }
    }
  );
  autoUpdatingComponentMap.set(component, { state: "active", cleanUp });
  return repositionPromise;
}
function hideFloatingUI(component) {
  const { floatingEl } = component;
  if (!floatingEl) {
    return;
  }
  Object.assign(floatingEl.style, {
    display: "",
    pointerEvents: "",
    position: "",
    transform: "",
    visibility: ""
  });
}
async function connectFloatingUI(component) {
  const { floatingEl, referenceEl } = component;
  hideFloatingUI(component);
  if (!floatingEl || !referenceEl) {
    return;
  }
  disconnectFloatingUI(component);
  if (!component.open) {
    return;
  }
  return runAutoUpdate(component);
}
function disconnectFloatingUI(component) {
  const trackedState = autoUpdatingComponentMap.get(component);
  if (trackedState?.state === "active") {
    trackedState.cleanUp();
  }
  autoUpdatingComponentMap.delete(component);
  componentToDebouncedRepositionMap.get(component)?.cancel();
  componentToDebouncedRepositionMap.delete(component);
}
const visiblePointerSize = 4;
const defaultOffsetDistance = Math.ceil(Math.hypot(visiblePointerSize, visiblePointerSize));



/***/ }),

/***/ 7025:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ guid)
/* harmony export */ });
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */
function gen(counts) {
  return counts.map((count) => {
    let out = "";
    for (let i = 0; i < count; i++) {
      out += ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
    }
    return out;
  }).join("-");
}
const guid = () => gen([2, 1, 1, 1, 3]);



/***/ }),

/***/ 54148:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ interact)
/* harmony export */ });
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var interact_min$1 = { exports: {} };
var interact_min = interact_min$1.exports;
var hasRequiredInteract_min;
function requireInteract_min() {
  if (hasRequiredInteract_min) return interact_min$1.exports;
  hasRequiredInteract_min = 1;
  (function(module, exports) {
    !function(t, e) {
      module.exports = e();
    }(interact_min, function() {
      function t(t2, e2) {
        var n2 = Object.keys(t2);
        if (Object.getOwnPropertySymbols) {
          var r2 = Object.getOwnPropertySymbols(t2);
          e2 && (r2 = r2.filter(function(e3) {
            return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
          })), n2.push.apply(n2, r2);
        }
        return n2;
      }
      function e(e2) {
        for (var n2 = 1; n2 < arguments.length; n2++) {
          var r2 = null != arguments[n2] ? arguments[n2] : {};
          n2 % 2 ? t(Object(r2), true).forEach(function(t2) {
            a(e2, t2, r2[t2]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r2)) : t(Object(r2)).forEach(function(t2) {
            Object.defineProperty(e2, t2, Object.getOwnPropertyDescriptor(r2, t2));
          });
        }
        return e2;
      }
      function n(t2) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
          return typeof t3;
        } : function(t3) {
          return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
        }, n(t2);
      }
      function r(t2, e2) {
        if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
      }
      function i(t2, e2) {
        for (var n2 = 0; n2 < e2.length; n2++) {
          var r2 = e2[n2];
          r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, d(r2.key), r2);
        }
      }
      function o(t2, e2, n2) {
        return e2 && i(t2.prototype, e2), Object.defineProperty(t2, "prototype", { writable: false }), t2;
      }
      function a(t2, e2, n2) {
        return (e2 = d(e2)) in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
      }
      function s(t2, e2) {
        if ("function" != typeof e2 && null !== e2) throw new TypeError("Super expression must either be null or a function");
        t2.prototype = Object.create(e2 && e2.prototype, { constructor: { value: t2, writable: true, configurable: true } }), Object.defineProperty(t2, "prototype", { writable: false }), e2 && l(t2, e2);
      }
      function c(t2) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
          return t3.__proto__ || Object.getPrototypeOf(t3);
        }, c(t2);
      }
      function l(t2, e2) {
        return l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
          return t3.__proto__ = e3, t3;
        }, l(t2, e2);
      }
      function u(t2) {
        if (void 0 === t2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t2;
      }
      function p(t2) {
        var e2 = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return false;
          if (Reflect.construct.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (t3) {
            return false;
          }
        }();
        return function() {
          var n2, r2 = c(t2);
          if (e2) {
            var i2 = c(this).constructor;
            n2 = Reflect.construct(r2, arguments, i2);
          } else n2 = r2.apply(this, arguments);
          return function(t3, e3) {
            if (e3 && ("object" == typeof e3 || "function" == typeof e3)) return e3;
            if (void 0 !== e3) throw new TypeError("Derived constructors may only return object or undefined");
            return u(t3);
          }(this, n2);
        };
      }
      function f() {
        return f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t2, e2, n2) {
          var r2 = function(t3, e3) {
            for (; !Object.prototype.hasOwnProperty.call(t3, e3) && null !== (t3 = c(t3)); ) ;
            return t3;
          }(t2, e2);
          if (r2) {
            var i2 = Object.getOwnPropertyDescriptor(r2, e2);
            return i2.get ? i2.get.call(arguments.length < 3 ? t2 : n2) : i2.value;
          }
        }, f.apply(this, arguments);
      }
      function d(t2) {
        var e2 = function(t3, e3) {
          if ("object" != typeof t3 || null === t3) return t3;
          var n2 = t3[Symbol.toPrimitive];
          if (void 0 !== n2) {
            var r2 = n2.call(t3, e3);
            if ("object" != typeof r2) return r2;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t3);
        }(t2, "string");
        return "symbol" == typeof e2 ? e2 : e2 + "";
      }
      var h = function(t2) {
        return !(!t2 || !t2.Window) && t2 instanceof t2.Window;
      }, v = void 0, g = void 0;
      function m(t2) {
        v = t2;
        var e2 = t2.document.createTextNode("");
        e2.ownerDocument !== t2.document && "function" == typeof t2.wrap && t2.wrap(e2) === e2 && (t2 = t2.wrap(t2)), g = t2;
      }
      function y(t2) {
        return h(t2) ? t2 : (t2.ownerDocument || t2).defaultView || g.window;
      }
      "undefined" != typeof window && window && m(window);
      var b = function(t2) {
        return !!t2 && "object" === n(t2);
      }, x = function(t2) {
        return "function" == typeof t2;
      }, w = { window: function(t2) {
        return t2 === g || h(t2);
      }, docFrag: function(t2) {
        return b(t2) && 11 === t2.nodeType;
      }, object: b, func: x, number: function(t2) {
        return "number" == typeof t2;
      }, bool: function(t2) {
        return "boolean" == typeof t2;
      }, string: function(t2) {
        return "string" == typeof t2;
      }, element: function(t2) {
        if (!t2 || "object" !== n(t2)) return false;
        var e2 = y(t2) || g;
        return /object|function/.test("undefined" == typeof Element ? "undefined" : n(Element)) ? t2 instanceof Element || t2 instanceof e2.Element : 1 === t2.nodeType && "string" == typeof t2.nodeName;
      }, plainObject: function(t2) {
        return b(t2) && !!t2.constructor && /function Object\b/.test(t2.constructor.toString());
      }, array: function(t2) {
        return b(t2) && void 0 !== t2.length && x(t2.splice);
      } };
      function E(t2) {
        var e2 = t2.interaction;
        if ("drag" === e2.prepared.name) {
          var n2 = e2.prepared.axis;
          "x" === n2 ? (e2.coords.cur.page.y = e2.coords.start.page.y, e2.coords.cur.client.y = e2.coords.start.client.y, e2.coords.velocity.client.y = 0, e2.coords.velocity.page.y = 0) : "y" === n2 && (e2.coords.cur.page.x = e2.coords.start.page.x, e2.coords.cur.client.x = e2.coords.start.client.x, e2.coords.velocity.client.x = 0, e2.coords.velocity.page.x = 0);
        }
      }
      function T(t2) {
        var e2 = t2.iEvent, n2 = t2.interaction;
        if ("drag" === n2.prepared.name) {
          var r2 = n2.prepared.axis;
          if ("x" === r2 || "y" === r2) {
            var i2 = "x" === r2 ? "y" : "x";
            e2.page[i2] = n2.coords.start.page[i2], e2.client[i2] = n2.coords.start.client[i2], e2.delta[i2] = 0;
          }
        }
      }
      var S = { id: "actions/drag", install: function(t2) {
        var e2 = t2.actions, n2 = t2.Interactable, r2 = t2.defaults;
        n2.prototype.draggable = S.draggable, e2.map.drag = S, e2.methodDict.drag = "draggable", r2.actions.drag = S.defaults;
      }, listeners: { "interactions:before-action-move": E, "interactions:action-resume": E, "interactions:action-move": T, "auto-start:check": function(t2) {
        var e2 = t2.interaction, n2 = t2.interactable, r2 = t2.buttons, i2 = n2.options.drag;
        if (i2 && i2.enabled && (!e2.pointerIsDown || !/mouse|pointer/.test(e2.pointerType) || 0 != (r2 & n2.options.drag.mouseButtons))) return t2.action = { name: "drag", axis: "start" === i2.lockAxis ? i2.startAxis : i2.lockAxis }, false;
      } }, draggable: function(t2) {
        return w.object(t2) ? (this.options.drag.enabled = false !== t2.enabled, this.setPerAction("drag", t2), this.setOnEvents("drag", t2), /^(xy|x|y|start)$/.test(t2.lockAxis) && (this.options.drag.lockAxis = t2.lockAxis), /^(xy|x|y)$/.test(t2.startAxis) && (this.options.drag.startAxis = t2.startAxis), this) : w.bool(t2) ? (this.options.drag.enabled = t2, this) : this.options.drag;
      }, beforeMove: E, move: T, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
        return "move";
      }, filterEventType: function(t2) {
        return 0 === t2.search("drag");
      } }, _ = S, P = { init: function(t2) {
        var e2 = t2;
        P.document = e2.document, P.DocumentFragment = e2.DocumentFragment || O, P.SVGElement = e2.SVGElement || O, P.SVGSVGElement = e2.SVGSVGElement || O, P.SVGElementInstance = e2.SVGElementInstance || O, P.Element = e2.Element || O, P.HTMLElement = e2.HTMLElement || P.Element, P.Event = e2.Event, P.Touch = e2.Touch || O, P.PointerEvent = e2.PointerEvent || e2.MSPointerEvent;
      }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
      function O() {
      }
      var k = P;
      var D = { init: function(t2) {
        var e2 = k.Element, n2 = t2.navigator || {};
        D.supportsTouch = "ontouchstart" in t2 || w.func(t2.DocumentTouch) && k.document instanceof t2.DocumentTouch, D.supportsPointerEvent = false !== n2.pointerEnabled && !!k.PointerEvent, D.isIOS = /iP(hone|od|ad)/.test(n2.platform), D.isIOS7 = /iP(hone|od|ad)/.test(n2.platform) && /OS 7[^\d]/.test(n2.appVersion), D.isIe9 = /MSIE 9/.test(n2.userAgent), D.isOperaMobile = "Opera" === n2.appName && D.supportsTouch && /Presto/.test(n2.userAgent), D.prefixedMatchesSelector = "matches" in e2.prototype ? "matches" : "webkitMatchesSelector" in e2.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in e2.prototype ? "mozMatchesSelector" : "oMatchesSelector" in e2.prototype ? "oMatchesSelector" : "msMatchesSelector", D.pEventTypes = D.supportsPointerEvent ? k.PointerEvent === t2.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, D.wheelEvent = k.document && "onmousewheel" in k.document ? "mousewheel" : "wheel";
      }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null };
      var I = D;
      function M(t2, e2) {
        if (t2.contains) return t2.contains(e2);
        for (; e2; ) {
          if (e2 === t2) return true;
          e2 = e2.parentNode;
        }
        return false;
      }
      function z(t2, e2) {
        for (; w.element(t2); ) {
          if (R(t2, e2)) return t2;
          t2 = A(t2);
        }
        return null;
      }
      function A(t2) {
        var e2 = t2.parentNode;
        if (w.docFrag(e2)) {
          for (; (e2 = e2.host) && w.docFrag(e2); ) ;
          return e2;
        }
        return e2;
      }
      function R(t2, e2) {
        return g !== v && (e2 = e2.replace(/\/deep\//g, " ")), t2[I.prefixedMatchesSelector](e2);
      }
      var C = function(t2) {
        return t2.parentNode || t2.host;
      };
      function j(t2, e2) {
        for (var n2, r2 = [], i2 = t2; (n2 = C(i2)) && i2 !== e2 && n2 !== i2.ownerDocument; ) r2.unshift(i2), i2 = n2;
        return r2;
      }
      function F(t2, e2, n2) {
        for (; w.element(t2); ) {
          if (R(t2, e2)) return true;
          if ((t2 = A(t2)) === n2) return R(t2, e2);
        }
        return false;
      }
      function X(t2) {
        return t2.correspondingUseElement || t2;
      }
      function Y(t2) {
        var e2 = t2 instanceof k.SVGElement ? t2.getBoundingClientRect() : t2.getClientRects()[0];
        return e2 && { left: e2.left, right: e2.right, top: e2.top, bottom: e2.bottom, width: e2.width || e2.right - e2.left, height: e2.height || e2.bottom - e2.top };
      }
      function L(t2) {
        var e2, n2 = Y(t2);
        if (!I.isIOS7 && n2) {
          var r2 = { x: (e2 = (e2 = y(t2)) || g).scrollX || e2.document.documentElement.scrollLeft, y: e2.scrollY || e2.document.documentElement.scrollTop };
          n2.left += r2.x, n2.right += r2.x, n2.top += r2.y, n2.bottom += r2.y;
        }
        return n2;
      }
      function q(t2) {
        for (var e2 = []; t2; ) e2.push(t2), t2 = A(t2);
        return e2;
      }
      function B(t2) {
        return !!w.string(t2) && (k.document.querySelector(t2), true);
      }
      function V(t2, e2) {
        for (var n2 in e2) t2[n2] = e2[n2];
        return t2;
      }
      function W(t2, e2, n2) {
        return "parent" === t2 ? A(n2) : "self" === t2 ? e2.getRect(n2) : z(n2, t2);
      }
      function G(t2, e2, n2, r2) {
        var i2 = t2;
        return w.string(i2) ? i2 = W(i2, e2, n2) : w.func(i2) && (i2 = i2.apply(void 0, r2)), w.element(i2) && (i2 = L(i2)), i2;
      }
      function N(t2) {
        return t2 && { x: "x" in t2 ? t2.x : t2.left, y: "y" in t2 ? t2.y : t2.top };
      }
      function U(t2) {
        return !t2 || "x" in t2 && "y" in t2 || ((t2 = V({}, t2)).x = t2.left || 0, t2.y = t2.top || 0, t2.width = t2.width || (t2.right || 0) - t2.x, t2.height = t2.height || (t2.bottom || 0) - t2.y), t2;
      }
      function H(t2, e2, n2) {
        t2.left && (e2.left += n2.x), t2.right && (e2.right += n2.x), t2.top && (e2.top += n2.y), t2.bottom && (e2.bottom += n2.y), e2.width = e2.right - e2.left, e2.height = e2.bottom - e2.top;
      }
      function K(t2, e2, n2) {
        var r2 = n2 && t2.options[n2];
        return N(G(r2 && r2.origin || t2.options.origin, t2, e2, [t2 && e2])) || { x: 0, y: 0 };
      }
      function $(t2, e2) {
        var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function(t3) {
          return true;
        }, r2 = arguments.length > 3 ? arguments[3] : void 0;
        if (r2 = r2 || {}, w.string(t2) && -1 !== t2.search(" ") && (t2 = J(t2)), w.array(t2)) return t2.forEach(function(t3) {
          return $(t3, e2, n2, r2);
        }), r2;
        if (w.object(t2) && (e2 = t2, t2 = ""), w.func(e2) && n2(t2)) r2[t2] = r2[t2] || [], r2[t2].push(e2);
        else if (w.array(e2)) for (var i2 = 0, o2 = e2; i2 < o2.length; i2++) {
          var a2 = o2[i2];
          $(t2, a2, n2, r2);
        }
        else if (w.object(e2)) for (var s2 in e2) {
          $(J(s2).map(function(e3) {
            return "".concat(t2).concat(e3);
          }), e2[s2], n2, r2);
        }
        return r2;
      }
      function J(t2) {
        return t2.trim().split(/ +/);
      }
      var Q = function(t2, e2) {
        return Math.sqrt(t2 * t2 + e2 * e2);
      }, Z = ["webkit", "moz"];
      function tt(t2, e2) {
        t2.__set || (t2.__set = {});
        var n2 = function(n3) {
          if (Z.some(function(t3) {
            return 0 === n3.indexOf(t3);
          })) return 1;
          "function" != typeof t2[n3] && "__set" !== n3 && Object.defineProperty(t2, n3, { get: function() {
            return n3 in t2.__set ? t2.__set[n3] : t2.__set[n3] = e2[n3];
          }, set: function(e3) {
            t2.__set[n3] = e3;
          }, configurable: true });
        };
        for (var r2 in e2) n2(r2);
        return t2;
      }
      function et(t2, e2) {
        t2.page = t2.page || {}, t2.page.x = e2.page.x, t2.page.y = e2.page.y, t2.client = t2.client || {}, t2.client.x = e2.client.x, t2.client.y = e2.client.y, t2.timeStamp = e2.timeStamp;
      }
      function nt(t2) {
        t2.page.x = 0, t2.page.y = 0, t2.client.x = 0, t2.client.y = 0;
      }
      function rt(t2) {
        return t2 instanceof k.Event || t2 instanceof k.Touch;
      }
      function it(t2, e2, n2) {
        return t2 = t2 || "page", (n2 = n2 || {}).x = e2[t2 + "X"], n2.y = e2[t2 + "Y"], n2;
      }
      function ot(t2, e2) {
        return e2 = e2 || { x: 0, y: 0 }, I.isOperaMobile && rt(t2) ? (it("screen", t2, e2), e2.x += window.scrollX, e2.y += window.scrollY) : it("page", t2, e2), e2;
      }
      function at(t2) {
        return w.number(t2.pointerId) ? t2.pointerId : t2.identifier;
      }
      function st(t2, e2, n2) {
        var r2 = e2.length > 1 ? lt(e2) : e2[0];
        ot(r2, t2.page), function(t3, e3) {
          e3 = e3 || {}, I.isOperaMobile && rt(t3) ? it("screen", t3, e3) : it("client", t3, e3);
        }(r2, t2.client), t2.timeStamp = n2;
      }
      function ct(t2) {
        var e2 = [];
        return w.array(t2) ? (e2[0] = t2[0], e2[1] = t2[1]) : "touchend" === t2.type ? 1 === t2.touches.length ? (e2[0] = t2.touches[0], e2[1] = t2.changedTouches[0]) : 0 === t2.touches.length && (e2[0] = t2.changedTouches[0], e2[1] = t2.changedTouches[1]) : (e2[0] = t2.touches[0], e2[1] = t2.touches[1]), e2;
      }
      function lt(t2) {
        for (var e2 = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, n2 = 0; n2 < t2.length; n2++) {
          var r2 = t2[n2];
          for (var i2 in e2) e2[i2] += r2[i2];
        }
        for (var o2 in e2) e2[o2] /= t2.length;
        return e2;
      }
      function ut(t2) {
        if (!t2.length) return null;
        var e2 = ct(t2), n2 = Math.min(e2[0].pageX, e2[1].pageX), r2 = Math.min(e2[0].pageY, e2[1].pageY), i2 = Math.max(e2[0].pageX, e2[1].pageX), o2 = Math.max(e2[0].pageY, e2[1].pageY);
        return { x: n2, y: r2, left: n2, top: r2, right: i2, bottom: o2, width: i2 - n2, height: o2 - r2 };
      }
      function pt(t2, e2) {
        var n2 = e2 + "X", r2 = e2 + "Y", i2 = ct(t2), o2 = i2[0][n2] - i2[1][n2], a2 = i2[0][r2] - i2[1][r2];
        return Q(o2, a2);
      }
      function ft(t2, e2) {
        var n2 = e2 + "X", r2 = e2 + "Y", i2 = ct(t2), o2 = i2[1][n2] - i2[0][n2], a2 = i2[1][r2] - i2[0][r2];
        return 180 * Math.atan2(a2, o2) / Math.PI;
      }
      function dt(t2) {
        return w.string(t2.pointerType) ? t2.pointerType : w.number(t2.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][t2.pointerType] : /touch/.test(t2.type || "") || t2 instanceof k.Touch ? "touch" : "mouse";
      }
      function ht(t2) {
        var e2 = w.func(t2.composedPath) ? t2.composedPath() : t2.path;
        return [X(e2 ? e2[0] : t2.target), X(t2.currentTarget)];
      }
      var vt = function() {
        function t2(e2) {
          r(this, t2), this.immediatePropagationStopped = false, this.propagationStopped = false, this._interaction = e2;
        }
        return o(t2, [{ key: "preventDefault", value: function() {
        } }, { key: "stopPropagation", value: function() {
          this.propagationStopped = true;
        } }, { key: "stopImmediatePropagation", value: function() {
          this.immediatePropagationStopped = this.propagationStopped = true;
        } }]), t2;
      }();
      Object.defineProperty(vt.prototype, "interaction", { get: function() {
        return this._interaction._proxy;
      }, set: function() {
      } });
      var gt = function(t2, e2) {
        for (var n2 = 0; n2 < e2.length; n2++) {
          var r2 = e2[n2];
          t2.push(r2);
        }
        return t2;
      }, mt = function(t2) {
        return gt([], t2);
      }, yt = function(t2, e2) {
        for (var n2 = 0; n2 < t2.length; n2++) if (e2(t2[n2], n2, t2)) return n2;
        return -1;
      }, bt = function(t2, e2) {
        return t2[yt(t2, e2)];
      }, xt = function(t2) {
        s(n2, t2);
        var e2 = p(n2);
        function n2(t3, i2, o2) {
          var a2;
          r(this, n2), (a2 = e2.call(this, i2._interaction)).dropzone = void 0, a2.dragEvent = void 0, a2.relatedTarget = void 0, a2.draggable = void 0, a2.propagationStopped = false, a2.immediatePropagationStopped = false;
          var s2 = "dragleave" === o2 ? t3.prev : t3.cur, c2 = s2.element, l2 = s2.dropzone;
          return a2.type = o2, a2.target = c2, a2.currentTarget = c2, a2.dropzone = l2, a2.dragEvent = i2, a2.relatedTarget = i2.target, a2.draggable = i2.interactable, a2.timeStamp = i2.timeStamp, a2;
        }
        return o(n2, [{ key: "reject", value: function() {
          var t3 = this, e3 = this._interaction.dropState;
          if ("dropactivate" === this.type || this.dropzone && e3.cur.dropzone === this.dropzone && e3.cur.element === this.target) if (e3.prev.dropzone = this.dropzone, e3.prev.element = this.target, e3.rejected = true, e3.events.enter = null, this.stopImmediatePropagation(), "dropactivate" === this.type) {
            var r2 = e3.activeDrops, i2 = yt(r2, function(e4) {
              var n3 = e4.dropzone, r3 = e4.element;
              return n3 === t3.dropzone && r3 === t3.target;
            });
            e3.activeDrops.splice(i2, 1);
            var o2 = new n2(e3, this.dragEvent, "dropdeactivate");
            o2.dropzone = this.dropzone, o2.target = this.target, this.dropzone.fire(o2);
          } else this.dropzone.fire(new n2(e3, this.dragEvent, "dragleave"));
        } }, { key: "preventDefault", value: function() {
        } }, { key: "stopPropagation", value: function() {
          this.propagationStopped = true;
        } }, { key: "stopImmediatePropagation", value: function() {
          this.immediatePropagationStopped = this.propagationStopped = true;
        } }]), n2;
      }(vt);
      function wt(t2, e2) {
        for (var n2 = 0, r2 = t2.slice(); n2 < r2.length; n2++) {
          var i2 = r2[n2], o2 = i2.dropzone, a2 = i2.element;
          e2.dropzone = o2, e2.target = a2, o2.fire(e2), e2.propagationStopped = e2.immediatePropagationStopped = false;
        }
      }
      function Et(t2, e2) {
        for (var n2 = function(t3, e3) {
          for (var n3 = [], r3 = 0, i3 = t3.interactables.list; r3 < i3.length; r3++) {
            var o2 = i3[r3];
            if (o2.options.drop.enabled) {
              var a2 = o2.options.drop.accept;
              if (!(w.element(a2) && a2 !== e3 || w.string(a2) && !R(e3, a2) || w.func(a2) && !a2({ dropzone: o2, draggableElement: e3 }))) for (var s2 = 0, c2 = o2.getAllElements(); s2 < c2.length; s2++) {
                var l2 = c2[s2];
                l2 !== e3 && n3.push({ dropzone: o2, element: l2, rect: o2.getRect(l2) });
              }
            }
          }
          return n3;
        }(t2, e2), r2 = 0; r2 < n2.length; r2++) {
          var i2 = n2[r2];
          i2.rect = i2.dropzone.getRect(i2.element);
        }
        return n2;
      }
      function Tt(t2, e2, n2) {
        for (var r2 = t2.dropState, i2 = t2.interactable, o2 = t2.element, a2 = [], s2 = 0, c2 = r2.activeDrops; s2 < c2.length; s2++) {
          var l2 = c2[s2], u2 = l2.dropzone, p2 = l2.element, f2 = l2.rect, d2 = u2.dropCheck(e2, n2, i2, o2, p2, f2);
          a2.push(d2 ? p2 : null);
        }
        var h2 = function(t3) {
          for (var e3, n3, r3, i3 = [], o3 = 0; o3 < t3.length; o3++) {
            var a3 = t3[o3], s3 = t3[e3];
            if (a3 && o3 !== e3) if (s3) {
              var c3 = C(a3), l3 = C(s3);
              if (c3 !== a3.ownerDocument) if (l3 !== a3.ownerDocument) if (c3 !== l3) {
                i3 = i3.length ? i3 : j(s3);
                var u3 = void 0;
                if (s3 instanceof k.HTMLElement && a3 instanceof k.SVGElement && !(a3 instanceof k.SVGSVGElement)) {
                  if (a3 === l3) continue;
                  u3 = a3.ownerSVGElement;
                } else u3 = a3;
                for (var p3 = j(u3, s3.ownerDocument), f3 = 0; p3[f3] && p3[f3] === i3[f3]; ) f3++;
                var d3 = [p3[f3 - 1], p3[f3], i3[f3]];
                if (d3[0]) for (var h3 = d3[0].lastChild; h3; ) {
                  if (h3 === d3[1]) {
                    e3 = o3, i3 = p3;
                    break;
                  }
                  if (h3 === d3[2]) break;
                  h3 = h3.previousSibling;
                }
              } else r3 = s3, (parseInt(y(n3 = a3).getComputedStyle(n3).zIndex, 10) || 0) >= (parseInt(y(r3).getComputedStyle(r3).zIndex, 10) || 0) && (e3 = o3);
              else e3 = o3;
            } else e3 = o3;
          }
          return e3;
        }(a2);
        return r2.activeDrops[h2] || null;
      }
      function St(t2, e2, n2) {
        var r2 = t2.dropState, i2 = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
        return "dragstart" === n2.type && (i2.activate = new xt(r2, n2, "dropactivate"), i2.activate.target = null, i2.activate.dropzone = null), "dragend" === n2.type && (i2.deactivate = new xt(r2, n2, "dropdeactivate"), i2.deactivate.target = null, i2.deactivate.dropzone = null), r2.rejected || (r2.cur.element !== r2.prev.element && (r2.prev.dropzone && (i2.leave = new xt(r2, n2, "dragleave"), n2.dragLeave = i2.leave.target = r2.prev.element, n2.prevDropzone = i2.leave.dropzone = r2.prev.dropzone), r2.cur.dropzone && (i2.enter = new xt(r2, n2, "dragenter"), n2.dragEnter = r2.cur.element, n2.dropzone = r2.cur.dropzone)), "dragend" === n2.type && r2.cur.dropzone && (i2.drop = new xt(r2, n2, "drop"), n2.dropzone = r2.cur.dropzone, n2.relatedTarget = r2.cur.element), "dragmove" === n2.type && r2.cur.dropzone && (i2.move = new xt(r2, n2, "dropmove"), n2.dropzone = r2.cur.dropzone)), i2;
      }
      function _t(t2, e2) {
        var n2 = t2.dropState, r2 = n2.activeDrops, i2 = n2.cur, o2 = n2.prev;
        e2.leave && o2.dropzone.fire(e2.leave), e2.enter && i2.dropzone.fire(e2.enter), e2.move && i2.dropzone.fire(e2.move), e2.drop && i2.dropzone.fire(e2.drop), e2.deactivate && wt(r2, e2.deactivate), n2.prev.dropzone = i2.dropzone, n2.prev.element = i2.element;
      }
      function Pt(t2, e2) {
        var n2 = t2.interaction, r2 = t2.iEvent, i2 = t2.event;
        if ("dragmove" === r2.type || "dragend" === r2.type) {
          var o2 = n2.dropState;
          e2.dynamicDrop && (o2.activeDrops = Et(e2, n2.element));
          var a2 = r2, s2 = Tt(n2, a2, i2);
          o2.rejected = o2.rejected && !!s2 && s2.dropzone === o2.cur.dropzone && s2.element === o2.cur.element, o2.cur.dropzone = s2 && s2.dropzone, o2.cur.element = s2 && s2.element, o2.events = St(n2, 0, a2);
        }
      }
      var Ot = { id: "actions/drop", install: function(t2) {
        var e2 = t2.actions, n2 = t2.interactStatic, r2 = t2.Interactable, i2 = t2.defaults;
        t2.usePlugin(_), r2.prototype.dropzone = function(t3) {
          return function(t4, e3) {
            if (w.object(e3)) {
              if (t4.options.drop.enabled = false !== e3.enabled, e3.listeners) {
                var n3 = $(e3.listeners), r3 = Object.keys(n3).reduce(function(t5, e4) {
                  return t5[/^(enter|leave)/.test(e4) ? "drag".concat(e4) : /^(activate|deactivate|move)/.test(e4) ? "drop".concat(e4) : e4] = n3[e4], t5;
                }, {}), i3 = t4.options.drop.listeners;
                i3 && t4.off(i3), t4.on(r3), t4.options.drop.listeners = r3;
              }
              return w.func(e3.ondrop) && t4.on("drop", e3.ondrop), w.func(e3.ondropactivate) && t4.on("dropactivate", e3.ondropactivate), w.func(e3.ondropdeactivate) && t4.on("dropdeactivate", e3.ondropdeactivate), w.func(e3.ondragenter) && t4.on("dragenter", e3.ondragenter), w.func(e3.ondragleave) && t4.on("dragleave", e3.ondragleave), w.func(e3.ondropmove) && t4.on("dropmove", e3.ondropmove), /^(pointer|center)$/.test(e3.overlap) ? t4.options.drop.overlap = e3.overlap : w.number(e3.overlap) && (t4.options.drop.overlap = Math.max(Math.min(1, e3.overlap), 0)), "accept" in e3 && (t4.options.drop.accept = e3.accept), "checker" in e3 && (t4.options.drop.checker = e3.checker), t4;
            }
            if (w.bool(e3)) return t4.options.drop.enabled = e3, t4;
            return t4.options.drop;
          }(this, t3);
        }, r2.prototype.dropCheck = function(t3, e3, n3, r3, i3, o2) {
          return function(t4, e4, n4, r4, i4, o3, a2) {
            var s2 = false;
            if (!(a2 = a2 || t4.getRect(o3))) return !!t4.options.drop.checker && t4.options.drop.checker(e4, n4, s2, t4, o3, r4, i4);
            var c2 = t4.options.drop.overlap;
            if ("pointer" === c2) {
              var l2 = K(r4, i4, "drag"), u2 = ot(e4);
              u2.x += l2.x, u2.y += l2.y;
              var p2 = u2.x > a2.left && u2.x < a2.right, f2 = u2.y > a2.top && u2.y < a2.bottom;
              s2 = p2 && f2;
            }
            var d2 = r4.getRect(i4);
            if (d2 && "center" === c2) {
              var h2 = d2.left + d2.width / 2, v2 = d2.top + d2.height / 2;
              s2 = h2 >= a2.left && h2 <= a2.right && v2 >= a2.top && v2 <= a2.bottom;
            }
            if (d2 && w.number(c2)) {
              s2 = Math.max(0, Math.min(a2.right, d2.right) - Math.max(a2.left, d2.left)) * Math.max(0, Math.min(a2.bottom, d2.bottom) - Math.max(a2.top, d2.top)) / (d2.width * d2.height) >= c2;
            }
            t4.options.drop.checker && (s2 = t4.options.drop.checker(e4, n4, s2, t4, o3, r4, i4));
            return s2;
          }(this, t3, e3, n3, r3, i3, o2);
        }, n2.dynamicDrop = function(e3) {
          return w.bool(e3) ? (t2.dynamicDrop = e3, n2) : t2.dynamicDrop;
        }, V(e2.phaselessTypes, { dragenter: true, dragleave: true, dropactivate: true, dropdeactivate: true, dropmove: true, drop: true }), e2.methodDict.drop = "dropzone", t2.dynamicDrop = false, i2.actions.drop = Ot.defaults;
      }, listeners: { "interactions:before-action-start": function(t2) {
        var e2 = t2.interaction;
        "drag" === e2.prepared.name && (e2.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
      }, "interactions:after-action-start": function(t2, e2) {
        var n2 = t2.interaction, r2 = (t2.event, t2.iEvent);
        if ("drag" === n2.prepared.name) {
          var i2 = n2.dropState;
          i2.activeDrops = [], i2.events = {}, i2.activeDrops = Et(e2, n2.element), i2.events = St(n2, 0, r2), i2.events.activate && (wt(i2.activeDrops, i2.events.activate), e2.fire("actions/drop:start", { interaction: n2, dragEvent: r2 }));
        }
      }, "interactions:action-move": Pt, "interactions:after-action-move": function(t2, e2) {
        var n2 = t2.interaction, r2 = t2.iEvent;
        if ("drag" === n2.prepared.name) {
          var i2 = n2.dropState;
          _t(n2, i2.events), e2.fire("actions/drop:move", { interaction: n2, dragEvent: r2 }), i2.events = {};
        }
      }, "interactions:action-end": function(t2, e2) {
        if ("drag" === t2.interaction.prepared.name) {
          var n2 = t2.interaction, r2 = t2.iEvent;
          Pt(t2, e2), _t(n2, n2.dropState.events), e2.fire("actions/drop:end", { interaction: n2, dragEvent: r2 });
        }
      }, "interactions:stop": function(t2) {
        var e2 = t2.interaction;
        if ("drag" === e2.prepared.name) {
          var n2 = e2.dropState;
          n2 && (n2.activeDrops = null, n2.events = null, n2.cur.dropzone = null, n2.cur.element = null, n2.prev.dropzone = null, n2.prev.element = null, n2.rejected = false);
        }
      } }, getActiveDrops: Et, getDrop: Tt, getDropEvents: St, fireDropEvents: _t, filterEventType: function(t2) {
        return 0 === t2.search("drag") || 0 === t2.search("drop");
      }, defaults: { enabled: false, accept: null, overlap: "pointer" } }, kt = Ot;
      function Dt(t2) {
        var e2 = t2.interaction, n2 = t2.iEvent, r2 = t2.phase;
        if ("gesture" === e2.prepared.name) {
          var i2 = e2.pointers.map(function(t3) {
            return t3.pointer;
          }), o2 = "start" === r2, a2 = "end" === r2, s2 = e2.interactable.options.deltaSource;
          if (n2.touches = [i2[0], i2[1]], o2) n2.distance = pt(i2, s2), n2.box = ut(i2), n2.scale = 1, n2.ds = 0, n2.angle = ft(i2, s2), n2.da = 0, e2.gesture.startDistance = n2.distance, e2.gesture.startAngle = n2.angle;
          else if (a2 || e2.pointers.length < 2) {
            var c2 = e2.prevEvent;
            n2.distance = c2.distance, n2.box = c2.box, n2.scale = c2.scale, n2.ds = 0, n2.angle = c2.angle, n2.da = 0;
          } else n2.distance = pt(i2, s2), n2.box = ut(i2), n2.scale = n2.distance / e2.gesture.startDistance, n2.angle = ft(i2, s2), n2.ds = n2.scale - e2.gesture.scale, n2.da = n2.angle - e2.gesture.angle;
          e2.gesture.distance = n2.distance, e2.gesture.angle = n2.angle, w.number(n2.scale) && n2.scale !== 1 / 0 && !isNaN(n2.scale) && (e2.gesture.scale = n2.scale);
        }
      }
      var It = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(t2) {
        var e2 = t2.actions, n2 = t2.Interactable, r2 = t2.defaults;
        n2.prototype.gesturable = function(t3) {
          return w.object(t3) ? (this.options.gesture.enabled = false !== t3.enabled, this.setPerAction("gesture", t3), this.setOnEvents("gesture", t3), this) : w.bool(t3) ? (this.options.gesture.enabled = t3, this) : this.options.gesture;
        }, e2.map.gesture = It, e2.methodDict.gesture = "gesturable", r2.actions.gesture = It.defaults;
      }, listeners: { "interactions:action-start": Dt, "interactions:action-move": Dt, "interactions:action-end": Dt, "interactions:new": function(t2) {
        t2.interaction.gesture = { angle: 0, distance: 0, scale: 1, startAngle: 0, startDistance: 0 };
      }, "auto-start:check": function(t2) {
        if (!(t2.interaction.pointers.length < 2)) {
          var e2 = t2.interactable.options.gesture;
          if (e2 && e2.enabled) return t2.action = { name: "gesture" }, false;
        }
      } }, defaults: {}, getCursor: function() {
        return "";
      }, filterEventType: function(t2) {
        return 0 === t2.search("gesture");
      } }, Mt = It;
      function zt(t2, e2, n2, r2, i2, o2, a2) {
        if (!e2) return false;
        if (true === e2) {
          var s2 = w.number(o2.width) ? o2.width : o2.right - o2.left, c2 = w.number(o2.height) ? o2.height : o2.bottom - o2.top;
          if (a2 = Math.min(a2, Math.abs(("left" === t2 || "right" === t2 ? s2 : c2) / 2)), s2 < 0 && ("left" === t2 ? t2 = "right" : "right" === t2 && (t2 = "left")), c2 < 0 && ("top" === t2 ? t2 = "bottom" : "bottom" === t2 && (t2 = "top")), "left" === t2) {
            var l2 = s2 >= 0 ? o2.left : o2.right;
            return n2.x < l2 + a2;
          }
          if ("top" === t2) {
            var u2 = c2 >= 0 ? o2.top : o2.bottom;
            return n2.y < u2 + a2;
          }
          if ("right" === t2) return n2.x > (s2 >= 0 ? o2.right : o2.left) - a2;
          if ("bottom" === t2) return n2.y > (c2 >= 0 ? o2.bottom : o2.top) - a2;
        }
        return !!w.element(r2) && (w.element(e2) ? e2 === r2 : F(r2, e2, i2));
      }
      function At(t2) {
        var e2 = t2.iEvent, n2 = t2.interaction;
        if ("resize" === n2.prepared.name && n2.resizeAxes) {
          var r2 = e2;
          n2.interactable.options.resize.square ? ("y" === n2.resizeAxes ? r2.delta.x = r2.delta.y : r2.delta.y = r2.delta.x, r2.axes = "xy") : (r2.axes = n2.resizeAxes, "x" === n2.resizeAxes ? r2.delta.y = 0 : "y" === n2.resizeAxes && (r2.delta.x = 0));
        }
      }
      var Rt, Ct, jt = { id: "actions/resize", before: ["actions/drag"], install: function(t2) {
        var e2 = t2.actions, n2 = t2.browser, r2 = t2.Interactable, i2 = t2.defaults;
        jt.cursors = function(t3) {
          return t3.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
        }(n2), jt.defaultMargin = n2.supportsTouch || n2.supportsPointerEvent ? 20 : 10, r2.prototype.resizable = function(e3) {
          return function(t3, e4, n3) {
            if (w.object(e4)) return t3.options.resize.enabled = false !== e4.enabled, t3.setPerAction("resize", e4), t3.setOnEvents("resize", e4), w.string(e4.axis) && /^x$|^y$|^xy$/.test(e4.axis) ? t3.options.resize.axis = e4.axis : null === e4.axis && (t3.options.resize.axis = n3.defaults.actions.resize.axis), w.bool(e4.preserveAspectRatio) ? t3.options.resize.preserveAspectRatio = e4.preserveAspectRatio : w.bool(e4.square) && (t3.options.resize.square = e4.square), t3;
            if (w.bool(e4)) return t3.options.resize.enabled = e4, t3;
            return t3.options.resize;
          }(this, e3, t2);
        }, e2.map.resize = jt, e2.methodDict.resize = "resizable", i2.actions.resize = jt.defaults;
      }, listeners: { "interactions:new": function(t2) {
        t2.interaction.resizeAxes = "xy";
      }, "interactions:action-start": function(t2) {
        !function(t3) {
          var e2 = t3.iEvent, n2 = t3.interaction;
          if ("resize" === n2.prepared.name && n2.prepared.edges) {
            var r2 = e2, i2 = n2.rect;
            n2._rects = { start: V({}, i2), corrected: V({}, i2), previous: V({}, i2), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, r2.edges = n2.prepared.edges, r2.rect = n2._rects.corrected, r2.deltaRect = n2._rects.delta;
          }
        }(t2), At(t2);
      }, "interactions:action-move": function(t2) {
        !function(t3) {
          var e2 = t3.iEvent, n2 = t3.interaction;
          if ("resize" === n2.prepared.name && n2.prepared.edges) {
            var r2 = e2, i2 = n2.interactable.options.resize.invert, o2 = "reposition" === i2 || "negate" === i2, a2 = n2.rect, s2 = n2._rects, c2 = s2.start, l2 = s2.corrected, u2 = s2.delta, p2 = s2.previous;
            if (V(p2, l2), o2) {
              if (V(l2, a2), "reposition" === i2) {
                if (l2.top > l2.bottom) {
                  var f2 = l2.top;
                  l2.top = l2.bottom, l2.bottom = f2;
                }
                if (l2.left > l2.right) {
                  var d2 = l2.left;
                  l2.left = l2.right, l2.right = d2;
                }
              }
            } else l2.top = Math.min(a2.top, c2.bottom), l2.bottom = Math.max(a2.bottom, c2.top), l2.left = Math.min(a2.left, c2.right), l2.right = Math.max(a2.right, c2.left);
            for (var h2 in l2.width = l2.right - l2.left, l2.height = l2.bottom - l2.top, l2) u2[h2] = l2[h2] - p2[h2];
            r2.edges = n2.prepared.edges, r2.rect = l2, r2.deltaRect = u2;
          }
        }(t2), At(t2);
      }, "interactions:action-end": function(t2) {
        var e2 = t2.iEvent, n2 = t2.interaction;
        if ("resize" === n2.prepared.name && n2.prepared.edges) {
          var r2 = e2;
          r2.edges = n2.prepared.edges, r2.rect = n2._rects.corrected, r2.deltaRect = n2._rects.delta;
        }
      }, "auto-start:check": function(t2) {
        var e2 = t2.interaction, n2 = t2.interactable, r2 = t2.element, i2 = t2.rect, o2 = t2.buttons;
        if (i2) {
          var a2 = V({}, e2.coords.cur.page), s2 = n2.options.resize;
          if (s2 && s2.enabled && (!e2.pointerIsDown || !/mouse|pointer/.test(e2.pointerType) || 0 != (o2 & s2.mouseButtons))) {
            if (w.object(s2.edges)) {
              var c2 = { left: false, right: false, top: false, bottom: false };
              for (var l2 in c2) c2[l2] = zt(l2, s2.edges[l2], a2, e2._latestPointer.eventTarget, r2, i2, s2.margin || jt.defaultMargin);
              c2.left = c2.left && !c2.right, c2.top = c2.top && !c2.bottom, (c2.left || c2.right || c2.top || c2.bottom) && (t2.action = { name: "resize", edges: c2 });
            } else {
              var u2 = "y" !== s2.axis && a2.x > i2.right - jt.defaultMargin, p2 = "x" !== s2.axis && a2.y > i2.bottom - jt.defaultMargin;
              (u2 || p2) && (t2.action = { name: "resize", axes: (u2 ? "x" : "") + (p2 ? "y" : "") });
            }
            return !t2.action && void 0;
          }
        }
      } }, defaults: { square: false, preserveAspectRatio: false, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(t2) {
        var e2 = t2.edges, n2 = t2.axis, r2 = t2.name, i2 = jt.cursors, o2 = null;
        if (n2) o2 = i2[r2 + n2];
        else if (e2) {
          for (var a2 = "", s2 = 0, c2 = ["top", "bottom", "left", "right"]; s2 < c2.length; s2++) {
            var l2 = c2[s2];
            e2[l2] && (a2 += l2);
          }
          o2 = i2[a2];
        }
        return o2;
      }, filterEventType: function(t2) {
        return 0 === t2.search("resize");
      }, defaultMargin: null }, Ft = jt, Xt = { id: "actions", install: function(t2) {
        t2.usePlugin(Mt), t2.usePlugin(Ft), t2.usePlugin(_), t2.usePlugin(kt);
      } }, Yt = 0;
      var Lt = { request: function(t2) {
        return Rt(t2);
      }, cancel: function(t2) {
        return Ct(t2);
      }, init: function(t2) {
        if (Rt = t2.requestAnimationFrame, Ct = t2.cancelAnimationFrame, !Rt) for (var e2 = ["ms", "moz", "webkit", "o"], n2 = 0; n2 < e2.length; n2++) {
          var r2 = e2[n2];
          Rt = t2["".concat(r2, "RequestAnimationFrame")], Ct = t2["".concat(r2, "CancelAnimationFrame")] || t2["".concat(r2, "CancelRequestAnimationFrame")];
        }
        Rt = Rt && Rt.bind(t2), Ct = Ct && Ct.bind(t2), Rt || (Rt = function(e3) {
          var n3 = Date.now(), r3 = Math.max(0, 16 - (n3 - Yt)), i2 = t2.setTimeout(function() {
            e3(n3 + r3);
          }, r3);
          return Yt = n3 + r3, i2;
        }, Ct = function(t3) {
          return clearTimeout(t3);
        });
      } };
      var qt = { defaults: { enabled: false, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: false, prevTime: 0, margin: 0, speed: 0, start: function(t2) {
        qt.isScrolling = true, Lt.cancel(qt.i), t2.autoScroll = qt, qt.interaction = t2, qt.prevTime = qt.now(), qt.i = Lt.request(qt.scroll);
      }, stop: function() {
        qt.isScrolling = false, qt.interaction && (qt.interaction.autoScroll = null), Lt.cancel(qt.i);
      }, scroll: function() {
        var t2 = qt.interaction, e2 = t2.interactable, n2 = t2.element, r2 = t2.prepared.name, i2 = e2.options[r2].autoScroll, o2 = Bt(i2.container, e2, n2), a2 = qt.now(), s2 = (a2 - qt.prevTime) / 1e3, c2 = i2.speed * s2;
        if (c2 >= 1) {
          var l2 = { x: qt.x * c2, y: qt.y * c2 };
          if (l2.x || l2.y) {
            var u2 = Vt(o2);
            w.window(o2) ? o2.scrollBy(l2.x, l2.y) : o2 && (o2.scrollLeft += l2.x, o2.scrollTop += l2.y);
            var p2 = Vt(o2), f2 = { x: p2.x - u2.x, y: p2.y - u2.y };
            (f2.x || f2.y) && e2.fire({ type: "autoscroll", target: n2, interactable: e2, delta: f2, interaction: t2, container: o2 });
          }
          qt.prevTime = a2;
        }
        qt.isScrolling && (Lt.cancel(qt.i), qt.i = Lt.request(qt.scroll));
      }, check: function(t2, e2) {
        var n2;
        return null == (n2 = t2.options[e2].autoScroll) ? void 0 : n2.enabled;
      }, onInteractionMove: function(t2) {
        var e2 = t2.interaction, n2 = t2.pointer;
        if (e2.interacting() && qt.check(e2.interactable, e2.prepared.name)) if (e2.simulation) qt.x = qt.y = 0;
        else {
          var r2, i2, o2, a2, s2 = e2.interactable, c2 = e2.element, l2 = e2.prepared.name, u2 = s2.options[l2].autoScroll, p2 = Bt(u2.container, s2, c2);
          if (w.window(p2)) a2 = n2.clientX < qt.margin, r2 = n2.clientY < qt.margin, i2 = n2.clientX > p2.innerWidth - qt.margin, o2 = n2.clientY > p2.innerHeight - qt.margin;
          else {
            var f2 = Y(p2);
            a2 = n2.clientX < f2.left + qt.margin, r2 = n2.clientY < f2.top + qt.margin, i2 = n2.clientX > f2.right - qt.margin, o2 = n2.clientY > f2.bottom - qt.margin;
          }
          qt.x = i2 ? 1 : a2 ? -1 : 0, qt.y = o2 ? 1 : r2 ? -1 : 0, qt.isScrolling || (qt.margin = u2.margin, qt.speed = u2.speed, qt.start(e2));
        }
      } };
      function Bt(t2, e2, n2) {
        return (w.string(t2) ? W(t2, e2, n2) : t2) || y(n2);
      }
      function Vt(t2) {
        return w.window(t2) && (t2 = window.document.body), { x: t2.scrollLeft, y: t2.scrollTop };
      }
      var Wt = { id: "auto-scroll", install: function(t2) {
        var e2 = t2.defaults, n2 = t2.actions;
        t2.autoScroll = qt, qt.now = function() {
          return t2.now();
        }, n2.phaselessTypes.autoscroll = true, e2.perAction.autoScroll = qt.defaults;
      }, listeners: { "interactions:new": function(t2) {
        t2.interaction.autoScroll = null;
      }, "interactions:destroy": function(t2) {
        t2.interaction.autoScroll = null, qt.stop(), qt.interaction && (qt.interaction = null);
      }, "interactions:stop": qt.stop, "interactions:action-move": function(t2) {
        return qt.onInteractionMove(t2);
      } } }, Gt = Wt;
      function Nt(t2, e2) {
        var n2 = false;
        return function() {
          return n2 || (g.console.warn(e2), n2 = true), t2.apply(this, arguments);
        };
      }
      function Ut(t2, e2) {
        return t2.name = e2.name, t2.axis = e2.axis, t2.edges = e2.edges, t2;
      }
      function Ht(t2) {
        return w.bool(t2) ? (this.options.styleCursor = t2, this) : null === t2 ? (delete this.options.styleCursor, this) : this.options.styleCursor;
      }
      function Kt(t2) {
        return w.func(t2) ? (this.options.actionChecker = t2, this) : null === t2 ? (delete this.options.actionChecker, this) : this.options.actionChecker;
      }
      var $t = { id: "auto-start/interactableMethods", install: function(t2) {
        var e2 = t2.Interactable;
        e2.prototype.getAction = function(e3, n2, r2, i2) {
          var o2 = function(t3, e4, n3, r3, i3) {
            var o3 = t3.getRect(r3), a2 = e4.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[e4.button], s2 = { action: null, interactable: t3, interaction: n3, element: r3, rect: o3, buttons: a2 };
            return i3.fire("auto-start:check", s2), s2.action;
          }(this, n2, r2, i2, t2);
          return this.options.actionChecker ? this.options.actionChecker(e3, n2, o2, this, i2, r2) : o2;
        }, e2.prototype.ignoreFrom = Nt(function(t3) {
          return this._backCompatOption("ignoreFrom", t3);
        }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), e2.prototype.allowFrom = Nt(function(t3) {
          return this._backCompatOption("allowFrom", t3);
        }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), e2.prototype.actionChecker = Kt, e2.prototype.styleCursor = Ht;
      } };
      function Jt(t2, e2, n2, r2, i2) {
        return e2.testIgnoreAllow(e2.options[t2.name], n2, r2) && e2.options[t2.name].enabled && ee(e2, n2, t2, i2) ? t2 : null;
      }
      function Qt(t2, e2, n2, r2, i2, o2, a2) {
        for (var s2 = 0, c2 = r2.length; s2 < c2; s2++) {
          var l2 = r2[s2], u2 = i2[s2], p2 = l2.getAction(e2, n2, t2, u2);
          if (p2) {
            var f2 = Jt(p2, l2, u2, o2, a2);
            if (f2) return { action: f2, interactable: l2, element: u2 };
          }
        }
        return { action: null, interactable: null, element: null };
      }
      function Zt(t2, e2, n2, r2, i2) {
        var o2 = [], a2 = [], s2 = r2;
        function c2(t3) {
          o2.push(t3), a2.push(s2);
        }
        for (; w.element(s2); ) {
          o2 = [], a2 = [], i2.interactables.forEachMatch(s2, c2);
          var l2 = Qt(t2, e2, n2, o2, a2, r2, i2);
          if (l2.action && !l2.interactable.options[l2.action.name].manualStart) return l2;
          s2 = A(s2);
        }
        return { action: null, interactable: null, element: null };
      }
      function te(t2, e2, n2) {
        var r2 = e2.action, i2 = e2.interactable, o2 = e2.element;
        r2 = r2 || { name: null }, t2.interactable = i2, t2.element = o2, Ut(t2.prepared, r2), t2.rect = i2 && r2.name ? i2.getRect(o2) : null, ie(t2, n2), n2.fire("autoStart:prepared", { interaction: t2 });
      }
      function ee(t2, e2, n2, r2) {
        var i2 = t2.options, o2 = i2[n2.name].max, a2 = i2[n2.name].maxPerElement, s2 = r2.autoStart.maxInteractions, c2 = 0, l2 = 0, u2 = 0;
        if (!(o2 && a2 && s2)) return false;
        for (var p2 = 0, f2 = r2.interactions.list; p2 < f2.length; p2++) {
          var d2 = f2[p2], h2 = d2.prepared.name;
          if (d2.interacting()) {
            if (++c2 >= s2) return false;
            if (d2.interactable === t2) {
              if ((l2 += h2 === n2.name ? 1 : 0) >= o2) return false;
              if (d2.element === e2 && (u2++, h2 === n2.name && u2 >= a2)) return false;
            }
          }
        }
        return s2 > 0;
      }
      function ne(t2, e2) {
        return w.number(t2) ? (e2.autoStart.maxInteractions = t2, this) : e2.autoStart.maxInteractions;
      }
      function re(t2, e2, n2) {
        var r2 = n2.autoStart.cursorElement;
        r2 && r2 !== t2 && (r2.style.cursor = ""), t2.ownerDocument.documentElement.style.cursor = e2, t2.style.cursor = e2, n2.autoStart.cursorElement = e2 ? t2 : null;
      }
      function ie(t2, e2) {
        var n2 = t2.interactable, r2 = t2.element, i2 = t2.prepared;
        if ("mouse" === t2.pointerType && n2 && n2.options.styleCursor) {
          var o2 = "";
          if (i2.name) {
            var a2 = n2.options[i2.name].cursorChecker;
            o2 = w.func(a2) ? a2(i2, n2, r2, t2._interacting) : e2.actions.map[i2.name].getCursor(i2);
          }
          re(t2.element, o2 || "", e2);
        } else e2.autoStart.cursorElement && re(e2.autoStart.cursorElement, "", e2);
      }
      var oe = { id: "auto-start/base", before: ["actions"], install: function(t2) {
        var e2 = t2.interactStatic, n2 = t2.defaults;
        t2.usePlugin($t), n2.base.actionChecker = null, n2.base.styleCursor = true, V(n2.perAction, { manualStart: false, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), e2.maxInteractions = function(e3) {
          return ne(e3, t2);
        }, t2.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: ee, cursorElement: null };
      }, listeners: { "interactions:down": function(t2, e2) {
        var n2 = t2.interaction, r2 = t2.pointer, i2 = t2.event, o2 = t2.eventTarget;
        n2.interacting() || te(n2, Zt(n2, r2, i2, o2, e2), e2);
      }, "interactions:move": function(t2, e2) {
        !function(t3, e3) {
          var n2 = t3.interaction, r2 = t3.pointer, i2 = t3.event, o2 = t3.eventTarget;
          "mouse" !== n2.pointerType || n2.pointerIsDown || n2.interacting() || te(n2, Zt(n2, r2, i2, o2, e3), e3);
        }(t2, e2), function(t3, e3) {
          var n2 = t3.interaction;
          if (n2.pointerIsDown && !n2.interacting() && n2.pointerWasMoved && n2.prepared.name) {
            e3.fire("autoStart:before-start", t3);
            var r2 = n2.interactable, i2 = n2.prepared.name;
            i2 && r2 && (r2.options[i2].manualStart || !ee(r2, n2.element, n2.prepared, e3) ? n2.stop() : (n2.start(n2.prepared, r2, n2.element), ie(n2, e3)));
          }
        }(t2, e2);
      }, "interactions:stop": function(t2, e2) {
        var n2 = t2.interaction, r2 = n2.interactable;
        r2 && r2.options.styleCursor && re(n2.element, "", e2);
      } }, maxInteractions: ne, withinInteractionLimit: ee, validateAction: Jt }, ae = oe;
      var se = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(t2, e2) {
        var n2 = t2.interaction, r2 = t2.eventTarget, i2 = t2.dx, o2 = t2.dy;
        if ("drag" === n2.prepared.name) {
          var a2 = Math.abs(i2), s2 = Math.abs(o2), c2 = n2.interactable.options.drag, l2 = c2.startAxis, u2 = a2 > s2 ? "x" : a2 < s2 ? "y" : "xy";
          if (n2.prepared.axis = "start" === c2.lockAxis ? u2[0] : c2.lockAxis, "xy" !== u2 && "xy" !== l2 && l2 !== u2) {
            n2.prepared.name = null;
            for (var p2 = r2, f2 = function(t3) {
              if (t3 !== n2.interactable) {
                var i3 = n2.interactable.options.drag;
                if (!i3.manualStart && t3.testIgnoreAllow(i3, p2, r2)) {
                  var o3 = t3.getAction(n2.downPointer, n2.downEvent, n2, p2);
                  if (o3 && "drag" === o3.name && function(t4, e3) {
                    if (!e3) return false;
                    var n3 = e3.options.drag.startAxis;
                    return "xy" === t4 || "xy" === n3 || n3 === t4;
                  }(u2, t3) && ae.validateAction(o3, t3, p2, r2, e2)) return t3;
                }
              }
            }; w.element(p2); ) {
              var d2 = e2.interactables.forEachMatch(p2, f2);
              if (d2) {
                n2.prepared.name = "drag", n2.interactable = d2, n2.element = p2;
                break;
              }
              p2 = A(p2);
            }
          }
        }
      } } };
      function ce(t2) {
        var e2 = t2.prepared && t2.prepared.name;
        if (!e2) return null;
        var n2 = t2.interactable.options;
        return n2[e2].hold || n2[e2].delay;
      }
      var le = { id: "auto-start/hold", install: function(t2) {
        var e2 = t2.defaults;
        t2.usePlugin(ae), e2.perAction.hold = 0, e2.perAction.delay = 0;
      }, listeners: { "interactions:new": function(t2) {
        t2.interaction.autoStartHoldTimer = null;
      }, "autoStart:prepared": function(t2) {
        var e2 = t2.interaction, n2 = ce(e2);
        n2 > 0 && (e2.autoStartHoldTimer = setTimeout(function() {
          e2.start(e2.prepared, e2.interactable, e2.element);
        }, n2));
      }, "interactions:move": function(t2) {
        var e2 = t2.interaction, n2 = t2.duplicate;
        e2.autoStartHoldTimer && e2.pointerWasMoved && !n2 && (clearTimeout(e2.autoStartHoldTimer), e2.autoStartHoldTimer = null);
      }, "autoStart:before-start": function(t2) {
        var e2 = t2.interaction;
        ce(e2) > 0 && (e2.prepared.name = null);
      } }, getHoldDuration: ce }, ue = le, pe = { id: "auto-start", install: function(t2) {
        t2.usePlugin(ae), t2.usePlugin(ue), t2.usePlugin(se);
      } }, fe = function(t2) {
        return /^(always|never|auto)$/.test(t2) ? (this.options.preventDefault = t2, this) : w.bool(t2) ? (this.options.preventDefault = t2 ? "always" : "never", this) : this.options.preventDefault;
      };
      function de(t2) {
        var e2 = t2.interaction, n2 = t2.event;
        e2.interactable && e2.interactable.checkAndPreventDefault(n2);
      }
      var he = { id: "core/interactablePreventDefault", install: function(t2) {
        var e2 = t2.Interactable;
        e2.prototype.preventDefault = fe, e2.prototype.checkAndPreventDefault = function(e3) {
          return function(t3, e4, n2) {
            var r2 = t3.options.preventDefault;
            if ("never" !== r2) if ("always" !== r2) {
              if (e4.events.supportsPassive && /^touch(start|move)$/.test(n2.type)) {
                var i2 = y(n2.target).document, o2 = e4.getDocOptions(i2);
                if (!o2 || !o2.events || false !== o2.events.passive) return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(n2.type) || w.element(n2.target) && R(n2.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || n2.preventDefault();
            } else n2.preventDefault();
          }(this, t2, e3);
        }, t2.interactions.docEvents.push({ type: "dragstart", listener: function(e3) {
          for (var n2 = 0, r2 = t2.interactions.list; n2 < r2.length; n2++) {
            var i2 = r2[n2];
            if (i2.element && (i2.element === e3.target || M(i2.element, e3.target))) return void i2.interactable.checkAndPreventDefault(e3);
          }
        } });
      }, listeners: ["down", "move", "up", "cancel"].reduce(function(t2, e2) {
        return t2["interactions:".concat(e2)] = de, t2;
      }, {}) };
      function ve(t2, e2) {
        if (e2.phaselessTypes[t2]) return true;
        for (var n2 in e2.map) if (0 === t2.indexOf(n2) && t2.substr(n2.length) in e2.phases) return true;
        return false;
      }
      function ge(t2) {
        var e2 = {};
        for (var n2 in t2) {
          var r2 = t2[n2];
          w.plainObject(r2) ? e2[n2] = ge(r2) : w.array(r2) ? e2[n2] = mt(r2) : e2[n2] = r2;
        }
        return e2;
      }
      var me = function() {
        function t2(e2) {
          r(this, t2), this.states = [], this.startOffset = { left: 0, right: 0, top: 0, bottom: 0 }, this.startDelta = void 0, this.result = void 0, this.endResult = void 0, this.startEdges = void 0, this.edges = void 0, this.interaction = void 0, this.interaction = e2, this.result = ye(), this.edges = { left: false, right: false, top: false, bottom: false };
        }
        return o(t2, [{ key: "start", value: function(t3, e2) {
          var n2, r2, i2 = t3.phase, o2 = this.interaction, a2 = function(t4) {
            var e3 = t4.interactable.options[t4.prepared.name], n3 = e3.modifiers;
            if (n3 && n3.length) return n3;
            return ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(t5) {
              var n4 = e3[t5];
              return n4 && n4.enabled && { options: n4, methods: n4._methods };
            }).filter(function(t5) {
              return !!t5;
            });
          }(o2);
          this.prepareStates(a2), this.startEdges = V({}, o2.edges), this.edges = V({}, this.startEdges), this.startOffset = (n2 = o2.rect, r2 = e2, n2 ? { left: r2.x - n2.left, top: r2.y - n2.top, right: n2.right - r2.x, bottom: n2.bottom - r2.y } : { left: 0, top: 0, right: 0, bottom: 0 }), this.startDelta = { x: 0, y: 0 };
          var s2 = this.fillArg({ phase: i2, pageCoords: e2, preEnd: false });
          return this.result = ye(), this.startAll(s2), this.result = this.setAll(s2);
        } }, { key: "fillArg", value: function(t3) {
          var e2 = this.interaction;
          return t3.interaction = e2, t3.interactable = e2.interactable, t3.element = e2.element, t3.rect || (t3.rect = e2.rect), t3.edges || (t3.edges = this.startEdges), t3.startOffset = this.startOffset, t3;
        } }, { key: "startAll", value: function(t3) {
          for (var e2 = 0, n2 = this.states; e2 < n2.length; e2++) {
            var r2 = n2[e2];
            r2.methods.start && (t3.state = r2, r2.methods.start(t3));
          }
        } }, { key: "setAll", value: function(t3) {
          var e2 = t3.phase, n2 = t3.preEnd, r2 = t3.skipModifiers, i2 = t3.rect, o2 = t3.edges;
          t3.coords = V({}, t3.pageCoords), t3.rect = V({}, i2), t3.edges = V({}, o2);
          for (var a2 = r2 ? this.states.slice(r2) : this.states, s2 = ye(t3.coords, t3.rect), c2 = 0; c2 < a2.length; c2++) {
            var l2, u2 = a2[c2], p2 = u2.options, f2 = V({}, t3.coords), d2 = null;
            null != (l2 = u2.methods) && l2.set && this.shouldDo(p2, n2, e2) && (t3.state = u2, d2 = u2.methods.set(t3), H(t3.edges, t3.rect, { x: t3.coords.x - f2.x, y: t3.coords.y - f2.y })), s2.eventProps.push(d2);
          }
          V(this.edges, t3.edges), s2.delta.x = t3.coords.x - t3.pageCoords.x, s2.delta.y = t3.coords.y - t3.pageCoords.y, s2.rectDelta.left = t3.rect.left - i2.left, s2.rectDelta.right = t3.rect.right - i2.right, s2.rectDelta.top = t3.rect.top - i2.top, s2.rectDelta.bottom = t3.rect.bottom - i2.bottom;
          var h2 = this.result.coords, v2 = this.result.rect;
          if (h2 && v2) {
            var g2 = s2.rect.left !== v2.left || s2.rect.right !== v2.right || s2.rect.top !== v2.top || s2.rect.bottom !== v2.bottom;
            s2.changed = g2 || h2.x !== s2.coords.x || h2.y !== s2.coords.y;
          }
          return s2;
        } }, { key: "applyToInteraction", value: function(t3) {
          var e2 = this.interaction, n2 = t3.phase, r2 = e2.coords.cur, i2 = e2.coords.start, o2 = this.result, a2 = this.startDelta, s2 = o2.delta;
          "start" === n2 && V(this.startDelta, o2.delta);
          for (var c2 = 0, l2 = [[i2, a2], [r2, s2]]; c2 < l2.length; c2++) {
            var u2 = l2[c2], p2 = u2[0], f2 = u2[1];
            p2.page.x += f2.x, p2.page.y += f2.y, p2.client.x += f2.x, p2.client.y += f2.y;
          }
          var d2 = this.result.rectDelta, h2 = t3.rect || e2.rect;
          h2.left += d2.left, h2.right += d2.right, h2.top += d2.top, h2.bottom += d2.bottom, h2.width = h2.right - h2.left, h2.height = h2.bottom - h2.top;
        } }, { key: "setAndApply", value: function(t3) {
          var e2 = this.interaction, n2 = t3.phase, r2 = t3.preEnd, i2 = t3.skipModifiers, o2 = this.setAll(this.fillArg({ preEnd: r2, phase: n2, pageCoords: t3.modifiedCoords || e2.coords.cur.page }));
          if (this.result = o2, !o2.changed && (!i2 || i2 < this.states.length) && e2.interacting()) return false;
          if (t3.modifiedCoords) {
            var a2 = e2.coords.cur.page, s2 = { x: t3.modifiedCoords.x - a2.x, y: t3.modifiedCoords.y - a2.y };
            o2.coords.x += s2.x, o2.coords.y += s2.y, o2.delta.x += s2.x, o2.delta.y += s2.y;
          }
          this.applyToInteraction(t3);
        } }, { key: "beforeEnd", value: function(t3) {
          var e2 = t3.interaction, n2 = t3.event, r2 = this.states;
          if (r2 && r2.length) {
            for (var i2 = false, o2 = 0; o2 < r2.length; o2++) {
              var a2 = r2[o2];
              t3.state = a2;
              var s2 = a2.options, c2 = a2.methods, l2 = c2.beforeEnd && c2.beforeEnd(t3);
              if (l2) return this.endResult = l2, false;
              i2 = i2 || !i2 && this.shouldDo(s2, true, t3.phase, true);
            }
            i2 && e2.move({ event: n2, preEnd: true });
          }
        } }, { key: "stop", value: function(t3) {
          var e2 = t3.interaction;
          if (this.states && this.states.length) {
            var n2 = V({ states: this.states, interactable: e2.interactable, element: e2.element, rect: null }, t3);
            this.fillArg(n2);
            for (var r2 = 0, i2 = this.states; r2 < i2.length; r2++) {
              var o2 = i2[r2];
              n2.state = o2, o2.methods.stop && o2.methods.stop(n2);
            }
            this.states = null, this.endResult = null;
          }
        } }, { key: "prepareStates", value: function(t3) {
          this.states = [];
          for (var e2 = 0; e2 < t3.length; e2++) {
            var n2 = t3[e2], r2 = n2.options, i2 = n2.methods, o2 = n2.name;
            this.states.push({ options: r2, methods: i2, index: e2, name: o2 });
          }
          return this.states;
        } }, { key: "restoreInteractionCoords", value: function(t3) {
          var e2 = t3.interaction, n2 = e2.coords, r2 = e2.rect, i2 = e2.modification;
          if (i2.result) {
            for (var o2 = i2.startDelta, a2 = i2.result, s2 = a2.delta, c2 = a2.rectDelta, l2 = 0, u2 = [[n2.start, o2], [n2.cur, s2]]; l2 < u2.length; l2++) {
              var p2 = u2[l2], f2 = p2[0], d2 = p2[1];
              f2.page.x -= d2.x, f2.page.y -= d2.y, f2.client.x -= d2.x, f2.client.y -= d2.y;
            }
            r2.left -= c2.left, r2.right -= c2.right, r2.top -= c2.top, r2.bottom -= c2.bottom;
          }
        } }, { key: "shouldDo", value: function(t3, e2, n2, r2) {
          return !(!t3 || false === t3.enabled || r2 && !t3.endOnly || t3.endOnly && !e2 || "start" === n2 && !t3.setStart);
        } }, { key: "copyFrom", value: function(t3) {
          this.startOffset = t3.startOffset, this.startDelta = t3.startDelta, this.startEdges = t3.startEdges, this.edges = t3.edges, this.states = t3.states.map(function(t4) {
            return ge(t4);
          }), this.result = ye(V({}, t3.result.coords), V({}, t3.result.rect));
        } }, { key: "destroy", value: function() {
          for (var t3 in this) this[t3] = null;
        } }]), t2;
      }();
      function ye(t2, e2) {
        return { rect: e2, coords: t2, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: true };
      }
      function be(t2, e2) {
        var n2 = t2.defaults, r2 = { start: t2.start, set: t2.set, beforeEnd: t2.beforeEnd, stop: t2.stop }, i2 = function(t3) {
          var i3 = t3 || {};
          for (var o2 in i3.enabled = false !== i3.enabled, n2) o2 in i3 || (i3[o2] = n2[o2]);
          var a2 = { options: i3, methods: r2, name: e2, enable: function() {
            return i3.enabled = true, a2;
          }, disable: function() {
            return i3.enabled = false, a2;
          } };
          return a2;
        };
        return e2 && "string" == typeof e2 && (i2._defaults = n2, i2._methods = r2), i2;
      }
      function xe(t2) {
        var e2 = t2.iEvent, n2 = t2.interaction.modification.result;
        n2 && (e2.modifiers = n2.eventProps);
      }
      var we = { id: "modifiers/base", before: ["actions"], install: function(t2) {
        t2.defaults.perAction.modifiers = [];
      }, listeners: { "interactions:new": function(t2) {
        var e2 = t2.interaction;
        e2.modification = new me(e2);
      }, "interactions:before-action-start": function(t2) {
        var e2 = t2.interaction, n2 = t2.interaction.modification;
        n2.start(t2, e2.coords.start.page), e2.edges = n2.edges, n2.applyToInteraction(t2);
      }, "interactions:before-action-move": function(t2) {
        var e2 = t2.interaction, n2 = e2.modification, r2 = n2.setAndApply(t2);
        return e2.edges = n2.edges, r2;
      }, "interactions:before-action-end": function(t2) {
        var e2 = t2.interaction, n2 = e2.modification, r2 = n2.beforeEnd(t2);
        return e2.edges = n2.startEdges, r2;
      }, "interactions:action-start": xe, "interactions:action-move": xe, "interactions:action-end": xe, "interactions:after-action-start": function(t2) {
        return t2.interaction.modification.restoreInteractionCoords(t2);
      }, "interactions:after-action-move": function(t2) {
        return t2.interaction.modification.restoreInteractionCoords(t2);
      }, "interactions:stop": function(t2) {
        return t2.interaction.modification.stop(t2);
      } } }, Ee = we, Te = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: false, origin: { x: 0, y: 0 } }, actions: {} }, Se = function(t2) {
        s(n2, t2);
        var e2 = p(n2);
        function n2(t3, i2, o2, a2, s2, c2, l2) {
          var p2;
          r(this, n2), (p2 = e2.call(this, t3)).relatedTarget = null, p2.screenX = void 0, p2.screenY = void 0, p2.button = void 0, p2.buttons = void 0, p2.ctrlKey = void 0, p2.shiftKey = void 0, p2.altKey = void 0, p2.metaKey = void 0, p2.page = void 0, p2.client = void 0, p2.delta = void 0, p2.rect = void 0, p2.x0 = void 0, p2.y0 = void 0, p2.t0 = void 0, p2.dt = void 0, p2.duration = void 0, p2.clientX0 = void 0, p2.clientY0 = void 0, p2.velocity = void 0, p2.speed = void 0, p2.swipe = void 0, p2.axes = void 0, p2.preEnd = void 0, s2 = s2 || t3.element;
          var f2 = t3.interactable, d2 = (f2 && f2.options || Te).deltaSource, h2 = K(f2, s2, o2), v2 = "start" === a2, g2 = "end" === a2, m2 = v2 ? u(p2) : t3.prevEvent, y2 = v2 ? t3.coords.start : g2 ? { page: m2.page, client: m2.client, timeStamp: t3.coords.cur.timeStamp } : t3.coords.cur;
          return p2.page = V({}, y2.page), p2.client = V({}, y2.client), p2.rect = V({}, t3.rect), p2.timeStamp = y2.timeStamp, g2 || (p2.page.x -= h2.x, p2.page.y -= h2.y, p2.client.x -= h2.x, p2.client.y -= h2.y), p2.ctrlKey = i2.ctrlKey, p2.altKey = i2.altKey, p2.shiftKey = i2.shiftKey, p2.metaKey = i2.metaKey, p2.button = i2.button, p2.buttons = i2.buttons, p2.target = s2, p2.currentTarget = s2, p2.preEnd = c2, p2.type = l2 || o2 + (a2 || ""), p2.interactable = f2, p2.t0 = v2 ? t3.pointers[t3.pointers.length - 1].downTime : m2.t0, p2.x0 = t3.coords.start.page.x - h2.x, p2.y0 = t3.coords.start.page.y - h2.y, p2.clientX0 = t3.coords.start.client.x - h2.x, p2.clientY0 = t3.coords.start.client.y - h2.y, p2.delta = v2 || g2 ? { x: 0, y: 0 } : { x: p2[d2].x - m2[d2].x, y: p2[d2].y - m2[d2].y }, p2.dt = t3.coords.delta.timeStamp, p2.duration = p2.timeStamp - p2.t0, p2.velocity = V({}, t3.coords.velocity[d2]), p2.speed = Q(p2.velocity.x, p2.velocity.y), p2.swipe = g2 || "inertiastart" === a2 ? p2.getSwipe() : null, p2;
        }
        return o(n2, [{ key: "getSwipe", value: function() {
          var t3 = this._interaction;
          if (t3.prevEvent.speed < 600 || this.timeStamp - t3.prevEvent.timeStamp > 150) return null;
          var e3 = 180 * Math.atan2(t3.prevEvent.velocityY, t3.prevEvent.velocityX) / Math.PI;
          e3 < 0 && (e3 += 360);
          var n3 = 112.5 <= e3 && e3 < 247.5, r2 = 202.5 <= e3 && e3 < 337.5;
          return { up: r2, down: !r2 && 22.5 <= e3 && e3 < 157.5, left: n3, right: !n3 && (292.5 <= e3 || e3 < 67.5), angle: e3, speed: t3.prevEvent.speed, velocity: { x: t3.prevEvent.velocityX, y: t3.prevEvent.velocityY } };
        } }, { key: "preventDefault", value: function() {
        } }, { key: "stopImmediatePropagation", value: function() {
          this.immediatePropagationStopped = this.propagationStopped = true;
        } }, { key: "stopPropagation", value: function() {
          this.propagationStopped = true;
        } }]), n2;
      }(vt);
      Object.defineProperties(Se.prototype, { pageX: { get: function() {
        return this.page.x;
      }, set: function(t2) {
        this.page.x = t2;
      } }, pageY: { get: function() {
        return this.page.y;
      }, set: function(t2) {
        this.page.y = t2;
      } }, clientX: { get: function() {
        return this.client.x;
      }, set: function(t2) {
        this.client.x = t2;
      } }, clientY: { get: function() {
        return this.client.y;
      }, set: function(t2) {
        this.client.y = t2;
      } }, dx: { get: function() {
        return this.delta.x;
      }, set: function(t2) {
        this.delta.x = t2;
      } }, dy: { get: function() {
        return this.delta.y;
      }, set: function(t2) {
        this.delta.y = t2;
      } }, velocityX: { get: function() {
        return this.velocity.x;
      }, set: function(t2) {
        this.velocity.x = t2;
      } }, velocityY: { get: function() {
        return this.velocity.y;
      }, set: function(t2) {
        this.velocity.y = t2;
      } } });
      var _e = o(function t2(e2, n2, i2, o2, a2) {
        r(this, t2), this.id = void 0, this.pointer = void 0, this.event = void 0, this.downTime = void 0, this.downTarget = void 0, this.id = e2, this.pointer = n2, this.event = i2, this.downTime = o2, this.downTarget = a2;
      }), Pe = function(t2) {
        return t2.interactable = "", t2.element = "", t2.prepared = "", t2.pointerIsDown = "", t2.pointerWasMoved = "", t2._proxy = "", t2;
      }({}), Oe = function(t2) {
        return t2.start = "", t2.move = "", t2.end = "", t2.stop = "", t2.interacting = "", t2;
      }({}), ke = 0, De = function() {
        function t2(e2) {
          var n2 = this, i2 = e2.pointerType, o2 = e2.scopeFire;
          r(this, t2), this.interactable = null, this.element = null, this.rect = null, this._rects = void 0, this.edges = null, this._scopeFire = void 0, this.prepared = { name: null, axis: null, edges: null }, this.pointerType = void 0, this.pointers = [], this.downEvent = null, this.downPointer = {}, this._latestPointer = { pointer: null, event: null, eventTarget: null }, this.prevEvent = null, this.pointerIsDown = false, this.pointerWasMoved = false, this._interacting = false, this._ending = false, this._stopped = true, this._proxy = void 0, this.simulation = null, this.doMove = Nt(function(t3) {
            this.move(t3);
          }, "The interaction.doMove() method has been renamed to interaction.move()"), this.coords = { start: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, prev: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, cur: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, delta: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, velocity: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 } }, this._id = ke++, this._scopeFire = o2, this.pointerType = i2;
          var a2 = this;
          this._proxy = {};
          var s2 = function(t3) {
            Object.defineProperty(n2._proxy, t3, { get: function() {
              return a2[t3];
            } });
          };
          for (var c2 in Pe) s2(c2);
          var l2 = function(t3) {
            Object.defineProperty(n2._proxy, t3, { value: function() {
              return a2[t3].apply(a2, arguments);
            } });
          };
          for (var u2 in Oe) l2(u2);
          this._scopeFire("interactions:new", { interaction: this });
        }
        return o(t2, [{ key: "pointerMoveTolerance", get: function() {
          return 1;
        } }, { key: "pointerDown", value: function(t3, e2, n2) {
          var r2 = this.updatePointer(t3, e2, n2, true), i2 = this.pointers[r2];
          this._scopeFire("interactions:down", { pointer: t3, event: e2, eventTarget: n2, pointerIndex: r2, pointerInfo: i2, type: "down", interaction: this });
        } }, { key: "start", value: function(t3, e2, n2) {
          return !(this.interacting() || !this.pointerIsDown || this.pointers.length < ("gesture" === t3.name ? 2 : 1) || !e2.options[t3.name].enabled) && (Ut(this.prepared, t3), this.interactable = e2, this.element = n2, this.rect = e2.getRect(n2), this.edges = this.prepared.edges ? V({}, this.prepared.edges) : { left: true, right: true, top: true, bottom: true }, this._stopped = false, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
        } }, { key: "pointerMove", value: function(t3, e2, n2) {
          this.simulation || this.modification && this.modification.endResult || this.updatePointer(t3, e2, n2, false);
          var r2, i2, o2 = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
          this.pointerIsDown && !this.pointerWasMoved && (r2 = this.coords.cur.client.x - this.coords.start.client.x, i2 = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = Q(r2, i2) > this.pointerMoveTolerance);
          var a2, s2, c2, l2 = this.getPointerIndex(t3), u2 = { pointer: t3, pointerIndex: l2, pointerInfo: this.pointers[l2], event: e2, type: "move", eventTarget: n2, dx: r2, dy: i2, duplicate: o2, interaction: this };
          o2 || (a2 = this.coords.velocity, s2 = this.coords.delta, c2 = Math.max(s2.timeStamp / 1e3, 1e-3), a2.page.x = s2.page.x / c2, a2.page.y = s2.page.y / c2, a2.client.x = s2.client.x / c2, a2.client.y = s2.client.y / c2, a2.timeStamp = c2), this._scopeFire("interactions:move", u2), o2 || this.simulation || (this.interacting() && (u2.type = null, this.move(u2)), this.pointerWasMoved && et(this.coords.prev, this.coords.cur));
        } }, { key: "move", value: function(t3) {
          t3 && t3.event || nt(this.coords.delta), (t3 = V({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, t3 || {})).phase = "move", this._doPhase(t3);
        } }, { key: "pointerUp", value: function(t3, e2, n2, r2) {
          var i2 = this.getPointerIndex(t3);
          -1 === i2 && (i2 = this.updatePointer(t3, e2, n2, false));
          var o2 = /cancel$/i.test(e2.type) ? "cancel" : "up";
          this._scopeFire("interactions:".concat(o2), { pointer: t3, pointerIndex: i2, pointerInfo: this.pointers[i2], event: e2, eventTarget: n2, type: o2, curEventTarget: r2, interaction: this }), this.simulation || this.end(e2), this.removePointer(t3, e2);
        } }, { key: "documentBlur", value: function(t3) {
          this.end(t3), this._scopeFire("interactions:blur", { event: t3, type: "blur", interaction: this });
        } }, { key: "end", value: function(t3) {
          var e2;
          this._ending = true, t3 = t3 || this._latestPointer.event, this.interacting() && (e2 = this._doPhase({ event: t3, interaction: this, phase: "end" })), this._ending = false, true === e2 && this.stop();
        } }, { key: "currentAction", value: function() {
          return this._interacting ? this.prepared.name : null;
        } }, { key: "interacting", value: function() {
          return this._interacting;
        } }, { key: "stop", value: function() {
          this._scopeFire("interactions:stop", { interaction: this }), this.interactable = this.element = null, this._interacting = false, this._stopped = true, this.prepared.name = this.prevEvent = null;
        } }, { key: "getPointerIndex", value: function(t3) {
          var e2 = at(t3);
          return "mouse" === this.pointerType || "pen" === this.pointerType ? this.pointers.length - 1 : yt(this.pointers, function(t4) {
            return t4.id === e2;
          });
        } }, { key: "getPointerInfo", value: function(t3) {
          return this.pointers[this.getPointerIndex(t3)];
        } }, { key: "updatePointer", value: function(t3, e2, n2, r2) {
          var i2, o2, a2, s2 = at(t3), c2 = this.getPointerIndex(t3), l2 = this.pointers[c2];
          return r2 = false !== r2 && (r2 || /(down|start)$/i.test(e2.type)), l2 ? l2.pointer = t3 : (l2 = new _e(s2, t3, e2, null, null), c2 = this.pointers.length, this.pointers.push(l2)), st(this.coords.cur, this.pointers.map(function(t4) {
            return t4.pointer;
          }), this._now()), i2 = this.coords.delta, o2 = this.coords.prev, a2 = this.coords.cur, i2.page.x = a2.page.x - o2.page.x, i2.page.y = a2.page.y - o2.page.y, i2.client.x = a2.client.x - o2.client.x, i2.client.y = a2.client.y - o2.client.y, i2.timeStamp = a2.timeStamp - o2.timeStamp, r2 && (this.pointerIsDown = true, l2.downTime = this.coords.cur.timeStamp, l2.downTarget = n2, tt(this.downPointer, t3), this.interacting() || (et(this.coords.start, this.coords.cur), et(this.coords.prev, this.coords.cur), this.downEvent = e2, this.pointerWasMoved = false)), this._updateLatestPointer(t3, e2, n2), this._scopeFire("interactions:update-pointer", { pointer: t3, event: e2, eventTarget: n2, down: r2, pointerInfo: l2, pointerIndex: c2, interaction: this }), c2;
        } }, { key: "removePointer", value: function(t3, e2) {
          var n2 = this.getPointerIndex(t3);
          if (-1 !== n2) {
            var r2 = this.pointers[n2];
            this._scopeFire("interactions:remove-pointer", { pointer: t3, event: e2, eventTarget: null, pointerIndex: n2, pointerInfo: r2, interaction: this }), this.pointers.splice(n2, 1), this.pointerIsDown = false;
          }
        } }, { key: "_updateLatestPointer", value: function(t3, e2, n2) {
          this._latestPointer.pointer = t3, this._latestPointer.event = e2, this._latestPointer.eventTarget = n2;
        } }, { key: "destroy", value: function() {
          this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
        } }, { key: "_createPreparedEvent", value: function(t3, e2, n2, r2) {
          return new Se(this, t3, this.prepared.name, e2, this.element, n2, r2);
        } }, { key: "_fireEvent", value: function(t3) {
          var e2;
          null == (e2 = this.interactable) || e2.fire(t3), (!this.prevEvent || t3.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = t3);
        } }, { key: "_doPhase", value: function(t3) {
          var e2 = t3.event, n2 = t3.phase, r2 = t3.preEnd, i2 = t3.type, o2 = this.rect;
          if (o2 && "move" === n2 && (H(this.edges, o2, this.coords.delta[this.interactable.options.deltaSource]), o2.width = o2.right - o2.left, o2.height = o2.bottom - o2.top), false === this._scopeFire("interactions:before-action-".concat(n2), t3)) return false;
          var a2 = t3.iEvent = this._createPreparedEvent(e2, n2, r2, i2);
          return this._scopeFire("interactions:action-".concat(n2), t3), "start" === n2 && (this.prevEvent = a2), this._fireEvent(a2), this._scopeFire("interactions:after-action-".concat(n2), t3), true;
        } }, { key: "_now", value: function() {
          return Date.now();
        } }]), t2;
      }();
      function Ie(t2) {
        Me(t2.interaction);
      }
      function Me(t2) {
        if (!function(t3) {
          return !(!t3.offset.pending.x && !t3.offset.pending.y);
        }(t2)) return false;
        var e2 = t2.offset.pending;
        return Ae(t2.coords.cur, e2), Ae(t2.coords.delta, e2), H(t2.edges, t2.rect, e2), e2.x = 0, e2.y = 0, true;
      }
      function ze(t2) {
        var e2 = t2.x, n2 = t2.y;
        this.offset.pending.x += e2, this.offset.pending.y += n2, this.offset.total.x += e2, this.offset.total.y += n2;
      }
      function Ae(t2, e2) {
        var n2 = t2.page, r2 = t2.client, i2 = e2.x, o2 = e2.y;
        n2.x += i2, n2.y += o2, r2.x += i2, r2.y += o2;
      }
      Oe.offsetBy = "";
      var Re = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(t2) {
        t2.Interaction.prototype.offsetBy = ze;
      }, listeners: { "interactions:new": function(t2) {
        t2.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
      }, "interactions:update-pointer": function(t2) {
        return function(t3) {
          t3.pointerIsDown && (Ae(t3.coords.cur, t3.offset.total), t3.offset.pending.x = 0, t3.offset.pending.y = 0);
        }(t2.interaction);
      }, "interactions:before-action-start": Ie, "interactions:before-action-move": Ie, "interactions:before-action-end": function(t2) {
        var e2 = t2.interaction;
        if (Me(e2)) return e2.move({ offset: true }), e2.end(), false;
      }, "interactions:stop": function(t2) {
        var e2 = t2.interaction;
        e2.offset.total.x = 0, e2.offset.total.y = 0, e2.offset.pending.x = 0, e2.offset.pending.y = 0;
      } } }, Ce = Re;
      var je = function() {
        function t2(e2) {
          r(this, t2), this.active = false, this.isModified = false, this.smoothEnd = false, this.allowResume = false, this.modification = void 0, this.modifierCount = 0, this.modifierArg = void 0, this.startCoords = void 0, this.t0 = 0, this.v0 = 0, this.te = 0, this.targetOffset = void 0, this.modifiedOffset = void 0, this.currentOffset = void 0, this.lambda_v0 = 0, this.one_ve_v0 = 0, this.timeout = void 0, this.interaction = void 0, this.interaction = e2;
        }
        return o(t2, [{ key: "start", value: function(t3) {
          var e2 = this.interaction, n2 = Fe(e2);
          if (!n2 || !n2.enabled) return false;
          var r2 = e2.coords.velocity.client, i2 = Q(r2.x, r2.y), o2 = this.modification || (this.modification = new me(e2));
          if (o2.copyFrom(e2.modification), this.t0 = e2._now(), this.allowResume = n2.allowResume, this.v0 = i2, this.currentOffset = { x: 0, y: 0 }, this.startCoords = e2.coords.cur.page, this.modifierArg = o2.fillArg({ pageCoords: this.startCoords, preEnd: true, phase: "inertiastart" }), this.t0 - e2.coords.cur.timeStamp < 50 && i2 > n2.minSpeed && i2 > n2.endSpeed) this.startInertia();
          else {
            if (o2.result = o2.setAll(this.modifierArg), !o2.result.changed) return false;
            this.startSmoothEnd();
          }
          return e2.modification.result.rect = null, e2.offsetBy(this.targetOffset), e2._doPhase({ interaction: e2, event: t3, phase: "inertiastart" }), e2.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), e2.modification.result.rect = null, this.active = true, e2.simulation = this, true;
        } }, { key: "startInertia", value: function() {
          var t3 = this, e2 = this.interaction.coords.velocity.client, n2 = Fe(this.interaction), r2 = n2.resistance, i2 = -Math.log(n2.endSpeed / this.v0) / r2;
          this.targetOffset = { x: (e2.x - i2) / r2, y: (e2.y - i2) / r2 }, this.te = i2, this.lambda_v0 = r2 / this.v0, this.one_ve_v0 = 1 - n2.endSpeed / this.v0;
          var o2 = this.modification, a2 = this.modifierArg;
          a2.pageCoords = { x: this.startCoords.x + this.targetOffset.x, y: this.startCoords.y + this.targetOffset.y }, o2.result = o2.setAll(a2), o2.result.changed && (this.isModified = true, this.modifiedOffset = { x: this.targetOffset.x + o2.result.delta.x, y: this.targetOffset.y + o2.result.delta.y }), this.onNextFrame(function() {
            return t3.inertiaTick();
          });
        } }, { key: "startSmoothEnd", value: function() {
          var t3 = this;
          this.smoothEnd = true, this.isModified = true, this.targetOffset = { x: this.modification.result.delta.x, y: this.modification.result.delta.y }, this.onNextFrame(function() {
            return t3.smoothEndTick();
          });
        } }, { key: "onNextFrame", value: function(t3) {
          var e2 = this;
          this.timeout = Lt.request(function() {
            e2.active && t3();
          });
        } }, { key: "inertiaTick", value: function() {
          var t3, e2, n2, r2, i2, o2, a2, s2 = this, c2 = this.interaction, l2 = Fe(c2).resistance, u2 = (c2._now() - this.t0) / 1e3;
          if (u2 < this.te) {
            var p2, f2 = 1 - (Math.exp(-l2 * u2) - this.lambda_v0) / this.one_ve_v0;
            this.isModified ? (t3 = 0, e2 = 0, n2 = this.targetOffset.x, r2 = this.targetOffset.y, i2 = this.modifiedOffset.x, o2 = this.modifiedOffset.y, p2 = { x: Ye(a2 = f2, t3, n2, i2), y: Ye(a2, e2, r2, o2) }) : p2 = { x: this.targetOffset.x * f2, y: this.targetOffset.y * f2 };
            var d2 = { x: p2.x - this.currentOffset.x, y: p2.y - this.currentOffset.y };
            this.currentOffset.x += d2.x, this.currentOffset.y += d2.y, c2.offsetBy(d2), c2.move(), this.onNextFrame(function() {
              return s2.inertiaTick();
            });
          } else c2.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
        } }, { key: "smoothEndTick", value: function() {
          var t3 = this, e2 = this.interaction, n2 = e2._now() - this.t0, r2 = Fe(e2).smoothEndDuration;
          if (n2 < r2) {
            var i2 = { x: Le(n2, 0, this.targetOffset.x, r2), y: Le(n2, 0, this.targetOffset.y, r2) }, o2 = { x: i2.x - this.currentOffset.x, y: i2.y - this.currentOffset.y };
            this.currentOffset.x += o2.x, this.currentOffset.y += o2.y, e2.offsetBy(o2), e2.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
              return t3.smoothEndTick();
            });
          } else e2.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
        } }, { key: "resume", value: function(t3) {
          var e2 = t3.pointer, n2 = t3.event, r2 = t3.eventTarget, i2 = this.interaction;
          i2.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), i2.updatePointer(e2, n2, r2, true), i2._doPhase({ interaction: i2, event: n2, phase: "resume" }), et(i2.coords.prev, i2.coords.cur), this.stop();
        } }, { key: "end", value: function() {
          this.interaction.move(), this.interaction.end(), this.stop();
        } }, { key: "stop", value: function() {
          this.active = this.smoothEnd = false, this.interaction.simulation = null, Lt.cancel(this.timeout);
        } }]), t2;
      }();
      function Fe(t2) {
        var e2 = t2.interactable, n2 = t2.prepared;
        return e2 && e2.options && n2.name && e2.options[n2.name].inertia;
      }
      var Xe = { id: "inertia", before: ["modifiers", "actions"], install: function(t2) {
        var e2 = t2.defaults;
        t2.usePlugin(Ce), t2.usePlugin(Ee), t2.actions.phases.inertiastart = true, t2.actions.phases.resume = true, e2.perAction.inertia = { enabled: false, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: true, smoothEndDuration: 300 };
      }, listeners: { "interactions:new": function(t2) {
        var e2 = t2.interaction;
        e2.inertia = new je(e2);
      }, "interactions:before-action-end": function(t2) {
        var e2 = t2.interaction, n2 = t2.event;
        return (!e2._interacting || e2.simulation || !e2.inertia.start(n2)) && null;
      }, "interactions:down": function(t2) {
        var e2 = t2.interaction, n2 = t2.eventTarget, r2 = e2.inertia;
        if (r2.active) for (var i2 = n2; w.element(i2); ) {
          if (i2 === e2.element) {
            r2.resume(t2);
            break;
          }
          i2 = A(i2);
        }
      }, "interactions:stop": function(t2) {
        var e2 = t2.interaction.inertia;
        e2.active && e2.stop();
      }, "interactions:before-action-resume": function(t2) {
        var e2 = t2.interaction.modification;
        e2.stop(t2), e2.start(t2, t2.interaction.coords.cur.page), e2.applyToInteraction(t2);
      }, "interactions:before-action-inertiastart": function(t2) {
        return t2.interaction.modification.setAndApply(t2);
      }, "interactions:action-resume": xe, "interactions:action-inertiastart": xe, "interactions:after-action-inertiastart": function(t2) {
        return t2.interaction.modification.restoreInteractionCoords(t2);
      }, "interactions:after-action-resume": function(t2) {
        return t2.interaction.modification.restoreInteractionCoords(t2);
      } } };
      function Ye(t2, e2, n2, r2) {
        var i2 = 1 - t2;
        return i2 * i2 * e2 + 2 * i2 * t2 * n2 + t2 * t2 * r2;
      }
      function Le(t2, e2, n2, r2) {
        return -n2 * (t2 /= r2) * (t2 - 2) + e2;
      }
      var qe = Xe;
      function Be(t2, e2) {
        for (var n2 = 0; n2 < e2.length; n2++) {
          var r2 = e2[n2];
          if (t2.immediatePropagationStopped) break;
          r2(t2);
        }
      }
      var Ve = function() {
        function t2(e2) {
          r(this, t2), this.options = void 0, this.types = {}, this.propagationStopped = false, this.immediatePropagationStopped = false, this.global = void 0, this.options = V({}, e2 || {});
        }
        return o(t2, [{ key: "fire", value: function(t3) {
          var e2, n2 = this.global;
          (e2 = this.types[t3.type]) && Be(t3, e2), !t3.propagationStopped && n2 && (e2 = n2[t3.type]) && Be(t3, e2);
        } }, { key: "on", value: function(t3, e2) {
          var n2 = $(t3, e2);
          for (t3 in n2) this.types[t3] = gt(this.types[t3] || [], n2[t3]);
        } }, { key: "off", value: function(t3, e2) {
          var n2 = $(t3, e2);
          for (t3 in n2) {
            var r2 = this.types[t3];
            if (r2 && r2.length) for (var i2 = 0, o2 = n2[t3]; i2 < o2.length; i2++) {
              var a2 = o2[i2], s2 = r2.indexOf(a2);
              -1 !== s2 && r2.splice(s2, 1);
            }
          }
        } }, { key: "getRect", value: function(t3) {
          return null;
        } }]), t2;
      }();
      var We = function() {
        function t2(e2) {
          r(this, t2), this.currentTarget = void 0, this.originalEvent = void 0, this.type = void 0, this.originalEvent = e2, tt(this, e2);
        }
        return o(t2, [{ key: "preventOriginalDefault", value: function() {
          this.originalEvent.preventDefault();
        } }, { key: "stopPropagation", value: function() {
          this.originalEvent.stopPropagation();
        } }, { key: "stopImmediatePropagation", value: function() {
          this.originalEvent.stopImmediatePropagation();
        } }]), t2;
      }();
      function Ge(t2) {
        return w.object(t2) ? { capture: !!t2.capture, passive: !!t2.passive } : { capture: !!t2, passive: false };
      }
      function Ne(t2, e2) {
        return t2 === e2 || ("boolean" == typeof t2 ? !!e2.capture === t2 && false == !!e2.passive : !!t2.capture == !!e2.capture && !!t2.passive == !!e2.passive);
      }
      var Ue = { id: "events", install: function(t2) {
        var e2, n2 = [], r2 = {}, i2 = [], o2 = { add: a2, remove: s2, addDelegate: function(t3, e3, n3, o3, s3) {
          var u2 = Ge(s3);
          if (!r2[n3]) {
            r2[n3] = [];
            for (var p2 = 0; p2 < i2.length; p2++) {
              var f2 = i2[p2];
              a2(f2, n3, c2), a2(f2, n3, l2, true);
            }
          }
          var d2 = r2[n3], h2 = bt(d2, function(n4) {
            return n4.selector === t3 && n4.context === e3;
          });
          h2 || (h2 = { selector: t3, context: e3, listeners: [] }, d2.push(h2));
          h2.listeners.push({ func: o3, options: u2 });
        }, removeDelegate: function(t3, e3, n3, i3, o3) {
          var a3, u2 = Ge(o3), p2 = r2[n3], f2 = false;
          if (!p2) return;
          for (a3 = p2.length - 1; a3 >= 0; a3--) {
            var d2 = p2[a3];
            if (d2.selector === t3 && d2.context === e3) {
              for (var h2 = d2.listeners, v2 = h2.length - 1; v2 >= 0; v2--) {
                var g2 = h2[v2];
                if (g2.func === i3 && Ne(g2.options, u2)) {
                  h2.splice(v2, 1), h2.length || (p2.splice(a3, 1), s2(e3, n3, c2), s2(e3, n3, l2, true)), f2 = true;
                  break;
                }
              }
              if (f2) break;
            }
          }
        }, delegateListener: c2, delegateUseCapture: l2, delegatedEvents: r2, documents: i2, targets: n2, supportsOptions: false, supportsPassive: false };
        function a2(t3, e3, r3, i3) {
          if (t3.addEventListener) {
            var a3 = Ge(i3), s3 = bt(n2, function(e4) {
              return e4.eventTarget === t3;
            });
            s3 || (s3 = { eventTarget: t3, events: {} }, n2.push(s3)), s3.events[e3] || (s3.events[e3] = []), bt(s3.events[e3], function(t4) {
              return t4.func === r3 && Ne(t4.options, a3);
            }) || (t3.addEventListener(e3, r3, o2.supportsOptions ? a3 : a3.capture), s3.events[e3].push({ func: r3, options: a3 }));
          }
        }
        function s2(t3, e3, r3, i3) {
          if (t3.addEventListener && t3.removeEventListener) {
            var a3 = yt(n2, function(e4) {
              return e4.eventTarget === t3;
            }), c3 = n2[a3];
            if (c3 && c3.events) if ("all" !== e3) {
              var l3 = false, u2 = c3.events[e3];
              if (u2) {
                if ("all" === r3) {
                  for (var p2 = u2.length - 1; p2 >= 0; p2--) {
                    var f2 = u2[p2];
                    s2(t3, e3, f2.func, f2.options);
                  }
                  return;
                }
                for (var d2 = Ge(i3), h2 = 0; h2 < u2.length; h2++) {
                  var v2 = u2[h2];
                  if (v2.func === r3 && Ne(v2.options, d2)) {
                    t3.removeEventListener(e3, r3, o2.supportsOptions ? d2 : d2.capture), u2.splice(h2, 1), 0 === u2.length && (delete c3.events[e3], l3 = true);
                    break;
                  }
                }
              }
              l3 && !Object.keys(c3.events).length && n2.splice(a3, 1);
            } else for (e3 in c3.events) c3.events.hasOwnProperty(e3) && s2(t3, e3, "all");
          }
        }
        function c2(t3, e3) {
          for (var n3 = Ge(e3), i3 = new We(t3), o3 = r2[t3.type], a3 = ht(t3)[0], s3 = a3; w.element(s3); ) {
            for (var c3 = 0; c3 < o3.length; c3++) {
              var l3 = o3[c3], u2 = l3.selector, p2 = l3.context;
              if (R(s3, u2) && M(p2, a3) && M(p2, s3)) {
                var f2 = l3.listeners;
                i3.currentTarget = s3;
                for (var d2 = 0; d2 < f2.length; d2++) {
                  var h2 = f2[d2];
                  Ne(h2.options, n3) && h2.func(i3);
                }
              }
            }
            s3 = A(s3);
          }
        }
        function l2(t3) {
          return c2(t3, true);
        }
        return null == (e2 = t2.document) || e2.createElement("div").addEventListener("test", null, { get capture() {
          return o2.supportsOptions = true;
        }, get passive() {
          return o2.supportsPassive = true;
        } }), t2.events = o2, o2;
      } }, He = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function(t2) {
        for (var e2 = 0, n2 = He.methodOrder; e2 < n2.length; e2++) {
          var r2 = n2[e2], i2 = He[r2](t2);
          if (i2) return i2;
        }
        return null;
      }, simulationResume: function(t2) {
        var e2 = t2.pointerType, n2 = t2.eventType, r2 = t2.eventTarget, i2 = t2.scope;
        if (!/down|start/i.test(n2)) return null;
        for (var o2 = 0, a2 = i2.interactions.list; o2 < a2.length; o2++) {
          var s2 = a2[o2], c2 = r2;
          if (s2.simulation && s2.simulation.allowResume && s2.pointerType === e2) for (; c2; ) {
            if (c2 === s2.element) return s2;
            c2 = A(c2);
          }
        }
        return null;
      }, mouseOrPen: function(t2) {
        var e2, n2 = t2.pointerId, r2 = t2.pointerType, i2 = t2.eventType, o2 = t2.scope;
        if ("mouse" !== r2 && "pen" !== r2) return null;
        for (var a2 = 0, s2 = o2.interactions.list; a2 < s2.length; a2++) {
          var c2 = s2[a2];
          if (c2.pointerType === r2) {
            if (c2.simulation && !Ke(c2, n2)) continue;
            if (c2.interacting()) return c2;
            e2 || (e2 = c2);
          }
        }
        if (e2) return e2;
        for (var l2 = 0, u2 = o2.interactions.list; l2 < u2.length; l2++) {
          var p2 = u2[l2];
          if (!(p2.pointerType !== r2 || /down/i.test(i2) && p2.simulation)) return p2;
        }
        return null;
      }, hasPointer: function(t2) {
        for (var e2 = t2.pointerId, n2 = 0, r2 = t2.scope.interactions.list; n2 < r2.length; n2++) {
          var i2 = r2[n2];
          if (Ke(i2, e2)) return i2;
        }
        return null;
      }, idle: function(t2) {
        for (var e2 = t2.pointerType, n2 = 0, r2 = t2.scope.interactions.list; n2 < r2.length; n2++) {
          var i2 = r2[n2];
          if (1 === i2.pointers.length) {
            var o2 = i2.interactable;
            if (o2 && (!o2.options.gesture || !o2.options.gesture.enabled)) continue;
          } else if (i2.pointers.length >= 2) continue;
          if (!i2.interacting() && e2 === i2.pointerType) return i2;
        }
        return null;
      } };
      function Ke(t2, e2) {
        return t2.pointers.some(function(t3) {
          return t3.id === e2;
        });
      }
      var $e = He, Je = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
      function Qe(t2, e2) {
        return function(n2) {
          var r2 = e2.interactions.list, i2 = dt(n2), o2 = ht(n2), a2 = o2[0], s2 = o2[1], c2 = [];
          if (/^touch/.test(n2.type)) {
            e2.prevTouchTime = e2.now();
            for (var l2 = 0, u2 = n2.changedTouches; l2 < u2.length; l2++) {
              var p2 = u2[l2], f2 = { pointer: p2, pointerId: at(p2), pointerType: i2, eventType: n2.type, eventTarget: a2, curEventTarget: s2, scope: e2 }, d2 = Ze(f2);
              c2.push([f2.pointer, f2.eventTarget, f2.curEventTarget, d2]);
            }
          } else {
            var h2 = false;
            if (!I.supportsPointerEvent && /mouse/.test(n2.type)) {
              for (var v2 = 0; v2 < r2.length && !h2; v2++) h2 = "mouse" !== r2[v2].pointerType && r2[v2].pointerIsDown;
              h2 = h2 || e2.now() - e2.prevTouchTime < 500 || 0 === n2.timeStamp;
            }
            if (!h2) {
              var g2 = { pointer: n2, pointerId: at(n2), pointerType: i2, eventType: n2.type, curEventTarget: s2, eventTarget: a2, scope: e2 }, m2 = Ze(g2);
              c2.push([g2.pointer, g2.eventTarget, g2.curEventTarget, m2]);
            }
          }
          for (var y2 = 0; y2 < c2.length; y2++) {
            var b2 = c2[y2], x2 = b2[0], w2 = b2[1], E2 = b2[2];
            b2[3][t2](x2, n2, w2, E2);
          }
        };
      }
      function Ze(t2) {
        var e2 = t2.pointerType, n2 = t2.scope, r2 = { interaction: $e.search(t2), searchDetails: t2 };
        return n2.fire("interactions:find", r2), r2.interaction || n2.interactions.new({ pointerType: e2 });
      }
      function tn(t2, e2) {
        var n2 = t2.doc, r2 = t2.scope, i2 = t2.options, o2 = r2.interactions.docEvents, a2 = r2.events, s2 = a2[e2];
        for (var c2 in r2.browser.isIOS && !i2.events && (i2.events = { passive: false }), a2.delegatedEvents) s2(n2, c2, a2.delegateListener), s2(n2, c2, a2.delegateUseCapture, true);
        for (var l2 = i2 && i2.events, u2 = 0; u2 < o2.length; u2++) {
          var p2 = o2[u2];
          s2(n2, p2.type, p2.listener, l2);
        }
      }
      var en = { id: "core/interactions", install: function(t2) {
        for (var e2 = {}, n2 = 0; n2 < Je.length; n2++) {
          var i2 = Je[n2];
          e2[i2] = Qe(i2, t2);
        }
        var a2, c2 = I.pEventTypes;
        function l2() {
          for (var e3 = 0, n3 = t2.interactions.list; e3 < n3.length; e3++) {
            var r2 = n3[e3];
            if (r2.pointerIsDown && "touch" === r2.pointerType && !r2._interacting) for (var i3 = function() {
              var e4 = a3[o2];
              t2.documents.some(function(t3) {
                return M(t3.doc, e4.downTarget);
              }) || r2.removePointer(e4.pointer, e4.event);
            }, o2 = 0, a3 = r2.pointers; o2 < a3.length; o2++) i3();
          }
        }
        (a2 = k.PointerEvent ? [{ type: c2.down, listener: l2 }, { type: c2.down, listener: e2.pointerDown }, { type: c2.move, listener: e2.pointerMove }, { type: c2.up, listener: e2.pointerUp }, { type: c2.cancel, listener: e2.pointerUp }] : [{ type: "mousedown", listener: e2.pointerDown }, { type: "mousemove", listener: e2.pointerMove }, { type: "mouseup", listener: e2.pointerUp }, { type: "touchstart", listener: l2 }, { type: "touchstart", listener: e2.pointerDown }, { type: "touchmove", listener: e2.pointerMove }, { type: "touchend", listener: e2.pointerUp }, { type: "touchcancel", listener: e2.pointerUp }]).push({ type: "blur", listener: function(e3) {
          for (var n3 = 0, r2 = t2.interactions.list; n3 < r2.length; n3++) {
            r2[n3].documentBlur(e3);
          }
        } }), t2.prevTouchTime = 0, t2.Interaction = function(e3) {
          s(i3, e3);
          var n3 = p(i3);
          function i3() {
            return r(this, i3), n3.apply(this, arguments);
          }
          return o(i3, [{ key: "pointerMoveTolerance", get: function() {
            return t2.interactions.pointerMoveTolerance;
          }, set: function(e4) {
            t2.interactions.pointerMoveTolerance = e4;
          } }, { key: "_now", value: function() {
            return t2.now();
          } }]), i3;
        }(De), t2.interactions = { list: [], new: function(e3) {
          e3.scopeFire = function(e4, n4) {
            return t2.fire(e4, n4);
          };
          var n3 = new t2.Interaction(e3);
          return t2.interactions.list.push(n3), n3;
        }, listeners: e2, docEvents: a2, pointerMoveTolerance: 1 }, t2.usePlugin(he);
      }, listeners: { "scope:add-document": function(t2) {
        return tn(t2, "add");
      }, "scope:remove-document": function(t2) {
        return tn(t2, "remove");
      }, "interactable:unset": function(t2, e2) {
        for (var n2 = t2.interactable, r2 = e2.interactions.list.length - 1; r2 >= 0; r2--) {
          var i2 = e2.interactions.list[r2];
          i2.interactable === n2 && (i2.stop(), e2.fire("interactions:destroy", { interaction: i2 }), i2.destroy(), e2.interactions.list.length > 2 && e2.interactions.list.splice(r2, 1));
        }
      } }, onDocSignal: tn, doOnInteractions: Qe, methodNames: Je }, nn = en, rn = function(t2) {
        return t2[t2.On = 0] = "On", t2[t2.Off = 1] = "Off", t2;
      }(rn || {}), on = function() {
        function t2(e2, n2, i2, o2) {
          r(this, t2), this.target = void 0, this.options = void 0, this._actions = void 0, this.events = new Ve(), this._context = void 0, this._win = void 0, this._doc = void 0, this._scopeEvents = void 0, this._actions = n2.actions, this.target = e2, this._context = n2.context || i2, this._win = y(B(e2) ? this._context : e2), this._doc = this._win.document, this._scopeEvents = o2, this.set(n2);
        }
        return o(t2, [{ key: "_defaults", get: function() {
          return { base: {}, perAction: {}, actions: {} };
        } }, { key: "setOnEvents", value: function(t3, e2) {
          return w.func(e2.onstart) && this.on("".concat(t3, "start"), e2.onstart), w.func(e2.onmove) && this.on("".concat(t3, "move"), e2.onmove), w.func(e2.onend) && this.on("".concat(t3, "end"), e2.onend), w.func(e2.oninertiastart) && this.on("".concat(t3, "inertiastart"), e2.oninertiastart), this;
        } }, { key: "updatePerActionListeners", value: function(t3, e2, n2) {
          var r2, i2 = this, o2 = null == (r2 = this._actions.map[t3]) ? void 0 : r2.filterEventType, a2 = function(t4) {
            return (null == o2 || o2(t4)) && ve(t4, i2._actions);
          };
          (w.array(e2) || w.object(e2)) && this._onOff(rn.Off, t3, e2, void 0, a2), (w.array(n2) || w.object(n2)) && this._onOff(rn.On, t3, n2, void 0, a2);
        } }, { key: "setPerAction", value: function(t3, e2) {
          var n2 = this._defaults;
          for (var r2 in e2) {
            var i2 = r2, o2 = this.options[t3], a2 = e2[i2];
            "listeners" === i2 && this.updatePerActionListeners(t3, o2.listeners, a2), w.array(a2) ? o2[i2] = mt(a2) : w.plainObject(a2) ? (o2[i2] = V(o2[i2] || {}, ge(a2)), w.object(n2.perAction[i2]) && "enabled" in n2.perAction[i2] && (o2[i2].enabled = false !== a2.enabled)) : w.bool(a2) && w.object(n2.perAction[i2]) ? o2[i2].enabled = a2 : o2[i2] = a2;
          }
        } }, { key: "getRect", value: function(t3) {
          return t3 = t3 || (w.element(this.target) ? this.target : null), w.string(this.target) && (t3 = t3 || this._context.querySelector(this.target)), L(t3);
        } }, { key: "rectChecker", value: function(t3) {
          var e2 = this;
          return w.func(t3) ? (this.getRect = function(n2) {
            var r2 = V({}, t3.apply(e2, n2));
            return "width" in r2 || (r2.width = r2.right - r2.left, r2.height = r2.bottom - r2.top), r2;
          }, this) : null === t3 ? (delete this.getRect, this) : this.getRect;
        } }, { key: "_backCompatOption", value: function(t3, e2) {
          if (B(e2) || w.object(e2)) {
            for (var n2 in this.options[t3] = e2, this._actions.map) this.options[n2][t3] = e2;
            return this;
          }
          return this.options[t3];
        } }, { key: "origin", value: function(t3) {
          return this._backCompatOption("origin", t3);
        } }, { key: "deltaSource", value: function(t3) {
          return "page" === t3 || "client" === t3 ? (this.options.deltaSource = t3, this) : this.options.deltaSource;
        } }, { key: "getAllElements", value: function() {
          var t3 = this.target;
          return w.string(t3) ? Array.from(this._context.querySelectorAll(t3)) : w.func(t3) && t3.getAllElements ? t3.getAllElements() : w.element(t3) ? [t3] : [];
        } }, { key: "context", value: function() {
          return this._context;
        } }, { key: "inContext", value: function(t3) {
          return this._context === t3.ownerDocument || M(this._context, t3);
        } }, { key: "testIgnoreAllow", value: function(t3, e2, n2) {
          return !this.testIgnore(t3.ignoreFrom, e2, n2) && this.testAllow(t3.allowFrom, e2, n2);
        } }, { key: "testAllow", value: function(t3, e2, n2) {
          return !t3 || !!w.element(n2) && (w.string(t3) ? F(n2, t3, e2) : !!w.element(t3) && M(t3, n2));
        } }, { key: "testIgnore", value: function(t3, e2, n2) {
          return !(!t3 || !w.element(n2)) && (w.string(t3) ? F(n2, t3, e2) : !!w.element(t3) && M(t3, n2));
        } }, { key: "fire", value: function(t3) {
          return this.events.fire(t3), this;
        } }, { key: "_onOff", value: function(t3, e2, n2, r2, i2) {
          w.object(e2) && !w.array(e2) && (r2 = n2, n2 = null);
          var o2 = $(e2, n2, i2);
          for (var a2 in o2) {
            "wheel" === a2 && (a2 = I.wheelEvent);
            for (var s2 = 0, c2 = o2[a2]; s2 < c2.length; s2++) {
              var l2 = c2[s2];
              ve(a2, this._actions) ? this.events[t3 === rn.On ? "on" : "off"](a2, l2) : w.string(this.target) ? this._scopeEvents[t3 === rn.On ? "addDelegate" : "removeDelegate"](this.target, this._context, a2, l2, r2) : this._scopeEvents[t3 === rn.On ? "add" : "remove"](this.target, a2, l2, r2);
            }
          }
          return this;
        } }, { key: "on", value: function(t3, e2, n2) {
          return this._onOff(rn.On, t3, e2, n2);
        } }, { key: "off", value: function(t3, e2, n2) {
          return this._onOff(rn.Off, t3, e2, n2);
        } }, { key: "set", value: function(t3) {
          var e2 = this._defaults;
          for (var n2 in w.object(t3) || (t3 = {}), this.options = ge(e2.base), this._actions.methodDict) {
            var r2 = n2, i2 = this._actions.methodDict[r2];
            this.options[r2] = {}, this.setPerAction(r2, V(V({}, e2.perAction), e2.actions[r2])), this[i2](t3[r2]);
          }
          for (var o2 in t3) "getRect" !== o2 ? w.func(this[o2]) && this[o2](t3[o2]) : this.rectChecker(t3.getRect);
          return this;
        } }, { key: "unset", value: function() {
          if (w.string(this.target)) for (var t3 in this._scopeEvents.delegatedEvents) for (var e2 = this._scopeEvents.delegatedEvents[t3], n2 = e2.length - 1; n2 >= 0; n2--) {
            var r2 = e2[n2], i2 = r2.selector, o2 = r2.context, a2 = r2.listeners;
            i2 === this.target && o2 === this._context && e2.splice(n2, 1);
            for (var s2 = a2.length - 1; s2 >= 0; s2--) this._scopeEvents.removeDelegate(this.target, this._context, t3, a2[s2][0], a2[s2][1]);
          }
          else this._scopeEvents.remove(this.target, "all");
        } }]), t2;
      }(), an = function() {
        function t2(e2) {
          var n2 = this;
          r(this, t2), this.list = [], this.selectorMap = {}, this.scope = void 0, this.scope = e2, e2.addListeners({ "interactable:unset": function(t3) {
            var e3 = t3.interactable, r2 = e3.target, i2 = w.string(r2) ? n2.selectorMap[r2] : r2[n2.scope.id], o2 = yt(i2, function(t4) {
              return t4 === e3;
            });
            i2.splice(o2, 1);
          } });
        }
        return o(t2, [{ key: "new", value: function(t3, e2) {
          e2 = V(e2 || {}, { actions: this.scope.actions });
          var n2 = new this.scope.Interactable(t3, e2, this.scope.document, this.scope.events);
          return this.scope.addDocument(n2._doc), this.list.push(n2), w.string(t3) ? (this.selectorMap[t3] || (this.selectorMap[t3] = []), this.selectorMap[t3].push(n2)) : (n2.target[this.scope.id] || Object.defineProperty(t3, this.scope.id, { value: [], configurable: true }), t3[this.scope.id].push(n2)), this.scope.fire("interactable:new", { target: t3, options: e2, interactable: n2, win: this.scope._win }), n2;
        } }, { key: "getExisting", value: function(t3, e2) {
          var n2 = e2 && e2.context || this.scope.document, r2 = w.string(t3), i2 = r2 ? this.selectorMap[t3] : t3[this.scope.id];
          if (i2) return bt(i2, function(e3) {
            return e3._context === n2 && (r2 || e3.inContext(t3));
          });
        } }, { key: "forEachMatch", value: function(t3, e2) {
          for (var n2 = 0, r2 = this.list; n2 < r2.length; n2++) {
            var i2 = r2[n2], o2 = void 0;
            if ((w.string(i2.target) ? w.element(t3) && R(t3, i2.target) : t3 === i2.target) && i2.inContext(t3) && (o2 = e2(i2)), void 0 !== o2) return o2;
          }
        } }]), t2;
      }();
      var sn = function() {
        function t2() {
          var e2 = this;
          r(this, t2), this.id = "__interact_scope_".concat(Math.floor(100 * Math.random())), this.isInitialized = false, this.listenerMaps = [], this.browser = I, this.defaults = ge(Te), this.Eventable = Ve, this.actions = { map: {}, phases: { start: true, move: true, end: true }, methodDict: {}, phaselessTypes: {} }, this.interactStatic = function(t3) {
            var e3 = function e4(n3, r2) {
              var i2 = t3.interactables.getExisting(n3, r2);
              return i2 || ((i2 = t3.interactables.new(n3, r2)).events.global = e4.globalEvents), i2;
            };
            return e3.getPointerAverage = lt, e3.getTouchBBox = ut, e3.getTouchDistance = pt, e3.getTouchAngle = ft, e3.getElementRect = L, e3.getElementClientRect = Y, e3.matchesSelector = R, e3.closest = z, e3.globalEvents = {}, e3.version = "1.10.27", e3.scope = t3, e3.use = function(t4, e4) {
              return this.scope.usePlugin(t4, e4), this;
            }, e3.isSet = function(t4, e4) {
              return !!this.scope.interactables.get(t4, e4 && e4.context);
            }, e3.on = Nt(function(t4, e4, n3) {
              if (w.string(t4) && -1 !== t4.search(" ") && (t4 = t4.trim().split(/ +/)), w.array(t4)) {
                for (var r2 = 0, i2 = t4; r2 < i2.length; r2++) {
                  var o2 = i2[r2];
                  this.on(o2, e4, n3);
                }
                return this;
              }
              if (w.object(t4)) {
                for (var a2 in t4) this.on(a2, t4[a2], e4);
                return this;
              }
              return ve(t4, this.scope.actions) ? this.globalEvents[t4] ? this.globalEvents[t4].push(e4) : this.globalEvents[t4] = [e4] : this.scope.events.add(this.scope.document, t4, e4, { options: n3 }), this;
            }, "The interact.on() method is being deprecated"), e3.off = Nt(function(t4, e4, n3) {
              if (w.string(t4) && -1 !== t4.search(" ") && (t4 = t4.trim().split(/ +/)), w.array(t4)) {
                for (var r2 = 0, i2 = t4; r2 < i2.length; r2++) {
                  var o2 = i2[r2];
                  this.off(o2, e4, n3);
                }
                return this;
              }
              if (w.object(t4)) {
                for (var a2 in t4) this.off(a2, t4[a2], e4);
                return this;
              }
              var s2;
              return ve(t4, this.scope.actions) ? t4 in this.globalEvents && -1 !== (s2 = this.globalEvents[t4].indexOf(e4)) && this.globalEvents[t4].splice(s2, 1) : this.scope.events.remove(this.scope.document, t4, e4, n3), this;
            }, "The interact.off() method is being deprecated"), e3.debug = function() {
              return this.scope;
            }, e3.supportsTouch = function() {
              return I.supportsTouch;
            }, e3.supportsPointerEvent = function() {
              return I.supportsPointerEvent;
            }, e3.stop = function() {
              for (var t4 = 0, e4 = this.scope.interactions.list; t4 < e4.length; t4++) e4[t4].stop();
              return this;
            }, e3.pointerMoveTolerance = function(t4) {
              return w.number(t4) ? (this.scope.interactions.pointerMoveTolerance = t4, this) : this.scope.interactions.pointerMoveTolerance;
            }, e3.addDocument = function(t4, e4) {
              this.scope.addDocument(t4, e4);
            }, e3.removeDocument = function(t4) {
              this.scope.removeDocument(t4);
            }, e3;
          }(this), this.InteractEvent = Se, this.Interactable = void 0, this.interactables = new an(this), this._win = void 0, this.document = void 0, this.window = void 0, this.documents = [], this._plugins = { list: [], map: {} }, this.onWindowUnload = function(t3) {
            return e2.removeDocument(t3.target);
          };
          var n2 = this;
          this.Interactable = function(t3) {
            s(i2, t3);
            var e3 = p(i2);
            function i2() {
              return r(this, i2), e3.apply(this, arguments);
            }
            return o(i2, [{ key: "_defaults", get: function() {
              return n2.defaults;
            } }, { key: "set", value: function(t4) {
              return f(c(i2.prototype), "set", this).call(this, t4), n2.fire("interactable:set", { options: t4, interactable: this }), this;
            } }, { key: "unset", value: function() {
              f(c(i2.prototype), "unset", this).call(this);
              var t4 = n2.interactables.list.indexOf(this);
              t4 < 0 || (n2.interactables.list.splice(t4, 1), n2.fire("interactable:unset", { interactable: this }));
            } }]), i2;
          }(on);
        }
        return o(t2, [{ key: "addListeners", value: function(t3, e2) {
          this.listenerMaps.push({ id: e2, map: t3 });
        } }, { key: "fire", value: function(t3, e2) {
          for (var n2 = 0, r2 = this.listenerMaps; n2 < r2.length; n2++) {
            var i2 = r2[n2].map[t3];
            if (i2 && false === i2(e2, this, t3)) return false;
          }
        } }, { key: "init", value: function(t3) {
          return this.isInitialized ? this : function(t4, e2) {
            t4.isInitialized = true, w.window(e2) && m(e2);
            return k.init(e2), I.init(e2), Lt.init(e2), t4.window = e2, t4.document = e2.document, t4.usePlugin(nn), t4.usePlugin(Ue), t4;
          }(this, t3);
        } }, { key: "pluginIsInstalled", value: function(t3) {
          var e2 = t3.id;
          return e2 ? !!this._plugins.map[e2] : -1 !== this._plugins.list.indexOf(t3);
        } }, { key: "usePlugin", value: function(t3, e2) {
          if (!this.isInitialized) return this;
          if (this.pluginIsInstalled(t3)) return this;
          if (t3.id && (this._plugins.map[t3.id] = t3), this._plugins.list.push(t3), t3.install && t3.install(this, e2), t3.listeners && t3.before) {
            for (var n2 = 0, r2 = this.listenerMaps.length, i2 = t3.before.reduce(function(t4, e3) {
              return t4[e3] = true, t4[cn(e3)] = true, t4;
            }, {}); n2 < r2; n2++) {
              var o2 = this.listenerMaps[n2].id;
              if (o2 && (i2[o2] || i2[cn(o2)])) break;
            }
            this.listenerMaps.splice(n2, 0, { id: t3.id, map: t3.listeners });
          } else t3.listeners && this.listenerMaps.push({ id: t3.id, map: t3.listeners });
          return this;
        } }, { key: "addDocument", value: function(t3, e2) {
          if (-1 !== this.getDocIndex(t3)) return false;
          var n2 = y(t3);
          e2 = e2 ? V({}, e2) : {}, this.documents.push({ doc: t3, options: e2 }), this.events.documents.push(t3), t3 !== this.document && this.events.add(n2, "unload", this.onWindowUnload), this.fire("scope:add-document", { doc: t3, window: n2, scope: this, options: e2 });
        } }, { key: "removeDocument", value: function(t3) {
          var e2 = this.getDocIndex(t3), n2 = y(t3), r2 = this.documents[e2].options;
          this.events.remove(n2, "unload", this.onWindowUnload), this.documents.splice(e2, 1), this.events.documents.splice(e2, 1), this.fire("scope:remove-document", { doc: t3, window: n2, scope: this, options: r2 });
        } }, { key: "getDocIndex", value: function(t3) {
          for (var e2 = 0; e2 < this.documents.length; e2++) if (this.documents[e2].doc === t3) return e2;
          return -1;
        } }, { key: "getDocOptions", value: function(t3) {
          var e2 = this.getDocIndex(t3);
          return -1 === e2 ? null : this.documents[e2].options;
        } }, { key: "now", value: function() {
          return (this.window.Date || Date).now();
        } }]), t2;
      }();
      function cn(t2) {
        return t2 && t2.replace(/\/.*$/, "");
      }
      var ln = new sn(), un = ln.interactStatic, pn = "undefined" != typeof globalThis ? globalThis : window;
      ln.init(pn);
      var fn = Object.freeze({ __proto__: null, edgeTarget: function() {
      }, elements: function() {
      }, grid: function(t2) {
        var e2 = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(e3) {
          var n3 = e3[0], r2 = e3[1];
          return n3 in t2 || r2 in t2;
        }), n2 = function(n3, r2) {
          for (var i2 = t2.range, o2 = t2.limits, a2 = void 0 === o2 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : o2, s2 = t2.offset, c2 = void 0 === s2 ? { x: 0, y: 0 } : s2, l2 = { range: i2, grid: t2, x: null, y: null }, u2 = 0; u2 < e2.length; u2++) {
            var p2 = e2[u2], f2 = p2[0], d2 = p2[1], h2 = Math.round((n3 - c2.x) / t2[f2]), v2 = Math.round((r2 - c2.y) / t2[d2]);
            l2[f2] = Math.max(a2.left, Math.min(a2.right, h2 * t2[f2] + c2.x)), l2[d2] = Math.max(a2.top, Math.min(a2.bottom, v2 * t2[d2] + c2.y));
          }
          return l2;
        };
        return n2.grid = t2, n2.coordFields = e2, n2;
      } }), dn = { id: "snappers", install: function(t2) {
        var e2 = t2.interactStatic;
        e2.snappers = V(e2.snappers || {}, fn), e2.createSnapGrid = e2.snappers.grid;
      } }, hn = dn, vn = { start: function(t2) {
        var n2 = t2.state, r2 = t2.rect, i2 = t2.edges, o2 = t2.pageCoords, a2 = n2.options, s2 = a2.ratio, c2 = a2.enabled, l2 = n2.options, u2 = l2.equalDelta, p2 = l2.modifiers;
        "preserve" === s2 && (s2 = r2.width / r2.height), n2.startCoords = V({}, o2), n2.startRect = V({}, r2), n2.ratio = s2, n2.equalDelta = u2;
        var f2 = n2.linkedEdges = { top: i2.top || i2.left && !i2.bottom, left: i2.left || i2.top && !i2.right, bottom: i2.bottom || i2.right && !i2.top, right: i2.right || i2.bottom && !i2.left };
        if (n2.xIsPrimaryAxis = !(!i2.left && !i2.right), n2.equalDelta) {
          var d2 = (f2.left ? 1 : -1) * (f2.top ? 1 : -1);
          n2.edgeSign = { x: d2, y: d2 };
        } else n2.edgeSign = { x: f2.left ? -1 : 1, y: f2.top ? -1 : 1 };
        if (false !== c2 && V(i2, f2), null != p2 && p2.length) {
          var h2 = new me(t2.interaction);
          h2.copyFrom(t2.interaction.modification), h2.prepareStates(p2), n2.subModification = h2, h2.startAll(e({}, t2));
        }
      }, set: function(t2) {
        var n2 = t2.state, r2 = t2.rect, i2 = t2.coords, o2 = n2.linkedEdges, a2 = V({}, i2), s2 = n2.equalDelta ? gn : mn;
        if (V(t2.edges, o2), s2(n2, n2.xIsPrimaryAxis, i2, r2), !n2.subModification) return null;
        var c2 = V({}, r2);
        H(o2, c2, { x: i2.x - a2.x, y: i2.y - a2.y });
        var l2 = n2.subModification.setAll(e(e({}, t2), {}, { rect: c2, edges: o2, pageCoords: i2, prevCoords: i2, prevRect: c2 })), u2 = l2.delta;
        l2.changed && (s2(n2, Math.abs(u2.x) > Math.abs(u2.y), l2.coords, l2.rect), V(i2, l2.coords));
        return l2.eventProps;
      }, defaults: { ratio: "preserve", equalDelta: false, modifiers: [], enabled: false } };
      function gn(t2, e2, n2) {
        var r2 = t2.startCoords, i2 = t2.edgeSign;
        e2 ? n2.y = r2.y + (n2.x - r2.x) * i2.y : n2.x = r2.x + (n2.y - r2.y) * i2.x;
      }
      function mn(t2, e2, n2, r2) {
        var i2 = t2.startRect, o2 = t2.startCoords, a2 = t2.ratio, s2 = t2.edgeSign;
        if (e2) {
          var c2 = r2.width / a2;
          n2.y = o2.y + (c2 - i2.height) * s2.y;
        } else {
          var l2 = r2.height * a2;
          n2.x = o2.x + (l2 - i2.width) * s2.x;
        }
      }
      var yn = be(vn, "aspectRatio"), bn = function() {
      };
      bn._defaults = {};
      var xn = bn;
      function wn(t2, e2, n2) {
        return w.func(t2) ? G(t2, e2.interactable, e2.element, [n2.x, n2.y, e2]) : G(t2, e2.interactable, e2.element);
      }
      var En = { start: function(t2) {
        var e2 = t2.rect, n2 = t2.startOffset, r2 = t2.state, i2 = t2.interaction, o2 = t2.pageCoords, a2 = r2.options, s2 = a2.elementRect, c2 = V({ left: 0, top: 0, right: 0, bottom: 0 }, a2.offset || {});
        if (e2 && s2) {
          var l2 = wn(a2.restriction, i2, o2);
          if (l2) {
            var u2 = l2.right - l2.left - e2.width, p2 = l2.bottom - l2.top - e2.height;
            u2 < 0 && (c2.left += u2, c2.right += u2), p2 < 0 && (c2.top += p2, c2.bottom += p2);
          }
          c2.left += n2.left - e2.width * s2.left, c2.top += n2.top - e2.height * s2.top, c2.right += n2.right - e2.width * (1 - s2.right), c2.bottom += n2.bottom - e2.height * (1 - s2.bottom);
        }
        r2.offset = c2;
      }, set: function(t2) {
        var e2 = t2.coords, n2 = t2.interaction, r2 = t2.state, i2 = r2.options, o2 = r2.offset, a2 = wn(i2.restriction, n2, e2);
        if (a2) {
          var s2 = function(t3) {
            return !t3 || "left" in t3 && "top" in t3 || ((t3 = V({}, t3)).left = t3.x || 0, t3.top = t3.y || 0, t3.right = t3.right || t3.left + t3.width, t3.bottom = t3.bottom || t3.top + t3.height), t3;
          }(a2);
          e2.x = Math.max(Math.min(s2.right - o2.right, e2.x), s2.left + o2.left), e2.y = Math.max(Math.min(s2.bottom - o2.bottom, e2.y), s2.top + o2.top);
        }
      }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: false, enabled: false } }, Tn = be(En, "restrict"), Sn = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, _n = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
      function Pn(t2, e2) {
        for (var n2 = 0, r2 = ["top", "left", "bottom", "right"]; n2 < r2.length; n2++) {
          var i2 = r2[n2];
          i2 in t2 || (t2[i2] = e2[i2]);
        }
        return t2;
      }
      var On = { noInner: Sn, noOuter: _n, start: function(t2) {
        var e2, n2 = t2.interaction, r2 = t2.startOffset, i2 = t2.state, o2 = i2.options;
        o2 && (e2 = N(wn(o2.offset, n2, n2.coords.start.page))), e2 = e2 || { x: 0, y: 0 }, i2.offset = { top: e2.y + r2.top, left: e2.x + r2.left, bottom: e2.y - r2.bottom, right: e2.x - r2.right };
      }, set: function(t2) {
        var e2 = t2.coords, n2 = t2.edges, r2 = t2.interaction, i2 = t2.state, o2 = i2.offset, a2 = i2.options;
        if (n2) {
          var s2 = V({}, e2), c2 = wn(a2.inner, r2, s2) || {}, l2 = wn(a2.outer, r2, s2) || {};
          Pn(c2, Sn), Pn(l2, _n), n2.top ? e2.y = Math.min(Math.max(l2.top + o2.top, s2.y), c2.top + o2.top) : n2.bottom && (e2.y = Math.max(Math.min(l2.bottom + o2.bottom, s2.y), c2.bottom + o2.bottom)), n2.left ? e2.x = Math.min(Math.max(l2.left + o2.left, s2.x), c2.left + o2.left) : n2.right && (e2.x = Math.max(Math.min(l2.right + o2.right, s2.x), c2.right + o2.right));
        }
      }, defaults: { inner: null, outer: null, offset: null, endOnly: false, enabled: false } }, kn = be(On, "restrictEdges"), Dn = V({ get elementRect() {
        return { top: 0, left: 0, bottom: 1, right: 1 };
      }, set elementRect(t2) {
      } }, En.defaults), In = be({ start: En.start, set: En.set, defaults: Dn }, "restrictRect"), Mn = { width: -1 / 0, height: -1 / 0 }, zn = { width: 1 / 0, height: 1 / 0 };
      var An = be({ start: function(t2) {
        return On.start(t2);
      }, set: function(t2) {
        var e2 = t2.interaction, n2 = t2.state, r2 = t2.rect, i2 = t2.edges, o2 = n2.options;
        if (i2) {
          var a2 = U(wn(o2.min, e2, t2.coords)) || Mn, s2 = U(wn(o2.max, e2, t2.coords)) || zn;
          n2.options = { endOnly: o2.endOnly, inner: V({}, On.noInner), outer: V({}, On.noOuter) }, i2.top ? (n2.options.inner.top = r2.bottom - a2.height, n2.options.outer.top = r2.bottom - s2.height) : i2.bottom && (n2.options.inner.bottom = r2.top + a2.height, n2.options.outer.bottom = r2.top + s2.height), i2.left ? (n2.options.inner.left = r2.right - a2.width, n2.options.outer.left = r2.right - s2.width) : i2.right && (n2.options.inner.right = r2.left + a2.width, n2.options.outer.right = r2.left + s2.width), On.set(t2), n2.options = o2;
        }
      }, defaults: { min: null, max: null, endOnly: false, enabled: false } }, "restrictSize");
      var Rn = { start: function(t2) {
        var e2, n2 = t2.interaction, r2 = t2.interactable, i2 = t2.element, o2 = t2.rect, a2 = t2.state, s2 = t2.startOffset, c2 = a2.options, l2 = c2.offsetWithOrigin ? function(t3) {
          var e3 = t3.interaction.element, n3 = N(G(t3.state.options.origin, null, null, [e3])), r3 = n3 || K(t3.interactable, e3, t3.interaction.prepared.name);
          return r3;
        }(t2) : { x: 0, y: 0 };
        if ("startCoords" === c2.offset) e2 = { x: n2.coords.start.page.x, y: n2.coords.start.page.y };
        else {
          var u2 = G(c2.offset, r2, i2, [n2]);
          (e2 = N(u2) || { x: 0, y: 0 }).x += l2.x, e2.y += l2.y;
        }
        var p2 = c2.relativePoints;
        a2.offsets = o2 && p2 && p2.length ? p2.map(function(t3, n3) {
          return { index: n3, relativePoint: t3, x: s2.left - o2.width * t3.x + e2.x, y: s2.top - o2.height * t3.y + e2.y };
        }) : [{ index: 0, relativePoint: null, x: e2.x, y: e2.y }];
      }, set: function(t2) {
        var e2 = t2.interaction, n2 = t2.coords, r2 = t2.state, i2 = r2.options, o2 = r2.offsets, a2 = K(e2.interactable, e2.element, e2.prepared.name), s2 = V({}, n2), c2 = [];
        i2.offsetWithOrigin || (s2.x -= a2.x, s2.y -= a2.y);
        for (var l2 = 0, u2 = o2; l2 < u2.length; l2++) for (var p2 = u2[l2], f2 = s2.x - p2.x, d2 = s2.y - p2.y, h2 = 0, v2 = i2.targets.length; h2 < v2; h2++) {
          var g2 = i2.targets[h2], m2 = void 0;
          (m2 = w.func(g2) ? g2(f2, d2, e2._proxy, p2, h2) : g2) && c2.push({ x: (w.number(m2.x) ? m2.x : f2) + p2.x, y: (w.number(m2.y) ? m2.y : d2) + p2.y, range: w.number(m2.range) ? m2.range : i2.range, source: g2, index: h2, offset: p2 });
        }
        for (var y2 = { target: null, inRange: false, distance: 0, range: 0, delta: { x: 0, y: 0 } }, b2 = 0; b2 < c2.length; b2++) {
          var x2 = c2[b2], E2 = x2.range, T2 = x2.x - s2.x, S2 = x2.y - s2.y, _2 = Q(T2, S2), P2 = _2 <= E2;
          E2 === 1 / 0 && y2.inRange && y2.range !== 1 / 0 && (P2 = false), y2.target && !(P2 ? y2.inRange && E2 !== 1 / 0 ? _2 / E2 < y2.distance / y2.range : E2 === 1 / 0 && y2.range !== 1 / 0 || _2 < y2.distance : !y2.inRange && _2 < y2.distance) || (y2.target = x2, y2.distance = _2, y2.range = E2, y2.inRange = P2, y2.delta.x = T2, y2.delta.y = S2);
        }
        return y2.inRange && (n2.x = y2.target.x, n2.y = y2.target.y), r2.closest = y2, y2;
      }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: true, origin: null, relativePoints: null, endOnly: false, enabled: false } }, Cn = be(Rn, "snap");
      var jn = { start: function(t2) {
        var e2 = t2.state, n2 = t2.edges, r2 = e2.options;
        if (!n2) return null;
        t2.state = { options: { targets: null, relativePoints: [{ x: n2.left ? 0 : 1, y: n2.top ? 0 : 1 }], offset: r2.offset || "self", origin: { x: 0, y: 0 }, range: r2.range } }, e2.targetFields = e2.targetFields || [["width", "height"], ["x", "y"]], Rn.start(t2), e2.offsets = t2.state.offsets, t2.state = e2;
      }, set: function(t2) {
        var e2 = t2.interaction, n2 = t2.state, r2 = t2.coords, i2 = n2.options, o2 = n2.offsets, a2 = { x: r2.x - o2[0].x, y: r2.y - o2[0].y };
        n2.options = V({}, i2), n2.options.targets = [];
        for (var s2 = 0, c2 = i2.targets || []; s2 < c2.length; s2++) {
          var l2 = c2[s2], u2 = void 0;
          if (u2 = w.func(l2) ? l2(a2.x, a2.y, e2) : l2) {
            for (var p2 = 0, f2 = n2.targetFields; p2 < f2.length; p2++) {
              var d2 = f2[p2], h2 = d2[0], v2 = d2[1];
              if (h2 in u2 || v2 in u2) {
                u2.x = u2[h2], u2.y = u2[v2];
                break;
              }
            }
            n2.options.targets.push(u2);
          }
        }
        var g2 = Rn.set(t2);
        return n2.options = i2, g2;
      }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: false, enabled: false } }, Fn = be(jn, "snapSize");
      var Xn = { aspectRatio: yn, restrictEdges: kn, restrict: Tn, restrictRect: In, restrictSize: An, snapEdges: be({ start: function(t2) {
        var e2 = t2.edges;
        return e2 ? (t2.state.targetFields = t2.state.targetFields || [[e2.left ? "left" : "right", e2.top ? "top" : "bottom"]], jn.start(t2)) : null;
      }, set: jn.set, defaults: V(ge(jn.defaults), { targets: void 0, range: void 0, offset: { x: 0, y: 0 } }) }, "snapEdges"), snap: Cn, snapSize: Fn, spring: xn, avoid: xn, transform: xn, rubberband: xn }, Yn = { id: "modifiers", install: function(t2) {
        var e2 = t2.interactStatic;
        for (var n2 in t2.usePlugin(Ee), t2.usePlugin(hn), e2.modifiers = Xn, Xn) {
          var r2 = Xn[n2], i2 = r2._defaults, o2 = r2._methods;
          i2._methods = o2, t2.defaults.perAction[n2] = i2;
        }
      } }, Ln = Yn, qn = function(t2) {
        s(n2, t2);
        var e2 = p(n2);
        function n2(t3, i2, o2, a2, s2, c2) {
          var l2;
          if (r(this, n2), tt(u(l2 = e2.call(this, s2)), o2), o2 !== i2 && tt(u(l2), i2), l2.timeStamp = c2, l2.originalEvent = o2, l2.type = t3, l2.pointerId = at(i2), l2.pointerType = dt(i2), l2.target = a2, l2.currentTarget = null, "tap" === t3) {
            var p2 = s2.getPointerIndex(i2);
            l2.dt = l2.timeStamp - s2.pointers[p2].downTime;
            var f2 = l2.timeStamp - s2.tapTime;
            l2.double = !!s2.prevTap && "doubletap" !== s2.prevTap.type && s2.prevTap.target === l2.target && f2 < 500;
          } else "doubletap" === t3 && (l2.dt = i2.timeStamp - s2.tapTime, l2.double = true);
          return l2;
        }
        return o(n2, [{ key: "_subtractOrigin", value: function(t3) {
          var e3 = t3.x, n3 = t3.y;
          return this.pageX -= e3, this.pageY -= n3, this.clientX -= e3, this.clientY -= n3, this;
        } }, { key: "_addOrigin", value: function(t3) {
          var e3 = t3.x, n3 = t3.y;
          return this.pageX += e3, this.pageY += n3, this.clientX += e3, this.clientY += n3, this;
        } }, { key: "preventDefault", value: function() {
          this.originalEvent.preventDefault();
        } }]), n2;
      }(vt), Bn = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(t2) {
        t2.pointerEvents = Bn, t2.defaults.actions.pointerEvents = Bn.defaults, V(t2.actions.phaselessTypes, Bn.types);
      }, listeners: { "interactions:new": function(t2) {
        var e2 = t2.interaction;
        e2.prevTap = null, e2.tapTime = 0;
      }, "interactions:update-pointer": function(t2) {
        var e2 = t2.down, n2 = t2.pointerInfo;
        if (!e2 && n2.hold) return;
        n2.hold = { duration: 1 / 0, timeout: null };
      }, "interactions:move": function(t2, e2) {
        var n2 = t2.interaction, r2 = t2.pointer, i2 = t2.event, o2 = t2.eventTarget;
        t2.duplicate || n2.pointerIsDown && !n2.pointerWasMoved || (n2.pointerIsDown && Gn(t2), Vn({ interaction: n2, pointer: r2, event: i2, eventTarget: o2, type: "move" }, e2));
      }, "interactions:down": function(t2, e2) {
        !function(t3, e3) {
          for (var n2 = t3.interaction, r2 = t3.pointer, i2 = t3.event, o2 = t3.eventTarget, a2 = t3.pointerIndex, s2 = n2.pointers[a2].hold, c2 = q(o2), l2 = { interaction: n2, pointer: r2, event: i2, eventTarget: o2, type: "hold", targets: [], path: c2, node: null }, u2 = 0; u2 < c2.length; u2++) {
            var p2 = c2[u2];
            l2.node = p2, e3.fire("pointerEvents:collect-targets", l2);
          }
          if (!l2.targets.length) return;
          for (var f2 = 1 / 0, d2 = 0, h2 = l2.targets; d2 < h2.length; d2++) {
            var v2 = h2[d2].eventable.options.holdDuration;
            v2 < f2 && (f2 = v2);
          }
          s2.duration = f2, s2.timeout = setTimeout(function() {
            Vn({ interaction: n2, eventTarget: o2, pointer: r2, event: i2, type: "hold" }, e3);
          }, f2);
        }(t2, e2), Vn(t2, e2);
      }, "interactions:up": function(t2, e2) {
        Gn(t2), Vn(t2, e2), function(t3, e3) {
          var n2 = t3.interaction, r2 = t3.pointer, i2 = t3.event, o2 = t3.eventTarget;
          n2.pointerWasMoved || Vn({ interaction: n2, eventTarget: o2, pointer: r2, event: i2, type: "tap" }, e3);
        }(t2, e2);
      }, "interactions:cancel": function(t2, e2) {
        Gn(t2), Vn(t2, e2);
      } }, PointerEvent: qn, fire: Vn, collectEventTargets: Wn, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: true, move: true, up: true, cancel: true, tap: true, doubletap: true, hold: true } };
      function Vn(t2, e2) {
        var n2 = t2.interaction, r2 = t2.pointer, i2 = t2.event, o2 = t2.eventTarget, a2 = t2.type, s2 = t2.targets, c2 = void 0 === s2 ? Wn(t2, e2) : s2, l2 = new qn(a2, r2, i2, o2, n2, e2.now());
        e2.fire("pointerEvents:new", { pointerEvent: l2 });
        for (var u2 = { interaction: n2, pointer: r2, event: i2, eventTarget: o2, targets: c2, type: a2, pointerEvent: l2 }, p2 = 0; p2 < c2.length; p2++) {
          var f2 = c2[p2];
          for (var d2 in f2.props || {}) l2[d2] = f2.props[d2];
          var h2 = K(f2.eventable, f2.node);
          if (l2._subtractOrigin(h2), l2.eventable = f2.eventable, l2.currentTarget = f2.node, f2.eventable.fire(l2), l2._addOrigin(h2), l2.immediatePropagationStopped || l2.propagationStopped && p2 + 1 < c2.length && c2[p2 + 1].node !== l2.currentTarget) break;
        }
        if (e2.fire("pointerEvents:fired", u2), "tap" === a2) {
          var v2 = l2.double ? Vn({ interaction: n2, pointer: r2, event: i2, eventTarget: o2, type: "doubletap" }, e2) : l2;
          n2.prevTap = v2, n2.tapTime = v2.timeStamp;
        }
        return l2;
      }
      function Wn(t2, e2) {
        var n2 = t2.interaction, r2 = t2.pointer, i2 = t2.event, o2 = t2.eventTarget, a2 = t2.type, s2 = n2.getPointerIndex(r2), c2 = n2.pointers[s2];
        if ("tap" === a2 && (n2.pointerWasMoved || !c2 || c2.downTarget !== o2)) return [];
        for (var l2 = q(o2), u2 = { interaction: n2, pointer: r2, event: i2, eventTarget: o2, type: a2, path: l2, targets: [], node: null }, p2 = 0; p2 < l2.length; p2++) {
          var f2 = l2[p2];
          u2.node = f2, e2.fire("pointerEvents:collect-targets", u2);
        }
        return "hold" === a2 && (u2.targets = u2.targets.filter(function(t3) {
          var e3, r3;
          return t3.eventable.options.holdDuration === (null == (e3 = n2.pointers[s2]) || null == (r3 = e3.hold) ? void 0 : r3.duration);
        })), u2.targets;
      }
      function Gn(t2) {
        var e2 = t2.interaction, n2 = t2.pointerIndex, r2 = e2.pointers[n2].hold;
        r2 && r2.timeout && (clearTimeout(r2.timeout), r2.timeout = null);
      }
      var Nn = Object.freeze({ __proto__: null, default: Bn });
      function Un(t2) {
        var e2 = t2.interaction;
        e2.holdIntervalHandle && (clearInterval(e2.holdIntervalHandle), e2.holdIntervalHandle = null);
      }
      var Hn = { id: "pointer-events/holdRepeat", install: function(t2) {
        t2.usePlugin(Bn);
        var e2 = t2.pointerEvents;
        e2.defaults.holdRepeatInterval = 0, e2.types.holdrepeat = t2.actions.phaselessTypes.holdrepeat = true;
      }, listeners: ["move", "up", "cancel", "endall"].reduce(function(t2, e2) {
        return t2["pointerEvents:".concat(e2)] = Un, t2;
      }, { "pointerEvents:new": function(t2) {
        var e2 = t2.pointerEvent;
        "hold" === e2.type && (e2.count = (e2.count || 0) + 1);
      }, "pointerEvents:fired": function(t2, e2) {
        var n2 = t2.interaction, r2 = t2.pointerEvent, i2 = t2.eventTarget, o2 = t2.targets;
        if ("hold" === r2.type && o2.length) {
          var a2 = o2[0].eventable.options.holdRepeatInterval;
          a2 <= 0 || (n2.holdIntervalHandle = setTimeout(function() {
            e2.pointerEvents.fire({ interaction: n2, eventTarget: i2, type: "hold", pointer: r2, event: r2 }, e2);
          }, a2));
        }
      } }) }, Kn = Hn;
      var $n = { id: "pointer-events/interactableTargets", install: function(t2) {
        var e2 = t2.Interactable;
        e2.prototype.pointerEvents = function(t3) {
          return V(this.events.options, t3), this;
        };
        var n2 = e2.prototype._backCompatOption;
        e2.prototype._backCompatOption = function(t3, e3) {
          var r2 = n2.call(this, t3, e3);
          return r2 === this && (this.events.options[t3] = e3), r2;
        };
      }, listeners: { "pointerEvents:collect-targets": function(t2, e2) {
        var n2 = t2.targets, r2 = t2.node, i2 = t2.type, o2 = t2.eventTarget;
        e2.interactables.forEachMatch(r2, function(t3) {
          var e3 = t3.events, a2 = e3.options;
          e3.types[i2] && e3.types[i2].length && t3.testIgnoreAllow(a2, r2, o2) && n2.push({ node: r2, eventable: e3, props: { interactable: t3 } });
        });
      }, "interactable:new": function(t2) {
        var e2 = t2.interactable;
        e2.events.getRect = function(t3) {
          return e2.getRect(t3);
        };
      }, "interactable:set": function(t2, e2) {
        var n2 = t2.interactable, r2 = t2.options;
        V(n2.events.options, e2.pointerEvents.defaults), V(n2.events.options, r2.pointerEvents || {});
      } } }, Jn = $n, Qn = { id: "pointer-events", install: function(t2) {
        t2.usePlugin(Nn), t2.usePlugin(Kn), t2.usePlugin(Jn);
      } }, Zn = Qn;
      var tr = { id: "reflow", install: function(t2) {
        var e2 = t2.Interactable;
        t2.actions.phases.reflow = true, e2.prototype.reflow = function(e3) {
          return function(t3, e4, n2) {
            for (var r2 = t3.getAllElements(), i2 = n2.window.Promise, o2 = i2 ? [] : null, a2 = function() {
              var a3 = r2[s2], c2 = t3.getRect(a3);
              if (!c2) return 1;
              var l2, u2 = bt(n2.interactions.list, function(n3) {
                return n3.interacting() && n3.interactable === t3 && n3.element === a3 && n3.prepared.name === e4.name;
              });
              if (u2) u2.move(), o2 && (l2 = u2._reflowPromise || new i2(function(t4) {
                u2._reflowResolve = t4;
              }));
              else {
                var p2 = U(c2), f2 = /* @__PURE__ */ function(t4) {
                  return { coords: t4, get page() {
                    return this.coords.page;
                  }, get client() {
                    return this.coords.client;
                  }, get timeStamp() {
                    return this.coords.timeStamp;
                  }, get pageX() {
                    return this.coords.page.x;
                  }, get pageY() {
                    return this.coords.page.y;
                  }, get clientX() {
                    return this.coords.client.x;
                  }, get clientY() {
                    return this.coords.client.y;
                  }, get pointerId() {
                    return this.coords.pointerId;
                  }, get target() {
                    return this.coords.target;
                  }, get type() {
                    return this.coords.type;
                  }, get pointerType() {
                    return this.coords.pointerType;
                  }, get buttons() {
                    return this.coords.buttons;
                  }, preventDefault: function() {
                  } };
                }({ page: { x: p2.x, y: p2.y }, client: { x: p2.x, y: p2.y }, timeStamp: n2.now() });
                l2 = function(t4, e5, n3, r3, i3) {
                  var o3 = t4.interactions.new({ pointerType: "reflow" }), a4 = { interaction: o3, event: i3, pointer: i3, eventTarget: n3, phase: "reflow" };
                  o3.interactable = e5, o3.element = n3, o3.prevEvent = i3, o3.updatePointer(i3, i3, n3, true), nt(o3.coords.delta), Ut(o3.prepared, r3), o3._doPhase(a4);
                  var s3 = t4.window, c3 = s3.Promise, l3 = c3 ? new c3(function(t5) {
                    o3._reflowResolve = t5;
                  }) : void 0;
                  o3._reflowPromise = l3, o3.start(r3, e5, n3), o3._interacting ? (o3.move(a4), o3.end(i3)) : (o3.stop(), o3._reflowResolve());
                  return o3.removePointer(i3, i3), l3;
                }(n2, t3, a3, e4, f2);
              }
              o2 && o2.push(l2);
            }, s2 = 0; s2 < r2.length && !a2(); s2++) ;
            return o2 && i2.all(o2).then(function() {
              return t3;
            });
          }(this, e3, t2);
        };
      }, listeners: { "interactions:stop": function(t2, e2) {
        var n2 = t2.interaction;
        "reflow" === n2.pointerType && (n2._reflowResolve && n2._reflowResolve(), function(t3, e3) {
          t3.splice(t3.indexOf(e3), 1);
        }(e2.interactions.list, n2));
      } } }, er = tr;
      if (un.use(he), un.use(Ce), un.use(Zn), un.use(qe), un.use(Ln), un.use(pe), un.use(Xt), un.use(Gt), un.use(er), un.default = un, "object" === n(module) && module) try {
        module.exports = un;
      } catch (t2) {
      }
      return un.default = un, un;
    });
  })(interact_min$1, interact_min$1.exports);
  return interact_min$1.exports;
}
var interact_minExports = /* @__PURE__ */ requireInteract_min();
const interact = /* @__PURE__ */ getDefaultExportFromCjs(interact_minExports);



/***/ }),

/***/ 28070:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ InteractiveContainer),
/* harmony export */   u: () => (/* binding */ updateHostInteraction)
/* harmony export */ });
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31263);
/* harmony import */ var _arcgis_lumina__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48747);
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */


function interceptedClick() {
  const { disabled } = this;
  if (!disabled) {
    HTMLElement.prototype.click.call(this);
  }
}
function onPointerDown(event) {
  const interactiveElement = event.target;
  if (interactiveElement.disabled) {
    event.preventDefault();
  }
}
const nonBubblingWhenDisabledMouseEvents = ["mousedown", "mouseup", "click"];
function onNonBubblingWhenDisabledMouseEvent(event) {
  const interactiveElement = event.target;
  if (interactiveElement.disabled) {
    event.stopImmediatePropagation();
    event.preventDefault();
  }
}
const captureOnlyOptions = { capture: true };
function updateHostInteraction(component) {
  if (component.disabled) {
    component.el.setAttribute("aria-disabled", "true");
    if (component.el.contains(document.activeElement)) {
      document.activeElement.blur();
    }
    blockInteraction(component);
    return;
  }
  restoreInteraction(component);
  component.el.removeAttribute("aria-disabled");
}
function blockInteraction(component) {
  component.el.click = interceptedClick;
  addInteractionListeners(component.el);
}
function addInteractionListeners(element) {
  element.addEventListener("pointerdown", onPointerDown, captureOnlyOptions);
  nonBubblingWhenDisabledMouseEvents.forEach((event) => element.addEventListener(event, onNonBubblingWhenDisabledMouseEvent, captureOnlyOptions));
}
function restoreInteraction(component) {
  delete component.el.click;
  removeInteractionListeners(component.el);
}
function removeInteractionListeners(element) {
  element.removeEventListener("pointerdown", onPointerDown, captureOnlyOptions);
  nonBubblingWhenDisabledMouseEvents.forEach((event) => element.removeEventListener(event, onNonBubblingWhenDisabledMouseEvent, captureOnlyOptions));
}
const CSS = {
  container: "interaction-container"
};
const InteractiveContainer = ({ children, disabled }) => (0,lit_html__WEBPACK_IMPORTED_MODULE_0__/* .html */ .qy)`<div class=${(0,_arcgis_lumina__WEBPACK_IMPORTED_MODULE_1__/* .safeClassMap */ .CP)(CSS.container)} .inert=${disabled}>${children}</div>`;



/***/ }),

/***/ 14357:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ isActivationKey),
/* harmony export */   n: () => (/* binding */ numberKeys)
/* harmony export */ });
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */
function isActivationKey(key) {
  return key === "Enter" || key === " ";
}
const numberKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];



/***/ }),

/***/ 23424:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ logger)
/* harmony export */ });
/* harmony import */ var _runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14558);
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */

const loggedDeprecations = /* @__PURE__ */ new Set();
const logLevels = {
  trace: 0,
  debug: 1,
  info: 2,
  warn: 4,
  error: 8,
  off: 10
};
function willLog(level) {
  return logLevels[level] >= logLevels[_runtime_js__WEBPACK_IMPORTED_MODULE_0__.l];
}
function forwardToConsole(level, ...data) {
  if (!willLog(level)) {
    return;
  }
  const badgeTemplate = "%ccalcite";
  const badgeStyle = "background: #007AC2; color: #fff; border-radius: 4px; padding: 2px 4px;";
  console[level].call(this, badgeTemplate, badgeStyle, ...data);
}
let listFormatter;
const logger = {
  debug: (message) => forwardToConsole("debug", message),
  info: (message) => forwardToConsole("info", message),
  warn: (message) => forwardToConsole("warn", message),
  error: (message) => forwardToConsole("error", message),
  trace: (message) => forwardToConsole("trace", message),
  deprecated
};
function deprecated(context, { component, name, suggested, removalVersion }) {
  const key = `${context}:${context === "component" ? "" : component}${name}`;
  if (loggedDeprecations.has(key)) {
    return;
  }
  loggedDeprecations.add(key);
  const multiSuggestions = Array.isArray(suggested);
  if (multiSuggestions && !listFormatter) {
    listFormatter = new Intl.ListFormat("en", { style: "long", type: "disjunction" });
  }
  const message = `[${name}] ${context} is deprecated and will be removed in ${removalVersion === "future" ? `a future version` : `v${removalVersion}`}.${suggested ? ` Use ${multiSuggestions ? listFormatter.format(suggested.map((suggestion) => `"${suggestion}"`)) : `"${suggested}"`} instead.` : ""}`;
  forwardToConsole("warn", message);
}



/***/ }),

/***/ 13061:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createObserver)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52689);
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */

function createObserver(type, callback, options) {
  if (lit__WEBPACK_IMPORTED_MODULE_0__/* .isServer */ .S$) {
    return void 0;
  }
  const Observer = getObserver(type);
  return new Observer(callback, options);
}
function getObserver(type) {
  class ExtendedMutationObserver extends window.MutationObserver {
    constructor(callback) {
      super(callback);
      this.observedEntry = [];
      this.callback = callback;
    }
    observe(target, options) {
      this.observedEntry.push({ target, options });
      return super.observe(target, options);
    }
    unobserve(target) {
      const newObservedEntries = this.observedEntry.filter((observed) => observed.target !== target);
      this.observedEntry = [];
      this.callback(super.takeRecords(), this);
      this.disconnect();
      newObservedEntries.forEach((observed) => this.observe(observed.target, observed.options));
    }
  }
  return function() {
    return type === "intersection" ? window.IntersectionObserver : type === "mutation" ? ExtendedMutationObserver : window.ResizeObserver;
  }();
}



/***/ }),

/***/ 36607:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ onToggleOpenCloseComponent)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25450);
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */

function isOpen(component) {
  return component[component.openProp || "open"];
}
function onToggleOpenCloseComponent(component) {
  requestAnimationFrame(() => {
    if (!component.transitionEl) {
      return;
    }
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.w)(
      component.transitionEl,
      component.transitionProp,
      () => {
        if (isOpen(component)) {
          component.onBeforeOpen();
        } else {
          component.onBeforeClose();
        }
      },
      () => {
        if (isOpen(component)) {
          component.onOpen();
        } else {
          component.onClose();
        }
      }
    );
  });
}



/***/ }),

/***/ 90477:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ CSS),
/* harmony export */   I: () => (/* binding */ ICONS),
/* harmony export */   S: () => (/* binding */ SLOTS),
/* harmony export */   a: () => (/* binding */ activeAttr)
/* harmony export */ });
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */
const CSS = {
  menu: "menu",
  defaultTrigger: "default-trigger"
};
const SLOTS = {
  tooltip: "tooltip",
  trigger: "trigger"
};
const ICONS = {
  menu: "ellipsis"
};
const activeAttr = "data-active";



/***/ }),

/***/ 46126:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ CSS),
/* harmony export */   I: () => (/* binding */ ICONS),
/* harmony export */   S: () => (/* binding */ SLOTS),
/* harmony export */   a: () => (/* binding */ IDS)
/* harmony export */ });
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */
const CSS = {
  actionBarContainer: "action-bar-container",
  container: "container",
  contentBottom: "content-bottom",
  contentTop: "content-top",
  header: "header",
  headerContainer: "header-container",
  headerContainerBorderEnd: "header-container--border-end",
  heading: "heading",
  description: "description",
  headerContent: "header-content",
  headerActions: "header-actions",
  headerActionsEnd: "header-actions--end",
  headerActionsStart: "header-actions--start",
  contentWrapper: "content-wrapper",
  fabContainer: "fab-container",
  footer: "footer",
  footerContent: "footer-content",
  footerActions: "footer-actions",
  footerStart: "footer-start",
  footerEnd: "footer-end",
  headerSlottedContent: "header-slotted-content",
  menuAction: "menu-action"
};
const IDS = {
  close: "close",
  collapse: "collapse"
};
const ICONS = {
  close: "x",
  menu: "ellipsis",
  expand: "chevron-down",
  collapse: "chevron-up"
};
const SLOTS = {
  actionBar: "action-bar",
  alerts: "alerts",
  contentBottom: "content-bottom",
  contentTop: "content-top",
  headerActionsStart: "header-actions-start",
  headerActionsEnd: "header-actions-end",
  headerMenuActions: "header-menu-actions",
  headerContent: "header-content",
  fab: "fab",
  footer: "footer",
  footerEnd: "footer-end",
  footerStart: "footer-start",
  footerActions: "footer-actions"
};



/***/ }),

/***/ 44148:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  u: () => (/* binding */ useFocusTrap)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/lumina/dist/controllers/index.js + 1 modules
var controllers = __webpack_require__(73339);
;// ../node_modules/tabbable/dist/index.esm.js
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
// NOTE: separate `:not()` selectors has broader browser support than the newer
//  `:not([inert], [inert] *)` (Feb 2023)
// CAREFUL: JSDom does not support `:not([inert] *)` as a selector; using it causes
//  the entire query to fail, resulting in no nodes found, which will break a lot
//  of things... so we have to rely on JS to identify nodes inside an inert container
var candidateSelectors = ['input:not([inert])', 'select:not([inert])', 'textarea:not([inert])', 'a[href]:not([inert])', 'button:not([inert])', '[tabindex]:not(slot):not([inert])', 'audio[controls]:not([inert])', 'video[controls]:not([inert])', '[contenteditable]:not([contenteditable="false"]):not([inert])', 'details>summary:first-of-type:not([inert])', 'details:not([inert])'];
var candidateSelector = /* #__PURE__ */candidateSelectors.join(',');
var NoElement = typeof Element === 'undefined';
var matches = NoElement ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function (element) {
  var _element$getRootNode;
  return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function (element) {
  return element === null || element === void 0 ? void 0 : element.ownerDocument;
};

/**
 * Determines if a node is inert or in an inert ancestor.
 * @param {Element} [node]
 * @param {boolean} [lookUp] If true and `node` is not inert, looks up at ancestors to
 *  see if any of them are inert. If false, only `node` itself is considered.
 * @returns {boolean} True if inert itself or by way of being in an inert ancestor.
 *  False if `node` is falsy.
 */
var isInert = function isInert(node, lookUp) {
  var _node$getAttribute;
  if (lookUp === void 0) {
    lookUp = true;
  }
  // CAREFUL: JSDom does not support inert at all, so we can't use the `HTMLElement.inert`
  //  JS API property; we have to check the attribute, which can either be empty or 'true';
  //  if it's `null` (not specified) or 'false', it's an active element
  var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, 'inert');
  var inert = inertAtt === '' || inertAtt === 'true';

  // NOTE: this could also be handled with `node.matches('[inert], :is([inert] *)')`
  //  if it weren't for `matches()` not being a function on shadow roots; the following
  //  code works for any kind of node
  // CAREFUL: JSDom does not appear to support certain selectors like `:not([inert] *)`
  //  so it likely would not support `:is([inert] *)` either...
  var result = inert || lookUp && node && isInert(node.parentNode); // recursive

  return result;
};

/**
 * Determines if a node's content is editable.
 * @param {Element} [node]
 * @returns True if it's content-editable; false if it's not or `node` is falsy.
 */
var isContentEditable = function isContentEditable(node) {
  var _node$getAttribute2;
  // CAREFUL: JSDom does not support the `HTMLElement.isContentEditable` API so we have
  //  to use the attribute directly to check for this, which can either be empty or 'true';
  //  if it's `null` (not specified) or 'false', it's a non-editable element
  var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, 'contenteditable');
  return attValue === '' || attValue === 'true';
};

/**
 * @param {Element} el container to check in
 * @param {boolean} includeContainer add container to check
 * @param {(node: Element) => boolean} filter filter candidates
 * @returns {Element[]}
 */
var getCandidates = function getCandidates(el, includeContainer, filter) {
  // even if `includeContainer=false`, we still have to check it for inertness because
  //  if it's inert, all its children are inert
  if (isInert(el)) {
    return [];
  }
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }
  candidates = candidates.filter(filter);
  return candidates;
};

/**
 * @callback GetShadowRoot
 * @param {Element} element to check for shadow root
 * @returns {ShadowRoot|boolean} ShadowRoot if available or boolean indicating if a shadowRoot is attached but not available.
 */

/**
 * @callback ShadowRootFilter
 * @param {Element} shadowHostNode the element which contains shadow content
 * @returns {boolean} true if a shadow root could potentially contain valid candidates.
 */

/**
 * @typedef {Object} CandidateScope
 * @property {Element} scopeParent contains inner candidates
 * @property {Element[]} candidates list of candidates found in the scope parent
 */

/**
 * @typedef {Object} IterativeOptions
 * @property {GetShadowRoot|boolean} getShadowRoot true if shadow support is enabled; falsy if not;
 *  if a function, implies shadow support is enabled and either returns the shadow root of an element
 *  or a boolean stating if it has an undisclosed shadow root
 * @property {(node: Element) => boolean} filter filter candidates
 * @property {boolean} flatten if true then result will flatten any CandidateScope into the returned list
 * @property {ShadowRootFilter} shadowRootFilter filter shadow roots;
 */

/**
 * @param {Element[]} elements list of element containers to match candidates from
 * @param {boolean} includeContainer add container list to check
 * @param {IterativeOptions} options
 * @returns {Array.<Element|CandidateScope>}
 */
var getCandidatesIteratively = function getCandidatesIteratively(elements, includeContainer, options) {
  var candidates = [];
  var elementsToCheck = Array.from(elements);
  while (elementsToCheck.length) {
    var element = elementsToCheck.shift();
    if (isInert(element, false)) {
      // no need to look up since we're drilling down
      // anything inside this container will also be inert
      continue;
    }
    if (element.tagName === 'SLOT') {
      // add shadow dom slot scope (slot itself cannot be focusable)
      var assigned = element.assignedElements();
      var content = assigned.length ? assigned : element.children;
      var nestedCandidates = getCandidatesIteratively(content, true, options);
      if (options.flatten) {
        candidates.push.apply(candidates, nestedCandidates);
      } else {
        candidates.push({
          scopeParent: element,
          candidates: nestedCandidates
        });
      }
    } else {
      // check candidate element
      var validCandidate = matches.call(element, candidateSelector);
      if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
        candidates.push(element);
      }

      // iterate over shadow content if possible
      var shadowRoot = element.shadowRoot ||
      // check for an undisclosed shadow
      typeof options.getShadowRoot === 'function' && options.getShadowRoot(element);

      // no inert look up because we're already drilling down and checking for inertness
      //  on the way down, so all containers to this root node should have already been
      //  vetted as non-inert
      var validShadowRoot = !isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
      if (shadowRoot && validShadowRoot) {
        // add shadow dom scope IIF a shadow root node was given; otherwise, an undisclosed
        //  shadow exists, so look at light dom children as fallback BUT create a scope for any
        //  child candidates found because they're likely slotted elements (elements that are
        //  children of the web component element (which has the shadow), in the light dom, but
        //  slotted somewhere _inside_ the undisclosed shadow) -- the scope is created below,
        //  _after_ we return from this recursive call
        var _nestedCandidates = getCandidatesIteratively(shadowRoot === true ? element.children : shadowRoot.children, true, options);
        if (options.flatten) {
          candidates.push.apply(candidates, _nestedCandidates);
        } else {
          candidates.push({
            scopeParent: element,
            candidates: _nestedCandidates
          });
        }
      } else {
        // there's not shadow so just dig into the element's (light dom) children
        //  __without__ giving the element special scope treatment
        elementsToCheck.unshift.apply(elementsToCheck, element.children);
      }
    }
  }
  return candidates;
};

/**
 * @private
 * Determines if the node has an explicitly specified `tabindex` attribute.
 * @param {HTMLElement} node
 * @returns {boolean} True if so; false if not.
 */
var hasTabIndex = function hasTabIndex(node) {
  return !isNaN(parseInt(node.getAttribute('tabindex'), 10));
};

/**
 * Determine the tab index of a given node.
 * @param {HTMLElement} node
 * @returns {number} Tab order (negative, 0, or positive number).
 * @throws {Error} If `node` is falsy.
 */
var getTabIndex = function getTabIndex(node) {
  if (!node) {
    throw new Error('No node provided');
  }
  if (node.tabIndex < 0) {
    // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
    // `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
    // yet they are still part of the regular tab order; in FF, they get a default
    // `tabIndex` of 0; since Chrome still puts those elements in the regular tab
    // order, consider their tab index to be 0.
    // Also browsers do not return `tabIndex` correctly for contentEditable nodes;
    // so if they don't have a tabindex attribute specifically set, assume it's 0.
    if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
      return 0;
    }
  }
  return node.tabIndex;
};

/**
 * Determine the tab index of a given node __for sort order purposes__.
 * @param {HTMLElement} node
 * @param {boolean} [isScope] True for a custom element with shadow root or slot that, by default,
 *  has tabIndex -1, but needs to be sorted by document order in order for its content to be
 *  inserted into the correct sort position.
 * @returns {number} Tab order (negative, 0, or positive number).
 */
var getSortOrderTabIndex = function getSortOrderTabIndex(node, isScope) {
  var tabIndex = getTabIndex(node);
  if (tabIndex < 0 && isScope && !hasTabIndex(node)) {
    return 0;
  }
  return tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};
var isInput = function isInput(node) {
  return node.tagName === 'INPUT';
};
var isHiddenInput = function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
};
var isDetailsWithSummary = function isDetailsWithSummary(node) {
  var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function (child) {
    return child.tagName === 'SUMMARY';
  });
  return r;
};
var getCheckedRadio = function getCheckedRadio(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};
var isTabbableRadio = function isTabbableRadio(node) {
  if (!node.name) {
    return true;
  }
  var radioScope = node.form || getRootNode(node);
  var queryRadios = function queryRadios(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };
  var radioSet;
  if (typeof window !== 'undefined' && typeof window.CSS !== 'undefined' && typeof window.CSS.escape === 'function') {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s', err.message);
      return false;
    }
  }
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};
var isRadio = function isRadio(node) {
  return isInput(node) && node.type === 'radio';
};
var isNonTabbableRadio = function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
};

// determines if a node is ultimately attached to the window's document
var isNodeAttached = function isNodeAttached(node) {
  var _nodeRoot;
  // The root node is the shadow root if the node is in a shadow DOM; some document otherwise
  //  (but NOT _the_ document; see second 'If' comment below for more).
  // If rootNode is shadow root, it'll have a host, which is the element to which the shadow
  //  is attached, and the one we need to check if it's in the document or not (because the
  //  shadow, and all nodes it contains, is never considered in the document since shadows
  //  behave like self-contained DOMs; but if the shadow's HOST, which is part of the document,
  //  is hidden, or is not in the document itself but is detached, it will affect the shadow's
  //  visibility, including all the nodes it contains). The host could be any normal node,
  //  or a custom element (i.e. web component). Either way, that's the one that is considered
  //  part of the document, not the shadow root, nor any of its children (i.e. the node being
  //  tested).
  // To further complicate things, we have to look all the way up until we find a shadow HOST
  //  that is attached (or find none) because the node might be in nested shadows...
  // If rootNode is not a shadow root, it won't have a host, and so rootNode should be the
  //  document (per the docs) and while it's a Document-type object, that document does not
  //  appear to be the same as the node's `ownerDocument` for some reason, so it's safer
  //  to ignore the rootNode at this point, and use `node.ownerDocument`. Otherwise,
  //  using `rootNode.contains(node)` will _always_ be true we'll get false-positives when
  //  node is actually detached.
  // NOTE: If `nodeRootHost` or `node` happens to be the `document` itself (which is possible
  //  if a tabbable/focusable node was quickly added to the DOM, focused, and then removed
  //  from the DOM as in https://github.com/focus-trap/focus-trap-react/issues/905), then
  //  `ownerDocument` will be `null`, hence the optional chaining on it.
  var nodeRoot = node && getRootNode(node);
  var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;

  // in some cases, a detached node will return itself as the root instead of a document or
  //  shadow root object, in which case, we shouldn't try to look further up the host chain
  var attached = false;
  if (nodeRoot && nodeRoot !== node) {
    var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
    attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
    while (!attached && nodeRootHost) {
      var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
      // since it's not attached and we have a root host, the node MUST be in a nested shadow DOM,
      //  which means we need to get the host's host and check if that parent host is contained
      //  in (i.e. attached to) the document
      nodeRoot = getRootNode(nodeRootHost);
      nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
      attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
    }
  }
  return attached;
};
var isZeroArea = function isZeroArea(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(),
    width = _node$getBoundingClie.width,
    height = _node$getBoundingClie.height;
  return width === 0 && height === 0;
};
var isHidden = function isHidden(node, _ref) {
  var displayCheck = _ref.displayCheck,
    getShadowRoot = _ref.getShadowRoot;
  // NOTE: visibility will be `undefined` if node is detached from the document
  //  (see notes about this further down), which means we will consider it visible
  //  (this is legacy behavior from a very long way back)
  // NOTE: we check this regardless of `displayCheck="none"` because this is a
  //  _visibility_ check, not a _display_ check
  if (getComputedStyle(node).visibility === 'hidden') {
    return true;
  }
  var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
  if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
    return true;
  }
  if (!displayCheck || displayCheck === 'full' || displayCheck === 'legacy-full') {
    if (typeof getShadowRoot === 'function') {
      // figure out if we should consider the node to be in an undisclosed shadow and use the
      //  'non-zero-area' fallback
      var originalNode = node;
      while (node) {
        var parentElement = node.parentElement;
        var rootNode = getRootNode(node);
        if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true // check if there's an undisclosed shadow
        ) {
          // node has an undisclosed shadow which means we can only treat it as a black box, so we
          //  fall back to a non-zero-area test
          return isZeroArea(node);
        } else if (node.assignedSlot) {
          // iterate up slot
          node = node.assignedSlot;
        } else if (!parentElement && rootNode !== node.ownerDocument) {
          // cross shadow boundary
          node = rootNode.host;
        } else {
          // iterate up normal dom
          node = parentElement;
        }
      }
      node = originalNode;
    }
    // else, `getShadowRoot` might be true, but all that does is enable shadow DOM support
    //  (i.e. it does not also presume that all nodes might have undisclosed shadows); or
    //  it might be a falsy value, which means shadow DOM support is disabled

    // Since we didn't find it sitting in an undisclosed shadow (or shadows are disabled)
    //  now we can just test to see if it would normally be visible or not, provided it's
    //  attached to the main document.
    // NOTE: We must consider case where node is inside a shadow DOM and given directly to
    //  `isTabbable()` or `isFocusable()` -- regardless of `getShadowRoot` option setting.

    if (isNodeAttached(node)) {
      // this works wherever the node is: if there's at least one client rect, it's
      //  somehow displayed; it also covers the CSS 'display: contents' case where the
      //  node itself is hidden in place of its contents; and there's no need to search
      //  up the hierarchy either
      return !node.getClientRects().length;
    }

    // Else, the node isn't attached to the document, which means the `getClientRects()`
    //  API will __always__ return zero rects (this can happen, for example, if React
    //  is used to render nodes onto a detached tree, as confirmed in this thread:
    //  https://github.com/facebook/react/issues/9117#issuecomment-284228870)
    //
    // It also means that even window.getComputedStyle(node).display will return `undefined`
    //  because styles are only computed for nodes that are in the document.
    //
    // NOTE: THIS HAS BEEN THE CASE FOR YEARS. It is not new, nor is it caused by tabbable
    //  somehow. Though it was never stated officially, anyone who has ever used tabbable
    //  APIs on nodes in detached containers has actually implicitly used tabbable in what
    //  was later (as of v5.2.0 on Apr 9, 2021) called `displayCheck="none"` mode -- essentially
    //  considering __everything__ to be visible because of the innability to determine styles.
    //
    // v6.0.0: As of this major release, the default 'full' option __no longer treats detached
    //  nodes as visible with the 'none' fallback.__
    if (displayCheck !== 'legacy-full') {
      return true; // hidden
    }
    // else, fallback to 'none' mode and consider the node visible
  } else if (displayCheck === 'non-zero-area') {
    // NOTE: Even though this tests that the node's client rect is non-zero to determine
    //  whether it's displayed, and that a detached node will __always__ have a zero-area
    //  client rect, we don't special-case for whether the node is attached or not. In
    //  this mode, we do want to consider nodes that have a zero area to be hidden at all
    //  times, and that includes attached or not.
    return isZeroArea(node);
  }

  // visible, as far as we can tell, or per current `displayCheck=none` mode, we assume
  //  it's visible
  return false;
};

// form fields (nested) inside a disabled fieldset are not focusable/tabbable
//  unless they are in the _first_ <legend> element of the top-most disabled
//  fieldset
var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
    var parentNode = node.parentElement;
    // check if `node` is contained in a disabled <fieldset>
    while (parentNode) {
      if (parentNode.tagName === 'FIELDSET' && parentNode.disabled) {
        // look for the first <legend> among the children of the disabled <fieldset>
        for (var i = 0; i < parentNode.children.length; i++) {
          var child = parentNode.children.item(i);
          // when the first <legend> (in document order) is found
          if (child.tagName === 'LEGEND') {
            // if its parent <fieldset> is not nested in another disabled <fieldset>,
            // return whether `node` is a descendant of its first <legend>
            return matches.call(parentNode, 'fieldset[disabled] *') ? true : !child.contains(node);
          }
        }
        // the disabled <fieldset> containing `node` has no <legend>
        return true;
      }
      parentNode = parentNode.parentElement;
    }
  }

  // else, node's tabbable/focusable state should not be affected by a fieldset's
  //  enabled/disabled state
  return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
  if (node.disabled ||
  // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  isInert(node) || isHiddenInput(node) || isHidden(node, options) ||
  // For a details element with a summary, the summary element gets the focus
  isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }
  return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
  if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
    return false;
  }
  return true;
};
var isValidShadowRootTabbable = function isValidShadowRootTabbable(shadowHostNode) {
  var tabIndex = parseInt(shadowHostNode.getAttribute('tabindex'), 10);
  if (isNaN(tabIndex) || tabIndex >= 0) {
    return true;
  }
  // If a custom element has an explicit negative tabindex,
  // browsers will not allow tab targeting said element's children.
  return false;
};

/**
 * @param {Array.<Element|CandidateScope>} candidates
 * @returns Element[]
 */
var sortByOrder = function sortByOrder(candidates) {
  var regularTabbables = [];
  var orderedTabbables = [];
  candidates.forEach(function (item, i) {
    var isScope = !!item.scopeParent;
    var element = isScope ? item.scopeParent : item;
    var candidateTabindex = getSortOrderTabIndex(element, isScope);
    var elements = isScope ? sortByOrder(item.candidates) : element;
    if (candidateTabindex === 0) {
      isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        item: item,
        isScope: isScope,
        content: elements
      });
    }
  });
  return orderedTabbables.sort(sortOrderedTabbables).reduce(function (acc, sortable) {
    sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
    return acc;
  }, []).concat(regularTabbables);
};
var tabbable = function tabbable(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorTabbable.bind(null, options),
      flatten: false,
      getShadowRoot: options.getShadowRoot,
      shadowRootFilter: isValidShadowRootTabbable
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  }
  return sortByOrder(candidates);
};
var focusable = function focusable(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorFocusable.bind(null, options),
      flatten: true,
      getShadowRoot: options.getShadowRoot
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
  }
  return candidates;
};
var isTabbable = function isTabbable(node, options) {
  options = options || {};
  if (!node) {
    throw new Error('No node provided');
  }
  if (matches.call(node, candidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorTabbable(options, node);
};
var focusableCandidateSelector = /* #__PURE__ */candidateSelectors.concat('iframe').join(',');
var isFocusable = function isFocusable(node, options) {
  options = options || {};
  if (!node) {
    throw new Error('No node provided');
  }
  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorFocusable(options, node);
};


//# sourceMappingURL=index.esm.js.map

;// ../node_modules/focus-trap/dist/focus-trap.esm.js
/*!
* focus-trap 7.6.5
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/


function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var activeFocusTraps = {
  activateTrap: function activateTrap(trapStack, trap) {
    if (trapStack.length > 0) {
      var activeTrap = trapStack[trapStack.length - 1];
      if (activeTrap !== trap) {
        activeTrap._setPausedState(true);
      }
    }
    var trapIndex = trapStack.indexOf(trap);
    if (trapIndex === -1) {
      trapStack.push(trap);
    } else {
      // move this existing trap to the front of the queue
      trapStack.splice(trapIndex, 1);
      trapStack.push(trap);
    }
  },
  deactivateTrap: function deactivateTrap(trapStack, trap) {
    var trapIndex = trapStack.indexOf(trap);
    if (trapIndex !== -1) {
      trapStack.splice(trapIndex, 1);
    }
    if (trapStack.length > 0 && !trapStack[trapStack.length - 1]._isManuallyPaused()) {
      trapStack[trapStack.length - 1]._setPausedState(false);
    }
  }
};
var isSelectableInput = function isSelectableInput(node) {
  return node.tagName && node.tagName.toLowerCase() === 'input' && typeof node.select === 'function';
};
var isEscapeEvent = function isEscapeEvent(e) {
  return (e === null || e === void 0 ? void 0 : e.key) === 'Escape' || (e === null || e === void 0 ? void 0 : e.key) === 'Esc' || (e === null || e === void 0 ? void 0 : e.keyCode) === 27;
};
var isTabEvent = function isTabEvent(e) {
  return (e === null || e === void 0 ? void 0 : e.key) === 'Tab' || (e === null || e === void 0 ? void 0 : e.keyCode) === 9;
};

// checks for TAB by default
var isKeyForward = function isKeyForward(e) {
  return isTabEvent(e) && !e.shiftKey;
};

// checks for SHIFT+TAB by default
var isKeyBackward = function isKeyBackward(e) {
  return isTabEvent(e) && e.shiftKey;
};
var delay = function delay(fn) {
  return setTimeout(fn, 0);
};

/**
 * Get an option's value when it could be a plain value, or a handler that provides
 *  the value.
 * @param {*} value Option's value to check.
 * @param {...*} [params] Any parameters to pass to the handler, if `value` is a function.
 * @returns {*} The `value`, or the handler's returned value.
 */
var valueOrHandler = function valueOrHandler(value) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }
  return typeof value === 'function' ? value.apply(void 0, params) : value;
};
var getActualTarget = function getActualTarget(event) {
  // NOTE: If the trap is _inside_ a shadow DOM, event.target will always be the
  //  shadow host. However, event.target.composedPath() will be an array of
  //  nodes "clicked" from inner-most (the actual element inside the shadow) to
  //  outer-most (the host HTML document). If we have access to composedPath(),
  //  then use its first element; otherwise, fall back to event.target (and
  //  this only works for an _open_ shadow DOM; otherwise,
  //  composedPath()[0] === event.target always).
  return event.target.shadowRoot && typeof event.composedPath === 'function' ? event.composedPath()[0] : event.target;
};

// NOTE: this must be _outside_ `createFocusTrap()` to make sure all traps in this
//  current instance use the same stack if `userOptions.trapStack` isn't specified
var internalTrapStack = [];
var createFocusTrap = function createFocusTrap(elements, userOptions) {
  // SSR: a live trap shouldn't be created in this type of environment so this
  //  should be safe code to execute if the `document` option isn't specified
  var doc = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.document) || document;
  var trapStack = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.trapStack) || internalTrapStack;
  var config = _objectSpread2({
    returnFocusOnDeactivate: true,
    escapeDeactivates: true,
    delayInitialFocus: true,
    isKeyForward: isKeyForward,
    isKeyBackward: isKeyBackward
  }, userOptions);
  var state = {
    // containers given to createFocusTrap()
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{
    //   container: HTMLElement,
    //   tabbableNodes: Array<HTMLElement>, // empty if none
    //   focusableNodes: Array<HTMLElement>, // empty if none
    //   posTabIndexesFound: boolean,
    //   firstTabbableNode: HTMLElement|undefined,
    //   lastTabbableNode: HTMLElement|undefined,
    //   firstDomTabbableNode: HTMLElement|undefined,
    //   lastDomTabbableNode: HTMLElement|undefined,
    //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
    // }>}
    containerGroups: [],
    // same order/length as `containers` list

    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false,
    manuallyPaused: false,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: undefined,
    // the most recent KeyboardEvent for the configured nav key (typically [SHIFT+]TAB), if any
    recentNavEvent: undefined
  };
  var trap; // eslint-disable-line prefer-const -- some private functions reference it, and its methods reference private functions, so we must declare here and define later

  /**
   * Gets a configuration option value.
   * @param {Object|undefined} configOverrideOptions If true, and option is defined in this set,
   *  value will be taken from this object. Otherwise, value will be taken from base configuration.
   * @param {string} optionName Name of the option whose value is sought.
   * @param {string|undefined} [configOptionName] Name of option to use __instead of__ `optionName`
   *  IIF `configOverrideOptions` is not defined. Otherwise, `optionName` is used.
   */
  var getOption = function getOption(configOverrideOptions, optionName, configOptionName) {
    return configOverrideOptions && configOverrideOptions[optionName] !== undefined ? configOverrideOptions[optionName] : config[configOptionName || optionName];
  };

  /**
   * Finds the index of the container that contains the element.
   * @param {HTMLElement} element
   * @param {Event} [event] If available, and `element` isn't directly found in any container,
   *  the event's composed path is used to see if includes any known trap containers in the
   *  case where the element is inside a Shadow DOM.
   * @returns {number} Index of the container in either `state.containers` or
   *  `state.containerGroups` (the order/length of these lists are the same); -1
   *  if the element isn't found.
   */
  var findContainerIndex = function findContainerIndex(element, event) {
    var composedPath = typeof (event === null || event === void 0 ? void 0 : event.composedPath) === 'function' ? event.composedPath() : undefined;
    // NOTE: search `containerGroups` because it's possible a group contains no tabbable
    //  nodes, but still contains focusable nodes (e.g. if they all have `tabindex=-1`)
    //  and we still need to find the element in there
    return state.containerGroups.findIndex(function (_ref) {
      var container = _ref.container,
        tabbableNodes = _ref.tabbableNodes;
      return container.contains(element) || (// fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      composedPath === null || composedPath === void 0 ? void 0 : composedPath.includes(container)) || tabbableNodes.find(function (node) {
        return node === element;
      });
    });
  };

  /**
   * Gets the node for the given option, which is expected to be an option that
   *  can be either a DOM node, a string that is a selector to get a node, `false`
   *  (if a node is explicitly NOT given), or a function that returns any of these
   *  values.
   * @param {string} optionName
   * @param {Object} options
   * @param {boolean} [options.hasFallback] True if the option could be a selector string
   *  and the option allows for a fallback scenario in the case where the selector is
   *  valid but does not match a node (i.e. the queried node doesn't exist in the DOM).
   * @param {Array} [options.params] Params to pass to the option if it's a function.
   * @returns {undefined | null | false | HTMLElement | SVGElement} Returns
   *  `undefined` if the option is not specified; `null` if the option didn't resolve
   *  to a node but `options.hasFallback=true`, `false` if the option resolved to `false`
   *  (node explicitly not given); otherwise, the resolved DOM node.
   * @throws {Error} If the option is set, not `false`, and is not, or does not
   *  resolve to a node, unless the option is a selector string and `options.hasFallback=true`.
   */
  var getNodeForOption = function getNodeForOption(optionName) {
    var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$hasFallback = _ref2.hasFallback,
      hasFallback = _ref2$hasFallback === void 0 ? false : _ref2$hasFallback,
      _ref2$params = _ref2.params,
      params = _ref2$params === void 0 ? [] : _ref2$params;
    var optionValue = config[optionName];
    if (typeof optionValue === 'function') {
      optionValue = optionValue.apply(void 0, _toConsumableArray(params));
    }
    if (optionValue === true) {
      optionValue = undefined; // use default value
    }
    if (!optionValue) {
      if (optionValue === undefined || optionValue === false) {
        return optionValue;
      }
      // else, empty string (invalid), null (invalid), 0 (invalid)

      throw new Error("`".concat(optionName, "` was specified but was not a node, or did not return a node"));
    }
    var node = optionValue; // could be HTMLElement, SVGElement, or non-empty string at this point

    if (typeof optionValue === 'string') {
      try {
        node = doc.querySelector(optionValue); // resolve to node, or null if fails
      } catch (err) {
        throw new Error("`".concat(optionName, "` appears to be an invalid selector; error=\"").concat(err.message, "\""));
      }
      if (!node) {
        if (!hasFallback) {
          throw new Error("`".concat(optionName, "` as selector refers to no known node"));
        }
        // else, `node` MUST be `null` because that's what `Document.querySelector()` returns
        //  if the selector is valid but doesn't match anything
      }
    }
    return node;
  };
  var getInitialFocusNode = function getInitialFocusNode() {
    var node = getNodeForOption('initialFocus', {
      hasFallback: true
    });

    // false explicitly indicates we want no initialFocus at all
    if (node === false) {
      return false;
    }
    if (node === undefined || node && !isFocusable(node, config.tabbableOptions)) {
      // option not specified nor focusable: use fallback options
      if (findContainerIndex(doc.activeElement) >= 0) {
        node = doc.activeElement;
      } else {
        var firstTabbableGroup = state.tabbableGroups[0];
        var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;

        // NOTE: `fallbackFocus` option function cannot return `false` (not supported)
        node = firstTabbableNode || getNodeForOption('fallbackFocus');
      }
    } else if (node === null) {
      // option is a VALID selector string that doesn't yield a node: use the `fallbackFocus`
      //  option instead of the default behavior when the option isn't specified at all
      node = getNodeForOption('fallbackFocus');
    }
    if (!node) {
      throw new Error('Your focus-trap needs to have at least one focusable element');
    }
    return node;
  };
  var updateTabbableNodes = function updateTabbableNodes() {
    state.containerGroups = state.containers.map(function (container) {
      var tabbableNodes = tabbable(container, config.tabbableOptions);

      // NOTE: if we have tabbable nodes, we must have focusable nodes; focusable nodes
      //  are a superset of tabbable nodes since nodes with negative `tabindex` attributes
      //  are focusable but not tabbable
      var focusableNodes = focusable(container, config.tabbableOptions);
      var firstTabbableNode = tabbableNodes.length > 0 ? tabbableNodes[0] : undefined;
      var lastTabbableNode = tabbableNodes.length > 0 ? tabbableNodes[tabbableNodes.length - 1] : undefined;
      var firstDomTabbableNode = focusableNodes.find(function (node) {
        return isTabbable(node);
      });
      var lastDomTabbableNode = focusableNodes.slice().reverse().find(function (node) {
        return isTabbable(node);
      });
      var posTabIndexesFound = !!tabbableNodes.find(function (node) {
        return getTabIndex(node) > 0;
      });
      return {
        container: container,
        tabbableNodes: tabbableNodes,
        focusableNodes: focusableNodes,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: posTabIndexesFound,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: firstTabbableNode,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: lastTabbableNode,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: firstDomTabbableNode,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: lastDomTabbableNode,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function nextTabbableNode(node) {
          var forward = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var nodeIdx = tabbableNodes.indexOf(node);
          if (nodeIdx < 0) {
            // either not tabbable nor focusable, or was focused but not tabbable (negative tabindex):
            //  since `node` should at least have been focusable, we assume that's the case and mimic
            //  what browsers do, which is set focus to the next node in __document position order__,
            //  regardless of positive tabindexes, if any -- and for reasons explained in the NOTE
            //  above related to `firstDomTabbable` and `lastDomTabbable` properties, we fall back to
            //  basic DOM order
            if (forward) {
              return focusableNodes.slice(focusableNodes.indexOf(node) + 1).find(function (el) {
                return isTabbable(el);
              });
            }
            return focusableNodes.slice(0, focusableNodes.indexOf(node)).reverse().find(function (el) {
              return isTabbable(el);
            });
          }
          return tabbableNodes[nodeIdx + (forward ? 1 : -1)];
        }
      };
    });
    state.tabbableGroups = state.containerGroups.filter(function (group) {
      return group.tabbableNodes.length > 0;
    });

    // throw if no groups have tabbable nodes and we don't have a fallback focus node either
    if (state.tabbableGroups.length <= 0 && !getNodeForOption('fallbackFocus') // returning false not supported for this option
    ) {
      throw new Error('Your focus-trap must have at least one container with at least one tabbable node in it at all times');
    }

    // NOTE: Positive tabindexes are only properly supported in single-container traps because
    //  doing it across multiple containers where tabindexes could be all over the place
    //  would require Tabbable to support multiple containers, would require additional
    //  specialized Shadow DOM support, and would require Tabbable's multi-container support
    //  to look at those containers in document position order rather than user-provided
    //  order (as they are treated in Focus-trap, for legacy reasons). See discussion on
    //  https://github.com/focus-trap/focus-trap/issues/375 for more details.
    if (state.containerGroups.find(function (g) {
      return g.posTabIndexesFound;
    }) && state.containerGroups.length > 1) {
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
    }
  };

  /**
   * Gets the current activeElement. If it's a web-component and has open shadow-root
   * it will recursively search inside shadow roots for the "true" activeElement.
   *
   * @param {Document | ShadowRoot} el
   *
   * @returns {HTMLElement} The element that currently has the focus
   **/
  var _getActiveElement = function getActiveElement(el) {
    var activeElement = el.activeElement;
    if (!activeElement) {
      return;
    }
    if (activeElement.shadowRoot && activeElement.shadowRoot.activeElement !== null) {
      return _getActiveElement(activeElement.shadowRoot);
    }
    return activeElement;
  };
  var _tryFocus = function tryFocus(node) {
    if (node === false) {
      return;
    }
    if (node === _getActiveElement(document)) {
      return;
    }
    if (!node || !node.focus) {
      _tryFocus(getInitialFocusNode());
      return;
    }
    node.focus({
      preventScroll: !!config.preventScroll
    });
    // NOTE: focus() API does not trigger focusIn event so set MRU node manually
    state.mostRecentlyFocusedNode = node;
    if (isSelectableInput(node)) {
      node.select();
    }
  };
  var getReturnFocusNode = function getReturnFocusNode(previousActiveElement) {
    var node = getNodeForOption('setReturnFocus', {
      params: [previousActiveElement]
    });
    return node ? node : node === false ? false : previousActiveElement;
  };

  /**
   * Finds the next node (in either direction) where focus should move according to a
   *  keyboard focus-in event.
   * @param {Object} params
   * @param {Node} [params.target] Known target __from which__ to navigate, if any.
   * @param {KeyboardEvent|FocusEvent} [params.event] Event to use if `target` isn't known (event
   *  will be used to determine the `target`). Ignored if `target` is specified.
   * @param {boolean} [params.isBackward] True if focus should move backward.
   * @returns {Node|undefined} The next node, or `undefined` if a next node couldn't be
   *  determined given the current state of the trap.
   */
  var findNextNavNode = function findNextNavNode(_ref3) {
    var target = _ref3.target,
      event = _ref3.event,
      _ref3$isBackward = _ref3.isBackward,
      isBackward = _ref3$isBackward === void 0 ? false : _ref3$isBackward;
    target = target || getActualTarget(event);
    updateTabbableNodes();
    var destinationNode = null;
    if (state.tabbableGroups.length > 0) {
      // make sure the target is actually contained in a group
      // NOTE: the target may also be the container itself if it's focusable
      //  with tabIndex='-1' and was given initial focus
      var containerIndex = findContainerIndex(target, event);
      var containerGroup = containerIndex >= 0 ? state.containerGroups[containerIndex] : undefined;
      if (containerIndex < 0) {
        // target not found in any group: quite possible focus has escaped the trap,
        //  so bring it back into...
        if (isBackward) {
          // ...the last node in the last group
          destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
        } else {
          // ...the first node in the first group
          destinationNode = state.tabbableGroups[0].firstTabbableNode;
        }
      } else if (isBackward) {
        // REVERSE

        // is the target the first tabbable node in a group?
        var startOfGroupIndex = state.tabbableGroups.findIndex(function (_ref4) {
          var firstTabbableNode = _ref4.firstTabbableNode;
          return target === firstTabbableNode;
        });
        if (startOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config.tabbableOptions) && !isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target, false))) {
          // an exception case where the target is either the container itself, or
          //  a non-tabbable node that was given focus (i.e. tabindex is negative
          //  and user clicked on it or node was programmatically given focus)
          //  and is not followed by any other tabbable node, in which
          //  case, we should handle shift+tab as if focus were on the container's
          //  first tabbable node, and go to the last tabbable node of the LAST group
          startOfGroupIndex = containerIndex;
        }
        if (startOfGroupIndex >= 0) {
          // YES: then shift+tab should go to the last tabbable node in the
          //  previous group (and wrap around to the last tabbable node of
          //  the LAST group if it's the first tabbable node of the FIRST group)
          var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
          var destinationGroup = state.tabbableGroups[destinationGroupIndex];
          destinationNode = getTabIndex(target) >= 0 ? destinationGroup.lastTabbableNode : destinationGroup.lastDomTabbableNode;
        } else if (!isTabEvent(event)) {
          // user must have customized the nav keys so we have to move focus manually _within_
          //  the active group: do this based on the order determined by tabbable()
          destinationNode = containerGroup.nextTabbableNode(target, false);
        }
      } else {
        // FORWARD

        // is the target the last tabbable node in a group?
        var lastOfGroupIndex = state.tabbableGroups.findIndex(function (_ref5) {
          var lastTabbableNode = _ref5.lastTabbableNode;
          return target === lastTabbableNode;
        });
        if (lastOfGroupIndex < 0 && (containerGroup.container === target || isFocusable(target, config.tabbableOptions) && !isTabbable(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target))) {
          // an exception case where the target is the container itself, or
          //  a non-tabbable node that was given focus (i.e. tabindex is negative
          //  and user clicked on it or node was programmatically given focus)
          //  and is not followed by any other tabbable node, in which
          //  case, we should handle tab as if focus were on the container's
          //  last tabbable node, and go to the first tabbable node of the FIRST group
          lastOfGroupIndex = containerIndex;
        }
        if (lastOfGroupIndex >= 0) {
          // YES: then tab should go to the first tabbable node in the next
          //  group (and wrap around to the first tabbable node of the FIRST
          //  group if it's the last tabbable node of the LAST group)
          var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;
          var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
          destinationNode = getTabIndex(target) >= 0 ? _destinationGroup.firstTabbableNode : _destinationGroup.firstDomTabbableNode;
        } else if (!isTabEvent(event)) {
          // user must have customized the nav keys so we have to move focus manually _within_
          //  the active group: do this based on the order determined by tabbable()
          destinationNode = containerGroup.nextTabbableNode(target);
        }
      }
    } else {
      // no groups available
      // NOTE: the fallbackFocus option does not support returning false to opt-out
      destinationNode = getNodeForOption('fallbackFocus');
    }
    return destinationNode;
  };

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.
  var checkPointerDown = function checkPointerDown(e) {
    var target = getActualTarget(e);
    if (findContainerIndex(target, e) >= 0) {
      // allow the click since it ocurred inside the trap
      return;
    }
    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      // immediately deactivate the trap
      trap.deactivate({
        // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
        //  which will result in the outside click setting focus to the node
        //  that was clicked (and if not focusable, to "nothing"); by setting
        //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
        //  on activation (or the configured `setReturnFocus` node), whether the
        //  outside click was on a focusable node or not
        returnFocus: config.returnFocusOnDeactivate
      });
      return;
    }

    // This is needed for mobile devices.
    // (If we'll only let `click` events through,
    // then on mobile they will be blocked anyways if `touchstart` is blocked.)
    if (valueOrHandler(config.allowOutsideClick, e)) {
      // allow the click outside the trap to take place
      return;
    }

    // otherwise, prevent the click
    e.preventDefault();
  };

  // In case focus escapes the trap for some strange reason, pull it back in.
  // NOTE: the focusIn event is NOT cancelable, so if focus escapes, it may cause unexpected
  //  scrolling if the node that got focused was out of view; there's nothing we can do to
  //  prevent that from happening by the time we discover that focus escaped
  var checkFocusIn = function checkFocusIn(event) {
    var target = getActualTarget(event);
    var targetContained = findContainerIndex(target, event) >= 0;

    // In Firefox when you Tab out of an iframe the Document is briefly focused.
    if (targetContained || target instanceof Document) {
      if (targetContained) {
        state.mostRecentlyFocusedNode = target;
      }
    } else {
      // escaped! pull it back in to where it just left
      event.stopImmediatePropagation();

      // focus will escape if the MRU node had a positive tab index and user tried to nav forward;
      //  it will also escape if the MRU node had a 0 tab index and user tried to nav backward
      //  toward a node with a positive tab index
      var nextNode; // next node to focus, if we find one
      var navAcrossContainers = true;
      if (state.mostRecentlyFocusedNode) {
        if (getTabIndex(state.mostRecentlyFocusedNode) > 0) {
          // MRU container index must be >=0 otherwise we wouldn't have it as an MRU node...
          var mruContainerIdx = findContainerIndex(state.mostRecentlyFocusedNode);
          // there MAY not be any tabbable nodes in the container if there are at least 2 containers
          //  and the MRU node is focusable but not tabbable (focus-trap requires at least 1 container
          //  with at least one tabbable node in order to function, so this could be the other container
          //  with nothing tabbable in it)
          var tabbableNodes = state.containerGroups[mruContainerIdx].tabbableNodes;
          if (tabbableNodes.length > 0) {
            // MRU tab index MAY not be found if the MRU node is focusable but not tabbable
            var mruTabIdx = tabbableNodes.findIndex(function (node) {
              return node === state.mostRecentlyFocusedNode;
            });
            if (mruTabIdx >= 0) {
              if (config.isKeyForward(state.recentNavEvent)) {
                if (mruTabIdx + 1 < tabbableNodes.length) {
                  nextNode = tabbableNodes[mruTabIdx + 1];
                  navAcrossContainers = false;
                }
                // else, don't wrap within the container as focus should move to next/previous
                //  container
              } else {
                if (mruTabIdx - 1 >= 0) {
                  nextNode = tabbableNodes[mruTabIdx - 1];
                  navAcrossContainers = false;
                }
                // else, don't wrap within the container as focus should move to next/previous
                //  container
              }
              // else, don't find in container order without considering direction too
            }
          }
          // else, no tabbable nodes in that container (which means we must have at least one other
          //  container with at least one tabbable node in it, otherwise focus-trap would've thrown
          //  an error the last time updateTabbableNodes() was run): find next node among all known
          //  containers
        } else {
          // check to see if there's at least one tabbable node with a positive tab index inside
          //  the trap because focus seems to escape when navigating backward from a tabbable node
          //  with tabindex=0 when this is the case (instead of wrapping to the tabbable node with
          //  the greatest positive tab index like it should)
          if (!state.containerGroups.some(function (g) {
            return g.tabbableNodes.some(function (n) {
              return getTabIndex(n) > 0;
            });
          })) {
            // no containers with tabbable nodes with positive tab indexes which means the focus
            //  escaped for some other reason and we should just execute the fallback to the
            //  MRU node or initial focus node, if any
            navAcrossContainers = false;
          }
        }
      } else {
        // no MRU node means we're likely in some initial condition when the trap has just
        //  been activated and initial focus hasn't been given yet, in which case we should
        //  fall through to trying to focus the initial focus node, which is what should
        //  happen below at this point in the logic
        navAcrossContainers = false;
      }
      if (navAcrossContainers) {
        nextNode = findNextNavNode({
          // move FROM the MRU node, not event-related node (which will be the node that is
          //  outside the trap causing the focus escape we're trying to fix)
          target: state.mostRecentlyFocusedNode,
          isBackward: config.isKeyBackward(state.recentNavEvent)
        });
      }
      if (nextNode) {
        _tryFocus(nextNode);
      } else {
        _tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
      }
    }
    state.recentNavEvent = undefined; // clear
  };

  // Hijack key nav events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.
  var checkKeyNav = function checkKeyNav(event) {
    var isBackward = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    state.recentNavEvent = event;
    var destinationNode = findNextNavNode({
      event: event,
      isBackward: isBackward
    });
    if (destinationNode) {
      if (isTabEvent(event)) {
        // since tab natively moves focus, we wouldn't have a destination node unless we
        //  were on the edge of a container and had to move to the next/previous edge, in
        //  which case we want to prevent default to keep the browser from moving focus
        //  to where it normally would
        event.preventDefault();
      }
      _tryFocus(destinationNode);
    }
    // else, let the browser take care of [shift+]tab and move the focus
  };
  var checkTabKey = function checkTabKey(event) {
    if (config.isKeyForward(event) || config.isKeyBackward(event)) {
      checkKeyNav(event, config.isKeyBackward(event));
    }
  };

  // we use a different event phase for the Escape key to allow canceling the event and checking for this in escapeDeactivates
  var checkEscapeKey = function checkEscapeKey(event) {
    if (isEscapeEvent(event) && valueOrHandler(config.escapeDeactivates, event) !== false) {
      event.preventDefault();
      trap.deactivate();
    }
  };
  var checkClick = function checkClick(e) {
    var target = getActualTarget(e);
    if (findContainerIndex(target, e) >= 0) {
      return;
    }
    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      return;
    }
    if (valueOrHandler(config.allowOutsideClick, e)) {
      return;
    }
    e.preventDefault();
    e.stopImmediatePropagation();
  };

  //
  // EVENT LISTENERS
  //

  var addListeners = function addListeners() {
    if (!state.active) {
      return;
    }

    // There can be only one listening focus trap at a time
    activeFocusTraps.activateTrap(trapStack, trap);

    // Delay ensures that the focused element doesn't capture the event
    // that caused the focus trap activation.
    state.delayInitialFocusTimer = config.delayInitialFocus ? delay(function () {
      _tryFocus(getInitialFocusNode());
    }) : _tryFocus(getInitialFocusNode());
    doc.addEventListener('focusin', checkFocusIn, true);
    doc.addEventListener('mousedown', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('touchstart', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('click', checkClick, {
      capture: true,
      passive: false
    });
    doc.addEventListener('keydown', checkTabKey, {
      capture: true,
      passive: false
    });
    doc.addEventListener('keydown', checkEscapeKey);
    return trap;
  };
  var removeListeners = function removeListeners() {
    if (!state.active) {
      return;
    }
    doc.removeEventListener('focusin', checkFocusIn, true);
    doc.removeEventListener('mousedown', checkPointerDown, true);
    doc.removeEventListener('touchstart', checkPointerDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkTabKey, true);
    doc.removeEventListener('keydown', checkEscapeKey);
    return trap;
  };

  //
  // MUTATION OBSERVER
  //

  var checkDomRemoval = function checkDomRemoval(mutations) {
    var isFocusedNodeRemoved = mutations.some(function (mutation) {
      var removedNodes = Array.from(mutation.removedNodes);
      return removedNodes.some(function (node) {
        return node === state.mostRecentlyFocusedNode;
      });
    });

    // If the currently focused is removed then browsers will move focus to the
    // <body> element. If this happens, try to move focus back into the trap.
    if (isFocusedNodeRemoved) {
      _tryFocus(getInitialFocusNode());
    }
  };

  // Use MutationObserver - if supported - to detect if focused node is removed
  // from the DOM.
  var mutationObserver = typeof window !== 'undefined' && 'MutationObserver' in window ? new MutationObserver(checkDomRemoval) : undefined;
  var updateObservedNodes = function updateObservedNodes() {
    if (!mutationObserver) {
      return;
    }
    mutationObserver.disconnect();
    if (state.active && !state.paused) {
      state.containers.map(function (container) {
        mutationObserver.observe(container, {
          subtree: true,
          childList: true
        });
      });
    }
  };

  //
  // TRAP DEFINITION
  //

  trap = {
    get active() {
      return state.active;
    },
    get paused() {
      return state.paused;
    },
    activate: function activate(activateOptions) {
      if (state.active) {
        return this;
      }
      var onActivate = getOption(activateOptions, 'onActivate');
      var onPostActivate = getOption(activateOptions, 'onPostActivate');
      var checkCanFocusTrap = getOption(activateOptions, 'checkCanFocusTrap');
      if (!checkCanFocusTrap) {
        updateTabbableNodes();
      }
      state.active = true;
      state.paused = false;
      state.nodeFocusedBeforeActivation = _getActiveElement(doc);
      onActivate === null || onActivate === void 0 || onActivate();
      var finishActivation = function finishActivation() {
        if (checkCanFocusTrap) {
          updateTabbableNodes();
        }
        addListeners();
        updateObservedNodes();
        onPostActivate === null || onPostActivate === void 0 || onPostActivate();
      };
      if (checkCanFocusTrap) {
        checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
        return this;
      }
      finishActivation();
      return this;
    },
    deactivate: function deactivate(deactivateOptions) {
      if (!state.active) {
        return this;
      }
      var options = _objectSpread2({
        onDeactivate: config.onDeactivate,
        onPostDeactivate: config.onPostDeactivate,
        checkCanReturnFocus: config.checkCanReturnFocus
      }, deactivateOptions);
      clearTimeout(state.delayInitialFocusTimer); // noop if undefined
      state.delayInitialFocusTimer = undefined;
      removeListeners();
      state.active = false;
      state.paused = false;
      updateObservedNodes();
      activeFocusTraps.deactivateTrap(trapStack, trap);
      var onDeactivate = getOption(options, 'onDeactivate');
      var onPostDeactivate = getOption(options, 'onPostDeactivate');
      var checkCanReturnFocus = getOption(options, 'checkCanReturnFocus');
      var returnFocus = getOption(options, 'returnFocus', 'returnFocusOnDeactivate');
      onDeactivate === null || onDeactivate === void 0 || onDeactivate();
      var finishDeactivation = function finishDeactivation() {
        delay(function () {
          if (returnFocus) {
            _tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
          }
          onPostDeactivate === null || onPostDeactivate === void 0 || onPostDeactivate();
        });
      };
      if (returnFocus && checkCanReturnFocus) {
        checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
        return this;
      }
      finishDeactivation();
      return this;
    },
    pause: function pause(pauseOptions) {
      if (!state.active) {
        return this;
      }
      state.manuallyPaused = true;
      return this._setPausedState(true, pauseOptions);
    },
    unpause: function unpause(unpauseOptions) {
      if (!state.active) {
        return this;
      }
      state.manuallyPaused = false;
      if (trapStack[trapStack.length - 1] !== this) {
        return this;
      }
      return this._setPausedState(false, unpauseOptions);
    },
    updateContainerElements: function updateContainerElements(containerElements) {
      var elementsAsArray = [].concat(containerElements).filter(Boolean);
      state.containers = elementsAsArray.map(function (element) {
        return typeof element === 'string' ? doc.querySelector(element) : element;
      });
      if (state.active) {
        updateTabbableNodes();
      }
      updateObservedNodes();
      return this;
    }
  };
  Object.defineProperties(trap, {
    _isManuallyPaused: {
      value: function value() {
        return state.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function value(paused, options) {
        if (state.paused === paused) {
          return this;
        }
        state.paused = paused;
        if (paused) {
          var onPause = getOption(options, 'onPause');
          var onPostPause = getOption(options, 'onPostPause');
          onPause === null || onPause === void 0 || onPause();
          removeListeners();
          updateObservedNodes();
          onPostPause === null || onPostPause === void 0 || onPostPause();
        } else {
          var onUnpause = getOption(options, 'onUnpause');
          var onPostUnpause = getOption(options, 'onPostUnpause');
          onUnpause === null || onUnpause === void 0 || onUnpause();
          updateTabbableNodes();
          addListeners();
          updateObservedNodes();
          onPostUnpause === null || onPostUnpause === void 0 || onPostUnpause();
        }
        return this;
      }
    }
  });

  // initialize container elements
  trap.updateContainerElements(elements);
  return trap;
};


//# sourceMappingURL=focus-trap.esm.js.map

// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/dom.js
var dom = __webpack_require__(25450);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/runtime.js
var runtime = __webpack_require__(14558);
;// ../node_modules/@esri/calcite-components/dist/chunks/useFocusTrap.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */




const outsideClickDeactivated = /* @__PURE__ */ new WeakSet();
function createFocusTrapOptions(hostEl, options) {
  const fallbackFocus = options?.fallbackFocus || hostEl;
  const clickOutsideDeactivates = options?.clickOutsideDeactivates ?? true;
  return {
    fallbackFocus,
    setReturnFocus: (el) => {
      if (!outsideClickDeactivated.has(hostEl)) {
        (0,dom.b)(el);
      }
      return false;
    },
    ...options,
    // the following options are not overridable
    document: hostEl.ownerDocument,
    tabbableOptions: dom.p,
    trapStack: runtime.f,
    clickOutsideDeactivates: (event) => {
      if (!outsideClickDeactivated.has(hostEl)) {
        outsideClickDeactivated.add(hostEl);
      }
      return typeof clickOutsideDeactivates === "function" ? clickOutsideDeactivates(event) : clickOutsideDeactivates;
    },
    onPostDeactivate: () => {
      outsideClickDeactivated.delete(hostEl);
    }
  };
}
function getEffectiveContainerElements(targetEl, { focusTrapOptions }, extraContainers) {
  if (!focusTrapOptions?.extraContainers && !extraContainers) {
    return targetEl;
  }
  return [targetEl, ...toContainerArray(focusTrapOptions?.extraContainers), ...toContainerArray(extraContainers)];
}
function toContainerArray(containers = []) {
  return Array.isArray(containers) ? containers : [containers];
}
const useFocusTrap = (options) => {
  return (0,controllers/* makeGenericController */.aK)((component, controller) => {
    let focusTrap;
    let focusTrapEl;
    let effectiveContainers;
    const internalFocusTrapOptions = options.focusTrapOptions;
    controller.onConnected(() => {
      if (component[options.triggerProp] && focusTrap) {
        utils.activate();
      }
    });
    controller.onUpdate((changes) => {
      if (component.hasUpdated && changes.has("focusTrapDisabled")) {
        if (component.focusTrapDisabled) {
          utils.deactivate();
        } else {
          utils.activate();
        }
      }
    });
    controller.onDisconnected(() => utils.deactivate());
    const utils = {
      activate: () => {
        const targetEl = focusTrapEl || component.el;
        if (!targetEl.isConnected) {
          return;
        }
        if (!focusTrap) {
          const effectiveFocusTrapOptions = {
            ...internalFocusTrapOptions,
            ...component.focusTrapOptions
          };
          effectiveContainers ||= getEffectiveContainerElements(targetEl, component);
          focusTrap = createFocusTrap(effectiveContainers, createFocusTrapOptions(targetEl, effectiveFocusTrapOptions));
        }
        if (typeof component.focusTrapDisabledOverride === "function" ? !component.focusTrapDisabledOverride() : !component.focusTrapDisabled) {
          focusTrap.activate();
        }
      },
      deactivate: () => focusTrap?.deactivate(),
      overrideFocusTrapEl: (el) => {
        if (focusTrap) {
          throw new Error("Focus trap already created");
        }
        focusTrapEl = el;
      },
      setExtraContainers: (extraContainers) => {
        const targetEl = focusTrapEl || component.el;
        effectiveContainers = getEffectiveContainerElements(targetEl, component, extraContainers);
      },
      updateContainerElements: () => {
        return focusTrap?.updateContainerElements(effectiveContainers);
      }
    };
    return utils;
  });
};



/***/ }),

/***/ 48323:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ usePreventDocumentScroll)
/* harmony export */ });
/* harmony import */ var _arcgis_lumina_controllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73339);
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */

let openedComponentCount = 0;
let initialDocumentOverflowStyle = "";
const usePreventDocumentScroll = () => {
  function addOpenedComponent() {
    openedComponentCount++;
    if (openedComponentCount === 1) {
      initialDocumentOverflowStyle = document.documentElement.style.overflow;
      document.documentElement.style.overflow = "hidden";
    }
  }
  function removeOpenedComponent() {
    openedComponentCount--;
    if (openedComponentCount === 0) {
      document.documentElement.style.overflow = initialDocumentOverflowStyle;
    }
  }
  return (0,_arcgis_lumina_controllers__WEBPACK_IMPORTED_MODULE_0__/* .makeGenericController */ .aK)((component, controller) => {
    controller.onConnected(() => {
      if (component.opened && component.preventDocumentScroll) {
        addOpenedComponent();
      }
    });
    controller.onUpdate((changes) => {
      if (!component.hasUpdated) {
        return;
      }
      if (changes.has("opened") && component.preventDocumentScroll) {
        if (component.opened) {
          addOpenedComponent();
        } else {
          removeOpenedComponent();
        }
      } else if (changes.has("preventDocumentScroll") && component.opened) {
        if (component.preventDocumentScroll) {
          addOpenedComponent();
        } else {
          removeOpenedComponent();
        }
      }
    });
    controller.onDisconnected(() => {
      if (component.opened && component.preventDocumentScroll) {
        removeOpenedComponent();
      }
    });
  });
};



/***/ }),

/***/ 13478:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ useT9n)
/* harmony export */ });
/* harmony import */ var _arcgis_lumina_controllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73339);
/* harmony import */ var _runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14558);
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */


const useT9n = (0,_arcgis_lumina_controllers__WEBPACK_IMPORTED_MODULE_0__/* .makeT9nController */ .yr)(_runtime_js__WEBPACK_IMPORTED_MODULE_1__.g);



/***/ }),

/***/ 93297:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ActionMenu: () => (/* reexport */ ActionMenu)
});

// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/components/calcite-action/index.js + 1 modules
var calcite_action = __webpack_require__(13847);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/components/calcite-popover/index.js + 1 modules
var calcite_popover = __webpack_require__(78568);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/runtime.js
var runtime = __webpack_require__(14558);
// EXTERNAL MODULE: ../node_modules/lit-html/node/directives/ref.js + 1 modules
var ref = __webpack_require__(59276);
// EXTERNAL MODULE: ../node_modules/lit/index.js + 2 modules
var lit = __webpack_require__(52689);
// EXTERNAL MODULE: ../node_modules/@arcgis/lumina/dist/index.js + 15 modules
var dist = __webpack_require__(48747);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/array.js
var array = __webpack_require__(695);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/dom.js
var dom = __webpack_require__(25450);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/guid.js
var guid = __webpack_require__(7025);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/key.js
var chunks_key = __webpack_require__(14357);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/component.js
var component = __webpack_require__(66865);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/resources2.js
var resources2 = __webpack_require__(90477);
// EXTERNAL MODULE: ../node_modules/@lit/reactive-element/node/css-tag.js
var css_tag = __webpack_require__(56385);
;// ../node_modules/@esri/calcite-components/dist/components/calcite-action-menu/customElement.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */











const styles = (0,css_tag/* css */.AH)`:host{box-sizing:border-box;display:flex;flex-direction:column;font-size:var(--calcite-font-size-1)}::slotted(calcite-action-group:not(:last-of-type)){border-block-end-width:var(--calcite-border-width-sm)}.default-trigger{position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}.menu{display:flex;max-block-size:45vh;flex-direction:column;flex-wrap:nowrap;overflow-y:auto;overflow-x:hidden;outline:2px solid transparent;outline-offset:2px;gap:var(--calcite-action-menu-items-space, 0)}:host([hidden]){display:none}[hidden]{display:none}`;
const SUPPORTED_MENU_NAV_KEYS = ["ArrowUp", "ArrowDown", "End", "Home"];
class ActionMenu extends dist/* LitElement */.WF {
  constructor() {
    super(...arguments);
    this.guid = `calcite-action-menu-${(0,guid.g)()}`;
    this.actionElements = [];
    this.menuButtonClick = () => {
      this.toggleOpen();
    };
    this.menuButtonId = `${this.guid}-menu-button`;
    this.menuButtonKeyDown = (event) => {
      const { key } = event;
      const { actionElements, activeMenuItemIndex, open } = this;
      if (!actionElements.length) {
        return;
      }
      if ((0,chunks_key.i)(key)) {
        event.preventDefault();
        if (!open) {
          this.toggleOpen();
          return;
        }
        const action = actionElements[activeMenuItemIndex];
        if (action) {
          action.click();
        } else {
          this.toggleOpen(false);
        }
      }
      if (key === "Tab") {
        this.open = false;
        return;
      }
      if (key === "Escape") {
        this.toggleOpen(false);
        event.preventDefault();
        return;
      }
      this.handleActionNavigation(event, key, actionElements);
    };
    this.menuId = `${this.guid}-menu`;
    this._open = false;
    this.updateAction = (action, index) => {
      const { guid: guid2, activeMenuItemIndex } = this;
      const id = `${guid2}-action-${index}`;
      action.tabIndex = -1;
      action.setAttribute("role", "menuitem");
      if (!action.id) {
        action.id = id;
      }
      action.toggleAttribute(resources2.a, index === activeMenuItemIndex);
    };
    this.activeMenuItemIndex = -1;
    this.appearance = "solid";
    this.expanded = false;
    this.overlayPositioning = "absolute";
    this.placement = "auto";
    this.scale = "m";
    this.calciteActionMenuOpen = (0,dist/* createEvent */.lh)({ cancelable: false });
  }
  static {
    this.properties = { activeMenuItemIndex: [16, {}, { state: true }], menuButtonEl: [16, {}, { state: true }], appearance: [3, {}, { reflect: true }], expanded: [7, {}, { reflect: true, type: Boolean }], flipPlacements: [0, {}, { attribute: false }], label: 1, open: [7, {}, { reflect: true, type: Boolean }], overlayPositioning: [3, {}, { reflect: true }], placement: [3, {}, { reflect: true }], scale: [3, {}, { reflect: true }] };
  }
  static {
    this.styles = styles;
  }
  get open() {
    return this._open;
  }
  set open(open) {
    const oldOpen = this._open;
    if (open !== oldOpen) {
      this._open = open;
      this.openHandler(open);
    }
  }
  async setFocus() {
    await (0,component.c)(this);
    return (0,dom.b)(this.menuButtonEl);
  }
  connectedCallback() {
    super.connectedCallback();
    this.connectMenuButtonEl();
  }
  willUpdate(changes) {
    if (changes.has("expanded") && (this.hasUpdated || this.expanded !== false)) {
      this.expandedHandler();
    }
    if (changes.has("activeMenuItemIndex") && (this.hasUpdated || this.activeMenuItemIndex !== -1)) {
      this.updateActions(this.actionElements);
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.disconnectMenuButtonEl();
  }
  expandedHandler() {
    this.open = false;
    this.setTooltipReferenceElement();
  }
  openHandler(open) {
    if (this.menuButtonEl) {
      this.menuButtonEl.active = open;
    }
    if (this.popoverEl) {
      this.popoverEl.open = open;
    }
    this.activeMenuItemIndex = this.open ? 0 : -1;
    this.calciteActionMenuOpen.emit();
    this.setTooltipReferenceElement();
  }
  connectMenuButtonEl() {
    const { menuButtonId, menuId, open, label } = this;
    const menuButtonEl = this.slottedMenuButtonEl || this.defaultMenuButtonEl;
    if (this.menuButtonEl === menuButtonEl) {
      return;
    }
    this.disconnectMenuButtonEl();
    this.menuButtonEl = menuButtonEl;
    this.setTooltipReferenceElement();
    if (!menuButtonEl) {
      return;
    }
    menuButtonEl.active = open;
    menuButtonEl.setAttribute("aria-controls", menuId);
    menuButtonEl.setAttribute("aria-expanded", (0,dom.t)(open));
    menuButtonEl.setAttribute("aria-haspopup", "true");
    if (!menuButtonEl.id) {
      menuButtonEl.id = menuButtonId;
    }
    if (!menuButtonEl.label) {
      menuButtonEl.label = label;
    }
    if (!menuButtonEl.text) {
      menuButtonEl.text = label;
    }
    menuButtonEl.addEventListener("click", this.menuButtonClick);
    menuButtonEl.addEventListener("keydown", this.menuButtonKeyDown);
  }
  disconnectMenuButtonEl() {
    const { menuButtonEl } = this;
    if (!menuButtonEl) {
      return;
    }
    menuButtonEl.removeEventListener("click", this.menuButtonClick);
    menuButtonEl.removeEventListener("keydown", this.menuButtonKeyDown);
    this.menuButtonEl = null;
  }
  setMenuButtonEl(event) {
    const actions = event.target.assignedElements({
      flatten: true
    }).filter((el) => el?.matches("calcite-action"));
    this.slottedMenuButtonEl = actions[0];
    this.connectMenuButtonEl();
  }
  setDefaultMenuButtonEl(el) {
    this.defaultMenuButtonEl = el;
    if (el) {
      this.connectMenuButtonEl();
    }
  }
  setPopoverEl(el) {
    if (!el) {
      return;
    }
    this.popoverEl = el;
    el.open = this.open;
  }
  handleCalciteActionClick() {
    this.open = false;
    this.setFocus();
  }
  updateTooltip(event) {
    const tooltips = event.target.assignedElements({
      flatten: true
    }).filter((el) => el?.matches("calcite-tooltip"));
    this.tooltipEl = tooltips[0];
    this.setTooltipReferenceElement();
  }
  setTooltipReferenceElement() {
    const { tooltipEl, expanded, menuButtonEl, open } = this;
    if (tooltipEl) {
      tooltipEl.referenceElement = !expanded && !open ? menuButtonEl : null;
    }
  }
  updateActions(actions) {
    actions?.forEach(this.updateAction);
  }
  handleDefaultSlotChange(event) {
    const actions = event.target.assignedElements({
      flatten: true
    }).reduce((previousValue, currentValue) => {
      if (currentValue?.matches("calcite-action")) {
        previousValue.push(currentValue);
        return previousValue;
      }
      if (currentValue?.matches("calcite-action-group")) {
        return previousValue.concat(Array.from(currentValue.querySelectorAll("calcite-action")));
      }
      return previousValue;
    }, []);
    this.actionElements = actions.filter((action) => !action.disabled && !action.hidden);
  }
  isValidKey(key, supportedKeys) {
    return !!supportedKeys.find((k) => k === key);
  }
  handleActionNavigation(event, key, actions) {
    if (!this.isValidKey(key, SUPPORTED_MENU_NAV_KEYS)) {
      return;
    }
    event.preventDefault();
    if (!this.open) {
      this.toggleOpen();
      if (key === "Home" || key === "ArrowDown") {
        this.activeMenuItemIndex = 0;
      }
      if (key === "End" || key === "ArrowUp") {
        this.activeMenuItemIndex = actions.length - 1;
      }
      return;
    }
    if (key === "Home") {
      this.activeMenuItemIndex = 0;
    }
    if (key === "End") {
      this.activeMenuItemIndex = actions.length - 1;
    }
    const currentIndex = this.activeMenuItemIndex;
    if (key === "ArrowUp") {
      this.activeMenuItemIndex = (0,array.g)(Math.max(currentIndex - 1, -1), actions.length);
    }
    if (key === "ArrowDown") {
      this.activeMenuItemIndex = (0,array.g)(currentIndex + 1, actions.length);
    }
  }
  toggleOpen(value = !this.open) {
    this.open = value;
  }
  handlePopoverOpen(event) {
    event.stopPropagation();
    this.open = true;
    this.setFocus();
  }
  handlePopoverClose(event) {
    event.stopPropagation();
    this.open = false;
  }
  renderMenuButton() {
    const { appearance, label, scale, expanded } = this;
    const menuButtonSlot = (0,lit/* html */.qy)`<slot name=${resources2.S.trigger} @slotchange=${this.setMenuButtonEl}><calcite-action .appearance=${appearance} class=${(0,dist/* safeClassMap */.CP)(resources2.C.defaultTrigger)} .icon=${resources2.I.menu} .scale=${scale} .text=${label} .textEnabled=${expanded} ${(0,ref/* ref */.K)(this.setDefaultMenuButtonEl)}></calcite-action></slot>`;
    return menuButtonSlot;
  }
  renderMenuItems() {
    const { actionElements, activeMenuItemIndex, menuId, menuButtonEl, label, placement, overlayPositioning, flipPlacements } = this;
    const activeAction = actionElements[activeMenuItemIndex];
    const activeDescendantId = activeAction?.id || null;
    return (0,lit/* html */.qy)`<calcite-popover auto-close .flipPlacements=${flipPlacements} focus-trap-disabled .label=${label} offset-distance=0 @calcitePopoverClose=${this.handlePopoverClose} @calcitePopoverOpen=${this.handlePopoverOpen} .overlayPositioning=${overlayPositioning} .placement=${placement} pointer-disabled .referenceElement=${menuButtonEl} trigger-disabled ${(0,ref/* ref */.K)(this.setPopoverEl)}><div aria-activedescendant=${activeDescendantId ?? lit/* nothing */.s6} aria-labelledby=${menuButtonEl?.id ?? lit/* nothing */.s6} class=${(0,dist/* safeClassMap */.CP)(resources2.C.menu)} id=${menuId ?? lit/* nothing */.s6} @click=${this.handleCalciteActionClick} role=menu tabindex=-1><slot @slotchange=${this.handleDefaultSlotChange}></slot></div></calcite-popover>`;
  }
  render() {
    return (0,lit/* html */.qy)`${this.renderMenuButton()}${this.renderMenuItems()}<slot name=${resources2.S.tooltip} @slotchange=${this.updateTooltip}></slot>`;
  }
}
(0,runtime.c)("calcite-action-menu", ActionMenu);


;// ../node_modules/@esri/calcite-components/dist/components/calcite-action-menu/index.js




/***/ }),

/***/ 13847:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Action: () => (/* reexport */ Action)
});

// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/components/calcite-loader/index.js + 1 modules
var calcite_loader = __webpack_require__(32524);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/components/calcite-icon/index.js + 1 modules
var calcite_icon = __webpack_require__(96446);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/runtime.js
var runtime = __webpack_require__(14558);
// EXTERNAL MODULE: ../node_modules/lit-html/node/lit-html.js
var lit_html = __webpack_require__(31263);
// EXTERNAL MODULE: ../node_modules/lit-html/node/directives/keyed.js
var keyed = __webpack_require__(51425);
// EXTERNAL MODULE: ../node_modules/lit-html/node/directives/ref.js + 1 modules
var ref = __webpack_require__(59276);
// EXTERNAL MODULE: ../node_modules/@arcgis/lumina/dist/index.js + 15 modules
var dist = __webpack_require__(48747);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/guid.js
var guid = __webpack_require__(7025);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/interactive.js
var interactive = __webpack_require__(28070);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/component.js
var component = __webpack_require__(66865);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/observers.js
var observers = __webpack_require__(13061);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/useT9n.js
var useT9n = __webpack_require__(13478);
// EXTERNAL MODULE: ../node_modules/@lit/reactive-element/node/css-tag.js
var css_tag = __webpack_require__(56385);
;// ../node_modules/@esri/calcite-components/dist/components/calcite-action/customElement.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */











const CSS = {
  button: "button",
  buttonTextVisible: "button--text-visible",
  buttonCompact: "button--compact",
  indicatorText: "indicator-text",
  iconContainer: "icon-container",
  slotContainer: "slot-container",
  slotContainerHidden: "slot-container--hidden",
  textContainer: "text-container",
  textContainerVisible: "text-container--visible",
  indicatorWithIcon: "indicator-with-icon",
  indicatorWithoutIcon: "indicator-without-icon"
};
const SLOTS = {
  tooltip: "tooltip"
};
const styles = (0,css_tag/* css */.AH)`:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;cursor:pointer;background-color:transparent;--calcite-internal-action-text-color: var(--calcite-color-text-3);border-radius:var(--calcite-action-corner-radius, var(--calcite-action-corner-radius-start-start, var(--calcite-corner-radius)) var(--calcite-action-corner-radius-start-end, var(--calcite-corner-radius)) var(--calcite-action-corner-radius-end-end, var(--calcite-corner-radius)) var(--calcite-action-corner-radius-end-start, var(--calcite-corner-radius)))}.interaction-container{border-radius:inherit}:host([drag-handle]){cursor:move;--calcite-internal-action-text-color: var(--calcite-color-border-input);--calcite-internal-action-padding-inline: var(--calcite-spacing-xxs)}.button{border-radius:inherit;position:relative;margin:0;display:flex;inline-size:auto;align-items:center;justify-content:flex-start;border-style:none;font-family:var(--calcite-font-family);font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);outline-color:transparent;background-color:var(--calcite-action-background-color, var(--calcite-color-foreground-1));color:var(--calcite-action-text-color, var(--calcite-internal-action-text-color));text-align:unset;flex:1 0 auto;cursor:inherit}.button:hover{background-color:var(--calcite-action-background-color-hover, var(--calcite-color-foreground-2));color:var(--calcite-action-text-color-press, var(--calcite-action-text-color-pressed, var(--calcite-color-text-1)))}.button:focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}.button:active{background-color:var(--calcite-action-background-color-press, var(--calcite-action-background-color-pressed, var(--calcite-color-foreground-3)))}.icon-container{pointer-events:none;margin:0;display:flex;align-items:center;justify-content:center;min-inline-size:1rem;min-block-size:1.5rem}.text-container{margin:0;inline-size:0px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.5rem;opacity:0;transition-property:opacity;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-property:margin;transition-property:inline-size}.text-container--visible{inline-size:auto;flex:1 1 auto;opacity:1}:host([active]) .button,:host([active]) .button:hover,:host([active]) .button:focus{color:var(--calcite-action-text-color-press, var(--calcite-action-text-color-pressed, var(--calcite-color-text-1)));background-color:var(--calcite-action-background-color-press, var(--calcite-action-background-color-pressed, var(--calcite-color-foreground-3)))}:host([active]) .button:active{background-color:var(--calcite-action-background-color, var(--calcite-color-foreground-1))}:host([loading]) .button:hover,:host([loading]) .button:focus{background-color:var(--calcite-action-background-color, var(--calcite-color-foreground-1))}:host([loading]) .text-container{opacity:var(--calcite-opacity-disabled)}:host([loading]) calcite-loader[inline]{margin-inline-end:0px}:host([appearance=transparent]):host([active]) .button{background-color:var(--calcite-color-transparent-press)}:host([appearance=transparent]) .button{background-color:transparent;transition-property:box-shadow;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}:host([appearance=transparent]) .button:hover{background-color:var(--calcite-color-transparent-hover)}:host([appearance=transparent]) .button:active{background-color:var(--calcite-color-transparent-press)}:host([data-active]) .button{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}:host([scale=s]) .button{font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-normal);padding-inline:var(--calcite-internal-action-padding-inline, .5rem);padding-block:var(--calcite-internal-action-padding-block, var(--calcite-spacing-xxs))}:host([scale=s]) .button--text-visible .icon-container{margin-inline-end:.5rem}:host([scale=m]) .button{font-size:var(--calcite-font-size--1);line-height:1rem;font-weight:var(--calcite-font-weight-normal);padding-inline:var(--calcite-internal-action-padding-inline, 1rem);padding-block:var(--calcite-internal-action-padding-block, var(--calcite-spacing-md))}:host([scale=m]) .button--text-visible .icon-container{margin-inline-end:.75rem}:host([scale=l]) .button{font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-normal);padding-inline:var(--calcite-internal-action-padding-inline, 1.25rem);padding-block:var(--calcite-internal-action-padding-block, var(--calcite-spacing-xl))}:host([scale=l]) .button--text-visible .icon-container{margin-inline-end:1rem}:host([alignment=center]) .button{justify-content:center}:host([alignment=end]) .button{justify-content:flex-end}:host([alignment=center]) .button .text-container--visible,:host([alignment=end]) .button .text-container--visible{flex:0 1 auto}:host([scale=s][compact]) .button,:host([scale=m][compact]) .button,:host([scale=l][compact]) .button{padding-inline:0px}.slot-container{display:flex}.slot-container--hidden{display:none}.button--text-visible{inline-size:100%}.indicator-with-icon{position:relative}.indicator-with-icon:after{content:"";position:absolute;block-size:.5rem;inline-size:.5rem;border-radius:9999px;inset-block-end:-.275rem;inset-inline-end:-.275rem;background-color:var(--calcite-action-indicator-color, var(--calcite-color-brand))}.indicator-without-icon{margin-inline:.25rem;inline-size:1rem;position:relative}.indicator-without-icon:after{content:"";position:absolute;block-size:.5rem;inline-size:.5rem;border-radius:9999px;inset-block-end:-.275rem;inset-inline-end:-.275rem;background-color:var(--calcite-action-indicator-color, var(--calcite-color-brand))}.indicator-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) .button,:host([disabled]) .button:hover,:host([disabled]) .button:focus{cursor:default;opacity:var(--calcite-opacity-disabled);background-color:var(--calcite-action-background-color, var(--calcite-action-background-color, var(--calcite-color-foreground-1)))}:host([disabled]):host([active]) .button,:host([disabled]):host([active]) .button:hover,:host([disabled]):host([active]) .button:focus{opacity:var(--calcite-opacity-disabled);background-color:var(--calcite-action-background-color-press, var(--calcite-action-background-color-press, var(--calcite-action-background-color-pressed, var(--calcite-color-foreground-3))))}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}`;
class Action extends dist/* LitElement */.WF {
  constructor() {
    super(...arguments);
    this.guid = `calcite-action-${(0,guid.g)()}`;
    this.buttonEl = (0,ref/* createRef */._)();
    this.buttonId = `${this.guid}-button`;
    this.indicatorId = `${this.guid}-indicator`;
    this.mutationObserver = (0,observers.c)("mutation", () => this.requestUpdate());
    this.messages = (0,useT9n.u)({ blocking: true });
    this.active = false;
    this.appearance = "solid";
    this.compact = false;
    this.disabled = false;
    this.dragHandle = false;
    this.iconFlipRtl = false;
    this.indicator = false;
    this.loading = false;
    this.scale = "m";
    this.textEnabled = false;
  }
  static {
    this.properties = { active: [7, {}, { reflect: true, type: Boolean }], alignment: [3, {}, { reflect: true }], appearance: [3, {}, { reflect: true }], compact: [7, {}, { reflect: true, type: Boolean }], disabled: [7, {}, { reflect: true, type: Boolean }], dragHandle: [7, {}, { reflect: true, type: Boolean }], icon: [3, {}, { reflect: true }], iconFlipRtl: [7, {}, { reflect: true, type: Boolean }], indicator: [7, {}, { reflect: true, type: Boolean }], label: 1, loading: [7, {}, { reflect: true, type: Boolean }], messageOverrides: [0, {}, { attribute: false }], scale: [3, {}, { reflect: true }], text: 1, textEnabled: [7, {}, { reflect: true, type: Boolean }] };
  }
  static {
    this.styles = styles;
  }
  async setFocus() {
    await (0,component.c)(this);
    this.buttonEl.value?.focus();
  }
  connectedCallback() {
    super.connectedCallback();
    this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
  }
  updated() {
    (0,interactive.u)(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.mutationObserver?.disconnect();
  }
  handleTooltipSlotChange(event) {
    const tooltips = event.target.assignedElements({
      flatten: true
    }).filter((el) => el?.matches("calcite-tooltip"));
    const tooltip = tooltips[0];
    if (tooltip) {
      tooltip.referenceElement = this.buttonEl.value;
    }
  }
  renderTextContainer() {
    const { text, textEnabled } = this;
    const textContainerClasses = {
      [CSS.textContainer]: true,
      [CSS.textContainerVisible]: textEnabled
    };
    return text ? (0,keyed/* keyed */.D)("text-container", (0,lit_html/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(textContainerClasses)}>${text}</div>`) : null;
  }
  renderIndicatorText() {
    const { indicator, messages, indicatorId, buttonId } = this;
    return (0,lit_html/* html */.qy)`<div aria-labelledby=${buttonId ?? dist/* nothing */.s6} aria-live=polite class=${(0,dist/* safeClassMap */.CP)(CSS.indicatorText)} id=${indicatorId ?? dist/* nothing */.s6} role=region>${indicator ? messages.indicator : null}</div>`;
  }
  renderIconContainer() {
    const { loading, icon, scale, el, iconFlipRtl, indicator } = this;
    const loaderScale = scale === "l" ? "l" : "m";
    const calciteLoaderNode = loading ? (0,lit_html/* html */.qy)`<calcite-loader inline .label=${this.messages.loading} .scale=${loaderScale}></calcite-loader>` : null;
    const calciteIconNode = icon ? (0,lit_html/* html */.qy)`<calcite-icon class=${(0,dist/* safeClassMap */.CP)({ [CSS.indicatorWithIcon]: indicator })} .flipRtl=${iconFlipRtl} .icon=${icon} .scale=${(0,component.g)(this.scale)}></calcite-icon>` : null;
    const iconNode = calciteLoaderNode || calciteIconNode;
    const hasIconToDisplay = iconNode || el.children?.length;
    const slotContainerNode = (0,lit_html/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)({
      [CSS.slotContainer]: true,
      [CSS.slotContainerHidden]: loading
    })}><slot></slot></div>`;
    return hasIconToDisplay ? (0,keyed/* keyed */.D)("icon-container", (0,lit_html/* html */.qy)`<div aria-hidden=true class=${(0,dist/* safeClassMap */.CP)(CSS.iconContainer)}>${iconNode}${slotContainerNode}</div>`) : null;
  }
  renderButton() {
    const { active, compact, disabled, icon, loading, textEnabled, label, text, indicator, indicatorId, buttonId, messages } = this;
    const labelFallback = label || text || "";
    const ariaLabel = indicator ? messages.indicatorLabel.replace("{label}", labelFallback) : labelFallback;
    const buttonClasses = {
      [CSS.button]: true,
      [CSS.buttonTextVisible]: textEnabled,
      [CSS.buttonCompact]: compact
    };
    const buttonContent = (0,lit_html/* html */.qy)`${this.renderIconContainer()}${this.renderTextContainer()}${!icon && indicator && (0,keyed/* keyed */.D)("indicator-no-icon", (0,lit_html/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(CSS.indicatorWithoutIcon)}></div>`) || ""}`;
    if (this.dragHandle) {
      return (0,lit_html/* html */.qy)`<span aria-controls=${(indicator ? indicatorId : null) ?? dist/* nothing */.s6} .ariaBusy=${loading} .ariaDisabled=${this.disabled ? this.disabled : null} .ariaLabel=${ariaLabel} .ariaPressed=${active} class=${(0,dist/* safeClassMap */.CP)(buttonClasses)} id=${buttonId ?? dist/* nothing */.s6} role=button tabindex=${(this.disabled ? null : 0) ?? dist/* nothing */.s6} ${(0,ref/* ref */.K)(this.buttonEl)}>${buttonContent}</span>`;
    }
    return (0,lit_html/* html */.qy)`<button aria-controls=${(indicator ? indicatorId : null) ?? dist/* nothing */.s6} .ariaBusy=${loading} .ariaLabel=${ariaLabel} .ariaPressed=${active} class=${(0,dist/* safeClassMap */.CP)(buttonClasses)} .disabled=${disabled} id=${buttonId ?? dist/* nothing */.s6} tabindex=${(disabled ? null : 0) ?? dist/* nothing */.s6} ${(0,ref/* ref */.K)(this.buttonEl)}>${buttonContent}</button>`;
  }
  render() {
    return (0,interactive.I)({ disabled: this.disabled, children: (0,lit_html/* html */.qy)`${this.renderButton()}<slot name=${SLOTS.tooltip} @slotchange=${this.handleTooltipSlotChange}></slot>${this.renderIndicatorText()}` });
  }
}
(0,runtime.c)("calcite-action", Action);


;// ../node_modules/@esri/calcite-components/dist/components/calcite-action/index.js




/***/ }),

/***/ 95157:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Dialog: () => (/* reexport */ Dialog)
});

// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/components/calcite-scrim/index.js + 1 modules
var calcite_scrim = __webpack_require__(24293);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/components/calcite-panel/index.js + 1 modules
var calcite_panel = __webpack_require__(2921);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/runtime.js
var runtime = __webpack_require__(14558);
// EXTERNAL MODULE: ../node_modules/lit-html/node/directives/keyed.js
var keyed = __webpack_require__(51425);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/interact.min.js
var interact_min = __webpack_require__(54148);
// EXTERNAL MODULE: ../node_modules/lit/index.js + 2 modules
var lit = __webpack_require__(52689);
// EXTERNAL MODULE: ../node_modules/lit-html/node/directives/ref.js + 1 modules
var ref = __webpack_require__(59276);
// EXTERNAL MODULE: ../node_modules/@arcgis/lumina/dist/index.js + 15 modules
var dist = __webpack_require__(48747);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/dom.js
var dom = __webpack_require__(25450);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/component.js
var component = __webpack_require__(66865);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/observers.js
var observers = __webpack_require__(13061);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/dynamicClasses.js
var dynamicClasses = __webpack_require__(82411);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/openCloseComponent.js
var openCloseComponent = __webpack_require__(36607);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/resources3.js
var resources3 = __webpack_require__(46126);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/useT9n.js
var useT9n = __webpack_require__(13478);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/useFocusTrap.js + 2 modules
var useFocusTrap = __webpack_require__(44148);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/usePreventDocumentScroll.js
var usePreventDocumentScroll = __webpack_require__(48323);
// EXTERNAL MODULE: ../node_modules/@lit/reactive-element/node/css-tag.js
var css_tag = __webpack_require__(56385);
;// ../node_modules/@esri/calcite-components/dist/components/calcite-dialog/customElement.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */
















const CSS = {
  dialog: "dialog",
  panel: "panel",
  scrim: "scrim",
  container: "container",
  containerOpen: "container--open",
  containerEmbedded: "container--embedded",
  assistiveText: "assistive-text",
  openingActive: "dialog--opening-active"
};
const SLOTS = {
  actionBar: "action-bar",
  alerts: "alerts",
  content: "content",
  customContent: "custom-content",
  contentTop: "content-top",
  contentBottom: "content-bottom",
  headerActionsStart: "header-actions-start",
  headerActionsEnd: "header-actions-end",
  headerMenuActions: "header-menu-actions",
  headerContent: "header-content",
  fab: "fab",
  footer: "footer",
  footerStart: "footer-start",
  footerEnd: "footer-end"
};
const initialDragPosition = { x: null, y: null };
const initialResizePosition = { top: null, right: null, bottom: null, left: null };
const styles = (0,css_tag/* css */.AH)`:host{--calcite-dialog-scrim-background-color: rgba(0, 0, 0, .85);pointer-events:none;inset:0;z-index:var(--calcite-z-index-overlay);display:flex;--calcite-internal-dialog-animation-offset: 20px}:host([modal]){position:absolute}.container{pointer-events:auto;position:fixed;inset:0;z-index:var(--calcite-z-index-overlay);display:flex;align-items:center;justify-content:center;overflow:hidden;color:var(--calcite-color-text-2);opacity:0;visibility:hidden;transition:visibility 0ms linear var(--calcite-internal-animation-timing-slow),opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(.215,.44,.42,.88)}:host([placement=top]) .container{align-items:flex-start;justify-content:center}:host([placement=top-start]) .container{align-items:flex-start;justify-content:flex-start}:host([placement=top-end]) .container{align-items:flex-start;justify-content:flex-end}:host([placement=bottom]) .container{align-items:flex-end;justify-content:center}:host([placement=bottom-start]) .container{align-items:flex-end;justify-content:flex-start}:host([placement=bottom-end]) .container{align-items:flex-end;justify-content:flex-end}:host(:not([modal])) .container{pointer-events:none}:host([scale=s]){--calcite-internal-dialog-content-padding: var(--calcite-dialog-content-space, var(--calcite-spacing-sm));--calcite-internal-dialog-min-size-x: 198px;--calcite-internal-dialog-min-size-y: 140px}:host([scale=m]){--calcite-internal-dialog-content-padding: var(--calcite-dialog-content-space, var(--calcite-spacing-md));--calcite-internal-dialog-min-size-x: 288px;--calcite-internal-dialog-min-size-y: 180px}:host([scale=l]){--calcite-internal-dialog-content-padding: var(--calcite-dialog-content-space, var(--calcite-spacing-md-plus));--calcite-internal-dialog-min-size-x: 388px;--calcite-internal-dialog-min-size-y: 220px}.scrim{--calcite-scrim-background: var(--calcite-dialog-scrim-background-color, var(--calcite-color-transparent-scrim));--calcite-scrim-background-color: var( --calcite-dialog-scrim-background-color, var(--calcite-color-transparent-scrim) );position:fixed;inset:0;display:flex;overflow-y:hidden}calcite-panel{--calcite-panel-content-space: var(--calcite-dialog-content-space, var(--calcite-internal-dialog-content-padding));--calcite-panel-footer-space: var(--calcite-dialog-footer-space);--calcite-panel-border-color: var(--calcite-dialog-border-color);--calcite-panel-background-color: var(--calcite-dialog-background-color, var(--calcite-color-foreground-1))}::slotted(*){--calcite-panel-background-color: initial}.dialog{pointer-events:none;position:relative;z-index:var(--calcite-z-index-modal);margin:1.5rem;box-sizing:border-box;display:flex;inline-size:100%;flex-direction:column;border-radius:.25rem;opacity:0;--tw-shadow: 0 2px 12px -4px rgba(0, 0, 0, .2), 0 2px 4px -2px rgba(0, 0, 0, .16);--tw-shadow-colored: 0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);-webkit-overflow-scrolling:touch;visibility:hidden;transition:inset-block var(--calcite-internal-animation-timing-slow) cubic-bezier(.215,.44,.42,.88),opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(.215,.44,.42,.88);min-inline-size:var(--calcite-dialog-min-size-x, var(--calcite-internal-dialog-min-size-x));max-inline-size:var(--calcite-dialog-max-size-x, 100%);min-block-size:var(--calcite-dialog-min-size-y, var(--calcite-internal-dialog-min-size-y));max-block-size:var(--calcite-dialog-max-size-y, 100%);--calcite-internal-dialog-hidden-position: calc( var(--calcite-dialog-offset-y, 0px) + var(--calcite-internal-dialog-animation-offset) );--calcite-internal-dialog-shown-position: var(--calcite-dialog-offset-y, 0);inset-inline-start:var(--calcite-dialog-offset-x, 0);inset-block-start:var(--calcite-internal-dialog-hidden-position)}.dialog--opening-active{inset-block-start:var(--calcite-internal-dialog-shown-position)}:host([menu-open]) .dialog{transition:visibility 0ms linear var(--calcite-internal-animation-timing-slow),opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(.215,.44,.42,.88)}.panel{border-radius:.25rem}.container--open{opacity:1;visibility:visible;transition-delay:0ms}.container--open .dialog{pointer-events:auto;visibility:visible;opacity:1;transition:inset-block var(--calcite-internal-animation-timing-slow) cubic-bezier(.215,.44,.42,.88),opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(.215,.44,.42,.88);transition-delay:0ms}.width-s{inline-size:auto;inline-size:var(--calcite-dialog-size-x, 32rem);block-size:var(--calcite-dialog-size-y, auto)}@media screen and (max-width: 35rem){.width-s{margin:0;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%;inset-inline-start:0;inset-block-start:var(--calcite-internal-dialog-animation-offset)}.width-s.dialog--opening-active{inset-block-start:0}}.width-m{inline-size:var(--calcite-dialog-size-x, 48rem);block-size:var(--calcite-dialog-size-y, auto)}@media screen and (max-width: 51rem){.width-m{margin:0;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%;inset-inline-start:0;inset-block-start:var(--calcite-internal-dialog-animation-offset)}.width-m.dialog--opening-active{inset-block-start:0}}.width-l{inline-size:var(--calcite-dialog-size-x, 94rem);block-size:var(--calcite-dialog-size-y, auto)}@media screen and (max-width: 97rem){.width-l{margin:0;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%;inset-inline-start:0;inset-block-start:var(--calcite-internal-dialog-animation-offset)}.width-l.dialog--opening-active{inset-block-start:0}}:host([placement=cover]) .dialog{margin:0;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%;border-radius:0}:host([placement=cover]) .panel{border-radius:0}:host([kind]) .panel{border-start-start-radius:0px;border-start-end-radius:0px}:host([kind=brand]) .dialog{border-color:var(--calcite-color-brand)}:host([kind=danger]) .dialog{border-color:var(--calcite-color-status-danger)}:host([kind=info]) .dialog{border-color:var(--calcite-color-status-info)}:host([kind=success]) .dialog{border-color:var(--calcite-color-status-success)}:host([kind=warning]) .dialog{border-color:var(--calcite-color-status-warning)}:host([kind=brand][open]) .dialog,:host([kind=danger][open]) .dialog,:host([kind=info][open]) .dialog,:host([kind=success][open]) .dialog,:host([kind=warning][open]) .dialog{border-width:0px;border-block-start-width:4px;border-style:solid}.container--embedded{position:absolute;pointer-events:auto}.container--embedded calcite-scrim{position:absolute}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}`;
class Dialog extends dist/* LitElement */.WF {
  constructor() {
    super(...arguments);
    this.dragPosition = { ...initialDragPosition };
    this.focusTrap = (0,useFocusTrap.u)({
      triggerProp: "open",
      focusTrapOptions: {
        // scrim closes on click, so we let it take over
        clickOutsideDeactivates: () => !this.modal || this.embedded,
        escapeDeactivates: (event) => {
          if (!event.defaultPrevented && !this.escapeDisabled) {
            this.open = false;
            event.preventDefault();
          }
          return false;
        }
      }
    })(this);
    this.usePreventDocumentScroll = (0,usePreventDocumentScroll.u)()(this);
    this.ignoreOpenChange = false;
    this.mutationObserver = (0,observers.c)("mutation", () => this.handleMutationObserver());
    this._open = false;
    this.openProp = "opened";
    this.transitionProp = "opacity";
    this.panelEl = (0,ref/* createRef */._)();
    this.resizePosition = { ...initialResizePosition };
    this.messages = (0,useT9n.u)();
    this.assistiveText = null;
    this.hasContentBottom = false;
    this.hasContentTop = false;
    this.hasFooter = true;
    this.opened = false;
    this.closeDisabled = false;
    this.dragEnabled = false;
    this.embedded = false;
    this.escapeDisabled = false;
    this.loading = false;
    this.menuOpen = false;
    this.modal = false;
    this.focusTrapDisabled = false;
    this.outsideCloseDisabled = false;
    this.overlayPositioning = "absolute";
    this.placement = "center";
    this.resizable = false;
    this.scale = "m";
    this.widthScale = "m";
    this.calciteDialogBeforeClose = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.calciteDialogBeforeOpen = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.calciteDialogClose = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.calciteDialogOpen = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.calciteDialogScroll = (0,dist/* createEvent */.lh)({ cancelable: false });
  }
  static {
    this.properties = { assistiveText: [16, {}, { state: true }], hasContentBottom: [16, {}, { state: true }], hasContentTop: [16, {}, { state: true }], hasFooter: [16, {}, { state: true }], opened: [16, {}, { state: true }], preventDocumentScroll: [16, {}, { state: true }], beforeClose: [0, {}, { attribute: false }], closeDisabled: [7, {}, { reflect: true, type: Boolean }], description: 1, dragEnabled: [7, {}, { reflect: true, type: Boolean }], embedded: [5, {}, { type: Boolean }], escapeDisabled: [7, {}, { reflect: true, type: Boolean }], focusTrapOptions: [0, {}, { attribute: false }], heading: 1, headingLevel: [11, {}, { type: Number, reflect: true }], kind: [3, {}, { reflect: true }], loading: [7, {}, { reflect: true, type: Boolean }], menuOpen: [7, {}, { reflect: true, type: Boolean }], messageOverrides: [0, {}, { attribute: false }], modal: [7, {}, { reflect: true, type: Boolean }], focusTrapDisabled: [7, {}, { reflect: true, type: Boolean }], open: [7, {}, { reflect: true, type: Boolean }], outsideCloseDisabled: [7, {}, { reflect: true, type: Boolean }], overlayPositioning: [3, {}, { reflect: true }], placement: [3, {}, { reflect: true }], resizable: [7, {}, { reflect: true, type: Boolean }], scale: [3, {}, { reflect: true }], widthScale: [3, {}, { reflect: true }], width: [3, {}, { reflect: true }] };
  }
  static {
    this.styles = styles;
  }
  get preventDocumentScroll() {
    return !this.embedded && this.modal;
  }
  get open() {
    return this._open;
  }
  set open(open) {
    const oldOpen = this._open;
    if (open !== oldOpen) {
      this._open = open;
      this.toggleDialog(open);
    }
  }
  async scrollContentTo(options) {
    await this.panelEl.value?.scrollContentTo(options);
  }
  async setFocus() {
    await (0,component.c)(this);
    return this.panelEl.value?.setFocus() ?? (0,dom.h)(this.el);
  }
  async updateFocusTrapElements(extraContainers) {
    this.focusTrap.setExtraContainers(extraContainers);
    this.focusTrap.updateContainerElements();
  }
  connectedCallback() {
    super.connectedCallback();
    this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
    this.setupInteractions();
  }
  willUpdate(changes) {
    if (changes.has("open") && (this.hasUpdated || this.open !== false) || changes.has("placement") && (this.hasUpdated || this.placement !== "center") || changes.has("resizable") && (this.hasUpdated || this.resizable !== false) || changes.has("dragEnabled") && (this.hasUpdated || this.dragEnabled !== false)) {
      this.setupInteractions();
    }
    if (changes.has("messages") || changes.has("dragEnabled") && (this.hasUpdated || this.dragEnabled !== false) || changes.has("resizable") && (this.hasUpdated || this.resizable !== false)) {
      this.updateAssistiveText();
    }
    if (changes.has("opened") && (this.hasUpdated || this.opened !== false)) {
      this.handleOpenedChange(this.opened);
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.mutationObserver?.disconnect();
    this.embedded = false;
    this.cleanupInteractions();
  }
  focusTrapDisabledOverride() {
    return !this.modal && this.focusTrapDisabled;
  }
  updateAssistiveText() {
    const { messages } = this;
    this.assistiveText = messages && (this.dragEnabled || this.resizable) ? `${this.dragEnabled ? messages.dragEnabled : ""} ${this.resizable ? messages.resizeEnabled : ""}` : null;
  }
  onBeforeOpen() {
    this.calciteDialogBeforeOpen.emit();
  }
  onOpen() {
    if (this.focusTrapDisabled) {
      this.setFocus();
    }
    this.focusTrap.activate();
    this.calciteDialogOpen.emit();
  }
  onBeforeClose() {
    this.calciteDialogBeforeClose.emit();
  }
  onClose() {
    this.focusTrap.deactivate();
    this.calciteDialogClose.emit();
  }
  toggleDialog(value) {
    if (this.ignoreOpenChange) {
      return;
    }
    if (value) {
      this.openDialog();
    } else {
      this.closeDialog();
    }
  }
  handleOpenedChange(value) {
    const { transitionEl } = this;
    if (!transitionEl) {
      return;
    }
    transitionEl.classList.toggle(CSS.openingActive, value);
    (0,openCloseComponent.o)(this);
  }
  async triggerInteractModifiers() {
    const { interaction } = this;
    if (!interaction) {
      return;
    }
    await interaction.reflow({
      name: "drag"
    });
    await interaction.reflow({
      name: "resize"
    });
  }
  getTransitionElDOMRect() {
    return this.transitionEl.getBoundingClientRect();
  }
  handleKeyDown(event) {
    const { key, shiftKey, defaultPrevented } = event;
    const { dragEnabled, resizable, resizePosition, dragPosition, transitionEl } = this;
    const keys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    if (defaultPrevented || !keys.includes(key)) {
      return;
    }
    switch (key) {
      case "ArrowUp":
        if (shiftKey && resizable && transitionEl) {
          this.updateSize({
            size: this.getTransitionElDOMRect().height - runtime.a,
            type: "blockSize"
          });
          resizePosition.bottom -= runtime.a;
          this.updateTransform();
          this.triggerInteractModifiers();
          event.preventDefault();
        } else if (dragEnabled) {
          dragPosition.y -= runtime.a;
          this.updateTransform();
          this.triggerInteractModifiers();
          event.preventDefault();
        }
        break;
      case "ArrowDown":
        if (shiftKey && resizable && transitionEl) {
          this.updateSize({
            size: this.getTransitionElDOMRect().height + runtime.a,
            type: "blockSize"
          });
          resizePosition.bottom += runtime.a;
          this.updateTransform();
          this.triggerInteractModifiers();
          event.preventDefault();
        } else if (dragEnabled) {
          dragPosition.y += runtime.a;
          this.updateTransform();
          this.triggerInteractModifiers();
          event.preventDefault();
        }
        break;
      case "ArrowLeft":
        if (shiftKey && resizable && transitionEl) {
          this.updateSize({
            size: this.getTransitionElDOMRect().width - runtime.a,
            type: "inlineSize"
          });
          resizePosition.right -= runtime.a;
          this.updateTransform();
          this.triggerInteractModifiers();
          event.preventDefault();
        } else if (dragEnabled) {
          dragPosition.x -= runtime.a;
          this.updateTransform();
          this.triggerInteractModifiers();
          event.preventDefault();
        }
        break;
      case "ArrowRight":
        if (shiftKey && resizable && transitionEl) {
          this.updateSize({
            size: this.getTransitionElDOMRect().width + runtime.a,
            type: "inlineSize"
          });
          resizePosition.right += runtime.a;
          this.updateTransform();
          this.triggerInteractModifiers();
          event.preventDefault();
        } else if (dragEnabled) {
          dragPosition.x += runtime.a;
          this.updateTransform();
          this.triggerInteractModifiers();
          event.preventDefault();
        }
        break;
    }
  }
  updateTransform() {
    const { dragPosition: { x, y }, resizePosition, transitionEl, dragEnabled, resizable } = this;
    if (!transitionEl) {
      return;
    }
    if (!dragEnabled && !resizable) {
      transitionEl.style.transform = null;
      return;
    }
    const { top, right, bottom, left } = this.getAdjustedResizePosition(resizePosition);
    const translateX = Math.round(x + left + right);
    const translateY = Math.round(y + top + bottom);
    transitionEl.style.transform = translateX || translateY ? `translate(${translateX}px, ${translateY}px)` : null;
  }
  updateSize({ type, size }) {
    const { transitionEl } = this;
    if (!transitionEl) {
      return;
    }
    transitionEl.style[type] = size !== null ? `${Math.round(size)}px` : null;
  }
  cleanupInteractions() {
    this.interaction?.unset();
    this.updateSize({ size: null, type: "inlineSize" });
    this.updateSize({ size: null, type: "blockSize" });
    this.dragPosition = { ...initialDragPosition };
    this.resizePosition = { ...initialResizePosition };
    this.updateTransform();
  }
  async setupInteractions() {
    this.cleanupInteractions();
    const { el, transitionEl, resizable, dragEnabled, resizePosition, dragPosition } = this;
    if (!transitionEl || !this.open) {
      return;
    }
    if (resizable || dragEnabled) {
      this.interaction = (0,interact_min.i)(transitionEl, { context: el.ownerDocument });
    }
    if (resizable) {
      await this.el.componentOnReady();
      const { minInlineSize, minBlockSize, maxInlineSize, maxBlockSize } = window.getComputedStyle(transitionEl);
      this.interaction.resizable({
        edges: {
          top: true,
          right: true,
          bottom: true,
          left: true
        },
        modifiers: [
          interact_min.i.modifiers.restrictSize({
            min: {
              width: (0,dom.k)(minInlineSize),
              height: (0,dom.k)(minBlockSize)
            },
            max: {
              width: (0,dom.k)(maxInlineSize) || window.innerWidth,
              height: (0,dom.k)(maxBlockSize) || window.innerHeight
            }
          }),
          interact_min.i.modifiers.restrict({
            restriction: "parent"
          })
        ],
        listeners: {
          move: ({ rect, deltaRect }) => {
            if (deltaRect) {
              resizePosition.top += deltaRect.top;
              resizePosition.right += deltaRect.right;
              resizePosition.bottom += deltaRect.bottom;
              resizePosition.left += deltaRect.left;
            }
            this.updateSize({ size: rect.width, type: "inlineSize" });
            this.updateSize({ size: rect.height, type: "blockSize" });
            this.updateTransform();
          }
        }
      });
    }
    if (dragEnabled) {
      this.interaction.draggable({
        modifiers: [
          interact_min.i.modifiers.restrictRect({
            restriction: "parent"
          })
        ],
        listeners: {
          move: ({ dx, dy }) => {
            dragPosition.x += dx;
            dragPosition.y += dy;
            this.updateTransform();
          }
        }
      });
    }
  }
  getAdjustedResizePosition({ top, right, bottom, left }) {
    const halfTop = top / 2;
    const halfRight = right / 2;
    const halfBottom = bottom / 2;
    const halfLeft = left / 2;
    switch (this.placement) {
      case "top":
        return { top, right: halfRight, bottom: 0, left: halfLeft };
      case "top-start":
        return { top, right: 0, bottom: 0, left };
      case "top-end":
        return { top, right, bottom: 0, left: 0 };
      case "bottom":
        return { top: 0, right: halfRight, bottom, left: halfLeft };
      case "bottom-start":
        return { top: 0, right: 0, bottom, left };
      case "bottom-end":
        return { top: 0, right, bottom, left: 0 };
      case "cover":
      case "center":
      default:
        return {
          top: halfTop,
          right: halfRight,
          bottom: halfBottom,
          left: halfLeft
        };
    }
  }
  setTransitionEl(el) {
    if (!el) {
      return;
    }
    this.transitionEl = el;
    this.setupInteractions();
  }
  handleInternalPanelScroll(event) {
    if (event.target !== this.panelEl.value) {
      return;
    }
    event.stopPropagation();
    this.calciteDialogScroll.emit();
  }
  handleInternalPanelCloseClick(event) {
    if (event.target !== this.panelEl.value) {
      return;
    }
    event.stopPropagation();
    this.open = false;
  }
  handlePanelKeyDown(event) {
    if (this.escapeDisabled && event.key === "Escape") {
      event.preventDefault();
    }
  }
  async openDialog() {
    await this.componentOnReady();
    this.opened = true;
  }
  handleOutsideClose() {
    if (this.outsideCloseDisabled) {
      return;
    }
    this.open = false;
  }
  async closeDialog() {
    if (this.beforeClose) {
      try {
        await this.beforeClose();
      } catch {
        requestAnimationFrame(() => {
          this.ignoreOpenChange = true;
          this.open = true;
          this.ignoreOpenChange = false;
        });
        return;
      }
    }
    this.opened = false;
  }
  handleMutationObserver() {
    this.focusTrap.updateContainerElements();
  }
  render() {
    const { assistiveText, description, heading, opened } = this;
    return (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)({
      [CSS.container]: true,
      [CSS.containerOpen]: opened,
      [CSS.containerEmbedded]: this.embedded
    })}>${this.modal ? (0,lit/* html */.qy)`<calcite-scrim class=${(0,dist/* safeClassMap */.CP)(CSS.scrim)} @click=${this.handleOutsideClose}></calcite-scrim>` : null}<div .ariaDescription=${description} .ariaLabel=${heading} .ariaModal=${this.modal} class=${(0,dist/* safeClassMap */.CP)({
      [CSS.dialog]: true,
      [(0,dynamicClasses.g)("width", this.width, this.widthScale)]: !!(this.width || this.widthScale)
    })} @keydown=${this.handleKeyDown} role=dialog ${(0,ref/* ref */.K)(this.setTransitionEl)}>${assistiveText ? (0,keyed/* keyed */.D)("assistive-text", (0,lit/* html */.qy)`<div aria-live=polite class=${(0,dist/* safeClassMap */.CP)(CSS.assistiveText)}>${assistiveText}</div>`) : null}<slot name=${SLOTS.customContent}><slot name=${SLOTS.content}><calcite-panel .beforeClose=${this.beforeClose} class=${(0,dist/* safeClassMap */.CP)(CSS.panel)} .closable=${!this.closeDisabled} .closed=${!opened} .description=${description} .heading=${heading} .headingLevel=${this.headingLevel} .loading=${this.loading} .menuOpen=${this.menuOpen} .messageOverrides=${this.messageOverrides} @keydown=${this.handlePanelKeyDown} @calcitePanelClose=${this.handleInternalPanelCloseClick} @calcitePanelScroll=${this.handleInternalPanelScroll} .overlayPositioning=${this.overlayPositioning} .scale=${this.scale} ${(0,ref/* ref */.K)(this.panelEl)}><slot name=${SLOTS.actionBar} slot=${resources3.S.actionBar}></slot><slot name=${SLOTS.alerts} slot=${resources3.S.alerts}></slot><slot name=${SLOTS.headerActionsStart} slot=${resources3.S.headerActionsStart}></slot><slot name=${SLOTS.headerActionsEnd} slot=${resources3.S.headerActionsEnd}></slot><slot name=${SLOTS.headerContent} slot=${resources3.S.headerContent}></slot><slot name=${SLOTS.headerMenuActions} slot=${resources3.S.headerMenuActions}></slot><slot name=${SLOTS.fab} slot=${resources3.S.fab}></slot><slot name=${SLOTS.contentTop} slot=${resources3.S.contentTop}></slot><slot name=${SLOTS.contentBottom} slot=${resources3.S.contentBottom}></slot><slot name=${SLOTS.footerStart} slot=${resources3.S.footerStart}></slot><slot name=${SLOTS.footer} slot=${resources3.S.footer}></slot><slot name=${SLOTS.footerEnd} slot=${resources3.S.footerEnd}></slot><slot></slot></calcite-panel></slot></slot></div></div>`;
  }
}
(0,runtime.c)("calcite-dialog", Dialog);


;// ../node_modules/@esri/calcite-components/dist/components/calcite-dialog/index.js




/***/ }),

/***/ 96446:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Icon: () => (/* reexport */ Icon)
});

// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/runtime.js
var runtime = __webpack_require__(14558);
// EXTERNAL MODULE: ../node_modules/lit/index.js + 2 modules
var lit = __webpack_require__(52689);
// EXTERNAL MODULE: ../node_modules/@arcgis/lumina/dist/index.js + 15 modules
var dist = __webpack_require__(48747);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/dom.js
var dom = __webpack_require__(25450);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/observers.js
var observers = __webpack_require__(13061);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/logger.js
var logger = __webpack_require__(23424);
// EXTERNAL MODULE: ../node_modules/@lit/reactive-element/node/css-tag.js
var css_tag = __webpack_require__(56385);
;// ../node_modules/@esri/calcite-components/dist/components/calcite-icon/customElement.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */







const CSS = {
  flipRtl: "flip-rtl"
};
const iconCache = {};
const requestCache = {};
const scaleToPx = {
  s: 16,
  m: 24,
  l: 32
};
function generateIconId({ icon, scale }) {
  const size = scaleToPx[scale];
  const name = normalizeIconName(icon);
  const filled = name.charAt(name.length - 1) === "F";
  const iconName = filled ? name.substring(0, name.length - 1) : name;
  return `${iconName}${size}${filled ? "F" : ""}`;
}
async function fetchIcon(props) {
  const cachedIconKey = generateIconId(props);
  const cachedIconData = getCachedIconDataByKey(cachedIconKey);
  if (cachedIconData) {
    return cachedIconData;
  }
  if (!requestCache[cachedIconKey]) {
    requestCache[cachedIconKey] = fetch((0,runtime.g)(`./assets/icon/${cachedIconKey}.json`)).then((resp) => resp.json()).catch(() => {
      logger.l.error(`${props.icon} (${props.scale}) icon failed to load`);
      return "";
    });
  }
  const path = await requestCache[cachedIconKey];
  iconCache[cachedIconKey] = path;
  return path;
}
function getCachedIconData(props) {
  return getCachedIconDataByKey(generateIconId(props));
}
function getCachedIconDataByKey(id) {
  return iconCache[id];
}
function normalizeIconName(name) {
  const numberLeadingName = !isNaN(Number(name.charAt(0)));
  const parts = name.split("-");
  const kebabCased = parts.length > 0;
  if (kebabCased) {
    const firstNonDigitInPartPattern = /[a-z]/i;
    name = parts.map((part, partIndex) => {
      return part.replace(firstNonDigitInPartPattern, function replacer(match, offset) {
        const isFirstCharInName = partIndex === 0 && offset === 0;
        if (isFirstCharInName) {
          return match;
        }
        return match.toUpperCase();
      });
    }).join("");
  }
  return numberLeadingName ? `i${name}` : name;
}
const styles = (0,css_tag/* css */.AH)`:host{display:inline-flex;color:var(--calcite-icon-color, var(--calcite-ui-icon-color, currentColor))}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}`;
class Icon extends dist/* LitElement */.WF {
  constructor() {
    super(...arguments);
    this.visible = false;
    this.flipRtl = false;
    this.icon = null;
    this.preload = false;
    this.scale = "m";
  }
  static {
    this.properties = { pathData: [16, {}, { state: true }], visible: [16, {}, { state: true }], flipRtl: [7, {}, { reflect: true, type: Boolean }], icon: [3, {}, { reflect: true }], preload: [7, {}, { reflect: true, type: Boolean }], scale: [3, {}, { reflect: true }], textLabel: 1 };
  }
  static {
    this.styles = styles;
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.preload) {
      this.visible = true;
      this.loadIconPathData();
      return;
    }
    if (!this.visible) {
      this.waitUntilVisible(() => {
        this.visible = true;
        this.loadIconPathData();
      });
    }
  }
  willUpdate(changes) {
    if (changes.has("icon") && (this.hasUpdated || this.icon !== null) || changes.has("scale") && (this.hasUpdated || this.scale !== "m")) {
      this.loadIconPathData();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.intersectionObserver?.disconnect();
    this.intersectionObserver = null;
  }
  async loadIconPathData() {
    const { icon, scale, visible } = this;
    if (lit/* isServer */.S$ || !icon || !visible) {
      return;
    }
    const fetchIconProps = { icon, scale };
    const pathData = getCachedIconData(fetchIconProps) || await fetchIcon(fetchIconProps);
    if (icon !== this.icon) {
      return;
    }
    this.pathData = pathData;
  }
  waitUntilVisible(callback) {
    this.intersectionObserver = (0,observers.c)("intersection", (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.intersectionObserver.disconnect();
          this.intersectionObserver = null;
          callback();
        }
      });
    }, { rootMargin: "50px" });
    if (!this.intersectionObserver) {
      callback();
      return;
    }
    this.intersectionObserver.observe(this.el);
  }
  render() {
    const { el, flipRtl, pathData, scale, textLabel } = this;
    const dir = (0,dom.g)(el);
    const size = scaleToPx[scale];
    const semantic = !!textLabel;
    const paths = [].concat(pathData || "");
    this.el.ariaHidden = (0,dom.t)(!semantic);
    this.el.ariaLabel = semantic ? textLabel : null;
    this.el.role = semantic ? "img" : null;
    return (0,lit/* html */.qy)`<svg aria-hidden=true class=${(0,dist/* safeClassMap */.CP)({
      [CSS.flipRtl]: dir === "rtl" && flipRtl,
      svg: true
    })} fill=currentColor height=100% viewBox=${`0 0 ${size} ${size}`} width=100% xmlns=http://www.w3.org/2000/svg>${paths.map((path) => typeof path === "string" ? (0,lit/* svg */.JW)`<path d=${path ?? lit/* nothing */.s6} />` : (0,lit/* svg */.JW)`<path d=${path.d ?? lit/* nothing */.s6} opacity=${("opacity" in path ? path.opacity : 1) ?? lit/* nothing */.s6} />`)}</svg>`;
  }
}
(0,runtime.c)("calcite-icon", Icon);


;// ../node_modules/@esri/calcite-components/dist/components/calcite-icon/index.js


/***/ }),

/***/ 32524:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Loader: () => (/* reexport */ Loader)
});

// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/runtime.js
var runtime = __webpack_require__(14558);
// EXTERNAL MODULE: ../node_modules/lit/index.js + 2 modules
var lit = __webpack_require__(52689);
// EXTERNAL MODULE: ../node_modules/@arcgis/lumina/dist/index.js + 15 modules
var dist = __webpack_require__(48747);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/guid.js
var guid = __webpack_require__(7025);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/useT9n.js
var useT9n = __webpack_require__(13478);
// EXTERNAL MODULE: ../node_modules/@lit/reactive-element/node/css-tag.js
var css_tag = __webpack_require__(56385);
;// ../node_modules/@esri/calcite-components/dist/components/calcite-loader/customElement.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */






const CSS = {
  percentage: "percentage",
  progressRing: "ring--progress",
  ring: "ring",
  rings: "rings",
  text: "text",
  trackRing: "ring--track"
};
const styles = (0,css_tag/* css */.AH)`:host{position:relative;margin-inline:auto;display:flex;align-items:center;justify-content:center;opacity:1;flex-direction:column;min-block-size:var(--calcite-loader-size);font-size:var(--calcite-loader-font-size);stroke-width:var(--calcite-internal-stroke-width);fill:none;transform:scale(1);padding-block:var(--calcite-loader-spacing, 4rem)}:host([scale=s]){--calcite-internal-stroke-width: 3;--calcite-internal-text-offset: var(--calcite-spacing-xxs);--calcite-internal-loader-font-size: var(--calcite-font-size--3);--calcite-internal-loader-size: 2rem;--calcite-internal-loader-size-inline: .75rem;--calcite-internal-loader-value-line-height: .625rem}:host([scale=m]){--calcite-internal-stroke-width: 6;--calcite-internal-text-offset: var(--calcite-spacing-sm);--calcite-internal-loader-font-size: var(--calcite-font-size-0);--calcite-internal-loader-size: 4rem;--calcite-internal-loader-size-inline: 1rem;--calcite-internal-loader-value-line-height: 1.375rem}:host([scale=l]){--calcite-internal-stroke-width: 8;--calcite-internal-text-offset: var(--calcite-spacing-md);--calcite-internal-loader-font-size: var(--calcite-font-size-2);--calcite-internal-loader-size: 6rem;--calcite-internal-loader-size-inline: 1.5rem;--calcite-internal-loader-value-line-height: 1.71875rem}.text{display:block;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;margin-block-start:var(--calcite-loader-text-spacing, var(--calcite-internal-text-offset));font-weight:var(--calcite-loader-text-weight, var(--calcite-font-weight-normal));color:var(--calcite-loader-text-color, var(--calcite-color-text-1))}.percentage{display:block;text-align:center;font-size:var(--calcite-loader-font-size);inline-size:var(--calcite-loader-size, var(--calcite-internal-loader-size));line-height:var(--calcite-internal-loader-value-line-height);align-self:center;color:var(--calcite-loader-text-color, var(--calcite-color-text-1))}.rings{position:relative;display:flex;overflow:visible;opacity:1;inline-size:var(--calcite-loader-size, var(--calcite-internal-loader-size));block-size:var(--calcite-loader-size, var(--calcite-internal-loader-size))}.ring{position:absolute;inset-block-start:0px;transform-origin:center;overflow:visible;inset-inline-start:0;inline-size:var(--calcite-loader-size, var(--calcite-internal-loader-size));block-size:var(--calcite-loader-size, var(--calcite-internal-loader-size))}.ring--track{stroke:var(--calcite-loader-track-color, var(--calcite-color-transparent-press))}.ring--progress{stroke:var(--calcite-loader-progress-color, var(--calcite-color-brand));transform:rotate(-90deg);transition:all var(--calcite-internal-animation-timing-fast) linear}:host([type=indeterminate]) .ring--progress{animation:loader-clockwise calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 2 / var(--calcite-internal-duration-factor)) linear infinite}:host([inline]){--calcite-internal-stroke-width: 2;position:relative;margin:0;stroke:currentColor;stroke-width:2;padding-block:0px;block-size:var(--calcite-loader-size, var(--calcite-loader-size-inline, var(--calcite-internal-loader-size-inline)));min-block-size:var(--calcite-loader-size, var(--calcite-loader-size-inline, var(--calcite-internal-loader-size-inline)));inline-size:var(--calcite-loader-size, var(--calcite-loader-size-inline, var(--calcite-internal-loader-size-inline)));vertical-align:calc(var(--calcite-loader-size, var(--calcite-loader-size-inline, var(--calcite-internal-loader-size-inline))) * -1 * .2)}:host([inline]) .rings{inset-block-start:0px;margin:0;inset-inline-start:0;inline-size:var(--calcite-loader-size, var(--calcite-loader-size-inline, var(--calcite-internal-loader-size-inline)));block-size:var(--calcite-loader-size, var(--calcite-loader-size-inline, var(--calcite-internal-loader-size-inline)))}:host([inline]) .ring{inline-size:var(--calcite-loader-size, var(--calcite-loader-size-inline, var(--calcite-internal-loader-size-inline)));block-size:var(--calcite-loader-size, var(--calcite-loader-size-inline, var(--calcite-internal-loader-size-inline)))}:host([inline]) .ring--progress{stroke:var(--calcite-loader-progress-color-inline, currentColor)}:host([complete]){opacity:0;transform:scale(.75);transform-origin:center;transition:opacity var(--calcite-internal-animation-timing-medium) linear 1s,transform var(--calcite-internal-animation-timing-medium) linear 1s}:host([complete]) .rings{opacity:0;transform:scale(.75);transform-origin:center;transition:opacity calc(.18s * var(--calcite-internal-duration-factor)) linear .8s,transform calc(.18s * var(--calcite-internal-duration-factor)) linear .8s}:host([complete]) .percentage{color:var(--calcite-color-brand);transform:scale(1.05);transform-origin:center;transition:color var(--calcite-internal-animation-timing-medium) linear,transform var(--calcite-internal-animation-timing-medium) linear}@keyframes loader-clockwise{0%{transform:rotate(0)}to{transform:rotate(360deg)}}:host([hidden]){display:none}[hidden]{display:none}`;
class Loader extends dist/* LitElement */.WF {
  constructor() {
    super(...arguments);
    this.messages = (0,useT9n.u)({ name: null });
    this.complete = false;
    this.inline = false;
    this.scale = "m";
    this.text = "";
    this.type = "indeterminate";
    this.value = 0;
  }
  static {
    this.properties = { complete: [7, {}, { reflect: true, type: Boolean }], inline: [7, {}, { reflect: true, type: Boolean }], label: 1, scale: [3, {}, { reflect: true }], text: 1, type: [3, {}, { reflect: true }], value: [9, {}, { type: Number }] };
  }
  static {
    this.styles = styles;
  }
  connectedCallback() {
    super.connectedCallback();
    this.updateFormatter();
  }
  load() {
    requestAnimationFrame(() => this.valueChangeHandler());
  }
  willUpdate(changes) {
    if (changes.has("value") && (this.hasUpdated || this.value !== 0)) {
      this.valueChangeHandler();
    }
    if (changes.has("type") && (this.hasUpdated || this.type !== "indeterminate") || changes.has("messages")) {
      this.updateFormatter();
    }
  }
  valueChangeHandler() {
    this.complete = this.type.startsWith("determinate") && this.value === 100;
  }
  formatValue() {
    if (this.type !== "determinate-value") {
      return `${this.value}`;
    }
    return this.formatter.format(this.value / 100);
  }
  getSize(scale) {
    return {
      s: 32,
      m: 64,
      l: 96
    }[scale];
  }
  getInlineSize(scale) {
    return {
      s: 12,
      m: 16,
      l: 24
    }[scale];
  }
  updateFormatter() {
    if (this.type !== "determinate-value" || this.formatter?.resolvedOptions().locale === this.messages._lang) {
      return;
    }
    this.formatter = new Intl.NumberFormat(this.messages._lang, {
      style: "percent"
    });
  }
  render() {
    const { el, inline, label, text, type, value } = this;
    const id = el.id || (0,guid.g)();
    const isDeterminate = type !== "indeterminate";
    const valueNow = Math.floor(value);
    this.el.ariaLabel = label;
    this.el.ariaValueMax = isDeterminate ? "100" : void 0;
    this.el.ariaValueMin = isDeterminate ? "0" : void 0;
    this.el.ariaValueNow = isDeterminate ? valueNow.toString() : void 0;
    (0,dist/* setAttribute */.Bq)(this.el, "id", id);
    this.el.role = "progressbar";
    return (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(CSS.rings)}>${this.renderRing("track")}${this.renderRing("progress")}${!inline && isDeterminate && (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(CSS.percentage)}>${this.formatValue()}</div>` || ""}</div>${!inline && text && (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(CSS.text)}>${text}</div>` || ""}`;
  }
  renderRing(type) {
    const { inline, scale, value } = this;
    const size = inline ? this.getInlineSize(scale) : this.getSize(scale);
    const radiusRatio = 0.45;
    const radius = size * radiusRatio;
    let style;
    if (type === "progress") {
      const circumference = 2 * radius * Math.PI;
      const progress = (this.type.startsWith("determinate") ? value : 24) / 100 * circumference;
      const remaining = circumference - progress;
      style = { "stroke-dasharray": `${progress} ${remaining}` };
    }
    return (0,lit/* html */.qy)`<svg aria-hidden=true class=${(0,dist/* safeClassMap */.CP)({
      [CSS.ring]: true,
      [CSS.trackRing]: type === "track",
      [CSS.progressRing]: type === "progress"
    })} style=${(0,dist/* safeStyleMap */.zl)(style)} viewBox=${`0 0 ${size} ${size}`}>${(0,lit/* svg */.JW)`<circle cx=${size / 2} cy=${size / 2} r=${radius ?? lit/* nothing */.s6} />`}</svg>`;
  }
}
(0,runtime.c)("calcite-loader", Loader);


;// ../node_modules/@esri/calcite-components/dist/components/calcite-loader/index.js


/***/ }),

/***/ 2921:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Panel: () => (/* reexport */ Panel)
});

// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/components/calcite-action/index.js + 1 modules
var calcite_action = __webpack_require__(13847);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/components/calcite-action-menu/index.js + 1 modules
var calcite_action_menu = __webpack_require__(93297);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/components/calcite-scrim/index.js + 1 modules
var calcite_scrim = __webpack_require__(24293);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/runtime.js
var runtime = __webpack_require__(14558);
// EXTERNAL MODULE: ../node_modules/lit-html/node/directives/keyed.js
var keyed = __webpack_require__(51425);
// EXTERNAL MODULE: ../node_modules/lit-html/node/directives/ref.js + 1 modules
var ref = __webpack_require__(59276);
// EXTERNAL MODULE: ../node_modules/lit/index.js + 2 modules
var lit = __webpack_require__(52689);
// EXTERNAL MODULE: ../node_modules/@arcgis/lumina/dist/index.js + 15 modules
var dist = __webpack_require__(48747);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/dom.js
var dom = __webpack_require__(25450);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/interactive.js
var interactive = __webpack_require__(28070);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/component.js
var component = __webpack_require__(66865);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/observers.js
var observers = __webpack_require__(13061);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/resources2.js
var resources2 = __webpack_require__(90477);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/Heading.js
var Heading = __webpack_require__(64708);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/floating-ui.js + 5 modules
var floating_ui = __webpack_require__(96148);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/useT9n.js
var useT9n = __webpack_require__(13478);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/resources3.js
var resources3 = __webpack_require__(46126);
// EXTERNAL MODULE: ../node_modules/@lit/reactive-element/node/css-tag.js
var css_tag = __webpack_require__(56385);
;// ../node_modules/@esri/calcite-components/dist/components/calcite-panel/customElement.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */















const styles = (0,css_tag/* css */.AH)`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;box-sizing:border-box;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height: calc(var(--calcite-icon-size) * 3);border-radius:var(--calcite-panel-corner-radius, var(--calcite-corner-radius-sharp))}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.header{margin:0;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0;padding:0;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:.5rem}:host([scale=s]){--calcite-internal-panel-default-space: var(--calcite-spacing-sm);--calcite-internal-panel-header-vertical-padding: var(--calcite-spacing-sm-plus)}:host([scale=s]) .header-content .heading{font-size:var(--calcite-font-size--1)}:host([scale=s]) .header-content .description{font-size:var(--calcite-font-size--2)}:host([scale=m]){--calcite-internal-panel-default-space: var(--calcite-spacing-md);--calcite-internal-panel-header-vertical-padding: var(--calcite-spacing-md-plus)}:host([scale=m]) .header-content .heading{font-size:var(--calcite-font-size-0)}:host([scale=m]) .header-content .description{font-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-internal-panel-default-space: var(--calcite-spacing-lg);--calcite-internal-panel-header-vertical-padding: var(--calcite-spacing-xl)}:host([scale=l]) .header-content .heading{font-size:var(--calcite-font-size-1)}:host([scale=l]) .header-content .description{font-size:var(--calcite-font-size-0)}.content-top,.content-bottom{display:flex;align-items:flex-start;align-self:stretch;padding:var(--calcite-internal-panel-default-space);border-block-start:1px solid var(--calcite-panel-border-color, var(--calcite-color-border-3));background-color:var(--calcite-panel-background-color, var(--calcite-color-foreground-1))}.container{position:relative;margin:0;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;overflow:hidden;background-color:var(--calcite-color-background);padding:0;color:var(--calcite-color-text-2);transition:max-block-size var(--calcite-animation-timing),inline-size var(--calcite-animation-timing);box-sizing:border-box;font-size:var(--calcite-font-size--1)}.container *{box-sizing:border-box}.container[hidden]{display:none}.header{z-index:var(--calcite-z-index-header);display:flex;flex-direction:column;background-color:var(--calcite-panel-header-background-color, var(--calcite-color-foreground-1));border-block-end:1px solid var(--calcite-panel-border-color, var(--calcite-panel-header-border-block-end, var(--calcite-color-border-3)))}.header-container{display:flex;inline-size:100%;flex-direction:row;align-items:stretch;justify-content:flex-start;flex:0 0 auto}.header-container--border-end{border-block-end:1px solid var(--calcite-panel-border-color, var(--calcite-color-border-3))}.action-bar-container{inline-size:100%}.action-bar-container ::slotted(calcite-action-bar){inline-size:100%}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:.75rem;padding-block:.875rem;margin-inline-end:auto;justify-content:center}.header-content .heading,.header-content .description{display:block;flex:none;overflow-wrap:break-word;padding:0;line-height:var(--calcite-font-line-height-relative-snug)}.header-content .heading{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-panel-heading-text-color, var(--calcite-color-text-1))}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{color:var(--calcite-panel-description-text-color, var(--calcite-color-text-2))}#close,#collapse,.back-button,calcite-action-menu{--calcite-action-background-color: var(--calcite-panel-header-action-background-color);--calcite-action-background-color-hover: var(--calcite-panel-header-action-background-color-hover);--calcite-action-background-color-press: var(--calcite-panel-header-action-background-color-press);--calcite-action-text-color: var(--calcite-panel-header-action-text-color);--calcite-action-text-color-press: var(--calcite-panel-header-action-text-color-press)}.back-button{border-width:0px;border-style:solid;border-inline-end-width:1px;border-color:var(--calcite-panel-border-color, var(--calcite-color-border-3))}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{position:relative;display:flex;block-size:100%;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;overflow:auto;color:var(--calcite-color-text-2);outline-color:transparent;padding:var(--calcite-panel-space, var(--calcite-panel-content-space, 0));background:var(--calcite-panel-background-color, var(--calcite-color-background))}.content-wrapper:focus-visible{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}.header-content{flex:1 1 auto;justify-content:center;padding-block:var(--calcite-internal-panel-header-vertical-padding);padding-inline:var(--calcite-internal-panel-default-space)}.header-content.header-slotted-content{padding:var(--calcite-panel-header-content-space, var(--calcite-internal-panel-header-vertical-padding) var(--calcite-internal-panel-default-space))}.footer{margin-block-start:auto;display:flex;flex-direction:row;align-content:space-between;align-items:center;justify-content:center;font-size:var(--calcite-font-size--2);line-height:1.375;border-block-start:1px solid var(--calcite-panel-border-color, var(--calcite-color-border-3));padding:var(--calcite-panel-footer-space, var(--calcite-panel-footer-padding, var(--calcite-internal-panel-default-space)));background-color:var(--calcite-panel-footer-background-color, var(--calcite-color-foreground-1))}.footer-content{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:center}.footer-actions{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:space-evenly;gap:var(--calcite-internal-panel-default-space)}.footer-start{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:flex-start;margin-inline-end:auto;gap:var(--calcite-internal-panel-default-space)}.footer-end{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:flex-end;margin-inline-start:auto;gap:var(--calcite-internal-panel-default-space)}.fab-container{position:sticky;inset-block-end:0px;z-index:var(--calcite-z-index-sticky);margin-block:0px;margin-inline:auto;display:block;padding:.5rem;inset-inline:0;inline-size:fit-content}:host([hidden]){display:none}[hidden]{display:none}`;
class Panel extends dist/* LitElement */.WF {
  constructor() {
    super();
    this.resizeObserver = (0,observers.c)("resize", () => this.resizeHandler());
    this.messages = (0,useT9n.u)();
    this.hasActionBar = false;
    this.hasContentBottom = false;
    this.hasContentTop = false;
    this.hasEndActions = false;
    this.hasFab = false;
    this.hasFooterActions = false;
    this.hasFooterContent = false;
    this.hasFooterEndContent = false;
    this.hasFooterStartContent = false;
    this.hasHeaderContent = false;
    this.hasMenuItems = false;
    this.hasStartActions = false;
    this.isClosed = false;
    this.showHeaderContent = false;
    this.closable = false;
    this.closed = false;
    this.collapseDirection = "down";
    this.collapsed = false;
    this.collapsible = false;
    this.disabled = false;
    this.loading = false;
    this.menuOpen = false;
    this.menuPlacement = floating_ui.e;
    this.overlayPositioning = "absolute";
    this.scale = "m";
    this.calcitePanelClose = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.calcitePanelScroll = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.calcitePanelToggle = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.listen("keydown", this.panelKeyDownHandler);
  }
  static {
    this.properties = { hasActionBar: [16, {}, { state: true }], hasContentBottom: [16, {}, { state: true }], hasContentTop: [16, {}, { state: true }], hasEndActions: [16, {}, { state: true }], hasFab: [16, {}, { state: true }], hasFooterActions: [16, {}, { state: true }], hasFooterContent: [16, {}, { state: true }], hasFooterEndContent: [16, {}, { state: true }], hasFooterStartContent: [16, {}, { state: true }], hasHeaderContent: [16, {}, { state: true }], hasMenuItems: [16, {}, { state: true }], hasStartActions: [16, {}, { state: true }], isClosed: [16, {}, { state: true }], showHeaderContent: [16, {}, { state: true }], beforeClose: [0, {}, { attribute: false }], closable: [7, {}, { reflect: true, type: Boolean }], closed: [7, {}, { reflect: true, type: Boolean }], collapseDirection: 1, collapsed: [7, {}, { reflect: true, type: Boolean }], collapsible: [7, {}, { reflect: true, type: Boolean }], description: 1, disabled: [7, {}, { reflect: true, type: Boolean }], heading: 1, headingLevel: [11, {}, { type: Number, reflect: true }], loading: [7, {}, { reflect: true, type: Boolean }], menuFlipPlacements: [0, {}, { attribute: false }], menuOpen: [7, {}, { reflect: true, type: Boolean }], menuPlacement: [3, {}, { reflect: true }], messageOverrides: [0, {}, { attribute: false }], overlayPositioning: [3, {}, { reflect: true }], scale: [3, {}, { reflect: true }] };
  }
  static {
    this.styles = styles;
  }
  async scrollContentTo(options) {
    this.panelScrollEl?.scrollTo(options);
  }
  async setFocus() {
    await (0,component.c)(this);
    (0,dom.h)(this.containerEl);
  }
  async load() {
    this.isClosed = this.closed;
  }
  willUpdate(changes) {
    if (changes.has("closed") && this.hasUpdated) {
      if (this.closed) {
        this.close();
      } else {
        this.open();
      }
    }
  }
  updated() {
    (0,interactive.u)(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.resizeObserver?.disconnect();
  }
  resizeHandler() {
    const { panelScrollEl } = this;
    if (!panelScrollEl || typeof panelScrollEl.scrollHeight !== "number" || typeof panelScrollEl.offsetHeight !== "number") {
      return;
    }
    const hasScrollingContent = panelScrollEl.scrollHeight > panelScrollEl.offsetHeight;
    if (hasScrollingContent) {
      panelScrollEl.setAttribute("tabindex", "0");
    } else {
      panelScrollEl.removeAttribute("tabindex");
    }
  }
  setContainerRef(node) {
    this.containerEl = node;
  }
  panelKeyDownHandler(event) {
    if (this.closable && event.key === "Escape" && !event.defaultPrevented) {
      this.handleUserClose();
      event.preventDefault();
    }
  }
  handleUserClose() {
    this.closed = true;
    this.calcitePanelClose.emit();
  }
  open() {
    this.isClosed = false;
  }
  async close() {
    const beforeClose = this.beforeClose ?? (() => Promise.resolve());
    try {
      await beforeClose();
    } catch {
      requestAnimationFrame(() => {
        this.closed = false;
      });
      return;
    }
    this.isClosed = true;
  }
  collapse() {
    this.collapsed = !this.collapsed;
    this.calcitePanelToggle.emit();
  }
  panelScrollHandler() {
    this.calcitePanelScroll.emit();
  }
  handleHeaderActionsStartSlotChange(event) {
    this.hasStartActions = (0,dom.a)(event);
  }
  handleHeaderActionsEndSlotChange(event) {
    this.hasEndActions = (0,dom.a)(event);
  }
  handleHeaderMenuActionsSlotChange(event) {
    this.hasMenuItems = (0,dom.a)(event);
  }
  handleActionBarSlotChange(event) {
    const actionBars = (0,dom.s)(event).filter((el) => el?.matches("calcite-action-bar"));
    actionBars.forEach((actionBar) => actionBar.layout = "horizontal");
    this.hasActionBar = !!actionBars.length;
  }
  handleHeaderContentSlotChange(event) {
    this.hasHeaderContent = (0,dom.a)(event);
  }
  handleFabSlotChange(event) {
    this.hasFab = (0,dom.a)(event);
  }
  handleFooterActionsSlotChange(event) {
    this.hasFooterActions = (0,dom.a)(event);
  }
  handleFooterEndSlotChange(event) {
    this.hasFooterEndContent = (0,dom.a)(event);
  }
  handleFooterStartSlotChange(event) {
    this.hasFooterStartContent = (0,dom.a)(event);
  }
  handleFooterSlotChange(event) {
    this.hasFooterContent = (0,dom.a)(event);
  }
  contentBottomSlotChangeHandler(event) {
    this.hasContentBottom = (0,dom.a)(event);
  }
  contentTopSlotChangeHandler(event) {
    this.hasContentTop = (0,dom.a)(event);
  }
  setPanelScrollEl(el) {
    this.panelScrollEl = el;
    this.resizeObserver?.disconnect();
    if (el) {
      this.resizeObserver?.observe(el);
      this.resizeHandler();
    }
  }
  handleAlertsSlotChange(event) {
    (0,dom.s)(event)?.map((el) => {
      if (el.nodeName === "CALCITE-ALERT") {
        el.embedded = true;
      }
    });
  }
  renderHeaderContent() {
    const { heading, headingLevel, description, hasHeaderContent } = this;
    const headingNode = heading ? (0,Heading.H)({ class: resources3.C.heading, level: headingLevel, children: heading }) : null;
    const descriptionNode = description ? (0,lit/* html */.qy)`<span class=${(0,dist/* safeClassMap */.CP)(resources3.C.description)}>${description}</span>` : null;
    return !hasHeaderContent && (headingNode || descriptionNode) ? (0,keyed/* keyed */.D)("header-content", (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(resources3.C.headerContent)}>${headingNode}${descriptionNode}</div>`) : null;
  }
  renderActionBar() {
    return (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(resources3.C.actionBarContainer)} .hidden=${!this.hasActionBar}><slot name=${resources3.S.actionBar} @slotchange=${this.handleActionBarSlotChange}></slot></div>`;
  }
  renderHeaderSlottedContent() {
    return (0,keyed/* keyed */.D)("slotted-header-content", (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)({ [resources3.C.headerContent]: true, [resources3.C.headerSlottedContent]: true })} .hidden=${!this.hasHeaderContent}><slot name=${resources3.S.headerContent} @slotchange=${this.handleHeaderContentSlotChange}></slot></div>`);
  }
  renderHeaderStartActions() {
    const { hasStartActions } = this;
    return (0,keyed/* keyed */.D)("header-actions-start", (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)({ [resources3.C.headerActionsStart]: true, [resources3.C.headerActions]: true })} .hidden=${!hasStartActions}><slot name=${resources3.S.headerActionsStart} @slotchange=${this.handleHeaderActionsStartSlotChange}></slot></div>`);
  }
  renderHeaderActionsEnd() {
    const { hasEndActions, messages, closable, collapsed, collapseDirection, collapsible, hasMenuItems } = this;
    const { collapse, expand, close } = messages;
    const icons = [resources3.I.expand, resources3.I.collapse];
    if (collapseDirection === "up") {
      icons.reverse();
    }
    const collapseNode = collapsible ? (0,lit/* html */.qy)`<calcite-action .ariaExpanded=${!collapsed} .ariaLabel=${collapse} .icon=${collapsed ? icons[0] : icons[1]} id=${resources3.a.collapse} @click=${this.collapse} .scale=${this.scale} .text=${collapse} title=${(collapsed ? expand : collapse) ?? lit/* nothing */.s6}></calcite-action>` : null;
    const closeNode = closable ? (0,lit/* html */.qy)`<calcite-action .ariaLabel=${close} .icon=${resources3.I.close} id=${resources3.a.close} @click=${this.handleUserClose} .scale=${this.scale} .text=${close} title=${close ?? lit/* nothing */.s6}></calcite-action>` : null;
    const slotNode = (0,lit/* html */.qy)`<slot name=${resources3.S.headerActionsEnd} @slotchange=${this.handleHeaderActionsEndSlotChange}></slot>`;
    const showContainer = hasEndActions || collapseNode || closeNode || hasMenuItems;
    return (0,keyed/* keyed */.D)("header-actions-end", (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)({ [resources3.C.headerActionsEnd]: true, [resources3.C.headerActions]: true })} .hidden=${!showContainer}>${slotNode}${this.renderMenu()}${collapseNode}${closeNode}</div>`);
  }
  renderMenu() {
    const { hasMenuItems, messages, menuOpen, menuFlipPlacements, menuPlacement } = this;
    return (0,keyed/* keyed */.D)("menu", (0,lit/* html */.qy)`<calcite-action-menu .flipPlacements=${menuFlipPlacements ?? ["top", "bottom"]} .hidden=${!hasMenuItems} .label=${messages.options} .open=${menuOpen} .overlayPositioning=${this.overlayPositioning} .placement=${menuPlacement}><calcite-action class=${(0,dist/* safeClassMap */.CP)(resources3.C.menuAction)} .icon=${resources3.I.menu} .scale=${this.scale} slot=${resources2.S.trigger} .text=${messages.options}></calcite-action><slot name=${resources3.S.headerMenuActions} @slotchange=${this.handleHeaderMenuActionsSlotChange}></slot></calcite-action-menu>`);
  }
  renderHeaderNode() {
    const { hasHeaderContent, hasStartActions, hasEndActions, closable, collapsible, hasMenuItems, hasActionBar } = this;
    const headerContentNode = this.renderHeaderContent();
    const showHeaderContent = hasHeaderContent || !!headerContentNode || hasStartActions || hasEndActions || collapsible || closable || hasMenuItems;
    this.showHeaderContent = showHeaderContent;
    return (0,lit/* html */.qy)`<header class=${(0,dist/* safeClassMap */.CP)(resources3.C.header)} .hidden=${!(showHeaderContent || hasActionBar)}><div class=${(0,dist/* safeClassMap */.CP)({ [resources3.C.headerContainer]: true, [resources3.C.headerContainerBorderEnd]: hasActionBar })} .hidden=${!showHeaderContent}>${this.renderHeaderStartActions()}${this.renderHeaderSlottedContent()}${headerContentNode}${this.renderHeaderActionsEnd()}</div>${this.renderActionBar()}${this.renderContentTop()}</header>`;
  }
  renderFooterNode() {
    const { hasFooterEndContent, hasFooterStartContent, hasFooterContent, hasFooterActions } = this;
    const showFooter = hasFooterStartContent || hasFooterEndContent || hasFooterContent || hasFooterActions;
    return (0,lit/* html */.qy)`<footer class=${(0,dist/* safeClassMap */.CP)(resources3.C.footer)} .hidden=${!showFooter}><div class=${(0,dist/* safeClassMap */.CP)(resources3.C.footerContent)} .hidden=${!hasFooterContent}><slot name=${resources3.S.footer} @slotchange=${this.handleFooterSlotChange}></slot></div><div class=${(0,dist/* safeClassMap */.CP)(resources3.C.footerStart)} .hidden=${hasFooterContent || !hasFooterStartContent}><slot name=${resources3.S.footerStart} @slotchange=${this.handleFooterStartSlotChange}></slot></div><div class=${(0,dist/* safeClassMap */.CP)(resources3.C.footerEnd)} .hidden=${hasFooterContent || !hasFooterEndContent}><slot name=${resources3.S.footerEnd} @slotchange=${this.handleFooterEndSlotChange}></slot></div><div class=${(0,dist/* safeClassMap */.CP)(resources3.C.footerActions)} .hidden=${hasFooterContent || !hasFooterActions}>${(0,keyed/* keyed */.D)("footer-actions-slot", (0,lit/* html */.qy)`<slot name=${resources3.S.footerActions} @slotchange=${this.handleFooterActionsSlotChange}></slot>`)}</div></footer>`;
  }
  renderContent() {
    return (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(resources3.C.contentWrapper)} .hidden=${this.collapsible && this.collapsed} @scroll=${this.panelScrollHandler} ${(0,ref/* ref */.K)(this.setPanelScrollEl)}><slot></slot>${this.renderFab()}</div>`;
  }
  renderContentBottom() {
    return (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(resources3.C.contentBottom)} .hidden=${!this.hasContentBottom}><slot name=${resources3.S.contentBottom} @slotchange=${this.contentBottomSlotChangeHandler}></slot></div>`;
  }
  renderContentTop() {
    return (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(resources3.C.contentTop)} .hidden=${!this.hasContentTop}><slot name=${resources3.S.contentTop} @slotchange=${this.contentTopSlotChangeHandler}></slot></div>`;
  }
  renderFab() {
    return (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(resources3.C.fabContainer)} .hidden=${!this.hasFab}><slot name=${resources3.S.fab} @slotchange=${this.handleFabSlotChange}></slot></div>`;
  }
  render() {
    const { disabled, loading, isClosed } = this;
    const panelNode = (0,lit/* html */.qy)`<article .ariaBusy=${loading} class=${(0,dist/* safeClassMap */.CP)(resources3.C.container)} .hidden=${isClosed} ${(0,ref/* ref */.K)(this.setContainerRef)}>${this.renderHeaderNode()}${this.renderContent()}${this.renderContentBottom()}${this.renderFooterNode()}${(0,keyed/* keyed */.D)("alerts", (0,lit/* html */.qy)`<slot name=${resources3.S.alerts} @slotchange=${this.handleAlertsSlotChange}></slot>`)}</article>`;
    return (0,interactive.I)({ disabled, children: (0,lit/* html */.qy)`${loading ? (0,lit/* html */.qy)`<calcite-scrim .loading=${loading}></calcite-scrim>` : null}${panelNode}` });
  }
}
(0,runtime.c)("calcite-panel", Panel);


;// ../node_modules/@esri/calcite-components/dist/components/calcite-panel/index.js





/***/ }),

/***/ 78568:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Popover: () => (/* reexport */ Popover)
});

// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/components/calcite-action/index.js + 1 modules
var calcite_action = __webpack_require__(13847);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/components/calcite-icon/index.js + 1 modules
var calcite_icon = __webpack_require__(96446);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/runtime.js
var runtime = __webpack_require__(14558);
// EXTERNAL MODULE: ../node_modules/lit-html/node/directives/keyed.js
var keyed = __webpack_require__(51425);
// EXTERNAL MODULE: ../node_modules/lit/index.js + 2 modules
var lit = __webpack_require__(52689);
// EXTERNAL MODULE: ../node_modules/lit-html/node/directives/ref.js + 1 modules
var ref = __webpack_require__(59276);
// EXTERNAL MODULE: ../node_modules/@arcgis/lumina/dist/index.js + 15 modules
var dist = __webpack_require__(48747);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/floating-ui.js + 5 modules
var floating_ui = __webpack_require__(96148);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/dom.js
var dom = __webpack_require__(25450);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/guid.js
var guid = __webpack_require__(7025);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/openCloseComponent.js
var openCloseComponent = __webpack_require__(36607);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/Heading.js
var Heading = __webpack_require__(64708);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/component.js
var component = __webpack_require__(66865);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/observers.js
var observers = __webpack_require__(13061);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/FloatingArrow.js
var FloatingArrow = __webpack_require__(70605);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/useT9n.js
var useT9n = __webpack_require__(13478);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/useFocusTrap.js + 2 modules
var useFocusTrap = __webpack_require__(44148);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/key.js
var key = __webpack_require__(14357);
// EXTERNAL MODULE: ../node_modules/@lit/reactive-element/node/css-tag.js
var css_tag = __webpack_require__(56385);
;// ../node_modules/@esri/calcite-components/dist/components/calcite-popover/customElement.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */

















class PopoverManager {
  constructor() {
    this.registeredElements = /* @__PURE__ */ new Map();
    this.registeredElementCount = 0;
    this.queryPopover = (composedPath) => {
      const { registeredElements } = this;
      const registeredElement = composedPath.find((pathEl) => registeredElements.has(pathEl));
      return registeredElements.get(registeredElement);
    };
    this.togglePopovers = (event) => {
      const composedPath = event.composedPath();
      const togglePopover = this.queryPopover(composedPath);
      if (togglePopover && !togglePopover.triggerDisabled) {
        togglePopover.open = !togglePopover.open;
      }
      Array.from(this.registeredElements.values()).filter(
        (popover) => popover !== togglePopover && popover.autoClose && popover.open && !composedPath.includes(popover)
      ).forEach((popover) => popover.open = false);
    };
    this.keyDownHandler = (event) => {
      if (event.defaultPrevented) {
        return;
      }
      if (event.key === "Escape") {
        this.closeAllPopovers();
      } else if ((0,key.i)(event.key)) {
        this.togglePopovers(event);
      }
    };
    this.clickHandler = (event) => {
      if ((0,dom.u)(event) || event.defaultPrevented) {
        return;
      }
      this.togglePopovers(event);
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  registerElement(referenceEl, popover) {
    this.registeredElementCount++;
    this.registeredElements.set(referenceEl, popover);
    if (this.registeredElementCount === 1) {
      this.addListeners();
    }
  }
  unregisterElement(referenceEl) {
    if (this.registeredElements.delete(referenceEl)) {
      this.registeredElementCount--;
    }
    if (this.registeredElementCount === 0) {
      this.removeListeners();
    }
  }
  closeAllPopovers() {
    Array.from(this.registeredElements.values()).forEach((popover) => popover.open = false);
  }
  addListeners() {
    window.addEventListener("click", this.clickHandler);
    window.addEventListener("keydown", this.keyDownHandler);
  }
  removeListeners() {
    window.removeEventListener("click", this.clickHandler);
    window.removeEventListener("keydown", this.keyDownHandler);
  }
}
const CSS = {
  positionContainer: "position-container",
  container: "container",
  closeButtonContainer: "close-button-container",
  closeButton: "close-button",
  content: "content",
  hasHeader: "has-header",
  header: "header",
  headerContainer: "header-container",
  heading: "heading"
};
const defaultPopoverPlacement = "auto";
const ARIA_CONTROLS = "aria-controls";
const ARIA_EXPANDED = "aria-expanded";
const styles = (0,css_tag/* css */.AH)`:host{display:contents;--calcite-floating-ui-z-index: var(--calcite-popover-z-index, var(--calcite-z-index-popup))}.position-container{inline-size:max-content;display:none;max-inline-size:100vw;max-block-size:100vh;inset-block-start:0;left:0;z-index:var(--calcite-floating-ui-z-index)}.position-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset,left,opacity;opacity:0;box-shadow:0 0 16px #00000029;z-index:var(--calcite-z-index);border-radius:.25rem}.position-container[data-placement^=bottom] .calcite-floating-ui-anim{inset-block-start:-5px}.position-container[data-placement^=top] .calcite-floating-ui-anim{inset-block-start:5px}.position-container[data-placement^=left] .calcite-floating-ui-anim{left:5px}.position-container[data-placement^=right] .calcite-floating-ui-anim{left:-5px}.position-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;inset-block-start:0;left:0}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-z-index) * -1);fill:var(--calcite-color-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-color-border-3)}:host([scale=s]) .heading{padding:.5rem .75rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .heading{padding:.75rem 1rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .heading{padding:1rem 1.25rem;font-size:var(--calcite-font-size-1);line-height:1.375}.position-container .calcite-floating-ui-anim{border-width:1px;border-style:solid;background-color:var(--calcite-popover-background-color, var(--calcite-color-foreground-1));border-color:var(--calcite-popover-border-color, var(--calcite-color-border-3));border-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round))}.calcite-floating-ui-arrow{fill:var(--calcite-popover-background-color, var(--calcite-color-foreground-1))}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-popover-border-color, var(--calcite-color-border-3))}.header{display:flex;flex:1 1 auto;align-items:stretch;justify-content:flex-start;border-width:0px;border-bottom-width:1px;border-style:solid;border-block-end-color:var(--calcite-popover-border-color, var(--calcite-color-border-3))}.heading{margin:0;display:block;flex:1 1 auto;align-self:center;white-space:normal;font-weight:var(--calcite-font-weight-medium);word-wrap:break-word;word-break:break-word;color:var(--calcite-popover-text-color, var(--calcite-color-text-1))}.header-container{position:relative;display:flex;height:100%;flex-direction:row;flex-wrap:nowrap;border-radius:.25rem;color:var(--calcite-popover-text-color, var(--calcite-color-text-1))}.header-container.has-header{flex-direction:column}.content{display:flex;height:100%;width:100%;flex-direction:column;flex-wrap:nowrap;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:flex;overflow:hidden;flex:0 0 auto;border-start-end-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round));border-end-end-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round));--calcite-action-corner-radius-start-end: var(--calcite-popover-corner-radius, var(--calcite-corner-radius-sharp));--calcite-action-corner-radius-end-end: var(--calcite-popover-corner-radius, var(--calcite-corner-radius-sharp))}::slotted(calcite-panel),::slotted(calcite-flow){height:100%}:host([hidden]){display:none}[hidden]{display:none}`;
const manager = new PopoverManager();
class Popover extends dist/* LitElement */.WF {
  constructor() {
    super(...arguments);
    this.closeButtonEl = (0,ref/* createRef */._)();
    this.focusTrap = (0,useFocusTrap.u)({
      triggerProp: "open",
      focusTrapOptions: {
        allowOutsideClick: true,
        escapeDeactivates: (event) => {
          if (!event.defaultPrevented) {
            this.open = false;
            event.preventDefault();
          }
          return false;
        }
      }
    })(this);
    this.guid = `calcite-popover-${(0,guid.g)()}`;
    this.hasLoaded = false;
    this.mutationObserver = (0,observers.c)("mutation", () => this.focusTrap.updateContainerElements());
    this.transitionProp = "opacity";
    this.messages = (0,useT9n.u)();
    this.floatingLayout = "vertical";
    this.autoClose = false;
    this.closable = false;
    this.flipDisabled = false;
    this.focusTrapDisabled = false;
    this.offsetDistance = floating_ui.d;
    this.offsetSkidding = 0;
    this.open = false;
    this.overlayPositioning = "absolute";
    this.placement = defaultPopoverPlacement;
    this.pointerDisabled = false;
    this.scale = "m";
    this.triggerDisabled = false;
    this.calcitePopoverBeforeClose = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.calcitePopoverBeforeOpen = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.calcitePopoverClose = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.calcitePopoverOpen = (0,dist/* createEvent */.lh)({ cancelable: false });
  }
  static {
    this.properties = { floatingLayout: [16, {}, { state: true }], referenceEl: [16, {}, { state: true }], autoClose: [7, {}, { reflect: true, type: Boolean }], closable: [7, {}, { reflect: true, type: Boolean }], flipDisabled: [7, {}, { reflect: true, type: Boolean }], flipPlacements: [0, {}, { attribute: false }], focusTrapDisabled: [7, {}, { reflect: true, type: Boolean }], focusTrapOptions: [0, {}, { attribute: false }], heading: 1, headingLevel: [11, {}, { type: Number, reflect: true }], label: 1, messageOverrides: [0, {}, { attribute: false }], offsetDistance: [11, {}, { type: Number, reflect: true }], offsetSkidding: [11, {}, { reflect: true, type: Number }], open: [7, {}, { reflect: true, type: Boolean }], overlayPositioning: [3, {}, { reflect: true }], placement: [3, {}, { reflect: true }], pointerDisabled: [7, {}, { reflect: true, type: Boolean }], referenceElement: 1, scale: [3, {}, { reflect: true }], triggerDisabled: [7, {}, { reflect: true, type: Boolean }] };
  }
  static {
    this.styles = styles;
  }
  async reposition(delayed = false) {
    const { referenceEl, placement, overlayPositioning, flipDisabled, filteredFlipPlacements, offsetDistance, offsetSkidding, arrowEl, floatingEl } = this;
    return (0,floating_ui.r)(this, {
      floatingEl,
      referenceEl,
      overlayPositioning,
      placement,
      flipDisabled,
      flipPlacements: filteredFlipPlacements,
      offsetDistance,
      offsetSkidding,
      arrowEl,
      type: "popover"
    }, delayed);
  }
  async setFocus() {
    await (0,component.c)(this);
    this.requestUpdate();
    (0,dom.h)(this.el);
  }
  async updateFocusTrapElements() {
    this.focusTrap.updateContainerElements();
  }
  connectedCallback() {
    super.connectedCallback();
    this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
    this.setFilteredPlacements();
    requestAnimationFrame(() => this.setUpReferenceElement(this.hasLoaded));
  }
  willUpdate(changes) {
    if (changes.has("flipPlacements")) {
      this.flipPlacementsHandler();
    }
    if (changes.has("open") && (this.hasUpdated || this.open !== false)) {
      this.openHandler();
    }
    if (changes.has("offsetDistance") && (this.hasUpdated || this.offsetDistance !== floating_ui.d) || changes.has("offsetSkidding") && (this.hasUpdated || this.offsetSkidding !== 0) || changes.has("overlayPositioning") && (this.hasUpdated || this.overlayPositioning !== "absolute") || changes.has("placement") && (this.hasUpdated || this.placement !== defaultPopoverPlacement)) {
      this.reposition(true);
    }
    if (changes.has("referenceElement")) {
      this.referenceElementHandler();
    }
  }
  loaded() {
    if (this.referenceElement && !this.referenceEl) {
      this.setUpReferenceElement();
    }
    this.hasLoaded = true;
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.mutationObserver?.disconnect();
    this.removeReferences();
    (0,floating_ui.a)(this);
  }
  flipPlacementsHandler() {
    this.setFilteredPlacements();
    this.reposition(true);
  }
  openHandler() {
    (0,openCloseComponent.o)(this);
    this.reposition(true);
    this.setExpandedAttr();
  }
  referenceElementHandler() {
    this.setUpReferenceElement();
    this.reposition(true);
  }
  setFloatingEl(el) {
    this.floatingEl = el;
    if (el) {
      requestAnimationFrame(() => this.setUpReferenceElement());
    }
  }
  setTransitionEl(el) {
    if (!el) {
      return;
    }
    this.transitionEl = el;
  }
  setFilteredPlacements() {
    const { el, flipPlacements } = this;
    this.filteredFlipPlacements = flipPlacements ? (0,floating_ui.f)(flipPlacements, el) : null;
  }
  setUpReferenceElement(warn = true) {
    this.removeReferences();
    this.referenceEl = this.getReferenceElement();
    (0,floating_ui.c)(this);
    const { el, referenceElement, referenceEl } = this;
    if (warn && referenceElement && !referenceEl) {
      console.warn(`${el.tagName}: reference-element id "${referenceElement}" was not found.`, {
        el
      });
    }
    this.addReferences();
  }
  getId() {
    return this.el.id || this.guid;
  }
  setExpandedAttr() {
    const { referenceEl, open } = this;
    if (!referenceEl) {
      return;
    }
    if ("setAttribute" in referenceEl) {
      referenceEl.setAttribute(ARIA_EXPANDED, (0,dom.t)(open));
    }
  }
  addReferences() {
    const { referenceEl } = this;
    if (!referenceEl) {
      return;
    }
    const id = this.getId();
    if ("setAttribute" in referenceEl) {
      referenceEl.setAttribute(ARIA_CONTROLS, id);
    }
    manager.registerElement(referenceEl, this.el);
    this.setExpandedAttr();
  }
  removeReferences() {
    const { referenceEl } = this;
    if (!referenceEl) {
      return;
    }
    if ("removeAttribute" in referenceEl) {
      referenceEl.removeAttribute(ARIA_CONTROLS);
      referenceEl.removeAttribute(ARIA_EXPANDED);
    }
    manager.unregisterElement(referenceEl);
  }
  getReferenceElement() {
    const { referenceElement, el } = this;
    return (typeof referenceElement === "string" ? (0,dom.q)(el, { id: referenceElement }) : referenceElement) || null;
  }
  hide() {
    this.open = false;
  }
  onBeforeOpen() {
    this.calcitePopoverBeforeOpen.emit();
  }
  onOpen() {
    this.calcitePopoverOpen.emit();
    this.focusTrap.activate();
  }
  onBeforeClose() {
    this.calcitePopoverBeforeClose.emit();
  }
  onClose() {
    this.calcitePopoverClose.emit();
    (0,floating_ui.h)(this);
    this.focusTrap.deactivate();
  }
  storeArrowEl(el) {
    this.arrowEl = el;
    this.reposition(true);
  }
  renderCloseButton() {
    const { messages, closable } = this;
    return closable ? (0,keyed/* keyed */.D)(CSS.closeButtonContainer, (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(CSS.closeButtonContainer)}><calcite-action appearance=transparent class=${(0,dist/* safeClassMap */.CP)(CSS.closeButton)} @click=${this.hide} .scale=${this.scale} .text=${messages.close} ${(0,ref/* ref */.K)(this.closeButtonEl)}><calcite-icon icon=x .scale=${(0,component.g)(this.scale)}></calcite-icon></calcite-action></div>`) : null;
  }
  renderHeader() {
    const { heading, headingLevel } = this;
    const headingNode = heading ? (0,Heading.H)({ class: CSS.heading, level: headingLevel, children: heading }) : null;
    return headingNode ? (0,keyed/* keyed */.D)(CSS.header, (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(CSS.header)}>${headingNode}${this.renderCloseButton()}</div>`) : null;
  }
  render() {
    const { referenceEl, heading, label, open, pointerDisabled, floatingLayout } = this;
    const displayed = referenceEl && open;
    const hidden = !displayed;
    const arrowNode = !pointerDisabled ? (0,keyed/* keyed */.D)("floating-arrow", (0,FloatingArrow.F)({ floatingLayout, ref: this.storeArrowEl })) : null;
    this.el.inert = hidden;
    this.el.ariaLabel = label;
    this.el.ariaLive = "polite";
    (0,dist/* setAttribute */.Bq)(this.el, "id", this.getId());
    this.el.role = "dialog";
    return (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(CSS.positionContainer)} ${(0,ref/* ref */.K)(this.setFloatingEl)}><div class=${(0,dist/* safeClassMap */.CP)({
      [CSS.container]: true,
      [floating_ui.F.animation]: true,
      [floating_ui.F.animationActive]: displayed
    })} ${(0,ref/* ref */.K)(this.setTransitionEl)}>${arrowNode}<div class=${(0,dist/* safeClassMap */.CP)({
      [CSS.hasHeader]: !!heading,
      [CSS.headerContainer]: true
    })}>${this.renderHeader()}<div class=${(0,dist/* safeClassMap */.CP)(CSS.content)}><slot></slot></div>${!heading ? this.renderCloseButton() : null}</div></div></div>`;
  }
}
(0,runtime.c)("calcite-popover", Popover);


;// ../node_modules/@esri/calcite-components/dist/components/calcite-popover/index.js




/***/ }),

/***/ 24293:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Scrim: () => (/* reexport */ Scrim)
});

// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/components/calcite-loader/index.js + 1 modules
var calcite_loader = __webpack_require__(32524);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/runtime.js
var runtime = __webpack_require__(14558);
// EXTERNAL MODULE: ../node_modules/lit-html/node/directives/ref.js + 1 modules
var ref = __webpack_require__(59276);
// EXTERNAL MODULE: ../node_modules/lit-html/node/lit-html.js
var lit_html = __webpack_require__(31263);
// EXTERNAL MODULE: ../node_modules/@arcgis/lumina/dist/index.js + 15 modules
var dist = __webpack_require__(48747);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/observers.js
var observers = __webpack_require__(13061);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/dom.js
var dom = __webpack_require__(25450);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/useT9n.js
var useT9n = __webpack_require__(13478);
// EXTERNAL MODULE: ../node_modules/@lit/reactive-element/node/css-tag.js
var css_tag = __webpack_require__(56385);
;// ../node_modules/@esri/calcite-components/dist/components/calcite-scrim/customElement.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */








const CSS = {
  scrim: "scrim",
  content: "content"
};
const BREAKPOINTS = {
  s: 72,
  // Less than 72px.
  // medium is assumed default.
  l: 480
  // Greater than or equal to 480px.
};
const styles = (0,css_tag/* css */.AH)`:host{position:absolute;inset:0;z-index:var(--calcite-z-index-overlay);display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity: 0 }to{--tw-text-opacity: 1 }}.scrim{position:absolute;inset:0;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-color-transparent-scrim))}.content{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}`;
class Scrim extends dist/* LitElement */.WF {
  constructor() {
    super(...arguments);
    this.resizeObserver = (0,observers.c)("resize", () => this.handleResize());
    this.messages = (0,useT9n.u)();
    this.hasContent = false;
    this.loading = false;
  }
  static {
    this.properties = { hasContent: [16, {}, { state: true }], loaderScale: [16, {}, { state: true }], loading: [7, {}, { reflect: true, type: Boolean }], messageOverrides: [0, {}, { attribute: false }] };
  }
  static {
    this.styles = styles;
  }
  connectedCallback() {
    super.connectedCallback();
    this.resizeObserver?.observe(this.el);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.resizeObserver?.disconnect();
  }
  handleDefaultSlotChange(event) {
    this.hasContent = (0,dom.r)(event);
  }
  storeLoaderEl(el) {
    this.loaderEl = el;
    this.handleResize();
  }
  getScale(size) {
    if (size < BREAKPOINTS.s) {
      return "s";
    } else if (size >= BREAKPOINTS.l) {
      return "l";
    } else {
      return "m";
    }
  }
  handleResize() {
    const { loaderEl, el } = this;
    if (!loaderEl) {
      return;
    }
    this.loaderScale = this.getScale(Math.min(el.clientHeight, el.clientWidth) ?? 0);
  }
  render() {
    const { hasContent, loading, messages } = this;
    return (0,lit_html/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(CSS.scrim)}>${loading ? (0,lit_html/* html */.qy)`<calcite-loader .label=${messages.loading} .scale=${this.loaderScale} ${(0,ref/* ref */.K)(this.storeLoaderEl)}></calcite-loader>` : null}<div class=${(0,dist/* safeClassMap */.CP)(CSS.content)} .hidden=${!hasContent}><slot @slotchange=${this.handleDefaultSlotChange}></slot></div></div>`;
  }
}
(0,runtime.c)("calcite-scrim", Scrim);


;// ../node_modules/@esri/calcite-components/dist/components/calcite-scrim/index.js



/***/ }),

/***/ 51425:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31263);
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12897);
/* harmony import */ var _directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89985);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i=(0,_directive_js__WEBPACK_IMPORTED_MODULE_1__/* .directive */ .u$)(class extends _directive_js__WEBPACK_IMPORTED_MODULE_1__/* .Directive */ .WL{constructor(){super(...arguments),this.key=_lit_html_js__WEBPACK_IMPORTED_MODULE_0__/* .nothing */ .s6}render(r,t){return this.key=r,t}update(r,[t,e]){return t!==this.key&&((0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__/* .setCommittedValue */ .mY)(r),this.key=t),e}});
//# sourceMappingURL=keyed.js.map


/***/ }),

/***/ 59276:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _: () => (/* binding */ e),
  K: () => (/* binding */ ref_n)
});

// EXTERNAL MODULE: ../node_modules/lit-html/node/lit-html.js
var lit_html = __webpack_require__(31263);
// EXTERNAL MODULE: ../node_modules/lit-html/node/directive-helpers.js
var directive_helpers = __webpack_require__(89985);
// EXTERNAL MODULE: ../node_modules/lit-html/node/directive.js
var directive = __webpack_require__(12897);
;// ../node_modules/lit-html/node/async-directive.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=(i,t)=>{const e=i._$AN;if(void 0===e)return!1;for(const i of e)i._$AO?.(t,!1),s(i,t);return!0},o=i=>{let t,e;do{if(void 0===(t=i._$AM))break;e=t._$AN,e.delete(i),i=t}while(0===e?.size)},r=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(void 0===e)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),c(t)}};function h(i){void 0!==this._$AN?(o(this),this._$AM=i,r(this)):this._$AM=i}function n(i,t=!1,e=0){const r=this._$AH,h=this._$AN;if(void 0!==h&&0!==h.size)if(t)if(Array.isArray(r))for(let i=e;i<r.length;i++)s(r[i],!1),o(r[i]);else null!=r&&(s(r,!1),o(r));else s(this,i)}const c=i=>{i.type==directive/* PartType */.OA.CHILD&&(i._$AP??=n,i._$AQ??=h)};class f extends directive/* Directive */.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(i,t,e){super._$AT(i,t,e),r(this),this.isConnected=i._$AU}_$AO(i,t=!0){i!==this.isConnected&&(this.isConnected=i,i?this.reconnected?.():this.disconnected?.()),t&&(s(this,i),o(this))}setValue(t){if((0,directive_helpers/* isSingleExpression */.Rt)(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}
//# sourceMappingURL=async-directive.js.map

;// ../node_modules/lit-html/node/directives/ref.js

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=()=>new ref_h;class ref_h{}const ref_o=new WeakMap,ref_n=(0,directive/* directive */.u$)(class extends f{render(i){return lit_html/* nothing */.s6}update(i,[s]){const e=s!==this.G;return e&&void 0!==this.G&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.G=s,this.ht=i.options?.host,this.rt(this.ct=i.element)),lit_html/* nothing */.s6}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.G){const i=this.ht??globalThis;let s=ref_o.get(i);void 0===s&&(s=new WeakMap,ref_o.set(i,s)),void 0!==s.get(this.G)&&this.G.call(this.ht,void 0),s.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return"function"==typeof this.G?ref_o.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});
//# sourceMappingURL=ref.js.map


/***/ }),

/***/ 27092:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bk: () => (/* binding */ s),
/* harmony export */   eu: () => (/* binding */ i),
/* harmony export */   qy: () => (/* binding */ u)
/* harmony export */ });
/* unused harmony exports mathml, svg, withStatic */
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31263);

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const a=Symbol.for(""),o=t=>{if(t?.r===a)return t?._$litStatic$},s=t=>({_$litStatic$:t,r:a}),i=(t,...r)=>({_$litStatic$:r.reduce(((r,e,a)=>r+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(e)+t[a+1]),t[0]),r:a}),l=new Map,n=t=>(r,...e)=>{const a=e.length;let s,i;const n=[],u=[];let c,$=0,f=!1;for(;$<a;){for(c=r[$];$<a&&void 0!==(i=e[$],s=o(i));)c+=s+r[++$],f=!0;$!==a&&u.push(i),n.push(c),$++}if($===a&&n.push(r[a]),f){const t=n.join("$$lit$$");void 0===(r=l.get(t))&&(n.raw=n,l.set(t,r=n)),e=u}return t(r,...e)},u=n(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__/* .html */ .qy),c=n(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__/* .svg */ .JW),$=n(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__/* .mathml */ .ej);
//# sourceMappingURL=static.js.map


/***/ }),

/***/ 93188:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29283);


/** Built-in value references. */
var Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Symbol;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Symbol);


/***/ }),

/***/ 36798:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ _baseGetTag)
});

// EXTERNAL MODULE: ../node_modules/lodash-es/_Symbol.js
var _Symbol = __webpack_require__(93188);
;// ../node_modules/lodash-es/_getRawTag.js


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _getRawTag_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol/* default */.A ? _Symbol/* default */.A.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = _getRawTag_hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ const _getRawTag = (getRawTag);

;// ../node_modules/lodash-es/_objectToString.js
/** Used for built-in method references. */
var _objectToString_objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var _objectToString_nativeObjectToString = _objectToString_objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return _objectToString_nativeObjectToString.call(value);
}

/* harmony default export */ const _objectToString = (objectToString);

;// ../node_modules/lodash-es/_baseGetTag.js




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var _baseGetTag_symToStringTag = _Symbol/* default */.A ? _Symbol/* default */.A.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (_baseGetTag_symToStringTag && _baseGetTag_symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

/* harmony default export */ const _baseGetTag = (baseGetTag);


/***/ }),

/***/ 67054:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (freeGlobal);


/***/ }),

/***/ 29283:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67054);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A || freeSelf || Function('return this')();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (root);


/***/ }),

/***/ 54559:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ lodash_es_debounce)
});

// EXTERNAL MODULE: ../node_modules/lodash-es/isObject.js
var isObject = __webpack_require__(17731);
// EXTERNAL MODULE: ../node_modules/lodash-es/_root.js
var _root = __webpack_require__(29283);
;// ../node_modules/lodash-es/now.js


/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _root/* default */.A.Date.now();
};

/* harmony default export */ const lodash_es_now = (now);

;// ../node_modules/lodash-es/_trimmedEndIndex.js
/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

/* harmony default export */ const _trimmedEndIndex = (trimmedEndIndex);

;// ../node_modules/lodash-es/_baseTrim.js


/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, _trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

/* harmony default export */ const _baseTrim = (baseTrim);

// EXTERNAL MODULE: ../node_modules/lodash-es/isSymbol.js
var isSymbol = __webpack_require__(40932);
;// ../node_modules/lodash-es/toNumber.js




/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if ((0,isSymbol/* default */.A)(value)) {
    return NAN;
  }
  if ((0,isObject/* default */.A)(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = (0,isObject/* default */.A)(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = _baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/* harmony default export */ const lodash_es_toNumber = (toNumber);

;// ../node_modules/lodash-es/debounce.js




/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = lodash_es_toNumber(wait) || 0;
  if ((0,isObject/* default */.A)(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(lodash_es_toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = lodash_es_now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(lodash_es_now());
  }

  function debounced() {
    var time = lodash_es_now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/* harmony default export */ const lodash_es_debounce = (debounce);


/***/ }),

/***/ 17731:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObject);


/***/ }),

/***/ 19196:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObjectLike);


/***/ }),

/***/ 40932:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36798);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19196);



/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    ((0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(value) == symbolTag);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSymbol);


/***/ })

};
;