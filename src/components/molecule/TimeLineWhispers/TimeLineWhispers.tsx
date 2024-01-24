'use client'

import { Fragment, useEffect } from 'react'
import { InfiniteData, useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'
import Spinner from '@/components/atom/Spinner/Spinner'
import { getUserInfo } from '@/services/user'
import { getTimeLineWhispers } from '@/services/whisper'
import Whisper from '../Whisper/Whisper'
import { TimelineData, UserProps, WhisperProps } from '@/types'

export default function TimeLineWhispers() {
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
    data: followTimelineData,
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
    queryFn: ({ pageParam }) => getTimeLineWhispers(userId, pageParam),
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

  return (
    <>
      {followTimelineData?.pages.map(
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
      <div ref={ref} style={{ height: 50 }}></div>
    </>
  )
}
