import React, { useState, useRef } from 'react'
import Rectangle from '../../components/Rectangle/Rectangle'
import "../Stack/Stack.css"
const Stack = () => {

    const [size, setSize] = useState("");
    const [flag, setFlag] = useState(false);

    const submitSize = (e) => {
        if (e.target.value === "") {
            setFlag(false);
        } else {
            setSize(e.target.value);
        }
    }

    const click = (e) => {
        e.preventDefault();
        setFlag(true);

    }

    return (
        <div className="container">
            <form >
                <label >Stack Size: </label>
                <input type="text" id="inputSize" name="size" placeholder="enter size of the stack" onChange={submitSize} />
                <button type="submit" onClick={click}>Click</button>
            </form>

            <div className="stack">
                {flag ? <Rectangle size={size} setSize={setSize} /> : <div> Processing...</div>}
            </div>
        </div>
    )
}

export default Stack
