import React, { useState } from 'react'
import Rectangle from '../../components/Rectangle/Rectangle'
import "../Stack/Stack.css"
const Stack = () => {


    const [number, setNumber] = useState();
    const [arr, setArr] = useState([]);
    const [flag, setFlag] = useState(false);
    const [msg, setMsg] = useState(true);

    const submitAdd = (e) => {
        setNumber(e.target.value);
    }
    const handlePush = (e) => {
        if (number > 0 && msg) {
            e.preventDefault();
            arr.push(number);
            setArr([...arr]);
            setFlag(true);
            setMsg(false);
        }
    }

    return (
        <div className="container">
            {!flag ? <div>
                <label className="form__label" forhtml="add" style={{ color: "white" }}>Add to stack : </label>
                <input type="text" id="inputPush" name="add" className="form__input" required="" onChange={submitAdd} />
                <button type="submit" className="button4" onClick={handlePush} style={{ marginTop: "10px", marginLeft: "39%" }}>Add</button>
            </div> : null}
            <div className="stack">
                {flag ? <div>
                    <Rectangle arr={arr} setArr={setArr} setFlag={setFlag} />

                </div> : <div className="message"><h1>Processing...</h1> </div>}
            </div>

        </div>
    )
}

export default Stack
