webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var slug__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slug */ "./node_modules/slug/slug.js");
/* harmony import */ var slug__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slug__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/serkan/Development/https/first-nextjs/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function HomePage(_ref) {
  var _this = this;

  var characters = _ref.characters;
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-2085888330",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "Ana Sayfa")), __jsx("h1", {
    className: "jsx-2085888330",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, "The Rick And Morty"), __jsx("ul", {
    className: "jsx-2085888330",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, characters.results.map(function (character) {
    return __jsx("li", {
      key: character.id,
      className: "jsx-2085888330",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/character/[slug]",
      as: "/character/".concat(slug__WEBPACK_IMPORTED_MODULE_5___default()(character.name), "-").concat(character.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: "jsx-2085888330",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 15
      }
    }, character.name)));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2085888330",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXJrYW4vRGV2ZWxvcG1lbnQvaHR0cHMvZmlyc3QtbmV4dGpzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCa0IiLCJmaWxlIjoiL1VzZXJzL3Nlcmthbi9EZXZlbG9wbWVudC9odHRwcy9maXJzdC1uZXh0anMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHVuZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IHNsdWcgZnJvbSAnc2x1ZydcblxuZnVuY3Rpb24gSG9tZVBhZ2UoeyBjaGFyYWN0ZXJzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5BbmEgU2F5ZmE8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGgxPlRoZSBSaWNrIEFuZCBNb3J0eTwvaDE+XG5cbiAgICAgIDx1bD5cbiAgICAgICAge2NoYXJhY3RlcnMucmVzdWx0cy5tYXAoKGNoYXJhY3RlcikgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2NoYXJhY3Rlci5pZH0+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBocmVmPVwiL2NoYXJhY3Rlci9bc2x1Z11cIlxuICAgICAgICAgICAgICBhcz17YC9jaGFyYWN0ZXIvJHtzbHVnKGNoYXJhY3Rlci5uYW1lKX0tJHtjaGFyYWN0ZXIuaWR9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGE+e2NoYXJhY3Rlci5uYW1lfTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgLy9kYXRhIGZldGNoXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCB1bmZldGNoKCdodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2NoYXJhY3Rlci8nKVxuICBjb25zdCBjaGFyYWN0ZXJzID0gYXdhaXQgZGF0YS5qc29uKClcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjaGFyYWN0ZXJzXG4gICAgfVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZVxuIl19 */\n/*@ sourceURL=/Users/serkan/Development/https/first-nextjs/pages/index.js */"));
}

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.282b82c43403b2c26ab2.hot-update.js.map