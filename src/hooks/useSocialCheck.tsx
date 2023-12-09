'use client'

import { axiosInstance } from '@/services'
import { useEffect } from 'react'

const UseSocialCheck = (query: string | null) => {
  useEffect(() => {
    if (query && query === 'success') {
      const axios = axiosInstance()
      axios
        .post('/users/refresh-token')
        .then((res) => {
          const accessToken = res.data.accessToken
          window.localStorage.setItem('accessToken', accessToken)
        })
        .catch((err) => console.error(err))
    }
  }, [query])
}

export default UseSocialCheck
