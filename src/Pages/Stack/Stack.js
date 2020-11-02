import React, { useState } from 'react'
import Rectangle from '../../components/Rectangle/Rectangle'
import "../Stack/Stack.css"
const Stack = () => {

    const [size, setSize] = useState("");
    const [flag, setFlag] = useState(false);
    const [tempSeek, setTempSeek] = useState(false);
    const [tempPush, setTempPush] = useState(false);
    const [number, setNumber] = useState("");
    const submitSize = (e) => {
        setSize(e.target.value);
        if (e.target.value === "") {
            setFlag(false);
        } else {
            setFlag(true);
        }
    }
    const pop = (e) => {
        e.preventDefault();
        setSize(size - 1);
        setTempSeek(false);
    }

    const addNumber = (e) => {
        setNumber(e.target.value);
        setTempPush(true);
    }
    const push = (e) => {
        e.preventDefault();

        setSize(size + 1);
        setTempSeek(false);
    }

    const seek = (e) => {
        e.preventDefault();
        setTempSeek(true);
    }

    return (
        <div className="container">
            <form >
                <label htmlFor="size">Stack Size: </label>
                <input type="text" name="size" placeholder="enter size of the stack" value={size} onChange={submitSize} />
            </form>
            <div>
                <ul>
                    <button type="submit" id="pop" onClick={pop}>pop</button>
                    <button type="submit" id="seek" onClick={seek}>seek</button>
                    <button type="submit" id="push" onClick={push}>push</button>
                </ul>
            </div>
            <div className="stack">
                {flag ? <Rectangle size={size} tempSeek={tempSeek} /> : <div>Processing...</div>}
            </div>
        </div>
    )
}

export default Stack
