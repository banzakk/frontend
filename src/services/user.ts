import { axiosInstance } from '.'
import { AxiosResponse } from 'axios'
import { UserProps } from '@/types'

const axios = axiosInstance()

export async function getUserInfo(): Promise<UserProps> {
  const res: AxiosResponse<UserProps> = await axios.get('/users/user')
  return res.data
}