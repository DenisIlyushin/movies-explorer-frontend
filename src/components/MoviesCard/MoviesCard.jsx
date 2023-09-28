import {Link, useLocation} from 'react-router-dom';

import './MoviesCard.css';
import {useState} from 'react';

function MoviesCard(
  {
    movie,
    onSave,
    onDelete
  }
) {
  const location = useLocation()
  const [isSaved, setIsSaved] = useState(false)

  function handleSave(param, state) {
    setIsSaved(!isSaved);
    onSave(param, state)
  }

  function handleDelete(param) {
    onDelete(param)
  }

  function convertDuration(duration) {
    return `${Math.floor(duration / 60)}ч ${duration % 60}м`
  }

  return (
    <div
      className={'movie-card'}
    >
      <Link
        to={movie.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className={'movie-card__image'}
          alt={movie.nameRu}
          src={movie.image}
        />
      </Link>
      <div
        className={'movie-card__info'}>
        <h2
          className={'movie-card__title'}
        >
          {movie.nameRu}
        </h2>
        <p
          className={'movie-card__duration'}
        >
          {convertDuration(movie.duration)}
        </p>
      </div>
      {
        location.pathname === '/movies'
          ? <button
            className={
            `movie-card__button ${
              isSaved 
                ? 'movie-card__button_type_saved' 
                : 'movie-card__button_type_save'
            }`
          }
            type={'button'}
            onClick={() => handleSave(movie.nameRu, !isSaved)}
          >
            {
              isSaved
                ? ''
                : 'Сохранить'
            }
          </button>
          : <button
          className={'movie-card__button movie-card__button_type_delete'}
          type={'button'}
          onClick={() => handleDelete(movie.nameRu)}
          />
      }
    </div>
  )
}

export default MoviesCard