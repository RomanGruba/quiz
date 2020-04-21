import React, { useState, useEffect, useCallback } from "react";
import Question from "./Question";
import { loadQuestions } from "../helpers/QuestionsHelper";
import HUD from "./HUD";
import SaveScoreForm from "./SaveScoreForm";

export default function Game({ history }) {
  const [questions, setQuestions] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    loadQuestions().then(setQuestions).catch(console.error);
  }, []);

  // state = {
  //   questions: null,
  //   currentQuestion: null,
  //   loading: true,
  //   score: 0,
  //   questionNumber: 0,
  //   done: false,
  // };

  // async componentDidMount() {
  //   try {
  //     const questions = await loadQuestions();
  //     this.setState(
  //       {
  //         questions,
  //       },
  //       () => {
  //         this.changeQuestion();
  //       }
  //     );
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  const changeQuestion = useCallback(
    (bonus = 0) => {
      if (questions.length === 0) {
        setDone(true);
        setScore(score + bonus);
        return;
      }

      const randomQuestionIndex = Math.floor(Math.random() * questions.length);
      const currentQuestion = questions[randomQuestionIndex];
      const remainingQuestions = [...questions];
      remainingQuestions.splice(currentQuestion, 1);

      setQuestions(remainingQuestions);
      setCurrentQuestion(currentQuestion);
      setLoading(false);
      setScore(score + bonus);
      setQuestionNumber(questionNumber + 1);

      // this.setState((prevState) => ({
      //   questions: remainingQuestions,
      //   currentQuestion,
      //   loading: false,
      //   score: prevState.score + bonus,
      //   questionNumber: prevState.questionNumber + 1,
      // }));
    },
    [
      score,
      questionNumber,
      questions,
      setQuestions,
      setLoading,
      setCurrentQuestion,
      setQuestionNumber,
    ]
  );

  useEffect(() => {
    if (!currentQuestion && questions && questions.length) {
      changeQuestion();
    }
  }, [changeQuestion, currentQuestion, questions]);

  const scoreSaved = () => {
    history.push("/");
  };

  return (
    <>
      {loading && !done && <div id="loader"></div>}
      {!loading && !done && currentQuestion && (
        <>
          <HUD score={score} questionNumber={questionNumber} />
          <Question
            question={currentQuestion}
            changeQuestion={changeQuestion}
          />
        </>
      )}
      {done && <SaveScoreForm score={score} scoreSaved={scoreSaved} />}
    </>
  );
}
