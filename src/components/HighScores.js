import React, { useEffect } from "react";
import { useFirebase } from "./Firebase/FirebaseContext";

export default function HighScores() {
  const firebase = useFirebase();

  useEffect(() => {
    firebase.scores().once("value", (snapshot) => {
      const data = snapshot.val();
      const sortedScores = formatScoreData(data);
    });
  }, [firebase]);

  const formatScoreData = (firebaseScores) => {
    const scores = [];

    for (let key in firebaseScores) {
      const val = firebaseScores[key];
      val["key"] = key;
      scores.push(val);
    }
    console.log(scores);
  };

  return (
    <>
      <h1>High Scores</h1>
    </>
  );
}
