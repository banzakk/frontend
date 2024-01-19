'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Typography from '@/components/atom/Typography/Typography'
import Carousel from '../Carousel/Carousel'
import CommentIcon from '@/components/atom/svg/CommentIcon'
import RepostIcon from '@/components/atom/svg/RepostIcon'
import ShareIcon from '@/components/atom/svg/ShareIcon'
import Comment from '@/components/molecule/Comment/Comment'
import LikeButton from '@/components/molecule/LikeButton/LikeButton'
import DeleteButton from '@/components/molecule/DeleteButton/DeleteButton'
import { WhisperProps } from '@/types'
import cn from './Whisper.module.scss'

export default function Whisper(whisper: WhisperProps) {
  const {
    whisperId,
    nickName,
    imageUrl,
    content,
    hashTag,
    comments,
    isMyWhisper,
  } = whisper

  // 해시태그 css 변경
  const replaceHashTagWithLink = (text: string, hashTags?: string[]) => {
    if (!hashTags || hashTags.length === 0) {
      return [text]
    }

    const regex = new RegExp(
      `(${hashTags.map((tag) => `#${tag}`).join('|')})`,
      'g'
    )
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
      <Carousel PostImages={imageUrl} className={cn.imageArea} />
      <div className={cn.actionContainer}>
        <div className={cn.actionGroup}>
          <CommentIcon className={cn.icon} />
          <LikeButton className={cn.icon} />
          <RepostIcon className={cn.icon} />
          <ShareIcon className={cn.icon} />
          {isMyWhisper === '1' && <DeleteButton className={cn.icon} />}
        </div>
      </div>
      <div className={cn.contentContainer}>
        <div className={cn.nickNameArea}>
          <Typography size="14" type="div" weight="800" className={cn.nickName}>
            {nickName}
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
        <Button variant="link" className="text-primary" asChild>
          <Link
            href={{
              pathname: '/whispers/whisper',
              query: { id: whisperId },
            }}
          >
            댓글 더 불러오기
          </Link>
        </Button>
      </div>
      )}
    </div>
  )
}
