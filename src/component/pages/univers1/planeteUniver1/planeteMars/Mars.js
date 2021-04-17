import React from "react";
import StructureQuiz from "../../../../elementQuizz/StructureQuiz";
import BossMars from "./BossMars";

const Mars = () => {
  return (
    <div>
      <BossMars />
      <StructureQuiz Question="Premiere Questioon sur Mars"></StructureQuiz>
    </div>
  );
};

export default Mars