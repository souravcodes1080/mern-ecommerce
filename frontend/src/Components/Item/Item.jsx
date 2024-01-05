import React from "react";
import "./item.css";
import { Link } from "react-router-dom";
function Item({id, image, name, new_price, old_price }) {
  return (
    <>
      <div className="item">
        <Link to={`/product/${id}`} className="item-link" onClick={window.scrollTo(0,0)}>
          <img src={image} alt="product_image" width={"100%"} loading="lazy" />
          <p>{name}</p>
          <div className="items-prices">
            <div className="item-price-new">${new_price}</div>
            <div className="item-price-old">${old_price}</div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Item;
