import React from 'react'
import './todoo.css'


const Todo = ({todo}) => {
    return (
        <div className="todo">
            <li 
                styles={{
                    color: "white",
                    textDecoration: todo.completed ? "inline-through" : null
                }}
             className="letter">{
             todo.task}
             </li>
            <section className="side">
            <input className="chec" type="checkbox"/>
            <button className="btn" >X</button>
            </section>
        </div>
    )
}

export default Todo
