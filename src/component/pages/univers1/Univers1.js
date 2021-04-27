import React from "react";
import BtnSaturne from "./planeteUniver1/planeteSaturne/BtnSaturne"
import BtnDinosphere from './planeteUniver1/planeteDinosphere/BtnDinosphere'
import BtnMars from './planeteUniver1/planeteMars/BtnMars'
import BtnHome from '../../BtnHome/BoutonHome'

const Univers1 = () => {
  return (
    <div id="componentUnivers1">
      <h1>L'Univers</h1>
      <BtnSaturne/>
      <BtnDinosphere/>
      <BtnMars/>
    
    </div>
  );
};

export default Univers1;
