import axios, { AxiosResponseHeaders, InternalAxiosRequestConfig } from 'axios'

const getTokenFromLocalStorage = () => {
  const accessToken = window.localStorage.getItem('accessToken')
  return accessToken
}

const setHeader = (
  config: InternalAxiosRequestConfig,
  header: AxiosResponseHeaders
) => {
  config.headers = header
  return config
}

const getAccessToken = () => {
  return axios.post('/users/refresh-token')
}

export { getAccessToken, getTokenFromLocalStorage, setHeader }
