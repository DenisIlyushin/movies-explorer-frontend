import {useEffect, useState} from 'react';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import {CurrentUserContext} from '../../context/CurrentUserContext.jsx';
import './App.css';

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
import useLocalStorage from '../../hooks/useLocalStorage.jsx';


function App() {
  // управление навигацией
  const navigate = useNavigate();
  const {pathname} = useLocation();
  // управление отрисовкой страницы
  const showHeaderPaths = ['/', '/movies', '/saved-movies', '/profile']
  const showFooterPath = ['/', '/movies', '/saved-movies']
  // управление пользователем и авторизацией
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isLoggedIn', false)
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [storedToken, setStoredToken] = useLocalStorage('jwtToken', null);
  // управление карточками фильмов
  // const [savedMovies, setSavedMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useLocalStorage('savedMovies', []);

  // управление формами авторизации и профиля
  const [authMessage, setAuthMessage] = useState({});
  const [profileMessage, setProfileMessage] = useState({});
  const [isProfileLoading, setIsProfileLoading] = useState(false)
  const [isRegistrationLoading, setIsRegistrationLoading] = useState(false)

  // установка состояния isLoggedIn по наличию токена в памяти браузера
  useEffect(() => {
    if (!storedToken) {
      return
    }
    setIsLoggedIn(true)
  }, [])

  // если состояние isLoggedIn === true, то запрашиваем данные пользователя
  useEffect(() => {
    const token = storedToken

    if (!isLoggedIn) {
      return
    }

    Promise.all([api.getMe(token), api.getAllMovies(token)])
      .then(([userInfo, foundMovies]) => {
        setCurrentUser(userInfo)
        if (foundMovies.length !== 0) {
          setSavedMovies(foundMovies)
        } else {
          setSavedMovies([]);
        }
      })
      .catch(console.log)
  }, [isLoggedIn])

  // обработка лайков фильма на странице "Фильмы"
  function handleMovieSave(movieObject, state) {
    const token = storedToken;

    if (state) {
      api.addMovie(token, movieObject)
        .then((movie) => {
          setSavedMovies([movie, ...savedMovies]);
        })
        .catch(console.log)
    } else {
      // ищем ID фильма среди сохранённых в стейт-переменной
      const [movieToDelete] = savedMovies.filter(
        (savedMovie) => savedMovie.movieId === movieObject.movieId
      )
      // удаляем по найденному _id
      deleteMovie(token, movieToDelete._id)
        .catch(console.log)
    }
  }

  // Обработка удаления фильма на странице "Сохранённые фильмы"
  function handleMovieDelete(movieObject) {
    deleteMovie(storedToken, movieObject._id)
      .catch(console.log)
  }

  // общая функция удаления фильма с очисткой сохраненного состояния
  function deleteMovie(token, movieId) {
    return api.deleteMovie(token, movieId)
      .then((deletedMovie) => {
        // удаляем фильм из списка сохраненных
        const filtered = savedMovies.filter(movie => movie.movieId !== deletedMovie.movieId)
        setSavedMovies(filtered)
      })
  }

  // обработка обновления информации в Профиле
  function handleProfileUpdate(userInfo) {
    const token = storedToken;

    setIsProfileLoading(true)
    api.setMe(token, userInfo)
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo);
        setProfileMessage({
          text: `Ваш профиль бы обновлен!`,
          isSuccess: true,
        })
      })
      .catch((error) => {
        setProfileMessage({
          text: `Что пошло не так и получилась ${error}`,
          isSuccess: false,
        })
      })
      .finally(() => {
        setIsProfileLoading(false);
      })
  }

  // Обработка авторизации
  function handleLogin(loginData) {
    setIsLoginLoading(true);
    api.signIn(loginData)
      .then(({token}) => {
        setStoredToken(token)
        setIsLoggedIn(true);
        setAuthMessage({
          text: `Вы авторизовались!`,
          isSuccess: true,
        })
        navigate('/movies')
      })
      .catch((error) => {
        setAuthMessage({
          text: `Что пошло не так и получилась ${error}`,
          isSuccess: false,
        })
      })
      .finally(() => {
        setIsLoginLoading(false);
      })
  }

  // обработка регистрации
  function handleRegistration(userData) {
    setIsRegistrationLoading(true)
    api.signUp(userData)
      .then(() => {
        setAuthMessage({
          text: `Вы зарегистрированы!`,
          isSuccess: true,
        })
        navigate('/signin')
      })
      .catch((error) => {
        setAuthMessage({
          text: `Что пошло не так и получилась ${error}`,
          isSuccess: false,
        })
      })
      .finally(() => setIsRegistrationLoading(false))
  }

  function handleLogOut() {
    // сбрасывем стейт-переменные
    setIsLoggedIn(false);
    setSavedMovies([])
    // очищаем локальную базу (работа useLocalStorage() переменных)
    localStorage.clear();
    // переводим пользователя на стартовую страницу
    navigate('/')
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
                isCentered={true}
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
                        isLoading={isLoginLoading}
                        messageState={[authMessage, setAuthMessage]}
                        title={'Рады видеть!'}
                        buttonTitle={'Войти'}
                      />
                    }/>
                  <Route
                    path={'/signup'}
                    element={
                      <Registration
                        isLoading={isRegistrationLoading}
                        messageState={[authMessage, setAuthMessage]}
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
                        isLoading={isProfileLoading}
                        messageState={[profileMessage, setProfileMessage]}
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
                        savedMovieList={savedMovies}
                        onMovieSave={handleMovieSave}
                        onMovieDelete={handleMovieDelete}
                      />
                    }
                  />
                  <Route
                    path={'/saved-movies'}
                    element={
                      <ProtectedRoute
                        component={SavedMovies}
                        isLoggedIn={isLoggedIn}
                        savedMovieList={savedMovies}
                        onMovieSave={handleMovieSave}
                        onMovieDelete={handleMovieDelete}
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
