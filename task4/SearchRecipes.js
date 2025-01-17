import React, { useState, useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';

const SearchRecipes = () => {
  const [category, setCategory] = useState('');
  const { filterByCategory } = useContext(RecipeContext);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    filterByCategory(e.target.value);
  };

  return (
    <div>
      <h1>Search Recipes</h1>
      <select onChange={handleCategoryChange} value={category}>
        <option value="">All</option>
        <option value="Dessert">Dessert</option>
        <option value="Main">Main</option>
        <option value="Appetizer">Appetizer</option>
      </select>
    </div>
  );
};

export default SearchRecipes;
