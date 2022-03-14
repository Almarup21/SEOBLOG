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

/***/ "./components/auth/SignupComponent.js":
/*!********************************************!*\
  !*** ./components/auth/SignupComponent.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _action_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../action/auth */ \"./action/auth.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar SignupComponent = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"riswamati\",\n        email: \"rismawati@gmail.com\",\n        password: \"rismawati123\",\n        error: \"\",\n        loading: false,\n        message: \"\",\n        showForm: true\n    }), values = ref[0], setValues = ref[1];\n    var name1 = values.name, email = values.email, password = values.password, error = values.error, loading = values.loading, message = values.message, showForm = values.showForm;\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        // console.table({ name, email, password, error, loading, message, showForm });\n        setValues(_objectSpread({}, values, {\n            loading: true,\n            error: false\n        }));\n        var user = {\n            name: name1,\n            email: email,\n            password: password\n        };\n        (0,_action_auth__WEBPACK_IMPORTED_MODULE_2__.signup)(user).then(function(data) {\n            if (data.error) {\n                setValues(_objectSpread({}, values, {\n                    error: data.error,\n                    loading: false\n                }));\n            } else {\n                setValues(_objectSpread({}, values, {\n                    name: \"\",\n                    email: \"\",\n                    password: \"\",\n                    error: \"\",\n                    loading: false,\n                    message: data.message,\n                    showForm: false\n                }), next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/signin\"));\n            }\n        });\n    };\n    var handleChange = function(name) {\n        return function(e) {\n            setValues(_objectSpread({}, values, _defineProperty({\n                error: false\n            }, name, e.target.value)));\n        };\n    };\n    var showLoading = function() {\n        return loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"alert alert-info\",\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SignupComponent.js\",\n            lineNumber: 50,\n            columnNumber: 15\n        }, _this1) : \"\";\n    };\n    var showError = function() {\n        return error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"alert alert-danger\",\n            children: error\n        }, void 0, false, {\n            fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SignupComponent.js\",\n            lineNumber: 52,\n            columnNumber: 13\n        }, _this1) : \"\";\n    };\n    var showMessage = function() {\n        return message ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"alert alert-info\",\n            children: message\n        }, void 0, false, {\n            fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SignupComponent.js\",\n            lineNumber: 54,\n            columnNumber: 15\n        }, _this1) : \"\";\n    };\n    var signupForm = function() {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            method: \"POST\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: name1,\n                        onChange: handleChange(\"name\"),\n                        type: \"text\",\n                        className: \"form-control\",\n                        placeholder: \"Type your name\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SignupComponent.js\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SignupComponent.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: email,\n                        onChange: handleChange(\"email\"),\n                        type: \"email\",\n                        className: \"form-control\",\n                        placeholder: \"Type your email\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SignupComponent.js\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SignupComponent.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: password,\n                        onChange: handleChange(\"password\"),\n                        type: \"password\",\n                        className: \"form-control\",\n                        placeholder: \"Type your password\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SignupComponent.js\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SignupComponent.js\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-primary\",\n                        children: \"Signup\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SignupComponent.js\",\n                        lineNumber: 90,\n                        columnNumber: 11\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SignupComponent.js\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, _this1)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SignupComponent.js\",\n            lineNumber: 58,\n            columnNumber: 7\n        }, _this1));\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: [\n            showError(),\n            showLoading(),\n            showMessage(),\n            showForm && signupForm()\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SignupComponent.js\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, _this));\n};\n_s(SignupComponent, \"yatXFrCszc+gEP18nX0MOdEYYkI=\");\n_c = SignupComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignupComponent);\nvar _c;\n$RefreshReg$(_c, \"SignupComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2F1dGgvU2lnbnVwQ29tcG9uZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF1QztBQUNHO0FBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEMsR0FBSyxDQUFDSSxlQUFlLEdBQUcsUUFBUSxHQUFGLENBQUM7OztJQUM3QixHQUFLLENBQXVCSCxHQVExQixHQVIwQkEsK0NBQVEsQ0FBQyxDQUFDO1FBQ3BDSSxJQUFJLEVBQUUsQ0FBVztRQUNqQkMsS0FBSyxFQUFFLENBQXFCO1FBQzVCQyxRQUFRLEVBQUUsQ0FBYztRQUN4QkMsS0FBSyxFQUFFLENBQUU7UUFDVEMsT0FBTyxFQUFFLEtBQUs7UUFDZEMsT0FBTyxFQUFFLENBQUU7UUFDWEMsUUFBUSxFQUFFLElBQUk7SUFDaEIsQ0FBQyxHQVJNQyxNQUFNLEdBQWVYLEdBUTFCLEtBUmFZLFNBQVMsR0FBSVosR0FRMUI7SUFFRixHQUFLLENBQUdJLEtBQUksR0FBeURPLE1BQU0sQ0FBbkVQLElBQUksRUFBRUMsS0FBSyxHQUFrRE0sTUFBTSxDQUE3RE4sS0FBSyxFQUFFQyxRQUFRLEdBQXdDSyxNQUFNLENBQXRETCxRQUFRLEVBQUVDLEtBQUssR0FBaUNJLE1BQU0sQ0FBNUNKLEtBQUssRUFBRUMsT0FBTyxHQUF3QkcsTUFBTSxDQUFyQ0gsT0FBTyxFQUFFQyxPQUFPLEdBQWVFLE1BQU0sQ0FBNUJGLE9BQU8sRUFBRUMsUUFBUSxHQUFLQyxNQUFNLENBQW5CRCxRQUFRO0lBRWhFLEdBQUssQ0FBQ0csWUFBWSxHQUFHLFFBQVEsQ0FBUEMsQ0FBQyxFQUFLLENBQUM7UUFDM0JBLENBQUMsQ0FBQ0MsY0FBYztRQUNoQixFQUErRTtRQUMvRUgsU0FBUyxtQkFBTUQsTUFBTTtZQUFFSCxPQUFPLEVBQUUsSUFBSTtZQUFFRCxLQUFLLEVBQUUsS0FBSzs7UUFDbEQsR0FBSyxDQUFDUyxJQUFJLEdBQUcsQ0FBQztZQUFDWixJQUFJLEVBQUpBLEtBQUk7WUFBRUMsS0FB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RUQsTUFBTSw2RUFDSDFCLHVEQUFjOztZQUNaMkIsU0FBUztZQUNUSCxXQUFXO1lBQ1hJLFdBQVc7WUFDWGpCLFFBQVEsSUFBSWtCLFVBQVU7Ozs7Ozs7QUFHN0IsQ0FBQztHQW5HS3pCLGVBQWU7S0FBZkEsZUFBZTtBQXFHckIsK0RBQWVBLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2F1dGgvU2lnbnVwQ29tcG9uZW50LmpzPzdjMWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHNpZ251cCB9IGZyb20gXCIuLi8uLi9hY3Rpb24vYXV0aFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgU2lnbnVwQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiBcInJpc3dhbWF0aVwiLFxyXG4gICAgZW1haWw6IFwicmlzbWF3YXRpQGdtYWlsLmNvbVwiLFxyXG4gICAgcGFzc3dvcmQ6IFwicmlzbWF3YXRpMTIzXCIsXHJcbiAgICBlcnJvcjogXCJcIixcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgbWVzc2FnZTogXCJcIixcclxuICAgIHNob3dGb3JtOiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCwgZXJyb3IsIGxvYWRpbmcsIG1lc3NhZ2UsIHNob3dGb3JtIH0gPSB2YWx1ZXM7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBjb25zb2xlLnRhYmxlKHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkLCBlcnJvciwgbG9hZGluZywgbWVzc2FnZSwgc2hvd0Zvcm0gfSk7XHJcbiAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUsIGVycm9yOiBmYWxzZSB9KTtcclxuICAgIGNvbnN0IHVzZXIgPSB7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCB9O1xyXG5cclxuICAgIHNpZ251cCh1c2VyKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZGF0YS5lcnJvciwgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0VmFsdWVzKFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAuLi52YWx1ZXMsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICAgICAgZXJyb3I6IFwiXCIsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHNob3dGb3JtOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBSb3V0ZXIucHVzaChcIi9zaWduaW5cIilcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAobmFtZSkgPT4gKGUpID0+IHtcclxuICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGZhbHNlLCBbbmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNob3dMb2FkaW5nID0gKCkgPT5cclxuICAgIGxvYWRpbmcgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWluZm9cIj5Mb2FkaW5nLi4uPC9kaXY+IDogXCJcIjtcclxuICBjb25zdCBzaG93RXJyb3IgPSAoKSA9PlxyXG4gICAgZXJyb3IgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPntlcnJvcn08L2Rpdj4gOiBcIlwiO1xyXG4gIGNvbnN0IHNob3dNZXNzYWdlID0gKCkgPT5cclxuICAgIG1lc3NhZ2UgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWluZm9cIj57bWVzc2FnZX08L2Rpdj4gOiBcIlwiO1xyXG5cclxuICBjb25zdCBzaWdudXBGb3JtID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gbWV0aG9kPVwiUE9TVFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKFwibmFtZVwiKX1cclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBuYW1lXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZShcImVtYWlsXCIpfVxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBlbWFpbFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoXCJwYXNzd29yZFwiKX1cclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U2lnbnVwPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAge3Nob3dFcnJvcigpfVxyXG4gICAgICB7c2hvd0xvYWRpbmcoKX1cclxuICAgICAge3Nob3dNZXNzYWdlKCl9XHJcbiAgICAgIHtzaG93Rm9ybSAmJiBzaWdudXBGb3JtKCl9XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXBDb21wb25lbnQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic2lnbnVwIiwiUm91dGVyIiwiU2lnbnVwQ29tcG9uZW50IiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJlcnJvciIsImxvYWRpbmciLCJtZXNzYWdlIiwic2hvd0Zvcm0iLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VyIiwidGhlbiIsImRhdGEiLCJwdXNoIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJzaG93TG9hZGluZyIsImRpdiIsImNsYXNzTmFtZSIsInNob3dFcnJvciIsInNob3dNZXNzYWdlIiwic2lnbnVwRm9ybSIsImZvcm0iLCJvblN1Ym1pdCIsIm1ldGhvZCIsImlucHV0Iiwib25DaGFuZ2UiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJGcmFnbWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/auth/SignupComponent.js\n");

/***/ })

});