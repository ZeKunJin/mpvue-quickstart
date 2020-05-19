const homeRouter = [
  {
    path: '/pages/home/index',
    config: {
      usingComponents: {
        'van-popup': '/static/vant/popup/index',
        'van-dialog': '/static/vant/dialog/index',
        'van-progress': '/static/vant/progress/index',
        'van-tab': '/static/vant/tab/index',
        'van-tabs': '/static/vant/tabs/index',
        'van-button': '/static/vant/button/index',
        'van-icon': '/static/vant/icon/index'
      }
    }
  },
  {
    path: '/pages/home/ad/index'
  }
]

const requireRouter = [
  {
    path: '/pages/search/result/index',
    config: {
      navigationBarTitleText: '需求清单',
      usingComponents: {
        'van-tab': '/static/vant/tab/index',
        'van-tabs': '/static/vant/tabs/index',
        'van-sidebar': '/static/vant/sidebar/index',
        'van-sidebar-item': '/static/vant/sidebar-item/index',
        'van-button': '/static/vant/button/index',
        'van-popup': '/static/vant/popup/index',
        'van-icon': '/static/vant/icon/index',
        'van-area': '/static/vant/area/index',
        'van-cell': '/static/vant/cell/index',
        'van-cell-group': '/static/vant/cell-group/index'
      }
    }
  },
  {
    path: '/pages/require/index',
    config: {
      navigationBarTitleText: '需求清单',
      usingComponents: {
        'van-tab': '/static/vant/tab/index',
        'van-tabs': '/static/vant/tabs/index',
        'van-sidebar': '/static/vant/sidebar/index',
        'van-sidebar-item': '/static/vant/sidebar-item/index',
        'van-button': '/static/vant/button/index',
        'van-search': '/static/vant/search/index',
        'van-popup': '/static/vant/popup/index',
        'van-icon': '/static/vant/icon/index',
        'van-area': '/static/vant/area/index',
        'van-dialog': '/static/vant/dialog/index',
        'van-cell': '/static/vant/cell/index',
        'van-cell-group': '/static/vant/cell-group/index'
      }
    }
  },
  {
    path: 'pages/require/detail/index',
    config: {
      navigationBarTitleText: '需求详情',
      usingComponents: {
        'van-progress': '/static/vant/progress/index',
        'van-image': '/static/vant/image/index',
        'van-icon': '/static/vant/icon/index',
        'van-overlay': '/static/vant/overlay/index',
        'van-button': '/static/vant/button/index',
        'van-divider': '/static/vant/divider/index'
      }
    }
  },
  {
    path: '/pages/require/supply/index',
    config: {
      navigationBarTitleText: '我要对接',
      usingComponents: {
        'van-popup': '/static/vant/popup/index',
        'van-datetime-picker': '/static/vant/datetime-picker/index',
        'van-field': '/static/vant/field/index',
        'van-button': '/static/vant/button/index'
      }
    }
  },
  {
    path: '/pages/require/complete/index',
    config: {
      navigationBarTitleText: '我要对接',
      usingComponents: {
        'van-button': '/static/vant/button/index',
        'van-icon': '/static/vant/icon/index'
      }
    }
  },
  {
    path: '/pages/require/create/index',
    config: {
      navigationBarTitleText: '发布需求',
      usingComponents: {
        'van-icon': '/static/vant/icon/index',
        'van-popup': '/static/vant/popup/index',
        'van-picker': '/static/vant/picker/index',
        'van-uploader': '/static/vant/uploader/index',
        'van-field': '/static/vant/field/index',
        'van-button': '/static/vant/button/index',
        'van-row': '/static/vant/row/index',
        'van-col': '/static/vant/col/index',
        'van-checkbox': '/static/vant/checkbox/index',
        'van-checkbox-group': '/static/vant/checkbox-group/index',
        'van-cell': '/static/vant/cell/index',
        'van-cell-group': '/static/vant/cell-group/index'
      }
    }
  },
  {
    path: 'pages/require/region/index',
    config: {
      navigationBarTitleText: '选择区域',
      usingComponents: {
        'van-dialog': '/static/vant/dialog/index',
        'van-button': '/static/vant/button/index',
        'van-popup': '/static/vant/popup/index',
        'van-picker': '/static/vant/picker/index',
        'van-row': '/static/vant/row/index',
        'van-col': '/static/vant/col/index',
        'van-field': '/static/vant/field/index',
        'van-cell': '/static/vant/cell/index',
        'van-cell-group': '/static/vant/cell-group/index'
      }
    }
  },
  {
    path: 'pages/require/map/index',
    config: {
      navigationBarTitleText: '地图',
      usingComponents: {
        'van-search': '/static/vant/search/index',
        'van-popup': '/static/vant/popup/index',
        'van-icon': '/static/vant/icon/index',
        'van-area': '/static/vant/area/index',
        'van-cell': '/static/vant/cell/index',
        'van-cell-group': '/static/vant/cell-group/index'
      }
    }
  },
  {
    path: 'pages/require/agreement/index',
    config: {
      navigationBarTitleText: '用户使用协议'
    }
  },
  {
    path: 'pages/require/comment/index',
    config: {
      navigationBarTitleText: '评论'
    }
  },
  {
    path: 'pages/require/comment/create/index',
    config: {
      navigationBarTitleText: '评论',
      usingComponents: {
        'van-uploader': '/static/vant/uploader/index'
      }
    }
  }
]

