import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Pokemon() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        const myJason = response.json();
        return myJason;
      })
      .then((myJason) => {
        const data = myJason.results;
        setPokemons(data);
      });
  };

  return (
    <div>
      <div className="pokemon-list">
        {pokemons.map((pokemon) => (
          <div
            style={{ textTransform: "capitalize" }}
            className="pokemon-card"
            key={pokemon.url}
          >
            <Link className="pokemon-link" to={`/pokemon/${pokemon.name}`}>
              {pokemon.name}
            </Link>
            <img key={pokemon.name} src="/sport-ball.png" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pokemon;
