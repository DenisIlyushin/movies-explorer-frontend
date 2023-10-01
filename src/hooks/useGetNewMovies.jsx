import {useEffect, useState} from 'react';
import searchApi from '../utils/MoviesApi.js';


export default function useGetNewMovies(isCalled) {
  const [movies, setMovies] = useState(null)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (isCalled) {getNewMovies()}
  }, [isCalled])

  function getNewMovies() {
    setIsLoading(true);
    searchApi.getAllMovies()
      .then((movies) => {
        setMovies(movies)
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return {
    movies,
    error,
    isLoading
  }
}