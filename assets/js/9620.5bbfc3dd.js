"use strict";
exports.id = 9620;
exports.ids = [9620,2817,6446,2524,5177,1787];
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

/***/ 53939:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ Validation)
/* harmony export */ });
/* harmony import */ var lit_html_directives_ref_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59276);
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31263);
/* harmony import */ var _arcgis_lumina__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48747);
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */



const CSS = {
  validationContainer: "validation-container"
};
const validationReference = () => {
  return;
};
const Validation = ({ scale, status, id, icon, message, ref: ref$1 }) => (0,lit_html__WEBPACK_IMPORTED_MODULE_1__/* .html */ .qy)`<div class=${(0,_arcgis_lumina__WEBPACK_IMPORTED_MODULE_2__/* .safeClassMap */ .CP)(CSS.validationContainer)} ${(0,lit_html_directives_ref_js__WEBPACK_IMPORTED_MODULE_0__/* .ref */ .K)(ref$1 ? ref$1 : validationReference)}><calcite-input-message aria-live=polite .icon=${icon} id=${id ?? lit_html__WEBPACK_IMPORTED_MODULE_1__/* .nothing */ .s6} .scale=${scale} .status=${status}>${message}</calcite-input-message></div>`;



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

/***/ 67226:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ HiddenFormInputSlot),
/* harmony export */   a: () => (/* binding */ afterConnectDefaultValueSet),
/* harmony export */   c: () => (/* binding */ connectForm),
/* harmony export */   d: () => (/* binding */ disconnectForm),
/* harmony export */   f: () => (/* binding */ findAssociatedForm),
/* harmony export */   i: () => (/* binding */ internalHiddenInputInputEvent),
/* harmony export */   r: () => (/* binding */ resetForm),
/* harmony export */   s: () => (/* binding */ submitForm)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52689);
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25450);
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */


const componentsWithInputEvent = [
  "calcite-input",
  "calcite-input-number",
  "calcite-input-text",
  "calcite-text-area"
];
function getClearValidationEventName(componentTag) {
  const componentTagCamelCase = componentTag.split("-").map((part, index) => index === 0 ? part : `${part[0].toUpperCase()}${part.slice(1)}`).join("");
  const clearValidationEvent = `${componentTagCamelCase}${componentsWithInputEvent.includes(componentTag) ? "Input" : "Change"}`;
  return clearValidationEvent;
}
const hiddenFormInputSlotName = "hidden-form-input";
function isCheckable(component) {
  return "checked" in component;
}
const onFormResetMap = /* @__PURE__ */ new WeakMap();
const formComponentSet = /* @__PURE__ */ new WeakSet();
function hasRegisteredFormComponentParent(form, formComponentEl) {
  const hasParentComponentWithFormIdSet = (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.l)(formComponentEl.parentElement, "[form]");
  if (hasParentComponentWithFormIdSet) {
    return true;
  }
  const formComponentRegisterEventName = "calciteInternalFormComponentRegister";
  let hasRegisteredFormComponentParent2 = false;
  form.addEventListener(formComponentRegisterEventName, (event) => {
    hasRegisteredFormComponentParent2 = event.composedPath().some((element) => formComponentSet.has(element));
    event.stopPropagation();
  }, { once: true });
  formComponentEl.dispatchEvent(new CustomEvent(formComponentRegisterEventName, {
    bubbles: true,
    composed: true
  }));
  return hasRegisteredFormComponentParent2;
}
function displayValidationMessage(component, { status, message, icon }) {
  if ("status" in component) {
    component.status = status;
  }
  if ("validationIcon" in component && typeof component.validationIcon !== "string") {
    component.validationIcon = icon;
  }
  if ("validationMessage" in component && !component.validationMessage) {
    component.validationMessage = message;
  }
}
function getValidationComponent(el) {
  if (el.nodeName === "CALCITE-RADIO-BUTTON") {
    return (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.l)(el, "calcite-radio-button-group");
  }
  return el;
}
const invalidEvent = new CustomEvent("calciteInvalid", { bubbles: true, composed: true });
function invalidHandler(event) {
  const hiddenInput = event?.target;
  const hiddenInputMessage = hiddenInput?.validationMessage;
  const formComponent = getValidationComponent(hiddenInput?.parentElement);
  if (!formComponent) {
    return;
  }
  const componentTag = formComponent?.nodeName?.toLowerCase();
  const componentTagParts = componentTag?.split("-");
  if (componentTagParts.length < 2 || componentTagParts[0] !== "calcite") {
    return;
  }
  event?.preventDefault();
  if ("validity" in formComponent) {
    formComponent.validity = hiddenInput?.validity;
  }
  formComponent.dispatchEvent(invalidEvent);
  displayValidationMessage(formComponent, {
    message: hiddenInputMessage,
    icon: true,
    status: "invalid"
  });
  const clearValidationEvent = getClearValidationEventName(componentTag);
  formComponent.addEventListener(clearValidationEvent, () => {
    if ("status" in formComponent) {
      formComponent.status = "idle";
    }
    if ("validationIcon" in formComponent && (formComponent.validationIcon === "" || formComponent.validationIcon === true)) {
      formComponent.validationIcon = false;
    }
    if ("validationMessage" in formComponent && formComponent.validationMessage === hiddenInputMessage) {
      formComponent.validationMessage = "";
    }
    if ("validity" in formComponent) {
      formComponent.validity = hiddenInput?.validity;
    }
  }, { once: true });
}
function submitForm(component) {
  const { formEl } = component;
  if (!formEl) {
    return false;
  }
  formEl.addEventListener("invalid", invalidHandler, true);
  formEl.requestSubmit();
  formEl.removeEventListener("invalid", invalidHandler, true);
  requestAnimationFrame(() => {
    const invalidEls = formEl.querySelectorAll("[status=invalid]");
    for (const el of invalidEls) {
      if (el?.validationMessage) {
        el?.setFocus();
        break;
      }
    }
  });
  return true;
}
function resetForm(component) {
  component.formEl?.reset();
}
function connectForm(component) {
  const { el, value } = component;
  const associatedForm = findAssociatedForm(component);
  if (!associatedForm || hasRegisteredFormComponentParent(associatedForm, el)) {
    return;
  }
  component.formEl = associatedForm;
  component.defaultValue = value;
  if (isCheckable(component)) {
    component.defaultChecked = component.checked;
  }
  const boundOnFormReset = onFormReset.bind(component);
  associatedForm.addEventListener("reset", boundOnFormReset);
  onFormResetMap.set(component.el, boundOnFormReset);
  formComponentSet.add(el);
}
function findAssociatedForm(component) {
  const { el, form } = component;
  return form ? (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.q)(el, { id: form }) : (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.l)(el, "form");
}
function onFormReset() {
  if ("status" in this) {
    this.status = "idle";
  }
  if ("validationIcon" in this) {
    this.validationIcon = false;
  }
  if ("validationMessage" in this) {
    this.validationMessage = "";
  }
  if (isCheckable(this)) {
    this.checked = this.defaultChecked;
    return;
  }
  this.value = this.defaultValue;
  this.onFormReset?.();
}
function disconnectForm(component) {
  const { el, formEl } = component;
  if (!formEl) {
    return;
  }
  const boundOnFormReset = onFormResetMap.get(el);
  formEl.removeEventListener("reset", boundOnFormReset);
  onFormResetMap.delete(el);
  component.formEl = null;
  formComponentSet.delete(el);
}
function afterConnectDefaultValueSet(component, value) {
  component.defaultValue = value;
}
const internalHiddenInputInputEvent = "calciteInternalHiddenInputInput";
const hiddenInputInputHandler = (event) => {
  event.target.dispatchEvent(new CustomEvent(internalHiddenInputInputEvent, { bubbles: true }));
};
const removeHiddenInputChangeEventListener = (input) => input.removeEventListener("input", hiddenInputInputHandler);
function syncHiddenFormInput(component) {
  const { el, formEl, name, value } = component;
  const { ownerDocument } = el;
  if (lit__WEBPACK_IMPORTED_MODULE_0__/* .isServer */ .S$) {
    return;
  }
  const inputs = el.querySelectorAll(`input[slot="${hiddenFormInputSlotName}"]`);
  if (!formEl || !name) {
    inputs.forEach((input) => {
      removeHiddenInputChangeEventListener(input);
      input.remove();
    });
    return;
  }
  const values = Array.isArray(value) ? value : [value];
  const extra = [];
  const seen = /* @__PURE__ */ new Set();
  inputs.forEach((input) => {
    const valueMatch = values.find((val) => (
      /* intentional non-strict equality check */
      val == input.value
    ));
    if (valueMatch != null) {
      seen.add(valueMatch);
      defaultSyncHiddenFormInput(component, input, valueMatch);
    } else {
      extra.push(input);
    }
  });
  let docFrag;
  values.forEach((value2) => {
    if (seen.has(value2)) {
      return;
    }
    let input = extra.pop();
    if (!input) {
      input = ownerDocument.createElement("input");
      input.ariaHidden = "true";
      input.slot = hiddenFormInputSlotName;
    }
    if (!docFrag) {
      docFrag = ownerDocument.createDocumentFragment();
    }
    docFrag.append(input);
    input.addEventListener("input", hiddenInputInputHandler);
    defaultSyncHiddenFormInput(component, input, value2);
  });
  if (docFrag) {
    el.append(docFrag);
  }
  extra.forEach((input) => {
    removeHiddenInputChangeEventListener(input);
    input.remove();
  });
}
function defaultSyncHiddenFormInput(component, input, value) {
  const { defaultValue, disabled, form, name, required } = component;
  input.defaultValue = defaultValue;
  input.disabled = disabled;
  input.name = name;
  input.required = required;
  input.tabIndex = -1;
  if (form) {
    input.setAttribute("form", form);
  } else {
    input.removeAttribute("form");
  }
  if (isCheckable(component)) {
    input.checked = component.checked;
    input.defaultChecked = component.defaultChecked;
    input.value = component.checked ? value || "on" : "";
  } else {
    input.value = value || "";
  }
  component.syncHiddenFormInput?.(input);
  const validationComponent = getValidationComponent(component.el);
  if (validationComponent && "validity" in validationComponent) {
    for (const key in { ...input?.validity }) {
      validationComponent.validity[key] = input.validity[key];
    }
  }
}
const HiddenFormInputSlot = ({ component }) => {
  syncHiddenFormInput(component);
  return (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .html */ .qy)`<slot name=${hiddenFormInputSlotName}></slot>`;
};



/***/ }),

/***/ 32399:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ calciteContainerSizeWidthXs),
/* harmony export */   b: () => (/* binding */ calciteContainerSizeWidthSm),
/* harmony export */   c: () => (/* binding */ calciteContainerSizeWidthXxs),
/* harmony export */   d: () => (/* binding */ calciteContainerSizeWidthMd),
/* harmony export */   h: () => (/* binding */ calciteSpacingFixedXl),
/* harmony export */   i: () => (/* binding */ calciteSpacingFixedMd),
/* harmony export */   j: () => (/* binding */ calciteSpacingFixedSm)
/* harmony export */ });
/* unused harmony exports e, f, g */
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */
const calciteContainerSizeWidthXxs = { max: "320px" };
const calciteContainerSizeWidthXs = { max: "476px" };
const calciteContainerSizeWidthSm = { max: "768px" };
const calciteContainerSizeWidthMd = { max: "1152px" };
const calciteSpacingFixedSm = "8px";
const calciteSpacingFixedMd = "12px";
const calciteSpacingFixedXl = "16px";
const calciteSpacingBase = "2px";
const calciteSpacingXxs = "0.25rem";
const calciteSpacingSm = "0.5rem";



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

/***/ 16690:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ syncHiddenFormInput)
/* harmony export */ });
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */
const minMaxStepTypes = ["date", "datetime-local", "month", "number", "range", "time", "week"];
const patternTypes = ["email", "password", "search", "tel", "text", "url"];
const minMaxLengthTypes = ["email", "password", "search", "tel", "text", "textarea", "url"];
function updateConstraintValidation(inputComponent, input, propName, matchesType) {
  const attributeName = propName.toLowerCase();
  const value = inputComponent[propName];
  if (matchesType && value != null) {
    input.setAttribute(attributeName, `${value}`);
  } else {
    input.removeAttribute(attributeName);
  }
}
function syncHiddenFormInput(type, inputComponent, hiddenFormInput) {
  hiddenFormInput.type = type === "textarea" ? "text" : type;
  const isMinMaxStepType = minMaxStepTypes.includes(type);
  const numericInputComponent = inputComponent;
  updateConstraintValidation(numericInputComponent, hiddenFormInput, "min", isMinMaxStepType);
  updateConstraintValidation(numericInputComponent, hiddenFormInput, "max", isMinMaxStepType);
  updateConstraintValidation(numericInputComponent, hiddenFormInput, "step", isMinMaxStepType);
  const isMinMaxLengthType = minMaxLengthTypes.includes(type);
  const textualInputComponent = inputComponent;
  updateConstraintValidation(textualInputComponent, hiddenFormInput, "minLength", isMinMaxLengthType);
  updateConstraintValidation(textualInputComponent, hiddenFormInput, "maxLength", isMinMaxLengthType);
  const isPatternType = patternTypes.includes(type);
  updateConstraintValidation(textualInputComponent, hiddenFormInput, "pattern", isPatternType);
}



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

/***/ 85352:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ associateExplicitLabelToUnlabeledComponent),
/* harmony export */   b: () => (/* binding */ labelDisconnectedEvent),
/* harmony export */   c: () => (/* binding */ connectLabel),
/* harmony export */   d: () => (/* binding */ disconnectLabel),
/* harmony export */   g: () => (/* binding */ getLabelText),
/* harmony export */   l: () => (/* binding */ labelConnectedEvent)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25450);
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */

const labelClickEvent = "calciteInternalLabelClick";
const labelConnectedEvent = "calciteInternalLabelConnected";
const labelDisconnectedEvent = "calciteInternalLabelDisconnected";
const labelTagName = "calcite-label";
const labelToLabelables = /* @__PURE__ */ new WeakMap();
const onLabelClickMap = /* @__PURE__ */ new WeakMap();
const onLabelConnectedMap = /* @__PURE__ */ new WeakMap();
const onLabelDisconnectedMap = /* @__PURE__ */ new WeakMap();
const unlabeledComponents = /* @__PURE__ */ new Set();
const findLabelForComponent = (componentEl) => {
  const { id } = componentEl;
  const forLabel = id && (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.q)(componentEl, { selector: `${labelTagName}[for="${id}"]` });
  if (forLabel) {
    return forLabel;
  }
  const parentLabel = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.l)(componentEl, labelTagName);
  if (!parentLabel || // labelable components within other custom elements are not considered labelable
  hasAncestorCustomElements(parentLabel, componentEl)) {
    return null;
  }
  return parentLabel;
};
function hasAncestorCustomElements(label, componentEl) {
  let traversedElements;
  const customElementAncestorCheckEventType = "custom-element-ancestor-check";
  const listener = (event) => {
    event.stopImmediatePropagation();
    const composedPath = event.composedPath();
    traversedElements = composedPath.slice(composedPath.indexOf(componentEl), composedPath.indexOf(label));
  };
  label.addEventListener(customElementAncestorCheckEventType, listener, { once: true });
  componentEl.dispatchEvent(new CustomEvent(customElementAncestorCheckEventType, { composed: true, bubbles: true }));
  label.removeEventListener(customElementAncestorCheckEventType, listener);
  const ancestorCustomElements = traversedElements.filter((el) => el !== componentEl && el !== label).filter((el) => el.tagName?.includes("-"));
  return ancestorCustomElements.length > 0;
}
function connectLabel(component) {
  if (!component) {
    return;
  }
  const labelEl = findLabelForComponent(component.el);
  if (onLabelClickMap.has(labelEl) && labelEl === component.labelEl || !labelEl && unlabeledComponents.has(component)) {
    return;
  }
  const boundOnLabelDisconnected = onLabelDisconnected.bind(component);
  if (labelEl) {
    component.labelEl = labelEl;
    const labelables = labelToLabelables.get(labelEl) || [];
    labelables.push(component);
    labelToLabelables.set(labelEl, labelables.sort(sortByDOMOrder));
    if (!onLabelClickMap.has(component.labelEl)) {
      onLabelClickMap.set(component.labelEl, onLabelClick);
      component.labelEl.addEventListener(labelClickEvent, onLabelClick);
    }
    unlabeledComponents.delete(component);
    document.removeEventListener(labelConnectedEvent, onLabelConnectedMap.get(component));
    onLabelDisconnectedMap.set(component, boundOnLabelDisconnected);
    document.addEventListener(labelDisconnectedEvent, boundOnLabelDisconnected);
  } else if (!unlabeledComponents.has(component)) {
    boundOnLabelDisconnected();
    document.removeEventListener(labelDisconnectedEvent, onLabelDisconnectedMap.get(component));
  }
}
function disconnectLabel(component) {
  if (!component) {
    return;
  }
  unlabeledComponents.delete(component);
  document.removeEventListener(labelConnectedEvent, onLabelConnectedMap.get(component));
  document.removeEventListener(labelDisconnectedEvent, onLabelDisconnectedMap.get(component));
  onLabelConnectedMap.delete(component);
  onLabelDisconnectedMap.delete(component);
  if (!component.labelEl) {
    return;
  }
  const labelables = labelToLabelables.get(component.labelEl);
  if (labelables.length === 1) {
    component.labelEl.removeEventListener(labelClickEvent, onLabelClickMap.get(component.labelEl));
    onLabelClickMap.delete(component.labelEl);
  }
  labelToLabelables.set(
    component.labelEl,
    labelables.filter((labelable) => labelable !== component).sort(sortByDOMOrder)
  );
  component.labelEl = null;
}
function sortByDOMOrder(a, b) {
  return (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.m)(a.el, b.el) ? -1 : 1;
}
function getLabelText(component) {
  return component.label || component.labelEl?.textContent?.trim() || "";
}
function onLabelClick(event) {
  const labelClickTarget = event.detail.sourceEvent.target;
  const labelables = labelToLabelables.get(this);
  const clickedLabelable = labelables.find((labelable) => labelable.el === labelClickTarget);
  const labelableChildClicked = labelables.includes(clickedLabelable);
  if (labelableChildClicked) {
    return;
  }
  const firstLabelable = labelables[0];
  if (firstLabelable.disabled) {
    return;
  }
  firstLabelable.onLabelClick(event);
}
function onLabelConnected() {
  if (unlabeledComponents.has(this)) {
    connectLabel(this);
  }
}
function onLabelDisconnected() {
  unlabeledComponents.add(this);
  const boundOnLabelConnected = onLabelConnectedMap.get(this) || onLabelConnected.bind(this);
  onLabelConnectedMap.set(this, boundOnLabelConnected);
  document.addEventListener(labelConnectedEvent, boundOnLabelConnected);
}
async function associateExplicitLabelToUnlabeledComponent(label) {
  await label.componentOnReady();
  const alreadyLabeled = labelToLabelables.has(label);
  if (alreadyLabeled) {
    return;
  }
  const forComponentEl = label.ownerDocument?.getElementById(label.for);
  if (!forComponentEl) {
    return;
  }
  requestAnimationFrame(() => {
    for (const labelable of unlabeledComponents) {
      if (labelable.el === forComponentEl) {
        connectLabel(labelable);
        break;
      }
    }
  });
}



/***/ }),

/***/ 99358:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ BigDecimal),
/* harmony export */   c: () => (/* binding */ addLocalizedTrailingDecimalZeros),
/* harmony export */   i: () => (/* binding */ isValidNumber),
/* harmony export */   n: () => (/* binding */ numberStringFormatter),
/* harmony export */   p: () => (/* binding */ parseNumberString),
/* harmony export */   s: () => (/* binding */ sanitizeNumberString)
/* harmony export */ });
/* unused harmony exports N, a, b, d, g, l */
/* harmony import */ var _key_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14357);
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */

const unnecessaryDecimal = new RegExp(`\\${"."}(0+)?$`);
const trailingZeros = new RegExp("0+$");
class BigDecimal {
  static {
    this.DECIMALS = 100;
  }
  static {
    this.ROUNDED = true;
  }
  static {
    this.SHIFT = BigInt("1" + "0".repeat(this.DECIMALS));
  }
  // derived constant
  constructor(input) {
    if (input instanceof BigDecimal) {
      return input;
    }
    const [integers, decimals] = expandExponentialNumberString(input).split(".").concat("");
    this.value = BigInt(integers + decimals.padEnd(BigDecimal.DECIMALS, "0").slice(0, BigDecimal.DECIMALS)) + BigInt(BigDecimal.ROUNDED && decimals[BigDecimal.DECIMALS] >= "5");
    this.isNegative = input.charAt(0) === "-";
  }
  static {
    this._divRound = (dividend, divisor) => BigDecimal.fromBigInt(
      dividend / divisor + (BigDecimal.ROUNDED ? dividend * BigInt(2) / divisor % BigInt(2) : BigInt(0))
    );
  }
  static {
    this.fromBigInt = (bigint) => Object.assign(Object.create(BigDecimal.prototype), { value: bigint, isNegative: bigint < BigInt(0) });
  }
  getIntegersAndDecimals() {
    const s = this.value.toString().replace("-", "").padStart(BigDecimal.DECIMALS + 1, "0");
    const integers = s.slice(0, -BigDecimal.DECIMALS);
    const decimals = s.slice(-BigDecimal.DECIMALS).replace(trailingZeros, "");
    return { integers, decimals };
  }
  toString() {
    const { integers, decimals } = this.getIntegersAndDecimals();
    return `${this.isNegative ? "-" : ""}${integers}${decimals.length ? "." + decimals : ""}`;
  }
  formatToParts(formatter) {
    const { integers, decimals } = this.getIntegersAndDecimals();
    const parts = formatter.numberFormatter.formatToParts(BigInt(integers));
    if (this.isNegative) {
      parts.unshift({ type: "minusSign", value: formatter.minusSign });
    }
    if (decimals.length) {
      parts.push({ type: "decimal", value: formatter.decimal });
      decimals.split("").forEach((char) => parts.push({ type: "fraction", value: char }));
    }
    return parts;
  }
  format(formatter) {
    const { integers, decimals } = this.getIntegersAndDecimals();
    const integersFormatted = `${this.isNegative ? formatter.minusSign : ""}${formatter.numberFormatter.format(
      BigInt(integers)
    )}`;
    const decimalsFormatted = decimals.length ? `${formatter.decimal}${decimals.split("").map((char) => formatter.numberFormatter.format(Number(char))).join("")}` : "";
    return `${integersFormatted}${decimalsFormatted}`;
  }
  add(n) {
    return BigDecimal.fromBigInt(this.value + new BigDecimal(n).value);
  }
  subtract(n) {
    return BigDecimal.fromBigInt(this.value - new BigDecimal(n).value);
  }
  multiply(n) {
    return BigDecimal._divRound(this.value * new BigDecimal(n).value, BigDecimal.SHIFT);
  }
  divide(n) {
    return BigDecimal._divRound(this.value * BigDecimal.SHIFT, new BigDecimal(n).value);
  }
}
function isValidNumber(numberString) {
  return !(!numberString || isNaN(Number(numberString)));
}
function parseNumberString(numberString) {
  if (!numberString || !stringContainsNumbers(numberString)) {
    return "";
  }
  return sanitizeExponentialNumberString(numberString, (nonExpoNumString) => {
    let containsDecimal = false;
    const result = nonExpoNumString.split("").filter((value, i) => {
      if (value.match(/\./g) && !containsDecimal) {
        containsDecimal = true;
        return true;
      }
      if (value.match(/-/g) && i === 0) {
        return true;
      }
      return _key_js__WEBPACK_IMPORTED_MODULE_0__.n.includes(value);
    }).join("");
    return isValidNumber(result) ? new BigDecimal(result).toString() : "";
  });
}
const allLeadingZerosOptionallyNegative = /^([-0])0+(?=\d)/;
const decimalOnlyAtEndOfString = /(?!^\.)\.$/;
const allHyphensExceptTheStart = /(?!^-)-/g;
const isNegativeDecimalOnlyZeros = /^-\b0\b\.?0*$/;
const hasTrailingDecimalZeros = /0*$/;
const charAllowlist = /* @__PURE__ */ new Set(["e", "E", "-", ",", ".", ..._key_js__WEBPACK_IMPORTED_MODULE_0__.n]);
const sanitizeNumberString = (numberString) => {
  const strippedInvalidCharsValue = Array.from(numberString).filter((char) => charAllowlist.has(char)).join("");
  return sanitizeExponentialNumberString(strippedInvalidCharsValue, (nonExpoNumString) => {
    const sanitizedValue = nonExpoNumString.replace(allHyphensExceptTheStart, "").replace(decimalOnlyAtEndOfString, "").replace(allLeadingZerosOptionallyNegative, "$1");
    return isValidNumber(sanitizedValue) ? isNegativeDecimalOnlyZeros.test(sanitizedValue) ? sanitizedValue : getBigDecimalAsString(sanitizedValue) : nonExpoNumString;
  });
};
function getBigDecimalAsString(sanitizedValue) {
  const sanitizedValueDecimals = sanitizedValue.split(".")[1];
  const value = new BigDecimal(sanitizedValue).toString();
  const [bigDecimalValueInteger, bigDecimalValueDecimals] = value.split(".");
  return sanitizedValueDecimals && bigDecimalValueDecimals !== sanitizedValueDecimals ? `${bigDecimalValueInteger}.${sanitizedValueDecimals}` : value;
}
function sanitizeExponentialNumberString(numberString, func) {
  if (!numberString) {
    return numberString;
  }
  const firstE = numberString.toLowerCase().indexOf("e") + 1;
  if (!firstE) {
    return func(numberString);
  }
  return numberString.replace(/[eE]*$/g, "").substring(0, firstE).concat(numberString.slice(firstE).replace(/[eE]/g, "")).split(/[eE]/).map((section, i) => i === 1 ? func(section.replace(/\./g, "")) : func(section)).join("e").replace(/^e/, "1e");
}
function expandExponentialNumberString(numberString) {
  const exponentialParts = numberString.split(/[eE]/);
  if (exponentialParts.length === 1) {
    return numberString;
  }
  const number = +numberString;
  if (Number.isSafeInteger(number)) {
    return `${number}`;
  }
  const isNegative = numberString.charAt(0) === "-";
  const magnitude = +exponentialParts[1];
  const decimalParts = exponentialParts[0].split(".");
  const integers = (isNegative ? decimalParts[0].substring(1) : decimalParts[0]) || "";
  const decimals = decimalParts[1] || "";
  const shiftDecimalLeft = (integers2, magnitude2) => {
    const magnitudeDelta = Math.abs(magnitude2) - integers2.length;
    const leftPaddedZeros = magnitudeDelta > 0 ? `${"0".repeat(magnitudeDelta)}${integers2}` : integers2;
    const shiftedDecimal = `${leftPaddedZeros.slice(0, magnitude2)}${"."}${leftPaddedZeros.slice(magnitude2)}`;
    return shiftedDecimal;
  };
  const shiftDecimalRight = (decimals2, magnitude2) => {
    const rightPaddedZeros = magnitude2 > decimals2.length ? `${decimals2}${"0".repeat(magnitude2 - decimals2.length)}` : decimals2;
    const shiftedDecimal = `${rightPaddedZeros.slice(0, magnitude2)}${"."}${rightPaddedZeros.slice(magnitude2)}`;
    return shiftedDecimal;
  };
  const expandedNumberString = magnitude > 0 ? `${integers}${shiftDecimalRight(decimals, magnitude)}` : `${shiftDecimalLeft(integers, magnitude)}${decimals}`;
  return `${isNegative ? "-" : ""}${expandedNumberString.charAt(0) === "." ? "0" : ""}${expandedNumberString.replace(unnecessaryDecimal, "").replace(allLeadingZerosOptionallyNegative, "")}`;
}
function stringContainsNumbers(string) {
  return _key_js__WEBPACK_IMPORTED_MODULE_0__.n.some((number) => string.includes(number));
}
function addLocalizedTrailingDecimalZeros(localizedValue, value, formatter) {
  const decimals = value.split(".")[1];
  if (decimals) {
    const trailingDecimalZeros = decimals.match(hasTrailingDecimalZeros)[0];
    if (trailingDecimalZeros && formatter.delocalize(localizedValue).length !== value.length && decimals.indexOf("e") === -1) {
      const decimalSeparator = formatter.decimal;
      localizedValue = !localizedValue.includes(decimalSeparator) ? `${localizedValue}${decimalSeparator}` : localizedValue;
      return localizedValue.padEnd(localizedValue.length + trailingDecimalZeros.length, formatter.localize("0"));
    }
  }
  return localizedValue;
}
const defaultLocale = "en";
const locales = [
  "ar",
  "bg",
  "bs",
  "ca",
  "cs",
  "da",
  "de",
  "de-AT",
  "de-CH",
  "el",
  defaultLocale,
  "en-AU",
  "en-CA",
  "en-GB",
  "es",
  "es-MX",
  "et",
  "fi",
  "fr",
  "fr-CH",
  "he",
  "hi",
  "hr",
  "hu",
  "id",
  "it",
  "it-CH",
  "ja",
  "ko",
  "lt",
  "lv",
  "mk",
  "no",
  "nl",
  "pl",
  "pt",
  "pt-PT",
  "ro",
  "ru",
  "sk",
  "sl",
  "sr",
  "sv",
  "th",
  "tr",
  "uk",
  "vi",
  "zh-CN",
  "zh-HK",
  "zh-TW"
];
const localizedTwentyFourHourMeridiems = new Map(
  Object.entries({
    bg: { am: "пр.об.", pm: "сл.об." },
    bs: { am: "prijepodne", pm: "popodne" },
    ca: { am: "a. m.", pm: "p. m." },
    cs: { am: "dop.", pm: "odp." },
    es: { am: "a. m.", pm: "p. m." },
    "es-mx": { am: "a.m.", pm: "p.m." },
    "es-MX": { am: "a.m.", pm: "p.m." },
    fi: { am: "ap.", pm: "ip." },
    he: { am: "לפנה״צ", pm: "אחה״צ" },
    hu: { am: "de. ", pm: "du." },
    lt: { am: "priešpiet", pm: "popiet" },
    lv: { am: "priekšpusdienā", pm: "pēcpusdienā" },
    mk: { am: "претпл.", pm: "попл." },
    no: { am: "a.m.", pm: "p.m." },
    nl: { am: "a.m.", pm: "p.m." },
    "pt-pt": { am: "da manhã", pm: "da tarde" },
    "pt-PT": { am: "da manhã", pm: "da tarde" },
    ro: { am: "a.m.", pm: "p.m." },
    sl: { am: "dop.", pm: "pop." },
    sv: { am: "fm", pm: "em" },
    th: { am: "ก่อนเที่ยง", pm: "หลังเที่ยง" },
    tr: { am: "ÖÖ", pm: "ÖS" },
    uk: { am: "дп", pm: "пп" },
    vi: { am: "SA", pm: "CH" }
  })
);
const numberingSystems = ["arab", "arabext", "latn"];
const supportedLocales = [...locales];
const isNumberingSystemSupported = (numberingSystem) => numberingSystems.includes(numberingSystem);
const browserNumberingSystem = new Intl.NumberFormat().resolvedOptions().numberingSystem;
const defaultNumberingSystem = browserNumberingSystem === "arab" || !isNumberingSystemSupported(browserNumberingSystem) ? "latn" : browserNumberingSystem;
const getSupportedNumberingSystem = (numberingSystem) => isNumberingSystemSupported(numberingSystem) ? numberingSystem : defaultNumberingSystem;
function getSupportedLocale(locale) {
  if (!locale) {
    return defaultLocale;
  }
  if (supportedLocales.includes(locale)) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.includes("-")) {
    locale = locale.replace(/(\w+)-(\w+)/, (_match, language, region) => `${language}-${region.toUpperCase()}`);
    if (!supportedLocales.includes(locale)) {
      locale = locale.split("-")[0];
    }
  }
  if (locale === "nb" || locale === "nn") {
    return "no";
  }
  if (locale === "zh") {
    return "zh-CN";
  }
  if (!supportedLocales.includes(locale)) {
    console.warn(
      `Translations for the "${locale}" locale are not available and will fall back to the default, English (en).`
    );
    return defaultLocale;
  }
  return locale;
}
function getDateFormatSupportedLocale(locale) {
  switch (locale) {
    case "it-CH":
      return "de-CH";
    case "bs":
      return "bs-Cyrl";
    default:
      return locale;
  }
}
class NumberStringFormat {
  constructor() {
    this.delocalize = (numberString) => (
      // For performance, (de)localization is skipped if the formatter isn't initialized.
      // In order to localize/delocalize, e.g. when lang/numberingSystem props are not default values,
      // `numberFormatOptions` must be set in a component to create and cache the formatter.
      this._numberFormatOptions ? sanitizeExponentialNumberString(
        numberString,
        (nonExpoNumString) => nonExpoNumString.replace(new RegExp(`[${this._minusSign}]`, "g"), "-").replace(new RegExp(`[${this._group}]`, "g"), "").replace(new RegExp(`[${this._decimal}]`, "g"), ".").replace(new RegExp(`[${this._digits.join("")}]`, "g"), this._getDigitIndex)
      ) : numberString
    );
    this.localize = (numberString) => this._numberFormatOptions ? sanitizeExponentialNumberString(
      numberString,
      (nonExpoNumString) => isValidNumber(nonExpoNumString.trim()) ? new BigDecimal(nonExpoNumString.trim()).format(this).replace(new RegExp(`[${this._actualGroup}]`, "g"), this._group) : nonExpoNumString
    ) : numberString;
  }
  get group() {
    return this._group;
  }
  get decimal() {
    return this._decimal;
  }
  get minusSign() {
    return this._minusSign;
  }
  get digits() {
    return this._digits;
  }
  get numberFormatter() {
    return this._numberFormatter;
  }
  get numberFormatOptions() {
    return this._numberFormatOptions;
  }
  /** numberFormatOptions needs to be set before localize/delocalize is called to ensure the options are up to date */
  set numberFormatOptions(options) {
    options.locale = getSupportedLocale(options?.locale);
    options.numberingSystem = getSupportedNumberingSystem(options?.numberingSystem);
    if (
      // No need to create the formatter if `locale` and `numberingSystem`
      // are the default values and `numberFormatOptions` has not been set
      !this._numberFormatOptions && options.locale === defaultLocale && options.numberingSystem === defaultNumberingSystem && // don't skip initialization if any options besides locale/numberingSystem are set
      Object.keys(options).length === 2 || // cache formatter by only recreating when options change
      JSON.stringify(this._numberFormatOptions) === JSON.stringify(options)
    ) {
      return;
    }
    this._numberFormatOptions = options;
    this._numberFormatter = new Intl.NumberFormat(
      this._numberFormatOptions.locale,
      this._numberFormatOptions
    );
    this._digits = [
      ...new Intl.NumberFormat(this._numberFormatOptions.locale, {
        useGrouping: false,
        numberingSystem: this._numberFormatOptions.numberingSystem
      }).format(9876543210)
    ].reverse();
    const index = new Map(this._digits.map((d, i) => [d, i]));
    const parts = new Intl.NumberFormat(this._numberFormatOptions.locale, {
      numberingSystem: this._numberFormatOptions.numberingSystem
    }).formatToParts(-123456789e-1);
    this._actualGroup = parts.find((d) => d.type === "group").value;
    this._group = this._actualGroup.trim().length === 0 || this._actualGroup == " " ? " " : this._actualGroup;
    this._decimal = options.locale === "bs" || options.locale === "mk" ? "," : parts.find((d) => d.type === "decimal").value;
    this._minusSign = parts.find((d) => d.type === "minusSign").value;
    this._getDigitIndex = (d) => index.get(d);
  }
}
const numberStringFormatter = new NumberStringFormat();
let dateTimeFormatCache;
let previousLocaleUsedForCaching;
function buildDateTimeFormatCacheKey(options = {}) {
  return Object.entries(options).sort(([key1], [key2]) => key1.localeCompare(key2)).map((keyValue) => `${keyValue[0]}-${keyValue[1]}`).flat().join(":");
}
function getDateTimeFormat(locale, options) {
  locale = getSupportedLocale(locale);
  if (!dateTimeFormatCache) {
    dateTimeFormatCache = /* @__PURE__ */ new Map();
  }
  if (previousLocaleUsedForCaching !== locale) {
    dateTimeFormatCache.clear();
    previousLocaleUsedForCaching = locale;
  }
  const key = buildDateTimeFormatCacheKey(options);
  const cached = dateTimeFormatCache.get(key);
  if (cached) {
    return cached;
  }
  const format = new Intl.DateTimeFormat(locale, options);
  dateTimeFormatCache.set(key, format);
  return format;
}



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

/***/ 97806:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ closeToRangeEdge),
/* harmony export */   c: () => (/* binding */ clamp),
/* harmony export */   r: () => (/* binding */ remap)
/* harmony export */ });
/* unused harmony exports d, g */
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */
const clamp = (value, min, max) => Math.max(min, Math.min(value, max));
const decimalNumberRegex = (/* unused pure expression or super */ null && (new RegExp(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/)));
const decimalPlaces = (value) => {
  const match = ("" + value).match(decimalNumberRegex);
  if (!match || parseInt(match[1]) === 0) {
    return 0;
  }
  return Math.max(
    0,
    // Number of digits right of decimal point.
    (match[1] ? match[1].length : 0) - // Adjust for scientific notation.
    (match[2] ? +match[2] : 0)
  );
};
function getDecimals(value) {
  if (decimalPlaces(value) > 0 && value > 0) {
    return parseFloat(`0.${value.toString().split(".")[1]}`);
  }
  return value;
}
function remap(value, fromMin, fromMax, toMin, toMax) {
  return (value - fromMin) * (toMax - toMin) / (fromMax - fromMin) + toMin;
}
function closeToRangeEdge(value, range, threshold) {
  return value < threshold ? -1 : value > range - threshold ? 1 : 0;
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

/***/ 42817:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Button: () => (/* reexport */ Button)
});

// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/components/calcite-loader/index.js + 1 modules
var calcite_loader = __webpack_require__(32524);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/components/calcite-icon/index.js + 1 modules
var calcite_icon = __webpack_require__(96446);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/runtime.js
var runtime = __webpack_require__(14558);
// EXTERNAL MODULE: ../node_modules/lit/index.js + 2 modules
var lit = __webpack_require__(52689);
// EXTERNAL MODULE: ../node_modules/lit-html/node/directives/ref.js + 1 modules
var ref = __webpack_require__(59276);
// EXTERNAL MODULE: ../node_modules/lit-html/node/static.js
var node_static = __webpack_require__(27092);
// EXTERNAL MODULE: ../node_modules/@arcgis/lumina/dist/index.js + 15 modules
var dist = __webpack_require__(48747);
// EXTERNAL MODULE: ../node_modules/@arcgis/lumina/dist/controllers/index.js + 1 modules
var controllers = __webpack_require__(73339);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/form.js
var chunks_form = __webpack_require__(67226);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/interactive.js
var interactive = __webpack_require__(28070);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/label.js
var label = __webpack_require__(85352);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/component.js
var component = __webpack_require__(66865);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/observers.js
var observers = __webpack_require__(13061);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/useT9n.js
var useT9n = __webpack_require__(13478);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/dom.js
var dom = __webpack_require__(25450);
// EXTERNAL MODULE: ../node_modules/@lit/reactive-element/node/css-tag.js
var css_tag = __webpack_require__(56385);
;// ../node_modules/@esri/calcite-components/dist/components/calcite-button/customElement.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */














