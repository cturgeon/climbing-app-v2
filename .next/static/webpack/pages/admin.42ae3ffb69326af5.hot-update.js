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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ AdminPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_admin_admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/admin/admin */ \"./components/admin/admin.js\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n\n\n\n\nvar __N_SSG = true;\nfunction AdminPage(props) {\n    var _this = this;\n    var gymData = props.gymData;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Admin Page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\index.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                component: \"a\",\n                href: \"/admin/forms\",\n                children: \"Add a Gym\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\index.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: gymData.map(function(gym) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_admin_admin__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            items: gym\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\index.js\",\n                            lineNumber: 18,\n                            columnNumber: 13\n                        }, _this)\n                    }, gym._id, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\index.js\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\index.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\index.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n};\n_c = AdminPage;\nvar _c;\n$RefreshReg$(_c, \"AdminPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQWlDO0FBQzZCO0FBRXZCOztBQUV4QixTQUFTRyxTQUFTLENBQUNDLEtBQUssRUFBRTs7SUFDdkMsSUFBTSxPQUFTLEdBQUtBLEtBQUssQ0FBakJDLE9BQU87SUFFZixxQkFDRSw4REFBQ0MsS0FBRzs7MEJBQ0YsOERBQUNDLElBQUU7MEJBQUMsWUFBVTs7Ozs7b0JBQUs7MEJBQ25CLDhEQUFDTCxpREFBTTtnQkFBQ00sU0FBUyxFQUFDLEdBQUc7Z0JBQUNDLElBQUksRUFBQyxjQUFjOzBCQUFDLFdBRTFDOzs7OztvQkFBUzswQkFDVCw4REFBQ0MsSUFBRTswQkFDQUwsT0FBTyxDQUFDTSxHQUFHLENBQUMsU0FBQ0MsR0FBRzt5Q0FDZiw4REFBQ1osMkNBQVE7a0NBQ1AsNEVBQUNDLCtEQUFrQjs0QkFBQ1ksS0FBSyxFQUFFRCxHQUFHOzs7OztpQ0FBSTt1QkFEckJBLEdBQUcsQ0FBQ0UsR0FBRzs7Ozs2QkFFWDtpQkFDWixDQUFDOzs7OztvQkFDQzs7Ozs7O1lBQ0QsQ0FDTjtDQUNIO0FBbEJ1QlgsS0FBQUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hZG1pbi9pbmRleC5qcz84YzI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBZG1pblBhZ2VDb21wb25lbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWRtaW4vYWRtaW5cIjtcclxuaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UsIGdldEFsbEd5bURhdGEgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9kYi11dGlsXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZG1pblBhZ2UocHJvcHMpIHtcclxuICBjb25zdCB7IGd5bURhdGEgfSA9IHByb3BzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPkFkbWluIFBhZ2U8L2gxPlxyXG4gICAgICA8QnV0dG9uIGNvbXBvbmVudD1cImFcIiBocmVmPVwiL2FkbWluL2Zvcm1zXCI+XHJcbiAgICAgICAgQWRkIGEgR3ltXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge2d5bURhdGEubWFwKChneW0pID0+IChcclxuICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2d5bS5faWR9PlxyXG4gICAgICAgICAgICA8QWRtaW5QYWdlQ29tcG9uZW50IGl0ZW1zPXtneW19IC8+XHJcbiAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIGxldCBjbGllbnQ7XHJcbiAgdHJ5IHtcclxuICAgIGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XHJcbiAgICBjb25zdCBneW1EYXRhID0gYXdhaXQgZ2V0QWxsR3ltRGF0YShjbGllbnQsIFwiZ3ltLWRhdGFcIiwgeyBfaWQ6IC0xIH0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICBneW1EYXRhOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGd5bURhdGEpKSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiRnJhZ21lbnQiLCJBZG1pblBhZ2VDb21wb25lbnQiLCJCdXR0b24iLCJBZG1pblBhZ2UiLCJwcm9wcyIsImd5bURhdGEiLCJkaXYiLCJoMSIsImNvbXBvbmVudCIsImhyZWYiLCJ1bCIsIm1hcCIsImd5bSIsIml0ZW1zIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/admin/index.js\n");

/***/ })

});