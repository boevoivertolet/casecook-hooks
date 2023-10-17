import { IUser } from '../profilePageReducer'

export const UserProfile: React.FC<UserProfileType> = (props) => {
      const { userProfile, status, ...restProps } = props
      return (
            <div>
                  <div>
                        <img src='#' alt='photos' />
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
      userProfile: IUser | null
      status: string
}
