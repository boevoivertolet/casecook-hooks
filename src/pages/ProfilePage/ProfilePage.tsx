import { Navigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/store'
import { AddPostForm } from './UserProfile/AddPostForm'
import { UserProfile } from './UserProfile/UserProfile'
import { UserProfilePosts } from './UserProfile/UserProfilePosts'
import { IUserProfile, getStatusProfile, getUserProfile } from './profilePageReducer'
import { useEffect } from 'react'
import { AuthUserType } from '../../app/authReducer'

export const ProfilePage = () => {
      const profilePage = useAppSelector<ProfilePageType>((state) => state.profilePage)
      const userId = useAppSelector<number | null>((state) => state.auth.data.id)
      const dispatch = useAppDispatch()
      const isAuth = useAppSelector<boolean>((state) => state.auth.data.isAuth)

      useEffect(() => {
            if (userId) {
                  dispatch(getUserProfile(userId)) //  hard code
                  dispatch(getStatusProfile(userId)) // hard code
            }
      }, [userId])

      if (!isAuth) return <Navigate to={'/loginPage'} />

      return (
            <div>
                  <div>
                        <UserProfile userProfile={profilePage.userProfile} status={profilePage.status} />
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
