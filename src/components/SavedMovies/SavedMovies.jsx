import './SavedMovies.css'
import {useEffect, useState} from 'react';
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import {maxMoviesPerPage, moviesTestStartArray} from '../../utils/constants.js';

function SavedMovies(
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
    <main className={'movies'}>
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
    </main>
  )
}

export default SavedMovies