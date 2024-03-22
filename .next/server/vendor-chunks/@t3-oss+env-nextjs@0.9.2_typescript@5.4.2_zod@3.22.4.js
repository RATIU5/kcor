"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@t3-oss+env-nextjs@0.9.2_typescript@5.4.2_zod@3.22.4";
exports.ids = ["vendor-chunks/@t3-oss+env-nextjs@0.9.2_typescript@5.4.2_zod@3.22.4"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/@t3-oss+env-nextjs@0.9.2_typescript@5.4.2_zod@3.22.4/node_modules/@t3-oss/env-nextjs/dist/index.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@t3-oss+env-nextjs@0.9.2_typescript@5.4.2_zod@3.22.4/node_modules/@t3-oss/env-nextjs/dist/index.js ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createEnv: () => (/* binding */ createEnv)\n/* harmony export */ });\n/* harmony import */ var _t3_oss_env_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @t3-oss/env-core */ \"(rsc)/./node_modules/.pnpm/@t3-oss+env-core@0.9.2_typescript@5.4.2_zod@3.22.4/node_modules/@t3-oss/env-core/dist/index.js\");\n\n\nconst CLIENT_PREFIX = \"NEXT_PUBLIC_\";\nfunction createEnv(opts) {\n    const client = typeof opts.client === \"object\" ? opts.client : {};\n    const server = typeof opts.server === \"object\" ? opts.server : {};\n    const shared = opts.shared;\n    const runtimeEnv = opts.runtimeEnv ? opts.runtimeEnv : {\n        ...process.env,\n        ...opts.experimental__runtimeEnv\n    };\n    return (0,_t3_oss_env_core__WEBPACK_IMPORTED_MODULE_0__.createEnv)({\n        ...opts,\n        shared,\n        client,\n        server,\n        clientPrefix: CLIENT_PREFIX,\n        runtimeEnv\n    });\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQHQzLW9zcytlbnYtbmV4dGpzQDAuOS4yX3R5cGVzY3JpcHRANS40LjJfem9kQDMuMjIuNC9ub2RlX21vZHVsZXMvQHQzLW9zcy9lbnYtbmV4dGpzL2Rpc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNEQ7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMkRBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2tjb3IvLi9ub2RlX21vZHVsZXMvLnBucG0vQHQzLW9zcytlbnYtbmV4dGpzQDAuOS4yX3R5cGVzY3JpcHRANS40LjJfem9kQDMuMjIuNC9ub2RlX21vZHVsZXMvQHQzLW9zcy9lbnYtbmV4dGpzL2Rpc3QvaW5kZXguanM/ZjdkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbnYgYXMgY3JlYXRlRW52JDEgfSBmcm9tICdAdDMtb3NzL2Vudi1jb3JlJztcblxuY29uc3QgQ0xJRU5UX1BSRUZJWCA9IFwiTkVYVF9QVUJMSUNfXCI7XG5mdW5jdGlvbiBjcmVhdGVFbnYob3B0cykge1xuICAgIGNvbnN0IGNsaWVudCA9IHR5cGVvZiBvcHRzLmNsaWVudCA9PT0gXCJvYmplY3RcIiA/IG9wdHMuY2xpZW50IDoge307XG4gICAgY29uc3Qgc2VydmVyID0gdHlwZW9mIG9wdHMuc2VydmVyID09PSBcIm9iamVjdFwiID8gb3B0cy5zZXJ2ZXIgOiB7fTtcbiAgICBjb25zdCBzaGFyZWQgPSBvcHRzLnNoYXJlZDtcbiAgICBjb25zdCBydW50aW1lRW52ID0gb3B0cy5ydW50aW1lRW52ID8gb3B0cy5ydW50aW1lRW52IDoge1xuICAgICAgICAuLi5wcm9jZXNzLmVudixcbiAgICAgICAgLi4ub3B0cy5leHBlcmltZW50YWxfX3J1bnRpbWVFbnZcbiAgICB9O1xuICAgIHJldHVybiBjcmVhdGVFbnYkMSh7XG4gICAgICAgIC4uLm9wdHMsXG4gICAgICAgIHNoYXJlZCxcbiAgICAgICAgY2xpZW50LFxuICAgICAgICBzZXJ2ZXIsXG4gICAgICAgIGNsaWVudFByZWZpeDogQ0xJRU5UX1BSRUZJWCxcbiAgICAgICAgcnVudGltZUVudlxuICAgIH0pO1xufVxuXG5leHBvcnQgeyBjcmVhdGVFbnYgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@t3-oss+env-nextjs@0.9.2_typescript@5.4.2_zod@3.22.4/node_modules/@t3-oss/env-nextjs/dist/index.js\n");

/***/ })

};
;