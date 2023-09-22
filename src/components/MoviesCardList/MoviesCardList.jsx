import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard.jsx';

function MoviesCardList(
  {
    movies,
  }
) {
  return (
    <section
      className={'movies-card-list'}
      id={'movies'}
    >
      {movies.slice(0, 6).map((movieCard) => (
        <MoviesCard card={movieCard} />
      ))}
    </section>
  )
}

export default MoviesCardList