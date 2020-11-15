import React, { useState } from 'react'
import "../LinkedList/LinkedList.css"
const LinkedListData = () => {

    const ShapeLinkedList = () => {
        return (
            <div className="body">
                <div className="shape" style={{ display: "flex", flexDirection: "row !important" }}>
                    <p>data1</p>
                    <strong><hr /></strong>
                    <p>data2</p>
                </div>
                <div id="pointer" style={{ marginRight: "20px" }} ></div>
            </div>
        )
    }

    return (

        <div>
            <div className="container">
                <label className="form__label" forhtml="add">Add to linked list : </label>
                <input type="text" id="inputPush" name="add" placeholder="add..." className="form__input" />
                <button type="submit" className="button4" style={{ marginTop: "10px" }}>Add</button>
            </div>
            <div className="containerLinked">
                <ShapeLinkedList />
            </div>
        </div>

    )
}

export default LinkedListData
