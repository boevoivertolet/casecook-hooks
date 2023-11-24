import { Navigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/store'
import { AddPostForm } from './UserProfile/AddPostForm'
import { UserProfile } from './UserProfile/UserProfile'
import { UserProfilePosts } from './UserProfile/UserProfilePosts'
import { IUserProfile, getStatusProfile, getUserProfile } from './profilePageReducer'
import { useEffect } from 'react'

export const ProfilePage = () => {
      const profilePage = useAppSelector<ProfilePageType>((state) => state.profilePage)
      const dispatch = useAppDispatch()
      const isAuth = useAppSelector<boolean>((state) => state.auth.data.isAuth)

      useEffect(() => {
            dispatch(getUserProfile(24563)) //  hard code
            dispatch(getStatusProfile(24563)) // hard code
      }, [])

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
