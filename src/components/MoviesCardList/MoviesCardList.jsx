import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard.jsx';

function MoviesCardList(
  {
    movies,
    maxMoviesPerInteration
  }
) {
  return (
    <section
      className={'movies-card-list'}
      id={'movies'}
    >
      {movies.slice(0, maxMoviesPerInteration).map((movieCard) => (
        <MoviesCard card={movieCard} />
      ))}
    </section>
  )
}

export default MoviesCardList