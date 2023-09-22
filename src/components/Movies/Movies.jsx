import './Movies.css'
import SearchForm from '../SearchForm/SearchForm.jsx';
import {useEffect, useState} from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import moviesTestStartArray from '../../utils/constants.js';

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
        onSwitchChange={ setIsShortMovies }
      />
      <MoviesCardList
        movies={ moviesTestStartArray }
        maxMoviesPerInteration={ 6 }
      />
    </div>
  )
}

export default Movies
