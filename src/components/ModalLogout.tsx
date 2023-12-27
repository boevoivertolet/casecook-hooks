import { useState } from 'react'
import { logout } from '../app/authReducer'
import { useAppDispatch } from '../app/store'

export const ModalLogout = () => {
      const dispatch = useAppDispatch()
      const [modalVue, setModalVue] = useState<boolean>(false)
      // const modal = useAppSelector<boolean>((state) => state.app.modalLogout)
      // const onClickModalHandle = () => dispatch(setModalLogoutAC())
      // const onClickHandle = () => {
      //       dispatch(logout())
      //       dispatch(setModalLogoutAC())
      // }
      const onClickModalHandle = () => setModalVue((prev) => !prev)
      const onClickHandle = () => {
            dispatch(logout())
            setModalVue(false)
      }
      return (
            <div>
                  {modalVue && (
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
                  <button disabled={modalVue} onClick={onClickModalHandle}>
                        logout
                  </button>
            </div>
      )
}
