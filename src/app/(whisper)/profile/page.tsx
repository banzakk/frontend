'use client'

import { useQuery, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import Spinner from '@/components/atom/Spinner/Spinner'
import Typography from '@/components/atom/Typography/Typography'
import ProfileImg from '@/components/atom/ProfileImg/ProfileImg'
import { UserProps, WhisperProps } from '@/types'
import WhispersList from '@/components/molecule/WhispersList/WhispersList'
import cn from './page.module.scss'
import { getUserWhispers } from '@/services/whisper'

export default function UserWhisperPage() {
  const queryClient = useQueryClient()
  const loginUserData: UserProps | undefined = queryClient.getQueryData([
    'login-user',
  ])

  const { data } = useQuery<WhisperProps[]>({
    queryKey: ['user-whispers'],
    queryFn: () => getUserWhispers(userId.toString()),
  })

  if (!loginUserData) {
    return <Spinner />
  }

  const { userId, userCustomId, name, userProfileImageUrl } = loginUserData.user
  const { followingCount, followerCount } = loginUserData

  const followList = [
    { count: followingCount, countLabel: '팔로우' },
    { count: followerCount, countLabel: '팔로워' },
    { count: followerCount, countLabel: '속삭임' },
    { count: followerCount, countLabel: '게시글' },
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
                <ProfileImg
                  src={userProfileImageUrl}
                  alt="프로필이미지"
                  className={cn.profile}
                />
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
      </div>
      <div className={cn.whisperWrapper}>
        {data && <WhispersList whispers={data} />}
      </div>
    </div>
  )
}
