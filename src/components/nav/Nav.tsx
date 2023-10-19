import { NavLink } from 'react-router-dom'
import s from './Nav.module.css'

export function Nav() {
      return (
            <div>
                  <div>
                        <NavLink className={({ isActive }) => (isActive ? s.active : s.navLink)} to={'/profilePage'}>
                              Profile
                        </NavLink>
                  </div>
                  <div>
                        <NavLink className={({ isActive }) => (isActive ? s.active : s.navLink)} to={'/newsPage'}>
                              News
                        </NavLink>
                  </div>
                  <div>
                        <NavLink className={({ isActive }) => (isActive ? s.active : s.navLink)} to={'/messengerPage'}>
                              Messenger
                        </NavLink>
                  </div>
                  <div>
                        <NavLink className={({ isActive }) => (isActive ? s.active : s.navLink)} to={'/usersPage'}>
                              Users
                        </NavLink>
                  </div>
                  <div>
                        <NavLink className={({ isActive }) => (isActive ? s.active : s.navLink)} to={'/musicPage'}>
                              Music
                        </NavLink>
                  </div>
                  <div>
                        <NavLink className={({ isActive }) => (isActive ? s.active : s.navLink)} to={'/settingsPage'}>
                              Settings
                        </NavLink>
                  </div>
            </div>
      )
}
