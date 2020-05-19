var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  APP_API: '"https://api.fy.zhengdaoyixing.com"',
  MAP_API: '"https://apis.map.qq.com/ws"',
  SOCKET_API: '"wss://api.fy.zhengdaoyixing.com/websocket"'
})
