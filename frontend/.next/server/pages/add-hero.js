(() => {
var exports = {};
exports.id = "pages/add-hero";
exports.ids = ["pages/add-hero"];
exports.modules = {

/***/ "./components/editor.js":
/*!******************************!*\
  !*** ./components/editor.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Editor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\coding\\Django\\2021\\museum-new\\frontend\\components\\editor.js";


function Editor({
  onChange,
  editorLoaded,
  name,
  value
}) {
  const editorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const {
    CKEditor,
    ClassicEditor
  } = editorRef.current || {};
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    editorRef.current = {
      CKEditor: __webpack_require__(/*! @ckeditor/ckeditor5-react */ "@ckeditor/ckeditor5-react").CKEditor,
      // v3+
      ClassicEditor: __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "@ckeditor/ckeditor5-build-classic")
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
        onChange: (event, editor) => {
          const data = editor.getData(); // console.log({ event, editor, data })

          onChange(data);
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

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\coding\\Django\\2021\\museum-new\\frontend\\components\\footer.js";



function Footer() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("footer", {
    id: "section-footer",
    className: "footer moto-section",
    "data-widget": "section",
    "data-container": "section",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "moto-widget moto-widget-block moto-bg-color1_4 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto",
      "data-widget": "block",
      "data-spacing": "aaaa",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "container-fluid",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "moto-cell col-sm-12",
            "data-container": "container",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              "data-widget-id": "wid__spacer__5b18d3b1a3d06",
              className: "moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto ",
              "data-widget": "spacer",
              "data-preset": "default",
              "data-spacing": "masa",
              "data-visible-on": "mobile-v",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "moto-widget-spacer-block",
                style: {
                  height: "30px"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "moto-widget moto-widget-row row-fixed moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto",
              "data-grid-type": "sm",
              "data-widget": "row",
              "data-spacing": "aaaa",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "container-fluid",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "row",
                  "data-container": "container",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                    className: "moto-widget moto-widget-row__column moto-cell col-sm-3 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto",
                    "data-widget": "row.column",
                    "data-container": "container",
                    "data-spacing": "aaaa",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                      className: "moto-widget moto-widget-row moto-justify-content_center moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto",
                      "data-grid-type": "xs",
                      "data-widget": "row",
                      "data-spacing": "aasa",
                      "data-bg-position": "left top",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                        className: "container-fluid",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                          className: "row",
                          "data-container": "container",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                            className: "moto-widget moto-widget-row__column moto-cell col-xs-3 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto",
                            "data-widget": "row.column",
                            "data-container": "container",
                            "data-spacing": "aaaa",
                            "data-bg-position": "left top",
                            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                              "data-widget-id": "wid_1529610434_2lintmbah",
                              className: "moto-widget moto-widget-image moto-preset-default  moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto  ",
                              "data-widget": "image",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: `/`,
                                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                                  "data-action": "page",
                                  className: "moto-widget-image-link moto-link",
                                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
                                    className: "moto-widget-image-picture lazyload",
                                    width: 50,
                                    height: 50,
                                    src: "/assets/img/logos/logo_archeo.png",
                                    "data-id": "260",
                                    title: "",
                                    alt: ""
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 73,
                                    columnNumber: 37
                                  }, this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 69,
                                  columnNumber: 35
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 68,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 63,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 56,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                            className: "moto-widget moto-widget-row__column moto-cell col-xs-9 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto",
                            "data-widget": "row.column",
                            "data-container": "container",
                            "data-spacing": "aaaa",
                            "data-bg-position": "left top",
                            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                              className: "moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto",
                              "data-widget": "text",
                              "data-preset": "default",
                              "data-spacing": "aaaa",
                              "data-animation": "",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                                className: "moto-widget-text-content moto-widget-text-editable",
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                                  className: "moto-text_system_1",
                                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: `/`,
                                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                                      "data-action": "page",
                                      "data-id": "1",
                                      className: "moto-link",
                                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                                        className: "moto-color5_5",
                                        children: "Antigua"
                                      }, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 109,
                                        columnNumber: 41
                                      }, this)
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 104,
                                      columnNumber: 39
                                    }, this)
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 103,
                                    columnNumber: 37
                                  }, this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 102,
                                  columnNumber: 35
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                                  className: "moto-text_system_2",
                                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: `/`,
                                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                                      "data-action": "page",
                                      "data-id": "1",
                                      className: "moto-link",
                                      children: "\u0410\u0440\u0445\u0435\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u0440\u0443\u0436\u043E\u043A"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 117,
                                      columnNumber: 39
                                    }, this)
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 116,
                                    columnNumber: 37
                                  }, this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 115,
                                  columnNumber: 35
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 101,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 94,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 87,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 55,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 54,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 47,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                      className: "moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto",
                      "data-widget": "text",
                      "data-preset": "default",
                      "data-spacing": "aama",
                      "data-animation": "",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                        className: "moto-widget-text-content moto-widget-text-editable",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                          className: "moto-text_system_14",
                          children: "\u0410\u0440\u0445\u0435\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u0440\u0443\u0436\u043E\u043A \u0441\u043E\u0437\u0434\u0430\u043D \u043F\u0440\u0438 \u043B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u0438\u0438 \u0430\u0440\u0445\u0435\u043E\u043B\u043E\u0433\u0438\u0438 \u0438 \u044D\u0442\u043D\u043E\u043B\u043E\u0433\u0438\u0438. \u0424\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0438\u0440\u0443\u0435\u0442 \u0432\u043E \u0432\u043D\u0435\u0443\u0447\u0435\u0431\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0432\u0441\u0435\u0433\u043E \u0443\u0447\u0435\u0431\u043D\u043E\u0433\u043E \u0433\u043E\u0434\u0430."
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 140,
                          columnNumber: 27
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                          className: "moto-text_system_14",
                          children: "\xA0"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 145,
                          columnNumber: 27
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                          className: "moto-text_186",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                            className: "moto-color3_3",
                            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                              className: "fa",
                              children: "\uF189"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 148,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 147,
                            columnNumber: 29
                          }, this), "\xA0 \xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                            href: "https://vk.com/tatngpu",
                            rel: "noopener",
                            className: "moto-link",
                            children: "\u0424\u0413\u0411\u041E\u0423 \u0412\u041E \u041D\u0413\u041F\u0423"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 151,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 146,
                          columnNumber: 27
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                          className: "moto-text_186",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                            className: "moto-color3_3",
                            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                              className: "fa",
                              children: "\uF189"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 161,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 160,
                            columnNumber: 29
                          }, this), "\xA0", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                            className: "moto-link",
                            href: "https://vk.com/arheoclub",
                            rel: "noopener",
                            children: "Antigua"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 164,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 159,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 139,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 132,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 41,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                    className: "moto-widget moto-widget-row__column moto-cell col-sm-3 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto",
                    "data-widget": "row.column",
                    "data-container": "container",
                    "data-spacing": "aaaa",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                      className: "moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto",
                      "data-widget": "text",
                      "data-preset": "default",
                      "data-spacing": "aasa",
                      "data-animation": "",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                        className: "moto-widget-text-content moto-widget-text-editable",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                          className: "moto-text_system_11",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                            className: "moto-color5_5",
                            children: "\u0418\u041D\u0424\u041E\u0420\u041C\u0410\u0426\u0418\u042F"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 190,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 189,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 188,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 181,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                      className: "moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto",
                      "data-widget": "text",
                      "data-preset": "default",
                      "data-spacing": "aama",
                      "data-animation": "",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                        className: "moto-widget-text-content moto-widget-text-editable",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                            className: "moto-text_205",
                            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                              href: `/`,
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                                className: "moto-link",
                                children: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 205,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 204,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 203,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                            className: "moto-text_205",
                            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                              href: `/heroes`,
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                                className: "moto-link",
                                children: "\u0413\u0435\u0440\u043E\u0438"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 210,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 209,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 208,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                            className: "moto-text_205",
                            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                              href: `/add-hero`,
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                                className: "moto-link",
                                children: "\u0423\u0432\u0435\u043A\u043E\u0432\u0435\u0447\u0438\u0442\u044C"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 215,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 214,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 213,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 202,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 201,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 194,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 175,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "moto-widget moto-widget-row row-fixed moto-bg-color_custom1 moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto",
              "data-grid-type": "sm",
              "data-widget": "row",
              "data-spacing": "sasa",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "container-fluid",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "row",
                  "data-container": "container",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                    className: "moto-widget moto-widget-row__column moto-cell col-sm-12 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto",
                    "data-widget": "row.column",
                    "data-container": "container",
                    "data-spacing": "aaaa",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                      className: "moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto",
                      "data-widget": "text",
                      "data-preset": "default",
                      "data-spacing": "aaaa",
                      "data-animation": "",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                        className: "moto-widget-text-content moto-widget-text-editable",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                          style: {
                            textAlign: "center"
                          },
                          className: "moto-text_normal",
                          children: ["\u041D\u0413\u041F\u0423 | \u0423\u0441\u043B\u043E\u0432\u0438\u044F", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                            className: "moto-link",
                            target: "_blank",
                            href: "/assets/files/terms-use.pdf",
                            children: "\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0433\u043E \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 252,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 247,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 246,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 239,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 233,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 232,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 231,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\coding\\Django\\2021\\museum-new\\frontend\\components\\header.js";





function Header() {
  const {
    0: hide,
    1: setHide
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("header", {
    id: "section-header",
    className: "header moto-section",
    "data-widget": "section",
    "data-container": "section",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "moto-widget moto-widget-block moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto",
      "data-widget": "block",
      "data-spacing": "aaaa",
      "data-bg-position": "top",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "container-fluid",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "moto-cell col-sm-12",
            "data-container": "container",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "moto-widget moto-widget-container moto-container_header_5b2be2f12",
              "data-widget": "container",
              "data-container": "container",
              "data-moto-sticky": "{}",
              "data-css-name": "moto-container_header_5b2be2f12",
              "data-bg-position": "left top",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "moto-widget moto-widget-row row-fixed moto-justify-content_center moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto",
                "data-grid-type": "sm",
                "data-widget": "row",
                "data-spacing": "sasa",
                "data-bg-position": "left top",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                  className: "container-fluid",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                    className: "row",
                    "data-container": "container",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      className: "moto-widget moto-widget-row__column moto-cell col-sm-3 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto",
                      "data-widget": "row.column",
                      "data-container": "container",
                      "data-spacing": "aaaa",
                      "data-bg-position": "left top",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "moto-widget moto-widget-row moto-justify-content_center moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto",
                        "data-grid-type": "xs",
                        "data-widget": "row",
                        "data-spacing": "aaaa",
                        "data-bg-position": "left top",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "container-fluid",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                            className: "row",
                            "data-container": "container",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                              className: "moto-widget moto-widget-row__column moto-cell col-xs-3 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto",
                              "data-widget": "row.column",
                              "data-container": "container",
                              "data-spacing": "aaaa",
                              "data-bg-position": "left top",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                                "data-widget-id": "wid_1529602801_7tb5r8qky",
                                className: "moto-widget moto-widget-image moto-preset-default  moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto  ",
                                "data-widget": "image",
                                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                  href: `/`,
                                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                                    "data-action": "page",
                                    className: "moto-widget-image-link moto-link",
                                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                      className: "moto-widget-image-picture lazyload",
                                      width: 50,
                                      height: 50,
                                      src: "/assets/img/logos/logo_ngpu.png",
                                      title: "",
                                      alt: ""
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 76,
                                      columnNumber: 39
                                    }, this)
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 72,
                                    columnNumber: 37
                                  }, this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 71,
                                  columnNumber: 35
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 66,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 59,
                              columnNumber: 31
                            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                              className: "moto-widget moto-widget-row__column moto-cell col-xs-9 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto",
                              "data-widget": "row.column",
                              "data-container": "container",
                              "data-spacing": "aaaa",
                              "data-bg-position": "left top",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                                className: "moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto",
                                "data-widget": "text",
                                "data-preset": "default",
                                "data-spacing": "aaaa",
                                "data-animation": "",
                                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                                  className: "moto-widget-text-content moto-widget-text-editable",
                                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                                    className: "moto-text_system_1",
                                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                      href: `/`,
                                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                                        "data-action": "page",
                                        "data-id": "1",
                                        className: "moto-link",
                                        children: "\u041D\u0413\u041F\u0423"
                                      }, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 105,
                                        columnNumber: 41
                                      }, this)
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 104,
                                      columnNumber: 39
                                    }, this)
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 103,
                                    columnNumber: 37
                                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                                    className: "moto-text_system_2",
                                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                      href: `/`,
                                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                                        "data-action": "page",
                                        "data-id": "1",
                                        className: "moto-link",
                                        children: "\u041C\u0443\u0437\u0435\u0439 \u0441\u043B\u0430\u0432\u044B"
                                      }, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 116,
                                        columnNumber: 41
                                      }, this)
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 115,
                                      columnNumber: 39
                                    }, this)
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 114,
                                    columnNumber: 37
                                  }, this)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 102,
                                  columnNumber: 35
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 95,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 88,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 58,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 57,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 50,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 43,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      className: "moto-widget moto-widget-row__column moto-cell col-sm-7 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto",
                      "data-widget": "row.column",
                      "data-container": "container",
                      "data-spacing": "aaaa",
                      "data-bg-position": "left top",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        "data-widget-id": "wid_1529602801_j3l88byty",
                        className: `moto-widget moto-widget-menu moto-preset-3 moto-align-center moto-align-center_mobile-h moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto ${!hide && "moto-widget-menu-mobile-open"}`,
                        "data-preset": "3",
                        "data-widget": "menu",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                          className: "moto-widget-menu-toggle-btn",
                          role: "button",
                          onClick: () => setHide(!hide),
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("i", {
                            className: "moto-widget-menu-toggle-btn-icon fa fa-bars"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 152,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 147,
                          columnNumber: 27
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
                          className: "moto-widget-menu-list moto-widget-menu-list_horizontal",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                            className: "moto-widget-menu-item",
                            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                              href: `/`,
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                                "data-action": "page",
                                className: `moto-widget-menu-link moto-widget-menu-link-level-1 ${router.pathname === "/" && "moto-widget-menu-link-active"} moto-link`,
                                children: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 157,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 156,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 155,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                            className: "moto-widget-menu-item",
                            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                              href: `/heroes`,
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                                className: `moto-widget-menu-link moto-widget-menu-link-level-1 ${router.pathname === "/heroes" && "moto-widget-menu-link-active"} moto-link`,
                                children: "\u0413\u0435\u0440\u043E\u0438"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 170,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 169,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 168,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 154,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 139,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 132,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      className: "moto-widget moto-widget-row__column moto-cell col-sm-2 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto",
                      "data-widget": "row.column",
                      "data-container": "container",
                      "data-spacing": "aaaa",
                      "data-bg-position": "left top",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        "data-widget-id": "wid_1529602801_tnhjzs2ex",
                        className: "moto-widget moto-widget-button moto-preset-4 moto-preset-provider-default moto-align-right moto-align-right_tablet moto-align-center_mobile-h moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto  ",
                        "data-widget": "button",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                          href: `/add-hero`,
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                            className: "moto-widget-button-link moto-size-medium moto-link",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                              className: "fa moto-widget-theme-icon"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 197,
                              columnNumber: 31
                            }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                              className: "moto-widget-button-label",
                              children: "\u0423\u0432\u0435\u043A\u043E\u0432\u0435\u0447\u0438\u0442\u044C"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 198,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 196,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 195,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 190,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 183,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "moto-widget moto-widget-row moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto",
              "data-grid-type": "sm",
              "data-widget": "row",
              "data-spacing": "aaaa",
              "data-bg-position": "left top",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "container-fluid",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                  className: "row",
                  "data-container": "container",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                    className: "moto-widget moto-widget-row__column moto-cell col-sm-12 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto",
                    "data-widget": "row.column",
                    "data-container": "container",
                    "data-spacing": "aaaa",
                    "data-bg-position": "left top",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      "data-widget-id": "wid_1529602801_rm8sn248q",
                      className: "moto-widget moto-widget-spacer moto-preset-default moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto moto-visible-on_desktop",
                      "data-widget": "spacer",
                      "data-preset": "default",
                      "data-spacing": "saaa",
                      "data-visible-on": "desktop",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "moto-widget-spacer-block",
                        style: {
                          height: "5px"
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 233,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 225,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 218,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 217,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 216,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./components/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./components/footer.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\coding\\Django\\2021\\museum-new\\frontend\\components\\layout.js";





function Layout({
  children,
  title = "Герои"
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("title", {
        children: [title, " | \u041D\u0413\u041F\u0423 \u041C\u0443\u0437\u0435\u0439 \u0441\u043B\u0430\u0432\u044B"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("section", {
      id: "content-wrap",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("main", {
        id: "content",
        role: "main",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_header__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this), children]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_footer__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = Image1;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ "../shared/lib/head"));

var _toBase64 = __webpack_require__(/*! ../shared/lib/to-base-64 */ "../shared/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../server/image-config */ "../server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const loadedImageURLs = new Set();

if (true) {
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['default', defaultLoader], ['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['custom', customLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":["127.0.0.1"]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load(_objectSpread({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function handleLoading(img, src, layout, placeholder, onLoadingComplete) {
  if (!img) {
    return;
  }

  const handleLoad = () => {
    if (!img.src.startsWith('data:')) {
      const p = 'decode' in img ? img.decode() : Promise.resolve();
      p.catch(() => {}).then(() => {
        if (placeholder === 'blur') {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        }

        loadedImageURLs.add(src);

        if (onLoadingComplete) {
          const {
            naturalWidth,
            naturalHeight
          } = img; // Pass back read-only primitive values but not the
          // underlying DOM element because it could be misused.

          onLoadingComplete({
            naturalWidth,
            naturalHeight
          });
        }

        if (true) {
          var ref;

          if ((ref = img.parentElement) === null || ref === void 0 ? void 0 : ref.parentElement) {
            const parent = getComputedStyle(img.parentElement.parentElement);

            if (layout === 'responsive' && parent.display === 'flex') {
              console.warn(`Image with src "${src}" may not render properly as a child of a flex container. Consider wrapping the image with a div to configure the width.`);
            } else if (layout === 'fill' && parent.position !== 'relative') {
              console.warn(`Image with src "${src}" may not render properly with a parent using position:"${parent.position}". Consider changing the parent style to position:"relative" with a width and height.`);
            }
          }
        }
      });
    }
  };

  if (img.complete) {
    // If the real image fails to load, this will still remove the placeholder.
    // This is the desired behavior for now, and will be revisited when error
    // handling is worked on for the image component itself.
    handleLoad();
  } else {
    img.onload = handleLoad;
  }
}

function Image1(_param) {
  var {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    lazyBoundary = '200px',
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    onLoadingComplete,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _param,
      all = _objectWithoutProperties(_param, ["src", "sizes", "unoptimized", "priority", "loading", "lazyBoundary", "className", "quality", "width", "height", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"]);

  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src.startsWith('data:') || src.startsWith('blob:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  if (false) {}

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
    }

    if (layout === 'fill' && (width || height)) {
      console.warn(`Image with src "${src}" and "layout='fill'" has unused properties assigned. Please remove "width" and "height".`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp'] // should match next-image-loader
        ;
        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }

    if ('ref' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoadingComplete" property instead.`);
    }

    if ('style' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "style" property. Please use the "className" property instead.`);
    }

    const rand = Math.floor(Math.random() * 1000) + 100;

    if (!unoptimized && !loader({
      src,
      width: rand,
      quality: 75
    }).includes(rand.toString())) {
      console.warn(`Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
    }
  }

  const [setRef, isIntersected] = (0, _useIntersection).useIntersection({
    rootMargin: lazyBoundary,
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };
  const blurStyle = placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: objectFit || 'cover',
    backgroundImage: `url("${blurDataURL}")`,
    backgroundPosition: objectPosition || '0% 0%'
  } : {};

  if (layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  let srcString = src;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    src: `data:image/svg+xml;base64,${(0, _toBase64).toBase64(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    "data-nimg": layout,
    className: className,
    ref: img => {
      setRef(img);
      handleLoading(img, srcString, layout, placeholder, onLoadingComplete);
    },
    style: _objectSpread({}, imgStyle, blurStyle)
  })), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    "data-nimg": layout,
    style: imgStyle,
    className: className,
    loading: loading || 'lazy'
  }))), priority ? // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset

  /*#__PURE__*/
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src,
    // @ts-ignore: imagesrcset is not yet in the link element type.
    imagesrcset: imgAttributes.srcSet,
    // @ts-ignore: imagesizes is not yet in the link element type.
    imagesizes: imgAttributes.sizes
  })) : null);
}

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w=300
  const url = new URL(`${root}${normalizeSrc(src)}`);
  const params = url.searchParams;
  params.set('auto', params.get('auto') || 'format');
  params.set('fit', params.get('fit') || 'max');
  params.set('w', params.get('w') || width.toString());

  if (quality) {
    params.set('q', quality.toString());
  }

  return url.href;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function customLoader({
  src
}) {
  throw new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`);
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if ( true && !configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?5c99"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "./pages/add-hero.js":
/*!***************************!*\
  !*** ./pages/add-hero.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddHero)
/* harmony export */ });
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/editor */ "./components/editor.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\coding\\Django\\2021\\museum-new\\frontend\\pages\\add-hero.js";





function AddHero() {
  const {
    0: editorLoaded,
    1: setEditorLoaded
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: description,
    1: setDescription
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: last_name,
    1: setLastName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: first_name,
    1: setFirstName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: middle_name,
    1: setMiddleName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: student,
    1: setStudent
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: kinship,
    1: setKinship
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: signature,
    1: setSignature
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: photo,
    1: setPhoto
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: description_error,
    1: setDescriptionError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: photo_error,
    1: setPhotoError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", photo ? photo : "");
    formData.append("last_name", last_name);
    formData.append("first_name", first_name);
    formData.append("middle_name", middle_name);
    formData.append("description", description);
    formData.append("student", student);
    formData.append("kinship", kinship);
    formData.append("email", email);
    formData.append("signature", signature);
    const res = await fetch(`${"http://127.0.0.1:8000/api"}/heroes/create/`, {
      method: "POST",
      body: formData
    });

    if (await res.ok) {} else {
      const req = await res.json();
      req.description && setDescriptionError(req.description[0]);
      req.photo && setPhotoError(req.photo[0]);
    }
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setEditorLoaded(true);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_0__.default, {
    title: `Увековечить память героя`,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "moto-widget moto-widget-block moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-medium moto-spacing-left-auto",
      "data-widget": "block",
      "data-spacing": "mama",
      "data-bg-position": "left top",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "container-fluid",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "moto-cell col-sm-12",
            "data-container": "container",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "moto-widget moto-widget-row row-fixed moto-justify-content_center moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto",
              "data-grid-type": "sm",
              "data-widget": "row",
              "data-spacing": "aaaa",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "container-fluid",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                  className: "row",
                  "data-container": "container",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                    className: "moto-widget moto-widget-row__column moto-cell col-sm-1 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto",
                    "data-widget": "row.column",
                    "data-container": "container",
                    "data-spacing": "aaaa",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      "data-widget-id": "wid__divider_horizontal__5b18e5dd61ac3",
                      className: "moto-widget moto-widget-divider moto-preset-default moto-align-left moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto  ",
                      "data-widget": "divider_horizontal",
                      "data-preset": "default",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("hr", {
                        className: "moto-widget-divider-line",
                        style: {
                          maxWidth: "100%",
                          width: "60px"
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 82,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 76,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 70,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                    className: "moto-widget moto-widget-row__column moto-cell col-sm-11 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto",
                    "data-widget": "row.column",
                    "data-container": "container",
                    "data-spacing": "aaaa",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      className: "moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto",
                      "data-widget": "text",
                      "data-preset": "default",
                      "data-spacing": "aaaa",
                      "data-animation": "",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "moto-widget-text-content moto-widget-text-editable",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                          className: "moto-text_system_11",
                          children: "\u0423\u0412\u0415\u041A\u041E\u0412\u0415\u0427\u0418\u0422\u042C \u041F\u0410\u041C\u042F\u0422\u042C \u0413\u0415\u0420\u041E\u042F"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 103,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 102,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 95,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 89,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "moto-widget moto-widget-block moto-spacing-top-medium moto-spacing-right-auto moto-spacing-bottom-large moto-spacing-left-auto",
              "data-widget": "block",
              "data-spacing": "mala",
              "data-bg-position": "left top",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "container-fluid",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                  className: "row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                    className: "moto-cell col-sm-12",
                    "data-container": "container",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      className: "moto-widget moto-widget-row row-fixed moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto",
                      "data-grid-type": "sm",
                      "data-widget": "row",
                      "data-spacing": "aaaa",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "container-fluid",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "row",
                          "data-container": "container",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                            className: "moto-widget moto-widget-row__column moto-cell col-sm-1 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto",
                            "data-widget": "row.column",
                            "data-container": "container",
                            "data-spacing": "aaaa"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 132,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                            className: "moto-widget moto-widget-row__column moto-cell col-sm-5 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto",
                            "data-widget": "row.column",
                            "data-container": "container",
                            "data-spacing": "aaaa",
                            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                              className: "moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto",
                              "data-widget": "text",
                              "data-preset": "default",
                              "data-spacing": "aaaa",
                              "data-animation": "",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                                className: "moto-widget-text-content moto-widget-text-editable",
                                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                                  className: "moto-text_system_6",
                                  children: "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u0413\u0435\u0440\u043E\u0435 \u0432\u043E\u0439\u043D\u044B"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 152,
                                  columnNumber: 35
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                                  className: "moto-text_normal",
                                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 156,
                                    columnNumber: 37
                                  }, this)
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 155,
                                  columnNumber: 35
                                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                                  className: "moto-text_normal",
                                  children: ["\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u043D\u0435\u0441\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435. \u041F\u043E\u0441\u043B\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0432\u0430\u043C \u043D\u0430 Email \u0430\u0434\u0440\u0435\u0441 \u0431\u0443\u0434\u0435\u0442 \u0432\u044B\u0441\u043B\u0430\u043D\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 162,
                                    columnNumber: 37
                                  }, this)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 158,
                                  columnNumber: 35
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName,
                                lineNumber: 151,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 144,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 138,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                            className: "moto-widget moto-widget-row__column moto-cell col-sm-5 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto",
                            "data-widget": "row.column",
                            "data-container": "container",
                            "data-spacing": "aaaa",
                            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                              id: "wid__contact_form__5b18e5dd7a183",
                              className: "moto-widget moto-widget-contact_form moto-preset-2 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto  ",
                              "data-preset": "2",
                              "data-widget": "contact_form",
                              "data-spacing": "aaaa",
                              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                                "ng-controller": "widget.ContactForm.Controller",
                                "ng-init": "hash = '2@eyJoIjoidmp2eCtrVjB4THZKcEtoXC95VTlZWU54OGhTNkVWWnVObGVUbERWS0dQR0E9IiwiaSI6IjFuUW9NSXMraDRvN1ZxckF0eFFseWc9PSIsInYiOiI0OGhadmQySlF6cUx5TlFBXC9ZeGQ3SUpyekJKaWtCaG55RjJieWRBZDV5S1U1VkxCSHU3a0trbUo4SHUxSWllYVh5UHZyZng3YmxRZm5jVHRuV1ZyV0YyNXVlS1RjWTJ3YzA4a2hCRzNtOWs9In0=';actionAfterSubmission={\"action\":\"none\",\"url\":\"\",\"target\":\"_self\",\"id\":\"\"};resetAfterSubmission=false",
                                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
                                  id: "wid__contact_form__5b18e5dd7a183__form",
                                  className: "moto-widget-contact_form-form",
                                  role: "form",
                                  name: "contactForm",
                                  onSubmit: handleSubmit,
                                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                                    "ng-show": "sending",
                                    className: "contact-form-loading"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 191,
                                    columnNumber: 37
                                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                                    className: "moto-cell col-sm-12 moto-widget-blog-recent_posts-item",
                                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                                      className: "moto-widget-blog-recent_posts-item__content  moto-spacing-top-small moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto",
                                      children: [photo && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                                        className: "moto-widget-blog-recent_posts-item-preview moto-spacing-bottom-small",
                                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                                          "data-widget-id": "wid__image__617da7b60fae7",
                                          className: "moto-widget moto-widget-image moto-preset-default moto-align-left moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-small moto-spacing-left-auto  ",
                                          "data-widget": "image",
                                          style: {
                                            position: "relative",
                                            width: "100%",
                                            height: "272px"
                                          },
                                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            className: "moto-widget-image-picture lazyloaded",
                                            layout: "fill",
                                            objectFit: "contain",
                                            title: "",
                                            alt: "",
                                            src: URL.createObjectURL(photo)
                                          }, void 0, false, {
                                            fileName: _jsxFileName,
                                            lineNumber: 210,
                                            columnNumber: 47
                                          }, this)
                                        }, void 0, false, {
                                          fileName: _jsxFileName,
                                          lineNumber: 200,
                                          columnNumber: 45
                                        }, this)
                                      }, void 0, false, {
                                        fileName: _jsxFileName,
                                        lineNumber: 199,
                                        columnNumber: 43
                                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                                        className: "moto-widget-blog-recent_posts-item-title",
                                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                                          "data-widget-id": "wid_1529602801_tnhjzs2ex",
                                          className: "moto-widget moto-widget-button moto-preset-4 moto-preset-provider-default moto-align-center moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto",
                                          "data-widget": "button",
                                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
                                            htmlFor: "file-upload",
                                            className: "moto-widget-button-link moto-size-medium moto-link",
                                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                                              className: "fa",
                                              children: "\uF093"
                                            }, void 0, false, {
                                              fileName: _jsxFileName,
                                              lineNumber: 232,
                                              columnNumber: 47
                                            }, this), " ", "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435"]
                                          }, void 0, true, {
                                            fileName: _jsxFileName,
                                            lineNumber: 228,
                                            columnNumber: 45
                                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
                                            id: "file-upload",
                                            type: "file",
                                            style: {
                                              display: "none"
                                            },
                                            accept: "image/*",
                                            onChange: e => (setPhoto(e.target.files[0]), setPhotoError(""))
                                          }, void 0, false, {
                                            fileName: _jsxFileName,
                                            lineNumber: 235,
                                            columnNumber: 45
                                          }, this)]
                                        }, void 0, true, {
                                          fileName: _jsxFileName,
                                          lineNumber: 223,
                                          columnNumber: 43
                                        }, this), photo_error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                                          className: "moto-widget-contact_form-field-error",
                                          children: photo_error
                                        }, void 0, false, {
                                          fileName: _jsxFileName,
                                          lineNumber: 249,
                                          columnNumber: 45
                                        }, this)]
                                      }, void 0, true, {
                                        fileName: _jsxFileName,
                                        lineNumber: 222,
                                        columnNumber: 41
                                      }, this)]
                                    }, void 0, true, {
                                      fileName: _jsxFileName,
                                      lineNumber: 197,
                                      columnNumber: 39
                                    }, this)
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 196,
                                    columnNumber: 37
                                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                                    className: "moto-widget-contact_form-group",
                                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
                                      htmlFor: "field_name_wid__contact_form__5b18e5dd7a183",
                                      className: "moto-widget-contact_form-label",
                                      children: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0432\u0435\u0442\u0435\u0440\u0430\u043D\u0430"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 258,
                                      columnNumber: 39
                                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
                                      type: "text",
                                      className: "moto-widget-contact_form-field moto-widget-contact_form-input",
                                      placeholder: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F",
                                      required: true,
                                      name: "last_name",
                                      value: last_name,
                                      onChange: e => setLastName(e.target.value),
                                      id: "field_name_wid__contact_form__5b18e5dd7a183"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 264,
                                      columnNumber: 39
                                    }, this)]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 257,
                                    columnNumber: 37
                                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                                    className: "moto-widget-contact_form-group",
                                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
                                      htmlFor: "field_name_wid__contact_form__5b18e5dd7a183",
                                      className: "moto-widget-contact_form-label",
                                      children: "\u0418\u043C\u044F \u0432\u0435\u0442\u0435\u0440\u0430\u043D\u0430"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 279,
                                      columnNumber: 39
                                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
                                      type: "text",
                                      className: "moto-widget-contact_form-field moto-widget-contact_form-input",
                                      placeholder: "\u0418\u043C\u044F",
                                      required: true,
                                      name: "first_name",
                                      value: first_name,
                                      onChange: e => setFirstName(e.target.value),
                                      id: "field_name_wid__contact_form__5b18e5dd7a183"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 285,
                                      columnNumber: 39
                                    }, this)]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 278,
                                    columnNumber: 37
                                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                                    className: "moto-widget-contact_form-group",
                                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
                                      htmlFor: "field_name_wid__contact_form__5b18e5dd7a183",
                                      className: "moto-widget-contact_form-label",
                                      children: "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u0435\u0442\u0435\u0440\u0430\u043D\u0430"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 300,
                                      columnNumber: 39
                                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
                                      type: "text",
                                      className: "moto-widget-contact_form-field moto-widget-contact_form-input",
                                      placeholder: "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E",
                                      name: "middle_name",
                                      value: middle_name,
                                      onChange: e => setMiddleName(e.target.value),
                                      id: "field_name_wid__contact_form__5b18e5dd7a183"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 306,
                                      columnNumber: 39
                                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                                      className: "moto-widget-contact_form-field-error",
                                      children: "\u041D\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 317,
                                      columnNumber: 39
                                    }, this)]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 299,
                                    columnNumber: 37
                                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                                    className: "moto-widget-contact_form-group",
                                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
                                      htmlFor: "field_name_wid__contact_form__5b18e5dd7a183",
                                      className: "moto-widget-contact_form-label",
                                      children: "\u0421\u0442\u0443\u0434\u0435\u043D\u0442(\u043A\u0430)"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 323,
                                      columnNumber: 39
                                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
                                      type: "text",
                                      className: "moto-widget-contact_form-field moto-widget-contact_form-input",
                                      placeholder: "\u0421\u0442\u0443\u0434\u0435\u043D\u0442(\u043A\u0430)",
                                      required: true,
                                      name: "student",
                                      value: student,
                                      onChange: e => setStudent(e.target.value),
                                      id: "field_name_wid__contact_form__5b18e5dd7a183"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 329,
                                      columnNumber: 39
                                    }, this)]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 322,
                                    columnNumber: 37
                                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                                    className: "moto-widget-contact_form-group",
                                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
                                      htmlFor: "field_name_wid__contact_form__5b18e5dd7a183",
                                      className: "moto-widget-contact_form-label",
                                      children: "\u0412\u0435\u0442\u0435\u0440\u0430\u043D \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442\u0441\u044F"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 344,
                                      columnNumber: 39
                                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
                                      type: "text",
                                      className: "moto-widget-contact_form-field moto-widget-contact_form-input",
                                      placeholder: "\u0412\u0435\u0442\u0435\u0440\u0430\u043D \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442\u0441\u044F",
                                      required: true,
                                      name: "kinship",
                                      value: kinship,
                                      onChange: e => setKinship(e.target.value),
                                      id: "field_name_wid__contact_form__5b18e5dd7a183"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 350,
                                      columnNumber: 39
                                    }, this)]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 343,
                                    columnNumber: 37
                                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                                    className: "moto-widget-contact_form-group",
                                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
                                      htmlFor: "field_name_wid__contact_form__5b18e5dd7a183",
                                      className: "moto-widget-contact_form-label",
                                      children: "Email \u0430\u0434\u0440\u0435\u0441"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 365,
                                      columnNumber: 39
                                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
                                      type: "text",
                                      className: "moto-widget-contact_form-field moto-widget-contact_form-input",
                                      placeholder: "Email \u0430\u0434\u0440\u0435\u0441",
                                      required: true,
                                      name: "email",
                                      value: email,
                                      onChange: e => setEmail(e.target.value),
                                      id: "field_name_wid__contact_form__5b18e5dd7a183"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 371,
                                      columnNumber: 39
                                    }, this)]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 364,
                                    columnNumber: 37
                                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                                    className: "moto-widget-contact_form-group",
                                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
                                      htmlFor: "field_name_wid__contact_form__5b18e5dd7a183",
                                      className: "moto-widget-contact_form-label",
                                      children: "\u041F\u043E\u0434\u043F\u0438\u0441\u044C"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 386,
                                      columnNumber: 39
                                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
                                      type: "text",
                                      className: "moto-widget-contact_form-field moto-widget-contact_form-input",
                                      placeholder: "\u0412\u0435\u0442\u0435\u0440\u0430\u043D \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442\u0441\u044F",
                                      name: "signature",
                                      value: signature,
                                      onChange: e => setSignature(e.target.value),
                                      id: "field_name_wid__contact_form__5b18e5dd7a183"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 392,
                                      columnNumber: 39
                                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                                      className: "moto-widget-contact_form-field-error",
                                      children: "\u041D\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 403,
                                      columnNumber: 39
                                    }, this)]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 385,
                                    columnNumber: 37
                                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                                    className: "moto-widget-contact_form-group",
                                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
                                      htmlFor: "field_message_wid__contact_form__5b18e5dd7a183",
                                      className: "moto-widget-contact_form-label",
                                      children: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 409,
                                      columnNumber: 39
                                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_editor__WEBPACK_IMPORTED_MODULE_2__.default, {
                                      name: "description",
                                      onChange: data => {
                                        setDescription(data), setDescriptionError("");
                                      },
                                      editorLoaded: editorLoaded
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 415,
                                      columnNumber: 39
                                    }, this), description_error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                                      className: "moto-widget-contact_form-field-error",
                                      children: description_error
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 424,
                                      columnNumber: 41
                                    }, this)]
                                  }, void 0, true, {
                                    fileName: _jsxFileName,
                                    lineNumber: 408,
                                    columnNumber: 37
                                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                                    className: "moto-widget-contact_form-success ng-cloak",
                                    children: "Your message was sent successfully"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 430,
                                    columnNumber: 37
                                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                                    className: "moto-widget-contact_form-danger ng-cloak",
                                    children: "Sorry, your message was not sent"
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 433,
                                    columnNumber: 37
                                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                                    className: "moto-widget-contact_form-buttons",
                                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                                      className: "moto-widget moto-widget-button moto-preset-2 moto-preset-provider-default moto-align-left",
                                      "data-preset": "2",
                                      "data-align": "left",
                                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
                                        type: "submit",
                                        className: "moto-widget-button-link moto-size-medium",
                                        "data-size": "medium",
                                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                                          className: "fa moto-widget-theme-icon"
                                        }, void 0, false, {
                                          fileName: _jsxFileName,
                                          lineNumber: 447,
                                          columnNumber: 43
                                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                                          className: "moto-widget-button-label",
                                          children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
                                        }, void 0, false, {
                                          fileName: _jsxFileName,
                                          lineNumber: 448,
                                          columnNumber: 43
                                        }, this)]
                                      }, void 0, true, {
                                        fileName: _jsxFileName,
                                        lineNumber: 442,
                                        columnNumber: 41
                                      }, this)
                                    }, void 0, false, {
                                      fileName: _jsxFileName,
                                      lineNumber: 437,
                                      columnNumber: 39
                                    }, this)
                                  }, void 0, false, {
                                    fileName: _jsxFileName,
                                    lineNumber: 436,
                                    columnNumber: 37
                                  }, this)]
                                }, void 0, true, {
                                  fileName: _jsxFileName,
                                  lineNumber: 184,
                                  columnNumber: 35
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 180,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 173,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 167,
                            columnNumber: 29
                          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                            className: "moto-widget moto-widget-row__column moto-cell col-sm-1 moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-auto",
                            "data-widget": "row.column",
                            "data-container": "container",
                            "data-spacing": "aaaa"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 458,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 131,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 130,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 124,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "@ckeditor/ckeditor5-build-classic":
/*!****************************************************!*\
  !*** external "@ckeditor/ckeditor5-build-classic" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@ckeditor/ckeditor5-build-classic");

/***/ }),

