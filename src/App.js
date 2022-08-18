import React, { useState } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todoTaskList, setTodoTaskList] = useState([]);
  const [validation, setValidation] = useState("");
  const [clicked, setClicked] = useState(false)

  function handleTodoChange(event) {
    const newTodo = event.target.value;
    setTodo(newTodo);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if (todo === "") {
      setValidation("Please enter a Task");
      return;
    }

    setTodoTaskList([...todoTaskList, {
      id: todoTaskList.length,
      task: todo
    }]);

    setTodo("");
    setValidation("")
  }

  function handleTodoDelete(id){

    setTodoTaskList(todoTaskList.filter(todo => todo.id !== id))

  }

  return (
    <div className="App">
      <button onClick={() => setClicked(prev => !prev)}>+</button>
      {!clicked && <div>Add Todo</div>}
      {clicked && (
        <TodoForm
          onTodoChange={handleTodoChange}
          onFormSubmit={handleFormSubmit}
          todo={todo}
          validation={validation}
        />
      )}

      <TodoList todoTaskList={todoTaskList} onTodoDelete={handleTodoDelete} />
    </div>
  );
}

export default App;
