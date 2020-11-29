import React, { useState } from 'react'
import "../LinkedList/LinkedList.css"
const LinkedListData = () => {

    const [dataArr, setDataArr] = useState([]);
    const [data, setData] = useState();
    const [deleteData, setDeletData] = useState();
    const ShapeLinkedList = (props) => {
        return (
            <div className="body">
                <div className="shape" style={{ display: "flex", flexDirection: "row !important" }}>
                    <p style={{ marginRight: "3px", marginLeft: "3px" }}>{props.info}</p>
                    <strong><hr /></strong>
                    <p style={{ padding: "0px" }}>NEXT</p>
                </div>
                <div id="pointer" style={{ marginRight: "20px" }} ></div>
            </div>
        )
    }

    const addData = (e) => {
        setData(e.target.value);
    }

    const addToNode = (e) => {
        e.preventDefault();
        dataArr.push(data);
        setDataArr([...dataArr]);
    }
    const removeFirst = (e) => {
        e.preventDefault();
        dataArr.shift();
        setDataArr([...dataArr]);
    }
    const removeLast = (e) => {
        e.preventDefault();
        dataArr.pop();
        setDataArr([...dataArr]);
    }

    const dataToDelete = (e) => {
        setDeletData(e.target.value);
    }
    const removeSpecific = (e) => {
        e.preventDefault();
        setDataArr(newList());

    }

    function newList() {
        let arr = [];
        for (let i = 0; i < dataArr.length; i++) {
            if (deleteData != i) {
                arr.push(dataArr[i]);
            }
        }
        return arr;
    }
    return (

        <div>
            <div className="container">
                <label className="form__label" forhtml="add">Add to linked list : </label>
                <input type="text" id="inputPush" name="add" className="form__input" onChange={addData} />
                <button type="submit" className="button4" style={{ marginTop: "10px" }} onClick={addToNode}>Add</button>
            </div>
            <div className="containerLinked">
                {dataArr.map((info, index) => (
                    <ShapeLinkedList info={info} key={index} />
                ))}
            </div>
            <div className="remove">
                <button type="submit" className="button4" style={{ marginTop: "10px", marginRight: "10px" }} onClick={removeFirst}>Remove First Item</button>
                <button type="submit" className="button4" style={{ marginTop: "10px" }} onClick={removeLast}>Remove Last Item</button>
            </div>
            <div className="remove">
                <input type="text" name="number" placeholder="Data to delete..." onChange={dataToDelete} />
                <button type="submit" className="button4" style={{ marginTop: "10px" }} onClick={removeSpecific}>Remove Specific Item</button>
            </div>
        </div>

    )
}

export default LinkedListData
