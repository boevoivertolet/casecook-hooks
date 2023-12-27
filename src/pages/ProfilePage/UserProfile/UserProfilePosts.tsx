import { FC } from 'react'
import { IUserProfile } from '../profilePageReducer'
import userPhoto from '../../../image/alt-photo.png'

export const UserProfilePosts: FC<UserProfilePostsType> = ({ profile }) => {
      // const user = useAppSelector<AuthUserType>((state) => state.auth.data)
      return (
            <div>
                  {profile.posts.map((el) => (
                        <div
                              style={{
                                    border: '1px solid black',
                                    borderRadius: '20px',
                                    width: '500px',
                                    padding: '15px',
                                    margin: '20px',
                              }}
                        >
                              <div
                                    style={{
                                          display: 'flex',
                                    }}
                              >
                                    <div style={{ height: '30px' }}>
                                          <img
                                                style={{ width: '30px', height: '30px' }}
                                                src={
                                                      profile.userProfile?.photos.small
                                                            ? profile.userProfile?.photos.small
                                                            : userPhoto
                                                }
                                                alt=''
                                          />
                                    </div>
                                    <div>{profile.userProfile?.fullName}</div>
                              </div>
                              <div>{el}</div>
                        </div>
                  ))}
            </div>
      )
}
type UserProfilePostsType = {
      profile: {
            userProfile: IUserProfile | null
            status: string
            posts: string[]
      }
}
