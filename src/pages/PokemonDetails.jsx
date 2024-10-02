import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/PokemonDetails.css';

function PokemonDetails() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        setPokemon(response.data);
      });
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="pokemon-details">
      <h1>{pokemon.name.toUpperCase()}</h1>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={pokemon.name} />
      <p>Tipo: {pokemon.types.map(type => type.type.name).join(', ')}</p>
      <p>Altura: {pokemon.height}</p>
      <p>Peso: {pokemon.weight}</p>
      <Link to="/pokedex">
  <button className="back-button">Voltar para a Pokédex</button>
</Link>

    </div>
  );
}

export default PokemonDetails;
