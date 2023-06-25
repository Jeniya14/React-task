import React from "react"
import { Checkbox } from "@mui/material";
import {IconButton} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
function Task({ tasks, deleteTask, markTaskCompleted }){
    const handleCheckboxChange = (taskId) => {
        markTaskCompleted(taskId);
      };
      return (
        <div className="task-main">
          <h2 >Task List</h2>
          {tasks.map((ele) => (
            <div key={ele.id} style={{display:"flex"}} className={ele.completed ? "task-completed" : ""} >
                    <Checkbox style={{height:"80px",width:"80px"}}
                    checked={ele.completed}
                    onChange={() => handleCheckboxChange(ele.id)}></Checkbox>
              <div  className="task-def" >
                <div> <h3>{ele.name}</h3>
                <p>{ele.description}</p></div>
                <div> <p>Due Date: {ele.dueDate}</p>
                <IconButton style={{float:"right"}} aria-label="delete"  onClick={() => deleteTask(ele.id)}>
                    <DeleteOutlineIcon fontSize="inherit" /> 
                </IconButton>
                </div>
              </div>
              <div>
              <hr />
              </div>
            </div>
          ))}
        </div>
      );
}

export default Task