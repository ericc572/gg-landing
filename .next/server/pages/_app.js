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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Navbar.module.css":
/*!**************************************!*\
  !*** ./components/Navbar.module.css ***!
  \**************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"nav\": \"Navbar_nav__yFFPE\",\n\t\"navItemsContainer\": \"Navbar_navItemsContainer__U1JV0\",\n\t\"linkContainer\": \"Navbar_linkContainer__33YlS\",\n\t\"link\": \"Navbar_link__Ssa7S\",\n\t\"logo\": \"Navbar_logo__X4o9i\",\n\t\"hamburger\": \"Navbar_hamburger__WJ9Te\",\n\t\"active\": \"Navbar_active__qyFWv\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5tb2R1bGUuY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2FpYXMtZ2FyZGVuLy4vY29tcG9uZW50cy9OYXZiYXIubW9kdWxlLmNzcz80YmZlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hdlwiOiBcIk5hdmJhcl9uYXZfX3lGRlBFXCIsXG5cdFwibmF2SXRlbXNDb250YWluZXJcIjogXCJOYXZiYXJfbmF2SXRlbXNDb250YWluZXJfX1UxSlYwXCIsXG5cdFwibGlua0NvbnRhaW5lclwiOiBcIk5hdmJhcl9saW5rQ29udGFpbmVyX18zM1lsU1wiLFxuXHRcImxpbmtcIjogXCJOYXZiYXJfbGlua19fU3NhN1NcIixcblx0XCJsb2dvXCI6IFwiTmF2YmFyX2xvZ29fX1g0bzlpXCIsXG5cdFwiaGFtYnVyZ2VyXCI6IFwiTmF2YmFyX2hhbWJ1cmdlcl9fV0o5VGVcIixcblx0XCJhY3RpdmVcIjogXCJOYXZiYXJfYWN0aXZlX19xeUZXdlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navbar.module.css\n");

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navbar.module.css */ \"./components/Navbar.module.css\");\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n // Import useState and useEffect hooks\n\n\n\nfunction Navbar() {\n    // State to toggle menu\n    const [menuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Function to toggle the menu\n    const toggleMenu = ()=>{\n        setMenuOpen(!menuOpen);\n    };\n    // Close the menu when resizing the window (optional)\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            if (window.innerWidth > 768) {\n                setMenuOpen(false); // Close the menu on larger screens\n            }\n        };\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().nav),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().navItemsContainer),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: \"/gg-logo-2.png\" // Path to your logo in the public folder\n                        ,\n                        alt: \"Gaia's Garden Logo\",\n                        width: 180,\n                        height: 60,\n                        className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo)\n                    }, void 0, false, {\n                        fileName: \"/Users/ericchen/eric-personal/gaias-garden-landing/components/Navbar.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ericchen/eric-personal/gaias-garden-landing/components/Navbar.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: `${(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().linkContainer)} ${menuOpen ? (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().active) : \"\"}`,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/about\",\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),\n                            children: \"About\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ericchen/eric-personal/gaias-garden-landing/components/Navbar.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/events\",\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),\n                            children: \"Events\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ericchen/eric-personal/gaias-garden-landing/components/Navbar.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/shop\",\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().link),\n                            children: \"Shop\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ericchen/eric-personal/gaias-garden-landing/components/Navbar.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ericchen/eric-personal/gaias-garden-landing/components/Navbar.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().hamburger),\n                    onClick: toggleMenu,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                            fileName: \"/Users/ericchen/eric-personal/gaias-garden-landing/components/Navbar.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                            fileName: \"/Users/ericchen/eric-personal/gaias-garden-landing/components/Navbar.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                            fileName: \"/Users/ericchen/eric-personal/gaias-garden-landing/components/Navbar.js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ericchen/eric-personal/gaias-garden-landing/components/Navbar.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ericchen/eric-personal/gaias-garden-landing/components/Navbar.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ericchen/eric-personal/gaias-garden-landing/components/Navbar.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEMsQ0FBQyxzQ0FBc0M7QUFDdEQ7QUFDRTtBQUNVO0FBRTFCLFNBQVNLO0lBQ3RCLHVCQUF1QjtJQUN2QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFFekMsOEJBQThCO0lBQzlCLE1BQU1RLGFBQWE7UUFDakJELFlBQVksQ0FBQ0Q7SUFDZjtJQUVBLHFEQUFxRDtJQUNyREwsZ0RBQVNBLENBQUM7UUFDUixNQUFNUSxlQUFlO1lBQ25CLElBQUlDLE9BQU9DLFVBQVUsR0FBRyxLQUFLO2dCQUMzQkosWUFBWSxRQUFRLG1DQUFtQztZQUN6RDtRQUNGO1FBQ0FHLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVIO1FBQ2xDLE9BQU87WUFDTEMsT0FBT0csbUJBQW1CLENBQUMsVUFBVUo7UUFDdkM7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBV1gsK0RBQVU7a0JBQ3hCLDRFQUFDWTtZQUFJRCxXQUFXWCw2RUFBd0I7OzhCQUN0Qyw4REFBQ0Ysa0RBQUlBO29CQUFDZ0IsTUFBSzs4QkFDVCw0RUFBQ2YsbURBQUtBO3dCQUNKZ0IsS0FBSSxpQkFBa0IseUNBQXlDOzt3QkFDL0RDLEtBQUk7d0JBQ0pDLE9BQU87d0JBQ1BDLFFBQVE7d0JBQ1JQLFdBQVdYLGdFQUFXOzs7Ozs7Ozs7Ozs4QkFJMUIsOERBQUNZO29CQUFJRCxXQUFXLENBQUMsRUFBRVgseUVBQW9CLENBQUMsQ0FBQyxFQUFFRSxXQUFXRixrRUFBYSxHQUFHLEdBQUcsQ0FBQzs7c0NBQ3hFLDhEQUFDRixrREFBSUE7NEJBQUNnQixNQUFLOzRCQUFTSCxXQUFXWCxnRUFBVztzQ0FBRTs7Ozs7O3NDQUM1Qyw4REFBQ0Ysa0RBQUlBOzRCQUFDZ0IsTUFBSzs0QkFBVUgsV0FBV1gsZ0VBQVc7c0NBQUU7Ozs7OztzQ0FDN0MsOERBQUNGLGtEQUFJQTs0QkFBQ2dCLE1BQUs7NEJBQVFILFdBQVdYLGdFQUFXO3NDQUFFOzs7Ozs7Ozs7Ozs7OEJBRzdDLDhEQUFDWTtvQkFBSUQsV0FBV1gscUVBQWdCO29CQUFFd0IsU0FBU3BCOztzQ0FDekMsOERBQUNxQjs7Ozs7c0NBQ0QsOERBQUNBOzs7OztzQ0FDRCw4REFBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLWCIsInNvdXJjZXMiOlsid2VicGFjazovL2dhaWFzLWdhcmRlbi8uL2NvbXBvbmVudHMvTmF2YmFyLmpzP2ZiY2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JzsgLy8gSW1wb3J0IHVzZVN0YXRlIGFuZCB1c2VFZmZlY3QgaG9va3NcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTmF2YmFyLm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XG4gIC8vIFN0YXRlIHRvIHRvZ2dsZSBtZW51XG4gIGNvbnN0IFttZW51T3Blbiwgc2V0TWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIEZ1bmN0aW9uIHRvIHRvZ2dsZSB0aGUgbWVudVxuICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4ge1xuICAgIHNldE1lbnVPcGVuKCFtZW51T3Blbik7XG4gIH07XG5cbiAgLy8gQ2xvc2UgdGhlIG1lbnUgd2hlbiByZXNpemluZyB0aGUgd2luZG93IChvcHRpb25hbClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA3NjgpIHtcbiAgICAgICAgc2V0TWVudU9wZW4oZmFsc2UpOyAvLyBDbG9zZSB0aGUgbWVudSBvbiBsYXJnZXIgc2NyZWVuc1xuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2SXRlbXNDb250YWluZXJ9PlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgIHNyYz1cIi9nZy1sb2dvLTIucG5nXCIgIC8vIFBhdGggdG8geW91ciBsb2dvIGluIHRoZSBwdWJsaWMgZm9sZGVyXG4gICAgICAgICAgICBhbHQ9XCJHYWlhJ3MgR2FyZGVuIExvZ29cIiBcbiAgICAgICAgICAgIHdpZHRoPXsxODB9XG4gICAgICAgICAgICBoZWlnaHQ9ezYwfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gIC8vIE9wdGlvbmFsIHN0eWxpbmcgY2xhc3NcbiAgICAgICAgICAvPlxuICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5saW5rQ29udGFpbmVyfSAke21lbnVPcGVuID8gc3R5bGVzLmFjdGl2ZSA6ICcnfWB9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5BYm91dDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2V2ZW50c1wiIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PkV2ZW50czwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3BcIiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5TaG9wPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhhbWJ1cmdlcn0gb25DbGljaz17dG9nZ2xlTWVudX0+XG4gICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiSW1hZ2UiLCJzdHlsZXMiLCJOYXZiYXIiLCJtZW51T3BlbiIsInNldE1lbnVPcGVuIiwidG9nZ2xlTWVudSIsImhhbmRsZVJlc2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsIm5hdkl0ZW1zQ29udGFpbmVyIiwiaHJlZiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwibG9nbyIsImxpbmtDb250YWluZXIiLCJhY3RpdmUiLCJsaW5rIiwiaGFtYnVyZ2VyIiwib25DbGljayIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navbar.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_vines_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/vines.css */ \"./styles/vines.css\");\n/* harmony import */ var _styles_vines_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_vines_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n// pages/_app.js\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ericchen/eric-personal/gaias-garden-landing/pages/_app.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/ericchen/eric-personal/gaias-garden-landing/pages/_app.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxnQkFBZ0I7O0FBQ2lCO0FBQ0Y7QUFDRjtBQUVZO0FBRXpDLFNBQVNFLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDckMscUJBQ0U7OzBCQUVFLDhEQUFDSCwwREFBTUE7Ozs7OzBCQUNQLDhEQUFDRTtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7OztBQUs5QjtBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2FpYXMtZ2FyZGVuLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL19hcHAuanNcbmltcG9ydCBTY3JpcHQgZnJvbSAnbmV4dC9zY3JpcHQnO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvdmluZXMuY3NzJztcblxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcidcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgXG4gICAgICA8TmF2YmFyIC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG5cbiAgICAgIHt9XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIlNjcmlwdCIsIk5hdmJhciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/vines.css":
/*!**************************!*\
  !*** ./styles/vines.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();