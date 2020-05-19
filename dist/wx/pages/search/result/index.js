require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonp([8],{

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7aa53857_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(144);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(142)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7aa53857"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7aa53857_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/search/result/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7aa53857", Component.options)
  } else {
    hotAPI.reload("data-v-7aa53857", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 142:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 143:
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




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      active: 0,
      activityKey: 0,
      page: 1,
      tabs: [],
      stairs: '',
      detailList: '',
      requirementList: '',
      formatDate: __WEBPACK_IMPORTED_MODULE_3__utils_index__["a" /* formatDate */],
      more: true,
      markerId: '',
      orgName: ''
    };
  },
  mounted: function mounted() {},

  methods: {
    feng: function feng() {},
    getRequirementList: function getRequirementList(val, title, markerId, orgName) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_2__api_require__["h" /* requirementList */])({
                  demandType: val === 0 ? '' : val,
                  orgId: markerId === '' ? '' : markerId,
                  limit: 999,
                  page: 1,
                  title: title === '' ? '' : title,
                  orgName: orgName === '' ? '' : orgName
                });

              case 3:
                res = _context.sent;

                _this.requirementList = res.data.rows;
                _this.requirementList.forEach(function (i) {
                  i.createTime = _this.formatDate(i['createTime']);
                });
                _context.next = 10;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context['catch'](0);

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 8]]);
      }))();
    },
    getDetailList: function getDetailList(val) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_2__api_require__["b" /* detailList */])({
                  dictId: val === 0 ? '' : val,
                  limit: 999,
                  page: 1
                });

              case 3:
                res = _context2.sent;

                _this2.detailList = res.data.rows;
                _this2.getRequirementList(_this2.detailList[_this2.activityKey].value, '', _this2.markerId, _this2.orgName);
                _context2.next = 10;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2['catch'](0);

              case 10:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[0, 8]]);
      }))();
    },
    logActive: function logActive(event) {
      this.active = event.mp.detail.name;
      this.getDetailList(this.active);
    },
    getTypeList: function getTypeList() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_2__api_require__["m" /* typeList */])({
                  limit: 6,
                  page: 1
                });

              case 3:
                res = _context3.sent;

                _this3.stairs = res.data.rows;
                _this3.stairs.unshift({
                  id: 0,
                  name: 'all_service',
                  remark: '全部'
                });
                _this3.getDetailList(_this3.active);
                _context3.next = 11;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3['catch'](0);

              case 11:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3, [[0, 9]]);
      }))();
    },
    goDetail: function goDetail(val) {
      this.$navigate.to('/pages/require/detail/index?id=' + val);
    },
    goSupply: function goSupply(val) {
      // this.getTypeList()
      this.$navigate.to('/pages/require/supply/index', {
        id: val
      });
    },
    onSidebarChange: function onSidebarChange(event) {
      this.activityKey = event.mp.detail;
      this.getRequirementList(this.detailList[this.activityKey].value, '', this.markerId, this.orgName);
      // 调用传这个
      // console.log(this.detailList[this.activityKey].value)
    }
  },
  onLoad: function onLoad(option) {
    if (option.markerId) {
      this.active = this.activityKey = 0;
      this.markerId = option.markerId;
      this.getTypeList();
    }
    if (option.orgName) {
      this.active = this.activityKey = 0;
      this.orgName = option.orgName;
      this.getTypeList();
    }
  },
  onShareAppMessage: function onShareAppMessage(res) {
    if (res.from !== 'button') return false;
  }
});

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "require"
  }, [_c('van-tabs', {
    attrs: {
      "active": _vm.active,
      "border": false,
      "color": "#E61F1C",
      "eventid": '4',
      "mpcomid": '5'
    },
    on: {
      "change": function($event) {
        _vm.logActive($event)
      }
    }
  }, _vm._l((_vm.stairs), function(stair, index) {
    return _c('van-tab', {
      key: index,
      attrs: {
        "name": stair.id,
        "title": stair.remark,
        "mpcomid": '4_' + index
      }
    }, [_c('div', {
      staticClass: "sidebar"
    }, [_c('van-sidebar', {
      attrs: {
        "active-key": _vm.activityKey,
        "eventid": '0_' + index,
        "mpcomid": '1_' + index
      },
      on: {
        "change": function($event) {
          _vm.onSidebarChange($event)
        }
      }
    }, _vm._l((_vm.detailList), function(item, _index) {
      return _c('van-sidebar-item', {
        key: _index,
        attrs: {
          "title": item.label,
          "mpcomid": '0_' + index + '-' + _index
        }
      })
    }))], 1), _vm._v(" "), _c('div', {
      staticClass: "container"
    }, [(_vm.requirementList.length !== 0) ? _c('ul', [_vm._l((_vm.requirementList), function(itemss, ____index) {
      return _c('li', {
        key: ____index,
        staticClass: "list_box",
        attrs: {
          "eventid": '3_' + index + '-' + ____index
        },
        on: {
          "click": function($event) {
            $event.stopPropagation();
            _vm.goDetail(itemss.id)
          }
        }
      }, [_c('div', {
        staticClass: "list_image_box"
      }, [_c('img', {
        attrs: {
          "src": itemss.cover
        }
      }), _vm._v(" "), (itemss.level === 2) ? _c('div', {
        staticClass: "urgent_box"
      }, [_vm._v("\n                                急缺\n                            ")]) : _vm._e()]), _vm._v(" "), _c('div', {
        staticClass: "list_right_box"
      }, [_c('div', {
        staticClass: "first_box"
      }, [_c('p', {
        staticStyle: {
          "word-wrap": "break-word"
        }
      }, [_vm._v(_vm._s(itemss.title))]), _vm._v(" "), _c('van-button', {
        attrs: {
          "icon": "weapp-nav",
          "round": "",
          "size": "mini",
          "color": "#F7F8FA",
          "custom-style": "color:#999999",
          "open-type": "share",
          "eventid": '1_' + index + '-' + ____index,
          "mpcomid": '2_' + index + '-' + ____index
        },
        on: {
          "click": function($event) {
            $event.stopPropagation();
            _vm.feng($event)
          }
        }
      }, [_vm._v("分享\n                                ")])], 1), _vm._v(" "), _c('div', {
        staticClass: "last_box"
      }, [_c('span', [_vm._v(_vm._s(itemss.createTime) + "发布")]), _vm._v(" "), _c('van-button', {
        attrs: {
          "round": "",
          "size": "small",
          "color": "#F68725",
          "custom-style": "font-size:12px;height:44rpx",
          "eventid": '2_' + index + '-' + ____index,
          "mpcomid": '3_' + index + '-' + ____index
        },
        on: {
          "click": function($event) {
            $event.stopPropagation();
            _vm.goSupply(itemss.id)
          }
        }
      }, [_vm._v("我要对接\n                                ")])], 1)])])
    }), _vm._v(" "), _c('p', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (!_vm.more),
        expression: "!more"
      }],
      staticStyle: {
        "text-align": "center"
      }
    }, [_vm._v("没有更多数据")])], 2) : _c('div', {
      staticClass: "empty_box"
    }, [_c('img', {
      attrs: {
        "src": "/static/images/empty.png"
      }
    }), _vm._v("\n                    暂无数据\n                ")])], 1)])
  }))], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7aa53857", esExports)
  }
}

/***/ })

},[341]);