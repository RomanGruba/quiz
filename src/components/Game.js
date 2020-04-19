import React, { Component } from "react";
import Question from "./Question";

const dummyQuestion = {
  question: "What is the best programming question?",
  answerChoices: ["Java", "Javascript", "C#", "Swift"],
  answer: 1,
};

export default class Game extends Component {
  async componentDidMount() {
    const url =
      "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple";

    try {
      const res = await fetch(url);
      const { results } = await res.json();
      console.log(results);
      const questions = results.map((loadedQuestion) => {
        const formattedQuestion = {
          question: loadedQuestion.question,
          answerChoices: [...loadedQuestion.incorrect_answers],
        };
        formattedQuestion.answer = Math.floor(Math.random() * 4);
        formattedQuestion.answerChoices.splice(
          formattedQuestion.answer,
          0,
          loadedQuestion.correct_answer
        );
        return formattedQuestion;
      });
      console.log(questions);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <>
        <Question question={dummyQuestion} />
      </>
    );
  }
}
