import HomeIcon from '@/components/atom/svg/HomeIcon'
// import AlertIcon from '@/components/atom/svg/AlertIcon'
// import MessageIcon from '@/components/atom/svg/MessageIcon'
// import SettingIcon from '@/components/atom/svg/SettingIcon'
import ThemeIcon from '@/components/atom/svg/ThemeIcon'

export interface CategoryType {
  title: string
  href: string
  icon: JSX.Element
}

export const CATEGORY: CategoryType[] = [
  { title: '홈', href: '/whispers', icon: <HomeIcon className="home"/> },
  {
    title: '프로필',
    href: '/profile',
    icon: <ThemeIcon className="theme" />,
  },
  // { title: '알림', href: '/notifications', icon: <AlertIcon className="alert"/> },
  // {
  //   title: '쪽지',
  //   href: '/messages',
  //   icon: <MessageIcon className="message" />,
  // },
  // {
  //   title: '설정',
  //   href: '/settings',
  //   icon: <SettingIcon className="setting" />,
  // },
]
