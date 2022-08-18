import "./TodoForm.css";

export default function TodoForm(props) {
  return (
    <>
      <form className="form" onSubmit={(event) => props.onFormSubmit(event)}>
        <input
          className="todo-input"
          onChange={props.onTodoChange}
          type="text"
          placeholder="Task"
          value={props.todo}
        />
        <div className="validation">{props.validation}</div>
        <div className="actions">
          <button onClick={props.onCancel} className="cancel">
            Cancel
          </button>
          <input className="add" type="submit" value="Add Task" />
        </div>
      </form>
    </>
  );
}
