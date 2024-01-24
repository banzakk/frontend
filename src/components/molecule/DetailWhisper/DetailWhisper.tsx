'use client'

import Typography from '@/components/atom/Typography/Typography'
import Carousel from '../Carousel/Carousel'
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
import cn from './DetailWhisper.module.scss'
import UploadImg from '../UploadImg/UploadImg'
import {
  LineBreakContent,
  replaceHashTagWithLink,
} from '@/utils/whisperContext'

export default function DetailWhisper(whisper: WhisperProps) {
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

  return (
    <div className={cn.container}>
      <div>
        <Carousel PostImages={imageUrl} className={cn.imageArea} />
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
                  <Typography type="div" size="14">
                    <LineBreakContent content={whisperContent} />
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
              <LikeButton className={cn.icon} />
              <RepostIcon className={cn.icon} />
              <ShareIcon className={cn.icon} />
              {isMyWhisper === '1' && <DeleteButton className={cn.icon} />}
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
  )
}
