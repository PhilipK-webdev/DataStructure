import React, { useState } from 'react'
import Shape from '../../components/Shape/Shape';

const Queue = () => {

    const [flag, setFlag] = useState(true);
    const [queue, setQueue] = useState([]);// Data that we want to insert to the Queue
    const [number, setNumber] = useState();
    const [arrQueue, setArrQueue] = useState([]); //The array of Queue



    let tempArr = [];
    const addQueue = (e) => {
        setNumber(e.target.value);
    }
    const addToQueue = (e) => {
        e.preventDefault();
        queue.unshift(number);

        setQueue([...queue]);
        setArrQueue(createQueue([tempArr]));
    }

    function createQueue(tempArr) {
        for (let i = 0; i < queue.length; i++) {
            tempArr[queue.length - i - 1] = (
                <div style={{ textAlign: "center" }} key={i}><Shape key={i} queue={queue[queue.length - i - 1]} /></div>
            )
        }

        return tempArr;
    }

    const dequeue = (e) => {
        e.preventDefault();
        queue.shift();
        setArrQueue(createQueue([tempArr]));
    }

    const startOver = (e) => {
        e.preventDefault();
        setQueue([]);
        setArrQueue([]);
    }
    return (
        <div className="container">
            {flag ? <div>
                <div>
                    <label className="form__label" forhtml="add">Add to queue : </label>
                    <input type="text" id="inputPush" name="add" className="form__input" onChange={addQueue} />
                    <button type="submit" className="button4" style={{ marginTop: "10px", marginLeft: "35%" }} onClick={addToQueue}>Add</button>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>{arrQueue}</div>
                <ul>
                    <button type="submit" className="button4" style={{ marginTop: "10px", marginLeft: "10%", marginRight: "10px" }} onClick={dequeue}>Dequeue</button>
                    <button type="submit" className="button4" style={{ marginTop: "10px" }} onClick={startOver}>Start Over</button>
                </ul>

            </div>
                : null}
        </div>
    )
}

export default Queue
