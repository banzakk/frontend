'use client'

import Typography from '@/components/atom/Typography/Typography'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogOverlay,
} from '@/components/ui/dialog'
import { useEffect, useState } from 'react'
import { SignUpForm } from '../SignUpForm/SignUpForm'
import cn from './SignUpModal.module.scss'

export function SignUpModal() {
  useEffect(() => {
    setActive(true)
  }, [])
  const [active, setActive] = useState(false)

  return (
    <Dialog open={active}>
      <DialogOverlay>
        <DialogContent className={cn.content} isUseXButton={false}>
          <DialogHeader className={cn.header}>
            <Typography type="h2" weight="600" size="24">
              회원가입을 위해 <br />
              정보를 입력해주세요.
            </Typography>
          </DialogHeader>
          <SignUpForm />
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  )
}
