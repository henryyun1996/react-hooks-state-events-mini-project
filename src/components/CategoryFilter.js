import React from "react";

function CategoryFilter({ categories, selectedCategories, handleCategoryClick }) {

  const renderCategoryButtons = categories.map((category) => (
    <button 
      key={category} 
      onClick={(e) => handleCategoryClick(category)}
      className={category === selectedCategories ? "selected" : ""}
    >
      {category}
    </button>
  ))

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderCategoryButtons}
    </div>
  );
}

export default CategoryFilter;
