import Typography from '@/components/atom/Typography/Typography'
import WhispersList from '@/components/molecule/WhispersList/WhispersList'
import { Whisper } from '@/types/whisper'
import cn from './page.module.scss'

export default async function WhispersPage() {
  const whispers: Whisper[] = [
    {
      whisperId: 1,
      nickname: '춉춉쓰',
      imgUrl: '/images/hamster5.jpeg',
      content: '우리 #햄스터 귀엽죠 #해시태그테스트2 #태그3',
      hashTag: ['#햄스터','#해시태그테스트2 #태그3'],
      comments: [
        {
          commentId: 1,
          nickname: '춉챱춉챱',
          imgUrl: '/images/hamster4.jpeg',
          content: '몇살인가요?',
        },
        {
          commentId: 2,
          nickname: '박찌',
          imgUrl: '/images/hamster5.jpeg',
          content: '너무기엽다',
        },
      ],
    },
    {
      whisperId: 2,
      nickname: '냠냠쓰',
      imgUrl: '/images/hamster2.jpeg',
      content: '우리 햄스터 짱귀엽죠',
      comments: [
        {
          commentId: 1,
          nickname: '춉스키',
          imgUrl: '/images/hamster4.jpeg',
          content: '몇살인가요?',
        },
      ],
    },
    {
      whisperId: 3,
      nickname: '춉춉춉',
      imgUrl: '/images/hamster3.jpeg',
      content: '우리 냠냠쓰를 봐주세요',
    },
  ]

  return (
    <div className={cn.container}>
      <div className={cn.topWrapper}>
        <div className={cn.fixedWrapper}>
          <div className={cn.titleArea}>
            <div className={cn.title}>
              <Typography size="24" weight="800">
                타임라인
              </Typography>
            </div>
          </div>
          <div className={cn.subTitleArea}>
            <Typography size="14" color="primary" className="subTitle">
              친구들이 무슨 이야기를 하고 있나요?
            </Typography>
          </div>
        </div>
      </div>

      <div className={cn.whisperWrapper}>
        <WhispersList whispers={whispers} />
      </div>
    </div>
  )
}
