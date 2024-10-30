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

eval("// Exports\nmodule.exports = {\n\t\"nav\": \"Navbar_nav__yFFPE\",\n\t\"navItemsContainer\": \"Navbar_navItemsContainer__U1JV0\",\n\t\"linkContainer\": \"Navbar_linkContainer__33YlS\",\n\t\"link\": \"Navbar_link__Ssa7S\",\n\t\"logo\": \"Navbar_logo__X4o9i\",\n\t\"hamburger\": \"Navbar_hamburger__WJ9Te\",\n\t\"navShop\": \"Navbar_navShop__yfO3h\",\n\t\"active\": \"Navbar_active__qyFWv\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5tb2R1bGUuY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYWlhcy1nYXJkZW4vLi9jb21wb25lbnRzL05hdmJhci5tb2R1bGUuY3NzPzRiZmUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmF2XCI6IFwiTmF2YmFyX25hdl9feUZGUEVcIixcblx0XCJuYXZJdGVtc0NvbnRhaW5lclwiOiBcIk5hdmJhcl9uYXZJdGVtc0NvbnRhaW5lcl9fVTFKVjBcIixcblx0XCJsaW5rQ29udGFpbmVyXCI6IFwiTmF2YmFyX2xpbmtDb250YWluZXJfXzMzWWxTXCIsXG5cdFwibGlua1wiOiBcIk5hdmJhcl9saW5rX19Tc2E3U1wiLFxuXHRcImxvZ29cIjogXCJOYXZiYXJfbG9nb19fWDRvOWlcIixcblx0XCJoYW1idXJnZXJcIjogXCJOYXZiYXJfaGFtYnVyZ2VyX19XSjlUZVwiLFxuXHRcIm5hdlNob3BcIjogXCJOYXZiYXJfbmF2U2hvcF9feWZPM2hcIixcblx0XCJhY3RpdmVcIjogXCJOYXZiYXJfYWN0aXZlX19xeUZXdlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navbar.module.css\n");

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Navbar.module.css */ \"./components/Navbar.module.css\");\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n // Import useState and useEffect hooks\n\n\n\n\nfunction Navbar() {\n    // State to toggle menu\n    const [menuOpen, setMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Function to toggle the menu\n    const toggleMenu = ()=>{\n        setMenuOpen(!menuOpen);\n    };\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    // Close the menu when resizing the window (optional)\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            if (window.innerWidth > 768) {\n                setMenuOpen(false); // Close the menu on larger screens\n            }\n        };\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: `${(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().nav)} ${router.pathname === \"/shop\" ? (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().navShop) : \"\"}`,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().navItemsContainer),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\"\n                }, void 0, false, {\n                    fileName: \"/Users/ericchen/eric-personal/gaias-garden-landing/components/Navbar.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: `${(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().linkContainer)} ${menuOpen ? (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().active) : \"\"}`,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().link),\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ericchen/eric-personal/gaias-garden-landing/components/Navbar.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/about\",\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().link),\n                            children: \"About\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ericchen/eric-personal/gaias-garden-landing/components/Navbar.js\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"https://lu.ma/5wn05aap\",\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().link),\n                            children: \" Upcoming Events\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ericchen/eric-personal/gaias-garden-landing/components/Navbar.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/shop\",\n                            className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().link),\n                            children: \"Shop\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ericchen/eric-personal/gaias-garden-landing/components/Navbar.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ericchen/eric-personal/gaias-garden-landing/components/Navbar.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().hamburger),\n                    onClick: toggleMenu,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                            fileName: \"/Users/ericchen/eric-personal/gaias-garden-landing/components/Navbar.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                            fileName: \"/Users/ericchen/eric-personal/gaias-garden-landing/components/Navbar.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                            fileName: \"/Users/ericchen/eric-personal/gaias-garden-landing/components/Navbar.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ericchen/eric-personal/gaias-garden-landing/components/Navbar.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ericchen/eric-personal/gaias-garden-landing/components/Navbar.js\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ericchen/eric-personal/gaias-garden-landing/components/Navbar.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QyxDQUFDLHNDQUFzQztBQUN0RDtBQUNFO0FBQ1M7QUFFQztBQUUxQixTQUFTTTtJQUN0Qix1QkFBdUI7SUFDdkIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDO0lBRXpDLDhCQUE4QjtJQUM5QixNQUFNUyxhQUFhO1FBQ2pCRCxZQUFZLENBQUNEO0lBQ2Y7SUFFQSxNQUFNRyxTQUFTTixzREFBU0E7SUFFeEIscURBQXFEO0lBQ3JESCxnREFBU0EsQ0FBQztRQUNSLE1BQU1VLGVBQWU7WUFDbkIsSUFBSUMsT0FBT0MsVUFBVSxHQUFHLEtBQUs7Z0JBQzNCTCxZQUFZLFFBQVEsbUNBQW1DO1lBQ3pEO1FBQ0Y7UUFDQUksT0FBT0UsZ0JBQWdCLENBQUMsVUFBVUg7UUFDbEMsT0FBTztZQUNMQyxPQUFPRyxtQkFBbUIsQ0FBQyxVQUFVSjtRQUN2QztJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFXLENBQUMsRUFBRVosK0RBQVUsQ0FBQyxDQUFDLEVBQUVLLE9BQU9RLFFBQVEsS0FBSyxVQUFVYixtRUFBYyxHQUFHLEdBQUcsQ0FBQztrQkFDbEYsNEVBQUNlO1lBQUlILFdBQVdaLDZFQUF3Qjs7OEJBQ3RDLDhEQUFDSCxrREFBSUE7b0JBQUNvQixNQUFLOzs7Ozs7OEJBVVgsOERBQUNGO29CQUFJSCxXQUFXLENBQUMsRUFBRVoseUVBQW9CLENBQUMsQ0FBQyxFQUFFRSxXQUFXRixrRUFBYSxHQUFHLEdBQUcsQ0FBQzs7c0NBQ3hFLDhEQUFDSCxrREFBSUE7NEJBQUNvQixNQUFLOzRCQUFJTCxXQUFXWixnRUFBVztzQ0FBRTs7Ozs7O3NDQUN2Qyw4REFBQ0gsa0RBQUlBOzRCQUFDb0IsTUFBSzs0QkFBU0wsV0FBV1osZ0VBQVc7c0NBQUU7Ozs7OztzQ0FDNUMsOERBQUNILGtEQUFJQTs0QkFBQ29CLE1BQUs7NEJBQXlCTCxXQUFXWixnRUFBVztzQ0FBRTs7Ozs7O3NDQUM1RCw4REFBQ0gsa0RBQUlBOzRCQUFDb0IsTUFBSzs0QkFBUUwsV0FBV1osZ0VBQVc7c0NBQUU7Ozs7Ozs7Ozs7Ozs4QkFHN0MsOERBQUNlO29CQUFJSCxXQUFXWixxRUFBZ0I7b0JBQUVzQixTQUFTbEI7O3NDQUN6Qyw4REFBQ21COzs7OztzQ0FDRCw4REFBQ0E7Ozs7O3NDQUNELDhEQUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2FpYXMtZ2FyZGVuLy4vY29tcG9uZW50cy9OYXZiYXIuanM/ZmJjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnOyAvLyBJbXBvcnQgdXNlU3RhdGUgYW5kIHVzZUVmZmVjdCBob29rc1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL05hdmJhci5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xuICAvLyBTdGF0ZSB0byB0b2dnbGUgbWVudVxuICBjb25zdCBbbWVudU9wZW4sIHNldE1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBGdW5jdGlvbiB0byB0b2dnbGUgdGhlIG1lbnVcbiAgY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHtcbiAgICBzZXRNZW51T3BlbighbWVudU9wZW4pO1xuICB9O1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIC8vIENsb3NlIHRoZSBtZW51IHdoZW4gcmVzaXppbmcgdGhlIHdpbmRvdyAob3B0aW9uYWwpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzY4KSB7XG4gICAgICAgIHNldE1lbnVPcGVuKGZhbHNlKTsgLy8gQ2xvc2UgdGhlIG1lbnUgb24gbGFyZ2VyIHNjcmVlbnNcbiAgICAgIH1cbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT17YCR7c3R5bGVzLm5hdn0gJHtyb3V0ZXIucGF0aG5hbWUgPT09ICcvc2hvcCcgPyBzdHlsZXMubmF2U2hvcCA6ICcnfWB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZJdGVtc0NvbnRhaW5lcn0+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgey8qIDxJbWFnZSBcbiAgICAgICAgICAgIHNyYz1cIi9nYWlhLWdhcmRlbi1sb2dvLnBuZ1wiICAvLyBQYXRoIHRvIHlvdXIgbG9nbyBpbiB0aGUgcHVibGljIGZvbGRlclxuICAgICAgICAgICAgYWx0PVwiR2FpYSdzIEdhcmRlbiBMb2dvXCIgXG4gICAgICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSAgLy8gT3B0aW9uYWwgc3R5bGluZyBjbGFzc1xuICAgICAgICAgIC8+ICovfVxuICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5saW5rQ29udGFpbmVyfSAke21lbnVPcGVuID8gc3R5bGVzLmFjdGl2ZSA6ICcnfWB9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+SG9tZTwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCIgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+QWJvdXQ8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vbHUubWEvNXduMDVhYXBcIiBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT4gVXBjb21pbmcgRXZlbnRzPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvcFwiIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlNob3A8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGFtYnVyZ2VyfSBvbkNsaWNrPXt0b2dnbGVNZW51fT5cbiAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJJbWFnZSIsInVzZVJvdXRlciIsInN0eWxlcyIsIk5hdmJhciIsIm1lbnVPcGVuIiwic2V0TWVudU9wZW4iLCJ0b2dnbGVNZW51Iiwicm91dGVyIiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibmF2IiwiY2xhc3NOYW1lIiwicGF0aG5hbWUiLCJuYXZTaG9wIiwiZGl2IiwibmF2SXRlbXNDb250YWluZXIiLCJocmVmIiwibGlua0NvbnRhaW5lciIsImFjdGl2ZSIsImxpbmsiLCJoYW1idXJnZXIiLCJvbkNsaWNrIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navbar.js\n");

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

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

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