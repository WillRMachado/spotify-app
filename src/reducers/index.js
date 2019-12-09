import {createStore, combineReducers} from 'redux';
import SpotifyReducer from './spotify-reducer'
import SearchReducer from './search-reducer'


const reducers = combineReducers({
    spotify:SpotifyReducer,
    search:SearchReducer

})

const reducersStore = createStore(reducers);


export default reducersStore