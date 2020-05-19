require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonp([27],{

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_07af3654_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(262);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(260)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-07af3654"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_07af3654_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/mine/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-07af3654", Component.options)
  } else {
    hotAPI.reload("data-v-07af3654", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 260:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_user__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_org__ = __webpack_require__(20);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      orgList: [],
      orgName: '',
      total: 0,
      limit: 5,
      page: 1,
      status: 2,
      hasApply: false
    };
  },


  computed: {
    isLogin: function isLogin(params) {
      var value = !!this.$store.getters.token;
      if (value) {
        this.fetch();
      }
      return value;
    },

    isOrg: function isOrg() {
      return this.total > 0;
    }
  },

  onShow: function onShow() {
    if (this.isLogin) {
      this.fetch();
    }
  },


  methods: {
    fetch: function fetch() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var nameList, _ref, _ref2, userRes, orgRes, applyRes;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                nameList = [];
                _context.prev = 1;
                _context.next = 4;
                return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.all([Object(__WEBPACK_IMPORTED_MODULE_4__api_user__["b" /* info */])(), Object(__WEBPACK_IMPORTED_MODULE_5__api_org__["l" /* userOrgList */])({
                  page: _this.page,
                  limit: _this.limit,
                  userId: _this.$store.getters.id,
                  status: _this.status
                }), Object(__WEBPACK_IMPORTED_MODULE_5__api_org__["d" /* hasApply */])()]);

              case 4:
                _ref = _context.sent;
                _ref2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default()(_ref, 3);
                userRes = _ref2[0];
                orgRes = _ref2[1];
                applyRes = _ref2[2];

                _this.userInfo = userRes.data;
                _this.orgList = orgRes.data.rows;
                _this.orgList.forEach(function (element) {
                  nameList.push(element.orgName);
                });
                _this.orgName = nameList.join('/');
                _this.hasApply = applyRes.data.length > 0;
                _this.total = orgRes.data.total;
                _context.next = 19;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context['catch'](1);

              case 19:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[1, 17]]);
      }))();
    },
    mineOrg: function mineOrg() {
      this.$navigate.to('/pages/mine/org/index');
    },
    org: function org() {
      this.$navigate.to('/pages/org/index');
    },
    mineRequire: function mineRequire() {
      this.$navigate.to('/pages/mine/require/index');
    },
    account: function account() {
      this.$navigate.to('/pages/mine/account/index');
    },
    supply: function supply() {
      this.$navigate.to('/pages/mine/supply/index');
    },
    login: function login() {
      this.$navigate.to('/pages/login/index');
    },
    help: function help() {
      this.$navigate.to('/pages/mine/help/index');
    },
    phone: function phone() {
      wx.makePhoneCall({
        phoneNumber: '13046639806'
      });
    }
  }
});

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mine"
  }, [_c('div', {
    staticClass: "block"
  }, [_c('van-image', {
    attrs: {
      "round": "",
      "width": "60px",
      "height": "60px",
      "src": _vm.isLogin ? _vm.userInfo.avatar : '',
      "use-error-slot": "",
      "mpcomid": '1'
    }
  }, [_c('van-icon', {
    attrs: {
      "name": "user-o",
      "mpcomid": '0'
    },
    slot: "error"
  })], 1), _vm._v(" "), (!_vm.isLogin) ? _c('van-tag', {
    staticClass: "login-tag",
    attrs: {
      "round": "",
      "size": "large",
      "color": "#F7F7F7",
      "eventid": '2',
      "mpcomid": '4'
    },
    on: {
      "click": _vm.login
    }
  }, [_c('div', {
    staticClass: "login-text"
  }, [_vm._v("\n        登录/注册\n      ")])]) : _c('div', {
    staticClass: "info-text"
  }, [_c('div', {
    staticClass: "name"
  }, [_vm._v("\n        " + _vm._s(_vm.userInfo.name) + "\n      ")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-top": "5px"
    }
  }, [_c('van-tag', {
    attrs: {
      "round": "",
      "size": "large",
      "color": _vm.isOrg ? '#fbe7f0' : '#F7F7F7',
      "mpcomid": '3'
    }
  }, [(_vm.isOrg) ? _c('img', {
    staticStyle: {
      "width": "20px",
      "height": "20px"
    },
    attrs: {
      "src": "../../../static/icon/logo.png"
    }
  }) : _c('img', {
    staticStyle: {
      "width": "20px",
      "height": "20px"
    },
    attrs: {
      "src": "../../../static/icon/logo-inactive.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "org-text"
  }, [(_vm.isOrg) ? [_c('div', {
    staticClass: "ellipsis",
    staticStyle: {
      "width": "128px"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.orgName) + "\n              ")])] : _c('span', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.org
    }
  }, [_vm._v("\n              加入组织/创建主体\n            ")])], 2)])], 1)])], 1), _vm._v(" "), _c('van-cell-group', {
    attrs: {
      "border": false,
      "mpcomid": '11'
    }
  }, [_c('van-cell', {
    attrs: {
      "is-link": "",
      "eventid": '3',
      "mpcomid": '5'
    },
    on: {
      "click": _vm.mineOrg
    }
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "src": "../../../static/icon/org.png"
    },
    slot: "icon"
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "flex",
      "align-items": "center"
    },
    slot: "title"
  }, [_vm._v("\n        我的组织\n        "), (_vm.hasApply) ? _c('div', {
    staticClass: "unread"
  }) : _vm._e()])]), _vm._v(" "), _c('van-cell', {
    attrs: {
      "title": "我的需求",
      "is-link": "",
      "eventid": '4',
      "mpcomid": '6'
    },
    on: {
      "click": _vm.mineRequire
    }
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "src": "../../../static/icon/require.png"
    },
    slot: "icon"
  })]), _vm._v(" "), _c('van-cell', {
    attrs: {
      "title": "我的对接",
      "is-link": "",
      "eventid": '5',
      "mpcomid": '7'
    },
    on: {
      "click": _vm.supply
    }
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "src": "../../../static/icon/supply.png"
    },
    slot: "icon"
  })]), _vm._v(" "), _c('van-cell', {
    attrs: {
      "title": "账号信息",
      "is-link": "",
      "eventid": '6',
      "mpcomid": '8'
    },
    on: {
      "click": _vm.account
    }
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "src": "../../../static/icon/account.png"
    },
    slot: "icon"
  })]), _vm._v(" "), _c('van-cell', {
    attrs: {
      "title": "联系我们",
      "is-link": "",
      "eventid": '7',
      "mpcomid": '9'
    },
    on: {
      "click": _vm.phone
    }
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "src": "../../../static/icon/phone.png"
    },
    slot: "icon"
  })]), _vm._v(" "), _c('van-cell', {
    attrs: {
      "title": "帮助",
      "is-link": "",
      "eventid": '8',
      "mpcomid": '10'
    },
    on: {
      "click": _vm.help
    }
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "src": "../../../static/icon/question.png"
    },
    slot: "icon"
  })])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-07af3654", esExports)
  }
}

/***/ })

},[352]);