import { AppRouteRecord } from '@/types/router'
import { dashboardRoutes } from './dashboard'
import { resultRoutes } from './result'
import { exceptionRoutes } from './exception'

/**
 * 导出所有模块化路由
 */
export const routeModules: AppRouteRecord[] = [
  dashboardRoutes,
  resultRoutes,
  exceptionRoutes
]
