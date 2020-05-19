require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonp([3],{

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_32844fd0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(149);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(146)
  __webpack_require__(147)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-32844fd0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_32844fd0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/require/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-32844fd0", Component.options)
  } else {
    hotAPI.reload("data-v-32844fd0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 146:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_require__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_org__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_index__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_area__ = __webpack_require__(31);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      active: 0,
      activityKey: -1,
      page: 1,
      tabs: [],
      stairs: '',
      detailList: '',
      requirementList: '',
      formatDate: __WEBPACK_IMPORTED_MODULE_5__utils_index__["a" /* formatDate */],
      search: '',
      more: true,
      titleVal: '',
      area: '',
      city: '',
      province: '',
      areaText: '请选择',
      showArea: false,
      areaList: __WEBPACK_IMPORTED_MODULE_7__utils_area__["a" /* default */],
      districtCode: ''
    };
  },
  mounted: function mounted() {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _this.getLocation();

            case 3:
              _context.next = 5;
              return _this.regionGeocoder();

            case 5:
              _this.getTypeList();
              _context.next = 14;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context['catch'](0);

              _this.area = '';
              _this.city = '';
              _this.province = '';
              _this.getTypeList();

            case 14:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 8]]);
    }))();
  },


  methods: {
    getLocation: function getLocation() {
      var _this2 = this;

      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        var vm = _this2;
        wx.getLocation({
          type: "wgs84",
          success: function success(res) {
            vm.region = res;
            resolve();
          },
          fail: function fail(err) {
            reject(err);
          }
        });
      });
    },
    regionGeocoder: function regionGeocoder() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3() {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt('return', new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function () {
                  var _ref = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2(resolve) {
                    var _region, latitude, longitude, res;

                    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _region = _this3.region, latitude = _region.latitude, longitude = _region.longitude;
                            _context2.next = 3;
                            return Object(__WEBPACK_IMPORTED_MODULE_6__api_map__["a" /* geocoder */])({
                              location: latitude + ',' + longitude
                            });

                          case 3:
                            res = _context2.sent;

                            _this3.area = res.result.ad_info.adcode;
                            _this3.city = res.result.ad_info.adcode.slice(0, 4);
                            _this3.province = res.result.ad_info.adcode.slice(0, 2);
                            _this3.areaText = res.result.ad_info.city;
                            resolve();

                          case 9:
                          case 'end':
                            return _context2.stop();
                        }
                      }
                    }, _callee2, _this3);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 1:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },
    selectArea: function selectArea() {
      this.showArea = !this.showArea;
    },
    confirmArea: function confirmArea(event) {
      var value = event.mp.detail.values;
      var region = this.getRegionCode(value);
      if (region && region.code) {
        this.areaText = region.name;
      } else {
        this.areaText = '请选择';
        this.area = '';
        this.city = '';
        this.province = '';
      }
      if (this.activityKey === -1) {
        this.getRequirementList('', '', true);
      } else {
        this.getRequirementList(this.detailList[this.activityKey].value, '', true);
      }
      this.showArea = false;
    },
    getRegionCode: function getRegionCode(value) {
      this.area = '';
      this.province = '';
      this.city = '';
      for (var i = 2; i > -1; i--) {
        if (value[i] && value[i].code) {
          switch (i) {
            case 2:
              this.area = value[i].code;
              break;
            case 1:
              value[i].code = value[i].code.slice(0, 4);
              this.city = value[i].code;
              break;
            case 0:
              value[i].code = value[i].code.slice(0, 2);
              this.province = value[i].code;
              break;
          }
          return value[i];
        }
      }
    },
    loadMore: function loadMore() {
      if (!this.more) {
        return false;
      }
      this.page += 1;
      if (this.activityKey === -1) {
        this.getRequirementList('', this.titleVal, false, this.areaText);
      } else {
        this.getRequirementList(this.detailList[this.activityKey].value, '', false);
      }
    },
    onSearch: function onSearch(e) {
      if (e.mp.detail !== '') {
        this.titleVal = e.mp.detail;
        this.getRequirementList('', this.titleVal, true);
      }
      this.activityKey = -1;
    },
    onChange: function onChange(e) {
      if (e.mp.detail === '') {
        this.activityKey = -1;
        this.getRequirementList('', '', true);
      }
    },
    getRequirementList: function getRequirementList(val, title, init) {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (init) {
                  _this4.page = 1;
                  _this4.more = true;
                  _this4.requirementList = [];
                }
                _context4.prev = 1;
                _context4.next = 4;
                return Object(__WEBPACK_IMPORTED_MODULE_3__api_require__["h" /* requirementList */])({
                  type: _this4.active === 0 ? '' : _this4.active,
                  demandType: val === 0 ? '' : val,
                  limit: 10,
                  page: _this4.page,
                  queryString: title || '',
                  area: _this4.city ? '' : _this4.area,
                  city: _this4.province ? '' : _this4.city,
                  province: _this4.province
                });

              case 4:
                res = _context4.sent;

                if (res.data.rows < 6 && _this4.page > 1) {
                  _this4.more = false;
                }
                if (init) {
                  _this4.requirementList = res.data.rows;
                  _this4.requirementList.forEach(function (i) {
                    i.createTime = _this4.formatDate(i['createTime']);
                  });
                } else {
                  res.data.rows.forEach(function (i) {
                    i.createTime = _this4.formatDate(i['createTime']);
                  });
                  _this4.requirementList = _this4.requirementList.concat(res.data.rows);
                }
                _context4.next = 11;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4['catch'](1);

              case 11:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this4, [[1, 9]]);
      }))();
    },
    getDetailList: function getDetailList(val) {
      var _this5 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee5() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_3__api_require__["b" /* detailList */])({
                  dictId: val === 0 ? '' : val,
                  limit: 999,
                  page: 1
                });

              case 3:
                res = _context5.sent;

                _this5.detailList = res.data.rows;
                if (_this5.activityKey === -1) {
                  _this5.getRequirementList('', '', true);
                } else {
                  _this5.getRequirementList(_this5.detailList[_this5.activityKey].value, '', true);
                }
                _context5.next = 10;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5['catch'](0);

              case 10:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this5, [[0, 8]]);
      }))();
    },
    logActive: function logActive(event) {
      this.active = event.mp.detail.name;
      this.activityKey = -1;
      this.getDetailList(this.active);
    },
    initTab: function initTab(event) {
      this.activityKey = -1;
      this.getDetailList(this.active);
    },
    getTypeList: function getTypeList() {
      var _this6 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee6() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_3__api_require__["m" /* typeList */])({
                  limit: 10,
                  page: 1
                });

              case 3:
                res = _context6.sent;

                _this6.stairs = res.data.rows;
                _this6.stairs.unshift({
                  id: 0,
                  name: 'all_service',
                  remark: '全部'
                });
                _this6.getDetailList(_this6.active);
                _context6.next = 11;
                break;

              case 9:
                _context6.prev = 9;
                _context6.t0 = _context6['catch'](0);

              case 11:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, _this6, [[0, 9]]);
      }))();
    },
    toRequire: function toRequire() {
      var _this7 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee7() {
        var res, total;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_4__api_org__["l" /* userOrgList */])({
                  page: 1,
                  limit: 1,
                  userId: _this7.$store.getters.id,
                  status: 2
                });

              case 2:
                res = _context7.sent;
                total = res.data.total;

                if (total > 0) {
                  _this7.$navigate.to("/pages/require/create/index");
                } else {
                  _this7.$dialog.confirm({
                    title: '提示',
                    message: '请先创建或加入组织'
                  }).then(function () {
                    _this7.$navigate.to("/pages/org/index");
                  });
                }

              case 5:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, _this7);
      }))();
    },
    goDetail: function goDetail(val) {
      var _this8 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee8() {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_3__api_require__["f" /* requirementBrowse */])({
                  requirementId: val
                });

              case 2:
                _this8.$navigate.to('/pages/require/detail/index?id=' + val);

              case 3:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, _this8);
      }))();
    },
    goSupply: function goSupply(val) {
      // this.getTypeList()
      this.$navigate.to('/pages/require/supply/index', {
        id: val
      });
    },
    onSidebarChange: function onSidebarChange(event) {
      this.activityKey = event.mp.detail;
      this.getRequirementList(this.detailList[this.activityKey].value, '', true);
    }
  },

  onShareAppMessage: function onShareAppMessage(res) {
    if (res.from !== 'button') return false;
    return {
      title: res.target.dataset.title,
      path: '/pages/require/detail/index?id=' + res.target.dataset.id,
      imageUrl: res.target.dataset.img
    };
  }
});

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "require"
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
      "change": _vm.onChange
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
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "tool",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.toRequire
    }
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "src": "../../../static/icon/add.png"
    }
  })]), _vm._v(" "), _c('van-tabs', {
    attrs: {
      "active": _vm.active,
      "border": false,
      "color": "#E61F1C",
      "eventid": '7',
      "mpcomid": '6'
    },
    on: {
      "change": _vm.logActive,
      "onClick": _vm.initTab
    }
  }, _vm._l((_vm.stairs), function(stair, index) {
    return _c('van-tab', {
      key: index,
      attrs: {
        "name": stair.id,
        "title": stair.remark,
        "mpcomid": '5_' + index
      }
    }, [_c('div', {
      staticClass: "sidebar",
      staticStyle: {
        "width": "85px"
      }
    }, [_c('van-sidebar', {
      attrs: {
        "active-key": _vm.activityKey,
        "eventid": '3_' + index,
        "mpcomid": '3_' + index
      },
      on: {
        "change": _vm.onSidebarChange
      }
    }, _vm._l((_vm.detailList), function(item, _index) {
      return _c('van-sidebar-item', {
        key: _index,
        attrs: {
          "title": item.label,
          "mpcomid": '2_' + index + '-' + _index
        }
      })
    }))], 1), _vm._v(" "), _c('div', {
      staticClass: "container",
      staticStyle: {
        "width": "calc(100vw - 85px)"
      }
    }, [(_vm.requirementList.length !== 0) ? _c('scroll-view', {
      staticClass: "hei_box",
      attrs: {
        "scroll-y": "true",
        "eventid": '6_' + index
      },
      on: {
        "scrolltoupper": _vm.refresh,
        "scrolltolower": _vm.loadMore
      }
    }, [_c('ul', _vm._l((_vm.requirementList), function(itemss, ____index) {
      return _c('li', {
        key: ____index,
        staticClass: "list_box",
        staticStyle: {
          "position": "relative"
        },
        attrs: {
          "eventid": '5_' + index + '-' + ____index
        },
        on: {
          "click": function($event) {
            $event.stopPropagation();
            _vm.goDetail(itemss.id)
          }
        }
      }, [_c('div', {
        staticClass: "list_image_box"
      }, [_c('div', {
        staticClass: "img",
        style: ('background: url(' + itemss.cover + ') no-repeat center/cover')
      }, [(itemss.isDefaultCover === '2') ? _c('div', {
        staticClass: "cover-container"
      }, [_c('div', {
        staticClass: "ellipsis"
      }, [_vm._v(_vm._s(itemss.typeName))]), _vm._v(" "), _c('div', [_vm._v("需求对接")])]) : _vm._e()]), _vm._v(" "), (itemss.level === 2) ? _c('div', {
        staticClass: "urgent_box"
      }, [_vm._v("急缺")]) : _vm._e()]), _vm._v(" "), _c('div', {
        staticStyle: {
          "position": "absolute",
          "top": "10px",
          "right": "16px",
          "color": "#999",
          "font-size": "12px"
        }
      }, [_vm._v("\n                浏览量: " + _vm._s(itemss.browseTimes || 0) + "\n              ")]), _vm._v(" "), _c('div', {
        staticClass: "list_right_box"
      }, [_c('div', {
        staticClass: "first_box"
      }, [_c('p', {
        staticStyle: {
          "word-wrap": "break-word"
        }
      }, [_vm._v(_vm._s(itemss.title))])], 1), _vm._v(" "), _c('div', {
        staticClass: "last_box"
      }, [_c('span', [_vm._v(_vm._s(itemss.createTime) + "发布")]), _vm._v(" "), _c('div', {
        staticStyle: {
          "position": "absolute",
          "right": "16px"
        }
      }, [_c('van-button', {
        attrs: {
          "round": "",
          "size": "small",
          "color": "#F68725",
          "custom-style": "font-size:12px; height:44rpx",
          "eventid": '4_' + index + '-' + ____index,
          "mpcomid": '4_' + index + '-' + ____index
        },
        on: {
          "click": function($event) {
            $event.stopPropagation();
            _vm.goSupply(itemss.id)
          }
        }
      }, [_vm._v("我要对接")])], 1)])])])
    }))], 1) : _c('div', {
      staticClass: "empty_box"
    }, [_c('img', {
      attrs: {
        "src": "/static/images/empty.png"
      }
    }), _vm._v("\n          暂无数据\n        ")])], 1)])
  })), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.showArea,
      "position": "bottom",
      "eventid": '9',
      "mpcomid": '8'
    },
    on: {
      "close": function($event) {
        _vm.showArea = false
      }
    }
  }, [_c('van-area', {
    attrs: {
      "area-list": _vm.areaList,
      "value": _vm.area,
      "columns-placeholder": ['请选择', '请选择', '请选择'],
      "eventid": '8',
      "mpcomid": '7'
    },
    on: {
      "confirm": _vm.confirmArea,
      "cancel": function($event) {
        _vm.showArea = false
      }
    }
  })], 1), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '9'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-32844fd0", esExports)
  }
}

/***/ })

},[342]);