import React, { useState } from 'react'
import "../Rectangle/Rectangle.css"
const Rectangle = (props) => {

    const [tempSeek, setTempSeek] = useState(false);
    let arrayRectangle = [props.size];
    if (tempSeek) {
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


    const pop = (e) => {
        e.preventDefault();
        props.setSize(props.size - 1);
        setTempSeek(false);
    }
    const push = (e) => {
        e.preventDefault();

        props.setSize(props.size + 1);
        setTempSeek(false);
    }

    const seek = (e) => {
        e.preventDefault();
        setTempSeek(true);
    }

    return (
        <div>
            {arrayRectangle}
            <ul >
                <button type="submit" id="pop" onClick={pop}>pop</button>
                <button type="submit" id="seek" onClick={seek}>seek</button>
                <button type="submit" id="push" onClick={push}>push</button>
            </ul>

        </div>
    )
}

export default Rectangle
