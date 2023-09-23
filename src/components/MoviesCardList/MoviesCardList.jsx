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

    switch (displayWidth) {
      default:
        setMoviesOnPage(12)
    }
  }

  useEffect(() => {
    getMoviesOnPage()
  }, [])


  function handleMovieListExtend() {
    const displayWidth = getDisplayWidth();

    switch (displayWidth) {
      default:
        setMoviesOnPage(moviesOnPage + maxMoviesPerPage.desktop)
    }
    console.log('Отображаемых фильмов стало больше')
  }

  return (
    <section
      className={'movies-card-list'}
      id={'movies'}
    >
      <div
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
      </div>
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