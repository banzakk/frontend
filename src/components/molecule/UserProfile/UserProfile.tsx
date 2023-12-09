import React from 'react'
import Typography from '@/components/atom/Typography/Typography'
import ProfileImg from '@/components/atom/ProfileImg/ProfileImg'
import MoreIcon from '@/components/atom/svg/MoreIcon'
import cn from './UserProfile.module.scss'

const UserProfile: React.FC = () => {
  return (
    <div className={cn.container}>
      <div className={cn.profileArea}>
        <ProfileImg src="/images/hamster.jpg" alt="프로필이미지" />
      </div>
      <div className={cn.nameArea}>
        <div className={cn.nameInfo}>
          <Typography size="18" weight="600">
            춉춉쓰
          </Typography>
          <Typography size="14" color="gray-strong">
            @chopchop
          </Typography>
        </div>
        <MoreIcon size="16" color="#C29DFF" />
      </div>
      <Typography size="14" className={cn.content}>
        소개글 입력란
      </Typography>
      <div className={cn.area}>
        <div className={cn.label}>
          <Typography size="14" weight="600" className={cn.count}>
            70
          </Typography>
          <Typography size="14">팔로우</Typography>
        </div>
        <div className={cn.label}>
          <Typography size="14" weight="600" className={cn.count}>
            986
          </Typography>
          <Typography size="14">팔로워</Typography>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
