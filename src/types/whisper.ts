export type WhisperProps = {
  whisperId: number
  nickName: string
  imageUrl: string[]
  content: string
  liked: number
  hashTag: string[]
  isMyWhisper: number
  comments?: CommentProps[]
}

export type CommentProps = {
  commentId: number
  nickName: string
  profileUrl: string
  content: string
  isMyComment?: string
}

export type TimelineData = {
  currentPage: number
  data: WhisperProps[]
}
