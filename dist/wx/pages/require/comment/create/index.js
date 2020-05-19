require("../../../../common/manifest.js")
require("../../../../common/vendor.js")
global.webpackJsonp([15],{

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_24e07359_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(258);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(256)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-24e07359"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_24e07359_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/require/comment/create/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-24e07359", Component.options)
  } else {
    hotAPI.reload("data-v-24e07359", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 256:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Uploader__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_comment__ = __webpack_require__(72);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    Uploader: __WEBPACK_IMPORTED_MODULE_4__components_Uploader__["a" /* default */]
  },

  data: function data() {
    return {
      requirementId: '',
      commentId: '',
      repayId: '',
      repayType: '',
      text: '',
      files: []
    };
  },
  onLoad: function onLoad(option) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign___default()(this, this.$options.data());
    this.requirementId = option.requirementId;
    this.commentId = option.commentId || '';
    this.repayId = option.repayId || '';
    this.repayType = option.repayType || 'default';
  },


  methods: {
    onInput: function onInput(event) {
      this.text = event.mp.detail.value;
    },
    afterRead: function afterRead(event) {
      this.files.push({
        url: event.url
      });
    },
    afterDelete: function afterDelete(event) {
      this.files.splice(event.index, 1);
    },
    publish: function publish() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this.text) {
                  _context.next = 20;
                  break;
                }

                _context.prev = 1;
                _context.t0 = _this.repayType;
                _context.next = _context.t0 === 'default' ? 5 : _context.t0 === 'comment' ? 8 : _context.t0 === 'repay' ? 11 : 14;
                break;

              case 5:
                _context.next = 7;
                return _this.commentPublish();

              case 7:
                return _context.abrupt('break', 14);

              case 8:
                _context.next = 10;
                return _this.commentRepay();

              case 10:
                return _context.abrupt('break', 14);

              case 11:
                _context.next = 13;
                return _this.commentRepay();

              case 13:
                return _context.abrupt('break', 14);

              case 14:
                _this.$navigate.back();
                wx.showToast({
                  title: "发布成功",
                  icon: "none"
                });
                _context.next = 20;
                break;

              case 18:
                _context.prev = 18;
                _context.t1 = _context['catch'](1);

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[1, 18]]);
      }))();
    },
    commentPublish: function commentPublish() {
      var _this2 = this;

      var vm = this;
      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function () {
        var _ref = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2(resolve, reject) {
          return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return Object(__WEBPACK_IMPORTED_MODULE_5__api_comment__["c" /* commentPublish */])({
                    content: vm.text,
                    contentFiles: vm.files,
                    contentLabel: '1',
                    requirementId: vm.requirementId
                  });

                case 2:
                  resolve();

                case 3:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this2);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    },
    commentRepay: function commentRepay() {
      var _this3 = this;

      var data = {
        commentId: this.commentId,
        content: this.text,
        contentFiles: this.files,
        requirementId: this.requirementId,
        repayId: this.repayId,
        repayType: this.repayType
      };
      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function () {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3(resolve, reject) {
          return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return Object(__WEBPACK_IMPORTED_MODULE_5__api_comment__["d" /* commentRepay */])(data);

                case 2:
                  resolve();

                case 3:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this3);
        }));

        return function (_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  }
});

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "create-comment"
  }, [_c('div', {
    staticClass: "publish"
  }, [_c('span', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.publish
    }
  }, [_vm._v("发布")])]), _vm._v(" "), _c('div', {
    staticClass: "text-input"
  }, [_c('textarea', {
    staticStyle: {
      "padding": "10px"
    },
    attrs: {
      "value": _vm.text,
      "placeholder": "请输入文本",
      "auto-focus": "",
      "eventid": '1'
    },
    on: {
      "input": _vm.onInput
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "file-upload"
  }, [_c('uploader', {
    attrs: {
      "max": 3,
      "files": _vm.files,
      "eventid": '2',
      "mpcomid": '0'
    },
    on: {
      "afterRead": _vm.afterRead,
      "delete": _vm.afterDelete
    }
  })], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-24e07359", esExports)
  }
}

/***/ })

},[351]);