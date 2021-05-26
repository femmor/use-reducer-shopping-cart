import {initialState} from './context'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Increase
    case "INCREASE":
      let tempCart = state.cart.map(item => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 }
        }
        return item
      })
      return {...state, cart: tempCart}

    // Decrease
    case "DECREASE":
      let tempCartReduced = state.cart.map(item => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 }
        }
        return item
      }).filter(item => item.amount !== 0)
      return {...state, cart: tempCartReduced}
    
    // Remove Item
    case "REMOVE_ITEM":
      return {...state, cart: state.cart.filter(item => item.id !== action.payload) }

    // Clear cart
    case "CLEAR_CART":
      return { ...state, cart: [] }

    // Get Totals
    case "GET_TOTALS":
      let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
        const {price, amount} = cartItem
        const itemTotal = price * amount

        cartTotal.total += itemTotal
        cartTotal.amount += amount

        return cartTotal
      }, {
        total: 0,
        amount: 0
      })

      total = parseFloat(total.toFixed(2))

      return { ...state, total, amount}

    // Default action
    default:
      return state
  }
}

export default reducer