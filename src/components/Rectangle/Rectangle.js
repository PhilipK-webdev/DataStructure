import React, { useState } from 'react'
import "../Rectangle/Rectangle.css"
const Rectangle = (props) => {

    const [tempSeek, setTempSeek] = useState(false);

    const [number, setNumber] = useState();

    const pop = (e) => {
        e.preventDefault();
        props.arr.pop();
        setTempSeek(false);
    }
    const push = (e) => {
        e.preventDefault();
        props.arr.push(number);
        props.setArr([...props.arr]);
        setTempSeek(false);
    }

    const seek = (e) => {
        e.preventDefault();
        setTempSeek(true);
    }

    const submitAdd = (e) => {
        setNumber(e.target.value);
    }
    props.arr.sort((a, b) => {
        return b - a;
    });
    return (
        <div>
            {props.arr.map((data, index) =>
                <h1 className="rectangle" key={index} id={index}>{data}</h1>)}
            <ul >
                <button type="submit" id="pop" onClick={pop}>pop</button>
                <button type="submit" id="seek" onClick={seek}>seek</button>
                <button type="submit" id="push" onClick={push}>push</button>
                <input type="text" id="inputPush" name="add" placeholder="add..." onChange={submitAdd} />
            </ul>
        </div>
    )
}

export default Rectangle
