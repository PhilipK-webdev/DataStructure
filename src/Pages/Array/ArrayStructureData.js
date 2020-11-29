import React, { useState } from 'react'
import Shape from '../../components/Shape/Shape'
import "../Array/ArrayStructure.css"
const ArrayStructureData = () => {

    const [length, setLength] = useState();
    const [arr, setArr] = useState([]);
    const [num, setNum] = useState([]);
    const [singleNumber, setSingleNumber] = useState("");
    const [flagIndex, setFlagIndex] = useState(false);
    const [flagLastIndex, setFlaglastIndex] = useState(false);
    const [flag, setFlag] = useState(false);

    const defineSize = (e) => {
        setLength(parseInt(e.target.value));

    }
    let tempArr = [];
    const submitSize = (e) => {
        e.preventDefault();
        setArr(buildArray(tempArr));
        setFlag(true);

    }
    function buildArray(tempArr) {
        if (flagIndex) {
            tempArr[0] = (
                <div style={{ textAlign: "center" }} key={0}><Shape key={0} num={num[0]} /></div>
            )
            setFlagIndex(false);
        } else if (flagLastIndex) {
            tempArr[length - 1] = (
                <div style={{ textAlign: "center" }} key={length - 1}><Shape key={length - 1} num={num[length - 1]} /></div>
            )
            setFlaglastIndex(false);

        } else {
            for (let i = 0; i < length; i++) {
                tempArr[i] = (
                    <div style={{ textAlign: "center" }} key={i}><Shape key={i} num={num[i]} /></div>
                )
            }
        }


        return tempArr;
    }


    const fillArr = (e) => {
        setSingleNumber(e.target.value);

    }

    const submitNum = (e) => {
        e.preventDefault();
        num.push(singleNumber);
        setNum([...num]);
        setArr(buildArray([...tempArr]));
    }

    const firstIndex = (e) => {
        e.preventDefault();
        setFlagIndex(true);
        setArr(buildArray([...tempArr]));
    }

    const lastIndex = (e) => {
        e.preventDefault();
        setFlaglastIndex(true);
        setArr(buildArray([...tempArr]));
    }

    const showAll = (e) => {
        e.preventDefault();
        submitNum(e);
    }

    const startOver = (e) => {
        e.preventDefault();
        setFlag(false);
        setArr([]);
        setNum([]);
    }
    return (
        <div className="container">
            {!flag ?
                <div>
                    <label className="form__label" forhtml="add">Add size of array : </label>
                    <input type="text" id="inputPush" name="add" className="form__input" onChange={defineSize} />
                    <button type="submit" className="button4" style={{ marginTop: "10px", marginLeft: "35%" }} onClick={submitSize}>Add Size</button>
                </div>
                : <div>
                    <div style={{ display: "flex", flexDirection: "row" }}>{arr}</div>
                    <ul>
                        <div>
                            <label forhtml="add" className="form__label" style={{ textAlign: "center" }}>Add Number</label>
                            <input type="text" id="inputPush" name="add" className="form__input" onChange={fillArr} />
                        </div>
                        <div >
                            <button type="submit" id="push" className="button4" style={{ marginTop: "10px", marginLeft: "25%" }} onClick={submitNum}>push</button>
                            <button type="submit" id="push" className="button4" style={{ marginTop: "10px", }} onClick={firstIndex}>firstIndex</button>
                            <button type="submit" id="push" className="button4" style={{ marginTop: "10px", }} onClick={lastIndex}>lastIndex</button>
                            <button type="submit" id="push" className="button4" style={{ marginTop: "10px", }} onClick={showAll}>ShowAll</button>
                        </div>

                    </ul>
                    <button type="submit" className="button4" style={{ marginLeft: "40%" }} onClick={startOver}>Start Over</button>

                </div>
            }
        </div>
    )
}


export default ArrayStructureData

