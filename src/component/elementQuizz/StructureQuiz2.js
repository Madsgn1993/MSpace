import React, { Component } from "react";
import TabQuestionSaturn  from "../../data/QuestionReponseSaturn";

class TestQuiz extends Component {
  
  constructor() {
    super();
    this.state = {
      point: 0,
      reponseChoisis: "",
      bonnereponse: "7",
      idQuestion: 1,
    };
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

  incremente = (e) => {
    this.setState({
      point: this.state.point + 1,
    });
  };
  // FONCTION SUBMIT ( quand tu appuis sur le bouton )
  handelSubmitForm = (e) => {

    e.preventDefault();
    console.log(`ReponseChoisiFinal : ${this.state.reponseChoisis} `);
    if (this.state.reponseChoisis === this.state.bonnereponse) {
      this.incremente();
      alert("Tu as trouvé la bonne réponse ");
      
      

    } else {
      alert("Saturne à 7 anneaux ");
    }
  };

  nextQuestion = (e) => {





  }
//----------------
  render() {
    return (
      <div>
        <form id="contentQuiz" onSubmit={this.handelSubmitForm} >
          <h2>{this.props.Question}</h2>

          <div>
            <input
              type="radio"
              name="saturn"
              value={this.props.Reponse1}
              onChange={this.handleReponseDonner}
            ></input>
            <label for="reponse1">{this.props.Reponse1}</label>
          </div>
          <div>
            <input
              type="radio"
              name="saturn"
              value={this.props.Reponse2}
              onChange={this.handleReponseDonner}
            ></input>
            <label for="reponse2">{this.props.Reponse2}</label>
          </div>
          <div>
            <input
              type="radio"
              name="saturn"
              value={this.props.Reponse3}
              onChange={this.handleReponseDonner}
            ></input>
            <label for="reponse3">{this.props.Reponse3}</label>
          </div>
          <button>Valider</button>
        </form>
      </div>
    );
  }
}

export default TestQuiz;
