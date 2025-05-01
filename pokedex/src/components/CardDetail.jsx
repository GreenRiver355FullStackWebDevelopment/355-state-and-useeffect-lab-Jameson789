const CardDetail = ({ singlePokemon }) => {
    console.log(singlePokemon)
    return (
      <div className="card-detail">
        <h2>{singlePokemon.name.charAt(0).toUpperCase() + singlePokemon.name.slice(1)}</h2>
        <img src={singlePokemon.sprites.front_default}></img>
        <p>Height: {singlePokemon.height}</p>
        <p>Weight: {singlePokemon.weight}</p>
        <p>
        Type: {singlePokemon.types.map((typeObj, index) => (
            <span key={index}>{typeObj.type.name}{index < singlePokemon.types.length - 1 ? ', ' : ''}</span>
        ))}
        </p>

      </div>
    );
  };
  export default CardDetail;