import React, { useContext } from 'react'
import {ShopContext} from "../Context/ShopContext"
import {useParams} from "react-router-dom"
import Breadcrum from '../Components/Breadcrums/Breadcrum'
import ProductDisplay from '../Components/ProductDispaly/ProductDisplay'
import Description from '../Components/DescriptionBox/Description'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'
function Product() {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams()
  const product = all_product.find((e)=>e.id === Number(productId))
  return (
    <>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <Description />
      <RelatedProducts />
    </>
  )
}

export default Product