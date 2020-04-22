const redux = require ('redux');

//The 3 principles of Redux:
//1. The store is the single source of truth (saves the global state)
//2. State is read-only (it can only be modified through dispatching actions, not directly)
//3. Changes are made through reducers (which are pure functions)

//action - just an object with property "type". Convention - Capital snake case (ex. INCREASE_NUMBER)
const action = {
  type: 'INCREMENT'
}

//action creator - a function which returns the object that is the action

function changeCount (amount) {
  return {
    type: 'CHANGE_COUNT',
    payload: amount
  }
}

function addFavoriteThing (thing) {
  return {
    type: 'ADD_FAVORITE_THING',
    payload: thing
  }
}

function double () {
  return {
    type: 'DOUBLE'
  }
}
function halve () {
  return {
    type: 'HALVE'
  }
}

const initialState = {
  count: 0,
  favoriteThings: []
}

// reducer - a function that takes the old state and an action, and returns a new state based on the action type
// the reducer is a pure function
function reducer (state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_COUNT':
      return {
        ...state,
        count: state.count + action.payload
      }
    case 'ADD_FAVORITE_THING':
      return {
        ...state,
        favoriteThings: [...state.favoriteThings, action.payload]
      }
    case 'DOUBLE':
      return {
        ...state,
        count: state.count * 2
      }
    case 'HALVE':
      return {
        ...state,
        count: Math.round(state.count/2)
      }
    default:
      return state
  }
}
//create store - store comes with 4 methods:
//1. dispatch
//2. subscribe
//3. getState
//4. replaceReducer
const store = redux.createStore(reducer);
// console.log(store)

//getState - gets current state of the store
//logs 0
console.log(store.getState())

//subscribe - subscribes to an action. takes a function as an argument. this function runs when the store changes
store.subscribe(()=>{
  console.log(store.getState())
})

//dispatch - dispatches an action to the reducer, which instead determines which state to return based on that action
store.dispatch({type: 'CHANGE_COUNT', payload: 22})
store.dispatch(changeCount(-53))
store.dispatch(addFavoriteThing('puppers'))
store.dispatch(double())