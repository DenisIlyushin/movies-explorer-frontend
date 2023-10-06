import './SearchForm.css'

import ToggleSwitch from '../ToggleSwitch/ToggleSwitch.jsx';
import useValidate from '../../hooks/useValidate.jsx';
import useLocalStorage from '../../hooks/useLocalStorage.jsx';

function SearchForm(
  {
    isSavedMovies,
    onSubmit,
    onSwitchChange,
    switchState
  }
) {
  const {values, handleChange} = useValidate();
  const [
    storedInput,
    setStoredInput
  ] = useLocalStorage(isSavedMovies ? 'search-saved' : 'search', null);

  function fetchInput(event) {
    setStoredInput(event.target.value)
    handleChange(event)
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({
      query: values.searchQuery || storedInput || '',
      isShortMoviesOnly: switchState,
    })
  }

  return (
    <section
      className={'search-form'}
    >
      <form
        name={'search-form'}
        autoComplete={'off'}
        noValidate
        onSubmit={ handleSubmit }
      >
        <div
          className={'search-form__input-container'}
        >
          <input
            className={'search-form__input'}
            id={'searchQuery'}
            type={'text'}
            name={'searchQuery'}
            value={values.searchQuery || storedInput || ''}
            placeholder={'Фильм'}
            required={true}
            onChange={ fetchInput }
          />
          <button
            className={'search-form__submit-button'}
            type={'submit'}
          />
        </div>
        <div
          className={'search-form__switch-container'}
        >
          <ToggleSwitch
            initialState={ switchState }
            onChange={ onSwitchChange }
          />
          <p
            className={'search-form__switch-label'}
          >
            Короткометражки
          </p>
        </div>
      </form>
    </section>
  )
}

export default SearchForm