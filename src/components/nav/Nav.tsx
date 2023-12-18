import { NavLink } from 'react-router-dom'
import s from './Nav.module.css'
import { useAppSelector } from '../../app/store'

export function Nav() {
      const userId = useAppSelector<number | null>((state) => state.auth.data.id)

      return (
            <div className={s.nav}>
                  <div>
                        <NavLink className={s.navLink} to={`/profilePage/${userId}`}>
                              My profile
                        </NavLink>
                  </div>
                  <div>
                        <NavLink className={s.navLink} to={'/newsPage'}>
                              News
                        </NavLink>
                  </div>
                  <div>
                        <NavLink className={s.navLink} to={'/messengerPage'}>
                              Messenger
                        </NavLink>
                  </div>
                  <div>
                        <NavLink className={s.navLink} to={'/usersPage'}>
                              Users
                        </NavLink>
                  </div>
                  <div>
                        <NavLink className={s.navLink} to={'/musicPage'}>
                              Music
                        </NavLink>
                  </div>
                  <div>
                        <NavLink className={s.navLink} to={'/settingsPage'}>
                              Settings
                        </NavLink>
                  </div>
            </div>
      )
}
