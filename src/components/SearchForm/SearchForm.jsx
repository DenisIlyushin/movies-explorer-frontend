import './SearchForm.css'
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch.jsx';
import useValidate from '../../hooks/useValidate.jsx';

function SearchForm(
  {
    onSubmit,
    onSwitchChange,
    switchState
  }
) {
  const {values, handleChange} = useValidate()

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({
      query: values.searchQuery,
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
            value={values.searchQuery || ''}
            placeholder={'Фильм'}
            required={true}
            onChange={handleChange}
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