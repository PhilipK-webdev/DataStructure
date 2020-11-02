import React from 'react'
import "../Rectangle/Rectangle.css"
const Rectangle = (props) => {

    let arrayRectangle = [props.size];
    for (let i = 0; i < props.size; i++) {
        arrayRectangle[i] = (
            <div className="rectangle" key={i}>
                <p>{i}</p>
            </div>
        )
    }

    return (
        <div>
            {arrayRectangle}
        </div>
    )
}

export default Rectangle
