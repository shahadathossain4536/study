import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBGIysJjLCycUaZ-2cgN4Nc10oQRplLIho",
  authDomain: "study-360-92833.firebaseapp.com",
  projectId: "study-360-92833",
  storageBucket: "study-360-92833.appspot.com",
  messagingSenderId: "674379570007",
  appId: "1:674379570007:web:3f1cc9f0e72e7b056a7c12",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
