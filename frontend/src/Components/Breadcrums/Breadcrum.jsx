import React, { useEffect, useState } from 'react'
import "../Breadcrums/breadcrum.css"
import arrow_icon from "../assets/breadcrum_arrow.png"
function Breadcrum({product}) {
  const [substringLength, setSubstringLength] = useState(100);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
     
      if (screenWidth < 500) {
        setSubstringLength(20); 
      } else if (screenWidth < 800) {
        setSubstringLength(30); 
      }else if (screenWidth < 1024) {
        setSubstringLength(45); } 
      else {
        setSubstringLength(100);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
        <div className="breadcrum">
            HOME <img src={arrow_icon} alt="breadcrum_arrow" /> SHOP <img src={arrow_icon} alt="breadcrum_arrow" /> {product.category} <img src={arrow_icon} alt="breadcrum_arrow" /> {(product.name).substring(0,substringLength)}{substringLength < 30 ? "..." :"" }
        </div>
    </>
  )
}

export default Breadcrum