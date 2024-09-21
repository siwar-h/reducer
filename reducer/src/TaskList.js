import React from 'react'
import TaskItem from './TaskItem';

const TaskList = ({ tasks, updateTask, deleteTask }) => {
return (
    <div>
        <ul>
        {tasks.map(task => (
        <TaskItem 
            // key={task.id} 
            // task={task} 
            updateTask={updateTask} 
            deleteTask={deleteTask} 
        />
        ))}
    </ul>
    </div>
    )
}

export default TaskList
