import Link from 'next/link'
import Typography from '@/components/atom/Typography/Typography'
import ProfileImg from '@/components/atom/ProfileImg/ProfileImg'
import MoreIcon from '@/components/atom/svg/MoreIcon'
import { UserProps } from '@/types/user'
import cn from './UserProfile.module.scss'

const UserProfile: React.FC = () => {
  const userData: UserProps = {
    userId: 'chopchop',
    nickname: '춉춉쓰',
    profileImg: '/images/hamster.jpg',
    content: '소개글 입력란',
    follow: '10',
    follower: '90',
  }

  const { userId, nickname, profileImg, content, follow, follower } = userData
  return (
    <div className={cn.container}>
      <div className={cn.profileArea}>
        <ProfileImg
          src={profileImg}
          alt="프로필이미지"
          className={cn.profile}
        />
      </div>
      <div className={cn.nameArea}>
        <div className={cn.nameInfo}>
          <Typography size="18" weight="600">
            {nickname}
          </Typography>
          <Typography size="14" color="gray-strong">
            @{userId}
          </Typography>
        </div>
        <Link href={userId}>
          <MoreIcon size="16" color="#C29DFF" />
        </Link>
      </div>
      <Typography size="14" className={cn.content}>
        {content}
      </Typography>
      <div className={cn.area}>
        <div className={cn.label}>
          <Typography size="14" weight="600" className={cn.count}>
            {follow}
          </Typography>
          <Typography size="14">팔로우</Typography>
        </div>
        <div className={cn.label}>
          <Typography size="14" weight="600" className={cn.count}>
            {follower}
          </Typography>
          <Typography size="14">팔로워</Typography>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
