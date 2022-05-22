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
exports.id = "pages/admin/forms/[gymId]/[wallId]";
exports.ids = ["pages/admin/forms/[gymId]/[wallId]"];
exports.modules = {

/***/ "./helpers/db-util.js":
/*!****************************!*\
  !*** ./helpers/db-util.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectToDatabase\": () => (/* binding */ connectToDatabase),\n/* harmony export */   \"deleteGym\": () => (/* binding */ deleteGym),\n/* harmony export */   \"getAllGymData\": () => (/* binding */ getAllGymData),\n/* harmony export */   \"getGymById\": () => (/* binding */ getGymById),\n/* harmony export */   \"getGymIds\": () => (/* binding */ getGymIds),\n/* harmony export */   \"insertGym\": () => (/* binding */ insertGym),\n/* harmony export */   \"updateGym\": () => (/* binding */ updateGym)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectToDatabase() {\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(`mongodb+srv://${\"cturgeon\"}:${\"NPMBTbVcEyOpEA0w\"}@${\"cluster0\"}.trzrj.mongodb.net/${\"gym-data\"}?retryWrites=true&w=majority`);\n    return client;\n}\nasync function insertGym(client, collection, gymData) {\n    const db = client.db();\n    const result = await db.collection(collection).insertOne(gymData);\n    return result;\n}\nasync function getAllGymData(client, collection, sort) {\n    const db = client.db();\n    const gymData = await db.collection(collection).find().sort(sort).toArray();\n    return gymData;\n}\nasync function deleteGym(client, collection, id) {\n    const db = client.db();\n    await db.collection(collection).deleteOne(id);\n    return;\n}\nasync function getGymById(client, collection, id) {\n    const db = client.db();\n    const gymData = await db.collection(collection).findOne(id);\n    return gymData;\n}\nasync function getGymIds(client, collection) {\n    const db = client.db();\n    const result = await db.collection(collection).distinct(\"_id\", {}, {});\n    return result;\n}\nasync function updateGym(client, collection, id, gymData) {\n    const db = client.db();\n    const result = await db.collection(collection).replaceOne(id, gymData);\n    return result;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL2RiLXV0aWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXNDO0FBRS9CLGVBQWVDLGlCQUFpQixHQUFHO0lBQ3hDLE1BQU1DLE1BQU0sR0FBRyxNQUFNRix3REFBbUIsQ0FDdEMsQ0FBQyxjQUFjLEVBQUVJLFVBQTRCLENBQUMsQ0FBQyxFQUFFQSxrQkFBNEIsQ0FBQyxDQUFDLEVBQUVBLFVBQStCLENBQUMsbUJBQW1CLEVBQUVBLFVBQTRCLENBQUMsNEJBQTRCLENBQUMsQ0FDak07SUFDRCxPQUFPRixNQUFNLENBQUM7Q0FDZjtBQUVNLGVBQWVRLFNBQVMsQ0FBQ1IsTUFBTSxFQUFFUyxVQUFVLEVBQUVDLE9BQU8sRUFBRTtJQUMzRCxNQUFNQyxFQUFFLEdBQUdYLE1BQU0sQ0FBQ1csRUFBRSxFQUFFO0lBQ3RCLE1BQU1DLE1BQU0sR0FBRyxNQUFNRCxFQUFFLENBQUNGLFVBQVUsQ0FBQ0EsVUFBVSxDQUFDLENBQUNJLFNBQVMsQ0FBQ0gsT0FBTyxDQUFDO0lBQ2pFLE9BQU9FLE1BQU0sQ0FBQztDQUNmO0FBRU0sZUFBZUUsYUFBYSxDQUFDZCxNQUFNLEVBQUVTLFVBQVUsRUFBRU0sSUFBSSxFQUFFO0lBQzVELE1BQU1KLEVBQUUsR0FBR1gsTUFBTSxDQUFDVyxFQUFFLEVBQUU7SUFDdEIsTUFBTUQsT0FBTyxHQUFHLE1BQU1DLEVBQUUsQ0FBQ0YsVUFBVSxDQUFDQSxVQUFVLENBQUMsQ0FBQ08sSUFBSSxFQUFFLENBQUNELElBQUksQ0FBQ0EsSUFBSSxDQUFDLENBQUNFLE9BQU8sRUFBRTtJQUMzRSxPQUFPUCxPQUFPLENBQUM7Q0FDaEI7QUFFTSxlQUFlUSxTQUFTLENBQUNsQixNQUFNLEVBQUVTLFVBQVUsRUFBRVUsRUFBRSxFQUFFO0lBQ3RELE1BQU1SLEVBQUUsR0FBR1gsTUFBTSxDQUFDVyxFQUFFLEVBQUU7SUFDdEIsTUFBTUEsRUFBRSxDQUFDRixVQUFVLENBQUNBLFVBQVUsQ0FBQyxDQUFDVyxTQUFTLENBQUNELEVBQUUsQ0FBQyxDQUFDO0lBQzlDLE9BQU87Q0FDUjtBQUVNLGVBQWVFLFVBQVUsQ0FBQ3JCLE1BQU0sRUFBRVMsVUFBVSxFQUFFVSxFQUFFLEVBQUU7SUFDdkQsTUFBTVIsRUFBRSxHQUFHWCxNQUFNLENBQUNXLEVBQUUsRUFBRTtJQUN0QixNQUFNRCxPQUFPLEdBQUcsTUFBTUMsRUFBRSxDQUFDRixVQUFVLENBQUNBLFVBQVUsQ0FBQyxDQUFDYSxPQUFPLENBQUNILEVBQUUsQ0FBQztJQUMzRCxPQUFPVCxPQUFPLENBQUM7Q0FDaEI7QUFFTSxlQUFlYSxTQUFTLENBQUN2QixNQUFNLEVBQUVTLFVBQVUsRUFBRTtJQUNsRCxNQUFNRSxFQUFFLEdBQUdYLE1BQU0sQ0FBQ1csRUFBRSxFQUFFO0lBQ3RCLE1BQU1DLE1BQU0sR0FBRyxNQUFNRCxFQUFFLENBQUNGLFVBQVUsQ0FBQ0EsVUFBVSxDQUFDLENBQUNlLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUN0RSxPQUFPWixNQUFNLENBQUM7Q0FDZjtBQUVNLGVBQWVhLFNBQVMsQ0FBQ3pCLE1BQU0sRUFBRVMsVUFBVSxFQUFFVSxFQUFFLEVBQUVULE9BQU8sRUFBRTtJQUMvRCxNQUFNQyxFQUFFLEdBQUdYLE1BQU0sQ0FBQ1csRUFBRSxFQUFFO0lBQ3RCLE1BQU1DLE1BQU0sR0FBRyxNQUFNRCxFQUFFLENBQUNGLFVBQVUsQ0FBQ0EsVUFBVSxDQUFDLENBQUNpQixVQUFVLENBQUNQLEVBQUUsRUFBRVQsT0FBTyxDQUFDO0lBQ3RFLE9BQU9FLE1BQU0sQ0FBQztDQUNmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpbWJpbmctYXBwLXYxLy4vaGVscGVycy9kYi11dGlsLmpzP2Y1NzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCkge1xyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICBgbW9uZ29kYitzcnY6Ly8ke3Byb2Nlc3MuZW52Lm1vbmdvZGJfdXNlcm5hbWV9OiR7cHJvY2Vzcy5lbnYubW9uZ29kYl9wYXNzd29yZH1AJHtwcm9jZXNzLmVudi5tb25nb2RiX2NsdXN0ZXJuYW1lfS50cnpyai5tb25nb2RiLm5ldC8ke3Byb2Nlc3MuZW52Lm1vbmdvZGJfZGF0YWJhc2V9P3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eWBcclxuICApO1xyXG4gIHJldHVybiBjbGllbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbnNlcnRHeW0oY2xpZW50LCBjb2xsZWN0aW9uLCBneW1EYXRhKSB7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKGNvbGxlY3Rpb24pLmluc2VydE9uZShneW1EYXRhKTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsR3ltRGF0YShjbGllbnQsIGNvbGxlY3Rpb24sIHNvcnQpIHtcclxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gIGNvbnN0IGd5bURhdGEgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKGNvbGxlY3Rpb24pLmZpbmQoKS5zb3J0KHNvcnQpLnRvQXJyYXkoKTtcclxuICByZXR1cm4gZ3ltRGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUd5bShjbGllbnQsIGNvbGxlY3Rpb24sIGlkKSB7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICBhd2FpdCBkYi5jb2xsZWN0aW9uKGNvbGxlY3Rpb24pLmRlbGV0ZU9uZShpZCk7XHJcbiAgcmV0dXJuO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0R3ltQnlJZChjbGllbnQsIGNvbGxlY3Rpb24sIGlkKSB7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICBjb25zdCBneW1EYXRhID0gYXdhaXQgZGIuY29sbGVjdGlvbihjb2xsZWN0aW9uKS5maW5kT25lKGlkKTtcclxuICByZXR1cm4gZ3ltRGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEd5bUlkcyhjbGllbnQsIGNvbGxlY3Rpb24pIHtcclxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oY29sbGVjdGlvbikuZGlzdGluY3QoXCJfaWRcIiwge30sIHt9KTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlR3ltKGNsaWVudCwgY29sbGVjdGlvbiwgaWQsIGd5bURhdGEpIHtcclxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oY29sbGVjdGlvbikucmVwbGFjZU9uZShpZCwgZ3ltRGF0YSk7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJjb25uZWN0VG9EYXRhYmFzZSIsImNsaWVudCIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwibW9uZ29kYl91c2VybmFtZSIsIm1vbmdvZGJfcGFzc3dvcmQiLCJtb25nb2RiX2NsdXN0ZXJuYW1lIiwibW9uZ29kYl9kYXRhYmFzZSIsImluc2VydEd5bSIsImNvbGxlY3Rpb24iLCJneW1EYXRhIiwiZGIiLCJyZXN1bHQiLCJpbnNlcnRPbmUiLCJnZXRBbGxHeW1EYXRhIiwic29ydCIsImZpbmQiLCJ0b0FycmF5IiwiZGVsZXRlR3ltIiwiaWQiLCJkZWxldGVPbmUiLCJnZXRHeW1CeUlkIiwiZmluZE9uZSIsImdldEd5bUlkcyIsImRpc3RpbmN0IiwidXBkYXRlR3ltIiwicmVwbGFjZU9uZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./helpers/db-util.js\n");

