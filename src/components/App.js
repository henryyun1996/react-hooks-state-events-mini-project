import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategories, setSelectedCategories] = useState("All")

  function handleDelete(deletedTask) {
    setTasks(tasks.filter(task => task.text !== deletedTask))
  }

  function handleCategoryClick(category) {
    setSelectedCategories(category)
  }

  const filteredCategoryList = tasks.filter(task => task.category === selectedCategories || selectedCategories === "All" )

  const newTaskCategories = CATEGORIES.filter(category => category !== "All")

  function addNewTask(newTask) {
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategories={selectedCategories}
        handleCategoryClick={handleCategoryClick} />
      <NewTaskForm 
        newTaskCategories={newTaskCategories} 
        addNewTask={addNewTask}
      />
      <TaskList 
        tasks={filteredCategoryList} 
        handleDelete={handleDelete} 
      />
    </div>
  );
}

export default App;