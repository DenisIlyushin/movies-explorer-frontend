import {shortMoviesDuration} from './constants.js';

export default function filterShortMovies(movies) {
    return movies.filter(
        (movie) => {
            return movie.duration <= shortMoviesDuration
        }
    )
}
