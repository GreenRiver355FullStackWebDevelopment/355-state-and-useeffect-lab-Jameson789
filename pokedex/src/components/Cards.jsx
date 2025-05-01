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
        <div className="cards">
            {pokemon.map((p, index) => (
                <div key={index} className="card" onClick={() => onPokemonClick(p.url)}>
                {p.name.charAt(0).toUpperCase() + p.name.slice(1)}
                </div>
            ))}

            {singlePokemon && <CardDetail singlePokemon={singlePokemon}></CardDetail>}
        </div>
    )
}

export default Cards;