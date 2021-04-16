import React from "react";
import { Route, NavLink } from "react-router-dom";
import Epilogue from "./pages/epilogue/Epilogue";

const NavBar = () => {
  return (
    <div id="contentNav">
      <ul>
        <li id="liNav">
          <NavLink to="/Epilogue" replace>
            START
          </NavLink>
          <Route path="/Epilogue" component={Epilogue} />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
