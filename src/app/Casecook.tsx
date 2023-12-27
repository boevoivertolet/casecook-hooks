import { useEffect } from 'react'
import { Content } from '../components/content/Content'
import { Nav } from '../components/nav/Nav'
import s from './Casecook.module.css'
import { useAppDispatch } from './store'
import { initializeApp } from './appReducer'
import { ModalLogout } from '../components/ModalLogout'

export function Casecook() {
      const dispatch = useAppDispatch()

      useEffect(() => {
            dispatch(initializeApp())
      }, [dispatch])

      return (
            <div className={s.wrapper}>
                  <header className={s.header}>
                        <ModalLogout />
                  </header>
                  <section className={s.content}>
                        <Content />
                  </section>
                  <nav className={s.nav}>
                        <Nav />
                  </nav>
                  <footer className={s.footer}></footer>
            </div>
      )
}
