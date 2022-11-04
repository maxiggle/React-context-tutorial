
import './App.css';
import { useState } from 'react';
import TodoView from './Todo_view.js';
import { createContext } from "react";


export const useTodoContext = createContext({});


const App = () => {
    const [tasks, setTasks] = useState([]);
    const addTask = (task) => {
      const newTasks = [...tasks, { title: task, completed: false }];
      setTasks(newTasks);
    }
    const deleteTask = (task) =>{
     const newTasks = tasks.filter(i => i.title !== task);
     setTasks(newTasks);
    }
  return (
    <div className="todoapp stack-large">
     <useTodoContext.Provider value={{ tasks, addTask, deleteTask}}>
      <TodoView/>
     </useTodoContext.Provider>
    </div>
  );
}
export default App;

