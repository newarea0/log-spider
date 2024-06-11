import { request } from '@umijs/max'
import type { ImageCaptchaResult, LoginParams } from './model'
import { RequestEnum } from '@/enums/httpEnum'

export * from './model'

/**
 * 用户登录
 */
export function login(params: LoginParams) {
  return request<string>('/auth/login', {
    method: RequestEnum.POST,
    data: params,
    isToken: false,
    skipErrorHandler: true,
  })
}

/**
 * 用户退出
 */
export function logout() {
  return request('/logout', {
    method: RequestEnum.GET,
  })
}

/**
 * 图片验证码
 */
export function captchaImage() {
  return request<ImageCaptchaResult>('/auth/captcha', {
    method: RequestEnum.GET,
  })
}

/**
 * 用户登录信息
 */
export function getLoginUserInfo() {
  return request<UserInfo>('/getLoginUserInfo', {
    method: RequestEnum.GET,
    skipErrorHandler: true,
  })
}
