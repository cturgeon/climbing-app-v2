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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ WallForm; }\n/* harmony export */ });\n/* harmony import */ var C_Users_cturgeon_Desktop_NextJS_climbing_app_v2_mongodb_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_cturgeon_Desktop_NextJS_climbing_app_v2_mongodb_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_cturgeon_Desktop_NextJS_climbing_app_v2_mongodb_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction sendFormData(updatedGymData) {\n    return _sendFormData.apply(this, arguments);\n}\nfunction _sendFormData() {\n    _sendFormData = _asyncToGenerator(C_Users_cturgeon_Desktop_NextJS_climbing_app_v2_mongodb_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(updatedGymData) {\n        var gymId, response, data;\n        return C_Users_cturgeon_Desktop_NextJS_climbing_app_v2_mongodb_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    gymId = updatedGymData._id;\n                    console.log(gymId);\n                    _ctx.next = 4;\n                    return fetch(\"/api/\".concat(gymId), {\n                        method: \"PUT\",\n                        body: JSON.stringify(updatedGymData),\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        }\n                    });\n                case 4:\n                    response = _ctx.sent;\n                    _ctx.next = 7;\n                    return response.json();\n                case 7:\n                    data = _ctx.sent;\n                    if (response.ok) {\n                        _ctx.next = 10;\n                        break;\n                    }\n                    throw new Error(data.message || \"Something went wrong\");\n                case 10:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _sendFormData.apply(this, arguments);\n}\nvar __N_SSP = true;\nfunction WallForm(props) {\n    var _this = this;\n    _s();\n    var enteredName = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var enteredImage = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var gym = props.gym;\n    if (!gym) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n            children: \"Loading....\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n            lineNumber: 30,\n            columnNumber: 12\n        }, this);\n    }\n    var wallArray = gym.walls;\n    function submitHandler(event) {\n        return _submitHandler.apply(this, arguments);\n    }\n    function _submitHandler() {\n        _submitHandler = _asyncToGenerator(C_Users_cturgeon_Desktop_NextJS_climbing_app_v2_mongodb_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var newWall;\n            return C_Users_cturgeon_Desktop_NextJS_climbing_app_v2_mongodb_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        newWall = {\n                            name: enteredName.current.value,\n                            image: enteredImage.current.value,\n                            routes: []\n                        };\n                        validateFormInformation(newWall);\n                        wallArray.push(newWall);\n                        _ctx.prev = 4;\n                        _ctx.next = 7;\n                        return sendFormData(gym);\n                    case 7:\n                        _ctx.next = 11;\n                        break;\n                    case 9:\n                        _ctx.prev = 9;\n                        _ctx.t0 = _ctx[\"catch\"](4);\n                    case 11:\n                        enteredImage.current.value = \"\";\n                        enteredName.current.value = \"\";\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    4,\n                    9\n                ]\n            ]);\n        }));\n        return _submitHandler.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Add a wall to \",\n                    \"\".concat(gym.name)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                onSubmit: submitHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        children: \"name: \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        input: \"text\",\n                        ref: enteredName\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        children: \"image: \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        input: \"text\",\n                        ref: enteredImage\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        type: \"submit\",\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            gym.walls && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                        children: \"Edit a wall below\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                        children: gym.walls.map(function(wall) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                    children: wall.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n                                lineNumber: 72,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n};\n_s(WallForm, \"0L0S+OZnLObZ57reLtrDTunwja8=\");\n_c = WallForm;\nfunction validateFormInformation(wallData) {\n    var name = wallData.name, image = wallData.image;\n    if (!name || !image) {\n        console.log(\"missing data\");\n    }\n}\nvar _c;\n$RefreshReg$(_c, \"WallForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi9mb3Jtcy9bZ3ltSWRdL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXlDO0FBQ0Y7O1NBRXhCRyxZQUFZLENBQUNDLGNBQWM7V0FBM0JELGFBQVk7O1NBQVpBLGFBQVk7SUFBWkEsYUFBWSxHQUEzQixzTUFBNEJDLGNBQWMsRUFBRTtZQUNwQ0MsS0FBSyxFQUVMQyxRQUFRLEVBUVJDLElBQUk7Ozs7b0JBVkpGLEtBQUssR0FBR0QsY0FBYyxDQUFDSSxHQUFHLENBQUM7b0JBQ2pDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsS0FBSyxDQUFDLENBQUM7OzJCQUNJTSxLQUFLLENBQUMsT0FBTSxDQUFRLE9BQU5OLEtBQUssQ0FBRSxFQUFFO3dCQUM1Q08sTUFBTSxFQUFFLEtBQUs7d0JBQ2JDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNYLGNBQWMsQ0FBQzt3QkFDcENZLE9BQU8sRUFBRTs0QkFDUCxjQUFjLEVBQUUsa0JBQWtCO3lCQUNuQztxQkFDRixDQUFDOztvQkFOSVYsUUFBUSxZQU1aOzsyQkFFaUJBLFFBQVEsQ0FBQ1csSUFBSSxFQUFFOztvQkFBNUJWLElBQUksWUFBd0I7d0JBRTdCRCxRQUFRLENBQUNZLEVBQUU7Ozs7b0JBQ2QsTUFBTSxJQUFJQyxLQUFLLENBQUNaLElBQUksQ0FBQ2EsT0FBTyxJQUFJLHNCQUFzQixDQUFDLENBQUM7Ozs7OztLQUUzRDtXQWhCY2pCLGFBQVk7OztBQWtCWixTQUFTa0IsUUFBUSxDQUFDQyxLQUFLLEVBQUU7OztJQUN0QyxJQUFNQyxXQUFXLEdBQUd0Qiw2Q0FBTSxFQUFFO0lBQzVCLElBQU11QixZQUFZLEdBQUd2Qiw2Q0FBTSxFQUFFO0lBRTdCLElBQU13QixHQUFHLEdBQUdILEtBQUssQ0FBQ0csR0FBRztJQUNyQixJQUFJLENBQUNBLEdBQUcsRUFBRTtRQUNSLHFCQUFPLDhEQUFDQyxHQUFDO3NCQUFDLGFBQVc7Ozs7O2dCQUFJLENBQUM7S0FDM0I7SUFFRCxJQUFNQyxTQUFTLEdBQUdGLEdBQUcsQ0FBQ0csS0FBSzthQUVaQyxhQUFhLENBQUNDLEtBQUs7ZUFBbkJELGNBQWE7O2FBQWJBLGNBQWE7UUFBYkEsY0FBYSxHQUE1QixzTUFBNkJDLEtBQUssRUFBRTtnQkFHNUJDLE9BQU87Ozs7d0JBRmJELEtBQUssQ0FBQ0UsY0FBYyxFQUFFLENBQUM7d0JBRWpCRCxPQUFPLEdBQUc7NEJBQ2RFLElBQUksRUFBRVYsV0FBVyxDQUFDVyxPQUFPLENBQUNDLEtBQUs7NEJBQy9CQyxLQUFLLEVBQUVaLFlBQVksQ0FBQ1UsT0FBTyxDQUFDQyxLQUFLOzRCQUNqQ0UsTUFBTSxFQUFFLEVBQUU7eUJBQ1gsQ0FBQzt3QkFDRkMsdUJBQXVCLENBQUNQLE9BQU8sQ0FBQyxDQUFDO3dCQUVqQ0osU0FBUyxDQUFDWSxJQUFJLENBQUNSLE9BQU8sQ0FBQyxDQUFDOzs7K0JBR2hCNUIsWUFBWSxDQUFDc0IsR0FBRyxDQUFDOzs7Ozs7Ozt3QkFLekJELFlBQVksQ0FBQ1UsT0FBTyxDQUFDQyxLQUFLLEdBQUcsRUFBRSxDQUFDO3dCQUNoQ1osV0FBVyxDQUFDVyxPQUFPLENBQUNDLEtBQUssR0FBRyxFQUFFLENBQUM7Ozs7Ozs7Ozs7O1NBQ2hDO2VBcEJjTixjQUFhOztJQXNCNUIscUJBQ0UsOERBQUNXLEtBQUc7OzBCQUNGLDhEQUFDQyxJQUFFOztvQkFBQyxnQkFBYztvQkFBRSxHQUFXLE9BQVRoQixHQUFHLENBQUNRLElBQUksQ0FBRTs7Ozs7O29CQUFNOzBCQUN0Qyw4REFBQ1MsTUFBSTtnQkFBQ0MsUUFBUSxFQUFFZCxhQUFhOztrQ0FDM0IsOERBQUNlLE9BQUs7a0NBQUMsUUFBTTs7Ozs7NEJBQVE7a0NBQ3JCLDhEQUFDQyxPQUFLO3dCQUFDQSxLQUFLLEVBQUMsTUFBTTt3QkFBQ0MsR0FBRyxFQUFFdkIsV0FBVzs7Ozs7NEJBQVU7a0NBQzlDLDhEQUFDcUIsT0FBSztrQ0FBQyxTQUFPOzs7Ozs0QkFBUTtrQ0FDdEIsOERBQUNDLE9BQUs7d0JBQUNBLEtBQUssRUFBQyxNQUFNO3dCQUFDQyxHQUFHLEVBQUV0QixZQUFZOzs7Ozs0QkFBVTtrQ0FDL0MsOERBQUN0QixpREFBTTt3QkFBQzZDLElBQUksRUFBQyxRQUFRO2tDQUFDLEtBQUc7Ozs7OzRCQUFTOzs7Ozs7b0JBQzdCO1lBQ050QixHQUFHLENBQUNHLEtBQUssa0JBQ1IsOERBQUM1QiwyQ0FBUTs7a0NBQ1AsOERBQUN5QyxJQUFFO2tDQUFDLG1CQUFpQjs7Ozs7NEJBQUs7a0NBQzFCLDhEQUFDTyxJQUFFO2tDQUNBdkIsR0FBRyxDQUFDRyxLQUFLLENBQUNxQixHQUFHLENBQUMsU0FBQ0MsSUFBSTtpREFDbEIsOERBQUNDLElBQUU7MENBQ0QsNEVBQUN6QixHQUFDOzhDQUFFd0IsSUFBSSxDQUFDakIsSUFBSTs7Ozs7eUNBQUs7Ozs7O3FDQUNmO3lCQUNOLENBQUM7Ozs7OzRCQUNDOzs7Ozs7b0JBQ0k7Ozs7OztZQUVULENBQ047Q0FDSDtHQXpEdUJaLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQWdGaEMsU0FBU2lCLHVCQUF1QixDQUFDYyxRQUFRLEVBQUU7SUFDekMsSUFBUW5CLElBQUksR0FBWW1CLFFBQVEsQ0FBeEJuQixJQUFJLEVBQUVHLEtBQUssR0FBS2dCLFFBQVEsQ0FBbEJoQixLQUFLO0lBQ25CLElBQUksQ0FBQ0gsSUFBSSxJQUFJLENBQUNHLEtBQUssRUFBRTtRQUNuQjNCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQzdCO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vZm9ybXMvW2d5bUlkXS9pbmRleC5qcz9jZDQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlLCBnZXRHeW1CeUlkIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2hlbHBlcnMvZGItdXRpbFwiO1xyXG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XHJcbmltcG9ydCB7IEZyYWdtZW50LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNlbmRGb3JtRGF0YSh1cGRhdGVkR3ltRGF0YSkge1xyXG4gIGNvbnN0IGd5bUlkID0gdXBkYXRlZEd5bURhdGEuX2lkO1xyXG4gIGNvbnNvbGUubG9nKGd5bUlkKTtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpLyR7Z3ltSWR9YCwge1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXBkYXRlZEd5bURhdGEpLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihkYXRhLm1lc3NhZ2UgfHwgXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdhbGxGb3JtKHByb3BzKSB7XHJcbiAgY29uc3QgZW50ZXJlZE5hbWUgPSB1c2VSZWYoKTtcclxuICBjb25zdCBlbnRlcmVkSW1hZ2UgPSB1c2VSZWYoKTtcclxuXHJcbiAgY29uc3QgZ3ltID0gcHJvcHMuZ3ltO1xyXG4gIGlmICghZ3ltKSB7XHJcbiAgICByZXR1cm4gPHA+TG9hZGluZy4uLi48L3A+O1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgd2FsbEFycmF5ID0gZ3ltLndhbGxzO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzdWJtaXRIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IG5ld1dhbGwgPSB7XHJcbiAgICAgIG5hbWU6IGVudGVyZWROYW1lLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgIGltYWdlOiBlbnRlcmVkSW1hZ2UuY3VycmVudC52YWx1ZSxcclxuICAgICAgcm91dGVzOiBbXSxcclxuICAgIH07XHJcbiAgICB2YWxpZGF0ZUZvcm1JbmZvcm1hdGlvbihuZXdXYWxsKTtcclxuXHJcbiAgICB3YWxsQXJyYXkucHVzaChuZXdXYWxsKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBzZW5kRm9ybURhdGEoZ3ltKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIC8vVE9ETyBzZXQgZXJyb3IgaGFuZGxpbmcgaGVyZVxyXG4gICAgfVxyXG5cclxuICAgIGVudGVyZWRJbWFnZS5jdXJyZW50LnZhbHVlID0gXCJcIjtcclxuICAgIGVudGVyZWROYW1lLmN1cnJlbnQudmFsdWUgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMz5BZGQgYSB3YWxsIHRvIHtgJHtneW0ubmFtZX1gfTwvaDM+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICA8bGFiZWw+bmFtZTogPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgaW5wdXQ9XCJ0ZXh0XCIgcmVmPXtlbnRlcmVkTmFtZX0+PC9pbnB1dD5cclxuICAgICAgICA8bGFiZWw+aW1hZ2U6IDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IGlucHV0PVwidGV4dFwiIHJlZj17ZW50ZXJlZEltYWdlfT48L2lucHV0PlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZDwvQnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIHtneW0ud2FsbHMgJiYgKFxyXG4gICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgIDxoMz5FZGl0IGEgd2FsbCBiZWxvdzwvaDM+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHtneW0ud2FsbHMubWFwKCh3YWxsKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPHA+e3dhbGwubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCBneW1JZCA9IGNvbnRleHQucGFyYW1zLmd5bUlkO1xyXG4gIGxldCBjbGllbnQ7XHJcbiAgdHJ5IHtcclxuICAgIGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XHJcbiAgICBjb25zdCBneW1EYXRhID0gYXdhaXQgZ2V0R3ltQnlJZChjbGllbnQsIFwiZ3ltLWRhdGFcIiwge1xyXG4gICAgICBfaWQ6IE9iamVjdElkKGd5bUlkKSxcclxuICAgIH0pO1xyXG4gICAgY2xpZW50LmNsb3NlKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIGd5bTogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShneW1EYXRhKSksXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjbGllbnQuY2xvc2UoKTtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVGb3JtSW5mb3JtYXRpb24od2FsbERhdGEpIHtcclxuICBjb25zdCB7IG5hbWUsIGltYWdlIH0gPSB3YWxsRGF0YTtcclxuICBpZiAoIW5hbWUgfHwgIWltYWdlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIm1pc3NpbmcgZGF0YVwiKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkZyYWdtZW50IiwidXNlUmVmIiwiQnV0dG9uIiwic2VuZEZvcm1EYXRhIiwidXBkYXRlZEd5bURhdGEiLCJneW1JZCIsInJlc3BvbnNlIiwiZGF0YSIsIl9pZCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImpzb24iLCJvayIsIkVycm9yIiwibWVzc2FnZSIsIldhbGxGb3JtIiwicHJvcHMiLCJlbnRlcmVkTmFtZSIsImVudGVyZWRJbWFnZSIsImd5bSIsInAiLCJ3YWxsQXJyYXkiLCJ3YWxscyIsInN1Ym1pdEhhbmRsZXIiLCJldmVudCIsIm5ld1dhbGwiLCJwcmV2ZW50RGVmYXVsdCIsIm5hbWUiLCJjdXJyZW50IiwidmFsdWUiLCJpbWFnZSIsInJvdXRlcyIsInZhbGlkYXRlRm9ybUluZm9ybWF0aW9uIiwicHVzaCIsImRpdiIsImgzIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInJlZiIsInR5cGUiLCJ1bCIsIm1hcCIsIndhbGwiLCJsaSIsIndhbGxEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/admin/forms/[gymId]/index.js\n");

/***/ })

});