import { useAppDispatch, useAppSelector } from '../app/store'
import { setModalLogoutAC } from '../app/appReducer'
import { logout } from '../app/authReducer'

export const ModalLogout = () => {
      const dispatch = useAppDispatch()
      const modal = useAppSelector<boolean>((state) => state.app.modalLogout)
      const onClickModalHandle = () => dispatch(setModalLogoutAC())
      const onClickHandle = () => {
            dispatch(logout())
            dispatch(setModalLogoutAC())
      }
      return (
            <div>
                  {modal && (
                        <div
                              style={{
                                    position: 'absolute',
                                    padding: '10px',
                                    border: '1px solid white',
                                    top: '3px',
                                    left: '60px',
                                    width: 'max-content',
                                    display: 'flex',
                                    flexDirection: 'column',
                              }}
                        >
                              {' '}
                              Are you sure?
                              <div
                                    style={{
                                          display: 'flex',
                                          justifyContent: 'space-evenly',
                                    }}
                              >
                                    <button onClick={onClickHandle}>Yes</button>
                                    <button onClick={onClickModalHandle}>No</button>
                              </div>
                        </div>
                  )}
                  <button disabled={modal} onClick={onClickModalHandle}>
                        logout
                  </button>
            </div>
      )
}
