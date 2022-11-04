import { useContext, useState } from "react";
import { useTodoContext } from "./App";

const TodoView = ()=> {
    const {tasks, addTask} = useContext(useTodoContext);

    const [task, setTask] = useState('');
   const handleChanges = event => {
      setTask((e) => event.target.value);
    }
  
    const onSubmit = (e)=> {
      e.preventDefault();
      if(!task) return;
      e.target.reset();
    }
    return (
        <div>
        <h1>Pieces Todo</h1>
      
        <form onSubmit={(e)=> onSubmit(e)} action="self">
          <h2 className="label-wrapper">
          </h2>
  
          <input
            type="text"
            id="new-todo-input"
            className="input__lg"
            name="text"
            autoComplete="off"
            onChange={handleChanges}
          />
          
          <button type="submit" className="btn btn__primary btn__lg"
            onClick={()=> addTask(task)}>
            Add
          </button>
        </form>
        <h2 id="list-heading">
          3 tasks remaining
        </h2>
        <ul
          role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          { (tasks || []).map((t, idx) => <TaskTemplate {...t} key={idx}/>) }
        </ul>
        </div>
    )
}




const TaskTemplate = ({ title, completed })=> {
    const { deleteTask } = useContext(useTodoContext);
    return (
    <li className="todo stack-small">
    <div className="c-cb">
    <input id="todo-0" type="checkbox" defaultChecked={completed} />
    <label className="todo-label" htmlFor="todo-0">
    {title}
    </label>
    </div>
    <div className="btn-group">
    <button type="button" className="btn toggle-btn">
    Edit <span className="visually-hidden">{title}</span>
    </button>
    <button type="button" className="btn btn__danger toggle-btn" onClick={() => deleteTask(title)}>
    Delete <span className="visually-hidden" ></span>
    </button>
    </div>
    </li>
    )
}
export default TodoView