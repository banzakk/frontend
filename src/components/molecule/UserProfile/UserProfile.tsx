import Link from 'next/link'
import Typography from '@/components/atom/Typography/Typography'
import ProfileImg from '@/components/atom/ProfileImg/ProfileImg'
import MoreIcon from '@/components/atom/svg/MoreIcon'
import { UserProps } from '@/types/user'
import cn from './UserProfile.module.scss'
import { useQuery } from '@tanstack/react-query'
import { getUserInfo } from '@/services/user'

const UserProfile: React.FC = () => {
  const { data } = useQuery<UserProps>({
    queryKey: ['login-user'],
    queryFn: getUserInfo,
    staleTime: 1000 * 20,
  })

  if (!data) {
    return null
  }

  const { userId, userCustomId, name, userProfileImageUrl } = data.user

  const { followingCount, followerCount } = data

  return (
    <div className={cn.container}>
      <div className={cn.profileArea}>
          <ProfileImg
            src={userProfileImageUrl}
            alt="프로필이미지"
            className={cn.profile}
          />
      </div>
      <div className={cn.nameArea}>
        <div className={cn.nameInfo}>
          <Typography size="18" weight="600">
            {name}
          </Typography>
          <Typography size="14" color="gray-strong">
            @{userCustomId}
          </Typography>
        </div>
        <Link href="/profile">
          <MoreIcon size="16" color="#C29DFF" />
        </Link>
      </div>
      <Typography size="14" className={cn.content}>
        content
      </Typography>
      <div className={cn.followContainer}>
        <div className={cn.label}>
          <Typography size="14" weight="600" className={cn.count}>
            {followingCount}
          </Typography>
          <Typography size="14">팔로우</Typography>
        </div>
        <div className={cn.label}>
          <Typography size="14" weight="600" className={cn.count}>
            {followerCount}
          </Typography>
          <Typography size="14">팔로워</Typography>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