const CSS = {
  buttonLoader: "calcite-button--loader",
  content: "content",
  contentSlotted: "content--slotted",
  icon: "icon",
  iconStart: "icon--start",
  iconEnd: "icon--end",
  loadingIn: "loading-in",
  loadingOut: "loading-out",
  iconStartEmpty: "icon-start-empty",
  iconEndEmpty: "icon-end-empty",
  buttonPadding: "button-padding",
  buttonPaddingShrunk: "button-padding--shrunk"
};
const styles = (0,css_tag/* css */.AH)`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block;inline-size:auto;vertical-align:middle;border-radius:var(--calcite-button-corner-radius, var(--calcite-internal-button-corner-radius, 0))}:host a,:host button{--calcite-internal-button-content-margin: .5rem;--calcite-internal-button-padding-x: 7px;--calcite-internal-button-padding-y: 3px;position:relative;box-sizing:border-box;display:flex;block-size:100%;inline-size:100%;cursor:pointer;-webkit-user-select:none;user-select:none;appearance:none;align-items:center;justify-content:center;border-style:none;text-align:center;font-family:inherit;font-weight:var(--calcite-font-weight-normal);text-decoration-line:none;outline-color:transparent;background-color:var(--calcite-button-background-color, var(--calcite-internal-button-background-color, var(--calcite-color-transparent)));border-block-start-color:var(--calcite-button-border-color, var(--calcite-internal-button-border-block-start-color, var(--calcite-internal-button-border-color, var(--calcite-color-transparent))));border-block-end-color:var(--calcite-button-border-color, var(--calcite-internal-button-border-block-end-color, var(--calcite-internal-button-border-color, var(--calcite-color-transparent))));border-inline-start-color:var(--calcite-button-border-color, var(--calcite-internal-button-border-inline-start-color, var(--calcite-internal-button-border-color, var(--calcite-color-transparent))));border-inline-end-color:var(--calcite-button-border-color, var(--calcite-internal-button-border-inline-end-color, var(--calcite-internal-button-border-color, var(--calcite-color-transparent))));border-style:solid;border-width:var(--calcite-border-width-sm);box-shadow:inset 0 0 0 0 var(--calcite-button-shadow-color, var(--calcite-internal-button-shadow-color, var(--calcite-color-transparent)));border-radius:var(--calcite-button-corner-radius, var(--calcite-internal-button-corner-radius, 0));color:var(--calcite-button-text-color, var(--calcite-internal-button-text-color, currentColor));padding-block:var(--calcite-internal-button-padding-y);padding-inline:var(--calcite-internal-button-padding-x);transition:color var(--calcite-animation-timing) ease-in-out,background-color var(--calcite-animation-timing) ease-in-out,box-shadow var(--calcite-animation-timing) ease-in-out,outline-color var(--calcite-internal-animation-timing-fast) ease-in-out}:host a:hover,:host button:hover{text-decoration-line:none}:host a:focus,:host button:focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}:host a span,:host button span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host a calcite-loader,:host button calcite-loader{color:var(--calcite-button-loader-color, var(--calcite-internal-button-loader-color, var(--calcite-button-text-color, var(--calcite-internal-button-text-color))))}:host([round]){--calcite-internal-button-corner-radius: 50px}.content{margin-inline:var(--calcite-internal-button-content-margin)}.icon-start-empty .content{margin-inline-start:unset}.icon-end-empty .content{margin-inline-end:unset}:host([scale=m]) button,:host([scale=m]) a{--calcite-internal-button-content-margin: .75rem}:host([scale=l]) button,:host([scale=l]) a{--calcite-internal-button-content-margin: 1rem}:host([width=auto]){inline-size:auto}:host([width=half]){inline-size:50%}:host([width=full]){inline-size:100%}:host([alignment=center]:not([width=auto])) a,:host([alignment=center]:not([width=auto])) button{justify-content:center}:host([alignment=start]:not([width=auto])) a,:host([alignment=start]:not([width=auto])) button{justify-content:flex-start}:host([alignment=end]:not([width=auto])) a,:host([alignment=end]:not([width=auto])) button{justify-content:flex-end}:host([alignment*=space-between]:not([width=auto])) a,:host([alignment*=space-between]:not([width=auto])) button{justify-content:space-between}:host([alignment=icon-start-space-between]:not([width=auto])) .icon--start{margin-inline-end:auto}:host([alignment=icon-start-space-between]:not([width=auto])) a,:host([alignment=icon-start-space-between]:not([width=auto])) button{text-align:unset}:host([alignment=icon-end-space-between]:not([width=auto])) .icon--end{margin-inline-start:auto}:host([alignment=icon-end-space-between]:not([width=auto])) a,:host([alignment=icon-end-space-between]:not([width=auto])) button{text-align:unset}:host([alignment=center]) a:not(.content--slotted) .icon--start+.icon--end,:host([alignment=center]) button:not(.content--slotted) .icon--start+.icon--end{margin-inline-start:var(--calcite-internal-button-content-margin)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}@keyframes loader-in{0%{inline-size:0;opacity:0;transform:scale(.5)}to{inline-size:1em;opacity:1;transform:scale(1)}}@keyframes loader-out{0%{inline-size:1em;opacity:1;transform:scale(1)}to{inline-size:0;opacity:0;transform:scale(.5)}}.calcite-button--loader{display:flex}.calcite-button--loader calcite-loader{margin:0}:host([loading]) button.content--slotted .calcite-button--loader calcite-loader,:host([loading]) a.content--slotted .calcite-button--loader calcite-loader{margin-inline-end:var(--calcite-internal-button-content-margin)}:host([loading]) button:not(.content--slotted) .icon--start,:host([loading]) button:not(.content--slotted) .icon--end,:host([loading]) a:not(.content--slotted) .icon--start,:host([loading]) a:not(.content--slotted) .icon--end{display:none}:host([appearance]) button,:host([appearance]) a{--calcite-internal-button-border-color: var(--calcite-color-transparent);border-style:solid;border-width:var(--calcite-button-border-size, 1px)}:host([kind=brand]) button,:host([kind=brand]) a{--calcite-internal-button-text-color: var(--calcite-color-text-inverse);--calcite-internal-button-background-color: var(--calcite-color-brand);--calcite-internal-button-loader-color: var(--calcite-color-text-inverse)}:host([kind=brand]) button:hover,:host([kind=brand]) a:hover{--calcite-internal-button-background-color: var(--calcite-color-brand-hover)}:host([kind=brand]) button:active,:host([kind=brand]) a:active{--calcite-internal-button-background-color: var(--calcite-color-brand-press)}:host([kind=danger]) button,:host([kind=danger]) a{--calcite-internal-button-text-color: var(--calcite-color-text-inverse);--calcite-internal-button-background-color: var(--calcite-color-status-danger);--calcite-internal-button-loader-color: var(--calcite-color-text-inverse)}:host([kind=danger]) button:hover,:host([kind=danger]) a:hover{--calcite-internal-button-background-color: var(--calcite-color-status-danger-hover)}:host([kind=danger]) button:active,:host([kind=danger]) a:active{--calcite-internal-button-background-color: var(--calcite-color-status-danger-press)}:host([kind=neutral]) button,:host([kind=neutral]) a{--calcite-internal-button-text-color: var(--calcite-color-text-1);--calcite-internal-button-background-color: var(--calcite-color-foreground-3);--calcite-internal-button-loader-color: var(--calcite-color-text-1)}:host([kind=neutral]) button:hover,:host([kind=neutral]) a:hover{--calcite-internal-button-background-color: var(--calcite-color-foreground-2)}:host([kind=neutral]) button:active,:host([kind=neutral]) a:active{--calcite-internal-button-background-color: var(--calcite-color-foreground-1)}:host([kind=inverse]) button,:host([kind=inverse]) a{--calcite-internal-button-text-color: var(--calcite-color-text-inverse);--calcite-internal-button-background-color: var(--calcite-color-inverse);--calcite-internal-button-loader-color: var(--calcite-color-text-inverse)}:host([kind=inverse]) button:hover,:host([kind=inverse]) a:hover{--calcite-internal-button-background-color: var(--calcite-color-inverse-hover)}:host([kind=inverse]) button:active,:host([kind=inverse]) a:active{--calcite-internal-button-background-color: var(--calcite-color-inverse-press)}:host([appearance=outline-fill]) button,:host([appearance=outline-fill]) a{--calcite-internal-button-background-color: var(--calcite-color-foreground-1);border-style:solid;border-width:var(--calcite-button-border-size, 1px)}:host([appearance=outline-fill]) button:hover,:host([appearance=outline-fill]) a:hover{--calcite-internal-button-background-color: var(--calcite-color-foreground-2)}:host([appearance=outline-fill]) button:active,:host([appearance=outline-fill]) a:active{--calcite-internal-button-background-color: var(--calcite-color-foreground-3)}:host([appearance=outline-fill][kind=brand]) button,:host([appearance=outline-fill][kind=brand]) a{--calcite-internal-button-border-color: var(--calcite-color-brand);--calcite-internal-button-text-color: var(--calcite-color-brand);--calcite-internal-button-loader-color: var(--calcite-color-brand)}:host([appearance=outline-fill][kind=brand]) button:hover,:host([appearance=outline-fill][kind=brand]) a:hover{--calcite-internal-button-border-color: var(--calcite-color-brand-hover);--calcite-internal-button-text-color: var(--calcite-color-brand-hover);--calcite-internal-button-shadow-color: var(--calcite-color-brand-hover)}:host([appearance=outline-fill][kind=brand]) button:focus,:host([appearance=outline-fill][kind=brand]) a:focus{--calcite-internal-button-border-color: var(--calcite-color-brand);--calcite-internal-button-text-color: var(--calcite-color-brand);--calcite-internal-button-shadow-color: var(--calcite-color-brand)}:host([appearance=outline-fill][kind=brand]) button:active,:host([appearance=outline-fill][kind=brand]) a:active{--calcite-internal-button-border-color: var(--calcite-color-brand-press);--calcite-internal-button-text-color: var(--calcite-color-brand-press);--calcite-internal-button-shadow-color: var(--calcite-color-brand-press)}:host([appearance=outline-fill][kind=brand]) button calcite-loader,:host([appearance=outline-fill][kind=brand]) a calcite-loader{--calcite-internal-button-loader-color: var(--calcite-color-brand)}:host([appearance=outline-fill][kind=danger]) button,:host([appearance=outline-fill][kind=danger]) a{--calcite-internal-button-border-color: var(--calcite-color-status-danger);--calcite-internal-button-text-color: var(--calcite-color-status-danger);--calcite-internal-button-loader-color: var(--calcite-color-status-danger)}:host([appearance=outline-fill][kind=danger]) button:hover,:host([appearance=outline-fill][kind=danger]) a:hover{--calcite-internal-button-border-color: var(--calcite-color-status-danger-hover);--calcite-internal-button-text-color: var(--calcite-color-status-danger-hover);--calcite-internal-button-shadow-color: var(--calcite-color-status-danger-hover)}:host([appearance=outline-fill][kind=danger]) button:focus,:host([appearance=outline-fill][kind=danger]) a:focus{--calcite-internal-button-border-color: var(--calcite-color-status-danger);--calcite-internal-button-text-color: var(--calcite-color-status-danger);--calcite-internal-button-shadow-color: var(--calcite-color-status-danger)}:host([appearance=outline-fill][kind=danger]) button:active,:host([appearance=outline-fill][kind=danger]) a:active{--calcite-internal-button-border-color: var(--calcite-color-status-danger-press);--calcite-internal-button-text-color: var(--calcite-color-status-danger-press);--calcite-internal-button-shadow-color: var(--calcite-color-status-danger-press)}:host([appearance=outline-fill][kind=danger]) button calcite-loader,:host([appearance=outline-fill][kind=danger]) a calcite-loader{--calcite-internal-button-loader-color: var(--calcite-color-status-danger)}:host([appearance=outline-fill][kind=neutral]) button,:host([appearance=outline-fill][kind=neutral]) a{--calcite-internal-button-border-color: var(--calcite-color-border-1);--calcite-internal-button-text-color: var(--calcite-color-text-1);--calcite-internal-button-loader-color: var(--calcite-color-text-1)}:host([appearance=outline-fill][kind=neutral]) button:hover,:host([appearance=outline-fill][kind=neutral]) a:hover{--calcite-internal-button-shadow-color: var(--calcite-color-foreground-3);--calcite-internal-button-border-color: var(--calcite-color-border-input)}:host([appearance=outline-fill][kind=neutral]) button:focus,:host([appearance=outline-fill][kind=neutral]) a:focus{--calcite-internal-button-shadow-color: var(--calcite-color-foreground-3)}:host([appearance=outline-fill][kind=neutral]) button:active,:host([appearance=outline-fill][kind=neutral]) a:active{--calcite-internal-button-shadow-color: var(--calcite-color-foreground-3);--calcite-internal-button-border-color: var(--calcite-color-text-3)}:host([appearance=solid][kind=neutral]) button:hover,:host([appearance=solid][kind=neutral]) a:hover{--calcite-internal-button-background-color: var(--calcite-color-border-3)}:host([appearance=solid][kind=neutral]) button:active,:host([appearance=solid][kind=neutral]) a:active{--calcite-internal-button-background-color: var(--calcite-color-border-2)}:host([appearance=outline-fill][kind=inverse]) button,:host([appearance=outline-fill][kind=inverse]) a{--calcite-internal-button-text-color: var(--calcite-color-text-1);--calcite-internal-button-border-color: var(--calcite-color-inverse);--calcite-internal-button-loader-color: var(--calcite-color-text-1)}:host([appearance=outline-fill][kind=inverse]) button:hover,:host([appearance=outline-fill][kind=inverse]) a:hover{--calcite-internal-button-border-color: var(--calcite-color-inverse-hover);--calcite-internal-button-shadow-color: var(--calcite-color-inverse-hover)}:host([appearance=outline-fill][kind=inverse]) button:focus,:host([appearance=outline-fill][kind=inverse]) a:focus{--calcite-internal-button-border-color: var(--calcite-color-inverse);--calcite-internal-button-shadow-color: var(--calcite-color-inverse)}:host([appearance=outline-fill][kind=inverse]) button:active,:host([appearance=outline-fill][kind=inverse]) a:active{--calcite-internal-button-border-color: var(--calcite-color-inverse-press);--calcite-internal-button-shadow-color: var(--calcite-color-inverse-press)}:host([appearance=outline]) button,:host([appearance=outline]) a{--calcite-internal-button-background-color: var(--calcite-color-transparent);border-style:solid;border-width:var(--calcite-button-border-size, 1px)}:host([appearance=outline]) button:hover,:host([appearance=outline]) a:hover{--calcite-internal-button-background-color: var(--calcite-color-transparent-hover)}:host([appearance=outline]) button:active,:host([appearance=outline]) a:active{--calcite-internal-button-background-color: var(--calcite-color-transparent-press)}:host([appearance=outline][kind=brand]) button,:host([appearance=outline][kind=brand]) a{--calcite-internal-button-border-color: var(--calcite-color-brand);--calcite-internal-button-text-color: var(--calcite-color-brand);--calcite-internal-button-loader-color: var(--calcite-color-brand)}:host([appearance=outline][kind=brand]) button:hover,:host([appearance=outline][kind=brand]) a:hover{--calcite-internal-button-border-color: var(--calcite-color-brand-hover);--calcite-internal-button-text-color: var(--calcite-color-brand-hover);--calcite-internal-button-shadow-color: var(--calcite-color-brand-hover)}:host([appearance=outline][kind=brand]) button:focus,:host([appearance=outline][kind=brand]) a:focus{--calcite-internal-button-border-color: var(--calcite-color-brand);--calcite-internal-button-text-color: var(--calcite-color-brand);--calcite-internal-button-shadow-color: var(--calcite-color-brand)}:host([appearance=outline][kind=brand]) button:active,:host([appearance=outline][kind=brand]) a:active{--calcite-internal-button-border-color: var(--calcite-color-brand-press);--calcite-internal-button-text-color: var(--calcite-color-brand-press);--calcite-internal-button-shadow-color: var(--calcite-color-brand-press)}:host([appearance=outline][kind=brand]) button calcite-loader,:host([appearance=outline][kind=brand]) a calcite-loader{--calcite-internal-button-loader-color: var(--calcite-color-brand)}:host([appearance=outline][kind=danger]) button,:host([appearance=outline][kind=danger]) a{--calcite-internal-button-border-color: var(--calcite-color-status-danger);--calcite-internal-button-text-color: var(--calcite-color-status-danger);--calcite-internal-button-loader-color: var(--calcite-color-status-danger)}:host([appearance=outline][kind=danger]) button:hover,:host([appearance=outline][kind=danger]) a:hover{--calcite-internal-button-border-color: var(--calcite-color-status-danger-hover);--calcite-internal-button-text-color: var(--calcite-color-status-danger-hover);--calcite-internal-button-shadow-color: var(--calcite-color-status-danger-hover)}:host([appearance=outline][kind=danger]) button:focus,:host([appearance=outline][kind=danger]) a:focus{--calcite-internal-button-border-color: var(--calcite-color-status-danger);--calcite-internal-button-text-color: var(--calcite-color-status-danger);--calcite-internal-button-shadow-color: var(--calcite-color-status-danger)}:host([appearance=outline][kind=danger]) button:active,:host([appearance=outline][kind=danger]) a:active{--calcite-internal-button-border-color: var(--calcite-color-status-danger-press);--calcite-internal-button-text-color: var(--calcite-color-status-danger-press);--calcite-internal-button-shadow-color: var(--calcite-color-status-danger-press)}:host([appearance=outline][kind=danger]) button calcite-loader,:host([appearance=outline][kind=danger]) a calcite-loader{--calcite-internal-button-loader-color: var(--calcite-color-status-danger)}:host([appearance=outline][kind=neutral]) button,:host([appearance=outline][kind=neutral]) a{--calcite-internal-button-text-color: var(--calcite-color-text-1);--calcite-internal-button-border-color: var(--calcite-color-border-1);--calcite-internal-button-loader-color: var(--calcite-color-text-1)}:host([appearance=outline][kind=neutral]) button:hover,:host([appearance=outline][kind=neutral]) a:hover{--calcite-internal-button-shadow-color: var(--calcite-color-foreground-3);--calcite-internal-button-border-color: var(--calcite-color-border-input)}:host([appearance=outline][kind=neutral]) button:focus,:host([appearance=outline][kind=neutral]) a:focus{--calcite-internal-button-shadow-color: var(--calcite-color-foreground-3)}:host([appearance=outline][kind=neutral]) button:active,:host([appearance=outline][kind=neutral]) a:active{--calcite-internal-button-shadow-color: var(--calcite-color-foreground-3);--calcite-internal-button-border-color: var(--calcite-color-text-3)}:host([appearance=outline][kind=inverse]) button,:host([appearance=outline][kind=inverse]) a{--calcite-internal-button-text-color: var(--calcite-color-text-1);--calcite-internal-button-border-color: var(--calcite-color-inverse);--calcite-internal-button-loader-color: var(--calcite-color-text-1)}:host([appearance=outline][kind=inverse]) button:hover,:host([appearance=outline][kind=inverse]) a:hover{--calcite-internal-button-border-color: var(--calcite-color-inverse-hover);--calcite-internal-button-shadow-color: var(--calcite-color-inverse-hover)}:host([appearance=outline][kind=inverse]) button:focus,:host([appearance=outline][kind=inverse]) a:focus{--calcite-internal-button-border-color: var(--calcite-color-inverse);--calcite-internal-button-shadow-color: var(--calcite-color-inverse)}:host([appearance=outline][kind=inverse]) button:active,:host([appearance=outline][kind=inverse]) a:active{--calcite-internal-button-border-color: var(--calcite-color-inverse-press);--calcite-internal-button-shadow-color: var(--calcite-color-inverse-press)}:host([appearance=outline-fill][split-child=primary]) button,:host([appearance=outline][split-child=primary]) button,:host([appearance=outline-fill][split-child=primary]) a,:host([appearance=outline][split-child=primary]) a{border-inline-end-width:0;border-inline-start-width:1px}:host([appearance=outline-fill][split-child=secondary]) button,:host([appearance=outline][split-child=secondary]) button,:host([appearance=outline-fill][split-child=secondary]) a,:host([appearance=outline][split-child=secondary]) a{border-inline-start-width:0;border-inline-end-width:1px}:host([appearance=transparent]) button,:host([appearance=transparent]) a{--calcite-internal-button-background-color: var(--calcite-color-transparent)}:host([appearance=transparent]) button:hover,:host([appearance=transparent]) button:focus,:host([appearance=transparent]) a:hover,:host([appearance=transparent]) a:focus{--calcite-internal-button-background-color: var(--calcite-color-transparent-hover)}:host([appearance=transparent]) button:active,:host([appearance=transparent]) a:active{--calcite-internal-button-background-color: var(--calcite-color-transparent-press)}:host([appearance=transparent]:not(.enable-editing-button)) button,:host([appearance=transparent]:not(.enable-editing-button)) a{background-color:var(--calcite-color-transparent)}:host([appearance=transparent]:not(.enable-editing-button)) button:hover,:host([appearance=transparent]:not(.enable-editing-button)) a:hover{background-color:var(--calcite-color-transparent-hover)}:host([appearance=transparent]:not(.enable-editing-button)) button:active,:host([appearance=transparent]:not(.enable-editing-button)) a:active{background-color:var(--calcite-color-transparent-press)}:host([appearance=transparent][kind=brand]) button,:host([appearance=transparent][kind=brand]) a{--calcite-internal-button-text-color: var(--calcite-color-brand);--calcite-internal-button-loader-color: var(--calcite-color-brand)}:host([appearance=transparent][kind=brand]) button:hover,:host([appearance=transparent][kind=brand]) a:hover{--calcite-internal-button-text-color: var(--calcite-color-brand-hover)}:host([appearance=transparent][kind=brand]) button:focus,:host([appearance=transparent][kind=brand]) a:focus{--calcite-internal-button-text-color: var(--calcite-color-brand)}:host([appearance=transparent][kind=brand]) button:active,:host([appearance=transparent][kind=brand]) a:active{--calcite-internal-button-text-color: var(--calcite-color-brand-press)}:host([appearance=transparent][kind=brand]) button calcite-loader,:host([appearance=transparent][kind=brand]) a calcite-loader{--calcite-internal-button-loader-color: var(--calcite-color-brand)}:host([appearance=transparent][kind=danger]) button,:host([appearance=transparent][kind=danger]) a{--calcite-internal-button-text-color: var(--calcite-color-status-danger);--calcite-internal-button-loader-color: var(--calcite-color-status-danger)}:host([appearance=transparent][kind=danger]) button:hover,:host([appearance=transparent][kind=danger]) a:hover{--calcite-internal-button-text-color: var(--calcite-color-status-danger-hover)}:host([appearance=transparent][kind=danger]) button:focus,:host([appearance=transparent][kind=danger]) a:focus{--calcite-internal-button-text-color: var(--calcite-color-status-danger)}:host([appearance=transparent][kind=danger]) button:active,:host([appearance=transparent][kind=danger]) a:active{--calcite-internal-button-text-color: var(--calcite-color-status-danger-press)}:host([appearance=transparent][kind=danger]) button calcite-loader,:host([appearance=transparent][kind=danger]) a calcite-loader{--calcite-internal-button-loader-color: var(--calcite-color-status-danger)}:host([appearance=transparent][kind=neutral]:not(.cancel-editing-button)) button,:host([appearance=transparent][kind=neutral]:not(.cancel-editing-button)) a,:host([appearance=transparent][kind=neutral]:not(.cancel-editing-button)) calcite-loader{--calcite-internal-button-text-color: var(--calcite-color-text-1)}:host([appearance=transparent][kind=neutral].cancel-editing-button) button{--calcite-internal-button-text-color: var(--calcite-color-text-3)}:host([appearance=transparent][kind=neutral].cancel-editing-button) button:hover{--calcite-internal-button-text-color: var(--calcite-color-text-1);--calcite-internal-button-padding-y: 0}:host(.confirm-changes-button) button:focus,:host(.cancel-editing-button) button:focus,:host(.enable-editing-button) button:focus{outline-offset:-2px}:host([appearance=transparent][kind=inverse]) button:hover,:host([appearance=transparent][kind=inverse]) a:hover{background-color:var(--calcite-color-transparent-inverse-hover)}:host([appearance=transparent][kind=inverse]) button:active,:host([appearance=transparent][kind=inverse]) a:active{background-color:var(--calcite-color-transparent-inverse-press)}:host([appearance=transparent][kind=inverse]) button calcite-loader,:host([appearance=transparent][kind=inverse]) a calcite-loader{--calcite-internal-button-text-color: var(--calcite-color-text-inverse)}:host([scale=s]) button.content--slotted,:host([scale=s]) a.content--slotted{font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s][appearance=transparent]) button.content--slotted,:host([scale=s][appearance=transparent]) a.content--slotted{--calcite-internal-button-padding-x: .5rem}:host([scale=s]) button,:host([scale=s]) a{--calcite-internal-button-padding-y: 3px}:host([scale=m]) button.content--slotted,:host([scale=m]) a.content--slotted{--calcite-internal-button-padding-x: 11px;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) button,:host([scale=m]) a{--calcite-internal-button-padding-y: 7px}:host([scale=m][appearance=transparent]) button.content--slotted,:host([scale=m][appearance=transparent]) a.content--slotted{--calcite-internal-button-padding-x: .75rem}:host([scale=l]) button.content--slotted,:host([scale=l]) a.content--slotted{--calcite-internal-button-padding-x: 15px;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .button-padding{--calcite-internal-button-padding-x: 1rem;--calcite-internal-button-padding-y: 11px}:host([scale=l]) .button-padding--shrunk{--calcite-internal-button-padding-y: 9px}:host([scale=s]) button:not(.content--slotted),:host([scale=s]) a:not(.content--slotted){--calcite-internal-button-padding-x: .125rem;--calcite-internal-button-padding-y: 3px;inline-size:1.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-block-size:1.5rem}:host([scale=m]) button:not(.content--slotted),:host([scale=m]) a:not(.content--slotted){--calcite-internal-button-padding-x: .125rem;--calcite-internal-button-padding-y: 7px;inline-size:2rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-block-size:2rem}:host([scale=l]) button:not(.content--slotted),:host([scale=l]) a:not(.content--slotted){--calcite-internal-button-padding-x: .125rem;--calcite-internal-button-padding-y: 9px;inline-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-block-size:2.75rem}:host(:is([scale=s],[scale=m],[scale=l])[width=full]) a:not(.content--slotted),:host(:is([scale=s],[scale=m],[scale=l])[width=full]) button:not(.content--slotted){inline-size:var(--calcite-container-size-content-fluid)}:host([scale=l][appearance=transparent]) button:not(.content--slotted),:host([scale=l][appearance=transparent]) a:not(.content--slotted){--calcite-internal-button-padding-y: .625rem}:host([scale=s][icon-start][icon-end]) button:not(.content--slotted),:host([scale=s][icon-start][icon-end]) a:not(.content--slotted){--calcite-internal-button-padding-x: 23px;block-size:1.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=s][icon-start][icon-end][appearance=transparent]) button:not(.content--slotted),:host([scale=s][icon-start][icon-end][appearance=transparent]) a:not(.content--slotted){--calcite-internal-button-padding-x: 1.5rem}:host([scale=m][icon-start][icon-end]) button:not(.content--slotted),:host([scale=m][icon-start][icon-end]) a:not(.content--slotted){--calcite-internal-button-padding-x: 2rem;block-size:2rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=m][icon-start][icon-end][appearance=transparent]) button:not(.content--slotted),:host([scale=m][icon-start][icon-end][appearance=transparent]) a:not(.content--slotted){--calcite-internal-button-padding-x: 33px}:host([scale=l][icon-start][icon-end]) button:not(.content--slotted),:host([scale=l][icon-start][icon-end]) a:not(.content--slotted){--calcite-internal-button-padding-x: 43px;block-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l][icon-start][icon-end]) button:not(.content--slotted) .icon--start+.icon--end,:host([scale=l][icon-start][icon-end]) a:not(.content--slotted) .icon--start+.icon--end{margin-inline-start:1rem}:host([scale=l][icon-start][icon-end][appearance=transparent]) button:not(.content--slotted),:host([scale=l][icon-start][icon-end][appearance=transparent]) a:not(.content--slotted){--calcite-internal-button-padding-x: 2.75rem}:host([hidden]){display:none}[hidden]{display:none}`;
class Button extends dist/* LitElement */.WF {
  constructor() {
    super(...arguments);
    this.attributeWatch = (0,controllers/* useWatchAttributes */.oW)(["aria-expanded"], this.handleGlobalAttributesChanged);
    this.contentEl = (0,ref/* createRef */._)();
    this.mutationObserver = (0,observers.c)("mutation", () => this.updateHasContent());
    this.resizeObserver = (0,observers.c)("resize", () => this.setTooltipText());
    this.messages = (0,useT9n.u)();
    this.hasContent = false;
    this.alignment = "center";
    this.appearance = "solid";
    this.disabled = false;
    this.download = false;
    this.kind = "brand";
    this.loading = false;
    this.round = false;
    this.scale = "m";
    this.splitChild = false;
    this.type = "button";
    this.width = "auto";
  }
  static {
    this.properties = { hasContent: [16, {}, { state: true }], tooltipText: [16, {}, { state: true }], alignment: [3, {}, { reflect: true }], appearance: [3, {}, { reflect: true }], disabled: [7, {}, { reflect: true, type: Boolean }], download: [3, { converter: dist/* stringOrBoolean */.pf }, { reflect: true }], form: [3, {}, { reflect: true }], href: [3, {}, { reflect: true }], iconEnd: [3, {}, { reflect: true }], iconFlipRtl: [3, {}, { reflect: true }], iconStart: [3, {}, { reflect: true }], kind: [3, {}, { reflect: true }], label: 1, loading: [7, {}, { reflect: true, type: Boolean }], messageOverrides: [0, {}, { attribute: false }], name: [3, {}, { reflect: true }], rel: [3, {}, { reflect: true }], round: [7, {}, { reflect: true, type: Boolean }], scale: [3, {}, { reflect: true }], splitChild: [3, {}, { reflect: true }], target: [3, {}, { reflect: true }], type: [3, {}, { reflect: true }], width: [3, {}, { reflect: true }] };
  }
  static {
    this.styles = styles;
  }
  async setFocus() {
    await (0,component.c)(this);
    this.childEl?.focus();
  }
  connectedCallback() {
    super.connectedCallback();
    this.setupTextContentObserver();
    (0,label.c)(this);
    this.formEl = (0,chunks_form.f)(this);
  }
  async load() {
    if (!lit/* isServer */.S$) {
      this.updateHasContent();
    }
  }
  updated() {
    (0,interactive.u)(this);
  }
  loaded() {
    this.setTooltipText();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.mutationObserver?.disconnect();
    (0,label.d)(this);
    this.resizeObserver?.disconnect();
    this.formEl = null;
  }
  handleGlobalAttributesChanged() {
    this.requestUpdate();
  }
  updateHasContent() {
    this.hasContent = (0,dom.D)(this.el);
  }
  setupTextContentObserver() {
    this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
  }
  onLabelClick() {
    this.handleClick();
    this.setFocus();
  }
  handleClick() {
    const { type } = this;
    if (this.href) {
      return;
    }
    if (type === "submit") {
      (0,chunks_form.s)(this);
    } else if (type === "reset") {
      (0,chunks_form.r)(this);
    }
  }
  setTooltipText() {
    const { contentEl: { value: contentEl } } = this;
    if (contentEl) {
      this.tooltipText = contentEl.offsetWidth < contentEl.scrollWidth ? this.el.innerText || null : null;
    }
  }
  setChildEl(el) {
    this.childEl = el;
    if (el) {
      this.resizeObserver?.observe(el);
    }
  }
  render() {
    const childElType = this.href ? "a" : "button";
    const DynamicHtmlTag = this.href ? (0,node_static/* literal */.eu)`a` : (0,node_static/* literal */.eu)`button`;
    const loaderNode = this.loading ? (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(CSS.buttonLoader)}><calcite-loader class=${(0,dist/* safeClassMap */.CP)(this.loading ? CSS.loadingIn : CSS.loadingOut)} inline .label=${this.messages.loading} .scale=${this.scale === "l" ? "m" : "s"}></calcite-loader></div>` : null;
    const noStartEndIcons = !this.iconStart && !this.iconEnd;
    const iconStartEl = (0,lit/* html */.qy)`<calcite-icon class=${(0,dist/* safeClassMap */.CP)({ [CSS.icon]: true, [CSS.iconStart]: true })} .flipRtl=${this.iconFlipRtl === "start" || this.iconFlipRtl === "both"} .icon=${this.iconStart} .scale=${(0,component.g)(this.scale)}></calcite-icon>`;
    const iconEndEl = (0,lit/* html */.qy)`<calcite-icon class=${(0,dist/* safeClassMap */.CP)({ [CSS.icon]: true, [CSS.iconEnd]: true })} .flipRtl=${this.iconFlipRtl === "end" || this.iconFlipRtl === "both"} .icon=${this.iconEnd} .scale=${(0,component.g)(this.scale)}></calcite-icon>`;
    const contentEl = (0,lit/* html */.qy)`<span class=${(0,dist/* safeClassMap */.CP)(CSS.content)} ${(0,ref/* ref */.K)(this.contentEl)}><slot></slot></span>`;
    return (0,interactive.I)({ disabled: this.disabled, children: (0,node_static/* html */.qy)`<${DynamicHtmlTag} .ariaBusy=${this.loading} .ariaExpanded=${this.el.ariaExpanded ? this.el.ariaExpanded : null} .ariaLabel=${!this.loading ? (0,label.g)(this) : this.messages.loading} aria-live=polite class=${(0,dist/* safeClassMap */.CP)({
      [CSS.buttonPadding]: noStartEndIcons,
      [CSS.buttonPaddingShrunk]: !noStartEndIcons,
      [CSS.contentSlotted]: this.hasContent,
      [CSS.iconStartEmpty]: !this.iconStart,
      [CSS.iconEndEmpty]: !this.iconEnd
    })} .disabled=${childElType === "button" ? this.disabled : null} download=${(childElType === "a" ? this.download === true || this.download === "" ? "" : this.download || null : null) ?? lit/* nothing */.s6} href=${(childElType === "a" && this.href) ?? lit/* nothing */.s6} name=${(childElType === "button" && this.name) ?? lit/* nothing */.s6} @click=${this.handleClick} rel=${(childElType === "a" && this.rel) ?? lit/* nothing */.s6} tabindex=${(this.disabled ? -1 : null) ?? lit/* nothing */.s6} target=${(childElType === "a" && this.target) ?? lit/* nothing */.s6} title=${this.tooltipText ?? lit/* nothing */.s6} type=${(childElType === "button" ? this.type : null) ?? lit/* nothing */.s6} ${(0,ref/* ref */.K)(this.setChildEl)}>${loaderNode}${this.iconStart ? iconStartEl : null}${this.hasContent ? contentEl : null}${this.iconEnd ? iconEndEl : null}</${DynamicHtmlTag}>` });
  }
}
(0,runtime.c)("calcite-button", Button);


;// ../node_modules/@esri/calcite-components/dist/components/calcite-button/index.js




/***/ }),

/***/ 99620:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ColorPicker: () => (/* reexport */ ColorPicker)
});

// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/runtime.js
var runtime = __webpack_require__(14558);
// EXTERNAL MODULE: ../node_modules/lit-html/node/directives/keyed.js
var keyed = __webpack_require__(51425);
;// ../node_modules/color-string/node_modules/color-name/index.js
/* harmony default export */ const color_name = ({
	aliceblue: [240, 248, 255],
	antiquewhite: [250, 235, 215],
	aqua: [0, 255, 255],
	aquamarine: [127, 255, 212],
	azure: [240, 255, 255],
	beige: [245, 245, 220],
	bisque: [255, 228, 196],
	black: [0, 0, 0],
	blanchedalmond: [255, 235, 205],
	blue: [0, 0, 255],
	blueviolet: [138, 43, 226],
	brown: [165, 42, 42],
	burlywood: [222, 184, 135],
	cadetblue: [95, 158, 160],
	chartreuse: [127, 255, 0],
	chocolate: [210, 105, 30],
	coral: [255, 127, 80],
	cornflowerblue: [100, 149, 237],
	cornsilk: [255, 248, 220],
	crimson: [220, 20, 60],
	cyan: [0, 255, 255],
	darkblue: [0, 0, 139],
	darkcyan: [0, 139, 139],
	darkgoldenrod: [184, 134, 11],
	darkgray: [169, 169, 169],
	darkgreen: [0, 100, 0],
	darkgrey: [169, 169, 169],
	darkkhaki: [189, 183, 107],
	darkmagenta: [139, 0, 139],
	darkolivegreen: [85, 107, 47],
	darkorange: [255, 140, 0],
	darkorchid: [153, 50, 204],
	darkred: [139, 0, 0],
	darksalmon: [233, 150, 122],
	darkseagreen: [143, 188, 143],
	darkslateblue: [72, 61, 139],
	darkslategray: [47, 79, 79],
	darkslategrey: [47, 79, 79],
	darkturquoise: [0, 206, 209],
	darkviolet: [148, 0, 211],
	deeppink: [255, 20, 147],
	deepskyblue: [0, 191, 255],
	dimgray: [105, 105, 105],
	dimgrey: [105, 105, 105],
	dodgerblue: [30, 144, 255],
	firebrick: [178, 34, 34],
	floralwhite: [255, 250, 240],
	forestgreen: [34, 139, 34],
	fuchsia: [255, 0, 255],
	gainsboro: [220, 220, 220],
	ghostwhite: [248, 248, 255],
	gold: [255, 215, 0],
	goldenrod: [218, 165, 32],
	gray: [128, 128, 128],
	green: [0, 128, 0],
	greenyellow: [173, 255, 47],
	grey: [128, 128, 128],
	honeydew: [240, 255, 240],
	hotpink: [255, 105, 180],
	indianred: [205, 92, 92],
	indigo: [75, 0, 130],
	ivory: [255, 255, 240],
	khaki: [240, 230, 140],
	lavender: [230, 230, 250],
	lavenderblush: [255, 240, 245],
	lawngreen: [124, 252, 0],
	lemonchiffon: [255, 250, 205],
	lightblue: [173, 216, 230],
	lightcoral: [240, 128, 128],
	lightcyan: [224, 255, 255],
	lightgoldenrodyellow: [250, 250, 210],
	lightgray: [211, 211, 211],
	lightgreen: [144, 238, 144],
	lightgrey: [211, 211, 211],
	lightpink: [255, 182, 193],
	lightsalmon: [255, 160, 122],
	lightseagreen: [32, 178, 170],
	lightskyblue: [135, 206, 250],
	lightslategray: [119, 136, 153],
	lightslategrey: [119, 136, 153],
	lightsteelblue: [176, 196, 222],
	lightyellow: [255, 255, 224],
	lime: [0, 255, 0],
	limegreen: [50, 205, 50],
	linen: [250, 240, 230],
	magenta: [255, 0, 255],
	maroon: [128, 0, 0],
	mediumaquamarine: [102, 205, 170],
	mediumblue: [0, 0, 205],
	mediumorchid: [186, 85, 211],
	mediumpurple: [147, 112, 219],
	mediumseagreen: [60, 179, 113],
	mediumslateblue: [123, 104, 238],
	mediumspringgreen: [0, 250, 154],
	mediumturquoise: [72, 209, 204],
	mediumvioletred: [199, 21, 133],
	midnightblue: [25, 25, 112],
	mintcream: [245, 255, 250],
	mistyrose: [255, 228, 225],
	moccasin: [255, 228, 181],
	navajowhite: [255, 222, 173],
	navy: [0, 0, 128],
	oldlace: [253, 245, 230],
	olive: [128, 128, 0],
	olivedrab: [107, 142, 35],
	orange: [255, 165, 0],
	orangered: [255, 69, 0],
	orchid: [218, 112, 214],
	palegoldenrod: [238, 232, 170],
	palegreen: [152, 251, 152],
	paleturquoise: [175, 238, 238],
	palevioletred: [219, 112, 147],
	papayawhip: [255, 239, 213],
	peachpuff: [255, 218, 185],
	peru: [205, 133, 63],
	pink: [255, 192, 203],
	plum: [221, 160, 221],
	powderblue: [176, 224, 230],
	purple: [128, 0, 128],
	rebeccapurple: [102, 51, 153],
	red: [255, 0, 0],
	rosybrown: [188, 143, 143],
	royalblue: [65, 105, 225],
	saddlebrown: [139, 69, 19],
	salmon: [250, 128, 114],
	sandybrown: [244, 164, 96],
	seagreen: [46, 139, 87],
	seashell: [255, 245, 238],
	sienna: [160, 82, 45],
	silver: [192, 192, 192],
	skyblue: [135, 206, 235],
	slateblue: [106, 90, 205],
	slategray: [112, 128, 144],
	slategrey: [112, 128, 144],
	snow: [255, 250, 250],
	springgreen: [0, 255, 127],
	steelblue: [70, 130, 180],
	tan: [210, 180, 140],
	teal: [0, 128, 128],
	thistle: [216, 191, 216],
	tomato: [255, 99, 71],
	turquoise: [64, 224, 208],
	violet: [238, 130, 238],
	wheat: [245, 222, 179],
	white: [255, 255, 255],
	whitesmoke: [245, 245, 245],
	yellow: [255, 255, 0],
	yellowgreen: [154, 205, 50]
});

;// ../node_modules/color-string/index.js


const reverseNames = Object.create(null);

// Create a list of reverse color names
for (const name in color_name) {
	if (Object.hasOwn(color_name, name)) {
		reverseNames[color_name[name]] = name;
	}
}

const cs = {
	to: {},
	get: {},
};

cs.get = function (string) {
	const prefix = string.slice(0, 3).toLowerCase();
	let value;
	let model;
	switch (prefix) {
		case 'hsl': {
			value = cs.get.hsl(string);
			model = 'hsl';
			break;
		}

		case 'hwb': {
			value = cs.get.hwb(string);
			model = 'hwb';
			break;
		}

		default: {
			value = cs.get.rgb(string);
			model = 'rgb';
			break;
		}
	}

	if (!value) {
		return null;
	}

	return {model, value};
};

cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}

	const abbr = /^#([a-f\d]{3,4})$/i;
	const hex = /^#([a-f\d]{6})([a-f\d]{2})?$/i;
	const rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|/]\s*([+-]?[\d.]+)(%?)\s*)?\)$/;
	const per = /^rgba?\(\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[,|/]\s*([+-]?[\d.]+)(%?)\s*)?\)$/;
	const keyword = /^(\w+)$/;

	let rgb = [0, 0, 0, 1];
	let match;
	let i;
	let hexAlpha;

	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];

		for (i = 0; i < 3; i++) {
			// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
			const i2 = i * 2;
			rgb[i] = Number.parseInt(match.slice(i2, i2 + 2), 16);
		}

		if (hexAlpha) {
			rgb[3] = Number.parseInt(hexAlpha, 16) / 255;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];

		for (i = 0; i < 3; i++) {
			rgb[i] = Number.parseInt(match[i] + match[i], 16);
		}

		if (hexAlpha) {
			rgb[3] = Number.parseInt(hexAlpha + hexAlpha, 16) / 255;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Number.parseInt(match[i + 1], 10);
		}

		if (match[4]) {
			rgb[3] = match[5] ? Number.parseFloat(match[4]) * 0.01 : Number.parseFloat(match[4]);
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(Number.parseFloat(match[i + 1]) * 2.55);
		}

		if (match[4]) {
			rgb[3] = match[5] ? Number.parseFloat(match[4]) * 0.01 : Number.parseFloat(match[4]);
		}
	} else if (match = string.match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}

		if (!Object.hasOwn(color_name, match[1])) {
			return null;
		}

		rgb = color_name[match[1]];
		rgb[3] = 1;

		return rgb;
	} else {
		return null;
	}

	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}

	rgb[3] = clamp(rgb[3], 0, 1);

	return rgb;
};

cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}

	const hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[,|/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
	const match = string.match(hsl);

	if (match) {
		const alpha = Number.parseFloat(match[4]);
		const h = ((Number.parseFloat(match[1]) % 360) + 360) % 360;
		const s = clamp(Number.parseFloat(match[2]), 0, 100);
		const l = clamp(Number.parseFloat(match[3]), 0, 100);
		const a = clamp(Number.isNaN(alpha) ? 1 : alpha, 0, 1);

		return [h, s, l, a];
	}

	return null;
};

cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}

	const hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d.]+)%\s*,\s*([+-]?[\d.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
	const match = string.match(hwb);

	if (match) {
		const alpha = Number.parseFloat(match[4]);
		const h = ((Number.parseFloat(match[1]) % 360) + 360) % 360;
		const w = clamp(Number.parseFloat(match[2]), 0, 100);
		const b = clamp(Number.parseFloat(match[3]), 0, 100);
		const a = clamp(Number.isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}

	return null;
};

cs.to.hex = function (...rgba) {
	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};

cs.to.rgb = function (...rgba) {
	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};

cs.to.rgb.percent = function (...rgba) {
	const r = Math.round(rgba[0] / 255 * 100);
	const g = Math.round(rgba[1] / 255 * 100);
	const b = Math.round(rgba[2] / 255 * 100);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};

cs.to.hsl = function (...hsla) {
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};

// Hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function (...hwba) {
	let a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}

	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};

cs.to.keyword = function (...rgb) {
	return reverseNames[rgb.slice(0, 3)];
};

// Helpers
function clamp(number_, min, max) {
	return Math.min(Math.max(min, number_), max);
}

function hexDouble(number_) {
	const string_ = Math.round(number_).toString(16).toUpperCase();
	return (string_.length < 2) ? '0' + string_ : string_;
}

/* harmony default export */ const color_string = (cs);

;// ../node_modules/color/node_modules/color-name/index.js
/* harmony default export */ const node_modules_color_name = ({
	aliceblue: [240, 248, 255],
	antiquewhite: [250, 235, 215],
	aqua: [0, 255, 255],
	aquamarine: [127, 255, 212],
	azure: [240, 255, 255],
	beige: [245, 245, 220],
	bisque: [255, 228, 196],
	black: [0, 0, 0],
	blanchedalmond: [255, 235, 205],
	blue: [0, 0, 255],
	blueviolet: [138, 43, 226],
	brown: [165, 42, 42],
	burlywood: [222, 184, 135],
	cadetblue: [95, 158, 160],
	chartreuse: [127, 255, 0],
	chocolate: [210, 105, 30],
	coral: [255, 127, 80],
	cornflowerblue: [100, 149, 237],
	cornsilk: [255, 248, 220],
	crimson: [220, 20, 60],
	cyan: [0, 255, 255],
	darkblue: [0, 0, 139],
	darkcyan: [0, 139, 139],
	darkgoldenrod: [184, 134, 11],
	darkgray: [169, 169, 169],
	darkgreen: [0, 100, 0],
	darkgrey: [169, 169, 169],
	darkkhaki: [189, 183, 107],
	darkmagenta: [139, 0, 139],
	darkolivegreen: [85, 107, 47],
	darkorange: [255, 140, 0],
	darkorchid: [153, 50, 204],
	darkred: [139, 0, 0],
	darksalmon: [233, 150, 122],
	darkseagreen: [143, 188, 143],
	darkslateblue: [72, 61, 139],
	darkslategray: [47, 79, 79],
	darkslategrey: [47, 79, 79],
	darkturquoise: [0, 206, 209],
	darkviolet: [148, 0, 211],
	deeppink: [255, 20, 147],
	deepskyblue: [0, 191, 255],
	dimgray: [105, 105, 105],
	dimgrey: [105, 105, 105],
	dodgerblue: [30, 144, 255],
	firebrick: [178, 34, 34],
	floralwhite: [255, 250, 240],
	forestgreen: [34, 139, 34],
	fuchsia: [255, 0, 255],
	gainsboro: [220, 220, 220],
	ghostwhite: [248, 248, 255],
	gold: [255, 215, 0],
	goldenrod: [218, 165, 32],
	gray: [128, 128, 128],
	green: [0, 128, 0],
	greenyellow: [173, 255, 47],
	grey: [128, 128, 128],
	honeydew: [240, 255, 240],
	hotpink: [255, 105, 180],
	indianred: [205, 92, 92],
	indigo: [75, 0, 130],
	ivory: [255, 255, 240],
	khaki: [240, 230, 140],
	lavender: [230, 230, 250],
	lavenderblush: [255, 240, 245],
	lawngreen: [124, 252, 0],
	lemonchiffon: [255, 250, 205],
	lightblue: [173, 216, 230],
	lightcoral: [240, 128, 128],
	lightcyan: [224, 255, 255],
	lightgoldenrodyellow: [250, 250, 210],
	lightgray: [211, 211, 211],
	lightgreen: [144, 238, 144],
	lightgrey: [211, 211, 211],
	lightpink: [255, 182, 193],
	lightsalmon: [255, 160, 122],
	lightseagreen: [32, 178, 170],
	lightskyblue: [135, 206, 250],
	lightslategray: [119, 136, 153],
	lightslategrey: [119, 136, 153],
	lightsteelblue: [176, 196, 222],
	lightyellow: [255, 255, 224],
	lime: [0, 255, 0],
	limegreen: [50, 205, 50],
	linen: [250, 240, 230],
	magenta: [255, 0, 255],
	maroon: [128, 0, 0],
	mediumaquamarine: [102, 205, 170],
	mediumblue: [0, 0, 205],
	mediumorchid: [186, 85, 211],
	mediumpurple: [147, 112, 219],
	mediumseagreen: [60, 179, 113],
	mediumslateblue: [123, 104, 238],
	mediumspringgreen: [0, 250, 154],
	mediumturquoise: [72, 209, 204],
	mediumvioletred: [199, 21, 133],
	midnightblue: [25, 25, 112],
	mintcream: [245, 255, 250],
	mistyrose: [255, 228, 225],
	moccasin: [255, 228, 181],
	navajowhite: [255, 222, 173],
	navy: [0, 0, 128],
	oldlace: [253, 245, 230],
	olive: [128, 128, 0],
	olivedrab: [107, 142, 35],
	orange: [255, 165, 0],
	orangered: [255, 69, 0],
	orchid: [218, 112, 214],
	palegoldenrod: [238, 232, 170],
	palegreen: [152, 251, 152],
	paleturquoise: [175, 238, 238],
	palevioletred: [219, 112, 147],
	papayawhip: [255, 239, 213],
	peachpuff: [255, 218, 185],
	peru: [205, 133, 63],
	pink: [255, 192, 203],
	plum: [221, 160, 221],
	powderblue: [176, 224, 230],
	purple: [128, 0, 128],
	rebeccapurple: [102, 51, 153],
	red: [255, 0, 0],
	rosybrown: [188, 143, 143],
	royalblue: [65, 105, 225],
	saddlebrown: [139, 69, 19],
	salmon: [250, 128, 114],
	sandybrown: [244, 164, 96],
	seagreen: [46, 139, 87],
	seashell: [255, 245, 238],
	sienna: [160, 82, 45],
	silver: [192, 192, 192],
	skyblue: [135, 206, 235],
	slateblue: [106, 90, 205],
	slategray: [112, 128, 144],
	slategrey: [112, 128, 144],
	snow: [255, 250, 250],
	springgreen: [0, 255, 127],
	steelblue: [70, 130, 180],
	tan: [210, 180, 140],
	teal: [0, 128, 128],
	thistle: [216, 191, 216],
	tomato: [255, 99, 71],
	turquoise: [64, 224, 208],
	violet: [238, 130, 238],
	wheat: [245, 222, 179],
	white: [255, 255, 255],
	whitesmoke: [245, 245, 245],
	yellow: [255, 255, 0],
	yellowgreen: [154, 205, 50]
});

;// ../node_modules/color/node_modules/color-convert/conversions.js
/* MIT license */
/* eslint-disable no-mixed-operators */


// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

const reverseKeywords = {};
for (const key of Object.keys(node_modules_color_name)) {
	reverseKeywords[node_modules_color_name[key]] = key;
}

const convert = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	oklab: {channels: 3, labels: ['okl', 'oka', 'okb']},
	lch: {channels: 3, labels: 'lch'},
	oklch: {channels: 3, labels: ['okl', 'okc', 'okh']},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']},
};

/* harmony default export */ const conversions = (convert);

// LAB f(t) constant
const LAB_FT = (6 / 29) ** 3;

// SRGB non-linear transform functions
function srgbNonlinearTransform(c) {
	const cc = c > 0.003_130_8
		? ((1.055 * (c ** (1 / 2.4))) - 0.055)
		: c * 12.92;
	return Math.min(Math.max(0, cc), 1);
}

function srgbNonlinearTransformInv(c) {
	return c > 0.040_45 ? (((c + 0.055) / 1.055) ** 2.4) : (c / 12.92);
}

// Hide .channels and .labels properties
for (const model of Object.keys(convert)) {
	if (!('channels' in convert[model])) {
		throw new Error('missing channels property: ' + model);
	}

	if (!('labels' in convert[model])) {
		throw new Error('missing channel labels property: ' + model);
	}

	if (convert[model].labels.length !== convert[model].channels) {
		throw new Error('channel and label counts mismatch: ' + model);
	}

	const {channels, labels} = convert[model];
	delete convert[model].channels;
	delete convert[model].labels;
	Object.defineProperty(convert[model], 'channels', {value: channels});
	Object.defineProperty(convert[model], 'labels', {value: labels});
}

convert.rgb.hsl = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const min = Math.min(r, g, b);
	const max = Math.max(r, g, b);
	const delta = max - min;
	let h;
	let s;

	switch (max) {
		case min: {
			h = 0;

			break;
		}

		case r: {
			h = (g - b) / delta;

			break;
		}

		case g: {
			h = 2 + (b - r) / delta;

			break;
		}

		case b: {
			h = 4 + (r - g) / delta;

			break;
		}
	// No default
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	const l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	let rdif;
	let gdif;
	let bdif;
	let h;
	let s;

	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const v = Math.max(r, g, b);
	const diff = v - Math.min(r, g, b);
	const diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = 0;
		s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		switch (v) {
			case r: {
				h = bdif - gdif;

				break;
			}

			case g: {
				h = (1 / 3) + rdif - bdif;

				break;
			}

			case b: {
				h = (2 / 3) + gdif - rdif;

				break;
			}
		// No default
		}

		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100,
	];
};

convert.rgb.hwb = function (rgb) {
	const r = rgb[0];
	const g = rgb[1];
	let b = rgb[2];
	const h = convert.rgb.hsl(rgb)[0];
	const w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.oklab = function (rgb) {
	// Assume sRGB
	const r = srgbNonlinearTransformInv(rgb[0] / 255);
	const g = srgbNonlinearTransformInv(rgb[1] / 255);
	const b = srgbNonlinearTransformInv(rgb[2] / 255);

	const lp = Math.cbrt(0.412_221_470_8 * r + 0.536_332_536_3 * g + 0.051_445_992_9 * b);
	const mp = Math.cbrt(0.211_903_498_2 * r + 0.680_699_545_1 * g + 0.107_396_956_6 * b);
	const sp = Math.cbrt(0.088_302_461_9 * r + 0.281_718_837_6 * g + 0.629_978_700_5 * b);

	const l = 0.210_454_255_3 * lp + 0.793_617_785 * mp - 0.004_072_046_8 * sp;
	const aa = 1.977_998_495_1 * lp - 2.428_592_205 * mp + 0.450_593_709_9 * sp;
	const bb = 0.025_904_037_1 * lp + 0.782_771_766_2 * mp - 0.808_675_766 * sp;

	return [l * 100, aa * 100, bb * 100];
};

convert.rgb.cmyk = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;

	const k = Math.min(1 - r, 1 - g, 1 - b);
	const c = (1 - r - k) / (1 - k) || 0;
	const m = (1 - g - k) / (1 - k) || 0;
	const y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

function comparativeDistance(x, y) {
	/*
		See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
	*/
	return (
		((x[0] - y[0]) ** 2) +
		((x[1] - y[1]) ** 2) +
		((x[2] - y[2]) ** 2)
	);
}

convert.rgb.keyword = function (rgb) {
	const reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	let currentClosestDistance = Number.POSITIVE_INFINITY;
	let currentClosestKeyword;

	for (const keyword of Object.keys(node_modules_color_name)) {
		const value = node_modules_color_name[keyword];

		// Compute comparative distance
		const distance = comparativeDistance(rgb, value);

		// Check if its less, if so set as closest
		if (distance < currentClosestDistance) {
			currentClosestDistance = distance;
			currentClosestKeyword = keyword;
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return node_modules_color_name[keyword];
};

convert.rgb.xyz = function (rgb) {
	// Assume sRGB
	const r = srgbNonlinearTransformInv(rgb[0] / 255);
	const g = srgbNonlinearTransformInv(rgb[1] / 255);
	const b = srgbNonlinearTransformInv(rgb[2] / 255);

	const x = (r * 0.412_456_4) + (g * 0.357_576_1) + (b * 0.180_437_5);
	const y = (r * 0.212_672_9) + (g * 0.715_152_2) + (b * 0.072_175);
	const z = (r * 0.019_333_9) + (g * 0.119_192) + (b * 0.950_304_1);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	const xyz = convert.rgb.xyz(rgb);
	let x = xyz[0];
	let y = xyz[1];
	let z = xyz[2];

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > LAB_FT ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
	y = y > LAB_FT ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
	z = z > LAB_FT ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

	const l = (116 * y) - 16;
	const a = 500 * (x - y);
	const b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	const h = hsl[0] / 360;
	const s = hsl[1] / 100;
	const l = hsl[2] / 100;
	let t3;
	let value;

	if (s === 0) {
		value = l * 255;
		return [value, value, value];
	}

	const t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;

	const t1 = 2 * l - t2;

	const rgb = [0, 0, 0];
	for (let i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}

		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			value = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			value = t2;
		} else if (3 * t3 < 2) {
			value = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			value = t1;
		}

		rgb[i] = value * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	const h = hsl[0];
	let s = hsl[1] / 100;
	let l = hsl[2] / 100;
	let smin = s;
	const lmin = Math.max(l, 0.01);

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	const v = (l + s) / 2;
	const sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	const h = hsv[0] / 60;
	const s = hsv[1] / 100;
	let v = hsv[2] / 100;
	const hi = Math.floor(h) % 6;

	const f = h - Math.floor(h);
	const p = 255 * v * (1 - s);
	const q = 255 * v * (1 - (s * f));
	const t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0: {
			return [v, t, p];
		}

		case 1: {
			return [q, v, p];
		}

		case 2: {
			return [p, v, t];
		}

		case 3: {
			return [p, q, v];
		}

		case 4: {
			return [t, p, v];
		}

		case 5: {
			return [v, p, q];
		}
	}
};

convert.hsv.hsl = function (hsv) {
	const h = hsv[0];
	const s = hsv[1] / 100;
	const v = hsv[2] / 100;
	const vmin = Math.max(v, 0.01);
	let sl;
	let l;

	l = (2 - s) * v;
	const lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	const h = hwb[0] / 360;
	let wh = hwb[1] / 100;
	let bl = hwb[2] / 100;
	const ratio = wh + bl;
	let f;

	// Wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	const i = Math.floor(6 * h);
	const v = 1 - bl;
	f = 6 * h - i;

	// eslint-disable-next-line no-bitwise
	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	const n = wh + f * (v - wh); // Linear interpolation

	let r;
	let g;
	let b;
	/* eslint-disable max-statements-per-line,no-multi-spaces, default-case-last */
	switch (i) {
		default:
		case 6:
		case 0: { r = v;  g = n;  b = wh; break;
		}

		case 1: { r = n;  g = v;  b = wh; break;
		}

		case 2: { r = wh; g = v;  b = n; break;
		}

		case 3: { r = wh; g = n;  b = v; break;
		}

		case 4: { r = n;  g = wh; b = v; break;
		}

		case 5: { r = v;  g = wh; b = n; break;
		}
	}
	/* eslint-enable max-statements-per-line,no-multi-spaces, default-case-last */

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	const c = cmyk[0] / 100;
	const m = cmyk[1] / 100;
	const y = cmyk[2] / 100;
	const k = cmyk[3] / 100;

	const r = 1 - Math.min(1, c * (1 - k) + k);
	const g = 1 - Math.min(1, m * (1 - k) + k);
	const b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	const x = xyz[0] / 100;
	const y = xyz[1] / 100;
	const z = xyz[2] / 100;
	let r;
	let g;
	let b;

	r = (x * 3.240_454_2) + (y * -1.537_138_5) + (z * -0.498_531_4);
	g = (x * -0.969_266) + (y * 1.876_010_8) + (z * 0.041_556);
	b = (x * 0.055_643_4) + (y * -0.204_025_9) + (z * 1.057_225_2);

	// Assume sRGB
	r = srgbNonlinearTransform(r);
	g = srgbNonlinearTransform(g);
	b = srgbNonlinearTransform(b);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	let x = xyz[0];
	let y = xyz[1];
	let z = xyz[2];

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > LAB_FT ? (x ** (1 / 3)) : (7.787 * x) + (16 / 116);
	y = y > LAB_FT ? (y ** (1 / 3)) : (7.787 * y) + (16 / 116);
	z = z > LAB_FT ? (z ** (1 / 3)) : (7.787 * z) + (16 / 116);

	const l = (116 * y) - 16;
	const a = 500 * (x - y);
	const b = 200 * (y - z);

	return [l, a, b];
};

convert.xyz.oklab = function (xyz) {
	const x = xyz[0] / 100;
	const y = xyz[1] / 100;
	const z = xyz[2] / 100;

	const lp = Math.cbrt(0.818_933_010_1 * x + 0.361_866_742_4 * y - 0.128_859_713_7 * z);
	const mp = Math.cbrt(0.032_984_543_6 * x + 0.929_311_871_5 * y + 0.036_145_638_7 * z);
	const sp = Math.cbrt(0.048_200_301_8 * x + 0.264_366_269_1 * y + 0.633_851_707 * z);

	const l = 0.210_454_255_3 * lp + 0.793_617_785 * mp - 0.004_072_046_8 * sp;
	const a = 1.977_998_495_1 * lp - 2.428_592_205 * mp + 0.450_593_709_9 * sp;
	const b = 0.025_904_037_1 * lp + 0.782_771_766_2 * mp - 0.808_675_766 * sp;

	return [l * 100, a * 100, b * 100];
};

convert.oklab.oklch = function (oklab) {
	return convert.lab.lch(oklab);
};

convert.oklab.xyz = function (oklab) {
	const ll = oklab[0] / 100;
	const a = oklab[1] / 100;
	const b = oklab[2] / 100;

	const l = (0.999_999_998 * ll + 0.396_337_792 * a + 0.215_803_758 * b) ** 3;
	const m = (1.000_000_008 * ll - 0.105_561_342 * a - 0.063_854_175 * b) ** 3;
	const s = (1.000_000_055 * ll - 0.089_484_182 * a - 1.291_485_538 * b) ** 3;

	const x = 1.227_013_851 * l - 0.557_799_98 * m + 0.281_256_149 * s;
	const y = -0.040_580_178 * l + 1.112_256_87 * m - 0.071_676_679 * s;
	const z = -0.076_381_285 * l - 0.421_481_978 * m + 1.586_163_22 * s;

	return [x * 100, y * 100, z * 100];
};

convert.oklab.rgb = function (oklab) {
	const ll = oklab[0] / 100;
	const aa = oklab[1] / 100;
	const bb = oklab[2] / 100;

	const l = (ll + 0.396_337_777_4 * aa + 0.215_803_757_3 * bb) ** 3;
	const m = (ll - 0.105_561_345_8 * aa - 0.063_854_172_8 * bb) ** 3;
	const s = (ll - 0.089_484_177_5 * aa - 1.291_485_548 * bb) ** 3;

	// Assume sRGB
	const r = srgbNonlinearTransform(4.076_741_662_1 * l - 3.307_711_591_3 * m + 0.230_969_929_2 * s);
	const g = srgbNonlinearTransform(-1.268_438_004_6 * l + 2.609_757_401_1 * m - 0.341_319_396_5 * s);
	const b = srgbNonlinearTransform(-0.004_196_086_3 * l - 0.703_418_614_7 * m + 1.707_614_701 * s);

	return [r * 255, g * 255, b * 255];
};

convert.oklch.oklab = function (oklch) {
	return convert.lch.lab(oklch);
};

convert.lab.xyz = function (lab) {
	const l = lab[0];
	const a = lab[1];
	const b = lab[2];
	let x;
	let y;
	let z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	const y2 = y ** 3;
	const x2 = x ** 3;
	const z2 = z ** 3;
	y = y2 > LAB_FT ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > LAB_FT ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > LAB_FT ? z2 : (z - 16 / 116) / 7.787;

	// Illuminant D65 XYZ Tristrimulus Values
	// https://en.wikipedia.org/wiki/CIE_1931_color_space
	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	const l = lab[0];
	const a = lab[1];
	const b = lab[2];
	let h;

	const hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	const c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	const l = lch[0];
	const c = lch[1];
	const h = lch[2];

	const hr = h / 360 * 2 * Math.PI;
	const a = c * Math.cos(hr);
	const b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args, saturation = null) {
	const [r, g, b] = args;
	let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation; // Hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	let ansi = 30
		/* eslint-disable no-bitwise */
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));
		/* eslint-enable no-bitwise */

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// Optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	const r = args[0];
	const g = args[1];
	const b = args[2];

	// We use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	// eslint-disable-next-line no-bitwise
	if (r >> 4 === g >> 4 && g >> 4 === b >> 4) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	const ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	args = args[0];

	let color = args % 10;

	// Handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	const mult = (Math.trunc(args > 50) + 1) * 0.5;
	/* eslint-disable no-bitwise */
	const r = ((color & 1) * mult) * 255;
	const g = (((color >> 1) & 1) * mult) * 255;
	const b = (((color >> 2) & 1) * mult) * 255;
	/* eslint-enable no-bitwise */

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	args = args[0];

	// Handle greyscale
	if (args >= 232) {
		const c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	let rem;
	const r = Math.floor(args / 36) / 5 * 255;
	const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	const b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	/* eslint-disable no-bitwise */
	const integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);
	/* eslint-enable no-bitwise */

	const string = integer.toString(16).toUpperCase();
	return '000000'.slice(string.length) + string;
};

convert.hex.rgb = function (args) {
	const match = args.toString(16).match(/[a-f\d]{6}|[a-f\d]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	let colorString = match[0];

	if (match[0].length === 3) {
		colorString = [...colorString].map(char => char + char).join('');
	}

	const integer = Number.parseInt(colorString, 16);
	/* eslint-disable no-bitwise */
	const r = (integer >> 16) & 0xFF;
	const g = (integer >> 8) & 0xFF;
	const b = integer & 0xFF;
	/* eslint-enable no-bitwise */

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const max = Math.max(Math.max(r, g), b);
	const min = Math.min(Math.min(r, g), b);
	const chroma = (max - min);
	let hue;

	const grayscale = chroma < 1 ? min / (1 - chroma) : 0;

	if (chroma <= 0) {
		hue = 0;
	} else if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	const s = hsl[1] / 100;
	const l = hsl[2] / 100;

	const c = l < 0.5 ? (2 * s * l) : (2 * s * (1 - l));

	let f = 0;
	if (c < 1) {
		f = (l - 0.5 * c) / (1 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	const s = hsv[1] / 100;
	const v = hsv[2] / 100;

	const c = s * v;
	let f = 0;

	if (c < 1) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	const h = hcg[0] / 360;
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	if (c === 0) {
		return [g * 255, g * 255, g * 255];
	}

	const pure = [0, 0, 0];
	const hi = (h % 1) * 6;
	const v = hi % 1;
	const w = 1 - v;
	let mg = 0;

	/* eslint-disable max-statements-per-line */
	switch (Math.floor(hi)) {
		case 0: {
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		}

		case 1: {
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		}

		case 2: {
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		}

		case 3: {
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		}

		case 4: {
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		}

		default: {
			pure[0] = 1; pure[1] = 0; pure[2] = w;
		}
	}
	/* eslint-enable max-statements-per-line */

	mg = (1 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255,
	];
};

convert.hcg.hsv = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	const v = c + g * (1 - c);
	let f = 0;

	if (v > 0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;

	const l = g * (1 - c) + 0.5 * c;
	let s = 0;

	if (l > 0 && l < 0.5) {
		s = c / (2 * l);
	} else if (l >= 0.5 && l < 1) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;
	const v = c + g * (1 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	const w = hwb[1] / 100;
	const b = hwb[2] / 100;
	const v = 1 - b;
	const c = v - w;
	let g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65_535) * 255, (apple[1] / 65_535) * 255, (apple[2] / 65_535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65_535, (rgb[1] / 255) * 65_535, (rgb[2] / 255) * 65_535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hsv = convert.gray.hsl;

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	/* eslint-disable no-bitwise */
	const value = Math.round(gray[0] / 100 * 255) & 0xFF;
	const integer = (value << 16) + (value << 8) + value;
	/* eslint-enable no-bitwise */

	const string = integer.toString(16).toUpperCase();
	return '000000'.slice(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	const value = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [value / 255 * 100];
};

;// ../node_modules/color/node_modules/color-convert/route.js


/*
	This function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	const graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	const models = Object.keys(conversions);

	for (let {length} = models, i = 0; i < length; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null,
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	const graph = buildGraph();
	const queue = [fromModel]; // Unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length > 0) {
		const current = queue.pop();
		const adjacents = Object.keys(conversions[current]);

		for (let {length} = adjacents, i = 0; i < length; i++) {
			const adjacent = adjacents[i];
			const node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function route_link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	const path = [graph[toModel].parent, toModel];
	let fn = conversions[graph[toModel].parent][toModel];

	let cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = route_link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

function route(fromModel) {
	const graph = deriveBFS(fromModel);
	const conversion = {};

	const models = Object.keys(graph);
	for (let {length} = models, i = 0; i < length; i++) {
		const toModel = models[i];
		const node = graph[toModel];

		if (node.parent === null) {
			// No possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
}

/* harmony default export */ const color_convert_route = (route);

;// ../node_modules/color/node_modules/color-convert/index.js



const color_convert_convert = {};

const models = Object.keys(conversions);

function wrapRaw(fn) {
	const wrappedFn = function (...args) {
		const arg0 = args[0];
		if (arg0 === undefined || arg0 === null) {
			return arg0;
		}

		if (arg0.length > 1) {
			args = arg0;
		}

		return fn(args);
	};

	// Preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	const wrappedFn = function (...args) {
		const arg0 = args[0];

		if (arg0 === undefined || arg0 === null) {
			return arg0;
		}

		if (arg0.length > 1) {
			args = arg0;
		}

		const result = fn(args);

		// We're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (let {length} = result, i = 0; i < length; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// Preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

for (const fromModel of models) {
	color_convert_convert[fromModel] = {};

	Object.defineProperty(color_convert_convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(color_convert_convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	const routes = color_convert_route(fromModel);
	const routeModels = Object.keys(routes);

	for (const toModel of routeModels) {
		const fn = routes[toModel];

		color_convert_convert[fromModel][toModel] = wrapRounded(fn);
		color_convert_convert[fromModel][toModel].raw = wrapRaw(fn);
	}
}

/* harmony default export */ const color_convert = (color_convert_convert);

;// ../node_modules/color/index.js



const skippedModels = [
	// To be honest, I don't really feel like keyword belongs in color convert, but eh.
	'keyword',

	// Gray conflicts with some method names, and has its own method defined.
	'gray',

	// Shouldn't really be in color-convert either...
	'hex',
];

const hashedModelKeys = {};
for (const model of Object.keys(color_convert)) {
	hashedModelKeys[[...color_convert[model].labels].sort().join('')] = model;
}

const limiters = {};

function Color(object, model) {
	if (!(this instanceof Color)) {
		return new Color(object, model);
	}

	if (model && model in skippedModels) {
		model = null;
	}

	if (model && !(model in color_convert)) {
		throw new Error('Unknown model: ' + model);
	}

	let i;
	let channels;

	if (object == null) { // eslint-disable-line no-eq-null,eqeqeq
		this.model = 'rgb';
		this.color = [0, 0, 0];
		this.valpha = 1;
	} else if (object instanceof Color) {
		this.model = object.model;
		this.color = [...object.color];
		this.valpha = object.valpha;
	} else if (typeof object === 'string') {
		const result = color_string.get(object);
		if (result === null) {
			throw new Error('Unable to parse color from string: ' + object);
		}

		this.model = result.model;
		channels = color_convert[this.model].channels;
		this.color = result.value.slice(0, channels);
		this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
	} else if (object.length > 0) {
		this.model = model || 'rgb';
		channels = color_convert[this.model].channels;
		const newArray = Array.prototype.slice.call(object, 0, channels);
		this.color = zeroArray(newArray, channels);
		this.valpha = typeof object[channels] === 'number' ? object[channels] : 1;
	} else if (typeof object === 'number') {
		// This is always RGB - can be converted later on.
		this.model = 'rgb';
		this.color = [
			(object >> 16) & 0xFF,
			(object >> 8) & 0xFF,
			object & 0xFF,
		];
		this.valpha = 1;
	} else {
		this.valpha = 1;

		const keys = Object.keys(object);
		if ('alpha' in object) {
			keys.splice(keys.indexOf('alpha'), 1);
			this.valpha = typeof object.alpha === 'number' ? object.alpha : 0;
		}

		const hashedKeys = keys.sort().join('');
		if (!(hashedKeys in hashedModelKeys)) {
			throw new Error('Unable to parse color from object: ' + JSON.stringify(object));
		}

		this.model = hashedModelKeys[hashedKeys];

		const {labels} = color_convert[this.model];
		const color = [];
		for (i = 0; i < labels.length; i++) {
			color.push(object[labels[i]]);
		}

		this.color = zeroArray(color);
	}

	// Perform limitations (clamping, etc.)
	if (limiters[this.model]) {
		channels = color_convert[this.model].channels;
		for (i = 0; i < channels; i++) {
			const limit = limiters[this.model][i];
			if (limit) {
				this.color[i] = limit(this.color[i]);
			}
		}
	}

	this.valpha = Math.max(0, Math.min(1, this.valpha));

	if (Object.freeze) {
		Object.freeze(this);
	}
}

Color.prototype = {
	toString() {
		return this.string();
	},

	toJSON() {
		return this[this.model]();
	},

	string(places) {
		let self = this.model in color_string.to ? this : this.rgb();
		self = self.round(typeof places === 'number' ? places : 1);
		const arguments_ = self.valpha === 1 ? self.color : [...self.color, this.valpha];
		return color_string.to[self.model](...arguments_);
	},

	percentString(places) {
		const self = this.rgb().round(typeof places === 'number' ? places : 1);
		const arguments_ = self.valpha === 1 ? self.color : [...self.color, this.valpha];
		return color_string.to.rgb.percent(...arguments_);
	},

	array() {
		return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
	},

	object() {
		const result = {};
		const {channels} = color_convert[this.model];
		const {labels} = color_convert[this.model];

		for (let i = 0; i < channels; i++) {
			result[labels[i]] = this.color[i];
		}

		if (this.valpha !== 1) {
			result.alpha = this.valpha;
		}

		return result;
	},

	unitArray() {
		const rgb = this.rgb().color;
		rgb[0] /= 255;
		rgb[1] /= 255;
		rgb[2] /= 255;

		if (this.valpha !== 1) {
			rgb.push(this.valpha);
		}

		return rgb;
	},

	unitObject() {
		const rgb = this.rgb().object();
		rgb.r /= 255;
		rgb.g /= 255;
		rgb.b /= 255;

		if (this.valpha !== 1) {
			rgb.alpha = this.valpha;
		}

		return rgb;
	},

	round(places) {
		places = Math.max(places || 0, 0);
		return new Color([...this.color.map(roundToPlace(places)), this.valpha], this.model);
	},

	alpha(value) {
		if (value !== undefined) {
			return new Color([...this.color, Math.max(0, Math.min(1, value))], this.model);
		}

		return this.valpha;
	},

	// Rgb
	red: getset('rgb', 0, maxfn(255)),
	green: getset('rgb', 1, maxfn(255)),
	blue: getset('rgb', 2, maxfn(255)),

	hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, value => ((value % 360) + 360) % 360),

	saturationl: getset('hsl', 1, maxfn(100)),
	lightness: getset('hsl', 2, maxfn(100)),

	saturationv: getset('hsv', 1, maxfn(100)),
	value: getset('hsv', 2, maxfn(100)),

	chroma: getset('hcg', 1, maxfn(100)),
	gray: getset('hcg', 2, maxfn(100)),

	white: getset('hwb', 1, maxfn(100)),
	wblack: getset('hwb', 2, maxfn(100)),

	cyan: getset('cmyk', 0, maxfn(100)),
	magenta: getset('cmyk', 1, maxfn(100)),
	yellow: getset('cmyk', 2, maxfn(100)),
	black: getset('cmyk', 3, maxfn(100)),

	x: getset('xyz', 0, maxfn(95.047)),
	y: getset('xyz', 1, maxfn(100)),
	z: getset('xyz', 2, maxfn(108.833)),

	l: getset('lab', 0, maxfn(100)),
	a: getset('lab', 1),
	b: getset('lab', 2),

	keyword(value) {
		if (value !== undefined) {
			return new Color(value);
		}

		return color_convert[this.model].keyword(this.color);
	},

	hex(value) {
		if (value !== undefined) {
			return new Color(value);
		}

		return color_string.to.hex(...this.rgb().round().color);
	},

	hexa(value) {
		if (value !== undefined) {
			return new Color(value);
		}

		const rgbArray = this.rgb().round().color;

		let alphaHex = Math.round(this.valpha * 255).toString(16).toUpperCase();
		if (alphaHex.length === 1) {
			alphaHex = '0' + alphaHex;
		}

		return color_string.to.hex(...rgbArray) + alphaHex;
	},

	rgbNumber() {
		const rgb = this.rgb().color;
		return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
	},

	luminosity() {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		const rgb = this.rgb().color;

		const lum = [];
		for (const [i, element] of rgb.entries()) {
			const chan = element / 255;
			lum[i] = (chan <= 0.04045) ? chan / 12.92 : ((chan + 0.055) / 1.055) ** 2.4;
		}

		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast(color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		const lum1 = this.luminosity();
		const lum2 = color2.luminosity();

		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}

		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level(color2) {
		// https://www.w3.org/TR/WCAG/#contrast-enhanced
		const contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	isDark() {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		const rgb = this.rgb().color;
		const yiq = (rgb[0] * 2126 + rgb[1] * 7152 + rgb[2] * 722) / 10000;
		return yiq < 128;
	},

	isLight() {
		return !this.isDark();
	},

	negate() {
		const rgb = this.rgb();
		for (let i = 0; i < 3; i++) {
			rgb.color[i] = 255 - rgb.color[i];
		}

		return rgb;
	},

	lighten(ratio) {
		const hsl = this.hsl();
		hsl.color[2] += hsl.color[2] * ratio;
		return hsl;
	},

	darken(ratio) {
		const hsl = this.hsl();
		hsl.color[2] -= hsl.color[2] * ratio;
		return hsl;
	},

	saturate(ratio) {
		const hsl = this.hsl();
		hsl.color[1] += hsl.color[1] * ratio;
		return hsl;
	},

	desaturate(ratio) {
		const hsl = this.hsl();
		hsl.color[1] -= hsl.color[1] * ratio;
		return hsl;
	},

	whiten(ratio) {
		const hwb = this.hwb();
		hwb.color[1] += hwb.color[1] * ratio;
		return hwb;
	},

	blacken(ratio) {
		const hwb = this.hwb();
		hwb.color[2] += hwb.color[2] * ratio;
		return hwb;
	},

	grayscale() {
		// http://en.wikipedia.org/wiki/Grayscale#Converting_colour_to_grayscale
		const rgb = this.rgb().color;
		const value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		return Color.rgb(value, value, value);
	},

	fade(ratio) {
		return this.alpha(this.valpha - (this.valpha * ratio));
	},

	opaquer(ratio) {
		return this.alpha(this.valpha + (this.valpha * ratio));
	},

	rotate(degrees) {
		const hsl = this.hsl();
		let hue = hsl.color[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		hsl.color[0] = hue;
		return hsl;
	},

	mix(mixinColor, weight) {
		// Ported from sass implementation in C
		// https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
		if (!mixinColor || !mixinColor.rgb) {
			throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
		}

		const color1 = mixinColor.rgb();
		const color2 = this.rgb();
		const p = weight === undefined ? 0.5 : weight;

		const w = 2 * p - 1;
		const a = color1.alpha() - color2.alpha();

		const w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2;
		const w2 = 1 - w1;

		return Color.rgb(
			w1 * color1.red() + w2 * color2.red(),
			w1 * color1.green() + w2 * color2.green(),
			w1 * color1.blue() + w2 * color2.blue(),
			color1.alpha() * p + color2.alpha() * (1 - p));
	},
};

// Model conversion methods and static constructors
for (const model of Object.keys(color_convert)) {
	if (skippedModels.includes(model)) {
		continue;
	}

	const {channels} = color_convert[model];

	// Conversion methods
	Color.prototype[model] = function (...arguments_) {
		if (this.model === model) {
			return new Color(this);
		}

		if (arguments_.length > 0) {
			return new Color(arguments_, model);
		}

		return new Color([...assertArray(color_convert[this.model][model].raw(this.color)), this.valpha], model);
	};

	// 'static' construction methods
	Color[model] = function (...arguments_) {
		let color = arguments_[0];
		if (typeof color === 'number') {
			color = zeroArray(arguments_, channels);
		}

		return new Color(color, model);
	};
}

function roundTo(number, places) {
	return Number(number.toFixed(places));
}

function roundToPlace(places) {
	return function (number) {
		return roundTo(number, places);
	};
}

function getset(model, channel, modifier) {
	model = Array.isArray(model) ? model : [model];

	for (const m of model) {
		(limiters[m] ||= [])[channel] = modifier;
	}

	model = model[0];

	return function (value) {
		let result;

		if (value !== undefined) {
			if (modifier) {
				value = modifier(value);
			}

			result = this[model]();
			result.color[channel] = value;
			return result;
		}

		result = this[model]().color[channel];
		if (modifier) {
			result = modifier(result);
		}

		return result;
	};
}

function maxfn(max) {
	return function (v) {
		return Math.max(0, Math.min(max, v));
	};
}

function assertArray(value) {
	return Array.isArray(value) ? value : [value];
}

function zeroArray(array, length) {
	for (let i = 0; i < length; i++) {
		if (typeof array[i] !== 'number') {
			array[i] = 0;
		}
	}

	return array;
}

/* harmony default export */ const node_modules_color = (Color);

// EXTERNAL MODULE: ../node_modules/lit/index.js + 2 modules
var lit = __webpack_require__(52689);
// EXTERNAL MODULE: ../node_modules/@arcgis/lumina/dist/index.js + 15 modules
var dist = __webpack_require__(48747);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/dom.js
var dom = __webpack_require__(25450);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/global.js
var global = __webpack_require__(32399);
;// ../node_modules/@esri/calcite-components/dist/chunks/utils4.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */


const CSS = {
  channel: "channel",
  channels: "channels",
  colorField: "color-field",
  colorFieldScope: "scope--color-field",
  colorMode: "color-mode",
  colorModeContainer: "color-mode-container",
  container: "container",
  control: "control",
  controlAndScope: "control-and-scope",
  controlSection: "control-section",
  deleteColor: "delete-color",
  header: "header",
  hexAndChannelsGroup: "hex-and-channels-group",
  hexOptions: "color-hex-options",
  hueScope: "scope--hue",
  hueSlider: "hue-slider",
  opacityScope: "scope--opacity",
  opacitySlider: "opacity-slider",
  preview: "preview",
  previewAndSliders: "preview-and-sliders",
  saveColor: "save-color",
  savedColor: "saved-color",
  savedColors: "saved-colors",
  savedColorsButtons: "saved-colors-buttons",
  savedColorsSection: "saved-colors-section",
  scope: "scope",
  section: "section",
  slider: "slider",
  sliders: "sliders",
  splitSection: "section--split"
};
const DEFAULT_COLOR = node_modules_color("#007AC2");
const DEFAULT_STORAGE_KEY_PREFIX = "calcite-color-";
const RGB_LIMITS = {
  r: 255,
  g: 255,
  b: 255
};
const HSV_LIMITS = {
  h: 360,
  s: 100,
  v: 100
};
const HUE_LIMIT_CONSTRAINED = HSV_LIMITS.h - 1;
const OPACITY_LIMITS = {
  min: 0,
  max: 100
};
const STATIC_DIMENSIONS = {
  s: {
    gap: parseInt(global.j),
    slider: {
      height: 12
    },
    thumb: {
      radius: 7
    },
    preview: {
      size: 20
    },
    minWidth: 200
  },
  m: {
    gap: parseInt(global.i),
    slider: {
      height: 12
    },
    thumb: {
      radius: 7
    },
    preview: {
      size: 24
    },
    minWidth: 240
  },
  l: {
    gap: parseInt(global.h),
    slider: {
      height: 12
    },
    thumb: {
      radius: 7
    },
    preview: {
      size: 32
    },
    minWidth: 304
  }
};
const SCOPE_SIZE = 1;
const hexChar = /^[0-9A-F]$/i;
const shorthandHex = /^#[0-9A-F]{3}$/i;
const longhandHex = /^#[0-9A-F]{6}$/i;
const shorthandHexWithAlpha = /^#[0-9A-F]{4}$/i;
const longhandHexWithAlpha = /^#[0-9A-F]{8}$/i;
const alphaToOpacity = (alpha) => Number((alpha * 100).toFixed());
const opacityToAlpha = (opacity) => Number((opacity / 100).toFixed(2));
function isValidHex(hex, hasAlpha = false) {
  return isShorthandHex(hex, hasAlpha) || isLonghandHex(hex, hasAlpha);
}
function evaluateHex(hex, length, pattern) {
  if (!hex) {
    return false;
  }
  return hex.length === length && pattern.test(hex);
}
function isShorthandHex(hex, hasAlpha = false) {
  const hexLength = hasAlpha ? 5 : 4;
  const hexPattern = hasAlpha ? shorthandHexWithAlpha : shorthandHex;
  return evaluateHex(hex, hexLength, hexPattern);
}
function isLonghandHex(hex, hasAlpha = false) {
  const hexLength = hasAlpha ? 9 : 7;
  const hexPattern = hasAlpha ? longhandHexWithAlpha : longhandHex;
  return evaluateHex(hex, hexLength, hexPattern);
}
function normalizeHex(hex, hasAlpha = false, convertFromHexToHexa = false) {
  hex = hex.toLowerCase();
  if (!hex.startsWith("#")) {
    hex = `#${hex}`;
  }
  if (isShorthandHex(hex, hasAlpha)) {
    return rgbToHex(hexToRGB(hex, hasAlpha));
  }
  if (hasAlpha && convertFromHexToHexa && isValidHex(
    hex,
    false
    /* we only care about RGB hex for conversion */
  )) {
    const isShorthand = isShorthandHex(hex, false);
    return rgbToHex(hexToRGB(`${hex}${isShorthand ? "f" : "ff"}`, true));
  }
  return hex;
}
function hexify(color, hasAlpha = false) {
  return hasAlpha ? color.hexa() : color.hex();
}
function rgbToHex(color) {
  const { r, g, b } = color;
  const rChars = numToHex(r);
  const gChars = numToHex(g);
  const bChars = numToHex(b);
  const alphaChars = "a" in color ? numToHex(color.a * 255) : "";
  return `#${rChars}${gChars}${bChars}${alphaChars}`.toLowerCase();
}
function numToHex(num) {
  return num.toString(16).padStart(2, "0");
}
function normalizeAlpha(colorObject) {
  const normalized = {
    ...colorObject,
    a: colorObject.alpha ?? 1
    /* Color() will omit alpha if 1 */
  };
  delete normalized.alpha;
  return normalized;
}
function normalizeColor(alphaColorObject) {
  const normalized = { ...alphaColorObject, alpha: alphaColorObject.a ?? 1 };
  delete normalized.a;
  return normalized;
}
function hexToRGB(hex, hasAlpha = false) {
  if (!isValidHex(hex, hasAlpha)) {
    return null;
  }
  hex = hex.replace("#", "");
  let r;
  let g;
  let b;
  let a;
  const isShorthand = hex.length === 3 || hex.length === 4;
  if (isShorthand) {
    const [first, second, third, fourth] = hex.split("");
    r = parseInt(`${first}${first}`, 16);
    g = parseInt(`${second}${second}`, 16);
    b = parseInt(`${third}${third}`, 16);
    a = parseInt(`${fourth}${fourth}`, 16) / 255;
  } else {
    r = parseInt(hex.slice(0, 2), 16);
    g = parseInt(hex.slice(2, 4), 16);
    b = parseInt(hex.slice(4, 6), 16);
    a = parseInt(hex.slice(6, 8), 16) / 255;
  }
  return isNaN(a) ? { r, g, b } : { r, g, b, a };
}
const enumify = (x) => x;
const CSSColorMode = enumify({
  HEX: "hex",
  HEXA: "hexa",
  RGB_CSS: "rgb-css",
  RGBA_CSS: "rgba-css",
  HSL_CSS: "hsl-css",
  HSLA_CSS: "hsla-css"
});
const ObjectColorMode = enumify({
  RGB: "rgb",
  RGBA: "rgba",
  HSL: "hsl",
  HSLA: "hsla",
  HSV: "hsv",
  HSVA: "hsva"
});
function parseMode(colorValue) {
  if (typeof colorValue === "string") {
    if (colorValue.startsWith("#")) {
      const { length } = colorValue;
      if (length === 4 || length === 7) {
        return CSSColorMode.HEX;
      }
      if (length === 5 || length === 9) {
        return CSSColorMode.HEXA;
      }
    }
    if (colorValue.startsWith("rgba(")) {
      return CSSColorMode.RGBA_CSS;
    }
    if (colorValue.startsWith("rgb(")) {
      return CSSColorMode.RGB_CSS;
    }
    if (colorValue.startsWith("hsl(")) {
      return CSSColorMode.HSL_CSS;
    }
    if (colorValue.startsWith("hsla(")) {
      return CSSColorMode.HSLA_CSS;
    }
  }
  if (typeof colorValue === "object") {
    if (hasChannels(colorValue, "r", "g", "b")) {
      return hasChannels(colorValue, "a") ? ObjectColorMode.RGBA : ObjectColorMode.RGB;
    }
    if (hasChannels(colorValue, "h", "s", "l")) {
      return hasChannels(colorValue, "a") ? ObjectColorMode.HSLA : ObjectColorMode.HSL;
    }
    if (hasChannels(colorValue, "h", "s", "v")) {
      return hasChannels(colorValue, "a") ? ObjectColorMode.HSVA : ObjectColorMode.HSV;
    }
  }
  return null;
}
function hasChannels(colorObject, ...channels) {
  return channels.every((channel) => channel && colorObject && `${channel}` in colorObject);
}
function colorEqual(value1, value2) {
  return value1?.rgb().array().toString() === value2?.rgb().array().toString();
}
function alphaCompatible(mode) {
  return mode === CSSColorMode.HEXA || mode === CSSColorMode.RGBA_CSS || mode === CSSColorMode.HSLA_CSS || mode === ObjectColorMode.RGBA || mode === ObjectColorMode.HSLA || mode === ObjectColorMode.HSVA;
}
function toAlphaMode(mode) {
  const alphaMode = mode === CSSColorMode.HEX ? CSSColorMode.HEXA : mode === CSSColorMode.RGB_CSS ? CSSColorMode.RGBA_CSS : mode === CSSColorMode.HSL_CSS ? CSSColorMode.HSLA_CSS : mode === ObjectColorMode.RGB ? ObjectColorMode.RGBA : mode === ObjectColorMode.HSL ? ObjectColorMode.HSLA : mode === ObjectColorMode.HSV ? ObjectColorMode.HSVA : mode;
  return alphaMode;
}
function toNonAlphaMode(mode) {
  const nonAlphaMode = mode === CSSColorMode.HEXA ? CSSColorMode.HEX : mode === CSSColorMode.RGBA_CSS ? CSSColorMode.RGB_CSS : mode === CSSColorMode.HSLA_CSS ? CSSColorMode.HSL_CSS : mode === ObjectColorMode.RGBA ? ObjectColorMode.RGB : mode === ObjectColorMode.HSLA ? ObjectColorMode.HSL : mode === ObjectColorMode.HSVA ? ObjectColorMode.HSV : mode;
  return nonAlphaMode;
}
const borderWidthInPx = 1;
const inlineSizeBorderTotalWidth = borderWidthInPx * 2;
function getSliderWidth(availableWidth, activeStaticDimensions, hasAlpha) {
  const previewWidth = hasAlpha ? STATIC_DIMENSIONS["l"].preview.size : activeStaticDimensions.preview.size;
  const effectiveWidth = availableWidth - inlineSizeBorderTotalWidth;
  const inlineSpaceAroundElements = activeStaticDimensions.gap * 3;
  return Math.max(effectiveWidth - inlineSpaceAroundElements - previewWidth, 0);
}
function getColorFieldDimensions(availableWidth) {
  const colorFieldAspectRatio = 1.8;
  const effectiveWidth = availableWidth - inlineSizeBorderTotalWidth;
  return {
    width: Math.max(effectiveWidth, 0),
    height: Math.max(Math.floor(effectiveWidth / colorFieldAspectRatio), 0)
  };
}


