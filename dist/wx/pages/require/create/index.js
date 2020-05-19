require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonp([13],{

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_abc6b0ae_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(239);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(230)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_abc6b0ae_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/require/create/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-abc6b0ae", Component.options)
  } else {
    hotAPI.reload("data-v-abc6b0ae", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 230:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_assign__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Uploader__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Editor__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api_org__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__api_require__ = __webpack_require__(13);






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Uploader: __WEBPACK_IMPORTED_MODULE_6__components_Uploader__["a" /* default */],
    Editor: __WEBPACK_IMPORTED_MODULE_7__components_Editor__["a" /* default */]
  },

  data: function data() {
    return {
      requirement: {},
      typeChildrenResult: [],
      files: [],
      orgList: [],
      orgText: '请选择组织',
      levelList: [],
      levelText: '请选择时效',
      typeList: [],
      typeText: '请选择需求类型',
      typeChildrenList: [],
      typeChildrenTitle: '',
      typeChildrenText: '请选择需求类型',
      showOrg: false,
      showLevel: false,
      showType: false,
      showTypeChildren: false,
      disabled: false
    };
  },
  mounted: function mounted() {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_assign___default()(this, this.$options.data());
    this.initRequirement();
    this.initEditor();
    this.initLevel();
    this.fetch();
  },


  methods: {
    initRequirement: function initRequirement() {
      this.requirement.title = this.$store.state.requirement.title;
      this.requirement.presentDescription = this.$store.state.requirement.desc;
    },
    initEditor: function initEditor() {
      this.$refs.editor.init();
    },
    initLevel: function initLevel() {
      for (var i = 1; i < 31; i++) {
        this.levelList.push({
          value: String(i),
          text: String(i) + '天'
        });
      }
    },
    fetch: function fetch() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _ref, _ref2, orgRes, typeRes;

        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a.all([Object(__WEBPACK_IMPORTED_MODULE_8__api_org__["l" /* userOrgList */])({
                  page: 1,
                  limit: 100,
                  userId: _this.$store.getters.id
                }), Object(__WEBPACK_IMPORTED_MODULE_9__api_require__["m" /* typeList */])({
                  page: 1,
                  limit: 100
                })]);

              case 3:
                _ref = _context.sent;
                _ref2 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray___default()(_ref, 2);
                orgRes = _ref2[0];
                typeRes = _ref2[1];


                _this.initOrgColumns(orgRes.data.rows);
                _this.initType(typeRes.data.rows);
                _context.next = 13;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](0);

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 11]]);
      }))();
    },
    initOrgColumns: function initOrgColumns(value) {
      var _this2 = this;

      this.orgList = [];
      value.forEach(function (element) {
        if (Number(element.status) === 2) _this2.orgList.push({
          value: element.orgId,
          text: element.orgName
        });
      });
      if (this.orgList.length < 1) {
        this.disabled = true;
        wx.showToast({
          title: '请先创建或加入组织',
          icon: 'none'
        });
      }
    },
    initType: function initType(value) {
      var _this3 = this;

      this.typeList = [];
      value.forEach(function () {
        var _ref3 = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2(element) {
          return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _this3.typeList.push({
                    value: element.id,
                    text: element.remark
                  });

                case 1:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this3);
        }));

        return function (_x) {
          return _ref3.apply(this, arguments);
        };
      }());
    },
    onChange: function onChange(event, value) {
      this.requirement[value] = event.mp.detail;
      this.$store.dispatch('requirement/setRequirement', this.requirement);
    },
    afterRead: function afterRead(event) {
      this.requirement.cover = event.url;
      this.files.push({
        url: event.url
      });
    },
    afterDelete: function afterDelete(event) {
      this.requirement.cover = '';
      this.files.splice(event.index, 1);
    },
    confirmOrg: function confirmOrg(event) {
      this.requirement.orgId = event.mp.detail.value.value;
      this.orgText = event.mp.detail.value.text;
      this.showOrg = false;
    },
    confirmLevel: function confirmLevel(event) {
      this.requirement.level = event.mp.detail.value.value;
      this.levelText = event.mp.detail.value.text;
      this.showLevel = false;
    },
    confirmType: function confirmType(event) {
      this.requirement.type = event.mp.detail.value.value;
      this.typeText = event.mp.detail.value.text;
      this.typeChildrenTitle = this.typeText;
      this.initTypeChildren();
      this.getTypeChildrenList(this.requirement.type);
      this.showType = false;
    },
    initTypeChildren: function initTypeChildren() {
      this.typeChildrenList = [];
      this.requirement.demandType = '';
      this.typeChildrenText = '请选择需求类型';
    },
    confirmTypeChildren: function confirmTypeChildren(event) {
      this.requirement.demandType = event.mp.detail.value.value;
      this.typeChildrenText = event.mp.detail.value.text;
      this.showTypeChildren = false;
    },
    onTypeChildrenChange: function onTypeChildrenChange(event) {
      var arr = [];
      var text = [];
      this.typeChildrenResult = event.mp.detail;
      event.mp.detail.forEach(function (element) {
        arr.push(element.split('/')[0]);
        text.push(element.split('/')[1]);
      });
      this.requirement.demandType = arr.join(',');
      this.typeChildrenText = text.length > 0 ? text.join(',') : '请选择需求类型';
    },
    getTypeChildrenList: function getTypeChildrenList(dictId) {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var res;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_9__api_require__["b" /* detailList */])({
                  page: 1,
                  limit: 100,
                  dictId: dictId
                });

              case 2:
                res = _context3.sent;

                res.data.rows.forEach(function (element) {
                  _this4.typeChildrenList.push({
                    value: element.value,
                    text: element.label
                  });
                });

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this4);
      }))();
    },
    onTextInput: function onTextInput(event) {
      this.requirement.description = event;
    },
    onCheck: function onCheck(event, index) {
      var checkbox = this.$mp.page.selectComponent('.checkboxes-' + index);
      checkbox.toggle();
    },
    noop: function noop() {},
    validate: function validate() {
      var _this5 = this;

      return new __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        var data = _this5.requirement;
        debugger;
        if (data.demandType && data.description && data.level && data.orgId && data.title && data.requirementOrgName && data.type && data.contactPerson && data.contactInfo && data.presentDescription) {
          resolve();
        } else {
          reject();
        }
      });
    },
    next: function next() {
      var _this6 = this;

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee4() {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _this6.validate();

              case 3:
                try {
                  _this6.requirement.demandPeople = Number(_this6.requirement.demandPeople);
                  _this6.$navigate.to('/pages/require/region/index', {
                    requirement: encodeURIComponent(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(_this6.requirement))
                  });
                } catch (err) {
                  // on error
                }
                _context4.next = 9;
                break;

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4['catch'](0);

                wx.showToast({
                  title: '请完善需求信息',
                  icon: 'none'
                });

              case 9:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this6, [[0, 6]]);
      }))();
    },
    back: function back() {
      this.$navigate.back();
    },
    toOrg: function toOrg() {
      this.$navigate.to('/pages/org/index');
    }
  }
});

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "create-require"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('van-cell-group', {
    attrs: {
      "border": false,
      "mpcomid": '17'
    }
  }, [_c('van-cell', {
    attrs: {
      "use-label-slot": "",
      "mpcomid": '1'
    }
  }, [_c('div', {
    slot: "title"
  }, [_vm._v("\n          需求封面\n        ")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-top": "9px"
    }
  }, [_c('uploader', {
    attrs: {
      "max": 1,
      "files": _vm.files,
      "value": "cover",
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "afterRead": _vm.afterRead,
      "delete": _vm.afterDelete
    }
  })], 1)]), _vm._v(" "), _c('van-field', {
    attrs: {
      "label": "需求标题",
      "required": "",
      "value": _vm.requirement.title,
      "placeholder": "请输入需求标题",
      "input-align": "right",
      "eventid": '1',
      "mpcomid": '2'
    },
    on: {
      "change": function($event) {
        _vm.onChange($event, 'title')
      }
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "label": "需求方",
      "required": "",
      "value": _vm.requirement.requirementOrgName,
      "placeholder": "请输入需求方",
      "input-align": "right",
      "eventid": '2',
      "mpcomid": '3'
    },
    on: {
      "change": function($event) {
        _vm.onChange($event, 'requirementOrgName')
      }
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "label": "联系人",
      "required": "",
      "value": _vm.requirement.contactPerson,
      "placeholder": "请输入联系人",
      "input-align": "right",
      "eventid": '3',
      "mpcomid": '4'
    },
    on: {
      "change": function($event) {
        _vm.onChange($event, 'contactPerson')
      }
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "label": "联系方式",
      "required": "",
      "value": _vm.requirement.contactInfo,
      "placeholder": "请输入联系方式",
      "input-align": "right",
      "eventid": '4',
      "mpcomid": '5'
    },
    on: {
      "change": function($event) {
        _vm.onChange($event, 'contactInfo')
      }
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "label": "发布方",
      "readonly": "",
      "disabled": "",
      "required": "",
      "value": _vm.orgText,
      "input-align": "right",
      "is-link": _vm.requirement.orgId ? false : true,
      "eventid": '5',
      "mpcomid": '6'
    },
    on: {
      "click": function($event) {
        _vm.showOrg = true
      }
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "label": "发布有效期",
      "readonly": "",
      "disabled": "",
      "required": "",
      "value": _vm.levelText,
      "input-align": "right",
      "is-link": _vm.requirement.level ? false : true,
      "eventid": '6',
      "mpcomid": '7'
    },
    on: {
      "click": function($event) {
        _vm.showLevel = true
      }
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "label": "需求类型",
      "readonly": "",
      "disabled": "",
      "required": "",
      "input-align": "right",
      "value": _vm.typeText,
      "is-link": _vm.requirement.type ? false : true,
      "eventid": '7',
      "mpcomid": '8'
    },
    on: {
      "click": function($event) {
        _vm.showType = true
      }
    }
  }), _vm._v(" "), (_vm.requirement.type) ? _c('van-field', {
    attrs: {
      "readonly": "",
      "disabled": "",
      "required": "",
      "input-align": "right",
      "label": _vm.typeChildrenTitle + '类型',
      "value": _vm.typeChildrenText,
      "is-link": _vm.requirement.demandType ? false : true,
      "eventid": '8',
      "mpcomid": '9'
    },
    on: {
      "click": function($event) {
        _vm.showTypeChildren = true
      }
    }
  }) : _vm._e(), _vm._v(" "), _c('van-field', {
    attrs: {
      "label": "现状描述",
      "required": "",
      "value": _vm.requirement.presentDescription,
      "placeholder": "请输入现状描述",
      "input-align": "right",
      "eventid": '9',
      "mpcomid": '10'
    },
    on: {
      "change": function($event) {
        _vm.onChange($event, 'presentDescription')
      }
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "label": "需求目标",
      "value": _vm.requirement.demandTarget,
      "placeholder": "请输入需求目标",
      "input-align": "right",
      "eventid": '10',
      "mpcomid": '11'
    },
    on: {
      "change": function($event) {
        _vm.onChange($event, 'demandTarget')
      }
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "label": "需求人数",
      "value": _vm.requirement.demandPeople,
      "type": "number",
      "placeholder": "请输入需求人数",
      "input-align": "right",
      "eventid": '11',
      "mpcomid": '12'
    },
    on: {
      "change": function($event) {
        _vm.onChange($event, 'demandPeople')
      }
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "label": "人员资质/条件",
      "title-width": "128px",
      "value": _vm.requirement.personResources,
      "placeholder": "请输入人员资质/条件",
      "input-align": "right",
      "eventid": '12',
      "mpcomid": '13'
    },
    on: {
      "change": function($event) {
        _vm.onChange($event, 'personResources')
      }
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "label": "可提供资源",
      "value": _vm.requirement.adviceResources,
      "placeholder": "请输入可提供资源",
      "input-align": "right",
      "eventid": '13',
      "mpcomid": '14'
    },
    on: {
      "change": function($event) {
        _vm.onChange($event, 'adviceResources')
      }
    }
  }), _vm._v(" "), _c('van-field', {
    attrs: {
      "label": "需求内容",
      "required": "",
      "disabled": "",
      "readonly": "",
      "border": false,
      "mpcomid": '15'
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "padding": "10px 16px",
      "padding-top": "0"
    }
  }, [_c('editor', {
    ref: "editor",
    attrs: {
      "eventid": '14',
      "mpcomid": '16'
    },
    on: {
      "input": _vm.onTextInput
    }
  })], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "100vw",
      "height": "128px",
      "background-color": "#fff"
    }
  })], 1), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.showOrg,
      "position": "bottom",
      "eventid": '16',
      "mpcomid": '19'
    },
    on: {
      "close": function($event) {
        _vm.showOrg = false
      }
    }
  }, [_c('van-picker', {
    attrs: {
      "columns": _vm.orgList,
      "show-toolbar": "",
      "eventid": '15',
      "mpcomid": '18'
    },
    on: {
      "confirm": _vm.confirmOrg,
      "cancel": function($event) {
        _vm.showOrg = false
      }
    }
  })], 1), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.showLevel,
      "position": "bottom",
      "eventid": '18',
      "mpcomid": '21'
    },
    on: {
      "close": function($event) {
        _vm.showLevel = false
      }
    }
  }, [_c('van-picker', {
    attrs: {
      "columns": _vm.levelList,
      "default-index": 29,
      "show-toolbar": "",
      "eventid": '17',
      "mpcomid": '20'
    },
    on: {
      "confirm": _vm.confirmLevel,
      "cancel": function($event) {
        _vm.showLevel = false
      }
    }
  })], 1), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.showType,
      "position": "bottom",
      "eventid": '20',
      "mpcomid": '23'
    },
    on: {
      "close": function($event) {
        _vm.showType = false
      }
    }
  }, [_c('van-picker', {
    attrs: {
      "columns": _vm.typeList,
      "show-toolbar": "",
      "eventid": '19',
      "mpcomid": '22'
    },
    on: {
      "confirm": _vm.confirmType,
      "cancel": function($event) {
        _vm.showType = false
      }
    }
  })], 1), _vm._v(" "), _c('van-popup', {
    attrs: {
      "show": _vm.showTypeChildren,
      "position": "bottom",
      "eventid": '24',
      "mpcomid": '28'
    },
    on: {
      "close": function($event) {
        _vm.showTypeChildren = false
      }
    }
  }, [_c('van-checkbox-group', {
    attrs: {
      "value": _vm.typeChildrenResult,
      "eventid": '23',
      "mpcomid": '27'
    },
    on: {
      "change": _vm.onTypeChildrenChange
    }
  }, [_c('van-cell-group', {
    attrs: {
      "mpcomid": '26'
    }
  }, _vm._l((_vm.typeChildrenList), function(item, index) {
    return _c('van-cell', {
      key: item.value,
      attrs: {
        "title": item.text,
        "clickable": "",
        "eventid": '22_' + index,
        "mpcomid": '25_' + index
      },
      on: {
        "click": function($event) {
          _vm.onCheck($event, index)
        }
      }
    }, [_c('van-checkbox', {
      class: 'checkboxes-' + index,
      attrs: {
        "name": item.value + '/' + item.text,
        "checked-color": "#E61F1C",
        "eventid": '21_' + index,
        "mpcomid": '24_' + index
      },
      on: {
        "tap": function($event) {
          $event.stopPropagation();
          _vm.noop($event)
        }
      },
      slot: "right-icon"
    })], 1)
  }))], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  }, [_c('van-row', {
    attrs: {
      "gutter": "20",
      "mpcomid": '34'
    }
  }, [_c('van-col', {
    staticClass: "cancel-button",
    staticStyle: {
      "text-align": "right"
    },
    attrs: {
      "span": "12",
      "mpcomid": '30'
    }
  }, [_c('van-button', {
    attrs: {
      "round": "",
      "eventid": '25',
      "mpcomid": '29'
    },
    on: {
      "click": _vm.back
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
      "mpcomid": '33'
    }
  }, [(!_vm.disabled) ? _c('van-button', {
    attrs: {
      "round": "",
      "color": "#E61F1C",
      "eventid": '27',
      "mpcomid": '32'
    },
    on: {
      "click": _vm.next
    }
  }, [_c('div', {
    staticStyle: {
      "width": "128px"
    }
  }, [_vm._v("下一步")])]) : _c('van-button', {
    attrs: {
      "round": "",
      "color": "#E61F1C",
      "eventid": '26',
      "mpcomid": '31'
    },
    on: {
      "click": _vm.toOrg
    }
  }, [_c('div', {
    staticStyle: {
      "width": "128px"
    }
  }, [_vm._v("加入/创建主体")])])], 1)], 1)], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-abc6b0ae", esExports)
  }
}

/***/ })

},[346]);