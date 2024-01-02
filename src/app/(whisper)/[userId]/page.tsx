import Link from 'next/link'
import Typography from '@/components/atom/Typography/Typography'
import WhispersList from '@/components/molecule/WhispersList/WhispersList'
import ProfileImg from '@/components/atom/ProfileImg/ProfileImg'
import { UserProps } from '@/types'
import { WhisperProps } from '@/types'
import cn from './page.module.scss'

export default async function UserWhisperPage() {
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
  const userData: UserProps = {
    userId: 'chopchop',
    nickname: '춉춉쓰',
    profileImg: '/images/hamster.jpg',
    content: '소개글 입력란',
    follow: '10',
    follower: '90',
  }
  const { userId, nickname, profileImg, content, follow, follower } = userData

  const followList = [
    { count: follow, countLabel: '팔로우' },
    { count: follower, countLabel: '팔로워' },
    { count: follower, countLabel: '속삭임' },
    { count: follower, countLabel: '게시글' },
  ]

  return (
    <div className={cn.container}>
      <div className={cn.topWrapper}>
        <div className={cn.fixedWrapper}>
          <div className={cn.titleArea}>
            <div className={cn.title}>
              <Typography size="24" weight="800">
                프로필
              </Typography>
            </div>
            <div className={cn.profileContainer}>
              <div className={cn.profileArea}>
                <ProfileImg
                  src={profileImg}
                  alt="프로필이미지"
                  className={cn.profile}
                />
                <div className={cn.contentArea}>
                  <div className={cn.nickNameArea}>
                    <Typography size="24" weight="600" className={cn.nickName}>
                      {nickname}
                    </Typography>
                    <Typography size="18" color="gray-strong">
                      @{userId}
                    </Typography>
                  </div>
                  <div className={cn.content}>
                    <Typography size="18">{content}</Typography>
                  </div>
                  <div className={cn.followInfoArea}>
                    {followList.map(({ count, countLabel }, index) => (
                      <div key={index}>
                        <Typography
                          weight="600"
                          color="gray-strong"
                          className={cn.count}
                        >
                          {count}
                        </Typography>
                        <Typography
                          color="gray-strong"
                          className={cn.countLabel}
                        >
                          {countLabel}
                        </Typography>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className={cn.menuArea}>
            <Link href={userId}>
              <Typography color="primary">속삭임</Typography>
            </Link>
            <Link href={userId}>
              <Typography color="primary">커뮤니티</Typography>
            </Link>
            <Link href={userId}>
              <Typography color="primary">미디어</Typography>
            </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={cn.whisperWrapper}>
        <WhispersList whispers={whispers} />
      </div>
    </div>
  )
}
