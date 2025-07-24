"use strict";
exports.id = 44490;
exports.ids = [44490,96446];
exports.modules = {

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

/***/ 29265:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ CSS)
/* harmony export */ });
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */
const CSS = {
  container: "container",
  containerNone: "container--none-selection",
  icon: "dropdown-item-icon",
  iconEnd: "dropdown-item-icon--end",
  iconStart: "dropdown-item-icon--start",
  itemContent: "dropdown-item-content",
  link: "dropdown-link"
};



/***/ }),

/***/ 44490:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  DropdownItem: () => (/* reexport */ DropdownItem)
});

// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/components/calcite-icon/index.js + 1 modules
var calcite_icon = __webpack_require__(96446);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/runtime.js
var runtime = __webpack_require__(14558);
// EXTERNAL MODULE: ../node_modules/lit-html/node/lit-html.js
var lit_html = __webpack_require__(31263);
// EXTERNAL MODULE: ../node_modules/lit-html/node/directives/ref.js + 1 modules
var ref = __webpack_require__(59276);
// EXTERNAL MODULE: ../node_modules/@arcgis/lumina/dist/index.js + 15 modules
var dist = __webpack_require__(48747);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/dom.js
var dom = __webpack_require__(25450);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/component.js
var component = __webpack_require__(66865);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/interactive.js
var interactive = __webpack_require__(28070);
// EXTERNAL MODULE: ../node_modules/@esri/calcite-components/dist/chunks/resources6.js
var resources6 = __webpack_require__(29265);
// EXTERNAL MODULE: ../node_modules/@lit/reactive-element/node/css-tag.js
var css_tag = __webpack_require__(56385);
;// ../node_modules/@esri/calcite-components/dist/components/calcite-dropdown-item/customElement.js
/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.2.1 */









