import { useState } from "react";
import './taskBoard.css'


const TaskBoard = () => {
    const [inputBox1, setInputBox1] = useState([])
    const [inputBox2, setInputBox2] = useState([])
    const [inputBox3, setInputBox3] = useState([])
    const [textBox1, setTextBox1] = useState('')

   const handelOnChange = (e) =>{
    e.preventDefault();
    setTextBox1(textBox1)
   }

    const handelOnclick1 = (e) => {
        e.preventDefault();
        const newBox = <input type="text" placeholder="Enter your task" onChange={handelOnChange }/>
        setInputBox1(preInputBox => [...preInputBox, newBox])
    }
    const handelOnclick2 = (e) => {
        e.preventDefault();
        const newBox = <input type="text" placeholder="Enter your task" onChange={handelOnChange }/>
        setInputBox2(preInputBox => [...preInputBox, newBox])
    }
    const handelOnclick3 = (e) => {
        e.preventDefault();
        const newBox = <input type="text" placeholder="Enter your task" onChange={handelOnChange }/>
        setInputBox3(preInputBox => [...preInputBox, newBox])
    }
    return (
        <div className="task-board">
            <div className="column">
                <h2>To-Do</h2>
                <div className="inputBox">{inputBox1.map((task, index) => <div key={index}>{task}</div>)}</div>
                <button className="add" onClick={handelOnclick1}>+ Add task</button>
            </div>
            <div className="column">
                <h2>In Progress</h2>
                <div className="inputBox" >{inputBox2.map((task, index) => <div key={index}>{task}</div>)}</div>
                <button className="add" onClick={handelOnclick2}>+ Add task</button>
            </div>
            <div className="column">
                <h2>Done</h2>
                <div className="inputBox">{inputBox3.map((task, index) => <div key={index}>{task}</div>)}</div>
                <button className="add" onClick={handelOnclick3}>+ Add task</button>
            </div>
        </div>
    );
};

export default TaskBoard;
