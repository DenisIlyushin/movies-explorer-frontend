import {Link} from 'react-router-dom';
import './NavTab.css'

function NavTab() {
  return (
    <nav
    className={'nav-tab'}
    >
      <Link
        className={'nav-tab__item'}
        /*todo разобраться с навигацией*/
        to={'#about-project'}
        smooth={true}
        duration={90}
      >
        О проекте
      <
      /Link>
      <Link
        className={'nav-tab__item'}
        to={''}
        smooth={true}
        duration={90}
      >
        Технологии
      <
      /Link>
      <Link
        className={'nav-tab__item'}
        to={''}
        smooth={true}
        duration={90}
      >
        Студент
      <
      /Link>
    </nav>
  )
}

export default NavTab;
