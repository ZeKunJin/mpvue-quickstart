require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonp([12],{

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6492b825_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(247);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(245)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6492b825_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/require/map/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6492b825", Component.options)
  } else {
    hotAPI.reload("data-v-6492b825", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 245:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_bus__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_area__ = __webpack_require__(31);




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
  data: function data() {
    return {
      search: '',
      result: [],
      area: {},
      city: '请选择',
      currLocation: {
        longitude: 116.41667,
        latitude: 39.91667
      },
      markers: [],
      page: 1,
      showCity: false,
      areaList: __WEBPACK_IMPORTED_MODULE_6__utils_area__["a" /* default */]
    };
  },
  mounted: function mounted() {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()(_this, _this.$options.data());
              _context.next = 3;
              return _this.getLocation();

            case 3:
              _this.getNearby();

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },


  methods: {
    onBottom: function onBottom() {
      this.page++;
      if (this.search) {
        this.mapSearch();
      } else {
        this.getNearby();
      }
    },
    initResult: function initResult() {
      this.page = 1;
      this.result = [];
    },
    getLocation: function getLocation() {
      var vm = this;
      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve) {
        wx.getLocation({
          type: "wgs84",
          success: function success(res) {
            vm.currLocation = {
              longitude: res.longitude,
              latitude: res.latitude
            };
            resolve();
          }
        });
      });
    },
    confirmCity: function confirmCity(event) {
      this.city = event.mp.detail.values[1].name;
      this.showCity = false;
    },
    onSearch: function onSearch(event) {
      this.initResult();
      this.search = event.mp.detail;
      if (this.search) {
        this.mapSearch();
      } else {
        this.getNearby();
      }
    },
    mapSearch: function mapSearch() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_4__api_map__["b" /* search */])({
                  keyword: encodeURI(_this2.search),
                  boundary: 'region(' + _this2.city + ', 0)',
                  page_index: _this2.page
                });

              case 2:
                res = _context2.sent;

                _this2.getResult(res.data);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    getNearby: function getNearby() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_4__api_map__["a" /* geocoder */])({
                  location: _this3.currLocation.latitude + ',' + _this3.currLocation.longitude,
                  get_poi: 1,
                  poi_options: 'page_size=10;page_index=' + _this3.page
                });

              case 2:
                res = _context3.sent;

                _this3.area = res.result.ad_info;
                _this3.city = res.result.ad_info.city;
                _this3.getResult(res.result.pois);

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },
    getResult: function getResult(arr) {
      var _this4 = this;

      arr.forEach(function (element) {
        _this4.result.push(element);
      });
    },
    onSelect: function onSelect(value) {
      this.$navigate.back();
      this.setMarkers(value);
      this.editPreData(value);
      this.refreshCenter(value);
    },
    refreshCenter: function refreshCenter(value) {
      this.currLocation = {
        longitude: value.location.lng,
        latitude: value.location.lat
      };
    },
    setMarkers: function setMarkers(value) {
      this.markers = [{
        id: value.id,
        iconPath: "/static/icon/location.png",
        latitude: value.location.lat,
        longitude: value.location.lng,
        width: 30,
        height: 30,
        callout: {
          content: value.title,
          display: "ALWAYS",
          padding: 8,
          bgColor: "#ffffff",
          borderRadius: 6,
          borderWidth: 2,
          borderColor: "#E61F1C",
          color: "#E61F1C",
          fontSize: 12
        }
      }];
    },
    editPreData: function editPreData(value) {
      __WEBPACK_IMPORTED_MODULE_5__utils_bus__["a" /* default */].$emit('refresh', {
        requirement: {
          longitude: value.location.lng,
          dimension: value.location.lat,
          area: value.ad_info.adcode
        },
        mapText: value.title
      });
    }
  }
});

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "map"
  }, [_c('div', {
    staticClass: "search"
  }, [_c('van-search', {
    attrs: {
      "value": _vm.search,
      "placeholder": "请输入搜索关键词",
      "shape": "round",
      "eventid": '1',
      "mpcomid": '1'
    },
    on: {
      "search": _vm.onSearch
    }
  }, [_c('div', {
    staticClass: "area-text",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.showCity = true
      }
    },
    slot: "label"
  }, [_c('div', {
    staticClass: "ellipsis",
    staticStyle: {
      "width": "48px"
    }
  }, [_vm._v(_vm._s(_vm.city))]), _vm._v(" "), _c('van-icon', {
    staticClass: "arrow-icon",
    attrs: {
      "name": "arrow-down",
      "mpcomid": '0'
    }
  })], 1)])], 1), _vm._v(" "), _c('map', {
    staticClass: "map",
    staticStyle: {
      "width": "100vw",
      "height": "calc(100vh - 310px)"
    },
    attrs: {
      "id": "background",
      "scale": "14",
      "longitude": _vm.currLocation.longitude,
      "latitude": _vm.currLocation.latitude,
      "markers": _vm.markers,
      "show-location": "",
      "eventid": '2'
    },
    on: {
      "tap": _vm.onTap
    }
  }), _vm._v(" "), _c('scroll-view', {
    staticClass: "result",
    attrs: {
      "scroll-y": true,
      "eventid": '4'
    },
    on: {
      "scrolltolower": _vm.onBottom
    }
  }, [_c('van-cell-group', {
    attrs: {
      "mpcomid": '3'
    }
  }, _vm._l((_vm.result), function(item, index) {
    return _c('van-cell', {
      key: item.id,
      attrs: {
        "title": item.title,
        "eventid": '3_' + index,
        "mpcomid": '2_' + index
      },
      on: {
        "click": function($event) {
          _vm.onSelect(item)
        }
      }
    })
  }))], 1), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.showCity,
      "position": "bottom",
      "eventid": '6',
      "mpcomid": '5'
    },
    on: {
      "close": function($event) {
        _vm.showCity = false
      }
    }
  }, [_c('van-area', {
    attrs: {
      "area-list": _vm.areaList,
      "columns-num": "2",
      "value": _vm.area.adcode,
      "eventid": '5',
      "mpcomid": '4'
    },
    on: {
      "confirm": _vm.confirmCity,
      "cancel": function($event) {
        _vm.showCity = false
      }
    }
  })], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6492b825", esExports)
  }
}

/***/ })

},[348]);