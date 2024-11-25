import React, { useContext } from "react";
import { PokemonContext } from "../../../context/pokemonContext";
import Card from "../Card";

const ListaPokemon = () => {
  const { searchResults } = useContext(PokemonContext);

  return (
    <div className="pokemon-list">
      {searchResults.length > 0 ? (
        searchResults.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))
      ) : (
        <p>Pokemon no encontrado</p> // Mensaje cuando no hay resultados
      )}
    </div>
  );
};

export default ListaPokemon;
