import React, { Fragment, useState } from "react";
import { Row, Col, Form, FormGroup, Button, Label, Input } from "reactstrap";
import { v4 as UID } from "uuid";

import "./add-item.styles.scss";

// firebase core imports
import * as firebase from "firebase/app";
import firebaseConfig from "../../../utils/firebaseConfig";
// import storage service
import "firebase/storage";
// import database service
import "firebase/database";

// init firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

//create a refrence to storage services
const storage = firebase.storage();

const database = firebase.database();

//create reference to our storage bucket
const storageRef = storage.ref();

function AddItems() {
  const [file, setFile] = useState("");
  const [uploading, setUpaloading] = useState(false);
  const [profileUpload, setProfileUpload] = useState(false);
  const [showMsg, setShowMsg] = useState("");
  const [productDetails, setProductDetails] = useState({
    name: "",
    price: "",
    description: "",
    imgUrl: "",
  });

  const writeUserData = (productName, price, description, imageUrl) => {
    let id = UID();
    database.ref(`products/${id}`).set({
      productName,
      price,
      description,
      imageUrl,
    });
    database.ref(`products/${id}`).on("child_added", () => {
      setShowMsg("Product Added Successfully");
    });
  };

  const uploadFile = (event) => {
    //   prevent default behaivear
    event.preventDefault();

    setUpaloading(true);
    setProfileUpload(true);
    setShowMsg("");
    // file referce in storage bucket
    const fileRef = storageRef.child(`usersImgs/usr${UID()}`);
    // file metadata
    const fileMetaData = {
      contentType: "image/jpeg",
    };

    const uploadTask = fileRef.put(file, fileMetaData);

    console.log(uploadTask);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if (progress === 100) {
          setUpaloading(false);
        }
      },
      () => {
        console.log("error has staled the program");
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((imgUrl) => {
          setProductDetails({ ...productDetails, imgUrl });
          writeUserData(
            productDetails.name,
            productDetails.price,
            productDetails.description,
            imgUrl
          );
          setProfileUpload(false);
          setProductDetails({
            name: "",
            price: "",
            description: "",
            // imgUrl: null,
          });
        });
      }
    );
  };

  return (
    <div className="add-items">
      <Row>
        <Col>
          <Fragment>
            <Form
              className="add-item-form"
              onSubmit={uploadFile}
              onChange={(event) => {
                if (event.target.id === "file") {
                  setProductDetails({
                    ...productDetails,
                    imgUrl: event.target.value,
                  });
                }

                if (event.target.id === "productName") {
                  setProductDetails({
                    ...productDetails,
                    name: event.target.value,
                  });
                }

                if (event.target.id === "productPrice") {
                  setProductDetails({
                    ...productDetails,
                    price: event.target.value,
                  });
                }

                if (event.target.id === "productDescription") {
                  setProductDetails({
                    ...productDetails,
                    description: event.target.value,
                  });
                }
              }}
            >
              <FormGroup>
                <Label for="addFile">Product Name</Label>
                <Input
                  type="file"
                  name="addFile"
                  id="file"
                  required
                  // value={productDetails.imgUrl}
                  onChange={(event) => {
                    setFile(event.target.files[0]);
                  }}
                />
                <span className={`uploading ${uploading}`}>
                  Photo Uploading...
                </span>
              </FormGroup>
              <FormGroup>
                <Label for="productName">Product Name</Label>
                <Input
                  type="text"
                  name="ProductName"
                  value={productDetails.name}
                  id="productName"
                  required
                  placeholder="product name"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="price">Price</Label>
                <Input
                  type="number"
                  name="price"
                  value={productDetails.price}
                  id="productPrice"
                  placeholder="product price"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="description">Description</Label>
                <Input
                  type="text"
                  name="description"
                  required
                  value={productDetails.description}
                  id="productDescription"
                  placeholder="product description"
                />
              </FormGroup>
              <div className="loader_container">
                <div className={`loader ${profileUpload}`}></div>
                <span className="showMsg">{showMsg}</span>
              </div>
              <Button>Submit</Button>
            </Form>
          </Fragment>
        </Col>
      </Row>
    </div>
  );
}

export default AddItems;
