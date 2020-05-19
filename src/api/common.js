import request from '@/utils/request'

const baseURL = process.env.APP_API

// 获取验证码
export const verify = (params) => request.get('/user/verifyCode', params, { baseURL })

// 获取社区需求统计信息
export const data = () => request.get('/index', {}, { baseURL })

// 获取需求二维码
export const qrcode = (data) => request.post('/common/qrCode', data, { baseURL })

// 获取微信openid
export const openid = (params) => request.get('/common/wxLogin', params, { baseURL })

// 文件上传
export const upload = (filePath) => {
  return new Promise((resolve) => {
    wx.uploadFile({
      url: baseURL + '/common/upload',
      filePath,
      name: 'file',
      success (res) {
        resolve(res)
      }
    })
  })
}
