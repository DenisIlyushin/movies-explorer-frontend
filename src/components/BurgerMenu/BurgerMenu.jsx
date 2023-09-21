import './BurgerMenu.css'
import {useState} from 'react';
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