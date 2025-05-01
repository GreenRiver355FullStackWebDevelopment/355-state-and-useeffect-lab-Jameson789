import { useState, useEffect } from 'react'
//import './App.css'

import Cards from "./components/Cards";
function App() {
  const [pokemon, setPokemon] = useState({results:[]});
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

  const handleNext = () => {
    if(page[0] > 100000){
      setPage([0]);
    }else{
      setPage(prev => [prev[0] + 20]);
    }
  };

  const handleBack = () => {
    if(page[0] > 0){
      setPage(prev => [prev[0] - 20]);
    }
  }

  return (
    <>
      <div className="App">
      <h1>Pokemon List</h1>
      <div className="main-container ">
        <div>
          <Cards pokemon={pokemon.results} />
        </div>
        <div>
            <button onClick={handleBack} disabled={page === 1}>Back</button>
            <button onClick={handleNext}>Next</button>
          </div>
      </div>
    </div>
    </>
  )
}

export default App
