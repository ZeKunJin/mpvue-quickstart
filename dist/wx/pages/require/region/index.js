require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonp([11],{

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_c22bd0be_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(243);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(241)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_c22bd0be_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/require/region/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c22bd0be", Component.options)
  } else {
    hotAPI.reload("data-v-c22bd0be", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 241:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 242:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_require__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_region__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_bus__ = __webpack_require__(39);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      requirement: {},
      provinceList: [],
      villageList: [],
      regionColumns: [],
      markers: [],
      regionText: '请选择',
      showConfirm: false,
      showRegion: false,
      loading: false,
      currLocation: {
        longitude: 116.41667,
        latitude: 39.91667
      }
    };
  },
  onLoad: function onLoad(option) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign___default()(this, this.$options.data());
    this.requirement = JSON.parse(decodeURIComponent(option.requirement));
  },
  onShow: function onShow() {
    var _this = this;

    __WEBPACK_IMPORTED_MODULE_6__utils_bus__["a" /* default */].$on('refresh', function (res) {
      _this.requirement.area = res.requirement.area;
      _this.requirement.longitude = res.requirement.longitude;
      _this.requirement.dimension = res.requirement.dimension;
      _this.requirement.mapText = res.mapText;
      _this.setMarkers();
      _this.setCenter();
      _this.getRegionInfo();
    });
  },


  methods: {
    getRegionInfo: function getRegionInfo() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.villageList = [];
                _this2.provinceList = [];
                _context.next = 4;
                return _this2.getProvince();

              case 4:
                res = _context.sent;
                _context.next = 7;
                return _this2.getVillage(res);

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    },
    setMarkers: function setMarkers() {
      this.markers = [{
        id: 0,
        iconPath: "/static/icon/location.png",
        latitude: Number(this.requirement.dimension),
        longitude: Number(this.requirement.longitude),
        width: 30,
        height: 30,
        callout: {
          content: this.requirement.mapText,
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
    setCenter: function setCenter() {
      this.currLocation = {
        longitude: Number(this.requirement.longitude),
        latitude: Number(this.requirement.dimension)
      };
    },
    getProvince: function getProvince() {
      var _this3 = this;

      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function () {
        var _ref = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2(resolve) {
          var res;
          return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return Object(__WEBPACK_IMPORTED_MODULE_5__api_region__["a" /* regionInfo */])({
                    code: _this3.requirement.area,
                    type: 3
                  });

                case 2:
                  res = _context2.sent;

                  _this3.formatProvince(res.data);
                  resolve(res.data[0].code);

                case 5:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this3);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    },
    getVillage: function getVillage(code) {
      var _this4 = this;

      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function () {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3(resolve) {
          var res;
          return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return Object(__WEBPACK_IMPORTED_MODULE_5__api_region__["a" /* regionInfo */])({
                    code: code,
                    type: 4
                  });

                case 2:
                  res = _context3.sent;

                  _this4.formatVillage(res.data);
                  resolve();

                case 5:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this4);
        }));

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    },
    formatProvince: function formatProvince(province) {
      var _this5 = this;

      province.forEach(function (element) {
        _this5.provinceList.push({
          value: element.code,
          text: element.name
        });
      });
      this.regionColumns = [{ values: this.provinceList }, { values: [] }];
    },
    formatVillage: function formatVillage(village) {
      var _this6 = this;

      this.villageList = [];
      village.forEach(function (element) {
        _this6.villageList.push({
          value: element.code,
          text: element.name
        });
      });
      this.regionColumns[1] = { values: this.villageList };
    },
    onRegionChange: function onRegionChange(event) {
      var _this7 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var _event$mp$detail, picker, value, index;

        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _event$mp$detail = event.mp.detail, picker = _event$mp$detail.picker, value = _event$mp$detail.value, index = _event$mp$detail.index;
                _context4.next = 3;
                return _this7.getVillage(value[0].value);

              case 3:
                picker.setColumnValues(1, _this7.villageList);

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this7);
      }))();
    },
    confirmRegion: function confirmRegion(event) {
      var value = event.mp.detail.value;

      this.regionText = value[1].text;
      this.requirement.street = value[0].value;
      this.requirement.village = value[1].value;
      this.showRegion = false;
    },
    validate: function validate() {
      var _this8 = this;

      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        var info = _this8.requirement.longitude && _this8.requirement.dimension && _this8.requirement.street && _this8.requirement.village && _this8.requirement.area;

        if (info) {
          resolve();
        } else {
          reject();
        }
      });
    },
    next: function next() {
      this.showConfirm = true;
    },
    onRequire: function onRequire() {
      var _this9 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee5() {
        var errMsg;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _this9.validate();

              case 3:
                _context5.prev = 3;

                _this9.requirement.city = String(_this9.requirement.area).slice(0, 4);
                _this9.requirement.province = String(_this9.requirement.area).slice(0, 2);
                _context5.next = 8;
                return Object(__WEBPACK_IMPORTED_MODULE_4__api_require__["i" /* requirementPublish */])(_this9.requirement);

              case 8:
                _this9.$navigate.to("/pages/require/index");
                wx.showToast({
                  title: "发布成功",
                  icon: "none"
                });
                _this9.$store.dispatch('requirement/remove');
                _context5.next = 15;
                break;

              case 13:
                _context5.prev = 13;
                _context5.t0 = _context5['catch'](3);

              case 15:
                _context5.next = 22;
                break;

              case 17:
                _context5.prev = 17;
                _context5.t1 = _context5['catch'](0);
                errMsg = "";

                errMsg = "请完善需求信息";
                wx.showToast({
                  title: errMsg,
                  icon: "none"
                });

              case 22:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this9, [[0, 17], [3, 13]]);
      }))();
    },
    onLocationChange: function onLocationChange(event) {
      this.requirement.location = event.mp.detail;
    },
    toMap: function toMap() {
      this.$navigate.to('/pages/require/map/index');
    },
    agreement: function agreement() {
      this.$navigate.to('/pages/require/agreement/index');
    }
  }
});

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "region"
  }, [_c('van-field', {
    attrs: {
      "label": "需求地址",
      "value": _vm.requirement.location,
      "placeholder": "请输入需求地址",
      "input-align": "right",
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "change": _vm.onLocationChange
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "label": "需求定位",
      "required": "",
      "readonly": "",
      "disabled": "",
      "input-align": "right",
      "value": _vm.requirement.mapText || '请选择',
      "is-link": !_vm.requirement.mapText,
      "eventid": '1',
      "mpcomid": '1'
    },
    on: {
      "click": _vm.toMap
    }
  }), _vm._v(" "), (_vm.requirement.area) ? _c('van-field', {
    attrs: {
      "label": "街道社区",
      "required": "",
      "readonly": "",
      "disabled": "",
      "input-align": "right",
      "value": _vm.regionText,
      "is-link": !_vm.requirement.village,
      "eventid": '2',
      "mpcomid": '2'
    },
    on: {
      "click": function($event) {
        _vm.showRegion = true
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.requirement.area) ? _c('div', {
    staticStyle: {
      "padding": "10px 16px",
      "background-color": "#fff"
    }
  }, [_c('map', {
    staticStyle: {
      "width": "calc(100vw - 32px)",
      "height": "calc(100vw - 32px)"
    },
    attrs: {
      "id": "background",
      "scale": "14",
      "longitude": _vm.currLocation.longitude,
      "latitude": _vm.currLocation.latitude,
      "markers": _vm.markers,
      "show-location": ""
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "bottoms"
  }, [_c('van-row', {
    attrs: {
      "gutter": "20",
      "mpcomid": '7'
    }
  }, [_c('van-col', {
    staticClass: "cancel-button",
    staticStyle: {
      "text-align": "right"
    },
    attrs: {
      "span": "12",
      "mpcomid": '4'
    }
  }, [_c('van-button', {
    attrs: {
      "round": "",
      "eventid": '3',
      "mpcomid": '3'
    },
    on: {
      "click": function($event) {
        _vm.$navigate.back()
      }
    }
  }, [_c('div', {
    staticStyle: {
      "width": "128px"
    }
  }, [_vm._v("上一步")])])], 1), _vm._v(" "), _c('van-col', {
    staticClass: "next-button",
    staticStyle: {
      "text-align": "left"
    },
    attrs: {
      "span": "12",
      "mpcomid": '6'
    }
  }, [_c('van-button', {
    attrs: {
      "round": "",
      "color": "#E61F1C",
      "eventid": '4',
      "mpcomid": '5'
    },
    on: {
      "click": _vm.next
    }
  }, [_c('div', {
    staticStyle: {
      "width": "128px"
    }
  }, [_vm._v("立即发布")])])], 1)], 1)], 1), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "use-slot": "",
      "show": _vm.showConfirm,
      "show-cancel-button": "",
      "title": "提示",
      "eventid": '5',
      "mpcomid": '8'
    },
    on: {
      "close": function($event) {
        _vm.showConfirm = false
      },
      "confirm": _vm.onRequire
    }
  }, [_c('div', {
    staticClass: "dialog-container"
  }, [_vm._v("\n      我已阅读并同意\n      "), _c('span', {
    staticStyle: {
      "color": "#E61F1C"
    }
  }, [_vm._v("《需求发布协议》")]), _vm._v(" "), _c('p', [_vm._v("\n        红哨子社区微心愿”提交的信息中所涉及的内容描述、文件、证件及其有关附件是真实有效的，复印件与原件是一致的，并对因提交材料虚假所引发的一切后果承担全部法律责任。\n      ")])], 1)]), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.showRegion,
      "position": "bottom",
      "eventid": '7',
      "mpcomid": '10'
    },
    on: {
      "close": function($event) {
        _vm.showRegion = false
      }
    }
  }, [_c('van-picker', {
    attrs: {
      "columns": _vm.regionColumns,
      "show-toolbar": "",
      "eventid": '6',
      "mpcomid": '9'
    },
    on: {
      "confirm": _vm.confirmRegion,
      "cancel": function($event) {
        _vm.showRegion = false
      },
      "change": _vm.onRegionChange
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
     require("vue-hot-reload-api").rerender("data-v-c22bd0be", esExports)
  }
}

/***/ })

},[347]);