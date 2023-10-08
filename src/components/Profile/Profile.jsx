import {useContext, useState} from 'react';
import './Profile.css'

import {CurrentUserContext} from '../../context/CurrentUserContext.jsx';
import useValidate from '../../hooks/useValidate.jsx';
import {regexPatterns} from '../../utils/constants.js';

function Profile(
  {
    isLoading,
    messageState: [message, setMessage],
    onSubmit,
    onLogOut
  }
) {
  const currentUser = useContext(CurrentUserContext);
  const {values, errors, isValid, handleChange} = useValidate()

  // сброс сообщения api при повторном возвращении на страницу
  useState(() => {
    setMessage({})
  }, [isValid])

  function fetchInputChange(event) {
    setMessage({})
    handleChange(event)
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({
      name: values.username || currentUser.name,
      email: values.email || currentUser.email,
    })
  }

  return (
    <main
      className={'profile'}
      id={'profile'}
    >
      <h1
        className={'profile__title'}
      >
        {`Привет, ${currentUser ? currentUser.name : 'Студент Я.Практикума'}!`}
      </h1>
      <form
        className={'profile__form'}
        id={'profile-form'}
        name={'profile-edit'}
        autoComplete={'off'}
        noValidate
      >
        <label
          className={'profile__input-label'}
        >
          Имя
          <input
            className={'profile__input'}
            id={'username'}
            name={'username'}
            type={'text'}
            required
            minLength={2}
            maxLength={30}
            value={!currentUser ? values.username : currentUser.name}
            placeholder={'Как вас зовут?'}
            onChange={fetchInputChange}
            pattern={regexPatterns.userName}
            disabled={isLoading}
          />
        </label>
        <label
          className={'profile__input-label'}
        >
          E-mail
          <input
            className={'profile__input'}
            id={'email'}
            name={'email'}
            type={'email'}
            required={true}
            value={!currentUser ? values.email : currentUser.email}
            placeholder={'Ваш e-mail'}
            onChange={fetchInputChange}
            pattern={regexPatterns.email}
            disabled={isLoading}
          />
          <span
            className={
              message.isSuccess
                ? 'profile__input-success'
                : 'profile__input-error'
            }
          >
            {
              !errors && message.isSuccess
                ? message.text
                : errors.username || errors.email || message.text
            }
          </span>
        </label>
      </form>
      <div
        className={'profile__buttons'}
      >
        <button
          className={'profile__button profile__button_type_submit-button'}
          type={'submit'}
          disabled={!isValid || isLoading}
          onClick={handleSubmit}
        >
          {isLoading ? 'Редактировать...' : 'Редактировать'}
        </button>
        <button
          className={'profile__button profile__button_type_logout-button'}
          type={'button'}
          onClick={onLogOut}
        >
          Выйти из аккаунта
        </button>
      </div>
    </main>
  )
}

export default Profile