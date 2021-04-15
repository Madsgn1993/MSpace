import React from "react";
import { Route, NavLink } from "react-router-dom";
import Saturne from "./Saturne";

const BtnSaturne = () => {
  return (
    <ul>
      <li>
        <NavLink to="/Saturne" replace>
          Quizz Saturne
        </NavLink>
        <Route path="/Saturne" component={Saturne} />
      </li>
    </ul>
  );
};

export default BtnSaturne;
