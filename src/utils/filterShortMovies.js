import {SHORT_MOVIES_DURATION} from './constants.js';

export default function filterShortMovies(movies, flag) {
  return movies.filter(
    (movie) => {
      return flag ? movie.duration <= SHORT_MOVIES_DURATION : false
    }
  )
}
