import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SearchRecipes from './components/SearchRecipes';
import ViewRecipes from './components/ViewRecipes';
import AddRecipes from './components/AddRecipes';

function App() {
  return (
    <Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/search-recipes" element={<SearchRecipes />} />
    <Route path="/view-recipes" element={<ViewRecipes />} />
    <Route path="/add-recipe" element={<AddRecipes/>} />
  </Routes>
</Router>

  );
}

export default App;
