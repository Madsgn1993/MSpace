import React, { Component, useState } from "react";
import TabQuestionSaturn from "../../data/QuestionReponseSaturn";
import Saturne from "../../component/pages/univers1/planeteUniver1/planeteSaturne/Saturne";

class TestQuiz extends Component {
  constructor() {
    super();
    //this.state === state
    //C'est dans this.state que l'on déclare les state
    this.state = {
      point: 0,
      reponseChoisis: "",
      bonnereponse: "7",
      idQuestion: 1,
      maxQuestion: 5,
      btnDisabled: true,contentQ:1
    };
    //Approfndire le bind();
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    console.log(event.target.value);
  }

  handleReponseDonner = (event) => {
    this.setState({
      reponseChoisis: event.target.value,
    });
  };


  submitAnswer = (selecteReponse) => {
    this.setState({
      reponseChoisis: selecteReponse,
      btnDisabled: false,
    });
  };

  nextQuestion = () => {
    this.setState((prevState) => ({
      idQuestion: prevState.idQuestion + 1
    }));
  };

   handleAnswer = (event) =>{
   
        this.setState({contentQ:event.target.value + 1})
      
    }
 
  
  // FONCTION SUBMIT ( quand tu appuis sur le bouton )
  handelSubmitForm = (e) => {
    e.preventDefault();
    console.log(`ReponseChoisiFinal : ${this.state.reponseChoisis} `);
    if (this.state.reponseChoisis === this.state.bonnereponse) {
      alert("Tu as trouvé la bonne réponse ");
    } else {
      alert("Saturne à 7 anneaux ");
    }
  };

  //----------------
  render() {
    return (
      <div>
        <form id="contentQuiz" onSubmit={this.handelSubmitForm}>
          <h2>{this.props.Question}</h2>

          <div>
            <input
              type="radio"
              name="saturn"
              value={this.props.Reponse1}
              onChange={this.handleReponseDonner}
              onClick={() => this.submitAnswer(this.props.Reponse1)}
            ></input>
            <label for="reponse1">{this.props.Reponse1}</label>
          </div>
          <div>
            <input
              type="radio"
              name="saturn"
              value={this.props.Reponse2}
              onChange={this.handleReponseDonner}
              onClick={() => this.submitAnswer(this.props.Reponse2)}
            ></input>
            <label for="reponse2">{this.props.Reponse2}</label>
          </div>
          <div>
            <input
              type="radio"
              name="saturn"
              value={this.props.Reponse3}
              onChange={this.handleReponseDonner}
              onClick={() => this.submitAnswer(this.props.Reponse3)}
            ></input>
            <label for="reponse3">{this.props.Reponse3}</label>
          </div>
          <button disabled={this.state.btnDisabled}>
            Validez
          </button>
        </form>
        {/* <button onClick={this.handleAnswer}>Next</button> */}
      </div>
    );
  }
}

export default TestQuiz;
