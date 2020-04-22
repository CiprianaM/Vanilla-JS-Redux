
export function changeCount (amount = 1) {
  return {
    type: 'CHANGE_COUNT',
    payload: amount
  }
}

export function double () {
  return {
    type: 'DOUBLE'
  }
}

export function halve () {
  return {
    type: 'HALVE'
  }
}

export default function countReducer (count = 0, action) {
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