// EXTERNAL MODULE: ../node_modules/@lit/reactive-element/node/css-tag.js
var css_tag = __webpack_require__(56385);
;// ../node_modules/@esri/calcite-components/dist/components/calcite-color-picker-swatch/customElement.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */








const customElement_CSS = {
  swatch: "swatch",
  noColorSwatch: "swatch--no-color",
  checker: "checker"
};
const COLORS = {
  borderLight: "rgba(0, 0, 0, 0.3)",
  borderDark: "rgba(255, 255, 255, 0.15)"
};
const checkerSquareSize = 4;
const CHECKER_DIMENSIONS = {
  squareSize: checkerSquareSize,
  size: checkerSquareSize * 2
};
const styles = (0,css_tag/* css */.AH)`:host{position:relative;display:inline-flex}:host([scale=s]){block-size:1.25rem;inline-size:1.25rem}:host([scale=m]){block-size:1.5rem;inline-size:1.5rem}:host([scale=l]){block-size:2rem;inline-size:2rem}.swatch{overflow:hidden;block-size:inherit;inline-size:inherit}.swatch rect{transition-property:all;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}.swatch--no-color rect{fill:var(--calcite-color-foreground-1)}.swatch--no-color line{stroke:var(--calcite-color-status-danger)}.checker{fill:#cacaca}:host([hidden]){display:none}[hidden]{display:none}`;
class ColorPickerSwatch extends dist/* LitElement */.WF {
  constructor() {
    super(...arguments);
    this.active = false;
    this.scale = "m";
  }
  static {
    this.properties = { active: [7, {}, { reflect: true, type: Boolean }], color: 1, scale: [3, {}, { reflect: true }] };
  }
  static {
    this.styles = styles;
  }
  load() {
    this.handleColorChange(this.color);
  }
  willUpdate(changes) {
    if (changes.has("color")) {
      this.handleColorChange(this.color);
    }
  }
  handleColorChange(color) {
    this.internalColor = color ? node_modules_color(color) : null;
  }
  render() {
    const isEmpty = !this.internalColor;
    const classes = {
      [customElement_CSS.swatch]: true,
      [customElement_CSS.noColorSwatch]: isEmpty
    };
    return (0,lit/* html */.qy)`<svg class=${(0,dist/* safeClassMap */.CP)(classes)} xmlns=http://www.w3.org/2000/svg>${this.renderSwatch()}</svg>`;
  }
  renderSwatch() {
    const { active, el, internalColor } = this;
    const borderRadius = active ? "100%" : "0";
    const theme = (0,dom.C)(el);
    const borderColor = theme === "light" ? COLORS.borderLight : COLORS.borderDark;
    const isEmpty = !internalColor;
    const commonSwatchProps = {
      height: "100%",
      rx: borderRadius,
      stroke: borderColor,
      strokeWidth: "2",
      width: "100%"
    };
    if (isEmpty) {
      return (0,lit/* svg */.JW)`<clipPath id=shape><rect height=100% rx=${borderRadius ?? lit/* nothing */.s6} width=100% /></clipPath>${this.renderSwatchRect({
        clipPath: `inset(0 round ${borderRadius})`,
        ...commonSwatchProps
      })}<line clip-path=url(#shape) stroke-width=3 x1=100% x2=0 y1=0 y2=100% />`;
    }
    const alpha = internalColor.alpha();
    const hex = hexify(internalColor);
    const hexa = hexify(internalColor, alpha < 1);
    return (0,lit/* svg */.JW)`<title>${hexa}</title><defs><pattern height=${CHECKER_DIMENSIONS.size} id=checker patternUnits=userSpaceOnUse width=${CHECKER_DIMENSIONS.size} x=0 y=0><rect class=${(0,dist/* safeClassMap */.CP)(customElement_CSS.checker)} height=${CHECKER_DIMENSIONS.squareSize} width=${CHECKER_DIMENSIONS.squareSize} x=0 y=0 /><rect class=${(0,dist/* safeClassMap */.CP)(customElement_CSS.checker)} height=${CHECKER_DIMENSIONS.squareSize} width=${CHECKER_DIMENSIONS.squareSize} x=${CHECKER_DIMENSIONS.squareSize} y=${CHECKER_DIMENSIONS.squareSize} /></pattern></defs>${this.renderSwatchRect({
      fill: "url(#checker)",
      rx: commonSwatchProps.rx,
      height: commonSwatchProps.height,
      width: commonSwatchProps.width
    })}${this.renderSwatchRect({
      clipPath: alpha < 1 ? "polygon(100% 0, 0 0, 0 100%)" : `inset(0 round ${borderRadius})`,
      fill: hex,
      ...commonSwatchProps
    })}${alpha < 1 ? this.renderSwatchRect({
      clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
      fill: hexa,
      key: "opacity-fill",
      ...commonSwatchProps
    }) : null}`;
  }
  renderSwatchRect({ clipPath, fill, height, key, rx, stroke, strokeWidth, width }) {
    return (0,keyed/* keyed */.D)(key, (0,lit/* svg */.JW)`<rect clip-path=${clipPath ?? lit/* nothing */.s6} fill=${fill ?? lit/* nothing */.s6} height=${height ?? lit/* nothing */.s6} rx=${rx ?? lit/* nothing */.s6} stroke=${stroke ?? lit/* nothing */.s6} stroke-width=${strokeWidth ?? lit/* nothing */.s6} width=${width ?? lit/* nothing */.s6} />`);
  }
}
(0,runtime.c)("calcite-color-picker-swatch", ColorPickerSwatch);


;// ../node_modules/@esri/calcite-components/dist/components/calcite-color-picker-swatch/index.js

// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/components/calcite-input-message/index.js + 1 modules
var calcite_input_message = __webpack_require__(45177);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/components/calcite-progress/index.js + 1 modules
var calcite_progress = __webpack_require__(16584);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/components/calcite-icon/index.js + 1 modules
var calcite_icon = __webpack_require__(96446);
// EXTERNAL MODULE: ../node_modules/lit-html/node/directives/live.js
var live = __webpack_require__(71717);
// EXTERNAL MODULE: ../node_modules/lit-html/node/directives/ref.js + 1 modules
var ref = __webpack_require__(59276);
// EXTERNAL MODULE: ../node_modules/@arcgis/lumina/dist/controllers/index.js + 1 modules
var controllers = __webpack_require__(73339);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/form.js
var chunks_form = __webpack_require__(67226);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/interactive.js
var interactive = __webpack_require__(28070);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/label.js
var label = __webpack_require__(85352);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/component.js
var component = __webpack_require__(66865);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/Validation.js
var Validation = __webpack_require__(53939);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/input.js
var chunks_input = __webpack_require__(16690);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/useT9n.js
var useT9n = __webpack_require__(13478);
;// ../node_modules/@esri/calcite-components/dist/components/calcite-input-text/customElement.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */















const calcite_input_text_customElement_CSS = {
  loader: "loader",
  clearButton: "clear-button",
  editingEnabled: "editing-enabled",
  inlineChild: "inline-child",
  inputIcon: "icon",
  prefix: "prefix",
  suffix: "suffix",
  wrapper: "element-wrapper",
  inputWrapper: "wrapper",
  actionWrapper: "action-wrapper"
};
const IDS = {
  validationMessage: "inputTextValidationMessage"
};
const SLOTS = {
  action: "action"
};
const customElement_styles = (0,css_tag/* css */.AH)`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input{padding-inline-start:.5rem;padding-inline-end:var(--calcite-internal-input-text-input-padding-inline-end, .5rem)}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .prefix,:host([scale=s]) .suffix{padding-inline:.5rem}:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=m]) input{padding-inline-start:.75rem;padding-inline-end:var(--calcite-internal-input-text-input-padding-inline-end, .75rem)}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .prefix,:host([scale=m]) .suffix{padding-inline:.75rem}:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=l]) input{padding-inline-start:1rem;padding-inline-end:var(--calcite-internal-input-text-input-padding-inline-end, 1rem)}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .prefix,:host([scale=l]) .suffix{padding-inline:1rem}:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}input{transition:var(--calcite-animation-timing),block-size 0,outline-offset 0s;-webkit-appearance:none;position:relative;margin:0;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;text-overflow:ellipsis;border-radius:0;background-color:var(--calcite-color-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-1)}input:placeholder-shown{text-overflow:ellipsis}input{border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);color:var(--calcite-color-text-1)}input::placeholder,input:-ms-input-placeholder,input::-ms-input-placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-3)}input:focus{border-color:var(--calcite-color-brand);color:var(--calcite-color-text-1)}input[readonly]{background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium)}input[readonly]:focus{color:var(--calcite-color-text-1)}calcite-icon{color:var(--calcite-color-text-3)}input{outline-color:transparent}input:focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}:host([status=invalid]) input{border-color:var(--calcite-color-status-danger)}:host([status=invalid]) input:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}:host([scale=s]) .icon{inset-inline-start:.5rem}:host([scale=m]) .icon{inset-inline-start:.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;z-index:var(--calcite-z-index);display:block;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}.clear-button{pointer-events:initial;order:4;margin:0;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-color-foreground-2);transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out}.clear-button:hover calcite-icon{color:var(--calcite-color-text-1);transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out}.clear-button:active{background-color:var(--calcite-color-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-color-text-1)}.clear-button:focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}.clear-button:disabled{opacity:var(--calcite-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-color-text-2)}.prefix{order:2;border-inline-end-width:0px;inline-size:var(--calcite-input-prefix-size, auto)}.suffix{order:5;border-inline-start-width:0px;inline-size:var(--calcite-input-suffix-size, auto)}:host([alignment=start]) input{text-align:start}:host([alignment=end]) input{text-align:end}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:host(.input--no-bottom-border) input{border-block-end-width:0px}:host(.input--no-top-border) input{border-block-start-width:0px}:host(.input--no-right-border) input{border-inline-end:0}:host(.input--no-left-border) input{border-inline-start:0}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-color-border-1)}input.inline-child{background-color:transparent;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out}input.inline-child .editing-enabled{background-color:inherit}input.inline-child:not(.editing-enabled){display:flex;cursor:pointer;text-overflow:ellipsis;border-color:transparent;padding-inline-start:0}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:.5rem}:host([scale=s]) .validation-container{padding-block-start:.25rem}::slotted(input[slot=hidden-form-input]){margin:0!important;opacity:0!important;outline:none!important;padding:0!important;position:absolute!important;inset:0!important;transform:none!important;-webkit-appearance:none!important;z-index:-1!important}:host([hidden]){display:none}[hidden]{display:none}::placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-input-placeholder-text-color, var(--calcite-color-text-3))}`;
class InputText extends dist/* LitElement */.WF {
  constructor() {
    super();
    this.actionWrapperEl = (0,ref/* createRef */._)();
    this.attributeWatch = (0,controllers/* useWatchAttributes */.oW)(["autofocus", "enterkeyhint", "inputmode", "spellcheck"], this.handleGlobalAttributesChanged);
    this.inputWrapperEl = (0,ref/* createRef */._)();
    this.onHiddenFormInputInput = (event) => {
      if (event.target.name === this.name) {
        this.setValue({
          value: event.target.value,
          origin: "direct"
        });
      }
      this.setFocus();
      event.stopPropagation();
    };
    this.previousValueOrigin = "initial";
    this.userChangedValue = false;
    this._value = "";
    this.messages = (0,useT9n.u)();
    this.slottedActionElDisabledInternally = false;
    this.alignment = "start";
    this.clearable = false;
    this.disabled = false;
    this.editingEnabled = false;
    this.iconFlipRtl = false;
    this.loading = false;
    this.readOnly = false;
    this.required = false;
    this.scale = "m";
    this.status = "idle";
    this.validity = {
      valid: false,
      badInput: false,
      customError: false,
      patternMismatch: false,
      rangeOverflow: false,
      rangeUnderflow: false,
      stepMismatch: false,
      tooLong: false,
      tooShort: false,
      typeMismatch: false,
      valueMissing: false
    };
    this.calciteInputTextChange = (0,dist/* createEvent */.lh)();
    this.calciteInputTextInput = (0,dist/* createEvent */.lh)();
    this.calciteInternalInputTextBlur = (0,dist/* createEvent */.lh)();
    this.calciteInternalInputTextFocus = (0,dist/* createEvent */.lh)();
    this.listen("click", this.clickHandler);
    this.listen("keydown", this.keyDownHandler);
  }
  static {
    this.properties = { slottedActionElDisabledInternally: [16, {}, { state: true }], alignment: [3, {}, { reflect: true }], autocomplete: [0, {}, { attribute: false }], clearable: [7, {}, { reflect: true, type: Boolean }], disabled: [7, {}, { reflect: true, type: Boolean }], editingEnabled: [7, {}, { reflect: true, type: Boolean }], form: [3, {}, { reflect: true }], icon: [3, { converter: dist/* stringOrBoolean */.pf }, { reflect: true }], iconFlipRtl: [7, {}, { reflect: true, type: Boolean }], label: 1, loading: [7, {}, { reflect: true, type: Boolean }], maxLength: [11, {}, { reflect: true, type: Number }], messageOverrides: [0, {}, { attribute: false }], minLength: [11, {}, { reflect: true, type: Number }], name: [3, {}, { reflect: true }], pattern: 1, placeholder: 1, prefixText: 1, readOnly: [7, {}, { reflect: true, type: Boolean }], required: [7, {}, { reflect: true, type: Boolean }], scale: [3, {}, { reflect: true }], status: [3, {}, { reflect: true }], suffixText: 1, validationIcon: [3, { converter: dist/* stringOrBoolean */.pf }, { reflect: true }], validationMessage: 1, validity: [0, {}, { attribute: false }], value: 1 };
  }
  static {
    this.styles = customElement_styles;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    const oldValue = this._value;
    if (value !== oldValue) {
      this._value = value;
      this.valueWatcher(value, oldValue);
    }
  }
  async selectText() {
    this.childEl?.select();
  }
  async setFocus() {
    await (0,component.c)(this);
    this.childEl?.focus();
  }
  connectedCallback() {
    super.connectedCallback();
    this.inlineEditableEl = this.el.closest("calcite-inline-editable");
    if (this.inlineEditableEl) {
      this.editingEnabled = this.inlineEditableEl.editingEnabled || false;
    }
    (0,label.c)(this);
    (0,chunks_form.c)(this);
    this.el.addEventListener(chunks_form.i, this.onHiddenFormInputInput);
  }
  async load() {
    this.requestedIcon = (0,dom.v)({}, this.icon, "text");
    this.setPreviousEmittedValue(this.value);
    this.setPreviousValue(this.value);
  }
  willUpdate(changes) {
    if (changes.has("icon")) {
      this.requestedIcon = (0,dom.v)({}, this.icon, "text");
    }
  }
  updated() {
    (0,interactive.u)(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    (0,label.d)(this);
    (0,chunks_form.d)(this);
    this.el.removeEventListener(chunks_form.i, this.onHiddenFormInputInput);
  }
  get isClearable() {
    return this.clearable && this.value.length > 0;
  }
  handleGlobalAttributesChanged() {
    this.requestUpdate();
  }
  valueWatcher(newValue, previousValue) {
    if (!this.userChangedValue) {
      this.setValue({
        origin: "direct",
        previousValue,
        value: !newValue ? "" : newValue
      });
    }
    this.userChangedValue = false;
  }
  keyDownHandler(event) {
    if (this.readOnly || this.disabled || event.defaultPrevented) {
      return;
    }
    if (this.isClearable && event.key === "Escape") {
      this.clearInputTextValue(event);
      event.preventDefault();
    }
    if (event.key === "Enter") {
      if ((0,chunks_form.s)(this)) {
        event.preventDefault();
      }
    }
  }
  onLabelClick() {
    this.setFocus();
  }
  clearInputTextValue(nativeEvent) {
    this.setValue({
      committing: true,
      nativeEvent,
      origin: "user",
      value: ""
    });
  }
  emitChangeIfUserModified() {
    if (this.previousValueOrigin === "user" && this.value !== this.previousEmittedValue) {
      this.calciteInputTextChange.emit();
      this.setPreviousEmittedValue(this.value);
    }
  }
  inputTextBlurHandler() {
    this.calciteInternalInputTextBlur.emit({
      element: this.childEl,
      value: this.value
    });
    this.emitChangeIfUserModified();
  }
  clickHandler(event) {
    if (this.disabled) {
      return;
    }
    const composedPath = event.composedPath();
    if (!composedPath.includes(this.inputWrapperEl.value) || composedPath.includes(this.actionWrapperEl.value)) {
      return;
    }
    this.setFocus();
  }
  inputTextFocusHandler() {
    this.calciteInternalInputTextFocus.emit({
      element: this.childEl,
      value: this.value
    });
  }
  inputTextInputHandler(nativeEvent) {
    if (this.disabled || this.readOnly) {
      return;
    }
    this.setValue({
      nativeEvent,
      origin: "user",
      value: nativeEvent.target.value
    });
  }
  inputTextKeyDownHandler(event) {
    if (this.disabled || this.readOnly) {
      return;
    }
    if (event.key === "Enter") {
      this.emitChangeIfUserModified();
    }
  }
  syncHiddenFormInput(input) {
    (0,chunks_input.s)("text", this, input);
  }
  setChildElRef(el) {
    this.childEl = el;
  }
  setInputValue(newInputValue) {
    if (!this.childEl) {
      return;
    }
    this.childEl.value = newInputValue;
  }
  setPreviousEmittedValue(value) {
    this.previousEmittedValue = value;
  }
  setPreviousValue(value) {
    this.previousValue = value;
  }
  setValue({ committing = false, nativeEvent, origin, previousValue, value }) {
    this.setPreviousValue(previousValue ?? this.value);
    this.previousValueOrigin = origin;
    this.userChangedValue = origin === "user" && value !== this.value;
    this.value = value;
    if (origin === "direct") {
      this.setInputValue(value);
      this.setPreviousEmittedValue(value);
    }
    if (nativeEvent) {
      const calciteInputTextInputEvent = this.calciteInputTextInput.emit();
      if (calciteInputTextInputEvent.defaultPrevented) {
        this.value = this.previousValue;
      } else if (committing) {
        this.emitChangeIfUserModified();
      }
    }
  }
  render() {
    const dir = (0,dom.g)(this.el);
    const loader = (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(calcite_input_text_customElement_CSS.loader)}><calcite-progress .label=${this.messages.loading} type=indeterminate></calcite-progress></div>`;
    const inputClearButton = (0,lit/* html */.qy)`<button .ariaLabel=${this.messages.clear} class=${(0,dist/* safeClassMap */.CP)(calcite_input_text_customElement_CSS.clearButton)} .disabled=${this.disabled || this.readOnly} @click=${this.clearInputTextValue} tabindex=-1 type=button><calcite-icon icon=x .scale=${(0,component.g)(this.scale)}></calcite-icon></button>`;
    const iconEl = (0,lit/* html */.qy)`<calcite-icon class=${(0,dist/* safeClassMap */.CP)(calcite_input_text_customElement_CSS.inputIcon)} .flipRtl=${this.iconFlipRtl} .icon=${this.requestedIcon} .scale=${(0,component.g)(this.scale)}></calcite-icon>`;
    const prefixText = (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(calcite_input_text_customElement_CSS.prefix)}>${this.prefixText}</div>`;
    const suffixText = (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(calcite_input_text_customElement_CSS.suffix)}>${this.suffixText}</div>`;
    const childEl = (0,lit/* html */.qy)`<input aria-errormessage=${IDS.validationMessage} .ariaInvalid=${this.status === "invalid"} .ariaLabel=${(0,label.g)(this)} autocomplete=${this.autocomplete ?? lit/* nothing */.s6} .autofocus=${this.el.autofocus} class=${(0,dist/* safeClassMap */.CP)({
      [calcite_input_text_customElement_CSS.editingEnabled]: this.editingEnabled,
      [calcite_input_text_customElement_CSS.inlineChild]: !!this.inlineEditableEl
    })} value=${this.defaultValue ?? lit/* nothing */.s6} .disabled=${this.disabled ? true : null} enterkeyhint=${this.el.enterKeyHint ?? lit/* nothing */.s6} inputmode=${this.el.inputMode ?? lit/* nothing */.s6} maxlength=${this.maxLength ?? lit/* nothing */.s6} minlength=${this.minLength ?? lit/* nothing */.s6} name=${this.name ?? lit/* nothing */.s6} @blur=${this.inputTextBlurHandler} @focus=${this.inputTextFocusHandler} @input=${this.inputTextInputHandler} @keydown=${this.inputTextKeyDownHandler} pattern=${this.pattern ?? lit/* nothing */.s6} placeholder=${(this.placeholder || "") ?? lit/* nothing */.s6} .readOnly=${this.readOnly} .required=${this.required ? true : null} spellcheck=${this.el.spellcheck ?? lit/* nothing */.s6} tabindex=${(this.disabled || this.inlineEditableEl && !this.editingEnabled ? -1 : null) ?? lit/* nothing */.s6} type=text .value=${(0,live/* live */.V)(this.value ?? "")} ${(0,ref/* ref */.K)(this.setChildElRef)}>`;
    return (0,interactive.I)({ disabled: this.disabled, children: (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)({ [calcite_input_text_customElement_CSS.inputWrapper]: true, [runtime.C.rtl]: dir === "rtl" })} ${(0,ref/* ref */.K)(this.inputWrapperEl)}>${this.prefixText ? prefixText : null}<div class=${(0,dist/* safeClassMap */.CP)(calcite_input_text_customElement_CSS.wrapper)}>${childEl}${this.isClearable ? inputClearButton : null}${this.requestedIcon ? iconEl : null}${this.loading ? loader : null}</div><div class=${(0,dist/* safeClassMap */.CP)(calcite_input_text_customElement_CSS.actionWrapper)} ${(0,ref/* ref */.K)(this.actionWrapperEl)}><slot name=${SLOTS.action}></slot></div>${this.suffixText ? suffixText : null}${(0,chunks_form.H)({ component: this })}</div>${this.validationMessage && this.status === "invalid" ? (0,Validation.V)({ icon: this.validationIcon, id: IDS.validationMessage, message: this.validationMessage, scale: this.scale, status: this.status }) : null}` });
  }
}
(0,runtime.c)("calcite-input-text", InputText);


