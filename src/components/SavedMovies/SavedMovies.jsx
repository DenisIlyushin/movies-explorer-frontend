import {useEffect, useState} from 'react';
import './SavedMovies.css'

import SearchForm from '../SearchForm/SearchForm.jsx';
import Preloader from '../Preloader/Preloader.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import filterMovies from '../../utils/filterMovies.js';
import {MESSAGES} from '../../utils/constants.js';
import filterShortMovies from '../../utils/filterShortMovies.js';

function SavedMovies(
  {
    savedMovieList,
    onMovieSave,
    onMovieDelete,
  }
) {
  const [isShortMovies, setIsShortMovies] = useState(false)
  const [movies, setMovies] = useState(savedMovieList);
  const [filteredMovies, setFilteredMovies] = useState(savedMovieList)
  const [isLoading, setIsLoading] = useState(false)
  const [searchMessage, setSearchMessage] = useState('');

  // Логика вывода карточек на страницу по состоянию переключателя
  function setMoviesOnPage(flag) {
    if (flag) {
      const foundMovies = filterShortMovies(savedMovieList, flag)
      if (foundMovies.length !== 0) {
        setMovies(foundMovies)
      } else {
        setMovies([])
        setSearchMessage(MESSAGES.NO_MOVIE_FOUND)
      }
    } else {
      setMovies(savedMovieList);
    }
  }

  useEffect(() => {
    setMoviesOnPage(isShortMovies)
  }, [savedMovieList, filteredMovies])

  function handleSearchFormSubmit({query, isShortMoviesOnly}) {
    const foundMovies = filterMovies(movies, query, isShortMoviesOnly)

    setIsLoading(true);
    if (foundMovies.length !== 0) {
      setFilteredMovies(foundMovies)
    } else {
      setFilteredMovies([]);
      setSearchMessage(MESSAGES.NO_MOVIE_FOUND)
    }
    setIsLoading(false);
  }

  function handleSwitchChange(switchState) {
    setIsShortMovies(switchState)
    setMoviesOnPage(switchState)
  }

  return (
    <main className={'movies'}>
      <SearchForm
        isSavedMovies={true}
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
        !movies.length || !filteredMovies.length && !isLoading
          ? <p
            className={'movies__message'}>
            {searchMessage}
          </p>
          : null
      }
      {
        movies && !isLoading
          ? <MoviesCardList
            movies={filteredMovies.length <= movies.length ? filteredMovies : movies}
            isSavedMovies={true}
            savedMovieList={savedMovieList}
            onMovieSave={onMovieSave}
            onMovieDelete={onMovieDelete}
          />
          : ''
      }

    </main>
  )
}

export default SavedMovies