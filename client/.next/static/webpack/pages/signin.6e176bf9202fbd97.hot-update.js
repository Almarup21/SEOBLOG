"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signin",{

/***/ "./action/auth.js":
/*!************************!*\
  !*** ./action/auth.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signup\": function() { return /* binding */ signup; },\n/* harmony export */   \"signin\": function() { return /* binding */ signin; },\n/* harmony export */   \"signout\": function() { return /* binding */ signout; },\n/* harmony export */   \"setCookie\": function() { return /* binding */ setCookie; },\n/* harmony export */   \"removeCookie\": function() { return /* binding */ removeCookie; },\n/* harmony export */   \"getCookie\": function() { return /* binding */ getCookie; },\n/* harmony export */   \"setLocalStorage\": function() { return /* binding */ setLocalStorage; },\n/* harmony export */   \"removeLocalStorage\": function() { return /* binding */ removeLocalStorage; },\n/* harmony export */   \"authenticate\": function() { return /* binding */ authenticate; },\n/* harmony export */   \"isAuth\": function() { return /* binding */ isAuth; }\n/* harmony export */ });\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ \"./config.js\");\n\n\n\nvar signup = function(user) {\n    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(\"\".concat(_config__WEBPACK_IMPORTED_MODULE_2__.API, \"/signup\"), // { mode: `no-cors` },\n    {\n        method: \"POST\",\n        headers: {\n            Accept: \"application/json\",\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(user)\n    }).then(function(response) {\n        return response.json();\n    }).catch(function(err) {\n        return console.log(err);\n    });\n};\nvar signin = function(user) {\n    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(\"\".concat(_config__WEBPACK_IMPORTED_MODULE_2__.API, \"/signin\"), // { mode: `no-cors` },\n    {\n        method: \"POST\",\n        headers: {\n            Accept: \"application/json\",\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(user)\n    }).then(function(response) {\n        return response.json();\n    }).catch(function(err) {\n        return console.log(err);\n    });\n};\n// signout\nvar signout = function(next) {\n    removeCookie(\"token\");\n    removeLocalStorage(\"user\");\n    next();\n    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(\"\".concat(_config__WEBPACK_IMPORTED_MODULE_2__.API, \"/signout\"), {\n        method: \"GET\"\n    }).then(function(response) {\n        console.log('Signout');\n        ;\n    }).catch(function(err) {\n        return console.log(err);\n    });\n};\n// set Cookie\nvar setCookie = function(key, value) {\n    if (true) {\n        js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set(key, value, {\n            expires: 1\n        });\n    }\n};\nvar removeCookie = function(key) {\n    if (true) {\n        js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove(key, {\n            expires: 1\n        });\n    }\n};\n// get Cookie\nvar getCookie = function(key) {\n    if (true) {\n        js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(key);\n    }\n};\n// set LocalStorage\nvar setLocalStorage = function(key, value) {\n    if (true) {\n        localStorage.setItem(key, JSON.stringify(value));\n    }\n};\n// remove in localStorage\nvar removeLocalStorage = function(key) {\n    if (true) {\n        localStorage.removeItem(key);\n    }\n};\n// set authenticate by pass data to cookie and localStorage\nvar authenticate = function(data, next) {\n    setCookie(\"token\", data.token);\n    setLocalStorage(\"user\", data.user);\n    next();\n};\nvar isAuth = function() {\n    if (true) {\n        var cookieChecked = getCookie(\"token\");\n        if (cookieChecked) {\n            if (localStorage.getItem(\"user\")) {\n                return JSON.parse(localStorage.getItem(\"user\"));\n            } else {\n                return false;\n            }\n        }\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksQ0FBQ1EsT0FBTyxDQUFDLENBQU07WUFDL0MsQ0FBQyxNQUFNLENBQUM7Z0JBQ04sTUFBTSxDQUFDLEtBQUs7WUFDZCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FjdGlvbi9hdXRoLmpzPzRiNTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnbnVwID0gKHVzZXIpID0+IHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBgJHtBUEl9L3NpZ251cGAsXHJcbiAgICAvLyB7IG1vZGU6IGBuby1jb3JzYCB9LFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlciksXHJcbiAgICB9XHJcbiAgKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ25pbiA9ICh1c2VyKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgYCR7QVBJfS9zaWduaW5gLFxyXG4gICAgLy8geyBtb2RlOiBgbm8tY29yc2AgfSxcclxuICAgIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpLFxyXG4gICAgfVxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbi8vIHNpZ25vdXRcclxuXHJcbmV4cG9ydCBjb25zdCBzaWdub3V0ID0gKG5leHQpID0+IHtcclxuICByZW1vdmVDb29raWUoXCJ0b2tlblwiKTtcclxuICByZW1vdmVMb2NhbFN0b3JhZ2UoXCJ1c2VyXCIpO1xyXG4gIG5leHQoKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vc2lnbm91dGAsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdTaWdub3V0Jyk7O1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbi8vIHNldCBDb29raWVcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDb29raWUgPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgIGNvb2tpZS5zZXQoa2V5LCB2YWx1ZSwge1xyXG4gICAgICBleHBpcmVzOiAxLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNvb2tpZSA9IChrZXkpID0+IHtcclxuICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICBjb29raWUucmVtb3ZlKGtleSwge1xyXG4gICAgICBleHBpcmVzOiAxLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gZ2V0IENvb2tpZVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvb2tpZSA9IChrZXkpID0+IHtcclxuICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICBjb29raWUuZ2V0KGtleSk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gc2V0IExvY2FsU3RvcmFnZVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldExvY2FsU3RvcmFnZSA9IChrZXksIHZhbHVlKSA9PiB7XHJcbiAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIHJlbW92ZSBpbiBsb2NhbFN0b3JhZ2VcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVMb2NhbFN0b3JhZ2UgPSAoa2V5KSA9PiB7XHJcbiAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBzZXQgYXV0aGVudGljYXRlIGJ5IHBhc3MgZGF0YSB0byBjb29raWUgYW5kIGxvY2FsU3RvcmFnZVxyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhlbnRpY2F0ZSA9IChkYXRhLCBuZXh0KSA9PiB7XHJcbiAgc2V0Q29va2llKFwidG9rZW5cIiwgZGF0YS50b2tlbik7XHJcbiAgc2V0TG9jYWxTdG9yYWdlKFwidXNlclwiLCBkYXRhLnVzZXIpO1xyXG4gIG5leHQoKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpc0F1dGggPSAoKSA9PiB7XHJcbiAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgY29uc3QgY29va2llQ2hlY2tlZCA9IGdldENvb2tpZShcInRva2VuXCIpO1xyXG4gICAgaWYgKGNvb2tpZUNoZWNrZWQpIHtcclxuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsiZmV0Y2giLCJjb29raWUiLCJBUEkiLCJzaWdudXAiLCJ1c2VyIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInNpZ25pbiIsInNpZ25vdXQiLCJuZXh0IiwicmVtb3ZlQ29va2llIiwicmVtb3ZlTG9jYWxTdG9yYWdlIiwic2V0Q29va2llIiwia2V5IiwidmFsdWUiLCJwcm9jZXNzIiwiYnJvd3NlciIsInNldCIsImV4cGlyZXMiLCJyZW1vdmUiLCJnZXRDb29raWUiLCJnZXQiLCJzZXRMb2NhbFN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsImF1dGhlbnRpY2F0ZSIsImRhdGEiLCJ0b2tlbiIsImlzQXV0aCIsImNvb2tpZUNoZWNrZWQiLCJnZXRJdGVtIiwicGFyc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./action/auth.js\n");

/***/ })

});