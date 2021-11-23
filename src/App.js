import React, { useState, useEffect } from "react";
import './App.css';
import TodoForms from "./components/TodoForms";
import TodoList from "./components/TodoList";

const LOCAL_STORAGE_KEY = "react-todo-list-todos"

function App() {
  const [todos, setTodos] = useState([])

useEffect(() => {
 const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY ))
  if (storageTodos) { 
    setTodos(storageTodos);
  }
}, [])  
  
useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
}, [todos]);


function addTodo(todo){
  // const id =Math.floor(Math.random()*10000)+1

  // const newTodo = {id,...todo}
  setTodos([todo,...todos]);
}


function toggleCompleted(id) {
  setTodos(
    todos.map(todo => {
     if (todo.id === id) {
       return {
         ...todo,
          completed: !todo.completed
       };
     }
     return todo;
    })
  )
}

 function removeTodo (id){
   setTodos( 
     todos.filter(todo => todo.id !== id)
   )
 }



  return (
    <div className="App">
   <h1>PLAN YOUR DAY</h1>
   <TodoForms addTodo={addTodo} />
   {todos.length>0?
   (<TodoList todos={todos} toggleCompleted={toggleCompleted} removeTodo={removeTodo}/>)
   :(<p  style={{fontSize: '1.5rem', color:'white'}}>No More Tasks</p>)}
    </div>
  );
}

export default App;
