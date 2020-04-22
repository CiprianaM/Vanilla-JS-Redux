exports.addFavoriteThing = function (thing) {
  return {
    type: 'ADD_FAVORITE_THING',
    payload: thing
  }
}

exports.removeFavoriteThing = function (thing) {
  return {
    type: 'REMOVE_FAVORITE_THING',
    payload: thing
  }
}

exports.favoriteThingsReducer = function (favoriteThings = [], action) {
  switch (action.type) {
    case 'ADD_FAVORITE_THING':
      return [...favoriteThings, action.payload]
    case 'REMOVE_FAVORITE_THING':
      return favoriteThings.filter(elem => elem !== action.payload)
    default:
      return favoriteThings;
  }
}
