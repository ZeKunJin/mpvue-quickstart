require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonp([19],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5aff9ed7_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(309);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(307)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_5aff9ed7_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/org/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5aff9ed7", Component.options)
  } else {
    hotAPI.reload("data-v-5aff9ed7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 307:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_area__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Empty__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_org__ = __webpack_require__(20);




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
    Empty: __WEBPACK_IMPORTED_MODULE_5__components_Empty__["a" /* default */]
  },

  data: function data() {
    return {
      orgList: [],
      search: '',
      area: '',
      areaText: '全部',
      showArea: false,
      areaList: {
        province_list: __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default()({
          0: '全部'
        }, __WEBPACK_IMPORTED_MODULE_4__utils_area__["a" /* default */].province_list),
        city_list: __WEBPACK_IMPORTED_MODULE_4__utils_area__["a" /* default */].city_list,
        county_list: __WEBPACK_IMPORTED_MODULE_4__utils_area__["a" /* default */].county_list
      },
      orgType: {
        sqzz: '社会组织',
        sqshzz: '社区社会组织',
        sqjwh: '社区居委会',
        sqjm: '社区居民'
      },
      loading: true
    };
  },
  mounted: function mounted() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()(this, this.$options.data());
  },


  methods: {
    fetch: function fetch() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_6__api_org__["e" /* list */])({
                  name: _this.search,
                  area: _this.area
                });

              case 2:
                res = _context.sent;

                _this.orgList = res.data;
                _this.loading = false;

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    onSearchChange: function onSearchChange(event) {
      this.search = event.mp.detail;
    },
    onSearch: function onSearch() {
      this.fetch();
    },
    selectArea: function selectArea() {
      this.showArea = !this.showArea;
    },
    confirmArea: function confirmArea(event) {
      var value = event.mp.detail.values;
      if (value[0].code !== '0') {
        this.areaText = value[value.length - 1].name;
        this.area = value[value.length - 1].code;
      } else {
        this.areaText = value[0].name;
        this.area = '';
      }
      this.fetch();
      this.showArea = false;
    },
    apply: function apply(org) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_6__api_org__["a" /* apply */])({
                  orgId: org.id,
                  userId: _this2.$store.getters.id
                });

              case 3:
                _this2.$navigate.to('/pages/org/apply/index');
                _context2.next = 8;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2['catch'](0);

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[0, 6]]);
      }))();
    },
    createOrg: function createOrg() {
      this.$navigate.to('/pages/org/create/index');
    }
  }
});

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "org"
  }, [_c('van-search', {
    attrs: {
      "shape": "round",
      "value": _vm.search,
      "placeholder": "请输入搜索关键词",
      "eventid": '1',
      "mpcomid": '1'
    },
    on: {
      "search": _vm.onSearch,
      "change": _vm.onSearchChange
    }
  }, [_c('div', {
    staticClass: "area-text",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.selectArea
    },
    slot: "label"
  }, [_c('div', {
    staticClass: "ellipsis",
    staticStyle: {
      "width": "48px"
    }
  }, [_vm._v(_vm._s(_vm.areaText))]), _vm._v(" "), _c('van-icon', {
    staticClass: "arrow-icon",
    attrs: {
      "name": "arrow-down",
      "mpcomid": '0'
    }
  })], 1)]), _vm._v(" "), (!_vm.loading) ? [(_vm.orgList.length > 0) ? _c('div', {
    staticClass: "container"
  }, [_c('van-cell-group', {
    attrs: {
      "border": false,
      "mpcomid": '4'
    }
  }, _vm._l((_vm.orgList), function(org, index) {
    return _c('van-cell', {
      key: org.id,
      attrs: {
        "mpcomid": '3_' + index
      }
    }, [_c('div', {
      slot: "title"
    }, [_vm._v("\n                        " + _vm._s(org.name) + "\n                        "), _c('span', {
      staticStyle: {
        "color": "#999",
        "margin-left": "8px"
      }
    }, [_vm._v("(" + _vm._s(_vm.orgType[org.type]) + ")")])]), _vm._v(" "), _c('van-button', {
      attrs: {
        "round": "",
        "size": "mini",
        "color": "#EE4E8C1A",
        "eventid": '2_' + index,
        "mpcomid": '2_' + index
      },
      on: {
        "click": function($event) {
          _vm.apply(org)
        }
      }
    }, [_c('span', {
      staticStyle: {
        "color": "#E61F1C"
      }
    }, [_vm._v("加入")])])], 1)
  }))], 1) : _c('div', {
    staticStyle: {
      "margin": "64px 0"
    }
  }, [_c('empty', {
    attrs: {
      "mpcomid": '5'
    }
  })], 1)] : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  }, [_c('van-button', {
    attrs: {
      "round": "",
      "color": "#E61F1C",
      "eventid": '3',
      "mpcomid": '7'
    },
    on: {
      "click": _vm.createOrg
    }
  }, [_c('div', {
    staticStyle: {
      "padding": "0 32px",
      "display": "table-cell"
    }
  }, [_c('img', {
    staticClass: "edit-icon",
    attrs: {
      "src": "../../../static/icon/edit.png"
    }
  }), _vm._v("\n                创建主体\n            ")])])], 1), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.showArea,
      "position": "bottom",
      "eventid": '5',
      "mpcomid": '9'
    },
    on: {
      "close": function($event) {
        _vm.showArea = false
      }
    }
  }, [_c('van-area', {
    attrs: {
      "area-list": _vm.areaList,
      "eventid": '4',
      "mpcomid": '8'
    },
    on: {
      "confirm": _vm.confirmArea,
      "cancel": function($event) {
        _vm.showArea = false
      }
    }
  })], 1)], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5aff9ed7", esExports)
  }
}

/***/ })

},[363]);