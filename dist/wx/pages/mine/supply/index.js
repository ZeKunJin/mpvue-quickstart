require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonp([4],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0051dd5e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(301);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(298)
  __webpack_require__(299)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0051dd5e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_0051dd5e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/mine/supply/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0051dd5e", Component.options)
  } else {
    hotAPI.reload("data-v-0051dd5e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 298:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 299:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_require__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Empty__ = __webpack_require__(24);



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
    Empty: __WEBPACK_IMPORTED_MODULE_4__components_Empty__["a" /* default */]
  },

  data: function data() {
    return {
      list: [],
      page: 1,
      limit: 20,
      total: 0,
      loading: true
    };
  },
  mounted: function mounted() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()(this, this.$options.data());
    this.fetch();
  },


  methods: {
    onBottom: function onBottom() {
      this.page++;
      if (this.list.length < this.total) {
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
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_3__api_require__["n" /* userSupplyList */])({
                  userId: _this.$store.getters.id,
                  page: _this.page,
                  limit: _this.limit
                });

              case 2:
                res = _context.sent;

                _this.total = res.data.total;
                res.data.rows.forEach(function (element) {
                  element.createTime = element.createTime.slice(0, 10);
                  _this.list.push(element);
                });
                _this.loading = false;

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    toDetail: function toDetail(value) {
      this.$navigate.to('/pages/require/detail/index', {
        id: value.requirementId
      });
    }
  }
});

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(!_vm.loading) ? [(_vm.list.length > 0) ? _c('scroll-view', {
    staticStyle: {
      "height": "100vh"
    },
    attrs: {
      "scroll-y": true,
      "lower-threshold": "178",
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
  }, [_vm._v("需求")])]), _vm._v(" "), _c('van-col', {
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
  }, [_vm._v("对接时间")])])], 1), _vm._v(" "), _c('van-row', {
    attrs: {
      "mpcomid": '7'
    }
  }, _vm._l((_vm.list), function(item, index) {
    return _c('div', {
      key: item.id,
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.toDetail(item)
        }
      }
    }, [_c('van-col', {
      attrs: {
        "span": "8",
        "mpcomid": '4_' + index
      }
    }, [_c('div', {
      staticClass: "table-container ellipsis"
    }, [_vm._v(_vm._s(item.title))])]), _vm._v(" "), _c('van-col', {
      attrs: {
        "span": "8",
        "mpcomid": '5_' + index
      }
    }, [_c('div', {
      staticClass: "table-container ellipsis"
    }, [_vm._v(_vm._s(item.contactInfo || '--'))])]), _vm._v(" "), _c('van-col', {
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
      "src": "empty-supply",
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
     require("vue-hot-reload-api").rerender("data-v-0051dd5e", esExports)
  }
}

/***/ })

},[361]);