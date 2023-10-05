import './SavedMovies.css'
import {useEffect, useState} from 'react';
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import {maxMoviesPerPage, messages} from '../../utils/constants.js';
import useLocalStorage from '../../hooks/useLocalStorage.jsx';
import Preloader from '../Preloader/Preloader.jsx';
import filterMovies from '../../utils/filterMovies.js';
import api from '../../utils/MainApi.js';

function SavedMovies(
  {
    savedMovieList,
    onMovieSave,
    onMovieDelete,
  }
) {
  const [isShortMovies, setIsShortMovies] = useState(false)
  const [movies, setMovies] = useState(savedMovieList);
  const [isLoading, setIsLoading] = useState(false)
  const [searchMessage, setSearchMessage] = useState('');
  // const [storedMovies, setStoredMovies] = useLocalStorage('saved-movies', null)
  const [storedToggleSwitchState, setStoredToggleSwitchState] = useLocalStorage('isShortSavedMovies', false)

  useEffect(() => {
    // setStoredMovies(movies);
    setMovies(savedMovieList)
    setIsShortMovies(storedToggleSwitchState);
  }, [savedMovieList])

  useEffect(() => {
    setStoredToggleSwitchState(isShortMovies)
  }, [isShortMovies])

  function handleSearchFormSubmit({query, isShortMoviesOnly}) {
    // todo
  }

  return (
    <main className={'movies'}>
      <SearchForm
        isSavedMovies={true}
        switchState={isShortMovies}
        onSubmit={handleSearchFormSubmit}
        onSwitchChange={setIsShortMovies}
      />
      {
        isLoading
          ? <Preloader
            isVisible={isLoading}
            isCentered={true}
          />
          : null
      }
      {
        !movies && !isLoading
          ? <p
            className={'movies__message'}>
            {searchMessage}
          </p>
          : null
      }
      {
        movies && !isLoading
          ? <MoviesCardList
            movies={movies}
            isSavedMovies={true}
            savedMovieList={savedMovieList}
            maxMoviesPerInteration={maxMoviesPerPage}
            onMovieSave={onMovieSave}
            onMovieDelete={onMovieDelete}
          />
          : ''
      }

    </main>
  )
}

export default SavedMovies