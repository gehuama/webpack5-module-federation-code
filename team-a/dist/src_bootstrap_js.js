"use strict";
(self["webpackChunkteam_a"] = self["webpackChunkteam_a"] || []).push([["src_bootstrap_js"],{

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page */ "./src/home-page.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_home_page__WEBPACK_IMPORTED_MODULE_0__]);
_home_page__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

console.log(_home_page__WEBPACK_IMPORTED_MODULE_0__.default);
});

/***/ }),

/***/ "./src/home-page.js":
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-array */ "webpack/sharing/consume/default/is-array/is-array");
/* harmony import */ var is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_array__WEBPACK_IMPORTED_MODULE_0__);
let Dropdown = await __webpack_require__.e(/*! import() */ "webpack_container_remote_team-b_dropdown").then(__webpack_require__.t.bind(__webpack_require__, /*! team-b/dropdown */ "webpack/container/remote/team-b/dropdown", 23));
let LoginModel = await __webpack_require__.e(/*! import() */ "src_login-model_js").then(__webpack_require__.bind(__webpack_require__, /*! ./login-model */ "./src/login-model.js"));


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`(HomePage[${Dropdown.default}][${LoginModel.default}][${(is_array__WEBPACK_IMPORTED_MODULE_0___default().name)}])`);
__webpack_handle_async_dependencies__();
}, 1);

/***/ })

}]);