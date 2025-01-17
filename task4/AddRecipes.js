import React, { useState, useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';

const AddRecipes = () => {
  const [recipeName, setRecipeName] = useState('');
  const [category, setCategory] = useState('');
  const { addRecipe } = useContext(RecipeContext);

  const handleSubmit = () => {
    const newRecipe = {
      strMeal: recipeName,
      category: category,
      strMealThumb: 'default_image.jpg',
      fromAPI: false,
    };

    addRecipe(newRecipe);
    setRecipeName('');
    setCategory('');
  };

  return (
    <div>
      <h1>Add New Recipe</h1>
      <input
        type="text"
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
        placeholder="Recipe Name"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
      />
      <button onClick={handleSubmit}>Add Recipe</button>
    </div>
  );
};

export default AddRecipes;
