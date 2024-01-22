'use client'

import LikeIcon from '@/components/atom/svg/LikeIcon'
import { useState } from 'react'

export default function LikeButton({
  className,
  size = '24',
}: {
  className: string
  size?: string
}) {
  const [isLike, setIsLike] = useState(false)
  const handleLike = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setIsLike(!isLike)
  }

  return (
    <div onClick={(e) => handleLike(e)} className={className}>
      {isLike ? (
        <LikeIcon size={size} isFilled={true} />
      ) : (
        <LikeIcon size={size} />
      )}
    </div>
  )
}
