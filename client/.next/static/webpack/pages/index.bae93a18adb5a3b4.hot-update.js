"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ \"./node_modules/next/Link.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _action_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action/auth */ \"./action/auth.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/dist/reactstrap.modern.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Header() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isOpen = ref[0], setIsOpen = ref[1];\n    var toggle = function() {\n        setIsOpen(!isOpen);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Navbar, {\n            light: true,\n            expand: \"md\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavbarBrand, {\n                        href: \"/\",\n                        children: _config__WEBPACK_IMPORTED_MODULE_3__.APP_NAME\n                    }, void 0, false, {\n                        fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavbarToggler, {\n                        onClick: toggle\n                    }, void 0, false, {\n                        fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Collapse, {\n                        isOpen: isOpen,\n                        navbar: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Nav, {\n                            className: \"ml-auto\",\n                            navbar: true,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavLink, {\n                                        href: \"/signin\",\n                                        children: \"Signin\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/signup\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavLink, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                children: \"Signup\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                                lineNumber: 40,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                            lineNumber: 39,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, this),\n                                JSON.string,\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/signup\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.NavLink, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                children: \"Signup\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                                lineNumber: 48,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this));\n}\n_s(Header, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF1QztBQUNYO0FBQ1E7QUFDWTtBQWE3Qjs7U0FFVmlCLE1BQU0sR0FBRyxDQUFDOztJQUNqQixHQUFLLENBQXVCaEIsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBbkNpQixNQUFNLEdBQWVqQixHQUFlLEtBQTVCa0IsU0FBUyxHQUFJbEIsR0FBZTtJQUUzQyxHQUFLLENBQUNtQixNQUFNLEdBQUcsUUFBUSxHQUFGLENBQUM7UUFDcEJELFNBQVMsRUFBRUQsTUFBTTtJQUNuQixDQUFDO0lBRUQsTUFBTSw2RUFDSEcsQ0FBRzs4RkFDRGQsOENBQU07WUFBQ2UsS0FBSztZQUFDQyxNQUFNLEVBQUMsQ0FBSTtrR0FDdEJGLENBQUc7Z0JBQUNHLFNBQVMsRUFBQyxDQUFXOztnR0FDdkJmLG1EQUFXO3dCQUFDZ0IsSUFBSSxFQUFDLENBQUc7a0NBQUV0Qiw2Q0FBUTs7Ozs7O2dHQUM5QksscURBQWE7d0JBQUNrQixPQUFPLEVBQUVOLE1BQU07Ozs7OztnR0FDN0JkLGdEQUFRO3dCQUFDWSxNQUFNLEVBQUVBLE1BQU07d0JBQUVTLE1BQU07OEdBQzdCakIsMkNBQUc7NEJBQUNjLFNBQVMsRUFBQyxDQUFTOzRCQUFDRyxNQUFNOzs0R0FDNUJoQiwrQ0FBTzswSEFDTEMsK0NBQU87d0NBQUNhLElBQUksRUFBQyxDQUFTO2tEQUFDLENBQU07Ozs7Ozs7Ozs7OzRHQUUvQmQsK0NBQU87MEhBQ0xULGtEQUFJO3dDQUFDdUIsSUFBSSxFQUFDLENBQVM7OEhBQ2pCYiwrQ0FBTztrSUFDTGdCLENBQUM7MERBQUMsQ0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQUlkQyxJQUFJLENBQUNDLE1BQU07NEdBQ1huQiwrQ0FBTzswSEFDTFQsa0RBQUk7d0NBQUN1QixJQUFJLEVBQUMsQ0FBUzs4SEFDakJiLCtDQUFPO2tJQUNMZ0IsQ0FBQzswREFBQyxDQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVN0IsQ0FBQztHQXZDUVgsTUFBTTtLQUFOQSxNQUFNO0FBeUNmLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NGRiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvTGlua1wiO1xyXG5pbXBvcnQgeyBBUFBfTkFNRSB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IHsgc2lnbm91dCwgaXNBdXRoIH0gZnJvbSBcIi4uL2FjdGlvbi9hdXRoXCI7XHJcbmltcG9ydCB7XHJcbiAgQ29sbGFwc2UsXHJcbiAgTmF2YmFyLFxyXG4gIE5hdmJhclRvZ2dsZXIsXHJcbiAgTmF2YmFyQnJhbmQsXHJcbiAgTmF2LFxyXG4gIE5hdkl0ZW0sXHJcbiAgTmF2TGluayxcclxuICBVbmNvbnRyb2xsZWREcm9wZG93bixcclxuICBEcm9wZG93blRvZ2dsZSxcclxuICBEcm9wZG93bk1lbnUsXHJcbiAgRHJvcGRvd25JdGVtLFxyXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgc2V0SXNPcGVuKCFpc09wZW4pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TmF2YmFyIGxpZ2h0IGV4cGFuZD1cIm1kXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxOYXZiYXJCcmFuZCBocmVmPVwiL1wiPntBUFBfTkFNRX08L05hdmJhckJyYW5kPlxyXG4gICAgICAgICAgPE5hdmJhclRvZ2dsZXIgb25DbGljaz17dG9nZ2xlfSAvPlxyXG4gICAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17aXNPcGVufSBuYXZiYXI+XHJcbiAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWwtYXV0b1wiIG5hdmJhcj5cclxuICAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvc2lnbmluXCI+U2lnbmluPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxOYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlNpZ251cDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICB7SlNPTi5zdHJpbmd9XHJcbiAgICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8TmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8YT5TaWdudXA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9OYXZiYXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsIkFQUF9OQU1FIiwic2lnbm91dCIsImlzQXV0aCIsIkNvbGxhcHNlIiwiTmF2YmFyIiwiTmF2YmFyVG9nZ2xlciIsIk5hdmJhckJyYW5kIiwiTmF2IiwiTmF2SXRlbSIsIk5hdkxpbmsiLCJVbmNvbnRyb2xsZWREcm9wZG93biIsIkRyb3Bkb3duVG9nZ2xlIiwiRHJvcGRvd25NZW51IiwiRHJvcGRvd25JdGVtIiwiSGVhZGVyIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlIiwiZGl2IiwibGlnaHQiLCJleHBhbmQiLCJjbGFzc05hbWUiLCJocmVmIiwib25DbGljayIsIm5hdmJhciIsImEiLCJKU09OIiwic3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

});