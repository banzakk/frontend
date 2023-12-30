'use client'

import Spinner from '@/components/atom/Spinner/Spinner'
import { useEffect, useState } from 'react'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState<boolean>()
  useEffect(() => {
    setMounted(true)
  }, [])
  return <section>{mounted ? children : <Spinner />}</section>
}
