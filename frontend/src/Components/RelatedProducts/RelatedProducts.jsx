import React from 'react'
import "./relatedProducts.css"
import data_product from "../assets/data"
import Item from '../Item/Item'
function RelatedProducts() {
  return (
    <>
        <div className="related-products">
            <h1>Related Products</h1>
            <hr />
            <div className="related-products-items">
                {
                    data_product.map((item, i)=>(
                      
                        <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
                      
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default RelatedProducts