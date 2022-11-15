import ajax from './ajax'

const BASE_URL = "/api"

// 获取物流信息
export const getLogistics = ordernum => ajax(`${BASE_URL}/logistics`, { ordernum })