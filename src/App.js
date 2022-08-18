import React, { useState } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todoTaskList, setTodoTaskList] = useState([]);
  const [validation, setValidation] = useState("");
  const [clicked, setClicked] = useState(false);

  function handleTodoChange(event) {
    event.preventDefault();
    const newTodo = event.target.value;
    setTodo(newTodo);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if (todo === "") {
      setValidation("Please enter a Task");
      return;
    }

    setTodoTaskList([
      ...todoTaskList,
      {
        id: todoTaskList.length,
        task: todo,
      },
    ]);

    setTodo("");
    setValidation("");
  }

  function handleTodoDelete(id) {
    setTodoTaskList(todoTaskList.filter((todo) => todo.id !== id));
  }

  function handleSetClicked(event) {
    event.preventDefault();
    setClicked((prev) => !prev);
    setTodo("")
    setValidation("")
  }

  return (
    <div className="App">
      <div className="container">
        <button className="plus-btn" onClick={handleSetClicked}>
          <span className={clicked && "rotate"}>+</span>
        </button>
        {!clicked && <div className="add-text">Add Todo</div>}
        {clicked && (
          <TodoForm
            onTodoChange={handleTodoChange}
            onFormSubmit={handleFormSubmit}
            todo={todo}
            validation={validation}
            onCancel={handleSetClicked}
          />
        )}

        <TodoList todoTaskList={todoTaskList} onTodoDelete={handleTodoDelete} />
      </div>
    </div>
  );
}

export default App;
