import React from "react";
//so you can meke routes after installing the npm reat-routing-dom
//browserRouter as is to change the name

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./components/home";
import Pokemon from "./components/pokemon";
import IndividualPokemon from "./components/individualPokemon";
import Berries from "./components/berries";
import IndividualBerry from "./components/individualBerry";
import "./App.css";

function App() {
  return (
    //everithing that is here will gain the routing property
    //route will be the path where it takes you with that url insted of using the component , we mark the path
    //swithc prevents from multiple routes to print if the match is similar

    // to create a route specific with a value you can use : to bind information you dont know
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pokemon" exact component={Pokemon} />
          <Route path="/pokemon/:name" component={IndividualPokemon} />
          <Route path="/berries" exact component={Berries} />
          <Route path="/berries/:name" component={IndividualBerry} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
