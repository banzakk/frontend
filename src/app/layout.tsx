import { Metadata } from 'next'
import '@/styles/globals.scss'

export const metadata: Metadata = {
  title: 'Banzakk',
  icons: { icon: 'http://localhost:3000/favicon.ico' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
      <body>{children}</body>
    </html>
  )
}
