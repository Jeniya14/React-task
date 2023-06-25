import React, { useState } from 'react';
import { Button } from '@mui/material';
const AddTask = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      name: taskName,
      description: description,
      dueDate: dueDate,
      completed: false
    };

    addTask(newTask);

    setTaskName('');
    setDescription('');
    setDueDate('');
  };

  return (
    <div className='addTask-main'>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="taskName">Task Name:</label>
          <input type="text" id="taskName" value={taskName} onChange={handleTaskNameChange} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea type="text" id="description" value={description} onChange={handleDescriptionChange} rows={4}/>
        </div>
        <div>
          <label htmlFor="dueDate">Due Date:</label>
          <input type="date" id="dueDate" value={dueDate} onChange={handleDueDateChange}  />
        </div>
        <br/>
        <Button type="submit" variant='contained' color='secondary' >Add Task</Button>
      </form>
    </div>
  );
};

export default AddTask;
