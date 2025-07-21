"use strict";
exports.id = 8698;
exports.ids = [8698,6446];
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

/***/ 88698:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Carousel: () => (/* reexport */ Carousel)
});

// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/components/calcite-icon/index.js + 1 modules
var calcite_icon = __webpack_require__(96446);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/components/calcite-progress/index.js + 1 modules
var calcite_progress = __webpack_require__(16584);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/runtime.js
var runtime = __webpack_require__(14558);
// EXTERNAL MODULE: ../node_modules/lit-html/node/directives/ref.js + 1 modules
var ref = __webpack_require__(59276);
// EXTERNAL MODULE: ../node_modules/lit-html/node/directives/repeat.js
var repeat = __webpack_require__(27084);
// EXTERNAL MODULE: ../node_modules/lit/index.js + 2 modules
var lit = __webpack_require__(52689);
// EXTERNAL MODULE: ../node_modules/@arcgis/lumina/dist/index.js + 15 modules
var dist = __webpack_require__(48747);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/dom.js
var dom = __webpack_require__(25450);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/guid.js
var guid = __webpack_require__(7025);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/interactive.js
var interactive = __webpack_require__(28070);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/component.js
var component = __webpack_require__(66865);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/observers.js
var observers = __webpack_require__(13061);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/global.js
var global = __webpack_require__(32399);
;// ../node_modules/@esri/calcite-components/dist/chunks/responsive.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */

const breakpoints = {
  width: {
    medium: cssLengthToNumber(global.d.max),
    small: cssLengthToNumber(global.b.max),
    xsmall: cssLengthToNumber(global.a.max),
    xxsmall: cssLengthToNumber(global.c.max)
  }
};
function cssLengthToNumber(length) {
  return parseInt(length);
}


// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/array.js
var array = __webpack_require__(695);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/useT9n.js
var useT9n = __webpack_require__(13478);
// EXTERNAL MODULE: ../node_modules/@lit/reactive-element/node/css-tag.js
var css_tag = __webpack_require__(56385);
;// ../node_modules/@esri/calcite-components/dist/components/calcite-carousel/customElement.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */














