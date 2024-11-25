import React, { createContext, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]); // Almacena la lista de Pokémon
  const [searchResults, setSearchResults] = useState([]); // Resultados de búsqueda filtrados

  const addPokemon = (pokemon) => {
    setPokemonList((prevList) => [...prevList, pokemon]);
    setSearchResults((prevResults) => [...prevResults, pokemon]);
  };    //función que añade un nuevo pokemos a las dos listas que tenemos 

  return (
    <PokemonContext.Provider value={{ pokemonList, addPokemon, searchResults, setSearchResults }}>
      {children}
    </PokemonContext.Provider>
  );
};



//Serach , listaPokemons y Formulario acceden a las funcionaes y a los estados (useContect)