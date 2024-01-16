import React from 'react'
import "./admin.css"
import Sidebar from '../../Components/Sidebar/Sidebar'
import AddProduct from '../../Components/AddProduct/AddProduct'
import ListProduct from '../../Components/ListProduct/ListProduct'

import {Routes, Route} from "react-router-dom"
function Admin() {
  return (
    <>
        <div className="admin">
          <Sidebar />
          <Routes>
            <Route path='/addproduct' element={<AddProduct/>}/>
            <Route path='/listproduct' element={<ListProduct/>}/>
          </Routes>
        </div>
    </>
  )
}

export default Admin