import { UserItemType } from '../usersPageReducer'
import userPhoto from '../../../image/alt-photo.png'
import { NavLink } from 'react-router-dom'

export const UserCard: React.FC<UserCardType> = ({ user }) => {
      return (
            <div style={{ margin: '20px' }}>
                  <div>
                        <img
                              style={{ width: '80px' }}
                              src={user.photos.small ? user.photos.large : userPhoto}
                              alt='userPhoto'
                        />
                  </div>
                  <NavLink to={`/userPage/${user.id}`}>
                        <div>{user.name}</div>
                  </NavLink>
                  <div>{user.status ? user.status : ' статус не указан'}</div>
                  <div>{user.followed ? 'подписан' : 'не подписан'}</div>
            </div>
      )
}
type UserCardType = {
      user: UserItemType
}
