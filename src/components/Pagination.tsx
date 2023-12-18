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
                  <StyledPrevNextButtonPage
                        $active={false}
                        disabled={currentPage === 1}
                        $visibility={currentPage > 1}
                        onClick={() => {
                              dispatch(setCurrentPage(currentPage - 1))
                        }}
                  >
                        {currentPage > 1 && currentPage - 1}
                  </StyledPrevNextButtonPage>

                  {pages.slice(currentPage - 1, currentPage).map((pn) => (
                        <StyledPage
                              $active={currentPage === pn}
                              onClick={() => {
                                    dispatch(setCurrentPage(pn))
                              }}
                        >
                              {pn}
                        </StyledPage>
                  ))}
                  <StyledPrevNextButtonPage
                        $active={false}
                        $visibility={currentPage >= 1}
                        onClick={() => {
                              dispatch(setCurrentPage(currentPage + 1))
                        }}
                  >
                        {currentPage >= 1 && currentPage + 1}
                  </StyledPrevNextButtonPage>
            </StyledPagination>
      )
}

type PaginationType = {
      usersPage: UsersPageType
}

const StyledPagination = styled.div`
      position: fixed;
      top: 85%;
      left: 50%;
      justify-content: center;
      align-items: center;
      display: flex;
`
const StyledPage = styled.div<{ $active: boolean }>`
      background: ${(props) => (props.$active ? '#7bc8fe' : 'inherit')};
      display: flex;
      font-size: 30px;
      justify-content: center;
      align-items: center;
      margin-left: 3px;
      margin-right: 3px;
      width: 55px;
      height: 55px;
      border: 1px solid grey;
      border-radius: 50%;
      cursor: pointer;

      &:hover {
            background: #7bc8fe;
      }
`
const StyledPrevNextButtonPage = styled.button<{ $active: boolean; $visibility: boolean }>`
      background: ${(props) => (props.$active ? '#7bc8fe' : 'inherit')};
      opacity: ${(props) => (props.$visibility ? 1 : 0)};
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 3px;
      margin-right: 3px;
      width: 45px;
      height: 25px;
      border: 1px solid grey;
      border-radius: 3px;
      cursor: ${(props) => (props.$visibility ? 'pointer' : '')};

      &:hover {
            background: #7bc8fe;
      }
`
