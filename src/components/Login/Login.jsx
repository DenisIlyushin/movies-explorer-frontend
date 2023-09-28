import Auth from '../Auth/Auth.jsx';
import useValidate from '../../hooks/useValidate.jsx';
import {Link} from 'react-router-dom';
import {useState} from 'react';

function Login(
  {
    onLogin,
    title,
    buttonTitle,
  }
) {
  const {values, errors, isValid, setIsValid, handleChange} = useValidate()

  useState(() => {
    setIsValid(true)
  }, [])

  function handleSubmit() {
    onLogin(
      {
        email: values.email,
        password: values.password
      }
    )
  }

  return (
    <Auth
      onSubmit={handleSubmit}
      title={title}
      buttonTitle={buttonTitle}
      isValid={isValid}
    >
      <label className="auth__input-label">
        E-mail
        <input
          className={'auth__input'}
          id={'loginEmail'}
          type={'email'}
          name={'email'}
          value={values.email || ''}
          required={true}
          onChange={handleChange}
        />
      </label>
      <label className="auth__input-label">
        Пароль
        <input
          className={'auth__input'}
          id={'loginPassword'}
          type={'password'}
          name={'password'}
          value={values.password || ''}
          required={true}
          onChange={handleChange}
        />
      </label>
      <p
        className={'auth__navigation'}
      >
        Ещё не зарегистрированы?&nbsp;
        <Link
          className={'auth__navigation-link'}
          to={'/signup'}
        >
          Регистрация
        </Link>
      </p>
    </Auth>
  )
}

export default Login