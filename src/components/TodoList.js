import React from 'react'
import Todo from "./Todo";
import "./todolists.css"

const TodoList = ({todos}) => {
    return (
        <ul className="top">
            {todos.map(todo=>(
                <Todo key={todo.id} todo={todo}/>
            ))}
        </ul>
    )
}

export default TodoList    
