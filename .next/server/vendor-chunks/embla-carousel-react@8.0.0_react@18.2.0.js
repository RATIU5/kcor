"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/embla-carousel-react@8.0.0_react@18.2.0";
exports.ids = ["vendor-chunks/embla-carousel-react@8.0.0_react@18.2.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/embla-carousel-react@8.0.0_react@18.2.0/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/embla-carousel-react@8.0.0_react@18.2.0/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useEmblaCarousel)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.1.3_@babel+core@7.24.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var embla_carousel_reactive_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! embla-carousel-reactive-utils */ \"(ssr)/./node_modules/.pnpm/embla-carousel-reactive-utils@8.0.0_embla-carousel@8.0.0/node_modules/embla-carousel-reactive-utils/esm/embla-carousel-reactive-utils.esm.js\");\n/* harmony import */ var embla_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! embla-carousel */ \"(ssr)/./node_modules/.pnpm/embla-carousel@8.0.0/node_modules/embla-carousel/esm/embla-carousel.esm.js\");\n\n\n\n\nfunction useEmblaCarousel(options = {}, plugins = []) {\n  const storedOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(options);\n  const storedPlugins = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(plugins);\n  const [emblaApi, setEmblaApi] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const [viewport, setViewport] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const reInit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {\n    if (emblaApi) emblaApi.reInit(storedOptions.current, storedPlugins.current);\n  }, [emblaApi]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if ((0,embla_carousel_reactive_utils__WEBPACK_IMPORTED_MODULE_1__.canUseDOM)() && viewport) {\n      embla_carousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"].globalOptions = useEmblaCarousel.globalOptions;\n      const newEmblaApi = (0,embla_carousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(viewport, storedOptions.current, storedPlugins.current);\n      setEmblaApi(newEmblaApi);\n      return () => newEmblaApi.destroy();\n    } else {\n      setEmblaApi(undefined);\n    }\n  }, [viewport, setEmblaApi]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if ((0,embla_carousel_reactive_utils__WEBPACK_IMPORTED_MODULE_1__.areOptionsEqual)(storedOptions.current, options)) return;\n    storedOptions.current = options;\n    reInit();\n  }, [options, reInit]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if ((0,embla_carousel_reactive_utils__WEBPACK_IMPORTED_MODULE_1__.arePluginsEqual)(storedPlugins.current, plugins)) return;\n    storedPlugins.current = plugins;\n    reInit();\n  }, [plugins, reInit]);\n  return [setViewport, emblaApi];\n}\nuseEmblaCarousel.globalOptions = undefined;\n\n\n//# sourceMappingURL=embla-carousel-react.esm.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vZW1ibGEtY2Fyb3VzZWwtcmVhY3RAOC4wLjBfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9lbWJsYS1jYXJvdXNlbC1yZWFjdC9lc20vZW1ibGEtY2Fyb3VzZWwtcmVhY3QuZXNtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBaUU7QUFDMkI7QUFDakQ7O0FBRTNDLHNDQUFzQztBQUN0Qyx3QkFBd0IsNkNBQU07QUFDOUIsd0JBQXdCLDZDQUFNO0FBQzlCLGtDQUFrQywrQ0FBUTtBQUMxQyxrQ0FBa0MsK0NBQVE7QUFDMUMsaUJBQWlCLGtEQUFXO0FBQzVCO0FBQ0EsR0FBRztBQUNILEVBQUUsZ0RBQVM7QUFDWCxRQUFRLHdFQUFTO0FBQ2pCLE1BQU0sc0RBQWE7QUFDbkIsMEJBQTBCLDBEQUFhO0FBQ3ZDO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFLGdEQUFTO0FBQ1gsUUFBUSw4RUFBZTtBQUN2QjtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsZ0RBQVM7QUFDWCxRQUFRLDhFQUFlO0FBQ3ZCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUV1QztBQUN2QyIsInNvdXJjZXMiOlsid2VicGFjazovL2tjb3IvLi9ub2RlX21vZHVsZXMvLnBucG0vZW1ibGEtY2Fyb3VzZWwtcmVhY3RAOC4wLjBfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9lbWJsYS1jYXJvdXNlbC1yZWFjdC9lc20vZW1ibGEtY2Fyb3VzZWwtcmVhY3QuZXNtLmpzPzRkMWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNhblVzZURPTSwgYXJlT3B0aW9uc0VxdWFsLCBhcmVQbHVnaW5zRXF1YWwgfSBmcm9tICdlbWJsYS1jYXJvdXNlbC1yZWFjdGl2ZS11dGlscyc7XG5pbXBvcnQgRW1ibGFDYXJvdXNlbCBmcm9tICdlbWJsYS1jYXJvdXNlbCc7XG5cbmZ1bmN0aW9uIHVzZUVtYmxhQ2Fyb3VzZWwob3B0aW9ucyA9IHt9LCBwbHVnaW5zID0gW10pIHtcbiAgY29uc3Qgc3RvcmVkT3B0aW9ucyA9IHVzZVJlZihvcHRpb25zKTtcbiAgY29uc3Qgc3RvcmVkUGx1Z2lucyA9IHVzZVJlZihwbHVnaW5zKTtcbiAgY29uc3QgW2VtYmxhQXBpLCBzZXRFbWJsYUFwaV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdmlld3BvcnQsIHNldFZpZXdwb3J0XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IHJlSW5pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoZW1ibGFBcGkpIGVtYmxhQXBpLnJlSW5pdChzdG9yZWRPcHRpb25zLmN1cnJlbnQsIHN0b3JlZFBsdWdpbnMuY3VycmVudCk7XG4gIH0sIFtlbWJsYUFwaV0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjYW5Vc2VET00oKSAmJiB2aWV3cG9ydCkge1xuICAgICAgRW1ibGFDYXJvdXNlbC5nbG9iYWxPcHRpb25zID0gdXNlRW1ibGFDYXJvdXNlbC5nbG9iYWxPcHRpb25zO1xuICAgICAgY29uc3QgbmV3RW1ibGFBcGkgPSBFbWJsYUNhcm91c2VsKHZpZXdwb3J0LCBzdG9yZWRPcHRpb25zLmN1cnJlbnQsIHN0b3JlZFBsdWdpbnMuY3VycmVudCk7XG4gICAgICBzZXRFbWJsYUFwaShuZXdFbWJsYUFwaSk7XG4gICAgICByZXR1cm4gKCkgPT4gbmV3RW1ibGFBcGkuZGVzdHJveSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFbWJsYUFwaSh1bmRlZmluZWQpO1xuICAgIH1cbiAgfSwgW3ZpZXdwb3J0LCBzZXRFbWJsYUFwaV0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhcmVPcHRpb25zRXF1YWwoc3RvcmVkT3B0aW9ucy5jdXJyZW50LCBvcHRpb25zKSkgcmV0dXJuO1xuICAgIHN0b3JlZE9wdGlvbnMuY3VycmVudCA9IG9wdGlvbnM7XG4gICAgcmVJbml0KCk7XG4gIH0sIFtvcHRpb25zLCByZUluaXRdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYXJlUGx1Z2luc0VxdWFsKHN0b3JlZFBsdWdpbnMuY3VycmVudCwgcGx1Z2lucykpIHJldHVybjtcbiAgICBzdG9yZWRQbHVnaW5zLmN1cnJlbnQgPSBwbHVnaW5zO1xuICAgIHJlSW5pdCgpO1xuICB9LCBbcGx1Z2lucywgcmVJbml0XSk7XG4gIHJldHVybiBbc2V0Vmlld3BvcnQsIGVtYmxhQXBpXTtcbn1cbnVzZUVtYmxhQ2Fyb3VzZWwuZ2xvYmFsT3B0aW9ucyA9IHVuZGVmaW5lZDtcblxuZXhwb3J0IHsgdXNlRW1ibGFDYXJvdXNlbCBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lbWJsYS1jYXJvdXNlbC1yZWFjdC5lc20uanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/embla-carousel-react@8.0.0_react@18.2.0/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js\n");

/***/ })

};
;