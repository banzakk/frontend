export type UserDto = {
  email: string
  name: string
  userCustomId: string
  password: string
}

export type ProgressStatus =
  | 'signup'
  | 'agreement'
  | 'picture'
  | 'hashtag'
  | 'follow'
