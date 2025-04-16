import React from 'react'
import Navbar from './components/Navbar'
import ProductList from './pages/ProductList'
import PrroductsDetail from './pages/ProductDetails'
import Cart from './pages/Cart'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductList />}></Route>
        <Route path='/product/:id' element={<PrroductsDetail />}></Route>
        <Route path='/cart' element={<Cart />}></Route>

      </Routes>
    </div>
  )
}

export default App