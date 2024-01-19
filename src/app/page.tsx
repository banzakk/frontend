// import SocialLoginConsumer from '@/components/SocialLoginConsumer'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Banzakk',
  description:
    '반려동물과 함께하는 사람들을 위한 일상, 정보 공유 커뮤니티 서비스',
  icons: {
    icon: '/icon.ico',
  },
}

export default function Page() {
  redirect('/whispers')

  // return (
  //   <div>
  //     <SocialLoginConsumer />
  //   </div>
  // )
}
