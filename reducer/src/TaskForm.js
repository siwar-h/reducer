import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName || !taskDescription) {
    alert('Veuillez remplir les deux champs');
    return;
    }
    addTask({
        id: Date.now(),
        name: taskName,
        description: taskDescription,
        completed: false
    });
    setTaskName('');
    setTaskDescription('');
    };
    return (
    <div>
        <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Name" 
        value={taskName} 
        onChange={(e) => setTaskName(e.target.value)} 
        />
        <input 
        type="text" 
        placeholder="Description " 
        value={taskDescription} 
        onChange={(e) => setTaskDescription(e.target.value)} 
      />
      <button type="submit">Add</button>
    </form>
    </div>
  )
}

export default TaskForm
