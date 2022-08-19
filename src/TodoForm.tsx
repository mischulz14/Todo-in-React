import "./TodoForm.css";
import {ChangeEventHandler, FormEventHandler, MouseEventHandler} from "react";

export default function TodoForm(props: {
    onTodoChange: ChangeEventHandler<any>,
    todo: string,
    onFormSubmit: FormEventHandler<any>,
    validation: string,
    onCancel: MouseEventHandler<any>
}) {
    const {onTodoChange, todo, onFormSubmit, validation, onCancel} = props;

  return (
    <>
      <form className="form" onSubmit={onFormSubmit}>
        <input
          className="todo-input"
          onChange={onTodoChange}
          type="text"
          placeholder="Task"
          value={todo}
        />
        <div className="validation">{validation}</div>
        <div className="actions">
          <button type="button" onClick={onCancel} className="cancel">
            Cancel
          </button>
          <input className="add" type="submit" value="Add Task" />
        </div>
      </form>
    </>
  );
}
