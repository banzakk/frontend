import { UserDto } from '@/types'
import { axiosInstance } from '.'

const axios = axiosInstance()

export const postSignUp = (data: UserDto) => {
  return axios.post(`/users/signup`, data)
}

export const postIdCheck = (data: Pick<UserDto, 'userCustomId'>) => {
  return axios.post(`/users/id-check`, data)
}

export const postEmailCheck = (data: Pick<UserDto, 'email'>) => {
  return axios.post(`/users/email-check`, data)
}
