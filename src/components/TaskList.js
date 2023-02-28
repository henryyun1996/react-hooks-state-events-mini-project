import React from "react";
import Task from "./Task.js"

function TaskList({ tasks, handleDelete }) {

  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task 
          key={task.text} 
          task={task.text} 
          category={task.category} 
          handleDelete={handleDelete} 
        />
      ))}
    </div>
  );
}

export default TaskList;