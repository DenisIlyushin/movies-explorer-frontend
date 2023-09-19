import {Link} from 'react-router-dom';
import './NavTab.css'

function NavTab() {
  return (
    <nav
    className={'nav-tab'}
    >
      <Link
        className={'nav-tab__item'}
        to={'#about-project'}
        onClick={() => document.querySelector('#about-project').scrollIntoView()}
      >
        О проекте
      <
      /Link>
      <Link
        className={'nav-tab__item'}
        to={'#techs'}
        onClick={() => document.querySelector('#techs').scrollIntoView()}
      >
        Технологии
      <
      /Link>
      <Link
        className={'nav-tab__item'}
        to={'#about-me'}
        onClick={() => document.querySelector('#about-me').scrollIntoView()}
      >
        Студент
      <
      /Link>
    </nav>
  )
}

export default NavTab;
