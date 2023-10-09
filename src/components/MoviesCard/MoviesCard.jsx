import {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import './MoviesCard.css';
import useLocalStorage from '../../hooks/useLocalStorage.jsx';

function MoviesCard(
  {
    movie,
    isSavedMovies,
    isPreviouslySaved,
    onSave,
    onDelete
  }
) {
  const location = useLocation()
  const [isSaved, setIsSaved] = useState(isPreviouslySaved)

  useEffect(() => {
  }, [isSaved])

  function prepareMovieData(movie) {
    return {
      _id: movie._id,
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: !movie.image
        ? movie.image.url
        : `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: movie.thumbnail
        ? movie.thumbnail
        : `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      movieId: movie.id,
    }
  }

  function handleButtonClick(movie) {
    const movieObject = prepareMovieData(movie)

    if (!isSaved) {
      onSave(movieObject)
        .then(() => {
          setIsSaved(true)
        })
        .catch(console.log)
    } else {
      onDelete(movieObject)
        .then(() => {
          setIsSaved(false)
        })
        .catch(console.log)
    }
  }

  function handleDelete(movie) {
    onDelete(movie)
      .catch(console.log)
  }

  function convertDuration(duration) {
    return `${Math.floor(duration / 60)}ч ${duration % 60}м`
  }

  return (
    <li
      className={'movie-card'}
    >
      <Link
        to={movie.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className={'movie-card__image'}
          alt={movie.nameRU}
          src={isSavedMovies ? movie.image : `https://api.nomoreparties.co${movie.image.url}`}
        />
      </Link>
      <div
        className={'movie-card__info'}>
        <h2
          className={'movie-card__title'}
        >
          {movie.nameRU}
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
            onClick={() => handleButtonClick(movie)}
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
            onClick={() => handleDelete(movie)}
          />
      }
    </li>
  )
}

export default MoviesCard