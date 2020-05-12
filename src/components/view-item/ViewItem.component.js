import React from "react";
import img from "../../images/2-chair-png-image.png";
import "./view-item.scss";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

function ViewItem() {
  return (
    <div className="viewItem">
      <div className="product-img">
        <img src={img} alt="item-img" />
      </div>
      <div className="product-details">
        <h3 className="product-title">Glaxy Sofa</h3>
        <p className="product-desc">
          4 person size sofa with storage which gives you most comfortable
          feeling while you spend time with your family.
        </p>
        <h3 className="product-price">$4,000</h3>
        <p className="product-dispatch">dispatched in 4-5 days</p>
        <button className="add-cart-btn">Add To Cart</button>

        <div className="latest-review">
          <h4 className="title">latest reviews</h4>
          <div className="reviews">
            <PerfectScrollbar>
              <p className="review">
                <span className="review-by">jacob</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                quod quo adipisci facilis nemo numquam. Vero quasi, qui
                molestias earum voluptas fugit repudiandae accusantium! Natus,
                minima. At sed vero tenetur?
              </p>
              <p className="review">
                <span className="review-by">Avex</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                quod quo adipisci facilis nemo numquam. Vero quasi, qui
                molestias earum voluptas fugit repudiandae accusantium! Natus,
                minima. At sed vero tenetur?
              </p>
              <p className="review">
                <span className="review-by">paul</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                quod quo adipisci facilis nemo numquam. Vero quasi, qui
                molestias earum voluptas fugit repudiandae accusantium! Natus,
                minima. At sed vero tenetur?
              </p>
              <p className="review">
                <span className="review-by">Nathan</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                quod quo adipisci facilis nemo numquam. Vero quasi, qui
                molestias earum voluptas fugit repudiandae accusantium! Natus,
                minima. At sed vero tenetur?
              </p>
            </PerfectScrollbar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewItem;
