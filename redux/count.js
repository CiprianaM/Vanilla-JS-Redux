
function changeCount (amount = 1) {
  return {
    type: 'CHANGE_COUNT',
    payload: amount
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

function countReducer (count = 0, action) {
  switch (action.type) {
    case 'CHANGE_COUNT':
      return count + action.payload
    case 'DOUBLE':
      return count * 2
    case 'HALVE':
      return Math.round(count/2)
    default:
      return count
  }
}

module.exports = countReducer;