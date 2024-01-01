import Typography from '@/components/atom/Typography/Typography'
import WhispersList from '@/components/molecule/WhispersList/WhispersList'
import { WhisperProps } from '@/types'
import cn from './page.module.scss'

export default async function WhispersPage() {
  const whispers: WhisperProps[] = [
    {
      whisperId: 1,
      nickName: '춉춉쓰',
      imageUrl: [
        '/images/hamster5.jpeg',
        '/images/hamster4.jpeg',
        '/images/hamster3.jpeg',
      ],
      content: '우리 #햄스터 귀엽죠 #해시태그테스트2 #태그3',
      hashTag: ['#햄스터', '#해시태그테스트2', '#태그3'],
      comments: [
        {
          commentId: 1,
          nickName: '춉챱춉챱',
          profileUrl: '/images/hamster4.jpeg',
          content: '몇살인가요?',
        },
        {
          commentId: 2,
          nickName: '박찌',
          profileUrl: '/images/hamster5.jpeg',
          content: '너무기엽다',
        },
      ],
    },
    {
      whisperId: 2,
      nickName: '냠냠쓰',
      imageUrl: ['/images/hamster2.jpeg'],
      content: '우리 햄스터 짱귀엽죠',
      comments: [
        {
          commentId: 1,
          nickName: '춉스키',
          profileUrl: '/images/hamster4.jpeg',
          content: '몇살인가요?',
        },
      ],
    },
    {
      whisperId: 3,
      nickName: '춉춉춉',
      imageUrl: ['/images/hamster3.jpeg'],
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
