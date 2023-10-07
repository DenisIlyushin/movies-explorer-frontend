import {shortMoviesDuration} from './constants.js';

export default function filterShortMovies(movies, flag) {
  return movies.filter(
    (movie) => {
      return flag ? movie.duration <= shortMoviesDuration : false
    }
  )
}
