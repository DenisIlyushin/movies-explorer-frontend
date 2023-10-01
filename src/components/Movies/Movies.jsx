import {useState} from 'react';

import './Movies.css'
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import Preloader from '../Preloader/Preloader.jsx';
import filterMovies from '../../utils/filterMovies.js';
import searchApi from '../../utils/MoviesApi.js';
import {messages} from '../../utils/constants.js';


function Movies(
  {
    onMovieSave,
    onMovieDelete,
  }
) {
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [searchMessage, setSearchMessage] = useState('');

  function handleSearchFormSubmit({query, isShortMoviesOnly}) {
    setIsLoading(true);
    //todo надо добавить сюда сохранение результатов поиска
    // есть мыслишки сделать хук для работы с локальнйо памятью по типу useValudate
    searchApi.getAllMovies()
      .then((movies) => {
        const foundMovies = filterMovies(movies, query, isShortMoviesOnly)
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
        setIsLoading(false)
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
            onMovieSave={onMovieSave}
            onMovieDelete={onMovieDelete}
          />
          : ''
      }

    </main>
  )
}

export default Movies
