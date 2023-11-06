import { useState } from "react";
import './App.css';

function Todo() {
    const [todos, setTodo] = useState([]);
    const [task, setTask] = useState("");
    const [status, setStatus] = useState("Incomplete");

    return (
        <>
        <div className="container">
            <div className="form">
            <form onSubmit={(event) => {
                event.preventDefault();
            }}>
                <input required type="text" value={task} onChange={(event)=>{
                    setTask(event.target.value);
                }} />

                <select value={status} onChange={(event)=>{
                    setStatus(event.target.value);
                }}>
                    <option value="Incomplete">Incomplete</option>
                    <option value="complete">Complete</option>
                </select>
                <button type="submit" onClick={() => {
                    setTodo([...todos, { task: task, status: status }]);
                }}>Submit</button>
            </form>
            </div>
            <div className="list">
                {todos.map((item, index) => (
                    <div key={index}>
                        <span>{item.task+"   " }{ item.status}</span>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}
export default Todo;
