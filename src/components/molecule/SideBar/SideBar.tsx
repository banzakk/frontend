'use client'
import Logo from '@/components/atom/svg/Logo'
import Link from 'next/link'
import UserProfile from '../UserProfile/UserProfile'
import { Button } from '@/components/ui/button'
import WriteIcon from '@/components/atom/svg/WriteIcon'
import { Nav } from '../Nav/Nav'
import { CATEGORY } from '@/constants/categoryList'
import cn from './SideBar.module.scss'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { UserProps } from '@/types'
import { getUserInfo } from '@/services/user'

const SideBar = () => {
  const queryClient = useQueryClient()
  const { data } = useQuery<UserProps>({
    queryKey: ['user', 'loginUser'],
    queryFn: getUserInfo,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  })

  if (!data) {
    return null
  }

  queryClient.setQueryData(['user', 'loginUser'], data)
  
  return (
    <div className={cn.fixedWrapper}>
      <div className={cn.navArea}>
        <Link href="/" className={cn.logo}>
          <Logo />
        </Link>
        <UserProfile userData={data} />
        <Button asChild className="text-base w-full h-11 shadow-md">
          <Link href="/write">
            <WriteIcon size="16" color="white" className={cn.icon} />
            글쓰기
          </Link>
        </Button>
        <Nav items={CATEGORY} />
      </div>
    </div>
  )
}

export default SideBar
