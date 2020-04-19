import React, { useState } from "react";

export default function Question({ question, changeQuestion }) {
  const [appliedClass, setAppliedClass] = useState("nnn");
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const [answering, setAnswering] = useState(false);

  const checkAnswer = (selectedAnswer) => {
    if (answering) return;
    setAnswering(true);
    setSelectedAnswer(selectedAnswer);

    const classToApply =
      selectedAnswer === question.answer ? "correct" : "incorrect";
    setAppliedClass(classToApply);

    const bonus = selectedAnswer === question.answer ? 10 : 0;

    setTimeout(() => {
      setSelectedAnswer(-1);
      setAnswering(false);
      changeQuestion(bonus);
    }, 1000);
  };

  return (
    <div>
      <h2 dangerouslySetInnerHTML={{ __html: question.question }}></h2>
      {question.answerChoices.map((answerChoice, index) => (
        <div
          className={`choice-container ${
            selectedAnswer === index && appliedClass
          }`}
          onClick={() => checkAnswer(index)}
          key={answerChoice}
        >
          <p className="choice-prefix">{index + 1}</p>
          <p
            className="choice-text"
            dangerouslySetInnerHTML={{ __html: answerChoice }}
          ></p>
        </div>
      ))}
    </div>
  );
}
