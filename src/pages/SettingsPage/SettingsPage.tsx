import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../app/store'

export function SettingsPage() {
      const isAuth = useAppSelector<boolean>((state) => state.auth.data.isAuth)
      if (!isAuth) return <Navigate to={'/loginPage'} />
      return <div>SettingsPage</div>
}
