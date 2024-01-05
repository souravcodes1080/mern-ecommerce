import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import men_banner from "./Components/assets/banner_mens.png"
import women_banner from "./Components/assets/banner_women.png"
import kids_banner from "./Components/assets/banner_kids.png"

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <div className="body-wrapper">
        <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<ShopCategory category="men" banner={men_banner} />} />
        <Route path="/women" element={<ShopCategory category="women" banner={women_banner} />} />
        <Route path="/kids" element={<ShopCategory category="kid" banner={kids_banner} />} />
        <Route path="/product" element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>
      </div>
      <Footer />
      
    </BrowserRouter>
    </>
  )
}

export default App