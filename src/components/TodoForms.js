// import {v4 as uuidv4} from "uuid";

import React, { useState } from 'react';
import "./inform.css";


const TodoForms = ({addTodo}) => {
    // const [ todo, setTodo] = useState ({
    //     id: "" ,
    //     task:"",
    //     completed: false
    // });
        const [ todo, setTodo] = useState("");

    function handleTaskInputChange(e){
        setTodo({...todo, task: e.target.value
            , id:Math.floor(Math.random()*10000)+1, completed:false
      
      });
    }

    function handleSubmit(e){
        e.preventDefault();
        if(!todo.task){
            alert("please add a Task")
            return
        }
        try {
            if (todo.task.trim()) { 
           
            addTodo({
                ...todo
                // , id: uuidv4()
             }); 
            // reset input
            setTodo({...todo, task: ""})
        } 
        } catch (error) {
            setTodo({...todo, task: " "}) 
            
        }
        
    }

    return (
        
        <form className="cover" onSubmit={handleSubmit}>
           
                <input 
                    className="inpot"
                    name="task"
                    placeholder="input task"
                    value={todo.task}
                    onChange={handleTaskInputChange}
                    type="text"
                    maxlength = "70" 
                />
          
            <button  className="press" type="submit">x</button>
        </form>
    )
}

export default TodoForms