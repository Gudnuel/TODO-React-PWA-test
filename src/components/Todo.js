import React from 'react'
import './todoo.css'


function Todo ({todo, toggleCompleted, removeTodo}) {

function handleCheckboxClick () {
    toggleCompleted(todo.id);
}

function handleRemoveTodo () {
    removeTodo(todo.id);
}


    return (
        <div className="todo">
            <li 
                style={{
                    color: "white",
                    textDecoration: todo.completed? "line-through" : null,
                }}
             className="letter"
             >
                 {todo.task}
             </li>
            <section className="side">
            <input className="chec" type="checkbox" onClick = {handleCheckboxClick}/>
            <button  className="btn" onClick = {handleRemoveTodo} >X</button>
            </section>
        </div>
    )
}

export default Todo
