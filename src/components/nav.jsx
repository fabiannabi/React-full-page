import React from "react";
//as we did from the app , we need to import the route dom to tag the links with the specific route
//its something called link

//its a tag that need to contain the element that it will be leading you to the page
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="nav">
        <img src="/pokeball.png" alt="pokeball" />
        <ul className="nav-links">
          <Link className="nav-style" to="/">
            <li>Home</li>
          </Link>
          <Link className="nav-style" to="/pokemon">
            <li>Pokemon</li>
          </Link>
          <Link className="nav-style" to="/berries">
            <li>Berries</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
