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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _action_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../action/auth */ \"./action/auth.js\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next */ \"next\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar SignupComponent = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"riswamati\",\n        email: \"rismawati@gmail.com\",\n        password: \"rismawati123\",\n        error: \"\",\n        loading: false,\n        message: \"\",\n        showForm: true\n    }), values = ref[0], setValues = ref[1];\n    var name1 = values.name, email = values.email, password = values.password, error = values.error, loading = values.loading, message = values.message, showForm = values.showForm;\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        // console.table({ name, email, password, error, loading, message, showForm });\n        setValues(_objectSpread({}, values, {\n            loading: true,\n            error: false\n        }));\n        var user = {\n            name: name1,\n            email: email,\n            password: password\n        };\n        (0,_action_auth__WEBPACK_IMPORTED_MODULE_2__.signup)(user).then(function(data) {\n            if (data.error) {\n                setValues(_objectSpread({}, values, {\n                    error: data.error,\n                    loading: false\n                }));\n            } else {\n                setValues(_objectSpread({}, values, {\n                    name: \"\",\n                    email: \"\",\n                    password: \"\",\n                    error: \"\",\n                    loading: false,\n                    message: data.message,\n                    showForm: false\n                }));\n            }\n        });\n    };\n    var handleChange = function(name) {\n        return function(e) {\n            setValues(_objectSpread({}, values, _defineProperty({\n                error: false\n            }, name, e.target.value)));\n        };\n    };\n    var showLoading = function() {\n        return loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"alert alert-info\",\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SignupComponent.js\",\n            lineNumber: 47,\n            columnNumber: 15\n        }, _this1) : \"\";\n    };\n    var showError = function() {\n        return error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"alert alert-danger\",\n            children: error\n        }, void 0, false, {\n            fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SignupComponent.js\",\n            lineNumber: 49,\n            columnNumber: 13\n        }, _this1) : \"\";\n    };\n    var showMessage = function() {\n        return message ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"alert alert-info\",\n            children: message\n        }, void 0, false, {\n            fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SignupComponent.js\",\n            lineNumber: 51,\n            columnNumber: 15\n        }, _this1) : \"\";\n    };\n    var signupForm = function() {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            method: \"POST\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: name1,\n                        onChange: handleChange(\"name\"),\n                        type: \"text\",\n                        className: \"form-control\",\n                        placeholder: \"Type your name\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SignupComponent.js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SignupComponent.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: email,\n                        onChange: handleChange(\"email\"),\n                        type: \"email\",\n                        className: \"form-control\",\n                        placeholder: \"Type your email\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SignupComponent.js\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SignupComponent.js\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: password,\n                        onChange: handleChange(\"password\"),\n                        type: \"password\",\n                        className: \"form-control\",\n                        placeholder: \"Type your password\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SignupComponent.js\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SignupComponent.js\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-primary\",\n                        children: \"Signup\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SignupComponent.js\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SignupComponent.js\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, _this1)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SignupComponent.js\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, _this1));\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: [\n            showError(),\n            showLoading(),\n            showMessage(),\n            showForm && signupForm()\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\auth\\\\SignupComponent.js\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, _this));\n};\n_s(SignupComponent, \"yatXFrCszc+gEP18nX0MOdEYYkI=\");\n_c = SignupComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignupComponent);\nvar _c;\n$RefreshReg$(_c, \"SignupComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2F1dGgvU2lnbnVwQ29tcG9uZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF1QztBQUNHO0FBQ2xCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhCLEdBQUssQ0FBQ0ksZUFBZSxHQUFHLFFBQVEsR0FBRixDQUFDOzs7SUFDN0IsR0FBSyxDQUF1QkgsR0FRMUIsR0FSMEJBLCtDQUFRLENBQUMsQ0FBQztRQUNwQ0ksSUFBSSxFQUFFLENBQVc7UUFDakJDLEtBQUssRUFBRSxDQUFxQjtRQUM1QkMsUUFBUSxFQUFFLENBQWM7UUFDeEJDLEtBQUssRUFBRSxDQUFFO1FBQ1RDLE9BQU8sRUFBRSxLQUFLO1FBQ2RDLE9BQU8sRUFBRSxDQUFFO1FBQ1hDLFFBQVEsRUFBRSxJQUFJO0lBQ2hCLENBQUMsR0FSTUMsTUFBTSxHQUFlWCxHQVExQixLQVJhWSxTQUFTLEdBQUlaLEdBUTFCO0lBRUYsR0FBSyxDQUFHSSxLQUFJLEdBQXlETyxNQUFNLENBQW5FUCxJQUFJLEVBQUVDLEtBQUssR0FBa0RNLE1BQU0sQ0FBN0ROLEtBQUssRUFBRUMsUUFBUSxHQUF3Q0ssTUFBTSxDQUF0REwsUUFBUSxFQUFFQyxLQUFLLEdBQWlDSSxNQUFNLENBQTVDSixLQUFLLEVBQUVDLE9BQU8sR0FBd0JHLE1BQU0sQ0FBckNILE9BQU8sRUFBRUMsT0FBTyxHQUFlRSxNQUFNLENBQTVCRixPQUFPLEVBQUVDLFFBQVEsR0FBS0MsTUFBTSxDQUFuQkQsUUFBUTtJQUVoRSxHQUFLLENBQUNHLFlBQVksR0FBRyxRQUFRLENBQVBDLENBQUMsRUFBSyxDQUFDO1FBQzNCQSxDQUFDLENBQUNDLGNBQWM7UUFDaEIsRUFBK0U7UUFDL0VILFNBQVMsbUJBQU1ELE1BQU07WUFBRUgsT0FBTyxFQUFFLElBQUk7WUFBRUQsS0FBSyxFQUFFLEtBQUs7O1FBQ2xELEdBQUssQ0FBQ1MsSUFBSSxHQUFHLENBQUM7WUFBQ1osSUFBSSxFQUFKQSxLQUFJO1lBQUVDLEtB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MEIsU0FBUztZQUNUSCxXQUFXO1lBQ1hJLFdBQVc7WUFDWGhCLFFBQVEsSUFBSWlCLFVBQVU7Ozs7Ozs7QUFHN0IsQ0FBQztHQWhHS3hCLGVBQWU7S0FBZkEsZUFBZTtBQWtHckIsK0RBQWVBLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2F1dGgvU2lnbnVwQ29tcG9uZW50LmpzPzdjMWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHNpZ251cCB9IGZyb20gXCIuLi8uLi9hY3Rpb24vYXV0aFwiO1xyXG5pbXBvcnQgUm91dGUgZnJvbSAnbmV4dCdcclxuXHJcbmNvbnN0IFNpZ251cENvbXBvbmVudCA9ICgpID0+IHtcclxuICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogXCJyaXN3YW1hdGlcIixcclxuICAgIGVtYWlsOiBcInJpc21hd2F0aUBnbWFpbC5jb21cIixcclxuICAgIHBhc3N3b3JkOiBcInJpc21hd2F0aTEyM1wiLFxyXG4gICAgZXJyb3I6IFwiXCIsXHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIG1lc3NhZ2U6IFwiXCIsXHJcbiAgICBzaG93Rm9ybTogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGVycm9yLCBsb2FkaW5nLCBtZXNzYWdlLCBzaG93Rm9ybSB9ID0gdmFsdWVzO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gY29uc29sZS50YWJsZSh7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCwgZXJyb3IsIGxvYWRpbmcsIG1lc3NhZ2UsIHNob3dGb3JtIH0pO1xyXG4gICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlLCBlcnJvcjogZmFsc2UgfSk7XHJcbiAgICBjb25zdCB1c2VyID0geyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfTtcclxuXHJcbiAgICBzaWdudXAodXNlcikudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IGRhdGEuZXJyb3IsIGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFZhbHVlcyh7XHJcbiAgICAgICAgICAuLi52YWx1ZXMsXHJcbiAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICAgIGVycm9yOiBcIlwiLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsXHJcbiAgICAgICAgICBzaG93Rm9ybTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChuYW1lKSA9PiAoZSkgPT4ge1xyXG4gICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBlcnJvcjogZmFsc2UsIFtuYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvd0xvYWRpbmcgPSAoKSA9PlxyXG4gICAgbG9hZGluZyA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtaW5mb1wiPkxvYWRpbmcuLi48L2Rpdj4gOiBcIlwiO1xyXG4gIGNvbnN0IHNob3dFcnJvciA9ICgpID0+XHJcbiAgICBlcnJvciA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+e2Vycm9yfTwvZGl2PiA6IFwiXCI7XHJcbiAgY29uc3Qgc2hvd01lc3NhZ2UgPSAoKSA9PlxyXG4gICAgbWVzc2FnZSA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtaW5mb1wiPnttZXNzYWdlfTwvZGl2PiA6IFwiXCI7XHJcblxyXG4gIGNvbnN0IHNpZ251cEZvcm0gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBtZXRob2Q9XCJQT1NUXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoXCJuYW1lXCIpfVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG5hbWVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKFwiZW1haWxcIil9XHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIGVtYWlsXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZShcInBhc3N3b3JkXCIpfVxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBwYXNzd29yZFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5TaWdudXA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICB7c2hvd0Vycm9yKCl9XHJcbiAgICAgIHtzaG93TG9hZGluZygpfVxyXG4gICAgICB7c2hvd01lc3NhZ2UoKX1cclxuICAgICAge3Nob3dGb3JtICYmIHNpZ251cEZvcm0oKX1cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cENvbXBvbmVudDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzaWdudXAiLCJSb3V0ZSIsIlNpZ251cENvbXBvbmVudCIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiZXJyb3IiLCJsb2FkaW5nIiwibWVzc2FnZSIsInNob3dGb3JtIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlciIsInRoZW4iLCJkYXRhIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJzaG93TG9hZGluZyIsImRpdiIsImNsYXNzTmFtZSIsInNob3dFcnJvciIsInNob3dNZXNzYWdlIiwic2lnbnVwRm9ybSIsImZvcm0iLCJvblN1Ym1pdCIsIm1ldGhvZCIsImlucHV0Iiwib25DaGFuZ2UiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJGcmFnbWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/auth/SignupComponent.js\n");

/***/ }),

/***/ "next":
/*!***********************!*\
  !*** external "next" ***!
  \***********************/
/***/ (function(module) {

module.exports = next;

/***/ })

});