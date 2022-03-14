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

/***/ "./components/auth/SigninComponent.js":
/*!********************************************!*\
  !*** ./components/auth/SigninComponent.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _action_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../action/auth */ \"./action/auth.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar SigninComponent = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"rismawati@gmail.com\",\n        password: \"rismawati123\",\n        error: \"\",\n        loading: false,\n        message: \"\",\n        showForm: true\n    }), values = ref[0], setValues = ref[1];\n    var email = values.email, password = values.password, error = values.error, loading = values.loading, message = values.message, showForm = values.showForm;\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        // console.table({ name, email, password, error, loading, message, showForm });\n        setValues(_objectSpread({}, values, {\n            loading: true,\n            error: false\n        }));\n        var user = {\n            email: email,\n            password: password\n        };\n        (0,_action_auth__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(user).then(function(data) {\n            if (data.error) {\n                setValues(_objectSpread({}, values, {\n                    error: data.error,\n                    loading: false\n                }));\n            } else {\n                next_router__WEBPACK_IMPORTED_MODULE_3___default().push();\n            }\n        });\n    };\n    var handleChange = function(name) {\n        return function(e) {\n            setValues(_objectSpread({}, values, _defineProperty({\n                error: false\n            }, name, e.target.value)));\n        };\n    };\n    var showLoading = function() {\n        return loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"alert alert-info\",\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SigninComponent.js\",\n            lineNumber: 37,\n            columnNumber: 15\n        }, _this1) : \"\";\n    };\n    var showError = function() {\n        return error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"alert alert-danger\",\n            children: error\n        }, void 0, false, {\n            fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SigninComponent.js\",\n            lineNumber: 39,\n            columnNumber: 13\n        }, _this1) : \"\";\n    };\n    var showMessage = function() {\n        return message ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"alert alert-info\",\n            children: message\n        }, void 0, false, {\n            fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SigninComponent.js\",\n            lineNumber: 41,\n            columnNumber: 15\n        }, _this1) : \"\";\n    };\n    var signinForm = function() {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            method: \"POST\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: email,\n                        onChange: handleChange(\"email\"),\n                        type: \"email\",\n                        className: \"form-control\",\n                        placeholder: \"Type your email\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SigninComponent.js\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SigninComponent.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: password,\n                        onChange: handleChange(\"password\"),\n                        type: \"password\",\n                        className: \"form-control\",\n                        placeholder: \"Type your password\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SigninComponent.js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SigninComponent.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-primary\",\n                        children: \"Signup\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SigninComponent.js\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SigninComponent.js\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, _this1)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SigninComponent.js\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, _this1));\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: [\n            showError(),\n            showLoading(),\n            showMessage(),\n            showForm && signinForm()\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SigninComponent.js\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, _this));\n};\n_s(SigninComponent, \"2SfYKI58QQFK2XTzssEyGgUQOko=\");\n_c = SigninComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SigninComponent);\nvar _c;\n$RefreshReg$(_c, \"SigninComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2F1dGgvU2lnbmluQ29tcG9uZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF1QztBQUNEO0FBQ047Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEMsR0FBSyxDQUFDSSxlQUFlLEdBQUcsUUFBUSxHQUFGLENBQUM7OztJQUM3QixHQUFLLENBQXVCSCxHQU8xQixHQVAwQkEsK0NBQVEsQ0FBQyxDQUFDO1FBQ3BDSSxLQUFLLEVBQUUsQ0FBcUI7UUFDNUJDLFFBQVEsRUFBRSxDQUFjO1FBQ3hCQyxLQUFLLEVBQUUsQ0FBRTtRQUNUQyxPQUFPLEVBQUUsS0FBSztRQUNkQyxPQUFPLEVBQUUsQ0FBRTtRQUNYQyxRQUFRLEVBQUUsSUFBSTtJQUNoQixDQUFDLEdBUE1DLE1BQU0sR0FBZVYsR0FPMUIsS0FQYVcsU0FBUyxHQUFJWCxHQU8xQjtJQUVGLEdBQUssQ0FBR0ksS0FBSyxHQUFrRE0sTUFBTSxDQUE3RE4sS0FBSyxFQUFFQyxRQUFRLEdBQXdDSyxNQUFNLENBQXRETCxRQUFRLEVBQUVDLEtBQUssR0FBaUNJLE1BQU0sQ0FBNUNKLEtBQUssRUFBRUMsT0FBTyxHQUF3QkcsTUFBTSxDQUFyQ0gsT0FBTyxFQUFFQyxPQUFPLEdBQWVFLE1BQU0sQ0FBNUJGLE9BQU8sRUFBRUMsUUFBUSxHQUFLQyxNQUFNLENBQW5CRCxRQUFRO0lBRTFELEdBQUssQ0FBQ0csWUFBWSxHQUFHLFFBQVEsQ0FBUEMsQ0FBQyxFQUFLLENBQUM7UUFDM0JBLENBQUMsQ0FBQ0MsY0FBYztRQUNoQixFQUErRTtRQUMvRUgsU0FBUyxtQkFBTUQsTUFBTTtZQUFFSCxPQUFPLEVBQUUsSUFBSTtZQUFFRCxLQUFLLEVBQUUsS0FBSzs7UUFDbEQsR0FBSyxDQUFDUyxJQUFJLEdBQUcsQ0FBQztZQUFDWCxLQUFLLEVBQUxBLEtBQUs7WUFBRUMsUUFBUSxFQUFSQSxRQUFRO1FBQUMsQ0FBQztRQUVoQ0osd0RBQU0sQ0FBQ2MsSUFBSSxFQUFFQyxJQUFJLENBQUMsUUFBUSxDQUFQQyxJQUFJLEVBQUssQ0FBQztZQUMzQixFQUFFLEVBQUVBLElBQUksQ0FBQ1gsS0FBSyxFQUFFLENBQUM7Z0JBQ2ZLLFNBQVMsbUJBQU1ELE1BQU07b0JBQUVKLEtBQUssRUFBRVcsSUFBSSxDQUFDWCxLQUFLO29CQUFFQyxPQUFPLEVBQUUsS0FBSzs7WUFDMUQsQ0FBQyxNQUFNLENBQUM7Z0JBQ05MLHVEQUFXO1lBQ2IsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsR0FBSyxDQUFDaUIsWUFBWSxHQUFHLFFBQVEsQ0FBUEMsSUFBSTtRQUFLLE1BQU0sQ0FBTixRQUFRLENBQVBQLENBQUMsRUFBSyxDQUFDO1lBQ3JDRixTQUFTLG1CQUFNRCxNQUFNO2dCQUFFSixLQUFLLEVBQUUsS0FBSztlQUFHYyxJQUFJLEVBQUdQLENBQUMsQ0FBQ1EsTUFBTSxDQUFDQyxLQUFLO1FBQzdELENBQUM7O0lBRUQsR0FBSyxDQUFDQyxXQUFXLEdBQUcsUUFDckI7UUFBR2hCLE1BQU0sQ0FBTkEsT0FBTywrRUFBSWlCLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQWtCO3NCQUFDLENBQVU7Ozs7O3FCQUFTLENBQUU7O0lBQ25FLEdBQUssQ0FBQ0MsU0FBUyxHQUFHLFFBQ25CO1FBQUdwQixNQUFNLENBQU5BLEtBQUssK0VBQUlrQixDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFvQjtzQkFBRW5CLEtBQUs7Ozs7O3FCQUFVLENBQUU7O0lBQ2hFLEdBQUssQ0FBQ3FCLFdBQVcsR0FBRyxRQUNyQjtRQUFHbkIsTUFBTSxDQUFOQSxPQUFPLCtFQUFJZ0IsQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBa0I7c0JBQUVqQixPQUFPOzs7OztxQkFBVSxDQUFFOztJQUVsRSxHQUFLLENBQUNvQixVQUFVLEdBQUcsUUFBUSxHQUFGLENBQUM7UUFDeEIsTUFBTSw2RUFDSEMsQ0FBSTtZQUFDQyxRQUFRLEVBQUVsQixZQUFZO1lBQUVtQixNQUFNLEVBQUMsQ0FBTTs7NEZBQ3hDUCxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBWTswR0FDeEJPLENBQUs7d0JBQ0pWLEtBQUssRUFBRWxCLEtBQUs7d0JBQ1o2QixRQUFRLEVBQUVkLFlBQVksQ0FBQyxDQUFPO3dCQUM5QmUsSUFBSSxFQUFDLENBQU87d0JBQ1pULFNBQVMsRUFBQyxDQUFjO3dCQUN4QlUsV0FBVyxFQUFDLENBQWlCOzs7Ozs7Ozs7Ozs0RkFJaENYLENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFZOzBHQUN4Qk8sQ0FBSzt3QkFDSlYsS0FBSyxFQUFFakIsUUFBUTt3QkFDZjRCLFFBQVEsRUFBRWQsWUFBWSxDQUFDLENBQVU7d0JBQ2pDZSxJQUFJLEVBQUMsQ0FBVTt3QkFDZlQsU0FBUyxFQUFDLENBQWM7d0JBQ3hCVSxXQUFXLEVBQUMsQ0FBb0I7Ozs7Ozs7Ozs7OzRGQUluQ1gsQ0FBRzswR0FDRFksQ0FBTTt3QkFBQ1gsU0FBUyxFQUFDLENBQWlCO2tDQUFDLENBQU07Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSWxELENBQUM7SUFFRCxNQUFNLDZFQUNIMUIsdURBQWM7O1lBQ1oyQixTQUFTO1lBQ1RILFdBQVc7WUFDWEksV0FBVztZQUNYbEIsUUFBUSxJQUFJbUIsVUFBVTs7Ozs7OztBQUc3QixDQUFDO0dBNUVLekIsZUFBZTtLQUFmQSxlQUFlO0FBOEVyQiwrREFBZUEsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYXV0aC9TaWduaW5Db21wb25lbnQuanM/OGE5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHNpZ25pbiBmcm9tIFwiLi4vLi4vYWN0aW9uL2F1dGhcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IFNpZ25pbkNvbXBvbmVudCA9ICgpID0+IHtcclxuICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgZW1haWw6IFwicmlzbWF3YXRpQGdtYWlsLmNvbVwiLFxyXG4gICAgcGFzc3dvcmQ6IFwicmlzbWF3YXRpMTIzXCIsXHJcbiAgICBlcnJvcjogXCJcIixcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgbWVzc2FnZTogXCJcIixcclxuICAgIHNob3dGb3JtOiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCwgZXJyb3IsIGxvYWRpbmcsIG1lc3NhZ2UsIHNob3dGb3JtIH0gPSB2YWx1ZXM7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBjb25zb2xlLnRhYmxlKHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkLCBlcnJvciwgbG9hZGluZywgbWVzc2FnZSwgc2hvd0Zvcm0gfSk7XHJcbiAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUsIGVycm9yOiBmYWxzZSB9KTtcclxuICAgIGNvbnN0IHVzZXIgPSB7IGVtYWlsLCBwYXNzd29yZCB9O1xyXG5cclxuICAgIHNpZ25pbih1c2VyKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciwgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKG5hbWUpID0+IChlKSA9PiB7XHJcbiAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGVycm9yOiBmYWxzZSwgW25hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaG93TG9hZGluZyA9ICgpID0+XHJcbiAgICBsb2FkaW5nID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1pbmZvXCI+TG9hZGluZy4uLjwvZGl2PiA6IFwiXCI7XHJcbiAgY29uc3Qgc2hvd0Vycm9yID0gKCkgPT5cclxuICAgIGVycm9yID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj57ZXJyb3J9PC9kaXY+IDogXCJcIjtcclxuICBjb25zdCBzaG93TWVzc2FnZSA9ICgpID0+XHJcbiAgICBtZXNzYWdlID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1pbmZvXCI+e21lc3NhZ2V9PC9kaXY+IDogXCJcIjtcclxuXHJcbiAgY29uc3Qgc2lnbmluRm9ybSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IG1ldGhvZD1cIlBPU1RcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoXCJlbWFpbFwiKX1cclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgZW1haWxcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKFwicGFzc3dvcmRcIil9XHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIHBhc3N3b3JkXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlNpZ251cDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIHtzaG93RXJyb3IoKX1cclxuICAgICAge3Nob3dMb2FkaW5nKCl9XHJcbiAgICAgIHtzaG93TWVzc2FnZSgpfVxyXG4gICAgICB7c2hvd0Zvcm0gJiYgc2lnbmluRm9ybSgpfVxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbmluQ29tcG9uZW50O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInNpZ25pbiIsIlJvdXRlciIsIlNpZ25pbkNvbXBvbmVudCIsImVtYWlsIiwicGFzc3dvcmQiLCJlcnJvciIsImxvYWRpbmciLCJtZXNzYWdlIiwic2hvd0Zvcm0iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VyIiwidGhlbiIsImRhdGEiLCJwdXNoIiwiaGFuZGxlQ2hhbmdlIiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwic2hvd0xvYWRpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJzaG93RXJyb3IiLCJzaG93TWVzc2FnZSIsInNpZ25pbkZvcm0iLCJmb3JtIiwib25TdWJtaXQiLCJtZXRob2QiLCJpbnB1dCIsIm9uQ2hhbmdlIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwiRnJhZ21lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/auth/SigninComponent.js\n");

/***/ })

});