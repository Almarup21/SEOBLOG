"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./action/auth.js":
/*!************************!*\
  !*** ./action/auth.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signin\": function() { return /* binding */ signin; },\n/* harmony export */   \"signup\": function() { return /* binding */ signup; }\n/* harmony export */ });\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./config.js\");\n\n\nvar signin = function(user) {\n    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(\"\".concat(_config__WEBPACK_IMPORTED_MODULE_1__.API, \"/signn\"), // { mode: `no-cors` },\n    {\n        method: \"POST\",\n        headers: {\n            Accept: \"application/json\",\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(user)\n    }).then(function(response) {\n        return response.json();\n    }).catch(function(err) {\n        return console.log(err);\n    });\n};\nvar signup = function(user) {\n    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(\"\".concat(_config__WEBPACK_IMPORTED_MODULE_1__.API, \"/signup\"), // { mode: `no-cors` },\n    {\n        method: \"POST\",\n        headers: {\n            Accept: \"application/json\",\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(user)\n    }).then(function(response) {\n        return response.json();\n    }).catch(function(err) {\n        return console.log(err);\n    });\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hY3Rpb24vYXV0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFvQztBQUNMO0FBRXhCLEdBQUssQ0FBQ0UsTUFBTSxHQUFHLFFBQVEsQ0FBUEMsSUFBSSxFQUFLLENBQUM7SUFDL0IsTUFBTSxDQUFDSCx1REFBSyxDQUNULEdBQU0sTUFBTSxDQUFWQyx3Q0FBRyxFQUFDLENBQU0sVUFDYixFQUF1QjtJQUN2QixDQUFDO1FBQ0NHLE1BQU0sRUFBRSxDQUFNO1FBQ2RDLE9BQU8sRUFBRSxDQUFDO1lBQ1JDLE1BQU0sRUFBRSxDQUFrQjtZQUMxQixDQUFjLGVBQUUsQ0FBa0I7UUFDcEMsQ0FBQztRQUNEQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDTixJQUFJO0lBQzNCLENBQUMsRUFFQU8sSUFBSSxDQUFDLFFBQVEsQ0FBUEMsUUFBUSxFQUFLLENBQUM7UUFDbkIsTUFBTSxDQUFDQSxRQUFRLENBQUNDLElBQUk7SUFDdEIsQ0FBQyxFQUNBQyxLQUFLLENBQUMsUUFBUSxDQUFQQyxHQUFHO1FBQUtDLE1BQU0sQ0FBTkEsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUc7O0FBQ25DLENBQUM7QUFFTSxHQUFLLENBQUNHLE1BQU0sR0FBRyxRQUFRLENBQVBkLElBQUksRUFBSyxDQUFDO0lBQy9CLE1BQU0sQ0FBQ0gsdURBQUssQ0FDVCxHQUFNLE1BQU8sQ0FBWEMsd0NBQUcsRUFBQyxDQUFPLFdBQ2QsRUFBdUI7SUFDdkIsQ0FBQztRQUNDRyxNQUFNLEVBQUUsQ0FBTTtRQUNkQyxPQUFPLEVBQUUsQ0FBQztZQUNSQyxNQUFNLEVBQUUsQ0FBa0I7WUFDMUIsQ0FBYyxlQUFFLENBQWtCO1FBQ3BDLENBQUM7UUFDREMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ04sSUFBSTtJQUMzQixDQUFDLEVBRUFPLElBQUksQ0FBQyxRQUFRLENBQVBDLFFBQVEsRUFBSyxDQUFDO1FBQ25CLE1BQU0sQ0FBQ0EsUUFBUSxDQUFDQyxJQUFJO0lBQ3RCLENBQUMsRUFDQUMsS0FBSyxDQUFDLFFBQVEsQ0FBUEMsR0FBRztRQUFLQyxNQUFNLENBQU5BLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHOztBQUNuQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FjdGlvbi9hdXRoLmpzPzRiNTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCI7XHJcbmltcG9ydCB7IEFQSSB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzaWduaW4gPSAodXNlcikgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIGAke0FQSX0vc2lnbm5gLFxyXG4gICAgLy8geyBtb2RlOiBgbm8tY29yc2AgfSxcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpLFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaWdudXAgPSAodXNlcikgPT4ge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIGAke0FQSX0vc2lnbnVwYCxcclxuICAgIC8vIHsgbW9kZTogYG5vLWNvcnNgIH0sXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyKSxcclxuICAgIH1cclxuICApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbImZldGNoIiwiQVBJIiwic2lnbmluIiwidXNlciIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzaWdudXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./action/auth.js\n");

/***/ })

});