;// ../node_modules/@esri/calcite-components/dist/components/calcite-input-text/index.js




// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/components/calcite-input-number/index.js + 1 modules
var calcite_input_number = __webpack_require__(41787);
;// ../node_modules/@esri/calcite-components/dist/components/calcite-color-picker-hex-input/customElement.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */










const calcite_color_picker_hex_input_customElement_CSS = {
  container: "container",
  hexInput: "hex-input",
  opacityInput: "opacity-input"
};
const calcite_color_picker_hex_input_customElement_styles = (0,css_tag/* css */.AH)`:host{display:block}.container{display:flex;inline-size:100%;flex-wrap:nowrap;align-items:center}.hex-input{flex-grow:1;text-transform:uppercase}.opacity-input{inline-size:100px;margin-inline-start:-1px}:host([hidden]){display:none}[hidden]{display:none}`;
const customElement_DEFAULT_COLOR = node_modules_color();
class ColorPickerHexInput extends dist/* LitElement */.WF {
  constructor() {
    super(...arguments);
    this.internalColor = customElement_DEFAULT_COLOR;
    this.alphaChannel = false;
    this.allowEmpty = false;
    this.hexLabel = "Hex";
    this.scale = "m";
    this.value = normalizeHex(hexify(customElement_DEFAULT_COLOR, this.alphaChannel), this.alphaChannel, true);
    this.calciteColorPickerHexInputChange = (0,dist/* createEvent */.lh)({ cancelable: false });
  }
  static {
    this.properties = { internalColor: [16, {}, { state: true }], alphaChannel: [5, {}, { type: Boolean }], allowEmpty: [5, {}, { type: Boolean }], hexLabel: 1, messages: [0, {}, { attribute: false }], numberingSystem: 1, scale: [3, {}, { reflect: true }], value: [3, {}, { reflect: true }] };
  }
  static {
    this.styles = calcite_color_picker_hex_input_customElement_styles;
  }
  async setFocus() {
    await (0,component.c)(this);
    return (0,dom.b)(this.hexInputNode);
  }
  connectedCallback() {
    super.connectedCallback();
    this.previousNonNullValue = this.value;
    const { allowEmpty, alphaChannel, value } = this;
    if (value) {
      const normalized = normalizeHex(value, alphaChannel);
      if (isValidHex(normalized, alphaChannel)) {
        this.internalSetValue(normalized, normalized, false);
      }
      return;
    }
    if (allowEmpty) {
      this.internalSetValue(void 0, void 0, false);
    }
  }
  willUpdate(changes) {
    if (changes.has("value") && (this.hasUpdated || this.value !== normalizeHex(hexify(customElement_DEFAULT_COLOR, this.alphaChannel), this.alphaChannel, true))) {
      this.internalSetValue(this.value, changes.get("value"), false);
    }
  }
  onHexInputBlur() {
    const node = this.hexInputNode;
    const inputValue = node.value;
    const hex = `#${inputValue}`;
    const { allowEmpty, internalColor } = this;
    const willClearValue = allowEmpty && !inputValue;
    const isLonghand = isLonghandHex(hex);
    const anyShorthand = isShorthandHex(hex, true) || isShorthandHex(hex, false);
    if (anyShorthand) {
      this.onHexInputChange();
    }
    if (willClearValue || isValidHex(hex) && isLonghand) {
      return;
    }
    node.value = allowEmpty && !internalColor ? "" : this.formatHexForInternalInput(rgbToHex(
      // always display hex input in RRGGBB format
      internalColor.object()
    ));
  }
  onOpacityInputBlur() {
    const node = this.opacityInputNode;
    const inputValue = node.value;
    const { allowEmpty, internalColor } = this;
    const willClearValue = allowEmpty && !inputValue;
    if (willClearValue) {
      return;
    }
    node.value = allowEmpty && !internalColor ? "" : this.formatOpacityForInternalInput(internalColor);
  }
  onOpacityInputInput() {
    this.onOpacityInputChange();
  }
  onHexInputChange() {
    const nodeValue = this.hexInputNode.value;
    let value = nodeValue;
    if (value) {
      const normalized = normalizeHex(value, false);
      const preserveExistingAlpha = isValidHex(normalized) && this.alphaChannel;
      if (preserveExistingAlpha && this.internalColor) {
        const alphaHex = normalizeHex(this.internalColor.hexa(), true).slice(-2);
        value = `${normalized + alphaHex}`;
      }
    }
    this.internalSetValue(value, this.value);
  }
  onOpacityInputChange() {
    const node = this.opacityInputNode;
    let value;
    if (!node.value) {
      value = node.value;
    } else {
      const alpha = opacityToAlpha(Number(node.value));
      value = this.internalColor?.alpha(alpha).hexa();
    }
    this.internalSetValue(value, this.value);
  }
  onInputFocus(event) {
    if (event.type === "calciteInternalInputTextFocus") {
      this.hexInputNode.selectText();
    } else {
      this.opacityInputNode.selectText();
    }
  }
  onHexInputInput() {
    const hexInputValue = `#${this.hexInputNode.value}`;
    const oldValue = this.value;
    if (isValidHex(hexInputValue, this.alphaChannel) && isLonghandHex(hexInputValue, this.alphaChannel)) {
      this.internalSetValue(hexInputValue, oldValue);
    }
  }
  onInputKeyDown(event) {
    const { altKey, ctrlKey, metaKey, shiftKey } = event;
    const { alphaChannel, hexInputNode, internalColor, value } = this;
    const { key } = event;
    const composedPath = event.composedPath();
    if (key === "Tab" && isShorthandHex(value, this.alphaChannel) || key === "Enter") {
      if (composedPath.includes(hexInputNode)) {
        this.onHexInputChange();
      } else {
        this.onOpacityInputChange();
      }
      if (key === "Enter") {
        event.preventDefault();
      }
      return;
    }
    const isNudgeKey = key === "ArrowDown" || key === "ArrowUp";
    const oldValue = this.value;
    if (isNudgeKey) {
      if (!value) {
        this.internalSetValue(this.previousNonNullValue, oldValue);
        event.preventDefault();
        return;
      }
      const direction = key === "ArrowUp" ? 1 : -1;
      const bump = shiftKey ? 10 : 1;
      this.internalSetValue(hexify(this.nudgeRGBChannels(internalColor, bump * direction, composedPath.includes(hexInputNode) ? "rgb" : "a"), alphaChannel), oldValue);
      event.preventDefault();
      return;
    }
    const withModifiers = altKey || ctrlKey || metaKey;
    const singleChar = key.length === 1;
    const validHexChar = hexChar.test(key);
    if (singleChar && !withModifiers && !validHexChar) {
      event.preventDefault();
    }
  }
  onHexInputPaste(event) {
    const hex = event.clipboardData.getData("text");
    if (isValidHex(hex, this.alphaChannel) && isLonghandHex(hex, this.alphaChannel)) {
      event.preventDefault();
      this.hexInputNode.value = hex.slice(1);
      this.internalSetValue(hex, this.value);
    }
  }
  internalSetValue(value, oldValue, emit = true) {
    if (value) {
      const { alphaChannel } = this;
      const normalized = normalizeHex(value, alphaChannel, alphaChannel);
      if (isValidHex(normalized, alphaChannel)) {
        const { internalColor: currentColor } = this;
        const nextColor = node_modules_color(normalized);
        const normalizedLonghand = normalizeHex(hexify(nextColor, alphaChannel), alphaChannel);
        const changed = !currentColor || normalizedLonghand !== normalizeHex(hexify(currentColor, alphaChannel), alphaChannel);
        this.internalColor = nextColor;
        this.previousNonNullValue = normalizedLonghand;
        this.value = normalizedLonghand;
        if (changed && emit) {
          this.calciteColorPickerHexInputChange.emit();
        }
        return;
      }
    } else if (this.allowEmpty) {
      this.internalColor = void 0;
      this.value = void 0;
      if (emit) {
        this.calciteColorPickerHexInputChange.emit();
      }
      return;
    }
    this.value = oldValue;
  }
  storeHexInputRef(node) {
    this.hexInputNode = node;
  }
  storeOpacityInputRef(node) {
    this.opacityInputNode = node;
  }
  formatHexForInternalInput(hex) {
    return hex ? hex.replace("#", "").slice(0, 6) : "";
  }
  formatOpacityForInternalInput(color) {
    return color ? `${alphaToOpacity(color.alpha())}` : "";
  }
  nudgeRGBChannels(color, amount, context) {
    let nudgedChannels;
    const channels = color.array();
    const rgbChannels = channels.slice(0, 3);
    if (context === "rgb") {
      const nudgedRGBChannels = rgbChannels.map((channel) => channel + amount);
      nudgedChannels = [
        ...nudgedRGBChannels,
        this.alphaChannel ? channels[3] : void 0
      ];
    } else {
      const nudgedAlpha = opacityToAlpha(alphaToOpacity(color.alpha()) + amount);
      nudgedChannels = [...rgbChannels, nudgedAlpha];
    }
    return node_modules_color(nudgedChannels);
  }
  render() {
    const { alphaChannel, hexLabel, internalColor, messages, scale, value } = this;
    const hexInputValue = this.formatHexForInternalInput(value);
    const opacityInputValue = this.formatOpacityForInternalInput(internalColor);
    const inputScale = scale === "l" ? "m" : "s";
    return (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(calcite_color_picker_hex_input_customElement_CSS.container)}><calcite-input-text class=${(0,dist/* safeClassMap */.CP)(calcite_color_picker_hex_input_customElement_CSS.hexInput)} .label=${messages?.hex || hexLabel} .maxLength=${this.alphaChannel ? 8 : 6} @keydown=${this.onInputKeyDown} @paste=${this.onHexInputPaste} @calciteInputTextChange=${this.onHexInputChange} @calciteInputTextInput=${this.onHexInputInput} @calciteInternalInputTextBlur=${this.onHexInputBlur} @calciteInternalInputTextFocus=${this.onInputFocus} prefix-text=# .scale=${inputScale} .value=${hexInputValue} ${(0,ref/* ref */.K)(this.storeHexInputRef)}></calcite-input-text>${alphaChannel ? (0,keyed/* keyed */.D)("opacity-input", (0,lit/* html */.qy)`<calcite-input-number class=${(0,dist/* safeClassMap */.CP)(calcite_color_picker_hex_input_customElement_CSS.opacityInput)} .label=${messages?.opacity} .max=${OPACITY_LIMITS.max} max-length=3 .min=${OPACITY_LIMITS.min} number-button-type=none .numberingSystem=${this.numberingSystem} @keydown=${this.onInputKeyDown} @calciteInputNumberInput=${this.onOpacityInputInput} @calciteInternalInputNumberBlur=${this.onOpacityInputBlur} @calciteInternalInputNumberFocus=${this.onInputFocus} .scale=${inputScale} suffix-text=% .value=${opacityInputValue} ${(0,ref/* ref */.K)(this.storeOpacityInputRef)}></calcite-input-number>`) : null}</div>`;
  }
}
(0,runtime.c)("calcite-color-picker-hex-input", ColorPickerHexInput);


;// ../node_modules/@esri/calcite-components/dist/components/calcite-color-picker-hex-input/index.js



;// ../node_modules/@esri/calcite-components/dist/components/calcite-tabs/customElement.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */






const calcite_tabs_customElement_CSS = {
  section: "section"
};
const customElement_SLOTS = {
  titleGroup: "title-group"
};
const calcite_tabs_customElement_styles = (0,css_tag/* css */.AH)`:host{display:flex;flex-direction:column}:host([bordered]){box-shadow:inset 0 1px 0 var(--calcite-tab-border-color, var(--calcite-color-border-1));background-color:var(--calcite-tab-background-color, var(--calcite-color-foreground-1))}:host([bordered]) section{border-color:var(--calcite-tab-border-color, var(--calcite-color-border-1));border-style:solid}section{display:flex;flex-grow:1;overflow:hidden;border-width:1px;border-block-start-style:solid;border-block-start-color:var(--calcite-tab-border-color, var(--calcite-color-border-1))}:host([bordered][position=bottom]){box-shadow:inset 0 1px 0 var(--calcite-tab-border-color, var(--calcite-color-border-1)),inset 0 -1px 0 var(--calcite-tab-border-color, var(--calcite-color-border-1))}:host([bordered]:not([position=bottom])) ::slotted(calcite-tab-nav){margin-block-end:-1px}:host([position=bottom]){flex-direction:column-reverse}:host([position=bottom]) section{flex-direction:column-reverse;border-block-start-width:0px;border-block-end-width:1px}:host([bordered][scale=s]) section{padding:.75rem}:host([bordered][scale=m]) section{padding:.5rem}:host([bordered][scale=l]) section{padding:1rem}:host([position=bottom]:not([bordered])) section{border-block-end-style:solid;border-block-end-color:var(--calcite-tab-border-color, var(--calcite-color-border-1))}@media (forced-colors: active){:host([bordered]) section{border-block-start-width:0px;border-block-end-width:1px}:host([position=bottom][bordered]) section{border-block-start-width:1px;border-block-end-width:0px}}:host([hidden]){display:none}[hidden]{display:none}`;
class Tabs extends dist/* LitElement */.WF {
  constructor() {
    super();
    this.tabs = [];
    this.titles = [];
    this.bordered = false;
    this.layout = "inline";
    this.position = "top";
    this.scale = "m";
    this.listen("calciteInternalTabNavSlotChange", this.calciteInternalTabNavSlotChangeHandler);
  }
  static {
    this.properties = { tabs: [16, {}, { state: true }], titles: [16, {}, { state: true }], bordered: [5, {}, { type: Boolean }], layout: [3, {}, { reflect: true }], position: [3, {}, { reflect: true }], scale: [3, {}, { reflect: true }] };
  }
  static {
    this.styles = calcite_tabs_customElement_styles;
  }
  connectedCallback() {
    super.connectedCallback();
    this.updateItems();
  }
  load() {
    this.updateItems();
  }
  willUpdate(changes) {
    if (changes.has("position") && (this.hasUpdated || this.position !== "top") || changes.has("scale") && (this.hasUpdated || this.scale !== "m")) {
      this.updateItems();
    }
    if ((changes.has("titles") || changes.has("tabs")) && this.hasUpdated && this.titles?.length > 0 && this.tabs?.length > 0) {
      this.updateAriaSettings();
      this.updateItems();
    }
  }
  calciteInternalTabNavSlotChangeHandler(event) {
    event.stopPropagation();
    if (event.detail.length !== this.titles.length) {
      this.titles = event.detail;
    }
  }
  defaultSlotChangeHandler(event) {
    this.tabs = (0,dom.s)(event, "calcite-tab");
  }
  async updateAriaSettings() {
    await this.componentOnReady();
    let tabIds;
    let titleIds;
    const tabs = (0,dom.e)(this.slotEl, "calcite-tab");
    if (tabs.some((el) => el.tab) || this.titles.some((el) => el.tab)) {
      tabIds = tabs.sort((a, b) => a.tab.localeCompare(b.tab)).map((el) => el.id);
      titleIds = this.titles.sort((a, b) => a.tab.localeCompare(b.tab)).map((el) => el.id);
    } else {
      const tabDomIndexes = await Promise.all(tabs.map((el) => el.getTabIndex()));
      const titleDomIndexes = await Promise.all(this.titles.map((el) => el.getTabIndex()));
      tabIds = tabDomIndexes.reduce((ids, indexInDOM, registryIndex) => {
        ids[indexInDOM] = tabs[registryIndex].id;
        return ids;
      }, []);
      titleIds = titleDomIndexes.reduce((ids, indexInDOM, registryIndex) => {
        ids[indexInDOM] = this.titles[registryIndex].id;
        return ids;
      }, []);
    }
    tabs.forEach((el) => el._updateAriaInfo(tabIds, titleIds));
    this.titles.forEach((el) => el._updateAriaInfo(tabIds, titleIds));
  }
  updateItems() {
    const { position, scale } = this;
    const nav = this.el.querySelector("calcite-tab-nav");
    if (nav) {
      nav.position = position;
      nav.scale = scale;
    }
    Array.from(this.el.querySelectorAll("calcite-tab")).forEach((tab) => {
      if (tab.parentElement === this.el) {
        tab.scale = scale;
      }
    });
    Array.from(this.el.querySelectorAll("calcite-tab-nav > calcite-tab-title")).forEach((title) => {
      title.position = position;
      title.scale = scale;
    });
  }
  setDefaultSlotRef(el) {
    this.slotEl = el;
  }
  render() {
    return (0,lit/* html */.qy)`<slot name=${customElement_SLOTS.titleGroup}></slot><section class=${(0,dist/* safeClassMap */.CP)(calcite_tabs_customElement_CSS.section)}><slot @slotchange=${this.defaultSlotChangeHandler} ${(0,ref/* ref */.K)(this.setDefaultSlotRef)}></slot></section>`;
  }
}
(0,runtime.c)("calcite-tabs", Tabs);


;// ../node_modules/@esri/calcite-components/dist/components/calcite-tabs/index.js

// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/components/calcite-button/index.js + 1 modules
var calcite_button = __webpack_require__(42817);
;// ../node_modules/@esri/calcite-components/dist/chunks/core.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */
const calciteSize24 = "24px";
const calciteSize32 = "32px";
const calciteSize44 = "44px";
const calciteSize48 = "48px";


// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/observers.js
var observers = __webpack_require__(13061);
;// ../node_modules/@esri/calcite-components/dist/components/calcite-tab-nav/customElement.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */










const ICON = {
  chevronRight: "chevron-right",
  chevronLeft: "chevron-left"
};
const calcite_tab_nav_customElement_CSS = {
  container: "container",
  containerHasEndTabTitleOverflow: "container--end-overflow",
  containerHasStartTabTitleOverflow: "container--start-overflow",
  scrollButton: "scroll-button",
  scrollButtonContainer: "scroll-button-container",
  scrollBackwardContainerButton: "scroll-button-container--backward",
  scrollForwardContainerButton: "scroll-button-container--forward",
  tabTitleSlotWrapper: "tab-titles-slot-wrapper"
};
const calcite_tab_nav_customElement_styles = (0,css_tag/* css */.AH)`:host{--calcite-internal-tab-nav-gradient-start-side: left;--calcite-internal-tab-nav-gradient-end-side: right;position:relative;display:flex}:host([bordered]):not([selected]) .container{background-color:var(--calcite-tab-background-color, var(--calcite-color-foreground-1))}:host([bordered]) calcite-button{--calcite-button-border-color: var(--calcite-tab-border-color, var(--calcite-color-border-1))}.scale-s{--calcite-internal-tab-nav-button-width: 24px;min-block-size:1.5rem}.scale-m{--calcite-internal-tab-nav-button-width: 32px;min-block-size:2rem}.scale-l{--calcite-internal-tab-nav-button-width: 44px;min-block-size:2.75rem}.calcite--rtl{--calcite-internal-tab-nav-gradient-start-side: right;--calcite-internal-tab-nav-gradient-end-side: left}.container--start-overflow .tab-titles-slot-wrapper{mask-image:linear-gradient(to var(--calcite-internal-tab-nav-gradient-end-side),transparent,transparent var(--calcite-internal-tab-nav-button-width),white var(--calcite-internal-tab-nav-button-width),white 51%)}.container--end-overflow .tab-titles-slot-wrapper{mask-image:linear-gradient(to var(--calcite-internal-tab-nav-gradient-start-side),transparent,transparent var(--calcite-internal-tab-nav-button-width),white var(--calcite-internal-tab-nav-button-width),white 51%)}.container--start-overflow.container--end-overflow .tab-titles-slot-wrapper{mask-image:linear-gradient(to var(--calcite-internal-tab-nav-gradient-end-side),transparent,transparent var(--calcite-internal-tab-nav-button-width),white var(--calcite-internal-tab-nav-button-width),white 51%,transparent 51%),linear-gradient(to var(--calcite-internal-tab-nav-gradient-start-side),transparent,transparent var(--calcite-internal-tab-nav-button-width),white var(--calcite-internal-tab-nav-button-width),white 51%,transparent 51%)}.container::-webkit-scrollbar{display:none;-ms-overflow-style:none;scrollbar-width:none}:host([layout=center]) ::slotted(calcite-tab-title){display:flex;flex-grow:1;flex-shrink:0;min-inline-size:auto;white-space:nowrap}:host([layout=center]) ::slotted(calcite-tab-title[selected]){overflow:unset}:host(:not([bordered])) .scale-l{--calcite-internal-tab-nav-gap: var(--calcite-spacing-xxl)}:host(:not([bordered])) .scale-m{--calcite-internal-tab-nav-gap: var(--calcite-spacing-xl)}:host(:not([bordered])) .scale-s{--calcite-internal-tab-nav-gap: var(--calcite-spacing-lg)}:host(:not([bordered])) .tab-titles-slot-wrapper{gap:var(--calcite-internal-tab-nav-gap)}:host([layout=center]:not([bordered])) .tab-titles-slot-wrapper{padding-inline:var(--calcite-spacing-xl)}.container,.tab-titles-slot-wrapper{display:flex;inline-size:100%;justify-content:flex-start;overflow:hidden;white-space:nowrap}.scroll-button-container{position:absolute;inset-block:0px}.scroll-button-container calcite-button{--calcite-button-text-color: var(--calcite-tab-text-color, var(--calcite-color-text-3));--calcite-button-background-color: var(--calcite-color-transparent);--calcite-offset-invert-focus: 1;block-size:var(--calcite-container-size-content-fluid)}.scroll-button-container calcite-button:hover .scroll-button-container calcite-button:focus{--calcite-button-background-color: var(--calcite-color-transparent-hover)}.scroll-button-container calcite-button:active{--calcite-button-background-color: var(--calcite-color-transparent-press)}.scroll-button-container--forward{inset-inline-end:0;z-index:var(--calcite-z-index)}.scroll-button-container--backward{inset-inline-start:0;z-index:var(--calcite-z-index)}:host(:not([bordered])) .scroll-button-container--backward:before,:host(:not([bordered])) .scroll-button-container--forward:before{background-color:var(--calcite-tab-border-color, var(--calcite-color-border-1));opacity:.5;content:"";inline-size:var(--calcite-border-width-sm);inset-block-start:var(--calcite-border-width-md);inset-block-end:var(--calcite-border-width-md);position:absolute}:host(:not([bordered])) .scroll-button-container--backward:before{inset-inline-end:0}:host(:not([bordered])) .scroll-button-container--forward:before{inset-inline-start:0}:host([hidden]){display:none}[hidden]{display:none}`;
class TabNav extends dist/* LitElement */.WF {
  constructor() {
    super();
    this.effectiveDir = "ltr";
    this.lastScrollWheelAxis = "x";
    this.resizeObserver = (0,observers.c)("resize", () => {
      this.updateScrollingState();
    });
    this.makeFirstVisibleTabClosable = false;
    this.messages = (0,useT9n.u)();
    this.hasOverflowingEndTabTitle = false;
    this.hasOverflowingStartTabTitle = false;
    this.bordered = false;
    this.layout = "inline";
    this.position = "bottom";
    this.scale = "m";
    this.selectedTitle = null;
    this.calciteInternalTabChange = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.calciteInternalTabNavSlotChange = (0,dist/* createEvent */.lh)();
    this.calciteTabChange = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.listen("calciteInternalTabsFocusPrevious", this.focusPreviousTabHandler);
    this.listen("calciteInternalTabsFocusNext", this.focusNextTabHandler);
    this.listen("calciteInternalTabsFocusFirst", this.focusFirstTabHandler);
    this.listen("calciteInternalTabsFocusLast", this.focusLastTabHandler);
    this.listen("calciteInternalTabsActivate", this.internalActivateTabHandler);
    this.listen("calciteInternalTabsClose", this.internalCloseTabHandler);
    this.listen("calciteInternalTabTitleRegister", this.updateTabTitles);
    this.listenOn(document.body, "calciteInternalTabChange", this.globalInternalTabChangeHandler);
  }
  static {
    this.properties = { hasOverflowingEndTabTitle: [16, {}, { state: true }], hasOverflowingStartTabTitle: [16, {}, { state: true }], selectedTabId: [16, {}, { state: true }], bordered: [7, {}, { reflect: true, type: Boolean }], layout: [3, {}, { reflect: true }], messageOverrides: [0, {}, { attribute: false }], position: 1, scale: 1, selectedTitle: [0, {}, { attribute: false }], storageId: [3, {}, { reflect: true }], syncId: [3, {}, { reflect: true }] };
  }
  static {
    this.styles = calcite_tab_nav_customElement_styles;
  }
  connectedCallback() {
    super.connectedCallback();
    this.parentTabsEl = this.el.closest("calcite-tabs");
    this.resizeObserver?.observe(this.el);
  }
  async load() {
    const storageKey = `calcite-tab-nav-${this.storageId}`;
    if (localStorage && this.storageId && localStorage.getItem(storageKey)) {
      const storedTab = JSON.parse(localStorage.getItem(storageKey));
      this.selectedTabId = storedTab;
    }
  }
  willUpdate(changes) {
    if (changes.has("selectedTitle") && (this.hasUpdated || this.selectedTitle !== null)) {
      this.calciteInternalTabChange.emit({
        tab: this.selectedTabId
      });
    }
    if (changes.has("selectedTabId")) {
      this.selectedTabIdChanged();
    }
    const { parentTabsEl } = this;
    this.layout = parentTabsEl?.layout;
    this.bordered = parentTabsEl?.bordered;
    this.effectiveDir = (0,dom.g)(this.el);
  }
  loaded() {
    this.scrollTabTitleIntoView(this.selectedTitle, "instant");
    if (this.tabTitles.length && this.tabTitles.every((title) => !title.selected) && !this.selectedTabId) {
      this.tabTitles[0].getTabIdentifier().then((tab) => {
        this.calciteInternalTabChange.emit({
          tab
        });
      });
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.resizeObserver?.disconnect();
  }
  get enabledTabTitles() {
    return (0,dom.f)(this.el, "calcite-tab-title:not([disabled])").filter((tabTitle) => !tabTitle.closed);
  }
  get scrollerButtonWidth() {
    const { scale } = this;
    return parseInt(scale === "s" ? calciteSize24 : scale === "m" ? calciteSize32 : calciteSize44);
  }
  get tabTitles() {
    return (0,dom.f)(this.el, "calcite-tab-title");
  }
  focusPreviousTabHandler(event) {
    this.handleTabFocus(event, event.target, "previous");
  }
  focusNextTabHandler(event) {
    this.handleTabFocus(event, event.target, "next");
  }
  focusFirstTabHandler(event) {
    this.handleTabFocus(event, event.target, "first");
  }
  focusLastTabHandler(event) {
    this.handleTabFocus(event, event.target, "last");
  }
  internalActivateTabHandler(event) {
    const activatedTabTitle = event.target;
    const currentSelectedTabTitle = this.selectedTitle;
    this.selectedTabId = event.detail.tab ? event.detail.tab : this.getIndexOfTabTitle(activatedTabTitle);
    event.stopPropagation();
    this.selectedTitle = activatedTabTitle;
    if (currentSelectedTabTitle?.id !== activatedTabTitle.id && event.detail.userTriggered) {
      this.calciteTabChange.emit();
    }
    this.scrollTabTitleIntoView(activatedTabTitle);
  }
  scrollTabTitleIntoView(activatedTabTitle, behavior = "smooth") {
    if (!activatedTabTitle) {
      return;
    }
    requestAnimationFrame(() => {
      const isLTR = this.effectiveDir === "ltr";
      const tabTitleContainer = this.tabTitleContainerEl;
      const containerBounds = tabTitleContainer.getBoundingClientRect();
      const tabTitleBounds = activatedTabTitle.getBoundingClientRect();
      const scrollPosition = tabTitleContainer.scrollLeft;
      const overflowingStartTabTitle = isLTR ? this.hasOverflowingStartTabTitle : this.hasOverflowingEndTabTitle;
      const overflowingEndTabTitle = isLTR ? this.hasOverflowingEndTabTitle : this.hasOverflowingStartTabTitle;
      if (tabTitleBounds.left < containerBounds.left + (overflowingStartTabTitle ? this.scrollerButtonWidth : 0)) {
        const left = scrollPosition + (tabTitleBounds.left - containerBounds.left) - this.scrollerButtonWidth;
        tabTitleContainer.scrollTo({ left, behavior });
      } else if (tabTitleBounds.right > containerBounds.right - (overflowingEndTabTitle ? this.scrollerButtonWidth : 0)) {
        const left = scrollPosition + (tabTitleBounds.right - containerBounds.right) + this.scrollerButtonWidth;
        tabTitleContainer.scrollTo({ left, behavior });
      }
    });
  }
  internalCloseTabHandler(event) {
    const closedTabTitleEl = event.target;
    this.handleTabTitleClose(closedTabTitleEl);
    event.stopPropagation();
  }
  async updateTabTitles(event) {
    if (event.target.selected) {
      this.selectedTabId = event.detail;
      this.selectedTitle = await this.getTabTitleById(this.selectedTabId);
    }
  }
  globalInternalTabChangeHandler(event) {
    if (this.syncId && event.target !== this.el && event.target.syncId === this.syncId && this.selectedTabId !== event.detail.tab) {
      this.selectedTabId = event.detail.tab;
    }
    event.stopPropagation();
  }
  async selectedTabIdChanged() {
    await this.componentOnReady();
    if (localStorage && this.storageId && this.selectedTabId !== void 0 && this.selectedTabId !== null) {
      localStorage.setItem(`calcite-tab-nav-${this.storageId}`, JSON.stringify(this.selectedTabId));
    }
    this.calciteInternalTabChange.emit({
      tab: this.selectedTabId
    });
  }
  onTabTitleWheel(event) {
    event.preventDefault();
    const { deltaX, deltaY } = event;
    const x = Math.abs(deltaX);
    const y = Math.abs(deltaY);
    let scrollBy;
    if (x === y) {
      scrollBy = this.lastScrollWheelAxis === "x" ? deltaX : deltaY;
    } else if (x > y) {
      scrollBy = deltaX;
      this.lastScrollWheelAxis = "x";
    } else {
      scrollBy = deltaY;
      this.lastScrollWheelAxis = "y";
    }
    const scrollByX = (this.effectiveDir === "rtl" ? -1 : 1) * scrollBy;
    event.currentTarget.scrollBy(scrollByX, 0);
  }
  onSlotChange() {
    this.intersectionObserver?.disconnect();
    const tabTitles = this.tabTitles;
    tabTitles.forEach((child) => {
      this.intersectionObserver?.observe(child);
    });
    const visibleTabTitlesIndices = this.getVisibleTabTitlesIndices(tabTitles);
    const totalVisibleTabTitles = visibleTabTitlesIndices.length;
    if (totalVisibleTabTitles > 1 && this.makeFirstVisibleTabClosable) {
      tabTitles[visibleTabTitlesIndices[0]].closable = true;
      this.makeFirstVisibleTabClosable = false;
    }
    this.calciteInternalTabNavSlotChange.emit(tabTitles);
  }
  storeTabTitleWrapperRef(el) {
    if (!el) {
      return;
    }
    this.tabTitleContainerEl = el;
    this.intersectionObserver = (0,observers.c)("intersection", () => this.updateScrollingState(), {
      root: el,
      threshold: [0, 0.5, 1]
    });
  }
  updateScrollingState() {
    const tabTitleContainer = this.tabTitleContainerEl;
    if (!tabTitleContainer) {
      return;
    }
    let isOverflowStart;
    let isOverflowEnd;
    const scrollPosition = tabTitleContainer.scrollLeft;
    const visibleWidth = tabTitleContainer.clientWidth;
    const totalContentWidth = tabTitleContainer.scrollWidth;
    if (this.effectiveDir === "ltr") {
      isOverflowStart = scrollPosition > 0;
      isOverflowEnd = scrollPosition + visibleWidth < totalContentWidth;
    } else {
      isOverflowStart = scrollPosition < 0;
      isOverflowEnd = scrollPosition !== -(totalContentWidth - visibleWidth);
    }
    this.hasOverflowingStartTabTitle = isOverflowStart;
    this.hasOverflowingEndTabTitle = isOverflowEnd;
  }
  scrollToTabTitles(direction) {
    requestAnimationFrame(() => {
      const tabTitleContainer = this.tabTitleContainerEl;
      const containerBounds = tabTitleContainer.getBoundingClientRect();
      const tabTitles = Array.from(this.el.querySelectorAll("calcite-tab-title"));
      const { effectiveDir } = this;
      if (direction === "forward") {
        tabTitles.reverse();
      }
      let closestToEdge = null;
      tabTitles.forEach((tabTitle) => {
        const tabTitleBounds = tabTitle.getBoundingClientRect();
        const containerEndX = containerBounds.x + containerBounds.width;
        const tabTitleEndX = tabTitleBounds.x + tabTitleBounds.width;
        if (direction === "forward" && effectiveDir === "ltr" || direction === "backward" && effectiveDir === "rtl") {
          const afterContainerEnd = tabTitleBounds.x > containerEndX;
          if (afterContainerEnd) {
            closestToEdge = tabTitle;
          } else {
            const crossingContainerEnd = tabTitleEndX > containerEndX && tabTitleBounds.x > containerBounds.x;
            if (crossingContainerEnd) {
              closestToEdge = tabTitle;
            }
          }
        } else {
          const beforeContainerStart = tabTitleEndX < containerBounds.x;
          if (beforeContainerStart) {
            closestToEdge = tabTitle;
          } else {
            const crossingContainerStart = tabTitleEndX < containerEndX && tabTitleBounds.x < containerBounds.x;
            if (crossingContainerStart) {
              closestToEdge = tabTitle;
            }
          }
        }
      });
      if (closestToEdge) {
        const { scrollerButtonWidth } = this;
        const offsetAdjustment = direction === "forward" && effectiveDir === "ltr" || direction === "backward" && effectiveDir === "rtl" ? -scrollerButtonWidth : closestToEdge.offsetWidth - tabTitleContainer.clientWidth + scrollerButtonWidth;
        const scrollTo = closestToEdge.offsetLeft + offsetAdjustment;
        tabTitleContainer.scrollTo({
          left: scrollTo,
          behavior: "smooth"
        });
      }
    });
  }
  scrollToNextTabTitles() {
    this.scrollToTabTitles("forward");
  }
  scrollToPreviousTabTitles() {
    this.scrollToTabTitles("backward");
  }
  handleTabFocus(event, el, destination) {
    const focused = (0,dom.d)(this.enabledTabTitles, el, destination);
    this.scrollTabTitleIntoView(focused, "instant");
    event.stopPropagation();
  }
  getIndexOfTabTitle(el, tabTitles = this.tabTitles) {
    return tabTitles.indexOf(el);
  }
  onTabTitleScroll() {
    this.updateScrollingState();
  }
  async getTabTitleById(id) {
    return Promise.all(this.tabTitles.map((el) => el.getTabIdentifier())).then((ids) => {
      return this.tabTitles[ids.indexOf(id)];
    });
  }
  getVisibleTabTitlesIndices(tabTitles) {
    return tabTitles.reduce((tabTitleIndices, tabTitle, index) => !tabTitle.closed ? [...tabTitleIndices, index] : tabTitleIndices, []);
  }
  handleTabTitleClose(closedTabTitleEl) {
    const { tabTitles } = this;
    const selectionModified = closedTabTitleEl.selected;
    const visibleTabTitlesIndices = this.getVisibleTabTitlesIndices(tabTitles);
    const totalVisibleTabTitles = visibleTabTitlesIndices.length;
    if (totalVisibleTabTitles === 1 && tabTitles[visibleTabTitlesIndices[0]].closable) {
      this.makeFirstVisibleTabClosable = true;
      tabTitles[visibleTabTitlesIndices[0]].closable = false;
      this.selectedTabId = visibleTabTitlesIndices[0];
      if (selectionModified) {
        tabTitles[visibleTabTitlesIndices[0]].activateTab();
      }
    } else if (totalVisibleTabTitles > 1) {
      const closedTabTitleIndex = tabTitles.findIndex((el) => el === closedTabTitleEl);
      const nextTabTitleIndex = visibleTabTitlesIndices.find((value) => value > closedTabTitleIndex);
      if (this.selectedTabId === closedTabTitleIndex) {
        this.selectedTabId = nextTabTitleIndex ? nextTabTitleIndex : totalVisibleTabTitles - 1;
        tabTitles[this.selectedTabId].activateTab();
      }
    }
    requestAnimationFrame(() => {
      tabTitles[this.selectedTabId].focus();
    });
  }
  render() {
    this.el.role = "tablist";
    return (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)({
      [calcite_tab_nav_customElement_CSS.container]: true,
      [calcite_tab_nav_customElement_CSS.containerHasStartTabTitleOverflow]: !!this.hasOverflowingStartTabTitle,
      [calcite_tab_nav_customElement_CSS.containerHasEndTabTitleOverflow]: !!this.hasOverflowingEndTabTitle,
      [`scale-${this.scale}`]: true,
      [`position-${this.position}`]: true,
      [runtime.C.rtl]: this.effectiveDir === "rtl"
    })}>${this.renderScrollButton("start")}<div class=${(0,dist/* safeClassMap */.CP)({
      [calcite_tab_nav_customElement_CSS.tabTitleSlotWrapper]: true
    })} @scroll=${this.onTabTitleScroll} @wheel=${this.onTabTitleWheel} ${(0,ref/* ref */.K)(this.storeTabTitleWrapperRef)}><slot @slotchange=${this.onSlotChange}></slot></div>${this.renderScrollButton("end")}</div>`;
  }
  renderScrollButton(overflowDirection) {
    const { bordered, messages, hasOverflowingStartTabTitle, hasOverflowingEndTabTitle, scale } = this;
    const isEnd = overflowDirection === "end";
    return (0,keyed/* keyed */.D)(overflowDirection, (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)({
      [calcite_tab_nav_customElement_CSS.scrollButtonContainer]: true,
      [calcite_tab_nav_customElement_CSS.scrollBackwardContainerButton]: !isEnd,
      [calcite_tab_nav_customElement_CSS.scrollForwardContainerButton]: isEnd
    })} .hidden=${isEnd && !hasOverflowingEndTabTitle || !isEnd && !hasOverflowingStartTabTitle}><calcite-button .appearance=${bordered ? "outline-fill" : "transparent"} .ariaLabel=${isEnd ? messages.nextTabTitles : messages.previousTabTitles} class=${(0,dist/* safeClassMap */.CP)({
      [calcite_tab_nav_customElement_CSS.scrollButton]: true
    })} icon-flip-rtl=both .iconStart=${isEnd ? ICON.chevronRight : ICON.chevronLeft} kind=neutral @click=${isEnd ? this.scrollToNextTabTitles : this.scrollToPreviousTabTitles} .scale=${scale} tabindex=-1></calcite-button></div>`);
  }
}
(0,runtime.c)("calcite-tab-nav", TabNav);


