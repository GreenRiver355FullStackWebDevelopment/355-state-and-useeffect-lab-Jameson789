const Cards = ({ pokemon }) => {
    console.log(pokemon);
    return (
        <div className="cards">
            {pokemon.map((p, index) => (
                <div key={index} className="card">
                {p.name}
                </div>
        ))}
        </div>
    )
}

export default Cards;