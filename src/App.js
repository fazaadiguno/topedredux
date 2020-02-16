import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MyPokemon from "./pages/MyPokemon";
import PokemonDetails from "./pages/PokemonDetails";
import PokemonList from "./pages/PokemonList";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Route path="/" exact component={PokemonList} />
      <Route path="/mypokemon" component={MyPokemon} />
      <Route path="/pokemondetails/:id" component={PokemonDetails} />
    </Router>
  );
}

export default App;
