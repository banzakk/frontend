'use client'

import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog'
import { ReactNode, useEffect, useState } from 'react'
import cn from './SignUpModal.module.scss'

export function SignUpModal({ children }: { children: ReactNode }) {
  useEffect(() => {
    setActive(true)
  }, [])
  const [active, setActive] = useState(false)

  return (
    <Dialog open={active}>
      <DialogOverlay>
        <DialogContent className={cn.content} isUseXButton={false}>
          {children}
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  )
}
