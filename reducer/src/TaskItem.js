import React from 'react'

const TaskItem = ({ task, updateTask, deleteTask }) => {
    const handleCompletion = () => {
        updateTask({ ...task, completed: !task.completed });
        };
    return (
    <div>
        <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        <h3>{task.name}</h3>
        <p>{task.description}</p>
        <button onClick={handleCompletion}>
        {task.completed ? ' non terminé' : 'terminé'}
        </button>
        <button onClick={() => deleteTask(task.id)}>delete</button>
    </li>
    </div>
    )
}

export default TaskItem
