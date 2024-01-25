'use client'

import { getAccessTokenFromLocalStorage } from '@/utils'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const useTokenCheck = () => {
  const pathname = usePathname()
  const [isActive, setIsActive] = useState<boolean>()
  useEffect(() => {
    const token = getAccessTokenFromLocalStorage()
    if (token) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
    console.log(isActive)
    console.log(token)
  }, [pathname])
  return isActive
}

export default useTokenCheck
