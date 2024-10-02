import React from 'react';
import '../styles/PokemonCard.css';


function PokemonCard({ name, id }) {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="pokemon-card">
      <img src={imageUrl} alt={name} />
      <p>{name.toUpperCase()}</p>
    </div>
  );
}

export default PokemonCard;
