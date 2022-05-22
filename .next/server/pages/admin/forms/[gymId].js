"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/admin/forms/[gymId]";
exports.ids = ["pages/admin/forms/[gymId]"];
exports.modules = {

/***/ "./helpers/db-util.js":
/*!****************************!*\
  !*** ./helpers/db-util.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectToDatabase\": () => (/* binding */ connectToDatabase),\n/* harmony export */   \"deleteGym\": () => (/* binding */ deleteGym),\n/* harmony export */   \"getAllGymData\": () => (/* binding */ getAllGymData),\n/* harmony export */   \"getGymById\": () => (/* binding */ getGymById),\n/* harmony export */   \"getGymIds\": () => (/* binding */ getGymIds),\n/* harmony export */   \"insertGym\": () => (/* binding */ insertGym),\n/* harmony export */   \"updateGym\": () => (/* binding */ updateGym)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectToDatabase() {\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(`mongodb+srv://${\"cturgeon\"}:${\"NPMBTbVcEyOpEA0w\"}@${\"cluster0\"}.trzrj.mongodb.net/${\"gym-data\"}?retryWrites=true&w=majority`);\n    return client;\n}\nasync function insertGym(client, collection, gymData) {\n    const db = client.db();\n    const result = await db.collection(collection).insertOne(gymData);\n    return result;\n}\nasync function getAllGymData(client, collection, sort) {\n    const db = client.db();\n    const gymData = await db.collection(collection).find().sort(sort).toArray();\n    return gymData;\n}\nasync function deleteGym(client, collection, id) {\n    const db = client.db();\n    await db.collection(collection).deleteOne(id);\n    return;\n}\nasync function getGymById(client, collection, id) {\n    const db = client.db();\n    const gymData = await db.collection(collection).findOne(id);\n    return gymData;\n}\nasync function getGymIds(client, collection) {\n    const db = client.db();\n    const result = await db.collection(collection).distinct(\"_id\", {}, {});\n    return result;\n}\nasync function updateGym(client, collection, id, gymData) {\n    const db = client.db();\n    const result = await db.collection(collection).replaceOne(id, gymData);\n    return result;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL2RiLXV0aWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXNDO0FBRS9CLGVBQWVDLGlCQUFpQixHQUFHO0lBQ3hDLE1BQU1DLE1BQU0sR0FBRyxNQUFNRix3REFBbUIsQ0FDdEMsQ0FBQyxjQUFjLEVBQUVJLFVBQTRCLENBQUMsQ0FBQyxFQUFFQSxrQkFBNEIsQ0FBQyxDQUFDLEVBQUVBLFVBQStCLENBQUMsbUJBQW1CLEVBQUVBLFVBQTRCLENBQUMsNEJBQTRCLENBQUMsQ0FDak07SUFDRCxPQUFPRixNQUFNLENBQUM7Q0FDZjtBQUVNLGVBQWVRLFNBQVMsQ0FBQ1IsTUFBTSxFQUFFUyxVQUFVLEVBQUVDLE9BQU8sRUFBRTtJQUMzRCxNQUFNQyxFQUFFLEdBQUdYLE1BQU0sQ0FBQ1csRUFBRSxFQUFFO0lBQ3RCLE1BQU1DLE1BQU0sR0FBRyxNQUFNRCxFQUFFLENBQUNGLFVBQVUsQ0FBQ0EsVUFBVSxDQUFDLENBQUNJLFNBQVMsQ0FBQ0gsT0FBTyxDQUFDO0lBQ2pFLE9BQU9FLE1BQU0sQ0FBQztDQUNmO0FBRU0sZUFBZUUsYUFBYSxDQUFDZCxNQUFNLEVBQUVTLFVBQVUsRUFBRU0sSUFBSSxFQUFFO0lBQzVELE1BQU1KLEVBQUUsR0FBR1gsTUFBTSxDQUFDVyxFQUFFLEVBQUU7SUFDdEIsTUFBTUQsT0FBTyxHQUFHLE1BQU1DLEVBQUUsQ0FBQ0YsVUFBVSxDQUFDQSxVQUFVLENBQUMsQ0FBQ08sSUFBSSxFQUFFLENBQUNELElBQUksQ0FBQ0EsSUFBSSxDQUFDLENBQUNFLE9BQU8sRUFBRTtJQUMzRSxPQUFPUCxPQUFPLENBQUM7Q0FDaEI7QUFFTSxlQUFlUSxTQUFTLENBQUNsQixNQUFNLEVBQUVTLFVBQVUsRUFBRVUsRUFBRSxFQUFFO0lBQ3RELE1BQU1SLEVBQUUsR0FBR1gsTUFBTSxDQUFDVyxFQUFFLEVBQUU7SUFDdEIsTUFBTUEsRUFBRSxDQUFDRixVQUFVLENBQUNBLFVBQVUsQ0FBQyxDQUFDVyxTQUFTLENBQUNELEVBQUUsQ0FBQyxDQUFDO0lBQzlDLE9BQU87Q0FDUjtBQUVNLGVBQWVFLFVBQVUsQ0FBQ3JCLE1BQU0sRUFBRVMsVUFBVSxFQUFFVSxFQUFFLEVBQUU7SUFDdkQsTUFBTVIsRUFBRSxHQUFHWCxNQUFNLENBQUNXLEVBQUUsRUFBRTtJQUN0QixNQUFNRCxPQUFPLEdBQUcsTUFBTUMsRUFBRSxDQUFDRixVQUFVLENBQUNBLFVBQVUsQ0FBQyxDQUFDYSxPQUFPLENBQUNILEVBQUUsQ0FBQztJQUMzRCxPQUFPVCxPQUFPLENBQUM7Q0FDaEI7QUFFTSxlQUFlYSxTQUFTLENBQUN2QixNQUFNLEVBQUVTLFVBQVUsRUFBRTtJQUNsRCxNQUFNRSxFQUFFLEdBQUdYLE1BQU0sQ0FBQ1csRUFBRSxFQUFFO0lBQ3RCLE1BQU1DLE1BQU0sR0FBRyxNQUFNRCxFQUFFLENBQUNGLFVBQVUsQ0FBQ0EsVUFBVSxDQUFDLENBQUNlLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUN0RSxPQUFPWixNQUFNLENBQUM7Q0FDZjtBQUVNLGVBQWVhLFNBQVMsQ0FBQ3pCLE1BQU0sRUFBRVMsVUFBVSxFQUFFVSxFQUFFLEVBQUVULE9BQU8sRUFBRTtJQUMvRCxNQUFNQyxFQUFFLEdBQUdYLE1BQU0sQ0FBQ1csRUFBRSxFQUFFO0lBQ3RCLE1BQU1DLE1BQU0sR0FBRyxNQUFNRCxFQUFFLENBQUNGLFVBQVUsQ0FBQ0EsVUFBVSxDQUFDLENBQUNpQixVQUFVLENBQUNQLEVBQUUsRUFBRVQsT0FBTyxDQUFDO0lBQ3RFLE9BQU9FLE1BQU0sQ0FBQztDQUNmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpbWJpbmctYXBwLXYxLy4vaGVscGVycy9kYi11dGlsLmpzP2Y1NzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCkge1xyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICBgbW9uZ29kYitzcnY6Ly8ke3Byb2Nlc3MuZW52Lm1vbmdvZGJfdXNlcm5hbWV9OiR7cHJvY2Vzcy5lbnYubW9uZ29kYl9wYXNzd29yZH1AJHtwcm9jZXNzLmVudi5tb25nb2RiX2NsdXN0ZXJuYW1lfS50cnpyai5tb25nb2RiLm5ldC8ke3Byb2Nlc3MuZW52Lm1vbmdvZGJfZGF0YWJhc2V9P3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eWBcclxuICApO1xyXG4gIHJldHVybiBjbGllbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbnNlcnRHeW0oY2xpZW50LCBjb2xsZWN0aW9uLCBneW1EYXRhKSB7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKGNvbGxlY3Rpb24pLmluc2VydE9uZShneW1EYXRhKTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsR3ltRGF0YShjbGllbnQsIGNvbGxlY3Rpb24sIHNvcnQpIHtcclxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gIGNvbnN0IGd5bURhdGEgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKGNvbGxlY3Rpb24pLmZpbmQoKS5zb3J0KHNvcnQpLnRvQXJyYXkoKTtcclxuICByZXR1cm4gZ3ltRGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUd5bShjbGllbnQsIGNvbGxlY3Rpb24sIGlkKSB7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICBhd2FpdCBkYi5jb2xsZWN0aW9uKGNvbGxlY3Rpb24pLmRlbGV0ZU9uZShpZCk7XHJcbiAgcmV0dXJuO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0R3ltQnlJZChjbGllbnQsIGNvbGxlY3Rpb24sIGlkKSB7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICBjb25zdCBneW1EYXRhID0gYXdhaXQgZGIuY29sbGVjdGlvbihjb2xsZWN0aW9uKS5maW5kT25lKGlkKTtcclxuICByZXR1cm4gZ3ltRGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEd5bUlkcyhjbGllbnQsIGNvbGxlY3Rpb24pIHtcclxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oY29sbGVjdGlvbikuZGlzdGluY3QoXCJfaWRcIiwge30sIHt9KTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlR3ltKGNsaWVudCwgY29sbGVjdGlvbiwgaWQsIGd5bURhdGEpIHtcclxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oY29sbGVjdGlvbikucmVwbGFjZU9uZShpZCwgZ3ltRGF0YSk7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJjb25uZWN0VG9EYXRhYmFzZSIsImNsaWVudCIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwibW9uZ29kYl91c2VybmFtZSIsIm1vbmdvZGJfcGFzc3dvcmQiLCJtb25nb2RiX2NsdXN0ZXJuYW1lIiwibW9uZ29kYl9kYXRhYmFzZSIsImluc2VydEd5bSIsImNvbGxlY3Rpb24iLCJneW1EYXRhIiwiZGIiLCJyZXN1bHQiLCJpbnNlcnRPbmUiLCJnZXRBbGxHeW1EYXRhIiwic29ydCIsImZpbmQiLCJ0b0FycmF5IiwiZGVsZXRlR3ltIiwiaWQiLCJkZWxldGVPbmUiLCJnZXRHeW1CeUlkIiwiZmluZE9uZSIsImdldEd5bUlkcyIsImRpc3RpbmN0IiwidXBkYXRlR3ltIiwicmVwbGFjZU9uZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./helpers/db-util.js\n");

