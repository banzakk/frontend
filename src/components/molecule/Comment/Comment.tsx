import Typography from '@/components/atom/Typography/Typography'
import ProfileImg from '@/components/atom/ProfileImg/ProfileImg'
import LikeIcon from '@/components/atom/svg/LikeIcon'
import CommentIcon from '@/components/atom/svg/CommentIcon'
import { CommentProps } from '@/types'
import cn from './Comment.module.scss'

export default function Comment(comment: CommentProps) {
  const { nickName, profileUrl, content } = comment

  return (
    <div className={cn.commentArea}>
      <div className={cn.nickNameArea}>
        <ProfileImg src={profileUrl} alt="profileImg" className={cn.profile} />
        <Typography size="14" type="div" weight="800" className={cn.nickName}>
          {nickName}
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
