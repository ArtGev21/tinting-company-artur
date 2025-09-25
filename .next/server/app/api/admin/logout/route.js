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
exports.id = "app/api/admin/logout/route";
exports.ids = ["app/api/admin/logout/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Flogout%2Froute&page=%2Fapi%2Fadmin%2Flogout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Flogout%2Froute.ts&appDir=%2Fhome%2Fproject%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Flogout%2Froute&page=%2Fapi%2Fadmin%2Flogout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Flogout%2Froute.ts&appDir=%2Fhome%2Fproject%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_project_app_api_admin_logout_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/admin/logout/route.ts */ \"(rsc)/./app/api/admin/logout/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/admin/logout/route\",\n        pathname: \"/api/admin/logout\",\n        filename: \"route\",\n        bundlePath: \"app/api/admin/logout/route\"\n    },\n    resolvedPagePath: \"/home/project/app/api/admin/logout/route.ts\",\n    nextConfigOutput,\n    userland: _home_project_app_api_admin_logout_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/admin/logout/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhZG1pbiUyRmxvZ291dCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYWRtaW4lMkZsb2dvdXQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZhZG1pbiUyRmxvZ291dCUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGcHJvamVjdCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGaG9tZSUyRnByb2plY3QmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ0w7QUFDeEU7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvPzkwNzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL2hvbWUvcHJvamVjdC9hcHAvYXBpL2FkbWluL2xvZ291dC9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYWRtaW4vbG9nb3V0L3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYWRtaW4vbG9nb3V0XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hZG1pbi9sb2dvdXQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvaG9tZS9wcm9qZWN0L2FwcC9hcGkvYWRtaW4vbG9nb3V0L3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hZG1pbi9sb2dvdXQvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Flogout%2Froute&page=%2Fapi%2Fadmin%2Flogout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Flogout%2Froute.ts&appDir=%2Fhome%2Fproject%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/admin/logout/route.ts":
/*!***************************************!*\
  !*** ./app/api/admin/logout/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_supabaseServer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/supabaseServer */ \"(rsc)/./lib/supabaseServer.ts\");\n\n\nasync function POST() {\n    try {\n        await _lib_supabaseServer__WEBPACK_IMPORTED_MODULE_1__.supabaseServer.auth.signOut();\n        const response = next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true\n        });\n        response.cookies.delete(\"sb-access-token\");\n        response.cookies.delete(\"sb-refresh-token\");\n        return response;\n    } catch (err) {\n        console.error(\"Logout route error:\", err);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FkbWluL2xvZ291dC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFDVztBQUUvQyxlQUFlRTtJQUNwQixJQUFJO1FBQ0YsTUFBTUQsK0RBQWNBLENBQUNFLElBQUksQ0FBQ0MsT0FBTztRQUVqQyxNQUFNQyxXQUFXTCxxREFBWUEsQ0FBQ00sSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBSztRQUNuREYsU0FBU0csT0FBTyxDQUFDQyxNQUFNLENBQUM7UUFDeEJKLFNBQVNHLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDO1FBRXhCLE9BQU9KO0lBQ1QsRUFBRSxPQUFPSyxLQUFLO1FBQ1pDLFFBQVFDLEtBQUssQ0FBQyx1QkFBdUJGO1FBQ3JDLE9BQU9WLHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7WUFBRU0sT0FBTztRQUF3QixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUM3RTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLy4vYXBwL2FwaS9hZG1pbi9sb2dvdXQvcm91dGUudHM/MzAwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBzdXBhYmFzZVNlcnZlciB9IGZyb20gJ0AvbGliL3N1cGFiYXNlU2VydmVyJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgc3VwYWJhc2VTZXJ2ZXIuYXV0aC5zaWduT3V0KCk7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogdHJ1ZSB9KTtcbiAgICByZXNwb25zZS5jb29raWVzLmRlbGV0ZSgnc2ItYWNjZXNzLXRva2VuJyk7XG4gICAgcmVzcG9uc2UuY29va2llcy5kZWxldGUoJ3NiLXJlZnJlc2gtdG9rZW4nKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcignTG9nb3V0IHJvdXRlIGVycm9yOicsIGVycik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3InIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwic3VwYWJhc2VTZXJ2ZXIiLCJQT1NUIiwiYXV0aCIsInNpZ25PdXQiLCJyZXNwb25zZSIsImpzb24iLCJzdWNjZXNzIiwiY29va2llcyIsImRlbGV0ZSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/admin/logout/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/supabaseServer.ts":
/*!*******************************!*\
  !*** ./lib/supabaseServer.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   supabaseServer: () => (/* binding */ supabaseServer)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/./node_modules/@supabase/supabase-js/dist/module/index.js\");\n// lib/supabaseServer.ts\n\nif (false) {}\nif (!process.env.SUPABASE_SERVICE_ROLE_KEY) throw new Error(\"Missing env.SUPABASE_SERVICE_ROLE_KEY\");\n// /**\n//  * Supabase Server Client\n//  * Uses service role key for server-side operations\n//  * Should NEVER be used in client components\n//  */\n// import { createClient } from '@supabase/supabase-js';\n// if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {\n//   throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL');\n// }\n// if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {\n//   throw new Error('Missing env.SUPABASE_SERVICE_ROLE_KEY');\n// }\nconst supabaseServer = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(\"https://jswuwbifxdcntrtzeani.supabase.co\", process.env.SUPABASE_SERVICE_ROLE_KEY, {\n    auth: {\n        autoRefreshToken: false,\n        persistSession: false\n    }\n}); // export type Database = {\n //   public: {\n //     Tables: {\n //       admin_users: {\n //         Row: {\n //           id: string;\n //           username: string;\n //           password_hash: string;\n //           created_at: string;\n //         };\n //         Insert: {\n //           id?: string;\n //           username: string;\n //           password_hash: string;\n //           created_at?: string;\n //         };\n //         Update: {\n //           id?: string;\n //           username?: string;\n //           password_hash?: string;\n //           created_at?: string;\n //         };\n //       };\n //       sales_reps: {\n //         Row: {\n //           id: string;\n //           name: string;\n //           rep_id: string;\n //           created_at: string;\n //         };\n //         Insert: {\n //           id?: string;\n //           name: string;\n //           rep_id: string;\n //           created_at?: string;\n //         };\n //         Update: {\n //           id?: string;\n //           name?: string;\n //           rep_id?: string;\n //           created_at?: string;\n //         };\n //       };\n //       bookings: {\n //         Row: {\n //           id: string;\n //           name: string;\n //           address: string;\n //           service_date: string;\n //           service_location: string;\n //           email: string;\n //           sales_rep_id: string;\n //           created_at: string;\n //         };\n //         Insert: {\n //           id?: string;\n //           name: string;\n //           address: string;\n //           service_date: string;\n //           service_location: string;\n //           email: string;\n //           sales_rep_id: string;\n //           created_at?: string;\n //         };\n //         Update: {\n //           id?: string;\n //           name?: string;\n //           address?: string;\n //           service_date?: string;\n //           service_location?: string;\n //           email?: string;\n //           sales_rep_id?: string;\n //           created_at?: string;\n //         };\n //       };\n //     };\n //   };\n // };\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvc3VwYWJhc2VTZXJ2ZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3QkFBd0I7QUFDNkI7QUFFckQsSUFBSSxLQUFxQyxFQUFFLEVBQWdCO0FBQzNELElBQUksQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDRyx5QkFBeUIsRUFBRSxNQUFNLElBQUlELE1BQU07QUFtQjVELE1BQU07QUFDTiw0QkFBNEI7QUFDNUIsc0RBQXNEO0FBQ3RELCtDQUErQztBQUMvQyxNQUFNO0FBRU4sd0RBQXdEO0FBRXhELCtDQUErQztBQUMvQyw2REFBNkQ7QUFDN0QsSUFBSTtBQUVKLGdEQUFnRDtBQUNoRCw4REFBOEQ7QUFDOUQsSUFBSTtBQUVHLE1BQU1FLGlCQUFpQk4sbUVBQVlBLENBQ3hDQywwQ0FBb0MsRUFDcENBLFFBQVFDLEdBQUcsQ0FBQ0cseUJBQXlCLEVBQ3JDO0lBQ0VFLE1BQU07UUFDSkMsa0JBQWtCO1FBQ2xCQyxnQkFBZ0I7SUFDbEI7QUFDRixHQUNBLENBRUYsMkJBQTJCO0NBQzNCLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsdUJBQXVCO0NBQ3ZCLGlCQUFpQjtDQUNqQix3QkFBd0I7Q0FDeEIsOEJBQThCO0NBQzlCLG1DQUFtQztDQUNuQyxnQ0FBZ0M7Q0FDaEMsYUFBYTtDQUNiLG9CQUFvQjtDQUNwQix5QkFBeUI7Q0FDekIsOEJBQThCO0NBQzlCLG1DQUFtQztDQUNuQyxpQ0FBaUM7Q0FDakMsYUFBYTtDQUNiLG9CQUFvQjtDQUNwQix5QkFBeUI7Q0FDekIsK0JBQStCO0NBQy9CLG9DQUFvQztDQUNwQyxpQ0FBaUM7Q0FDakMsYUFBYTtDQUNiLFdBQVc7Q0FDWCxzQkFBc0I7Q0FDdEIsaUJBQWlCO0NBQ2pCLHdCQUF3QjtDQUN4QiwwQkFBMEI7Q0FDMUIsNEJBQTRCO0NBQzVCLGdDQUFnQztDQUNoQyxhQUFhO0NBQ2Isb0JBQW9CO0NBQ3BCLHlCQUF5QjtDQUN6QiwwQkFBMEI7Q0FDMUIsNEJBQTRCO0NBQzVCLGlDQUFpQztDQUNqQyxhQUFhO0NBQ2Isb0JBQW9CO0NBQ3BCLHlCQUF5QjtDQUN6QiwyQkFBMkI7Q0FDM0IsNkJBQTZCO0NBQzdCLGlDQUFpQztDQUNqQyxhQUFhO0NBQ2IsV0FBVztDQUNYLG9CQUFvQjtDQUNwQixpQkFBaUI7Q0FDakIsd0JBQXdCO0NBQ3hCLDBCQUEwQjtDQUMxQiw2QkFBNkI7Q0FDN0Isa0NBQWtDO0NBQ2xDLHNDQUFzQztDQUN0QywyQkFBMkI7Q0FDM0Isa0NBQWtDO0NBQ2xDLGdDQUFnQztDQUNoQyxhQUFhO0NBQ2Isb0JBQW9CO0NBQ3BCLHlCQUF5QjtDQUN6QiwwQkFBMEI7Q0FDMUIsNkJBQTZCO0NBQzdCLGtDQUFrQztDQUNsQyxzQ0FBc0M7Q0FDdEMsMkJBQTJCO0NBQzNCLGtDQUFrQztDQUNsQyxpQ0FBaUM7Q0FDakMsYUFBYTtDQUNiLG9CQUFvQjtDQUNwQix5QkFBeUI7Q0FDekIsMkJBQTJCO0NBQzNCLDhCQUE4QjtDQUM5QixtQ0FBbUM7Q0FDbkMsdUNBQXVDO0NBQ3ZDLDRCQUE0QjtDQUM1QixtQ0FBbUM7Q0FDbkMsaUNBQWlDO0NBQ2pDLGFBQWE7Q0FDYixXQUFXO0NBQ1gsU0FBUztDQUNULE9BQU87Q0FDUCxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLy4vbGliL3N1cGFiYXNlU2VydmVyLnRzP2M3OGMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGliL3N1cGFiYXNlU2VydmVyLnRzXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAc3VwYWJhc2Uvc3VwYWJhc2UtanMnO1xuXG5pZiAoIXByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCkgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwnKTtcbmlmICghcHJvY2Vzcy5lbnYuU1VQQUJBU0VfU0VSVklDRV9ST0xFX0tFWSkgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGVudi5TVVBBQkFTRV9TRVJWSUNFX1JPTEVfS0VZJyk7XG5cbi8vIGV4cG9ydCBjb25zdCBzdXBhYmFzZVNlcnZlciA9IGNyZWF0ZUNsaWVudChcbi8vICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMLFxuLy8gICBwcm9jZXNzLmVudi5TVVBBQkFTRV9TRVJWSUNFX1JPTEVfS0VZXG4vLyApO1xuXG5leHBvcnQgdHlwZSBEYXRhYmFzZSA9IHtcbiAgcHVibGljOiB7XG4gICAgVGFibGVzOiB7XG4gICAgICBhZG1pbl91c2Vyczoge1xuICAgICAgICBSb3c6IHsgaWQ6IHN0cmluZzsgdXNlcm5hbWU6IHN0cmluZzsgY3JlYXRlZF9hdDogc3RyaW5nIH07XG4gICAgICAgIEluc2VydDogeyB1c2VybmFtZTogc3RyaW5nOyBjcmVhdGVkX2F0Pzogc3RyaW5nIH07XG4gICAgICAgIFVwZGF0ZTogeyB1c2VybmFtZT86IHN0cmluZyB9O1xuICAgICAgfTtcbiAgICB9O1xuICB9O1xufTtcblxuLy8gLyoqXG4vLyAgKiBTdXBhYmFzZSBTZXJ2ZXIgQ2xpZW50XG4vLyAgKiBVc2VzIHNlcnZpY2Ugcm9sZSBrZXkgZm9yIHNlcnZlci1zaWRlIG9wZXJhdGlvbnNcbi8vICAqIFNob3VsZCBORVZFUiBiZSB1c2VkIGluIGNsaWVudCBjb21wb25lbnRzXG4vLyAgKi9cblxuLy8gaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJztcblxuLy8gaWYgKCFwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwpIHtcbi8vICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwnKTtcbi8vIH1cblxuLy8gaWYgKCFwcm9jZXNzLmVudi5TVVBBQkFTRV9TRVJWSUNFX1JPTEVfS0VZKSB7XG4vLyAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBlbnYuU1VQQUJBU0VfU0VSVklDRV9ST0xFX0tFWScpO1xuLy8gfVxuXG5leHBvcnQgY29uc3Qgc3VwYWJhc2VTZXJ2ZXIgPSBjcmVhdGVDbGllbnQoXG4gIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCxcbiAgcHJvY2Vzcy5lbnYuU1VQQUJBU0VfU0VSVklDRV9ST0xFX0tFWSxcbiAge1xuICAgIGF1dGg6IHtcbiAgICAgIGF1dG9SZWZyZXNoVG9rZW46IGZhbHNlLFxuICAgICAgcGVyc2lzdFNlc3Npb246IGZhbHNlXG4gICAgfVxuICB9XG4pO1xuXG4vLyBleHBvcnQgdHlwZSBEYXRhYmFzZSA9IHtcbi8vICAgcHVibGljOiB7XG4vLyAgICAgVGFibGVzOiB7XG4vLyAgICAgICBhZG1pbl91c2Vyczoge1xuLy8gICAgICAgICBSb3c6IHtcbi8vICAgICAgICAgICBpZDogc3RyaW5nO1xuLy8gICAgICAgICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4vLyAgICAgICAgICAgcGFzc3dvcmRfaGFzaDogc3RyaW5nO1xuLy8gICAgICAgICAgIGNyZWF0ZWRfYXQ6IHN0cmluZztcbi8vICAgICAgICAgfTtcbi8vICAgICAgICAgSW5zZXJ0OiB7XG4vLyAgICAgICAgICAgaWQ/OiBzdHJpbmc7XG4vLyAgICAgICAgICAgdXNlcm5hbWU6IHN0cmluZztcbi8vICAgICAgICAgICBwYXNzd29yZF9oYXNoOiBzdHJpbmc7XG4vLyAgICAgICAgICAgY3JlYXRlZF9hdD86IHN0cmluZztcbi8vICAgICAgICAgfTtcbi8vICAgICAgICAgVXBkYXRlOiB7XG4vLyAgICAgICAgICAgaWQ/OiBzdHJpbmc7XG4vLyAgICAgICAgICAgdXNlcm5hbWU/OiBzdHJpbmc7XG4vLyAgICAgICAgICAgcGFzc3dvcmRfaGFzaD86IHN0cmluZztcbi8vICAgICAgICAgICBjcmVhdGVkX2F0Pzogc3RyaW5nO1xuLy8gICAgICAgICB9O1xuLy8gICAgICAgfTtcbi8vICAgICAgIHNhbGVzX3JlcHM6IHtcbi8vICAgICAgICAgUm93OiB7XG4vLyAgICAgICAgICAgaWQ6IHN0cmluZztcbi8vICAgICAgICAgICBuYW1lOiBzdHJpbmc7XG4vLyAgICAgICAgICAgcmVwX2lkOiBzdHJpbmc7XG4vLyAgICAgICAgICAgY3JlYXRlZF9hdDogc3RyaW5nO1xuLy8gICAgICAgICB9O1xuLy8gICAgICAgICBJbnNlcnQ6IHtcbi8vICAgICAgICAgICBpZD86IHN0cmluZztcbi8vICAgICAgICAgICBuYW1lOiBzdHJpbmc7XG4vLyAgICAgICAgICAgcmVwX2lkOiBzdHJpbmc7XG4vLyAgICAgICAgICAgY3JlYXRlZF9hdD86IHN0cmluZztcbi8vICAgICAgICAgfTtcbi8vICAgICAgICAgVXBkYXRlOiB7XG4vLyAgICAgICAgICAgaWQ/OiBzdHJpbmc7XG4vLyAgICAgICAgICAgbmFtZT86IHN0cmluZztcbi8vICAgICAgICAgICByZXBfaWQ/OiBzdHJpbmc7XG4vLyAgICAgICAgICAgY3JlYXRlZF9hdD86IHN0cmluZztcbi8vICAgICAgICAgfTtcbi8vICAgICAgIH07XG4vLyAgICAgICBib29raW5nczoge1xuLy8gICAgICAgICBSb3c6IHtcbi8vICAgICAgICAgICBpZDogc3RyaW5nO1xuLy8gICAgICAgICAgIG5hbWU6IHN0cmluZztcbi8vICAgICAgICAgICBhZGRyZXNzOiBzdHJpbmc7XG4vLyAgICAgICAgICAgc2VydmljZV9kYXRlOiBzdHJpbmc7XG4vLyAgICAgICAgICAgc2VydmljZV9sb2NhdGlvbjogc3RyaW5nO1xuLy8gICAgICAgICAgIGVtYWlsOiBzdHJpbmc7XG4vLyAgICAgICAgICAgc2FsZXNfcmVwX2lkOiBzdHJpbmc7XG4vLyAgICAgICAgICAgY3JlYXRlZF9hdDogc3RyaW5nO1xuLy8gICAgICAgICB9O1xuLy8gICAgICAgICBJbnNlcnQ6IHtcbi8vICAgICAgICAgICBpZD86IHN0cmluZztcbi8vICAgICAgICAgICBuYW1lOiBzdHJpbmc7XG4vLyAgICAgICAgICAgYWRkcmVzczogc3RyaW5nO1xuLy8gICAgICAgICAgIHNlcnZpY2VfZGF0ZTogc3RyaW5nO1xuLy8gICAgICAgICAgIHNlcnZpY2VfbG9jYXRpb246IHN0cmluZztcbi8vICAgICAgICAgICBlbWFpbDogc3RyaW5nO1xuLy8gICAgICAgICAgIHNhbGVzX3JlcF9pZDogc3RyaW5nO1xuLy8gICAgICAgICAgIGNyZWF0ZWRfYXQ/OiBzdHJpbmc7XG4vLyAgICAgICAgIH07XG4vLyAgICAgICAgIFVwZGF0ZToge1xuLy8gICAgICAgICAgIGlkPzogc3RyaW5nO1xuLy8gICAgICAgICAgIG5hbWU/OiBzdHJpbmc7XG4vLyAgICAgICAgICAgYWRkcmVzcz86IHN0cmluZztcbi8vICAgICAgICAgICBzZXJ2aWNlX2RhdGU/OiBzdHJpbmc7XG4vLyAgICAgICAgICAgc2VydmljZV9sb2NhdGlvbj86IHN0cmluZztcbi8vICAgICAgICAgICBlbWFpbD86IHN0cmluZztcbi8vICAgICAgICAgICBzYWxlc19yZXBfaWQ/OiBzdHJpbmc7XG4vLyAgICAgICAgICAgY3JlYXRlZF9hdD86IHN0cmluZztcbi8vICAgICAgICAgfTtcbi8vICAgICAgIH07XG4vLyAgICAgfTtcbi8vICAgfTtcbi8vIH07Il0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwiLCJFcnJvciIsIlNVUEFCQVNFX1NFUlZJQ0VfUk9MRV9LRVkiLCJzdXBhYmFzZVNlcnZlciIsImF1dGgiLCJhdXRvUmVmcmVzaFRva2VuIiwicGVyc2lzdFNlc3Npb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/supabaseServer.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/tr46","vendor-chunks/whatwg-url","vendor-chunks/webidl-conversions"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Flogout%2Froute&page=%2Fapi%2Fadmin%2Flogout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Flogout%2Froute.ts&appDir=%2Fhome%2Fproject%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();