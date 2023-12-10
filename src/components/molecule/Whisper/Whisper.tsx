'use client'

import Image from 'next/image'
import cn from './Whisper.module.scss'
import Typography from '@/components/atom/Typography/Typography'
import { Button } from '@/components/ui/button'


export default function Whisper() {
  return (
    <div className={cn.container}>
      <div className={cn.imageArea}>
        <Image
          src="/images/hamster.jpg"
          alt="whisperImages"
          className={cn.image}
          priority
          width={468}
          height={350}
        />
      </div>
      <div className={cn.contentArea}>
        <Typography weight="800" className={cn.nickName}>
          nickname
        </Typography>
        <Typography>
          content
        </Typography>
      </div>
      <div className={cn.commentArea}>
        <Image
          src="/images/hamster.jpg"
          alt="userProfile"
          width={30}
          height={30}
          className={cn.profile}
        />
        <Typography weight="800" className={cn.nickName}>
          박찌
        </Typography>
        <Typography>무슨색인가요</Typography>
      </div>
      <Button variant="link" className="text-primary">
        댓글 999개 더 보기...
      </Button>
    </div>
  )
}
