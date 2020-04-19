import React, { Component } from 'react';
import Hero from '../hero-section/Hero.component';
import FeatureProducts from '../feature products/Featured-product.component';
import AboutServices  from '../about-services/AboutServices.component';
import ProductContainer from '../products-container/Product-container.component';
import EnqueryForm from '../enquery-form/EnqueryForm.component';
import './app.styles.scss';

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
                <ProductContainer />
                <AboutServices />
                <EnqueryForm />
            </div>
        )
    }

}

export default App;