"use strict";
(self["webpackChunkteam_b"] = self["webpackChunkteam_b"] || []).push([["src_bootstrap_js"],{

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-array */ "webpack/sharing/consume/default/is-array/is-array");
/* harmony import */ var is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_array__WEBPACK_IMPORTED_MODULE_0__);
let Dropdown = await __webpack_require__.e(/*! import() */ "src_dropdown_js-_71db0").then(__webpack_require__.bind(__webpack_require__, /*! ./dropdown */ "./src/dropdown.js"))
let Button = await __webpack_require__.e(/*! import() */ "src_button_js-_394f0").then(__webpack_require__.bind(__webpack_require__, /*! ./button */ "./src/button.js"))
;
console.log(Dropdown.default, Button.default, (is_array__WEBPACK_IMPORTED_MODULE_0___default().name))

// webpack中配置 支持顶级 await-import 即上面的写法,否则只能如下写法
// topLevelAwait:true
    // (function async() {
    //     let Dropdown = await import("./dropdown")
    //     let Button = await import("./button")
    //     import isArray from "is-array";
    //     console.log(Dropdown.default, Button.default, isArray.name)
    // })()
__webpack_handle_async_dependencies__();
}, 1);

/***/ })

}]);