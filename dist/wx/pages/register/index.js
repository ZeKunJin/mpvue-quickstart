require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonp([17],{

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_11fdf726_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(330);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(328)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_11fdf726_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/register/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-11fdf726", Component.options)
  } else {
    hotAPI.reload("data-v-11fdf726", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 328:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 329:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_common__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_user__ = __webpack_require__(38);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      name: '',
      phone: '',
      code: '',
      avatar: '',
      disabled: false,
      second: 60,
      checked: false
    };
  },
  mounted: function mounted() {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign___default()(this, this.$options.data());
  },


  methods: {
    login: function login() {
      this.$navigate.back();
    },
    inputName: function inputName(event) {
      this.name = event.target.value;
    },
    inputPhone: function inputPhone(event) {
      this.phone = event.target.value;
    },
    inputCode: function inputCode(event) {
      this.code = event.target.value;
    },
    count: function count() {
      var _this = this;

      var tim = setInterval(function () {
        _this.second--;
        if (_this.second === 0) {
          clearInterval(tim);
          _this.disabled = false;
          _this.second = 60;
        }
      }, 1000);
    },
    verify: function verify() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_4__api_common__["e" /* verify */])({
                  phoneNum: _this2.phone,
                  type: 'register'
                });

              case 3:
                _this2.disabled = true;
                _this2.count();
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
        }, _callee, _this2, [[0, 7]]);
      }))();
    },
    wxGetInfo: function wxGetInfo(event) {
      var userInfo = event.mp.detail.userInfo;

      this.avatar = userInfo.avatarUrl;
      this.register();
    },
    wxLogin: function wxLogin() {
      wx.login({
        success: function success(res) {
          var _this3 = this;

          return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
            return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!res.code) {
                      _context2.next = 3;
                      break;
                    }

                    _context2.next = 3;
                    return Object(__WEBPACK_IMPORTED_MODULE_4__api_common__["b" /* openid */])({ code: res.code });

                  case 3:
                  case 'end':
                    return _context2.stop();
                }
              }
            }, _callee2, _this3);
          }))();
        }
      });
    },
    onCheckededChange: function onCheckededChange(event) {
      this.checked = event.mp.detail;
    },
    validate: function validate() {
      var _this4 = this;

      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        if (_this4.checked) {
          resolve();
        } else {
          reject();
        }
      });
    },
    register: function register() {
      var _this5 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3() {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _this5.validate();

              case 3:
                _context3.prev = 3;
                _context3.next = 6;
                return Object(__WEBPACK_IMPORTED_MODULE_5__api_user__["d" /* register */])({
                  name: _this5.name,
                  phone: _this5.phone,
                  code: _this5.code,
                  avatar: _this5.avatar,
                  type: 0
                });

              case 6:
                _this5.$navigate.back();
                wx.showToast({
                  title: '注册成功',
                  icon: 'none'
                });
                _context3.next = 12;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3['catch'](3);

              case 12:
                _context3.next = 17;
                break;

              case 14:
                _context3.prev = 14;
                _context3.t1 = _context3['catch'](0);

                wx.showToast({
                  title: '请同意用户使用协议',
                  icon: 'none'
                });

              case 17:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this5, [[0, 14], [3, 10]]);
      }))();
    },
    agreement: function agreement() {
      this.$navigate.to('/pages/register/agreement/index');
    }
  }
});

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "register"
  }, [_c('img', {
    staticClass: "register-bg",
    attrs: {
      "src": "../../../static/images/title-background.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "block"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-top": "30px"
    }
  }, [_c('div', {
    staticClass: "input",
    staticStyle: {
      "margin-top": "10px",
      "position": "relative"
    }
  }, [_c('input', {
    attrs: {
      "value": _vm.name,
      "placeholder": "请输入用户名",
      "placeholder-class": "placeholder",
      "eventid": '0'
    },
    on: {
      "input": _vm.inputName
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "input",
    staticStyle: {
      "margin-top": "20px"
    }
  }, [_c('input', {
    attrs: {
      "value": _vm.phone,
      "placeholder": "请输入手机号",
      "placeholder-class": "placeholder",
      "eventid": '1'
    },
    on: {
      "input": _vm.inputPhone
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
      "eventid": '2'
    },
    on: {
      "input": _vm.inputCode
    }
  }), _vm._v(" "), (!_vm.disabled) ? _c('div', {
    staticClass: "code-text",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.verify
    }
  }, [_vm._v("\n          发送验证码\n        ")]) : _c('div', {
    staticClass: "code-text",
    staticStyle: {
      "color": "#999"
    }
  }, [_vm._v("\n          (" + _vm._s(_vm.second) + "s)\n        ")])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-top": "20px",
      "font-size": "12px"
    }
  }, [_c('van-checkbox', {
    attrs: {
      "value": _vm.checked,
      "checked-color": "#E61F1C",
      "icon-size": "18",
      "eventid": '5',
      "mpcomid": '0'
    },
    on: {
      "change": _vm.onCheckededChange
    }
  }, [_c('span', {
    staticStyle: {
      "color": "#666"
    }
  }, [_vm._v("我已阅读并同意")]), _vm._v(" "), _c('span', {
    staticStyle: {
      "color": "#E61F1C"
    },
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.agreement
    }
  }, [_vm._v("《用户使用协议》")])])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "button"
  }, [_c('van-button', {
    attrs: {
      "open-type": "getUserInfo",
      "round": "",
      "color": "linear-gradient(to right, #F15350, #F86E6E)",
      "size": "large",
      "eventid": '6',
      "mpcomid": '1'
    },
    on: {
      "getuserinfo": _vm.wxGetInfo
    }
  }, [_vm._v("\n        注册\n      ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "login-text",
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": _vm.login
    }
  }, [_vm._v("\n      已有账号?\n      "), _c('span', {
    staticStyle: {
      "color": "#E61F1C"
    }
  }, [_vm._v("立即登录")])])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title"
  }, [_c('div', {
    staticClass: "desc"
  }, [_vm._v("\n        注册\n      ")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-11fdf726", esExports)
  }
}

/***/ })

},[368]);