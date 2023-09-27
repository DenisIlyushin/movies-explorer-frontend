import {useState} from 'react';
import {redirect, Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import './App.css';
import {CurrentUserContext} from '../../context/CurrentUserContext.jsx';

import {moviesTestStartArray} from '../../utils/constants.js';
import Header from '../Header/Header.jsx';
import Landing from '../Landing/Landing.jsx';
import Login from '../Login/Login.jsx';
import Registration from '../Registration/Registration.jsx';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.jsx';
import Profile from '../Profile/Profile.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';
import NotFound from '../NotFound/NotFound.jsx';
import Footer from '../Footer/Footer.jsx';


function App() {
  const navigate = useNavigate();
  const {pathname} = useLocation();

  const showHeaderPaths = ['/', '/movies', '/saved-movies', '/profile']
  const showFooterPath = ['/', '/movies', '/saved-movies']

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [movies, setMovies] = useState(moviesTestStartArray);

  const currentUser =
    {
      name: 'Ден Илюшин',
      email: 'id@id.ru',
    }

  function handleMovieSave(param, state) {
    console.log(state ? `Фильм ${param} сохранен` : `Фильм ${param} не сохранен`)
  }

  function handleMovieDelete(param) {
    console.log(`Фильм ${param} удален`)
  }

  function handleSearchFormSubmit(event) {
    event.preventDefault();
    console.log('Произведен поиск')
  }

  function handleToggleSwitchChange(selectedState) {
    console.log(selectedState ? 'Короткометражки выбраны' : 'Короткометражки не выбраны')
  }

  function handleProfileUpdate(param) {
    const {name, email} = param;
    console.log(`Профиль бы обновлен с данными ${[name, email]}`)
  }

  function handleLogOut() {
    setIsLoggedIn(false);
    navigate('/')
    console.log('Вы вышли из профиля')
  }

  function handleLogin(param) {
    const {email, password} = param;
    setIsLoggedIn(true);
    navigate('/movies')
    console.log(`Вы вошли с данными ${[email, password]}, ура!`)
  }

  function handleRegistration(param) {
    const {name, email, password} = param;
    navigate('/signin')
    console.log(`Вы зарегистрированы с данными ${[name, email, password]}, ура!`)
  }

  function handleNotFoundNavigation() {
    navigate(-1);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <div
          className={'app__content'}
        >
          {
            showHeaderPaths.includes(pathname)
              ? <Header
                isLoggedIn={isLoggedIn}
              />
              : null
          }
          <Routes>
            <Route
              path={'/'}
              element={
                <>
                  <Landing/>
                </>
              }
            />
            <Route
              path={'/signin'}
              element={
                <Login
                  onLogin={handleLogin}
                  title={'Рады видеть!'}
                  buttonTitle={'Войти'}
                />
              }/>
            <Route
              path={'/signup'}
              element={
                <Registration
                  onLogin={handleRegistration}
                  title={'Добро пожаловать!'}
                  buttonTitle={'Зарегистрироваться'}
                />
              }/>
            <Route
              path={'/profile'}
              element={
                <ProtectedRoute
                  component={Profile}
                  isLoggedIn={isLoggedIn}
                  onSubmit={handleProfileUpdate}
                  onLogOut={handleLogOut}
                />
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
            <Route
              path={'/*'}
              element={
                <NotFound
                  onGoBack={handleNotFoundNavigation}
                />
              }
            />
          </Routes>
          {
            showFooterPath.includes(pathname)
              ? <Footer/>
              : null
          }
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
