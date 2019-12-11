import React from 'react';
import './mainStyle.css';
import Routes from './routes';
import Logo from './assets/Spotify_Icon_RGB_White.png'
import AskForLogin from './pages/SpotifyLogin/AskForLogin'

import {Provider} from 'react-redux';

import store from './reducers';
// import { createStore } from '../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';



// const store2 = createStore(store)
function App() {
  window.close();
  return (
    <>
    <Provider store = {store}>
      <div className="app">
        <img src={Logo} className="spotifyLogo" alt="album Detail Cover" />
        <AskForLogin />
        <div className="contentContainer">
          <Routes />
        </div>
      </div>
      </Provider>
    </>
  );
}

export default App;
