import Typography from '@/components/atom/Typography/Typography'
import ProfileImg from '@/components/atom/ProfileImg/ProfileImg'
import LikeIcon from '@/components/atom/svg/LikeIcon'
import CommentIcon from '@/components/atom/svg/CommentIcon'
import { Comment as CommentType } from '@/types/whisper'
import cn from './Comment.module.scss'

export default function Comment(comment: CommentType) {
  const { nickname, imgUrl, content } = comment

  return (
    <div className={cn.commentArea}>
      <div className={cn.nickNameArea}>
        <ProfileImg src={imgUrl} alt="profileImg" className={cn.profile} />
        <Typography size="14" type="div" weight="800" className={cn.nickName}>
          {nickname}
        </Typography>
      </div>
      <div className={cn.contentArea}>
        <Typography size="14">{content}</Typography>
      </div>
      <div className={cn.actionContainer}>
        <CommentIcon className={cn.icon} />
        <LikeIcon isFilled={false} />
      </div>
    </div>
  )
}
