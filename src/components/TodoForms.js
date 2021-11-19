import{v4 as uuid} from "uuid";
import React, { useState } from 'react';
import './inform.css';

const TodoForms = ({addTodo}) => {
    const [ todo, setTodo] = useState ({
        id:"",
        task:"",
        completed: false
    });

    function handleTaskInputChange(e){
        setTodo({...todo,task: e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({...todo, id: uuid()});
            // reset input
            setTodo({...todo, task: ""})
        } 
    }

    return (
        <form className="cover" onSubmit={handleSubmit}>
            <input className=" inpot"
            name="task"
            value={todo.task}
            onChange={handleTaskInputChange}
            type="text" 
            />
            <button className="press" type="submit">+</button>
        </form>
    )
}


export default TodoForms