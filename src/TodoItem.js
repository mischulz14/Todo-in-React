import { useState } from "react";

export default function TodoItem(props){
    const [completed, setCompleted] = useState(false);
return (
  <>
    <li key={props.todo.id} className={completed && "tachado"}>
      {props.todo.task}
    </li>
    <button onClick={() => props.onTodoDelete(props.todo.id)}>Delete</button>
    <button onClick={() => setCompleted((prev) => !prev)}>Done</button>
  </>
);
}