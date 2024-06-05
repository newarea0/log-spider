import { Icon } from '@umijs/max'
import type { AppRouteMenu } from '../types'

/**
 * 构建菜单
 * @param rawMenus 原始菜单
 * @returns 构建后的菜单
 */
export function buildMenus(rawMenus: AppRouteMenu[]) {
  rawMenus.forEach((menu) => {
    if (menu.icon && typeof menu.icon === 'string') {
      menu.icon = <Icon icon={menu.icon as any} />
    }
    menu.children && buildMenus(menu.children)
  })
  return rawMenus
}
