import React, { useContext } from 'react'
import "./productDisplay.css"
import star_icon from "../assets/star_icon.png"
import star_dull_icon from "../assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'
function ProductDisplay({product}) {
    const {addToCart} = useContext(ShopContext)
  return (
    <>
        <div className="product-display">
            <div className="product-display-left">
                <div className="img-list">
                    <img src={product.image} alt="product_image1" loading='lazy' />
                    <img src={product.image} alt="product_image2" loading='lazy' />
                    <img src={product.image} alt="product_image3" loading='lazy' />
                    <img src={product.image} alt="product_image4" loading='lazy' />
                </div>
                <div className="display-img">
                    <img className='product-display-main-img' src={product.image} alt="main_image" width={"100%"} loading='lazy' />
                </div>
            </div>
            <div className="product-display-right">
                <h1>{product.name}</h1>
                <div className="product-display-right-stars">
                    <img src={star_icon} alt="star" loading='lazy' />
                    <img src={star_icon} alt="star" loading='lazy' />
                    <img src={star_icon} alt="star" loading='lazy' />
                    <img src={star_icon} alt="star" loading='lazy' />
                    <img src={star_dull_icon} alt="star" />
                    <p>(133)</p>
                </div>
                <div className="product-display-right-prices">
                    <div className="old-price">
                        ${product.old_price}
                    </div>
                    <div className="new-price">
                        ${product.new_price}
                    </div>
                </div>
                <div className="product-display-right-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corporis ratione iure nam eveniet iusto accusamus magnam aspernatur ad quis corrupti adipisci ipsum a, aperiam harum mollitia neque voluptatibus exercitationem!
                </div>
                <div className="product-display-right-size">
                    <h1>Select Size</h1>
                    <div className="product-display-right-sizes">
                        <div className="">S</div>
                        <div className="">M</div>
                        <div className="">L</div>
                        <div className="">XL</div>
                        <div className="">XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
                <p className='product-display-right-category'><span>
                    Category: 
                </span> Women, T-Shirt, Crop Top</p>
                <p className='product-display-right-category'><span>
                    Tags: 
                </span> Modern, Latest</p>
            </div>
        </div>
    </>
  )
}

export default ProductDisplay