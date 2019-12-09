import React from 'react';
import './mainStyle.css';
import Routes from './routes';

import {Provider} from 'react-redux';

import store from './reducers';
// import { createStore } from '../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';


// const store2 = createStore(store)
function App() {
  return (
    <>
    <Provider store = {store}>
      <div className="app">
        <div className="logoContainer">LOGO SPOTIFY</div>
        <div className="contentContainer">
          <Routes />
        </div>
      </div>
      </Provider>
    </>
  );
}

export default App;
