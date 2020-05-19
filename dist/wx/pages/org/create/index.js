require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonp([7],{

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_771ec7ec_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(314);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(311)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_771ec7ec_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/org/create/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-771ec7ec", Component.options)
  } else {
    hotAPI.reload("data-v-771ec7ec", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 311:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_area__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_org__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_constants_org__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Uploader__ = __webpack_require__(32);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Uploader: __WEBPACK_IMPORTED_MODULE_7__components_Uploader__["a" /* default */]
  },

  data: function data() {
    return {
      orgInfo: {
        name: '',
        contactPerson: '',
        contactInfo: '',
        sqzzFiles: [],
        sqshzzFiles: [],
        sqjwhFiles: [],
        sqjmFiles: [],
        qyFiles: []
      },
      orgTypeText: '请选择',
      showType: false,
      orgTypeConstants: __WEBPACK_IMPORTED_MODULE_6__utils_constants_org__["a" /* orgTypeConstants */],
      orgAreaText: '请选择',
      showArea: false,
      areaList: __WEBPACK_IMPORTED_MODULE_4__utils_area__["a" /* default */],
      orgInput: {
        sqzz: [{ label: '组织名称', name: 'name', type: 'text', required: true, placeholder: '组织名称与登记证书一致' }, { label: '登记证书', name: 'sqzzFiles', type: 'file', required: true }],
        sqshzz: [{ label: '组织名称', name: 'name', type: 'text', required: true }, { label: '备案证/负责人身份证', name: 'sqshzzFiles', type: 'file', required: true }],
        sqjwh: [{ label: '组织名称', name: 'name', type: 'text', required: true }, { label: '统一社会信用代码证书', name: 'sqjwhFiles', type: 'file', required: false }],
        sqjm: [{ label: '身份证/房产证/居住证', name: 'sqjmFiles', type: 'file', required: true }],
        qy: [{ label: '企业名称', name: 'name', type: 'text', required: true }, { label: '营业执照', name: 'qyFiles', type: 'file', required: true }]
      },
      currLocation: {
        longitude: 116.41667,
        latitude: 39.91667
      },
      markers: [],
      showTypeDesc: false
    };
  },
  mounted: function mounted() {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign___default()(this, this.$options.data());
  },


  methods: {
    onTap: function onTap(event) {
      var data = event.mp.detail;
      this.orgInfo.dimension = data.latitude;
      this.orgInfo.longitude = data.longitude;
      this.markers = [{
        iconPath: '/static/icon/location.png',
        latitude: data.latitude,
        longitude: data.longitude,
        width: 30,
        height: 30
      }];
    },
    confirmType: function confirmType(event) {
      this.orgInfo.type = event.mp.detail.value.value;
      this.orgTypeText = event.mp.detail.value.text;
      this.showType = false;
    },
    onInputChange: function onInputChange(event, name) {
      this.orgInfo[name] = event.mp.detail;
    },
    afterRead: function afterRead(event) {
      this.orgInfo[event.value].push({
        url: event.url
      });
    },
    afterDelete: function afterDelete(event) {
      this.orgInfo[event.value].splice(event.index, 1);
    },
    confirmArea: function confirmArea(event) {
      var data = event.mp.detail.values;
      this.orgInfo.area = data[2].code;
      this.orgAreaText = data[2].name;
      this.showArea = false;
    },
    cancel: function cancel() {
      this.$navigate.to('/pages/mine/index');
    },
    formValidate: function formValidate() {
      var _this = this;

      return new __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        var fileInput = _this.orgInfo.contactPerson && _this.orgInfo.contactInfo && _this.orgInfo.area;

        _this.orgInput[_this.orgInfo.type].forEach(function (element) {
          if (element.required) {
            if (!_this.orgInfo[element.name] || _this.orgInfo[element.name].length < 1) {
              fileInput = false;
            }
          }
        });

        if (_this.orgInfo.type && fileInput) {
          if (_this.orgInfo.type !== 'sqjm' && !_this.orgInfo.name) {
            reject();
          } else {
            resolve();
          }
        } else {
          reject();
        }
      });
    },
    create: function create() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _this2.formValidate();

              case 3:
                if (_this2.orgInfo.type === 'sqjm') {
                  _this2.orgInfo.name = _this2.orgInfo.contactPerson;
                }
                _context.prev = 4;
                _context.next = 7;
                return Object(__WEBPACK_IMPORTED_MODULE_5__api_org__["c" /* create */])(_this2.orgInfo);

              case 7:
                _this2.$navigate.to('/pages/org/audit/index');
                _context.next = 12;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](4);

              case 12:
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t1 = _context['catch'](0);

                wx.showToast({
                  title: '请完善组织信息',
                  icon: 'none'
                });

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[0, 14], [4, 10]]);
      }))();
    }
  }
});

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return orgTypeConstants; });
var orgTypeConstants = [{ value: 'sqzz', text: '社会组织' }, { value: 'sqshzz', text: '社区社会组织' }, { value: 'sqjwh', text: '社区居委会' }, { value: 'sqjm', text: '社区居民' }, { value: 'qy', text: '企业' }];

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "org-create"
  }, [_c('div', {
    staticStyle: {
      "margin-bottom": "128px"
    }
  }, [_c('van-cell-group', {
    attrs: {
      "border": false,
      "mpcomid": '11'
    }
  }, [_c('van-field', {
    attrs: {
      "required": "",
      "readonly": "",
      "disabled": "",
      "value": _vm.orgTypeText,
      "input-align": "right",
      "is-link": _vm.orgInfo.type ? false : true,
      "eventid": '1',
      "mpcomid": '1'
    },
    on: {
      "click": function($event) {
        _vm.showType = true
      }
    }
  }, [_c('div', {
    staticClass: "org-type",
    slot: "label"
  }, [_vm._v("\n          组织类型\n          "), _c('van-icon', {
    staticStyle: {
      "margin-left": "4px"
    },
    attrs: {
      "name": "warning-o",
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.showTypeDesc = true
      }
    }
  })], 1)]), _vm._v(" "), _c('van-field', {
    attrs: {
      "label": "联系人",
      "required": "",
      "value": _vm.orgInfo.contactPerson,
      "placeholder": "请输入联系人",
      "input-align": "right",
      "eventid": '2',
      "mpcomid": '2'
    },
    on: {
      "change": function($event) {
        _vm.onInputChange($event, 'contactPerson')
      }
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "label": "联系方式",
      "required": "",
      "value": _vm.orgInfo.contactInfo,
      "placeholder": "请输入联系方式",
      "input-align": "right",
      "eventid": '3',
      "mpcomid": '3'
    },
    on: {
      "change": function($event) {
        _vm.onInputChange($event, 'contactInfo')
      }
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "label": "所属区域",
      "required": "",
      "disabled": "",
      "readonly": "",
      "input-align": "right",
      "value": _vm.orgAreaText,
      "is-link": _vm.orgInfo.area ? false : true,
      "eventid": '4',
      "mpcomid": '4'
    },
    on: {
      "click": function($event) {
        _vm.showArea = true
      }
    }
  }), _vm._v(" "), (_vm.orgInfo.type) ? [_vm._l((_vm.orgInput[_vm.orgInfo.type]), function(item, index) {
    return [(item.type === 'text') ? _c('van-field', {
      key: index,
      attrs: {
        "label": item.label,
        "value": _vm.orgInfo[item.name],
        "placeholder": item.placeholder || '请输入' + item.label,
        "input-align": "right",
        "required": "",
        "eventid": '5_' + index,
        "mpcomid": '5_' + index
      },
      on: {
        "change": function($event) {
          _vm.onInputChange($event, item.name)
        }
      }
    }) : _vm._e(), _vm._v(" "), (item.type === 'file') ? [_c('van-field', {
      attrs: {
        "label": item.label,
        "disabled": "",
        "readonly": "",
        "required": item.required,
        "input-align": "right",
        "title-width": "256px",
        "border": false,
        "mpcomid": '6_' + index
      }
    }), _vm._v(" "), _c('div', {
      staticStyle: {
        "padding": "10px 16px",
        "padding-top": "0",
        "background-color": "#ffffff"
      }
    }, [_c('uploader', {
      attrs: {
        "files": _vm.orgInfo[item.name],
        "value": item.name,
        "max": 3,
        "eventid": '6_' + index,
        "mpcomid": '7_' + index
      },
      on: {
        "afterRead": _vm.afterRead,
        "delete": _vm.afterDelete
      }
    })], 1)] : _vm._e()]
  })] : _vm._e()], 2)], 1), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  }, [_c('van-row', {
    attrs: {
      "gutter": "20",
      "mpcomid": '16'
    }
  }, [_c('van-col', {
    staticClass: "cancel-button",
    staticStyle: {
      "text-align": "right"
    },
    attrs: {
      "span": "12",
      "mpcomid": '13'
    }
  }, [_c('van-button', {
    attrs: {
      "round": "",
      "eventid": '7',
      "mpcomid": '12'
    },
    on: {
      "click": _vm.cancel
    }
  }, [_c('div', {
    staticStyle: {
      "width": "128px"
    }
  }, [_vm._v("取消")])])], 1), _vm._v(" "), _c('van-col', {
    staticClass: "next-button",
    staticStyle: {
      "text-align": "left"
    },
    attrs: {
      "span": "12",
      "mpcomid": '15'
    }
  }, [_c('van-button', {
    attrs: {
      "round": "",
      "color": "#E61F1C",
      "eventid": '8',
      "mpcomid": '14'
    },
    on: {
      "click": _vm.create
    }
  }, [_c('div', {
    staticStyle: {
      "width": "128px"
    }
  }, [_vm._v("下一步")])])], 1)], 1)], 1), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.showType,
      "position": "bottom",
      "eventid": '10',
      "mpcomid": '18'
    },
    on: {
      "close": function($event) {
        _vm.showType = false
      }
    }
  }, [_c('van-picker', {
    attrs: {
      "columns": _vm.orgTypeConstants,
      "show-toolbar": "",
      "eventid": '9',
      "mpcomid": '17'
    },
    on: {
      "confirm": _vm.confirmType,
      "cancel": function($event) {
        _vm.showType = false
      }
    }
  })], 1), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.showArea,
      "position": "bottom",
      "eventid": '12',
      "mpcomid": '20'
    },
    on: {
      "close": function($event) {
        _vm.showArea = false
      }
    }
  }, [_c('van-area', {
    attrs: {
      "area-list": _vm.areaList,
      "eventid": '11',
      "mpcomid": '19'
    },
    on: {
      "confirm": _vm.confirmArea,
      "cancel": function($event) {
        _vm.showArea = false
      }
    }
  })], 1), _vm._v(" "), _c('van-dialog', {
    attrs: {
      "use-slot": "",
      "show": _vm.showTypeDesc,
      "eventid": '13',
      "mpcomid": '21'
    },
    on: {
      "confirm": function($event) {
        _vm.showTypeDesc = false
      }
    }
  }, [_c('div', {
    staticClass: "type-desc"
  }, [_vm._v("\n      社区居委会："), _c('br'), _vm._v("\n      备注定义：社区居民委员会是居民自我管理、自我教育、自我服务的基层群众性自治组织。"), _c('br'), _vm._v("\n      注册信息："), _c('br'), _vm._v("\n      *社区（居委）名称：/*社区（居委）地址：/*社区（居委）联系人："), _c('br'), _vm._v("\n      /*社区（居委）联系方式："), _c('br'), _vm._v("\n      社会组织："), _c('br'), _vm._v("\n      备注定义：社会组织是指相对于政党、政府等传统组织形态之外的各类民进性的社会组织，主要包括社会团体、基金会、民办非企业单位、部分中介组织以及社区活动团体。"), _c('br'), _vm._v("\n      注册信息："), _c('br'), _vm._v("\n      *组织名称：/*注册地址：/*登记证书：/*组织联系人：/*组织联系方式："), _c('br'), _vm._v("\n      社区社会组织："), _c('br'), _vm._v("\n      备注定义：是指由社区组织或个人在社区（镇、街道）范围内单独或联合举办的、在社区范围内开展活动的、满足社区居民不同需求的民间自发组织。"), _c('br'), _vm._v("\n      注册信息："), _c('br'), _vm._v("\n      *组织名称：/*所属社区：/*备案证或者负责人身份证号：/组织联系人："), _c('br'), _vm._v("\n      /组织联系方式："), _c('br'), _vm._v("\n      社区居民："), _c('br'), _vm._v("\n      备注定义：具有本社区房产的自然人业主或者居住在本社区的自然人。"), _c('br'), _vm._v("\n      *姓名：/*性别：/*身份证号：/*联系方式：\n    ")], 1)])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-771ec7ec", esExports)
  }
}

/***/ })

},[364]);