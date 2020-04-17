import React from 'react';
import './product-slider.styles.scss';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles.js';
// import Captioned from 'react-awesome-slider/src/components/captioned';
// import CaptionedStyles from 'react-awesome-slider/src/components/captioned/styles.scss';
import Slider_img1 from '../../images/slider1.png';
import Slider_img2 from '../../images/slider2.png';
import Slider_img3 from '../../images/slider3.png';
import Slider_img4 from '../../images/slider4.png';


export default function FeatureProducts() {
    return (
        <div className="featured-products">
            <h3 className="heading">our featured item</h3>
            <p className="description">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

            <AwesomeSlider className="slider" css={AwsSliderStyles}>
                <div className="slider-img">
                    <img src={Slider_img1} alt="img" />
                    <div className="caption-container">
                        <p>I want to see what you got.</p>
                        <button>Buy Now</button>
                    </div>
                </div>
                <div className="slider-img">
                    <img src={Slider_img2} alt="img" />
                    <div className="caption-container">
                        <p>The answer is -- Don't think about it.</p>
                        <button>Buy Now</button>
                    </div>
                </div>
                <div className="slider-img">
                    <img src={Slider_img3} alt="img" />
                    <div className="caption-container">
                        <p>The answer is -- Don't think about it.</p>
                        <button>Buy Now</button>
                    </div>
                </div>
                <div className="slider-img">
                    <img src={Slider_img4} alt="img" />
                    <div className="caption-container">
                        <p>The answer is -- Don't think about it.</p>
                        <button>Buy Now</button>
                    </div>
                </div>
            </AwesomeSlider>
            <button className="see-all-btn">See All item</button>
        </div>
    )
}