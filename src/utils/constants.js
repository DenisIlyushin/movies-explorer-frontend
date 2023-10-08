const MAX_MOVIES_ON_PAGE = {
  DESKTOP: 12,
  TABLET: 8,
  MOBILE: 4,
}

const DISPLAY_LIMIT = {
  TABLET: 1184,
  MOBILE: 767,
}

const SHORT_MOVIES_DURATION = 40;

const MESSAGES = {
  NO_MOVIE_FOUND: 'Ничего не найдено',
  UNEXPECTED_ERROR_ON_BEATFILM_SERVER: 'Во время запроса произошла ошибка. ' +
    'Возможно, проблема с соединением или сервер недоступен. Подождите ' +
    'немного и попробуйте ещё раз'
}

const REGEX_PATTERNS = {
  EMAIL: '^[^@]+@[^@]+.[a-zA-Z]{2,5}$',
  USERNAME: '^[A-Za-zА-Яа-яЁё\\-\\s]+$',
}

export {
  MESSAGES,
  MAX_MOVIES_ON_PAGE,
  REGEX_PATTERNS,
  SHORT_MOVIES_DURATION,
  DISPLAY_LIMIT
}
