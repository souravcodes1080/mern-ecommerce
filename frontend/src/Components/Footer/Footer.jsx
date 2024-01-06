import React from 'react'
import "./footer.css"
import footer_logo from "../assets/logo_big.png"
import instagram_icon from "../assets/instagram_icon.png"
import pintester_icon from "../assets/pintester_icon.png"
import whatsapp_icon from "../assets/whatsapp_icon.png"
function Footer() {
  return (
    <>
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="footer_logo" />
                <p>SHOPEE</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="instagram" />
                </div>
                <div className="footer-icons-container">
                    <img src={pintester_icon} alt="pintrest" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="whatsapp" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ Shopee 2024 - All rights reserved.</p>
            </div>
        </div>
    </>
  )
}

export default Footer