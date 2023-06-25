import React, { useState } from 'react';
import Task from './component/task';
import AddTask from './component/addtask';
import "./component/task.css"

function App () {
  const [tasks, setTasks] = useState([{
    id: 1,
    name: 'Task 1',
    description: 'This is the description of Task 1.',
    dueDate: '2023-06-30',
    completed: false
  },
  {
    id: 2,
    name: 'Task 2',
    description: 'This is the description of Task 2.',
    dueDate: '2023-07-03',
    completed: false
  }, {
    id: 3,
    name: 'Task 3',
    description: 'This is the description of Task 3.',
    dueDate: '2023-07-04',
    completed: false
  }, {
    id: 4,
    name: 'Task 4',
    description: 'This is the description of Task 4.',
    dueDate: '2023-07-06',
    completed: false
  }, {
    id: 5,
    name: 'Task 5',
    description: 'This is the description of Task 5.',
    dueDate: '2023-07-07',
    completed: false
  },]);

  const addTask = (newTask) => {
      setTasks([newTask, ...tasks]);
  
  };
  const deleteTask = (taskId) => {
    const confirmed = window.confirm('Are you sure you want to delete this task?');
    if (confirmed) {
      setTasks(tasks.filter((task) => task.id !== taskId));
    }
  };  
  const markTaskCompleted = (taskId) => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.map(task => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      const completedTasks = updatedTasks.filter(task => task.completed);
      const incompletedTasks = updatedTasks.filter(task => !task.completed);
      return [...incompletedTasks, ...completedTasks];
    });
  };
  return (
    <div >
    <h1 style={{textAlign:"center",marginBottom:"50px"}}>Task Manager</h1>
    <div className='d-flex'>
    <AddTask addTask={addTask} />
    <Task tasks={tasks} deleteTask={deleteTask} markTaskCompleted={markTaskCompleted}  />
    </div>
   
  </div>
  );
}

export default App;
