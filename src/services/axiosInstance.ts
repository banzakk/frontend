import axios, { AxiosInstance, AxiosRequestHeaders } from 'axios'
import { getTokenFromLocalStorage, setHeader } from './axiosHandler'

const createAxiosInstance = (baseURL: string | undefined) => {
  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  })
}

const requestInterceptor = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const accessToken = getTokenFromLocalStorage()
      return setHeader(config, {
        Authorization: `Bearer ${accessToken}`,
      } as AxiosRequestHeaders)
    },
    (error) => {
      return Promise.reject(error)
    }
  )
}

const axiosInstance = () => {
  const instance = createAxiosInstance(process.env.NEXT_PUBLIC_SERVER_URI)
  requestInterceptor(instance)
  return instance
}

export { axiosInstance }
