import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PokemonCard from '../components/PokemonCard';
import '../styles/PokedexPage.css';

function PokedexPage() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then((response) => {
        setPokemons(response.data.results);
      });
  }, []);

  return (
    <div className="pokedex-container">
      <h1>Pokédex</h1>
      <div className="pokemon-list"> {}
        {pokemons.map((pokemon, index) => (
          <Link key={index} to={`/pokemon/${index + 1}`}>
            <PokemonCard name={pokemon.name} id={index + 1} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PokedexPage;
