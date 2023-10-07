import {useEffect, useState} from 'react';
import './Movies.css'

import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import Preloader from '../Preloader/Preloader.jsx';
import useLocalStorage from '../../hooks/useLocalStorage.jsx';
import filterMovies from '../../utils/filterMovies.js';
import searchApi from '../../utils/MoviesApi.js';
import {messages} from '../../utils/constants.js';
import filterShortMovies from '../../utils/filterShortMovies.js';


function Movies(
  {
    savedMovieList,
    onMovieSave,
    onMovieDelete,
  }
) {
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [searchMessage, setSearchMessage] = useState('');
  const [storedMovies, setStoredMovies] = useLocalStorage('movies', [])
  const [storedToggleSwitchState, setStoredToggleSwitchState] = useLocalStorage('isShortMovies', false)



  useEffect(() => {
    setIsShortMovies(storedToggleSwitchState);

    if (storedToggleSwitchState) {
      const foundMovies = filterShortMovies(storedMovies, storedToggleSwitchState)
      if (foundMovies.length !== 0) {
        setMovies(foundMovies)
      } else {
        setMovies([])
        setSearchMessage(messages.noMoviesFound)
      }
    } else {
      setMovies(storedMovies)
    }
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
      .catch(() => {
        setMovies(null);
        setSearchMessage(messages.unexpectedErrorOnBeafilmServer)
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  function handleSwitchChange(switchState) {
    setIsShortMovies(switchState)

    if (switchState) {
      const foundMovies = filterShortMovies(movies, switchState)
      if (foundMovies.length !== 0) {
        setMovies(foundMovies)
      } else {
        setMovies([])
        setSearchMessage(messages.noMoviesFound)
      }
    } else {
      setMovies(storedMovies)
    }
  }

  return (
    <main className={'movies'}>
      <SearchForm
        switchState={isShortMovies}
        onSubmit={handleSearchFormSubmit}
        onSwitchChange={handleSwitchChange}
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
        !movies.length && !isLoading
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
