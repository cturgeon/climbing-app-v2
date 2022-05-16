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
exports.id = "pages/api/gymData";
exports.ids = ["pages/api/gymData"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./helpers/db-util.js":
/*!****************************!*\
  !*** ./helpers/db-util.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectToDatabase\": () => (/* binding */ connectToDatabase),\n/* harmony export */   \"deleteGym\": () => (/* binding */ deleteGym),\n/* harmony export */   \"getAllGymData\": () => (/* binding */ getAllGymData),\n/* harmony export */   \"getGymById\": () => (/* binding */ getGymById),\n/* harmony export */   \"getGymIds\": () => (/* binding */ getGymIds),\n/* harmony export */   \"insertGym\": () => (/* binding */ insertGym)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectToDatabase() {\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(`mongodb+srv://${\"cturgeon\"}:${\"NgVzQdYr4CtZ7trk\"}@${\"cluster0\"}.trzrj.mongodb.net/${\"gym-data\"}?retryWrites=true&w=majority`);\n    return client;\n}\nasync function insertGym(client, collection, gymData) {\n    const db = client.db();\n    const result = await db.collection(collection).insertOne(gymData);\n    return result;\n}\nasync function getAllGymData(client, collection, sort) {\n    const db = client.db();\n    const gymData = await db.collection(collection).find().sort(sort).toArray();\n    return gymData;\n}\nasync function deleteGym(client, collection, id) {\n    const db = client.db();\n    await db.collection(collection).deleteOne(id);\n    return;\n}\nasync function getGymById(client, collection, id) {\n    const db = client.db();\n    const gymData = await db.collection(collection).findOne(id);\n    return gymData;\n}\nasync function getGymIds(client, collection) {\n    const db = client.db();\n    const result = await db.collection(collection).distinct(\"_id\", {}, {});\n    return result;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9oZWxwZXJzL2RiLXV0aWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBc0M7QUFFL0IsZUFBZUMsaUJBQWlCLEdBQUc7SUFDeEMsTUFBTUMsTUFBTSxHQUFHLE1BQU1GLHdEQUFtQixDQUN0QyxDQUFDLGNBQWMsRUFBRUksVUFBNEIsQ0FBQyxDQUFDLEVBQUVBLGtCQUE0QixDQUFDLENBQUMsRUFBRUEsVUFBK0IsQ0FBQyxtQkFBbUIsRUFBRUEsVUFBNEIsQ0FBQyw0QkFBNEIsQ0FBQyxDQUNqTTtJQUNELE9BQU9GLE1BQU0sQ0FBQztDQUNmO0FBRU0sZUFBZVEsU0FBUyxDQUFDUixNQUFNLEVBQUVTLFVBQVUsRUFBRUMsT0FBTyxFQUFFO0lBQzNELE1BQU1DLEVBQUUsR0FBR1gsTUFBTSxDQUFDVyxFQUFFLEVBQUU7SUFDdEIsTUFBTUMsTUFBTSxHQUFHLE1BQU1ELEVBQUUsQ0FBQ0YsVUFBVSxDQUFDQSxVQUFVLENBQUMsQ0FBQ0ksU0FBUyxDQUFDSCxPQUFPLENBQUM7SUFDakUsT0FBT0UsTUFBTSxDQUFDO0NBQ2Y7QUFFTSxlQUFlRSxhQUFhLENBQUNkLE1BQU0sRUFBRVMsVUFBVSxFQUFFTSxJQUFJLEVBQUU7SUFDNUQsTUFBTUosRUFBRSxHQUFHWCxNQUFNLENBQUNXLEVBQUUsRUFBRTtJQUN0QixNQUFNRCxPQUFPLEdBQUcsTUFBTUMsRUFBRSxDQUFDRixVQUFVLENBQUNBLFVBQVUsQ0FBQyxDQUFDTyxJQUFJLEVBQUUsQ0FBQ0QsSUFBSSxDQUFDQSxJQUFJLENBQUMsQ0FBQ0UsT0FBTyxFQUFFO0lBQzNFLE9BQU9QLE9BQU8sQ0FBQztDQUNoQjtBQUVNLGVBQWVRLFNBQVMsQ0FBQ2xCLE1BQU0sRUFBRVMsVUFBVSxFQUFFVSxFQUFFLEVBQUU7SUFDdEQsTUFBTVIsRUFBRSxHQUFHWCxNQUFNLENBQUNXLEVBQUUsRUFBRTtJQUN0QixNQUFNQSxFQUFFLENBQUNGLFVBQVUsQ0FBQ0EsVUFBVSxDQUFDLENBQUNXLFNBQVMsQ0FBQ0QsRUFBRSxDQUFDLENBQUM7SUFDOUMsT0FBTztDQUNSO0FBRU0sZUFBZUUsVUFBVSxDQUFDckIsTUFBTSxFQUFFUyxVQUFVLEVBQUVVLEVBQUUsRUFBRTtJQUN2RCxNQUFNUixFQUFFLEdBQUdYLE1BQU0sQ0FBQ1csRUFBRSxFQUFFO0lBQ3RCLE1BQU1ELE9BQU8sR0FBRyxNQUFNQyxFQUFFLENBQUNGLFVBQVUsQ0FBQ0EsVUFBVSxDQUFDLENBQUNhLE9BQU8sQ0FBQ0gsRUFBRSxDQUFDO0lBQzNELE9BQU9ULE9BQU8sQ0FBQztDQUNoQjtBQUVNLGVBQWVhLFNBQVMsQ0FBQ3ZCLE1BQU0sRUFBRVMsVUFBVSxFQUFFO0lBQ2xELE1BQU1FLEVBQUUsR0FBR1gsTUFBTSxDQUFDVyxFQUFFLEVBQUU7SUFDdEIsTUFBTUMsTUFBTSxHQUFHLE1BQU1ELEVBQUUsQ0FBQ0YsVUFBVSxDQUFDQSxVQUFVLENBQUMsQ0FBQ2UsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ3RFLE9BQU9aLE1BQU0sQ0FBQztDQUNmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpbWJpbmctYXBwLXYxLy4vaGVscGVycy9kYi11dGlsLmpzP2Y1NzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCkge1xyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICBgbW9uZ29kYitzcnY6Ly8ke3Byb2Nlc3MuZW52Lm1vbmdvZGJfdXNlcm5hbWV9OiR7cHJvY2Vzcy5lbnYubW9uZ29kYl9wYXNzd29yZH1AJHtwcm9jZXNzLmVudi5tb25nb2RiX2NsdXN0ZXJuYW1lfS50cnpyai5tb25nb2RiLm5ldC8ke3Byb2Nlc3MuZW52Lm1vbmdvZGJfZGF0YWJhc2V9P3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eWBcclxuICApO1xyXG4gIHJldHVybiBjbGllbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbnNlcnRHeW0oY2xpZW50LCBjb2xsZWN0aW9uLCBneW1EYXRhKSB7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKGNvbGxlY3Rpb24pLmluc2VydE9uZShneW1EYXRhKTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsR3ltRGF0YShjbGllbnQsIGNvbGxlY3Rpb24sIHNvcnQpIHtcclxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gIGNvbnN0IGd5bURhdGEgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKGNvbGxlY3Rpb24pLmZpbmQoKS5zb3J0KHNvcnQpLnRvQXJyYXkoKTtcclxuICByZXR1cm4gZ3ltRGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUd5bShjbGllbnQsIGNvbGxlY3Rpb24sIGlkKSB7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICBhd2FpdCBkYi5jb2xsZWN0aW9uKGNvbGxlY3Rpb24pLmRlbGV0ZU9uZShpZCk7XHJcbiAgcmV0dXJuO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0R3ltQnlJZChjbGllbnQsIGNvbGxlY3Rpb24sIGlkKSB7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICBjb25zdCBneW1EYXRhID0gYXdhaXQgZGIuY29sbGVjdGlvbihjb2xsZWN0aW9uKS5maW5kT25lKGlkKTtcclxuICByZXR1cm4gZ3ltRGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEd5bUlkcyhjbGllbnQsIGNvbGxlY3Rpb24pIHtcclxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oY29sbGVjdGlvbikuZGlzdGluY3QoXCJfaWRcIiwge30sIHt9KTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsImNvbm5lY3RUb0RhdGFiYXNlIiwiY2xpZW50IiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJtb25nb2RiX3VzZXJuYW1lIiwibW9uZ29kYl9wYXNzd29yZCIsIm1vbmdvZGJfY2x1c3Rlcm5hbWUiLCJtb25nb2RiX2RhdGFiYXNlIiwiaW5zZXJ0R3ltIiwiY29sbGVjdGlvbiIsImd5bURhdGEiLCJkYiIsInJlc3VsdCIsImluc2VydE9uZSIsImdldEFsbEd5bURhdGEiLCJzb3J0IiwiZmluZCIsInRvQXJyYXkiLCJkZWxldGVHeW0iLCJpZCIsImRlbGV0ZU9uZSIsImdldEd5bUJ5SWQiLCJmaW5kT25lIiwiZ2V0R3ltSWRzIiwiZGlzdGluY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./helpers/db-util.js\n");

