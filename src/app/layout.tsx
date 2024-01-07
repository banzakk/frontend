'use client'

import Providers from '@/states/server/Providers'
import useTokenCheck from '@/hooks/useTokenCheck'
import '@/styles/globals.scss'
import SideBar from '@/components/molecule/SideBar/SideBar'
import cn from './layout.module.scss'

export default function RootLayout({
  children,
  modal,
  auth,
}: {
  children: React.ReactNode
  modal: React.ReactNode
  auth: React.ReactNode
}) {
  const isLoggedIn = useTokenCheck()
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
                  <SideBar />
                </section>
              </header>
              <div className={cn.mainSectionWrapper}>{children}</div>
              <div className={cn.rightSectionWrapper}>
                <div className={cn.fixedWrapper}/>
              </div>
              {modal}
            </div>
          ) : (
            auth
          )}
        </Providers>
      </body>
    </html>
  )
}
