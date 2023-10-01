class SearchApi {
  #baseUrl;
  #headers;

  constructor(options) {
    this.#baseUrl = options.baseUrl;
    this.#headers = options.headers;
  };

  #handleResponse(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Ошибка: ${response.status}`);
  };

  getAllMovies() {
    return fetch(`${this.#baseUrl}/beatfilm-movies`, {
        method: 'GET',
        headers: this.#headers
      }
    )
      .then(this.#handleResponse);
  }
}

const searchApi = new SearchApi({
  baseUrl: 'https://api.nomoreparties.co',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
})

export default searchApi
