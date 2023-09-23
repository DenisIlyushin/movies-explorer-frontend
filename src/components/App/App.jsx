import {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import {CurrentUserContext} from '../../context/CurrentUserContext.jsx';

import Header from '../Header/Header.jsx';
import Landing from '../Landing/Landing.jsx';
import Footer from '../Footer/Footer.jsx'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';
import {moviesTestStartArray} from '../../utils/constants.js';


// const [user, setUser] = useState(null);
const user = {
  name: 'Ден Илюшин',
  email: 'id@id.ru',
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [movies, setMovies] = useState(moviesTestStartArray);

  function handleMovieSave(param, state) {
    console.log(state ? `Фильм ${param} сохранен` : `Фильм ${param} не сохранен`)
  }

  function handleMovieDelete(param) {
    console.log(`Фильм ${param} удален`)
  }

  function handleSearchFormSubmit(event) {
    event.preventDefault()
    console.log('Произведен поиск')
  }

  function handleToggleSwitchChange(selectedState) {
    console.log(selectedState ? 'Короткометражки выбраны' : 'Короткометражки не выбраны')
  }

  return (
    <div className="app">
      <CurrentUserContext.Provider value={user}>
        <div
          className={'app__content'}
        >
          <Header
            isLoggedIn={isLoggedIn}
          />
          <Routes>
            <Route
              path={'/'}
              element={
                <Landing/>
              }
            />
            <Route
              path={'/movies'}
              element={
                <ProtectedRoute
                  component={Movies}
                  movies={movies}
                  isLoggedIn={isLoggedIn}
                  onMovieSave={handleMovieSave}
                  onMovieDelete={handleMovieDelete}
                  onSearchSubmit={handleSearchFormSubmit}
                  onToggleSwitchChange={handleToggleSwitchChange}
                />
              }
            />
            <Route
              path={'/saved-movies'}
              element={
                <ProtectedRoute
                  component={SavedMovies}
                  movies={movies}
                  isLoggedIn={isLoggedIn}
                  onMovieSave={handleMovieSave}
                  onMovieDelete={handleMovieDelete}
                  onSearchSubmit={handleSearchFormSubmit}
                  onToggleSwitchChange={handleToggleSwitchChange}
                />
              }
            />
          </Routes>
          <Footer/>
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
