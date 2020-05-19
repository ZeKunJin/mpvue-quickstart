require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonp([2],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2233f662_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(136);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(125)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2233f662_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/home/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2233f662", Component.options)
  } else {
    hotAPI.reload("data-v-2233f662", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 125:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_org__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_require__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_ad__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api_common__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Popup__ = __webpack_require__(132);





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
    Popup: __WEBPACK_IMPORTED_MODULE_9__components_Popup__["a" /* default */]
  },

  data: function data() {
    return {
      setData: {
        latitude: 39.91667,
        longitude: 116.41667
      },
      popupInfo: {},
      statistics: {},
      noticeList: [],
      scaleVal: 14,
      init: false,
      markers: [],
      adList: [],
      requireList: [],
      currOrg: {
        id: '',
        name: ''
      },
      currRequire: {},
      activeTab: 0,
      distance: {},
      showDistance: true,
      showData: false,
      loading: true,
      adBannerUrl: ''
    };
  },
  created: function created() {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee() {
      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.getUserInfo();

            case 1:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  mounted: function mounted() {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee2() {
      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()(_this2, _this2.$options.data());
              _context2.next = 3;
              return _this2.getLocation();

            case 3:
              _this2.fetch();

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }))();
  },
  onShareAppMessage: function onShareAppMessage(res) {
    if (res.from !== 'button') return false;
  },


  methods: {
    getUserInfo: function getUserInfo() {
      if (this.$store.getters.token) {
        this.$store.dispatch('user/getInfo');
      }
    },
    fetch: function fetch() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var _ref, _ref2, resReq, resNear, resAd;

        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all([Object(__WEBPACK_IMPORTED_MODULE_6__api_require__["h" /* requirementList */])({
                  page: 1,
                  limit: 99999
                }), Object(__WEBPACK_IMPORTED_MODULE_6__api_require__["e" /* nearRequirement */])({
                  dimension: _this3.setData.latitude,
                  longitude: _this3.setData.longitude
                }), _this3.$store.dispatch('notice/setNotice')]);

              case 2:
                _ref = _context3.sent;
                _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref, 3);
                resReq = _ref2[0];
                resNear = _ref2[1];
                resAd = _ref2[2];

                _this3.noticeList = _this3.$store.getters.notice;
                _this3.distance.num = Number(resNear.data.distance);
                _this3.distance.num = _this3.distance.num.toFixed(1);
                _this3.distance.id = resNear.data.requirementId;
                _this3.requireList = resReq.data.rows;
                // this.adList = resAd.data.rows
                _this3.initMarkers(_this3.requireList);
                _this3.loading = false;

              case 14:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },
    initCurr: function initCurr() {
      this.currOrg = {
        id: '',
        name: ''
      };
    },
    initMarkers: function initMarkers(arr) {
      var _this4 = this;

      arr.forEach(function (element) {
        _this4.markers.push({
          id: element.id,
          iconPath: '/static/icon/location.png',
          latitude: element.dimension,
          longitude: element.longitude,
          width: 30,
          height: 30,
          callout: {
            content: element.title,
            display: 'ALWAYS',
            padding: 8,
            bgColor: '#ffffff',
            borderRadius: 6,
            borderWidth: 2,
            borderColor: '#E61F1C',
            color: '#E61F1C',
            fontSize: 12
          }
        });
      });
    },
    onRegionChange: function onRegionChange(event) {
      var causedBy = event.mp.causedBy;

      if (causedBy === 'drag') {
        this.resetData();
      }
    },
    resetData: function resetData() {
      var vm = this;
      var mapCtx = wx.createMapContext('map');
      mapCtx.getCenterLocation({
        success: function success(res) {
          var latitude = res.latitude,
              longitude = res.longitude;

          vm.setData = {
            latitude: latitude,
            longitude: longitude
          };
        }
      });
    },
    getLocation: function getLocation() {
      var _this5 = this;

      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve) {
        var vm = _this5;
        wx.getLocation({
          type: 'wgs84',
          success: function success(res) {
            var longitude = res.longitude,
                latitude = res.latitude;

            vm.setData = {
              longitude: longitude,
              latitude: latitude
            };
            resolve();
          }
        });
      });
    },
    onTapMarker: function onTapMarker(event) {
      this.currOrg.id = event.mp.markerId;
      this.popupInfo = {
        show: true,
        markerId: event.mp.markerId
      };
    },
    getData: function getData() {
      var _this6 = this;

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_8__api_common__["a" /* data */])();

              case 3:
                res = _context4.sent;

                _this6.statistics = res.data;
                _this6.showData = true;
                _context4.next = 10;
                break;

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4['catch'](0);

              case 10:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this6, [[0, 8]]);
      }))();
    },
    onPopupClose: function onPopupClose() {
      this.popupInfo = {};
    },
    toRequire: function toRequire() {
      var _this7 = this;

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee5() {
        var res, total;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_5__api_org__["l" /* userOrgList */])({
                  page: 1,
                  limit: 1,
                  userId: _this7.$store.getters.id,
                  status: 2
                });

              case 2:
                res = _context5.sent;
                total = res.data.total;

                if (total > 0) {
                  _this7.$navigate.to('/pages/require/create/index');
                } else {
                  _this7.$dialog.confirm({
                    title: '提示',
                    message: '请先创建或加入组织'
                  }).then(function () {
                    _this7.$navigate.to('/pages/org/index');
                  });
                }

              case 5:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this7);
      }))();
    },
    toReauireDetail: function toReauireDetail() {
      this.$navigate.to('/pages/require/detail/index?id=' + this.distance.id);
    },
    search: function search() {
      this.$navigate.to('/pages/search/index');
    },
    toAd: function toAd(event) {
      if (event.bannerType !== '3') {
        this.$navigate.to("/pages/home/ad/index", {
          id: event.id
        });
      }
    }
  }
});

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_61f216b6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(135);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(133)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-61f216b6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_61f216b6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/home/components/Popup/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61f216b6", Component.options)
  } else {
    hotAPI.reload("data-v-61f216b6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 133:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_require__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_index__ = __webpack_require__(23);


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
      requirementInfo: {}
    };
  },


  model: {
    prop: "popupInfo",
    event: "onClose"
  },

  props: {
    popupInfo: {
      type: Object,
      default: function _default() {
        return {
          show: false,
          markerId: ""
        };
      }
    }
  },

  mounted: function mounted() {
    if (this.popupInfo.markerId) {
      this.fetch();
    }
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
                return Object(__WEBPACK_IMPORTED_MODULE_2__api_require__["g" /* requirementDetail */])({
                  requirementId: _this.popupInfo.markerId
                });

              case 2:
                res = _context.sent;

                _this.requirementInfo = res.data;
                _this.requirementInfo.createTime = Object(__WEBPACK_IMPORTED_MODULE_3__utils_index__["a" /* formatDate */])(_this.requirementInfo.createTime);
                _this.requirementInfo.typeText = _this.requirementInfo.demandTypeName.split(',')[0];

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    onClose: function onClose() {
      this.$emit('onClose');
    },
    detail: function detail() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_2__api_require__["f" /* requirementBrowse */])({
                  requirementId: _this2.requirementInfo.id
                });

              case 2:
                _this2.$navigate.to("/pages/require/detail/index?id=" + _this2.requirementInfo.id);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    supply: function supply() {
      this.$navigate.to("/pages/require/supply/index", {
        id: this.requirementInfo.id
      });
    }
  },

  watch: {
    popupInfo: function popupInfo(val) {
      if (val.markerId) {
        this.fetch();
      }
    }
  }
});

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('van-popup', {
    attrs: {
      "show": _vm.popupInfo.show,
      "round": "",
      "position": "bottom",
      "custom-style": "width:90%; margin-left: 5%; box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.24) inset;",
      "eventid": '2',
      "mpcomid": '3'
    },
    on: {
      "close": _vm.onClose
    }
  }, [_c('div', {
    staticStyle: {
      "text-align": "center"
    }
  }, [_c('div', {
    staticClass: "show-button"
  })]), _vm._v(" "), _c('div', {
    staticClass: "container",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.detail
    }
  }, [_c('div', {
    staticClass: "img",
    style: ('background: url(' + _vm.requirementInfo.cover + ') no-repeat center/cover')
  }, [(_vm.requirementInfo.isDefaultCover === '2') ? _c('div', {
    staticClass: "cover-container"
  }, [_c('div', {
    staticClass: "ellipsis"
  }, [_vm._v(_vm._s(_vm.requirementInfo.typeName))]), _vm._v(" "), _c('div', [_vm._v("需求对接")])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticStyle: {
      "position": "relative"
    }
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("\n          " + _vm._s(_vm.requirementInfo.title) + "\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "desc"
  }, [_c('div', {
    staticStyle: {
      "color": "#F68725",
      "font-size": "12px",
      "display": "flex"
    }
  }, [_vm._v("\n            需求进度\n            "), (_vm.requirementInfo.quantizationType === '1') ? [_c('div', {
    staticStyle: {
      "width": "142px",
      "padding": "6.5px 4px"
    }
  }, [_c('van-progress', {
    attrs: {
      "percentage": _vm.requirementInfo.scale,
      "show-pivot": false,
      "color": "#F68725",
      "mpcomid": '0'
    }
  })], 1), _vm._v("\n              " + _vm._s(_vm.requirementInfo.scale) + "%\n            ")] : _c('div', {
    staticStyle: {
      "margin-left": "4px"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.requirementInfo.status) + "\n            ")])], 2), _vm._v(" "), _c('div', {
    staticStyle: {
      "font-size": "12px",
      "width": "calc(90vw - 48px)",
      "margin-top": "3px",
      "color": "#333",
      "display": "flex"
    }
  }, [_c('div', {
    staticClass: "ellipsis",
    staticStyle: {
      "width": "128px"
    }
  }, [_vm._v("\n              类型: " + _vm._s(_vm.requirementInfo.demandTypeName) + "\n            ")]), _vm._v(" "), _c('span', {
    staticStyle: {
      "margin-left": "4px",
      "font-size": "10px",
      "color": "#999"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.requirementInfo.createTime) + "\n              "), _c('span', {
    staticStyle: {
      "margin-left": "4px"
    }
  }, [_vm._v("发布")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "supply"
  }, [_c('div', {
    staticClass: "ellipsis",
    staticStyle: {
      "width": "192px"
    }
  }, [_vm._v("需求方: " + _vm._s(_vm.requirementInfo.requirementOrgName))]), _vm._v(" "), _c('van-button', {
    staticStyle: {
      "margin-left": "auto"
    },
    attrs: {
      "size": "mini",
      "round": "",
      "color": "#F68725",
      "eventid": '1',
      "mpcomid": '2'
    },
    on: {
      "click": _vm.supply
    }
  }, [_c('div', {
    staticStyle: {
      "margin": "0 16px"
    }
  }, [_vm._v("我要对接")])])], 1)])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-61f216b6", esExports)
  }
}

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('swiper', {
    staticClass: "title-bg",
    attrs: {
      "autoplay": true
    }
  }, [_c('swiper-item', {
    attrs: {
      "mpcomid": '0'
    }
  }, [_c('img', {
    staticClass: "banner",
    attrs: {
      "src": "../../../static/images/title-background.png"
    }
  })])], 1), _vm._v(" "), _c('div', {
    staticClass: "require",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.toRequire
    }
  }, [_vm._m(0)]), _vm._v(" "), _c('swiper', {
    staticClass: "notice-bar",
    attrs: {
      "autoplay": true,
      "vertical": true
    }
  }, _vm._l((_vm.noticeList), function(item, index) {
    return _c('swiper-item', {
      key: index,
      attrs: {
        "mpcomid": '2_' + index
      }
    }, [_c('div', {
      staticClass: "notice-container"
    }, [_c('van-icon', {
      staticStyle: {
        "margin-right": "8px"
      },
      attrs: {
        "name": "volume-o",
        "size": "20",
        "color": "#333",
        "mpcomid": '1_' + index
      }
    }), _vm._v("\n        " + _vm._s(item.content) + "\n      ")], 1)])
  })), _vm._v(" "), (_vm.showDistance && !_vm.loading) ? _c('div', {
    staticClass: "near"
  }, [_c('div', {
    staticStyle: {
      "line-height": "42px",
      "padding": "0 16px",
      "position": "relative"
    }
  }, [_c('van-icon', {
    staticClass: "warning-icon",
    attrs: {
      "name": "warning-o",
      "size": "16",
      "color": "#F66766",
      "mpcomid": '3'
    }
  }), _vm._v(" "), (_vm.distance.id) ? _c('span', {
    staticStyle: {
      "margin-left": "24px"
    }
  }, [_vm._v("距离您最近的需求为" + _vm._s(_vm.distance.num || '--') + "公里")]) : _c('span', {
    staticStyle: {
      "margin-left": "24px"
    }
  }, [_vm._v("当前您附近暂无需求")])], 1), _vm._v(" "), (_vm.distance.id) ? _c('div', {
    staticClass: "more",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.toReauireDetail
    }
  }, [_vm._v("查看详情")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "del-icon",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.showDistance = false
      }
    }
  }, [_c('van-icon', {
    attrs: {
      "name": "cross",
      "color": "#fff",
      "size": "16",
      "mpcomid": '4'
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _c('map', {
    staticStyle: {
      "position": "absolute",
      "top": "132px",
      "bottom": "0",
      "width": "100vw",
      "height": "calc(100vh - 132px)"
    },
    attrs: {
      "id": "map",
      "scale": _vm.scaleVal,
      "longitude": _vm.setData.longitude,
      "latitude": _vm.setData.latitude,
      "markers": _vm.markers,
      "show-location": "",
      "eventid": '3'
    },
    on: {
      "callouttap": _vm.onTapMarker,
      "markertap": _vm.onTapMarker,
      "regionchange": _vm.onRegionChange,
      "end": _vm.onRegionChange,
      "tap": _vm.initCurr
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "locate-tool",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.getLocation
    }
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "src": "../../../static/icon/locate.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "data-tool",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": function($event) {
        _vm.getData()
      }
    }
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "src": "../../../static/icon/data.png"
    }
  })]), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.showData,
      "round": "",
      "closeable": "",
      "eventid": '6',
      "mpcomid": '5'
    },
    on: {
      "close": function($event) {
        _vm.showData = false
      }
    }
  }, [_c('div', {
    staticClass: "data-container"
  }, [_c('img', {
    attrs: {
      "src": "../../../static/images/line.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "sys-name"
  }, [_vm._v("红哨子社区平台")]), _vm._v(" "), _c('div', {
    staticClass: "needs"
  }, [_vm._v("需求汇总")]), _vm._v(" "), _c('div', {
    staticClass: "block"
  }, [_c('div', [_vm._v("发布需求社区: " + _vm._s(_vm.statistics.orgNum) + "个")])]), _vm._v(" "), _c('div', {
    staticClass: "block"
  }, [_c('div', [_vm._v("发布需求数量: " + _vm._s(_vm.statistics.requirementNum) + "个")])])])]), _vm._v(" "), _c('popup', {
    attrs: {
      "eventid": '7',
      "mpcomid": '6'
    },
    on: {
      "onClose": _vm.onPopupClose
    },
    model: {
      value: (_vm.popupInfo),
      callback: function($$v) {
        _vm.popupInfo = $$v
      },
      expression: "popupInfo"
    }
  }), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '7'
    }
  })], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('span', [_vm._v("发布需求")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2233f662", esExports)
  }
}

/***/ })

},[339]);