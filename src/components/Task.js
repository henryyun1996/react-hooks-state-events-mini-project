import React from "react";

function Task({ task, category, handleDelete }) {

  function handleDeleteClick() {
    handleDelete(task)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{task}</div>
      <button className="delete" onClick={handleDeleteClick}>X</button>
    </div>
  );
}

export default Task;