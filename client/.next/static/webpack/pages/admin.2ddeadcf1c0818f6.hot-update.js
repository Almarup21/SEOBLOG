"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ \"./node_modules/next/Link.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _action_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action/auth */ \"./action/auth.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/dist/reactstrap.modern.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Header() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isOpen = ref[0], setIsOpen = ref[1];\n    var toggle = function() {\n        setIsOpen(!isOpen);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Navbar, {\n            light: true,\n            expand: \"md\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.NavbarBrand, {\n                        href: \"/\",\n                        children: _config__WEBPACK_IMPORTED_MODULE_3__.APP_NAME\n                    }, void 0, false, {\n                        fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.NavbarToggler, {\n                        onClick: toggle\n                    }, void 0, false, {\n                        fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Collapse, {\n                        isOpen: isOpen,\n                        navbar: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Nav, {\n                            className: \"ml-auto\",\n                            navbar: true,\n                            children: [\n                                !(0,_action_auth__WEBPACK_IMPORTED_MODULE_4__.isAuth)() && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.NavItem, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.NavLink, {\n                                                href: \"/signin\",\n                                                children: \"Signin\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                                lineNumber: 38,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                            lineNumber: 37,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.NavItem, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                href: \"/signup\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.NavLink, {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        children: \"Signup\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                                        lineNumber: 43,\n                                                        columnNumber: 25\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                                    lineNumber: 42,\n                                                    columnNumber: 23\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                                lineNumber: 41,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                            lineNumber: 40,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 17\n                                }, this),\n                                (0,_action_auth__WEBPACK_IMPORTED_MODULE_4__.isAuth)() && (0,_action_auth__WEBPACK_IMPORTED_MODULE_4__.isAuth)().role === 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.NavItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.NavLink, {\n                                        href: \"/admin\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            children: \"Admin\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 17\n                                }, this),\n                                (0,_action_auth__WEBPACK_IMPORTED_MODULE_4__.isAuth)() && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.NavItem, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.NavLink, {\n                                                onClick: function() {\n                                                    return (0,_action_auth__WEBPACK_IMPORTED_MODULE_4__.signout)(function() {\n                                                        return next_router__WEBPACK_IMPORTED_MODULE_5___default().replace(\"/signin\");\n                                                    });\n                                                },\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    children: \"Signout\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 23\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.NavItem, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                href: \"/user/profile\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.NavLink, {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        children: \"profile\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                                        lineNumber: 70,\n                                                        columnNumber: 25\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 23\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                                lineNumber: 68,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this));\n}\n_s(Header, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ1g7QUFDUTtBQUNZO0FBQ2hCO0FBYWI7O1NBRVZrQixNQUFNLEdBQUcsQ0FBQzs7SUFDakIsR0FBSyxDQUF1QmpCLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQW5Da0IsTUFBTSxHQUFlbEIsR0FBZSxLQUE1Qm1CLFNBQVMsR0FBSW5CLEdBQWU7SUFFM0MsR0FBSyxDQUFDb0IsTUFBTSxHQUFHLFFBQVEsR0FBRixDQUFDO1FBQ3BCRCxTQUFTLEVBQUVELE1BQU07SUFDbkIsQ0FBQztJQUVELE1BQU0sNkVBQ0hHLENBQUc7OEZBQ0RkLDhDQUFNO1lBQUNlLEtBQUs7WUFBQ0MsTUFBTSxFQUFDLENBQUk7a0dBQ3RCRixDQUFHO2dCQUFDRyxTQUFTLEVBQUMsQ0FBVzs7Z0dBQ3ZCZixtREFBVzt3QkFBQ2dCLElBQUksRUFBQyxDQUFHO2tDQUFFdkIsNkNBQVE7Ozs7OztnR0FDOUJNLHFEQUFhO3dCQUFDa0IsT0FBTyxFQUFFTixNQUFNOzs7Ozs7Z0dBQzdCZCxnREFBUTt3QkFBQ1ksTUFBTSxFQUFFQSxNQUFNO3dCQUFFUyxNQUFNOzhHQUM3QmpCLDJDQUFHOzRCQUFDYyxTQUFTLEVBQUMsQ0FBUzs0QkFBQ0csTUFBTTs7aUNBQzNCdkIsb0RBQU0sa0ZBQ0xMLHVEQUFjOztvSEFDWlksK0NBQU87a0lBQ0xDLCtDQUFPO2dEQUFDYSxJQUFJLEVBQUMsQ0FBUzswREFBQyxDQUFNOzs7Ozs7Ozs7OztvSEFFL0JkLCtDQUFPO2tJQUNMVixrREFBSTtnREFBQ3dCLElBQUksRUFBQyxDQUFTO3NJQUNqQmIsK0NBQU87MElBQ0xpQixDQUFDO2tFQUFDLENBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FPbEJ6QixvREFBTSxNQUFNQSxvREFBTSxHQUFHMEIsSUFBSSxLQUFLLENBQUMsZ0ZBQzdCbkIsK0NBQU87MEhBQ0xDLCtDQUFPO3dDQUFDYSxJQUFJLEVBQUMsQ0FBUTs4SEFDbkJJLENBQUM7c0RBQUMsQ0FBSzs7Ozs7Ozs7Ozs7Ozs7OztnQ0FLYnpCLG9EQUFNLGtGQUNKaUIsQ0FBRzs7b0hBQ0RWLCtDQUFPO2tJQUNMQywrQ0FBTztnREFDTmMsT0FBTyxFQUFFLFFBQVE7b0RBQUZ2QixNQUFNLENBQU5BLHFEQUFPLENBQUMsUUFBUTt3REFBRkUsTUFBTSxDQUFOQSwwREFBYyxDQUFDLENBQVM7OztzSUFFcER3QixDQUFDOzhEQUFDLENBQU87Ozs7Ozs7Ozs7Ozs7Ozs7b0hBR2JsQiwrQ0FBTztrSUFDTFYsa0RBQUk7Z0RBQUN3QixJQUFJLEVBQUMsQ0FBZTtzSUFDdkJiLCtDQUFPOzBJQUNMaUIsQ0FBQztrRUFBQyxDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZbEMsQ0FBQztHQTlEUVosTUFBTTtLQUFOQSxNQUFNO0FBZ0VmLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NGRiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvTGlua1wiO1xyXG5pbXBvcnQgeyBBUFBfTkFNRSB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IHsgc2lnbm91dCwgaXNBdXRoIH0gZnJvbSBcIi4uL2FjdGlvbi9hdXRoXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7XHJcbiAgQ29sbGFwc2UsXHJcbiAgTmF2YmFyLFxyXG4gIE5hdmJhclRvZ2dsZXIsXHJcbiAgTmF2YmFyQnJhbmQsXHJcbiAgTmF2LFxyXG4gIE5hdkl0ZW0sXHJcbiAgTmF2TGluayxcclxuICBVbmNvbnRyb2xsZWREcm9wZG93bixcclxuICBEcm9wZG93blRvZ2dsZSxcclxuICBEcm9wZG93bk1lbnUsXHJcbiAgRHJvcGRvd25JdGVtLFxyXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgc2V0SXNPcGVuKCFpc09wZW4pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TmF2YmFyIGxpZ2h0IGV4cGFuZD1cIm1kXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxOYXZiYXJCcmFuZCBocmVmPVwiL1wiPntBUFBfTkFNRX08L05hdmJhckJyYW5kPlxyXG4gICAgICAgICAgPE5hdmJhclRvZ2dsZXIgb25DbGljaz17dG9nZ2xlfSAvPlxyXG4gICAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17aXNPcGVufSBuYXZiYXI+XHJcbiAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWwtYXV0b1wiIG5hdmJhcj5cclxuICAgICAgICAgICAgICB7IWlzQXV0aCgpICYmIChcclxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9zaWduaW5cIj5TaWduaW48L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5TaWdudXA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgIHtpc0F1dGgoKSAmJiBpc0F1dGgoKS5yb2xlID09PSAxICYmIChcclxuICAgICAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL2FkbWluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+QWRtaW48L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICB7aXNBdXRoKCkgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNpZ25vdXQoKCkgPT4gUm91dGVyLnJlcGxhY2UoXCIvc2lnbmluXCIpKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YT5TaWdub3V0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvcHJvZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPnByb2ZpbGU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTmF2YmFyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJBUFBfTkFNRSIsInNpZ25vdXQiLCJpc0F1dGgiLCJSb3V0ZXIiLCJDb2xsYXBzZSIsIk5hdmJhciIsIk5hdmJhclRvZ2dsZXIiLCJOYXZiYXJCcmFuZCIsIk5hdiIsIk5hdkl0ZW0iLCJOYXZMaW5rIiwiVW5jb250cm9sbGVkRHJvcGRvd24iLCJEcm9wZG93blRvZ2dsZSIsIkRyb3Bkb3duTWVudSIsIkRyb3Bkb3duSXRlbSIsIkhlYWRlciIsImlzT3BlbiIsInNldElzT3BlbiIsInRvZ2dsZSIsImRpdiIsImxpZ2h0IiwiZXhwYW5kIiwiY2xhc3NOYW1lIiwiaHJlZiIsIm9uQ2xpY2siLCJuYXZiYXIiLCJGcmFnbWVudCIsImEiLCJyb2xlIiwicmVwbGFjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

});