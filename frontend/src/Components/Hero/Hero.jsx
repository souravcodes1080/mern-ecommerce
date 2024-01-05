import React from 'react'
import "./hero.css"
import hand_icon from "../assets/hand_icon.png"
import arrow_icon from "../assets/arrow.png"
import hero_image from "../assets/hero_image.png"
function Hero() {
  return (
    <>
        <div className="hero">
            <div className="hero-left">
              <h2>
                NEW ARIVALS
              </h2>
              <div className="">
                <div className="hero-hand-icon">
                  <p>new</p>
                  <img src={hand_icon} alt="hand_icon" />
                </div>
                <p>Collections</p>
                <p>for everyone</p>
              </div>
              <div className="hero-latest-button">
                <div className="">
                  Latest Collection
                </div>
                <img src={arrow_icon} alt="arrow" />
              </div>
            </div>
            <div className="hero-right">
              <img src={hero_image} alt="hero_img" width={"80%"}/>
            </div>
        </div>
    </>
  )
}

export default Hero