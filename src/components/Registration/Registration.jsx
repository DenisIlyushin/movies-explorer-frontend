import Auth from '../Auth/Auth.jsx';
import useValidate from '../../hooks/useValidate.jsx';
import {Link} from 'react-router-dom';
import {regexPatterns} from '../../utils/constants.js';

function Registration(
  {
    title,
    buttonTitle,
    isLoading,
    messageState: [message, setMessage],
    onLogin,
  }
) {
  const {values, errors, isValid, handleChange} = useValidate();

  function fetchInputChange(event) {
    setMessage({})
    handleChange(event)
  }

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
      isLoading={isLoading}
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
          minLength={2}
          maxLength={30}
          placeholder={'Как Вас зовут?'}
          onChange={fetchInputChange}
          pattern={regexPatterns.userName}
          disabled={isLoading}
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
          placeholder={'Ваш e-email'}
          onChange={fetchInputChange}
          pattern={regexPatterns.email}
          disabled={isLoading}
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
          minLength={8}
          maxLength={30}
          placeholder={'Ваш пароль'}
          onChange={handleChange}
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
                : errors.name || errors.email || errors.password || message.text
            }
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