import Auth from '../Auth/Auth.jsx';
import useValidate from '../../hooks/useValidate.jsx';
import {Link} from 'react-router-dom';
import {useState} from 'react';

function Registration(
  {
    onLogin,
    title,
    buttonTitle,
  }
) {
  const {values, errors, isValid, setIsValid, handleChange} = useValidate();

  useState(() => {
    setIsValid(true)
  }, [])

  function handleSubmit() {
    onLogin(
      {
        name: values.name,
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
        Имя
        <input
          className={'auth__input'}
          id={'loginName'}
          type={'text'}
          name={'name'}
          value={values.name || ''}
          required={true}
          onChange={handleChange}
        />
      </label>
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
          className={`auth__input ${isValid ? '' : 'auth__input_error'}`}
          id={'loginPassword'}
          type={'password'}
          name={'password'}
          value={values.password || ''}
          required={true}
          onChange={handleChange}
        />
        <span
          className={`auth__input-error ${isValid ? '' : 'auth__input-error_active'}`}
        >
            {'Что-то пошло не так...'}
          </span>
      </label>
      <p
        className={'auth__navigation'}
      >
        Уже зарегистрированы?&nbsp;
        <Link
          className={'auth__navigation-link'}
          to={'/signin'}
        >
          Войти
        </Link>
      </p>
    </Auth>
  )
}

export default Registration