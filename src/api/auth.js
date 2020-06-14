import request from '@/utils/request'

const baseURL = process.env.APP_API

export const login = data => request.post('/login', data, { baseURL })
