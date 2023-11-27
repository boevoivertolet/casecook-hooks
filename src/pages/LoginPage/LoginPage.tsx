import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../app/store'
import { LoginForm } from '../../components/LoginForm'

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
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                  }}
            >
                  <LoginForm />
            </div>
      )
}