;// ../node_modules/@esri/calcite-components/dist/components/calcite-tab-nav/index.js


// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/guid.js
var guid = __webpack_require__(7025);
// EXTERNAL MODULE: ../node_modules/lit-html/node/lit-html.js
var lit_html = __webpack_require__(31263);
;// ../node_modules/@esri/calcite-components/dist/chunks/XButton.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */





const XButton_CSS = {
  button: "x-button",
  buttonRound: "x-button--round"
};
const XButton = ({ disabled, focusable, key, label, onClick, ref: ref$1, round = true, scale, title }) => (0,keyed/* keyed */.D)(key, (0,lit_html/* html */.qy)`<button .ariaLabel=${label} class=${(0,dist/* safeClassMap */.CP)({
  [((scale2) => `x-button--${scale2}`)(scale)]: true,
  [XButton_CSS.button]: true,
  [XButton_CSS.buttonRound]: round
})} .disabled=${disabled} @click=${onClick} .tabIndex=${focusable ? 0 : -1} title=${title ?? lit_html/* nothing */.s6} type=button ${(0,ref/* ref */.K)(ref$1)}><calcite-icon icon=x .scale=${(0,component.g)(scale)}></calcite-icon></button>`);


;// ../node_modules/@esri/calcite-components/dist/components/calcite-tab-title/customElement.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */













const calcite_tab_title_customElement_CSS = {
  container: "container",
  containerBottom: "container--bottom",
  content: "content",
  contentHasText: "content--has-text",
  iconEnd: "icon-end",
  iconPresent: "icon-present",
  iconStart: "icon-start",
  titleIcon: "calcite-tab-title--icon",
  scale: (scale) => `scale-${scale}`,
  selectedIndicator: "selected-indicator"
};
const calcite_tab_title_customElement_styles = (0,css_tag/* css */.AH)`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block;outline:2px solid transparent;outline-offset:2px;margin-inline-start:0px}:host([layout=inline]){flex:0 1 auto}:host([layout=center]){flex:1 1 auto}.content{position:relative;margin-block-end:.125rem;box-sizing:border-box;display:flex;block-size:100%;align-items:center;justify-content:center}.scale-s .content{padding-block:.25rem;font-size:var(--calcite-font-size--2);line-height:1rem}.scale-s .x-button{inline-size:1.25rem}.scale-m .content{padding-block:.5rem;font-size:var(--calcite-font-size--1);line-height:1rem}.scale-m .x-button{inline-size:1.75rem}.scale-l .content{padding-block:.625rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}.scale-l .x-button{inline-size:2rem}:host([closable]) .content{border-block-end-color:transparent}:host([layout=inline]) .content,:host([layout=center]) .content{padding-inline:.25rem}:host([layout=center]) .scale-s,:host([layout=center]) .scale-m,:host([layout=center]) .scale-l{margin-block:0px;justify-content:center;text-align:center}:host([layout=center]) .scale-s .content,:host([layout=center]) .scale-m .content,:host([layout=center]) .scale-l .content{flex:1 1 auto;flex-grow:1}.container{position:relative;box-sizing:border-box;display:flex;block-size:100%;inline-size:100%;cursor:pointer;align-content:center;justify-content:space-between;padding-inline:0px;font-size:var(--calcite-font-size--1);line-height:1rem;outline-color:transparent;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;color:var(--calcite-tab-text-color, var(--calcite-color-text-3));background-color:var(--calcite-tab-background-color, transparent)}.selected-indicator{position:absolute;display:block;block-size:.125rem;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;inset-block-end:0;inset-inline-start:0;inset-inline-end:0;inline-size:100%}:host([bordered][selected]) .container:after{position:absolute;display:block;block-size:.125rem;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;inset-block-end:-1px;inset-inline-start:0;inset-inline-end:0;inline-size:100%;content:""}:host([bordered][selected]) .container.container--bottom:after{inset-block-start:-1px}:host([bordered][selected]:focus) .container:after{background:transparent}.container--bottom .selected-indicator{inset-block-end:unset;inset-block-start:0}:host(:not([bordered])) .container:hover,:host(:not([bordered])) .container:active{color:var(--calcite-color-text-1)}:host([bordered]:not([selected]):hover:not(:focus)) .selected-indicator{background-color:var(--calcite-color-foreground-2)}:host([bordered]:not([selected]):hover:not(:focus)) .container:not(.container--bottom) .selected-indicator{box-shadow:inset 0 1px var(--calcite-color-border-1)}:host([bordered]:not([selected]):hover:not(:focus)) .container.container--bottom .selected-indicator{box-shadow:inset 0 -1px var(--calcite-color-border-1)}:host([selected]:focus) .selected-indicator{block-size:4px}.calcite-tab-title--icon{position:relative;margin:0;display:inline-flex;align-self:center}.calcite-tab-title--icon svg{transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out}.content--has-text .icon-start,.content--has-text .calcite-tab-title--icon.icon-start{color:var(--calcite-tab-icon-color-start, var(--calcite-icon-color))}.content--has-text .calcite-tab-title--icon.icon-start .icon-end,.content--has-text .calcite-tab-title--icon.icon-end{color:var(--calcite-tab-icon-color-end, var(--calcite-icon-color))}.content--has-text{padding:.25rem}.content--has-text .calcite-tab-title--icon.icon-start{margin-inline-end:var(--calcite-spacing-sm)}.content--has-text .calcite-tab-title--icon.icon-end{margin-inline-start:var(--calcite-spacing-sm)}.x-button{display:flex;block-size:100%;cursor:pointer;appearance:none;align-content:center;align-items:center;justify-content:center;align-self:center;border-style:none;background-color:transparent;outline-color:transparent;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;margin-inline-start:var(--calcite-spacing-sm);margin-inline-end:var(--calcite-spacing-px);block-size:calc(100% - var(--calcite-spacing-xxs));color:var(--calcite-tab-close-icon-color, var(--calcite-color-text-3));background-color:var(--calcite-tab-close-icon-background-color, var(--calcite-color-transparent))}.x-button:focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)))}.x-button:focus,.x-button:hover,.x-button:active{color:var(--calcite-tab-close-icon-color-press, var(--calcite-color-text-1));background-color:var(--calcite-tab-close-icon-background-color-press, var(--calcite-color-foreground-3))}:host([bordered]) .container{border-color:transparent;border-inline-width:var(--calcite-spacing-px);border-inline-style:solid}:host([bordered]) .container:hover,:host([bordered]) .container:active{color:var(--calcite-color-text-1)}:host([bordered]) .container .x-button calcite-icon{margin-block-start:var(--calcite-spacing-px)}:host([bordered]) .container .x-button:focus,:host([bordered]) .container .x-button:hover,:host([bordered]) .container .x-button:active{box-shadow:0 2px 0 0 var(--calcite-tab-close-icon-background-color-press, var(--calcite-color-foreground-3))}:host([bordered]) .container.container--bottom{border-block-start-style:solid;border-block-start-width:1px}:host([bordered]) .container.container--bottom .selected-indicator{inset-block-start:unset;inset-block-end:0}:host([bordered]) .container.container--bottom .x-button{box-shadow:0 -2px 0 0 var(--calcite-tab-close-icon-background-color, var(--calcite-color-transparent))}:host([bordered]) .container.container--bottom .x-button:focus,:host([bordered]) .container.container--bottom .x-button:hover,:host([bordered]) .container.container--bottom .x-button:active{box-shadow:0 -2px 0 0 var(--calcite-tab-close-icon-background-color-press, var(--calcite-color-foreground-3))}:host([bordered]) .container.container--bottom .x-button calcite-icon{margin-block-end:var(--calcite-spacing-px)}:host([bordered]) .container:not(.container--bottom){border-block-end-style:solid;border-block-end-width:1px}:host([bordered]) .container:not(.container--bottom) .x-button{block-size:calc(100% - var(--calcite-spacing-px));margin-block-start:-1px}:host([bordered]) .container .selected-indicator{inset-block-start:0;inset-block-end:unset;inset-inline-start:-1px;inset-inline-end:0;inline-size:calc(100% + var(--calcite-spacing-base))}:host([bordered]) .container:host(:not([selected])) .container .x-button{box-shadow:0 2px 0 0 transparent}:host([bordered]) .container:host(:not([selected])):host(:hover) .container:not(.container--bottom){border-block-end-color:var(--calcite-tab-border-color, var(--calcite-color-border-1))}:host([bordered]) .container:host(:not([selected])):host(:hover):host(:not(:focus)) .selected-indicator{box-shadow:inset 0 var(--calcite-internal-tab-shadow-length) var(--calcite-tab-border-color, var(--calcite-color-border-1))}:host([bordered]) .container:host(:not([selected])):host(:hover):host(:not(:focus)) :not(.container--bottom){--calcite-internal-tab-shadow-length: 1px}:host([bordered]) .container:host(:not([selected])):host(:hover):host(:not(:focus)) .container--bottom{--calcite-internal-tab-shadow-length: -1px}:host([bordered]) .container:hover{background-color:var(--calcite-tab-background-color-hover, var(--calcite-color-foreground-2));border-block-end-color:var(--calcite-color-border-1)}:host(:hover) .selected-indicator{background-color:var(--calcite-color-border-3)}:host([selected]) .selected-indicator,:host([selected]:hover) .selected-indicator,:host(:focus) .selected-indicator,:host(:active) .selected-indicator{background-color:var(--calcite-tab-accent-color-press, var(--calcite-color-brand))}:host([closed]){display:none}:host([selected]) .container{border-color:transparent;color:var(--calcite-tab-text-color, var(--calcite-color-text-1))}:host([selected][bordered]) .container{border-inline-color:var(--calcite-tab-border-color, var(--calcite-color-border-1))}:host([selected][bordered]) .container:after{background-color:var(--calcite-tab-background-color, var(--calcite-color-foreground-1))}:host([selected][bordered]) .container:hover,:host([selected][bordered]) .container:active{background:transparent}:host(:focus) .container{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}:host(:focus) .container:focus-within{outline-color:transparent}:host([icon-start][icon-end]) .calcite-tab-title--icon:first-child{margin-inline-end:var(--calcite-spacing-sm)}:host([layout=inline][bordered]) .scale-m .content,:host([layout=center][bordered]) .scale-m .content{padding-inline:.75rem}:host([layout=inline][bordered]) .scale-s .content,:host([layout=center][bordered]) .scale-s .content{padding-inline:.5rem}:host([layout=inline][bordered]) .scale-l .content,:host([layout=center][bordered]) .scale-l .content{padding-inline:1rem}:host([layout=inline][closable]) .scale-s .content,:host([layout=inline][closable]) .scale-m .content,:host([layout=inline][closable]) .scale-l .content{padding-inline-end:0}@media (forced-colors: active){:host{outline-width:0;outline-offset:0}:host(:focus) .container{outline-color:highlight}:host([bordered][selected]) .container{border-block-end-style:none}:host([bordered][selected]) .container--bottom{border-block-start-style:none}.x-button{z-index:var(--calcite-z-index)}.selected-indicator{background-color:highlight}}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) .container{pointer-events:none;opacity:.5}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}`;
class TabTitle extends dist/* LitElement */.WF {
  constructor() {
    super();
    this.closeButtonEl = (0,ref/* createRef */._)();
    this.guid = `calcite-tab-title-${(0,guid.g)()}`;
    this.mutationObserver = (0,observers.c)("mutation", () => this.updateHasText());
    this.resizeObserver = (0,observers.c)("resize", () => {
      this.calciteInternalTabIconChanged.emit();
    });
    this.messages = (0,useT9n.u)();
    this.hasText = false;
    this.bordered = false;
    this.closable = false;
    this.closed = false;
    this.disabled = false;
    this.position = "top";
    this.scale = "m";
    this.selected = false;
    this.calciteInternalTabIconChanged = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.calciteInternalTabTitleRegister = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.calciteInternalTabsActivate = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.calciteInternalTabsClose = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.calciteInternalTabsFocusFirst = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.calciteInternalTabsFocusLast = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.calciteInternalTabsFocusNext = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.calciteInternalTabsFocusPrevious = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.calciteTabsActivate = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.calciteTabsClose = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.listenOn(document.body, "calciteInternalTabChange", this.internalTabChangeHandler);
    this.listen("click", this.onClick);
    this.listen("keydown", this.keyDownHandler);
  }
  static {
    this.properties = { controls: [16, {}, { state: true }], hasText: [16, {}, { state: true }], bordered: [7, {}, { reflect: true, type: Boolean }], closable: [7, {}, { reflect: true, type: Boolean }], closed: [7, {}, { reflect: true, type: Boolean }], disabled: [7, {}, { reflect: true, type: Boolean }], iconEnd: [3, {}, { reflect: true }], iconFlipRtl: [3, {}, { reflect: true }], iconStart: [3, {}, { reflect: true }], layout: [3, {}, { reflect: true }], messageOverrides: [0, {}, { attribute: false }], position: 1, scale: 1, selected: [7, {}, { reflect: true, type: Boolean }], tab: [3, {}, { reflect: true }] };
  }
  static {
    this.styles = calcite_tab_title_customElement_styles;
  }
  async activateTab(userTriggered = true) {
    if (this.disabled || this.closed) {
      return;
    }
    const payload = { tab: this.tab, userTriggered };
    this.calciteInternalTabsActivate.emit(payload);
    if (userTriggered) {
      requestAnimationFrame(() => this.calciteTabsActivate.emit());
    }
  }
  async getTabIdentifier() {
    return this.tab ? this.tab : this.getTabIndex();
  }
  async getTabIndex() {
    return Array.prototype.indexOf.call((0,dom.n)(this.el.parentElement.children).filter((el) => el.matches("calcite-tab-title")), this.el);
  }
  _updateAriaInfo(tabIds = [], titleIds = []) {
    this.controls = tabIds[titleIds.indexOf(this.el.id)] || null;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setupTextContentObserver();
    this.parentTabsEl = this.el.closest("calcite-tabs");
  }
  async load() {
    if (!lit/* isServer */.S$) {
      this.updateHasText();
    }
    if (this.tab && this.selected) {
      this.activateTab(false);
    }
  }
  willUpdate(changes) {
    if (changes.has("selected") && (this.hasUpdated || this.selected !== false)) {
      this.selectedHandler();
    }
    if (this.parentTabsEl) {
      this.layout = this.parentTabsEl.layout;
      this.bordered = this.parentTabsEl.bordered;
    }
  }
  updated() {
    (0,interactive.u)(this);
  }
  async loaded() {
    this.calciteInternalTabTitleRegister.emit(await this.getTabIdentifier());
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.mutationObserver?.disconnect();
    document.body?.dispatchEvent(new CustomEvent("calciteTabTitleUnregister", {
      detail: this.el
    }));
    this.resizeObserver?.disconnect();
  }
  selectedHandler() {
    if (this.selected) {
      this.activateTab(false);
    }
  }
  internalTabChangeHandler(event) {
    const targetTabsEl = event.composedPath().find((el) => el.tagName === "CALCITE-TABS");
    if (targetTabsEl !== this.parentTabsEl) {
      return;
    }
    if (this.tab) {
      this.selected = this.tab === event.detail.tab;
    } else {
      this.getTabIndex().then((index) => {
        this.selected = index === event.detail.tab;
      });
    }
    event.stopPropagation();
  }
  onClick() {
    this.activateTab();
  }
  keyDownHandler(event) {
    switch (event.key) {
      case " ":
      case "Enter":
        if (!event.composedPath().includes(this.closeButtonEl.value)) {
          this.activateTab();
          event.preventDefault();
        }
        break;
      case "ArrowRight":
        event.preventDefault();
        if ((0,dom.g)(this.el) === "ltr") {
          this.calciteInternalTabsFocusNext.emit();
        } else {
          this.calciteInternalTabsFocusPrevious.emit();
        }
        break;
      case "ArrowLeft":
        event.preventDefault();
        if ((0,dom.g)(this.el) === "ltr") {
          this.calciteInternalTabsFocusPrevious.emit();
        } else {
          this.calciteInternalTabsFocusNext.emit();
        }
        break;
      case "Home":
        event.preventDefault();
        this.calciteInternalTabsFocusFirst.emit();
        break;
      case "End":
        event.preventDefault();
        this.calciteInternalTabsFocusLast.emit();
        break;
    }
  }
  closeClickHandler() {
    this.closeTabTitleAndNotify();
  }
  updateHasText() {
    this.hasText = this.el.textContent.trim().length > 0;
  }
  setupTextContentObserver() {
    this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
  }
  closeTabTitleAndNotify() {
    this.closed = true;
    this.calciteInternalTabsClose.emit({ tab: this.tab });
    this.calciteTabsClose.emit();
  }
  render() {
    const { el, closed } = this;
    const id = el.id || this.guid;
    const iconStartEl = (0,lit/* html */.qy)`<calcite-icon class=${(0,dist/* safeClassMap */.CP)({ [calcite_tab_title_customElement_CSS.titleIcon]: true, [calcite_tab_title_customElement_CSS.iconStart]: true })} .flipRtl=${this.iconFlipRtl === "start" || this.iconFlipRtl === "both"} .icon=${this.iconStart} .scale=${(0,component.g)(this.scale)}></calcite-icon>`;
    const iconEndEl = (0,lit/* html */.qy)`<calcite-icon class=${(0,dist/* safeClassMap */.CP)({ [calcite_tab_title_customElement_CSS.titleIcon]: true, [calcite_tab_title_customElement_CSS.iconEnd]: true })} .flipRtl=${this.iconFlipRtl === "end" || this.iconFlipRtl === "both"} .icon=${this.iconEnd} .scale=${(0,component.g)(this.scale)}></calcite-icon>`;
    (0,dist/* setAttribute */.Bq)(this.el, "aria-controls", this.controls);
    this.el.ariaSelected = (0,dom.t)(this.selected);
    (0,dist/* setAttribute */.Bq)(this.el, "id", id);
    this.el.role = "tab";
    (0,dist/* setAttribute */.Bq)(this.el, "tabIndex", this.selected && !this.disabled ? 0 : -1);
    return (0,interactive.I)({ disabled: this.disabled, children: (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)({
      [calcite_tab_title_customElement_CSS.container]: true,
      [calcite_tab_title_customElement_CSS.containerBottom]: this.position === "bottom",
      [calcite_tab_title_customElement_CSS.iconPresent]: !!this.iconStart || !!this.iconEnd,
      [calcite_tab_title_customElement_CSS.scale(this.scale)]: true
    })} .hidden=${closed} ${(0,ref/* ref */.K)((el2) => el2 ? this.resizeObserver?.observe(el2) : null)}><div class=${(0,dist/* safeClassMap */.CP)({ [calcite_tab_title_customElement_CSS.content]: true, [calcite_tab_title_customElement_CSS.contentHasText]: this.hasText })}>${this.iconStart ? iconStartEl : null}<slot></slot>${this.iconEnd ? iconEndEl : null}</div>${this.renderCloseButton()}<div class=${(0,dist/* safeClassMap */.CP)(calcite_tab_title_customElement_CSS.selectedIndicator)}></div></div>` });
  }
  renderCloseButton() {
    const { closable, messages } = this;
    return closable ? (0,keyed/* keyed */.D)("close-button", XButton({ disabled: false, focusable: true, label: messages.close, onClick: this.closeClickHandler, ref: this.closeButtonEl, round: false, scale: this.scale, title: messages.close })) : null;
  }
}
(0,runtime.c)("calcite-tab-title", TabTitle);


;// ../node_modules/@esri/calcite-components/dist/components/calcite-tab-title/index.js


;// ../node_modules/@esri/calcite-components/dist/components/calcite-tab/customElement.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */






const calcite_tab_customElement_CSS = {
  container: "container",
  content: "content"
};
const calcite_tab_customElement_styles = (0,css_tag/* css */.AH)`:host{display:none}:host,.container,.content{block-size:100%;inline-size:100%}:host([selected]),:host([selected]) .container{display:flex;flex-direction:column}.content{box-sizing:border-box;padding-block:var(--calcite-tab-content-space-y, var(--calcite-tab-content-block-padding, var(--calcite-internal-tab-content-space-y)))}.scale-s{--calcite-internal-tab-content-space-y: .25rem;font-size:var(--calcite-font-size-sm);line-height:1rem}.scale-m{--calcite-internal-tab-content-space-y: .5rem;font-size:var(--calcite-font-size);line-height:1rem}.scale-l{--calcite-internal-tab-content-space-y: .625rem;font-size:var(--calcite-font-size-md);line-height:1.25rem}.container{display:none;block-size:100%;inline-size:100%;overflow:auto;outline-color:transparent}.container:focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}:host([hidden]){display:none}[hidden]{display:none}`;
class Tab extends dist/* LitElement */.WF {
  constructor() {
    super();
    this.guid = `calcite-tab-title-${(0,guid.g)()}`;
    this.scale = "m";
    this.selected = false;
    this.listenOn(document.body, "calciteInternalTabChange", this.internalTabChangeHandler);
  }
  static {
    this.properties = { labeledBy: [16, {}, { state: true }], scale: 1, selected: [7, {}, { reflect: true, type: Boolean }], tab: [3, {}, { reflect: true }] };
  }
  static {
    this.styles = calcite_tab_customElement_styles;
  }
  async getTabIndex() {
    return Array.prototype.indexOf.call((0,dom.n)(this.el.parentElement.children).filter((el) => el.matches("calcite-tab")), this.el);
  }
  _updateAriaInfo(tabIds = [], titleIds = []) {
    this.labeledBy = titleIds[tabIds.indexOf(this.el.id)] || null;
  }
  connectedCallback() {
    super.connectedCallback();
    this.parentTabsEl = this.el.closest("calcite-tabs");
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    document.body?.dispatchEvent(new CustomEvent("calciteTabUnregister", {
      detail: this.el
    }));
  }
  internalTabChangeHandler(event) {
    const targetTabsEl = event.composedPath().find((el) => el.tagName === "CALCITE-TABS");
    if (targetTabsEl !== this.parentTabsEl) {
      return;
    }
    if (this.tab) {
      this.selected = this.tab === event.detail.tab;
    } else {
      this.getTabIndex().then((index) => {
        this.selected = index === event.detail.tab;
      });
    }
    event.stopPropagation();
  }
  render() {
    const id = this.el.id || this.guid;
    (0,dist/* setAttribute */.Bq)(this.el, "aria-labelledby", this.labeledBy);
    (0,dist/* setAttribute */.Bq)(this.el, "id", id);
    return (0,lit_html/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)({ [calcite_tab_customElement_CSS.container]: true, [`scale-${this.scale}`]: true })} role=tabpanel .tabIndex=${this.selected ? 0 : -1}><section class=${(0,dist/* safeClassMap */.CP)(calcite_tab_customElement_CSS.content)}><slot></slot></section></div>`;
  }
}
(0,runtime.c)("calcite-tab", Tab);


;// ../node_modules/@esri/calcite-components/dist/components/calcite-tab/index.js

// EXTERNAL MODULE: ../node_modules/lit-html/node/directives/repeat.js
var repeat = __webpack_require__(27084);
// EXTERNAL MODULE: ../node_modules/lodash-es/debounce.js + 4 modules
var debounce = __webpack_require__(54559);
// EXTERNAL MODULE: ../node_modules/lodash-es/isObject.js
var isObject = __webpack_require__(17731);
;// ../node_modules/lodash-es/throttle.js



