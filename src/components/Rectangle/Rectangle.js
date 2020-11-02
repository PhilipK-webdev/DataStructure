import React from 'react'
import "../Rectangle/Rectangle.css"
const Rectangle = (props) => {

    let arrayRectangle = [props.size];
    if (props.tempSeek) {
        arrayRectangle[0] = (
            <p className="rectangle" key={props.size - 1} id={props.size - 1}>{props.size - 1}</p>
        )

    } else {
        for (let i = 0; i < props.size; i++) {
            arrayRectangle[i] = (
                <p className="rectangle" key={props.size - i - 1} id={props.size - i - 1}>{props.size - i - 1}</p>
            )
        }
    }

    return (
        <div >
            {arrayRectangle}
        </div>
    )
}

export default Rectangle
