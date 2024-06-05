import { request } from '@umijs/max'
import type { ProfileInfoResult, UpdatePasswordParams, UpdateProfileParams } from './model'
import { RequestEnum } from '@/enums/httpEnum'

export * from './model'

/**
 * 查询个人信息
 */
export function getProfile() {
  return request<ProfileInfoResult>('/profile', {
    method: RequestEnum.GET,
  })
}

/**
 * 修改个人信息
 */
export function updateProfile(params: UpdateProfileParams) {
  return request('/profile/updateProfile', {
    method: RequestEnum.PUT,
    data: params,
  })
}

/**
 * 修改个人密码
 */
export function updatePassword(params: UpdatePasswordParams) {
  return request('/profile/updatePassword', {
    method: RequestEnum.PUT,
    data: params,
  })
}
