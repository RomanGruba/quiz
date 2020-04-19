import React from "react";

export default function HUD({ score, questionNumber }) {
  return (
    <div id="hud">
      <div className="hud-item">
        <p className="hud-prefix">Question {questionNumber}/10</p>
      </div>
      <div className="hud-item">
        <p className="hud-prefix">Score</p>
        <h2 className="hud-main-text">{score}</h2>
      </div>
    </div>
  );
}
