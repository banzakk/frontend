'use client'

import { useQuery } from '@tanstack/react-query'
import Spinner from '@/components/atom/Spinner/Spinner'
import { UserProps, WhisperProps } from '@/types'
import WhispersList from '@/components/molecule/WhispersList/WhispersList'
import { getTimeLineWhispers } from '@/services/whisper'
import { getUserInfo } from '@/services/user'

export default function TimeLineWhispers() {
  const { data: userData, isLoading } = useQuery<UserProps>({
    queryKey: ['user', 'loginUser'],
    queryFn: getUserInfo,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  })

  const { data: userWhispers } = useQuery<WhisperProps[]>({
    queryKey: ['user', 'follow-timeline'],
    queryFn: () =>
      getTimeLineWhispers(userData?.user?.userId?.toString() as string),
    enabled: !!userData,
  })

  if (isLoading) {
    return <Spinner />
  }

  return (
      <>
        {userWhispers && <WhispersList whispers={userWhispers} />}
      </>
  )
}
