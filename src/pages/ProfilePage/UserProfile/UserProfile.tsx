import { IUserProfile } from '../profilePageReducer'
import AltPhoto from '../../../image/alt-photo.png'

export const UserProfile: React.FC<UserProfileType> = (props) => {
      const { userProfile, status, ...restProps } = props

      const userPhoto = userProfile?.photos.large ? userProfile?.photos.large : AltPhoto
      return (
            <div>
                  <div>
                        <img style={{ width: '150px', height: '150px' }} src={userPhoto} alt='userPhoto' />
                  </div>
                  <div>{userProfile?.fullName}</div>
                  <div>{status}</div>
                  <div>{userProfile?.lookingForAJob}</div>
                  <div>{userProfile?.lookingForAJobDescription}</div>
                  <div>
                        contacts:
                        <ul>
                              <li>vk</li>
                              <li>facebook</li>
                              <li>instagram</li>
                              <li>twitter</li>
                              <li>website</li>
                              <li>youtube</li>
                              <li>github</li>
                        </ul>
                  </div>
            </div>
      )
}

type UserProfileType = {
      userProfile: IUserProfile | null
      status: string
}
