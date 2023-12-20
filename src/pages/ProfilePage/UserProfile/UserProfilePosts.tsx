import { FC } from 'react'
import { useAppSelector } from '../../../app/store'
import { AuthUserType } from '../../../app/authReducer'

export const UserProfilePosts: FC<UserProfilePostsType> = ({ posts }) => {
      const user = useAppSelector<AuthUserType>((state) => state.auth.data)
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
