import React, { useState } from 'react'
import Rectangle from '../../components/Rectangle/Rectangle'
import "../Stack/Stack.css"
const Stack = () => {


    const [number, setNumber] = useState();
    const [arr, setArr] = useState([]);
    const [flag, setFlag] = useState(false);

    const submitAdd = (e) => {
        setNumber(e.target.value);
    }
    const handlePush = (e) => {
        e.preventDefault();
        arr.push(number);
        setArr([...arr]);
        setFlag(true);
    }

    return (
        <div className="container">
            {!flag ? <div>
                <label >Add to stack : </label>
                <input type="text" id="inputPush" name="add" placeholder="add..." onChange={submitAdd} />
                <button type="submit" onClick={handlePush}>Click</button>
            </div> : null}

            <div className="stack">
                {flag ? <Rectangle arr={arr} setArr={setArr} /> : <div> Processing...</div>}
            </div>
        </div>
    )
}

export default Stack
