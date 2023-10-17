import { AddPostForm } from './Profile/AddPostForm'
import { UserProfile } from './Profile/Profile'
import { ProfilePosts } from './Profile/ProfilePosts'
import { useAppDispatch, useAppSelector } from '../../app/store'
import { IUser, getStatusProfile, getUserProfile } from './profilePageReducer'
import { useEffect } from 'react'

export const ProfilePage = () => {
      const profilePage = useAppSelector<ProfilePageType>((state) => state.profilePage)
      const dispatch = useAppDispatch()

      useEffect(() => {
            dispatch(getUserProfile(24563))
            dispatch(getStatusProfile(24563))
      }, [])

      return (
            <div>
                  <div>
                        <UserProfile userProfile={profilePage.userProfile} status={profilePage.status} />
                  </div>
                  <div>
                        <AddPostForm />
                  </div>
                  <div>
                        <ProfilePosts />
                  </div>
            </div>
      )
}

type ProfilePageType = {
      userProfile: IUser | null
      status: string
}
