import './BurgerMenu.css'

function BurgerMenu({ handleClick }) {
  return (
    <button
      className={'burger-menu'}
      onClick={ handleClick }
    />
  )
}

export default BurgerMenu