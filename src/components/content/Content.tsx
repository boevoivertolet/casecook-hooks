import { Routes, Route, Navigate } from 'react-router-dom'

import { Error404 } from '../../pages/ErrorPage/Error404'
import { ProfilePage } from '../../pages/ProfilePage/ProfilePage'
import { NewsPage } from '../../pages/NewsPage/NewsPage'
import { MessengerPage } from '../../pages/MessengerPage/MessengerPage'
import { FriendsPage } from '../../pages/FriendsPage/FriendsPage'
import { MusicPage } from '../../pages/MusicPage/MusicPage'
import { SettingsPage } from '../../pages/SettingsPage/SettingsPage'

export function Content() {
      return (
            <div>
                  <Routes>
                        <Route path={'/'} element={<Navigate to={'/profilePage'} />} />

                        <Route path={'profilePage'} element={<ProfilePage />} />
                        <Route path={'newsPage'} element={<NewsPage />} />
                        <Route path={'/messengerPage'} element={<MessengerPage />} />
                        <Route path={'/friendsPage'} element={<FriendsPage />} />
                        <Route path={'/musicPage'} element={<MusicPage />} />
                        <Route path={'/settingsPage'} element={<SettingsPage />} />

                        <Route path={'/*'} element={<Error404 />} />
                  </Routes>
            </div>
      )
}
