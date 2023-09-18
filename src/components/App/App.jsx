import {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import {CurrentUserContext} from '../../context/CurrentUserContext.jsx';

import Header from '../Header/Header.jsx';
import Landing from '../Landing/Landing.jsx';
import Footer from '../Footer/Footer.jsx'


// const [user, setUser] = useState(null);
const user = {
  name: 'Ден Илюшин',
  email: 'id@id.ru',
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <div className="app">
      <CurrentUserContext.Provider value={user}>
        <div
          className={'app__content'}
        >
          <Header
            authorized={isLoggedIn}
          />
          <Routes>
            <Route
              path={'/'}
              element={
                <Landing />
              }
            />
          </Routes>
          <Footer/>
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
