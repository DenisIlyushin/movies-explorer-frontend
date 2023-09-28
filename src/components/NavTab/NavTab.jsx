import {Link} from 'react-router-dom';
import './NavTab.css'

function NavTab() {
  return (
    <ul
    className={'nav-tab'}
    >
      <li
        className={'nav-tab__item'}
      >
        <Link
          className={'nav-tab__item'}
          to={'/#about-project'}
          onClick={() => document.querySelector('#about-project').scrollIntoView()}
        >
          О проекте
        </Link>
      </li>
      <li
        className={'nav-tab__item'}
      >
        <Link
          className={'nav-tab__item'}
          to={'/#techs'}
          onClick={() => document.querySelector('#techs').scrollIntoView()}
        >
          Технологии
        </Link>
      </li>
      <li
        className={'nav-tab__item'}
      >
        <Link
          className={'nav-tab__item'}
          to={'/#about-me'}
          onClick={() => document.querySelector('#about-me').scrollIntoView()}
        >
          Студент
        </Link>
      </li>
    </ul>
  )
}

export default NavTab;
