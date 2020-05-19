require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonp([24],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_499d44ac_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(279);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(277)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_499d44ac_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/mine/require/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-499d44ac", Component.options)
  } else {
    hotAPI.reload("data-v-499d44ac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 277:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 278:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_index__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_require__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_org__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Empty__ = __webpack_require__(24);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Empty: __WEBPACK_IMPORTED_MODULE_7__components_Empty__["a" /* default */]
  },

  data: function data() {
    return {
      requireList: [],
      typeList: [],
      assignList: [],
      currSelected: {},
      currRequirement: {},
      index: 0,
      page: 1,
      limit: 10,
      loading: true,
      showScale: false,
      showStatus: false,
      showAssign: false,
      columns: [{
        values: [{ text: '上架', value: 'up' }, { text: '下架', value: 'low' }]
      }, { values: [] }],
      statusList: [{ text: '成功对接', value: '1' }, { text: '需求无效', value: '2' }, { text: '发布到期', value: '3' }]
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
              return _this.getTypeList();

            case 3:
              _this.fetch();

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },


  methods: {
    fetch: function fetch() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.getRequirementList();

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    getTypeList: function getTypeList() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee4() {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt('return', new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function () {
                  var _ref = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3(resolve) {
                    var res;
                    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return Object(__WEBPACK_IMPORTED_MODULE_5__api_require__["b" /* detailList */])({
                              page: 1,
                              limit: 999
                            });

                          case 2:
                            res = _context3.sent;

                            _this3.typeList = res.data.rows;
                            resolve();

                          case 5:
                          case 'end':
                            return _context3.stop();
                        }
                      }
                    }, _callee3, _this3);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 1:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this3);
      }))();
    },
    getRequirementList: function getRequirementList() {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee5() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_5__api_require__["h" /* requirementList */])({
                  limit: _this4.limit,
                  page: _this4.page,
                  userId: _this4.$store.getters.id
                });

              case 2:
                res = _context5.sent;

                _this4.total = res.data.total;
                res.data.rows.forEach(function (element) {
                  _this4.requireList.push(element);
                });
                _this4.formatRequirementList();
                _this4.loading = false;

              case 7:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this4);
      }))();
    },
    formatRequirementList: function formatRequirementList() {
      this.requireList.forEach(function (element) {
        element.createTime = Object(__WEBPACK_IMPORTED_MODULE_4__utils_index__["a" /* formatDate */])(element.createTime);
      });
    },
    onBottom: function onBottom() {
      this.page++;
      if (this.requireList.length < this.total) {
        this.fetch();
      }
    },
    showDialog: function showDialog(value, index) {
      this.currSelected = value;
      this.index = index;
      switch (value.quantizationType) {
        case '1':
          this.showScale = true;
          break;
        case '2':
          this.showStatus = true;
          break;
        default:
          this.showStatus = true;
          break;
      }
    },
    onScaleChange: function onScaleChange(event) {
      this.currSelected.scale = Number(event.mp.detail);
    },
    onStatusChange: function onStatusChange(event) {
      var columnValues = [];
      var _event$mp$detail = event.mp.detail,
          picker = _event$mp$detail.picker,
          value = _event$mp$detail.value,
          index = _event$mp$detail.index;

      switch (value[0].value) {
        case 'up':
          columnValues = [];
          break;
        case 'low':
          columnValues = this.statusList;
          break;
      }
      picker.setColumnValues(1, columnValues);
      this.columns[1].values = columnValues;
    },
    onSelect: function onSelect(event) {
      var value = event.mp.detail.value;
      this.currSelected.status = value[0].text;
      this.currSelected.lowReason = value[1] ? value[1].value : '';
      this.onConfirm();
    },
    onConfirm: function onConfirm() {
      var _this5 = this;

      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee6() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_5__api_require__["k" /* requirementUpdate */])({
                  id: _this5.currSelected.id,
                  scale: _this5.currSelected.scale,
                  status: _this5.currSelected.status,
                  lowReason: _this5.currSelected.lowReason
                });

              case 3:
                res = _context6.sent;

                _this5.requireList[_this5.index].status = res.data.status;
                _this5.showScale = false;
                _this5.showStatus = false;
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
        }, _callee6, _this5, [[0, 9]]);
      }))();
    },
    onTabChange: function onTabChange(event) {
      this.active = event.mp.detail.name;
      this.initList();
      this.fetch();
    },
    initList: function initList() {
      this.loading = true;
      this.page = 1;
      this.total = 0;
      this.requireList = [];
    },
    create: function create() {
      var _this6 = this;

      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee7() {
        var res, total;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_6__api_org__["l" /* userOrgList */])({
                  page: 1,
                  limit: 1,
                  userId: _this6.$store.getters.id,
                  status: 2
                });

              case 2:
                res = _context7.sent;
                total = res.data.total;

                if (total > 0) {
                  _this6.$navigate.to("/pages/require/create/index");
                } else {
                  _this6.$dialog.confirm({
                    title: '提示',
                    message: '请先创建或加入组织'
                  }).then(function () {
                    _this6.$navigate.to("/pages/org/index");
                  });
                }

              case 5:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, _this6);
      }))();
    },
    requirementDetail: function requirementDetail(event) {
      this.$navigate.to('/pages/require/detail/index', {
        id: event.requirementId
      });
    },
    onAssign: function onAssign(require) {
      var _this7 = this;

      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee8() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _this7.assignList = [];
                _this7.currRequirement = require;
                _context8.next = 4;
                return Object(__WEBPACK_IMPORTED_MODULE_6__api_org__["h" /* orgUserList */])({
                  orgId: require.orgId,
                  page: 1,
                  limit: 999
                });

              case 4:
                res = _context8.sent;

                _this7.formatAssignList(res.data.rows);
                _this7.showAssign = true;

              case 7:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, _this7);
      }))();
    },
    formatAssignList: function formatAssignList(arr) {
      var _this8 = this;

      arr.forEach(function (element) {
        _this8.assignList.push({
          value: element.userId,
          text: element.userName,
          disabled: element.userId === _this8.$store.getters.id
        });
      });
    },
    onConfirmAssign: function onConfirmAssign(event) {
      var _this9 = this;

      this.showAssign = false;
      this.$dialog.confirm({
        title: '提示',
        message: '确认分配需求成员'
      }).then(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee9() {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (!event.mp.detail.value.disabled) {
                  _this9.saveAssign(event);
                }
                _this9.showAssign = false;

              case 2:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, _this9);
      })));
    },
    saveAssign: function saveAssign(event) {
      var _this10 = this;

      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee10() {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_5__api_require__["a" /* assignRequirement */])({
                  ids: _this10.currRequirement.id,
                  orgId: _this10.currRequirement.orgId,
                  userId: event.mp.detail.value.value
                });

              case 2:
                _this10.initRequirementList();
                _this10.fetch();

              case 4:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, _this10);
      }))();
    },
    initRequirementList: function initRequirementList() {
      this.page = 1;
      this.requireList = [];
    },
    detail: function detail(require) {
      if (require.status.indexOf('已对接') > -1) {
        this.$navigate.to('/pages/mine/require/detail/index', {
          id: require.id
        });
      } else {
        this.$navigate.to('/pages/mine/require/edit/index', {
          id: require.id
        });
      }
    }
  }
});

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mine-require"
  }, [(!_vm.loading) ? [(_vm.requireList.length > 0) ? _c('scroll-view', {
    staticStyle: {
      "height": "100vh"
    },
    attrs: {
      "scroll-y": true,
      "lower-threshold": "178",
      "eventid": '3'
    },
    on: {
      "scrolltolower": _vm.onBottom
    }
  }, [_vm._l((_vm.requireList), function(require, index) {
    return _c('div', {
      staticClass: "container",
      attrs: {
        "eventid": '2_' + index
      },
      on: {
        "click": function($event) {
          _vm.detail(require)
        }
      }
    }, [_c('div', {
      staticClass: "img",
      style: ('background: url(' + require.cover + ') no-repeat center/cover')
    }, [(require.isDefaultCover === '2') ? _c('div', {
      staticClass: "cover-container"
    }, [_c('div', {
      staticClass: "ellipsis"
    }, [_vm._v(_vm._s(require.typeName))]), _vm._v(" "), _c('div', [_vm._v("需求对接")])]) : _vm._e()]), _vm._v(" "), _c('div', {
      staticStyle: {
        "position": "relative"
      }
    }, [_c('div', {
      staticClass: "title"
    }, [_vm._v("\n            " + _vm._s(require.title) + "\n          ")]), _vm._v(" "), _c('div', {
      staticClass: "desc"
    }, [_c('div', {
      staticClass: "scale"
    }, [(require.quantizationType === '1') ? _c('span', [_vm._v("\n                进度: " + _vm._s(require.scale) + "%\n              ")]) : _c('span', [_vm._v("\n                状态: " + _vm._s(require.status) + "\n              ")])]), _vm._v(" "), _c('div', {
      staticClass: "date"
    }, [_c('span', {
      staticStyle: {
        "margin-right": "8px"
      }
    }, [_vm._v(_vm._s(require.createTime))]), _vm._v("\n              发布\n            ")])])]), _vm._v(" "), (require.status === '上架' || require.status === '下架-未对接') ? _c('van-icon', {
      staticClass: "edit-icon",
      attrs: {
        "name": "edit",
        "size": "20",
        "color": "#666",
        "mpcomid": '0_' + index
      }
    }) : _vm._e(), _vm._v(" "), _c('van-icon', {
      staticClass: "member-icon",
      attrs: {
        "name": "friends-o",
        "size": "20",
        "color": "#666",
        "eventid": '0_' + index,
        "mpcomid": '1_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.onAssign(require)
        }
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "edit"
    }, [_c('van-button', {
      attrs: {
        "color": "#F68725",
        "size": "mini",
        "round": "",
        "eventid": '1_' + index,
        "mpcomid": '2_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.showDialog(require, index)
        }
      }
    }, [_c('div', {
      staticStyle: {
        "margin": "0 8px"
      }
    }, [_vm._v("\n              需求状态编辑\n            ")])])], 1)], 1)
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "100vw",
      "height": "128px",
      "background-color": "#ffffff"
    }
  })], 2) : _c('div', {
    staticStyle: {
      "padding": "64px 0"
    }
  }, [_c('empty', {
    attrs: {
      "text": "暂未发布需求",
      "mpcomid": '3'
    }
  })], 1)] : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  }, [_c('van-button', {
    attrs: {
      "round": "",
      "color": "#E61F1C",
      "eventid": '4',
      "mpcomid": '5'
    },
    on: {
      "click": _vm.create
    }
  }, [_c('div', {
    staticStyle: {
      "margin": "0 32px"
    }
  }, [_vm._v("\n        发布需求\n      ")])])], 1), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "use-slot": "",
      "show": _vm.showScale,
      "show-cancel-button": "",
      "title": "完成度",
      "eventid": '6',
      "mpcomid": '7'
    },
    on: {
      "close": function($event) {
        _vm.showScale = false
      },
      "confirm": _vm.onConfirm
    }
  }, [_c('div', {
    staticClass: "slider"
  }, [_c('van-slider', {
    attrs: {
      "value": _vm.currSelected.scale,
      "use-button-slot": "",
      "active-color": "#E61F1C",
      "eventid": '5',
      "mpcomid": '6'
    },
    on: {
      "change": _vm.onScaleChange
    }
  }, [_c('div', {
    staticClass: "button",
    slot: "button"
  }, [_vm._v("\n          " + _vm._s(_vm.currSelected.scale) + "%\n        ")])])], 1)]), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '8'
    }
  }), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.showStatus,
      "position": "bottom",
      "eventid": '8',
      "mpcomid": '10'
    },
    on: {
      "close": function($event) {
        _vm.showStatus = false
      }
    }
  }, [_c('van-picker', {
    staticClass: "status-picker",
    attrs: {
      "columns": _vm.columns,
      "show-toolbar": "",
      "eventid": '7',
      "mpcomid": '9'
    },
    on: {
      "confirm": _vm.onSelect,
      "change": _vm.onStatusChange,
      "cancel": function($event) {
        _vm.showStatus = false
      }
    }
  })], 1), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.showAssign,
      "position": "bottom",
      "eventid": '10',
      "mpcomid": '12'
    },
    on: {
      "close": function($event) {
        _vm.showAssign = false
      }
    }
  }, [_c('van-picker', {
    attrs: {
      "columns": _vm.assignList,
      "show-toolbar": "",
      "eventid": '9',
      "mpcomid": '11'
    },
    on: {
      "confirm": _vm.onConfirmAssign,
      "cancel": function($event) {
        _vm.showAssign = false
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
     require("vue-hot-reload-api").rerender("data-v-499d44ac", esExports)
  }
}

/***/ })

},[356]);