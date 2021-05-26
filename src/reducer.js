import {initialState} from './context'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE":
      let tempCart = state.cart.map(item => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 }
        }
        return item
      })
      return {...state, cart: tempCart}

      case "DECREASE":
        let tempCartReduced = state.cart.map(item => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 }
          }
          return item
        }).filter(item => item.amount !== 0)
        return {...state, cart: tempCartReduced}
    

    case "REMOVE_ITEM":
      return {...state, cart: state.cart.filter(item => item.id !== action.payload) }

    case "CLEAR_CART":
      return { ...state, cart: [] }
  
    default:
      return state
  }
}

export default reducer