import React from 'react'
import { localRoutes } from '../routes'
import type { AppRouteMenu } from '../types'
import { Exception } from '@/components/Exception'
import { Redirect } from '@/components/Redirect'
import { SimpleLayout } from '@/layouts/simple'

/**
 * 构建路由
 * @param rawRoutes 原始路由，由 Umi 自动生成
 * @param dynamicRoutes 动态路由，由 Api 接口返回
 * @implements 由动态路由表完全覆盖原始路由表，把原始路由信息按需补充到动态路由信息上。该函数的作用是修改 rawRoutes，不需要返回值
 */
export function buildRoutes(rawRoutes: AppRouteMenu[], dynamicRoutes: AppRouteMenu[]) {
  // 找到主布局路由，是一个数组，其中都是使用主布局（默认布局）的路由
  const layout = rawRoutes.find(item => item.isLayout)?.children || []
  // 构建路径与组件的映射关系
  const routeComponents = new Map<string, React.ReactNode>()
  layout.forEach((child) => {
    routeComponents.set(child.id!, child.element)
  })
  // 清空原始路由表 rawRoutes.find(item => item.isLayout)?.children
  while (layout.length) {
    layout.pop()
  }

  // 转换路由，第一参数表示所有的路由来源
  const routes = transformRoute([...localRoutes, ...dynamicRoutes], routeComponents)
  routes.forEach((route) => {
    // 使用全局布局添加到主布局路由下
    if (route.layout !== false) {
      // layout 表示 rawRoutes.find(item => item.isLayout)?.children，所以这里改变了 layout
      layout.push(route)
    }
    // 反之添加根路由下并包裹简易布局
    else {
      // 如登录页，使用 SimpleLayout 布局
      rawRoutes.unshift({
        ...route,
        element: <SimpleLayout>{route.element}</SimpleLayout>,
      })
    }
  })

  // DEBUG: 调试路由信息
  // console.log('调试路由信息', routes, routeComponents)
}

/**
 * 转换路由
 * @param routes 路由列表
 * @param routeComponents 路由对应的组件映射
 * @implements 通过组件路径找到组件元素
 */
function transformRoute(routes: AppRouteMenu[], routeComponents: Map<string, React.ReactNode>) {
  routes.forEach((route) => {
    const component = route.component
    // 如果有 component 属性，如 login/index
    if (component) {
      const element = routeComponents.get(component)
      // component 对应的页面组件存在，则使用对应页面组件
      if (element) {
        route.element = element
      }
      // 不存在，则统一使用 Exception
      else {
        route.element = <Exception title={`在 src/pages/ 下找不到 ${component}.tsx 请自行创建！`} />
        console.warn(`在 src/pages/ 下找不到 ${component}.tsx 请自行创建！`)
      }
    }
    // 如果没有 component 属性
    else {
      // 如果有 redirect 属性，则重定向
      if (route.redirect) {
        route.element = <Redirect path={route.redirect} />
      } else {
        // console.warn(`请正确配置路由 ${route.name} 的 component 属性！`)
      }
    }
    route.children && transformRoute(route.children, routeComponents)
  })
  return routes
}