/***/ }),

/***/ "(api)/./pages/api/gymData.js":
/*!******************************!*\
  !*** ./pages/api/gymData.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_db_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/db-util */ \"(api)/./helpers/db-util.js\");\n\n\nasync function handler(req, res) {\n    let client;\n    try {\n        client = await (0,_helpers_db_util__WEBPACK_IMPORTED_MODULE_1__.connectToDatabase)();\n    } catch (error) {\n        res.status(500).json({\n            message: \"could not connect to DB!\"\n        });\n        return;\n    }\n    if (req.method === \"POST\") {\n        const { name , address , description , image  } = req.body;\n        // TODO add more validation and complete\n        if (!name || !address || !description || !image) {\n            return;\n        }\n        const newGymData = {\n            name,\n            address,\n            description,\n            image,\n            walls: []\n        };\n        let result;\n        try {\n            result = await (0,_helpers_db_util__WEBPACK_IMPORTED_MODULE_1__.insertGym)(client, \"gym-data\", newGymData);\n            newGymData._id = result.insertedId;\n            res.status(201).json({\n                message: \"stored new gym data\",\n                message: newGymData\n            });\n        } catch (error) {\n            res.status(500).json({\n                message: \"failed to submit data\"\n            });\n            return;\n        }\n    }\n    if (req.method === \"GET\") {\n        try {\n            const gymData = await (0,_helpers_db_util__WEBPACK_IMPORTED_MODULE_1__.getAllGymData)(client, \"gym-data\", {\n                _id: -1\n            });\n            res.status(201).json({\n                gymData: gymData\n            });\n        } catch (error) {\n            res.status(500).json({\n                message: \"Getting data failed\"\n            });\n        }\n    }\n    if (req.method === \"DELETE\") {\n        try {\n            await (0,_helpers_db_util__WEBPACK_IMPORTED_MODULE_1__.deleteGym)(client, \"gym-data\", {\n                _id: (0,mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId)(req.body.id)\n            });\n            res.status(201).json({\n                message: \"Deleted gym from database\"\n            });\n        } catch (error) {\n            res.status(500).json({\n                message: \"Failed to delete gym data\"\n            });\n        }\n    }\n    client.close();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ3ltRGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW1DO0FBT0o7QUFFaEIsZUFBZU0sT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJQyxNQUFNO0lBQ1YsSUFBSTtRQUNGQSxNQUFNLEdBQUcsTUFBTVIsbUVBQWlCLEVBQUUsQ0FBQztLQUNwQyxDQUFDLE9BQU9TLEtBQUssRUFBRTtRQUNkRixHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSwwQkFBMEI7U0FBRSxDQUFDLENBQUM7UUFDOUQsT0FBTztLQUNSO0lBRUQsSUFBSU4sR0FBRyxDQUFDTyxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLE1BQU0sRUFBRUMsSUFBSSxHQUFFQyxPQUFPLEdBQUVDLFdBQVcsR0FBRUMsS0FBSyxHQUFFLEdBQUdYLEdBQUcsQ0FBQ1ksSUFBSTtRQUV0RCx3Q0FBd0M7UUFDeEMsSUFBSSxDQUFDSixJQUFJLElBQUksQ0FBQ0MsT0FBTyxJQUFJLENBQUNDLFdBQVcsSUFBSSxDQUFDQyxLQUFLLEVBQUU7WUFDL0MsT0FBTztTQUNSO1FBRUQsTUFBTUUsVUFBVSxHQUFHO1lBQ2pCTCxJQUFJO1lBQ0pDLE9BQU87WUFDUEMsV0FBVztZQUNYQyxLQUFLO1lBQ0xHLEtBQUssRUFBRSxFQUFFO1NBQ1Y7UUFFRCxJQUFJQyxNQUFNO1FBQ1YsSUFBSTtZQUNGQSxNQUFNLEdBQUcsTUFBTXBCLDJEQUFTLENBQUNPLE1BQU0sRUFBRSxVQUFVLEVBQUVXLFVBQVUsQ0FBQyxDQUFDO1lBQ3pEQSxVQUFVLENBQUNHLEdBQUcsR0FBR0QsTUFBTSxDQUFDRSxVQUFVLENBQUM7WUFDbkNoQixHQUFHLENBQ0FHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FDWEMsSUFBSSxDQUFDO2dCQUFFQyxPQUFPLEVBQUUscUJBQXFCO2dCQUFFQSxPQUFPLEVBQUVPLFVBQVU7YUFBRSxDQUFDLENBQUM7U0FDbEUsQ0FBQyxPQUFPVixLQUFLLEVBQUU7WUFDZEYsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUMsT0FBTyxFQUFFLHVCQUF1QjthQUFFLENBQUMsQ0FBQztZQUMzRCxPQUFPO1NBQ1I7S0FDRjtJQUNELElBQUlOLEdBQUcsQ0FBQ08sTUFBTSxLQUFLLEtBQUssRUFBRTtRQUN4QixJQUFJO1lBQ0YsTUFBTVcsT0FBTyxHQUFHLE1BQU1yQiwrREFBYSxDQUFDSyxNQUFNLEVBQUUsVUFBVSxFQUFFO2dCQUFFYyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2FBQUUsQ0FBQztZQUNwRWYsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRWEsT0FBTyxFQUFFQSxPQUFPO2FBQUUsQ0FBQyxDQUFDO1NBQzVDLENBQUMsT0FBT2YsS0FBSyxFQUFFO1lBQ2RGLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVDLE9BQU8sRUFBRSxxQkFBcUI7YUFBRSxDQUFDLENBQUM7U0FDMUQ7S0FDRjtJQUVELElBQUlOLEdBQUcsQ0FBQ08sTUFBTSxLQUFLLFFBQVEsRUFBRTtRQUMzQixJQUFJO1lBQ0YsTUFBTVgsMkRBQVMsQ0FBQ00sTUFBTSxFQUFFLFVBQVUsRUFBRTtnQkFBRWMsR0FBRyxFQUFFdkIsaURBQVEsQ0FBQ08sR0FBRyxDQUFDWSxJQUFJLENBQUNPLEVBQUUsQ0FBQzthQUFFLENBQUMsQ0FBQztZQUNwRWxCLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVDLE9BQU8sRUFBRSwyQkFBMkI7YUFBRSxDQUFDLENBQUM7U0FDaEUsQ0FBQyxPQUFPSCxLQUFLLEVBQUU7WUFDZEYsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUMsT0FBTyxFQUFFLDJCQUEyQjthQUFFLENBQUMsQ0FBQztTQUNoRTtLQUNGO0lBRURKLE1BQU0sQ0FBQ2tCLEtBQUssRUFBRSxDQUFDO0NBQ2hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpbWJpbmctYXBwLXYxLy4vcGFnZXMvYXBpL2d5bURhdGEuanM/YmQ0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XHJcbmltcG9ydCB7XHJcbiAgY29ubmVjdFRvRGF0YWJhc2UsXHJcbiAgaW5zZXJ0R3ltLFxyXG4gIGRlbGV0ZUd5bSxcclxuICBnZXRBbGxHeW1EYXRhLFxyXG4gIGdldEd5bUJ5SWQsXHJcbn0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvZGItdXRpbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGxldCBjbGllbnQ7XHJcbiAgdHJ5IHtcclxuICAgIGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogXCJjb3VsZCBub3QgY29ubmVjdCB0byBEQiFcIiB9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgY29uc3QgeyBuYW1lLCBhZGRyZXNzLCBkZXNjcmlwdGlvbiwgaW1hZ2UgfSA9IHJlcS5ib2R5O1xyXG5cclxuICAgIC8vIFRPRE8gYWRkIG1vcmUgdmFsaWRhdGlvbiBhbmQgY29tcGxldGVcclxuICAgIGlmICghbmFtZSB8fCAhYWRkcmVzcyB8fCAhZGVzY3JpcHRpb24gfHwgIWltYWdlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuZXdHeW1EYXRhID0ge1xyXG4gICAgICBuYW1lLFxyXG4gICAgICBhZGRyZXNzLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgaW1hZ2UsXHJcbiAgICAgIHdhbGxzOiBbXSxcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHJlc3VsdDtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJlc3VsdCA9IGF3YWl0IGluc2VydEd5bShjbGllbnQsIFwiZ3ltLWRhdGFcIiwgbmV3R3ltRGF0YSk7XHJcbiAgICAgIG5ld0d5bURhdGEuX2lkID0gcmVzdWx0Lmluc2VydGVkSWQ7XHJcbiAgICAgIHJlc1xyXG4gICAgICAgIC5zdGF0dXMoMjAxKVxyXG4gICAgICAgIC5qc29uKHsgbWVzc2FnZTogXCJzdG9yZWQgbmV3IGd5bSBkYXRhXCIsIG1lc3NhZ2U6IG5ld0d5bURhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IFwiZmFpbGVkIHRvIHN1Ym1pdCBkYXRhXCIgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGd5bURhdGEgPSBhd2FpdCBnZXRBbGxHeW1EYXRhKGNsaWVudCwgXCJneW0tZGF0YVwiLCB7IF9pZDogLTEgfSk7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgZ3ltRGF0YTogZ3ltRGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogXCJHZXR0aW5nIGRhdGEgZmFpbGVkXCIgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJERUxFVEVcIikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgZGVsZXRlR3ltKGNsaWVudCwgXCJneW0tZGF0YVwiLCB7IF9pZDogT2JqZWN0SWQocmVxLmJvZHkuaWQpIH0pO1xyXG4gICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6IFwiRGVsZXRlZCBneW0gZnJvbSBkYXRhYmFzZVwiIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBcIkZhaWxlZCB0byBkZWxldGUgZ3ltIGRhdGFcIiB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsaWVudC5jbG9zZSgpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJPYmplY3RJZCIsImNvbm5lY3RUb0RhdGFiYXNlIiwiaW5zZXJ0R3ltIiwiZGVsZXRlR3ltIiwiZ2V0QWxsR3ltRGF0YSIsImdldEd5bUJ5SWQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY2xpZW50IiwiZXJyb3IiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsIm1ldGhvZCIsIm5hbWUiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsImJvZHkiLCJuZXdHeW1EYXRhIiwid2FsbHMiLCJyZXN1bHQiLCJfaWQiLCJpbnNlcnRlZElkIiwiZ3ltRGF0YSIsImlkIiwiY2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/gymData.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/gymData.js"));
module.exports = __webpack_exports__;

})();