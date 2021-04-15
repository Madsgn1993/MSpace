import React from "react";
import { Route, NavLink } from "react-router-dom";
import Saturne from "./Saturne";
import IlluPlaneteSaturne from "./IlluPlaneteSaturne";

const BtnSaturne = () => {
  return (
    <div className="rigth">
      <NavLink to="/Saturne" replace>
        <IlluPlaneteSaturne />
      </NavLink>
      <Route path="/Saturne" component={Saturne} />
    </div>
  );
};

export default BtnSaturne;
