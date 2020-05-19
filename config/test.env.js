var merge = require('webpack-merge')
var devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"test"',
  APP_API: '"http://yapi.demo.qunar.com/mock/963"'
})
