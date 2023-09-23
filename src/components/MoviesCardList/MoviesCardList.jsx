import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard.jsx';

function MoviesCardList(
  {
    movies,
    maxMoviesPerInteration,
    onMovieSave,
    onMovieDelete
  }
) {
  return (
    <section
      className={'movies-card-list'}
      id={'movies'}
    >
      {
        movies.slice(0, maxMoviesPerInteration).map((movie) => (
          <MoviesCard
            key={movie.movieId}
            movie={movie}
            onSave={onMovieSave}
            onDelete={onMovieDelete}
          />
        ))
      }
    </section>
  )
}

export default MoviesCardList