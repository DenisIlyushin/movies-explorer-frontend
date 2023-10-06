import './SavedMovies.css'
import {useEffect, useState} from 'react';
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import {maxMoviesPerPage, messages} from '../../utils/constants.js';
import useLocalStorage from '../../hooks/useLocalStorage.jsx';
import Preloader from '../Preloader/Preloader.jsx';
import filterMovies from '../../utils/filterMovies.js';

function SavedMovies(
    {
        savedMovieList,
        onMovieSave,
        onMovieDelete,
    }
) {
    const [isShortMovies, setIsShortMovies] = useState(false)
    const [movies, setMovies] = useState(savedMovieList);
    // буду сравнивать длину списков
    const [filteredMovies, setFilteredMovies] =useState(savedMovieList)
    const [isLoading, setIsLoading] = useState(false)
    const [searchMessage, setSearchMessage] = useState('');
    const [storedToggleSwitchState, setStoredToggleSwitchState] = useLocalStorage('isShortSavedMovies', false)

    useEffect(() => {
        setMovies(savedMovieList);
        setIsShortMovies(storedToggleSwitchState);
    }, [savedMovieList, filteredMovies])

    useEffect(() => {
        setStoredToggleSwitchState(isShortMovies)
    }, [isShortMovies])

    function handleSearchFormSubmit({query, isShortMoviesOnly}) {
        const foundMovies = filterMovies(movies, query, isShortMoviesOnly)

        setIsLoading(true);
        if (foundMovies.length !== 0) {
            setFilteredMovies(foundMovies)
        } else {
            setFilteredMovies([]);
            setSearchMessage(messages.noMoviesFound)
        }
        setIsLoading(false);
    }

    return (
        <main className={'movies'}>
            <SearchForm
                isSavedMovies={true}
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
                !filteredMovies.length && !isLoading
                    ? <p
                        className={'movies__message'}>
                        {searchMessage}
                    </p>
                    : null
            }
            {
                movies && !isLoading
                    ? <MoviesCardList
                        movies={filteredMovies.length <= movies.length ? filteredMovies : movies }
                        isSavedMovies={true}
                        savedMovieList={savedMovieList}
                        maxMoviesPerInteration={maxMoviesPerPage}
                        onMovieSave={onMovieSave}
                        onMovieDelete={onMovieDelete}
                    />
                    : ''
            }

        </main>
    )
}

export default SavedMovies