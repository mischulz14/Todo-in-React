

export default function TodoForm(props){

    return (
      <>
        <form onSubmit={props.onFormSubmit}>
          <input onChange={props.onTodoChange} type="text" placeholder="Task" value={props.todo} />
          <button>Cancel</button>
          <input type="submit" value="Add Task" />
          <div>{props.validation}</div>
        </form>
      </>
    );
}