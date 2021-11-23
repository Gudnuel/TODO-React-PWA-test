import React from 'react'
import Todo from "./Todo";
import "./todolists.css"

function TodoList ({todos,toggleCompleted,removeTodo}){
    return ( 
    
        <ul className="top"
         >
            {todos.map(todo=>(
                <
                    Todo 
                    key={todo.id} 
                    todo={todo} 
                    toggleCompleted = {toggleCompleted}
                    removeTodo = {removeTodo}
                />
            ))}
        </ul>
    )
}

export default TodoList    
