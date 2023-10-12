import { NavLink } from 'react-router-dom'
import s from './Nav.module.css'

export function Nav() {
      return (
            <div>
                  <div>
                        <NavLink className={({ isActive }) => (isActive ? s.active : s.navLink)} to={'/profile'}>
                              Profile
                        </NavLink>
                  </div>
                  <div>
                        <NavLink className={({ isActive }) => (isActive ? s.active : s.navLink)} to={'/news'}>
                              News
                        </NavLink>
                  </div>
                  <div>
                        <NavLink className={({ isActive }) => (isActive ? s.active : s.navLink)} to={'/messenger'}>
                              Messenger
                        </NavLink>
                  </div>
                  <div>
                        <NavLink className={({ isActive }) => (isActive ? s.active : s.navLink)} to={'/friends'}>
                              Friends
                        </NavLink>
                  </div>
                  <div>
                        <NavLink className={({ isActive }) => (isActive ? s.active : s.navLink)} to={'/music'}>
                              Music
                        </NavLink>
                  </div>
                  <div>
                        <NavLink className={({ isActive }) => (isActive ? s.active : s.navLink)} to={'/settings'}>
                              Settings
                        </NavLink>
                  </div>
            </div>
      )
}
