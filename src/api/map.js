import request from '@/utils/request'

const baseURL = process.env.MAP_API
const key = '4EPBZ-SMUEW-5MVRM-R4PEN-6T6Y6-C4F2N'

export const geocoder = (params) => request.get('/geocoder/v1', { ...params, key }, { baseURL })

export const district = (params) => request.get('/district/v1/search', { ...params, key }, { baseURL })

export const suggestion = (params) => request.get('/place/v1/suggestion', { ...params, key }, { baseURL })

export const search = (params) => request.get('/place/v1/search', { ...params, key }, { baseURL })
