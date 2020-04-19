import React from 'react'
import './enqueryForm.styles.scss'

export default function EnqueryForm() {
    return (
        <div className="enqueryFormContainer">
            <div className="enqueryHeading">
                <h2>Get Various interior models to your interior space</h2>    
                <form name="enqueryForm">
                    <div className="inputDiv">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" name="name" />
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="email">Your Email</label>                        
                        <input type="email" name ="email" />
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="phone">Your Phone</label>
                        <input type="number" name="phone" />
                    </div>
                    <div className="inputDiv">
                        <button type="submit" name="SubmitBtn"> Subscribe </button>
                    </div>
                </form>
            </div>
        </div>
    )
}