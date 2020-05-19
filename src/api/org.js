import request from '@/utils/request'

const baseURL = process.env.APP_API

// 创建组织
export const create = (data) => request.post('/org/create', data, { baseURL })

// 全部组织列表
export const list = (params) => request.get('/org/orgList', params, { baseURL })

// 组织详情
export const info = (params) => request.get('/org/orgDetail', params, { baseURL })

// 用户组织列表
export const userOrgList = (params) => request.get('/org/userOrgList', params, { baseURL })

// 组织用户列表
export const orgUserList = (params) => request.get('/org/orgUserList', params, { baseURL })

// 组织申请列表
export const orgApplyList = (params) => request.get('/applyOrg/applyList', params, { baseURL })

// 组织用户申请列表
export const orgUserApplyList = (params) => request.get('/applyOrg/userApplyList', params, { baseURL })

// 用户申请组织
export const apply = (data) => request.post('/applyOrg/applyIn', data, { baseURL })

// 组织审核申请
export const applyAudit = (params) => request.get('/applyOrg/checkApply', params, { baseURL })

// 删除组织用户
export const removeUser = (params) => request.get('/org/removeOrgUser', params, { baseURL })

// 审核信息数量
export const hasApply = () => request.get('/org/userHasOrgApplyList', {}, { baseURL })

// 设置管理员
export const setManager = (params) => request.get('/org/setAdmin', params, { baseURL })

// 撤销管理员
export const revokeManager = (params) => request.get('/org/removeAdmin', params, { baseURL })
