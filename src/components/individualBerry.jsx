import React, { useState, useEffect } from "react";
//when you link something you get the match property to use on your function as prop

function IndividualBerry({ match }) {
  const [berry, setBerry] = useState({
    flavors: [],
    firmness: {},
  });

  useEffect(() => {
    getBerryInfo();
  }, []);

  const getBerryInfo = async () => {
    fetch(`https://pokeapi.co/api/v2/berry/${match.params.name}`)
      .then((response) => {
        const myJason = response.json();
        return myJason;
      })
      .then((myjason) => {
        const data = myjason;
        setBerry(data);
      });
  };

  return (
    <div>
      <div className="Berryinfo">
        <div className="berry-info-wraper">
          <h1>{berry.name}</h1>
          <div className="berry-info">
            <div className="berry-img">
              <img src="/apicot-berry.png" alt="berry" />
              <img src="/pecha-berry.png" alt="berry" />
            </div>
            <div className="berry-stats">
              <p>Firmness : {berry.firmness.name}</p>
              <p>Smoothness : {berry.smoothness} </p>
              <div className="berry-flavors">
                {berry.flavors
                  .map((flavor) => (
                    <li key={flavor.flavor.name}>{flavor.flavor.name}</li>
                  ))
                  .slice(0, 4)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default IndividualBerry;
