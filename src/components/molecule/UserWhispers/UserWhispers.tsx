'use client'

import { useQueries, useQuery, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import Spinner from '@/components/atom/Spinner/Spinner'
import Typography from '@/components/atom/Typography/Typography'
import ProfileImg from '@/components/atom/ProfileImg/ProfileImg'
import { UserProps, WhisperProps } from '@/types'
import WhispersList from '@/components/molecule/WhispersList/WhispersList'
import cn from './UserWhispers.module.scss'
import { getUserWhispers } from '@/services/whisper'
import { getUserInfo } from '@/services/user'

export default function UserWhispers() {
  const { data: userData, isLoading } = useQuery<UserProps>({
    queryKey: ['user', 'loginUser'],
    queryFn: getUserInfo,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  })

  const { data: userWhispers } = useQuery<WhisperProps[]>({
    queryKey: ['user', 'timeline'],
    queryFn: () =>
      getUserWhispers(userData?.user?.userId?.toString() as string),
    enabled: !!userData,
  })

  if (isLoading) {
    return <Spinner />
  }
  
  const { followingCount, followerCount } = userData || {}
  const { userCustomId, name, userProfileImageUrl } = userData?.user || {}

  const followList = [
    { count: followingCount, countLabel: '팔로우' },
    { count: followerCount, countLabel: '팔로워' },
  ]

  return (
    <div className={cn.container}>
      <div className={cn.topWrapper}>
        <div className={cn.fixedWrapper}>
          <div className={cn.titleArea}>
            <div className={cn.title}>
              <Typography size="24" weight="800">
                프로필
              </Typography>
            </div>
            <div className={cn.profileContainer}>
              <div className={cn.profileArea}>
                {userProfileImageUrl && (
                  <ProfileImg
                    src={userProfileImageUrl}
                    alt="프로필이미지"
                    className={cn.profile}
                  />
                )}
                <div className={cn.contentArea}>
                  <div className={cn.nickNameArea}>
                    <Typography size="24" weight="600" className={cn.nickName}>
                      {name}
                    </Typography>
                    <Typography size="18" color="gray-strong">
                      @{userCustomId}
                    </Typography>
                  </div>
                  <div className={cn.content}>
                    <Typography size="18">content</Typography>
                  </div>
                  <div className={cn.followInfoArea}>
                    {followList.map(({ count, countLabel }, index) => (
                      <div key={index}>
                        <Typography
                          weight="600"
                          color="gray-strong"
                          className={cn.count}
                        >
                          {count}
                        </Typography>
                        <Typography
                          color="gray-strong"
                          className={cn.countLabel}
                        >
                          {countLabel}
                        </Typography>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cn.menuArea}>
            <Link href="/">
              <Typography color="primary">속삭임</Typography>
            </Link>
            <Link href="/">
              <Typography color="primary">커뮤니티</Typography>
            </Link>
            <Link href="/">
              <Typography color="primary">미디어</Typography>
            </Link>
          </div>
        </div>
      </div>
      <div className={cn.whisperWrapper}>
        {userWhispers && <WhispersList whispers={userWhispers} />}
      </div>
    </div>
  )
}