const styles = (0,css_tag/* css */.AH)`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;flex-grow:1;align-items:center;outline-color:transparent}.container{position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;text-decoration-line:none;color:var(--calcite-dropdown-item-text-color, var(--calcite-color-text-3));text-align:start;outline-color:transparent}.container a{outline:none;position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;text-decoration-line:none;color:var(--calcite-dropdown-item-text-color, var(--calcite-color-text-3))}.dropdown-item-content{flex:1 1 auto;padding-block:.125rem}.dropdown-item-icon{position:relative;opacity:0;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);transform:scale(.9)}:host([scale=s]) .container{padding-block:.25rem;padding-inline:.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .dropdown-item-icon,:host([scale=s]) .dropdown-item-icon--start{padding-inline-end:var(--calcite-spacing-sm)}:host([scale=s]) .dropdown-item-icon--end{padding-inline-start:var(--calcite-spacing-sm)}:host([scale=m]) .container{padding-block:.5rem;padding-inline:.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .dropdown-item-icon,:host([scale=m]) .dropdown-item-icon--start{padding-inline-end:var(--calcite-spacing-md)}:host([scale=m]) .dropdown-item-icon--end{padding-inline-start:var(--calcite-spacing-md)}:host([scale=l]) .container{padding-block:.625rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .dropdown-item-icon,:host([scale=l]) .dropdown-item-icon--start{padding-inline-end:var(--calcite-spacing-lg)}:host([scale=l]) .dropdown-item-icon--end{padding-inline-start:var(--calcite-spacing-lg)}:host(:focus) .container{text-decoration-line:none;outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}:host(:hover:not([disabled])) .container{background-color:var(--calcite-dropdown-item-background-color-hover, var(--calcite-color-foreground-2))}:host(:active:not([disabled])) .container{background-color:var(--calcite-dropdown-item-background-color-press, var(--calcite-color-foreground-3))}:host(:hover:not([disabled])) .container,:host(:active:not([disabled])) .container{text-decoration-line:none;color:var(--calcite-dropdown-item-text-color-press, var(--calcite-color-text-1))}:host(:hover:not([disabled])) .dropdown-link,:host(:active:not([disabled])) .dropdown-link{color:var(--calcite-dropdown-item-text-color-press, var(--calcite-color-text-1))}:host([selected]) .container:not(.container--none-selection),:host([selected]) .dropdown-link{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-dropdown-item-text-color-press, var(--calcite-color-text-1))}:host([selected]) .container:not(.container--none-selection) calcite-icon,:host([selected]) .dropdown-link calcite-icon{color:var(--calcite-dropdown-item-icon-color-press, var(--calcite-color-brand))}:host(:hover:not([disabled])) .dropdown-item-icon{color:var(--calcite-dropdown-item-icon-color-hover)}:host([selected]) .dropdown-item-icon{opacity:1}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}`;
class DropdownItem extends dist/* LitElement */.WF {
  constructor() {
    super();
    this.childLink = (0,ref/* createRef */._)();
    this.disabled = false;
    this.scale = "m";
    this.selected = false;
    this.selectionMode = "single";
    this.calciteDropdownItemSelect = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.calciteInternalDropdownCloseRequest = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.calciteInternalDropdownItemKeyEvent = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.calciteInternalDropdownItemSelect = (0,dist/* createEvent */.lh)({ cancelable: false });
    this.listen("click", this.onClick);
    this.listen("keydown", this.keyDownHandler);
    this.listenOn(document.body, "calciteInternalDropdownItemChange", this.updateActiveItemOnChange);
  }
  static {
    this.properties = { disabled: [7, {}, { reflect: true, type: Boolean }], href: [3, {}, { reflect: true }], iconEnd: [3, {}, { reflect: true }], iconFlipRtl: [3, {}, { reflect: true }], iconStart: [3, {}, { reflect: true }], label: 1, rel: [3, {}, { reflect: true }], scale: [3, {}, { reflect: true }], selected: [7, {}, { reflect: true, type: Boolean }], selectionMode: 1, target: [3, {}, { reflect: true }] };
  }
  static {
    this.styles = styles;
  }
  async setFocus() {
    await (0,component.c)(this);
    this.el?.focus();
  }
  connectedCallback() {
    super.connectedCallback();
    this.initialize();
  }
  load() {
    this.initialize();
  }
  updated() {
    (0,interactive.u)(this);
  }
  onClick() {
    this.emitRequestedItem();
  }
  keyDownHandler(event) {
    switch (event.key) {
      case " ":
      case "Enter":
        this.emitRequestedItem();
        if (this.href) {
          this.childLink.value.click();
        }
        event.preventDefault();
        break;
      case "Escape":
        this.calciteInternalDropdownCloseRequest.emit();
        event.preventDefault();
        break;
      case "Tab":
        this.calciteInternalDropdownItemKeyEvent.emit({ keyboardEvent: event });
        break;
      case "ArrowUp":
      case "ArrowDown":
      case "Home":
      case "End":
        event.preventDefault();
        this.calciteInternalDropdownItemKeyEvent.emit({ keyboardEvent: event });
        break;
    }
  }
  updateActiveItemOnChange(event) {
    const parentEmittedChange = event.composedPath().includes(this.parentDropdownGroupEl);
    if (parentEmittedChange) {
      this.requestedDropdownGroup = event.detail.requestedDropdownGroup;
      this.requestedDropdownItem = event.detail.requestedDropdownItem;
      this.determineActiveItem();
    }
    event.stopPropagation();
  }
  initialize() {
    this.parentDropdownGroupEl = this.el.closest("calcite-dropdown-group");
    if (this.selectionMode === "none") {
      this.selected = false;
    }
  }
  determineActiveItem() {
    switch (this.selectionMode) {
      case "multiple":
        if (this.el === this.requestedDropdownItem) {
          this.selected = !this.selected;
        }
        break;
      case "single":
        if (this.el === this.requestedDropdownItem) {
          this.selected = true;
        } else if (this.requestedDropdownGroup === this.parentDropdownGroupEl) {
          this.selected = false;
        }
        break;
      case "none":
        this.selected = false;
        break;
    }
  }
  emitRequestedItem() {
    this.calciteDropdownItemSelect.emit();
    this.calciteInternalDropdownItemSelect.emit({
      requestedDropdownItem: this.el,
      requestedDropdownGroup: this.parentDropdownGroupEl
    });
  }
  render() {
    const { href, selectionMode, label, iconFlipRtl } = this;
    const iconStartEl = (0,lit_html/* html */.qy)`<calcite-icon class=${(0,dist/* safeClassMap */.CP)(resources6.C.iconStart)} .flipRtl=${iconFlipRtl === "start" || iconFlipRtl === "both"} .icon=${this.iconStart} .scale=${(0,component.g)(this.scale)}></calcite-icon>`;
    const contentNode = (0,lit_html/* html */.qy)`<span class=${(0,dist/* safeClassMap */.CP)(resources6.C.itemContent)}><slot></slot></span>`;
    const iconEndEl = (0,lit_html/* html */.qy)`<calcite-icon class=${(0,dist/* safeClassMap */.CP)(resources6.C.iconEnd)} .flipRtl=${iconFlipRtl === "end" || iconFlipRtl === "both"} .icon=${this.iconEnd} .scale=${(0,component.g)(this.scale)}></calcite-icon>`;
    const slottedContent = this.iconStart && this.iconEnd ? [iconStartEl, contentNode, iconEndEl] : this.iconStart ? [iconStartEl, contentNode] : this.iconEnd ? [contentNode, iconEndEl] : contentNode;
    const contentEl = !href ? slottedContent : (0,lit_html/* html */.qy)`<a .ariaLabel=${label} class=${(0,dist/* safeClassMap */.CP)(resources6.C.link)} href=${href ?? dist/* nothing */.s6} rel=${this.rel ?? dist/* nothing */.s6} tabindex=-1 target=${this.target ?? dist/* nothing */.s6} ${(0,ref/* ref */.K)(this.childLink)}>${slottedContent}</a>`;
    const itemRole = href ? null : selectionMode === "single" ? "menuitemradio" : selectionMode === "multiple" ? "menuitemcheckbox" : "menuitem";
    const itemAria = selectionMode !== "none" ? (0,dom.t)(this.selected) : null;
    const { disabled } = this;
    this.el.ariaChecked = itemAria;
    this.el.ariaLabel = !href ? label : "";
    this.el.role = itemRole;
    (0,dist/* setAttribute */.Bq)(this.el, "tabIndex", disabled ? -1 : 0);
    return (0,interactive.I)({ disabled, children: (0,lit_html/* html */.qy)`<div class=${(0,dist/* safeClassMap */.CP)({
      [resources6.C.container]: true,
      [resources6.C.containerNone]: selectionMode === "none"
    })}>${selectionMode !== "none" ? (0,lit_html/* html */.qy)`<calcite-icon class=${(0,dist/* safeClassMap */.CP)(resources6.C.icon)} .icon=${selectionMode === "multiple" ? "check" : "bullet-point"} .scale=${(0,component.g)(this.scale)}></calcite-icon>` : null}${contentEl}</div>` });
  }
}
(0,runtime.c)("calcite-dropdown-item", DropdownItem);


;// ../node_modules/@esri/calcite-components/dist/components/calcite-dropdown-item/index.js



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


/***/ })

};
;