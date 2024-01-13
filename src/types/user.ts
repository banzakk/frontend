export type UserProps = {
  user: User
  followingCount: number
  followerCount: number
}

export type User = {
  userId: number
  name: string
  email: string
  userCustomId: string
  userProfileImageUrl: string
}
