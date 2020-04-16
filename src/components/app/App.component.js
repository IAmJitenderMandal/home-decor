import React, { Component } from 'react';
import Hero from '../hero-section/Hero.component';
import FeatureProducts from '../feature products/Featured-product.component';

import './app.styles.scss'

class App extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className="app">
                <Hero />
                <FeatureProducts />
            </div>
        )
    }

}

export default App;