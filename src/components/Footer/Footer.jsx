import {Link, useLocation} from 'react-router-dom';

import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear()
  const {pathname} = useLocation()

  return (
    <footer
      className=
        {
          pathname === '/profile'
          || pathname === '/login'
          || pathname === '/sighin'
            ? 'footer footer_hidden'
            : 'footer'
        }
    >
      <h2
        className={'footer__title'}
      >
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div
        className={'footer__content'}
      >
        <p
          className={'footer__copyright'}
        >
          &copy; {currentYear}
        </p>
        <nav
          className={'footer__links'}
        >
          <Link
            className={'footer__link'}
            to={'https://practicum.yandex.ru'}
            target={'_blank'}
            rel={'noreferrer'}
          >
            Яндекс.Практикум
          </Link>
          <Link
            className={'footer__link'}
            to={'https://github.com/DenisIlyushin/movies-explorer-frontend'}
            target={'_blank'}
            rel={'noreferrer'}
          >
            Github
          </Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;
