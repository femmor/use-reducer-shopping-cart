import {initialState} from './context'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] }
  
    default:
      break;
  }
}

export default reducer