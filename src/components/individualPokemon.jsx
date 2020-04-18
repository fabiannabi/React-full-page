import React, { useState, useEffect } from "react";
//when you link something you get the match property to use on your function as prop

function IndividualPokemon({ match }) {
  const [pokemon, setPokemon] = useState({
    sprites: {},
    moves: [],
    types: [],
  });

  useEffect(() => {
    getPokemonInfo();
  }, []);

  const getPokemonInfo = async () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.name}`)
      .then((response) => {
        const myJason = response.json();
        return myJason;
      })
      .then((myjason) => {
        const data = myjason;
        setPokemon(data);
      });
  };

  return (
    <div>
      <div className="pokemoninfo">
        <div className="info-wraper">
          <h1>{pokemon.name}</h1>
          <div className="info">
            <div className="pokemon-img">
              <img src={pokemon.sprites.front_default} alt="pokemon" />
              <img src={pokemon.sprites.front_shiny} alt="pokemon" />
            </div>
            <div className="pokemon-stats">
              <p>📏 :{pokemon.height} Inches</p>
              <p>⚖️ : {pokemon.weight} Lbs</p>
              <div
                style={{ textTransform: "capitalize" }}
                className="pokemon-moveList"
              >
                {pokemon.moves
                  .map((move) => <li key={move.move.name}>{move.move.name}</li>)
                  .slice(0, 3)}
              </div>
              <div className="pokemon-type">
                {pokemon.types.map((move) => (
                  <div
                    key={move.type.name}
                    className={`pokemon-type-single ${move.type.name}`}
                  >
                    {move.type.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default IndividualPokemon;
