import { IUserProfile, updateStatusProfile } from '../profilePageReducer'
import AltPhoto from '../../../image/alt-photo.png'
import { ChangeEvent, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store'
import { Link } from 'react-router-dom'

export const UserProfile: React.FC<UserProfileType> = (props) => {
      const dispatch = useAppDispatch()
      const id = useAppSelector<number | null>((state) => state.auth.data.id)
      const { userProfile, status, changeButtonVue, ...restProps } = props
      const [userStatus, setUserStatus] = useState<string>('')
      const [editMode, setEditMode] = useState<boolean>(false)

      useEffect(() => {
            if (status) {
                  setUserStatus(status)
            }
      }, [status])

      const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setUserStatus(e.currentTarget.value)
      }

      const userPhoto = userProfile?.photos.large ? userProfile?.photos.large : AltPhoto
      return (
            <div>
                  <div>
                        <img style={{ width: '150px', height: '150px' }} src={userPhoto} alt='userPhoto' />
                  </div>
                  <div>{userProfile?.fullName}</div>
                  <div>
                        {editMode ? (
                              <input
                                    onChange={onChangeHandler}
                                    autoFocus
                                    onBlur={() => {
                                          setEditMode(false)
                                          dispatch(updateStatusProfile(userStatus))
                                    }}
                                    value={userStatus}
                                    type='text'
                              />
                        ) : (
                              <div>{userStatus}</div>
                        )}
                        {userProfile?.userId === id && (
                              <button
                                    onClick={() => {
                                          setEditMode(true)
                                    }}
                              >
                                    change
                              </button>
                        )}
                  </div>
                  <div>{userProfile?.lookingForAJob}</div>
                  <div>{userProfile?.lookingForAJobDescription}</div>
                  <div>
                        contacts:
                        <ul>
                              {userProfile?.contacts.vk && (
                                    <li>
                                          <Link target={'_blank'} to={userProfile?.contacts.vk}>
                                                vk
                                          </Link>
                                    </li>
                              )}
                              {userProfile?.contacts.github && (
                                    <li>
                                          <Link target={'_blank'} to={userProfile?.contacts.github}>
                                                git
                                          </Link>
                                    </li>
                              )}
                              {userProfile?.contacts.facebook && (
                                    <li>
                                          <Link target={'_blank'} to={userProfile?.contacts.facebook}>
                                                facebook
                                          </Link>
                                    </li>
                              )}
                              {userProfile?.contacts.twitter && (
                                    <li>
                                          <Link target={'_blank'} to={userProfile?.contacts.twitter}>
                                                twitter
                                          </Link>
                                    </li>
                              )}
                              {userProfile?.contacts.instagram && (
                                    <li>
                                          <Link target={'_blank'} to={userProfile?.contacts.instagram}>
                                                instagram
                                          </Link>
                                    </li>
                              )}
                              {userProfile?.contacts.youtube && (
                                    <li>
                                          <Link target={'_blank'} to={userProfile?.contacts.youtube}>
                                                youtube
                                          </Link>
                                    </li>
                              )}
                              {userProfile?.contacts.mainLink && (
                                    <li>
                                          <Link target={'_blank'} to={userProfile?.contacts.mainLink}>
                                                click
                                          </Link>
                                    </li>
                              )}
                              {userProfile?.contacts.website && (
                                    <li>
                                          <Link target={'_blank'} to={userProfile?.contacts.website}>
                                                website
                                          </Link>
                                    </li>
                              )}
                        </ul>
                  </div>
            </div>
      )
}

type UserProfileType = {
      userProfile: IUserProfile | null
      status: string
      changeButtonVue?: boolean
}
