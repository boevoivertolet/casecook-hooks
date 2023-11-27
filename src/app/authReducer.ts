import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { authAPI } from '../api/api'
import { LoginFormDataType } from '../components/LoginForm'

let initialState: InitialAuthStateType = {
      data: {
            id: null,
            login: null,
            email: null,
            isAuth: false,
      },
      messages: [],
      fieldsErrors: [],
      resultCode: 0,
}

export const authReducer = (
      state: InitialAuthStateType = initialState,
      action: AuthActionType
): InitialAuthStateType => {
      switch (action.type) {
            case 'samurai-network/auth/SET-USER-DATA':
                  return {
                        ...state,
                        data: action.payload,
                  }

            default:
                  return state
      }
}
// Action Creators

const setAuthUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean) =>
      ({
            type: 'samurai-network/auth/SET-USER-DATA',
            payload: { id, email, login, isAuth },
      }) as const //Action Create

// Thunk Creators

export const getAuthUserData =
      (): ThunkAction<void, InitialAuthStateType, unknown, AuthActionType> => (dispatch: Dispatch) => {
            // dispatch(setIsFetchingAC(true))
            return authAPI.getMe().then((response) => {
                  console.log(response)
                  if (response.resultCode === 0) {
                        let { id, login, email } = response.data
                        dispatch(setAuthUserDataAC(id, email, login, true))
                        // dispatch(setIsFetchingAC(false))
                  }
            })
      }

export const login =
      ({ email, password, rememberMe }: LoginFormDataType) =>
      (dispatch: Dispatch<any>) => {
            // dispatch(setIsFetchingAC(true))
            authAPI.login(email, password, rememberMe).then((res) => {
                  if (res.resultCode === 0) {
                        dispatch(getAuthUserData())
                  }
                  // else {
                  //       let message = res.messages.length > 0 ? res.messages[0] : ' Some error'
                  //       let action = stopSubmit('login', {
                  //             _error: message,
                  //       })
                  //       dispatch(action)
                  // }
                  // dispatch(setIsFetchingAC(false))
            })
      }

export const logout = () => (dispatch: Dispatch<any>) => {
      // dispatch(setIsFetchingAC(true))
      authAPI.logout().then((data) => {
            console.log(data)
            if (data.resultCode === 0) {
                  dispatch(setAuthUserDataAC(null, null, null, false))
                  // dispatch(setIsFetchingAC(false))
            }
      })
}
//Types

export type AuthUserType = {
      id: number | null
      email: string | null
      login: string | null
      isAuth: boolean
}
type InitialAuthStateType = {
      data: AuthUserType
      messages: Array<string>
      fieldsErrors: Array<string>
      resultCode: number
}

type SetAuthUserDataACType = ReturnType<typeof setAuthUserDataAC>
export type AuthActionType = SetAuthUserDataACType
