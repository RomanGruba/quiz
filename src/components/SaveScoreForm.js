import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SaveScoreForm({ score }) {
  const [userName, setUserName] = useState("");

  const onUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const saveHighScore = (e) => {
    e.preventDefault();
    const record = {
      name: userName,
      score,
    };
  };

  return (
    <div className="container">
      <h1>Score: {score}</h1>
      <form onSubmit={saveHighScore}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          value={userName}
          onChange={onUserNameChange}
        />
        <button type="submit" className="btn" disabled={!userName}>
          Save
        </button>
      </form>
      <Link to="/" className="btn">
        Go Home
      </Link>
    </div>
  );
}