/***/ }),

/***/ "./pages/admin/forms/[gymId]/[wallId]/index.js":
/*!*****************************************************!*\
  !*** ./pages/admin/forms/[gymId]/[wallId]/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ WallFormEditPage),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_db_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../helpers/db-util */ \"./helpers/db-util.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mantine/core */ \"@mantine/core\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nasync function sendFormData(updatedGymData) {\n    const gymId = updatedGymData._id;\n    console.log(gymId);\n    const response = await fetch(`/api/${gymId}`, {\n        method: \"PUT\",\n        body: JSON.stringify(updatedGymData),\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    const data = await response.json();\n    if (!response.ok) {\n        throw new Error(data.message || \"Something went wrong\");\n    }\n}\nfunction WallFormEditPage(props) {\n    const wallId = props.wallId;\n    const gym = props.gym;\n    const gymWall = gym.walls[wallId];\n    const enteredName = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    const enteredColor = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    const enteredGrade = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    const enteredDescription = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    const enteredImage = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    async function submitHandler(event) {\n        event.preventDefault();\n        const routeData = {\n            id: gymWall.routes.length,\n            name: enteredName.current.value,\n            color: enteredColor.current.value,\n            grade: enteredGrade.current.value,\n            description: enteredDescription.current.value,\n            image: enteredImage.current.value\n        };\n        gymWall.routes.push(routeData);\n        try {\n            await sendFormData(gym);\n        } catch (error) {\n        //TODO set error handling here\n        }\n        enteredName.current.value = \"\";\n        enteredColor.current.value = \"\";\n        enteredGrade.current.value = \"\";\n        enteredDescription.current.value = \"\";\n        enteredImage.current.value = \"\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Edit \",\n                    gymWall.name\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\[wallId]\\\\index.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            gymWall.routes.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"current wall routes\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\[wallId]\\\\index.js\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: gymWall.routes.map((route)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: route.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\[wallId]\\\\index.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 17\n                                }, this)\n                            }, route.id, false, {\n                                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\[wallId]\\\\index.js\",\n                                lineNumber: 70,\n                                columnNumber: 15\n                            }, this)\n                        )\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\[wallId]\\\\index.js\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\[wallId]\\\\index.js\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Add a route below\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\[wallId]\\\\index.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: submitHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\[wallId]\\\\index.js\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"name\",\n                                ref: enteredName\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\[wallId]\\\\index.js\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\[wallId]\\\\index.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"color\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\[wallId]\\\\index.js\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"color\",\n                                ref: enteredColor\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\[wallId]\\\\index.js\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\[wallId]\\\\index.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"grade\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\[wallId]\\\\index.js\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"grade\",\n                                ref: enteredGrade\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\[wallId]\\\\index.js\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\[wallId]\\\\index.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"description\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\[wallId]\\\\index.js\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"description\",\n                                ref: enteredDescription\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\[wallId]\\\\index.js\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\[wallId]\\\\index.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"image\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\[wallId]\\\\index.js\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"image\",\n                                ref: enteredImage\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\[wallId]\\\\index.js\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\[wallId]\\\\index.js\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        type: \"submit\",\n                        children: \"Add route\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\[wallId]\\\\index.js\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\[wallId]\\\\index.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\cturgeon\\\\Desktop\\\\NextJS\\\\climbing-app-v2-mongodb\\\\pages\\\\admin\\\\forms\\\\[gymId]\\\\[wallId]\\\\index.js\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n};\nasync function getServerSideProps(context) {\n    const gymId = context.params.gymId;\n    const wallId = context.params.wallId;\n    let client;\n    try {\n        client = await (0,_helpers_db_util__WEBPACK_IMPORTED_MODULE_2__.connectToDatabase)();\n        const gymData = await (0,_helpers_db_util__WEBPACK_IMPORTED_MODULE_2__.getGymById)(client, \"gym-data\", {\n            _id: (0,mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId)(gymId)\n        });\n        client.close();\n        return {\n            props: {\n                gym: JSON.parse(JSON.stringify(gymData)),\n                wallId: wallId\n            }\n        };\n    } catch (error) {\n        client.close();\n        console.error(error);\n        return;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi9mb3Jtcy9bZ3ltSWRdL1t3YWxsSWRdL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBbUM7QUFDNEM7QUFDdEM7QUFDRjtBQUV2QyxlQUFlTSxZQUFZLENBQUNDLGNBQWMsRUFBRTtJQUMxQyxNQUFNQyxLQUFLLEdBQUdELGNBQWMsQ0FBQ0UsR0FBRztJQUNoQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNILEtBQUssQ0FBQyxDQUFDO0lBQ25CLE1BQU1JLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUVMLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFDNUNNLE1BQU0sRUFBRSxLQUFLO1FBQ2JDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNWLGNBQWMsQ0FBQztRQUNwQ1csT0FBTyxFQUFFO1lBQ1AsY0FBYyxFQUFFLGtCQUFrQjtTQUNuQztLQUNGLENBQUM7SUFFRixNQUFNQyxJQUFJLEdBQUcsTUFBTVAsUUFBUSxDQUFDUSxJQUFJLEVBQUU7SUFFbEMsSUFBSSxDQUFDUixRQUFRLENBQUNTLEVBQUUsRUFBRTtRQUNoQixNQUFNLElBQUlDLEtBQUssQ0FBQ0gsSUFBSSxDQUFDSSxPQUFPLElBQUksc0JBQXNCLENBQUMsQ0FBQztLQUN6RDtDQUNGO0FBRWMsU0FBU0MsZ0JBQWdCLENBQUNDLEtBQUssRUFBRTtJQUM5QyxNQUFNQyxNQUFNLEdBQUdELEtBQUssQ0FBQ0MsTUFBTTtJQUMzQixNQUFNQyxHQUFHLEdBQUdGLEtBQUssQ0FBQ0UsR0FBRztJQUNyQixNQUFNQyxPQUFPLEdBQUdELEdBQUcsQ0FBQ0UsS0FBSyxDQUFDSCxNQUFNLENBQUM7SUFFakMsTUFBTUksV0FBVyxHQUFHMUIsNkNBQU0sRUFBRTtJQUM1QixNQUFNMkIsWUFBWSxHQUFHM0IsNkNBQU0sRUFBRTtJQUM3QixNQUFNNEIsWUFBWSxHQUFHNUIsNkNBQU0sRUFBRTtJQUM3QixNQUFNNkIsa0JBQWtCLEdBQUc3Qiw2Q0FBTSxFQUFFO0lBQ25DLE1BQU04QixZQUFZLEdBQUc5Qiw2Q0FBTSxFQUFFO0lBRTdCLGVBQWUrQixhQUFhLENBQUNDLEtBQUssRUFBRTtRQUNsQ0EsS0FBSyxDQUFDQyxjQUFjLEVBQUUsQ0FBQztRQUV2QixNQUFNQyxTQUFTLEdBQUc7WUFDaEJDLEVBQUUsRUFBRVgsT0FBTyxDQUFDWSxNQUFNLENBQUNDLE1BQU07WUFDekJDLElBQUksRUFBRVosV0FBVyxDQUFDYSxPQUFPLENBQUNDLEtBQUs7WUFDL0JDLEtBQUssRUFBRWQsWUFBWSxDQUFDWSxPQUFPLENBQUNDLEtBQUs7WUFDakNFLEtBQUssRUFBRWQsWUFBWSxDQUFDVyxPQUFPLENBQUNDLEtBQUs7WUFDakNHLFdBQVcsRUFBRWQsa0JBQWtCLENBQUNVLE9BQU8sQ0FBQ0MsS0FBSztZQUM3Q0ksS0FBSyxFQUFFZCxZQUFZLENBQUNTLE9BQU8sQ0FBQ0MsS0FBSztTQUNsQztRQUVEaEIsT0FBTyxDQUFDWSxNQUFNLENBQUNTLElBQUksQ0FBQ1gsU0FBUyxDQUFDLENBQUM7UUFFL0IsSUFBSTtZQUNGLE1BQU1oQyxZQUFZLENBQUNxQixHQUFHLENBQUMsQ0FBQztTQUN6QixDQUFDLE9BQU91QixLQUFLLEVBQUU7UUFDZCw4QkFBOEI7U0FDL0I7UUFFRHBCLFdBQVcsQ0FBQ2EsT0FBTyxDQUFDQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQy9CYixZQUFZLENBQUNZLE9BQU8sQ0FBQ0MsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQ1osWUFBWSxDQUFDVyxPQUFPLENBQUNDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaENYLGtCQUFrQixDQUFDVSxPQUFPLENBQUNDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDdENWLFlBQVksQ0FBQ1MsT0FBTyxDQUFDQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0tBQ2pDO0lBRUQscUJBQ0UsOERBQUNPLEtBQUc7OzBCQUNGLDhEQUFDQyxJQUFFOztvQkFBQyxPQUFLO29CQUFDeEIsT0FBTyxDQUFDYyxJQUFJOzs7Ozs7b0JBQU07WUFDM0JkLE9BQU8sQ0FBQ1ksTUFBTSxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxrQkFDeEIsOERBQUN0QywyQ0FBUTs7a0NBQ1AsOERBQUNrRCxJQUFFO2tDQUFDLHFCQUFtQjs7Ozs7NEJBQUs7a0NBQzVCLDhEQUFDQyxJQUFFO2tDQUNBMUIsT0FBTyxDQUFDWSxNQUFNLENBQUNlLEdBQUcsQ0FBQyxDQUFDQyxLQUFLLGlCQUN4Qiw4REFBQ0MsSUFBRTswQ0FDRCw0RUFBQ0MsR0FBQzs4Q0FBRUYsS0FBSyxDQUFDZCxJQUFJOzs7Ozt3Q0FBSzsrQkFEWmMsS0FBSyxDQUFDakIsRUFBRTs7OztvQ0FFWjt3QkFDTixDQUFDOzs7Ozs0QkFDQzs7Ozs7O29CQUNJOzBCQUViLDhEQUFDb0IsSUFBRTswQkFBQyxtQkFBaUI7Ozs7O29CQUFLOzBCQUMxQiw4REFBQ0MsTUFBSTtnQkFBQ0MsUUFBUSxFQUFFMUIsYUFBYTs7a0NBQzNCLDhEQUFDZ0IsS0FBRzs7MENBQ0YsOERBQUNXLE9BQUs7MENBQUMsTUFBSTs7Ozs7b0NBQVE7MENBQ25CLDhEQUFDQyxPQUFLO2dDQUFDQyxJQUFJLEVBQUMsTUFBTTtnQ0FBQ3pCLEVBQUUsRUFBQyxNQUFNO2dDQUFDMEIsR0FBRyxFQUFFbkMsV0FBVzs7Ozs7b0NBQUk7Ozs7Ozs0QkFDN0M7a0NBQ04sOERBQUNxQixLQUFHOzswQ0FDRiw4REFBQ1csT0FBSzswQ0FBQyxPQUFLOzs7OztvQ0FBUTswQ0FDcEIsOERBQUNDLE9BQUs7Z0NBQUNDLElBQUksRUFBQyxNQUFNO2dDQUFDekIsRUFBRSxFQUFDLE9BQU87Z0NBQUMwQixHQUFHLEVBQUVsQyxZQUFZOzs7OztvQ0FBSTs7Ozs7OzRCQUMvQztrQ0FDTiw4REFBQ29CLEtBQUc7OzBDQUNGLDhEQUFDVyxPQUFLOzBDQUFDLE9BQUs7Ozs7O29DQUFROzBDQUNwQiw4REFBQ0MsT0FBSztnQ0FBQ0MsSUFBSSxFQUFDLE1BQU07Z0NBQUN6QixFQUFFLEVBQUMsT0FBTztnQ0FBQzBCLEdBQUcsRUFBRWpDLFlBQVk7Ozs7O29DQUFJOzs7Ozs7NEJBQy9DO2tDQUNOLDhEQUFDbUIsS0FBRzs7MENBQ0YsOERBQUNXLE9BQUs7MENBQUMsYUFBVzs7Ozs7b0NBQVE7MENBQzFCLDhEQUFDQyxPQUFLO2dDQUFDQyxJQUFJLEVBQUMsTUFBTTtnQ0FBQ3pCLEVBQUUsRUFBQyxhQUFhO2dDQUFDMEIsR0FBRyxFQUFFaEMsa0JBQWtCOzs7OztvQ0FBSTs7Ozs7OzRCQUMzRDtrQ0FDTiw4REFBQ2tCLEtBQUc7OzBDQUNGLDhEQUFDVyxPQUFLOzBDQUFDLE9BQUs7Ozs7O29DQUFROzBDQUNwQiw4REFBQ0MsT0FBSztnQ0FBQ0MsSUFBSSxFQUFDLE1BQU07Z0NBQUN6QixFQUFFLEVBQUMsT0FBTztnQ0FBQzBCLEdBQUcsRUFBRS9CLFlBQVk7Ozs7O29DQUFJOzs7Ozs7NEJBQy9DO2tDQUNOLDhEQUFDN0IsaURBQU07d0JBQUMyRCxJQUFJLEVBQUMsUUFBUTtrQ0FBQyxXQUFTOzs7Ozs0QkFBUzs7Ozs7O29CQUNuQzs7Ozs7O1lBQ0gsQ0FDTjtDQUNIO0FBRU0sZUFBZUUsa0JBQWtCLENBQUNDLE9BQU8sRUFBRTtJQUNoRCxNQUFNM0QsS0FBSyxHQUFHMkQsT0FBTyxDQUFDQyxNQUFNLENBQUM1RCxLQUFLO0lBQ2xDLE1BQU1rQixNQUFNLEdBQUd5QyxPQUFPLENBQUNDLE1BQU0sQ0FBQzFDLE1BQU07SUFDcEMsSUFBSTJDLE1BQU07SUFDVixJQUFJO1FBQ0ZBLE1BQU0sR0FBRyxNQUFNcEUsbUVBQWlCLEVBQUUsQ0FBQztRQUNuQyxNQUFNcUUsT0FBTyxHQUFHLE1BQU1wRSw0REFBVSxDQUFDbUUsTUFBTSxFQUFFLFVBQVUsRUFBRTtZQUNuRDVELEdBQUcsRUFBRVQsaURBQVEsQ0FBQ1EsS0FBSyxDQUFDO1NBQ3JCLENBQUM7UUFDRjZELE1BQU0sQ0FBQ0UsS0FBSyxFQUFFLENBQUM7UUFDZixPQUFPO1lBQ0w5QyxLQUFLLEVBQUU7Z0JBQ0xFLEdBQUcsRUFBRVgsSUFBSSxDQUFDd0QsS0FBSyxDQUFDeEQsSUFBSSxDQUFDQyxTQUFTLENBQUNxRCxPQUFPLENBQUMsQ0FBQztnQkFDeEM1QyxNQUFNLEVBQUVBLE1BQU07YUFDZjtTQUNGLENBQUM7S0FDSCxDQUFDLE9BQU93QixLQUFLLEVBQUU7UUFDZG1CLE1BQU0sQ0FBQ0UsS0FBSyxFQUFFLENBQUM7UUFDZjdELE9BQU8sQ0FBQ3dDLEtBQUssQ0FBQ0EsS0FBSyxDQUFDLENBQUM7UUFDckIsT0FBTztLQUNSO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGltYmluZy1hcHAtdjEvLi9wYWdlcy9hZG1pbi9mb3Jtcy9bZ3ltSWRdL1t3YWxsSWRdL2luZGV4LmpzPzUwNGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JqZWN0SWQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5pbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSwgZ2V0R3ltQnlJZCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9oZWxwZXJzL2RiLXV0aWxcIjtcclxuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG1hbnRpbmUvY29yZVwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2VuZEZvcm1EYXRhKHVwZGF0ZWRHeW1EYXRhKSB7XHJcbiAgY29uc3QgZ3ltSWQgPSB1cGRhdGVkR3ltRGF0YS5faWQ7XHJcbiAgY29uc29sZS5sb2coZ3ltSWQpO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvJHtneW1JZH1gLCB7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1cGRhdGVkR3ltRGF0YSksXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGRhdGEubWVzc2FnZSB8fCBcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2FsbEZvcm1FZGl0UGFnZShwcm9wcykge1xyXG4gIGNvbnN0IHdhbGxJZCA9IHByb3BzLndhbGxJZDtcclxuICBjb25zdCBneW0gPSBwcm9wcy5neW07XHJcbiAgY29uc3QgZ3ltV2FsbCA9IGd5bS53YWxsc1t3YWxsSWRdO1xyXG5cclxuICBjb25zdCBlbnRlcmVkTmFtZSA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGVudGVyZWRDb2xvciA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGVudGVyZWRHcmFkZSA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGVudGVyZWREZXNjcmlwdGlvbiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGVudGVyZWRJbWFnZSA9IHVzZVJlZigpO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzdWJtaXRIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IHJvdXRlRGF0YSA9IHtcclxuICAgICAgaWQ6IGd5bVdhbGwucm91dGVzLmxlbmd0aCxcclxuICAgICAgbmFtZTogZW50ZXJlZE5hbWUuY3VycmVudC52YWx1ZSxcclxuICAgICAgY29sb3I6IGVudGVyZWRDb2xvci5jdXJyZW50LnZhbHVlLFxyXG4gICAgICBncmFkZTogZW50ZXJlZEdyYWRlLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBlbnRlcmVkRGVzY3JpcHRpb24uY3VycmVudC52YWx1ZSxcclxuICAgICAgaW1hZ2U6IGVudGVyZWRJbWFnZS5jdXJyZW50LnZhbHVlLFxyXG4gICAgfTtcclxuXHJcbiAgICBneW1XYWxsLnJvdXRlcy5wdXNoKHJvdXRlRGF0YSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgc2VuZEZvcm1EYXRhKGd5bSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvL1RPRE8gc2V0IGVycm9yIGhhbmRsaW5nIGhlcmVcclxuICAgIH1cclxuXHJcbiAgICBlbnRlcmVkTmFtZS5jdXJyZW50LnZhbHVlID0gXCJcIjtcclxuICAgIGVudGVyZWRDb2xvci5jdXJyZW50LnZhbHVlID0gXCJcIjtcclxuICAgIGVudGVyZWRHcmFkZS5jdXJyZW50LnZhbHVlID0gXCJcIjtcclxuICAgIGVudGVyZWREZXNjcmlwdGlvbi5jdXJyZW50LnZhbHVlID0gXCJcIjtcclxuICAgIGVudGVyZWRJbWFnZS5jdXJyZW50LnZhbHVlID0gXCJcIjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+RWRpdCB7Z3ltV2FsbC5uYW1lfTwvaDE+XHJcbiAgICAgIHtneW1XYWxsLnJvdXRlcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICA8aDI+Y3VycmVudCB3YWxsIHJvdXRlczwvaDI+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHtneW1XYWxsLnJvdXRlcy5tYXAoKHJvdXRlKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17cm91dGUuaWR9PlxyXG4gICAgICAgICAgICAgICAgPHA+e3JvdXRlLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICApfVxyXG4gICAgICA8aDM+QWRkIGEgcm91dGUgYmVsb3c8L2gzPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbD5uYW1lPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIHJlZj17ZW50ZXJlZE5hbWV9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbD5jb2xvcjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImNvbG9yXCIgcmVmPXtlbnRlcmVkQ29sb3J9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbD5ncmFkZTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImdyYWRlXCIgcmVmPXtlbnRlcmVkR3JhZGV9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbD5kZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImRlc2NyaXB0aW9uXCIgcmVmPXtlbnRlcmVkRGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbD5pbWFnZTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImltYWdlXCIgcmVmPXtlbnRlcmVkSW1hZ2V9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWRkIHJvdXRlPC9CdXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IGd5bUlkID0gY29udGV4dC5wYXJhbXMuZ3ltSWQ7XHJcbiAgY29uc3Qgd2FsbElkID0gY29udGV4dC5wYXJhbXMud2FsbElkO1xyXG4gIGxldCBjbGllbnQ7XHJcbiAgdHJ5IHtcclxuICAgIGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XHJcbiAgICBjb25zdCBneW1EYXRhID0gYXdhaXQgZ2V0R3ltQnlJZChjbGllbnQsIFwiZ3ltLWRhdGFcIiwge1xyXG4gICAgICBfaWQ6IE9iamVjdElkKGd5bUlkKSxcclxuICAgIH0pO1xyXG4gICAgY2xpZW50LmNsb3NlKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIGd5bTogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShneW1EYXRhKSksXHJcbiAgICAgICAgd2FsbElkOiB3YWxsSWQsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjbGllbnQuY2xvc2UoKTtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiT2JqZWN0SWQiLCJjb25uZWN0VG9EYXRhYmFzZSIsImdldEd5bUJ5SWQiLCJGcmFnbWVudCIsInVzZVJlZiIsIkJ1dHRvbiIsInNlbmRGb3JtRGF0YSIsInVwZGF0ZWRHeW1EYXRhIiwiZ3ltSWQiLCJfaWQiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImRhdGEiLCJqc29uIiwib2siLCJFcnJvciIsIm1lc3NhZ2UiLCJXYWxsRm9ybUVkaXRQYWdlIiwicHJvcHMiLCJ3YWxsSWQiLCJneW0iLCJneW1XYWxsIiwid2FsbHMiLCJlbnRlcmVkTmFtZSIsImVudGVyZWRDb2xvciIsImVudGVyZWRHcmFkZSIsImVudGVyZWREZXNjcmlwdGlvbiIsImVudGVyZWRJbWFnZSIsInN1Ym1pdEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwicm91dGVEYXRhIiwiaWQiLCJyb3V0ZXMiLCJsZW5ndGgiLCJuYW1lIiwiY3VycmVudCIsInZhbHVlIiwiY29sb3IiLCJncmFkZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJwdXNoIiwiZXJyb3IiLCJkaXYiLCJoMSIsImgyIiwidWwiLCJtYXAiLCJyb3V0ZSIsImxpIiwicCIsImgzIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJyZWYiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicGFyYW1zIiwiY2xpZW50IiwiZ3ltRGF0YSIsImNsb3NlIiwicGFyc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/admin/forms/[gymId]/[wallId]/index.js\n");

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/admin/forms/[gymId]/[wallId]/index.js"));
module.exports = __webpack_exports__;

})();