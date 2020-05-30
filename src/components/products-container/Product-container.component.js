import React, { useState } from "react";
import "./products-container.styles.scss";
import Product from "../product/Product.component";
import { SeeAllBtn } from "../button/Button.component";
import * as firebase from "firebase/app";
import "firebase/database";

import config from "../../utils/firebaseConfig";
firebase.initializeApp(config);

export default function ProductContainer() {
  const [products, setProducts] = useState([]);

  const databaseRef = firebase.database().ref("/products/");
  databaseRef.once("value", (snapshot) => {
    setProducts(snapshot.val());
  });

  return (
    <div className="allProducts">
      <div className="top">
        <h3>All Products</h3>
        <div>
          <button className="active">Hand Made</button>
          <button>Factory Made</button>
        </div>
      </div>
      <div className="products-container">
        {/* {products.map((index, product) => (
          <Product key={index} product={product} />
        ))} */
        
        Object.entries(products).map((product,index ) => {
            return <Product product={product[1]} key={index} />
        })
        }
      </div>
      <div className="btn-container">
        <SeeAllBtn />
      </div>
    </div>
  );
}
