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

function increment () {
  return {
    type: 'INCREMENT'
  }
}

function decrement () {
  return {
    type: 'DECREMENT'
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

//reducer - a function that takes the old state and an action, and returns a new state based on the action type
//the reducer is a pure function
function reducer (oldState = {count: 0}, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: oldState.count + 1
      }
    case 'DECREMENT':
      return {
        count: oldState.count - 1
      }
    case 'DOUBLE':
      return {
        count: oldState.count * 2
      }
    case 'HALVE':
      return {
        count: Math.round(oldState.count/2)
      }
    default:
      return oldState
  }
}