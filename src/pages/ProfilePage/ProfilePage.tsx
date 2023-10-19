import { useAppDispatch, useAppSelector } from '../../app/store'
import { AddPostForm } from './UserProfile/AddPostForm'
import { UserProfile } from './UserProfile/UserProfile'
import { UserProfilePosts } from './UserProfile/UserProfilePosts'
import { IUserProfile, getStatusProfile, getUserProfile } from './profilePageReducer'
import { useEffect } from 'react'

export const ProfilePage = () => {
      const profilePage = useAppSelector<ProfilePageType>((state) => state.profilePage)

      const dispatch = useAppDispatch()

      useEffect(() => {
            dispatch(getUserProfile(24563)) //  hard code
            dispatch(getStatusProfile(24563)) // hard code
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
                        <UserProfilePosts />
                  </div>
            </div>
      )
}

type ProfilePageType = {
      userProfile: IUserProfile | null
      status: string
}
