'use client'

import { useSearchParams } from 'next/navigation'
import DetailWhisper from '@/components/molecule/DetailWhisper/DetailWhisper'
import cn from './page.module.scss'

export default function Page() {
  const params = useSearchParams()
  const whisperId = params.get('id')

  const testData = {
    whisperId: 40,
    content: '#페더그리_햄스터 테스트테스트 #해시태그123 테스트',
    // "userId": 1,
    nickName: '춉춉이',
    hashTag: ['페더그리_햄스터', '해시태그123'],
    imageUrl: [
      'https://s3.ap-northeast-2.amazonaws.com/ban-zzak.com/whisper_images/1703249942589_jakub-dziubak-wvXG_7ebZ18-unsplash.jpg',
    ],
    // "isMyPost": "1"
  }

  return (
    <div className={cn.modalBackground}>
      <div className={cn.container}>
        <DetailWhisper {...testData} />
      </div>
    </div>
  )
}
