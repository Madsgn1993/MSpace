import React from "react";
import Univers1 from "../univers1/Univers1";
import { Route, NavLink } from "react-router-dom";

const BtnVersUniver = () => {
  return (
    <div>
      <ul>
        <li id="liUnivers">
          <NavLink to="/Univers1" replace>
            Demarrage Vers L'Univers 1
          </NavLink>
          <Route path="/Univers1" component={Univers1} />
        </li>
      </ul>
    </div>
  );
};

export default BtnVersUniver;
