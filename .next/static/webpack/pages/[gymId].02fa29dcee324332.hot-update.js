"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[gymId]",{

/***/ "./pages/[gymId]/index.js":
/*!********************************!*\
  !*** ./pages/[gymId]/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ SpecificGym; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_gym_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ui/gym-header */ \"./components/ui/gym-header.js\");\n/* harmony import */ var _components_wall_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/wall-list */ \"./components/wall-list.js\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n\n\n\n\n\nvar __N_SSG = true;\nfunction SpecificGym(props) {\n    var gym = props.gym;\n    console.log(gym);\n    if (!gym) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading....\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\[gymId]\\\\index.js\",\n            lineNumber: 15,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Group, {\n        direction: \"column\",\n        position: \"center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_gym_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    id: gym._id,\n                    name: gym.name,\n                    description: gym.description,\n                    image: gym.image,\n                    address: gym.address\n                }, gym._id, false, {\n                    fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\[gymId]\\\\index.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_wall_list__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    items: gym.walls\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\[gymId]\\\\index.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\[gymId]\\\\index.js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\[gymId]\\\\index.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n};\n_c = SpecificGym;\nvar _c;\n$RefreshReg$(_c, \"SpecificGym\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bZ3ltSWRdL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQWlDO0FBSXNCO0FBQ0w7QUFFWjs7QUFHdkIsU0FBU0ksV0FBVyxDQUFDQyxLQUFLLEVBQUU7SUFDekMsSUFBTUMsR0FBRyxHQUFHRCxLQUFLLENBQUNDLEdBQUc7SUFDckJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUMsQ0FBQztJQUNqQixJQUFJLENBQUNBLEdBQUcsRUFBRTtRQUNSLHFCQUFPLDhEQUFDRyxHQUFDO3NCQUFDLGFBQVc7Ozs7O2dCQUFJLENBQUM7S0FDM0I7SUFFRCxxQkFDRSw4REFBQ04sZ0RBQUs7UUFBQ08sU0FBUyxFQUFDLFFBQVE7UUFBQ0MsUUFBUSxFQUFDLFFBQVE7a0JBQ3pDLDRFQUFDWCwyQ0FBUTs7OEJBQ1AsOERBQUNDLGlFQUFTO29CQUVSVyxFQUFFLEVBQUVOLEdBQUcsQ0FBQ08sR0FBRztvQkFDWEMsSUFBSSxFQUFFUixHQUFHLENBQUNRLElBQUk7b0JBQ2RDLFdBQVcsRUFBRVQsR0FBRyxDQUFDUyxXQUFXO29CQUM1QkMsS0FBSyxFQUFFVixHQUFHLENBQUNVLEtBQUs7b0JBQ2hCQyxPQUFPLEVBQUVYLEdBQUcsQ0FBQ1csT0FBTzttQkFMZlgsR0FBRyxDQUFDTyxHQUFHOzs7O3dCQU1aOzhCQUNGLDhEQUFDWCw2REFBUTtvQkFBQ2dCLEtBQUssRUFBRVosR0FBRyxDQUFDYSxLQUFLOzs7Ozt3QkFBSTs7Ozs7O2dCQUNyQjs7Ozs7WUFDTCxDQUNSO0NBQ0g7QUF0QnVCZixLQUFBQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1tneW1JZF0vaW5kZXguanM/OWFjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBnZXRHeW1JZHMsIGdldEd5bUJ5SWQgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9kYi11dGlsXCI7XG5cbmltcG9ydCBHeW1IZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdWkvZ3ltLWhlYWRlclwiO1xuaW1wb3J0IFdhbGxMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3dhbGwtbGlzdFwiO1xuXG5pbXBvcnQgeyBHcm91cCB9IGZyb20gXCJAbWFudGluZS9jb3JlXCI7XG5pbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gXCIuLi8uLi9oZWxwZXJzL2RiLXV0aWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3BlY2lmaWNHeW0ocHJvcHMpIHtcbiAgY29uc3QgZ3ltID0gcHJvcHMuZ3ltO1xuICBjb25zb2xlLmxvZyhneW0pO1xuICBpZiAoIWd5bSkge1xuICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uLjwvcD47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxHcm91cCBkaXJlY3Rpb249XCJjb2x1bW5cIiBwb3NpdGlvbj1cImNlbnRlclwiPlxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8R3ltSGVhZGVyXG4gICAgICAgICAga2V5PXtneW0uX2lkfVxuICAgICAgICAgIGlkPXtneW0uX2lkfVxuICAgICAgICAgIG5hbWU9e2d5bS5uYW1lfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtneW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgaW1hZ2U9e2d5bS5pbWFnZX1cbiAgICAgICAgICBhZGRyZXNzPXtneW0uYWRkcmVzc31cbiAgICAgICAgLz5cbiAgICAgICAgPFdhbGxMaXN0IGl0ZW1zPXtneW0ud2FsbHN9IC8+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgIDwvR3JvdXA+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IGd5bUlkID0gY29udGV4dC5wYXJhbXMuZ3ltSWQ7XG4gIGxldCBjbGllbnQ7XG4gIHRyeSB7XG4gICAgY2xpZW50ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgICBjb25zdCBneW1EYXRhID0gYXdhaXQgZ2V0R3ltQnlJZChjbGllbnQsIFwiZ3ltLWRhdGFcIiwgZ3ltSWQpO1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBneW06IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZ3ltRGF0YSkpLFxuICAgICAgfSxcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNsaWVudC5jbG9zZSgpO1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGxldCBjbGllbnQ7XG4gIHRyeSB7XG4gICAgY2xpZW50ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgICBjb25zdCBneW1EYXRhID0gYXdhaXQgZ2V0R3ltSWRzKGNsaWVudCwgXCJneW0tZGF0YVwiKTtcbiAgICBjb25zdCBneW1JZHMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGd5bURhdGEpKTtcbiAgICBjb25zdCBwYXRocyA9IGd5bUlkcy5tYXAoKGd5bUlkKSA9PiAoeyBwYXJhbXM6IHsgZ3ltSWQ6IGd5bUlkIH0gfSkpO1xuICAgIGNsaWVudC5jbG9zZSgpO1xuICAgIHJldHVybiB7XG4gICAgICBwYXRoczogcGF0aHMsXG4gICAgICBmYWxsYmFjazogXCJibG9ja2luZ1wiLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY2xpZW50LmNsb3NlKCk7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRnJhZ21lbnQiLCJHeW1IZWFkZXIiLCJXYWxsTGlzdCIsIkdyb3VwIiwiU3BlY2lmaWNHeW0iLCJwcm9wcyIsImd5bSIsImNvbnNvbGUiLCJsb2ciLCJwIiwiZGlyZWN0aW9uIiwicG9zaXRpb24iLCJpZCIsIl9pZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiYWRkcmVzcyIsIml0ZW1zIiwid2FsbHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[gymId]/index.js\n");

/***/ })

});