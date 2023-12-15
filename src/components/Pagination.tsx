import React, { FC } from 'react'
import styled from 'styled-components'
import { UsersPageType } from '../pages/UsersPage/UsersPage'
import { useAppDispatch } from '../app/store'
import { setCurrentPage } from '../pages/UsersPage/usersPageReducer'

export const Pagination: FC<PaginationType> = ({ usersPage }) => {
      const dispatch = useAppDispatch()
      const currentPage = usersPage.currentPage
      const totalCount = usersPage.totalCount
      const pageSize = usersPage.pageSize
      const pageCount = Math.ceil(totalCount / pageSize)
      const pages = []
      for (let c = 1; c <= pageCount; c++) {
            pages.push(c)
      }

      return (
            <StyledPagination>
                  {currentPage !== 1 && (
                        <StyledPage
                              $active={false}
                              onClick={() => {
                                    dispatch(setCurrentPage(currentPage - 1))
                              }}
                        >
                              {currentPage - 1}
                        </StyledPage>
                  )}
                  {pages.slice(currentPage - 1, currentPage + 4).map((pn) => (
                        <StyledPage
                              $active={currentPage === pn}
                              onClick={() => {
                                    dispatch(setCurrentPage(pn))
                              }}
                        >
                              {pn}
                        </StyledPage>
                  ))}
                  {/*<div>next</div>*/}
            </StyledPagination>
      )
}

type PaginationType = {
      usersPage: UsersPageType
}

const StyledPagination = styled.div`
      justify-content: center;
      align-items: center;
      display: flex;
`
const StyledPage = styled.div<{ $active: boolean }>`
      background: ${(props) => (props.$active ? '#7bc8fe' : 'inherit')};
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 3px;
      margin-right: 3px;
      width: 25px;
      height: 25px;
      border: 1px solid grey;
      border-radius: 3px;
      cursor: pointer;

      &:hover {
            background: #7bc8fe;
      }
`
