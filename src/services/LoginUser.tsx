'use client'

import { UserProps } from '@/types'
import { useQueryClient } from '@tanstack/react-query'

export default function LoginUser() {
  const queryClient = useQueryClient()
  const loginUserData: UserProps | undefined = queryClient.getQueryData([
    'login-user',
  ])

  return loginUserData
}
