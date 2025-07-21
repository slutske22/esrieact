"use strict";
exports.id = 2817;
exports.ids = [2817,6446,2524];
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


/***/ })

};
;