import React, {useState} from "react";
import "./App.css";
import TodoForm from "./TodoForm";


function App() {
  const [todo, setTodo] = useState("")
  const [todoTaskList, setTodoTaskList] = useState([])


  function handleTodoChange(event){
    const newTodo = event.target.value
    setTodo(newTodo)
  }

  function handleFormSubmit(event){

    event.preventDefault()
    setTodoTaskList([
      ...todoTaskList, todo
    ])
  }
  return (
    <div className="App">
      <TodoForm onTodoChange={handleTodoChange} onFormSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
