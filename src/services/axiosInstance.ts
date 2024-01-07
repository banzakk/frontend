import axios, { AxiosInstance, AxiosRequestHeaders } from 'axios'
import {
  getAccessToken,
  getTokenFromLocalStorage,
  setHeader,
} from './axiosHandler'

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

let isRefreshingToken = false
const responseInterceptor = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.response.use(
    (response) => {
      return response
    },
    async function (error: { response: { status: number } }) {
      if (error.response?.status === 401 && !isRefreshingToken) {
        isRefreshingToken = true
        try {
          const res = await getAccessToken(axiosInstance)
          if (res.data) {
            localStorage.setItem('accessToken', res.data.accessToken)
          } else {
            localStorage.removeItem('accessToken')
            window.location.href = '/'
          }
        } catch (err) {
          localStorage.removeItem('accessToken')
        } finally {
          isRefreshingToken = false
        }
      }
      if (error.response?.status === 500) {
        alert('일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요.')
      }
      await Promise.reject(error)
    }
  )
}

const axiosInstance = () => {
  const instance = createAxiosInstance(process.env.NEXT_PUBLIC_SERVER_URI)
  requestInterceptor(instance)
  responseInterceptor(instance)
  return instance
}

export { axiosInstance }
