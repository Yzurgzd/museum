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
            uploadUrl: "http://127.0.0.1:8000/ckeditor/upload/"
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
      lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRkLWhlcm8uMGViYmQ4ODBiNjQ4YzkyOWQ3YmQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFZSxTQUFTRyxNQUFULE9BQXlEO0FBQUE7O0FBQUEsTUFBdkNDLFNBQXVDLFFBQXZDQSxRQUF1QztBQUFBLE1BQTdCQyxZQUE2QixRQUE3QkEsWUFBNkI7QUFBQSxNQUFmQyxJQUFlLFFBQWZBLElBQWU7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFDdEUsTUFBTUMsU0FBUyxHQUFHTiw2Q0FBTSxFQUF4Qjs7QUFDQSxjQUFvQ00sU0FBUyxDQUFDQyxPQUFWLElBQXFCLEVBQXpEO0FBQUEsTUFBUUMsUUFBUixTQUFRQSxRQUFSO0FBQUEsTUFBa0JDLGFBQWxCLFNBQWtCQSxhQUFsQjs7QUFFQVYsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2RPLElBQUFBLFNBQVMsQ0FBQ0MsT0FBVixHQUFvQjtBQUNsQkMsTUFBQUEsUUFBUSxFQUFFRSwwSEFEUTtBQUN1QztBQUN6REQsTUFBQUEsYUFBYSxFQUFFQyxtQkFBTyxDQUFDLDZHQUFEO0FBRkosS0FBcEI7QUFJRCxHQUxRLEVBS04sRUFMTSxDQUFUO0FBT0Esc0JBQ0U7QUFBQSxjQUNHUCxZQUFZLGdCQUNYO0FBQUssZUFBUyxFQUFDLCtEQUFmO0FBQUEsNkJBQ0UsOERBQUMsUUFBRDtBQUNFLFlBQUksRUFBQyxFQURQO0FBRUUsWUFBSSxFQUFFQyxJQUZSO0FBR0UsY0FBTSxFQUFFSyxhQUhWO0FBSUUsY0FBTSxFQUFFO0FBQ05FLFVBQUFBLE9BQU8sRUFBRSxDQUFDLFNBQUQsRUFBWSxNQUFaLEVBQW9CLFFBQXBCLEVBQThCLGFBQTlCLENBREg7QUFFTkMsVUFBQUEsUUFBUSxFQUFFO0FBQ1JDLFlBQUFBLFNBQVMsRUFBRTtBQURIO0FBRkosU0FKVjtBQVVFLFlBQUksRUFBRVIsS0FWUjtBQVdFLGdCQUFRLEVBQUUsa0JBQUNTLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUMzQixjQUFNQyxJQUFJLEdBQUdELE1BQU0sQ0FBQ0UsT0FBUCxFQUFiLENBRDJCLENBRTNCOztBQUNBZixVQUFBQSxTQUFRLENBQUNjLElBQUQsQ0FBUjtBQUNEO0FBZkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEVyxnQkFxQlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF0Qko7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMkJEOztHQXRDdUJmOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2VkaXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRvcih7IG9uQ2hhbmdlLCBlZGl0b3JMb2FkZWQsIG5hbWUsIHZhbHVlIH0pIHtcclxuICBjb25zdCBlZGl0b3JSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCB7IENLRWRpdG9yLCBDbGFzc2ljRWRpdG9yIH0gPSBlZGl0b3JSZWYuY3VycmVudCB8fCB7fTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGVkaXRvclJlZi5jdXJyZW50ID0ge1xyXG4gICAgICBDS0VkaXRvcjogcmVxdWlyZShcIkBja2VkaXRvci9ja2VkaXRvcjUtcmVhY3RcIikuQ0tFZGl0b3IsIC8vIHYzK1xyXG4gICAgICBDbGFzc2ljRWRpdG9yOiByZXF1aXJlKFwiQGNrZWRpdG9yL2NrZWRpdG9yNS1idWlsZC1jbGFzc2ljXCIpLFxyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7ZWRpdG9yTG9hZGVkID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW90by13aWRnZXQtY29udGFjdF9mb3JtLWZpZWxkIG1vdG8td2lkZ2V0LWNvbnRhY3RfZm9ybS1pbnB1dFwiPlxyXG4gICAgICAgICAgPENLRWRpdG9yXHJcbiAgICAgICAgICAgIHR5cGU9XCJcIlxyXG4gICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICBlZGl0b3I9e0NsYXNzaWNFZGl0b3J9XHJcbiAgICAgICAgICAgIGNvbmZpZz17e1xyXG4gICAgICAgICAgICAgIHRvb2xiYXI6IFtcImhlYWRpbmdcIiwgXCJib2xkXCIsIFwiaXRhbGljXCIsIFwidXBsb2FkSW1hZ2VcIl0sXHJcbiAgICAgICAgICAgICAgY2tmaW5kZXI6IHtcclxuICAgICAgICAgICAgICAgIHVwbG9hZFVybDogXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvY2tlZGl0b3IvdXBsb2FkL1wiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGRhdGE9e3ZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBlZGl0b3IpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBkYXRhID0gZWRpdG9yLmdldERhdGEoKTtcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh7IGV2ZW50LCBlZGl0b3IsIGRhdGEgfSlcclxuICAgICAgICAgICAgICBvbkNoYW5nZShkYXRhKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdj5FZGl0b3IgbG9hZGluZzwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJFZGl0b3IiLCJvbkNoYW5nZSIsImVkaXRvckxvYWRlZCIsIm5hbWUiLCJ2YWx1ZSIsImVkaXRvclJlZiIsImN1cnJlbnQiLCJDS0VkaXRvciIsIkNsYXNzaWNFZGl0b3IiLCJyZXF1aXJlIiwidG9vbGJhciIsImNrZmluZGVyIiwidXBsb2FkVXJsIiwiZXZlbnQiLCJlZGl0b3IiLCJkYXRhIiwiZ2V0RGF0YSJdLCJzb3VyY2VSb290IjoiIn0=