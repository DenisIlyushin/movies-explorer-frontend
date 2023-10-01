import {shortMoviesDuration} from './constants.js';

export default function filterMovies(movies, query, shortMoviesFlag) {
  function normalizeSting(value) {
    return value
      .toLowerCase()
      .trim()
      .replace(/ /g, '')
  }

  return movies.filter(
    (movie) => {
      const isShort = shortMoviesFlag ? movie.duration <= shortMoviesDuration : true
      const normalizedMovieName = normalizeSting(movie.nameRU + movie.nameEN)
      const normalizedQuery = normalizeSting(query)

      return isShort && normalizedMovieName.includes(normalizedQuery)
    }
  )
}
