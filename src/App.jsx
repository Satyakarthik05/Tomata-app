import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './Components/Pages/Home/Home'
import Cart from './Components/Pages/Cart/Cart'
import PlaceOrder from './Components/Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'

const App = () => {

  const [showLogin,setShowLogin]= useState(false)

  return (
    <div>
      {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div>
      <div className="app">
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/PlaceOrder' element={<PlaceOrder/>}/>

        </Routes>
      </div>
    </div>
      <Footer/>
    </div>
  )
}

export default App
