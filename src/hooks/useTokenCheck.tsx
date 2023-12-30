'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const useTokenCheck = () => {
  const pathname = usePathname()
  const [isActive, setIsActive] = useState<boolean>()
  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      setIsActive(true)
    }
  }, [pathname])
  return isActive
}

export default useTokenCheck
