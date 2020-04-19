import React from "react";

export default function Question({ question }) {
  return (
    <div>
      <h2>{question.question}</h2>
      {question.answerChoices.map((answerChoice, index) => (
        <div className="choice-container" key={answerChoice}>
          <p className="choice-prefix">{index + 1}</p>
          <p className="choice-text">{answerChoice}</p>
        </div>
      ))}
    </div>
  );
}
