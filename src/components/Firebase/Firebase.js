import app from "firebase/app";
import "firebase/database";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: "1:629590247514:web:d5f16e8f6af990f8c33063",
  measurementId: "G-JKKYG0YQQ9",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.database();
  }
  scores = () => this.db.ref("scores");
}

export default Firebase;
