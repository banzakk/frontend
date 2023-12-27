'use client'

import { Button } from '@/components/ui/button'
import Typography from '@/components/atom/Typography/Typography'
import LikeIcon from '@/components/atom/svg/LikeIcon'
import RepostIcon from '@/components/atom/svg/RepostIcon'
import ShareIcon from '@/components/atom/svg/ShareIcon'
import Comment from '@/components/molecule/Comment/Comment'
import { Whisper as WhisperType } from '@/types/whisper'
import cn from './Whisper.module.scss'
import Link from 'next/link'

export default function Whisper<ContentProps>(whisper: WhisperType) {
  const { nickname, imgUrl, content, hashTag, comments } = whisper

  // 해시태그 css 변경
  const replaceHashTagWithLink = (text: string, hashTags?: string[]) => {
    if (!hashTags || hashTags.length === 0) {
      return [text]
    }

    const regex = new RegExp(`(${hashTags.join('|')})`, 'g')
    const parts = text.split(regex)


    return parts.map((part, index) =>
      regex.test(part) ? (
        <Link href="/" key={index} className={cn.hashTag}>
          {part}
        </Link>
      ) : (
        part
      )
    )
  }
  const renderedContent = replaceHashTagWithLink(content, hashTag)

  return (
    <div className={cn.container}>
      <div className={cn.imageArea}>
        <img
          src={imgUrl}
          alt="whisperImages"
          className={cn.image}
          width={468}
          height={350}
        />
      </div>
      <div className={cn.actionContainer}>
        <LikeIcon isFilled={false} className={cn.icon} />
        <RepostIcon className={cn.icon} />
        <ShareIcon />
      </div>
      <div className={cn.contentContainer}>
        <div className={cn.nickNameArea}>
          <Typography size="14" type="div" weight="800" className={cn.nickName}>
            {nickname}
          </Typography>
        </div>
        <div className={cn.contentArea}>
          <Typography size="14">{renderedContent}</Typography>
        </div>
      </div>
      {comments && comments.length > 0 && (
        <div>
          {comments.map((comment) => (
            <Comment key={comment.commentId} {...comment} />
          ))}
          <Button variant="link" className="text-primary">
            댓글 더 불러오기
          </Button>
        </div>
      )}
    </div>
  )
}
