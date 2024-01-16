import React, { useState } from "react";
import "./addProduct.css";
import upload_area from "../../assets/upload_area.svg";
function AddProduct() {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const addProduct = async () => {
    console.log(productDetails);
    
  };

  return (
    <>
      <div className="add-product">
        <div className="add-product-item-field">
          <p>Product title</p>
          <input
            value={productDetails.name}
            onChange={changeHandler}
            type="text"
            name="name"
            placeholder="Type Here"
          />
        </div>
        <div className="add-product-price">
          <div className="add-product-item-field">
            <p>Price</p>
            <input
              value={productDetails.old_price}
              onChange={changeHandler}
              type="number"
              name="old_price"
              placeholder="Type Here"
            />
          </div>
          <div className="add-product-item-field">
            <p>Offer Price</p>
            <input
              value={productDetails.new_price}
              onChange={changeHandler}
              type="number"
              name="new_price"
              placeholder="Type Here"
            />
          </div>
        </div>
        <div className="add-product-item-field">
          <p>Product Category</p>
          <select
            name="category"
            className="add-product-selector"
            value={productDetails.category}
            onChange={changeHandler}
          >
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kid">Kids</option>
          </select>
        </div>
        <div className="add-product-item-field">
          <label htmlFor="file-input">
            <img
              src={image ? URL.createObjectURL(image) : upload_area}
              alt="upload_area"
              className="add-product-thumbnail-image"
            />
          </label>
          <input
            onChange={imageHandler}
            type="file"
            name="image"
            id="file-input"
            hidden
          />
        </div>
        <button
          className="add-product-button"
          onClick={() => {
            addProduct();
          }}
        >
          Add
        </button>
      </div>
    </>
  );
}

export default AddProduct;
