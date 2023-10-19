import { Dispatch } from 'redux'
import { usersAPI } from '../../api/api'

let initialState: InitialUsersPageType = {
      items: [],
      totalCount: 100,
      error: null,
      pageSize: 100,
      currentPage: 1,
      followingInProgress: [],
}

export const usersPageReducer = (
      state: InitialUsersPageType = initialState,
      action: UsersPageActionType
): InitialUsersPageType => {
      switch (action.type) {
            case 'samurai-network/user/FOLLOW':
                  return {
                        ...state,
                        items: state.items.map((u) => (u.id === action.userId ? { ...u, followed: true } : u)),
                  }
            case 'samurai-network/user/UNFOLLOW':
                  return {
                        ...state,
                        items: state.items.map((u) => (u.id === action.userId ? { ...u, followed: false } : u)),
                  }
            case 'samurai-network/user/SET-USERS':
                  return {
                        ...state,
                        items: [...action.items],
                  }
            case 'samurai-network/user/SET-CURRENT-PAGE':
                  return {
                        ...state,
                        currentPage: action.currentPage,
                  }
            case 'samurai-network/user/SET-USERS-TOTAL-COUNT':
                  return {
                        ...state,
                        totalCount: action.totalCount,
                  }
            case 'samurai-network/user/SET-IS-FOLLOWING-PROGRESS':
                  return {
                        ...state,
                        followingInProgress: action.isFetching
                              ? [...state.followingInProgress, action.userId]
                              : state.followingInProgress.filter((id) => id !== action.userId),
                  }

            default:
                  return state
      }
}

//Action Creators
export const acceptFollow = (userId: string) => ({ type: 'samurai-network/user/FOLLOW', userId } as const) //Action Create
export const acceptUnfollow = (userId: string) => ({ type: 'samurai-network/user/UNFOLLOW', userId } as const) //Action Create
export const setUsers = (items: UserItemType[]) => ({ type: 'samurai-network/user/SET-USERS', items } as const) //Action Create
export const setCurrentPage = (currentPage: number) =>
      ({ type: 'samurai-network/user/SET-CURRENT-PAGE', currentPage } as const) //Action Create
export const setTotalUsersCount = (totalCount: number) =>
      ({ type: 'samurai-network/user/SET-USERS-TOTAL-COUNT', totalCount } as const) //Action Create
export const setIsFollowingProgress = (isFetching: boolean, userId: string) =>
      ({
            type: 'samurai-network/user/SET-IS-FOLLOWING-PROGRESS',
            isFetching,
            userId,
      } as const) //Action Create

//Thunk Creator

export const requestUsers = (page: number, pageSize: number) => {
      return (dispatch: Dispatch) => {
            // dispatch(setIsFetchingAC(true))
            usersAPI.getUsers(page, pageSize).then((data) => {
                  // dispatch(setIsFetchingAC(false))
                  dispatch(setUsers(data.items))
                  dispatch(setTotalUsersCount(data.totalCount))
            })
      }
}
export const follow = (userId: string) => {
      return (dispatch: Dispatch) => {
            // dispatch(setIsFetchingAC(true))
            usersAPI.postFollow(userId).then((data) => {
                  if (data.resultCode === 0) {
                        dispatch(acceptFollow(userId))
                  }
                  // dispatch(setIsFetchingAC(false))
            })
      }
}
export const unFollow = (userId: string) => {
      return (dispatch: Dispatch) => {
            // dispatch(setIsFetchingAC(true))
            usersAPI.deleteFollow(userId).then((data) => {
                  if (data.resultCode === 0) {
                        dispatch(acceptUnfollow(userId))
                  }
                  // dispatch(setIsFetchingAC(false))
            })
      }
}
//Types

export type InitialUsersPageType = {
      items: Array<UserItemType>
      totalCount: number
      error: string | null
      pageSize: number
      currentPage: number
      followingInProgress: Array<string>
}

export type UserItemType = {
      uniqueUrlName: null
      id: string
      followed: boolean
      name: string
      status: string
      photos: PhotosType
}
type PhotosType = {
      small: string | undefined
      large: string | undefined
}

export type UsersPageActionType =
      | ReturnType<typeof acceptFollow>
      | ReturnType<typeof acceptUnfollow>
      | ReturnType<typeof setUsers>
      | ReturnType<typeof setCurrentPage>
      | ReturnType<typeof setTotalUsersCount>
      | ReturnType<typeof setIsFollowingProgress>
