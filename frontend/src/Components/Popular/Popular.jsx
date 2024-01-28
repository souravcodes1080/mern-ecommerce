import React, { useEffect, useState } from "react";
import "./popular.css";
import Item from "../Item/Item"
function Popular() {

  const [popularProducts, setPopularProducts] = useState([])

  useEffect(()=>{
    fetch("https://shopsy-api.onrender.com")
    .then((res)=> res.json())
    .then((data)=> setPopularProducts(data))
  }, [])

  return (
    <>
      <div className="popular">
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
            {/* {
                popularProducts.map((item, i)=>(
                    <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
                ))
            } */}
        </div>
      </div>
    </>
  );
}

export default Popular;
