import { useEffect } from 'react'
import { Content } from '../components/content/Content'
import { Nav } from '../components/nav/Nav'
import s from './Casecook.module.css'

import { useAppDispatch } from './store'
import { initializeApp } from './appReducer'
import { logout } from './authReducer'

export function Casecook() {
      const dispatch = useAppDispatch()
      const onClickHandle = () => dispatch(logout())
      useEffect(() => {
            dispatch(initializeApp())
      }, [])

      return (
            <div className={s.wrapper}>
                  <header className={s.header}>
                        <button onClick={onClickHandle}>logout</button>
                  </header>
                  <section className={s.content}>
                        <Content />
                  </section>
                  <nav className={s.nav}>
                        <Nav />
                  </nav>
                  <footer className={s.footer}>footer</footer>
            </div>
      )
}
