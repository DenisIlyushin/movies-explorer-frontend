import './Movies.css'
import SearchForm from '../SearchForm/SearchForm.jsx';
import {useEffect, useState} from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';


function Movies(
  {
    movies,
    onMovieSave,
    onMovieDelete,
    onSearchSubmit,
    onToggleSwitchChange
  }
) {
  const [isShortMovies, setIsShortMovies] = useState(false)

  useEffect(() => {
    onToggleSwitchChange(isShortMovies)
  }, [isShortMovies])

  return (
    <div className={'movies'}>
      <SearchForm
        switchState={ isShortMovies }
        onSubmit={ onSearchSubmit }
        onSwitchChange={ setIsShortMovies }
      />
      <MoviesCardList
        movies={ movies }
        onMovieSave={onMovieSave}
        onMovieDelete={onMovieDelete}
      />
    </div>
  )
}

export default Movies
