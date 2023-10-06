const maxMoviesPerPage = {
  desktop: 12,
  tablet: 8,
  mobile: 4,
}

const shortMoviesDuration = 40;

const messages = {
  noMoviesFound: 'Ничего не найдено',
  unexpectedErrorOnBeafilmServer: 'Во время запроса произошла ошибка. ' +
    'Возможно, проблема с соединением или сервер недоступен. Подождите ' +
    'немного и попробуйте ещё раз'
}

const regexPatterns = {
  email: '^[^@]+@[^@]+.[a-zA-Z]{2,5}$',
  userName: '^[A-Za-zА-Яа-яЁё\\-\\s]+$',
}

export {maxMoviesPerPage, shortMoviesDuration, messages, regexPatterns}
