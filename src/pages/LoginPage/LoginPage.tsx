import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../app/store'

export const LoginPage = () => {
      const isAuth = useAppSelector<boolean>((state) => state.auth.data.isAuth)

      if (isAuth) return <Navigate to={'/profilePage'} />
      return (
            <div
                  style={{
                        position: 'fixed',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        background: 'rgb(80, 133, 250)',
                  }}
            >
                  <form>
                        <div>
                              <input type='text' />
                        </div>
                        <div>
                              <input type='password' />
                        </div>
                        <div>
                              <input type='checkbox' />
                              remember me
                        </div>
                        <button>login</button>
                  </form>
            </div>
      )
}
