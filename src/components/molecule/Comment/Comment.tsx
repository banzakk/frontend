import Typography from '@/components/atom/Typography/Typography'
import ProfileImg from '@/components/atom/ProfileImg/ProfileImg'
import CommentIcon from '@/components/atom/svg/CommentIcon'
import { CommentProps } from '@/types'
import cn from './Comment.module.scss'
import LikeButton from '@/components/molecule/LikeButton/LikeButton'
import DeleteButton from '@/components/molecule/DeleteButton/DeleteButton'

export default function Comment({
  comment,
  size = '24',
}: {
  comment: CommentProps
  size?: string
}) {
  const { nickName, profileUrl, content, isMyComment } = comment

  return (
    <div className={cn.commentArea}>
      <div className={cn.nickNameArea}>
        <ProfileImg src={profileUrl} alt="profileImg" className={cn.profile} />
        <Typography size="14" type="div" weight="800" className={cn.nickName}>
          {nickName}
        </Typography>
      </div>
      <div className={cn.contentGroup}>
        <div className={cn.contentArea}>
          <Typography size="14">{content}</Typography>
        </div>
        <div className={cn.actionContainer}>
          <CommentIcon className={cn.icon} size={size} />
          <LikeButton className={cn.icon} size={size} />
          {isMyComment === '1' && (
            <DeleteButton className={cn.icon} width="12" height="14" />
          )}
        </div>
      </div>
    </div>
  )
}
