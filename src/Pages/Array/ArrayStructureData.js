import React, { useState } from 'react'
import Shape from '../../components/Shape/Shape'
import "../Array/ArrayStructure.css"
const ArrayStructureData = () => {

    const [length, setLength] = useState("");
    const [arr, setArr] = useState([]);
    const [num, setNum] = useState([]);
    const [singleNumber, setSingleNumber] = useState("");
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);

    const defineSize = (e) => {
        setLength(e.target.value);

    }
    let tempArr = [];
    const submitSize = (e) => {
        e.preventDefault();
        setArr(buildArray(tempArr));
        setFlag(true);

    }
    function buildArray(tempArr) {
        for (let i = 0; i < length; i++) {
            tempArr[i] = (
                <div style={{ textAlign: "center" }} key={i}><Shape key={i} num={num[i]} /></div>
            )
        }

        return tempArr;
    }


    const fillArr = (e) => {
        setSingleNumber(e.target.value);

    }
    let tempCount = 0;
    const submitNum = (e) => {

        e.preventDefault();
        if (length > count) {
            console.log("the length is", length);
            num.push(singleNumber);
            setNum([...num]);
            setArr(buildArray([...tempArr]));
            tempCount++;
            setCount(tempCount);
            console.log("the count is", count);
        } else {

            console.log("no more memory at the the array")
        }
    }

    return (
        <div className="container">
            {!flag ?
                <div>
                    <label className="form__label" forhtml="add">Add size of array : </label>
                    <input type="text" id="inputPush" name="add" placeholder="add size..." className="form__input" onChange={defineSize} />
                    <button type="submit" className="button4" style={{ marginTop: "10px" }} onClick={submitSize}>Click</button>
                </div>
                : <div>
                    <div style={{ display: "flex", flexDirection: "row" }}>{arr}</div>
                    <ul>
                        <div id="input">
                            <label forhtml="add" className="form__label">Add Number</label>
                            <input type="text" id="inputPush" name="add" placeholder="add..." className="form__input" onChange={fillArr} />
                        </div>
                        <button type="submit" id="push" className="button4" style={{ marginTop: "10px" }} onClick={submitNum}>push</button>
                    </ul>
                    <button type="submit" className="button4" >Start Over</button>

                </div>
            }
        </div>
    )
}


export default ArrayStructureData

