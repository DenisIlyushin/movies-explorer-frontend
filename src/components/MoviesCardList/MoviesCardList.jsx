import {useEffect, useState} from 'react';

import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import {maxMoviesPerPage} from '../../utils/constants.js';

function MoviesCardList(
  {
    movies,
    onMovieSave,
    onMovieDelete
  }
) {
  const [moviesOnPage, setMoviesOnPage] = useState(0)

  function getDisplayWidth() {
    return window.innerWidth
  }

  function getMoviesOnPage() {
    const displayWidth = getDisplayWidth();

    if (displayWidth < 1184 && displayWidth > 767) {
      setMoviesOnPage(maxMoviesPerPage.tablet)
    } else if (displayWidth <= 767) {
      setMoviesOnPage(maxMoviesPerPage.mobile)
    } else {
      setMoviesOnPage(maxMoviesPerPage.desktop)
    }
  }

  function handleMovieListExtend() {
    const displayWidth = getDisplayWidth();

    if (displayWidth < 1184 && displayWidth > 767) {
      setMoviesOnPage(moviesOnPage + maxMoviesPerPage.tablet)
    } else if (displayWidth <= 767) {
      setMoviesOnPage(moviesOnPage + maxMoviesPerPage.mobile)
    } else {
      setMoviesOnPage(moviesOnPage + maxMoviesPerPage.desktop)
    }
  }

  useEffect(() => {
    getMoviesOnPage()
    window.addEventListener('resize', getMoviesOnPage)
  }, [])

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
              key={movie.movieId}
              movie={movie}
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