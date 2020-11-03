import React, { useState } from 'react'
import "../Rectangle/Rectangle.css"
const Rectangle = (props) => {

    const [tempSeek, setTempSeek] = useState(false);
    const [number, setNumber] = useState();
    let arrayTemp = [];
    let j = props.arr.length - 1;

    if (tempSeek) {
        arrayTemp[0] = props.arr[j];
    } else {
        for (let i = 0; i < props.arr.length; i++) {
            arrayTemp[i] = props.arr[j];
            j--;
        }
    }

    const pop = (e) => {
        e.preventDefault();
        props.arr.pop();
        props.setArr([...props.arr]);
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

    return (
        <div className="container">
            {arrayTemp.map((data, index) =>
                <h1 className="rectangle" key={index} id={index}>{data}</h1>)
            }
            <ul>
                <button type="submit" id="pop" className="button4" onClick={pop} style={{ marginRight: "10px" }}>pop</button>
                <button type="submit" id="seek" className="button4" onClick={seek}>seek</button>
                <div id="input">
                    <label forHtml="add" className="form__label">Add Number</label>
                    <input type="text" id="inputPush" name="add" placeholder="add..." className="form__input" onChange={submitAdd} />
                </div>
                <button type="submit" id="push" className="button4" onClick={push} style={{ marginTop: "10px" }}>push</button>
            </ul>

        </div >
    )
}

export default Rectangle
