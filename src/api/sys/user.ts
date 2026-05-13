import type UserInfoModel from '@/models/UserInfoModel'

import request from '@/utils/http/axios'

export function getUserInfo(id: number = 1): Promise<UserInfoModel> {
  return request({
    method: 'get',
    url: `users/${id}`
  })
}
