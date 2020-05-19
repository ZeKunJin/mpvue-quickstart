require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonp([29],{

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_82791918_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(266);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(264)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_82791918_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/mine/account/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-82791918", Component.options)
  } else {
    hotAPI.reload("data-v-82791918", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 264:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_user__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_common__ = __webpack_require__(22);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      userInfo: {},
      showEditPhone: false,
      phone: '',
      code: '',
      second: 60,
      disabled: false
    };
  },
  mounted: function mounted() {
    this.fetch();
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
                _context.prev = 0;
                _context.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_2__api_user__["b" /* info */])();

              case 3:
                res = _context.sent;

                _this.userInfo = res.data;
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
    count: function count() {
      var _this2 = this;

      var tim = setInterval(function () {
        _this2.second--;
        if (_this2.second === 0) {
          clearInterval(tim);
          _this2.disabled = false;
          _this2.second = 60;
        }
      }, 1000);
    },
    verify: function verify() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_3__api_common__["e" /* verify */])({
                  phoneNum: _this3.phone,
                  type: 'updatePhone'
                });

              case 3:
                _this3.disabled = true;
                _this3.count();
                _context2.next = 11;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2['catch'](0);

                // on error
                _this3.disabled = false;
                _this3.second = 60;

              case 11:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3, [[0, 7]]);
      }))();
    },
    onConfirmPhone: function onConfirmPhone() {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var phone, code;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                phone = _this4.phone, code = _this4.code;
                _context3.next = 4;
                return Object(__WEBPACK_IMPORTED_MODULE_2__api_user__["a" /* edit */])({
                  phone: phone,
                  code: code
                });

              case 4:
                _this4.showEditPhone = false;
                _context3.next = 9;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3['catch'](0);

              case 9:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this4, [[0, 7]]);
      }))();
    },
    logout: function logout() {
      var _this5 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _this5.$dialog.confirm({
                  title: '退出登录',
                  message: '退出之后再次登录需要输入密码'
                });

              case 3:
                _context4.prev = 3;
                _context4.next = 6;
                return _this5.$store.dispatch('user/logout');

              case 6:
                _this5.$navigate.to('/pages/home/index', {}, true);
                _context4.next = 11;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4['catch'](3);

              case 11:
                _context4.next = 15;
                break;

              case 13:
                _context4.prev = 13;
                _context4.t1 = _context4['catch'](0);

              case 15:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this5, [[0, 13], [3, 9]]);
      }))();
    }
  }
});

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "account"
  }, [_c('div', {
    staticStyle: {
      "background-color": "#fff"
    }
  }, [_c('div', {
    staticClass: "avatar"
  }, [_c('van-image', {
    attrs: {
      "round": "",
      "width": "60",
      "height": "60",
      "src": _vm.userInfo.avatar,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_vm._v("\n        " + _vm._s(_vm.userInfo.name) + "\n      ")])], 1), _vm._v(" "), _c('van-cell-group', {
    attrs: {
      "border": false,
      "mpcomid": '3'
    }
  }, [_c('van-cell', {
    attrs: {
      "title": "姓名",
      "value": _vm.userInfo.name,
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('van-cell', {
    attrs: {
      "title": "手机号",
      "value": _vm.userInfo.phone,
      "is-link": "",
      "eventid": '0',
      "mpcomid": '2'
    },
    on: {
      "click": function($event) {
        _vm.showEditPhone = true
      }
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-top": "10px"
    }
  }, [_c('van-button', {
    attrs: {
      "plain": "",
      "hairline": "",
      "size": "large",
      "eventid": '1',
      "mpcomid": '4'
    },
    on: {
      "click": _vm.logout
    }
  }, [_vm._v("退出登录")])], 1), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "use-slot": "",
      "show": _vm.showEditPhone,
      "show-cancel-button": "",
      "title": "修改手机",
      "eventid": '5',
      "mpcomid": '5'
    },
    on: {
      "close": function($event) {
        _vm.showEditPhone = false
      },
      "confirm": _vm.onConfirmPhone
    }
  }, [_c('div', {
    staticClass: "dialog-container"
  }, [_c('div', {
    staticClass: "input"
  }, [_c('input', {
    attrs: {
      "value": _vm.phone,
      "placeholder": "请输入手机号",
      "placeholder-class": "placeholder",
      "eventid": '2'
    },
    on: {
      "input": function($event) {
        _vm.phone = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "input",
    staticStyle: {
      "margin-top": "20px",
      "position": "relative"
    }
  }, [_c('input', {
    attrs: {
      "value": _vm.code,
      "placeholder": "请输入验证码",
      "placeholder-class": "placeholder",
      "eventid": '3'
    },
    on: {
      "input": function($event) {
        _vm.code = $event.target.value
      }
    }
  }), _vm._v(" "), (!_vm.disabled) ? _c('div', {
    staticClass: "code-text",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.verify
    }
  }, [_vm._v("\n          发送验证码\n        ")]) : _c('div', {
    staticClass: "code-text",
    staticStyle: {
      "color": "#999"
    }
  }, [_vm._v("\n          (" + _vm._s(_vm.second) + "s)\n        ")])])])]), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "id": "van-dialog",
      "mpcomid": '6'
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
     require("vue-hot-reload-api").rerender("data-v-82791918", esExports)
  }
}

/***/ })

},[353]);