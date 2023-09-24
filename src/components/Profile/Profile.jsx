import {useContext, useEffect} from 'react';

import './Profile.css'
import {CurrentUserContext} from '../../context/CurrentUserContext.jsx';
import useValidate from '../../hooks/useValidate.jsx';

function Profile(
  {
    onSubmit,
    onLogOut
  }
) {
  const currentUser = useContext(CurrentUserContext);
  const {values, errors, isValid, setValues, handleChange, resetForm} = useValidate()

  useEffect(() => {
    setValues(
      currentUser
        ? {username: currentUser.name, email: currentUser.email}
        : {username: '', email: ''}
    );
  }, [currentUser]);

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({
      name: values.username,
      email: values.email,
    })
  }

  return (
    <section
      className={'profile'}
      id={'profile'}
    >
      <h2
        className={'profile__title'}
      >
        {`Привет, ${currentUser.name}!`}
      </h2>
      <form
        className={'profile__form'}
        name={'profile-edit'}
        autoComplete={'off'}
        noValidate
        onSubmit={handleSubmit}
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
            placeholder={'Как вас зовут?'}
            required
            minLength={2}
            maxLength={30}
            value={values.username || currentUser.name}
            onChange={handleChange}
          />
          <span
            className={'form__input-error'}
          >
            {errors.username}
          </span>
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
            placeholder={'Ваш e-mail'}
            required
            value={values.email || currentUser.email}
            onChange={handleChange}
          />
          <span
            className={'form__input-error'}
          >
            {errors.email}
          </span>
        </label>
        <button
          className={'profile__button profile__button_type_submit-button'}
          type={'submit'}
          disabled={!isValid}
        >
          Редактировать
        </button>
      </form>
      <button
        className={'profile__button profile__button_type_logout-button'}
        type={'button'}
        onClick={onLogOut}
      >
        Выйти из аккаунта
      </button>
    </section>
  )
}

export default Profile