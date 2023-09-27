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
          <div
            className={'header__auth_navigation'}
          >
            <Link
              to={'/signup'}
              className={'header__auth_button'}
            >
              Регистрация
            </Link>
            <Link
              to={'/signin'}
              className={'header__auth_button header__auth_button_focused'}
            >
              Войти
            </Link>
          </div>
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
            className={'header__app_navigation'}
          >
            <Link
              to={'/movies'}
              className={
                pathname === '/movies'
                  ? 'header__app_nav_button header__app_nav_button_active'
                  : 'header__app_nav_button'
              }
            >
              Фильмы
            </Link>
            <Link
              to={'/saved-movies'}
              className={
                pathname === '/saved-movies'
                  ? 'header__app_nav_button header__app_nav_button_active'
                  : 'header__app_nav_button'
              }
            >
              Сохранённые фильмы
            </Link>
          </nav>
          <nav
            className={'header__auth_navigation'}
          >
            <Link
              to={'/profile'}
              className={'header__auth_nav_button'}
            >
              Аккаунт
            </Link>
            <BurgerMenu
            />
          </nav>
        </header>
      )
  )
}

export default Header;