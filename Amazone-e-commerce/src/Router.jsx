import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Landing from './Pages/Landing/Landing'
import SignUp from './Pages/Auth/SignUp'
import Payment from './Pages/Payment/Payment'
import Order from './Pages/Order/Order'
import Cart from './Pages/Cart/Cart'
import Result from './Pages/Result/Result'
import ProductDetail from './Pages/ProductDetail/ProductDetail'

function Routering() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/auth' element={<SignUp />} />
        <Route path='/payments' element={<Payment />} />
        <Route path='/order' element={<Order />} />
        <Route path='/category/:categoryName' element={<Result />} />
        <Route path='/products/:productId' element={<ProductDetail/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>

    </Router>
  )
}

export default Routering