import React, { useState, useEffect} from "react";
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
  setTodos([todo,...todos]);
}



  return (
    <div className="App">
   <h1>TODO APP </h1>
   <TodoForms addTodo={addTodo} />
   <TodoList todos={todos}/>
    </div>
  );
}

export default App;
