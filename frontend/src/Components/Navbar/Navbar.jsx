import React, { useContext, useRef, useState } from "react";
import "./nabvar.css";
import dropdown_icon from "../assets/navbar-dropdown.png";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

function Navbar() {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdownToggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visble");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="brand_logo" width={"50px"} />
        <p>SHOPEE</p>
      </div>

      <ul className="nav-menu" ref={menuRef}>
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Shop {menu === "shop" ? <hr /> : <></>}
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/men" style={{ textDecoration: "none", color: "black" }}>
            Men {menu === "men" ? <hr /> : <></>}
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/women" style={{ textDecoration: "none", color: "black" }}>
            Women {menu === "women" ? <hr /> : <></>}
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids" style={{ textDecoration: "none", color: "black" }}>
            Kids {menu === "kids" ? <hr /> : <></>}
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("authToken") ? (
          <button
            onClick={() => {
              localStorage.removeItem("authToken");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button
              onClick={() => {
                setMenu("login");
              }}
              className="nav-login"
            >
              Login
            </button>
          </Link>
        )}

        <Link to="/cart">
          <img
            onClick={() => {
              setMenu("cart");
            }}
            src={cart_icon}
            alt="cart_icon"
            width={"70%"}
          />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
      <img
        onClick={dropdownToggle}
        src={dropdown_icon}
        alt="dropdown_icon"
        className="nav-dropdown"
      />
    </div>
  );
}

export default Navbar;
