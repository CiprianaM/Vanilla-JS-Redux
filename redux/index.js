const redux = require ('redux');
const {combineReducers, createStore} = redux;
//import the separate reducers
import countReducer from './count';
import favoriteThingsReducer from './favoriteThings';
import youtubeVideoReducer from './youtubeVideo'

//combine the reducers into a single state tree
const rootReducer = combineReducers({
  count: countReducer,
  favoriteThings: favoriteThingsReducer,
  youtubeVideo: youtubeVideoReducer
})

//create the store
const store = createStore(rootReducer);

export default store;