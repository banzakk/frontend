import Logo from '@/components/atom/svg/Logo'
import WriteIcon from '@/components/atom/svg/WriteIcon'
import { Nav } from '@/components/molecule/Nav/Nav'
import UserProfile from '@/components/molecule/UserProfile/UserProfile'
import { Button } from '@/components/ui/button'
import { CATEGORY } from '@/constants/categoryList'
import Providers from '@/states/server/Providers'
import '@/styles/globals.scss'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Metadata } from 'next'
import Link from 'next/link'
import cn from './layout.module.scss'

export const metadata: Metadata = {
  title: 'Banzakk',
  icons: { icon: 'http://localhost:3000/favicon.ico' },
}

export default function RootLayout({
  children,
  auth,
}: {
  children: React.ReactNode
}) {
  const isLoggedIn = false
  return (
    <html lang="ko">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body>
        <Providers>
          {isLoggedIn ? (
            <div className={cn.container}>
              <header className={cn.navSectionWrapper}>
                <section className={cn.navSection}>
                  <div className={cn.fixedWrapper}>
                    <div className={cn.navArea}>
                      <Link href="/" className={cn.logo}>
                        <Logo />
                      </Link>
                      <UserProfile />
                      <Button
                        asChild
                        className="text-base w-full h-11 shadow-md"
                      >
                        <Link href="/write">
                          <WriteIcon
                            size="16"
                            color="white"
                            className={cn.icon}
                          />
                          글쓰기
                        </Link>
                      </Button>
                      <Nav items={CATEGORY} />
                    </div>
                  </div>
                </section>
              </header>
              <div className={cn.mainSectionWrapper}>{children}</div>
              <div className={cn.rightSectionWrapper}>
                <div className={cn.fixedWrapper}>search Area</div>
              </div>
            </div>
          ) : (
            auth
          )}
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </Providers>
      </body>
    </html>
  )
}