const mineRouter = [
  {
    path: 'pages/mine/index',
    config: {
      usingComponents: {
        'van-image': '/static/vant/image/index',
        'van-icon': '/static/vant/icon/index',
        'van-tag': '/static/vant/tag/index',
        'van-cell': '/static/vant/cell/index',
        'van-cell-group': '/static/vant/cell-group/index'
      }
    }
  },
  {
    path: 'pages/mine/account/index',
    config: {
      navigationBarTitleText: '账号信息',
      usingComponents: {
        'van-dialog': '/static/vant/dialog/index',
        'van-image': '/static/vant/image/index',
        'van-button': '/static/vant/button/index',
        'van-cell': '/static/vant/cell/index',
        'van-cell-group': '/static/vant/cell-group/index'
      }
    }
  },
  {
    path: 'pages/mine/org/index',
    config: {
      navigationBarTitleText: '我的组织',
      usingComponents: {
        'van-button': '/static/vant/button/index',
        'van-tag': '/static/vant/tag/index',
        'van-cell': '/static/vant/cell/index',
        'van-cell-group': '/static/vant/cell-group/index'
      }
    }
  },
  {
    path: 'pages/mine/org/detail/index',
    config: {
      navigationBarTitleText: '我的组织',
      usingComponents: {
        'van-tag': '/static/vant/tag/index',
        'van-dialog': '/static/vant/dialog/index',
        'van-button': '/static/vant/button/index',
        'van-tab': '/static/vant/tab/index',
        'van-tabs': '/static/vant/tabs/index',
        'van-cell': '/static/vant/cell/index',
        'van-swipe-cell': '/static/vant/swipe-cell/index',
        'van-cell-group': '/static/vant/cell-group/index'
      }
    }
  },
  {
    path: 'pages/mine/require/index',
    config: {
      navigationBarTitleText: '我的需求',
      usingComponents: {
        'van-popup': '/static/vant/popup/index',
        'van-icon': '/static/vant/icon/index',
        'van-row': '/static/vant/row/index',
        'van-col': '/static/vant/col/index',
        'van-tab': '/static/vant/tab/index',
        'van-tabs': '/static/vant/tabs/index',
        'van-picker': '/static/vant/picker/index',
        'van-button': '/static/vant/button/index',
        'van-slider': '/static/vant/slider/index',
        'van-dialog': '/static/vant/dialog/index'
      }
    }
  },
  {
    path: 'pages/mine/require/detail/index',
    config: {
      navigationBarTitleText: '对接清单',
      usingComponents: {
        'van-row': '/static/vant/row/index',
        'van-col': '/static/vant/col/index'
      }
    }
  },
  {
    path: '/pages/mine/require/edit/index',
    config: {
      navigationBarTitleText: '需求编辑',
      usingComponents: {
        'van-icon': '/static/vant/icon/index',
        'van-popup': '/static/vant/popup/index',
        'van-picker': '/static/vant/picker/index',
        'van-uploader': '/static/vant/uploader/index',
        'van-field': '/static/vant/field/index',
        'van-button': '/static/vant/button/index',
        'van-row': '/static/vant/row/index',
        'van-col': '/static/vant/col/index',
        'van-checkbox': '/static/vant/checkbox/index',
        'van-checkbox-group': '/static/vant/checkbox-group/index',
        'van-cell': '/static/vant/cell/index',
        'van-cell-group': '/static/vant/cell-group/index'
      }
    }
  },
  {
    path: 'pages/mine/require/region/index',
    config: {
      navigationBarTitleText: '选择区域',
      usingComponents: {
        'van-dialog': '/static/vant/dialog/index',
        'van-button': '/static/vant/button/index',
        'van-popup': '/static/vant/popup/index',
        'van-picker': '/static/vant/picker/index',
        'van-row': '/static/vant/row/index',
        'van-col': '/static/vant/col/index',
        'van-field': '/static/vant/field/index',
        'van-cell': '/static/vant/cell/index',
        'van-cell-group': '/static/vant/cell-group/index'
      }
    }
  },
  {
    path: 'pages/mine/require/map/index',
    config: {
      navigationBarTitleText: '地图',
      usingComponents: {
        'van-search': '/static/vant/search/index',
        'van-popup': '/static/vant/popup/index',
        'van-icon': '/static/vant/icon/index',
        'van-area': '/static/vant/area/index',
        'van-cell': '/static/vant/cell/index',
        'van-cell-group': '/static/vant/cell-group/index'
      }
    }
  },
  {
    path: 'pages/mine/supply/index',
    config: {
      navigationBarTitleText: '对接列表',
      usingComponents: {
        'van-row': '/static/vant/row/index',
        'van-col': '/static/vant/col/index'
      }
    }
  },
  {
    path: 'pages/mine/help/index',
    config: {
      navigationBarTitleText: '帮助文档'
    }
  }
]

