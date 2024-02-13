'use client'

import LikeIcon from '@/components/atom/svg/LikeIcon'
import { addLike, cancelLike } from '@/services/whisper'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'

export default function LikeButton({
  className,
  liked,
  whisperId,
  size = '24',
}: {
  className: string
  liked: number | undefined
  whisperId: number
  size?: string
}) {
  const [isLike, setIsLike] = useState(liked === 1)

  const addLikeMutation = useMutation({
    mutationFn: (whisperId: string) => addLike(whisperId),
  })

  const cancelLikeMutation = useMutation({
    mutationFn: (whisperId: string) => cancelLike(whisperId),
  })

  const handleLike = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    if (!isLike) {
      addLikeMutation.mutate(String(whisperId))
    } else {
      cancelLikeMutation.mutate(String(whisperId))
    }
    setIsLike(!isLike)
  }

  return (
    <div onClick={(e) => handleLike(e)} className={className}>
      <LikeIcon size={size} isFilled={isLike} />
    </div>
  )
}
