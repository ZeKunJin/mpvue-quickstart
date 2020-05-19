require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonp([10],{

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_395ac848_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(224);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(222)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_395ac848_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/require/supply/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-395ac848", Component.options)
  } else {
    hotAPI.reload("data-v-395ac848", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 222:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_require__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_validate__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_index__ = __webpack_require__(23);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      username: "",
      phone: "",
      email: "",
      remark: "",
      flag: false,
      id: "",
      content: '',
      startText: '',
      endText: '',
      peopleNum: '',
      support: '',
      validPhone: __WEBPACK_IMPORTED_MODULE_4__utils_validate__["c" /* validPhone */],
      validEmail: __WEBPACK_IMPORTED_MODULE_4__utils_validate__["b" /* validEmail */],
      showStart: false,
      showEnd: false,
      startTime: new Date().getTime(),
      endTime: new Date().getTime(),
      today: new Date().getTime()
    };
  },
  onLoad: function onLoad(option) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()(this, this.$options.data());
    this.id = option.id;
    this.startText = Object(__WEBPACK_IMPORTED_MODULE_5__utils_index__["a" /* formatDate */])(this.startTime);
    this.endText = Object(__WEBPACK_IMPORTED_MODULE_5__utils_index__["a" /* formatDate */])(this.endTime);
  },


  methods: {
    inputPhone: function inputPhone(event) {
      this.phone = event.mp.detail;
    },
    inputUsername: function inputUsername(event) {
      this.username = event.mp.detail;
    },
    inputEmail: function inputEmail(event) {
      this.email = event.mp.detail;
    },
    inputRemark: function inputRemark(event) {
      this.remark = event.mp.detail;
    },
    inputContent: function inputContent(event) {
      this.content = event.mp.detail;
    },
    inputNum: function inputNum(event) {
      this.peopleNum = event.mp.detail;
    },
    inputSupport: function inputSupport(event) {
      this.support = event.mp.detail;
    },
    onConfirmStart: function onConfirmStart(event) {
      this.startTime = event.mp.detail;
      this.startText = Object(__WEBPACK_IMPORTED_MODULE_5__utils_index__["a" /* formatDate */])(this.startTime);
      this.showStart = false;
    },
    onConfirmEnd: function onConfirmEnd(event) {
      this.endTime = event.mp.detail;
      this.endText = Object(__WEBPACK_IMPORTED_MODULE_5__utils_index__["a" /* formatDate */])(this.endTime);
      this.showEnd = false;
    },
    goCheck: function goCheck() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.validPhone(_this.phone) === false)) {
                  _context.next = 3;
                  break;
                }

                Object(__WEBPACK_IMPORTED_MODULE_4__utils_validate__["a" /* Toast */])("请输入正确手机号");
                return _context.abrupt("return");

              case 3:
                if (!(_this.email !== "")) {
                  _context.next = 7;
                  break;
                }

                if (!(_this.validEmail(_this.email) === false)) {
                  _context.next = 7;
                  break;
                }

                Object(__WEBPACK_IMPORTED_MODULE_4__utils_validate__["a" /* Toast */])("请输入正确邮箱");
                return _context.abrupt("return");

              case 7:
                if (_this.content) {
                  _context.next = 10;
                  break;
                }

                Object(__WEBPACK_IMPORTED_MODULE_4__utils_validate__["a" /* Toast */])("请完善对接信息");
                return _context.abrupt("return");

              case 10:
                _context.prev = 10;
                _context.next = 13;
                return Object(__WEBPACK_IMPORTED_MODULE_3__api_require__["j" /* requirementSupply */])({
                  name: _this.username,
                  phone: _this.phone,
                  requirementId: _this.id,
                  email: _this.email,
                  remark: _this.remark,
                  content: _this.content,
                  startTime: new Date(_this.startTime),
                  endTime: new Date(_this.endTime),
                  peopleNum: Number(_this.peopleNum),
                  support: _this.support
                });

              case 13:
                _this.$navigate.to("/pages/require/complete/index");
                _this.init();
                _context.next = 19;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](10);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this, [[10, 17]]);
      }))();
    }
  }
});

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', [_c('van-cell-group', {
    attrs: {
      "mpcomid": '9'
    }
  }, [_c('van-field', {
    attrs: {
      "value": _vm.username,
      "label": "姓名",
      "placeholder": "请输入",
      "input-align": "right",
      "required": "",
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "input": _vm.inputUsername
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.phone,
      "label": "联系手机号",
      "placeholder": "请输入",
      "input-align": "right",
      "required": "",
      "eventid": '1',
      "mpcomid": '1'
    },
    on: {
      "input": _vm.inputPhone
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.email,
      "label": "联系邮箱",
      "placeholder": "请输入邮箱",
      "input-align": "right",
      "eventid": '2',
      "mpcomid": '2'
    },
    on: {
      "input": _vm.inputEmail
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.content,
      "label": "对接内容",
      "required": "",
      "placeholder": "请输入对接内容",
      "input-align": "right",
      "eventid": '3',
      "mpcomid": '3'
    },
    on: {
      "input": _vm.inputContent
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.startText,
      "label": "开始时间",
      "required": "",
      "disabled": "",
      "readonly": "",
      "input-align": "right",
      "placeholder": "请选择开始时间",
      "eventid": '4',
      "mpcomid": '4'
    },
    on: {
      "click": function($event) {
        _vm.showStart = true
      }
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.endText,
      "label": "结束时间",
      "required": "",
      "disabled": "",
      "readonly": "",
      "input-align": "right",
      "placeholder": "请选择结束时间",
      "eventid": '5',
      "mpcomid": '5'
    },
    on: {
      "click": function($event) {
        _vm.showEnd = true
      }
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.peopleNum,
      "label": "参与人数",
      "type": "number",
      "placeholder": "请输入参与人数",
      "input-align": "right",
      "eventid": '6',
      "mpcomid": '6'
    },
    on: {
      "input": _vm.inputNum
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.support,
      "label": "需要的支持",
      "placeholder": "请输入需要的支持",
      "input-align": "right",
      "eventid": '7',
      "mpcomid": '7'
    },
    on: {
      "input": _vm.inputSupport
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "value": _vm.remark,
      "label": "备注",
      "type": "textarea",
      "autosize": "",
      "placeholder": "请输入备注",
      "input-align": "right",
      "eventid": '8',
      "mpcomid": '8'
    },
    on: {
      "input": _vm.inputRemark
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "btn_box"
  }, [_c('van-button', {
    attrs: {
      "round": "",
      "type": "info",
      "color": "linear-gradient(90deg,rgba(241,83,80,1) 0%,rgba(248,110,110,1) 100%);",
      "custom-style": "width:300rpx;height:88rpx;box-shadow:0px 4px 4px 0px rgba(248,110,110,0.25);",
      "eventid": '9',
      "mpcomid": '10'
    },
    on: {
      "click": _vm.goCheck
    }
  }, [_vm._v("我要对接")])], 1)], 1), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.showStart,
      "position": "bottom",
      "eventid": '11',
      "mpcomid": '12'
    },
    on: {
      "close": function($event) {
        _vm.showStart = false
      }
    }
  }, [_c('van-datetime-picker', {
    attrs: {
      "type": "date",
      "value": _vm.startTime,
      "min-date": _vm.today,
      "eventid": '10',
      "mpcomid": '11'
    },
    on: {
      "cancel": function($event) {
        _vm.showStart = false
      },
      "confirm": _vm.onConfirmStart
    }
  })], 1), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.showEnd,
      "position": "bottom",
      "eventid": '13',
      "mpcomid": '14'
    },
    on: {
      "close": function($event) {
        _vm.showEnd = false
      }
    }
  }, [_c('van-datetime-picker', {
    attrs: {
      "type": "date",
      "value": _vm.endTime,
      "min-date": _vm.today,
      "eventid": '12',
      "mpcomid": '13'
    },
    on: {
      "cancel": function($event) {
        _vm.showEnd = false
      },
      "confirm": _vm.onConfirmEnd
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
     require("vue-hot-reload-api").rerender("data-v-395ac848", esExports)
  }
}

/***/ })

},[344]);