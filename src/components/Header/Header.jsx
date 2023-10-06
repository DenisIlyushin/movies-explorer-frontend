import {Link, useLocation} from 'react-router-dom';

import './Header.css'
import logo from '../../images/logo.svg';
import BurgerMenu from '../BurgerMenu/BurgerMenu.jsx';

function Header({isLoggedIn}) {
  const {pathname} = useLocation()

  return (
    !isLoggedIn
      ? (
        <header
          id="header"
          className={'header'}
        >
          <Link
            to={'/'}
            className={'header__logo'}
          >
            <img
              src={logo}
              alt={'логотип'}
            />
          </Link>
          <nav
            className={'header__auth-navigation'}
          >
            <Link
              to={'/signup'}
              className={'header__auth-button'}
            >
              Регистрация
            </Link>
            <Link
              to={'/signin'}
              className={'header__auth-button header__auth-button_focused'}
            >
              Войти
            </Link>
          </nav>
        </header>
      )
      : (
        <header
          id="header"
          className={'header'}
        >
          <Link
            to={'/'}
            className={'header__logo'}
          >
            <img
              src={logo}
              alt={'логотип'}
            />
          </Link>
          <nav
            className={'header__app-navigation'}
          >
            <Link
              to={'/movies'}
              className={
                pathname === '/movies'
                  ? 'header__app-nav-button header__app-nav-button_active'
                  : 'header__app-nav-button'
              }
            >
              Фильмы
            </Link>
            <Link
              to={'/saved-movies'}
              className={
                pathname === '/saved-movies'
                  ? 'header__app-nav-button header__app-nav-button_active'
                  : 'header__app-nav-button'
              }
            >
              Сохранённые фильмы
            </Link>
          </nav>
          <nav
            className={'header__auth-navigation'}
          >
            <Link
              to={'/profile'}
              className={'header__auth-nav-button'}
            >
              Аккаунт
            </Link>
            <BurgerMenu />
          </nav>
        </header>
      )
  )
}

export default Header;