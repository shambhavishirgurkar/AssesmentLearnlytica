import React from 'react';

const AddRecipes = () => {
  return (
    <div>
      <h2>Add Recipe</h2>
      <form>
        <div>
          <label>Recipe Name:</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Category:</label>
          <select name="category">
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="dessert">Dessert</option>
          </select>
        </div>
        <div>
          <label>Ingredients:</label>
          <input type="text" name="ingredients" placeholder="Comma-separated" />
        </div>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipes;
