import {initialState} from './context'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REMOVE_ITEM":
      return {...state, cart: state.cart.filter(item => item.id !== action.payload) }

    case "CLEAR_CART":
      return { ...state, cart: [] }
  
    default:
      return state
  }
}

export default reducer