import React from 'react';
import Search from '../search/Search.component';
import ShopingCart from '../shopingCart/ShopingCart.component';
import './hero.styles.scss';

export default function Hero() {
    return (
        <div className="hero-section">
            <div className="left">
                <div className="hero-text">
                    <h1 className="primary">Feel the Comfort using our products</h1>
                    <p className="secondary">At our store you will find best designed furniture and other decoration accesories for your house.</p>
                    <button className="shop-now-btn">Shop Now</button>
                </div>
            </div>
            <div className="right">
                <Search />
                <ShopingCart />
            </div>
        </div>
    )
}