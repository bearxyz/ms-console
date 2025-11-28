import request from '@/utils/http'
import { AppRouteRecord } from '@/types/router'

// 获取用户列表
export function fetchGetUserList(params: Api.SystemManage.UserSearchParams) {
  return request.get<Api.SystemManage.UserList>({
    url: '/api/authority/user/page',
    params
  })
}

// 获取角色列表
export function fetchGetRoleList(params: Api.SystemManage.RoleSearchParams) {
  return request.get<Api.SystemManage.RoleList>({
    url: '/api/authority/role/page',
    params
  })
}

// 获取菜单列表
export function fetchGetMenuList() {
  return request.get<AppRouteRecord[]>({
    url: '/api/authority/permission/list'
  })
}

// h获取日志列表
export function fetchGetLogList(params: Api.SystemManage.LogSearchParams) {
  return request.get<Api.SystemManage.LogList>({
    url: '/api/log/user-log/page',
    params
  })
}
