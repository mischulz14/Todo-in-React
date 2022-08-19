
import "./TodoList.css"
import TodoItem from "./TodoItem";
export default function TodoList(props: { todoTaskList: {id:number, task: string}[]; onTodoDelete: (index: number) => void }) {

    return (
      <ul className="todo-list">
        {props.todoTaskList.map((todo: {id:number, task: string}) => (
          <>
            <TodoItem onTodoDelete={props.onTodoDelete} todo={todo} />
          </>
        ))}
      </ul>
    );
}