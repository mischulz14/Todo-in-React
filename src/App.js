import React, { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  // state stuff
  const [todo, setTodo] = useState("");
  const [todoTaskList, setTodoTaskList] = useState(() => {
    if (localStorage.getItem("todoTaskList") === null) {
      return [];
    } else {
      return JSON.parse(localStorage.getItem("todoTaskList"));
    }
  });
  const [validation, setValidation] = useState("");
  const [clicked, setClicked] = useState(false);

  // saving and getting data from local storage

  useEffect(() => {
    // saving everytime the todo gets changed
    const saveLocalTodos = () => {
      localStorage.setItem("todoTaskList", JSON.stringify(todoTaskList));
    };

    saveLocalTodos();
  }, [todoTaskList]);

  // functions
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
        completed: false,
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
    setTodo("");
    setValidation("");
  }

  return (
    <div className="App">
      <div className="container">
        <button className="plus-btn" onClick={handleSetClicked}>
          <span className={clicked ? "rotate" : ""}>+</span>
        </button>
        {!clicked ? <div className="add-text">Add Todo</div> : null}
        {clicked ? (
          <TodoForm
            onTodoChange={handleTodoChange}
            onFormSubmit={handleFormSubmit}
            todo={todo}
            validation={validation}
            onCancel={handleSetClicked}
            clicked={clicked}
          />
        ) : null}

        <TodoList
          todoTaskList={todoTaskList}
          onTodoDelete={handleTodoDelete}
          setTodoTaskList={setTodoTaskList}
        />
      </div>
    </div>
  );
}

export default App;
