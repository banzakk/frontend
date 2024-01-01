import Whisper from '@/components/molecule/Whisper/Whisper'

export default function Page({ params }: { params: { whisperId: string } }) {
  const whisper = {
    whisperId: 1,
    nickName: '춉춉쓰',
    imageUrl: [
      '/images/hamster5.jpeg',
      '/images/hamster4.jpeg',
      '/images/hamster3.jpeg',
    ],
    content: '우리 #햄스터 귀엽죠 #해시태그테스트2 #태그3',
    hashTag: ['#햄스터', '#해시태그테스트2 #태그3'],
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
  }
  return (
    <div>
      <Whisper {...whisper} />
      My Post: {params.whisperId}
    </div>
  )
}
