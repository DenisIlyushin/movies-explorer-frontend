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
  const [savedMovies, setSavedMovies] = useLocalStorage('savedMovies', []);

  useEffect(() => {
    console.log('рисуем карточку')
    console.log(`и она ${isSaved}`)
  }, [isSaved])

  function prepareMovieData(movie) {
    console.log('конвертируем-с', movie)
    return {
      _id: movie._id,
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: !movie.image ? movie.image.url : `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: movie.thumbnail ? movie.thumbnail : `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      movieId: movie.id,
    }
  }

  function handleButtonClick(movie) {
    const movieObject = prepareMovieData(movie)
    console.log('работаю с', movieObject)

    if (!isSaved) {
      console.log('лайкаю')
      onSave(movieObject)
        .then(() => {
          console.log('все получилось')
          setIsSaved(true)
        })
        .catch(console.log)
        .finally(() => console.log('закончили ставить лайк'))
    } else {
      console.log('дизлайкаю-удаляю', movieObject)
      onDelete(movieObject)
        .then(() => {
          console.log('все получилось')
          setIsSaved(false)
        })
        .catch(console.log)
        .finally(() => console.log('закончили ставить лайк'))
    }
  }

  function handleDelete(movie) {
    console.log('удаляю')
    onDelete(movie)
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