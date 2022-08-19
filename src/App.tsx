import React, {ChangeEvent, FormEvent, useState} from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {

  const initialTodos : {id:number, task: string}[] = [];

  const [todo, setTodo] = useState("");
  const [todoTaskList, setTodoTaskList] = useState(initialTodos);
  const [validation, setValidation] = useState("");
  const [clicked, setClicked] = useState(false);

  function handleTodoChange(event: ChangeEvent<any>) {
    event.preventDefault();
    const newTodo = event.target.value;
    setTodo(newTodo);
  }

  function handleFormSubmit(event: FormEvent<any>) {
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

  function handleTodoDelete(id: number) {
    setTodoTaskList(todoTaskList.filter((todo) => todo.id !== id));
  }

  function handleSetClicked(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setClicked((prev) => !prev);
    setTodo("")
    setValidation("")
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
          />
        ) : null}

        <TodoList todoTaskList={todoTaskList} onTodoDelete={handleTodoDelete} />
      </div>
    </div>
  );
}

export default App;
