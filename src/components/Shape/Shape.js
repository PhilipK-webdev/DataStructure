import React from 'react'
import "../Shape/Shape.css"
function Shape(props) {

    return (
        <div className="body">
            <div className="shape">
                <h1>{props.num}</h1>
            </div>
        </div>
    )
}

export default Shape
