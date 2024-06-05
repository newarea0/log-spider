import { request } from '@umijs/max'
import type { ListOperLogParams, OperLogModel } from './model'
import { RequestEnum } from '@/enums/httpEnum'

export * from './model'

/**
 * 查询操作日志列表
 */
export function listOperLog(params: ListOperLogParams) {
  return request<Pagination<OperLogModel>>('/oper/log/list', {
    method: RequestEnum.GET,
    params,
  })
}

/**
 * 清空操作日志
 */
export function clearOperLog() {
  return request('/oper/log/clear', {
    method: RequestEnum.DELETE,
  })
}
