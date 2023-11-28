import { Routes, Route, Navigate } from 'react-router-dom'

import { ErrorPage } from '../../pages/ErrorPage/ErrorPage'
import { ProfilePage } from '../../pages/ProfilePage/ProfilePage'
import { NewsPage } from '../../pages/NewsPage/NewsPage'
import { MessengerPage } from '../../pages/MessengerPage/MessengerPage'

import { MusicPage } from '../../pages/MusicPage/MusicPage'
import { SettingsPage } from '../../pages/SettingsPage/SettingsPage'
import { UsersPage } from '../../pages/UsersPage/UsersPage'
import { LoginPage } from '../../pages/LoginPage/LoginPage'
import { useAppSelector } from '../../app/store'

export function Content() {
      const userId = useAppSelector<number | null>((state) => state.auth.data.id)
      return (
            <div>
                  <Routes>
                        <Route path={'/'} element={<Navigate to={`/profilePage`} />} />
                        <Route path={'/:id'} element={<Navigate to={`/profilePage/${userId}`} />} />

                        <Route path={`/profilePage/:userId`} element={<ProfilePage />} />
                        <Route path={'/loginPage'} element={<LoginPage />} />
                        <Route path={'/newsPage'} element={<NewsPage />} />
                        <Route path={'/messengerPage'} element={<MessengerPage />} />
                        <Route path={'/usersPage'} element={<UsersPage />} />
                        <Route path={'/musicPage'} element={<MusicPage />} />
                        <Route path={'/settingsPage'} element={<SettingsPage />} />

                        <Route path={'/*'} element={<ErrorPage />} />
                  </Routes>
            </div>
      )
}
