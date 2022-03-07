"use strict";
self["webpackHotUpdate_N_E"]("pages/add-hero",{

/***/ "./components/editor.js":
/*!******************************!*\
  !*** ./components/editor.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Editor; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\coding\\Django\\2021\\museum-new\\frontend\\components\\editor.js",
    _s = $RefreshSig$();



function Editor(_ref) {
  _s();

  var _onChange = _ref.onChange,
      editorLoaded = _ref.editorLoaded,
      name = _ref.name,
      value = _ref.value;
  var editorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  var _ref2 = editorRef.current || {},
      CKEditor = _ref2.CKEditor,
      ClassicEditor = _ref2.ClassicEditor;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    editorRef.current = {
      CKEditor: __webpack_require__(/*! @ckeditor/ckeditor5-react */ "./node_modules/@ckeditor/ckeditor5-react/dist/ckeditor.js").CKEditor,
      // v3+
      ClassicEditor: __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js")
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: editorLoaded ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "moto-widget-contact_form-field moto-widget-contact_form-input",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CKEditor, {
        type: "",
        name: name,
        editor: ClassicEditor,
        config: {
          toolbar: ["heading", "bold", "italic", "uploadImage"],
          ckfinder: {
            uploadUrl: {
              path: "http://127.0.0.1:8000/",
              url: "/ckeditor/upload/"
            }
          }
        },
        data: value,
        onChange: function onChange(event, editor) {
          var data = editor.getData(); // console.log({ event, editor, data })

          _onChange(data);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: "Editor loading"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

_s(Editor, "FXGU5sRik9TpAO5B+Yli91RwFDk=");

_c = Editor;

var _c;

$RefreshReg$(_c, "Editor");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRkLWhlcm8uMmVjMzU0MzZmNDJjODRlZWUzOWQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFZSxTQUFTRyxNQUFULE9BQXlEO0FBQUE7O0FBQUEsTUFBdkNDLFNBQXVDLFFBQXZDQSxRQUF1QztBQUFBLE1BQTdCQyxZQUE2QixRQUE3QkEsWUFBNkI7QUFBQSxNQUFmQyxJQUFlLFFBQWZBLElBQWU7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFDdEUsTUFBTUMsU0FBUyxHQUFHTiw2Q0FBTSxFQUF4Qjs7QUFDQSxjQUFvQ00sU0FBUyxDQUFDQyxPQUFWLElBQXFCLEVBQXpEO0FBQUEsTUFBUUMsUUFBUixTQUFRQSxRQUFSO0FBQUEsTUFBa0JDLGFBQWxCLFNBQWtCQSxhQUFsQjs7QUFFQVYsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2RPLElBQUFBLFNBQVMsQ0FBQ0MsT0FBVixHQUFvQjtBQUNsQkMsTUFBQUEsUUFBUSxFQUFFRSwwSEFEUTtBQUN1QztBQUN6REQsTUFBQUEsYUFBYSxFQUFFQyxtQkFBTyxDQUFDLDZHQUFEO0FBRkosS0FBcEI7QUFJRCxHQUxRLEVBS04sRUFMTSxDQUFUO0FBT0Esc0JBQ0U7QUFBQSxjQUNHUCxZQUFZLGdCQUNYO0FBQUssZUFBUyxFQUFDLCtEQUFmO0FBQUEsNkJBQ0UsOERBQUMsUUFBRDtBQUNFLFlBQUksRUFBQyxFQURQO0FBRUUsWUFBSSxFQUFFQyxJQUZSO0FBR0UsY0FBTSxFQUFFSyxhQUhWO0FBSUUsY0FBTSxFQUFFO0FBQ05FLFVBQUFBLE9BQU8sRUFBRSxDQUFDLFNBQUQsRUFBWSxNQUFaLEVBQW9CLFFBQXBCLEVBQThCLGFBQTlCLENBREg7QUFFTkMsVUFBQUEsUUFBUSxFQUFFO0FBQ1JDLFlBQUFBLFNBQVMsRUFBRTtBQUNUQyxjQUFBQSxJQUFJLEVBQUUsd0JBREc7QUFFVEMsY0FBQUEsR0FBRyxFQUFFO0FBRkk7QUFESDtBQUZKLFNBSlY7QUFhRSxZQUFJLEVBQUVWLEtBYlI7QUFjRSxnQkFBUSxFQUFFLGtCQUFDVyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDM0IsY0FBTUMsSUFBSSxHQUFHRCxNQUFNLENBQUNFLE9BQVAsRUFBYixDQUQyQixDQUUzQjs7QUFDQWpCLFVBQUFBLFNBQVEsQ0FBQ2dCLElBQUQsQ0FBUjtBQUNEO0FBbEJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRFcsZ0JBd0JYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBekJKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThCRDs7R0F6Q3VCakI7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZWRpdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdG9yKHsgb25DaGFuZ2UsIGVkaXRvckxvYWRlZCwgbmFtZSwgdmFsdWUgfSkge1xyXG4gIGNvbnN0IGVkaXRvclJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IHsgQ0tFZGl0b3IsIENsYXNzaWNFZGl0b3IgfSA9IGVkaXRvclJlZi5jdXJyZW50IHx8IHt9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZWRpdG9yUmVmLmN1cnJlbnQgPSB7XHJcbiAgICAgIENLRWRpdG9yOiByZXF1aXJlKFwiQGNrZWRpdG9yL2NrZWRpdG9yNS1yZWFjdFwiKS5DS0VkaXRvciwgLy8gdjMrXHJcbiAgICAgIENsYXNzaWNFZGl0b3I6IHJlcXVpcmUoXCJAY2tlZGl0b3IvY2tlZGl0b3I1LWJ1aWxkLWNsYXNzaWNcIiksXHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtlZGl0b3JMb2FkZWQgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3RvLXdpZGdldC1jb250YWN0X2Zvcm0tZmllbGQgbW90by13aWRnZXQtY29udGFjdF9mb3JtLWlucHV0XCI+XHJcbiAgICAgICAgICA8Q0tFZGl0b3JcclxuICAgICAgICAgICAgdHlwZT1cIlwiXHJcbiAgICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICAgIGVkaXRvcj17Q2xhc3NpY0VkaXRvcn1cclxuICAgICAgICAgICAgY29uZmlnPXt7XHJcbiAgICAgICAgICAgICAgdG9vbGJhcjogW1wiaGVhZGluZ1wiLCBcImJvbGRcIiwgXCJpdGFsaWNcIiwgXCJ1cGxvYWRJbWFnZVwiXSxcclxuICAgICAgICAgICAgICBja2ZpbmRlcjoge1xyXG4gICAgICAgICAgICAgICAgdXBsb2FkVXJsOiB7XHJcbiAgICAgICAgICAgICAgICAgIHBhdGg6IFwiaHR0cDovLzEyNy4wLjAuMTo4MDAwL1wiLFxyXG4gICAgICAgICAgICAgICAgICB1cmw6IFwiL2NrZWRpdG9yL3VwbG9hZC9cIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZGF0YT17dmFsdWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIGVkaXRvcikgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBlZGl0b3IuZ2V0RGF0YSgpO1xyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHsgZXZlbnQsIGVkaXRvciwgZGF0YSB9KVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlKGRhdGEpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2PkVkaXRvciBsb2FkaW5nPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkVkaXRvciIsIm9uQ2hhbmdlIiwiZWRpdG9yTG9hZGVkIiwibmFtZSIsInZhbHVlIiwiZWRpdG9yUmVmIiwiY3VycmVudCIsIkNLRWRpdG9yIiwiQ2xhc3NpY0VkaXRvciIsInJlcXVpcmUiLCJ0b29sYmFyIiwiY2tmaW5kZXIiLCJ1cGxvYWRVcmwiLCJwYXRoIiwidXJsIiwiZXZlbnQiLCJlZGl0b3IiLCJkYXRhIiwiZ2V0RGF0YSJdLCJzb3VyY2VSb290IjoiIn0=