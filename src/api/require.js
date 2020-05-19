import request from '@/utils/request'

const baseURL = process.env.APP_API

export const typeList = (params) => request.get('/demand/typeList', params, { baseURL })

export const detailList = (params) => request.get('/demand/detailList', params, { baseURL })

export const requirementList = (params) => request.get('/requirement/list', params, { baseURL })

export const requirementDetail = (params) => request.get('/requirement/detail', params, { baseURL })

export const requirementPublish = (data) => request.post('/requirement/publish', data, { baseURL })

export const requirementSupply = (data) => request.post('/requirement/supply', data, { baseURL })

export const requirementUpdate = (data) => request.post('/requirement/update', data, { baseURL })

export const supplyList = (params) => request.get('/requirement/supplyList', params, { baseURL })

export const userSupplyList = (params) => request.get('/requirement/userSupplyList', params, { baseURL })

export const nearRequirement = (params) => request.get('/requirement/lately', params, { baseURL })

export const editRequirement = (data) => request.post('/requirement/updateRequirement', data, { baseURL })

export const assignRequirement = (data) => request.post('/requirement/distributeRequirement', data, { baseURL })

export const msgRequirement = (params) => request.get('/requirement/supplyMsgList', params, { baseURL })

// 浏览需求（阅读量）
export const requirementBrowse = (params) => request.get('/requirement/addBrowse', params, { baseURL })