const DURATION = 6e3;
const CSS = {
  container: "container",
  containerOverlaid: "container--overlaid",
  containerEdged: "container--edged",
  itemContainer: "item-container",
  itemContainerForward: "item-container--forward",
  itemContainerBackward: "item-container--backward",
  pagination: "pagination",
  paginationItems: "pagination-items",
  paginationItem: "pagination-item",
  paginationItemIndividual: "pagination-item--individual",
  paginationItemVisible: "pagination-item--visible",
  paginationItemOutOfRange: "pagination-item--out-of-range",
  paginationItemSelected: "pagination-item--selected",
  paginationItemRangeEdge: "pagination-item--range-edge",
  pageNext: "page-next",
  pagePrevious: "page-previous",
  autoplayControl: "autoplay-control",
  autoplayProgress: "autoplay-progress"
};
const ICONS = {
  chevronLeft: "chevron-left",
  chevronRight: "chevron-right",
  inactive: "bullet-point",
  active: "bullet-point-large",
  pause: "pause-f",
  play: "play-f"
};
const centerItemsByBreakpoint = {
  medium: 7,
  small: 5,
  xsmall: 3,
  xxsmall: 1
};
const styles = (0,css_tag/* css */.AH)`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;inline-size:100%;--calcite-internal-internal-carousel-item-space: 1.5rem;--calcite-internal-internal-carousel-item-space-wide: 3.5rem;--calcite-internal-internal-carousel-item-background-color: var( --calcite-internal-carousel-item-background-color, var(--calcite-color-foreground-1) );--calcite-internal-internal-carousel-item-background-color-hover: var( --calcite-internal-carousel-item-background-color-hover, var(--calcite-color-foreground-2) );--calcite-internal-internal-carousel-item-background-color-active: var( --calcite-internal-carousel-item-background-color-active, var(--calcite-color-foreground-2) );--calcite-internal-internal-carousel-item-background-color-selected: var( --calcite-internal-carousel-item-background-color-selected, var(--calcite-color-foreground-1) );--calcite-internal-internal-carousel-item-icon-color-hover: var( --calcite-internal-carousel-item-icon-color-hover, var(--calcite-color-text-1) );--calcite-internal-internal-carousel-item-icon-color: var( --calcite-internal-carousel-item-icon-color, var(--calcite-color-border-1) );--calcite-internal-internal-carousel-item-icon-color-selected: var( --calcite-internal-carousel-item-icon-color-selected, var(--calcite-color-brand) );--calcite-internal-internal-carousel-control-color-hover: var( --calcite-internal-carousel-control-color-hover, var(--calcite-color-text-1) );--calcite-internal-internal-carousel-control-color: var( --calcite-internal-carousel-item-icon-color, var(--calcite-color-text-3) );--calcite-internal-internal-carousel-autoplay-progress-background-color: var( --calcite-internal-carousel-autoplay-progress-background-color, var(--calcite-color-border-3) );--calcite-internal-internal-carousel-autoplay-progress-fill-color: var( --calcite-internal-carousel-autoplay-progress-fill-color, var(--calcite-color-brand) )}.container{position:relative;display:flex;inline-size:100%;flex-direction:column;overflow:hidden;font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-color-text-2);outline-color:transparent}.container:focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}.container--edged:not(.container--overlaid){padding-inline:var(--calcite-internal-internal-carousel-item-space-wide);inline-size:calc(100% - var(--calcite-internal-internal-carousel-item-space-wide) * 2)}.item-container{display:flex;flex:1 1 auto;align-items:flex-start;justify-content:center;overflow:auto;padding:.25rem;animation-name:none;animation-duration:var(--calcite-animation-timing)}.container--overlaid .item-container{padding:0}.item-container--forward{animation-name:item-forward}.item-container--backward{animation-name:item-backward}calcite-carousel-item:not([selected]){opacity:0}.pagination{margin:.75rem;display:flex;flex-direction:row;align-items:center;justify-content:center;inline-size:auto}.pagination-items{display:flex;flex-direction:row;align-items:center}.container--overlaid .pagination{position:absolute}.pagination-item.page-next,.pagination-item.page-previous{color:var(--calcite-internal-internal-carousel-control-color)}.pagination-item.page-next:hover,.pagination-item.page-previous:hover{color:var(--calcite-internal-internal-carousel-control-color-hover)}.container--edged .page-next,.container--edged .page-previous{block-size:3rem;inline-size:3rem;position:absolute;inset-block-start:50%;transform:translateY(-50%)}.container--edged .page-next{inset-inline-end:0}.container--edged .page-previous{inset-inline-start:0}.container--overlaid .pagination{inset-block-start:unset;inset-block-end:0;inset-inline:0}.pagination-item.autoplay-control{position:relative;color:var(--calcite-internal-internal-carousel-control-color);--calcite-progress-fill-color: var(--calcite-internal-internal-carousel-autoplay-progress-fill-color);--calcite-progress-background-color: var(--calcite-internal-internal-carousel-autoplay-progress-background-color)}.autoplay-control:focus .autoplay-progress{inset-block-end:4px;inset-inline:2px;inline-size:calc(100% - 4px)}.autoplay-progress{position:absolute;inset-block-end:2px;inset-inline:0;inline-size:100%}.pagination-item{margin:0;block-size:2rem;inline-size:2rem;cursor:pointer;align-items:center;border-style:none;background-color:transparent;outline-color:transparent;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;-webkit-appearance:none;display:flex;align-content:center;justify-content:center;--calcite-color-foreground-1: var(--calcite-internal-internal-carousel-item-background-color);color:var(--calcite-internal-internal-carousel-item-icon-color)}.pagination-item:hover{background-color:var(--calcite-internal-internal-carousel-item-background-color-hover);color:var(--calcite-internal-internal-carousel-item-icon-color-hover)}.pagination-item:focus{background-color:var(--calcite-internal-internal-carousel-item-background-color-active);outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}.pagination-item:active{background-color:var(--calcite-internal-internal-carousel-item-background-color-active);color:var(--calcite-internal-internal-carousel-item-icon-color-hover)}.pagination-item calcite-icon{color:inherit;pointer-events:none}.pagination-item.pagination-item--selected{--calcite-color-foreground-1: var(--calcite-internal-internal-carousel-item-background-color-selected);--calcite-color-foreground-3: var(--calcite-internal-internal-carousel-item-background-color-selected);color:var(--calcite-internal-internal-carousel-item-icon-color-selected)}.pagination-item--individual{pointer-events:none;inline-size:0px;padding:0;opacity:0;visibility:hidden;transition:var(--calcite-animation-timing) ease-in-out inline-size,var(--calcite-animation-timing) ease-in-out padding,var(--calcite-animation-timing) ease-in-out opacity}.pagination-item--individual.pagination-item--visible{pointer-events:auto;inline-size:2rem;opacity:1;visibility:visible}.pagination-item--range-edge calcite-icon{scale:.75;transition:var(--calcite-animation-timing) ease-in-out scale}.container--overlaid .pagination-item{background-color:var(--calcite-internal-internal-carousel-item-background-color)}.container--overlaid .pagination-item:hover{background-color:var(--calcite-internal-internal-carousel-item-background-color-hover)}.container--overlaid .pagination-item:focus{background-color:var(--calcite-internal-internal-carousel-item-background-color-active)}.container--overlaid .pagination-item:active{background-color:var(--calcite-internal-internal-carousel-item-background-color-active)}@keyframes item-forward{0%{transform:translate3d(100px,0,0)}to{transform:translateZ(0)}}@keyframes item-backward{0%{transform:translate3d(-100px,0,0)}to{transform:translateZ(0)}}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`;
class Carousel extends dist/* LitElement */.WF {
  constructor() {
    super(...arguments);
    this.autoplayHandler = () => {
      this.clearIntervals();
      this.slideDurationInterval = setInterval(this.timer, this.autoplayDuration / 100);
    };
    this.containerId = `calcite-carousel-container-${(0,guid.g)()}`;
    this.resizeHandler = ({ contentRect: { width } }) => {
      this.setMaxItemsToBreakpoint(width);
    };
    this.resizeObserver = (0,observers.c)("resize", (entries) => entries.forEach(this.resizeHandler));
    this.slideDurationInterval = null;
    this.slideInterval = null;
    this.timer = () => {
      let time = this.slideDurationRemaining;
      const notSuspended = !this.suspendedDueToFocus && !this.suspendedDueToHover || this.userPreventsSuspend;
      if (notSuspended) {
        if (time <= 0.01) {
          time = 1;
          this.direction = "forward";
          this.nextItem(false);
        } else {
          time = time - 0.01;
        }
      }
      if (time > 0) {
        this.slideDurationRemaining = time;
      }
    };
    this.messages = (0,useT9n.u)();
    this.direction = "standby";
    this.items = [];
    this.maxItems = centerItemsByBreakpoint.xxsmall;
    this.playing = false;
    this.slideDurationRemaining = 1;
    this.suspendedDueToFocus = false;
    this.suspendedDueToHover = false;
    this.suspendedSlideDurationRemaining = 1;
    this.userPreventsSuspend = false;
    this.arrowType = "inline";
    this.autoplay = false;
    this.autoplayDuration = DURATION;
    this.controlOverlay = false;
    this.disabled = false;
    this.calciteCarouselChange = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.calciteCarouselPause = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.calciteCarouselPlay = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.calciteCarouselResume = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.calciteCarouselStop = (0,dist/* createEvent */.lh)({ cancelable: false });
  }
  static {
    this.properties = { direction: [16, {}, { state: true }], items: [16, {}, { state: true }], maxItems: [16, {}, { state: true }], playing: [16, {}, { state: true }], selectedIndex: [16, {}, { state: true }], slideDurationRemaining: [16, {}, { state: true }], suspendedDueToFocus: [16, {}, { state: true }], suspendedDueToHover: [16, {}, { state: true }], suspendedSlideDurationRemaining: [16, {}, { state: true }], userPreventsSuspend: [16, {}, { state: true }], arrowType: [3, {}, { reflect: true }], autoplay: [3, {}, { reflect: true }], autoplayDuration: [11, {}, { type: Number, reflect: true }], controlOverlay: [7, {}, { reflect: true, type: Boolean }], disabled: [7, {}, { reflect: true, type: Boolean }], label: 1, messageOverrides: [0, {}, { attribute: false }], paused: [5, {}, { type: Boolean }], selectedItem: [0, {}, { attribute: false }] };
  }
  static {
    this.styles = styles;
  }
  async play() {
    if (this.playing || this.autoplay !== "" && !this.autoplay && this.autoplay !== "paused") {
      return;
    }
    this.handlePlay(true);
  }
  async setFocus() {
    await (0,component.c)(this);
    this.container?.focus();
  }
  async stop() {
    if (!this.playing) {
      return;
    }
    this.handlePause(true);
  }
  connectedCallback() {
    super.connectedCallback();
    this.resizeObserver?.observe(this.el);
  }
  async load() {
    if ((this.autoplay === "" || this.autoplay) && this.autoplay !== "paused") {
      this.handlePlay(false);
    } else if (this.autoplay === "paused") {
      this.paused = true;
    }
  }
  willUpdate(changes) {
    if (changes.has("autoplay") && this.hasUpdated) {
      this.autoplayWatcher(this.autoplay);
    }
    if (changes.has("direction") && (this.hasUpdated || this.direction !== "standby")) {
      this.directionWatcher(this.direction);
    }
    if (changes.has("playing") && (this.hasUpdated || this.playing !== false)) {
      this.paused = !this.playing;
    }
    if (changes.has("suspendedDueToFocus") && (this.hasUpdated || this.suspendedDueToFocus !== false) || changes.has("suspendedDueToHover") && (this.hasUpdated || this.suspendedDueToHover !== false)) {
      this.suspendWatcher();
    }
  }
  updated() {
    (0,interactive.u)(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.clearIntervals();
    this.resizeObserver?.disconnect();
  }
  autoplayWatcher(autoplay) {
    if (!autoplay) {
      this.handlePause(false);
    }
  }
  async directionWatcher(direction) {
    if (direction === "standby") {
      return;
    }
    await (0,dom.z)(this.itemContainer, direction === "forward" ? "item-forward" : "item-backward");
    this.direction = "standby";
  }
  suspendWatcher() {
    if (!this.suspendedDueToFocus && !this.suspendedDueToHover) {
      this.suspendEnd();
    } else {
      this.suspendStart();
    }
  }
  setMaxItemsToBreakpoint(width) {
    if (!width) {
      return;
    }
    if (width >= breakpoints.width.small) {
      this.maxItems = centerItemsByBreakpoint.medium;
      return;
    }
    if (width >= breakpoints.width.xsmall) {
      this.maxItems = centerItemsByBreakpoint.small;
      return;
    }
    if (width >= breakpoints.width.xxsmall) {
      this.maxItems = centerItemsByBreakpoint.xsmall;
      return;
    }
    this.maxItems = centerItemsByBreakpoint.xxsmall;
  }
  clearIntervals() {
    clearInterval(this.slideDurationInterval);
    clearInterval(this.slideInterval);
  }
  nextItem(emit) {
    if (this.playing && emit) {
      this.playing = false;
    }
    const nextIndex = (0,array.g)(this.selectedIndex + 1, this.items.length);
    this.setSelectedItem(nextIndex, emit);
  }
  previousItem() {
    this.playing = false;
    const prevIndex = (0,array.g)(Math.max(this.selectedIndex - 1, -1), this.items.length);
    this.setSelectedItem(prevIndex, true);
  }
  handlePlay(emit) {
    this.playing = true;
    this.autoplayHandler();
    this.slideInterval = setInterval(this.autoplayHandler, this.autoplayDuration);
    if (emit) {
      this.calciteCarouselPlay.emit();
    }
  }
  handlePause(emit) {
    this.playing = false;
    this.clearIntervals();
    this.slideDurationRemaining = 1;
    this.suspendedSlideDurationRemaining = 1;
    if (emit) {
      this.calciteCarouselStop.emit();
    }
  }
  suspendStart() {
    this.suspendedSlideDurationRemaining = this.slideDurationRemaining;
  }
  suspendEnd() {
    this.slideDurationRemaining = this.suspendedSlideDurationRemaining;
  }
  handleSlotChange(event) {
    const items = (0,dom.s)(event);
    if (items.length < 1) {
      return;
    }
    const activeItemIndex = items.findIndex((item) => item.selected);
    const requestedSelectedIndex = activeItemIndex > -1 ? activeItemIndex : 0;
    this.items = items;
    this.setSelectedItem(requestedSelectedIndex, false);
  }
  setSelectedItem(requestedIndex, emit) {
    const previousSelected = this.selectedIndex;
    this.items.forEach((el, index) => {
      const match = requestedIndex === index;
      el.selected = match;
      if (match) {
        this.selectedItem = el;
        this.selectedIndex = index;
      }
    });
    if (emit) {
      this.playing = false;
      if (previousSelected !== this.selectedIndex) {
        this.calciteCarouselChange.emit();
      }
    }
  }
  handleArrowClick(event) {
    const direction = event.target.dataset.direction;
    if (this.playing) {
      this.handlePause(true);
    }
    if (direction === "next") {
      this.direction = "forward";
      this.nextItem(true);
    } else if (direction === "previous") {
      this.direction = "backward";
      this.previousItem();
    }
  }
  handleItemSelection(event) {
    const item = event.target;
    const requestedPosition = parseInt(item.dataset.index);
    if (requestedPosition === this.selectedIndex) {
      return;
    }
    if (this.playing) {
      this.handlePause(true);
    }
    this.direction = requestedPosition > this.selectedIndex ? "forward" : "backward";
    this.setSelectedItem(requestedPosition, true);
  }
  toggleRotation() {
    this.userPreventsSuspend = true;
    if (this.playing) {
      this.handlePause(true);
    } else {
      this.handlePlay(true);
    }
  }
  handleFocusIn() {
    const isPlaying = this.playing;
    if (isPlaying) {
      this.suspendedDueToFocus = true;
    }
    if ((!this.suspendedDueToFocus || !this.suspendedDueToHover) && isPlaying) {
      this.calciteCarouselPause.emit();
    }
  }
  handleMouseIn() {
    const isPlaying = this.playing;
    if (isPlaying) {
      this.suspendedDueToHover = true;
    }
    if ((!this.suspendedDueToFocus || !this.suspendedDueToHover) && isPlaying) {
      this.calciteCarouselPause.emit();
    }
  }
  handleMouseOut(event) {
    const leavingComponent = !this.el.contains(event.relatedTarget);
    const isPlaying = this.playing;
    if (leavingComponent && isPlaying) {
      this.suspendedDueToHover = false;
    }
    if (leavingComponent && isPlaying && !this.suspendedDueToFocus) {
      this.userPreventsSuspend = false;
      this.calciteCarouselResume.emit();
    }
  }
  handleFocusOut(event) {
    const leavingComponent = !event.composedPath().includes(event.relatedTarget);
    const isPlaying = this.playing;
    if (leavingComponent && isPlaying) {
      this.suspendedDueToFocus = false;
    }
    if (leavingComponent && isPlaying && !this.suspendedDueToHover) {
      this.userPreventsSuspend = false;
      this.calciteCarouselResume.emit();
    }
  }
  containerKeyDownHandler(event) {
    if (event.target !== this.container) {
      return;
    }
    const lastItem = this.items.length - 1;
    switch (event.key) {
      case " ":
      case "Enter":
        event.preventDefault();
        if (this.autoplay === "" || this.autoplay || this.autoplay === "paused") {
          this.toggleRotation();
        }
        break;
      case "ArrowRight":
        event.preventDefault();
        this.direction = "forward";
        this.nextItem(true);
        break;
      case "ArrowLeft":
        event.preventDefault();
        this.direction = "backward";
        this.previousItem();
        break;
      case "Home":
        event.preventDefault();
        if (this.selectedIndex === 0) {
          return;
        }
        this.direction = "backward";
        this.setSelectedItem(0, true);
        break;
      case "End":
        event.preventDefault();
        if (this.selectedIndex === lastItem) {
          return;
        }
        this.direction = "forward";
        this.setSelectedItem(lastItem, true);
        break;
    }
  }
  tabListKeyDownHandler(event) {
    const visiblePaginationEls = Array(...this.tabList.querySelectorAll(`button:not(.${CSS.paginationItemOutOfRange})`));
    const currentEl = event.target;
    switch (event.key) {
      case "ArrowRight":
        (0,dom.d)(visiblePaginationEls, currentEl, "next");
        break;
      case "ArrowLeft":
        (0,dom.d)(visiblePaginationEls, currentEl, "previous");
        break;
      case "Home":
        event.preventDefault();
        (0,dom.d)(visiblePaginationEls, currentEl, "first");
        break;
      case "End":
        event.preventDefault();
        (0,dom.d)(visiblePaginationEls, currentEl, "last");
        break;
    }
  }
  storeTabListRef(el) {
    this.tabList = el;
  }
  storeContainerRef(el) {
    this.container = el;
  }
  storeItemContainerRef(el) {
    this.itemContainer = el;
  }
  renderRotationControl() {
    const text = this.playing ? this.messages.pause : this.messages.play;
    const formattedValue = this.slideDurationRemaining * 100;
    return (0,lit/* html */.qy)`<button .ariaLabel=${text} class=${(0,dist/* safeClassMap */.CP)({
      [CSS.paginationItem]: true,
      [CSS.autoplayControl]: true
    })} @click=${this.toggleRotation} title=${text ?? lit/* nothing */.s6}><calcite-icon .icon=${this.playing ? ICONS.pause : ICONS.play} scale=s></calcite-icon>${this.playing && (0,lit/* html */.qy)`<calcite-progress class=${(0,dist/* safeClassMap */.CP)(CSS.autoplayProgress)} .label=${this.messages.carouselItemProgress} .value=${formattedValue}></calcite-progress>` || ""}</button>`;
  }
  renderPaginationArea() {
    return (0,lit/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)({
      [CSS.pagination]: true,
      [CSS.containerOverlaid]: this.controlOverlay
    })} @keydown=${this.tabListKeyDownHandler} ${(0,ref/* ref */.K)(this.storeTabListRef)}>${(this.playing || this.autoplay === "" || this.autoplay || this.autoplay === "paused") && this.renderRotationControl() || ""}${this.arrowType === "inline" && this.renderArrow("previous") || ""}${this.renderPaginationItems()}${this.arrowType === "inline" && this.renderArrow("next") || ""}</div>`;
  }
  renderPaginationItems() {
    const { selectedIndex, maxItems, items, label, handleItemSelection } = this;
    return (0,lit/* html */.qy)`<div .ariaLabel=${label} class=${(0,dist/* safeClassMap */.CP)(CSS.paginationItems)} role=tablist>${(0,repeat/* repeat */.u)(items, (item) => item.id, (item, index) => {
      const itemCount = items.length;
      const match = index === selectedIndex;
      const first = index === 0;
      const last = index === itemCount - 1;
      const endRangeStart = itemCount - maxItems - 1;
      const inStartRange = selectedIndex < maxItems;
      const inEndRange = selectedIndex >= endRangeStart;
      const rangeStart = inStartRange ? 0 : selectedIndex - Math.floor(maxItems / 2);
      const rangeEnd = inEndRange ? itemCount : rangeStart + maxItems;
      const low = inStartRange ? 0 : inEndRange ? endRangeStart : rangeStart;
      const high = inStartRange ? maxItems + 1 : rangeEnd;
      const isEdge = !first && !last && !match && (index === low - 1 || index === high);
      const visible = match || index <= high && index >= low - 1;
      const overflowActive = itemCount - 1 <= maxItems;
      const icon = match ? ICONS.active : ICONS.inactive;
      return (0,lit/* html */.qy)`<button aria-controls=${(!match ? item.id : void 0) ?? lit/* nothing */.s6} .ariaSelected=${match} class=${(0,dist/* safeClassMap */.CP)({
        [CSS.paginationItem]: true,
        [CSS.paginationItemIndividual]: true,
        [CSS.paginationItemSelected]: match,
        [CSS.paginationItemRangeEdge]: itemCount - 1 > maxItems && isEdge,
        [CSS.paginationItemOutOfRange]: !(overflowActive || visible),
        [CSS.paginationItemVisible]: overflowActive || visible
      })} data-index=${index ?? lit/* nothing */.s6} @click=${handleItemSelection} role=tab title=${item.label ?? lit/* nothing */.s6}><calcite-icon .icon=${icon} scale=l></calcite-icon></button>`;
    })}</div>`;
  }
  renderArrow(direction) {
    const isPrev = direction === "previous";
    const dir = (0,dom.g)(this.el);
    const scale = this.arrowType === "edge" ? "m" : "s";
    const css2 = isPrev ? CSS.pagePrevious : CSS.pageNext;
    const title = isPrev ? this.messages.previous : this.messages.next;
    const icon = isPrev ? ICONS.chevronLeft : ICONS.chevronRight;
    return (0,lit/* html */.qy)`<button aria-controls=${this.containerId ?? lit/* nothing */.s6} class=${(0,dist/* safeClassMap */.CP)({ [CSS.paginationItem]: true, [css2]: true })} data-direction=${direction ?? lit/* nothing */.s6} @click=${this.handleArrowClick} title=${title ?? lit/* nothing */.s6}><calcite-icon .flipRtl=${dir === "rtl"} .icon=${icon} .scale=${scale}></calcite-icon></button>`;
  }
  render() {
    const { direction } = this;
    return (0,interactive.I)({ disabled: this.disabled, children: (0,lit/* html */.qy)`<div .ariaLabel=${this.label} .ariaLive=${this.playing ? "off" : "polite"} .ariaRoleDescription=${this.messages.carousel} class=${(0,dist/* safeClassMap */.CP)({
      [CSS.container]: true,
      [CSS.containerOverlaid]: this.controlOverlay,
      [CSS.containerEdged]: this.arrowType === "edge"
    })} @focusin=${this.handleFocusIn} @focusout=${this.handleFocusOut} @keydown=${this.containerKeyDownHandler} @mouseenter=${this.handleMouseIn} @mouseleave=${this.handleMouseOut} role=group tabindex=0 ${(0,ref/* ref */.K)(this.storeContainerRef)}><section class=${(0,dist/* safeClassMap */.CP)({
      [CSS.itemContainer]: true,
      [CSS.itemContainerForward]: direction === "forward",
      [CSS.itemContainerBackward]: direction === "backward"
    })} id=${this.containerId ?? lit/* nothing */.s6} ${(0,ref/* ref */.K)(this.storeItemContainerRef)}><slot @slotchange=${this.handleSlotChange}></slot></section>${this.items.length > 1 && this.renderPaginationArea() || ""}${this.arrowType === "edge" && this.renderArrow("previous") || ""}${this.arrowType === "edge" && this.renderArrow("next") || ""}</div>` });
  }
}
(0,runtime.c)("calcite-carousel", Carousel);


;// ../node_modules/@esri/calcite-components/dist/components/calcite-carousel/index.js




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


/***/ })

};
;