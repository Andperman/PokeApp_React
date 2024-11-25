import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { PokemonProvider } from "./context/pokemonContext"; 
import Header from "./components/Header"; 
import Main from "./components/Main"; 

function App() {
  return (
    <PokemonProvider> 
      <Router>
        <Header /> 
        <Main /> 
      </Router>
    </PokemonProvider>
  );
}

export default App;
