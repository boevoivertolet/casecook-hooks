import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../app/store'

export function MessengerPage() {
      const isAuth = useAppSelector<boolean>((state) => state.auth.data.isAuth)
      if (!isAuth) return <Navigate to={'/loginPage'} />
      return <div>MessengerPage</div>
}
