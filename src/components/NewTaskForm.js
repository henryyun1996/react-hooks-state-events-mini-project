import React, { useState } from "react";

function NewTaskForm({ newTaskCategories, addNewTask }) {

  const[text, setText] = useState("")
  const [category, setCategory] = useState("")

  function onTaskFormSubmit(e) {
    e.preventDefault();
    addNewTask({ text, category })
  }

  function renderNewTask(e) {
    // console.log(e.target.value);
    setText(e.target.value);
  }

  function renderNewTaskCategory(e) {
    // console.log(e.target.value)
    setCategory(e.target.value)
  }

  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          onChange={renderNewTask}
          value={text}
        />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={renderNewTaskCategory} >
            <option></option>
          {newTaskCategories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;







// import React from "react";

// function NewTaskForm({ categories }) {

//   const newCategory = categories.map((category) => (
//      <option>{category}</option>
//   ))

//   return (
//     <form className="new-task-form">
//       <label>
//         Details
//         <input type="text" name="text" />
//       </label>
//       <label>
//         Category
//         <select name="category">
//           {newCategory}
//         </select>
//       </label>
//       <input type="submit" value="Add task" />
//     </form>
//   );
// }

// export default NewTaskForm;
