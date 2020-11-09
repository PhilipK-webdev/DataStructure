import React, { useState } from 'react'
import Shape from '../../components/Shape/Shape';

const Queue = () => {

    const [flag, setFlag] = useState(true);
    const [dequeueFlag, setDequeueFlag] = useState(false);
    const [queue, setQueue] = useState([]);
    const [number, setNumber] = useState();
    const [arrQueue, setArrQueue] = useState([]);
    const [count, setCount] = useState(0);


    let tempArr = [];
    const addQueue = (e) => {
        setNumber(e.target.value);
    }
    const addToQueue = (e) => {
        e.preventDefault();
        queue.push(number);
        setQueue([...queue]);
        setArrQueue(createQueue([...tempArr]));
    }

    function createQueue(tempArr) {
        if (dequeueFlag) {
            for (let i = count; i < queue.length; i++) {
                tempArr[i] = (
                    <div style={{ textAlign: "center" }} key={i}><Shape key={i} queue={queue[i]} /></div>
                )
            }
            setDequeueFlag(false);
            console.log(dequeueFlag);
        } else {

            for (let i = queue.length - 1; i > 0; i--) {
                tempArr[i] = (
                    <div style={{ textAlign: "center" }} key={i}><Shape key={i} queue={queue[i]} /></div>
                )
            }
        }

        return tempArr;
    }

    const dequeue = (e) => {
        e.preventDefault();
        setArrQueue(createQueue([...tempArr]));
        setDequeueFlag(true);
        setCount(count + 1);
        delete queue[count];
    }
    return (
        <div className="container">
            {flag ? <div>
                <div>
                    <label className="form__label" forhtml="add">Add to queue : </label>
                    <input type="text" id="inputPush" name="add" placeholder="add ..." className="form__input" onChange={addQueue} />
                    <button type="submit" className="button4" style={{ marginTop: "10px" }} onClick={addToQueue}>Click</button>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>{arrQueue}</div>
                <button type="submit" className="button4" style={{ marginTop: "10px" }} onClick={dequeue}>Dequeue</button>
                <button type="submit" className="button4" style={{ marginTop: "10px" }} onClick={addToQueue}>Click</button>
                <button type="submit" className="button4" style={{ marginTop: "10px" }} onClick={addToQueue}>Click</button>
            </div>
                : null}
        </div>
    )
}

export default Queue
