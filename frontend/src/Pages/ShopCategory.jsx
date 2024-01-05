import React, { useContext } from 'react'
import "./pagesCss/shopCategory.css"
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from "../Components/assets/dropdown_icon.png"
import Item from '../Components/Item/Item'
function ShopCategory({category, banner}) {

  const {all_product} = useContext(ShopContext)



  return (
    <>
    <div className="shop-category">
      <img src={banner} alt= {`${category}_banner`} className='banner'/>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="dropdown_icon" />
        </div>
      </div>
      <div className="shopcategory-products">
        {
          all_product.map((product, i)=>{
            if(category === product.category){
              return (<Item key={i} image={product.image} name={product.name} new_price={product.new_price} old_price={product.old_price} />)
            }else{
              return null 
            }
          })
        }
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
    </>
  )
}

export default ShopCategory