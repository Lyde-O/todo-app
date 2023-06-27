import React from 'react';

const TaskItem = ({ task, deleteTask, completeTask }) =>{
const handleDelete = () =>{
    deleteTask (task.id);
};
const handleComplete = () => {
    completeTask (task.id);
};

    return(
<li>
    <span className = {task.complete ? 'complete' : ''}>  {task.title}  </span>
    <button onClick = {handleComplete} style= {{backgroundColor:'skyblue'}}> Complete </button>
    <button onClick = {handleDelete} style= {{backgroundColor:'lightcoral'}}> Delete </button>
</li>
    );
};
export default TaskItem
