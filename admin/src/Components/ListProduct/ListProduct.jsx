import React, { useEffect, useState } from "react";
import "./listProduct.css";
import cross_icon from "../../assets/cross_icon.png";
function ListProduct() {
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost:5000/allProducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id)=>{
    await fetch("http://localhost:5000/removeproduct", {
      method: 'POST',
      headers:{
        Accept: "application/json",
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({id: id})
    })
    await fetchInfo()
  }
  
  return (
    <>
      <div className="list-product">
        <h1>All Products list</h1>
        <div className="list-product-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Old Price</p>
          <p>New Price</p>
          <p>Category</p>
          <p>Remove</p>
        </div>
        <div className="list-product-all-products">
          <hr />
          {allProducts.map((product, index) => {
            return (
              <div key={index}>
                <div
                  
                  className="list-product-format-main list-product-format"
                >
                  <img
                    className="list-product-product-icon"
                    src={product.image}
                    alt={product.title}
                  />
                  <p>{product.name}</p>
                  <p>${product.old_price}</p>
                  <p>${product.new_price}</p>
                  <p>{product.category}</p>
                  <img
                  onClick={()=>{removeProduct(product.id)}}
                    className="list-product-remove-item"
                    src={cross_icon}
                    alt="cross_icon"
                  />
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ListProduct;
