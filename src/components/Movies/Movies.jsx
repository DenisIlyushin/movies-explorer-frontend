import './Movies.css'
import SearchForm from '../SearchForm/SearchForm.jsx';

function Movies({}) {

  function handleSearchFormSubmit(event) {
    event.preventDefault()
    console.log('Кнопка тык')
  }

  function handleSwitchClick() {
    console.log('Рубильник тык')
  }

  return (
    <div className={'movies'}>
      <SearchForm
        onSubmit={ handleSearchFormSubmit }
        onSwitchClick={ handleSwitchClick }
      />
    </div>
  )
}

export default Movies
