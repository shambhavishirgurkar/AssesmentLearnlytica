import React, { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';

const ViewRecipes = () => {
  const { fetchedRecipes } = useContext(RecipeContext);

  return (
    <div>
      {fetchedRecipes.length === 0 ? <p>No recipes available.</p> : fetchedRecipes.map(recipe => (
        <div key={recipe.idMeal}><h3>{recipe.strMeal}</h3><img src={recipe.strMealThumb} alt={recipe.strMeal} /></div>
      ))}
    </div>
  );
};

export default ViewRecipes;
