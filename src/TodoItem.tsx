import {Dispatch, SetStateAction, useState} from "react";
import "./TodoItem.css";
import { IoCheckmark, IoClose, IoEllipse } from "react-icons/io5";

export default function TodoItem(props: {onTodoDelete: (index: number) => void, todo: {id: number, task: string}}) {
  const [completed, setCompleted]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
  return (
    <>
      <li key={props.todo.id} className={completed ? "line-through" : ""}>
        <div className="task-container">
        <IoEllipse />
        <span className="task-text">{props.todo.task}</span>
        </div>

        <div className="task-actions">
          <button
            className="done"
            onClick={() => setCompleted((prev: boolean) => !prev)}
          >
            <IoCheckmark />
          </button>
          <button
            className="delete"
            onClick={() => props.onTodoDelete(props.todo.id)}
          >
            <IoClose />
          </button>
        </div>
      </li>
    </>
  );
}
