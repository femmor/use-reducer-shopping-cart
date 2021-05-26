import React, { useState, useContext, useReducer, useEffect, createContext } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = createContext()

export const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // Remove single item
  const removeItem = id => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id
    })
  }

  // Clear cart
  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART"
    })
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}