const orgRouter = [
  {
    path: 'pages/org/index',
    config: {
      navigationBarTitleText: '加入/创建组织',
      usingComponents: {
        'van-button': '/static/vant/button/index',
        'van-search': '/static/vant/search/index',
        'van-popup': '/static/vant/popup/index',
        'van-icon': '/static/vant/icon/index',
        'van-area': '/static/vant/area/index',
        'van-cell': '/static/vant/cell/index',
        'van-cell-group': '/static/vant/cell-group/index'
      }
    }
  },
  {
    path: 'pages/org/create/index',
    config: {
      navigationBarTitleText: '创建组织',
      usingComponents: {
        'van-area': '/static/vant/area/index',
        'van-icon': '/static/vant/icon/index',
        'van-dialog': '/static/vant/dialog/index',
        'van-button': '/static/vant/button/index',
        'van-popup': '/static/vant/popup/index',
        'van-row': '/static/vant/row/index',
        'van-col': '/static/vant/col/index',
        'van-uploader': '/static/vant/uploader/index',
        'van-picker': '/static/vant/picker/index',
        'van-field': '/static/vant/field/index',
        'van-cell': '/static/vant/cell/index',
        'van-cell-group': '/static/vant/cell-group/index'
      }
    }
  },
  {
    path: 'pages/org/audit/index',
    config: {
      navigationBarTitleText: '创建组织',
      usingComponents: {
        'van-button': '/static/vant/button/index',
        'van-icon': '/static/vant/icon/index'
      }
    }
  },
  {
    path: 'pages/org/apply/index',
    config: {
      navigationBarTitleText: '加入/创建组织',
      usingComponents: {
        'van-button': '/static/vant/button/index'
      }
    }
  }
]

module.exports = {
  pages: [
    ...homeRouter,
    ...requireRouter,
    ...mineRouter,
    ...orgRouter,

    {
      path: 'pages/login/index',
      config: {
        usingComponents: {
          'van-button': '/static/vant/button/index'
        }
      }
    },
    {
      path: 'pages/register/index',
      config: {
        usingComponents: {
          'van-button': '/static/vant/button/index',
          'van-checkbox': '/static/vant/checkbox/index'
        }
      }
    },
    {
      path: 'pages/register/agreement/index',
      config: {
        navigationBarTitleText: '用户使用协议'
      }
    },
    {
      path: 'pages/search/index',
      config: {
        usingComponents: {
          'van-search': '/static/vant/search/index',
          'van-cell': '/static/vant/cell/index',
          'van-cell-group': '/static/vant/cell-group/index'
        }
      }
    }
  ],
  window: {
    navigationBarTitleText: '红哨子',
    navigationBarBackgroundColor: '#ffffff',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#999',
    backgroundColor: '#ffffff',
    selectedColor: '#333333',
    borderStyle: 'white',
    list: [
      {
        text: '首页',
        pagePath: 'pages/home/index',
        iconPath: 'static/tabs/home.png',
        selectedIconPath: 'static/tabs/home-active.png'
      },
      {
        text: '需求',
        pagePath: 'pages/require/index',
        iconPath: 'static/tabs/require.png',
        selectedIconPath: 'static/tabs/require-active.png'
      },
      {
        text: '我的',
        pagePath: 'pages/mine/index',
        iconPath: 'static/tabs/mine.png',
        selectedIconPath: 'static/tabs/mine-active.png'
      }
    ],
    position: 'bottom'
  },
  permission: {
    'scope.userLocation': {
      'desc': '你的位置信息将用于小程序位置接口的效果展示'
    }
  }
}
