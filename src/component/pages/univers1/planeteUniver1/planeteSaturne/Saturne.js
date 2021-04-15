import React from "react";
import StructureQuiz from "../../../../elementQuizz/StructureQuiz"
import TabQuestionSaturn from "../../../../../data/QuestionReponseSaturn";
import IlluSaturne from "./IlluSaturne"
//importer Tab Question Saturn
const Saturne = () => {

  return (
    <div>
      <IlluSaturne/>
      <StructureQuiz Question="Titre Question"></StructureQuiz>
    </div>
  );
};

export default Saturne;
