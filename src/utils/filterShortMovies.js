import {shortMoviesDuration} from './constants.js';

export default function filterShortMovies(movies, shortMoviesFlag) {
    return movies.filter(
        (movie) => {
            return movie.duration <= shortMoviesDuration
        }
    )
}
