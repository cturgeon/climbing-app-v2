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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AdminPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\nvar _s = $RefreshSig$();\nfunction AdminPage() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), gymData = ref[0], setGymData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch(\"/api/gymData\").then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            var temp = [\n                JSON.stringify(data.gymData)\n            ];\n            setGymData([\n                gymData\n            ].concat(_toConsumableArray(temp)));\n            console.log(temp);\n            console.log(gymData);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Admin Page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\index.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: gymData.map(function(gym) {\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: gym.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\index.js\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\index.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\index.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n};\n_s(AdminPage, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = AdminPage;\nvar _c;\n$RefreshReg$(_c, \"AdminPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0Qzs7QUFFN0IsU0FBU0UsU0FBUyxHQUFHOzs7SUFDbEMsSUFBOEJELEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFINUMsT0FHZ0IsR0FBZ0JBLEdBQVksR0FBNUIsRUFIaEIsVUFHNEIsR0FBSUEsR0FBWSxHQUFoQjtJQUUxQkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RLLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FDbEJDLElBQUksQ0FBQyxTQUFDQyxHQUFHO21CQUFLQSxHQUFHLENBQUNDLElBQUksRUFBRTtTQUFBLENBQUMsQ0FDekJGLElBQUksQ0FBQyxTQUFDRyxJQUFJLEVBQUs7WUFDZCxJQUFNQyxJQUFJLEdBQUc7Z0JBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDSCxJQUFJLENBQUNOLE9BQU8sQ0FBQzthQUFDO1lBQzNDQyxVQUFVLENBQUM7Z0JBQUNELE9BQU87YUFBVSxDQUFsQixNQUFrQixDQUFSLG1CQUFHTyxJQUFJLENBQUpBLENBQUssQ0FBQyxDQUFDO1lBQy9CRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osSUFBSSxDQUFDLENBQUM7WUFDbEJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWCxPQUFPLENBQUMsQ0FBQztTQUN0QixDQUFDLENBQUM7S0FDTixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0UsOERBQUNZLEtBQUc7OzBCQUNGLDhEQUFDQyxJQUFFOzBCQUFDLFlBQVU7Ozs7O29CQUFLOzBCQUNuQiw4REFBQ0MsSUFBRTswQkFDQWQsT0FBTyxDQUFDZSxHQUFHLENBQUMsU0FBQ0MsR0FBRyxFQUFLO2tDQUNwQiw4REFBQ0MsSUFBRTtrQ0FBRUQsR0FBRyxDQUFDRSxJQUFJOzs7Ozs2QkFBTSxDQUFDO2lCQUNyQixDQUFDOzs7OztvQkFDQzs7Ozs7O1lBQ0QsQ0FDTjtDQUNIO0dBeEJ1Qm5CLFNBQVM7QUFBVEEsS0FBQUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hZG1pbi9pbmRleC5qcz84YzI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkbWluUGFnZSgpIHtcclxuICBjb25zdCBbZ3ltRGF0YSwgc2V0R3ltRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaChcIi9hcGkvZ3ltRGF0YVwiKVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRlbXAgPSBbSlNPTi5zdHJpbmdpZnkoZGF0YS5neW1EYXRhKV07XHJcbiAgICAgICAgc2V0R3ltRGF0YShbZ3ltRGF0YSwgLi4udGVtcF0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRlbXApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGd5bURhdGEpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+QWRtaW4gUGFnZTwvaDE+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7Z3ltRGF0YS5tYXAoKGd5bSkgPT4ge1xyXG4gICAgICAgICAgPGxpPntneW0ubmFtZX08L2xpPjtcclxuICAgICAgICB9KX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQWRtaW5QYWdlIiwiZ3ltRGF0YSIsInNldEd5bURhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsInRlbXAiLCJKU09OIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsImRpdiIsImgxIiwidWwiLCJtYXAiLCJneW0iLCJsaSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/admin/index.js\n");

/***/ })

});