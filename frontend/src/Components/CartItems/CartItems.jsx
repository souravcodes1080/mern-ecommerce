import React, { useContext } from "react";
import "./cartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";
function CartItems() {
  const {getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <>
      <div className="cart-items">
      <hr />
        <div className="cart-items-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        
        {all_product.map((e,index) => {
          if (cartItems[e.id] > 0) {
            return (
              <div className="" key={index}>
                <div className="cart-items-format cart-items-format-main">
                  <img
                    src={e.image}
                    alt=""
                    className="cart-icon-product-icon"
                  />
                  <p>{e.name}</p>
                  <p>${e.new_price}</p>
                  <button className="cart-items-quntity">
                    {cartItems[e.id]}
                  </button>
                  <p>${e.new_price * cartItems[e.id]}</p>
                  <img
                  className="cart-item-remove-icon"
                    src={remove_icon}
                    alt="remove_icon"
                    onClick={() => {
                        removeFromCart(e.id);
                    }}
                  />
                </div>
                <hr />
              </div>
            );
          }
          return null
        })}
        <div className="cart-items-down">
          <div className="cart-items-total">
            <h1>Cart Totals</h1>
            <div className="">
              <div className="cart-items-total-item">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-items-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cart-items-total-item">
                <h3>
                  Total
                </h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>
            </div>
            <button>Proceed to Checkout</button>
          </div>
          <div className="cart-items-promocode">
            <p>If you have a promo code, enter it here</p>
            <div className="cart-item-promo-box">
              <input type="text" placeholder="Promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItems;
