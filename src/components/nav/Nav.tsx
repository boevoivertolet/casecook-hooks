import { NavLink } from 'react-router-dom'

export function Nav() {
      return (
            <div>
                  <div>
                        <NavLink to={'/profile'}>Profile</NavLink>
                  </div>
                  <div>
                        <NavLink to={'/news'}>News</NavLink>
                  </div>
                  <div>
                        <NavLink to={'/messenger'}>Messenger</NavLink>
                  </div>
                  <div>
                        <NavLink to={'/friends'}>Friends</NavLink>
                  </div>
                  <div>
                        <NavLink to={'/music'}>Music</NavLink>
                  </div>
                  <div>
                        <NavLink to={'/settings'}>Settings</NavLink>
                  </div>
            </div>
      )
}
