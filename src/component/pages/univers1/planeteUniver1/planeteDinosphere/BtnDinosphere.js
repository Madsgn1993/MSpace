import React from "react";
import { Route, NavLink } from "react-router-dom";
import Dinosphere from "./Dinosphere";
import IlluPlaneteDinosphere from "./IlluPlaneteDinosphere";

const BtnDinosphere = () => {
  return (
    <div className="left">
      <NavLink to="/Dinosphere" replace>
        <IlluPlaneteDinosphere />
      </NavLink>
      <Route path="/Dinosphere" component={Dinosphere} />
    </div>
  );
};

export default BtnDinosphere;
