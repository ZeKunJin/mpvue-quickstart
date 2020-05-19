require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonp([30],{

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3726a71c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(326);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(324)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3726a71c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/login/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3726a71c", Component.options)
  } else {
    hotAPI.reload("data-v-3726a71c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 324:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__);
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
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      phone: '',
      code: '',
      disabled: false,
      second: 60
    };
  },
  mounted: function mounted() {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()(this, this.$options.data());
  },


  methods: {
    register: function register() {
      this.$navigate.to('/pages/register/index');
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

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_3__api_common__["e" /* verify */])({
                  phoneNum: _this2.phone,
                  type: 'login'
                });

              case 3:
                _this2.disabled = true;
                _this2.count();
                _context.next = 11;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context['catch'](0);

                // on error
                _this2.disabled = false;
                _this2.second = 60;

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[0, 7]]);
      }))();
    },
    cancel: function cancel() {
      this.$navigate.back();
    },
    login: function login() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _this3.$store.dispatch('user/login', {
                  phone: _this3.phone,
                  code: _this3.code,
                  type: 0
                });

              case 3:
                _this3.$navigate.to('/pages/home/index');
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
        }, _callee2, _this3, [[0, 6]]);
      }))();
    }
  }
});

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login"
  }, [_c('img', {
    staticClass: "login-bg",
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
    staticClass: "input"
  }, [_c('input', {
    attrs: {
      "value": _vm.phone,
      "placeholder": "请输入手机号",
      "placeholder-class": "placeholder",
      "eventid": '0'
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
      "eventid": '1'
    },
    on: {
      "input": _vm.inputCode
    }
  }), _vm._v(" "), (!_vm.disabled) ? _c('div', {
    staticClass: "code-text",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.verify
    }
  }, [_vm._v("\n          发送验证码\n        ")]) : _c('div', {
    staticClass: "code-text",
    staticStyle: {
      "color": "#999"
    }
  }, [_vm._v("\n          (" + _vm._s(_vm.second) + "s)\n        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "button",
    staticStyle: {
      "height": "50px"
    }
  }, [_c('div', {
    staticStyle: {
      "width": "calc(50vw - 40px)",
      "position": "absolute",
      "left": "32px"
    }
  }, [_c('van-button', {
    attrs: {
      "round": "",
      "size": "large",
      "eventid": '3',
      "mpcomid": '0'
    },
    on: {
      "click": _vm.cancel
    }
  }, [_c('span', {
    staticStyle: {
      "color": "#999999"
    }
  }, [_vm._v("暂不登录")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "login",
    staticStyle: {
      "width": "calc(50vw - 40px)",
      "float": "right"
    }
  }, [_c('van-button', {
    attrs: {
      "round": "",
      "color": "linear-gradient(to right, #F15350, #F86E6E)",
      "size": "large",
      "eventid": '4',
      "mpcomid": '1'
    },
    on: {
      "click": _vm.login
    }
  }, [_vm._v("登录")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "register-text",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.register
    }
  }, [_vm._v("\n      暂无账号?\n      "), _c('span', {
    staticStyle: {
      "color": "#E61F1C"
    }
  }, [_vm._v("点击注册")])])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title"
  }, [_c('div', {
    staticClass: "desc"
  }, [_vm._v("\n        欢迎来到\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "name"
  }, [_vm._v("\n        社区微心愿\n      ")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3726a71c", esExports)
  }
}

/***/ })

},[367]);