import React from "react";
import StructureQuiz from "../../../../elementQuizz/StructureQuiz"
import TabQuestionSaturn  from "../../../../../data/QuestionReponseSaturn";
import BossSaturne from "../planeteSaturne/BossSaturne"
//importer Tab Question Saturn
const Saturne = () => {

  return (
    <div>
      
      <BossSaturne/>
      <StructureQuiz Question="Titre Question"></StructureQuiz>
    </div>
  );
};

export default Saturne;
