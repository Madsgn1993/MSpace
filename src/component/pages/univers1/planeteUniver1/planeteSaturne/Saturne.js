import React, { useEffect, useState, useRef } from "react";
import TabQuestionSaturn from "../../../../../data/QuestionReponseSaturn";
import BossSaturne from "../planeteSaturne/BossSaturne";
import TestQuiz from "../../../../elementQuizz/StructureQuiz2";
import testUtils from "react-dom/test-utils";
import { getAllByPlaceholderText } from "@testing-library/dom";
//importer Tab Question Saturn
const Saturne = () => {
  //Afficher Q & R
  //Aleatoir ?
  //Ne renvoye que la premiere question
  //useState (1) => cible l'id du premimer tableau

  const [contentQ, setcontentQ] = useState(1);

  
  // c'est le contentQ qui doit avoi ++ quand on a clicker sur le bouton

 const handleAnswer = (isCorrect) =>{
   if(isCorrect){
     const nextQuestion = contentQ + 1
     if(nextQuestion){
       setcontentQ(nextQuestion)
     }
   }
 }

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
              
            >
              
            </TestQuiz>
          );
        }
      })}
         <button onClick={handleAnswer}>Next</button> 
    
    </div>
  );
};

export default Saturne;
