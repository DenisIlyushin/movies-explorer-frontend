class Api {
  #baseUrl;
  #headers;

  constructor(options) {
    this.#baseUrl = options.baseUrl;
    this.#headers = options.headers;
  }

  #handleResponse(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`oшибка ${response.status}`);
  }

  signUp({name, email, password}) {
    return fetch(`${this.#baseUrl}/signup`, {
        method: 'POST',
        headers: this.#headers,
        body: JSON.stringify({
          name: name,
          email: email,
          password: password
        }),
      }
    )
      .then(this.#handleResponse);
  }

  signIn({email, password}) {
    return fetch(`${this.#baseUrl}/signin`, {
        method: 'POST',
        headers: this.#headers,
        body: JSON.stringify({
          email: email,
          password: password
        }),
      }
    )
      .then(this.#handleResponse)
  }

  getMe(jwt) {
    return fetch(`${this.#baseUrl}/users/me`, {
        method: 'GET',
        headers: {
          ...this.#headers,
          ...{
            Authorization: `Bearer ${jwt}`
          }
        }
      }
    )
      .then(this.#handleResponse);
  }

  setMe(jwt, {name, email}) {
    return fetch(`${this.#baseUrl}/users/me`, {
        method: 'PATCH',
        headers: {
          ...this.#headers,
          ...{
            Authorization: `Bearer ${jwt}`
          }
        },
        body: JSON.stringify({
          name: name,
          email: email
        }),
      }
    )
      .then(this.#handleResponse);
  }

  getAllMovies(jwt) {
    return fetch(`${this.#baseUrl}/movies`, {
        method: 'GET',
        headers: {
          ...this.#headers,
          ...{
            Authorization: `Bearer ${jwt}`
          }
        }
      }
    )
      .then(this.#handleResponse);
  }

  addMovie(jwt, movieInfo) {
    return fetch(`${this.#baseUrl}/movies`, {
        method: 'POST',
        headers: {
          ...this.#headers,
          ...{
            Authorization: `Bearer ${jwt}`
          }
        },
        body: JSON.stringify(movieInfo),
      }
    )
      .then(this.#handleResponse);
  }

  deleteMovie(jwt, id) {
    return fetch(`${this.#baseUrl}/movies/${id}`, {
        method: 'DELETE',
        headers: {
          ...this.#headers,
          ...{
            Authorization: `Bearer ${jwt}`
          }
        }
      }
    )
      .then(this.#handleResponse);
  }
}


const api = new Api({
  baseUrl: 'https://denisilyushin.nomoredomainsicu.ru/api',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
})

export default api

