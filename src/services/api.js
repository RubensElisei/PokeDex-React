import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2';

export const getPokemons = (limit = 20) => {
  return axios.get(`${API_URL}/pokemon?limit=${limit}`);
};

export const getPokemonById = (id) => {
  return axios.get(`${API_URL}/pokemon/${id}`);
};
