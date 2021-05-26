import React from 'react'
import { useGlobalContext } from './context'
import ReactLoading from 'react-loading';

// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'
// items

function App() {
  const {loading} = useGlobalContext()

  if (loading) {
    return (
      <div className='loading'>
        <ReactLoading type="spin" color="#2680C0" height={100} width={100}/>
      </div>
    )
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
