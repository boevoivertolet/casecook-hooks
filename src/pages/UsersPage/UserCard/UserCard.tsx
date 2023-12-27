import { follow, setIsFollowingProgress, unFollow, UserItemType } from '../usersPageReducer'
import userPhoto from '../../../image/alt-photo.png'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../app/store'
import { FC } from 'react'
import styled from 'styled-components'

export const UserCard: FC<UserCardType> = ({ user }) => {
      const dispatch = useAppDispatch()
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
                        <div style={{ textAlign: 'center' }}>
                              <AvaStyle
                                    $followed={user.followed}
                                    src={user.photos.small ? user.photos.large : userPhoto}
                                    alt='userPhoto'
                              />
                              <div>{user.name}</div>
                        </div>
                  </NavLink>

                  <StatusBlock>{user.status ? user.status : 'no status yet =('}</StatusBlock>

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
      backdrop-filter: blur(40px);
      background: rgba(255, 255, 255, 0.4);
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      margin: 2px;
      border: 1px solid black;
      width: 360px;
      height: 400px;

      & > a {
            color: black;
            text-decoration: none;
      }
`
const Button = styled.button`
      width: 80px;
      height: 25px;
      margin: 0;
`
const AvaStyle = styled.img<{ $followed: boolean }>`
      position: relative;
      box-sizing: border-box;
      border-radius: ${(props) => (props.$followed ? '50%' : '50%')};
      border: ${(props) => (props.$followed ? '5px solid gold' : '')};
      width: 180px;
`
const StatusBlock = styled.div`
      height: 100px;
      margin: 5px;
      padding: 2px;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
`
