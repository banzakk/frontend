export type WhisperProps = {
  whisperId: number
  nickName: string
  imageUrl: string[]
  content: string
  comments?: CommentProps[]
  hashTag?: string[]
  isMyWhisper?: string
}

export type CommentProps = {
  commentId: number,
  nickName: string,
  profileUrl: string,
  content: string
}