export type Whisper = {
  whisperId: number
  nickname: string
  imgUrl: string
  content: string
  comments?: Comment[]
  hashTag?: string[]
}

export type Comment = {
  commentId: number,
  nickname: string,
  imgUrl: string,
  content: string
}