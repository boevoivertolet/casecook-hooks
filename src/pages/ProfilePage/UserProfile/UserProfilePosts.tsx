import { FC } from 'react'

export const UserProfilePosts: FC<UserProfilePostsType> = ({ posts }) => {
      return (
            <div>
                  {posts.map((el) => (
                        <div>{el}</div>
                  ))}
            </div>
      )
}
type UserProfilePostsType = {
      posts: string[]
}