/***/ "@ckeditor/ckeditor5-react":
/*!********************************************!*\
  !*** external "@ckeditor/ckeditor5-react" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@ckeditor/ckeditor5-react");

/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../server/image-config":
/*!***************************************************!*\
  !*** external "next/dist/server/image-config.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/to-base-64":
/*!*****************************************************!*\
  !*** external "next/dist/shared/lib/to-base-64.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "?5c99":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/add-hero.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vY29tcG9uZW50cy9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9jb21wb25lbnRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vY29tcG9uZW50cy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2FkZC1oZXJvLmpzIiwid2VicGFjazovL2Zyb250ZW5kLy4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwiQGNrZWRpdG9yL2NrZWRpdG9yNS1idWlsZC1jbGFzc2ljXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJAY2tlZGl0b3IvY2tlZGl0b3I1LXJlYWN0XCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Zyb250ZW5kL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Zyb250ZW5kL2lnbm9yZWR8RDpcXGNvZGluZ1xcRGphbmdvXFwyMDIxXFxtdXNldW0tbmV3XFxmcm9udGVuZFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxzaGFyZWRcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRvcih7IG9uQ2hhbmdlLCBlZGl0b3JMb2FkZWQsIG5hbWUsIHZhbHVlIH0pIHtcclxuICBjb25zdCBlZGl0b3JSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCB7IENLRWRpdG9yLCBDbGFzc2ljRWRpdG9yIH0gPSBlZGl0b3JSZWYuY3VycmVudCB8fCB7fTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGVkaXRvclJlZi5jdXJyZW50ID0ge1xyXG4gICAgICBDS0VkaXRvcjogcmVxdWlyZShcIkBja2VkaXRvci9ja2VkaXRvcjUtcmVhY3RcIikuQ0tFZGl0b3IsIC8vIHYzK1xyXG4gICAgICBDbGFzc2ljRWRpdG9yOiByZXF1aXJlKFwiQGNrZWRpdG9yL2NrZWRpdG9yNS1idWlsZC1jbGFzc2ljXCIpLFxyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7ZWRpdG9yTG9hZGVkID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW90by13aWRnZXQtY29udGFjdF9mb3JtLWZpZWxkIG1vdG8td2lkZ2V0LWNvbnRhY3RfZm9ybS1pbnB1dFwiPlxyXG4gICAgICAgICAgPENLRWRpdG9yXHJcbiAgICAgICAgICAgIHR5cGU9XCJcIlxyXG4gICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICBlZGl0b3I9e0NsYXNzaWNFZGl0b3J9XHJcbiAgICAgICAgICAgIGNvbmZpZz17e1xyXG4gICAgICAgICAgICAgIHRvb2xiYXI6IFtcImhlYWRpbmdcIiwgXCJib2xkXCIsIFwiaXRhbGljXCIsIFwidXBsb2FkSW1hZ2VcIl0sXHJcbiAgICAgICAgICAgICAgY2tmaW5kZXI6IHtcclxuICAgICAgICAgICAgICAgIHVwbG9hZFVybDogXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvY2tlZGl0b3IvdXBsb2FkL1wiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGRhdGE9e3ZhbHVlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBlZGl0b3IpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBkYXRhID0gZWRpdG9yLmdldERhdGEoKTtcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh7IGV2ZW50LCBlZGl0b3IsIGRhdGEgfSlcclxuICAgICAgICAgICAgICBvbkNoYW5nZShkYXRhKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdj5FZGl0b3IgbG9hZGluZzwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyXHJcbiAgICAgIGlkPVwic2VjdGlvbi1mb290ZXJcIlxyXG4gICAgICBjbGFzc05hbWU9XCJmb290ZXIgbW90by1zZWN0aW9uXCJcclxuICAgICAgZGF0YS13aWRnZXQ9XCJzZWN0aW9uXCJcclxuICAgICAgZGF0YS1jb250YWluZXI9XCJzZWN0aW9uXCJcclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1vdG8td2lkZ2V0IG1vdG8td2lkZ2V0LWJsb2NrIG1vdG8tYmctY29sb3IxXzQgbW90by1zcGFjaW5nLXRvcC1hdXRvIG1vdG8tc3BhY2luZy1yaWdodC1hdXRvIG1vdG8tc3BhY2luZy1ib3R0b20tYXV0byBtb3RvLXNwYWNpbmctbGVmdC1hdXRvXCJcclxuICAgICAgICBkYXRhLXdpZGdldD1cImJsb2NrXCJcclxuICAgICAgICBkYXRhLXNwYWNpbmc9XCJhYWFhXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdG8tY2VsbCBjb2wtc20tMTJcIiBkYXRhLWNvbnRhaW5lcj1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGRhdGEtd2lkZ2V0LWlkPVwid2lkX19zcGFjZXJfXzViMThkM2IxYTNkMDZcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW90by13aWRnZXQgbW90by13aWRnZXQtc3BhY2VyIG1vdG8tcHJlc2V0LWRlZmF1bHQgbW90by1zcGFjaW5nLXRvcC1tZWRpdW0gbW90by1zcGFjaW5nLXJpZ2h0LWF1dG8gbW90by1zcGFjaW5nLWJvdHRvbS1zbWFsbCBtb3RvLXNwYWNpbmctbGVmdC1hdXRvIFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXdpZGdldD1cInNwYWNlclwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXByZXNldD1cImRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1zcGFjaW5nPVwibWFzYVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXZpc2libGUtb249XCJtb2JpbGUtdlwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3RvLXdpZGdldC1zcGFjZXItYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMzBweFwiIH19XHJcbiAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW90by13aWRnZXQgbW90by13aWRnZXQtcm93IHJvdy1maXhlZCBtb3RvLXNwYWNpbmctdG9wLWF1dG8gbW90by1zcGFjaW5nLXJpZ2h0LWF1dG8gbW90by1zcGFjaW5nLWJvdHRvbS1hdXRvIG1vdG8tc3BhY2luZy1sZWZ0LWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1ncmlkLXR5cGU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXdpZGdldD1cInJvd1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXNwYWNpbmc9XCJhYWFhXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIGRhdGEtY29udGFpbmVyPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW90by13aWRnZXQgbW90by13aWRnZXQtcm93X19jb2x1bW4gbW90by1jZWxsIGNvbC1zbS0zIG1vdG8tc3BhY2luZy10b3AtYXV0byBtb3RvLXNwYWNpbmctcmlnaHQtYXV0byBtb3RvLXNwYWNpbmctYm90dG9tLWF1dG8gbW90by1zcGFjaW5nLWxlZnQtYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXdpZGdldD1cInJvdy5jb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS1jb250YWluZXI9XCJjb250YWluZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS1zcGFjaW5nPVwiYWFhYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3RvLXdpZGdldCBtb3RvLXdpZGdldC1yb3cgbW90by1qdXN0aWZ5LWNvbnRlbnRfY2VudGVyIG1vdG8tc3BhY2luZy10b3AtYXV0byBtb3RvLXNwYWNpbmctcmlnaHQtYXV0byBtb3RvLXNwYWNpbmctYm90dG9tLXNtYWxsIG1vdG8tc3BhY2luZy1sZWZ0LWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWdyaWQtdHlwZT1cInhzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS13aWRnZXQ9XCJyb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNwYWNpbmc9XCJhYXNhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1iZy1wb3NpdGlvbj1cImxlZnQgdG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIGRhdGEtY29udGFpbmVyPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vdG8td2lkZ2V0IG1vdG8td2lkZ2V0LXJvd19fY29sdW1uIG1vdG8tY2VsbCBjb2wteHMtMyBtb3RvLXNwYWNpbmctdG9wLWF1dG8gbW90by1zcGFjaW5nLXJpZ2h0LWF1dG8gbW90by1zcGFjaW5nLWJvdHRvbS1hdXRvIG1vdG8tc3BhY2luZy1sZWZ0LWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXdpZGdldD1cInJvdy5jb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNvbnRhaW5lcj1cImNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc3BhY2luZz1cImFhYWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJnLXBvc2l0aW9uPVwibGVmdCB0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS13aWRnZXQtaWQ9XCJ3aWRfMTUyOTYxMDQzNF8ybGludG1iYWhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vdG8td2lkZ2V0IG1vdG8td2lkZ2V0LWltYWdlIG1vdG8tcHJlc2V0LWRlZmF1bHQgIG1vdG8tc3BhY2luZy10b3AtYXV0byBtb3RvLXNwYWNpbmctcmlnaHQtYXV0byBtb3RvLXNwYWNpbmctYm90dG9tLWF1dG8gbW90by1zcGFjaW5nLWxlZnQtYXV0byAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXdpZGdldD1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj1cInBhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3RvLXdpZGdldC1pbWFnZS1saW5rIG1vdG8tbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vdG8td2lkZ2V0LWltYWdlLXBpY3R1cmUgbGF6eWxvYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1nL2xvZ29zL2xvZ29fYXJjaGVvLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIjI2MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW90by13aWRnZXQgbW90by13aWRnZXQtcm93X19jb2x1bW4gbW90by1jZWxsIGNvbC14cy05IG1vdG8tc3BhY2luZy10b3AtYXV0byBtb3RvLXNwYWNpbmctcmlnaHQtYXV0byBtb3RvLXNwYWNpbmctYm90dG9tLWF1dG8gbW90by1zcGFjaW5nLWxlZnQtYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtd2lkZ2V0PVwicm93LmNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY29udGFpbmVyPVwiY29udGFpbmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zcGFjaW5nPVwiYWFhYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmctcG9zaXRpb249XCJsZWZ0IHRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3RvLXdpZGdldCBtb3RvLXdpZGdldC10ZXh0IG1vdG8tcHJlc2V0LWRlZmF1bHQgbW90by1zcGFjaW5nLXRvcC1hdXRvIG1vdG8tc3BhY2luZy1yaWdodC1hdXRvIG1vdG8tc3BhY2luZy1ib3R0b20tYXV0byBtb3RvLXNwYWNpbmctbGVmdC1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXdpZGdldD1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcHJlc2V0PVwiZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zcGFjaW5nPVwiYWFhYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3RvLXdpZGdldC10ZXh0LWNvbnRlbnQgbW90by13aWRnZXQtdGV4dC1lZGl0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibW90by10ZXh0X3N5c3RlbV8xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYWN0aW9uPVwicGFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWlkPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3RvLWxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vdG8tY29sb3I1XzVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQW50aWd1YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibW90by10ZXh0X3N5c3RlbV8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYWN0aW9uPVwicGFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWlkPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3RvLWxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCQ0YDRhdC10L7Qu9C+0LPQuNGH0LXRgdC60LjQuSDQutGA0YPQttC+0LpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW90by13aWRnZXQgbW90by13aWRnZXQtdGV4dCBtb3RvLXByZXNldC1kZWZhdWx0IG1vdG8tc3BhY2luZy10b3AtYXV0byBtb3RvLXNwYWNpbmctcmlnaHQtYXV0byBtb3RvLXNwYWNpbmctYm90dG9tLW1lZGl1bSBtb3RvLXNwYWNpbmctbGVmdC1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS13aWRnZXQ9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wcmVzZXQ9XCJkZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zcGFjaW5nPVwiYWFtYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3RvLXdpZGdldC10ZXh0LWNvbnRlbnQgbW90by13aWRnZXQtdGV4dC1lZGl0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1vdG8tdGV4dF9zeXN0ZW1fMTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCQ0YDRhdC10L7Qu9C+0LPQuNGH0LXRgdC60LjQuSDQutGA0YPQttC+0Log0YHQvtC30LTQsNC9INC/0YDQuCDQu9Cw0LHQvtGA0LDRgtC+0YDQuNC4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQsNGA0YXQtdC+0LvQvtCz0LjQuCDQuCDRjdGC0L3QvtC70L7Qs9C40LguINCk0YPQvdC60YbQuNC+0L3QuNGA0YPQtdGCINCy0L4g0LLQvdC10YPRh9C10LHQvdC+0LVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCy0YDQtdC80Y8g0LIg0YLQtdGH0LXQvdC40LUg0LLRgdC10LPQviDRg9GH0LXQsdC90L7Qs9C+INCz0L7QtNCwLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtb3RvLXRleHRfc3lzdGVtXzE0XCI+Jm5ic3A7PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1vdG8tdGV4dF8xODZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vdG8tY29sb3IzXzNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmFcIj7vhok8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsgJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ay5jb20vdGF0bmdwdVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW90by1saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KTQk9CR0J7QoyDQktCeINCd0JPQn9CjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1vdG8tdGV4dF8xODZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vdG8tY29sb3IzXzNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmFcIj7vhok8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDt7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3RvLWxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ay5jb20vYXJoZW9jbHViXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbnRpZ3VhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vdG8td2lkZ2V0IG1vdG8td2lkZ2V0LXJvd19fY29sdW1uIG1vdG8tY2VsbCBjb2wtc20tMyBtb3RvLXNwYWNpbmctdG9wLWF1dG8gbW90by1zcGFjaW5nLXJpZ2h0LWF1dG8gbW90by1zcGFjaW5nLWJvdHRvbS1hdXRvIG1vdG8tc3BhY2luZy1sZWZ0LWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS13aWRnZXQ9XCJyb3cuY29sdW1uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY29udGFpbmVyPVwiY29udGFpbmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc3BhY2luZz1cImFhYWFcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW90by13aWRnZXQgbW90by13aWRnZXQtdGV4dCBtb3RvLXByZXNldC1kZWZhdWx0IG1vdG8tc3BhY2luZy10b3AtYXV0byBtb3RvLXNwYWNpbmctcmlnaHQtYXV0byBtb3RvLXNwYWNpbmctYm90dG9tLXNtYWxsIG1vdG8tc3BhY2luZy1sZWZ0LWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXdpZGdldD1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXByZXNldD1cImRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNwYWNpbmc9XCJhYXNhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdG8td2lkZ2V0LXRleHQtY29udGVudCBtb3RvLXdpZGdldC10ZXh0LWVkaXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibW90by10ZXh0X3N5c3RlbV8xMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibW90by1jb2xvcjVfNVwiPtCY0J3QpNCe0KDQnNCQ0KbQmNCvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW90by13aWRnZXQgbW90by13aWRnZXQtdGV4dCBtb3RvLXByZXNldC1kZWZhdWx0IG1vdG8tc3BhY2luZy10b3AtYXV0byBtb3RvLXNwYWNpbmctcmlnaHQtYXV0byBtb3RvLXNwYWNpbmctYm90dG9tLW1lZGl1bSBtb3RvLXNwYWNpbmctbGVmdC1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS13aWRnZXQ9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wcmVzZXQ9XCJkZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zcGFjaW5nPVwiYWFtYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3RvLXdpZGdldC10ZXh0LWNvbnRlbnQgbW90by13aWRnZXQtdGV4dC1lZGl0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtb3RvLXRleHRfMjA1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibW90by1saW5rXCI+0JPQu9Cw0LLQvdCw0Y88L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibW90by10ZXh0XzIwNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2hlcm9lc2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1vdG8tbGlua1wiPtCT0LXRgNC+0Lg8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibW90by10ZXh0XzIwNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2FkZC1oZXJvYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibW90by1saW5rXCI+0KPQstC10LrQvtCy0LXRh9C40YLRjDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vdG8td2lkZ2V0IG1vdG8td2lkZ2V0LXJvdyByb3ctZml4ZWQgbW90by1iZy1jb2xvcl9jdXN0b20xIG1vdG8tc3BhY2luZy10b3Atc21hbGwgbW90by1zcGFjaW5nLXJpZ2h0LWF1dG8gbW90by1zcGFjaW5nLWJvdHRvbS1zbWFsbCBtb3RvLXNwYWNpbmctbGVmdC1hdXRvXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZ3JpZC10eXBlPVwic21cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13aWRnZXQ9XCJyb3dcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1zcGFjaW5nPVwic2FzYVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBkYXRhLWNvbnRhaW5lcj1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vdG8td2lkZ2V0IG1vdG8td2lkZ2V0LXJvd19fY29sdW1uIG1vdG8tY2VsbCBjb2wtc20tMTIgbW90by1zcGFjaW5nLXRvcC1hdXRvIG1vdG8tc3BhY2luZy1yaWdodC1hdXRvIG1vdG8tc3BhY2luZy1ib3R0b20tYXV0byBtb3RvLXNwYWNpbmctbGVmdC1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtd2lkZ2V0PVwicm93LmNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNvbnRhaW5lcj1cImNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNwYWNpbmc9XCJhYWFhXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vdG8td2lkZ2V0IG1vdG8td2lkZ2V0LXRleHQgbW90by1wcmVzZXQtZGVmYXVsdCBtb3RvLXNwYWNpbmctdG9wLWF1dG8gbW90by1zcGFjaW5nLXJpZ2h0LWF1dG8gbW90by1zcGFjaW5nLWJvdHRvbS1hdXRvIG1vdG8tc3BhY2luZy1sZWZ0LWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXdpZGdldD1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXByZXNldD1cImRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNwYWNpbmc9XCJhYWFhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdG8td2lkZ2V0LXRleHQtY29udGVudCBtb3RvLXdpZGdldC10ZXh0LWVkaXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW90by10ZXh0X25vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0J3Qk9Cf0KMgfCDQo9GB0LvQvtCy0LjRj3tcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vdG8tbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvYXNzZXRzL2ZpbGVzL3Rlcm1zLXVzZS5wZGZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQv9C+0LvRjNC30L7QstCw0YLQtdC70YzRgdC60L7Qs9C+INGB0L7Qs9C70LDRiNC10L3QuNGPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9vdGVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3QgW2hpZGUsIHNldEhpZGVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyXHJcbiAgICAgIGlkPVwic2VjdGlvbi1oZWFkZXJcIlxyXG4gICAgICBjbGFzc05hbWU9XCJoZWFkZXIgbW90by1zZWN0aW9uXCJcclxuICAgICAgZGF0YS13aWRnZXQ9XCJzZWN0aW9uXCJcclxuICAgICAgZGF0YS1jb250YWluZXI9XCJzZWN0aW9uXCJcclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1vdG8td2lkZ2V0IG1vdG8td2lkZ2V0LWJsb2NrIG1vdG8tc3BhY2luZy10b3AtYXV0byBtb3RvLXNwYWNpbmctcmlnaHQtYXV0byBtb3RvLXNwYWNpbmctYm90dG9tLWF1dG8gbW90by1zcGFjaW5nLWxlZnQtYXV0b1wiXHJcbiAgICAgICAgZGF0YS13aWRnZXQ9XCJibG9ja1wiXHJcbiAgICAgICAgZGF0YS1zcGFjaW5nPVwiYWFhYVwiXHJcbiAgICAgICAgZGF0YS1iZy1wb3NpdGlvbj1cInRvcFwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3RvLWNlbGwgY29sLXNtLTEyXCIgZGF0YS1jb250YWluZXI9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3RvLXdpZGdldCBtb3RvLXdpZGdldC1jb250YWluZXIgbW90by1jb250YWluZXJfaGVhZGVyXzViMmJlMmYxMlwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXdpZGdldD1cImNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWNvbnRhaW5lcj1cImNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLW1vdG8tc3RpY2t5PVwie31cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1jc3MtbmFtZT1cIm1vdG8tY29udGFpbmVyX2hlYWRlcl81YjJiZTJmMTJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1iZy1wb3NpdGlvbj1cImxlZnQgdG9wXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vdG8td2lkZ2V0IG1vdG8td2lkZ2V0LXJvdyByb3ctZml4ZWQgbW90by1qdXN0aWZ5LWNvbnRlbnRfY2VudGVyIG1vdG8tc3BhY2luZy10b3Atc21hbGwgbW90by1zcGFjaW5nLXJpZ2h0LWF1dG8gbW90by1zcGFjaW5nLWJvdHRvbS1zbWFsbCBtb3RvLXNwYWNpbmctbGVmdC1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1ncmlkLXR5cGU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtd2lkZ2V0PVwicm93XCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1zcGFjaW5nPVwic2FzYVwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtYmctcG9zaXRpb249XCJsZWZ0IHRvcFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBkYXRhLWNvbnRhaW5lcj1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3RvLXdpZGdldCBtb3RvLXdpZGdldC1yb3dfX2NvbHVtbiBtb3RvLWNlbGwgY29sLXNtLTMgbW90by1zcGFjaW5nLXRvcC1hdXRvIG1vdG8tc3BhY2luZy1yaWdodC1hdXRvIG1vdG8tc3BhY2luZy1ib3R0b20tYXV0byBtb3RvLXNwYWNpbmctbGVmdC1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS13aWRnZXQ9XCJyb3cuY29sdW1uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jb250YWluZXI9XCJjb250YWluZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNwYWNpbmc9XCJhYWFhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1iZy1wb3NpdGlvbj1cImxlZnQgdG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vdG8td2lkZ2V0IG1vdG8td2lkZ2V0LXJvdyBtb3RvLWp1c3RpZnktY29udGVudF9jZW50ZXIgbW90by1zcGFjaW5nLXRvcC1hdXRvIG1vdG8tc3BhY2luZy1yaWdodC1hdXRvIG1vdG8tc3BhY2luZy1ib3R0b20tYXV0byBtb3RvLXNwYWNpbmctbGVmdC1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWdyaWQtdHlwZT1cInhzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXdpZGdldD1cInJvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zcGFjaW5nPVwiYWFhYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1iZy1wb3NpdGlvbj1cImxlZnQgdG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIGRhdGEtY29udGFpbmVyPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3RvLXdpZGdldCBtb3RvLXdpZGdldC1yb3dfX2NvbHVtbiBtb3RvLWNlbGwgY29sLXhzLTMgbW90by1zcGFjaW5nLXRvcC1hdXRvIG1vdG8tc3BhY2luZy1yaWdodC1hdXRvIG1vdG8tc3BhY2luZy1ib3R0b20tYXV0byBtb3RvLXNwYWNpbmctbGVmdC1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXdpZGdldD1cInJvdy5jb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY29udGFpbmVyPVwiY29udGFpbmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNwYWNpbmc9XCJhYWFhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJnLXBvc2l0aW9uPVwibGVmdCB0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS13aWRnZXQtaWQ9XCJ3aWRfMTUyOTYwMjgwMV83dGI1cjhxa3lcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW90by13aWRnZXQgbW90by13aWRnZXQtaW1hZ2UgbW90by1wcmVzZXQtZGVmYXVsdCAgbW90by1zcGFjaW5nLXRvcC1hdXRvIG1vdG8tc3BhY2luZy1yaWdodC1hdXRvIG1vdG8tc3BhY2luZy1ib3R0b20tYXV0byBtb3RvLXNwYWNpbmctbGVmdC1hdXRvICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS13aWRnZXQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFjdGlvbj1cInBhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vdG8td2lkZ2V0LWltYWdlLWxpbmsgbW90by1saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW90by13aWRnZXQtaW1hZ2UtcGljdHVyZSBsYXp5bG9hZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pbWcvbG9nb3MvbG9nb19uZ3B1LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3RvLXdpZGdldCBtb3RvLXdpZGdldC1yb3dfX2NvbHVtbiBtb3RvLWNlbGwgY29sLXhzLTkgbW90by1zcGFjaW5nLXRvcC1hdXRvIG1vdG8tc3BhY2luZy1yaWdodC1hdXRvIG1vdG8tc3BhY2luZy1ib3R0b20tYXV0byBtb3RvLXNwYWNpbmctbGVmdC1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXdpZGdldD1cInJvdy5jb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY29udGFpbmVyPVwiY29udGFpbmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNwYWNpbmc9XCJhYWFhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJnLXBvc2l0aW9uPVwibGVmdCB0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW90by13aWRnZXQgbW90by13aWRnZXQtdGV4dCBtb3RvLXByZXNldC1kZWZhdWx0IG1vdG8tc3BhY2luZy10b3AtYXV0byBtb3RvLXNwYWNpbmctcmlnaHQtYXV0byBtb3RvLXNwYWNpbmctYm90dG9tLWF1dG8gbW90by1zcGFjaW5nLWxlZnQtYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXdpZGdldD1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wcmVzZXQ9XCJkZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc3BhY2luZz1cImFhYWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW90by13aWRnZXQtdGV4dC1jb250ZW50IG1vdG8td2lkZ2V0LXRleHQtZWRpdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibW90by10ZXh0X3N5c3RlbV8xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYWN0aW9uPVwicGFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaWQ9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW90by1saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J3Qk9Cf0KNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibW90by10ZXh0X3N5c3RlbV8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYWN0aW9uPVwicGFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaWQ9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW90by1saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JzRg9C30LXQuSDRgdC70LDQstGLXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW90by13aWRnZXQgbW90by13aWRnZXQtcm93X19jb2x1bW4gbW90by1jZWxsIGNvbC1zbS03IG1vdG8tc3BhY2luZy10b3AtYXV0byBtb3RvLXNwYWNpbmctcmlnaHQtYXV0byBtb3RvLXNwYWNpbmctYm90dG9tLWF1dG8gbW90by1zcGFjaW5nLWxlZnQtYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtd2lkZ2V0PVwicm93LmNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY29udGFpbmVyPVwiY29udGFpbmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zcGFjaW5nPVwiYWFhYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmctcG9zaXRpb249XCJsZWZ0IHRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXdpZGdldC1pZD1cIndpZF8xNTI5NjAyODAxX2ozbDg4Ynl0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbW90by13aWRnZXQgbW90by13aWRnZXQtbWVudSBtb3RvLXByZXNldC0zIG1vdG8tYWxpZ24tY2VudGVyIG1vdG8tYWxpZ24tY2VudGVyX21vYmlsZS1oIG1vdG8tc3BhY2luZy10b3Atc21hbGwgbW90by1zcGFjaW5nLXJpZ2h0LWF1dG8gbW90by1zcGFjaW5nLWJvdHRvbS1zbWFsbCBtb3RvLXNwYWNpbmctbGVmdC1hdXRvICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaGlkZSAmJiBcIm1vdG8td2lkZ2V0LW1lbnUtbW9iaWxlLW9wZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcHJlc2V0PVwiM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS13aWRnZXQ9XCJtZW51XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3RvLXdpZGdldC1tZW51LXRvZ2dsZS1idG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRIaWRlKCFoaWRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtb3RvLXdpZGdldC1tZW51LXRvZ2dsZS1idG4taWNvbiBmYSBmYS1iYXJzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibW90by13aWRnZXQtbWVudS1saXN0IG1vdG8td2lkZ2V0LW1lbnUtbGlzdF9ob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibW90by13aWRnZXQtbWVudS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYWN0aW9uPVwicGFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Btb3RvLXdpZGdldC1tZW51LWxpbmsgbW90by13aWRnZXQtbWVudS1saW5rLWxldmVsLTEgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBcIi9cIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1vdG8td2lkZ2V0LW1lbnUtbGluay1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBtb3RvLWxpbmtgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCT0LvQsNCy0L3QsNGPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1vdG8td2lkZ2V0LW1lbnUtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2hlcm9lc2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Btb3RvLXdpZGdldC1tZW51LWxpbmsgbW90by13aWRnZXQtbWVudS1saW5rLWxldmVsLTEgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBcIi9oZXJvZXNcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1vdG8td2lkZ2V0LW1lbnUtbGluay1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBtb3RvLWxpbmtgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCT0LXRgNC+0LhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW90by13aWRnZXQgbW90by13aWRnZXQtcm93X19jb2x1bW4gbW90by1jZWxsIGNvbC1zbS0yIG1vdG8tc3BhY2luZy10b3AtYXV0byBtb3RvLXNwYWNpbmctcmlnaHQtYXV0byBtb3RvLXNwYWNpbmctYm90dG9tLWF1dG8gbW90by1zcGFjaW5nLWxlZnQtYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtd2lkZ2V0PVwicm93LmNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY29udGFpbmVyPVwiY29udGFpbmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zcGFjaW5nPVwiYWFhYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmctcG9zaXRpb249XCJsZWZ0IHRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXdpZGdldC1pZD1cIndpZF8xNTI5NjAyODAxX3RuaGp6czJleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW90by13aWRnZXQgbW90by13aWRnZXQtYnV0dG9uIG1vdG8tcHJlc2V0LTQgbW90by1wcmVzZXQtcHJvdmlkZXItZGVmYXVsdCBtb3RvLWFsaWduLXJpZ2h0IG1vdG8tYWxpZ24tcmlnaHRfdGFibGV0IG1vdG8tYWxpZ24tY2VudGVyX21vYmlsZS1oIG1vdG8tc3BhY2luZy10b3AtYXV0byBtb3RvLXNwYWNpbmctcmlnaHQtYXV0byBtb3RvLXNwYWNpbmctYm90dG9tLWF1dG8gbW90by1zcGFjaW5nLWxlZnQtYXV0byAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXdpZGdldD1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2FkZC1oZXJvYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtb3RvLXdpZGdldC1idXR0b24tbGluayBtb3RvLXNpemUtbWVkaXVtIG1vdG8tbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYSBtb3RvLXdpZGdldC10aGVtZS1pY29uXCI+PC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibW90by13aWRnZXQtYnV0dG9uLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KPQstC10LrQvtCy0LXRh9C40YLRjFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vdG8td2lkZ2V0IG1vdG8td2lkZ2V0LXJvdyBtb3RvLXNwYWNpbmctdG9wLWF1dG8gbW90by1zcGFjaW5nLXJpZ2h0LWF1dG8gbW90by1zcGFjaW5nLWJvdHRvbS1hdXRvIG1vdG8tc3BhY2luZy1sZWZ0LWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1ncmlkLXR5cGU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXdpZGdldD1cInJvd1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXNwYWNpbmc9XCJhYWFhXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmctcG9zaXRpb249XCJsZWZ0IHRvcFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBkYXRhLWNvbnRhaW5lcj1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vdG8td2lkZ2V0IG1vdG8td2lkZ2V0LXJvd19fY29sdW1uIG1vdG8tY2VsbCBjb2wtc20tMTIgbW90by1zcGFjaW5nLXRvcC1hdXRvIG1vdG8tc3BhY2luZy1yaWdodC1hdXRvIG1vdG8tc3BhY2luZy1ib3R0b20tYXV0byBtb3RvLXNwYWNpbmctbGVmdC1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtd2lkZ2V0PVwicm93LmNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNvbnRhaW5lcj1cImNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNwYWNpbmc9XCJhYWFhXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYmctcG9zaXRpb249XCJsZWZ0IHRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXdpZGdldC1pZD1cIndpZF8xNTI5NjAyODAxX3JtOHNuMjQ4cVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vdG8td2lkZ2V0IG1vdG8td2lkZ2V0LXNwYWNlciBtb3RvLXByZXNldC1kZWZhdWx0IG1vdG8tc3BhY2luZy10b3Atc21hbGwgbW90by1zcGFjaW5nLXJpZ2h0LWF1dG8gbW90by1zcGFjaW5nLWJvdHRvbS1hdXRvIG1vdG8tc3BhY2luZy1sZWZ0LWF1dG8gbW90by12aXNpYmxlLW9uX2Rlc2t0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXdpZGdldD1cInNwYWNlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcHJlc2V0PVwiZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc3BhY2luZz1cInNhYWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZpc2libGUtb249XCJkZXNrdG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vdG8td2lkZ2V0LXNwYWNlci1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjVweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2hlYWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4sIHRpdGxlID0gXCLQk9C10YDQvtC4XCIgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e3RpdGxlfSB8INCd0JPQn9CjINCc0YPQt9C10Lkg0YHQu9Cw0LLRizwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJjb250ZW50LXdyYXBcIj5cclxuICAgICAgICA8bWFpbiBpZD1cImNvbnRlbnRcIiByb2xlPVwibWFpblwiPlxyXG4gICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBJbWFnZTE7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9oZWFkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9oZWFkXCIpKTtcbnZhciBfdG9CYXNlNjQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi90by1iYXNlLTY0XCIpO1xudmFyIF9pbWFnZUNvbmZpZyA9IHJlcXVpcmUoXCIuLi9zZXJ2ZXIvaW1hZ2UtY29uZmlnXCIpO1xudmFyIF91c2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICAgIGZvcih2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uKHN5bSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge1xuICAgIH07XG4gICAgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICAgIHZhciBrZXksIGk7XG4gICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG4gICAgICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHtcbiAgICB9O1xuICAgIHZhciB0YXJnZXQgPSB7XG4gICAgfTtcbiAgICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgdmFyIGtleSwgaTtcbiAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmNvbnN0IGxvYWRlZEltYWdlVVJMcyA9IG5ldyBTZXQoKTtcbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGdsb2JhbC5fX05FWFRfSU1BR0VfSU1QT1JURUQgPSB0cnVlO1xufVxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbXG4gICAgJ2xhenknLFxuICAgICdlYWdlcicsXG4gICAgdW5kZWZpbmVkXG5dO1xuY29uc3QgbG9hZGVycyA9IG5ldyBNYXAoW1xuICAgIFtcbiAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICBkZWZhdWx0TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdpbWdpeCcsXG4gICAgICAgIGltZ2l4TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdjbG91ZGluYXJ5JyxcbiAgICAgICAgY2xvdWRpbmFyeUxvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnYWthbWFpJyxcbiAgICAgICAgYWthbWFpTG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdjdXN0b20nLFxuICAgICAgICBjdXN0b21Mb2FkZXJcbiAgICBdLCBcbl0pO1xuY29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUyA9IFtcbiAgICAnZmlsbCcsXG4gICAgJ2ZpeGVkJyxcbiAgICAnaW50cmluc2ljJyxcbiAgICAncmVzcG9uc2l2ZScsXG4gICAgdW5kZWZpbmVkLCBcbl07XG5mdW5jdGlvbiBpc1N0YXRpY1JlcXVpcmUoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5kZWZhdWx0ICE9PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBpc1N0YXRpY0ltYWdlRGF0YShzcmMpIHtcbiAgICByZXR1cm4gc3JjLnNyYyAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNTdGF0aWNJbXBvcnQoc3JjKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzcmMgPT09ICdvYmplY3QnICYmIChpc1N0YXRpY1JlcXVpcmUoc3JjKSB8fCBpc1N0YXRpY0ltYWdlRGF0YShzcmMpKTtcbn1cbmNvbnN0IHsgZGV2aWNlU2l6ZXM6IGNvbmZpZ0RldmljZVNpemVzICwgaW1hZ2VTaXplczogY29uZmlnSW1hZ2VTaXplcyAsIGxvYWRlcjogY29uZmlnTG9hZGVyICwgcGF0aDogY29uZmlnUGF0aCAsIGRvbWFpbnM6IGNvbmZpZ0RvbWFpbnMgLCAgfSA9IHByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTIHx8IF9pbWFnZUNvbmZpZy5pbWFnZUNvbmZpZ0RlZmF1bHQ7XG4vLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzID0gW1xuICAgIC4uLmNvbmZpZ0RldmljZVNpemVzLFxuICAgIC4uLmNvbmZpZ0ltYWdlU2l6ZXNcbl07XG5jb25maWdEZXZpY2VTaXplcy5zb3J0KChhLCBiKT0+YSAtIGJcbik7XG5hbGxTaXplcy5zb3J0KChhLCBiKT0+YSAtIGJcbik7XG5mdW5jdGlvbiBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpIHtcbiAgICBpZiAoc2l6ZXMgJiYgKGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSkge1xuICAgICAgICAvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuICAgICAgICBjb25zdCB2aWV3cG9ydFdpZHRoUmUgPSAvKF58XFxzKSgxP1xcZD9cXGQpdncvZztcbiAgICAgICAgY29uc3QgcGVyY2VudFNpemVzID0gW107XG4gICAgICAgIGZvcihsZXQgbWF0Y2g7IG1hdGNoID0gdmlld3BvcnRXaWR0aFJlLmV4ZWMoc2l6ZXMpOyBtYXRjaCl7XG4gICAgICAgICAgICBwZXJjZW50U2l6ZXMucHVzaChwYXJzZUludChtYXRjaFsyXSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwZXJjZW50U2l6ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBzbWFsbGVzdFJhdGlvID0gTWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSAqIDAuMDE7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdpZHRoczogYWxsU2l6ZXMuZmlsdGVyKChzKT0+cyA+PSBjb25maWdEZXZpY2VTaXplc1swXSAqIHNtYWxsZXN0UmF0aW9cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGhzOiBhbGxTaXplcyxcbiAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJyB8fCBsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGhzOiBjb25maWdEZXZpY2VTaXplcyxcbiAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB3aWR0aHMgPSBbXG4gICAgICAgIC4uLm5ldyBTZXQoLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbiAgICAgICAgLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4gICAgICAgIC8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuICAgICAgICAvLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuICAgICAgICAvLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuICAgICAgICAvLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4gICAgICAgIC8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuICAgICAgICAvLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG4gICAgICAgIFtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgd2lkdGggKiAyIC8qLCB3aWR0aCAqIDMqLyBcbiAgICAgICAgXS5tYXAoKHcpPT5hbGxTaXplcy5maW5kKChwKT0+cCA+PSB3XG4gICAgICAgICAgICApIHx8IGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aCAtIDFdXG4gICAgICAgICkpLCBcbiAgICBdO1xuICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRocyxcbiAgICAgICAga2luZDogJ3gnXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoeyBzcmMgLCB1bm9wdGltaXplZCAsIGxheW91dCAsIHdpZHRoICwgcXVhbGl0eSAsIHNpemVzICwgbG9hZGVyICB9KSB7XG4gICAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHNpemVzOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgeyB3aWR0aHMgLCBraW5kICB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKTtcbiAgICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDE7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2l6ZXM6ICFzaXplcyAmJiBraW5kID09PSAndycgPyAnMTAwdncnIDogc2l6ZXMsXG4gICAgICAgIHNyY1NldDogd2lkdGhzLm1hcCgodywgaSk9PmAke2xvYWRlcih7XG4gICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgIHF1YWxpdHksXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdcbiAgICAgICAgICAgIH0pfSAke2tpbmQgPT09ICd3JyA/IHcgOiBpICsgMX0ke2tpbmR9YFxuICAgICAgICApLmpvaW4oJywgJyksXG4gICAgICAgIC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4gICAgICAgIC8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbiAgICAgICAgLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuICAgICAgICAvLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuICAgICAgICAvLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbiAgICAgICAgLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG4gICAgICAgIHNyYzogbG9hZGVyKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHF1YWxpdHksXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhzW2xhc3RdXG4gICAgICAgIH0pXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldEludCh4KSB7XG4gICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoeCwgMTApO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzKSB7XG4gICAgY29uc3QgbG9hZCA9IGxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcik7XG4gICAgaWYgKGxvYWQpIHtcbiAgICAgICAgcmV0dXJuIGxvYWQoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICByb290OiBjb25maWdQYXRoXG4gICAgICAgIH0sIGxvYWRlclByb3BzKSk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7X2ltYWdlQ29uZmlnLlZBTElEX0xPQURFUlMuam9pbignLCAnKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gKTtcbn1cbi8vIFNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMzk3Nzc4MzMvMjY2NTM1IGZvciB3aHkgd2UgdXNlIHRoaXMgcmVmXG4vLyBoYW5kbGVyIGluc3RlYWQgb2YgdGhlIGltZydzIG9uTG9hZCBhdHRyaWJ1dGUuXG5mdW5jdGlvbiBoYW5kbGVMb2FkaW5nKGltZywgc3JjLCBsYXlvdXQsIHBsYWNlaG9sZGVyLCBvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgIGlmICghaW1nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlTG9hZCA9ICgpPT57XG4gICAgICAgIGlmICghaW1nLnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gJ2RlY29kZScgaW4gaW1nID8gaW1nLmRlY29kZSgpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICBwLmNhdGNoKCgpPT57XG4gICAgICAgICAgICB9KS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgaWYgKHBsYWNlaG9sZGVyID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmZpbHRlciA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsb2FkZWRJbWFnZVVSTHMuYWRkKHNyYyk7XG4gICAgICAgICAgICAgICAgaWYgKG9uTG9hZGluZ0NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgbmF0dXJhbFdpZHRoICwgbmF0dXJhbEhlaWdodCAgfSA9IGltZztcbiAgICAgICAgICAgICAgICAgICAgLy8gUGFzcyBiYWNrIHJlYWQtb25seSBwcmltaXRpdmUgdmFsdWVzIGJ1dCBub3QgdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIHVuZGVybHlpbmcgRE9NIGVsZW1lbnQgYmVjYXVzZSBpdCBjb3VsZCBiZSBtaXN1c2VkLlxuICAgICAgICAgICAgICAgICAgICBvbkxvYWRpbmdDb21wbGV0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsSGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHJlZiA9IGltZy5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBnZXRDb21wdXRlZFN0eWxlKGltZy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnICYmIHBhcmVudC5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbWF5IG5vdCByZW5kZXIgcHJvcGVybHkgYXMgYSBjaGlsZCBvZiBhIGZsZXggY29udGFpbmVyLiBDb25zaWRlciB3cmFwcGluZyB0aGUgaW1hZ2Ugd2l0aCBhIGRpdiB0byBjb25maWd1cmUgdGhlIHdpZHRoLmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaWxsJyAmJiBwYXJlbnQucG9zaXRpb24gIT09ICdyZWxhdGl2ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbWF5IG5vdCByZW5kZXIgcHJvcGVybHkgd2l0aCBhIHBhcmVudCB1c2luZyBwb3NpdGlvbjpcIiR7cGFyZW50LnBvc2l0aW9ufVwiLiBDb25zaWRlciBjaGFuZ2luZyB0aGUgcGFyZW50IHN0eWxlIHRvIHBvc2l0aW9uOlwicmVsYXRpdmVcIiB3aXRoIGEgd2lkdGggYW5kIGhlaWdodC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpZiAoaW1nLmNvbXBsZXRlKSB7XG4gICAgICAgIC8vIElmIHRoZSByZWFsIGltYWdlIGZhaWxzIHRvIGxvYWQsIHRoaXMgd2lsbCBzdGlsbCByZW1vdmUgdGhlIHBsYWNlaG9sZGVyLlxuICAgICAgICAvLyBUaGlzIGlzIHRoZSBkZXNpcmVkIGJlaGF2aW9yIGZvciBub3csIGFuZCB3aWxsIGJlIHJldmlzaXRlZCB3aGVuIGVycm9yXG4gICAgICAgIC8vIGhhbmRsaW5nIGlzIHdvcmtlZCBvbiBmb3IgdGhlIGltYWdlIGNvbXBvbmVudCBpdHNlbGYuXG4gICAgICAgIGhhbmRsZUxvYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbWcub25sb2FkID0gaGFuZGxlTG9hZDtcbiAgICB9XG59XG5mdW5jdGlvbiBJbWFnZTEoX3BhcmFtKSB7XG4gICAgdmFyIHsgc3JjICwgc2l6ZXMgLCB1bm9wdGltaXplZCA9ZmFsc2UgLCBwcmlvcml0eSA9ZmFsc2UgLCBsb2FkaW5nICwgbGF6eUJvdW5kYXJ5ID0nMjAwcHgnICwgY2xhc3NOYW1lICwgcXVhbGl0eSAsIHdpZHRoICwgaGVpZ2h0ICwgb2JqZWN0Rml0ICwgb2JqZWN0UG9zaXRpb24gLCBvbkxvYWRpbmdDb21wbGV0ZSAsIGxvYWRlciA9ZGVmYXVsdEltYWdlTG9hZGVyICwgcGxhY2Vob2xkZXIgPSdlbXB0eScgLCBibHVyRGF0YVVSTCAgfSA9IF9wYXJhbSwgYWxsID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wYXJhbSwgW1wic3JjXCIsIFwic2l6ZXNcIiwgXCJ1bm9wdGltaXplZFwiLCBcInByaW9yaXR5XCIsIFwibG9hZGluZ1wiLCBcImxhenlCb3VuZGFyeVwiLCBcImNsYXNzTmFtZVwiLCBcInF1YWxpdHlcIiwgXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcIm9iamVjdEZpdFwiLCBcIm9iamVjdFBvc2l0aW9uXCIsIFwib25Mb2FkaW5nQ29tcGxldGVcIiwgXCJsb2FkZXJcIiwgXCJwbGFjZWhvbGRlclwiLCBcImJsdXJEYXRhVVJMXCJdKTtcbiAgICBsZXQgcmVzdCA9IGFsbDtcbiAgICBsZXQgbGF5b3V0ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJztcbiAgICBpZiAoJ2xheW91dCcgaW4gcmVzdCkge1xuICAgICAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgICAgICBpZiAocmVzdC5sYXlvdXQpIGxheW91dCA9IHJlc3QubGF5b3V0O1xuICAgICAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgICAgIGRlbGV0ZSByZXN0WydsYXlvdXQnXTtcbiAgICB9XG4gICAgbGV0IHN0YXRpY1NyYyA9ICcnO1xuICAgIGlmIChpc1N0YXRpY0ltcG9ydChzcmMpKSB7XG4gICAgICAgIGNvbnN0IHN0YXRpY0ltYWdlRGF0YSA9IGlzU3RhdGljUmVxdWlyZShzcmMpID8gc3JjLmRlZmF1bHQgOiBzcmM7XG4gICAgICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLnNyYykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIHNyYy4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO1xuICAgICAgICB9XG4gICAgICAgIGJsdXJEYXRhVVJMID0gYmx1ckRhdGFVUkwgfHwgc3RhdGljSW1hZ2VEYXRhLmJsdXJEYXRhVVJMO1xuICAgICAgICBzdGF0aWNTcmMgPSBzdGF0aWNJbWFnZURhdGEuc3JjO1xuICAgICAgICBpZiAoIWxheW91dCB8fCBsYXlvdXQgIT09ICdmaWxsJykge1xuICAgICAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0IHx8IHN0YXRpY0ltYWdlRGF0YS5oZWlnaHQ7XG4gICAgICAgICAgICB3aWR0aCA9IHdpZHRoIHx8IHN0YXRpY0ltYWdlRGF0YS53aWR0aDtcbiAgICAgICAgICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLmhlaWdodCB8fCAhc3RhdGljSW1hZ2VEYXRhLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIGhlaWdodCBhbmQgd2lkdGguIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzcmMgPSB0eXBlb2Ygc3JjID09PSAnc3RyaW5nJyA/IHNyYyA6IHN0YXRpY1NyYztcbiAgICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aCk7XG4gICAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodCk7XG4gICAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KTtcbiAgICBsZXQgaXNMYXp5ID0gIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKTtcbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykgfHwgc3JjLnN0YXJ0c1dpdGgoJ2Jsb2I6JykpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICAgICAgdW5vcHRpbWl6ZWQgPSB0cnVlO1xuICAgICAgICBpc0xhenkgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGxvYWRlZEltYWdlVVJMcy5oYXMoc3JjKSkge1xuICAgICAgICBpc0xhenkgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICAgICAgcXVhbGl0eVxuICAgICAgICAgICAgfSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYU4od2lkdGhJbnQpIHx8IHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKGhlaWdodEludCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcIndpZHRoXCIgb3IgXCJoZWlnaHRcIiBwcm9wZXJ0eS4gVGhlc2Ugc2hvdWxkIGJlIG51bWVyaWMgdmFsdWVzLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXlvdXQgPT09ICdmaWxsJyAmJiAod2lkdGggfHwgaGVpZ2h0KSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGFuZCBcImxheW91dD0nZmlsbCdcIiBoYXMgdW51c2VkIHByb3BlcnRpZXMgYXNzaWduZWQuIFBsZWFzZSByZW1vdmUgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgICBpZiAobGF5b3V0ICE9PSAnZmlsbCcgJiYgKHdpZHRoSW50IHx8IDApICogKGhlaWdodEludCB8fCAwKSA8IDE2MDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgc21hbGxlciB0aGFuIDQweDQwLiBDb25zaWRlciByZW1vdmluZyB0aGUgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFibHVyRGF0YVVSTCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFZBTElEX0JMVVJfRVhUID0gW1xuICAgICAgICAgICAgICAgICAgICAnanBlZycsXG4gICAgICAgICAgICAgICAgICAgICdwbmcnLFxuICAgICAgICAgICAgICAgICAgICAnd2VicCdcbiAgICAgICAgICAgICAgICBdIC8vIHNob3VsZCBtYXRjaCBuZXh0LWltYWdlLWxvYWRlclxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgYnV0IGlzIG1pc3NpbmcgdGhlIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eS5cbiAgICAgICAgICBQb3NzaWJsZSBzb2x1dGlvbnM6XG4gICAgICAgICAgICAtIEFkZCBhIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eSwgdGhlIGNvbnRlbnRzIHNob3VsZCBiZSBhIHNtYWxsIERhdGEgVVJMIHRvIHJlcHJlc2VudCB0aGUgaW1hZ2VcbiAgICAgICAgICAgIC0gQ2hhbmdlIHRoZSBcInNyY1wiIHByb3BlcnR5IHRvIGEgc3RhdGljIGltcG9ydCB3aXRoIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZpbGUgdHlwZXM6ICR7VkFMSURfQkxVUl9FWFQuam9pbignLCcpfVxuICAgICAgICAgICAgLSBSZW1vdmUgdGhlIFwicGxhY2Vob2xkZXJcIiBwcm9wZXJ0eSwgZWZmZWN0aXZlbHkgbm8gYmx1ciBlZmZlY3RcbiAgICAgICAgICBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3BsYWNlaG9sZGVyLWJsdXItZGF0YS11cmxgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3JlZicgaW4gcmVzdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHVzaW5nIHVuc3VwcG9ydGVkIFwicmVmXCIgcHJvcGVydHkuIENvbnNpZGVyIHVzaW5nIHRoZSBcIm9uTG9hZGluZ0NvbXBsZXRlXCIgcHJvcGVydHkgaW5zdGVhZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3N0eWxlJyBpbiByZXN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgdXNpbmcgdW5zdXBwb3J0ZWQgXCJzdHlsZVwiIHByb3BlcnR5LiBQbGVhc2UgdXNlIHRoZSBcImNsYXNzTmFtZVwiIHByb3BlcnR5IGluc3RlYWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApICsgMTAwO1xuICAgICAgICBpZiAoIXVub3B0aW1pemVkICYmICFsb2FkZXIoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgd2lkdGg6IHJhbmQsXG4gICAgICAgICAgICBxdWFsaXR5OiA3NVxuICAgICAgICB9KS5pbmNsdWRlcyhyYW5kLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGEgXCJsb2FkZXJcIiBwcm9wZXJ0eSB0aGF0IGRvZXMgbm90IGltcGxlbWVudCB3aWR0aC4gUGxlYXNlIGltcGxlbWVudCBpdCBvciB1c2UgdGhlIFwidW5vcHRpbWl6ZWRcIiBwcm9wZXJ0eSBpbnN0ZWFkLmAgKyBgXFxuUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLW1pc3NpbmctbG9hZGVyLXdpZHRoYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogbGF6eUJvdW5kYXJ5LFxuICAgICAgICBkaXNhYmxlZDogIWlzTGF6eVxuICAgIH0pO1xuICAgIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZDtcbiAgICBsZXQgd3JhcHBlclN0eWxlO1xuICAgIGxldCBzaXplclN0eWxlO1xuICAgIGxldCBzaXplclN2ZztcbiAgICBsZXQgaW1nU3R5bGUgPSB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgICAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgb2JqZWN0Rml0LFxuICAgICAgICBvYmplY3RQb3NpdGlvblxuICAgIH07XG4gICAgY29uc3QgYmx1clN0eWxlID0gcGxhY2Vob2xkZXIgPT09ICdibHVyJyA/IHtcbiAgICAgICAgZmlsdGVyOiAnYmx1cigyMHB4KScsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBvYmplY3RGaXQgfHwgJ2NvdmVyJyxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiJHtibHVyRGF0YVVSTH1cIilgLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IG9iamVjdFBvc2l0aW9uIHx8ICcwJSAwJSdcbiAgICB9IDoge1xuICAgIH07XG4gICAgaWYgKGxheW91dCA9PT0gJ2ZpbGwnKSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG4gICAgICAgIGNvbnN0IHF1b3RpZW50ID0gaGVpZ2h0SW50IC8gd2lkdGhJbnQ7XG4gICAgICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBpc05hTihxdW90aWVudCkgPyAnMTAwJScgOiBgJHtxdW90aWVudCAqIDEwMH0lYDtcbiAgICAgICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ludHJpbnNpYycpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3ZnID0gYDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmA7XG4gICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZml4ZWQnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0SW50XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgaW1nQXR0cmlidXRlcyA9IHtcbiAgICAgICAgc3JjOiAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxcbiAgICAgICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgICAgIHNpemVzOiB1bmRlZmluZWRcbiAgICB9O1xuICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgICAgICBsYXlvdXQsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICAgICAgc2l6ZXMsXG4gICAgICAgICAgICBsb2FkZXJcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBzcmNTdHJpbmcgPSBzcmM7XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiB3cmFwcGVyU3R5bGVcbiAgICB9LCBzaXplclN0eWxlID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgc3R5bGU6IHNpemVyU3R5bGVcbiAgICB9LCBzaXplclN2ZyA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgcGFkZGluZzogMFxuICAgICAgICB9LFxuICAgICAgICBhbHQ6IFwiXCIsXG4gICAgICAgIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcbiAgICAgICAgc3JjOiBgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwkeygwLCBfdG9CYXNlNjQpLnRvQmFzZTY0KHNpemVyU3ZnKX1gXG4gICAgfSkgOiBudWxsKSA6IG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCBPYmplY3QuYXNzaWduKHtcbiAgICB9LCByZXN0LCBpbWdBdHRyaWJ1dGVzLCB7XG4gICAgICAgIGRlY29kaW5nOiBcImFzeW5jXCIsXG4gICAgICAgIFwiZGF0YS1uaW1nXCI6IGxheW91dCxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIHJlZjogKGltZyk9PntcbiAgICAgICAgICAgIHNldFJlZihpbWcpO1xuICAgICAgICAgICAgaGFuZGxlTG9hZGluZyhpbWcsIHNyY1N0cmluZywgbGF5b3V0LCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpO1xuICAgICAgICB9LFxuICAgICAgICBzdHlsZTogX29iamVjdFNwcmVhZCh7XG4gICAgICAgIH0sIGltZ1N0eWxlLCBibHVyU3R5bGUpXG4gICAgfSkpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgfSwgcmVzdCwgZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgIHNyYyxcbiAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgIGxheW91dCxcbiAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICBzaXplcyxcbiAgICAgICAgbG9hZGVyXG4gICAgfSksIHtcbiAgICAgICAgZGVjb2Rpbmc6IFwiYXN5bmNcIixcbiAgICAgICAgXCJkYXRhLW5pbWdcIjogbGF5b3V0LFxuICAgICAgICBzdHlsZTogaW1nU3R5bGUsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBsb2FkaW5nOiBsb2FkaW5nIHx8ICdsYXp5J1xuICAgIH0pKSksIHByaW9yaXR5ID8gLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuICAgIC8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuICAgIC8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbiAgICAvL1xuICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuICAgIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaGVhZC5kZWZhdWx0LCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgICAga2V5OiAnX19uaW1nLScgKyBpbWdBdHRyaWJ1dGVzLnNyYyArIGltZ0F0dHJpYnV0ZXMuc3JjU2V0ICsgaW1nQXR0cmlidXRlcy5zaXplcyxcbiAgICAgICAgcmVsOiBcInByZWxvYWRcIixcbiAgICAgICAgYXM6IFwiaW1hZ2VcIixcbiAgICAgICAgaHJlZjogaW1nQXR0cmlidXRlcy5zcmNTZXQgPyB1bmRlZmluZWQgOiBpbWdBdHRyaWJ1dGVzLnNyYyxcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgIGltYWdlc3Jjc2V0OiBpbWdBdHRyaWJ1dGVzLnNyY1NldCxcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZS5cbiAgICAgICAgaW1hZ2VzaXplczogaW1nQXR0cmlidXRlcy5zaXplc1xuICAgIH0pKSA6IG51bGwpKTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmMpIHtcbiAgICByZXR1cm4gc3JjWzBdID09PSAnLycgPyBzcmMuc2xpY2UoMSkgOiBzcmM7XG59XG5mdW5jdGlvbiBpbWdpeExvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICAvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2F1dG89Zm9ybWF0JmZpdD1tYXgmdz0zMDBcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX1gKTtcbiAgICBjb25zdCBwYXJhbXMgPSB1cmwuc2VhcmNoUGFyYW1zO1xuICAgIHBhcmFtcy5zZXQoJ2F1dG8nLCBwYXJhbXMuZ2V0KCdhdXRvJykgfHwgJ2Zvcm1hdCcpO1xuICAgIHBhcmFtcy5zZXQoJ2ZpdCcsIHBhcmFtcy5nZXQoJ2ZpdCcpIHx8ICdtYXgnKTtcbiAgICBwYXJhbXMuc2V0KCd3JywgcGFyYW1zLmdldCgndycpIHx8IHdpZHRoLnRvU3RyaW5nKCkpO1xuICAgIGlmIChxdWFsaXR5KSB7XG4gICAgICAgIHBhcmFtcy5zZXQoJ3EnLCBxdWFsaXR5LnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICByZXR1cm4gdXJsLmhyZWY7XG59XG5mdW5jdGlvbiBha2FtYWlMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggIH0pIHtcbiAgICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YDtcbn1cbmZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgLy8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbiAgICBjb25zdCBwYXJhbXMgPSBbXG4gICAgICAgICdmX2F1dG8nLFxuICAgICAgICAnY19saW1pdCcsXG4gICAgICAgICd3XycgKyB3aWR0aCxcbiAgICAgICAgJ3FfJyArIChxdWFsaXR5IHx8ICdhdXRvJylcbiAgICBdO1xuICAgIGxldCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMuam9pbignLCcpICsgJy8nO1xuICAgIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YDtcbn1cbmZ1bmN0aW9uIGN1c3RvbUxvYWRlcih7IHNyYyAgfSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBtaXNzaW5nIFwibG9hZGVyXCIgcHJvcC5gICsgYFxcblJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS1taXNzaW5nLWxvYWRlcmApO1xufVxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBtaXNzaW5nVmFsdWVzID0gW107XG4gICAgICAgIC8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuICAgICAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKTtcbiAgICAgICAgaWYgKCF3aWR0aCkgbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpO1xuICAgICAgICBpZiAobWlzc2luZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKCcsICcpfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIHF1YWxpdHlcbiAgICAgICAgICAgIH0pfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnLy8nKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgICAgICAgbGV0IHBhcnNlZFNyYztcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkU3JjID0gbmV3IFVSTChzcmMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiYgIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArIGBTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWA7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKTtcbnZhciBfcm91dGVyMSA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHByZWZldGNoZWQgPSB7XG59O1xuZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm47XG4gICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgY3VyTG9jYWxlID0gb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlO1xufVxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgeyB0YXJnZXQgIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIHJldHVybiB0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnIHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDI7XG59XG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSkge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUgIH0gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwgJiYgYXMuaW5kZXhPZignIycpID49IDApIHtcbiAgICAgICAgc2Nyb2xsID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgICBzaGFsbG93LFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHNjcm9sbFxuICAgIH0pO1xufVxuZnVuY3Rpb24gTGluayhwcm9wcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBocmVmOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHMgPSBPYmplY3Qua2V5cyhyZXF1aXJlZFByb3BzR3VhcmQpO1xuICAgICAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldID09IG51bGwgfHwgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBhczogdHJ1ZSxcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICBzY3JvbGw6IHRydWUsXG4gICAgICAgICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICAgICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgICAgICAgIGxvY2FsZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzID0gT2JqZWN0LmtleXMob3B0aW9uYWxQcm9wc0d1YXJkKTtcbiAgICAgICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV07XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3JlcGxhY2UnIHx8IGtleSA9PT0gJ3Njcm9sbCcgfHwga2V5ID09PSAnc2hhbGxvdycgfHwga2V5ID09PSAncGFzc0hyZWYnIHx8IGtleSA9PT0gJ3ByZWZldGNoJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgICAgIGNvbnN0IGhhc1dhcm5lZCA9IF9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7XG4gICAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlO1xuICAgIGNvbnN0IHJvdXRlciA9ICgwLCBfcm91dGVyMSkudXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBocmVmICwgYXMgIH0gPSBfcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57XG4gICAgICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuaHJlZiwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBhczogcHJvcHMuYXMgPyAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5hcykgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICB9O1xuICAgIH0sIFtcbiAgICAgICAgcm91dGVyLFxuICAgICAgICBwcm9wcy5ocmVmLFxuICAgICAgICBwcm9wcy5hc1xuICAgIF0pO1xuICAgIGxldCB7IGNoaWxkcmVuICwgcmVwbGFjZSAsIHNoYWxsb3cgLCBzY3JvbGwgLCBsb2NhbGUgIH0gPSBwcm9wcztcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgICBjaGlsZHJlbiA9IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIiwgbnVsbCwgY2hpbGRyZW4pO1xuICAgIH1cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBsZXQgY2hpbGQ7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIiBcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkUmVmID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWY7XG4gICAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9ICgwLCBfdXNlSW50ZXJzZWN0aW9uKS51c2VJbnRlcnNlY3Rpb24oe1xuICAgICAgICByb290TWFyZ2luOiAnMjAwcHgnXG4gICAgfSk7XG4gICAgY29uc3Qgc2V0UmVmID0gX3JlYWN0LmRlZmF1bHQudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpO1xuICAgICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGNoaWxkUmVmLFxuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWZcbiAgICBdKTtcbiAgICBfcmVhY3QuZGVmYXVsdC51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiAoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKTtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXTtcbiAgICAgICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGFzLFxuICAgICAgICBocmVmLFxuICAgICAgICBpc1Zpc2libGUsXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgcCxcbiAgICAgICAgcm91dGVyXG4gICAgXSk7XG4gICAgY29uc3QgY2hpbGRQcm9wcyA9IHtcbiAgICAgICAgcmVmOiBzZXRSZWYsXG4gICAgICAgIG9uQ2xpY2s6IChlKT0+e1xuICAgICAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlKT0+e1xuICAgICAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgcHJpb3JpdHk6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAocHJvcHMucGFzc0hyZWYgfHwgY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkge1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgICAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgICAgICBjb25zdCBsb2NhbGVEb21haW4gPSByb3V0ZXIgJiYgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmICgwLCBfcm91dGVyKS5nZXREb21haW5Mb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLCByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXMpO1xuICAgICAgICBjaGlsZFByb3BzLmhyZWYgPSBsb2NhbGVEb21haW4gfHwgKDAsIF9yb3V0ZXIpLmFkZEJhc2VQYXRoKCgwLCBfcm91dGVyKS5hZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSk7XG4gICAgfVxuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcykpO1xufVxudmFyIF9kZWZhdWx0ID0gTGluaztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHZvaWQgMDtcbmZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aDtcbn1cbmNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIID8gKHBhdGgpPT57XG4gICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTtcbiAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJztcbiAgICB9XG59IDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IGV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gdm9pZCAwO1xuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihjYikge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCAxKTtcbn07XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrO1xuY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihpZCkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufTtcbmV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gY2FuY2VsSWRsZUNhbGxiYWNrO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm1hcmtBc3NldEVycm9yID0gbWFya0Fzc2V0RXJyb3I7XG5leHBvcnRzLmlzQXNzZXRFcnJvciA9IGlzQXNzZXRFcnJvcjtcbmV4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCA9IGdldENsaWVudEJ1aWxkTWFuaWZlc3Q7XG5leHBvcnRzLmNyZWF0ZVJvdXRlTG9hZGVyID0gY3JlYXRlUm91dGVMb2FkZXI7XG52YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMDtcbmZ1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LCBtYXAsIGdlbmVyYXRvcikge1xuICAgIGxldCBlbnRyeSA9IG1hcC5nZXQoa2V5KTtcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gZW50cnkuZnV0dXJlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO1xuICAgIH1cbiAgICBsZXQgcmVzb2x2ZXI7XG4gICAgY29uc3QgcHJvbSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICByZXNvbHZlciA9IHJlc29sdmU7XG4gICAgfSk7XG4gICAgbWFwLnNldChrZXksIGVudHJ5ID0ge1xuICAgICAgICByZXNvbHZlOiByZXNvbHZlcixcbiAgICAgICAgZnV0dXJlOiBwcm9tXG4gICAgfSk7XG4gICAgcmV0dXJuIGdlbmVyYXRvciA/IGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKT0+KHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpXG4gICAgKSA6IHByb207XG59XG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgcmV0dXJuKC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISFkb2N1bWVudC5kb2N1bWVudE1vZGUpIHx8IGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuY29uc3QgY2FuUHJlZmV0Y2ggPSBoYXNQcmVmZXRjaCgpO1xuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZiwgYXMsIGxpbmspIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKT0+e1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcygpO1xuICAgICAgICB9XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgICAgIGlmIChhcykgbGluay5hcyA9IGFzO1xuICAgICAgICBsaW5rLnJlbCA9IGBwcmVmZXRjaGA7XG4gICAgICAgIGxpbmsuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICBsaW5rLm9ubG9hZCA9IHJlcztcbiAgICAgICAgbGluay5vbmVycm9yID0gcmVqO1xuICAgICAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgICAgICBsaW5rLmhyZWYgPSBocmVmO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH0pO1xufVxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpO1xuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyO1xufVxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KHNyYywgc2NyaXB0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgICAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgICAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZTtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSAoKT0+cmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG4gICAgICAgIDtcbiAgICAgICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgICAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgICAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICAgICAgc2NyaXB0LnNyYyA9IHNyYztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0pO1xufVxuLy8gV2Ugd2FpdCBmb3IgcGFnZXMgdG8gYmUgYnVpbHQgaW4gZGV2IGJlZm9yZSB3ZSBzdGFydCB0aGUgcm91dGUgdHJhbnNpdGlvblxuLy8gdGltZW91dCB0byBwcmV2ZW50IGFuIHVuLW5lY2Vzc2FyeSBoYXJkIG5hdmlnYXRpb24gaW4gZGV2ZWxvcG1lbnQuXG5sZXQgZGV2QnVpbGRQcm9taXNlO1xuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCwgbXMsIGVycikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIHAudGhlbigocik9PntcbiAgICAgICAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKHIpO1xuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgICAvLyBXZSB3cmFwIHRoZXNlIGNoZWNrcyBzZXBhcmF0ZWx5IGZvciBiZXR0ZXIgZGVhZC1jb2RlIGVsaW1pbmF0aW9uIGluXG4gICAgICAgIC8vIHByb2R1Y3Rpb24gYnVuZGxlcy5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoZGV2QnVpbGRQcm9taXNlIHx8IFByb21pc2UucmVzb2x2ZSgpKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkge1xuICAgIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgIH1cbiAgICBjb25zdCBvbkJ1aWxkTWFuaWZlc3QgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgICAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQjtcbiAgICAgICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCk9PntcbiAgICAgICAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSkpO1xufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICBzY3JpcHRzOiBbXG4gICAgICAgICAgICAgICAgYXNzZXRQcmVmaXggKyAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICsgZW5jb2RlVVJJKCgwLCBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKS5kZWZhdWx0KHJvdXRlLCAnLmpzJykpLCBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICAgICAgICBjc3M6IFtdXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KT0+e1xuICAgICAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKChlbnRyeSk9PmFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmpzJylcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5jc3MnKVxuICAgICAgICAgICAgKVxuICAgICAgICB9O1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpIHtcbiAgICBjb25zdCBlbnRyeXBvaW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBsb2FkZWRTY3JpcHRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHN0eWxlU2hlZXRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHJvdXRlcyA9IG5ldyBNYXAoKTtcbiAgICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKSB7XG4gICAgICAgIGxldCBwcm9tID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZikge1xuICAgICAgICBsZXQgcHJvbSA9IHN0eWxlU2hlZXRzLmdldChocmVmKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIHN0eWxlU2hlZXRzLnNldChocmVmLCBwcm9tID0gZmV0Y2goaHJlZikudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpPT4oe1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0ZXh0XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB3aGVuRW50cnlwb2ludCAocm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRW50cnlwb2ludCAocm91dGUsIGV4ZWN1dGUpIHtcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKChmbik9PmZuKClcbiAgICAgICAgICAgICkudGhlbigoZXhwb3J0cyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0c1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAsIChlcnIpPT4oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkudGhlbigoaW5wdXQpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KTtcbiAgICAgICAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkUm91dGUgKHJvdXRlLCBwcmVmZXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIHJvdXRlcywgKCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUZpbGVzUHJvbWlzZSA9IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKCh7IHNjcmlwdHMgLCBjc3MgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpID8gW10gOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksIFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKChlbnRyeXBvaW50KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogcmVzWzFdXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgICAgICAgICBkZXZCdWlsZFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3V0ZUZpbGVzUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUZpbGVzUHJvbWlzZS5maW5hbGx5KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHJvdXRlRmlsZXNQcm9taXNlLCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7IGVudHJ5cG9pbnQgLCBzdHlsZXMgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiBzdHlsZXNcbiAgICAgICAgICAgICAgICAgICAgfSwgZW50cnlwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBwcmVmZXRjaCAocm91dGUpIHtcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgICAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgICAgICAgIGxldCBjbjtcbiAgICAgICAgICAgIGlmIChjbiA9IG5hdmlnYXRvci5jb25uZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgICAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKChvdXRwdXQpPT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaCA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KT0+cHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JylcbiAgICAgICAgICAgICAgICApIDogW10pXG4gICAgICAgICAgICApLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnRoaXMubG9hZFJvdXRlKHJvdXRlLCB0cnVlKS5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICAgKCk9PntcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbG9hZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ3aXRoUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfd2l0aFJvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuZXhwb3J0cy51c2VSb3V0ZXIgPSB1c2VSb3V0ZXI7XG5leHBvcnRzLmNyZWF0ZVJvdXRlciA9IGNyZWF0ZVJvdXRlcjtcbmV4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlID0gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtcbnZhciBfcm91dGVyQ29udGV4dCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0XCIpO1xudmFyIF93aXRoUm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBzaW5nbGV0b25Sb3V0ZXIgPSB7XG4gICAgcm91dGVyOiBudWxsLFxuICAgIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgICByZWFkeSAoY2IpIHtcbiAgICAgICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKTtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAgICdwYXRobmFtZScsXG4gICAgJ3JvdXRlJyxcbiAgICAncXVlcnknLFxuICAgICdhc1BhdGgnLFxuICAgICdjb21wb25lbnRzJyxcbiAgICAnaXNGYWxsYmFjaycsXG4gICAgJ2Jhc2VQYXRoJyxcbiAgICAnbG9jYWxlJyxcbiAgICAnbG9jYWxlcycsXG4gICAgJ2RlZmF1bHRMb2NhbGUnLFxuICAgICdpc1JlYWR5JyxcbiAgICAnaXNQcmV2aWV3JyxcbiAgICAnaXNMb2NhbGVEb21haW4nLFxuICAgICdkb21haW5Mb2NhbGVzJywgXG5dO1xuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAgICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgICAnaGFzaENoYW5nZUNvbXBsZXRlJywgXG5dO1xuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgICAncHVzaCcsXG4gICAgJ3JlcGxhY2UnLFxuICAgICdyZWxvYWQnLFxuICAgICdiYWNrJyxcbiAgICAncHJlZmV0Y2gnLFxuICAgICdiZWZvcmVQb3BTdGF0ZScsIFxuXTtcbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gICAgZ2V0ICgpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgfVxufSk7XG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuXG4gICAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gICAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gICAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgICAgICBnZXQgKCkge1xuICAgICAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIHNpbmdsZXRvblJvdXRlcltmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO1xuICAgIH07XG59KTtcbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9PntcbiAgICAgICAgX3JvdXRlci5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO1xuICAgICAgICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlcjtcbiAgICAgICAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5mdW5jdGlvbiBnZXRSb3V0ZXIoKSB7XG4gICAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgKyAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG52YXIgX2RlZmF1bHQgPSBzaW5nbGV0b25Sb3V0ZXI7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbmZ1bmN0aW9uIHVzZVJvdXRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlciguLi5hcmdzKSB7XG4gICAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBfcm91dGVyLmRlZmF1bHQoLi4uYXJncyk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKT0+Y2IoKVxuICAgICk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW107XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG5mdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKSB7XG4gICAgY29uc3QgX3JvdXRlcjEgPSByb3V0ZXI7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtcbiAgICAgICAgaWYgKHR5cGVvZiBfcm91dGVyMVtwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKEFycmF5LmlzQXJyYXkoX3JvdXRlcjFbcHJvcGVydHldKSA/IFtdIDoge1xuICAgICAgICAgICAgfSwgX3JvdXRlcjFbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcjFbcHJvcGVydHldO1xuICAgIH1cbiAgICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gICAgaW5zdGFuY2UuZXZlbnRzID0gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgICAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIHJldHVybiBfcm91dGVyMVtmaWVsZF0oLi4uYXJncyk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnVzZUludGVyc2VjdGlvbiA9IHVzZUludGVyc2VjdGlvbjtcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oeyByb290TWFyZ2luICwgZGlzYWJsZWQgIH0pIHtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO1xuICAgIGNvbnN0IHVub2JzZXJ2ZSA9ICgwLCBfcmVhY3QpLnVzZVJlZigpO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9ICgwLCBfcmVhY3QpLnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBzZXRSZWYgPSAoMCwgX3JlYWN0KS51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVybjtcbiAgICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShlbCwgKGlzVmlzaWJsZSk9PmlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSlcbiAgICAgICAgICAgICwge1xuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICByb290TWFyZ2luLFxuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgKDAsIF9yZWFjdCkudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9ICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpPT4oMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLmNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgc2V0UmVmLFxuICAgICAgICB2aXNpYmxlXG4gICAgXTtcbn1cbmZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlkICwgb2JzZXJ2ZXIgLCBlbGVtZW50cyAgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO1xuICAgIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgICAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgICAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucykge1xuICAgIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnO1xuICAgIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKT0+e1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KT0+e1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMDtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBvcHRpb25zKTtcbiAgICBvYnNlcnZlcnMuc2V0KGlkLCBpbnN0YW5jZSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG9ic2VydmVyLFxuICAgICAgICBlbGVtZW50c1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHdpdGhSb3V0ZXI7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KSB7XG4gICAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICByb3V0ZXI6ICgwLCBfcm91dGVyKS51c2VSb3V0ZXIoKVxuICAgICAgICB9LCBwcm9wcykpKTtcbiAgICB9XG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbiAgICAgICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWA7XG4gICAgfVxuICAgIHJldHVybiBXaXRoUm91dGVyV3JhcHBlcjtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldERvbWFpbkxvY2FsZSA9IGdldERvbWFpbkxvY2FsZTtcbmV4cG9ydHMuYWRkTG9jYWxlID0gYWRkTG9jYWxlO1xuZXhwb3J0cy5kZWxMb2NhbGUgPSBkZWxMb2NhbGU7XG5leHBvcnRzLmhhc0Jhc2VQYXRoID0gaGFzQmFzZVBhdGg7XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5leHBvcnRzLmlzTG9jYWxVUkwgPSBpc0xvY2FsVVJMO1xuZXhwb3J0cy5pbnRlcnBvbGF0ZUFzID0gaW50ZXJwb2xhdGVBcztcbmV4cG9ydHMucmVzb2x2ZUhyZWYgPSByZXNvbHZlSHJlZjtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoXCIpO1xudmFyIF9yb3V0ZUxvYWRlciA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO1xudmFyIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoID0gcmVxdWlyZShcIi4uLy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7XG52YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGggPSByZXF1aXJlKFwiLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGhcIik7XG52YXIgX21pdHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG52YXIgX2lzRHluYW1pYyA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG52YXIgX3BhcnNlUmVsYXRpdmVVcmwgPSByZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7XG52YXIgX3F1ZXJ5c3RyaW5nID0gcmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7XG52YXIgX3Jlc29sdmVSZXdyaXRlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlc1wiKSk7XG52YXIgX3JvdXRlTWF0Y2hlciA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7XG52YXIgX3JvdXRlUmVnZXggPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmxldCBkZXRlY3REb21haW5Mb2NhbGU7XG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7XG59XG5jb25zdCBiYXNlUGF0aCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggfHwgJyc7XG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICAgICAgY2FuY2VsbGVkOiB0cnVlXG4gICAgfSk7XG59XG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgsIHByZWZpeCkge1xuICAgIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJykgPyBwYXRoID09PSAnLycgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeCkgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gIDogcGF0aDtcbn1cbmZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShwYXRoLCBsb2NhbGUsIGxvY2FsZXMsIGRvbWFpbkxvY2FsZXMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBsb2NhbGUgPSBsb2NhbGUgfHwgKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO1xuICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSk7XG4gICAgICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aCB8fCAnJ30ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkTG9jYWxlKHBhdGgsIGxvY2FsZSwgZGVmYXVsdExvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJiBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCwgbG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIChwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgfHwgcGF0aExvd2VyID09PSAnLycgKyBsb2NhbGVMb3dlcikgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArIHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpIHtcbiAgICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/Jyk7XG4gICAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleCk7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJyk7XG59XG5mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKSB7XG4gICAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aCk7XG59XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtcbiAgICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YDtcbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsKSB7XG4gICAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykgfHwgdXJsLnN0YXJ0c1dpdGgoJz8nKSkgcmV0dXJuIHRydWU7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICAgICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpIHtcbiAgICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJztcbiAgICBjb25zdCBkeW5hbWljUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzO1xuICAgIGNvbnN0IGR5bmFtaWNNYXRjaGVzID0gLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fCAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnk7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZTtcbiAgICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKTtcbiAgICBpZiAoIXBhcmFtcy5ldmVyeSgocGFyYW0pPT57XG4gICAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJztcbiAgICAgICAgY29uc3QgeyByZXBlYXQgLCBvcHRpb25hbCAgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dO1xuICAgICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gO1xuICAgICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW1xuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiYgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9IGludGVycG9sYXRlZFJvdXRlLnJlcGxhY2UocmVwbGFjZWQsIHJlcGVhdCA/IHZhbHVlLm1hcCgvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgIChzZWdtZW50KT0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICkuam9pbignLycpIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSkgfHwgJy8nKTtcbiAgICB9KSkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4gICAgICAgIDtcbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHBhcmFtcyxcbiAgICAgICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZVxuICAgIH07XG59XG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcykge1xuICAgIGNvbnN0IGZpbHRlcmVkUXVlcnkgPSB7XG4gICAgfTtcbiAgICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbHRlcmVkUXVlcnk7XG59XG5mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsIGhyZWYsIHJlc29sdmVBcykge1xuICAgIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gICAgbGV0IGJhc2U7XG4gICAgbGV0IHVybEFzU3RyaW5nID0gdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpO1xuICAgIC8vIHJlcGVhdGVkIHNsYXNoZXMgYW5kIGJhY2tzbGFzaGVzIGluIHRoZSBVUkwgYXJlIGNvbnNpZGVyZWRcbiAgICAvLyBpbnZhbGlkIGFuZCB3aWxsIG5ldmVyIG1hdGNoIGEgTmV4dC5qcyBwYWdlL2ZpbGVcbiAgICBjb25zdCB1cmxQcm90b01hdGNoID0gdXJsQXNTdHJpbmcubWF0Y2goL15bYS16QS1aXXsxLH06XFwvXFwvLyk7XG4gICAgY29uc3QgdXJsQXNTdHJpbmdOb1Byb3RvID0gdXJsUHJvdG9NYXRjaCA/IHVybEFzU3RyaW5nLnN1YnN0cih1cmxQcm90b01hdGNoWzBdLmxlbmd0aCkgOiB1cmxBc1N0cmluZztcbiAgICBjb25zdCB1cmxQYXJ0cyA9IHVybEFzU3RyaW5nTm9Qcm90by5zcGxpdCgnPycpO1xuICAgIGlmICgodXJsUGFydHNbMF0gfHwgJycpLm1hdGNoKC8oXFwvXFwvfFxcXFwpLykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byBuZXh0L3JvdXRlcjogJHt1cmxBc1N0cmluZ30sIHJlcGVhdGVkIGZvcndhcmQtc2xhc2hlcyAoLy8pIG9yIGJhY2tzbGFzaGVzIFxcXFwgYXJlIG5vdCB2YWxpZCBpbiB0aGUgaHJlZmApO1xuICAgICAgICBjb25zdCBub3JtYWxpemVkVXJsID0gKDAsIF91dGlscykubm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzKHVybEFzU3RyaW5nTm9Qcm90byk7XG4gICAgICAgIHVybEFzU3RyaW5nID0gKHVybFByb3RvTWF0Y2ggPyB1cmxQcm90b01hdGNoWzBdIDogJycpICsgbm9ybWFsaXplZFVybDtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKSA/IHJvdXRlci5hc1BhdGggOiByb3V0ZXIucGF0aG5hbWUsICdodHRwOi8vbicpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgLy8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbiAgICAgICAgYmFzZSA9IG5ldyBVUkwoJy8nLCAnaHR0cDovL24nKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKTtcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKTtcbiAgICAgICAgbGV0IGludGVycG9sYXRlZEFzID0gJyc7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJiByZXNvbHZlQXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gKDAsIF9xdWVyeXN0cmluZykuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO1xuICAgICAgICAgICAgY29uc3QgeyByZXN1bHQgLCBwYXJhbXMgIH0gPSBpbnRlcnBvbGF0ZUFzKGZpbmFsVXJsLnBhdGhuYW1lLCBmaW5hbFVybC5wYXRobmFtZSwgcXVlcnkpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGludGVycG9sYXRlZEFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpbiA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCkgOiBmaW5hbFVybC5ocmVmO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXG4gICAgICAgIF0gOiByZXNvbHZlZEhyZWY7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybCkge1xuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsO1xufVxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlciwgdXJsLCBhcykge1xuICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLCB1cmwsIHRydWUpO1xuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7XG4gICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXM7XG4gICAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtcbiAgICBjb25zdCBwcmVwYXJlZEFzID0gYXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsIGFzKSkgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZjtcbiAgICByZXR1cm4ge1xuICAgICAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgICAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcylcbiAgICB9O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpIHtcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCgoMCwgX2Rlbm9ybWFsaXplUGFnZVBhdGgpLmRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUpKTtcbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgICByZXR1cm4gcGF0aG5hbWU7XG4gICAgfVxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgcGFnZXMuc29tZSgocGFnZSk9PntcbiAgICAgICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGFnZSkgJiYgKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSA9IHBhZ2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSk7XG59XG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJiAhIWZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCB2ID0gJ19fbmV4dCc7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWU7XG4gICAgfSBjYXRjaCAobikge1xuICAgIH1cbn0oKTtcbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJyk7XG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAvL1xuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgICgwLCBfcm91dGVMb2FkZXIpLm1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZTEsIHF1ZXJ5MSwgYXMxLCB7IGluaXRpYWxQcm9wcyAsIHBhZ2VMb2FkZXIgLCBBcHAgLCB3cmFwQXBwICwgQ29tcG9uZW50OiBDb21wb25lbnQxICwgZXJyOiBlcnIxICwgc3Vic2NyaXB0aW9uICwgaXNGYWxsYmFjayAsIGxvY2FsZSAsIGxvY2FsZXMgLCBkZWZhdWx0TG9jYWxlICwgZG9tYWluTG9jYWxlcyAsIGlzUHJldmlldyAgfSl7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge1xuICAgICAgICB9O1xuICAgICAgICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICAgICAgICB0aGlzLnNkciA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5faWR4ID0gMDtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpPT57XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGU7XG4gICAgICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAgICAgICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAgICAgICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGZvcmNlZFNjcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHsgdXJsICwgYXM6IGFzMSAsIG9wdGlvbnMgLCBpZHggIH0gPSBzdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9pZHggPSBpZHg7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgIH0gPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgICAgICAgICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NzciAmJiBhczEgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lMSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAgICAgICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgICAgICAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMxLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIH0sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgfSksIGZvcmNlZFNjcm9sbCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xuICAgICAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge1xuICAgICAgICB9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnI6IGVycjEsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICAgICAgICBDb21wb25lbnQ6IEFwcCxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiBbXVxuICAgICAgICB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTE7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTE7XG4gICAgICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID0gKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lMSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZTEgOiBhczE7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIHRoaXMuaXNSZWFkeSA9ICEhKHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHwgc2VsZi5fX05FWFRfREFUQV9fLmFwcEdpcCAmJiAhc2VsZi5fX05FWFRfREFUQV9fLmdzcCB8fCAhYXV0b0V4cG9ydER5bmFtaWMgJiYgIXNlbGYubG9jYXRpb24uc2VhcmNoICYmICFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTtcbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIWlzUHJldmlldztcbiAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgICAgICAgIGlmIChhczEuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gYXMxICE9PSBwYXRobmFtZTE7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyBwdXNoKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAgICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgYXN5bmMgY2hhbmdlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucywgZm9yY2VkU2Nyb2xsKSB7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaG91bGRSZXNvbHZlSHJlZiA9IHVybCA9PT0gYXMgfHwgb3B0aW9ucy5faCB8fCBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjtcbiAgICAgICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgICAgICBpZiAob3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcmV2TG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSA/IHRoaXMuZGVmYXVsdExvY2FsZSA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlO1xuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKCgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIHZhciByZWY7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICAgICAgICAgIGlmICghKChyZWYgPSB0aGlzLmxvY2FsZXMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICAgICAgICAgIGlmICghZGlkTmF2aWdhdGUgJiYgZGV0ZWN0ZWREb21haW4gJiYgdGhpcy5pc0xvY2FsZURvbWFpbiAmJiBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHthZGRCYXNlUGF0aChgJHt0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke3RoaXMubG9jYWxlfWB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nKX1gO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICBpZiAoX3V0aWxzLlNUKSB7XG4gICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9ZmFsc2UgIH0gPSBvcHRpb25zO1xuICAgICAgICBjb25zdCByb3V0ZVByb3BzID0ge1xuICAgICAgICAgICAgc2hhbGxvd1xuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIG9wdGlvbnMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpKTtcbiAgICAgICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhcztcbiAgICAgICAgbGV0IGxvY2FsZUNoYW5nZSA9IHByZXZMb2NhbGUgIT09IHRoaXMubG9jYWxlO1xuICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4gICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXM7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHBhcnNlZDtcbiAgICAgICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgICAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAgICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICAgICAgbGV0IHBhZ2VzLCByZXdyaXRlcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICB9XG4gICAgICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhcztcbiAgICAgICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgICAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgICAgIHBhdGhuYW1lMSA9IHBhdGhuYW1lMSA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUxKSkgOiBwYXRobmFtZTE7XG4gICAgICAgIGlmIChzaG91bGRSZXNvbHZlSHJlZiAmJiBwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSAoMCwgX3Jlc29sdmVSZXdyaXRlcykuZGVmYXVsdChhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLCB0aGlzLmxvY2FsZSkpLCBwYWdlcywgcmV3cml0ZXMsIHF1ZXJ5MSwgKHApPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKVxuICAgICAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoO1xuICAgICAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lMSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lMSkge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgKyBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcyk7XG4gICAgICAgICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGUgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeTEpIDoge1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCB8fCBzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoKHBhcmFtKT0+IXF1ZXJ5MVtwYXJhbV1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZSA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGUgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgKyBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICB9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5MSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5MSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHJlZiwgcmVmMTtcbiAgICAgICAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIGxldCB7IGVycm9yICwgcHJvcHMgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLnBhZ2VQcm9wcyAmJiBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVDtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZEhyZWYucGF0aG5hbWUsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwgLCBhczogbmV3QXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgZGVzdGluYXRpb24sIGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb247XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXO1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZTtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCc7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8obm90Rm91bmRSb3V0ZSwgbm90Rm91bmRSb3V0ZSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhbGxvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICB3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkID0gYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJiAhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5faCAmJiBwYXRobmFtZTEgPT09ICcvX2Vycm9yJyAmJiAoKHJlZiA9IHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiAocmVmMSA9IHJlZi5wYWdlUHJvcHMpID09PSBudWxsIHx8IHJlZjEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZjEuc3RhdHVzQ29kZSkgPT09IDUwMCAmJiAocHJvcHMgPT09IG51bGwgfHwgcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb3BzLnBhZ2VQcm9wcykpIHtcbiAgICAgICAgICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlO1xuICAgICAgICAgICAgdmFyIF9zY3JvbGw7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRTY3JvbGwgPSAoX3Njcm9sbCA9IG9wdGlvbnMuc2Nyb2xsKSAhPT0gbnVsbCAmJiBfc2Nyb2xsICE9PSB2b2lkIDAgPyBfc2Nyb2xsIDogIWlzVmFsaWRTaGFsbG93Um91dGU7XG4gICAgICAgICAgICBjb25zdCByZXNldFNjcm9sbCA9IHNob3VsZFNjcm9sbCA/IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgIH0gOiBudWxsO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBjbGVhbmVkQXMsIHJvdXRlSW5mbywgZm9yY2VkU2Nyb2xsICE9PSBudWxsICYmIGZvcmNlZFNjcm9sbCAhPT0gdm9pZCAwID8gZm9yY2VkU2Nyb2xsIDogcmVzZXRTY3JvbGwpLmNhdGNoKChlKT0+e1xuICAgICAgICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlO1xuICAgICAgICAgICAgICAgIGVsc2UgdGhyb3cgZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICBpZiAoZXJyMS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnIxO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8ICgwLCBfdXRpbHMpLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvdztcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxXG4gICAgICAgICAgICB9LCAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCgwLCBfcm91dGVMb2FkZXIpLmlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBDb21wb25lbnQxO1xuICAgICAgICAgICAgbGV0IHN0eWxlU2hlZXRzO1xuICAgICAgICAgICAgbGV0IHByb3BzO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBDb21wb25lbnQxID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygc3R5bGVTaGVldHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgKHsgcGFnZTogQ29tcG9uZW50MSAsIHN0eWxlU2hlZXRzICB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHtcbiAgICAgICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycik7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvID8gdW5kZWZpbmVkIDogZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm8gPyBjYWNoZWRSb3V0ZUluZm8gOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGF0YUhyZWY7XG4gICAgICAgICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgICAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgICAgICB9KSwgcmVzb2x2ZWRBcywgX19OX1NTRywgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhKCgpPT5fX05fU1NHID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZikgOiBfX05fU1NQID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZikgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGVzOiB0aGlzLmxvY2FsZXMsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU6IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAoZXJyMikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyMiwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBkYXRhLCByZXNldFNjcm9sbCkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqLyBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpO1xuICAgICAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgICAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgICAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgICAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgICAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaDtcbiAgICB9XG4gICAgc2Nyb2xsVG9IYXNoKGFzKSB7XG4gICAgICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi8gYXN5bmMgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTIgIH0gPSBwYXJzZWQ7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lMiwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICBsZXQgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgICAgIGFzUGF0aCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgbGV0IHJld3JpdGVzO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSAoMCwgX3Jlc29sdmVSZXdyaXRlcykuZGVmYXVsdChhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLCBwYWdlcywgcmV3cml0ZXMsIHBhcnNlZC5xdWVyeSwgKHApPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKVxuICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKTtcbiAgICAgICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lMikge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUyKTtcbiAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBpc1NzZyA/IHRoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCwgcmVzb2x2ZWRBcywgdHJ1ZSwgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogdGhpcy5sb2NhbGUpKSA6IGZhbHNlO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksIFxuICAgICAgICBdKTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSB0aGlzLmNsYyA9ICgpPT57XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7XG4gICAgICAgICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0O1xuICAgIH1cbiAgICBfZ2V0RGF0YShmbikge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpPT57XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycjIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIHtcbiAgICAgICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgIXRoaXMuaXNQcmV2aWV3ICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIHtcbiAgICAgICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSkuY2F0Y2goKGVycjIpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwMSAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwMSk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMpLmxvYWRHZXRJbml0aWFsUHJvcHMoQXBwMSwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWJvcnRDb21wb25lbnRMb2FkKGFzLCByb3V0ZVByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNsYygpO1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5vdGlmeShkYXRhLCByZXNldFNjcm9sbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbn1cblJvdXRlci5ldmVudHMgPSAoMCwgX21pdHQpLmRlZmF1bHQoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlcjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBFZGl0b3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvZWRpdG9yXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkSGVybygpIHtcclxuICBjb25zdCBbZWRpdG9yTG9hZGVkLCBzZXRFZGl0b3JMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xhc3RfbmFtZSwgc2V0TGFzdE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ZpcnN0X25hbWUsIHNldEZpcnN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbWlkZGxlX25hbWUsIHNldE1pZGRsZU5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N0dWRlbnQsIHNldFN0dWRlbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBba2luc2hpcCwgc2V0S2luc2hpcF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc2lnbmF0dXJlLCBzZXRTaWduYXR1cmVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bob3RvLCBzZXRQaG90b10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgW2Rlc2NyaXB0aW9uX2Vycm9yLCBzZXREZXNjcmlwdGlvbkVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwaG90b19lcnJvciwgc2V0UGhvdG9FcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJwaG90b1wiLCBwaG90byA/IHBob3RvIDogXCJcIik7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJsYXN0X25hbWVcIiwgbGFzdF9uYW1lKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImZpcnN0X25hbWVcIiwgZmlyc3RfbmFtZSk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJtaWRkbGVfbmFtZVwiLCBtaWRkbGVfbmFtZSk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJkZXNjcmlwdGlvblwiLCBkZXNjcmlwdGlvbik7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJzdHVkZW50XCIsIHN0dWRlbnQpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwia2luc2hpcFwiLCBraW5zaGlwKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImVtYWlsXCIsIGVtYWlsKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcInNpZ25hdHVyZVwiLCBzaWduYXR1cmUpO1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LkFQSV9VUkx9L2hlcm9lcy9jcmVhdGUvYCwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBib2R5OiBmb3JtRGF0YSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChhd2FpdCByZXMub2spIHtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHJlcSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHJlcS5kZXNjcmlwdGlvbiAmJiBzZXREZXNjcmlwdGlvbkVycm9yKHJlcS5kZXNjcmlwdGlvblswXSk7XHJcbiAgICAgIHJlcS5waG90byAmJiBzZXRQaG90b0Vycm9yKHJlcS5waG90b1swXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0RWRpdG9yTG9hZGVkKHRydWUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgdGl0bGU9e2DQo9Cy0LXQutC+0LLQtdGH0LjRgtGMINC/0LDQvNGP0YLRjCDQs9C10YDQvtGPYH0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJtb3RvLXdpZGdldCBtb3RvLXdpZGdldC1ibG9jayBtb3RvLXNwYWNpbmctdG9wLW1lZGl1bSBtb3RvLXNwYWNpbmctcmlnaHQtYXV0byBtb3RvLXNwYWNpbmctYm90dG9tLW1lZGl1bSBtb3RvLXNwYWNpbmctbGVmdC1hdXRvXCJcclxuICAgICAgICBkYXRhLXdpZGdldD1cImJsb2NrXCJcclxuICAgICAgICBkYXRhLXNwYWNpbmc9XCJtYW1hXCJcclxuICAgICAgICBkYXRhLWJnLXBvc2l0aW9uPVwibGVmdCB0b3BcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW90by1jZWxsIGNvbC1zbS0xMlwiIGRhdGEtY29udGFpbmVyPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW90by13aWRnZXQgbW90by13aWRnZXQtcm93IHJvdy1maXhlZCBtb3RvLWp1c3RpZnktY29udGVudF9jZW50ZXIgbW90by1zcGFjaW5nLXRvcC1hdXRvIG1vdG8tc3BhY2luZy1yaWdodC1hdXRvIG1vdG8tc3BhY2luZy1ib3R0b20tYXV0byBtb3RvLXNwYWNpbmctbGVmdC1hdXRvXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtZ3JpZC10eXBlPVwic21cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13aWRnZXQ9XCJyb3dcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1zcGFjaW5nPVwiYWFhYVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBkYXRhLWNvbnRhaW5lcj1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vdG8td2lkZ2V0IG1vdG8td2lkZ2V0LXJvd19fY29sdW1uIG1vdG8tY2VsbCBjb2wtc20tMSBtb3RvLXNwYWNpbmctdG9wLWF1dG8gbW90by1zcGFjaW5nLXJpZ2h0LWF1dG8gbW90by1zcGFjaW5nLWJvdHRvbS1hdXRvIG1vdG8tc3BhY2luZy1sZWZ0LWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS13aWRnZXQ9XCJyb3cuY29sdW1uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY29udGFpbmVyPVwiY29udGFpbmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc3BhY2luZz1cImFhYWFcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS13aWRnZXQtaWQ9XCJ3aWRfX2RpdmlkZXJfaG9yaXpvbnRhbF9fNWIxOGU1ZGQ2MWFjM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vdG8td2lkZ2V0IG1vdG8td2lkZ2V0LWRpdmlkZXIgbW90by1wcmVzZXQtZGVmYXVsdCBtb3RvLWFsaWduLWxlZnQgbW90by1zcGFjaW5nLXRvcC1zbWFsbCBtb3RvLXNwYWNpbmctcmlnaHQtYXV0byBtb3RvLXNwYWNpbmctYm90dG9tLXNtYWxsIG1vdG8tc3BhY2luZy1sZWZ0LWF1dG8gIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtd2lkZ2V0PVwiZGl2aWRlcl9ob3Jpem9udGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wcmVzZXQ9XCJkZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW90by13aWRnZXQtZGl2aWRlci1saW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogXCIxMDAlXCIsIHdpZHRoOiBcIjYwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vdG8td2lkZ2V0IG1vdG8td2lkZ2V0LXJvd19fY29sdW1uIG1vdG8tY2VsbCBjb2wtc20tMTEgbW90by1zcGFjaW5nLXRvcC1hdXRvIG1vdG8tc3BhY2luZy1yaWdodC1hdXRvIG1vdG8tc3BhY2luZy1ib3R0b20tYXV0byBtb3RvLXNwYWNpbmctbGVmdC1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtd2lkZ2V0PVwicm93LmNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLWNvbnRhaW5lcj1cImNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNwYWNpbmc9XCJhYWFhXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vdG8td2lkZ2V0IG1vdG8td2lkZ2V0LXRleHQgbW90by1wcmVzZXQtZGVmYXVsdCBtb3RvLXNwYWNpbmctdG9wLWF1dG8gbW90by1zcGFjaW5nLXJpZ2h0LWF1dG8gbW90by1zcGFjaW5nLWJvdHRvbS1hdXRvIG1vdG8tc3BhY2luZy1sZWZ0LWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXdpZGdldD1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXByZXNldD1cImRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNwYWNpbmc9XCJhYWFhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdG8td2lkZ2V0LXRleHQtY29udGVudCBtb3RvLXdpZGdldC10ZXh0LWVkaXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibW90by10ZXh0X3N5c3RlbV8xMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0KPQktCV0JrQntCS0JXQp9CY0KLQrCDQn9CQ0JzQr9Ci0Kwg0JPQldCg0J7Qr1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3RvLXdpZGdldCBtb3RvLXdpZGdldC1ibG9jayBtb3RvLXNwYWNpbmctdG9wLW1lZGl1bSBtb3RvLXNwYWNpbmctcmlnaHQtYXV0byBtb3RvLXNwYWNpbmctYm90dG9tLWxhcmdlIG1vdG8tc3BhY2luZy1sZWZ0LWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS13aWRnZXQ9XCJibG9ja1wiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXNwYWNpbmc9XCJtYWxhXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYmctcG9zaXRpb249XCJsZWZ0IHRvcFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3RvLWNlbGwgY29sLXNtLTEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY29udGFpbmVyPVwiY29udGFpbmVyXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vdG8td2lkZ2V0IG1vdG8td2lkZ2V0LXJvdyByb3ctZml4ZWQgbW90by1zcGFjaW5nLXRvcC1hdXRvIG1vdG8tc3BhY2luZy1yaWdodC1hdXRvIG1vdG8tc3BhY2luZy1ib3R0b20tYXV0byBtb3RvLXNwYWNpbmctbGVmdC1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1ncmlkLXR5cGU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtd2lkZ2V0PVwicm93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zcGFjaW5nPVwiYWFhYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBkYXRhLWNvbnRhaW5lcj1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3RvLXdpZGdldCBtb3RvLXdpZGdldC1yb3dfX2NvbHVtbiBtb3RvLWNlbGwgY29sLXNtLTEgbW90by1zcGFjaW5nLXRvcC1hdXRvIG1vdG8tc3BhY2luZy1yaWdodC1hdXRvIG1vdG8tc3BhY2luZy1ib3R0b20tYXV0byBtb3RvLXNwYWNpbmctbGVmdC1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS13aWRnZXQ9XCJyb3cuY29sdW1uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jb250YWluZXI9XCJjb250YWluZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNwYWNpbmc9XCJhYWFhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW90by13aWRnZXQgbW90by13aWRnZXQtcm93X19jb2x1bW4gbW90by1jZWxsIGNvbC1zbS01IG1vdG8tc3BhY2luZy10b3AtYXV0byBtb3RvLXNwYWNpbmctcmlnaHQtYXV0byBtb3RvLXNwYWNpbmctYm90dG9tLWF1dG8gbW90by1zcGFjaW5nLWxlZnQtYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtd2lkZ2V0PVwicm93LmNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY29udGFpbmVyPVwiY29udGFpbmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zcGFjaW5nPVwiYWFhYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3RvLXdpZGdldCBtb3RvLXdpZGdldC10ZXh0IG1vdG8tcHJlc2V0LWRlZmF1bHQgbW90by1zcGFjaW5nLXRvcC1hdXRvIG1vdG8tc3BhY2luZy1yaWdodC1hdXRvIG1vdG8tc3BhY2luZy1ib3R0b20tYXV0byBtb3RvLXNwYWNpbmctbGVmdC1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXdpZGdldD1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcHJlc2V0PVwiZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zcGFjaW5nPVwiYWFhYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3RvLXdpZGdldC10ZXh0LWNvbnRlbnQgbW90by13aWRnZXQtdGV4dC1lZGl0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibW90by10ZXh0X3N5c3RlbV82XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCU0L7QsdCw0LLQu9C10L3QuNC1INC40L3RhNC+0YDQvNCw0YbQuNC4INC+INCT0LXRgNC+0LUg0LLQvtC50L3Ri1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibW90by10ZXh0X25vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1vdG8tdGV4dF9ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J/QvtC20LDQu9GD0LnRgdGC0LAsINCy0L3QtdGB0LjRgtC1INC60L7RgNGA0LXQutGC0L3Ri9C1INC00LDQvdC90YvQtS4g0J/QvtGB0LvQtVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjQuCDQuNC90YTQvtGA0LzQsNGG0LjQuCDQstCw0Lwg0L3QsCBFbWFpbCDQsNC00YDQtdGBXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCx0YPQtNC10YIg0LLRi9GB0LvQsNC90L4g0YHQvtC+0LHRidC10L3QuNC1LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW90by13aWRnZXQgbW90by13aWRnZXQtcm93X19jb2x1bW4gbW90by1jZWxsIGNvbC1zbS01IG1vdG8tc3BhY2luZy10b3AtYXV0byBtb3RvLXNwYWNpbmctcmlnaHQtYXV0byBtb3RvLXNwYWNpbmctYm90dG9tLWF1dG8gbW90by1zcGFjaW5nLWxlZnQtYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtd2lkZ2V0PVwicm93LmNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY29udGFpbmVyPVwiY29udGFpbmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zcGFjaW5nPVwiYWFhYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIndpZF9fY29udGFjdF9mb3JtX181YjE4ZTVkZDdhMTgzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3RvLXdpZGdldCBtb3RvLXdpZGdldC1jb250YWN0X2Zvcm0gbW90by1wcmVzZXQtMiBtb3RvLXNwYWNpbmctdG9wLWF1dG8gbW90by1zcGFjaW5nLXJpZ2h0LWF1dG8gbW90by1zcGFjaW5nLWJvdHRvbS1hdXRvIG1vdG8tc3BhY2luZy1sZWZ0LWF1dG8gIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wcmVzZXQ9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXdpZGdldD1cImNvbnRhY3RfZm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zcGFjaW5nPVwiYWFhYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZy1jb250cm9sbGVyPVwid2lkZ2V0LkNvbnRhY3RGb3JtLkNvbnRyb2xsZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmctaW5pdD0naGFzaCA9ICZhcG9zOzJAZXlKb0lqb2lkbXAyZUN0clZqQjRUSFpLY0V0b1hDOTVWVGxaV1U1NE9HaFROa1ZXV25WT2JHVlViRVJXUzBkUVIwRTlJaXdpYVNJNklqRnVVVzlOU1hNcmFEUnZOMVp4Y2tGMGVGRnNlV2M5UFNJc0luWWlPaUkwT0doYWRtUXlTbEY2Y1V4NVRsRkJYQzlaZUdRM1NVcHlla0pLYVd0Q2FHNTVSakppZVdSQlpEVjVTMVUxVmt4Q1NIVTNhMHRyYlVvNFNIVXhTV2xsWVZoNVVIWnlabmczWW14UlptNWpWSFJ1VjFaeVYwWXlOWFZsUzFSaldUSjNZekE0YTJoQ1J6TnRPV3M5SW4wPSZhcG9zOzthY3Rpb25BZnRlclN1Ym1pc3Npb249e1wiYWN0aW9uXCI6XCJub25lXCIsXCJ1cmxcIjpcIlwiLFwidGFyZ2V0XCI6XCJfc2VsZlwiLFwiaWRcIjpcIlwifTtyZXNldEFmdGVyU3VibWlzc2lvbj1mYWxzZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIndpZF9fY29udGFjdF9mb3JtX181YjE4ZTVkZDdhMTgzX19mb3JtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW90by13aWRnZXQtY29udGFjdF9mb3JtLWZvcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwiZm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb250YWN0Rm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZy1zaG93PVwic2VuZGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFjdC1mb3JtLWxvYWRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdG8tY2VsbCBjb2wtc20tMTIgbW90by13aWRnZXQtYmxvZy1yZWNlbnRfcG9zdHMtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW90by13aWRnZXQtYmxvZy1yZWNlbnRfcG9zdHMtaXRlbV9fY29udGVudCAgbW90by1zcGFjaW5nLXRvcC1zbWFsbCBtb3RvLXNwYWNpbmctcmlnaHQtYXV0byBtb3RvLXNwYWNpbmctYm90dG9tLWF1dG8gbW90by1zcGFjaW5nLWxlZnQtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bob3RvICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3RvLXdpZGdldC1ibG9nLXJlY2VudF9wb3N0cy1pdGVtLXByZXZpZXcgbW90by1zcGFjaW5nLWJvdHRvbS1zbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtd2lkZ2V0LWlkPVwid2lkX19pbWFnZV9fNjE3ZGE3YjYwZmFlN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3RvLXdpZGdldCBtb3RvLXdpZGdldC1pbWFnZSBtb3RvLXByZXNldC1kZWZhdWx0IG1vdG8tYWxpZ24tbGVmdCBtb3RvLXNwYWNpbmctdG9wLWF1dG8gbW90by1zcGFjaW5nLXJpZ2h0LWF1dG8gbW90by1zcGFjaW5nLWJvdHRvbS1zbWFsbCBtb3RvLXNwYWNpbmctbGVmdC1hdXRvICBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS13aWRnZXQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyNzJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW90by13aWRnZXQtaW1hZ2UtcGljdHVyZSBsYXp5bG9hZGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17VVJMLmNyZWF0ZU9iamVjdFVSTChwaG90byl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3RvLXdpZGdldC1ibG9nLXJlY2VudF9wb3N0cy1pdGVtLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXdpZGdldC1pZD1cIndpZF8xNTI5NjAyODAxX3RuaGp6czJleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW90by13aWRnZXQgbW90by13aWRnZXQtYnV0dG9uIG1vdG8tcHJlc2V0LTQgbW90by1wcmVzZXQtcHJvdmlkZXItZGVmYXVsdCBtb3RvLWFsaWduLWNlbnRlciBtb3RvLXNwYWNpbmctdG9wLWF1dG8gbW90by1zcGFjaW5nLXJpZ2h0LWF1dG8gbW90by1zcGFjaW5nLWJvdHRvbS1hdXRvIG1vdG8tc3BhY2luZy1sZWZ0LWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtd2lkZ2V0PVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImZpbGUtdXBsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vdG8td2lkZ2V0LWJ1dHRvbi1saW5rIG1vdG8tc2l6ZS1tZWRpdW0gbW90by1saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYVwiPu+Ckzwvc3Bhbj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQl9Cw0LPRgNGD0LfQuNGC0Ywg0LjQt9C+0LHRgNCw0LbQtdC90LjQtVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZpbGUtdXBsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBob3RvKGUudGFyZ2V0LmZpbGVzWzBdKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGhvdG9FcnJvcihcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bob3RvX2Vycm9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtb3RvLXdpZGdldC1jb250YWN0X2Zvcm0tZmllbGQtZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwaG90b19lcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdG8td2lkZ2V0LWNvbnRhY3RfZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImZpZWxkX25hbWVfd2lkX19jb250YWN0X2Zvcm1fXzViMThlNWRkN2ExODNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW90by13aWRnZXQtY29udGFjdF9mb3JtLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQpNCw0LzQuNC70LjRjyDQstC10YLQtdGA0LDQvdCwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vdG8td2lkZ2V0LWNvbnRhY3RfZm9ybS1maWVsZCBtb3RvLXdpZGdldC1jb250YWN0X2Zvcm0taW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQpNCw0LzQuNC70LjRj1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3RfbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGFzdF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMYXN0TmFtZShlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmllbGRfbmFtZV93aWRfX2NvbnRhY3RfZm9ybV9fNWIxOGU1ZGQ3YTE4M1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdG8td2lkZ2V0LWNvbnRhY3RfZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImZpZWxkX25hbWVfd2lkX19jb250YWN0X2Zvcm1fXzViMThlNWRkN2ExODNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW90by13aWRnZXQtY29udGFjdF9mb3JtLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQmNC80Y8g0LLQtdGC0LXRgNCw0L3QsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3RvLXdpZGdldC1jb250YWN0X2Zvcm0tZmllbGQgbW90by13aWRnZXQtY29udGFjdF9mb3JtLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JjQvNGPXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3RfbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zmlyc3RfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Rmlyc3ROYW1lKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWVsZF9uYW1lX3dpZF9fY29udGFjdF9mb3JtX181YjE4ZTVkZDdhMTgzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW90by13aWRnZXQtY29udGFjdF9mb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiZmllbGRfbmFtZV93aWRfX2NvbnRhY3RfZm9ybV9fNWIxOGU1ZGQ3YTE4M1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3RvLXdpZGdldC1jb250YWN0X2Zvcm0tbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCe0YLRh9C10YHRgtCy0L4g0LLQtdGC0LXRgNCw0L3QsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3RvLXdpZGdldC1jb250YWN0X2Zvcm0tZmllbGQgbW90by13aWRnZXQtY29udGFjdF9mb3JtLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J7RgtGH0LXRgdGC0LLQvlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWlkZGxlX25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21pZGRsZV9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNaWRkbGVOYW1lKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWVsZF9uYW1lX3dpZF9fY29udGFjdF9mb3JtX181YjE4ZTVkZDdhMTgzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vdG8td2lkZ2V0LWNvbnRhY3RfZm9ybS1maWVsZC1lcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J3QtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+0LUg0L/QvtC70LVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3RvLXdpZGdldC1jb250YWN0X2Zvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJmaWVsZF9uYW1lX3dpZF9fY29udGFjdF9mb3JtX181YjE4ZTVkZDdhMTgzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vdG8td2lkZ2V0LWNvbnRhY3RfZm9ybS1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KHRgtGD0LTQtdC90YIo0LrQsClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW90by13aWRnZXQtY29udGFjdF9mb3JtLWZpZWxkIG1vdG8td2lkZ2V0LWNvbnRhY3RfZm9ybS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCh0YLRg9C00LXQvdGCKNC60LApXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3R1ZGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3R1ZGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3R1ZGVudChlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmllbGRfbmFtZV93aWRfX2NvbnRhY3RfZm9ybV9fNWIxOGU1ZGQ3YTE4M1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdG8td2lkZ2V0LWNvbnRhY3RfZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImZpZWxkX25hbWVfd2lkX19jb250YWN0X2Zvcm1fXzViMThlNWRkN2ExODNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW90by13aWRnZXQtY29udGFjdF9mb3JtLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQktC10YLQtdGA0LDQvSDQv9GA0LjRhdC+0LTQuNGC0YHRj1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3RvLXdpZGdldC1jb250YWN0X2Zvcm0tZmllbGQgbW90by13aWRnZXQtY29udGFjdF9mb3JtLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JLQtdGC0LXRgNCw0L0g0L/RgNC40YXQvtC00LjRgtGB0Y9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJraW5zaGlwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtraW5zaGlwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRLaW5zaGlwKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWVsZF9uYW1lX3dpZF9fY29udGFjdF9mb3JtX181YjE4ZTVkZDdhMTgzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW90by13aWRnZXQtY29udGFjdF9mb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiZmllbGRfbmFtZV93aWRfX2NvbnRhY3RfZm9ybV9fNWIxOGU1ZGQ3YTE4M1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3RvLXdpZGdldC1jb250YWN0X2Zvcm0tbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsINCw0LTRgNC10YFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW90by13aWRnZXQtY29udGFjdF9mb3JtLWZpZWxkIG1vdG8td2lkZ2V0LWNvbnRhY3RfZm9ybS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsINCw0LTRgNC10YFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWVsZF9uYW1lX3dpZF9fY29udGFjdF9mb3JtX181YjE4ZTVkZDdhMTgzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW90by13aWRnZXQtY29udGFjdF9mb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiZmllbGRfbmFtZV93aWRfX2NvbnRhY3RfZm9ybV9fNWIxOGU1ZGQ3YTE4M1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3RvLXdpZGdldC1jb250YWN0X2Zvcm0tbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCf0L7QtNC/0LjRgdGMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vdG8td2lkZ2V0LWNvbnRhY3RfZm9ybS1maWVsZCBtb3RvLXdpZGdldC1jb250YWN0X2Zvcm0taW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQktC10YLQtdGA0LDQvSDQv9GA0LjRhdC+0LTQuNGC0YHRj1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2lnbmF0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzaWduYXR1cmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNpZ25hdHVyZShlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmllbGRfbmFtZV93aWRfX2NvbnRhY3RfZm9ybV9fNWIxOGU1ZGQ3YTE4M1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtb3RvLXdpZGdldC1jb250YWN0X2Zvcm0tZmllbGQtZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCd0LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QvtC1INC/0L7Qu9C1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW90by13aWRnZXQtY29udGFjdF9mb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiZmllbGRfbWVzc2FnZV93aWRfX2NvbnRhY3RfZm9ybV9fNWIxOGU1ZGQ3YTE4M1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3RvLXdpZGdldC1jb250YWN0X2Zvcm0tbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCe0L/QuNGB0LDQvdC40LVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGVzY3JpcHRpb24oZGF0YSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGVzY3JpcHRpb25FcnJvcihcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0b3JMb2FkZWQ9e2VkaXRvckxvYWRlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbl9lcnJvciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtb3RvLXdpZGdldC1jb250YWN0X2Zvcm0tZmllbGQtZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9uX2Vycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3RvLXdpZGdldC1jb250YWN0X2Zvcm0tc3VjY2VzcyBuZy1jbG9ha1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgbWVzc2FnZSB3YXMgc2VudCBzdWNjZXNzZnVsbHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW90by13aWRnZXQtY29udGFjdF9mb3JtLWRhbmdlciBuZy1jbG9ha1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvcnJ5LCB5b3VyIG1lc3NhZ2Ugd2FzIG5vdCBzZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdG8td2lkZ2V0LWNvbnRhY3RfZm9ybS1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW90by13aWRnZXQgbW90by13aWRnZXQtYnV0dG9uIG1vdG8tcHJlc2V0LTIgbW90by1wcmVzZXQtcHJvdmlkZXItZGVmYXVsdCBtb3RvLWFsaWduLWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wcmVzZXQ9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3RvLXdpZGdldC1idXR0b24tbGluayBtb3RvLXNpemUtbWVkaXVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zaXplPVwibWVkaXVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEgbW90by13aWRnZXQtdGhlbWUtaWNvblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibW90by13aWRnZXQtYnV0dG9uLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J7RgtC/0YDQsNCy0LjRgtGMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW90by13aWRnZXQgbW90by13aWRnZXQtcm93X19jb2x1bW4gbW90by1jZWxsIGNvbC1zbS0xIG1vdG8tc3BhY2luZy10b3AtYXV0byBtb3RvLXNwYWNpbmctcmlnaHQtYXV0byBtb3RvLXNwYWNpbmctYm90dG9tLWF1dG8gbW90by1zcGFjaW5nLWxlZnQtYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtd2lkZ2V0PVwicm93LmNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY29udGFpbmVyPVwiY29udGFpbmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zcGFjaW5nPVwiYWFhYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNrZWRpdG9yL2NrZWRpdG9yNS1idWlsZC1jbGFzc2ljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBja2VkaXRvci9ja2VkaXRvcjUtcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9taXR0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwiLyogKGlnbm9yZWQpICovIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiRWRpdG9yIiwib25DaGFuZ2UiLCJlZGl0b3JMb2FkZWQiLCJuYW1lIiwidmFsdWUiLCJlZGl0b3JSZWYiLCJDS0VkaXRvciIsIkNsYXNzaWNFZGl0b3IiLCJjdXJyZW50IiwicmVxdWlyZSIsInRvb2xiYXIiLCJja2ZpbmRlciIsInVwbG9hZFVybCIsImV2ZW50IiwiZWRpdG9yIiwiZGF0YSIsImdldERhdGEiLCJJbWFnZSIsIkxpbmsiLCJGb290ZXIiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkhlYWRlciIsImhpZGUiLCJzZXRIaWRlIiwicm91dGVyIiwicGF0aG5hbWUiLCJIZWFkIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJ0aXRsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsImRlZmF1bHQiLCJJbWFnZTEiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX2hlYWQiLCJfdG9CYXNlNjQiLCJfaW1hZ2VDb25maWciLCJfdXNlSW50ZXJzZWN0aW9uIiwiX2RlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX19lc01vZHVsZSIsIl9vYmplY3RTcHJlYWQiLCJ0YXJnZXQiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic291cmNlIiwib3duS2V5cyIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJjb25jYXQiLCJmaWx0ZXIiLCJzeW0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJmb3JFYWNoIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiZXhjbHVkZWQiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsInNvdXJjZVN5bWJvbEtleXMiLCJpbmRleE9mIiwicHJvdG90eXBlIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJjYWxsIiwic291cmNlS2V5cyIsImxvYWRlZEltYWdlVVJMcyIsIlNldCIsImdsb2JhbCIsIl9fTkVYVF9JTUFHRV9JTVBPUlRFRCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwidW5kZWZpbmVkIiwibG9hZGVycyIsIk1hcCIsImRlZmF1bHRMb2FkZXIiLCJpbWdpeExvYWRlciIsImNsb3VkaW5hcnlMb2FkZXIiLCJha2FtYWlMb2FkZXIiLCJjdXN0b21Mb2FkZXIiLCJWQUxJRF9MQVlPVVRfVkFMVUVTIiwiaXNTdGF0aWNSZXF1aXJlIiwic3JjIiwiaXNTdGF0aWNJbWFnZURhdGEiLCJpc1N0YXRpY0ltcG9ydCIsImRldmljZVNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwiY29uZmlnSW1hZ2VTaXplcyIsImxvYWRlciIsImNvbmZpZ0xvYWRlciIsInBhdGgiLCJjb25maWdQYXRoIiwiZG9tYWlucyIsImNvbmZpZ0RvbWFpbnMiLCJwcm9jZXNzIiwiZW52IiwiX19ORVhUX0lNQUdFX09QVFMiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsInNvcnQiLCJhIiwiYiIsImdldFdpZHRocyIsIndpZHRoIiwibGF5b3V0Iiwic2l6ZXMiLCJ2aWV3cG9ydFdpZHRoUmUiLCJwZXJjZW50U2l6ZXMiLCJtYXRjaCIsImV4ZWMiLCJwdXNoIiwicGFyc2VJbnQiLCJzbWFsbGVzdFJhdGlvIiwiTWF0aCIsIm1pbiIsIndpZHRocyIsInMiLCJraW5kIiwibWFwIiwidyIsImZpbmQiLCJwIiwiZ2VuZXJhdGVJbWdBdHRycyIsInVub3B0aW1pemVkIiwicXVhbGl0eSIsInNyY1NldCIsImxhc3QiLCJqb2luIiwiZ2V0SW50IiwieCIsImRlZmF1bHRJbWFnZUxvYWRlciIsImxvYWRlclByb3BzIiwibG9hZCIsImdldCIsInJvb3QiLCJFcnJvciIsIlZBTElEX0xPQURFUlMiLCJoYW5kbGVMb2FkaW5nIiwiaW1nIiwicGxhY2Vob2xkZXIiLCJvbkxvYWRpbmdDb21wbGV0ZSIsImhhbmRsZUxvYWQiLCJzdGFydHNXaXRoIiwiZGVjb2RlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjYXRjaCIsInRoZW4iLCJzdHlsZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEltYWdlIiwiYWRkIiwibmF0dXJhbFdpZHRoIiwibmF0dXJhbEhlaWdodCIsInJlZiIsInBhcmVudEVsZW1lbnQiLCJwYXJlbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZGlzcGxheSIsImNvbnNvbGUiLCJ3YXJuIiwicG9zaXRpb24iLCJjb21wbGV0ZSIsIm9ubG9hZCIsIl9wYXJhbSIsInByaW9yaXR5IiwibG9hZGluZyIsImxhenlCb3VuZGFyeSIsImNsYXNzTmFtZSIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwiYmx1ckRhdGFVUkwiLCJhbGwiLCJyZXN0Iiwic3RhdGljU3JjIiwic3RhdGljSW1hZ2VEYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIndpZHRoSW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImlzTGF6eSIsImhhcyIsImluY2x1ZGVzIiwiU3RyaW5nIiwiaXNOYU4iLCJWQUxJRF9CTFVSX0VYVCIsInJhbmQiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwic2V0UmVmIiwiaXNJbnRlcnNlY3RlZCIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndyYXBwZXJTdHlsZSIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ1N0eWxlIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJibHVyU3R5bGUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJvdmVyZmxvdyIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsImltZ0F0dHJpYnV0ZXMiLCJzcmNTdHJpbmciLCJjcmVhdGVFbGVtZW50IiwiYWx0IiwidG9CYXNlNjQiLCJhc3NpZ24iLCJkZWNvZGluZyIsInJlbCIsImFzIiwiaHJlZiIsImltYWdlc3Jjc2V0IiwiaW1hZ2VzaXplcyIsIm5vcm1hbGl6ZVNyYyIsInNsaWNlIiwidXJsIiwiVVJMIiwicGFyYW1zIiwic2VhcmNoUGFyYW1zIiwic2V0IiwicGFyYW1zU3RyaW5nIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsImVyciIsImVycm9yIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJfcm91dGVyIiwiX3JvdXRlcjEiLCJwcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJvcHRpb25zIiwiaXNMb2NhbFVSTCIsImN1ckxvY2FsZSIsImxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwiZSIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJ1c2VDYWxsYmFjayIsImVsIiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJ0eXBlIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsImVuZHNXaXRoIiwiX19ORVhUX1RSQUlMSU5HX1NMQVNIIiwidGVzdCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJzZWxmIiwiYmluZCIsIndpbmRvdyIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwibWF4IiwiaWQiLCJjbGVhclRpbWVvdXQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJjcmVhdGVSb3V0ZUxvYWRlciIsIl9nZXRBc3NldFBhdGhGcm9tUm91dGUiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwid2l0aEZ1dHVyZSIsImdlbmVyYXRvciIsImVudHJ5IiwiZnV0dXJlIiwicmVzb2x2ZXIiLCJwcm9tIiwiaGFzUHJlZmV0Y2giLCJsaW5rIiwiZG9jdW1lbnQiLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZXMiLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwiY3Jvc3NPcmlnaW4iLCJfX05FWFRfQ1JPU1NfT1JJR0lOIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhcHBlbmRTY3JpcHQiLCJzY3JpcHQiLCJyZWplY3QiLCJib2R5IiwiZGV2QnVpbGRQcm9taXNlIiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJyb3V0ZUZpbGVzUHJvbWlzZSIsImVudHJ5cG9pbnQiLCJzdHlsZXMiLCJmaW5hbGx5IiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJlZmZlY3RpdmVUeXBlIiwib3V0cHV0IiwiX3dpdGhSb3V0ZXIiLCJjcmVhdGVSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJfcm91dGVyQ29udGV4dCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkFycmF5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImVsZW1lbnQiLCJjYWxsYmFjayIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZUFzIiwiX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2giLCJfcm91dGVMb2FkZXIiLCJfZGVub3JtYWxpemVQYWdlUGF0aCIsIl9ub3JtYWxpemVMb2NhbGVQYXRoIiwiX21pdHQiLCJfdXRpbHMiLCJfaXNEeW5hbWljIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJfcXVlcnlzdHJpbmciLCJfcmVzb2x2ZVJld3JpdGVzIiwiX3JvdXRlTWF0Y2hlciIsIl9yb3V0ZVJlZ2V4IiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiX19ORVhUX0kxOE5fU1VQUE9SVCIsImJhc2VQYXRoIiwiX19ORVhUX1JPVVRFUl9CQVNFUEFUSCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsImRldGVjdGVkTG9jYWxlIiwiZGV0ZWN0ZWREb21haW4iLCJodHRwIiwiZG9tYWluIiwicGF0aExvd2VyIiwidG9Mb3dlckNhc2UiLCJsb2NhbGVMb3dlciIsInN1YnN0ciIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJ1cmxQcm90b01hdGNoIiwidXJsQXNTdHJpbmdOb1Byb3RvIiwidXJsUGFydHMiLCJzcGxpdCIsIm5vcm1hbGl6ZWRVcmwiLCJub3JtYWxpemVSZXBlYXRlZFNsYXNoZXMiLCJhc1BhdGgiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaXNEeW5hbWljUm91dGUiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IiwiaGFzaCIsInN0cmlwT3JpZ2luIiwicHJlcGFyZVVybEFzIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJwcmVwYXJlZEFzIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhZ2VzIiwiY2xlYW5QYXRobmFtZSIsImRlbm9ybWFsaXplUGFnZVBhdGgiLCJzb21lIiwicGFnZSIsInJlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJfX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OIiwiaGlzdG9yeSIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJuIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJzdGF0dXMiLCJqc29uIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwicGF0aG5hbWUxIiwicXVlcnkxIiwiYXMxIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJDb21wb25lbnQxIiwiZXJyMSIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJzZGMiLCJzZHIiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJfX04iLCJmb3JjZWRTY3JvbGwiLCJpZHgiLCJwYWdlWE9mZnNldCIsInkiLCJwYWdlWU9mZnNldCIsImdldEl0ZW0iLCJwYXJzZSIsInBhcnNlUmVsYXRpdmVVcmwiLCJpc1NzciIsIl9icHMiLCJjaGFuZ2UiLCJfc2hhbGxvdyIsImNvbXBvbmVudHMiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJpc1JlYWR5IiwiZ3NzcCIsImdpcCIsImFwcEdpcCIsImdzcCIsImxvY2F0aW9uIiwic2VhcmNoIiwiX19ORVhUX0hBU19SRVdSSVRFUyIsIl9zaG91bGRSZXNvbHZlSHJlZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxSZXN0b3JhdGlvbiIsInJlbG9hZCIsImJhY2siLCJtZXRob2QiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwicHJldkxvY2FsZSIsInBhcnNlZEFzIiwibG9jYWxlUGF0aFJlc3VsdCIsImRpZE5hdmlnYXRlIiwiYXNOb0Jhc2VQYXRoIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiX2luRmxpZ2h0Um91dGUiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJsb2NhbGVDaGFuZ2UiLCJvbmx5QUhhc2hDaGFuZ2UiLCJlbWl0Iiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInJld3JpdGVzUmVzdWx0IiwibWF0Y2hlZFBhZ2UiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJlZjEiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJfc2Nyb2xsIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJkb2N1bWVudEVsZW1lbnQiLCJsYW5nIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImVycjIiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwic2Nyb2xsVG8iLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicGF0aG5hbWUyIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHAxIiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJBZGRIZXJvIiwic2V0RWRpdG9yTG9hZGVkIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsImxhc3RfbmFtZSIsInNldExhc3ROYW1lIiwiZmlyc3RfbmFtZSIsInNldEZpcnN0TmFtZSIsIm1pZGRsZV9uYW1lIiwic2V0TWlkZGxlTmFtZSIsInN0dWRlbnQiLCJzZXRTdHVkZW50IiwiZW1haWwiLCJzZXRFbWFpbCIsImtpbnNoaXAiLCJzZXRLaW5zaGlwIiwic2lnbmF0dXJlIiwic2V0U2lnbmF0dXJlIiwicGhvdG8iLCJzZXRQaG90byIsImRlc2NyaXB0aW9uX2Vycm9yIiwic2V0RGVzY3JpcHRpb25FcnJvciIsInBob3RvX2Vycm9yIiwic2V0UGhvdG9FcnJvciIsImhhbmRsZVN1Ym1pdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJBUElfVVJMIiwicmVxIiwiY3JlYXRlT2JqZWN0VVJMIiwiZmlsZXMiXSwic291cmNlUm9vdCI6IiJ9