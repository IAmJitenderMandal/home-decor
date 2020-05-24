import React, { Fragment } from "react";
import Hero from "../hero-section/Hero.component";
import FeatureProducts from "../feature products/Featured-product.component";
import AboutServices from "../about-services/AboutServices.component";
import ProductContainer from "../products-container/Product-container.component";
import EnqueryForm from "../enquery-form/EnqueryForm.component";
import Dashboard from "../dashboard/Dashboard.component";
import "./app.styles.scss";
import { Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Fragment>
              <Link to="/dashboard">Dashboard</Link>
              <Hero />
              <FeatureProducts />
              <ProductContainer />
              <AboutServices />
              <EnqueryForm />
            </Fragment>
          )}
        />
        <Route
          path="/dashboard"
          render={({ match }) => <Dashboard {...match} />}
        />
      </Switch>
    </div>
  );
}

export default App;
