import './App.css';
import { CurrentUserContext } from '../../context/CurrentUserContext.jsx';
import { useState } from 'react';

// const [user, setUser] = useState(null);
const user = {
  name: 'Ден Илюшин',
  email: 'id@id.ru',
}
function App() {
  return (
    <div className="app">
      <CurrentUserContext.Provider value={user}>
        <div className="app__content"></div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
