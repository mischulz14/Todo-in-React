import "./TodoForm.css";
import {useEffect, useRef} from "react"


export default function TodoForm(props) {
    const {onTodoChange, todo, onFormSubmit, validation, onCancel, clicked} = props;
    const inputRef = useRef();

    useEffect(()=> {
      if(clicked){
        inputRef.current.focus()
      }
    }, [clicked])

  return (
    <>
      <form className="form" onSubmit={onFormSubmit}>
        <input
          className="todo-input"
          onChange={onTodoChange}
          type="text"
          placeholder="Task"
          value={todo}
          ref={inputRef}
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
