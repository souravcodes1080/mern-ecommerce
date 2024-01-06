import React from 'react'
import "../Breadcrums/breadcrum.css"
import arrow_icon from "../assets/breadcrum_arrow.png"
function Breadcrum({product}) {
    
  return (
    <>
        <div className="breadcrum">
            HOME <img src={arrow_icon} alt="breadcrum_arrow" /> SHOP <img src={arrow_icon} alt="breadcrum_arrow" /> {product.category} <img src={arrow_icon} alt="breadcrum_arrow" /> {(product.name).substring(0,30)}...
        </div>
    </>
  )
}

export default Breadcrum