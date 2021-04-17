import React from "react";
import { Route, NavLink } from "react-router-dom";
import Mars from "./Mars";
import IlluPlaneteMars from "./IlluPlaneteMars";

const BtnMars = () => {
  return (
    <div id="linkMars">
      <NavLink to="/Mars" replace>
        <IlluPlaneteMars/>
      </NavLink>
      <Route path="/Mars" component={Mars} />
    </div>
  );
};

export default BtnMars;
