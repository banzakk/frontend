'use client'

import Typography from '@/components/atom/Typography/Typography'
import Carousel from '../Carousel/Carousel'
import { useQuery } from '@tanstack/react-query'
import { getDetailWhisper } from '@/services/whisper'
import {
  RepostIcon,
  ShareIcon,
  CommentIcon,
  SendIcon,
  MoreIcon,
} from '@/components/atom/svg'
import Comment from '@/components/molecule/Comment/Comment'
import LikeButton from '@/components/molecule/LikeButton/LikeButton'
import DeleteButton from '@/components/molecule/DeleteButton/DeleteButton'
import { WhisperProps } from '@/types'
import UploadImg from '../UploadImg/UploadImg'
import { replaceHashTagWithLink } from '@/utils/whisperContext'
import cn from './DetailWhisper.module.scss'
import Spinner from '@/components/atom/Spinner/Spinner'
import { MouseEventHandler } from 'react'
import { useRouter } from 'next/navigation'


export default function DetailWhisper({ whisperId }: { whisperId: string }) {
  const router = useRouter();
  
  const { data: whisperData, isLoading } = useQuery<WhisperProps>({
    queryKey: ['whisper', 'detailWhisper'],
    queryFn: () => getDetailWhisper(whisperId),
  })

  if (isLoading) {
    return <Spinner />
  }

  const { nickName, imageUrl, content, hashTag, isMyWhisper, comments, liked } =
    whisperData || {}

  const whisperContent = replaceHashTagWithLink(cn.hsahTag, content, hashTag)


  const handleClose: MouseEventHandler<HTMLButtonElement | HTMLDivElement> = (
  ) => {
      router.back()
  }

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }
  return (
    <div className={cn.modalBackground} onClick={handleClose}>
      <div className={cn.container} onClick={handleModalClick}>
        <div className={cn.imageArea}>
          {imageUrl && (
            <Carousel PostImages={imageUrl} className={cn.imageArea} />
          )}
        </div>
        <div className={cn.contentContainer}>
          <div className={cn.detailContent}>
            <div className={cn.contentGroup}>
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
                <Typography type="div" size="14">
                  {content && (
                    <Typography type="div" size="14" className={cn.content}>
                      {whisperContent}
                    </Typography>
                  )}
                </Typography>
              </div>
            </div>
            <div className={cn.actionContainer}>
              <div className={cn.actionGroup}>
                <div className={cn.icon}>
                  <CommentIcon />
                </div>
                <LikeButton className={cn.icon} liked={liked} />
                <RepostIcon className={cn.icon} />
                <ShareIcon className={cn.icon} />
                {isMyWhisper === 1 && <DeleteButton className={cn.icon} />}
              </div>
            </div>
            <div className={cn.commentContainer}>
              <div className={cn.moreIconArea}>
                <MoreIcon size="16" />
              </div>
              {comments?.map((comment) => (
                <Comment key={comment.commentId} comment={comment} size="14" />
              ))}
            </div>
          </div>
          <div className={cn.commentPostArea}>
            <div className={cn.commentPost}>
              <input className={cn.commentInput} />
              <UploadImg size="24" color="#c29dff" />
              <SendIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}