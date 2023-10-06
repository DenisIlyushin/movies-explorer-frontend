import {useEffect, useState} from 'react';

import './Movies.css'
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import Preloader from '../Preloader/Preloader.jsx';
import filterMovies from '../../utils/filterMovies.js';
import searchApi from '../../utils/MoviesApi.js';
import {messages} from '../../utils/constants.js';
import useLocalStorage from '../../hooks/useLocalStorage.jsx';


function Movies(
  {
    savedMovieList,
    onMovieSave,
    onMovieDelete,
  }
) {
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [searchMessage, setSearchMessage] = useState('');
  const [storedMovies, setStoredMovies] = useLocalStorage('movies', [])
  const [storedToggleSwitchState, setStoredToggleSwitchState] = useLocalStorage('isShortMovies', false)

  useEffect(() => {
    setMovies(storedMovies);
    setIsShortMovies(storedToggleSwitchState);
  }, [])

  useEffect(() => {
    setStoredToggleSwitchState(isShortMovies)
  }, [isShortMovies])

  function handleSearchFormSubmit({query, isShortMoviesOnly}) {
    setIsLoading(true);
    searchApi.getAllMovies()
      .then((movies) => {
        const foundMovies = filterMovies(movies, query, isShortMoviesOnly)
        setStoredMovies(foundMovies)
        if (foundMovies.length !== 0) {
          setMovies(foundMovies)
        } else {
          setMovies(null);
          setSearchMessage(messages.noMoviesFound)
        }
      })
      .catch((error) => {
        setMovies(null);
        setSearchMessage(messages.unexpectedErrorOnBeafilmServer)
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  return (
    <main className={'movies'}>
      <SearchForm
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
            savedMovieList={savedMovieList}
            onMovieSave={onMovieSave}
            onMovieDelete={onMovieDelete}
          />
          : ''
      }

    </main>
  )
}

export default Movies
