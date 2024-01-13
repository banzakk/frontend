import { axiosInstance } from '.'
import { AxiosResponse } from 'axios'
import { WhisperProps } from '@/types'

const axios = axiosInstance()

export async function getUserWhispers(userId: string): Promise<WhisperProps[]> {
  const res: AxiosResponse<WhisperProps[]> = await axios.get(`/users/${userId}/whispers`)
  return res.data
}