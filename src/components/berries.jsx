import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Berries() {
  const [berries, setBerries] = useState([]);

  useEffect(() => {
    getBerries();
  }, []);

  const getBerries = async () => {
    fetch("https://pokeapi.co/api/v2/berry")
      .then((response) => {
        const myJason = response.json();
        return myJason;
      })
      .then((myJason) => {
        const data = myJason.results;
        setBerries(data);
      });
  };

  return (
    <div>
      <div className="berry-list">
        {berries.map((berrie) => (
          <div
            key={berrie.name}
            style={{ textTransform: "capitalize" }}
            className="berry-card"
          >
            <Link
              className="berry-link"
              key={berrie.name}
              to={`/berries/${berrie.name}`}
            >
              {berrie.name}
            </Link>
            <img src="/apicot-berry.png" alt="berry" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Berries;
