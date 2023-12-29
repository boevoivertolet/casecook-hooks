import { useEffect } from 'react'
import { ModalLogout } from '../components/ModalLogout'
import { Content } from '../components/content/Content'
import { Nav } from '../components/nav/Nav'
import s from './Casecook.module.css'
import { initializeApp } from './appReducer'
import { useAppDispatch, useAppSelector } from './store'

export function Casecook() {
      const initialized = useAppSelector<boolean>((state) => state.app.initialized)
      const isFetching = useAppSelector<boolean>((state) => state.app.isFetching)

      const dispatch = useAppDispatch()

      useEffect(() => {
            dispatch(initializeApp())
      }, [dispatch])

      return (
            <>
                  {initialized && (
                        <div className={s.wrapper}>
                              <header className={s.header}>
                                    <ModalLogout />
                                    {isFetching && <div>Loading...</div>}
                              </header>

                              <section className={s.content}>
                                    <Content />
                              </section>

                              <nav className={s.nav}>
                                    <Nav />
                              </nav>
                              <footer className={s.footer}></footer>
                        </div>
                  )}
            </>
      )
}
