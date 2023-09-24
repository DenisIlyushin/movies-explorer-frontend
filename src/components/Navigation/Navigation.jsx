import {Link, NavLink} from 'react-router-dom';

import './Navigation.css'

function Navigation({ handleClose }) {
  function handleCloseOnOverlay(event) {
    if (event.target.classList.contains('navigation')) {
      return handleClose()
    }
  }

  return (
    <div
      className={'navigation'}
      onClick={handleCloseOnOverlay}
    >
      <div
        className={'navigation__content'}
      >
        <button
          className={'navigation__close-button'}
          onClick={ handleClose }
        />
        <nav
          className={'navigation__menu'}
        >
          <NavLink
            className={'navigation__link'}
            to={'/'}
            onClick={ handleClose }
          >
            Главная
          </NavLink>
          <NavLink
            className={'navigation__link'}
            to={'/movies'}
            onClick={ handleClose }
          >
            Фильмы
          </NavLink>
          <NavLink
            className={'navigation__link'}
            to={'/saved-movies'}
            onClick={ handleClose }
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        <Link
          className={'navigation__account-button'}
          to={'/profile'}
          onClick={ handleClose }
        >
          Аккаунт
        </Link>
      </div>
    </div>
  )
}

export default Navigation