require("../../../../common/manifest.js")
require("../../../../common/vendor.js")
global.webpackJsonp([5],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7684bdaa_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(284);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(281)
  __webpack_require__(282)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7684bdaa"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7684bdaa_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/mine/require/detail/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7684bdaa", Component.options)
  } else {
    hotAPI.reload("data-v-7684bdaa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 281:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 282:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_index__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_require__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Empty__ = __webpack_require__(24);



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
    Empty: __WEBPACK_IMPORTED_MODULE_5__components_Empty__["a" /* default */]
  },

  data: function data() {
    return {
      list: [],
      requirementId: '',
      page: 1,
      limit: 20,
      total: 0,
      loading: true
    };
  },
  onLoad: function onLoad(option) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()(this, this.$options.data());
    this.requirementId = option.id;
  },
  mounted: function mounted() {
    this.fetch();
  },


  methods: {
    onBottom: function onBottom() {
      this.page++;
      if (this.list.length < this.total) {
        this.loading = true;
        this.fetch();
      }
    },
    fetch: function fetch() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_4__api_require__["l" /* supplyList */])({
                  requirementId: _this.requirementId,
                  limit: _this.limit,
                  page: _this.page
                });

              case 3:
                res = _context.sent;

                _this.total = res.data.total;
                res.data.rows.forEach(function (element) {
                  element.createTime = Object(__WEBPACK_IMPORTED_MODULE_3__utils_index__["a" /* formatDate */])(element.createTime).slice(0, 10);
                  _this.list.push(element);
                });
                _this.loading = false;
                _context.next = 11;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](0);

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 9]]);
      }))();
    },
    phoneCall: function phoneCall(value) {
      var rules = [{ value: value, type: 'phone', required: true }];
      this.$validate(rules).then(function () {
        wx.makePhoneCall({
          phoneNumber: value
        });
      });
    }
  }
});

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(!_vm.loading) ? [(_vm.list.length > 0) ? _c('scroll-view', {
    staticClass: "scroll",
    attrs: {
      "scroll-y": true,
      "eventid": '1'
    },
    on: {
      "scrolltolower": _vm.onBottom
    }
  }, [_c('van-row', {
    attrs: {
      "mpcomid": '3'
    }
  }, [_c('van-col', {
    attrs: {
      "span": "8",
      "mpcomid": '0'
    }
  }, [_c('div', {
    staticClass: "table-head"
  }, [_vm._v("姓名")])]), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "8",
      "mpcomid": '1'
    }
  }, [_c('div', {
    staticClass: "table-head"
  }, [_vm._v("联系方式")])]), _vm._v(" "), _c('van-col', {
    attrs: {
      "span": "8",
      "mpcomid": '2'
    }
  }, [_c('div', {
    staticClass: "table-head"
  }, [_vm._v("创建日期")])])], 1), _vm._v(" "), _c('van-row', {
    attrs: {
      "mpcomid": '7'
    }
  }, _vm._l((_vm.list), function(item, index) {
    return _c('div', {
      key: item.id
    }, [_c('van-col', {
      attrs: {
        "span": "8",
        "mpcomid": '4_' + index
      }
    }, [_c('div', {
      staticClass: "table-container ellipsis"
    }, [_vm._v(_vm._s(item.name))])]), _vm._v(" "), _c('van-col', {
      attrs: {
        "span": "8",
        "mpcomid": '5_' + index
      }
    }, [_c('div', {
      staticClass: "table-container ellipsis",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.phoneCall(item.phone)
        }
      }
    }, [_vm._v(_vm._s(item.phone))])]), _vm._v(" "), _c('van-col', {
      attrs: {
        "span": "8",
        "mpcomid": '6_' + index
      }
    }, [_c('div', {
      staticClass: "table-container ellipsis"
    }, [_vm._v(_vm._s(item.createTime))])])], 1)
  })), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "100vw",
      "height": "128px",
      "background-color": "#ffffff"
    }
  })], 1) : _c('div', {
    staticStyle: {
      "padding": "64px 0"
    }
  }, [_c('empty', {
    attrs: {
      "mpcomid": '8'
    }
  })], 1)] : _vm._e()], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7684bdaa", esExports)
  }
}

/***/ })

},[357]);