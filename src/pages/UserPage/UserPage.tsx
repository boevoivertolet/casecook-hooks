import { Navigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/store'

import { useEffect } from 'react'
import { AuthUserType } from '../../app/authReducer'
import { getStatusProfile, getUserProfile, IUserProfile } from '../ProfilePage/profilePageReducer'
import { UserProfile } from '../ProfilePage/UserProfile/UserProfile'
import { InitialUsersPageType, UserItemType } from '../UsersPage/usersPageReducer'
import { UserProfilePosts } from '../ProfilePage/UserProfile/UserProfilePosts'
import { AddPostForm } from '../ProfilePage/UserProfile/AddPostForm'

export const UserPage = () => {
      const profilePage = useAppSelector<ProfilePageType>((state) => state.profilePage)
      const { userId } = useParams()
      const dispatch = useAppDispatch()
      const isAuth = useAppSelector<boolean>((state) => state.auth.data.isAuth)

      useEffect(() => {
            if (userId) {
                  dispatch(getUserProfile(Number(userId)))
                  dispatch(getStatusProfile(Number(userId)))
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