/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if ((0,isObject/* default */.A)(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return (0,debounce/* default */.A)(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/* harmony default export */ const lodash_es_throttle = (throttle);

// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/key.js
var key = __webpack_require__(14357);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/math.js
var math = __webpack_require__(97806);
;// ../node_modules/@esri/calcite-components/dist/components/calcite-color-picker/customElement.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */

















const calcite_color_picker_customElement_styles = (0,css_tag/* css */.AH)`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-normal);inline-size:var(--calcite-internal-color-picker-min-width);min-inline-size:var(--calcite-internal-color-picker-min-width)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([scale=s]){--calcite-internal-color-picker-min-width: 200px;--calcite-color-picker-spacing: 8px}:host([scale=s]) .saved-colors{gap:.25rem;grid-template-columns:repeat(auto-fill,20px)}:host([scale=m]){--calcite-internal-color-picker-min-width: 240px;--calcite-color-picker-spacing: 12px}:host([scale=l]){--calcite-internal-color-picker-min-width: 304px;--calcite-color-picker-spacing: 16px;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) .section:first-of-type{padding-block-start:var(--calcite-color-picker-spacing)}:host([scale=l]) .saved-colors{grid-template-columns:repeat(auto-fill,32px)}:host([scale=l]) .control-section{display:flex;flex-direction:column;flex-wrap:wrap;align-items:baseline}:host([scale=l]) .color-hex-options{inline-size:100%;display:flex;flex-shrink:1;flex-direction:column;justify-content:space-around}:host([scale=l]) .color-mode-container{flex-shrink:3}.container{background-color:var(--calcite-color-foreground-1);display:flex;flex-direction:column;block-size:min-content;border:1px solid var(--calcite-color-border-1)}.control-and-scope{position:relative;display:flex;cursor:pointer;touch-action:none}.color-field,.control-and-scope{-webkit-user-select:none;user-select:none}.scope{pointer-events:none;position:absolute;z-index:var(--calcite-z-index);block-size:1px;inline-size:1px;border-radius:9999px;background-color:transparent;font-size:var(--calcite-font-size--1);outline-color:transparent}.scope:focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))));outline-offset:6px}.hex-and-channels-group{display:flex;inline-size:100%;flex-direction:column;flex-wrap:wrap}.section{padding-block:0 var(--calcite-color-picker-spacing);padding-inline:var(--calcite-color-picker-spacing)}.section:first-of-type{padding-block-start:var(--calcite-color-picker-spacing)}.sliders{display:flex;flex-direction:column;justify-content:space-between;margin-inline-start:var(--calcite-color-picker-spacing);gap:var(--calcite-spacing-xxs)}.preview-and-sliders{display:flex;align-items:center;padding:var(--calcite-color-picker-spacing)}.color-hex-options,.section--split{flex-grow:1}.header{display:flex;align-items:center;justify-content:space-between;color:var(--calcite-color-text-1)}.color-mode-container{padding-block-start:var(--calcite-color-picker-spacing)}.channels{display:flex}.channel{flex-grow:1}.channel[data-channel-index="3"]{margin-inline-start:-1px;min-inline-size:81px}:host([scale=s]) .channel[data-channel-index="3"]{min-inline-size:68px}:host([scale=l]) .channel[data-channel-index="3"]{min-inline-size:88px}.saved-colors{display:grid;gap:.5rem;padding-block-start:var(--calcite-color-picker-spacing);grid-template-columns:repeat(auto-fill,24px)}.saved-colors-buttons{display:flex}.saved-color{outline-offset:0;outline-color:transparent;cursor:pointer}.saved-color:focus{outline:2px solid var(--calcite-color-brand);outline-offset:2px}.saved-color:hover{transition:outline-color var(--calcite-internal-animation-timing-fast) ease-in-out;outline:2px solid var(--calcite-color-border-2);outline-offset:2px}:host([hidden]){display:none}[hidden]{display:none}`;
const throttleFor60FpsInMs = 16;
class ColorPicker extends dist/* LitElement */.WF {
  constructor() {
    super();
    this._color = DEFAULT_COLOR;
    this.internalColorUpdateContext = null;
    this.isActiveChannelInputEmpty = false;
    this.mode = CSSColorMode.HEX;
    this.resizeObserver = (0,observers.c)("resize", (entries) => this.resizeCanvas(entries));
    this.shiftKeyChannelAdjustment = 0;
    this.upOrDownArrowKeyTracker = null;
    this._valueWasSet = false;
    this.messages = (0,useT9n.u)({ blocking: true });
    this.captureColorFieldColor = (x, y, skipEqual = true) => {
      const { width, height } = this.dynamicDimensions.colorField;
      const saturation = Math.round(HSV_LIMITS.s / width * x);
      const value = Math.round(HSV_LIMITS.v / height * (height - y));
      this.internalColorSet(this.baseColorFieldColor.hsv().saturationv(saturation).value(value), skipEqual);
    };
    this.drawColorControls = lodash_es_throttle((type = "all") => {
      if ((type === "all" || type === "color-field") && this.colorFieldRenderingContext) {
        this.drawColorField();
      }
      if ((type === "all" || type === "hue-slider") && this.hueSliderRenderingContext) {
        this.drawHueSlider();
      }
      if (this.alphaChannel && (type === "all" || type === "opacity-slider") && this.opacitySliderRenderingContext) {
        this.drawOpacitySlider();
      }
    }, throttleFor60FpsInMs);
    this.globalPointerMoveHandler = (event) => {
      const { activeCanvasInfo, el } = this;
      if (!el.isConnected || !activeCanvasInfo) {
        return;
      }
      const { context, bounds } = activeCanvasInfo;
      let samplingX;
      let samplingY;
      const { clientX, clientY } = event;
      if (context.canvas.matches(":hover")) {
        samplingX = clientX - bounds.x;
        samplingY = clientY - bounds.y;
      } else {
        if (clientX < bounds.x + bounds.width && clientX > bounds.x) {
          samplingX = clientX - bounds.x;
        } else if (clientX < bounds.x) {
          samplingX = 0;
        } else {
          samplingX = bounds.width;
        }
        if (clientY < bounds.y + bounds.height && clientY > bounds.y) {
          samplingY = clientY - bounds.y;
        } else if (clientY < bounds.y) {
          samplingY = 0;
        } else {
          samplingY = bounds.height;
        }
      }
      if (context === this.colorFieldRenderingContext) {
        this.captureColorFieldColor(samplingX, samplingY, false);
      } else if (context === this.hueSliderRenderingContext) {
        this.captureHueSliderColor(samplingX);
      } else if (context === this.opacitySliderRenderingContext) {
        this.captureOpacitySliderValue(samplingX);
      }
    };
    this.globalPointerUpHandler = (event) => {
      if (!(0,dom.i)(event)) {
        return;
      }
      const previouslyDragging = this.activeCanvasInfo;
      this.activeCanvasInfo = null;
      this.drawColorControls();
      if (previouslyDragging) {
        this.calciteColorPickerChange.emit();
      }
    };
    this.resizeCanvas = lodash_es_throttle((entries) => {
      if (!this.hasUpdated) {
        return;
      }
      const [first] = entries;
      const availableWidth = Math.floor(first.contentBoxSize[0].inlineSize);
      if (this.dynamicDimensions.colorField.width === availableWidth) {
        return;
      }
      this.updateDynamicDimensions(availableWidth);
      this.updateCanvasSize();
      this.drawColorControls();
    }, throttleFor60FpsInMs);
    this.updateDynamicDimensions = (width) => {
      const sliderDims = {
        width: getSliderWidth(width, this.staticDimensions, this.alphaChannel),
        height: this.staticDimensions.slider.height
      };
      this.dynamicDimensions = {
        colorField: getColorFieldDimensions(width),
        slider: sliderDims
      };
    };
    this.channelMode = "rgb";
    this.channels = this.toChannels(DEFAULT_COLOR);
    this.staticDimensions = STATIC_DIMENSIONS.m;
    this.savedColors = [];
    this.allowEmpty = false;
    this.alphaChannel = false;
    this.channelsDisabled = false;
    this.clearable = false;
    this.disabled = false;
    this.format = "auto";
    this.hexDisabled = false;
    this.savedDisabled = false;
    this.scale = "m";
    this.calciteColorPickerChange = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.calciteColorPickerInput = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.listen("keydown", this.handleChannelKeyUpOrDown, { capture: true });
    this.listen("keyup", this.handleChannelKeyUpOrDown, { capture: true });
  }
  static {
    this.properties = { channelMode: [16, {}, { state: true }], channels: [16, {}, { state: true }], colorFieldScopeLeft: [16, {}, { state: true }], colorFieldScopeTop: [16, {}, { state: true }], staticDimensions: [16, {}, { state: true }], hueScopeLeft: [16, {}, { state: true }], opacityScopeLeft: [16, {}, { state: true }], savedColors: [16, {}, { state: true }], scopeOrientation: [16, {}, { state: true }], allowEmpty: [7, {}, { reflect: true, type: Boolean }], alphaChannel: [5, {}, { type: Boolean }], channelsDisabled: [5, {}, { type: Boolean }], clearable: [7, {}, { reflect: true, type: Boolean }], color: [0, {}, { attribute: false }], disabled: [7, {}, { reflect: true, type: Boolean }], format: [3, {}, { reflect: true }], hexDisabled: [5, {}, { type: Boolean }], messageOverrides: [0, {}, { attribute: false }], numberingSystem: [3, {}, { reflect: true }], savedDisabled: [7, {}, { reflect: true, type: Boolean }], scale: [3, {}, { reflect: true }], storageId: [3, {}, { reflect: true }], value: 1 };
  }
  static {
    this.styles = calcite_color_picker_customElement_styles;
  }
  get color() {
    return this._color;
  }
  set color(color) {
    const oldColor = this._color;
    this._color = color;
    this.handleColorChange(color, oldColor);
  }
  get value() {
    return this._value;
  }
  set value(value) {
    const oldValue = this._value;
    this._value = value;
    this.handleValueChange(value, oldValue);
    this._valueWasSet = true;
  }
  async setFocus() {
    await (0,component.c)(this);
    (0,dom.h)(this.el);
  }
  connectedCallback() {
    super.connectedCallback();
    this.observeResize();
  }
  async load() {
    if (!this._valueWasSet) {
      this._value ??= normalizeHex(hexify(DEFAULT_COLOR, this.alphaChannel));
    }
    this.handleAllowEmptyOrClearableChange();
    const { isClearable, color, format, value } = this;
    const willSetNoColor = isClearable && !value;
    const parsedMode = parseMode(value);
    const valueIsCompatible = willSetNoColor || format === "auto" && parsedMode || format === parsedMode;
    const initialColor = willSetNoColor ? null : valueIsCompatible ? node_modules_color(value) : color;
    if (!valueIsCompatible) {
      this.showIncompatibleColorWarning(value, format);
    }
    this.setMode(format, false);
    this.internalColorSet(initialColor, false, "initial");
    this.updateStaticDimensions(this.scale);
    this.updateDynamicDimensions(STATIC_DIMENSIONS[this.scale].minWidth);
    const storageKey = `${DEFAULT_STORAGE_KEY_PREFIX}${this.storageId}`;
    if (this.storageId && localStorage.getItem(storageKey)) {
      this.savedColors = JSON.parse(localStorage.getItem(storageKey));
    }
  }
  willUpdate(changes) {
    if (changes.has("allowEmpty") && (this.hasUpdated || this.allowEmpty !== false) || changes.has("clearable") && (this.hasUpdated || this.clearable !== false)) {
      this.handleAllowEmptyOrClearableChange();
    }
    if (changes.has("alphaChannel") && (this.hasUpdated || this.alphaChannel !== false)) {
      this.handleAlphaChannelChange(this.alphaChannel);
    }
    if (this.hasUpdated && (changes.has("alphaChannel") && this.alphaChannel !== false || changes.has("staticDimensions") && this.staticDimensions !== STATIC_DIMENSIONS.m)) {
      this.handleAlphaChannelDimensionsChange();
    }
    if (changes.has("alphaChannel") && (this.hasUpdated || this.alphaChannel !== false) || changes.has("format") && (this.hasUpdated || this.format !== "auto")) {
      this.handleFormatOrAlphaChannelChange();
    }
    if (changes.has("scale") && (this.hasUpdated || this.scale !== "m")) {
      this.handleScaleChange(this.scale);
    }
  }
  updated() {
    (0,interactive.u)(this);
  }
  loaded() {
    this.handleAlphaChannelDimensionsChange();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("pointermove", this.globalPointerMoveHandler);
    window.removeEventListener("pointerup", this.globalPointerUpHandler);
    this.resizeObserver?.disconnect();
  }
  get baseColorFieldColor() {
    return this.color || this.previousColor || DEFAULT_COLOR;
  }
  get effectiveSliderWidth() {
    return this.dynamicDimensions.slider.width;
  }
  observeResize() {
    this.resizeObserver?.observe(this.el);
  }
  handleAllowEmptyOrClearableChange() {
    this.isClearable = this.clearable || this.allowEmpty;
  }
  handleAlphaChannelChange(alphaChannel) {
    const { format } = this;
    if (alphaChannel && format !== "auto" && !alphaCompatible(format)) {
      console.warn(`ignoring alphaChannel as the current format (${format}) does not support alpha`);
      this.alphaChannel = false;
    }
  }
  handleAlphaChannelDimensionsChange() {
    this.drawColorControls();
  }
  handleColorChange(color, oldColor) {
    this.drawColorControls();
    this.updateChannelsFromColor(color);
    this.previousColor = oldColor;
  }
  handleFormatOrAlphaChannelChange() {
    this.setMode(this.format);
    this.internalColorSet(this.color, false, "internal");
  }
  handleScaleChange(scale = "m") {
    this.updateStaticDimensions(scale);
    this.updateCanvasSize();
    this.drawColorControls();
  }
  handleValueChange(value, oldValue) {
    const { isClearable, format } = this;
    const checkMode = !isClearable || value;
    let modeChanged = false;
    if (checkMode) {
      const nextMode = parseMode(value);
      if (!nextMode || format !== "auto" && nextMode !== format) {
        this.showIncompatibleColorWarning(value, format);
        this._value = oldValue;
        return;
      }
      modeChanged = this.mode !== nextMode;
      this.setMode(nextMode, this.internalColorUpdateContext === null);
    }
    const dragging = this.activeCanvasInfo;
    if (this.internalColorUpdateContext === "initial") {
      return;
    }
    if (this.internalColorUpdateContext === "user-interaction") {
      this.calciteColorPickerInput.emit();
      if (!dragging) {
        this.calciteColorPickerChange.emit();
      }
      return;
    }
    const color = isClearable && !value ? null : node_modules_color(value != null && typeof value === "object" && alphaCompatible(this.mode) ? normalizeColor(value) : value);
    const colorChanged = !colorEqual(color, this.color);
    if (modeChanged || colorChanged) {
      this.internalColorSet(color, this.alphaChannel && !(this.mode.endsWith("a") || this.mode.endsWith("a-css")) || this.internalColorUpdateContext === "internal", "internal");
    }
  }
  handleTabActivate(event) {
    this.channelMode = event.currentTarget.getAttribute("data-color-mode");
    this.updateChannelsFromColor(this.color);
  }
  handleColorFieldScopeKeyDown(event) {
    const { key } = event;
    const arrowKeyToXYOffset = {
      ArrowUp: { x: 0, y: -10 },
      ArrowRight: { x: 10, y: 0 },
      ArrowDown: { x: 0, y: 10 },
      ArrowLeft: { x: -10, y: 0 }
    };
    if (arrowKeyToXYOffset[key]) {
      event.preventDefault();
      this.scopeOrientation = key === "ArrowDown" || key === "ArrowUp" ? "vertical" : "horizontal";
      this.captureColorFieldColor(this.colorFieldScopeLeft + arrowKeyToXYOffset[key].x || 0, this.colorFieldScopeTop + arrowKeyToXYOffset[key].y || 0, false);
    }
  }
  handleHueScopeKeyDown(event) {
    const modifier = event.shiftKey ? 10 : 1;
    const { key } = event;
    const arrowKeyToXOffset = {
      ArrowUp: 1,
      ArrowRight: 1,
      ArrowDown: -1,
      ArrowLeft: -1
    };
    if (arrowKeyToXOffset[key]) {
      event.preventDefault();
      const delta = arrowKeyToXOffset[key] * modifier;
      const hue = this.baseColorFieldColor.hue();
      const color = this.baseColorFieldColor.hue(hue + delta);
      this.internalColorSet(color, false);
    }
  }
  handleHexInputChange(event) {
    event.stopPropagation();
    const { isClearable, color } = this;
    const input = event.target;
    const hex = input.value;
    if (isClearable && !hex) {
      this.internalColorSet(null);
      return;
    }
    const normalizedHex = color && normalizeHex(hexify(color, alphaCompatible(this.mode)));
    if (hex !== normalizedHex) {
      this.internalColorSet(node_modules_color(hex));
    }
  }
  handleSavedColorSelect(event) {
    const swatch = event.currentTarget;
    this.internalColorSet(node_modules_color(swatch.color));
  }
  handleChannelInput(event) {
    const input = event.currentTarget;
    const channelIndex = Number(input.getAttribute("data-channel-index"));
    const isAlphaChannel = channelIndex === 3;
    const limit = isAlphaChannel ? OPACITY_LIMITS.max : this.channelMode === "rgb" ? RGB_LIMITS[Object.keys(RGB_LIMITS)[channelIndex]] : HSV_LIMITS[Object.keys(HSV_LIMITS)[channelIndex]];
    let inputValue;
    if (!input.value) {
      inputValue = "";
      this.isActiveChannelInputEmpty = true;
      this.upOrDownArrowKeyTracker = null;
    } else {
      const value = Number(input.value);
      const adjustedValue = value + this.shiftKeyChannelAdjustment;
      const clamped = (0,math.c)(adjustedValue, 0, limit);
      inputValue = clamped.toString();
    }
    input.value = inputValue;
    if (inputValue !== "" && this.shiftKeyChannelAdjustment !== 0) {
      this.handleChannelChange(event);
    } else if (inputValue !== "") {
      this.handleChannelChange(event);
    }
  }
  handleChannelBlur(event) {
    const input = event.currentTarget;
    const channelIndex = Number(input.getAttribute("data-channel-index"));
    const channels = [...this.channels];
    const restoreValueDueToEmptyInput = !input.value && !this.isClearable;
    if (restoreValueDueToEmptyInput) {
      input.value = channels[channelIndex]?.toString();
    }
  }
  handleChannelFocus(event) {
    const input = event.currentTarget;
    input.selectText();
  }
  handleChannelKeyUpOrDown(event) {
    this.shiftKeyChannelAdjustment = 0;
    const { key } = event;
    if (key !== "ArrowUp" && key !== "ArrowDown" || !event.composedPath().some((node) => node.classList?.contains(CSS.channel))) {
      return;
    }
    const { shiftKey } = event;
    event.preventDefault();
    if (!this.color) {
      this.internalColorSet(this.previousColor);
      event.stopPropagation();
      return;
    }
    const complementaryBump = 9;
    this.shiftKeyChannelAdjustment = key === "ArrowUp" && shiftKey ? complementaryBump : key === "ArrowDown" && shiftKey ? -9 : 0;
    if (key === "ArrowUp") {
      this.upOrDownArrowKeyTracker = "up";
    }
    if (key === "ArrowDown") {
      this.upOrDownArrowKeyTracker = "down";
    }
  }
  getChannelInputLimit(channelIndex) {
    return this.channelMode === "rgb" ? RGB_LIMITS[Object.keys(RGB_LIMITS)[channelIndex]] : HSV_LIMITS[Object.keys(HSV_LIMITS)[channelIndex]];
  }
  handleChannelChange(event) {
    const input = event.currentTarget;
    const channelIndex = Number(input.getAttribute("data-channel-index"));
    const channels = [...this.channels];
    const shouldClearChannels = this.isClearable && !input.value;
    if (shouldClearChannels) {
      this.channels = [null, null, null, null];
      this.internalColorSet(null);
      return;
    }
    const isAlphaChannel = channelIndex === 3;
    if (this.isActiveChannelInputEmpty && this.upOrDownArrowKeyTracker) {
      input.value = this.upOrDownArrowKeyTracker === "up" ? (channels[channelIndex] + 1 <= this.getChannelInputLimit(channelIndex) ? channels[channelIndex] + 1 : this.getChannelInputLimit(channelIndex)).toString() : (channels[channelIndex] - 1 >= 0 ? channels[channelIndex] - 1 : 0).toString();
      this.isActiveChannelInputEmpty = false;
      this.upOrDownArrowKeyTracker = null;
    }
    const value = input.value ? Number(input.value) : channels[channelIndex];
    channels[channelIndex] = isAlphaChannel ? opacityToAlpha(value) : value;
    this.updateColorFromChannels(channels);
  }
  handleSavedColorKeyDown(event) {
    if ((0,key.i)(event.key)) {
      event.preventDefault();
      this.handleSavedColorSelect(event);
    }
  }
  handleColorFieldPointerDown(event) {
    this.handleCanvasControlPointerDown(event, this.colorFieldRenderingContext, this.captureColorFieldColor, this.colorFieldScopeNode);
  }
  focusScope(focusEl) {
    requestAnimationFrame(() => {
      focusEl.focus();
    });
  }
  handleHueSliderPointerDown(event) {
    this.handleCanvasControlPointerDown(event, this.hueSliderRenderingContext, this.captureHueSliderColor, this.hueScopeNode);
  }
  handleOpacitySliderPointerDown(event) {
    this.handleCanvasControlPointerDown(event, this.opacitySliderRenderingContext, this.captureOpacitySliderValue, this.opacityScopeNode);
  }
  handleCanvasControlPointerDown(event, renderingContext, captureValue, scopeNode) {
    if (!(0,dom.i)(event)) {
      return;
    }
    window.addEventListener("pointermove", this.globalPointerMoveHandler);
    window.addEventListener("pointerup", this.globalPointerUpHandler, {
      once: true
    });
    this.activeCanvasInfo = {
      context: renderingContext,
      bounds: renderingContext.canvas.getBoundingClientRect()
    };
    captureValue.call(this, event.offsetX, event.offsetY);
    this.focusScope(scopeNode);
  }
  storeColorFieldScope(node) {
    this.colorFieldScopeNode = node;
  }
  storeHueScope(node) {
    this.hueScopeNode = node;
  }
  handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }
  showIncompatibleColorWarning(value, format) {
    console.warn(`ignoring color value (${value}) as it is not compatible with the current format (${format})`);
  }
  setMode(format, warn = true) {
    const mode = format === "auto" ? this.mode : format;
    this.mode = this.ensureCompatibleMode(mode, warn);
  }
  ensureCompatibleMode(mode, warn) {
    const { alphaChannel } = this;
    const isAlphaCompatible = alphaCompatible(mode);
    if (alphaChannel && !isAlphaCompatible) {
      const alphaMode = toAlphaMode(mode);
      if (warn) {
        console.warn(`setting format to (${alphaMode}) as the provided one (${mode}) does not support alpha`);
      }
      return alphaMode;
    }
    if (!alphaChannel && isAlphaCompatible) {
      const nonAlphaMode = toNonAlphaMode(mode);
      if (warn) {
        console.warn(`setting format to (${nonAlphaMode}) as the provided one (${mode}) does not support alpha`);
      }
      return nonAlphaMode;
    }
    return mode;
  }
  captureHueSliderColor(x) {
    const hue = HUE_LIMIT_CONSTRAINED / this.effectiveSliderWidth * x;
    this.internalColorSet(this.baseColorFieldColor.hue(hue), false);
  }
  captureOpacitySliderValue(x) {
    const alpha = opacityToAlpha(OPACITY_LIMITS.max / this.effectiveSliderWidth * x);
    this.internalColorSet(this.baseColorFieldColor.alpha(alpha), false);
  }
  internalColorSet(color, skipEqual = true, context = "user-interaction") {
    if (skipEqual && colorEqual(color, this.color)) {
      return;
    }
    this.internalColorUpdateContext = context;
    this.color = color;
    this.value = this.toValue(color);
    this.internalColorUpdateContext = null;
  }
  toValue(color, format = this.mode) {
    if (!color) {
      return null;
    }
    const hexMode = "hex";
    if (format.includes(hexMode)) {
      const hasAlpha = format === CSSColorMode.HEXA;
      return normalizeHex(hexify(color.round(), hasAlpha), hasAlpha);
    }
    if (format.includes("-css")) {
      const value = color[format.replace("-css", "").replace("a", "")]().round().string();
      const needToInjectAlpha = (format.endsWith("a") || format.endsWith("a-css")) && color.alpha() === 1;
      if (needToInjectAlpha) {
        const model = value.slice(0, 3);
        const values = value.slice(4, -1);
        return `${model}a(${values}, ${color.alpha()})`;
      }
      return value;
    }
    const colorObject = (
      /* Color() does not support hsva, hsla nor rgba, so we use the non-alpha mode */
      color[toNonAlphaMode(format)]().round().object()
    );
    if (format.endsWith("a")) {
      return normalizeAlpha(colorObject);
    }
    return colorObject;
  }
  getSliderCapSpacing() {
    const { staticDimensions: { slider: { height }, thumb: { radius } } } = this;
    return radius * 2 - height;
  }
  updateStaticDimensions(scale = "m") {
    this.staticDimensions = STATIC_DIMENSIONS[scale];
  }
  deleteColor() {
    const colorToDelete = hexify(this.color, this.alphaChannel);
    const inStorage = this.savedColors.indexOf(colorToDelete) > -1;
    if (!inStorage) {
      return;
    }
    const savedColors = this.savedColors.filter((color) => color !== colorToDelete);
    this.savedColors = savedColors;
    const storageKey = `${DEFAULT_STORAGE_KEY_PREFIX}${this.storageId}`;
    if (this.storageId) {
      localStorage.setItem(storageKey, JSON.stringify(savedColors));
    }
  }
  saveColor() {
    const colorToSave = hexify(this.color, this.alphaChannel);
    const alreadySaved = this.savedColors.indexOf(colorToSave) > -1;
    if (alreadySaved) {
      return;
    }
    const savedColors = [...this.savedColors, colorToSave];
    this.savedColors = savedColors;
    const storageKey = `${DEFAULT_STORAGE_KEY_PREFIX}${this.storageId}`;
    if (this.storageId) {
      localStorage.setItem(storageKey, JSON.stringify(savedColors));
    }
  }
  drawColorField() {
    const context = this.colorFieldRenderingContext;
    const { width, height } = this.dynamicDimensions.colorField;
    context.fillStyle = this.baseColorFieldColor.hsv().saturationv(100).value(100).alpha(1).string();
    context.fillRect(0, 0, width, height);
    const whiteGradient = context.createLinearGradient(0, 0, width, 0);
    whiteGradient.addColorStop(0, "rgba(255,255,255,1)");
    whiteGradient.addColorStop(1, "rgba(255,255,255,0)");
    context.fillStyle = whiteGradient;
    context.fillRect(0, 0, width, height);
    const blackGradient = context.createLinearGradient(0, 0, 0, height);
    blackGradient.addColorStop(0, "rgba(0,0,0,0)");
    blackGradient.addColorStop(1, "rgba(0,0,0,1)");
    context.fillStyle = blackGradient;
    context.fillRect(0, 0, width, height);
    this.drawActiveColorFieldColor();
  }
  setCanvasContextSize(canvas, { height, width }) {
    if (!canvas) {
      return;
    }
    const devicePixelRatio = window.devicePixelRatio || 1;
    canvas.width = width * devicePixelRatio;
    canvas.height = height * devicePixelRatio;
    canvas.style.height = `${height}px`;
    canvas.style.width = `${width}px`;
    const context = canvas.getContext("2d");
    context.scale(devicePixelRatio, devicePixelRatio);
  }
  initColorField(canvas) {
    if (!canvas) {
      return;
    }
    this.colorFieldRenderingContext = canvas.getContext("2d");
    this.updateCanvasSize("color-field");
    this.drawColorControls();
  }
  initHueSlider(canvas) {
    if (!canvas) {
      return;
    }
    this.hueSliderRenderingContext = canvas.getContext("2d");
    this.updateCanvasSize("hue-slider");
    this.drawHueSlider();
  }
  initOpacitySlider(canvas) {
    if (!canvas) {
      return;
    }
    this.opacitySliderRenderingContext = canvas.getContext("2d");
    this.updateCanvasSize("opacity-slider");
    this.drawOpacitySlider();
  }
  updateCanvasSize(context = "all") {
    const { dynamicDimensions, staticDimensions } = this;
    if (context === "all" || context === "color-field") {
      this.setCanvasContextSize(this.colorFieldRenderingContext?.canvas, dynamicDimensions.colorField);
    }
    const adjustedSliderDimensions = {
      width: this.effectiveSliderWidth,
      height: staticDimensions.slider.height + (staticDimensions.thumb.radius - dynamicDimensions.slider.height / 2) * 2
    };
    if (context === "all" || context === "hue-slider") {
      this.setCanvasContextSize(this.hueSliderRenderingContext?.canvas, adjustedSliderDimensions);
    }
    if (context === "all" || context === "opacity-slider") {
      this.setCanvasContextSize(this.opacitySliderRenderingContext?.canvas, adjustedSliderDimensions);
    }
  }
  drawActiveColorFieldColor() {
    const { color } = this;
    if (!color) {
      return;
    }
    const hsvColor = color.hsv();
    const { staticDimensions: { thumb: { radius } } } = this;
    const { width, height } = this.dynamicDimensions.colorField;
    const x = hsvColor.saturationv() / (HSV_LIMITS.s / width);
    const y = height - hsvColor.value() / (HSV_LIMITS.v / height);
    requestAnimationFrame(() => {
      this.colorFieldScopeLeft = x;
      this.colorFieldScopeTop = y;
    });
    this.drawThumb(this.colorFieldRenderingContext, radius, x, y, hsvColor, false);
  }
  drawThumb(context, radius, x, y, color, applyAlpha) {
    const startAngle = 0;
    const endAngle = 2 * Math.PI;
    const outlineWidth = 1;
    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle);
    context.fillStyle = "#fff";
    context.fill();
    context.strokeStyle = "rgba(0,0,0,0.3)";
    context.lineWidth = outlineWidth;
    context.stroke();
    if (applyAlpha && color.alpha() < 1) {
      const pattern = context.createPattern(this.getCheckeredBackgroundPattern(), "repeat");
      context.beginPath();
      context.arc(x, y, radius - 3, startAngle, endAngle);
      context.fillStyle = pattern;
      context.fill();
    }
    context.globalCompositeOperation = "source-atop";
    context.beginPath();
    context.arc(x, y, radius - 3, startAngle, endAngle);
    const alpha = applyAlpha ? color.alpha() : 1;
    context.fillStyle = color.rgb().alpha(alpha).string();
    context.fill();
    context.globalCompositeOperation = "source-over";
  }
  drawActiveHueSliderColor() {
    const { color } = this;
    if (!color) {
      return;
    }
    const hsvColor = color.hsv().saturationv(100).value(100);
    const { staticDimensions: { thumb: { radius } } } = this;
    const width = this.effectiveSliderWidth;
    const x = hsvColor.hue() / (HUE_LIMIT_CONSTRAINED / width);
    const y = radius;
    const sliderBoundX = this.getSliderBoundX(x, width, radius);
    requestAnimationFrame(() => {
      this.hueScopeLeft = sliderBoundX;
    });
    this.drawThumb(this.hueSliderRenderingContext, radius, sliderBoundX, y, hsvColor, false);
  }
  drawHueSlider() {
    const context = this.hueSliderRenderingContext;
    const { staticDimensions: { slider: { height }, thumb: { radius: thumbRadius } } } = this;
    const x = 0;
    const y = thumbRadius - height / 2;
    const width = this.effectiveSliderWidth;
    const gradient = context.createLinearGradient(0, 0, width, 0);
    const hueSliderColorStopKeywords = [
      "red",
      "yellow",
      "lime",
      "cyan",
      "blue",
      "magenta",
      "#ff0004"
    ];
    const offset = 1 / (hueSliderColorStopKeywords.length - 1);
    let currentOffset = 0;
    hueSliderColorStopKeywords.forEach((keyword) => {
      gradient.addColorStop(currentOffset, node_modules_color(keyword).string());
      currentOffset += offset;
    });
    context.clearRect(0, 0, width, height + this.getSliderCapSpacing() * 2);
    this.drawSliderPath(context, height, width, x, y);
    context.fillStyle = gradient;
    context.fill();
    context.strokeStyle = "rgba(0,0,0,0.3)";
    context.lineWidth = 1;
    context.stroke();
    this.drawActiveHueSliderColor();
  }
  drawOpacitySlider() {
    const context = this.opacitySliderRenderingContext;
    const { baseColorFieldColor: previousColor, staticDimensions: { slider: { height }, thumb: { radius: thumbRadius } } } = this;
    const x = 0;
    const y = thumbRadius - height / 2;
    const width = this.effectiveSliderWidth;
    context.clearRect(0, 0, width, height + this.getSliderCapSpacing() * 2);
    const gradient = context.createLinearGradient(0, y, width, 0);
    const startColor = previousColor.rgb().alpha(0);
    const midColor = previousColor.rgb().alpha(0.5);
    const endColor = previousColor.rgb().alpha(1);
    gradient.addColorStop(0, startColor.string());
    gradient.addColorStop(0.5, midColor.string());
    gradient.addColorStop(1, endColor.string());
    this.drawSliderPath(context, height, width, x, y);
    const pattern = context.createPattern(this.getCheckeredBackgroundPattern(), "repeat");
    context.fillStyle = pattern;
    context.fill();
    context.fillStyle = gradient;
    context.fill();
    context.strokeStyle = "rgba(0,0,0,0.3)";
    context.lineWidth = 1;
    context.stroke();
    this.drawActiveOpacitySliderColor();
  }
  drawSliderPath(context, height, width, x, y) {
    const radius = height / 2 + 1;
    context.beginPath();
    context.moveTo(x + radius, y);
    context.lineTo(x + width - radius, y);
    context.quadraticCurveTo(x + width, y, x + width, y + radius);
    context.lineTo(x + width, y + height - radius);
    context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    context.lineTo(x + radius, y + height);
    context.quadraticCurveTo(x, y + height, x, y + height - radius);
    context.lineTo(x, y + radius);
    context.quadraticCurveTo(x, y, x + radius, y);
    context.closePath();
  }
  getCheckeredBackgroundPattern() {
    if (this.checkerPattern) {
      return this.checkerPattern;
    }
    const pattern = document.createElement("canvas");
    pattern.width = 10;
    pattern.height = 10;
    const patternContext = pattern.getContext("2d");
    patternContext.fillStyle = "#ccc";
    patternContext.fillRect(0, 0, 10, 10);
    patternContext.fillStyle = "#fff";
    patternContext.fillRect(0, 0, 5, 5);
    patternContext.fillRect(5, 5, 5, 5);
    this.checkerPattern = pattern;
    return pattern;
  }
  drawActiveOpacitySliderColor() {
    const { color } = this;
    if (!color) {
      return;
    }
    const hsvColor = color;
    const { staticDimensions: { thumb: { radius } } } = this;
    const width = this.effectiveSliderWidth;
    const x = alphaToOpacity(hsvColor.alpha()) / (OPACITY_LIMITS.max / width);
    const y = radius;
    const sliderBoundX = this.getSliderBoundX(x, width, radius);
    requestAnimationFrame(() => {
      this.opacityScopeLeft = sliderBoundX;
    });
    this.drawThumb(this.opacitySliderRenderingContext, radius, sliderBoundX, y, hsvColor, true);
  }
  getSliderBoundX(x, width, radius) {
    const closeToEdge = (0,math.a)(x, width, radius);
    return closeToEdge === 0 ? x : closeToEdge === -1 ? (0,math.r)(x, 0, width, radius, radius * 2) : (0,math.r)(x, 0, width, width - radius * 2, width - radius);
  }
  storeOpacityScope(node) {
    this.opacityScopeNode = node;
  }
  handleOpacityScopeKeyDown(event) {
    const modifier = event.shiftKey ? 10 : 1;
    const { key } = event;
    const arrowKeyToXOffset = {
      ArrowUp: 0.01,
      ArrowRight: 0.01,
      ArrowDown: -0.01,
      ArrowLeft: -0.01
    };
    if (arrowKeyToXOffset[key]) {
      event.preventDefault();
      const delta = arrowKeyToXOffset[key] * modifier;
      const alpha = this.baseColorFieldColor.alpha();
      const color = this.baseColorFieldColor.alpha(alpha + delta);
      this.internalColorSet(color, false);
    }
  }
  updateColorFromChannels(channels) {
    this.internalColorSet(node_modules_color(channels, this.channelMode));
  }
  updateChannelsFromColor(color) {
    this.channels = color ? this.toChannels(color) : [null, null, null, null];
  }
  toChannels(color) {
    const { channelMode } = this;
    const channels = color[channelMode]().array().map((value, index) => {
      const isAlpha = index === 3;
      return isAlpha ? value : Math.floor(value);
    });
    if (channels.length === 3) {
      channels.push(1);
    }
    return channels;
  }
  getAdjustedScopePosition(left, top) {
    return [left - SCOPE_SIZE / 2, top - SCOPE_SIZE / 2];
  }
  render() {
    const { channelsDisabled, color, colorFieldScopeLeft, colorFieldScopeTop, staticDimensions: { thumb: { radius: thumbRadius } }, hexDisabled, hueScopeLeft, messages, alphaChannel, opacityScopeLeft, savedColors, savedDisabled, scale, scopeOrientation } = this;
    const sliderWidth = this.effectiveSliderWidth;
    const selectedColorInHex = color ? hexify(color, alphaChannel) : null;
    const hueTop = thumbRadius;
    const hueLeft = hueScopeLeft ?? sliderWidth * DEFAULT_COLOR.hue() / HSV_LIMITS.h;
    const opacityTop = thumbRadius;
    const opacityLeft = opacityScopeLeft ?? sliderWidth * alphaToOpacity(DEFAULT_COLOR.alpha()) / OPACITY_LIMITS.max;
    const noColor = color === void 0;
    const vertical = scopeOrientation === "vertical";
    const [adjustedColorFieldScopeLeft, adjustedColorFieldScopeTop] = this.getAdjustedScopePosition(colorFieldScopeLeft, colorFieldScopeTop);
    const [adjustedHueScopeLeft, adjustedHueScopeTop] = this.getAdjustedScopePosition(hueLeft, hueTop);
    const [adjustedOpacityScopeLeft, adjustedOpacityScopeTop] = this.getAdjustedScopePosition(opacityLeft, opacityTop);
    return (0,interactive.I)({ disabled: this.disabled, children: (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(CSS.container)}><div class=${(0,dist/* safeClassMap */.CP)(CSS.controlAndScope)}><canvas class=${(0,dist/* safeClassMap */.CP)(CSS.colorField)} @pointerdown=${this.handleColorFieldPointerDown} ${(0,ref/* ref */.K)(this.initColorField)}></canvas><div .ariaLabel=${vertical ? messages.value : messages.saturation} .ariaValueMax=${vertical ? HSV_LIMITS.v : HSV_LIMITS.s} aria-valuemin=0 .ariaValueNow=${(vertical ? color?.saturationv() : color?.value()) || "0"} class=${(0,dist/* safeClassMap */.CP)({ [CSS.scope]: true, [CSS.colorFieldScope]: true })} @keydown=${this.handleColorFieldScopeKeyDown} role=slider style=${(0,dist/* safeStyleMap */.zl)({
      top: `${adjustedColorFieldScopeTop || 0}px`,
      left: `${adjustedColorFieldScopeLeft || 0}px`
    })} tabindex=0 ${(0,ref/* ref */.K)(this.storeColorFieldScope)}></div></div><div class=${(0,dist/* safeClassMap */.CP)(CSS.previewAndSliders)}><calcite-color-picker-swatch class=${(0,dist/* safeClassMap */.CP)(CSS.preview)} .color=${selectedColorInHex} .scale=${this.alphaChannel ? "l" : this.scale}></calcite-color-picker-swatch><div class=${(0,dist/* safeClassMap */.CP)(CSS.sliders)}><div class=${(0,dist/* safeClassMap */.CP)(CSS.controlAndScope)}><canvas class=${(0,dist/* safeClassMap */.CP)({ [CSS.slider]: true, [CSS.hueSlider]: true })} @pointerdown=${this.handleHueSliderPointerDown} ${(0,ref/* ref */.K)(this.initHueSlider)}></canvas><div .ariaLabel=${messages.hue} .ariaValueMax=${HSV_LIMITS.h} aria-valuemin=0 .ariaValueNow=${color?.round().hue() || DEFAULT_COLOR.round().hue()} class=${(0,dist/* safeClassMap */.CP)({ [CSS.scope]: true, [CSS.hueScope]: true })} @keydown=${this.handleHueScopeKeyDown} role=slider style=${(0,dist/* safeStyleMap */.zl)({
      top: `${adjustedHueScopeTop}px`,
      left: `${adjustedHueScopeLeft}px`
    })} tabindex=0 ${(0,ref/* ref */.K)(this.storeHueScope)}></div></div>${alphaChannel ? (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(CSS.controlAndScope)}><canvas class=${(0,dist/* safeClassMap */.CP)({ [CSS.slider]: true, [CSS.opacitySlider]: true })} @pointerdown=${this.handleOpacitySliderPointerDown} ${(0,ref/* ref */.K)(this.initOpacitySlider)}></canvas><div .ariaLabel=${messages.opacity} .ariaValueMax=${OPACITY_LIMITS.max} .ariaValueMin=${OPACITY_LIMITS.min} .ariaValueNow=${(color || DEFAULT_COLOR).round().alpha()} class=${(0,dist/* safeClassMap */.CP)({ [CSS.scope]: true, [CSS.opacityScope]: true })} @keydown=${this.handleOpacityScopeKeyDown} role=slider style=${(0,dist/* safeStyleMap */.zl)({
      top: `${adjustedOpacityScopeTop}px`,
      left: `${adjustedOpacityScopeLeft}px`
    })} tabindex=0 ${(0,ref/* ref */.K)(this.storeOpacityScope)}></div></div>` : null}</div></div>${hexDisabled && channelsDisabled ? null : (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)({
      [CSS.controlSection]: true,
      [CSS.section]: true
    })}><div class=${(0,dist/* safeClassMap */.CP)(CSS.hexAndChannelsGroup)}>${hexDisabled ? null : (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(CSS.hexOptions)}><calcite-color-picker-hex-input .allowEmpty=${this.isClearable} .alphaChannel=${alphaChannel} class=${(0,dist/* safeClassMap */.CP)(CSS.control)} .messages=${messages} .numberingSystem=${this.numberingSystem} @calciteColorPickerHexInputChange=${this.handleHexInputChange} .scale=${scale} .value=${selectedColorInHex}></calcite-color-picker-hex-input></div>`}${channelsDisabled ? null : (0,lit/* html */.qy)`<calcite-tabs class=${(0,dist/* safeClassMap */.CP)({
      [CSS.colorModeContainer]: true,
      [CSS.splitSection]: true
    })} .scale=${scale === "l" ? "m" : "s"}><calcite-tab-nav slot=title-group>${this.renderChannelsTabTitle("rgb")}${this.renderChannelsTabTitle("hsv")}</calcite-tab-nav>${this.renderChannelsTab("rgb")}${this.renderChannelsTab("hsv")}</calcite-tabs>`}</div></div>`}${savedDisabled ? null : (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)({ [CSS.savedColorsSection]: true, [CSS.section]: true })}><div class=${(0,dist/* safeClassMap */.CP)(CSS.header)}><label>${messages.saved}</label><div class=${(0,dist/* safeClassMap */.CP)(CSS.savedColorsButtons)}><calcite-button appearance=transparent class=${(0,dist/* safeClassMap */.CP)(CSS.deleteColor)} .disabled=${noColor} icon-start=minus kind=neutral .label=${messages.deleteColor} @click=${this.deleteColor} .scale=${scale} type=button></calcite-button><calcite-button appearance=transparent class=${(0,dist/* safeClassMap */.CP)(CSS.saveColor)} .disabled=${noColor} icon-start=plus kind=neutral .label=${messages.saveColor} @click=${this.saveColor} .scale=${scale} type=button></calcite-button></div></div>${savedColors.length > 0 ? (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(CSS.savedColors)}>${(0,repeat/* repeat */.u)(savedColors, (color2) => color2, (color2) => (0,lit/* html */.qy)`<calcite-color-picker-swatch class=${(0,dist/* safeClassMap */.CP)(CSS.savedColor)} .color=${color2} @click=${this.handleSavedColorSelect} @keydown=${this.handleSavedColorKeyDown} .scale=${scale} tabindex=0></calcite-color-picker-swatch>`)}</div>` : null}</div>`}</div>` });
  }
  renderChannelsTabTitle(channelMode) {
    const { channelMode: activeChannelMode, messages } = this;
    const selected = channelMode === activeChannelMode;
    const label = channelMode === "rgb" ? messages.rgb : messages.hsv;
    return (0,keyed/* keyed */.D)(channelMode, (0,lit/* html */.qy)`<calcite-tab-title class=${(0,dist/* safeClassMap */.CP)(CSS.colorMode)} data-color-mode=${channelMode ?? lit/* nothing */.s6} @calciteTabsActivate=${this.handleTabActivate} .selected=${selected}>${label}</calcite-tab-title>`);
  }
  renderChannelsTab(channelMode) {
    const { isClearable, channelMode: activeChannelMode, channels, messages, alphaChannel } = this;
    const selected = channelMode === activeChannelMode;
    const isRgb = channelMode === "rgb";
    const channelAriaLabels = isRgb ? [messages.red, messages.green, messages.blue] : [messages.hue, messages.saturation, messages.value];
    const direction = (0,dom.g)(this.el);
    const channelsToRender = alphaChannel ? channels : channels.slice(0, 3);
    return (0,keyed/* keyed */.D)(channelMode, (0,lit/* html */.qy)`<calcite-tab class=${(0,dist/* safeClassMap */.CP)(CSS.control)} .selected=${selected}><div class=${(0,dist/* safeClassMap */.CP)(CSS.channels)} dir=ltr>${channelsToRender.map((channelValue, index) => {
      const isAlphaChannel = index === 3;
      if (isAlphaChannel) {
        channelValue = isClearable && !channelValue ? channelValue : alphaToOpacity(channelValue);
      }
      return this.renderChannel(channelValue, index, channelAriaLabels[index], direction, isAlphaChannel ? "%" : "");
    })}</div></calcite-tab>`);
  }
  renderChannel(value, index, ariaLabel, direction, suffix) {
    return (0,keyed/* keyed */.D)(index, (0,lit/* html */.qy)`<calcite-input-number class=${(0,dist/* safeClassMap */.CP)(CSS.channel)} data-channel-index=${index ?? lit/* nothing */.s6} dir=${direction ?? lit/* nothing */.s6} .label=${ariaLabel} lang=${this.messages._lang ?? lit/* nothing */.s6} number-button-type=none .numberingSystem=${this.numberingSystem} @keydown=${this.handleKeyDown} @calciteInputNumberChange=${this.handleChannelChange} @calciteInputNumberInput=${this.handleChannelInput} @calciteInternalInputNumberBlur=${this.handleChannelBlur} @calciteInternalInputNumberFocus=${this.handleChannelFocus} .scale=${this.scale === "l" ? "m" : "s"} style=${(0,dist/* safeStyleMap */.zl)({
      marginLeft: index > 0 && !(this.scale === "s" && this.alphaChannel && index === 3) ? "-1px" : ""
    })} .suffixText=${suffix} .value=${value?.toString()}></calcite-input-number>`);
  }
}
(0,runtime.c)("calcite-color-picker", ColorPicker);


;// ../node_modules/@esri/calcite-components/dist/components/calcite-color-picker/index.js










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

/***/ 45177:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  InputMessage: () => (/* reexport */ InputMessage)
});

// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/components/calcite-icon/index.js + 1 modules
var calcite_icon = __webpack_require__(96446);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/runtime.js
var runtime = __webpack_require__(14558);
// EXTERNAL MODULE: ../node_modules/lit/index.js + 2 modules
var lit = __webpack_require__(52689);
// EXTERNAL MODULE: ../node_modules/@arcgis/lumina/dist/index.js + 15 modules
var dist = __webpack_require__(48747);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/dom.js
var dom = __webpack_require__(25450);
// EXTERNAL MODULE: ../node_modules/@lit/reactive-element/node/css-tag.js
var css_tag = __webpack_require__(56385);
;// ../node_modules/@esri/calcite-components/dist/components/calcite-input-message/customElement.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */





const StatusIconDefaults = {
  valid: "check-circle",
  invalid: "exclamation-mark-triangle",
  idle: "information"
};
const styles = (0,css_tag/* css */.AH)`:host{box-sizing:border-box;display:flex;block-size:auto;inline-size:100%;align-items:center;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);opacity:1;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;margin-block-start:var(--calcite-input-message-spacing, var(--calcite-input-message-spacing-value, var(--calcite-spacing-xxs)))}.calcite-input-message-icon{pointer-events:none;display:inline-flex;flex-shrink:0;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;margin-inline-end:var(--calcite-spacing-sm)}:host([status=invalid]) .calcite-input-message-icon{color:var(--calcite-input-message-icon-color, var(--calcite-icon-color, var(--calcite-color-status-danger)))}:host([status=warning]) .calcite-input-message-icon{color:var(--calcite-input-message-icon-color, var(--calcite-icon-color, var(--calcite-color-status-warning)))}:host([status=valid]) .calcite-input-message-icon{color:var(--calcite-input-message-icon-color, var(--calcite-icon-color, var(--calcite-color-status-success)))}:host([status=idle]) .calcite-input-message-icon{color:var(--calcite-input-message-icon-color, var(--calcite-icon-color, var(--calcite-color-brand)))}:host([scale=s]){font-size:var(--calcite-font-size--3);line-height:.75rem}:host([scale=m]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=l]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([hidden]){display:none}[hidden]{display:none}`;
class InputMessage extends dist/* LitElement */.WF {
  constructor() {
    super(...arguments);
    this.iconFlipRtl = false;
    this.scale = "m";
    this.status = "idle";
  }
  static {
    this.properties = { icon: [3, { converter: dist/* stringOrBoolean */.pf }, { reflect: true }], iconFlipRtl: [7, {}, { reflect: true, type: Boolean }], scale: [3, {}, { reflect: true }], status: [3, {}, { reflect: true }] };
  }
  static {
    this.styles = styles;
  }
  connectedCallback() {
    super.connectedCallback();
    this.requestedIcon = (0,dom.v)(StatusIconDefaults, this.icon, this.status);
  }
  willUpdate(changes) {
    if (changes.has("status") && (this.hasUpdated || this.status !== "idle") || changes.has("icon")) {
      this.requestedIcon = (0,dom.v)(StatusIconDefaults, this.icon, this.status);
    }
  }
  render() {
    const hidden = this.el.hidden;
    (0,dist/* setAttribute */.Bq)(this.el, "calcite-hydrated-hidden", hidden);
    return (0,lit/* html */.qy)`${this.renderIcon(this.requestedIcon)}<slot></slot>`;
  }
  renderIcon(iconName) {
    if (iconName) {
      return (0,lit/* html */.qy)`<calcite-icon class="calcite-input-message-icon" .flipRtl=${this.iconFlipRtl} .icon=${iconName} scale=s></calcite-icon>`;
    }
  }
}
(0,runtime.c)("calcite-input-message", InputMessage);


;// ../node_modules/@esri/calcite-components/dist/components/calcite-input-message/index.js



/***/ }),

/***/ 41787:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  InputNumber: () => (/* reexport */ InputNumber)
});

// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/components/calcite-input-message/index.js + 1 modules
var calcite_input_message = __webpack_require__(45177);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/components/calcite-progress/index.js + 1 modules
var calcite_progress = __webpack_require__(16584);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/components/calcite-icon/index.js + 1 modules
var calcite_icon = __webpack_require__(96446);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/runtime.js
var runtime = __webpack_require__(14558);
// EXTERNAL MODULE: ../node_modules/lit-html/node/directives/live.js
var live = __webpack_require__(71717);
// EXTERNAL MODULE: ../node_modules/lit-html/node/directives/keyed.js
var keyed = __webpack_require__(51425);
// EXTERNAL MODULE: ../node_modules/lit/index.js + 2 modules
var lit = __webpack_require__(52689);
// EXTERNAL MODULE: ../node_modules/lit-html/node/directives/ref.js + 1 modules
var ref = __webpack_require__(59276);
// EXTERNAL MODULE: ../node_modules/@arcgis/lumina/dist/index.js + 15 modules
var dist = __webpack_require__(48747);
// EXTERNAL MODULE: ../node_modules/@arcgis/lumina/dist/controllers/index.js + 1 modules
var controllers = __webpack_require__(73339);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/dom.js
var dom = __webpack_require__(25450);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/form.js
var chunks_form = __webpack_require__(67226);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/interactive.js
var interactive = __webpack_require__(28070);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/key.js
var key = __webpack_require__(14357);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/label.js
var label = __webpack_require__(85352);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/component.js
var component = __webpack_require__(66865);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/locale.js
var locale = __webpack_require__(99358);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/Validation.js
var Validation = __webpack_require__(53939);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/input.js
var chunks_input = __webpack_require__(16690);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/useT9n.js
var useT9n = __webpack_require__(13478);
// EXTERNAL MODULE: ../node_modules/@lit/reactive-element/node/css-tag.js
var css_tag = __webpack_require__(56385);
;// ../node_modules/@esri/calcite-components/dist/components/calcite-input-number/customElement.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */


















