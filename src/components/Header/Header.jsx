import './Header.css'
import logo from '../../images/logo.svg';
import {Link} from 'react-router-dom';

function Header({authorized}) {
  return (
    (!authorized ? (
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
          className={'header__navigation'}
        >
          <Link
            to={'/signup'}
            className={'header__button'}
          >
            Регистрация
          </Link>
          <Link
            to={'/signin'}
            className={'header__button header__button_focused'}
          >
            Войти
          </Link>
        </div>
      </header>
    ) : (
      <header
        id="header"
      >

      </header>
    ))
  )
}

export default Header;