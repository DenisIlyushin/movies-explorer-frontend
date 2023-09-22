import './Movies.css'
import SearchForm from '../SearchForm/SearchForm.jsx';
import {useEffect, useState} from 'react';

function Movies({}) {
  const [isShortMovies, setIsShortMovies] = useState(false)

  function handleSearchFormSubmit(event) {
    event.preventDefault()
    console.log('Кнопка тык')
  }

  useEffect(() => {
    console.log('Рубильник тык', isShortMovies)
  }, [isShortMovies])

  return (
    <div className={'movies'}>
      <SearchForm
        switchState={ isShortMovies }
        onSubmit={ handleSearchFormSubmit }
        onSwitchChage={ setIsShortMovies }
      />

    </div>
  )
}

export default Movies
