/**
 * 登录参数
 */
export interface LoginParams {
  /**
   * 验证码 code
   */
  code?: string

  /**
   * 验证码 uuid
   */
  uuid?: string

  /**
   * 账号
   */
  accountNo: string

  /**
   * 用户密码
   */
  password: string
}

/**
 * 图片验证码
 */
export interface ImageCaptchaResult {
  /* 验证码 img */
  img: string

  /* 验证码 uuid */
  uuid: string
}
