/**
 * 用户信息
 */
declare interface UserInfo {
  accountNo: string
  area: string
  avatar: string | null
  email: string
  id: number
  lastLoginDate: string
  menuPermissionCodes: string[]
  name: string
  nearlyThirtyDayActive: number
  phoneNo: string
  remark: string
  role: string
  roleIds: string
  source: string | null
  status: number
  validDate: string | null
}
