import React from "react";
import "./product.styles.scss";

export default function Product(props) {
  return (
    <div className="product">
      <div className="img">
        <img src={props.product.imageUrl} alt="img" />
      </div>
      <div className="name-price">
        <h5>{props.product.productName}</h5>
        <h5>{props.product.price}</h5>
      </div>
    </div>
  );
}
