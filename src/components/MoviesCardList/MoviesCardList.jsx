import {useEffect, useState} from 'react';
import './MoviesCardList.css'

import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import {MAX_MOVIES_ON_PAGE, DISPLAY_LIMIT} from '../../utils/constants.js';

function MoviesCardList(
  {
    movies,
    isSavedMovies,
    savedMovieList,
    onMovieSave,
    onMovieDelete
  }
) {
  const [moviesOnPage, setMoviesOnPage] = useState(0)

  useEffect(() => {
  }, [movies])

  function getDisplayWidth() {
    return window.innerWidth
  }

  function getMoviesOnPage() {
    const displayWidth = getDisplayWidth();

    if (displayWidth < DISPLAY_LIMIT.TABLET && displayWidth > DISPLAY_LIMIT.MOBILE) {
      setMoviesOnPage(MAX_MOVIES_ON_PAGE.TABLET)
    } else if (displayWidth <= DISPLAY_LIMIT.MOBILE) {
      setMoviesOnPage(MAX_MOVIES_ON_PAGE.MOBILE)
    } else {
      setMoviesOnPage(MAX_MOVIES_ON_PAGE.DESKTOP)
    }
  }

  function handleMovieListExtend() {
    const displayWidth = getDisplayWidth();

    if (displayWidth < 1184 && displayWidth > 767) {
      setMoviesOnPage(moviesOnPage + MAX_MOVIES_ON_PAGE.TABLET)
    } else if (displayWidth <= 767) {
      setMoviesOnPage(moviesOnPage + MAX_MOVIES_ON_PAGE.MOBILE)
    } else {
      setMoviesOnPage(moviesOnPage + MAX_MOVIES_ON_PAGE.DESKTOP)
    }
  }

  useEffect(() => {
    getMoviesOnPage()
  }, [])

  // проверяем, есть ли фильм в ранее добавленных в избранное пользователем
  function setPreviouslySavedState(movie) {
    if (isSavedMovies) {
      return true
    }
    return savedMovieList.find(savedMovie => savedMovie.movieId === movie.id)
  }

  return (
    <section
      className={'movies-card-list'}
      id={'movies'}
    >
      <ul
        className={'movies-card-list__content'}
      >
        {
          movies.slice(0, moviesOnPage).map((movie) => (
            <MoviesCard
              key={movie.movieId || movie.id}
              movie={movie}
              isSavedMovies={isSavedMovies}
              isPreviouslySaved={setPreviouslySavedState(movie)}
              onSave={onMovieSave}
              onDelete={onMovieDelete}
            />
          ))
        }
      </ul>
      {
        movies.length > moviesOnPage
          ? <button
            className={'movies-card-list__more-button'}
            type={'button'}
            onClick={handleMovieListExtend}
          >
            Ещё
          </button>
          : ''
      }
    </section>
  )
}

export default MoviesCardList