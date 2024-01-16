'use client'

import Whisper from '@/components/molecule/Whisper/Whisper'
import { useSearchParams } from 'next/navigation'
import cn from './page.module.scss'
import Typography from '@/components/atom/Typography/Typography'

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
    <div className={cn.container}>
      <div className={cn.topWrapper}>
        <div className={cn.fixedWrapper}>
          <div className={cn.titleArea}>
            <div className={cn.title}>
              <Typography size="24" weight="800">
                상세
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <Whisper {...testData} />
      My Post: {whisperId}
    </div>
  )
}
