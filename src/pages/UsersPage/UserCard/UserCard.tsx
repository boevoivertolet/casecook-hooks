import { follow, unFollow, UserItemType } from '../usersPageReducer'
import userPhoto from '../../../image/alt-photo.png'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../app/store'
import { FC } from 'react'

export const UserCard: FC<UserCardType> = ({ user }) => {
      const dispatch = useAppDispatch()
      const isFetching = useAppSelector<boolean>((state) => state.app.isFetching)

      return (
            <div style={{ margin: '20px' }}>
                  <NavLink to={`/profilePage/${user.id}`}>
                        <div>
                              <img
                                    style={{ width: '80px' }}
                                    src={user.photos.small ? user.photos.large : userPhoto}
                                    alt='userPhoto'
                              />
                        </div>

                        <div>{user.name}</div>
                  </NavLink>

                  <div>{user.status ? user.status : ' статус не указан'}</div>

                  {user.followed ? (
                        <button disabled={isFetching} onClick={() => dispatch(unFollow(user.id))}>
                              unfollow
                        </button>
                  ) : (
                        <button disabled={isFetching} onClick={() => dispatch(follow(user.id))}>
                              follow
                        </button>
                  )}
            </div>
      )
}
type UserCardType = {
      user: UserItemType
}
