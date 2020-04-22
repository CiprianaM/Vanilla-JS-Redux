const redux = require ('redux');
const {combineReducers, createStore} = redux;
//import the separate reducers
const countReducer = require('./count');
const favoriteThingsReducer = require('./favoriteThings');
const youtubeVideoReducer = require('./youtubeVideo');

//combine the reducers into a single state tree
const rootReducer = combineReducers({
  count: countReducer,
  favoriteThings: favoriteThingsReducer,
  youtubeVideo: youtubeVideoReducer
})

//create the store
const store = createStore(rootReducer);
store.subscribe(()=>{
  console.log(store.getState())
})

module.exports = store;