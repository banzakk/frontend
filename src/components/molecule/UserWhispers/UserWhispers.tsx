'use client'

import { Fragment, useEffect } from 'react'
import { InfiniteData, useInfiniteQuery, useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import { getUserInfo } from '@/services/user'
import { getUserWhispers } from '@/services/whisper'
import Typography from '@/components/atom/Typography/Typography'
import Spinner from '@/components/atom/Spinner/Spinner'
import ProfileImg from '@/components/atom/ProfileImg/ProfileImg'
import Whisper from '../Whisper/Whisper'
import { TimelineData, UserProps, WhisperProps } from '@/types'
import cn from './UserWhispers.module.scss'

export default function UserWhispers() {
  const [ref, inView] = useInView({ threshold: 0 })

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage()
    }
  }, [inView])

  const { data: userData, isLoading } = useQuery<UserProps>({
    queryKey: ['user', 'loginUser'],
    queryFn: getUserInfo,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  })

  let userId = ''
  if (userData) {
    userId = userData.user.userId.toString()
  }

  const {
    data: userWhispersData,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery<
    TimelineData,
    Object,
    InfiniteData<TimelineData>,
    [_1: string, _2: string],
    number
  >({
    queryKey: ['whispers', 'follow-timeline'],
    queryFn: ({ pageParam }) => getUserWhispers(userId, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage?.data.length === 0) {
        return undefined
      }
      return lastPageParam + 1
    },
    enabled: !!userData,
  })

  if (isLoading) {
    return <Spinner />
  }

  const { followingCount, followerCount } = userData || {}
  const { userCustomId, name, userProfileImageUrl, content } =
    userData?.user || {}

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
                <div>
                  {userProfileImageUrl && (
                    <ProfileImg
                      src={userProfileImageUrl}
                      alt="프로필이미지"
                      className={cn.profile}
                    />
                  )}
                </div>
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
                    {content && <Typography size="18">{content}</Typography>}
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
      {userWhispersData?.pages.map(
        (page: { data: WhisperProps[] }, pageIndex: number) => (
          <Fragment key={pageIndex}>
            {page.data.map((whisper, whisperIndex) => (
              <Fragment key={whisperIndex}>
                <Whisper {...whisper} />
              </Fragment>
            ))}
          </Fragment>
        )
      )}
      </div>
      <div ref={ref} style={{ height: 50 }}></div>
    </div>
  )
}
