"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin/forms/[gymId]",{

/***/ "./pages/admin/forms/[gymId]/index.js":
/*!********************************************!*\
  !*** ./pages/admin/forms/[gymId]/index.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ WallForm; }\n/* harmony export */ });\n/* harmony import */ var C_Users_cturgeon_Desktop_NextJS_climbing_app_v2_mongodb_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_cturgeon_Desktop_NextJS_climbing_app_v2_mongodb_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_cturgeon_Desktop_NextJS_climbing_app_v2_mongodb_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction sendFormData(updatedGymData) {\n    return _sendFormData.apply(this, arguments);\n}\nfunction _sendFormData() {\n    _sendFormData = _asyncToGenerator(C_Users_cturgeon_Desktop_NextJS_climbing_app_v2_mongodb_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(updatedGymData) {\n        var gymId, response, data;\n        return C_Users_cturgeon_Desktop_NextJS_climbing_app_v2_mongodb_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    gymId = updatedGymData._id;\n                    console.log(gymId);\n                    _ctx.next = 4;\n                    return fetch(\"/api/\".concat(gymId), {\n                        method: \"PUT\",\n                        body: JSON.stringify(updatedGymData),\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        }\n                    });\n                case 4:\n                    response = _ctx.sent;\n                    _ctx.next = 7;\n                    return response.json();\n                case 7:\n                    data = _ctx.sent;\n                    if (response.ok) {\n                        _ctx.next = 10;\n                        break;\n                    }\n                    throw new Error(data.message || \"Something went wrong\");\n                case 10:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _sendFormData.apply(this, arguments);\n}\nvar __N_SSP = true;\nfunction WallForm(props) {\n    _s();\n    var enteredName = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var enteredImage = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var gym = props.gym;\n    if (!gym) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n            children: \"Loading....\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n            lineNumber: 30,\n            columnNumber: 12\n        }, this);\n    }\n    var wallArray = gym.walls;\n    function submitHandler(event) {\n        return _submitHandler.apply(this, arguments);\n    }\n    function _submitHandler() {\n        _submitHandler = _asyncToGenerator(C_Users_cturgeon_Desktop_NextJS_climbing_app_v2_mongodb_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var newWall;\n            return C_Users_cturgeon_Desktop_NextJS_climbing_app_v2_mongodb_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        newWall = {\n                            name: enteredName.current.value,\n                            image: enteredImage.current.value,\n                            routes: []\n                        };\n                        validateFormInformation(newWall);\n                        wallArray.push(newWall);\n                        console.log(gym.walls);\n                        _ctx.prev = 5;\n                        _ctx.next = 8;\n                        return sendFormData(gym);\n                    case 8:\n                        _ctx.next = 12;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](5);\n                    case 12:\n                        enteredImage.current.value = \"\";\n                        enteredName.current.value = \"\";\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    5,\n                    10\n                ]\n            ]);\n        }));\n        return _submitHandler.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Add a wall to \",\n                    \"\".concat(gym.name)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                onSubmit: submitHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        children: \"name: \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        input: \"text\",\n                        ref: enteredName\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        children: \"image: \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        input: \"text\",\n                        ref: enteredImage\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        type: \"submit\",\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            gym.wallArray && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                children: \"Edit a wall below\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n                lineNumber: 68,\n                columnNumber: 25\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n};\n_s(WallForm, \"0L0S+OZnLObZ57reLtrDTunwja8=\");\n_c = WallForm;\nfunction validateFormInformation(wallData) {\n    var name = wallData.name, image = wallData.image;\n    if (!name || !image) {\n        console.log(\"missing data\");\n    }\n}\nvar _c;\n$RefreshReg$(_c, \"WallForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi9mb3Jtcy9bZ3ltSWRdL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRStCO0FBQ1E7O1NBRXhCRSxZQUFZLENBQUNDLGNBQWM7V0FBM0JELGFBQVk7O1NBQVpBLGFBQVk7SUFBWkEsYUFBWSxHQUEzQixzTUFBNEJDLGNBQWMsRUFBRTtZQUNwQ0MsS0FBSyxFQUVMQyxRQUFRLEVBUVJDLElBQUk7Ozs7b0JBVkpGLEtBQUssR0FBR0QsY0FBYyxDQUFDSSxHQUFHLENBQUM7b0JBQ2pDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsS0FBSyxDQUFDLENBQUM7OzJCQUNJTSxLQUFLLENBQUMsT0FBTSxDQUFRLE9BQU5OLEtBQUssQ0FBRSxFQUFFO3dCQUM1Q08sTUFBTSxFQUFFLEtBQUs7d0JBQ2JDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNYLGNBQWMsQ0FBQzt3QkFDcENZLE9BQU8sRUFBRTs0QkFDUCxjQUFjLEVBQUUsa0JBQWtCO3lCQUNuQztxQkFDRixDQUFDOztvQkFOSVYsUUFBUSxZQU1aOzsyQkFFaUJBLFFBQVEsQ0FBQ1csSUFBSSxFQUFFOztvQkFBNUJWLElBQUksWUFBd0I7d0JBRTdCRCxRQUFRLENBQUNZLEVBQUU7Ozs7b0JBQ2QsTUFBTSxJQUFJQyxLQUFLLENBQUNaLElBQUksQ0FBQ2EsT0FBTyxJQUFJLHNCQUFzQixDQUFDLENBQUM7Ozs7OztLQUUzRDtXQWhCY2pCLGFBQVk7OztBQWtCWixTQUFTa0IsUUFBUSxDQUFDQyxLQUFLLEVBQUU7O0lBQ3RDLElBQU1DLFdBQVcsR0FBR3RCLDZDQUFNLEVBQUU7SUFDNUIsSUFBTXVCLFlBQVksR0FBR3ZCLDZDQUFNLEVBQUU7SUFFN0IsSUFBTXdCLEdBQUcsR0FBR0gsS0FBSyxDQUFDRyxHQUFHO0lBQ3JCLElBQUksQ0FBQ0EsR0FBRyxFQUFFO1FBQ1IscUJBQU8sOERBQUNDLEdBQUM7c0JBQUMsYUFBVzs7Ozs7Z0JBQUksQ0FBQztLQUMzQjtJQUVELElBQU1DLFNBQVMsR0FBR0YsR0FBRyxDQUFDRyxLQUFLO2FBRVpDLGFBQWEsQ0FBQ0MsS0FBSztlQUFuQkQsY0FBYTs7YUFBYkEsY0FBYTtRQUFiQSxjQUFhLEdBQTVCLHNNQUE2QkMsS0FBSyxFQUFFO2dCQUc1QkMsT0FBTzs7Ozt3QkFGYkQsS0FBSyxDQUFDRSxjQUFjLEVBQUUsQ0FBQzt3QkFFakJELE9BQU8sR0FBRzs0QkFDZEUsSUFBSSxFQUFFVixXQUFXLENBQUNXLE9BQU8sQ0FBQ0MsS0FBSzs0QkFDL0JDLEtBQUssRUFBRVosWUFBWSxDQUFDVSxPQUFPLENBQUNDLEtBQUs7NEJBQ2pDRSxNQUFNLEVBQUUsRUFBRTt5QkFDWCxDQUFDO3dCQUNGQyx1QkFBdUIsQ0FBQ1AsT0FBTyxDQUFDLENBQUM7d0JBRWpDSixTQUFTLENBQUNZLElBQUksQ0FBQ1IsT0FBTyxDQUFDLENBQUM7d0JBQ3hCdEIsT0FBTyxDQUFDQyxHQUFHLENBQUNlLEdBQUcsQ0FBQ0csS0FBSyxDQUFDLENBQUM7OzsrQkFHZnpCLFlBQVksQ0FBQ3NCLEdBQUcsQ0FBQzs7Ozs7Ozs7d0JBS3pCRCxZQUFZLENBQUNVLE9BQU8sQ0FBQ0MsS0FBSyxHQUFHLEVBQUUsQ0FBQzt3QkFDaENaLFdBQVcsQ0FBQ1csT0FBTyxDQUFDQyxLQUFLLEdBQUcsRUFBRSxDQUFDOzs7Ozs7Ozs7OztTQUNoQztlQXJCY04sY0FBYTs7SUF1QjVCLHFCQUNFLDhEQUFDVyxLQUFHOzswQkFDRiw4REFBQ0MsSUFBRTs7b0JBQUMsZ0JBQWM7b0JBQUUsR0FBVyxPQUFUaEIsR0FBRyxDQUFDUSxJQUFJLENBQUU7Ozs7OztvQkFBTTswQkFDdEMsOERBQUNTLE1BQUk7Z0JBQUNDLFFBQVEsRUFBRWQsYUFBYTs7a0NBQzNCLDhEQUFDZSxPQUFLO2tDQUFDLFFBQU07Ozs7OzRCQUFRO2tDQUNyQiw4REFBQ0MsT0FBSzt3QkFBQ0EsS0FBSyxFQUFDLE1BQU07d0JBQUNDLEdBQUcsRUFBRXZCLFdBQVc7Ozs7OzRCQUFVO2tDQUM5Qyw4REFBQ3FCLE9BQUs7a0NBQUMsU0FBTzs7Ozs7NEJBQVE7a0NBQ3RCLDhEQUFDQyxPQUFLO3dCQUFDQSxLQUFLLEVBQUMsTUFBTTt3QkFBQ0MsR0FBRyxFQUFFdEIsWUFBWTs7Ozs7NEJBQVU7a0NBQy9DLDhEQUFDdEIsaURBQU07d0JBQUM2QyxJQUFJLEVBQUMsUUFBUTtrQ0FBQyxLQUFHOzs7Ozs0QkFBUzs7Ozs7O29CQUM3QjtZQUNOdEIsR0FBRyxDQUFDRSxTQUFTLGtCQUFJLDhEQUFDYyxJQUFFOzBCQUFDLG1CQUFpQjs7Ozs7b0JBQUs7Ozs7OztZQUN4QyxDQUNOO0NBQ0g7R0EvQ3VCcEIsUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBc0VoQyxTQUFTaUIsdUJBQXVCLENBQUNVLFFBQVEsRUFBRTtJQUN6QyxJQUFRZixJQUFJLEdBQVllLFFBQVEsQ0FBeEJmLElBQUksRUFBRUcsS0FBSyxHQUFLWSxRQUFRLENBQWxCWixLQUFLO0lBQ25CLElBQUksQ0FBQ0gsSUFBSSxJQUFJLENBQUNHLEtBQUssRUFBRTtRQUNuQjNCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQzdCO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vZm9ybXMvW2d5bUlkXS9pbmRleC5qcz9jZDQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlLCBnZXRHeW1CeUlkIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2hlbHBlcnMvZGItdXRpbFwiO1xyXG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XHJcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2VuZEZvcm1EYXRhKHVwZGF0ZWRHeW1EYXRhKSB7XHJcbiAgY29uc3QgZ3ltSWQgPSB1cGRhdGVkR3ltRGF0YS5faWQ7XHJcbiAgY29uc29sZS5sb2coZ3ltSWQpO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvJHtneW1JZH1gLCB7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1cGRhdGVkR3ltRGF0YSksXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGRhdGEubWVzc2FnZSB8fCBcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2FsbEZvcm0ocHJvcHMpIHtcclxuICBjb25zdCBlbnRlcmVkTmFtZSA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGVudGVyZWRJbWFnZSA9IHVzZVJlZigpO1xyXG5cclxuICBjb25zdCBneW0gPSBwcm9wcy5neW07XHJcbiAgaWYgKCFneW0pIHtcclxuICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uLjwvcD47XHJcbiAgfVxyXG5cclxuICBjb25zdCB3YWxsQXJyYXkgPSBneW0ud2FsbHM7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdEhhbmRsZXIoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgbmV3V2FsbCA9IHtcclxuICAgICAgbmFtZTogZW50ZXJlZE5hbWUuY3VycmVudC52YWx1ZSxcclxuICAgICAgaW1hZ2U6IGVudGVyZWRJbWFnZS5jdXJyZW50LnZhbHVlLFxyXG4gICAgICByb3V0ZXM6IFtdLFxyXG4gICAgfTtcclxuICAgIHZhbGlkYXRlRm9ybUluZm9ybWF0aW9uKG5ld1dhbGwpO1xyXG5cclxuICAgIHdhbGxBcnJheS5wdXNoKG5ld1dhbGwpO1xyXG4gICAgY29uc29sZS5sb2coZ3ltLndhbGxzKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBzZW5kRm9ybURhdGEoZ3ltKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIC8vVE9ETyBzZXQgZXJyb3IgaGFuZGxpbmcgaGVyZVxyXG4gICAgfVxyXG5cclxuICAgIGVudGVyZWRJbWFnZS5jdXJyZW50LnZhbHVlID0gXCJcIjtcclxuICAgIGVudGVyZWROYW1lLmN1cnJlbnQudmFsdWUgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMz5BZGQgYSB3YWxsIHRvIHtgJHtneW0ubmFtZX1gfTwvaDM+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICA8bGFiZWw+bmFtZTogPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgaW5wdXQ9XCJ0ZXh0XCIgcmVmPXtlbnRlcmVkTmFtZX0+PC9pbnB1dD5cclxuICAgICAgICA8bGFiZWw+aW1hZ2U6IDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IGlucHV0PVwidGV4dFwiIHJlZj17ZW50ZXJlZEltYWdlfT48L2lucHV0PlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZDwvQnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIHtneW0ud2FsbEFycmF5ICYmIDxoMz5FZGl0IGEgd2FsbCBiZWxvdzwvaDM+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgZ3ltSWQgPSBjb250ZXh0LnBhcmFtcy5neW1JZDtcclxuICBsZXQgY2xpZW50O1xyXG4gIHRyeSB7XHJcbiAgICBjbGllbnQgPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xyXG4gICAgY29uc3QgZ3ltRGF0YSA9IGF3YWl0IGdldEd5bUJ5SWQoY2xpZW50LCBcImd5bS1kYXRhXCIsIHtcclxuICAgICAgX2lkOiBPYmplY3RJZChneW1JZCksXHJcbiAgICB9KTtcclxuICAgIGNsaWVudC5jbG9zZSgpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICBneW06IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZ3ltRGF0YSkpLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY2xpZW50LmNsb3NlKCk7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlRm9ybUluZm9ybWF0aW9uKHdhbGxEYXRhKSB7XHJcbiAgY29uc3QgeyBuYW1lLCBpbWFnZSB9ID0gd2FsbERhdGE7XHJcbiAgaWYgKCFuYW1lIHx8ICFpbWFnZSkge1xyXG4gICAgY29uc29sZS5sb2coXCJtaXNzaW5nIGRhdGFcIik7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJCdXR0b24iLCJzZW5kRm9ybURhdGEiLCJ1cGRhdGVkR3ltRGF0YSIsImd5bUlkIiwicmVzcG9uc2UiLCJkYXRhIiwiX2lkIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwianNvbiIsIm9rIiwiRXJyb3IiLCJtZXNzYWdlIiwiV2FsbEZvcm0iLCJwcm9wcyIsImVudGVyZWROYW1lIiwiZW50ZXJlZEltYWdlIiwiZ3ltIiwicCIsIndhbGxBcnJheSIsIndhbGxzIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwibmV3V2FsbCIsInByZXZlbnREZWZhdWx0IiwibmFtZSIsImN1cnJlbnQiLCJ2YWx1ZSIsImltYWdlIiwicm91dGVzIiwidmFsaWRhdGVGb3JtSW5mb3JtYXRpb24iLCJwdXNoIiwiZGl2IiwiaDMiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwicmVmIiwidHlwZSIsIndhbGxEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/admin/forms/[gymId]/index.js\n");

/***/ })

});