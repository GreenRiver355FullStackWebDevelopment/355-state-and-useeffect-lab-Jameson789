import { useState } from 'react';
import CardDetail from './CardDetail'
const Cards = ({ pokemon }) => {
    const [singlePokemon, setSinglePokemon] = useState();
    //console.log(pokemon);
    const onPokemonClick = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setSinglePokemon(data);
    }
    //console.log(singlePokemon);
    return (
        <>
          <div className="card-container">
            {pokemon.map((p, index) => (
              <div key={index} className="card" onClick={() => onPokemonClick(p.url)}>
                {p.name.charAt(0).toUpperCase() + p.name.slice(1)}
              </div>
            ))}
          </div>
      
          {singlePokemon && (
            <div className="card-detail-wrapper">
              <CardDetail singlePokemon={singlePokemon} />
            </div>
          )}
        </>
      );
}

export default Cards;