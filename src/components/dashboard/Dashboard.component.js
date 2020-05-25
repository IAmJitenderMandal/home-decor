import React, { Fragment } from "react";
import "./dashboard.styles.scss";
import HomePage from "./home-page/Home-page.component";
import InventoryPage from "./inventory-page/Inventory-page.component";
import UserPage from "./users-page/Users-page.component";
import AddItems from "./add-items-page/Add-items.component";
import { Link, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import {
  ListGroup,
  Row,
  Col,
  Form,
  FormGroup,
  Button,
  Label,
  Input,
} from "reactstrap";

function Dashboard({ url }) {
  return (
    <div className="full-height-container">
      <Row className="h-100">
        <Col md="3">
          <div className="profile-details">
          </div>
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
        </Col>

        <Col md="9" className="px-5 h-100">
          <Switch>
            <Route
              path={`${url}/inventory`}
              render={() => (
                <div>
                  <h4>hlloe inventory</h4>
                </div>
              )}
            />
            <Route
              path={`${url}/add_items`}
              render={() => (
                <Fragment>
                  <Form className="add-item-form">
                  <FormGroup>
                      <Label for="addFile">Product Name</Label>
                      <Input
                        type="file"
                        name="addFile"
                        id="addFile"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="productName">Product Name</Label>
                      <Input
                        type="text"
                        name="ProductName"
                        id="productName"
                        placeholder="product name"
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label htmlFor="price">Price</Label>
                      <Input
                        type="number"
                        name="price"
                        placeholder="product price"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="description">Description</Label>
                      <Input
                        type="text"
                        name="description"
                        placeholder="product description"
                      />
                    </FormGroup>
                    <Button>Submit</Button>
                  </Form>
                </Fragment>
              )}
            />

            <Route path={`${url}/users`} render={(props) => (
              <UserPage />
            )} />
          </Switch>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
