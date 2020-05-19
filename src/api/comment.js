import request from '@/utils/request'

const baseURL = process.env.APP_API

// 留言列表
export const commentList = (params) => request.get('/comment/commentList', params, { baseURL })

// 发表评论
export const commentPublish = (data) => request.post('/comment/addComment', data, { baseURL })

// 回复评论 / 回复回复
export const commentRepay = (data) => request.post('/comment/repayComment', data, { baseURL })

// 评论点赞
export const commentLike = (query) => request.get('/comment/zan', query, { baseURL })
