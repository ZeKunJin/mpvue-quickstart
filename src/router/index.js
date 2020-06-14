module.exports = {
  pages: [
    {
      path: 'pages/home/index'
    },
    {
      path: 'pages/mine/index'
    }
  ],
  window: {
    navigationBarTitleText: 'mpvue-quickstart',
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
