'use client'

import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
  useQueryClient,
} from '@tanstack/react-query'
import Link from 'next/link'
import Typography from '@/components/atom/Typography/Typography'

import ProfileImg from '@/components/atom/ProfileImg/ProfileImg'
import { UserProps } from '@/types'
import cn from './page.module.scss'
import WhispersList from '@/components/molecule/WhispersList/WhispersList'
import { getUserWhispers } from '@/services/whisper'
import LoginUser from '@/services/LoginUser'

// export function generateStaticParams() {
//   return [{ userCustomId: 'chopchop' }]
// }

export default function UserWhisperPage({
  params,
}: {
  params: { userCustomId: string }
}) {
 
  // const queryClient = new QueryClient()
  // await queryClient.prefetchQuery({
  //   queryKey: ['user-whispers'],
  //   queryFn: () => getUserWhispers('1'),
  // })
  // const dehydratedState = dehydrate(queryClient)

  // queryClient.getQueryData(['user-whispers'])

  const loginUserData :UserProps | undefined = LoginUser()

  if (!loginUserData) {
    return null
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
      {/* <HydrationBoundary state={dehydratedState}> */}
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
        <WhispersList userId={userId}/>
      </div>
      {/* </HydrationBoundary> */}
    </div>
  )
}
