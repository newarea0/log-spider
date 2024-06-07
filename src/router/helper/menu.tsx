import { Icon } from '@umijs/max'
import type { AppRouteMenu } from '../types'

/**
 * 构建菜单，主要是将图标名（字符串，在系统上配置菜单时选择），转换为图标组件
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
