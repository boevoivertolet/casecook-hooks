import { Navigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/store'
import { AddPostForm } from './UserProfile/AddPostForm'
import { UserProfile } from './UserProfile/UserProfile'
import { UserProfilePosts } from './UserProfile/UserProfilePosts'
import { getStatusProfile, getUserProfile, IUserProfile } from './profilePageReducer'
import { useEffect } from 'react'

export const ProfilePage = () => {
      const profilePage = useAppSelector<ProfilePageType>((state) => state.profilePage)
      const { userId } = useParams()
      const dispatch = useAppDispatch()
      const isAuth = useAppSelector<boolean>((state) => state.auth.data.isAuth)
      const isFetching = useAppSelector<boolean>((state) => state.app.isFetching)

      useEffect(() => {
            if (userId) {
                  dispatch(getUserProfile(Number(userId))) //  hard code
                  dispatch(getStatusProfile(Number(userId))) // hard code
            }
      }, [userId])

      if (!isAuth) return <Navigate to={'/loginPage'} />

      return (
            <div>
                  <div>
                        {isFetching ? (
                              <h1>Loading...</h1>
                        ) : (
                              <UserProfile
                                    changeButtonVue
                                    userProfile={profilePage.userProfile}
                                    status={profilePage.status}
                              />
                        )}
                  </div>
                  <div>
                        <AddPostForm />
                  </div>
                  <div>
                        <UserProfilePosts />
                  </div>
            </div>
      )
}

type ProfilePageType = {
      userProfile: IUserProfile | null
      status: string
}