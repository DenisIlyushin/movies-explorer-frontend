import {useEffect, useState} from 'react';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
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
import Preloader from '../Preloader/Preloader.jsx';
import api from '../../utils/MainApi.js';


function App() {
  // управление навигацией
  const navigate = useNavigate();
  const {pathname} = useLocation();
  // управление отрисовкой страницы
  const showHeaderPaths = ['/', '/movies', '/saved-movies', '/profile']
  const showFooterPath = ['/', '/movies', '/saved-movies']
  // управление пользователем и аторизацией
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginLoading, setIsLoginLoading] = useState(false)
  const [currentUser, setCurrentUser] = useState(null);

  const [movies, setMovies] = useState(moviesTestStartArray);

  // установка состояния isLoggedIn по наличию токена в памяти браузера
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      return
    }

    setIsLoggedIn(true)
  }, [])

  // если состояние isLoggedIn === true, то запрашиваем данные пользователя
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!isLoggedIn) {
      return
    }

    api.getMe(token)
      .then((userInfo) => {
        setCurrentUser(userInfo)
      })
      .catch(console.log)
  }, [isLoggedIn])

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
    localStorage.clear();
    navigate('/')
    console.log('Вы вышли из профиля')
  }

  function handleLogin(param) {
    const {email, password} = param;

    setIsLoginLoading(true);
    api.signIn({email, password})
      .then(({token}) => {
        localStorage.setItem('token', token);
        setIsLoggedIn(true);
        navigate('/movies')
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setIsLoginLoading(false);
      })
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
          className={
            isLoginLoading
              ? 'app__content app__content_preload'
              : 'app__content'
          }
        >
          {
            isLoginLoading
              ? <Preloader
                isVisible={isLoginLoading}
              />
              : <>
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
                        isLoggedIn={isLoggedIn}
                        onMovieSave={handleMovieSave}
                        onMovieDelete={handleMovieDelete}
                      />
                    }
                  />
                  <Route
                    path={'/saved-movies'}
                    element={
                      <ProtectedRoute
                        // todo обрати внимание, что ты переделал Movies
                        //  даже думал о том, чтобы сделать отдельный компонент
                        component={SavedMovies}
                        movies={moviesTestStartArray}
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
              </>
          }
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
