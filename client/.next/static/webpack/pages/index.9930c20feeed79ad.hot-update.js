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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ \"./node_modules/next/Link.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _action_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action/auth */ \"./action/auth.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/dist/reactstrap.modern.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Header() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isOpen = ref[0], setIsOpen = ref[1];\n    var toggle = function() {\n        setIsOpen(!isOpen);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Navbar, {\n            light: true,\n            expand: \"md\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.NavbarBrand, {\n                        href: \"/\",\n                        children: _config__WEBPACK_IMPORTED_MODULE_3__.APP_NAME\n                    }, void 0, false, {\n                        fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.NavbarToggler, {\n                        onClick: toggle\n                    }, void 0, false, {\n                        fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Collapse, {\n                        isOpen: isOpen,\n                        navbar: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Nav, {\n                            className: \"ml-auto\",\n                            navbar: true,\n                            children: [\n                                !(0,_action_auth__WEBPACK_IMPORTED_MODULE_4__.isAuth)() && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.NavItem, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.NavLink, {\n                                                href: \"/signin\",\n                                                children: \"Signin\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                                lineNumber: 38,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                            lineNumber: 37,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.NavItem, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                href: \"/signup\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.NavLink, {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        children: \"Signup\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                                        lineNumber: 43,\n                                                        columnNumber: 25\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                                    lineNumber: 42,\n                                                    columnNumber: 23\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                                lineNumber: 41,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                            lineNumber: 40,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 17\n                                }, this),\n                                (0,_action_auth__WEBPACK_IMPORTED_MODULE_4__.isAuth)() && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.NavItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.NavLink, {\n                                        onClick: function() {\n                                            return (0,_action_auth__WEBPACK_IMPORTED_MODULE_4__.signout)(function() {\n                                                return next_router__WEBPACK_IMPORTED_MODULE_5___default().replace(\"/signin\");\n                                            });\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            children: \"Signout\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 17\n                                }, this),\n                                (0,_action_auth__WEBPACK_IMPORTED_MODULE_4__.isAuth)() && (0,_action_auth__WEBPACK_IMPORTED_MODULE_4__.isAuth)().role === 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.NavItem, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.NavLink, {\n                                        href: \"/admin\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            children: \"Admin\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\udemy\\\\seoblog\\\\client\\\\components\\\\Header.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this));\n}\n_s(Header, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ1g7QUFDUTtBQUNZO0FBQ2hCO0FBYWI7O1NBRVZrQixNQUFNLEdBQUcsQ0FBQzs7SUFDakIsR0FBSyxDQUF1QmpCLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQW5Da0IsTUFBTSxHQUFlbEIsR0FBZSxLQUE1Qm1CLFNBQVMsR0FBSW5CLEdBQWU7SUFFM0MsR0FBSyxDQUFDb0IsTUFBTSxHQUFHLFFBQVEsR0FBRixDQUFDO1FBQ3BCRCxTQUFTLEVBQUVELE1BQU07SUFDbkIsQ0FBQztJQUVELE1BQU0sNkVBQ0hHLENBQUc7OEZBQ0RkLDhDQUFNO1lBQUNlLEtBQUs7WUFBQ0MsTUFBTSxFQUFDLENBQUk7a0dBQ3RCRixDQUFHO2dCQUFDRyxTQUFTLEVBQUMsQ0FBVzs7Z0dBQ3ZCZixtREFBVzt3QkFBQ2dCLElBQUksRUFBQyxDQUFHO2tDQUFFdkIsNkNBQVE7Ozs7OztnR0FDOUJNLHFEQUFhO3dCQUFDa0IsT0FBTyxFQUFFTixNQUFNOzs7Ozs7Z0dBQzdCZCxnREFBUTt3QkFBQ1ksTUFBTSxFQUFFQSxNQUFNO3dCQUFFUyxNQUFNOzhHQUM3QmpCLDJDQUFHOzRCQUFDYyxTQUFTLEVBQUMsQ0FBUzs0QkFBQ0csTUFBTTs7aUNBQzNCdkIsb0RBQU0sa0ZBQ0xMLHVEQUFjOztvSEFDWlksK0NBQU87a0lBQ0xDLCtDQUFPO2dEQUFDYSxJQUFJLEVBQUMsQ0FBUzswREFBQyxDQUFNOzs7Ozs7Ozs7OztvSEFFL0JkLCtDQUFPO2tJQUNMVixrREFBSTtnREFBQ3dCLElBQUksRUFBQyxDQUFTO3NJQUNqQmIsK0NBQU87MElBQ0xpQixDQUFDO2tFQUFDLENBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FNbEJ6QixvREFBTSxrRkFDSk8sK0NBQU87MEhBQ0xDLCtDQUFPO3dDQUNOYyxPQUFPLEVBQUUsUUFBUTs0Q0FBRnZCLE1BQU0sQ0FBTkEscURBQU8sQ0FBQyxRQUFRO2dEQUFGRSxNQUFNLENBQU5BLDBEQUFjLENBQUMsQ0FBUzs7OzhIQUVwRHdCLENBQUM7c0RBQUMsQ0FBTzs7Ozs7Ozs7Ozs7Ozs7OztnQ0FJZnpCLG9EQUFNLE1BQU1BLG9EQUFNLEdBQUcyQixJQUFJLEtBQUssQ0FBQyxnRkFDN0JwQiwrQ0FBTzswSEFDTEMsK0NBQU87d0NBQUNhLElBQUksRUFBQyxDQUFROzhIQUNuQkksQ0FBQztzREFBQyxDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVTVCLENBQUM7R0FuRFFaLE1BQU07S0FBTkEsTUFBTTtBQXFEZiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzRkYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L0xpbmtcIjtcclxuaW1wb3J0IHsgQVBQX05BTUUgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IHNpZ25vdXQsIGlzQXV0aCB9IGZyb20gXCIuLi9hY3Rpb24vYXV0aFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge1xyXG4gIENvbGxhcHNlLFxyXG4gIE5hdmJhcixcclxuICBOYXZiYXJUb2dnbGVyLFxyXG4gIE5hdmJhckJyYW5kLFxyXG4gIE5hdixcclxuICBOYXZJdGVtLFxyXG4gIE5hdkxpbmssXHJcbiAgVW5jb250cm9sbGVkRHJvcGRvd24sXHJcbiAgRHJvcGRvd25Ub2dnbGUsXHJcbiAgRHJvcGRvd25NZW51LFxyXG4gIERyb3Bkb3duSXRlbSxcclxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHtcclxuICAgIHNldElzT3BlbighaXNPcGVuKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE5hdmJhciBsaWdodCBleHBhbmQ9XCJtZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8TmF2YmFyQnJhbmQgaHJlZj1cIi9cIj57QVBQX05BTUV9PC9OYXZiYXJCcmFuZD5cclxuICAgICAgICAgIDxOYXZiYXJUb2dnbGVyIG9uQ2xpY2s9e3RvZ2dsZX0gLz5cclxuICAgICAgICAgIDxDb2xsYXBzZSBpc09wZW49e2lzT3Blbn0gbmF2YmFyPlxyXG4gICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1sLWF1dG9cIiBuYXZiYXI+XHJcbiAgICAgICAgICAgICAgeyFpc0F1dGgoKSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvc2lnbmluXCI+U2lnbmluPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+U2lnbnVwPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHtpc0F1dGgoKSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaWdub3V0KCgpID0+IFJvdXRlci5yZXBsYWNlKFwiL3NpZ25pblwiKSl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8YT5TaWdub3V0PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7aXNBdXRoKCkgJiYgaXNBdXRoKCkucm9sZSA9PT0gMSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9hZG1pblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPkFkbWluPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L05hdmJhcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiQVBQX05BTUUiLCJzaWdub3V0IiwiaXNBdXRoIiwiUm91dGVyIiwiQ29sbGFwc2UiLCJOYXZiYXIiLCJOYXZiYXJUb2dnbGVyIiwiTmF2YmFyQnJhbmQiLCJOYXYiLCJOYXZJdGVtIiwiTmF2TGluayIsIlVuY29udHJvbGxlZERyb3Bkb3duIiwiRHJvcGRvd25Ub2dnbGUiLCJEcm9wZG93bk1lbnUiLCJEcm9wZG93bkl0ZW0iLCJIZWFkZXIiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ0b2dnbGUiLCJkaXYiLCJsaWdodCIsImV4cGFuZCIsImNsYXNzTmFtZSIsImhyZWYiLCJvbkNsaWNrIiwibmF2YmFyIiwiRnJhZ21lbnQiLCJhIiwicmVwbGFjZSIsInJvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

});