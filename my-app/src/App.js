

import React, {useState} from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => { 
    setTasks([...tasks, task]);
   }; 

  const deleteTask = (taskId) => { 
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
     setTasks(updatedTasks);
     };
     
     const completeTask = (taskId) => {
      alert ("add new task")
       const updatedTasks = tasks.map((task) => { 
        if (task.id === taskId) {
           return { ...task, completed: true }; 
          } 
          return task; 
        }); 
        setTasks(updatedTasks);
       }; 

       return (
        <div>
          <div className='task-container'> 
        <h1>Task Manager</h1> 
        <TaskForm addTask={addTask} /> 
         </div>
         <div className='task-result'>
         <TaskList tasks={tasks} deleteTask={deleteTask} completeTask={completeTask} />
         </div>
        </div>
       
         );
};

export default App;
