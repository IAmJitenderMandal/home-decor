import React from 'react'
import './aboutCard.styles.scss';

export default function AboutCard(props) {
    return (
        props.cardData.map((dataObj, index) => (
            <div className="card" key={index}>
                <div className="cardIcon"><dataObj.icon /></div>
                <h5 className="cardHeading">{dataObj.heading}</h5>
                <p className="cardDescription">{dataObj.description}</p>
            </div>
        ) )
    )
}