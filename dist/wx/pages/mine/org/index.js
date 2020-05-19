require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonp([26],{

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_cfd7152a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(270);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(268)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_cfd7152a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/mine/org/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cfd7152a", Component.options)
  } else {
    hotAPI.reload("data-v-cfd7152a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 268:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Empty__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_org__ = __webpack_require__(20);



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
    Empty: __WEBPACK_IMPORTED_MODULE_3__components_Empty__["a" /* default */]
  },

  data: function data() {
    return {
      orgList: [],
      applyList: [],
      page: 1,
      limit: 20,
      total: 0,
      loading: true
    };
  },
  mounted: function mounted() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()(this, this.$options.data());
    this.orgList = [];
    this.fetch();
  },


  methods: {
    onBottom: function onBottom() {
      this.page++;
      if (this.orgList.length < this.total) {
        this.loading = true;
        this.getOrgList();
      }
    },
    fetch: function fetch() {
      this.getOrgList();
      this.getApplyList();
    },
    getApplyList: function getApplyList() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_4__api_org__["g" /* orgUserApplyList */])({
                  page: 1,
                  limit: 999,
                  userId: _this.$store.getters.id
                });

              case 3:
                res = _context.sent;

                _this.applyList = res.data.rows;
                _context.next = 9;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context['catch'](0);

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 7]]);
      }))();
    },
    getOrgList: function getOrgList() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_4__api_org__["l" /* userOrgList */])({
                  page: _this2.page,
                  limit: _this2.limit,
                  userId: _this2.$store.getters.id
                });

              case 3:
                res = _context2.sent;

                _this2.loading = false;
                _this2.total = res.data.total;
                res.data.rows.forEach(function (element) {
                  _this2.orgList.push(element);
                });
                _context2.next = 11;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2['catch'](0);

              case 11:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[0, 9]]);
      }))();
    },
    org: function org() {
      this.$navigate.to('/pages/org/index');
    },
    detail: function detail(org) {
      var roles = org.userRole;
      this.$navigate.to('/pages/mine/org/detail/index', {
        id: org.orgId,
        roles: roles
      });
    }
  }
});

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mine-org"
  }, [(!_vm.loading) ? [(_vm.orgList.length > 0 || _vm.applyList.length > 0) ? _c('scroll-view', {
    staticClass: "scroll",
    attrs: {
      "scroll-y": true,
      "lower-threshold": "178",
      "eventid": '1'
    },
    on: {
      "scrolltolower": _vm.onBottom
    }
  }, [_vm._l((_vm.orgList), function(org, index) {
    return _c('van-cell', {
      key: org.id,
      attrs: {
        "is-link": "",
        "eventid": '0_' + index,
        "mpcomid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.detail(org)
        }
      }
    }, [_c('div', {
      staticStyle: {
        "display": "flex",
        "align-items": "center"
      },
      slot: "title"
    }, [(org.applyNum > 0) ? _c('div', {
      staticClass: "unread"
    }) : _vm._e(), _vm._v("\n          " + _vm._s(org.orgName) + "\n          "), (org.status === '1') ? _c('div', [_c('div', {
      staticClass: "icon-container",
      staticStyle: {
        "color": "#F7B500"
      }
    }, [_c('img', {
      staticClass: "audit-icon",
      attrs: {
        "src": "../../../../static/icon/audit.png"
      }
    }), _vm._v("\n              审核中\n            ")])]) : _vm._e(), _vm._v(" "), (org.status === '3') ? _c('div', [_c('div', {
      staticClass: "icon-container",
      staticStyle: {
        "color": "#C1C1C1"
      }
    }, [_c('img', {
      staticClass: "audit-icon",
      attrs: {
        "src": "../../../../static/icon/confuse.png"
      }
    }), _vm._v("\n              已拒绝: " + _vm._s(org.checkReason || '--') + "\n            ")])]) : _vm._e(), _vm._v(" "), (org.userRole === 'admin' || org.userRole === 'org_admin') ? _c('van-tag', {
      staticStyle: {
        "margin-left": "8px"
      },
      attrs: {
        "color": "#fbe7f0",
        "text-color": "#E61F1C",
        "mpcomid": '0_' + index
      }
    }, [_vm._v("管理员")]) : _vm._e()], 1)])
  }), _vm._v(" "), _vm._l((_vm.applyList), function(apply, index) {
    return _c('van-cell', {
      key: _vm.org.id,
      attrs: {
        "is-link": "",
        "mpcomid": '2_' + index
      }
    }, [_c('div', {
      slot: "title"
    }, [_vm._v("\n          " + _vm._s(apply.orgName) + "\n          "), (apply.applyStatus === '1') ? _c('span', {
      staticStyle: {
        "color": "#999"
      }
    }, [_vm._v("(申请中)")]) : _vm._e(), _vm._v(" "), (apply.applyStatus === '3') ? _c('span', {
      staticStyle: {
        "color": "#999"
      }
    }, [_vm._v("(已拒绝)")]) : _vm._e()])])
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "background-color": "#fff",
      "width": "100vw",
      "height": "128px"
    }
  })], 2) : _c('div', {
    staticStyle: {
      "margin": "64px 0"
    }
  }, [_c('empty', {
    attrs: {
      "text": "暂未加入或创建主体",
      "src": "empty-org",
      "mpcomid": '3'
    }
  })], 1)] : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  }, [_c('van-button', {
    attrs: {
      "round": "",
      "color": "#E61F1C",
      "eventid": '2',
      "mpcomid": '5'
    },
    on: {
      "click": _vm.org
    }
  }, [_c('div', {
    staticStyle: {
      "margin": "0 16px"
    }
  }, [_vm._v("\n        加入组织/创建主体\n      ")])])], 1)], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-cfd7152a", esExports)
  }
}

/***/ })

},[354]);