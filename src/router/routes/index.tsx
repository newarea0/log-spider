import type { AppRouteMenu } from '../types'

const logSpider: AppRouteMenu[] = [
  {
    name: '分析查询',
    path: 'analyze',
    icon: 'ant-design:file-search-outlined',
    children: [
      {
        name: '日志查询',
        path: 'log',
        component: 'analyze/log/index',
      },
      {
        name: '快速查询',
        path: 'quick',
        component: 'analyze/quick/index',
      },
    ],
  },
  {
    name: '任务管理',
    path: 'task',
    icon: 'ant-design:partition-outlined',
    children: [
      {
        name: '数据加工',
        path: 'log',
        component: 'task/process/index',
      },
      {
        name: '投递任务',
        path: 'quick',
        component: 'task/delivery/index',
      },
      {
        name: '数据导出',
        path: 'download',
        component: 'task/download/index',
      },
    ],
  },
  {
    name: '管理后台',
    path: 'management',
    icon: 'ant-design:setting-outlined',
    children: [
      {
        name: 'Project列表',
        path: 'project',
        component: 'management/project/index',
      },
      {
        name: '权限助手',
        path: 'permission',
        component: 'management/permission/index',
      },
    ],
  },
]

export const RootRoute: AppRouteMenu[] = [
  {
    path: '/',
    redirect: '/analyze/log',
  },
  // {
  //   name: '首页',
  //   path: '/home',
  //   component: 'home/index',
  //   icon: 'ant-design:home-outlined',
  // },
  ...logSpider,
]

export const LoginRoute: AppRouteMenu = {
  name: '登录',
  path: '/login',
  component: 'login/index',
  layout: false,
  hideInMenu: true,
}

export const NotFoundRoute: AppRouteMenu = {
  path: '*',
  component: '404',
  hideInMenu: true,
}

export const AccountRoute: AppRouteMenu = {
  name: '账号管理',
  path: '/account',
  hideInMenu: true,
  children: [
    {
      name: '个人中心',
      path: 'center',
      component: 'account/center/index',
    },
  ],
}

export const localRoutes: AppRouteMenu[] = [...RootRoute, LoginRoute, AccountRoute, NotFoundRoute]
