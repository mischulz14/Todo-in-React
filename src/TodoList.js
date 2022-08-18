
import "./TodoList.css"
import TodoItem from "./TodoItem";
export default function TodoList(props){

    return (
      <ul>
        {props.todoTaskList.map((todo) => (
          <>
            <TodoItem onTodoDelete={props.onTodoDelete} todo={todo} />
          </>
        ))}
      </ul>
    );
}