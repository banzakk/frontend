'use client'

import Providers from '@/states/server/Providers'
import useTokenCheck from '@/hooks/useTokenCheck'
import '@/styles/globals.scss'
import cn from './layout.module.scss'

export default function RootLayout({
  children,
  auth,
}: {
  children: React.ReactNode
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
          {isLoggedIn ? <div className={cn.container}>{children}</div> : auth}
        </Providers>
      </body>
    </html>
  )
}
