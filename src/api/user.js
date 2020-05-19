import request from '@/utils/request'

const baseURL = process.env.APP_API

// 登陆
export const login = (data) => request.post('/user/login', data, { baseURL })

// 用户注册
export const register = (data) => request.post('/user/register', data, { baseURL })

// 获取用户信息
export const info = (params = {}) => request.get('/user/info', params, { baseURL })

// 修改手机号
export const edit = (data) => request.post('/user/changePhone', data, { baseURL })
