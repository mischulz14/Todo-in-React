import "./TodoList.css";
import TodoItem from "./TodoItem";
import { useState } from "react";
export default function TodoList(props) {
  const [todoFilter, setTodoFilter] = useState("all");

  function handleTodoFilter(event) {
    const filterOption = event.target.value;

    setTodoFilter(filterOption);
  }

  return (
    <>
      <label htmlFor="todo-select">Filter Todos:</label>
      <select onChange={handleTodoFilter} name="todo-filter" id="todo-select">
        <option value="all">All Todos</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>

      <ul className="todo-list">
        {props.todoTaskList && todoFilter === "all"
          ? props.todoTaskList.map((todo) => (
              <TodoItem
                todoTaskList={props.todoTaskList}
                onTodoDelete={props.onTodoDelete}
                todo={todo}
                key={todo.id}
                setTodoTaskList={props.setTodoTaskList}
              />
            ))
          : null}

        {props.todoTaskList &&
          todoFilter === "completed" &&
          props.todoTaskList.map((todo) => {
            if (todo.completed === true) {
              return (
                <TodoItem
                  todoTaskList={props.todoTaskList}
                  onTodoDelete={props.onTodoDelete}
                  todo={todo}
                  key={todo.id}
                  setTodoTaskList={props.setTodoTaskList}
                />
              );
            } else {
              return null;
            }
          })}

        {props.todoTaskList && todoFilter === "active" &&
          props.todoTaskList.map((todo) => {
            if (todo.completed === false) {
              return (
                <TodoItem
                  todoTaskList={props.todoTaskList}
                  onTodoDelete={props.onTodoDelete}
                  todo={todo}
                  key={todo.id}
                  todoId={todo.id}
                  setTodoTaskList={props.setTodoTaskList}
                />
              );
            } else {
              return null;
            }
          })}
      </ul>
    </>
  );
}
