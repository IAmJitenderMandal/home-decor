import React from 'react';
import AboutCard from '../about-cards/AboutCard.component';
import './about-services.scss';
import { FaShieldAlt } from "react-icons/fa";
import { FaCube } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";

export default function AboutServices() {
    let cardData = [
        {
            icon: FaShieldAlt,
            heading: 'custom product',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            icon: FaCube,
            heading: 'All product warranty',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            icon: FaBoxOpen,
            heading: 'Free Shipping',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        }

    ];
    return (
        <div className="aboutServices">
            <h2 className="heading">The Services We Provide</h2>
            <p className="description">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>

            <div className="cards">
                <AboutCard cardData={cardData} />
            </div>
        </div>
    )
}
