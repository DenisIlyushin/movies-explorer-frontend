import './Movies.css'
import SearchForm from '../SearchForm/SearchForm.jsx';
import { useState } from 'react';

function Movies({}) {
  // const [isShortMovies, setIsShortMovies] = useState(false)
  function handleSearchFormSubmit(event) {
    event.preventDefault()
    console.log('Кнопка тык')
  }

  function handleSwitchClick() {
    console.log('Рубильник тык')
    // console.log('Рубильник тык', isShortMovies)
    // setIsShortMovies(!isShortMovies)
  }

  return (
    <div className={'movies'}>
      <SearchForm
        // switchState={ isShortMovies }
        onSubmit={ handleSearchFormSubmit }
        onSwitchClick={ handleSwitchClick }
      />
    </div>
  )
}

export default Movies
