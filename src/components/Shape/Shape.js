import React from 'react'
import "../Shape/Shape.css"
function Shape(props) {

    return (
        <div className="body">
            <div className="shape">
                {props.num ? <h1>{props.num}</h1> : <h1>{props.queue}</h1>}
            </div>
        </div>
    )
}

export default Shape
