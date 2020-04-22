
exports.changeCount = function (amount = 1) {
  return {
    type: 'CHANGE_COUNT',
    payload: amount
  }
}

exports.double = function () {
  return {
    type: 'DOUBLE'
  }
}

exports.halve = function () {
  return {
    type: 'HALVE'
  }
}

exports.countReducer = function (count = 0, action) {
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
