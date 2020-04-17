import React from 'react'
import './product.styles.scss';

export default function Product() {
    return (
        <div className="product">
            <div className="img">
                <img src="https://robohash.org/7?set=set2" alt="img" />
            </div>
            <div className="name-price">
                <h5>Lorem</h5>
                <h5>$55</h5>
            </div>
        </div>
    )
}