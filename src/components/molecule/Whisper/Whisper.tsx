'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Typography from '@/components/atom/Typography/Typography'
import {
  RepostIcon,
  CommentIcon,
  SendIcon,
  DeleteIcon,
} from '@/components/atom/svg'
import Carousel from '../Carousel/Carousel'
import Comment from '@/components/molecule/Comment/Comment'
import LikeButton from '@/components/molecule/LikeButton/LikeButton'
import ShareButton from '@/components/molecule/ShareButton/ShareButton'
import useToggleModal from '@/hooks/useToggleModal'
import { WhisperProps } from '@/types'
import cn from './Whisper.module.scss'
import { replaceHashTagWithLink } from '@/utils/whisperContext'
import { deleteWhisper } from '@/services/whisper'

export default function Whisper(whisper: WhisperProps) {
  const {
    whisperId,
    nickName,
    imageUrl,
    content,
    hashTag,
    comments,
    isMyWhisper,
    liked,
  } = whisper

  const whisperContent = replaceHashTagWithLink(
    cn.hashTag,
    'get',
    content,
    hashTag
  )

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (whisperId: string) => deleteWhisper(whisperId),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['whispers'] })
    },
  })

  const handleDelete = () => {
    mutation.mutate(whisperId.toString())
  }

  const [isToggled, handleToggle] = useToggleModal()
  const whisperLink = `${window.location.host}/whisper?id=${whisperId}`

  return (
    <div className={cn.container}>
      <div className={cn.linkArea}>
        <Carousel PostImages={imageUrl} className={cn.imageArea} />
        <div className={cn.actionContainer}>
          <div className={cn.actionGroup}>
            <div onClick={(e) => handleToggle(e)} className={cn.icon}>
              <CommentIcon />
            </div>
            <LikeButton
              className={cn.icon}
              liked={liked}
              whisperId={whisperId}
            />
            <RepostIcon className={cn.icon} />
           <ShareButton className={cn.icon} text={whisperLink}/>
            {isMyWhisper === 1 && (
              <div onClick={handleDelete}>
                <DeleteIcon width="15" height="21" className={cn.icon} />
              </div>
            )}
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
        {isToggled && (
          <div className={cn.commentPost}>
            <input className={cn.commentInput} />
            <SendIcon />
          </div>
        )}
      </div>
    </div>
  )
}
