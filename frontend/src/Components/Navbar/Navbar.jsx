import React, { useState } from "react";
import "./nabvar.css";

import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="brand_logo" />
        <p>SHOPSY</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/" style={{textDecoration: "none", color: "black"}} >Shop {menu === "shop" ? <hr /> : <></>}</Link>
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/men" style={{textDecoration: "none", color: "black"}} >Men {menu === "men" ? <hr /> : <></>}</Link>
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/women" style={{textDecoration: "none", color: "black"}} >Women {menu === "women" ? <hr /> : <></>}</Link>
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids" style={{textDecoration: "none", color: "black"}} >Kids {menu === "kids" ? <hr /> : <></>}</Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button className="nav-login">Login</button>
        </Link>

        <Link to="/cart">
          <img src={cart_icon} alt="cart_icon" />{" "}
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}

export default Navbar;
