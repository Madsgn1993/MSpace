import React from "react";
import StructureQuiz from "../../../../elementQuizz/StructureQuiz"
import TabQuestionSaturn from "../../../../../data/QuestionReponseSaturn";
import IlluPlaneteSaturne from "./IlluPlaneteSaturne"
//importer Tab Question Saturn
const Saturne = () => {

  return (
    <div>
      
      <IlluPlaneteSaturne/>
      <StructureQuiz Question="Titre Question"></StructureQuiz>
    </div>
  );
};

export default Saturne;
