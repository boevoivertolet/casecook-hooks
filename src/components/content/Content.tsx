import { Routes, Route } from 'react-router-dom'
import { Profile } from '../../pages/Profile/Profile'
import { News } from '../../pages/News/News'
import { Messenger } from '../../pages/Messenger/Messenger'
import { Friends } from '../../pages/Friends/Friends'
import { Music } from '../../pages/Music/Music'
import { Settings } from '../../pages/Settings/Settings'
import { Error404 } from '../../pages/ErrorPage/Error404'

export function Content() {
      return (
            <div>
                  <Routes>
                        <Route path={'/'} element={<Profile />} />

                        <Route path={'profile'} element={<Profile />} />
                        <Route path={'news'} element={<News />} />
                        <Route path={'/messenger'} element={<Messenger />} />
                        <Route path={'/friends'} element={<Friends />} />
                        <Route path={'/music'} element={<Music />} />
                        <Route path={'/settings'} element={<Settings />} />

                        <Route path={'/*'} element={<Error404 />} />
                  </Routes>
            </div>
      )
}
