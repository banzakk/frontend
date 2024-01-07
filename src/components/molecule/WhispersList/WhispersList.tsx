'use client'

import Whisper from '@/components/molecule/Whisper/Whisper'
import { WhisperProps } from '@/types'
import cn from './WhispersList.module.scss'
import { useQuery } from '@tanstack/react-query'
import { getUserWhispers } from '@/services/whisper'

const WhispersList = ({ userId }: { userId: number }) => {
  const { data } = useQuery<WhisperProps[]>({
    queryKey: ['user-whispers'],
    queryFn: () => getUserWhispers(userId.toString()),
    retry: false,
  })

  return (
    <ul className={cn.WhisperArea}>
      {data?.map((whisper) => (
        <li key={whisper.whisperId} className={cn.container}>
          <Whisper {...whisper} />
        </li>
      ))}
    </ul>
  )
}

export default WhispersList
