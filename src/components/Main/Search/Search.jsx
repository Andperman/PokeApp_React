import React, { useContext, useState } from "react";
import { DebounceInput } from "react-debounce-input"; 
import { PokemonContext } from "../../../context/pokemonContext";

const Search = () => {
  const { addPokemon } = useContext(PokemonContext);
  const [loading, setLoading] = useState(false); //mensaje indicador

  // Función para buscar Pokémon
  const fetchPokemon = async (inputValue) => {
    if (inputValue.trim() !== "") {
      setLoading(true); // Activa el estado de carga
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue.toLowerCase()}`);
        const data = await response.json();
        const pokemon = {
          id: data.id, 
          name: data.name, 
          image: data.sprites.front_default, 
          typeOne: data.types[0]?.type.name, 
          typeTwo: data.types[1]?.type.name || "", 
        };

        addPokemon(pokemon); // Añade el Pokémon a la lista
        setLoading(false); // Desactiva el estado de carga
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
        setLoading(false); 
      }
    }
  };

  return (
    <div className="search-container">
      <DebounceInput
        minLength={1} // Mínimo de caracteres antes de iniciar búsqueda
        debounceTimeout={2000} 
        onChange={(e) => fetchPokemon(e.target.value)} 
        placeholder="Nombre o número del Pokémon"
      />
      {loading && <p>Loading...</p>} 
    </div>
  );
};

export default Search;
