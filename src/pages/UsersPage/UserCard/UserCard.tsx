import { UserItemType } from '../usersPageReducer'

export const UserCard: React.FC<UserCardType> = (props) => {
      const { userCard } = props
      return (
            <div>
                  <div>{userCard.name}</div>
            </div>
      )
}
type UserCardType = {
      userCard: UserItemType
}
