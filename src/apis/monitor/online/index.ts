import { request } from '@umijs/max'
import type { ListOnlineParams, OnlineInfoResult } from './model'
import { RequestEnum } from '@/enums/httpEnum'

export * from './model'

/**
 * 在线用户列表
 */
export function listOnline(params: ListOnlineParams) {
  return request<OnlineInfoResult[]>('/online/list', {
    method: RequestEnum.GET,
    params,
  })
}

/**
 * 强退在线用户
 */
export function logoutOnline(userSk: string) {
  return request(`/online/${userSk}`, {
    method: RequestEnum.DELETE,
  })
}
