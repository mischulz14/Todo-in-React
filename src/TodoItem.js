
import "./TodoItem.css";
import { IoCheckmark, IoClose, IoEllipse } from "react-icons/io5";

export default function TodoItem(props) {
  function handleCompleted(event) {
    props.setTodoTaskList(
      props.todoTaskList.map((todo) => {
        if (todo.id === props.todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  return (
    <li className={props.todo.completed ? "line-through" : ""}>
      <div className="task-container">
        <IoEllipse />
        <span className="task-text">{props.todo.task}</span>
      </div>

      <div className="task-actions">
        <button className="done" onClick={handleCompleted}>
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
  );
}
