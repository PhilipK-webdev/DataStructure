import React, { useState } from 'react'
import Rectangle from '../../components/Rectangle/Rectangle'
import "../Stack/Stack.css"
const Stack = () => {

    const [size, setSize] = useState("");
    const [flag, setFlag] = useState(false);

    const submitSize = (e) => {
        setSize(e.target.value);
        setFlag(true);
    }

    return (
        <div className="container">
            <form >
                <label htmlFor="size">Stack Size: </label>
                <input type="text" name="size" placeholder="enter size of the stack" value={size} onChange={submitSize} />
            </form>
            <div className="stack">
                {flag ? <Rectangle size={size} /> : <div>Processing...</div>}
            </div>
        </div>
    )
}

export default Stack
