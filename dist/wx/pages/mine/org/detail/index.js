require("../../../../common/manifest.js")
require("../../../../common/vendor.js")
global.webpackJsonp([6],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_04cfefea_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(275);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(272)
  __webpack_require__(273)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-04cfefea"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_04cfefea_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/mine/org/detail/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-04cfefea", Component.options)
  } else {
    hotAPI.reload("data-v-04cfefea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 272:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 273:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_org__ = __webpack_require__(20);
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
//
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
      active: 'member',
      orgId: '',
      roles: '',
      member: {
        total: 0,
        page: 1,
        list: []
      },
      audit: {
        total: 0,
        page: 1,
        list: []
      },
      limit: 999,
      loading: true
    };
  },
  onLoad: function onLoad(option) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()(this, this.$options.data());
    this.orgId = option.id;
    this.roles = option.roles;
  },
  mounted: function mounted() {
    this.fetch();
  },


  methods: {
    fetch: function fetch() {
      this.getMemList();
      this.getAuditList();
    },
    onBottom: function onBottom(value) {
      if (this[value].list.length < this[value].total) {
        this[value].page++;
        switch (value) {
          case 'member':
            this.getMemList();
            break;
          case 'audit':
            this.getAuditList();
            break;
        }
      }
    },
    getMemList: function getMemList() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_3__api_org__["h" /* orgUserList */])({
                  orgId: _this.orgId,
                  page: _this.member.page,
                  limit: _this.limit
                });

              case 2:
                res = _context.sent;

                _this.member.total = res.data.total;
                res.data.rows.forEach(function (element) {
                  _this.member.list.push(element);
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
    getAuditList: function getAuditList() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_3__api_org__["f" /* orgApplyList */])({
                  orgId: _this2.orgId,
                  page: _this2.audit.page,
                  limit: _this2.limit
                });

              case 2:
                res = _context2.sent;

                _this2.audit.total = res.data.total;
                res.data.rows.forEach(function (element) {
                  _this2.audit.list.push(element);
                });
                _this2.loading = false;

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    onChange: function onChange(event) {
      this.active = event.mp.detail.name;
    },
    onApply: function onApply(audit) {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _this3.$dialog.confirm({
                  title: '提示',
                  message: '确认该成员审核通过',
                  confirmButtonText: '通过',
                  cancelButtonText: '拒绝'
                });

              case 3:
                _this3.onAudit(audit, 2);
                _context3.next = 9;
                break;

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3['catch'](0);

                _this3.onAudit(audit, 3);

              case 9:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3, [[0, 6]]);
      }))();
    },
    setManager: function setManager(member) {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var params;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _this4.$dialog.confirm({
                  title: '提示',
                  message: member.userRole === 'member' ? '确认设置管理员' : '确认撤销管理员'
                });

              case 3:
                params = {
                  userId: member.userId,
                  orgId: member.orgId
                };

                if (!(member.userRole === 'member')) {
                  _context4.next = 9;
                  break;
                }

                _context4.next = 7;
                return Object(__WEBPACK_IMPORTED_MODULE_3__api_org__["k" /* setManager */])(params);

              case 7:
                _context4.next = 11;
                break;

              case 9:
                _context4.next = 11;
                return Object(__WEBPACK_IMPORTED_MODULE_3__api_org__["j" /* revokeManager */])(params);

              case 11:
                _this4.refresh();
                _context4.next = 16;
                break;

              case 14:
                _context4.prev = 14;
                _context4.t0 = _context4['catch'](0);

              case 16:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this4, [[0, 14]]);
      }))();
    },
    onDelete: function onDelete(event, member) {
      var _this5 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee5() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _this5.$dialog.confirm({
                  title: '提示',
                  message: '确认删除组织成员'
                });

              case 3:
                _context5.next = 5;
                return Object(__WEBPACK_IMPORTED_MODULE_3__api_org__["i" /* removeUser */])({
                  orgId: member.orgId,
                  userId: member.userId
                });

              case 5:
                _this5.refresh();
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
    onAudit: function onAudit(audit, status) {
      var _this6 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee6() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this6.orgUserList = [];
                _this6.orgApplyList = [];
                _context6.next = 4;
                return Object(__WEBPACK_IMPORTED_MODULE_3__api_org__["b" /* applyAudit */])({
                  id: audit.id,
                  status: status
                });

              case 4:
                _this6.refresh();

              case 5:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, _this6);
      }))();
    },
    refresh: function refresh() {
      this.loading = true;
      this.member = {
        total: 0,
        page: 1,
        list: []
      }, this.audit = {
        total: 0,
        page: 1,
        list: []
      };
      this.fetch();
    }
  }
});

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mine-org-detail"
  }, [_c('van-tabs', {
    attrs: {
      "active": _vm.active,
      "color": "#E61F1C",
      "eventid": '5',
      "mpcomid": '11'
    },
    on: {
      "change": _vm.onChange
    }
  }, [_c('van-tab', {
    attrs: {
      "title": "成员列表",
      "name": "member",
      "mpcomid": '5'
    }
  }, [(!_vm.loading) ? [(_vm.member.list.length > 0) ? _c('scroll-view', {
    staticStyle: {
      "height": "calc(100vh - 44px)"
    },
    attrs: {
      "scroll-y": true,
      "eventid": '2'
    },
    on: {
      "scrolltolower": function($event) {
        _vm.onBottom('member')
      }
    }
  }, _vm._l((_vm.member.list), function(member, index) {
    return _c('van-swipe-cell', {
      key: member.userId,
      attrs: {
        "right-width": 65,
        "mpcomid": '2_' + index
      }
    }, [_c('van-cell', {
      attrs: {
        "eventid": '0_' + index,
        "mpcomid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.setManager(member)
        }
      }
    }, [_c('div', {
      slot: "title"
    }, [_vm._v("\n                " + _vm._s(member.userName) + "\n                "), (member.userRole === 'admin' || member.userRole === 'org_admin') ? _c('van-tag', {
      staticStyle: {
        "margin-left": "8px"
      },
      attrs: {
        "color": "#fbe7f0",
        "text-color": "#E61F1C",
        "mpcomid": '0_' + index
      }
    }, [_vm._v("管理员")]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
      staticClass: "del-container",
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.onDelete($event, member)
        }
      },
      slot: "right"
    }, [_c('span', [_vm._v("删除")])])], 1)
  })) : _c('div', {
    staticStyle: {
      "margin": "64px 0"
    }
  }, [_c('empty', {
    attrs: {
      "mpcomid": '3'
    }
  })], 1)] : _vm._e()], 2), _vm._v(" "), (_vm.roles === 'admin' || _vm.roles === 'org_admin') ? _c('van-tab', {
    attrs: {
      "title": "待审核",
      "name": "audit",
      "mpcomid": '10'
    }
  }, [(!_vm.loading) ? [(_vm.audit.list.length > 0) ? _c('scroll-view', {
    staticClass: "scroll",
    attrs: {
      "scroll-y": true,
      "eventid": '4'
    },
    on: {
      "scrolltolower": function($event) {
        _vm.onBottom('audit')
      }
    }
  }, _vm._l((_vm.audit.list), function(audit, index) {
    return _c('van-cell', {
      key: audit.userId,
      attrs: {
        "mpcomid": '7_' + index
      }
    }, [_c('div', {
      slot: "title"
    }, [_vm._v("\n              " + _vm._s(audit.userName) + "\n            ")]), _vm._v(" "), _c('van-button', {
      attrs: {
        "round": "",
        "size": "mini",
        "color": "#EE4E8C1A",
        "eventid": '3_' + index,
        "mpcomid": '6_' + index
      },
      on: {
        "click": function($event) {
          _vm.onApply(audit)
        }
      }
    }, [_c('span', {
      staticStyle: {
        "color": "#E61F1C"
      }
    }, [_vm._v("审核")])])], 1)
  })) : _c('div', {
    staticStyle: {
      "margin": "64px 0"
    }
  }, [_c('empty', {
    attrs: {
      "mpcomid": '8'
    }
  })], 1)] : _vm._e()], 2) : _vm._e()], 1), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '12'
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
     require("vue-hot-reload-api").rerender("data-v-04cfefea", esExports)
  }
}

/***/ })

},[355]);