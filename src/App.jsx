import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokedexPage from './pages/PokedexPage';
import PokemonDetails from './pages/PokemonDetails';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
        <Route path="/" element={<PokedexPage />} /> {}
      </Routes>
    </Router>
  );
}

export default App;
