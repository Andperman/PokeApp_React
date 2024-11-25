//definimos rutas
import React from "react";
import { Routes, Route } from "react-router-dom";
import Search from "./Search";
import ListaPokemon from "./ListaPokemon";
import FormularioAlta from "./FormularioAlta";
import Details from "./Details";

const Main = () => {
  return (
    <main>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={
          <>
            <Search /> 
            <ListaPokemon /> 
          </>
        } />

        {/* Ruta para agregar un nuevo Pokémon */}
        <Route path="/new" element={<FormularioAlta />} />

        {/* Ruta para ver los detalles de un Pokémon */}
        <Route path="/pokemon/:id" element={<Details />} />
      </Routes>
    </main>
  );
};

export default Main;
