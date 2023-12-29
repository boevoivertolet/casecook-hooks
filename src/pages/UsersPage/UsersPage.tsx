import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../app/store'
import { Loader } from '../../components/Loader/Loader'
import { Pagination } from '../../components/Pagination'
import { UserCard } from './UserCard/UserCard'
import { UserItemType, requestUsers } from './usersPageReducer'

export function UsersPage() {
      const usersPage = useAppSelector<UsersPageType>((state) => state.usersPage)
      const isFetching = useAppSelector<boolean>((state) => state.app.isFetching)

      const dispatch = useAppDispatch()
      const isAuth = useAppSelector<boolean>((state) => state.auth.data.isAuth)
      const pageSize = usersPage.pageSize // кол-во юзеров отображаемых на странице
      const pageNumber = usersPage.currentPage // номер страницы

      useEffect(() => {
            dispatch(requestUsers(pageNumber, pageSize))
      }, [dispatch, pageNumber, pageSize])

      if (!isAuth) return <Navigate to={'/loginPage'} />
      return (
            <>
                  <StyledUsersPage>
                        <Pagination usersPage={usersPage} />
                        {isFetching ? (
                              <Loader />
                        ) : (
                              usersPage.items.map((user) => <UserCard key={user.id} user={user} />)
                        )}
                  </StyledUsersPage>
            </>
      )
}

export type UsersPageType = {
      items: UserItemType[]
      totalCount: number
      error: string | null
      pageSize: number
      currentPage: number
      followingInProgress: Array<string>
}

const StyledUsersPage = styled.div`
      width: 100%;
      height: 740px;
      overflow: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
`
