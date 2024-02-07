'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Typography from '@/components/atom/Typography/Typography'
import {
  RepostIcon,
  ShareIcon,
  CommentIcon,
  SendIcon,
  DeleteIcon,
} from '@/components/atom/svg'
import Carousel from '../Carousel/Carousel'
import Comment from '@/components/molecule/Comment/Comment'
import LikeButton from '@/components/molecule/LikeButton/LikeButton'
import DeleteButton from '@/components/molecule/DeleteButton/DeleteButton'
import { WhisperProps } from '@/types'
import cn from './Whisper.module.scss'
import { useRouter } from 'next/navigation'
import { LineBreakContent, replaceHashTagWithLink } from '@/utils/whisperContext'

export default function Whisper(whisper: WhisperProps) {
  const [isComment, setIsComment] = useState(false)
  const handleComment = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setIsComment(!isComment)
  }
  const {
    whisperId,
    nickName,
    imageUrl,
    content,
    hashTag,
    comments,
    isMyWhisper,
  } = whisper


  const whisperContent = replaceHashTagWithLink(content, cn.hashTag, hashTag)

  const router = useRouter()
  const handleNavigate = () => {
    router.push(`/whispers/whisper?id=${whisperId}`)
  }


  return (
    <div className={cn.container}>
      <div className={cn.linkArea} onClick={handleNavigate}>
        <Carousel PostImages={imageUrl} className={cn.imageArea} />
        <div className={cn.actionContainer}>
          <div className={cn.actionGroup}>
            <div onClick={(e) => handleComment(e)} className={cn.icon}>
              <CommentIcon />
            </div>
            <LikeButton className={cn.icon} />
            <RepostIcon className={cn.icon} />
            <ShareIcon className={cn.icon} />
            {isMyWhisper === '1' && <DeleteButton className={cn.icon} />}
          </div>
        </div>
        <div className={cn.contentContainer}>
          <div className={cn.nickNameArea}>
            <Typography
              size="14"
              type="div"
              weight="800"
              className={cn.nickName}
            >
              {nickName}
            </Typography>
          </div>
          <div className={cn.contentArea}>
            {content && (
              <Typography type="div" size="14" className={cn.content}>
                {whisperContent}
              </Typography>
            )}
          </div>
        </div>
        <div>
          {comments?.map((comment) => (
            <Comment key={comment.commentId} comment={comment} />
          ))}
          <Button variant="link" className="text-primary" asChild>
            <Link
              href={{
                pathname: '/whisper',
                query: { id: whisperId },
              }}
            >
              댓글 더 불러오기
            </Link>
          </Button>
        </div>
      </div>
      <div className={cn.commentPostArea}>
        {isComment && (
          <div className={cn.commentPost}>
            <input className={cn.commentInput} />
            <SendIcon />
          </div>
        )}
      </div>
    </div>
  )
}
