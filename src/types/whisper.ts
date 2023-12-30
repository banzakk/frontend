export type WhisperProps = {
  whisperId: number
  nickname: string
  imgUrl: string[]
  content: string
  comments?: CommentProps[]
  hashTag?: string[]
}

export type CommentProps = {
  commentId: number,
  nickname: string,
  imgUrl: string,
  content: string
}