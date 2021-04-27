import React, { useEffect, useState} from "react";
import TabQuestionSaturn from "../../../../../data/QuestionReponseSaturn";
import BossSaturne from "../planeteSaturne/BossSaturne";
import TestQuiz from "../../../../elementQuizz/StructureQuiz2";
import testUtils from "react-dom/test-utils";
//importer Tab Question Saturn
const Saturne = () => {
  //Afficher Q & R
  //Aleatoir ?
  //Ne renvoye que la premiere question
  //useState (1) => cible l'id du premimer tableau

  let [contentQ, setcontentQ] = useState(1);

//DEMANDER COMMENT INCREMENTER LE USESTATE
  setcontentQ(() => {
      return {
        contentQ: contentQ + 1,
      };
    });
  

  return (
    <div>
      <BossSaturne />
      {TabQuestionSaturn.map((item) => {
        if (contentQ === item.id) {
          return (
            <TestQuiz
              key={item.id}
              Question={item.titre}
              Reponse1={item.reponses[0]}
              Reponse2={item.reponses[1]}
              Reponse3={item.reponses[2]}
            ></TestQuiz>
          );
        }

        setcontentQ = contentQ;
        setcontentQ++;
      })}
    </div>
  );
};

export default Saturne;