const CSS = {
  loader: "loader",
  clearButton: "clear-button",
  clearable: "clearable",
  inputIcon: "icon",
  prefix: "prefix",
  suffix: "suffix",
  numberButtonWrapper: "number-button-wrapper",
  buttonItemHorizontal: "number-button-item--horizontal",
  wrapper: "element-wrapper",
  inputWrapper: "wrapper",
  actionWrapper: "action-wrapper",
  numberButtonItem: "number-button-item",
  hasSuffix: "has-suffix",
  hasPrefix: "has-prefix"
};
const IDS = {
  validationMessage: "inputNumberValidationMessage"
};
const SLOTS = {
  action: "action"
};
const styles = (0,css_tag/* css */.AH)`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{padding-inline:.5rem;font-size:var(--calcite-font-size--2);line-height:1rem;block-size:var(--calcite-input-number-height, 1.5rem)}:host([scale=s]) .number-button-wrapper,:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:var(--calcite-input-number-height, 1.5rem)}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{padding-inline:.75rem;font-size:var(--calcite-font-size--1);line-height:1rem;block-size:var(--calcite-input-number-height, 2rem)}:host([scale=m]) .number-button-wrapper,:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:var(--calcite-input-number-height, 2rem)}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;block-size:var(--calcite-input-number-height, 2.75rem)}:host([scale=l]) .number-button-wrapper,:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:var(--calcite-input-number-height, 2.75rem)}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}input{transition:var(--calcite-animation-timing),block-size 0,outline-offset 0s;-webkit-appearance:none;position:relative;margin:0;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;text-overflow:ellipsis;font-family:inherit;font-weight:var(--calcite-font-weight-normal);background-color:var(--calcite-input-number-background-color, var(--calcite-color-foreground-1));color:var(--calcite-input-number-text-color, var(--calcite-color-text-1));border-radius:var(--calcite-input-number-corner-radius, var(--calcite-corner-radius-sharp))}input:placeholder-shown{text-overflow:ellipsis}input{border-width:1px;border-style:solid;border-color:var(--calcite-input-number-border-color, var(--calcite-color-border-input))}input::placeholder,input:-ms-input-placeholder,input::-ms-input-placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-input-number-placeholder-text-color, var(--calcite-color-text-3))}input:focus{border-color:var(--calcite-color-brand);color:var(--calcite-input-number-text-color-focus, var(--calcite-color-text-1))}input[readonly]{font-weight:var(--calcite-font-weight-medium);background-color:var(--calcite-input-number-background-color, var(--calcite-color-background))}input[readonly]:focus{color:var(--calcite-input-number-text-color-focus, var(--calcite-color-text-1))}calcite-icon{color:var(--calcite-input-actions-icon-color, var(--calcite-color-text-3))}input{outline-color:transparent}input:focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}:host([status=invalid]) input{border-color:var(--calcite-color-status-danger)}:host([status=invalid]) input:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}:host([scale=s]) .icon{inset-inline-start:.5rem}:host([scale=m]) .icon{inset-inline-start:.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;z-index:var(--calcite-z-index);display:block;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out}.clear-button{pointer-events:initial;order:4;margin:0;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;outline-color:transparent;border-color:var(--calcite-input-number-border-color, var(--calcite-color-border-input));background-color:var(--calcite-input-actions-background-color, var(--calcite-color-foreground-1));border-inline-start-width:0px}.clear-button:hover{transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;background-color:var(--calcite-input-actions-background-color-hover, var(--calcite-color-foreground-2))}.clear-button:hover calcite-icon{transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;color:var(--calcite-input-actions-icon-color-hover, var(--calcite-color-text-1))}.clear-button:active{background-color:var(--calcite-input-actions-background-color-press, var(--calcite-color-foreground-3))}.clear-button:active calcite-icon{color:var(--calcite-input-actions-icon-color-press, var(--calcite-color-text-1))}.clear-button:focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}.clear-button:disabled{opacity:var(--calcite-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.loader calcite-progress{--calcite-progress-background-color: var(--calcite-input-loading-background-color);--calcite-progress-fill-color: var(--calcite-input-loading-fill-color)}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;font-weight:var(--calcite-font-weight-medium);line-height:1;border-color:var(--calcite-input-number-border-color, var(--calcite-color-border-input))}.prefix{order:2;border-inline-end-width:0px;inline-size:var(--calcite-input-prefix-size, auto);background-color:var(--calcite-input-prefix-background-color, var(--calcite-color-background));color:var(--calcite-input-prefix-text-color, var(--calcite-color-text-2))}.suffix{order:5;border-inline-start-width:0px;inline-size:var(--calcite-input-suffix-size, auto);background-color:var(--calcite-input-suffix-background-color, var(--calcite-color-background));color:var(--calcite-input-suffix-text-color, var(--calcite-color-text-2))}:host([alignment=start]) input{text-align:start}:host([alignment=end]) input{text-align:end}.number-button-wrapper{pointer-events:none;order:6;box-sizing:border-box;display:flex;flex-direction:column;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out}:host([number-button-type=vertical]) .wrapper{flex-direction:row;display:flex}:host([number-button-type=vertical]) input{order:2}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=down] calcite-icon{transform:rotate(-90deg)}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=up] calcite-icon{transform:rotate(-90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down],.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:1;max-block-size:100%;min-block-size:100%;align-self:stretch}.number-button-item.number-button-item--horizontal[data-adjustment=down] calcite-icon,.number-button-item.number-button-item--horizontal[data-adjustment=up] calcite-icon{transform:rotate(90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down]{border-inline-start-width:1px;border-inline-end-width:0px}.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:5}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]{border-block-start-width:0px}.number-button-item{max-block-size:50%;min-block-size:50%;pointer-events:initial;margin:0;box-sizing:border-box;display:flex;cursor:pointer;align-items:center;align-self:center;border-width:1px;border-style:solid;padding-block:0px;padding-inline:.5rem;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;border-inline-start-width:0px;border-color:var(--calcite-input-number-border-color, var(--calcite-color-border-input));background-color:var(--calcite-input-actions-background-color, var(--calcite-color-foreground-1))}.number-button-item calcite-icon{pointer-events:none;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out}.number-button-item:disabled{pointer-events:none}.number-button-item:hover{background-color:var(--calcite-input-actions-background-color-hover, var(--calcite-color-foreground-2))}.number-button-item:hover calcite-icon{color:var(--calcite-input-actions-icon-color-hover, var(--calcite-color-text-1))}.number-button-item:active{background-color:var(--calcite-input-actions-background-color-press, var(--calcite-color-foreground-3))}.number-button-item:active calcite-icon{color:var(--calcite-input-actions-icon-color-press, var(--calcite-color-text-1))}.prefix,:host([number-button-type=horizontal]) .number-button-item[data-adjustment=down]{border-start-start-radius:var(--calcite-input-number-corner-radius, var(--calcite-corner-radius-sharp));border-end-start-radius:var(--calcite-input-number-corner-radius, var(--calcite-corner-radius-sharp))}:host([read-only]) .suffix,:host([read-only]) .wrapper:not(.has-suffix) .clear-button,:host([number-button-type=horizontal]) .number-button-item[data-adjustment=up]{border-end-end-radius:var(--calcite-input-number-corner-radius, var(--calcite-corner-radius-sharp));border-start-end-radius:var(--calcite-input-number-corner-radius, var(--calcite-corner-radius-sharp))}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]{border-block-start-width:0px;border-end-end-radius:var(--calcite-input-number-corner-radius, var(--calcite-corner-radius-sharp))}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]{border-start-end-radius:var(--calcite-input-number-corner-radius, var(--calcite-corner-radius-sharp))}:host(:not([read-only])[number-button-type=horizontal]) .prefix,:host(:not([read-only])[number-button-type=horizontal]) input,.has-prefix input{border-start-start-radius:0;border-end-start-radius:0}.has-suffix input,:host .clearable input,:host(:not([read-only])) input,:host .suffix,:host .clear-button{border-start-end-radius:0;border-end-end-radius:0}:host .wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-color-border-1)}input.inline-child{background-color:transparent;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out}input.inline-child .editing-enabled{background-color:inherit}input.inline-child:not(.editing-enabled){display:flex;cursor:pointer;text-overflow:ellipsis;border-color:transparent;padding-inline-start:0}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:.5rem}:host([scale=s]) .validation-container{padding-block-start:.25rem}::slotted(input[slot=hidden-form-input]){margin:0!important;opacity:0!important;outline:none!important;padding:0!important;position:absolute!important;inset:0!important;transform:none!important;-webkit-appearance:none!important;z-index:-1!important}:host([hidden]){display:none}[hidden]{display:none}::placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-input-placeholder-text-color, var(--calcite-color-text-3))}`;
class InputNumber extends dist/* LitElement */.WF {
  constructor() {
    super();
    this.actionWrapperEl = (0,ref/* createRef */._)();
    this.attributeWatch = (0,controllers/* useWatchAttributes */.oW)(["autofocus", "enterkeyhint", "inputmode"], this.handleGlobalAttributesChanged);
    this.inputWrapperEl = (0,ref/* createRef */._)();
    this.onHiddenFormInputInput = (event) => {
      if (event.target.name === this.name) {
        this.setNumberValue({
          value: event.target.value,
          origin: "direct"
        });
      }
      this.setFocus();
      event.stopPropagation();
    };
    this.previousValueOrigin = "initial";
    this.userChangedValue = false;
    this._value = "";
    this.messages = (0,useT9n.u)();
    this.slottedActionElDisabledInternally = false;
    this.alignment = "start";
    this.clearable = false;
    this.disabled = false;
    this.editingEnabled = false;
    this.groupSeparator = false;
    this.iconFlipRtl = false;
    this.integer = false;
    this.loading = false;
    this.localeFormat = false;
    this.numberButtonType = "vertical";
    this.readOnly = false;
    this.required = false;
    this.scale = "m";
    this.status = "idle";
    this.validity = {
      valid: false,
      badInput: false,
      customError: false,
      patternMismatch: false,
      rangeOverflow: false,
      rangeUnderflow: false,
      stepMismatch: false,
      tooLong: false,
      tooShort: false,
      typeMismatch: false,
      valueMissing: false
    };
    this.calciteInputNumberChange = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.calciteInputNumberInput = (0,dist/* createEvent */.lh)();
    this.calciteInternalInputNumberBlur = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.calciteInternalInputNumberFocus = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.listen("click", this.clickHandler);
    this.listen("keydown", this.keyDownHandler);
  }
  static {
    this.properties = { displayedValue: [16, {}, { state: true }], slottedActionElDisabledInternally: [16, {}, { state: true }], alignment: [3, {}, { reflect: true }], autocomplete: [0, {}, { attribute: false }], clearable: [7, {}, { reflect: true, type: Boolean }], disabled: [7, {}, { reflect: true, type: Boolean }], editingEnabled: [7, {}, { reflect: true, type: Boolean }], form: [3, {}, { reflect: true }], groupSeparator: [7, {}, { reflect: true, type: Boolean }], icon: [3, { converter: dist/* stringOrBoolean */.pf }, { reflect: true }], iconFlipRtl: [7, {}, { reflect: true, type: Boolean }], integer: [5, {}, { type: Boolean }], label: 1, loading: [7, {}, { reflect: true, type: Boolean }], localeFormat: [5, {}, { type: Boolean }], max: [11, {}, { reflect: true, type: Number }], maxLength: [11, {}, { reflect: true, type: Number }], messageOverrides: [0, {}, { attribute: false }], min: [11, {}, { reflect: true, type: Number }], minLength: [11, {}, { reflect: true, type: Number }], name: [3, {}, { reflect: true }], numberButtonType: [3, {}, { reflect: true }], numberingSystem: [3, {}, { reflect: true }], placeholder: 1, prefixText: 1, readOnly: [7, {}, { reflect: true, type: Boolean }], required: [7, {}, { reflect: true, type: Boolean }], scale: [3, {}, { reflect: true }], status: [3, {}, { reflect: true }], step: [3, {}, { reflect: true }], suffixText: 1, validationIcon: [3, { converter: dist/* stringOrBoolean */.pf }, { reflect: true }], validationMessage: 1, validity: [0, {}, { attribute: false }], value: 1 };
  }
  static {
    this.styles = styles;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    const oldValue = this._value;
    if (value !== oldValue) {
      this._value = value;
      this.valueWatcher(value, oldValue);
      if (value && this._value === "") {
        this.setNumberValue({
          origin: "reset",
          value: oldValue
        });
      }
    }
  }
  async selectText() {
    this.childNumberEl?.select();
  }
  async setFocus() {
    await (0,component.c)(this);
    this.childNumberEl?.focus();
  }
  connectedCallback() {
    super.connectedCallback();
    this.inlineEditableEl = this.el.closest("calcite-inline-editable");
    if (this.inlineEditableEl) {
      this.editingEnabled = this.inlineEditableEl.editingEnabled || false;
    }
    (0,label.c)(this);
    (0,chunks_form.c)(this);
    this.el.addEventListener(chunks_form.i, this.onHiddenFormInputInput);
  }
  async load() {
    this.maxString = this.max?.toString();
    this.minString = this.min?.toString();
    this.requestedIcon = (0,dom.v)({}, this.icon, "number");
    this.setPreviousEmittedNumberValue(this.value);
    this.setPreviousNumberValue(this.value);
    this.warnAboutInvalidNumberValue(this.value);
    if (this.value === "Infinity" || this.value === "-Infinity") {
      this.displayedValue = this.value;
      this.previousEmittedNumberValue = this.value;
    } else {
      this.setNumberValue({
        origin: "connected",
        value: (0,locale.i)(this.value) ? this.value : ""
      });
    }
  }
  willUpdate(changes) {
    if (changes.has("max")) {
      this.maxString = this.max?.toString() || null;
    }
    if (changes.has("min")) {
      this.minString = this.min?.toString() || null;
    }
    if (changes.has("icon")) {
      this.requestedIcon = (0,dom.v)({}, this.icon, "number");
    }
    if (changes.has("messages")) {
      locale.n.numberFormatOptions = {
        locale: this.messages._lang,
        numberingSystem: this.numberingSystem,
        useGrouping: false
      };
    }
  }
  updated() {
    (0,interactive.u)(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    (0,label.d)(this);
    (0,chunks_form.d)(this);
    this.el.removeEventListener(chunks_form.i, this.onHiddenFormInputInput);
  }
  get isClearable() {
    return this.clearable && this.value.length > 0;
  }
  handleGlobalAttributesChanged() {
    this.requestUpdate();
  }
  valueWatcher(newValue, previousValue) {
    if (!this.userChangedValue) {
      if (newValue === "Infinity" || newValue === "-Infinity") {
        this.displayedValue = newValue;
        this.previousEmittedNumberValue = newValue;
        return;
      }
      this.setNumberValue({
        origin: "direct",
        previousValue,
        value: newValue == null || newValue == "" ? "" : (0,locale.i)(newValue) ? newValue : this.previousValue || ""
      });
      this.warnAboutInvalidNumberValue(newValue);
    }
    this.userChangedValue = false;
  }
  keyDownHandler(event) {
    if (this.readOnly || this.disabled || event.defaultPrevented) {
      return;
    }
    if (this.isClearable && event.key === "Escape") {
      this.clearInputValue(event);
      event.preventDefault();
    }
    if (event.key === "Enter") {
      if ((0,chunks_form.s)(this)) {
        event.preventDefault();
      }
    }
  }
  onLabelClick() {
    this.setFocus();
  }
  incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent) {
    const { value } = this;
    if (value === "Infinity" || value === "-Infinity") {
      return;
    }
    const adjustment = direction === "up" ? 1 : -1;
    const stepHandleInteger = this.integer && this.step !== "any" ? Math.round(this.step) : this.step;
    const inputStep = stepHandleInteger === "any" ? 1 : Math.abs(stepHandleInteger || 1);
    const inputVal = new locale.B(value !== "" ? value : "0");
    const nudgedValue = inputVal.add(`${inputStep * adjustment}`);
    const nudgedValueBelowInputMin = () => typeof inputMin === "number" && !isNaN(inputMin) && nudgedValue.subtract(`${inputMin}`).isNegative;
    const nudgedValueAboveInputMax = () => typeof inputMax === "number" && !isNaN(inputMax) && !nudgedValue.subtract(`${inputMax}`).isNegative;
    const finalValue = nudgedValueBelowInputMin() ? `${inputMin}` : nudgedValueAboveInputMax() ? `${inputMax}` : nudgedValue.toString();
    this.setNumberValue({
      committing: true,
      nativeEvent,
      origin: "user",
      value: finalValue
    });
  }
  clearInputValue(nativeEvent) {
    this.setNumberValue({
      committing: true,
      nativeEvent,
      origin: "user",
      value: ""
    });
  }
  emitChangeIfUserModified() {
    if (this.previousValueOrigin === "user" && this.value !== this.previousEmittedNumberValue) {
      this.calciteInputNumberChange.emit();
      this.setPreviousEmittedNumberValue(this.value);
    }
  }
  inputNumberBlurHandler() {
    window.clearInterval(this.nudgeNumberValueIntervalId);
    this.calciteInternalInputNumberBlur.emit();
    this.emitChangeIfUserModified();
  }
  clickHandler(event) {
    if (this.disabled) {
      return;
    }
    const composedPath = event.composedPath();
    if (!composedPath.includes(this.inputWrapperEl.value) || composedPath.includes(this.actionWrapperEl.value)) {
      return;
    }
    this.setFocus();
  }
  inputNumberFocusHandler() {
    this.calciteInternalInputNumberFocus.emit();
  }
  inputNumberInputHandler(nativeEvent) {
    if (this.disabled || this.readOnly) {
      return;
    }
    if (this.value === "Infinity" || this.value === "-Infinity") {
      return;
    }
    const value = nativeEvent.target.value;
    locale.n.numberFormatOptions = {
      locale: this.messages._lang,
      numberingSystem: this.numberingSystem,
      useGrouping: this.groupSeparator
    };
    const delocalizedValue = locale.n.delocalize(value);
    if (nativeEvent.inputType === "insertFromPaste") {
      if (!(0,locale.i)(delocalizedValue) || this.integer && (delocalizedValue.includes("e") || delocalizedValue.includes("."))) {
        nativeEvent.preventDefault();
      }
      this.setNumberValue({
        nativeEvent,
        origin: "user",
        value: (0,locale.p)(delocalizedValue)
      });
      this.childNumberEl.value = this.displayedValue;
    } else {
      this.setNumberValue({
        nativeEvent,
        origin: "user",
        value: delocalizedValue
      });
    }
  }
  inputNumberKeyDownHandler(event) {
    if (this.disabled || this.readOnly) {
      return;
    }
    if (this.value === "Infinity" || this.value === "-Infinity") {
      event.preventDefault();
      if (event.key === "Backspace" || event.key === "Delete") {
        this.clearInputValue(event);
      }
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      this.nudgeNumberValue("up", event);
      return;
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      this.nudgeNumberValue("down", event);
      return;
    }
    const supportedKeys = [
      ...key.n,
      "ArrowLeft",
      "ArrowRight",
      "Backspace",
      "Delete",
      "Enter",
      "Escape",
      "Tab"
    ];
    if (event.altKey || event.ctrlKey || event.metaKey) {
      return;
    }
    const isShiftTabEvent = event.shiftKey && event.key === "Tab";
    if (supportedKeys.includes(event.key) || isShiftTabEvent) {
      if (event.key === "Enter") {
        this.emitChangeIfUserModified();
      }
      return;
    }
    locale.n.numberFormatOptions = {
      locale: this.messages._lang,
      numberingSystem: this.numberingSystem,
      useGrouping: this.groupSeparator
    };
    if (event.key === locale.n.decimal && !this.integer) {
      if (!this.value && !this.childNumberEl.value) {
        return;
      }
      if (this.value && this.childNumberEl.value.indexOf(locale.n.decimal) === -1) {
        return;
      }
    }
    if (/[eE]/.test(event.key) && !this.integer) {
      if (!this.value && !this.childNumberEl.value) {
        return;
      }
      if (this.value && !/[eE]/.test(this.childNumberEl.value)) {
        return;
      }
    }
    if (event.key === "-") {
      if (!this.value && !this.childNumberEl.value) {
        return;
      }
      if (this.value && this.childNumberEl.value.split("-").length <= 2) {
        return;
      }
    }
    event.preventDefault();
  }
  nudgeNumberValue(direction, nativeEvent) {
    if (nativeEvent instanceof KeyboardEvent && nativeEvent.repeat) {
      return;
    }
    const inputMax = this.maxString ? parseFloat(this.maxString) : null;
    const inputMin = this.minString ? parseFloat(this.minString) : null;
    const valueNudgeDelayInMs = 150;
    this.incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent);
    if (this.nudgeNumberValueIntervalId) {
      window.clearInterval(this.nudgeNumberValueIntervalId);
    }
    let firstValueNudge = true;
    this.nudgeNumberValueIntervalId = window.setInterval(() => {
      if (firstValueNudge) {
        firstValueNudge = false;
        return;
      }
      this.incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent);
    }, valueNudgeDelayInMs);
  }
  nudgeButtonPointerUpHandler(event) {
    if (!(0,dom.i)(event)) {
      return;
    }
    window.clearInterval(this.nudgeNumberValueIntervalId);
  }
  nudgeButtonPointerOutHandler() {
    window.clearInterval(this.nudgeNumberValueIntervalId);
  }
  nudgeButtonPointerDownHandler(event) {
    if (!(0,dom.i)(event)) {
      return;
    }
    event.preventDefault();
    const direction = event.target.dataset.adjustment;
    if (!this.disabled) {
      this.nudgeNumberValue(direction, event);
    }
  }
  syncHiddenFormInput(input) {
    (0,chunks_input.s)("number", this, input);
  }
  setChildNumberElRef(el) {
    this.childNumberEl = el;
  }
  setInputNumberValue(newInputValue) {
    if (!this.childNumberEl) {
      return;
    }
    this.childNumberEl.value = newInputValue;
  }
  setPreviousEmittedNumberValue(value) {
    this.previousEmittedNumberValue = this.normalizeValue(value);
  }
  normalizeValue(value) {
    return (0,locale.i)(value) ? value : "";
  }
  setPreviousNumberValue(value) {
    this.previousValue = this.normalizeValue(value);
  }
  setNumberValue({ committing = false, nativeEvent, origin, previousValue, value }) {
    locale.n.numberFormatOptions = {
      locale: this.messages._lang,
      numberingSystem: this.numberingSystem,
      useGrouping: this.groupSeparator
    };
    const isValueDeleted = this.previousValue?.length > value.length || this.value?.length > value.length;
    const valueHandleInteger = this.integer ? value.replace(/[e.]/g, "") : value;
    const hasTrailingDecimalSeparator = valueHandleInteger.charAt(valueHandleInteger.length - 1) === ".";
    const hasLeadingMinusSign = valueHandleInteger.charAt(0) === "-";
    const hasLeadingZeros = valueHandleInteger.match(/^-?(0+)\d/);
    const sanitizedValue = hasTrailingDecimalSeparator && isValueDeleted ? valueHandleInteger : (0,locale.s)(valueHandleInteger);
    const newValue = value && !sanitizedValue ? (0,locale.i)(this.previousValue) ? this.previousValue : "" : sanitizedValue;
    let newLocalizedValue = locale.n.localize(newValue);
    if (origin !== "connected" && !hasTrailingDecimalSeparator) {
      newLocalizedValue = (0,locale.c)(newLocalizedValue, newValue, locale.n);
    }
    if (hasTrailingDecimalSeparator && isValueDeleted) {
      newLocalizedValue = `${newLocalizedValue}${locale.n.decimal}`;
    }
    if (hasLeadingZeros) {
      newLocalizedValue = `${hasLeadingMinusSign ? newLocalizedValue.charAt(0) : ""}${locale.n.localize("0").repeat(hasLeadingZeros[1].length)}${hasLeadingMinusSign ? newLocalizedValue.slice(1) : newLocalizedValue}`;
    }
    this.displayedValue = newLocalizedValue;
    this.setPreviousNumberValue(previousValue ?? this.value);
    this.previousValueOrigin = origin;
    this.userChangedValue = origin === "user" && this.value !== newValue;
    const validNewValue = ["-", "."].includes(newValue) ? "" : newValue;
    this.value = validNewValue;
    const localizedCharAllowlist = /* @__PURE__ */ new Set([
      "e",
      "E",
      locale.n.decimal,
      locale.n.minusSign,
      locale.n.group,
      ...locale.n.digits
    ]);
    const childInputValue = this.childNumberEl?.value;
    if (childInputValue) {
      const sanitizedChildInputValue = Array.from(childInputValue).filter((char) => localizedCharAllowlist.has(char)).join("");
      if (sanitizedChildInputValue !== childInputValue) {
        this.setInputNumberValue(sanitizedChildInputValue);
      }
    }
    if (origin === "direct") {
      this.setInputNumberValue(newLocalizedValue);
      this.setPreviousEmittedNumberValue(validNewValue);
    }
    if (nativeEvent) {
      const calciteInputNumberInputEvent = this.calciteInputNumberInput.emit();
      if (calciteInputNumberInputEvent.defaultPrevented) {
        this.value = this.previousValue;
        this.displayedValue = locale.n.localize(this.previousValue);
      } else if (committing) {
        this.emitChangeIfUserModified();
      }
    }
  }
  inputNumberKeyUpHandler() {
    window.clearInterval(this.nudgeNumberValueIntervalId);
  }
  warnAboutInvalidNumberValue(value) {
    if (value && !(0,locale.i)(value)) {
      console.warn(`The specified value "${value}" cannot be parsed, or is out of range.`);
    }
  }
  render() {
    const dir = (0,dom.g)(this.el);
    const loader = (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(CSS.loader)}><calcite-progress .label=${this.messages.loading} type=indeterminate></calcite-progress></div>`;
    const inputClearButton = (0,lit/* html */.qy)`<button .ariaLabel=${this.messages.clear} class=${(0,dist/* safeClassMap */.CP)(CSS.clearButton)} .disabled=${this.disabled || this.readOnly} @click=${this.clearInputValue} tabindex=-1 type=button><calcite-icon icon=x .scale=${(0,component.g)(this.scale)}></calcite-icon></button>`;
    const iconEl = (0,lit/* html */.qy)`<calcite-icon class=${(0,dist/* safeClassMap */.CP)(CSS.inputIcon)} .flipRtl=${this.iconFlipRtl} .icon=${this.requestedIcon} .scale=${(0,component.g)(this.scale)}></calcite-icon>`;
    const isHorizontalNumberButton = this.numberButtonType === "horizontal";
    const numberButtonsHorizontalUp = (0,lit/* html */.qy)`<button aria-hidden=true class=${(0,dist/* safeClassMap */.CP)({
      [CSS.numberButtonItem]: true,
      [CSS.buttonItemHorizontal]: isHorizontalNumberButton
    })} data-adjustment=up .disabled=${this.disabled || this.readOnly} @pointerdown=${this.nudgeButtonPointerDownHandler} @pointerout=${this.nudgeButtonPointerOutHandler} @pointerup=${this.nudgeButtonPointerUpHandler} tabindex=-1 type=button><calcite-icon icon=chevron-up .scale=${(0,component.g)(this.scale)}></calcite-icon></button>`;
    const numberButtonsHorizontalDown = (0,lit/* html */.qy)`<button aria-hidden=true class=${(0,dist/* safeClassMap */.CP)({
      [CSS.numberButtonItem]: true,
      [CSS.buttonItemHorizontal]: isHorizontalNumberButton
    })} data-adjustment=down .disabled=${this.disabled || this.readOnly} @pointerdown=${this.nudgeButtonPointerDownHandler} @pointerout=${this.nudgeButtonPointerOutHandler} @pointerup=${this.nudgeButtonPointerUpHandler} tabindex=-1 type=button><calcite-icon icon=chevron-down .scale=${(0,component.g)(this.scale)}></calcite-icon></button>`;
    const numberButtonsVertical = (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(CSS.numberButtonWrapper)}>${numberButtonsHorizontalUp}${numberButtonsHorizontalDown}</div>`;
    const prefixText = (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(CSS.prefix)}>${this.prefixText}</div>`;
    const suffixText = (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)(CSS.suffix)}>${this.suffixText}</div>`;
    const childEl = (0,keyed/* keyed */.D)("localized-input", (0,lit/* html */.qy)`<input aria-errormessage=${IDS.validationMessage} .ariaInvalid=${this.status === "invalid"} .ariaLabel=${(0,label.g)(this)} autocomplete=${this.autocomplete ?? lit/* nothing */.s6} .autofocus=${this.el.autofocus} value=${this.defaultValue ?? lit/* nothing */.s6} .disabled=${this.disabled} enterkeyhint=${this.el.enterKeyHint ?? lit/* nothing */.s6} inputmode=${this.el.inputMode || "decimal"} maxlength=${this.maxLength ?? lit/* nothing */.s6} minlength=${this.minLength ?? lit/* nothing */.s6} name=${lit/* nothing */.s6} @blur=${this.inputNumberBlurHandler} @focus=${this.inputNumberFocusHandler} @input=${this.inputNumberInputHandler} @keydown=${this.inputNumberKeyDownHandler} @keyup=${this.inputNumberKeyUpHandler} placeholder=${(this.placeholder || "") ?? lit/* nothing */.s6} .readOnly=${this.readOnly} type=text .value=${(0,live/* live */.V)(this.displayedValue ?? "")} ${(0,ref/* ref */.K)(this.setChildNumberElRef)}>`);
    return (0,interactive.I)({ disabled: this.disabled, children: (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)({
      [CSS.inputWrapper]: true,
      [runtime.C.rtl]: dir === "rtl",
      [CSS.hasSuffix]: this.suffixText,
      [CSS.hasPrefix]: this.prefixText,
      [CSS.clearable]: this.isClearable
    })} ${(0,ref/* ref */.K)(this.inputWrapperEl)}>${this.numberButtonType === "horizontal" && !this.readOnly ? numberButtonsHorizontalDown : null}${this.prefixText ? prefixText : null}<div class=${(0,dist/* safeClassMap */.CP)(CSS.wrapper)}>${childEl}${this.isClearable ? inputClearButton : null}${this.requestedIcon ? iconEl : null}${this.loading ? loader : null}</div><div class=${(0,dist/* safeClassMap */.CP)(CSS.actionWrapper)} ${(0,ref/* ref */.K)(this.actionWrapperEl)}><slot name=${SLOTS.action}></slot></div>${this.numberButtonType === "vertical" && !this.readOnly ? numberButtonsVertical : null}${this.suffixText ? suffixText : null}${this.numberButtonType === "horizontal" && !this.readOnly ? numberButtonsHorizontalUp : null}${(0,chunks_form.H)({ component: this })}</div>${this.validationMessage && this.status === "invalid" ? (0,Validation.V)({ icon: this.validationIcon, id: IDS.validationMessage, message: this.validationMessage, scale: this.scale, status: this.status }) : null}` });
  }
}
(0,runtime.c)("calcite-input-number", InputNumber);


;// ../node_modules/@esri/calcite-components/dist/components/calcite-input-number/index.js





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

/***/ 16584:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: Progress

// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/runtime.js
var runtime = __webpack_require__(14558);
// EXTERNAL MODULE: ../node_modules/lit-html/node/lit-html.js
var lit_html = __webpack_require__(31263);
// EXTERNAL MODULE: ../node_modules/@arcgis/lumina/dist/index.js + 15 modules
var dist = __webpack_require__(48747);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/dom.js
var dom = __webpack_require__(25450);
// EXTERNAL MODULE: ../node_modules/@lit/reactive-element/node/css-tag.js
var css_tag = __webpack_require__(56385);
;// ../node_modules/@esri/calcite-components/dist/components/calcite-progress/customElement.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */





const styles = (0,css_tag/* css */.AH)`:host{position:relative;display:block;inline-size:100%}.track,.bar{position:absolute;inset-block-start:0px;block-size:2px}.track{z-index:var(--calcite-z-index);inline-size:100%;overflow:hidden;background-color:var(--calcite-progress-background-color, var(--calcite-color-border-3))}.bar{z-index:var(--calcite-z-index);background-color:var(--calcite-progress-fill-color, var(--calcite-color-brand))}@media (forced-colors: active){.track{background-color:highlightText}.bar{background-color:linkText}}.indeterminate{inline-size:20%;animation:looping-progress-bar-ani calc(var(--calcite-internal-animation-timing-medium) / var(--calcite-internal-duration-factor) * 11 / var(--calcite-internal-duration-factor)) linear infinite}.indeterminate.calcite--rtl{animation-name:looping-progress-bar-ani-rtl}.reversed{animation-direction:reverse}.text{padding-inline:0px;padding-block:1rem 0px;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-progress-text-color, var(--calcite-color-text-2))}@keyframes looping-progress-bar-ani{0%{transform:translate3d(-100%,0,0)}50%{inline-size:40%}to{transform:translate3d(600%,0,0)}}@keyframes looping-progress-bar-ani-rtl{0%{transform:translate3d(100%,0,0)}50%{inline-size:40%}to{transform:translate3d(-600%,0,0)}}:host([hidden]){display:none}[hidden]{display:none}`;
class Progress extends dist/* LitElement */.WF {
  constructor() {
    super(...arguments);
    this.reversed = false;
    this.type = "determinate";
    this.value = 0;
  }
  static {
    this.properties = { label: 1, reversed: [7, {}, { reflect: true, type: Boolean }], text: 1, type: [3, {}, { reflect: true }], value: [9, {}, { type: Number }] };
  }
  static {
    this.styles = styles;
  }
  render() {
    const isDeterminate = this.type === "determinate";
    const barStyles = isDeterminate ? { width: `${this.value}%` } : {};
    const dir = (0,dom.g)(this.el);
    return (0,lit_html/* html */.qy)`<div .ariaLabel=${this.label || this.text} .ariaValueMax=${isDeterminate ? "100" : void 0} .ariaValueMin=${isDeterminate ? "0" : void 0} .ariaValueNow=${isDeterminate ? this.value : void 0} role=progressbar><div class="track"><div class=${(0,dist/* safeClassMap */.CP)({
      bar: true,
      indeterminate: this.type === "indeterminate",
      [runtime.C.rtl]: dir === "rtl",
      reversed: this.reversed
    })} style=${(0,dist/* safeStyleMap */.zl)(barStyles)}></div></div>${this.text ? (0,lit_html/* html */.qy)`<div class="text">${this.text}</div>` : null}</div>`;
  }
}
(0,runtime.c)("calcite-progress", Progress);


;// ../node_modules/@esri/calcite-components/dist/components/calcite-progress/index.js


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

/***/ 27084:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31263);
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12897);
/* harmony import */ var _directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89985);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const u=(e,s,t)=>{const r=new Map;for(let l=s;l<=t;l++)r.set(e[l],l);return r},c=(0,_directive_js__WEBPACK_IMPORTED_MODULE_1__/* .directive */ .u$)(class extends _directive_js__WEBPACK_IMPORTED_MODULE_1__/* .Directive */ .WL{constructor(e){if(super(e),e.type!==_directive_js__WEBPACK_IMPORTED_MODULE_1__/* .PartType */ .OA.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,s,t){let r;void 0===t?t=s:void 0!==s&&(r=s);const l=[],o=[];let i=0;for(const s of e)l[i]=r?r(s,i):i,o[i]=t(s,i),i++;return{values:o,keys:l}}render(e,s,t){return this.dt(e,s,t).values}update(s,[t,r,c]){const d=(0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__/* .getCommittedValue */ .cN)(s),{values:p,keys:a}=this.dt(t,r,c);if(!Array.isArray(d))return this.ut=a,p;const h=this.ut??=[],v=[];let m,y,x=0,j=d.length-1,k=0,w=p.length-1;for(;x<=j&&k<=w;)if(null===d[x])x++;else if(null===d[j])j--;else if(h[x]===a[k])v[k]=(0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__/* .setChildPartValue */ .lx)(d[x],p[k]),x++,k++;else if(h[j]===a[w])v[w]=(0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__/* .setChildPartValue */ .lx)(d[j],p[w]),j--,w--;else if(h[x]===a[w])v[w]=(0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__/* .setChildPartValue */ .lx)(d[x],p[w]),(0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__/* .insertPart */ .Dx)(s,v[w+1],d[x]),x++,w--;else if(h[j]===a[k])v[k]=(0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__/* .setChildPartValue */ .lx)(d[j],p[k]),(0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__/* .insertPart */ .Dx)(s,d[x],d[j]),j--,k++;else if(void 0===m&&(m=u(a,k,w),y=u(h,x,j)),m.has(h[x]))if(m.has(h[j])){const e=y.get(a[k]),t=void 0!==e?d[e]:null;if(null===t){const e=(0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__/* .insertPart */ .Dx)(s,d[x]);(0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__/* .setChildPartValue */ .lx)(e,p[k]),v[k]=e}else v[k]=(0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__/* .setChildPartValue */ .lx)(t,p[k]),(0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__/* .insertPart */ .Dx)(s,d[x],t),d[e]=null;k++}else (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__/* .removePart */ .KO)(d[j]),j--;else (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__/* .removePart */ .KO)(d[x]),x++;for(;k<=w;){const e=(0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__/* .insertPart */ .Dx)(s,v[w+1]);(0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__/* .setChildPartValue */ .lx)(e,p[k]),v[k++]=e}for(;x<=j;){const e=d[x++];null!==e&&(0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__/* .removePart */ .KO)(e)}return this.ut=a,(0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__/* .setCommittedValue */ .mY)(s,v),_lit_html_js__WEBPACK_IMPORTED_MODULE_0__/* .noChange */ .c0}});
//# sourceMappingURL=repeat.js.map


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