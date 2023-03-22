(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/monkey_interpreter_wasm.js":
/*!*****************************************!*\
  !*** ../pkg/monkey_interpreter_wasm.js ***!
  \*****************************************/
/*! exports provided: __wbg_set_wasm, greet, Wrapper, __wbg_alert_9dd0ba8716c83772, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _monkey_interpreter_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monkey_interpreter_wasm_bg.wasm */ \"../pkg/monkey_interpreter_wasm_bg.wasm\");\n/* harmony import */ var _monkey_interpreter_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monkey_interpreter_wasm_bg.js */ \"../pkg/monkey_interpreter_wasm_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_wasm\", function() { return _monkey_interpreter_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_wasm\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return _monkey_interpreter_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"greet\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Wrapper\", function() { return _monkey_interpreter_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Wrapper\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_9dd0ba8716c83772\", function() { return _monkey_interpreter_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_alert_9dd0ba8716c83772\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _monkey_interpreter_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\nObject(_monkey_interpreter_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_wasm\"])(_monkey_interpreter_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n//# sourceURL=webpack:///../pkg/monkey_interpreter_wasm.js?");

/***/ }),

/***/ "../pkg/monkey_interpreter_wasm_bg.js":
/*!********************************************!*\
  !*** ../pkg/monkey_interpreter_wasm_bg.js ***!
  \********************************************/
/*! exports provided: __wbg_set_wasm, greet, Wrapper, __wbg_alert_9dd0ba8716c83772, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_wasm\", function() { return __wbg_set_wasm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return greet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wrapper\", function() { return Wrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_9dd0ba8716c83772\", function() { return __wbg_alert_9dd0ba8716c83772; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\nlet wasm;\nfunction __wbg_set_wasm(val) {\n    wasm = val;\n}\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = null;\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n/**\n*/\nfunction greet() {\n    wasm.greet();\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachedInt32Memory0 = null;\n\nfunction getInt32Memory0() {\n    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {\n        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);\n    }\n    return cachedInt32Memory0;\n}\n/**\n*/\nclass Wrapper {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Wrapper.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_wrapper_free(ptr);\n    }\n    /**\n    * @returns {Wrapper}\n    */\n    static new() {\n        const ret = wasm.wrapper_new();\n        return Wrapper.__wrap(ret);\n    }\n    /**\n    * @param {string} input\n    * @returns {string}\n    */\n    interpret(input) {\n        try {\n            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);\n            const ptr0 = passStringToWasm0(input, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);\n            const len0 = WASM_VECTOR_LEN;\n            wasm.wrapper_interpret(retptr, this.ptr, ptr0, len0);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            wasm.__wbindgen_add_to_stack_pointer(16);\n            wasm.__wbindgen_free(r0, r1);\n        }\n    }\n}\n\nfunction __wbg_alert_9dd0ba8716c83772(arg0, arg1) {\n    alert(getStringFromWasm0(arg0, arg1));\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/monkey_interpreter_wasm_bg.js?");

/***/ }),

/***/ "../pkg/monkey_interpreter_wasm_bg.wasm":
/*!**********************************************!*\
  !*** ../pkg/monkey_interpreter_wasm_bg.wasm ***!
  \**********************************************/
/*! exports provided: memory, __wbg_wrapper_free, wrapper_new, wrapper_interpret, greet, __wbindgen_add_to_stack_pointer, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./monkey_interpreter_wasm_bg.js */ \"../pkg/monkey_interpreter_wasm_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/monkey_interpreter_wasm_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var monkey_interpreter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! monkey-interpreter */ \"../pkg/monkey_interpreter_wasm.js\");\n\n\nlet interpreter = monkey_interpreter__WEBPACK_IMPORTED_MODULE_0__[\"Wrapper\"].new()\n\nconst prompt = document.getElementById(\"prompt-input\");\nconst pressedKeys = {};\nconst interestingKeys = [\"Enter\", \"Shift\"];\n\nprompt.addEventListener(\"input\", function () {\n  this.style.height = this.scrollHeight + 'px';\n})\n\nprompt.addEventListener(\"keydown\", function (event) {\n  if (interestingKeys.includes(event.key)) {\n    pressedKeys[event.key] = true;\n  }\n  // Ignore if shift + enter.\n  if (pressedKeys[\"Enter\"] && pressedKeys[\"Shift\"]) {\n    return;\n  }\n  if (event.key === \"Enter\") {\n    event.preventDefault();\n    const command = prompt.value;\n    runCommand(command);\n    prompt.value = '';\n  }\n});\n\nprompt.addEventListener(\"keyup\", function (event) {\n  if (interestingKeys.includes(event.key)) {\n    pressedKeys[event.key] = false;\n  }\n});\n\n\nconst history = document.getElementById(\"console-history\");\nconst promptText = document.getElementsByClassName(\"prompt-text\")[0]\n\nfunction runCommand(command) {\n  let output = interpreter.interpret(command);\n  history.appendChild(createHistoryNode(command, output));\n  prompt.scrollTop = prompt.scrollHeight;\n}\n\n// Keep focus on the prompt.\nsetInterval(() => {\n  prompt.focus();\n\n}, 3000);\n\nfunction createHistoryNode(command, output) {\n  let commandNode = createDivNode();\n  commandNode.appendChild(promptText.cloneNode(true));\n  commandNode.appendChild(createSpanNode(command));\n  let outputNode = createParaNode(output);\n  let newNode = document.createElement(\"command\");\n  newNode.appendChild(commandNode);\n  newNode.appendChild(outputNode);\n  return newNode;\n}\n\n\nfunction createDivNode() {\n  return createStyledHistoryElement(null, \"div\")\n}\n\nfunction createSpanNode(text) {\n  return createStyledHistoryElement(text, \"span\")\n}\n\nfunction createParaNode(text) {\n  return createStyledHistoryElement(text, \"p\")\n}\n\nfunction createStyledHistoryElement(text, elementType) {\n  let newNode = document.createElement(elementType);\n  newNode.textContent = text;\n  newNode.classList.add(\"console\");\n  newNode.classList.add(\"history-element\");\n  return newNode;\n}\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);