import { Dispatch } from 'redux'
import { getAuthUserData } from './authReducer'

let initialState: InitialAppStateType = {
      isFetching: false,
      initialized: false,
      modalLogout: false,
}

export const appReducer = (state: InitialAppStateType = initialState, action: AppActionType): InitialAppStateType => {
      switch (action.type) {
            case 'samurai-network/app/SET-IS-FETCHING':
                  return {
                        ...state,
                        isFetching: action.isFetching,
                  }
            case 'samurai-network/app/SET-INITIALIZED':
                  return {
                        ...state,
                        initialized: true,
                  }
            case 'samurai-network/app/SET-MODALLOGOUT':
                  return {
                        ...state,
                        modalLogout: !state.modalLogout,
                  }
            default:
                  return state
      }
}
// Action Creators

export const setIsFetchingAC = (isFetching: boolean) =>
      ({ type: 'samurai-network/app/SET-IS-FETCHING', isFetching }) as const //Action Create
export const setInitializedAC = () => ({ type: 'samurai-network/app/SET-INITIALIZED' }) as const //Action Create
export const setModalLogoutAC = () => ({ type: 'samurai-network/app/SET-MODALLOGOUT' }) as const //Action Create

//Thunks

export const initializeApp = () => (dispatch: Dispatch<any>) => {
      dispatch(setIsFetchingAC(true))
      let promise = dispatch(getAuthUserData())
      Promise.all([promise]).then(() => {
            dispatch(setInitializedAC())
            dispatch(setIsFetchingAC(false))
      })
}

//Types

type InitialAppStateType = {
      isFetching: boolean
      initialized: boolean
      modalLogout: boolean
}

type SetIsFetchingACType = ReturnType<typeof setIsFetchingAC>
type SetInitializedACType = ReturnType<typeof setInitializedAC>
type SetModalLogoutACType = ReturnType<typeof setModalLogoutAC>
export type AppActionType = SetIsFetchingACType | SetInitializedACType | SetModalLogoutACType
