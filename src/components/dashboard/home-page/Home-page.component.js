import React from 'react'
import { Row, Col } from "reactstrap";

function HomePage() {
    return (
        <div className="dash-home">
            {
                console.log('heyy')
            }
            <Row>
                <Col>
                    <h3>dash board home</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tenetur expedita sunt quia optio rerum, architecto laudantium, doloribus, aspernatur ut asperiores eveniet. Sequi, dolor sapiente. Porro animi qui optio perspiciatis?</p>
                </Col>
            </Row>
        </div>
    )
}

export default HomePage;