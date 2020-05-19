import request from '@/utils/request'

const baseURL = process.env.APP_API

export const regionInfo = (params) => request.get('/region/regionInfo', params, { baseURL })

export const regionText = (params) => request.get('/region/info', params, { baseURL })
