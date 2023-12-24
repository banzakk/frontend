'use client'

import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import styles from './Nav.module.scss'
import Category from '@/components/atom/Category/Category'
import { buttonVariants } from '@/components/ui/button'

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    title: string
    href: string
    icon: JSX.Element
  }[]
}

export function Nav({ items }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <nav className={styles.container}>
      {items.map((item) => (
        <Category
          key={item.title}
          category={item.title}
          href={item.href}
          icon={item.icon}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            pathname === item.href && 'text-primary'
          )}
        >
          {item.title}
        </Category>
      ))}
    </nav>
  )
}