import SocialLoginConsumer from '@/components/SocialLoginConsumer'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Banzakk',
  icons: { icon: 'http://localhost:3000/favicon.ico' },
}

export default function Page() {
  redirect('/whispers')

  // return (
  //   <div>
  //     <SocialLoginConsumer />
  //   </div>
  // )
}
