import React from "react";

const StructureQuiz = (props) => {
  const {Reponse1, Reponse2, Reponse3, Question} = props;

  return (
    <div>

      <div id="contentQuiz">
        <h2>{Question}</h2>
        <div>
          <input type="radio"  name="saturn" id="reponse1" value="reponse1"
          checked></input>
          <label for="reponse1">{Reponse1}</label>
        </div>
        <div>
          <input type="radio" id="reponse2" name="saturn" value="reponse2"
          checked></input>
          <label for="reponse2">{Reponse2}</label>
        </div>
        <div>
          <input type="radio"  id="reponse3" name="saturn" value="reponse3"
          checked></input>
          <label for="reponse3">{Reponse3}</label>
        </div>
      
      </div>
    </div>
  );
};

export default StructureQuiz
