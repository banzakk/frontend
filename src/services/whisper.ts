import { axiosInstance } from '.'
import { AxiosResponse } from 'axios'
import { TimelineData, WhisperProps } from '@/types'

const axios = axiosInstance()

export async function getUserWhispers(userId: string, pageParam? : number): Promise<TimelineData> {
  const res: AxiosResponse<TimelineData> = await axios.get(`/users/${userId}/whispers?page=${pageParam}&limit=10`)
  return res.data
}

export const deleteWhisper = (whisperId: string) => {
  return axios.patch(`/whispers/${whisperId}`)
}

export async function getTimeLineWhispers(userId: string, pageParam? : number): Promise<TimelineData> {
  const res: AxiosResponse<TimelineData> = await axios.get(`/users/${userId}/timeline?page=${pageParam}&limit=10`)
  return res.data
}

export async function getDetailWhisper(whisperId: string): Promise<WhisperProps> {
  const res: AxiosResponse<WhisperProps[]> = await axios.get(`/whispers/${whisperId}`)
  return res.data[0]
}