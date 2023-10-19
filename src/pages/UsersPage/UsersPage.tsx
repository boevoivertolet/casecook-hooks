import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/store'
import { UserCard } from './UserCard/UserCard'
import { UserItemType, requestUsers } from './usersPageReducer'

export function UsersPage() {
      const usersPage = useAppSelector<UsersPageType>((state) => state.usersPage)
      const dispatch = useAppDispatch()
      useEffect(() => {
            dispatch(requestUsers(1, 10)) //hard code
      }, [])

      return (
            <div>
                  <div>
                        {usersPage.items.map((user) => (
                              <UserCard userCard={user} />
                        ))}
                  </div>
            </div>
      )
}

type UsersPageType = {
      items: UserItemType[]
      totalCount: number
      error: string | null
      pageSize: number
      currentPage: number
      followingInProgress: Array<string>
}
