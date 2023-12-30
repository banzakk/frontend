import { UserDto } from '@/types'
import { axiosInstance } from '.'

const axios = axiosInstance()

export const postLogin = (data: Partial<UserDto>) => {
  return axios.post(`/users/login`, data)
}
