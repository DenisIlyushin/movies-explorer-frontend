import {Link} from 'react-router-dom';
import {REGEX_PATTERNS} from '../../utils/constants.js';

import Auth from '../Auth/Auth.jsx';
import useValidate from '../../hooks/useValidate.jsx';

function Login(
  {
    title,
    buttonTitle,
    isLoading,
    messageState: [message, setMessage],
    onLogin,
  }
) {
  const {values, errors, isValid, handleChange} = useValidate()

  function fetchInputChange(event) {
    setMessage({})
    handleChange(event)
  }

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
      isLoading={isLoading}
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
          placeholder={'Ваш e-email'}
          onChange={fetchInputChange}
          pattern={REGEX_PATTERNS.EMAIL}
          disabled={isLoading}
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
          minLength={8}
          maxLength={30}
          required={true}
          placeholder={'Ваш пароль'}
          onChange={fetchInputChange}
          disabled={isLoading}
        />
        <span
          className={
            message.isSuccess
              ? 'auth__input-success'
              : 'auth__input-error'
          }
        >
            {
              !errors && message.isSuccess
                ? message.text
                : errors.email || errors.password || message.text
            }
          </span>
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