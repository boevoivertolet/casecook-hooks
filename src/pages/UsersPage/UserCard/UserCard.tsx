import { follow, setIsFollowingProgress, unFollow, UserItemType } from '../usersPageReducer'
import userPhoto from '../../../image/alt-photo.png'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../app/store'
import { FC } from 'react'
import styled from 'styled-components'

export const UserCard: FC<UserCardType> = ({ user }) => {
      const dispatch = useAppDispatch()
      const isFetching = useAppSelector<boolean>((state) => state.app.isFetching)
      const followingInProgress = useAppSelector<string[]>((state) => state.usersPage.followingInProgress)
      const unFollowHandler = () => {
            dispatch(unFollow(user.id))
            dispatch(setIsFollowingProgress(true, user.id))
      }
      const followHandler = () => {
            dispatch(follow(user.id))
            dispatch(setIsFollowingProgress(true, user.id))
      }

      return (
            <StyledUserCard>
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

                  <div>{user.status ? user.status : ''}</div>

                  {user.followed ? (
                        <Button disabled={followingInProgress.some((id) => id === user.id)} onClick={unFollowHandler}>
                              unfollow
                        </Button>
                  ) : (
                        <Button disabled={followingInProgress.some((id) => id === user.id)} onClick={followHandler}>
                              follow
                        </Button>
                  )}
            </StyledUserCard>
      )
}
type UserCardType = {
      user: UserItemType
}

const StyledUserCard = styled.div`
      margin: 20px;
      border: 1px solid black;
      width: 360px;
      height: 200px;
`
const Button = styled.button`
      margin-top: auto;
      width: 80px;
      height: 30px;
`
