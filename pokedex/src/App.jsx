import { useState, useEffect } from 'react'
//import './App.css'

import Cards from "./components/Cards";
function App() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState([0]);

  useEffect(() => {
    fetchPokemon(page);
  }, [page]);

  const fetchPokemon = async (page) => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page[0]}`);
      const data = await res.json();
      setPokemon(data);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(pokemon);
  return (
    <>
      <div className="App">
      <h1>Pokemon List</h1>
      <div className="main-container ">
        <div>
          {pokemon && <Cards pokemon={pokemon} />}
        </div>
      </div>
    </div>
    </>
  )
}

export default App
