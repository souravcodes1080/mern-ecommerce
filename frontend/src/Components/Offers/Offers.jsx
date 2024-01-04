import React from 'react'
import "./offers.css"
import arrow_icon from "../assets/arrow.png"

import exclusive_image from "../assets/exclusive_image.png"
function Offers() {
  return (
    <>
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers for</h1><h1>You</h1>
                <p>Only on Best Seller Products</p>
                <button>Check Now &nbsp;&nbsp;
                <img src={arrow_icon} alt="arrow_icon" />
                </button>
                
            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt="exclusive_image" />
            </div>
        </div>
    </>
  )
}

export default Offers