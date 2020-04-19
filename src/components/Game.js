import React, { Component } from "react";
import Question from "./Question";
import { loadQuestions } from "../helpers/QuestionsHelper";

export default class Game extends Component {
  state = {
    questions: null,
    currentQuestion: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const questions = await loadQuestions();
      this.setState({
        questions,
        currentQuestion: questions[0],
        loading: false,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <>
        {this.state.loading && <div id="loader"></div>}
        {!this.state.loading && this.state.currentQuestion && (
          <Question question={this.state.currentQuestion} />
        )}
      </>
    );
  }
}
