import './SearchForm.css'
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch.jsx';

function SearchForm(
  {
    onSubmit,
    onSwitchChange,
    switchState
  }
) {
  return (
    <form
      className={'search-form'}
      name={'search-form'}
      autoComplete={'off'}
      noValidate
      onSubmit={ onSubmit }
    >
      <div
        className={'search-form__input-container'}
      >
        <input
          className={'search-form__input'}
          placeholder={'Фильм'}
          required
        />
        <button
          className={'search-form__submit_button'}
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
  )
}

export default SearchForm