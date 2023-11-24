import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/store'
import { UserCard } from './UserCard/UserCard'
import { UserItemType, requestUsers } from './usersPageReducer'
import { Navigate } from 'react-router-dom'

export function UsersPage() {
      const usersPage = useAppSelector<UsersPageType>((state) => state.usersPage)
      const dispatch = useAppDispatch()
      const isAuth = useAppSelector<boolean>((state) => state.auth.data.isAuth)
      const pageSize = usersPage.pageSize // кол-во юзеров отображаемых на странице
      const pageNumber = usersPage.totalCount // номер страницы

      useEffect(() => {
            dispatch(requestUsers(1, 10)) //hard code
      }, [])

      if (!isAuth) return <Navigate to={'/loginPage'} />
      return (
            <div>
                  {usersPage.items.map((user) => (
                        <UserCard key={user.id} user={user} />
                  ))}
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
