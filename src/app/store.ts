import { AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import thunk, { ThunkDispatch } from 'redux-thunk'
import { profilePageReducer } from '../pages/ProfilePage/profilePageReducer'
import { TypedUseSelectorHook, useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const rootReducer = combineReducers({
      profilePage: profilePageReducer,
})
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
export type ThunkAppDispatchType = ThunkDispatch<RootStateType, any, AnyAction>
export const useAppDispatch = () => useDispatch<ThunkAppDispatchType>()
export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store
