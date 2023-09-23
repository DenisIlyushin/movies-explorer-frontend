import './Movies.css'
import SearchForm from '../SearchForm/SearchForm.jsx';
import {useEffect, useState} from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import {maxMoviesPerPage, moviesTestStartArray} from '../../utils/constants.js';


function Movies(
  {
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
        movies={ moviesTestStartArray }
        maxMoviesPerInteration={ maxMoviesPerPage }
        onMovieSave={onMovieSave}
        onMovieDelete={onMovieDelete}
      />
    </div>
  )
}

export default Movies
