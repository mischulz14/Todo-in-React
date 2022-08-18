

export default function TodoForm(props){

    return (
      <>
        <form>
          <input type="text" value={props.todo} placeholder="Task" />
          <button>Cancel</button>
          <input type="submit" value="Add Task" />
        </form>
      </>
    );
}