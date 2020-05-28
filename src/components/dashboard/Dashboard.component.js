import React, { Fragment } from "react";
import "./dashboard.styles.scss";
import HomePage from "./home-page/Home-page.component";
import InventoryPage from "./inventory-page/Inventory-page.component";
import UserPage from "./users-page/Users-page.component";
import AddItems from "./add-items-page/Add-items.component";
import { Link, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, Row, Col } from "reactstrap";


function Dashboard({ url }) {

  return (
    <Fragment>
      <div className="h-100 add-item">
        <div className="left">
          <div className="navigation h-100">
            <Link className="text-light text-center" to={`${url}/inventory`}>
              <ListGroup>Inventory</ListGroup>
            </Link>
            <Link className="text-light text-center" to={`${url}/add_items`}>
              <ListGroup>Add item</ListGroup>
            </Link>
            <Link className="text-light text-center" to={`${url}/users`}>
              <ListGroup>Users</ListGroup>
            </Link>
          </div>
        </div>

        <div className="right px-3 h-100">
          <Switch>
            <Route
              path={`${url}/inventory`}
              render={() => (
                <div>
                  <h4>hlloe inventory</h4>
                </div>
              )}
            />
            <Route path={`${url}/add_items`} component={AddItems} />
            <Route path={`${url}/users`} render={(props) => <UserPage />} />
          </Switch>
        </div>
      </div>
    </Fragment>
  );
}

export default Dashboard;