/***/ }),

/***/ "./pages/admin/forms/[gymId]/index.js":
/*!********************************************!*\
  !*** ./pages/admin/forms/[gymId]/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ WallForm),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_db_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../helpers/db-util */ \"./helpers/db-util.js\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mantine/core */ \"@mantine/core\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nasync function sendFormData(updatedGymData) {\n    const gymId = updatedGymData._id;\n    console.log(gymId);\n    const response = await fetch(`/api/${gymId}`, {\n        method: \"PUT\",\n        body: JSON.stringify(updatedGymData),\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    const data = await response.json();\n    if (!response.ok) {\n        throw new Error(data.message || \"Something went wrong\");\n    }\n}\nfunction WallForm(props) {\n    const enteredName = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    const enteredImage = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    const gym = props.gym;\n    if (!gym) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading....\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n            lineNumber: 30,\n            columnNumber: 12\n        }, this);\n    }\n    const wallArray = gym.walls;\n    async function submitHandler(event) {\n        event.preventDefault();\n        const newWall = {\n            id: gym.walls.length,\n            name: enteredName.current.value,\n            image: enteredImage.current.value,\n            routes: []\n        };\n        validateFormInformation(newWall);\n        wallArray.push(newWall);\n        try {\n            await sendFormData(gym);\n        } catch (error) {\n        //TODO set error handling here\n        }\n        enteredImage.current.value = \"\";\n        enteredName.current.value = \"\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Add a wall to \",\n                    `${gym.name}`\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: submitHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"name: \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        input: \"text\",\n                        ref: enteredName\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"image: \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        input: \"text\",\n                        ref: enteredImage\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        type: \"submit\",\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            gym.walls.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Edit a wall below\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: gym.walls.map((wall)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: wall.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n                                lineNumber: 73,\n                                columnNumber: 15\n                            }, this)\n                        )\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\index.js\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n};\nasync function getServerSideProps(context) {\n    const gymId = context.params.gymId;\n    let client;\n    try {\n        client = await (0,_helpers_db_util__WEBPACK_IMPORTED_MODULE_1__.connectToDatabase)();\n        const gymData = await (0,_helpers_db_util__WEBPACK_IMPORTED_MODULE_1__.getGymById)(client, \"gym-data\", {\n            _id: (0,mongodb__WEBPACK_IMPORTED_MODULE_2__.ObjectId)(gymId)\n        });\n        client.close();\n        return {\n            props: {\n                gym: JSON.parse(JSON.stringify(gymData))\n            }\n        };\n    } catch (error) {\n        client.close();\n        console.error(error);\n        return;\n    }\n}\nfunction validateFormInformation(wallData) {\n    const { name , image  } = wallData;\n    if (!name || !image) {\n        console.log(\"missing data\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi9mb3Jtcy9bZ3ltSWRdL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNEU7QUFDekM7QUFDTTtBQUNGO0FBRXZDLGVBQWVNLFlBQVksQ0FBQ0MsY0FBYyxFQUFFO0lBQzFDLE1BQU1DLEtBQUssR0FBR0QsY0FBYyxDQUFDRSxHQUFHO0lBQ2hDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsS0FBSyxDQUFDLENBQUM7SUFDbkIsTUFBTUksUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRUwsS0FBSyxDQUFDLENBQUMsRUFBRTtRQUM1Q00sTUFBTSxFQUFFLEtBQUs7UUFDYkMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1YsY0FBYyxDQUFDO1FBQ3BDVyxPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUUsa0JBQWtCO1NBQ25DO0tBQ0YsQ0FBQztJQUVGLE1BQU1DLElBQUksR0FBRyxNQUFNUCxRQUFRLENBQUNRLElBQUksRUFBRTtJQUVsQyxJQUFJLENBQUNSLFFBQVEsQ0FBQ1MsRUFBRSxFQUFFO1FBQ2hCLE1BQU0sSUFBSUMsS0FBSyxDQUFDSCxJQUFJLENBQUNJLE9BQU8sSUFBSSxzQkFBc0IsQ0FBQyxDQUFDO0tBQ3pEO0NBQ0Y7QUFFYyxTQUFTQyxRQUFRLENBQUNDLEtBQUssRUFBRTtJQUN0QyxNQUFNQyxXQUFXLEdBQUd0Qiw2Q0FBTSxFQUFFO0lBQzVCLE1BQU11QixZQUFZLEdBQUd2Qiw2Q0FBTSxFQUFFO0lBRTdCLE1BQU13QixHQUFHLEdBQUdILEtBQUssQ0FBQ0csR0FBRztJQUNyQixJQUFJLENBQUNBLEdBQUcsRUFBRTtRQUNSLHFCQUFPLDhEQUFDQyxHQUFDO3NCQUFDLGFBQVc7Ozs7O2dCQUFJLENBQUM7S0FDM0I7SUFFRCxNQUFNQyxTQUFTLEdBQUdGLEdBQUcsQ0FBQ0csS0FBSztJQUUzQixlQUFlQyxhQUFhLENBQUNDLEtBQUssRUFBRTtRQUNsQ0EsS0FB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QUFPO0tBQ1I7Q0FDRjtBQUVELFNBQVNGLHVCQUF1QixDQUFDc0IsUUFBUSxFQUFFO0lBQ3pDLE1BQU0sRUFBRTNCLElBQUksR0FBRUcsS0FBSyxHQUFFLEdBQUd3QixRQUFRO0lBQ2hDLElBQUksQ0FBQzNCLElBQUksSUFBSSxDQUFDRyxLQUFLLEVBQUU7UUFDbkIvQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztLQUM3QjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpbWJpbmctYXBwLXYxLy4vcGFnZXMvYWRtaW4vZm9ybXMvW2d5bUlkXS9pbmRleC5qcz9jZDQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlLCBnZXRHeW1CeUlkIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2hlbHBlcnMvZGItdXRpbFwiO1xyXG5pbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XHJcbmltcG9ydCB7IEZyYWdtZW50LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBtYW50aW5lL2NvcmVcIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNlbmRGb3JtRGF0YSh1cGRhdGVkR3ltRGF0YSkge1xyXG4gIGNvbnN0IGd5bUlkID0gdXBkYXRlZEd5bURhdGEuX2lkO1xyXG4gIGNvbnNvbGUubG9nKGd5bUlkKTtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpLyR7Z3ltSWR9YCwge1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXBkYXRlZEd5bURhdGEpLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihkYXRhLm1lc3NhZ2UgfHwgXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdhbGxGb3JtKHByb3BzKSB7XHJcbiAgY29uc3QgZW50ZXJlZE5hbWUgPSB1c2VSZWYoKTtcclxuICBjb25zdCBlbnRlcmVkSW1hZ2UgPSB1c2VSZWYoKTtcclxuXHJcbiAgY29uc3QgZ3ltID0gcHJvcHMuZ3ltO1xyXG4gIGlmICghZ3ltKSB7XHJcbiAgICByZXR1cm4gPHA+TG9hZGluZy4uLi48L3A+O1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgd2FsbEFycmF5ID0gZ3ltLndhbGxzO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzdWJtaXRIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IG5ld1dhbGwgPSB7XHJcbiAgICAgIGlkOiBneW0ud2FsbHMubGVuZ3RoLFxyXG4gICAgICBuYW1lOiBlbnRlcmVkTmFtZS5jdXJyZW50LnZhbHVlLFxyXG4gICAgICBpbWFnZTogZW50ZXJlZEltYWdlLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgIHJvdXRlczogW10sXHJcbiAgICB9O1xyXG4gICAgdmFsaWRhdGVGb3JtSW5mb3JtYXRpb24obmV3V2FsbCk7XHJcblxyXG4gICAgd2FsbEFycmF5LnB1c2gobmV3V2FsbCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgc2VuZEZvcm1EYXRhKGd5bSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvL1RPRE8gc2V0IGVycm9yIGhhbmRsaW5nIGhlcmVcclxuICAgIH1cclxuXHJcbiAgICBlbnRlcmVkSW1hZ2UuY3VycmVudC52YWx1ZSA9IFwiXCI7XHJcbiAgICBlbnRlcmVkTmFtZS5jdXJyZW50LnZhbHVlID0gXCJcIjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDM+QWRkIGEgd2FsbCB0byB7YCR7Z3ltLm5hbWV9YH08L2gzPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgPGxhYmVsPm5hbWU6IDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IGlucHV0PVwidGV4dFwiIHJlZj17ZW50ZXJlZE5hbWV9PjwvaW5wdXQ+XHJcbiAgICAgICAgPGxhYmVsPmltYWdlOiA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCBpbnB1dD1cInRleHRcIiByZWY9e2VudGVyZWRJbWFnZX0+PC9pbnB1dD5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZGQ8L0J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICB7Z3ltLndhbGxzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgIDxoMz5FZGl0IGEgd2FsbCBiZWxvdzwvaDM+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHtneW0ud2FsbHMubWFwKCh3YWxsKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPHA+e3dhbGwubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCBneW1JZCA9IGNvbnRleHQucGFyYW1zLmd5bUlkO1xyXG4gIGxldCBjbGllbnQ7XHJcbiAgdHJ5IHtcclxuICAgIGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XHJcbiAgICBjb25zdCBneW1EYXRhID0gYXdhaXQgZ2V0R3ltQnlJZChjbGllbnQsIFwiZ3ltLWRhdGFcIiwge1xyXG4gICAgICBfaWQ6IE9iamVjdElkKGd5bUlkKSxcclxuICAgIH0pO1xyXG4gICAgY2xpZW50LmNsb3NlKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIGd5bTogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShneW1EYXRhKSksXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjbGllbnQuY2xvc2UoKTtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVGb3JtSW5mb3JtYXRpb24od2FsbERhdGEpIHtcclxuICBjb25zdCB7IG5hbWUsIGltYWdlIH0gPSB3YWxsRGF0YTtcclxuICBpZiAoIW5hbWUgfHwgIWltYWdlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIm1pc3NpbmcgZGF0YVwiKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImNvbm5lY3RUb0RhdGFiYXNlIiwiZ2V0R3ltQnlJZCIsIk9iamVjdElkIiwiRnJhZ21lbnQiLCJ1c2VSZWYiLCJCdXR0b24iLCJzZW5kRm9ybURhdGEiLCJ1cGRhdGVkR3ltRGF0YSIsImd5bUlkIiwiX2lkIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJkYXRhIiwianNvbiIsIm9rIiwiRXJyb3IiLCJtZXNzYWdlIiwiV2FsbEZvcm0iLCJwcm9wcyIsImVudGVyZWROYW1lIiwiZW50ZXJlZEltYWdlIiwiZ3ltIiwicCIsIndhbGxBcnJheSIsIndhbGxzIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJuZXdXYWxsIiwiaWQiLCJsZW5ndGgiLCJuYW1lIiwiY3VycmVudCIsInZhbHVlIiwiaW1hZ2UiLCJyb3V0ZXMiLCJ2YWxpZGF0ZUZvcm1JbmZvcm1hdGlvbiIsInB1c2giLCJlcnJvciIsImRpdiIsImgzIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInJlZiIsInR5cGUiLCJ1bCIsIm1hcCIsIndhbGwiLCJsaSIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJwYXJhbXMiLCJjbGllbnQiLCJneW1EYXRhIiwiY2xvc2UiLCJwYXJzZSIsIndhbGxEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/admin/forms/[gymId]/index.js\n");

/***/ }),

/***/ "@mantine/core":
/*!********************************!*\
  !*** external "@mantine/core" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mantine/core");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/admin/forms/[gymId]/index.js"));
module.exports = __webpack_exports__;

})();