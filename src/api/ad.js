import request from '@/utils/request'

const baseURL = process.env.APP_API

export const adList = (params) => request.get('/banner/list', params, { baseURL })

export const adInfo = (params) => request.get('/banner/detail', params, { baseURL })
