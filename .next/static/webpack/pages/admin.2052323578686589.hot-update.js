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

/***/ "./pages/admin/index.js":
/*!******************************!*\
  !*** ./pages/admin/index.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AdminPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_gym_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/gym-list */ \"./components/gym-list.js\");\n\n\n\nvar _s = $RefreshSig$();\nfunction AdminPage() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), gymData = ref[0], setGymData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch(\"/api/gymData\").then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            return setGymData(JSON.parse(JSON.stringify(data)));\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Admin Page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\index.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: gymData.map(function(gym) {\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: gym.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\index.js\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\index.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\index.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n};\n_s(AdminPage, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = AdminPage;\nvar _c;\n$RefreshReg$(_c, \"AdminPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUE0QztBQUNJOztBQUVqQyxTQUFTRyxTQUFTLEdBQUc7OztJQUNsQyxJQUE4QkYsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUo1QyxPQUlnQixHQUFnQkEsR0FBWSxHQUE1QixFQUpoQixVQUk0QixHQUFJQSxHQUFZLEdBQWhCO0lBRTFCRCxnREFBUyxDQUFDLFdBQU07UUFDZE0sS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUNsQkMsSUFBSSxDQUFDLFNBQUNDLEdBQUc7bUJBQUtBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFO1NBQUEsQ0FBQyxDQUN6QkYsSUFBSSxDQUFDLFNBQUNHLElBQUk7bUJBQUtMLFVBQVUsQ0FBQ00sSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsU0FBUyxDQUFDSCxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQUEsQ0FBQyxDQUFDO0tBQ2pFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRSw4REFBQ0ksS0FBRzs7MEJBQ0YsOERBQUNDLElBQUU7MEJBQUMsWUFBVTs7Ozs7b0JBQUs7MEJBQ25CLDhEQUFDQyxJQUFFOzBCQUNBWixPQUFPLENBQUNhLEdBQUcsQ0FBQyxTQUFDQyxHQUFHLEVBQUs7a0NBQ3BCLDhEQUFDQyxJQUFFO2tDQUFFRCxHQUFHLENBQUNFLElBQUk7Ozs7OzZCQUFNLENBQUM7aUJBQ3JCLENBQUM7Ozs7O29CQUNDOzs7Ozs7WUFDRCxDQUNOO0NBQ0g7R0FuQnVCakIsU0FBUztBQUFUQSxLQUFBQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FkbWluL2luZGV4LmpzPzhjMjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgR3ltTGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9neW0tbGlzdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRtaW5QYWdlKCkge1xyXG4gIGNvbnN0IFtneW1EYXRhLCBzZXRHeW1EYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoKFwiL2FwaS9neW1EYXRhXCIpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRHeW1EYXRhKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPkFkbWluIFBhZ2U8L2gxPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge2d5bURhdGEubWFwKChneW0pID0+IHtcclxuICAgICAgICAgIDxsaT57Z3ltLm5hbWV9PC9saT47XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkd5bUxpc3QiLCJBZG1pblBhZ2UiLCJneW1EYXRhIiwic2V0R3ltRGF0YSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZGl2IiwiaDEiLCJ1bCIsIm1hcCIsImd5bSIsImxpIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/admin/index.js\n");

/***/ })

});