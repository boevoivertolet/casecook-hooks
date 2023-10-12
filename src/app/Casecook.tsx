import { Content } from '../components/content/Content'
import { Nav } from '../components/nav/Nav'
import s from './Casecook.module.css'
export function Casecook() {
      return (
            <div className={s.wrapper}>
                  <header className={s.header}>header</header>
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
