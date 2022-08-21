
import "./TodoList.css"
import TodoItem from "./TodoItem";
import {useState} from 'react';
import FormEvent from 'react';
export default function TodoList(props: { todoTaskList: {id:number, task: string}[]; onTodoDelete: (index: number) => void }) {

    return (
      <>
      <label htmlFor="todo-select">Filter Todos:</label>

      <select name="todo-filter" id="todo-select">
        <option value="all">All Todos</option>
        <option value="completed">Completed Todos</option>
      </select>
        <ul className="todo-list">
          {props.todoTaskList.map((todo: { id: number; task: string }) => (
            <>
              <TodoItem onTodoDelete={props.onTodoDelete} todo={todo} />
            </>
          ))}
        </ul>
      </>
    );
}