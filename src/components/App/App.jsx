import {useEffect, useState} from 'react';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import './App.css';
import {CurrentUserContext} from '../../context/CurrentUserContext.jsx';

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
import {messages} from '../../utils/constants.js';


function App() {
  // управление навигацией
  const navigate = useNavigate();
  const {pathname} = useLocation();
  // управление отрисовкой страницы
  const showHeaderPaths = ['/', '/movies', '/saved-movies', '/profile']
  const showFooterPath = ['/', '/movies', '/saved-movies']
  // управление пользователем и авторизацией
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [storedToken, setStoredToken] = useLocalStorage('jwtToken', null);
  // управление карточками фильмов
  // todo не уверен, что нужно прям хранить в памяти браузера фильмы, что уже лайкнул
  //  если нет, то используй обычную стейт переменную
  const [savedMovies, setSavedMovies] = useState([]);
  // const [savedMovies, setSavedMovies] = useLocalStorage('savedMovies', []);

  // управление формами авторизации и профиля
  // todo целиком передается в компонет, где требуется отображать сообщение
  const [apiMessage, setApiMessage] = useState({});
  const [isProfileLoading, setIsProfileLoading] = useState( false)
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

    api.getMe(token)
      .then((userInfo) => {
        setCurrentUser(userInfo)
      })
      .catch(console.log)

    api.getAllMovies(token)
      .then((foundMovies) => {
        if (foundMovies.length !== 0) {
          setSavedMovies(foundMovies)
        } else {
          setSavedMovies([]);
        }
      })
      .catch(() => {
        setSavedMovies([]);
      })
  }, [isLoggedIn])

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
        .finally(() => setSavedMovies(savedMovies))
    }
  }

  function handleMovieDelete(movieObject) {
    const token = storedToken;
    console.log(movieObject._id)
    deleteMovie(token, movieObject._id)
      .catch(console.log)
  }

  function deleteMovie(token, movieId) {
    return api.deleteMovie(token, movieId)
      .then((deletedMovie) => {
        // убираем фильм из списка сохраненных
        const newMovieList = savedMovies.splice(savedMovies.indexOf(deletedMovie), 1)
        setSavedMovies(newMovieList)
        // todo
        console.log('список фильмов после удаления', savedMovies)
      })
  }

  function handleProfileUpdate(userInfo) {
    const token = storedToken;

    setIsProfileLoading(true)
    api.setMe(token, userInfo)
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo);
        setApiMessage({
          text: `Ваш профиль бы обновлен!`,
          isSuccess: true,
        })
      })
      .catch((error) => {
        setApiMessage({
          text: `Что пошло не так и получилась ${error}`,
          isSuccess: false,
        })
      })
      .finally(() => setIsProfileLoading(false))
  }

  function handleLogOut() {
    // сбрасывем стейт-переменные
    setIsLoggedIn(false);
    setSavedMovies([])
    // очищаем локальную базу (работа useLocalStorage() переменных)
    localStorage.clear();
    // переводим пользователя на стартовую страницу
    navigate('/')
    console.log('Вы вышли из профиля')
  }

  function handleLogin(loginData) {
    setIsLoginLoading(true);
    api.signIn(loginData)
      .then(({token}) => {
        setStoredToken(token)
        setIsLoggedIn(true);
        setApiMessage({
          text: `Вы авторизовались!`,
          isSuccess: true,
        })
        navigate('/movies')
      })
      .catch((error) => {
        setApiMessage({
          text: `Что пошло не так и получилась ${error}`,
          isSuccess: false,
        })
      })
      .finally(() => {
        setIsLoginLoading(false);
      })
  }

  function handleRegistration(userData) {
    setIsRegistrationLoading(true)
    api.signUp(userData)
      .then((newUserInfo) => {
        // setCurrentUser(newUserInfo);
        setApiMessage({
          text: `Вы зарегистрированы!`,
          isSuccess: true,
        })
        navigate('/signin')
      })
      .catch((error) => {
        setApiMessage({
          text: `Что пошло не так и получилась ${error}`,
          isSuccess: false,
        })
      })
      .finally(() => setIsRegistrationLoading(false))
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
                        isLoading={isLoginLoading}
                        messageState={[apiMessage, setApiMessage]}
                        title={'Рады видеть!'}
                        buttonTitle={'Войти'}
                      />
                    }/>
                  <Route
                    path={'/signup'}
                    element={
                      <Registration
                        isLoading={isRegistrationLoading}
                        messageState={[apiMessage, setApiMessage]}
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
                        messageState={[apiMessage, setApiMessage]}
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
                        // todo обрати внимание, что ты переделал Movies
                        //  даже думал о том, чтобы сделать отдельный компонент
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
