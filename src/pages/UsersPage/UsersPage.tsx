import { UserCard } from './UserCard/UserCard'

export function UsersPage() {
      const userArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      return (
            <div>
                  <div>
                        {userArr.map((user) => (
                              <UserCard />
                        ))}
                  </div>
            </div>
      )
}
