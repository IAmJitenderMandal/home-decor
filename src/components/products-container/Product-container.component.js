import React from 'react'
import './products-container.styles.scss';
import Product from '../product/Product.component';
import {SeeAllBtn} from '../button/Button.component';

export default function ProductContainer() {
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
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
            <div className="btn-container">
                <SeeAllBtn />
            </div>
        </div>
    )
}