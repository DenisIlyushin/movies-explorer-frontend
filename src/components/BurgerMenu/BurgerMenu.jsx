import {useState} from 'react';
import './BurgerMenu.css'

import Navigation from '../Navigation/Navigation.jsx';

function BurgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openNavigationMenu() {
    setIsMenuOpen(true);
  }

  function closeNavigationMenu() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <button
        className={'burger-menu'}
        onClick={ openNavigationMenu }
        type={'button'}
      />
      {
        isMenuOpen
          ? <Navigation handleClose={ closeNavigationMenu } isOpen={ isMenuOpen }/>
          : ''
      }
    </>
  )
}

export default BurgerMenu