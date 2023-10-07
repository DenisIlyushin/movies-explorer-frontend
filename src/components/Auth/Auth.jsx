import {Link} from 'react-router-dom';
import './Auth.css'

import React from 'react';
import logo from '../../images/logo.svg';

function Auth(
  {
    title,
    buttonTitle,
    isValid,
    isLoading,
    onSubmit,
    children,
  }
) {
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit()
  }

  function getFormFieldsByType(type) {
    return React.Children.map(children, (child => {
      if (child.type === type) return child;
      return null;
    }));
  }

  return (
    <main
      className={'auth'}
    >
      <form
        className={'auth__form'}
        onSubmit={handleSubmit}
        autoComplete={'off'}
      >
        <Link
          to={'/'}
          className={'auth__logo'}
        >
          <img
            src={logo}
            alt={'логотип'}
          />
        </Link>
        <h1 className={'auth__title'}>{title}</h1>
        {
          getFormFieldsByType('label')
        }
        <div className={'auth__blank'}/>
        <button
          className={
            `auth__submit-button ${isValid ? '' : 'auth__submit-button_inactive'}`
          }
          type={'submit'}
          disabled={!isValid}
        >
          {isLoading ? `${buttonTitle}...` : buttonTitle}
        </button>
        {
          getFormFieldsByType('p')
        }
      </form>
    </main>
  )
}

export default Auth
