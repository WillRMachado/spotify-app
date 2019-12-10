import {createStore, combineReducers} from 'redux';
import SpotifyReducer from './spotify-reducer'
import SearchReducer from './search-reducer'
import SearchResultsReducer from './search-results-reducer'


const reducers = combineReducers({
    spotify:SpotifyReducer,
    search:SearchReducer,
    searchResults:SearchResultsReducer

})

const reducersStore = createStore(reducers);


export default reducersStore