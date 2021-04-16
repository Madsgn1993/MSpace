import React from "react";
import { Switch, Route } from "react-router";
import BtnVersUniver from "./BtnVersUniver";
import Univers1 from "../univers1/Univers1";

const Epilogue = () => {
  return (
    <div className="couleur1 height100">
      <h1>Epilogue</h1>
      <div className="bg-para">
        <p className="couleur2">
          Dans une galaxie parallèle, ShurriNashi, jeune guerrier du Clan Nashi
          parti à la chasse dans la forêt Nouri.
        </p>
        <p className="couleur2">
          Quand tous à coup.. Un mystérieux portail apparait et le téléporter
          dans un univers lointain.{" "}
        </p>
        <p className="couleur2">
          Il devra affronter les mondes mystérieux pour pour pouvoir, un jour
          retourner au près des siens.{" "}
        </p>
      </div>
      <BtnVersUniver />
    </div>
  );
};

export default Epilogue;
